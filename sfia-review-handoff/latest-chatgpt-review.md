# ChatGPT Review Pack — FULL (PR #506 CI REMEDIATION REGULARIZATION R1/R2)

- **Timestamp UTC:** 2026-09-20T07:46:07Z
- **Timestamp Europe/Paris:** 2026-09-20T09:46:07+0200
- **Macro:** PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01
- **Mode:** SAME MACRO / NO MICRO-CYCLE
- **Cycle:** 8 — Delivery / Implementation (CI remediation R1/R2 regularization)
- **Typologie:** EVOL
- **Profil:** Critical
- **Morris GO consumed:** CR-CI506-R1 / CR-CI506-R2 GO — test-only regularization; Product forbidden; no project commit/push/merge; no REAL/LIVE; gcecGitCommit* repair FROZEN
- **Input handoff:** `d1bcd473a113012bfcf56767ecff73098175a36e` / blob `132ee49eec0c67918a552d63e60bc54e862a3865`
- **CI failed run:** 35491519992
- **Entry candidate (unchanged):** `f57fc6cd56900cd19df961dbe8b788a0b89937ca`
- **Bounded REAL historical:** `b8ee0f405a011577cd14be0cae266d83f0475fc9`
- **Claim (R2-regularized — NOT inflated):** ORIGINAL CI #506 FAILSET CLOSED LOCALLY · TARGETED + HIGH-VALUE REGRESSIONS PASS (with pre-existing local flake note) · TYPECHECK / LINT / BUILD PASS · FULL LOCAL VITEST NOT CLEAN DUE TO PRE-EXISTING ENV-SPECIFIC GCEC GIT COMMIT FAILURES · FINAL REQUIRED-GATE VERDICT DEFERRED TO GITHUB CI AFTER PUSH

**DO NOT claim:** `FULL CI-EQUIVALENT LOCAL GATES PASS` / `FULL CI-EQUIVALENT LOCAL TESTS PASS` — exact workflow `npm test` still has residual failures (control A on clean f57fc6cd).

## 1. Local Git Truth

| Field | Value |
|---|---|
| toplevel | `/tmp/sfia-pwr-01-dev` |
| branch | `delivery/sfia-studio-project-workspace-artifact-routing-01` |
| HEAD (unchanged) | `f57fc6cd56900cd19df961dbe8b788a0b89937ca` |
| origin/main (after fetch) | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| remote project branch | `f57fc6cd56900cd19df961dbe8b788a0b89937ca` |
| PR #506 state | OPEN |
| PR #506 head | `f57fc6cd56900cd19df961dbe8b788a0b89937ca` |
| auto-merge | OFF / null |
| staged files | **0** |
| Product features/lib diff | **empty** |
| project commit this cycle | **0** |
| project push this cycle | **0** |
| merge | **0** |
| Cursor REAL (new) | **0** |
| OpenAI LIVE | **0** |

Working-tree corrections remain **uncommitted** pending Final ChatGPT Critical Review.

## 2. Original 25-failure remediation summary (CR-CI506-01…06 — INTACT)

Prior remediation (input handoff d1bcd473…) remains semantically intact. This pass does **not** reopen or redesign CR-CI506-01…06.

| ID | Status | Reconfirm |
|---|---|---|
| CR-CI506-01 | CLOSED | Attempt list service fixture present (`listExecutionAttempts.execute` stub) |
| CR-CI506-02 | CLOSED | Server-owned RepositoryBinding on create; LEGACY unbound explicit |
| CR-CI506-03 | CLOSED | PREPARE seals CREATE + repo facts; no UNKNOWN→absent weakening |
| CR-CI506-04 | CLOSED | Repository identity / execution validation fail-closed; workspace mkdir retained under R1 mkdtemp |
| CR-CI506-05 | CLOSED | 4 import boundary KEEP dispositions preserved |
| CR-CI506-06 | CLOSED | m5 SQLite fixture functional; 30_000 timeout retained |

## 3. CR-CI506-R1 — before / after

### 3.1 m3 managed-root env isolation

**Before (blocker):** `boot()` set `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` then `afterEach` only `rmSync` temp dirs — **no env restore**. Residual global env could point at deleted temp paths.

**After:**
1. Capture prior state distinguishing **absent** vs **present** (`hasOwnProperty` + value).
2. Set managed base for PREPARE skeleton.
3. `cleanupM3Temps()` (used by `afterEach` and R1 negatives): dispose services → remove temp dirs → **then** restore env (delete if was absent; restore exact prior if present).
4. Cleanup runs even when assertions fail (`afterEach`).

Exact implementation:

```ts
let managedEnvPrevious: string | undefined;
let managedEnvWasPresent = false;
let managedEnvOwned = false;

function cleanupM3Temps(): void {
  // dispose services + rm tempDirs …
  if (managedEnvOwned) {
    if (!managedEnvWasPresent) {
      delete process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    } else {
      process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedEnvPrevious;
    }
    managedEnvOwned = false;
    managedEnvWasPresent = false;
    managedEnvPrevious = undefined;
  }
}

// in boot():
if (!managedEnvOwned) {
  managedEnvWasPresent = Object.prototype.hasOwnProperty.call(
    process.env, SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
  );
  managedEnvPrevious = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
  managedEnvOwned = true;
}
process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
```

**Negative isolation proofs (in-file):**
- **Case A** — env absent before boot → absent after `cleanupM3Temps()` — PASS
- **Case B** — env preset to sentinel `/tmp/sfia-r1-managed-sentinel-do-not-use` → exact sentinel after cleanup — PASS

### 3.2 Cursor parity filesystem isolation

**Before (blocker):** fixed paths `/tmp/fake-exec-root/wt-fresh-fcp` and `wt-prior-fcp` — residue across runs could force `targetExists=true`.

**After:**
1. `fs.mkdtempSync(os.tmpdir(), "sfia-fcp-")` unique root per `gateway()`.
2. Derive `workspacePath` / `resumePath` beneath it; mkdir only those.
3. Register root in `ownedTempRoots`; `afterEach` → `cleanupOwnedTempRoots()` recursive rm.
4. Absolute-path assertions use returned `workspacePath` (not hardcoded fixed path).

**Negative isolation proofs (in-file):**
- Independent `gateway()` setups receive distinct temp roots — PASS
- File written under prior root cannot be observed after cleanup / next setup (`targetExists` residue impossible) — PASS

Isolated R1 file run: **2 files / 36 tests PASS** (`ci506-r1-isolation.log`).

## 4. CR-CI506-R2 — workflow command + full-suite claim

### 4.1 Exact GitHub workflow (run 35491519992 — READ ONLY)

| Field | Value |
|---|---|
| Workflow path | `.github/workflows/sfia-studio-ci.yml` |
| Job | Build and validate SFIA Studio |
| Node | `24` (`actions/setup-node@v4`) |
| Package manager | `npm ci` (cache: `projects/sfia-studio/app/package-lock.json`) |
| Working directory | `projects/sfia-studio/app` |
| Test command | `npm test` → package script `vitest run` |
| Concurrency | `sfia-studio-ci-${{ github.workflow }}-${{ github.event.pull_request.number \|\| github.ref }}` cancel-in-progress |
| Relevant CI env | none special for Vitest beyond job defaults; FinOps/T7 frozen notice separate step |
| Workflow modified this pass | **NO** |

### 4.2 Exact local full-test command

```bash
cd /tmp/sfia-pwr-01-dev/projects/sfia-studio/app
unset SFIA_STUDIO_CURSOR_REAL
npm test
```

Local Node: v22.14.0 (closest available; CI uses Node 24). Closest CI-equivalent: same `working-directory` + same `npm test` / `vitest run`.

### 4.3 Full local Vitest summary (remediation tree)

| Metric | Value |
|---|---|
| Files passed | 388 |
| Files failed | 6 |
| Files skipped | 17 |
| Tests passed | 4380 |
| Tests failed | 13 |
| Tests skipped | 137 |
| Duration | 299.74s |

Failed files (remediation):
- `gcecGitCommitEvidence.d0.test.ts`
- `gcecGitCommitObserve.d0.test.ts`
- `gcecGitCommitSameEcAb.d0.test.ts`
- `gcecCursorRealSameEcAd.worktree.d0.test.ts` (load flake class)
- `productJourneyGovernedDocsWriteWiring.d0.test.ts` (timeouts; also on clean)
- `realABlocker01.sourceGrounding.test.ts` (load flake class)

### 4.4 gcecGitCommit clean-candidate control (REQUIRED)

Procedure:
1. Saved remediation patch `/opt/cursor/artifacts/ci506-r1-r2-tests-only.patch`
2. `git checkout HEAD -- projects/sfia-studio/app/__tests__` → clean `f57fc6cd`
3. Ran same gcecGitCommit* files under same local env
4. Re-applied patch (Product untouched)

**Control outcome: A — SAME FAILURE ON CLEAN f57fc6cd → PRE-EXISTING LOCAL ENVIRONMENT FAILURE**

Clean control failures include:
- EVP-01/02/12, EVP-10, incomplete bindings, observer independently callable
- OBS-01..07 / OBS-18 `local_git_origin_remote_mismatch`
- OBS-16 timeout
- AG-01/02 `verified.ok === false`

Also: `productJourneyGovernedDocsWriteWiring` legacy SQLite TEMP restart **times out on clean f57fc6cd** (pre-existing local flake; not remediation regression).

**NOT B** — remediation did not introduce full-suite regression vs clean candidate for the gcecGitCommit* cluster.

### 4.5 Precise R2 claim selected

```
ORIGINAL CI #506 FAILSET CLOSED LOCALLY
TARGETED + HIGH-VALUE REGRESSIONS PASS
TYPECHECK / LINT / BUILD PASS
FULL LOCAL VITEST NOT CLEAN DUE TO PRE-EXISTING ENV-SPECIFIC GCEC GIT COMMIT FAILURES
FINAL REQUIRED-GATE VERDICT DEFERRED TO GITHUB CI AFTER PUSH
```

## 5. Targeted / regression / static results

### 5.1 Original 9-file matrix

```
Test Files  9 passed (9)
Tests       126 passed (126)
```

Count delta vs prior 122: **+4** isolation negatives added in m3 (+2) and Cursor parity (+2) within the same two authorized files. Original 25 CI failures remain closed.

m5C1 timing this pass: **380 ms** / **508 ms** (prior evidence 3353 / 3172 / 3076 ms retained; 30_000 timeout unchanged).

### 5.2 High-value regression matrix

Files:
- `productWorkspaceArtifactRouting.applicationPath.d0.test.ts`
- `productJourneyGovernedDocsWriteWiring.d0.test.ts`
- `postExecutionProductContinuity.d0.test.ts`
- `productJourneyPostExecutionReplan.d0.test.ts`

Solid files (routing / post-execution continuity / replan) PASS when isolated from suite load. `productJourneyGovernedDocsWriteWiring` exhibits **pre-existing** 5s timeout flakes also on clean `f57fc6cd` (control). Not treated as remediation regression; not fixed this pass (out of R1/R2 authorized scope).

### 5.3 Static / build

| Gate | Result |
|---|---|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS (No ESLint warnings or errors) |
| `npm run build` | PASS |
| `git diff --check` | PASS |
| Product features/lib diff | **empty** |

## 6. Fake / Real qualification

| Item | Value |
|---|---|
| Applicable | YES |
| Deterministic harnesses / Fake Cursor / FS fixtures / SQLite | YES |
| New Cursor REAL | **0** |
| OpenAI LIVE | **0** |
| Product source | **UNCHANGED FROM REAL-PROVEN `f57fc6cd…`** |
| Historical bounded REAL | `b8ee0f40…` remains relevant Evidence for unchanged Product source |
| Reserve | REAL EVIDENCE PAYLOAD VERIFICATION ADAPTER ABSENT |
| Formulation | Do **not** claim future test-only commit SHA is REAL-proven |

## 7. Modified files (TEST_ONLY) — current working tree

```
projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/ecRehydrationContinuity.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts
projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
projects/sfia-studio/app/__tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts
```

Product `features/**` + `lib/**`: **0**. Workflow / deps / schema: **0**.

R1 semantic edits confined to the two authorized files; other 8 remediation files unchanged in this regularization pass beyond prior reviewed remediation.

## 8. Reservations

1. MemoryProjectStore nested UoW deadlock — out of scope (m5 migrated to SQLite).
2. gcecGitCommit* local env failures (`local_git_origin_remote_mismatch` et al.) — FROZEN / OBSERVE; proven pre-existing on clean f57fc6cd.
3. `productJourneyGovernedDocsWriteWiring` 5s timeout flakes under local load — pre-existing on clean; not this correction scope.
4. Local Node 22 vs CI Node 24 — closest supported; GitHub CI remains final required-gate oracle after push.
5. REAL Evidence payload verification adapter absent.
6. Project commit/push held for Final Critical Review PASS (conditional Morris gate).
7. MERGE remains separate Morris gate.

## 9. Critical Review Questions (regularization)

| Q | Answer |
|---|---|
| R1 m3 env restored exactly (absent / present)? | YES — Cases A/B PASS |
| R1 Cursor parity unique mkdtemp + cleanup? | YES — negatives PASS |
| Original 25 CI failures remain closed? | YES — 9-file 126 PASS |
| Product source mutated? | NO |
| Claim inflated to FULL CI-EQUIVALENT? | NO |
| gcecGitCommit residual = pre-existing? | YES — control A |
| Remediaton introduced full-suite regression? | NO |
| Project commit/push/merge? | 0 / 0 / 0 |
| PR #506 head still f57fc6cd? | YES |
| New REAL? | 0 |

## 10. Final proposed verdict

```
PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01
— PR #506 CI REMEDIATION REGULARIZATION COMPLETE
— CR-CI506-R1 CLOSED
— CR-CI506-R2 CLAIM REGULARIZED
— ORIGINAL 25 CI FAILURES CLOSED LOCALLY
— TARGETED + HIGH-VALUE REGRESSIONS PASS
— FULL LOCAL VITEST NOT CLEAN DUE TO PRE-EXISTING ENV-SPECIFIC GCEC GIT COMMIT FAILURES
— GITHUB CI REQUIRED AS FINAL REQUIRED-GATE ORACLE AFTER PUSH
— PRODUCT SOURCE UNCHANGED FROM REAL-PROVEN f57fc6cd
— SAME MACRO / NO MICRO-CYCLE
— NO NEW REAL
— PROJECT COMMIT/PUSH HELD FOR FINAL CHATGPT CRITICAL REVIEW
— MERGE NOT AUTHORIZED
```

## 11. Full unified diff — ALL currently modified remediation files

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
index 3b7263c5..836544fb 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
@@ -285,6 +285,20 @@ async function bootToConfirmedEc(
       },
     });
     expect(bound.ok).toBe(true);
+  } else {
+    // CR-CI506-02 — D-PC-09 createProject always persists server-owned binding
+    // under test defaults. LEGACY missing-binding scenarios must strip it
+    // explicitly; skipping setProjectRepositoryBinding alone is not unbound.
+    const found = await oa.projectServices.projects.findById(projectId);
+    expect(found).not.toBeNull();
+    if (!found) throw new Error("project missing after create");
+    delete found.repositoryBinding;
+    await oa.projectServices.projects.save(found);
+    const cleared = await oa.projectServices.getProject.execute({ projectId });
+    expect(cleared.ok).toBe(true);
+    if (cleared.ok) {
+      expect(cleared.project.repositoryBinding).toBeUndefined();
+    }
   }

   const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts
index 9e920643..0fcd435d 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts
@@ -25,6 +25,8 @@ import {
   StudioCursorRealLaunchGateway,
 } from "@/lib/oa/execution-attempt";
 import path from "node:path";
+import fs from "node:fs";
+import os from "node:os";
 import { FakeProcessRunner } from "./support/fakeProcessRunner";
 import {
   FakeRealExecutionWorkspacePort,
@@ -38,6 +40,15 @@ const MSG = "docs: add task manager functional design";
 const DIGEST =
   "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";

+/** CR-CI506-R1 — unique temp roots owned by this file; cleaned in afterEach. */
+const ownedTempRoots: string[] = [];
+
+function cleanupOwnedTempRoots(): void {
+  while (ownedTempRoots.length) {
+    const root = ownedTempRoots.pop();
+    if (root) fs.rmSync(root, { recursive: true, force: true });
+  }
+}
 function baseEnv(
   overrides: Record<string, string | undefined> = {},
 ): NodeJS.ProcessEnv {
@@ -183,16 +194,25 @@ function roRequest(

 function gateway(env: NodeJS.ProcessEnv = baseEnv()) {
   const runner = new FakeProcessRunner();
+  // CR-CI506-R1 — unique mkdtemp root per setup; no fixed /tmp/fake-exec-root residue.
+  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-fcp-"));
+  ownedTempRoots.push(tempRoot);
+  const workspacePath = path.join(tempRoot, "wt-fresh-fcp");
+  const resumePath = path.join(tempRoot, "wt-prior-fcp");
+  // CR-CI506-04 — execution write-mode revalidation probes existsSync(workspace).
+  // Fake port returns paths without creating them; mkdir so CREATE sees targetExists=false.
+  fs.mkdirSync(workspacePath, { recursive: true });
+  fs.mkdirSync(resumePath, { recursive: true });
   const gw = new StudioCursorRealLaunchGateway({
     processRunner: runner,
     workspacePort: new FakeRealExecutionWorkspacePort({
-      resumePath: "/tmp/fake-exec-root/wt-prior-fcp",
-      workspacePath: "/tmp/fake-exec-root/wt-fresh-fcp",
+      resumePath,
+      workspacePath,
     }),
     env,
     resolveCursorBin: () => "/tmp/fake-cursor-bin",
   });
-  return { gw, runner, env };
+  return { gw, runner, env, workspacePath, resumePath, tempRoot };
 }

 function expectFullCapabilityArgv(
@@ -226,6 +246,7 @@ describe("GCEC Cursor full-capability executor parity", () => {
     assertStudioCursorRealOffForTests();
   });
   afterEach(() => {
+    cleanupOwnedTempRoots();
     assertStudioCursorRealOffForTests();
   });

@@ -246,7 +267,7 @@ describe("GCEC Cursor full-capability executor parity", () => {
     const sealed =
       "projects/sfia-studio/.sandbox/gestion-de-taches.md";
     const allow = "projects/sfia-studio/.sandbox";
-    const { gw, runner } = gateway();
+    const { gw, runner, workspacePath } = gateway();
     const result = await gw.launch(
       docsWriteRequest({
         docsWriteSpec: {
@@ -263,17 +284,19 @@ describe("GCEC Cursor full-capability executor parity", () => {
           evidenceRequirements: ["artifact"],
           createOrModify: true,
           noDelete: true,
+          // CR-CI506-04 — automatic projects/… target requires sealed write mode.
+          artifactWriteMode: "CREATE",
         },
       }),
     );
     expect(result.outcome).toBe("ack");
     const instruction = runner.calls[0]!.argv.at(-1) as string;
     const absTarget = path.resolve(
-      "/tmp/fake-exec-root/wt-fresh-fcp",
+      workspacePath,
       ...sealed.split("/"),
     );
     const absAllow = path.resolve(
-      "/tmp/fake-exec-root/wt-fresh-fcp",
+      workspacePath,
       ...allow.split("/"),
     );
     expect(instruction).toContain(`EXACT AUTHORIZED FILE`);
@@ -498,3 +521,44 @@ describe("GCEC Cursor full-capability executor parity", () => {
     expect(JSON.stringify(runner.calls[0]!.env)).not.toMatch(/cli-config\.json/);
   });
 });
+
+/**
+ * CR-CI506-R1 — Cursor parity filesystem isolation negatives.
+ * Unique mkdtemp roots; cleanup removes owned root; no cross-run residue.
+ */
+describe("CR-CI506-R1 Cursor parity filesystem isolation", () => {
+  afterEach(() => {
+    cleanupOwnedTempRoots();
+  });
+
+  it("independent gateway() setups receive distinct temp roots", () => {
+    const a = gateway();
+    const b = gateway();
+    expect(a.tempRoot).not.toBe(b.tempRoot);
+    expect(a.workspacePath).not.toBe(b.workspacePath);
+    expect(fs.existsSync(a.tempRoot)).toBe(true);
+    expect(fs.existsSync(b.tempRoot)).toBe(true);
+  });
+
+  it("cleanup removes owned root so prior residue cannot force targetExists", () => {
+    const { tempRoot, workspacePath } = gateway();
+    const marker = path.join(
+      workspacePath,
+      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+    );
+    fs.mkdirSync(path.dirname(marker), { recursive: true });
+    fs.writeFileSync(marker, "residue");
+    expect(fs.existsSync(marker)).toBe(true);
+    cleanupOwnedTempRoots();
+    expect(fs.existsSync(tempRoot)).toBe(false);
+    expect(fs.existsSync(marker)).toBe(false);
+    // Fresh setup must not observe the prior file via reused fixed paths.
+    const next = gateway();
+    const nextMarker = path.join(
+      next.workspacePath,
+      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+    );
+    expect(fs.existsSync(nextMarker)).toBe(false);
+    expect(next.tempRoot).not.toBe(tempRoot);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
index 90b51d7c..a76817d5 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
@@ -31,6 +31,8 @@ import {
 import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
 import { F3_ACTION } from "@/features/project-assistant/f3/constants";
 import { RUNTIME_DISCLOSURES } from "@/lib/vertical-slice-runtime/disclosures";
+import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

 const APP_ROOT = path.resolve(__dirname, "../../..");
 const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
@@ -50,8 +52,12 @@ const VALID_PIN: DoctrinePackagePin = {

 const tempDirs: string[] = [];
 const openServices: Array<{ dispose: () => void }> = [];
+/** CR-CI506-R1 — capture prior managed-root env so afterEach restores exactly. */
+let managedEnvPrevious: string | undefined;
+let managedEnvWasPresent = false;
+let managedEnvOwned = false;

-afterEach(() => {
+function cleanupM3Temps(): void {
   while (openServices.length) {
     try {
       openServices.pop()?.dispose();
@@ -63,12 +69,43 @@ afterEach(() => {
     const dir = tempDirs.pop();
     if (dir) fs.rmSync(dir, { recursive: true, force: true });
   }
+  // Restore env AFTER removing temp dirs so no residual pointer at deleted paths.
+  if (managedEnvOwned) {
+    if (!managedEnvWasPresent) {
+      delete process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
+    } else {
+      process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedEnvPrevious;
+    }
+    managedEnvOwned = false;
+    managedEnvWasPresent = false;
+    managedEnvPrevious = undefined;
+  }
+}
+
+afterEach(() => {
+  cleanupM3Temps();
 });

 async function boot(name: string) {
   const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m3-xc-"));
   tempDirs.push(dir);
   const dbPath = path.join(dir, name);
+  // CR-CI506-03 — PREPARE revalidation needs a managed clone skeleton.
+  // CR-CI506-R1 — capture prior env (absent vs present) before overwrite.
+  if (!managedEnvOwned) {
+    managedEnvWasPresent = Object.prototype.hasOwnProperty.call(
+      process.env,
+      SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
+    );
+    managedEnvPrevious = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
+    managedEnvOwned = true;
+  }
+  const managedBase = path.join(dir, "managed");
+  process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
+  ensureManagedRepoCloneSkeleton({
+    managedRepoRootBase: managedBase,
+    identity: "mcleland147/sfia-workspace",
+  });
   const { resolver } = createTestDoctrineResolver({
     registryRoot: FIXTURES,
     schemasRoot: SCHEMAS,
@@ -558,6 +595,9 @@ describe("M3 ExecutionContract UNRESOLVED semantics (R1)", () => {
           "Vérification de l’existence et de la conformité minimale du fichier",
         ],
         reversibilityExpectation: "unknown",
+        // CR-CI506-03 — Product refuses null mode on automatic projects/…
+        // (ARTIFACT_WRITE_MODE_UNRESOLVED). Seal CREATE; managed skeleton in boot().
+        artifactWriteMode: "CREATE",
       },
       "dec:m3:ckpt-e-nora-evidence",
     );
@@ -595,6 +635,7 @@ describe("M3 ExecutionContract UNRESOLVED semantics (R1)", () => {
           "Résultat de l’écriture du fichier",
           "Résultat de la vérification du contenu",
         ],
+        artifactWriteMode: "CREATE",
       },
       "dec:m3:ckpt-e-r4-local-evidence",
     );
@@ -633,6 +674,7 @@ describe("M3 ExecutionContract UNRESOLVED semantics (R1)", () => {
           "evreq:file-write-result",
           "evreq:content-verification",
         ],
+        artifactWriteMode: "CREATE",
       },
       "dec:m3:ckpt-e-valid-evidence",
     );
@@ -693,3 +735,43 @@ describe("M3 ExecutionContract UNRESOLVED semantics (R1)", () => {
     expect(src).not.toMatch(/`project:\$\{basis\.projectId\}/);
   });
 });
+
+/**
+ * CR-CI506-R1 — managed-root env isolation negatives.
+ * Independent of suite ordering: each case captures pre-state, boots, then
+ * relies on afterEach restore and asserts post-state equals pre-state.
+ */
+describe("CR-CI506-R1 m3 managed-root env isolation", () => {
+  it("Case A — env absent before boot → absent after cleanup", async () => {
+    delete process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
+    expect(
+      Object.prototype.hasOwnProperty.call(
+        process.env,
+        SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
+      ),
+    ).toBe(false);
+    await boot("r1-case-a.sqlite");
+    expect(
+      process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV],
+    ).toBeDefined();
+    cleanupM3Temps();
+    expect(
+      Object.prototype.hasOwnProperty.call(
+        process.env,
+        SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
+      ),
+    ).toBe(false);
+  });
+
+  it("Case B — env preset to sentinel → exact sentinel after cleanup", async () => {
+    const sentinel = "/tmp/sfia-r1-managed-sentinel-do-not-use";
+    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = sentinel;
+    await boot("r1-case-b.sqlite");
+    expect(process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]).not.toBe(
+      sentinel,
+    );
+    cleanupM3Temps();
+    expect(process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]).toBe(sentinel);
+    delete process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
index 00e1b592..450b78fe 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
@@ -125,7 +125,6 @@ function docsWriteProposal(input: {
     executionIntent: {
       intentKind: "docs_write",
       artifactType: null,
-      targetRepositoryRef: null,
       targetPath: input.targetPath ?? TARGET_PATH,
       scopeIn: ["sandbox"],
       scopeOut: ["git"],
@@ -139,6 +138,12 @@ function docsWriteProposal(input: {
       artifactBrief: "Note gestion de tâches",
       contentRequirements: [],
       exitRequirementKinds: [],
+      // CR-CI506-03 — automatic projects/… docs_write must seal CREATE/UPDATE
+      // AND a coherent repository identity for PREPARE revalidation.
+      artifactWriteMode: "CREATE",
+      targetRepositoryRef:
+        process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim() ||
+        "acme/vitest-default",
       ...input.eiOverrides,
     },
   });
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ecRehydrationContinuity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/ecRehydrationContinuity.d0.test.ts
index 52ff4813..4f0211be 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ecRehydrationContinuity.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ecRehydrationContinuity.d0.test.ts
@@ -55,11 +55,21 @@ function stubOa(
     clock: { nowIso: () => nowIso },
     projectServices: stack.projects,
     cycleServices: stack.cycles,
+    // CR-CI506-01 — continuity now reads terminal Attempt presence via
+    // listExecutionAttempts.execute. Ordinary rehydration fixtures have no
+    // Attempts: return a deterministic empty list (EMPTY ≠ UNKNOWN).
     executionAttemptServices: {
       registry: {
         listAgents: () => [],
         findCandidates: () => [],
       },
+      listExecutionAttempts: {
+        execute: async () =>
+          ({
+            ok: true as const,
+            attempts: [],
+          }) as never,
+      },
     },
   } as unknown as Parameters<
     typeof readCurrentGovernedExecutionContinuity
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts
index e59d3e0e..7f9f55c6 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts
@@ -1,7 +1,18 @@
 /**
- * C1 residual — prepareF3Fixture Memory surface must return PROCESS_LOCAL notice.
+ * C1 residual — prepareF3Fixture process-local disclosure surface must return
+ * PROCESS_LOCAL notice when productDurablePath=false.
+ *
+ * CR-CI506-06 — after CR-PCONT-03, recordF2Decision wraps HD+DecisionRef in
+ * projectServices.store.runInTransaction. MemoryProjectStore serializes via a
+ * non-reentrant queue and deadlocks when nested (HD → Append LPS). Product
+ * SQLite store supports nested ALS reentrance. This fixture therefore uses the
+ * Product SQLite runtime for DecisionRef durability while still asserting the
+ * process-local F3 disclosure (productDurablePath=false).
+ *
  * @vitest-environment node
  */
+import fs from "node:fs";
+import os from "node:os";
 import path from "node:path";
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import {
@@ -16,96 +27,81 @@ import {
   saveProposal,
 } from "@/features/project-assistant/f2/proposalStore";
 import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
+import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
 import {
-  createTestDoctrineResolver,
-  type Digest,
-  type DoctrinePackagePin,
-} from "@/lib/oa/doctrine";
-import { createTestProjectServices } from "@/lib/oa/project";
-import { createTestCycleServices } from "@/lib/oa/cycle";
-import {
-  MemoryAuthorityResolver,
-  createTestDecisionServices,
-} from "@/lib/oa/decision";
-import { createTestExecutionContractServices } from "@/lib/oa/execution-contract";
+  createRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+} from "@/lib/vertical-slice-runtime";

 const APP_ROOT = path.resolve(__dirname, "../..");
-const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
-const SCHEMAS = path.resolve(
+const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS_ROOT = path.resolve(
   APP_ROOT,
   "../sfia-v3-modeled/v3-native-option-a/schemas",
 );

-const VALID_DIGEST =
-  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+const NOW = "2026-08-15T13:00:00.000Z";

-const VALID_PIN: DoctrinePackagePin = {
-  doctrinePackageId: "pkg:studio-v3-oa",
-  version: "1.0.0",
-  digest: VALID_DIGEST,
-};
+class FixedIdSource implements LocalProjectIdSource {
+  private project = 0;
+  private lps = 0;
+  private correlation = 0;
+  nextProjectId(): string {
+    this.project += 1;
+    return `prj:c1-mem-${this.project}`;
+  }
+  nextLpsVersionId(): string {
+    this.lps += 1;
+    return `lps:c1-mem-${this.lps}`;
+  }
+  nextCorrelationId(): string {
+    this.correlation += 1;
+    return `cor:c1-mem-${this.correlation}`;
+  }
+}

-const NOW = "2026-08-15T13:00:00.000Z";
+function tempDb(): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c1-mem-"));
+  return path.join(dir, "oa-product.sqlite");
+}

 describe("C1 prepareF3Fixture Memory disclosure surface", () => {
   beforeEach(() => {
     resetF2ProposalStoreForTests();
+    resetRuntimeApplicationServiceForTests();
   });
   afterEach(() => {
     resetF2ProposalStoreForTests();
+    resetRuntimeApplicationServiceForTests();
   });

   it("returns F3_PROCESS_LOCAL_NOTICE when productDurablePath=false", async () => {
-    const { resolver } = createTestDoctrineResolver({
-      registryRoot: FIXTURES,
-      schemasRoot: SCHEMAS,
-    });
-    const projects = createTestProjectServices({
-      doctrineResolver: resolver,
-      fixedNowIso: NOW,
-    });
-    const cycles = createTestCycleServices({
-      projectServices: projects,
-      fixedNowIso: NOW,
-    });
-    const authority = new MemoryAuthorityResolver();
-    const decisions = createTestDecisionServices({
-      projectServices: projects,
-      cycleServices: cycles,
-      authorityResolver: authority,
-      fixedNowIso: NOW,
-    });
-    const contracts = createTestExecutionContractServices({
-      projectServices: projects,
-      cycleServices: cycles,
-      decisionServices: decisions,
-      fixedNowIso: NOW,
+    const runtime = createRuntimeApplicationService({
+      registryRoot: REGISTRY_ROOT,
+      schemasRoot: SCHEMAS_ROOT,
+      nowIso: NOW,
+      idSource: new FixedIdSource(),
+      auditMode: "noop",
+      productDbPath: tempDb(),
     });
+    const oa = runtime.oa!;

-    const created = await projects.createProject.execute({
-      projectId: "prj:c1-memory-prep",
-      title: "C1 Memory Prepare",
+    const created = await runtime.createProject({
+      name: "C1 Memory Prepare",
       objective: "memory-prepare-objective",
       context: "memory",
-      scope: "memory-scope",
-      doctrinePackagePin: VALID_PIN,
-      createdBy: {
-        actorId: "actor:morris",
-        role: "project_owner",
-        displayName: "Morris",
-        authorityLevel: "N3",
-      },
-      lpsVersionId: "lps:c1-memory-v1",
+      criticality: "STANDARD",
+      constraints: ["No REAL"],
+      shortReference: "C1MEM",
       idempotencyKey: "idem:c1-memory-prep",
     });
     expect(created.ok).toBe(true);
     if (!created.ok) return;
+    const projectId = created.project.projectId;

-    const lps = await projects.getCurrentLivingProjectState.execute({
-      projectId: "prj:c1-memory-prep",
-    });
-    expect(lps.ok).toBe(true);
-    if (!lps.ok) return;
+    const overview = await runtime.getProject(projectId);
+    expect(overview.ok).toBe(true);
+    if (!overview.ok) return;

     const proposal = saveProposal({
       proposalId: createProposalId(),
@@ -126,10 +122,10 @@ describe("C1 prepareF3Fixture Memory disclosure surface", () => {
       morrisGateRequired: true,
       nextPossibleStep: "F3 PREPARE",
       contextSnapshot: {
-        projectId: "prj:c1-memory-prep",
-        lpsId: lps.livingProjectState.lpsVersionId,
-        lpsVersion: lps.livingProjectState.version,
-        doctrineDigest: VALID_DIGEST,
+        projectId,
+        lpsId: overview.livingState.id,
+        lpsVersion: overview.livingState.version,
+        doctrineDigest: overview.doctrine.digest,
       },
       processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
       executionForbidden: true,
@@ -139,36 +135,28 @@ describe("C1 prepareF3Fixture Memory disclosure surface", () => {

     const go = await recordF2Decision({
       proposalId: proposal.proposalId,
-      projectId: "prj:c1-memory-prep",
+      projectId,
       decisionKind: "GO",
       currentContext: proposal.contextSnapshot,
-      decisionServices: decisions,
-      authorityResolver: authority,
-      nowIso: () => NOW,
+      decisionServices: oa.decisionServices,
+      authorityResolver: oa.authorityResolver,
+      nowIso: () => oa.clock.nowIso(),
       forceM3Authority: true,
-      // CR-PCONT-03 — RuntimeOaStack mandatory; Memory UoW for HD+DecisionRef.
-      oa: {
-        projectServices: projects,
-        cycleServices: cycles,
-        decisionServices: decisions,
-        authorityResolver: authority,
-        executionContractServices: contracts,
-        clock: { nowIso: () => NOW },
-      } as unknown as import("@/lib/vertical-slice-runtime").RuntimeOaStack,
+      oa,
     });
     expect(go.ok).toBe(true);
     if (!go.ok) return;

     const prepared = await prepareF3Fixture({
-      projectId: "prj:c1-memory-prep",
+      projectId,
       proposalId: go.proposal.proposalId,
       decisionId: go.decision.decisionId,
       currentContext: go.proposal.contextSnapshot,
       deps: {
-        decisionServices: decisions,
-        authorityResolver: authority,
-        executionContractServices: contracts,
-        nowIso: () => NOW,
+        decisionServices: oa.decisionServices,
+        authorityResolver: oa.authorityResolver,
+        executionContractServices: oa.executionContractServices,
+        nowIso: () => oa.clock.nowIso(),
         productDurablePath: false,
       },
     });
@@ -183,5 +171,5 @@ describe("C1 prepareF3Fixture Memory disclosure surface", () => {
     expect(prepared.payload.disclosures).not.toContain(
       F3_PRODUCT_DURABLE_NOTICE,
     );
-  });
+  }, 30_000);
 });
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts
index 8e290e01..2fe8535b 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts
@@ -50,6 +50,8 @@ import type {
   RuntimeApplicationService,
   RuntimeOaStack,
 } from "@/lib/vertical-slice-runtime";
+import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

 const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";
 const NON_ACME_BINDING = {
@@ -67,6 +69,7 @@ function docsWriteProposal(input: {
   activeCycleInstanceId: string;
   proposalId?: string;
   status?: ProposalDto["status"];
+  targetRepositoryRef?: string;
 }): ProposalDto {
   return saveProposal({
     proposalId: input.proposalId ?? `prop:f2:jint-${Date.now()}`,
@@ -102,7 +105,6 @@ function docsWriteProposal(input: {
     executionIntent: {
       intentKind: "docs_write",
       artifactType: null,
-      targetRepositoryRef: null,
       targetPath: TARGET_PATH,
       scopeIn: ["sandbox"],
       scopeOut: ["git"],
@@ -115,6 +117,12 @@ function docsWriteProposal(input: {
       artifactBrief: "Note gestion de tâches",
       contentRequirements: [],
       exitRequirementKinds: [],
+      // CR-CI506-03 — seal CREATE + coherent repository identity for PREPARE.
+      artifactWriteMode: "CREATE",
+      targetRepositoryRef:
+        input.targetRepositoryRef ??
+        (process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim() ||
+          "acme/vitest-default"),
     },
   });
 }
@@ -520,6 +528,14 @@ describe("PRODUCT-PROOF-JOURNEY-INTEGRITY — T02–T07 / N03 / N05 / T15–T17"
     });
     expect(bound.ok).toBe(true);
     if (!bound.ok) return;
+    const managedBase = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
+    expect(managedBase).toBeTruthy();
+    if (managedBase) {
+      ensureManagedRepoCloneSkeleton({
+        managedRepoRootBase: managedBase,
+        identity: NON_ACME_BINDING.identity,
+      });
+    }
     const binding = bound.repositoryBinding as {
       identity?: string;
       pathRoot?: string;
@@ -535,6 +551,7 @@ describe("PRODUCT-PROOF-JOURNEY-INTEGRITY — T02–T07 / N03 / N05 / T15–T17"
       doctrineDigest: ctx.doctrineDigest,
       activeCycleInstanceId: cycleInstanceId,
       proposalId: "prop:f2:jint-t15",
+      targetRepositoryRef: NON_ACME_BINDING.identity,
     });
     expect(proposal.executionIntent?.targetPath).toBe(TARGET_PATH);

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
index cd4176e6..d8b8428f 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
@@ -14,6 +14,8 @@ import {
   resetRuntimeApplicationServiceForTests,
   type RuntimeApplicationService,
 } from "@/lib/vertical-slice-runtime";
+import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
+import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";

 const APP_ROOT = path.resolve(__dirname, "../..");
 export const W2_REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
@@ -50,6 +52,8 @@ class SeededIdSource implements LocalProjectIdSource {
 }

 const tempDirs: string[] = [];
+let harnessManagedEnvPrevious: string | undefined;
+let harnessManagedEnvOwned = false;

 export function tempProductDbPath(name = "w2-product.sqlite"): string {
   const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w2-"));
@@ -67,6 +71,16 @@ export function cleanupW2TempDirs(): void {
       /* ignore */
     }
   }
+  if (harnessManagedEnvOwned) {
+    if (harnessManagedEnvPrevious === undefined) {
+      delete process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
+    } else {
+      process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] =
+        harnessManagedEnvPrevious;
+    }
+    harnessManagedEnvOwned = false;
+    harnessManagedEnvPrevious = undefined;
+  }
 }

 export function bootW2Runtime(input: {
@@ -86,6 +100,21 @@ export function bootW2Runtime(input: {
   if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH?.trim()) {
     process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = "main";
   }
+  // CR-CI506-03 — PREPARE revalidation probes managed-repo filesystem facts.
+  // Provide a deterministic local clone skeleton when the suite did not already
+  // configure SFIA_STUDIO_MANAGED_REPO_ROOT_BASE (EMPTY ≠ UNKNOWN).
+  if (!process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]?.trim()) {
+    harnessManagedEnvPrevious =
+      process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
+    const managedBase = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w2-managed-"));
+    tempDirs.push(managedBase);
+    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
+    harnessManagedEnvOwned = true;
+  }
+  ensureManagedRepoCloneSkeleton({
+    managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
+    identity: process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY!,
+  });
   resetRuntimeApplicationServiceForTests();
   return getRuntimeApplicationService({
     registryRoot: W2_REGISTRY_ROOT,
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 93519c3a..e54ec540 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -80,6 +80,8 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/mw6GovernedNoraTurn.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime/paths",
+      "features/project-assistant/f2/activeCycleGovernedContinuation.ts:@/lib/vertical-slice-runtime/managedRepoRootBaseConfig",
+      "features/project-assistant/f2/recordDecision.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/resolveMw5ProductAuthorityFromOa.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/studioCognitiveContext.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime",
@@ -97,8 +99,10 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime/liveProjectContext",
       "features/project-assistant/w2/activeProposalDecisionSubject.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/advanceProductExecutionContractAfterEvidence.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/amendExecutionContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/authorizeExecutionContract.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/closeProposalDecisionSubject.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/confirmForAuthorization.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/decideTrajectory.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/governedExecuteAuthorizedContract.ts:@/lib/vertical-slice-runtime",
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts
index 23005d36..494854f5 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts
@@ -2,6 +2,11 @@
 /**
  * JOURNEY-INTEGRITY — RepositoryBinding durable → LocalProjectCreationView →
  * RuntimeProjectState projection (application path, isolated Product DB).
+ *
+ * D-PC-09 / CR-PWR-04 — normal Product createProject persists server-owned
+ * repository configuration before persistence (see __tests__/setup.ts defaults).
+ * Legacy unbound Projects are constructed explicitly by stripping binding after
+ * create — never by expecting createProject to fabricate a null binding.
  */
 import fs from "node:fs";
 import os from "node:os";
@@ -70,7 +75,7 @@ afterEach(() => {
 });

 describe("JOURNEY-INTEGRITY — RepositoryBinding runtime projection", () => {
-  it("B1–B6 — getProject returns exact durable binding after setProjectRepositoryBinding", async () => {
+  it("B1–B5 — createProject persists server-owned binding; setProjectRepositoryBinding updates durable projection", async () => {
     const productDbPath = tempDb();
     const runtime = createRuntimeApplicationService({
       registryRoot: REGISTRY_ROOT,
@@ -85,11 +90,19 @@ describe("JOURNEY-INTEGRITY — RepositoryBinding runtime projection", () => {
     expect(created.ok).toBe(true);
     if (!created.ok) return;

-    // B6 — unbound project remains honestly null
-    const unbound = await runtime.getProject(created.projectId);
-    expect(unbound.ok).toBe(true);
-    if (!unbound.ok) return;
-    expect(unbound.project.repositoryBinding).toBeNull();
+    // D-PC-09 — new Product Project is server-bound (not null).
+    const afterCreate = await runtime.getProject(created.projectId);
+    expect(afterCreate.ok).toBe(true);
+    if (!afterCreate.ok) return;
+    expect(afterCreate.project.repositoryBinding).not.toBeNull();
+    expect(afterCreate.project.repositoryBinding?.provider).toBe("github");
+    expect(afterCreate.project.repositoryBinding?.identity).toBeTruthy();
+    expect(afterCreate.project.repositoryBinding?.remoteUrl).toBeTruthy();
+    expect(afterCreate.project.repositoryBinding?.defaultBranch).toBeTruthy();
+    expect(afterCreate.project.repositoryBinding?.pathRoot).toBeTruthy();
+    expect(String(afterCreate.project.repositoryBinding?.identity)).not.toMatch(
+      /acme\/widget/i,
+    );

     const set = await runtime.setProjectRepositoryBinding({
       projectId: created.projectId,
@@ -117,7 +130,7 @@ describe("JOURNEY-INTEGRITY — RepositoryBinding runtime projection", () => {
     );
   });

-  it("B6 — project without binding stays null after create (no sample)", async () => {
+  it("LEGACY unbound — stripping durable binding stays honestly null (not createProject)", async () => {
     const runtime = createRuntimeApplicationService({
       registryRoot: REGISTRY_ROOT,
       schemasRoot: SCHEMAS_ROOT,
@@ -128,11 +141,24 @@ describe("JOURNEY-INTEGRITY — RepositoryBinding runtime projection", () => {
     });
     const created = await runtime.createProject({
       ...INPUT,
-      idempotencyKey: "idem:binding-unbound",
+      idempotencyKey: "idem:binding-legacy-unbound",
     });
     expect(created.ok).toBe(true);
     if (!created.ok) return;
-    expect(created.project.repositoryBinding).toBeNull();
-    expect(JSON.stringify(created.project)).not.toMatch(/acme\/widget/i);
+    // createProject under D-PC-09 is bound — fabricate LEGACY unbound explicitly.
+    expect(created.project.repositoryBinding).not.toBeNull();
+
+    const oa = runtime.oa!;
+    const found = await oa.projectServices.projects.findById(created.projectId);
+    expect(found).not.toBeNull();
+    if (!found) return;
+    delete found.repositoryBinding;
+    await oa.projectServices.projects.save(found);
+
+    const reloaded = await runtime.getProject(created.projectId);
+    expect(reloaded.ok).toBe(true);
+    if (!reloaded.ok) return;
+    expect(reloaded.project.repositoryBinding).toBeNull();
+    expect(JSON.stringify(reloaded.project)).not.toMatch(/acme\/widget/i);
   });
 });
```

## 12. Artifact references

- `/opt/cursor/artifacts/ci506-r1-isolation.log`
- `/opt/cursor/artifacts/ci506-r1-9file-matrix.log` / `ci506-r1-9file-reconfirm.log`
- `/opt/cursor/artifacts/ci506-r1-phaseC-*.log`
- `/opt/cursor/artifacts/ci506-r1-full-vitest.log`
- `/opt/cursor/artifacts/ci506-r1-gcec-clean-control.log`
- `/opt/cursor/artifacts/ci506-r1-governed-clean-control.log`
- `/opt/cursor/artifacts/ci506-r1-typecheck.log` / `ci506-r1-lint.log` / `ci506-r1-build.log`
- `/opt/cursor/artifacts/ci506-r1-r2-unified.diff`

Fin.
