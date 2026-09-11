# SFIA STUDIO — GCEC
D-GCEC-CONT-01
DETERMINISTIC WORKSPACE CONTINUATION DELIVERY
ZERO REAL — NO PRODUCT COMMIT

## TIMESTAMP
2026-09-11T21:06:16+02:00

## GO MORRIS
D-GCEC-CONT-01 — ADOPTED + BOUNDED DETERMINISTIC DELIVERY CONSUMED

## D-GCEC-CONT-01
**ADOPTED BY MORRIS**

Disposition:
- Option B framed by Option A
- prior-Attempt worktree attach/resume/verify is the operational mechanism
- continuation semantics scoped to the SAME ExecutionContract
- filesystem continuity bounded primarily to the pre-commit window
- no new Product persistence initially
- no Product schema/table/column/migration initially
- no safety-journal-as-Product-registry
- ambiguity fails closed
- verified local commit SHA will later supersede mutable filesystem continuity
- Option E requires a NEW Morris structural decision if derivation-only continuation proves insufficient

## GIT TRUTH BEFORE
- worktree: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- branch: `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- HEAD: `92ad3fd41e065d0ebe76c59b4eedb622715a11e2`
- parent: `290eca6544f93a898fc3920f99142dc6130ba05e`
- origin/main: `a9f6c310a0826d0e5bd6f7264603382a86564db1`
- Product tracked: clean (pre-edit)
- Review Handoff input: `43f1c33c28c8e35136a2daf8813167cf5f6d68a3`

## GIT TRUTH AFTER
- HEAD unchanged: `92ad3fd41e065d0ebe76c59b4eedb622715a11e2`
- Product: uncommitted Delivery candidate dirt only (no commit)
- Product push: NONE
- PR: NONE
- MERGE: NONE

## SOURCES
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
- projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md
- sfia-review-handoff/latest-chatgpt-review.md @ `43f1c33c28c8e35136a2daf8813167cf5f6d68a3` (binding architecture decision pack)

## CONVERGENCE PRE-CHECK
- Build Doctrine: VALIDATED / ACTIVE
- Product Completion: COMPLETE / CLOSED (not reopened)
- Runtime v3: NON ADOPTED
- R2/R3/R6/R8/R12/R13/R15/R18/R19/R21 honored
- Trajectory: D-GCEC-CONT-01 adopted → deterministic foundation (this lot) → ChatGPT Critical Review → bounded local commit if approved → distinct Morris REAL continuation GO

## CYCLE / TYPE / PROFILE
- Cycle: **8 — Delivery / implémentation**
- Type: EVOL
- Profile: CRITICAL

## CURRENT CAPABILITY
Docs-write REAL CLOSED BY PRIOR EVIDENCE at docs-write boundary.
Deterministic same-EC multi-Attempt effect slices (D-GCEC-15) proven.
Protected Git target authority (CR23/24/25) proven.
**No** prior-Attempt filesystem workspace resume before this lot.

## CURRENT GAP
REAL_CONTINUATION_GAP: OPEN (deterministic foundation candidate only; REAL continuation not claimed).
GCEC-PUSH: NOT READY.

## IMPLEMENTATION DESIGN
1. **RealExecutionWorkspacePort** — preserve `prepareWorkspace`; add required `resumeVerifiedWorkspace` (no free path).
2. **StudioGitWorktreeWorkspace.resumeVerifiedWorkspace** — derive path via `workspacePathForAttempt(execRoot, priorAttemptId)`; verify exists, trust-marker, worktree registration, toplevel, remote binding, HEAD, file digests; NEVER worktree add / checkout / copy.
3. **resolvePreCommitWorkspaceContinuation** (pure domain) — continuation window opens only when authorized protected Git + verified FS effects + ≥1 prior same-EC **succeeded** Attempt; unique VERIFIED docs-write artifact Evidence bindings (project/cycle/EC/attempt); 0 eligible → fail closed; >1 → fail closed ambiguity; no latest/first/retry heuristic.
4. **RealLaunchRequest.workspaceContinuation** — optional server-derived descriptor (priorAttemptId, expectedHeadSha, expectedVerifiedFiles); rejects free workspacePath.
5. **StudioCursorRealLaunchGateway** — continuation → resume; else prepare; rejects descriptor carrying workspacePath.
6. **StartExecution** — after AuthorizedExecutionSlice, listByContract + listProjectEvidence → resolver → pass descriptor into launch; fail ATTEMPT_INVALID with continuation_* reasons.
7. **Persistence / schema / journal**: NONE / NONE / not Product registry.

### Continuation uniqueness rule
Eligible prior = same EC ∧ ≠ current ∧ status=succeeded ∧ exactly one matching VERIFIED `execution_attempt:docs_write` artifact Evidence with exact bindings.
Window closed (not required) when no prior same-EC succeeded Attempt exists (avoids inventing obligation from verifiedEffects alone — preserves CR23 progressive harnesses).

### Pre-commit window
Verified mutable filesystem state → future first verified local commit.
Once a local commit SHA is independently VERIFIED, filesystem continuation may be superseded by Git-SHA continuation (future REAL commit campaign; not implemented here).

## FILES MODIFIED
- projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionWorkspacePort.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts

## FILES CREATED
- projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01WorkspaceResume.d0.test.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts

## FRESH WORKSPACE BEHAVIOR
Unchanged: current Attempt → `git worktree add --detach` at baseHeadSha; refuses if path exists (RESUME-10 / FRESH-01).

## RESUME WORKSPACE BEHAVIOR
priorAttemptId → derive path → attach/verify only; no worktree add (RESUME-01…10).

## CONTINUATION CANDIDATE RESOLUTION
See domain helper; fail-closed uniqueness; Evidence is proof not lifecycle store.

## FAIL-CLOSED AMBIGUITY
CONT-07 + StartExecution ATTEMPT_INVALID `continuation_candidate_ambiguous` / `continuation_candidate_none`.

## EVIDENCE BINDING
Exact projectId / cycleInstanceId / executionContractId / executionAttemptId; status=verified; source docs_write; digest sha256:; location relative path.

## RESTART / RECOVERY PROOF
PASS — new StudioGitWorktreeWorkspace + same execRoot + FakeGit registration + durable priorAttemptId; no processRef/worktreeRef; missing path fails closed.

## PRE-COMMIT WINDOW
Implemented minimum only (FS → future first verified local commit). No push/PR/merge workspace orchestration.

## PERSISTENCE
NONE

## SCHEMA/MIGRATION
NONE

## SAFETY JOURNAL
UNCHANGED AS PRODUCT BOUNDARY / not registry

## REAL
ZERO (`SFIA_STUDIO_CURSOR_REAL` unset; `SFIA_GCEC_CURSOR_REAL_PROOF` unset; FakeGit / TestOnly / FakeProcessRunner only)

## PROOF REPO
UNCHANGED — `mcleland147/sfia-gcec-proof-task-manager` @ `32c7c2008197e5c61b32c16479144e9863291358` (no mutation attempted)

## DETERMINISTIC A→B PROOF
PASS — Attempt A succeeded + VERIFIED Evidence; Attempt B same EC; StartExecution emits unique `workspaceContinuation` without free path; EC not falsely completed; no REAL process; no Studio artifact copy.

## NEGATIVE TESTS
PASS — RESUME-04…09; CONT-02…07; CONT-06 StartExecution none; restart missing path; wrong HEAD/digest/unregistered worktree; hostile client workspacePath rejected.

## FOCUSED TESTS
7 files / 125 tests passed (CONT-01 suites + R2 + CR23 + monolithic + D15 negatives)

## FULL VITEST
343 passed | 17 skipped (360 files)
3682 passed | 136 skipped (3818 tests)

## TYPECHECK
PASS

## LINT
PASS (No ESLint warnings or errors)

## BUILD
PASS

## DIFF CHECK
PASS (`git diff --check -- projects/sfia-studio/`)

## PRODUCT HEAD
`92ad3fd41e065d0ebe76c59b4eedb622715a11e2`

## PRODUCT COMMIT
NONE

## PRODUCT PUSH
NONE

## PR
NONE

## MERGE
NONE

## GCEC-CURSOR-REAL
CLOSED BY PRIOR EVIDENCE

## REAL_CONTINUATION_GAP
OPEN — deterministic foundation candidate only

## GCEC-PUSH
NOT READY

## DEBT / EXIT
- TEMP-GCEC-PRPM-01
- TEMP-GCEC-F14-BIND-01
- REAL_CONTINUATION_GAP — exit: ChatGPT Critical Review → Morris may authorize local Product commit of this candidate → distinct Morris GO for ONE REAL same-EC continuation (commit) → only then reassess GCEC-PUSH
- Future: verified commit SHA supersedes FS continuity (not implemented)
- Cleanup of REAL/business worktrees: explicitly NOT implemented this lot (STOP if deletion were mandatory — it was not)

## ANTI-CLAIMS
- NOT REAL_CONTINUATION_GAP CLOSED
- NOT REAL CONTINUATION PROVEN
- NOT GCEC-PUSH READY / AUTHORIZED
- NOT Git commit REAL proven
- NOT END-TO-END REAL
- NOT runtime v3 ADOPTED
- NOT Product commit / push / PR / merge
- NOT proof-repo mutation

## VERDICT
**PASS — GCEC SAME-EC WORKSPACE CONTINUATION DETERMINISTICALLY PROVEN / READY FOR CHATGPT CRITICAL REVIEW**

---

## APPENDIX A — PRODUCT DIFF (modified tracked files)
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts
index ffc51675..a5432454 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts
@@ -2,6 +2,8 @@
  * TEST-ONLY spawn / git doubles — no OS process, no real git.
  */
 import { EventEmitter } from "node:events";
+import { mkdirSync } from "node:fs";
+import path from "node:path";
 import type { ChildProcess } from "node:child_process";
 import type {
   GitCommandResult,
@@ -160,12 +162,16 @@ export class FakeGitCommandRunner implements GitCommandRunner {
   private readonly scripted: GitCommandResult[];
   private headOverride: string | null = null;
   private repoRootOverride: string | null = null;
+  private remoteUrl: string | null = null;
+  private readonly registeredWorktrees = new Set<string>();
   private failOn?: (argv: readonly string[]) => GitCommandResult | null;

   constructor(
     options: {
       baseHeadSha?: string;
       repoRoot?: string;
+      remoteUrl?: string;
+      registeredWorktrees?: string[];
       results?: GitCommandResult[];
       failOn?: (argv: readonly string[]) => GitCommandResult | null;
     } = {},
@@ -173,13 +179,21 @@ export class FakeGitCommandRunner implements GitCommandRunner {
     this.scripted = options.results ?? [];
     this.headOverride = options.baseHeadSha ?? null;
     this.repoRootOverride = options.repoRoot ?? null;
+    this.remoteUrl = options.remoteUrl ?? null;
     this.failOn = options.failOn;
+    for (const p of options.registeredWorktrees ?? []) {
+      this.registeredWorktrees.add(path.resolve(p));
+    }
   }

   setHeadSha(sha: string): void {
     this.headOverride = sha;
   }

+  registerWorktree(workspacePath: string): void {
+    this.registeredWorktrees.add(path.resolve(workspacePath));
+  }
+
   async run(
     argv: readonly string[],
     cwd: string,
@@ -197,11 +211,28 @@ export class FakeGitCommandRunner implements GitCommandRunner {
       return { stdout: "commit\n", stderr: "", exitCode: 0 };
     }
     if (argv[0] === "worktree" && argv[1] === "add") {
+      const wtPath = argv[3] ? path.resolve(String(argv[3])) : "";
+      if (wtPath) {
+        this.registeredWorktrees.add(wtPath);
+        mkdirSync(wtPath, { recursive: true });
+      }
       return { stdout: "", stderr: "", exitCode: 0 };
     }
+    if (argv[0] === "worktree" && argv[1] === "list") {
+      const lines = [...this.registeredWorktrees]
+        .map((p) => `worktree ${p}`)
+        .join("\n");
+      return { stdout: `${lines}\n`, stderr: "", exitCode: 0 };
+    }
+    if (argv[0] === "remote" && argv[1] === "get-url") {
+      if (!this.remoteUrl) {
+        return { stdout: "", stderr: "no_remote", exitCode: 1 };
+      }
+      return { stdout: `${this.remoteUrl}\n`, stderr: "", exitCode: 0 };
+    }
     if (argv[0] === "rev-parse" && argv[1] === "--show-toplevel") {
       return {
-        stdout: `${this.repoRootOverride ?? cwd}\n`,
+        stdout: `${path.resolve(cwd)}\n`,
         stderr: "",
         exitCode: 0,
       };
@@ -217,16 +248,27 @@ export class FakeGitCommandRunner implements GitCommandRunner {
   }
 }

-/** TEST-ONLY workspace port that records prepare calls. */
+/** TEST-ONLY workspace port that records prepare/resume calls. */
 export class FakeRealExecutionWorkspacePort {
   readonly prepares: Array<{ attemptId: string; baseHeadSha: string }> = [];
+  readonly resumes: Array<{
+    priorAttemptId: string;
+    expectedHeadSha: string;
+  }> = [];
   private fail = false;
+  private resumeFail: string | null = null;
   private workspacePath = "/tmp/fake-exec-root/wt-test";
+  private resumePath = "/tmp/fake-exec-root/wt-prior";

   constructor(
-    options: { workspacePath?: string; fail?: boolean } = {},
+    options: {
+      workspacePath?: string;
+      resumePath?: string;
+      fail?: boolean;
+    } = {},
   ) {
     if (options.workspacePath) this.workspacePath = options.workspacePath;
+    if (options.resumePath) this.resumePath = options.resumePath;
     this.fail = options.fail ?? false;
   }

@@ -234,6 +276,10 @@ export class FakeRealExecutionWorkspacePort {
     this.fail = fail;
   }

+  setResumeFail(reason: string | null): void {
+    this.resumeFail = reason;
+  }
+
   async prepareWorkspace(request: {
     attemptId: string;
     baseHeadSha: string;
@@ -247,4 +293,28 @@ export class FakeRealExecutionWorkspacePort {
       verifiedHeadSha: request.baseHeadSha.toLowerCase(),
     };
   }
+
+  async resumeVerifiedWorkspace(request: {
+    currentAttemptId: string;
+    priorAttemptId: string;
+    expectedHeadSha: string;
+    expectedVerifiedFiles: readonly { path: string; digest: string }[];
+  }): Promise<{
+    workspacePath: string;
+    verifiedHeadSha: string;
+    priorAttemptId: string;
+  }> {
+    this.resumes.push({
+      priorAttemptId: request.priorAttemptId,
+      expectedHeadSha: request.expectedHeadSha,
+    });
+    if (this.resumeFail) {
+      throw new Error(this.resumeFail);
+    }
+    return {
+      workspacePath: this.resumePath,
+      verifiedHeadSha: request.expectedHeadSha.toLowerCase(),
+      priorAttemptId: request.priorAttemptId,
+    };
+  }
 }
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index b72c0dae..b94fddb3 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -74,6 +74,8 @@ import {
   resolvedTargetToConfirmationMatch,
 } from "../domain/resolveGitEffectTarget";
 import { deriveExecutableEffectsFromContractRequirements } from "../domain/contractEffectClassification";
+import { resolvePreCommitWorkspaceContinuation } from "../domain/resolvePreCommitWorkspaceContinuation";
+import type { CursorAuthorizedEffectId } from "../domain/cursorExecutionReport";
 import {
   authorityFailureDetail,
   contractGateDetail,
@@ -1070,6 +1072,50 @@ export class StartExecution {
       });
     }

+    // D-GCEC-CONT-01 — pre-commit workspace continuation (server-derived only).
+    let workspaceContinuation:
+      | {
+          priorAttemptId: string;
+          expectedHeadSha: string;
+          expectedVerifiedFiles: readonly {
+            path: string;
+            digest: string;
+          }[];
+        }
+      | undefined;
+    {
+      const peerAttempts = await this.attempts.listByContract(
+        contract.executionContractId,
+      );
+      const evidenceList = this.listProjectEvidence
+        ? await this.listProjectEvidence(contract.projectId)
+        : [];
+      const cont = resolvePreCommitWorkspaceContinuation({
+        currentAttemptId: attempt.attemptId,
+        executionContractId: contract.executionContractId,
+        projectId: contract.projectId,
+        cycleInstanceId: contract.cycleInstanceId ?? "",
+        expectedHeadSha: baseHeadSha,
+        attempts: peerAttempts,
+        evidence: evidenceList,
+        authorizedEffects:
+          authorizedSlice.authorizedEffects as CursorAuthorizedEffectId[],
+        verifiedEffects: request.verifiedEffects,
+      });
+      if (cont.required) {
+        if (!cont.ok) {
+          return fail("ATTEMPT_INVALID", cont.reason, {
+            executionContractId: contract.executionContractId,
+          });
+        }
+        workspaceContinuation = {
+          priorAttemptId: cont.descriptor.priorAttemptId,
+          expectedHeadSha: cont.descriptor.expectedHeadSha,
+          expectedVerifiedFiles: cont.descriptor.expectedVerifiedFiles,
+        };
+      }
+    }
+
     let launch;
     try {
       launch = await this.realLaunchPort.launch({
@@ -1097,6 +1143,9 @@ export class StartExecution {
           blockedEffects: authorizedSlice.blockedEffects,
           reasons: authorizedSlice.reasons,
         },
+        ...(workspaceContinuation
+          ? { workspaceContinuation }
+          : {}),
       });
     } catch {
       return this.failRealLaunch({
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index 7d9073e2..aa6afc77 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -48,6 +48,7 @@ export * from "./domain/cursorExecutionReport";
 export * from "./domain/authorizedExecutionSlice";
 export * from "./domain/contractEffectClassification";
 export * from "./domain/resolveGitEffectTarget";
+export * from "./domain/resolvePreCommitWorkspaceContinuation";
 export { verifyWorkspaceFileEffects } from "./application/verifyWorkspaceFileEffects";
 export type { WorkspaceFileVerificationResult } from "./application/verifyWorkspaceFileEffects";

diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index 4e2af8ae..b25e0bad 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -167,17 +167,59 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {

     let workspacePath: string;
     try {
-      const prepared = await this.workspacePort.prepareWorkspace({
-        attemptId: request.attemptId,
-        baseHeadSha,
-        ...(request.managedRepoRoot
-          ? { managedRepoRoot: request.managedRepoRoot }
-          : {}),
-        ...(request.repositoryBinding
-          ? { repositoryBinding: request.repositoryBinding }
-          : {}),
-      });
-      workspacePath = prepared.workspacePath;
+      const continuation = request.workspaceContinuation;
+      if (continuation) {
+        if (
+          typeof continuation.priorAttemptId !== "string" ||
+          !continuation.priorAttemptId.trim() ||
+          typeof (continuation as { workspacePath?: unknown }).workspacePath ===
+            "string"
+        ) {
+          return {
+            outcome: "reject",
+            gatewayId: this.gatewayId,
+            attemptId: request.attemptId,
+            reason: "REAL_WORKSPACE_INVALID:continuation_descriptor_invalid",
+            realProcessInvoked: false,
+            detailCode: "REAL_WORKSPACE_INVALID",
+          };
+        }
+        if (!this.workspacePort.resumeVerifiedWorkspace) {
+          return {
+            outcome: "reject",
+            gatewayId: this.gatewayId,
+            attemptId: request.attemptId,
+            reason: "REAL_WORKSPACE_INVALID:resume_unsupported",
+            realProcessInvoked: false,
+            detailCode: "REAL_WORKSPACE_INVALID",
+          };
+        }
+        const resumed = await this.workspacePort.resumeVerifiedWorkspace({
+          currentAttemptId: request.attemptId,
+          priorAttemptId: continuation.priorAttemptId,
+          expectedHeadSha: continuation.expectedHeadSha,
+          expectedVerifiedFiles: continuation.expectedVerifiedFiles,
+          ...(request.managedRepoRoot
+            ? { managedRepoRoot: request.managedRepoRoot }
+            : {}),
+          ...(request.repositoryBinding
+            ? { repositoryBinding: request.repositoryBinding }
+            : {}),
+        });
+        workspacePath = resumed.workspacePath;
+      } else {
+        const prepared = await this.workspacePort.prepareWorkspace({
+          attemptId: request.attemptId,
+          baseHeadSha,
+          ...(request.managedRepoRoot
+            ? { managedRepoRoot: request.managedRepoRoot }
+            : {}),
+          ...(request.repositoryBinding
+            ? { repositoryBinding: request.repositoryBinding }
+            : {}),
+        });
+        workspacePath = prepared.workspacePath;
+      }
     } catch (err) {
       const message = err instanceof Error ? err.message : "workspace_failed";
       return {
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts
index 53052836..baef6075 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts
@@ -1,17 +1,22 @@
 /**
- * StudioGitWorktreeWorkspace — fail-closed isolated Git worktree prep (M4 R2).
+ * StudioGitWorktreeWorkspace — fail-closed isolated Git worktree prep (M4 R2)
+ * + D-GCEC-CONT-01 prior-Attempt resume/attach/verify (pre-commit window).
  *
  * Injectable GitCommandRunner; production default spawn(shell:false).
  * Tests MUST inject FakeGitCommandRunner — never run real git worktree in REAL-OFF.
+ *
+ * Resume NEVER: worktree add, checkout, reset, copy, stage, or commit.
  */
 import { createHash } from "node:crypto";
-import { existsSync } from "node:fs";
+import { existsSync, readFileSync } from "node:fs";
 import path from "node:path";
 import { spawn as nodeSpawn } from "node:child_process";
 import type {
   PrepareWorkspaceRequest,
   PrepareWorkspaceResult,
   RealExecutionWorkspacePort,
+  ResumeVerifiedWorkspaceRequest,
+  ResumeVerifiedWorkspaceResult,
 } from "../ports/realExecutionWorkspacePort";
 import { assertCursorTrustMarkerPathCompatible } from "./cursorTrustMarkerPathCompatibility";

@@ -171,6 +176,135 @@ export class StudioGitWorktreeWorkspace implements RealExecutionWorkspacePort {

     return { workspacePath, verifiedHeadSha };
   }
+
+  /**
+   * D-GCEC-CONT-01 — derive path from priorAttemptId + execRoot; verify only.
+   */
+  async resumeVerifiedWorkspace(
+    request: ResumeVerifiedWorkspaceRequest,
+  ): Promise<ResumeVerifiedWorkspaceResult> {
+    if (!request.priorAttemptId?.trim()) {
+      throw new Error("REAL_WORKSPACE_INVALID:prior_attempt_id_required");
+    }
+    if (!isFullGitSha(request.expectedHeadSha)) {
+      throw new Error("REAL_WORKSPACE_INVALID:expected_head_sha_invalid");
+    }
+    const expectedHeadSha = request.expectedHeadSha.toLowerCase();
+
+    const repoRoot = request.managedRepoRoot
+      ? path.resolve(request.managedRepoRoot)
+      : this.repoRoot;
+
+    const workspacePath = workspacePathForAttempt(
+      this.execRoot,
+      request.priorAttemptId,
+    );
+    if (
+      workspacePath !== this.execRoot &&
+      !workspacePath.startsWith(this.execRoot + path.sep)
+    ) {
+      throw new Error("REAL_WORKSPACE_INVALID:workspace_outside_exec_root");
+    }
+    if (!existsSync(workspacePath)) {
+      throw new Error("REAL_WORKSPACE_INVALID:resume_workspace_missing");
+    }
+    assertCursorTrustMarkerPathCompatible(workspacePath);
+
+    // Registered worktree of expected managed repository (not basename trust).
+    const list = await this.gitRunner.run(
+      ["worktree", "list", "--porcelain"],
+      repoRoot,
+    );
+    if (list.exitCode !== 0) {
+      throw new Error("REAL_WORKSPACE_INVALID:worktree_list_failed");
+    }
+    const registered = porcelainWorktreePaths(list.stdout).some(
+      (p) => path.resolve(p) === workspacePath,
+    );
+    if (!registered) {
+      throw new Error("REAL_WORKSPACE_INVALID:worktree_unregistered");
+    }
+
+    const toplevel = await this.gitRunner.run(
+      ["rev-parse", "--show-toplevel"],
+      workspacePath,
+    );
+    if (toplevel.exitCode !== 0) {
+      throw new Error("REAL_WORKSPACE_INVALID:toplevel_missing");
+    }
+    const top = path.resolve(toplevel.stdout.trim());
+    if (top !== workspacePath) {
+      throw new Error("REAL_WORKSPACE_INVALID:toplevel_mismatch");
+    }
+
+    if (request.repositoryBinding) {
+      const remote = await this.gitRunner.run(
+        ["remote", "get-url", "origin"],
+        workspacePath,
+      );
+      if (remote.exitCode !== 0) {
+        throw new Error("REAL_WORKSPACE_INVALID:origin_remote_missing");
+      }
+      const actual = normalizeGitRemoteUrl(remote.stdout.trim());
+      const expectedFromUrl = normalizeGitRemoteUrl(
+        request.repositoryBinding.remoteUrl,
+      );
+      const expectedFromIdentity = normalizeGitRemoteUrl(
+        `https://github.com/${request.repositoryBinding.identity}.git`,
+      );
+      if (actual !== expectedFromUrl && actual !== expectedFromIdentity) {
+        throw new Error("REAL_WORKSPACE_INVALID:origin_remote_mismatch");
+      }
+    }
+
+    const head = await this.gitRunner.run(["rev-parse", "HEAD"], workspacePath);
+    if (head.exitCode !== 0) {
+      throw new Error("REAL_WORKSPACE_INVALID:head_rev_parse_failed");
+    }
+    const verifiedHeadSha = head.stdout.trim().toLowerCase();
+    if (verifiedHeadSha !== expectedHeadSha) {
+      throw new Error("REAL_WORKSPACE_INVALID:head_mismatch");
+    }
+
+    for (const file of request.expectedVerifiedFiles) {
+      const rel = file.path.replace(/\\/g, "/").replace(/^\.\//, "").trim();
+      if (!rel || rel.includes("..") || path.isAbsolute(rel)) {
+        throw new Error("REAL_WORKSPACE_INVALID:expected_file_path_invalid");
+      }
+      const abs = path.join(workspacePath, rel);
+      if (!abs.startsWith(workspacePath + path.sep) && abs !== workspacePath) {
+        throw new Error("REAL_WORKSPACE_INVALID:expected_file_outside_workspace");
+      }
+      if (!existsSync(abs)) {
+        throw new Error("REAL_WORKSPACE_INVALID:expected_file_missing");
+      }
+      const expectedDigest = file.digest.trim().toLowerCase();
+      if (!expectedDigest.startsWith("sha256:")) {
+        throw new Error("REAL_WORKSPACE_INVALID:expected_digest_invalid");
+      }
+      const buf = readFileSync(abs);
+      const actualDigest = `sha256:${createHash("sha256").update(buf).digest("hex")}`;
+      if (actualDigest !== expectedDigest) {
+        throw new Error("REAL_WORKSPACE_INVALID:expected_digest_mismatch");
+      }
+    }
+
+    return {
+      workspacePath,
+      verifiedHeadSha,
+      priorAttemptId: request.priorAttemptId,
+    };
+  }
+}
+
+function porcelainWorktreePaths(porcelain: string): string[] {
+  const out: string[] = [];
+  for (const line of porcelain.split("\n")) {
+    if (line.startsWith("worktree ")) {
+      out.push(line.slice("worktree ".length).trim());
+    }
+  }
+  return out;
 }

 function normalizeGitRemoteUrl(url: string): string {
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
index d4ff7e5e..0e2de058 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
@@ -74,6 +74,19 @@ export type RealLaunchRequest = {
     blockedEffects: readonly string[];
     reasons?: readonly string[];
   };
+  /**
+   * D-GCEC-CONT-01 — server-derived pre-commit workspace continuation.
+   * Produced only by StartExecution from Attempt/Evidence Product truth.
+   * MUST NOT contain a free workspace path / cwd.
+   */
+  readonly workspaceContinuation?: {
+    readonly priorAttemptId: string;
+    readonly expectedHeadSha: string;
+    readonly expectedVerifiedFiles: readonly {
+      readonly path: string;
+      readonly digest: string;
+    }[];
+  };
 };

 export type RealLaunchAck = {
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionWorkspacePort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionWorkspacePort.ts
index a9392d4a..92127521 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionWorkspacePort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionWorkspacePort.ts
@@ -1,8 +1,9 @@
 /**
- * RealExecutionWorkspacePort — OA-owned isolated worktree preparation (M4 R2).
+ * RealExecutionWorkspacePort — OA-owned isolated worktree preparation (M4 R2)
+ * + D-GCEC-CONT-01 prior-Attempt resume/attach/verify (pre-commit window).
  *
  * Server-side roots only; callers supply attemptId + contract-bound baseHeadSha.
- * Never accepts a free client cwd.
+ * Never accepts a free client cwd / workspace path.
  */

 export type PrepareWorkspaceRepositoryBinding = {
@@ -27,8 +28,44 @@ export type PrepareWorkspaceResult = {
   readonly verifiedHeadSha: string;
 };

+/** Verified file fact from VERIFIED Artifact Evidence — not a free path grant. */
+export type ResumeVerifiedFileFact = {
+  readonly path: string;
+  /** Canonical digest `sha256:<hex>` from Evidence. */
+  readonly digest: string;
+};
+
+/**
+ * D-GCEC-CONT-01 — resume prior Attempt worktree.
+ * Path is ALWAYS derived server-side from execRoot + priorAttemptId.
+ * Never includes a free workspacePath / cwd.
+ */
+export type ResumeVerifiedWorkspaceRequest = {
+  readonly currentAttemptId: string;
+  readonly priorAttemptId: string;
+  /** Expected Git HEAD of the mutable pre-commit worktree (usually EC baseHeadSha). */
+  readonly expectedHeadSha: string;
+  readonly expectedVerifiedFiles: readonly ResumeVerifiedFileFact[];
+  readonly repositoryBinding?: PrepareWorkspaceRepositoryBinding;
+  readonly managedRepoRoot?: string;
+};
+
+export type ResumeVerifiedWorkspaceResult = {
+  readonly workspacePath: string;
+  readonly verifiedHeadSha: string;
+  readonly priorAttemptId: string;
+};
+
 export interface RealExecutionWorkspacePort {
   prepareWorkspace(
     request: PrepareWorkspaceRequest,
   ): Promise<PrepareWorkspaceResult>;
+
+  /**
+   * D-GCEC-CONT-01 — attach/verify an existing prior-Attempt worktree.
+   * MUST NOT create a new worktree, checkout, reset, copy, or mutate files.
+   */
+  resumeVerifiedWorkspace(
+    request: ResumeVerifiedWorkspaceRequest,
+  ): Promise<ResumeVerifiedWorkspaceResult>;
 }

```

## APPENDIX B — FULL CONTENT (created Product files)

### `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts`

```typescript
/**
 * D-GCEC-CONT-01 — resolve unique prior Attempt for pre-commit workspace continuation.
 *
 * Pure Product-truth resolver: Attempt history + VERIFIED Evidence bindings.
 * No free workspace path. No heuristic latest/first selection under ambiguity.
 * Safety journal is never consulted.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
import type { ExecutionAttempt } from "./types";
import type { ResumeVerifiedFileFact } from "../ports/realExecutionWorkspacePort";

const FS_EFFECTS = new Set<CursorAuthorizedEffectId>([
  "filesystem.create",
  "filesystem.modify",
]);

const PROTECTED_GIT_EFFECTS = new Set<CursorAuthorizedEffectId>([
  "git.commit",
  "git.push",
  "github.pr.create",
  "github.pr.update",
  "github.pr.merge",
]);

export type WorkspaceContinuationDescriptor = {
  readonly priorAttemptId: string;
  readonly expectedHeadSha: string;
  readonly expectedVerifiedFiles: readonly ResumeVerifiedFileFact[];
  readonly evidenceId: string;
};

export type ResolvePreCommitWorkspaceContinuationInput = {
  readonly currentAttemptId: string;
  readonly executionContractId: string;
  readonly projectId: string;
  readonly cycleInstanceId: string;
  /** Contract-bound base HEAD — pre-commit dirty worktree remains at this SHA. */
  readonly expectedHeadSha: string;
  readonly attempts: readonly ExecutionAttempt[];
  readonly evidence: readonly Evidence[];
  readonly authorizedEffects: readonly CursorAuthorizedEffectId[];
  readonly verifiedEffects?: readonly CursorAuthorizedEffectId[];
};

export type ResolvePreCommitWorkspaceContinuationResult =
  | { readonly required: false; readonly descriptor: null }
  | {
      readonly required: true;
      readonly ok: true;
      readonly descriptor: WorkspaceContinuationDescriptor;
    }
  | {
      readonly required: true;
      readonly ok: false;
      readonly reason:
        | "continuation_candidate_none"
        | "continuation_candidate_ambiguous"
        | "continuation_evidence_incomplete";
      readonly candidateAttemptIds?: readonly string[];
    };

export function preCommitWorkspaceContinuationRequired(input: {
  readonly authorizedEffects: readonly CursorAuthorizedEffectId[];
  readonly verifiedEffects?: readonly CursorAuthorizedEffectId[];
}): boolean {
  const verified = new Set(input.verifiedEffects ?? []);
  const hasVerifiedFs = [...FS_EFFECTS].some((e) => verified.has(e));
  const hasAuthorizedGit = input.authorizedEffects.some((e) =>
    PROTECTED_GIT_EFFECTS.has(e),
  );
  return hasVerifiedFs && hasAuthorizedGit;
}

function isDocsWriteArtifactEvidence(ev: Evidence): boolean {
  return (
    ev.type === "artifact" &&
    ev.status === "verified" &&
    typeof ev.location === "string" &&
    ev.location.trim().length > 0 &&
    typeof ev.digest === "string" &&
    ev.digest.trim().toLowerCase().startsWith("sha256:") &&
    (ev.source === "execution_attempt:docs_write" ||
      ev.source.startsWith("execution_attempt:docs_write"))
  );
}

/**
 * Resolve unique prior succeeded Attempt whose VERIFIED docs-write Evidence
 * matches Project / Cycle / EC / Attempt bindings.
 *
 * Continuation is required only when the authorized slice still needs protected
 * Git AND verified FS effects are claimed AND at least one prior same-EC
 * succeeded Attempt exists (pre-commit workspace lineage). With no prior
 * Attempt, verifiedEffects alone do not invent a continuation obligation
 * (CR23 / progressive-slice harnesses may assert FS verified without Attempt A).
 */
export function resolvePreCommitWorkspaceContinuation(
  input: ResolvePreCommitWorkspaceContinuationInput,
): ResolvePreCommitWorkspaceContinuationResult {
  if (
    !preCommitWorkspaceContinuationRequired({
      authorizedEffects: input.authorizedEffects,
      verifiedEffects: input.verifiedEffects,
    })
  ) {
    return { required: false, descriptor: null };
  }

  const succeededSameEc = input.attempts.filter(
    (a) =>
      a.attemptId !== input.currentAttemptId &&
      a.executionContractId === input.executionContractId &&
      a.status === "succeeded",
  );

  if (succeededSameEc.length === 0) {
    return { required: false, descriptor: null };
  }

  type Candidate = {
    attemptId: string;
    evidenceId: string;
    path: string;
    digest: string;
  };
  const candidates: Candidate[] = [];

  for (const attempt of succeededSameEc) {
    const matching = input.evidence.filter(
      (ev) =>
        isDocsWriteArtifactEvidence(ev) &&
        ev.bindings.projectId === input.projectId &&
        ev.bindings.cycleInstanceId === input.cycleInstanceId &&
        ev.bindings.executionContractId === input.executionContractId &&
        ev.bindings.executionAttemptId === attempt.attemptId,
    );
    if (matching.length === 0) continue;
    if (matching.length > 1) {
      return {
        required: true,
        ok: false,
        reason: "continuation_candidate_ambiguous",
        candidateAttemptIds: [attempt.attemptId],
      };
    }
    const ev = matching[0]!;
    candidates.push({
      attemptId: attempt.attemptId,
      evidenceId: ev.evidenceId,
      path: String(ev.location).trim(),
      digest: String(ev.digest).trim().toLowerCase(),
    });
  }

  if (candidates.length === 0) {
    return {
      required: true,
      ok: false,
      reason: "continuation_candidate_none",
    };
  }
  if (candidates.length > 1) {
    return {
      required: true,
      ok: false,
      reason: "continuation_candidate_ambiguous",
      candidateAttemptIds: candidates.map((c) => c.attemptId),
    };
  }

  const only = candidates[0]!;
  if (!only.path || !only.digest.startsWith("sha256:")) {
    return {
      required: true,
      ok: false,
      reason: "continuation_evidence_incomplete",
    };
  }

  return {
    required: true,
    ok: true,
    descriptor: {
      priorAttemptId: only.attemptId,
      expectedHeadSha: input.expectedHeadSha.toLowerCase(),
      expectedVerifiedFiles: [
        { path: only.path, digest: only.digest },
      ],
      evidenceId: only.evidenceId,
    },
  };
}

```

### `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01WorkspaceResume.d0.test.ts`

```typescript
/**
 * D-GCEC-CONT-01 — workspace prepare/resume deterministic proofs (REAL OFF).
 * FakeGitCommandRunner only — never OS git / Cursor.
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
  StudioCursorRealLaunchGateway,
  StudioGitWorktreeWorkspace,
  workspacePathForAttempt,
} from "@/lib/oa/execution-attempt";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import {
  FakeGitCommandRunner,
  FakeRealExecutionWorkspacePort,
} from "./support/fakeSpawnAndGit";
import { M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";

const ARTIFACT_REL = "docs/functional-design.md";
const ARTIFACT_BODY = "# Cont-01 fixture\n";
const ARTIFACT_DIGEST = `sha256:${createHash("sha256")
  .update(ARTIFACT_BODY)
  .digest("hex")}`;
const REMOTE = "https://github.com/acme/widget.git";
const IDENTITY = "acme/widget";

function tempRoots(prefix: string): {
  root: string;
  repoRoot: string;
  execRoot: string;
} {
  const root = mkdtempSync(path.join(os.tmpdir(), prefix));
  const repoRoot = path.join(root, "repo");
  const execRoot = path.join(root, "exec");
  mkdirSync(repoRoot);
  mkdirSync(execRoot);
  return { root, repoRoot, execRoot };
}

function writeVerifiedArtifact(workspacePath: string): void {
  const abs = path.join(workspacePath, ARTIFACT_REL);
  mkdirSync(path.dirname(abs), { recursive: true });
  writeFileSync(abs, ARTIFACT_BODY, "utf8");
}

describe("D-GCEC-CONT-01 workspace resume (REAL OFF)", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
    expect(process.env.SFIA_GCEC_CURSOR_REAL_PROOF).toBeUndefined();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("FRESH-01 fresh Attempt creates its own workspace (worktree add)", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-fresh-");
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    const attemptId = "xat:cont-fresh-01";
    const prepared = await ws.prepareWorkspace({
      attemptId,
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    expect(prepared.workspacePath).toBe(
      workspacePathForAttempt(execRoot, attemptId),
    );
    expect(prepared.verifiedHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
    expect(
      git.calls.some(
        (c) => c.argv[0] === "worktree" && c.argv[1] === "add",
      ),
    ).toBe(true);
  });

  it("RESUME-01 priorAttemptId derives previous workspace path", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r01-");
    const priorAttemptId = "xat:cont-prior-01";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    writeVerifiedArtifact(expected);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
      registeredWorktrees: [expected],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    const resumed = await ws.resumeVerifiedWorkspace({
      currentAttemptId: "xat:cont-current-01",
      priorAttemptId,
      expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
      expectedVerifiedFiles: [{ path: ARTIFACT_REL, digest: ARTIFACT_DIGEST }],
      repositoryBinding: {
        identity: IDENTITY,
        remoteUrl: REMOTE,
        defaultBranch: "main",
      },
    });
    expect(resumed.workspacePath).toBe(expected);
    expect(resumed.priorAttemptId).toBe(priorAttemptId);
  });

  it("RESUME-02 resume does NOT call git worktree add", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r02-");
    const priorAttemptId = "xat:cont-prior-02";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    writeVerifiedArtifact(expected);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
      registeredWorktrees: [expected],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await ws.resumeVerifiedWorkspace({
      currentAttemptId: "xat:cont-current-02",
      priorAttemptId,
      expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
      expectedVerifiedFiles: [{ path: ARTIFACT_REL, digest: ARTIFACT_DIGEST }],
      repositoryBinding: {
        identity: IDENTITY,
        remoteUrl: REMOTE,
        defaultBranch: "main",
      },
    });
    expect(
      git.calls.some(
        (c) => c.argv[0] === "worktree" && c.argv[1] === "add",
      ),
    ).toBe(false);
  });

  it("RESUME-03 valid registered worktree + matching HEAD succeeds", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r03-");
    const priorAttemptId = "xat:cont-prior-03";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    writeVerifiedArtifact(expected);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
      registeredWorktrees: [expected],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    const resumed = await ws.resumeVerifiedWorkspace({
      currentAttemptId: "xat:cont-current-03",
      priorAttemptId,
      expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
      expectedVerifiedFiles: [{ path: ARTIFACT_REL, digest: ARTIFACT_DIGEST }],
      repositoryBinding: {
        identity: IDENTITY,
        remoteUrl: REMOTE,
        defaultBranch: "main",
      },
    });
    expect(resumed.verifiedHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
  });

  it("RESUME-04 missing path fails closed", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r04-");
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.resumeVerifiedWorkspace({
        currentAttemptId: "xat:cont-current-04",
        priorAttemptId: "xat:cont-prior-missing",
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: ARTIFACT_REL, digest: ARTIFACT_DIGEST },
        ],
      }),
    ).rejects.toThrow(/resume_workspace_missing/);
  });

  it("RESUME-05 unregistered / wrong-repository worktree fails closed", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r05-");
    const priorAttemptId = "xat:cont-prior-05";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    writeVerifiedArtifact(expected);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
      registeredWorktrees: [],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.resumeVerifiedWorkspace({
        currentAttemptId: "xat:cont-current-05",
        priorAttemptId,
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: ARTIFACT_REL, digest: ARTIFACT_DIGEST },
        ],
        repositoryBinding: {
          identity: IDENTITY,
          remoteUrl: REMOTE,
          defaultBranch: "main",
        },
      }),
    ).rejects.toThrow(/worktree_unregistered/);
  });

  it("RESUME-06 wrong HEAD fails closed", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r06-");
    const priorAttemptId = "xat:cont-prior-06";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    writeVerifiedArtifact(expected);
    const git = new FakeGitCommandRunner({
      baseHeadSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      remoteUrl: REMOTE,
      registeredWorktrees: [expected],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.resumeVerifiedWorkspace({
        currentAttemptId: "xat:cont-current-06",
        priorAttemptId,
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: ARTIFACT_REL, digest: ARTIFACT_DIGEST },
        ],
        repositoryBinding: {
          identity: IDENTITY,
          remoteUrl: REMOTE,
          defaultBranch: "main",
        },
      }),
    ).rejects.toThrow(/head_mismatch/);
  });

  it("RESUME-07 expected verified file missing fails closed", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r07-");
    const priorAttemptId = "xat:cont-prior-07";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
      registeredWorktrees: [expected],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.resumeVerifiedWorkspace({
        currentAttemptId: "xat:cont-current-07",
        priorAttemptId,
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: ARTIFACT_REL, digest: ARTIFACT_DIGEST },
        ],
        repositoryBinding: {
          identity: IDENTITY,
          remoteUrl: REMOTE,
          defaultBranch: "main",
        },
      }),
    ).rejects.toThrow(/expected_file_missing/);
  });

  it("RESUME-08 digest mismatch fails closed", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r08-");
    const priorAttemptId = "xat:cont-prior-08";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    writeVerifiedArtifact(expected);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
      registeredWorktrees: [expected],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.resumeVerifiedWorkspace({
        currentAttemptId: "xat:cont-current-08",
        priorAttemptId,
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          {
            path: ARTIFACT_REL,
            digest: `sha256:${"0".repeat(64)}`,
          },
        ],
        repositoryBinding: {
          identity: IDENTITY,
          remoteUrl: REMOTE,
          defaultBranch: "main",
        },
      }),
    ).rejects.toThrow(/expected_digest_mismatch/);
  });

  it("RESUME-09 no caller-controlled arbitrary cwd/path accepted", async () => {
    const workspace = new FakeRealExecutionWorkspacePort({
      resumePath: "/tmp/fake-exec-root/wt-prior",
    });
    const runner = new FakeProcessRunner();
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: workspace,
      env: {
        ...process.env,
        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
      },
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const hostile = {
      attemptId: "xat:cont-r09",
      executionContractId: "xct:cont",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
      adapterRef: gateway.gatewayId,
      correlationId: "cor:r09",
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      timeoutMs: 15 * 60 * 1000,
      workspaceContinuation: {
        priorAttemptId: "xat:prior",
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: ARTIFACT_REL, digest: ARTIFACT_DIGEST },
        ],
        workspacePath: "/hostile/client/path",
      },
    };
    const result = await gateway.launch(hostile as never);
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toMatch(/continuation_descriptor_invalid/);
    }
    expect(workspace.resumes).toHaveLength(0);
    expect(workspace.prepares).toHaveLength(0);
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
  });

  it("RESUME-10 fresh prepare still refuses existing current-Attempt path", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r10-");
    const attemptId = "xat:cont-exists";
    const existing = workspacePathForAttempt(execRoot, attemptId);
    mkdirSync(existing, { recursive: true });
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.prepareWorkspace({
        attemptId,
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      }),
    ).rejects.toThrow(/workspace_path_exists/);
  });

  it("gateway continuation uses resume not prepare (gateway-local REAL flag)", async () => {
    const resumePath = "/tmp/fake-exec-root/wt-prior-gw";
    const workspace = new FakeRealExecutionWorkspacePort({ resumePath });
    const runner = new FakeProcessRunner();
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: workspace,
      env: {
        ...process.env,
        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
      },
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const result = await gateway.launch({
      attemptId: "xat:cont-gw",
      executionContractId: "xct:cont",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4.cursor.bounded_readonly",
      adapterRef: gateway.gatewayId,
      correlationId: "cor:gw",
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      timeoutMs: 15 * 60 * 1000,
      workspaceContinuation: {
        priorAttemptId: "xat:prior-gw",
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: ARTIFACT_REL, digest: ARTIFACT_DIGEST },
        ],
      },
    });
    expect(result.outcome).toBe("ack");
    expect(workspace.resumes).toHaveLength(1);
    expect(workspace.prepares).toHaveLength(0);
    expect(workspace.resumes[0]?.priorAttemptId).toBe("xat:prior-gw");
    expect(runner.calls[0]?.cwd).toBe(resumePath);
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts`

```typescript
/**
 * D-GCEC-CONT-01 — continuation candidate resolution (pure Product truth).
 * ZERO REAL. No heuristic latest/first under ambiguity.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  preCommitWorkspaceContinuationRequired,
  resolvePreCommitWorkspaceContinuation,
} from "@/lib/oa/execution-attempt";

const HEAD = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const PROJECT = "prj:cont";
const CYCLE = "cyc:cont-001";
const EC = "xct:cont-001";
const PATH = "docs/functional-design.md";

function attempt(
  partial: Partial<ExecutionAttempt> & { attemptId: string },
): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: partial.attemptId,
    executionContractId: partial.executionContractId ?? EC,
    executionContractVersion: partial.executionContractVersion ?? 1,
    selectedAgentRef:
      partial.selectedAgentRef ?? "agt:m4.cursor.bounded_docs_write",
    status: partial.status ?? "succeeded",
    idempotencyKey: partial.idempotencyKey ?? `idem:${partial.attemptId}`,
    correlationId: partial.correlationId ?? `cor:${partial.attemptId}`,
    version: partial.version ?? 2,
    createdAt: partial.createdAt ?? "2026-09-11T10:00:00.000Z",
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${partial.attemptId}`,
      actor: { actorId: "actor:test", role: "system" },
      source: "system",
      timestamp: "2026-09-11T10:00:00.000Z",
      correlationId: "cor:test",
    },
    launchedAt: partial.launchedAt ?? "2026-09-11T10:01:00.000Z",
    startedAt: partial.startedAt ?? "2026-09-11T10:01:00.000Z",
    completedAt: partial.completedAt ?? "2026-09-11T10:02:00.000Z",
    resultRef: partial.resultRef ?? `res:${partial.attemptId}`,
    retryOfAttemptId: partial.retryOfAttemptId,
    retryIndex: partial.retryIndex,
    maxRetriesBudget: partial.maxRetriesBudget,
  };
}

function evidence(
  partial: Partial<Evidence> & { evidenceId: string },
): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: partial.evidenceId,
    type: partial.type ?? "artifact",
    status: partial.status ?? "verified",
    source: partial.source ?? "execution_attempt:docs_write",
    sourceKind: partial.sourceKind ?? "external",
    classification: partial.classification ?? "internal",
    storageMode: partial.storageMode ?? "metadata_only",
    bindings: partial.bindings ?? {
      projectId: PROJECT,
      cycleInstanceId: CYCLE,
      executionContractId: EC,
      executionAttemptId: "xat:a",
    },
    createdAt: partial.createdAt ?? "2026-09-11T10:00:00.000Z",
    updatedAt: partial.updatedAt ?? "2026-09-11T10:00:00.000Z",
    version: partial.version ?? 1,
    location: partial.location ?? PATH,
    digest: partial.digest ?? DIGEST,
    producedAt: "2026-09-11T10:00:00.000Z",
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:ev",
      actor: { actorId: "actor:test", role: "system" },
      source: "system",
      timestamp: "2026-09-11T10:00:00.000Z",
      correlationId: "cor:ev",
    },
  };
}

const baseInput = {
  currentAttemptId: "xat:b",
  executionContractId: EC,
  projectId: PROJECT,
  cycleInstanceId: CYCLE,
  expectedHeadSha: HEAD,
  authorizedEffects: ["git.commit"] as const,
  verifiedEffects: ["filesystem.create", "filesystem.modify"] as const,
};

describe("D-GCEC-CONT-01 continuation resolver", () => {
  it("required only when verified FS + authorized protected Git", () => {
    expect(
      preCommitWorkspaceContinuationRequired({
        authorizedEffects: ["git.commit"],
        verifiedEffects: ["filesystem.create"],
      }),
    ).toBe(true);
    expect(
      preCommitWorkspaceContinuationRequired({
        authorizedEffects: ["filesystem.create"],
        verifiedEffects: ["filesystem.create"],
      }),
    ).toBe(false);
    expect(
      preCommitWorkspaceContinuationRequired({
        authorizedEffects: ["git.commit"],
        verifiedEffects: [],
      }),
    ).toBe(false);
  });

  it("CONT-01 unique succeeded same-EC + VERIFIED Evidence → candidate", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      attempts: [attempt({ attemptId: "xat:a" }), attempt({ attemptId: "xat:b", status: "accepted", completedAt: undefined, resultRef: undefined, launchedAt: undefined, startedAt: undefined })],
      evidence: [
        evidence({
          evidenceId: "ev:a",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:a",
          },
        }),
      ],
    });
    expect(r.required).toBe(true);
    if (!r.required || !r.ok) throw new Error("expected ok");
    expect(r.descriptor.priorAttemptId).toBe("xat:a");
    expect(r.descriptor.expectedVerifiedFiles[0]?.digest).toBe(DIGEST);
    expect(r.descriptor.evidenceId).toBe("ev:a");
  });

  it("CONT-02 prior Attempt other EC → rejected (none)", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      attempts: [
        attempt({
          attemptId: "xat:a",
          executionContractId: "xct:other",
        }),
      ],
      evidence: [
        evidence({
          evidenceId: "ev:a",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: "xct:other",
            executionAttemptId: "xat:a",
          },
        }),
      ],
    });
    // Other-EC prior does not open the same-EC continuation window.
    expect(r).toEqual({ required: false, descriptor: null });
  });

  it("CONT-03 prior Attempt failed/cancelled/running → rejected", () => {
    for (const status of ["failed", "cancelled", "running"] as const) {
      const r = resolvePreCommitWorkspaceContinuation({
        ...baseInput,
        attempts: [
          attempt({
            attemptId: "xat:a",
            status,
            completedAt: status === "running" ? undefined : "2026-09-11T10:02:00.000Z",
            resultRef: status === "running" ? undefined : "res:a",
            failedAt: status === "failed" ? "2026-09-11T10:02:00.000Z" : undefined,
            cancelledAt:
              status === "cancelled" ? "2026-09-11T10:02:00.000Z" : undefined,
            errorRef: status === "failed" ? "err:a" : undefined,
            stopReason: status === "failed" ? "stop" : undefined,
          }),
        ],
        evidence: [
          evidence({
            evidenceId: "ev:a",
            bindings: {
              projectId: PROJECT,
              cycleInstanceId: CYCLE,
              executionContractId: EC,
              executionAttemptId: "xat:a",
            },
          }),
        ],
      });
      // Non-succeeded priors do not open the continuation window.
      expect(r).toEqual({ required: false, descriptor: null });
    }
  });

  it("CONT-04 Evidence not VERIFIED → rejected", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      attempts: [attempt({ attemptId: "xat:a" })],
      evidence: [
        evidence({
          evidenceId: "ev:a",
          status: "available",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:a",
          },
        }),
      ],
    });
    expect(r).toMatchObject({
      required: true,
      ok: false,
      reason: "continuation_candidate_none",
    });
  });

  it("CONT-05 Evidence wrong Project/Cycle/EC/Attempt → rejected", () => {
    const wrongBindings = [
      {
        projectId: "prj:wrong",
        cycleInstanceId: CYCLE,
        executionContractId: EC,
        executionAttemptId: "xat:a",
      },
      {
        projectId: PROJECT,
        cycleInstanceId: "cyc:wrong",
        executionContractId: EC,
        executionAttemptId: "xat:a",
      },
      {
        projectId: PROJECT,
        cycleInstanceId: CYCLE,
        executionContractId: "xct:wrong",
        executionAttemptId: "xat:a",
      },
      {
        projectId: PROJECT,
        cycleInstanceId: CYCLE,
        executionContractId: EC,
        executionAttemptId: "xat:other",
      },
    ];
    for (const bindings of wrongBindings) {
      const r = resolvePreCommitWorkspaceContinuation({
        ...baseInput,
        attempts: [attempt({ attemptId: "xat:a" })],
        evidence: [evidence({ evidenceId: "ev:a", bindings })],
      });
      expect(r).toMatchObject({
        required: true,
        ok: false,
        reason: "continuation_candidate_none",
      });
    }
  });

  it("CONT-06 zero candidate while continuation required → fail closed", () => {
    // Prior succeeded Attempt exists (window open) but no matching VERIFIED Evidence.
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      attempts: [attempt({ attemptId: "xat:a" })],
      evidence: [],
    });
    expect(r).toEqual({
      required: true,
      ok: false,
      reason: "continuation_candidate_none",
    });
  });

  it("no prior succeeded Attempt → continuation not required", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      attempts: [],
      evidence: [],
    });
    expect(r).toEqual({ required: false, descriptor: null });
  });

  it("CONT-07 two eligible candidates → fail closed ambiguity", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      attempts: [
        attempt({ attemptId: "xat:a1" }),
        attempt({ attemptId: "xat:a2" }),
      ],
      evidence: [
        evidence({
          evidenceId: "ev:a1",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:a1",
          },
        }),
        evidence({
          evidenceId: "ev:a2",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:a2",
          },
        }),
      ],
    });
    expect(r.required).toBe(true);
    if (!r.required || r.ok) throw new Error("expected ambiguous");
    expect(r.reason).toBe("continuation_candidate_ambiguous");
    expect(r.candidateAttemptIds).toEqual(["xat:a1", "xat:a2"]);
  });

  it("CONT-08 does not select current Attempt as prior", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      currentAttemptId: "xat:a",
      attempts: [attempt({ attemptId: "xat:a" })],
      evidence: [
        evidence({
          evidenceId: "ev:a",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:a",
          },
        }),
      ],
    });
    // Only current Attempt succeeded → no prior lineage window.
    expect(r).toEqual({ required: false, descriptor: null });
  });

  it("CONT-09 retryOfAttemptId is not workspace lineage authority", () => {
    // B retries A, but only C has VERIFIED docs-write Evidence → C wins uniquely.
    // retryOf must not override Evidence uniqueness.
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      currentAttemptId: "xat:b",
      attempts: [
        attempt({ attemptId: "xat:a" }),
        attempt({
          attemptId: "xat:b",
          status: "accepted",
          completedAt: undefined,
          resultRef: undefined,
          launchedAt: undefined,
          startedAt: undefined,
          retryOfAttemptId: "xat:a",
          retryIndex: 1,
          maxRetriesBudget: 3,
        }),
        attempt({ attemptId: "xat:c" }),
      ],
      evidence: [
        evidence({
          evidenceId: "ev:c",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:c",
          },
        }),
      ],
    });
    expect(r.required && r.ok).toBe(true);
    if (!r.required || !r.ok) throw new Error("expected c");
    expect(r.descriptor.priorAttemptId).toBe("xat:c");
    expect(r.descriptor.priorAttemptId).not.toBe("xat:a");
  });

  it("not required → descriptor null (no heuristic)", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      authorizedEffects: ["filesystem.create"],
      attempts: [attempt({ attemptId: "xat:a" })],
      evidence: [
        evidence({
          evidenceId: "ev:a",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:a",
          },
        }),
      ],
    });
    expect(r).toEqual({ required: false, descriptor: null });
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts`

```typescript
/**
 * D-GCEC-CONT-01 — same-EC A→B StartExecution continuation + restart rediscovery.
 * ZERO REAL Cursor / OS git. Product persistence: NONE new.
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  assertStudioCursorRealOffForTests,
  buildGitEffectActionRef,
  createM4BoundedDocsWriteCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  SqliteRealLaunchSafetyJournal,
  StudioGitWorktreeWorkspace,
  TestExecutionAdapter,
  workspacePathForAttempt,
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
import { FakeGitCommandRunner } from "./support/fakeSpawnAndGit";
import { M4_EVIDENCE, M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";

const IDENTITY = "acme/widget";
const BRANCH = "gcec/docs";
const TARGET_PATH = "docs/functional-design.md";
const ARTIFACT_BODY = "# Cont A→B verified artifact\n";
const ARTIFACT_DIGEST = `sha256:${createHash("sha256")
  .update(ARTIFACT_BODY)
  .digest("hex")}` as Digest;

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
  };
}

function docsWriteEvidence(input: {
  evidenceId: string;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  status?: Evidence["status"];
}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: input.evidenceId,
    type: "artifact",
    status: input.status ?? "verified",
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
      correlationId: "cor:cont-ev",
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
      executionContractId: "xct:cont-ab",
      idempotencyKey: "idem-xct-cont-ab",
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
      // Contract-level ids must match OA identifier pattern (prefix:…).
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
    confirmationId: "cfm:cont-ec",
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
  expect(confirmed.contract.status).toBe("confirmed");

  return {
    contractId: confirmed.contract.executionContractId,
    version: confirmed.contract.version,
    projectId,
    cycleInstanceId,
  };
}

describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("A→B StartExecution passes unique governed continuation descriptor (no path)", async () => {
    const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-cont-managed-"));
    const repoRoot = path.join(managedBase, "acme__widget");
    mkdirSync(repoRoot, { recursive: true });
    mkdirSync(path.join(repoRoot, ".git"));

    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: tempJournalPath("gcec-cont-ab-"),
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
    const attemptA = "xat:cont-a";
    const attemptB = "xat:cont-b";
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
        evidenceId: "ev:cont-a-art",
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: seeded.contractId,
        executionAttemptId: attemptA,
      }),
    );

    const ecBefore = await stack.execution.getExecutionContract.execute({
      executionContractId: seeded.contractId,
    });
    expect(ecBefore.ok).toBe(true);
    if (!ecBefore.ok) return;
    expect(ecBefore.contract.status).toBe("confirmed");

    const selected = await selectStandardAgent(stack, {
      attemptId: attemptB,
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);

    const granted = await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:cont-b",
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const gitActionRef = buildGitEffectActionRef({
      executionContractId: seeded.contractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    registerMorris(stack.decisions.authority, gitActionRef, "evd:morris-git-ab");
    await grantContractConfirmation(stack, {
      confirmationId: "cfm:cont-git-commit",
      actionRef: gitActionRef,
      scope: gitActionRef,
      evidenceId: "evd:morris-git-ab",
    });
    const gitCnf = await stack.decisions.confirmations.findById(
      "cfm:cont-git-commit",
    );
    expect(gitCnf?.status).toBe("granted");

    const started = await stack.attempts.startExecution.execute({
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      confirmations: gitCnf ? [gitCnf] : [],
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(true);
    if (!started.ok) {
      throw new Error(started.error.internalCauseRef);
    }

    expect(launchPort.calls).toHaveLength(1);
    const req = launchPort.calls[0]!;
    expect(req.workspaceContinuation).toBeDefined();
    expect(req.workspaceContinuation?.priorAttemptId).toBe(attemptA);
    expect(req.workspaceContinuation?.expectedHeadSha).toBe(
      M4_TEST_BASE_HEAD_SHA,
    );
    expect(req.workspaceContinuation?.expectedVerifiedFiles).toEqual([
      { path: TARGET_PATH, digest: ARTIFACT_DIGEST },
    ]);
    expect(
      (req.workspaceContinuation as { workspacePath?: string } | undefined)
        ?.workspacePath,
    ).toBeUndefined();
    expect(
      (req as { workspacePath?: string; cwd?: string }).workspacePath,
    ).toBeUndefined();

    const a = await stack.attempts.attempts.findById(attemptA);
    const b = await stack.attempts.attempts.findById(attemptB);
    expect(a?.status).toBe("succeeded");
    expect(b?.status).toBe("running");
    expect(a?.attemptId).not.toBe(b?.attemptId);
    expect(a?.executionContractId).toBe(b?.executionContractId);

    const ecAfter = await stack.execution.getExecutionContract.execute({
      executionContractId: seeded.contractId,
    });
    expect(ecAfter.ok).toBe(true);
    if (ecAfter.ok) {
      // Start moves EC to executing while Attempt runs — still same EC, no completion.
      expect(["confirmed", "executing"]).toContain(ecAfter.contract.status);
    }

    journal.close();
  });

  it("CONT-06 StartExecution fails closed when continuation required but none", async () => {
    const managedBase = mkdtempSync(
      path.join(os.tmpdir(), "gcec-cont-none-"),
    );
    const repoRoot = path.join(managedBase, "acme__widget");
    mkdirSync(repoRoot, { recursive: true });
    mkdirSync(path.join(repoRoot, ".git"));

    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: tempJournalPath("gcec-cont-none-"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
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
      listProjectEvidence: async () => [],
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const seeded = await seedDocsWriteConfirmedContract(stack);
    // Prior succeeded Attempt opens the continuation window; missing Evidence → fail closed.
    await stack.attempts.attempts.create(
      succeededAttempt({
        attemptId: "xat:cont-none-a",
        executionContractId: seeded.contractId,
        executionContractVersion: seeded.version,
      }),
    );
    const attemptB = "xat:cont-none-b";
    await selectStandardAgent(stack, {
      attemptId: attemptB,
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
      idempotencyKey: "idem-cont-none-b",
    });
    await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:cont-none",
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
    registerMorris(
      stack.decisions.authority,
      gitActionRef,
      "evd:morris-git-none",
    );
    await grantContractConfirmation(stack, {
      confirmationId: "cfm:cont-none-git",
      actionRef: gitActionRef,
      scope: gitActionRef,
      evidenceId: "evd:morris-git-none",
    });
    const gitCnf = await stack.decisions.confirmations.findById(
      "cfm:cont-none-git",
    );
    const started = await stack.attempts.startExecution.execute({
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      confirmations: gitCnf ? [gitCnf] : [],
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.detailCode).toBe("ATTEMPT_INVALID");
      expect(started.error.internalCauseRef).toBe(
        "continuation_candidate_none",
      );
    }
    expect(launchPort.launchCallCount).toBe(0);
    journal.close();
  });

  it("restart rediscovery: new workspace service + same execRoot resumes without processRef", async () => {
    const root = mkdtempSync(path.join(os.tmpdir(), "gcec-cont-restart-"));
    const repoRoot = path.join(root, "repo");
    const execRoot = path.join(root, "exec");
    mkdirSync(repoRoot);
    mkdirSync(execRoot);
    const priorAttemptId = "xat:cont-restart-a";
    const workspacePath = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(workspacePath, { recursive: true });
    const abs = path.join(workspacePath, TARGET_PATH);
    mkdirSync(path.dirname(abs), { recursive: true });
    writeFileSync(abs, ARTIFACT_BODY, "utf8");

    const git1 = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: `https://github.com/${IDENTITY}.git`,
      registeredWorktrees: [workspacePath],
    });
    const ws1 = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git1,
    });
    // Drop ws1 — simulate process restart (no worktreeRef retained).
    void ws1;

    const git2 = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: `https://github.com/${IDENTITY}.git`,
      registeredWorktrees: [workspacePath],
    });
    const ws2 = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git2,
    });
    const resumed = await ws2.resumeVerifiedWorkspace({
      currentAttemptId: "xat:cont-restart-b",
      priorAttemptId,
      expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
      expectedVerifiedFiles: [
        { path: TARGET_PATH, digest: ARTIFACT_DIGEST },
      ],
      repositoryBinding: {
        identity: IDENTITY,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
        defaultBranch: "main",
      },
    });
    expect(resumed.workspacePath).toBe(workspacePath);
    expect(
      git2.calls.some(
        (c) => c.argv[0] === "worktree" && c.argv[1] === "add",
      ),
    ).toBe(false);

    // Negative: path absent after restart
    const missingExec = path.join(root, "exec-missing");
    mkdirSync(missingExec);
    const wsMissing = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot: missingExec,
      gitRunner: new FakeGitCommandRunner({
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
      }),
    });
    await expect(
      wsMissing.resumeVerifiedWorkspace({
        currentAttemptId: "xat:cont-restart-b2",
        priorAttemptId,
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: TARGET_PATH, digest: ARTIFACT_DIGEST },
        ],
      }),
    ).rejects.toThrow(/resume_workspace_missing/);
  });
});

```
