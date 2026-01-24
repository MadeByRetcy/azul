import { fetchIconByName } from '@azul/icons'
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    const data = fetchIconByName(url.searchParams.get('ic') || '');

    if (data) {
        return new Response(Buffer.from(data, "base64"), {
            headers: {
                'Content-Type': 'image/svg+xml',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } else {
        return new Response('Not Found', { status: 404 });
    }
};