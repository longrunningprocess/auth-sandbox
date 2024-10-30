<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import type { LayoutData } from './$types';

	interface Props {
		data: LayoutData
		children?: import('svelte').Snippet
	}

	let { data, children }: Props = $props()

	console.log('/routes/+layout.svelte')

	let user = $derived(data.user)
	let first_name = $derived(user?.name?.split(' ')[0])

	async function sign_out() {
		// https://next-auth.js.org/getting-started/client#signout
		await signOut({ callbackUrl: '/' })
	}
</script>

<header>
	<h1>Auth POC</h1>

	<nav>
		<a href="/">Home</a>
		<a href="/protected" data-sveltekit-preload-data="off" class:disabled={!user}>
			Protected🔐
		</a>
	</nav>

	<aside>
		{#if user}
			<img src={user.image} alt="avatar for {user.name}"/>
			<span>{first_name}</span><small>({user.email})</small>

			<button onclick={sign_out}>Sign Out</button>
		{:else}
			<button onclick={() => signIn('google')}>Sign In with Google</button>
		{/if}
	</aside>
</header>

<main>
	{@render children?.()}
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #e0e0e0;
		margin-bottom: 2rem;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	header > * {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	img {
		width: 43px;
		height: 43px;
		border-radius: 50%;
	}

	nav :not(:first-child) {
		margin-left: 1rem;
	}

	aside {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	span {
		font-size: 1.2rem;
		font-weight: 600;
	}

	a.disabled {
		pointer-events: none;
		opacity: 0.5;
	}
</style>
