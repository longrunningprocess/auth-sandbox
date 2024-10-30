//https://kit.svelte.dev/docs/adapter-cloudflare
import adapter from '@sveltejs/adapter-cloudflare'
import type { Config } from '@sveltejs/kit'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default <Config> {
	kit: {
		adapter: adapter(),
	},

	preprocess: vitePreprocess(),
}
