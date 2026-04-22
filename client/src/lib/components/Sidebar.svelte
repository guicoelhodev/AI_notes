<script lang="ts">
	import { onMount } from 'svelte';
	import { sidebarState } from '$lib/stores/sidebar.svelte';
	import SidebarNode from './SidebarNode.svelte';

	onMount(() => {
		sidebarState.loadTree();
	});
</script>

<nav class="h-full flex flex-col p-4">
	<div class="flex-1 overflow-y-auto">
		<a href="/" class="block text-lg font-bold mb-4 text-(--color-heading)">Personal Notes</a>
		<a
			href="/"
			class:list={[
				'block text-sm py-1 px-2 rounded mb-2 transition-colors font-medium text-(--color-text)',
				sidebarState.activeSlug === 'home' && 'bg-(--color-heading)/20',
				sidebarState.activeSlug !== 'home' && 'hover:bg-(--color-surface)'
			]}
		>
			Home
		</a>

		{#if sidebarState.isLoading}
			<p class="text-sm text-(--color-muted)">Loading...</p>
		{:else}
			<ul class="space-y-1">
				{#each sidebarState.tree as node (node.label)}
					<SidebarNode {node} />
				{/each}
			</ul>
		{/if}
	</div>
</nav>
