# P5-S08-4 — CANONICAL VISUAL SNAPSHOT UNIFICATION

## Authority

Morris S08-4 GO = AUTHORIZED / CONSUMED / CONTINUED
Continuation: CANONICAL VISUAL SNAPSHOT UNIFICATION
CSS fidelity tuning = FROZEN (this pass)

## Git truth

- origin/main = `eed18bd572d65b6f5f4878ed24b195e4feeb5c7e` (UNCHANGED)
- branch = `delivery/sfia-studio-product-simplification-p5-s08-global-p3-visual-parity`
- entry HEAD = `8450fb70404db605b45bca052f347e978bf2f64d`
- Project push = NONE
- Project PR = NONE

## Problem

Prior pairing PASS proved fixture match, not Figma Product identity.
Several pairs had `identityAligned=false` (Nora Completion / Runtime v3).
FINAL pixel fidelity requires `identityAligned=true`.

## Solution

ONE canonical visual Product identity: **Product Simplification**

Isolated QA snapshots (`states/snapshots/`):

| Snapshot | States covered |
|----------|----------------|
| workspace-rich | workspace, journal, history, syntheses, aperçu |
| decision-pending | Decision |
| confirmation-required | Confirmation |

Functional fixtures (Nora Completion / Knowledge Core / Runtime v3) remain for non-final tests.

## Contract change

`evaluateVisualPair`: when a pair declares `identityAligned`, it MUST be `true` or → `HARNESS_PAIRING_MISMATCH`.
Diff generators: `identityAligned !== true` → `DIFF_FORBIDDEN`.

## Manifest

`.tmp-sfia-review/visual/s08-4/final-fidelity/state-manifest.json` v2
All required final pairs: `identityAligned=true`, `expectedProjectName=Product Simplification`.

## Capture

Production-build: `npm run build` + `next start` with snapshot DB switching
Script: `capture-canonical-unified.mjs`
Dev overlay: ABSENT

## Results (representative)

| Case | identityAligned | Pairing | Project |
|------|-----------------|---------|---------|
| Workspace | true | PASS | Product Simplification |
| Journal | true | PASS | Product Simplification |
| Historique | true | PASS | Product Simplification |
| Synthèses | true | PASS | Product Simplification |
| Decision | true | PASS | Product Simplification |
| Confirmation | true | PASS | Product Simplification |

invalid identity pair → DIFF_FORBIDDEN: PROVEN
negative identityAligned=false unit test: PASS

## Gates

- Vitest pairing contract: PASS
- Seed (multi + snapshots): PASS
- Typecheck: PASS
- Lint: PASS

## Deferred / incomplete

- Geist = DEFERRED — NO CHANGE
- Figma mutation = NONE
- Product naming for QA = NONE
- Production visual bypass = NONE
- S08-4D = INCOMPLETE
- GLOBAL P3 VISUAL PARITY = NOT YET PROVEN

## Next

RESUME FINAL FIGMA ↔ RUNTIME DETAIL FIDELITY USING ONLY identityAligned=true PAIRS

## Verdict

**S08-4 CANONICAL VISUAL SNAPSHOT UNIFICATION — PASS**
