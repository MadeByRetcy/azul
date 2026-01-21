/* 
  Cloudflare Workers doesn't support FS access, so we use Vite's import.meta.glob to import all SVGs at build time

  NOTE: You would get an error in your IDE about glob, but it works fine during build and runtime as it is imported in a Vite environment (Web app)
*/
const iconRegistry: Record<string, string> = import.meta.glob("./line/*.svg", { as: "raw", eager: true }) as Record<string, string>;

// Extract icon names from the file names in the current directory
const iconNames = Object.keys(iconRegistry).map(path => {
  return path.split("/").pop()?.replace(".svg", "") || "";
}).filter(Boolean);

/** 
 * Returns a list of all available line icon names.
 * @returns An array of icon names.
*/
export function loadLineIcons(): string[] {
  return iconNames;
}

/**
 * Fetches an icon by its name and returns it as a base64-encoded data URL.
 * @param name - The name of the icon to fetch.
 * @returns A base64-encoded data URL of the SVG icon, or undefined if not found.
 */
export function fetchIconByName(name: string): string | undefined {
  const iconPath = `./line/${name}.svg`;
  const icon = iconRegistry[iconPath];
  
  if (!icon) return undefined;

  /* 
    Convert SVG to base64 to use as data URL.
    
    To successfully render SVGs in all browsers, we need to encode them in base64 and 
    then use mask-image to make it easy to deal with.
  */
  const base64 = btoa(icon);
  return `data:image/svg+xml;base64,${base64}`;
}
