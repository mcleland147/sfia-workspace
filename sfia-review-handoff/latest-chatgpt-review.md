# P5-S08-4 — SYNTHÈSES SCROLLED DETAIL + ÉLÉMENTS VÉRIFIÉS

**Timestamp:** 2026-10-07 21:30:42 +0200
**Profile:** CRITICAL · Review Pack = FULL
**Branch:** `delivery/sfia-studio-product-simplification-p5-s08-global-p3-visual-parity`
**Sub-verdict:** **SYNTHÈSES — LOWER VERIFIED SCROLL STATE = PASS CANDIDATE**

---

## 1. Git truth

| Item | Value |
| --- | --- |
| Branch | `delivery/sfia-studio-product-simplification-p5-s08-global-p3-visual-parity` |
| Entry HEAD | `a4bb481cd47352b445e43918e4f4c42c69242a78` |
| Exit HEAD | `d4d9cf70291788d11b9d27e55f95a3b34bc021dd` |
| origin/main | `eed18bd572d65b6f5f4878ed24b195e4feeb5c7e` (unchanged) |
| Main moved | **NO** |
| Project push / PR / merge | **NONE / NOT AUTHORIZED** |
| Reset / rebase / discard | **NONE** |

Local Git truth wins over older remote review handoffs. Prior uncommitted Aperçu/P2 corrections preserved and included in this scoped commit where cohesive.

## 2. Sources read

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/product-simplification/03-chat-first-product-simplification-workspace-interaction-architecture.md`
- `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md`
- `projects/sfia-studio/sfia-v3-framing/ckc/04-ux-ui.md`
- `projects/sfia-studio/sfia-v3-framing/ckc/08-delivery-implementation.md`
- `projects/sfia-studio/sfia-v3-framing/ckc/09-qa-validation.md`

v2.6 = process only. P3 / Product Simplification remains Product visual/interaction authority.

## 3. Figma references inspected

| Node | Role | fileKey |
| --- | --- | --- |
| `164:3` | Canonical top / initial Synthèses state | `m4g8j0gNbEzfIuH6S9AZJF` |
| `316:2` | Supplemental lower scrolled + Éléments vérifiés | `m4g8j0gNbEzfIuH6S9AZJF` |

Inspected via Figma MCP (`get_screenshot` + `get_design_context` + `use_figma` export metadata). **Figma not mutated.**

- `164:3` remains top-state authority.
- `316:2` does **not** replace `164:3`; lower-state reference only.
- No global design-system promotion.

## 4. Root cause of lower-state mismatch

1. **No height-bounded Synthesis Scroll** — detail content grew the page (`min-height: 100vh` root without max), so `overflow:auto` never constrained; lower sections were “reachable” only by growing the viewport, not by a real detail scroller matching Figma `Synthesis Scroll`.
2. **Éléments vérifiés** rendered as a plain section body — missing 316:2 secondary card hierarchy (title + Product count right-aligned + secondary summary).
3. **QA fixture section copy** was too short for a distinct scrolled composition after the height fix; enriched with Product-shaped longer sections without inventing Evidence counts.

## 5. Files modified

### Product / UI
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/SynthesesSurface.module.css`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/synthesisPresentation.ts` (`formatVerifiedElementsCount`)
- `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css` (viewport pin for `data-active-view=syntheses`; Execution badge tokens retained)
- Prior preserved Aperçu continuity: `OverviewSurface.*`, `ProjectWorkspacePage.tsx`, `product-tokens.css`, related tests

### Tests / harness
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx` (T17/T18 + count helper)
- `projects/sfia-studio/app/__tests__/project-assistant/s08-4.seedFinalFidelity.d0.test.ts` (longer Product section copy for scroll proof)
- `projects/sfia-studio/app/e2e/support/observeVisualPairing.mjs` (verified / detail-scroll markers)
- `.tmp-sfia-review/visual/s08-4/final-fidelity/capture-canonical-unified.mjs`
- `.tmp-sfia-review/visual/s08-4/final-fidelity/state-manifest.json` (`syntheses-verified-1440` ↔ `316:2`)
- `.tmp-sfia-review/visual/s08-4/contracts/316-2-syntheses-verified-scrolled.json`

### Evidence
- Runtime: `…/runtime/syntheses-1440.png`, `…/runtime/syntheses-verified-1440.png`
- Figma ref: `…/figma/syntheses-verified-1440.png` (MCP screenshot scaled to 1440×1024 — soft-scale QUALIFIED vs native export)
- Diffs: `…/diff/syntheses-1440-diff.png`, `…/diff/syntheses-verified-1440-diff.png`
- Pairing: `…/pairing-report.json`

## 6. Scroll implementation

- Detail **header** stays structured (`detailHead`).
- Body scrolls in `project-syntheses-detail-scroll` (Figma Synthesis Scroll).
- Workspace root pinned to `100vh` **only** when `data-active-view="syntheses"` so the scroll region is height-bounded.
- Affordance: **real styled native scrollbar** (4px, track `rgba(232,227,219,0.5)`, thumb `rgba(148,140,130,0.78)`) — bound to real overflow; not decorative.
- Selection change resets `scrollTop = 0` (no auto-jump to lower sections).
- Bottom padding leaves breathing room under the verified card.

## 7. Éléments vérifiés / Product truth

- Secondary card chrome (border, `#fbf7f2` body wash, radius 9, min-height 150).
- Title `ÉLÉMENTS VÉRIFIÉS` + count from `sourceBindings.evidenceIds.length` via `formatVerifiedElementsCount` (`0/1 élément`, `N éléments`).
- Summary = `sections.verified` (builder-derived), never hardcoded Figma sample (`4 éléments` / sample artifacts).
- Runtime proof fixture shows **`1 élément`** (truthful).
- Zero-state covered by Vitest T18.

### « Voir le détail → »

**PRODUCT-HONEST QUALIFIED ABSENT** — no supported Product navigation/destination from Synthèses to inspect verified evidence elements. Dead CTA **not** added. Structured card retained without the action.

## 8. Execution tab badge

Shared `.tabBadge` already matches canonical 24×20 / radius 6 / `#FFE8E0` / `#D9563B` / 11px. **Preserved** (no Synthèses-only badge). Visible on both captures.

## 9. Tests / gates (exact)

| Gate | Result |
| --- | --- |
| Vitest `p5.s04.synthesesSurface.ui.test.tsx` | **6/6 PASS** (incl. T17 scroll + T18 zero + count helper) |
| Production `next build` (lint + types) | **PASS** |
| `next lint` | **PASS** (0 warnings/errors) |
| `tsc --noEmit` | **PASS** |
| Capture pairing `syntheses-1440` ↔ `164:3` | **PASS** |
| Capture pairing `syntheses-verified-1440` ↔ `316:2` | **PASS** |
| Compare (pairing-gated) | both **COMPARED** · Δ≈**0.0423** (top) · Δ≈**0.0473** (verified) |
| Playwright `p3-visual-parity.spec.ts` | **FAIL env** — `forbiddenVisible=next-dev-issues-badge` under `next dev`; production capture harness remains authority for visual proof |

## 10. Visual proof paths

| Capture | Figma | Runtime SHA256 (12) | Pairing |
| --- | --- | --- | --- |
| `syntheses-1440` | `164:3` | `d0802bf96189` | PASS · scrollTop≈0 · top composition |
| `syntheses-verified-1440` | `316:2` | `6092ea407aed` | PASS · scrolled · Éléments vérifiés fully visible · Product count |

Distinct SHAs confirm top ≠ lower state.

## 11. Residual gaps (P2 / QUALIFIED)

| Item | Class |
| --- | --- |
| Content/copy ≠ Figma sample narrative; Product truth wins | expected / QUALIFIED |
| Verified figma PNG soft-scaled from MCP (not native 1× export bytes) | P2 residual on pixel Δ |
| « Voir le détail » absent (no Product destination) | PRODUCT-HONEST QUALIFIED |
| Playwright visual E2E under next-dev Issues badge | env / harness — not production P0 |
| Compact/mobile Synthèses not redesigned (desktop primary) | in-scope non-goal |

**P0:** 0 · **P1:** 0 · **P2:** residuals above

## 12. Explicit non-claims

- **≠** S08-4D CLOSED
- **≠** GLOBAL P3 VISUAL PARITY CLOSED
- **≠** READY FOR GIT INTEGRATION
- **≠** P5 COMPLETE / P6 READY
- **≠** runtime v3 ADOPTED
- **≠** Evidence architecture redesign
- **≠** Figma mutation / new route / dead CTA

Those remain Morris/ChatGPT decisions after ongoing final visual review.

## 13. Final sub-verdict

**SYNTHÈSES — LOWER VERIFIED SCROLL STATE = PASS CANDIDATE**

Continuous Synthèses surface; top state preserved vs `164:3`; real detail scroll; Product-truth verified card; honest scrollbar; dual pairing PASS; no architecture parallelism.
