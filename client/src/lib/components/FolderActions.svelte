<script lang="ts">
	import Popover from './Popover.svelte';
	import Plus from '$lib/icons/Plus.svelte';
	import Folder from '$lib/icons/Folder.svelte';
	import File from '$lib/icons/File.svelte';
	import { editorState } from '$lib/stores/editor.svelte';

	let { folderPath }: { folderPath: string } = $props();
	let isCreating = $state(false);
	let inputValue = $state('');
	let inputType = $state<'file' | 'folder'>('file');
	let inputRef: HTMLInputElement | undefined = $state();

	function startCreate(type: 'file' | 'folder') {
		isCreating = true;
		inputType = type;
		inputValue = type === 'file' ? 'New File' : 'New Folder';
	}

	function confirm() {
		const value = inputValue.trim();
		if (!value || value === 'New File' || value === 'New Folder') {
			isCreating = false;
			return;
		}

		if (inputType === 'file') {
			const filePath = folderPath + '/' + value + '.md';
			const formattedName = value.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
			editorState.path = filePath;
			editorState.mode = 'create';
			editorState.setContent('# ' + formattedName + '\n\n');
		}

		isCreating = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			confirm();
		} else if (e.key === 'Escape') {
			isCreating = false;
		}
	}
</script>

{#if isCreating}
	<li>
		<input
			bind:this={inputRef}
			type="text"
			bind:value={inputValue}
			class="w-full text-sm py-1 px-2 rounded border border-(--color-heading) bg-transparent text-(--color-text) outline-none"
			onblur={confirm}
			onkeydown={handleKeydown}
		/>
	</li>
{:else}
	<li>
		<div class="flex items-center gap-1">
			<button
				type="button"
				aria-label="Add"
				class="folder-add-btn aspect-square rounded hover:bg-(--color-muted)/10 transition-colors cursor-pointer text-(--color-muted) opacity-0 group-hover:opacity-100"
				onclick={() => startCreate('file')}
			>
				<Plus class="w-3.5 h-3.5" />
			</button>
			<Popover>
				<button
					type="button"
					class="flex items-center gap-2 w-full text-left text-sm px-3 py-1.5 hover:bg-(--color-muted)/10 transition-colors cursor-pointer text-(--color-text)"
					onclick={() => startCreate('folder')}
				>
					<Folder class="w-4 h-4 shrink-0" />
					<span>Create Folder</span>
				</button>
				<button
					type="button"
					class="flex items-center gap-2 w-full text-left text-sm px-3 py-1.5 hover:bg-(--color-muted)/10 transition-colors cursor-pointer text-(--color-text)"
					onclick={() => startCreate('file')}
				>
					<File class="w-4 h-4 shrink-0" />
					<span>Create File</span>
				</button>
			</Popover>
		</div>
	</li>
{/if}
