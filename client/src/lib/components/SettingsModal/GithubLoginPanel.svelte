<script lang="ts">
	import { authState } from '$lib/stores/auth.svelte';
</script>

<div>
	<h3 class="mb-4 text-base font-semibold text-(--color-text)">Github login</h3>

	{#if authState.status === 'loading'}
		<p class="text-sm text-(--color-muted)">Loading...</p>
	{:else if authState.isAuthorized}
		<div class="flex items-center justify-between border-b border-(--color-muted)/20 py-3">
			<div>
				<span class="text-sm font-medium text-(--color-text)">Account</span>
				<p class="text-xs text-(--color-muted)">@{authState.username}</p>
			</div>
			<button
					onclick={() => authState.logout()}
					class="px-3 py-1.5 text-xs hover:underline text-(--color-muted)"
				>
					Logout
				</button>
		</div>
	{:else}
		<div class="flex items-center justify-between border-b border-(--color-muted)/20 py-3">
			<div>
				<span class="text-sm font-medium text-(--color-text)">Sign in</span>
				<p class="text-xs text-(--color-muted)">Login with your GitHub account</p>
			</div>
			<button
				onclick={() => authState.login()}
				class="px-4 py-2 bg-[#238636] text-white rounded text-sm font-medium hover:bg-[#2ea043]"
			>
				Login with GitHub
			</button>
		</div>
	{/if}
</div>