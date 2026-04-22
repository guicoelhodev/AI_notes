# ASTRO → SvelteKit: Status da Migracao

> Plano completo em `docs/migration-plan-astro-to-sveltekit.md`

---

## Feito

### FASE 1 - Fundacao
- [x] Favicons copiados para `client/static/`
- [x] `global.css` + `milkdown.css` mesclados em `client/src/routes/layout.css` (255 linhas)
- [x] `client/src/lib/types.ts` — TreeEntry, TreeNode, SearchItem, SaveRequest, SaveResponse
- [x] `client/src/lib/utils/tree.ts` — buildTree(), formatLabel(), flattenTree()
- [x] `client/src/lib/github.ts` — migrado com `$env/static/private`, importa TreeEntry de types

### FASE 2 - Icones (12 componentes Svelte)
- [x] `client/src/lib/icons/Search.svelte`
- [x] `client/src/lib/icons/Menu.svelte`
- [x] `client/src/lib/icons/Moon.svelte`
- [x] `client/src/lib/icons/Sun.svelte`
- [x] `client/src/lib/icons/Save.svelte`
- [x] `client/src/lib/icons/Spinner.svelte`
- [x] `client/src/lib/icons/ChevronDown.svelte`
- [x] `client/src/lib/icons/Folder.svelte`
- [x] `client/src/lib/icons/File.svelte`
- [x] `client/src/lib/icons/Plus.svelte`
- [x] `client/src/lib/icons/ThreeDots.svelte`
- [x] `client/src/lib/icons/IaIcon.svelte`

### FASE 3 - Estados Globais (classes $state)
- [x] `client/src/lib/stores/theme.svelte.ts` — ThemeState (toggle, localStorage sync)
- [x] `client/src/lib/stores/sidebar.svelte.ts` — SidebarState (tree, activeSlug, loadTree, openFile, toggle mobile)
- [x] `client/src/lib/stores/editor.svelte.ts` — EditorState (path, content, mode, isDirty getter, save, toast)
- [x] `client/src/lib/stores/search.svelte.ts` — SearchState (Fuse.js, query, results, keyboard nav)

### FASE 4 - API Routes (SvelteKit server endpoints)
- [x] `client/src/routes/api/save/+server.ts` — PUT handler (create/update via github.ts)
- [x] `client/src/routes/api/docs/[...path]/+server.ts` — GET handler (list tree + get file content)
- [x] `client/.env` — copiado de app/.env

### FASE 5 - Componentes Svelte (8 componentes)
- [x] `client/src/lib/components/Popover.svelte` — dropdown com click-outside-close
- [x] `client/src/lib/components/ThemeToggle.svelte` — usa themeState + $effect sync documentElement
- [x] `client/src/lib/components/Toast.svelte` — reativo via editorState.toast
- [x] `client/src/lib/components/SidebarNode.svelte` — recursivo (self-import), expand/collapse, active highlight
- [x] `client/src/lib/components/FolderActions.svelte` — create file/folder inline
- [x] `client/src/lib/components/Sidebar.svelte` — container com loadTree onMount
- [x] `client/src/lib/components/SearchModal.svelte` — Fuse.js + Ctrl+K + keyboard nav + highlight
- [x] `client/src/lib/components/PageActions.svelte` — save bar + Ctrl+S + loading state

### FASE 6 - Layout e Rotas
- [x] `client/src/app.html` — anti-FOUC theme script + favicon links
- [x] `client/src/routes/+layout.svelte` — Sidebar + ThemeToggle + SearchModal + Toast + mobile toggle
- [x] `client/src/routes/+page.svelte` — Home placeholder
- [x] `client/src/routes/file/+page.ts` — `export const ssr = false`
- [x] `client/src/routes/file/+page.svelte` — Milkdown editor integrado com editorState (CSR-only)

### FASE 7 - Verificacao
- [x] `npm run check` — **0 erros, 0 warnings**
- [x] `npm run build` — **build completo com sucesso**

### Dependencias
- [x] `@milkdown/crepe` instalado
- [x] `fuse.js` instalado

---

## Resumo

| Metrica | Resultado |
|---------|-----------|
| Arquivos criados/migrados | 30+ |
| Componentes Svelte | 20 (12 icones + 8 UI) |
| Stores reativos | 4 (theme, sidebar, editor, search) |
| API routes | 2 (save, docs) |
| Erros TypeScript | 0 |
| Warnings | 0 |
| Build | OK |

## Testes Manuais Pendentes
- [ ] Tema dark/light (toggle + persistencia)
- [ ] Sidebar (mobile toggle, expand/collapse, active file highlight)
- [ ] Editor Milkdown (carregar, editar, salvar, criar novo)
- [ ] Busca (Ctrl+K, fuzzy search, keyboard nav, resultado click)
- [ ] Criar arquivo/pasta inline no sidebar
- [ ] Toast de feedback (save success/error)
