
import { SvelteKitAuth } from '@auth/sveltekit'
import Google from '@auth/sveltekit/providers/google'
import { AUTH_SECRET, GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_SECRET } from '$env/static/private'
import type { RequestEvent } from '@sveltejs/kit'

// https://authjs.dev/reference/sveltekit#lazy-initialization
export const { handle, signIn, signOut } = SvelteKitAuth(async event => {
	const secret = event.platform?.env.AUTH_SECRET || AUTH_SECRET

	return {
		providers: [
			init_google(event),
		],

		secret,
}})

function init_google(event: RequestEvent) {
	const clientId = event.platform?.env.GOOGLE_OAUTH_CLIENT_ID || GOOGLE_OAUTH_CLIENT_ID
	const clientSecret = event.platform?.env.GOOGLE_OAUTH_CLIENT_SECRET || GOOGLE_OAUTH_CLIENT_SECRET

	return Google({ clientId, clientSecret })
}
