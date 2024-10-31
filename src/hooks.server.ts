import { AUTH_SECRET, GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_SECRET } from '$env/static/private'
import { SvelteKitAuth } from '@auth/sveltekit'
import Google from '@auth/sveltekit/providers/google'
import { error, type Handle, type RequestEvent } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

// https://authjs.dev/reference/sveltekit#lazy-initialization
const { handle: authn_handle } = SvelteKitAuth(initialize_config)

async function initialize_config(event: RequestEvent) {
	console.log('hooks.server.authn')

	const clientId = event.platform?.env.GOOGLE_OAUTH_CLIENT_ID || GOOGLE_OAUTH_CLIENT_ID
	const clientSecret = event.platform?.env.GOOGLE_OAUTH_CLIENT_SECRET || GOOGLE_OAUTH_CLIENT_SECRET
	const secret = event.platform?.env.AUTH_SECRET || AUTH_SECRET

	return {
		providers: [
			Google({ clientId, clientSecret }),
		],

		secret,
		trustHost: true,
	}
}

const authz_handle: Handle = async ({event, resolve}) => {
	await authz(event)

	return resolve(event)

	async function authz(event: RequestEvent) {
		console.log('hooks.server.authz', { route: event.route, auth: await event.locals.auth(), request: event.request })

		const { route, locals } = event

		if (route.id?.startsWith('/protected')) {
			const session = await locals.auth()

			if (!session?.user) {
				throw error(401, 'You must be signed in and have permission to access this page')
			}
		}
	}
}

export const handle = sequence(authn_handle, authz_handle)
