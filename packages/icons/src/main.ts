const iconRegistry: Record<string, string> = import.meta.glob("./line/*.svg", { as: "raw", eager: true }) as Record<string, string>;

const iconNames = Object.keys(iconRegistry).map(path => {
  return path.split("/").pop()?.replace(".svg", "") || "";
}).filter(Boolean);

export function loadLineIcons(): string[] {
  return iconNames;
}

export function fetchIconByName(name: string): string | undefined {
  const iconPath = `./line/${name}.svg`;
  const icon = iconRegistry[iconPath];
  
  if (!icon) return undefined;
  
  const base64 = btoa(icon);
  return `data:image/svg+xml;base64,${base64}`;
}
