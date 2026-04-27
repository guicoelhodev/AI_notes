# Graph Report - .  (2026-04-27)

## Corpus Check
- Corpus is ~20,527 words - fits in a single context window. You may not need a graph.

## Summary
- 316 nodes · 246 edges · 89 communities detected
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 37 edges (avg confidence: 0.79)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Rapier Physics Engine|Rapier Physics Engine]]
- [[_COMMUNITY_SvelteKit Routes|SvelteKit Routes]]
- [[_COMMUNITY_GitHub API Wrapper|GitHub API Wrapper]]
- [[_COMMUNITY_Icon Design System|Icon Design System]]
- [[_COMMUNITY_Threlte Framework|Threlte Framework]]
- [[_COMMUNITY_Threlte Core Hooks|Threlte Core Hooks]]
- [[_COMMUNITY_UI Components + Stores|UI Components + Stores]]
- [[_COMMUNITY_Sidebar + Tree Utils|Sidebar + Tree Utils]]
- [[_COMMUNITY_Editor State|Editor State]]
- [[_COMMUNITY_Search State|Search State]]
- [[_COMMUNITY_Settings + Theme|Settings + Theme]]
- [[_COMMUNITY_Theme State|Theme State]]
- [[_COMMUNITY_Rename Modal|Rename Modal]]
- [[_COMMUNITY_GLTF Loading|GLTF Loading]]
- [[_COMMUNITY_Input Hooks|Input Hooks]]
- [[_COMMUNITY_Neovim Setup|Neovim Setup]]
- [[_COMMUNITY_Suspense Hooks|Suspense Hooks]]
- [[_COMMUNITY_Tmux Setup|Tmux Setup]]
- [[_COMMUNITY_Audio Components|Audio Components]]
- [[_COMMUNITY_GNOME Setup|GNOME Setup]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 79|Community 79]]
- [[_COMMUNITY_Community 80|Community 80]]
- [[_COMMUNITY_Community 81|Community 81]]
- [[_COMMUNITY_Community 82|Community 82]]
- [[_COMMUNITY_Community 83|Community 83]]
- [[_COMMUNITY_Community 84|Community 84]]
- [[_COMMUNITY_Community 85|Community 85]]
- [[_COMMUNITY_Community 86|Community 86]]
- [[_COMMUNITY_Community 87|Community 87]]
- [[_COMMUNITY_Community 88|Community 88]]
- [[_COMMUNITY_Community 89|Community 89]]
- [[_COMMUNITY_Community 90|Community 90]]
- [[_COMMUNITY_Community 91|Community 91]]
- [[_COMMUNITY_Community 92|Community 92]]
- [[_COMMUNITY_Community 93|Community 93]]
- [[_COMMUNITY_Community 94|Community 94]]
- [[_COMMUNITY_Community 95|Community 95]]
- [[_COMMUNITY_Community 96|Community 96]]
- [[_COMMUNITY_Community 97|Community 97]]
- [[_COMMUNITY_Community 98|Community 98]]
- [[_COMMUNITY_Community 99|Community 99]]
- [[_COMMUNITY_Community 100|Community 100]]
- [[_COMMUNITY_Community 101|Community 101]]
- [[_COMMUNITY_Community 102|Community 102]]
- [[_COMMUNITY_Community 103|Community 103]]
- [[_COMMUNITY_Community 104|Community 104]]
- [[_COMMUNITY_Community 105|Community 105]]
- [[_COMMUNITY_Community 106|Community 106]]
- [[_COMMUNITY_Community 107|Community 107]]
- [[_COMMUNITY_Community 108|Community 108]]
- [[_COMMUNITY_Community 109|Community 109]]
- [[_COMMUNITY_Community 110|Community 110]]
- [[_COMMUNITY_Community 111|Community 111]]
- [[_COMMUNITY_Community 112|Community 112]]
- [[_COMMUNITY_Community 113|Community 113]]
- [[_COMMUNITY_Community 114|Community 114]]
- [[_COMMUNITY_Community 115|Community 115]]
- [[_COMMUNITY_Community 116|Community 116]]
- [[_COMMUNITY_Community 117|Community 117]]
- [[_COMMUNITY_Community 118|Community 118]]
- [[_COMMUNITY_Community 119|Community 119]]
- [[_COMMUNITY_Community 120|Community 120]]
- [[_COMMUNITY_Community 121|Community 121]]
- [[_COMMUNITY_Community 122|Community 122]]
- [[_COMMUNITY_Community 123|Community 123]]
- [[_COMMUNITY_Community 124|Community 124]]
- [[_COMMUNITY_Community 125|Community 125]]
- [[_COMMUNITY_Community 126|Community 126]]
- [[_COMMUNITY_Community 127|Community 127]]
- [[_COMMUNITY_Community 128|Community 128]]
- [[_COMMUNITY_Community 129|Community 129]]
- [[_COMMUNITY_Community 130|Community 130]]
- [[_COMMUNITY_Community 131|Community 131]]
- [[_COMMUNITY_Community 132|Community 132]]

## God Nodes (most connected - your core abstractions)
1. `GitHub API Module` - 14 edges
2. `RigidBody Component` - 10 edges
3. `PUT()` - 8 edges
4. `headers()` - 8 edges
5. `EditorState` - 8 edges
6. `GET()` - 7 edges
7. `SearchState` - 7 edges
8. `listDocsTree()` - 6 edges
9. `deleteFile()` - 6 edges
10. `renameFolder()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Svelte Logo Favicon SVG` --conceptually_related_to--> `@threlte/extras Package`  [INFERRED]
  client/src/lib/assets/favicon.svg → docs/threlte/extras/README.md
- `App Favicon SVG` --conceptually_related_to--> `Neovim Setup Configuration`  [INFERRED]
  client/static/favicon.svg → docs/linux_setup/neovim_editor.md
- `DELETE()` --calls--> `deleteFolder()`  [INFERRED]
  /home/guilherme.coelho/Projects/personal/AI_notes/client/src/routes/api/delete/+server.ts → /home/guilherme.coelho/Projects/personal/AI_notes/client/src/lib/github.ts
- `DELETE()` --calls--> `deleteFile()`  [INFERRED]
  /home/guilherme.coelho/Projects/personal/AI_notes/client/src/routes/api/delete/+server.ts → /home/guilherme.coelho/Projects/personal/AI_notes/client/src/lib/github.ts
- `Search State Store` --conceptually_related_to--> `Tree Utilities`  [INFERRED]
  client/src/lib/stores/search.svelte.ts → client/src/lib/utils/tree.ts

## Communities

### Community 0 - "Rapier Physics Engine"
Cohesion: 0.11
Nodes (23): Attractor Component, AutoColliders Component, Collider Component, CollisionGroups Component, Debug Component, Fixed Joint, Prismatic Joint, RAPIER Module (+15 more)

### Community 1 - "SvelteKit Routes"
Cohesion: 0.13
Nodes (16): SidebarNode Component, Sidebar Component, App Type Definitions, Delete Images API, Delete API, Docs API, File Editor Page, GitHub API Module (+8 more)

### Community 2 - "GitHub API Wrapper"
Cohesion: 0.25
Nodes (15): createFile(), deleteFile(), deleteFolder(), deleteImage(), getFile(), headers(), listDocsTree(), renameFile() (+7 more)

### Community 3 - "Icon Design System"
Cohesion: 0.12
Nodes (16): ChevronDown Icon, CopyContext Icon, Edit Icon, Folder Icon, Github Icon, IaIcon, Svelte Icon Design System, Menu Icon (+8 more)

### Community 4 - "Threlte Framework"
Cohesion: 0.18
Nodes (13): AI Notes Project, Canvas Component, Rapier Physics Engine, Svelte Project (sv), Threlte Framework, ContactShadows Component, FakeGlowMaterial Component, HTML Component (+5 more)

### Community 5 - "Threlte Core Hooks"
Cohesion: 0.15
Nodes (13): bvh Plugin, Canvas Component, injectPlugin Hook, interactivity Plugin, layers Plugin, meshBounds Hook, T Component, transitions Plugin (+5 more)

### Community 6 - "UI Components + Stores"
Cohesion: 0.27
Nodes (11): DeleteFolderModal, FileActions, PageActions, RenameModal, SearchModal, Spinner Icon, Toast Notification, Editor State Store (+3 more)

### Community 7 - "Sidebar + Tree Utils"
Cohesion: 0.24
Nodes (5): SidebarState, buildTree(), flattenTree(), formatLabel(), sortNodes()

### Community 8 - "Editor State"
Cohesion: 0.24
Nodes (2): EditorState, extractImageUrls()

### Community 9 - "Search State"
Cohesion: 0.32
Nodes (1): SearchState

### Community 10 - "Settings + Theme"
Cohesion: 0.29
Nodes (8): Gear Icon, LookAndFeelPanel, ProjectDetailsPanel, Settings, SettingsModal, ThemeSelector, ThemeToggle, Theme State Store

### Community 11 - "Theme State"
Cohesion: 0.33
Nodes (1): ThemeState

### Community 12 - "Rename Modal"
Cohesion: 0.4
Nodes (2): handleKeydown(), handleRename()

### Community 13 - "GLTF Loading"
Cohesion: 0.33
Nodes (6): GLTF Component, InstancedMesh Component, InstancedMeshes Component, InstancedSprite Component, useGltfAnimations Hook, useGltf Hook

### Community 14 - "Input Hooks"
Cohesion: 0.4
Nodes (6): Task Scheduling System, useGamepad Hook, useInputMap Hook, useKeyboard Hook, useStage Hook, useTask Hook

### Community 15 - "Neovim Setup"
Cohesion: 0.33
Nodes (6): App Favicon SVG, blink.cmp Completion Plugin, lazy.nvim Plugin Manager, LazyGit Tool, Neovim Setup Configuration, Yazi File Manager

### Community 16 - "Suspense Hooks"
Cohesion: 0.4
Nodes (5): onReveal Hook, onSuspend Hook, Suspense Component, useProgress Hook, useSuspense Hook

### Community 17 - "Tmux Setup"
Cohesion: 0.5
Nodes (4): Catppuccin Tmux Theme, Tmux Plugin Manager, Tmux Sessionizer Script, Tmux Setup Configuration

### Community 19 - "Audio Components"
Cohesion: 0.67
Nodes (3): Audio Component, AudioListener Component, PositionalAudio Component

### Community 20 - "GNOME Setup"
Cohesion: 0.67
Nodes (3): Forge GNOME Extension, GNOME Setup Configuration, Static Workspaces Rationale

### Community 22 - "Community 22"
Cohesion: 1.0
Nodes (1): rotate

### Community 23 - "Community 23"
Cohesion: 1.0
Nodes (2): ESLint Config, Svelte Config

### Community 24 - "Community 24"
Cohesion: 1.0
Nodes (2): Align Component, Text3DGeometry Component

### Community 67 - "Community 67"
Cohesion: 1.0
Nodes (1): Vite Config

### Community 68 - "Community 68"
Cohesion: 1.0
Nodes (1): File Page Config

### Community 69 - "Community 69"
Cohesion: 1.0
Nodes (1): Lib Index

### Community 70 - "Community 70"
Cohesion: 1.0
Nodes (1): Feature Blocked Modal

### Community 71 - "Community 71"
Cohesion: 1.0
Nodes (1): Popover Component

### Community 72 - "Community 72"
Cohesion: 1.0
Nodes (1): ThreeDots Icon

### Community 73 - "Community 73"
Cohesion: 1.0
Nodes (1): File Icon

### Community 74 - "Community 74"
Cohesion: 1.0
Nodes (1): Lock Icon

### Community 75 - "Community 75"
Cohesion: 1.0
Nodes (1): Edges Component

### Community 76 - "Community 76"
Cohesion: 1.0
Nodes (1): Wireframe Component

### Community 77 - "Community 77"
Cohesion: 1.0
Nodes (1): Outlines Component

### Community 78 - "Community 78"
Cohesion: 1.0
Nodes (1): AsciiRenderer Component

### Community 79 - "Community 79"
Cohesion: 1.0
Nodes (1): CubeCamera Component

### Community 80 - "Community 80"
Cohesion: 1.0
Nodes (1): ImageMaterial Component

### Community 81 - "Community 81"
Cohesion: 1.0
Nodes (1): MeshDiscardMaterial Component

### Community 82 - "Community 82"
Cohesion: 1.0
Nodes (1): ShadowMaterial Component

### Community 83 - "Community 83"
Cohesion: 1.0
Nodes (1): Mask Component

### Community 84 - "Community 84"
Cohesion: 1.0
Nodes (1): UvMaterial Component

### Community 85 - "Community 85"
Cohesion: 1.0
Nodes (1): PointsMaterial Component

### Community 86 - "Community 86"
Cohesion: 1.0
Nodes (1): AnimatedSpriteMaterial Component

### Community 87 - "Community 87"
Cohesion: 1.0
Nodes (1): MeshLineGeometry Component

### Community 88 - "Community 88"
Cohesion: 1.0
Nodes (1): MeshLineMaterial Component

### Community 89 - "Community 89"
Cohesion: 1.0
Nodes (1): LinearGradientTexture Component

### Community 90 - "Community 90"
Cohesion: 1.0
Nodes (1): RadialGradientTexture Component

### Community 91 - "Community 91"
Cohesion: 1.0
Nodes (1): useFBO Hook

### Community 92 - "Community 92"
Cohesion: 1.0
Nodes (1): Environment Component

### Community 93 - "Community 93"
Cohesion: 1.0
Nodes (1): CubeEnvironment Component

### Community 94 - "Community 94"
Cohesion: 1.0
Nodes (1): VirtualEnvironment Component

### Community 95 - "Community 95"
Cohesion: 1.0
Nodes (1): SoftShadows Component

### Community 96 - "Community 96"
Cohesion: 1.0
Nodes (1): BakeShadows Component

### Community 97 - "Community 97"
Cohesion: 1.0
Nodes (1): ShadowAlpha Component

### Community 98 - "Community 98"
Cohesion: 1.0
Nodes (1): Float Component

### Community 99 - "Community 99"
Cohesion: 1.0
Nodes (1): Grid Component

### Community 100 - "Community 100"
Cohesion: 1.0
Nodes (1): Stars Component

### Community 101 - "Community 101"
Cohesion: 1.0
Nodes (1): Sky Component

### Community 102 - "Community 102"
Cohesion: 1.0
Nodes (1): Sparkles Component

### Community 103 - "Community 103"
Cohesion: 1.0
Nodes (1): BackdropGeometry Component

### Community 104 - "Community 104"
Cohesion: 1.0
Nodes (1): Billboard Component

### Community 105 - "Community 105"
Cohesion: 1.0
Nodes (1): CSM Component

### Community 106 - "Community 106"
Cohesion: 1.0
Nodes (1): Bounds Component

### Community 107 - "Community 107"
Cohesion: 1.0
Nodes (1): Resize Component

### Community 108 - "Community 108"
Cohesion: 1.0
Nodes (1): Portal Component

### Community 109 - "Community 109"
Cohesion: 1.0
Nodes (1): PortalTarget Component

### Community 110 - "Community 110"
Cohesion: 1.0
Nodes (1): View Component

### Community 111 - "Community 111"
Cohesion: 1.0
Nodes (1): HUD Component

### Community 112 - "Community 112"
Cohesion: 1.0
Nodes (1): useViewport Hook

### Community 113 - "Community 113"
Cohesion: 1.0
Nodes (1): useAudioListener Hook

### Community 114 - "Community 114"
Cohesion: 1.0
Nodes (1): Instance Component

### Community 115 - "Community 115"
Cohesion: 1.0
Nodes (1): Detailed Component

### Community 116 - "Community 116"
Cohesion: 1.0
Nodes (1): PerfMonitor Component

### Community 117 - "Community 117"
Cohesion: 1.0
Nodes (1): SVG Component

### Community 118 - "Community 118"
Cohesion: 1.0
Nodes (1): Text Component

### Community 119 - "Community 119"
Cohesion: 1.0
Nodes (1): Decal Component

### Community 120 - "Community 120"
Cohesion: 1.0
Nodes (1): RoundedBoxGeometry Component

### Community 121 - "Community 121"
Cohesion: 1.0
Nodes (1): OrbitControls Component

### Community 122 - "Community 122"
Cohesion: 1.0
Nodes (1): CameraControls Component

### Community 123 - "Community 123"
Cohesion: 1.0
Nodes (1): TransformControls Component

### Community 124 - "Community 124"
Cohesion: 1.0
Nodes (1): Gizmo Component

### Community 125 - "Community 125"
Cohesion: 1.0
Nodes (1): TrackballControls Component

### Community 126 - "Community 126"
Cohesion: 1.0
Nodes (1): useCursor Hook

### Community 127 - "Community 127"
Cohesion: 1.0
Nodes (1): useTrailTexture Hook

### Community 128 - "Community 128"
Cohesion: 1.0
Nodes (1): watch Utility

### Community 129 - "Community 129"
Cohesion: 1.0
Nodes (1): observe Utility

### Community 130 - "Community 130"
Cohesion: 1.0
Nodes (1): asyncWritable Utility

### Community 131 - "Community 131"
Cohesion: 1.0
Nodes (1): currentWritable Utility

### Community 132 - "Community 132"
Cohesion: 1.0
Nodes (1): isInstanceOf Utility

## Knowledge Gaps
- **139 isolated node(s):** `rotate`, `Svelte Config`, `ESLint Config`, `Vite Config`, `App Type Definitions` (+134 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Editor State`** (10 nodes): `EditorState`, `.markSaved()`, `.openFile()`, `.reset()`, `.save()`, `.setContent()`, `.setOriginalContent()`, `.triggerToast()`, `editor.svelte.ts`, `extractImageUrls()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Search State`** (8 nodes): `SearchState`, `.close()`, `.loadItems()`, `.navigate()`, `.open()`, `.search()`, `.toggle()`, `search.svelte.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Theme State`** (7 nodes): `theme.svelte.ts`, `ThemeState`, `.constructor()`, `.getInitial()`, `.setTheme()`, `.sync()`, `.toggleVariant()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Rename Modal`** (6 nodes): `handleKeydown()`, `handleOverlayClick()`, `handleRename()`, `onInput()`, `registerInput()`, `RenameModal.svelte`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (2 nodes): `ThemeSelector.svelte`, `rotate`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (2 nodes): `ESLint Config`, `Svelte Config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (2 nodes): `Align Component`, `Text3DGeometry Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (1 nodes): `Vite Config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 68`** (1 nodes): `File Page Config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 69`** (1 nodes): `Lib Index`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 70`** (1 nodes): `Feature Blocked Modal`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 71`** (1 nodes): `Popover Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (1 nodes): `ThreeDots Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 73`** (1 nodes): `File Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (1 nodes): `Lock Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 75`** (1 nodes): `Edges Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 76`** (1 nodes): `Wireframe Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 77`** (1 nodes): `Outlines Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 78`** (1 nodes): `AsciiRenderer Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 79`** (1 nodes): `CubeCamera Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 80`** (1 nodes): `ImageMaterial Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 81`** (1 nodes): `MeshDiscardMaterial Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 82`** (1 nodes): `ShadowMaterial Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 83`** (1 nodes): `Mask Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 84`** (1 nodes): `UvMaterial Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 85`** (1 nodes): `PointsMaterial Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 86`** (1 nodes): `AnimatedSpriteMaterial Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 87`** (1 nodes): `MeshLineGeometry Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 88`** (1 nodes): `MeshLineMaterial Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 89`** (1 nodes): `LinearGradientTexture Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 90`** (1 nodes): `RadialGradientTexture Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 91`** (1 nodes): `useFBO Hook`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 92`** (1 nodes): `Environment Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 93`** (1 nodes): `CubeEnvironment Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 94`** (1 nodes): `VirtualEnvironment Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 95`** (1 nodes): `SoftShadows Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 96`** (1 nodes): `BakeShadows Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 97`** (1 nodes): `ShadowAlpha Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 98`** (1 nodes): `Float Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 99`** (1 nodes): `Grid Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 100`** (1 nodes): `Stars Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 101`** (1 nodes): `Sky Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 102`** (1 nodes): `Sparkles Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 103`** (1 nodes): `BackdropGeometry Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 104`** (1 nodes): `Billboard Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 105`** (1 nodes): `CSM Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 106`** (1 nodes): `Bounds Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 107`** (1 nodes): `Resize Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 108`** (1 nodes): `Portal Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 109`** (1 nodes): `PortalTarget Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 110`** (1 nodes): `View Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 111`** (1 nodes): `HUD Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 112`** (1 nodes): `useViewport Hook`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 113`** (1 nodes): `useAudioListener Hook`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 114`** (1 nodes): `Instance Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 115`** (1 nodes): `Detailed Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 116`** (1 nodes): `PerfMonitor Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 117`** (1 nodes): `SVG Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 118`** (1 nodes): `Text Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 119`** (1 nodes): `Decal Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 120`** (1 nodes): `RoundedBoxGeometry Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 121`** (1 nodes): `OrbitControls Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 122`** (1 nodes): `CameraControls Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 123`** (1 nodes): `TransformControls Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 124`** (1 nodes): `Gizmo Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 125`** (1 nodes): `TrackballControls Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 126`** (1 nodes): `useCursor Hook`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 127`** (1 nodes): `useTrailTexture Hook`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 128`** (1 nodes): `watch Utility`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 129`** (1 nodes): `observe Utility`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 130`** (1 nodes): `asyncWritable Utility`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 131`** (1 nodes): `currentWritable Utility`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 132`** (1 nodes): `isInstanceOf Utility`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Shared Types` connect `SvelteKit Routes` to `Sidebar + Tree Utils`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Why does `Tree Utilities` connect `UI Components + Stores` to `Editor State`, `Sidebar + Tree Utils`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `GitHub API Module` connect `SvelteKit Routes` to `GitHub API Wrapper`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Are the 15 inferred relationships involving `Svelte Icon Design System` (e.g. with `Search Icon` and `Moon Icon`) actually correct?**
  _`Svelte Icon Design System` has 15 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `PUT()` (e.g. with `listDocsTree()` and `renameFolder()`) actually correct?**
  _`PUT()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `rotate`, `Svelte Config`, `ESLint Config` to the rest of the system?**
  _139 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Rapier Physics Engine` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._