import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { env } from "$env/static/private"

export const POST: RequestHandler = async ({ request, locals: { supabase, safeGetSession } }) => {
	// Verify user is authenticated
	const { session, user } = await safeGetSession()
	if (!session || !user) {
		return json(
			{
				success: false
			},
			{
				status: 401
			}
		)
	}

	const { cust_id, metadata } = await request.json()

	// Validate required fields
	if (!cust_id || typeof cust_id !== "string") {
		return json(
			{
				success: false
			},
			{
				status: 400
			}
		)
	}

	if (!metadata || typeof metadata !== "object") {
		return json(
			{
				success: false
			},
			{
				status: 400
			}
		)
	}

	/* Docs: https://developer.paddle.com/build/customers/integrate-customer-portal#get-subscriptions-create-subscription-deeplinks
	   Using sandbox-api for sandbox mode.
	*/
	const paddleResponse = await fetch(
		`https://${env.PADDLE_API_URL}.paddle.com/subscriptions?customer_id=${cust_id}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${env.PADDLE_API_KEY}`
			}
		}
	)

	if (!paddleResponse.ok) {
		return json(
			{
				success: false
			},
			{
				status: 502
			}
		)
	}

	let paddleData: { customer_id: string; status: string, custom_data:{ email: string } }[] | null = null
	try {
		const response = await paddleResponse.json()
		paddleData = response.data
	} catch (parseError) {
		return json(
			{
				success: false
			},
			{
				status: 502
			}
		)
	}

	if (paddleData && paddleData.length && paddleData[0].custom_data.email === user.email && paddleData[0].status === "active") {
		// Validate required fields exist before inserting
		if (!paddleData[0].customer_id) {
			return json(
				{
					success: false
				},
				{
					status: 400
				}
			)
		}

		// Metadata is used here for ease of use during customer support
		const { error } = await supabase.from("subscriptions").insert({
			id: user.id,
			cust_id: paddleData[0].customer_id,
			metadata: {
				transaction: metadata.transaction_id,
				method: metadata.method
			}
		})

		if (error?.message) {
			console.error(error)
			return json(
				{
					success: false
				},
				{
					status: 500
				}
			)
		}
	}

	return json(
		{
			success: true
		},
		{
			status: 200
		}
	)
}
