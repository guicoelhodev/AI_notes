# Plano de Migracao: Astro → SvelteKit

## Resumo Executivo

Migracao do app Astro (`app/`) para SvelteKit (`client/`) com foco **critico em reatividade**. O app atual usa Astro com scripts imperativos (DOM manipulation, `window.__*`, `getElementById`) — a migracao converte tudo para Svelte 5 com runes (`$state`, `$derived`, `$effect`) e components reativos.

> **Collections do Astro serao ignoradas** — dados virao exclusivamente da GitHub API via `github.ts`.

---

## 1. Estado Atual (Astro)

### Estrutura
```
app/src/
├── components/
│   ├── Sidebar.astro          → Navegacao com tree de docs
│   ├── sidebar/SidebarNode.astro → Node recursivo da tree
│   ├── SearchModal.astro      → Busca com Fuse.js
│   ├── ThemeToggle.astro      → Toggle dark/light
│   ├── PageActions.astro      → Barra de salvar (bottom bar)
│   ├── FolderActions.astro    → Criar pasta/arquivo inline
│   └── Popover.astro          → Menu dropdown
├── icons/                     → 12 SVGs
├── layout/Layout.astro        → Layout principal (sidebar + main)
├── lib/github.ts              → API GitHub (getFile, listDocsTree, updateFile, createFile)
├── pages/
│   ├── index.astro            → Home (usava collections — sera removido)
│   ├── file.astro             → Editor Milkdown (SSR, usa window.__*)
│   ├── [...slug].astro        → Paginas estaticas (usava collections — sera removido)
│   └── api/
│       ├── save.ts            → PUT save/create file
│       └── docs/[...path].ts  → GET tree
├── global.css                 → Cores/tema + prose
└── milkdown.css               → Estilos do editor
```

### Problemas de Reatividade no Astro
- Estado global via `window.__editor`, `window.__originalContent`, `window.__filePath`, `window.__mode`
- DOM imperativo: `getElementById`, `createElement`, `classList.toggle`
- Sidebar e editor **nao se comunicam** — editor injeta nodes no sidebar via `injectSidebarNode()`
- Nenhum estado reativo — tudo e callback/manual
- Scripts `is:inline` sem module system

---

## 2. Estado Alvo (SvelteKit)

### Estrutura
```
client/src/
├── lib/
│   ├── github.ts              → [MIGRADO] API GitHub (adaptado para client-side)
│   ├── icons/                 → [NOVO] Svelte components para SVGs
│   │   ├── Search.svelte
│   │   ├── Menu.svelte
│   │   ├── Moon.svelte
│   │   ├── Sun.svelte
│   │   ├── Save.svelte
│   │   ├── Spinner.svelte
│   │   ├── ChevronDown.svelte
│   │   ├── Folder.svelte
│   │   ├── File.svelte
│   │   ├── Plus.svelte
│   │   ├── ThreeDots.svelte
│   │   └── IaIcon.svelte
│   ├── stores/                → [NOVO] Estados globais com classes $state
│   │   ├── theme.svelte.ts    → Estado do tema (dark/light)
│   │   ├── sidebar.svelte.ts  → Estado da sidebar (open/close, tree, active)
│   │   ├── editor.svelte.ts   → Estado do editor (path, content, mode, dirty)
│   │   └── search.svelte.ts   → Estado da busca (open, query, results)
│   ├── components/            → [NOVO] Componentes Svelte
│   │   ├── Sidebar.svelte
│   │   ├── SidebarNode.svelte
│   │   ├── SearchModal.svelte
│   │   ├── ThemeToggle.svelte
│   │   ├── PageActions.svelte
│   │   ├── FolderActions.svelte
│   │   └── Popover.svelte
│   ├── utils/
│   │   └── tree.ts            → buildTree() e formatLabel()
│   └── types.ts               → TreeEntry, TreeNode interfaces
├── routes/
│   ├── +layout.svelte         → Layout root com sidebar + theme
│   ├── +layout.css            → [ATUALIZADO] CSS global + tema
│   ├── +page.svelte           → Home (redirect ou pagina de boas-vindas)
│   ├── file/
│   │   └── +page.svelte       → Editor Milkdown
│   └── api/
│       ├── save/
│       │   └── +server.ts     → PUT save/create
│       └── docs/
│           └── [...path]/
│               └── +server.ts → GET tree
└── app.html                   → [ATUALIZADO] Com script anti-FOUC
```

---

## 3. Arquitetura de Reatividade (Ponto Critico)

### 3.1 Estado Global com Classes `$state`

Todas as classes de estado seguem o padrao Svelte 5:

```typescript
// Exemplo: theme.svelte.ts
class ThemeState {
  theme = $state<'dark' | 'light'>(this.getInitial());

  private getInitial(): 'dark' | 'light' {
    if (typeof window === 'undefined') return 'dark';
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  }

  toggle() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.theme);
  }
}

export const themeState = new ThemeState();
```

### 3.2 Estado: `editor.svelte.ts`
```typescript
class EditorState {
  path = $state<string>('');
  originalContent = $state<string>('');
  mode = $state<'edit' | 'create' | ''>('');
  isDirty = $derived(this.originalContent.trim() !== '');
  isSaving = $state(false);

  // Chamado quando Milkdown emite mudancas
  setContent(content: string) {
    // dirty check e derivacao automatica
  }

  reset() {
    this.path = '';
    this.originalContent = '';
    this.mode = '';
  }
}
```

### 3.3 Estado: `sidebar.svelte.ts`
```typescript
class SidebarState {
  isOpen = $state(false);           // mobile only
  tree = $state<TreeNode[]>([]);    // carregado da API
  activeSlug = $state<string>('');  // arquivo ativo
  isLoading = $state(true);

  async loadTree() { ... }
  openFile(slug: string) { ... }    // atualiza activeSlug
  toggle() { this.isOpen = !this.isOpen; }
}
```

### 3.4 Estado: `search.svelte.ts`
```typescript
class SearchState {
  isOpen = $state(false);
  query = $state('');
  results = $state<SearchItem[]>([]);
  activeIndex = $state(-1);
}
```

### 3.5 Fluxo Reativo (antes vs depois)

**Antes (Astro — imperativo):**
```
[Clique no sidebar] → window.location.href = "/file?path=..."
  → Recarrega pagina → Server render → Script monta editor
  → Editor salva estado em window.__*
  → PageActions le window.__* para salvar
  → Novo arquivo? Editor chama injectSidebarNode() (DOM manipulation)
```

**Depois (SvelteKit — reativo):**
```
[Clique no sidebar] → editorState.path = slug; editorState.mode = 'edit'
  → goto('/file') → Componente file/+page.svelte monta
  → $effect() carrega conteudo via github.ts → Milkdown monta
  → Milkdown onChange → editorState.setContent(markdown)
  → PageActions reage a editorState.isDirty (derived)
  → Novo arquivo? sidebarState.loadTree() → tree $state atualiza → UI re-render
```

---

## 4. Plano de Execucao por Fase

### FASE 1: Fundacao (paralelo)
| # | Tarefa | Depende de |
|---|--------|-----------|
| 1.1 | Copiar favicons de `app/public/` para `client/static/` | - |
| 1.2 | Migrar `github.ts` para `client/src/lib/github.ts` (adaptar `Buffer` para `btoa` client-side) | - |
| 1.3 | Copiar `global.css` + `milkdown.css` para `client/src/routes/layout.css` | - |
| 1.4 | Instalar dependencias: `@milkdown/crepe`, `fuse.js` | - |
| 1.5 | Criar `client/src/lib/types.ts` com interfaces | - |
| 1.6 | Criar `client/src/lib/utils/tree.ts` com `buildTree()` e `formatLabel()` | - |

### FASE 2: Icones como Svelte Components (paralelo)
| # | Tarefa |
|---|--------|
| 2.1 | Criar `client/src/lib/icons/` com 12 componentes Svelte |
| 2.2 | Cada icone recebe `class` prop e usa `@html` ou `<svg>` inline |

**Padrao:**
```svelte
<!-- Search.svelte -->
<script lang="ts">
  let { class: className = 'w-4 h-4' }: { class?: string } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
  stroke-width="2" class={className}>
  <path d="m21 21l-4.34-4.34"/><circle cx="11" cy="11" r="8"/>
</svg>
```

### FASE 3: Estados Globais (paralelo)
| # | Tarefa |
|---|--------|
| 3.1 | Criar `theme.svelte.ts` — classe ThemeState com `$state` |
| 3.2 | Criar `sidebar.svelte.ts` — classe SidebarState com `$state` |
| 3.3 | Criar `editor.svelte.ts` — classe EditorState com `$state` + `$derived` |
| 3.4 | Criar `search.svelte.ts` — classe SearchState com `$state` |

### FASE 4: API Routes (SvelteKit server endpoints)
| # | Tarefa |
|---|--------|
| 4.1 | Criar `client/src/routes/api/save/+server.ts` — PUT handler |
| 4.2 | Criar `client/src/routes/api/docs/[...path]/+server.ts` — GET handler |

> **Nota**: No SvelteKit, API routes usam `+server.ts` com `export async function PUT({ request })` e `export async function GET({ params })`. Precisam de `import { GITHUB_TOKEN, ... } from '$env/static/private'` para env vars.

### FASE 5: Componentes Svelte (depende de FASE 2 + 3)
| # | Tarefa | Depende de |
|---|--------|-----------|
| 5.1 | `Popover.svelte` — dropdown reativo | 2.1 |
| 5.2 | `ThemeToggle.svelte` — usa `themeState` | 2.1, 3.1 |
| 5.3 | `SidebarNode.svelte` — recursivo, usa `sidebarState` | 2.1, 3.2, 1.6 |
| 5.4 | `FolderActions.svelte` — usa `sidebarState` + `editorState` | 2.1, 3.2, 3.3, 5.1 |
| 5.5 | `Sidebar.svelte` — container, usa `sidebarState` | 5.3, 5.4 |
| 5.6 | `SearchModal.svelte` — usa `searchState` + Fuse.js | 2.1, 3.4, 1.4 |
| 5.7 | `PageActions.svelte` — usa `editorState` | 2.1, 3.3 |

### FASE 6: Layout e Rotas (depende de FASE 4 + 5)
| # | Tarefa | Depende de |
|---|--------|-----------|
| 6.1 | Atualizar `+layout.svelte` — sidebar + theme + search trigger + mobile toggle | 5.2, 5.5, 5.6 |
| 6.2 | Atualizar `app.html` — anti-FOUC script para tema | 3.1 |
| 6.3 | Atualizar `+page.svelte` — Home (pode ser redirect ou placeholder) | - |
| 6.4 | Criar `file/+page.svelte` — Editor Milkdown integrado com `editorState` | 3.3, 5.7, 1.2 |
| 6.5 | Criar `file/+layout.svelte` — Layout especifico do editor (PageActions no bottom) | 5.7 |

### FASE 7: Integracao e Verificacao
| # | Tarefa |
|---|--------|
| 7.1 | Testar dark/light theme (transicao sem FOUC) |
| 7.2 | Testar sidebar (toggle mobile, expand/collapse folders, active state) |
| 7.3 | Testar editor (carregar arquivo, editar, salvar, criar novo) |
| 7.4 | Testar busca (Ctrl+K, navegacao por teclado, resultados) |
| 7.5 | Testar criacao de arquivos/pastas inline no sidebar |
| 7.6 | Testar toast de feedback (save success/error) |
| 7.7 | Verificar `npm run build` sem erros |
| 7.8 | Verificar `npm run check` sem erros TypeScript |

---

## 5. Decisoes Arquiteturais

### 5.1 Icones: Svelte Components vs Assets Estáticos
**Decisao**: Svelte components
**Motivo**: Reatividade — troca dark/light pode precisar alterar stroke, fill ou classe. Componentes permitem `class` binding reativo.

### 5.2 Milkdown: Client-only (CSR)
**Decisao**: Montar Milkdown apenas no client (`onMount`)
**Motivo**: Milkdown requer DOM. No Astro, era feito via `<script>` tag. No SvelteKit, usamos `onMount` + `import { Crepe } from '@milkdown/crepe'`. O componente `file/+page.svelte` sera `+page.ts` com `export const ssr = false` para CSR-only.

### 5.3 Github API: Server-side via API Routes
**Decisao**: `github.ts` roda em API routes do SvelteKit (server-side), NAO no client
**Motivo**: `GITHUB_TOKEN` nao pode ser exposto ao client. As API routes (`/api/save`, `/api/docs`) chamam `github.ts` server-side. O client faz `fetch('/api/...')`.

### 5.4 Variaveis de Ambiente
**Decisao**: Usar `$env/static/private` no SvelteKit
**Astro**: `import.meta.env.GITHUB_TOKEN`
**SvelteKit**: `import { GITHUB_TOKEN } from '$env/static/private'`

> Arquivo `.env` no `client/` sera necessario com `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`.

### 5.5 Tailwind: Ja configurado
**Decisao**: Manter configuracao existente, apenas atualizar `layout.css` com o conteudo de `global.css` + `milkdown.css`.

### 5.6 Toast de Feedback
**Decisao**: Componente reativo com `$state` em vez de DOM imperativo
```svelte
<!-- Toast.svelte -->
<script lang="ts">
  let message = $state('');
  let visible = $state(false);
  // export function show(msg) { message = msg; visible = true; setTimeout... }
</script>
```

---

## 6. Melhorias de Reatividade (Valor Adicional)

| Feature | Astro (atual) | SvelteKit (alvo) |
|---------|--------------|------------------|
| **Tema** | `localStorage` + `classList.toggle` manual | `$state` reativo, `$effect` sync com `documentElement` |
| **Sidebar toggle** | `classList.add/remove` + `isOpen` var JS | `sidebarState.isOpen` → binding reativo |
| **Active file** | `currentSlug` prop passada do server | `sidebarState.activeSlug` → highlight reativo |
| **Novo arquivo** | `injectSidebarNode()` (DOM manipulation) | `sidebarState.loadTree()` → re-render automatico |
| **Save status** | `window.__originalContent` comparado manualmente | `editorState.isDirty` via `$derived` |
| **Search** | Fuse.js inicializado com `define:vars` | `searchState` + `$derived` results |
| **Copy buttons** | `querySelectorAll` + `addEventListener` | `$effect` em componente Prose |

---

## 7. Dependencias a Instalar no SvelteKit

### 7.1 Visao Geral

```bash
cd client
npm install @milkdown/crepe fuse.js
```

### 7.2 Detalhamento por Lib

| Lib | Versao | Tipo | Motivo | Onde e usada |
|-----|--------|------|--------|-------------|
| `@milkdown/crepe` | `^7.20.0` | runtime | Editor Markdown WYSIWYG | `file/+page.svelte` (via `onMount`) |
| `fuse.js` | `^7.3.0` | runtime | Busca fuzzy nas notas | `SearchModal.svelte` (busca instantanea) |

### 7.3 Libs Ja Instaladas (verificar compatibilidade)

| Lib | No client/ | No app/ | Status |
|-----|-----------|---------|--------|
| `tailwindcss` | `^4.2.2` | `^4.2.2` | ✅ Mesma versao |
| `@tailwindcss/vite` | `^4.2.2` | `^4.2.2` | ✅ Mesma versao |
| `@tailwindcss/typography` | `^0.5.19` | `^0.5.19` | ✅ Mesma versao |
| `typescript` | `^6.0.2` | — | ✅ Presente (devDep) |
| `@sveltejs/kit` | `^2.57.0` | — | ✅ Framework |
| `svelte` | `^5.55.2` | — | ✅ Runes mode ativo via config |

### 7.4 Libs do Astro que NAO sao Necessarias no SvelteKit

| Lib | Motivo para ignorar |
|-----|-------------------|
| `astro` | Framework sendo substituido |
| `@milkdown/crepe` (no app) | Sera instalado separadamente no client |
| `fuse.js` (no app) | Sera instalado separadamente no client |
| `@types/node` (no app) | Ja existe no client como devDep |

### 7.5 Verificacao Pos-Instalacao

Apos instalar, o `package.json` do client deve conter:

```json
{
  "dependencies": {
    "@milkdown/crepe": "^7.20.0",
    "fuse.js": "^7.3.0"
  },
  "devDependencies": {
    "@sveltejs/adapter-auto": "^7.0.1",
    "@sveltejs/kit": "^2.57.0",
    "@sveltejs/vite-plugin-svelte": "^7.0.0",
    "@tailwindcss/typography": "^0.5.19",
    "@tailwindcss/vite": "^4.2.2",
    "@types/node": "^24",
    "eslint": "^10.2.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-svelte": "^3.17.0",
    "globals": "^17.4.0",
    "prettier": "^3.8.1",
    "prettier-plugin-svelte": "^3.5.1",
    "prettier-plugin-tailwindcss": "^0.7.2",
    "svelte": "^5.55.2",
    "svelte-check": "^4.4.6",
    "tailwindcss": "^4.2.2",
    "typescript": "^6.0.2",
    "typescript-eslint": "^8.58.1",
    "vite": "^8.0.7"
  }
}
```

### 7.6 Comando Unico

```bash
cd client && npm install @milkdown/crepe fuse.js
```

---

## 8. Arquivos a Copiar

| Origem | Destino |
|--------|---------|
| `app/public/favicon.ico` | `client/static/favicon.ico` |
| `app/public/favicon.svg` | `client/static/favicon.svg` |
| `.env` (de `app/`) | `.env` (em `client/`) |

---

## 9. Roteamento

| Astro | SvelteKit | Tipo |
|-------|-----------|------|
| `/` (index.astro) | `/` (+page.svelte) | Pagina Home |
| `/file?path=X&mode=Y` | `/file?path=X&mode=Y` (+page.svelte) | Editor (SSR disabled) |
| `/api/save` PUT | `/api/save` PUT (+server.ts) | API |
| `/api/docs` GET | `/api/docs` GET (+server.ts) | API |
| `/[...slug]` | ~~removido~~ | Nao necessario (sem collections) |

---

## 10. Ordem de Execucao Resumida

```
FASE 1 (fundacao) ─── paralelo ────────────────────────────┐
FASE 2 (icones) ──── paralelo ─────────────────────────────┤
FASE 3 (estados) ─── paralelo ─────────────────────────────┤
                                                           ├──→ FASE 5 (componentes)
FASE 4 (API routes) ── paralelo ───────────────────────────┘        │
                                                                        ├──→ FASE 6 (layout + rotas)
                                                                              │
                                                                              └──→ FASE 7 (verificacao)
```

As fases 1, 2, 3 e 4 sao **totalmente paralelas** entre si.
FASE 5 depende de 1+2+3.
FASE 6 depende de 4+5.
FASE 7 depende de 6.
