import { loadIcons } from '@azul/icons'

export const load = async () => {
	const lineIcons = loadIcons()

	return { lineIcons }
}
