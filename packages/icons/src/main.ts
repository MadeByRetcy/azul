import fs from "fs"
import path from "path"

export function loadLineIcons(): string[] {
  let iconList: string[] = []
  fs.readdirSync(path.join(import.meta.dirname, "./line")).forEach(file => {
    const iconName = file.replace(".svg", "")
    iconList.push(iconName)
  })

  return iconList
}

export function fetchIconByName(name: string): string | undefined {
  const iconPath = path.join(import.meta.dirname, "./line/", `${name}.svg`)
  const icon = fs.readFileSync(iconPath, "utf-8")
  const base64 = btoa(icon);

  return `data:image/svg+xml;base64,${base64}`
}
