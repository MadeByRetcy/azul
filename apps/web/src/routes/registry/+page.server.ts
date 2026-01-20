import { loadLineIcons} from '@azul/icons'

export const load = async () => {
    const lineIcons = loadLineIcons() 

    return { lineIcons }
}