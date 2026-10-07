# P5-S08-4 — VISUAL QA PAIRING HARDENING

## Authority

Morris S08-4 GO = AUTHORIZED / CONSUMED / CONTINUED  
Continuation: VISUAL QA PAIRING HARDENING (not a new SFIA cycle)  
Fidelity CSS tuning = FROZEN until same-state pairing proven

## Git truth

- origin/main = `eed18bd572d65b6f5f4878ed24b195e4feeb5c7e` (UNCHANGED)
- branch = `delivery/sfia-studio-product-simplification-p5-s08-global-p3-visual-parity`
- entry HEAD (before this commit) = `d722161e92f6cf366685f13830f53ecbdd23987e`
- Project push = NONE
- Project PR = NONE
- Merge = NONE

## Problem statement

Final FIGMA | RUNTIME | DIFF contact sheets were previously generated from **semantically different** states (e.g. Figma Product Simplification Decision vs runtime Knowledge Core; Figma Confirmation vs Runtime v3). Pixel deltas from those pairs are **invalid** as fidelity evidence.

Root cause: harness validated surface/route/viewport mainly, **not** Project identity + semantic state + content shape + forbidden overlays — and still emitted diffs.

## Pairing root cause (exact)

`HARNESS_PAIRING_MISMATCH` class of defect: capture/compare allowed final screenshots/diffs without fail-closed same-state contract (expectedProject / expectedState / expectedView / forbiddenVisible).

## Canonical pairing manifest

Path: `.tmp-sfia-review/visual/s08-4/final-fidelity/state-manifest.json`

Binds per pair: Figma `nodeId` ↔ `fixtureId` ↔ Product projectId/name ↔ route ↔ view ↔ viewport ↔ `expectedVisible` / `expectedAbsent`.

Contract library (Product source):

- `projects/sfia-studio/app/e2e/support/visualPairingContract.ts` (+ `.mjs`)
- `projects/sfia-studio/app/e2e/support/observeVisualPairing.mjs`
- Capture: `.tmp-sfia-review/visual/s08-4/final-fidelity/capture-final-fidelity.mjs` (shot only after PASS)
- Diff: `compare-and-contact.py` + `compare-final-fidelity.mjs` (DIFF_FORBIDDEN when pairing ≠ PASS)

## Fixture strategy

- **Canonical Figma identity target:** Product Simplification
- **Decision (`190:495`):** seeded on Product Simplification (`p3-decision-pending`) — `identityAligned: true`
- **Workspace / Synthèses / Journal / Historique:** Nora Completion `rich_workspace` fixture — `identityAligned: false` (Figma label vs fixture name; pairing validates fixture, not Figma OCR)
- **Confirmation (`190:520`):** Runtime v3 `confirmation_required` — `identityAligned: false` until snapshot unification
- **Projects empty:** isolated empty Product sqlite + production start on :3021 (`BETTER_AUTH_URL` aligned; URL host `localhost` for cookies)
- Knowledge Core retained as list-density only (no longer Decision visual fixture)

## Same-state / expected-visible / expected-absent

Every manifested pair declares both. Global forbidden: Next Issues badge, next-dev-overlay, runtime-error-overlay, loading, sqlite-unavailable.

Failure classification: `HARNESS_PAIRING_MISMATCH` with exact expected/actual fields.

## Production-build capture strategy

Preferred:

1. `S08_4_FIDELITY_SEED=1` seed
2. `npm run build`
3. `npm run start:skip-preflight` with QA DB env
4. `capture-final-fidelity.mjs`
5. compare only pairing PASS

Documented: `.tmp-sfia-review/visual/s08-4/final-fidelity/PRODUCTION_CAPTURE.md`

## Dev overlay disposition

**ABSENT** on production-clean capture (`next start`). No Product CSS hide. No crop.

## Evidence requalification (not Product regression)

| Surface | Product capability | Pixel fidelity |
|---------|-------------------|----------------|
| Decision | PROVEN | RECAPTURE REQUIRED (pairing now valid; geometry still open) |
| Confirmation | PROVEN | RECAPTURE REQUIRED |
| Workspace / New Project / others | implementation retained | final fidelity depends on valid same-state pairs |

## Representative pairing results (production capture)

| Case | Pairing |
|------|---------|
| Workspace desktop | PASS |
| New Project desktop | PASS |
| Decision mobile | PASS |
| Confirmation mobile | PASS |
| Synthèses desktop | PASS |
| Projects desktop | PASS |
| Projects empty | PASS |
| Auth mobile | PASS |

Negative mismatch tests (Vitest): PASS  
Invalid diff generation: BLOCKED (`DIFF_FORBIDDEN` when pairing FAIL)

## Gates

- Vitest pairing contract: 9/9 PASS
- Seed fidelity: PASS (Decision on Product Simplification)
- Seed empty Product: PASS
- Typecheck: PASS
- Lint: PASS
- Visual E2E (`p3-visual-parity.spec.ts`): PASS

## Figma / Product naming / bypass

- Figma mutation = NONE
- Product naming mutation for QA = NONE (only non-visual `data-testid="project-title"`)
- Production visual bypass = NONE
- Geist = DEFERRED — NO CHANGE

## Modified files (this continuation)

- `e2e/support/visualPairingContract.ts` / `.mjs`
- `e2e/support/observeVisualPairing.mjs`
- `e2e/p3-visual-parity.spec.ts`
- `__tests__/project-assistant/s08-4.visualPairingContract.d0.test.ts`
- `__tests__/project-assistant/s08-4.seedFinalFidelity.d0.test.ts`
- `__tests__/project-assistant/s08-4.seedEmptyProduct.d0.test.ts`
- `features/pre-m6-product-ui/ProjectWorkspacePage.tsx` (`project-title` testid)
- `.tmp-sfia-review/visual/s08-4/final-fidelity/*` harness + `state-manifest.json` + `pairing-report.json`
- `.tmp-sfia-review/chatgpt-review.md`

## Remaining

- S08-4D = INCOMPLETE
- GLOBAL P3 VISUAL PARITY = NOT YET PROVEN
- Next: RESUME FINAL DETAIL FIDELITY USING ONLY VALID SAME-STATE PAIRS
- Optional: snapshot-unify Workspace/Confirmation onto Product Simplification display identity

## Verdict

**S08-4 VISUAL QA PAIRING CONTRACT — PASS**
