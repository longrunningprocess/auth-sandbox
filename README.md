# Auth POC

1. `pnpm i`
1. `pnpm dev`

## Implementation

✅ authentication implemented
✅ route level authz implemented
✅ authz for specific users
	* probably need a db [app: string ('ontology'), email: string ]
	* and permissions, not necessarily roles, e.g., ADD_USER, ADD_CONCEPT, UPDATE_CONCEPT

## Conclusion of POC

Each app will need to integrate auth.
	* new oauth configs needed for each app
	* POC code needs to be replicated in each app

## Integration

### Docs

https://authjs.dev/getting-started/installation?framework=SvelteKit

### Steps

1. `pnpm add @auth/sveltekit`
1. add `AUTH_SECRET` to an `.env.local`
	> `openssl rand -base64 32` can be used to generate a rand num for it
1. configure an oauth source and populate the key and secret in the `.env.local`
	> create separate configs for dev, preview, and prod, e.g., Ontology (dev).
1. see as a ref for different aspects of the integraation:  https://github.com/presciencelabs/tabitha-ontology/pull/56
1. configure the appropriate ENV vars on the host platform
