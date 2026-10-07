# P5-S08-4D — SYNTHÈSES — SCROLL AFFORDANCE MICRO-CORRECTION

**Timestamp:** 2026-10-07 21:55:30 +0200
**Profile:** CRITICAL · Review Pack = LIGHT
**Branch:** `delivery/sfia-studio-product-simplification-p5-s08-global-p3-visual-parity`
**Verdict:** **SYNTHÈSES — SCROLL AFFORDANCE = CLOSED**

---

## Git truth

| Item | Value |
| --- | --- |
| Branch | `delivery/sfia-studio-product-simplification-p5-s08-global-p3-visual-parity` |
| Entry HEAD | `a70c6951b427cc1271bdfff19411f3cdc622a588` |
| Exit HEAD | `ecab7ba1dc3e1304c9a310ffabb59fb96e3992cb` |
| origin/main | `eed18bd572d65b6f5f4878ed24b195e4feeb5c7e` |
| Project push / PR | **NONE** |

Current S08-4 work preserved. No reset / stash / unrelated cleanup.

## Scroll owner

**DETAIL PANE (CASE A)** — `project-syntheses-detail-scroll` (`.detailScroll`) already owns vertical overflow under a fixed detail header. Architecture retained.

## Root cause

Native/styled scrollbars on the detail pane are typically overlay/invisible in Product runtime screenshots, so scrollability of the Synthèse body was not perceptually obvious even though overflow was real.

## Behavior implemented

- Keep the existing Synthesis Scroll container and content (incl. Éléments vérifiés).
- Hide unreliable overlay native scrollbar chrome.
- Render a thin warm custom track/thumb **only when** `scrollHeight > clientHeight`, bound to `scrollTop` / `scrollHeight` / `clientHeight`.
- Wheel / trackpad / keyboard / touch still operate on the real scroll element.
- Mobile (`max-width: 767px`): indicator hidden — no nested scroll chrome.

## Files changed

- `surfaces/SynthesesSurface.tsx`
- `surfaces/SynthesesSurface.module.css`
- `ProjectWorkspacePage.tsx` (jsdom-safe `ResizeObserver` guard shared with context-rail indicator)
- `p5.s04.synthesesSurface.ui.test.tsx`
- `capture-syntheses-scroll-affordance.mjs` + runtime captures

## Captures

| Capture | Path | Proof |
| --- | --- | --- |
| Top | `…/runtime/syntheses-1440.png` / `syntheses-scroll-top-1440.png` | indicator present · thumb y≈319–837 · sha `9e6766bc25a1` |
| End (Éléments vérifiés) | `…/runtime/syntheses-verified-1440.png` / `syntheses-scroll-end-1440.png` | thumb moved y≈488–983 · sha `8687f8a833a2` |
| Compact 1024 | `…/runtime/syntheses-1024.png` | smoke OK |
| Mobile 390 | `…/runtime/syntheses-390.png` | no nested indicator |

Metrics: scrollTop 0 → 234 · thumbTransform `translateY(0px)` → `translateY(169px)`.

## Tests

- Vitest Synthèses + Workspace layout — **9/9 PASS**
- `tsc --noEmit` — **PASS**
- `next build` — **PASS**
- Capture harness — **SCROLL_AFFORDANCE_OK**

## Remaining reserve

Custom indicator used because OS overlay scrollbars are not reliably visible; still bound to real scroll metrics (not decorative). Content / Éléments vérifiés / IA unchanged.

## Explicit non-claims

≠ global S08-4D closed · ≠ Project push/PR · ≠ Journal/Historique/Aperçu changes
