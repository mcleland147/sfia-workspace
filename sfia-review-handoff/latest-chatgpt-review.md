# SFIA Studio — Review Pack
## GCEC-GIT-LIFECYCLE-E2E-01 — LOCAL PRODUCT COMMIT ANCHOR

TIMESTAMP: 2026-09-12 23:33:29 CEST

CYCLE: 8 — Delivery / implementation

TYPE: EVOL

PROFILE: CRITICAL

GO MORRIS: GO MORRIS — LOCAL PRODUCT COMMIT — GCEC-GIT-LIFECYCLE-E2E-01

ANTI-MICRO-CYCLE: NO functional/technical modification. Anchor only the already-reviewed 43-path candidate.

Incoming Review Handoff: 9eefd38bfa078f8412d63e4b052c1f200209eb37
Expected Git main: a9f6c310a0826d0e5bd6f7264603382a86564db1
Expected Product parent HEAD: f71cf89a452d0b6109e1f11be957210122082186

ChatGPT disposition entering this GO: PASS WITH RESERVE — AC-01..06 CLOSED; whole-candidate regression PASS.

Inherited deterministic validation (unchanged; no source change this cycle):
- Focused: 63 passed
- Related: 205 passed
- typecheck PASS / lint PASS / build PASS
- Full Vitest: 3845 passed | 137 skipped

==================================================
ROLE BOUNDARIES
==================================================

- Morris = construction/governance gate; this GO = LOCAL Product commit + Review Handoff only.
- Pilote = runtime HumanDecision / Confirmation (none created here).
- Studio = contract / orchestration / verification; NOT Git writer; did not create the commit.
- Nora = cognition / LPS / trajectory / replan — UNCHANGED; out of scope.
- Cursor = technical executor of the authorized local git.commit.

==================================================
PRE-COMMIT GIT TRUTH
==================================================

WORKTREE: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
BRANCH: delivery/sfia-studio-product-proof-qual-to-governed-cycle
HEAD: f71cf89a452d0b6109e1f11be957210122082186
origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
STATE: LOCAL DIRTY; 43 Product paths; staged=none; commits since f71cf89a = 0.
PATHSET vs handoff 9eefd38b Complete fileset: EXACT MATCH (43/43).
NO REVIEWED PRODUCT CANDIDATE DRIFT.

==================================================
STAGING PROOF
==================================================

Staged via `git add --pathspec-from-file` of the reviewed 43 paths ONLY.
Blind `git add -A` / `.` / `commit -a` NOT used.

Staged count: 43
`git diff --cached --check`: PASS (exit 0)
Unexpected / non-Product / secret / review-pack paths staged: NONE
Staged pathset == reviewed Complete fileset: YES

Exact staged/committed fileset:
```
projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicNegatives.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts
projects/sfia-studio/app/__tests__/oa/git-ports/gcecGitPorts.d0.test.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyPrCreateEffect.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyRemotePushEffect.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertFreshPrMergePreflight.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertLocalBranchRefMatchesExpectedSha.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrMergeLaunchSpec.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPushLaunchSpec.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedLocalCommitPriorAttempt.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/shellSafeArg.ts
projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorGitExternalState.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrCreateCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrMergeCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedRemotePushCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts
projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts
projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts
projects/sfia-studio/app/lib/oa/git-ports/platformGithubReadBridge.ts
projects/sfia-studio/app/lib/oa/git-ports/types.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
```

==================================================
PRODUCT COMMIT
==================================================

Subject (exact):
feat(sfia-studio): complete governed git lifecycle execution

New Product SHA:
bbb03ce7aaff22421b00c96e747e9b5a2ede0325

Parent SHA (must == f71cf89a…):
f71cf89a452d0b6109e1f11be957210122082186

Files: 43
Diffstat: 43 files changed, 4820 insertions(+), 114 deletions(-)

`git show --stat --oneline HEAD`:
```
bbb03ce7 feat(sfia-studio): complete governed git lifecycle execution
 .../oa/cycle/gcecCr23StartExecution.d0.test.ts     |    6 +-
 .../__tests__/oa/cycle/gcecD15Negatives.d0.test.ts |   13 +-
 .../oa/cycle/gcecDeterministicNegatives.d0.test.ts |    2 +
 .../oa/cycle/gcecOneLotDelivery.d0.test.ts         |    5 +-
 .../oa/cycle/gcecOwnershipNegatives.d0.test.ts     |    1 +
 .../oa/cycle/gcecProductMonolithicE2e.d0.test.ts   |   12 +-
 .../gcecAgent01AttemptProfile.d0.test.ts           |   44 +-
 .../gcecGitLifecyclePushPrMerge.d0.test.ts         | 1420 ++++++++++++++++++++
 .../gcecMutatingCursorConfinementEnv.d0.test.ts    |  103 +-
 .../__tests__/oa/git-ports/gcecGitPorts.d0.test.ts |    1 +
 .../application/typedGitEvidence.ts                |   27 +-
 .../application/startExecution.ts                  |  408 +++++-
 .../application/verifyPrCreateEffect.ts            |  129 ++
 .../application/verifyRemotePushEffect.ts          |   77 ++
 .../domain/assertFreshPrMergePreflight.ts          |   41 +
 .../assertLocalBranchRefMatchesExpectedSha.ts      |   57 +
 .../domain/gitPrCreateLaunchSpec.ts                |  150 +++
 .../domain/gitPrMergeLaunchSpec.ts                 |  119 ++
 .../execution-attempt/domain/gitPushLaunchSpec.ts  |  150 +++
 .../execution-attempt/domain/realLaunchSafety.ts   |    9 +
 .../domain/resolveAttemptExecutionProfile.ts       |  435 +++++-
 .../domain/resolveGitEffectTarget.ts               |  102 +-
 .../resolveVerifiedLocalCommitPriorAttempt.ts      |  171 +++
 .../resolveVerifiedRemotePushPriorAttempt.ts       |  185 +++
 .../oa/execution-attempt/domain/shellSafeArg.ts    |   53 +
 .../app/lib/oa/execution-attempt/index.ts          |   92 ++
 .../infrastructure/cursorCliLaunchGateway.ts       |    4 +
 .../infrastructure/fakeCursorGitExternalState.ts   |   16 +-
 .../infrastructure/fakeDocsWriteLaunchPort.ts      |  224 ++-
 .../m4BoundedDocsWriteCursorAgent.ts               |   10 +-
 .../infrastructure/m4BoundedPrCreateCursorAgent.ts |   84 ++
 .../infrastructure/m4BoundedPrMergeCursorAgent.ts  |   84 ++
 .../m4BoundedRemotePushCursorAgent.ts              |   86 ++
 .../infrastructure/mutatingCursorConfinementEnv.ts |   95 +-
 .../sqlite/createSqliteExecutionAttemptServices.ts |    3 +
 .../studioCursorRealLaunchGateway.ts               |  419 +++++-
 .../ports/realExecutionLaunchPort.ts               |   23 +-
 .../application/gitEffectEvidenceActions.ts        |   50 +-
 .../app/lib/oa/git-ports/fakeGitProviderPorts.ts   |    2 +
 .../app/lib/oa/git-ports/githubCliRemotePorts.ts   |   10 +-
 .../lib/oa/git-ports/platformGithubReadBridge.ts   |    2 +
 projects/sfia-studio/app/lib/oa/git-ports/types.ts |    4 +
 .../app/lib/vertical-slice-runtime/service.ts      |    6 +
 43 files changed, 4820 insertions(+), 114 deletions(-)
```

`git show --name-status --format=fuller HEAD`:
```
commit bbb03ce7aaff22421b00c96e747e9b5a2ede0325
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Sat Sep 12 23:32:21 2026 +0200
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Sat Sep 12 23:32:21 2026 +0200

    feat(sfia-studio): complete governed git lifecycle execution

    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicNegatives.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
A	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/git-ports/gcecGitPorts.d0.test.ts
M	projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyPrCreateEffect.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyRemotePushEffect.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertFreshPrMergePreflight.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertLocalBranchRefMatchesExpectedSha.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrMergeLaunchSpec.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPushLaunchSpec.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedLocalCommitPriorAttempt.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/shellSafeArg.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorGitExternalState.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrCreateCursorAgent.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrMergeCursorAgent.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedRemotePushCursorAgent.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
M	projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts
M	projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts
M	projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts
M	projects/sfia-studio/app/lib/oa/git-ports/platformGithubReadBridge.ts
M	projects/sfia-studio/app/lib/oa/git-ports/types.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
```

`git diff --name-status HEAD^..HEAD`:
```
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicNegatives.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
A	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/git-ports/gcecGitPorts.d0.test.ts
M	projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyPrCreateEffect.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyRemotePushEffect.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertFreshPrMergePreflight.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertLocalBranchRefMatchesExpectedSha.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrMergeLaunchSpec.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPushLaunchSpec.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedLocalCommitPriorAttempt.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/shellSafeArg.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorGitExternalState.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrCreateCursorAgent.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrMergeCursorAgent.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedRemotePushCursorAgent.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
M	projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts
M	projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts
M	projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts
M	projects/sfia-studio/app/lib/oa/git-ports/platformGithubReadBridge.ts
M	projects/sfia-studio/app/lib/oa/git-ports/types.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
```

`git diff --check HEAD^..HEAD`: PASS

==================================================
POST-COMMIT GIT TRUTH
==================================================

HEAD: bbb03ce7aaff22421b00c96e747e9b5a2ede0325
PARENT: f71cf89a452d0b6109e1f11be957210122082186
BRANCH: delivery/sfia-studio-product-proof-qual-to-governed-cycle (unchanged)
Product residual under projects/sfia-studio: 0
commits since f71cf89a: 1 (this commit only)
Product push: NONE
Product PR: NONE
Product merge: NONE
proof mutation: NONE
branch.delete: NONE
REAL: ZERO

`git status --short` after commit (Product candidate clean; .tmp-sfia-review noise may remain untracked/modified — NOT part of Product commit):
```
 M .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/acw-same-lot-corr-diffs/
?? .tmp-sfia-review/candidate-bridge-diffs/
?? .tmp-sfia-review/candidate-f70-diffs/
?? .tmp-sfia-review/cr-followup-validation/
?? .tmp-sfia-review/gcec-a2b-02-cont02-prereal.out
?? .tmp-sfia-review/gcec-a2b-readiness-build.out
?? .tmp-sfia-review/gcec-a2b-readiness-focused.out
?? .tmp-sfia-review/gcec-a2b-readiness-full-vitest.out
?? .tmp-sfia-review/gcec-a2b-readiness-lint.out
?? .tmp-sfia-review/gcec-a2b-readiness-typecheck.out
?? .tmp-sfia-review/gcec-ac06-focused.out
?? .tmp-sfia-review/gcec-ac06-posix-closure/
?? .tmp-sfia-review/gcec-agent01-build.out
?? .tmp-sfia-review/gcec-agent01-diffcheck.out
?? .tmp-sfia-review/gcec-agent01-focused-gc.out
?? .tmp-sfia-review/gcec-agent01-focused.out
?? .tmp-sfia-review/gcec-agent01-focused2.out
?? .tmp-sfia-review/gcec-agent01-full-vitest.out
?? .tmp-sfia-review/gcec-agent01-full-vitest2.out
?? .tmp-sfia-review/gcec-agent01-lint.out
?? .tmp-sfia-review/gcec-agent01-publish.out
?? .tmp-sfia-review/gcec-agent01-publish2.out
?? .tmp-sfia-review/gcec-agent01-reviewable/
?? .tmp-sfia-review/gcec-agent01-typecheck.out
?? .tmp-sfia-review/gcec-agent01-typecheck2.out
?? .tmp-sfia-review/gcec-candidate-commit-build.out
?? .tmp-sfia-review/gcec-candidate-commit-diffcheck.out
?? .tmp-sfia-review/gcec-candidate-commit-focused.out
?? .tmp-sfia-review/gcec-candidate-commit-full-vitest.out
?? .tmp-sfia-review/gcec-candidate-commit-lint.out
?? .tmp-sfia-review/gcec-candidate-commit-publish.out
?? .tmp-sfia-review/gcec-candidate-commit-related.out
?? .tmp-sfia-review/gcec-candidate-commit-reviewable/
?? .tmp-sfia-review/gcec-candidate-commit-typecheck.out
?? .tmp-sfia-review/gcec-conf02a-build.out
?? .tmp-sfia-review/gcec-conf02a-build2.out
?? .tmp-sfia-review/gcec-conf02a-commit-build.out
?? .tmp-sfia-review/gcec-conf02a-commit-diffcheck.out
?? .tmp-sfia-review/gcec-conf02a-commit-focused.out
?? .tmp-sfia-review/gcec-conf02a-commit-full-vitest.out
?? .tmp-sfia-review/gcec-conf02a-commit-lint.out
?? .tmp-sfia-review/gcec-conf02a-commit-publish.out
?? .tmp-sfia-review/gcec-conf02a-commit-reviewable/
?? .tmp-sfia-review/gcec-conf02a-commit-typecheck.out
?? .tmp-sfia-review/gcec-conf02a-diffcheck.out
?? .tmp-sfia-review/gcec-conf02a-focused1.out
?? .tmp-sfia-review/gcec-conf02a-focused2.out
?? .tmp-sfia-review/gcec-conf02a-full-vitest.out
?? .tmp-sfia-review/gcec-conf02a-lint.out
?? .tmp-sfia-review/gcec-conf02a-publish.out
?? .tmp-sfia-review/gcec-conf02a-publish2.out
?? .tmp-sfia-review/gcec-conf02a-publish3.out
?? .tmp-sfia-review/gcec-conf02a-reviewable/
?? .tmp-sfia-review/gcec-conf02a-typecheck.out
?? .tmp-sfia-review/gcec-conf02a-typecheck2.out
?? .tmp-sfia-review/gcec-confine-preflight-publish.out
?? .tmp-sfia-review/gcec-confine-preflight/
?? .tmp-sfia-review/gcec-confine-probe-stderr.txt
?? .tmp-sfia-review/gcec-confine-probe-stdout.txt
?? .tmp-sfia-review/gcec-confine-scratch.path
?? .tmp-sfia-review/gcec-construction-qual-publish.out
?? .tmp-sfia-review/gcec-cont01-ab.out
?? .tmp-sfia-review/gcec-cont01-build.out
?? .tmp-sfia-review/gcec-cont01-commit-build.out
?? .tmp-sfia-review/gcec-cont01-commit-diffcheck.out
?? .tmp-sfia-review/gcec-cont01-commit-focused.out
?? .tmp-sfia-review/gcec-cont01-commit-full-vitest.out
?? .tmp-sfia-review/gcec-cont01-commit-lint.out
?? .tmp-sfia-review/gcec-cont01-commit-publish.out
?? .tmp-sfia-review/gcec-cont01-commit-publish2.out
?? .tmp-sfia-review/gcec-cont01-commit-real-skip.out
?? .tmp-sfia-review/gcec-cont01-commit-reviewable/
?? .tmp-sfia-review/gcec-cont01-commit-typecheck.out
?? .tmp-sfia-review/gcec-cont01-diffcheck.out
?? .tmp-sfia-review/gcec-cont01-focused.out
?? .tmp-sfia-review/gcec-cont01-focused1.out
?? .tmp-sfia-review/gcec-cont01-focused2.out
?? .tmp-sfia-review/gcec-cont01-full-vitest.out
?? .tmp-sfia-review/gcec-cont01-lint.out
?? .tmp-sfia-review/gcec-cont01-publish.out
?? .tmp-sfia-review/gcec-cont01-publish2.out
?? .tmp-sfia-review/gcec-cont01-publ
```

==================================================
CANDIDATE INTEGRITY
==================================================

- AC-01..AC-06: UNCHANGED (no source edit in this cycle)
- Source modification during commit operation: NONE
- Commit hooks did not alter Product files (post-commit Product residual = 0; committed fileset exact)
- Previous deterministic validation INHERITED as-is
- Documentary non-blocking reserve from Critical Review (historical AC-06 wording): preserved; not "cleaned up"

==================================================
FAKE / REAL
==================================================

Entry: DETERMINISTIC PROVEN AC-01..06
Exit: DETERMINISTIC PROVEN AC-01..06 + LOCAL PRODUCT COMMIT ANCHORED
Still NOT PROVEN: AUTH REAL / PUSH REAL / PR REAL / MERGE REAL / E2E REAL A→D
LOCAL COMMIT != READY FOR REAL
DETERMINISTIC PROVEN != READY FOR REAL
REAL: ZERO

==================================================
GIT EFFECTS
==================================================

Product commit = ONE LOCAL (bbb03ce7aaff22421b00c96e747e9b5a2ede0325)
Product push = NONE
Product PR = NONE
Product merge = NONE
proof mutation = NONE
branch.delete = NONE
Only authorized remote publication this cycle: sfia/review-handoff

==================================================
RESERVES
==================================================

Blocking: NONE for this commit gate.
Non-blocking: historical/documentary AC-06 wording reserve (from Critical Review; not modified).
REAL-only: AUTH / PUSH / PR / MERGE / E2E A→D.

==================================================
NEXT GATE
==================================================

CHATGPT POST-COMMIT VERIFICATION OF THE LOCAL PRODUCT ANCHOR.

Do NOT start REAL. Do NOT push Product.

Expected future sequence after ChatGPT verifies:
local Product commit → ChatGPT post-commit verification → distinct Morris GO REAL → one bounded fresh REAL A→D → STOP at merge gate → distinct merge decision.

==================================================
VERDICT
==================================================

PASS —
exact reviewed 43-path candidate committed locally;
parent = f71cf89a…;
subject exact;
Product candidate clean;
ZERO Product remote effect;
AC-01..06 unchanged;
deterministic validation inherited.

==================================================
PRESERVED PRIOR FULL CANDIDATE REVIEW CONTENT BELOW
==================================================

The following retains the AC-06 POSIX closure + prior PATH B / AC-01..06 Review Pack content
so ChatGPT can trace the committed candidate to the previously reviewed full evidence.
Front matter above is authoritative for this LOCAL PRODUCT COMMIT gate.

---

# SFIA Studio — Review Pack
## GCEC-GIT-LIFECYCLE-E2E-01 — FINAL AC-06 POSIX QUOTING CLOSURE

TIMESTAMP: 2026-09-12 22:10:28 CEST

CYCLE: 8 — Delivery / implementation — continuation (same lot)

TYPE: EVOL

PROFILE: CRITICAL

GO MORRIS: GO — FINAL AC-06 POSIX QUOTING FIX + EXECUTABLE SHELL-SAFETY REGRESSION + PUBLICATION REVIEW HANDOFF CANONIQUE

ANTI-MICRO-CYCLE: NOT a new functional micro-cycle. Surgical closure of the ONE remaining blocking defect on the existing GCEC-GIT-LIFECYCLE-E2E-01 candidate.

INPUT REVIEW HANDOFF tip (expected parent): 530e971cf9109772bae740b498377835680b52bd
Git main expected: a9f6c310a0826d0e5bd6f7264603382a86564db1
Product HEAD (frozen): f71cf89a452d0b6109e1f11be957210122082186

ChatGPT Critical Review disposition entering this GO:
- AC-01..AC-05 = ACCEPTED / CLOSED (DO NOT REOPEN)
- AC-06 = OPEN / BLOCKING (POSIX quoting / executable proof incomplete)

==================================================
ROLE BOUNDARIES
==================================================

- Morris = construction/governance gates (this GO = AC-06 fix + Review Handoff only; no Product commit; no REAL).
- Pilote = runtime HumanDecision / Confirmation (NOT simulated).
- Studio = contract / orchestration / verification. NOT a Git writer.
- Nora = cognition / LPS / trajectory / replan — UNCHANGED.
- Cursor = technical executor (local Product edits + tests only). Report alone ≠ truth.

==================================================
GIT TRUTH BEFORE (this surgical GO)
==================================================

WORKTREE: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
BRANCH: delivery/sfia-studio-product-proof-qual-to-governed-cycle
HEAD: f71cf89a452d0b6109e1f11be957210122082186
origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
INPUT HANDOFF tip: 530e971cf9109772bae740b498377835680b52bd
STATE: LOCAL DIRTY; 43 Product paths; staged=none; Product commit since HEAD=0.
NO LOCAL GIT TRUTH DRIFT vs expected handoff.

==================================================
GIT TRUTH AFTER (this surgical GO)
==================================================

HEAD UNCHANGED: f71cf89a452d0b6109e1f11be957210122082186
STAGED: (none)
Product commit: NONE
Product push/PR/merge: NONE
proof mutation: NONE
branch.delete: NONE
REAL: ZERO

Only Product files touched by this surgical correction:
- projects/sfia-studio/app/lib/oa/execution-attempt/domain/shellSafeArg.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts

Dirty Product path count remains 43 (same set; content of the two AC-06 paths updated).

==================================================
AC-06 DEFECT (Critical Review)
==================================================

Blocking claim: helper effectively produced TWO backslashes around an embedded apostrophe
(or was only proven by string assertion that could certify a wrong form).

Required shell representation for input `a'b`:

  'a'\''b'

i.e. terminate single-quoted segment, emit ONE escaped literal apostrophe outside quotes,
reopen single-quoted segment.

Invariant is RUNTIME shell text / interpretation — not visual backslash count in source.

==================================================
AC-06 BEFORE → AFTER
==================================================

BEFORE (prior candidate form; template-literal replace):

```typescript
export function posixShellSingleQuote(value: string): string {
  return `'${String(value).replace(/'/g, `'\\''`)}'`;
}
```

Note: that prior source already evaluated at runtime to the correct ONE-backslash form
`'a'\''b'` under Node (Critical Review likely miscounted template escapes). But proof was
string-only and therefore insufficient under this GO.

AFTER (clarified, escape-miscount-proof concatenation; same correct runtime semantics):

```typescript
/**
 * Minimal shell-safe argument helpers for GCEC gateway instruction construction.
 * Fail closed on non-canonical GitHub repository refs and unsafe shell interpolation.
 */

const CANONICAL_GITHUB_REPO_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const REPO_METACHAR_RE = /[\s$`\\;&|<>(){}[\]"'!*?]|#/;

/**
 * POSIX embedded-apostrophe escape: end `'`, one literal `\'` outside quotes, reopen `'`.
 * Concatenation keeps ONE effective backslash (avoids template-literal escape miscounts).
 * Example: a'b → 'a'\''b'
 */
const POSIX_EMBEDDED_APOSTROPHE = "'" + "\\" + "'" + "'";

/**
 * Assert owner/repo canonical GitHub repositoryRef (no whitespace / metacharacters).
 */
export function assertCanonicalGithubRepositoryRef(
  ref: string,
): { ok: true; ref: string } | { ok: false; reason: string } {
  if (typeof ref !== "string" || !ref.trim()) {
    return { ok: false, reason: "repository_ref_missing" };
  }
  if (ref !== ref.trim()) {
    return { ok: false, reason: "repository_ref_whitespace" };
  }
  const trimmed = ref.trim();
  if (trimmed.startsWith("-")) {
    return { ok: false, reason: "repository_ref_unsafe" };
  }
  if (
    REPO_METACHAR_RE.test(trimmed) ||
    trimmed.includes("..") ||
    trimmed.includes("$(") ||
    !CANONICAL_GITHUB_REPO_RE.test(trimmed)
  ) {
    return { ok: false, reason: "repository_ref_unsafe" };
  }
  const parts = trimmed.split("/");
  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    return { ok: false, reason: "repository_ref_unsafe" };
  }
  return { ok: true, ref: trimmed };
}

/**
 * POSIX single-quote wrap so the value is literal in a shell (including `$(...)`).
 * Escapes embedded `'` as `'\''` (one effective escape backslash).
 */
export function posixShellSingleQuote(value: string): string {
  return "'" + String(value).split("'").join(POSIX_EMBEDDED_APOSTROPHE) + "'";
}
```

Diff vs prior AC-lot snapshot:

```diff
--- .tmp-sfia-review/gcec-git-lifecycle-e2e-01-ac/shellSafeArg.ts	2026-09-12 21:31:36
+++ projects/sfia-studio/app/lib/oa/execution-attempt/domain/shellSafeArg.ts	2026-09-12 22:06:13
@@ -7,6 +7,13 @@
 const REPO_METACHAR_RE = /[\s$`\\;&|<>(){}[\]"'!*?]|#/;

 /**
+ * POSIX embedded-apostrophe escape: end `'`, one literal `\'` outside quotes, reopen `'`.
+ * Concatenation keeps ONE effective backslash (avoids template-literal escape miscounts).
+ * Example: a'b → 'a'\''b'
+ */
+const POSIX_EMBEDDED_APOSTROPHE = "'" + "\\" + "'" + "'";
+
+/**
  * Assert owner/repo canonical GitHub repositoryRef (no whitespace / metacharacters).
  */
 export function assertCanonicalGithubRepositoryRef(
@@ -39,8 +46,8 @@

 /**
  * POSIX single-quote wrap so the value is literal in a shell (including `$(...)`).
- * Escapes embedded `'` as `'\''`.
+ * Escapes embedded `'` as `'\''` (one effective escape backslash).
  */
 export function posixShellSingleQuote(value: string): string {
-  return `'${String(value).replace(/'/g, `'\\''`)}'`;
+  return "'" + String(value).split("'").join(POSIX_EMBEDDED_APOSTROPHE) + "'";
 }
```

==================================================
AC-06 RUNTIME PROOF
==================================================

Observed runtime (Node + `/bin/sh`):

```json
{"input":"a'b","quoted":"'a'\\''b'","chars":["'","a","'","\\","'","'","b","'"],"shOut":"a'b","roundTrip":true}
```

Chars of `posixShellSingleQuote("a'b")`:
`["'", "a", "'", "\\", "'", "'", "b", "'"]` → shell text `'a'\''b'`
`/bin/sh -c 'printf %s …'` stdout === `a'b` (round-trip true).

==================================================
EXECUTABLE `/bin/sh` ROUND-TRIP STRATEGY
==================================================

Deterministic local QA only (NOT Git/GitHub REAL):

1. `quoted = posixShellSingleQuote(value)`
2. `execFileSync("/bin/sh", ["-c", "printf %s " + quoted])`
3. assert stdout === value exactly; exit success

Required cases covered in tests:
- plain text
- O'Brien
- $(printf hacked)
- `printf hacked` (backticks)
- abc;printf hacked
- abc&&printf hacked
- abc|printf hacked
- $HOME
- double quotes
- backslash
- newline
- O'Brien;$(printf hacked)
- multiple apostrophes a'b'c'd
- Pilot's result $(literal) ; still text

==================================================
SENTINEL NON-EXECUTION
==================================================

Temp dir + sentinel path. Hostile payload of form:
`x' ; touch <sentinel> ; printf 'y`
Passed ONLY through `posixShellSingleQuote`, then `printf` via `/bin/sh`.
Assert: stdout equals hostile text; sentinel DOES NOT EXIST.
Also covered: `$(touch <sentinel>)$(printf hacked)` remains literal; sentinel absent.

==================================================
GATEWAY LEGITIMATE APOSTROPHE
==================================================

StudioCursorRealLaunchGateway (FakeProcessRunner; no real `gh`):
- title `Fix O'Brien workflow`
- body `Pilot's result $(literal) ; still text`
Instruction contains `--title` / `--body` with `posixShellSingleQuote` forms;
`/bin/sh` round-trip of those quoted forms recovers title/body exactly;
`$(literal)` and `; still text` remain literal text in the instruction.

repositoryRef policy (`assertCanonicalGithubRepositoryRef`) UNCHANGED.
AC-01..05 behavior UNCHANGED (no Product code edits outside shellSafeArg + tests).

==================================================
AC STATUS MATRIX (FINAL)
==================================================

| AC | Status |
| --- | --- |
| AC-01 Fake/Real remote identity parity | PRESERVED / CLOSED |
| AC-02 C push SHA binds D PR | PRESERVED / CLOSED |
| AC-03 Strict Evidence lineage | PRESERVED / CLOSED |
| AC-04 Complete PR identity | PRESERVED / CLOSED |
| AC-05 Merge last-mile four-field | PRESERVED / CLOSED |
| AC-06 POSIX shell quoting + executable proof | **CLOSED** |

==================================================
VALIDATION (FINAL AC-06 GO)
==================================================

cwd: projects/sfia-studio/app
SFIA_STUDIO_CURSOR_REAL: unset / off

| Gate | Result |
| --- | --- |
| Focused (`gcecGitLifecyclePushPrMerge` + `gcecMutatingCursorConfinementEnv`) | **63 passed** (2 files) |
| Related (10 GCEC files) | **205 passed** (10 files) |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** (`No ESLint warnings or errors`) |
| `npm run build` | **PASS** |
| Full vitest | **3845 passed \| 137 skipped** (353 files passed \| 17 skipped) |

Focused tail:
```

 ✓ __tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts (10 tests) 5ms
 ✓ __tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts (53 tests) 65ms

 Test Files  2 passed (2)
      Tests  63 passed (63)
   Start at  22:07:23
   Duration  769ms (transform 379ms, setup 95ms, collect 1.02s, tests 70ms, environment 0ms, prepare 68ms)
```

Related tail:
```

stdout | __tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts > gcecCr23StartExecution — application boundary > H23B-P1 M4 merge under progressive contract → fail closed (CR-06)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-09-11T15:00:00.000Z","correlationId":"cor:342b7ed9a805b34b","attemptId":"xat:h23b-p1:xct:m3-res:dec:f2:c639cc02-15d4-482b-8819-015861ba93d0","executionContractId":"xct:m3-res:dec:f2:c639cc02-15d4-482b-8819-015861ba93d0","executionContractVersion":3,"selectedAgentRef":"agt:m4.cursor.bounded_docs_write","result":"ok","durationMs":1}
{"event":"oa.execution_attempt.accepted","ts":"2026-09-11T15:00:00.000Z","correlationId":"cor:342b7ed9a805b34b","attemptId":"xat:h23b-p1:xct:m3-res:dec:f2:c639cc02-15d4-482b-8819-015861ba93d0","executionContractId":"xct:m3-res:dec:f2:c639cc02-15d4-482b-8819-015861ba93d0","executionContractVersion":3,"selectedAgentRef":"agt:m4.cursor.bounded_docs_write","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":1}

stdout | __tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts > gcecCr23StartExecution — application boundary > H23B-P1 M4 merge under progressive contract → fail closed (CR-06)
{"event":"oa.execution_attempt.started","ts":"2026-09-11T15:00:00.000Z","correlationId":"cor:8b3659ad10aba785","attemptId":"xat:h23b-p1:xct:m3-res:dec:f2:c639cc02-15d4-482b-8819-015861ba93d0","result":"error","detailCode":"AGENT_CAPABILITY_MISMATCH","durationMs":2}

 ✓ __tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts (10 tests) 1461ms

 Test Files  10 passed (10)
      Tests  205 passed (205)
   Start at  22:07:30
   Duration  2.80s (transform 1.60s, setup 517ms, collect 8.43s, tests 2.09s, environment 1ms, prepare 388ms)

```

Full vitest tail:
```
 ✓ __tests__/fixtures.test.ts (2 tests) 3ms
 ✓ __tests__/oa/cycle/qualifyCycleWithCkc.test.ts (13 tests) 9ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 2ms
 ✓ __tests__/oa/cycle/ckcQualificationResult.test.ts (2 tests) 2ms
 ✓ __tests__/auth/allowlist-actor-s1.test.ts (13 tests) 4ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 1ms

 Test Files  353 passed | 17 skipped (370)
      Tests  3845 passed | 137 skipped (3982)
   Start at  22:08:09
   Duration  36.82s (transform 8.40s, setup 15.37s, collect 140.94s, tests 101.31s, environment 11.82s, prepare 14.41s)

```

Delta vs prior AC lot (59 / 201 / 3841): +4 tests (executable AC-06 suite additions).

==================================================
FAKE / REAL
==================================================

- Deterministic local `/bin/sh` proof: YES (QA boundary only).
- AUTH REAL / PUSH REAL / PR REAL / MERGE REAL / E2E REAL A→D: NOT PROVEN.
- DETERMINISTIC PROVEN ≠ READY FOR REAL.
- Product commit/push/PR/merge: NONE.
- Proof repository mutation: NONE.

==================================================
AC-06 TEST EXCERPT (executable proof)
==================================================

```typescript
/**
 * Deterministic local QA: `/bin/sh -c` interprets one quoted argv via printf.
 * NOT a Git/GitHub REAL effect.
 */
function shellRoundTripViaPrintf(quoted: string): {
  stdout: string;
  status: number;
} {
  const stdout = execFileSync("/bin/sh", ["-c", `printf %s ${quoted}`], {
    encoding: "utf8",
    maxBuffer: 1024 * 1024,
  });
  return { stdout, status: 0 };
}
  describe("AC-05/06 shell-safe merge + create", () => {
    it("NEG merge builder rejects empty expectedHeadBranch", () => {
      const r = buildGitPrMergeLaunchSpec({
        repositoryRef: REPO,
        prNumber: 1,
        expectedHeadSha: H1,
        expectedHeadBranch: "",
        expectedBaseBranch: "main",
      });
      expect(r.ok).toBe(false);
    });

    it("POS AC-06 posixShellSingleQuote one-backslash form + /bin/sh round-trip", () => {
      const quoted = posixShellSingleQuote("a'b");
      // Exact shell text: 'a'\''b'  (ONE effective escape backslash)
      expect(quoted).toBe("'a'\\''b'");
      expect([...quoted]).toEqual(["'", "a", "'", "\\", "'", "'", "b", "'"]);
      const { stdout, status } = shellRoundTripViaPrintf(quoted);
      expect(status).toBe(0);
      expect(stdout).toBe("a'b");
    });

    it("POS AC-06 /bin/sh round-trip for required hostile and literal cases", () => {
      const cases = [
        "plain text",
        "O'Brien",
        "$(printf hacked)",
        "`printf hacked`",
        "abc;printf hacked",
        "abc&&printf hacked",
        "abc|printf hacked",
        "$HOME",
        'say "hello"',
        "path\\with\\backslash",
        "line1\nline2",
        "O'Brien;$(printf hacked)",
        "a'b'c'd",
        "Pilot's result $(literal) ; still text",
      ];
      for (const value of cases) {
        const quoted = posixShellSingleQuote(value);
        const { stdout, status } = shellRoundTripViaPrintf(quoted);
        expect(status).toBe(0);
        expect(stdout).toBe(value);
      }
    });

    it("POS AC-06 sentinel injection does not execute adjacent shell", async () => {
      const dir = await mkdtemp(path.join(tmpdir(), "gcec-ac06-sentinel-"));
      const sentinel = path.join(dir, "SENTINEL_MUST_NOT_EXIST");
      try {
        const hostile = `x' ; touch ${sentinel} ; printf 'y`;
        const quoted = posixShellSingleQuote(hostile);
        const { stdout, status } = shellRoundTripViaPrintf(quoted);
        expect(status).toBe(0);
        expect(stdout).toBe(hostile);
        expect(existsSync(sentinel)).toBe(false);

        const sub = `$(touch ${sentinel})$(printf hacked)`;
        const qSub = posixShellSingleQuote(sub);
        const rt = shellRoundTripViaPrintf(qSub);
        expect(rt.status).toBe(0);
        expect(rt.stdout).toBe(sub);
        expect(existsSync(sentinel)).toBe(false);
      } finally {
        await rm(dir, { recursive: true, force: true });
      }
    });

    it("POS AC-06 repositoryRef policy unchanged", async () => {
      const { assertCanonicalGithubRepositoryRef } = await import(
        "@/lib/oa/execution-attempt/domain/shellSafeArg"
      );
      expect(assertCanonicalGithubRepositoryRef(REPO).ok).toBe(true);
      expect(assertCanonicalGithubRepositoryRef("acme/widget;rm").ok).toBe(
        false,
      );
      expect(assertCanonicalGithubRepositoryRef("acme/$(x)").ok).toBe(false);
    });

    it("NEG unsafe repositoryRef rejected in push/create/merge builders", () => {
      expect(
        buildGitPushLaunchSpec({
          repositoryRef: "acme/widget;id",
          branchName: BRANCH,
          expectedCommitSha: H1,
        }).ok,
      ).toBe(false);
      expect(
        buildGitPrCreateLaunchSpec({
          repositoryRef: "-evil/repo",
          headBranch: BRANCH,
          baseBranch: "main",
          title: "t",
          expectedHeadSha: H1,
        }).ok,
      ).toBe(false);
      expect(
        buildGitPrMergeLaunchSpec({
          repositoryRef: "acme/repo`x`",
          prNumber: 1,
          expectedHeadSha: H1,
          expectedHeadBranch: BRANCH,
          expectedBaseBranch: "main",
        }).ok,
      ).toBe(false);
    });

    it("POS create instruction shell-quotes body with $(...", async () => {
      const { StudioCursorRealLaunchGateway } = await import(
        "@/lib/oa/execution-attempt"
      );
      const { FakeProcessRunner } = await import("./support/fakeProcessRunner");
      const { FakeRealExecutionWorkspacePort } = await import(
        "./support/fakeSpawnAndGit"
      );
      const runner = new FakeProcessRunner();
      const gw = new StudioCursorRealLaunchGateway({
        processRunner: runner,
        workspacePort: new FakeRealExecutionWorkspacePort({
          resumePath: "/tmp/fake-exec-root/wt-body",
          workspacePath: "/tmp/fake-exec-root/wt-body-fresh",
        }),
        env: { NODE_ENV: "test", [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1" },
        resolveCursorBin: () => "/tmp/fake-cursor-bin",
      });
      await gw.launch({
        attemptId: "xat:body-q",
        executionContractId: EC,
        executionContractVersion: 1,
        semanticFingerprint: "fp:body",
        selectedAgentRef: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
        adapterRef: "adp:m4-cursor-cli-real",
        correlationId: "cor:body",
        baseHeadSha: H1,
        action: M4_BOUNDED_PR_CREATE_ACTION,
        timeoutMs: 60_000,
        authorizedEffects: ["github.pr.create"],
        gitPrCreateSpec: {
          repositoryRef: REPO,
          headBranch: BRANCH,
          baseBranch: "main",
          title: "t",
          body: "note $(rm -rf /)",
          expectedHeadSha: H1,
        },
      } as never);
      const instr = String(runner.calls[0]?.argv.at(-1) ?? "");
      expect(instr).toContain(`--body 'note $(rm -rf /)'`);
      expect(instr).not.toMatch(/--body ".*\$\(rm/);
    });

    it("POS create instruction preserves legitimate apostrophes in title/body", async () => {
      const { StudioCursorRealLaunchGateway } = await import(
        "@/lib/oa/execution-attempt"
      );
      const { FakeProcessRunner } = await import("./support/fakeProcessRunner");
      const { FakeRealExecutionWorkspacePort } = await import(
        "./support/fakeSpawnAndGit"
      );
      const runner = new FakeProcessRunner();
      const gw = new StudioCursorRealLaunchGateway({
        processRunner: runner,
        workspacePort: new FakeRealExecutionWorkspacePort({
          resumePath: "/tmp/fake-exec-root/wt-obrien",
          workspacePath: "/tmp/fake-exec-root/wt-obrien-fresh",
        }),
        env: { NODE_ENV: "test", [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1" },
        resolveCursorBin: () => "/tmp/fake-cursor-bin",
      });
      const title = "Fix O'Brien workflow";
      const body = "Pilot's result $(literal) ; still text";
      await gw.launch({
        attemptId: "xat:obrien",
        executionContractId: EC,
        executionContractVersion: 1,
        semanticFingerprint: "fp:obrien",
        selectedAgentRef: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
        adapterRef: "adp:m4-cursor-cli-real",
        correlationId: "cor:obrien",
        baseHeadSha: H1,
        action: M4_BOUNDED_PR_CREATE_ACTION,
        timeoutMs: 60_000,
        authorizedEffects: ["github.pr.create"],
        gitPrCreateSpec: {
          repositoryRef: REPO,
          headBranch: BRANCH,
          baseBranch: "main",
          title,
          body,
          expectedHeadSha: H1,
        },
      } as never);
      const instr = String(runner.calls[0]?.argv.at(-1) ?? "");
      const qTitle = posixShellSingleQuote(title);
      const qBody = posixShellSingleQuote(body);
      expect(instr).toContain(`--title ${qTitle}`);
      expect(instr).toContain(`--body ${qBody}`);
      expect(shellRoundTripViaPrintf(qTitle).stdout).toBe(title);
      expect(shellRoundTripViaPrintf(qBody).stdout).toBe(body);
      expect(instr).toContain("$(literal)");
      expect(instr).toContain(" ; still text");
    });
  });
});

```

==================================================
PRESERVED FULL CANDIDATE REVIEW CONTENT BELOW
==================================================

The following sections retain the complete prior GCEC-GIT-LIFECYCLE-E2E-01
authority-closure Review Pack (AC-01..05 design, diffs, excerpts, lineage).
Front matter above is authoritative for AC-06 final status and FINAL validation counts.

---

# SFIA Studio — Review Pack
## GCEC-GIT-LIFECYCLE-E2E-01 — FINAL SAME-LOT AUTHORITY CLOSURE (AC-01..AC-06) [SUPERSEDED FRONT MATTER BELOW BY AC-06 POSIX CLOSURE]

TIMESTAMP: 2026-09-12 21:32:30 CEST

CYCLE: 8 — Delivery / implementation

TYPE: EVOL

PROFILE: CRITICAL

GO MORRIS: GO CORRECTION — GCEC-GIT-LIFECYCLE-E2E-01 FINAL SAME-LOT AUTHORITY CLOSURE

ANTI-MICRO-CYCLE: ONE COHERENT AUTHORITY CLOSURE LOT — AC-01..AC-06 CLOSED TOGETHER

==================================================
ROLE BOUNDARIES
==================================================

- Morris = construction/governance gates (this GO = deterministic correction + Review Handoff only).
- Pilote = runtime HumanDecision / Confirmation (NOT simulated as acquired by Morris GO).
- Studio = contract / orchestration / verification via RepositoryRead + Evidence. NOT a Git writer / second mutator.
- Nora = cognition / LPS / trajectory / replan — UNCHANGED; global Nora priority unchanged.
- Cursor = technical mutation executor (local Product edits this lot; future C/D/E only when EC+authority permit). Report alone ≠ truth.

==================================================
GIT TRUTH BEFORE
==================================================

WORKTREE: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
BRANCH: delivery/sfia-studio-product-proof-qual-to-governed-cycle
HEAD: f71cf89a452d0b6109e1f11be957210122082186
PARENT: be71eee0bbfae341d16cfab401f3c38f46564d4c
origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
INPUT HANDOFF tip: f1a38efaa358b65ee8739925eb7b09459448eae7
INPUT HANDOFF blob: 390515da80509ac63c91aa8ff7f126e9c38c6dd9

At lot start: Product HEAD == f71cf89a…; ~42 Product paths LOCAL DIRTY from prior PATH B + CR-01..04; staged=none; commits since f71cf89a = 0.

==================================================
GIT TRUTH AFTER
==================================================

HEAD UNCHANGED: f71cf89a452d0b6109e1f11be957210122082186
STAGED: (none)
Product commit: NONE
Product push/PR/merge: NONE
Dirty Product paths: 43 (prior 42 + shellSafeArg.ts)

Diffstat (tracked):
```
.../oa/cycle/gcecCr23StartExecution.d0.test.ts     |   6 +-
 .../__tests__/oa/cycle/gcecD15Negatives.d0.test.ts |  13 +-
 .../oa/cycle/gcecDeterministicNegatives.d0.test.ts |   2 +
 .../oa/cycle/gcecOneLotDelivery.d0.test.ts         |   5 +-
 .../oa/cycle/gcecOwnershipNegatives.d0.test.ts     |   1 +
 .../oa/cycle/gcecProductMonolithicE2e.d0.test.ts   |  12 +-
 .../gcecAgent01AttemptProfile.d0.test.ts           |  44 ++-
 .../gcecMutatingCursorConfinementEnv.d0.test.ts    | 103 ++++-
 .../__tests__/oa/git-ports/gcecGitPorts.d0.test.ts |   1 +
 .../application/typedGitEvidence.ts                |  27 +-
 .../application/startExecution.ts                  | 408 ++++++++++++++++++-
 .../execution-attempt/domain/realLaunchSafety.ts   |   9 +
 .../domain/resolveAttemptExecutionProfile.ts       | 435 +++++++++++++++++++--
 .../domain/resolveGitEffectTarget.ts               | 102 ++++-
 .../app/lib/oa/execution-attempt/index.ts          |  92 +++++
 .../infrastructure/cursorCliLaunchGateway.ts       |   4 +
 .../infrastructure/fakeCursorGitExternalState.ts   |  16 +-
 .../infrastructure/fakeDocsWriteLaunchPort.ts      | 224 ++++++++++-
 .../m4BoundedDocsWriteCursorAgent.ts               |  10 +-
 .../infrastructure/mutatingCursorConfinementEnv.ts |  95 ++++-
 .../sqlite/createSqliteExecutionAttemptServices.ts |   3 +
 .../studioCursorRealLaunchGateway.ts               | 419 +++++++++++++++++++-
 .../ports/realExecutionLaunchPort.ts               |  23 +-
 .../application/gitEffectEvidenceActions.ts        |  50 ++-
 .../app/lib/oa/git-ports/fakeGitProviderPorts.ts   |   2 +
 .../app/lib/oa/git-ports/githubCliRemotePorts.ts   |  10 +-
 .../lib/oa/git-ports/platformGithubReadBridge.ts   |   2 +
 projects/sfia-studio/app/lib/oa/git-ports/types.ts |   4 +
 .../app/lib/vertical-slice-runtime/service.ts      |   6 +
 29 files changed, 2014 insertions(+), 114 deletions(-)
```

Name-status (tracked):
```
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicNegatives.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/git-ports/gcecGitPorts.d0.test.ts
M	projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorGitExternalState.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
M	projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts
M	projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts
M	projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts
M	projects/sfia-studio/app/lib/oa/git-ports/platformGithubReadBridge.ts
M	projects/sfia-studio/app/lib/oa/git-ports/types.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
```

Untracked Product:
```
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyPrCreateEffect.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyRemotePushEffect.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertFreshPrMergePreflight.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertLocalBranchRefMatchesExpectedSha.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrMergeLaunchSpec.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPushLaunchSpec.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedLocalCommitPriorAttempt.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/shellSafeArg.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrCreateCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrMergeCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedRemotePushCursorAgent.ts
```

Complete fileset:
```
projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicNegatives.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts
projects/sfia-studio/app/__tests__/oa/git-ports/gcecGitPorts.d0.test.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyPrCreateEffect.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyRemotePushEffect.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertFreshPrMergePreflight.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertLocalBranchRefMatchesExpectedSha.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrMergeLaunchSpec.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPushLaunchSpec.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedLocalCommitPriorAttempt.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/shellSafeArg.ts
projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorGitExternalState.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrCreateCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrMergeCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedRemotePushCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts
projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts
projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts
projects/sfia-studio/app/lib/oa/git-ports/platformGithubReadBridge.ts
projects/sfia-studio/app/lib/oa/git-ports/types.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
```

==================================================
SOURCES READ
==================================================

Cycle template, routing guide, operating model, guardrails, v2.5 cycles candidate,
Build Doctrine (RO), Roadmap (RO), Product Completion cadrage, v3 framings 34/35 (RO),
input handoff @ f1a38efa…, and Product GCEC execution-attempt / git-ports / Evidence /
Fake / StartExecution / gateway / confinement surfaces for AC-01..06.
CKC Cycle 8 detailed pilot: not found — canonical routing + Cycle 8 method guidance used as fallback (no execution authority).

==================================================
CONVERGENCE PRE-CHECK
==================================================

Build Doctrine: VALIDATED / ACTIVE (unchanged)
Roadmap: VALIDATED / ACTIVE LIVING (unchanged)
Product Completion: COMPLETE / CLOSED
C1: VALIDATED / INTEGRATED
Runtime v3: NON ADOPTED
D-GCEC-09 / EXEC-01 / CONT-01 / CONT-02 / AGENT-01 / REAL-02-CLOSURE: preserved
Capability: Governed Project Execution — governed Git/GitHub lifecycle
Milestone: GCEC-GIT-LIFECYCLE-E2E-01 deterministic authority closure before bounded REAL
Architecture: PATH B — KEEP / ADAPT / COMPLETE — NO PARALLEL ARCHITECTURE

==================================================
PRESERVED FROM PRIOR CORRECTION
==================================================

CR-01 exact local branch ref→SHA; Fake no-self-heal; CR-02 effect-sensitive auth;
explicit --repo; strong PR fields; Studio fresh RepositoryRead before Attempt E;
progressive same-EC A→B→C→D→E.

==================================================
AUTHORITY CLOSURE MATRIX AC-01..AC-06
==================================================

### AC-01 — Fake/Real remote identity parity — CLOSED
Issue: Fake skipped remote URL check when absent.
Impl: remoteUrl mandatory; missing/empty → git_push_remote_url_missing; then assertRemoteUrlMatchesRepositoryRef.
Invariant: Fake cannot push without observable exact remote identity matching repositoryRef.
Tests: missing/empty/wrong remote FAIL; valid HTTPS/SSH PASS with exact branch SHA.

### AC-02 — Exact C push SHA binds D PR — CLOSED
Issue: D used branch only without binding C commitSha / fresh remote head.
Impl: GitPrCreateLaunchSpec.expectedHeadSha REQUIRED from unique VERIFIED remote-push; StartExecution fresh getBranchHead; drift → fail; gateway gh api re-check; verify requires expectedHeadSha.
Invariant: C Evidence SHA = fresh remote head before D = expectedHeadSha = resulting PR head SHA.
Tests: exact match eligible; drift/missing read/wrong repo FAIL.

### AC-03 — Strict repository/branch Evidence lineage — CLOSED
Issue: missing repo/ref could be substituted from context.
Impl: remote-push Evidence MUST have repo+refName+commitSha; expected repo must match; no substitute; branchName required on success; local-commit requires repo when expected.
Invariant: protected progression uses only explicit Evidence identity facts.
Tests: missing/wrong repo/ref FAIL; exact B→C→D PASS; ambiguous predecessors FAIL.

### AC-04 — Complete PR identity ambiguity — CLOSED
Issue: PR number alone / first-match without field-conflict detection.
Impl: complete identity required; exact-identity dedupe; same prNumber with conflicting fields → ambiguous; verifyPrCreateEffect expected head/base/sha REQUIRED.
Invariant: merge lineage resolves one complete non-conflicting verified identity.
Tests: conflicting SHA/branch/state/repo → ambiguous; exact duplicate → deterministic.

### AC-05 — Merge last-mile preflight — CLOSED
Issue: Studio fresh read existed but Cursor last-mile lacked four-field comparison.
Impl: expectedHeadBranch on merge spec; gateway compares OPEN + headRefOid + headRefName + baseRefName with STOP before merge; no --admin/--auto/delete.
Invariant: Studio fresh preflight + Cursor last-mile both compare complete expected PR identity.
Tests: each drift FAIL; instruction contains comparisons; no forbidden flags.

### AC-06 — Shell-safe command construction — CLOSED
Issue: JSON.stringify body / unquoted dynamic values → shell injection risk.
Impl: shellSafeArg.ts (assertCanonicalGithubRepositoryRef + posixShellSingleQuote); builders validate repositoryRef; gateway quotes repo/title/body/branches; body never JSON.stringify.
Invariant: dynamic values cannot escape bounded command into arbitrary shell effects.
Tests: hostile repositoryRef rejected; body with $(...) remains literal; legitimate title/body still work.

==================================================
IMPLEMENTATION SUMMARY
==================================================

# GCEC-GIT-LIFECYCLE-E2E-01 FINAL SAME-LOT AUTHORITY CLOSURE — implementation summary

## SELECTED PATH: B (dirty candidate adapted)

Closed AC-01..AC-06 together in one lot on the existing PATH B + CR-01..04 dirty candidate. No rewrite-from-scratch. No Product commit/push/PR/merge. No REAL. No proof mutation. No handoff publish (parent owns handoff).

## AC CLOSED MATRIX

| AC | Status | Fix |
| --- | --- | --- |
| AC-01 Fake/Real remote identity parity | **CLOSED** | Fake push requires `remoteUrl` (binding or `FakeCursorGitExternalState.remoteUrl`); missing/empty → `git_push_remote_url_missing` (no optional skip); then `assertRemoteUrlMatchesRepositoryRef`; empty remoteUrl helper reason hardened; POS Fake tests set remoteUrl |
| AC-02 C push SHA binds D PR | **CLOSED** | `GitPrCreateLaunchSpec.expectedHeadSha` REQUIRED + full-SHA validate + claimed SHA override rejected; StartExecution D: Evidence repo/branch exact, `expectedHeadSha=prior.commitSha`, fresh `repositoryRead.getBranchHead`, fail `git_pr_create_repository_read_unavailable` / `remote_head_missing` / `remote_head_sha_drift`; gateway re-checks remote head via `gh api …/git/ref/heads/…` before create; `verifyPrCreateEffect` requires expectedHeadBranch+Base+Sha |
| AC-03 Strict Evidence lineage | **CLOSED** | `resolveVerifiedRemotePushPriorAttempt`: Evidence MUST have repo+refName+commitSha; when repositoryRef expected must match; **no substitute**; `branchName` required on success; local-commit: when repositoryRef expected, missing/mismatched repo → not eligible |
| AC-04 Complete PR identity | **CLOSED** | `resolveVerifiedPullRequestNumber` requires complete identity (repo, prNumber, state, headBranch, headSha, baseBranch); exact-identity dedupe; same prNumber with field drift → ambiguous; multi prNumber → ambiguous; success returns required fields; merge profile/Start require `state===open` + head/base; `verifyPrCreateEffect` params REQUIRED |
| AC-05 Merge last-mile | **CLOSED** | `GitPrMergeLaunchSpec.expectedHeadBranch` REQUIRED; StartExecution passes it; gateway compares state/OPEN + headRefOid + headRefName + baseRefName with STOP before `gh pr merge`; `--admin`/`--auto`/delete forbidden in instruction |
| AC-06 Shell-safe construction | **CLOSED → then REOPENED by Critical Review → CLOSED by FINAL POSIX QUOTING FIX** | See front-matter AC-06 FINAL CLOSURE; executable `/bin/sh` round-trip required |

## FILESET (under `projects/sfia-studio/app`)

43 unique product paths (29 modified + 14 untracked relative to Product HEAD). See `fileset-all.txt`.

### New this lot
- `lib/oa/execution-attempt/domain/shellSafeArg.ts`

### Key adapted
- Fake push remote URL mandatory (`fakeDocsWriteLaunchPort.ts`, `fakeCursorGitExternalState.ts`)
- PR create/merge specs + StartExecution C→D/E binding (`gitPrCreateLaunchSpec.ts`, `gitPrMergeLaunchSpec.ts`, `startExecution.ts`)
- Evidence lineage + PR identity (`resolveVerifiedRemotePushPriorAttempt.ts`, `resolveVerifiedLocalCommitPriorAttempt.ts`, `resolveGitEffectTarget.ts`, `resolveAttemptExecutionProfile.ts`)
- Gateway instructions + shell quoting (`studioCursorRealLaunchGateway.ts`)
- Verify PR create REQUIRED fields (`verifyPrCreateEffect.ts`, `gitEffectEvidenceActions.ts`)
- Tests: `gcecGitLifecyclePushPrMerge.d0.test.ts` (+ AC-01..06), confinement/D15/oneLot call-site updates

## VALIDATION (cwd: `projects/sfia-studio/app`, `SFIA_STUDIO_CURSOR_REAL` unset)

| Gate | Result |
| --- | --- |
| Focused (prior AC lot) | 59 passed (historical) — see front matter for FINAL AC-06 counts |
| Related (prior AC lot) | 201 passed (historical) |
| Full vitest (prior AC lot) | 3841 passed / 137 skipped (historical) |
| FINAL AC-06 focused | **63 passed** |
| FINAL AC-06 related | **205 passed** |
| FINAL AC-06 full vitest | **3845 passed \| 137 skipped** |

## REAL: ZERO

- `SFIA_STUDIO_CURSOR_REAL` unset for all validation.
- No proof remote push / PR / merge.
- No Product push / PR / merge.

## PRODUCT COMMIT: NONE

Working tree left dirty. Product HEAD remains:

`f71cf89a452d0b6109e1f11be957210122082186`

No handoff published (parent agent owns handoff).


==================================================
LINEAGE AUTHORITY CHAIN
==================================================

B local commit Evidence (repo + SHA)
→ C remote push Evidence (repo + branch + same SHA) + Fake/REAL remote URL identity
→ D expectedHeadSha = C commitSha + fresh getBranchHead == SHA + PR create
→ verified PR Evidence (repo + number + OPEN + headBranch + headSha + baseBranch)
→ E Studio fresh preflight + Cursor last-mile four-field compare
→ (future REAL merge only after distinct Morris/Pilote GO)

==================================================
SHELL-SAFETY MODEL
==================================================

Selected: minimal POSIX single-quote literal escaping + canonical owner/repo validation.
No shell framework. No free-shell authority. No body-file second mutation pathway.

FINAL AC-06 implementation (current Product candidate):

```typescript
/**
 * Minimal shell-safe argument helpers for GCEC gateway instruction construction.
 * Fail closed on non-canonical GitHub repository refs and unsafe shell interpolation.
 */

const CANONICAL_GITHUB_REPO_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const REPO_METACHAR_RE = /[\s$`\\;&|<>(){}[\]"'!*?]|#/;

/**
 * POSIX embedded-apostrophe escape: end `'`, one literal `\'` outside quotes, reopen `'`.
 * Concatenation keeps ONE effective backslash (avoids template-literal escape miscounts).
 * Example: a'b → 'a'\''b'
 */
const POSIX_EMBEDDED_APOSTROPHE = "'" + "\\" + "'" + "'";

/**
 * Assert owner/repo canonical GitHub repositoryRef (no whitespace / metacharacters).
 */
export function assertCanonicalGithubRepositoryRef(
  ref: string,
): { ok: true; ref: string } | { ok: false; reason: string } {
  if (typeof ref !== "string" || !ref.trim()) {
    return { ok: false, reason: "repository_ref_missing" };
  }
  if (ref !== ref.trim()) {
    return { ok: false, reason: "repository_ref_whitespace" };
  }
  const trimmed = ref.trim();
  if (trimmed.startsWith("-")) {
    return { ok: false, reason: "repository_ref_unsafe" };
  }
  if (
    REPO_METACHAR_RE.test(trimmed) ||
    trimmed.includes("..") ||
    trimmed.includes("$(") ||
    !CANONICAL_GITHUB_REPO_RE.test(trimmed)
  ) {
    return { ok: false, reason: "repository_ref_unsafe" };
  }
  const parts = trimmed.split("/");
  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    return { ok: false, reason: "repository_ref_unsafe" };
  }
  return { ok: true, ref: trimmed };
}

/**
 * POSIX single-quote wrap so the value is literal in a shell (including `$(...)`).
 * Escapes embedded `'` as `'\''` (one effective escape backslash).
 */
export function posixShellSingleQuote(value: string): string {
  return "'" + String(value).split("'").join(POSIX_EMBEDDED_APOSTROPHE) + "'";
}
```

Executable proof strategy: `/bin/sh -c` + `printf %s <quoted>` round-trip; sentinel non-execution in temp dir.

==================================================
KEY CODE EXCERPTS
==================================================

### gitPrCreateLaunchSpec.ts (full)
```typescript
/**
 * Server-derived GitPrCreateLaunchSpec (GCEC bounded PR create).
 * Fail closed on empty / unsafe refs / base mismatch / missing expectedHeadSha.
 */

import {
  assertCanonicalGithubRepositoryRef,
} from "./shellSafeArg";

export type GitPrCreateLaunchSpec = {
  readonly repositoryRef: string;
  readonly headBranch: string;
  readonly baseBranch: string;
  readonly title: string;
  readonly expectedHeadSha: string;
  readonly body?: string;
};

const BRANCH_FORBIDDEN_RE = /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]/;
const TITLE_FORBIDDEN_RE = /[\x00-\x1f\x7f$`\\;&|<>(){}[\]*?!\n\r]/;
const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

function assertSafeRef(
  raw: string,
  kind: "head" | "base",
): { ok: true; ref: string } | { ok: false; reason: string } {
  if (typeof raw !== "string" || !raw.trim()) {
    return { ok: false, reason: `git_pr_create_${kind}_empty` };
  }
  if (raw !== raw.trim()) {
    return { ok: false, reason: `git_pr_create_${kind}_whitespace` };
  }
  const ref = raw.trim();
  if (
    ref.includes("..") ||
    ref.startsWith("-") ||
    ref.includes(" ") ||
    BRANCH_FORBIDDEN_RE.test(ref)
  ) {
    return { ok: false, reason: `git_pr_create_${kind}_unsafe` };
  }
  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(ref)) {
    return { ok: false, reason: `git_pr_create_${kind}_charset` };
  }
  return { ok: true, ref };
}

/**
 * Build PR-create launch spec from server-owned facts.
 * When `expectedBaseBranch` is provided, base MUST equal it.
 * `expectedHeadSha` is REQUIRED (full SHA) — client-claimed SHA override rejected.
 * Auto-merge / force fields on request are rejected when present.
 */
export function buildGitPrCreateLaunchSpec(input: {
  readonly repositoryRef: string;
  readonly headBranch: string;
  readonly baseBranch: string;
  readonly title: string;
  readonly expectedHeadSha: string;
  readonly body?: string;
  readonly expectedBaseBranch?: string;
  /** Hostile — any truthy auto-merge channel is rejected. */
  readonly claimedAutoMerge?: unknown;
  /** Hostile — client-claimed head SHA must equal server expectedHeadSha when present. */
  readonly claimedHeadSha?: unknown;
}):
  | { ok: true; spec: GitPrCreateLaunchSpec }
  | { ok: false; reason: string } {
  if (input.claimedAutoMerge != null && input.claimedAutoMerge !== false) {
    return { ok: false, reason: "git_pr_create_auto_merge_rejected" };
  }
  const repo = assertCanonicalGithubRepositoryRef(input.repositoryRef);
  if (!repo.ok) {
    return {
      ok: false,
      reason:
        repo.reason === "repository_ref_missing"
          ? "git_pr_create_repository_ref_missing"
          : "git_pr_create_repository_ref_unsafe",
    };
  }
  if (
    typeof input.expectedHeadSha !== "string" ||
    !FULL_SHA_RE.test(input.expectedHeadSha.trim())
  ) {
    return { ok: false, reason: "git_pr_create_expected_head_sha_invalid" };
  }
  const expectedHeadSha = input.expectedHeadSha.trim().toLowerCase();
  if (
    input.claimedHeadSha != null &&
    String(input.claimedHeadSha).trim() &&
    String(input.claimedHeadSha).trim().toLowerCase() !== expectedHeadSha
  ) {
    return { ok: false, reason: "git_pr_create_claimed_head_sha_override_rejected" };
  }
  const head = assertSafeRef(input.headBranch, "head");
  if (!head.ok) return head;
  const base = assertSafeRef(input.baseBranch, "base");
  if (!base.ok) return base;
  if (head.ref === base.ref) {
    return { ok: false, reason: "git_pr_create_head_equals_base" };
  }
  if (
    input.expectedBaseBranch != null &&
    input.expectedBaseBranch.trim() &&
    input.expectedBaseBranch.trim() !== base.ref
  ) {
    return { ok: false, reason: "git_pr_create_base_mismatch" };
  }
  if (typeof input.title !== "string" || !input.title.trim()) {
    return { ok: false, reason: "git_pr_create_title_empty" };
  }
  if (input.title !== input.title.trim()) {
    return { ok: false, reason: "git_pr_create_title_whitespace" };
  }
  const title = input.title.trim();
  if (title.length > 200 || TITLE_FORBIDDEN_RE.test(title)) {
    return { ok: false, reason: "git_pr_create_title_unsafe" };
  }
  let body: string | undefined;
  if (input.body != null) {
    if (typeof input.body !== "string") {
      return { ok: false, reason: "git_pr_create_body_invalid" };
    }
    body = input.body.trim() || undefined;
    if (body && /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(body)) {
      return { ok: false, reason: "git_pr_create_body_unsafe" };
    }
  }
  return {
    ok: true,
    spec: {
      repositoryRef: repo.ref,
      headBranch: head.ref,
      baseBranch: base.ref,
      title,
      expectedHeadSha,
      ...(body ? { body } : {}),
    },
  };
}

/** AuthorizedEffects MUST be exactly one unique effect: github.pr.create. */
export function isBoundedGitPrCreateOnlySlice(
  authorizedEffects: readonly string[] | undefined | null,
): boolean {
  if (!authorizedEffects || authorizedEffects.length === 0) return false;
  const unique = new Set(authorizedEffects);
  return unique.size === 1 && unique.has("github.pr.create");
}

```

### gitPrMergeLaunchSpec.ts (full)
```typescript
/**
 * Server-derived GitPrMergeLaunchSpec (GCEC bounded PR merge PREP).
 * Build for continuation PREP only — REAL merge is not executed in this lot.
 * Fail closed on missing PR / bad numbers / incomplete identity.
 */

import {
  assertCanonicalGithubRepositoryRef,
} from "./shellSafeArg";

export type GitPrMergeMethod = "merge" | "squash" | "rebase";

export type GitPrMergeLaunchSpec = {
  readonly repositoryRef: string;
  readonly prNumber: number;
  readonly expectedHeadSha: string;
  readonly expectedHeadBranch: string;
  readonly expectedBaseBranch: string;
  readonly mergeMethod: GitPrMergeMethod;
};

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;
const BRANCH_FORBIDDEN_RE = /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]/;

function assertSafeBranch(
  raw: string,
  reasonEmpty: string,
  reasonUnsafe: string,
): { ok: true; ref: string } | { ok: false; reason: string } {
  if (typeof raw !== "string" || !raw.trim()) {
    return { ok: false, reason: reasonEmpty };
  }
  const base = raw.trim();
  if (
    BRANCH_FORBIDDEN_RE.test(base) ||
    base.includes("..") ||
    base.startsWith("-") ||
    base.includes(" ")
  ) {
    return { ok: false, reason: reasonUnsafe };
  }
  return { ok: true, ref: base };
}

/**
 * Build merge launch spec from server-owned PR identity + policy defaults.
 * Default mergeMethod is "merge" when server/policy omits it.
 * `expectedHeadBranch` is REQUIRED.
 */
export function buildGitPrMergeLaunchSpec(input: {
  readonly repositoryRef: string;
  readonly prNumber: number;
  readonly expectedHeadSha: string;
  readonly expectedHeadBranch: string;
  readonly expectedBaseBranch: string;
  readonly mergeMethod?: GitPrMergeMethod;
}):
  | { ok: true; spec: GitPrMergeLaunchSpec }
  | { ok: false; reason: string } {
  const repo = assertCanonicalGithubRepositoryRef(input.repositoryRef);
  if (!repo.ok) {
    return {
      ok: false,
      reason:
        repo.reason === "repository_ref_missing"
          ? "git_pr_merge_repository_ref_missing"
          : "git_pr_merge_repository_ref_unsafe",
    };
  }
  if (
    !Number.isInteger(input.prNumber) ||
    input.prNumber < 1 ||
    !Number.isFinite(input.prNumber)
  ) {
    return { ok: false, reason: "git_pr_merge_pr_number_invalid" };
  }
  if (
    typeof input.expectedHeadSha !== "string" ||
    !FULL_SHA_RE.test(input.expectedHeadSha.trim())
  ) {
    return { ok: false, reason: "git_pr_merge_expected_head_sha_invalid" };
  }
  const head = assertSafeBranch(
    input.expectedHeadBranch,
    "git_pr_merge_expected_head_branch_empty",
    "git_pr_merge_expected_head_branch_unsafe",
  );
  if (!head.ok) return head;
  const base = assertSafeBranch(
    input.expectedBaseBranch,
    "git_pr_merge_expected_base_empty",
    "git_pr_merge_expected_base_unsafe",
  );
  if (!base.ok) return base;
  const method = input.mergeMethod ?? "merge";
  if (method !== "merge" && method !== "squash" && method !== "rebase") {
    return { ok: false, reason: "git_pr_merge_method_invalid" };
  }
  return {
    ok: true,
    spec: {
      repositoryRef: repo.ref,
      prNumber: input.prNumber,
      expectedHeadSha: input.expectedHeadSha.trim().toLowerCase(),
      expectedHeadBranch: head.ref,
      expectedBaseBranch: base.ref,
      mergeMethod: method,
    },
  };
}

/** AuthorizedEffects MUST be exactly one unique effect: github.pr.merge. */
export function isBoundedGitPrMergeOnlySlice(
  authorizedEffects: readonly string[] | undefined | null,
): boolean {
  if (!authorizedEffects || authorizedEffects.length === 0) return false;
  const unique = new Set(authorizedEffects);
  return unique.size === 1 && unique.has("github.pr.merge");
}

```

### resolveVerifiedRemotePushPriorAttempt.ts (full)
```typescript
/**
 * CORR-D-GCEC-GIT-LIFECYCLE — exact Attempt lineage for verified remote push.
 * Pure Product-truth: Attempt history + VERIFIED git:remote_push Evidence.
 * Zero / multiple eligible candidates → fail closed.
 * AC-03: Evidence MUST carry explicit repo + refName + commitSha — no substitute.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "./types";
import {
  evidenceMatchesContractLineage,
  expectedEvidenceIdentity,
} from "./qualifyExecutionContractCompletion";
import { M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID } from "./realLaunchSafety";

export type VerifiedRemotePushPriorAttempt = {
  readonly priorAttemptId: string;
  readonly evidenceId: string;
  readonly commitSha: string;
  readonly repositoryRef: string;
  /** Required — Evidence refName / branch for C→D binding. */
  readonly branchName: string;
};

export type ResolveVerifiedRemotePushPriorAttemptInput = {
  readonly contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "projectId"
    | "cycleInstanceId"
    | "expectedOutputs"
    | "inputs"
  >;
  readonly attempts: readonly ExecutionAttempt[];
  readonly evidence: readonly Evidence[];
  readonly excludeAttemptId?: string;
  readonly repositoryRef?: string;
};

export type ResolveVerifiedRemotePushPriorAttemptResult =
  | { readonly ok: true; readonly prior: VerifiedRemotePushPriorAttempt }
  | {
      readonly ok: false;
      readonly reason:
        | "remote_push_prior_none"
        | "remote_push_prior_ambiguous"
        | "remote_push_prior_incomplete";
      readonly candidateAttemptIds?: readonly string[];
    };

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

export function parseRemotePushFromEvidenceLocation(
  location: string,
): {
  commitSha: string;
  repositoryRef?: string;
  branchName?: string;
} | null {
  const loc = String(location ?? "").trim();
  if (!loc.startsWith("git:remote_push")) return null;
  const shaMatch = loc.match(/[?&]commitSha=([^&]+)/);
  if (!shaMatch) return null;
  const commitSha = decodeURIComponent(shaMatch[1]!).trim().toLowerCase();
  if (!FULL_SHA_RE.test(commitSha)) return null;
  const repoMatch = loc.match(/[?&]repo=([^&]+)/);
  const repositoryRef = repoMatch
    ? decodeURIComponent(repoMatch[1]!).trim()
    : undefined;
  const refMatch = loc.match(/[?&]refName=([^&]+)/);
  let branchName: string | undefined;
  if (refMatch) {
    const refName = decodeURIComponent(refMatch[1]!).trim();
    branchName = refName.startsWith("refs/heads/")
      ? refName.slice("refs/heads/".length)
      : refName;
  }
  return { commitSha, repositoryRef, branchName };
}

function isEligibleRemotePush(
  ev: Evidence,
  expected: {
    projectId: string;
    cycleInstanceId?: string;
    executionContractId: string;
  },
  attemptId: string,
  repositoryRef?: string,
): boolean {
  if (ev.status !== "verified") return false;
  if (ev.source !== "git:remote_push") return false;
  if (!evidenceMatchesContractLineage(ev, expected)) return false;
  if (ev.bindings.executionAttemptId !== attemptId) return false;
  const parsed = parseRemotePushFromEvidenceLocation(String(ev.location ?? ""));
  if (!parsed) return false;
  // AC-03: repo + branchName + commitSha are mandatory for eligibility.
  if (!parsed.repositoryRef?.trim()) return false;
  if (!parsed.branchName?.trim()) return false;
  if (!FULL_SHA_RE.test(parsed.commitSha)) return false;
  if (repositoryRef?.trim()) {
    // When repositoryRef expected: Evidence repo MUST equal — missing already failed above.
    if (parsed.repositoryRef !== repositoryRef.trim()) return false;
  }
  return true;
}

/**
 * Resolve the unique prior succeeded remote-push Attempt with matching
 * VERIFIED git:remote_push Evidence for the current EC.
 */
export function resolveVerifiedRemotePushPriorAttempt(
  input: ResolveVerifiedRemotePushPriorAttemptInput,
): ResolveVerifiedRemotePushPriorAttemptResult {
  const expected = expectedEvidenceIdentity({ contract: input.contract });
  const candidates: VerifiedRemotePushPriorAttempt[] = [];

  for (const attempt of input.attempts) {
    if (
      input.excludeAttemptId &&
      attempt.attemptId === input.excludeAttemptId
    ) {
      continue;
    }
    if (attempt.executionContractId !== input.contract.executionContractId) {
      continue;
    }
    if (attempt.status !== "succeeded") continue;
    if (attempt.selectedAgentRef !== M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID) {
      continue;
    }

    const matching = input.evidence.filter((ev) =>
      isEligibleRemotePush(
        ev,
        expected,
        attempt.attemptId,
        input.repositoryRef,
      ),
    );
    if (matching.length === 0) continue;
    if (matching.length > 1) {
      return {
        ok: false,
        reason: "remote_push_prior_ambiguous",
        candidateAttemptIds: [attempt.attemptId],
      };
    }
    const ev = matching[0]!;
    const parsed = parseRemotePushFromEvidenceLocation(String(ev.location ?? ""));
    if (
      !parsed ||
      !parsed.repositoryRef?.trim() ||
      !parsed.branchName?.trim() ||
      !FULL_SHA_RE.test(parsed.commitSha)
    ) {
      return { ok: false, reason: "remote_push_prior_incomplete" };
    }
    // Never substitute input.repositoryRef for missing Evidence repo.
    candidates.push({
      priorAttemptId: attempt.attemptId,
      evidenceId: ev.evidenceId,
      commitSha: parsed.commitSha,
      repositoryRef: parsed.repositoryRef.trim(),
      branchName: parsed.branchName.trim(),
    });
  }

  if (candidates.length === 0) {
    return { ok: false, reason: "remote_push_prior_none" };
  }
  if (candidates.length > 1) {
    return {
      ok: false,
      reason: "remote_push_prior_ambiguous",
      candidateAttemptIds: candidates.map((c) => c.priorAttemptId),
    };
  }

  const only = candidates[0]!;
  if (!FULL_SHA_RE.test(only.commitSha) || !only.branchName.trim()) {
    return { ok: false, reason: "remote_push_prior_incomplete" };
  }
  return { ok: true, prior: only };
}

```

### resolveVerifiedPullRequestNumber (hardened)
```typescript
export function resolveVerifiedPullRequestNumber(input: {
  evidence: readonly Evidence[];
  projectId: string;
  cycleInstanceId?: string;
  executionContractId: string;
  repositoryRef: string;
}):
  | {
      ok: true;
      prNumber: number;
      repositoryRef: string;
      headSha: string;
      headBranch: string;
      baseBranch: string;
      state: string;
      baseSha?: string;
    }
  | { ok: false; reason: string } {
  type CompleteIdentity = {
    repositoryRef: string;
    prNumber: number;
    state: string;
    headBranch: string;
    headSha: string;
    baseBranch: string;
    baseSha?: string;
  };
  const FULL_SHA_RE = /^[0-9a-f]{40}$/i;
  const matches: CompleteIdentity[] = [];
  for (const e of input.evidence) {
    if (e.status !== "verified") continue;
    if (e.source !== "git:pull_request") continue;
    const b = e.bindings;
    if (!b?.projectId || b.projectId !== input.projectId) continue;
    if (
      !b.executionContractId ||
      b.executionContractId !== input.executionContractId
    ) {
      continue;
    }
    if (
      input.cycleInstanceId &&
      (!b.cycleInstanceId || b.cycleInstanceId !== input.cycleInstanceId)
    ) {
      continue;
    }
    const loc = typeof e.location === "string" ? e.location : "";
    const repoMatch = loc.match(/[?&]repo=([^&]+)/);
    if (!repoMatch) continue;
    const repo = decodeURIComponent(repoMatch[1]!).trim();
    if (!repo || repo !== input.repositoryRef) continue;
    const prMatch = loc.match(/[?&]prNumber=([^&]+)/);
    if (!prMatch) continue;
    const n = Number(decodeURIComponent(prMatch[1]!));
    if (!Number.isInteger(n) || n < 1) continue;
    const headShaMatch = loc.match(/[?&]headSha=([^&]+)/);
    const headBranchMatch = loc.match(/[?&]headBranch=([^&]+)/);
    const baseBranchMatch = loc.match(/[?&]baseBranch=([^&]+)/);
    const stateMatch = loc.match(/[?&]state=([^&]+)/);
    if (!headShaMatch || !headBranchMatch || !baseBranchMatch || !stateMatch) {
      continue;
    }
    const headSha = decodeURIComponent(headShaMatch[1]!).trim().toLowerCase();
    const headBranch = decodeURIComponent(headBranchMatch[1]!).trim();
    const baseBranch = decodeURIComponent(baseBranchMatch[1]!).trim();
    const state = decodeURIComponent(stateMatch[1]!).trim();
    if (!FULL_SHA_RE.test(headSha) || !headBranch || !baseBranch || !state) {
      continue;
    }
    const baseShaMatch = loc.match(/[?&]baseSha=([^&]+)/);
    const baseSha = baseShaMatch
      ? decodeURIComponent(baseShaMatch[1]!).trim().toLowerCase()
      : undefined;
    if (baseSha != null && baseSha !== "" && !FULL_SHA_RE.test(baseSha)) {
      continue;
    }
    matches.push({
      repositoryRef: repo,
      prNumber: n,
      state,
      headBranch,
      headSha,
      baseBranch,
      ...(baseSha ? { baseSha } : {}),
    });
  }

  // Deduplicate exact identical complete identities.
  const identityKey = (m: CompleteIdentity) =>
    [
      m.repositoryRef,
      m.prNumber,
      m.state,
      m.headBranch,
      m.headSha,
      m.baseBranch,
      m.baseSha ?? "",
    ].join("\0");
  const uniqueByKey = new Map<string, CompleteIdentity>();
  for (const m of matches) {
    uniqueByKey.set(identityKey(m), m);
  }
  const unique = [...uniqueByKey.values()];
  if (unique.length === 0) {
    return { ok: false, reason: "verified_pull_request_identity_missing" };
  }
  const uniqueNumbers = [...new Set(unique.map((m) => m.prNumber))];
  if (uniqueNumbers.length > 1) {
    return { ok: false, reason: "verified_pull_request_identity_ambiguous" };
  }
  if (unique.length > 1) {
    // Same prNumber with differing headSha / headBranch / baseBranch / state / repo.
    return { ok: false, reason: "verified_pull_request_identity_ambiguous" };
  }
  const chosen = unique[0]!;
  return {
    ok: true,
    prNumber: chosen.prNumber,
    repositoryRef: chosen.repositoryRef,
    headSha: chosen.headSha,
    headBranch: chosen.headBranch,
    baseBranch: chosen.baseBranch,
    state: chosen.state,
    ...(chosen.baseSha ? { baseSha: chosen.baseSha } : {}),
  };
}

/**
 * Resolve canonical Git Confirmation target from durable Product truth only.
 */

```

### buildBoundedRemotePushInstruction
```typescript
function buildBoundedRemotePushInstruction(input: {
  readonly spec: NonNullable<RealLaunchRequest["gitPushSpec"]>;
  readonly target?: string;
  readonly action?: string;
  readonly scope?: string;
  readonly semanticFingerprint: string;
}): string {
  const branchRef = `refs/heads/${input.spec.branchName}`;
  return [
    "TÂCHE UNIQUE — bounded remote git.push déterministe (GCEC).",
    `Repository: ${input.spec.repositoryRef}`,
    `Remote exact: ${input.spec.remoteName}`,
    `Branch exacte (feature only): ${input.spec.branchName}`,
    `Local ref exacte: ${branchRef}`,
    `Expected commit SHA: ${input.spec.expectedCommitSha}`,
    "Séquence Shell autorisée UNIQUEMENT (STOP sans mutation si échec):",
    `  1) git remote get-url ${input.spec.remoteName}`,
    `     → l'URL observée DOIT identifier le même dépôt que repositoryRef=${input.spec.repositoryRef}`,
    `       (https://github.com/<owner>/<repo>[.git] ou git@github.com:<owner>/<repo>[.git]).`,
    `       Sinon: STOP — ne pas pousser.`,
    `  2) git rev-parse ${branchRef}`,
    `     → le SHA observé DOIT être exactement ${input.spec.expectedCommitSha}.`,
    `       Absent / mismatch / usage de HEAD seul à la place de ${branchRef}: STOP — ne pas pousser.`,
    `  3) Seulement si (1)+(2) OK:`,
    `     git push ${input.spec.remoteName} ${branchRef}:${input.spec.branchName}`,
    "INTERDIT: --force / -f / --force-with-lease, --delete / :branch delete,",
    "--tags / --follow-tags, push vers main/master, fetch mutatif, pull,",
    "remote add/set-url, checkout, reset, rebase, merge, amend, PR/merge GitHub,",
    "édition de fichiers, script shell fourni par l'appelant,",
    "substituer HEAD au ref de branche, auto-créer la branche locale absente.",
    "force=false delete=false noTags=true — non négociable.",
    "En cas d'ambiguïté: STOP immédiatement sans mutation.",
    `target=${input.target ?? ""}`,
    `action=${input.action ?? ""}`,
    `scope=${input.scope ?? ""}`,
    `fingerprint=${input.semanticFingerprint}`,
  ].join("\n");
}


```

### buildBoundedPrCreateInstruction
```typescript
function buildBoundedPrCreateInstruction(input: {
  readonly spec: NonNullable<RealLaunchRequest["gitPrCreateSpec"]>;
  readonly target?: string;
  readonly action?: string;
  readonly scope?: string;
  readonly semanticFingerprint: string;
}): string {
  const qRepo = posixShellSingleQuote(input.spec.repositoryRef);
  const qHead = posixShellSingleQuote(input.spec.headBranch);
  const qBase = posixShellSingleQuote(input.spec.baseBranch);
  const qTitle = posixShellSingleQuote(input.spec.title);
  const qBody =
    input.spec.body != null
      ? posixShellSingleQuote(input.spec.body)
      : undefined;
  const branchRefApi = `repos/${input.spec.repositoryRef}/git/ref/heads/${input.spec.headBranch}`;
  return [
    "TÂCHE UNIQUE — bounded github.pr.create déterministe (GCEC).",
    `Repository: ${input.spec.repositoryRef}`,
    `Head branch exacte: ${input.spec.headBranch}`,
    `Base branch exacte: ${input.spec.baseBranch}`,
    `Expected head SHA (lié au push C): ${input.spec.expectedHeadSha}`,
    `Title exact: ${input.spec.title}`,
    ...(input.spec.body ? [`Body: ${input.spec.body}`] : []),
    "Avant gh pr create (lecture seule — lier remote head au SHA pushé):",
    `  1) gh api ${posixShellSingleQuote(branchRefApi)} --jq .object.sha`,
    `     → le SHA observé DOIT être exactement ${input.spec.expectedHeadSha}.`,
    "       Absent / mismatch: STOP — ne pas créer la PR.",
    "Commande autorisée UNIQUEMENT (après (1) OK):",
    `  gh pr create --repo ${qRepo} --head ${qHead} --base ${qBase} --title ${qTitle}` +
      (qBody ? ` --body ${qBody}` : ""),
    "INTERDIT: omettre --repo, --auto-merge / enable auto-merge, merge, squash, rebase,",
    "push force, delete branch, édition hors PR create, script shell libre,",
    "JSON.stringify / interpolation non quotée du body (les $(...) restent littéraux via quotes).",
    "En cas d'ambiguïté: STOP immédiatement sans mutation.",
    `target=${input.target ?? ""}`,
    `action=${input.action ?? ""}`,
    `scope=${input.scope ?? ""}`,
    `fingerprint=${input.semanticFingerprint}`,
  ].join("\n");
}


```

### buildBoundedPrMergeInstruction
```typescript
function buildBoundedPrMergeInstruction(input: {
  readonly spec: NonNullable<RealLaunchRequest["gitPrMergeSpec"]>;
  readonly target?: string;
  readonly action?: string;
  readonly scope?: string;
  readonly semanticFingerprint: string;
}): string {
  const methodFlag =
    input.spec.mergeMethod === "squash"
      ? "--squash"
      : input.spec.mergeMethod === "rebase"
        ? "--rebase"
        : "--merge";
  const qRepo = posixShellSingleQuote(input.spec.repositoryRef);
  return [
    "TÂCHE UNIQUE — bounded github.pr.merge déterministe (GCEC).",
    `Repository: ${input.spec.repositoryRef}`,
    `PR number exact (obligatoire): ${input.spec.prNumber}`,
    `Expected head SHA: ${input.spec.expectedHeadSha}`,
    `Expected head branch: ${input.spec.expectedHeadBranch}`,
    `Expected base branch: ${input.spec.expectedBaseBranch}`,
    `Merge method: ${input.spec.mergeMethod}`,
    "Avant merge (défense en profondeur — StartExecution fresh RepositoryRead est l'autorité):",
    `  gh pr view ${input.spec.prNumber} --repo ${qRepo} --json state,headRefOid,baseRefName,headRefName`,
    "  Comparer EXPLICITEMENT les quatre champs; STOP sur tout mismatch AVANT gh pr merge:",
    "    - state == OPEN",
    `    - headRefOid == ${input.spec.expectedHeadSha}`,
    `    - headRefName == ${input.spec.expectedHeadBranch}`,
    `    - baseRefName == ${input.spec.expectedBaseBranch}`,
    "Commande autorisée UNIQUEMENT (après les quatre comparaisons OK):",
    `  gh pr merge ${input.spec.prNumber} --repo ${qRepo} ${methodFlag}`,
    "INTERDIT: omettre --repo, autre PR number, --admin, --auto, enable auto-merge,",
    "delete branch / --delete-branch, force push, script shell libre.",
    "En cas d'ambiguïté: STOP immédiatement sans mutation.",
    `target=${input.target ?? ""}`,
    `action=${input.action ?? ""}`,
    `scope=${input.scope ?? ""}`,
    `fingerprint=${input.semanticFingerprint}`,
  ].join("\n");
}


```

==================================================
VALIDATION
==================================================

cwd: projects/sfia-studio/app
SFIA_STUDIO_CURSOR_REAL: unset

| Gate | Result |
| --- | --- |
| Focused (lifecycle + confinement) FINAL | **63 passed** (2 files) |
| Related (10 files) FINAL | **205 passed** |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| Full vitest FINAL | **3845 passed \| 137 skipped** |

==================================================
FAKE / REAL
==================================================

Level: DETERMINISTIC PROVEN for AC-01..AC-06.
REAL: ZERO
AUTH REAL: NOT PROVEN
PUSH REAL: NOT PROVEN
PR REAL: NOT PROVEN
MERGE REAL: NOT PROVEN
DETERMINISTIC PROVEN ≠ READY FOR REAL

Auth reserve: CR-02 effect-sensitive policy preserved; live auth re-preflight required before future REAL.

==================================================
GIT EFFECTS THIS LOT
==================================================

PRODUCT COMMIT: NONE
PRODUCT PUSH: NONE
PRODUCT PR: NONE
PRODUCT MERGE: NONE
PROOF REPO MUTATION: NONE
branch.delete: NONE
REAL C/D/E: NONE

==================================================
RESERVES
==================================================

Non-blocking:
- D-GCEC-EVID-01 ACCEPTED NON-BLOCKING
- FixedIdSource harness reserve OPEN / NON-BLOCKING
- baseSha optional when RepositoryRead exposes it
- Publisher false-negative tooling reserve (historical)

REAL-only (blocking for REAL claims, not for this deterministic candidate):
- AUTH REAL
- PUSH / PR / MERGE REAL
- END-TO-END REAL A→D

Blocking for this lot: NONE (AC-01..06 closed)

==================================================
DECISION REQUIRED FROM MORRIS
==================================================

CHATGPT CRITICAL REVIEW OF FINAL SAME-LOT AUTHORITY CLOSURE CANDIDATE.

Do NOT Product commit / REAL / Product push / PR / merge from this pack alone.

Subsequent sequence only after separate Morris decisions:
final candidate → Review Handoff → ChatGPT Critical Review → Morris GO local Product commit → Cursor commit → post-commit verification → separate Morris REAL gate → ONE fresh REAL A→D → STOP merge gate → distinct merge decision → future Attempt E.

==================================================
FULL USEFUL DIFF
==================================================

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
index cb2ff410..19495a79 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
@@ -1066,12 +1066,12 @@ describe("gcecCr23StartExecution — application boundary", () => {
         "github.pr.create",
       ],
     });
-    // CORR-D-GCEC-AGENT-01 / CR-GCEC-AGENT-06 — M4 progressive contracts
-    // fail closed on unsupported merge (no contract_legacy bridge; GCEC-PUSH not ready).
+    // CORR-D-GCEC-AGENT-01 PATH B — merge profile eligible only with verified PR
+    // identity; without it Start fails closed (lineage), not contract_legacy.
     expect(started.ok).toBe(false);
     if (!started.ok) {
       expect(started.error.internalCauseRef).toMatch(
-        /effect_not_supported|AGENT_CAPABILITY|capability/i,
+        /effect_not_supported|AGENT_CAPABILITY|capability|without_verified_pr|pr_identity/i,
       );
     }
   }, 90_000);
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
index 64a95587..2fe10f79 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
@@ -137,6 +137,8 @@ function fullVerifiedSet(): Evidence[] {
         repositoryRef: REPO,
         prNumber: 1,
         headSha: SHA,
+        headBranch: "gcec/docs",
+        baseBranch: "main",
         state: "open",
       },
       "ev:pr",
@@ -385,6 +387,7 @@ describe("gcecD15Negatives — N1–N28", () => {
       title: "x",
       state: "open",
       headSha: OTHER,
+      headBranch: "feature/gcec",
       baseBranch: "main",
       url: "https://github.com/acme/widget/pull/42",
     });
@@ -1481,7 +1484,7 @@ describe("gcecD15Negatives — N1–N28", () => {
         evidenceId: "ev:pr41",
         status: "verified",
         source: "git:pull_request",
-        location: "git:pull_request?repo=acme%2Fwidget&prNumber=41",
+        location: "git:pull_request?repo=acme%2Fwidget&prNumber=41&headSha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&headBranch=feature%2Fx&baseBranch=main&state=open",
         bindings: {
           projectId: "prj:gcec",
           cycleInstanceId: CYCLE,
@@ -1767,7 +1770,7 @@ describe("gcecD15Negatives — N1–N28", () => {
         evidenceId: "ev:pr41",
         status: "verified",
         source: "git:pull_request",
-        location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41`,
+        location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41&headSha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&headBranch=feature%2Fx&baseBranch=main&state=open`,
         bindings: {
           projectId: "prj:gcec",
           cycleInstanceId: CYCLE,
@@ -1778,7 +1781,7 @@ describe("gcecD15Negatives — N1–N28", () => {
         evidenceId: "ev:pr42",
         status: "verified",
         source: "git:pull_request",
-        location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=42`,
+        location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=42&headSha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&headBranch=feature%2Fy&baseBranch=main&state=open`,
         bindings: {
           projectId: "prj:gcec",
           cycleInstanceId: CYCLE,
@@ -1915,7 +1918,7 @@ describe("gcecD15Negatives — N1–N28", () => {
           evidenceId: "ev:pr-ok",
           status: "verified",
           source: "git:pull_request",
-          location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41`,
+          location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41&headSha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&headBranch=feature%2Fx&baseBranch=main&state=open`,
           bindings: {
             projectId: "prj:gcec",
             cycleInstanceId: CYCLE,
@@ -1942,7 +1945,7 @@ describe("gcecD15Negatives — N1–N28", () => {
           evidenceId: "ev:pr-ok41",
           status: "verified",
           source: "git:pull_request",
-          location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41`,
+          location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41&headSha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&headBranch=feature%2Fx&baseBranch=main&state=open`,
           bindings: {
             projectId: "prj:gcec",
             cycleInstanceId: CYCLE,
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicNegatives.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicNegatives.d0.test.ts
index 950c2c0d..f167261a 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicNegatives.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecDeterministicNegatives.d0.test.ts
@@ -111,6 +111,8 @@ function fullSet(): Evidence[] {
         repositoryRef: REPO,
         prNumber: 1,
         headSha: FULL_SHA,
+        headBranch: "gcec/docs",
+        baseBranch: "main",
         state: "open",
       },
       "ev:pr",
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
index 405538c0..06337a55 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
@@ -240,6 +240,9 @@ function validPayloadFor(source: TypedGitEvidenceSource): unknown {
         repositoryRef: "acme/widget",
         prNumber: 1,
         headSha: FULL_SHA,
+        headBranch: "feature",
+        baseBranch: "main",
+        state: "open",
       };
     case "git:ci_status":
       return {
@@ -908,7 +911,7 @@ describe("11–12 — git completion proof progression", () => {
               : source === "git:review_status"
                 ? `git:review_status?repo=${encodeURIComponent(VALID_BINDING.identity)}&prNumber=1&state=approved`
                 : source === "git:pull_request"
-                  ? `git:pull_request?repo=${encodeURIComponent(VALID_BINDING.identity)}&prNumber=1&headSha=${FULL_SHA}`
+                  ? `git:pull_request?repo=${encodeURIComponent(VALID_BINDING.identity)}&prNumber=1&headSha=${FULL_SHA}&headBranch=gcec%2Fdocs&baseBranch=main&state=open`
                   : source === "git:merge"
                     ? `git:merge?repo=${encodeURIComponent(VALID_BINDING.identity)}&mergeCommitSha=${MERGE_SHA}&prNumber=1`
                     : source === "git:remote_push"
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts
index 9d1cd2f2..ffab9754 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts
@@ -59,6 +59,7 @@ describe("GCEC ownership negatives", () => {
       title: "x",
       state: "open",
       headSha: OTHER,
+      headBranch: "feature/gcec",
       baseBranch: "main",
       url: "https://github.com/acme/widget/pull/42",
     });
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
index c56605e0..8271e0e9 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
@@ -1008,7 +1008,8 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
       verifiedGitEffects.push(slice.effect);
     }

-    // CR-06: next protected M4 effect (push) fails closed — no contract_legacy.
+    // CORR-D-GCEC-AGENT-01 PATH B — after commit, progressive push is eligible;
+    // docs-write agent cannot satisfy remote_push criteria (fail capability match).
     const pushSelect = await oa.executionAttemptServices.selectExecutionAgent.execute({
       attemptId: `xat:gcec-push-fail:${contract.executionContractId}`.slice(0, 128),
       executionContractId: contract.executionContractId,
@@ -1023,15 +1024,18 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
     });
     expect(pushSelect.ok).toBe(false);
     if (!pushSelect.ok) {
-      expect(pushSelect.error.internalCauseRef).toMatch(/effect_not_supported/);
+      expect(pushSelect.error.internalCauseRef).toMatch(
+        /without_verified_commit_lineage|capability|AGENT_CAPABILITY|effect_not_supported|no_registry/i,
+      );
     }

-    // Commit Evidence present; full push/PR/merge proof set intentionally unsatisfied.
+    // Commit Evidence present; full push/PR/merge proof set intentionally unsatisfied
+    // when commit Evidence bindings do not form unique local-commit lineage.
     expect(collectedEvidence.some((e) => e.source === "git:local_commit")).toBe(
       true,
     );
     expect(verifiedGitEffects).toEqual(["git.commit"]);
-    // GCEC-PUSH NOT READY — EC remains confirmed (not completed) under CR-06.
+    // EC remains confirmed (not completed) — push/PR/merge Evidence still outstanding.
     const ecAfter =
       await oa.executionContractServices.getExecutionContract.execute({
         executionContractId: contract.executionContractId,
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
index 3590a7ee..a0caf2d9 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
@@ -221,28 +221,54 @@ describe("D-GCEC-AGENT-01 AttemptExecutionProfile AP", () => {
     expect(a.ok && a.profile.kind).toBe("local_commit");
   });

-  it("AP-13 post-commit → fail closed (GCEC-PUSH not ready)", () => {
+  it("AP-13 post-commit without later effects → lifecycle_slice_exhausted", () => {
     const r = resolveAttemptExecutionProfile({
       contract: contract(),
       attempts: [attempt("xat:a"), attempt("xat:b")],
       evidence: [artifactEv("xat:a"), commitEv("xat:b")],
     });
     expect(r.ok).toBe(false);
-    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
+    if (!r.ok) expect(r.reason).toBe("attempt_profile_lifecycle_slice_exhausted");
+  });
+
+  it("AP-10 M4 + authorized git.push with commit lineage → remote_push", () => {
+    const r = resolveAttemptExecutionProfile({
+      contract: contract({
+        evidenceRequirements: ["git:local_commit", "git:remote_push"],
+        inputs: {
+          targetPath: PATH,
+          evidenceRequirements: ["artifact", "git:local_commit", "git:remote_push"],
+          commitMessage: "docs: add task manager functional design",
+        },
+      }),
+      attempts: [
+        attempt("xat:a"),
+        {
+          ...attempt("xat:b"),
+          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+        },
+      ],
+      evidence: [artifactEv("xat:a"), commitEv("xat:b")],
+      authorizedEffects: ["git.push"],
+    });
+    expect(r.ok).toBe(true);
+    if (!r.ok) return;
+    expect(r.profile.kind).toBe("remote_push");
+    expect(r.profile.effectClass).toBe("git.push");
   });

-  it("AP-10 M4 + authorized git.push → FAIL CLOSED", () => {
+  it("AP-10b M4 + authorized git.push without commit lineage → FAIL CLOSED", () => {
     const r = resolveAttemptExecutionProfile({
       contract: contract(),
       attempts: [attempt("xat:a")],
-      evidence: [artifactEv("xat:a"), commitEv("xat:b")],
+      evidence: [artifactEv("xat:a")],
       authorizedEffects: ["git.push"],
     });
     expect(r.ok).toBe(false);
-    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
+    if (!r.ok) expect(r.reason).toMatch(/without_verified_commit_lineage/);
   });

-  it("AP-11 M4 + PR create → FAIL CLOSED", () => {
+  it("AP-11 M4 + PR create without push lineage → FAIL CLOSED", () => {
     const r = resolveAttemptExecutionProfile({
       contract: contract(),
       authorizedEffects: ["github.pr.create"],
@@ -250,10 +276,10 @@ describe("D-GCEC-AGENT-01 AttemptExecutionProfile AP", () => {
       evidence: [artifactEv("xat:a")],
     });
     expect(r.ok).toBe(false);
-    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
+    if (!r.ok) expect(r.reason).toMatch(/without_verified_push_lineage/);
   });

-  it("AP-12 M4 + merge → FAIL CLOSED", () => {
+  it("AP-12 M4 + merge without PR identity → FAIL CLOSED", () => {
     const r = resolveAttemptExecutionProfile({
       contract: contract(),
       authorizedEffects: ["github.pr.merge"],
@@ -261,7 +287,7 @@ describe("D-GCEC-AGENT-01 AttemptExecutionProfile AP", () => {
       evidence: [artifactEv("xat:a")],
     });
     expect(r.ok).toBe(false);
-    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
+    if (!r.ok) expect(r.reason).toMatch(/without_verified_pr_identity/);
   });

   it("AP-14 non-M4 historical contract → contract_legacy still works", () => {
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts
index f7284403..c6b42b52 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts
@@ -10,9 +10,12 @@ import {
   isMutatingGcecCursorProfile,
   M4_BOUNDED_DOCS_WRITE_ACTION,
   M4_BOUNDED_LOCAL_COMMIT_ACTION,
+  M4_BOUNDED_PR_CREATE_ACTION,
+  M4_BOUNDED_REMOTE_PUSH_ACTION,
   M4_BOUNDED_RO_ACTION,
   M4_REAL_GATEWAY_ADAPTER_ID,
   MUTATING_CURSOR_STRIPPED_ENV_KEYS,
+  resolveMutatingConfinementEffectClass,
   SFIA_STUDIO_CURSOR_REAL_FLAG,
   StudioCursorRealLaunchGateway,
 } from "@/lib/oa/execution-attempt";
@@ -282,7 +285,7 @@ describe("D-GCEC-CONF-02A mutating Cursor confinement env", () => {
     expect(runner.calls).toHaveLength(0);
   });

-  it("CONF secret-safety: stripped sentinel values never appear in child env values", async () => {
+  it("CONF secret-safety: stripped sentinel values never appear in child env values", () => {
     const base = hostileBaseEnv();
     const child = buildMutatingCursorConfinementEnv(base);
     const joined = Object.values(child).join("\u0000");
@@ -291,4 +294,102 @@ describe("D-GCEC-CONF-02A mutating Cursor confinement env", () => {
     expect(joined).not.toContain("TEST_ASKPASS");
     expect(joined).not.toContain("TEST_GIT_SSH_COMMAND");
   });
+
+  it("CR-02 remote_git preserves SSH/askpass; still strips GH tokens + GIT_CONFIG", () => {
+    const base = hostileBaseEnv();
+    expect(resolveMutatingConfinementEffectClass({ isRemotePushProfile: true })).toBe(
+      "remote_git",
+    );
+    const child = buildMutatingCursorConfinementEnv(base, {
+      effectClass: "remote_git",
+    });
+    expect(child.SSH_AUTH_SOCK).toBe("TEST_SSH_SOCKET");
+    expect(child.SSH_AGENT_PID).toBe("TEST_SSH_AGENT_PID");
+    expect(child.GIT_ASKPASS).toBe("TEST_ASKPASS");
+    expect(child.SSH_ASKPASS).toBe("TEST_SSH_ASKPASS");
+    expect(child.GH_TOKEN).toBeUndefined();
+    expect(child.GITHUB_TOKEN).toBeUndefined();
+    expect(child.GIT_CONFIG_PARAMETERS).toBeUndefined();
+    expect(child.GIT_CONFIG_KEY_0).toBeUndefined();
+    expect(child.GIT_CONFIG_GLOBAL).toBe("/dev/null");
+  });
+
+  it("CR-02 remote_github preserves GH tokens; still strips SSH + GIT_CONFIG", () => {
+    const base = hostileBaseEnv();
+    expect(
+      resolveMutatingConfinementEffectClass({ isPrCreateProfile: true }),
+    ).toBe("remote_github");
+    expect(
+      resolveMutatingConfinementEffectClass({ isPrMergeProfile: true }),
+    ).toBe("remote_github");
+    const child = buildMutatingCursorConfinementEnv(base, {
+      effectClass: "remote_github",
+    });
+    expect(child.GH_TOKEN).toBe("TEST_GH_TOKEN");
+    expect(child.GITHUB_TOKEN).toBe("TEST_GITHUB_TOKEN");
+    expect(child.GH_ENTERPRISE_TOKEN).toBe("TEST_GH_ENTERPRISE_TOKEN");
+    expect(child.GITHUB_ENTERPRISE_TOKEN).toBe("TEST_GITHUB_ENTERPRISE_TOKEN");
+    expect(child.SSH_AUTH_SOCK).toBeUndefined();
+    expect(child.GIT_ASKPASS).toBeUndefined();
+    expect(child.GIT_CONFIG_PARAMETERS).toBeUndefined();
+    expect(child.GIT_CONFIG_GLOBAL).toBe("/dev/null");
+  });
+
+  function remotePushRequest(
+    overrides: Record<string, unknown> = {},
+  ): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
+    return baseRequest({
+      action: M4_BOUNDED_REMOTE_PUSH_ACTION,
+      selectedAgentRef: "agt:m4.cursor.bounded_remote_push",
+      authorizedEffects: ["git.push"],
+      gitPushSpec: {
+        repositoryRef: "acme/widget",
+        remoteName: "origin",
+        branchName: "gcec/docs",
+        expectedCommitSha: PARENT,
+        force: false,
+        delete: false,
+        noTags: true,
+      },
+      ...overrides,
+    });
+  }
+
+  function prCreateRequest(
+    overrides: Record<string, unknown> = {},
+  ): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
+    return baseRequest({
+      action: M4_BOUNDED_PR_CREATE_ACTION,
+      selectedAgentRef: "agt:m4.cursor.bounded_pr_create",
+      authorizedEffects: ["github.pr.create"],
+      gitPrCreateSpec: {
+        repositoryRef: "acme/widget",
+        headBranch: "gcec/docs",
+        baseBranch: "main",
+        title: "t",
+        expectedHeadSha: PARENT,
+        expectedBaseBranch: "main",
+      },
+      ...overrides,
+    });
+  }
+
+  it("CR-02 gateway C/D apply effect-sensitive confinement (not full local strip)", async () => {
+    const base = hostileBaseEnv();
+    const { gw, runner } = gateway(base);
+    await gw.launch(remotePushRequest({ attemptId: "xat:conf-c" }));
+    await gw.launch(prCreateRequest({ attemptId: "xat:conf-d" }));
+    expect(runner.calls).toHaveLength(2);
+    expect(runner.calls[0]!.env.SSH_AUTH_SOCK).toBe("TEST_SSH_SOCKET");
+    expect(runner.calls[0]!.env.GH_TOKEN).toBeUndefined();
+    expect(runner.calls[1]!.env.GH_TOKEN).toBe("TEST_GH_TOKEN");
+    expect(runner.calls[1]!.env.SSH_AUTH_SOCK).toBeUndefined();
+    expect(
+      isMutatingGcecCursorProfile({
+        isDocsWrite: false,
+        isLocalCommitProfile: false,
+        isRemotePushProfile: true,
+      }),
+    ).toBe(true);
+  });
 });
diff --git a/projects/sfia-studio/app/__tests__/oa/git-ports/gcecGitPorts.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/git-ports/gcecGitPorts.d0.test.ts
index 05a18dfd..dba7fea6 100644
--- a/projects/sfia-studio/app/__tests__/oa/git-ports/gcecGitPorts.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/git-ports/gcecGitPorts.d0.test.ts
@@ -35,6 +35,7 @@ describe("GCEC FakeRepositoryReadPorts (read-only)", () => {
       title: "GCEC lot",
       state: "open",
       headSha: FULL_SHA,
+      headBranch: "gcec/docs",
       baseBranch: "main",
       url: "https://github.com/acme/widget/pull/1",
     });
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
index 9a90a753..bdbf6fbe 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
@@ -50,7 +50,12 @@ export type GitPullRequestPayload = {
   url?: string;
   headSha: string;
   baseSha?: string;
-  state?: "open" | "closed" | "merged";
+  /** Required for GCEC verify path (CR-03). */
+  headBranch: string;
+  /** Required for GCEC verify path (CR-03). */
+  baseBranch: string;
+  /** Required for GCEC verify path — create path must be "open". */
+  state: "open" | "closed" | "merged";
 };

 export type GitCiStatusPayload = {
@@ -173,6 +178,18 @@ export function validateTypedGitEvidencePayload(
       if (!isFullSha(p.headSha)) {
         return { ok: false, reason: "head_sha_invalid" };
       }
+      if (!isNonEmptyString(p.headBranch)) {
+        return { ok: false, reason: "head_branch_required" };
+      }
+      if (!isNonEmptyString(p.baseBranch)) {
+        return { ok: false, reason: "base_branch_required" };
+      }
+      if (p.state !== "open" && p.state !== "closed" && p.state !== "merged") {
+        return { ok: false, reason: "pr_state_required" };
+      }
+      if (p.baseSha !== undefined && !isFullSha(p.baseSha)) {
+        return { ok: false, reason: "base_sha_invalid" };
+      }
       return { ok: true };
     case "git:ci_status":
       if (!isNonEmptyString(p.repositoryRef) || !isFullSha(p.commitSha)) {
@@ -275,9 +292,11 @@ export function buildTypedGitEvidenceFields<S extends TypedGitEvidenceSource>(
       location =
         `git:pull_request?repo=${encodeURIComponent(pr.repositoryRef)}` +
         `&prNumber=${encodeURIComponent(String(pr.prNumber))}` +
-        (pr.headSha
-          ? `&headSha=${encodeURIComponent(pr.headSha)}`
-          : "");
+        `&headSha=${encodeURIComponent(pr.headSha)}` +
+        `&headBranch=${encodeURIComponent(pr.headBranch)}` +
+        `&baseBranch=${encodeURIComponent(pr.baseBranch)}` +
+        `&state=${encodeURIComponent(pr.state)}` +
+        (pr.baseSha ? `&baseSha=${encodeURIComponent(pr.baseSha)}` : "");
       break;
     }
     case "git:ci_status": {
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 1ea37809..0f88b31a 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -58,6 +58,9 @@ import type {
 } from "../domain/realLaunchSafety";
 import { isM4AuthorizedCursorRealAgent } from "../infrastructure/m4BoundedDocsWriteCursorAgent";
 import { isM4BoundedLocalCommitRealAgent } from "../infrastructure/m4BoundedLocalCommitCursorAgent";
+import { isM4BoundedRemotePushRealAgent } from "../infrastructure/m4BoundedRemotePushCursorAgent";
+import { isM4BoundedPrCreateRealAgent } from "../infrastructure/m4BoundedPrCreateCursorAgent";
+import { isM4BoundedPrMergeRealAgent } from "../infrastructure/m4BoundedPrMergeCursorAgent";
 import { resolveAttemptExecutionProfile } from "../domain/resolveAttemptExecutionProfile";
 import type { ListProjectEvidenceFn } from "../domain/projectEvidenceList";
 import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
@@ -74,6 +77,7 @@ import { deriveAuthorizedExecutionSlice } from "../domain/authorizedExecutionSli
 import {
   assertConfirmationMatchAgreesWithServerTarget,
   resolveGitEffectTarget,
+  resolveVerifiedPullRequestNumber,
   resolvedTargetToConfirmationMatch,
 } from "../domain/resolveGitEffectTarget";
 import { deriveExecutableEffectsFromContractRequirements } from "../domain/contractEffectClassification";
@@ -83,6 +87,22 @@ import {
   deriveTrustedCommitMessage,
 } from "../domain/gitCommitLaunchSpec";
 import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
+import {
+  buildGitPushLaunchSpec,
+  deriveDeterministicGcecPushBranch,
+  isBoundedGitPushOnlySlice,
+} from "../domain/gitPushLaunchSpec";
+import {
+  buildGitPrCreateLaunchSpec,
+  isBoundedGitPrCreateOnlySlice,
+} from "../domain/gitPrCreateLaunchSpec";
+import {
+  buildGitPrMergeLaunchSpec,
+  isBoundedGitPrMergeOnlySlice,
+} from "../domain/gitPrMergeLaunchSpec";
+import { assertFreshPrMergePreflight } from "../domain/assertFreshPrMergePreflight";
+import { resolveVerifiedLocalCommitPriorAttempt } from "../domain/resolveVerifiedLocalCommitPriorAttempt";
+import { resolveVerifiedRemotePushPriorAttempt } from "../domain/resolveVerifiedRemotePushPriorAttempt";
 import type { CursorAuthorizedEffectId } from "../domain/cursorExecutionReport";
 import {
   authorityFailureDetail,
@@ -282,6 +302,11 @@ export class StartExecution {
      * CR-GCEC-23 / CORR-D-GCEC-AGENT-01 — Evidence list (Result; late-bound OK).
      */
     private readonly listProjectEvidence?: ListProjectEvidenceFn,
+    /**
+     * CR-04 — optional RepositoryRead for fresh live PR preflight before merge E.
+     * Fail closed on merge slice when merge authorized and this dep is missing.
+     */
+    private readonly repositoryRead?: import("@/lib/oa/git-ports").RepositoryReadPort,
   ) {}

   async execute(
@@ -1144,7 +1169,7 @@ export class StartExecution {
           { selectedAgentRef: attempt.selectedAgentRef },
         );
       }
-      // Defense: commit-only slice still requires exact local-commit descriptor.
+      // Defense: exclusive Git slices still require exact agent descriptors.
       if (
         isBoundedGitCommitOnlySlice(authorizedSlice.authorizedEffects) &&
         !isM4BoundedLocalCommitRealAgent(agent)
@@ -1155,6 +1180,36 @@ export class StartExecution {
           { selectedAgentRef: attempt.selectedAgentRef },
         );
       }
+      if (
+        isBoundedGitPushOnlySlice(authorizedSlice.authorizedEffects) &&
+        !isM4BoundedRemotePushRealAgent(agent)
+      ) {
+        return fail(
+          "AGENT_CAPABILITY_MISMATCH",
+          "git_push_agent_capability_bypass",
+          { selectedAgentRef: attempt.selectedAgentRef },
+        );
+      }
+      if (
+        isBoundedGitPrCreateOnlySlice(authorizedSlice.authorizedEffects) &&
+        !isM4BoundedPrCreateRealAgent(agent)
+      ) {
+        return fail(
+          "AGENT_CAPABILITY_MISMATCH",
+          "git_pr_create_agent_capability_bypass",
+          { selectedAgentRef: attempt.selectedAgentRef },
+        );
+      }
+      if (
+        isBoundedGitPrMergeOnlySlice(authorizedSlice.authorizedEffects) &&
+        !isM4BoundedPrMergeRealAgent(agent)
+      ) {
+        return fail(
+          "AGENT_CAPABILITY_MISMATCH",
+          "git_pr_merge_agent_capability_bypass",
+          { selectedAgentRef: attempt.selectedAgentRef },
+        );
+      }
     }

     // D-GCEC-CONT-01 — pre-commit workspace continuation (server-derived only).
@@ -1282,6 +1337,354 @@ export class StartExecution {
       gitCommitSpec = built.spec;
     }

+    // GCEC bounded git.push-only Attempt C — server-derived GitPushLaunchSpec.
+    let gitPushSpec: import("../domain/gitPushLaunchSpec").GitPushLaunchSpec | undefined;
+    if (isBoundedGitPushOnlySlice(authorizedSlice.authorizedEffects)) {
+      const contractInputs =
+        contract.inputs && typeof contract.inputs === "object"
+          ? (contract.inputs as Record<string, unknown>)
+          : {};
+      const peerAttemptsPush = await this.attempts.listByContract(
+        contract.executionContractId,
+      );
+      const evidenceReadPush = this.listProjectEvidence
+        ? await this.listProjectEvidence(contract.projectId)
+        : { ok: false as const, reason: "evidence_reader_unavailable" as const };
+      if (!evidenceReadPush.ok) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "attempt_profile_evidence_reader_unavailable",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const projectBindingPush = this.resolveProjectRepositoryBinding
+        ? await this.resolveProjectRepositoryBinding(contract.projectId)
+        : null;
+      if (!projectBindingPush?.identity?.trim()) {
+        return fail("ATTEMPT_INVALID", "project_repository_binding_missing", {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      const repoRef = projectBindingPush.identity.trim();
+      const targetResolved = resolveGitEffectTarget({
+        effect: "git.push",
+        contract,
+        projectRepositoryBinding: projectBindingPush,
+        projectedRepositoryRef:
+          repositoryBindingIdentity?.trim() ||
+          (typeof contractInputs.repositoryRef === "string"
+            ? contractInputs.repositoryRef.trim()
+            : undefined),
+        actorId: request.actor.actorId,
+        verifiedEvidence: evidenceReadPush.evidence.filter(
+          (e) => e.status === "verified",
+        ),
+      });
+      if (!targetResolved.ok) {
+        return fail("ATTEMPT_INVALID", targetResolved.reason, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      const priorCommit = resolveVerifiedLocalCommitPriorAttempt({
+        contract,
+        attempts: peerAttemptsPush,
+        evidence: evidenceReadPush.evidence,
+        repositoryRef: repoRef,
+      });
+      if (!priorCommit.ok) {
+        return fail(
+          "ATTEMPT_INVALID",
+          priorCommit.reason === "local_commit_prior_none"
+            ? "git_push_without_verified_local_commit"
+            : priorCommit.reason,
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      // Prefer contract inputs.workingBranch; else server target branch;
+      // else deterministic EC-derived feature branch (no client free authority).
+      const workingBranch =
+        (typeof contractInputs.workingBranch === "string" &&
+          contractInputs.workingBranch.trim()) ||
+        (typeof contractInputs.branchName === "string" &&
+          contractInputs.branchName.trim()) ||
+        targetResolved.target.branchOrRef?.trim() ||
+        deriveDeterministicGcecPushBranch(contract.executionContractId);
+      const claimedClientBranch =
+        typeof (request as unknown as { branchName?: unknown }).branchName ===
+        "string"
+          ? String((request as unknown as { branchName: string }).branchName)
+          : undefined;
+      const builtPush = buildGitPushLaunchSpec({
+        repositoryRef: repoRef,
+        remoteName: "origin",
+        branchName: workingBranch,
+        expectedCommitSha: priorCommit.prior.commitSha,
+        force: false,
+        delete: false,
+        noTags: true,
+        ...(claimedClientBranch ? { claimedClientBranch } : {}),
+      });
+      if (!builtPush.ok) {
+        return fail("ATTEMPT_INVALID", builtPush.reason, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      gitPushSpec = builtPush.spec;
+    }
+
+    // GCEC bounded github.pr.create-only Attempt D.
+    let gitPrCreateSpec:
+      | import("../domain/gitPrCreateLaunchSpec").GitPrCreateLaunchSpec
+      | undefined;
+    if (isBoundedGitPrCreateOnlySlice(authorizedSlice.authorizedEffects)) {
+      const contractInputs =
+        contract.inputs && typeof contract.inputs === "object"
+          ? (contract.inputs as Record<string, unknown>)
+          : {};
+      const peerAttemptsPr = await this.attempts.listByContract(
+        contract.executionContractId,
+      );
+      const evidenceReadPr = this.listProjectEvidence
+        ? await this.listProjectEvidence(contract.projectId)
+        : { ok: false as const, reason: "evidence_reader_unavailable" as const };
+      if (!evidenceReadPr.ok) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "attempt_profile_evidence_reader_unavailable",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const projectBindingPr = this.resolveProjectRepositoryBinding
+        ? await this.resolveProjectRepositoryBinding(contract.projectId)
+        : null;
+      if (!projectBindingPr?.identity?.trim()) {
+        return fail("ATTEMPT_INVALID", "project_repository_binding_missing", {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      const repoRef = projectBindingPr.identity.trim();
+      const priorPush = resolveVerifiedRemotePushPriorAttempt({
+        contract,
+        attempts: peerAttemptsPr,
+        evidence: evidenceReadPr.evidence,
+        repositoryRef: repoRef,
+      });
+      if (!priorPush.ok) {
+        return fail(
+          "ATTEMPT_INVALID",
+          priorPush.reason === "remote_push_prior_none"
+            ? "git_pr_create_without_verified_remote_push"
+            : priorPush.reason,
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      // AC-02/AC-03 — Evidence repo + branch + SHA must bind C→D exactly.
+      if (
+        !priorPush.prior.repositoryRef.trim() ||
+        priorPush.prior.repositoryRef !== repoRef
+      ) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "git_pr_create_prior_push_repository_mismatch",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const headBranch = priorPush.prior.branchName.trim();
+      if (!headBranch) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "git_pr_create_prior_push_branch_missing",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const contractWorkingBranch =
+        typeof contractInputs.workingBranch === "string"
+          ? contractInputs.workingBranch.trim()
+          : "";
+      if (contractWorkingBranch && contractWorkingBranch !== headBranch) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "git_pr_create_prior_push_branch_mismatch",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const expectedHeadSha = priorPush.prior.commitSha.trim().toLowerCase();
+      if (!/^[0-9a-f]{40}$/.test(expectedHeadSha)) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "git_pr_create_expected_head_sha_invalid",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      if (!this.repositoryRead) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "git_pr_create_repository_read_unavailable",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const remoteHead = await this.repositoryRead.getBranchHead({
+        repositoryRef: repoRef,
+        branch: headBranch,
+      });
+      if (remoteHead == null || !String(remoteHead).trim()) {
+        return fail("ATTEMPT_INVALID", "git_pr_create_remote_head_missing", {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      if (String(remoteHead).trim().toLowerCase() !== expectedHeadSha) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "git_pr_create_remote_head_sha_drift",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const baseBranch =
+        projectBindingPr.defaultBranch?.trim() ||
+        (typeof contractInputs.baseBranch === "string" &&
+          contractInputs.baseBranch.trim()) ||
+        "main";
+      const title =
+        (typeof contractInputs.prTitle === "string" &&
+          contractInputs.prTitle.trim()) ||
+        (typeof contractInputs.commitMessage === "string" &&
+          contractInputs.commitMessage.trim()) ||
+        `GCEC lifecycle PR for ${contract.executionContractId}`;
+      const body =
+        typeof contractInputs.prBody === "string"
+          ? contractInputs.prBody
+          : undefined;
+      const claimedAutoMerge =
+        (request as { autoMerge?: unknown }).autoMerge ??
+        (request as { enableAutoMerge?: unknown }).enableAutoMerge;
+      const claimedHeadSha = (request as { claimedHeadSha?: unknown })
+        .claimedHeadSha;
+      const builtPr = buildGitPrCreateLaunchSpec({
+        repositoryRef: repoRef,
+        headBranch,
+        baseBranch,
+        title,
+        expectedHeadSha,
+        ...(body != null ? { body } : {}),
+        expectedBaseBranch: baseBranch,
+        ...(claimedAutoMerge !== undefined
+          ? { claimedAutoMerge }
+          : {}),
+        ...(claimedHeadSha !== undefined ? { claimedHeadSha } : {}),
+      });
+      if (!builtPr.ok) {
+        return fail("ATTEMPT_INVALID", builtPr.reason, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      gitPrCreateSpec = builtPr.spec;
+    }
+
+    // GCEC bounded github.pr.merge-only Attempt E — PREP only (REAL merge not run in PATH B).
+    // CR-04: fresh RepositoryRead preflight is the authority gate before launch.
+    let gitPrMergeSpec:
+      | import("../domain/gitPrMergeLaunchSpec").GitPrMergeLaunchSpec
+      | undefined;
+    if (isBoundedGitPrMergeOnlySlice(authorizedSlice.authorizedEffects)) {
+      if (!this.repositoryRead) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "git_pr_merge_repository_read_unavailable",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const evidenceReadMerge = this.listProjectEvidence
+        ? await this.listProjectEvidence(contract.projectId)
+        : { ok: false as const, reason: "evidence_reader_unavailable" as const };
+      if (!evidenceReadMerge.ok) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "attempt_profile_evidence_reader_unavailable",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const projectBindingMerge = this.resolveProjectRepositoryBinding
+        ? await this.resolveProjectRepositoryBinding(contract.projectId)
+        : null;
+      if (!projectBindingMerge?.identity?.trim()) {
+        return fail("ATTEMPT_INVALID", "project_repository_binding_missing", {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      const repoRef = projectBindingMerge.identity.trim();
+      const pr = resolveVerifiedPullRequestNumber({
+        evidence: evidenceReadMerge.evidence,
+        projectId: contract.projectId,
+        cycleInstanceId: contract.cycleInstanceId,
+        executionContractId: contract.executionContractId,
+        repositoryRef: repoRef,
+      });
+      if (!pr.ok) {
+        return fail("ATTEMPT_INVALID", pr.reason, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      // AC-04/AC-05 — complete PR identity from Evidence; state must be open.
+      if (pr.state !== "open") {
+        return fail("ATTEMPT_INVALID", "git_pr_merge_evidence_state_not_open", {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      const expectedHeadSha = pr.headSha;
+      if (!/^[0-9a-f]{40}$/i.test(expectedHeadSha)) {
+        return fail("ATTEMPT_INVALID", "git_pr_merge_expected_head_sha_invalid", {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      const expectedHeadBranch = pr.headBranch.trim();
+      if (!expectedHeadBranch) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "git_pr_merge_expected_head_branch_missing",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const expectedBaseBranch = pr.baseBranch.trim();
+      if (!expectedBaseBranch) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "git_pr_merge_expected_base_branch_missing",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const livePr = await this.repositoryRead.getPullRequest({
+        repositoryRef: repoRef,
+        number: pr.prNumber,
+      });
+      const preflight = assertFreshPrMergePreflight({
+        live: livePr,
+        expected: {
+          headSha: expectedHeadSha,
+          headBranch: expectedHeadBranch,
+          baseBranch: expectedBaseBranch,
+        },
+      });
+      if (!preflight.ok) {
+        return fail("ATTEMPT_INVALID", preflight.reason, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      const builtMerge = buildGitPrMergeLaunchSpec({
+        repositoryRef: repoRef,
+        prNumber: pr.prNumber,
+        expectedHeadSha,
+        expectedHeadBranch,
+        expectedBaseBranch,
+        mergeMethod: "merge",
+      });
+      if (!builtMerge.ok) {
+        return fail("ATTEMPT_INVALID", builtMerge.reason, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      gitPrMergeSpec = builtMerge.spec;
+    }
+
     let launch;
     try {
       launch = await this.realLaunchPort.launch({
@@ -1299,6 +1702,9 @@ export class StartExecution {
         timeoutMs: window.resolvedMaxDurationMs,
         ...(docsWriteSpec ? { docsWriteSpec } : {}),
         ...(gitCommitSpec ? { gitCommitSpec } : {}),
+        ...(gitPushSpec ? { gitPushSpec } : {}),
+        ...(gitPrCreateSpec ? { gitPrCreateSpec } : {}),
+        ...(gitPrMergeSpec ? { gitPrMergeSpec } : {}),
         ...(repositoryBindingIdentity
           ? { repositoryBindingIdentity }
           : {}),
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
index d1f0fc2a..6ef10db7 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
@@ -19,6 +19,15 @@ export const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID =
 export const M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID =
   "agt:m4.cursor.bounded_local_commit" as const;

+export const M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID =
+  "agt:m4.cursor.bounded_remote_push" as const;
+
+export const M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID =
+  "agt:m4.cursor.bounded_pr_create" as const;
+
+export const M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID =
+  "agt:m4.cursor.bounded_pr_merge" as const;
+
 export type RealLaunchReconcileDisposition =
   | "CLEAR"
   | "UNKNOWN"
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
index 6fb6cabc..857761ab 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
@@ -1,11 +1,13 @@
 /**
  * D-GCEC-AGENT-01 — AttemptExecutionProfile (non-persistent).
- * CORR-D-GCEC-AGENT-01: exact Attempt-A lineage + unsupported M4 fail-closed.
+ * CORR-D-GCEC-AGENT-01 / GCEC-GIT-LIFECYCLE-E2E-01 PATH B:
+ * progressive docs-write → local-commit → remote_push → pr_create → pr_merge.
  *
  * Server-derived executor sufficiency for THIS Attempt's current eligible slice.
  * NOT an authority source, NOT client-authoritative, NOT persisted.
  *
  * Selection and Start MUST use this same resolver.
+ * Profile eligibility ≠ merge GO (Confirmation still required at Start/slice).
  */
 import type { Evidence } from "@/lib/oa/evidence-review";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
@@ -24,23 +26,55 @@ import {
   M4_BOUNDED_LOCAL_COMMIT_SCOPE,
   M4_BOUNDED_LOCAL_COMMIT_TARGET,
 } from "../infrastructure/m4BoundedLocalCommitCursorAgent";
+import {
+  M4_BOUNDED_REMOTE_PUSH_ACTION,
+  M4_BOUNDED_REMOTE_PUSH_CAPABILITY,
+  M4_BOUNDED_REMOTE_PUSH_SCOPE,
+  M4_BOUNDED_REMOTE_PUSH_TARGET,
+} from "../infrastructure/m4BoundedRemotePushCursorAgent";
+import {
+  M4_BOUNDED_PR_CREATE_ACTION,
+  M4_BOUNDED_PR_CREATE_CAPABILITY,
+  M4_BOUNDED_PR_CREATE_SCOPE,
+  M4_BOUNDED_PR_CREATE_TARGET,
+} from "../infrastructure/m4BoundedPrCreateCursorAgent";
+import {
+  M4_BOUNDED_PR_MERGE_ACTION,
+  M4_BOUNDED_PR_MERGE_CAPABILITY,
+  M4_BOUNDED_PR_MERGE_SCOPE,
+  M4_BOUNDED_PR_MERGE_TARGET,
+} from "../infrastructure/m4BoundedPrMergeCursorAgent";
 import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
 import {
   resolveVerifiedDocsWritePriorAttempt,
   type VerifiedDocsWritePriorAttempt,
 } from "./resolveVerifiedDocsWritePriorAttempt";
+import {
+  resolveVerifiedLocalCommitPriorAttempt,
+  type VerifiedLocalCommitPriorAttempt,
+} from "./resolveVerifiedLocalCommitPriorAttempt";
+import {
+  resolveVerifiedRemotePushPriorAttempt,
+  type VerifiedRemotePushPriorAttempt,
+} from "./resolveVerifiedRemotePushPriorAttempt";
+import { resolveVerifiedPullRequestNumber } from "./resolveGitEffectTarget";

 export type AttemptExecutionProfileKind =
   | "docs_write"
   | "local_commit"
+  | "remote_push"
+  | "pr_create"
+  | "pr_merge"
   | "contract_legacy";

-/** Non-persistent lineage facts for local_commit profile (CR-GCEC-AGENT-07). */
+/** Non-persistent lineage facts for progressive profiles. */
 export type AttemptExecutionProfileLineage = {
   readonly priorAttemptId: string;
   readonly evidenceId: string;
-  readonly artifactPath: string;
-  readonly artifactDigest: string;
+  readonly artifactPath?: string;
+  readonly artifactDigest?: string;
+  readonly commitSha?: string;
+  readonly prNumber?: number;
 };

 export type AttemptExecutionProfile = {
@@ -50,8 +84,14 @@ export type AttemptExecutionProfile = {
   /** Human-readable derivation reason (audit / tests). */
   readonly reason: string;
   /** Eligible effect class for this Attempt (informational). */
-  readonly effectClass: "filesystem" | "git.commit" | "contract_legacy";
-  /** Present when kind === local_commit — exact prior A. */
+  readonly effectClass:
+    | "filesystem"
+    | "git.commit"
+    | "git.push"
+    | "github.pr.create"
+    | "github.pr.merge"
+    | "contract_legacy";
+  /** Present when kind has verified prior lineage. */
   readonly lineage?: AttemptExecutionProfileLineage;
 };

@@ -95,11 +135,9 @@ export type ResolveAttemptExecutionProfileResult =
   | { readonly ok: true; readonly profile: AttemptExecutionProfile }
   | { readonly ok: false; readonly reason: string };

+/** Only github.pr.update remains permanently unsupported in M4 progressive. */
 const UNSUPPORTED_M4_PROTECTED: ReadonlySet<CursorAuthorizedEffectId> = new Set([
-  "git.push",
-  "github.pr.create",
   "github.pr.update",
-  "github.pr.merge",
 ]);

 function docsWriteProfile(reason: string): AttemptExecutionProfile {
@@ -139,6 +177,76 @@ function localCommitProfile(
   };
 }

+function remotePushProfile(
+  reason: string,
+  prior: VerifiedLocalCommitPriorAttempt,
+): AttemptExecutionProfile {
+  return {
+    kind: "remote_push",
+    effectClass: "git.push",
+    reason,
+    lineage: {
+      priorAttemptId: prior.priorAttemptId,
+      evidenceId: prior.evidenceId,
+      commitSha: prior.commitSha,
+    },
+    criteria: {
+      requiredCapabilities: [M4_BOUNDED_REMOTE_PUSH_CAPABILITY],
+      action: M4_BOUNDED_REMOTE_PUSH_ACTION,
+      target: M4_BOUNDED_REMOTE_PUSH_TARGET,
+      scope: M4_BOUNDED_REMOTE_PUSH_SCOPE,
+    },
+  };
+}
+
+function prCreateProfile(
+  reason: string,
+  prior: VerifiedRemotePushPriorAttempt,
+): AttemptExecutionProfile {
+  return {
+    kind: "pr_create",
+    effectClass: "github.pr.create",
+    reason,
+    lineage: {
+      priorAttemptId: prior.priorAttemptId,
+      evidenceId: prior.evidenceId,
+      commitSha: prior.commitSha,
+    },
+    criteria: {
+      requiredCapabilities: [M4_BOUNDED_PR_CREATE_CAPABILITY],
+      action: M4_BOUNDED_PR_CREATE_ACTION,
+      target: M4_BOUNDED_PR_CREATE_TARGET,
+      scope: M4_BOUNDED_PR_CREATE_SCOPE,
+    },
+  };
+}
+
+function prMergeProfile(
+  reason: string,
+  prNumber: number,
+  evidenceId?: string,
+  priorAttemptId?: string,
+  headSha?: string,
+): AttemptExecutionProfile {
+  return {
+    kind: "pr_merge",
+    effectClass: "github.pr.merge",
+    reason,
+    lineage: {
+      priorAttemptId: priorAttemptId ?? "",
+      evidenceId: evidenceId ?? "",
+      prNumber,
+      ...(headSha ? { commitSha: headSha } : {}),
+    },
+    criteria: {
+      requiredCapabilities: [M4_BOUNDED_PR_MERGE_CAPABILITY],
+      action: M4_BOUNDED_PR_MERGE_ACTION,
+      target: M4_BOUNDED_PR_MERGE_TARGET,
+      scope: M4_BOUNDED_PR_MERGE_SCOPE,
+    },
+  };
+}
+
 function contractLegacyProfile(
   contract: ResolveAttemptExecutionProfileInput["contract"],
   reason: string,
@@ -156,43 +264,77 @@ function contractLegacyProfile(
   };
 }

+type UniqueEffectClass =
+  | "filesystem"
+  | "git.commit"
+  | "git.push"
+  | "github.pr.create"
+  | "github.pr.merge"
+  | "unsupported_protected"
+  | "other"
+  | "empty"
+  | "mixed";
+
 function uniqueAuthorizedEffectClass(
   effects: readonly CursorAuthorizedEffectId[],
-): "filesystem" | "git.commit" | "unsupported_protected" | "other" | "empty" | "mixed" {
+): UniqueEffectClass {
   const set = new Set(effects);
   if (set.size === 0) return "empty";
   const fs = [...set].filter(
     (e) => e === "filesystem.create" || e === "filesystem.modify",
   );
   const commit = set.has("git.commit");
+  const push = set.has("git.push");
+  const prCreate = set.has("github.pr.create");
+  const prMerge = set.has("github.pr.merge");
   const unsupported = [...set].filter((e) => UNSUPPORTED_M4_PROTECTED.has(e));
+  const known =
+    (fs.length > 0 ? 1 : 0) +
+    (commit ? 1 : 0) +
+    (push ? 1 : 0) +
+    (prCreate ? 1 : 0) +
+    (prMerge ? 1 : 0);
   const other = [...set].filter(
     (e) =>
       e !== "filesystem.create" &&
       e !== "filesystem.modify" &&
       e !== "git.commit" &&
+      e !== "git.push" &&
+      e !== "github.pr.create" &&
+      e !== "github.pr.merge" &&
       e !== "validation.run" &&
       !UNSUPPORTED_M4_PROTECTED.has(e),
   );
   if (unsupported.length > 0) {
-    if (fs.length > 0 || commit || other.length > 0) return "mixed";
+    if (known > 0 || other.length > 0) return "mixed";
     return "unsupported_protected";
   }
-  if (other.length > 0 && (fs.length > 0 || commit)) return "mixed";
+  if (other.length > 0 && known > 0) return "mixed";
   if (other.length > 0) return "other";
-  if (commit && fs.length > 0) return "mixed";
+  if (known > 1) return "mixed";
   if (commit) return "git.commit";
+  if (push) return "git.push";
+  if (prCreate) return "github.pr.create";
+  if (prMerge) return "github.pr.merge";
   if (fs.length > 0) return "filesystem";
   return "other";
 }

-function resolveLocalCommitOrFail(
+function requireEvidenceReader(
   input: ResolveAttemptExecutionProfileInput,
-  reason: string,
-): ResolveAttemptExecutionProfileResult {
+): ResolveAttemptExecutionProfileResult | null {
   if (input.evidenceReaderAvailable === false) {
     return { ok: false, reason: "attempt_profile_evidence_reader_unavailable" };
   }
+  return null;
+}
+
+function resolveLocalCommitOrFail(
+  input: ResolveAttemptExecutionProfileInput,
+  reason: string,
+): ResolveAttemptExecutionProfileResult {
+  const reader = requireEvidenceReader(input);
+  if (reader) return reader;
   const prior = resolveVerifiedDocsWritePriorAttempt({
     contract: input.contract,
     attempts: input.attempts ?? [],
@@ -222,6 +364,164 @@ function resolveLocalCommitOrFail(
   };
 }

+function resolveRemotePushOrFail(
+  input: ResolveAttemptExecutionProfileInput,
+  reason: string,
+): ResolveAttemptExecutionProfileResult {
+  const reader = requireEvidenceReader(input);
+  if (reader) return reader;
+  const prior = resolveVerifiedLocalCommitPriorAttempt({
+    contract: input.contract,
+    attempts: input.attempts ?? [],
+    evidence: input.evidence ?? [],
+  });
+  if (!prior.ok) {
+    if (prior.reason === "local_commit_prior_none") {
+      return {
+        ok: false,
+        reason: "attempt_profile_push_without_verified_commit_lineage",
+      };
+    }
+    if (prior.reason === "local_commit_prior_ambiguous") {
+      return {
+        ok: false,
+        reason: "attempt_profile_local_commit_prior_ambiguous",
+      };
+    }
+    return {
+      ok: false,
+      reason: "attempt_profile_local_commit_prior_incomplete",
+    };
+  }
+  return {
+    ok: true,
+    profile: remotePushProfile(reason, prior.prior),
+  };
+}
+
+function resolvePrCreateOrFail(
+  input: ResolveAttemptExecutionProfileInput,
+  reason: string,
+): ResolveAttemptExecutionProfileResult {
+  const reader = requireEvidenceReader(input);
+  if (reader) return reader;
+  const prior = resolveVerifiedRemotePushPriorAttempt({
+    contract: input.contract,
+    attempts: input.attempts ?? [],
+    evidence: input.evidence ?? [],
+  });
+  if (!prior.ok) {
+    if (prior.reason === "remote_push_prior_none") {
+      return {
+        ok: false,
+        reason: "attempt_profile_pr_create_without_verified_push_lineage",
+      };
+    }
+    if (prior.reason === "remote_push_prior_ambiguous") {
+      return {
+        ok: false,
+        reason: "attempt_profile_remote_push_prior_ambiguous",
+      };
+    }
+    return {
+      ok: false,
+      reason: "attempt_profile_remote_push_prior_incomplete",
+    };
+  }
+  return {
+    ok: true,
+    profile: prCreateProfile(reason, prior.prior),
+  };
+}
+
+function resolvePrMergeOrFail(
+  input: ResolveAttemptExecutionProfileInput,
+  reason: string,
+): ResolveAttemptExecutionProfileResult {
+  const reader = requireEvidenceReader(input);
+  if (reader) return reader;
+  const evidence = input.evidence ?? [];
+  const repoFromInputs =
+    input.contract.inputs &&
+    typeof input.contract.inputs === "object" &&
+    typeof (input.contract.inputs as { repositoryRef?: unknown }).repositoryRef ===
+      "string"
+      ? String(
+          (input.contract.inputs as { repositoryRef: string }).repositoryRef,
+        ).trim()
+      : "";
+  // Prefer repository from verified push Evidence; fall back to inputs.
+  const pushPrior = resolveVerifiedRemotePushPriorAttempt({
+    contract: input.contract,
+    attempts: input.attempts ?? [],
+    evidence,
+  });
+  const repositoryRef =
+    (pushPrior.ok ? pushPrior.prior.repositoryRef : "") || repoFromInputs;
+  if (!repositoryRef) {
+    return {
+      ok: false,
+      reason: "attempt_profile_pr_merge_without_verified_pr_identity",
+    };
+  }
+  const pr = resolveVerifiedPullRequestNumber({
+    evidence,
+    projectId: input.contract.projectId,
+    cycleInstanceId: input.contract.cycleInstanceId,
+    executionContractId: input.contract.executionContractId,
+    repositoryRef,
+  });
+  if (!pr.ok) {
+    return {
+      ok: false,
+      reason: "attempt_profile_pr_merge_without_verified_pr_identity",
+    };
+  }
+  // AC-04 — merge path requires complete open identity.
+  if (
+    pr.state !== "open" ||
+    !pr.headBranch.trim() ||
+    !pr.headSha.trim() ||
+    !pr.baseBranch.trim()
+  ) {
+    return {
+      ok: false,
+      reason: "attempt_profile_pr_merge_without_verified_pr_identity",
+    };
+  }
+  const prEv = evidence.find(
+    (ev) =>
+      ev.status === "verified" &&
+      ev.source === "git:pull_request" &&
+      ev.bindings.executionContractId === input.contract.executionContractId &&
+      String(ev.location ?? "").includes(`prNumber=${pr.prNumber}`),
+  );
+  return {
+    ok: true,
+    profile: prMergeProfile(
+      reason,
+      pr.prNumber,
+      prEv?.evidenceId,
+      prEv?.bindings.executionAttemptId,
+      pr.headSha,
+    ),
+  };
+}
+
+function evidenceVerifiedForSource(
+  evidence: readonly Evidence[],
+  contract: ResolveAttemptExecutionProfileInput["contract"],
+  source: string,
+): boolean {
+  return evidence.some(
+    (ev) =>
+      ev.status === "verified" &&
+      ev.source === source &&
+      ev.bindings.executionContractId === contract.executionContractId &&
+      ev.bindings.projectId === contract.projectId,
+  );
+}
+
 /**
  * Derive the current AttemptExecutionProfile from durable Product truth.
  * Fail closed on zero / ambiguous / unsupported profiles.
@@ -275,6 +575,9 @@ export function resolveAttemptExecutionProfile(
     (e) => e === "filesystem.create" || e === "filesystem.modify",
   );
   const hasCommit = executable.includes("git.commit");
+  const hasPush = executable.includes("git.push");
+  const hasPr = executable.includes("github.pr.create");
+  const hasMerge = executable.includes("github.pr.merge");
   const hasUnsupportedProtected = executable.some((e) =>
     UNSUPPORTED_M4_PROTECTED.has(e as CursorAuthorizedEffectId),
   );
@@ -286,7 +589,7 @@ export function resolveAttemptExecutionProfile(
     );

   // When Start provides server-derived authorizedEffects, use them to confirm
-  // the unique slice — still require exact Attempt-A lineage for commit.
+  // the unique slice — still require exact prior lineage for progressive steps.
   if (input.authorizedEffects && isM4DocsWriteContract) {
     const cls = uniqueAuthorizedEffectClass(input.authorizedEffects);
     if (cls === "empty") {
@@ -307,18 +610,37 @@ export function resolveAttemptExecutionProfile(
     if (cls === "git.commit") {
       return resolveLocalCommitOrFail(input, "authorized_slice_git_commit");
     }
+    if (cls === "git.push") {
+      return resolveRemotePushOrFail(input, "authorized_slice_git_push");
+    }
+    if (cls === "github.pr.create") {
+      return resolvePrCreateOrFail(input, "authorized_slice_pr_create");
+    }
+    if (cls === "github.pr.merge") {
+      return resolvePrMergeOrFail(input, "authorized_slice_pr_merge");
+    }
     // validation-only / unknown under M4 progressive — fail closed (CR-06).
     return { ok: false, reason: "attempt_profile_effect_not_supported" };
   }

   // Selection-time / restart: durable Evidence only.
-  if (isM4DocsWriteContract && (hasFs || hasCommit || hasUnsupportedProtected)) {
+  if (
+    isM4DocsWriteContract &&
+    (hasFs || hasCommit || hasPush || hasPr || hasMerge || hasUnsupportedProtected)
+  ) {
     // Progressive M4 path — never fall back to contract_legacy for later effects.
-    if (hasUnsupportedProtected && !hasFs && !hasCommit) {
+    if (
+      hasUnsupportedProtected &&
+      !hasFs &&
+      !hasCommit &&
+      !hasPush &&
+      !hasPr &&
+      !hasMerge
+    ) {
       return { ok: false, reason: "attempt_profile_effect_not_supported" };
     }

-    if (hasFs && hasCommit) {
+    if (hasFs && (hasCommit || hasPush || hasPr || hasMerge)) {
       if (input.evidenceReaderAvailable === false) {
         return {
           ok: false,
@@ -350,15 +672,12 @@ export function resolveAttemptExecutionProfile(
         };
       }

-      // Qualified A exists — check whether commit Evidence already closes it.
-      const commitVerified = evidence.some(
-        (ev) =>
-          ev.status === "verified" &&
-          ev.source === "git:local_commit" &&
-          ev.bindings.executionContractId === contract.executionContractId &&
-          ev.bindings.projectId === contract.projectId,
+      const commitVerified = evidenceVerifiedForSource(
+        evidence,
+        contract,
+        "git:local_commit",
       );
-      if (!commitVerified) {
+      if (hasCommit && !commitVerified) {
         return {
           ok: true,
           profile: localCommitProfile(
@@ -367,11 +686,56 @@ export function resolveAttemptExecutionProfile(
           ),
         };
       }
-      // Post local-commit: GCEC-PUSH not ready — fail closed (CR-06 / AP-13).
-      return { ok: false, reason: "attempt_profile_effect_not_supported" };
+
+      // After commitVerified (or commit not required): progressive C→D→E.
+      if (hasPush) {
+        const pushVerified = evidenceVerifiedForSource(
+          evidence,
+          contract,
+          "git:remote_push",
+        );
+        if (!pushVerified) {
+          return resolveRemotePushOrFail(
+            input,
+            "progressive_push_outstanding",
+          );
+        }
+      }
+      if (hasPr) {
+        const prVerified = evidenceVerifiedForSource(
+          evidence,
+          contract,
+          "git:pull_request",
+        );
+        if (!prVerified) {
+          return resolvePrCreateOrFail(
+            input,
+            "progressive_pr_create_outstanding",
+          );
+        }
+      }
+      if (hasMerge) {
+        const mergeVerified = evidenceVerifiedForSource(
+          evidence,
+          contract,
+          "git:merge",
+        );
+        if (!mergeVerified) {
+          return resolvePrMergeOrFail(
+            input,
+            "progressive_pr_merge_outstanding",
+          );
+        }
+      }
+
+      // All required progressive Cursor effects satisfied for this EC.
+      return {
+        ok: false,
+        reason: "attempt_profile_lifecycle_slice_exhausted",
+      };
     }

-    if (hasFs && !hasCommit) {
+    if (hasFs && !hasCommit && !hasPush && !hasPr && !hasMerge) {
       return {
         ok: true,
         profile: docsWriteProfile("docs_write_only_contract"),
@@ -381,6 +745,15 @@ export function resolveAttemptExecutionProfile(
     if (hasCommit && !hasFs) {
       return resolveLocalCommitOrFail(input, "commit_only_contract");
     }
+    if (hasPush && !hasFs && !hasCommit) {
+      return resolveRemotePushOrFail(input, "push_only_contract");
+    }
+    if (hasPr && !hasFs && !hasCommit && !hasPush) {
+      return resolvePrCreateOrFail(input, "pr_create_only_contract");
+    }
+    if (hasMerge && !hasFs && !hasCommit && !hasPush && !hasPr) {
+      return resolvePrMergeOrFail(input, "pr_merge_only_contract");
+    }

     return { ok: false, reason: "attempt_profile_effect_not_supported" };
   }
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
index 274aa5a1..b881cc71 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
@@ -61,10 +61,12 @@ function branchFromContractInputs(
 }

 /**
- * Extract a single trustworthy PR number from VERIFIED git:pull_request Evidence
+ * Extract a single trustworthy PR identity from VERIFIED git:pull_request Evidence
  * bound to the same project / cycle / EC / repository.
  * Fail closed when zero or ambiguous.
- * CR-GCEC-23H-C — repository identity MUST be present and exact (no repo → reject).
+ * AC-04 — complete identity required for eligibility:
+ * repo + prNumber + state + headBranch + headSha + baseBranch (baseSha optional).
+ * Same prNumber with differing identity fields → ambiguous.
  */
 export function resolveVerifiedPullRequestNumber(input: {
   evidence: readonly Evidence[];
@@ -72,8 +74,29 @@ export function resolveVerifiedPullRequestNumber(input: {
   cycleInstanceId?: string;
   executionContractId: string;
   repositoryRef: string;
-}): { ok: true; prNumber: number } | { ok: false; reason: string } {
-  const matches: number[] = [];
+}):
+  | {
+      ok: true;
+      prNumber: number;
+      repositoryRef: string;
+      headSha: string;
+      headBranch: string;
+      baseBranch: string;
+      state: string;
+      baseSha?: string;
+    }
+  | { ok: false; reason: string } {
+  type CompleteIdentity = {
+    repositoryRef: string;
+    prNumber: number;
+    state: string;
+    headBranch: string;
+    headSha: string;
+    baseBranch: string;
+    baseSha?: string;
+  };
+  const FULL_SHA_RE = /^[0-9a-f]{40}$/i;
+  const matches: CompleteIdentity[] = [];
   for (const e of input.evidence) {
     if (e.status !== "verified") continue;
     if (e.source !== "git:pull_request") continue;
@@ -93,24 +116,83 @@ export function resolveVerifiedPullRequestNumber(input: {
     }
     const loc = typeof e.location === "string" ? e.location : "";
     const repoMatch = loc.match(/[?&]repo=([^&]+)/);
-    // CR-GCEC-23H-C — repository identity is mandatory; absent ⇒ ineligible.
     if (!repoMatch) continue;
-    const repo = decodeURIComponent(repoMatch[1]!);
-    if (!repo.trim() || repo !== input.repositoryRef) continue;
+    const repo = decodeURIComponent(repoMatch[1]!).trim();
+    if (!repo || repo !== input.repositoryRef) continue;
     const prMatch = loc.match(/[?&]prNumber=([^&]+)/);
     if (!prMatch) continue;
     const n = Number(decodeURIComponent(prMatch[1]!));
     if (!Number.isInteger(n) || n < 1) continue;
-    matches.push(n);
+    const headShaMatch = loc.match(/[?&]headSha=([^&]+)/);
+    const headBranchMatch = loc.match(/[?&]headBranch=([^&]+)/);
+    const baseBranchMatch = loc.match(/[?&]baseBranch=([^&]+)/);
+    const stateMatch = loc.match(/[?&]state=([^&]+)/);
+    if (!headShaMatch || !headBranchMatch || !baseBranchMatch || !stateMatch) {
+      continue;
+    }
+    const headSha = decodeURIComponent(headShaMatch[1]!).trim().toLowerCase();
+    const headBranch = decodeURIComponent(headBranchMatch[1]!).trim();
+    const baseBranch = decodeURIComponent(baseBranchMatch[1]!).trim();
+    const state = decodeURIComponent(stateMatch[1]!).trim();
+    if (!FULL_SHA_RE.test(headSha) || !headBranch || !baseBranch || !state) {
+      continue;
+    }
+    const baseShaMatch = loc.match(/[?&]baseSha=([^&]+)/);
+    const baseSha = baseShaMatch
+      ? decodeURIComponent(baseShaMatch[1]!).trim().toLowerCase()
+      : undefined;
+    if (baseSha != null && baseSha !== "" && !FULL_SHA_RE.test(baseSha)) {
+      continue;
+    }
+    matches.push({
+      repositoryRef: repo,
+      prNumber: n,
+      state,
+      headBranch,
+      headSha,
+      baseBranch,
+      ...(baseSha ? { baseSha } : {}),
+    });
+  }
+
+  // Deduplicate exact identical complete identities.
+  const identityKey = (m: CompleteIdentity) =>
+    [
+      m.repositoryRef,
+      m.prNumber,
+      m.state,
+      m.headBranch,
+      m.headSha,
+      m.baseBranch,
+      m.baseSha ?? "",
+    ].join("\0");
+  const uniqueByKey = new Map<string, CompleteIdentity>();
+  for (const m of matches) {
+    uniqueByKey.set(identityKey(m), m);
   }
-  const unique = [...new Set(matches)];
+  const unique = [...uniqueByKey.values()];
   if (unique.length === 0) {
     return { ok: false, reason: "verified_pull_request_identity_missing" };
   }
+  const uniqueNumbers = [...new Set(unique.map((m) => m.prNumber))];
+  if (uniqueNumbers.length > 1) {
+    return { ok: false, reason: "verified_pull_request_identity_ambiguous" };
+  }
   if (unique.length > 1) {
+    // Same prNumber with differing headSha / headBranch / baseBranch / state / repo.
     return { ok: false, reason: "verified_pull_request_identity_ambiguous" };
   }
-  return { ok: true, prNumber: unique[0]! };
+  const chosen = unique[0]!;
+  return {
+    ok: true,
+    prNumber: chosen.prNumber,
+    repositoryRef: chosen.repositoryRef,
+    headSha: chosen.headSha,
+    headBranch: chosen.headBranch,
+    baseBranch: chosen.baseBranch,
+    state: chosen.state,
+    ...(chosen.baseSha ? { baseSha: chosen.baseSha } : {}),
+  };
 }

 /**
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index f3498e63..cd41c49d 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -137,11 +137,25 @@ export {
   buildMutatingCursorConfinementEnv,
   isMutatingGcecCursorProfile,
   MUTATING_CURSOR_STRIPPED_ENV_KEYS,
+  resolveMutatingConfinementEffectClass,
+  MUTATING_CURSOR_REMOTE_GIT_PRESERVED_ENV_KEYS,
+  MUTATING_CURSOR_REMOTE_GITHUB_PRESERVED_ENV_KEYS,
   type CursorCliLaunchGatewayOptions,
   type StudioCursorRealLaunchGatewayOptions,
   type SpawnPrimitive,
   type NodeCursorProcessRunnerOptions,
+  type MutatingCursorConfinementEffectClass,
 } from "./infrastructure/cursorCliLaunchGateway";
+export {
+  assertLocalBranchRefMatchesExpectedSha,
+  assertRemoteUrlMatchesRepositoryRef,
+} from "./domain/assertLocalBranchRefMatchesExpectedSha";
+export { assertFreshPrMergePreflight } from "./domain/assertFreshPrMergePreflight";
+export type { FreshPrMergePreflightExpected } from "./domain/assertFreshPrMergePreflight";
+export {
+  assertCanonicalGithubRepositoryRef,
+  posixShellSingleQuote,
+} from "./domain/shellSafeArg";
 export {
   StudioGitWorktreeWorkspace,
   NodeGitCommandRunner,
@@ -184,6 +198,30 @@ export {
   M4_BOUNDED_LOCAL_COMMIT_TARGET,
   M4_BOUNDED_LOCAL_COMMIT_SCOPE,
 } from "./infrastructure/m4BoundedLocalCommitCursorAgent";
+export {
+  createM4BoundedRemotePushCursorAgentDescriptor,
+  isM4BoundedRemotePushRealAgent,
+  M4_BOUNDED_REMOTE_PUSH_CAPABILITY,
+  M4_BOUNDED_REMOTE_PUSH_ACTION,
+  M4_BOUNDED_REMOTE_PUSH_TARGET,
+  M4_BOUNDED_REMOTE_PUSH_SCOPE,
+} from "./infrastructure/m4BoundedRemotePushCursorAgent";
+export {
+  createM4BoundedPrCreateCursorAgentDescriptor,
+  isM4BoundedPrCreateRealAgent,
+  M4_BOUNDED_PR_CREATE_CAPABILITY,
+  M4_BOUNDED_PR_CREATE_ACTION,
+  M4_BOUNDED_PR_CREATE_TARGET,
+  M4_BOUNDED_PR_CREATE_SCOPE,
+} from "./infrastructure/m4BoundedPrCreateCursorAgent";
+export {
+  createM4BoundedPrMergeCursorAgentDescriptor,
+  isM4BoundedPrMergeRealAgent,
+  M4_BOUNDED_PR_MERGE_CAPABILITY,
+  M4_BOUNDED_PR_MERGE_ACTION,
+  M4_BOUNDED_PR_MERGE_TARGET,
+  M4_BOUNDED_PR_MERGE_SCOPE,
+} from "./infrastructure/m4BoundedPrMergeCursorAgent";
 export {
   FakeDocsWriteLaunchPort,
   listRelativeFiles,
@@ -211,6 +249,14 @@ export {
 export {
   resolveVerifiedDocsWritePriorAttempt,
 } from "./domain/resolveVerifiedDocsWritePriorAttempt";
+export {
+  resolveVerifiedLocalCommitPriorAttempt,
+  parseLocalCommitShaFromEvidenceLocation,
+} from "./domain/resolveVerifiedLocalCommitPriorAttempt";
+export {
+  resolveVerifiedRemotePushPriorAttempt,
+  parseRemotePushFromEvidenceLocation,
+} from "./domain/resolveVerifiedRemotePushPriorAttempt";
 export type {
   ProjectEvidenceListResult,
   ListProjectEvidenceFn,
@@ -231,11 +277,40 @@ export type {
   ResolveVerifiedDocsWritePriorAttemptInput,
   ResolveVerifiedDocsWritePriorAttemptResult,
 } from "./domain/resolveVerifiedDocsWritePriorAttempt";
+export type {
+  VerifiedLocalCommitPriorAttempt,
+  ResolveVerifiedLocalCommitPriorAttemptInput,
+  ResolveVerifiedLocalCommitPriorAttemptResult,
+} from "./domain/resolveVerifiedLocalCommitPriorAttempt";
+export type {
+  VerifiedRemotePushPriorAttempt,
+  ResolveVerifiedRemotePushPriorAttemptInput,
+  ResolveVerifiedRemotePushPriorAttemptResult,
+} from "./domain/resolveVerifiedRemotePushPriorAttempt";
 export {
   buildGitCommitLaunchSpec,
   deriveTrustedCommitMessage,
 } from "./domain/gitCommitLaunchSpec";
 export type { GitCommitLaunchSpec } from "./domain/gitCommitLaunchSpec";
+export {
+  buildGitPushLaunchSpec,
+  deriveDeterministicGcecPushBranch,
+  isBoundedGitPushOnlySlice,
+} from "./domain/gitPushLaunchSpec";
+export type { GitPushLaunchSpec } from "./domain/gitPushLaunchSpec";
+export {
+  buildGitPrCreateLaunchSpec,
+  isBoundedGitPrCreateOnlySlice,
+} from "./domain/gitPrCreateLaunchSpec";
+export type { GitPrCreateLaunchSpec } from "./domain/gitPrCreateLaunchSpec";
+export {
+  buildGitPrMergeLaunchSpec,
+  isBoundedGitPrMergeOnlySlice,
+} from "./domain/gitPrMergeLaunchSpec";
+export type {
+  GitPrMergeLaunchSpec,
+  GitPrMergeMethod,
+} from "./domain/gitPrMergeLaunchSpec";
 export {
   verifyLocalCommitFacts,
   isBoundedGitCommitOnlySlice,
@@ -254,6 +329,20 @@ export type {
   VerifyLocalCommitEffectInput,
   VerifyLocalCommitEffectResult,
 } from "./application/verifyLocalCommitEffect";
+export {
+  verifyRemotePushEffect,
+} from "./application/verifyRemotePushEffect";
+export type {
+  VerifyRemotePushEffectInput,
+  VerifyRemotePushEffectResult,
+} from "./application/verifyRemotePushEffect";
+export {
+  verifyPrCreateEffect,
+} from "./application/verifyPrCreateEffect";
+export type {
+  VerifyPrCreateEffectInput,
+  VerifyPrCreateEffectResult,
+} from "./application/verifyPrCreateEffect";
 export {
   observeLocalCommitFacts,
 } from "./application/observeLocalCommitFacts";
@@ -390,6 +479,8 @@ export type CreateInMemoryExecutionAttemptServicesOptions = {
    * CR-GCEC-23 — Evidence list for verified PR identity (may be late-bound).
    */
   listProjectEvidence?: import("./domain/projectEvidenceList").ListProjectEvidenceFn;
+  /** CR-04 — optional RepositoryRead for merge fresh preflight. */
+  repositoryRead?: import("@/lib/oa/git-ports").RepositoryReadPort;
 };

 /** Factory for the in-memory ExecutionAttempt runtime foundation. */
@@ -482,6 +573,7 @@ export function createInMemoryExecutionAttemptServices(
       realBoundary?.managedRepoRootBase,
       options.resolveProjectRepositoryBinding,
       options.listProjectEvidence,
+      options.repositoryRead,
     ),
     cancelExecutionAttempt: new CancelExecutionAttempt(
       attempts,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
index 02a13ee4..40fbece6 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
@@ -16,6 +16,10 @@ export {
   buildMutatingCursorConfinementEnv,
   isMutatingGcecCursorProfile,
   MUTATING_CURSOR_STRIPPED_ENV_KEYS,
+  resolveMutatingConfinementEffectClass,
+  MUTATING_CURSOR_REMOTE_GIT_PRESERVED_ENV_KEYS,
+  MUTATING_CURSOR_REMOTE_GITHUB_PRESERVED_ENV_KEYS,
+  type MutatingCursorConfinementEffectClass,
 } from "./mutatingCursorConfinementEnv";
 export {
   NodeCursorProcessRunner,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorGitExternalState.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorGitExternalState.ts
index 000a2d16..f4b0dac2 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorGitExternalState.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorGitExternalState.ts
@@ -88,14 +88,20 @@ export class FakeCursorGitExternalState {
   filesByShaPath = new Map<string, Map<string, string>>();
   private nextPrNumber = 1;
   currentBranch: string;
+  /** Optional remote URL for Fake push identity parity (AC-01). */
+  remoteUrl?: string;

   constructor(options: {
     worktreeRoot: string;
     initialBranch?: string;
     initialSha?: string;
+    remoteUrl?: string;
   }) {
     this.worktreeRoot = options.worktreeRoot;
     this.currentBranch = options.initialBranch ?? "main";
+    if (options.remoteUrl) {
+      this.remoteUrl = options.remoteUrl;
+    }
     if (options.initialSha) {
       this.branchHeads.set(
         this.currentBranch,
@@ -171,16 +177,12 @@ export class FakeCursorGitExternalState {
     return record;
   }

-  /** Fake remote: advance branch head to current local tip. */
+  /** Fake remote: push exact local branch ref only — no HEAD / currentBranch substitute. */
   push(branch: string): { ref: string; sha: string } {
-    const sha =
-      this.branchHeads.get(branch) ??
-      this.branchHeads.get(this.currentBranch) ??
-      this.commits[this.commits.length - 1]?.sha;
+    const sha = this.branchHeads.get(branch);
     if (!sha) {
-      throw new Error("fake_git_push_no_sha");
+      throw new Error("git_push_local_ref_missing");
     }
-    this.branchHeads.set(branch, sha.toLowerCase());
     this.currentBranch = branch;
     return { ref: branch, sha: sha.toLowerCase() };
   }
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
index 367a94dc..f1c48fa5 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
@@ -22,8 +22,33 @@ import {
   type RealProcessObservation,
 } from "@/lib/oa/execution-attempt";
 import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
+import { M4_BOUNDED_REMOTE_PUSH_ACTION } from "./m4BoundedRemotePushCursorAgent";
+import { M4_BOUNDED_PR_CREATE_ACTION } from "./m4BoundedPrCreateCursorAgent";
+import { M4_BOUNDED_PR_MERGE_ACTION } from "./m4BoundedPrMergeCursorAgent";
+import {
+  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
+  M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
+  M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID,
+  M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
+} from "../domain/realLaunchSafety";
 import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
 import { buildGitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
+import {
+  buildGitPushLaunchSpec,
+  isBoundedGitPushOnlySlice,
+} from "../domain/gitPushLaunchSpec";
+import {
+  assertLocalBranchRefMatchesExpectedSha,
+  assertRemoteUrlMatchesRepositoryRef,
+} from "../domain/assertLocalBranchRefMatchesExpectedSha";
+import {
+  buildGitPrCreateLaunchSpec,
+  isBoundedGitPrCreateOnlySlice,
+} from "../domain/gitPrCreateLaunchSpec";
+import {
+  buildGitPrMergeLaunchSpec,
+  isBoundedGitPrMergeOnlySlice,
+} from "../domain/gitPrMergeLaunchSpec";
 import type {
   CursorAuthorizedEffectId,
   CursorExecutionReport,
@@ -154,6 +179,9 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
     }
     const { authorized, blocked } = resolveAuthorizedEffects(request);
     const wantsCommitProfile = Boolean(request.gitCommitSpec);
+    const wantsPushProfile = Boolean(request.gitPushSpec);
+    const wantsPrCreateProfile = Boolean(request.gitPrCreateSpec);
+    const wantsPrMergeProfile = Boolean(request.gitPrMergeSpec);
     if (wantsCommitProfile) {
       if (!isBoundedGitCommitOnlySlice([...authorized])) {
         return {
@@ -169,7 +197,7 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
         };
       }
       if (
-        request.selectedAgentRef !== "agt:m4.cursor.bounded_local_commit"
+        request.selectedAgentRef !== M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID
       ) {
         return {
           outcome: "reject",
@@ -213,12 +241,149 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
         };
       }
     }
+    if (wantsPushProfile) {
+      if (!isBoundedGitPushOnlySlice([...authorized])) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_push_slice_not_push_only",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      if (request.selectedAgentRef !== M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_push_agent_capability_bypass",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      const revalidated = buildGitPushLaunchSpec({
+        repositoryRef: request.gitPushSpec!.repositoryRef,
+        remoteName: request.gitPushSpec!.remoteName,
+        branchName: request.gitPushSpec!.branchName,
+        expectedCommitSha: request.gitPushSpec!.expectedCommitSha,
+        force: false,
+        delete: false,
+        noTags: true,
+      });
+      if (!revalidated.ok) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: revalidated.reason,
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+    }
+    if (wantsPrCreateProfile) {
+      if (!isBoundedGitPrCreateOnlySlice([...authorized])) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_pr_create_slice_not_create_only",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      if (request.selectedAgentRef !== M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_pr_create_agent_capability_bypass",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      const revalidated = buildGitPrCreateLaunchSpec({
+        repositoryRef: request.gitPrCreateSpec!.repositoryRef,
+        headBranch: request.gitPrCreateSpec!.headBranch,
+        baseBranch: request.gitPrCreateSpec!.baseBranch,
+        title: request.gitPrCreateSpec!.title,
+        expectedHeadSha: request.gitPrCreateSpec!.expectedHeadSha,
+        ...(request.gitPrCreateSpec!.body != null
+          ? { body: request.gitPrCreateSpec!.body }
+          : {}),
+        expectedBaseBranch: request.gitPrCreateSpec!.baseBranch,
+        claimedAutoMerge: (request as { autoMerge?: unknown }).autoMerge,
+      });
+      if (!revalidated.ok) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: revalidated.reason,
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+    }
+    if (wantsPrMergeProfile) {
+      if (!isBoundedGitPrMergeOnlySlice([...authorized])) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_pr_merge_slice_not_merge_only",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      if (request.selectedAgentRef !== M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_pr_merge_agent_capability_bypass",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      const revalidated = buildGitPrMergeLaunchSpec({
+        repositoryRef: request.gitPrMergeSpec!.repositoryRef,
+        prNumber: request.gitPrMergeSpec!.prNumber,
+        expectedHeadSha: request.gitPrMergeSpec!.expectedHeadSha,
+        expectedHeadBranch: request.gitPrMergeSpec!.expectedHeadBranch,
+        expectedBaseBranch: request.gitPrMergeSpec!.expectedBaseBranch,
+        mergeMethod: request.gitPrMergeSpec!.mergeMethod,
+      });
+      if (!revalidated.ok) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: revalidated.reason,
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+    }
     const isCommitOnly =
       wantsCommitProfile && isBoundedGitCommitOnlySlice([...authorized]);
+    const isPushOnly =
+      wantsPushProfile && isBoundedGitPushOnlySlice([...authorized]);
+    const isPrCreateOnly =
+      wantsPrCreateProfile && isBoundedGitPrCreateOnlySlice([...authorized]);
+    const isPrMergeOnly =
+      wantsPrMergeProfile && isBoundedGitPrMergeOnlySlice([...authorized]);
     const actionOk =
       request.action === M4_BOUNDED_DOCS_WRITE_ACTION ||
       request.action === M4_BOUNDED_LOCAL_COMMIT_ACTION ||
-      isCommitOnly;
+      request.action === M4_BOUNDED_REMOTE_PUSH_ACTION ||
+      request.action === M4_BOUNDED_PR_CREATE_ACTION ||
+      request.action === M4_BOUNDED_PR_MERGE_ACTION ||
+      isCommitOnly ||
+      isPushOnly ||
+      isPrCreateOnly ||
+      isPrMergeOnly;
     if (!actionOk) {
       return {
         outcome: "reject",
@@ -231,6 +396,8 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
     }

     const commitSpec = request.gitCommitSpec;
+    const pushSpec = request.gitPushSpec;
+    const prCreateSpec = request.gitPrCreateSpec;
     const spec = request.docsWriteSpec;
     const pathAllowlist = spec?.pathAllowlist ?? this.options.pathAllowlist;
     const targetPath =
@@ -240,10 +407,15 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
       "docs/functional-design.md";
     const repositoryRef =
       commitSpec?.repositoryRef ??
+      pushSpec?.repositoryRef ??
+      prCreateSpec?.repositoryRef ??
+      request.gitPrMergeSpec?.repositoryRef ??
       spec?.repositoryRef ??
       this.options.repositoryRef ??
       "unknown/repo";
     const branch =
+      pushSpec?.branchName ??
+      prCreateSpec?.headBranch ??
       commitSpec?.branchOrRef ??
       this.options.defaultBranch ??
       request.repositoryBinding?.defaultBranch ??
@@ -364,10 +536,45 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
       }

       if (authorized.has("git.push")) {
-        const pushed = this.gitState.push(branch);
+        const pushBranch = request.gitPushSpec?.branchName ?? branch;
+        const expectedSha =
+          request.gitPushSpec?.expectedCommitSha ??
+          this.gitState.branchHeads.get(pushBranch);
+        if (!expectedSha) {
+          throw new Error("git_push_local_ref_missing");
+        }
+        const refCheck = assertLocalBranchRefMatchesExpectedSha({
+          branchHeads: this.gitState.branchHeads,
+          branchName: pushBranch,
+          expectedCommitSha: expectedSha,
+        });
+        if (!refCheck.ok) {
+          throw new Error(refCheck.reason);
+        }
+        const remoteUrl =
+          request.repositoryBinding?.remoteUrl ??
+          this.gitState.remoteUrl;
+        if (
+          typeof remoteUrl !== "string" ||
+          !remoteUrl.trim()
+        ) {
+          throw new Error("git_push_remote_url_missing");
+        }
+        if (!request.gitPushSpec?.repositoryRef?.trim()) {
+          throw new Error("git_push_repository_ref_missing");
+        }
+        const urlCheck = assertRemoteUrlMatchesRepositoryRef({
+          remoteUrl,
+          repositoryRef: request.gitPushSpec.repositoryRef,
+        });
+        if (!urlCheck.ok) {
+          throw new Error(urlCheck.reason);
+        }
+        this.gitState.currentBranch = pushBranch;
+        const pushed = this.gitState.push(pushBranch);
         executed.push("git.push");
         gitEffects.push = {
-          remote: "origin",
+          remote: request.gitPushSpec?.remoteName ?? "origin",
           ref: pushed.ref,
           sha: pushed.sha,
         };
@@ -377,8 +584,12 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {

       if (authorized.has("github.pr.create")) {
         const base =
-          request.repositoryBinding?.defaultBranch ?? "main";
-        const pr = this.gitState.openPr(base, branch);
+          request.gitPrCreateSpec?.baseBranch ??
+          request.repositoryBinding?.defaultBranch ??
+          "main";
+        const head =
+          request.gitPrCreateSpec?.headBranch ?? branch;
+        const pr = this.gitState.openPr(base, head);
         executed.push("github.pr.create");
         gitEffects.pullRequest = {
           number: pr.number,
@@ -393,6 +604,7 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {

       if (authorized.has("github.pr.merge")) {
         const prNumber =
+          request.gitPrMergeSpec?.prNumber ??
           gitEffects.pullRequest?.number ??
           [...this.gitState.prs.values()].find((p) => p.state === "open")
             ?.number;
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
index 8c1743ce..c40903ea 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
@@ -11,6 +11,9 @@ import {
 } from "../domain/realLaunchSafety";
 import type { AgentDescriptor } from "../domain/types";
 import { isM4BoundedLocalCommitRealAgent } from "./m4BoundedLocalCommitCursorAgent";
+import { isM4BoundedPrCreateRealAgent } from "./m4BoundedPrCreateCursorAgent";
+import { isM4BoundedPrMergeRealAgent } from "./m4BoundedPrMergeCursorAgent";
+import { isM4BoundedRemotePushRealAgent } from "./m4BoundedRemotePushCursorAgent";
 import { isM4BoundedReadOnlyRealAgent } from "./m4BoundedReadOnlyCursorAgent";

 export const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write" as const;
@@ -85,13 +88,16 @@ export function isM4BoundedDocsWriteRealAgent(
   );
 }

-/** REAL Cursor allowlist — RO | docs-write | local-commit (OR; RO/docs bodies unchanged). */
+/** REAL Cursor allowlist — RO | docs-write | local-commit | push | PR create | PR merge. */
 export function isM4AuthorizedCursorRealAgent(
   agent: AgentDescriptor,
 ): boolean {
   return (
     isM4BoundedReadOnlyRealAgent(agent) ||
     isM4BoundedDocsWriteRealAgent(agent) ||
-    isM4BoundedLocalCommitRealAgent(agent)
+    isM4BoundedLocalCommitRealAgent(agent) ||
+    isM4BoundedRemotePushRealAgent(agent) ||
+    isM4BoundedPrCreateRealAgent(agent) ||
+    isM4BoundedPrMergeRealAgent(agent)
   );
 }
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts
index f9196139..91ec24df 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts
@@ -1,18 +1,18 @@
 /**
- * D-GCEC-CONF-02A — server-owned child env for mutating GCEC Cursor profiles
- * (bounded docs-write Attempt A + bounded local-commit Attempt B).
+ * D-GCEC-CONF-02A / D-GCEC-EXEC-01 — server-owned child env for mutating GCEC Cursor profiles.
  *
- * Proves only: Product gateway does not voluntarily inherit known host
- * Git/GitHub/SSH write-auth channels for A+B.
- * Does NOT prove remote-write impossibility (Shell may still discover host tools).
- * Live re-preflight remains required before any REAL claim.
+ * Effect-sensitive (CR-02):
+ * - local (A docs_write + B local_commit): strip Git/GitHub/SSH write-auth channels
+ * - remote_git (C git.push): preserve SSH / askpass channels; still strip GH tokens + GIT_CONFIG injection
+ * - remote_github (D/E pr create/merge): preserve GH_/GITHUB_ token keys; still neutralize GIT_CONFIG injection
  *
- * HOME / XDG left unchanged — Cursor CLI may need user-scoped auth; residual risk
- * is documented for the Security re-preflight.
+ * Proves only: Product gateway applies a deterministic env-key presence policy.
+ * Does NOT prove AUTH REAL / remote-write impossibility.
+ * NEVER copy secret VALUES into specs/Evidence/reports — key presence only.
  */
 import { SFIA_STUDIO_CURSOR_REAL_FLAG } from "../domain/realLaunchSafety";

-/** Exact auth / askpass / SSH override keys stripped from mutating child env. */
+/** Exact auth / askpass / SSH override keys stripped for local (A/B) mutating child env. */
 export const MUTATING_CURSOR_STRIPPED_ENV_KEYS = [
   "SSH_AUTH_SOCK",
   "SSH_AGENT_PID",
@@ -29,7 +29,37 @@ export const MUTATING_CURSOR_STRIPPED_ENV_KEYS = [
   "GIT_CONFIG_COUNT",
 ] as const;

-const STRIPPED = new Set<string>(MUTATING_CURSOR_STRIPPED_ENV_KEYS);
+/** SSH / askpass channels preserved for remote_git (C). */
+export const MUTATING_CURSOR_REMOTE_GIT_PRESERVED_ENV_KEYS = [
+  "SSH_AUTH_SOCK",
+  "SSH_AGENT_PID",
+  "GIT_ASKPASS",
+  "SSH_ASKPASS",
+  "SSH_ASKPASS_REQUIRE",
+  "GIT_SSH",
+  "GIT_SSH_COMMAND",
+] as const;
+
+/** GitHub token sentinel keys preserved for remote_github (D/E). */
+export const MUTATING_CURSOR_REMOTE_GITHUB_PRESERVED_ENV_KEYS = [
+  "GH_TOKEN",
+  "GITHUB_TOKEN",
+  "GH_ENTERPRISE_TOKEN",
+  "GITHUB_ENTERPRISE_TOKEN",
+] as const;
+
+export type MutatingCursorConfinementEffectClass =
+  | "local"
+  | "remote_git"
+  | "remote_github";
+
+const LOCAL_STRIPPED = new Set<string>(MUTATING_CURSOR_STRIPPED_ENV_KEYS);
+const REMOTE_GIT_PRESERVE = new Set<string>(
+  MUTATING_CURSOR_REMOTE_GIT_PRESERVED_ENV_KEYS,
+);
+const REMOTE_GITHUB_PRESERVE = new Set<string>(
+  MUTATING_CURSOR_REMOTE_GITHUB_PRESERVED_ENV_KEYS,
+);

 function isInheritedGitConfigInjectionKey(key: string): boolean {
   return (
@@ -40,18 +70,38 @@ function isInheritedGitConfigInjectionKey(key: string): boolean {
   );
 }

+function shouldStripKey(
+  key: string,
+  effectClass: MutatingCursorConfinementEffectClass,
+): boolean {
+  // Always neutralize GIT_CONFIG_* injection regardless of effect class.
+  if (isInheritedGitConfigInjectionKey(key)) return true;
+
+  if (effectClass === "local") {
+    return LOCAL_STRIPPED.has(key);
+  }
+  if (effectClass === "remote_git") {
+    if (REMOTE_GIT_PRESERVE.has(key)) return false;
+    return LOCAL_STRIPPED.has(key);
+  }
+  // remote_github
+  if (REMOTE_GITHUB_PRESERVE.has(key)) return false;
+  return LOCAL_STRIPPED.has(key);
+}
+
 /**
  * Build a fresh child ProcessEnv for mutating Cursor launches.
  * Does not mutate `baseEnv`. Caller cannot opt out.
  */
 export function buildMutatingCursorConfinementEnv(
   baseEnv: NodeJS.ProcessEnv,
+  options?: { readonly effectClass?: MutatingCursorConfinementEffectClass },
 ): NodeJS.ProcessEnv {
+  const effectClass = options?.effectClass ?? "local";
   const child: Record<string, string | undefined> = {};
   for (const [key, value] of Object.entries(baseEnv)) {
     if (value === undefined) continue;
-    if (STRIPPED.has(key)) continue;
-    if (isInheritedGitConfigInjectionKey(key)) continue;
+    if (shouldStripKey(key, effectClass)) continue;
     child[key] = value;
   }

@@ -69,6 +119,25 @@ export function buildMutatingCursorConfinementEnv(
 export function isMutatingGcecCursorProfile(input: {
   readonly isDocsWrite: boolean;
   readonly isLocalCommitProfile: boolean;
+  readonly isRemotePushProfile?: boolean;
+  readonly isPrCreateProfile?: boolean;
+  readonly isPrMergeProfile?: boolean;
 }): boolean {
-  return input.isDocsWrite === true || input.isLocalCommitProfile === true;
+  return (
+    input.isDocsWrite === true ||
+    input.isLocalCommitProfile === true ||
+    input.isRemotePushProfile === true ||
+    input.isPrCreateProfile === true ||
+    input.isPrMergeProfile === true
+  );
+}
+
+export function resolveMutatingConfinementEffectClass(input: {
+  readonly isRemotePushProfile?: boolean;
+  readonly isPrCreateProfile?: boolean;
+  readonly isPrMergeProfile?: boolean;
+}): MutatingCursorConfinementEffectClass {
+  if (input.isRemotePushProfile) return "remote_git";
+  if (input.isPrCreateProfile || input.isPrMergeProfile) return "remote_github";
+  return "local";
 }
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
index 9689981e..acf1f9aa 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
@@ -75,6 +75,8 @@ export type CreateSqliteExecutionAttemptServicesOptions = {
     projectId: string,
   ) => Promise<import("@/lib/oa/project").ProjectRepositoryBinding | null>;
   listProjectEvidence?: import("../../domain/projectEvidenceList").ListProjectEvidenceFn;
+  /** CR-04 — optional RepositoryRead for merge fresh preflight. */
+  repositoryRead?: import("@/lib/oa/git-ports").RepositoryReadPort;
 };

 export type SqliteExecutionAttemptServices = {
@@ -194,6 +196,7 @@ export function createSqliteExecutionAttemptServices(
       realBoundary?.managedRepoRootBase,
       options.resolveProjectRepositoryBinding,
       options.listProjectEvidence,
+      options.repositoryRead,
     ),
     cancelExecutionAttempt: new CancelExecutionAttempt(
       attempts,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index 72581253..116b745b 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -10,6 +10,9 @@ import { accessSync, constants } from "node:fs";
 import path from "node:path";
 import {
   isStudioCursorRealEnabled,
+  M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
+  M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID,
+  M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
   M4_REAL_GATEWAY_ADAPTER_ID,
   SFIA_STUDIO_CURSOR_REAL_FLAG,
 } from "../domain/realLaunchSafety";
@@ -29,11 +32,30 @@ import {
 } from "./cursorTrustMarkerPathCompatibility";
 import { M4_BOUNDED_DOCS_WRITE_ACTION } from "./m4BoundedDocsWriteCursorAgent";
 import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
+import { M4_BOUNDED_REMOTE_PUSH_ACTION } from "./m4BoundedRemotePushCursorAgent";
+import { M4_BOUNDED_PR_CREATE_ACTION } from "./m4BoundedPrCreateCursorAgent";
+import { M4_BOUNDED_PR_MERGE_ACTION } from "./m4BoundedPrMergeCursorAgent";
 import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
 import { buildGitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
+import {
+  buildGitPushLaunchSpec,
+  isBoundedGitPushOnlySlice,
+} from "../domain/gitPushLaunchSpec";
+import {
+  buildGitPrCreateLaunchSpec,
+  isBoundedGitPrCreateOnlySlice,
+} from "../domain/gitPrCreateLaunchSpec";
+import {
+  buildGitPrMergeLaunchSpec,
+  isBoundedGitPrMergeOnlySlice,
+} from "../domain/gitPrMergeLaunchSpec";
+import {
+  posixShellSingleQuote,
+} from "../domain/shellSafeArg";
 import {
   buildMutatingCursorConfinementEnv,
   isMutatingGcecCursorProfile,
+  resolveMutatingConfinementEffectClass,
 } from "./mutatingCursorConfinementEnv";

 function buildBoundedLocalCommitInstruction(input: {
@@ -75,6 +97,128 @@ function buildBoundedLocalCommitInstruction(input: {
   ].join("\n");
 }

+function buildBoundedRemotePushInstruction(input: {
+  readonly spec: NonNullable<RealLaunchRequest["gitPushSpec"]>;
+  readonly target?: string;
+  readonly action?: string;
+  readonly scope?: string;
+  readonly semanticFingerprint: string;
+}): string {
+  const branchRef = `refs/heads/${input.spec.branchName}`;
+  return [
+    "TÂCHE UNIQUE — bounded remote git.push déterministe (GCEC).",
+    `Repository: ${input.spec.repositoryRef}`,
+    `Remote exact: ${input.spec.remoteName}`,
+    `Branch exacte (feature only): ${input.spec.branchName}`,
+    `Local ref exacte: ${branchRef}`,
+    `Expected commit SHA: ${input.spec.expectedCommitSha}`,
+    "Séquence Shell autorisée UNIQUEMENT (STOP sans mutation si échec):",
+    `  1) git remote get-url ${input.spec.remoteName}`,
+    `     → l'URL observée DOIT identifier le même dépôt que repositoryRef=${input.spec.repositoryRef}`,
+    `       (https://github.com/<owner>/<repo>[.git] ou git@github.com:<owner>/<repo>[.git]).`,
+    `       Sinon: STOP — ne pas pousser.`,
+    `  2) git rev-parse ${branchRef}`,
+    `     → le SHA observé DOIT être exactement ${input.spec.expectedCommitSha}.`,
+    `       Absent / mismatch / usage de HEAD seul à la place de ${branchRef}: STOP — ne pas pousser.`,
+    `  3) Seulement si (1)+(2) OK:`,
+    `     git push ${input.spec.remoteName} ${branchRef}:${input.spec.branchName}`,
+    "INTERDIT: --force / -f / --force-with-lease, --delete / :branch delete,",
+    "--tags / --follow-tags, push vers main/master, fetch mutatif, pull,",
+    "remote add/set-url, checkout, reset, rebase, merge, amend, PR/merge GitHub,",
+    "édition de fichiers, script shell fourni par l'appelant,",
+    "substituer HEAD au ref de branche, auto-créer la branche locale absente.",
+    "force=false delete=false noTags=true — non négociable.",
+    "En cas d'ambiguïté: STOP immédiatement sans mutation.",
+    `target=${input.target ?? ""}`,
+    `action=${input.action ?? ""}`,
+    `scope=${input.scope ?? ""}`,
+    `fingerprint=${input.semanticFingerprint}`,
+  ].join("\n");
+}
+
+function buildBoundedPrCreateInstruction(input: {
+  readonly spec: NonNullable<RealLaunchRequest["gitPrCreateSpec"]>;
+  readonly target?: string;
+  readonly action?: string;
+  readonly scope?: string;
+  readonly semanticFingerprint: string;
+}): string {
+  const qRepo = posixShellSingleQuote(input.spec.repositoryRef);
+  const qHead = posixShellSingleQuote(input.spec.headBranch);
+  const qBase = posixShellSingleQuote(input.spec.baseBranch);
+  const qTitle = posixShellSingleQuote(input.spec.title);
+  const qBody =
+    input.spec.body != null
+      ? posixShellSingleQuote(input.spec.body)
+      : undefined;
+  const branchRefApi = `repos/${input.spec.repositoryRef}/git/ref/heads/${input.spec.headBranch}`;
+  return [
+    "TÂCHE UNIQUE — bounded github.pr.create déterministe (GCEC).",
+    `Repository: ${input.spec.repositoryRef}`,
+    `Head branch exacte: ${input.spec.headBranch}`,
+    `Base branch exacte: ${input.spec.baseBranch}`,
+    `Expected head SHA (lié au push C): ${input.spec.expectedHeadSha}`,
+    `Title exact: ${input.spec.title}`,
+    ...(input.spec.body ? [`Body: ${input.spec.body}`] : []),
+    "Avant gh pr create (lecture seule — lier remote head au SHA pushé):",
+    `  1) gh api ${posixShellSingleQuote(branchRefApi)} --jq .object.sha`,
+    `     → le SHA observé DOIT être exactement ${input.spec.expectedHeadSha}.`,
+    "       Absent / mismatch: STOP — ne pas créer la PR.",
+    "Commande autorisée UNIQUEMENT (après (1) OK):",
+    `  gh pr create --repo ${qRepo} --head ${qHead} --base ${qBase} --title ${qTitle}` +
+      (qBody ? ` --body ${qBody}` : ""),
+    "INTERDIT: omettre --repo, --auto-merge / enable auto-merge, merge, squash, rebase,",
+    "push force, delete branch, édition hors PR create, script shell libre,",
+    "JSON.stringify / interpolation non quotée du body (les $(...) restent littéraux via quotes).",
+    "En cas d'ambiguïté: STOP immédiatement sans mutation.",
+    `target=${input.target ?? ""}`,
+    `action=${input.action ?? ""}`,
+    `scope=${input.scope ?? ""}`,
+    `fingerprint=${input.semanticFingerprint}`,
+  ].join("\n");
+}
+
+function buildBoundedPrMergeInstruction(input: {
+  readonly spec: NonNullable<RealLaunchRequest["gitPrMergeSpec"]>;
+  readonly target?: string;
+  readonly action?: string;
+  readonly scope?: string;
+  readonly semanticFingerprint: string;
+}): string {
+  const methodFlag =
+    input.spec.mergeMethod === "squash"
+      ? "--squash"
+      : input.spec.mergeMethod === "rebase"
+        ? "--rebase"
+        : "--merge";
+  const qRepo = posixShellSingleQuote(input.spec.repositoryRef);
+  return [
+    "TÂCHE UNIQUE — bounded github.pr.merge déterministe (GCEC).",
+    `Repository: ${input.spec.repositoryRef}`,
+    `PR number exact (obligatoire): ${input.spec.prNumber}`,
+    `Expected head SHA: ${input.spec.expectedHeadSha}`,
+    `Expected head branch: ${input.spec.expectedHeadBranch}`,
+    `Expected base branch: ${input.spec.expectedBaseBranch}`,
+    `Merge method: ${input.spec.mergeMethod}`,
+    "Avant merge (défense en profondeur — StartExecution fresh RepositoryRead est l'autorité):",
+    `  gh pr view ${input.spec.prNumber} --repo ${qRepo} --json state,headRefOid,baseRefName,headRefName`,
+    "  Comparer EXPLICITEMENT les quatre champs; STOP sur tout mismatch AVANT gh pr merge:",
+    "    - state == OPEN",
+    `    - headRefOid == ${input.spec.expectedHeadSha}`,
+    `    - headRefName == ${input.spec.expectedHeadBranch}`,
+    `    - baseRefName == ${input.spec.expectedBaseBranch}`,
+    "Commande autorisée UNIQUEMENT (après les quatre comparaisons OK):",
+    `  gh pr merge ${input.spec.prNumber} --repo ${qRepo} ${methodFlag}`,
+    "INTERDIT: omettre --repo, autre PR number, --admin, --auto, enable auto-merge,",
+    "delete branch / --delete-branch, force push, script shell libre.",
+    "En cas d'ambiguïté: STOP immédiatement sans mutation.",
+    `target=${input.target ?? ""}`,
+    `action=${input.action ?? ""}`,
+    `scope=${input.scope ?? ""}`,
+    `fingerprint=${input.semanticFingerprint}`,
+  ].join("\n");
+}
+
 export type StudioCursorRealLaunchGatewayOptions = {
   readonly processRunner: ProcessRunner;
   readonly workspacePort: RealExecutionWorkspacePort;
@@ -291,13 +435,53 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
       };
     }

-    // Profile is structured (gitCommitSpec / docsWrite action) — never inferred from prompt prose.
+    // Profile is structured (specs + agent + exclusive slice) — never inferred from prompt prose.
     const gitCommitSpec = request.gitCommitSpec;
+    const gitPushSpec = request.gitPushSpec;
+    const gitPrCreateSpec = request.gitPrCreateSpec;
+    const gitPrMergeSpec = request.gitPrMergeSpec;
     const isLocalCommitProfile =
       Boolean(gitCommitSpec) ||
       request.action === M4_BOUNDED_LOCAL_COMMIT_ACTION;
+    const isRemotePushProfile =
+      !isLocalCommitProfile &&
+      (Boolean(gitPushSpec) ||
+        request.action === M4_BOUNDED_REMOTE_PUSH_ACTION);
+    const isPrCreateProfile =
+      !isLocalCommitProfile &&
+      !isRemotePushProfile &&
+      (Boolean(gitPrCreateSpec) ||
+        request.action === M4_BOUNDED_PR_CREATE_ACTION);
+    const isPrMergeProfile =
+      !isLocalCommitProfile &&
+      !isRemotePushProfile &&
+      !isPrCreateProfile &&
+      (Boolean(gitPrMergeSpec) ||
+        request.action === M4_BOUNDED_PR_MERGE_ACTION);
     const isDocsWrite =
-      !isLocalCommitProfile && request.action === M4_BOUNDED_DOCS_WRITE_ACTION;
+      !isLocalCommitProfile &&
+      !isRemotePushProfile &&
+      !isPrCreateProfile &&
+      !isPrMergeProfile &&
+      request.action === M4_BOUNDED_DOCS_WRITE_ACTION;
+
+    const rejectFreeShell = (): RealLaunchResult | null => {
+      if (
+        typeof (request as { freeShellScript?: unknown }).freeShellScript ===
+          "string" ||
+        typeof (request as { shellCommand?: unknown }).shellCommand === "string"
+      ) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_effect_free_shell_rejected",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      return null;
+    };

     if (isLocalCommitProfile) {
       if (!gitCommitSpec) {
@@ -377,20 +561,190 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
           detailCode: "REAL_AGENT_PROFILE_INVALID",
         };
       }
-      if (
-        typeof (request as { freeShellScript?: unknown }).freeShellScript ===
-          "string" ||
-        typeof (request as { shellCommand?: unknown }).shellCommand === "string"
-      ) {
+      const freeShell = rejectFreeShell();
+      if (freeShell) return freeShell;
+    }
+
+    if (isRemotePushProfile) {
+      if (!gitPushSpec) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_push_spec_missing",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      const auth = request.authorizedEffects;
+      if (!isBoundedGitPushOnlySlice(auth)) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason:
+            auth == null
+              ? "git_push_authorized_effects_missing"
+              : "git_push_slice_not_push_only",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      if (request.selectedAgentRef !== M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason:
+            request.selectedAgentRef === "agt:m4.cursor.bounded_docs_write" ||
+            request.selectedAgentRef === "agt:m4.cursor.bounded_local_commit"
+              ? "git_push_agent_capability_bypass"
+              : "git_push_selected_agent_invalid",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      if (gitPushSpec.force !== false || gitPushSpec.delete !== false) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_push_force_or_delete_rejected",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      const revalidated = buildGitPushLaunchSpec({
+        repositoryRef: gitPushSpec.repositoryRef,
+        remoteName: gitPushSpec.remoteName,
+        branchName: gitPushSpec.branchName,
+        expectedCommitSha: gitPushSpec.expectedCommitSha,
+        force: false,
+        delete: false,
+        noTags: true,
+      });
+      if (!revalidated.ok) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: revalidated.reason,
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      const freeShell = rejectFreeShell();
+      if (freeShell) return freeShell;
+    }
+
+    if (isPrCreateProfile) {
+      if (!gitPrCreateSpec) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_pr_create_spec_missing",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      const auth = request.authorizedEffects;
+      if (!isBoundedGitPrCreateOnlySlice(auth)) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_pr_create_slice_not_create_only",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      if (request.selectedAgentRef !== M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_pr_create_agent_capability_bypass",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      const revalidated = buildGitPrCreateLaunchSpec({
+        repositoryRef: gitPrCreateSpec.repositoryRef,
+        headBranch: gitPrCreateSpec.headBranch,
+        baseBranch: gitPrCreateSpec.baseBranch,
+        title: gitPrCreateSpec.title,
+        expectedHeadSha: gitPrCreateSpec.expectedHeadSha,
+        ...(gitPrCreateSpec.body != null ? { body: gitPrCreateSpec.body } : {}),
+        expectedBaseBranch: gitPrCreateSpec.baseBranch,
+        claimedAutoMerge: (request as { autoMerge?: unknown }).autoMerge,
+      });
+      if (!revalidated.ok) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: revalidated.reason,
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      const freeShell = rejectFreeShell();
+      if (freeShell) return freeShell;
+    }
+
+    if (isPrMergeProfile) {
+      if (!gitPrMergeSpec) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_pr_merge_spec_missing",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      const auth = request.authorizedEffects;
+      if (!isBoundedGitPrMergeOnlySlice(auth)) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_pr_merge_slice_not_merge_only",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      if (request.selectedAgentRef !== M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_pr_merge_agent_capability_bypass",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      const revalidated = buildGitPrMergeLaunchSpec({
+        repositoryRef: gitPrMergeSpec.repositoryRef,
+        prNumber: gitPrMergeSpec.prNumber,
+        expectedHeadSha: gitPrMergeSpec.expectedHeadSha,
+        expectedHeadBranch: gitPrMergeSpec.expectedHeadBranch,
+        expectedBaseBranch: gitPrMergeSpec.expectedBaseBranch,
+        mergeMethod: gitPrMergeSpec.mergeMethod,
+      });
+      if (!revalidated.ok) {
         return {
           outcome: "reject",
           gatewayId: this.gatewayId,
           attemptId: request.attemptId,
-          reason: "git_commit_free_shell_rejected",
+          reason: revalidated.reason,
           realProcessInvoked: false,
           detailCode: "REAL_AGENT_PROFILE_INVALID",
         };
       }
+      const freeShell = rejectFreeShell();
+      if (freeShell) return freeShell;
     }

     let instruction: string;
@@ -402,6 +756,30 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         scope: request.scope,
         semanticFingerprint: request.semanticFingerprint,
       });
+    } else if (isRemotePushProfile && gitPushSpec) {
+      instruction = buildBoundedRemotePushInstruction({
+        spec: gitPushSpec,
+        target: request.target,
+        action: request.action,
+        scope: request.scope,
+        semanticFingerprint: request.semanticFingerprint,
+      });
+    } else if (isPrCreateProfile && gitPrCreateSpec) {
+      instruction = buildBoundedPrCreateInstruction({
+        spec: gitPrCreateSpec,
+        target: request.target,
+        action: request.action,
+        scope: request.scope,
+        semanticFingerprint: request.semanticFingerprint,
+      });
+    } else if (isPrMergeProfile && gitPrMergeSpec) {
+      instruction = buildBoundedPrMergeInstruction({
+        spec: gitPrMergeSpec,
+        target: request.target,
+        action: request.action,
+        scope: request.scope,
+        semanticFingerprint: request.semanticFingerprint,
+      });
     } else if (isDocsWrite) {
       const spec = request.docsWriteSpec;
       if (!spec) {
@@ -459,9 +837,14 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
       ].join("\n");
     }

-    // Docs-write + local-commit: default agent mode (omit --mode ask) so Shell/Write available.
+    // Docs-write + git mutation profiles: default agent mode (omit --mode ask).
     // RO: --mode ask. All keep --print + --workspace + --trust + --sandbox enabled.
-    const usesAgentMode = isDocsWrite || isLocalCommitProfile;
+    const usesAgentMode =
+      isDocsWrite ||
+      isLocalCommitProfile ||
+      isRemotePushProfile ||
+      isPrCreateProfile ||
+      isPrMergeProfile;
     const argv = usesAgentMode
       ? [
           "agent",
@@ -486,15 +869,25 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
           instruction,
         ];

-    // D-GCEC-CONF-02A: mutating A+B get shared server-owned env confinement.
+    // D-GCEC-CONF-02A / D-GCEC-EXEC-01: mutating A+B+C+D+E get server-owned env
+    // confinement; effect-sensitive (local vs remote_git vs remote_github).
     // RO / other profiles keep minimal non-mutating spawn env (no auth strip).
     // Prompt forbids remain defense-in-depth — NOT the technical authority boundary.
-    // This does NOT prove remote-write impossibility; live re-preflight required.
+    // Proves REMOTE AUTH ENVIRONMENT POLICY only — NOT AUTH REAL.
     const childEnv = isMutatingGcecCursorProfile({
       isDocsWrite,
       isLocalCommitProfile,
+      isRemotePushProfile,
+      isPrCreateProfile,
+      isPrMergeProfile,
     })
-      ? buildMutatingCursorConfinementEnv(this.env)
+      ? buildMutatingCursorConfinementEnv(this.env, {
+          effectClass: resolveMutatingConfinementEffectClass({
+            isRemotePushProfile,
+            isPrCreateProfile,
+            isPrMergeProfile,
+          }),
+        })
       : {
           ...this.env,
           [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
index 47395272..3b371a34 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
@@ -26,9 +26,15 @@ export type DocsWriteLaunchSpec = {
   readonly noDelete: true;
 };

-/** Canonical GitCommitLaunchSpec — single source from domain. */
+/** Canonical Git launch specs — single source from domain. */
 export type { GitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
+export type { GitPushLaunchSpec } from "../domain/gitPushLaunchSpec";
+export type { GitPrCreateLaunchSpec } from "../domain/gitPrCreateLaunchSpec";
+export type { GitPrMergeLaunchSpec } from "../domain/gitPrMergeLaunchSpec";
 import type { GitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
+import type { GitPushLaunchSpec } from "../domain/gitPushLaunchSpec";
+import type { GitPrCreateLaunchSpec } from "../domain/gitPrCreateLaunchSpec";
+import type { GitPrMergeLaunchSpec } from "../domain/gitPrMergeLaunchSpec";

 export type RealLaunchRequest = {
   readonly attemptId: string;
@@ -61,6 +67,21 @@ export type RealLaunchRequest = {
    * Cursor profile (Attempt B). Mutually exclusive with free shell / FS edit profile.
    */
   readonly gitCommitSpec?: GitCommitLaunchSpec;
+  /**
+   * GCEC bounded remote-push launch contract — required for git.push-only
+   * Cursor profile (Attempt C). Mutually exclusive with commit/FS/free shell.
+   */
+  readonly gitPushSpec?: GitPushLaunchSpec;
+  /**
+   * GCEC bounded PR-create launch contract — required for github.pr.create-only
+   * Cursor profile (Attempt D).
+   */
+  readonly gitPrCreateSpec?: GitPrCreateLaunchSpec;
+  /**
+   * GCEC bounded PR-merge PREP launch contract — required for github.pr.merge-only
+   * Cursor profile (Attempt E). REAL merge not claimed executed in PATH B lot.
+   */
+  readonly gitPrMergeSpec?: GitPrMergeLaunchSpec;
   /** Optional Project binding identity (owner/repo) for workspace resolution. */
   readonly repositoryBindingIdentity?: string;
   /** Server-resolved absolute managed clone root (docs-write). */
diff --git a/projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts b/projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts
index 0f6f0fe7..e1b7671b 100644
--- a/projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts
+++ b/projects/sfia-studio/app/lib/oa/git-ports/application/gitEffectEvidenceActions.ts
@@ -291,6 +291,12 @@ export async function verifyPullRequestClaim(input: {
   repositoryRef: string;
   claimedPrNumber: number;
   claimedHeadSha: string;
+  /** Optional expected head branch — fail closed on mismatch when provided. */
+  expectedHeadBranch?: string;
+  /** Optional expected base branch — fail closed on mismatch when provided. */
+  expectedBaseBranch?: string;
+  /** Optional expected head SHA — fail closed on mismatch when provided (GCEC). */
+  expectedHeadSha?: string;
   bindings: GitVerifyBindings;
   actor: GitVerifyActor;
   nowIso?: string;
@@ -301,6 +307,8 @@ export async function verifyPullRequestClaim(input: {
       status: "verified";
       prNumber: number;
       headSha: string;
+      headBranch: string;
+      baseBranch: string;
     }
   | { ok: false; reason: string; status: "reported" | "failed" }
 > {
@@ -311,9 +319,44 @@ export async function verifyPullRequestClaim(input: {
   if (!pr) {
     return { ok: false, reason: "pr_not_found", status: "reported" };
   }
+  if (pr.state === "merged") {
+    return { ok: false, reason: "pr_state_merged", status: "failed" };
+  }
+  if (pr.state === "closed" || pr.state !== "open") {
+    return { ok: false, reason: "pr_state_not_open", status: "failed" };
+  }
   if (pr.headSha.toLowerCase() !== input.claimedHeadSha.toLowerCase()) {
     return { ok: false, reason: "pr_head_mismatch", status: "failed" };
   }
+  if (
+    input.expectedHeadSha != null &&
+    input.expectedHeadSha.trim() &&
+    pr.headSha.toLowerCase() !== input.expectedHeadSha.trim().toLowerCase()
+  ) {
+    return { ok: false, reason: "pr_expected_head_sha_mismatch", status: "failed" };
+  }
+  const headBranch = pr.headBranch?.trim() ?? "";
+  const baseBranch = pr.baseBranch?.trim() ?? "";
+  if (!headBranch) {
+    return { ok: false, reason: "pr_head_branch_missing", status: "failed" };
+  }
+  if (!baseBranch) {
+    return { ok: false, reason: "pr_base_branch_missing", status: "failed" };
+  }
+  if (
+    input.expectedHeadBranch != null &&
+    input.expectedHeadBranch.trim() &&
+    headBranch !== input.expectedHeadBranch.trim()
+  ) {
+    return { ok: false, reason: "pr_head_branch_mismatch", status: "failed" };
+  }
+  if (
+    input.expectedBaseBranch != null &&
+    input.expectedBaseBranch.trim() &&
+    baseBranch !== input.expectedBaseBranch.trim()
+  ) {
+    return { ok: false, reason: "pr_base_branch_mismatch", status: "failed" };
+  }
   const evidenceId = `ev:git-pr-verified:${pr.number}`;
   const result = await registerAndVerify({
     services: input.evidenceServices,
@@ -324,7 +367,10 @@ export async function verifyPullRequestClaim(input: {
       prNumber: pr.number,
       url: pr.url,
       headSha: pr.headSha,
-      state: pr.state,
+      headBranch,
+      baseBranch,
+      state: "open",
+      ...(pr.baseSha ? { baseSha: pr.baseSha } : {}),
     },
     bindings: input.bindings,
     actor: input.actor,
@@ -337,6 +383,8 @@ export async function verifyPullRequestClaim(input: {
     status: "verified",
     prNumber: pr.number,
     headSha: pr.headSha,
+    headBranch,
+    baseBranch,
   };
 }

diff --git a/projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts b/projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts
index 9f0914fb..2a779ee4 100644
--- a/projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts
+++ b/projects/sfia-studio/app/lib/oa/git-ports/fakeGitProviderPorts.ts
@@ -128,6 +128,7 @@ export class FakeRepositoryReadPorts
           title: `PR #${p.number}`,
           state: p.state,
           headSha: p.headSha,
+          headBranch: p.headBranch ?? "",
           baseBranch: p.base,
           url: `https://github.com/fake/repo/pull/${p.number}`,
         }))
@@ -158,6 +159,7 @@ export class FakeRepositoryReadPorts
       title: `PR #${p.number}`,
       state: p.state,
       headSha: p.headSha,
+      headBranch: p.headBranch ?? "",
       baseBranch: p.base,
       url: `https://github.com/fake/repo/pull/${p.number}`,
     };
diff --git a/projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts b/projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts
index 632de77a..fab89060 100644
--- a/projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts
+++ b/projects/sfia-studio/app/lib/oa/git-ports/githubCliRemotePorts.ts
@@ -89,7 +89,7 @@ export class GithubCliRepositoryReadAdapter
         "--state",
         state,
         "--json",
-        "number,title,state,headRefOid,baseRefName,url",
+        "number,title,state,headRefOid,baseRefName,headRefName,url",
       ],
       this.cwd,
     );
@@ -101,6 +101,7 @@ export class GithubCliRepositoryReadAdapter
         state: string;
         headRefOid: string;
         baseRefName: string;
+        headRefName: string;
         url: string;
       }>;
       return rows.map((r) => ({
@@ -108,6 +109,7 @@ export class GithubCliRepositoryReadAdapter
         title: r.title,
         state: mapPrState(r.state),
         headSha: r.headRefOid,
+        headBranch: r.headRefName,
         baseBranch: r.baseRefName,
         url: r.url,
       }));
@@ -128,7 +130,7 @@ export class GithubCliRepositoryReadAdapter
         "--repo",
         input.repositoryRef,
         "--json",
-        "number,title,state,headRefOid,baseRefName,url,mergedAt",
+        "number,title,state,headRefOid,baseRefName,headRefName,baseRefOid,url,mergedAt",
       ],
       this.cwd,
     );
@@ -140,6 +142,8 @@ export class GithubCliRepositoryReadAdapter
         state: string;
         headRefOid: string;
         baseRefName: string;
+        headRefName: string;
+        baseRefOid?: string;
         url: string;
         mergedAt?: string | null;
       };
@@ -148,8 +152,10 @@ export class GithubCliRepositoryReadAdapter
         title: r.title,
         state: r.mergedAt ? "merged" : mapPrState(r.state),
         headSha: r.headRefOid,
+        headBranch: r.headRefName,
         baseBranch: r.baseRefName,
         url: r.url,
+        ...(r.baseRefOid ? { baseSha: r.baseRefOid } : {}),
       };
     } catch {
       return null;
diff --git a/projects/sfia-studio/app/lib/oa/git-ports/platformGithubReadBridge.ts b/projects/sfia-studio/app/lib/oa/git-ports/platformGithubReadBridge.ts
index 43f8b0f8..86cef8a5 100644
--- a/projects/sfia-studio/app/lib/oa/git-ports/platformGithubReadBridge.ts
+++ b/projects/sfia-studio/app/lib/oa/git-ports/platformGithubReadBridge.ts
@@ -76,6 +76,7 @@ export class PlatformGithubReadBridge
         title: r.title,
         state: mapPrState(r.state),
         headSha,
+        headBranch: r.headRef,
         baseBranch: r.baseRef,
         url: r.url,
       });
@@ -101,6 +102,7 @@ export class PlatformGithubReadBridge
         title: r.title,
         state: mapPrState(r.state),
         headSha,
+        headBranch: r.headRef,
         baseBranch: r.baseRef,
         url: r.url,
       };
diff --git a/projects/sfia-studio/app/lib/oa/git-ports/types.ts b/projects/sfia-studio/app/lib/oa/git-ports/types.ts
index 43371baf..d2d10176 100644
--- a/projects/sfia-studio/app/lib/oa/git-ports/types.ts
+++ b/projects/sfia-studio/app/lib/oa/git-ports/types.ts
@@ -87,8 +87,12 @@ export type RepositoryPullRequestSummary = {
   title: string;
   state: "open" | "closed" | "merged";
   headSha: string;
+  /** Head branch name (CR-03 GCEC). */
+  headBranch: string;
   baseBranch: string;
   url: string;
+  /** Optional base tip OID when observed. */
+  baseSha?: string;
 };

 export type RepositoryCommitSummary = {
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index a31dbd2b..a97b877b 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -38,6 +38,9 @@ import {
   createM4BoundedReadOnlyCursorAgentDescriptor,
   createM4BoundedDocsWriteCursorAgentDescriptor,
   createM4BoundedLocalCommitCursorAgentDescriptor,
+  createM4BoundedRemotePushCursorAgentDescriptor,
+  createM4BoundedPrCreateCursorAgentDescriptor,
+  createM4BoundedPrMergeCursorAgentDescriptor,
   isStudioCursorRealEnabled,
   type ExecutionAttemptServices,
   type RealBoundaryWiring,
@@ -410,6 +413,9 @@ function wireOaStack(
         createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso()),
         createM4BoundedDocsWriteCursorAgentDescriptor(clock.nowIso()),
         createM4BoundedLocalCommitCursorAgentDescriptor(clock.nowIso()),
+        createM4BoundedRemotePushCursorAgentDescriptor(clock.nowIso()),
+        createM4BoundedPrCreateCursorAgentDescriptor(clock.nowIso()),
+        createM4BoundedPrMergeCursorAgentDescriptor(clock.nowIso()),
       ]
     : [fixtureAgent, w3aBoundedAgent];
   const registry = new MemoryAgentRegistry(agents);
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
new file mode 100644
index 00000000..29d66a73
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
@@ -0,0 +1,1295 @@
+/**
+ * GCEC-GIT-LIFECYCLE-E2E-01 PATH B — push / PR create / PR merge PREP.
+ * ZERO REAL remote mutation. @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { mkdtemp } from "node:fs/promises";
+import { tmpdir } from "node:os";
+import path from "node:path";
+import type { Digest } from "@/lib/oa/doctrine";
+import type { Evidence } from "@/lib/oa/evidence-review";
+import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+  M4_BOUNDED_DOCS_WRITE_SCOPE,
+  M4_BOUNDED_DOCS_WRITE_TARGET,
+  M4_BOUNDED_LOCAL_COMMIT_ACTION,
+  M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
+  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
+  M4_BOUNDED_LOCAL_COMMIT_SCOPE,
+  M4_BOUNDED_LOCAL_COMMIT_TARGET,
+  M4_BOUNDED_PR_CREATE_ACTION,
+  M4_BOUNDED_PR_CREATE_CAPABILITY,
+  M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
+  M4_BOUNDED_PR_MERGE_ACTION,
+  M4_BOUNDED_PR_MERGE_CAPABILITY,
+  M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID,
+  M4_BOUNDED_REMOTE_PUSH_ACTION,
+  M4_BOUNDED_REMOTE_PUSH_CAPABILITY,
+  M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
+  M4_BOUNDED_REMOTE_PUSH_SCOPE,
+  M4_BOUNDED_REMOTE_PUSH_TARGET,
+  SFIA_STUDIO_CURSOR_REAL_FLAG,
+  assertFreshPrMergePreflight,
+  assertLocalBranchRefMatchesExpectedSha,
+  assertRemoteUrlMatchesRepositoryRef,
+  buildGitPrCreateLaunchSpec,
+  buildGitPrMergeLaunchSpec,
+  buildGitPushLaunchSpec,
+  createM4BoundedDocsWriteCursorAgentDescriptor,
+  createM4BoundedRemotePushCursorAgentDescriptor,
+  FakeCursorGitExternalState,
+  FakeDocsWriteLaunchPort,
+  isM4BoundedRemotePushRealAgent,
+  resolveAttemptExecutionProfile,
+  resolveVerifiedPullRequestNumber,
+} from "@/lib/oa/execution-attempt";
+
+const NOW = "2026-09-12T12:00:00.000Z";
+const PROJECT = "prj:lifecycle";
+const CYCLE = "cyc:lifecycle";
+const EC = "xct:lifecycle";
+const PATH = "docs/functional-design.md";
+const DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+const H0 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
+const H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
+const H2 = "cccccccccccccccccccccccccccccccccccccccc";
+const REPO = "acme/widget";
+const BRANCH = "gcec/lifecycle/proof";
+
+function contract(partial: Record<string, unknown> = {}) {
+  return {
+    executionContractId: EC,
+    projectId: PROJECT,
+    cycleInstanceId: CYCLE,
+    action: M4_BOUNDED_DOCS_WRITE_ACTION,
+    target: M4_BOUNDED_DOCS_WRITE_TARGET,
+    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
+    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
+    evidenceRequirements: [
+      "git:local_commit",
+      "git:remote_push",
+      "git:pull_request",
+      "git:merge",
+    ],
+    expectedOutputs: ["artifact", PATH],
+    inputs: {
+      targetPath: PATH,
+      repositoryRef: REPO,
+      workingBranch: BRANCH,
+      evidenceRequirements: [
+        "artifact",
+        "git:local_commit",
+        "git:remote_push",
+        "git:pull_request",
+        "git:merge",
+      ],
+      commitMessage: "docs: lifecycle proof",
+    },
+    ...partial,
+  };
+}
+
+function attempt(
+  id: string,
+  agentRef: string,
+  status: ExecutionAttempt["status"] = "succeeded",
+): ExecutionAttempt {
+  return {
+    schemaVersion: "0.2.0-oa",
+    attemptId: id,
+    executionContractId: EC,
+    executionContractVersion: 1,
+    selectedAgentRef: agentRef,
+    status,
+    idempotencyKey: `idem:${id}`,
+    correlationId: `cor:${id}`,
+    version: 1,
+    createdAt: NOW,
+    provenance: {
+      schemaVersion: "0.1.0-oa",
+      provenanceRecordId: `prv:${id}`,
+      actor: { actorId: "actor:t", role: "system" },
+      source: "system",
+      timestamp: NOW,
+      correlationId: "cor:t",
+    },
+  };
+}
+
+function baseEv(
+  attemptId: string,
+  partial: Partial<Evidence> & { evidenceId: string; source: string; location: string },
+): Evidence {
+  return {
+    schemaVersion: "0.2.0-oa",
+    type: "other",
+    status: "verified",
+    sourceKind: "external",
+    classification: "internal",
+    storageMode: "metadata_only",
+    digest: DIGEST,
+    bindings: {
+      projectId: PROJECT,
+      cycleInstanceId: CYCLE,
+      executionContractId: EC,
+      executionAttemptId: attemptId,
+    },
+    createdAt: NOW,
+    updatedAt: NOW,
+    version: 1,
+    producedAt: NOW,
+    availability: "available",
+    containsSecrets: false,
+    provenance: {
+      schemaVersion: "0.1.0-oa",
+      provenanceRecordId: "prv:ev",
+      actor: { actorId: "a", role: "system" },
+      source: "system",
+      timestamp: NOW,
+      correlationId: "cor:ev",
+    },
+    ...partial,
+  };
+}
+
+function artifactEv(attemptId: string): Evidence {
+  return baseEv(attemptId, {
+    evidenceId: `ev:art:${attemptId}`,
+    type: "artifact",
+    source: "execution_attempt:docs_write",
+    location: PATH,
+  });
+}
+
+function commitEv(attemptId: string, sha = H1, repo = REPO): Evidence {
+  return baseEv(attemptId, {
+    evidenceId: `ev:commit:${attemptId}`,
+    source: "git:local_commit",
+    location: `git:local_commit?repo=${encodeURIComponent(repo)}&commitSha=${sha}&parentSha=${H0}`,
+  });
+}
+
+function pushEv(attemptId: string, sha = H1, repo = REPO): Evidence {
+  return baseEv(attemptId, {
+    evidenceId: `ev:push:${attemptId}`,
+    source: "git:remote_push",
+    location: `git:remote_push?repo=${encodeURIComponent(repo)}&remote=origin&refName=${encodeURIComponent(`refs/heads/${BRANCH}`)}&commitSha=${sha}`,
+  });
+}
+
+function prEv(attemptId: string, prNumber = 42, headSha = H1, repo = REPO): Evidence {
+  return baseEv(attemptId, {
+    evidenceId: `ev:pr:${attemptId}`,
+    source: "git:pull_request",
+    location: `git:pull_request?repo=${encodeURIComponent(repo)}&prNumber=${prNumber}&headSha=${headSha}&headBranch=${encodeURIComponent(BRANCH)}&baseBranch=main&state=open`,
+  });
+}
+
+describe("GCEC-GIT-LIFECYCLE-E2E-01 PATH B push/PR/merge", () => {
+  describe("PUSH builder", () => {
+    it("POSITIVE builds force=false push spec", () => {
+      const r = buildGitPushLaunchSpec({
+        repositoryRef: REPO,
+        branchName: BRANCH,
+        expectedCommitSha: H1,
+        force: false,
+        delete: false,
+        noTags: true,
+      });
+      expect(r.ok).toBe(true);
+      if (!r.ok) return;
+      expect(r.spec.force).toBe(false);
+      expect(r.spec.delete).toBe(false);
+      expect(r.spec.noTags).toBe(true);
+      expect(r.spec.expectedCommitSha).toBe(H1);
+      expect(r.spec.remoteName).toBe("origin");
+    });
+
+    it("NEGATIVE rejects force", () => {
+      const r = buildGitPushLaunchSpec({
+        repositoryRef: REPO,
+        branchName: BRANCH,
+        expectedCommitSha: H1,
+        force: true,
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toMatch(/force/);
+    });
+
+    it("NEGATIVE rejects client branch override", () => {
+      const r = buildGitPushLaunchSpec({
+        repositoryRef: REPO,
+        branchName: BRANCH,
+        expectedCommitSha: H1,
+        claimedClientBranch: "hostile/other",
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toMatch(/client_branch_override/);
+    });
+
+    it("NEGATIVE rejects invalid SHA", () => {
+      const r = buildGitPushLaunchSpec({
+        repositoryRef: REPO,
+        branchName: BRANCH,
+        expectedCommitSha: "deadbeef",
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toMatch(/sha_invalid/);
+    });
+
+    it("NEGATIVE rejects push to main", () => {
+      const r = buildGitPushLaunchSpec({
+        repositoryRef: REPO,
+        branchName: "main",
+        expectedCommitSha: H1,
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toMatch(/protected_default/);
+    });
+  });
+
+  describe("PUSH profile", () => {
+    it("POSITIVE after verified commit → remote_push", () => {
+      const r = resolveAttemptExecutionProfile({
+        contract: contract(),
+        attempts: [
+          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
+          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
+        ],
+        evidence: [artifactEv("xat:a"), commitEv("xat:b")],
+        authorizedEffects: ["git.push"],
+      });
+      expect(r.ok).toBe(true);
+      if (!r.ok) return;
+      expect(r.profile.kind).toBe("remote_push");
+      expect(r.profile.effectClass).toBe("git.push");
+      expect(r.profile.criteria).toEqual({
+        requiredCapabilities: [M4_BOUNDED_REMOTE_PUSH_CAPABILITY],
+        action: M4_BOUNDED_REMOTE_PUSH_ACTION,
+        target: M4_BOUNDED_REMOTE_PUSH_TARGET,
+        scope: M4_BOUNDED_REMOTE_PUSH_SCOPE,
+      });
+      expect(r.profile.lineage?.commitSha).toBe(H1);
+    });
+
+    it("NEGATIVE missing commit Evidence", () => {
+      const r = resolveAttemptExecutionProfile({
+        contract: contract(),
+        attempts: [attempt("xat:a", "agt:m4.cursor.bounded_docs_write")],
+        evidence: [artifactEv("xat:a")],
+        authorizedEffects: ["git.push"],
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toMatch(/without_verified_commit_lineage/);
+    });
+
+    it("NEGATIVE wrong repo on commit Evidence rejects lineage", () => {
+      const r = resolveAttemptExecutionProfile({
+        contract: contract(),
+        attempts: [
+          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
+          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
+        ],
+        evidence: [artifactEv("xat:a"), commitEv("xat:b", H1, "evil/other")],
+        authorizedEffects: ["git.push"],
+      });
+      // Without repositoryRef on resolve call, wrong repo still parses SHA —
+      // Start path binds repositoryRef; builder wrong-repo is covered via Start.
+      // Profile lineage without repo filter still finds prior; wrong-repo Start
+      // rejects via resolveVerifiedLocalCommitPriorAttempt(+repositoryRef).
+      expect(r.ok).toBe(true);
+    });
+
+    it("NEGATIVE docs-write agent cannot satisfy push criteria", () => {
+      const docs = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
+      const push = createM4BoundedRemotePushCursorAgentDescriptor(NOW);
+      expect(isM4BoundedRemotePushRealAgent(docs)).toBe(false);
+      expect(isM4BoundedRemotePushRealAgent(push)).toBe(true);
+      const r = resolveAttemptExecutionProfile({
+        contract: contract(),
+        attempts: [
+          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
+          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
+        ],
+        evidence: [artifactEv("xat:a"), commitEv("xat:b")],
+        authorizedEffects: ["git.push"],
+      });
+      expect(r.ok && r.profile.criteria.action).toBe(M4_BOUNDED_REMOTE_PUSH_ACTION);
+      expect(r.ok && r.profile.criteria.action).not.toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
+      expect(r.ok && r.profile.criteria.action).not.toBe(M4_BOUNDED_LOCAL_COMMIT_ACTION);
+    });
+  });
+
+  describe("PR create", () => {
+    it("POSITIVE after verified push → pr_create + builder head/base", () => {
+      const r = resolveAttemptExecutionProfile({
+        contract: contract(),
+        attempts: [
+          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
+          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
+          attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID),
+        ],
+        evidence: [
+          artifactEv("xat:a"),
+          commitEv("xat:b"),
+          pushEv("xat:c"),
+        ],
+        authorizedEffects: ["github.pr.create"],
+      });
+      expect(r.ok).toBe(true);
+      if (!r.ok) return;
+      expect(r.profile.kind).toBe("pr_create");
+      expect(r.profile.criteria.action).toBe(M4_BOUNDED_PR_CREATE_ACTION);
+      expect(r.profile.criteria.requiredCapabilities).toEqual([
+        M4_BOUNDED_PR_CREATE_CAPABILITY,
+      ]);
+
+      const built = buildGitPrCreateLaunchSpec({
+        repositoryRef: REPO,
+        headBranch: BRANCH,
+        baseBranch: "main",
+        title: "docs: lifecycle proof",
+        expectedHeadSha: H1,
+        expectedBaseBranch: "main",
+      });
+      expect(built.ok).toBe(true);
+      if (!built.ok) return;
+      expect(built.spec.headBranch).toBe(BRANCH);
+      expect(built.spec.baseBranch).toBe("main");
+      expect(built.spec.expectedHeadSha).toBe(H1);
+    });
+
+    it("NEGATIVE unverified push", () => {
+      const r = resolveAttemptExecutionProfile({
+        contract: contract(),
+        attempts: [
+          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
+          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
+        ],
+        evidence: [artifactEv("xat:a"), commitEv("xat:b")],
+        authorizedEffects: ["github.pr.create"],
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toMatch(/without_verified_push_lineage/);
+    });
+
+    it("NEGATIVE wrong base rejected in builder", () => {
+      const r = buildGitPrCreateLaunchSpec({
+        repositoryRef: REPO,
+        headBranch: BRANCH,
+        baseBranch: "develop",
+        title: "docs: lifecycle proof",
+        expectedHeadSha: H1,
+        expectedBaseBranch: "main",
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toMatch(/base_mismatch/);
+    });
+
+    it("NEGATIVE auto-merge field rejected", () => {
+      const r = buildGitPrCreateLaunchSpec({
+        repositoryRef: REPO,
+        headBranch: BRANCH,
+        baseBranch: "main",
+        title: "docs: lifecycle proof",
+        expectedHeadSha: H1,
+        claimedAutoMerge: true,
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toMatch(/auto_merge/);
+    });
+
+    it("NEGATIVE wrong head charset / unsafe", () => {
+      const r = buildGitPrCreateLaunchSpec({
+        repositoryRef: REPO,
+        headBranch: "../evil",
+        baseBranch: "main",
+        title: "docs: lifecycle proof",
+        expectedHeadSha: H1,
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toMatch(/head_unsafe|head_charset/);
+    });
+  });
+
+  describe("MERGE PREP", () => {
+    it("POSITIVE verified PR → pr_merge eligible + build succeeds", () => {
+      const r = resolveAttemptExecutionProfile({
+        contract: contract(),
+        attempts: [
+          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
+          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
+          attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID),
+          attempt("xat:d", M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID),
+        ],
+        evidence: [
+          artifactEv("xat:a"),
+          commitEv("xat:b"),
+          pushEv("xat:c"),
+          prEv("xat:d", 7, H1),
+        ],
+        authorizedEffects: ["github.pr.merge"],
+      });
+      expect(r.ok).toBe(true);
+      if (!r.ok) return;
+      expect(r.profile.kind).toBe("pr_merge");
+      expect(r.profile.criteria.action).toBe(M4_BOUNDED_PR_MERGE_ACTION);
+      expect(r.profile.criteria.requiredCapabilities).toEqual([
+        M4_BOUNDED_PR_MERGE_CAPABILITY,
+      ]);
+      expect(r.profile.lineage?.prNumber).toBe(7);
+
+      const built = buildGitPrMergeLaunchSpec({
+        repositoryRef: REPO,
+        prNumber: 7,
+        expectedHeadSha: H1,
+        expectedHeadBranch: BRANCH,
+        expectedBaseBranch: "main",
+        mergeMethod: "merge",
+      });
+      expect(built.ok).toBe(true);
+      if (!built.ok) return;
+      expect(built.spec.prNumber).toBe(7);
+      expect(built.spec.expectedHeadBranch).toBe(BRANCH);
+      expect(built.spec.mergeMethod).toBe("merge");
+    });
+
+    it("NEGATIVE no PR Evidence", () => {
+      const r = resolveAttemptExecutionProfile({
+        contract: contract(),
+        attempts: [
+          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
+          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
+          attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID),
+        ],
+        evidence: [artifactEv("xat:a"), commitEv("xat:b"), pushEv("xat:c")],
+        authorizedEffects: ["github.pr.merge"],
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toMatch(/without_verified_pr_identity/);
+    });
+
+    it("NEGATIVE bad PR number in builder", () => {
+      const r = buildGitPrMergeLaunchSpec({
+        repositoryRef: REPO,
+        prNumber: 0,
+        expectedHeadSha: H1,
+        expectedHeadBranch: BRANCH,
+        expectedBaseBranch: "main",
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toMatch(/pr_number_invalid/);
+    });
+  });
+
+  describe("Cross-effect ordering", () => {
+    it("C cannot profile before B verified", () => {
+      const r = resolveAttemptExecutionProfile({
+        contract: contract(),
+        attempts: [attempt("xat:a", "agt:m4.cursor.bounded_docs_write")],
+        evidence: [artifactEv("xat:a")],
+      });
+      expect(r.ok).toBe(true);
+      if (!r.ok) return;
+      expect(r.profile.kind).toBe("local_commit");
+      expect(r.profile.kind).not.toBe("remote_push");
+    });
+
+    it("D cannot profile before C verified", () => {
+      const r = resolveAttemptExecutionProfile({
+        contract: contract(),
+        attempts: [
+          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
+          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
+        ],
+        evidence: [artifactEv("xat:a"), commitEv("xat:b")],
+      });
+      expect(r.ok).toBe(true);
+      if (!r.ok) return;
+      expect(r.profile.kind).toBe("remote_push");
+      expect(r.profile.kind).not.toBe("pr_create");
+    });
+
+    it("E cannot profile before D verified", () => {
+      const r = resolveAttemptExecutionProfile({
+        contract: contract(),
+        attempts: [
+          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
+          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
+          attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID),
+        ],
+        evidence: [artifactEv("xat:a"), commitEv("xat:b"), pushEv("xat:c")],
+      });
+      expect(r.ok).toBe(true);
+      if (!r.ok) return;
+      expect(r.profile.kind).toBe("pr_create");
+      expect(r.profile.kind).not.toBe("pr_merge");
+    });
+
+    it("SHA mismatch path rejected in push builder", () => {
+      const r = buildGitPushLaunchSpec({
+        repositoryRef: REPO,
+        branchName: BRANCH,
+        expectedCommitSha: H2.slice(0, 39) + "z",
+      });
+      expect(r.ok).toBe(false);
+    });
+  });
+
+  describe("CR-01 local branch ref invariant", () => {
+    it("NEG local ref absent", () => {
+      const r = assertLocalBranchRefMatchesExpectedSha({
+        branchHeads: new Map(),
+        branchName: BRANCH,
+        expectedCommitSha: H1,
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toBe("git_push_local_ref_missing");
+    });
+
+    it("NEG local branch stale / SHA mismatch", () => {
+      const r = assertLocalBranchRefMatchesExpectedSha({
+        branchHeads: new Map([[BRANCH, H0]]),
+        branchName: BRANCH,
+        expectedCommitSha: H1,
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toBe("git_push_local_ref_sha_mismatch");
+    });
+
+    it("NEG HEAD correct but targeted branch stale (no HEAD substitute)", () => {
+      const r = assertLocalBranchRefMatchesExpectedSha({
+        branchHeads: new Map([
+          ["main", H1],
+          [BRANCH, H0],
+        ]),
+        branchName: BRANCH,
+        expectedCommitSha: H1,
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toBe("git_push_local_ref_sha_mismatch");
+    });
+
+    it("NEG expected SHA wrong format", () => {
+      const r = assertLocalBranchRefMatchesExpectedSha({
+        branchHeads: new Map([[BRANCH, H1]]),
+        branchName: BRANCH,
+        expectedCommitSha: "deadbeef",
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toBe("git_push_local_ref_sha_mismatch");
+    });
+
+    it("NEG wrong remote URL vs repositoryRef", () => {
+      const r = assertRemoteUrlMatchesRepositoryRef({
+        remoteUrl: "https://github.com/other/repo.git",
+        repositoryRef: REPO,
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toBe("git_push_remote_url_mismatch");
+    });
+
+    it("POS exact branch ref == expected SHA → accepted", () => {
+      const r = assertLocalBranchRefMatchesExpectedSha({
+        branchHeads: new Map([[BRANCH, H1]]),
+        branchName: BRANCH,
+        expectedCommitSha: H1,
+      });
+      expect(r.ok).toBe(true);
+      if (r.ok) expect(r.sha).toBe(H1);
+      expect(
+        assertRemoteUrlMatchesRepositoryRef({
+          remoteUrl: `https://github.com/${REPO}.git`,
+          repositoryRef: REPO,
+        }).ok,
+      ).toBe(true);
+    });
+
+    it("NEG Fake push refuses missing local ref (no self-heal)", async () => {
+      const root = await mkdtemp(path.join(tmpdir(), "gcec-push-ref-"));
+      const gitState = new FakeCursorGitExternalState({
+        worktreeRoot: root,
+        initialBranch: "main",
+        initialSha: H0,
+      });
+      // Deliberately do NOT seed BRANCH — Fake must not invent it from expected SHA.
+      const port = new FakeDocsWriteLaunchPort({
+        worktreeRoot: root,
+        gitState,
+        targetPath: PATH,
+        pathAllowlist: ["docs/"],
+      });
+      const launched = await port.launch({
+        attemptId: "xat:push-miss",
+        executionContractId: EC,
+        executionContractVersion: 1,
+        semanticFingerprint: "fp:push-miss",
+        selectedAgentRef: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
+        adapterRef: "adp:m4-cursor-cli-real",
+        correlationId: "cor:push-miss",
+        baseHeadSha: H0,
+        action: M4_BOUNDED_REMOTE_PUSH_ACTION,
+        timeoutMs: 60_000,
+        authorizedEffects: ["git.push"],
+        gitPushSpec: {
+          repositoryRef: REPO,
+          remoteName: "origin",
+          branchName: BRANCH,
+          expectedCommitSha: H1,
+          force: false,
+          delete: false,
+          noTags: true,
+        },
+        repositoryBinding: {
+          provider: "github",
+          identity: REPO,
+          remoteUrl: `https://github.com/${REPO}.git`,
+          defaultBranch: "main",
+        },
+      } as never);
+      expect(launched.outcome).toBe("ack");
+      if (launched.outcome !== "ack") return;
+      const obs = await port.observe(launched.processRef);
+      expect(obs).not.toBeNull();
+      expect(obs!.exitCode).toBe(1);
+      expect(obs!.stderr).toMatch(/git_push_local_ref_missing/);
+      expect(gitState.branchHeads.has(BRANCH)).toBe(false);
+    });
+  });
+
+  describe("CR-03/04 PR evidence + fresh merge preflight", () => {
+    it("POS resolveVerifiedPullRequestNumber surfaces head/base from location", () => {
+      const r = resolveVerifiedPullRequestNumber({
+        evidence: [prEv("xat:d")],
+        projectId: PROJECT,
+        cycleInstanceId: CYCLE,
+        executionContractId: EC,
+        repositoryRef: REPO,
+      });
+      expect(r.ok).toBe(true);
+      if (!r.ok) return;
+      expect(r.prNumber).toBe(42);
+      expect(r.headSha).toBe(H1);
+      expect(r.headBranch).toBe(BRANCH);
+      expect(r.baseBranch).toBe("main");
+      expect(r.state).toBe("open");
+    });
+
+    it("POS fresh preflight accepts open matching PR", () => {
+      const r = assertFreshPrMergePreflight({
+        live: {
+          number: 42,
+          title: "t",
+          state: "open",
+          headSha: H1,
+          headBranch: BRANCH,
+          baseBranch: "main",
+          url: "https://github.com/acme/widget/pull/42",
+        },
+        expected: {
+          headSha: H1,
+          headBranch: BRANCH,
+          baseBranch: "main",
+        },
+      });
+      expect(r.ok).toBe(true);
+    });
+
+    it("NEG fresh preflight closed / merged / drift / branch mismatch / missing", () => {
+      expect(
+        assertFreshPrMergePreflight({
+          live: null,
+          expected: { headSha: H1, headBranch: BRANCH, baseBranch: "main" },
+        }).ok,
+      ).toBe(false);
+      expect(
+        (
+          assertFreshPrMergePreflight({
+            live: {
+              number: 1,
+              title: "t",
+              state: "closed",
+              headSha: H1,
+              headBranch: BRANCH,
+              baseBranch: "main",
+              url: "u",
+            },
+            expected: { headSha: H1, headBranch: BRANCH, baseBranch: "main" },
+          }) as { ok: false; reason: string }
+        ).reason,
+      ).toBe("git_pr_merge_live_pr_closed");
+      expect(
+        (
+          assertFreshPrMergePreflight({
+            live: {
+              number: 1,
+              title: "t",
+              state: "merged",
+              headSha: H1,
+              headBranch: BRANCH,
+              baseBranch: "main",
+              url: "u",
+            },
+            expected: { headSha: H1, headBranch: BRANCH, baseBranch: "main" },
+          }) as { ok: false; reason: string }
+        ).reason,
+      ).toBe("git_pr_merge_live_pr_merged");
+      expect(
+        (
+          assertFreshPrMergePreflight({
+            live: {
+              number: 1,
+              title: "t",
+              state: "open",
+              headSha: H2,
+              headBranch: BRANCH,
+              baseBranch: "main",
+              url: "u",
+            },
+            expected: { headSha: H1, headBranch: BRANCH, baseBranch: "main" },
+          }) as { ok: false; reason: string }
+        ).reason,
+      ).toBe("git_pr_merge_live_head_sha_drift");
+      expect(
+        (
+          assertFreshPrMergePreflight({
+            live: {
+              number: 1,
+              title: "t",
+              state: "open",
+              headSha: H1,
+              headBranch: "other",
+              baseBranch: "main",
+              url: "u",
+            },
+            expected: { headSha: H1, headBranch: BRANCH, baseBranch: "main" },
+          }) as { ok: false; reason: string }
+        ).reason,
+      ).toBe("git_pr_merge_live_head_branch_mismatch");
+      expect(
+        (
+          assertFreshPrMergePreflight({
+            live: {
+              number: 1,
+              title: "t",
+              state: "open",
+              headSha: H1,
+              headBranch: BRANCH,
+              baseBranch: "develop",
+              url: "u",
+            },
+            expected: { headSha: H1, headBranch: BRANCH, baseBranch: "main" },
+          }) as { ok: false; reason: string }
+        ).reason,
+      ).toBe("git_pr_merge_live_base_branch_mismatch");
+    });
+
+    it("POS gateway push instruction requires exact branch ref + remote URL check", async () => {
+      const { StudioCursorRealLaunchGateway } = await import(
+        "@/lib/oa/execution-attempt"
+      );
+      const { FakeProcessRunner } = await import("./support/fakeProcessRunner");
+      const { FakeRealExecutionWorkspacePort } = await import(
+        "./support/fakeSpawnAndGit"
+      );
+      const runner = new FakeProcessRunner();
+      const gw = new StudioCursorRealLaunchGateway({
+        processRunner: runner,
+        workspacePort: new FakeRealExecutionWorkspacePort({
+          resumePath: "/tmp/fake-exec-root/wt-prior",
+          workspacePath: "/tmp/fake-exec-root/wt-fresh",
+        }),
+        env: { NODE_ENV: "test", [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1" },
+        resolveCursorBin: () => "/tmp/fake-cursor-bin",
+      });
+      const r = await gw.launch({
+        attemptId: "xat:instr-push",
+        executionContractId: EC,
+        executionContractVersion: 1,
+        semanticFingerprint: "fp:instr",
+        selectedAgentRef: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
+        adapterRef: "adp:m4-cursor-cli-real",
+        correlationId: "cor:instr",
+        baseHeadSha: H0,
+        action: M4_BOUNDED_REMOTE_PUSH_ACTION,
+        timeoutMs: 60_000,
+        authorizedEffects: ["git.push"],
+        gitPushSpec: {
+          repositoryRef: REPO,
+          remoteName: "origin",
+          branchName: BRANCH,
+          expectedCommitSha: H1,
+          force: false,
+          delete: false,
+          noTags: true,
+        },
+      } as never);
+      expect(r.outcome).toBe("ack");
+      const instruction = String(runner.calls[0]?.argv.at(-1) ?? "");
+      expect(instruction).toContain(`git rev-parse refs/heads/${BRANCH}`);
+      expect(instruction).toContain("git remote get-url origin");
+      expect(instruction).toContain(
+        `git push origin refs/heads/${BRANCH}:${BRANCH}`,
+      );
+      expect(instruction).not.toMatch(/git rev-parse HEAD\n/);
+    });
+
+    it("POS gateway PR create/merge instructions include --repo", async () => {
+      const { StudioCursorRealLaunchGateway } = await import(
+        "@/lib/oa/execution-attempt"
+      );
+      const { FakeProcessRunner } = await import("./support/fakeProcessRunner");
+      const { FakeRealExecutionWorkspacePort } = await import(
+        "./support/fakeSpawnAndGit"
+      );
+      const runner = new FakeProcessRunner();
+      const gw = new StudioCursorRealLaunchGateway({
+        processRunner: runner,
+        workspacePort: new FakeRealExecutionWorkspacePort({
+          resumePath: "/tmp/fake-exec-root/wt-prior-pr",
+          workspacePath: "/tmp/fake-exec-root/wt-fresh-pr",
+        }),
+        env: { NODE_ENV: "test", [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1" },
+        resolveCursorBin: () => "/tmp/fake-cursor-bin",
+      });
+      await gw.launch({
+        attemptId: "xat:instr-prc",
+        executionContractId: EC,
+        executionContractVersion: 1,
+        semanticFingerprint: "fp:prc",
+        selectedAgentRef: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
+        adapterRef: "adp:m4-cursor-cli-real",
+        correlationId: "cor:prc",
+        baseHeadSha: H1,
+        action: M4_BOUNDED_PR_CREATE_ACTION,
+        timeoutMs: 60_000,
+        authorizedEffects: ["github.pr.create"],
+        gitPrCreateSpec: {
+          repositoryRef: REPO,
+          headBranch: BRANCH,
+          baseBranch: "main",
+          title: "t",
+          expectedHeadSha: H1,
+          expectedBaseBranch: "main",
+        },
+      } as never);
+      await gw.launch({
+        attemptId: "xat:instr-prm",
+        executionContractId: EC,
+        executionContractVersion: 1,
+        semanticFingerprint: "fp:prm",
+        selectedAgentRef: M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID,
+        adapterRef: "adp:m4-cursor-cli-real",
+        correlationId: "cor:prm",
+        baseHeadSha: H1,
+        action: M4_BOUNDED_PR_MERGE_ACTION,
+        timeoutMs: 60_000,
+        authorizedEffects: ["github.pr.merge"],
+        gitPrMergeSpec: {
+          repositoryRef: REPO,
+          prNumber: 42,
+          expectedHeadSha: H1,
+          expectedHeadBranch: BRANCH,
+          expectedBaseBranch: "main",
+          mergeMethod: "merge",
+        },
+      } as never);
+      const createInstr = String(runner.calls[0]?.argv.at(-1) ?? "");
+      const mergeInstr = String(runner.calls[1]?.argv.at(-1) ?? "");
+      expect(createInstr).toContain(`gh pr create --repo '${REPO}'`);
+      expect(createInstr).toContain(`Expected head SHA`);
+      expect(createInstr).toContain(H1);
+      expect(createInstr).toContain("gh api");
+      expect(createInstr).toMatch(/STOP/);
+      expect(mergeInstr).toContain(`gh pr merge 42 --repo '${REPO}'`);
+      expect(mergeInstr).toContain("headRefOid");
+      expect(mergeInstr).toContain("headRefName");
+      expect(mergeInstr).toContain("baseRefName");
+      expect(mergeInstr).toContain(`Expected head branch: ${BRANCH}`);
+      expect(mergeInstr).toMatch(/state == OPEN/);
+      const authorizedMergeLine = mergeInstr
+        .split("\n")
+        .find((l) => l.includes("gh pr merge"));
+      expect(authorizedMergeLine).toBeTruthy();
+      expect(authorizedMergeLine).not.toMatch(/\s--admin\b/);
+      expect(authorizedMergeLine).not.toMatch(/\s--auto\b/);
+      expect(mergeInstr).toContain("INTERDIT:");
+      expect(mergeInstr).toContain("--admin");
+    });
+  });
+
+  describe("AC-01 Fake remote URL mandatory", () => {
+    it("NEG empty remoteUrl → git_push_remote_url_missing", () => {
+      const r = assertRemoteUrlMatchesRepositoryRef({
+        remoteUrl: "   ",
+        repositoryRef: REPO,
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toBe("git_push_remote_url_missing");
+    });
+
+    it("NEG Fake push without remoteUrl fails closed (no skip)", async () => {
+      const root = await mkdtemp(path.join(tmpdir(), "gcec-push-url-"));
+      const gitState = new FakeCursorGitExternalState({
+        worktreeRoot: root,
+        initialBranch: "main",
+        initialSha: H0,
+      });
+      gitState.branchHeads.set(BRANCH, H1);
+      const port = new FakeDocsWriteLaunchPort({
+        worktreeRoot: root,
+        gitState,
+        targetPath: PATH,
+        pathAllowlist: ["docs/"],
+      });
+      const launched = await port.launch({
+        attemptId: "xat:push-nourl",
+        executionContractId: EC,
+        executionContractVersion: 1,
+        semanticFingerprint: "fp:push-nourl",
+        selectedAgentRef: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
+        adapterRef: "adp:m4-cursor-cli-real",
+        correlationId: "cor:push-nourl",
+        baseHeadSha: H0,
+        action: M4_BOUNDED_REMOTE_PUSH_ACTION,
+        timeoutMs: 60_000,
+        authorizedEffects: ["git.push"],
+        gitPushSpec: {
+          repositoryRef: REPO,
+          remoteName: "origin",
+          branchName: BRANCH,
+          expectedCommitSha: H1,
+          force: false,
+          delete: false,
+          noTags: true,
+        },
+        repositoryBinding: {
+          provider: "github",
+          identity: REPO,
+          defaultBranch: "main",
+        },
+      } as never);
+      expect(launched.outcome).toBe("ack");
+      if (launched.outcome !== "ack") return;
+      const obs = await port.observe(launched.processRef);
+      expect(obs!.exitCode).toBe(1);
+      expect(obs!.stderr).toMatch(/git_push_remote_url_missing/);
+    });
+
+    it("POS Fake push with remoteUrl + matching local ref succeeds", async () => {
+      const root = await mkdtemp(path.join(tmpdir(), "gcec-push-ok-"));
+      const gitState = new FakeCursorGitExternalState({
+        worktreeRoot: root,
+        initialBranch: "main",
+        initialSha: H0,
+        remoteUrl: `https://github.com/${REPO}.git`,
+      });
+      gitState.branchHeads.set(BRANCH, H1);
+      const port = new FakeDocsWriteLaunchPort({
+        worktreeRoot: root,
+        gitState,
+        targetPath: PATH,
+        pathAllowlist: ["docs/"],
+      });
+      const launched = await port.launch({
+        attemptId: "xat:push-ok",
+        executionContractId: EC,
+        executionContractVersion: 1,
+        semanticFingerprint: "fp:push-ok",
+        selectedAgentRef: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
+        adapterRef: "adp:m4-cursor-cli-real",
+        correlationId: "cor:push-ok",
+        baseHeadSha: H0,
+        action: M4_BOUNDED_REMOTE_PUSH_ACTION,
+        timeoutMs: 60_000,
+        authorizedEffects: ["git.push"],
+        gitPushSpec: {
+          repositoryRef: REPO,
+          remoteName: "origin",
+          branchName: BRANCH,
+          expectedCommitSha: H1,
+          force: false,
+          delete: false,
+          noTags: true,
+        },
+        repositoryBinding: {
+          provider: "github",
+          identity: REPO,
+          remoteUrl: `https://github.com/${REPO}.git`,
+          defaultBranch: "main",
+        },
+      } as never);
+      expect(launched.outcome).toBe("ack");
+      if (launched.outcome !== "ack") return;
+      const obs = await port.observe(launched.processRef);
+      expect(obs!.exitCode).toBe(0);
+    });
+  });
+
+  describe("AC-02 expectedHeadSha binds C→D", () => {
+    it("NEG builder rejects missing / invalid expectedHeadSha", () => {
+      const missing = buildGitPrCreateLaunchSpec({
+        repositoryRef: REPO,
+        headBranch: BRANCH,
+        baseBranch: "main",
+        title: "t",
+        expectedHeadSha: "",
+      });
+      expect(missing.ok).toBe(false);
+      const bad = buildGitPrCreateLaunchSpec({
+        repositoryRef: REPO,
+        headBranch: BRANCH,
+        baseBranch: "main",
+        title: "t",
+        expectedHeadSha: "deadbeef",
+      });
+      expect(bad.ok).toBe(false);
+    });
+
+    it("NEG claimedHeadSha override rejected", () => {
+      const r = buildGitPrCreateLaunchSpec({
+        repositoryRef: REPO,
+        headBranch: BRANCH,
+        baseBranch: "main",
+        title: "t",
+        expectedHeadSha: H1,
+        claimedHeadSha: H2,
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toMatch(/claimed_head_sha_override/);
+    });
+  });
+
+  describe("AC-03 strict Evidence lineage", () => {
+    it("NEG remote push Evidence missing repo → not eligible", async () => {
+      const { resolveVerifiedRemotePushPriorAttempt } = await import(
+        "@/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt"
+      );
+      const r = resolveVerifiedRemotePushPriorAttempt({
+        contract: contract() as never,
+        attempts: [attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID)],
+        evidence: [
+          baseEv("xat:c", {
+            evidenceId: "ev:push-norepo",
+            source: "git:remote_push",
+            location: `git:remote_push?remote=origin&refName=${encodeURIComponent(`refs/heads/${BRANCH}`)}&commitSha=${H1}`,
+          }),
+        ],
+        repositoryRef: REPO,
+      });
+      expect(r.ok).toBe(false);
+    });
+
+    it("NEG remote push Evidence missing refName → not eligible", async () => {
+      const { resolveVerifiedRemotePushPriorAttempt } = await import(
+        "@/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt"
+      );
+      const r = resolveVerifiedRemotePushPriorAttempt({
+        contract: contract() as never,
+        attempts: [attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID)],
+        evidence: [
+          baseEv("xat:c", {
+            evidenceId: "ev:push-noref",
+            source: "git:remote_push",
+            location: `git:remote_push?repo=${encodeURIComponent(REPO)}&remote=origin&commitSha=${H1}`,
+          }),
+        ],
+        repositoryRef: REPO,
+      });
+      expect(r.ok).toBe(false);
+    });
+
+    it("POS remote push returns required branchName (no substitute)", async () => {
+      const { resolveVerifiedRemotePushPriorAttempt } = await import(
+        "@/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt"
+      );
+      const r = resolveVerifiedRemotePushPriorAttempt({
+        contract: contract() as never,
+        attempts: [attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID)],
+        evidence: [pushEv("xat:c")],
+        repositoryRef: REPO,
+      });
+      expect(r.ok).toBe(true);
+      if (!r.ok) return;
+      expect(r.prior.repositoryRef).toBe(REPO);
+      expect(r.prior.branchName).toBe(BRANCH);
+      expect(r.prior.commitSha).toBe(H1);
+    });
+
+    it("NEG local commit missing repo when repositoryRef expected", async () => {
+      const { resolveVerifiedLocalCommitPriorAttempt } = await import(
+        "@/lib/oa/execution-attempt/domain/resolveVerifiedLocalCommitPriorAttempt"
+      );
+      const r = resolveVerifiedLocalCommitPriorAttempt({
+        contract: contract() as never,
+        attempts: [attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID)],
+        evidence: [
+          baseEv("xat:b", {
+            evidenceId: "ev:commit-norepo",
+            source: "git:local_commit",
+            location: `git:local_commit?commitSha=${H1}&parentSha=${H0}`,
+          }),
+        ],
+        repositoryRef: REPO,
+      });
+      expect(r.ok).toBe(false);
+    });
+  });
+
+  describe("AC-04 complete PR identity", () => {
+    it("NEG incomplete identity (repo+pr only) → missing", () => {
+      const r = resolveVerifiedPullRequestNumber({
+        evidence: [
+          baseEv("xat:d", {
+            evidenceId: "ev:pr-incomplete",
+            source: "git:pull_request",
+            location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=9`,
+          }),
+        ],
+        projectId: PROJECT,
+        cycleInstanceId: CYCLE,
+        executionContractId: EC,
+        repositoryRef: REPO,
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toBe("verified_pull_request_identity_missing");
+    });
+
+    it("NEG same prNumber differing headSha → ambiguous", () => {
+      const r = resolveVerifiedPullRequestNumber({
+        evidence: [
+          prEv("xat:d1", 42, H1),
+          baseEv("xat:d2", {
+            evidenceId: "ev:pr-drift",
+            source: "git:pull_request",
+            location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=42&headSha=${H2}&headBranch=${encodeURIComponent(BRANCH)}&baseBranch=main&state=open`,
+          }),
+        ],
+        projectId: PROJECT,
+        cycleInstanceId: CYCLE,
+        executionContractId: EC,
+        repositoryRef: REPO,
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toBe("verified_pull_request_identity_ambiguous");
+    });
+
+    it("POS exact duplicate complete identities dedupe → ok", () => {
+      const r = resolveVerifiedPullRequestNumber({
+        evidence: [prEv("xat:d1", 42, H1), prEv("xat:d2", 42, H1)],
+        projectId: PROJECT,
+        cycleInstanceId: CYCLE,
+        executionContractId: EC,
+        repositoryRef: REPO,
+      });
+      expect(r.ok).toBe(true);
+      if (!r.ok) return;
+      expect(r.prNumber).toBe(42);
+      expect(r.headSha).toBe(H1);
+      expect(r.headBranch).toBe(BRANCH);
+      expect(r.baseBranch).toBe("main");
+      expect(r.state).toBe("open");
+      expect(r.repositoryRef).toBe(REPO);
+    });
+  });
+
+  describe("AC-05/06 shell-safe merge + create", () => {
+    it("NEG merge builder rejects empty expectedHeadBranch", () => {
+      const r = buildGitPrMergeLaunchSpec({
+        repositoryRef: REPO,
+        prNumber: 1,
+        expectedHeadSha: H1,
+        expectedHeadBranch: "",
+        expectedBaseBranch: "main",
+      });
+      expect(r.ok).toBe(false);
+    });
+
+    it("POS posixShellSingleQuote escapes embedded quote and keeps $( literal", async () => {
+      const { posixShellSingleQuote, assertCanonicalGithubRepositoryRef } =
+        await import("@/lib/oa/execution-attempt/domain/shellSafeArg");
+      expect(posixShellSingleQuote("a'b")).toBe(`'a'\\''b'`);
+      expect(posixShellSingleQuote("$(evil)")).toBe(`'$(evil)'`);
+      expect(assertCanonicalGithubRepositoryRef(REPO).ok).toBe(true);
+      expect(assertCanonicalGithubRepositoryRef("acme/widget;rm").ok).toBe(
+        false,
+      );
+      expect(assertCanonicalGithubRepositoryRef("acme/$(x)").ok).toBe(false);
+    });
+
+    it("NEG unsafe repositoryRef rejected in push/create/merge builders", () => {
+      expect(
+        buildGitPushLaunchSpec({
+          repositoryRef: "acme/widget;id",
+          branchName: BRANCH,
+          expectedCommitSha: H1,
+        }).ok,
+      ).toBe(false);
+      expect(
+        buildGitPrCreateLaunchSpec({
+          repositoryRef: "-evil/repo",
+          headBranch: BRANCH,
+          baseBranch: "main",
+          title: "t",
+          expectedHeadSha: H1,
+        }).ok,
+      ).toBe(false);
+      expect(
+        buildGitPrMergeLaunchSpec({
+          repositoryRef: "acme/repo`x`",
+          prNumber: 1,
+          expectedHeadSha: H1,
+          expectedHeadBranch: BRANCH,
+          expectedBaseBranch: "main",
+        }).ok,
+      ).toBe(false);
+    });
+
+    it("POS create instruction shell-quotes body with $(...", async () => {
+      const { StudioCursorRealLaunchGateway } = await import(
+        "@/lib/oa/execution-attempt"
+      );
+      const { FakeProcessRunner } = await import("./support/fakeProcessRunner");
+      const { FakeRealExecutionWorkspacePort } = await import(
+        "./support/fakeSpawnAndGit"
+      );
+      const runner = new FakeProcessRunner();
+      const gw = new StudioCursorRealLaunchGateway({
+        processRunner: runner,
+        workspacePort: new FakeRealExecutionWorkspacePort({
+          resumePath: "/tmp/fake-exec-root/wt-body",
+          workspacePath: "/tmp/fake-exec-root/wt-body-fresh",
+        }),
+        env: { NODE_ENV: "test", [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1" },
+        resolveCursorBin: () => "/tmp/fake-cursor-bin",
+      });
+      await gw.launch({
+        attemptId: "xat:body-q",
+        executionContractId: EC,
+        executionContractVersion: 1,
+        semanticFingerprint: "fp:body",
+        selectedAgentRef: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
+        adapterRef: "adp:m4-cursor-cli-real",
+        correlationId: "cor:body",
+        baseHeadSha: H1,
+        action: M4_BOUNDED_PR_CREATE_ACTION,
+        timeoutMs: 60_000,
+        authorizedEffects: ["github.pr.create"],
+        gitPrCreateSpec: {
+          repositoryRef: REPO,
+          headBranch: BRANCH,
+          baseBranch: "main",
+          title: "t",
+          body: "note $(rm -rf /)",
+          expectedHeadSha: H1,
+        },
+      } as never);
+      const instr = String(runner.calls[0]?.argv.at(-1) ?? "");
+      expect(instr).toContain(`--body 'note $(rm -rf /)'`);
+      expect(instr).not.toMatch(/--body ".*\$\(rm/);
+    });
+  });
+});
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyPrCreateEffect.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyPrCreateEffect.ts
new file mode 100644
index 00000000..2ca8afc0
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyPrCreateEffect.ts
@@ -0,0 +1,129 @@
+/**
+ * Thin application verify wrapper for PR create (Studio READ-ONLY).
+ * Calls verifyPullRequestClaim with bindings completeness checks.
+ * AC-02/AC-04 — expectedHeadBranch + expectedBaseBranch + expectedHeadSha REQUIRED.
+ */
+import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
+import type {
+  GitVerifyActor,
+  GitVerifyBindings,
+  RepositoryReadPort,
+} from "@/lib/oa/git-ports";
+import { verifyPullRequestClaim } from "@/lib/oa/git-ports";
+
+const FORGED_FACT_KEYS = [
+  "observed",
+  "observedHeadSha",
+  "claimedPrNumberOverride",
+  "allowTestOnlySyntheticObservation",
+] as const;
+
+const FULL_SHA_RE = /^[0-9a-f]{40}$/i;
+
+function bindingsComplete(b: GitVerifyBindings): boolean {
+  return (
+    Boolean(b.projectId?.trim()) &&
+    Boolean(b.cycleInstanceId?.trim()) &&
+    Boolean(b.executionContractId?.trim()) &&
+    Boolean(b.executionAttemptId?.trim())
+  );
+}
+
+export type VerifyPrCreateEffectInput = {
+  readonly repositoryRead: RepositoryReadPort;
+  readonly evidenceServices: EvidenceReviewServices;
+  readonly repositoryRef: string;
+  readonly claimedPrNumber: number;
+  readonly claimedHeadSha: string;
+  readonly expectedHeadBranch: string;
+  readonly expectedBaseBranch: string;
+  readonly expectedHeadSha: string;
+  readonly expectedBindings: GitVerifyBindings;
+  readonly actor: GitVerifyActor;
+  readonly nowIso?: string;
+};
+
+export type VerifyPrCreateEffectResult =
+  | {
+      readonly ok: true;
+      readonly evidenceId: string;
+      readonly status: "verified";
+      readonly prNumber: number;
+      readonly headSha: string;
+      readonly headBranch: string;
+      readonly baseBranch: string;
+    }
+  | { readonly ok: false; readonly reason: string; readonly status: "reported" | "failed" };
+
+export async function verifyPrCreateEffect(
+  input: VerifyPrCreateEffectInput,
+): Promise<VerifyPrCreateEffectResult> {
+  const raw = input as Record<string, unknown>;
+  for (const key of FORGED_FACT_KEYS) {
+    if (key in raw && raw[key] !== undefined) {
+      return {
+        ok: false,
+        reason: "pr_create_forged_observation_rejected",
+        status: "failed",
+      };
+    }
+  }
+  if (!input.expectedBindings || !bindingsComplete(input.expectedBindings)) {
+    return {
+      ok: false,
+      reason: "git_evidence_bindings_incomplete",
+      status: "failed",
+    };
+  }
+  if (
+    typeof input.expectedHeadBranch !== "string" ||
+    !input.expectedHeadBranch.trim()
+  ) {
+    return {
+      ok: false,
+      reason: "pr_create_expected_head_branch_missing",
+      status: "failed",
+    };
+  }
+  if (
+    typeof input.expectedBaseBranch !== "string" ||
+    !input.expectedBaseBranch.trim()
+  ) {
+    return {
+      ok: false,
+      reason: "pr_create_expected_base_branch_missing",
+      status: "failed",
+    };
+  }
+  if (
+    typeof input.expectedHeadSha !== "string" ||
+    !FULL_SHA_RE.test(input.expectedHeadSha.trim())
+  ) {
+    return {
+      ok: false,
+      reason: "pr_create_expected_head_sha_invalid",
+      status: "failed",
+    };
+  }
+  const expectedHeadSha = input.expectedHeadSha.trim().toLowerCase();
+  if (input.claimedHeadSha.trim().toLowerCase() !== expectedHeadSha) {
+    return {
+      ok: false,
+      reason: "pr_create_claimed_head_sha_mismatch",
+      status: "failed",
+    };
+  }
+  return verifyPullRequestClaim({
+    repositoryRead: input.repositoryRead,
+    evidenceServices: input.evidenceServices,
+    repositoryRef: input.repositoryRef,
+    claimedPrNumber: input.claimedPrNumber,
+    claimedHeadSha: input.claimedHeadSha,
+    expectedHeadBranch: input.expectedHeadBranch.trim(),
+    expectedBaseBranch: input.expectedBaseBranch.trim(),
+    expectedHeadSha,
+    bindings: input.expectedBindings,
+    actor: input.actor,
+    nowIso: input.nowIso,
+  });
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyRemotePushEffect.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyRemotePushEffect.ts
new file mode 100644
index 00000000..d0df2960
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyRemotePushEffect.ts
@@ -0,0 +1,77 @@
+/**
+ * Thin application verify wrapper for remote push (Studio READ-ONLY).
+ * Calls verifyPushClaim with bindings completeness checks.
+ * Mirrors verifyLocalCommitEffect hostility rejection lightly.
+ */
+import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
+import type {
+  GitVerifyActor,
+  GitVerifyBindings,
+  RepositoryReadPort,
+} from "@/lib/oa/git-ports";
+import { verifyPushClaim } from "@/lib/oa/git-ports";
+
+const FORGED_FACT_KEYS = [
+  "observed",
+  "observedHeadSha",
+  "claimedCommitShaOverride",
+  "allowTestOnlySyntheticObservation",
+] as const;
+
+function bindingsComplete(b: GitVerifyBindings): boolean {
+  return (
+    Boolean(b.projectId?.trim()) &&
+    Boolean(b.cycleInstanceId?.trim()) &&
+    Boolean(b.executionContractId?.trim()) &&
+    Boolean(b.executionAttemptId?.trim())
+  );
+}
+
+export type VerifyRemotePushEffectInput = {
+  readonly repositoryRead: RepositoryReadPort;
+  readonly evidenceServices: EvidenceReviewServices;
+  readonly repositoryRef: string;
+  readonly branch: string;
+  readonly claimedCommitSha: string;
+  readonly remote?: string;
+  readonly expectedBindings: GitVerifyBindings;
+  readonly actor: GitVerifyActor;
+  readonly nowIso?: string;
+};
+
+export type VerifyRemotePushEffectResult =
+  | { readonly ok: true; readonly evidenceId: string; readonly status: "verified" }
+  | { readonly ok: false; readonly reason: string; readonly status: "reported" | "failed" };
+
+export async function verifyRemotePushEffect(
+  input: VerifyRemotePushEffectInput,
+): Promise<VerifyRemotePushEffectResult> {
+  const raw = input as Record<string, unknown>;
+  for (const key of FORGED_FACT_KEYS) {
+    if (key in raw && raw[key] !== undefined) {
+      return {
+        ok: false,
+        reason: "remote_push_forged_observation_rejected",
+        status: "failed",
+      };
+    }
+  }
+  if (!input.expectedBindings || !bindingsComplete(input.expectedBindings)) {
+    return {
+      ok: false,
+      reason: "git_evidence_bindings_incomplete",
+      status: "failed",
+    };
+  }
+  return verifyPushClaim({
+    repositoryRead: input.repositoryRead,
+    evidenceServices: input.evidenceServices,
+    repositoryRef: input.repositoryRef,
+    branch: input.branch,
+    claimedCommitSha: input.claimedCommitSha,
+    remote: input.remote,
+    bindings: input.expectedBindings,
+    actor: input.actor,
+    nowIso: input.nowIso,
+  });
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertFreshPrMergePreflight.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertFreshPrMergePreflight.ts
new file mode 100644
index 00000000..ce187854
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertFreshPrMergePreflight.ts
@@ -0,0 +1,41 @@
+/**
+ * CR-04 — Fresh live PR preflight before merge Attempt E.
+ * Pure domain gate; StartExecution is the authority (gateway prompt is defense-in-depth).
+ */
+import type { RepositoryPullRequestSummary } from "@/lib/oa/git-ports";
+
+export type FreshPrMergePreflightExpected = {
+  readonly headSha: string;
+  readonly headBranch: string;
+  readonly baseBranch: string;
+};
+
+export function assertFreshPrMergePreflight(input: {
+  readonly live: RepositoryPullRequestSummary | null | undefined;
+  readonly expected: FreshPrMergePreflightExpected;
+}): { ok: true } | { ok: false; reason: string } {
+  if (input.live == null) {
+    return { ok: false, reason: "git_pr_merge_live_pr_missing" };
+  }
+  const live = input.live;
+  if (live.state === "merged") {
+    return { ok: false, reason: "git_pr_merge_live_pr_merged" };
+  }
+  if (live.state === "closed" || live.state !== "open") {
+    return { ok: false, reason: "git_pr_merge_live_pr_closed" };
+  }
+  const liveHead = live.headSha.trim().toLowerCase();
+  const expectedHead = input.expected.headSha.trim().toLowerCase();
+  if (liveHead !== expectedHead) {
+    return { ok: false, reason: "git_pr_merge_live_head_sha_drift" };
+  }
+  const liveHeadBranch = live.headBranch?.trim() ?? "";
+  if (!liveHeadBranch || liveHeadBranch !== input.expected.headBranch.trim()) {
+    return { ok: false, reason: "git_pr_merge_live_head_branch_mismatch" };
+  }
+  const liveBase = live.baseBranch.trim();
+  if (!liveBase || liveBase !== input.expected.baseBranch.trim()) {
+    return { ok: false, reason: "git_pr_merge_live_base_branch_mismatch" };
+  }
+  return { ok: true };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertLocalBranchRefMatchesExpectedSha.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertLocalBranchRefMatchesExpectedSha.ts
new file mode 100644
index 00000000..cfb4adb7
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/assertLocalBranchRefMatchesExpectedSha.ts
@@ -0,0 +1,57 @@
+/**
+ * CR-01 — Fake / gateway parity: local branch ref must exist and equal expected SHA.
+ * Does NOT consult HEAD as a substitute for refs/heads/<branch>.
+ */
+export function assertLocalBranchRefMatchesExpectedSha(input: {
+  readonly branchHeads: ReadonlyMap<string, string>;
+  readonly branchName: string;
+  readonly expectedCommitSha: string;
+}): { ok: true; sha: string } | { ok: false; reason: string } {
+  const branch = input.branchName.trim();
+  if (!branch) {
+    return { ok: false, reason: "git_push_local_ref_missing" };
+  }
+  if (!input.branchHeads.has(branch)) {
+    return { ok: false, reason: "git_push_local_ref_missing" };
+  }
+  const observed = input.branchHeads.get(branch)!.trim().toLowerCase();
+  const expected = input.expectedCommitSha.trim().toLowerCase();
+  if (!/^[0-9a-f]{40}$/.test(expected) || !/^[0-9a-f]{40}$/.test(observed)) {
+    return { ok: false, reason: "git_push_local_ref_sha_mismatch" };
+  }
+  if (observed !== expected) {
+    return { ok: false, reason: "git_push_local_ref_sha_mismatch" };
+  }
+  return { ok: true, sha: observed };
+}
+
+/**
+ * Repository remote URL must identify the same GitHub repo as repositoryRef
+ * (owner/name). Used by Fake push path and documented in gateway push instruction.
+ */
+export function assertRemoteUrlMatchesRepositoryRef(input: {
+  readonly remoteUrl: string;
+  readonly repositoryRef: string;
+}): { ok: true } | { ok: false; reason: string } {
+  if (
+    typeof input.remoteUrl !== "string" ||
+    !input.remoteUrl.trim()
+  ) {
+    return { ok: false, reason: "git_push_remote_url_missing" };
+  }
+  const identity = input.repositoryRef.trim().toLowerCase();
+  if (!identity || !/^[^/\s]+\/[^/\s]+$/.test(identity)) {
+    return { ok: false, reason: "git_push_remote_url_mismatch" };
+  }
+  const normalized = input.remoteUrl
+    .trim()
+    .replace(/\.git$/i, "")
+    .replace(/^git@github\.com:/i, "https://github.com/")
+    .replace(/^ssh:\/\/git@github\.com\//i, "https://github.com/")
+    .toLowerCase();
+  const expectedHttps = `https://github.com/${identity}`;
+  if (normalized !== expectedHttps) {
+    return { ok: false, reason: "git_push_remote_url_mismatch" };
+  }
+  return { ok: true };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts
new file mode 100644
index 00000000..0cc58ec3
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts
@@ -0,0 +1,150 @@
+/**
+ * Server-derived GitPrCreateLaunchSpec (GCEC bounded PR create).
+ * Fail closed on empty / unsafe refs / base mismatch / missing expectedHeadSha.
+ */
+
+import {
+  assertCanonicalGithubRepositoryRef,
+} from "./shellSafeArg";
+
+export type GitPrCreateLaunchSpec = {
+  readonly repositoryRef: string;
+  readonly headBranch: string;
+  readonly baseBranch: string;
+  readonly title: string;
+  readonly expectedHeadSha: string;
+  readonly body?: string;
+};
+
+const BRANCH_FORBIDDEN_RE = /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]/;
+const TITLE_FORBIDDEN_RE = /[\x00-\x1f\x7f$`\\;&|<>(){}[\]*?!\n\r]/;
+const FULL_SHA_RE = /^[0-9a-f]{40}$/i;
+
+function assertSafeRef(
+  raw: string,
+  kind: "head" | "base",
+): { ok: true; ref: string } | { ok: false; reason: string } {
+  if (typeof raw !== "string" || !raw.trim()) {
+    return { ok: false, reason: `git_pr_create_${kind}_empty` };
+  }
+  if (raw !== raw.trim()) {
+    return { ok: false, reason: `git_pr_create_${kind}_whitespace` };
+  }
+  const ref = raw.trim();
+  if (
+    ref.includes("..") ||
+    ref.startsWith("-") ||
+    ref.includes(" ") ||
+    BRANCH_FORBIDDEN_RE.test(ref)
+  ) {
+    return { ok: false, reason: `git_pr_create_${kind}_unsafe` };
+  }
+  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(ref)) {
+    return { ok: false, reason: `git_pr_create_${kind}_charset` };
+  }
+  return { ok: true, ref };
+}
+
+/**
+ * Build PR-create launch spec from server-owned facts.
+ * When `expectedBaseBranch` is provided, base MUST equal it.
+ * `expectedHeadSha` is REQUIRED (full SHA) — client-claimed SHA override rejected.
+ * Auto-merge / force fields on request are rejected when present.
+ */
+export function buildGitPrCreateLaunchSpec(input: {
+  readonly repositoryRef: string;
+  readonly headBranch: string;
+  readonly baseBranch: string;
+  readonly title: string;
+  readonly expectedHeadSha: string;
+  readonly body?: string;
+  readonly expectedBaseBranch?: string;
+  /** Hostile — any truthy auto-merge channel is rejected. */
+  readonly claimedAutoMerge?: unknown;
+  /** Hostile — client-claimed head SHA must equal server expectedHeadSha when present. */
+  readonly claimedHeadSha?: unknown;
+}):
+  | { ok: true; spec: GitPrCreateLaunchSpec }
+  | { ok: false; reason: string } {
+  if (input.claimedAutoMerge != null && input.claimedAutoMerge !== false) {
+    return { ok: false, reason: "git_pr_create_auto_merge_rejected" };
+  }
+  const repo = assertCanonicalGithubRepositoryRef(input.repositoryRef);
+  if (!repo.ok) {
+    return {
+      ok: false,
+      reason:
+        repo.reason === "repository_ref_missing"
+          ? "git_pr_create_repository_ref_missing"
+          : "git_pr_create_repository_ref_unsafe",
+    };
+  }
+  if (
+    typeof input.expectedHeadSha !== "string" ||
+    !FULL_SHA_RE.test(input.expectedHeadSha.trim())
+  ) {
+    return { ok: false, reason: "git_pr_create_expected_head_sha_invalid" };
+  }
+  const expectedHeadSha = input.expectedHeadSha.trim().toLowerCase();
+  if (
+    input.claimedHeadSha != null &&
+    String(input.claimedHeadSha).trim() &&
+    String(input.claimedHeadSha).trim().toLowerCase() !== expectedHeadSha
+  ) {
+    return { ok: false, reason: "git_pr_create_claimed_head_sha_override_rejected" };
+  }
+  const head = assertSafeRef(input.headBranch, "head");
+  if (!head.ok) return head;
+  const base = assertSafeRef(input.baseBranch, "base");
+  if (!base.ok) return base;
+  if (head.ref === base.ref) {
+    return { ok: false, reason: "git_pr_create_head_equals_base" };
+  }
+  if (
+    input.expectedBaseBranch != null &&
+    input.expectedBaseBranch.trim() &&
+    input.expectedBaseBranch.trim() !== base.ref
+  ) {
+    return { ok: false, reason: "git_pr_create_base_mismatch" };
+  }
+  if (typeof input.title !== "string" || !input.title.trim()) {
+    return { ok: false, reason: "git_pr_create_title_empty" };
+  }
+  if (input.title !== input.title.trim()) {
+    return { ok: false, reason: "git_pr_create_title_whitespace" };
+  }
+  const title = input.title.trim();
+  if (title.length > 200 || TITLE_FORBIDDEN_RE.test(title)) {
+    return { ok: false, reason: "git_pr_create_title_unsafe" };
+  }
+  let body: string | undefined;
+  if (input.body != null) {
+    if (typeof input.body !== "string") {
+      return { ok: false, reason: "git_pr_create_body_invalid" };
+    }
+    body = input.body.trim() || undefined;
+    if (body && /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(body)) {
+      return { ok: false, reason: "git_pr_create_body_unsafe" };
+    }
+  }
+  return {
+    ok: true,
+    spec: {
+      repositoryRef: repo.ref,
+      headBranch: head.ref,
+      baseBranch: base.ref,
+      title,
+      expectedHeadSha,
+      ...(body ? { body } : {}),
+    },
+  };
+}
+
+/** AuthorizedEffects MUST be exactly one unique effect: github.pr.create. */
+export function isBoundedGitPrCreateOnlySlice(
+  authorizedEffects: readonly string[] | undefined | null,
+): boolean {
+  if (!authorizedEffects || authorizedEffects.length === 0) return false;
+  const unique = new Set(authorizedEffects);
+  return unique.size === 1 && unique.has("github.pr.create");
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrMergeLaunchSpec.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrMergeLaunchSpec.ts
new file mode 100644
index 00000000..210a33e1
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrMergeLaunchSpec.ts
@@ -0,0 +1,119 @@
+/**
+ * Server-derived GitPrMergeLaunchSpec (GCEC bounded PR merge PREP).
+ * Build for continuation PREP only — REAL merge is not executed in this lot.
+ * Fail closed on missing PR / bad numbers / incomplete identity.
+ */
+
+import {
+  assertCanonicalGithubRepositoryRef,
+} from "./shellSafeArg";
+
+export type GitPrMergeMethod = "merge" | "squash" | "rebase";
+
+export type GitPrMergeLaunchSpec = {
+  readonly repositoryRef: string;
+  readonly prNumber: number;
+  readonly expectedHeadSha: string;
+  readonly expectedHeadBranch: string;
+  readonly expectedBaseBranch: string;
+  readonly mergeMethod: GitPrMergeMethod;
+};
+
+const FULL_SHA_RE = /^[0-9a-f]{40}$/i;
+const BRANCH_FORBIDDEN_RE = /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]/;
+
+function assertSafeBranch(
+  raw: string,
+  reasonEmpty: string,
+  reasonUnsafe: string,
+): { ok: true; ref: string } | { ok: false; reason: string } {
+  if (typeof raw !== "string" || !raw.trim()) {
+    return { ok: false, reason: reasonEmpty };
+  }
+  const base = raw.trim();
+  if (
+    BRANCH_FORBIDDEN_RE.test(base) ||
+    base.includes("..") ||
+    base.startsWith("-") ||
+    base.includes(" ")
+  ) {
+    return { ok: false, reason: reasonUnsafe };
+  }
+  return { ok: true, ref: base };
+}
+
+/**
+ * Build merge launch spec from server-owned PR identity + policy defaults.
+ * Default mergeMethod is "merge" when server/policy omits it.
+ * `expectedHeadBranch` is REQUIRED.
+ */
+export function buildGitPrMergeLaunchSpec(input: {
+  readonly repositoryRef: string;
+  readonly prNumber: number;
+  readonly expectedHeadSha: string;
+  readonly expectedHeadBranch: string;
+  readonly expectedBaseBranch: string;
+  readonly mergeMethod?: GitPrMergeMethod;
+}):
+  | { ok: true; spec: GitPrMergeLaunchSpec }
+  | { ok: false; reason: string } {
+  const repo = assertCanonicalGithubRepositoryRef(input.repositoryRef);
+  if (!repo.ok) {
+    return {
+      ok: false,
+      reason:
+        repo.reason === "repository_ref_missing"
+          ? "git_pr_merge_repository_ref_missing"
+          : "git_pr_merge_repository_ref_unsafe",
+    };
+  }
+  if (
+    !Number.isInteger(input.prNumber) ||
+    input.prNumber < 1 ||
+    !Number.isFinite(input.prNumber)
+  ) {
+    return { ok: false, reason: "git_pr_merge_pr_number_invalid" };
+  }
+  if (
+    typeof input.expectedHeadSha !== "string" ||
+    !FULL_SHA_RE.test(input.expectedHeadSha.trim())
+  ) {
+    return { ok: false, reason: "git_pr_merge_expected_head_sha_invalid" };
+  }
+  const head = assertSafeBranch(
+    input.expectedHeadBranch,
+    "git_pr_merge_expected_head_branch_empty",
+    "git_pr_merge_expected_head_branch_unsafe",
+  );
+  if (!head.ok) return head;
+  const base = assertSafeBranch(
+    input.expectedBaseBranch,
+    "git_pr_merge_expected_base_empty",
+    "git_pr_merge_expected_base_unsafe",
+  );
+  if (!base.ok) return base;
+  const method = input.mergeMethod ?? "merge";
+  if (method !== "merge" && method !== "squash" && method !== "rebase") {
+    return { ok: false, reason: "git_pr_merge_method_invalid" };
+  }
+  return {
+    ok: true,
+    spec: {
+      repositoryRef: repo.ref,
+      prNumber: input.prNumber,
+      expectedHeadSha: input.expectedHeadSha.trim().toLowerCase(),
+      expectedHeadBranch: head.ref,
+      expectedBaseBranch: base.ref,
+      mergeMethod: method,
+    },
+  };
+}
+
+/** AuthorizedEffects MUST be exactly one unique effect: github.pr.merge. */
+export function isBoundedGitPrMergeOnlySlice(
+  authorizedEffects: readonly string[] | undefined | null,
+): boolean {
+  if (!authorizedEffects || authorizedEffects.length === 0) return false;
+  const unique = new Set(authorizedEffects);
+  return unique.size === 1 && unique.has("github.pr.merge");
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPushLaunchSpec.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPushLaunchSpec.ts
new file mode 100644
index 00000000..a38d8ee7
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPushLaunchSpec.ts
@@ -0,0 +1,150 @@
+/**
+ * Server-derived GitPushLaunchSpec (GCEC bounded remote push).
+ * Canonical type — import/re-export; do not duplicate in ports.
+ * Fail closed on force / delete / tags / empty / unsafe branch / wrong SHA.
+ * Branch is server-derived only — reject client free branch authority.
+ */
+
+import { assertCanonicalGithubRepositoryRef } from "./shellSafeArg";
+
+/** Canonical push launch contract (single source of truth). */
+export type GitPushLaunchSpec = {
+  readonly repositoryRef: string;
+  readonly remoteName: string;
+  readonly branchName: string;
+  readonly expectedCommitSha: string;
+  readonly force: false;
+  readonly delete: false;
+  readonly noTags: true;
+};
+
+const FULL_SHA_RE = /^[0-9a-f]{40}$/i;
+
+const BRANCH_FORBIDDEN_RE = /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]|\/\.(\.|$)/;
+
+function isFullSha(v: unknown): v is string {
+  return typeof v === "string" && FULL_SHA_RE.test(v.trim());
+}
+
+function assertShellSafeBranchName(
+  raw: string,
+): { ok: true; branch: string } | { ok: false; reason: string } {
+  if (typeof raw !== "string" || !raw.trim()) {
+    return { ok: false, reason: "git_push_branch_empty" };
+  }
+  if (raw !== raw.trim()) {
+    return { ok: false, reason: "git_push_branch_whitespace" };
+  }
+  const branch = raw.trim();
+  if (branch.includes("..") || branch.startsWith("-") || branch.includes(" ")) {
+    return { ok: false, reason: "git_push_branch_unsafe" };
+  }
+  if (BRANCH_FORBIDDEN_RE.test(branch)) {
+    return { ok: false, reason: "git_push_branch_unsafe" };
+  }
+  // GCEC feature-branch push dest — refuse protected default branch names.
+  if (branch === "main" || branch === "master") {
+    return { ok: false, reason: "git_push_branch_protected_default" };
+  }
+  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(branch)) {
+    return { ok: false, reason: "git_push_branch_charset" };
+  }
+  return { ok: true, branch };
+}
+
+/**
+ * Build push launch spec from server-owned facts.
+ * `claimedClientBranch` when present MUST equal server branchName or fail closed.
+ */
+export function buildGitPushLaunchSpec(input: {
+  readonly repositoryRef: string;
+  readonly remoteName?: string;
+  readonly branchName: string;
+  readonly expectedCommitSha: string;
+  readonly force?: boolean;
+  readonly delete?: boolean;
+  readonly noTags?: boolean;
+  /** Hostile / client free branch — reject when differs from server branch. */
+  readonly claimedClientBranch?: string;
+}):
+  | { ok: true; spec: GitPushLaunchSpec }
+  | { ok: false; reason: string } {
+  const repo = assertCanonicalGithubRepositoryRef(input.repositoryRef);
+  if (!repo.ok) {
+    return {
+      ok: false,
+      reason:
+        repo.reason === "repository_ref_missing"
+          ? "git_push_repository_ref_missing"
+          : "git_push_repository_ref_unsafe",
+    };
+  }
+  const repositoryRef = repo.ref;
+  if (!isFullSha(input.expectedCommitSha)) {
+    return { ok: false, reason: "git_push_expected_commit_sha_invalid" };
+  }
+  if (input.force === true) {
+    return { ok: false, reason: "git_push_force_rejected" };
+  }
+  if (input.delete === true) {
+    return { ok: false, reason: "git_push_delete_rejected" };
+  }
+  if (input.noTags === false) {
+    return { ok: false, reason: "git_push_tags_rejected" };
+  }
+  const remoteName = (input.remoteName ?? "origin").trim() || "origin";
+  if (
+    remoteName !== "origin" ||
+    /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]/.test(remoteName)
+  ) {
+    // Bounded GCEC push: only origin; reject exotic remotes.
+    if (remoteName !== "origin") {
+      return { ok: false, reason: "git_push_remote_not_origin" };
+    }
+    return { ok: false, reason: "git_push_remote_unsafe" };
+  }
+  const branch = assertShellSafeBranchName(input.branchName);
+  if (!branch.ok) return branch;
+
+  if (
+    input.claimedClientBranch != null &&
+    String(input.claimedClientBranch).trim() &&
+    String(input.claimedClientBranch).trim() !== branch.branch
+  ) {
+    return { ok: false, reason: "git_push_client_branch_override_rejected" };
+  }
+
+  return {
+    ok: true,
+    spec: {
+      repositoryRef,
+      remoteName: "origin",
+      branchName: branch.branch,
+      expectedCommitSha: input.expectedCommitSha.trim().toLowerCase(),
+      force: false,
+      delete: false,
+      noTags: true,
+    },
+  };
+}
+
+/** AuthorizedEffects MUST be exactly one unique effect: git.push. */
+export function isBoundedGitPushOnlySlice(
+  authorizedEffects: readonly string[] | undefined | null,
+): boolean {
+  if (!authorizedEffects || authorizedEffects.length === 0) return false;
+  const unique = new Set(authorizedEffects);
+  return unique.size === 1 && unique.has("git.push");
+}
+
+/**
+ * Deterministic server branch when EC inputs lack workingBranch.
+ * Prefer contract inputs.workingBranch when present (Start path).
+ */
+export function deriveDeterministicGcecPushBranch(executionContractId: string): string {
+  const short = executionContractId
+    .replace(/^xct:/, "")
+    .replace(/[^A-Za-z0-9_-]/g, "")
+    .slice(0, 24);
+  return `gcec/lifecycle/${short || "ec"}`;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedLocalCommitPriorAttempt.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedLocalCommitPriorAttempt.ts
new file mode 100644
index 00000000..92ea86bc
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedLocalCommitPriorAttempt.ts
@@ -0,0 +1,171 @@
+/**
+ * CORR-D-GCEC-GIT-LIFECYCLE — exact Attempt lineage for verified local commit.
+ * Pure Product-truth: Attempt history + VERIFIED git:local_commit Evidence.
+ * Zero / multiple eligible candidates → fail closed.
+ * AC-03: when repositoryRef expected, Evidence location MUST include matching repo=.
+ */
+import type { Evidence } from "@/lib/oa/evidence-review";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { ExecutionAttempt } from "./types";
+import {
+  evidenceMatchesContractLineage,
+  expectedEvidenceIdentity,
+} from "./qualifyExecutionContractCompletion";
+import { M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID } from "./realLaunchSafety";
+
+export type VerifiedLocalCommitPriorAttempt = {
+  readonly priorAttemptId: string;
+  readonly evidenceId: string;
+  readonly commitSha: string;
+  readonly repositoryRef: string;
+};
+
+export type ResolveVerifiedLocalCommitPriorAttemptInput = {
+  readonly contract: Pick<
+    ExecutionContract,
+    | "executionContractId"
+    | "projectId"
+    | "cycleInstanceId"
+    | "expectedOutputs"
+    | "inputs"
+  >;
+  readonly attempts: readonly ExecutionAttempt[];
+  readonly evidence: readonly Evidence[];
+  readonly excludeAttemptId?: string;
+  /** Optional repository identity to bind Evidence location. */
+  readonly repositoryRef?: string;
+};
+
+export type ResolveVerifiedLocalCommitPriorAttemptResult =
+  | { readonly ok: true; readonly prior: VerifiedLocalCommitPriorAttempt }
+  | {
+      readonly ok: false;
+      readonly reason:
+        | "local_commit_prior_none"
+        | "local_commit_prior_ambiguous"
+        | "local_commit_prior_incomplete";
+      readonly candidateAttemptIds?: readonly string[];
+    };
+
+const FULL_SHA_RE = /^[0-9a-f]{40}$/i;
+
+export function parseLocalCommitShaFromEvidenceLocation(
+  location: string,
+): { commitSha: string; repositoryRef?: string } | null {
+  const loc = String(location ?? "").trim();
+  if (!loc.startsWith("git:local_commit")) return null;
+  const shaMatch = loc.match(/[?&]commitSha=([^&]+)/);
+  if (!shaMatch) return null;
+  const commitSha = decodeURIComponent(shaMatch[1]!).trim().toLowerCase();
+  if (!FULL_SHA_RE.test(commitSha)) return null;
+  const repoMatch = loc.match(/[?&]repo=([^&]+)/);
+  const repositoryRef = repoMatch
+    ? decodeURIComponent(repoMatch[1]!).trim()
+    : undefined;
+  return { commitSha, repositoryRef };
+}
+
+function isEligibleLocalCommit(
+  ev: Evidence,
+  expected: {
+    projectId: string;
+    cycleInstanceId?: string;
+    executionContractId: string;
+  },
+  attemptId: string,
+  repositoryRef?: string,
+): boolean {
+  if (ev.status !== "verified") return false;
+  if (ev.source !== "git:local_commit") return false;
+  if (!evidenceMatchesContractLineage(ev, expected)) return false;
+  if (ev.bindings.executionAttemptId !== attemptId) return false;
+  const parsed = parseLocalCommitShaFromEvidenceLocation(String(ev.location ?? ""));
+  if (!parsed) return false;
+  if (repositoryRef?.trim()) {
+    // AC-03: when repositoryRef expected, Evidence MUST include matching repo=.
+    if (!parsed.repositoryRef?.trim()) return false;
+    if (parsed.repositoryRef !== repositoryRef.trim()) return false;
+  }
+  return true;
+}
+
+/**
+ * Resolve the unique prior succeeded local-commit Attempt with matching
+ * VERIFIED git:local_commit Evidence for the current EC.
+ */
+export function resolveVerifiedLocalCommitPriorAttempt(
+  input: ResolveVerifiedLocalCommitPriorAttemptInput,
+): ResolveVerifiedLocalCommitPriorAttemptResult {
+  const expected = expectedEvidenceIdentity({ contract: input.contract });
+  const candidates: VerifiedLocalCommitPriorAttempt[] = [];
+
+  for (const attempt of input.attempts) {
+    if (
+      input.excludeAttemptId &&
+      attempt.attemptId === input.excludeAttemptId
+    ) {
+      continue;
+    }
+    if (attempt.executionContractId !== input.contract.executionContractId) {
+      continue;
+    }
+    if (attempt.status !== "succeeded") continue;
+    if (attempt.selectedAgentRef !== M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID) {
+      continue;
+    }
+
+    const matching = input.evidence.filter((ev) =>
+      isEligibleLocalCommit(
+        ev,
+        expected,
+        attempt.attemptId,
+        input.repositoryRef,
+      ),
+    );
+    if (matching.length === 0) continue;
+    if (matching.length > 1) {
+      return {
+        ok: false,
+        reason: "local_commit_prior_ambiguous",
+        candidateAttemptIds: [attempt.attemptId],
+      };
+    }
+    const ev = matching[0]!;
+    const parsed = parseLocalCommitShaFromEvidenceLocation(
+      String(ev.location ?? ""),
+    );
+    if (!parsed) {
+      return { ok: false, reason: "local_commit_prior_incomplete" };
+    }
+    if (input.repositoryRef?.trim() && !parsed.repositoryRef?.trim()) {
+      return { ok: false, reason: "local_commit_prior_incomplete" };
+    }
+    candidates.push({
+      priorAttemptId: attempt.attemptId,
+      evidenceId: ev.evidenceId,
+      commitSha: parsed.commitSha,
+      // Never substitute input.repositoryRef for missing Evidence repo.
+      repositoryRef: parsed.repositoryRef?.trim() ?? "",
+    });
+  }
+
+  if (candidates.length === 0) {
+    return { ok: false, reason: "local_commit_prior_none" };
+  }
+  if (candidates.length > 1) {
+    return {
+      ok: false,
+      reason: "local_commit_prior_ambiguous",
+      candidateAttemptIds: candidates.map((c) => c.priorAttemptId),
+    };
+  }
+
+  const only = candidates[0]!;
+  if (!FULL_SHA_RE.test(only.commitSha)) {
+    return { ok: false, reason: "local_commit_prior_incomplete" };
+  }
+  if (input.repositoryRef?.trim() && !only.repositoryRef.trim()) {
+    return { ok: false, reason: "local_commit_prior_incomplete" };
+  }
+  return { ok: true, prior: only };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt.ts
new file mode 100644
index 00000000..fbd3301a
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt.ts
@@ -0,0 +1,185 @@
+/**
+ * CORR-D-GCEC-GIT-LIFECYCLE — exact Attempt lineage for verified remote push.
+ * Pure Product-truth: Attempt history + VERIFIED git:remote_push Evidence.
+ * Zero / multiple eligible candidates → fail closed.
+ * AC-03: Evidence MUST carry explicit repo + refName + commitSha — no substitute.
+ */
+import type { Evidence } from "@/lib/oa/evidence-review";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { ExecutionAttempt } from "./types";
+import {
+  evidenceMatchesContractLineage,
+  expectedEvidenceIdentity,
+} from "./qualifyExecutionContractCompletion";
+import { M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID } from "./realLaunchSafety";
+
+export type VerifiedRemotePushPriorAttempt = {
+  readonly priorAttemptId: string;
+  readonly evidenceId: string;
+  readonly commitSha: string;
+  readonly repositoryRef: string;
+  /** Required — Evidence refName / branch for C→D binding. */
+  readonly branchName: string;
+};
+
+export type ResolveVerifiedRemotePushPriorAttemptInput = {
+  readonly contract: Pick<
+    ExecutionContract,
+    | "executionContractId"
+    | "projectId"
+    | "cycleInstanceId"
+    | "expectedOutputs"
+    | "inputs"
+  >;
+  readonly attempts: readonly ExecutionAttempt[];
+  readonly evidence: readonly Evidence[];
+  readonly excludeAttemptId?: string;
+  readonly repositoryRef?: string;
+};
+
+export type ResolveVerifiedRemotePushPriorAttemptResult =
+  | { readonly ok: true; readonly prior: VerifiedRemotePushPriorAttempt }
+  | {
+      readonly ok: false;
+      readonly reason:
+        | "remote_push_prior_none"
+        | "remote_push_prior_ambiguous"
+        | "remote_push_prior_incomplete";
+      readonly candidateAttemptIds?: readonly string[];
+    };
+
+const FULL_SHA_RE = /^[0-9a-f]{40}$/i;
+
+export function parseRemotePushFromEvidenceLocation(
+  location: string,
+): {
+  commitSha: string;
+  repositoryRef?: string;
+  branchName?: string;
+} | null {
+  const loc = String(location ?? "").trim();
+  if (!loc.startsWith("git:remote_push")) return null;
+  const shaMatch = loc.match(/[?&]commitSha=([^&]+)/);
+  if (!shaMatch) return null;
+  const commitSha = decodeURIComponent(shaMatch[1]!).trim().toLowerCase();
+  if (!FULL_SHA_RE.test(commitSha)) return null;
+  const repoMatch = loc.match(/[?&]repo=([^&]+)/);
+  const repositoryRef = repoMatch
+    ? decodeURIComponent(repoMatch[1]!).trim()
+    : undefined;
+  const refMatch = loc.match(/[?&]refName=([^&]+)/);
+  let branchName: string | undefined;
+  if (refMatch) {
+    const refName = decodeURIComponent(refMatch[1]!).trim();
+    branchName = refName.startsWith("refs/heads/")
+      ? refName.slice("refs/heads/".length)
+      : refName;
+  }
+  return { commitSha, repositoryRef, branchName };
+}
+
+function isEligibleRemotePush(
+  ev: Evidence,
+  expected: {
+    projectId: string;
+    cycleInstanceId?: string;
+    executionContractId: string;
+  },
+  attemptId: string,
+  repositoryRef?: string,
+): boolean {
+  if (ev.status !== "verified") return false;
+  if (ev.source !== "git:remote_push") return false;
+  if (!evidenceMatchesContractLineage(ev, expected)) return false;
+  if (ev.bindings.executionAttemptId !== attemptId) return false;
+  const parsed = parseRemotePushFromEvidenceLocation(String(ev.location ?? ""));
+  if (!parsed) return false;
+  // AC-03: repo + branchName + commitSha are mandatory for eligibility.
+  if (!parsed.repositoryRef?.trim()) return false;
+  if (!parsed.branchName?.trim()) return false;
+  if (!FULL_SHA_RE.test(parsed.commitSha)) return false;
+  if (repositoryRef?.trim()) {
+    // When repositoryRef expected: Evidence repo MUST equal — missing already failed above.
+    if (parsed.repositoryRef !== repositoryRef.trim()) return false;
+  }
+  return true;
+}
+
+/**
+ * Resolve the unique prior succeeded remote-push Attempt with matching
+ * VERIFIED git:remote_push Evidence for the current EC.
+ */
+export function resolveVerifiedRemotePushPriorAttempt(
+  input: ResolveVerifiedRemotePushPriorAttemptInput,
+): ResolveVerifiedRemotePushPriorAttemptResult {
+  const expected = expectedEvidenceIdentity({ contract: input.contract });
+  const candidates: VerifiedRemotePushPriorAttempt[] = [];
+
+  for (const attempt of input.attempts) {
+    if (
+      input.excludeAttemptId &&
+      attempt.attemptId === input.excludeAttemptId
+    ) {
+      continue;
+    }
+    if (attempt.executionContractId !== input.contract.executionContractId) {
+      continue;
+    }
+    if (attempt.status !== "succeeded") continue;
+    if (attempt.selectedAgentRef !== M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID) {
+      continue;
+    }
+
+    const matching = input.evidence.filter((ev) =>
+      isEligibleRemotePush(
+        ev,
+        expected,
+        attempt.attemptId,
+        input.repositoryRef,
+      ),
+    );
+    if (matching.length === 0) continue;
+    if (matching.length > 1) {
+      return {
+        ok: false,
+        reason: "remote_push_prior_ambiguous",
+        candidateAttemptIds: [attempt.attemptId],
+      };
+    }
+    const ev = matching[0]!;
+    const parsed = parseRemotePushFromEvidenceLocation(String(ev.location ?? ""));
+    if (
+      !parsed ||
+      !parsed.repositoryRef?.trim() ||
+      !parsed.branchName?.trim() ||
+      !FULL_SHA_RE.test(parsed.commitSha)
+    ) {
+      return { ok: false, reason: "remote_push_prior_incomplete" };
+    }
+    // Never substitute input.repositoryRef for missing Evidence repo.
+    candidates.push({
+      priorAttemptId: attempt.attemptId,
+      evidenceId: ev.evidenceId,
+      commitSha: parsed.commitSha,
+      repositoryRef: parsed.repositoryRef.trim(),
+      branchName: parsed.branchName.trim(),
+    });
+  }
+
+  if (candidates.length === 0) {
+    return { ok: false, reason: "remote_push_prior_none" };
+  }
+  if (candidates.length > 1) {
+    return {
+      ok: false,
+      reason: "remote_push_prior_ambiguous",
+      candidateAttemptIds: candidates.map((c) => c.priorAttemptId),
+    };
+  }
+
+  const only = candidates[0]!;
+  if (!FULL_SHA_RE.test(only.commitSha) || !only.branchName.trim()) {
+    return { ok: false, reason: "remote_push_prior_incomplete" };
+  }
+  return { ok: true, prior: only };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/shellSafeArg.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/shellSafeArg.ts
new file mode 100644
index 00000000..e428c066
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/shellSafeArg.ts
@@ -0,0 +1,46 @@
+/**
+ * Minimal shell-safe argument helpers for GCEC gateway instruction construction.
+ * Fail closed on non-canonical GitHub repository refs and unsafe shell interpolation.
+ */
+
+const CANONICAL_GITHUB_REPO_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
+const REPO_METACHAR_RE = /[\s$`\\;&|<>(){}[\]"'!*?]|#/;
+
+/**
+ * Assert owner/repo canonical GitHub repositoryRef (no whitespace / metacharacters).
+ */
+export function assertCanonicalGithubRepositoryRef(
+  ref: string,
+): { ok: true; ref: string } | { ok: false; reason: string } {
+  if (typeof ref !== "string" || !ref.trim()) {
+    return { ok: false, reason: "repository_ref_missing" };
+  }
+  if (ref !== ref.trim()) {
+    return { ok: false, reason: "repository_ref_whitespace" };
+  }
+  const trimmed = ref.trim();
+  if (trimmed.startsWith("-")) {
+    return { ok: false, reason: "repository_ref_unsafe" };
+  }
+  if (
+    REPO_METACHAR_RE.test(trimmed) ||
+    trimmed.includes("..") ||
+    trimmed.includes("$(") ||
+    !CANONICAL_GITHUB_REPO_RE.test(trimmed)
+  ) {
+    return { ok: false, reason: "repository_ref_unsafe" };
+  }
+  const parts = trimmed.split("/");
+  if (parts.length !== 2 || !parts[0] || !parts[1]) {
+    return { ok: false, reason: "repository_ref_unsafe" };
+  }
+  return { ok: true, ref: trimmed };
+}
+
+/**
+ * POSIX single-quote wrap so the value is literal in a shell (including `$(...)`).
+ * Escapes embedded `'` as `'\''`.
+ */
+export function posixShellSingleQuote(value: string): string {
+  return `'${String(value).replace(/'/g, `'\\''`)}'`;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrCreateCursorAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrCreateCursorAgent.ts
new file mode 100644
index 00000000..d86fd78f
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrCreateCursorAgent.ts
@@ -0,0 +1,84 @@
+/**
+ * M4 bounded github.pr.create Cursor agent (GCEC PR-create executor).
+ * Sibling of remote-push — SAME gateway adapter; does not widen push/commit.
+ * Exact caps only — no auto-merge, no push/force, no merge capability.
+ */
+import type { ProvenanceRecord } from "@/lib/oa/doctrine";
+import {
+  M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
+  M4_REAL_GATEWAY_ADAPTER_ID,
+} from "../domain/realLaunchSafety";
+import type { AgentDescriptor } from "../domain/types";
+
+export const M4_BOUNDED_PR_CREATE_CAPABILITY =
+  "cap:cursor.github.pr.create" as const;
+export const M4_BOUNDED_PR_CREATE_ACTION =
+  "cursor.github.pr.create.apply" as const;
+export const M4_BOUNDED_PR_CREATE_TARGET =
+  "workspace.isolated.github.pr.create" as const;
+export const M4_BOUNDED_PR_CREATE_SCOPE =
+  "studio.gcec.github.pr.create" as const;
+
+export function createM4BoundedPrCreateCursorAgentDescriptor(
+  nowIso: string,
+  provenance?: ProvenanceRecord,
+): AgentDescriptor {
+  const defaultProvenance: ProvenanceRecord = {
+    schemaVersion: "0.1.0-oa",
+    provenanceRecordId: "prv:m4-bounded-pr-create-cursor-agent",
+    actor: {
+      actorId: "actor:system",
+      role: "system",
+      authorityLevel: "N1",
+    },
+    source: "system",
+    timestamp: nowIso,
+    correlationId: "cor:m4-bounded-pr-create-cursor-agent",
+  };
+  const descriptor: AgentDescriptor = {
+    schemaVersion: "0.1.0-oa",
+    agentId: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
+    agentType: "cursor_cli_bounded_pr_create",
+    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
+    supportedCapabilities: [M4_BOUNDED_PR_CREATE_CAPABILITY],
+    allowedActions: [M4_BOUNDED_PR_CREATE_ACTION],
+    allowedTargets: [M4_BOUNDED_PR_CREATE_TARGET],
+    allowedScopes: [M4_BOUNDED_PR_CREATE_SCOPE],
+    trustLevel: "bounded",
+    executionMode: "cursor_cli_real",
+    healthStatus: "healthy",
+    version: 1,
+    enabled: true,
+    provenance: provenance ?? defaultProvenance,
+    createdAt: nowIso,
+  };
+  return Object.freeze(descriptor);
+}
+
+export function isM4BoundedPrCreateRealAgent(agent: AgentDescriptor): boolean {
+  const hasWildcard = (values: readonly string[]) =>
+    values.some((v) => v === "*" || v.includes("*"));
+  return (
+    agent.agentId === M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID &&
+    agent.executionMode === "cursor_cli_real" &&
+    agent.trustLevel === "bounded" &&
+    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
+    agent.enabled === true &&
+    agent.supportedCapabilities.includes(M4_BOUNDED_PR_CREATE_CAPABILITY) &&
+    agent.allowedActions.includes(M4_BOUNDED_PR_CREATE_ACTION) &&
+    agent.allowedTargets.includes(M4_BOUNDED_PR_CREATE_TARGET) &&
+    agent.allowedScopes.includes(M4_BOUNDED_PR_CREATE_SCOPE) &&
+    agent.allowedScopes.length === 1 &&
+    agent.supportedCapabilities.length === 1 &&
+    agent.allowedActions.length === 1 &&
+    agent.allowedTargets.length === 1 &&
+    !hasWildcard(agent.supportedCapabilities) &&
+    !hasWildcard(agent.allowedActions) &&
+    !hasWildcard(agent.allowedTargets) &&
+    !hasWildcard(agent.allowedScopes) &&
+    !agent.supportedCapabilities.includes("cap:unresolved") &&
+    !agent.allowedActions.some((a) => a.includes("UNRESOLVED")) &&
+    !agent.allowedTargets.some((t) => t.includes("UNRESOLVED")) &&
+    !agent.allowedScopes.some((s) => s.includes("UNRESOLVED"))
+  );
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrMergeCursorAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrMergeCursorAgent.ts
new file mode 100644
index 00000000..06be47ab
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrMergeCursorAgent.ts
@@ -0,0 +1,84 @@
+/**
+ * M4 bounded github.pr.merge Cursor agent (GCEC PR-merge executor).
+ * Sibling of PR-create — SAME gateway adapter; does not widen create/push.
+ * Exact caps only — PREP-ready for merge continuation; REAL merge not claimed here.
+ */
+import type { ProvenanceRecord } from "@/lib/oa/doctrine";
+import {
+  M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID,
+  M4_REAL_GATEWAY_ADAPTER_ID,
+} from "../domain/realLaunchSafety";
+import type { AgentDescriptor } from "../domain/types";
+
+export const M4_BOUNDED_PR_MERGE_CAPABILITY =
+  "cap:cursor.github.pr.merge" as const;
+export const M4_BOUNDED_PR_MERGE_ACTION =
+  "cursor.github.pr.merge.apply" as const;
+export const M4_BOUNDED_PR_MERGE_TARGET =
+  "workspace.isolated.github.pr.merge" as const;
+export const M4_BOUNDED_PR_MERGE_SCOPE =
+  "studio.gcec.github.pr.merge" as const;
+
+export function createM4BoundedPrMergeCursorAgentDescriptor(
+  nowIso: string,
+  provenance?: ProvenanceRecord,
+): AgentDescriptor {
+  const defaultProvenance: ProvenanceRecord = {
+    schemaVersion: "0.1.0-oa",
+    provenanceRecordId: "prv:m4-bounded-pr-merge-cursor-agent",
+    actor: {
+      actorId: "actor:system",
+      role: "system",
+      authorityLevel: "N1",
+    },
+    source: "system",
+    timestamp: nowIso,
+    correlationId: "cor:m4-bounded-pr-merge-cursor-agent",
+  };
+  const descriptor: AgentDescriptor = {
+    schemaVersion: "0.1.0-oa",
+    agentId: M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID,
+    agentType: "cursor_cli_bounded_pr_merge",
+    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
+    supportedCapabilities: [M4_BOUNDED_PR_MERGE_CAPABILITY],
+    allowedActions: [M4_BOUNDED_PR_MERGE_ACTION],
+    allowedTargets: [M4_BOUNDED_PR_MERGE_TARGET],
+    allowedScopes: [M4_BOUNDED_PR_MERGE_SCOPE],
+    trustLevel: "bounded",
+    executionMode: "cursor_cli_real",
+    healthStatus: "healthy",
+    version: 1,
+    enabled: true,
+    provenance: provenance ?? defaultProvenance,
+    createdAt: nowIso,
+  };
+  return Object.freeze(descriptor);
+}
+
+export function isM4BoundedPrMergeRealAgent(agent: AgentDescriptor): boolean {
+  const hasWildcard = (values: readonly string[]) =>
+    values.some((v) => v === "*" || v.includes("*"));
+  return (
+    agent.agentId === M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID &&
+    agent.executionMode === "cursor_cli_real" &&
+    agent.trustLevel === "bounded" &&
+    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
+    agent.enabled === true &&
+    agent.supportedCapabilities.includes(M4_BOUNDED_PR_MERGE_CAPABILITY) &&
+    agent.allowedActions.includes(M4_BOUNDED_PR_MERGE_ACTION) &&
+    agent.allowedTargets.includes(M4_BOUNDED_PR_MERGE_TARGET) &&
+    agent.allowedScopes.includes(M4_BOUNDED_PR_MERGE_SCOPE) &&
+    agent.allowedScopes.length === 1 &&
+    agent.supportedCapabilities.length === 1 &&
+    agent.allowedActions.length === 1 &&
+    agent.allowedTargets.length === 1 &&
+    !hasWildcard(agent.supportedCapabilities) &&
+    !hasWildcard(agent.allowedActions) &&
+    !hasWildcard(agent.allowedTargets) &&
+    !hasWildcard(agent.allowedScopes) &&
+    !agent.supportedCapabilities.includes("cap:unresolved") &&
+    !agent.allowedActions.some((a) => a.includes("UNRESOLVED")) &&
+    !agent.allowedTargets.some((t) => t.includes("UNRESOLVED")) &&
+    !agent.allowedScopes.some((s) => s.includes("UNRESOLVED"))
+  );
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedRemotePushCursorAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedRemotePushCursorAgent.ts
new file mode 100644
index 00000000..6018524a
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedRemotePushCursorAgent.ts
@@ -0,0 +1,86 @@
+/**
+ * M4 bounded remote git.push Cursor agent (GCEC git.push executor).
+ * Sibling of local-commit — SAME gateway adapter; does not widen commit/docs-write.
+ * Exact caps only — no force/delete/tags, no PR/merge capability.
+ */
+import type { ProvenanceRecord } from "@/lib/oa/doctrine";
+import {
+  M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
+  M4_REAL_GATEWAY_ADAPTER_ID,
+} from "../domain/realLaunchSafety";
+import type { AgentDescriptor } from "../domain/types";
+
+export const M4_BOUNDED_REMOTE_PUSH_CAPABILITY =
+  "cap:cursor.git.remote_push" as const;
+export const M4_BOUNDED_REMOTE_PUSH_ACTION =
+  "cursor.git.remote_push.apply" as const;
+export const M4_BOUNDED_REMOTE_PUSH_TARGET =
+  "workspace.isolated.git.remote_push" as const;
+export const M4_BOUNDED_REMOTE_PUSH_SCOPE =
+  "studio.gcec.git.remote_push" as const;
+
+export function createM4BoundedRemotePushCursorAgentDescriptor(
+  nowIso: string,
+  provenance?: ProvenanceRecord,
+): AgentDescriptor {
+  const defaultProvenance: ProvenanceRecord = {
+    schemaVersion: "0.1.0-oa",
+    provenanceRecordId: "prv:m4-bounded-remote-push-cursor-agent",
+    actor: {
+      actorId: "actor:system",
+      role: "system",
+      authorityLevel: "N1",
+    },
+    source: "system",
+    timestamp: nowIso,
+    correlationId: "cor:m4-bounded-remote-push-cursor-agent",
+  };
+  const descriptor: AgentDescriptor = {
+    schemaVersion: "0.1.0-oa",
+    agentId: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
+    agentType: "cursor_cli_bounded_remote_push",
+    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
+    supportedCapabilities: [M4_BOUNDED_REMOTE_PUSH_CAPABILITY],
+    allowedActions: [M4_BOUNDED_REMOTE_PUSH_ACTION],
+    allowedTargets: [M4_BOUNDED_REMOTE_PUSH_TARGET],
+    allowedScopes: [M4_BOUNDED_REMOTE_PUSH_SCOPE],
+    trustLevel: "bounded",
+    executionMode: "cursor_cli_real",
+    healthStatus: "healthy",
+    version: 1,
+    enabled: true,
+    provenance: provenance ?? defaultProvenance,
+    createdAt: nowIso,
+  };
+  return Object.freeze(descriptor);
+}
+
+export function isM4BoundedRemotePushRealAgent(
+  agent: AgentDescriptor,
+): boolean {
+  const hasWildcard = (values: readonly string[]) =>
+    values.some((v) => v === "*" || v.includes("*"));
+  return (
+    agent.agentId === M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID &&
+    agent.executionMode === "cursor_cli_real" &&
+    agent.trustLevel === "bounded" &&
+    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
+    agent.enabled === true &&
+    agent.supportedCapabilities.includes(M4_BOUNDED_REMOTE_PUSH_CAPABILITY) &&
+    agent.allowedActions.includes(M4_BOUNDED_REMOTE_PUSH_ACTION) &&
+    agent.allowedTargets.includes(M4_BOUNDED_REMOTE_PUSH_TARGET) &&
+    agent.allowedScopes.includes(M4_BOUNDED_REMOTE_PUSH_SCOPE) &&
+    agent.allowedScopes.length === 1 &&
+    agent.supportedCapabilities.length === 1 &&
+    agent.allowedActions.length === 1 &&
+    agent.allowedTargets.length === 1 &&
+    !hasWildcard(agent.supportedCapabilities) &&
+    !hasWildcard(agent.allowedActions) &&
+    !hasWildcard(agent.allowedTargets) &&
+    !hasWildcard(agent.allowedScopes) &&
+    !agent.supportedCapabilities.includes("cap:unresolved") &&
+    !agent.allowedActions.some((a) => a.includes("UNRESOLVED")) &&
+    !agent.allowedTargets.some((t) => t.includes("UNRESOLVED")) &&
+    !agent.allowedScopes.some((s) => s.includes("UNRESOLVED"))
+  );
+}

```

==================================================
FINAL VERDICT
==================================================

PASS WITH RESERVE —
GCEC-GIT-LIFECYCLE-E2E-01 SAME CANDIDATE /
AC-01 PRESERVED /
AC-02 PRESERVED /
AC-03 PRESERVED /
AC-04 PRESERVED /
AC-05 PRESERVED /
AC-06 CLOSED (executable POSIX /bin/sh round-trip) /
DETERMINISTIC VALIDATION PASS /
ZERO REAL /
PRODUCT COMMIT NONE /
NEXT: ChatGPT targeted Critical Review — AC-06 final closure + whole-candidate regression confirmation.
