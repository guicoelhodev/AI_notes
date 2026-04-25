// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Env {
			GITHUB_TOKEN: string;
			GITHUB_OWNER: string;
			GITHUB_REPO: string;
			GITHUB_CLIENT_ID: string;
			GITHUB_CLIENT_SECRET: string;
		}
	}
}

export { };
