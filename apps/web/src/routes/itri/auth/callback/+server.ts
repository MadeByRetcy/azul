import { redirect } from "@sveltejs/kit"

export const GET = async ({ url, locals: { supabase } }) => {
	const code = url.searchParams.get("code")
	const next = url.searchParams.get("next") ?? "/itri/dashboard"

	if (code) {
		const { error } = await supabase.auth.exchangeCodeForSession(code)
		if (!error) {
			throw redirect(303, `/${next.slice(1)}`)
		}
	}

	// Return the user to an error page with instructions
	throw redirect(401, "/error")
}
