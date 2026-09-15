# CORR-PROOF-10 — PR Readiness Review Pack (FULL)

- timestamp: 2026-09-15T08:25:00Z
- cycle: 13 — PR readiness / remediation d’intégration / EVOL / Critical
- Morris GO consumed: remediation bornée des 2 gaps full-Vitest + commit/push/PR/CI/handoff IF green; MERGE NOT authorized
- repository: mcleland147/sfia-workspace
- worktree: /Users/morris/Projects/sfia-studio-corr-proof-10-decision-context-continuity
- branch: fix/sfia-studio-corr-proof-10-decision-context-continuity
- dogfood untouched: YES (`/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d`)

## Previous STOP recalled

Prior PR-readiness attempt STOPPED on full Vitest:

- 2 failed / 4026 passed / 137 skipped
- Failure A — UI mock drift (`trajectorySurface.ui.test.tsx` / `preCycleTrajectoryCta.ui.test.tsx`): missing `w2ReadActiveDecisionSubjectAction`; propose assertion lacked `proposalId: null`
- Failure B — importBoundaries allowlist missing three new W2 modules importing `@/lib/vertical-slice-runtime`
- Incoming handoff STOP pack: commit `37061a0982b7c67778ed153f032575b7b22182ca` / blob `f5257797263080d05a688b5c55ced8c311cceb8c`

Product candidate itself was already accepted as GIT INTEGRATION READY; this cycle remediates test-integration drift only.

## Git Truth

### Before remediation / integration

- HEAD == origin/main == `93ac1aea1af6b2094c158c5068bec1602d863ca7`
- staging empty
- dirty = CORR-PROOF-10 candidate + `.tmp-sfia-review/**` only
- base compatibility: YES

### After commit / push

- project commit: `18b767526e93202dc8df232fa1b6ca7837dd399d`
- message: `fix(sfia-studio): preserve proposal decision continuity`
- remote branch SHA == local HEAD == `18b76752…`
- origin/main still `93ac1aea…`
- dirty remaining: `.tmp-sfia-review/**` only (intentional)

## Gap qualification & remediation

### A — UI mock drift (ADAPT tests; Product KEPT)

Files:
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx`

Changes:
- added `w2ReadActiveDecisionSubjectAction` to `vi.mock("@/features/project-assistant/w2/actions")`
- dedicated `readActiveDecisionSubjectMock` default `{ ok: true, kind: "none" }`
- reset/configured in `beforeEach`
- assertion updated to exact contract:
  `proposeMock` called with `{ projectId: "prj:w2-ui", proposalId: null }`
- ZERO Product code modified for this remediation

### B — import boundary allowlist (ADAPT after positive qualification)

Inspected imports of:
- `activeProposalDecisionSubject.ts`
- `pendingDecisionSubjectMarker.ts`
- `resolveProposalDecisionSubject.ts`

Qualification:
1. import only `RuntimeOaStack` type from `@/lib/vertical-slice-runtime` — YES (OA seam necessary)
2. coherent with already-allowed W2 modules (`decideTrajectory`, `presentedOptionSet`, `proposeTrajectoryOptions`, `actions`, `prepareExecutionContractFromW2Decision`, `qualificationInputs`) — YES
3. no forbidden UI/runtime parallel path — NO violation
4. no narrower local seam without structural refactor — none evident

Added EXACTLY three allowlist entries in `importBoundaries.test.ts`:
- `features/project-assistant/w2/activeProposalDecisionSubject.ts:@/lib/vertical-slice-runtime`
- `features/project-assistant/w2/pendingDecisionSubjectMarker.ts:@/lib/vertical-slice-runtime`
- `features/project-assistant/w2/resolveProposalDecisionSubject.ts:@/lib/vertical-slice-runtime`

No wildcard / no rule weakening / no Product refactor.

## Files committed (25)

Product / tests CORR-PROOF-10 + remediation:

- `__tests__/auth/auth-real-boundary-session.test.ts`
- `__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx` *(remediation)*
- `__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx` *(remediation)*
- `__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts` *(new)*
- `__tests__/project-assistant/w2EabcDelivery.test.ts`
- `__tests__/project-assistant/w2TrackDPhaseB.test.ts`
- `__tests__/project-assistant/w3aGovernedExecute.test.ts`
- `__tests__/project-assistant/w3bProductTerminal.test.ts`
- `__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts`
- `__tests__/project-assistant/w3cPostEvidenceLoop.test.ts`
- `__tests__/vertical-slice-runtime/importBoundaries.test.ts` *(remediation)*
- `features/pre-m6-product-ui/ProjectWorkspacePage.tsx`
- `features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
- `features/project-assistant/f2/orchestrateF2.ts`
- `features/project-assistant/f2/proposalStore.ts`
- `features/project-assistant/w2/actions.ts`
- `features/project-assistant/w2/activeProposalDecisionSubject.ts` *(new)*
- `features/project-assistant/w2/decideTrajectory.ts`
- `features/project-assistant/w2/pendingDecisionSubjectMarker.ts` *(new)*
- `features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts`
- `features/project-assistant/w2/presentedOptionSet.ts`
- `features/project-assistant/w2/proposalSubjectOptions.ts` *(new)*
- `features/project-assistant/w2/proposeTrajectoryOptions.ts`
- `features/project-assistant/w2/resolveProposalDecisionSubject.ts` *(new)*
- `features/project-assistant/w2/types.ts`

Diffstat commit: 25 files, +4574 / −292

## Files explicitly excluded

- `.tmp-sfia-review/chatgpt-review.md`
- `.tmp-sfia-review/corr-proof-10-full-diff.txt`
- any dogfood DB/session/sandbox
- doctrine / roadmap / C1
- CI config
- migrations

## Local validations

### Isolated remediation

- `trajectorySurface.ui.test.tsx`: 5 PASS
- `preCycleTrajectoryCta.ui.test.tsx`: 3 PASS
- `importBoundaries.test.ts`: 5 PASS
- unhandled rejections: NONE

### CORR / Track suites

- CORR-PROOF-10: **45 PASS**
- CORR-PROOF-07: **32 PASS**
- CORR-PROOF-09: **15 PASS**
- W2 Track A: **22 PASS** (`w2EabcDelivery` filter `-t "W2 Track A"`; file total 39 with other tracks)

### Tooling

- typecheck: PASS
- lint: PASS
- build: PASS
- git diff --check: PASS

### Full Vitest (blocking gate) — GREEN

Command: `npm test` in `projects/sfia-studio/app`

- Test Files: **362 passed | 17 skipped (379)**
- Tests: **4028 passed | 137 skipped (4165)**
- failed: **0**
- unhandled errors: **0**
- Duration: ~39.41s

Fake/Real: DETERMINISTIC ONLY — ZERO OpenAI LIVE — ZERO Cursor REAL — ZERO dogfood mutation — runtime v3 NON ADOPTED.

## PR

- number: **486**
- URL: https://github.com/mcleland147/sfia-workspace/pull/486
- base: `main` @ `93ac1aea1af6b2094c158c5068bec1602d863ca7`
- head: `fix/sfia-studio-corr-proof-10-decision-context-continuity` @ `18b767526e93202dc8df232fa1b6ca7837dd399d`
- state: OPEN / MERGEABLE
- remote file list == local `origin/main...HEAD` file list: YES
- forbidden paths in PR: NONE

## CI

- workflow: SFIA Studio CI
- run ID: **34946365399**
- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/34946365399
- headSha: `18b767526e93202dc8df232fa1b6ca7837dd399d`
- conclusion: **success**

Jobs:
| Job | ID | Conclusion |
|---|---|---|
| Detect SFIA Studio changes | 104306615655 | success |
| Build and validate SFIA Studio | 104306661554 | success |
| SFIA Studio Required Gate | 104307906330 | success |

Build and validate steps (all success): Typecheck, Lint, Build, Unit tests (Vitest), Modeled governance tests, Secret pattern scan, Trailing whitespace check.

**Required Gate: PASS**

## Product invariants retained (accepted candidate)

- Proposal decision ≠ ProjectTrajectory
- ZERO artificial ProjectTrajectory in Proposal mode
- Proposal → PresentedOptionSet → HD → DecisionBasis → EC lineage
- same durable PresentedOptionSet after restart
- DecisionRef authoritative over stale auxiliary pending marker
- HD + LPS + Proposal DecisionRef atomic in Product UoW
- second HD blocked (`SUBJECT_ALREADY_DECIDED`)
- Epistemic uncertainty fail-closed
- true ProjectTrajectory W2 path unchanged when no Proposal subject

## Reserves / debt / exit

- physical stale pending markers may remain but are functionally shadowed by DecisionRef
- housekeeping of stale markers non-blocking / not opened here
- historical true-trajectory DecisionRef post-commit behavior outside CORR-PROOF-10 scope
- exit: STOP for ChatGPT Critical Review; merge requires distinct Morris GO after review + CI (CI already green)

## Actions NOT performed (forbidden)

- merge / squash / rebase merge / auto-merge
- force push / history rewrite
- branch deletion
- post-merge
- REAL / LIVE provider
- dogfood mutation / reproof
- Product code change for test satisfaction
- architecture refactor beyond allowlist entries

## Verdict

CORR-PROOF-10 — PR OPEN + CI GREEN — READY FOR CHATGPT CRITICAL REVIEW — MERGE NOT AUTHORIZED
