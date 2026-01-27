import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
import { PADDLE_API_KEY, PADDLE_API_URL } from "$env/static/private"

export const load: PageServerLoad = async ({ locals: { safeGetSession, supabase } }) => {
	const { session } = await safeGetSession()

	if (!session?.access_token.length) {
		redirect(308, "/itri/auth")
	}

	const { data, error } = await supabase
		.from("subscriptions")
		.select("cust_id")
		.eq("id", session.user.id)

	if (error) {
		console.error(error.message)
		redirect(307, "/itri/auth")
	}

	if (!data || !data.length) {
		redirect(308, "/itri/checkout")
	}

	// Explicitly verify subscription data exists and has required fields
	const subscription = data[0]
	if (!subscription?.cust_id) {
		redirect(308, "/itri/checkout")
	}

	const paddleResponse = await fetch(
		`https://${PADDLE_API_URL}.paddle.com/customers/${subscription.cust_id}/portal-sessions`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${PADDLE_API_KEY}`
			}
		}
	)

	if (!paddleResponse.ok) {
		redirect(308, "/itri/checkout")
	}

	const {
		data: paddleData
	}: {
		data: {
			customer_id: string
			urls: {
				general: {
					overview: string
				}
			}
		}
	} = await paddleResponse.json()

	// Validate Paddle response has all required fields
	if (!paddleData?.customer_id || !paddleData?.urls?.general?.overview) {
		await supabase.from("subscriptions").delete().eq("id", session.user.id)
		redirect(308, "/itri/checkout")
	}

	return {
		paddleDash: paddleData.urls.general.overview
	}
}
