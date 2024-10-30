# Auth POC

1. `pnpm i`
1. `pnpm dev`

## TODO:
✅ authentication implemented
✅ route level authz implemented
authz for specific users
	* probably need a db [app: string ('ontology'), email: string ]
	* and permissions, not necessarily roles, e.g., ADD_USER, ADD_CONCEPT, UPDATE_CONCEPT
	* time to start utilizing "migrations"?

* will need pages in the ontology app to facilitate these capabilities...
* that means auth will need to be integrated into the app
	* new oauth configs needed for each app
	* POC code needs to be replicated in each app
