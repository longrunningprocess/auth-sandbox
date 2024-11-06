import type { D1Database } from '@cloudflare/workers-types'

// ref: https://kit.svelte.dev/docs/types#app
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			db:D1Database
			user: User | undefined
		}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env: {
				AUTH_SECRET: string
				GOOGLE_OAUTH_CLIENT_ID: string
				GOOGLE_OAUTH_CLIENT_SECRET: string
				DB_Auth: D1Database
			},
		}
	}
}

export { }
