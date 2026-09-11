# SFIA STUDIO — GCEC
CR-GCEC-REAL-01
REAL HARNESS RECONCILIATION-SAFETY HARDENING

## TIMESTAMP
2026-09-11T18:33:58+02:00

## GO MORRIS
CR-GCEC-REAL-01 HARNESS HARDENING consumed

## REAL
ZERO

No StartExecution REAL.
No Cursor child agent REAL business invocation.
Env explicitly unset: `SFIA_STUDIO_CURSOR_REAL`, `SFIA_GCEC_CURSOR_REAL_PROOF`, `SFIA_GCEC_MANAGED_REPO_BASE`.

## GIT TRUTH BEFORE
- worktree: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- branch: `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- HEAD: `290eca6544f93a898fc3920f99142dc6130ba05e`
- parent: `8d05732c0be7eced7a6acee71d1e1d990a1e8db0`
- origin/main: `a9f6c310a0826d0e5bd6f7264603382a86564db1`
- Review Handoff tip (start): `6ed633983ce667402ecdc862be1f429f60277f8b`
- Local Product dirt (candidate baseline):
  - M `completeBoundedDocsWriteLaunch.ts`
  - M `completeBoundedReadOnlyLaunch.ts`
  - M `studioCursorRealLaunchGateway.ts`
  - ?? `gcecCursorRealDocsWrite.real.d0.test.ts`

## GIT TRUTH AFTER
- HEAD unchanged: `290eca6544f93a898fc3920f99142dc6130ba05e`
- Product local commit: NONE
- Product push: NONE
- Only harness file expanded for CR-GCEC-REAL-01 (three prior adaptations byte-identical to STOP-enrich candidate)

## SOURCES
Read / binding:
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
- projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md
- Prior handoff `sfia-review-handoff/latest-chatgpt-review.md` @ `6ed63398…`

## CONVERGENCE PRE-CHECK
- Build Doctrine: VALIDATED / ACTIVE
- Product Completion: COMPLETE / CLOSED (not reopened)
- Runtime v3: NON ADOPTED
- GCEC deterministic: PROVEN
- Proof repository: PROVISIONED REAL
- GCEC-CURSOR-REAL: OPEN
- First REAL attempt: INCOMPLETE / NOT RECONCILABLE (prior STOP)

## PRIOR STOP
Verdict: **STOP — GCEC-CURSOR-REAL RECONCILIATION REQUIRED**
Handoff: `8ef03b9a…` then enrich `6ed63398…`
Cause: REAL StartExecution reached `running` / LAUNCHED; harness asserted invalid field then afterEach wiped DB/worktree/journal → no forensic residual.

## CRITICAL REVIEW FINDING
**CR-GCEC-REAL-01 — BLOCKING (addressed in this lot)**

After REAL LAUNCHED, unconditional afterEach teardown made post-launch failures non-reconcilable.

Required invariant now encoded in harness:
REAL LAUNCHED OBSERVED + POST-LAUNCH FAILURE/AMBIGUITY → PRESERVE FORENSIC STATE.

## HARNESS BEFORE (cleanup semantics)
```
afterEach:
  resetF2ProposalStoreForTests()
  resetRuntimeApplicationServiceForTests()
  for each temp root: fs.rmSync(recursive, force)   // unconditional
```
Any assertion failure after LAUNCHED still hit this cleanup → deleted disposable SQLite, safety journal, execRoot/worktree, proofRoot.

## HARNESS AFTER (cleanup / preservation semantics)
Process-local `RealProofHarnessState`:
- `realLaunchConsumed`, `reconciliationComplete`, paths, `processRef`, `failure`, …

Predicate:
```
shouldPreserveRealProofState({ realLaunchConsumed, reconciliationComplete })
  => realLaunchConsumed && !reconciliationComplete
```

afterEach:
- always reset F2 + runtime singleton (handle release only — see below)
- if preserve → abandon temp tracking **without** `rmSync`
- else → ordinary `rmSync` of temps

## LAUNCHED BOUNDARY
Immediately after journal `LAUNCHED` + `processRef` matching `/^(pid:|proc:)/`:
1. set `realLaunchConsumed = true` and path fields
2. write `.tmp-sfia-review/gcec-cursor-real-proof/launch-frontier.json` (`phase=LAUNCHED_UNRECONCILED`)
3. only then enter post-launch try (completion / assertions / evidence / success snapshot)

## FORENSIC SNAPSHOT
Early: `launch-frontier.json` (non-secret facts only; not written into proof repo).

Failure: `reconciliation-state.json` with phase `POST_LAUNCH_FAILURE_PRESERVED`, observation summary (best-effort `launchPort.observe`), Git facts if worktree known, pathsExist, artifactExists, failure message, `reconciliationComplete=false`.

Success: `facts.json` + `functional-design.md` + reconciled `reconciliation-state.json` **before** `reconciliationComplete=true`.

Proof review dir corrected to workspace root:
`.tmp-sfia-review/gcec-cursor-real-proof/`
(previous candidate incorrectly resolved under `projects/.tmp-sfia-review/…`).

## PRESERVE-ON-FAILURE
Post-launch wrapped in try/catch:
- capture failure
- best-effort observe(processRef)
- best-effort worktree discovery
- non-mutating Git facts when worktree exists
- write reconciliation-state.json
- **rethrow** (never convert fail → PASS)

## RECONCILIATION COMPLETE CONDITION
`reconciliationComplete = true` only after durable local review snapshot exists (`facts.json` + `functional-design.md` + reconciliation metadata).

## resetRuntimeApplicationServiceForTests ANALYSIS
Inspected `projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts` + `service.dispose()`:

- calls `dispose()` → product services `store.close()`
- nulls process-local singleton / options
- **does NOT unlink** `productDbPath`, safety journal SQLite, or worktree directories

Finding: reset is **handle-release only**, not destructive of forensic files. Allowed during preserve; retained paths must remain on disk (ensured by skipping `rmSync`).

## DETERMINISTIC HARNESS SAFETY TESTS
Always-on describe (REAL flags OFF):
1. `shouldPreserveRealProofState` matrix (false/false → cleanup; true/false → PRESERVE; true/true → cleanup)
2. preserve-on-failure does not delete temp root after LAUNCHED
3. cleanup allowed before LAUNCHED and after reconciliationComplete

REAL scenario remains in separate `describe.skipIf(!ENABLED)`.

## REAL SCENARIO
SKIPPED / NOT RUN (dual env gate OFF; unset confirmed)

File result under full suite:
`gcecCursorRealDocsWrite.real.d0.test.ts (4 tests | 1 skipped)`

## NON-REGRESSION
- journal LAUNCHED / processRef proof retained
- `awaitIfPending` opt-in retained; default false → T-R3-PENDING / T-R3-ASYNC-CONTINUATION preserved
- three prior adaptations **byte-identical** to STOP-enrich candidate (not expanded)
- focused GCEC + residual + spawn/gateway related suites PASS

## FULL TEST RESULTS
Focused (REAL unset):
```
Test Files  5 passed (5)
Tests  101 passed | 1 skipped (102)
```

Related residual/spawn/gateway:
```
Test Files  4 passed (4)
Tests  42 passed (42)
```

Full Vitest:
```
Test Files  340 passed | 17 skipped (357)
Tests  3655 passed | 136 skipped (3791)
```

- typecheck: PASS
- lint: PASS (`No ESLint warnings or errors`)
- build: PASS (Next.js 15.5.20 compiled)
- git diff --check (four Product candidate files): PASS

## FILES MODIFIED (this lot)
- `projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealDocsWrite.real.d0.test.ts` (CREATED previously; HARDENED this lot)

## FILES UNCHANGED THIS LOT (still local dirt from prior candidate)
- `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts`

## FILES CREATED
- none beyond existing untracked harness (content expanded)

## FILES DELETED
- none

## PRODUCT HEAD
`290eca6544f93a898fc3920f99142dc6130ba05e`

## LOCAL PRODUCT COMMIT
NONE

## PRODUCT PUSH
NONE

## PROOF REPO MUTATION
NONE — main still `32c7c2008197e5c61b32c16479144e9863291358`

## CURSOR REAL
ZERO NEW INVOCATIONS

## GCEC-CURSOR-REAL
OPEN

## REAL_CONTINUATION_GAP
OPEN / unchanged (fresh worktree lose-artifact debt remains for future REAL)

## OPEN GATES
- GCEC-CURSOR-REAL
- GCEC-PUSH
- GCEC-PR
- GCEC-MERGE
- GCEC-RUNTIME-V3

## DEBT
- TEMP-GCEC-PRPM-01
- TEMP-GCEC-F14-BIND-01
- REAL_CONTINUATION_GAP

## ANTI-CLAIMS
- harness reconciliation-safe ≠ GCEC-CURSOR-REAL closed
- ZERO REAL this lot ≠ REAL boundary proven
- Review Pack / Handoff ≠ Product commit authorized
- uncommitted adaptations still require ChatGPT Critical Review before commit GO
- not ready for GCEC-PUSH / PR / MERGE
- runtime v3 not adopted

## VERDICT
**PASS — GCEC REAL HARNESS RECONCILIATION-SAFE / READY FOR CHATGPT CRITICAL REVIEW**

---

## EMBEDDED DIFF — CR-GCEC-REAL-01 harness delta (from prior STOP-enrich candidate)

```diff
diff --git a/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310/.tmp-sfia-review/gcec-cursor-real-stop-enrich/full_projects_sfia-studio_app___tests___oa_cycle_gcecCursorRealDocsWrite.real.d0.test.ts b/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310/projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealDocsWrite.real.d0.test.ts
index e368da3c..e6f9dd1b 100644
--- a/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310/.tmp-sfia-review/gcec-cursor-real-stop-enrich/full_projects_sfia-studio_app___tests___oa_cycle_gcecCursorRealDocsWrite.real.d0.test.ts
+++ b/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310/projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealDocsWrite.real.d0.test.ts
@@ -1,7 +1,7 @@
 /**
  * GCEC-CURSOR-REAL — bounded REAL Cursor docs-write proof.
  *
- * NEVER runs in ordinary vitest suites.
+ * NEVER runs the REAL scenario in ordinary vitest suites.
  * Requires BOTH:
  *   SFIA_STUDIO_CURSOR_REAL=1
  *   SFIA_GCEC_CURSOR_REAL_PROOF=1
@@ -9,12 +9,16 @@
  *   SFIA_GCEC_MANAGED_REPO_BASE=/path/to/managed/base
  *   (clone at {base}/mcleland147__sfia-gcec-proof-task-manager @ BASE_SHA)
  *
+ * CR-GCEC-REAL-01: after LAUNCHED + processRef, forensic roots are preserved on
+ * post-launch failure (no blind afterEach rm of DB/journal/worktree/proofRoot).
+ *
  * Outer harness MUST NOT create docs/functional-design.md — only runtime Cursor.
  * @vitest-environment node
  */
 import fs from "node:fs";
 import os from "node:os";
 import path from "node:path";
+import { createHash } from "node:crypto";
 import { execFileSync } from "node:child_process";
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import type { Confirmation } from "@/lib/oa/decision";
@@ -46,7 +50,6 @@ import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
 import {
   getRuntimeApplicationService,
   resetRuntimeApplicationServiceForTests,
-  type RuntimeApplicationService,
 } from "@/lib/vertical-slice-runtime";
 import {
   NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
@@ -67,6 +70,12 @@ const ENABLED =
   process.env.SFIA_GCEC_CURSOR_REAL_PROOF === "1";

 const APP_ROOT = path.resolve(__dirname, "../../..");
+/** Product worktree root (sfia-product-proof-…). */
+const WORKSPACE_ROOT = path.resolve(APP_ROOT, "../../..");
+const PROOF_REVIEW_DIR = path.join(
+  WORKSPACE_ROOT,
+  ".tmp-sfia-review/gcec-cursor-real-proof",
+);
 const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
 const SCHEMAS_ROOT = path.resolve(
   APP_ROOT,
@@ -101,11 +110,106 @@ const CONTENT_REQUIREMENTS = [
   "OUT OF SCOPE: authentication, multi-user, notifications, architecture, DB, API, framework, pixel UX",
 ];

+/** Harness-local only — not Product domain persistence. */
+export type RealProofHarnessState = {
+  realLaunchConsumed: boolean;
+  reconciliationComplete: boolean;
+  attemptId?: string;
+  processRef?: string;
+  proofRoot?: string;
+  execRoot?: string;
+  safetyJournalPath?: string;
+  productDbPath?: string;
+  worktreeRef?: string;
+  managedClonePath?: string;
+  executionContractId?: string;
+  failure?: string;
+  durableReviewSnapshotWritten: boolean;
+};
+
+export function createRealProofHarnessState(): RealProofHarnessState {
+  return {
+    realLaunchConsumed: false,
+    reconciliationComplete: false,
+    durableReviewSnapshotWritten: false,
+  };
+}
+
+/**
+ * Cleanup predicate (CR-GCEC-REAL-01):
+ * - before LAUNCHED → cleanup allowed
+ * - after LAUNCHED until reconciliationComplete → PRESERVE
+ * - after reconciliationComplete (implies durable review snapshot) → cleanup allowed
+ */
+export function shouldPreserveRealProofState(input: {
+  realLaunchConsumed: boolean;
+  reconciliationComplete: boolean;
+}): boolean {
+  return input.realLaunchConsumed === true && input.reconciliationComplete !== true;
+}
+
+/** Apply temp-root cleanup policy; returns whether roots were deleted. */
+export function applyRealProofTempCleanup(input: {
+  realLaunchConsumed: boolean;
+  reconciliationComplete: boolean;
+  roots: readonly string[];
+}): { preserved: boolean; deleted: string[] } {
+  if (shouldPreserveRealProofState(input)) {
+    return { preserved: true, deleted: [] };
+  }
+  const deleted: string[] = [];
+  for (const root of input.roots) {
+    try {
+      fs.rmSync(root, { recursive: true, force: true });
+      deleted.push(root);
+    } catch {
+      /* ignore */
+    }
+  }
+  return { preserved: false, deleted };
+}
+
+function writeJson(filePath: string, value: unknown): void {
+  fs.mkdirSync(path.dirname(filePath), { recursive: true });
+  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
+}
+
+function sha256FileOrMissing(filePath: string): string | null {
+  if (!fs.existsSync(filePath)) return null;
+  return createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
+}
+
+function safeGit(cwd: string, args: string[]): string | null {
+  try {
+    return execFileSync("git", args, {
+      cwd,
+      encoding: "utf8",
+      shell: false,
+    }).trim();
+  } catch {
+    return null;
+  }
+}
+
 const temps: string[] = [];
+const harnessState = createRealProofHarnessState();

+/**
+ * resetRuntimeApplicationServiceForTests (inspected):
+ * - calls service.dispose() → product SQLite store.close()
+ * - nulls process-local singleton
+ * - does NOT unlink productDbPath / safety journal / worktrees
+ * Safe for handle release during preserve; file paths must remain on disk.
+ */
 afterEach(() => {
   resetF2ProposalStoreForTests();
   resetRuntimeApplicationServiceForTests();
+  const preserve = shouldPreserveRealProofState(harnessState);
+  if (preserve) {
+    // Abandon tracking without deleting forensic roots.
+    temps.length = 0;
+    return;
+  }
   for (const t of temps.splice(0)) {
     try {
       fs.rmSync(t, { recursive: true, force: true });
@@ -120,6 +224,11 @@ beforeEach(() => {
   process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
   resetF2ProposalStoreForTests();
   resetRuntimeApplicationServiceForTests();
+  // Do not clear harnessState here if a prior REAL failure is still unreconciled
+  // in the same process — preservation must survive afterEach for that run.
+  if (!shouldPreserveRealProofState(harnessState)) {
+    Object.assign(harnessState, createRealProofHarnessState());
+  }
 });

 function tempDir(prefix: string): string {
@@ -158,6 +267,151 @@ function requireAuth(
   return auth.evidenceId;
 }

+async function writeLaunchFrontierSnapshot(input: {
+  state: RealProofHarnessState;
+  phase?: string;
+}): Promise<void> {
+  writeJson(path.join(PROOF_REVIEW_DIR, "launch-frontier.json"), {
+    timestamp: new Date().toISOString(),
+    attemptId: input.state.attemptId ?? null,
+    executionContractId: input.state.executionContractId ?? null,
+    processRef: input.state.processRef ?? null,
+    proofRoot: input.state.proofRoot ?? null,
+    execRoot: input.state.execRoot ?? null,
+    safetyJournalPath: input.state.safetyJournalPath ?? null,
+    productDbPath: input.state.productDbPath ?? null,
+    managedClonePath: input.state.managedClonePath ?? null,
+    remoteBaseSha: BASE_SHA,
+    phase: input.phase ?? "LAUNCHED_UNRECONCILED",
+  });
+}
+
+async function writeFailureReconciliationSnapshot(input: {
+  state: RealProofHarnessState;
+  error: unknown;
+  observationSummary: Record<string, unknown> | null;
+  gitFacts: Record<string, unknown> | null;
+}): Promise<void> {
+  const failure =
+    input.error instanceof Error
+      ? `${input.error.name}: ${input.error.message}`
+      : String(input.error);
+  input.state.failure = failure;
+  const artifactPath = input.state.worktreeRef
+    ? path.join(input.state.worktreeRef, TARGET_PATH)
+    : null;
+  writeJson(path.join(PROOF_REVIEW_DIR, "reconciliation-state.json"), {
+    phase: "POST_LAUNCH_FAILURE_PRESERVED",
+    attemptId: input.state.attemptId ?? null,
+    executionContractId: input.state.executionContractId ?? null,
+    processRef: input.state.processRef ?? null,
+    observationSummary: input.observationSummary,
+    worktreePath: input.state.worktreeRef ?? null,
+    filesystemPathsRetained: {
+      proofRoot: input.state.proofRoot ?? null,
+      execRoot: input.state.execRoot ?? null,
+      safetyJournalPath: input.state.safetyJournalPath ?? null,
+      productDbPath: input.state.productDbPath ?? null,
+      worktreeRef: input.state.worktreeRef ?? null,
+    },
+    pathsExist: {
+      proofRoot: Boolean(
+        input.state.proofRoot && fs.existsSync(input.state.proofRoot),
+      ),
+      execRoot: Boolean(
+        input.state.execRoot && fs.existsSync(input.state.execRoot),
+      ),
+      safetyJournalPath: Boolean(
+        input.state.safetyJournalPath &&
+          fs.existsSync(input.state.safetyJournalPath),
+      ),
+      productDbPath: Boolean(
+        input.state.productDbPath && fs.existsSync(input.state.productDbPath),
+      ),
+      worktreeRef: Boolean(
+        input.state.worktreeRef && fs.existsSync(input.state.worktreeRef),
+      ),
+    },
+    artifactExists: Boolean(artifactPath && fs.existsSync(artifactPath)),
+    gitFacts: input.gitFacts,
+    failure,
+    reconciliationComplete: false,
+  });
+}
+
+// ---------------------------------------------------------------------------
+// Deterministic harness-safety tests (ALWAYS run; REAL flags OFF)
+// ---------------------------------------------------------------------------
+describe("gcecCursorRealDocsWrite — harness reconciliation safety", () => {
+  it("shouldPreserveRealProofState matrix", () => {
+    expect(
+      shouldPreserveRealProofState({
+        realLaunchConsumed: false,
+        reconciliationComplete: false,
+      }),
+    ).toBe(false);
+    expect(
+      shouldPreserveRealProofState({
+        realLaunchConsumed: false,
+        reconciliationComplete: true,
+      }),
+    ).toBe(false);
+    expect(
+      shouldPreserveRealProofState({
+        realLaunchConsumed: true,
+        reconciliationComplete: false,
+      }),
+    ).toBe(true);
+    expect(
+      shouldPreserveRealProofState({
+        realLaunchConsumed: true,
+        reconciliationComplete: true,
+      }),
+    ).toBe(false);
+  });
+
+  it("preserve-on-failure does not delete temp root after LAUNCHED", () => {
+    const root = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gcec-preserve-"));
+    const marker = path.join(root, "forensic-marker.txt");
+    fs.writeFileSync(marker, "keep-me\n", "utf8");
+    const result = applyRealProofTempCleanup({
+      realLaunchConsumed: true,
+      reconciliationComplete: false,
+      roots: [root],
+    });
+    expect(result.preserved).toBe(true);
+    expect(result.deleted).toEqual([]);
+    expect(fs.existsSync(marker)).toBe(true);
+    // Test hygiene only — not production cleanup policy
+    fs.rmSync(root, { recursive: true, force: true });
+  });
+
+  it("cleanup allowed before LAUNCHED and after reconciliationComplete", () => {
+    const before = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gcec-pre-"));
+    fs.writeFileSync(path.join(before, "x"), "1");
+    const r1 = applyRealProofTempCleanup({
+      realLaunchConsumed: false,
+      reconciliationComplete: false,
+      roots: [before],
+    });
+    expect(r1.preserved).toBe(false);
+    expect(fs.existsSync(before)).toBe(false);
+
+    const after = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gcec-post-"));
+    fs.writeFileSync(path.join(after, "x"), "1");
+    const r2 = applyRealProofTempCleanup({
+      realLaunchConsumed: true,
+      reconciliationComplete: true,
+      roots: [after],
+    });
+    expect(r2.preserved).toBe(false);
+    expect(fs.existsSync(after)).toBe(false);
+  });
+});
+
+// ---------------------------------------------------------------------------
+// REAL Product path (SKIPPED unless dual env gate ON)
+// ---------------------------------------------------------------------------
 describe.skipIf(!ENABLED)("gcecCursorRealDocsWrite — REAL Product path", () => {
   it(
     "ONE StartExecution REAL Cursor creates docs/functional-design.md only",
@@ -603,109 +857,122 @@ describe.skipIf(!ENABLED)("gcecCursorRealDocsWrite — REAL Product path", () =>
       );
       expect(launched?.processRef).toBeTruthy();
       expect(String(launched!.processRef)).toMatch(/^(pid:|proc:)/);
-      const attemptRunning =
-        await attempts.getExecutionAttempt.execute({ attemptId });
-      expect(attemptRunning.ok).toBe(true);
-      if (!attemptRunning.ok) throw new Error("attempt missing");
-
-      const completed = await completeBoundedDocsWriteLaunch({
-        attempt: attemptRunning.attempt,
-        services: attempts,
-        targetPath: TARGET_PATH,
-        pathAllowlist: ["docs/"],
-        statusDiffPort: new NodeLocalGitStatusDiffPort(),
-        awaitIfPending: true,
-      });
-      expect(completed.ok).toBe(true);
-      if (!completed.ok) {
-        throw new Error(`complete failed: ${completed.code} ${completed.message}`);
-      }
-      expect(completed.status).toBe("succeeded");
-      if (completed.status !== "succeeded") throw new Error("not succeeded");
-
-      const worktree = completed.facts.worktreeRef!;
-      expect(worktree).toBeTruthy();
-      expect(worktree.includes("sfia-product-proof")).toBe(false);
-      expect(fs.existsSync(path.join(worktree, TARGET_PATH))).toBe(true);
-      const artifactText = fs.readFileSync(
-        path.join(worktree, TARGET_PATH),
-        "utf8",
-      );
-      expect(artifactText.trim().length).toBeGreaterThan(80);
-      expect(artifactText.toLowerCase()).toMatch(/task|tâche/);
-      expect(fs.readFileSync(path.join(worktree, "README.md"), "utf8")).toBe(
-        fs.readFileSync(path.join(cloneRoot, "README.md"), "utf8"),
-      );
-      expect(git(worktree, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
-      // No commit in worktree / clone
-      expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
-      expect(git(cloneRoot, ["status", "--porcelain"])).toMatch(/^$/);

-      // Outer harness must not have created the artifact in clone root either
-      // (worktree is isolated; clone stays clean)
-      expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);
+      // LAUNCHED + processRef established — cleanup boundary crossed.
+      const processRef = String(launched!.processRef);
+      harnessState.realLaunchConsumed = true;
+      harnessState.attemptId = attemptId;
+      harnessState.processRef = processRef;
+      harnessState.executionContractId = contract.executionContractId;
+      harnessState.proofRoot = root;
+      harnessState.execRoot = execRoot;
+      harnessState.safetyJournalPath = safetyJournalPath;
+      harnessState.productDbPath = path.join(root, "oa.sqlite");
+      harnessState.managedClonePath = cloneRoot;
+      await writeLaunchFrontierSnapshot({ state: harnessState });

-      const ingested = await ingestDocsWriteArtifactEvidence({
-        evidenceReviewServices: oa.evidenceReviewServices,
-        projectId,
-        cycleInstanceId,
-        executionContractId: contract.executionContractId,
-        executionAttemptId: attemptId,
-        targetPath: TARGET_PATH,
-        digest: completed.facts.digest,
-        actor: PILOTE,
-        nowIso: oa.clock.nowIso(),
-      });
-      expect(ingested.ok).toBe(true);
-      if (!ingested.ok) throw new Error(ingested.code);
+      try {
+        const attemptRunning =
+          await attempts.getExecutionAttempt.execute({ attemptId });
+        expect(attemptRunning.ok).toBe(true);
+        if (!attemptRunning.ok) throw new Error("attempt missing");

-      const artLoaded = await oa.evidenceReviewServices.evidenceReader.findById(
-        ingested.evidenceId,
-      );
-      expect(artLoaded).toBeTruthy();
-      // Payload script for integrity (same pattern as deterministic E2E)
-      const evidenceSvc = oa.evidenceReviewServices as typeof oa.evidenceReviewServices & {
-        payload?: {
-          setScript?: (
-            id: string,
-            s: { availability: "available"; digest: string },
-          ) => void;
-        };
-      };
-      evidenceSvc.payload?.setScript?.(ingested.evidenceId, {
-        availability: "available",
-        digest: completed.facts.digest,
-      });
-      const artVerified =
-        await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
-          evidenceId: ingested.evidenceId,
-          expectedVersion: artLoaded!.version,
-          actor: PILOTE,
+        const completed = await completeBoundedDocsWriteLaunch({
+          attempt: attemptRunning.attempt,
+          services: attempts,
+          targetPath: TARGET_PATH,
+          pathAllowlist: ["docs/"],
+          statusDiffPort: new NodeLocalGitStatusDiffPort(),
+          awaitIfPending: true,
         });
-      expect(artVerified.ok).toBe(true);
+        expect(completed.ok).toBe(true);
+        if (!completed.ok) {
+          throw new Error(`complete failed: ${completed.code} ${completed.message}`);
+        }
+        expect(completed.status).toBe("succeeded");
+        if (completed.status !== "succeeded") throw new Error("not succeeded");

-      const ecAfter =
-        await oa.executionContractServices.getExecutionContract.execute({
+        const worktree = completed.facts.worktreeRef!;
+        harnessState.worktreeRef = worktree;
+        expect(worktree).toBeTruthy();
+        expect(worktree.includes("sfia-product-proof")).toBe(false);
+        expect(fs.existsSync(path.join(worktree, TARGET_PATH))).toBe(true);
+        const artifactText = fs.readFileSync(
+          path.join(worktree, TARGET_PATH),
+          "utf8",
+        );
+        expect(artifactText.trim().length).toBeGreaterThan(80);
+        expect(artifactText.toLowerCase()).toMatch(/task|tâche/);
+        expect(fs.readFileSync(path.join(worktree, "README.md"), "utf8")).toBe(
+          fs.readFileSync(path.join(cloneRoot, "README.md"), "utf8"),
+        );
+        expect(git(worktree, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
+        // No commit in worktree / clone
+        expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
+        expect(git(cloneRoot, ["status", "--porcelain"])).toMatch(/^$/);
+
+        // Outer harness must not have created the artifact in clone root either
+        // (worktree is isolated; clone stays clean)
+        expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);
+
+        const ingested = await ingestDocsWriteArtifactEvidence({
+          evidenceReviewServices: oa.evidenceReviewServices,
+          projectId,
+          cycleInstanceId,
           executionContractId: contract.executionContractId,
+          executionAttemptId: attemptId,
+          targetPath: TARGET_PATH,
+          digest: completed.facts.digest,
+          actor: PILOTE,
+          nowIso: oa.clock.nowIso(),
         });
-      expect(ecAfter.ok).toBe(true);
-      if (!ecAfter.ok) throw new Error("ec after");
-      // Git requirements remain → EC must NOT be completed
-      expect(ecAfter.contract.status).toBe("confirmed");
-      expect(completed.attempt.status).toBe("succeeded");
-
-      const cycleAfter = await oa.cycleServices.cycles.findById(cycleInstanceId);
-      expect(cycleAfter?.status).not.toBe("closed");
-      expect(cycleAfter?.status).not.toBe("finalized");
-
-      // Persist proof facts for Review Pack (local dirt only)
-      const outDir = path.resolve(
-        APP_ROOT,
-        "../../.tmp-sfia-review/gcec-cursor-real-proof",
-      );
-      fs.mkdirSync(outDir, { recursive: true });
+        expect(ingested.ok).toBe(true);
+        if (!ingested.ok) throw new Error(ingested.code);
+
+        const artLoaded = await oa.evidenceReviewServices.evidenceReader.findById(
+          ingested.evidenceId,
+        );
+        expect(artLoaded).toBeTruthy();
+        // Payload script for integrity (same pattern as deterministic E2E)
+        const evidenceSvc = oa.evidenceReviewServices as typeof oa.evidenceReviewServices & {
+          payload?: {
+            setScript?: (
+              id: string,
+              s: { availability: "available"; digest: string },
+            ) => void;
+          };
+        };
+        evidenceSvc.payload?.setScript?.(ingested.evidenceId, {
+          availability: "available",
+          digest: completed.facts.digest,
+        });
+        const artVerified =
+          await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
+            evidenceId: ingested.evidenceId,
+            expectedVersion: artLoaded!.version,
+            actor: PILOTE,
+          });
+        expect(artVerified.ok).toBe(true);
+
+        const ecAfter =
+          await oa.executionContractServices.getExecutionContract.execute({
+            executionContractId: contract.executionContractId,
+          });
+        expect(ecAfter.ok).toBe(true);
+        if (!ecAfter.ok) throw new Error("ec after");
+        // Git requirements remain → EC must NOT be completed
+        expect(ecAfter.contract.status).toBe("confirmed");
+        expect(completed.attempt.status).toBe("succeeded");
+
+        const cycleAfter = await oa.cycleServices.cycles.findById(cycleInstanceId);
+        expect(cycleAfter?.status).not.toBe("closed");
+        expect(cycleAfter?.status).not.toBe("finalized");
+
+
+      // Persist proof facts for Review Pack BEFORE reconciliationComplete.
+      fs.mkdirSync(PROOF_REVIEW_DIR, { recursive: true });
       fs.writeFileSync(
-        path.join(outDir, "facts.json"),
+        path.join(PROOF_REVIEW_DIR, "facts.json"),
         JSON.stringify(
           {
             projectId,
@@ -735,7 +1002,90 @@ describe.skipIf(!ENABLED)("gcecCursorRealDocsWrite — REAL Product path", () =>
           2,
         ),
       );
-      fs.writeFileSync(path.join(outDir, "functional-design.md"), artifactText);
+      fs.writeFileSync(
+        path.join(PROOF_REVIEW_DIR, "functional-design.md"),
+        artifactText,
+      );
+      writeJson(path.join(PROOF_REVIEW_DIR, "reconciliation-state.json"), {
+        phase: "RECONCILED_SUCCESS",
+        attemptId,
+        executionContractId: contract.executionContractId,
+        processRef: completed.facts.processRef,
+        worktreePath: worktree,
+        artifactExists: true,
+        evidenceId: ingested.evidenceId,
+        reconciliationComplete: true,
+      });
+      harnessState.durableReviewSnapshotWritten = true;
+      harnessState.reconciliationComplete = true;
+      harnessState.worktreeRef = worktree;
+      } catch (err) {
+        // Best-effort observe + Git facts; never convert failure into PASS.
+        let observationSummary: Record<string, unknown> | null = null;
+        try {
+          const port = attempts.realBoundary?.launchPort;
+          if (port && typeof port.observe === "function" && processRef) {
+            const obs = await port.observe(processRef);
+            if (obs) {
+              observationSummary = {
+                processRef: obs.processRef,
+                exitCode: obs.exitCode,
+                timedOut: obs.timedOut,
+                durationMs: obs.durationMs,
+                realProcessInvoked: obs.realProcessInvoked,
+                worktreeRef: obs.worktreeRef ?? null,
+                stdoutCap: (obs.stdout ?? "").slice(0, 1000),
+                stderrCap: (obs.stderr ?? "").slice(0, 1000),
+              };
+              if (obs.worktreeRef) {
+                harnessState.worktreeRef = obs.worktreeRef;
+              }
+            }
+          }
+        } catch {
+          /* ignore observe errors */
+        }
+        if (!harnessState.worktreeRef && harnessState.execRoot) {
+          // Best-effort: first child dir under execRoot if present
+          try {
+            const kids = fs.readdirSync(harnessState.execRoot);
+            if (kids.length === 1) {
+              harnessState.worktreeRef = path.join(
+                harnessState.execRoot,
+                kids[0]!,
+              );
+            }
+          } catch {
+            /* ignore */
+          }
+        }
+        let gitFacts: Record<string, unknown> | null = null;
+        const wt = harnessState.worktreeRef;
+        if (wt && fs.existsSync(wt)) {
+          const readmeWt = path.join(wt, "README.md");
+          const readmeClone = path.join(cloneRoot, "README.md");
+          gitFacts = {
+            head: safeGit(wt, ["rev-parse", "HEAD"]),
+            statusPorcelain: safeGit(wt, ["status", "--porcelain"]),
+            diffNameStatus: safeGit(wt, ["diff", "--name-status"]),
+            targetArtifactExists: fs.existsSync(path.join(wt, TARGET_PATH)),
+            readmeSha256: sha256FileOrMissing(readmeWt),
+            cloneReadmeSha256: sha256FileOrMissing(readmeClone),
+            readmeMatchesClone:
+              sha256FileOrMissing(readmeWt) != null &&
+              sha256FileOrMissing(readmeWt) ===
+                sha256FileOrMissing(readmeClone),
+          };
+        }
+        await writeFailureReconciliationSnapshot({
+          state: harnessState,
+          error: err,
+          observationSummary,
+          gitFacts,
+        });
+        throw err;
+      }
+
     },
     20 * 60 * 1000,
   );
```

## FULL FILE EMBED — current harness

```typescript
/**
 * GCEC-CURSOR-REAL — bounded REAL Cursor docs-write proof.
 *
 * NEVER runs the REAL scenario in ordinary vitest suites.
 * Requires BOTH:
 *   SFIA_STUDIO_CURSOR_REAL=1
 *   SFIA_GCEC_CURSOR_REAL_PROOF=1
 * Plus env:
 *   SFIA_GCEC_MANAGED_REPO_BASE=/path/to/managed/base
 *   (clone at {base}/mcleland147__sfia-gcec-proof-task-manager @ BASE_SHA)
 *
 * CR-GCEC-REAL-01: after LAUNCHED + processRef, forensic roots are preserved on
 * post-launch failure (no blind afterEach rm of DB/journal/worktree/proofRoot).
 *
 * Outer harness MUST NOT create docs/functional-design.md — only runtime Cursor.
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
  ManagedProjectRepositoryResolver,
  sanitizeManagedRepoIdentity,
} from "@/lib/oa/execution-attempt";
import { NodeLocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import { F3_CONFIRM_ACTION_REF } from "@/features/project-assistant/f3/constants";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
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
  process.env.SFIA_GCEC_CURSOR_REAL_PROOF === "1";

const APP_ROOT = path.resolve(__dirname, "../../..");
/** Product worktree root (sfia-product-proof-…). */
const WORKSPACE_ROOT = path.resolve(APP_ROOT, "../../..");
const PROOF_REVIEW_DIR = path.join(
  WORKSPACE_ROOT,
  ".tmp-sfia-review/gcec-cursor-real-proof",
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
const NOW = "2026-09-11T17:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const ARTIFACT_BRIEF =
  "Functional design for a simple personal task manager (Gestion de tâches). Actor: single end user. Business object: Task.";

const CONTENT_REQUIREMENTS = [
  "Task fields: identifier, mandatory title, optional description, status, optional due date",
  "Statuses: TODO, IN_PROGRESS, DONE",
  "Flows: create task, list tasks, filter by status, edit task, change status",
  "Rules: blank title refused; status must be in defined set; due date optional",
  "Acceptance criteria: observable/testable for the flows above",
  "OUT OF SCOPE: authentication, multi-user, notifications, architecture, DB, API, framework, pixel UX",
];

/** Harness-local only — not Product domain persistence. */
export type RealProofHarnessState = {
  realLaunchConsumed: boolean;
  reconciliationComplete: boolean;
  attemptId?: string;
  processRef?: string;
  proofRoot?: string;
  execRoot?: string;
  safetyJournalPath?: string;
  productDbPath?: string;
  worktreeRef?: string;
  managedClonePath?: string;
  executionContractId?: string;
  failure?: string;
  durableReviewSnapshotWritten: boolean;
};

export function createRealProofHarnessState(): RealProofHarnessState {
  return {
    realLaunchConsumed: false,
    reconciliationComplete: false,
    durableReviewSnapshotWritten: false,
  };
}

/**
 * Cleanup predicate (CR-GCEC-REAL-01):
 * - before LAUNCHED → cleanup allowed
 * - after LAUNCHED until reconciliationComplete → PRESERVE
 * - after reconciliationComplete (implies durable review snapshot) → cleanup allowed
 */
export function shouldPreserveRealProofState(input: {
  realLaunchConsumed: boolean;
  reconciliationComplete: boolean;
}): boolean {
  return input.realLaunchConsumed === true && input.reconciliationComplete !== true;
}

/** Apply temp-root cleanup policy; returns whether roots were deleted. */
export function applyRealProofTempCleanup(input: {
  realLaunchConsumed: boolean;
  reconciliationComplete: boolean;
  roots: readonly string[];
}): { preserved: boolean; deleted: string[] } {
  if (shouldPreserveRealProofState(input)) {
    return { preserved: true, deleted: [] };
  }
  const deleted: string[] = [];
  for (const root of input.roots) {
    try {
      fs.rmSync(root, { recursive: true, force: true });
      deleted.push(root);
    } catch {
      /* ignore */
    }
  }
  return { preserved: false, deleted };
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

const temps: string[] = [];
const harnessState = createRealProofHarnessState();

/**
 * resetRuntimeApplicationServiceForTests (inspected):
 * - calls service.dispose() → product SQLite store.close()
 * - nulls process-local singleton
 * - does NOT unlink productDbPath / safety journal / worktrees
 * Safe for handle release during preserve; file paths must remain on disk.
 */
afterEach(() => {
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
  const preserve = shouldPreserveRealProofState(harnessState);
  if (preserve) {
    // Abandon tracking without deleting forensic roots.
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
  // Do not clear harnessState here if a prior REAL failure is still unreconciled
  // in the same process — preservation must survive afterEach for that run.
  if (!shouldPreserveRealProofState(harnessState)) {
    Object.assign(harnessState, createRealProofHarnessState());
  }
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
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:gcec-real-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:gcec-real-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:gcec-real-${this.prefix}-${this.n}`;
  }
}

function requireAuth(
  auth: ReturnType<typeof registerLocalPiloteAuthority>,
): string {
  if (!auth.ok) throw new Error(`auth: ${auth.code}`);
  return auth.evidenceId;
}

async function writeLaunchFrontierSnapshot(input: {
  state: RealProofHarnessState;
  phase?: string;
}): Promise<void> {
  writeJson(path.join(PROOF_REVIEW_DIR, "launch-frontier.json"), {
    timestamp: new Date().toISOString(),
    attemptId: input.state.attemptId ?? null,
    executionContractId: input.state.executionContractId ?? null,
    processRef: input.state.processRef ?? null,
    proofRoot: input.state.proofRoot ?? null,
    execRoot: input.state.execRoot ?? null,
    safetyJournalPath: input.state.safetyJournalPath ?? null,
    productDbPath: input.state.productDbPath ?? null,
    managedClonePath: input.state.managedClonePath ?? null,
    remoteBaseSha: BASE_SHA,
    phase: input.phase ?? "LAUNCHED_UNRECONCILED",
  });
}

async function writeFailureReconciliationSnapshot(input: {
  state: RealProofHarnessState;
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
    attemptId: input.state.attemptId ?? null,
    executionContractId: input.state.executionContractId ?? null,
    processRef: input.state.processRef ?? null,
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

// ---------------------------------------------------------------------------
// Deterministic harness-safety tests (ALWAYS run; REAL flags OFF)
// ---------------------------------------------------------------------------
describe("gcecCursorRealDocsWrite — harness reconciliation safety", () => {
  it("shouldPreserveRealProofState matrix", () => {
    expect(
      shouldPreserveRealProofState({
        realLaunchConsumed: false,
        reconciliationComplete: false,
      }),
    ).toBe(false);
    expect(
      shouldPreserveRealProofState({
        realLaunchConsumed: false,
        reconciliationComplete: true,
      }),
    ).toBe(false);
    expect(
      shouldPreserveRealProofState({
        realLaunchConsumed: true,
        reconciliationComplete: false,
      }),
    ).toBe(true);
    expect(
      shouldPreserveRealProofState({
        realLaunchConsumed: true,
        reconciliationComplete: true,
      }),
    ).toBe(false);
  });

  it("preserve-on-failure does not delete temp root after LAUNCHED", () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gcec-preserve-"));
    const marker = path.join(root, "forensic-marker.txt");
    fs.writeFileSync(marker, "keep-me\n", "utf8");
    const result = applyRealProofTempCleanup({
      realLaunchConsumed: true,
      reconciliationComplete: false,
      roots: [root],
    });
    expect(result.preserved).toBe(true);
    expect(result.deleted).toEqual([]);
    expect(fs.existsSync(marker)).toBe(true);
    // Test hygiene only — not production cleanup policy
    fs.rmSync(root, { recursive: true, force: true });
  });

  it("cleanup allowed before LAUNCHED and after reconciliationComplete", () => {
    const before = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gcec-pre-"));
    fs.writeFileSync(path.join(before, "x"), "1");
    const r1 = applyRealProofTempCleanup({
      realLaunchConsumed: false,
      reconciliationComplete: false,
      roots: [before],
    });
    expect(r1.preserved).toBe(false);
    expect(fs.existsSync(before)).toBe(false);

    const after = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gcec-post-"));
    fs.writeFileSync(path.join(after, "x"), "1");
    const r2 = applyRealProofTempCleanup({
      realLaunchConsumed: true,
      reconciliationComplete: true,
      roots: [after],
    });
    expect(r2.preserved).toBe(false);
    expect(fs.existsSync(after)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// REAL Product path (SKIPPED unless dual env gate ON)
// ---------------------------------------------------------------------------
describe.skipIf(!ENABLED)("gcecCursorRealDocsWrite — REAL Product path", () => {
  it(
    "ONE StartExecution REAL Cursor creates docs/functional-design.md only",
    async () => {
      const managedBase = process.env.SFIA_GCEC_MANAGED_REPO_BASE?.trim();
      expect(managedBase, "SFIA_GCEC_MANAGED_REPO_BASE required").toBeTruthy();
      const sanitized = sanitizeManagedRepoIdentity(IDENTITY);
      const cloneRoot = path.join(managedBase!, sanitized);
      expect(fs.existsSync(path.join(cloneRoot, ".git"))).toBe(true);
      expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
      expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);
      const resolved =
        new ManagedProjectRepositoryResolver().resolveLocalRepoRoot(
          { identity: IDENTITY },
          managedBase!,
        );
      expect(resolved).toBe(cloneRoot);
      // Must never target sfia-workspace
      expect(cloneRoot.includes("sfia-product-proof")).toBe(false);
      expect(cloneRoot.includes("sfia-workspace")).toBe(false);

      const root = tempDir("sfia-gcec-real-");
      const execRoot = path.join(root, "m4-worktrees");
      const safetyJournalPath = path.join(root, "m4", "launch-safety.sqlite");
      fs.mkdirSync(execRoot, { recursive: true });
      fs.mkdirSync(path.dirname(safetyJournalPath), { recursive: true });

      const runtime = getRuntimeApplicationService({
        registryRoot: REGISTRY_ROOT,
        schemasRoot: SCHEMAS_ROOT,
        nowIso: NOW,
        idSource: new FixedIdSource("docs"),
        auditMode: "noop",
        productDbPath: path.join(root, "oa.sqlite"),
        realBoundaryEnv: {
          ...process.env,
          SFIA_STUDIO_CURSOR_REAL: "1",
        },
        realBoundaryComposition: {
          managedRepoRootBase: managedBase!,
          execRoot,
          safetyJournalPath,
          // Ambient RO root must not be used for docs-write; still set away from Product.
          repoRoot: cloneRoot,
          studioRoot: path.resolve(APP_ROOT, ".."),
        },
      });
      const oa = runtime.oa!;
      expect(oa.executionAttemptServices.realBoundary).toBeTruthy();
      expect(
        oa.executionAttemptServices.realBoundary?.managedRepoRootBase,
      ).toBe(path.resolve(managedBase!));

      const created = await runtime.createProject({
        name: "Gestion de tâches",
        objective: "GCEC Cursor REAL docs-write proof",
        context: "proof-vehicle",
        criticality: "STANDARD",
        constraints: ["BOUNDED REAL DOCS-WRITE ONLY"],
        shortReference: "GCECREAL",
        idempotencyKey: "idem:gcec-cursor-real",
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
            rationale: "GCEC-CURSOR-REAL",
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
        newTrajectoryId: () => `trj:gcec-real-${projectId}`,
        newStepId: () => `stp:fd-real`,
        newProvenanceObservationId: () => `epi:gcec-real-trj`,
        correlationId: `cor:gcec-real-bridge`,
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
        rationale: "GCEC-CURSOR-REAL",
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
        evidenceId: `evd:gcec-real-exec:${contract.executionContractId}`,
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

      // Pre-flight: target still absent in clone (outer Cursor must not write)
      expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);

      const attemptId = `xat:gcec-real:${contract.executionContractId}`.slice(
        0,
        128,
      );
      const attempts = oa.executionAttemptServices;
      const selected = await attempts.selectExecutionAgent.execute({
        attemptId,
        executionContractId: contract.executionContractId,
        idempotencyKey: `idem:sel:${attemptId}`,
        actor: PILOTE,
        authorityEvidenceId: requireAuth(execAuth),
        expectedContractVersion: contract.version,
        selectionProfile: "standard",
        selectionStrategy: "capabilities_deterministic",
        requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
        systemInitiated: true,
      });
      expect(selected.ok).toBe(true);
      if (!selected.ok) throw new Error(selected.error.message);

      const expiresAt = new Date(Date.parse(NOW) + 60 * 60 * 1000).toISOString();
      const grantId = `gd:gcec-real:${attemptId}`.slice(0, 128);
      const gate = await attempts.grantRealExecutionGate!.execute({
        grantId,
        attemptId,
        actor: PILOTE,
        expiresAt,
        authorityEvidenceId: requireAuth(execAuth),
      });
      expect(gate.ok).toBe(true);
      if (!gate.ok) throw new Error(gate.error.message);

      // ONE REAL StartExecution — no Git Confirmations → FS slice only
      const started = await attempts.startExecution.execute({
        attemptId,
        actor: PILOTE,
        authorityEvidenceId: requireAuth(execAuth),
        confirmations: [] as Confirmation[],
      });
      expect(started.ok).toBe(true);
      if (!started.ok) {
        throw new Error(
          `StartExecution failed: ${started.error.detailCode} ${started.error.internalCauseRef ?? ""} ${started.error.message}`,
        );
      }
      expect(started.attempt.status).toBe("running");
      // REAL spawn-ACK is proven via safety journal LAUNCHED + gateway path
      // (Attempt aggregate may not surface realProcessInvoked as a field).
      const frontiers =
        await attempts.realBoundary!.safetyJournal.findFrontierByAttempt(
          attemptId,
        );
      const launched = frontiers.find(
        (row) =>
          row.kind === "LAUNCHED" &&
          typeof row.processRef === "string" &&
          row.processRef.trim().length > 0,
      );
      expect(launched?.processRef).toBeTruthy();
      expect(String(launched!.processRef)).toMatch(/^(pid:|proc:)/);

      // LAUNCHED + processRef established — cleanup boundary crossed.
      const processRef = String(launched!.processRef);
      harnessState.realLaunchConsumed = true;
      harnessState.attemptId = attemptId;
      harnessState.processRef = processRef;
      harnessState.executionContractId = contract.executionContractId;
      harnessState.proofRoot = root;
      harnessState.execRoot = execRoot;
      harnessState.safetyJournalPath = safetyJournalPath;
      harnessState.productDbPath = path.join(root, "oa.sqlite");
      harnessState.managedClonePath = cloneRoot;
      await writeLaunchFrontierSnapshot({ state: harnessState });

      try {
        const attemptRunning =
          await attempts.getExecutionAttempt.execute({ attemptId });
        expect(attemptRunning.ok).toBe(true);
        if (!attemptRunning.ok) throw new Error("attempt missing");

        const completed = await completeBoundedDocsWriteLaunch({
          attempt: attemptRunning.attempt,
          services: attempts,
          targetPath: TARGET_PATH,
          pathAllowlist: ["docs/"],
          statusDiffPort: new NodeLocalGitStatusDiffPort(),
          awaitIfPending: true,
        });
        expect(completed.ok).toBe(true);
        if (!completed.ok) {
          throw new Error(`complete failed: ${completed.code} ${completed.message}`);
        }
        expect(completed.status).toBe("succeeded");
        if (completed.status !== "succeeded") throw new Error("not succeeded");

        const worktree = completed.facts.worktreeRef!;
        harnessState.worktreeRef = worktree;
        expect(worktree).toBeTruthy();
        expect(worktree.includes("sfia-product-proof")).toBe(false);
        expect(fs.existsSync(path.join(worktree, TARGET_PATH))).toBe(true);
        const artifactText = fs.readFileSync(
          path.join(worktree, TARGET_PATH),
          "utf8",
        );
        expect(artifactText.trim().length).toBeGreaterThan(80);
        expect(artifactText.toLowerCase()).toMatch(/task|tâche/);
        expect(fs.readFileSync(path.join(worktree, "README.md"), "utf8")).toBe(
          fs.readFileSync(path.join(cloneRoot, "README.md"), "utf8"),
        );
        expect(git(worktree, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
        // No commit in worktree / clone
        expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
        expect(git(cloneRoot, ["status", "--porcelain"])).toMatch(/^$/);

        // Outer harness must not have created the artifact in clone root either
        // (worktree is isolated; clone stays clean)
        expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);

        const ingested = await ingestDocsWriteArtifactEvidence({
          evidenceReviewServices: oa.evidenceReviewServices,
          projectId,
          cycleInstanceId,
          executionContractId: contract.executionContractId,
          executionAttemptId: attemptId,
          targetPath: TARGET_PATH,
          digest: completed.facts.digest,
          actor: PILOTE,
          nowIso: oa.clock.nowIso(),
        });
        expect(ingested.ok).toBe(true);
        if (!ingested.ok) throw new Error(ingested.code);

        const artLoaded = await oa.evidenceReviewServices.evidenceReader.findById(
          ingested.evidenceId,
        );
        expect(artLoaded).toBeTruthy();
        // Payload script for integrity (same pattern as deterministic E2E)
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
          digest: completed.facts.digest,
        });
        const artVerified =
          await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
            evidenceId: ingested.evidenceId,
            expectedVersion: artLoaded!.version,
            actor: PILOTE,
          });
        expect(artVerified.ok).toBe(true);

        const ecAfter =
          await oa.executionContractServices.getExecutionContract.execute({
            executionContractId: contract.executionContractId,
          });
        expect(ecAfter.ok).toBe(true);
        if (!ecAfter.ok) throw new Error("ec after");
        // Git requirements remain → EC must NOT be completed
        expect(ecAfter.contract.status).toBe("confirmed");
        expect(completed.attempt.status).toBe("succeeded");

        const cycleAfter = await oa.cycleServices.cycles.findById(cycleInstanceId);
        expect(cycleAfter?.status).not.toBe("closed");
        expect(cycleAfter?.status).not.toBe("finalized");


      // Persist proof facts for Review Pack BEFORE reconciliationComplete.
      fs.mkdirSync(PROOF_REVIEW_DIR, { recursive: true });
      fs.writeFileSync(
        path.join(PROOF_REVIEW_DIR, "facts.json"),
        JSON.stringify(
          {
            projectId,
            cycleInstanceId,
            executionContractId: contract.executionContractId,
            attemptId,
            grantId,
            processRef: completed.facts.processRef,
            worktreeRef: worktree,
            digest: completed.facts.digest,
            realProcessInvoked: true,
            exitCode: completed.observation.exitCode,
            timedOut: completed.observation.timedOut,
            durationMs: completed.observation.durationMs,
            authorizedEffectsHint: "filesystem only (no git Confirmation)",
            artifactPath: TARGET_PATH,
            artifactBytes: Buffer.byteLength(artifactText, "utf8"),
            workspaceHead: BASE_SHA,
            cloneHead: git(cloneRoot, ["rev-parse", "HEAD"]),
            evidenceId: ingested.evidenceId,
            ecStatus: ecAfter.contract.status,
            cycleStatus: cycleAfter?.status,
            stdoutCap: (completed.observation.stdout ?? "").slice(0, 2000),
            stderrCap: (completed.observation.stderr ?? "").slice(0, 1000),
          },
          null,
          2,
        ),
      );
      fs.writeFileSync(
        path.join(PROOF_REVIEW_DIR, "functional-design.md"),
        artifactText,
      );
      writeJson(path.join(PROOF_REVIEW_DIR, "reconciliation-state.json"), {
        phase: "RECONCILED_SUCCESS",
        attemptId,
        executionContractId: contract.executionContractId,
        processRef: completed.facts.processRef,
        worktreePath: worktree,
        artifactExists: true,
        evidenceId: ingested.evidenceId,
        reconciliationComplete: true,
      });
      harnessState.durableReviewSnapshotWritten = true;
      harnessState.reconciliationComplete = true;
      harnessState.worktreeRef = worktree;
      } catch (err) {
        // Best-effort observe + Git facts; never convert failure into PASS.
        let observationSummary: Record<string, unknown> | null = null;
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
          // Best-effort: first child dir under execRoot if present
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
          const readmeWt = path.join(wt, "README.md");
          const readmeClone = path.join(cloneRoot, "README.md");
          gitFacts = {
            head: safeGit(wt, ["rev-parse", "HEAD"]),
            statusPorcelain: safeGit(wt, ["status", "--porcelain"]),
            diffNameStatus: safeGit(wt, ["diff", "--name-status"]),
            targetArtifactExists: fs.existsSync(path.join(wt, TARGET_PATH)),
            readmeSha256: sha256FileOrMissing(readmeWt),
            cloneReadmeSha256: sha256FileOrMissing(readmeClone),
            readmeMatchesClone:
              sha256FileOrMissing(readmeWt) != null &&
              sha256FileOrMissing(readmeWt) ===
                sha256FileOrMissing(readmeClone),
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
});
```

## REFERENCE — three prior adaptations (unchanged this lot; still uncommitted)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
index 9670400a..d7ba8b05 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
@@ -67,10 +67,13 @@ export async function completeBoundedDocsWriteLaunch(input: {
   statusDiffPort?: LocalGitStatusDiffPort;
   /** Test-only injectable porcelain when git unavailable. */
   nameStatusText?: string;
+  /** See completeBoundedReadOnlyLaunch.awaitIfPending. */
+  awaitIfPending?: boolean;
 }): Promise<CompleteBoundedDocsWriteLaunchResult> {
   const base = await completeBoundedReadOnlyLaunch({
     attempt: input.attempt,
     services: input.services,
+    awaitIfPending: input.awaitIfPending,
   });
   if (!base.ok) return base;
   if (base.status !== "succeeded") {
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
index eeab483a..33010ac2 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
@@ -92,6 +92,12 @@ export function toNoraObservationFacts(input: {
 export async function completeBoundedReadOnlyLaunch(input: {
   attempt: ExecutionAttempt;
   services: ExecutionAttemptServices;
+  /**
+   * When true and the process is still live after spawn-ACK, await terminal
+   * observation instead of returning status "running". Default false preserves
+   * async continuation (T-R3-PENDING / T-R3-ASYNC-CONTINUATION).
+   */
+  awaitIfPending?: boolean;
 }): Promise<CompleteBoundedReadOnlyLaunchResult> {
   const realBoundary = input.services.realBoundary;
   if (!realBoundary) {
@@ -147,13 +153,20 @@ export async function completeBoundedReadOnlyLaunch(input: {
     observation.timedOut !== true &&
     observation.exitCode === null;
   if (pendingObservation) {
-    return {
-      ok: true,
-      status: "running",
-      attempt: input.attempt,
-      observation,
-      facts: null,
-    };
+    if (input.awaitIfPending === true) {
+      // Opt-in for REAL harness / callers that want a single await-to-terminal.
+      observation = await realBoundary.launchPort.awaitCompletion(
+        launched.processRef,
+      );
+    } else {
+      return {
+        ok: true,
+        status: "running",
+        attempt: input.attempt,
+        observation,
+        facts: null,
+      };
+    }
   }

   if (!observation) {
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index ad2cfa6d..4e2af8ae 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -236,6 +236,9 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         "Ne créer/modifier AUCUN autre fichier.",
         "Ne supprimer AUCUN fichier (noDelete=true).",
         "Ne pas commit, push, PR, merge, ni remote git.",
+        "Ne lancer aucune commande Shell.",
+        "Utiliser uniquement les outils d'édition de fichiers (Write/StrReplace).",
+        "Ne pas modifier README.md.",
         "En cas d'ambiguïté ou de chemin hors allowlist: STOP immédiatement.",
         `target=${request.target ?? ""}`,
         `action=${request.action ?? ""}`,
```
