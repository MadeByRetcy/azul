import { fetchIconByName } from '@azul/icons'
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    const data = fetchIconByName(url.searchParams.get('ic') || '');

    if (data) {
        // Decode base64 data URL to get raw SVG content, removing this results in issues with mime types
        const base64Content = data.split(',')[1];
        const buffer = Buffer.from(base64Content, 'base64');

        return new Response(buffer, {
            headers: {
                'Content-Type': 'image/svg+xml',
                'Content-Length': buffer.length.toString(),
                'Access-Control-Allow-Origin': '*'
            }
        });
    } else {
        return new Response('Not Found', { status: 404 });
    }
};