# PJ-REPROOF-05 — MORRIS GO GIT INTEGRATION — FULL Review Pack

- **Timestamp:** 2026-09-22T22:53:18Z / 2026-09-23 00:53:18 CEST
- **Repo:** mcleland147/sfia-workspace (`/Users/morris/Projects/sfia-workspace`)
- **Branch:** `fix/sfia-studio-pj-reproof-05-execution-eligibility`
- **Commit (project):** `edb920e5fc118b16d520bcf3ac40faaaef4ed70b`
- **origin/main (unchanged):** `31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0`
- **Mode:** SAME PJ-REPROOF-05 — MORRIS GO GIT INTEGRATION (NO micro-cycle)
- **Prior readiness handoff:** `feb08acd78d731ded4cd27100ae3b8ec0aef211f` / blob `b6fba823e2ab349d19be5596a9ca52f13f21a7bb`
- **Morris GO consumed:** INTEGRATION GIT (stage + commit + push + PR) — **NOT merge**
- **Fake/Real:** DETERMINISTIC PROVEN — Product REAL Cursor = 0
- **Product Journey:** PAUSED
- **Runtime v3:** NON ADOPTED
- **Capacity:** V3-F05 + V3-F11/V3-F12

## 1. Local Git Truth — BEFORE mutation

```
pwd: /Users/morris/Projects/sfia-workspace
branch: fix/sfia-studio-pj-reproof-05-execution-eligibility
HEAD: 31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0
origin/main (after fetch): 31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0
upstream: none
staged: empty
diff --check: PASS
delivery dirty: intact (18 M + 4 ?? matching accepted readiness set)
```

**MAIN ADVANCED?** NO — proceed authorized.

## 2. Morris GO consumed / NO MICRO-CYCLE

- GO INTEGRATION GIT explicit — consumed for staging, single commit, push, PR, CI observation, pack+handoff
- NO PJ-REPROOF-05.1
- NO separate commit/push/PR/CI/handoff cycle
- NO merge / squash / rebase / force-push / amend / main edit / branch delete
- NO Product Journey REAL / SFIA_STUDIO_CURSOR_REAL
- NO opportunistic code fix after CI failure (Case C STOP)

## 3. Sources (blobs verified on HEAD base / main)

| Source | Blob |
|---|---|
| template | `948156a21309ef99c3aaed6410947dc6b9bc569a` |
| Build Doctrine | `99232e4582e4ef4cf489020a46b818ebb41ac397` |
| Roadmap | `df2ad6f3c4cd5504d586f344bc0d76f737b0ce65` |
| C1 | `806d672fe21ad82a641bf88fe95fc87870481105` |
| framing 34 | `0d81a3616d08e3c8d1b1d3e3ad982c1cc1cd077d` |
| framing 36 | `af4b6531beca99cb8c854a03ec36285c4e4e0c2e` |
| prior handoff | `feb08acd` / blob `b6fba823…` |

## 4. Staging — exact 21-file set

Command: explicit `git add -- <21 paths>` (NOT `git add .` / `-A`).

Assertions:
- staged count = **21**
- set MATCH expected list exactly
- `.tmp-sfia-review/chatgpt-review.md` NOT staged
- no DB / .env / secret / .sfia-exec / handoff / doctrine / roadmap / framing
- `git diff --cached --check` = PASS (exit 0)
- cached stat: **21 files changed, 1948 insertions(+), 111 deletions(-)**

Staged paths:
```
projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionEligibility.ts
projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts
projects/sfia-studio/app/features/project-assistant/w2/types.ts
projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts
projects/sfia-studio/app/lib/oa/execution-contract/index.ts
```

## 5. Commit projet

```
git commit -m "fix(studio): align Product execution eligibility with generic Cursor flow"
```

- **SHA:** `edb920e5fc118b16d520bcf3ac40faaaef4ed70b`
- **Message:** `fix(studio): align Product execution eligibility with generic Cursor flow`
- **Files:** exactly 21 (MATCH)
- **tmp excluded:** YES

### git show --stat --oneline HEAD
```
edb920e5 fix(studio): align Product execution eligibility with generic Cursor flow
 .../oa/execution-attempt/support/m4Fixtures.ts     |  24 +-
 .../postExecutionTrajectorySurface.ui.test.tsx     |   4 +-
 ...of04.executionContractSemanticBridge.d0.test.ts |   2 +
 .../pjReproof05.executionEligibility.d0.test.ts    | 927 +++++++++++++++++++++
 .../app/__tests__/project-assistant/w2Harness.ts   |  57 +-
 .../project-assistant/w3aGovernedExecute.test.ts   | 100 ++-
 .../surfaces/TrajectorySurface.tsx                 |  38 +-
 .../w2/authorizeExecutionContract.ts               |  40 +-
 .../deriveActualExecutionWorkFromProductContext.ts |   5 +-
 .../w2/governedExecuteAuthorizedContract.ts        | 200 +++--
 .../w2/prepareExecutionContractFromW2Decision.ts   |  37 +-
 .../w2/resolveProductExecutionEligibility.ts       |  17 +
 .../w2/resolveTrustedProductLaunchContext.ts       | 151 ++++
 .../app/features/project-assistant/w2/types.ts     |   8 +
 .../project-assistant/w2/w3aActualExecutionWork.ts |   9 +-
 .../w2/w3aProductExecutionSemantics.ts             |  55 +-
 .../oa/execution-attempt/application/grantGateD.ts |  10 +-
 .../application/selectExecutionAgent.ts            |  29 +
 .../application/startExecution.ts                  |  30 +
 .../domain/resolveProductExecutionEligibility.ts   | 303 +++++++
 .../app/lib/oa/execution-contract/index.ts         |  13 +
 21 files changed, 1948 insertions(+), 111 deletions(-)
```

### git show --name-status --format=fuller HEAD
```
commit edb920e5fc118b16d520bcf3ac40faaaef4ed70b
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Wed Sep 23 00:45:04 2026 +0200
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Wed Sep 23 00:45:04 2026 +0200

    fix(studio): align Product execution eligibility with generic Cursor flow

    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
M	projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
A	projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionEligibility.ts
A	projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts
M	projects/sfia-studio/app/features/project-assistant/w2/types.ts
M	projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
M	projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
A	projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/index.ts
```

### Working tree AFTER commit
```
 M .tmp-sfia-review/chatgpt-review.md
```
Only temporary review pack remains dirty (expected). No project file left unstaged/uncommitted.

## 6. Push projet

Pre-push re-fetch: `origin/main` still `31295c70…` → MAIN_OK.

```
git push -u origin HEAD
```

- PUSH_EXIT = 0
- LOCAL_HEAD = `edb920e5fc118b16d520bcf3ac40faaaef4ed70b`
- REMOTE_HEAD (`refs/heads/fix/sfia-studio-pj-reproof-05-execution-eligibility`) = `edb920e5fc118b16d520bcf3ac40faaaef4ed70b`
- LOCAL_EQ_REMOTE = **YES**
- force push = **NO**

## 7. Pull Request

Existing open PR for head: **none** → created.

- **PR number:** 511
- **URL:** https://github.com/mcleland147/sfia-workspace/pull/511
- **state:** OPEN
- **baseRefName:** main
- **headRefName:** fix/sfia-studio-pj-reproof-05-execution-eligibility
- **headRefOid:** `edb920e5fc118b16d520bcf3ac40faaaef4ed70b` (matches pushed commit)
- **title:** SFIA Studio — fix Product execution eligibility and preserve non-Product execution lanes
- **body:** conforms to Morris-approved template (Summary / Validation / Fake-Real / Out of scope / Governance)
- **body claims check:**
  - READY FOR REAL claim: **absent**
  - Runtime v3 ADOPTED claim: **absent**
  - Merge authorization: **explicitly denied** (“Merge is NOT authorized… distinct Morris merge decision”)
- **mergedAt:** null
- **mergeCommit:** null
- **mergeStateStatus:** BLOCKED

## 8. CI / Checks (same pass — Case C)

Workflow run: https://github.com/mcleland147/sfia-workspace/actions/runs/35794051559
headSha: `edb920e5fc118b16d520bcf3ac40faaaef4ed70b`

| Check | Conclusion | Notes |
|---|---|---|
| Detect SFIA Studio changes | **SUCCESS** | 7s |
| Build and validate SFIA Studio | **FAILURE** | step **Unit tests (Vitest)** failed; typecheck/lint/build succeeded |
| SFIA Studio Required Gate | **FAILURE** | aggregate fail because validate_result=failure |

Vitest CI summary:
- Test Files: **7 failed** | 390 passed | 17 skipped (414)
- Tests: **40 failed** | 4391 passed | 137 skipped (4568)

Failed suites (unique from CI log / local corroboration):
1. `__tests__/project-assistant/w3cPostEvidenceLoop.test.ts` — 12 fails (helper `authorizeTempArtifact` → `prepare…ok === false` at line 97)
2. `__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts` — 12 fails (same prepare path family)
3. `__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts` — 7 fails
4. `__tests__/project-assistant/w3bProductTerminal.test.ts` — 6 fails
5. `__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts` — 1 fail
6. `__tests__/vertical-slice-runtime/importBoundaries.test.ts` — 1 fail (allowlist missing 3 new imports from `resolveTrustedProductLaunchContext.ts`)
7. (seventh file counted in CI “7 failed”; correlated with the W3C/recovery family above)

### Causal diagnosis (evidence — NO FIX APPLIED)

**A. Trusted launch context now required at Prepare for Product W3-A path**

`prepareExecutionContractFromW2Decision.ts` now always calls `resolveTrustedProductLaunchContext(...)` and returns fail-closed when pin/managed clone unavailable. Historical suites that prepare temp-artifact / recovery Product ECs without `pinnedBaseHeadSha` / `managedRepoRootBase` now receive `prepared.ok === false` (observed locally on `w3cPostEvidenceLoop`).

This is a **causal regression surface of PJ-REPROOF-05** relative to the broader Vitest matrix (not covered by the 131-test readiness batch).

**B. Import boundary allowlist stale**

`importBoundaries.test.ts` expects exact Set of allowed `features→vertical-slice-runtime` edges. New module adds 3 edges:
- `resolveTrustedProductLaunchContext.ts:@/lib/vertical-slice-runtime`
- `…/managedRepoRootBaseConfig`
- `…/resolveBoundedReadOnlyBaseHeadSha`

### Contract Case C response

- CI failure observed and evidenced
- **NO automatic code fix**
- **NO opportunistic follow-up commit**
- **NO merge**
- STOP for Morris / ChatGPT review of next corrective step (still same delivery if Morris re-authorizes a CI-fix pass; not auto-created as micro-cycle here)

## 9. Fake / Real

- TestOnlyRealExecutionLaunchPort: used in prior deterministic proofs
- Product REAL Cursor launch this pass: **0**
- `SFIA_STUDIO_CURSOR_REAL`: unset
- DETERMINISTIC PROVEN ≠ READY FOR REAL
- Product Journey PAUSED
- Runtime v3 NON ADOPTED

## 10. Legacy Batch immutability

RO inspect after integration:
- EC `xct:w3a:dec:w2-trj:62b92385-7602-4d4f-b892-df9e2013c4a8`
- version **2**
- semanticFingerprint `ca296bb5609fb21edc19b75b64013a9020fef3097a81ee116a149c7ede20ccac`
- attempts **0**
- EC unchanged YES · attempts unchanged YES · no SQLite mutation

## 11. Remaining debt / next-step note (NOT executed)

Causal CI remediation candidates (require new Morris GO / analysis — not done here):
1. Extend historical Product prepare harnesses with explicit `pinnedBaseHeadSha` / managed root (same pattern already used by pjReproof05 / w2Harness) — without weakening Product fail-closed.
2. Update `importBoundaries` allowlist for the three new trusted-launch imports (mechanical).
3. Re-run full Studio Vitest / CI; only then reconsider merge GO.

Out-of-scope debt unchanged:
- historical product:* cleanup
- qualifiedOperationKind cleanup
- CURSOR_REPORT_PENDING / Record-report bridge
- Evidence REAL adapter
- Product Journey REAL reproof

## 12. Forbidden actions respected

- no merge / squash / rebase of PR
- no main modification
- no branch deletion
- no force push
- no amend after push
- no REAL Product Cursor
- no opportunistic CI fix commit
- handoff push only on `sfia/review-handoff` (L3)

## 13. Merge explicitly NOT performed

PR #511 remains OPEN / BLOCKED / unmerged.

## 14. Final verdict

**STOP — PJ-REPROOF-05 GIT INTEGRATION REQUIRES REVIEW — MERGE NOT AUTHORIZED**

Integration Git actions completed (commit `edb920e5fc118b16d520bcf3ac40faaaef4ed70b` pushed; PR #511 open), but required CI failed (40 tests / 7 files). No merge readiness claim.
