# P5-S08-4D — WORKSPACE 1440 — CONTEXT RAIL FOOTER SHORTCUTS

**Timestamp:** 2026-10-07 22:12:00 +0200
**Profile:** CRITICAL · Review Pack = LIGHT
**Branch:** `delivery/sfia-studio-product-simplification-p5-s08-global-p3-visual-parity`
**Verdict:** **WORKSPACE 1440 — CONTEXT RAIL FOOTER SHORTCUTS = CLOSED**

---

## Git truth

| Item | Value |
| --- | --- |
| Branch | `delivery/sfia-studio-product-simplification-p5-s08-global-p3-visual-parity` |
| Entry HEAD | `c8dc4f710eeb21c612de159953166993186e5593` |
| Exit HEAD | `debbd1e800b86be2f96a6b504fa02fdec9f2acf7` |
| origin/main | `eed18bd572d65b6f5f4878ed24b195e4feeb5c7e` |
| Project push / PR | **NONE** |

Current S08-4 work preserved. No reset / stash / unrelated cleanup.

## Root cause

Not a missing second nav implementation. `ProjectContextShortcuts` (Journal du cycle · Historique · Synthèses) was already mounted as a sibling under the context rail.

The prior sticky column height used `calc(100vh - global-header)` while the rail already sat below the project header, so the Quick Actions footer painted **past the fold**. At 1440×1024 the shortcuts looked absent (empty cream under Synthèse) — same class of clip later addressed for 1024 scroll. Stale review artifact `final/workspace-1440.png` still showed that clipped state.

## Responsive rule corrected

- Conversation / Exécution viewport pin (`height: 100%` / `max-height: 100%` on `.lpsColumn`) keeps the whole rail — including the footer — inside the visible budget at **both** 1440 and 1024.
- Explicit `.contextRailFooter` wrapper: `flex: 0 0 auto` + `margin-top: auto`, sibling of `.lpsScrollWrap` (not nested in `.lpsSheet`).
- `@media (min-width: 1200px)` asserts `.contextRailFooter { display: block }` — no desktop-only hide.
- Same `ProjectContextShortcuts` component reused (no desktop-only duplicate).

## Files changed

- `ProjectWorkspacePage.tsx` — `contextRailFooter` wrapper around existing shortcuts
- `ProjectWorkspacePage.module.css` — footer pin + desktop display contract + column overflow
- `p5.s01.workspaceLayout.ui.test.tsx` — 1440 footer placement contract
- `capture-workspace-1440-context-footer.mjs` + runtime / `final/workspace-1440.png`

## Captures

| Viewport | Path | Result |
| --- | --- | --- |
| 1440×1024 | `…/runtime/workspace-1440.png` (+ `workspace-1440-context-footer.png`) | Journal / Historique / Synthèses at rail foot · navTop 967 · navBottom 1024 · pinned · outside scroll |
| 1024×768 | `…/runtime/workspace-1024.png` | footer + scroll structure preserved |
| 390×844 | `…/runtime/workspace-390.png` | single shortcut nav · no duplicate |

Harness: **CONTEXT_FOOTER_SHORTCUTS_OK**

## Tests

- Vitest `p5.s01.workspaceLayout` + `p5.s07.journalPrincipalView` — **6/6 PASS**
- `tsc --noEmit` — **PASS**
- `next build` — **PASS**

## Remaining reserve

None for this P2 gap. ≠ global S08-4D closed · ≠ Project push/PR.
