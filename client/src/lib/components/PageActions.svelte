<script lang="ts">
	import { editorState } from '$lib/stores/editor.svelte';
	import Save from '$lib/icons/Save.svelte';
	import Spinner from '$lib/icons/Spinner.svelte';

	function handleSave() {
		editorState.save();
	}

	function handleKeydown(e: KeyboardEvent) {
		if ((e.ctrlKey || e.metaKey) && e.key === 's') {
			e.preventDefault();
			handleSave();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="sticky bottom-0 flex items-center justify-between px-4 py-3 w-full min-w-0 bg-transparent">
	<h1 class="text-sm font-medium text-[var(--color-text)] truncate px-3 py-1.5 rounded-md bg-[var(--color-muted)]/10">
		{editorState.path || 'No file selected'}
	</h1>

	<button
		type="button"
		aria-label="Save"
		class="flex items-center gap-2 p-2 rounded-lg bg-[var(--color-surface)] hover:opacity-80 transition-opacity cursor-pointer text-[var(--color-muted)] disabled:opacity-50 disabled:cursor-not-allowed"
		disabled={editorState.isSaving}
		onclick={handleSave}
	>
		{#if editorState.isSaving}
			<Spinner class="w-4 h-4 animate-spin" />
		{:else}
			<Save class="w-4 h-4" />
		{/if}
		<kbd class="text-xs border border-[var(--color-muted)]/40 rounded px-1.5 py-0.5 hidden sm:inline">Ctrl+S</kbd>
	</button>
</div>
