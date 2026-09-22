# PJ-REPROOF-05 — FINAL INTEGRATION READINESS — FULL Review Pack

- **Timestamp:** 2026-09-22T22:39:33Z / 2026-09-23 00:39:33 CEST
- **Repo:** mcleland147/sfia-workspace (`/Users/morris/Projects/sfia-workspace`)
- **Branch:** `fix/sfia-studio-pj-reproof-05-execution-eligibility`
- **HEAD / origin/main:** `31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0`
- **Upstream projet:** none
- **Mode:** SAME DELIVERY — FINAL INTEGRATION READINESS (NO micro-cycle)
- **Prior accepted handoff (functional isolation):** `09b74d7c1cc558071689f2963e7011b5552bbc9f` / blob `d927ac470ed1231476666476862e7ec54a7fccca`
- **Gap closed this pass:** SCOPED LINT EVIDENCE MISSING → regularized
- **Fake/Real:** DETERMINISTIC PROVEN — REAL Cursor Product launch = 0
- **Capacity:** V3-F05 + V3-F11/V3-F12
- **Runtime v3:** NON ADOPTED
- **Product Journey:** PAUSED — not resumed
- **Morris decision consumed:** ONE generic Product ExecutionContract → generic Cursor → Cursor owns HOW

## 1. Local Git Truth Check

```
pwd: /Users/morris/Projects/sfia-workspace
branch: fix/sfia-studio-pj-reproof-05-execution-eligibility
HEAD: 31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0
origin/main: 31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0
log -1: 31295c70 Merge pull request #510 from mcleland147/fix/sfia-studio-execution-contract-semantic-bridge
upstream: (none)
staged: (empty)
```

### git status --short
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
?? projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionEligibility.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts
?? projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts
```

### Delivery drift vs prior accepted handoff
**NO DRIFT.** Same 18 modified + 4 untracked project-relevant paths as ChatGPT-accepted isolation delivery.
Only temporary pack rewrite this pass (`.tmp-sfia-review/chatgpt-review.md`).
No unexpected files. No project commit. No staged files. No rebase/reset.

### Worktrees
Primary project WT intact on `fix/sfia-studio-pj-reproof-05-execution-eligibility` @ `31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0`.
Handoff WT: `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` on `sfia/review-handoff`.
No destructive interaction with other worktrees.

## 2. Confirmation — SAME PJ-REPROOF-05 / NO MICRO-CYCLE

- No PJ-REPROOF-05.1
- No separate lint cycle
- No separate PR-readiness cycle
- No separate handoff-only cycle
- No new architecture / policy engine / Product taxonomy
- Functional isolation already accepted by ChatGPT — not reopened except for integration readiness validation

## 3. Sources consulted

| Source | Role | Blob / note |
|---|---|---|
| `prompts/templates/sfia-cycle-execution-template.md` | process / handoff / Morris gates | `948156a21309ef99c3aaed6410947dc6b9bc569a` |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | routing / L3 handoff | guidance |
| `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` | Build Doctrine | `99232e4582e4ef4cf489020a46b818ebb41ac397` |
| `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` | roadmap | `df2ad6f3c4cd5504d586f344bc0d76f737b0ce65` |
| `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` | C1 | `806d672fe21ad82a641bf88fe95fc87870481105` |
| framing 34 | AgentCapability / governance | `0d81a3616d08e3c8d1b1d3e3ad982c1cc1cd077d` |
| framing 36 | v2.6 inheritance | `af4b6531beca99cb8c854a03ec36285c4e4e0c2e` |
| prior handoff `09b74d7c` | accepted functional isolation | blob `d927ac47…` |
| `projects/sfia-studio/app/package.json` | lint=`next lint`, typecheck=`tsc --noEmit` | canonical |
| `projects/sfia-studio/app/eslint.config.mjs` | next/core-web-vitals + next/typescript | FlatCompat |
| delivery source + tests | verification only | dirty WT |

Doctrine preserved: end-to-end > non-blocking hardening; fixture ≠ Product final; DETERMINISTIC ≠ READY FOR REAL; EC=truth; Cursor owns HOW; AgentCapability=envelope; action taxonomy internal; runtime v3 NON ADOPTED.

## 4. Functional reminder (already accepted — not redesigned)

1. `shouldApplyProductExecutionEligibility` = mechanical Product-family applicability.
2. Canonical discriminant: durable `PRODUCT_GOVERNED`.
3. LEGACY PRODUCT COMPATIBILITY DISCRIMINANT: exact Batch surface `product:read` / `product:project-workspace` / `product:read-only` / `cap:product-read`.
4. Select + Start apply Product resolver ONLY when applicability is true.
5. F3 / OA foundation / sealed GCEC skip Product rules.
6. Legacy Batch fail-closed + immutable.
7. Generic Product → generic Cursor (`agt:studio.cursor.generalist`).
8. TestOnlyRealExecutionLaunchPort for deterministic proof only.
9. REAL Cursor = 0.

## 5. Lint regularization (gap closed this pass)

### Discovery
- Canonical script: `projects/sfia-studio/app/package.json` → `"lint": "next lint"`
- Config: `projects/sfia-studio/app/eslint.config.mjs` (`next/core-web-vitals`, `next/typescript`)
- Scoped support: `next lint --file <files...>` (canonical option)

### Exact command
```bash
cd projects/sfia-studio/app && npx next lint --file \
  __tests__/oa/execution-attempt/support/m4Fixtures.ts \
  __tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx \
  __tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts \
  __tests__/project-assistant/w2Harness.ts \
  __tests__/project-assistant/w3aGovernedExecute.test.ts \
  __tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts \
  features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx \
  features/project-assistant/w2/authorizeExecutionContract.ts \
  features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts \
  features/project-assistant/w2/governedExecuteAuthorizedContract.ts \
  features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts \
  features/project-assistant/w2/types.ts \
  features/project-assistant/w2/w3aActualExecutionWork.ts \
  features/project-assistant/w2/w3aProductExecutionSemantics.ts \
  features/project-assistant/w2/resolveProductExecutionEligibility.ts \
  features/project-assistant/w2/resolveTrustedProductLaunchContext.ts \
  lib/oa/execution-attempt/application/grantGateD.ts \
  lib/oa/execution-attempt/application/selectExecutionAgent.ts \
  lib/oa/execution-attempt/application/startExecution.ts \
  lib/oa/execution-contract/index.ts \
  lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts
```

### Result
- **exit code:** `0` (PASS)
- **errors:** none
- **warnings (3):** `@typescript-eslint/no-unused-vars` on pre-existing `_ok` destructuring in `TrajectorySurface.tsx` lines 475, 1234, 1341
- **Classification:** **PRE-EXISTING ON origin/main** (present since `0ab627737` / Aug 2026) — **NOT introduced by PJ-REPROOF-05 delta** (delta only adds `executionEligible` UI gating)
- **Corrections this pass:** **none** (no mechanical delta defect; no functional/architectural lint issue)
- Tool note: `next lint` deprecation warning (Next 16) — informational only

## 6. Final validations

### Vitest batch (7 suites) — exact commands + results

Batch A (6 files; initial path typo excluded F3):
```bash
cd projects/sfia-studio/app && npx vitest run \
  __tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts \
  __tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts \
  __tests__/project-assistant/w3aGovernedExecute.test.ts \
  __tests__/oa/execution-attempt/lifecycleFoundation.test.ts \
  __tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx \
  __tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
```
→ **122/122 PASS**, exit 0

Batch B (F3 — correct path `project-assistant/`):
```bash
cd projects/sfia-studio/app && npx vitest run \
  __tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
```
→ **9/9 PASS**, exit 0

| Suite | Tests | Exit |
|---|---:|---:|
| pjReproof05.executionEligibility.d0 | 14 | 0 |
| pjReproof04.executionContractSemanticBridge.d0 | 12 | 0 |
| w3aGovernedExecute | 24 | 0 |
| lifecycleFoundation | 24 | 0 |
| f3.fixtureVerticalSlice | 9 | 0 |
| postExecutionTrajectorySurface.ui | 2 | 0 |
| trajectorySurface.ui | 46 | 0 |
| **TOTAL** | **131** | **0** |

### TypeScript
```bash
cd projects/sfia-studio/app && npx tsc --noEmit
```
→ exit **0** (silent PASS)

### git diff --check
```bash
git diff --check
```
→ exit **0**

### Assertions reconfirmed
- Canonical Product eligible with trusted launch context → generalist Select/Start via TestOnlyRealExecutionLaunchPort
- Hostile/legacy Product fail-closed; Attempt count on legacy Batch = **0**
- F3 Select+Start without Product trusted launch context
- OA foundation non-Product remains outside Product resolver
- GCEC sealed docs-write remains outside Product resolver (pjReproof04 12/12)
- No Product HOW categories reintroduced
- No second policy architecture
- SFIA_STUDIO_CURSOR_REAL unset; Product REAL launch processes = **0**

## 7. Fake / Real Qualification

- Entry level: DETERMINISTIC PROVEN
- TestOnlyRealExecutionLaunchPort: **YES** (deterministic only)
- REAL Cursor Product launch: **NO** / count **0**
- SFIA_STUDIO_CURSOR_REAL: unset
- Claim: DETERMINISTIC PROVEN confirmed — **NOT** READY FOR REAL
- Note: IDE `cursor-agent` worker processes may exist for Cursor Desktop; they are not Studio Product Journey REAL execution launches.

## 8. Legacy Batch immutability (READ-ONLY)

DB: `projects/sfia-studio/.sfia-exec/pwr-dpc09-real-reproof-01/product/oa-product.sqlite` (exists; RO inspect only)

| Field | Value |
|---|---|
| id | `xct:w3a:dec:w2-trj:62b92385-7602-4d4f-b892-df9e2013c4a8` |
| version | **2** (unchanged) |
| semanticFingerprint | `ca296bb5609fb21edc19b75b64013a9020fef3097a81ee116a149c7ede20ccac` |
| payload_sha256 | `60bf105d06355b1df6304342e9b9312cf4c06b478c30ef64a61c56ec5c669664` |
| action/target/scope/cap | `product:read` / `product:project-workspace` / `product:read-only` / `cap:product-read` |
| constraints include | `PRODUCT_GOVERNED`, `FIXTURE_EXECUTOR_BOUNDARY_ONLY`, `NO_REAL`, `NO_CURSOR_REAL`, … |
| stopConditions include | `AUCUNE EXÉCUTION`, `STOP AVANT EXECUTE`, … |
| trusted launch inputs | absent (no baseHeadSha / repositoryBindingIdentity) |
| attempts | **0** |

**EC unchanged: YES. Attempts unchanged: YES (0). No SQLite mutation this cycle.**

## 9. Test Fixture Masking Check

`m4Fixtures.ts` comment documents **TEST CONTEXT LEGITIMATE**:
- `baseHeadSha` intrinsically required by StartExecution REAL launch path for M4/GCEC scenarios
- repository identity fields support that same intrinsic launch contract
- **NOT** added solely to satisfy accidental global Product eligibility
- Verdict: **TEST CONTEXT LEGITIMATE** (retained)

## 10. Diff for integration

### git diff --stat origin/main (project only; excludes .tmp)
```
 .../oa/execution-attempt/support/m4Fixtures.ts     |  24 ++-
 .../postExecutionTrajectorySurface.ui.test.tsx     |   4 +-
 ...of04.executionContractSemanticBridge.d0.test.ts |   2 +
 .../app/__tests__/project-assistant/w2Harness.ts   |  57 +++++-
 .../project-assistant/w3aGovernedExecute.test.ts   | 100 ++++++++---
 .../surfaces/TrajectorySurface.tsx                 |  38 +++-
 .../w2/authorizeExecutionContract.ts               |  40 ++++-
 .../deriveActualExecutionWorkFromProductContext.ts |   5 +-
 .../w2/governedExecuteAuthorizedContract.ts        | 200 +++++++++++++++------
 .../w2/prepareExecutionContractFromW2Decision.ts   |  37 +++-
 .../app/features/project-assistant/w2/types.ts     |   8 +
 .../project-assistant/w2/w3aActualExecutionWork.ts |   9 +-
 .../w2/w3aProductExecutionSemantics.ts             |  55 +++++-
 .../oa/execution-attempt/application/grantGateD.ts |  10 +-
 .../application/selectExecutionAgent.ts            |  29 +++
 .../application/startExecution.ts                  |  30 ++++
 .../app/lib/oa/execution-contract/index.ts         |  13 ++
 17 files changed, 550 insertions(+), 111 deletions(-)
+ 4 untracked files (see below)
```

### Full status including tmp (not for project commit)
```
 .tmp-sfia-review/chatgpt-review.md                 | 1714 ++++++++++++++++++--
 .../oa/execution-attempt/support/m4Fixtures.ts     |   24 +-
 .../postExecutionTrajectorySurface.ui.test.tsx     |    4 +-
 ...of04.executionContractSemanticBridge.d0.test.ts |    2 +
 .../app/__tests__/project-assistant/w2Harness.ts   |   57 +-
 .../project-assistant/w3aGovernedExecute.test.ts   |  100 +-
 .../surfaces/TrajectorySurface.tsx                 |   38 +-
 .../w2/authorizeExecutionContract.ts               |   40 +-
 .../deriveActualExecutionWorkFromProductContext.ts |    5 +-
 .../w2/governedExecuteAuthorizedContract.ts        |  200 ++-
 .../w2/prepareExecutionContractFromW2Decision.ts   |   37 +-
 .../app/features/project-assistant/w2/types.ts     |    8 +
 .../project-assistant/w2/w3aActualExecutionWork.ts |    9 +-
 .../w2/w3aProductExecutionSemantics.ts             |   55 +-
 .../oa/execution-attempt/application/grantGateD.ts |   10 +-
 .../application/selectExecutionAgent.ts            |   29 +
 .../application/startExecution.ts                  |   30 +
 .../app/lib/oa/execution-contract/index.ts         |   13 +
 18 files changed, 2165 insertions(+), 210 deletions(-)
```

### git diff --name-status origin/main (project)
```
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
M	projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
M	projects/sfia-studio/app/features/project-assistant/w2/types.ts
M	projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
M	projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/index.ts
```

### Untracked (include in future commit)
```
projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionEligibility.ts
projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts
projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts
```

### Files proposed for future project commit (21)
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts`- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx`- `projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts`- `projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts`- `projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts`- `projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts`- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`- `projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts`- `projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts`- `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts`- `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts`- `projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionEligibility.ts`- `projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts`- `projects/sfia-studio/app/features/project-assistant/w2/types.ts`- `projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts`- `projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts`- `projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts`- `projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts`- `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`- `projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts`- `projects/sfia-studio/app/lib/oa/execution-contract/index.ts`
### Files EXCLUDED from future project commit
- `.tmp-sfia-review/chatgpt-review.md` (**mandatory exclude** — temporary review pack)
- No `.env`, secrets, sqlite DB, `.sfia-exec`, node_modules, coverage, handoff branch files, doctrine/roadmap/framing

### Hygiene check
- secrets/DB/tmp/runtime artefacts in project commit set: **NONE**
- doctrine / roadmap / framing / v2.6 / template / routing guide: **untouched**
- legacy Batch EC: **not mutated**

## 11. Proposed integration plan (NOT EXECUTED)

### A. Commit message
```
fix(studio): align Product execution eligibility with generic Cursor flow
```

### B. Branch
`fix/sfia-studio-pj-reproof-05-execution-eligibility`

### C. PR base
`main`

### D. PR title
SFIA Studio — fix Product execution eligibility and preserve non-Product execution lanes

### E. PR body (ready to paste)
```markdown
## Summary
- **PJ-REPROOF-05** closes Product Journey execution eligibility fidelity before any REAL reproof resume.
- Problem: Product Start invariants (`resolveProductExecutionEligibility`) were applied unconditionally in generic OA `SelectExecutionAgent` / `StartExecution`, leaking Product trusted-launch / stamp fail-closed rules onto F3, OA foundation, and sealed GCEC lanes.
- Fix: mechanical applicability gate `shouldApplyProductExecutionEligibility` — Product-family only.
  - Canonical discriminant: durable `PRODUCT_GOVERNED`.
  - Legacy compatibility discriminant (exact historical Batch Cookinb surface): `product:read` / `product:project-workspace` / `product:read-only` / `cap:product-read`.
- Canonical Product remains **ONE generic Product ExecutionContract → generic Cursor (`agt:studio.cursor.generalist`) → Cursor owns HOW**.
- No Product read/write/docs-write/fixture/REAL categories; no parallel policy engine; Gate D remains mechanical launch safety.
- Legacy Batch Cookinb EC left immutable and fail-closed (attempts=0).
- F3 / GCEC / OA foundation lifecycles preserved without artificial Product trusted launch context.

## Tests
- pjReproof05.executionEligibility.d0 — 14
- pjReproof04.executionContractSemanticBridge.d0 — 12
- w3aGovernedExecute — 24
- lifecycleFoundation — 24
- f3.fixtureVerticalSlice — 9
- postExecutionTrajectorySurface.ui + trajectorySurface.ui — 48
- **Total batch: 131/131 PASS**
- `npx tsc --noEmit` PASS
- scoped `next lint --file …` PASS (exit 0)
- `git diff --check` PASS

## Fake / Real
- Deterministic only (`TestOnlyRealExecutionLaunchPort`)
- REAL Cursor Product launch = 0
- DETERMINISTIC PROVEN ≠ READY FOR REAL
- Product Journey remains PAUSED
- Runtime v3: NON ADOPTED

## Out of scope / remaining debt
- historical `product:*` token cleanup (non-causal)
- `qualifiedOperationKind` cleanup
- CURSOR_REPORT_PENDING / Product Record-report bridge
- Evidence REAL adapter
- Product Journey REAL reproof (requires distinct Morris GO)

## Integration note
Integration Git requires explicit **GO Morris**. This PR preparation does not authorize merge.
```

### F. Proposed Git commands — **NOT EXECUTED**
```bash
# On branch fix/sfia-studio-pj-reproof-05-execution-eligibility
# AFTER explicit GO Morris only:

git add \
  projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts \
  projects/sfia-studio/app/lib/oa/execution-contract/index.ts \
  projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts \
  projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts \
  projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts \
  projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionEligibility.ts \
  projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts \
  projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts \
  projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts \
  projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts \
  projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts \
  projects/sfia-studio/app/features/project-assistant/w2/types.ts \
  projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts \
  projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts \
  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx \
  projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts \
  projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts \
  projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts \
  projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts \
  projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts \
  projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx

# Explicitly DO NOT add: .tmp-sfia-review/chatgpt-review.md

git commit -m "$(cat <<'EOF'
fix(studio): align Product execution eligibility with generic Cursor flow

EOF
)"

git push -u origin HEAD

gh pr create --base main --title "SFIA Studio — fix Product execution eligibility and preserve non-Product execution lanes" --body-file - <<'EOF'
…(body above)…
EOF
```

**This cycle did NOT run add/commit/push/PR/merge.**

## 12. Out-of-scope debt (explicit)
- historical product:* cleanup
- qualifiedOperationKind cleanup
- CURSOR_REPORT_PENDING / Product Record-report bridge
- Evidence REAL adapter
- Product Journey REAL reproof (distinct Morris GO)
- opportunistic TrajectorySurface `_ok` unused-var warnings (pre-existing main)

## 13. Reserves
- Integration Git still requires **GO Morris** (not granted by this pack)
- Product Journey remains PAUSED
- DETERMINISTIC PROVEN ≠ READY FOR REAL
- `next lint` deprecation notice (tooling future; not a blocker)

## 14. Forbidden actions respected
- no project commit / push / PR / merge
- no main modification / branch deletion
- no REAL Cursor Product launch / SFIA_STUDIO_CURSOR_REAL
- no DB mutation / migration / schema change
- no doctrine/roadmap/framing/template/routing edits
- no micro-cycle creation
- L3 handoff push only (sfia/review-handoff)

## 15. Created files — FULL CONTENT

### `projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts`

```typescript
/**
 * PJ-REPROOF-05 — mechanical Product Start invariants (NOT a second policy engine).
 *
 * Answers: may this already-built ExecutionContract proceed to Select / Execute / Start?
 *
 * Checks are mechanical / fail-closed:
 * - historical forever-forbid stamps (legacy EC compatibility)
 * - trusted launch context present when required
 *
 * Does NOT re-qualify mission, choose read/write/docs-write, or route executors.
 * Consumed by Authorize projection, UI Execute, Select (pre-Attempt), Start —
 * ONLY when {@link shouldApplyProductExecutionEligibility} is true.
 *
 * AUTHORIZED (authority verified) ≠ execution eligible.
 */

export type ProductExecutionEligibilityReasonCode =
  | "eligible"
  | "stop_before_execute"
  | "aucune_execution"
  | "no_attempt"
  | "prepare_only"
  | "fixture_boundary_only"
  | "no_real"
  | "no_cursor_real"
  | "scope_out_real"
  | "scope_out_cursor_real"
  | "missing_trusted_launch_context"
  | "stale_or_invalid_launch_context";

export type ProductExecutionEligibility = {
  readonly eligible: boolean;
  readonly reasonCode: ProductExecutionEligibilityReasonCode;
  /** Pilot-facing functional explanation — no HOW / agentType / fixture jargon. */
  readonly reasonText: string;
  readonly nextAction: string;
  readonly allowsCursorReal: boolean;
  readonly allowsMutatingEffects: boolean;
  readonly requiresTrustedLaunchContext: boolean;
};

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

/** Trajectory / authorize-flow markers — not Product EC forever-forbid when absent as stamps. */
export const TRAJECTORY_NON_EXECUTE_STOPS = [
  "AUCUNE EXÉCUTION",
  "STOP AVANT EXECUTE",
] as const;

/**
 * Durable Product family marker stamped by W3-A Product prepare
 * (`productConstraints`). Present on both canonical generic Product ECs and
 * the historical Batch Cookinb legacy Product EC (v2).
 */
export const PRODUCT_GOVERNED_CONSTRAINT = "PRODUCT_GOVERNED" as const;

/**
 * LEGACY PRODUCT COMPATIBILITY DISCRIMINANT — exact historical Product W3-A
 * surface observed on durable Batch Cookinb EC
 * `xct:w3a:dec:w2-trj:62b92385-…` (action/target/scope/capability).
 *
 * Not a Product routing catalogue. Not a mission type. Used only so Select/Start
 * still apply Product fail-closed invariants if an older Product EC somehow
 * lacked PRODUCT_GOVERNED (Batch Cookinb itself already carries PRODUCT_GOVERNED).
 */
export const LEGACY_PRODUCT_COMPAT_ACTION = "product:read" as const;
export const LEGACY_PRODUCT_COMPAT_TARGET =
  "product:project-workspace" as const;
export const LEGACY_PRODUCT_COMPAT_SCOPE = "product:read-only" as const;
export const LEGACY_PRODUCT_COMPAT_CAPABILITY = "cap:product-read" as const;

/**
 * Mechanical applicability: should Product PJ-REPROOF-05 Start invariants run?
 *
 * TRUE only for Product-family ExecutionContracts.
 * FALSE for F3 fixture, OA foundation lifecycle, sealed GCEC, and other
 * non-Product lanes that share SelectExecutionAgent / StartExecution.
 *
 * This is NOT a policy engine and does NOT choose read/write/docs-write/fixture.
 */
export function shouldApplyProductExecutionEligibility(input: {
  readonly constraints?: readonly string[] | null;
  readonly action?: string | null;
  readonly target?: string | null;
  readonly scope?: string | null;
  readonly requiredCapabilities?: readonly string[] | null;
}): boolean {
  const constraints = input.constraints ?? [];
  if (constraints.includes(PRODUCT_GOVERNED_CONSTRAINT)) {
    return true;
  }

  // LEGACY PRODUCT COMPATIBILITY DISCRIMINANT (exact historical surface).
  const caps = input.requiredCapabilities ?? [];
  if (
    input.action === LEGACY_PRODUCT_COMPAT_ACTION &&
    input.target === LEGACY_PRODUCT_COMPAT_TARGET &&
    input.scope === LEGACY_PRODUCT_COMPAT_SCOPE &&
    caps.includes(LEGACY_PRODUCT_COMPAT_CAPABILITY)
  ) {
    return true;
  }

  return false;
}

function hasExact(list: readonly string[], token: string): boolean {
  return list.some((c) => c === token);
}

function hasScopeOut(constraints: readonly string[], token: string): boolean {
  return constraints.includes(`SCOPE_OUT:${token}`);
}

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  return t.length > 0 ? t : null;
}

function mutatingEffectsAllowed(constraints: readonly string[]): boolean {
  if (hasScopeOut(constraints, "DURABLE_PROJECT_WRITE")) return false;
  if (hasScopeOut(constraints, "LOCAL_WRITE")) return false;
  if (hasScopeOut(constraints, "COMMIT")) return false;
  if (hasScopeOut(constraints, "GIT_PUSH")) return false;
  if (hasScopeOut(constraints, "GIT_PR")) return false;
  if (hasScopeOut(constraints, "GIT_MERGE")) return false;
  return true;
}

function ineligible(
  reasonCode: Exclude<ProductExecutionEligibilityReasonCode, "eligible">,
  reasonText: string,
  nextAction: string,
  extras?: Partial<
    Pick<
      ProductExecutionEligibility,
      "allowsCursorReal" | "allowsMutatingEffects" | "requiresTrustedLaunchContext"
    >
  >,
): ProductExecutionEligibility {
  return {
    eligible: false,
    reasonCode,
    reasonText,
    nextAction,
    allowsCursorReal: false,
    allowsMutatingEffects: extras?.allowsMutatingEffects ?? false,
    requiresTrustedLaunchContext:
      extras?.requiresTrustedLaunchContext ?? true,
  };
}

/**
 * Resolve whether an ExecutionContract may proceed to Select / Execute / Start.
 *
 * Legacy Product ECs stamped NO_REAL / NO_CURSOR_REAL / FIXTURE_EXECUTOR_BOUNDARY_ONLY
 * / STOP AVANT EXECUTE remain fail-closed (historical, never silently rewritten).
 */
export function resolveProductExecutionEligibility(input: {
  readonly constraints?: readonly string[] | null;
  readonly stopConditions?: readonly string[] | null;
  readonly inputs?: Record<string, unknown> | null;
  /**
   * Product Cursor REAL path requires pinned launch context on the EC.
   * Default true for Product generalist Start. Tests may set false only when
   * proving stamp-level ineligibility without launch-context concerns.
   */
  readonly requireTrustedLaunchContext?: boolean;
}): ProductExecutionEligibility {
  const constraints = [...(input.constraints ?? [])];
  const stops = [...(input.stopConditions ?? [])];
  const inputs = (input.inputs ?? {}) as Record<string, unknown>;
  const allowMutations = mutatingEffectsAllowed(constraints);
  const requireCtx = input.requireTrustedLaunchContext !== false;

  if (hasExact(stops, "AUCUNE EXÉCUTION")) {
    return ineligible(
      "aucune_execution",
      "Ce contrat d'exécution interdit toute tentative — il n'est pas exécutable.",
      "Préparer un nouveau contrat d'exécution cohérent avec la mission, puis inspecter et autoriser à nouveau.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(stops, "STOP AVANT EXECUTE")) {
    return ineligible(
      "stop_before_execute",
      "Ce contrat porte une interdiction d'exécution — aucune tentative ne peut être créée.",
      "Requalifier la mission et préparer un nouveau contrat exécutable si l'intention le justifie.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(constraints, "NO_ATTEMPT")) {
    return ineligible(
      "no_attempt",
      "Ce contrat n'autorise aucune tentative d'exécution.",
      "Préparer un contrat successeur lorsque la mission est prête à être exécutée.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(constraints, "PREPARE_ONLY")) {
    return ineligible(
      "prepare_only",
      "Ce contrat est limité à la préparation — l'exécution n'est pas proposée.",
      "Compléter la résolution / préparation d'un contrat exécutable avant toute tentative.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(constraints, "FIXTURE_EXECUTOR_BOUNDARY_ONLY")) {
    return ineligible(
      "fixture_boundary_only",
      "Ce contrat n'est pas éligible à une exécution Product gouvernée dans son état actuel.",
      "Préparer un nouveau contrat dont les effets autorisés correspondent à la mission.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(constraints, "NO_REAL") || hasScopeOut(constraints, "REAL")) {
    return ineligible(
      hasExact(constraints, "NO_REAL") ? "no_real" : "scope_out_real",
      "Ce contrat interdit une exécution réelle — aucune tentative ne peut être créée.",
      "Préparer un nouveau contrat si une exécution réelle (bornée) est désormais requise.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (
    hasExact(constraints, "NO_CURSOR_REAL") ||
    hasScopeOut(constraints, "CURSOR_REAL")
  ) {
    return ineligible(
      hasExact(constraints, "NO_CURSOR_REAL")
        ? "no_cursor_real"
        : "scope_out_cursor_real",
      "Ce contrat n'autorise pas le lancement Cursor pour cette mission.",
      "Préparer un nouveau contrat aligné sur les effets et le contexte de lancement requis.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }

  if (requireCtx) {
    const baseHeadSha = asNonEmptyString(inputs.baseHeadSha);
    const repoIdentity =
      asNonEmptyString(inputs.repositoryBindingIdentity) ??
      asNonEmptyString(inputs.repositoryIdentity) ??
      asNonEmptyString(inputs.repositoryRef);

    if (!baseHeadSha) {
      return ineligible(
        "missing_trusted_launch_context",
        "Le contexte de lancement requis n'est pas fixé sur le contrat — exécution impossible.",
        "Préparer à nouveau le contrat afin que Studio y attache le contexte de dépôt / révision avant inspection.",
        {
          allowsMutatingEffects: allowMutations,
          requiresTrustedLaunchContext: true,
        },
      );
    }
    if (!FULL_SHA_RE.test(baseHeadSha)) {
      return ineligible(
        "stale_or_invalid_launch_context",
        "Le contexte de révision fixé sur le contrat est invalide — exécution refusée.",
        "Préparer un nouveau contrat avec un contexte de lancement fiable.",
        {
          allowsMutatingEffects: allowMutations,
          requiresTrustedLaunchContext: true,
        },
      );
    }
    if (!repoIdentity) {
      return ineligible(
        "missing_trusted_launch_context",
        "Aucun dépôt de projet fiable n'est lié au contrat — exécution impossible.",
        "Lier le projet à un dépôt fiable, puis préparer un nouveau contrat d'exécution.",
        {
          allowsMutatingEffects: allowMutations,
          requiresTrustedLaunchContext: true,
        },
      );
    }
  }

  return {
    eligible: true,
    reasonCode: "eligible",
    reasonText:
      "Autorité vérifiée et contrat exécutable — une tentative explicite peut être lancée.",
    nextAction:
      "Vous pouvez exécuter explicitement. Confirmer / exécuter ne modifie pas le contrat inspecté.",
    allowsCursorReal: true,
    allowsMutatingEffects: allowMutations,
    requiresTrustedLaunchContext: requireCtx,
  };
}

/**
 * Strip trajectory authorize-flow stop markers so they do not become durable
 * forever-forbid stamps on a newly prepared executable Product EC.
 */
export function filterTrajectoryNonExecuteStopsFromEc(
  stopConditions: readonly string[],
): string[] {
  const ban = new Set<string>(TRAJECTORY_NON_EXECUTE_STOPS);
  return stopConditions.filter((s) => !ban.has(s));
}

```

### `projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionEligibility.ts`

```typescript
/**
 * Re-export — canonical module lives in lib/oa/execution-contract (shared by
 * Authorize, UI, Select, Start without features→lib inversion).
 */
export {
  TRAJECTORY_NON_EXECUTE_STOPS,
  filterTrajectoryNonExecuteStopsFromEc,
  resolveProductExecutionEligibility,
  shouldApplyProductExecutionEligibility,
  PRODUCT_GOVERNED_CONSTRAINT,
  LEGACY_PRODUCT_COMPAT_ACTION,
  LEGACY_PRODUCT_COMPAT_TARGET,
  LEGACY_PRODUCT_COMPAT_SCOPE,
  LEGACY_PRODUCT_COMPAT_CAPABILITY,
  type ProductExecutionEligibility,
  type ProductExecutionEligibilityReasonCode,
} from "@/lib/oa/execution-contract/domain/resolveProductExecutionEligibility";

```

### `projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts`

```typescript
/**
 * PJ-REPROOF-05 — trusted Cursor launch context pinned on ExecutionContract
 * BEFORE inspection / authorization.
 *
 * Never accept client-supplied baseHeadSha after authorize.
 * Never silently bind to Studio's own checkout (process.cwd / sfia-workspace).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  resolveBoundedReadOnlyBaseHeadSha,
  validateBaseHeadSha,
} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { ManagedProjectRepositoryResolver } from "@/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver";

export type TrustedProductLaunchContext = {
  readonly baseHeadSha: string;
  readonly repositoryBindingIdentity: string;
  readonly remoteUrl: string;
  readonly defaultBranch: string;
  readonly pathRoot: string | null;
  readonly managedRepoRoot: string | null;
};

export type ResolveTrustedProductLaunchContextResult =
  | { readonly ok: true; readonly context: TrustedProductLaunchContext }
  | { readonly ok: false; readonly code: string; readonly message: string };

const managedResolver = new ManagedProjectRepositoryResolver();

/**
 * Resolve launch context from durable Project.repositoryBinding + server HEAD
 * of the project's managed clone (never Studio cwd).
 *
 * Test hooks: pinnedBaseHeadSha / managedRepoRootBase — never from browser Execute.
 */
export async function resolveTrustedProductLaunchContext(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly pinnedBaseHeadSha?: string | null;
  readonly managedRepoRootBase?: string | null;
}): Promise<ResolveTrustedProductLaunchContextResult> {
  const projectResult = await input.oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (!projectResult.ok) {
    return {
      ok: false,
      code: "PROJECT_NOT_FOUND",
      message:
        "Projet introuvable — contexte de lancement impossible à fixer.",
    };
  }
  const binding = projectResult.project.repositoryBinding;
  if (!binding?.identity?.trim()) {
    return {
      ok: false,
      code: "REPOSITORY_BINDING_REQUIRED",
      message:
        "Aucun dépôt de projet fiable n'est lié — préparation d'un contrat exécutable refusée.",
    };
  }
  const identity = binding.identity.trim();
  const remoteUrl =
    binding.remoteUrl?.trim() || `https://github.com/${identity}.git`;
  const defaultBranch = binding.defaultBranch?.trim() || "main";
  const pathRoot = binding.pathRoot?.trim() || null;

  const managedBase =
    (typeof input.managedRepoRootBase === "string" &&
    input.managedRepoRootBase.trim()
      ? input.managedRepoRootBase.trim()
      : null) ?? resolveManagedRepoRootBaseFromEnv() ?? null;

  let managedRepoRoot: string | null = null;
  if (managedBase) {
    managedRepoRoot = managedResolver.resolveLocalRepoRoot(
      { identity },
      managedBase,
    );
  }

  let sha: string | null = null;
  if (input.pinnedBaseHeadSha !== undefined && input.pinnedBaseHeadSha !== null) {
    sha = validateBaseHeadSha(input.pinnedBaseHeadSha);
    if (!sha) {
      return {
        ok: false,
        code: "BASE_HEAD_SHA_INVALID",
        message:
          "baseHeadSha serveur invalide — fail-closed avant inspection.",
      };
    }
  } else {
    if (!managedRepoRoot) {
      return {
        ok: false,
        code: "MANAGED_REPO_UNAVAILABLE",
        message:
          "Clone géré du dépôt projet indisponible — contexte de lancement fail-closed (pas de repli sur le checkout Studio).",
      };
    }
    const resolved = await resolveBoundedReadOnlyBaseHeadSha({
      startDir: managedRepoRoot,
    });
    if (!resolved.ok) {
      return {
        ok: false,
        code: resolved.code,
        message: resolved.message,
      };
    }
    sha = resolved.sha;
  }

  if (!sha) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_INVALID",
      message:
        "baseHeadSha serveur absent — fail-closed avant inspection.",
    };
  }

  return {
    ok: true,
    context: {
      baseHeadSha: sha,
      repositoryBindingIdentity: identity,
      remoteUrl,
      defaultBranch,
      pathRoot,
      managedRepoRoot,
    },
  };
}

export function launchContextAsContractInputs(
  context: TrustedProductLaunchContext,
): Record<string, string> {
  return {
    baseHeadSha: context.baseHeadSha,
    repositoryBindingIdentity: context.repositoryBindingIdentity,
    repositoryIdentity: context.repositoryBindingIdentity,
    repositoryRef: context.repositoryBindingIdentity,
    remoteUrl: context.remoteUrl,
    defaultBranch: context.defaultBranch,
    ...(context.pathRoot ? { pathRoot: context.pathRoot } : {}),
  };
}

```

### `projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts`

```typescript
// @vitest-environment node
/**
 * PJ-REPROOF-05 — Product Execution Eligibility + Cursor launch context.
 *
 * DETERMINISTIC PROVEN only — Fake RealExecutionLaunchPort; no REAL Cursor.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  resolveProductExecutionEligibility,
  shouldApplyProductExecutionEligibility,
  projectExecutionContractToCursorPrompt,
} from "@/lib/oa/execution-contract";
import {
  assertStudioCursorRealOffForTests,
  createStudioCursorGeneralistAgentDescriptor,
  createTestExecutionAttemptServices,
  SqliteRealLaunchSafetyJournal,
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import {
  MORRIS_ACTOR,
  NOW,
  baseBuildRequest,
  buildStack,
  grantContractConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedConfirmedContract,
  seedProject,
  seedStandardCycle,
  agentDescriptor,
} from "../oa/execution-attempt/helpers";
import { M4_EVIDENCE, M4_TEST_BASE_HEAD_SHA } from "../oa/execution-attempt/support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
  assertStudioCursorRealOffForTests();
});

afterEach(() => {
  cleanupW2TempDirs();
  assertStudioCursorRealOffForTests();
});

describe("PJ-REPROOF-05 — eligibility pure resolver", () => {
  it("legacy NO_REAL + NO_CURSOR_REAL + STOP AVANT EXECUTE → ineligible", () => {
    const r = resolveProductExecutionEligibility({
      constraints: [
        "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
        "NO_REAL",
        "NO_CURSOR_REAL",
        "PRODUCT_GOVERNED",
      ],
      stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
      inputs: {
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
        repositoryBindingIdentity: "acme/demo",
      },
    });
    expect(r.eligible).toBe(false);
    expect(["aucune_execution", "stop_before_execute"]).toContain(r.reasonCode);
  });

  it("SCOPE_OUT CURSOR_REAL alone → ineligible even with launch context", () => {
    const r = resolveProductExecutionEligibility({
      constraints: ["PRODUCT_GOVERNED", "SCOPE_OUT:CURSOR_REAL"],
      stopConditions: ["AUTHORITY_DENIED"],
      inputs: {
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
        repositoryBindingIdentity: "acme/demo",
      },
    });
    expect(r.eligible).toBe(false);
    expect(r.reasonCode).toBe("scope_out_cursor_real");
  });

  it("truthful read-only EC with pinned launch context → eligible", () => {
    const r = resolveProductExecutionEligibility({
      constraints: [
        "PRODUCT_GOVERNED",
        "NO_ATTEMPT_AT_PREPARE",
        "SCOPE_OUT:DURABLE_PROJECT_WRITE",
        "SCOPE_OUT:GIT_PUSH",
      ],
      stopConditions: ["AUTHORITY_DENIED", "CONTEXT_STALE"],
      inputs: {
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
        repositoryBindingIdentity: "acme/demo",
      },
    });
    expect(r.eligible).toBe(true);
    expect(r.allowsCursorReal).toBe(true);
    expect(r.allowsMutatingEffects).toBe(false);
  });

  it("missing baseHeadSha → fail-closed before Attempt semantics", () => {
    const r = resolveProductExecutionEligibility({
      constraints: ["PRODUCT_GOVERNED"],
      stopConditions: [],
      inputs: { repositoryBindingIdentity: "acme/demo" },
    });
    expect(r.eligible).toBe(false);
    expect(r.reasonCode).toBe("missing_trusted_launch_context");
  });
});

describe("PJ-REPROOF-05 — new Product EC truthful semantics", () => {
  it("prepare does not stamp NO_CURSOR_REAL / FIXTURE; pins launch context", async () => {
    const db = tempProductDbPath("pj-reproof05-prep.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05p" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "p05" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("decide");
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);
    expect(prepared.contract.constraints).not.toContain("NO_CURSOR_REAL");
    expect(prepared.contract.constraints).not.toContain("NO_REAL");
    expect(prepared.contract.constraints).not.toContain(
      "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
    );
    expect(prepared.contract.constraints).not.toContain("SCOPE_OUT:CURSOR_REAL");
    expect(prepared.contract.constraints).not.toContain("SCOPE_OUT:REAL");
    expect(prepared.contract.stopConditions).not.toContain("STOP AVANT EXECUTE");
    expect(prepared.contract.stopConditions).not.toContain("AUCUNE EXÉCUTION");
    // Morris — generic Product EC surface (not read/docs-write/fixture categories).
    expect(prepared.contract.action).toBe("studio.cursor.generalist.execute");
    expect(prepared.contract.target).toBe("studio.cursor.generalist.workspace");
    expect(prepared.contract.scope).toBe(
      "studio.cursor.generalist.authorized_contract",
    );
    expect(prepared.contract.requiredCapabilities).toEqual([
      "cap:studio.cursor.generalist",
    ]);
    expect(prepared.contract.action).not.toBe("product:read");
    expect(prepared.contract.scope).not.toBe("product:read-only");

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.baseHeadSha).toBe(W2_TEST_PINNED_BASE_HEAD_SHA);
    expect(typeof inputs.repositoryBindingIdentity).toBe("string");

    const eligibility = resolveProductExecutionEligibility({
      constraints: loaded.contract.constraints,
      stopConditions: loaded.contract.stopConditions,
      inputs,
    });
    expect(eligibility.eligible).toBe(true);
  });

  it("missing repository binding → prepare fail-closed", async () => {
    const db = tempProductDbPath("pj-reproof05-nobind.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05n" });
    const created = await runtime.createProject({
      name: "No bind",
      objective: "x",
      context: "y",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "NB",
      idempotencyKey: "pj05-nobind",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create");
    const projectId = created.project.projectId;
    const oa = runtime.oa!;
    const proj = await oa.projectServices.getProject.execute({ projectId });
    expect(proj.ok).toBe(true);
    if (!proj.ok) throw new Error("proj");
    if (!proj.project.repositoryBinding) {
      expect(proj.project.repositoryBinding).toBeUndefined();
    }
  });
});

describe("PJ-REPROOF-05 — VITEST env ≠ trusted launch authority", () => {
  it("VITEST alone does not auto-pin; prepare without explicit pin fail-closed", async () => {
    expect(process.env.VITEST === "true" || process.env.VITEST === "1").toBe(
      true,
    );
    const db = tempProductDbPath("pj-reproof05-novitest-pin.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05v" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "v05" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("decide");

    // No pinnedBaseHeadSha / managedRepoRootBase — product must fail-closed
    // even though VITEST is set by the runner.
    const unpinned = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
    });
    expect(unpinned.ok).toBe(false);
    if (unpinned.ok) throw new Error("expected fail-closed without pin");
    expect(unpinned.code).toBe("MANAGED_REPO_UNAVAILABLE");

    const eligibilityWithoutPin = resolveProductExecutionEligibility({
      constraints: ["PRODUCT_GOVERNED"],
      stopConditions: [],
      inputs: {},
    });
    expect(eligibilityWithoutPin.eligible).toBe(false);

    const pinned = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(pinned.ok).toBe(true);
    if (!pinned.ok) throw new Error(pinned.code);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: pinned.contract.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.baseHeadSha).toBe(W2_TEST_PINNED_BASE_HEAD_SHA);
    expect(
      resolveProductExecutionEligibility({
        constraints: loaded.contract.constraints,
        stopConditions: loaded.contract.stopConditions,
        inputs,
      }).eligible,
    ).toBe(true);
  });
});

describe("PJ-REPROOF-05 — Authorize + Select fail-closed for legacy EC", () => {
  it("ineligible legacy EC → Select rejects before Attempt", async () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "pj05-leg-"));
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: path.join(dir, "safety.sqlite"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const generalist = createStudioCursorGeneralistAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [generalist], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [generalist],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal: journal },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority, "product:read-only", M4_EVIDENCE);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:pj05:legacy-forbid",
        cycleInstanceId: "cyc:std-001",
        action: "product:read",
        target: "product:project-workspace",
        scope: "product:read-only",
        requiredCapabilities: ["cap:product-read"],
        constraints: [
          "PRODUCT_GOVERNED",
          "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
          "NO_REAL",
          "NO_CURSOR_REAL",
        ],
        stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
        inputs: {
          baseHeadSha: M4_TEST_BASE_HEAD_SHA,
          repositoryBindingIdentity: "acme/legacy",
          objective: "legacy diagnostic",
        },
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) throw new Error("build");
    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) throw new Error("validate");

    const confirmationId = await grantContractConfirmation(stack, {
      scope: validated.contract.scope,
      evidenceId: M4_EVIDENCE,
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: validated.contract.executionContractId,
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedVersion: validated.contract.version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error("confirm");

    expect(
      resolveProductExecutionEligibility({
        constraints: confirmed.contract.constraints,
        stopConditions: confirmed.contract.stopConditions,
        inputs: confirmed.contract.inputs as Record<string, unknown>,
      }).eligible,
    ).toBe(false);

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:pj05:legacy-forbid",
      executionContractId: confirmed.contract.executionContractId,
      idempotencyKey: "idem:pj05:legacy-forbid-xxxxxxxx",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedContractVersion: confirmed.contract.version,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      systemInitiated: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("select should fail");
    expect(selected.error.detailCode).toBe("ATTEMPT_INVALID");
    expect(String(selected.error.internalCauseRef ?? "")).toContain(
      "execution_ineligible",
    );
    journal.close();
  });
});

describe("PJ-REPROOF-05 — Product authorize eligibility fields", () => {
  it("prepared EC is eligible; authorize DTO exposes eligibility fields", async () => {
    const db = tempProductDbPath("pj-reproof05-authz.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05a" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a05" });
    const oa = runtime.oa!;

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    if (!decided.ok) throw new Error("decide");
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(
      resolveProductExecutionEligibility({
        constraints: loaded.contract.constraints,
        stopConditions: loaded.contract.stopConditions,
        inputs: loaded.contract.inputs as Record<string, unknown>,
      }).eligible,
    ).toBe(true);

    const inspected = await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId: prepared.contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);

    const authz = await evaluateExecutionAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId: prepared.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(authz.ok).toBe(true);
    if (!authz.ok) throw new Error(authz.code);
    expect(typeof authz.executionEligible).toBe("boolean");
    expect(typeof authz.executionEligibilityReasonCode).toBe("string");
    if (authz.outcome === "AUTHORIZED") {
      expect(authz.executionEligible).toBe(true);
      expect(authz.outcomeLabel).toBe("AUTORISÉ — EXÉCUTION ÉLIGIBLE");
    }
  });
});

describe("PJ-REPROOF-05 — generic Product Cursor path (Morris)", () => {
  it("Prepare→Inspect→Authorize→Select→Start reaches deterministic generalist launch", async () => {
    const db = tempProductDbPath("pj-reproof05-generic.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05g" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "g05" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    if (!decided.ok) throw new Error("decide");
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    const contract = loaded.contract;
    expect(contract.action).toBe("studio.cursor.generalist.execute");
    expect(contract.constraints).toContain("PRODUCT_GOVERNED");
    expect(contract.constraints).not.toContain("FIXTURE_EXECUTOR_BOUNDARY_ONLY");

    const prompt = projectExecutionContractToCursorPrompt({ contract });
    expect(prompt.promptText.length).toBeGreaterThan(40);
    expect(prompt.executionContractId).toBe(contract.executionContractId);
    expect(prompt.semanticFingerprint).toBe(contract.semanticFingerprint ?? null);

    await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId: contract.executionContractId,
    });
    const authz = await evaluateExecutionAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId: contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(authz.ok).toBe(true);
    if (!authz.ok) throw new Error(authz.code);
    expect(authz.outcome).toBe("AUTHORIZED");
    expect(authz.executionEligible).toBe(true);

    const launchPort = oa.executionAttemptServices!.realBoundary!.launchPort;
    const before =
      "calls" in launchPort && Array.isArray(launchPort.calls)
        ? launchPort.calls.length
        : 0;

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId: seeded.projectId,
      executionContractId: contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.code);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);

    const started = await governedExecuteStart({
      oa,
      projectId: seeded.projectId,
      executionContractId: contract.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    if (!started.ok) {
      throw new Error(`start failed: ${started.code} ${started.message}`);
    }
    expect(started.ok).toBe(true);
    expect(started.phase).toBe("running");
    const after =
      "calls" in launchPort && Array.isArray(launchPort.calls)
        ? launchPort.calls.length
        : 0;
    expect(after).toBeGreaterThan(before);
    expect(started.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  });
});

describe("PJ-REPROOF-05 — Product vs non-Product eligibility isolation", () => {
  it("shouldApply: PRODUCT_GOVERNED and legacy surface only", () => {
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: ["PRODUCT_GOVERNED"],
        action: "studio.cursor.generalist.execute",
        target: "studio.cursor.generalist.workspace",
        scope: "studio.cursor.generalist.authorized_contract",
        requiredCapabilities: ["cap:studio.cursor.generalist"],
      }),
    ).toBe(true);

    // LEGACY PRODUCT COMPATIBILITY — exact Batch Cookinb surface, no PRODUCT_GOVERNED.
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: ["FIXTURE_EXECUTOR_BOUNDARY_ONLY", "NO_REAL"],
        action: "product:read",
        target: "product:project-workspace",
        scope: "product:read-only",
        requiredCapabilities: ["cap:product-read"],
      }),
    ).toBe(true);

    // F3 / fixture historical — FIXTURE stamp alone is NOT Product.
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: ["FIXTURE_EXECUTOR_BOUNDARY_ONLY", "NO_REAL"],
        action: "fixture-docs-prepare",
        target: "sfia-studio/f3-fixture-only",
        scope: "f3-fixture:docs+metadata-only",
        requiredCapabilities: ["cap:f3-fixture-docs"],
      }),
    ).toBe(false);

    // OA foundation lifecycle — not Product.
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: ["no-runtime-code"],
        action: "publish-modeled-pack",
        target: "sfia-v3-modeled/v3-native-option-a",
        scope: "docs+schemas+examples only",
        requiredCapabilities: ["cap:git-docs"],
      }),
    ).toBe(false);

    // Sealed GCEC docs-write surface — not Product canonical.
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: [],
        action: "cursor.docs_write.apply",
        target: "repo:docs",
        scope: "bounded_docs_write",
        requiredCapabilities: ["cap:m4.bounded_docs_write"],
      }),
    ).toBe(false);
  });

  it("legacy Product surface WITHOUT PRODUCT_GOVERNED still fail-closed at Select", async () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "pj05-leg-compat-"));
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: path.join(dir, "safety.sqlite"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const generalist = createStudioCursorGeneralistAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [generalist], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [generalist],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal: journal },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority, "product:read-only", M4_EVIDENCE);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);

    // Exact historical surface — deliberately omit PRODUCT_GOVERNED.
    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:pj05:legacy-compat-surface",
        cycleInstanceId: "cyc:std-001",
        action: "product:read",
        target: "product:project-workspace",
        scope: "product:read-only",
        requiredCapabilities: ["cap:product-read"],
        constraints: [
          "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
          "NO_REAL",
          "NO_CURSOR_REAL",
        ],
        stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
        inputs: {
          baseHeadSha: M4_TEST_BASE_HEAD_SHA,
          repositoryBindingIdentity: "acme/legacy",
          objective: "legacy without PRODUCT_GOVERNED marker",
        },
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) throw new Error("build");
    expect(built.contract.constraints).not.toContain("PRODUCT_GOVERNED");
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: built.contract.constraints,
        action: built.contract.action,
        target: built.contract.target,
        scope: built.contract.scope,
        requiredCapabilities: built.contract.requiredCapabilities,
      }),
    ).toBe(true);

    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) throw new Error("validate");
    const confirmationId = await grantContractConfirmation(stack, {
      scope: "product:read-only",
      evidenceId: M4_EVIDENCE,
    });
    await stack.execution.confirmExecutionContract.execute({
      executionContractId: validated.contract.executionContractId,
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedVersion: validated.contract.version,
    });

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:pj05:legacy-compat",
      executionContractId: validated.contract.executionContractId,
      idempotencyKey: "idem:pj05:legacy-compat",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      systemInitiated: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected reject");
    expect(selected.error.detailCode).toBe("ATTEMPT_INVALID");
    expect(String(selected.error.internalCauseRef ?? "")).toContain(
      "execution_ineligible",
    );
    const listed = await stack.attempts.listExecutionAttempts.execute({
      executionContractId: validated.contract.executionContractId,
    });
    expect(listed.ok).toBe(true);
    if (listed.ok) expect(listed.attempts.length).toBe(0);
    journal.close();
  });

  it("F3 historical fixture EC through generic Select/Start without Product launch context", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(
      stack.decisions.authority,
      "f3-fixture:docs+metadata-only",
      M4_EVIDENCE,
    );
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:pj05:f3-hist",
        cycleInstanceId: "cyc:std-001",
        action: "fixture-docs-prepare",
        target: "sfia-studio/f3-fixture-only",
        scope: "f3-fixture:docs+metadata-only",
        requiredCapabilities: ["cap:f3-fixture-docs"],
        // Historical F3 stamps — NOT Product PRODUCT_GOVERNED / FIXTURE_EXECUTOR_…
        constraints: ["FIXTURE ONLY", "NO REAL"],
        stopConditions: ["AUTHORITY_DENIED"],
        // Deliberately NO baseHeadSha / repository identity
        inputs: { objective: "f3 historical fixture prepare" },
        authorityEvidenceId: M4_EVIDENCE,
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) throw new Error("build");
    expect(built.contract.constraints).not.toContain("PRODUCT_GOVERNED");
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: built.contract.constraints,
        action: built.contract.action,
        target: built.contract.target,
        scope: built.contract.scope,
        requiredCapabilities: built.contract.requiredCapabilities,
      }),
    ).toBe(false);

    // Product resolver alone would fail — proving isolation is required.
    expect(
      resolveProductExecutionEligibility({
        constraints: built.contract.constraints,
        stopConditions: built.contract.stopConditions,
        inputs: (built.contract.inputs ?? {}) as Record<string, unknown>,
      }).eligible,
    ).toBe(false);

    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) throw new Error("validate");
    const confirmationId = await grantContractConfirmation(stack, {
      scope: "f3-fixture:docs+metadata-only",
      evidenceId: M4_EVIDENCE,
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: validated.contract.executionContractId,
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedVersion: validated.contract.version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error("confirm");

    // Exact sealed F3 fixture agent criteria (resolveAttemptExecutionProfile).
    const f3Agent = agentDescriptor({
      agentId: "agt:f3-fixture",
      agentType: "fixture_docs_writer",
      supportedCapabilities: ["cap:f3-fixture-docs"],
      allowedActions: ["fixture-docs-prepare"],
      allowedTargets: ["sfia-studio/f3-fixture-only"],
      allowedScopes: ["f3-fixture:docs+metadata-only"],
    });
    const fixtureAdapter = new TestExecutionAdapter();
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [f3Agent],
      adapter: fixtureAdapter,
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:pj05:f3-hist",
      executionContractId: confirmed.contract.executionContractId,
      idempotencyKey: "idem:pj05:f3-hist",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      systemInitiated: true,
      requestedAgentRef: "agt:f3-fixture",
    });
    if (!selected.ok) {
      throw new Error(
        `f3 select failed: ${selected.error.detailCode} ${selected.error.internalCauseRef ?? ""} ${selected.error.message}`,
      );
    }
    expect(selected.ok).toBe(true);
    expect(selected.attempt.status).toBe("accepted");

    const started = await stack.attempts.startExecution.execute({
      attemptId: selected.attempt.attemptId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.error.detailCode);
    expect(started.attempt.status).toBe("running");
    expect(fixtureAdapter.launchCallCount).toBeGreaterThan(0);
  });

  it("OA foundation non-Product lifecycle Select without Product trusted context", async () => {
    const stack = buildStack();
    const { contractId } = await seedConfirmedContract(stack);
    const loaded = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: loaded.contract.constraints,
        action: loaded.contract.action,
        target: loaded.contract.target,
        scope: loaded.contract.scope,
        requiredCapabilities: loaded.contract.requiredCapabilities,
      }),
    ).toBe(false);
    expect(loaded.contract.inputs?.baseHeadSha).toBeUndefined();

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:pj05:oa-foundation",
      executionContractId: contractId,
      idempotencyKey: "idem:pj05:oa-foundation",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      systemInitiated: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.error.detailCode);
    expect(selected.attempt.status).toBe("accepted");
  });
});

```

## 16. Modified files — useful diffs (OA core + remaining delivery)

### OA Select / Start / index / Gate D
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
index 2062ba30..fab2a812 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
@@ -6,7 +6,10 @@
 import type { ClockPort } from "@/lib/oa/doctrine";
 import type { AuthorityResolverPort } from "@/lib/oa/decision";
 import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
-import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
+import {
+  computeExecutionContractSemanticFingerprint,
+  isExecutionReadyStatus,
+} from "@/lib/oa/execution-contract";
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
 import type { AttemptDetailCode, ActorReference } from "../domain/types";
 import type { GateDGrant } from "../domain/realLaunchSafety";
@@ -111,7 +114,10 @@ export class GrantGateD {
       if (!contract) {
         return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
       }
-      if (contract.status !== "confirmed") {
+      // PJ-REPROOF-05 — Gate D is a mechanical launch-safety token.
+      // Align with Select/Start Execute-ready invariant (validated + NOT_REQUIRED
+      // OR confirmed). Do not invent a second Pilot Confirmation.
+      if (!isExecutionReadyStatus(contract)) {
         return fail(
           "EXECUTION_CONTRACT_NOT_CONFIRMED",
           `contract_status_${contract.status}`,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
index e971da91..5c25605e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
@@ -11,6 +11,7 @@ import type {
   CheckExecutionAuthorization,
   ExecutionContractRepositoryPort,
 } from "@/lib/oa/execution-contract";
+import { resolveProductExecutionEligibility, shouldApplyProductExecutionEligibility } from "@/lib/oa/execution-contract";
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
 import { captureBoundExecutionContractSnapshot } from "../domain/boundExecutionContract";
 import {
@@ -190,6 +191,34 @@ export class SelectExecutionAgent {
         );
       }

+      // PJ-REPROOF-05 — Product Start invariants ONLY for Product-family ECs.
+      // F3 / OA foundation / sealed GCEC share these use-cases and must not
+      // receive Product trusted-launch / stamp fail-closed rules.
+      if (
+        shouldApplyProductExecutionEligibility({
+          constraints: contract.constraints,
+          action: contract.action,
+          target: contract.target,
+          scope: contract.scope,
+          requiredCapabilities: contract.requiredCapabilities,
+        })
+      ) {
+        const eligibility = resolveProductExecutionEligibility({
+          constraints: contract.constraints,
+          stopConditions: contract.stopConditions,
+          inputs:
+            contract.inputs && typeof contract.inputs === "object"
+              ? (contract.inputs as Record<string, unknown>)
+              : null,
+        });
+        if (!eligibility.eligible) {
+          return fail(
+            "ATTEMPT_INVALID",
+            `execution_ineligible_${eligibility.reasonCode}`,
+          );
+        }
+      }
+
       const evidenceRead = this.listProjectEvidence
         ? await this.listProjectEvidence(contract.projectId)
         : { ok: false as const, reason: "evidence_reader_unavailable" as const };
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index e60e8899..dab249b1 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -38,6 +38,8 @@ import {
   DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
   projectExecutionContractToCursorPrompt,
   resolveExecutionWindowForStart,
+  resolveProductExecutionEligibility,
+  shouldApplyProductExecutionEligibility,
   type ResolvedExecutionWindow,
 } from "@/lib/oa/execution-contract";
 import type { AuthorityResolverPort } from "@/lib/oa/decision";
@@ -486,6 +488,34 @@ export class StartExecution {
         );
       }

+      // PJ-REPROOF-05 — Product Start invariants ONLY for Product-family ECs
+      // (defense in depth; same applicability as Select).
+      if (
+        shouldApplyProductExecutionEligibility({
+          constraints: contract.constraints,
+          action: contract.action,
+          target: contract.target,
+          scope: contract.scope,
+          requiredCapabilities: contract.requiredCapabilities,
+        })
+      ) {
+        const eligibility = resolveProductExecutionEligibility({
+          constraints: contract.constraints,
+          stopConditions: contract.stopConditions,
+          inputs:
+            contract.inputs && typeof contract.inputs === "object"
+              ? (contract.inputs as Record<string, unknown>)
+              : null,
+        });
+        if (!eligibility.eligible) {
+          return fail(
+            "ATTEMPT_INVALID",
+            `execution_ineligible_${eligibility.reasonCode}`,
+            { executionContractId: contract.executionContractId },
+          );
+        }
+      }
+
       const agent = this.registry.getAgent(attempt.selectedAgentRef);
       if (!agent) {
         return fail("AGENT_NOT_FOUND", "selected_agent_not_registered", {
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
index 4baedb0f..fc1706ae 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
@@ -22,6 +22,19 @@
 export * from "./domain/types";
 export * from "./domain/errors";
 export * from "./domain/invariants";
+export {
+  TRAJECTORY_NON_EXECUTE_STOPS,
+  filterTrajectoryNonExecuteStopsFromEc,
+  resolveProductExecutionEligibility,
+  shouldApplyProductExecutionEligibility,
+  PRODUCT_GOVERNED_CONSTRAINT,
+  LEGACY_PRODUCT_COMPAT_ACTION,
+  LEGACY_PRODUCT_COMPAT_TARGET,
+  LEGACY_PRODUCT_COMPAT_SCOPE,
+  LEGACY_PRODUCT_COMPAT_CAPABILITY,
+  type ProductExecutionEligibility,
+  type ProductExecutionEligibilityReasonCode,
+} from "./domain/resolveProductExecutionEligibility";
 export {
   computeExecutionContractSemanticFingerprint,
   computeExecutionContractSemanticMaterialFingerprint,
```

### Remaining delivery diffs
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
index 1a4a0f4a..76a01f21 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
@@ -1,5 +1,13 @@
 /**
- * Shared M4 REAL-OFF test fixtures (contract inputs.baseHeadSha, wiring).
+ * Shared M4 REAL-OFF test fixtures.
+ *
+ * TEST CONTEXT LEGITIMATE (not Product-eligibility masking):
+ * - `baseHeadSha` is intrinsically required by StartExecution REAL launch
+ *   (`extractContractBaseHeadSha`) for M4/GCEC/generalist REAL paths.
+ * - repository identity fields supply launch-request identity when the test
+ *   stack has no Project.repositoryBinding; they are NOT required to satisfy
+ *   Product `resolveProductExecutionEligibility` after Product/non-Product
+ *   isolation (non-Product ECs skip that resolver).
  */
 export const M4_TEST_BASE_HEAD_SHA =
   "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
@@ -8,6 +16,16 @@ export const M4_EVIDENCE = "evd:morris-n3";

 export function m4ContractInputs(
   baseHeadSha: string = M4_TEST_BASE_HEAD_SHA,
-): { baseHeadSha: string } {
-  return { baseHeadSha };
+): {
+  baseHeadSha: string;
+  repositoryBindingIdentity: string;
+  repositoryIdentity: string;
+  repositoryRef: string;
+} {
+  return {
+    baseHeadSha,
+    repositoryBindingIdentity: "acme/m4-fixture",
+    repositoryIdentity: "acme/m4-fixture",
+    repositoryRef: "acme/m4-fixture",
+  };
 }
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
index 934a8b64..9269d3dc 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
@@ -331,10 +331,12 @@ describe("CR-PCONT-05 TrajectorySurface post-execution recovery", () => {
       executionContractId: "xct:pcont-ui",
       contractVersion: 1,
       outcome: "AUTHORIZED",
-      outcomeLabel: "AUTORISÉ",
+      outcomeLabel: "AUTORISÉ — EXÉCUTION ÉLIGIBLE",
       reasonCode: "authorized",
       reasonText: "Autorisé.",
       nextAction: "Exécuter",
+      executionEligible: true,
+      executionEligibilityReasonCode: "eligible",
       inspection: {
         executionContractId: "xct:pcont-ui",
         contractVersion: 1,
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
index 5251763c..01ba57c5 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
@@ -80,6 +80,7 @@ import {
   currentF2Context,
   seedQualifiedProject,
   tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";
 import {
   MORRIS_ACTOR,
@@ -302,6 +303,7 @@ describe("A — coverage + no Pilot HOW", () => {
       decisionId: decided.decision.decisionId,
       currentContext: await currentF2Context(runtime, seeded.projectId),
       forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
     expect(prepared.ok).toBe(true);
     if (!prepared.ok) throw new Error(prepared.code);
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
index d8b8428f..6f31bd98 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
@@ -1,7 +1,10 @@
 /**
  * Shared harness for W2 (E+A+B+C) product-path tests.
  * Product SQLite on a temp file so restart proofs reopen the same store.
- * No REAL boundary, no execution: every helper here stops before Execute.
+ *
+ * PJ-REPROOF-05 — Product canonical path uses a DETERMINISTIC fake Cursor
+ * REAL boundary (TestOnlyRealExecutionLaunchPort). Never enables production
+ * SFIA_STUDIO_CURSOR_REAL. Fixtures remain available for historical F3 tests.
  */
 import fs from "node:fs";
 import os from "node:os";
@@ -16,6 +19,8 @@ import {
 } from "@/lib/vertical-slice-runtime";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import { SqliteRealLaunchSafetyJournal } from "@/lib/oa/execution-attempt";
+import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";

 const APP_ROOT = path.resolve(__dirname, "../..");
 export const W2_REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
@@ -86,6 +91,11 @@ export function cleanupW2TempDirs(): void {
 export function bootW2Runtime(input: {
   productDbPath: string;
   idPrefix?: string;
+  /**
+   * When false, omit deterministic Cursor REAL boundary (historical fixture-only
+   * compositions). Default true so Product governed Execute can select generalist.
+   */
+  readonly withDeterministicProductCursorBoundary?: boolean;
 }): RuntimeApplicationService {
   process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
   process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
@@ -116,6 +126,25 @@ export function bootW2Runtime(input: {
     identity: process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY!,
   });
   resetRuntimeApplicationServiceForTests();
+
+  const withCursorBoundary = input.withDeterministicProductCursorBoundary !== false;
+  let realBoundary:
+    | {
+        launchPort: TestOnlyRealExecutionLaunchPort;
+        safetyJournal: SqliteRealLaunchSafetyJournal;
+      }
+    | undefined;
+  if (withCursorBoundary) {
+    const safetyDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w2-gate-"));
+    tempDirs.push(safetyDir);
+    realBoundary = {
+      launchPort: new TestOnlyRealExecutionLaunchPort({ holdCompletion: true }),
+      safetyJournal: new SqliteRealLaunchSafetyJournal({
+        databasePath: path.join(safetyDir, "safety.sqlite"),
+      }),
+    };
+  }
+
   return getRuntimeApplicationService({
     registryRoot: W2_REGISTRY_ROOT,
     schemasRoot: W2_SCHEMAS_ROOT,
@@ -123,6 +152,7 @@ export function bootW2Runtime(input: {
     idSource: new SeededIdSource(input.idPrefix ?? "w2"),
     auditMode: "noop",
     productDbPath: input.productDbPath,
+    ...(realBoundary ? { realBoundary } : {}),
   });
 }

@@ -205,6 +235,24 @@ export async function seedQualifiedProject(
   const after = await runtime.getProject(projectId);
   if (!after.ok) throw new Error("seed: getProject(after) failed");

+  // PJ-REPROOF-05 — Product executable EC prepare requires durable repository
+  // binding. Ambient Studio checkout is never implied.
+  if (oa.projectServices.setProjectRepositoryBinding) {
+    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
+      projectId,
+      actor: W2_TEST_ACTOR,
+      binding: {
+        provider: "github",
+        identity: `acme/w2-harness-${suffix}`,
+        remoteUrl: `https://github.com/acme/w2-harness-${suffix}.git`,
+        defaultBranch: "main",
+        pathRoot: `projects/w2-harness-${suffix}`,
+      },
+    });
+    expect(bound.ok).toBe(true);
+    if (!bound.ok) throw new Error("seed: setProjectRepositoryBinding failed");
+  }
+
   return {
     projectId,
     cycleInstanceId,
@@ -212,6 +260,13 @@ export async function seedQualifiedProject(
   };
 }

+/**
+ * Deterministic full SHA for Product prepare / eligibility tests (not live git).
+ * Must be passed explicitly via prepareExecutionContractFromW2Decision
+ * `pinnedBaseHeadSha` — product code never auto-pins from VITEST.
+ */
+export const W2_TEST_PINNED_BASE_HEAD_SHA = "a".repeat(40);
+
 /** Resolve qualification + propose Options on the production W2 Phase B path. */
 export async function proposeW2OptionsForProject(
   runtime: RuntimeApplicationService,
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
index 1df6cbfc..9124d220 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
@@ -7,6 +7,10 @@ import { prepareExecutionContractFromW2Decision } from "@/features/project-assis
 import {
   assertNotF3FixtureSemantics,
   deriveW3AExecutionEnvelope,
+  PRODUCT_CANONICAL_EXECUTION_ACTION,
+  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
+  PRODUCT_CANONICAL_EXECUTION_SCOPE,
+  PRODUCT_CANONICAL_EXECUTION_TARGET,
 } from "@/features/project-assistant/w2/w3aProductExecutionSemantics";
 import {
   buildActualExecutionWork,
@@ -54,12 +58,14 @@ import {
   W3A_BOUNDED_FIXTURE_AGENT_ID,
   W3A_FIXTURE_ALLOWED_SCOPES,
 } from "@/lib/vertical-slice-runtime/w3aProductFixtureWiring";
+import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
 import {
   bootW2Runtime,
   cleanupW2TempDirs,
   currentF2Context,
   seedQualifiedProject,
   tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";

 beforeEach(() => {
@@ -164,7 +170,10 @@ describe("W3-A actual work provenance", () => {
     expect(actual.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
     expect(actual.scopeOut).toContain("DURABLE_PROJECT_WRITE");
     expect(actual.scopeOut).toContain("GIT_PUSH");
-    expect(actual.scopeOut).toContain("REAL");
+    // PJ-REPROOF-05 — REAL/CURSOR_REAL are no longer blanket SCOPE_OUT for
+    // Product canonical missions (Cursor generalist may execute read-only).
+    expect(actual.scopeOut).not.toContain("REAL");
+    expect(actual.scopeOut).not.toContain("CURSOR_REAL");
     // R13 — scopeOut must not forbid the current action/scopeIn effect.
     expect(actual.scopeOut).not.toContain("TEMPORARY_ARTIFACT");
     expect(actual.scopeOut).not.toContain(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
@@ -183,10 +192,17 @@ describe("W3-A actual work provenance", () => {
     });
     expect(env.ok).toBe(true);
     if (!env.ok) return;
-    expect(env.envelope.action).toBe("product:generate-temporary-artifact");
-    expect(env.envelope.scope).toBe(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
+    expect(env.envelope.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
+    expect(env.envelope.scope).toBe(PRODUCT_CANONICAL_EXECUTION_SCOPE);
+    expect(env.envelope.target).toBe(PRODUCT_CANONICAL_EXECUTION_TARGET);
+    expect(env.envelope.requiredCapabilities).toEqual([
+      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
+    ]);
+    expect(env.envelope.inputs.effectClass).toBe("generate-temporary-artifact");
+    expect(env.envelope.inputs.internalEffectAction).toBe(
+      "product:generate-temporary-artifact",
+    );
     expect(env.envelope.scope).not.toContain("décider");
-    expect(env.envelope.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
     expect(env.envelope.requiredAuthority).toBe("N1");
     expect(env.envelope.effectConfirmationRequired).toBe(true);
     expect(env.envelope.effectConfirmationLevel).toBe("N1");
@@ -255,11 +271,16 @@ describe("W3-A actual work provenance", () => {
     });
     expect(envSim.ok && envRead.ok).toBe(true);
     if (!envSim.ok || !envRead.ok) return;
-    expect(envSim.envelope.action).toBe("product:simulate");
-    expect(envRead.envelope.action).toBe("product:read");
-    expect(envSim.envelope.scope).toBe(W3A_PRODUCT_SCOPE.SIMULATE);
-    expect(envRead.envelope.scope).toBe(W3A_PRODUCT_SCOPE.READ);
-    expect(envSim.envelope.scope).not.toBe(envRead.envelope.scope);
+    // Canonical Product EC surface is ONE generic Cursor quartet.
+    expect(envSim.envelope.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
+    expect(envRead.envelope.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
+    expect(envSim.envelope.scope).toBe(PRODUCT_CANONICAL_EXECUTION_SCOPE);
+    expect(envRead.envelope.scope).toBe(PRODUCT_CANONICAL_EXECUTION_SCOPE);
+    // Internal effect-control facts remain distinct (ActionPolicy — not Product types).
+    expect(envSim.envelope.inputs.effectClass).toBe("simulate");
+    expect(envRead.envelope.inputs.effectClass).toBe("read");
+    expect(envSim.envelope.inputs.internalEffectAction).toBe("product:simulate");
+    expect(envRead.envelope.inputs.internalEffectAction).toBe("product:read");
   });
 });

@@ -537,7 +558,7 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     expect(prepared.code).toBe("EFFECTS_UNRESOLVED");
   });

-  it("temp artifact N1 + Confirmation N1 → AUTHORIZED → accepted→running→terminal", async () => {
+  it("temp artifact Confirmation gate → AUTHORIZED → generalist Select→Start (deterministic launch)", async () => {
     const ctx = await decideGoverned("pos");
     const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
     const prepared = await prepareExecutionContractFromW2Decision({
@@ -547,14 +568,18 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
       currentContext: context,
       forceLocalAuthority: true,
       qualifiedOperationKind: "generate-temporary-artifact",
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
     expect(prepared.ok).toBe(true);
     if (!prepared.ok) throw new Error(`prepare ${prepared.code}`);
-    expect(prepared.contract.action).toBe("product:generate-temporary-artifact");
+    expect(prepared.contract.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
     expect(prepared.contract.action).not.toContain("trajectory");
-    expect(prepared.contract.scope).toBe(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
+    expect(prepared.contract.scope).toBe(PRODUCT_CANONICAL_EXECUTION_SCOPE);
     expect(prepared.contract.scope).not.toContain("décider");
-    expect(prepared.contract.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
+    expect(prepared.contract.target).toBe(PRODUCT_CANONICAL_EXECUTION_TARGET);
+    expect(prepared.contract.requiredCapabilities).toEqual([
+      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
+    ]);
     expect(prepared.contract.requiredAuthority).toBe("N1");
     expect(prepared.contract.status).toBe("confirmation_required");
     expect(prepared.contract.effectConfirmationRequired).toBe(true);
@@ -562,6 +587,10 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     expect(prepared.contract.constraints.some((c) =>
       c.startsWith("EFFECT_CONFIRMATION_REQUIRED"),
     )).toBe(true);
+    expect(prepared.contract.constraints).toContain("PRODUCT_GOVERNED");
+    expect(prepared.contract.constraints).not.toContain(
+      "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
+    );

     const executionContractId = prepared.contract.executionContractId;
     const inspected = await inspectExecutionContract({
@@ -600,7 +629,12 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     expect(authorized.ok).toBe(true);
     if (!authorized.ok) throw new Error("auth");
     expect(authorized.outcome).toBe("AUTHORIZED");
-    expect(ctx.oa.executionAttemptServices.registry.getAgent(W3A_BOUNDED_FIXTURE_AGENT_ID)).toBeTruthy();
+    expect(authorized.executionEligible).toBe(true);
+
+    const launchPort = ctx.oa.executionAttemptServices!.realBoundary!.launchPort;
+    const launchBefore = "calls" in launchPort && Array.isArray(launchPort.calls)
+      ? launchPort.calls.length
+      : 0;

     const selected = await governedExecuteSelectAgent({
       oa: ctx.oa,
@@ -611,7 +645,9 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     expect(selected.ok).toBe(true);
     if (!selected.ok) return;
     expect(selected.phase).toBe("accepted");
-    expect(selected.selectedAgentRef).toBe(W3A_BOUNDED_FIXTURE_AGENT_ID);
+    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
+    expect(selected.adapterId).not.toContain("f3");
+    expect(selected.selectedAgentRef).not.toBe(W3A_BOUNDED_FIXTURE_AGENT_ID);

     const started = await governedExecuteStart({
       oa: ctx.oa,
@@ -624,23 +660,27 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     if (!started.ok) return;
     expect(started.phase).toBe("running");
     expect(started.attemptId).toBe(selected.attemptId);
-
-    const terminal = await governedExecuteRecordResult({
+    expect(started.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
+    const launchAfter = "calls" in launchPort && Array.isArray(launchPort.calls)
+      ? launchPort.calls.length
+      : 0;
+    expect(launchAfter).toBeGreaterThan(launchBefore);
+
+    // No second Pilot Confirmation invented for Cursor REAL — Gate D is mechanical.
+    // Record awaits Cursor report (no F3 fixture fallback).
+    const pending = await governedExecuteRecordResult({
       oa: ctx.oa,
       projectId: ctx.seeded.projectId,
       executionContractId,
       attemptId: started.attemptId,
       forceLocalAuthority: true,
     });
-    expect(terminal.ok).toBe(true);
-    if (!terminal.ok) return;
-    expect(terminal.phase).toBe("terminal");
-    expect(terminal.attemptId).toBe(selected.attemptId);
-    expect(terminal.cycleInstanceClosed).toBe(false);
-    expect(terminal.realExecution).toBe(false);
+    expect(pending.ok).toBe(false);
+    if (pending.ok) return;
+    expect(pending.code).toBe("CURSOR_REPORT_PENDING");
   });

-  it("read → N1 · Confirmation NOT_REQUIRED marker · validated · fixture agent selectable (PJ-REPROOF-04)", async () => {
+  it("compat read kind → N1 · no Confirmation · generalist Select (not fixture)", async () => {
     const ctx = await decideGoverned("read");
     const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
     const prepared = await prepareExecutionContractFromW2Decision({
@@ -650,6 +690,7 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
       currentContext: context,
       forceLocalAuthority: true,
       qualifiedOperationKind: "read",
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
     expect(prepared.ok).toBe(true);
     if (!prepared.ok) return;
@@ -666,8 +707,10 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
         constraints: prepared.contract.constraints,
       }),
     ).toBe(true);
-    expect(prepared.contract.action).toBe("product:read");
-    expect(prepared.contract.scope).toBe(W3A_PRODUCT_SCOPE.READ);
+    expect(prepared.contract.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
+    expect(prepared.contract.scope).toBe(PRODUCT_CANONICAL_EXECUTION_SCOPE);
+    expect(prepared.contract.action).not.toBe("product:read");
+    expect(prepared.contract.scope).not.toBe(W3A_PRODUCT_SCOPE.READ);

     const executionContractId = prepared.contract.executionContractId;
     await inspectExecutionContract({
@@ -684,7 +727,6 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     expect(authorized.ok).toBe(true);
     if (!authorized.ok) return;
     expect(authorized.outcome).toBe("AUTHORIZED");
-    const launchBefore = ctx.oa.fixtureAdapter.launchCallCount;
     const selected = await governedExecuteSelectAgent({
       oa: ctx.oa,
       projectId: ctx.seeded.projectId,
@@ -693,8 +735,8 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     });
     expect(selected.ok).toBe(true);
     if (!selected.ok) return;
-    expect(selected.selectedAgentRef).toBe(W3A_BOUNDED_FIXTURE_AGENT_ID);
-    expect(ctx.oa.fixtureAdapter.launchCallCount).toBe(launchBefore);
+    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
+    expect(selected.selectedAgentRef).not.toBe(W3A_BOUNDED_FIXTURE_AGENT_ID);
   });

   it("high-risk push operationKind rejected before EC (R15)", async () => {
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 31c8ca8e..66f58bff 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -1345,7 +1345,13 @@ export function TrajectorySurface({

   const governedExecute = useCallback(async () => {
     if (continuityMutationBlocked) return;
-    if (!contract || authorization?.outcome !== "AUTHORIZED") return;
+    if (
+      !contract ||
+      authorization?.outcome !== "AUTHORIZED" ||
+      authorization.executionEligible !== true
+    ) {
+      return;
+    }
     setBusy("execute");
     setError(null);
     flushSync(() => {
@@ -2704,9 +2710,14 @@ export function TrajectorySurface({
             <span
               data-testid="w2-authorization-outcome"
               data-outcome={authorization.outcome}
+              data-execution-eligible={
+                authorization.executionEligible ? "true" : "false"
+              }
             >
               {authorization.outcome === "AUTHORIZED"
-                ? "Autorisation vérifiée — l'exécution peut être lancée"
+                ? authorization.executionEligible
+                  ? "Autorisation vérifiée — l'exécution peut être lancée"
+                  : "Autorisation vérifiée — exécution non proposée"
                 : "Exécution bloquée"}
             </span>
           </h3>
@@ -2743,6 +2754,14 @@ export function TrajectorySurface({
                   {authorization.outcomeLabel}
                 </dd>
               </div>
+              <div>
+                <dt>Éligibilité d&apos;exécution</dt>
+                <dd data-testid="w2-execution-eligibility">
+                  {authorization.executionEligible
+                    ? "éligible"
+                    : authorization.executionEligibilityReasonCode}
+                </dd>
+              </div>
               <div>
                 <dt>Trace d&apos;autorité</dt>
                 <dd className={styles.code} data-testid="w2-authority-receipt">
@@ -2751,7 +2770,9 @@ export function TrajectorySurface({
               </div>
             </dl>
           </details>
-          {authorization.outcome === "AUTHORIZED" && !attempt ? (
+          {authorization.outcome === "AUTHORIZED" &&
+          authorization.executionEligible &&
+          !attempt ? (
             <>
               <p
                 className={styles.stopNotice}
@@ -2773,6 +2794,17 @@ export function TrajectorySurface({
               </div>
             </>
           ) : null}
+          {authorization.outcome === "AUTHORIZED" &&
+          !authorization.executionEligible &&
+          !attempt ? (
+            <p
+              className={styles.stopNotice}
+              data-testid="w2-execution-ineligible"
+            >
+              Aucune exécution n&apos;est proposée pour ce contrat.{" "}
+              {authorization.nextAction}
+            </p>
+          ) : null}
           {authorization.outcome === "BLOCKED" ? (
             <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
               Aucune exécution n&apos;a été lancée : arrêt avant exécution.
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
index 74d0db97..4afffeda 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
@@ -35,6 +35,7 @@ import {
 } from "@/lib/oa/execution-attempt";
 import type { AgentRegistryPort } from "@/lib/oa/execution-attempt";
 import { readContractInspectionState } from "./inspectExecutionContract";
+import { resolveProductExecutionEligibility } from "./resolveProductExecutionEligibility";
 import type {
   AgentCapabilityOutcomeDto,
   ConfirmationRequirementDto,
@@ -379,26 +380,55 @@ export async function evaluateExecutionAuthorization(
         blockedDetail,
       });

+    const eligibility = resolveProductExecutionEligibility({
+      constraints: contract.constraints,
+      stopConditions: contract.stopConditions,
+      inputs:
+        contract.inputs && typeof contract.inputs === "object"
+          ? (contract.inputs as Record<string, unknown>)
+          : null,
+    });
+
     const text = blockedReason ? BLOCKED_TEXT[blockedReason] : null;
+    const authorizedEligible =
+      outcome === "AUTHORIZED" && eligibility.eligible;
+    const authorizedIneligible =
+      outcome === "AUTHORIZED" && !eligibility.eligible;
+
     return {
       ok: true,
       executionContractId: contract.executionContractId,
       contractVersion: contract.version,
       outcome,
       outcomeLabel:
-        outcome === "AUTHORIZED"
-          ? "AUTORISÉ — STOP AVANT EXECUTE"
-          : "BLOQUÉ — ACTION REQUISE",
+        outcome === "BLOCKED"
+          ? "BLOQUÉ — ACTION REQUISE"
+          : authorizedEligible
+            ? "AUTORISÉ — EXÉCUTION ÉLIGIBLE"
+            : authorizedIneligible
+              ? "AUTORISÉ — EXÉCUTION NON ÉLIGIBLE"
+              : "AUTORISÉ — STOP AVANT EXECUTE",
       reasonCode: blockedReason ?? "effective_authority_established",
       reasonText:
         text?.reasonText ??
-        "Autorité effective établie : décision, périmètre du contrat, inspection, confirmation requise et exécuteur suffisant.",
+        (authorizedIneligible
+          ? eligibility.reasonText
+          : authorizedEligible
+            ? eligibility.reasonText
+            : "Autorité effective établie : décision, périmètre du contrat, inspection, confirmation requise et exécuteur suffisant."),
       nextAction:
         text?.nextAction ??
-        "Aucune exécution n'est autorisée par ce cycle — arrêt avant Execute.",
+        (authorizedIneligible
+          ? eligibility.nextAction
+          : authorizedEligible
+            ? eligibility.nextAction
+            : "Aucune exécution n'est autorisée par ce cycle — arrêt avant Execute."),
       inspection,
       confirmation,
       agentCapability: capabilityDto(capability),
+      executionEligible: outcome === "AUTHORIZED" ? eligibility.eligible : false,
+      executionEligibilityReasonCode:
+        outcome === "AUTHORIZED" ? eligibility.reasonCode : "blocked",
       authorityReceiptRef: receipt.receiptId,
       decisionRefs: [...(contract.decisionRefs ?? [])],
       requiredAuthority: contract.requiredAuthority,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
index 37fd647d..f97e5499 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
@@ -202,8 +202,9 @@ function missionFromClarifyWithoutRecovery(
 }

 /**
- * Internal effect control from mission perimeter — NOT from trajectory option.
- * Non-mutating perimeter → weak reversible control suitable for Confirmation projection.
+ * Internal effect-control scaffold from mission perimeter — NOT a Product
+ * contract category. `operationKind: "read"` here is ActionPolicy taxonomy only;
+ * the durable EC surface is stamped as the generic Cursor quartet by the envelope.
  */
 function buildInternalWorkFromMissionPerimeter(input: {
   readonly projectId: string;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index 3a1295b6..dbb87ac6 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -5,10 +5,12 @@
  * Phase 2 (start): continue durable Attempt → running (no re-authorize on executing EC)
  * Phase 3 (record): continue running Attempt → technical terminal
  *
- * Dual Product orchestration (ONE state machine):
- * - Sandbox / fixture-safe EC → F3 fixture adapter (existing)
- * - Resolved M4 bounded docs-write EC → OA Select → Gate D → StartExecution
- *   with Fake or REAL launch port from composition (client real/adapter ignored)
+ * PJ-REPROOF-05 / Morris — Product orchestration:
+ * - Canonical PRODUCT_GOVERNED EC → generic Cursor REAL boundary + mechanical Gate D
+ * - Sealed historical M4 bounded docs-write EC → docs-write agent + Gate D (isolated GCEC)
+ * - Explicit FIXTURE_EXECUTOR_BOUNDARY_ONLY / historical F3-only → fixture adapter (test)
+ *
+ * Effects / ActionPolicy remain internal protections — not Product executor routing.
  */

 import { createHash } from "node:crypto";
@@ -31,6 +33,7 @@ import {
   M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
   M4_REAL_GATEWAY_ADAPTER_ID,
   resolveSelectionStrategy,
+  STUDIO_CURSOR_GENERALIST_AGENT_ID,
 } from "@/lib/oa/execution-attempt";
 import type { CycleProfile } from "@/lib/oa/cycle";
 import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
@@ -40,6 +43,7 @@ import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveA
 import { authorizedM3ResolutionKind } from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
 import { advanceProductExecutionContractAfterEvidence } from "./advanceProductExecutionContractAfterEvidence";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
+import { resolveProductExecutionEligibility } from "./resolveProductExecutionEligibility";
 import type {
   GovernedExecuteAuthorizedContractResult,
   GovernedExecuteAttemptProjection,
@@ -54,13 +58,40 @@ function mapCycleProfileToSelectionProfile(
   return "standard";
 }

+function isBoundedDocsWriteContract(contract: ExecutionContract): boolean {
+  return authorizedM3ResolutionKind(contract) === "bounded_docs_write";
+}
+
+/**
+ * Canonical Product EC: Nora/Studio-prepared PRODUCT_GOVERNED envelope.
+ * Not a sealed GCEC docs-write profile. Not an explicit fixture-only stamp.
+ */
+function isCanonicalProductGovernedContract(
+  contract: ExecutionContract,
+): boolean {
+  if (isBoundedDocsWriteContract(contract)) return false;
+  if (contract.constraints.includes("FIXTURE_EXECUTOR_BOUNDARY_ONLY")) {
+    return false;
+  }
+  return contract.constraints.includes("PRODUCT_GOVERNED");
+}
+
+/** Generic Cursor REAL launch boundary (Product or sealed docs-write). */
+function usesGenericCursorRealBoundary(contract: ExecutionContract): boolean {
+  return (
+    isBoundedDocsWriteContract(contract) ||
+    isCanonicalProductGovernedContract(contract)
+  );
+}
+
 /**
- * adapterId = contractual M4 gateway identity for docs-write ECs
+ * adapterId = contractual M4 gateway identity for Cursor REAL ECs
  * (Fake and REAL share M4_REAL_GATEWAY_ADAPTER_ID). Physical Fake vs REAL is
  * carried by boundaryProofMode / realExecution from deriveAttemptProvenance.
+ * Fixture adapter is historical / test-only when EC explicitly fixture-stamped.
  */
 function adapterIdForContract(contract: ExecutionContract): string {
-  return isBoundedDocsWriteContract(contract)
+  return usesGenericCursorRealBoundary(contract)
     ? M4_REAL_GATEWAY_ADAPTER_ID
     : F3_ADAPTER_ID;
 }
@@ -115,10 +146,6 @@ export type GovernedExecuteAuthorizedContractInput = {

 type Failure = GovernedExecuteAuthorizedContractResult;

-function isBoundedDocsWriteContract(contract: ExecutionContract): boolean {
-  return authorizedM3ResolutionKind(contract) === "bounded_docs_write";
-}
-
 function fixtureBoundaryFailure(oa: RuntimeOaStack): Failure | null {
   if (!oa.fixtureAdapter || !oa.executionAttemptServices) {
     return {
@@ -145,8 +172,11 @@ function fixtureBoundaryFailure(oa: RuntimeOaStack): Failure | null {
   return null;
 }

-/** Docs-write path: require composed launch boundary (Fake in tests / REAL when opted-in). */
-function docsWriteBoundaryFailure(oa: RuntimeOaStack): Failure | null {
+/**
+ * Generic Cursor REAL boundary (canonical Product + sealed docs-write).
+ * Mechanical Gate D / launchPort presence — not a Pilot-facing second decision.
+ */
+function cursorRealBoundaryFailure(oa: RuntimeOaStack): Failure | null {
   if (!oa.executionAttemptServices) {
     return {
       ok: false,
@@ -159,7 +189,7 @@ function docsWriteBoundaryFailure(oa: RuntimeOaStack): Failure | null {
       ok: false,
       code: "REAL_BOUNDARY_REQUIRED",
       message:
-        "Contrat bounded docs-write refusé — realBoundary absent (fail-closed, pas de fallback fixture).",
+        "Exécution Cursor refusée — realBoundary absent (fail-closed, pas de fallback fixture Product).",
     };
   }
   if (!oa.executionAttemptServices.grantRealExecutionGate) {
@@ -167,12 +197,33 @@ function docsWriteBoundaryFailure(oa: RuntimeOaStack): Failure | null {
       ok: false,
       code: "GATE_D_REQUIRED",
       message:
-        "Contrat bounded docs-write refusé — Gate D non disponible (fail-closed).",
+        "Exécution Cursor refusée — journal Gate D mécanique indisponible (fail-closed).",
     };
   }
   return null;
 }

+function executionBoundaryFailure(
+  oa: RuntimeOaStack,
+  contract: ExecutionContract,
+): Failure | null {
+  return usesGenericCursorRealBoundary(contract)
+    ? cursorRealBoundaryFailure(oa)
+    : fixtureBoundaryFailure(oa);
+}
+
+function launchCountBeforeFor(
+  oa: RuntimeOaStack,
+  contract: ExecutionContract,
+): number {
+  if (usesGenericCursorRealBoundary(contract)) {
+    return launchCallCountOf(
+      oa.executionAttemptServices!.realBoundary!.launchPort,
+    );
+  }
+  return oa.fixtureAdapter!.launchCallCount;
+}
+
 function launchCallCountOf(port: unknown): number {
   if (port && typeof port === "object") {
     if ("launchCallCount" in port) {
@@ -310,9 +361,8 @@ function buildTechnicalTerminal(input: {
   launchCountBefore: number;
   statusLabel?: string;
 }): GovernedExecuteAuthorizedContractResult {
-  const docsWrite = isBoundedDocsWriteContract(input.contract);
   const adapterId = adapterIdForContract(input.contract);
-  const launchCount = docsWrite
+  const launchCount = usesGenericCursorRealBoundary(input.contract)
     ? launchCallCountOf(
         input.oa.executionAttemptServices?.realBoundary?.launchPort,
       )
@@ -412,15 +462,13 @@ export async function governedExecuteSelectAgent(
   }
   const { contract, selectionProfile } = loaded;
   const docsWrite = isBoundedDocsWriteContract(contract);
-  const boundary = docsWrite
-    ? docsWriteBoundaryFailure(input.oa)
-    : fixtureBoundaryFailure(input.oa);
+  const productCursor = isCanonicalProductGovernedContract(contract);
+  const cursorReal = usesGenericCursorRealBoundary(contract);
+  const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;

   const adapterId = adapterIdForContract(contract);
-  const launchCountBefore = docsWrite
-    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
-    : input.oa.fixtureAdapter!.launchCallCount;
+  const launchCountBefore = launchCountBeforeFor(input.oa, contract);

   const succeeded = await findSucceededAttempt(
     input.oa,
@@ -459,6 +507,22 @@ export async function governedExecuteSelectAgent(
     };
   }

+  const eligibility = resolveProductExecutionEligibility({
+    constraints: contract.constraints,
+    stopConditions: contract.stopConditions,
+    inputs:
+      contract.inputs && typeof contract.inputs === "object"
+        ? (contract.inputs as Record<string, unknown>)
+        : null,
+  });
+  if (!eligibility.eligible) {
+    return {
+      ok: false,
+      code: "EXECUTION_INELIGIBLE",
+      message: eligibility.reasonText,
+    };
+  }
+
   const authority = registerPiloteAuthority(
     input.oa,
     contract.scope,
@@ -468,12 +532,12 @@ export async function governedExecuteSelectAgent(
     return { ok: false, code: authority.code, message: authority.message };
   }

-  // Docs-write shares F3 M4 selection: capabilities_deterministic + requested
-  // M4 agent (system-initiated). Cycle Critical must not invent a second
-  // agent-confirmation Product path for an already Confirmation-gated EC.
+  // Cursor REAL paths (canonical Product + sealed docs-write): mechanical
+  // capabilities_deterministic selection — no Pilot agent-selection HOW.
+  // Sealed docs-write still requests its specialized agent; Product uses generalist.
   let effectiveProfile: SelectionProfile = selectionProfile;
   let selectionStrategy: SelectionStrategy;
-  if (docsWrite) {
+  if (cursorReal) {
     effectiveProfile = "standard";
     selectionStrategy = "capabilities_deterministic";
   } else {
@@ -511,10 +575,12 @@ export async function governedExecuteSelectAgent(
       expectedContractVersion: contract.version,
       selectionProfile: effectiveProfile,
       selectionStrategy,
-      systemInitiated: docsWrite,
+      systemInitiated: cursorReal,
       ...(docsWrite
         ? { requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID }
-        : {}),
+        : productCursor
+          ? { requestedAgentRef: STUDIO_CURSOR_GENERALIST_AGENT_ID }
+          : {}),
     });
   if (!selected.ok) {
     return {
@@ -554,15 +620,13 @@ export async function governedExecuteStart(
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
   const docsWrite = isBoundedDocsWriteContract(contract);
-  const boundary = docsWrite
-    ? docsWriteBoundaryFailure(input.oa)
-    : fixtureBoundaryFailure(input.oa);
+  void docsWrite;
+  const cursorReal = usesGenericCursorRealBoundary(contract);
+  const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;

   const adapterId = adapterIdForContract(contract);
-  const launchCountBefore = docsWrite
-    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
-    : input.oa.fixtureAdapter!.launchCallCount;
+  const launchCountBefore = launchCountBeforeFor(input.oa, contract);

   const succeeded = await findSucceededAttempt(
     input.oa,
@@ -588,10 +652,12 @@ export async function governedExecuteStart(
     return { ok: false, code: authority.code, message: authority.message };
   }

-  if (!docsWrite) {
+  if (!cursorReal) {
     // R-W3B-04 — TEST-ONLY external adapter fail arm (never a product UI outcome).
     applyW3bAdapterFailArmIfPresent(input.oa.fixtureAdapter);
   } else {
+    // Mechanical Gate D launch-safety grant — bound to Attempt/EC/fingerprint.
+    // Not a Pilot-facing second Confirmation (docs-write + canonical Product).
     const grantId = `gd:w3a:${input.attemptId.replace(/^xat:/, "")}`;
     const nowMs = Date.parse(input.oa.clock.nowIso());
     const expiresAt = new Date(
@@ -652,7 +718,8 @@ export async function governedExecuteStart(
   }

   // R-W3B-03 — TEST-ONLY governed stop arm: FC-10 SystemGovernedStop (not human Cancel).
-  if (!docsWrite) {
+  // Fixture / historical paths only — Product Cursor REAL does not use fixture arms.
+  if (!cursorReal) {
     const stopArm = consumeW3bBoundaryArm();
     if (stopArm?.kind === "governed_stop") {
       const onContract =
@@ -717,15 +784,12 @@ export async function governedExecuteRecordResult(
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
   const docsWrite = isBoundedDocsWriteContract(contract);
-  const boundary = docsWrite
-    ? docsWriteBoundaryFailure(input.oa)
-    : fixtureBoundaryFailure(input.oa);
+  const productCursor = isCanonicalProductGovernedContract(contract);
+  const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;

   const adapterId = adapterIdForContract(contract);
-  const launchCountBefore = docsWrite
-    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
-    : input.oa.fixtureAdapter!.launchCallCount;
+  const launchCountBefore = launchCountBeforeFor(input.oa, contract);

   const succeeded = await findSucceededAttempt(
     input.oa,
@@ -842,6 +906,47 @@ export async function governedExecuteRecordResult(
     });
   }

+  // Canonical Product generic Cursor: Record waits for Cursor report / process
+  // observation — do NOT fall through to F3 fixture adapter.
+  if (productCursor) {
+    const existing =
+      await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
+        attemptId: input.attemptId,
+      });
+    if (!existing.ok || !existing.attempt) {
+      return {
+        ok: false,
+        code: existing.ok ? "ATTEMPT_NOT_FOUND" : existing.error.detailCode,
+        message: existing.ok
+          ? "Attempt introuvable pour completion Product Cursor."
+          : existing.error.message,
+      };
+    }
+    const attempt = existing.attempt;
+    if (
+      attempt.status === "succeeded" ||
+      attempt.status === "failed" ||
+      attempt.status === "timeout" ||
+      attempt.status === "cancelled"
+    ) {
+      return buildTechnicalTerminal({
+        contract,
+        attempt,
+        selectionProfile,
+        oa: input.oa,
+        reusedExistingAttempt: false,
+        launchCountBefore,
+      });
+    }
+    return {
+      ok: false,
+      code: "CURSOR_REPORT_PENDING",
+      message:
+        "Tentative Cursor générique en cours — le rapport d'exécution / Evidence n'est pas encore disponible (pas de fallback fixture).",
+      attempt: projectAttempt(attempt, adapterId),
+    };
+  }
+
   const identities = attemptIdentities(
     contract.executionContractId,
     contract.version,
@@ -936,17 +1041,10 @@ export async function governedExecuteCancel(
   const loaded = await loadContract(input.oa, input);
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
-  const docsWrite = isBoundedDocsWriteContract(contract);
-  const boundary = docsWrite
-    ? docsWriteBoundaryFailure(input.oa)
-    : fixtureBoundaryFailure(input.oa);
+  const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;

-  const launchCountBefore = docsWrite
-    ? launchCallCountOf(
-        input.oa.executionAttemptServices!.realBoundary!.launchPort,
-      )
-    : input.oa.fixtureAdapter!.launchCallCount;
+  const launchCountBefore = launchCountBeforeFor(input.oa, contract);

   registerPiloteAuthority(
     input.oa,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
index 9005e978..78a2c0f6 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
@@ -30,6 +30,10 @@ import { deriveActualExecutionWorkFromProductContext } from "./deriveActualExecu
 import { resolvePostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
 import type { ActualExecutionWork } from "./w3aActualExecutionWork";
 import type { QualifiedExecutionEffects } from "./w3aQualifiedExecutionEffects";
+import {
+  launchContextAsContractInputs,
+  resolveTrustedProductLaunchContext,
+} from "./resolveTrustedProductLaunchContext";

 export type PreparedExecutionContractDto = {
   readonly executionContractId: string;
@@ -155,6 +159,12 @@ export async function prepareExecutionContractFromW2Decision(input: {
   /** Same product path — optional Nora/test-injected qualified effects. */
   readonly explicitEffects?: QualifiedExecutionEffects;
   readonly forceEffectsUnresolved?: boolean;
+  /**
+   * Explicit server/test pin for trusted launch context (full SHA).
+   * Never accepted from browser Execute payloads. Never inferred from VITEST.
+   */
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
 }): Promise<PrepareExecutionContractFromW2DecisionResult> {
   const { oa } = input;

@@ -413,6 +423,29 @@ export async function prepareExecutionContractFromW2Decision(input: {
     return f3Guard;
   }

+  // PJ-REPROOF-05 — pin trusted launch context BEFORE Build/Validate fingerprint.
+  // Production: managed clone HEAD only (or explicit server pin when provided).
+  // Tests must pass pinnedBaseHeadSha / managedRepoRootBase explicitly — never
+  // inferred from process.env.VITEST.
+  const launch = await resolveTrustedProductLaunchContext({
+    oa,
+    projectId: input.projectId,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+  });
+  if (!launch.ok) {
+    return {
+      ok: false,
+      code: launch.code,
+      message: launch.message,
+    };
+  }
+  const envelopeInputs: Record<string, unknown> = {
+    ...envelope.inputs,
+    ...launchContextAsContractInputs(launch.context),
+    trustedLaunchContextPinnedAtPrepare: true,
+  };
+
   const safeId = safeIdSegment(decision.decisionId);
   const executionContractId = `xct:w3a:${safeId}`;
   const idempotencyKey = `idem:w3a-prep:${decision.decisionId}`;
@@ -439,7 +472,7 @@ export async function prepareExecutionContractFromW2Decision(input: {
       action: envelope.action,
       target: envelope.target,
       scope: envelope.scope,
-      inputs: envelope.inputs,
+      inputs: envelopeInputs,
       expectedOutputs: [...envelope.expectedOutputs],
       requiredCapabilities: [...envelope.requiredCapabilities],
       requiredAuthority: envelope.requiredAuthority,
@@ -499,7 +532,7 @@ export async function prepareExecutionContractFromW2Decision(input: {
       action: envelope.action,
       target: envelope.target,
       scope: envelope.scope,
-      inputs: envelope.inputs,
+      inputs: envelopeInputs,
       expectedOutputs: [...envelope.expectedOutputs],
       requiredCapabilities: [...envelope.requiredCapabilities],
       requiredAuthority: envelope.requiredAuthority,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index b3f7d826..fc079208 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -201,6 +201,8 @@ export type ExecutionAuthorizationOutcomeDto = {
   readonly outcome: "AUTHORIZED" | "BLOCKED";
   readonly outcomeLabel:
     | "AUTORISÉ — STOP AVANT EXECUTE"
+    | "AUTORISÉ — EXÉCUTION ÉLIGIBLE"
+    | "AUTORISÉ — EXÉCUTION NON ÉLIGIBLE"
     | "BLOQUÉ — ACTION REQUISE";
   readonly reasonCode: string;
   readonly reasonText: string;
@@ -208,6 +210,12 @@ export type ExecutionAuthorizationOutcomeDto = {
   readonly inspection: ContractInspectionStateDto;
   readonly confirmation: ConfirmationRequirementDto;
   readonly agentCapability: AgentCapabilityOutcomeDto;
+  /**
+   * PJ-REPROOF-05 — authority verified ≠ execution eligible.
+   * Execute CTA / Select / Start must consult this, not AUTHORIZED alone.
+   */
+  readonly executionEligible: boolean;
+  readonly executionEligibilityReasonCode: string;
   readonly authorityReceiptRef: string;
   readonly decisionRefs: readonly string[];
   readonly requiredAuthority: string;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
index 71d214c6..19fc642a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
@@ -292,15 +292,18 @@ export function projectConfirmationRequirementFromEffects(input: {
 /**
  * Coherent scope OUT for a canonical operation — never forbids the current
  * scope IN / action effect (R13).
+ *
+ * PJ-REPROOF-05: do NOT put REAL / CURSOR_REAL in SCOPE_OUT for Product
+ * read/simulate/temp missions. Those missions may use the generic Cursor
+ * REAL executor under read-only / non-mutating forbids. Writes and Git
+ * remain SCOPE_OUT.
  */
 function scopeOutForCanonicalKind(
   kind: W3ACanonicalActualOperationKind,
 ): readonly string[] {
-  const common = ["REAL", "CURSOR_REAL"] as const;
   switch (kind) {
     case "read":
       return [
-        ...common,
         "DURABLE_PROJECT_WRITE",
         "LOCAL_WRITE",
         "TEMPORARY_ARTIFACT_WRITE",
@@ -313,7 +316,6 @@ function scopeOutForCanonicalKind(
       ];
     case "simulate":
       return [
-        ...common,
         "DURABLE_PROJECT_WRITE",
         "COMMIT",
         "GIT_PUSH",
@@ -324,7 +326,6 @@ function scopeOutForCanonicalKind(
       ];
     case "generate-temporary-artifact":
       return [
-        ...common,
         "DURABLE_PROJECT_WRITE",
         "COMMIT",
         "GIT_PUSH",
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
index 601c2b69..ade56e2d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
@@ -35,11 +35,32 @@ import {
   projectRequiredAuthorityFromEffects,
   deriveReversibilityFromEffects,
 } from "./w3aQualifiedExecutionEffects";
+import { filterTrajectoryNonExecuteStopsFromEc } from "./resolveProductExecutionEligibility";
+import {
+  STUDIO_CURSOR_GENERALIST_ACTION,
+  STUDIO_CURSOR_GENERALIST_CAPABILITY,
+  STUDIO_CURSOR_GENERALIST_SCOPE,
+  STUDIO_CURSOR_GENERALIST_TARGET,
+} from "@/lib/oa/execution-attempt/infrastructure/studioCursorGeneralistAgent";

 /** Implementation / provenance marker — NOT authority-bearing scope. */
 export const W3A_IMPLEMENTATION_MARKER =
   "w3:governed-execute:studio-canonical" as const;

+/**
+ * PJ-REPROOF-05 / Morris — canonical Product EC surface is ONE generic
+ * Cursor execution quartet. Effect-class tokens (product:read, …) remain
+ * INTERNAL ActionPolicy facts in inputs/constraints — not EC routing types.
+ */
+export const PRODUCT_CANONICAL_EXECUTION_ACTION =
+  STUDIO_CURSOR_GENERALIST_ACTION;
+export const PRODUCT_CANONICAL_EXECUTION_TARGET =
+  STUDIO_CURSOR_GENERALIST_TARGET;
+export const PRODUCT_CANONICAL_EXECUTION_SCOPE =
+  STUDIO_CURSOR_GENERALIST_SCOPE;
+export const PRODUCT_CANONICAL_EXECUTION_CAPABILITY =
+  STUDIO_CURSOR_GENERALIST_CAPABILITY;
+
 export type W3AExecutionEnvelope = {
   readonly action: string;
   readonly scope: string;
@@ -66,6 +87,16 @@ export type EnvelopePrepareFailure =
       readonly message: string;
     };

+/**
+ * PJ-REPROOF-05 — truthful Product constraints (Morris generic EC).
+ *
+ * Do NOT stamp FIXTURE_EXECUTOR_BOUNDARY_ONLY / NO_REAL / NO_CURSOR_REAL on every
+ * Product EC. Do NOT stamp Product contract categories (read/write/fixture/REAL).
+ *
+ * Mutation / Git forbids remain SCOPE_OUT / PROTECTED from qualified effects
+ * (internal ActionPolicy). NO_ATTEMPT_AT_PREPARE only asserts prepare creates
+ * no Attempt.
+ */
 function productConstraints(
   basis: DecisionBasis,
   effects: QualifiedExecutionEffects,
@@ -74,9 +105,6 @@ function productConstraints(
   const eb = basis.executionBasis;
   return [
     "PRODUCT_GOVERNED",
-    "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
-    "NO_REAL",
-    "NO_CURSOR_REAL",
     "NO_ATTEMPT_AT_PREPARE",
     `IMPLEMENTATION_MARKER:${W3A_IMPLEMENTATION_MARKER}`,
     `EFFECT_CLASS:${effects.effectClass}`,
@@ -96,8 +124,13 @@ function productConstraints(

 function productStopConditions(basis: DecisionBasis): string[] {
   const eb = basis.executionBasis;
+  // Strip trajectory authorize-flow markers (AUCUNE EXÉCUTION / STOP AVANT EXECUTE)
+  // so a newly prepared executable EC is not fail-closed forever by provenance.
+  const fromBasis = filterTrajectoryNonExecuteStopsFromEc(
+    eb.stopConditions ?? [],
+  );
   const stops = new Set<string>([
-    ...(eb.stopConditions ?? []),
+    ...fromBasis,
     "AUTHORITY_DENIED",
     "CONTEXT_STALE",
     "DECISION_NOT_CURRENT",
@@ -298,10 +331,11 @@ export function deriveW3AExecutionEnvelope(input: {
   return {
     ok: true,
     envelope: {
-      action: effects.action,
-      target: effects.target,
-      scope: effects.scopeIn,
-      requiredCapabilities: [...effects.requiredCapabilities],
+      // Canonical Product EC surface = generic Cursor quartet (not effect-class routing).
+      action: PRODUCT_CANONICAL_EXECUTION_ACTION,
+      target: PRODUCT_CANONICAL_EXECUTION_TARGET,
+      scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
+      requiredCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
       requiredAuthority: authority.requiredAuthority,
       constraints: [
         ...productConstraints(input.basis, effects, confirmationConstraint),
@@ -331,6 +365,11 @@ export function deriveW3AExecutionEnvelope(input: {
         trajectoryOptionIntent: input.selectedOptionIntent,
         trajectoryOptionIsNotAction: true,
         trajectoryOptionIsNotScope: true,
+        // Internal ActionPolicy / effect-control facts (NOT Product EC categories).
+        internalEffectAction: effects.action,
+        internalEffectTarget: effects.target,
+        internalEffectScopeIn: effects.scopeIn,
+        internalEffectCapabilities: [...effects.requiredCapabilities],
         executionScope: effects.scopeIn,
         effectClass: effects.effectClass,
         rollbackAvailable: effects.rollbackAvailable,
```

## 17. Final verdict

**READY FOR MORRIS INTEGRATION GO — PJ-REPROOF-05 FINAL INTEGRATION READINESS PROVEN**

Meaning:
- delivery technically ready
- scoped lint regularized (exit 0)
- 131/131 + tsc + diff-check proven
- integration plan prepared

Does NOT mean:
- project committed / pushed
- PR created / mergeable / merged
- Product Journey resumed
- READY FOR REAL
- Runtime v3 ADOPTED
