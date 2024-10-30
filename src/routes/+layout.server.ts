import type { LayoutServerLoadEvent } from './$types'
import type { User } from '@auth/sveltekit'

// https://authjs.dev/reference/sveltekit#managing-the-session
export async function load(event: LayoutServerLoadEvent): Promise<{ user: User | undefined }> {
	console.log('/routes/+layout.server.load')

	const session = await event.locals.auth()

	return {
		user: session?.user,
	}
}
