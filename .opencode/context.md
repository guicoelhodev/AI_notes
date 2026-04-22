# Project Context

## Environment
- Language: TypeScript + Svelte 5 (runes mode)
- Runtime: Node.js >=22.12, SvelteKit
- Build: `npm run build` (vite build)
- Test: `npm run check` (svelte-check --tsconfig)
- Package Manager: npm

## Project Type
- Application (Web) - Personal notes app with Markdown editor

## Infrastructure
- Container: None
- CI/CD: None detected
- Cloud: GitHub API for content storage

## Structure
- Astro app: `app/` (source of truth for features)
- SvelteKit client: `client/` (migration target)
- Source: `client/src/`
- Icons source: `app/src/icons/` (12 SVGs)
- Entry: `client/src/routes/+layout.svelte`

## Migration Status
- types.ts: DONE
- utils/tree.ts: DONE
- favicons: DONE (in client/static/)
- layout.css: PARTIAL (only Tailwind imports, needs global.css + milkdown.css merged)
- github.ts: EXISTS but has env type errors (needs app.d.ts declarations)
- icons/: EMPTY (need 12 Svelte components)
- stores/: EMPTY (need 4 store files)
- components/: EMPTY (need 7 Svelte components)
- API routes: NOT CREATED

## Conventions
- Naming: camelCase for vars, PascalCase for components
- Imports: Use `$lib` alias for lib files
- State: Svelte 5 runes ($state, $derived, $effect, $props)
- Icons: Svelte components with `class` prop binding
- CSS: Tailwind v4 with custom CSS variables (--color-*)
- Theme: dark (default) / light via `.light` class on `<html>`

## Key Decisions (from migration-plan-astro-to-sveltekit.md)
- Icons: Svelte components (reactive class binding)
- Milkdown: Client-only via onMount + ssr=false
- GitHub API: Server-side via SvelteKit API routes ($env/static/private)
- Tailwind: v4 with @tailwindcss/typography plugin
