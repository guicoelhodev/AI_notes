# Sync Issues (Unresolved Only)

## SYNC-1
- Severity: LOW
- Files: client/src/lib/stores/sidebar.svelte.ts ↔ client/src/lib/utils/tree.ts
- Problem: `buildTree()` is duplicated — private method in SidebarState (lines 32-49) is identical to exported function in `utils/tree.ts` (line 7)
- Fix: Replace `this.buildTree(ids)` with imported `buildTree` from `$lib/utils/tree`, remove private method
- Status: pending
