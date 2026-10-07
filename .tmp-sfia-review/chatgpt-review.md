# P5-S08-4D — WORKSPACE 1024 CONTEXT RAIL CLOSURE / SCROLL AFFORDANCE

**Timestamp:** 2026-10-07 21:49:49 +0200
**Profile:** CRITICAL · Review Pack = LIGHT
**Branch:** `delivery/sfia-studio-product-simplification-p5-s08-global-p3-visual-parity`
**Verdict:** **WORKSPACE 1024 — CONTEXT RAIL SCROLL/CLOSURE AFFORDANCE = CLOSED**

---

## Git truth

| Item | Value |
| --- | --- |
| Branch | `delivery/sfia-studio-product-simplification-p5-s08-global-p3-visual-parity` |
| Entry HEAD | `aa224d830bd4316de7adde3f90be7b42785bfb30` |
| Exit HEAD | *(this commit tip)* |
| origin/main | `eed18bd572d65b6f5f4878ed24b195e4feeb5c7e` |
| Project push / PR | **NONE** |

Prior S08-4 work preserved. No reset / stash / discard.

## Scroll owner

**RIGHT RAIL (CASE A)** — with a height-budget bug that produced CASE-C symptoms.

Architecture already intended independent scroll:
- `.lpsSheet` / `project-context-scroll` → `overflow-y: auto|scroll`
- comment: “context sticky + own scroll”

## Root cause

Sticky column height used `calc(100vh - global-header)` while the rail already sat below the project header. At 1024×768 the column extended past the fold; Synthèse looked truncated above the sticky footer shortcuts, with no perceptible scroll affordance (macOS/Chromium overlay scrollbars invisible).

## Correction

1. Pin Conversation/Exécution workspace to remaining viewport (`height/max-height: 100vh; overflow: hidden`) and stretch the context column to the layout row (`height/max-height: 100%`).
2. Sticky fallback height now subtracts `--ws-project-h` as well.
3. Real scroll metrics drive a thin warm custom indicator (`project-context-scroll-indicator`) — only when `scrollHeight > clientHeight`; thumb moves with `scrollTop`.
4. Bottom padding retained so the last scrolled content has breathing room above sticky shortcuts.

No Product content removed. No second shell / rail / fake scrollbar image.

## Files modified

- `ProjectWorkspacePage.tsx` — scroll ref, metrics sync, indicator
- `ProjectWorkspacePage.module.css` — viewport pin, wrap, indicator styles
- `p5.s01.workspaceLayout.ui.test.tsx` — contract assertions
- capture helper `capture-workspace-1024-context-scroll.mjs`
- runtime captures under `.tmp-sfia-review/visual/s08-4/final-fidelity/runtime/`

## Behavior after correction

At 1024×768:
- column bottom = viewport bottom (no silent clip past fold)
- `scrollHeight > clientHeight` → rail scrolls independently
- indicator visible; thumb top moves on scroll (proof: 172 → 245)
- end state shows complete Synthèse (Verdict + Voir la synthèse) above footer shortcuts

## Captures

| Capture | Path | Notes |
| --- | --- | --- |
| 1024 top | `…/runtime/workspace-1024.png` (+ `workspace-1024-context-top.png`) | sha `3e8b8c8be4b8` · indicator present |
| 1024 end | `…/runtime/workspace-1024-context-end.png` | sha `070234cb9a00` · thumb moved · Synthèse complete |
| 1440 regression | `…/runtime/workspace-1440.png` | sha `6159a61fb441` · no composition break |
| 390 regression | `…/runtime/workspace-390.png` | sha `ad4e3f93a3d7` · mobile sheet unchanged |

## Tests

- Vitest `p5.s01.workspaceLayout.ui.test.tsx` — **3/3 PASS**
- `tsc --noEmit` — **PASS**
- `next build` — **PASS**
- Capture harness metrics — **CONTEXT_SCROLL_OK**

## Reserves

- Custom indicator used because native overlay scrollbars are not reliably visible in Product/runtime screenshots; still bound to real scroll metrics (not decorative).
- Sticky footer shortcuts remain outside the scroll sheet (pre-existing). Rail scroll reveals the rest of Synthèse above them.
- Accepted enriched Workspace composition preserved (not forced back to sparser Figma).

## Non-regression

- Desktop 1440: no layout break; indicator only when overflow exists.
- Mobile 390: no nested-scroll redesign; sheet pattern retained.

## Explicit non-claims

≠ S08-4D globally closed · ≠ GLOBAL P3 VISUAL PARITY closed · ≠ Project push/PR
