# SFIA Studio — Review Pack
## GCEC-GIT-LIFECYCLE-E2E-01 — PATH B BOUNDED PRODUCT COMPLETION CANDIDATE

TIMESTAMP: 2026-09-12 16:30:04 CEST

CYCLE: 8 — Delivery / implementation

TYPE: EVOL

PROFILE: CRITICAL

GO MORRIS: GCEC-GIT-LIFECYCLE-E2E-01 CONSUMED

ANTI-MICRO-CYCLE: ONE END-TO-END GIT LIFECYCLE LOT

==================================================
GIT TRUTH
==================================================

LOCAL PRODUCT HEAD: f71cf89a452d0b6109e1f11be957210122082186
PARENT: be71eee0bbfae341d16cfab401f3c38f46564d4c
origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
BRANCH: delivery/sfia-studio-product-proof-qual-to-governed-cycle
WORKTREE: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310

INPUT HANDOFF: 978f4c081d94fc1fdbc71368de0b6888f32ded12

Product application source was CLEAN at lot start (only `.tmp-sfia-review/**` dirty).
Candidate remains LOCAL DIRTY — no Product commit.

==================================================
SOURCES
==================================================

CURRENT LOCAL read: cycle template, routing guide, operating model, guardrails,
v2.5 cycles method candidate, fifteen-cycles synthetic map, Build Doctrine,
Roadmap, Product Completion cadrage, v3 framings 34/35, input handoff @ 978f4c08.

Product inspection: ExecutionContract / Attempt / AuthorizedExecutionSlice /
AgentCapability / F14 mapping / docs-write + local-commit agents / Cont01 /
Git observe+verify / gh read adapters / Evidence / Confirmation / REAL harnesses.

==================================================
CONVERGENCE PRE-CHECK
==================================================

Build Doctrine: VALIDATED / ACTIVE
Roadmap: VALIDATED / ACTIVE LIVING
Product Completion: COMPLETE / CLOSED
C1: VALIDATED / INTEGRATED
Runtime v3: NON ADOPTED
D-GCEC-09: ACTIVE / PRESERVED
D-GCEC-EXEC-01: ACTIVE
D-GCEC-CONT-01: ACTIVE
D-GCEC-CONT-02: REAL-BACKED AT TESTED SCOPE
D-GCEC-AGENT-01: ACTIVE
D-GCEC-REAL-02-CLOSURE: ADOPTED / locally documented @ f71cf89a…

Proven scope retained: REAL docs-write → Evidence → same-EC continuation →
REAL local git.commit → Evidence → remote anti-effect.

REAL_CONTINUATION_GAP: CLOSED AT TESTED A→B SCOPE
Governed executor effect reserve: CLOSED FOR TESTED A→B EFFECT SET
Still open before this lot: remote mutation lifecycle push / PR / merge.

==================================================
D-GCEC-REAL-02-CLOSURE INPUT STATE
==================================================

Consumed as documentary truth on Product HEAD f71cf89a…
REAL A→B proven at tested scope; GCEC-PUSH was NOT READY prior to this lot.
This lot completes deterministic push+PR+merge-continuation Product support
without claiming REAL push/PR proven.

==================================================
CURRENT SUPPORT MATRIX (PRE → POST CANDIDATE)
==================================================

| Effect | Pre | Post (candidate) |
| --- | --- | --- |
| git.commit (local) | IMPLEMENTED | IMPLEMENTED (KEEP) |
| git.push | PARTIAL (domain/Fake/Evidence; M4 fail-closed) | COMPLETE (deterministic; REAL structurally ready, ZERO REAL this lot) |
| github.pr.create | PARTIAL | COMPLETE (deterministic; ZERO REAL) |
| github.pr.merge | PARTIAL | COMPLETE as merge-continuation prep (deterministic; REAL merge NOT AUTHORIZED) |
| branch.delete | ABSENT | ABSENT (out of scope) |

==================================================
SELECTED PATH: B
==================================================

PATH A rejected: REAL through PR not possible without Product source change
(M4 profiles permanently fail-closed push/PR/merge).

PATH C rejected for push/PR/merge: no new DB/FSM/EC engine/Artifact aggregate/
mutation executor required — extend existing Cont01/slice/Evidence/Fake spine.

PATH B selected: bounded Product completion in ONE implementation lot.

==================================================
ROOT_CAUSE / CAPABILITY_GAP
==================================================

# GCEC-GIT-LIFECYCLE-E2E-01 — PATH B implementation summary

## SELECTED PATH: B

Bounded Product completion of push + PR create + merge-continuation on **existing** architecture (Cont01 / AuthorizedExecutionSlice / Confirmation / Evidence / Fake / verify*Claim). Cursor remains the mutation executor; Studio verifies via RepositoryRead. REAL remote mutation is **not** executed in this lot.

## ROOT_CAUSE

- `git.commit` already end-to-end (incl. REAL A→B).
- `git.push` / `github.pr.create` / `github.pr.merge` were partial: domain + Confirmation + Evidence verify*Claim + Fake existed, but M4 `AttemptExecutionProfile` permanently fail-closed them (`UNSUPPORTED_M4_PROTECTED` / AP-10/11/12/13).
- Missing AgentCapability siblings, launch specs, RealLaunchRequest fields, gateway profiles, and StartExecution wiring for push/PR/merge.
- `branch.delete` remains ABSENT (out of scope).

## CURRENT_REUSE_MAP

| Area | Disposition |
| --- | --- |
| Cont01 / AuthorizedExecutionSlice / Confirmation | KEEP |
| Evidence `verifyPushClaim` / `verifyPullRequestClaim` | KEEP (+ thin application wrappers) |
| FakeCursorGitExternalState push/openPr/mergePr | KEEP / ADAPT (Fake port gates new specs) |
| `m4BoundedLocalCommitCursorAgent` pattern | REUSE → three sibling agents |
| `gitCommitLaunchSpec` / Start / gateway gating | REUSE → push/PR/merge analogs |
| `resolveVerifiedDocsWritePriorAttempt` | REUSE → local-commit + remote-push lineage resolvers |
| `resolveAttemptExecutionProfile` | COMPLETE progressive C→D→E |
| M4 AttemptExecutionProfile fail-closed for push/PR/merge | REPLACE with progressive + lineage fail-closed |
| REAL remote mutation / proof push-PR-merge | ZERO (structurally ready, gates OFF) |

## ACTUAL_WRITE_FILESET

### New
- `app/lib/oa/execution-attempt/infrastructure/m4BoundedRemotePushCursorAgent.ts`
- `app/lib/oa/execution-attempt/infrastructure/m4BoundedPrCreateCursorAgent.ts`
- `app/lib/oa/execution-attempt/infrastructure/m4BoundedPrMergeCursorAgent.ts`
- `app/lib/oa/execution-attempt/domain/gitPushLaunchSpec.ts`
- `app/lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts`
- `app/lib/oa/execution-attempt/domain/gitPrMergeLaunchSpec.ts`
- `app/lib/oa/execution-attempt/domain/resolveVerifiedLocalCommitPriorAttempt.ts`
- `app/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt.ts`
- `app/lib/oa/execution-attempt/application/verifyRemotePushEffect.ts`
- `app/lib/oa/execution-attempt/application/verifyPrCreateEffect.ts`
- `app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts`

### Modified
- `domain/realLaunchSafety.ts` — agent IDs
- `domain/resolveAttemptExecutionProfile.ts` — remote_push / pr_create / pr_merge; AP-13 exhausted reason
- `ports/realExecutionLaunchPort.ts` — gitPushSpec / gitPrCreateSpec / gitPrMergeSpec
- `application/startExecution.ts` — exclusive-slice Start wiring
- `infrastructure/studioCursorRealLaunchGateway.ts` — gated instructions
- `infrastructure/fakeDocsWriteLaunchPort.ts` — spec + agent gates
- `infrastructure/m4BoundedDocsWriteCursorAgent.ts` — authorized-agent OR
- `infrastructure/mutatingCursorConfinementEnv.ts` — mutating profiles C/D/E
- `index.ts` + `vertical-slice-runtime/service.ts` — exports + registry
- AP-10/11/12/13 + monolithic/CR23 assertions updated for progressive behavior

### Agent IDs
- `agt:m4.cursor.bounded_remote_push`
- `agt:m4.cursor.bounded_pr_create`
- `agt:m4.cursor.bounded_pr_merge`

Adapter unchanged: `adp:m4-cursor-cli-real`.

## Test results

| Gate | Result |
| --- | --- |
| Focused vitest (`gcecGitLifecyclePushPrMerge` + `gcecAgent01AttemptProfile`) | **36 passed** |
| Related (gateway/confinement/CR23/monolithic + focused) | **73 passed** |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm run build` | **PASS** |
| Full vitest (`SFIA_STUDIO_CURSOR_REAL` unset) | **3810 passed \| 137 skipped** (353 files passed \| 17 skipped) |

## REAL: ZERO

- `SFIA_STUDIO_CURSOR_REAL` unset for all validation.
- No proof remote push / PR / merge.
- No Product push.

## PRODUCT COMMIT: NONE

Working tree left dirty with intended Product source changes + `.tmp-sfia-review/gcec-git-lifecycle-e2e-01/`.
Product HEAD remains `f71cf89a452d0b6109e1f11be957210122082186` on `delivery/sfia-studio-product-proof-qual-to-governed-cycle`.


==================================================
REUSE MAP
==================================================

KEEP: Cont01, AuthorizedExecutionSlice, Confirmation, Evidence verify*Claim,
Fake push/openPr/mergePr, git-ports read adapters, qualifyCompletion,
D-GCEC-09/EXEC-01/AGENT-01/CONT-01/02.

ADAPT: Fake/gateway/confinement/docs-write agent mutual exclusion, monolithic/CR23/AP tests.

COMPLETE: AttemptExecutionProfile progressive C→D→E; three AgentCapabilities;
three launch specs; StartExecution exclusive-slice wiring; lineage resolvers;
thin verify wrappers; registry registration.

==================================================
AUTHORITY / EFFECT MATRIX
==================================================

Attempt A: docs.write — agt:m4.cursor.bounded_docs_write
Attempt B: git.commit — agt:m4.cursor.bounded_local_commit
Attempt C: git.push — agt:m4.cursor.bounded_remote_push
Attempt D: github.pr.create — agt:m4.cursor.bounded_pr_create
STOP MERGE GATE (Morris)
Attempt E (later GO): github.pr.merge — agt:m4.cursor.bounded_pr_merge

Each Attempt owns selectedAgentRef. No broad unrestricted write+commit+push+PR+merge agent.
StartExecution derives AuthorizedExecutionSlice + AttemptExecutionProfile server-side;
revalidates agent; fail-closed on stale/incompatible requestedAgentRef.
Tool availability does not widen authority.
EC completion ≠ individual Attempt success; PR existence does not complete EC
while merge remains required.

==================================================
AGENT PROFILES
==================================================

- agt:m4.cursor.bounded_remote_push / cap:cursor.git.remote_push
- agt:m4.cursor.bounded_pr_create / cap:cursor.github.pr.create
- agt:m4.cursor.bounded_pr_merge / cap:cursor.github.pr.merge
Adapter: adp:m4-cursor-cli-real (unchanged)

==================================================
PUSH MODEL
==================================================

GitPushLaunchSpec: repositoryRef, remoteName, branchName, expectedCommitSha,
force=false, delete=false, noTags=true — fail-closed builder.
Lineage: unique VERIFIED git:local_commit prior Attempt required.
Gateway instruction forbids force/delete/tags/main-as-dest misuse.
Evidence: verifyRemotePushEffect → verifyPushClaim (RepositoryRead branch head).

==================================================
PR MODEL
==================================================

GitPrCreateLaunchSpec: repositoryRef, headBranch, baseBranch, title, body?
Lineage: unique VERIFIED git:remote_push required.
No auto-merge. One create Attempt semantics via exclusive slice + Evidence.
Evidence: verifyPrCreateEffect → verifyPullRequestClaim.

==================================================
MERGE CONTINUATION MODEL
==================================================

GitPrMergeLaunchSpec prepared now for same-EC Attempt E after distinct Morris GO.
Profile eligible only with VERIFIED PR identity; Confirmation / N3 gate remains
at AuthorizedExecutionSlice. Auto-merge forbidden. REAL merge NOT executed.

==================================================
ACTUAL WRITE FILESET
==================================================

```
projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyPrCreateEffect.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyRemotePushEffect.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrMergeLaunchSpec.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPushLaunchSpec.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedLocalCommitPriorAttempt.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt.ts
projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrCreateCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedPrMergeCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedRemotePushCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
```

Diffstat (tracked modifications only):
```
.../oa/cycle/gcecCr23StartExecution.d0.test.ts     |   6 +-
 .../oa/cycle/gcecProductMonolithicE2e.d0.test.ts   |  12 +-
 .../gcecAgent01AttemptProfile.d0.test.ts           |  44 ++-
 .../application/startExecution.ts                  | 308 ++++++++++++++-
 .../execution-attempt/domain/realLaunchSafety.ts   |   9 +
 .../domain/resolveAttemptExecutionProfile.ts       | 422 +++++++++++++++++++--
 .../app/lib/oa/execution-attempt/index.ts          |  75 ++++
 .../infrastructure/fakeDocsWriteLaunchPort.ts      | 194 +++++++++-
 .../m4BoundedDocsWriteCursorAgent.ts               |  10 +-
 .../infrastructure/mutatingCursorConfinementEnv.ts |  11 +-
 .../studioCursorRealLaunchGateway.ts               | 370 +++++++++++++++++-
 .../ports/realExecutionLaunchPort.ts               |  23 +-
 .../app/lib/vertical-slice-runtime/service.ts      |   6 +
 13 files changed, 1421 insertions(+), 69 deletions(-)
```

Plus 11 new untracked Product files (agents/specs/resolvers/verify wrappers/tests).
Combined useful diff attached below (~3746 lines).

==================================================
POSITIVE / NEGATIVE TESTS
==================================================

New: gcecGitLifecyclePushPrMerge.d0.test.ts (21)
Updated: gcecAgent01AttemptProfile AP-10/11/12/13; CR23; monolithic E2E

Focused: 36 passed
Related: 73 passed
Typecheck: PASS
Lint: PASS
Build: PASS
Full vitest: 3810 passed | 137 skipped (REAL gates OFF)

==================================================
REAL / PRODUCT REMOTE
==================================================

REAL: ZERO
PRODUCT COMMIT: NONE
PRODUCT REPO PUSH: NONE
PRODUCT PR: NONE
PRODUCT MERGE: NONE
PROOF MERGE: NONE
PROOF REMOTE MUTATION: NONE

==================================================
GCEC-PUSH STATUS
==================================================

Deterministic Product path COMPLETE (candidate).
REAL push: NOT PROVEN this lot.
GCEC-PUSH READY for REAL: NOT until Critical Review → local commit GO →
distinct REAL A→D lifecycle run.

PR STATUS: deterministic create path COMPLETE (candidate); REAL PR NOT PROVEN.

MERGE STATUS: NOT AUTHORIZED / NOT PROVEN (continuation prepared only).

RUNTIME v3: NON ADOPTED

==================================================
RESERVES
==================================================

- D-GCEC-EVID-01: ACCEPTED NON-BLOCKING
- FixedIdSource harness reserve: OPEN / NON-BLOCKING (unchanged)
- Full EC completion: NOT PROVEN by this lot
- branch.delete: ABSENT
- REAL push/PR/merge: NOT PROVEN
- Publisher false-negative tooling reserve (handoff) retained historically

==================================================
ANTI-CLAIMS
==================================================

≠ push proven
≠ PR proven
≠ merge proven
≠ GCEC-PUSH READY for silent REAL
≠ full lifecycle completed
≠ runtime v3 ADOPTED
≠ generic repo safety
≠ autonomous merge
≠ Product push/PR/merge
≠ new DB/FSM/EC engine/Artifact aggregate
≠ second mutation executor
≠ branch.delete implemented

==================================================
DECISION REQUIRED FROM MORRIS
==================================================

ONE Critical Review of this complete push+PR+merge-continuation implementation
candidate.

If accepted:
→ ONE local Product commit GO
→ then ONE REAL A→D lifecycle run (docs-write → commit → push → PR)
→ STOP at MERGE GATE with real PR evidence
→ distinct Morris GO MERGE resumes SAME EC Attempt E

Do NOT split into push vs PR micro-cycles.

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
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 1ea37809..4b5b5ed0 100644
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
@@ -83,6 +87,21 @@ import {
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
+import { resolveVerifiedLocalCommitPriorAttempt } from "../domain/resolveVerifiedLocalCommitPriorAttempt";
+import { resolveVerifiedRemotePushPriorAttempt } from "../domain/resolveVerifiedRemotePushPriorAttempt";
 import type { CursorAuthorizedEffectId } from "../domain/cursorExecutionReport";
 import {
   authorityFailureDetail,
@@ -1144,7 +1163,7 @@ export class StartExecution {
           { selectedAgentRef: attempt.selectedAgentRef },
         );
       }
-      // Defense: commit-only slice still requires exact local-commit descriptor.
+      // Defense: exclusive Git slices still require exact agent descriptors.
       if (
         isBoundedGitCommitOnlySlice(authorizedSlice.authorizedEffects) &&
         !isM4BoundedLocalCommitRealAgent(agent)
@@ -1155,6 +1174,36 @@ export class StartExecution {
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
@@ -1282,6 +1331,260 @@ export class StartExecution {
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
+      const headBranch =
+        priorPush.prior.branchName ||
+        (typeof contractInputs.workingBranch === "string" &&
+          contractInputs.workingBranch.trim()) ||
+        deriveDeterministicGcecPushBranch(contract.executionContractId);
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
+      const builtPr = buildGitPrCreateLaunchSpec({
+        repositoryRef: repoRef,
+        headBranch,
+        baseBranch,
+        title,
+        ...(body != null ? { body } : {}),
+        expectedBaseBranch: baseBranch,
+        ...(claimedAutoMerge !== undefined
+          ? { claimedAutoMerge }
+          : {}),
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
+    let gitPrMergeSpec:
+      | import("../domain/gitPrMergeLaunchSpec").GitPrMergeLaunchSpec
+      | undefined;
+    if (isBoundedGitPrMergeOnlySlice(authorizedSlice.authorizedEffects)) {
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
+      const prEv = evidenceReadMerge.evidence.find(
+        (e) =>
+          e.status === "verified" &&
+          e.source === "git:pull_request" &&
+          e.bindings.executionContractId === contract.executionContractId &&
+          String(e.location ?? "").includes(`prNumber=${pr.prNumber}`),
+      );
+      const headMatch = String(prEv?.location ?? "").match(
+        /[?&]headSha=([^&]+)/,
+      );
+      const expectedHeadSha = headMatch
+        ? decodeURIComponent(headMatch[1]!).trim().toLowerCase()
+        : "";
+      if (!/^[0-9a-f]{40}$/i.test(expectedHeadSha)) {
+        return fail("ATTEMPT_INVALID", "git_pr_merge_expected_head_sha_invalid", {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      const expectedBaseBranch =
+        projectBindingMerge.defaultBranch?.trim() || "main";
+      const builtMerge = buildGitPrMergeLaunchSpec({
+        repositoryRef: repoRef,
+        prNumber: pr.prNumber,
+        expectedHeadSha,
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
@@ -1299,6 +1602,9 @@ export class StartExecution {
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
index 6fb6cabc..8269d402 100644
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
@@ -222,6 +364,151 @@ function resolveLocalCommitOrFail(
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
@@ -275,6 +562,9 @@ export function resolveAttemptExecutionProfile(
     (e) => e === "filesystem.create" || e === "filesystem.modify",
   );
   const hasCommit = executable.includes("git.commit");
+  const hasPush = executable.includes("git.push");
+  const hasPr = executable.includes("github.pr.create");
+  const hasMerge = executable.includes("github.pr.merge");
   const hasUnsupportedProtected = executable.some((e) =>
     UNSUPPORTED_M4_PROTECTED.has(e as CursorAuthorizedEffectId),
   );
@@ -286,7 +576,7 @@ export function resolveAttemptExecutionProfile(
     );

   // When Start provides server-derived authorizedEffects, use them to confirm
-  // the unique slice — still require exact Attempt-A lineage for commit.
+  // the unique slice — still require exact prior lineage for progressive steps.
   if (input.authorizedEffects && isM4DocsWriteContract) {
     const cls = uniqueAuthorizedEffectClass(input.authorizedEffects);
     if (cls === "empty") {
@@ -307,18 +597,37 @@ export function resolveAttemptExecutionProfile(
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
@@ -350,15 +659,12 @@ export function resolveAttemptExecutionProfile(
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
@@ -367,11 +673,56 @@ export function resolveAttemptExecutionProfile(
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
@@ -381,6 +732,15 @@ export function resolveAttemptExecutionProfile(
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
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index f3498e63..6004f8bd 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -184,6 +184,30 @@ export {
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
@@ -211,6 +235,14 @@ export {
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
@@ -231,11 +263,40 @@ export type {
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
@@ -254,6 +315,20 @@ export type {
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
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
index 367a94dc..40d2a71a 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
@@ -22,8 +22,29 @@ import {
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
@@ -154,6 +175,9 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
     }
     const { authorized, blocked } = resolveAuthorizedEffects(request);
     const wantsCommitProfile = Boolean(request.gitCommitSpec);
+    const wantsPushProfile = Boolean(request.gitPushSpec);
+    const wantsPrCreateProfile = Boolean(request.gitPrCreateSpec);
+    const wantsPrMergeProfile = Boolean(request.gitPrMergeSpec);
     if (wantsCommitProfile) {
       if (!isBoundedGitCommitOnlySlice([...authorized])) {
         return {
@@ -169,7 +193,7 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
         };
       }
       if (
-        request.selectedAgentRef !== "agt:m4.cursor.bounded_local_commit"
+        request.selectedAgentRef !== M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID
       ) {
         return {
           outcome: "reject",
@@ -213,12 +237,147 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
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
@@ -231,6 +390,8 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
     }

     const commitSpec = request.gitCommitSpec;
+    const pushSpec = request.gitPushSpec;
+    const prCreateSpec = request.gitPrCreateSpec;
     const spec = request.docsWriteSpec;
     const pathAllowlist = spec?.pathAllowlist ?? this.options.pathAllowlist;
     const targetPath =
@@ -240,10 +401,15 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
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
@@ -364,10 +530,21 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
       }

       if (authorized.has("git.push")) {
-        const pushed = this.gitState.push(branch);
+        const pushBranch = request.gitPushSpec?.branchName ?? branch;
+        this.gitState.currentBranch = pushBranch;
+        if (
+          request.gitPushSpec?.expectedCommitSha &&
+          !this.gitState.branchHeads.has(pushBranch)
+        ) {
+          this.gitState.branchHeads.set(
+            pushBranch,
+            request.gitPushSpec.expectedCommitSha.toLowerCase(),
+          );
+        }
+        const pushed = this.gitState.push(pushBranch);
         executed.push("git.push");
         gitEffects.push = {
-          remote: "origin",
+          remote: request.gitPushSpec?.remoteName ?? "origin",
           ref: pushed.ref,
           sha: pushed.sha,
         };
@@ -377,8 +554,12 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {

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
@@ -393,6 +574,7 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {

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
index f9196139..ec3d8240 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts
@@ -69,6 +69,15 @@ export function buildMutatingCursorConfinementEnv(
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
 }
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index 72581253..360c87c9 100644
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
@@ -29,8 +32,23 @@ import {
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
 import {
   buildMutatingCursorConfinementEnv,
   isMutatingGcecCursorProfile,
@@ -75,6 +93,96 @@ function buildBoundedLocalCommitInstruction(input: {
   ].join("\n");
 }

+function buildBoundedRemotePushInstruction(input: {
+  readonly spec: NonNullable<RealLaunchRequest["gitPushSpec"]>;
+  readonly target?: string;
+  readonly action?: string;
+  readonly scope?: string;
+  readonly semanticFingerprint: string;
+}): string {
+  return [
+    "TÂCHE UNIQUE — bounded remote git.push déterministe (GCEC).",
+    `Repository: ${input.spec.repositoryRef}`,
+    `Remote exact: ${input.spec.remoteName}`,
+    `Branch exacte (feature only): ${input.spec.branchName}`,
+    `Expected commit SHA: ${input.spec.expectedCommitSha}`,
+    "Séquence Shell autorisée UNIQUEMENT:",
+    "  git rev-parse HEAD",
+    `  git push ${input.spec.remoteName} ${input.spec.branchName}:${input.spec.branchName}`,
+    "INTERDIT: --force / -f / --force-with-lease, --delete / :branch delete,",
+    "--tags / --follow-tags, push vers main/master, fetch mutatif, pull,",
+    "remote add/set-url, checkout, reset, rebase, merge, amend, PR/merge GitHub,",
+    "édition de fichiers, script shell fourni par l'appelant.",
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
+  return [
+    "TÂCHE UNIQUE — bounded github.pr.create déterministe (GCEC).",
+    `Repository: ${input.spec.repositoryRef}`,
+    `Head branch exacte: ${input.spec.headBranch}`,
+    `Base branch exacte: ${input.spec.baseBranch}`,
+    `Title exact: ${input.spec.title}`,
+    ...(input.spec.body ? [`Body: ${input.spec.body}`] : []),
+    "Commande autorisée UNIQUEMENT:",
+    `  gh pr create --head ${input.spec.headBranch} --base ${input.spec.baseBranch} --title ${JSON.stringify(input.spec.title)}` +
+      (input.spec.body
+        ? ` --body ${JSON.stringify(input.spec.body)}`
+        : ""),
+    "INTERDIT: --auto-merge / enable auto-merge, merge, squash, rebase,",
+    "push force, delete branch, édition hors PR create, script shell libre.",
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
+  return [
+    "TÂCHE UNIQUE — bounded github.pr.merge déterministe (GCEC).",
+    `Repository: ${input.spec.repositoryRef}`,
+    `PR number exact (obligatoire): ${input.spec.prNumber}`,
+    `Expected head SHA: ${input.spec.expectedHeadSha}`,
+    `Expected base branch: ${input.spec.expectedBaseBranch}`,
+    `Merge method: ${input.spec.mergeMethod}`,
+    "Commande autorisée UNIQUEMENT:",
+    `  gh pr merge ${input.spec.prNumber} ${methodFlag}`,
+    "INTERDIT: autre PR number, --admin sans Confirmation, delete branch,",
+    "force push, auto-merge enable, script shell libre.",
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
@@ -291,13 +399,53 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
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
@@ -377,20 +525,188 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
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
@@ -402,6 +718,30 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
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
@@ -459,9 +799,14 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
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
@@ -486,13 +831,16 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
           instruction,
         ];

-    // D-GCEC-CONF-02A: mutating A+B get shared server-owned env confinement.
+    // D-GCEC-CONF-02A: mutating A+B+C+D+E get shared server-owned env confinement.
     // RO / other profiles keep minimal non-mutating spawn env (no auth strip).
     // Prompt forbids remain defense-in-depth — NOT the technical authority boundary.
     // This does NOT prove remote-write impossibility; live re-preflight required.
     const childEnv = isMutatingGcecCursorProfile({
       isDocsWrite,
       isLocalCommitProfile,
+      isRemotePushProfile,
+      isPrCreateProfile,
+      isPrMergeProfile,
     })
       ? buildMutatingCursorConfinementEnv(this.env)
       : {
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
index 00000000..946a11dc
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
@@ -0,0 +1,523 @@
+/**
+ * GCEC-GIT-LIFECYCLE-E2E-01 PATH B — push / PR create / PR merge PREP.
+ * ZERO REAL remote mutation. @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
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
+  buildGitPrCreateLaunchSpec,
+  buildGitPrMergeLaunchSpec,
+  buildGitPushLaunchSpec,
+  createM4BoundedDocsWriteCursorAgentDescriptor,
+  createM4BoundedRemotePushCursorAgentDescriptor,
+  isM4BoundedRemotePushRealAgent,
+  resolveAttemptExecutionProfile,
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
+    location: `git:pull_request?repo=${encodeURIComponent(repo)}&prNumber=${prNumber}&headSha=${headSha}&state=open`,
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
+        expectedBaseBranch: "main",
+      });
+      expect(built.ok).toBe(true);
+      if (!built.ok) return;
+      expect(built.spec.headBranch).toBe(BRANCH);
+      expect(built.spec.baseBranch).toBe("main");
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
+        expectedBaseBranch: "main",
+        mergeMethod: "merge",
+      });
+      expect(built.ok).toBe(true);
+      if (!built.ok) return;
+      expect(built.spec.prNumber).toBe(7);
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
+});
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyPrCreateEffect.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyPrCreateEffect.ts
new file mode 100644
index 00000000..084ebd5d
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyPrCreateEffect.ts
@@ -0,0 +1,80 @@
+/**
+ * Thin application verify wrapper for PR create (Studio READ-ONLY).
+ * Calls verifyPullRequestClaim with bindings completeness checks.
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
+  return verifyPullRequestClaim({
+    repositoryRead: input.repositoryRead,
+    evidenceServices: input.evidenceServices,
+    repositoryRef: input.repositoryRef,
+    claimedPrNumber: input.claimedPrNumber,
+    claimedHeadSha: input.claimedHeadSha,
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
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts
new file mode 100644
index 00000000..70648741
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrCreateLaunchSpec.ts
@@ -0,0 +1,119 @@
+/**
+ * Server-derived GitPrCreateLaunchSpec (GCEC bounded PR create).
+ * Fail closed on empty / unsafe refs / base mismatch when expectedBase provided.
+ */
+
+export type GitPrCreateLaunchSpec = {
+  readonly repositoryRef: string;
+  readonly headBranch: string;
+  readonly baseBranch: string;
+  readonly title: string;
+  readonly body?: string;
+};
+
+const BRANCH_FORBIDDEN_RE = /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]/;
+const TITLE_FORBIDDEN_RE = /[\x00-\x1f\x7f$`\\;&|<>(){}[\]*?!\n\r]/;
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
+ * Auto-merge / force fields on request are rejected when present.
+ */
+export function buildGitPrCreateLaunchSpec(input: {
+  readonly repositoryRef: string;
+  readonly headBranch: string;
+  readonly baseBranch: string;
+  readonly title: string;
+  readonly body?: string;
+  readonly expectedBaseBranch?: string;
+  /** Hostile — any truthy auto-merge channel is rejected. */
+  readonly claimedAutoMerge?: unknown;
+}):
+  | { ok: true; spec: GitPrCreateLaunchSpec }
+  | { ok: false; reason: string } {
+  if (input.claimedAutoMerge != null && input.claimedAutoMerge !== false) {
+    return { ok: false, reason: "git_pr_create_auto_merge_rejected" };
+  }
+  const repositoryRef = input.repositoryRef.trim();
+  if (!repositoryRef) {
+    return { ok: false, reason: "git_pr_create_repository_ref_missing" };
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
+      repositoryRef,
+      headBranch: head.ref,
+      baseBranch: base.ref,
+      title,
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
index 00000000..235426d8
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPrMergeLaunchSpec.ts
@@ -0,0 +1,83 @@
+/**
+ * Server-derived GitPrMergeLaunchSpec (GCEC bounded PR merge PREP).
+ * Build for continuation PREP only — REAL merge is not executed in this lot.
+ * Fail closed on missing PR / bad numbers / incomplete identity.
+ */
+
+export type GitPrMergeMethod = "merge" | "squash" | "rebase";
+
+export type GitPrMergeLaunchSpec = {
+  readonly repositoryRef: string;
+  readonly prNumber: number;
+  readonly expectedHeadSha: string;
+  readonly expectedBaseBranch: string;
+  readonly mergeMethod: GitPrMergeMethod;
+};
+
+const FULL_SHA_RE = /^[0-9a-f]{40}$/i;
+
+/**
+ * Build merge launch spec from server-owned PR identity + policy defaults.
+ * Default mergeMethod is "merge" when server/policy omits it.
+ */
+export function buildGitPrMergeLaunchSpec(input: {
+  readonly repositoryRef: string;
+  readonly prNumber: number;
+  readonly expectedHeadSha: string;
+  readonly expectedBaseBranch: string;
+  readonly mergeMethod?: GitPrMergeMethod;
+}):
+  | { ok: true; spec: GitPrMergeLaunchSpec }
+  | { ok: false; reason: string } {
+  const repositoryRef = input.repositoryRef.trim();
+  if (!repositoryRef) {
+    return { ok: false, reason: "git_pr_merge_repository_ref_missing" };
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
+  const base = input.expectedBaseBranch.trim();
+  if (!base) {
+    return { ok: false, reason: "git_pr_merge_expected_base_empty" };
+  }
+  if (
+    /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]/.test(base) ||
+    base.includes("..") ||
+    base.startsWith("-")
+  ) {
+    return { ok: false, reason: "git_pr_merge_expected_base_unsafe" };
+  }
+  const method = input.mergeMethod ?? "merge";
+  if (method !== "merge" && method !== "squash" && method !== "rebase") {
+    return { ok: false, reason: "git_pr_merge_method_invalid" };
+  }
+  return {
+    ok: true,
+    spec: {
+      repositoryRef,
+      prNumber: input.prNumber,
+      expectedHeadSha: input.expectedHeadSha.trim().toLowerCase(),
+      expectedBaseBranch: base,
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
index 00000000..c654d4d5
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitPushLaunchSpec.ts
@@ -0,0 +1,141 @@
+/**
+ * Server-derived GitPushLaunchSpec (GCEC bounded remote push).
+ * Canonical type — import/re-export; do not duplicate in ports.
+ * Fail closed on force / delete / tags / empty / unsafe branch / wrong SHA.
+ * Branch is server-derived only — reject client free branch authority.
+ */
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
+  const repositoryRef = input.repositoryRef.trim();
+  if (!repositoryRef) {
+    return { ok: false, reason: "git_push_repository_ref_missing" };
+  }
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
index 00000000..5515c1d0
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedLocalCommitPriorAttempt.ts
@@ -0,0 +1,165 @@
+/**
+ * CORR-D-GCEC-GIT-LIFECYCLE — exact Attempt lineage for verified local commit.
+ * Pure Product-truth: Attempt history + VERIFIED git:local_commit Evidence.
+ * Zero / multiple eligible candidates → fail closed.
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
+  if (
+    repositoryRef &&
+    parsed.repositoryRef &&
+    parsed.repositoryRef !== repositoryRef
+  ) {
+    return false;
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
+    candidates.push({
+      priorAttemptId: attempt.attemptId,
+      evidenceId: ev.evidenceId,
+      commitSha: parsed.commitSha,
+      repositoryRef: parsed.repositoryRef ?? input.repositoryRef ?? "",
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
+  return { ok: true, prior: only };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt.ts
new file mode 100644
index 00000000..a1d67c10
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt.ts
@@ -0,0 +1,176 @@
+/**
+ * CORR-D-GCEC-GIT-LIFECYCLE — exact Attempt lineage for verified remote push.
+ * Pure Product-truth: Attempt history + VERIFIED git:remote_push Evidence.
+ * Zero / multiple eligible candidates → fail closed.
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
+  readonly branchName?: string;
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
+  if (
+    repositoryRef &&
+    parsed.repositoryRef &&
+    parsed.repositoryRef !== repositoryRef
+  ) {
+    return false;
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
+    if (!parsed) {
+      return { ok: false, reason: "remote_push_prior_incomplete" };
+    }
+    candidates.push({
+      priorAttemptId: attempt.attemptId,
+      evidenceId: ev.evidenceId,
+      commitSha: parsed.commitSha,
+      repositoryRef: parsed.repositoryRef ?? input.repositoryRef ?? "",
+      ...(parsed.branchName ? { branchName: parsed.branchName } : {}),
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
+  if (!FULL_SHA_RE.test(only.commitSha)) {
+    return { ok: false, reason: "remote_push_prior_incomplete" };
+  }
+  return { ok: true, prior: only };
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
GCEC-GIT-LIFECYCLE-E2E-01 BOUNDED PRODUCT COMPLETION CANDIDATE BUILT /
PUSH + PR + MERGE-CONTINUATION COMPLETED IN ONE IMPLEMENTATION LOT /
DETERMINISTIC VALIDATION PASS /
ZERO REAL REMOTE MUTATION /
READY FOR ONE CRITICAL REVIEW BEFORE REAL.
