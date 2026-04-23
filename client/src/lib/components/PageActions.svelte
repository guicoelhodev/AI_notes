<script lang="ts">
	import { editorState } from '$lib/stores/editor.svelte';
	import { sidebarState } from '$lib/stores/sidebar.svelte';
	import Save from '$lib/icons/Save.svelte';
	import Spinner from '$lib/icons/Spinner.svelte';

	async function handleSave() {
		const saved = await editorState.save();
		if (saved) {
			await sidebarState.loadTree();
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if ((e.ctrlKey || e.metaKey) && e.key === 's') {
			e.preventDefault();
			handleSave();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="sticky bottom-0 flex items-center justify-between px-4 py-3 w-full bg-transparent">
	<h1 class="text-sm font-medium text-(--color-text) truncate px-3 py-1.5 rounded-md bg-(--color-muted)/10">
		{editorState.path || 'No file selected'}
	</h1>

	<button
		type="button"
		aria-label="Save"
		class="flex items-center gap-2 p-2 rounded-lg bg-(--color-surface) hover:opacity-80 transition-opacity cursor-pointer text-(--color-muted) disabled:opacity-50 disabled:cursor-not-allowed"
		disabled={editorState.isSaving}
		onclick={handleSave}
	>
		{#if editorState.isSaving}
			<Spinner class="w-4 h-4 animate-spin" />
		{:else}
			<Save class="w-4 h-4" />
		{/if}
		<kbd class="text-xs border border-(--color-muted)/40 rounded px-1.5 py-0.5 hidden sm:inline">Ctrl+S</kbd>
	</button>
</div>
