import type { LayoutServerLoad } from './$types'

export const load = (async event => {
	console.log('/routes/protected/+layout.server.load')

	await event.parent() // ensures authz is handled in the /routes/+layout.server.ts
}) satisfies LayoutServerLoad
