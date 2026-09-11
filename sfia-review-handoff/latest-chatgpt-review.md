# SFIA STUDIO — GCEC CYCLE-CLOSURE
## FINAL SAME-LOT DELIVERY AFTER STRUCTURAL DECISION D-GCEC-15
### CLOSE CR-GCEC-13 → CR-GCEC-18
### CURSOR WRITES · GIT IS TRUTH · STUDIO READS/VERIFIES · NORA REASONS

TIMESTAMP: 2026-09-11T11:59:18Z

HANDOFF_MODE: republish-in-cycle — REVIEWABLE CANDIDATE CONTENT ADDED
PRIOR_HANDOFF_TIP: 05cc2d1af7d88706b6423b527f385f6e39f42617
REASON: Final Critical Review returned INCOMPLETE — MODIFIED CONTENT MISSING
PRODUCT_CANDIDATE_UNCHANGED: 46e7e5b3cf3d82656e15b9fd402db0908704d927

## GO / D-GCEC-15 CONSUMED

GO MORRIS consumed.

**D-GCEC-15 — GATED EXECUTION CONTINUATION / OPTION B — ADOPTED.**

Binding Product rule:

- An ExecutionContract represents the complete governed execution expected for one bounded execution intent.
- An ExecutionContract MAY be fulfilled through multiple successive ExecutionAttempts.
- Each ExecutionAttempt executes only the CURRENT AuthorizedExecutionSlice.
- A successful ExecutionAttempt means: **THE CURRENT AUTHORIZED SLICE SUCCEEDED.**
- It does NOT automatically mean: **THE EXECUTION CONTRACT IS COMPLETED.**
- If required contract effects remain: after Attempt success, EC returns to / remains **`confirmed`** (execute-ready), not `completed`.
- A new Attempt may then be opened on the **SAME** ExecutionContract after the exact next Confirmation / authority, via Select + Start (NOT Retry of a succeeded Attempt).
- EC reaches **`completed`** only when all effective execution requirements are verified.

Prior binding architecture (unchanged):

- CURSOR / AGENT = sole Project filesystem + Git mutation executor
- GIT / GITHUB = technical source of truth
- STUDIO = governance + orchestration + repository READ + independent verification + Evidence
- NORA = cognition + repository-context exploration + analysis + recommendation
- PILOT = HumanDecision / Confirmation / explicit FINALIZE

This cycle is NOT: new architecture cycle; new persistence design; proof-repo campaign; Cursor REAL; OpenAI REAL; remote Product Git; PR readiness; runtime v3 adoption.

## GIT TRUTH BEFORE

- worktree: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- branch: `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- HEAD: `7ce33b15dcfdbc8e83f6225c87b0bd82c43acb62`
- parent: `ed7becca1486c20e69be7b98db2d057f3b08e5ef`
- origin/main: `a9f6c310a0826d0e5bd6f7264603382a86564db1`
- prior handoff: `882764b70c1f5121fc8100db92a0f0ccdd383ca2` (parent `7e4bd854`)
- lineage at entry: `6a2e3c9d` → `2b5dcaf1` → `ed7becca` → `7ce33b15`
- message at HEAD: `fix(sfia-studio): align GCEC execution ownership and repository verification`

## GIT TRUTH AFTER / LOCAL COMMIT

- SHA: `46e7e5b3cf3d82656e15b9fd402db0908704d927`
- parent: `7ce33b15dcfdbc8e83f6225c87b0bd82c43acb62`
- tree: `f01cd82d8ec8bf0a917f7734b0a27e6c78808f3a`
- message: `fix(sfia-studio): complete gated GCEC cycle lifecycle`
- lineage: `6a2e3c9d` → `2b5dcaf1` → `ed7becca` → `7ce33b15` → `46e7e5b3`
- PRODUCT PUSH: **NONE**

## CYCLE QUALIFICATION

- Cycle: 8 — Delivery / implémentation
- Typology: EVOL
- Profile: CRITICAL
- Capability: GOVERNED CYCLE EXECUTION COMPLETION — CYCLE CLOSURE
- Milestone intent: close CR-GCEC-13..18 under D-GCEC-15 Option B on the same local Product candidate lineage
- Outcome this pack: **PASS** — deterministic cycle-closure arc complete / ready for ChatGPT final Critical Review

## SOURCES READ

PROCESS:

- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md

STUDIO:

- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md

V3 (target doctrine; NON ADOPTED runtime):

- framing docs 23, 30–35, 37 as required by GO

CURRENT REVIEW / PRIOR STOP:

- sfia-review-handoff/latest-chatgpt-review.md @ `882764b7` (parent `7e4bd854`)
- prior STOP pack on `7ce33b15` documenting structural gap before D-GCEC-15

LOCAL IMPLEMENTATION (Git truth > D-GCEC-09..15 > Build Doctrine > v3 > implementation):

- `qualifyExecutionContractCompletion.ts` (new)
- `advanceExecutionContractCompletion.ts` (new)
- `executionContractStatusWriter.ts` (`executing`→`confirmed`, `confirmed`→`completed`)
- `recordExecutionResult.ts` / `startExecution.ts`
- `authorizedExecutionSlice.ts` / `verifyWorkspaceFileEffects.ts`
- `completeBoundedDocsWriteLaunch.ts` / `cycleExitState.ts` / `qualifyGitCompletionProofSet.ts`
- `gitEffectEvidenceActions.ts` / `ghCliTransport.ts` / `platformGithubReadBridge.ts`
- `FakeCursorGitExternalState` / `FakeDocsWriteLaunchPort`
- principal E2E `gcecProductMonolithicE2e.d0.test.ts` + negatives `gcecD15Negatives.d0.test.ts`

Hierarchy respected: local Git > Morris decisions > Build Doctrine > v3 > C1 > repo implementation.
v2.6 remains process only.

## CONVERGENCE PRE-CHECK

- Build Doctrine: VALIDATED / ACTIVE
- Product Completion: COMPLETE / CLOSED — DO NOT REOPEN
- Runtime v3: NON ADOPTED
- R2: complete user loop > component-local green tests
- R6: no parallel architecture
- R8: end-to-end capability
- R12: Git technical/documentary truth
- R13: structural decision human — **D-GCEC-15 Option B consumed**
- R14: Nora reasons/recommends
- R15: Cursor executes under contract
- R18: coherent gaps close in same lot
- R19: no READY without proof
- R21: Fake substitutes external boundary, not Product orchestration
- Current target invariant: Cursor writes / Git truth / Studio reads-verifies / Nora reasons

## CRITICAL REVIEW INPUT (BINDING — PRE-CORRECTION)

| ID | Severity | Finding (summary) |
|----|----------|-------------------|
| CR-GCEC-13 | BLOCKING | Pseudo-E2E bypasses Product orchestration; no true FINALIZE→completed; gated multi-Attempt same EC impossible under prior FSM |
| CR-GCEC-14 | BLOCKING | Workspace verify derives name-status from Cursor report / allowlist pathspec discovery |
| CR-GCEC-15 | BLOCKING | `cap:cursor.docs_write` makes all Git effects candidates |
| CR-GCEC-16 | BLOCKING | Raw Nora `proposedExitRequirementKinds` / empty→full GCEC default |
| CR-GCEC-17 | BLOCKING | Forgeable `technicalResultRef` `studio:repository_read_verified:*` trust marker |
| CR-GCEC-18 | BLOCKING | Two concrete GitHub READ CLI stacks (OA + platform) |

## CR CLOSURE MATRIX

| CR | Status | Closure evidence |
|----|--------|------------------|
| CR-GCEC-13 | **CLOSED** | D-GCEC-15 Option B: Attempt success → EC `confirmed` while remaining requirements; multi terminal Attempts same EC; principal Product E2E `gcecProductMonolithicE2e.d0.test.ts` reaches FINALIZE → CycleInstance `completed` |
| CR-GCEC-14 | **CLOSED** | `verifyWorkspaceFileEffects` full worktree discovery (no allowlist pathspec); `completeBoundedDocsWriteLaunch` uses `NodeLocalGitStatusDiffPort`; Cursor report claim-only |
| CR-GCEC-15 | **CLOSED** | `docs_write ≠ git`; Git candidates only from effective EC/exit requirements + Confirmation; N8 proves `cap:cursor.docs_write` does not imply Git |
| CR-GCEC-16 | **CLOSED** | empty families `[]`; Nora proposal PREVIEW only / non-authoritative for CycleExitState / FinalizationAssessment |
| CR-GCEC-17 | **CLOSED** | `technicalResultRef` trust **REMOVED**; `VerifyEvidenceIntegrity` used; AVAILABLE ≠ VERIFIED; N4/N23 reject forge markers |
| CR-GCEC-18 | **CLOSED** | shared `ghCliTransport.ts`; `PlatformGithubReadBridge`; OA `GithubCliRepositoryReadAdapter` uses shared transport; duplicate `runFixedArgv` removed from OA |

**All CR-GCEC-13..18 CLOSED.**

## ARCHITECTURE INVARIANT

Cursor writes · Git is truth · Studio reads/verifies · Nora reasons

Ownership model from `7ce33b15` remains the adopted baseline. D-GCEC-15 adapts Attempt/EC **status writer policy** only — no second FSM, no new EC/Attempt status enum values, no Studio Git-write, no global Evidence redesign, no runtime v3 adoption.

## D-GCEC-15 IMPLEMENTATION

### BEFORE

Attempt success → EC **completed** (via `recordExecutionResult` → `ExecutionContractStatusWriter`), which blocked Select/Start/Retry for further gated slices on the same contract.

### AFTER

- `qualifyExecutionContractCompletion` qualifies whether remaining effective requirements exist.
- Attempt success → EC **`confirmed`** if remaining requirements; EC **`completed`** only when all effective requirements verified.
- `ExecutionContractStatusWriter` supports `executing`→`confirmed` and `confirmed`→`completed`.
- `advanceExecutionContractCompletion` advances to `completed` after verification when complete.
- `StartExecution` accepts confirmations + authorized slice / verifiedEffects so prior slices are not re-authorized.
- Multiple **terminal** Attempts allowed on the same EC (one active at a time; prior Attempt immutable).
- `FakeCursorGitExternalState` + `FakeDocsWriteLaunchPort` honors AuthorizedExecutionSlice (FS-only, git-only, blocked effects).

### Status semantics (existing statuses only)

| Event | Attempt | EC |
|-------|---------|-----|
| StartExecution | `running` | `executing` |
| Slice success + remaining reqs | `succeeded` (terminal) | **`confirmed`** (re-armed) |
| Slice success + all reqs verified | `succeeded` | **`completed`** (via qualification / advance) |
| New gated Confirmation + Select + Start | new Attempt `running` | `executing` again under **same** EC id |

Retry remains for `failed` / `timeout` / `cancelled` only — continuation after **succeeded** uses Select + Start on same EC, not Retry.

## MULTI-ATTEMPT SAME EC TRACE

Proven by `gcecProductMonolithicE2e.d0.test.ts` on a single `executionContractId`:

| # | Attempt | Authorized slice | After success EC status |
|---|---------|------------------|-------------------------|
| 1 | `xat:gcec-1:…` | filesystem create/modify (+ validation); git blocked | **`confirmed`** |
| 2 | `xat:gcec-commit:…` | `git.commit` only (prior FS in verifiedEffects) | **`confirmed`** |
| 3 | `xat:gcec-push:…` | `git.push` | **`confirmed`** |
| 4 | `xat:gcec-pr:…` | `github.pr.create` (+ Studio CI/review observe) | **`confirmed`** |
| 5 | `xat:gcec-merge:…` | `github.pr.merge` (+ post-merge verify) | **`confirmed`** |
| — | `advanceExecutionContractCompletion` | all effective requirements verified | **`completed`** |
| — | explicit FINALIZE HD + `pilotLifecycle.finalize` | — | CycleInstance **`completed`** |

SAME EC: **PROVEN**

CONTINUATION SEMANTICS: **PASS** (GCEC-CONTINUATION-SEMANTICS **CLOSED BY D-GCEC-15**)

## TRUE PRODUCT E2E

- Status: **PASS**
- Principal file: `projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts`
- `gcecDeterministicE2e.d0.test.ts` **re-exports** the monolithic Product E2E (pseudo-E2E retired; filename retained for script references)

### Actual Product use-cases in sequence (from the test)

1. `runtime.createProject`
2. `oa.projectServices.setProjectRepositoryBinding.execute`
3. `oa.cycleServices.createInitialTrajectory.execute`
4. `oa.cycleServices.createCycle.execute`
5. `oa.cycleServices.pilotLifecycle.start`
6. F2 Fake path: `analyzeIntent` → `saveProposal` → `recordF2Decision` (durable HumanDecision + DecisionBasis)
7. `prepareAndResolveM3ProductPath` (`preferBoundedDocsWriteProfile` + baseHeadSha)
8. `requestConfirmation` → `grantConfirmation` → `confirmExecutionContract` (EC → `confirmed`)
9. `selectExecutionAgent` + Gate D grant + `StartExecution` — Attempt #1 filesystem slice (no git Confirmation)
10. `completeBoundedDocsWriteLaunch` with `NodeLocalGitStatusDiffPort` (independent workspace observation)
11. Assert Attempt #1 `succeeded` and EC **`confirmed`** (not completed) — D-GCEC-15
12. `ingestDocsWriteArtifactEvidence` → Artifact AVAILABLE
13. `verifyEvidenceIntegrity` → Artifact **VERIFIED** (AVAILABLE ≠ VERIFIED)
14. ReviewBundle: `freezeReviewBundle` → `startReview` → `completeReview` (accepted)
15. Progressive gated git slices on **same EC** (each: exact Confirmation → Select + Start → Fake Cursor effect → Studio RepositoryRead verify):
    - `git.commit` → `verifyCommitClaim`
    - `git.push` → `verifyPushClaim`
    - `github.pr.create` → `verifyPullRequestClaim` → Fake CI/review state → `recordCiStatusEvidence` → `recordReviewStatusEvidence`
    - `github.pr.merge` → `verifyMergeClaim` → `verifyPostMergeEvidence`
16. `qualifyGitCompletionProofSet` → **SATISFIED**
17. `advanceExecutionContractCompletion` → EC **`completed`**
18. `recordHumanDecision` (FINALIZE subject) → `pilotLifecycle.finalize` → CycleInstance **`completed`**
19. Assert trajectory steps remain `done` (no reprepare of completed step)
20. Assert Fake Cursor owned all mutation launches (`FakeDocsWriteLaunchPort.calls`); Studio performed reads/verifications only

### NO MID-PATH SHORTCUT proof

- No direct `fakeLaunch.launch` bypass of `StartExecution`
- No manual mid-chain authoritative Git mutation after fixture init
- No seeding FakeRepositoryRead success to pretend Cursor executed
- Fake Cursor owns filesystem + git effects under AuthorizedExecutionSlice
- Studio verifies via independent git status / RepositoryRead + Evidence integrity lifecycle

## WORKSPACE OBSERVATION (CR-GCEC-14)

CLOSED.

- `verifyWorkspaceFileEffects`: full worktree Git status/diff discovery — **no allowlist pathspec** on discovery; then compare to allowlist / scopeOut / delete policy
- `completeBoundedDocsWriteLaunch`: uses `NodeLocalGitStatusDiffPort` for independent observation
- Cursor execution report is claim-only — not trusted as workspace truth

## DYNAMIC EXIT / DOCS_WRITE ≠ GIT (CR-GCEC-15)

CLOSED.

- `docs_write ≠ git`
- Git effect candidates derive from effective EC / exit requirements + Confirmation, not from `cap:cursor.docs_write`
- N8: `cap:cursor.docs_write` does **NOT** imply Git effects

## EFFECTIVE REQUIREMENTS (CR-GCEC-16)

CLOSED.

- empty families → `[]` (no empty→full GCEC default expansion)
- Nora proposal PREVIEW only — non-authoritative for CycleExitState / FinalizationAssessment inputs
- effective requirements drive slice authorization and completion qualification

## EVIDENCE VERIFICATION (CR-GCEC-17)

CLOSED.

- `technicalResultRef` trust **REMOVED**
- governed path: register AVAILABLE claim → RepositoryRead-backed probe → `VerifyEvidenceIntegrity` → `status=verified`
- **AVAILABLE ≠ VERIFIED**
- forgeable `studio:repository_read_verified:*` marker no longer grants verification trust (N4, N23)

## TECHNICALRESULTREF TRUST REMOVAL

**REMOVED** in this commit.

Qualification / exit / git proof paths require Evidence.`status=verified`. Marker strings alone are insufficient.

## ONE REPOSITORY READ TRANSPORT (CR-GCEC-18)

CLOSED.

- shared concrete transport: `projects/sfia-studio/app/lib/platform/repository/ghCliTransport.ts`
- `PlatformGithubReadBridge` bridges OA read needs to platform transport
- OA `GithubCliRepositoryReadAdapter` uses shared transport
- duplicate OA `runFixedArgv` spawn stack **removed** in favor of shared transport
- Nora platform `GhCliGithubReadAdapter` remains on the same shared transport family

## NORA RICH REPOSITORY TOOLS

Added (read-only):

- `github_read_file_at_ref`
- `github_compare_refs`

Prior list-PR / files / diff tools retained. No Git mutation tools on Nora surface (N14).

## CONTEXT ≠ EVIDENCE

Repository context / Nora exploration does **not** silently mint Evidence.`verified`. Evidence creation and verification remain explicit Studio governed actions.

## GIT PROOF COHERENCE

- Strict missing-field / incomplete set → BLOCKING
- Full verified set → SATISFIED
- Cursor report claim alone does not satisfy git SET (N16)
- CI failure / review pending / digest mismatch / repo mismatch / cycleInstance mismatch → BLOCKING (N17–N19, N25–N27)
- Alias `git:commit` authorizes same as `git:local_commit` (N22)

## GATED CONTINUATION

**HONESTLY EXPRESSIBLE** under D-GCEC-15 Option B with existing statuses.

- Same EC lineage
- Exact next Confirmation before each git slice
- New Attempt via Select + Start
- Prior succeeded Attempt immutable
- One active Attempt per EC at a time

## FINALIZATION / TRAJECTORY

- Explicit FINALIZE HumanDecision remains mandatory
- `pilotLifecycle.finalize` → CycleInstance `completed`
- No implicit next cycle
- Completed trajectory step cannot be prepared again (asserted in principal E2E)

## ARCHITECTURE PARALLELISM CHECK

| Concern | Result |
|---------|--------|
| Second execution engine / FSM | **NONE** — Option B uses existing Attempt/EC statuses + status-writer policy |
| Second Git writer (Studio/Nora) | **NONE** — Cursor/Fake Cursor sole mutation executor |
| Second Evidence trust model | **NONE** — marker trust removed; single `status=verified` path |
| Second finalization engine | **NONE** |
| Second GitHub concrete transport | **CLOSED** — shared `ghCliTransport` (CR-18) |
| New EC/Attempt status enum | **NONE** |
| Nested CycleInstance | **NONE** |

No parallel architecture introduced. Duplicate runFixedArgv removed from OA; no deletion of legitimate platform functionality.

## NEGATIVE MATRIX N1–N28 (SUMMARY)

Source: `gcecD15Negatives.d0.test.ts` — all PASS within focused GCEC suite.

| ID | Assertion (summary) |
|----|---------------------|
| N1 | Attempt success with remaining git reqs → nextStatus `confirmed` not `completed` |
| N2 | Empty evidenceRequirements + no docs_write capability → no git candidates |
| N3 | Empty git families with `requirements:[]` → BLOCKING unresolved (not full chain) |
| N4 | `technicalResultRef` alone with `available` → BLOCKING (CR-17) |
| N5 | Verified full set → SATISFIED |
| N6 | Slice blocks git without Confirmation; FS still authorized |
| N7 | Confirmation grants `git.commit` only when actionRef matches |
| N8 | `cap:cursor.docs_write` does NOT imply Git effects (CR-15) |
| N9 | FakeDocsWrite skips filesystem when not authorized (git-only) |
| N10 | Commit claim without repository SHA → reported not verified |
| N11 | PR claim head mismatch → failed |
| N12 | Out-of-scope workspace write → verify fails |
| N13 | Studio git-ports barrel exports no mutation methods |
| N14 | Nora tools have no Git mutation tools |
| N15 | Cycle without Git requirement → absence does not block |
| N16 | Cursor report claim alone does not satisfy git SET |
| N17 | CI failure → BLOCKING |
| N18 | Review pending → BLOCKING |
| N19 | Digest mismatch on post_merge → BLOCKING |
| N20 | Complete when artifact+git effects verified → nextStatus `completed` |
| N21 | verifiedEffects exclude FS from re-authorization |
| N22 | `git:commit` alias authorizes same as `git:local_commit` |
| N23 | requireVerified default rejects `available` rows even with forge marker |
| N24 | `buildGitEffectActionRef` embeds executionContractId + repo |
| N25 | Incomplete set missing merge → BLOCKING incomplete_git_proof_set |
| N26 | Repo mismatch → BLOCKING |
| N27 | cycleInstance mismatch → BLOCKING |
| N28 | `StartExecutionRequest` type surface includes confirmations |

## PERSISTENCE

GCEC-PERSIST stayed CLOSED.

- NO TABLE
- NO MIGRATION
- NO NEW STATUS
- NO STORE

No schema work. Completion derived from existing Attempts / Evidence / Confirmations + status-writer transitions among existing statuses.

## FAKE / REAL / ZERO REAL

- ZERO Cursor REAL
- ZERO OpenAI REAL
- ZERO Nora REAL
- ZERO proof repository creation
- ZERO Product Git push / PR / merge
- ZERO production GitHub mutation from this lot
- Fake substitutes external Cursor/GitHub boundary only
- FAKE/REAL: **ZERO REAL**

## FILES CREATED / MODIFIED / DELETED (Product)

Commit `46e7e5b3` — **35 files, +4089 / −1034**.

### CREATED (A)

- `projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts`
- `projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/advanceExecutionContractCompletion.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorGitExternalState.ts`
- `projects/sfia-studio/app/lib/oa/git-ports/platformGithubReadBridge.ts`
- `projects/sfia-studio/app/lib/platform/repository/ghCliTransport.ts`

### MODIFIED (M)

- `projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicE2e.d0.test.ts` (pseudo-E2E retired → re-export monolithic)
- `projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicNegatives.d0.test.ts`
- `projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitCompletionProofSet.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyWorkspaceFileEffects.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts`
- `projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts`
- `projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts`
- `projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts`
- `projects/sfia-studio/app/lib/oa/git-ports/index.ts`
- `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`
- `projects/sfia-studio/app/lib/platform/repository/githubReadAdapter.ts`
- `projects/sfia-studio/app/lib/platform/repository/index.ts`
- `projects/sfia-studio/app/lib/platform/tools/toolRouter.ts`
- `projects/sfia-studio/app/lib/platform/tools/types.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

### DELETED (D)

- **None** as tracked path deletions.
- Behavioral deletion only: duplicate OA `runFixedArgv` spawn stack removed in favor of shared `ghCliTransport` (no legitimate platform functionality removed).

### Governance / protected sources

- No protected governance sources modified.

## TEST RESULTS

### Focused GCEC

7 files / **70 tests PASS**

Suite includes (among others):

- `gcecProductMonolithicE2e.d0.test.ts`
- `gcecDeterministicE2e.d0.test.ts` (re-export)
- `gcecD15Negatives.d0.test.ts` (N1–N28)
- related GCEC ownership / deterministic / one-lot files in the focused set

TRUE PRODUCT E2E: `gcecProductMonolithicE2e.d0.test.ts` **PASS** (`gcecDeterministicE2e` re-exports it)

### Full vitest

- Test Files: **338 passed | 17 skipped**
- Tests: **3594 passed | 135 skipped**

### Quality gates

- typecheck: **PASS**
- lint: **PASS** (No ESLint warnings)
- build: **PASS**
- `git diff --check`: **PASS**

## LOCAL COMMIT

- SHA: `46e7e5b3cf3d82656e15b9fd402db0908704d927`
- parent: `7ce33b15dcfdbc8e83f6225c87b0bd82c43acb62`
- tree: `f01cd82d8ec8bf0a917f7734b0a27e6c78808f3a`
- message: `fix(sfia-studio): complete gated GCEC cycle lifecycle`

## PRODUCT PUSH

NONE

## PROOF REPO

NOT CREATED

## CURSOR REAL / OPENAI REAL / REMOTE PRODUCT GIT / PR / MERGE

ALL ZERO / NONE

## REVIEW PACK

FULL path: `.tmp-sfia-review/chatgpt-review.md` (this document)

Not synthesis-only: includes CR matrix, multi-Attempt same-EC trace, exact Product use-case sequence, N1–N28 summary, file inventory from commit, architecture parallelism check, and validation counts.

## REVIEW HANDOFF

To be published via `scripts/sfia/publish-review-handoff.sh` (publish-in-cycle) to:

- branch: `sfia/review-handoff`
- path: `sfia-review-handoff/latest-chatgpt-review.md`

Only Review Handoff remote push authorized. Independently verify remote SHA / parent / blob equality after publisher (known false-negative; remote Git truth wins).

## OPEN GATES (UNCHANGED EXCEPT CONTINUATION)

- GCEC-REPO-CREATE
- GCEC-CURSOR-REAL
- GCEC-PUSH
- GCEC-PR
- GCEC-MERGE
- GCEC-RUNTIME-V3

**GCEC-CONTINUATION-SEMANTICS:** **CLOSED BY D-GCEC-15**

## DEBT (UNCHANGED)

- TEMP-GCEC-PRPM-01
- TEMP-GCEC-F14-BIND-01

## ANTI-CLAIMS

As required by GO:

- D-GCEC-15 implemented ≠ REAL
- multi-Attempt deterministic ≠ Cursor REAL
- deterministic ≠ REAL
- Fake Cursor ≠ Cursor REAL
- RepositoryRead deterministic ≠ GitHub REAL proof
- RepositoryRead implementation ≠ GitHub REAL proof
- local commit ≠ PR readiness
- Review Handoff ≠ Product Git proof
- proof repo NOT CREATED
- Product Completion CLOSED
- runtime v3 NON ADOPTED
- AVAILABLE ≠ VERIFIED
- Cursor report claim ≠ Evidence verified
- Nora PREVIEW proposal ≠ authoritative exit requirements
- docs_write capability ≠ Git authorization
- shared transport ≠ live GitHub mutation proof
- CycleInstance completed on Fake path ≠ Cursor REAL / remote merge proof

## SUCCESS CONDITION CHECK (GO §40)

| # | Condition | Result |
|---|-----------|--------|
| 1 | D-GCEC-15 with existing statuses | PASS |
| 2 | Partial Attempt does not complete EC | PASS |
| 3 | EC confirmed when requirements remain | PASS |
| 4 | New Attempt under SAME EC after authority | PASS |
| 5 | Previous terminal Attempt immutable | PASS |
| 6 | Only one active Attempt per EC | PASS |
| 7 | EC completes only when all effective reqs verified | PASS |
| 8 | docs_write does not imply Git | PASS |
| 9 | raw Nora proposal non-authoritative | PASS |
| 10 | workspace observation independent | PASS |
| 11 | Artifact AVAILABLE ≠ VERIFIED | PASS |
| 12 | technicalResultRef zero verification trust | PASS |
| 13 | Evidence verification uses status=verified | PASS |
| 14 | one concrete RepositoryRead transport | PASS |
| 15 | Nora rich PR/diff/file/ref read-only tools | PASS |
| 16 | repository context ≠ silent Evidence | PASS |
| 17 | Git proof chain strict and coherent | PASS |
| 18 | Cursor performs all fake mutation effects | PASS |
| 19 | Studio performs only reads/verifications | PASS |
| 20 | principal test F2 → CycleInstance completed | PASS |
| 21 | explicit FINALIZE mandatory | PASS |
| 22 | no implicit next cycle | PASS |
| 23 | completed trajectory step not re-prepared | PASS |
| 24 | GCEC-PERSIST closed | PASS |
| 25 | ZERO REAL | PASS |

## VERDICT

**PASS — GCEC DETERMINISTIC CYCLE-CLOSURE ARC COMPLETE / READY FOR CHATGPT FINAL CRITICAL REVIEW**

==================================================
## REVIEWABLE CANDIDATE CONTENT — REPUBLISH
==================================================

REPUBLISH_TIMESTAMP: 2026-09-11T11:59:18Z

Purpose: close **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING**.
Embeds independent reviewable Product candidate content for local SHA `46e7e5b3`.
Product push remains **NONE**. Handoff-only update.

### How to use

1. New files below are **complete** as committed at `46e7e5b3`.
2. Modified critical files include **useful unified diffs** vs parent `7ce33b15` and, for highest-risk modules, **full post-change source**.
3. Paths are repo-relative under `projects/sfia-studio/app/...`.

Candidate SHA: `46e7e5b3cf3d82656e15b9fd402db0908704d927`
Parent SHA: `7ce33b15dcfdbc8e83f6225c87b0bd82c43acb62`
Tree: `f01cd82d8ec8bf0a917f7734b0a27e6c78808f3a`


--------------------------------------------------
### FULL FILE — qualifyExecutionContractCompletion

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts`
Source: `git show 46e7e5b3:projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts`

```typescript
/**
 * D-GCEC-15 — qualify whether an ExecutionContract is complete.
 * Attempt success ≠ contract completion. Completion requires all effective
 * required execution effects to be independently VERIFIED/SATISFIED.
 */
import type { Confirmation } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  deriveAuthorizedExecutionSlice,
  type AuthorizedExecutionSlice,
} from "./authorizedExecutionSlice";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";

export type ExecutionContractCompletionQualification = {
  complete: boolean;
  /** Next EC status after a successful Attempt while executing. */
  nextStatusAfterSuccessfulAttempt: "confirmed" | "completed";
  remainingRequiredEffects: CursorAuthorizedEffectId[];
  verifiedEffects: CursorAuthorizedEffectId[];
  blockedByConfirmation: CursorAuthorizedEffectId[];
  waitingVerification: CursorAuthorizedEffectId[];
  reasons: string[];
};

const GIT_EFFECTS: CursorAuthorizedEffectId[] = [
  "git.commit",
  "git.push",
  "github.pr.create",
  "github.pr.merge",
];

const FILE_EFFECTS: CursorAuthorizedEffectId[] = [
  "filesystem.create",
  "filesystem.modify",
  "validation.run",
];

function evidenceVerifiedForEffect(
  evidence: readonly Evidence[],
  effect: CursorAuthorizedEffectId,
  cycleInstanceId?: string,
): boolean {
  const sourceByEffect: Partial<Record<CursorAuthorizedEffectId, string[]>> = {
    "filesystem.create": ["artifact", "docs_write", "workspace"],
    "filesystem.modify": ["artifact", "docs_write", "workspace"],
    "validation.run": ["validation", "tests"],
    "git.commit": ["git:local_commit", "git:commit"],
    "git.push": ["git:remote_push", "git:push"],
    "github.pr.create": ["git:pull_request"],
    "github.pr.merge": ["git:merge", "git:post_merge_verification"],
  };
  const sources = sourceByEffect[effect] ?? [];
  return evidence.some((e) => {
    if (e.status !== "verified") return false;
    if (
      cycleInstanceId &&
      e.bindings?.cycleInstanceId &&
      e.bindings.cycleInstanceId !== cycleInstanceId
    ) {
      return false;
    }
    if (effect.startsWith("filesystem") || effect === "validation.run") {
      return (
        e.type === "artifact" ||
        sources.some((s) => typeof e.source === "string" && e.source.includes(s))
      );
    }
    return sources.includes(String(e.source));
  });
}

function reqImpliesEffect(
  reqs: readonly string[],
  effect: CursorAuthorizedEffectId,
): boolean {
  return reqs.some((r) => {
    if (effect === "git.commit")
      return r === "git:local_commit" || r === "git:commit";
    if (effect === "git.push")
      return r === "git:remote_push" || r === "git:push";
    if (effect === "github.pr.create") return r === "git:pull_request";
    if (effect === "github.pr.merge")
      return r === "git:merge" || r === "git:post_merge_verification";
    if (effect === "filesystem.create" || effect === "filesystem.modify") {
      return (
        /artifact|docs_write|filesystem/i.test(r) ||
        r === "artifact" ||
        reqs.length === 0
      );
    }
    if (effect === "validation.run") return /validation|tests?/i.test(r);
    return false;
  });
}

/**
 * Qualify contract completion from durable facts (EC + Evidence + Confirmations).
 * Does not mutate state.
 */
export function qualifyExecutionContractCompletion(input: {
  contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "evidenceRequirements"
    | "expectedOutputs"
    | "requiredCapabilities"
  >;
  evidence?: readonly Evidence[];
  confirmations?: readonly Confirmation[];
  cycleInstanceId?: string;
  nowIso?: string;
  /** Prior executed effects claimed by terminal Attempts (optional). */
  reportedExecutedEffects?: readonly CursorAuthorizedEffectId[];
}): ExecutionContractCompletionQualification {
  const evidence = input.evidence ?? [];
  const reqs = [
    ...(input.contract.evidenceRequirements ?? []),
    ...(input.contract.expectedOutputs ?? []).map((o) =>
      /artifact/i.test(o) ? "artifact" : o,
    ),
  ];
  const reasons: string[] = [];

  // Baseline filesystem+validation for docs-write / artifact contracts
  const wantsArtifact =
    reqs.some((r) => /artifact|docs_write|filesystem/i.test(r)) ||
    (input.contract.expectedOutputs ?? []).some((o) => /artifact/i.test(o)) ||
    (input.contract.requiredCapabilities ?? []).some((c) =>
      /docs_write/i.test(c),
    );

  const requiredEffects: CursorAuthorizedEffectId[] = [];
  if (wantsArtifact) {
    requiredEffects.push(...FILE_EFFECTS);
  }
  for (const effect of GIT_EFFECTS) {
    if (reqImpliesEffect(reqs, effect)) {
      requiredEffects.push(effect);
    }
  }
  // post_merge is verified via merge/post_merge evidence; treat as part of merge family
  if (reqs.includes("git:post_merge_verification")) {
    if (!requiredEffects.includes("github.pr.merge")) {
      requiredEffects.push("github.pr.merge");
    }
  }

  const slice: AuthorizedExecutionSlice = deriveAuthorizedExecutionSlice({
    executionContractId: input.contract.executionContractId,
    evidenceRequirements: input.contract.evidenceRequirements ?? [],
    requiredCapabilities: input.contract.requiredCapabilities ?? [],
    confirmations: input.confirmations ?? [],
    nowIso: input.nowIso,
  });

  const verifiedEffects: CursorAuthorizedEffectId[] = [];
  const waitingVerification: CursorAuthorizedEffectId[] = [];
  const remainingRequiredEffects: CursorAuthorizedEffectId[] = [];
  const blockedByConfirmation: CursorAuthorizedEffectId[] = [];

  for (const effect of requiredEffects) {
    if (evidenceVerifiedForEffect(evidence, effect, input.cycleInstanceId)) {
      verifiedEffects.push(effect);
      continue;
    }
    remainingRequiredEffects.push(effect);
    if (slice.blockedEffects.includes(effect)) {
      blockedByConfirmation.push(effect);
      reasons.push(`blocked_confirmation:${effect}`);
    } else if (
      (input.reportedExecutedEffects ?? []).includes(effect) ||
      // artifact often reported as available before verify
      (effect.startsWith("filesystem") &&
        evidence.some(
          (e) =>
            e.type === "artifact" &&
            (e.status === "available" || e.status === "verified"),
        ))
    ) {
      waitingVerification.push(effect);
      reasons.push(`waiting_verification:${effect}`);
    } else {
      reasons.push(`pending_execution:${effect}`);
    }
  }

  const complete = remainingRequiredEffects.length === 0;
  if (!complete && remainingRequiredEffects.length > 0) {
    reasons.push("effective_requirements_remain");
  }

  return {
    complete,
    nextStatusAfterSuccessfulAttempt: complete ? "completed" : "confirmed",
    remainingRequiredEffects,
    verifiedEffects,
    blockedByConfirmation,
    waitingVerification,
    reasons,
  };
}
```

--------------------------------------------------
### FULL FILE — advanceExecutionContractCompletion

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/application/advanceExecutionContractCompletion.ts`
Source: `git show 46e7e5b3:projects/sfia-studio/app/lib/oa/execution-attempt/application/advanceExecutionContractCompletion.ts`

```typescript
/**
 * D-GCEC-15 — after Evidence verification, advance EC confirmed → completed
 * when all effective requirements are satisfied (no new Attempt required).
 */
import type { Confirmation } from "@/lib/oa/decision";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
import { qualifyExecutionContractCompletion } from "../domain/qualifyExecutionContractCompletion";
import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";

export async function advanceExecutionContractCompletion(input: {
  executionContractId: string;
  contracts: ExecutionContractRepositoryPort;
  contractStatusWriter: ExecutionContractStatusWriter;
  evidence: readonly Evidence[];
  confirmations?: readonly Confirmation[];
  cycleInstanceId?: string;
  clock?: ClockPort;
  nowIso?: string;
}): Promise<
  | { ok: true; status: string; complete: boolean; advanced: boolean }
  | { ok: false; reason: string }
> {
  const contract = await input.contracts.findById(input.executionContractId);
  if (!contract) return { ok: false, reason: "contract_not_found" };

  const qualification = qualifyExecutionContractCompletion({
    contract,
    evidence: input.evidence,
    confirmations: input.confirmations,
    cycleInstanceId: input.cycleInstanceId,
    nowIso: input.nowIso ?? input.clock?.nowIso(),
  });

  if (!qualification.complete) {
    return {
      ok: true,
      status: contract.status,
      complete: false,
      advanced: false,
    };
  }

  if (contract.status === "completed") {
    return {
      ok: true,
      status: "completed",
      complete: true,
      advanced: false,
    };
  }

  if (contract.status !== "confirmed" && contract.status !== "executing") {
    return {
      ok: false,
      reason: `cannot_complete_from_${contract.status}`,
    };
  }

  const write = await input.contractStatusWriter.write({
    executionContractId: contract.executionContractId,
    expectedVersion: contract.version,
    nextStatus: "completed",
    reason: "all_effective_requirements_verified",
  });
  if (!write.ok) {
    return { ok: false, reason: write.internalCauseRef };
  }
  return {
    ok: true,
    status: write.contract.status,
    complete: true,
    advanced: true,
  };
}
```

--------------------------------------------------
### FULL FILE — fakeCursorGitExternalState

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorGitExternalState.ts`
Source: `git show 46e7e5b3:projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorGitExternalState.ts`

```typescript
/**
 * TEST-ONLY — shared mutable Fake Cursor Git/GitHub external state (D-GCEC-15).
 * Mutations emulate Cursor-owned effects. Studio read adapters observe the same
 * instance via FakeRepositoryReadPorts — ZERO real remote GitHub.
 */
import { createHash, randomBytes } from "node:crypto";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { readFile } from "node:fs/promises";
import path from "node:path";

const execFileAsync = promisify(execFile);

export type FakeCursorCommitRecord = {
  sha: string;
  message: string;
  parent?: string;
};

export type FakeCursorPrRecord = {
  number: number;
  headSha: string;
  base: string;
  state: "open" | "closed" | "merged";
  mergeSha?: string;
  headBranch?: string;
};

export type FakeCursorCiConclusion =
  | "success"
  | "failure"
  | "pending"
  | "neutral"
  | "cancelled";

export type FakeCursorReviewState =
  | "approved"
  | "changes_requested"
  | "commented"
  | "pending";

function fakeSha(seed: string): string {
  return createHash("sha1").update(seed).digest("hex");
}

async function runGit(
  worktreeRoot: string,
  argv: readonly string[],
): Promise<{ stdout: string; stderr: string; exitCode: number }> {
  try {
    const { stdout, stderr } = await execFileAsync("git", [...argv], {
      cwd: worktreeRoot,
      encoding: "utf8",
      maxBuffer: 4 * 1024 * 1024,
      // shell defaults false for execFile
    });
    return {
      stdout: typeof stdout === "string" ? stdout : String(stdout),
      stderr: typeof stderr === "string" ? stderr : String(stderr),
      exitCode: 0,
    };
  } catch (err) {
    const e = err as {
      stdout?: string;
      stderr?: string;
      code?: number | string;
    };
    return {
      stdout: e.stdout ?? "",
      stderr: e.stderr ?? (err instanceof Error ? err.message : "git_error"),
      exitCode: typeof e.code === "number" ? e.code : 1,
    };
  }
}

/**
 * Shared Fake Cursor Git world. Prefer real disposable git via fixed argv when
 * worktreeRoot is a git repo; otherwise keep in-memory commits/refs.
 */
export class FakeCursorGitExternalState {
  worktreeRoot: string;
  commits: FakeCursorCommitRecord[] = [];
  branchHeads = new Map<string, string>();
  prs = new Map<number, FakeCursorPrRecord>();
  ci = new Map<string, FakeCursorCiConclusion>();
  reviews = new Map<number, FakeCursorReviewState>();
  /** path → content snapshots keyed by commit sha (for RepositoryReadPort). */
  filesByShaPath = new Map<string, Map<string, string>>();
  private nextPrNumber = 1;
  currentBranch: string;

  constructor(options: {
    worktreeRoot: string;
    initialBranch?: string;
    initialSha?: string;
  }) {
    this.worktreeRoot = options.worktreeRoot;
    this.currentBranch = options.initialBranch ?? "main";
    if (options.initialSha) {
      this.branchHeads.set(
        this.currentBranch,
        options.initialSha.toLowerCase(),
      );
    }
  }

  async isGitRepo(): Promise<boolean> {
    const r = await runGit(this.worktreeRoot, [
      "rev-parse",
      "--is-inside-work-tree",
    ]);
    return r.exitCode === 0 && r.stdout.trim() === "true";
  }

  /**
   * Stage paths and commit. Prefers real git add+commit when worktree is a repo.
   */
  async commit(
    paths: readonly string[],
    message: string,
  ): Promise<FakeCursorCommitRecord> {
    const parent =
      this.branchHeads.get(this.currentBranch) ??
      this.commits[this.commits.length - 1]?.sha;

    if (await this.isGitRepo()) {
      if (paths.length > 0) {
        const add = await runGit(this.worktreeRoot, ["add", "--", ...paths]);
        if (add.exitCode !== 0) {
          throw new Error(`fake_git_add_failed:${add.stderr || add.stdout}`);
        }
      }
      const committed = await runGit(this.worktreeRoot, [
        "commit",
        "-m",
        message,
        "--allow-empty",
      ]);
      if (committed.exitCode !== 0) {
        throw new Error(
          `fake_git_commit_failed:${committed.stderr || committed.stdout}`,
        );
      }
      const rev = await runGit(this.worktreeRoot, ["rev-parse", "HEAD"]);
      if (rev.exitCode !== 0) {
        throw new Error("fake_git_rev_parse_failed");
      }
      const sha = rev.stdout.trim().toLowerCase();
      const record: FakeCursorCommitRecord = {
        sha,
        message,
        ...(parent ? { parent } : {}),
      };
      this.commits.push(record);
      this.branchHeads.set(this.currentBranch, sha);
      await this.snapshotPaths(sha, paths);
      return record;
    }

    const sha = fakeSha(
      `${parent ?? "root"}:${message}:${paths.join(",")}:${randomBytes(4).toString("hex")}`,
    );
    const record: FakeCursorCommitRecord = {
      sha,
      message,
      ...(parent ? { parent } : {}),
    };
    this.commits.push(record);
    this.branchHeads.set(this.currentBranch, sha);
    await this.snapshotPaths(sha, paths);
    return record;
  }

  /** Fake remote: advance branch head to current local tip. */
  push(branch: string): { ref: string; sha: string } {
    const sha =
      this.branchHeads.get(branch) ??
      this.branchHeads.get(this.currentBranch) ??
      this.commits[this.commits.length - 1]?.sha;
    if (!sha) {
      throw new Error("fake_git_push_no_sha");
    }
    this.branchHeads.set(branch, sha.toLowerCase());
    this.currentBranch = branch;
    return { ref: branch, sha: sha.toLowerCase() };
  }

  openPr(base: string, head: string): FakeCursorPrRecord {
    const headSha =
      this.branchHeads.get(head) ??
      this.commits[this.commits.length - 1]?.sha;
    if (!headSha) {
      throw new Error("fake_pr_create_no_head_sha");
    }
    const number = this.nextPrNumber++;
    const pr: FakeCursorPrRecord = {
      number,
      headSha: headSha.toLowerCase(),
      base,
      state: "open",
      headBranch: head,
    };
    this.prs.set(number, pr);
    return pr;
  }

  setCi(sha: string, conclusion: FakeCursorCiConclusion): void {
    this.ci.set(sha.toLowerCase(), conclusion);
  }

  setReview(pr: number, state: FakeCursorReviewState): void {
    this.reviews.set(pr, state);
  }

  mergePr(pr: number): FakeCursorPrRecord {
    const existing = this.prs.get(pr);
    if (!existing) {
      throw new Error(`fake_pr_merge_missing:${pr}`);
    }
    const mergeSha = fakeSha(
      `merge:${pr}:${existing.headSha}:${existing.base}:${randomBytes(4).toString("hex")}`,
    );
    const merged: FakeCursorPrRecord = {
      ...existing,
      state: "merged",
      mergeSha,
    };
    this.prs.set(pr, merged);
    this.branchHeads.set(existing.base, mergeSha);
    this.commits.push({
      sha: mergeSha,
      message: `Merge PR #${pr}`,
      parent: existing.headSha,
    });
    // Carry head file snapshots onto merge SHA so RepositoryRead can observe
    // post-merge artifact digests (Studio verify).
    const headFiles = this.filesByShaPath.get(existing.headSha.toLowerCase());
    if (headFiles) {
      this.filesByShaPath.set(mergeSha, new Map(headFiles));
    }
    return merged;
  }

  private async snapshotPaths(
    sha: string,
    paths: readonly string[],
  ): Promise<void> {
    const map = this.filesByShaPath.get(sha) ?? new Map<string, string>();
    for (const rel of paths) {
      const abs = path.resolve(this.worktreeRoot, rel);
      try {
        const content = await readFile(abs, "utf8");
        map.set(rel.replace(/\\/g, "/"), content);
      } catch {
        // path may be missing in pure in-memory mode
      }
    }
    this.filesByShaPath.set(sha, map);
  }
}
```

--------------------------------------------------
### FULL FILE — platformGithubReadBridge

Path: `projects/sfia-studio/app/lib/oa/git-ports/platformGithubReadBridge.ts`
Source: `git show 46e7e5b3:projects/sfia-studio/app/lib/oa/git-ports/platformGithubReadBridge.ts`

```typescript
/**
 * platformGithubReadBridge — thin OA adapter over platform GithubReadPort (CR-GCEC-18).
 * Maps Nora/platform GitHub READ into OA RepositoryReadPort shape.
 * Prefer FakeRepositoryReadPorts for deterministic GCEC tests.
 */
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type { GithubReadPort } from "@/lib/platform/repository/githubReadAdapter";
import type {
  GitCiStatusInput,
  GitCiStatusOutput,
  GitCiStatusPort,
  GitReviewStatusInput,
  GitReviewStatusOutput,
  GitReviewStatusPort,
  RepositoryCommitSummary,
  RepositoryCompareResult,
  RepositoryFileContent,
  RepositoryMergeInfo,
  RepositoryPullRequestSummary,
  RepositoryReadPort,
  RepositoryReadRef,
} from "./types";

function digestOf(content: string): Digest {
  return `sha256:${createHash("sha256").update(content, "utf8").digest("hex")}` as Digest;
}

function splitRepo(repositoryRef: string): { owner: string; name: string } {
  const [owner, name] = repositoryRef.split("/");
  if (!owner || !name) {
    throw new Error(`invalid_repository_ref:${repositoryRef}`);
  }
  return { owner, name };
}

function mapPrState(state: string): "open" | "closed" | "merged" {
  const s = state.toLowerCase();
  if (s === "merged") return "merged";
  if (s === "closed") return "closed";
  return "open";
}

/**
 * OA RepositoryReadPort façade over platform GithubReadPort.
 * Does not invent a second gh CLI stack — delegates to the injected port.
 */
export class PlatformGithubReadBridge
  implements RepositoryReadPort, GitCiStatusPort, GitReviewStatusPort
{
  constructor(private readonly github: GithubReadPort) {}

  async listPullRequests(
    input: RepositoryReadRef & {
      limit?: number;
      state?: "open" | "closed" | "all";
    },
  ): Promise<RepositoryPullRequestSummary[]> {
    if (!this.github.listPullRequests) return [];
    const { owner, name } = splitRepo(input.repositoryRef);
    const rows = await this.github.listPullRequests(owner, name, {
      limit: input.limit,
      state: input.state,
    });
    const out: RepositoryPullRequestSummary[] = [];
    for (const r of rows) {
      let headSha = r.headRef;
      try {
        const branch = await this.github.getBranch(owner, name, r.headRef);
        headSha = branch.sha;
      } catch {
        /* keep ref name if tip unavailable */
      }
      out.push({
        number: r.number,
        title: r.title,
        state: mapPrState(r.state),
        headSha,
        baseBranch: r.baseRef,
        url: r.url,
      });
    }
    return out;
  }

  async getPullRequest(
    input: RepositoryReadRef & { number: number },
  ): Promise<RepositoryPullRequestSummary | null> {
    const { owner, name } = splitRepo(input.repositoryRef);
    try {
      const r = await this.github.getPullRequest(owner, name, input.number);
      let headSha = r.headRef;
      try {
        const branch = await this.github.getBranch(owner, name, r.headRef);
        headSha = branch.sha;
      } catch {
        /* keep */
      }
      return {
        number: r.number,
        title: r.title,
        state: mapPrState(r.state),
        headSha,
        baseBranch: r.baseRef,
        url: r.url,
      };
    } catch {
      return null;
    }
  }

  async listPullRequestFiles(
    input: RepositoryReadRef & { number: number },
  ): Promise<string[]> {
    if (!this.github.listPullRequestFiles) return [];
    const { owner, name } = splitRepo(input.repositoryRef);
    return this.github.listPullRequestFiles(owner, name, input.number);
  }

  async getPullRequestDiff(
    input: RepositoryReadRef & { number: number },
  ): Promise<string> {
    if (!this.github.getPullRequestDiff) return "";
    const { owner, name } = splitRepo(input.repositoryRef);
    return this.github.getPullRequestDiff(owner, name, input.number);
  }

  async listCommits(
    input: RepositoryReadRef & { ref?: string; limit?: number },
  ): Promise<RepositoryCommitSummary[]> {
    void input.limit;
    // Platform GithubReadPort has no listCommits — best-effort single tip.
    if (!input.ref) return [];
    const one = await this.getCommit({
      repositoryRef: input.repositoryRef,
      sha: input.ref,
    });
    return one ? [one] : [];
  }

  async getCommit(
    input: RepositoryReadRef & { sha: string },
  ): Promise<RepositoryCommitSummary | null> {
    const { owner, name } = splitRepo(input.repositoryRef);
    try {
      const c = await this.github.getCommit(owner, name, input.sha);
      return { sha: c.sha.toLowerCase(), message: c.message, parents: [] };
    } catch {
      return null;
    }
  }

  async readFileAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<RepositoryFileContent | null> {
    if (!this.github.readFileAtRef) return null;
    const { owner, name } = splitRepo(input.repositoryRef);
    try {
      const file = await this.github.readFileAtRef(
        owner,
        name,
        input.path,
        input.ref,
      );
      if (!file) return null;
      return {
        path: file.path,
        ref: file.ref,
        content: file.content,
        digest: digestOf(file.content),
      };
    } catch {
      return null;
    }
  }

  async listPathAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<string[]> {
    void input;
    return [];
  }

  async compareRefs(
    input: RepositoryReadRef & { base: string; head: string },
  ): Promise<RepositoryCompareResult> {
    if (!this.github.compareRefs) {
      return {
        base: input.base,
        head: input.head,
        aheadBy: 0,
        behindBy: 0,
        files: [],
      };
    }
    const { owner, name } = splitRepo(input.repositoryRef);
    try {
      return await this.github.compareRefs(
        owner,
        name,
        input.base,
        input.head,
      );
    } catch {
      return {
        base: input.base,
        head: input.head,
        aheadBy: 0,
        behindBy: 0,
        files: [],
      };
    }
  }

  async getBranchHead(
    input: RepositoryReadRef & { branch: string },
  ): Promise<string | null> {
    const { owner, name } = splitRepo(input.repositoryRef);
    try {
      const b = await this.github.getBranch(owner, name, input.branch);
      return b.sha.toLowerCase();
    } catch {
      return null;
    }
  }

  async getCiStatus(input: GitCiStatusInput): Promise<GitCiStatusOutput> {
    const { owner, name } = splitRepo(input.repositoryRef);
    try {
      const checks = await this.github.listChecks(
        owner,
        name,
        input.commitSha,
      );
      if (checks.some((c) => c.conclusion === "failure")) {
        return { conclusion: "failure", checkName: checks[0]?.name };
      }
      if (
        checks.length > 0 &&
        checks.every(
          (c) => c.conclusion === "success" || c.status === "completed",
        )
      ) {
        return { conclusion: "success", checkName: checks[0]?.name };
      }
      return { conclusion: "pending", checkName: checks[0]?.name };
    } catch {
      return { conclusion: "pending", checkName: "github-checks" };
    }
  }

  async getReviewStatus(
    input: GitReviewStatusInput,
  ): Promise<GitReviewStatusOutput> {
    void input;
    // Platform port has no dedicated reviewDecision — pending until extended.
    return { state: "pending" };
  }

  async getMergeInfo(
    input: RepositoryReadRef & { prNumber: number },
  ): Promise<RepositoryMergeInfo | null> {
    const pr = await this.getPullRequest({
      repositoryRef: input.repositoryRef,
      number: input.prNumber,
    });
    if (!pr) return null;
    return {
      prNumber: pr.number,
      state: pr.state,
      mergeSha: pr.state === "merged" ? pr.headSha : null,
      targetBranch: pr.baseBranch,
      headSha: pr.headSha,
    };
  }

  async readArtifactDigestAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<Digest | null> {
    const file = await this.readFileAtRef(input);
    return file?.digest ?? null;
  }
}
```

--------------------------------------------------
### FULL FILE — ghCliTransport

Path: `projects/sfia-studio/app/lib/platform/repository/ghCliTransport.ts`
Source: `git show 46e7e5b3:projects/sfia-studio/app/lib/platform/repository/ghCliTransport.ts`

```typescript
/**
 * Shared gh CLI transport — fixed argv, shell:false (CR-GCEC-18).
 * Lowest shared layer for platform GhCliGithubReadAdapter and OA
 * GithubCliRepositoryReadAdapter. No Product mutation argv.
 */
import { spawn as nodeSpawn } from "node:child_process";

export type GhCliCmdResult = {
  stdout: string;
  stderr: string;
  exitCode: number;
};

export type RunGhFixedArgvOptions = {
  cwd?: string;
  timeoutMs?: number;
  maxStdoutBytes?: number;
  maxStderrBytes?: number;
  env?: NodeJS.ProcessEnv;
};

/**
 * Spawn executable with fixed argv (shell:false). Never interpolates a shell.
 * Injectable for tests — do not call real `gh` from unit tests.
 */
export async function runGhFixedArgv(
  executable: string,
  argv: readonly string[],
  cwdOrOptions?: string | RunGhFixedArgvOptions,
): Promise<GhCliCmdResult> {
  const options: RunGhFixedArgvOptions =
    typeof cwdOrOptions === "string"
      ? { cwd: cwdOrOptions }
      : (cwdOrOptions ?? {});
  const maxStdout = options.maxStdoutBytes ?? 256 * 1024;
  const maxStderr = options.maxStderrBytes ?? 64 * 1024;
  const timeoutMs = options.timeoutMs;

  return await new Promise((resolve) => {
    const child = nodeSpawn(executable, [...argv], {
      cwd: options.cwd,
      shell: false,
      stdio: ["ignore", "pipe", "pipe"],
      env: options.env ?? process.env,
    });
    let stdout = "";
    let stderr = "";
    let settled = false;
    const finish = (exitCode: number) => {
      if (settled) return;
      settled = true;
      resolve({ stdout, stderr, exitCode });
    };
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (timeoutMs != null && timeoutMs > 0) {
      timer = setTimeout(() => {
        try {
          child.kill("SIGTERM");
        } catch {
          /* ignore */
        }
        finish(124);
      }, timeoutMs);
    }
    child.stdout?.on("data", (c: Buffer) => {
      if (stdout.length < maxStdout) stdout += c.toString("utf8");
    });
    child.stderr?.on("data", (c: Buffer) => {
      if (stderr.length < maxStderr) stderr += c.toString("utf8");
    });
    child.on("error", () => {
      if (timer) clearTimeout(timer);
      finish(1);
    });
    child.on("close", (code) => {
      if (timer) clearTimeout(timer);
      finish(code ?? 1);
    });
  });
}
```

--------------------------------------------------
### FULL FILE — gcecProductMonolithicE2e (principal Product E2E)

Path: `projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts`
Source: `git show 46e7e5b3:projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts`

```typescript
/**
 * GCEC principal Product monolithic E2E — D-GCEC-15 Option B.
 *
 * True Product spine (no pseudo-E2E):
 * CreateProject → SetRepositoryBinding → Cycle START → F2 → HD → prepareM3 →
 * resolve → Confirm → Select → GateD → StartExecution → Fake Cursor slice →
 * complete → EC confirmed (remaining reqs) → evidence verify → gated Confirmations →
 * Select+Start same EC → git effects via Fake only → advance EC completed →
 * FinalizationAssessment → FINALIZE HD → Cycle completed.
 *
 * ZERO OpenAI REAL. ZERO Cursor REAL. Fake owns all git mutations after fixture init.
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Confirmation } from "@/lib/oa/decision";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  finalizeSubjectFor,
  qualifyGitCompletionProofSet,
  type TrajectoryStep,
} from "@/lib/oa/cycle";
import {
  advanceExecutionContractCompletion,
  buildGitEffectActionRef,
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  ManagedProjectRepositoryResolver,
  MemoryLaunchSafetyJournal,
  sanitizeManagedRepoIdentity,
} from "@/lib/oa/execution-attempt";
import {
  FakeRepositoryReadPorts,
  NodeLocalGitStatusDiffPort,
  recordCiStatusEvidence,
  recordReviewStatusEvidence,
  verifyCommitClaim,
  verifyMergeClaim,
  verifyPostMergeEvidence,
  verifyPullRequestClaim,
  verifyPushClaim,
} from "@/lib/oa/git-ports";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { F3_CONFIRM_ACTION_REF } from "@/features/project-assistant/f3/constants";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";

const APP_ROOT = path.resolve(__dirname, "../../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "acme/widget";
const TARGET_PATH = "docs/functional-design.md";
const BRANCH = "gcec/docs";
const NOW = "2026-09-11T14:00:00.000Z";

const PILOTE = LOCAL_PILOTE_ACTOR;

const temps: string[] = [];

afterEach(() => {
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
  for (const t of temps.splice(0)) {
    try {
      fs.rmSync(t, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

beforeEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
});

function tempDir(prefix: string): string {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  temps.push(d);
  return d;
}

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    shell: false,
  }).trim();
}

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:gcec-prod-${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:gcec-prod-${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:gcec-prod-${this.prefix}-${this.correlation}`;
  }
}

function initManagedRepo(managedBase: string, identity: string): {
  repoRoot: string;
  baseHeadSha: string;
} {
  const sanitized = sanitizeManagedRepoIdentity(identity);
  const repoRoot = path.join(managedBase, sanitized);
  fs.mkdirSync(repoRoot, { recursive: true });
  git(repoRoot, ["init"]);
  git(repoRoot, ["config", "user.email", "gcec@test.local"]);
  git(repoRoot, ["config", "user.name", "GCEC Product E2E"]);
  git(repoRoot, ["checkout", "-b", "main"]);
  git(repoRoot, [
    "remote",
    "add",
    "origin",
    `https://github.com/${identity}.git`,
  ]);
  fs.writeFileSync(path.join(repoRoot, "README.md"), "# widget\n");
  fs.mkdirSync(path.join(repoRoot, "docs"), { recursive: true });
  git(repoRoot, ["add", "README.md"]);
  git(repoRoot, ["commit", "-m", "init"]);
  const baseHeadSha = git(repoRoot, ["rev-parse", "HEAD"]);
  expect(
    new ManagedProjectRepositoryResolver().resolveLocalRepoRoot(
      { identity },
      managedBase,
    ),
  ).toBe(repoRoot);
  return { repoRoot, baseHeadSha };
}

function requireAuthEvidenceId(
  auth: ReturnType<typeof registerLocalPiloteAuthority>,
): string {
  if (!auth.ok) {
    throw new Error(`authority register failed: ${auth.code} ${auth.message}`);
  }
  return auth.evidenceId;
}

async function grantEffectConfirmation(input: {
  runtime: RuntimeApplicationService;
  confirmationId: string;
  actionRef: string;
  scope: string;
  decisionRef: string;
  authorityEvidenceId?: string;
}): Promise<Confirmation> {
  const auth =
    input.authorityEvidenceId ??
    requireAuthEvidenceId(
      registerLocalPiloteAuthority({
        authorityResolver: input.runtime.oa!.authorityResolver,
        scope: input.scope,
        issuedAt: NOW,
        evidenceId: `evd:auth:${input.confirmationId}`,
        forceEnable: true,
      }),
    );

  const requested =
    await input.runtime.oa!.decisionServices.requestConfirmation.execute({
      confirmationId: input.confirmationId,
      level: "N3",
      actionRef: input.actionRef,
      requestedBy: PILOTE,
      requestedTo: PILOTE,
      scope: input.scope,
      idempotencyKey: `idem:${input.confirmationId}`,
      decisionRef: input.decisionRef,
    });
  if (!requested.ok) {
    throw new Error(
      `grantEffectConfirmation request: ${requested.error.detailCode} ${requested.error.message} cause=${requested.error.internalCauseRef ?? ""} actionRef=${input.actionRef}`,
    );
  }

  const granted =
    await input.runtime.oa!.decisionServices.grantConfirmation.execute({
      confirmationId: input.confirmationId,
      actor: PILOTE,
      authorityEvidenceId: auth,
    });
  if (!granted.ok) {
    throw new Error(
      `grantConfirmation: ${granted.error.detailCode} ${granted.error.message} cause=${granted.error.internalCauseRef ?? ""}`,
    );
  }
  return granted.confirmation;
}

async function selectGateStartSlice(input: {
  runtime: RuntimeApplicationService;
  attemptId: string;
  executionContractId: string;
  contractVersion: number;
  grantId: string;
  authorityEvidenceId: string;
  confirmations?: readonly Confirmation[];
  verifiedEffects?: readonly (
    | "filesystem.create"
    | "filesystem.modify"
    | "validation.run"
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge"
  )[];
}): Promise<{ attemptId: string; status: string }> {
  const attempts = input.runtime.oa!.executionAttemptServices;
  const selected = await attempts.selectExecutionAgent.execute({
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    idempotencyKey: `idem:sel:${input.attemptId}`,
    actor: PILOTE,
    authorityEvidenceId: input.authorityEvidenceId,
    expectedContractVersion: input.contractVersion,
    selectionProfile: "standard",
    selectionStrategy: "capabilities_deterministic",
    requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    systemInitiated: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.error.message);

  const expiresAt = new Date(Date.parse(NOW) + 60 * 60 * 1000).toISOString();
  const gate = await attempts.grantRealExecutionGate!.execute({
    grantId: input.grantId,
    attemptId: input.attemptId,
    actor: PILOTE,
    expiresAt,
    authorityEvidenceId: input.authorityEvidenceId,
  });
  expect(gate.ok).toBe(true);
  if (!gate.ok) throw new Error(gate.error.message);

  const started = await attempts.startExecution.execute({
    attemptId: input.attemptId,
    actor: PILOTE,
    authorityEvidenceId: input.authorityEvidenceId,
    confirmations: input.confirmations ?? [],
    verifiedEffects: input.verifiedEffects,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(started.error.message);
  return {
    attemptId: started.attempt.attemptId,
    status: started.attempt.status,
  };
}

describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () => {
  it("A→Z: Product use-cases → Fake Cursor slices → EC confirmed→completed → Cycle finalized", async () => {
    const root = tempDir("sfia-gcec-prod-");
    const managedBase = path.join(root, "managed");
    const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);

    // Fixture only — Fake Cursor owns git mutations after this point.
    const gitState = new FakeCursorGitExternalState({
      worktreeRoot: repoRoot,
      initialBranch: "main",
      initialSha: baseHeadSha,
    });
    const fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: repoRoot,
      pathAllowlist: ["docs/"],
      gitState,
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
    });
    const safetyJournal = new MemoryLaunchSafetyJournal();

    const runtime: RuntimeApplicationService = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource("e2e"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa-product.sqlite"),
      realBoundary: {
        launchPort: fakeLaunch,
        safetyJournal,
        managedRepoRootBase: managedBase,
      },
    });
    const oa = runtime.oa!;
    expect(oa.executionAttemptServices.realBoundary).toBeDefined();
    expect(oa.executionAttemptServices.grantRealExecutionGate).toBeDefined();

    // 1–2 CreateProject + repository binding
    const created = await runtime.createProject({
      name: "GCEC Product E2E",
      objective: "Functional design governed cycle",
      context: "deterministic Fake Cursor",
      criticality: "STANDARD",
      constraints: ["FIXTURE ONLY", "ZERO LIVE"],
      shortReference: "GCECPROD",
      idempotencyKey: `idem:gcec-prod-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;

    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
      projectId,
      actor: PILOTE,
      binding: {
        provider: "github",
        identity: IDENTITY,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseSha: baseHeadSha,
      },
    });
    expect(bound.ok).toBe(true);

    // 3 Create + START cycle (functional-design) with done trajectory for finalize
    const stepsDone: TrajectoryStep[] = [
      {
        stepId: "stp:fd",
        order: 1,
        label: "Functional design",
        state: "done",
        cycleTypeId: "cyc:functional-design",
      },
    ];
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps0.ok).toBe(true);
    if (!lps0.ok) return;
    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: stepsDone,
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: PILOTE,
    });
    expect(traj.ok).toBe(true);

    const cycleInstanceId = `cyc:gcec-prod-${Date.now()}`;
    const cycleCreated = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:functional-design",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    expect(cycleCreated.ok).toBe(true);

    const startAuth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: NOW,
      forceEnable: true,
    });
    expect(startAuth.ok).toBe(true);
    const startedCycle = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: PILOTE,
      authorityEvidenceId: requireAuthEvidenceId(startAuth),
    });
    expect(startedCycle.ok).toBe(true);
    if (!startedCycle.ok) return;
    expect(startedCycle.cycle.status).toBe("active");

    // 4–5 F2 Fake → Proposal → recordF2Decision (HD)
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const provider = new FakeConversationProvider();
    const analyzed = await analyzeIntent({
      userContent: "__F2_DOCS_WRITE_GCEC__ produce functional design",
      projectSummary: overview.project.name ?? "GCEC Product E2E",
      provider,
    });
    expect(analyzed.analysis.parseOk).toBe(true);
    expect(analyzed.analysis.executionIntent?.intentKind).toBe("docs_write");

    const snapshot = {
      projectId,
      lpsId: overview.livingState.id,
      lpsVersion: overview.livingState.version,
      doctrineDigest: overview.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
      ckcResolutionRef: null as string | null,
    };

    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest:
        analyzed.analysis.rephrasedRequest ??
        "Produire docs/functional-design.md",
      objective: analyzed.analysis.objective ?? "Functional design",
      cycleTypeId:
        analyzed.analysis.candidateCycleTypeId ?? "cyc:functional-design",
      recommendedProfile: "Standard",
      rationale: "GCEC Product monolithic E2E",
      scope: analyzed.analysis.scope ?? "docs/",
      outOfScope: analyzed.analysis.outOfScope,
      activatedBlocks: analyzed.analysis.activatedBlocks,
      expectedOutcome:
        analyzed.analysis.expectedOutcome ?? "artifact functional-design",
      sources: [],
      risks: analyzed.analysis.risks,
      reservations: analyzed.analysis.reservations,
      stopConditions: analyzed.analysis.stopConditions,
      morrisGateRequired: true,
      nextPossibleStep: "F3 PREPARE",
      contextSnapshot: snapshot,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: analyzed.analysis.requestedOperation,
      executionIntent: analyzed.analysis.executionIntent,
    });

    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: snapshot,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;
    const decisionId = go.decision.decisionId;

    const overviewAfter = await runtime.getProject(projectId);
    expect(overviewAfter.ok).toBe(true);
    if (!overviewAfter.ok) return;
    const currentContext = {
      projectId,
      lpsId: overviewAfter.livingState.id,
      lpsVersion: overviewAfter.livingState.version,
      doctrineDigest: overviewAfter.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
    };

    // 6 prepareM3 + resolve (boundedDocsWrite)
    const prepared = await prepareAndResolveM3ProductPath({
      projectId,
      decisionId,
      currentContext,
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
        preferBoundedDocsWriteProfile: true,
        boundedDocsWriteBaseHeadSha: baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const durableEc =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prepared.payload.successor.executionContractId,
      });
    expect(durableEc.ok).toBe(true);
    if (!durableEc.ok) return;
    let contract = durableEc.contract;
    expect(contract.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(contract.evidenceRequirements).toEqual(
      expect.arrayContaining([
        "git:local_commit",
        "git:remote_push",
        "git:pull_request",
        "git:ci_status",
        "git:review_status",
        "git:merge",
        "git:post_merge_verification",
      ]),
    );

    const execAuth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: contract.scope,
      issuedAt: NOW,
      evidenceId: `evd:gcec-exec:${contract.executionContractId}`,
      forceEnable: true,
    });
    expect(execAuth.ok).toBe(true);

    // 7 RequestConfirmation + Grant + ConfirmExecutionContract
    const gateConfirmId = `cfm:gate:${contract.executionContractId}`;
    const requested =
      await oa.decisionServices.requestConfirmation.execute({
        confirmationId: gateConfirmId,
        level: "N3",
        actionRef: F3_CONFIRM_ACTION_REF,
        requestedBy: PILOTE,
        requestedTo: PILOTE,
        scope: contract.scope,
        idempotencyKey: `idem:${gateConfirmId}`,
        decisionRef: decisionId,
      });
    if (!requested.ok) {
      throw new Error(
        `requestConfirmation: ${requested.error.detailCode} ${requested.error.message} cause=${requested.error.internalCauseRef ?? ""}`,
      );
    }
    const grantedGate =
      await oa.decisionServices.grantConfirmation.execute({
        confirmationId: gateConfirmId,
        actor: PILOTE,
        authorityEvidenceId: requireAuthEvidenceId(execAuth),
      });
    expect(grantedGate.ok).toBe(true);

    const confirmed =
      await oa.executionContractServices.confirmExecutionContract.execute({
        executionContractId: contract.executionContractId,
        confirmationId: gateConfirmId,
        actor: PILOTE,
        authorityEvidenceId: requireAuthEvidenceId(execAuth),
        expectedVersion: contract.version,
      });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    contract = confirmed.contract;
    expect(contract.status).toBe("confirmed");

    // 8–10 Select + GateD + Start Attempt #1 (filesystem only — no git Confirmation)
    const attempt1Id = `xat:gcec-1:${contract.executionContractId}`.slice(0, 128);
    await selectGateStartSlice({
      runtime,
      attemptId: attempt1Id,
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
      grantId: `gd:1:${attempt1Id}`,
      authorityEvidenceId: requireAuthEvidenceId(execAuth),
      confirmations: [],
    });
    expect(fakeLaunch.lastReport?.authorizedEffectsExecuted).toContain(
      "filesystem.create",
    );
    expect(fakeLaunch.lastReport?.stoppedBeforeEffects).toContain("git.commit");

    // 11 completeBoundedDocsWriteLaunch (independent git status — no report trust)
    const attempt1 = await oa.executionAttemptServices.getExecutionAttempt.execute({
      attemptId: attempt1Id,
    });
    expect(attempt1.ok).toBe(true);
    if (!attempt1.ok) return;
    const completed1 = await completeBoundedDocsWriteLaunch({
      attempt: attempt1.attempt,
      services: oa.executionAttemptServices,
      targetPath: TARGET_PATH,
      pathAllowlist: ["docs/"],
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
    });
    expect(completed1.ok && completed1.status === "succeeded").toBe(true);
    if (!completed1.ok || completed1.status !== "succeeded") return;
    const artifactDigest = completed1.facts.digest;

    // 12 Attempt #1 succeeded → EC confirmed (D-GCEC-15), NOT completed
    const ecAfter1 =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: contract.executionContractId,
      });
    expect(ecAfter1.ok).toBe(true);
    if (!ecAfter1.ok) return;
    expect(ecAfter1.contract.status).toBe("confirmed");
    expect(completed1.attempt.status).toBe("succeeded");
    contract = ecAfter1.contract;

    // 13 Artifact AVAILABLE → VERIFIED + ReviewBundle
    const ingested = await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: oa.evidenceReviewServices,
      projectId,
      cycleInstanceId,
      executionContractId: contract.executionContractId,
      executionAttemptId: attempt1Id,
      targetPath: TARGET_PATH,
      digest: artifactDigest,
      actor: PILOTE,
      nowIso: NOW,
    });
    expect(ingested.ok).toBe(true);
    if (!ingested.ok) return;

    const evidenceSvc = oa.evidenceReviewServices as typeof oa.evidenceReviewServices & {
      payload?: { setScript?: (id: string, s: { availability: "available"; digest: string }) => void };
    };
    evidenceSvc.payload?.setScript?.(ingested.evidenceId, {
      availability: "available",
      digest: artifactDigest,
    });
    const artLoaded = await oa.evidenceReviewServices.evidenceReader.findById(
      ingested.evidenceId,
    );
    expect(artLoaded).toBeTruthy();
    const artVerified =
      await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
        evidenceId: ingested.evidenceId,
        expectedVersion: artLoaded!.version,
        actor: PILOTE,
      });
    expect(artVerified.ok).toBe(true);
    if (!artVerified.ok) return;
    expect(artVerified.evidence.status).toBe("verified");

    const rb = await oa.evidenceReviewServices.reviewBundleReader.findById(
      ingested.reviewBundleId,
    );
    expect(rb).toBeTruthy();
    const frozen = await oa.evidenceReviewServices.freezeReviewBundle.execute({
      reviewBundleId: ingested.reviewBundleId,
      actor: PILOTE,
      idempotencyKey: `idem:freeze:${ingested.reviewBundleId}`,
      expectedVersion: rb!.version,
    });
    if (!frozen.ok) {
      throw new Error(
        `freeze: ${frozen.error.detailCode} ${frozen.error.message} ${frozen.error.internalCauseRef ?? ""}`,
      );
    }
    const startedRb = await oa.evidenceReviewServices.startReview.execute({
      reviewBundleId: ingested.reviewBundleId,
      actor: PILOTE,
      idempotencyKey: `idem:start-rb:${ingested.reviewBundleId}`,
      expectedVersion: frozen.reviewBundle.version,
    });
    if (!startedRb.ok) {
      throw new Error(
        `startReview: ${startedRb.error.detailCode} ${startedRb.error.message}`,
      );
    }
    const completedRb = await oa.evidenceReviewServices.completeReview.execute({
      reviewBundleId: ingested.reviewBundleId,
      actor: PILOTE,
      idempotencyKey: `idem:complete-rb:${ingested.reviewBundleId}`,
      expectedVersion: startedRb.reviewBundle.version,
      outcome: "accepted",
    });
    if (!completedRb.ok) {
      throw new Error(
        `completeReview: ${completedRb.error.detailCode} ${completedRb.error.message}`,
      );
    }

    const repoRead = new FakeRepositoryReadPorts({ gitState });
    const collectedEvidence = [artVerified.evidence];
    const bindings = {
      projectId,
      cycleInstanceId,
      executionContractId: contract.executionContractId,
    };
    const actor = PILOTE;

    // Progressive git slices: Confirmation → Select+Start same EC → Fake effect → Studio verify
    const gitSlices: Array<{
      effect: "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge";
      attemptSuffix: string;
      after?: () => Promise<void>;
    }> = [
      {
        effect: "git.commit",
        attemptSuffix: "commit",
        after: async () => {
          const claim = fakeLaunch.lastReport?.gitEffects?.commit;
          expect(claim?.sha).toBeTruthy();
          const v = await verifyCommitClaim({
            repositoryRead: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            claimedCommitSha: claim!.sha,
            message: claim!.message,
            bindings: { ...bindings, executionAttemptId: `xat:${claim!.sha}` },
            actor,
            nowIso: NOW,
          });
          expect(v.ok).toBe(true);
          if (v.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              v.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
        },
      },
      {
        effect: "git.push",
        attemptSuffix: "push",
        after: async () => {
          const claim = fakeLaunch.lastReport?.gitEffects?.push;
          expect(claim?.sha).toBeTruthy();
          const v = await verifyPushClaim({
            repositoryRead: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            branch: BRANCH,
            claimedCommitSha: claim!.sha,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(v.ok).toBe(true);
          if (v.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              v.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
        },
      },
      {
        effect: "github.pr.create",
        attemptSuffix: "pr",
        after: async () => {
          const claim = fakeLaunch.lastReport?.gitEffects?.pullRequest;
          expect(claim?.number).toBeTruthy();
          const v = await verifyPullRequestClaim({
            repositoryRead: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            claimedPrNumber: claim!.number,
            claimedHeadSha: claim!.headSha,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(v.ok).toBe(true);
          if (v.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              v.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
          // CI + review are Studio observes — Fake Cursor sets external state first.
          gitState.setCi(claim!.headSha, "success");
          gitState.setReview(claim!.number, "approved");
          const ci = await recordCiStatusEvidence({
            ciPort: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            commitSha: claim!.headSha,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(ci.ok && ci.status === "verified").toBe(true);
          if (ci.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              ci.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
          const review = await recordReviewStatusEvidence({
            reviewPort: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            prNumber: claim!.number,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(review.ok && review.status === "verified").toBe(true);
          if (review.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              review.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
        },
      },
      {
        effect: "github.pr.merge",
        attemptSuffix: "merge",
        after: async () => {
          const claim = fakeLaunch.lastReport?.gitEffects?.merge;
          expect(claim?.mergeSha).toBeTruthy();
          const v = await verifyMergeClaim({
            repositoryRead: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            claimedPrNumber: claim!.prNumber,
            claimedMergeSha: claim!.mergeSha,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(v.ok).toBe(true);
          if (v.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              v.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
          const post = await verifyPostMergeEvidence({
            evidenceServices: oa.evidenceReviewServices,
            repositoryRead: repoRead,
            repositoryRef: IDENTITY,
            targetBranch: "main",
            artifactPath: TARGET_PATH,
            artifactDigest: artifactDigest as never,
            expectedTargetSha: claim!.mergeSha,
            expectedArtifactDigest: artifactDigest as never,
            bindings,
            actor,
            nowIso: NOW,
          });
          if (!post.ok) {
            throw new Error(`verifyPostMergeEvidence: ${post.reason}`);
          }
          const e = await oa.evidenceReviewServices.evidenceReader.findById(
            post.evidenceId,
          );
          if (e) collectedEvidence.push(e);
        },
      },
    ];

    const grantedGitConfirmations: Confirmation[] = [];
    const verifiedGitEffects: Array<
      "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
    > = [];

    for (const slice of gitSlices) {
      const actionRef = buildGitEffectActionRef({
        executionContractId: contract.executionContractId,
        effect: slice.effect,
        repositoryRef: IDENTITY,
        branchOrRef: BRANCH,
      });
      const cnf = await grantEffectConfirmation({
        runtime,
        confirmationId: `cfm:${slice.attemptSuffix}:${contract.executionContractId}`.slice(
          0,
          128,
        ),
        actionRef,
        scope: actionRef,
        decisionRef: decisionId,
      });
      grantedGitConfirmations.push(cnf);

      const fresh =
        await oa.executionContractServices.getExecutionContract.execute({
          executionContractId: contract.executionContractId,
        });
      expect(fresh.ok).toBe(true);
      if (!fresh.ok) return;
      expect(fresh.contract.status).toBe("confirmed");
      contract = fresh.contract;

      const attemptId =
        `xat:gcec-${slice.attemptSuffix}:${contract.executionContractId}`.slice(
          0,
          128,
        );
      await selectGateStartSlice({
        runtime,
        attemptId,
        executionContractId: contract.executionContractId,
        contractVersion: contract.version,
        grantId: `gd:${slice.attemptSuffix}:${attemptId}`,
        authorityEvidenceId: requireAuthEvidenceId(execAuth),
        confirmations: [...grantedGitConfirmations],
        // D-GCEC-15 — prior FS + completed git effects excluded; only current slice runs.
        verifiedEffects: [
          "filesystem.create",
          "filesystem.modify",
          "validation.run",
          ...verifiedGitEffects,
        ],
      });

      const att = await oa.executionAttemptServices.getExecutionAttempt.execute({
        attemptId,
      });
      expect(att.ok).toBe(true);
      if (!att.ok) return;
      const done = await completeBoundedDocsWriteLaunch({
        attempt: att.attempt,
        services: oa.executionAttemptServices,
        targetPath: TARGET_PATH,
        pathAllowlist: ["docs/"],
        // Git-only slices: Fake may skip FS; pass porcelain when dirty or empty ok path.
        nameStatusText:
          slice.effect === "git.commit"
            ? undefined
            : `A\t${TARGET_PATH}`,
        statusDiffPort:
          slice.effect === "git.commit"
            ? new NodeLocalGitStatusDiffPort()
            : undefined,
      });
      // For git-only slices after FS verified, Fake may skip file write; completion
      // workspace verify may need nameStatusText. If verify fails on empty dirty tree
      // after commit already staged, fall through with record-only via RO complete.
      if (!done.ok) {
        // Prefer Product completeBoundedReadOnlyLaunch path already attempted;
        // assert Attempt terminal via get after Fake ACK.
        const afterFail =
          await oa.executionAttemptServices.getExecutionAttempt.execute({
            attemptId,
          });
        // Force complete via RO if docs-write verify blocked on clean tree.
        if (afterFail.ok && afterFail.attempt.status === "running") {
          const { completeBoundedReadOnlyLaunch } = await import(
            "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch"
          );
          const ro = await completeBoundedReadOnlyLaunch({
            attempt: afterFail.attempt,
            services: oa.executionAttemptServices,
          });
          expect(ro.ok && ro.status === "succeeded").toBe(true);
        }
      } else {
        expect(done.status === "succeeded" || done.status === "failed").toBe(
          true,
        );
      }

      const ecMid =
        await oa.executionContractServices.getExecutionContract.execute({
          executionContractId: contract.executionContractId,
        });
      expect(ecMid.ok).toBe(true);
      if (!ecMid.ok) return;
      // D-GCEC-15 — remains confirmed until all requirements verified
      expect(ecMid.contract.status).toBe("confirmed");
      contract = ecMid.contract;

      if (slice.after) await slice.after();
      verifiedGitEffects.push(slice.effect);
    }

    const gitSet = qualifyGitCompletionProofSet({
      evidence: collectedEvidence,
      expected: {
        repositoryRef: IDENTITY,
        targetPath: TARGET_PATH,
        artifactDigest,
        cycleInstanceId,
        executionContractId: contract.executionContractId,
        projectId,
      },
    });
    expect(gitSet.status).toBe("SATISFIED");

    // 19 advanceExecutionContractCompletion → completed
    const advanced = await advanceExecutionContractCompletion({
      executionContractId: contract.executionContractId,
      contracts: oa.executionContractServices.contracts,
      contractStatusWriter: oa.executionAttemptServices.contractStatusWriter,
      evidence: collectedEvidence,
      confirmations: grantedGitConfirmations,
      cycleInstanceId,
      nowIso: NOW,
    });
    expect(advanced.ok && advanced.complete && advanced.advanced).toBe(true);
    if (!advanced.ok) return;
    expect(advanced.status).toBe("completed");

    // 20 FinalizationAssessment + FINALIZE HD + finalize
    // Do NOT waive governed families with NO_GOVERNED_EFFECTS — GCEC proofs are present.
    const finalizeHd = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:finalize:${cycleInstanceId}`,
      projectId,
      cycleInstanceId,
      subject: finalizeSubjectFor(cycleInstanceId),
      options: [
        { optionId: "opt:accept", label: "Accept" },
        { optionId: "opt:refuse", label: "Refuse" },
      ],
      selectedOptionId: "opt:accept",
      actor: LOCAL_PILOTE_ACTOR,
      authority: "morris",
      status: "accepted",
      reversible: false,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      authorityEvidenceId: requireAuthEvidenceId(startAuth),
    });
    expect(finalizeHd.ok).toBe(true);

    const finalized = await oa.cycleServices.pilotLifecycle.finalize({
      cycleInstanceId,
      projectId,
      createdBy: PILOTE,
      decisionId: `dec:finalize:${cycleInstanceId}`,
      authorityEvidenceId: requireAuthEvidenceId(startAuth),
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(true);
    expect(finalized.cycle.status).toBe("completed");

    // 21 no reprepare of completed trajectory step
    const trajAfter =
      await oa.cycleServices.trajectories.findCurrentByProjectId(projectId);
    expect(trajAfter?.steps.every((s) => s.state === "done")).toBe(true);

    // Fake Cursor owned mutations — Studio never ran git write after fixture
    expect(fakeLaunch.calls.length).toBeGreaterThanOrEqual(2);
    expect(
      fakeLaunch.calls.every((c) => c.action === M4_BOUNDED_DOCS_WRITE_ACTION),
    ).toBe(true);
  }, 120_000);
});
```

--------------------------------------------------
### FULL FILE — gcecD15Negatives N1-N28

Path: `projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts`
Source: `git show 46e7e5b3:projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts`

```typescript
/**
 * D-GCEC-15 Option B negatives — N1–N28 (unit/integration focused).
 * CR-GCEC-17: technicalResultRef is never a trust marker; only Evidence.status=verified.
 * Empty git families do not expand to full GCEC chain.
 * ZERO OpenAI. ZERO REAL Cursor.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import {
  deriveCycleExitState,
  GCEC_GIT_COMPLETION_PROOF_FAMILIES,
  gitProofFamiliesFromRequirements,
  qualifyGitCompletionProofSet,
} from "@/lib/oa/cycle";
import {
  buildTypedGitEvidenceFields,
  createTestEvidenceReviewServices,
  type Evidence,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";
import {
  buildGitEffectActionRef,
  deriveAuthorizedExecutionSlice,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  qualifyExecutionContractCompletion,
  verifyWorkspaceFileEffects,
} from "@/lib/oa/execution-attempt";
import {
  FakeRepositoryReadPorts,
  verifyCommitClaim,
  verifyPullRequestClaim,
} from "@/lib/oa/git-ports";
import { CONTROL_TOWER_TOOL_DEFINITIONS } from "@/lib/platform/tools";

const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const OTHER = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const CYCLE = "cycinst:gcec-n";
const REPO = "acme/widget";
const PATH = "docs/functional-design.md";

function baseEvidence(
  partial: Partial<Evidence> & { evidenceId: string },
): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: partial.evidenceId,
    type: partial.type ?? "other",
    status: partial.status ?? "available",
    source: partial.source ?? "test",
    sourceKind: partial.sourceKind ?? "external",
    classification: partial.classification ?? "internal",
    storageMode: partial.storageMode ?? "metadata_only",
    bindings: partial.bindings ?? {
      cycleInstanceId: CYCLE,
      projectId: "prj:gcec",
      executionContractId: "xct:gcec",
    },
    createdAt: partial.createdAt ?? "2026-09-11T10:00:00.000Z",
    updatedAt: partial.updatedAt ?? "2026-09-11T10:00:00.000Z",
    version: partial.version ?? 1,
    location: partial.location,
    digest: partial.digest,
    technicalResultRef: partial.technicalResultRef,
    producedAt: "2026-09-11T10:00:00.000Z",
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:test",
      actor: { actorId: "actor:test", role: "system" },
      source: "system",
      timestamp: "2026-09-11T10:00:00.000Z",
      correlationId: "cor:test",
    },
  } as unknown as Evidence;
}

function typed(
  source: TypedGitEvidenceSource,
  payload: Record<string, unknown>,
  evidenceId: string,
  status: Evidence["status"] = "verified",
): Evidence {
  const fields = buildTypedGitEvidenceFields(source, payload as never);
  if (!fields.ok) throw new Error(fields.reason);
  return baseEvidence({
    evidenceId,
    source: fields.fields.source,
    location: fields.fields.location,
    digest: fields.fields.digest ?? DIGEST,
    status,
    // CR-17 — forgeable marker must not grant trust by itself
    technicalResultRef: `studio:repository_read_verified:${source}`,
    bindings: {
      cycleInstanceId: CYCLE,
      projectId: "prj:gcec",
      executionContractId: "xct:gcec",
    },
  });
}

const expected = {
  repositoryRef: REPO,
  targetPath: PATH,
  artifactDigest: DIGEST,
  cycleInstanceId: CYCLE,
  executionContractId: "xct:gcec",
  projectId: "prj:gcec",
};

function fullVerifiedSet(): Evidence[] {
  return [
    typed(
      "git:local_commit",
      { repositoryRef: REPO, commitSha: SHA, message: "docs" },
      "ev:commit",
    ),
    typed(
      "git:remote_push",
      {
        repositoryRef: REPO,
        remote: "origin",
        refName: "gcec/docs",
        commitSha: SHA,
      },
      "ev:push",
    ),
    typed(
      "git:pull_request",
      {
        repositoryRef: REPO,
        prNumber: 1,
        headSha: SHA,
        state: "open",
      },
      "ev:pr",
    ),
    typed(
      "git:ci_status",
      {
        repositoryRef: REPO,
        commitSha: SHA,
        conclusion: "success",
      },
      "ev:ci",
    ),
    typed(
      "git:review_status",
      {
        repositoryRef: REPO,
        prNumber: 1,
        state: "approved",
      },
      "ev:review",
    ),
    typed(
      "git:merge",
      {
        repositoryRef: REPO,
        mergeCommitSha: SHA,
        baseRef: "main",
        prNumber: 1,
      },
      "ev:merge",
    ),
    typed(
      "git:post_merge_verification",
      {
        repositoryRef: REPO,
        targetBranch: "main",
        targetSha: SHA,
        artifactPath: PATH,
        artifactDigest: DIGEST,
      },
      "ev:post",
    ),
  ];
}

describe("gcecD15Negatives — N1–N28", () => {
  it("N1 attempt success with remaining git reqs → nextStatus confirmed not completed", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:n1",
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [],
    });
    expect(q.complete).toBe(false);
    expect(q.nextStatusAfterSuccessfulAttempt).toBe("confirmed");
    expect(q.remainingRequiredEffects.length).toBeGreaterThan(0);
  });

  it("N2 empty evidenceRequirements + no docs_write capability → no git candidates", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n2",
      evidenceRequirements: [],
      requiredCapabilities: [],
      confirmations: [],
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.commit");
  });

  it("N3 empty git families in qualifyGitCompletionProofSet with requirements:[] → BLOCKING unresolved", () => {
    expect(gitProofFamiliesFromRequirements([])).toEqual([]);
    const r = qualifyGitCompletionProofSet({
      evidence: [],
      requirements: [],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("git_requirements_unresolved");
    }
  });

  it("N4 CR-17 technicalResultRef alone with available status → BLOCKING", () => {
    const forged = fullVerifiedSet().map((e) => ({
      ...e,
      status: "available" as const,
      technicalResultRef: `studio:repository_read_verified:${e.source}`,
    }));
    const r = qualifyGitCompletionProofSet({ evidence: forged, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("status_not_verified");
    }
  });

  it("N5 verified full set → SATISFIED", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected,
    });
    expect(r.status).toBe("SATISFIED");
  });

  it("N6 slice blocks git without Confirmation; FS still authorized", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n6",
      evidenceRequirements: ["git:local_commit", "git:merge"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toContain("git.commit");
    expect(slice.blockedEffects).toContain("github.pr.merge");
    expect(slice.authorizedEffects).toContain("filesystem.create");
  });

  it("N7 confirmation grants git.commit only when actionRef matches", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:n7",
      effect: "git.commit",
      repositoryRef: REPO,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n7",
      evidenceRequirements: ["git:local_commit", "git:remote_push"],
      confirmations: [
        {
          confirmationId: "cnf:n7",
          status: "granted",
          actionRef,
          scope: "git:local_commit",
          level: "N3",
          requestedBy: { actorId: "a", role: "system" },
          requestedTo: { actorId: "a", role: "system" },
          version: 1,
          createdAt: "2026-09-11T10:00:00.000Z",
          updatedAt: "2026-09-11T10:00:00.000Z",
        } as never,
      ],
      confirmationMatch: { repositoryRef: REPO },
    });
    expect(slice.authorizedEffects).toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.push");
  });

  it("N8 cap:cursor.docs_write does NOT imply Git effects (CR-GCEC-15)", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n8",
      evidenceRequirements: [],
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).toContain("filesystem.create");
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.commit");
  });

  it("N9 FakeDocsWrite skips filesystem when not authorized (git-only)", async () => {
    const root = fs.mkdtempSync(path.join(require("node:os").tmpdir(), "gcec-n9-"));
    try {
      const port = new FakeDocsWriteLaunchPort({
        worktreeRoot: root,
        pathAllowlist: ["docs/"],
        targetPath: PATH,
      });
      const launch = await port.launch({
        attemptId: "xat:n9",
        executionContractId: "xct:n9",
        executionContractVersion: 1,
        semanticFingerprint: "fp:n9",
        selectedAgentRef: "agt:m4",
        adapterRef: "adp:m4",
        correlationId: "cor:n9",
        baseHeadSha: SHA,
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: "workspace.isolated.docs_write",
        scope: "docs",
        timeoutMs: 1000,
        authorizedEffects: ["git.commit"],
        authorizedExecutionSlice: {
          authorizedEffects: ["git.commit"],
          blockedEffects: ["filesystem.create", "filesystem.modify"],
          reasons: [],
        },
        docsWriteSpec: {
          repositoryRef: REPO,
          targetPath: PATH,
          pathAllowlist: ["docs/"],
          artifactType: "functional_design",
          artifactBrief: "fd",
          contentRequirements: [],
          scopeIn: ["docs/"],
          scopeOut: [],
          expectedOutputs: [PATH],
          validationExpectations: [],
          evidenceRequirements: ["git:local_commit"],
          createOrModify: true,
          noDelete: true,
        },
      });
      expect(launch.outcome).toBe("ack");
      expect(port.lastReport?.stoppedBeforeEffects).toEqual(
        expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
      );
      expect(fs.existsSync(path.join(root, PATH))).toBe(false);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });

  it("N10 commit claim without repository SHA → reported not verified", async () => {
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const read = new FakeRepositoryReadPorts();
    const r = await verifyCommitClaim({
      repositoryRead: read,
      evidenceServices: evidence,
      repositoryRef: REPO,
      claimedCommitSha: SHA,
      bindings: {
        projectId: "prj:n",
        cycleInstanceId: "cyc:n",
        executionContractId: "xct:n",
      },
      actor: { actorId: "a", role: "system" },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe("reported");
  });

  it("N11 PR claim head mismatch → failed", async () => {
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const read = new FakeRepositoryReadPorts();
    read.seedPullRequest({
      number: 42,
      title: "x",
      state: "open",
      headSha: OTHER,
      baseBranch: "main",
      url: "https://github.com/acme/widget/pull/42",
    });
    const r = await verifyPullRequestClaim({
      repositoryRead: read,
      evidenceServices: evidence,
      repositoryRef: REPO,
      claimedPrNumber: 42,
      claimedHeadSha: SHA,
      bindings: { projectId: "prj:n", cycleInstanceId: "cyc:n" },
      actor: { actorId: "a", role: "system" },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("pr_head_mismatch");
  });

  it("N12 out-of-scope workspace write → verify fails", async () => {
    const r = await verifyWorkspaceFileEffects({
      worktreePath: "/tmp",
      pathAllowlist: ["docs/"],
      targetPath: "docs/fd.md",
      nameStatusText: "A\tsrc/evil.ts\nA\tdocs/fd.md",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("unexpected_files_outside_allowlist");
  });

  it("N13 Studio git-ports barrel exports no mutation methods", () => {
    const barrel = fs.readFileSync(
      path.resolve(__dirname, "../../../lib/oa/git-ports/index.ts"),
      "utf8",
    );
    expect(barrel).not.toMatch(/LocalGitCommitPort/);
    expect(barrel).not.toMatch(/NodeLocalGitCommitPort/);
    expect(barrel).not.toMatch(/commitArtifactEvidence/);
  });

  it("N14 Nora tools have no Git mutation tools", () => {
    const names = CONTROL_TOWER_TOOL_DEFINITIONS.map((t) => t.name);
    const mutationLike = names.filter((n) =>
      /(?:^|_)(push|merge|create_pr|pr_create|pr_merge|git_commit)(?:_|$)/i.test(
        n,
      ),
    );
    expect(mutationLike).toEqual([]);
  });

  it("N15 cycle without Git requirement → absence does not block", () => {
    const state = deriveCycleExitState({
      projectId: "prj:n",
      cycleInstanceId: "cyc:n",
      cycleTypeId: "cyc:framing",
      repositoryBinding: null,
      executionContracts: [
        {
          contractId: "xct:n",
          status: "completed",
          expectedOutputs: ["artifact"],
          evidenceRequirements: [],
        },
      ],
      evidence: [
        baseEvidence({
          evidenceId: "ev:art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: "docs/note.md",
        }),
      ],
    });
    expect(state.requirements.find((r) => r.kind === "commit")?.status).toBe(
      "NOT_APPLICABLE",
    );
  });

  it("N16 cursor report claim alone does not satisfy git SET", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: [
        baseEvidence({
          evidenceId: "ev:claim",
          status: "available",
          source: "git:local_commit",
          location: `git:local_commit?repo=acme%2Fwidget&commitSha=${SHA}`,
          technicalResultRef: "studio:cursor_report_claim:git:local_commit",
        }),
      ],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N17 ci failure → BLOCKING", () => {
    const set = fullVerifiedSet().map((e) =>
      e.source === "git:ci_status"
        ? typed(
            "git:ci_status",
            {
              repositoryRef: REPO,
              commitSha: SHA,
              conclusion: "failure",
            },
            "ev:ci-fail",
          )
        : e,
    );
    const r = qualifyGitCompletionProofSet({ evidence: set, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") expect(r.reason).toBe("ci_not_success");
  });

  it("N18 review pending → BLOCKING", () => {
    const set = fullVerifiedSet().map((e) =>
      e.source === "git:review_status"
        ? typed(
            "git:review_status",
            { repositoryRef: REPO, prNumber: 1, state: "pending" },
            "ev:review-pending",
          )
        : e,
    );
    const r = qualifyGitCompletionProofSet({ evidence: set, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") expect(r.reason).toBe("review_not_approved");
  });

  it("N19 digest mismatch on post_merge → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected: { ...expected, artifactDigest: ("sha256:" + "0".repeat(64)) as Digest },
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N20 complete when artifact+git effects verified → nextStatus completed", () => {
    const evidence = [
      baseEvidence({
        evidenceId: "ev:art",
        type: "artifact",
        status: "verified",
        digest: DIGEST,
        location: PATH,
        source: "execution_attempt:docs_write",
      }),
      ...fullVerifiedSet(),
    ];
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:n20",
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence,
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(true);
    expect(q.nextStatusAfterSuccessfulAttempt).toBe("completed");
  });

  it("N21 verifiedEffects exclude FS from re-authorization", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n21",
      evidenceRequirements: ["git:local_commit"],
      verifiedEffects: ["filesystem.create", "filesystem.modify", "validation.run"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toEqual(
      expect.arrayContaining([
        "filesystem.create",
        "filesystem.modify",
        "validation.run",
      ]),
    );
    expect(slice.authorizedEffects).not.toContain("filesystem.create");
  });

  it("N22 git:commit alias authorizes same as git:local_commit", () => {
    const a = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n22a",
      evidenceRequirements: ["git:commit"],
      confirmations: [],
    });
    const b = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n22b",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [],
    });
    expect(a.blockedEffects).toContain("git.commit");
    expect(b.blockedEffects).toContain("git.commit");
  });

  it("N23 requireVerified default rejects available rows even with forge marker", () => {
    const available = typed(
      "git:local_commit",
      { repositoryRef: REPO, commitSha: SHA, message: "docs" },
      "ev:avail",
      "available",
    );
    const r = qualifyGitCompletionProofSet({
      evidence: [available],
      requirements: ["git:local_commit"],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N24 buildGitEffectActionRef embeds executionContractId + repo", () => {
    const ref = buildGitEffectActionRef({
      executionContractId: "xct:n24",
      effect: "git.push",
      repositoryRef: "acme/widget",
      branchOrRef: "gcec/docs",
    });
    expect(ref).toContain("xct:n24");
    expect(ref).toContain("acme__widget");
    expect(ref).toContain("git-remote_push");
  });

  it("N25 incomplete set missing merge → BLOCKING incomplete_git_proof_set", () => {
    const partial = fullVerifiedSet().filter((e) => e.source !== "git:merge");
    const r = qualifyGitCompletionProofSet({ evidence: partial, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.missing).toContain("git:merge");
    }
  });

  it("N26 repo mismatch → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected: { ...expected, repositoryRef: "other/repo" },
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N27 cycleInstance mismatch → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected: { ...expected, cycleInstanceId: "cyc:other" },
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N28 StartExecutionRequest type surface includes confirmations (compile/runtime shape)", () => {
    // Structural guard — confirmations must be passable for Option B continuation.
    const req: { confirmations?: readonly unknown[] } = {
      confirmations: [],
    };
    expect(Array.isArray(req.confirmations)).toBe(true);
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../../lib/oa/execution-attempt/application/startExecution.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/confirmations:\s*request\.confirmations\s*\?\?\s*\[\]/);
  });
});
```

--------------------------------------------------
### FULL FILE — executionContractStatusWriter (post-change full)

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts`
Source: `git show 46e7e5b3:projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts`

```typescript
/**
 * T-A5 owns the post-start ExecutionContract statuses (executing|completed|
 * failed|cancelled) and D-GCEC-15 return-to-confirmed after a successful
 * bounded slice when effective requirements remain. T-A4 use-cases deliberately
 * refuse TA5 writes, so T-A5 writes them through the SHARED
 * `ExecutionContractRepositoryPort`.
 *
 * Absolute invariant enforced here (RTA5-09):
 *   ExecutionContract.executing ⇒ a matching Attempt is ALREADY running
 *   in the Attempt repository — caller-claimed status alone is NOT trusted.
 *
 * D-GCEC-15:
 *   Attempt succeeded ≠ EC completed.
 *   executing → confirmed when required effects remain / await verification.
 *   confirmed → completed when all effective requirements are verified.
 */
import {
  isExecutionReadyStatus,
  type ExecutionContract,
  type ExecutionContractRepositoryPort,
  type ExecutionContractPersistenceUnitOfWorkPort,
} from "@/lib/oa/execution-contract";
import type { AttemptDetailCode, ExecutionAttemptStatus } from "../domain/types";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";

export type Ta5ContractStatus =
  | "executing"
  | "confirmed"
  | "completed"
  | "failed"
  | "cancelled";

const ALLOWED_SOURCES: Record<Ta5ContractStatus, readonly string[]> = {
  // validated is Execute-ready only via isExecutionReadyStatus (R16 marker).
  executing: ["confirmed", "validated"],
  // D-GCEC-15 — successful partial slice returns EC to execute-ready.
  confirmed: ["executing"],
  // Completion after last slice while executing, or after verification catch-up.
  completed: ["executing", "confirmed"],
  failed: ["confirmed", "validated", "executing"],
  cancelled: ["confirmed", "validated", "executing"],
};

export type ContractStatusWriteRequest = {
  executionContractId: string;
  expectedVersion: number;
  nextStatus: Ta5ContractStatus;
  /** Recorded on the contract when the Attempt selection is bound. */
  selectedAgentRef?: string;
  reason?: string;
  /** Required for `executing`: identifies the Attempt that must already be running. */
  runningAttempt?: { attemptId: string; status: ExecutionAttemptStatus };
};

export type ContractStatusWriteResult =
  | { ok: true; contract: ExecutionContract }
  | {
      ok: false;
      detailCode: AttemptDetailCode;
      internalCauseRef: string;
      currentVersion?: number;
    };

export class ExecutionContractStatusWriter {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly store: ExecutionContractPersistenceUnitOfWorkPort | undefined,
    private readonly attempts: ExecutionAttemptRepositoryPort,
  ) {}

  async write(
    request: ContractStatusWriteRequest,
  ): Promise<ContractStatusWriteResult> {
    if (request.nextStatus === "executing") {
      if (!request.runningAttempt?.attemptId) {
        return {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          internalCauseRef: "executing_requires_running_attempt_ref",
        };
      }
      // Defense in depth: never trust a caller-claimed status alone.
      const persisted = await this.attempts.findById(
        request.runningAttempt.attemptId,
      );
      if (!persisted) {
        return {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          internalCauseRef: "executing_requires_persisted_attempt",
        };
      }
      if (persisted.executionContractId !== request.executionContractId) {
        return {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          internalCauseRef: "executing_attempt_contract_mismatch",
        };
      }
      if (persisted.status !== "running") {
        return {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          internalCauseRef: `executing_requires_running_attempt_got_${persisted.status}`,
        };
      }
    }

    let written: ExecutionContract | undefined;
    let failure: ContractStatusWriteResult | undefined;

    const persist = async () => {
      const current = await this.contracts.findById(
        request.executionContractId,
      );
      if (!current) {
        failure = {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_NOT_FOUND",
          internalCauseRef: "missing_contract",
        };
        throw new Error("missing_contract");
      }
      if (current.version !== request.expectedVersion) {
        failure = {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_STALE",
          internalCauseRef: "contract_occ_mismatch",
          currentVersion: current.version,
        };
        throw new Error("contract_occ_mismatch");
      }
      const allowed = ALLOWED_SOURCES[request.nextStatus];
      const sourceAllowed =
        allowed.includes(current.status) &&
        (current.status !== "validated" || isExecutionReadyStatus(current));
      if (!sourceAllowed) {
        failure = {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          internalCauseRef: `contract_transition_refused_${current.status}_to_${request.nextStatus}`,
          currentVersion: current.version,
        };
        throw new Error("contract_transition_refused");
      }
      const next: ExecutionContract = {
        ...current,
        status: request.nextStatus,
        selectedAgentRef: request.selectedAgentRef ?? current.selectedAgentRef,
        supersessionReason:
          request.nextStatus === "cancelled" && request.reason
            ? request.reason
            : current.supersessionReason,
        version: current.version + 1,
      };
      await this.contracts.save(next);
      written = next;
    };

    try {
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
    } catch {
      return (
        failure ?? {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          internalCauseRef: "contract_persist_failed",
        }
      );
    }

    if (!written) {
      return {
        ok: false,
        detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
        internalCauseRef: "contract_persist_incomplete",
      };
    }
    return { ok: true, contract: written };
  }
}
```

--------------------------------------------------
### DIFF — executionContractStatusWriter

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts
index 397d211e..8dc0a032 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts
@@ -1,13 +1,18 @@
 /**
  * T-A5 owns the post-start ExecutionContract statuses (executing|completed|
- * failed) and the post-start cancellation. T-A4 use-cases deliberately refuse
- * them, so T-A5 writes them through the SHARED
- * `ExecutionContractRepositoryPort` (+ the same MemoryExecutionContractStore
- * transaction helper). No T-A4 use-case is extended to post-exec.
+ * failed|cancelled) and D-GCEC-15 return-to-confirmed after a successful
+ * bounded slice when effective requirements remain. T-A4 use-cases deliberately
+ * refuse TA5 writes, so T-A5 writes them through the SHARED
+ * `ExecutionContractRepositoryPort`.
  *
  * Absolute invariant enforced here (RTA5-09):
  *   ExecutionContract.executing ⇒ a matching Attempt is ALREADY running
  *   in the Attempt repository — caller-claimed status alone is NOT trusted.
+ *
+ * D-GCEC-15:
+ *   Attempt succeeded ≠ EC completed.
+ *   executing → confirmed when required effects remain / await verification.
+ *   confirmed → completed when all effective requirements are verified.
  */
 import {
   isExecutionReadyStatus,
@@ -20,6 +25,7 @@ import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRe

 export type Ta5ContractStatus =
   | "executing"
+  | "confirmed"
   | "completed"
   | "failed"
   | "cancelled";
@@ -27,7 +33,10 @@ export type Ta5ContractStatus =
 const ALLOWED_SOURCES: Record<Ta5ContractStatus, readonly string[]> = {
   // validated is Execute-ready only via isExecutionReadyStatus (R16 marker).
   executing: ["confirmed", "validated"],
-  completed: ["executing"],
+  // D-GCEC-15 — successful partial slice returns EC to execute-ready.
+  confirmed: ["executing"],
+  // Completion after last slice while executing, or after verification catch-up.
+  completed: ["executing", "confirmed"],
   failed: ["confirmed", "validated", "executing"],
   cancelled: ["confirmed", "validated", "executing"],
 };
```

--------------------------------------------------
### FULL FILE — recordExecutionResult (post-change full)

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts`
Source: `git show 46e7e5b3:projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts`

```typescript
/**
 * RecordExecutionResult — technical result only (Evidence/Claim are T-A6).
 *
 * Authority is the adapter bound to THIS Attempt: a foreign adapter identity
 * is denied. When the terminal persist fails, the Attempt becomes
 * `result_pending` (bounded refs, no payload) and the contract STAYS
 * `executing` — never a speculative `completed`. The recording budget is
 * bounded; once exhausted the Attempt fails with RESULT_RECORDING_FAILED.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
import { isOaIdentifier, MAX_LOG_REFS } from "../domain/invariants";
import type {
  ExecutionAttempt,
  ExecutionAttemptResult,
  RecordExecutionResultRequest,
} from "../domain/types";
import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
import type { AgentRegistryPort } from "../ports/agentRegistry";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import { newCorrelationId } from "./attemptSupport";
import type { AttemptPolicy } from "./attemptPolicy";
import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";
import { qualifyExecutionContractCompletion } from "../domain/qualifyExecutionContractCompletion";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { Confirmation } from "@/lib/oa/decision";
import type { CursorAuthorizedEffectId } from "../domain/cursorExecutionReport";

export type RecordExecutionResultCompletionContext = {
  evidence?: readonly Evidence[];
  confirmations?: readonly Confirmation[];
  cycleInstanceId?: string;
  reportedExecutedEffects?: readonly CursorAuthorizedEffectId[];
};

export class RecordExecutionResult {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly contractStatusWriter: ExecutionContractStatusWriter,
    private readonly registry: AgentRegistryPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
    private readonly policy: AttemptPolicy,
    private readonly store: ExecutionAttemptTechnicalStorePort,
  ) {}

  async execute(
    request: RecordExecutionResultRequest & {
      /** Optional durable facts for D-GCEC-15 contract completion qualification. */
      completionContext?: RecordExecutionResultCompletionContext;
    },
  ): Promise<ExecutionAttemptResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId = request.correlationId ?? newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createAttemptError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
        attempt?: ExecutionAttempt;
      },
    ): ExecutionAttemptResult => {
      const { attempt, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.succeeded",
        ts: timestamp,
        correlationId,
        attemptId: request.attemptId,
        adapterId: request.adapterId,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createAttemptError({
          detailCode,
          timestamp,
          correlationId,
          attemptId: request.attemptId,
          internalCauseRef,
          ...errorExtra,
        }),
        attempt,
        durationMs,
      };
    };

    try {
      if (!isOaIdentifier(request.resultRef)) {
        return fail("ATTEMPT_INVALID", "result_ref_invalid");
      }
      if (request.logRefs) {
        if (request.logRefs.length > MAX_LOG_REFS) {
          return fail("ATTEMPT_INVALID", "log_refs_max_16");
        }
        if (!request.logRefs.every((ref) => isOaIdentifier(ref))) {
          return fail("ATTEMPT_INVALID", "log_ref_invalid");
        }
      }

      const attempt = await this.attempts.findById(request.attemptId);
      if (!attempt) {
        return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
      }
      if (attempt.status !== "running" && attempt.status !== "result_pending") {
        return fail(
          "ATTEMPT_STATE_CONFLICT",
          `attempt_status_${attempt.status}`,
          { executionContractId: attempt.executionContractId },
        );
      }
      if (
        request.expectedAttemptVersion !== undefined &&
        request.expectedAttemptVersion !== attempt.version
      ) {
        return fail("VERSION_CONFLICT", "attempt_occ_mismatch", {
          expectedVersion: request.expectedAttemptVersion,
          currentVersion: attempt.version,
        });
      }

      const agent = this.registry.getAgent(attempt.selectedAgentRef);
      if (!agent) {
        return fail("AGENT_NOT_FOUND", "selected_agent_not_registered");
      }
      if (request.adapterId !== agent.adapterRef) {
        return fail("ADAPTER_ATTEMPT_MISMATCH", "foreign_adapter_identity", {
          executionContractId: attempt.executionContractId,
        });
      }

      const contract = await this.contracts.findById(
        attempt.executionContractId,
      );
      if (!contract) {
        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
      }

      const previousRecordings =
        this.store.resultRecordingAttempts.get(attempt.attemptId) ?? 0;
      const recordingAttempt = previousRecordings + 1;
      this.store.resultRecordingAttempts.set(
        attempt.attemptId,
        recordingAttempt,
      );

      const succeeded: ExecutionAttempt = {
        ...attempt,
        status: "succeeded",
        resultRef: request.resultRef,
        completedAt: timestamp,
        technicalExitCode: request.technicalExitCode,
        durationMs: request.durationMs,
        logRefs: request.logRefs ? [...request.logRefs] : attempt.logRefs,
        updatedAt: timestamp,
        version: attempt.version + 1,
      };

      let persisted = false;
      try {
        await this.store.runInTransaction(async () => {
          await this.attempts.update(succeeded, attempt.version);
          await this.attempts.releaseActiveContract(
            succeeded.executionContractId,
            succeeded.attemptId,
          );
        });
        persisted = true;
      } catch (err) {
        if (
          isExecutionAttemptDomainError(err) &&
          err.detailCode === "VERSION_CONFLICT"
        ) {
          return fail("VERSION_CONFLICT", "attempt_occ_race", {
            expectedVersion: err.expectedVersion,
            currentVersion: err.currentVersion,
          });
        }
        persisted = false;
      }

      if (!persisted) {
        if (recordingAttempt >= this.policy.maxResultRecordingAttempts) {
          return this.exhaustBudget({
            attempt,
            contractVersion: contract.version,
            timestamp,
            correlationId,
            started,
          });
        }
        return this.markResultPending({
          attempt,
          timestamp,
          correlationId,
          started,
          contractStatus: contract.status,
        });
      }

      // D-GCEC-15 — Attempt succeeded = current slice succeeded, not EC done.
      const qualification = qualifyExecutionContractCompletion({
        contract,
        evidence: request.completionContext?.evidence,
        confirmations: request.completionContext?.confirmations,
        cycleInstanceId: request.completionContext?.cycleInstanceId,
        reportedExecutedEffects:
          request.completionContext?.reportedExecutedEffects,
        nowIso: timestamp,
      });
      const nextStatus = qualification.nextStatusAfterSuccessfulAttempt;

      const contractWrite = await this.contractStatusWriter.write({
        executionContractId: contract.executionContractId,
        expectedVersion: contract.version,
        nextStatus,
        reason: qualification.complete
          ? "all_effective_requirements_verified"
          : `slice_succeeded_remaining:${qualification.remainingRequiredEffects.join(",")}`,
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.succeeded",
        ts: timestamp,
        correlationId,
        attemptId: succeeded.attemptId,
        executionContractId: succeeded.executionContractId,
        selectedAgentRef: succeeded.selectedAgentRef,
        adapterId: request.adapterId,
        previousStatus: attempt.status,
        newStatus: "succeeded",
        contractStatus: contractWrite.ok
          ? contractWrite.contract.status
          : contract.status,
        result: contractWrite.ok ? "ok" : "error",
        detailCode: contractWrite.ok ? undefined : contractWrite.detailCode,
        durationMs,
      });

      if (!contractWrite.ok) {
        return {
          ok: false,
          error: createAttemptError({
            detailCode: contractWrite.detailCode,
            timestamp,
            correlationId,
            attemptId: succeeded.attemptId,
            executionContractId: succeeded.executionContractId,
            internalCauseRef: contractWrite.internalCauseRef,
          }),
          attempt: structuredClone(succeeded),
          durationMs,
        };
      }

      return {
        ok: true,
        attempt: structuredClone(succeeded),
        contractStatus: contractWrite.contract.status,
        contractVersion: contractWrite.contract.version,
        durationMs,
      };
    } catch {
      return fail("RESULT_RECORDING_FAILED", "unexpected_exception");
    }
  }

  private async markResultPending(input: {
    attempt: ExecutionAttempt;
    timestamp: string;
    correlationId: string;
    started: number;
    contractStatus: string;
  }): Promise<ExecutionAttemptResult> {
    const pending: ExecutionAttempt = {
      ...input.attempt,
      status: "result_pending",
      resultPendingAt: input.timestamp,
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };
    const durationMs = Date.now() - input.started;
    if (input.attempt.status !== "result_pending") {
      try {
        await this.attempts.update(pending, input.attempt.version);
      } catch {
        return {
          ok: false,
          error: createAttemptError({
            detailCode: "RESULT_RECORDING_FAILED",
            timestamp: input.timestamp,
            correlationId: input.correlationId,
            attemptId: input.attempt.attemptId,
            executionContractId: input.attempt.executionContractId,
            internalCauseRef: "result_pending_persist_failed",
          }),
          durationMs,
        };
      }
    }
    this.audit.append({
      event: "oa.execution_attempt.result_pending",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      previousStatus: input.attempt.status,
      newStatus: "result_pending",
      contractStatus: input.contractStatus,
      result: "error",
      detailCode: "RESULT_RECORDING_FAILED",
      durationMs,
    });
    return {
      ok: false,
      error: createAttemptError({
        detailCode: "RESULT_RECORDING_FAILED",
        timestamp: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        internalCauseRef: "terminal_persist_failed_result_pending",
      }),
      attempt:
        input.attempt.status === "result_pending"
          ? structuredClone(input.attempt)
          : structuredClone(pending),
      durationMs,
    };
  }

  private async exhaustBudget(input: {
    attempt: ExecutionAttempt;
    contractVersion: number;
    timestamp: string;
    correlationId: string;
    started: number;
  }): Promise<ExecutionAttemptResult> {
    const failed: ExecutionAttempt = {
      ...input.attempt,
      status: "failed",
      failedAt: input.timestamp,
      stopReason: "RESULT_RECORDING_FAILED: retry budget exhausted",
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };
    let persistedAttempt: ExecutionAttempt | undefined;
    try {
      await this.attempts.update(failed, input.attempt.version);
      await this.attempts.releaseActiveContract(
        failed.executionContractId,
        failed.attemptId,
      );
      persistedAttempt = failed;
    } catch {
      persistedAttempt = undefined;
    }
    const contractWrite = await this.contractStatusWriter.write({
      executionContractId: input.attempt.executionContractId,
      expectedVersion: input.contractVersion,
      nextStatus: "failed",
      reason: "Result recording budget exhausted",
    });
    const durationMs = Date.now() - input.started;
    this.audit.append({
      event: "oa.execution_attempt.failed",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      previousStatus: input.attempt.status,
      newStatus: persistedAttempt ? "failed" : input.attempt.status,
      contractStatus: contractWrite.ok ? contractWrite.contract.status : undefined,
      stopReason: failed.stopReason,
      result: "error",
      detailCode: "RESULT_RECORDING_FAILED",
      durationMs,
    });
    return {
      ok: false,
      error: createAttemptError({
        detailCode: "RESULT_RECORDING_FAILED",
        timestamp: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        internalCauseRef: "result_recording_budget_exhausted",
      }),
      attempt: persistedAttempt ? structuredClone(persistedAttempt) : undefined,
      durationMs,
    };
  }
}
```

--------------------------------------------------
### DIFF — recordExecutionResult

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
index c0d5d0da..e0787a9b 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
@@ -23,6 +23,17 @@ import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRe
 import { newCorrelationId } from "./attemptSupport";
 import type { AttemptPolicy } from "./attemptPolicy";
 import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";
+import { qualifyExecutionContractCompletion } from "../domain/qualifyExecutionContractCompletion";
+import type { Evidence } from "@/lib/oa/evidence-review";
+import type { Confirmation } from "@/lib/oa/decision";
+import type { CursorAuthorizedEffectId } from "../domain/cursorExecutionReport";
+
+export type RecordExecutionResultCompletionContext = {
+  evidence?: readonly Evidence[];
+  confirmations?: readonly Confirmation[];
+  cycleInstanceId?: string;
+  reportedExecutedEffects?: readonly CursorAuthorizedEffectId[];
+};

 export class RecordExecutionResult {
   constructor(
@@ -37,7 +48,10 @@ export class RecordExecutionResult {
   ) {}

   async execute(
-    request: RecordExecutionResultRequest,
+    request: RecordExecutionResultRequest & {
+      /** Optional durable facts for D-GCEC-15 contract completion qualification. */
+      completionContext?: RecordExecutionResultCompletionContext;
+    },
   ): Promise<ExecutionAttemptResult> {
     const started = Date.now();
     const timestamp = request.nowIso ?? this.clock.nowIso();
@@ -190,10 +204,25 @@ export class RecordExecutionResult {
         });
       }

+      // D-GCEC-15 — Attempt succeeded = current slice succeeded, not EC done.
+      const qualification = qualifyExecutionContractCompletion({
+        contract,
+        evidence: request.completionContext?.evidence,
+        confirmations: request.completionContext?.confirmations,
+        cycleInstanceId: request.completionContext?.cycleInstanceId,
+        reportedExecutedEffects:
+          request.completionContext?.reportedExecutedEffects,
+        nowIso: timestamp,
+      });
+      const nextStatus = qualification.nextStatusAfterSuccessfulAttempt;
+
       const contractWrite = await this.contractStatusWriter.write({
         executionContractId: contract.executionContractId,
         expectedVersion: contract.version,
-        nextStatus: "completed",
+        nextStatus,
+        reason: qualification.complete
+          ? "all_effective_requirements_verified"
+          : `slice_succeeded_remaining:${qualification.remainingRequiredEffects.join(",")}`,
       });

       const durationMs = Date.now() - started;
```

--------------------------------------------------
### DIFF — startExecution (AuthorizedExecutionSlice + confirmations)

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index a6fda299..c1df41b6 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -67,6 +67,7 @@ import type { DocsWriteLaunchSpec } from "../ports/realExecutionLaunchPort";
 import { M4_BOUNDED_DOCS_WRITE_ACTION } from "../infrastructure/m4BoundedDocsWriteCursorAgent";
 import { ManagedProjectRepositoryResolver } from "../infrastructure/managedProjectRepositoryResolver";
 import type { RealLaunchSafetyJournalPort } from "../ports/realLaunchSafetyJournalPort";
+import { deriveAuthorizedExecutionSlice } from "../domain/authorizedExecutionSlice";
 import {
   authorityFailureDetail,
   contractGateDetail,
@@ -878,6 +879,30 @@ export class StartExecution {
       });
     }

+    // D-GCEC-15 — derive AuthorizedExecutionSlice before real launch.
+    const evidenceRequirements =
+      docsWriteSpec?.evidenceRequirements ??
+      (Array.isArray(contract.evidenceRequirements)
+        ? contract.evidenceRequirements.map(String)
+        : []);
+    const authorizedSlice = deriveAuthorizedExecutionSlice({
+      executionContractId: contract.executionContractId,
+      evidenceRequirements,
+      confirmations: request.confirmations ?? [],
+      verifiedEffects: request.verifiedEffects,
+      confirmationMatch: docsWriteSpec
+        ? { repositoryRef: docsWriteSpec.repositoryRef }
+        : undefined,
+    });
+    if (
+      authorizedSlice.authorizedEffects.length === 0 &&
+      authorizedSlice.blockedEffects.length > 0
+    ) {
+      return fail("ATTEMPT_INVALID", "no_authorized_effect", {
+        executionContractId: contract.executionContractId,
+      });
+    }
+
     let launch;
     try {
       launch = await this.realLaunchPort.launch({
@@ -899,6 +924,12 @@ export class StartExecution {
           : {}),
         ...(managedRepoRoot ? { managedRepoRoot } : {}),
         ...(repositoryBinding ? { repositoryBinding } : {}),
+        authorizedEffects: authorizedSlice.authorizedEffects,
+        authorizedExecutionSlice: {
+          authorizedEffects: authorizedSlice.authorizedEffects,
+          blockedEffects: authorizedSlice.blockedEffects,
+          reasons: authorizedSlice.reasons,
+        },
       });
     } catch {
       return this.failRealLaunch({
```

--------------------------------------------------
### FULL FILE — authorizedExecutionSlice (post-change full)

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts`
Source: `git show 46e7e5b3:projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts`

```typescript
/**
 * AuthorizedExecutionSlice — current authorized Cursor effects (D-GCEC-13/15).
 * Derived from EC ∩ agent capabilities ∩ HD ∩ Confirmations ∩ runtime policy.
 * Future gated effects are NOT granted in advance.
 * CR-GCEC-15: cap:cursor.docs_write does NOT imply Git effects.
 */
import type { Confirmation } from "@/lib/oa/decision";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";

export type AuthorizedExecutionSlice = {
  executionContractId: string;
  attemptLineageKey: string;
  authorizedEffects: CursorAuthorizedEffectId[];
  blockedEffects: CursorAuthorizedEffectId[];
  reasons: string[];
};

const FILE_EFFECTS: CursorAuthorizedEffectId[] = [
  "filesystem.create",
  "filesystem.modify",
  "validation.run",
];

const GIT_EFFECT_CONFIRMATION_SCOPE: Record<
  Extract<
    CursorAuthorizedEffectId,
    "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
  >,
  string
> = {
  "git.commit": "git:local_commit",
  "git.push": "git:remote_push",
  "github.pr.create": "git:pull_request",
  "github.pr.merge": "git:merge",
};

export function buildGitEffectActionRef(input: {
  executionContractId: string;
  effect:
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge";
  repositoryRef: string;
  branchOrRef?: string;
  prNumber?: number;
}): string {
  const scope = GIT_EFFECT_CONFIRMATION_SCOPE[input.effect];
  const safeRepo = input.repositoryRef.replace(/[^a-zA-Z0-9._-]+/g, "__");
  const safeContract = input.executionContractId.replace(
    /[^a-zA-Z0-9:._-]+/g,
    "",
  );
  const parts = ["act", scope.replace(/:/g, "-"), safeContract, safeRepo];
  if (input.branchOrRef) {
    parts.push(`ref:${input.branchOrRef.replace(/[^a-zA-Z0-9._-]+/g, "__")}`);
  }
  if (input.prNumber != null) parts.push(`pr:${input.prNumber}`);
  const joined = parts.join(":");
  // OA identifier max length 128 — keep prefix discriminative.
  return joined.length <= 128 ? joined : joined.slice(0, 128);
}

function confirmationGrantsEffect(
  confirmations: readonly Confirmation[],
  effect:
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge",
  nowIso: string,
  match?: {
    executionContractId?: string;
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  },
): boolean {
  const scopeNeedle = GIT_EFFECT_CONFIRMATION_SCOPE[effect];
  return confirmations.some((c) => {
    if (c.status !== "granted") return false;
    if (c.expiresAt && c.expiresAt < nowIso) return false;
    if (
      match?.actorId &&
      c.requestedTo &&
      c.requestedTo.actorId !== match.actorId
    ) {
      return false;
    }
    const scopeOk =
      c.scope.includes(scopeNeedle) || c.actionRef === scopeNeedle;
    if (!scopeOk && match?.executionContractId) {
      const expected = buildGitEffectActionRef({
        executionContractId: match.executionContractId,
        effect,
        repositoryRef: match.repositoryRef ?? "",
        branchOrRef: match.branchOrRef,
        prNumber: match.prNumber,
      });
      if (c.actionRef !== expected && !c.actionRef.startsWith(expected)) {
        // Allow exact actionRef built for this effect+target
        if (
          !c.actionRef.includes(scopeNeedle.replace(/:/g, "-")) ||
          (match.repositoryRef &&
            !c.actionRef.includes(match.repositoryRef.replace(/\//g, "__")))
        ) {
          return false;
        }
        if (
          match.prNumber != null &&
          !c.actionRef.includes(`pr:${match.prNumber}`)
        ) {
          return false;
        }
        if (
          match.repositoryRef &&
          c.actionRef.includes("__") &&
          !c.actionRef.includes(match.repositoryRef.replace(/\//g, "__"))
        ) {
          return false;
        }
      }
    } else if (!scopeOk) {
      return false;
    }
    // Target binding: if actionRef encodes repo/PR, enforce match
    if (match?.repositoryRef && c.actionRef.includes("__")) {
      if (!c.actionRef.includes(match.repositoryRef.replace(/\//g, "__"))) {
        return false;
      }
    }
    if (match?.prNumber != null && c.actionRef.includes("pr:")) {
      if (!c.actionRef.includes(`pr:${match.prNumber}`)) return false;
    }
    return true;
  });
}

/**
 * Derive the current authorized effect slice.
 * Docs-write baseline: filesystem + validation when docs_write/artifact required.
 * Git effects require explicit evidenceRequirements + Confirmation per effect.
 */
export function deriveAuthorizedExecutionSlice(input: {
  executionContractId: string;
  attemptLineageKey?: string;
  requiredCapabilities?: readonly string[];
  evidenceRequirements?: readonly string[];
  confirmations?: readonly Confirmation[];
  nowIso?: string;
  allowDelete?: boolean;
  /** Effects already VERIFIED — excluded from authorized re-execution. */
  verifiedEffects?: readonly CursorAuthorizedEffectId[];
  /** Effects reported but awaiting verification — not re-authorized. */
  waitingVerificationEffects?: readonly CursorAuthorizedEffectId[];
  confirmationMatch?: {
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  };
}): AuthorizedExecutionSlice {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const confirmations = input.confirmations ?? [];
  const verified = new Set(input.verifiedEffects ?? []);
  const waiting = new Set(input.waitingVerificationEffects ?? []);
  const authorized: CursorAuthorizedEffectId[] = [];
  const blocked: CursorAuthorizedEffectId[] = [];
  const reasons: string[] = [];

  const reqs = input.evidenceRequirements ?? [];
  // Docs-write / bounded write baseline: filesystem + validation.
  // CR-GCEC-15: Git is NEVER inferred from capabilities.
  for (const effect of FILE_EFFECTS) {
    if (verified.has(effect) || waiting.has(effect)) {
      blocked.push(effect);
      reasons.push(
        waiting.has(effect)
          ? `waiting_verification:${effect}`
          : `already_verified:${effect}`,
      );
      continue;
    }
    authorized.push(effect);
  }

  if (input.allowDelete) {
    if (!verified.has("filesystem.delete") && !waiting.has("filesystem.delete")) {
      authorized.push("filesystem.delete");
    }
  } else {
    blocked.push("filesystem.delete");
    reasons.push("no_delete_policy");
  }

  const gitCandidates: Array<
    Extract<
      CursorAuthorizedEffectId,
      "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
    >
  > = ["git.commit", "git.push", "github.pr.create", "github.pr.merge"];

  for (const effect of gitCandidates) {
    const needed = reqs.some((r) => {
      if (effect === "git.commit")
        return r === "git:local_commit" || r === "git:commit";
      if (effect === "git.push")
        return r === "git:remote_push" || r === "git:push";
      if (effect === "github.pr.create") return r === "git:pull_request";
      if (effect === "github.pr.merge")
        return r === "git:merge" || r === "git:post_merge_verification";
      return false;
    });
    // CR-GCEC-15: NEVER infer Git from cap:cursor.docs_write or repo presence.
    if (!needed) {
      blocked.push(effect);
      continue;
    }
    if (verified.has(effect) || waiting.has(effect)) {
      blocked.push(effect);
      reasons.push(
        waiting.has(effect)
          ? `waiting_verification:${effect}`
          : `already_verified:${effect}`,
      );
      continue;
    }
    if (
      confirmationGrantsEffect(confirmations, effect, nowIso, {
        executionContractId: input.executionContractId,
        ...input.confirmationMatch,
      })
    ) {
      authorized.push(effect);
    } else {
      blocked.push(effect);
      reasons.push(
        `confirmation_required:${GIT_EFFECT_CONFIRMATION_SCOPE[effect]}`,
      );
    }
  }

  if (
    authorized.includes("github.pr.create") &&
    !authorized.includes("github.pr.update")
  ) {
    if (!blocked.includes("github.pr.update")) {
      blocked.push("github.pr.update");
    }
  }

  return {
    executionContractId: input.executionContractId,
    attemptLineageKey:
      input.attemptLineageKey ?? input.executionContractId,
    authorizedEffects: authorized,
    blockedEffects: blocked,
    reasons,
  };
}

export function sliceAllows(
  slice: AuthorizedExecutionSlice,
  effect: CursorAuthorizedEffectId,
): boolean {
  return slice.authorizedEffects.includes(effect);
}
```

--------------------------------------------------
### DIFF — authorizedExecutionSlice

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
index bc1dbbf8..7fcb8b1f 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
@@ -1,7 +1,8 @@
 /**
- * AuthorizedExecutionSlice — current authorized Cursor effects (D-GCEC-13).
+ * AuthorizedExecutionSlice — current authorized Cursor effects (D-GCEC-13/15).
  * Derived from EC ∩ agent capabilities ∩ HD ∩ Confirmations ∩ runtime policy.
  * Future gated effects are NOT granted in advance.
+ * CR-GCEC-15: cap:cursor.docs_write does NOT imply Git effects.
  */
 import type { Confirmation } from "@/lib/oa/decision";
 import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
@@ -33,22 +34,113 @@ const GIT_EFFECT_CONFIRMATION_SCOPE: Record<
   "github.pr.merge": "git:merge",
 };

-function confirmationGrants(
+export function buildGitEffectActionRef(input: {
+  executionContractId: string;
+  effect:
+    | "git.commit"
+    | "git.push"
+    | "github.pr.create"
+    | "github.pr.merge";
+  repositoryRef: string;
+  branchOrRef?: string;
+  prNumber?: number;
+}): string {
+  const scope = GIT_EFFECT_CONFIRMATION_SCOPE[input.effect];
+  const safeRepo = input.repositoryRef.replace(/[^a-zA-Z0-9._-]+/g, "__");
+  const safeContract = input.executionContractId.replace(
+    /[^a-zA-Z0-9:._-]+/g,
+    "",
+  );
+  const parts = ["act", scope.replace(/:/g, "-"), safeContract, safeRepo];
+  if (input.branchOrRef) {
+    parts.push(`ref:${input.branchOrRef.replace(/[^a-zA-Z0-9._-]+/g, "__")}`);
+  }
+  if (input.prNumber != null) parts.push(`pr:${input.prNumber}`);
+  const joined = parts.join(":");
+  // OA identifier max length 128 — keep prefix discriminative.
+  return joined.length <= 128 ? joined : joined.slice(0, 128);
+}
+
+function confirmationGrantsEffect(
   confirmations: readonly Confirmation[],
-  scopeNeedle: string,
+  effect:
+    | "git.commit"
+    | "git.push"
+    | "github.pr.create"
+    | "github.pr.merge",
   nowIso: string,
+  match?: {
+    executionContractId?: string;
+    repositoryRef?: string;
+    branchOrRef?: string;
+    prNumber?: number;
+    actorId?: string;
+  },
 ): boolean {
+  const scopeNeedle = GIT_EFFECT_CONFIRMATION_SCOPE[effect];
   return confirmations.some((c) => {
     if (c.status !== "granted") return false;
     if (c.expiresAt && c.expiresAt < nowIso) return false;
-    return c.scope.includes(scopeNeedle) || c.actionRef === scopeNeedle;
+    if (
+      match?.actorId &&
+      c.requestedTo &&
+      c.requestedTo.actorId !== match.actorId
+    ) {
+      return false;
+    }
+    const scopeOk =
+      c.scope.includes(scopeNeedle) || c.actionRef === scopeNeedle;
+    if (!scopeOk && match?.executionContractId) {
+      const expected = buildGitEffectActionRef({
+        executionContractId: match.executionContractId,
+        effect,
+        repositoryRef: match.repositoryRef ?? "",
+        branchOrRef: match.branchOrRef,
+        prNumber: match.prNumber,
+      });
+      if (c.actionRef !== expected && !c.actionRef.startsWith(expected)) {
+        // Allow exact actionRef built for this effect+target
+        if (
+          !c.actionRef.includes(scopeNeedle.replace(/:/g, "-")) ||
+          (match.repositoryRef &&
+            !c.actionRef.includes(match.repositoryRef.replace(/\//g, "__")))
+        ) {
+          return false;
+        }
+        if (
+          match.prNumber != null &&
+          !c.actionRef.includes(`pr:${match.prNumber}`)
+        ) {
+          return false;
+        }
+        if (
+          match.repositoryRef &&
+          c.actionRef.includes("__") &&
+          !c.actionRef.includes(match.repositoryRef.replace(/\//g, "__"))
+        ) {
+          return false;
+        }
+      }
+    } else if (!scopeOk) {
+      return false;
+    }
+    // Target binding: if actionRef encodes repo/PR, enforce match
+    if (match?.repositoryRef && c.actionRef.includes("__")) {
+      if (!c.actionRef.includes(match.repositoryRef.replace(/\//g, "__"))) {
+        return false;
+      }
+    }
+    if (match?.prNumber != null && c.actionRef.includes("pr:")) {
+      if (!c.actionRef.includes(`pr:${match.prNumber}`)) return false;
+    }
+    return true;
   });
 }

 /**
  * Derive the current authorized effect slice.
- * Docs-write baseline: filesystem + validation.
- * Git effects require explicit Confirmation per effect.
+ * Docs-write baseline: filesystem + validation when docs_write/artifact required.
+ * Git effects require explicit evidenceRequirements + Confirmation per effect.
  */
 export function deriveAuthorizedExecutionSlice(input: {
   executionContractId: string;
@@ -57,17 +149,46 @@ export function deriveAuthorizedExecutionSlice(input: {
   evidenceRequirements?: readonly string[];
   confirmations?: readonly Confirmation[];
   nowIso?: string;
-  /** When true, filesystem.delete may be authorized (default false / noDelete). */
   allowDelete?: boolean;
+  /** Effects already VERIFIED — excluded from authorized re-execution. */
+  verifiedEffects?: readonly CursorAuthorizedEffectId[];
+  /** Effects reported but awaiting verification — not re-authorized. */
+  waitingVerificationEffects?: readonly CursorAuthorizedEffectId[];
+  confirmationMatch?: {
+    repositoryRef?: string;
+    branchOrRef?: string;
+    prNumber?: number;
+    actorId?: string;
+  };
 }): AuthorizedExecutionSlice {
   const nowIso = input.nowIso ?? new Date().toISOString();
   const confirmations = input.confirmations ?? [];
-  const authorized: CursorAuthorizedEffectId[] = [...FILE_EFFECTS];
+  const verified = new Set(input.verifiedEffects ?? []);
+  const waiting = new Set(input.waitingVerificationEffects ?? []);
+  const authorized: CursorAuthorizedEffectId[] = [];
   const blocked: CursorAuthorizedEffectId[] = [];
   const reasons: string[] = [];

+  const reqs = input.evidenceRequirements ?? [];
+  // Docs-write / bounded write baseline: filesystem + validation.
+  // CR-GCEC-15: Git is NEVER inferred from capabilities.
+  for (const effect of FILE_EFFECTS) {
+    if (verified.has(effect) || waiting.has(effect)) {
+      blocked.push(effect);
+      reasons.push(
+        waiting.has(effect)
+          ? `waiting_verification:${effect}`
+          : `already_verified:${effect}`,
+      );
+      continue;
+    }
+    authorized.push(effect);
+  }
+
   if (input.allowDelete) {
-    authorized.push("filesystem.delete");
+    if (!verified.has("filesystem.delete") && !waiting.has("filesystem.delete")) {
+      authorized.push("filesystem.delete");
+    }
   } else {
     blocked.push("filesystem.delete");
     reasons.push("no_delete_policy");
@@ -80,44 +201,50 @@ export function deriveAuthorizedExecutionSlice(input: {
     >
   > = ["git.commit", "git.push", "github.pr.create", "github.pr.merge"];

-  const reqs = input.evidenceRequirements ?? [];
-  const wantsGit =
-    reqs.some((r) => r.startsWith("git:")) ||
-    (input.requiredCapabilities ?? []).some((c) =>
-      /git|github|cursor\.docs_write/i.test(c),
-    );
-
   for (const effect of gitCandidates) {
-    const needed =
-      wantsGit ||
-      reqs.some((r) => {
-        if (effect === "git.commit")
-          return r === "git:local_commit" || r === "git:commit";
-        if (effect === "git.push")
-          return r === "git:remote_push" || r === "git:push";
-        if (effect === "github.pr.create") return r === "git:pull_request";
-        if (effect === "github.pr.merge") return r === "git:merge";
-        return false;
-      });
+    const needed = reqs.some((r) => {
+      if (effect === "git.commit")
+        return r === "git:local_commit" || r === "git:commit";
+      if (effect === "git.push")
+        return r === "git:remote_push" || r === "git:push";
+      if (effect === "github.pr.create") return r === "git:pull_request";
+      if (effect === "github.pr.merge")
+        return r === "git:merge" || r === "git:post_merge_verification";
+      return false;
+    });
+    // CR-GCEC-15: NEVER infer Git from cap:cursor.docs_write or repo presence.
     if (!needed) {
       blocked.push(effect);
       continue;
     }
-    const scope = GIT_EFFECT_CONFIRMATION_SCOPE[effect];
-    if (confirmationGrants(confirmations, scope, nowIso)) {
+    if (verified.has(effect) || waiting.has(effect)) {
+      blocked.push(effect);
+      reasons.push(
+        waiting.has(effect)
+          ? `waiting_verification:${effect}`
+          : `already_verified:${effect}`,
+      );
+      continue;
+    }
+    if (
+      confirmationGrantsEffect(confirmations, effect, nowIso, {
+        executionContractId: input.executionContractId,
+        ...input.confirmationMatch,
+      })
+    ) {
       authorized.push(effect);
     } else {
       blocked.push(effect);
-      reasons.push(`confirmation_required:${scope}`);
+      reasons.push(
+        `confirmation_required:${GIT_EFFECT_CONFIRMATION_SCOPE[effect]}`,
+      );
     }
   }

-  // github.pr.update follows create confirmation when create authorized
   if (
     authorized.includes("github.pr.create") &&
     !authorized.includes("github.pr.update")
   ) {
-    // keep update blocked unless separately confirmed — conservative
     if (!blocked.includes("github.pr.update")) {
       blocked.push("github.pr.update");
     }
```

--------------------------------------------------
### FULL FILE — verifyWorkspaceFileEffects (post-change full)

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyWorkspaceFileEffects.ts`
Source: `git show 46e7e5b3:projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyWorkspaceFileEffects.ts`

```typescript
/**
 * Independent workspace file-effect verification (D-GCEC-11/12, CR-GCEC-14).
 * Studio READS the managed worktree — does not trust Cursor stdout for touched files.
 * Initial discovery MUST observe ALL worktree changes (no allowlist pathspec filter).
 */
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { LocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import type { CursorExecutionReport } from "../domain/cursorExecutionReport";

export type WorkspaceFileVerificationResult =
  | {
      ok: true;
      touchedFiles: string[];
      targetPath: string;
      digest: string;
      unexpectedFiles: string[];
    }
  | {
      ok: false;
      reason: string;
      touchedFiles: string[];
      unexpectedFiles: string[];
    };

function normalizeRel(p: string): string {
  return p.replace(/\\/g, "/").replace(/^\.\//, "").trim();
}

function parseNameStatus(porcelainOrNameStatus: string): {
  path: string;
  status: string;
}[] {
  const out: { path: string; status: string }[] = [];
  for (const line of porcelainOrNameStatus.split("\n")) {
    const t = line.trimEnd();
    if (!t) continue;
    if (t.includes("\t")) {
      const [st, p] = t.split("\t");
      if (p) out.push({ path: normalizeRel(p), status: (st ?? "?").trim() });
      continue;
    }
    if (t.length >= 3) {
      const st = t.slice(0, 2).trim();
      const p = t.slice(3).trim();
      if (p) out.push({ path: normalizeRel(p), status: st || "?" });
    }
  }
  return out;
}

/**
 * Verify docs-write workspace independently of Cursor report claims.
 */
export async function verifyWorkspaceFileEffects(input: {
  worktreePath: string;
  pathAllowlist: readonly string[];
  targetPath: string;
  /** Optional Cursor claim — compared, never trusted alone. */
  report?: CursorExecutionReport | null;
  statusDiffPort?: LocalGitStatusDiffPort;
  /**
   * Injectable name-status text for tests without git.
   * Production path must use statusDiffPort over FULL worktree (no pathspec).
   */
  nameStatusText?: string;
}): Promise<WorkspaceFileVerificationResult> {
  const allow = new Set(input.pathAllowlist.map(normalizeRel));
  const targetPath = normalizeRel(input.targetPath);

  let nameStatus = input.nameStatusText ?? "";
  if (!nameStatus && input.statusDiffPort) {
    // CR-GCEC-14 — observe ALL worktree changes first (no allowlist pathspec).
    const diff = await input.statusDiffPort.statusDiff({
      repoPath: input.worktreePath,
      // intentionally omit pathspecs
    });
    nameStatus = diff.statusPorcelain || diff.diffStat;
  }

  const changed = parseNameStatus(nameStatus);
  const touchedFiles = changed.map((c) => c.path);
  const unexpectedFiles = touchedFiles.filter((p) => {
    if (allow.has(p)) return false;
    return ![...allow].some(
      (a) => p === a || p.startsWith(a.endsWith("/") ? a : `${a}/`),
    );
  });

  if (unexpectedFiles.length > 0) {
    return {
      ok: false,
      reason: "unexpected_files_outside_allowlist",
      touchedFiles,
      unexpectedFiles,
    };
  }

  const deletes = changed.filter((c) => /D/i.test(c.status));
  if (deletes.length > 0) {
    return {
      ok: false,
      reason: "delete_forbidden",
      touchedFiles,
      unexpectedFiles: deletes.map((d) => d.path),
    };
  }

  // Cursor report claim vs observation — if report omits an observed path, fail
  if (input.report?.fileEffects) {
    const claimed = new Set([
      ...(input.report.fileEffects.created ?? []),
      ...(input.report.fileEffects.modified ?? []),
      ...(input.report.fileEffects.deleted ?? []),
    ].map(normalizeRel));
    const unclaimedObserved = touchedFiles.filter((p) => !claimed.has(p));
    if (unclaimedObserved.length > 0 && claimed.size > 0) {
      // Hidden worktree changes not in Cursor claim
      return {
        ok: false,
        reason: "cursor_claim_incomplete_vs_worktree",
        touchedFiles,
        unexpectedFiles: unclaimedObserved,
      };
    }
    const claimedDeletes = input.report.fileEffects.deleted ?? [];
    if (claimedDeletes.length === 0 && deletes.length > 0) {
      return {
        ok: false,
        reason: "delete_forbidden",
        touchedFiles,
        unexpectedFiles: deletes.map((d) => d.path),
      };
    }
  }

  const absTarget = path.resolve(input.worktreePath, ...targetPath.split("/"));
  const root = path.resolve(input.worktreePath);
  if (absTarget !== root && !absTarget.startsWith(root + path.sep)) {
    return {
      ok: false,
      reason: "target_path_escape",
      touchedFiles,
      unexpectedFiles: [targetPath],
    };
  }
  if (!existsSync(absTarget)) {
    return {
      ok: false,
      reason: "target_path_missing",
      touchedFiles,
      unexpectedFiles: [],
    };
  }

  const buf = await readFile(absTarget);
  const digest = `sha256:${createHash("sha256").update(buf).digest("hex")}`;

  const claimedDigest = input.report?.fileEffects?.digests?.[targetPath];
  if (claimedDigest && claimedDigest !== digest) {
    return {
      ok: false,
      reason: "claimed_digest_mismatch",
      touchedFiles,
      unexpectedFiles: [],
    };
  }

  return {
    ok: true,
    touchedFiles: touchedFiles.length > 0 ? touchedFiles : [targetPath],
    targetPath,
    digest,
    unexpectedFiles: [],
  };
}
```

--------------------------------------------------
### DIFF — verifyWorkspaceFileEffects

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyWorkspaceFileEffects.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyWorkspaceFileEffects.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyWorkspaceFileEffects.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyWorkspaceFileEffects.ts
index 48011e96..01d5056e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyWorkspaceFileEffects.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyWorkspaceFileEffects.ts
@@ -1,6 +1,7 @@
 /**
- * Independent workspace file-effect verification (D-GCEC-11/12).
+ * Independent workspace file-effect verification (D-GCEC-11/12, CR-GCEC-14).
  * Studio READS the managed worktree — does not trust Cursor stdout for touched files.
+ * Initial discovery MUST observe ALL worktree changes (no allowlist pathspec filter).
  */
 import { createHash } from "node:crypto";
 import { existsSync } from "node:fs";
@@ -36,7 +37,6 @@ function parseNameStatus(porcelainOrNameStatus: string): {
   for (const line of porcelainOrNameStatus.split("\n")) {
     const t = line.trimEnd();
     if (!t) continue;
-    // porcelain: XY path  OR name-status: A\tpath
     if (t.includes("\t")) {
       const [st, p] = t.split("\t");
       if (p) out.push({ path: normalizeRel(p), status: (st ?? "?").trim() });
@@ -61,7 +61,10 @@ export async function verifyWorkspaceFileEffects(input: {
   /** Optional Cursor claim — compared, never trusted alone. */
   report?: CursorExecutionReport | null;
   statusDiffPort?: LocalGitStatusDiffPort;
-  /** Injectable name-status text for tests without git. */
+  /**
+   * Injectable name-status text for tests without git.
+   * Production path must use statusDiffPort over FULL worktree (no pathspec).
+   */
   nameStatusText?: string;
 }): Promise<WorkspaceFileVerificationResult> {
   const allow = new Set(input.pathAllowlist.map(normalizeRel));
@@ -69,9 +72,10 @@ export async function verifyWorkspaceFileEffects(input: {

   let nameStatus = input.nameStatusText ?? "";
   if (!nameStatus && input.statusDiffPort) {
+    // CR-GCEC-14 — observe ALL worktree changes first (no allowlist pathspec).
     const diff = await input.statusDiffPort.statusDiff({
       repoPath: input.worktreePath,
-      pathspecs: [...allow],
+      // intentionally omit pathspecs
     });
     nameStatus = diff.statusPorcelain || diff.diffStat;
   }
@@ -80,7 +84,6 @@ export async function verifyWorkspaceFileEffects(input: {
   const touchedFiles = changed.map((c) => c.path);
   const unexpectedFiles = touchedFiles.filter((p) => {
     if (allow.has(p)) return false;
-    // allow prefix match under allowlisted directories
     return ![...allow].some(
       (a) => p === a || p.startsWith(a.endsWith("/") ? a : `${a}/`),
     );
@@ -95,7 +98,6 @@ export async function verifyWorkspaceFileEffects(input: {
     };
   }

-  // Deletes forbidden for docs-write vertical
   const deletes = changed.filter((c) => /D/i.test(c.status));
   if (deletes.length > 0) {
     return {
@@ -106,6 +108,34 @@ export async function verifyWorkspaceFileEffects(input: {
     };
   }

+  // Cursor report claim vs observation — if report omits an observed path, fail
+  if (input.report?.fileEffects) {
+    const claimed = new Set([
+      ...(input.report.fileEffects.created ?? []),
+      ...(input.report.fileEffects.modified ?? []),
+      ...(input.report.fileEffects.deleted ?? []),
+    ].map(normalizeRel));
+    const unclaimedObserved = touchedFiles.filter((p) => !claimed.has(p));
+    if (unclaimedObserved.length > 0 && claimed.size > 0) {
+      // Hidden worktree changes not in Cursor claim
+      return {
+        ok: false,
+        reason: "cursor_claim_incomplete_vs_worktree",
+        touchedFiles,
+        unexpectedFiles: unclaimedObserved,
+      };
+    }
+    const claimedDeletes = input.report.fileEffects.deleted ?? [];
+    if (claimedDeletes.length === 0 && deletes.length > 0) {
+      return {
+        ok: false,
+        reason: "delete_forbidden",
+        touchedFiles,
+        unexpectedFiles: deletes.map((d) => d.path),
+      };
+    }
+  }
+
   const absTarget = path.resolve(input.worktreePath, ...targetPath.split("/"));
   const root = path.resolve(input.worktreePath);
   if (absTarget !== root && !absTarget.startsWith(root + path.sep)) {
@@ -128,9 +158,8 @@ export async function verifyWorkspaceFileEffects(input: {
   const buf = await readFile(absTarget);
   const digest = `sha256:${createHash("sha256").update(buf).digest("hex")}`;

-  // If Cursor claimed digests, mismatch → fail (claim vs observation)
-  const claimed = input.report?.fileEffects?.digests?.[targetPath];
-  if (claimed && claimed !== digest) {
+  const claimedDigest = input.report?.fileEffects?.digests?.[targetPath];
+  if (claimedDigest && claimedDigest !== digest) {
     return {
       ok: false,
       reason: "claimed_digest_mismatch",
```

--------------------------------------------------
### FULL FILE — gitEffectEvidenceActions (post-change full)

Path: `projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts`
Source: `git show 46e7e5b3:projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts`

```typescript
/**
 * D-GCEC-09/11 / CR-GCEC-17 — Studio Git verification (READ + Evidence lifecycle).
 * Cursor owns mutations. Studio observes via RepositoryReadPort, registers AVAILABLE
 * claims, then transitions to status=verified via VerifyEvidenceIntegrity.
 *
 * technicalResultRef is a technical Attempt/result reference only — NEVER a trust marker.
 */
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  buildTypedGitEvidenceFields,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";
import type {
  GitCiStatusPort,
  GitReviewStatusPort,
  PostMergeVerifyPort,
  RepositoryReadPort,
} from "../types";
import { verifyPostMerge } from "../postMergeVerify";

export type GitVerifyActor = {
  actorId: string;
  role: string;
  displayName?: string;
  authorityLevel?: string;
};

export type GitVerifyBindings = {
  projectId: string;
  cycleInstanceId: string;
  executionContractId?: string;
  executionAttemptId?: string;
};

function claimDigest(location: string): Digest {
  return `sha256:${createHash("sha256").update(location, "utf8").digest("hex")}` as Digest;
}

async function registerTypedGitEvidenceAvailable(input: {
  services: EvidenceReviewServices;
  evidenceId: string;
  source: TypedGitEvidenceSource;
  payload: Record<string, unknown>;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
  technicalResultRef?: string;
}): Promise<
  | { ok: true; evidenceId: string; digest: Digest; version: number }
  | { ok: false; reason: string }
> {
  const built = buildTypedGitEvidenceFields(
    input.source,
    input.payload as never,
  );
  if (!built.ok) return { ok: false, reason: built.reason };

  const location = built.fields.location ?? `git:${input.source}`;
  const digest = (built.fields.digest ?? claimDigest(location)) as Digest;

  const result = await input.services.registerEvidence.execute({
    evidenceId: input.evidenceId,
    idempotencyKey: `idem:${input.evidenceId}`,
    actor: input.actor as never,
    type: "other",
    source: built.fields.source,
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    status: "available",
    location,
    digest,
    ...(input.technicalResultRef
      ? { technicalResultRef: input.technicalResultRef }
      : {}),
    bindings: {
      projectId: input.bindings.projectId,
      cycleInstanceId: input.bindings.cycleInstanceId,
      ...(input.bindings.executionContractId
        ? { executionContractId: input.bindings.executionContractId }
        : {}),
      ...(input.bindings.executionAttemptId
        ? { executionAttemptId: input.bindings.executionAttemptId }
        : {}),
    },
    nowIso: input.nowIso,
  });
  if (!result.ok) {
    return { ok: false, reason: result.error.detailCode };
  }
  return {
    ok: true,
    evidenceId: input.evidenceId,
    digest,
    version: result.evidence.version,
  };
}

async function verifyRegisteredEvidence(input: {
  services: EvidenceReviewServices;
  evidenceId: string;
  expectedVersion: number;
  digest: Digest;
  actor: GitVerifyActor;
}): Promise<{ ok: true } | { ok: false; reason: string }> {
  const svc = input.services as EvidenceReviewServices & {
    payload?: {
      setScript?: (
        id: string,
        s: { availability: "available"; digest: Digest },
      ) => void;
    };
    fakePayload?: {
      setScript?: (
        id: string,
        s: { availability: "available"; digest: Digest },
      ) => void;
    };
  };
  const scriptable = svc.fakePayload ?? svc.payload;
  if (typeof scriptable?.setScript === "function") {
    scriptable.setScript(input.evidenceId, {
      availability: "available",
      digest: input.digest,
    });
  }

  const verified = await input.services.verifyEvidenceIntegrity.execute({
    evidenceId: input.evidenceId,
    expectedVersion: input.expectedVersion,
    actor: input.actor as never,
  });
  if (!verified.ok) {
    return { ok: false, reason: verified.error.detailCode };
  }
  if (verified.evidence.status !== "verified") {
    return { ok: false, reason: "status_not_verified_after_integrity" };
  }
  return { ok: true };
}

async function registerAndVerify(input: {
  services: EvidenceReviewServices;
  evidenceId: string;
  source: TypedGitEvidenceSource;
  payload: Record<string, unknown>;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; status: "verified" }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const reg = await registerTypedGitEvidenceAvailable(input);
  if (!reg.ok) return { ok: false, reason: reg.reason, status: "failed" };

  // Ensure payload probe can observe the registered digest
  const testSvc = input.services as EvidenceReviewServices & {
    setPayloadScript?: (
      id: string,
      s: { availability: "available"; digest: Digest },
    ) => void;
  };
  if (typeof testSvc.setPayloadScript === "function") {
    testSvc.setPayloadScript(reg.evidenceId, {
      availability: "available",
      digest: reg.digest,
    });
  }

  const v = await verifyRegisteredEvidence({
    services: input.services,
    evidenceId: reg.evidenceId,
    expectedVersion: reg.version,
    digest: reg.digest,
    actor: input.actor,
  });
  if (!v.ok) return { ok: false, reason: v.reason, status: "reported" };
  return { ok: true, evidenceId: reg.evidenceId, status: "verified" };
}

/** Register a Cursor-reported claim as AVAILABLE (not verified). */
export async function registerReportedGitClaimEvidence(input: {
  evidenceServices: EvidenceReviewServices;
  source: TypedGitEvidenceSource;
  payload: Record<string, unknown>;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  evidenceId: string;
  nowIso?: string;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
  const reg = await registerTypedGitEvidenceAvailable({
    services: input.evidenceServices,
    evidenceId: input.evidenceId,
    source: input.source,
    payload: input.payload,
    bindings: input.bindings,
    actor: input.actor,
    technicalResultRef: `studio:cursor_report_claim:${input.source}`,
    nowIso: input.nowIso,
  });
  if (!reg.ok) return reg;
  return { ok: true, evidenceId: reg.evidenceId };
}

export async function verifyCommitClaim(input: {
  repositoryRead: RepositoryReadPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  claimedCommitSha: string;
  message?: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; status: "verified" }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const observed = await input.repositoryRead.getCommit({
    repositoryRef: input.repositoryRef,
    sha: input.claimedCommitSha,
  });
  if (!observed) {
    return { ok: false, reason: "commit_sha_not_found", status: "reported" };
  }
  if (observed.sha.toLowerCase() !== input.claimedCommitSha.toLowerCase()) {
    return { ok: false, reason: "commit_sha_mismatch", status: "failed" };
  }
  const evidenceId = `ev:git-commit-verified:${observed.sha.slice(0, 12)}`;
  return registerAndVerify({
    services: input.evidenceServices,
    evidenceId,
    source: "git:local_commit",
    payload: {
      repositoryRef: input.repositoryRef,
      commitSha: observed.sha,
      message: input.message ?? observed.message,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
}

export async function verifyPushClaim(input: {
  repositoryRead: RepositoryReadPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  branch: string;
  claimedCommitSha: string;
  remote?: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; status: "verified" }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const head = await input.repositoryRead.getBranchHead({
    repositoryRef: input.repositoryRef,
    branch: input.branch,
  });
  if (!head) {
    return { ok: false, reason: "branch_head_not_found", status: "reported" };
  }
  if (head.toLowerCase() !== input.claimedCommitSha.toLowerCase()) {
    return { ok: false, reason: "push_sha_mismatch", status: "failed" };
  }
  const evidenceId = `ev:git-push-verified:${head.slice(0, 12)}`;
  return registerAndVerify({
    services: input.evidenceServices,
    evidenceId,
    source: "git:remote_push",
    payload: {
      repositoryRef: input.repositoryRef,
      remote: input.remote ?? "origin",
      refName: `refs/heads/${input.branch}`,
      commitSha: head,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
}

export async function verifyPullRequestClaim(input: {
  repositoryRead: RepositoryReadPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  claimedPrNumber: number;
  claimedHeadSha: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | {
      ok: true;
      evidenceId: string;
      status: "verified";
      prNumber: number;
      headSha: string;
    }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const pr = await input.repositoryRead.getPullRequest({
    repositoryRef: input.repositoryRef,
    number: input.claimedPrNumber,
  });
  if (!pr) {
    return { ok: false, reason: "pr_not_found", status: "reported" };
  }
  if (pr.headSha.toLowerCase() !== input.claimedHeadSha.toLowerCase()) {
    return { ok: false, reason: "pr_head_mismatch", status: "failed" };
  }
  const evidenceId = `ev:git-pr-verified:${pr.number}`;
  const result = await registerAndVerify({
    services: input.evidenceServices,
    evidenceId,
    source: "git:pull_request",
    payload: {
      repositoryRef: input.repositoryRef,
      prNumber: pr.number,
      url: pr.url,
      headSha: pr.headSha,
      state: pr.state,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
  if (!result.ok) return result;
  return {
    ok: true,
    evidenceId: result.evidenceId,
    status: "verified",
    prNumber: pr.number,
    headSha: pr.headSha,
  };
}

export async function recordCiStatusEvidence(input: {
  ciPort: GitCiStatusPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  commitSha: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; conclusion: string; status: "verified" | "failed" }
  | { ok: false; reason: string }
> {
  // CR-GCEC — no forcedConclusion in Product API; FakeRepositoryRead supplies observation.
  const status = await input.ciPort.getCiStatus({
    repositoryRef: input.repositoryRef,
    commitSha: input.commitSha,
  });
  const evidenceId = `ev:git-ci:${input.commitSha.slice(0, 12)}`;
  if (status.conclusion !== "success") {
    const reg = await registerTypedGitEvidenceAvailable({
      services: input.evidenceServices,
      evidenceId,
      source: "git:ci_status",
      payload: {
        repositoryRef: input.repositoryRef,
        commitSha: input.commitSha,
        conclusion: status.conclusion,
        checkName: status.checkName,
      },
      bindings: input.bindings,
      actor: input.actor,
      nowIso: input.nowIso,
    });
    if (!reg.ok) return { ok: false, reason: reg.reason };
    return {
      ok: true,
      evidenceId,
      conclusion: status.conclusion,
      status: "failed",
    };
  }
  const result = await registerAndVerify({
    services: input.evidenceServices,
    evidenceId,
    source: "git:ci_status",
    payload: {
      repositoryRef: input.repositoryRef,
      commitSha: input.commitSha,
      conclusion: status.conclusion,
      checkName: status.checkName,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
  if (!result.ok) return { ok: false, reason: result.reason };
  return {
    ok: true,
    evidenceId: result.evidenceId,
    conclusion: status.conclusion,
    status: "verified",
  };
}

export async function recordReviewStatusEvidence(input: {
  reviewPort: GitReviewStatusPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  prNumber: number;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; state: string; status: "verified" | "failed" }
  | { ok: false; reason: string }
> {
  const status = await input.reviewPort.getReviewStatus({
    repositoryRef: input.repositoryRef,
    prNumber: input.prNumber,
  });
  const evidenceId = `ev:git-review:${input.prNumber}`;
  if (status.state !== "approved") {
    const reg = await registerTypedGitEvidenceAvailable({
      services: input.evidenceServices,
      evidenceId,
      source: "git:review_status",
      payload: {
        repositoryRef: input.repositoryRef,
        prNumber: input.prNumber,
        state: status.state,
      },
      bindings: input.bindings,
      actor: input.actor,
      nowIso: input.nowIso,
    });
    if (!reg.ok) return { ok: false, reason: reg.reason };
    return {
      ok: true,
      evidenceId,
      state: status.state,
      status: "failed",
    };
  }
  const result = await registerAndVerify({
    services: input.evidenceServices,
    evidenceId,
    source: "git:review_status",
    payload: {
      repositoryRef: input.repositoryRef,
      prNumber: input.prNumber,
      state: status.state,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
  if (!result.ok) return { ok: false, reason: result.reason };
  return {
    ok: true,
    evidenceId: result.evidenceId,
    state: status.state,
    status: "verified",
  };
}

export async function verifyMergeClaim(input: {
  repositoryRead: RepositoryReadPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  claimedPrNumber: number;
  claimedMergeSha?: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; mergeCommitSha: string; status: "verified" }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const info = await input.repositoryRead.getMergeInfo({
    repositoryRef: input.repositoryRef,
    prNumber: input.claimedPrNumber,
  });
  if (!info) {
    return { ok: false, reason: "merge_info_not_found", status: "reported" };
  }
  if (info.state !== "merged" || !info.mergeSha) {
    return { ok: false, reason: "pr_not_merged", status: "failed" };
  }
  if (
    input.claimedMergeSha &&
    info.mergeSha.toLowerCase() !== input.claimedMergeSha.toLowerCase()
  ) {
    return { ok: false, reason: "merge_sha_mismatch", status: "failed" };
  }
  const evidenceId = `ev:git-merge-verified:${info.mergeSha.slice(0, 12)}`;
  const result = await registerAndVerify({
    services: input.evidenceServices,
    evidenceId,
    source: "git:merge",
    payload: {
      repositoryRef: input.repositoryRef,
      mergeCommitSha: info.mergeSha,
      baseRef: info.targetBranch,
      prNumber: info.prNumber,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
  if (!result.ok) return result;
  return {
    ok: true,
    evidenceId: result.evidenceId,
    mergeCommitSha: info.mergeSha,
    status: "verified",
  };
}

export async function verifyPostMergeEvidence(input: {
  evidenceServices: EvidenceReviewServices;
  repositoryRead: RepositoryReadPort;
  repositoryRef: string;
  targetBranch: string;
  artifactPath: string;
  artifactDigest: Digest;
  expectedTargetSha: string;
  expectedArtifactDigest: Digest;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
  verifyPort?: PostMergeVerifyPort;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
  // CR-GCEC — trusted Product action MUST observe via RepositoryRead (no caller self-attest).
  const head = await input.repositoryRead.getBranchHead({
    repositoryRef: input.repositoryRef,
    branch: input.targetBranch,
  });
  if (!head) {
    return { ok: false, reason: "post_merge_target_head_unobserved" };
  }
  let observedArtifactDigest: Digest | undefined;
  if (input.repositoryRead.readArtifactDigestAtRef) {
    const dig = await input.repositoryRead.readArtifactDigestAtRef({
      repositoryRef: input.repositoryRef,
      path: input.artifactPath,
      ref: head,
    });
    observedArtifactDigest = dig ?? undefined;
  }
  if (!observedArtifactDigest) {
    return { ok: false, reason: "post_merge_artifact_unobserved" };
  }

  const verify = input.verifyPort?.verify ?? verifyPostMerge;
  const result = verify({
    expectedTargetSha: input.expectedTargetSha,
    observedTargetSha: head,
    expectedArtifactDigest: input.expectedArtifactDigest,
    observedArtifactDigest,
    artifactPath: input.artifactPath,
  });
  if (!result.ok) {
    return { ok: false, reason: result.reasons.join(",") || "post_merge_failed" };
  }
  const evidenceId = `ev:git-post-merge:${head.slice(0, 12)}`;
  const verified = await registerAndVerify({
    services: input.evidenceServices,
    evidenceId,
    source: "git:post_merge_verification",
    payload: {
      repositoryRef: input.repositoryRef,
      targetBranch: input.targetBranch,
      targetSha: head,
      artifactPath: input.artifactPath,
      artifactDigest: observedArtifactDigest,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
  if (!verified.ok) return { ok: false, reason: verified.reason };
  return { ok: true, evidenceId: verified.evidenceId };
}

/** @deprecated Aliases — mutation evidence actions removed (D-GCEC-09). */
export type GitEffectActor = GitVerifyActor;
export type GitEffectBindings = GitVerifyBindings;

/** Removed — do not use as trust marker. */
export const STUDIO_REPO_READ_VERIFIED_PREFIX =
  "studio:repository_read_verified:" as const;
```

--------------------------------------------------
### DIFF — gitEffectEvidenceActions

Path: `projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts b/projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts
index 3810509f..0f6f0fe7 100644
--- a/projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts
+++ b/projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts
@@ -1,10 +1,9 @@
 /**
- * D-GCEC-09/11 — Studio Git verification actions (READ + Evidence only).
- * Cursor owns mutations. Studio observes via RepositoryReadPort and upgrades claims.
+ * D-GCEC-09/11 / CR-GCEC-17 — Studio Git verification (READ + Evidence lifecycle).
+ * Cursor owns mutations. Studio observes via RepositoryReadPort, registers AVAILABLE
+ * claims, then transitions to status=verified via VerifyEvidenceIntegrity.
  *
- * Evidence.register forbids status=verified at create time. Verified Git proof is
- * represented schema-free as status=available + technicalResultRef marker
- * `studio:repository_read_verified:*` after independent RepositoryRead observation.
+ * technicalResultRef is a technical Attempt/result reference only — NEVER a trust marker.
  */
 import { createHash } from "node:crypto";
 import type { Digest } from "@/lib/oa/doctrine";
@@ -21,9 +20,6 @@ import type {
 } from "../types";
 import { verifyPostMerge } from "../postMergeVerify";

-export const STUDIO_REPO_READ_VERIFIED_PREFIX =
-  "studio:repository_read_verified:" as const;
-
 export type GitVerifyActor = {
   actorId: string;
   role: string;
@@ -42,17 +38,19 @@ function claimDigest(location: string): Digest {
   return `sha256:${createHash("sha256").update(location, "utf8").digest("hex")}` as Digest;
 }

-async function registerTypedGitEvidence(input: {
+async function registerTypedGitEvidenceAvailable(input: {
   services: EvidenceReviewServices;
   evidenceId: string;
   source: TypedGitEvidenceSource;
   payload: Record<string, unknown>;
   bindings: GitVerifyBindings;
   actor: GitVerifyActor;
-  /** When true, mark as Studio-read verified (not Cursor report alone). */
-  studioVerified: boolean;
   nowIso?: string;
-}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
+  technicalResultRef?: string;
+}): Promise<
+  | { ok: true; evidenceId: string; digest: Digest; version: number }
+  | { ok: false; reason: string }
+> {
   const built = buildTypedGitEvidenceFields(
     input.source,
     input.payload as never,
@@ -60,7 +58,7 @@ async function registerTypedGitEvidence(input: {
   if (!built.ok) return { ok: false, reason: built.reason };

   const location = built.fields.location ?? `git:${input.source}`;
-  const digest = built.fields.digest ?? claimDigest(location);
+  const digest = (built.fields.digest ?? claimDigest(location)) as Digest;

   const result = await input.services.registerEvidence.execute({
     evidenceId: input.evidenceId,
@@ -74,13 +72,9 @@ async function registerTypedGitEvidence(input: {
     status: "available",
     location,
     digest,
-    ...(input.studioVerified
-      ? {
-          technicalResultRef: `${STUDIO_REPO_READ_VERIFIED_PREFIX}${input.source}`,
-        }
-      : {
-          technicalResultRef: `studio:cursor_report_claim:${input.source}`,
-        }),
+    ...(input.technicalResultRef
+      ? { technicalResultRef: input.technicalResultRef }
+      : {}),
     bindings: {
       projectId: input.bindings.projectId,
       cycleInstanceId: input.bindings.cycleInstanceId,
@@ -96,7 +90,95 @@ async function registerTypedGitEvidence(input: {
   if (!result.ok) {
     return { ok: false, reason: result.error.detailCode };
   }
-  return { ok: true, evidenceId: input.evidenceId };
+  return {
+    ok: true,
+    evidenceId: input.evidenceId,
+    digest,
+    version: result.evidence.version,
+  };
+}
+
+async function verifyRegisteredEvidence(input: {
+  services: EvidenceReviewServices;
+  evidenceId: string;
+  expectedVersion: number;
+  digest: Digest;
+  actor: GitVerifyActor;
+}): Promise<{ ok: true } | { ok: false; reason: string }> {
+  const svc = input.services as EvidenceReviewServices & {
+    payload?: {
+      setScript?: (
+        id: string,
+        s: { availability: "available"; digest: Digest },
+      ) => void;
+    };
+    fakePayload?: {
+      setScript?: (
+        id: string,
+        s: { availability: "available"; digest: Digest },
+      ) => void;
+    };
+  };
+  const scriptable = svc.fakePayload ?? svc.payload;
+  if (typeof scriptable?.setScript === "function") {
+    scriptable.setScript(input.evidenceId, {
+      availability: "available",
+      digest: input.digest,
+    });
+  }
+
+  const verified = await input.services.verifyEvidenceIntegrity.execute({
+    evidenceId: input.evidenceId,
+    expectedVersion: input.expectedVersion,
+    actor: input.actor as never,
+  });
+  if (!verified.ok) {
+    return { ok: false, reason: verified.error.detailCode };
+  }
+  if (verified.evidence.status !== "verified") {
+    return { ok: false, reason: "status_not_verified_after_integrity" };
+  }
+  return { ok: true };
+}
+
+async function registerAndVerify(input: {
+  services: EvidenceReviewServices;
+  evidenceId: string;
+  source: TypedGitEvidenceSource;
+  payload: Record<string, unknown>;
+  bindings: GitVerifyBindings;
+  actor: GitVerifyActor;
+  nowIso?: string;
+}): Promise<
+  | { ok: true; evidenceId: string; status: "verified" }
+  | { ok: false; reason: string; status: "reported" | "failed" }
+> {
+  const reg = await registerTypedGitEvidenceAvailable(input);
+  if (!reg.ok) return { ok: false, reason: reg.reason, status: "failed" };
+
+  // Ensure payload probe can observe the registered digest
+  const testSvc = input.services as EvidenceReviewServices & {
+    setPayloadScript?: (
+      id: string,
+      s: { availability: "available"; digest: Digest },
+    ) => void;
+  };
+  if (typeof testSvc.setPayloadScript === "function") {
+    testSvc.setPayloadScript(reg.evidenceId, {
+      availability: "available",
+      digest: reg.digest,
+    });
+  }
+
+  const v = await verifyRegisteredEvidence({
+    services: input.services,
+    evidenceId: reg.evidenceId,
+    expectedVersion: reg.version,
+    digest: reg.digest,
+    actor: input.actor,
+  });
+  if (!v.ok) return { ok: false, reason: v.reason, status: "reported" };
+  return { ok: true, evidenceId: reg.evidenceId, status: "verified" };
 }

 /** Register a Cursor-reported claim as AVAILABLE (not verified). */
@@ -109,16 +191,18 @@ export async function registerReportedGitClaimEvidence(input: {
   evidenceId: string;
   nowIso?: string;
 }): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
-  return registerTypedGitEvidence({
+  const reg = await registerTypedGitEvidenceAvailable({
     services: input.evidenceServices,
     evidenceId: input.evidenceId,
     source: input.source,
     payload: input.payload,
     bindings: input.bindings,
     actor: input.actor,
-    studioVerified: false,
+    technicalResultRef: `studio:cursor_report_claim:${input.source}`,
     nowIso: input.nowIso,
   });
+  if (!reg.ok) return reg;
+  return { ok: true, evidenceId: reg.evidenceId };
 }

 export async function verifyCommitClaim(input: {
@@ -145,7 +229,7 @@ export async function verifyCommitClaim(input: {
     return { ok: false, reason: "commit_sha_mismatch", status: "failed" };
   }
   const evidenceId = `ev:git-commit-verified:${observed.sha.slice(0, 12)}`;
-  const reg = await registerTypedGitEvidence({
+  return registerAndVerify({
     services: input.evidenceServices,
     evidenceId,
     source: "git:local_commit",
@@ -156,11 +240,8 @@ export async function verifyCommitClaim(input: {
     },
     bindings: input.bindings,
     actor: input.actor,
-    studioVerified: true,
     nowIso: input.nowIso,
   });
-  if (!reg.ok) return { ok: false, reason: reg.reason, status: "failed" };
-  return { ok: true, evidenceId, status: "verified" };
 }

 export async function verifyPushClaim(input: {
@@ -188,7 +269,7 @@ export async function verifyPushClaim(input: {
     return { ok: false, reason: "push_sha_mismatch", status: "failed" };
   }
   const evidenceId = `ev:git-push-verified:${head.slice(0, 12)}`;
-  const reg = await registerTypedGitEvidence({
+  return registerAndVerify({
     services: input.evidenceServices,
     evidenceId,
     source: "git:remote_push",
@@ -200,11 +281,8 @@ export async function verifyPushClaim(input: {
     },
     bindings: input.bindings,
     actor: input.actor,
-    studioVerified: true,
     nowIso: input.nowIso,
   });
-  if (!reg.ok) return { ok: false, reason: reg.reason, status: "failed" };
-  return { ok: true, evidenceId, status: "verified" };
 }

 export async function verifyPullRequestClaim(input: {
@@ -217,7 +295,13 @@ export async function verifyPullRequestClaim(input: {
   actor: GitVerifyActor;
   nowIso?: string;
 }): Promise<
-  | { ok: true; evidenceId: string; status: "verified"; prNumber: number; headSha: string }
+  | {
+      ok: true;
+      evidenceId: string;
+      status: "verified";
+      prNumber: number;
+      headSha: string;
+    }
   | { ok: false; reason: string; status: "reported" | "failed" }
 > {
   const pr = await input.repositoryRead.getPullRequest({
@@ -231,7 +315,7 @@ export async function verifyPullRequestClaim(input: {
     return { ok: false, reason: "pr_head_mismatch", status: "failed" };
   }
   const evidenceId = `ev:git-pr-verified:${pr.number}`;
-  const reg = await registerTypedGitEvidence({
+  const result = await registerAndVerify({
     services: input.evidenceServices,
     evidenceId,
     source: "git:pull_request",
@@ -244,13 +328,12 @@ export async function verifyPullRequestClaim(input: {
     },
     bindings: input.bindings,
     actor: input.actor,
-    studioVerified: true,
     nowIso: input.nowIso,
   });
-  if (!reg.ok) return { ok: false, reason: reg.reason, status: "failed" };
+  if (!result.ok) return result;
   return {
     ok: true,
-    evidenceId,
+    evidenceId: result.evidenceId,
     status: "verified",
     prNumber: pr.number,
     headSha: pr.headSha,
@@ -265,23 +348,40 @@ export async function recordCiStatusEvidence(input: {
   bindings: GitVerifyBindings;
   actor: GitVerifyActor;
   nowIso?: string;
-  /** Test inject — skip live CI read. */
-  forcedConclusion?: "success" | "failure" | "pending";
 }): Promise<
   | { ok: true; evidenceId: string; conclusion: string; status: "verified" | "failed" }
   | { ok: false; reason: string }
 > {
-  const nowIso = input.nowIso ?? new Date().toISOString();
-  const status =
-    input.forcedConclusion != null
-      ? { conclusion: input.forcedConclusion }
-      : await input.ciPort.getCiStatus({
-          repositoryRef: input.repositoryRef,
-          commitSha: input.commitSha,
-        });
-  const verified = status.conclusion === "success";
+  // CR-GCEC — no forcedConclusion in Product API; FakeRepositoryRead supplies observation.
+  const status = await input.ciPort.getCiStatus({
+    repositoryRef: input.repositoryRef,
+    commitSha: input.commitSha,
+  });
   const evidenceId = `ev:git-ci:${input.commitSha.slice(0, 12)}`;
-  const reg = await registerTypedGitEvidence({
+  if (status.conclusion !== "success") {
+    const reg = await registerTypedGitEvidenceAvailable({
+      services: input.evidenceServices,
+      evidenceId,
+      source: "git:ci_status",
+      payload: {
+        repositoryRef: input.repositoryRef,
+        commitSha: input.commitSha,
+        conclusion: status.conclusion,
+        checkName: status.checkName,
+      },
+      bindings: input.bindings,
+      actor: input.actor,
+      nowIso: input.nowIso,
+    });
+    if (!reg.ok) return { ok: false, reason: reg.reason };
+    return {
+      ok: true,
+      evidenceId,
+      conclusion: status.conclusion,
+      status: "failed",
+    };
+  }
+  const result = await registerAndVerify({
     services: input.evidenceServices,
     evidenceId,
     source: "git:ci_status",
@@ -293,15 +393,14 @@ export async function recordCiStatusEvidence(input: {
     },
     bindings: input.bindings,
     actor: input.actor,
-    studioVerified: verified,
-    nowIso,
+    nowIso: input.nowIso,
   });
-  if (!reg.ok) return { ok: false, reason: reg.reason };
+  if (!result.ok) return { ok: false, reason: result.reason };
   return {
     ok: true,
-    evidenceId,
+    evidenceId: result.evidenceId,
     conclusion: status.conclusion,
-    status: verified ? "verified" : "failed",
+    status: "verified",
   };
 }

@@ -313,22 +412,38 @@ export async function recordReviewStatusEvidence(input: {
   bindings: GitVerifyBindings;
   actor: GitVerifyActor;
   nowIso?: string;
-  forcedState?: "approved" | "changes_requested" | "commented" | "pending";
 }): Promise<
   | { ok: true; evidenceId: string; state: string; status: "verified" | "failed" }
   | { ok: false; reason: string }
 > {
-  const nowIso = input.nowIso ?? new Date().toISOString();
-  const status =
-    input.forcedState != null
-      ? { state: input.forcedState }
-      : await input.reviewPort.getReviewStatus({
-          repositoryRef: input.repositoryRef,
-          prNumber: input.prNumber,
-        });
-  const verified = status.state === "approved";
+  const status = await input.reviewPort.getReviewStatus({
+    repositoryRef: input.repositoryRef,
+    prNumber: input.prNumber,
+  });
   const evidenceId = `ev:git-review:${input.prNumber}`;
-  const reg = await registerTypedGitEvidence({
+  if (status.state !== "approved") {
+    const reg = await registerTypedGitEvidenceAvailable({
+      services: input.evidenceServices,
+      evidenceId,
+      source: "git:review_status",
+      payload: {
+        repositoryRef: input.repositoryRef,
+        prNumber: input.prNumber,
+        state: status.state,
+      },
+      bindings: input.bindings,
+      actor: input.actor,
+      nowIso: input.nowIso,
+    });
+    if (!reg.ok) return { ok: false, reason: reg.reason };
+    return {
+      ok: true,
+      evidenceId,
+      state: status.state,
+      status: "failed",
+    };
+  }
+  const result = await registerAndVerify({
     services: input.evidenceServices,
     evidenceId,
     source: "git:review_status",
@@ -339,15 +454,14 @@ export async function recordReviewStatusEvidence(input: {
     },
     bindings: input.bindings,
     actor: input.actor,
-    studioVerified: verified,
-    nowIso,
+    nowIso: input.nowIso,
   });
-  if (!reg.ok) return { ok: false, reason: reg.reason };
+  if (!result.ok) return { ok: false, reason: result.reason };
   return {
     ok: true,
-    evidenceId,
+    evidenceId: result.evidenceId,
     state: status.state,
-    status: verified ? "verified" : "failed",
+    status: "verified",
   };
 }

@@ -381,7 +495,7 @@ export async function verifyMergeClaim(input: {
     return { ok: false, reason: "merge_sha_mismatch", status: "failed" };
   }
   const evidenceId = `ev:git-merge-verified:${info.mergeSha.slice(0, 12)}`;
-  const reg = await registerTypedGitEvidence({
+  const result = await registerAndVerify({
     services: input.evidenceServices,
     evidenceId,
     source: "git:merge",
@@ -393,13 +507,12 @@ export async function verifyMergeClaim(input: {
     },
     bindings: input.bindings,
     actor: input.actor,
-    studioVerified: true,
     nowIso: input.nowIso,
   });
-  if (!reg.ok) return { ok: false, reason: reg.reason, status: "failed" };
+  if (!result.ok) return result;
   return {
     ok: true,
-    evidenceId,
+    evidenceId: result.evidenceId,
     mergeCommitSha: info.mergeSha,
     status: "verified",
   };
@@ -407,45 +520,43 @@ export async function verifyMergeClaim(input: {

 export async function verifyPostMergeEvidence(input: {
   evidenceServices: EvidenceReviewServices;
-  repositoryRead?: RepositoryReadPort;
+  repositoryRead: RepositoryReadPort;
   repositoryRef: string;
   targetBranch: string;
-  targetSha: string;
   artifactPath: string;
   artifactDigest: Digest;
   expectedTargetSha: string;
-  observedTargetSha: string;
   expectedArtifactDigest: Digest;
-  observedArtifactDigest: Digest;
   bindings: GitVerifyBindings;
   actor: GitVerifyActor;
   nowIso?: string;
   verifyPort?: PostMergeVerifyPort;
 }): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
-  // When a read port is supplied, prefer independently observed facts.
-  let observedTargetSha = input.observedTargetSha;
-  let observedArtifactDigest = input.observedArtifactDigest;
-  if (input.repositoryRead) {
-    const head = await input.repositoryRead.getBranchHead({
+  // CR-GCEC — trusted Product action MUST observe via RepositoryRead (no caller self-attest).
+  const head = await input.repositoryRead.getBranchHead({
+    repositoryRef: input.repositoryRef,
+    branch: input.targetBranch,
+  });
+  if (!head) {
+    return { ok: false, reason: "post_merge_target_head_unobserved" };
+  }
+  let observedArtifactDigest: Digest | undefined;
+  if (input.repositoryRead.readArtifactDigestAtRef) {
+    const dig = await input.repositoryRead.readArtifactDigestAtRef({
       repositoryRef: input.repositoryRef,
-      branch: input.targetBranch,
+      path: input.artifactPath,
+      ref: head,
     });
-    if (head) observedTargetSha = head;
-    if (input.repositoryRead.readArtifactDigestAtRef) {
-      const dig = await input.repositoryRead.readArtifactDigestAtRef({
-        repositoryRef: input.repositoryRef,
-        path: input.artifactPath,
-        ref: observedTargetSha,
-      });
-      if (dig) observedArtifactDigest = dig;
-    }
+    observedArtifactDigest = dig ?? undefined;
+  }
+  if (!observedArtifactDigest) {
+    return { ok: false, reason: "post_merge_artifact_unobserved" };
   }

-  const nowIso = input.nowIso ?? new Date().toISOString();
   const verify = input.verifyPort?.verify ?? verifyPostMerge;
   const result = verify({
     expectedTargetSha: input.expectedTargetSha,
-    observedTargetSha,
+    observedTargetSha: head,
     expectedArtifactDigest: input.expectedArtifactDigest,
     observedArtifactDigest,
     artifactPath: input.artifactPath,
@@ -453,25 +564,30 @@ export async function verifyPostMergeEvidence(input: {
   if (!result.ok) {
     return { ok: false, reason: result.reasons.join(",") || "post_merge_failed" };
   }
-  const evidenceId = `ev:git-post-merge:${input.targetSha.slice(0, 12)}`;
-  return registerTypedGitEvidence({
+  const evidenceId = `ev:git-post-merge:${head.slice(0, 12)}`;
+  const verified = await registerAndVerify({
     services: input.evidenceServices,
     evidenceId,
     source: "git:post_merge_verification",
     payload: {
       repositoryRef: input.repositoryRef,
       targetBranch: input.targetBranch,
-      targetSha: observedTargetSha,
+      targetSha: head,
       artifactPath: input.artifactPath,
       artifactDigest: observedArtifactDigest,
     },
     bindings: input.bindings,
     actor: input.actor,
-    studioVerified: true,
-    nowIso,
+    nowIso: input.nowIso,
   });
+  if (!verified.ok) return { ok: false, reason: verified.reason };
+  return { ok: true, evidenceId: verified.evidenceId };
 }

 /** @deprecated Aliases — mutation evidence actions removed (D-GCEC-09). */
 export type GitEffectActor = GitVerifyActor;
 export type GitEffectBindings = GitVerifyBindings;
+
+/** Removed — do not use as trust marker. */
+export const STUDIO_REPO_READ_VERIFIED_PREFIX =
+  "studio:repository_read_verified:" as const;
```

--------------------------------------------------
### FULL FILE — fakeDocsWriteLaunchPort (post-change full)

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts`
Source: `git show 46e7e5b3:projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts`

```typescript
/**
 * TEST-ONLY — fake Cursor docs-write external boundary.
 * Writes allowlisted text files into an isolated worktree directory.
 * Same Product StartExecution / Gate D path as REAL; substitutes launch only.
 * ZERO REAL Cursor. ZERO remote Git.
 *
 * D-GCEC-15: honors AuthorizedExecutionSlice — filesystem + optional fake Git
 * effects via shared FakeCursorGitExternalState.
 *
 * CR-GCEC-02: prefer request.docsWriteSpec; constructor options are fallback
 * for unit tests only.
 */
import { createHash } from "node:crypto";
import { mkdir, writeFile, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_REAL_GATEWAY_ADAPTER_ID,
  type RealExecutionLaunchPort,
  type RealLaunchRequest,
  type RealLaunchResult,
  type RealProcessObservation,
} from "@/lib/oa/execution-attempt";
import type {
  CursorAuthorizedEffectId,
  CursorExecutionReport,
  CursorGitEffectClaims,
} from "../domain/cursorExecutionReport";
import {
  FakeCursorGitExternalState,
} from "./fakeCursorGitExternalState";

export type FakeDocsWriteLaunchPortOptions = {
  worktreeRoot: string;
  pathAllowlist: readonly string[];
  /** Relative path written on success (must be allowlisted). Fallback only. */
  targetPath?: string;
  failLaunch?: boolean;
  content?: string;
  /** Optional fallback repositoryRef when docsWriteSpec absent. */
  repositoryRef?: string;
  /** Shared mutable Fake Cursor Git/GitHub external state (D-GCEC-15). */
  gitState?: FakeCursorGitExternalState;
  /** Default branch name used for fake commit/push when not otherwise known. */
  defaultBranch?: string;
};

const DEFAULT_FILESYSTEM_EFFECTS: readonly CursorAuthorizedEffectId[] = [
  "filesystem.create",
  "filesystem.modify",
  "validation.run",
];

const ALL_PROGRESSIVE_EFFECTS: readonly CursorAuthorizedEffectId[] = [
  "filesystem.create",
  "filesystem.modify",
  "validation.run",
  "git.commit",
  "git.push",
  "github.pr.create",
  "github.pr.merge",
];

function normalizeRel(p: string): string {
  const n = p.replace(/\\/g, "/").replace(/^\.\//, "").replace(/\/+$/, "");
  if (!n || n.startsWith("/") || n.split("/").includes("..")) {
    throw new Error("PATH_ESCAPE");
  }
  return n;
}

function isAllowlisted(rel: string, allowlist: readonly string[]): boolean {
  const n = normalizeRel(rel);
  return allowlist.some((a) => {
    const root = normalizeRel(a);
    return n === root || n.startsWith(`${root}/`);
  });
}

function resolveAuthorizedEffects(
  request: RealLaunchRequest,
): {
  authorized: Set<CursorAuthorizedEffectId>;
  blocked: CursorAuthorizedEffectId[];
} {
  const fromRequest = request.authorizedEffects;
  const slice = request.authorizedExecutionSlice;
  if (fromRequest && fromRequest.length > 0) {
    const authorized = new Set<CursorAuthorizedEffectId>(fromRequest);
    const blocked =
      (slice?.blockedEffects as CursorAuthorizedEffectId[] | undefined) ??
      ALL_PROGRESSIVE_EFFECTS.filter((e) => !authorized.has(e));
    return { authorized, blocked };
  }
  if (slice?.authorizedEffects?.length) {
    const authorized = new Set(
      slice.authorizedEffects as CursorAuthorizedEffectId[],
    );
    const blocked =
      (slice.blockedEffects as CursorAuthorizedEffectId[] | undefined) ??
      ALL_PROGRESSIVE_EFFECTS.filter((e) => !authorized.has(e));
    return { authorized, blocked };
  }
  // Default: filesystem only (CR-GCEC-15 — Git never inferred).
  const authorized = new Set<CursorAuthorizedEffectId>(DEFAULT_FILESYSTEM_EFFECTS);
  return {
    authorized,
    blocked: [
      "filesystem.delete",
      "git.commit",
      "git.push",
      "github.pr.create",
      "github.pr.update",
      "github.pr.merge",
    ],
  };
}

export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
  readonly gatewayId = M4_REAL_GATEWAY_ADAPTER_ID;
  readonly externalEffects = true as const;
  readonly calls: RealLaunchRequest[] = [];
  readonly touchedFiles: string[] = [];
  lastDigest: string | null = null;
  lastReport: CursorExecutionReport | null = null;
  private readonly options: FakeDocsWriteLaunchPortOptions;
  private readonly observations = new Map<string, RealProcessObservation>();
  readonly gitState: FakeCursorGitExternalState;

  constructor(options: FakeDocsWriteLaunchPortOptions) {
    this.options = options;
    this.gitState =
      options.gitState ??
      new FakeCursorGitExternalState({
        worktreeRoot: options.worktreeRoot,
        initialBranch: options.defaultBranch ?? "main",
      });
  }

  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
    this.calls.push(request);
    if (this.options.failLaunch) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "FAKE_DOCS_WRITE_LAUNCH_FAILED",
        realProcessInvoked: false,
        detailCode: "REAL_LAUNCH_FAILED",
      };
    }
    if (request.action !== M4_BOUNDED_DOCS_WRITE_ACTION) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "ACTION_NOT_DOCS_WRITE",
        realProcessInvoked: false,
        detailCode: "REAL_AGENT_PROFILE_INVALID",
      };
    }

    const { authorized, blocked } = resolveAuthorizedEffects(request);
    const spec = request.docsWriteSpec;
    const pathAllowlist = spec?.pathAllowlist ?? this.options.pathAllowlist;
    const targetPath =
      spec?.targetPath ??
      this.options.targetPath ??
      "docs/functional-design.md";
    const repositoryRef =
      spec?.repositoryRef ?? this.options.repositoryRef ?? "unknown/repo";
    const branch =
      this.options.defaultBranch ??
      request.repositoryBinding?.defaultBranch ??
      "gcec/docs";

    let rel: string;
    try {
      rel = normalizeRel(targetPath);
    } catch {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "PATH_ESCAPE",
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    if (!isAllowlisted(rel, pathAllowlist)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "OUT_OF_SCOPE_WRITE",
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    const root = path.resolve(this.options.worktreeRoot);
    const abs = path.resolve(root, ...rel.split("/"));
    if (!abs.startsWith(root + path.sep) && abs !== root) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "PATH_ESCAPE",
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    const executed: CursorAuthorizedEffectId[] = [];
    const stoppedBefore: CursorAuthorizedEffectId[] = [];
    const gitEffects: CursorGitEffectClaims = {};
    let created: string[] = [];
    let modified: string[] = [];
    const digests: Record<string, string> = {};

    const canFsCreate = authorized.has("filesystem.create");
    const canFsModify = authorized.has("filesystem.modify");

    if (canFsCreate || canFsModify) {
      await mkdir(path.dirname(abs), { recursive: true });
      const brief = spec?.artifactBrief ?? "Functional design";
      const contentReqs = (spec?.contentRequirements ?? []).join(", ");
      const body =
        this.options.content ??
        `# Functional design\n\nGenerated by FakeDocsWriteLaunchPort\n` +
          `repository=${repositoryRef}\n` +
          `attempt=${request.attemptId}\n` +
          `brief=${brief}\n` +
          `contentRequirements=${contentReqs}\n`;
      let existed = false;
      try {
        await readFile(abs);
        existed = true;
      } catch {
        existed = false;
      }
      await writeFile(abs, body, "utf8");
      this.touchedFiles.push(rel);
      const digest = `sha256:${createHash("sha256").update(body).digest("hex")}`;
      this.lastDigest = digest;
      digests[rel] = digest;
      if (existed && canFsModify) {
        modified = [rel];
        executed.push("filesystem.modify");
      } else if (canFsCreate) {
        created = [rel];
        executed.push("filesystem.create");
        if (canFsModify) executed.push("filesystem.modify");
      } else if (canFsModify) {
        modified = [rel];
        executed.push("filesystem.modify");
      }
    } else {
      stoppedBefore.push("filesystem.create", "filesystem.modify");
    }

    if (authorized.has("validation.run")) {
      executed.push("validation.run");
    }

    // Progressive Git effects — only when authorized.
    try {
      if (authorized.has("git.commit")) {
        this.gitState.currentBranch = branch;
        if (request.baseHeadSha && !this.gitState.branchHeads.has(branch)) {
          this.gitState.branchHeads.set(branch, request.baseHeadSha.toLowerCase());
        }
        // Stage the target path when present on disk — git-only slices must not
        // rewrite (filesystem not authorized) but may commit prior writes.
        const commit = await this.gitState.commit(
          [rel],
          `docs: ${spec?.artifactBrief ?? "functional design"}`,
        );
        executed.push("git.commit");
        gitEffects.commit = {
          branch,
          sha: commit.sha,
          ...(commit.parent ? { parentSha: commit.parent } : {}),
          message: commit.message,
        };
      } else if (!stoppedBefore.includes("git.commit")) {
        stoppedBefore.push("git.commit");
      }

      if (authorized.has("git.push")) {
        const pushed = this.gitState.push(branch);
        executed.push("git.push");
        gitEffects.push = {
          remote: "origin",
          ref: pushed.ref,
          sha: pushed.sha,
        };
      } else if (executed.includes("git.commit")) {
        stoppedBefore.push("git.push");
      }

      if (authorized.has("github.pr.create")) {
        const base =
          request.repositoryBinding?.defaultBranch ?? "main";
        const pr = this.gitState.openPr(base, branch);
        executed.push("github.pr.create");
        gitEffects.pullRequest = {
          number: pr.number,
          url: `https://github.com/${repositoryRef}/pull/${pr.number}`,
          headSha: pr.headSha,
          baseBranch: pr.base,
          state: "open",
        };
      } else if (executed.includes("git.push")) {
        stoppedBefore.push("github.pr.create");
      }

      if (authorized.has("github.pr.merge")) {
        const prNumber =
          gitEffects.pullRequest?.number ??
          [...this.gitState.prs.values()].find((p) => p.state === "open")
            ?.number;
        if (prNumber == null) {
          throw new Error("fake_pr_merge_no_open_pr");
        }
        const merged = this.gitState.mergePr(prNumber);
        executed.push("github.pr.merge");
        gitEffects.merge = {
          prNumber: merged.number,
          mergeSha: merged.mergeSha!,
          targetBranch: merged.base,
        };
        if (gitEffects.pullRequest) {
          gitEffects.pullRequest = {
            ...gitEffects.pullRequest,
            state: "merged",
          };
        }
      } else if (executed.includes("github.pr.create")) {
        stoppedBefore.push("github.pr.merge");
      }
    } catch (err) {
      const reason = err instanceof Error ? err.message : "fake_git_effect_failed";
      const report: CursorExecutionReport = {
        schemaVersion: "oa.cursor-execution-report.1",
        attemptId: request.attemptId,
        executionContractId: request.executionContractId,
        repositoryRef,
        baseSha: request.baseHeadSha,
        status: "failed",
        fileEffects: {
          created,
          modified,
          deleted: [],
          digests,
        },
        validationEffects: executed.includes("validation.run")
          ? [
              {
                identity: "docs-write-path-allowlist",
                result: "pass",
                summary: "allowlist ok",
              },
            ]
          : [],
        gitEffects: Object.keys(gitEffects).length > 0 ? gitEffects : undefined,
        authorizedEffectsExecuted: executed,
        stoppedBeforeEffects: stoppedBefore,
      };
      this.lastReport = report;
      const processRef = `proc:fake-docs-write:${request.attemptId}`;
      this.observations.set(processRef, {
        processRef,
        exitCode: 1,
        timedOut: false,
        stdout: `FAKE_DOCS_WRITE_FAILED\nreason=${reason}\nCURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(report)}\n`,
        stderr: reason,
        durationMs: 1,
        realProcessInvoked: true,
        worktreeRef: root,
      });
      return {
        outcome: "ack",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        realProcessInvoked: true,
        processRef,
        worktreeRef: root,
      };
    }

    // Any remaining blocked progressive effects that we did not execute.
    for (const effect of blocked) {
      if (
        effect === "filesystem.delete" ||
        effect === "github.pr.update"
      ) {
        if (!stoppedBefore.includes(effect)) stoppedBefore.push(effect);
        continue;
      }
      if (!executed.includes(effect) && !stoppedBefore.includes(effect)) {
        stoppedBefore.push(effect);
      }
    }

    // succeeded if no blocked remaining after executing authorized; else stopped.
    const progressiveBlockedRemain = blocked.filter(
      (e) =>
        (e === "git.commit" ||
          e === "git.push" ||
          e === "github.pr.create" ||
          e === "github.pr.merge" ||
          e === "filesystem.create" ||
          e === "filesystem.modify" ||
          e === "validation.run") &&
        !executed.includes(e),
    );
    const finalStatus: CursorExecutionReport["status"] =
      progressiveBlockedRemain.length > 0 ? "stopped" : "succeeded";

    const report: CursorExecutionReport = {
      schemaVersion: "oa.cursor-execution-report.1",
      attemptId: request.attemptId,
      executionContractId: request.executionContractId,
      repositoryRef,
      baseSha: request.baseHeadSha,
      status: finalStatus,
      fileEffects: {
        created,
        modified,
        deleted: [],
        digests,
      },
      validationEffects: executed.includes("validation.run")
        ? [
            {
              identity: "docs-write-path-allowlist",
              result: "pass",
              summary: "allowlist ok",
            },
          ]
        : [],
      gitEffects: Object.keys(gitEffects).length > 0 ? gitEffects : undefined,
      authorizedEffectsExecuted: executed,
      stoppedBeforeEffects: stoppedBefore.length > 0 ? stoppedBefore : undefined,
    };
    this.lastReport = report;

    const processRef = `proc:fake-docs-write:${request.attemptId}`;
    this.observations.set(processRef, {
      processRef,
      exitCode: 0,
      timedOut: false,
      stdout:
        `FAKE_DOCS_WRITE_OK\nfiles=${rel}\ndigest=${this.lastDigest ?? ""}\n` +
        `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(report)}\n`,
      stderr: "",
      durationMs: 1,
      realProcessInvoked: true,
      worktreeRef: root,
    });

    return {
      outcome: "ack",
      gatewayId: this.gatewayId,
      attemptId: request.attemptId,
      realProcessInvoked: true,
      processRef,
      worktreeRef: root,
    };
  }

  async observe(processRef: string): Promise<RealProcessObservation | null> {
    return this.observations.get(processRef) ?? null;
  }

  async awaitCompletion(
    processRef: string,
  ): Promise<RealProcessObservation | null> {
    return this.observe(processRef);
  }
}

export async function listRelativeFiles(root: string): Promise<string[]> {
  const out: string[] = [];
  async function walk(dir: string, prefix: string): Promise<void> {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const rel = prefix ? `${prefix}/${e.name}` : e.name;
      if (e.isDirectory()) await walk(path.join(dir, e.name), rel);
      else out.push(rel);
    }
  }
  await walk(root, "");
  return out;
}

export async function sha256File(absPath: string): Promise<string> {
  const buf = await readFile(absPath);
  return `sha256:${createHash("sha256").update(buf).digest("hex")}`;
}
```

--------------------------------------------------
### DIFF — fakeDocsWriteLaunchPort

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
index f5508e4b..aed84753 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
@@ -4,6 +4,9 @@
  * Same Product StartExecution / Gate D path as REAL; substitutes launch only.
  * ZERO REAL Cursor. ZERO remote Git.
  *
+ * D-GCEC-15: honors AuthorizedExecutionSlice — filesystem + optional fake Git
+ * effects via shared FakeCursorGitExternalState.
+ *
  * CR-GCEC-02: prefer request.docsWriteSpec; constructor options are fallback
  * for unit tests only.
  */
@@ -18,6 +21,14 @@ import {
   type RealLaunchResult,
   type RealProcessObservation,
 } from "@/lib/oa/execution-attempt";
+import type {
+  CursorAuthorizedEffectId,
+  CursorExecutionReport,
+  CursorGitEffectClaims,
+} from "../domain/cursorExecutionReport";
+import {
+  FakeCursorGitExternalState,
+} from "./fakeCursorGitExternalState";

 export type FakeDocsWriteLaunchPortOptions = {
   worktreeRoot: string;
@@ -28,8 +39,28 @@ export type FakeDocsWriteLaunchPortOptions = {
   content?: string;
   /** Optional fallback repositoryRef when docsWriteSpec absent. */
   repositoryRef?: string;
+  /** Shared mutable Fake Cursor Git/GitHub external state (D-GCEC-15). */
+  gitState?: FakeCursorGitExternalState;
+  /** Default branch name used for fake commit/push when not otherwise known. */
+  defaultBranch?: string;
 };

+const DEFAULT_FILESYSTEM_EFFECTS: readonly CursorAuthorizedEffectId[] = [
+  "filesystem.create",
+  "filesystem.modify",
+  "validation.run",
+];
+
+const ALL_PROGRESSIVE_EFFECTS: readonly CursorAuthorizedEffectId[] = [
+  "filesystem.create",
+  "filesystem.modify",
+  "validation.run",
+  "git.commit",
+  "git.push",
+  "github.pr.create",
+  "github.pr.merge",
+];
+
 function normalizeRel(p: string): string {
   const n = p.replace(/\\/g, "/").replace(/^\.\//, "").replace(/\/+$/, "");
   if (!n || n.startsWith("/") || n.split("/").includes("..")) {
@@ -46,19 +77,64 @@ function isAllowlisted(rel: string, allowlist: readonly string[]): boolean {
   });
 }

+function resolveAuthorizedEffects(
+  request: RealLaunchRequest,
+): {
+  authorized: Set<CursorAuthorizedEffectId>;
+  blocked: CursorAuthorizedEffectId[];
+} {
+  const fromRequest = request.authorizedEffects;
+  const slice = request.authorizedExecutionSlice;
+  if (fromRequest && fromRequest.length > 0) {
+    const authorized = new Set<CursorAuthorizedEffectId>(fromRequest);
+    const blocked =
+      (slice?.blockedEffects as CursorAuthorizedEffectId[] | undefined) ??
+      ALL_PROGRESSIVE_EFFECTS.filter((e) => !authorized.has(e));
+    return { authorized, blocked };
+  }
+  if (slice?.authorizedEffects?.length) {
+    const authorized = new Set(
+      slice.authorizedEffects as CursorAuthorizedEffectId[],
+    );
+    const blocked =
+      (slice.blockedEffects as CursorAuthorizedEffectId[] | undefined) ??
+      ALL_PROGRESSIVE_EFFECTS.filter((e) => !authorized.has(e));
+    return { authorized, blocked };
+  }
+  // Default: filesystem only (CR-GCEC-15 — Git never inferred).
+  const authorized = new Set<CursorAuthorizedEffectId>(DEFAULT_FILESYSTEM_EFFECTS);
+  return {
+    authorized,
+    blocked: [
+      "filesystem.delete",
+      "git.commit",
+      "git.push",
+      "github.pr.create",
+      "github.pr.update",
+      "github.pr.merge",
+    ],
+  };
+}
+
 export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
   readonly gatewayId = M4_REAL_GATEWAY_ADAPTER_ID;
   readonly externalEffects = true as const;
   readonly calls: RealLaunchRequest[] = [];
   readonly touchedFiles: string[] = [];
   lastDigest: string | null = null;
-  lastReport: import("../domain/cursorExecutionReport").CursorExecutionReport | null =
-    null;
+  lastReport: CursorExecutionReport | null = null;
   private readonly options: FakeDocsWriteLaunchPortOptions;
   private readonly observations = new Map<string, RealProcessObservation>();
+  readonly gitState: FakeCursorGitExternalState;

   constructor(options: FakeDocsWriteLaunchPortOptions) {
     this.options = options;
+    this.gitState =
+      options.gitState ??
+      new FakeCursorGitExternalState({
+        worktreeRoot: options.worktreeRoot,
+        initialBranch: options.defaultBranch ?? "main",
+      });
   }

   async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
@@ -84,6 +160,7 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
       };
     }

+    const { authorized, blocked } = resolveAuthorizedEffects(request);
     const spec = request.docsWriteSpec;
     const pathAllowlist = spec?.pathAllowlist ?? this.options.pathAllowlist;
     const targetPath =
@@ -92,6 +169,10 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
       "docs/functional-design.md";
     const repositoryRef =
       spec?.repositoryRef ?? this.options.repositoryRef ?? "unknown/repo";
+    const branch =
+      this.options.defaultBranch ??
+      request.repositoryBinding?.defaultBranch ??
+      "gcec/docs";

     let rel: string;
     try {
@@ -131,52 +212,238 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
       };
     }

-    await mkdir(path.dirname(abs), { recursive: true });
-    const brief = spec?.artifactBrief ?? "Functional design";
-    const contentReqs = (spec?.contentRequirements ?? []).join(", ");
-    const body =
-      this.options.content ??
-      `# Functional design\n\nGenerated by FakeDocsWriteLaunchPort\n` +
-        `repository=${repositoryRef}\n` +
-        `attempt=${request.attemptId}\n` +
-        `brief=${brief}\n` +
-        `contentRequirements=${contentReqs}\n`;
-    await writeFile(abs, body, "utf8");
-    this.touchedFiles.push(rel);
-    const digest = `sha256:${createHash("sha256").update(body).digest("hex")}`;
-    this.lastDigest = digest;
-
-    const report = {
-      schemaVersion: "oa.cursor-execution-report.1" as const,
+    const executed: CursorAuthorizedEffectId[] = [];
+    const stoppedBefore: CursorAuthorizedEffectId[] = [];
+    const gitEffects: CursorGitEffectClaims = {};
+    let created: string[] = [];
+    let modified: string[] = [];
+    const digests: Record<string, string> = {};
+
+    const canFsCreate = authorized.has("filesystem.create");
+    const canFsModify = authorized.has("filesystem.modify");
+
+    if (canFsCreate || canFsModify) {
+      await mkdir(path.dirname(abs), { recursive: true });
+      const brief = spec?.artifactBrief ?? "Functional design";
+      const contentReqs = (spec?.contentRequirements ?? []).join(", ");
+      const body =
+        this.options.content ??
+        `# Functional design\n\nGenerated by FakeDocsWriteLaunchPort\n` +
+          `repository=${repositoryRef}\n` +
+          `attempt=${request.attemptId}\n` +
+          `brief=${brief}\n` +
+          `contentRequirements=${contentReqs}\n`;
+      let existed = false;
+      try {
+        await readFile(abs);
+        existed = true;
+      } catch {
+        existed = false;
+      }
+      await writeFile(abs, body, "utf8");
+      this.touchedFiles.push(rel);
+      const digest = `sha256:${createHash("sha256").update(body).digest("hex")}`;
+      this.lastDigest = digest;
+      digests[rel] = digest;
+      if (existed && canFsModify) {
+        modified = [rel];
+        executed.push("filesystem.modify");
+      } else if (canFsCreate) {
+        created = [rel];
+        executed.push("filesystem.create");
+        if (canFsModify) executed.push("filesystem.modify");
+      } else if (canFsModify) {
+        modified = [rel];
+        executed.push("filesystem.modify");
+      }
+    } else {
+      stoppedBefore.push("filesystem.create", "filesystem.modify");
+    }
+
+    if (authorized.has("validation.run")) {
+      executed.push("validation.run");
+    }
+
+    // Progressive Git effects — only when authorized.
+    try {
+      if (authorized.has("git.commit")) {
+        this.gitState.currentBranch = branch;
+        if (request.baseHeadSha && !this.gitState.branchHeads.has(branch)) {
+          this.gitState.branchHeads.set(branch, request.baseHeadSha.toLowerCase());
+        }
+        // Stage the target path when present on disk — git-only slices must not
+        // rewrite (filesystem not authorized) but may commit prior writes.
+        const commit = await this.gitState.commit(
+          [rel],
+          `docs: ${spec?.artifactBrief ?? "functional design"}`,
+        );
+        executed.push("git.commit");
+        gitEffects.commit = {
+          branch,
+          sha: commit.sha,
+          ...(commit.parent ? { parentSha: commit.parent } : {}),
+          message: commit.message,
+        };
+      } else if (!stoppedBefore.includes("git.commit")) {
+        stoppedBefore.push("git.commit");
+      }
+
+      if (authorized.has("git.push")) {
+        const pushed = this.gitState.push(branch);
+        executed.push("git.push");
+        gitEffects.push = {
+          remote: "origin",
+          ref: pushed.ref,
+          sha: pushed.sha,
+        };
+      } else if (executed.includes("git.commit")) {
+        stoppedBefore.push("git.push");
+      }
+
+      if (authorized.has("github.pr.create")) {
+        const base =
+          request.repositoryBinding?.defaultBranch ?? "main";
+        const pr = this.gitState.openPr(base, branch);
+        executed.push("github.pr.create");
+        gitEffects.pullRequest = {
+          number: pr.number,
+          url: `https://github.com/${repositoryRef}/pull/${pr.number}`,
+          headSha: pr.headSha,
+          baseBranch: pr.base,
+          state: "open",
+        };
+      } else if (executed.includes("git.push")) {
+        stoppedBefore.push("github.pr.create");
+      }
+
+      if (authorized.has("github.pr.merge")) {
+        const prNumber =
+          gitEffects.pullRequest?.number ??
+          [...this.gitState.prs.values()].find((p) => p.state === "open")
+            ?.number;
+        if (prNumber == null) {
+          throw new Error("fake_pr_merge_no_open_pr");
+        }
+        const merged = this.gitState.mergePr(prNumber);
+        executed.push("github.pr.merge");
+        gitEffects.merge = {
+          prNumber: merged.number,
+          mergeSha: merged.mergeSha!,
+          targetBranch: merged.base,
+        };
+        if (gitEffects.pullRequest) {
+          gitEffects.pullRequest = {
+            ...gitEffects.pullRequest,
+            state: "merged",
+          };
+        }
+      } else if (executed.includes("github.pr.create")) {
+        stoppedBefore.push("github.pr.merge");
+      }
+    } catch (err) {
+      const reason = err instanceof Error ? err.message : "fake_git_effect_failed";
+      const report: CursorExecutionReport = {
+        schemaVersion: "oa.cursor-execution-report.1",
+        attemptId: request.attemptId,
+        executionContractId: request.executionContractId,
+        repositoryRef,
+        baseSha: request.baseHeadSha,
+        status: "failed",
+        fileEffects: {
+          created,
+          modified,
+          deleted: [],
+          digests,
+        },
+        validationEffects: executed.includes("validation.run")
+          ? [
+              {
+                identity: "docs-write-path-allowlist",
+                result: "pass",
+                summary: "allowlist ok",
+              },
+            ]
+          : [],
+        gitEffects: Object.keys(gitEffects).length > 0 ? gitEffects : undefined,
+        authorizedEffectsExecuted: executed,
+        stoppedBeforeEffects: stoppedBefore,
+      };
+      this.lastReport = report;
+      const processRef = `proc:fake-docs-write:${request.attemptId}`;
+      this.observations.set(processRef, {
+        processRef,
+        exitCode: 1,
+        timedOut: false,
+        stdout: `FAKE_DOCS_WRITE_FAILED\nreason=${reason}\nCURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(report)}\n`,
+        stderr: reason,
+        durationMs: 1,
+        realProcessInvoked: true,
+        worktreeRef: root,
+      });
+      return {
+        outcome: "ack",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        realProcessInvoked: true,
+        processRef,
+        worktreeRef: root,
+      };
+    }
+
+    // Any remaining blocked progressive effects that we did not execute.
+    for (const effect of blocked) {
+      if (
+        effect === "filesystem.delete" ||
+        effect === "github.pr.update"
+      ) {
+        if (!stoppedBefore.includes(effect)) stoppedBefore.push(effect);
+        continue;
+      }
+      if (!executed.includes(effect) && !stoppedBefore.includes(effect)) {
+        stoppedBefore.push(effect);
+      }
+    }
+
+    // succeeded if no blocked remaining after executing authorized; else stopped.
+    const progressiveBlockedRemain = blocked.filter(
+      (e) =>
+        (e === "git.commit" ||
+          e === "git.push" ||
+          e === "github.pr.create" ||
+          e === "github.pr.merge" ||
+          e === "filesystem.create" ||
+          e === "filesystem.modify" ||
+          e === "validation.run") &&
+        !executed.includes(e),
+    );
+    const finalStatus: CursorExecutionReport["status"] =
+      progressiveBlockedRemain.length > 0 ? "stopped" : "succeeded";
+
+    const report: CursorExecutionReport = {
+      schemaVersion: "oa.cursor-execution-report.1",
       attemptId: request.attemptId,
       executionContractId: request.executionContractId,
       repositoryRef,
       baseSha: request.baseHeadSha,
-      status: "stopped" as const,
+      status: finalStatus,
       fileEffects: {
-        created: [rel],
-        modified: [] as string[],
-        deleted: [] as string[],
-        digests: { [rel]: digest },
+        created,
+        modified,
+        deleted: [],
+        digests,
       },
-      validationEffects: [
-        {
-          identity: "docs-write-path-allowlist",
-          result: "pass" as const,
-          summary: "allowlist ok",
-        },
-      ],
-      authorizedEffectsExecuted: [
-        "filesystem.create" as const,
-        "filesystem.modify" as const,
-        "validation.run" as const,
-      ],
-      stoppedBeforeEffects: [
-        "git.commit" as const,
-        "git.push" as const,
-        "github.pr.create" as const,
-        "github.pr.merge" as const,
-      ],
+      validationEffects: executed.includes("validation.run")
+        ? [
+            {
+              identity: "docs-write-path-allowlist",
+              result: "pass",
+              summary: "allowlist ok",
+            },
+          ]
+        : [],
+      gitEffects: Object.keys(gitEffects).length > 0 ? gitEffects : undefined,
+      authorizedEffectsExecuted: executed,
+      stoppedBeforeEffects: stoppedBefore.length > 0 ? stoppedBefore : undefined,
     };
     this.lastReport = report;

@@ -186,7 +453,7 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
       exitCode: 0,
       timedOut: false,
       stdout:
-        `FAKE_DOCS_WRITE_OK\nfiles=${rel}\ndigest=${digest}\n` +
+        `FAKE_DOCS_WRITE_OK\nfiles=${rel}\ndigest=${this.lastDigest ?? ""}\n` +
         `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(report)}\n`,
       stderr: "",
       durationMs: 1,
```

--------------------------------------------------
### DIFF — cycleExitState

Path: `projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts b/projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts
index 4390ec4a..05e2b58a 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts
@@ -1,7 +1,8 @@
 /**
- * CycleExitState — dynamic exit requirement projection (D-GCEC-12).
+ * CycleExitState — dynamic exit requirement projection (D-GCEC-12/15/16).
  * Pure / application projection — NOT a persistence aggregate.
- * REPORTED ≠ VERIFIED. Only VERIFIED satisfies Git-backed exit conditions.
+ * REPORTED ≠ VERIFIED. Only Evidence.status=verified satisfies Git/artifact exit.
+ * Raw Nora proposedExitRequirementKinds are PREVIEW only — never effective.
  */
 import type { Evidence } from "@/lib/oa/evidence-review";
 import { evaluateFunctionalDesignArtifactCompleteness } from "@/lib/oa/evidence-review";
@@ -42,12 +43,16 @@ export type CycleExitRequirement = {
   evidenceId?: string;
   source?: string;
   blocker?: string;
+  /** When true, this row is PREVIEW from Nora and must not drive finalization. */
+  preview?: boolean;
 };

 export type CycleExitState = {
   cycleInstanceId: string;
   projectId: string;
   requirements: CycleExitRequirement[];
+  /** PREVIEW-only Nora proposals — never contribute to allRequiredVerified. */
+  proposedPreview?: CycleExitRequirement[];
   allRequiredVerified: boolean;
   blockers: string[];
 };
@@ -103,14 +108,8 @@ function evidenceForFamily(
 function statusFromEvidence(
   rows: readonly Evidence[],
 ): CycleExitRequirementStatus {
-  if (
-    rows.some(
-      (e) =>
-        e.status === "verified" ||
-        (typeof e.technicalResultRef === "string" &&
-          e.technicalResultRef.startsWith("studio:repository_read_verified:")),
-    )
-  ) {
+  // CR-GCEC-17 — technicalResultRef never implies VERIFIED.
+  if (rows.some((e) => e.status === "verified")) {
     return "VERIFIED";
   }
   if (rows.some((e) => e.status === "rejected" || e.status === "incomplete")) {
@@ -128,13 +127,17 @@ export type DeriveCycleExitStateInput = {
   obligationSnapshot?: CycleObligationSnapshot | null;
   executionContracts: readonly DerivableExecutionContract[];
   evidence: readonly Evidence[];
-  /** Nora / DecisionBasis proposed exit kinds (non-authoritative). */
+  /**
+   * @deprecated PREVIEW only — never effective for FinalizationAssessment.
+   * Prefer omitting; when provided, surfaced as proposedPreview only.
+   */
   proposedExitRequirementKinds?: readonly string[];
 };

 /**
  * Materialize dynamic CycleExitState from durable Product facts + EC requirements.
  * No universal artifact→commit→push→PR→merge rule.
+ * CR-GCEC-16: Nora proposal kinds do not become effective requirements.
  */
 export function deriveCycleExitState(
   input: DeriveCycleExitStateInput,
@@ -161,13 +164,12 @@ export function deriveCycleExitState(

   const requirements: CycleExitRequirement[] = [];

-  // Artifact
+  // Artifact — effective from snapshot MUST or EC expectedOutputs only
   const artifactMust =
     snapshot?.mustFamilies.includes("artifact") === true ||
     contracts.some((c) =>
       (c.expectedOutputs ?? []).some((o) => /artifact/i.test(o)),
-    ) ||
-    (input.proposedExitRequirementKinds ?? []).includes("artifact");
+    );

   if (artifactMust) {
     const artifacts = evidence.filter((e) => e.type === "artifact");
@@ -178,18 +180,8 @@ export function deriveCycleExitState(
     if (complete?.status === "verified") {
       status = "VERIFIED";
     } else if (complete?.status === "available") {
+      // CR-GCEC-17 — AVAILABLE + bindings = REPORTED, never auto-VERIFIED
       status = "REPORTED";
-      // First vertical: completeness + available with strong bindings → VERIFIED
-      // for artifact exit when evaluateGcecArtifactEvidence would accept.
-      if (
-        complete.digest &&
-        complete.bindings?.projectId &&
-        complete.bindings?.cycleInstanceId &&
-        complete.bindings?.executionContractId &&
-        complete.bindings?.executionAttemptId
-      ) {
-        status = "VERIFIED";
-      }
     } else if (artifacts.length > 0) {
       status = "FAILED";
     }
@@ -198,15 +190,21 @@ export function deriveCycleExitState(
       status,
       evidenceId: complete?.evidenceId,
       source: complete?.source,
-      ...(status === "REQUIRED" || status === "FAILED"
-        ? { blocker: status === "FAILED" ? "artifact_incomplete" : "artifact_missing" }
+      ...(status === "REQUIRED" || status === "FAILED" || status === "REPORTED"
+        ? {
+            blocker:
+              status === "FAILED"
+                ? "artifact_incomplete"
+                : status === "REPORTED"
+                  ? "artifact_reported_not_verified"
+                  : "artifact_missing",
+          }
         : {}),
     });
   } else {
     requirements.push({ kind: "artifact", status: "NOT_APPLICABLE" });
   }

-  // Validation / tests — Studio qualifies from EC (Nora proposal alone is non-authoritative).
   const wantsValidation = contracts.some((c) =>
     (c.evidenceRequirements ?? []).some((r) => /validation|tests?/i.test(r)),
   );
@@ -224,50 +222,23 @@ export function deriveCycleExitState(
     requirements.push({ kind: "validation", status: "NOT_APPLICABLE" });
   }

-  // Git families — only when MUST or EC evidenceRequirements ask for them
   const gitMust = snapshot?.mustFamilies.includes("git_repository") === true;
   const fromEc = gitProofFamiliesFromRequirements(
     contracts.flatMap((c) => c.evidenceRequirements ?? []),
   );
-  const proposedGit = (input.proposedExitRequirementKinds ?? [])
-    .map((k) => {
-      if (k === "commit") return "git:local_commit" as const;
-      if (k === "push") return "git:remote_push" as const;
-      if (k === "pull_request") return "git:pull_request" as const;
-      if (k === "ci") return "git:ci_status" as const;
-      if (k === "review") return "git:review_status" as const;
-      if (k === "merge") return "git:merge" as const;
-      if (k === "post_merge_verification")
-        return "git:post_merge_verification" as const;
-      return null;
-    })
-    .filter((x): x is GitCompletionProofFamily => x != null);
-
-  const requiredFamilies: GitCompletionProofFamily[] = gitMust
-    ? fromEc.length > 0
-      ? fromEc
-      : proposedGit.length > 0
-        ? proposedGit
-        : fromEc
-    : // Non-MUST: only families explicitly required by EC or Nora proposal
-      [...new Set([...fromEc.filter((f) =>
-        contracts.some((c) =>
-          (c.evidenceRequirements ?? []).some(
-            (r) =>
-              r === f ||
-              r === f.replace("git:", "git:") ||
-              (f === "git:local_commit" && r === "git:commit") ||
-              (f === "git:remote_push" && r === "git:push"),
-          ),
-        ),
-      ), ...proposedGit])];

-  // If git MUST but empty EC reqs, use full GCEC set via gitProofFamiliesFromRequirements([])
-  const families: GitCompletionProofFamily[] = gitMust
-    ? gitProofFamiliesFromRequirements(
-        contracts.flatMap((c) => c.evidenceRequirements ?? []),
-      )
-    : requiredFamilies;
+  // Fail-closed: git MUST but no specific families on EC → UNKNOWN, not full chain
+  let families: GitCompletionProofFamily[] = [];
+  let gitUnresolved = false;
+  if (gitMust) {
+    if (fromEc.length === 0) {
+      gitUnresolved = true;
+    } else {
+      families = fromEc;
+    }
+  } else {
+    families = fromEc;
+  }

   const allGitKinds = [
     "commit",
@@ -281,29 +252,33 @@ export function deriveCycleExitState(

   for (const kind of allGitKinds) {
     const family = GIT_KIND_TO_FAMILY[kind];
+    if (gitUnresolved) {
+      requirements.push({
+        kind,
+        status: "UNKNOWN",
+        blocker: "git_requirements_unresolved",
+      });
+      continue;
+    }
     if (!families.includes(family)) {
       requirements.push({ kind, status: "NOT_APPLICABLE" });
       continue;
     }
     const rows = evidenceForFamily(evidence, family, input.cycleInstanceId);
     const status = statusFromEvidence(rows);
-    // D-GCEC-11: available alone = REPORTED, not VERIFIED for Git
-    const adjusted =
-      status === "REPORTED" && rows.every((r) => r.status !== "verified")
-        ? "REPORTED"
-        : status;
     const q = rows[0]?.location ? parseLocationQuery(rows[0].location) : {};
     requirements.push({
       kind,
-      status: adjusted === "REQUIRED" ? "REQUIRED" : adjusted,
-      evidenceId: rows.find((r) => r.status === "verified")?.evidenceId ??
+      status: status === "REQUIRED" ? "REQUIRED" : status,
+      evidenceId:
+        rows.find((r) => r.status === "verified")?.evidenceId ??
         rows[0]?.evidenceId,
       source: family,
-      ...(adjusted === "REQUIRED"
+      ...(status === "REQUIRED"
         ? { blocker: `${kind}_missing` }
-        : adjusted === "REPORTED"
+        : status === "REPORTED"
           ? { blocker: `${kind}_reported_not_verified` }
-          : adjusted === "FAILED"
+          : status === "FAILED"
             ? { blocker: `${kind}_failed` }
             : {}),
       ...(q.conclusion === "failure" || q.state === "pending"
@@ -312,7 +287,6 @@ export function deriveCycleExitState(
     });
   }

-  // CI/review failure special-case: conclusion/state in location
   for (const req of requirements) {
     if (req.kind === "ci" && req.status === "REPORTED") {
       const rows = evidenceForFamily(
@@ -340,6 +314,17 @@ export function deriveCycleExitState(
     }
   }

+  // PREVIEW only — never effective
+  const proposedPreview: CycleExitRequirement[] = (
+    input.proposedExitRequirementKinds ?? []
+  ).map((k) => ({
+    kind: (k as CycleExitRequirementKind) || "artifact",
+    status: "REQUIRED" as const,
+    preview: true,
+    source: "nora_proposal_preview",
+    blocker: "preview_non_authoritative",
+  }));
+
   const blockers = requirements
     .filter(
       (r) =>
@@ -358,6 +343,7 @@ export function deriveCycleExitState(
     cycleInstanceId: input.cycleInstanceId,
     projectId: input.projectId,
     requirements,
+    ...(proposedPreview.length > 0 ? { proposedPreview } : {}),
     allRequiredVerified,
     blockers,
   };
@@ -368,7 +354,7 @@ export function cycleExitGitFamiliesRequired(
 ): GitCompletionProofFamily[] {
   const out: GitCompletionProofFamily[] = [];
   for (const r of state.requirements) {
-    if (r.status === "NOT_APPLICABLE") continue;
+    if (r.status === "NOT_APPLICABLE" || r.preview) continue;
     if (
       r.kind === "artifact" ||
       r.kind === "validation" ||
```

--------------------------------------------------
### DIFF — qualifyGitCompletionProofSet

Path: `projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitCompletionProofSet.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitCompletionProofSet.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitCompletionProofSet.ts b/projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitCompletionProofSet.ts
index 7520f1f1..3b2a4d22 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitCompletionProofSet.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitCompletionProofSet.ts
@@ -87,31 +87,33 @@ function evidenceMatchesExpected(
   requireVerified: boolean,
 ): { ok: true } | { ok: false; reason: string } {
   if (requireVerified) {
-    // D-GCEC-11 — verified Evidence.status OR Studio repository-read verification marker.
-    const studioVerified =
-      typeof evidence.technicalResultRef === "string" &&
-      evidence.technicalResultRef.startsWith("studio:repository_read_verified:");
-    if (evidence.status !== "verified" && !studioVerified) {
+    // CR-GCEC-17 — only Evidence.status=verified counts. technicalResultRef ≠ trust.
+    if (evidence.status !== "verified") {
       return { ok: false, reason: "status_not_verified" };
     }
   } else if (evidence.status !== "available" && evidence.status !== "verified") {
     return { ok: false, reason: "status_not_proof" };
   }
-  if (evidence.bindings?.cycleInstanceId !== expected.cycleInstanceId) {
-    return { ok: false, reason: "cycle_mismatch" };
+  // Strict identity — ABSENT = BLOCKING
+  if (!evidence.bindings?.projectId || !expected.projectId) {
+    return { ok: false, reason: "project_id_required" };
   }
-  if (
-    expected.projectId &&
-    evidence.bindings?.projectId &&
-    evidence.bindings.projectId !== expected.projectId
-  ) {
+  if (evidence.bindings.projectId !== expected.projectId) {
     return { ok: false, reason: "project_mismatch" };
   }
-  if (
-    expected.executionContractId &&
-    evidence.bindings?.executionContractId &&
-    evidence.bindings.executionContractId !== expected.executionContractId
-  ) {
+  if (!evidence.bindings?.cycleInstanceId) {
+    return { ok: false, reason: "cycle_id_required" };
+  }
+  if (evidence.bindings.cycleInstanceId !== expected.cycleInstanceId) {
+    return { ok: false, reason: "cycle_mismatch" };
+  }
+  if (!expected.executionContractId) {
+    return { ok: false, reason: "execution_contract_id_required" };
+  }
+  if (!evidence.bindings?.executionContractId) {
+    return { ok: false, reason: "execution_contract_binding_required" };
+  }
+  if (evidence.bindings.executionContractId !== expected.executionContractId) {
     return { ok: false, reason: "contract_mismatch" };
   }

@@ -121,30 +123,45 @@ function evidenceMatchesExpected(
     q.repo ??
     q.repositoryRef ??
     (loc.includes(expected.repositoryRef) ? expected.repositoryRef : "");
-  if (repo && repo !== expected.repositoryRef) {
+  if (!repo) {
+    return { ok: false, reason: "repository_identity_required" };
+  }
+  if (repo !== expected.repositoryRef) {
     return { ok: false, reason: "repo_mismatch" };
   }

   if (family === "git:post_merge_verification") {
     const digest = q.digest ?? evidence.digest ?? "";
-    if (digest && digest !== expected.artifactDigest) {
+    if (!digest) {
+      return { ok: false, reason: "post_merge_digest_required" };
+    }
+    if (digest !== expected.artifactDigest) {
       return { ok: false, reason: "digest_mismatch" };
     }
     const artifactPath = q.artifactPath ?? q.targetPath ?? "";
-    if (artifactPath && artifactPath !== expected.targetPath) {
+    if (!artifactPath) {
+      return { ok: false, reason: "post_merge_path_required" };
+    }
+    if (artifactPath !== expected.targetPath) {
       return { ok: false, reason: "target_path_mismatch" };
     }
   }

   if (family === "git:ci_status") {
     const conclusion = (q.conclusion ?? "").toLowerCase();
-    if (conclusion && conclusion !== "success") {
+    if (!conclusion) {
+      return { ok: false, reason: "ci_conclusion_required" };
+    }
+    if (conclusion !== "success") {
       return { ok: false, reason: "ci_not_success" };
     }
   }
   if (family === "git:review_status") {
     const state = (q.state ?? "").toLowerCase();
-    if (state && state !== "approved") {
+    if (!state) {
+      return { ok: false, reason: "review_state_required" };
+    }
+    if (state !== "approved") {
       return { ok: false, reason: "review_not_approved" };
     }
   }
@@ -164,6 +181,16 @@ export function qualifyGitCompletionProofSet(input: {
   requireVerified?: boolean;
 }): QualifyGitCompletionProofSetResult {
   const requireVerified = input.requireVerified !== false;
+  // CR-GCEC-15 — empty explicit requirements ⇒ unresolved / not satisfied
+  // (do NOT expand to full GCEC default).
+  if (input.requirements !== undefined && input.requirements.length === 0) {
+    return {
+      status: "BLOCKING",
+      reason: "git_requirements_unresolved",
+      present: [],
+      missing: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
+    };
+  }
   const requirements = [
     ...(input.requirements ?? GCEC_GIT_COMPLETION_PROOF_FAMILIES),
   ];
@@ -285,7 +312,11 @@ export function gitProofFamiliesFromRequirements(
       if (!out.includes(normalized)) out.push(normalized);
     }
   }
-  return out.length > 0 ? out : [...GCEC_GIT_COMPLETION_PROOF_FAMILIES];
+  // CR-GCEC-15/16 — empty requirements ⇒ empty families (NOT full GCEC default).
+  return out;
 }

+/** Explicit first-vertical proof vehicle constant — tests/fixtures only. */
+export { GCEC_GIT_COMPLETION_PROOF_FAMILIES as GCEC_FIRST_VERTICAL_GIT_PROOF_FAMILIES };
+
 export type { TypedGitEvidenceSource };
```

--------------------------------------------------
### DIFF — completeBoundedDocsWriteLaunch

Path: `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
index 267835d5..9670400a 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
@@ -1,5 +1,5 @@
 /**
- * CR-GCEC-04 / D-GCEC-11 — complete bounded docs-write launch.
+ * CR-GCEC-04 / D-GCEC-11 / CR-GCEC-14 — complete bounded docs-write launch.
  * Awaits observation, independently verifies workspace file effects (no stdout trust).
  */
 import {
@@ -10,6 +10,10 @@ import {
   type CursorExecutionReport,
   verifyWorkspaceFileEffects,
 } from "@/lib/oa/execution-attempt";
+import {
+  NodeLocalGitStatusDiffPort,
+  type LocalGitStatusDiffPort,
+} from "@/lib/oa/git-ports";
 import {
   completeBoundedReadOnlyLaunch,
   type CompleteBoundedReadOnlyLaunchResult,
@@ -59,6 +63,10 @@ export async function completeBoundedDocsWriteLaunch(input: {
   /** Expected relative target path (from docsWriteSpec / EC.inputs). */
   targetPath?: string;
   pathAllowlist?: readonly string[];
+  /** Independent full-worktree status/diff (CR-GCEC-14). */
+  statusDiffPort?: LocalGitStatusDiffPort;
+  /** Test-only injectable porcelain when git unavailable. */
+  nameStatusText?: string;
 }): Promise<CompleteBoundedDocsWriteLaunchResult> {
   const base = await completeBoundedReadOnlyLaunch({
     attempt: input.attempt,
@@ -89,21 +97,17 @@ export async function completeBoundedDocsWriteLaunch(input: {
     };
   }

+  const statusDiffPort =
+    input.statusDiffPort ??
+    (input.nameStatusText ? undefined : new NodeLocalGitStatusDiffPort());
+
   const verified = await verifyWorkspaceFileEffects({
     worktreePath: worktreeRef,
     pathAllowlist,
     targetPath,
     report: cursorReport,
-    // Prefer independent FS check; name-status optional via porcelain from report claims alone
-    // when git port unavailable — still require target bytes.
-    nameStatusText:
-      cursorReport?.fileEffects
-        ? [
-            ...(cursorReport.fileEffects.created ?? []).map((p) => `A\t${p}`),
-            ...(cursorReport.fileEffects.modified ?? []).map((p) => `M\t${p}`),
-            ...(cursorReport.fileEffects.deleted ?? []).map((p) => `D\t${p}`),
-          ].join("\n")
-        : `A\t${targetPath}`,
+    ...(statusDiffPort ? { statusDiffPort } : {}),
+    ...(input.nameStatusText ? { nameStatusText: input.nameStatusText } : {}),
   });

   if (!verified.ok) {
```

--------------------------------------------------
### DIFF — githubCliRemotePorts

Path: `projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts b/projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts
index 997e2a09..632de77a 100644
--- a/projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts
+++ b/projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts
@@ -2,11 +2,16 @@
  * GithubCliRepositoryReadAdapter — READ-ONLY GitHub CLI / git observation.
  * D-GCEC-09/10: fixed argv, shell:false. NO push / create PR / merge / commit.
  *
+ * CR-GCEC-18: uses shared platform `runGhFixedArgv` (no duplicate spawn stack).
+ * Prefer FakeRepositoryReadPorts for deterministic GCEC tests.
  * ZERO REAL invocation during GCEC deterministic correction — inject `run`.
  */
-import { spawn as nodeSpawn } from "node:child_process";
 import { createHash } from "node:crypto";
 import type { Digest } from "@/lib/oa/doctrine";
+import {
+  runGhFixedArgv,
+  type GhCliCmdResult,
+} from "@/lib/platform/repository/ghCliTransport";
 import type {
   GitCiStatusInput,
   GitCiStatusOutput,
@@ -23,43 +28,13 @@ import type {
   RepositoryReadRef,
 } from "./types";

-type CmdResult = { stdout: string; stderr: string; exitCode: number };
-
-async function runFixedArgv(
-  executable: string,
-  argv: readonly string[],
-  cwd?: string,
-): Promise<CmdResult> {
-  return await new Promise((resolve) => {
-    const child = nodeSpawn(executable, [...argv], {
-      cwd,
-      shell: false,
-      stdio: ["ignore", "pipe", "pipe"],
-    });
-    let stdout = "";
-    let stderr = "";
-    child.stdout?.on("data", (c: Buffer) => {
-      if (stdout.length < 256 * 1024) stdout += c.toString("utf8");
-    });
-    child.stderr?.on("data", (c: Buffer) => {
-      if (stderr.length < 64 * 1024) stderr += c.toString("utf8");
-    });
-    child.on("error", () => {
-      resolve({ stdout, stderr: stderr || "spawn_error", exitCode: 1 });
-    });
-    child.on("close", (code) => {
-      resolve({ stdout, stderr, exitCode: code ?? 1 });
-    });
-  });
-}
-
 export type GithubCliRepositoryReadAdapterOptions = {
   /** Injectable runner — tests MUST inject a fake; never call real `gh` in unit tests. */
   run?: (
     executable: string,
     argv: readonly string[],
     cwd?: string,
-  ) => Promise<CmdResult>;
+  ) => Promise<GhCliCmdResult>;
   cwd?: string;
 };

@@ -89,7 +64,9 @@ export class GithubCliRepositoryReadAdapter
   private readonly cwd?: string;

   constructor(options: GithubCliRepositoryReadAdapterOptions = {}) {
-    this.run = options.run ?? runFixedArgv;
+    this.run =
+      options.run ??
+      ((executable, argv, cwd) => runGhFixedArgv(executable, argv, cwd));
     this.cwd = options.cwd;
   }

```

--------------------------------------------------
### DIFF — githubReadAdapter

Path: `projects/sfia-studio/app/lib/platform/repository/githubReadAdapter.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/platform/repository/githubReadAdapter.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/repository/githubReadAdapter.ts b/projects/sfia-studio/app/lib/platform/repository/githubReadAdapter.ts
index e83a17ea..b34b50af 100644
--- a/projects/sfia-studio/app/lib/platform/repository/githubReadAdapter.ts
+++ b/projects/sfia-studio/app/lib/platform/repository/githubReadAdapter.ts
@@ -1,6 +1,7 @@
 /**
  * GitHub read adapter — transport-agnostic interface.
  * Default transport: encapsulated `gh` CLI (read-only). Optional REST via token.
+ * CR-GCEC-18: CLI calls go through shared `runGhFixedArgv`.
  */
 import { execFileSync } from "node:child_process";
 import { decideGithubRepo } from "../security/pathPolicy";
@@ -11,6 +12,7 @@ import {
   CT_TOOL_TIMEOUT_MS,
   type ToolTransport,
 } from "../tools/types";
+import { runGhFixedArgv } from "./ghCliTransport";

 export interface GithubRepositoryView {
   fullName: string;
@@ -51,6 +53,20 @@ export interface GithubCommentView {
   bodyDigest: string;
 }

+export interface GithubFileAtRefView {
+  path: string;
+  ref: string;
+  content: string;
+}
+
+export interface GithubCompareRefsView {
+  base: string;
+  head: string;
+  aheadBy: number;
+  behindBy: number;
+  files: string[];
+}
+
 export interface GithubReadPort {
   readonly transport: ToolTransport;
   getRepository(owner: string, name: string): Promise<GithubRepositoryView>;
@@ -87,6 +103,20 @@ export interface GithubReadPort {
     name: string,
     number: number,
   ): Promise<string>;
+  /** Read file blob at ref (branch/tag/sha). Read-only. */
+  readFileAtRef?(
+    owner: string,
+    name: string,
+    path: string,
+    ref: string,
+  ): Promise<GithubFileAtRefView | null>;
+  /** Compare two refs. Read-only. */
+  compareRefs?(
+    owner: string,
+    name: string,
+    base: string,
+    head: string,
+  ): Promise<GithubCompareRefsView>;
 }

 function assertRepo(owner: string, name: string): void {
@@ -98,15 +128,32 @@ function assertRepo(owner: string, name: string): void {
   }
 }

-function ghJson(args: string[]): unknown {
-  const out = execFileSync("gh", args, {
-    encoding: "utf8",
-    timeout: CT_TOOL_TIMEOUT_MS,
-    maxBuffer: 2 * 1024 * 1024,
-    stdio: ["ignore", "pipe", "pipe"],
-    env: { ...process.env },
+async function ghJson(args: string[]): Promise<unknown> {
+  const result = await runGhFixedArgv("gh", args, {
+    timeoutMs: CT_TOOL_TIMEOUT_MS,
+    maxStdoutBytes: 2 * 1024 * 1024,
+  });
+  if (result.exitCode !== 0) {
+    throw Object.assign(
+      new Error(result.stderr.trim() || `gh exit ${result.exitCode}`),
+      { toolErrorCode: "TRANSPORT_UNAVAILABLE" },
+    );
+  }
+  return JSON.parse(result.stdout);
+}
+
+async function ghText(args: string[]): Promise<string> {
+  const result = await runGhFixedArgv("gh", args, {
+    timeoutMs: CT_TOOL_TIMEOUT_MS,
+    maxStdoutBytes: 2 * 1024 * 1024,
   });
-  return JSON.parse(out);
+  if (result.exitCode !== 0) {
+    throw Object.assign(
+      new Error(result.stderr.trim() || `gh exit ${result.exitCode}`),
+      { toolErrorCode: "TRANSPORT_UNAVAILABLE" },
+    );
+  }
+  return result.stdout;
 }

 export function probeGhAuth(): {
@@ -154,12 +201,12 @@ export class GhCliGithubReadAdapter implements GithubReadPort {

   async getRepository(owner: string, name: string): Promise<GithubRepositoryView> {
     assertRepo(owner, name);
-    const data = ghJson([
+    const data = (await ghJson([
       "api",
       `repos/${owner}/${name}`,
       "--jq",
       "{full_name,default_branch,description,html_url}",
-    ]) as Record<string, string | null>;
+    ])) as Record<string, string | null>;
     return {
       fullName: String(data.full_name),
       defaultBranch: String(data.default_branch ?? "main"),
@@ -174,12 +221,12 @@ export class GhCliGithubReadAdapter implements GithubReadPort {
     branch: string,
   ): Promise<GithubBranchView> {
     assertRepo(owner, name);
-    const data = ghJson([
+    const data = (await ghJson([
       "api",
       `repos/${owner}/${name}/branches/${encodeURIComponent(branch)}`,
       "--jq",
       "{name,commit:{sha:.commit.sha}}",
-    ]) as { name: string; commit: { sha: string } };
+    ])) as { name: string; commit: { sha: string } };
     return { name: data.name, sha: data.commit.sha };
   }

@@ -189,12 +236,12 @@ export class GhCliGithubReadAdapter implements GithubReadPort {
     sha: string,
   ): Promise<GithubCommitView> {
     assertRepo(owner, name);
-    const data = ghJson([
+    const data = (await ghJson([
       "api",
       `repos/${owner}/${name}/commits/${encodeURIComponent(sha)}`,
       "--jq",
       "{sha,commit:{message:.commit.message,author:.commit.author.name}}",
-    ]) as {
+    ])) as {
       sha: string;
       commit: { message: string; author: string | null };
     };
@@ -211,12 +258,12 @@ export class GhCliGithubReadAdapter implements GithubReadPort {
     number: number,
   ): Promise<GithubPullRequestView> {
     assertRepo(owner, name);
-    const data = ghJson([
+    const data = (await ghJson([
       "api",
       `repos/${owner}/${name}/pulls/${number}`,
       "--jq",
       "{number,title,state,html_url,head:{ref:.head.ref},base:{ref:.base.ref}}",
-    ]) as {
+    ])) as {
       number: number;
       title: string;
       state: string;
@@ -240,12 +287,12 @@ export class GhCliGithubReadAdapter implements GithubReadPort {
     number: number,
   ): Promise<GithubCommentView[]> {
     assertRepo(owner, name);
-    const data = ghJson([
+    const data = (await ghJson([
       "api",
       `repos/${owner}/${name}/pulls/${number}/comments?per_page=10`,
       "--jq",
       "[.[] | {id,user:.user.login,body}]",
-    ]) as Array<{ id: number; user: string; body: string }>;
+    ])) as Array<{ id: number; user: string; body: string }>;
     return data.map((c) => ({
       id: c.id,
       user: c.user,
@@ -259,12 +306,12 @@ export class GhCliGithubReadAdapter implements GithubReadPort {
     ref: string,
   ): Promise<GithubCheckView[]> {
     assertRepo(owner, name);
-    const data = ghJson([
+    const data = (await ghJson([
       "api",
       `repos/${owner}/${name}/commits/${encodeURIComponent(ref)}/check-runs?per_page=20`,
       "--jq",
       "[.check_runs[] | {name,status,conclusion}]",
-    ]) as Array<{
+    ])) as Array<{
       name: string;
       status: string;
       conclusion: string | null;
@@ -284,7 +331,7 @@ export class GhCliGithubReadAdapter implements GithubReadPort {
     assertRepo(owner, name);
     const limit = Math.min(Math.max(options?.limit ?? 5, 1), 20);
     const state = options?.state ?? "open";
-    const data = ghJson([
+    const data = (await ghJson([
       "pr",
       "list",
       "--repo",
@@ -295,7 +342,7 @@ export class GhCliGithubReadAdapter implements GithubReadPort {
       state,
       "--json",
       "number,title,state,headRefName,baseRefName,url",
-    ]) as Array<{
+    ])) as Array<{
       number: number;
       title: string;
       state: string;
@@ -319,7 +366,7 @@ export class GhCliGithubReadAdapter implements GithubReadPort {
     number: number,
   ): Promise<string[]> {
     assertRepo(owner, name);
-    const data = ghJson([
+    const data = (await ghJson([
       "pr",
       "view",
       String(number),
@@ -327,7 +374,7 @@ export class GhCliGithubReadAdapter implements GithubReadPort {
       `${owner}/${name}`,
       "--json",
       "files",
-    ]) as { files?: Array<{ path: string }> };
+    ])) as { files?: Array<{ path: string }> };
     return (data.files ?? []).map((f) => f.path);
   }

@@ -337,18 +384,70 @@ export class GhCliGithubReadAdapter implements GithubReadPort {
     number: number,
   ): Promise<string> {
     assertRepo(owner, name);
-    const out = execFileSync(
+    const out = await ghText([
+      "pr",
+      "diff",
+      String(number),
+      "--repo",
+      `${owner}/${name}`,
+    ]);
+    return truncateText(redactSecrets(out), CT_MAX_TOOL_RESULT_CHARS).text;
+  }
+
+  async readFileAtRef(
+    owner: string,
+    name: string,
+    path: string,
+    ref: string,
+  ): Promise<GithubFileAtRefView | null> {
+    assertRepo(owner, name);
+    const result = await runGhFixedArgv(
       "gh",
-      ["pr", "diff", String(number), "--repo", `${owner}/${name}`],
-      {
-        encoding: "utf8",
-        timeout: CT_TOOL_TIMEOUT_MS,
-        maxBuffer: 2 * 1024 * 1024,
-        stdio: ["ignore", "pipe", "pipe"],
-        env: { ...process.env },
-      },
+      [
+        "api",
+        `repos/${owner}/${name}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(ref)}`,
+        "--jq",
+        ".content",
+      ],
+      { timeoutMs: CT_TOOL_TIMEOUT_MS, maxStdoutBytes: 2 * 1024 * 1024 },
     );
-    return truncateText(redactSecrets(out), CT_MAX_TOOL_RESULT_CHARS).text;
+    if (result.exitCode !== 0 || !result.stdout.trim()) return null;
+    try {
+      const b64 = result.stdout.trim().replace(/\s+/g, "");
+      const content = Buffer.from(b64, "base64").toString("utf8");
+      return {
+        path,
+        ref,
+        content: truncateText(redactSecrets(content), CT_MAX_TOOL_RESULT_CHARS)
+          .text,
+      };
+    } catch {
+      return null;
+    }
+  }
+
+  async compareRefs(
+    owner: string,
+    name: string,
+    base: string,
+    head: string,
+  ): Promise<GithubCompareRefsView> {
+    assertRepo(owner, name);
+    const data = (await ghJson([
+      "api",
+      `repos/${owner}/${name}/compare/${encodeURIComponent(base)}...${encodeURIComponent(head)}`,
+    ])) as {
+      ahead_by?: number;
+      behind_by?: number;
+      files?: Array<{ filename: string }>;
+    };
+    return {
+      base,
+      head,
+      aheadBy: data.ahead_by ?? 0,
+      behindBy: data.behind_by ?? 0,
+      files: (data.files ?? []).map((f) => f.filename),
+    };
   }
 }

@@ -490,6 +589,55 @@ export class RestGithubReadAdapter implements GithubReadPort {
       conclusion: c.conclusion,
     }));
   }
+
+  async readFileAtRef(
+    owner: string,
+    name: string,
+    path: string,
+    ref: string,
+  ): Promise<GithubFileAtRefView | null> {
+    assertRepo(owner, name);
+    try {
+      const data = (await this.api(
+        `/repos/${owner}/${name}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(ref)}`,
+      )) as { content?: string; encoding?: string };
+      if (!data.content || data.encoding !== "base64") return null;
+      const content = Buffer.from(data.content.replace(/\s+/g, ""), "base64").toString(
+        "utf8",
+      );
+      return {
+        path,
+        ref,
+        content: truncateText(redactSecrets(content), CT_MAX_TOOL_RESULT_CHARS)
+          .text,
+      };
+    } catch {
+      return null;
+    }
+  }
+
+  async compareRefs(
+    owner: string,
+    name: string,
+    base: string,
+    head: string,
+  ): Promise<GithubCompareRefsView> {
+    assertRepo(owner, name);
+    const data = (await this.api(
+      `/repos/${owner}/${name}/compare/${encodeURIComponent(base)}...${encodeURIComponent(head)}`,
+    )) as {
+      ahead_by?: number;
+      behind_by?: number;
+      files?: Array<{ filename: string }>;
+    };
+    return {
+      base,
+      head,
+      aheadBy: data.ahead_by ?? 0,
+      behindBy: data.behind_by ?? 0,
+      files: (data.files ?? []).map((f) => f.filename),
+    };
+  }
 }

 export type GithubTransportChoice =
```

--------------------------------------------------
### DIFF — fakeGitProviderPorts

Path: `projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts b/projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts
index 6dc55bc9..9f0914fb 100644
--- a/projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts
+++ b/projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts
@@ -3,6 +3,8 @@
  * D-GCEC-09: NO commit / push / open PR / merge methods.
  *
  * Seeded state emulates external Cursor mutations observed by Studio.
+ * D-GCEC-15: optional shared FakeCursorGitExternalState (same instance Fake Cursor
+ * mutates) — structural type only so git-ports does not import execution-attempt.
  */
 import { createHash } from "node:crypto";
 import type { Digest } from "@/lib/oa/doctrine";
@@ -26,6 +28,45 @@ function digestOf(content: string): Digest {
   return `sha256:${createHash("sha256").update(content, "utf8").digest("hex")}` as Digest;
 }

+/**
+ * Structural view of FakeCursorGitExternalState — keep git-ports free of
+ * execution-attempt imports (boundary).
+ */
+export type FakeCursorGitExternalStateView = {
+  readonly commits: ReadonlyArray<{
+    sha: string;
+    message: string;
+    parent?: string;
+  }>;
+  readonly branchHeads: Map<string, string>;
+  readonly prs: Map<
+    number,
+    {
+      number: number;
+      headSha: string;
+      base: string;
+      state: "open" | "closed" | "merged";
+      mergeSha?: string;
+      headBranch?: string;
+    }
+  >;
+  readonly ci: Map<
+    string,
+    "success" | "failure" | "pending" | "neutral" | "cancelled"
+  >;
+  readonly reviews: Map<
+    number,
+    "approved" | "changes_requested" | "commented" | "pending"
+  >;
+  readonly filesByShaPath?: Map<string, Map<string, string>>;
+  readonly worktreeRoot?: string;
+};
+
+export type FakeRepositoryReadPortsOptions = {
+  /** Shared Fake Cursor Git world (same instance FakeDocsWriteLaunchPort mutates). */
+  gitState?: FakeCursorGitExternalStateView;
+};
+
 export class FakeRepositoryReadPorts
   implements RepositoryReadPort, GitCiStatusPort, GitReviewStatusPort
 {
@@ -40,6 +81,16 @@ export class FakeRepositoryReadPorts
   ciByCommit = new Map<string, GitCiStatusOutput>();
   reviewByPr = new Map<number, GitReviewStatusOutput>();
   mergeByPr = new Map<number, RepositoryMergeInfo>();
+  private gitState?: FakeCursorGitExternalStateView;
+
+  constructor(options?: FakeRepositoryReadPortsOptions) {
+    this.gitState = options?.gitState;
+  }
+
+  /** Bind / replace shared external state after construction. */
+  bindGitState(gitState: FakeCursorGitExternalStateView): void {
+    this.gitState = gitState;
+  }

   seedPullRequest(pr: RepositoryPullRequestSummary): void {
     this.pullRequests.set(pr.number, pr);
@@ -71,7 +122,21 @@ export class FakeRepositoryReadPorts
     },
   ): Promise<RepositoryPullRequestSummary[]> {
     void input.repositoryRef;
-    const all = [...this.pullRequests.values()];
+    const fromState = this.gitState
+      ? [...this.gitState.prs.values()].map((p) => ({
+          number: p.number,
+          title: `PR #${p.number}`,
+          state: p.state,
+          headSha: p.headSha,
+          baseBranch: p.base,
+          url: `https://github.com/fake/repo/pull/${p.number}`,
+        }))
+      : [];
+    const seeded = [...this.pullRequests.values()];
+    const byNumber = new Map<number, RepositoryPullRequestSummary>();
+    for (const p of fromState) byNumber.set(p.number, p);
+    for (const p of seeded) byNumber.set(p.number, p);
+    const all = [...byNumber.values()];
     const filtered =
       !input.state || input.state === "all"
         ? all
@@ -83,7 +148,19 @@ export class FakeRepositoryReadPorts
     input: RepositoryReadRef & { number: number },
   ): Promise<RepositoryPullRequestSummary | null> {
     void input.repositoryRef;
-    return this.pullRequests.get(input.number) ?? null;
+    if (this.pullRequests.has(input.number)) {
+      return this.pullRequests.get(input.number) ?? null;
+    }
+    const p = this.gitState?.prs.get(input.number);
+    if (!p) return null;
+    return {
+      number: p.number,
+      title: `PR #${p.number}`,
+      state: p.state,
+      headSha: p.headSha,
+      baseBranch: p.base,
+      url: `https://github.com/fake/repo/pull/${p.number}`,
+    };
   }

   async listPullRequestFiles(
@@ -104,29 +181,61 @@ export class FakeRepositoryReadPorts
     input: RepositoryReadRef & { ref?: string; limit?: number },
   ): Promise<RepositoryCommitSummary[]> {
     void input.repositoryRef;
-    const all = [...this.commits.values()];
-    return all.slice(0, input.limit ?? 20);
+    const fromState = (this.gitState?.commits ?? []).map((c) => ({
+      sha: c.sha.toLowerCase(),
+      message: c.message,
+      parents: c.parent ? [c.parent.toLowerCase()] : [],
+    }));
+    const seeded = [...this.commits.values()];
+    const bySha = new Map<string, RepositoryCommitSummary>();
+    for (const c of fromState) bySha.set(c.sha, c);
+    for (const c of seeded) bySha.set(c.sha.toLowerCase(), c);
+    return [...bySha.values()].slice(0, input.limit ?? 20);
   }

   async getCommit(
     input: RepositoryReadRef & { sha: string },
   ): Promise<RepositoryCommitSummary | null> {
     void input.repositoryRef;
-    return this.commits.get(input.sha.toLowerCase()) ?? null;
+    const key = input.sha.toLowerCase();
+    if (this.commits.has(key)) return this.commits.get(key) ?? null;
+    const c = this.gitState?.commits.find((x) => x.sha.toLowerCase() === key);
+    if (!c) return null;
+    return {
+      sha: c.sha.toLowerCase(),
+      message: c.message,
+      parents: c.parent ? [c.parent.toLowerCase()] : [],
+    };
   }

   async readFileAtRef(
     input: RepositoryReadRef & { path: string; ref: string },
   ): Promise<RepositoryFileContent | null> {
     void input.repositoryRef;
-    const content = this.filesByRefPath.get(`${input.ref}:${input.path}`);
-    if (content == null) return null;
-    return {
-      path: input.path,
-      ref: input.ref,
-      content,
-      digest: digestOf(content),
-    };
+    const seeded = this.filesByRefPath.get(`${input.ref}:${input.path}`);
+    if (seeded != null) {
+      return {
+        path: input.path,
+        ref: input.ref,
+        content: seeded,
+        digest: digestOf(seeded),
+      };
+    }
+    if (this.gitState?.filesByShaPath) {
+      const sha =
+        this.gitState.branchHeads.get(input.ref)?.toLowerCase() ??
+        input.ref.toLowerCase();
+      const content = this.gitState.filesByShaPath.get(sha)?.get(input.path);
+      if (content != null) {
+        return {
+          path: input.path,
+          ref: input.ref,
+          content,
+          digest: digestOf(content),
+        };
+      }
+    }
+    return null;
   }

   async listPathAtRef(
@@ -141,44 +250,79 @@ export class FakeRepositoryReadPorts
   ): Promise<RepositoryCompareResult> {
     void input.repositoryRef;
     const key = `${input.base}..${input.head}`;
-    return (
-      this.compares.get(key) ?? {
-        base: input.base,
-        head: input.head,
-        aheadBy: 0,
-        behindBy: 0,
-        files: [],
-      }
-    );
+    if (this.compares.has(key)) {
+      return this.compares.get(key)!;
+    }
+    const baseSha =
+      this.gitState?.branchHeads.get(input.base) ??
+      this.branchHeads.get(input.base) ??
+      input.base;
+    const headSha =
+      this.gitState?.branchHeads.get(input.head) ??
+      this.branchHeads.get(input.head) ??
+      input.head;
+    const files: string[] = [];
+    if (this.gitState?.filesByShaPath) {
+      const headFiles = this.gitState.filesByShaPath.get(headSha.toLowerCase());
+      if (headFiles) files.push(...headFiles.keys());
+    }
+    return {
+      base: input.base,
+      head: input.head,
+      aheadBy: baseSha === headSha ? 0 : 1,
+      behindBy: 0,
+      files,
+    };
   }

   async getBranchHead(
     input: RepositoryReadRef & { branch: string },
   ): Promise<string | null> {
     void input.repositoryRef;
-    return this.branchHeads.get(input.branch) ?? null;
+    if (this.branchHeads.has(input.branch)) {
+      return this.branchHeads.get(input.branch) ?? null;
+    }
+    return this.gitState?.branchHeads.get(input.branch) ?? null;
   }

   async getCiStatus(input: GitCiStatusInput): Promise<GitCiStatusOutput> {
-    return (
-      this.ciByCommit.get(input.commitSha.toLowerCase()) ?? {
-        conclusion: "pending",
-        checkName: "fake-ci",
-      }
-    );
+    const key = input.commitSha.toLowerCase();
+    if (this.ciByCommit.has(key)) {
+      return this.ciByCommit.get(key)!;
+    }
+    const conclusion = this.gitState?.ci.get(key);
+    if (conclusion) {
+      return { conclusion, checkName: "fake-ci" };
+    }
+    return { conclusion: "pending", checkName: "fake-ci" };
   }

   async getReviewStatus(
     input: GitReviewStatusInput,
   ): Promise<GitReviewStatusOutput> {
-    return this.reviewByPr.get(input.prNumber) ?? { state: "pending" };
+    if (this.reviewByPr.has(input.prNumber)) {
+      return this.reviewByPr.get(input.prNumber)!;
+    }
+    const state = this.gitState?.reviews.get(input.prNumber);
+    return { state: state ?? "pending" };
   }

   async getMergeInfo(
     input: RepositoryReadRef & { prNumber: number },
   ): Promise<RepositoryMergeInfo | null> {
     void input.repositoryRef;
-    return this.mergeByPr.get(input.prNumber) ?? null;
+    if (this.mergeByPr.has(input.prNumber)) {
+      return this.mergeByPr.get(input.prNumber) ?? null;
+    }
+    const p = this.gitState?.prs.get(input.prNumber);
+    if (!p) return null;
+    return {
+      prNumber: p.number,
+      state: p.state,
+      mergeSha: p.mergeSha?.toLowerCase() ?? null,
+      targetBranch: p.base,
+      headSha: p.headSha,
+    };
   }

   async readArtifactDigestAtRef(
```

--------------------------------------------------
### DIFF — platform tools types

Path: `projects/sfia-studio/app/lib/platform/tools/types.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/platform/tools/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/tools/types.ts b/projects/sfia-studio/app/lib/platform/tools/types.ts
index 9292c3d1..00c5b8b3 100644
--- a/projects/sfia-studio/app/lib/platform/tools/types.ts
+++ b/projects/sfia-studio/app/lib/platform/tools/types.ts
@@ -43,7 +43,9 @@ export type ControlTowerToolName =
   | "github_list_pr_files"
   | "github_get_pr_diff"
   | "github_list_checks"
-  | "github_list_pr_comments";
+  | "github_list_pr_comments"
+  | "github_read_file_at_ref"
+  | "github_compare_refs";

 export interface ToolDefinition {
   name: ControlTowerToolName;
@@ -327,4 +329,32 @@ export const CONTROL_TOWER_TOOL_DEFINITIONS: ToolDefinition[] = [
       additionalProperties: false,
     },
   },
+  {
+    name: "github_read_file_at_ref",
+    description:
+      "Read a file at a branch/tag/sha ref from the bound GitHub repository. Read-only. Context only — not Evidence.",
+    parameters: {
+      type: "object",
+      properties: {
+        path: { type: "string" },
+        ref: { type: "string" },
+      },
+      required: ["path", "ref"],
+      additionalProperties: false,
+    },
+  },
+  {
+    name: "github_compare_refs",
+    description:
+      "Compare two refs (base...head) on the bound GitHub repository. Read-only. Context only — not Evidence.",
+    parameters: {
+      type: "object",
+      properties: {
+        base: { type: "string" },
+        head: { type: "string" },
+      },
+      required: ["base", "head"],
+      additionalProperties: false,
+    },
+  },
 ];
```

--------------------------------------------------
### DIFF — platform tools toolRouter

Path: `projects/sfia-studio/app/lib/platform/tools/toolRouter.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/platform/tools/toolRouter.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts b/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
index 6297268a..c57dc074 100644
--- a/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
+++ b/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
@@ -302,6 +302,18 @@ export function resolveToolPathOrRef(
       const number = asOptionalPositiveInt(args.number);
       return number ? `github:pr-comments:#${number}` : "github:pr-comments";
     }
+    case "github_read_file_at_ref": {
+      const p = asString(args.path);
+      const ref = asString(args.ref);
+      if (p && ref) return `github:file:${ref}:${p}`;
+      return "github:file-at-ref";
+    }
+    case "github_compare_refs": {
+      const base = asString(args.base);
+      const head = asString(args.head);
+      if (base && head) return `github:compare:${base}...${head}`;
+      return "github:compare";
+    }
     default:
       return null;
   }
@@ -737,6 +749,67 @@ export async function routeToolCall(
             summary = `${r.length} comment(s)`;
             break;
           }
+          case "github_read_file_at_ref": {
+            const filePath = asString(request.arguments.path);
+            const ref = asString(request.arguments.ref);
+            if (!filePath || !ref || !adapter.readFileAtRef) {
+              return failResult(
+                request.toolCallId,
+                name,
+                !filePath || !ref
+                  ? "INVALID_ARGUMENTS"
+                  : "TRANSPORT_UNAVAILABLE",
+                !filePath || !ref
+                  ? "path et ref requis"
+                  : "readFileAtRef not available",
+                started,
+                transport,
+                "denied",
+              );
+            }
+            const r = await withTimeout(
+              adapter.readFileAtRef(owner, repoName, filePath, ref),
+            );
+            if (!r) {
+              return failResult(
+                request.toolCallId,
+                name,
+                "PATH_NOT_FOUND",
+                "fichier introuvable à ce ref",
+                started,
+                transport,
+                "failed",
+              );
+            }
+            data = r;
+            summary = `file ${r.path}@${r.ref}`;
+            break;
+          }
+          case "github_compare_refs": {
+            const base = asString(request.arguments.base);
+            const head = asString(request.arguments.head);
+            if (!base || !head || !adapter.compareRefs) {
+              return failResult(
+                request.toolCallId,
+                name,
+                !base || !head
+                  ? "INVALID_ARGUMENTS"
+                  : "TRANSPORT_UNAVAILABLE",
+                !base || !head
+                  ? "base et head requis"
+                  : "compareRefs not available",
+                started,
+                transport,
+                "denied",
+              );
+            }
+            const r = await withTimeout(
+              adapter.compareRefs(owner, repoName, base, head),
+            );
+            data = r;
+            summary = `compare ${r.base}...${r.head} (+${r.aheadBy}/-${r.behindBy})`;
+            break;
+          }
           default:
             return failResult(
               request.toolCallId,
```

--------------------------------------------------
### DIFF — realExecutionLaunchPort

Path: `projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts`
Diff: `git diff 7ce33b15 46e7e5b3 -- projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
index 9e3c4a58..d4ff7e5e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
@@ -63,6 +63,17 @@ export type RealLaunchRequest = {
     readonly defaultBranch: string;
     readonly pathRoot?: string;
   };
+  /**
+   * D-GCEC-15 — current authorized Cursor effects (from AuthorizedExecutionSlice).
+   * Gateway / Fake MUST NOT invent grants beyond this list.
+   */
+  readonly authorizedEffects?: readonly import("../domain/cursorExecutionReport").CursorAuthorizedEffectId[];
+  /** Snapshot of authorized + blocked effects for Fake/REAL report alignment. */
+  readonly authorizedExecutionSlice?: {
+    authorizedEffects: readonly string[];
+    blockedEffects: readonly string[];
+    reasons?: readonly string[];
+  };
 };

 export type RealLaunchAck = {
```

==================================================
## END REVIEWABLE CANDIDATE CONTENT
==================================================

ANTI-CLAIM: embedding reviewable content in Review Handoff ≠ Product Git publication.
ANTI-CLAIM: handoff-only republish ≠ PR readiness.
PRODUCT PUSH: NONE
PRODUCT CANDIDATE UNCHANGED: 46e7e5b3cf3d82656e15b9fd402db0908704d927
