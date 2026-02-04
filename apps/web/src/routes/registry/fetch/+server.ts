import { fetchIconByName } from "@azul/icons"
import type { RequestHandler } from "./$types"
import { error } from "@sveltejs/kit"

export const GET: RequestHandler = async ({ url, platform, getClientAddress }) => {
    // Rate Limit Check
    if (platform) {
        const ip = getClientAddress()
        const { success } = await platform.env.AZUL_ICON_LIMITER.limit({ key: ip })
        if (!success) {
            throw error(429, "Too many requests")
        }
    }

	const data = fetchIconByName(url.searchParams.get("ic") || "")

	if (data) {
		return new Response(Buffer.from(data, 'base64'), {
			headers: {
				"Content-Type": "image/svg+xml",
				"Access-Control-Allow-Origin": "*"
			}
		})
	} else {
		return new Response("Not Found", { status: 404 })
	}
}
