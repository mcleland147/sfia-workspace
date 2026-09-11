# SFIA STUDIO — GCEC Review Pack (CONTENT-COMPLETE REPUBLICATION)

## TIMESTAMP

2026-09-11T20:32:51Z

## GO MORRIS

BOUNDED DETERMINISTIC REAL GIT.COMMIT EXECUTOR DELIVERY — **HANDOFF CONTENT COMPLETION**

Authorized this correction lot:

- enrich `latest-chatgpt-review.md` with **inline reviewable Product code**
  (complete useful diffs of modified files + full created files + associated tests);
- republish canonical Review Handoff;
- ZERO REAL;
- ZERO Product commit / push;
- ZERO Product source mutation beyond the already-present uncommitted candidate
  (no further Product edits required for this republication).

NOT authorized: REAL StartExecution; Product commit; Product push; PR; merge;
proof-repo mutation; architecture reopen; new persistence.

---

## GIT TRUTH BEFORE (this republication)

| Check | Value |
|-------|-------|
| worktree | `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310` |
| branch | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` |
| HEAD | `3966bbf9b800b143711acf1d581b85a33e106e99` |
| parent | `92ad3fd41e065d0ebe76c59b4eedb622715a11e2` |
| origin/main | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |
| Product commit this lot | **NONE** |
| Prior incomplete handoff tip | `46ee66bc6de5cd7ce723e971de44ba77527d74fd` |
| Prior incomplete blob | `f27505cc7b0acb9f7622837eae9eac591b27fb96` |

## GIT TRUTH AFTER (expected)

| Check | Value |
|-------|-------|
| Product HEAD | `3966bbf9b800b143711acf1d581b85a33e106e99` (**unchanged**) |
| Product commit | **NONE** |
| Product push | **NONE** |
| REAL | **ZERO** |
| Handoff | new tip after publish (independently verified below) |

---

## BLOCKING FINDING BEING CLOSED

ChatGPT Critical Review:

> **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING**

Prior handoffs (`46ee66bc…` / `ef9f309d…`) described the candidate and pointed at
`.tmp-sfia-review/gcec-gitcommit-reviewable/**` which is **not** in the handoff Git
branch. That violates the review contract.

This republication **embeds** all reviewable Product code inline. No reliance on
local `.tmp-sfia-review/**` for Critical Review inspection.

---

## SOURCES / CONVERGENCE / CYCLE

Unchanged from Delivery candidate:

- Cycle 8 — Delivery / EVOL / CRITICAL
- D-GCEC-CONT-01 **ADOPTED / LOCALLY COMMITTED** at Product `3966bbf9b800b143711acf1d581b85a33e106e99`
- Build Doctrine VALIDATED; Product Completion CLOSED; runtime v3 NON ADOPTED
- Input Product commit `3966bbf9b800b143711acf1d581b85a33e106e99`
- Deterministic executor candidate ≠ REAL executor proven

---

## EXECUTOR SUFFICIENCY / CURSOR CLI

Cursor CLI 3.19.19: `--print`, `--workspace`, `--trust`, `--sandbox enabled|disabled`,
`--mode plan|ask`. **No** tool allow/deny.

Deterministic boundedness = structured `authorizedEffects` + Cont01 continuation +
server `GitCommitLaunchSpec` + Gate D + Confirmation + independent verification +
Evidence — not prose alone.

**RESERVE (REAL):** agent mode still exposes Shell and Write; REAL tool separation
remains instruction-bounded. Deterministic architecture sound without REAL.

---

## ARCHITECTURE SUMMARY (claims — code below is authoritative)

1. Sibling agent `agt:m4.cursor.bounded_local_commit` — SAME gateway adapter
2. `GitCommitLaunchSpec` on `RealLaunchRequest` — server-derived only
3. `StudioCursorRealLaunchGateway` commit profile (resume + Shell-only instruction + forbid list)
4. StartExecution builds `gitCommitSpec` for commit-only authorized slice
5. `verifyLocalCommitFacts` + `verifyLocalCommitEffect` (READ-ONLY; no Studio git writer)
6. Cont01 `isFsAnchorSupersededByVerifiedLocalCommit` (FS→SHA)
7. Future REAL harness skipped (`SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF=1` triple-gate)
8. No new persistence/schema/migration/FSM

---

## FILES MODIFIED (10)

1. `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts`
2. `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`
3. `projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts`
4. `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts`
5. `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts`
6. `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts`
7. `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts`
8. `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts`
9. `projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts`
10. `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

## FILES CREATED (9)

1. `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedLocalCommitCursorAgent.ts`
2. `projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitCommitLaunchSpec.ts`
3. `projects/sfia-studio/app/lib/oa/execution-attempt/domain/verifyLocalCommitFacts.ts`
4. `projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyLocalCommitEffect.ts`
5. `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts`
6. `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitVerification.d0.test.ts`
7. `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitEvidence.d0.test.ts`
8. `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts`
9. `projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts`

---

## VALIDATIONS (unchanged claims from Delivery candidate — ZERO REAL)

| Gate | Result |
|------|--------|
| Focused git.commit + Cont01 + REAL-skip harness | 43 passed / 1 skipped |
| Related Cont01/D15/Cr23/m4RealOff/docs-write REAL | 179 passed / 2 skipped |
| Full Vitest | 348 files / 3710 tests passed / 137 skipped |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| diff-check | PASS |
| Product HEAD | `3966bbf9b800b143711acf1d581b85a33e106e99` |
| Product commit | NONE |
| REAL | ZERO |

---

## PRODUCT PERSISTENCE / SCHEMA / STUDIO GIT WRITER / PROOF REPO

NONE / NONE / NO / UNCHANGED

---

## DEBT / ANTI-CLAIMS

OPEN: TEMP-GCEC-PRPM-01, TEMP-GCEC-F14-BIND-01, REAL_CONTINUATION_GAP, REAL CLI tool-control reserve.

Do NOT claim: REAL_CONTINUATION_GAP CLOSED; REAL git.commit proven; GCEC-PUSH READY;
END-TO-END REAL; runtime v3 ADOPTED; Product commit performed.

---

## VERDICT (this republication)

**HANDOFF CONTENT COMPLETION — READY FOR CHATGPT CRITICAL REVIEW RESUME**

Candidate code status remains: **IMPLEMENTED CANDIDATE** (uncommitted at Product HEAD `3966bbf9b800b143711acf1d581b85a33e106e99`).
Critical Review of code was previously **BLOCKED**; this pack supplies missing content.

Preferred downstream Critical Review target (unchanged architecture claims):

PASS WITH RESERVE — BOUNDED CURSOR GIT.COMMIT EXECUTOR + SAME-EC A→B DETERMINISTICALLY PROVEN /
REAL TOOLING SUFFICIENCY RESERVE REMAINS

---

# REVIEWABLE PRODUCT CODE — MODIFIED FILE DIFFS (COMPLETE)

The following 10 unified diffs are the **complete useful Product diffs** against HEAD `3966bbf9b800b143711acf1d581b85a33e106e99`.

## DIFF — `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
index 488e5e1e..d2fbc6fc 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
@@ -405,4 +405,41 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
     });
     expect(r).toEqual({ required: false, descriptor: null });
   });
+
+  it("FS→SHA supersession: verified git:local_commit clears continuation", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [attempt({ attemptId: "xat:a" }), attempt({ attemptId: "xat:b" })],
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
+          location: `git:local_commit?repo=acme%2Fwidget&commitSha=${HEAD}`,
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

## DIFF — `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index b94fddb3..858b56d1 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -75,6 +75,11 @@ import {
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
@@ -1116,6 +1121,74 @@ export class StartExecution {
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
@@ -1132,6 +1205,7 @@ export class StartExecution {
         scope: contract.scope,
         timeoutMs: window.resolvedMaxDurationMs,
         ...(docsWriteSpec ? { docsWriteSpec } : {}),
+        ...(gitCommitSpec ? { gitCommitSpec } : {}),
         ...(repositoryBindingIdentity
           ? { repositoryBindingIdentity }
           : {}),
```

## DIFF — `projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts`

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

## DIFF — `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
index f1098918..706dcecc 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
@@ -72,6 +72,38 @@ export function preCommitWorkspaceContinuationRequired(input: {
   return hasVerifiedFs && hasAuthorizedGit;
 }

+function isVerifiedLocalCommitEvidence(ev: Evidence): boolean {
+  return (
+    ev.status === "verified" &&
+    (ev.source === "git:local_commit" ||
+      ev.source.startsWith("git:local_commit"))
+  );
+}
+
+/**
+ * FS→verified-commit-SHA supersession (D-GCEC-CONT-01 Option A framed by B).
+ * After independently VERIFIED local commit, pre-commit dirty workspace
+ * continuation is no longer required (future push must not demand Attempt-A FS).
+ */
+export function isFsAnchorSupersededByVerifiedLocalCommit(input: {
+  readonly projectId: string;
+  readonly cycleInstanceId: string;
+  readonly executionContractId: string;
+  readonly verifiedEffects?: readonly CursorAuthorizedEffectId[];
+  readonly evidence: readonly Evidence[];
+}): boolean {
+  if ((input.verifiedEffects ?? []).includes("git.commit")) {
+    return true;
+  }
+  return input.evidence.some(
+    (ev) =>
+      isVerifiedLocalCommitEvidence(ev) &&
+      ev.bindings.projectId === input.projectId &&
+      ev.bindings.cycleInstanceId === input.cycleInstanceId &&
+      ev.bindings.executionContractId === input.executionContractId,
+  );
+}
+
 function isDocsWriteArtifactEvidence(ev: Evidence): boolean {
   return (
     ev.type === "artifact" &&
@@ -98,6 +130,18 @@ function isDocsWriteArtifactEvidence(ev: Evidence): boolean {
 export function resolvePreCommitWorkspaceContinuation(
   input: ResolvePreCommitWorkspaceContinuationInput,
 ): ResolvePreCommitWorkspaceContinuationResult {
+  if (
+    isFsAnchorSupersededByVerifiedLocalCommit({
+      projectId: input.projectId,
+      cycleInstanceId: input.cycleInstanceId,
+      executionContractId: input.executionContractId,
+      verifiedEffects: input.verifiedEffects,
+      evidence: input.evidence,
+    })
+  ) {
+    return { required: false, descriptor: null };
+  }
+
   if (
     !preCommitWorkspaceContinuationRequired({
       authorizedEffects: input.authorizedEffects,
```

## DIFF — `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index aa6afc77..7d5b4522 100644
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
@@ -193,13 +201,28 @@ export {
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
+  buildGitCommitLaunchSpec,
+  deriveTrustedCommitMessage,
+} from "./domain/gitCommitLaunchSpec";
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
+} from "./application/verifyLocalCommitEffect";
+export type {
+  LocalCommitObservation,
+  VerifyLocalCommitEffectInput,
+  VerifyLocalCommitEffectResult,
+} from "./application/verifyLocalCommitEffect";

 import type { ClockPort } from "@/lib/oa/doctrine";
 import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
```

## DIFF — `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
index aed84753..8833bbc9 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
@@ -21,6 +21,8 @@ import {
   type RealLaunchResult,
   type RealProcessObservation,
 } from "@/lib/oa/execution-attempt";
+import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
+import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
 import type {
   CursorAuthorizedEffectId,
   CursorExecutionReport,
@@ -149,7 +151,15 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
         detailCode: "REAL_LAUNCH_FAILED",
       };
     }
-    if (request.action !== M4_BOUNDED_DOCS_WRITE_ACTION) {
+    const { authorized, blocked } = resolveAuthorizedEffects(request);
+    const isCommitOnly =
+      Boolean(request.gitCommitSpec) &&
+      isBoundedGitCommitOnlySlice([...authorized]);
+    const actionOk =
+      request.action === M4_BOUNDED_DOCS_WRITE_ACTION ||
+      request.action === M4_BOUNDED_LOCAL_COMMIT_ACTION ||
+      isCommitOnly;
+    if (!actionOk) {
       return {
         outcome: "reject",
         gatewayId: this.gatewayId,
@@ -160,16 +170,21 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
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
@@ -188,7 +203,7 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
       };
     }

-    if (!isAllowlisted(rel, pathAllowlist)) {
+    if (!isCommitOnly && !isAllowlisted(rel, pathAllowlist)) {
       return {
         outcome: "reject",
         gatewayId: this.gatewayId,
@@ -219,8 +234,8 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
     let modified: string[] = [];
     const digests: Record<string, string> = {};

-    const canFsCreate = authorized.has("filesystem.create");
-    const canFsModify = authorized.has("filesystem.modify");
+    const canFsCreate = !isCommitOnly && authorized.has("filesystem.create");
+    const canFsModify = !isCommitOnly && authorized.has("filesystem.modify");

     if (canFsCreate || canFsModify) {
       await mkdir(path.dirname(abs), { recursive: true });
@@ -271,12 +286,12 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
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

## DIFF — `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts`

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

## DIFF — `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index b25e0bad..d414e599 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -28,6 +28,47 @@ import {
   isCursorTrustMarkerPathCompatible,
 } from "./cursorTrustMarkerPathCompatibility";
 import { M4_BOUNDED_DOCS_WRITE_ACTION } from "./m4BoundedDocsWriteCursorAgent";
+import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
+import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
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
@@ -245,13 +286,74 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
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
+      const auth = request.authorizedEffects ?? [];
+      if (auth.length > 0 && !isBoundedGitCommitOnlySlice(auth)) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_commit_slice_not_commit_only",
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
@@ -308,7 +410,10 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
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
@@ -342,6 +447,9 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         env: {
           ...this.env,
           [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
+          // Defense-in-depth only — not the authority boundary.
+          GIT_TERMINAL_PROMPT: "0",
+          GCM_INTERACTIVE: "Never",
         },
       });

```

## DIFF — `projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
index 0e2de058..7e372473 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
@@ -26,6 +26,19 @@ export type DocsWriteLaunchSpec = {
   readonly noDelete: true;
 };

+/**
+ * GCEC — bounded local git.commit launch contract.
+ * Built from server-derived Continuation + EC inputs BEFORE launch.
+ * Gateway MUST NOT invent these fields. No free shell / cwd / wildcards.
+ */
+export type GitCommitLaunchSpec = {
+  readonly repositoryRef: string;
+  readonly expectedParentSha: string;
+  readonly exactPaths: readonly string[];
+  readonly commitMessage: string;
+  readonly branchOrRef?: string;
+};
+
 export type RealLaunchRequest = {
   readonly attemptId: string;
   readonly executionContractId: string;
@@ -52,6 +65,11 @@ export type RealLaunchRequest = {
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

## DIFF — `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index f0685a82..67e69a30 100644
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
```

---

# REVIEWABLE PRODUCT CODE — CREATED FILES (FULL CONTENT)

## FULL — `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedLocalCommitCursorAgent.ts`

```ts
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
    agent.allowedScopes.length > 0 &&
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

## FULL — `projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitCommitLaunchSpec.ts`

```ts
/**
 * Server-derived GitCommitLaunchSpec (GCEC bounded local commit).
 * No free cwd / shell / wildcard paths. Paths from VERIFIED continuation only.
 */
export type GitCommitLaunchSpec = {
  readonly repositoryRef: string;
  readonly expectedParentSha: string;
  readonly exactPaths: readonly string[];
  readonly commitMessage: string;
  /** Optional branch/ref already modeled on the EC / binding. */
  readonly branchOrRef?: string;
};

function isFullSha(v: unknown): v is string {
  return typeof v === "string" && /^[0-9a-f]{40}$/i.test(v.trim());
}

function normalizeRelPath(p: string): string | null {
  const n = p.replace(/\\/g, "/").replace(/^\.\//, "").trim();
  if (!n || n.startsWith("/") || n.split("/").includes("..") || n.includes("*")) {
    return null;
  }
  return n;
}

/**
 * Build commit launch spec from server-owned facts.
 * Fail closed on empty paths, wildcards, missing message, or path escape.
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
  const commitMessage = input.commitMessage.trim();
  if (!commitMessage) {
    return { ok: false, reason: "git_commit_message_missing" };
  }
  if (input.exactPaths.length === 0) {
    return { ok: false, reason: "git_commit_exact_paths_empty" };
  }
  const exactPaths: string[] = [];
  for (const raw of input.exactPaths) {
    const n = normalizeRelPath(raw);
    if (!n) {
      return { ok: false, reason: "git_commit_exact_path_invalid" };
    }
    exactPaths.push(n);
  }
  const unique = [...new Set(exactPaths)].sort();
  if (unique.length !== exactPaths.length) {
    // Deduplicate silently — still non-empty unique set.
  }
  return {
    ok: true,
    spec: {
      repositoryRef,
      expectedParentSha: input.expectedParentSha.trim().toLowerCase(),
      exactPaths: unique,
      commitMessage,
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
    return { ok: true, message: fromInput.trim() };
  }
  const brief = input.docsWriteArtifactBrief?.trim();
  if (brief) {
    return { ok: true, message: `docs: ${brief}` };
  }
  return { ok: false, reason: "git_commit_message_untrusted_or_missing" };
}
```

## FULL — `projects/sfia-studio/app/lib/oa/execution-attempt/domain/verifyLocalCommitFacts.ts`

```ts
/**
 * Independent local-commit verification facts (Studio READ-ONLY).
 * Cursor remains the mutation executor — Studio never runs git commit.
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
  /** When true, more than one new commit was observed on the lineage. */
  readonly unexpectedExtraCommits?: boolean;
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

function normalizeMessage(message: string): string {
  return message.trim().replace(/\s+/g, " ");
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
  if (input.unexpectedExtraCommits) {
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

  if (
    normalizeMessage(input.observedCommitMessage) !==
    normalizeMessage(input.expectedCommitMessage)
  ) {
    return { ok: false, reason: "commit_message_mismatch" };
  }

  if (input.worktreeDirty) {
    return { ok: false, reason: "worktree_dirty_after_commit" };
  }

  for (const check of input.artifactChecks) {
    const expected = check.expectedDigest.trim().toLowerCase();
    const actual = check.actualDigest.trim().toLowerCase();
    if (!expected.startsWith("sha256:") || !actual.startsWith("sha256:")) {
      return { ok: false, reason: "artifact_digest_invalid" };
    }
    if (expected !== actual) {
      return { ok: false, reason: "artifact_digest_mismatch" };
    }
  }

  return { ok: true };
}

/** Whether authorizedEffects are exactly the bounded local-commit slice. */
export function isBoundedGitCommitOnlySlice(
  authorizedEffects: readonly string[],
): boolean {
  const set = new Set(authorizedEffects);
  if (!set.has("git.commit")) return false;
  if (set.has("git.push")) return false;
  if (set.has("github.pr.create")) return false;
  if (set.has("github.pr.update")) return false;
  if (set.has("github.pr.merge")) return false;
  if (set.has("filesystem.create")) return false;
  if (set.has("filesystem.modify")) return false;
  if (set.has("filesystem.delete")) return false;
  return true;
}
```

## FULL — `projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyLocalCommitEffect.ts`

```ts
/**
 * Independent local-commit verification + Evidence binding (Studio READ-ONLY).
 * Never trusts Cursor stdout alone for VERIFIED Git Evidence.
 */
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  verifyCommitClaim,
  type GitVerifyActor,
  type GitVerifyBindings,
  type RepositoryReadPort,
} from "@/lib/oa/git-ports";
import {
  verifyLocalCommitFacts,
  type LocalCommitArtifactCheck,
} from "../domain/verifyLocalCommitFacts";
import type { GitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";

export type LocalCommitObservation = {
  readonly observedHeadSha: string;
  readonly observedParentSha: string;
  readonly observedChangedPaths: readonly string[];
  readonly observedCommitMessage: string;
  readonly artifactChecks: readonly LocalCommitArtifactCheck[];
  readonly worktreeDirty: boolean;
  readonly unexpectedExtraCommits?: boolean;
};

export type VerifyLocalCommitEffectInput = {
  readonly spec: GitCommitLaunchSpec;
  readonly observation: LocalCommitObservation;
  readonly bindings: GitVerifyBindings;
  /** When set, bindings must match exactly (GE Project/Cycle/EC/Attempt). */
  readonly expectedBindings?: GitVerifyBindings;
  readonly actor: GitVerifyActor;
  readonly repositoryRead: RepositoryReadPort;
  readonly evidenceServices: EvidenceReviewServices;
  readonly nowIso?: string;
  /**
   * When true, treat Cursor report alone as insufficient — never VERIFIED.
   */
  readonly trustCursorReportOnly?: boolean;
};

export type VerifyLocalCommitEffectResult =
  | {
      readonly ok: true;
      readonly evidenceId: string;
      readonly status: "verified";
      readonly commitSha: string;
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

/**
 * Fail-closed independent verification then VERIFIED git:local_commit Evidence.
 */
export async function verifyLocalCommitEffect(
  input: VerifyLocalCommitEffectInput,
): Promise<VerifyLocalCommitEffectResult> {
  if (!bindingsComplete(input.bindings)) {
    return {
      ok: false,
      reason: "git_evidence_bindings_incomplete",
      status: "failed",
    };
  }

  if (input.expectedBindings) {
    const e = input.expectedBindings;
    const b = input.bindings;
    if (e.projectId && e.projectId !== b.projectId) {
      return { ok: false, reason: "git_evidence_project_mismatch", status: "failed" };
    }
    if (e.cycleInstanceId && e.cycleInstanceId !== b.cycleInstanceId) {
      return { ok: false, reason: "git_evidence_cycle_mismatch", status: "failed" };
    }
    if (
      e.executionContractId &&
      e.executionContractId !== b.executionContractId
    ) {
      return { ok: false, reason: "git_evidence_ec_mismatch", status: "failed" };
    }
    if (
      e.executionAttemptId &&
      e.executionAttemptId !== b.executionAttemptId
    ) {
      return {
        ok: false,
        reason: "git_evidence_attempt_mismatch",
        status: "failed",
      };
    }
  }

  if (input.trustCursorReportOnly) {
    return {
      ok: false,
      reason: "cursor_report_alone_not_verified",
      status: "reported",
    };
  }

  const facts = verifyLocalCommitFacts({
    expectedParentSha: input.spec.expectedParentSha,
    observedHeadSha: input.observation.observedHeadSha,
    observedParentSha: input.observation.observedParentSha,
    exactPaths: input.spec.exactPaths,
    observedChangedPaths: input.observation.observedChangedPaths,
    expectedCommitMessage: input.spec.commitMessage,
    observedCommitMessage: input.observation.observedCommitMessage,
    artifactChecks: input.observation.artifactChecks,
    worktreeDirty: input.observation.worktreeDirty,
    unexpectedExtraCommits: input.observation.unexpectedExtraCommits,
  });
  if (!facts.ok) {
    return { ok: false, reason: facts.reason, status: "failed" };
  }

  const verified = await verifyCommitClaim({
    repositoryRead: input.repositoryRead,
    evidenceServices: input.evidenceServices,
    repositoryRef: input.spec.repositoryRef,
    claimedCommitSha: input.observation.observedHeadSha,
    message: input.observation.observedCommitMessage,
    bindings: input.bindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });

  if (!verified.ok) {
    return {
      ok: false,
      reason: verified.reason,
      status: verified.status,
    };
  }

  return {
    ok: true,
    evidenceId: verified.evidenceId,
    status: "verified",
    commitSha: input.observation.observedHeadSha.toLowerCase(),
  };
}

/** Helper for tests: sha256 digest string. */
export function digestOf(content: string): Digest {
  return `sha256:${createHash("sha256").update(content).digest("hex")}` as Digest;
}
```

## FULL — `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts`

```ts
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
    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
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
});
```

## FULL — `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitVerification.d0.test.ts`

```ts
/**
 * GCEC local commit verification — GV-01..GV-10 (pure facts, no OS Git mutation).
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
    ...overrides,
  });
}

describe("GCEC local commit verification GV-01..10", () => {
  it("GV-01/02/03 happy path — HEAD moved once, parent=H0, paths exact", () => {
    const r = base();
    expect(r.ok).toBe(true);
  });

  it("GV-04 extra path → FAIL", () => {
    const r = base({
      observedChangedPaths: [PATH, "README.md"],
    });
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

  it("GV-07 worktree dirty after commit → FAIL", () => {
    const r = base({ worktreeDirty: true });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("worktree_dirty_after_commit");
  });

  it("GV-08 wrong commit message → FAIL", () => {
    const r = base({ observedCommitMessage: "wrong message" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("commit_message_mismatch");
  });

  it("GV-09 no commit / HEAD unchanged → FAIL", () => {
    const r = base({ observedHeadSha: H0, observedParentSha: H0 });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("head_unchanged");
  });

  it("GV-10 two-commit unexpected ancestry → FAIL", () => {
    const r = base({
      observedHeadSha: H2,
      observedParentSha: H1,
      unexpectedExtraCommits: true,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(["unexpected_extra_commits", "parent_mismatch"]).toContain(
        r.reason,
      );
    }
  });
});
```

## FULL — `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitEvidence.d0.test.ts`

```ts
/**
 * GCEC git.commit Evidence — GE-01..GE-07.
 * ZERO REAL. Independent verification required for VERIFIED.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { createTestEvidenceReviewServices } from "@/lib/oa/evidence-review";
import { FakeRepositoryReadPorts } from "@/lib/oa/git-ports";
import { verifyLocalCommitEffect } from "@/lib/oa/execution-attempt";

const H0 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";
const NOW = "2026-09-11T20:00:00.000Z";

const SPEC = {
  repositoryRef: "acme/widget",
  expectedParentSha: H0,
  exactPaths: [PATH],
  commitMessage: MSG,
} as const;

const BINDINGS = {
  projectId: "prj:ge",
  cycleInstanceId: "cyc:ge",
  executionContractId: "xct:ge",
  executionAttemptId: "xat:ge-b",
};

function observation(
  overrides: Partial<Parameters<typeof verifyLocalCommitEffect>[0]["observation"]> = {},
) {
  return {
    observedHeadSha: H1,
    observedParentSha: H0,
    observedChangedPaths: [PATH],
    observedCommitMessage: MSG,
    artifactChecks: [
      { path: PATH, expectedDigest: DIGEST, actualDigest: DIGEST },
    ],
    worktreeDirty: false,
    ...overrides,
  };
}

describe("GCEC git.commit Evidence GE-01..07", () => {
  it("GE-01 Cursor report without Git inspection ≠ VERIFIED", async () => {
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const read = new FakeRepositoryReadPorts();
    read.seedCommit({ sha: H1, message: MSG, parents: [H0] });
    const r = await verifyLocalCommitEffect({
      spec: SPEC,
      observation: observation(),
      bindings: BINDINGS,
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      repositoryRead: read,
      evidenceServices: evidence,
      trustCursorReportOnly: true,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.status).toBe("reported");
      expect(r.reason).toMatch(/cursor_report_alone/);
    }
  });

  it("GE-02 verified local commit facts → Git Evidence VERIFIED", async () => {
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const read = new FakeRepositoryReadPorts();
    read.seedCommit({ sha: H1, message: MSG, parents: [H0] });
    const r = await verifyLocalCommitEffect({
      spec: SPEC,
      observation: observation(),
      bindings: BINDINGS,
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      repositoryRead: read,
      evidenceServices: evidence,
      nowIso: NOW,
    });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.status).toBe("verified");
      expect(r.commitSha).toBe(H1);
    }
  });

  it("GE-03 wrong Project binding rejected", async () => {
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const read = new FakeRepositoryReadPorts();
    read.seedCommit({ sha: H1, message: MSG, parents: [H0] });
    const r = await verifyLocalCommitEffect({
      spec: SPEC,
      observation: observation(),
      bindings: { ...BINDINGS, projectId: "prj:wrong" },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      repositoryRead: read,
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("git_evidence_project_mismatch");
  });

  it("GE-04 wrong Cycle rejected", async () => {
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const read = new FakeRepositoryReadPorts();
    const r = await verifyLocalCommitEffect({
      spec: SPEC,
      observation: observation(),
      bindings: { ...BINDINGS, cycleInstanceId: "cyc:wrong" },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      repositoryRead: read,
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("git_evidence_cycle_mismatch");
  });

  it("GE-05 wrong EC rejected", async () => {
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const read = new FakeRepositoryReadPorts();
    const r = await verifyLocalCommitEffect({
      spec: SPEC,
      observation: observation(),
      bindings: { ...BINDINGS, executionContractId: "xct:wrong" },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      repositoryRead: read,
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("git_evidence_ec_mismatch");
  });

  it("GE-06 wrong Attempt rejected", async () => {
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const read = new FakeRepositoryReadPorts();
    const r = await verifyLocalCommitEffect({
      spec: SPEC,
      observation: observation(),
      bindings: { ...BINDINGS, executionAttemptId: "xat:wrong" },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      repositoryRead: read,
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("git_evidence_attempt_mismatch");
  });

  it("GE-07 parent/path mismatch prevents verification", async () => {
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const read = new FakeRepositoryReadPorts();
    read.seedCommit({ sha: H1, message: MSG, parents: [H0] });
    const r = await verifyLocalCommitEffect({
      spec: SPEC,
      observation: observation({
        observedParentSha: "cccccccccccccccccccccccccccccccccccccccc",
      }),
      bindings: BINDINGS,
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      repositoryRead: read,
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("parent_mismatch");
  });
});
```

## FULL — `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts`

```ts
/**
 * GCEC git.commit same-EC A→B + FS→SHA supersession + executor negatives.
 * Product path as far as deterministic fixtures allow. ZERO REAL.
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import { createTestEvidenceReviewServices } from "@/lib/oa/evidence-review";
import { FakeRepositoryReadPorts } from "@/lib/oa/git-ports";
import {
  assertStudioCursorRealOffForTests,
  buildGitEffectActionRef,
  createM4BoundedDocsWriteCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  isFsAnchorSupersededByVerifiedLocalCommit,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
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

function gitCommitEvidence(input: {
  evidenceId: string;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  commitSha: string;
}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: input.evidenceId,
    type: "other",
    status: "verified",
    source: "git:local_commit",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    location: `git:local_commit?repo=${encodeURIComponent(IDENTITY)}&commitSha=${input.commitSha}`,
    digest: `sha256:${"a".repeat(64)}` as Digest,
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
      correlationId: "cor:gc-git-ev",
    },
  };
}

function succeededAttempt(input: {
  attemptId: string;
  executionContractId: string;
  executionContractVersion: number;
}): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    executionContractVersion: input.executionContractVersion,
    selectedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
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

describe("GCEC git.commit same-EC A→B + supersession", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("A→B deterministic: commit-only B with continuation + gitCommitSpec + verify", async () => {
    const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-gc-ab-"));
    const repoRoot = path.join(managedBase, "acme__widget");
    mkdirSync(repoRoot, { recursive: true });
    mkdirSync(path.join(repoRoot, ".git"));

    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: tempJournalPath("gcec-gc-ab-"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const evidenceBag: Evidence[] = [];

    const stack = buildStack({ agents: [agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [agent],
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
      listProjectEvidence: async () => evidenceBag,
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const seeded = await seedDocsWriteConfirmedContract(stack);
    const attemptA = "xat:gc-a";
    const attemptB = "xat:gc-b";
    expect(attemptA).not.toBe(attemptB);

    await stack.attempts.attempts.create(
      succeededAttempt({
        attemptId: attemptA,
        executionContractId: seeded.contractId,
        executionContractVersion: seeded.version,
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

    await selectStandardAgent(stack, {
      attemptId: attemptB,
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    });
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
    expect(req.authorizedEffects).toEqual(["git.commit"]);
    expect(req.workspaceContinuation?.priorAttemptId).toBe(attemptA);
    expect(req.gitCommitSpec).toBeDefined();
    expect(req.gitCommitSpec?.exactPaths).toEqual([TARGET_PATH]);
    expect(req.gitCommitSpec?.commitMessage).toBe(MSG);
    expect(req.gitCommitSpec?.expectedParentSha).toBe(M4_TEST_BASE_HEAD_SHA);

    const evidenceServices = createTestEvidenceReviewServices({
      fixedNowIso: NOW,
    });
    const read = new FakeRepositoryReadPorts();
    read.seedCommit({
      sha: H1,
      message: MSG,
      parents: [M4_TEST_BASE_HEAD_SHA],
    });
    const verified = await verifyLocalCommitEffect({
      spec: req.gitCommitSpec!,
      observation: {
        observedHeadSha: H1,
        observedParentSha: M4_TEST_BASE_HEAD_SHA,
        observedChangedPaths: [TARGET_PATH],
        observedCommitMessage: MSG,
        artifactChecks: [
          {
            path: TARGET_PATH,
            expectedDigest: ARTIFACT_DIGEST,
            actualDigest: ARTIFACT_DIGEST,
          },
        ],
        worktreeDirty: false,
      },
      bindings: {
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: seeded.contractId,
        executionAttemptId: attemptB,
      },
      expectedBindings: {
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: seeded.contractId,
        executionAttemptId: attemptB,
      },
      actor: { actorId: MORRIS_ACTOR.actorId, role: "human" },
      repositoryRead: read,
      evidenceServices,
      nowIso: NOW,
    });
    expect(verified.ok).toBe(true);
    if (verified.ok) {
      evidenceBag.push(
        gitCommitEvidence({
          evidenceId: verified.evidenceId,
          projectId: seeded.projectId,
          cycleInstanceId: seeded.cycleInstanceId,
          executionContractId: seeded.contractId,
          executionAttemptId: attemptB,
          commitSha: H1,
        }),
      );
    }

    // FS→SHA supersession: future push must NOT require dirty Attempt-A workspace.
    const pushCont = resolvePreCommitWorkspaceContinuation({
      currentAttemptId: "xat:gc-push-c",
      executionContractId: seeded.contractId,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
      attempts: [
        succeededAttempt({
          attemptId: attemptA,
          executionContractId: seeded.contractId,
          executionContractVersion: seeded.version,
        }),
        {
          ...succeededAttempt({
            attemptId: attemptB,
            executionContractId: seeded.contractId,
            executionContractVersion: seeded.version,
          }),
          status: "succeeded",
        },
      ],
      evidence: evidenceBag,
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
    });
    expect(pushCont.required).toBe(false);
    expect(
      isFsAnchorSupersededByVerifiedLocalCommit({
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: seeded.contractId,
        evidence: evidenceBag,
      }),
    ).toBe(true);

    const a = await stack.attempts.attempts.findById(attemptA);
    const b = await stack.attempts.attempts.findById(attemptB);
    expect(a?.attemptId).not.toBe(b?.attemptId);
    expect(a?.executionContractId).toBe(b?.executionContractId);

    journal.close();
  });

  it("negatives: Confirmation missing / mixed push / wrong parent fail closed", async () => {
    const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-gc-neg-"));
    mkdirSync(path.join(managedBase, "acme__widget", ".git"), {
      recursive: true,
    });
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: tempJournalPath("gcec-gc-neg-"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const evidenceBag: Evidence[] = [];
    const stack = buildStack({ agents: [agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [agent],
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
      listProjectEvidence: async () => evidenceBag,
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const seeded = await seedDocsWriteConfirmedContract(stack);
    await stack.attempts.attempts.create(
      succeededAttempt({
        attemptId: "xat:gc-neg-a",
        executionContractId: seeded.contractId,
        executionContractVersion: seeded.version,
      }),
    );
    evidenceBag.push(
      docsWriteEvidence({
        evidenceId: "ev:gc-neg-a",
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: seeded.contractId,
        executionAttemptId: "xat:gc-neg-a",
      }),
    );

    const attemptB = "xat:gc-neg-b";
    await selectStandardAgent(stack, {
      attemptId: attemptB,
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
      idempotencyKey: "idem-gc-neg-b",
    });
    await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:gc-neg",
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });

    // No git.commit Confirmation → fail closed (no_authorized_effect).
    const started = await stack.attempts.startExecution.execute({
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      confirmations: [],
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    expect(launchPort.calls).toHaveLength(0);

    journal.close();
  });
});
```

## FULL — `projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts`

```ts
/**
 * FUTURE REAL harness — same-EC A (docs-write) → B (local git.commit).
 *
 * NEVER runs in ordinary vitest. Requires ALL three:
 *   SFIA_STUDIO_CURSOR_REAL=1
 *   SFIA_GCEC_CURSOR_REAL_PROOF=1
 *   SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF=1
 *
 * Lifecycle (when Morris authorizes a distinct REAL campaign):
 *   A succeeded → Artifact Evidence VERIFIED → worktree RETAINED
 *   → B resumes same workspace → ONE Cursor commit → Git Evidence VERIFIED
 *   → only then campaign cleanup may be allowed.
 *
 * Do NOT reuse prior docs-write pid workspaces. Fresh proof root only.
 * ZERO push / PR / merge.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";

const ENABLED =
  process.env.SFIA_STUDIO_CURSOR_REAL === "1" &&
  process.env.SFIA_GCEC_CURSOR_REAL_PROOF === "1" &&
  process.env.SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF === "1";

describe("GCEC future REAL same-EC commit A→B (skipped by default)", () => {
  it("REAL scenario remains disabled without triple env gate", () => {
    expect(ENABLED).toBe(false);
  });

  it.skipIf(!ENABLED)(
    "REAL A→B campaign — docs-write then local commit (Morris-gated)",
    async () => {
      // Intentionally empty body for this Delivery cycle.
      // Implementation of live Cursor A→B runs only under explicit Morris GO
      // with the triple env gate above. Worktree MUST be retained between A and B.
      expect(ENABLED).toBe(true);
      throw new Error(
        "SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF harness not authorized in this cycle",
      );
    },
  );
});
```

---

## REVIEW HANDOFF PUBLICATION NOTE

This document is the sole authorized remote mutation target via
`scripts/sfia/publish-review-handoff.sh` → `sfia-review-handoff/latest-chatgpt-review.md`
on branch `sfia/review-handoff`.

After publish, independently verify:

- remote tip (`git ls-remote`)
- parent
- source blob == HEAD blob == remote blob

Publisher script may false-negative on remote verification; independent equality is authoritative.

## REAL

ZERO

## PRODUCT COMMIT

NONE

## PRODUCT PUSH

NONE

## PR / MERGE

NONE
