# Graph Report - .  (2026-04-27)

## Corpus Check
- Corpus is ~19,792 words - fits in a single context window. You may not need a graph.

## Summary
- 187 nodes · 177 edges · 22 communities detected
- Extraction: 84% EXTRACTED · 16% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.78)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_GitHub API Operations|GitHub API Operations]]
- [[_COMMUNITY_Threlte 3D Framework|Threlte 3D Framework]]
- [[_COMMUNITY_API Endpoints|API Endpoints]]
- [[_COMMUNITY_Rapier Physics Components|Rapier Physics Components]]
- [[_COMMUNITY_Sidebar State|Sidebar State]]
- [[_COMMUNITY_Editor State|Editor State]]
- [[_COMMUNITY_File Upload UI|File Upload UI]]
- [[_COMMUNITY_Search State|Search State]]
- [[_COMMUNITY_Theme Management|Theme Management]]
- [[_COMMUNITY_RenameModal Handlers|RenameModal Handlers]]
- [[_COMMUNITY_Physics Task Hook|Physics Task Hook]]
- [[_COMMUNITY_Gamepad Input Hook|Gamepad Input Hook]]
- [[_COMMUNITY_Visual Effects|Visual Effects]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]

## God Nodes (most connected - your core abstractions)
1. `T Component` - 12 edges
2. `PUT()` - 8 edges
3. `headers()` - 8 edges
4. `EditorState` - 8 edges
5. `SearchState` - 7 edges
6. `Get File` - 7 edges
7. `listDocsTree()` - 6 edges
8. `deleteFile()` - 6 edges
9. `renameFolder()` - 6 edges
10. `ThemeState` - 6 edges

## Surprising Connections (you probably didn't know these)
- `API Delete Endpoint` --semantically_similar_to--> `API Delete Images Endpoint`  [INFERRED] [semantically similar]
  client/src/routes/api/delete/+server.ts → client/src/routes/api/deleteImages/+server.ts
- `API Rename Endpoint` --semantically_similar_to--> `API Delete Endpoint`  [INFERRED] [semantically similar]
  client/src/routes/api/rename/+server.ts → client/src/routes/api/delete/+server.ts
- `usePhysicsTask Hook` --semantically_similar_to--> `useTask Hook`  [INFERRED] [semantically similar]
  docs/threlte/rapier_guide.md → docs/threlte/core/threlte_core_guide.md
- `useLoader Hook` --semantically_similar_to--> `useGltf Hook`  [INFERRED] [semantically similar]
  docs/threlte/core/threlte_core_guide.md → docs/threlte/extras/content.md
- `useLoader Hook` --semantically_similar_to--> `useTexture Hook`  [INFERRED] [semantically similar]
  docs/threlte/core/threlte_core_guide.md → docs/threlte/extras/content.md

## Hyperedges (group relationships)
- **GitHub CRUD Operations** — getfile, updatefile, createfile, deletefile [EXTRACTED 1.00]
- **File Management Workflow** — api_save, api_delete, api_rename, api_docs [EXTRACTED 0.90]
- **Sidebar File Tree System** — sidebar_state, treenode, treeentry, sidebar_node_component, sidebar_component [EXTRACTED 0.85]
- **Physics Layered Architecture** — world_component, rigidbody_component, collider_component, t_component [EXTRACTED 1.00]
- **Input Abstraction Layer** — useKeyboard_hook, useGamepad_hook, useInputMap_hook [EXTRACTED 1.00]
- **Visual Edge Effects** — edges_component, wireframe_component, outlines_component [INFERRED 0.80]

## Communities

### Community 0 - "GitHub API Operations"
Cohesion: 0.19
Nodes (15): createFile(), deleteFile(), deleteFolder(), deleteImage(), getFile(), headers(), listDocsTree(), renameFile() (+7 more)

### Community 1 - "Threlte 3D Framework"
Cohesion: 0.13
Nodes (19): CameraControls Component, Canvas Component, extend Function, HTML Component, injectPlugin Function, Instance Component, InstancedMesh Component, interactivity Plugin (+11 more)

### Community 2 - "API Endpoints"
Cohesion: 0.2
Nodes (17): API Delete Endpoint, API Delete Images Endpoint, API Docs Endpoint, API Rename Endpoint, API Save Endpoint, Create File, Delete File, Delete Folder (+9 more)

### Community 3 - "Rapier Physics Components"
Cohesion: 0.18
Nodes (11): AutoColliders Component, Collider Component, GLTF Component, Rapier Physics Engine, RigidBody Component, @threlte/rapier, useRapier Hook, useGltf Hook (+3 more)

### Community 4 - "Sidebar State"
Cohesion: 0.24
Nodes (5): SidebarState, buildTree(), flattenTree(), formatLabel(), sortNodes()

### Community 5 - "Editor State"
Cohesion: 0.24
Nodes (2): EditorState, extractImageUrls()

### Community 6 - "File Upload UI"
Cohesion: 0.22
Nodes (10): API Upload Endpoint, Editor State Store, File Action Type, File Editor Page, Milkdown Crepe Editor, Sidebar Component, Sidebar Node Component, Sidebar State Store (+2 more)

### Community 7 - "Search State"
Cohesion: 0.32
Nodes (1): SearchState

### Community 8 - "Theme Management"
Cohesion: 0.33
Nodes (1): ThemeState

### Community 9 - "RenameModal Handlers"
Cohesion: 0.4
Nodes (2): handleKeydown(), handleRename()

### Community 11 - "Physics Task Hook"
Cohesion: 0.67
Nodes (3): usePhysicsTask Hook, useStage Hook, useTask Hook

### Community 12 - "Gamepad Input Hook"
Cohesion: 1.0
Nodes (3): useGamepad Hook, useInputMap Hook, useKeyboard Hook

### Community 13 - "Visual Effects"
Cohesion: 0.67
Nodes (3): Edges Component, Outlines Component, Wireframe Component

### Community 15 - "Community 15"
Cohesion: 1.0
Nodes (1): rotate

### Community 16 - "Community 16"
Cohesion: 1.0
Nodes (2): RenameModal Component, Spinner Icon Component

### Community 17 - "Community 17"
Cohesion: 1.0
Nodes (2): Suspense Component, useProgress Hook

### Community 18 - "Community 18"
Cohesion: 1.0
Nodes (2): AudioListener Component, PositionalAudio Component

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (2): ContactShadows Component, Environment Component

### Community 59 - "Community 59"
Cohesion: 1.0
Nodes (1): SvelteKit Runes Mode Configuration

### Community 60 - "Community 60"
Cohesion: 1.0
Nodes (1): Delete Folder Modal

### Community 61 - "Community 61"
Cohesion: 1.0
Nodes (1): Popover Component

### Community 62 - "Community 62"
Cohesion: 1.0
Nodes (1): Settings Component

## Knowledge Gaps
- **35 isolated node(s):** `rotate`, `SvelteKit Runes Mode Configuration`, `Delete Image`, `File Action Type`, `Tree Node Type` (+30 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Editor State`** (10 nodes): `EditorState`, `.markSaved()`, `.openFile()`, `.reset()`, `.save()`, `.setContent()`, `.setOriginalContent()`, `.triggerToast()`, `editor.svelte.ts`, `extractImageUrls()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Search State`** (8 nodes): `SearchState`, `.close()`, `.loadItems()`, `.navigate()`, `.open()`, `.search()`, `.toggle()`, `search.svelte.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Theme Management`** (7 nodes): `theme.svelte.ts`, `ThemeState`, `.constructor()`, `.getInitial()`, `.setTheme()`, `.sync()`, `.toggleVariant()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `RenameModal Handlers`** (6 nodes): `handleKeydown()`, `handleOverlayClick()`, `handleRename()`, `onInput()`, `registerInput()`, `RenameModal.svelte`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (2 nodes): `ThemeSelector.svelte`, `rotate`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (2 nodes): `RenameModal Component`, `Spinner Icon Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (2 nodes): `Suspense Component`, `useProgress Hook`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (2 nodes): `AudioListener Component`, `PositionalAudio Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (2 nodes): `ContactShadows Component`, `Environment Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 59`** (1 nodes): `SvelteKit Runes Mode Configuration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 60`** (1 nodes): `Delete Folder Modal`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 61`** (1 nodes): `Popover Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 62`** (1 nodes): `Settings Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `T Component` connect `Threlte 3D Framework` to `Rapier Physics Components`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `Get File` connect `API Endpoints` to `File Upload UI`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `File Editor Page` connect `File Upload UI` to `API Endpoints`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `PUT()` (e.g. with `listDocsTree()` and `renameFolder()`) actually correct?**
  _`PUT()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `rotate`, `SvelteKit Runes Mode Configuration`, `Delete Image` to the rest of the system?**
  _35 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Threlte 3D Framework` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._