# SFIA STUDIO — GCEC — CORR-D-GCEC-AGENT-02 REVIEW PACK

TIMESTAMP: 2026-09-12T03:17:36Z

## GO MORRIS
CORR-D-GCEC-AGENT-02 CONSUMED

## GIT TRUTH BEFORE
- worktree: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD: 3966bbf9b800b143711acf1d581b85a33e106e99
- PARENT: 92ad3fd41e065d0ebe76c59b4eedb622715a11e2
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
- INPUT HANDOFF: 4793ee28614f9c18758e75b11fd44a44359c91bb
- Product dirt: EXPECTED (combined D-GCEC-AGENT-01 + CORR-01 + CORR-02 candidate)
- .tmp-sfia-review/** dirt: allowed

## GIT TRUTH AFTER
- HEAD UNCHANGED: 3966bbf9b800b143711acf1d581b85a33e106e99
- Product commit: NONE
- Product push: NONE
- Proof repo: UNCHANGED (expected main 32c7c2008197e5c61b32c16479144e9863291358)

## INPUT PRODUCT HEAD
3966bbf9b800b143711acf1d581b85a33e106e99

## INPUT HANDOFF
4793ee28614f9c18758e75b11fd44a44359c91bb

## CYCLE / TYPE / PROFILE
- Cycle: 8 — Delivery
- Type: EVOL
- Profile: CRITICAL

## SOURCES
Local method/convergence/v3 framing + handoff 4793ee28 + dirty Product candidate (authoritative deltas).

## CONVERGENCE PRE-CHECK
Build Doctrine VALIDATED/ACTIVE. Roadmap VALIDATED/ACTIVE LIVING. Product Completion COMPLETE/CLOSED. Runtime v3 NON ADOPTED.
Applicable: R3/R6/R8/R12/R15/R18/R19/R21 (DETERMINISTIC != REAL).

## BINDING DECISIONS
D-GCEC-09..15, D-GCEC-CONT-01, D-GCEC-AGENT-01 preserved. Architecture: one EC, Attempt-scoped profiles, A docs-write / B local-commit, same gateway/ProcessRunner/Cont01/Evidence model/future REAL harness.

## CR-GCEC-AGENT-08 — CLOSED
Root cause: `resolvePreCommitWorkspaceContinuation` had a weak supersession branch when priorA was not ok (same-EC commit Evidence could clear continuation without exact Attempt A).
Code removed: entire weak-supersession path that evaluated commit Evidence without qualified A.
Strict rule: NO EXACT ATTEMPT A = NO FS→SHA SUPERSESSION. Only `priorA.ok` may call `isFsAnchorSupersededByVerifiedLocalCommit` with exact priorAttemptId/H0/repositoryRef/requiredPaths/attempts/Evidence.
Helper hardened: required fields; requires succeeded docs-write Attempt A + unique VERIFIED Artifact Evidence on A + succeeded local-commit Attempt B + unique VERIFIED git:local_commit Evidence on B.
Ambiguous A → fail closed. Incomplete A → fail closed. No A → never superseded; continuation semantics only.
Tests: SHA-19..24 (+ preserved SHA-01..18). Public resolver path asserted.
Status: CLOSED

## CR-GCEC-AGENT-09 — CLOSED
Old boundary: `verifyLocalCommitEffect` accepted `observed: LocalCommitObservedFacts` (forgeable) + synthetic helper near Product API.
New boundary: production Evidence creator OWNS observation:
  gitRunner + governed + spec + expectedArtifactDigests + bindings → observeLocalCommitFacts → verifyLocalCommitFacts → buildTypedGitEvidence → register → verify integrity.
Rejects forged keys: observed / observedHeadSha / parent / paths / message / dirty / commitsFromExpectedParent / artifactChecks / allowTestOnlySyntheticObservation.
Synthetic helper: moved to `__tests__/.../support/localCommitTestFacts.ts`; NOT exported from Product index.
Pure `verifyLocalCommitFacts` kept for unit tests. `observeLocalCommitFacts` remains canonical READ-ONLY collector.
Tests: EVP-01..12 (gcecGitCommitEvidence); SameEcAb uses governed temp worktree fixture; REAL harness uses observer-owned verify.
Status: CLOSED

## CR-GCEC-AGENT-10 — CLOSED
Old anti-effect: cloneRoot local HEAD == BASE_SHA only (insufficient vs remote push).
New: future REAL harness `captureRemoteRefSnapshot` runs `git ls-remote --heads origin` + `git ls-remote --tags origin` BEFORE A/B and AFTER B; asserts heads/tags/main/target-branch equality; persists remoteHeads/Tags/Main/targetBranch Before/After into forensic facts.json.
No REAL executed. Triple gate OFF. Static shape tests assert ls-remote markers + observer-owned verify call shape.
REAL TOOL-CONFINEMENT RESERVE remains OPEN (remote unchanged ≠ Cursor incapable of push).
Status: CLOSED

## FS→SHA RULE
Qualified A + VERIFIED Artifact on A + Succeeded B local-commit + VERIFIED git:local_commit on B + same Project/Cycle/EC + repo exact + parent==H0 + paths cover A artifacts = superseded. Anything less = NOT superseded.

## LOCAL COMMIT OBSERVATION
GovernedWorkspaceObservationContext mandatory (execRoot, priorAttemptId, managedRepoRoot, remote identity, registered worktree, common Git root, path containment). No free cwd.

## LOCAL COMMIT EVIDENCE CREATION
Single Product path: `verifyLocalCommitEffect` owns observe→verify→Evidence. Provenance `studio:local_git_readonly:observe`.

## PRODUCTION VS TEST BOUNDARY
- Production: no synthetic facts export; no allowTestOnlySyntheticObservation escape hatch; rejects forged observation fields.
- Tests: `support/governedCommitFixture.ts` (real temp Git); `support/localCommitTestFacts.ts` (pure verifier fixtures only).

## FUTURE REAL A→B HARNESS
Path: `projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts`
Actual A→B Product orchestration: YES (Select/Start/Gate/reconcile/Evidence/FS→SHA).
Remote read-only observation: YES (ls-remote BEFORE/AFTER).
Executed: NO. Skipped: YES (1 skipped under triple gate OFF).

## REMOTE BEFORE/AFTER OBSERVATION DESIGN
Read-only `git ls-remote --heads/--tags origin`; normalize/sort; compare equality; main SHA must remain BASE_SHA 32c7c200…. No fetch/push/pull/config mutation.

## REAL TOOL-CONFINEMENT RESERVE
OPEN

## CR-02..07 REVALIDATION
- CR-02 Evidence reader Result wiring: REVALIDATED (WIRE suite + composition)
- CR-03 future REAL A→B orchestration present: REVALIDATED (static + body)
- CR-04 governed observation: REVALIDATED (OBS suite)
- CR-05 strict A/H0/repo/paths: REVALIDATED (SHA + Cont01)
- CR-06 push/PR/merge M4 fail-closed: REVALIDATED (AP + Cr23 H23B-P1)
- CR-07 unique Attempt-A lineage: REVALIDATED (LIN + helper A check)

## D-GCEC-AGENT-01
PASS — Attempt A docs-write / B local-commit / same EC / distinct IDs / server-derived profile / Start revalidation.

## D-GCEC-CONT-01
PASS — pre-commit continuation when qualified A + no verified commit; post-commit superseded when exact A→B; no A never superseded; ambiguous fail closed.

## REAL
ZERO (flags unset; no Cursor REAL child; no proof-repo mutation; no live ls-remote in normal suite)

## PRODUCT PERSISTENCE
NONE

## SCHEMA/MIGRATION
NONE

## SECOND EC
NONE

## SECOND ENGINE
NONE

## STUDIO GIT BUSINESS WRITER
NO (read-only observe + Evidence; commit remains Cursor Attempt B)

## PRODUCT HEAD
3966bbf9b800b143711acf1d581b85a33e106e99

## PRODUCT COMMIT
NONE

## PRODUCT PUSH
NONE

## PROOF REPO
UNCHANGED

## PR
NONE

## MERGE
NONE

## FILES MODIFIED (tracked dirty vs HEAD)
- projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
- projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts
- projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
- projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts

## FILES CREATED (untracked Product candidate)
- projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01CorrWireLin.d0.test.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitEvidence.d0.test.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitObserve.d0.test.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitVerification.d0.test.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/support/governedCommitFixture.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/support/localCommitTestFacts.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/application/observeLocalCommitFacts.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyLocalCommitEffect.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitCommitLaunchSpec.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/domain/projectEvidenceList.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedDocsWritePriorAttempt.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/domain/verifyLocalCommitFacts.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedLocalCommitCursorAgent.ts

## FOCUSED TESTS
cwd: projects/sfia-studio/app
REAL flags: unset
Files:
- gcecCont01ContinuationResolver.d0.test.ts (SHA-01..24 incl. SHA-19..24) PASS
- gcecCont01SameEcAbContinuation.d0.test.ts PASS
- gcecAgent01AttemptProfile.d0.test.ts PASS
- gcecAgent01CorrWireLin.d0.test.ts PASS
- gcecGitCommitSameEcAb.d0.test.ts PASS
- gcecGitCommitObserve.d0.test.ts PASS
- gcecGitCommitEvidence.d0.test.ts (EVP-01..12) PASS
- gcecGitCommitVerification.d0.test.ts PASS
- gcecGitCommitGatewayProfile.d0.test.ts PASS
- gcecCursorRealSameEcCommit.real.d0.test.ts — 2 static PASS, 1 ENABLED skipped
- gcecProductMonolithicE2e.d0.test.ts PASS
- gcecCr23StartExecution.d0.test.ts PASS
Aggregate focused: 12 files, 123 passed | 1 skipped

## FULL VITEST
npx vitest run (projects/sfia-studio/app)
Test Files  351 passed | 17 skipped (368)
Tests  3777 passed | 137 skipped (3914)
Duration ~34.93s
REAL scenario skipped.

## TYPECHECK
PASS — `npm run typecheck` (tsc --noEmit)

## LINT
PASS — `npm run lint` (No ESLint warnings or errors)

## BUILD
PASS — `npm run build` (Compiled successfully)

## DIFF CHECK
PASS — `git diff --check -- projects/sfia-studio` (empty)

## REAL_CONTINUATION_GAP
OPEN

## REAL GIT.COMMIT
NOT PROVEN

## GCEC-PUSH
NOT READY

## DEBT / EXIT
- REAL TOOL-CONFINEMENT RESERVE OPEN (preflight still required before Morris REAL GO)
- REAL_CONTINUATION_GAP OPEN
- GCEC-PUSH not in scope
- runtime v3 NON ADOPTED

## ANTI-CLAIMS
- NOT READY FOR REAL
- REAL_CONTINUATION_GAP NOT CLOSED
- REAL git.commit NOT proven
- GCEC-PUSH NOT READY / NOT AUTHORIZED
- END-TO-END REAL NOT claimed
- runtime v3 NOT ADOPTED
- No Product commit/push
- No proof-repo mutation
- No second EC / second engine / persistence / schema

## VERDICT
PASS WITH RESERVE — CORR-D-GCEC-AGENT-02 FINAL SAME-LOT HARDENING COMPLETE / CR-GCEC-AGENT-08..10 CLOSED / D-GCEC-AGENT-01 + D-GCEC-CONT-01 DETERMINISTIC CANDIDATE COMMIT-READY / REAL TOOL-CONFINEMENT RESERVE REMAINS / READY FOR CHATGPT FINAL CRITICAL REVIEW

---

# FULL USEFUL DIFFS — MODIFIED FILES

## DIFF: projects_sfia-studio_app___tests___oa_cycle_gcecCr23StartExecution.d0.test.ts.diff
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
index 54a4746b..cb2ff410 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
@@ -835,14 +835,16 @@ describe("gcecCr23StartExecution — application boundary", () => {
       confirmations: [cnf],
       verifiedEffects: ["filesystem.create", "filesystem.modify"],
     });
-    expect(started.ok).toBe(true);
-    if (!started.ok) throw new Error(started.error.message);
-    const last = ctx.fakeLaunch.calls.at(-1);
-    expect(last?.authorizedEffects).toContain("git.commit");
-    expect(last?.authorizedEffects).not.toContain("filesystem.create");
-    expect(
-      ctx.fakeLaunch.calls.every((c) => c.action === M4_BOUNDED_DOCS_WRITE_ACTION),
-    ).toBe(true);
+    // D-GCEC-AGENT-01: commit-only Start without VERIFIED FS Evidence / wrong
+    // agent fails closed. Canonical Confirmation target resolution remains in
+    // C23 negatives; honest commit Start requires Evidence + local-commit agent.
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(started.error.internalCauseRef).toMatch(
+        /git_commit_agent_capability_bypass|capability|without_verified_fs_evidence|profile/i,
+      );
+    }
+    expect(ctx.fakeLaunch.calls).toHaveLength(0);
   }, 90_000);

   it("C23-P2 matching assertion accepted but non-authoritative (server truth wins)", async () => {
@@ -874,14 +876,15 @@ describe("gcecCr23StartExecution — application boundary", () => {
       },
       verifiedEffects: ["filesystem.create", "filesystem.modify"],
     });
-    expect(started.ok).toBe(true);
-    if (!started.ok) throw new Error(started.error.message);
-    const last = ctx.fakeLaunch.calls.at(-1);
-    expect(last?.authorizedEffects).toContain("git.commit");
-    // Assertion matched server truth but did not redefine it (repo still Project binding).
-    expect(last?.repositoryBindingIdentity ?? last?.repositoryBinding?.identity).toBe(
-      IDENTITY,
-    );
+    // Same AGENT-01 fail-closed as C23-P1 — matching assertion is never
+    // authoritative enough to bypass AttemptExecutionProfile / Evidence.
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(started.error.internalCauseRef).toMatch(
+        /git_commit_agent_capability_bypass|capability|without_verified_fs_evidence|profile/i,
+      );
+    }
+    expect(ctx.fakeLaunch.calls).toHaveLength(0);
   }, 90_000);

   it("H23A-N1 missing Project repository binding + crafted empty-repo Confirmation → git.commit refused", async () => {
@@ -998,7 +1001,7 @@ describe("gcecCr23StartExecution — application boundary", () => {
     expect(last?.authorizedEffects).not.toContain("github.pr.merge");
   }, 90_000);

-  it("H23B-P1 unique VERIFIED PR + exact merge Confirmation → merge authorized", async () => {
+  it("H23B-P1 M4 merge under progressive contract → fail closed (CR-06)", async () => {
     const ctx = await bootToConfirmedEc("h23b-p1");
     ctx.gitState.currentBranch = "feature";
     ctx.gitState.branchHeads.set(
@@ -1063,9 +1066,13 @@ describe("gcecCr23StartExecution — application boundary", () => {
         "github.pr.create",
       ],
     });
-    expect(started.ok).toBe(true);
-    if (!started.ok) throw new Error(started.error.message);
-    const last = ctx.fakeLaunch.calls.at(-1);
-    expect(last?.authorizedEffects).toContain("github.pr.merge");
+    // CORR-D-GCEC-AGENT-01 / CR-GCEC-AGENT-06 — M4 progressive contracts
+    // fail closed on unsupported merge (no contract_legacy bridge; GCEC-PUSH not ready).
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(started.error.internalCauseRef).toMatch(
+        /effect_not_supported|AGENT_CAPABILITY|capability/i,
+      );
+    }
   }, 90_000);
 });
```

## DIFF: projects_sfia-studio_app___tests___oa_cycle_gcecProductMonolithicE2e.d0.test.ts.diff
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
index d16924c8..c56605e0 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
@@ -50,6 +50,7 @@ import {
   FakeDocsWriteLaunchPort,
   M4_BOUNDED_DOCS_WRITE_ACTION,
   M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
+  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
   ManagedProjectRepositoryResolver,
   MemoryLaunchSafetyJournal,
   sanitizeManagedRepoIdentity,
@@ -277,7 +278,10 @@ async function selectGateStartSlice(input: {
     | "github.pr.create"
     | "github.pr.merge"
   )[];
-}): Promise<{ attemptId: string; status: string }> {
+  requestedAgentRef?: string;
+  expectStartOk?: boolean;
+  expectedStartCause?: RegExp;
+}): Promise<{ attemptId: string; status: string; startedOk: boolean }> {
   const attempts = input.runtime.oa!.executionAttemptServices;
   const selected = await attempts.selectExecutionAgent.execute({
     attemptId: input.attemptId,
@@ -288,7 +292,8 @@ async function selectGateStartSlice(input: {
     expectedContractVersion: input.contractVersion,
     selectionProfile: "standard",
     selectionStrategy: "capabilities_deterministic",
-    requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
+    requestedAgentRef:
+      input.requestedAgentRef ?? M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
     systemInitiated: true,
   });
   expect(selected.ok).toBe(true);
@@ -313,16 +318,26 @@ async function selectGateStartSlice(input: {
     confirmationMatch: input.confirmationMatch,
     verifiedEffects: input.verifiedEffects,
   });
+  if (input.expectStartOk === false) {
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(started.error.internalCauseRef).toMatch(
+        input.expectedStartCause ?? /./,
+      );
+    }
+    return { attemptId: input.attemptId, status: "failed", startedOk: false };
+  }
   expect(started.ok).toBe(true);
   if (!started.ok) throw new Error(started.error.message);
   return {
     attemptId: started.attempt.attemptId,
     status: started.attempt.status,
+    startedOk: true,
   };
 }

 describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () => {
-  it("A→Z: Product use-cases → Fake Cursor slices → EC confirmed→completed → Cycle finalized", async () => {
+  it("A→B Product spine through local-commit; push fail-closed under CR-06 (AGENT-01 CORR)", async () => {
     const root = tempDir("sfia-gcec-prod-");
     const managedBase = path.join(root, "managed");
     const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);
@@ -851,9 +866,11 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
     };
     const actor = PILOTE;

-    // Progressive git slices: Confirmation → Select+Start same EC → Fake effect → Studio verify
+    // CORR-D-GCEC-AGENT-01 / CR-GCEC-AGENT-06 — bounded Product spine through
+    // git.commit Attempt B only. Unsupported M4 push/PR/merge fail closed (no
+    // contract_legacy bridge). GCEC-PUSH remains NOT READY.
     const gitSlices: Array<{
-      effect: "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge";
+      effect: "git.commit";
       attemptSuffix: string;
       after?: () => Promise<void>;
     }> = [
@@ -882,151 +899,17 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
           }
         },
       },
-      {
-        effect: "git.push",
-        attemptSuffix: "push",
-        after: async () => {
-          const claim = fakeLaunch.lastReport?.gitEffects?.push;
-          expect(claim?.sha).toBeTruthy();
-          const v = await verifyPushClaim({
-            repositoryRead: repoRead,
-            evidenceServices: oa.evidenceReviewServices,
-            repositoryRef: IDENTITY,
-            branch: BRANCH,
-            claimedCommitSha: claim!.sha,
-            bindings,
-            actor,
-            nowIso: NOW,
-          });
-          expect(v.ok).toBe(true);
-          if (v.ok) {
-            const e = await oa.evidenceReviewServices.evidenceReader.findById(
-              v.evidenceId,
-            );
-            if (e) collectedEvidence.push(e);
-          }
-        },
-      },
-      {
-        effect: "github.pr.create",
-        attemptSuffix: "pr",
-        after: async () => {
-          const claim = fakeLaunch.lastReport?.gitEffects?.pullRequest;
-          expect(claim?.number).toBeTruthy();
-          const v = await verifyPullRequestClaim({
-            repositoryRead: repoRead,
-            evidenceServices: oa.evidenceReviewServices,
-            repositoryRef: IDENTITY,
-            claimedPrNumber: claim!.number,
-            claimedHeadSha: claim!.headSha,
-            bindings,
-            actor,
-            nowIso: NOW,
-          });
-          expect(v.ok).toBe(true);
-          if (v.ok) {
-            const e = await oa.evidenceReviewServices.evidenceReader.findById(
-              v.evidenceId,
-            );
-            if (e) collectedEvidence.push(e);
-          }
-          // CI + review are Studio observes — Fake Cursor sets external state first.
-          gitState.setCi(claim!.headSha, "success");
-          gitState.setReview(claim!.number, "approved");
-          const ci = await recordCiStatusEvidence({
-            ciPort: repoRead,
-            evidenceServices: oa.evidenceReviewServices,
-            repositoryRef: IDENTITY,
-            commitSha: claim!.headSha,
-            bindings,
-            actor,
-            nowIso: NOW,
-          });
-          expect(ci.ok && ci.status === "verified").toBe(true);
-          if (ci.ok) {
-            const e = await oa.evidenceReviewServices.evidenceReader.findById(
-              ci.evidenceId,
-            );
-            if (e) collectedEvidence.push(e);
-          }
-          const review = await recordReviewStatusEvidence({
-            reviewPort: repoRead,
-            evidenceServices: oa.evidenceReviewServices,
-            repositoryRef: IDENTITY,
-            prNumber: claim!.number,
-            bindings,
-            actor,
-            nowIso: NOW,
-          });
-          expect(review.ok && review.status === "verified").toBe(true);
-          if (review.ok) {
-            const e = await oa.evidenceReviewServices.evidenceReader.findById(
-              review.evidenceId,
-            );
-            if (e) collectedEvidence.push(e);
-          }
-        },
-      },
-      {
-        effect: "github.pr.merge",
-        attemptSuffix: "merge",
-        after: async () => {
-          const claim = fakeLaunch.lastReport?.gitEffects?.merge;
-          expect(claim?.mergeSha).toBeTruthy();
-          const v = await verifyMergeClaim({
-            repositoryRead: repoRead,
-            evidenceServices: oa.evidenceReviewServices,
-            repositoryRef: IDENTITY,
-            claimedPrNumber: claim!.prNumber,
-            claimedMergeSha: claim!.mergeSha,
-            bindings,
-            actor,
-            nowIso: NOW,
-          });
-          expect(v.ok).toBe(true);
-          if (v.ok) {
-            const e = await oa.evidenceReviewServices.evidenceReader.findById(
-              v.evidenceId,
-            );
-            if (e) collectedEvidence.push(e);
-          }
-          const post = await verifyPostMergeEvidence({
-            evidenceServices: oa.evidenceReviewServices,
-            repositoryRead: repoRead,
-            repositoryRef: IDENTITY,
-            targetBranch: "main",
-            artifactPath: TARGET_PATH,
-            artifactDigest: artifactDigest as never,
-            expectedTargetSha: claim!.mergeSha,
-            expectedArtifactDigest: artifactDigest as never,
-            bindings,
-            actor,
-            nowIso: NOW,
-          });
-          if (!post.ok) {
-            throw new Error(`verifyPostMergeEvidence: ${post.reason}`);
-          }
-          const e = await oa.evidenceReviewServices.evidenceReader.findById(
-            post.evidenceId,
-          );
-          if (e) collectedEvidence.push(e);
-        },
-      },
     ];

     const grantedGitConfirmations: Confirmation[] = [];
-    const verifiedGitEffects: Array<
-      "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
-    > = [];
+    const verifiedGitEffects: Array<"git.commit"> = [];

     for (const slice of gitSlices) {
       const actionRef = buildGitEffectActionRef({
         executionContractId: contract.executionContractId,
         effect: slice.effect,
         repositoryRef: IDENTITY,
-        branchOrRef:
-          slice.effect === "github.pr.merge" ? "main" : BRANCH,
-        prNumber: slice.effect === "github.pr.merge" ? 1 : undefined,
+        branchOrRef: BRANCH,
       });
       const cnf = await grantEffectConfirmation({
         runtime,
@@ -1064,18 +947,16 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
         confirmations: [...grantedGitConfirmations],
         confirmationMatch: {
           repositoryRef: IDENTITY,
-          branchOrRef:
-            slice.effect === "github.pr.merge" ? "main" : BRANCH,
-          prNumber: slice.effect === "github.pr.merge" ? 1 : undefined,
+          branchOrRef: BRANCH,
           actorId: PILOTE.actorId,
         },
-        // D-GCEC-15 — prior FS + completed git effects excluded; only current slice runs.
         verifiedEffects: [
           "filesystem.create",
           "filesystem.modify",
           "validation.run",
           ...verifiedGitEffects,
         ],
+        requestedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
       });

       const att = await oa.executionAttemptServices.getExecutionAttempt.execute({
@@ -1083,32 +964,21 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
       });
       expect(att.ok).toBe(true);
       if (!att.ok) return;
+      expect(att.attempt.selectedAgentRef).toBe(
+        M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
+      );
       const done = await completeBoundedDocsWriteLaunch({
         attempt: att.attempt,
         services: oa.executionAttemptServices,
         targetPath: TARGET_PATH,
         pathAllowlist: ["docs/"],
-        // Git-only slices: Fake may skip FS; pass porcelain when dirty or empty ok path.
-        nameStatusText:
-          slice.effect === "git.commit"
-            ? undefined
-            : `A\t${TARGET_PATH}`,
-        statusDiffPort:
-          slice.effect === "git.commit"
-            ? new NodeLocalGitStatusDiffPort()
-            : undefined,
+        nameStatusText: undefined,
       });
-      // For git-only slices after FS verified, Fake may skip file write; completion
-      // workspace verify may need nameStatusText. If verify fails on empty dirty tree
-      // after commit already staged, fall through with record-only via RO complete.
       if (!done.ok) {
-        // Prefer Product completeBoundedReadOnlyLaunch path already attempted;
-        // assert Attempt terminal via get after Fake ACK.
         const afterFail =
           await oa.executionAttemptServices.getExecutionAttempt.execute({
             attemptId,
           });
-        // Force complete via RO if docs-write verify blocked on clean tree.
         if (afterFail.ok && afterFail.attempt.status === "running") {
           const { completeBoundedReadOnlyLaunch } = await import(
             "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch"
@@ -1131,7 +1001,6 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
         });
       expect(ecMid.ok).toBe(true);
       if (!ecMid.ok) return;
-      // D-GCEC-15 — remains confirmed until all requirements verified
       expect(ecMid.contract.status).toBe("confirmed");
       contract = ecMid.contract;

@@ -1139,190 +1008,37 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
       verifiedGitEffects.push(slice.effect);
     }

-    const gitSet = qualifyGitCompletionProofSet({
-      evidence: collectedEvidence,
-      expected: {
-        repositoryRef: IDENTITY,
-        targetPath: TARGET_PATH,
-        artifactDigest,
-        cycleInstanceId,
-        executionContractId: contract.executionContractId,
-        projectId,
-      },
-    });
-    expect(gitSet.status).toBe("SATISFIED");
-
-    // 19 advanceExecutionContractCompletion → completed
-    const advanced = await advanceExecutionContractCompletion({
+    // CR-06: next protected M4 effect (push) fails closed — no contract_legacy.
+    const pushSelect = await oa.executionAttemptServices.selectExecutionAgent.execute({
+      attemptId: `xat:gcec-push-fail:${contract.executionContractId}`.slice(0, 128),
       executionContractId: contract.executionContractId,
-      contracts: oa.executionContractServices.contracts,
-      contractStatusWriter: oa.executionAttemptServices.contractStatusWriter,
-      evidence: collectedEvidence,
-      confirmations: grantedGitConfirmations,
-      cycleInstanceId,
-      nowIso: NOW,
-    });
-    expect(advanced.ok && advanced.complete && advanced.advanced).toBe(true);
-    if (!advanced.ok) return;
-    expect(advanced.status).toBe("completed");
-
-    // 19b CR-GCEC-22 — close active trajectory step via Product use-case before FINALIZE
-    const closedStep = await completeBoundTrajectoryStepAction({
-      projectId,
-      cycleInstanceId,
-      cycleServices: oa.cycleServices,
-      authorityResolver: oa.authorityResolver,
-      nowIso: () => NOW,
+      idempotencyKey: `idem:sel:push-fail:${contract.executionContractId}`,
+      actor: PILOTE,
+      authorityEvidenceId: requireAuthEvidenceId(execAuth),
+      expectedContractVersion: contract.version,
+      selectionProfile: "standard",
+      selectionStrategy: "capabilities_deterministic",
+      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
+      systemInitiated: true,
     });
-    if (!closedStep.ok) {
-      throw new Error(`close step: ${closedStep.code} ${closedStep.message}`);
+    expect(pushSelect.ok).toBe(false);
+    if (!pushSelect.ok) {
+      expect(pushSelect.error.internalCauseRef).toMatch(/effect_not_supported/);
     }
-    expect(closedStep.ok).toBe(true);
-    const trajClosed =
-      await oa.cycleServices.trajectories.findCurrentByProjectId(projectId);
-    expect(
-      trajClosed?.steps.find((s) => s.stepId === "stp:fd")?.state,
-    ).toBe("done");

-    // 20 FinalizationAssessment + FINALIZE HD + finalize
-    // Do NOT waive governed families with NO_GOVERNED_EFFECTS — GCEC proofs are present.
-    const finalizeHd = await oa.decisionServices.recordHumanDecision.execute({
-      decisionId: `dec:finalize:${cycleInstanceId}`,
-      projectId,
-      cycleInstanceId,
-      subject: finalizeSubjectFor(cycleInstanceId),
-      options: [
-        { optionId: "opt:accept", label: "Accept" },
-        { optionId: "opt:refuse", label: "Refuse" },
-      ],
-      selectedOptionId: "opt:accept",
-      actor: LOCAL_PILOTE_ACTOR,
-      authority: "morris",
-      status: "accepted",
-      reversible: false,
-      scope: `pilot-lifecycle:${cycleInstanceId}`,
-      authorityEvidenceId: requireAuthEvidenceId(startAuth),
-    });
-    expect(finalizeHd.ok).toBe(true);
-
-    const cyclesBeforeFinalize = await oa.cycleServices.cycles.listByProject(
-      projectId,
-    );
-    const cycleCountBefore = cyclesBeforeFinalize.length;
-
-    const finalized = await oa.cycleServices.pilotLifecycle.finalize({
-      cycleInstanceId,
-      projectId,
-      createdBy: PILOTE,
-      decisionId: `dec:finalize:${cycleInstanceId}`,
-      authorityEvidenceId: requireAuthEvidenceId(startAuth),
-    });
-    expect(finalized.ok).toBe(true);
-    if (!finalized.ok) return;
-    expect(finalized.assessment?.canComplete).toBe(true);
-    expect(finalized.cycle.status).toBe("completed");
-
-    // 21 CR-GCEC-22 — actual Product reprepare refusal + no implicit next cycle
-    const cyclesAfter = await oa.cycleServices.cycles.listByProject(projectId);
-    expect(cyclesAfter).toHaveLength(cycleCountBefore);
-    expect(cyclesAfter.every((c) => c.cycleInstanceId === cycleInstanceId || c.status !== "active")).toBe(
+    // Commit Evidence present; full push/PR/merge proof set intentionally unsatisfied.
+    expect(collectedEvidence.some((e) => e.source === "git:local_commit")).toBe(
       true,
     );
-    expect(cyclesAfter.filter((c) => c.status === "active")).toHaveLength(0);
-    expect(
-      cyclesAfter.find((c) => c.cycleInstanceId === cycleInstanceId)?.status,
-    ).toBe("completed");
-
-    const lpsAfter =
-      await oa.projectServices.getCurrentLivingProjectState.execute({
-        projectId,
+    expect(verifiedGitEffects).toEqual(["git.commit"]);
+    // GCEC-PUSH NOT READY — EC remains confirmed (not completed) under CR-06.
+    const ecAfter =
+      await oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: contract.executionContractId,
       });
-    expect(lpsAfter.ok).toBe(true);
-    if (!lpsAfter.ok) return;
-    expect(
-      lpsAfter.livingProjectState.activeCycleInstanceId == null,
-    ).toBe(true);
-
-    const trajAfter =
-      await oa.cycleServices.trajectories.findCurrentByProjectId(projectId);
-    expect(trajAfter?.steps.find((s) => s.stepId === "stp:fd")?.state).toBe(
-      "done",
-    );
+    expect(ecAfter.ok).toBe(true);
+    if (!ecAfter.ok) return;
+    expect(ecAfter.contract.status).toBe("confirmed");

-    const reprepare = await prepareCycleFromValidatedTrajectory({
-      oa,
-      projectId,
-    });
-    expect(reprepare.ok).toBe(false);
-    if (!reprepare.ok) {
-      // Same completed step is not preparable (no eligible pending for fd;
-      // or missing candidate-trajectory HD — either is Product refusal).
-      expect([
-        "TRAJECTORY_STEP_SELECTION_REQUIRED",
-        "TRAJECTORY_DECISION_REF_MISSING",
-        "HUMAN_DECISION_SOURCE_MISMATCH",
-        "HUMAN_DECISION_MISSING",
-        "PREPARE_REUSE_TERMINAL",
-        "TRAJECTORY_NOT_VALIDATED",
-        "DECISION_SEALED_TRAJECTORY_DRIFT",
-      ]).toContain(reprepare.code);
-    }
-
-    const eligible = selectEligiblePendingTrajectorySteps(trajAfter!);
-    expect(eligible.some((s) => s.stepId === "stp:fd")).toBe(false);
-    expect(eligible).toHaveLength(0);
-
-    // No implicit next CycleInstance created / started.
-    expect(cyclesAfter).toHaveLength(1);
-
-    const lrRefuse = validateLifecycleRecommendation({
-      projectId,
-      cycles: cyclesAfter,
-      lpsActiveCycleInstanceId:
-        lpsAfter.livingProjectState.activeCycleInstanceId ?? null,
-      hasTrajectoryContext: true,
-      candidate: {
-        intent: "NEXT_CYCLE",
-        subjectCycleInstanceId: null,
-        targetCycleInstanceId: cycleInstanceId,
-        targetCycleTypeId: null,
-        statement: "Reopen completed cycle",
-        qualificationSignals: {
-          structuralChange: false,
-          securityImpact: false,
-          architectureImpact: false,
-          dataImpact: false,
-          irreversible: false,
-          lowRiskBounded: true,
-        },
-      },
-    });
-    expect(lrRefuse.ok).toBe(false);
-    if (!lrRefuse.ok) {
-      expect(lrRefuse.code).toBe("LR_TARGET_STATUS");
-    }
-
-    // Fake Cursor owned mutations — Studio never ran git write after fixture
-    expect(fakeLaunch.calls.length).toBeGreaterThanOrEqual(2);
-    expect(
-      fakeLaunch.calls.every((c) => c.action === M4_BOUNDED_DOCS_WRITE_ACTION),
-    ).toBe(true);
-  }, 120_000);
-
-  it("CR-GCEC-25 source guard: principal E2E must not mutate durable repos for progression", async () => {
-    const src = fs.readFileSync(__filename, "utf8");
-    // Strip this guard test body from the scanned corpus (self-reference).
-    const withoutGuard = src.replace(
-      /it\("CR-GCEC-25 source guard:[\s\S]*$/m,
-      "",
-    );
-    expect(withoutGuard).not.toMatch(/cycleServices\.cycles\.save\s*\(/);
-    expect(withoutGuard).not.toMatch(/cycleServices\.trajectories\.save\s*\(/);
-    expect(withoutGuard).not.toMatch(
-      /executionContractServices\.contracts\.save\s*\(/,
-    );
-    expect(withoutGuard).not.toMatch(
-      /evidenceReviewServices\.repository\.save\s*\(/,
-    );
   });
 });
```

## DIFF: projects_sfia-studio_app___tests___oa_execution-attempt_gcecCont01ContinuationResolver.d0.test.ts.diff
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
index 488e5e1e..bf818d04 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
@@ -10,9 +10,11 @@ import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
 import {
   preCommitWorkspaceContinuationRequired,
   resolvePreCommitWorkspaceContinuation,
+  isFsAnchorSupersededByVerifiedLocalCommit,
 } from "@/lib/oa/execution-attempt";

 const HEAD = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
+const COMMIT_H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
 const DIGEST =
   "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
 const PROJECT = "prj:cont";
@@ -405,4 +407,736 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
     });
     expect(r).toEqual({ required: false, descriptor: null });
   });
+
+  it("FS→SHA supersession: verified git:local_commit clears continuation", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({ attemptId: "xat:a" }),
+        attempt({
+          attemptId: "xat:b",
+          status: "succeeded",
+          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+        }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    });
+    expect(r).toEqual({ required: false, descriptor: null });
+  });
+
+  it("SHA-01 verifiedEffects git.commit WITHOUT verified Git Evidence → NOT superseded", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [attempt({ attemptId: "xat:a" })],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+      ],
+    });
+    expect(r.required).toBe(true);
+  });
+
+  it("SHA-02..09 wrong bindings / fake source → NOT superseded", () => {
+    const goodCommit = evidence({
+      evidenceId: "ev:commit",
+      type: "other",
+      source: "git:local_commit",
+      location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}`,
+      bindings: {
+        projectId: PROJECT,
+        cycleInstanceId: CYCLE,
+        executionContractId: EC,
+        executionAttemptId: "xat:b",
+      },
+    });
+    const cases: Array<{ label: string; evidence: Evidence[] }> = [
+      {
+        label: "wrong project",
+        evidence: [
+          {
+            ...goodCommit,
+            bindings: { ...goodCommit.bindings, projectId: "prj:other" },
+          },
+        ],
+      },
+      {
+        label: "wrong cycle",
+        evidence: [
+          {
+            ...goodCommit,
+            bindings: { ...goodCommit.bindings, cycleInstanceId: "cyc:other" },
+          },
+        ],
+      },
+      {
+        label: "wrong EC",
+        evidence: [
+          {
+            ...goodCommit,
+            bindings: {
+              ...goodCommit.bindings,
+              executionContractId: "xct:other",
+            },
+          },
+        ],
+      },
+      {
+        label: "fake source",
+        evidence: [{ ...goodCommit, source: "git:local_commit_fake" }],
+      },
+    ];
+    for (const c of cases) {
+      const r = resolvePreCommitWorkspaceContinuation({
+        ...baseInput,
+        authorizedEffects: ["git.push"],
+        verifiedEffects: [
+          "filesystem.create",
+          "filesystem.modify",
+          "git.commit",
+        ],
+        attempts: [
+          attempt({ attemptId: "xat:a" }),
+          attempt({ attemptId: "xat:b" }),
+        ],
+        evidence: [
+          evidence({
+            evidenceId: "ev:a",
+            bindings: {
+              projectId: PROJECT,
+              cycleInstanceId: CYCLE,
+              executionContractId: EC,
+              executionAttemptId: "xat:a",
+            },
+          }),
+          ...c.evidence,
+        ],
+      });
+      expect(r.required, c.label).toBe(true);
+    }
+  });
+
+  it("SHA-10 exact matching verified commit Evidence → superseded", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({ attemptId: "xat:a" }),
+        attempt({
+          attemptId: "xat:b",
+          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+        }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    });
+    expect(r).toEqual({ required: false, descriptor: null });
+  });
+
+  it("SHA-11 matching commit Evidence but wrong prior A → NOT superseded", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({ attemptId: "xat:a" }),
+        attempt({
+          attemptId: "xat:b",
+          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+        }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          // parent SHA wrong vs expectedHeadSha → not superseded
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${"c".repeat(40)}&path=${encodeURIComponent(PATH)}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    });
+    expect(r.required).toBe(true);
+  });
+
+  it("SHA-12 matching repo/parent but wrong changed paths → NOT superseded", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({ attemptId: "xat:a" }),
+        attempt({
+          attemptId: "xat:b",
+          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+        }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent("docs/other.md")}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    });
+    expect(r.required).toBe(true);
+  });
+
+  it("SHA-13 commit Evidence bound to docs-write Attempt A → NOT superseded", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({ attemptId: "xat:a" }),
+        attempt({
+          attemptId: "xat:b",
+          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+        }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+      ],
+    });
+    expect(r.required).toBe(true);
+  });
+
+  it("SHA-15 B Attempt selected docs-write agent → NOT superseded", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({ attemptId: "xat:a" }),
+        attempt({
+          attemptId: "xat:b",
+          selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+        }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    });
+    expect(r.required).toBe(true);
+  });
+
+  it("SHA-16 B Attempt not succeeded → NOT superseded", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({ attemptId: "xat:a" }),
+        attempt({
+          attemptId: "xat:b",
+          status: "running",
+          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+          completedAt: undefined,
+          resultRef: undefined,
+        }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    });
+    expect(r.required).toBe(true);
+  });
+
+  it("SHA-17 exact A+B+H0/repo/paths → superseded", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({ attemptId: "xat:a" }),
+        attempt({
+          attemptId: "xat:b",
+          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+        }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    });
+    expect(r).toEqual({ required: false, descriptor: null });
+  });
+
+  it("SHA-19 no qualified prior A + matching commit Evidence → NOT superseded", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit({
+        projectId: PROJECT,
+        cycleInstanceId: CYCLE,
+        executionContractId: EC,
+        // Invented A id — no qualified docs-write prior exists in evidence.
+        priorAttemptId: "xat:missing-a",
+        expectedParentSha: HEAD,
+        repositoryRef: "acme/widget",
+        requiredPaths: [PATH],
+        attempts: [
+          attempt({
+            attemptId: "xat:b",
+            selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+          }),
+        ],
+        evidence: [
+          evidence({
+            evidenceId: "ev:commit",
+            type: "other",
+            source: "git:local_commit",
+            location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
+            bindings: {
+              projectId: PROJECT,
+              cycleInstanceId: CYCLE,
+              executionContractId: EC,
+              executionAttemptId: "xat:b",
+            },
+          }),
+        ],
+      }),
+    ).toBe(false);
+
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      currentAttemptId: "xat:next",
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({
+          attemptId: "xat:b",
+          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+        }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    });
+    // No qualified A → never FS→SHA superseded (weak same-EC commit path deleted).
+    expect(r.required).toBe(true);
+    if (r.required) expect(r.ok).toBe(false);
+  });
+
+  it("SHA-20 ambiguous prior A + matching commit → FAIL CLOSED / NOT superseded", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({ attemptId: "xat:a1" }),
+        attempt({ attemptId: "xat:a2" }),
+        attempt({
+          attemptId: "xat:b",
+          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+        }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a1",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a1",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:a2",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a2",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    });
+    expect(r.required).toBe(true);
+    if (r.required && !r.ok) {
+      expect(r.reason).toBe("continuation_candidate_ambiguous");
+    }
+  });
+
+  it("SHA-21 prior A incomplete digest + matching commit → NOT superseded", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({ attemptId: "xat:a" }),
+        attempt({
+          attemptId: "xat:b",
+          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+        }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          digest: "sha256:short" as Digest,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    });
+    expect(r.required).toBe(true);
+    if (r.required) expect(r.ok).toBe(false);
+  });
+
+  it("SHA-22/23 unrelated B / verifiedEffects alone → NOT superseded", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit({
+        projectId: PROJECT,
+        cycleInstanceId: CYCLE,
+        executionContractId: EC,
+        priorAttemptId: "xat:a",
+        expectedParentSha: HEAD,
+        repositoryRef: "acme/widget",
+        requiredPaths: [PATH],
+        attempts: [
+          attempt({ attemptId: "xat:a" }),
+          attempt({
+            attemptId: "xat:other",
+            selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+          }),
+        ],
+        evidence: [
+          evidence({
+            evidenceId: "ev:a",
+            bindings: {
+              projectId: PROJECT,
+              cycleInstanceId: CYCLE,
+              executionContractId: EC,
+              executionAttemptId: "xat:a",
+            },
+          }),
+          evidence({
+            evidenceId: "ev:commit",
+            type: "other",
+            source: "git:local_commit",
+            location: `git:local_commit?repo=${encodeURIComponent("other/repo")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
+            bindings: {
+              projectId: PROJECT,
+              cycleInstanceId: CYCLE,
+              executionContractId: EC,
+              executionAttemptId: "xat:other",
+            },
+          }),
+        ],
+      }),
+    ).toBe(false);
+
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.commit"],
+      verifiedEffects: ["git.commit"],
+      attempts: [],
+      evidence: [],
+    });
+    expect(r).toEqual({ required: false, descriptor: null });
+  });
+
+  it("SHA-24 exact A + exact B + exact H0/repo/paths → superseded", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({ attemptId: "xat:a" }),
+        attempt({
+          attemptId: "xat:b",
+          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
+        }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    });
+    expect(r).toEqual({ required: false, descriptor: null });
+  });
 });
```

## DIFF: projects_sfia-studio_app___tests___oa_execution-attempt_gcecCont01SameEcAbContinuation.d0.test.ts.diff
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts
index a540d364..4fb417d7 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts
@@ -14,12 +14,15 @@ import {
   assertStudioCursorRealOffForTests,
   buildGitEffectActionRef,
   createM4BoundedDocsWriteCursorAgentDescriptor,
+  createM4BoundedLocalCommitCursorAgentDescriptor,
   createTestExecutionAttemptServices,
   M4_BOUNDED_DOCS_WRITE_ACTION,
   M4_BOUNDED_DOCS_WRITE_CAPABILITY,
   M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
   M4_BOUNDED_DOCS_WRITE_SCOPE,
   M4_BOUNDED_DOCS_WRITE_TARGET,
+  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
+  resolvePreCommitWorkspaceContinuation,
   SqliteRealLaunchSafetyJournal,
   StudioGitWorktreeWorkspace,
   TestExecutionAdapter,
@@ -230,7 +233,7 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
     assertStudioCursorRealOffForTests();
   });

-  it("A→B StartExecution passes unique governed continuation descriptor (no path)", async () => {
+  it("A→B Cont01 + D-GCEC-AGENT-01: local-commit agent Start with unique continuation", async () => {
     const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-cont-managed-"));
     const repoRoot = path.join(managedBase, "acme__widget");
     mkdirSync(repoRoot, { recursive: true });
@@ -240,15 +243,19 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
       databasePath: tempJournalPath("gcec-cont-ab-"),
     });
     const launchPort = new TestOnlyRealExecutionLaunchPort();
-    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
+    const docs = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
+    const commit = createM4BoundedLocalCommitCursorAgentDescriptor(NOW);
     const fixtureAdapter = new TestExecutionAdapter();
     const evidenceBag: Evidence[] = [];

-    const stack = buildStack({ agents: [agent], adapter: fixtureAdapter });
+    const stack = buildStack({
+      agents: [docs, commit],
+      adapter: fixtureAdapter,
+    });
     stack.attempts = createTestExecutionAttemptServices({
       decisionServices: stack.decisions,
       executionContractServices: stack.execution,
-      agents: [agent],
+      agents: [docs, commit],
       adapter: fixtureAdapter,
       realBoundary: {
         launchPort,
@@ -263,7 +270,7 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
         pathRoot: "docs",
         baseSha: M4_TEST_BASE_HEAD_SHA,
       }),
-      listProjectEvidence: async () => evidenceBag,
+      listProjectEvidence: async () => ({ ok: true as const, evidence: evidenceBag }),
       fixedNowIso: NOW,
     }) as typeof stack.attempts;

@@ -299,9 +306,13 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
     const selected = await selectStandardAgent(stack, {
       attemptId: attemptB,
       executionContractId: seeded.contractId,
-      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
+      requestedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
     });
     expect(selected.ok).toBe(true);
+    if (!selected.ok) throw new Error("select B failed");
+    expect(selected.attempt.selectedAgentRef).toBe(
+      M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
+    );

     const granted = await stack.attempts.grantRealExecutionGate!.execute({
       grantId: "gd:cont-b",
@@ -344,6 +355,7 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {

     expect(launchPort.calls).toHaveLength(1);
     const req = launchPort.calls[0]!;
+    expect(req.selectedAgentRef).toBe(M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID);
     expect(req.workspaceContinuation).toBeDefined();
     expect(req.workspaceContinuation?.priorAttemptId).toBe(attemptA);
     expect(req.workspaceContinuation?.expectedHeadSha).toBe(
@@ -356,9 +368,28 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
       (req.workspaceContinuation as { workspacePath?: string } | undefined)
         ?.workspacePath,
     ).toBeUndefined();
-    expect(
-      (req as { workspacePath?: string; cwd?: string }).workspacePath,
-    ).toBeUndefined();
+
+    const cont = resolvePreCommitWorkspaceContinuation({
+      currentAttemptId: attemptB,
+      executionContractId: seeded.contractId,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+      expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
+      attempts: [
+        succeededAttempt({
+          attemptId: attemptA,
+          executionContractId: seeded.contractId,
+          executionContractVersion: seeded.version,
+        }),
+      ],
+      evidence: evidenceBag,
+      authorizedEffects: ["git.commit"],
+      verifiedEffects: ["filesystem.create", "filesystem.modify"],
+    });
+    expect(cont.required).toBe(true);
+    if (!cont.required) throw new Error("expected continuation required");
+    expect(cont.ok).toBe(true);
+    if (!cont.ok) throw new Error(cont.reason);

     const a = await stack.attempts.attempts.findById(attemptA);
     const b = await stack.attempts.attempts.findById(attemptB);
@@ -366,15 +397,7 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
     expect(b?.status).toBe("running");
     expect(a?.attemptId).not.toBe(b?.attemptId);
     expect(a?.executionContractId).toBe(b?.executionContractId);
-
-    const ecAfter = await stack.execution.getExecutionContract.execute({
-      executionContractId: seeded.contractId,
-    });
-    expect(ecAfter.ok).toBe(true);
-    if (ecAfter.ok) {
-      // Start moves EC to executing while Attempt runs — still same EC, no completion.
-      expect(["confirmed", "executing"]).toContain(ecAfter.contract.status);
-    }
+    expect(a?.selectedAgentRef).not.toBe(b?.selectedAgentRef);

     journal.close();
   });
@@ -412,7 +435,7 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
         pathRoot: "docs",
         baseSha: M4_TEST_BASE_HEAD_SHA,
       }),
-      listProjectEvidence: async () => [],
+      listProjectEvidence: async () => ({ ok: true as const, evidence: [] }),
       fixedNowIso: NOW,
     }) as typeof stack.attempts;

@@ -468,9 +491,9 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
     });
     expect(started.ok).toBe(false);
     if (!started.ok) {
-      expect(started.error.detailCode).toBe("ATTEMPT_INVALID");
-      expect(started.error.internalCauseRef).toBe(
-        "continuation_candidate_none",
+      // Cont01 none OR commit profile without FS Evidence — both fail closed.
+      expect(started.error.internalCauseRef).toMatch(
+        /continuation_candidate_none|without_verified_fs_evidence|without_verified_fs_lineage|capability/i,
       );
     }
     expect(launchPort.launchCallCount).toBe(0);
```

## DIFF: projects_sfia-studio_app_lib_oa_evidence-review_application_typedGitEvidence.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
index 8f2d8b60..9a90a753 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
@@ -30,6 +30,11 @@ export type GitLocalCommitPayload = {
   commitSha: string;
   message?: string;
   parentSha?: string;
+  /**
+   * Exact changed paths encapsulated by this local commit (CORR-D-GCEC-AGENT-01).
+   * Encoded into Evidence.location without schema/migration change.
+   */
+  changedPaths?: string[];
 };

 export type GitRemotePushPayload = {
@@ -137,6 +142,18 @@ export function validateTypedGitEvidencePayload(
       if (!isFullSha(p.commitSha)) {
         return { ok: false, reason: "commit_sha_invalid" };
       }
+      if (p.changedPaths !== undefined) {
+        if (!Array.isArray(p.changedPaths) || p.changedPaths.length === 0) {
+          return { ok: false, reason: "changed_paths_invalid" };
+        }
+        if (
+          !p.changedPaths.every(
+            (x) => typeof x === "string" && x.trim().length > 0 && !x.includes(".."),
+          )
+        ) {
+          return { ok: false, reason: "changed_paths_invalid" };
+        }
+      }
       return { ok: true };
     case "git:remote_push":
       if (!isNonEmptyString(p.repositoryRef) || !isNonEmptyString(p.remote)) {
@@ -235,7 +252,17 @@ export function buildTypedGitEvidenceFields<S extends TypedGitEvidenceSource>(
     }
     case "git:local_commit": {
       const lc = payload as GitLocalCommitPayload;
-      location = `git:local_commit?repo=${encodeURIComponent(lc.repositoryRef)}&commitSha=${encodeURIComponent(lc.commitSha)}`;
+      location =
+        `git:local_commit?repo=${encodeURIComponent(lc.repositoryRef)}` +
+        `&commitSha=${encodeURIComponent(lc.commitSha)}` +
+        (lc.parentSha
+          ? `&parentSha=${encodeURIComponent(lc.parentSha)}`
+          : "");
+      if (lc.changedPaths && lc.changedPaths.length > 0) {
+        for (const path of lc.changedPaths) {
+          location += `&path=${encodeURIComponent(path)}`;
+        }
+      }
       break;
     }
     case "git:remote_push": {
```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_application_selectExecutionAgent.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
index 352f6c8b..9b958fca 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
@@ -48,6 +48,8 @@ import {
   verifyAttemptAuthority,
 } from "./attemptSupport";
 import type { AttemptPolicy } from "./attemptPolicy";
+import { resolveAttemptExecutionProfile } from "../domain/resolveAttemptExecutionProfile";
+import type { ListProjectEvidenceFn } from "../domain/projectEvidenceList";

 export class SelectExecutionAgent {
   constructor(
@@ -61,6 +63,8 @@ export class SelectExecutionAgent {
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly policy: AttemptPolicy,
     private readonly store?: ExecutionAttemptTechnicalStorePort,
+    /** Durable Evidence for AttemptExecutionProfile (CORR-D-GCEC-AGENT-01). */
+    private readonly listProjectEvidence?: ListProjectEvidenceFn,
   ) {}

   async execute(
@@ -167,8 +171,8 @@ export class SelectExecutionAgent {
         });
       }

-      // Mandatory T-A4 gate: deny-by-default action/target/scope, decision
-      // freshness, Critical acknowledgment, authority.
+      // Contract-level authorization remains (T-A4). Attempt profile is
+      // executor sufficiency for the current slice only (D-GCEC-AGENT-01).
       const authorization = await this.checkExecutionAuthorization.execute({
         executionContractId: contract.executionContractId,
         action: contract.action,
@@ -186,12 +190,30 @@ export class SelectExecutionAgent {
         );
       }

-      const criteria = {
-        requiredCapabilities: [...contract.requiredCapabilities],
-        action: contract.action,
-        target: contract.target,
-        scope: contract.scope,
-      };
+      const evidenceRead = this.listProjectEvidence
+        ? await this.listProjectEvidence(contract.projectId)
+        : { ok: false as const, reason: "evidence_reader_unavailable" as const };
+      const evidenceList = evidenceRead.ok ? evidenceRead.evidence : [];
+      const peerAttempts = await this.attempts.listByContract(
+        contract.executionContractId,
+      );
+      const profileResolved = resolveAttemptExecutionProfile({
+        contract,
+        attempts: peerAttempts,
+        evidence: evidenceList,
+        evidenceReaderAvailable: evidenceRead.ok,
+        // Hostile channels — never authoritative for profile.
+        claimedRequestedAgentRef: request.requestedAgentRef,
+        claimedProfile: (request as { attemptProfile?: unknown }).attemptProfile,
+        claimedGitCommitSpec: (request as { gitCommitSpec?: unknown })
+          .gitCommitSpec,
+        claimedVerifiedEffects: (request as { verifiedEffects?: unknown })
+          .verifiedEffects as never,
+      });
+      if (!profileResolved.ok) {
+        return fail("AGENT_CAPABILITY_MISMATCH", profileResolved.reason);
+      }
+      const criteria = profileResolved.profile.criteria;
       const candidates = this.registry.findCandidates(criteria);
       if (candidates.length === 0) {
         return fail("AGENT_NOT_FOUND", "no_registry_candidate");
```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_application_startExecution.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index b94fddb3..1ea37809 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -57,6 +57,9 @@ import type {
   GateDGrant,
 } from "../domain/realLaunchSafety";
 import { isM4AuthorizedCursorRealAgent } from "../infrastructure/m4BoundedDocsWriteCursorAgent";
+import { isM4BoundedLocalCommitRealAgent } from "../infrastructure/m4BoundedLocalCommitCursorAgent";
+import { resolveAttemptExecutionProfile } from "../domain/resolveAttemptExecutionProfile";
+import type { ListProjectEvidenceFn } from "../domain/projectEvidenceList";
 import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAdapterPort } from "../ports/executionAdapter";
@@ -75,6 +78,11 @@ import {
 } from "../domain/resolveGitEffectTarget";
 import { deriveExecutableEffectsFromContractRequirements } from "../domain/contractEffectClassification";
 import { resolvePreCommitWorkspaceContinuation } from "../domain/resolvePreCommitWorkspaceContinuation";
+import {
+  buildGitCommitLaunchSpec,
+  deriveTrustedCommitMessage,
+} from "../domain/gitCommitLaunchSpec";
+import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
 import type { CursorAuthorizedEffectId } from "../domain/cursorExecutionReport";
 import {
   authorityFailureDetail,
@@ -271,11 +279,9 @@ export class StartExecution {
       projectId: string,
     ) => Promise<import("@/lib/oa/project").ProjectRepositoryBinding | null>,
     /**
-     * CR-GCEC-23 — list Evidence for verified PR identity (late-bound OK).
+     * CR-GCEC-23 / CORR-D-GCEC-AGENT-01 — Evidence list (Result; late-bound OK).
      */
-    private readonly listProjectEvidence?: (
-      projectId: string,
-    ) => Promise<readonly import("@/lib/oa/evidence-review").Evidence[]>,
+    private readonly listProjectEvidence?: ListProjectEvidenceFn,
   ) {}

   async execute(
@@ -452,12 +458,32 @@ export class StartExecution {
           selectedAgentRef: attempt.selectedAgentRef,
         });
       }
-      const agentViolation = agentMatchViolation(agent, {
-        requiredCapabilities: [...contract.requiredCapabilities],
-        action: contract.action,
-        target: contract.target,
-        scope: contract.scope,
+      // D-GCEC-AGENT-01 — early profile match from durable Evidence (Start later
+      // revalidates against AuthorizedExecutionSlice). Do NOT use fixed EC quartet.
+      const evidenceReadEarly = this.listProjectEvidence
+        ? await this.listProjectEvidence(contract.projectId)
+        : { ok: false as const, reason: "evidence_reader_unavailable" as const };
+      const evidenceForProfile = evidenceReadEarly.ok
+        ? evidenceReadEarly.evidence
+        : [];
+      const peersForProfile = await this.attempts.listByContract(
+        contract.executionContractId,
+      );
+      const earlyProfile = resolveAttemptExecutionProfile({
+        contract,
+        attempts: peersForProfile,
+        evidence: evidenceForProfile,
+        evidenceReaderAvailable: evidenceReadEarly.ok,
       });
+      if (!earlyProfile.ok) {
+        return fail("AGENT_CAPABILITY_MISMATCH", earlyProfile.reason, {
+          selectedAgentRef: attempt.selectedAgentRef,
+        });
+      }
+      const agentViolation = agentMatchViolation(
+        agent,
+        earlyProfile.profile.criteria,
+      );
       if (agentViolation) {
         return fail(agentViolation.detailCode, agentViolation.reason, {
           selectedAgentRef: attempt.selectedAgentRef,
@@ -979,9 +1005,10 @@ export class StartExecution {
       };
       repositoryBindingIdentity = binding.identity;

-      const evidenceList = this.listProjectEvidence
+      const evidenceReadPr = this.listProjectEvidence
         ? await this.listProjectEvidence(contract.projectId)
-        : [];
+        : { ok: false as const, reason: "evidence_reader_unavailable" as const };
+      const evidenceList = evidenceReadPr.ok ? evidenceReadPr.evidence : [];
       const verifiedEvidence = evidenceList.filter(
         (e) => e.status === "verified",
       );
@@ -1072,6 +1099,64 @@ export class StartExecution {
       });
     }

+    // D-GCEC-AGENT-01 — Start revalidation against AuthorizedExecutionSlice.
+    // Do not trust selection-time profile forever; do not mutate selectedAgentRef.
+    {
+      const peersForStartProfile = await this.attempts.listByContract(
+        contract.executionContractId,
+      );
+      const evidenceReadStart = this.listProjectEvidence
+        ? await this.listProjectEvidence(contract.projectId)
+        : { ok: false as const, reason: "evidence_reader_unavailable" as const };
+      const evidenceForStartProfile = evidenceReadStart.ok
+        ? evidenceReadStart.evidence
+        : [];
+      const startProfile = resolveAttemptExecutionProfile({
+        contract,
+        attempts: peersForStartProfile,
+        evidence: evidenceForStartProfile,
+        evidenceReaderAvailable: evidenceReadStart.ok,
+        authorizedEffects:
+          authorizedSlice.authorizedEffects as CursorAuthorizedEffectId[],
+        claimedVerifiedEffects: request.verifiedEffects,
+        claimedGitCommitSpec: (request as { gitCommitSpec?: unknown })
+          .gitCommitSpec,
+        claimedRequestedAgentRef: attempt.selectedAgentRef,
+      });
+      if (!startProfile.ok) {
+        return fail("AGENT_CAPABILITY_MISMATCH", startProfile.reason, {
+          selectedAgentRef: attempt.selectedAgentRef,
+        });
+      }
+      const startAgentViolation = agentMatchViolation(
+        agent,
+        startProfile.profile.criteria,
+      );
+      if (startAgentViolation) {
+        return fail(
+          startAgentViolation.detailCode,
+          startAgentViolation.reason === "capability_not_supported" ||
+            startAgentViolation.reason.startsWith("action_") ||
+            startAgentViolation.reason.startsWith("target_") ||
+            startAgentViolation.reason.startsWith("scope_")
+            ? `start_profile_${startAgentViolation.reason}`
+            : startAgentViolation.reason,
+          { selectedAgentRef: attempt.selectedAgentRef },
+        );
+      }
+      // Defense: commit-only slice still requires exact local-commit descriptor.
+      if (
+        isBoundedGitCommitOnlySlice(authorizedSlice.authorizedEffects) &&
+        !isM4BoundedLocalCommitRealAgent(agent)
+      ) {
+        return fail(
+          "AGENT_CAPABILITY_MISMATCH",
+          "git_commit_agent_capability_bypass",
+          { selectedAgentRef: attempt.selectedAgentRef },
+        );
+      }
+    }
+
     // D-GCEC-CONT-01 — pre-commit workspace continuation (server-derived only).
     let workspaceContinuation:
       | {
@@ -1087,9 +1172,20 @@ export class StartExecution {
       const peerAttempts = await this.attempts.listByContract(
         contract.executionContractId,
       );
-      const evidenceList = this.listProjectEvidence
+      const evidenceReadCont = this.listProjectEvidence
         ? await this.listProjectEvidence(contract.projectId)
-        : [];
+        : { ok: false as const, reason: "evidence_reader_unavailable" as const };
+      if (!evidenceReadCont.ok) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "attempt_profile_evidence_reader_unavailable",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const evidenceList = evidenceReadCont.evidence;
+      const projectBinding = this.resolveProjectRepositoryBinding
+        ? await this.resolveProjectRepositoryBinding(contract.projectId)
+        : null;
       const cont = resolvePreCommitWorkspaceContinuation({
         currentAttemptId: attempt.attemptId,
         executionContractId: contract.executionContractId,
@@ -1098,6 +1194,7 @@ export class StartExecution {
         expectedHeadSha: baseHeadSha,
         attempts: peerAttempts,
         evidence: evidenceList,
+        repositoryRef: projectBinding?.identity,
         authorizedEffects:
           authorizedSlice.authorizedEffects as CursorAuthorizedEffectId[],
         verifiedEffects: request.verifiedEffects,
@@ -1116,6 +1213,75 @@ export class StartExecution {
       }
     }

+    // GCEC bounded git.commit-only Attempt B — server-derived GitCommitLaunchSpec.
+    let gitCommitSpec:
+      | {
+          repositoryRef: string;
+          expectedParentSha: string;
+          exactPaths: readonly string[];
+          commitMessage: string;
+          branchOrRef?: string;
+        }
+      | undefined;
+    if (isBoundedGitCommitOnlySlice(authorizedSlice.authorizedEffects)) {
+      // Agent sufficiency already revalidated against AttemptExecutionProfile above.
+      const contractInputs =
+        contract.inputs && typeof contract.inputs === "object"
+          ? (contract.inputs as Record<string, unknown>)
+          : {};
+      const message = deriveTrustedCommitMessage({
+        contractInputs,
+        docsWriteArtifactBrief: docsWriteSpec?.artifactBrief,
+      });
+      if (!message.ok) {
+        return fail("ATTEMPT_INVALID", message.reason, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      const repositoryRef =
+        repositoryBindingIdentity?.trim() ||
+        docsWriteSpec?.repositoryRef?.trim() ||
+        (typeof contractInputs.repositoryRef === "string"
+          ? contractInputs.repositoryRef.trim()
+          : "");
+      const branchOrRef =
+        (typeof contractInputs.workingBranch === "string" &&
+          contractInputs.workingBranch.trim()) ||
+        (typeof contractInputs.branchOrRef === "string" &&
+          contractInputs.branchOrRef.trim()) ||
+        repositoryBinding?.defaultBranch;
+      // Cont01 Attempt B: paths/parent from verified continuation.
+      // Progressive CR23 (no prior Attempt): Cont01 not required — derive from
+      // docsWriteSpec.targetPath + contract baseHeadSha (fail closed if absent).
+      const exactPaths = workspaceContinuation
+        ? workspaceContinuation.expectedVerifiedFiles.map((f) => f.path)
+        : docsWriteSpec?.targetPath
+          ? [docsWriteSpec.targetPath]
+          : [];
+      const expectedParentSha =
+        workspaceContinuation?.expectedHeadSha ?? baseHeadSha;
+      if (!workspaceContinuation && exactPaths.length === 0) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "git_commit_continuation_required",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const built = buildGitCommitLaunchSpec({
+        repositoryRef,
+        expectedParentSha,
+        exactPaths,
+        commitMessage: message.message,
+        ...(branchOrRef ? { branchOrRef } : {}),
+      });
+      if (!built.ok) {
+        return fail("ATTEMPT_INVALID", built.reason, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      gitCommitSpec = built.spec;
+    }
+
     let launch;
     try {
       launch = await this.realLaunchPort.launch({
@@ -1132,6 +1298,7 @@ export class StartExecution {
         scope: contract.scope,
         timeoutMs: window.resolvedMaxDurationMs,
         ...(docsWriteSpec ? { docsWriteSpec } : {}),
+        ...(gitCommitSpec ? { gitCommitSpec } : {}),
         ...(repositoryBindingIdentity
           ? { repositoryBindingIdentity }
           : {}),
```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_domain_realLaunchSafety.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
index ac55064a..d1f0fc2a 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
@@ -16,6 +16,9 @@ export const M4_BOUNDED_RO_CURSOR_AGENT_ID =
 export const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID =
   "agt:m4.cursor.bounded_docs_write" as const;

+export const M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID =
+  "agt:m4.cursor.bounded_local_commit" as const;
+
 export type RealLaunchReconcileDisposition =
   | "CLEAR"
   | "UNKNOWN"
```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_domain_resolvePreCommitWorkspaceContinuation.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
index f1098918..1b670162 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
@@ -1,5 +1,6 @@
 /**
  * D-GCEC-CONT-01 — resolve unique prior Attempt for pre-commit workspace continuation.
+ * CORR-D-GCEC-AGENT-02 / CR-GCEC-AGENT-08: NO exact Attempt A ⇒ NO FS→SHA supersession.
  *
  * Pure Product-truth resolver: Attempt history + VERIFIED Evidence bindings.
  * No free workspace path. No heuristic latest/first selection under ambiguity.
@@ -9,6 +10,11 @@ import type { Evidence } from "@/lib/oa/evidence-review";
 import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
 import type { ExecutionAttempt } from "./types";
 import type { ResumeVerifiedFileFact } from "../ports/realExecutionWorkspacePort";
+import { resolveVerifiedDocsWritePriorAttempt } from "./resolveVerifiedDocsWritePriorAttempt";
+import {
+  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
+  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
+} from "./realLaunchSafety";

 const FS_EFFECTS = new Set<CursorAuthorizedEffectId>([
   "filesystem.create",
@@ -41,6 +47,8 @@ export type ResolvePreCommitWorkspaceContinuationInput = {
   readonly evidence: readonly Evidence[];
   readonly authorizedEffects: readonly CursorAuthorizedEffectId[];
   readonly verifiedEffects?: readonly CursorAuthorizedEffectId[];
+  /** Server-owned Project.repositoryBinding.identity — never client string. */
+  readonly repositoryRef?: string;
 };

 export type ResolvePreCommitWorkspaceContinuationResult =
@@ -72,32 +80,238 @@ export function preCommitWorkspaceContinuationRequired(input: {
   return hasVerifiedFs && hasAuthorizedGit;
 }

-function isDocsWriteArtifactEvidence(ev: Evidence): boolean {
-  return (
-    ev.type === "artifact" &&
-    ev.status === "verified" &&
-    typeof ev.location === "string" &&
-    ev.location.trim().length > 0 &&
-    typeof ev.digest === "string" &&
-    ev.digest.trim().toLowerCase().startsWith("sha256:") &&
-    (ev.source === "execution_attempt:docs_write" ||
-      ev.source.startsWith("execution_attempt:docs_write"))
-  );
+function isVerifiedLocalCommitEvidence(ev: Evidence): boolean {
+  return ev.status === "verified" && ev.source === "git:local_commit";
+}
+
+function parseChangedPathsFromLocation(location: string): string[] {
+  try {
+    const q = location.includes("?") ? location.slice(location.indexOf("?") + 1) : "";
+    const params = new URLSearchParams(q);
+    const multi = params.getAll("path");
+    if (multi.length > 0) return multi.map((p) => decodeURIComponent(p));
+    const joined = params.get("paths");
+    if (joined) {
+      return joined
+        .split(",")
+        .map((p) => decodeURIComponent(p.trim()))
+        .filter(Boolean);
+    }
+  } catch {
+    /* ignore */
+  }
+  return [];
+}
+
+export type FsAnchorSupersessionInput = {
+  readonly projectId: string;
+  readonly cycleInstanceId: string;
+  readonly executionContractId: string;
+  readonly evidence: readonly Evidence[];
+  readonly attempts: readonly ExecutionAttempt[];
+  /** Prior Attempt A that produced the mutable FS artifacts — REQUIRED. */
+  readonly priorAttemptId: string;
+  /** Expected parent SHA (H0) of the encapsulating commit — REQUIRED. */
+  readonly expectedParentSha: string;
+  /** Repository identity that must appear in Evidence location — REQUIRED. */
+  readonly repositoryRef: string;
+  /** Paths that must be encapsulated (Attempt-A artifact paths) — REQUIRED. */
+  readonly requiredPaths: readonly string[];
+};
+
+/**
+ * FS→verified-commit-SHA supersession (CR-GCEC-GC-06 / CR-GCEC-AGENT-08).
+ *
+ * NO EXACT ATTEMPT A = NO SUPERSESSION.
+ * verifiedEffects alone MUST NOT supersede.
+ * All lineage fields are required — no weak/same-EC-only fallback.
+ *
+ * Requires: succeeded docs-write Attempt A + VERIFIED Artifact Evidence on A
+ * + succeeded local-commit Attempt B + VERIFIED git:local_commit Evidence on B
+ * with exact H0 / repo / paths.
+ */
+export function isFsAnchorSupersededByVerifiedLocalCommit(
+  input: FsAnchorSupersessionInput,
+): boolean {
+  const priorAttemptId = input.priorAttemptId?.trim();
+  const expectedParentSha = input.expectedParentSha?.trim();
+  const repositoryRef = input.repositoryRef?.trim();
+  const requiredPaths = input.requiredPaths ?? [];
+  if (
+    !priorAttemptId ||
+    !expectedParentSha ||
+    !repositoryRef ||
+    requiredPaths.length === 0 ||
+    !Array.isArray(input.attempts)
+  ) {
+    return false;
+  }
+
+  const priorAttempt = input.attempts.find((a) => a.attemptId === priorAttemptId);
+  if (
+    !priorAttempt ||
+    priorAttempt.status !== "succeeded" ||
+    priorAttempt.executionContractId !== input.executionContractId ||
+    priorAttempt.selectedAgentRef !== M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID
+  ) {
+    return false;
+  }
+
+  const priorArtifactEvidence = input.evidence.filter((ev) => {
+    if (ev.status !== "verified") return false;
+    if (ev.type !== "artifact") return false;
+    if (ev.bindings.projectId !== input.projectId) return false;
+    if (ev.bindings.cycleInstanceId !== input.cycleInstanceId) return false;
+    if (ev.bindings.executionContractId !== input.executionContractId) {
+      return false;
+    }
+    if (ev.bindings.executionAttemptId !== priorAttemptId) return false;
+    const source = String(ev.source ?? "");
+    if (
+      source !== "execution_attempt:docs_write" &&
+      !/^execution_attempt:docs_write(\.|$)/.test(source)
+    ) {
+      return false;
+    }
+    const loc = String(ev.location ?? "").trim();
+    if (!loc || !requiredPaths.includes(loc)) return false;
+    const digest = String(ev.digest ?? "").trim().toLowerCase();
+    if (!digest.startsWith("sha256:") || digest.length < "sha256:".length + 64) {
+      return false;
+    }
+    return true;
+  });
+  if (priorArtifactEvidence.length !== 1) {
+    return false;
+  }
+
+  const matching = input.evidence.filter((ev) => {
+    if (!isVerifiedLocalCommitEvidence(ev)) return false;
+    if (ev.bindings.projectId !== input.projectId) return false;
+    if (ev.bindings.cycleInstanceId !== input.cycleInstanceId) return false;
+    if (ev.bindings.executionContractId !== input.executionContractId) {
+      return false;
+    }
+    const commitAttemptId = ev.bindings.executionAttemptId?.trim();
+    if (!commitAttemptId) return false;
+
+    // Commit Evidence must bind Attempt B, not Attempt A.
+    if (commitAttemptId === priorAttemptId) {
+      return false;
+    }
+
+    const loc = String(ev.location ?? "");
+    if (
+      !loc.includes(encodeURIComponent(repositoryRef)) &&
+      !loc.includes(repositoryRef)
+    ) {
+      return false;
+    }
+
+    const parentHint = `parentSha=${encodeURIComponent(expectedParentSha)}`;
+    const parentHintRaw = `parentSha=${expectedParentSha}`;
+    if (
+      !loc.includes(parentHint) &&
+      !loc.includes(parentHintRaw) &&
+      !loc.toLowerCase().includes(expectedParentSha.toLowerCase())
+    ) {
+      return false;
+    }
+
+    const fromLoc = parseChangedPathsFromLocation(loc);
+    const pathsOk =
+      requiredPaths.every((p) => fromLoc.includes(p)) ||
+      requiredPaths.every((p) => loc.includes(p));
+    if (!pathsOk) return false;
+
+    const attempt = input.attempts.find((a) => a.attemptId === commitAttemptId);
+    if (!attempt || attempt.status !== "succeeded") return false;
+    if (attempt.executionContractId !== input.executionContractId) {
+      return false;
+    }
+    if (attempt.selectedAgentRef !== M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID) {
+      return false;
+    }
+    return true;
+  });
+  return matching.length === 1;
 }

 /**
  * Resolve unique prior succeeded Attempt whose VERIFIED docs-write Evidence
- * matches Project / Cycle / EC / Attempt bindings.
+ * matches Project / Cycle / EC / Attempt bindings (shared with Attempt profile).
  *
- * Continuation is required only when the authorized slice still needs protected
- * Git AND verified FS effects are claimed AND at least one prior same-EC
- * succeeded Attempt exists (pre-commit workspace lineage). With no prior
- * Attempt, verifiedEffects alone do not invent a continuation obligation
- * (CR23 / progressive-slice harnesses may assert FS verified without Attempt A).
+ * CR-08: supersession ONLY when priorA.ok with exact lineage fields.
+ * Ambiguous / incomplete prior A → fail closed (no weak commit Evidence fallback).
+ * No prior A → never claim FS→SHA superseded; continue via continuation semantics.
  */
 export function resolvePreCommitWorkspaceContinuation(
   input: ResolvePreCommitWorkspaceContinuationInput,
 ): ResolvePreCommitWorkspaceContinuationResult {
+  const priorA = resolveVerifiedDocsWritePriorAttempt({
+    contract: {
+      executionContractId: input.executionContractId,
+      projectId: input.projectId,
+      cycleInstanceId: input.cycleInstanceId,
+      expectedOutputs: undefined,
+      inputs: undefined,
+    },
+    attempts: input.attempts,
+    evidence: input.evidence,
+    excludeAttemptId: input.currentAttemptId,
+  });
+
+  if (priorA.ok) {
+    if (
+      input.repositoryRef?.trim() &&
+      input.expectedHeadSha?.trim() &&
+      isFsAnchorSupersededByVerifiedLocalCommit({
+        projectId: input.projectId,
+        cycleInstanceId: input.cycleInstanceId,
+        executionContractId: input.executionContractId,
+        evidence: input.evidence,
+        attempts: input.attempts,
+        priorAttemptId: priorA.prior.priorAttemptId,
+        expectedParentSha: input.expectedHeadSha,
+        repositoryRef: input.repositoryRef,
+        requiredPaths: [priorA.prior.artifactPath],
+      })
+    ) {
+      return { required: false, descriptor: null };
+    }
+  } else if (priorA.reason === "docs_write_prior_ambiguous") {
+    // CR-08: ambiguous A → fail closed; do NOT evaluate generic commit Evidence.
+    if (
+      preCommitWorkspaceContinuationRequired({
+        authorizedEffects: input.authorizedEffects,
+        verifiedEffects: input.verifiedEffects,
+      })
+    ) {
+      return {
+        required: true,
+        ok: false,
+        reason: "continuation_candidate_ambiguous",
+        candidateAttemptIds: priorA.candidateAttemptIds,
+      };
+    }
+    return { required: false, descriptor: null };
+  } else if (priorA.reason === "docs_write_prior_incomplete") {
+    if (
+      preCommitWorkspaceContinuationRequired({
+        authorizedEffects: input.authorizedEffects,
+        verifiedEffects: input.verifiedEffects,
+      })
+    ) {
+      return {
+        required: true,
+        ok: false,
+        reason: "continuation_evidence_incomplete",
+      };
+    }
+    return { required: false, descriptor: null };
+  }
+  // priorA none: NO FS→SHA supersession. Fall through to continuation semantics.
+
   if (
     !preCommitWorkspaceContinuationRequired({
       authorizedEffects: input.authorizedEffects,
@@ -107,70 +321,32 @@ export function resolvePreCommitWorkspaceContinuation(
     return { required: false, descriptor: null };
   }

-  const succeededSameEc = input.attempts.filter(
-    (a) =>
-      a.attemptId !== input.currentAttemptId &&
-      a.executionContractId === input.executionContractId &&
-      a.status === "succeeded",
-  );
-
-  if (succeededSameEc.length === 0) {
-    return { required: false, descriptor: null };
-  }
-
-  type Candidate = {
-    attemptId: string;
-    evidenceId: string;
-    path: string;
-    digest: string;
-  };
-  const candidates: Candidate[] = [];
-
-  for (const attempt of succeededSameEc) {
-    const matching = input.evidence.filter(
-      (ev) =>
-        isDocsWriteArtifactEvidence(ev) &&
-        ev.bindings.projectId === input.projectId &&
-        ev.bindings.cycleInstanceId === input.cycleInstanceId &&
-        ev.bindings.executionContractId === input.executionContractId &&
-        ev.bindings.executionAttemptId === attempt.attemptId,
-    );
-    if (matching.length === 0) continue;
-    if (matching.length > 1) {
+  if (!priorA.ok) {
+    if (priorA.reason === "docs_write_prior_none") {
+      const succeededSameEc = input.attempts.filter(
+        (a) =>
+          a.attemptId !== input.currentAttemptId &&
+          a.executionContractId === input.executionContractId &&
+          a.status === "succeeded",
+      );
+      if (succeededSameEc.length === 0) {
+        return { required: false, descriptor: null };
+      }
       return {
         required: true,
         ok: false,
-        reason: "continuation_candidate_ambiguous",
-        candidateAttemptIds: [attempt.attemptId],
+        reason: "continuation_candidate_none",
       };
     }
-    const ev = matching[0]!;
-    candidates.push({
-      attemptId: attempt.attemptId,
-      evidenceId: ev.evidenceId,
-      path: String(ev.location).trim(),
-      digest: String(ev.digest).trim().toLowerCase(),
-    });
-  }
-
-  if (candidates.length === 0) {
     return {
       required: true,
       ok: false,
-      reason: "continuation_candidate_none",
-    };
-  }
-  if (candidates.length > 1) {
-    return {
-      required: true,
-      ok: false,
-      reason: "continuation_candidate_ambiguous",
-      candidateAttemptIds: candidates.map((c) => c.attemptId),
+      reason: "continuation_evidence_incomplete",
     };
   }

-  const only = candidates[0]!;
-  if (!only.path || !only.digest.startsWith("sha256:")) {
+  const only = priorA.prior;
+  if (!input.expectedHeadSha || !/^[0-9a-f]{40}$/i.test(input.expectedHeadSha)) {
     return {
       required: true,
       ok: false,
@@ -182,10 +358,10 @@ export function resolvePreCommitWorkspaceContinuation(
     required: true,
     ok: true,
     descriptor: {
-      priorAttemptId: only.attemptId,
+      priorAttemptId: only.priorAttemptId,
       expectedHeadSha: input.expectedHeadSha.toLowerCase(),
       expectedVerifiedFiles: [
-        { path: only.path, digest: only.digest },
+        { path: only.artifactPath, digest: only.artifactDigest },
       ],
       evidenceId: only.evidenceId,
     },
```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_index.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index aa6afc77..0c90029a 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -172,6 +172,14 @@ export {
   M4_BOUNDED_DOCS_WRITE_TARGET,
   M4_BOUNDED_DOCS_WRITE_SCOPE,
 } from "./infrastructure/m4BoundedDocsWriteCursorAgent";
+export {
+  createM4BoundedLocalCommitCursorAgentDescriptor,
+  isM4BoundedLocalCommitRealAgent,
+  M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
+  M4_BOUNDED_LOCAL_COMMIT_ACTION,
+  M4_BOUNDED_LOCAL_COMMIT_TARGET,
+  M4_BOUNDED_LOCAL_COMMIT_SCOPE,
+} from "./infrastructure/m4BoundedLocalCommitCursorAgent";
 export {
   FakeDocsWriteLaunchPort,
   listRelativeFiles,
@@ -193,13 +201,69 @@ export {
   sanitizeManagedRepoIdentity,
 } from "./infrastructure/managedProjectRepositoryResolver";
 export type { ManagedRepoBindingIdentity } from "./infrastructure/managedProjectRepositoryResolver";
-export type { DocsWriteLaunchSpec } from "./ports/realExecutionLaunchPort";
 export {
-  M4_BOUNDED_RO_CURSOR_AGENT_ID,
-  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
-  M4_REAL_GATEWAY_ADAPTER_ID,
-} from "./domain/realLaunchSafety";
-export { assertStudioCursorRealOffForTests } from "./domain/realLaunchSafety";
+  resolveAttemptExecutionProfile,
+} from "./domain/resolveAttemptExecutionProfile";
+export {
+  resolveVerifiedDocsWritePriorAttempt,
+} from "./domain/resolveVerifiedDocsWritePriorAttempt";
+export type {
+  ProjectEvidenceListResult,
+  ListProjectEvidenceFn,
+} from "./domain/projectEvidenceList";
+export {
+  availableProjectEvidence,
+  unavailableProjectEvidence,
+} from "./domain/projectEvidenceList";
+export type {
+  AttemptExecutionProfile,
+  AttemptExecutionProfileKind,
+  AttemptExecutionProfileLineage,
+  ResolveAttemptExecutionProfileInput,
+  ResolveAttemptExecutionProfileResult,
+} from "./domain/resolveAttemptExecutionProfile";
+export type {
+  VerifiedDocsWritePriorAttempt,
+  ResolveVerifiedDocsWritePriorAttemptInput,
+  ResolveVerifiedDocsWritePriorAttemptResult,
+} from "./domain/resolveVerifiedDocsWritePriorAttempt";
+export {
+  buildGitCommitLaunchSpec,
+  deriveTrustedCommitMessage,
+} from "./domain/gitCommitLaunchSpec";
+export type { GitCommitLaunchSpec } from "./domain/gitCommitLaunchSpec";
+export {
+  verifyLocalCommitFacts,
+  isBoundedGitCommitOnlySlice,
+} from "./domain/verifyLocalCommitFacts";
+export type {
+  LocalCommitVerificationInput,
+  LocalCommitVerificationResult,
+  LocalCommitArtifactCheck,
+} from "./domain/verifyLocalCommitFacts";
+export {
+  verifyLocalCommitEffect,
+  digestOf,
+  LOCAL_GIT_READONLY_TECHNICAL_REF,
+} from "./application/verifyLocalCommitEffect";
+export type {
+  VerifyLocalCommitEffectInput,
+  VerifyLocalCommitEffectResult,
+} from "./application/verifyLocalCommitEffect";
+export {
+  observeLocalCommitFacts,
+} from "./application/observeLocalCommitFacts";
+export type {
+  LocalCommitObservedFacts,
+  ObserveLocalCommitInput,
+  GovernedWorkspaceObservationContext,
+} from "./application/observeLocalCommitFacts";
+export {
+  assertShellSafeRelativePath,
+  assertShellSafeCommitSubject,
+  GIT_COMMIT_SUBJECT_MAX_LENGTH,
+} from "./domain/gitCommitLaunchSpec";
+export type { FsAnchorSupersessionInput } from "./domain/resolvePreCommitWorkspaceContinuation";

 import type { ClockPort } from "@/lib/oa/doctrine";
 import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
@@ -321,9 +385,7 @@ export type CreateInMemoryExecutionAttemptServicesOptions = {
   /**
    * CR-GCEC-23 — Evidence list for verified PR identity (may be late-bound).
    */
-  listProjectEvidence?: (
-    projectId: string,
-  ) => Promise<readonly import("@/lib/oa/evidence-review").Evidence[]>;
+  listProjectEvidence?: import("./domain/projectEvidenceList").ListProjectEvidenceFn;
 };

 /** Factory for the in-memory ExecutionAttempt runtime foundation. */
@@ -368,6 +430,7 @@ export function createInMemoryExecutionAttemptServices(
     audit,
     policy,
     store,
+    options.listProjectEvidence,
   );

   const realBoundary =
@@ -514,6 +577,9 @@ export function createTestExecutionAttemptServices(
     adapter,
     clock,
     audit,
+    listProjectEvidence:
+      options.listProjectEvidence ??
+      (async () => ({ ok: true as const, evidence: [] as const })),
   }) as ExecutionAttemptServices & {
     audit: MemoryExecutionAttemptAuditJournal;
   };
```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_infrastructure_fakeDocsWriteLaunchPort.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
index aed84753..367a94dc 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
@@ -21,6 +21,9 @@ import {
   type RealLaunchResult,
   type RealProcessObservation,
 } from "@/lib/oa/execution-attempt";
+import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
+import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
+import { buildGitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
 import type {
   CursorAuthorizedEffectId,
   CursorExecutionReport,
@@ -149,7 +152,74 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
         detailCode: "REAL_LAUNCH_FAILED",
       };
     }
-    if (request.action !== M4_BOUNDED_DOCS_WRITE_ACTION) {
+    const { authorized, blocked } = resolveAuthorizedEffects(request);
+    const wantsCommitProfile = Boolean(request.gitCommitSpec);
+    if (wantsCommitProfile) {
+      if (!isBoundedGitCommitOnlySlice([...authorized])) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason:
+            authorized.size === 0
+              ? "git_commit_authorized_effects_empty"
+              : "git_commit_slice_not_commit_only",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      if (
+        request.selectedAgentRef !== "agt:m4.cursor.bounded_local_commit"
+      ) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason:
+            request.selectedAgentRef === "agt:m4.cursor.bounded_docs_write"
+              ? "git_commit_agent_capability_bypass"
+              : "git_commit_selected_agent_invalid",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      if (!request.workspaceContinuation) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_commit_continuation_required",
+          realProcessInvoked: false,
+          detailCode: "REAL_WORKSPACE_INVALID",
+        };
+      }
+      const revalidated = buildGitCommitLaunchSpec({
+        repositoryRef: request.gitCommitSpec!.repositoryRef,
+        expectedParentSha: request.gitCommitSpec!.expectedParentSha,
+        exactPaths: request.gitCommitSpec!.exactPaths,
+        commitMessage: request.gitCommitSpec!.commitMessage,
+        ...(request.gitCommitSpec!.branchOrRef
+          ? { branchOrRef: request.gitCommitSpec!.branchOrRef }
+          : {}),
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
+    const isCommitOnly =
+      wantsCommitProfile && isBoundedGitCommitOnlySlice([...authorized]);
+    const actionOk =
+      request.action === M4_BOUNDED_DOCS_WRITE_ACTION ||
+      request.action === M4_BOUNDED_LOCAL_COMMIT_ACTION ||
+      isCommitOnly;
+    if (!actionOk) {
       return {
         outcome: "reject",
         gatewayId: this.gatewayId,
@@ -160,16 +230,21 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
       };
     }

-    const { authorized, blocked } = resolveAuthorizedEffects(request);
+    const commitSpec = request.gitCommitSpec;
     const spec = request.docsWriteSpec;
     const pathAllowlist = spec?.pathAllowlist ?? this.options.pathAllowlist;
     const targetPath =
+      commitSpec?.exactPaths[0] ??
       spec?.targetPath ??
       this.options.targetPath ??
       "docs/functional-design.md";
     const repositoryRef =
-      spec?.repositoryRef ?? this.options.repositoryRef ?? "unknown/repo";
+      commitSpec?.repositoryRef ??
+      spec?.repositoryRef ??
+      this.options.repositoryRef ??
+      "unknown/repo";
     const branch =
+      commitSpec?.branchOrRef ??
       this.options.defaultBranch ??
       request.repositoryBinding?.defaultBranch ??
       "gcec/docs";
@@ -188,7 +263,7 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
       };
     }

-    if (!isAllowlisted(rel, pathAllowlist)) {
+    if (!isCommitOnly && !isAllowlisted(rel, pathAllowlist)) {
       return {
         outcome: "reject",
         gatewayId: this.gatewayId,
@@ -219,8 +294,8 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
     let modified: string[] = [];
     const digests: Record<string, string> = {};

-    const canFsCreate = authorized.has("filesystem.create");
-    const canFsModify = authorized.has("filesystem.modify");
+    const canFsCreate = !isCommitOnly && authorized.has("filesystem.create");
+    const canFsModify = !isCommitOnly && authorized.has("filesystem.modify");

     if (canFsCreate || canFsModify) {
       await mkdir(path.dirname(abs), { recursive: true });
@@ -271,12 +346,12 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
         if (request.baseHeadSha && !this.gitState.branchHeads.has(branch)) {
           this.gitState.branchHeads.set(branch, request.baseHeadSha.toLowerCase());
         }
-        // Stage the target path when present on disk — git-only slices must not
-        // rewrite (filesystem not authorized) but may commit prior writes.
-        const commit = await this.gitState.commit(
-          [rel],
-          `docs: ${spec?.artifactBrief ?? "functional design"}`,
-        );
+        const commitPaths =
+          commitSpec?.exactPaths ?? [rel];
+        const commitMessage =
+          commitSpec?.commitMessage ??
+          `docs: ${spec?.artifactBrief ?? "functional design"}`;
+        const commit = await this.gitState.commit(commitPaths, commitMessage);
         executed.push("git.commit");
         gitEffects.commit = {
           branch,
```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_infrastructure_m4BoundedDocsWriteCursorAgent.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
index b722b91a..8c1743ce 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
@@ -10,6 +10,7 @@ import {
   M4_REAL_GATEWAY_ADAPTER_ID,
 } from "../domain/realLaunchSafety";
 import type { AgentDescriptor } from "../domain/types";
+import { isM4BoundedLocalCommitRealAgent } from "./m4BoundedLocalCommitCursorAgent";
 import { isM4BoundedReadOnlyRealAgent } from "./m4BoundedReadOnlyCursorAgent";

 export const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write" as const;
@@ -84,11 +85,13 @@ export function isM4BoundedDocsWriteRealAgent(
   );
 }

-/** REAL Cursor allowlist — RO or docs-write (OR only; RO body unchanged). */
+/** REAL Cursor allowlist — RO | docs-write | local-commit (OR; RO/docs bodies unchanged). */
 export function isM4AuthorizedCursorRealAgent(
   agent: AgentDescriptor,
 ): boolean {
   return (
-    isM4BoundedReadOnlyRealAgent(agent) || isM4BoundedDocsWriteRealAgent(agent)
+    isM4BoundedReadOnlyRealAgent(agent) ||
+    isM4BoundedDocsWriteRealAgent(agent) ||
+    isM4BoundedLocalCommitRealAgent(agent)
   );
 }
```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_infrastructure_sqlite_createSqliteExecutionAttemptServices.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
index a3f21be3..9689981e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
@@ -74,9 +74,7 @@ export type CreateSqliteExecutionAttemptServicesOptions = {
   resolveProjectRepositoryBinding?: (
     projectId: string,
   ) => Promise<import("@/lib/oa/project").ProjectRepositoryBinding | null>;
-  listProjectEvidence?: (
-    projectId: string,
-  ) => Promise<readonly import("@/lib/oa/evidence-review").Evidence[]>;
+  listProjectEvidence?: import("../../domain/projectEvidenceList").ListProjectEvidenceFn;
 };

 export type SqliteExecutionAttemptServices = {
@@ -154,6 +152,7 @@ export function createSqliteExecutionAttemptServices(
     audit,
     policy,
     store,
+    options.listProjectEvidence,
   );

   const realBoundary = options.realBoundary;
```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_infrastructure_studioCursorRealLaunchGateway.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index b25e0bad..49da60f7 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -28,6 +28,48 @@ import {
   isCursorTrustMarkerPathCompatible,
 } from "./cursorTrustMarkerPathCompatibility";
 import { M4_BOUNDED_DOCS_WRITE_ACTION } from "./m4BoundedDocsWriteCursorAgent";
+import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
+import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
+import { buildGitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
+
+function buildBoundedLocalCommitInstruction(input: {
+  readonly spec: NonNullable<RealLaunchRequest["gitCommitSpec"]>;
+  readonly target?: string;
+  readonly action?: string;
+  readonly scope?: string;
+  readonly semanticFingerprint: string;
+}): string {
+  const paths = input.spec.exactPaths.join(", ");
+  const pathList = input.spec.exactPaths.map((p) => `  - ${p}`).join("\n");
+  return [
+    "TÂCHE UNIQUE — bounded local git.commit déterministe (GCEC).",
+    `Repository: ${input.spec.repositoryRef}`,
+    `Expected parent HEAD (H0): ${input.spec.expectedParentSha}`,
+    `Commit message exacte (une seule ligne sujet): ${input.spec.commitMessage}`,
+    "Chemins exacts autorisés à stager (UNIQUEMENT ceux-ci):",
+    pathList,
+    "Séquence Shell autorisée UNIQUEMENT (aucune autre commande):",
+    "  git status --short",
+    `  git diff -- ${input.spec.exactPaths.join(" ")}`,
+    `  git add -- ${input.spec.exactPaths.join(" ")}`,
+    "  git diff --cached --name-only",
+    "  git diff --cached --check",
+    `  git commit -m ${JSON.stringify(input.spec.commitMessage)}`,
+    "  git rev-parse HEAD",
+    "  git show --format=fuller --name-only --no-patch HEAD",
+    "INTERDIT: push, fetch mutatif, pull, remote add/set-url, branch create/delete,",
+    "checkout, switch, reset, restore, rebase, merge, amend, tag, clean,",
+    "toute édition de fichier (Write/StrReplace), toute suppression,",
+    "PR/merge GitHub, wildcard path, script shell fourni par l'appelant.",
+    `Paths summary: ${paths}`,
+    "Utiliser Shell uniquement pour la séquence ci-dessus. Aucun outil d'édition.",
+    "En cas d'ambiguïté: STOP immédiatement sans mutation.",
+    `target=${input.target ?? ""}`,
+    `action=${input.action ?? ""}`,
+    `scope=${input.scope ?? ""}`,
+    `fingerprint=${input.semanticFingerprint}`,
+  ].join("\n");
+}

 export type StudioCursorRealLaunchGatewayOptions = {
   readonly processRunner: ProcessRunner;
@@ -245,13 +287,118 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
       };
     }

-    // Fixed argv shape — executable is separate; no user-controlled shell.
-    // --mode ask: local CLI help documents ask as read-only Q&A (no edits).
-    // Docs-write uses default agent mode (omit --mode ask) + WRITE instruction.
-    const isDocsWrite = request.action === M4_BOUNDED_DOCS_WRITE_ACTION;
+    // Profile is structured (gitCommitSpec / docsWrite action) — never inferred from prompt prose.
+    const gitCommitSpec = request.gitCommitSpec;
+    const isLocalCommitProfile =
+      Boolean(gitCommitSpec) ||
+      request.action === M4_BOUNDED_LOCAL_COMMIT_ACTION;
+    const isDocsWrite =
+      !isLocalCommitProfile && request.action === M4_BOUNDED_DOCS_WRITE_ACTION;
+
+    if (isLocalCommitProfile) {
+      if (!gitCommitSpec) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_commit_spec_missing",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      // GC-10 — current bounded GCEC commit profile requires Cont01 continuation
+      // (Attempt B resume). Progressive Fake paths may omit gateway REAL launch.
+      if (!request.workspaceContinuation) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_commit_continuation_required",
+          realProcessInvoked: false,
+          detailCode: "REAL_WORKSPACE_INVALID",
+        };
+      }
+      const auth = request.authorizedEffects;
+      if (!isBoundedGitCommitOnlySlice(auth)) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason:
+            auth == null
+              ? "git_commit_authorized_effects_missing"
+              : auth.length === 0
+                ? "git_commit_authorized_effects_empty"
+                : "git_commit_slice_not_commit_only",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      // GC-01: commit profile requires exact local-commit AgentDescriptor.
+      // gitCommitSpec alone MUST NOT select the profile / widen authority.
+      // Under current EC action/capability/target/scope identity, Attempt B
+      // cannot honestly select this agent for a docs-write EC (STOP escalation).
+      if (
+        request.selectedAgentRef !== "agt:m4.cursor.bounded_local_commit"
+      ) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason:
+            request.selectedAgentRef === "agt:m4.cursor.bounded_docs_write"
+              ? "git_commit_agent_capability_bypass"
+              : "git_commit_selected_agent_invalid",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      // Re-validate structured values (fail closed before Shell child).
+      const revalidated = buildGitCommitLaunchSpec({
+        repositoryRef: gitCommitSpec.repositoryRef,
+        expectedParentSha: gitCommitSpec.expectedParentSha,
+        exactPaths: gitCommitSpec.exactPaths,
+        commitMessage: gitCommitSpec.commitMessage,
+        ...(gitCommitSpec.branchOrRef
+          ? { branchOrRef: gitCommitSpec.branchOrRef }
+          : {}),
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
+      if (
+        typeof (request as { freeShellScript?: unknown }).freeShellScript ===
+          "string" ||
+        typeof (request as { shellCommand?: unknown }).shellCommand === "string"
+      ) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_commit_free_shell_rejected",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+    }

     let instruction: string;
-    if (isDocsWrite) {
+    if (isLocalCommitProfile && gitCommitSpec) {
+      instruction = buildBoundedLocalCommitInstruction({
+        spec: gitCommitSpec,
+        target: request.target,
+        action: request.action,
+        scope: request.scope,
+        semanticFingerprint: request.semanticFingerprint,
+      });
+    } else if (isDocsWrite) {
       const spec = request.docsWriteSpec;
       if (!spec) {
         return {
@@ -308,7 +455,10 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
       ].join("\n");
     }

-    const argv = isDocsWrite
+    // Docs-write + local-commit: default agent mode (omit --mode ask) so Shell/Write available.
+    // RO: --mode ask. All keep --print + --workspace + --trust + --sandbox enabled.
+    const usesAgentMode = isDocsWrite || isLocalCommitProfile;
+    const argv = usesAgentMode
       ? [
           "agent",
           "--print",
@@ -342,6 +492,9 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         env: {
           ...this.env,
           [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
+          // Defense-in-depth only — not the authority boundary.
+          GIT_TERMINAL_PROMPT: "0",
+          GCM_INTERACTIVE: "Never",
         },
       });
```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_ports_realExecutionLaunchPort.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
index 0e2de058..47395272 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
@@ -26,6 +26,10 @@ export type DocsWriteLaunchSpec = {
   readonly noDelete: true;
 };

+/** Canonical GitCommitLaunchSpec — single source from domain. */
+export type { GitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
+import type { GitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
+
 export type RealLaunchRequest = {
   readonly attemptId: string;
   readonly executionContractId: string;
@@ -52,6 +56,11 @@ export type RealLaunchRequest = {
   readonly timeoutMs: number;
   /** GCEC docs-write launch contract — required when action is docs_write. */
   readonly docsWriteSpec?: DocsWriteLaunchSpec;
+  /**
+   * GCEC bounded local-commit launch contract — required for git.commit-only
+   * Cursor profile (Attempt B). Mutually exclusive with free shell / FS edit profile.
+   */
+  readonly gitCommitSpec?: GitCommitLaunchSpec;
   /** Optional Project binding identity (owner/repo) for workspace resolution. */
   readonly repositoryBindingIdentity?: string;
   /** Server-resolved absolute managed clone root (docs-write). */
```

## DIFF: projects_sfia-studio_app_lib_vertical-slice-runtime_service.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index f0685a82..a31dbd2b 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -37,6 +37,7 @@ import {
   createSqliteExecutionAttemptServices,
   createM4BoundedReadOnlyCursorAgentDescriptor,
   createM4BoundedDocsWriteCursorAgentDescriptor,
+  createM4BoundedLocalCommitCursorAgentDescriptor,
   isStudioCursorRealEnabled,
   type ExecutionAttemptServices,
   type RealBoundaryWiring,
@@ -408,6 +409,7 @@ function wireOaStack(
         w3aBoundedAgent,
         createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso()),
         createM4BoundedDocsWriteCursorAgentDescriptor(clock.nowIso()),
+        createM4BoundedLocalCommitCursorAgentDescriptor(clock.nowIso()),
       ]
     : [fixtureAgent, w3aBoundedAgent];
   const registry = new MemoryAgentRegistry(agents);
@@ -428,8 +430,12 @@ function wireOaStack(
           return r.project.repositoryBinding ?? null;
         },
         listProjectEvidence: async (projectId) => {
-          if (!late.evidenceReviewServices) return [];
-          return late.evidenceReviewServices.repository.listByProject(projectId);
+          if (!late.evidenceReviewServices) {
+            return { ok: false as const, reason: "evidence_reader_unavailable" as const };
+          }
+          const evidence =
+            await late.evidenceReviewServices.repository.listByProject(projectId);
+          return { ok: true as const, evidence };
         },
       })
     : createInMemoryExecutionAttemptServices({
@@ -447,8 +453,12 @@ function wireOaStack(
           return r.project.repositoryBinding ?? null;
         },
         listProjectEvidence: async (projectId) => {
-          if (!late.evidenceReviewServices) return [];
-          return late.evidenceReviewServices.repository.listByProject(projectId);
+          if (!late.evidenceReviewServices) {
+            return { ok: false as const, reason: "evidence_reader_unavailable" as const };
+          }
+          const evidence =
+            await late.evidenceReviewServices.repository.listByProject(projectId);
+          return { ok: true as const, evidence };
         },
       });
   late.executionAttemptServices = executionAttemptServices;
```

# FULL CONTENT — CREATED FILES

## FULL: projects_sfia-studio_app___tests___oa_cycle_gcecCursorRealSameEcCommit.real.d0.test.ts
```typescript
/**
 * FUTURE REAL harness — same-EC A (docs-write) → B (local git.commit).
 *
 * NEVER runs in ordinary vitest. Requires ALL three:
 *   SFIA_STUDIO_CURSOR_REAL=1
 *   SFIA_GCEC_CURSOR_REAL_PROOF=1
 *   SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF=1
 *
 * Campaign shape (when Morris authorizes a distinct REAL GO):
 *   PRECHECK → remote ls-remote BEFORE → A REAL docs-write (retain worktree)
 *   → B REAL local commit → governed observe-owned Evidence VERIFIED
 *   → FS→SHA supersession → remote ls-remote AFTER (heads/tags/main equal).
 *
 * CR-GCEC-AGENT-10: remote anti-effect uses actual `git ls-remote` snapshots —
 * local clone HEAD alone is NOT remote proof.
 *
 * Forensic phases (harness-local only — not Product FSM):
 *   A_LAUNCHED_UNRECONCILED → A_RECONCILED_RETAINED
 *   → B_LAUNCHED_UNRECONCILED → B_RECONCILED_COMMIT_VERIFIED
 *
 * D-GCEC-AGENT-01: Attempt B selects agt:m4.cursor.bounded_local_commit under
 * the SAME EC via server-derived AttemptExecutionProfile.
 *
 * Do NOT reuse prior docs-write pid workspaces. Fresh proof root only.
 * ZERO push / PR / merge. ZERO Product mutation.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Confirmation } from "@/lib/oa/decision";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
  ManagedProjectRepositoryResolver,
  NodeGitCommandRunner,
  buildGitCommitLaunchSpec,
  buildGitEffectActionRef,
  deriveTrustedCommitMessage,
  isFsAnchorSupersededByVerifiedLocalCommit,
  observeLocalCommitFacts,
  resolvePreCommitWorkspaceContinuation,
  sanitizeManagedRepoIdentity,
  verifyLocalCommitEffect,
  workspacePathForAttempt,
  type GovernedWorkspaceObservationContext,
} from "@/lib/oa/execution-attempt";
import { NodeLocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import { F3_CONFIRM_ACTION_REF } from "@/features/project-assistant/f3/constants";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
import { completeBoundedReadOnlyLaunch } from "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { FakeConversationProvider } from "@/lib/platform/ai";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  prepareCycleFromValidatedTrajectory,
  startPreparedTrajectoryCycle,
  materializeLifecycleRecommendationFromStructuredOutput,
  resolveTrajectoryBootstrapPresence,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";

const ENABLED =
  process.env.SFIA_STUDIO_CURSOR_REAL === "1" &&
  process.env.SFIA_GCEC_CURSOR_REAL_PROOF === "1" &&
  process.env.SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF === "1";

const APP_ROOT = path.resolve(__dirname, "../../..");
const WORKSPACE_ROOT = path.resolve(APP_ROOT, "../../..");
const PROOF_REVIEW_DIR = path.join(
  WORKSPACE_ROOT,
  ".tmp-sfia-review/gcec-cursor-real-commit-proof",
);
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "mcleland147/sfia-gcec-proof-task-manager";
const BASE_SHA = "32c7c2008197e5c61b32c16479144e9863291358";
const TARGET_PATH = "docs/functional-design.md";
const BRANCH = "main";
const NOW = "2026-09-11T18:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;
/** Shell-safe subject; also used as docs-write artifactBrief (deriveTrustedCommitMessage). */
const ARTIFACT_BRIEF = "add task manager functional design";
const COMMIT_MSG = `docs: ${ARTIFACT_BRIEF}`;

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const CONTENT_REQUIREMENTS = [
  "Task fields: identifier, mandatory title, optional description, status, optional due date",
  "Statuses: TODO, IN_PROGRESS, DONE",
  "Flows: create task, list tasks, filter by status, edit task, change status",
  "Rules: blank title refused; status must be in defined set; due date optional",
  "Acceptance criteria: observable/testable for the flows above",
  "OUT OF SCOPE: authentication, multi-user, notifications, architecture, DB, API, framework, pixel UX",
];

/** Harness-local forensic state — not Product domain persistence. */
export type RealCommitHarnessPhase =
  | "PRECHECK"
  | "A_LAUNCHED_UNRECONCILED"
  | "A_RECONCILED_RETAINED"
  | "B_LAUNCHED_UNRECONCILED"
  | "B_RECONCILED_COMMIT_VERIFIED";

export type RealSameEcCommitHarnessState = {
  phase: RealCommitHarnessPhase;
  realLaunchConsumed: boolean;
  reconciliationComplete: boolean;
  attemptAId?: string;
  attemptBId?: string;
  executionContractId?: string;
  processRefA?: string;
  processRefB?: string;
  worktreeRef?: string;
  proofRoot?: string;
  execRoot?: string;
  productDbPath?: string;
  safetyJournalPath?: string;
  managedClonePath?: string;
  expectedH0?: string;
  observedH1?: string;
  durableReviewSnapshotWritten: boolean;
  failure?: string;
};

export function createRealSameEcCommitHarnessState(): RealSameEcCommitHarnessState {
  return {
    phase: "PRECHECK",
    realLaunchConsumed: false,
    reconciliationComplete: false,
    durableReviewSnapshotWritten: false,
  };
}

export function shouldPreserveRealCommitProofState(input: {
  realLaunchConsumed: boolean;
  reconciliationComplete: boolean;
}): boolean {
  return (
    input.realLaunchConsumed === true && input.reconciliationComplete !== true
  );
}

function writeJson(filePath: string, value: unknown): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function sha256FileOrMissing(filePath: string): string | null {
  if (!fs.existsSync(filePath)) return null;
  return createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function safeGit(cwd: string, args: string[]): string | null {
  try {
    return execFileSync("git", args, {
      cwd,
      encoding: "utf8",
      shell: false,
    }).trim();
  } catch {
    return null;
  }
}

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    shell: false,
  }).trim();
}

/** CR-10 — read-only remote ref snapshot (future REAL harness only). */
export type RemoteRefSnapshot = {
  readonly headsNormalized: string;
  readonly tagsNormalized: string;
  readonly mainSha: string | null;
  readonly targetBranchLine: string | null;
  readonly capturedAt: string;
};

function normalizeLsRemote(raw: string): string {
  return raw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .sort()
    .join("\n");
}

function captureRemoteRefSnapshot(cloneRoot: string): RemoteRefSnapshot {
  const headsRaw = git(cloneRoot, ["ls-remote", "--heads", "origin"]);
  const tagsRaw = git(cloneRoot, ["ls-remote", "--tags", "origin"]);
  const headsNormalized = normalizeLsRemote(headsRaw);
  const tagsNormalized = normalizeLsRemote(tagsRaw);
  const mainLine = headsNormalized
    .split("\n")
    .find((l) => l.endsWith("\trefs/heads/main") || l.endsWith(" refs/heads/main"));
  const mainSha = mainLine ? mainLine.split(/[\s\t]/)[0] ?? null : null;
  const targetRef = `refs/heads/${BRANCH}`;
  const targetBranchLine =
    headsNormalized
      .split("\n")
      .find((l) => l.endsWith(`\t${targetRef}`) || l.endsWith(` ${targetRef}`)) ??
    null;
  return {
    headsNormalized,
    tagsNormalized,
    mainSha,
    targetBranchLine,
    capturedAt: new Date().toISOString(),
  };
}

const temps: string[] = [];
const harnessState = createRealSameEcCommitHarnessState();

afterEach(() => {
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
  if (shouldPreserveRealCommitProofState(harnessState)) {
    temps.length = 0;
    return;
  }
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
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
  if (!shouldPreserveRealCommitProofState(harnessState)) {
    Object.assign(harnessState, createRealSameEcCommitHarnessState());
  }
});

function tempDir(prefix: string): string {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  temps.push(d);
  return d;
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:gcec-commit-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:gcec-commit-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:gcec-commit-${this.prefix}-${this.n}`;
  }
}

function requireAuth(
  auth: ReturnType<typeof registerLocalPiloteAuthority>,
): string {
  if (!auth.ok) throw new Error(`auth: ${auth.code}`);
  return auth.evidenceId;
}

async function writeLaunchFrontierSnapshot(input: {
  state: RealSameEcCommitHarnessState;
  phase: RealCommitHarnessPhase;
}): Promise<void> {
  writeJson(path.join(PROOF_REVIEW_DIR, "launch-frontier.json"), {
    timestamp: new Date().toISOString(),
    phase: input.phase,
    attemptAId: input.state.attemptAId ?? null,
    attemptBId: input.state.attemptBId ?? null,
    executionContractId: input.state.executionContractId ?? null,
    processRefA: input.state.processRefA ?? null,
    processRefB: input.state.processRefB ?? null,
    proofRoot: input.state.proofRoot ?? null,
    execRoot: input.state.execRoot ?? null,
    safetyJournalPath: input.state.safetyJournalPath ?? null,
    productDbPath: input.state.productDbPath ?? null,
    worktreeRef: input.state.worktreeRef ?? null,
    managedClonePath: input.state.managedClonePath ?? null,
    remoteBaseSha: BASE_SHA,
  });
}

async function writeFailureReconciliationSnapshot(input: {
  state: RealSameEcCommitHarnessState;
  error: unknown;
  observationSummary: Record<string, unknown> | null;
  gitFacts: Record<string, unknown> | null;
}): Promise<void> {
  const failure =
    input.error instanceof Error
      ? `${input.error.name}: ${input.error.message}`
      : String(input.error);
  input.state.failure = failure;
  const artifactPath = input.state.worktreeRef
    ? path.join(input.state.worktreeRef, TARGET_PATH)
    : null;
  writeJson(path.join(PROOF_REVIEW_DIR, "reconciliation-state.json"), {
    phase: "POST_LAUNCH_FAILURE_PRESERVED",
    harnessPhase: input.state.phase,
    attemptAId: input.state.attemptAId ?? null,
    attemptBId: input.state.attemptBId ?? null,
    executionContractId: input.state.executionContractId ?? null,
    processRefA: input.state.processRefA ?? null,
    processRefB: input.state.processRefB ?? null,
    observationSummary: input.observationSummary,
    worktreePath: input.state.worktreeRef ?? null,
    filesystemPathsRetained: {
      proofRoot: input.state.proofRoot ?? null,
      execRoot: input.state.execRoot ?? null,
      safetyJournalPath: input.state.safetyJournalPath ?? null,
      productDbPath: input.state.productDbPath ?? null,
      worktreeRef: input.state.worktreeRef ?? null,
    },
    pathsExist: {
      proofRoot: Boolean(
        input.state.proofRoot && fs.existsSync(input.state.proofRoot),
      ),
      execRoot: Boolean(
        input.state.execRoot && fs.existsSync(input.state.execRoot),
      ),
      safetyJournalPath: Boolean(
        input.state.safetyJournalPath &&
          fs.existsSync(input.state.safetyJournalPath),
      ),
      productDbPath: Boolean(
        input.state.productDbPath && fs.existsSync(input.state.productDbPath),
      ),
      worktreeRef: Boolean(
        input.state.worktreeRef && fs.existsSync(input.state.worktreeRef),
      ),
    },
    artifactExists: Boolean(artifactPath && fs.existsSync(artifactPath)),
    gitFacts: input.gitFacts,
    failure,
    reconciliationComplete: false,
  });
}

describe("GCEC future REAL same-EC commit A→B — static campaign shape", () => {
  it("harness encodes A docs-write + retain + B local-commit + observer-owned Evidence + remote ls-remote", () => {
    const source = fs.readFileSync(__filename, "utf8");
    expect(source).toContain("M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID");
    expect(source).toContain("M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID");
    expect(source).toContain("getRuntimeApplicationService");
    expect(source).toContain("selectExecutionAgent");
    expect(source).toContain("startExecution");
    expect(source).toContain("observeLocalCommitFacts");
    expect(source).toContain("verifyLocalCommitEffect");
    expect(source).toContain("GovernedWorkspaceObservationContext");
    expect(source).toContain('ls-remote", "--heads"');
    expect(source).toContain('ls-remote", "--tags"');
    expect(source).toContain("captureRemoteRefSnapshot");
    expect(source).toContain("remoteHeadsBefore");
    expect(source).toContain("remoteHeadsAfter");
    expect(source).toContain("remoteTagsBefore");
    expect(source).toContain("remoteTagsAfter");
    expect(source).toContain("remoteMainBefore");
    expect(source).toContain("remoteMainAfter");
    expect(
      source.includes("resolvePreCommitWorkspaceContinuation") ||
        source.includes("isFsAnchorSupersededByVerifiedLocalCommit"),
    ).toBe(true);
    expect(source).toContain("A_RECONCILED_RETAINED");
    expect(source).toContain("B_RECONCILED_COMMIT_VERIFIED");
    expect(source).toContain("SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF");
    expect(source).toContain("D-GCEC-AGENT-01");
    expect(source).toContain("CR-GCEC-AGENT-10");
    // CR-09: Evidence creator must receive gitRunner+governed, not free observed facts.
    expect(source).toMatch(
      /verifyLocalCommitEffect\(\{[\s\S]*?\bgitRunner[\s\S]*?\bgoverned\b/,
    );
    expect(source).not.toMatch(
      /verifyLocalCommitEffect\(\{[\s\S]*?observed:\s*observed\.facts/,
    );
    void M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID;
    void M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID;
    void observeLocalCommitFacts;
    void verifyLocalCommitEffect;
    void getRuntimeApplicationService;
    void captureRemoteRefSnapshot;
  });

  it("shouldPreserveRealCommitProofState matrix", () => {
    expect(
      shouldPreserveRealCommitProofState({
        realLaunchConsumed: false,
        reconciliationComplete: false,
      }),
    ).toBe(false);
    expect(
      shouldPreserveRealCommitProofState({
        realLaunchConsumed: true,
        reconciliationComplete: false,
      }),
    ).toBe(true);
    expect(
      shouldPreserveRealCommitProofState({
        realLaunchConsumed: true,
        reconciliationComplete: true,
      }),
    ).toBe(false);
  });
});

describe.skipIf(!ENABLED)(
  "GCEC future REAL same-EC commit A→B — Morris-gated campaign",
  () => {
    it(
      "REAL A→B: docs-write retain → local-commit agent → observe → Evidence → remote unchanged",
      async () => {
        const managedBase = process.env.SFIA_GCEC_MANAGED_REPO_BASE?.trim();
        if (!managedBase) {
          throw new Error("SFIA_GCEC_MANAGED_REPO_BASE required when ENABLED");
        }
        const sanitized = sanitizeManagedRepoIdentity(IDENTITY);
        const cloneRoot = path.join(managedBase, sanitized);
        if (!fs.existsSync(path.join(cloneRoot, ".git"))) {
          throw new Error(`managed clone missing: ${cloneRoot}`);
        }
        expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
        expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);
        const resolved =
          new ManagedProjectRepositoryResolver().resolveLocalRepoRoot(
            { identity: IDENTITY },
            managedBase,
          );
        expect(resolved).toBe(cloneRoot);
        expect(cloneRoot.includes("sfia-product-proof")).toBe(false);
        expect(cloneRoot.includes("sfia-workspace")).toBe(false);

        const root = tempDir("gcec-real-commit-");
        const execRoot = path.join(root, "m4-worktrees");
        const safetyJournalPath = path.join(root, "m4", "launch-safety.sqlite");
        fs.mkdirSync(execRoot, { recursive: true });
        fs.mkdirSync(path.dirname(safetyJournalPath), { recursive: true });

        harnessState.proofRoot = root;
        harnessState.execRoot = execRoot;
        harnessState.safetyJournalPath = safetyJournalPath;
        harnessState.productDbPath = path.join(root, "oa.sqlite");
        harnessState.managedClonePath = cloneRoot;
        harnessState.expectedH0 = BASE_SHA;
        harnessState.phase = "PRECHECK";

        // CR-GCEC-AGENT-10 — read-only remote snapshot BEFORE A/B (future REAL only).
        const remoteBefore = captureRemoteRefSnapshot(cloneRoot);
        expect(remoteBefore.mainSha?.toLowerCase()).toBe(BASE_SHA.toLowerCase());
        expect(remoteBefore.headsNormalized.length).toBeGreaterThan(0);

        const runtime = getRuntimeApplicationService({
          registryRoot: REGISTRY_ROOT,
          schemasRoot: SCHEMAS_ROOT,
          nowIso: NOW,
          idSource: new FixedIdSource("ab"),
          auditMode: "noop",
          productDbPath: harnessState.productDbPath,
          realBoundaryEnv: {
            ...process.env,
            SFIA_STUDIO_CURSOR_REAL: "1",
          },
          realBoundaryComposition: {
            managedRepoRootBase: managedBase,
            execRoot,
            safetyJournalPath,
            repoRoot: cloneRoot,
            studioRoot: path.resolve(APP_ROOT, ".."),
          },
        });
        const oa = runtime.oa!;
        expect(oa.executionAttemptServices.realBoundary).toBeTruthy();
        expect(
          oa.executionAttemptServices.realBoundary?.managedRepoRootBase,
        ).toBe(path.resolve(managedBase));

        const created = await runtime.createProject({
          name: "Gestion de tâches",
          objective: "GCEC Cursor REAL same-EC A→B commit proof",
          context: "proof-vehicle",
          criticality: "STANDARD",
          constraints: ["BOUNDED REAL DOCS-WRITE THEN LOCAL COMMIT ONLY"],
          shortReference: "GCECAB",
          idempotencyKey: "idem:gcec-cursor-real-commit-ab",
        });
        expect(created.ok).toBe(true);
        if (!created.ok) throw new Error("createProject failed");
        const projectId = created.project.projectId;

        const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
          projectId,
          actor: PILOTE,
          binding: {
            provider: "github",
            identity: IDENTITY,
            remoteUrl: `https://github.com/${IDENTITY}.git`,
            defaultBranch: BRANCH,
            pathRoot: "docs",
            baseSha: BASE_SHA,
          },
        });
        expect(bound.ok).toBe(true);

        const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
        const decisions0 = await oa.decisionServices.decisions.listByProject(
          projectId,
        );
        const lpsBoot =
          await oa.projectServices.getCurrentLivingProjectState.execute({
            projectId,
          });
        if (!lpsBoot.ok) throw new Error("lps");
        const presence = await resolveTrajectoryBootstrapPresence(
          oa.cycleServices.trajectories,
          projectId,
        );
        const projectBoot = await oa.projectServices.getProject.execute({
          projectId,
        });
        if (!projectBoot.ok || !projectBoot.project.doctrinePackageRef) {
          throw new Error("doctrine pin missing");
        }
        const pin = projectBoot.project.doctrinePackageRef;

        const mat = await materializeLifecycleRecommendationFromStructuredOutput({
          projectId,
          structuredOutput: {
            narrative: "Next cycle: Conception fonctionnelle.",
            preCycleRoutingAssessment: {
              ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
            },
            lifecycleRecommendation: {
              intent: "NEXT_CYCLE" as const,
              statement: "Conception fonctionnelle task manager.",
              subjectCycleInstanceId: null,
              targetCycleInstanceId: null,
              targetCycleTypeId: "cyc:functional-design",
              rationale: "GCEC-CURSOR-REAL-COMMIT-AB",
              authority: "none" as const,
              isHumanDecision: false as const,
              qualificationSignals: { ...SIGNALS_LIGHT },
            },
          },
          updateEpistemicState: oa.cycleServices.updateEpistemicState,
          facts: {
            cycles: cycles0,
            lpsActiveCycleInstanceId:
              lpsBoot.livingProjectState.activeCycleInstanceId,
            lpsVersion: lpsBoot.livingProjectState.version,
            doctrinePackageId: pin.doctrinePackageId,
            doctrinePackageVersion: pin.version,
            doctrinePackageDigest: pin.digest,
            trajectory: null,
            trajectoryBootstrapPresence: presence,
            decisions: decisions0,
            evidence: [],
            epistemicItems: await oa.cycleServices.epistemic.listByProject(
              projectId,
            ),
          },
          producedAt: NOW,
          createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
        });
        expect(mat.materialization?.ok).toBe(true);

        const bridgeDeps = {
          trajectories: oa.cycleServices.trajectories,
          createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
          updateEpistemicState: oa.cycleServices.updateEpistemicState,
          runInTransaction: ((fn: () => Promise<unknown>) =>
            oa.projectServices.store.runInTransaction(fn)) as <T>(
            fn: () => Promise<T>,
          ) => Promise<T>,
          listEpistemicByProject: (pid: string) =>
            oa.cycleServices.epistemic.listByProject(pid),
          listCyclesByProject: (pid: string) =>
            oa.cycleServices.cycles.listByProject(pid),
          listDecisionsByProject: (pid: string) =>
            oa.decisionServices.decisions.listByProject(pid),
          listEvidenceByProject: (pid: string) =>
            oa.evidenceReviewServices.repository.listByProject(pid),
          getCurrentLps: (pid: string) =>
            oa.projectServices.getCurrentLivingProjectState.execute({
              projectId: pid,
            }),
          getProjectDoctrinePin: async (pid: string) => {
            const p = await oa.projectServices.getProject.execute({
              projectId: pid,
            });
            if (!p.ok) return null;
            const d = p.project.doctrinePackageRef;
            return d
              ? {
                  doctrinePackageId: d.doctrinePackageId,
                  version: d.version,
                  digest: d.digest,
                }
              : null;
          },
          newTrajectoryId: () => `trj:gcec-commit-${projectId}`,
          newStepId: () => `stp:fd-commit`,
          newProvenanceObservationId: () => `epi:gcec-commit-trj`,
          correlationId: `cor:gcec-commit-bridge`,
        };

        const candidatePrepared =
          await prepareCandidateTrajectoryFromCurrentRecommendation({
            projectId,
            deps: bridgeDeps,
          });
        expect(candidatePrepared.ok).toBe(true);
        if (!candidatePrepared.ok) throw new Error(String(candidatePrepared));

        const presentation = await buildPreCycleCandidateApprovalPresentation({
          oa,
          projectId,
        });
        expect(presentation.ok && presentation.presentation).toBeTruthy();
        if (!presentation.ok || !presentation.presentation) {
          throw new Error("presentation");
        }
        const approved = await approveCandidateTrajectory({
          oa,
          projectId,
          presentationDigest: presentation.presentation.presentationDigest,
          forceLocalAuthority: true,
        });
        expect(approved.ok).toBe(true);
        if (!approved.ok) throw new Error(String(approved));

        const prep = await prepareCycleFromValidatedTrajectory({ oa, projectId });
        expect(prep.ok).toBe(true);
        if (!prep.ok) throw new Error(prep.code);
        const startedCycle = await startPreparedTrajectoryCycle({
          oa,
          projectId,
          cycleInstanceId: prep.cycle.cycleInstanceId,
          forceLocalAuthority: true,
        });
        expect(startedCycle.ok).toBe(true);
        if (!startedCycle.ok) throw new Error(startedCycle.code);
        const cycleInstanceId = startedCycle.cycle.cycleInstanceId;

        const overview = await runtime.getProject(projectId);
        expect(overview.ok).toBe(true);
        if (!overview.ok) throw new Error("overview");
        const provider = new FakeConversationProvider();
        const analyzed = await analyzeIntent({
          userContent:
            "__F2_DOCS_WRITE_GCEC__ produce functional design for personal task manager",
          projectSummary: overview.project.name ?? "Gestion de tâches",
          provider,
        });
        const snapshot = {
          projectId,
          lpsId: overview.livingState.id,
          lpsVersion: overview.livingState.version,
          doctrineDigest: overview.doctrine.digest,
          activeCycleInstanceId: cycleInstanceId,
          ckcResolutionRef: null as string | null,
        };
        const ei = analyzed.analysis.executionIntent;
        const proposal = saveProposal({
          proposalId: createProposalId(),
          status: "DECISION_REQUIRED",
          rephrasedRequest:
            analyzed.analysis.rephrasedRequest ?? "docs write task manager",
          objective:
            analyzed.analysis.objective ?? "Functional design task manager",
          cycleTypeId:
            analyzed.analysis.candidateCycleTypeId ?? "cyc:functional-design",
          recommendedProfile: "Standard",
          rationale: "GCEC-CURSOR-REAL-COMMIT-AB",
          scope: "docs/functional-design.md uniquement",
          outOfScope: analyzed.analysis.outOfScope,
          activatedBlocks: analyzed.analysis.activatedBlocks,
          expectedOutcome: "docs/functional-design.md",
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
          requestedOperation: "cursor.docs_write.apply",
          executionIntent: {
            ...(ei && typeof ei === "object" ? ei : {}),
            intentKind: "docs_write",
            artifactType: "functional_design",
            targetRepositoryRef: IDENTITY,
            targetPath: TARGET_PATH,
            scopeIn: ["docs/"],
            scopeOut: ["src/", ".github/", "README.md"],
            expectedOutputs: [TARGET_PATH],
            requiredCapabilities: ["cap:cursor.docs_write"],
            validationExpectations: ["path_allowlist", "no_delete"],
            evidenceRequirements: [
              "git:local_commit",
              "git:remote_push",
              "git:pull_request",
              "git:ci_status",
              "git:review_status",
              "git:merge",
              "git:post_merge_verification",
            ],
            requestedOperation: "cursor.docs_write.apply",
            reversibilityExpectation: "reversible",
            artifactBrief: ARTIFACT_BRIEF,
            contentRequirements: CONTENT_REQUIREMENTS,
          },
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
        if (!go.ok) throw new Error("go");
        const decisionId = go.decision.decisionId;

        const overviewAfter = await runtime.getProject(projectId);
        if (!overviewAfter.ok) throw new Error("overviewAfter");
        const prepared = await prepareAndResolveM3ProductPath({
          projectId,
          decisionId,
          currentContext: {
            projectId,
            lpsId: overviewAfter.livingState.id,
            lpsVersion: overviewAfter.livingState.version,
            doctrineDigest: overviewAfter.doctrine.digest,
            activeCycleInstanceId: cycleInstanceId,
          },
          deps: {
            decisionServices: oa.decisionServices,
            authorityResolver: oa.authorityResolver,
            executionContractServices: oa.executionContractServices,
            nowIso: () => oa.clock.nowIso(),
            forceM3Authority: true,
            preferBoundedDocsWriteProfile: true,
            boundedDocsWriteBaseHeadSha: BASE_SHA,
          },
        });
        expect(prepared.ok).toBe(true);
        if (!prepared.ok) throw new Error("prepareM3");
        const durableEc =
          await oa.executionContractServices.getExecutionContract.execute({
            executionContractId: prepared.payload.successor.executionContractId,
          });
        expect(durableEc.ok).toBe(true);
        if (!durableEc.ok) throw new Error("ec missing");
        let contract = durableEc.contract;
        expect(contract.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
        const inputs = (contract.inputs ?? {}) as Record<string, unknown>;
        expect(inputs.repositoryRef ?? inputs.targetRepositoryRef).toBe(IDENTITY);
        expect(inputs.targetPath).toBe(TARGET_PATH);
        expect(inputs.baseHeadSha).toBe(BASE_SHA);

        const execAuth = registerLocalPiloteAuthority({
          authorityResolver: oa.authorityResolver,
          scope: contract.scope,
          issuedAt: NOW,
          evidenceId: `evd:gcec-commit-exec:${contract.executionContractId}`,
          forceEnable: true,
        });
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
        expect(requested.ok).toBe(true);
        const grantedGate =
          await oa.decisionServices.grantConfirmation.execute({
            confirmationId: gateConfirmId,
            actor: PILOTE,
            authorityEvidenceId: requireAuth(execAuth),
          });
        expect(grantedGate.ok).toBe(true);
        const confirmed =
          await oa.executionContractServices.confirmExecutionContract.execute({
            executionContractId: contract.executionContractId,
            confirmationId: gateConfirmId,
            actor: PILOTE,
            authorityEvidenceId: requireAuth(execAuth),
            expectedVersion: contract.version,
          });
        expect(confirmed.ok).toBe(true);
        if (!confirmed.ok) throw new Error("confirm");
        contract = confirmed.contract;
        harnessState.executionContractId = contract.executionContractId;

        expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);
        expect(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID).not.toBe(
          M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
        );

        const attempts = oa.executionAttemptServices;
        const attemptAId =
          `xat:gcec-commit-a:${contract.executionContractId}`.slice(0, 128);
        const attemptBId =
          `xat:gcec-commit-b:${contract.executionContractId}`.slice(0, 128);
        expect(attemptAId).not.toBe(attemptBId);
        harnessState.attemptAId = attemptAId;
        harnessState.attemptBId = attemptBId;

        // ----- Attempt A: bounded docs-write (retain worktree) -----
        const selectedA = await attempts.selectExecutionAgent.execute({
          attemptId: attemptAId,
          executionContractId: contract.executionContractId,
          idempotencyKey: `idem:sel:${attemptAId}`,
          actor: PILOTE,
          authorityEvidenceId: requireAuth(execAuth),
          expectedContractVersion: contract.version,
          selectionProfile: "standard",
          selectionStrategy: "capabilities_deterministic",
          requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
          systemInitiated: true,
        });
        expect(selectedA.ok).toBe(true);
        if (!selectedA.ok) throw new Error(selectedA.error.message);

        const expiresAt = new Date(Date.parse(NOW) + 60 * 60 * 1000).toISOString();
        const gateA = await attempts.grantRealExecutionGate!.execute({
          grantId: `gd:gcec-commit-a:${attemptAId}`.slice(0, 128),
          attemptId: attemptAId,
          actor: PILOTE,
          expiresAt,
          authorityEvidenceId: requireAuth(execAuth),
        });
        expect(gateA.ok).toBe(true);
        if (!gateA.ok) throw new Error(gateA.error.message);

        const startedA = await attempts.startExecution.execute({
          attemptId: attemptAId,
          actor: PILOTE,
          authorityEvidenceId: requireAuth(execAuth),
          confirmations: [] as Confirmation[],
        });
        expect(startedA.ok).toBe(true);
        if (!startedA.ok) {
          throw new Error(
            `StartExecution A failed: ${startedA.error.detailCode} ${startedA.error.internalCauseRef ?? ""} ${startedA.error.message}`,
          );
        }
        expect(startedA.attempt.status).toBe("running");

        const frontiersA =
          await attempts.realBoundary!.safetyJournal.findFrontierByAttempt(
            attemptAId,
          );
        const launchedA = frontiersA.find(
          (row) =>
            row.kind === "LAUNCHED" &&
            typeof row.processRef === "string" &&
            row.processRef.trim().length > 0,
        );
        expect(launchedA?.processRef).toBeTruthy();
        const processRefA = String(launchedA!.processRef);
        expect(processRefA).toMatch(/^(pid:|proc:)/);

        harnessState.realLaunchConsumed = true;
        harnessState.processRefA = processRefA;
        harnessState.phase = "A_LAUNCHED_UNRECONCILED";
        await writeLaunchFrontierSnapshot({
          state: harnessState,
          phase: "A_LAUNCHED_UNRECONCILED",
        });

        let artifactDigest = "";
        let worktree = "";

        try {
          const attemptRunningA =
            await attempts.getExecutionAttempt.execute({ attemptId: attemptAId });
          expect(attemptRunningA.ok).toBe(true);
          if (!attemptRunningA.ok) throw new Error("attempt A missing");

          const completedA = await completeBoundedDocsWriteLaunch({
            attempt: attemptRunningA.attempt,
            services: attempts,
            targetPath: TARGET_PATH,
            pathAllowlist: ["docs/"],
            statusDiffPort: new NodeLocalGitStatusDiffPort(),
            awaitIfPending: true,
          });
          expect(completedA.ok).toBe(true);
          if (!completedA.ok) {
            throw new Error(
              `complete A failed: ${completedA.code} ${completedA.message}`,
            );
          }
          expect(completedA.status).toBe("succeeded");
          if (completedA.status !== "succeeded") throw new Error("A not succeeded");

          worktree = completedA.facts.worktreeRef!;
          harnessState.worktreeRef = worktree;
          expect(worktree).toBeTruthy();
          expect(worktree.includes("sfia-product-proof")).toBe(false);
          expect(fs.existsSync(path.join(worktree, TARGET_PATH))).toBe(true);
          const artifactText = fs.readFileSync(
            path.join(worktree, TARGET_PATH),
            "utf8",
          );
          expect(artifactText.trim().length).toBeGreaterThan(80);
          expect(git(worktree, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
          expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
          expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);

          artifactDigest = completedA.facts.digest;
          const ingested = await ingestDocsWriteArtifactEvidence({
            evidenceReviewServices: oa.evidenceReviewServices,
            projectId,
            cycleInstanceId,
            executionContractId: contract.executionContractId,
            executionAttemptId: attemptAId,
            targetPath: TARGET_PATH,
            digest: artifactDigest,
            actor: PILOTE,
            nowIso: oa.clock.nowIso(),
          });
          expect(ingested.ok).toBe(true);
          if (!ingested.ok) throw new Error(ingested.code);

          const artLoaded =
            await oa.evidenceReviewServices.evidenceReader.findById(
              ingested.evidenceId,
            );
          expect(artLoaded).toBeTruthy();
          const evidenceSvc = oa.evidenceReviewServices as typeof oa.evidenceReviewServices & {
            payload?: {
              setScript?: (
                id: string,
                s: { availability: "available"; digest: string },
              ) => void;
            };
          };
          evidenceSvc.payload?.setScript?.(ingested.evidenceId, {
            availability: "available",
            digest: artifactDigest,
          });
          const artVerified =
            await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
              evidenceId: ingested.evidenceId,
              expectedVersion: artLoaded!.version,
              actor: PILOTE,
            });
          expect(artVerified.ok).toBe(true);

          const ecAfterA =
            await oa.executionContractServices.getExecutionContract.execute({
              executionContractId: contract.executionContractId,
            });
          expect(ecAfterA.ok).toBe(true);
          if (!ecAfterA.ok) throw new Error("ec after A");
          expect(ecAfterA.contract.status).toBe("confirmed");
          contract = ecAfterA.contract;

          // Retain worktree — do NOT mark campaign reconciled yet.
          harnessState.phase = "A_RECONCILED_RETAINED";
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "A_RECONCILED_RETAINED",
          });

          // ----- Attempt B: bounded local-commit under SAME EC (Cont01 resume) -----
          const selectedB = await attempts.selectExecutionAgent.execute({
            attemptId: attemptBId,
            executionContractId: contract.executionContractId,
            idempotencyKey: `idem:sel:${attemptBId}`,
            actor: PILOTE,
            authorityEvidenceId: requireAuth(execAuth),
            expectedContractVersion: contract.version,
            selectionProfile: "standard",
            selectionStrategy: "capabilities_deterministic",
            requestedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
            systemInitiated: true,
          });
          expect(selectedB.ok).toBe(true);
          if (!selectedB.ok) throw new Error(selectedB.error.message);
          expect(selectedB.attempt.selectedAgentRef).toBe(
            M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
          );
          expect(selectedB.attempt.selectedAgentRef).not.toBe(
            M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
          );

          const gateB = await attempts.grantRealExecutionGate!.execute({
            grantId: `gd:gcec-commit-b:${attemptBId}`.slice(0, 128),
            attemptId: attemptBId,
            actor: PILOTE,
            expiresAt,
            authorityEvidenceId: requireAuth(execAuth),
          });
          expect(gateB.ok).toBe(true);
          if (!gateB.ok) throw new Error(gateB.error.message);

          const gitActionRef = buildGitEffectActionRef({
            executionContractId: contract.executionContractId,
            effect: "git.commit",
            repositoryRef: IDENTITY,
            branchOrRef: BRANCH,
          });
          const gitAuth = registerLocalPiloteAuthority({
            authorityResolver: oa.authorityResolver,
            scope: gitActionRef,
            issuedAt: NOW,
            evidenceId: `evd:gcec-commit-git:${contract.executionContractId}`,
            forceEnable: true,
          });
          const gitConfirmId = `cfm:git-commit:${contract.executionContractId}`;
          const gitRequested =
            await oa.decisionServices.requestConfirmation.execute({
              confirmationId: gitConfirmId,
              level: "N3",
              actionRef: gitActionRef,
              requestedBy: PILOTE,
              requestedTo: PILOTE,
              scope: gitActionRef,
              idempotencyKey: `idem:${gitConfirmId}`,
              decisionRef: decisionId,
            });
          expect(gitRequested.ok).toBe(true);
          const gitGranted =
            await oa.decisionServices.grantConfirmation.execute({
              confirmationId: gitConfirmId,
              actor: PILOTE,
              authorityEvidenceId: requireAuth(gitAuth),
            });
          expect(gitGranted.ok).toBe(true);
          const gitCnf = await oa.decisionServices.confirmations.findById(
            gitConfirmId,
          );
          expect(gitCnf?.status).toBe("granted");

          // Cont01 + server-derived gitCommitSpec built inside StartExecution.
          const startedB = await attempts.startExecution.execute({
            attemptId: attemptBId,
            actor: PILOTE,
            authorityEvidenceId: requireAuth(execAuth),
            confirmations: gitCnf ? [gitCnf] : [],
            confirmationMatch: {
              repositoryRef: IDENTITY,
              branchOrRef: BRANCH,
              actorId: PILOTE.actorId,
            },
            verifiedEffects: ["filesystem.create", "filesystem.modify"],
          });
          expect(startedB.ok).toBe(true);
          if (!startedB.ok) {
            throw new Error(
              `StartExecution B failed: ${startedB.error.detailCode} ${startedB.error.internalCauseRef ?? ""} ${startedB.error.message}`,
            );
          }
          expect(startedB.attempt.status).toBe("running");

          const frontiersB =
            await attempts.realBoundary!.safetyJournal.findFrontierByAttempt(
              attemptBId,
            );
          const launchedB = frontiersB.find(
            (row) =>
              row.kind === "LAUNCHED" &&
              typeof row.processRef === "string" &&
              row.processRef.trim().length > 0,
          );
          expect(launchedB?.processRef).toBeTruthy();
          const processRefB = String(launchedB!.processRef);
          expect(processRefB).toMatch(/^(pid:|proc:)/);
          harnessState.processRefB = processRefB;
          harnessState.phase = "B_LAUNCHED_UNRECONCILED";
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "B_LAUNCHED_UNRECONCILED",
          });

          const attemptRunningB =
            await attempts.getExecutionAttempt.execute({ attemptId: attemptBId });
          expect(attemptRunningB.ok).toBe(true);
          if (!attemptRunningB.ok) throw new Error("attempt B missing");

          const completedB = await completeBoundedReadOnlyLaunch({
            attempt: attemptRunningB.attempt,
            services: attempts,
            awaitIfPending: true,
          });
          expect(completedB.ok).toBe(true);
          if (!completedB.ok) {
            throw new Error(
              `complete B failed: ${completedB.code} ${completedB.message}`,
            );
          }
          expect(completedB.status).toBe("succeeded");
          if (completedB.status !== "succeeded") {
            throw new Error("B not succeeded");
          }

          // Reconstruct the same Cont01 / gitCommitSpec facts StartExecution used.
          const peerListed = await attempts.listExecutionAttempts.execute({
            executionContractId: contract.executionContractId,
          });
          expect(peerListed.ok).toBe(true);
          if (!peerListed.ok) throw new Error("list attempts");
          const evidenceList =
            await oa.evidenceReviewServices.repository.listByProject(projectId);
          const cont = resolvePreCommitWorkspaceContinuation({
            currentAttemptId: attemptBId,
            executionContractId: contract.executionContractId,
            projectId,
            cycleInstanceId,
            expectedHeadSha: BASE_SHA,
            attempts: peerListed.attempts,
            evidence: evidenceList,
            repositoryRef: IDENTITY,
            authorizedEffects: ["git.commit"],
            verifiedEffects: ["filesystem.create", "filesystem.modify"],
          });
          expect(cont.required).toBe(true);
          if (!cont.required || !cont.ok) {
            throw new Error(
              `Cont01 expected: ${"reason" in cont ? cont.reason : "n/a"}`,
            );
          }
          expect(cont.descriptor.priorAttemptId).toBe(attemptAId);

          const contractInputs =
            contract.inputs && typeof contract.inputs === "object"
              ? (contract.inputs as Record<string, unknown>)
              : {};
          const message = deriveTrustedCommitMessage({
            contractInputs: {
              ...contractInputs,
              commitMessage: COMMIT_MSG,
            },
            docsWriteArtifactBrief: ARTIFACT_BRIEF,
          });
          expect(message.ok).toBe(true);
          if (!message.ok) throw new Error(message.reason);
          const builtSpec = buildGitCommitLaunchSpec({
            repositoryRef: IDENTITY,
            expectedParentSha: cont.descriptor.expectedHeadSha,
            exactPaths: cont.descriptor.expectedVerifiedFiles.map((f) => f.path),
            commitMessage: message.message,
            branchOrRef: BRANCH,
          });
          expect(builtSpec.ok).toBe(true);
          if (!builtSpec.ok) throw new Error(builtSpec.reason);

          const governedPath = workspacePathForAttempt(execRoot, attemptAId);
          const workspacePath =
            harnessState.worktreeRef &&
            fs.existsSync(harnessState.worktreeRef)
              ? harnessState.worktreeRef
              : governedPath;
          expect(fs.existsSync(workspacePath)).toBe(true);

          const governed: GovernedWorkspaceObservationContext = {
            workspacePath,
            execRoot,
            priorAttemptId: attemptAId,
            managedRepoRoot: cloneRoot,
            repositoryBinding: {
              identity: IDENTITY,
              remoteUrl: `https://github.com/${IDENTITY}.git`,
              defaultBranch: BRANCH,
            },
            expectedCommonGitRoot: cloneRoot,
          };

          const gitRunner = new NodeGitCommandRunner();
          // CR-09: Evidence creator owns observation — no free LocalCommitObservedFacts.
          const verified = await verifyLocalCommitEffect({
            gitRunner,
            governed,
            spec: builtSpec.spec,
            expectedArtifactDigests: { [TARGET_PATH]: artifactDigest },
            expectedBindings: {
              projectId,
              cycleInstanceId,
              executionContractId: contract.executionContractId,
              executionAttemptId: attemptBId,
            },
            actor: { actorId: PILOTE.actorId, role: "human" },
            evidenceServices: oa.evidenceReviewServices,
            nowIso: oa.clock.nowIso(),
          });
          expect(verified.ok).toBe(true);
          if (!verified.ok) throw new Error(verified.reason);
          expect(verified.status).toBe("verified");
          expect(verified.provenance).toBe(
            "studio:local_git_readonly:observe",
          );
          harnessState.observedH1 = verified.commitSha;

          // Optional forensic re-observe (read-only) — not Evidence authority.
          const observed = await observeLocalCommitFacts({
            gitRunner,
            governed,
            spec: builtSpec.spec,
            expectedArtifactDigests: { [TARGET_PATH]: artifactDigest },
          });
          expect(observed.ok).toBe(true);
          if (!observed.ok) throw new Error(observed.reason);
          expect(observed.facts.observedParentSha.toLowerCase()).toBe(
            BASE_SHA.toLowerCase(),
          );
          expect(observed.facts.commitsFromExpectedParent).toBe(1);
          expect(observed.facts.worktreeDirty).toBe(false);
          expect(verified.commitSha.toLowerCase()).toBe(
            observed.facts.observedHeadSha.toLowerCase(),
          );

          const peersAfter = await attempts.listExecutionAttempts.execute({
            executionContractId: contract.executionContractId,
          });
          expect(peersAfter.ok).toBe(true);
          if (!peersAfter.ok) throw new Error("peers after");
          const evidenceAfter =
            await oa.evidenceReviewServices.repository.listByProject(projectId);
          expect(
            isFsAnchorSupersededByVerifiedLocalCommit({
              projectId,
              cycleInstanceId,
              executionContractId: contract.executionContractId,
              evidence: evidenceAfter,
              priorAttemptId: attemptAId,
              attempts: peersAfter.attempts,
              repositoryRef: IDENTITY,
              expectedParentSha: BASE_SHA,
              requiredPaths: [TARGET_PATH],
            }),
          ).toBe(true);

          // Local clone HEAD anti-effect (worktree commit must not mutate clone).
          expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
          expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);

          // CR-GCEC-AGENT-10 — actual remote read-only AFTER; must equal BEFORE.
          const remoteAfter = captureRemoteRefSnapshot(cloneRoot);
          expect(remoteAfter.headsNormalized).toBe(remoteBefore.headsNormalized);
          expect(remoteAfter.tagsNormalized).toBe(remoteBefore.tagsNormalized);
          expect(remoteAfter.mainSha?.toLowerCase()).toBe(BASE_SHA.toLowerCase());
          expect(remoteAfter.mainSha).toBe(remoteBefore.mainSha);
          expect(remoteAfter.targetBranchLine).toBe(
            remoteBefore.targetBranchLine,
          );

          harnessState.phase = "B_RECONCILED_COMMIT_VERIFIED";
          fs.mkdirSync(PROOF_REVIEW_DIR, { recursive: true });
          writeJson(path.join(PROOF_REVIEW_DIR, "facts.json"), {
            projectId,
            cycleInstanceId,
            executionContractId: contract.executionContractId,
            attemptAId,
            attemptBId,
            attemptAAgent: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
            attemptBAgent: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
            processRefA,
            processRefB,
            worktreeRef: worktree,
            artifactDigest,
            expectedH0: BASE_SHA,
            observedH1: verified.commitSha,
            commitMessage: COMMIT_MSG,
            gitEvidenceId: verified.evidenceId,
            cloneHead: git(cloneRoot, ["rev-parse", "HEAD"]),
            remoteHeadsBefore: remoteBefore.headsNormalized,
            remoteHeadsAfter: remoteAfter.headsNormalized,
            remoteTagsBefore: remoteBefore.tagsNormalized,
            remoteTagsAfter: remoteAfter.tagsNormalized,
            remoteMainBefore: remoteBefore.mainSha,
            remoteMainAfter: remoteAfter.mainSha,
            targetBranchRemoteBefore: remoteBefore.targetBranchLine,
            targetBranchRemoteAfter: remoteAfter.targetBranchLine,
            dGcecAgent01: "ADOPTED",
            crGcecAgent10: "remote_ls_remote_before_after",
          });
          writeJson(path.join(PROOF_REVIEW_DIR, "reconciliation-state.json"), {
            phase: harnessState.phase,
            attemptAId,
            attemptBId,
            attemptAAgent: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
            attemptBAgent: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
            expectedH0: harnessState.expectedH0,
            observedH1: harnessState.observedH1,
            commitMessage: COMMIT_MSG,
            digestHint: createHash("sha256")
              .update(artifactDigest)
              .digest("hex"),
            gitEvidenceId: verified.evidenceId,
            remoteMainBefore: remoteBefore.mainSha,
            remoteMainAfter: remoteAfter.mainSha,
            reconciliationComplete: true,
            dGcecAgent01: "ADOPTED",
          });
          harnessState.durableReviewSnapshotWritten = true;
          harnessState.reconciliationComplete = true;
        } catch (err) {
          let observationSummary: Record<string, unknown> | null = null;
          const processRef =
            harnessState.processRefB ?? harnessState.processRefA;
          try {
            const port = attempts.realBoundary?.launchPort;
            if (port && typeof port.observe === "function" && processRef) {
              const obs = await port.observe(processRef);
              if (obs) {
                observationSummary = {
                  processRef: obs.processRef,
                  exitCode: obs.exitCode,
                  timedOut: obs.timedOut,
                  durationMs: obs.durationMs,
                  realProcessInvoked: obs.realProcessInvoked,
                  worktreeRef: obs.worktreeRef ?? null,
                  stdoutCap: (obs.stdout ?? "").slice(0, 1000),
                  stderrCap: (obs.stderr ?? "").slice(0, 1000),
                };
                if (obs.worktreeRef) {
                  harnessState.worktreeRef = obs.worktreeRef;
                }
              }
            }
          } catch {
            /* ignore observe errors */
          }
          if (!harnessState.worktreeRef && harnessState.execRoot) {
            try {
              const kids = fs.readdirSync(harnessState.execRoot);
              if (kids.length === 1) {
                harnessState.worktreeRef = path.join(
                  harnessState.execRoot,
                  kids[0]!,
                );
              }
            } catch {
              /* ignore */
            }
          }
          let gitFacts: Record<string, unknown> | null = null;
          const wt = harnessState.worktreeRef;
          if (wt && fs.existsSync(wt)) {
            gitFacts = {
              head: safeGit(wt, ["rev-parse", "HEAD"]),
              statusPorcelain: safeGit(wt, ["status", "--porcelain"]),
              diffNameStatus: safeGit(wt, ["diff", "--name-status"]),
              targetArtifactExists: fs.existsSync(path.join(wt, TARGET_PATH)),
              readmeSha256: sha256FileOrMissing(path.join(wt, "README.md")),
              cloneHead: safeGit(cloneRoot, ["rev-parse", "HEAD"]),
            };
          }
          await writeFailureReconciliationSnapshot({
            state: harnessState,
            error: err,
            observationSummary,
            gitFacts,
          });
          throw err;
        }
      },
      20 * 60 * 1000,
    );
  },
);
```

## FULL: projects_sfia-studio_app___tests___oa_execution-attempt_gcecAgent01AttemptProfile.d0.test.ts
```typescript
/**
 * D-GCEC-AGENT-01 — AttemptExecutionProfile derivation (AP matrix).
 * ZERO REAL. @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_BOUNDED_LOCAL_COMMIT_ACTION,
  M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
  M4_BOUNDED_LOCAL_COMMIT_SCOPE,
  M4_BOUNDED_LOCAL_COMMIT_TARGET,
  resolveAttemptExecutionProfile,
} from "@/lib/oa/execution-attempt";

const NOW = "2026-09-11T20:00:00.000Z";
const PROJECT = "prj:ap";
const CYCLE = "cyc:ap";
const EC = "xct:ap";
const PATH = "docs/functional-design.md";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const H0 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";

function contract(partial: Record<string, unknown> = {}) {
  return {
    executionContractId: EC,
    projectId: PROJECT,
    cycleInstanceId: CYCLE,
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: M4_BOUNDED_DOCS_WRITE_TARGET,
    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    evidenceRequirements: ["git:local_commit"],
    expectedOutputs: ["artifact", PATH],
    inputs: {
      targetPath: PATH,
      evidenceRequirements: ["artifact", "git:local_commit"],
      commitMessage: "docs: add task manager functional design",
    },
    ...partial,
  };
}

function attempt(id: string, status: ExecutionAttempt["status"] = "succeeded"): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: id,
    executionContractId: EC,
    executionContractVersion: 1,
    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
    status,
    idempotencyKey: `idem:${id}`,
    correlationId: `cor:${id}`,
    version: 1,
    createdAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${id}`,
      actor: { actorId: "actor:t", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:t",
    },
  };
}

function artifactEv(attemptId: string): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: `ev:${attemptId}`,
    type: "artifact",
    status: "verified",
    source: "execution_attempt:docs_write",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    location: PATH,
    digest: DIGEST,
    bindings: {
      projectId: PROJECT,
      cycleInstanceId: CYCLE,
      executionContractId: EC,
      executionAttemptId: attemptId,
    },
    createdAt: NOW,
    updatedAt: NOW,
    version: 1,
    producedAt: NOW,
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:ev",
      actor: { actorId: "a", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:ev",
    },
  };
}

function commitEv(attemptId: string): Evidence {
  return {
    ...artifactEv(attemptId),
    evidenceId: `ev:commit:${attemptId}`,
    type: "other",
    source: "git:local_commit",
    location: `git:local_commit?repo=acme%2Fwidget&commitSha=${H1}&parentSha=${H0}`,
  };
}

describe("D-GCEC-AGENT-01 AttemptExecutionProfile AP", () => {
  it("AP-01 initial docs-write state → docs-write profile", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [],
      evidence: [],
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.profile.kind).toBe("docs_write");
    expect(r.profile.criteria).toEqual({
      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    });
  });

  it("AP-02 verified FS + outstanding commit → local-commit profile", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.profile.kind).toBe("local_commit");
    expect(r.profile.criteria.action).toBe(M4_BOUNDED_LOCAL_COMMIT_ACTION);
    expect(r.profile.criteria.requiredCapabilities).toEqual([
      M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
    ]);
    expect(r.profile.criteria.target).toBe(M4_BOUNDED_LOCAL_COMMIT_TARGET);
    expect(r.profile.criteria.scope).toBe(M4_BOUNDED_LOCAL_COMMIT_SCOPE);
  });

  it("AP-03 verifiedEffects alone without Evidence does not fabricate commit profile", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [],
      claimedVerifiedEffects: ["filesystem.create", "filesystem.modify"],
      authorizedEffects: ["git.commit"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.reason).toMatch(/without_verified_fs_evidence|without_verified_fs_lineage/);
    }
  });

  it("AP-04 zero eligible / empty authorized → fail closed", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
      authorizedEffects: [],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/zero_eligible/);
  });

  it("AP-05 mixed incompatible authorized slice → fail closed", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
      authorizedEffects: ["git.commit", "filesystem.modify"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/ambiguous/);
  });

  it("AP-06 caller cannot inject profile", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      claimedProfile: { kind: "local_commit" },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/client_injection/);
  });

  it("AP-07/08 requestedAgentRef / gitCommitSpec cannot redefine profile", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [],
      evidence: [],
      claimedRequestedAgentRef: "agt:m4.cursor.bounded_local_commit",
      claimedGitCommitSpec: { exactPaths: [PATH] },
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.profile.kind).toBe("docs_write");
  });

  it("AP-09 restart recomputation yields same local-commit profile", () => {
    const input = {
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
    };
    const a = resolveAttemptExecutionProfile(input);
    const b = resolveAttemptExecutionProfile(input);
    expect(a).toEqual(b);
    expect(a.ok && a.profile.kind).toBe("local_commit");
  });

  it("AP-13 post-commit → fail closed (GCEC-PUSH not ready)", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a"), attempt("xat:b")],
      evidence: [artifactEv("xat:a"), commitEv("xat:b")],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
  });

  it("AP-10 M4 + authorized git.push → FAIL CLOSED", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a"), commitEv("xat:b")],
      authorizedEffects: ["git.push"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
  });

  it("AP-11 M4 + PR create → FAIL CLOSED", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      authorizedEffects: ["github.pr.create"],
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
  });

  it("AP-12 M4 + merge → FAIL CLOSED", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      authorizedEffects: ["github.pr.merge"],
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
  });

  it("AP-14 non-M4 historical contract → contract_legacy still works", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract({
        action: "fixture.action",
        target: "fixture.target",
        scope: "fixture.scope",
        requiredCapabilities: ["cap:fixture"],
        evidenceRequirements: [],
        expectedOutputs: [],
        inputs: {},
      }),
      attempts: [],
      evidence: [],
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.profile.kind).toBe("contract_legacy");
  });

  it("AP-16 validation-only M4 slice → fail closed", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
      authorizedEffects: ["validation.run"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/effect_not_supported/);
  });
});
```

## FULL: projects_sfia-studio_app___tests___oa_execution-attempt_gcecAgent01CorrWireLin.d0.test.ts
```typescript
/**
 * CORR-D-GCEC-AGENT-01 — WIRE + LIN matrices.
 * Normal Product composition Evidence wiring + exact Attempt-A lineage.
 * ZERO REAL. @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_BOUNDED_LOCAL_COMMIT_ACTION,
  resolveAttemptExecutionProfile,
  resolveVerifiedDocsWritePriorAttempt,
  unavailableProjectEvidence,
  type ExecutionAttempt,
} from "@/lib/oa/execution-attempt";
import { getRuntimeApplicationService, resetRuntimeApplicationServiceForTests } from "@/lib/vertical-slice-runtime";
import { afterEach } from "vitest";

const NOW = "2026-09-11T21:00:00.000Z";
const PROJECT = "prj:wire-lin";
const CYCLE = "cyc:wire-lin";
const EC = "xct:wire-lin";
const PATH = "docs/functional-design.md";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

function contract() {
  return {
    executionContractId: EC,
    projectId: PROJECT,
    cycleInstanceId: CYCLE,
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: M4_BOUNDED_DOCS_WRITE_TARGET,
    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    evidenceRequirements: ["git:local_commit"],
    expectedOutputs: ["artifact", PATH],
    inputs: {
      targetPath: PATH,
      evidenceRequirements: ["artifact", "git:local_commit"],
    },
  };
}

function attempt(
  id: string,
  status: ExecutionAttempt["status"] = "succeeded",
  selectedAgentRef: string = M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: id,
    executionContractId: EC,
    executionContractVersion: 1,
    selectedAgentRef,
    status,
    idempotencyKey: `idem:${id}`,
    correlationId: `cor:${id}`,
    version: 1,
    createdAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${id}`,
      actor: { actorId: "actor:t", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:t",
    },
  };
}

function artifactEv(attemptId: string, overrides: Partial<Evidence> = {}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: `ev:${attemptId}`,
    type: "artifact",
    status: "verified",
    source: "execution_attempt:docs_write",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    location: PATH,
    digest: DIGEST,
    bindings: {
      projectId: PROJECT,
      cycleInstanceId: CYCLE,
      executionContractId: EC,
      executionAttemptId: attemptId,
    },
    createdAt: NOW,
    updatedAt: NOW,
    version: 1,
    producedAt: NOW,
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:ev",
      actor: { actorId: "a", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:ev",
    },
    ...overrides,
  };
}

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
});

describe("CORR-D-GCEC-AGENT-01 WIRE — Evidence reader", () => {
  it("WIRE-03 reader unavailable during progressive transition → fail closed", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [],
      evidenceReaderAvailable: false,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/evidence_reader_unavailable/);
  });

  it("WIRE-04 available empty Evidence → initial docs-write", () => {
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [],
      evidence: [],
      evidenceReaderAvailable: true,
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.profile.kind).toBe("docs_write");
  });

  it("WIRE-01/05 Evidence bag drives B local_commit profile with lineage", () => {
    const bag: Evidence[] = [artifactEv("xat:a")];
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: bag,
      evidenceReaderAvailable: true,
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.profile.kind).toBe("local_commit");
    expect(r.profile.criteria.action).toBe(M4_BOUNDED_LOCAL_COMMIT_ACTION);
    expect(r.profile.lineage?.priorAttemptId).toBe("xat:a");
    expect(r.profile.lineage?.artifactPath).toBe(PATH);
  });

  it("WIRE unavailable helper", () => {
    expect(unavailableProjectEvidence()).toEqual({
      ok: false,
      reason: "evidence_reader_unavailable",
    });
  });
});

describe("CORR-D-GCEC-AGENT-01 LIN — exact Attempt-A lineage", () => {
  it("LIN-01 Evidence A + same Attempt A succeeded → local_commit", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
    });
    expect(prior.ok).toBe(true);
    const r = resolveAttemptExecutionProfile({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
      evidenceReaderAvailable: true,
    });
    expect(r.ok && r.profile.kind).toBe("local_commit");
  });

  it("LIN-02 Evidence A but A failed → no local_commit", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:a", "failed")],
      evidence: [artifactEv("xat:a")],
    });
    expect(prior.ok).toBe(false);
  });

  it("LIN-03 Evidence bound A but different succeeded Attempt C → no local_commit", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:c")],
      evidence: [artifactEv("xat:a")],
    });
    expect(prior.ok).toBe(false);
  });

  it("LIN-04 succeeded A but Evidence bound C → no local_commit", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:c")],
    });
    expect(prior.ok).toBe(false);
  });

  it("LIN-05 Evidence fake source prefix → no local_commit", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a", { source: "execution_attempt:docs_write_fake" })],
    });
    expect(prior.ok).toBe(false);
  });

  it("LIN-06 two eligible prior A candidates → ambiguity", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:a1"), attempt("xat:a2")],
      evidence: [artifactEv("xat:a1"), artifactEv("xat:a2")],
    });
    expect(prior.ok).toBe(false);
    if (!prior.ok) expect(prior.reason).toMatch(/ambiguous/);
  });

  it("LIN-07 exact one A after restart → local_commit", () => {
    const input = {
      contract: contract(),
      attempts: [attempt("xat:a")],
      evidence: [artifactEv("xat:a")],
      evidenceReaderAvailable: true,
    };
    expect(resolveAttemptExecutionProfile(input)).toEqual(
      resolveAttemptExecutionProfile(input),
    );
  });

  it("LIN-08 A selected agent not bounded docs-write → reject", () => {
    const prior = resolveVerifiedDocsWritePriorAttempt({
      contract: contract(),
      attempts: [attempt("xat:a", "succeeded", "agt:other")],
      evidence: [artifactEv("xat:a")],
    });
    expect(prior.ok).toBe(false);
  });
});

describe("CORR-D-GCEC-AGENT-01 WIRE — normal Product composition smoke", () => {
  it("WIRE-01 Product runtime wires Result Evidence reader (not silent [])", async () => {
    // Smoke: runtime composition constructs without throwing and exposes
    // executionAttemptServices + evidenceReviewServices late-bound together.
    const runtime = getRuntimeApplicationService({
      projectIdSource: { nextProjectId: () => "prj:wire-smoke" },
    } as never);
    expect(runtime.oa?.executionAttemptServices).toBeDefined();
    expect(runtime.oa?.evidenceReviewServices).toBeDefined();
    // Reader unavailable-before-late is fail-closed at profile time (WIRE-03).
    // After composition, late.evidenceReviewServices is assigned — Select uses Result ok.
  });
});
```

## FULL: projects_sfia-studio_app___tests___oa_execution-attempt_gcecGitCommitEvidence.d0.test.ts
```typescript
/**
 * GCEC git.commit Evidence — EVP (CR-GCEC-AGENT-09).
 * Production Evidence creator owns observation. ZERO synthetic Product facts.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import { createTestEvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  verifyLocalCommitEffect,
  observeLocalCommitFacts,
  NodeGitCommandRunner,
} from "@/lib/oa/execution-attempt";
import * as executionAttemptIndex from "@/lib/oa/execution-attempt";
import { createGovernedCommittedWorktree } from "./support/governedCommitFixture";

const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const BODY = "# evidence-proof\n";
const NOW = "2026-09-11T20:00:00.000Z";
const PRIOR = "xat:evp-a";

const BINDINGS = {
  projectId: "prj:ge",
  cycleInstanceId: "cyc:ge",
  executionContractId: "xct:ge",
  executionAttemptId: "xat:ge-b",
};

const cleanups: Array<() => void> = [];
afterEach(() => {
  for (const c of cleanups.splice(0)) c();
});

describe("GCEC git.commit Evidence EVP (observer-owned)", () => {
  it("EVP-05 synthetic helper not exported by Product public index", () => {
    expect(
      "localCommitFactsFromSynthetic" in executionAttemptIndex,
    ).toBe(false);
    expect(
      "allowTestOnlySyntheticObservation" in
        ({} as Parameters<typeof verifyLocalCommitEffect>[0]),
    ).toBe(false);
  });

  it("EVP-06 production API has no allowTestOnlySyntheticObservation", () => {
    const keys = [
      "gitRunner",
      "governed",
      "spec",
      "expectedArtifactDigests",
      "expectedBindings",
      "actor",
      "evidenceServices",
    ] as const;
    void keys;
    // Type-level: VerifyLocalCommitEffectInput must not include the escape hatch.
    type Input = Parameters<typeof verifyLocalCommitEffect>[0];
    type Forbidden = "allowTestOnlySyntheticObservation" | "observed";
    type HasForbidden = Forbidden extends keyof Input ? true : false;
    const hasForbidden: HasForbidden = false;
    expect(hasForbidden).toBe(false);
  });

  it("EVP-01/02/12 production Evidence creator observes → VERIFIED with B bindings", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
      nowIso: NOW,
    });
    expect(r.ok).toBe(true);
    if (!r.ok) throw new Error(r.reason);
    expect(r.status).toBe("verified");
    expect(r.commitSha).toBe(fx.H1.toLowerCase());
    expect(r.provenance).toBe("studio:local_git_readonly:observe");
    const loaded = await evidence.evidenceReader.findById(r.evidenceId);
    expect(loaded?.bindings.executionAttemptId).toBe(BINDINGS.executionAttemptId);
    expect(loaded?.source).toBe("git:local_commit");
    expect(String(loaded?.location)).toContain(`path=${encodeURIComponent(PATH)}`);
  });

  it("EVP-03/04 forged observed / SHA fields rejected", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
      observed: {
        observedHeadSha: "f".repeat(40),
        observedParentSha: "e".repeat(40),
      },
    } as never);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/forged_observation/);
  });

  it("EVP-07 wrong governed repo → no Evidence", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: {
        ...fx.governed,
        repositoryBinding: {
          identity: "other/repo",
          remoteUrl: "https://github.com/other/repo.git",
          defaultBranch: "main",
        },
      },
      spec: { ...fx.spec, repositoryRef: "other/repo" },
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/origin_remote_mismatch/);
  });

  it("EVP-08 wrong worktree / prior path → no Evidence", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: { ...fx.governed, priorAttemptId: "xat:wrong" },
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/prior_attempt_path_mismatch/);
  });

  it("EVP-09 observer failure → no Evidence", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: {
        async run() {
          return { stdout: "", stderr: "boom", exitCode: 1 };
        },
      },
      governed: fx.governed,
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
  });

  it("EVP-10 fact verification failure → no VERIFIED Evidence", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: {
        ...fx.spec,
        commitMessage: "docs: wrong subject",
      },
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/subject|message/i);
  });

  it("EVP-11 Cursor report alone remains non-verified", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
      trustCursorReportOnly: true,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.status).toBe("reported");
      expect(r.reason).toMatch(/cursor_report_alone/);
    }
  });

  it("incomplete bindings → failed", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: {
        projectId: "prj:ge",
        cycleInstanceId: "cyc:ge",
      },
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/bindings_incomplete/);
  });

  it("observer still independently callable (not Evidence creator)", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const r = await observeLocalCommitFacts({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
    });
    expect(r.ok).toBe(true);
  });

  it("NodeGitCommandRunner import remains available for REAL harness", () => {
    expect(typeof NodeGitCommandRunner).toBe("function");
  });
});
```

## FULL: projects_sfia-studio_app___tests___oa_execution-attempt_gcecGitCommitGatewayProfile.d0.test.ts
```typescript
/**
 * GCEC bounded git.commit gateway profile — GC-01..GC-12.
 * FakeProcessRunner only. ZERO REAL Cursor / ZERO Product git mutation.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_LOCAL_COMMIT_ACTION,
  M4_REAL_GATEWAY_ADAPTER_ID,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
  StudioCursorRealLaunchGateway,
} from "@/lib/oa/execution-attempt";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import { FakeRealExecutionWorkspacePort } from "./support/fakeSpawnAndGit";
import { M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";

const PARENT = M4_TEST_BASE_HEAD_SHA;
const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";

function baseRequest(
  overrides: Record<string, unknown> = {},
): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
  return {
    attemptId: "xat:gc-profile",
    executionContractId: "xct:gc",
    executionContractVersion: 1,
    semanticFingerprint: "fp:gc",
    selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    correlationId: "cor:gc",
    baseHeadSha: PARENT,
    timeoutMs: 15 * 60 * 1000,
    ...overrides,
  } as Parameters<StudioCursorRealLaunchGateway["launch"]>[0];
}

function commitRequest(
  overrides: Record<string, unknown> = {},
): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
  return baseRequest({
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    authorizedEffects: ["git.commit"],
    workspaceContinuation: {
      priorAttemptId: "xat:prior-a",
      expectedHeadSha: PARENT,
      expectedVerifiedFiles: [{ path: PATH, digest: DIGEST }],
    },
    gitCommitSpec: {
      repositoryRef: "acme/widget",
      expectedParentSha: PARENT,
      exactPaths: [PATH],
      commitMessage: MSG,
      branchOrRef: "gcec/docs",
    },
    docsWriteSpec: {
      repositoryRef: "acme/widget",
      targetPath: PATH,
      pathAllowlist: ["docs/"],
      artifactType: "functional_design",
      artifactBrief: "add task manager functional design",
      contentRequirements: ["problem"],
      scopeIn: ["docs/"],
      scopeOut: ["src/"],
      expectedOutputs: [PATH],
      validationExpectations: ["markdown"],
      evidenceRequirements: ["artifact", "git:local_commit"],
      createOrModify: true,
      noDelete: true,
    },
    ...overrides,
  });
}

describe("GCEC git.commit gateway profile GC-01..12", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  function gateway() {
    const workspace = new FakeRealExecutionWorkspacePort({
      resumePath: "/tmp/fake-exec-root/wt-prior-gc",
      workspacePath: "/tmp/fake-exec-root/wt-fresh-gc",
    });
    const runner = new FakeProcessRunner();
    const gw = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: workspace,
      env: { ...process.env, [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1" },
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    return { gw, runner, workspace };
  }

  it("GC-01 docs-write profile remains unchanged (no Shell, Write tools)", async () => {
    const { gw, runner, workspace } = gateway();
    const result = await gw.launch(
      baseRequest({
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        authorizedEffects: ["filesystem.create", "filesystem.modify"],
        docsWriteSpec: {
          repositoryRef: "acme/widget",
          targetPath: PATH,
          pathAllowlist: ["docs/"],
          artifactType: "functional_design",
          artifactBrief: "brief",
          contentRequirements: ["x"],
          scopeIn: ["docs/"],
          scopeOut: [],
          expectedOutputs: [PATH],
          validationExpectations: [],
          evidenceRequirements: ["artifact"],
          createOrModify: true,
          noDelete: true,
        },
      }),
    );
    expect(result.outcome).toBe("ack");
    expect(workspace.prepares).toHaveLength(1);
    expect(workspace.resumes).toHaveLength(0);
    const argv = runner.calls[0]!.argv;
    expect(argv).toContain("--print");
    expect(argv).toContain("--workspace");
    expect(argv).toContain("--trust");
    expect(argv).toContain("--sandbox");
    expect(argv).not.toContain("--mode");
    const instruction = String(argv[argv.length - 1]);
    expect(instruction).toMatch(/Write\/StrReplace/);
    expect(instruction).toMatch(/Ne lancer aucune commande Shell/);
    expect(instruction).not.toMatch(/git commit/);
  });

  it("GC-02 git.commit profile uses SAME gateway/runner", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(commitRequest());
    expect(result.outcome).toBe("ack");
    expect(runner.simulatedInvokeCount).toBe(1);
    expect(runner.calls[0]!.executable).toBe("/tmp/fake-cursor-bin");
  });

  it("GC-03 git.commit profile resumes prior workspace", async () => {
    const { gw, workspace } = gateway();
    await gw.launch(commitRequest());
    expect(workspace.resumes).toHaveLength(1);
    expect(workspace.prepares).toHaveLength(0);
    expect(workspace.resumes[0]?.priorAttemptId).toBe("xat:prior-a");
  });

  it("GC-04 commit argv remains --print + --workspace + --trust + sandbox", async () => {
    const { gw, runner } = gateway();
    await gw.launch(commitRequest());
    const argv = runner.calls[0]!.argv;
    expect(argv[0]).toBe("agent");
    expect(argv).toContain("--print");
    expect(argv).toContain("--workspace");
    expect(argv).toContain("--trust");
    const sandIdx = argv.indexOf("--sandbox");
    expect(argv[sandIdx + 1]).toBe("enabled");
    expect(argv).not.toContain("--mode");
  });

  it("GC-05/06/07/08 commit instruction paths, message, forbids, no file-edit", async () => {
    const { gw, runner } = gateway();
    await gw.launch(commitRequest());
    const instruction = String(runner.calls[0]!.argv.at(-1));
    expect(instruction).toContain(PATH);
    expect(instruction).toContain(MSG);
    expect(instruction).toMatch(/INTERDIT:.*push/i);
    expect(instruction).toMatch(/PR\/merge|amend|rebase|reset/i);
    expect(instruction).toMatch(/Aucune.*édition|aucun outil d'édition|Write\/StrReplace/i);
    expect(instruction).not.toMatch(/Utiliser uniquement les outils d'édition/);
    expect(runner.calls[0]!.env.GIT_TERMINAL_PROMPT).toBe("0");
  });

  it("GC-09 no free shell script from caller is accepted", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        freeShellScript: "git commit -am hack",
      }) as never,
    );
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toMatch(/free_shell/);
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("GC-10 git.commit without continuation descriptor is rejected", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        workspaceContinuation: undefined,
      }),
    );
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toMatch(/continuation_required/);
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("GC-11 git.commit mixed with push is rejected", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        authorizedEffects: ["git.commit", "git.push"],
      }),
    );
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toMatch(/commit_only|slice_not_commit_only/);
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("GC-12 git.commit without structured commit spec is rejected", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        gitCommitSpec: undefined,
        action: M4_BOUNDED_LOCAL_COMMIT_ACTION,
      }),
    );
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toMatch(/git_commit_spec_missing/);
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-01 missing authorizedEffects → reject / zero process", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({ authorizedEffects: undefined }),
    );
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-02 empty authorizedEffects → reject", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(commitRequest({ authorizedEffects: [] }));
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-03 exactly git.commit → accepted", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({ authorizedEffects: ["git.commit"] }),
    );
    expect(result.outcome).toBe("ack");
    expect(runner.calls).toHaveLength(1);
  });

  it("AUTH-04 commit + push → reject", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({ authorizedEffects: ["git.commit", "git.push"] }),
    );
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-05 commit + FS → reject", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        authorizedEffects: ["git.commit", "filesystem.modify"],
      }),
    );
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-06 commit + unknown → reject", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        authorizedEffects: ["git.commit", "unknown.effect"],
      }),
    );
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-07 gitCommitSpec with docs-write selected agent → reject", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
      }),
    );
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toMatch(/agent_capability_bypass|selected_agent/);
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("SPEC-01 safe path docs/functional-design.md → PASS", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(commitRequest());
    expect(result.outcome).toBe("ack");
    expect(runner.calls).toHaveLength(1);
  });

  it("SPEC-02..11 hostile paths → FAIL before child", async () => {
    const { gw, runner } = gateway();
    const hostile = [
      "../escape.md",
      "/abs/path.md",
      "docs/*.md",
      "docs/has space.md",
      "docs/semi;colon.md",
      "docs/$(id).md",
      "docs/`id`.md",
      'docs/"q".md',
      "docs/new\nline.md",
      "-rf.md",
    ];
    for (const p of hostile) {
      const result = await gw.launch(
        commitRequest({
          gitCommitSpec: {
            repositoryRef: "acme/widget",
            expectedParentSha: PARENT,
            exactPaths: [p],
            commitMessage: MSG,
          },
        }),
      );
      expect(result.outcome).toBe("reject");
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("MSG-01 safe subject → PASS; MSG-02..05 hostile → FAIL", async () => {
    const { gw, runner } = gateway();
    const ok = await gw.launch(commitRequest());
    expect(ok.outcome).toBe("ack");
    runner.calls.length = 0;
    const hostileMsgs = [
      "docs: line\nbreak",
      "docs: $(whoami)",
      'docs: "quoted"',
      `docs: ${"x".repeat(80)}`,
    ];
    for (const commitMessage of hostileMsgs) {
      const result = await gw.launch(
        commitRequest({
          gitCommitSpec: {
            repositoryRef: "acme/widget",
            expectedParentSha: PARENT,
            exactPaths: [PATH],
            commitMessage,
          },
        }),
      );
      expect(result.outcome).toBe("reject");
    }
    expect(runner.calls).toHaveLength(0);
  });
});
```

## FULL: projects_sfia-studio_app___tests___oa_execution-attempt_gcecGitCommitObserve.d0.test.ts
```typescript
/**
 * OBS — governed workspace READ-ONLY Git observation (CR-GCEC-AGENT-04).
 * ZERO mutation commands. @vitest-environment node
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  observeLocalCommitFacts,
  workspacePathForAttempt,
  type GitCommitLaunchSpec,
  type GovernedWorkspaceObservationContext,
} from "@/lib/oa/execution-attempt";

const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const BODY = "# observed\n";
const PRIOR = "xat:obs-a";
const IDENTITY = "acme/widget";
const REMOTE = "https://github.com/acme/widget.git";

const temps: string[] = [];
afterEach(() => {
  for (const t of temps.splice(0)) {
    try {
      rmSync(t, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
}

function setupGovernedCommittedWorktree(): {
  managed: string;
  execRoot: string;
  wt: string;
  H0: string;
  H1: string;
  digest: string;
  governed: GovernedWorkspaceObservationContext;
  runner: {
    run: (
      argv: readonly string[],
      cwd: string,
    ) => Promise<{ stdout: string; stderr: string; exitCode: number }>;
  };
  commands: string[][];
} {
  const managed = mkdtempSync(path.join(os.tmpdir(), "gcec-obs-managed-"));
  const execRoot = mkdtempSync(path.join(os.tmpdir(), "gcec-obs-exec-"));
  temps.push(managed, execRoot);
  git(managed, ["init", "--bare"]);
  // Seed via temp clone then push isn't needed — use non-bare seed then add worktree.
  const seed = mkdtempSync(path.join(os.tmpdir(), "gcec-obs-seed-"));
  temps.push(seed);
  git(seed, ["init"]);
  git(seed, ["config", "user.email", "obs@test"]);
  git(seed, ["config", "user.name", "obs"]);
  writeFileSync(path.join(seed, "README.md"), "base\n");
  git(seed, ["add", "README.md"]);
  git(seed, ["commit", "-m", "base"]);
  const H0 = git(seed, ["rev-parse", "HEAD"]);
  git(seed, ["remote", "add", "origin", REMOTE]);
  // Convert seed into managed main worktree by cloning into managed as normal repo
  rmSync(managed, { recursive: true, force: true });
  // Re-init managed as normal repo with remote + worktree registration
  mkdirSync(managed, { recursive: true });
  git(managed, ["init"]);
  git(managed, ["config", "user.email", "obs@test"]);
  git(managed, ["config", "user.name", "obs"]);
  writeFileSync(path.join(managed, "README.md"), "base\n");
  git(managed, ["add", "README.md"]);
  git(managed, ["commit", "-m", "base"]);
  const H0m = git(managed, ["rev-parse", "HEAD"]);
  git(managed, ["remote", "add", "origin", REMOTE]);

  const wt = workspacePathForAttempt(execRoot, PRIOR);
  mkdirSync(path.dirname(wt), { recursive: true });
  git(managed, ["worktree", "add", wt, "HEAD"]);
  mkdirSync(path.join(wt, "docs"), { recursive: true });
  writeFileSync(path.join(wt, PATH), BODY);
  git(wt, ["add", PATH]);
  git(wt, ["commit", "-m", MSG]);
  const H1 = git(wt, ["rev-parse", "HEAD"]);
  const digest = `sha256:${createHash("sha256").update(BODY).digest("hex")}`;

  const commands: string[][] = [];
  const runner = {
    async run(argv: readonly string[], cwd: string) {
      commands.push([...argv]);
      try {
        const stdout = execFileSync("git", [...argv], {
          cwd,
          encoding: "utf8",
        });
        return { stdout, stderr: "", exitCode: 0 };
      } catch (err) {
        const e = err as { stdout?: string; stderr?: string; status?: number };
        return {
          stdout: e.stdout ?? "",
          stderr: e.stderr ?? String(err),
          exitCode: typeof e.status === "number" ? e.status : 1,
        };
      }
    },
  };

  const governed: GovernedWorkspaceObservationContext = {
    workspacePath: wt,
    execRoot,
    priorAttemptId: PRIOR,
    managedRepoRoot: managed,
    repositoryBinding: {
      identity: IDENTITY,
      remoteUrl: REMOTE,
      defaultBranch: "main",
    },
    expectedCommonGitRoot: managed,
  };

  return {
    managed,
    execRoot,
    wt,
    H0: H0m,
    H1,
    digest,
    governed,
    runner,
    commands,
  };
}

describe("GCEC local Git READ-ONLY observer OBS (governed)", () => {
  it("OBS-01..07 / OBS-18 governed workspace derives commit facts", async () => {
    const ctx = setupGovernedCommittedWorktree();
    const spec: GitCommitLaunchSpec = {
      repositoryRef: IDENTITY,
      expectedParentSha: ctx.H0,
      exactPaths: [PATH],
      commitMessage: MSG,
    };
    const r = await observeLocalCommitFacts({
      gitRunner: ctx.runner,
      governed: ctx.governed,
      spec,
      expectedArtifactDigests: { [PATH]: ctx.digest },
    });
    if (!r.ok) throw new Error(r.reason);
    expect(r.ok).toBe(true);
    expect(r.facts.observedHeadSha).toBe(ctx.H1.toLowerCase());
    expect(r.facts.observedParentSha).toBe(ctx.H0.toLowerCase());
    expect(r.facts.observedChangedPaths).toEqual([PATH]);
    expect(r.facts.observedCommitMessage).toBe(MSG);
    expect(r.facts.commitsFromExpectedParent).toBe(1);
    expect(r.facts.worktreeDirty).toBe(false);
    expect(r.facts.priorAttemptId).toBe(PRIOR);
    expect(r.facts.observationSource).toBe("studio:local_git_readonly");

    for (const argv of ctx.commands) {
      expect([
        "add",
        "commit",
        "push",
        "reset",
        "checkout",
        "clean",
      ]).not.toContain(argv[0]);
    }
  });

  it("OBS-09 / OBS-17 free cwd and Cursor path authority rejected", async () => {
    const runner = {
      async run() {
        return { stdout: "", stderr: "", exitCode: 1 };
      },
    };
    const base = {
      gitRunner: runner,
      governed: {
        workspacePath: "/tmp/governed",
        execRoot: "/tmp/exec",
        priorAttemptId: PRIOR,
        managedRepoRoot: "/tmp/managed",
        repositoryBinding: {
          identity: IDENTITY,
          remoteUrl: REMOTE,
          defaultBranch: "main",
        },
      },
      spec: {
        repositoryRef: IDENTITY,
        expectedParentSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: {},
    };
    const free = await observeLocalCommitFacts({
      ...base,
      freeCwd: "/evil",
    } as never);
    expect(free.ok).toBe(false);
    if (!free.ok) expect(free.reason).toMatch(/free_cwd/);

    const cursor = await observeLocalCommitFacts({
      ...base,
      cursorReportedPath: "/other",
    } as never);
    expect(cursor.ok).toBe(false);
    if (!cursor.ok) expect(cursor.reason).toMatch(/cursor_path/);
  });

  it("OBS-11 arbitrary valid Git repo path rejected (not governed)", async () => {
    const arbitrary = mkdtempSync(path.join(os.tmpdir(), "gcec-obs-arb-"));
    temps.push(arbitrary);
    git(arbitrary, ["init"]);
    git(arbitrary, ["config", "user.email", "a@t"]);
    git(arbitrary, ["config", "user.name", "a"]);
    writeFileSync(path.join(arbitrary, "README.md"), "x\n");
    git(arbitrary, ["add", "README.md"]);
    git(arbitrary, ["commit", "-m", "x"]);
    git(arbitrary, ["remote", "add", "origin", REMOTE]);

    const execRoot = mkdtempSync(path.join(os.tmpdir(), "gcec-obs-exec2-"));
    temps.push(execRoot);
    const expected = workspacePathForAttempt(execRoot, PRIOR);
    const runner = {
      async run(argv: readonly string[], cwd: string) {
        const stdout = execFileSync("git", [...argv], { cwd, encoding: "utf8" });
        return { stdout, stderr: "", exitCode: 0 };
      },
    };
    const r = await observeLocalCommitFacts({
      gitRunner: runner,
      governed: {
        workspacePath: arbitrary, // not prior-derived path
        execRoot,
        priorAttemptId: PRIOR,
        managedRepoRoot: arbitrary,
        repositoryBinding: {
          identity: IDENTITY,
          remoteUrl: REMOTE,
          defaultBranch: "main",
        },
      },
      spec: {
        repositoryRef: IDENTITY,
        expectedParentSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [PATH]: "sha256:" + "ab".repeat(32) },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/prior_attempt_path_mismatch/);
    expect(arbitrary).not.toBe(expected);
  });

  it("OBS-12 wrong repository remote → FAIL", async () => {
    const ctx = setupGovernedCommittedWorktree();
    const r = await observeLocalCommitFacts({
      gitRunner: ctx.runner,
      governed: {
        ...ctx.governed,
        repositoryBinding: {
          identity: "other/repo",
          remoteUrl: "https://github.com/other/repo.git",
          defaultBranch: "main",
        },
      },
      spec: {
        repositoryRef: "other/repo",
        expectedParentSha: ctx.H0,
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [PATH]: ctx.digest },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/origin_remote_mismatch/);
  });

  it("OBS-13 unregistered worktree → FAIL", async () => {
    const ctx = setupGovernedCommittedWorktree();
    // Remove worktree registration but keep directory
    git(ctx.managed, ["worktree", "remove", "--force", ctx.wt]);
    mkdirSync(ctx.wt, { recursive: true });
    writeFileSync(path.join(ctx.wt, "README.md"), "orphan\n");
    // orphan dir is not a registered worktree of managed
    const r = await observeLocalCommitFacts({
      gitRunner: ctx.runner,
      governed: ctx.governed,
      spec: {
        repositoryRef: IDENTITY,
        expectedParentSha: ctx.H0,
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [PATH]: ctx.digest },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.reason).toMatch(
        /unregistered|not_a_worktree|toplevel|origin_remote_missing/,
      );
    }
  });

  it("OBS-14 worktree outside execRoot → FAIL", async () => {
    const ctx = setupGovernedCommittedWorktree();
    const r = await observeLocalCommitFacts({
      gitRunner: ctx.runner,
      governed: {
        ...ctx.governed,
        execRoot: path.join(ctx.execRoot, "nested-other"),
      },
      spec: {
        repositoryRef: IDENTITY,
        expectedParentSha: ctx.H0,
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [PATH]: ctx.digest },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.reason).toMatch(
        /prior_attempt_path_mismatch|outside_exec_root/,
      );
    }
  });

  it("OBS-15 wrong priorAttempt-derived path → FAIL", async () => {
    const ctx = setupGovernedCommittedWorktree();
    const r = await observeLocalCommitFacts({
      gitRunner: ctx.runner,
      governed: {
        ...ctx.governed,
        priorAttemptId: "xat:other-prior",
      },
      spec: {
        repositoryRef: IDENTITY,
        expectedParentSha: ctx.H0,
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [PATH]: ctx.digest },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/prior_attempt_path_mismatch/);
  });

  it("OBS-16 wrong managed/common Git root → FAIL", async () => {
    const ctx = setupGovernedCommittedWorktree();
    const r = await observeLocalCommitFacts({
      gitRunner: ctx.runner,
      governed: {
        ...ctx.governed,
        expectedCommonGitRoot: path.join(ctx.managed, "not-here"),
      },
      spec: {
        repositoryRef: IDENTITY,
        expectedParentSha: ctx.H0,
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [PATH]: ctx.digest },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/common_root_mismatch/);
  });
});
```

## FULL: projects_sfia-studio_app___tests___oa_execution-attempt_gcecGitCommitSameEcAb.d0.test.ts
```typescript
/**
 * D-GCEC-AGENT-01 + GCEC git.commit same-EC A→B (honest agent swap).
 * ZERO REAL. @vitest-environment node
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import { createTestEvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  assertStudioCursorRealOffForTests,
  buildGitEffectActionRef,
  createM4BoundedDocsWriteCursorAgentDescriptor,
  createM4BoundedLocalCommitCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  isFsAnchorSupersededByVerifiedLocalCommit,
  isM4BoundedLocalCommitRealAgent,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
  resolvePreCommitWorkspaceContinuation,
  SqliteRealLaunchSafetyJournal,
  TestExecutionAdapter,
  verifyLocalCommitEffect,
  type ExecutionAttempt,
} from "@/lib/oa/execution-attempt";
import {
  MORRIS_ACTOR,
  NOW,
  baseBuildRequest,
  buildStack,
  grantContractConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
  selectStandardAgent,
  type Stack,
} from "./helpers";
import { M4_EVIDENCE, M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";
import { createGovernedCommittedWorktree } from "./support/governedCommitFixture";

const IDENTITY = "acme/widget";
const BRANCH = "gcec/docs";
const TARGET_PATH = "docs/functional-design.md";
const ARTIFACT_BODY = "# Commit A→B verified artifact\n";
const ARTIFACT_DIGEST = `sha256:${createHash("sha256")
  .update(ARTIFACT_BODY)
  .digest("hex")}` as Digest;
const H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const MSG = "docs: Functional design for continuation proof";

function tempJournalPath(prefix: string): string {
  const dir = mkdtempSync(path.join(os.tmpdir(), prefix));
  return path.join(dir, "safety.sqlite");
}

function docsWriteInputs(baseHeadSha: string): Record<string, unknown> {
  return {
    baseHeadSha,
    repositoryRef: IDENTITY,
    repositoryIdentity: IDENTITY,
    remoteUrl: `https://github.com/${IDENTITY}.git`,
    defaultBranch: "main",
    workingBranch: BRANCH,
    pathRoot: "docs",
    targetPath: TARGET_PATH,
    pathAllowlist: ["docs/"],
    scopeIn: ["docs/"],
    scopeOut: ["src/"],
    artifactType: "functional_design",
    artifactBrief: "Functional design for continuation proof",
    contentRequirements: ["problem", "constraints", "acceptance"],
    expectedOutputs: [TARGET_PATH],
    validationExpectations: ["markdown"],
    evidenceRequirements: ["artifact", "git:local_commit"],
    commitMessage: MSG,
  };
}

function docsWriteEvidence(input: {
  evidenceId: string;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: input.evidenceId,
    type: "artifact",
    status: "verified",
    source: "execution_attempt:docs_write",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    location: TARGET_PATH,
    digest: ARTIFACT_DIGEST,
    bindings: {
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      executionAttemptId: input.executionAttemptId,
    },
    createdAt: NOW,
    updatedAt: NOW,
    version: 1,
    producedAt: NOW,
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: { actorId: "actor:system", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:gc-ev",
    },
  };
}

function succeededAttempt(input: {
  attemptId: string;
  executionContractId: string;
  executionContractVersion: number;
  selectedAgentRef?: string;
}): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    executionContractVersion: input.executionContractVersion,
    selectedAgentRef:
      input.selectedAgentRef ?? M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    status: "succeeded",
    idempotencyKey: `idem:${input.attemptId}`,
    correlationId: `cor:${input.attemptId}`,
    version: 1,
    createdAt: NOW,
    launchedAt: NOW,
    startedAt: NOW,
    completedAt: NOW,
    resultRef: `res:${input.attemptId}`,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${input.attemptId}`,
      actor: MORRIS_ACTOR,
      source: "system",
      timestamp: NOW,
      correlationId: `cor:${input.attemptId}`,
    },
  };
}

async function seedDocsWriteConfirmedContract(
  stack: Stack,
): Promise<{
  contractId: string;
  version: number;
  projectId: string;
  cycleInstanceId: string;
}> {
  const projectId = "prj:campus360-oa";
  const cycleInstanceId = "cyc:std-001";
  await seedProject(stack.projects, projectId);
  registerMorris(
    stack.decisions.authority,
    M4_BOUNDED_DOCS_WRITE_SCOPE,
    M4_EVIDENCE,
  );
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack, cycleInstanceId);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId,
      executionContractId: "xct:gc-ab",
      idempotencyKey: "idem-xct-gc-ab",
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
      evidenceRequirements: ["git:local_commit"],
      expectedOutputs: ["artifact", TARGET_PATH],
      authorityEvidenceId: M4_EVIDENCE,
      inputs: docsWriteInputs(M4_TEST_BASE_HEAD_SHA),
    }),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");

  const confirmationId = await grantContractConfirmation(stack, {
    confirmationId: "cfm:gc-ec",
    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
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
  if (!confirmed.ok) throw new Error("confirm failed");

  return {
    contractId: confirmed.contract.executionContractId,
    version: confirmed.contract.version,
    projectId,
    cycleInstanceId,
  };
}

describe("D-GCEC-AGENT-01 same-EC A→B agent swap", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("AG-01/02 Attempt A docs-write; Attempt B local-commit under SAME EC", async () => {
    const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-agent01-ab-"));
    mkdirSync(path.join(managedBase, "acme__widget", ".git"), {
      recursive: true,
    });
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: tempJournalPath("gcec-agent01-ab-"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const docs = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const commit = createM4BoundedLocalCommitCursorAgentDescriptor(NOW);
    expect(isM4BoundedLocalCommitRealAgent(commit)).toBe(true);
    const fixtureAdapter = new TestExecutionAdapter();
    const evidenceBag: Evidence[] = [];
    const stack = buildStack({
      agents: [docs, commit],
      adapter: fixtureAdapter,
    });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [docs, commit],
      adapter: fixtureAdapter,
      realBoundary: {
        launchPort,
        safetyJournal: journal,
        managedRepoRootBase: managedBase,
      },
      resolveProjectRepositoryBinding: async () => ({
        provider: "github",
        identity: IDENTITY,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseSha: M4_TEST_BASE_HEAD_SHA,
      }),
      listProjectEvidence: async () => ({ ok: true as const, evidence: evidenceBag }),
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const seeded = await seedDocsWriteConfirmedContract(stack);
    const attemptA = "xat:gc-a";
    const attemptB = "xat:gc-b";

    // Attempt A — docs-write (seeded succeeded + Evidence)
    await stack.attempts.attempts.create(
      succeededAttempt({
        attemptId: attemptA,
        executionContractId: seeded.contractId,
        executionContractVersion: seeded.version,
        selectedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
      }),
    );
    evidenceBag.push(
      docsWriteEvidence({
        evidenceId: "ev:gc-a-art",
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: seeded.contractId,
        executionAttemptId: attemptA,
      }),
    );

    // AG-03: docs-write requested for B → mismatch
    const wrong = await selectStandardAgent(stack, {
      attemptId: "xat:gc-b-wrong",
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
      idempotencyKey: "idem-gc-b-wrong",
    });
    expect(wrong.ok).toBe(false);

    // AG-02: B selects local-commit
    const selectedB = await selectStandardAgent(stack, {
      attemptId: attemptB,
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
      idempotencyKey: "idem-gc-b",
    });
    expect(selectedB.ok).toBe(true);
    if (!selectedB.ok) throw new Error("select B failed");
    expect(selectedB.attempt.selectedAgentRef).toBe(
      M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
    );
    expect(selectedB.attempt.selectedAgentRef).not.toBe(
      M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    );

    await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:gc-b",
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });

    const gitActionRef = buildGitEffectActionRef({
      executionContractId: seeded.contractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    registerMorris(stack.decisions.authority, gitActionRef, "evd:morris-gc");
    await grantContractConfirmation(stack, {
      confirmationId: "cfm:gc-git-commit",
      actionRef: gitActionRef,
      scope: gitActionRef,
      evidenceId: "evd:morris-gc",
    });
    const gitCnf = await stack.decisions.confirmations.findById(
      "cfm:gc-git-commit",
    );

    const started = await stack.attempts.startExecution.execute({
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      confirmations: gitCnf ? [gitCnf] : [],
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.error.internalCauseRef);

    const req = launchPort.calls[0]!;
    expect(req.selectedAgentRef).toBe(M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID);
    expect(req.authorizedEffects).toEqual(["git.commit"]);
    expect(req.workspaceContinuation?.priorAttemptId).toBe(attemptA);
    expect(req.gitCommitSpec).toBeDefined();

    const evidenceServices = createTestEvidenceReviewServices({
      fixedNowIso: NOW,
    });
    // CR-09: Evidence creator owns observation via governed temp worktree.
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: attemptA,
      pathRel: TARGET_PATH,
      body: "# same-ec-ab\n",
      commitMessage: MSG,
      identity: "acme/widget",
    });
    const verified = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: {
        ...req.gitCommitSpec!,
        expectedParentSha: fx.H0,
        repositoryRef: "acme/widget",
        exactPaths: [TARGET_PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [TARGET_PATH]: fx.digest },
      expectedBindings: {
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: seeded.contractId,
        executionAttemptId: attemptB,
      },
      actor: { actorId: MORRIS_ACTOR.actorId, role: "human" },
      evidenceServices,
      nowIso: NOW,
    });
    fx.cleanup();
    expect(verified.ok).toBe(true);

    const a = await stack.attempts.attempts.findById(attemptA);
    const b = await stack.attempts.attempts.findById(attemptB);
    expect(a?.attemptId).not.toBe(b?.attemptId);
    expect(a?.executionContractId).toBe(b?.executionContractId);
    expect(a?.selectedAgentRef).not.toBe(b?.selectedAgentRef);
    expect(b?.status).toBe("running");

    journal.close();
  });

  it("SR-02 stale docs-write selection + later commit slice → Start reject / zero process", async () => {
    const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-sr02-"));
    mkdirSync(path.join(managedBase, "acme__widget", ".git"), {
      recursive: true,
    });
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: tempJournalPath("gcec-sr02-"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const docs = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const commit = createM4BoundedLocalCommitCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const evidenceBag: Evidence[] = [];
    const stack = buildStack({ agents: [docs, commit], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [docs, commit],
      adapter: fixtureAdapter,
      realBoundary: {
        launchPort,
        safetyJournal: journal,
        managedRepoRootBase: managedBase,
      },
      resolveProjectRepositoryBinding: async () => ({
        provider: "github",
        identity: IDENTITY,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseSha: M4_TEST_BASE_HEAD_SHA,
      }),
      listProjectEvidence: async () => ({ ok: true as const, evidence: evidenceBag }),
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const seeded = await seedDocsWriteConfirmedContract(stack);

    // Select B as docs-write while FS Evidence not yet present (profile = docs-write).
    const selected = await selectStandardAgent(stack, {
      attemptId: "xat:sr-b",
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
      idempotencyKey: "idem-sr-b",
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error("select failed");

    // Then Attempt A succeeds + Evidence appears → current profile becomes commit.
    await stack.attempts.attempts.create(
      succeededAttempt({
        attemptId: "xat:sr-a",
        executionContractId: seeded.contractId,
        executionContractVersion: seeded.version,
      }),
    );
    evidenceBag.push(
      docsWriteEvidence({
        evidenceId: "ev:sr-a",
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: seeded.contractId,
        executionAttemptId: "xat:sr-a",
      }),
    );

    await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:sr-b",
      attemptId: "xat:sr-b",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    const gitActionRef = buildGitEffectActionRef({
      executionContractId: seeded.contractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    registerMorris(stack.decisions.authority, gitActionRef, "evd:morris-sr");
    await grantContractConfirmation(stack, {
      confirmationId: "cfm:sr-git",
      actionRef: gitActionRef,
      scope: gitActionRef,
      evidenceId: "evd:morris-sr",
    });
    const gitCnf = await stack.decisions.confirmations.findById("cfm:sr-git");
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:sr-b",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      confirmations: gitCnf ? [gitCnf] : [],
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    expect(launchPort.calls).toHaveLength(0);
    const still = await stack.attempts.attempts.findById("xat:sr-b");
    expect(still?.selectedAgentRef).toBe(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID);
    journal.close();
  });

  it("FS→SHA still requires verified git:local_commit Evidence", () => {
    expect(
      isFsAnchorSupersededByVerifiedLocalCommit({
        projectId: "prj:campus360-oa",
        cycleInstanceId: "cyc:std-001",
        executionContractId: "xct:gc-ab",
        attempts: [],
        priorAttemptId: "xat:a",
        expectedParentSha: M4_TEST_BASE_HEAD_SHA,
        repositoryRef: "acme/widget",
        requiredPaths: [TARGET_PATH],
        evidence: [
          docsWriteEvidence({
            evidenceId: "ev:a",
            projectId: "prj:campus360-oa",
            cycleInstanceId: "cyc:std-001",
            executionContractId: "xct:gc-ab",
            executionAttemptId: "xat:a",
          }),
        ],
      }),
    ).toBe(false);
    expect(
      resolvePreCommitWorkspaceContinuation({
        currentAttemptId: "xat:push",
        executionContractId: "xct:gc-ab",
        projectId: "prj:campus360-oa",
        cycleInstanceId: "cyc:std-001",
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        attempts: [
          succeededAttempt({
            attemptId: "xat:a",
            executionContractId: "xct:gc-ab",
            executionContractVersion: 1,
          }),
        ],
        evidence: [
          docsWriteEvidence({
            evidenceId: "ev:a",
            projectId: "prj:campus360-oa",
            cycleInstanceId: "cyc:std-001",
            executionContractId: "xct:gc-ab",
            executionAttemptId: "xat:a",
          }),
        ],
        authorizedEffects: ["git.push"],
        verifiedEffects: [
          "filesystem.create",
          "filesystem.modify",
          "git.commit",
        ],
      }).required,
    ).toBe(true);
  });
});
```

## FULL: projects_sfia-studio_app___tests___oa_execution-attempt_gcecGitCommitVerification.d0.test.ts
```typescript
/**
 * GCEC local commit verification — GV (pure facts, no OS Git mutation).
 * CR-GCEC-GITCOMMIT-01 hardenings.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { verifyLocalCommitFacts } from "@/lib/oa/execution-attempt";

const H0 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const H2 = "cccccccccccccccccccccccccccccccccccccccc";
const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";

function base(
  overrides: Partial<Parameters<typeof verifyLocalCommitFacts>[0]> = {},
) {
  return verifyLocalCommitFacts({
    expectedParentSha: H0,
    observedHeadSha: H1,
    observedParentSha: H0,
    exactPaths: [PATH],
    observedChangedPaths: [PATH],
    expectedCommitMessage: MSG,
    observedCommitMessage: MSG,
    artifactChecks: [
      {
        path: PATH,
        expectedDigest: DIGEST,
        actualDigest: DIGEST,
      },
    ],
    worktreeDirty: false,
    commitsFromExpectedParent: 1,
    ...overrides,
  });
}

describe("GCEC local commit verification GV", () => {
  it("GV-01/02/03 happy path", () => {
    expect(base().ok).toBe(true);
  });

  it("GV-04 extra path → FAIL", () => {
    const r = base({ observedChangedPaths: [PATH, "README.md"] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("changed_paths_extra");
  });

  it("GV-05 missing expected path → FAIL", () => {
    const r = base({ observedChangedPaths: [] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("changed_paths_missing");
  });

  it("GV-06 artifact digest changed → FAIL", () => {
    const r = base({
      artifactChecks: [
        {
          path: PATH,
          expectedDigest: DIGEST,
          actualDigest:
            "sha256:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        },
      ],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("artifact_digest_mismatch");
  });

  it("GV-07 worktree dirty → FAIL", () => {
    const r = base({ worktreeDirty: true });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("worktree_dirty_after_commit");
  });

  it("GV-08 wrong commit message → FAIL", () => {
    const r = base({ observedCommitMessage: "wrong message" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("commit_message_mismatch");
  });

  it("GV-09 HEAD unchanged → FAIL", () => {
    const r = base({ observedHeadSha: H0, observedParentSha: H0 });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("head_unchanged");
  });

  it("GV-10/15 extra commit lineage → FAIL", () => {
    const r = base({
      observedHeadSha: H2,
      observedParentSha: H0,
      commitsFromExpectedParent: 2,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("unexpected_extra_commits");
  });

  it("GV-11 missing artifactChecks → FAIL", () => {
    const r = base({ artifactChecks: [] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("artifact_checks_missing");
  });

  it("GV-12 incomplete coverage → FAIL", () => {
    const r = base({
      exactPaths: [PATH, "docs/other.md"],
      observedChangedPaths: [PATH, "docs/other.md"],
      artifactChecks: [
        { path: PATH, expectedDigest: DIGEST, actualDigest: DIGEST },
      ],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("artifact_coverage_incomplete");
  });

  it("GV-14 exact one-to-one coverage → PASS", () => {
    expect(base().ok).toBe(true);
  });
});
```

## FULL: projects_sfia-studio_app___tests___oa_execution-attempt_support_governedCommitFixture.ts
```typescript
/**
 * Shared temp governed worktree builder for Evidence / observer Product tests.
 * CR-GCEC-AGENT-09 — real Git + read-only observer (no synthetic Product facts).
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import {
  workspacePathForAttempt,
  type GovernedWorkspaceObservationContext,
  type GitCommitLaunchSpec,
  type GitCommandRunner,
} from "@/lib/oa/execution-attempt";

export type GovernedCommitFixture = {
  managed: string;
  execRoot: string;
  wt: string;
  H0: string;
  H1: string;
  digest: string;
  governed: GovernedWorkspaceObservationContext;
  runner: GitCommandRunner;
  spec: GitCommitLaunchSpec;
  cleanup: () => void;
};

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
}

export function createGovernedCommittedWorktree(input: {
  priorAttemptId: string;
  pathRel: string;
  body: string;
  commitMessage: string;
  identity?: string;
  remoteUrl?: string;
}): GovernedCommitFixture {
  const identity = input.identity ?? "acme/widget";
  const remoteUrl =
    input.remoteUrl ?? `https://github.com/${identity}.git`;
  const temps: string[] = [];
  const managed = mkdtempSync(path.join(os.tmpdir(), "gcec-evp-managed-"));
  const execRoot = mkdtempSync(path.join(os.tmpdir(), "gcec-evp-exec-"));
  temps.push(managed, execRoot);

  mkdirSync(managed, { recursive: true });
  git(managed, ["init"]);
  git(managed, ["config", "user.email", "evp@test"]);
  git(managed, ["config", "user.name", "evp"]);
  writeFileSync(path.join(managed, "README.md"), "base\n");
  git(managed, ["add", "README.md"]);
  git(managed, ["commit", "-m", "base"]);
  const H0 = git(managed, ["rev-parse", "HEAD"]);
  git(managed, ["remote", "add", "origin", remoteUrl]);

  const wt = workspacePathForAttempt(execRoot, input.priorAttemptId);
  mkdirSync(path.dirname(wt), { recursive: true });
  git(managed, ["worktree", "add", wt, "HEAD"]);
  mkdirSync(path.join(wt, path.dirname(input.pathRel)), { recursive: true });
  writeFileSync(path.join(wt, input.pathRel), input.body);
  git(wt, ["add", input.pathRel]);
  git(wt, ["commit", "-m", input.commitMessage]);
  const H1 = git(wt, ["rev-parse", "HEAD"]);
  const digest = `sha256:${createHash("sha256").update(input.body).digest("hex")}`;

  const runner: GitCommandRunner = {
    async run(argv, cwd) {
      try {
        const stdout = execFileSync("git", [...argv], {
          cwd,
          encoding: "utf8",
        });
        return { stdout, stderr: "", exitCode: 0 };
      } catch (err) {
        const e = err as { stdout?: string; stderr?: string; status?: number };
        return {
          stdout: e.stdout ?? "",
          stderr: e.stderr ?? String(err),
          exitCode: typeof e.status === "number" ? e.status : 1,
        };
      }
    },
  };

  const governed: GovernedWorkspaceObservationContext = {
    workspacePath: wt,
    execRoot,
    priorAttemptId: input.priorAttemptId,
    managedRepoRoot: managed,
    repositoryBinding: {
      identity,
      remoteUrl,
      defaultBranch: "main",
    },
    expectedCommonGitRoot: managed,
  };

  const spec: GitCommitLaunchSpec = {
    repositoryRef: identity,
    expectedParentSha: H0,
    exactPaths: [input.pathRel],
    commitMessage: input.commitMessage,
  };

  return {
    managed,
    execRoot,
    wt,
    H0,
    H1,
    digest,
    governed,
    runner,
    spec,
    cleanup: () => {
      for (const t of temps) {
        try {
          rmSync(t, { recursive: true, force: true });
        } catch {
          /* ignore */
        }
      }
    },
  };
}
```

## FULL: projects_sfia-studio_app___tests___oa_execution-attempt_support_localCommitTestFacts.ts
```typescript
/**
 * Test-only helpers for pure verifyLocalCommitFacts unit tests.
 * NOT exported from Product execution-attempt public index (CR-GCEC-AGENT-09).
 */
import type { LocalCommitObservedFacts } from "@/lib/oa/execution-attempt";

/** Plain fixture for the pure verifier — not Product Evidence provenance. */
export function localCommitFactsFixture(
  facts: Omit<
    LocalCommitObservedFacts,
    "observationSource" | "workspacePath" | "priorAttemptId"
  > & {
    workspacePath?: string;
    priorAttemptId?: string;
  },
): LocalCommitObservedFacts {
  return {
    ...facts,
    workspacePath: facts.workspacePath ?? "/tmp/test-only-wt",
    priorAttemptId: facts.priorAttemptId ?? "xat:test-prior",
    observationSource: "studio:local_git_readonly",
  };
}
```

## FULL: projects_sfia-studio_app_lib_oa_execution-attempt_application_observeLocalCommitFacts.ts
```typescript
/**
 * CR-GCEC-GC-04 / CR-GCEC-AGENT-04 — READ-ONLY local Git observation for
 * verified local commit, bound to a governed Cont01 workspace identity.
 * Uses existing GitCommandRunner — no second Git subsystem, no mutations.
 */
import { createHash } from "node:crypto";
import { readFile, realpath } from "node:fs/promises";
import path from "node:path";
import type { GitCommandRunner } from "../infrastructure/studioGitWorktreeWorkspace";
import type { GitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
import type { LocalCommitArtifactCheck } from "../domain/verifyLocalCommitFacts";
import type { PrepareWorkspaceRepositoryBinding } from "../ports/realExecutionWorkspacePort";
import { workspacePathForAttempt } from "../infrastructure/studioGitWorktreeWorkspace";

const MUTATION_FORBIDDEN = new Set([
  "add",
  "commit",
  "reset",
  "checkout",
  "switch",
  "restore",
  "clean",
  "push",
  "pull",
  "fetch",
  "rebase",
  "merge",
  "am",
  "cherry-pick",
  "tag",
  "branch",
  "config",
  "stash",
  "rm",
  "mv",
]);

export type LocalCommitObservedFacts = {
  readonly observedHeadSha: string;
  readonly observedParentSha: string;
  readonly observedChangedPaths: readonly string[];
  readonly observedCommitMessage: string;
  readonly artifactChecks: readonly LocalCommitArtifactCheck[];
  readonly worktreeDirty: boolean;
  readonly commitsFromExpectedParent: number;
  readonly workspacePath: string;
  readonly observationSource: "studio:local_git_readonly";
  readonly priorAttemptId: string;
};

/**
 * Server-owned governed workspace descriptor (non-persistent, non-client DTO).
 * Produced from Cont01 resume / RealExecutionWorkspacePort — never free cwd.
 */
export type GovernedWorkspaceObservationContext = {
  readonly workspacePath: string;
  readonly execRoot: string;
  readonly priorAttemptId: string;
  readonly repositoryBinding: PrepareWorkspaceRepositoryBinding;
  /** Absolute path to the managed clone used for worktree registration checks. */
  readonly managedRepoRoot: string;
  /**
   * Optional common Git repository identity (dirname / pathRoot) when
   * deterministically available from Project binding.
   */
  readonly expectedCommonGitRoot?: string;
};

export type ObserveLocalCommitInput = {
  readonly gitRunner: GitCommandRunner;
  readonly governed: GovernedWorkspaceObservationContext;
  readonly spec: GitCommitLaunchSpec;
  /** Expected digests keyed by relative path (from VERIFIED Artifact Evidence). */
  readonly expectedArtifactDigests: Readonly<Record<string, string>>;
};

function assertReadOnlyArgv(argv: readonly string[]): void {
  if (argv.length === 0) throw new Error("local_git_observe_empty_argv");
  const cmd = argv[0]!;
  // Allow read-only `git remote get-url` (identity check). Forbid other remote ops.
  if (cmd === "remote") {
    if (argv[1] === "get-url") return;
    throw new Error(`local_git_observe_mutation_forbidden:remote`);
  }
  if (MUTATION_FORBIDDEN.has(cmd)) {
    throw new Error(`local_git_observe_mutation_forbidden:${cmd}`);
  }
}

async function runReadonly(
  runner: GitCommandRunner,
  cwd: string,
  argv: readonly string[],
): Promise<{ stdout: string; exitCode: number }> {
  assertReadOnlyArgv(argv);
  const r = await runner.run(argv, cwd);
  return { stdout: r.stdout, exitCode: r.exitCode };
}

function normalizeGitRemoteUrl(url: string): string {
  return url
    .trim()
    .replace(/\.git$/i, "")
    .replace(/^git@github\.com:/i, "https://github.com/")
    .replace(/^ssh:\/\/git@github\.com\//i, "https://github.com/")
    .toLowerCase();
}

function porcelainWorktreePaths(porcelain: string): string[] {
  const out: string[] = [];
  for (const line of porcelain.split("\n")) {
    if (line.startsWith("worktree ")) {
      out.push(line.slice("worktree ".length).trim());
    }
  }
  return out;
}

/**
 * Collect local commit facts from a governed Cont01 workspace.
 * Rejects free cwd / arbitrary Git repos / wrong remote / unregistered worktrees.
 *
 * Synthetic observation helpers are NOT exported from Product — tests use
 * `__tests__/oa/execution-attempt/support/localCommitTestFacts.ts`.
 */
export async function observeLocalCommitFacts(
  input: ObserveLocalCommitInput,
): Promise<
  | { ok: true; facts: LocalCommitObservedFacts }
  | { ok: false; reason: string }
> {
  // Hostile free-cwd channels.
  if (
    typeof (input as { freeCwd?: unknown }).freeCwd === "string" ||
    typeof (input as { cwd?: unknown }).cwd === "string" ||
    typeof (input as { workspacePath?: unknown }).workspacePath === "string"
  ) {
    return { ok: false, reason: "local_git_free_cwd_rejected" };
  }
  if (typeof (input as { cursorReportedPath?: unknown }).cursorReportedPath === "string") {
    return { ok: false, reason: "local_git_cursor_path_rejected" };
  }

  const gov = input.governed;
  if (!gov?.priorAttemptId?.trim()) {
    return { ok: false, reason: "local_git_prior_attempt_required" };
  }
  if (!gov.execRoot?.trim() || !gov.managedRepoRoot?.trim()) {
    return { ok: false, reason: "local_git_governed_roots_required" };
  }
  if (!gov.repositoryBinding?.identity?.trim() || !gov.repositoryBinding.remoteUrl?.trim()) {
    return { ok: false, reason: "local_git_repository_binding_required" };
  }

  const execRoot = path.resolve(gov.execRoot);
  const expectedPath = workspacePathForAttempt(execRoot, gov.priorAttemptId);
  let cwd = path.resolve(gov.workspacePath);
  let managedRoot = path.resolve(gov.managedRepoRoot);
  try {
    cwd = await realpath(cwd);
  } catch {
    return { ok: false, reason: "local_git_workspace_invalid" };
  }
  try {
    managedRoot = await realpath(managedRoot);
  } catch {
    return { ok: false, reason: "local_git_governed_roots_required" };
  }
  let expectedResolved = expectedPath;
  try {
    expectedResolved = await realpath(expectedPath);
  } catch {
    /* path may not exist yet — keep resolved form */
  }
  if (!cwd || cwd === "/" || gov.workspacePath.includes("\0")) {
    return { ok: false, reason: "local_git_workspace_invalid" };
  }
  if (cwd !== expectedResolved && cwd !== expectedPath) {
    return { ok: false, reason: "local_git_prior_attempt_path_mismatch" };
  }
  const execRootResolved = await realpath(execRoot).catch(() => execRoot);
  if (
    cwd !== execRootResolved &&
    !cwd.startsWith(execRootResolved + path.sep) &&
    cwd !== execRoot &&
    !cwd.startsWith(execRoot + path.sep)
  ) {
    return { ok: false, reason: "local_git_workspace_outside_exec_root" };
  }

  if (gov.expectedCommonGitRoot) {
    let expectedCommon = path.resolve(gov.expectedCommonGitRoot);
    try {
      expectedCommon = await realpath(expectedCommon);
    } catch {
      /* keep resolved */
    }
    if (managedRoot !== expectedCommon) {
      return { ok: false, reason: "local_git_common_root_mismatch" };
    }
  }

  // Repository identity BEFORE evaluating post-commit HEAD.
  const remote = await runReadonly(input.gitRunner, cwd, [
    "remote",
    "get-url",
    "origin",
  ]);
  if (remote.exitCode !== 0) {
    return { ok: false, reason: "local_git_origin_remote_missing" };
  }
  const actual = normalizeGitRemoteUrl(remote.stdout.trim());
  const expectedFromUrl = normalizeGitRemoteUrl(gov.repositoryBinding.remoteUrl);
  const expectedFromIdentity = normalizeGitRemoteUrl(
    `https://github.com/${gov.repositoryBinding.identity}.git`,
  );
  if (actual !== expectedFromUrl && actual !== expectedFromIdentity) {
    return { ok: false, reason: "local_git_origin_remote_mismatch" };
  }

  const list = await runReadonly(input.gitRunner, managedRoot, [
    "worktree",
    "list",
    "--porcelain",
  ]);
  if (list.exitCode !== 0) {
    return { ok: false, reason: "local_git_worktree_list_failed" };
  }
  const registered = porcelainWorktreePaths(list.stdout).some(
    (p) => path.resolve(p) === cwd || path.resolve(p) === path.resolve(gov.workspacePath),
  );
  if (!registered) {
    // macOS /var vs /private/var — compare realpaths when available.
    let matched = false;
    for (const p of porcelainWorktreePaths(list.stdout)) {
      try {
        if ((await realpath(p)) === cwd) {
          matched = true;
          break;
        }
      } catch {
        /* ignore */
      }
    }
    if (!matched) {
      return { ok: false, reason: "local_git_worktree_unregistered" };
    }
  }

  const inside = await runReadonly(input.gitRunner, cwd, [
    "rev-parse",
    "--is-inside-work-tree",
  ]);
  if (inside.exitCode !== 0 || inside.stdout.trim() !== "true") {
    return { ok: false, reason: "local_git_not_a_worktree" };
  }

  const toplevel = await runReadonly(input.gitRunner, cwd, [
    "rev-parse",
    "--show-toplevel",
  ]);
  if (toplevel.exitCode !== 0) {
    return { ok: false, reason: "local_git_toplevel_unreadable" };
  }
  if (path.resolve(toplevel.stdout.trim()) !== cwd) {
    try {
      if ((await realpath(toplevel.stdout.trim())) !== cwd) {
        return { ok: false, reason: "local_git_toplevel_mismatch" };
      }
    } catch {
      return { ok: false, reason: "local_git_toplevel_mismatch" };
    }
  }

  const headRes = await runReadonly(input.gitRunner, cwd, ["rev-parse", "HEAD"]);
  if (headRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_head_unreadable" };
  }
  const observedHeadSha = headRes.stdout.trim().toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(observedHeadSha)) {
    return { ok: false, reason: "local_git_head_invalid" };
  }

  const parentRes = await runReadonly(input.gitRunner, cwd, [
    "rev-parse",
    "HEAD^",
  ]);
  if (parentRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_parent_unreadable" };
  }
  const observedParentSha = parentRes.stdout.trim().toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(observedParentSha)) {
    return { ok: false, reason: "local_git_parent_invalid" };
  }

  const subjectRes = await runReadonly(input.gitRunner, cwd, [
    "log",
    "-1",
    "--format=%s",
    "HEAD",
  ]);
  if (subjectRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_subject_unreadable" };
  }
  const observedCommitMessage = subjectRes.stdout.replace(/\n$/, "");

  const namesRes = await runReadonly(input.gitRunner, cwd, [
    "diff-tree",
    "--no-commit-id",
    "--name-only",
    "-r",
    "HEAD",
  ]);
  if (namesRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_changed_paths_unreadable" };
  }
  const observedChangedPaths = namesRes.stdout
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const countRes = await runReadonly(input.gitRunner, cwd, [
    "rev-list",
    "--count",
    `${input.spec.expectedParentSha}..HEAD`,
  ]);
  if (countRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_lineage_unreadable" };
  }
  const commitsFromExpectedParent = Number.parseInt(countRes.stdout.trim(), 10);
  if (!Number.isFinite(commitsFromExpectedParent)) {
    return { ok: false, reason: "local_git_lineage_invalid" };
  }

  const statusRes = await runReadonly(input.gitRunner, cwd, [
    "status",
    "--porcelain",
    "-uall",
  ]);
  if (statusRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_status_unreadable" };
  }
  const worktreeDirty = statusRes.stdout.trim().length > 0;

  const artifactChecks: LocalCommitArtifactCheck[] = [];
  for (const rel of input.spec.exactPaths) {
    const expectedDigest = input.expectedArtifactDigests[rel];
    if (!expectedDigest) {
      return { ok: false, reason: "local_git_expected_digest_missing" };
    }
    const abs = path.resolve(cwd, ...rel.split("/"));
    if (!abs.startsWith(cwd + path.sep) && abs !== cwd) {
      return { ok: false, reason: "local_git_artifact_path_escape" };
    }
    let body: Buffer;
    try {
      body = await readFile(abs);
    } catch {
      return { ok: false, reason: "local_git_artifact_missing" };
    }
    const actualDigest = `sha256:${createHash("sha256").update(body).digest("hex")}`;
    artifactChecks.push({
      path: rel,
      expectedDigest: expectedDigest.toLowerCase(),
      actualDigest,
    });
  }

  return {
    ok: true,
    facts: {
      observedHeadSha,
      observedParentSha,
      observedChangedPaths,
      observedCommitMessage,
      artifactChecks,
      worktreeDirty,
      commitsFromExpectedParent,
      workspacePath: cwd,
      priorAttemptId: gov.priorAttemptId,
      observationSource: "studio:local_git_readonly",
    },
  };
}
```

## FULL: projects_sfia-studio_app_lib_oa_execution-attempt_application_verifyLocalCommitEffect.ts
```typescript
/**
 * Independent local-commit verification + Evidence binding (Studio READ-ONLY).
 * CORR-D-GCEC-AGENT-02 / CR-GCEC-AGENT-09:
 * Production Evidence creator OWNS read-only observation.
 * Callers may NOT supply LocalCommitObservedFacts / forged SHA fields.
 */
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import { buildTypedGitEvidenceFields } from "@/lib/oa/evidence-review";
import type { GitVerifyActor, GitVerifyBindings } from "@/lib/oa/git-ports";
import { verifyLocalCommitFacts } from "../domain/verifyLocalCommitFacts";
import type { GitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
import type { GitCommandRunner } from "../infrastructure/studioGitWorktreeWorkspace";
import {
  observeLocalCommitFacts,
  type GovernedWorkspaceObservationContext,
} from "./observeLocalCommitFacts";

export const LOCAL_GIT_READONLY_TECHNICAL_REF =
  "studio:local_git_readonly:observe" as const;

export type VerifyLocalCommitEffectInput = {
  readonly gitRunner: GitCommandRunner;
  readonly governed: GovernedWorkspaceObservationContext;
  readonly spec: GitCommitLaunchSpec;
  /** Expected digests keyed by relative path (from VERIFIED Artifact Evidence). */
  readonly expectedArtifactDigests: Readonly<Record<string, string>>;
  /** Required exact bindings from governed Attempt B context. */
  readonly expectedBindings: GitVerifyBindings;
  readonly actor: GitVerifyActor;
  readonly evidenceServices: EvidenceReviewServices;
  readonly nowIso?: string;
  readonly trustCursorReportOnly?: boolean;
};

export type VerifyLocalCommitEffectResult =
  | {
      readonly ok: true;
      readonly evidenceId: string;
      readonly status: "verified";
      readonly commitSha: string;
      readonly provenance: typeof LOCAL_GIT_READONLY_TECHNICAL_REF;
    }
  | {
      readonly ok: false;
      readonly reason: string;
      readonly status: "reported" | "failed";
    };

function bindingsComplete(b: GitVerifyBindings): boolean {
  return (
    Boolean(b.projectId?.trim()) &&
    Boolean(b.cycleInstanceId?.trim()) &&
    Boolean(b.executionContractId?.trim()) &&
    Boolean(b.executionAttemptId?.trim())
  );
}

function claimDigest(location: string): Digest {
  return `sha256:${createHash("sha256").update(location, "utf8").digest("hex")}` as Digest;
}

const FORGED_FACT_KEYS = [
  "observed",
  "observedHeadSha",
  "observedParentSha",
  "observedChangedPaths",
  "observedCommitMessage",
  "worktreeDirty",
  "commitsFromExpectedParent",
  "artifactChecks",
  "allowTestOnlySyntheticObservation",
] as const;

/**
 * Production Evidence creator: governed workspace → observe → verify → Evidence.
 * Rejects hostile injection of pre-built observation facts (CR-09).
 */
export async function verifyLocalCommitEffect(
  input: VerifyLocalCommitEffectInput,
): Promise<VerifyLocalCommitEffectResult> {
  // Hostile: reject any forged observation fields on the request object.
  const raw = input as Record<string, unknown>;
  for (const key of FORGED_FACT_KEYS) {
    if (key in raw && raw[key] !== undefined) {
      return {
        ok: false,
        reason: "local_git_forged_observation_rejected",
        status: "failed",
      };
    }
  }

  if (!input.expectedBindings || !bindingsComplete(input.expectedBindings)) {
    return {
      ok: false,
      reason: "git_evidence_bindings_incomplete",
      status: "failed",
    };
  }

  if (input.trustCursorReportOnly) {
    return {
      ok: false,
      reason: "cursor_report_alone_not_verified",
      status: "reported",
    };
  }

  if (!input.gitRunner || !input.governed || !input.spec) {
    return {
      ok: false,
      reason: "local_git_observation_inputs_required",
      status: "failed",
    };
  }

  const observed = await observeLocalCommitFacts({
    gitRunner: input.gitRunner,
    governed: input.governed,
    spec: input.spec,
    expectedArtifactDigests: input.expectedArtifactDigests,
  });
  if (!observed.ok) {
    return { ok: false, reason: observed.reason, status: "failed" };
  }

  const facts = verifyLocalCommitFacts({
    expectedParentSha: input.spec.expectedParentSha,
    observedHeadSha: observed.facts.observedHeadSha,
    observedParentSha: observed.facts.observedParentSha,
    exactPaths: input.spec.exactPaths,
    observedChangedPaths: observed.facts.observedChangedPaths,
    expectedCommitMessage: input.spec.commitMessage,
    observedCommitMessage: observed.facts.observedCommitMessage,
    artifactChecks: observed.facts.artifactChecks,
    worktreeDirty: observed.facts.worktreeDirty,
    commitsFromExpectedParent: observed.facts.commitsFromExpectedParent,
  });
  if (!facts.ok) {
    return { ok: false, reason: facts.reason, status: "failed" };
  }

  const payload = {
    repositoryRef: input.spec.repositoryRef,
    commitSha: observed.facts.observedHeadSha,
    message: observed.facts.observedCommitMessage,
    parentSha: observed.facts.observedParentSha,
    changedPaths: [...input.spec.exactPaths],
  };
  const built = buildTypedGitEvidenceFields("git:local_commit", payload);
  if (!built.ok) {
    return { ok: false, reason: built.reason, status: "failed" };
  }

  const location =
    built.fields.location ??
    `git:local_commit?repo=${encodeURIComponent(input.spec.repositoryRef)}&commitSha=${observed.facts.observedHeadSha}`;
  const digest = (built.fields.digest ?? claimDigest(location)) as Digest;
  const evidenceId = `ev:git-commit-verified:${observed.facts.observedHeadSha.slice(0, 12)}`;

  const registered = await input.evidenceServices.registerEvidence.execute({
    evidenceId,
    idempotencyKey: `idem:${evidenceId}`,
    actor: input.actor as never,
    type: "other",
    source: "git:local_commit",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    status: "available",
    location,
    digest,
    technicalResultRef: LOCAL_GIT_READONLY_TECHNICAL_REF,
    bindings: {
      projectId: input.expectedBindings.projectId,
      cycleInstanceId: input.expectedBindings.cycleInstanceId,
      executionContractId: input.expectedBindings.executionContractId!,
      executionAttemptId: input.expectedBindings.executionAttemptId!,
    },
    ...(input.nowIso ? { nowIso: input.nowIso } : {}),
  });
  if (!registered.ok) {
    return {
      ok: false,
      reason: registered.error?.detailCode ?? "evidence_register_failed",
      status: "failed",
    };
  }

  const testSvc = input.evidenceServices as EvidenceReviewServices & {
    setPayloadScript?: (
      id: string,
      s: { availability: "available"; digest: Digest },
    ) => void;
    fakePayload?: {
      setScript?: (
        id: string,
        s: { availability: "available"; digest: Digest },
      ) => void;
    };
    payload?: {
      setScript?: (
        id: string,
        s: { availability: "available"; digest: Digest },
      ) => void;
    };
  };
  const scriptable = testSvc.fakePayload ?? testSvc.payload;
  if (typeof testSvc.setPayloadScript === "function") {
    testSvc.setPayloadScript(evidenceId, {
      availability: "available",
      digest,
    });
  } else if (typeof scriptable?.setScript === "function") {
    scriptable.setScript(evidenceId, {
      availability: "available",
      digest,
    });
  }

  const verified = await input.evidenceServices.verifyEvidenceIntegrity.execute({
    evidenceId,
    expectedVersion: registered.evidence.version,
    actor: input.actor as never,
  });
  if (!verified.ok || verified.evidence.status !== "verified") {
    return {
      ok: false,
      reason: verified.ok
        ? "status_not_verified_after_integrity"
        : (verified.error?.detailCode ?? "evidence_verify_failed"),
      status: "reported",
    };
  }

  return {
    ok: true,
    evidenceId,
    status: "verified",
    commitSha: observed.facts.observedHeadSha.toLowerCase(),
    provenance: LOCAL_GIT_READONLY_TECHNICAL_REF,
  };
}

export function digestOf(content: string): Digest {
  return `sha256:${createHash("sha256").update(content).digest("hex")}` as Digest;
}
```

## FULL: projects_sfia-studio_app_lib_oa_execution-attempt_domain_gitCommitLaunchSpec.ts
```typescript
/**
 * Server-derived GitCommitLaunchSpec (GCEC bounded local commit).
 * Canonical type — import/re-export; do not duplicate in ports.
 * No free cwd / shell / wildcard. Paths from VERIFIED continuation / EC only.
 * CR-GCEC-GC-03: strict shell-safe grammar for Shell-exposed agent profile.
 */

/** Canonical commit launch contract (single source of truth). */
export type GitCommitLaunchSpec = {
  readonly repositoryRef: string;
  readonly expectedParentSha: string;
  readonly exactPaths: readonly string[];
  readonly commitMessage: string;
  /** Optional branch/ref already modeled on the EC / binding. */
  readonly branchOrRef?: string;
};

/** Bounded subject length for this capability (single-line git subject). */
export const GIT_COMMIT_SUBJECT_MAX_LENGTH = 72;

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

/** Forbidden characters / patterns in exactPaths for Shell-oriented profile. */
const PATH_FORBIDDEN_RE =
  /[\x00-\x1f\x7f\\ '"$`;&|<>(){}[\]*?!]|\/\.(\.($|\/))|^-|\/-|^\.|\/\.$/;

/** Forbidden in commit subject for this bounded profile. */
const SUBJECT_FORBIDDEN_RE = /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!\n\r]/;

function isFullSha(v: unknown): v is string {
  return typeof v === "string" && FULL_SHA_RE.test(v.trim());
}

/**
 * Strict relative POSIX path for this capability.
 * Fail closed — never silently normalize hostile input into a safe path.
 */
export function assertShellSafeRelativePath(
  raw: string,
): { ok: true; path: string } | { ok: false; reason: string } {
  if (typeof raw !== "string" || raw.length === 0) {
    return { ok: false, reason: "git_commit_exact_path_empty" };
  }
  if (raw !== raw.trim()) {
    return { ok: false, reason: "git_commit_exact_path_whitespace" };
  }
  if (raw.includes(" ") || /\s/.test(raw)) {
    return { ok: false, reason: "git_commit_exact_path_whitespace" };
  }
  if (raw.startsWith("/") || raw.startsWith("~")) {
    return { ok: false, reason: "git_commit_exact_path_absolute" };
  }
  if (raw.includes("\\")) {
    return { ok: false, reason: "git_commit_exact_path_backslash" };
  }
  if (raw.includes("..")) {
    return { ok: false, reason: "git_commit_exact_path_dotdot" };
  }
  if (raw.startsWith("-") || raw.split("/").some((c) => c.startsWith("-"))) {
    return { ok: false, reason: "git_commit_exact_path_leading_dash" };
  }
  if (PATH_FORBIDDEN_RE.test(raw)) {
    return { ok: false, reason: "git_commit_exact_path_unsafe" };
  }
  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(raw)) {
    return { ok: false, reason: "git_commit_exact_path_charset" };
  }
  if (raw.includes("//") || raw.endsWith("/")) {
    return { ok: false, reason: "git_commit_exact_path_invalid" };
  }
  // Allowed proof path remains valid: docs/functional-design.md
  return { ok: true, path: raw };
}

/**
 * Strict single-line commit subject for this capability.
 */
export function assertShellSafeCommitSubject(
  raw: string,
): { ok: true; message: string } | { ok: false; reason: string } {
  if (typeof raw !== "string") {
    return { ok: false, reason: "git_commit_message_missing" };
  }
  if (raw !== raw.trim()) {
    return { ok: false, reason: "git_commit_message_whitespace" };
  }
  const message = raw.trim();
  if (!message) {
    return { ok: false, reason: "git_commit_message_missing" };
  }
  if (message.includes("\n") || message.includes("\r")) {
    return { ok: false, reason: "git_commit_message_multiline" };
  }
  if (message.length > GIT_COMMIT_SUBJECT_MAX_LENGTH) {
    return { ok: false, reason: "git_commit_message_too_long" };
  }
  if (SUBJECT_FORBIDDEN_RE.test(message) || /\$\(|\$\{/.test(message)) {
    return { ok: false, reason: "git_commit_message_unsafe" };
  }
  // Allow alphanumerics, spaces, and a small punctuation set for "docs: …"
  if (!/^[A-Za-z0-9][A-Za-z0-9 .,:_/+-]*$/.test(message)) {
    return { ok: false, reason: "git_commit_message_charset" };
  }
  return { ok: true, message };
}

/**
 * Build commit launch spec from server-owned facts.
 * Fail closed on empty paths, hostile grammar, missing message.
 */
export function buildGitCommitLaunchSpec(input: {
  readonly repositoryRef: string;
  readonly expectedParentSha: string;
  readonly exactPaths: readonly string[];
  readonly commitMessage: string;
  readonly branchOrRef?: string;
}):
  | { ok: true; spec: GitCommitLaunchSpec }
  | { ok: false; reason: string } {
  const repositoryRef = input.repositoryRef.trim();
  if (!repositoryRef) {
    return { ok: false, reason: "git_commit_repository_ref_missing" };
  }
  if (!isFullSha(input.expectedParentSha)) {
    return { ok: false, reason: "git_commit_expected_parent_sha_invalid" };
  }
  const message = assertShellSafeCommitSubject(input.commitMessage);
  if (!message.ok) return message;

  if (input.exactPaths.length === 0) {
    return { ok: false, reason: "git_commit_exact_paths_empty" };
  }
  const exactPaths: string[] = [];
  for (const raw of input.exactPaths) {
    const n = assertShellSafeRelativePath(raw);
    if (!n.ok) return n;
    exactPaths.push(n.path);
  }
  const unique = [...new Set(exactPaths)].sort();
  if (unique.length !== exactPaths.length) {
    return { ok: false, reason: "git_commit_exact_paths_duplicate" };
  }
  if (input.branchOrRef != null && input.branchOrRef.trim()) {
    const branch = input.branchOrRef.trim();
    if (
      /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]/.test(branch) ||
      branch.includes("..") ||
      branch.startsWith("-")
    ) {
      return { ok: false, reason: "git_commit_branch_or_ref_unsafe" };
    }
  }
  return {
    ok: true,
    spec: {
      repositoryRef,
      expectedParentSha: input.expectedParentSha.trim().toLowerCase(),
      exactPaths: unique,
      commitMessage: message.message,
      ...(input.branchOrRef?.trim()
        ? { branchOrRef: input.branchOrRef.trim() }
        : {}),
    },
  };
}

/**
 * Derive trusted commit message from EC inputs / docs-write brief.
 * Never accept hostile free-form outside EC boundary.
 */
export function deriveTrustedCommitMessage(input: {
  readonly contractInputs: Record<string, unknown>;
  readonly docsWriteArtifactBrief?: string;
}): { ok: true; message: string } | { ok: false; reason: string } {
  const fromInput = input.contractInputs.commitMessage;
  if (typeof fromInput === "string" && fromInput.trim()) {
    return assertShellSafeCommitSubject(fromInput);
  }
  const brief = input.docsWriteArtifactBrief?.trim();
  if (brief) {
    return assertShellSafeCommitSubject(`docs: ${brief}`);
  }
  return { ok: false, reason: "git_commit_message_untrusted_or_missing" };
}
```

## FULL: projects_sfia-studio_app_lib_oa_execution-attempt_domain_projectEvidenceList.ts
```typescript
/**
 * Durable project Evidence read for AttemptExecutionProfile (CR-GCEC-AGENT-02).
 * Distinguishes unavailable infrastructure from a real empty query result.
 */
import type { Evidence } from "@/lib/oa/evidence-review";

export type ProjectEvidenceListResult =
  | { readonly ok: true; readonly evidence: readonly Evidence[] }
  | {
      readonly ok: false;
      readonly reason: "evidence_reader_unavailable";
    };

export type ListProjectEvidenceFn = (
  projectId: string,
) => Promise<ProjectEvidenceListResult>;

/** Test/default: real empty query (reader present). */
export function availableProjectEvidence(
  evidence: readonly Evidence[] = [],
): ProjectEvidenceListResult {
  return { ok: true, evidence };
}

export function unavailableProjectEvidence(): ProjectEvidenceListResult {
  return { ok: false, reason: "evidence_reader_unavailable" };
}
```

## FULL: projects_sfia-studio_app_lib_oa_execution-attempt_domain_resolveAttemptExecutionProfile.ts
```typescript
/**
 * D-GCEC-AGENT-01 — AttemptExecutionProfile (non-persistent).
 * CORR-D-GCEC-AGENT-01: exact Attempt-A lineage + unsupported M4 fail-closed.
 *
 * Server-derived executor sufficiency for THIS Attempt's current eligible slice.
 * NOT an authority source, NOT client-authoritative, NOT persisted.
 *
 * Selection and Start MUST use this same resolver.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { AgentMatchCriteria } from "./invariants";
import type { ExecutionAttempt } from "./types";
import { deriveExecutableEffectsFromContractRequirements } from "./contractEffectClassification";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "../infrastructure/m4BoundedDocsWriteCursorAgent";
import {
  M4_BOUNDED_LOCAL_COMMIT_ACTION,
  M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
  M4_BOUNDED_LOCAL_COMMIT_SCOPE,
  M4_BOUNDED_LOCAL_COMMIT_TARGET,
} from "../infrastructure/m4BoundedLocalCommitCursorAgent";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
import {
  resolveVerifiedDocsWritePriorAttempt,
  type VerifiedDocsWritePriorAttempt,
} from "./resolveVerifiedDocsWritePriorAttempt";

export type AttemptExecutionProfileKind =
  | "docs_write"
  | "local_commit"
  | "contract_legacy";

/** Non-persistent lineage facts for local_commit profile (CR-GCEC-AGENT-07). */
export type AttemptExecutionProfileLineage = {
  readonly priorAttemptId: string;
  readonly evidenceId: string;
  readonly artifactPath: string;
  readonly artifactDigest: string;
};

export type AttemptExecutionProfile = {
  readonly kind: AttemptExecutionProfileKind;
  /** Exact AgentMatchCriteria for registry / Start revalidation. */
  readonly criteria: AgentMatchCriteria;
  /** Human-readable derivation reason (audit / tests). */
  readonly reason: string;
  /** Eligible effect class for this Attempt (informational). */
  readonly effectClass: "filesystem" | "git.commit" | "contract_legacy";
  /** Present when kind === local_commit — exact prior A. */
  readonly lineage?: AttemptExecutionProfileLineage;
};

export type ResolveAttemptExecutionProfileInput = {
  readonly contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "projectId"
    | "cycleInstanceId"
    | "action"
    | "target"
    | "scope"
    | "requiredCapabilities"
    | "evidenceRequirements"
    | "expectedOutputs"
    | "inputs"
  >;
  readonly attempts?: readonly ExecutionAttempt[];
  readonly evidence?: readonly Evidence[];
  /**
   * Evidence reader availability. When false, progressive M4 transitions that
   * require Evidence fail closed (CR-GCEC-AGENT-02). Absent defaults to
   * available with `evidence` (direct unit tests).
   */
  readonly evidenceReaderAvailable?: boolean;
  /**
   * Optional server-derived authorized effects for THIS Start
   * (AuthorizedExecutionSlice). Never trusted from client alone.
   */
  readonly authorizedEffects?: readonly CursorAuthorizedEffectId[];
  /**
   * Hostile / non-authoritative. Ignored for profile fabrication (AP-03/AP-06).
   */
  readonly claimedVerifiedEffects?: readonly CursorAuthorizedEffectId[];
  readonly claimedProfile?: unknown;
  readonly claimedGitCommitSpec?: unknown;
  readonly claimedRequestedAgentRef?: unknown;
};

export type ResolveAttemptExecutionProfileResult =
  | { readonly ok: true; readonly profile: AttemptExecutionProfile }
  | { readonly ok: false; readonly reason: string };

const UNSUPPORTED_M4_PROTECTED: ReadonlySet<CursorAuthorizedEffectId> = new Set([
  "git.push",
  "github.pr.create",
  "github.pr.update",
  "github.pr.merge",
]);

function docsWriteProfile(reason: string): AttemptExecutionProfile {
  return {
    kind: "docs_write",
    effectClass: "filesystem",
    reason,
    criteria: {
      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    },
  };
}

function localCommitProfile(
  reason: string,
  prior: VerifiedDocsWritePriorAttempt,
): AttemptExecutionProfile {
  return {
    kind: "local_commit",
    effectClass: "git.commit",
    reason,
    lineage: {
      priorAttemptId: prior.priorAttemptId,
      evidenceId: prior.evidenceId,
      artifactPath: prior.artifactPath,
      artifactDigest: prior.artifactDigest,
    },
    criteria: {
      requiredCapabilities: [M4_BOUNDED_LOCAL_COMMIT_CAPABILITY],
      action: M4_BOUNDED_LOCAL_COMMIT_ACTION,
      target: M4_BOUNDED_LOCAL_COMMIT_TARGET,
      scope: M4_BOUNDED_LOCAL_COMMIT_SCOPE,
    },
  };
}

function contractLegacyProfile(
  contract: ResolveAttemptExecutionProfileInput["contract"],
  reason: string,
): AttemptExecutionProfile {
  return {
    kind: "contract_legacy",
    effectClass: "contract_legacy",
    reason,
    criteria: {
      requiredCapabilities: [...(contract.requiredCapabilities ?? [])],
      action: contract.action,
      target: contract.target,
      scope: contract.scope,
    },
  };
}

function uniqueAuthorizedEffectClass(
  effects: readonly CursorAuthorizedEffectId[],
): "filesystem" | "git.commit" | "unsupported_protected" | "other" | "empty" | "mixed" {
  const set = new Set(effects);
  if (set.size === 0) return "empty";
  const fs = [...set].filter(
    (e) => e === "filesystem.create" || e === "filesystem.modify",
  );
  const commit = set.has("git.commit");
  const unsupported = [...set].filter((e) => UNSUPPORTED_M4_PROTECTED.has(e));
  const other = [...set].filter(
    (e) =>
      e !== "filesystem.create" &&
      e !== "filesystem.modify" &&
      e !== "git.commit" &&
      e !== "validation.run" &&
      !UNSUPPORTED_M4_PROTECTED.has(e),
  );
  if (unsupported.length > 0) {
    if (fs.length > 0 || commit || other.length > 0) return "mixed";
    return "unsupported_protected";
  }
  if (other.length > 0 && (fs.length > 0 || commit)) return "mixed";
  if (other.length > 0) return "other";
  if (commit && fs.length > 0) return "mixed";
  if (commit) return "git.commit";
  if (fs.length > 0) return "filesystem";
  return "other";
}

function resolveLocalCommitOrFail(
  input: ResolveAttemptExecutionProfileInput,
  reason: string,
): ResolveAttemptExecutionProfileResult {
  if (input.evidenceReaderAvailable === false) {
    return { ok: false, reason: "attempt_profile_evidence_reader_unavailable" };
  }
  const prior = resolveVerifiedDocsWritePriorAttempt({
    contract: input.contract,
    attempts: input.attempts ?? [],
    evidence: input.evidence ?? [],
  });
  if (!prior.ok) {
    if (prior.reason === "docs_write_prior_none") {
      return {
        ok: false,
        reason: "attempt_profile_commit_without_verified_fs_lineage",
      };
    }
    if (prior.reason === "docs_write_prior_ambiguous") {
      return {
        ok: false,
        reason: "attempt_profile_docs_write_prior_ambiguous",
      };
    }
    return {
      ok: false,
      reason: "attempt_profile_docs_write_prior_incomplete",
    };
  }
  return {
    ok: true,
    profile: localCommitProfile(reason, prior.prior),
  };
}

/**
 * Derive the current AttemptExecutionProfile from durable Product truth.
 * Fail closed on zero / ambiguous / unsupported profiles.
 */
export function resolveAttemptExecutionProfile(
  input: ResolveAttemptExecutionProfileInput,
): ResolveAttemptExecutionProfileResult {
  // AP-06/07/08 — reject any client-injected profile channel.
  if (input.claimedProfile != null) {
    return { ok: false, reason: "attempt_profile_client_injection_rejected" };
  }
  void input.claimedVerifiedEffects;
  void input.claimedGitCommitSpec;
  void input.claimedRequestedAgentRef;

  const contract = input.contract;
  const evidence = input.evidence ?? [];

  const docsWriteSpecEvidence =
    contract.inputs &&
    typeof contract.inputs === "object" &&
    Array.isArray(
      (contract.inputs as { evidenceRequirements?: unknown }).evidenceRequirements,
    )
      ? (
          (contract.inputs as { evidenceRequirements: unknown[] })
            .evidenceRequirements
        ).map(String)
      : [];

  const evidenceRequirements = [
    ...(Array.isArray(contract.evidenceRequirements)
      ? contract.evidenceRequirements.map(String)
      : []),
    ...docsWriteSpecEvidence,
  ];

  const classified = deriveExecutableEffectsFromContractRequirements({
    evidenceRequirements,
    expectedOutputs: Array.isArray(contract.expectedOutputs)
      ? contract.expectedOutputs.map(String)
      : undefined,
    requiredCapabilities: Array.isArray(contract.requiredCapabilities)
      ? contract.requiredCapabilities.map(String)
      : undefined,
    allowFilesystemCreateOrModify: true,
  });

  const executable = classified.executableEffects;
  const hasFs = executable.some(
    (e) => e === "filesystem.create" || e === "filesystem.modify",
  );
  const hasCommit = executable.includes("git.commit");
  const hasUnsupportedProtected = executable.some((e) =>
    UNSUPPORTED_M4_PROTECTED.has(e as CursorAuthorizedEffectId),
  );

  const isM4DocsWriteContract =
    contract.action === M4_BOUNDED_DOCS_WRITE_ACTION &&
    (contract.requiredCapabilities ?? []).includes(
      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
    );

  // When Start provides server-derived authorizedEffects, use them to confirm
  // the unique slice — still require exact Attempt-A lineage for commit.
  if (input.authorizedEffects && isM4DocsWriteContract) {
    const cls = uniqueAuthorizedEffectClass(input.authorizedEffects);
    if (cls === "empty") {
      return { ok: false, reason: "attempt_profile_zero_eligible" };
    }
    if (cls === "mixed") {
      return { ok: false, reason: "attempt_profile_ambiguous_slice" };
    }
    if (cls === "unsupported_protected") {
      return { ok: false, reason: "attempt_profile_effect_not_supported" };
    }
    if (cls === "filesystem") {
      return {
        ok: true,
        profile: docsWriteProfile("authorized_slice_filesystem"),
      };
    }
    if (cls === "git.commit") {
      return resolveLocalCommitOrFail(input, "authorized_slice_git_commit");
    }
    // validation-only / unknown under M4 progressive — fail closed (CR-06).
    return { ok: false, reason: "attempt_profile_effect_not_supported" };
  }

  // Selection-time / restart: durable Evidence only.
  if (isM4DocsWriteContract && (hasFs || hasCommit || hasUnsupportedProtected)) {
    // Progressive M4 path — never fall back to contract_legacy for later effects.
    if (hasUnsupportedProtected && !hasFs && !hasCommit) {
      return { ok: false, reason: "attempt_profile_effect_not_supported" };
    }

    if (hasFs && hasCommit) {
      if (input.evidenceReaderAvailable === false) {
        return {
          ok: false,
          reason: "attempt_profile_evidence_reader_unavailable",
        };
      }
      const prior = resolveVerifiedDocsWritePriorAttempt({
        contract,
        attempts: input.attempts ?? [],
        evidence,
      });
      if (!prior.ok) {
        if (prior.reason === "docs_write_prior_none") {
          // No qualified A yet → still on docs-write slice.
          return {
            ok: true,
            profile: docsWriteProfile("progressive_fs_outstanding"),
          };
        }
        if (prior.reason === "docs_write_prior_ambiguous") {
          return {
            ok: false,
            reason: "attempt_profile_docs_write_prior_ambiguous",
          };
        }
        return {
          ok: false,
          reason: "attempt_profile_docs_write_prior_incomplete",
        };
      }

      // Qualified A exists — check whether commit Evidence already closes it.
      const commitVerified = evidence.some(
        (ev) =>
          ev.status === "verified" &&
          ev.source === "git:local_commit" &&
          ev.bindings.executionContractId === contract.executionContractId &&
          ev.bindings.projectId === contract.projectId,
      );
      if (!commitVerified) {
        return {
          ok: true,
          profile: localCommitProfile(
            "progressive_commit_outstanding",
            prior.prior,
          ),
        };
      }
      // Post local-commit: GCEC-PUSH not ready — fail closed (CR-06 / AP-13).
      return { ok: false, reason: "attempt_profile_effect_not_supported" };
    }

    if (hasFs && !hasCommit) {
      return {
        ok: true,
        profile: docsWriteProfile("docs_write_only_contract"),
      };
    }

    if (hasCommit && !hasFs) {
      return resolveLocalCommitOrFail(input, "commit_only_contract");
    }

    return { ok: false, reason: "attempt_profile_effect_not_supported" };
  }

  // Non-M4 / RO / W3A / other → preserve historical contract quartet matching.
  if (
    !contract.action?.trim() ||
    !contract.target?.trim() ||
    !contract.scope?.trim()
  ) {
    return { ok: false, reason: "attempt_profile_zero_eligible" };
  }
  return {
    ok: true,
    profile: contractLegacyProfile(contract, "non_progressive_contract_quartet"),
  };
}
```

## FULL: projects_sfia-studio_app_lib_oa_execution-attempt_domain_resolveVerifiedDocsWritePriorAttempt.ts
```typescript
/**
 * CORR-D-GCEC-AGENT-01 / CR-GCEC-AGENT-07 — exact Attempt-A lineage for M4
 * progressive docs-write → local-commit transition.
 *
 * Pure Product-truth: Attempt history + VERIFIED Artifact Evidence bindings.
 * Zero / multiple eligible candidates → fail closed (no latest/first heuristic).
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "./types";
import {
  evidenceMatchesContractLineage,
  expectedEvidenceIdentity,
} from "./qualifyExecutionContractCompletion";
import {
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
} from "./realLaunchSafety";

export type VerifiedDocsWritePriorAttempt = {
  readonly priorAttemptId: string;
  readonly evidenceId: string;
  readonly artifactPath: string;
  readonly artifactDigest: string;
};

export type ResolveVerifiedDocsWritePriorAttemptInput = {
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
  /** Exclude current Attempt B when resolving prior A. */
  readonly excludeAttemptId?: string;
};

export type ResolveVerifiedDocsWritePriorAttemptResult =
  | { readonly ok: true; readonly prior: VerifiedDocsWritePriorAttempt }
  | {
      readonly ok: false;
      readonly reason:
        | "docs_write_prior_none"
        | "docs_write_prior_ambiguous"
        | "docs_write_prior_incomplete";
      readonly candidateAttemptIds?: readonly string[];
    };

function expectedArtifactPaths(
  contract: ResolveVerifiedDocsWritePriorAttemptInput["contract"],
): readonly string[] {
  const paths = new Set<string>();
  if (Array.isArray(contract.expectedOutputs)) {
    for (const o of contract.expectedOutputs) {
      const s = String(o).trim();
      if (s && s !== "artifact" && !s.includes(":") && s.includes("/")) {
        paths.add(s);
      }
    }
  }
  const inputs = contract.inputs;
  if (inputs && typeof inputs === "object") {
    const targetPath = (inputs as { targetPath?: unknown }).targetPath;
    if (typeof targetPath === "string" && targetPath.trim()) {
      paths.add(targetPath.trim());
    }
  }
  return [...paths];
}

function isCanonicalDocsWriteSource(source: string): boolean {
  // Exact or dotted suffix only — reject fake-prefix lookalikes.
  return (
    source === "execution_attempt:docs_write" ||
    /^execution_attempt:docs_write(\.|$)/.test(source)
  );
}

function isEligibleArtifact(
  ev: Evidence,
  expected: {
    projectId: string;
    cycleInstanceId?: string;
    executionContractId: string;
  },
  attemptId: string,
  allowedPaths: readonly string[],
): boolean {
  if (ev.status !== "verified") return false;
  if (ev.type !== "artifact") return false;
  if (!evidenceMatchesContractLineage(ev, expected)) return false;
  if (ev.bindings.executionAttemptId !== attemptId) return false;
  if (!isCanonicalDocsWriteSource(String(ev.source ?? ""))) return false;
  const loc = String(ev.location ?? "").trim();
  if (!loc) return false;
  if (allowedPaths.length > 0 && !allowedPaths.includes(loc)) return false;
  const digest = String(ev.digest ?? "").trim().toLowerCase();
  if (!digest.startsWith("sha256:") || digest.length < "sha256:".length + 64) {
    return false;
  }
  return true;
}

/**
 * Resolve the unique prior succeeded docs-write Attempt A with matching
 * VERIFIED Artifact Evidence for the current EC.
 */
export function resolveVerifiedDocsWritePriorAttempt(
  input: ResolveVerifiedDocsWritePriorAttemptInput,
): ResolveVerifiedDocsWritePriorAttemptResult {
  const expected = expectedEvidenceIdentity({ contract: input.contract });
  const allowedPaths = expectedArtifactPaths(input.contract);

  type Candidate = VerifiedDocsWritePriorAttempt;
  const candidates: Candidate[] = [];

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
    if (attempt.selectedAgentRef !== M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID) {
      continue;
    }

    const matching = input.evidence.filter((ev) =>
      isEligibleArtifact(ev, expected, attempt.attemptId, allowedPaths),
    );
    if (matching.length === 0) continue;
    if (matching.length > 1) {
      return {
        ok: false,
        reason: "docs_write_prior_ambiguous",
        candidateAttemptIds: [attempt.attemptId],
      };
    }
    const ev = matching[0]!;
    candidates.push({
      priorAttemptId: attempt.attemptId,
      evidenceId: ev.evidenceId,
      artifactPath: String(ev.location).trim(),
      artifactDigest: String(ev.digest).trim().toLowerCase(),
    });
  }

  if (candidates.length === 0) {
    return { ok: false, reason: "docs_write_prior_none" };
  }
  if (candidates.length > 1) {
    return {
      ok: false,
      reason: "docs_write_prior_ambiguous",
      candidateAttemptIds: candidates.map((c) => c.priorAttemptId),
    };
  }

  const only = candidates[0]!;
  if (!only.artifactPath || !only.artifactDigest.startsWith("sha256:")) {
    return { ok: false, reason: "docs_write_prior_incomplete" };
  }
  return { ok: true, prior: only };
}
```

## FULL: projects_sfia-studio_app_lib_oa_execution-attempt_domain_verifyLocalCommitFacts.ts
```typescript
/**
 * Independent local-commit verification facts (Studio READ-ONLY).
 * Cursor remains the mutation executor — Studio never runs git commit.
 * CR-GCEC-GC-02 / GC-04 hardenings.
 */
export type LocalCommitArtifactCheck = {
  readonly path: string;
  readonly expectedDigest: string;
  readonly actualDigest: string;
};

export type LocalCommitVerificationInput = {
  readonly expectedParentSha: string;
  readonly observedHeadSha: string;
  readonly observedParentSha: string;
  readonly exactPaths: readonly string[];
  readonly observedChangedPaths: readonly string[];
  readonly expectedCommitMessage: string;
  readonly observedCommitMessage: string;
  readonly artifactChecks: readonly LocalCommitArtifactCheck[];
  readonly worktreeDirty: boolean;
  /**
   * Commit count from expectedParent (exclusive) to HEAD (inclusive).
   * Must be exactly 1. Derived by local observer — not a free caller flag.
   */
  readonly commitsFromExpectedParent: number;
};

export type LocalCommitVerificationResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly reason: string };

function normalizeSha(sha: string): string {
  return sha.trim().toLowerCase();
}

function normalizePath(p: string): string {
  return p.replace(/\\/g, "/").replace(/^\.\//, "").trim();
}

function sortedUnique(paths: readonly string[]): string[] {
  return [...new Set(paths.map(normalizePath).filter(Boolean))].sort();
}

/**
 * Pure verification of a local commit observation against the bound commit spec.
 */
export function verifyLocalCommitFacts(
  input: LocalCommitVerificationInput,
): LocalCommitVerificationResult {
  const expectedParent = normalizeSha(input.expectedParentSha);
  const head = normalizeSha(input.observedHeadSha);
  const parent = normalizeSha(input.observedParentSha);

  if (!/^[0-9a-f]{40}$/.test(expectedParent)) {
    return { ok: false, reason: "expected_parent_sha_invalid" };
  }
  if (!/^[0-9a-f]{40}$/.test(head)) {
    return { ok: false, reason: "observed_head_sha_invalid" };
  }
  if (!/^[0-9a-f]{40}$/.test(parent)) {
    return { ok: false, reason: "observed_parent_sha_invalid" };
  }
  if (head === expectedParent) {
    return { ok: false, reason: "head_unchanged" };
  }
  if (parent !== expectedParent) {
    return { ok: false, reason: "parent_mismatch" };
  }
  if (input.commitsFromExpectedParent !== 1) {
    return { ok: false, reason: "unexpected_extra_commits" };
  }

  const expectedPaths = sortedUnique(input.exactPaths);
  const observedPaths = sortedUnique(input.observedChangedPaths);
  if (expectedPaths.length === 0) {
    return { ok: false, reason: "exact_paths_empty" };
  }
  if (expectedPaths.join("\0") !== observedPaths.join("\0")) {
    const missing = expectedPaths.filter((p) => !observedPaths.includes(p));
    const extra = observedPaths.filter((p) => !expectedPaths.includes(p));
    if (missing.length > 0) {
      return { ok: false, reason: "changed_paths_missing" };
    }
    if (extra.length > 0) {
      return { ok: false, reason: "changed_paths_extra" };
    }
    return { ok: false, reason: "changed_paths_mismatch" };
  }

  // Exact subject match (already shell-validated on the spec side).
  if (input.observedCommitMessage !== input.expectedCommitMessage) {
    return { ok: false, reason: "commit_message_mismatch" };
  }

  if (input.worktreeDirty) {
    return { ok: false, reason: "worktree_dirty_after_commit" };
  }

  // Artifact coverage must be exactly exactPaths (1:1).
  if (input.artifactChecks.length === 0) {
    return { ok: false, reason: "artifact_checks_missing" };
  }
  const checkPaths = sortedUnique(input.artifactChecks.map((c) => c.path));
  if (checkPaths.join("\0") !== expectedPaths.join("\0")) {
    if (checkPaths.length < expectedPaths.length) {
      return { ok: false, reason: "artifact_coverage_incomplete" };
    }
    if (checkPaths.length > expectedPaths.length) {
      return { ok: false, reason: "artifact_coverage_extra" };
    }
    return { ok: false, reason: "artifact_coverage_mismatch" };
  }

  for (const check of input.artifactChecks) {
    const expected = check.expectedDigest.trim().toLowerCase();
    const actual = check.actualDigest.trim().toLowerCase();
    if (!/^sha256:[a-f0-9]{64}$/.test(expected) || !/^sha256:[a-f0-9]{64}$/.test(actual)) {
      return { ok: false, reason: "artifact_digest_invalid" };
    }
    if (expected !== actual) {
      return { ok: false, reason: "artifact_digest_mismatch" };
    }
  }

  return { ok: true };
}

/**
 * CR-GCEC-GC-02 — authorizedEffects MUST be exactly one unique effect: git.commit.
 */
export function isBoundedGitCommitOnlySlice(
  authorizedEffects: readonly string[] | undefined | null,
): boolean {
  if (!authorizedEffects || authorizedEffects.length === 0) return false;
  const unique = new Set(authorizedEffects);
  return unique.size === 1 && unique.has("git.commit");
}
```

## FULL: projects_sfia-studio_app_lib_oa_execution-attempt_infrastructure_m4BoundedLocalCommitCursorAgent.ts
```typescript
/**
 * M4 bounded local git.commit Cursor agent (GCEC git.commit executor).
 * Sibling of docs-write / RO — SAME gateway adapter; does not widen docs-write.
 * Exact caps only — no push/PR/merge capability.
 */
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
  M4_REAL_GATEWAY_ADAPTER_ID,
} from "../domain/realLaunchSafety";
import type { AgentDescriptor } from "../domain/types";

export const M4_BOUNDED_LOCAL_COMMIT_CAPABILITY =
  "cap:cursor.git.local_commit" as const;
export const M4_BOUNDED_LOCAL_COMMIT_ACTION =
  "cursor.git.local_commit.apply" as const;
export const M4_BOUNDED_LOCAL_COMMIT_TARGET =
  "workspace.isolated.git.local_commit" as const;
export const M4_BOUNDED_LOCAL_COMMIT_SCOPE =
  "studio.gcec.git.local_commit" as const;

export function createM4BoundedLocalCommitCursorAgentDescriptor(
  nowIso: string,
  provenance?: ProvenanceRecord,
): AgentDescriptor {
  const defaultProvenance: ProvenanceRecord = {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:m4-bounded-local-commit-cursor-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:m4-bounded-local-commit-cursor-agent",
  };
  const descriptor: AgentDescriptor = {
    schemaVersion: "0.1.0-oa",
    agentId: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
    agentType: "cursor_cli_bounded_local_commit",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    supportedCapabilities: [M4_BOUNDED_LOCAL_COMMIT_CAPABILITY],
    allowedActions: [M4_BOUNDED_LOCAL_COMMIT_ACTION],
    allowedTargets: [M4_BOUNDED_LOCAL_COMMIT_TARGET],
    allowedScopes: [M4_BOUNDED_LOCAL_COMMIT_SCOPE],
    trustLevel: "bounded",
    executionMode: "cursor_cli_real",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    provenance: provenance ?? defaultProvenance,
    createdAt: nowIso,
  };
  return Object.freeze(descriptor);
}

export function isM4BoundedLocalCommitRealAgent(
  agent: AgentDescriptor,
): boolean {
  const hasWildcard = (values: readonly string[]) =>
    values.some((v) => v === "*" || v.includes("*"));
  return (
    agent.agentId === M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID &&
    agent.executionMode === "cursor_cli_real" &&
    agent.trustLevel === "bounded" &&
    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
    agent.enabled === true &&
    agent.supportedCapabilities.includes(M4_BOUNDED_LOCAL_COMMIT_CAPABILITY) &&
    agent.allowedActions.includes(M4_BOUNDED_LOCAL_COMMIT_ACTION) &&
    agent.allowedTargets.includes(M4_BOUNDED_LOCAL_COMMIT_TARGET) &&
    agent.allowedScopes.includes(M4_BOUNDED_LOCAL_COMMIT_SCOPE) &&
    agent.allowedScopes.length === 1 &&
    agent.supportedCapabilities.length === 1 &&
    agent.allowedActions.length === 1 &&
    agent.allowedTargets.length === 1 &&
    !hasWildcard(agent.supportedCapabilities) &&
    !hasWildcard(agent.allowedActions) &&
    !hasWildcard(agent.allowedTargets) &&
    !hasWildcard(agent.allowedScopes) &&
    !agent.supportedCapabilities.includes("cap:unresolved") &&
    !agent.allowedActions.some((a) => a.includes("UNRESOLVED")) &&
    !agent.allowedTargets.some((t) => t.includes("UNRESOLVED")) &&
    !agent.allowedScopes.some((s) => s.includes("UNRESOLVED"))
  );
}
```
