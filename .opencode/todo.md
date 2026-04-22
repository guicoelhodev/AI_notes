# Mission: Migracao Astro → SvelteKit

## M1: Fundacao (FASE 1) | status: completed
### T1.1: Copiar assets e CSS | agent:Worker
- [x] S1.1.1: Copiar favicons (favicon.ico, favicon.svg) de app/public/ para client/static/ | size:S
- [x] S1.1.2: Migrar global.css + milkdown.css para client/src/routes/layout.css | size:S

### T1.2: Lib utilitaria | agent:Worker
- [x] S1.2.1: Criar client/src/lib/types.ts (TreeEntry, TreeNode, SearchItem) | size:S
- [x] S1.2.2: Criar client/src/lib/utils/tree.ts (buildTree, formatLabel) | size:S

### T1.3: GitHub API adaptada | agent:Worker
- [x] S1.3.1: Migrar github.ts para client/src/lib/github.ts (adaptar Buffer→btoa, import.meta.env→$env/static_private) | size:M

## M2: Icones (FASE 2) | status: completed
### T2.1: Componentes SVG | agent:Worker
- [x] S2.1.1: Criar 12 icones Svelte em client/src/lib/icons/ (Search, Menu, Moon, Sun, Save, Spinner, ChevronDown, Folder, File, Plus, ThreeDots, IaIcon) | size:M

## M3: Estados Globais (FASE 3) | status: completed
### T3.1: Stores com $state | agent:Worker
- [x] S3.1.1: Criar client/src/lib/stores/theme.svelte.ts (ThemeState class) | size:S
- [x] S3.1.2: Criar client/src/lib/stores/sidebar.svelte.ts (SidebarState class) | size:M
- [x] S3.1.3: Criar client/src/lib/stores/editor.svelte.ts (EditorState class) | size:M
- [x] S3.1.4: Criar client/src/lib/stores/search.svelte.ts (SearchState class) | size:S

## M4: API Routes (FASE 4) | status: completed
### T4.1: Server endpoints | agent:Worker
- [x] S4.1.1: Criar client/src/routes/api/save/+server.ts (PUT handler) | size:M
- [x] S4.1.2: Criar client/src/routes/api/docs/[...path]/+server.ts (GET handler) | size:M

## M5: Componentes Svelte (FASE 5) | status: completed
### T5.1: Componentes base | agent:Worker
- [x] S5.1.1: Criar Popover.svelte | size:S
- [x] S5.1.2: Criar ThemeToggle.svelte | size:S
- [x] S5.1.3: Criar Toast.svelte (feedback reativo) | size:S

### T5.2: Sidebar | agent:Worker
- [x] S5.2.1: Criar SidebarNode.svelte (recursivo) | size:M
- [x] S5.2.2: Criar FolderActions.svelte | size:M
- [x] S5.2.3: Criar Sidebar.svelte (container) | size:M

### T5.3: Editor e busca | agent:Worker
- [x] S5.3.1: Criar SearchModal.svelte (Fuse.js + keyboard nav) | size:L
- [x] S5.3.2: Criar PageActions.svelte (save bar) | size:M

## M6: Layout e Rotas (FASE 6) | status: completed
### T6.1: Layout principal | agent:Worker
- [x] S6.1.1: Atualizar app.html (anti-FOUC theme script) | size:S
- [x] S6.1.2: Atualizar +layout.svelte (sidebar + theme + search trigger + mobile toggle) | size:L
- [x] S6.1.3: Atualizar +page.svelte (Home) | size:S

### T6.2: Rota do editor | agent:Worker
- [x] S6.2.1: Criar file/+page.ts (export ssr = false) | size:S
- [x] S6.2.2: Criar file/+page.svelte (Milkdown editor + editorState) | size:L

## M7: Verificacao (FASE 7) | status: completed
### T7.1: Build e check | agent:Reviewer
- [x] S7.1.1: npm run check (TypeScript) — 0 erros, 0 warnings | size:S
- [x] S7.1.2: npm run build (build completo) — build OK | size:S
