// Get request that receives searchparam ic and fetches the registry data and returns it as base64
import { fetchIconByName } from '@azul/icons'
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    const data = fetchIconByName(url.searchParams.get('ic') || '');

    if (data) {
        const base64Content = data.split(',')[1];
        const buffer = Buffer.from(base64Content, 'base64');

        return new Response(buffer, {
            headers: {
                'Content-Type': 'image/svg+xml',
                'Content-Length': buffer.length.toString()
            }
        });
    } else {
        return new Response('Not Found', { status: 404 });
    }
};