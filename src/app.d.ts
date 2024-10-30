// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User | undefined
		}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env: {
				AUTH_SECRET: string
				GOOGLE_OAUTH_CLIENT_ID: string
				GOOGLE_OAUTH_CLIENT_SECRET: string
			},
		}
	}
}

export {}
