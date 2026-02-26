import { fetchIconByName } from "@azul/icons"
import type { RequestHandler } from "./$types"
import { error } from "@sveltejs/kit"
import { ENV_MODE } from "$env/static/private"

export const GET: RequestHandler = async ({
	request,
	url,
	platform,
	getClientAddress,
	locals: { supabase }
}) => {
	const clientId = url.searchParams.get("client_id")
	const ip = getClientAddress()
	const origin = request.headers.get("origin") || ""

	// 1. Determine Limiter & Tier
	const limiter =
		platform &&
		(clientId && ENV_MODE !== "dev"
			? platform.env.ITRI_ICON_LIMITER
			: platform.env.FREE_ICON_LIMITER)

    if (!limiter) throw error(500, "Rate limiter not configured")

	const { success } = await limiter.limit({ key: ip })
	if (!success) throw error(429, "Too many requests")

	if (clientId) {
		const { data: client, error: dbError } = await supabase
			.from("clients")
			.select("metadata")
			.eq("id", clientId)
			.single()

		if (dbError || !client) throw error(401, "Invalid Client")

		const allowedHosts = client.metadata?.allowed_hosts || []
		if (!allowedHosts.includes(origin)) {
			throw error(403, "Origin Unauthorized")
		}
	}

	const iconName = url.searchParams.get("ic")
	if (!iconName) throw error(400, "Missing icon name")

	const data = fetchIconByName(iconName)

	if (data) {
		return new Response(Buffer.from(data, "base64"), {
			headers: {
				"Content-Type": "image/svg+xml",
				"Access-Control-Allow-Origin": "*"
			}
		})
	} else {
		return new Response("Not Found", { status: 404 })
	}
}
