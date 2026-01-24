/* 
  Cloudflare Workers doesn't support FS access, so we use Vite's import.meta.glob to import all SVGs at build time

  NOTE: You would get an error in your IDE about glob if you remove @ts-ignore, but it works fine during build and runtime as it is imported in a Vite environment (Web app)
*/

const iconRegistry: {
  line: Record<string, string>
  duo: Record<string, string>
  bold: Record<string, string>
  boldDuo: Record<string, string>
} = {
  // @ts-ignore
  line: import.meta.glob("./line/*.svg", {
   	as: "raw",
   	eager: true,
   }) as Record<string, string>,
  // @ts-ignore
  duo: import.meta.glob("./duotone/*.svg", {
    as: "raw",
    eager: true,
  }) as Record<string, string>,
  // @ts-ignore
  bold: import.meta.glob("./bold/*.svg", {
    as: "raw",
    eager: true,
  }) as Record<string, string>,
  // @ts-ignore
  boldDuo: import.meta.glob("./boldDuo/*.svg", {
    as: "raw",
    eager: true,
  }) as Record<string, string>
}

interface iconListStruct {
  name: string
  duotone: boolean
  bold: boolean
  boldDuo: boolean
}

/**
 * Returns a list of all available line icon names by checking all four dirs.
 * @returns An array of icon names.
 */
export function loadIcons(): iconListStruct[] {

  const iconList = iconRegistry.line

  let variantList: iconListStruct[] = []

  Object.keys(iconList).map((icon) => {
    const iconName = (path: string) => path.split("/").at(-1)?.split(".")[0] || ""
    const lineIconName = iconName(icon)

    const iconVariant = {
      name: lineIconName,
      duotone: Object.keys(iconRegistry.duo).some((di) => iconName(di) === lineIconName),
      bold: Object.keys(iconRegistry.bold).some((bi) => iconName(bi) === lineIconName),
      boldDuo: Object.keys(iconRegistry.boldDuo).some((bdi) => iconName(bdi) === lineIconName)
    }

    variantList.push(iconVariant)
  })

	return variantList
}

/**
 * Fetches an icon by its name and returns it as a base64-encoded data URL.
 * @param name - The name of the icon to fetch.
 * @returns A base64-encoded data URL of the SVG icon, or undefined if not found.
 */
export function fetchIconByName(name: string): string | undefined {
	const iconPath = `./line/${name}.svg`
	const icon = iconRegistry.line[iconPath]

	if (!icon) return undefined

  /* 
    Convert SVG to base64.
  
    To successfully render SVGs in all browsers as data URI with the correct MIME Type.
  */
	return btoa(icon)
}
