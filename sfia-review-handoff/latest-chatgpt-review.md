# ChatGPT Review Pack — FULL (PR #506 CI REMEDIATION CANDIDATE)

- **Timestamp UTC:** 2026-09-20T06:10:00Z
- **Timestamp Europe/Paris:** 2026-09-20T08:10:00+0200
- **Macro:** PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01
- **Mode:** SAME MACRO / NO MICRO-CYCLE
- **Cycle:** 8 — Delivery / Implementation (return from PR readiness)
- **Typologie:** EVOL
- **Profil:** Critical
- **Morris GO consumed:** GO MORRIS — PR #506 CI REMEDIATION dans PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01, SAME MACRO / NO MICRO-CYCLE
- **CI failed run:** 35491519992
- **Entry candidate:** `f57fc6cd56900cd19df961dbe8b788a0b89937ca`
- **CI failure handoff in:** `b0e2d95eb284fae27b601a974e1c1b78a5cabbc4` / blob `95297161cde8ee763b259833a25fe6efcbacc0cc`
- **Bounded REAL historical:** `b8ee0f405a011577cd14be0cae266d83f0475fc9`
- **Claim maximal autorisé:** PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 — PR #506 CI REMEDIATION CANDIDATE — ORIGINAL 25 FAILURES CLOSED LOCALLY — TEST/FIXTURE CONVERGENCE COMPLETE — PRODUCT SOURCE UNCHANGED FROM REAL-PROVEN f57fc6cd — ORIGINAL FAILSET + typecheck/lint/build PASS — SAME MACRO / NO MICRO-CYCLE — NO NEW REAL — PROJECT COMMIT/PUSH HELD FOR CHATGPT CRITICAL REVIEW — MERGE NOT AUTHORIZED — CHATGPT CRITICAL REVIEW PENDING

## 1. Local Git Truth

| Field | Value |
|---|---|
| toplevel | `/tmp/sfia-pwr-01-dev` |
| branch | `delivery/sfia-studio-project-workspace-artifact-routing-01` |
| HEAD (unchanged) | `f57fc6cd56900cd19df961dbe8b788a0b89937ca` |
| HEAD^ | `ed3cc66b25d260a67437fc07e163ef5fcc2244a9` |
| origin/main | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| merge-base | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| remote project branch | `f57fc6cd56900cd19df961dbe8b788a0b89937ca` |
| PR #506 state | OPEN |
| PR #506 head | `f57fc6cd56900cd19df961dbe8b788a0b89937ca` |
| auto-merge | OFF / null |
| project commit this cycle | **0** |
| project push this cycle | **0** |
| merge | **0** |
| Cursor REAL | **0** |
| OpenAI LIVE | **0** |
| Product source mutation | **0** |

Working-tree corrections remain **uncommitted** for ChatGPT Critical Review.

## 2. PR #506 / CI baseline

| Check | Result |
|---|---|
| Detect SFIA Studio changes | PASS |
| Build and validate SFIA Studio | FAIL |
| SFIA Studio Required Gate | FAIL |

Vitest baseline (run 35491519992): 9 failed files / **25 failed tests** / 385 files passed / 4364 tests passed.

## 3. Classification matrix — all 25 original failures

| Cluster | Tests | Classification |
|---|---|---|
| CR-CI506-01 `ecRehydrationContinuity` ×10 | TypeError `listExecutionAttempts.execute` undefined | **TEST_HARNESS_STALE** |
| CR-CI506-02 `repositoryBindingProjection` ×2 | expected null binding; got server-owned | **TEST_ORACLE_STALE** |
| CR-CI506-02 `gcecCr23` H23A-N1/N2 ×2 | false "missing binding" → mismatch | **TEST_FIXTURE_STALE** |
| CR-CI506-03 `corrProof10` T01/T16/R23/R58 ×4 | ASK / PREPARE fail-closed without sealed mode+repo | **TEST_FIXTURE_STALE** |
| CR-CI506-03 `m3` CHECKPOINT-E ×3 | UNRESOLVED → REVALIDATION_UNAVAILABLE | **TEST_FIXTURE_STALE** |
| CR-CI506-03 `productProofJourneyIntegrity` T15 ×1 | same PREPARE | **TEST_FIXTURE_STALE** |
| CR-CI506-04 Cursor parity abs-target ×1 | reject EXECUTION_REVALIDATION_UNAVAILABLE | **TEST_FIXTURE_STALE** |
| CR-CI506-05 `importBoundaries` ×1 | 59→63 allowlist | **TEST_ORACLE_STALE** (LEGITIMATE KEEP) |
| CR-CI506-06 `m5C1` ×1 | hang in recordF2Decision (Memory nested UoW) | **TEST_HARNESS_STALE** |

**Counts:** TEST_HARNESS_STALE=11 · TEST_FIXTURE_STALE=11 · TEST_ORACLE_STALE=3 · PRODUCT_DEFECT=0 · CI_TIMING_FLAKE=0

PREPARE fail codes captured before fixture fix: `ARTIFACT_WRITE_MODE_UNRESOLVED`, then `TARGET_UNRESOLVED`, then `ARTIFACT_WRITE_MODE_REVALIDATION_UNAVAILABLE`. Cursor reject: `ARTIFACT_WRITE_MODE_EXECUTION_REVALIDATION_UNAVAILABLE` / `REAL_WORKSPACE_INVALID`.

## 4. Root causes + remediations (CR-CI506-01…06)

### CR-CI506-01 CLOSED
Stub now exposes `listExecutionAttempts.execute` → `{ok:true, attempts:[]}`. Product continuity reader unchanged.

### CR-CI506-02 CLOSED
Assert server-owned binding on Product create; LEGACY unbound via explicit `delete repositoryBinding` + save. H23A strips binding when `withRepositoryBinding:false`.

### CR-CI506-03 CLOSED
Seal `artifactWriteMode:"CREATE"` + coherent `targetRepositoryRef`. `w2Harness` / m3 boot provide `ensureManagedRepoCloneSkeleton` + env restore on cleanup. Product PREPARE fail-closed preserved.

### CR-CI506-04 CLOSED
mkdir Fake worktree paths + seal CREATE on automatic `projects/…` target. No repository-mismatch guard removal.

### CR-CI506-05 CLOSED
Allowlist +4 with KEEP disposition (see §6). No blind snapshot.

### CR-CI506-06 CLOSED
Migrated m5 fixture to Product SQLite runtime (nested ALS) while keeping `productDurablePath:false` disclosure. Isolated ~3.1–3.4s; timeout safety bound 30s. MemoryProjectStore nested deadlock left as out-of-scope infra reservation.

## 5. Modified files — TEST_ONLY_REMEDIATION

```
git diff --name-only -- projects/sfia-studio/app/features projects/sfia-studio/app/lib
→ empty (0 Product source lines)
```

1. `__tests__/project-assistant/ecRehydrationContinuity.d0.test.ts`
2. `__tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts`
3. `__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts`
4. `__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts`
5. `__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts`
6. `__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts`
7. `__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts`
8. `__tests__/vertical-slice-runtime/importBoundaries.test.ts`
9. `__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts`
10. `__tests__/project-assistant/w2Harness.ts`

## 6. Import-boundary assessment (4 rows)

| Module | Import | Kind | Disposition | Rationale |
|---|---|---|---|---|
| `f2/activeCycleGovernedContinuation.ts` | `…/managedRepoRootBaseConfig` | runtime | **KEEP** | D-PC-09 managed-root for workspace docs_write |
| `f2/recordDecision.ts` | `@/lib/vertical-slice-runtime` | type-only `RuntimeOaStack` | **KEEP** | CR-PCONT-03 DecisionRef UoW typing |
| `w2/advanceProductExecutionContractAfterEvidence.ts` | `@/lib/vertical-slice-runtime` | type-only | **KEEP** | post-evidence EC advance |
| `w2/closeProposalDecisionSubject.ts` | `@/lib/vertical-slice-runtime` | type-only | **KEEP** | Proposal DecisionRef closure |

## 7. Product defect evidence

**None.** No Product source edit.

Reservation: `memoryProjectStore.ts` nested UoW queue deadlock under CR-PCONT-03 — outside conditional Product edit scope this cycle.

## 8. Validation

### Phase A/B — original 9 files (CI=true)
```
Test Files  9 passed (9)
Tests       122 passed (122)
```

### Phase C — high-value regressions (isolated)
PASS: workspace routing, governed docs_write wiring, post-execution continuity, post-execution replan.

### Phase D — full `npm test` local note
Original CI failset CLOSED. Residual local failures in `gcecGitCommit*` reproduce on **clean** `f57fc6cd` (control: AG-01 fails without remediations) — pre-existing local env, not introduced by this diff, and not in CI #506 failset. GitHub CI remains authority after push.

### Phase E
| Gate | Result |
|---|---|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| `git diff --check` | PASS |

## 9. m5 timing

| Run | ms | Result |
|---|---|---|
| 1 | 3353 | PASS |
| 2 | 3172 | PASS |
| 3 | 3076 | PASS |

Timeout changed to 30_000 safety bound; functional ≪ bound. Classification: harness deadlock, not pure flake.

## 10. Fake / Real

- New REAL=0 · LIVE=0
- **PRODUCT SOURCE UNCHANGED FROM REAL-PROVEN f57fc6cd…**
- Prior bounded REAL (`b8ee0f40…`) remains relevant
- Reserve: REAL EVIDENCE PAYLOAD VERIFICATION ADAPTER ABSENT

## 11. Critical Review Questions

| Q | Answer |
|---|---|
| Q1 Product regression in 25? | NO |
| Q2 Guards weakened? | NO |
| Q3 Server-owned binding on create? | YES |
| Q4 Legacy honest? | YES (explicit strip) |
| Q5 PREPARE fail-closed? | YES |
| Q6 Attempt reader fail-closed? | YES |
| Q7 Terminal → continuity none? | YES (not weakened) |
| Q8 Repo mismatch rejects? | YES |
| Q9 Four imports? | KEEP ×4 |
| Q10 m5? | Harness fixed; ~3.2s |
| Q11 Full Vitest original failset? | PASS |
| Q12 tsc/lint/build? | PASS |
| Q13 Product changed? | NO |
| Q14 REAL invalidated? | NO |
| Q15 Safe after Critical Review PASS? | YES (TEST_ONLY) |

## 12. Full unified diff

(see following fenced diff — complete remediation tree)

## 13. Reservations

1. MemoryProjectStore nested UoW infra debt (out of scope).
2. Local `gcecGitCommit*` env failures also on clean candidate — GitHub CI is authority post-push.
3. REAL Evidence verification adapter ABSENT.
4. No project commit/push until ChatGPT Critical Review PASS.

## 14. Verdict

```
PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01
— PR #506 CI REMEDIATION CANDIDATE
— ORIGINAL 25 FAILURES CLOSED LOCALLY
— TEST/FIXTURE CONVERGENCE COMPLETE
— PRODUCT SOURCE UNCHANGED FROM REAL-PROVEN f57fc6cd
— FULL CI-EQUIVALENT LOCAL GATES PASS (original failset + typecheck/lint/build)
— SAME MACRO / NO MICRO-CYCLE
— NO NEW REAL
— PROJECT COMMIT/PUSH HELD FOR CHATGPT CRITICAL REVIEW
— MERGE NOT AUTHORIZED
— CHATGPT CRITICAL REVIEW PENDING
```

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
index 9e920643..dddda848 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts
@@ -25,6 +25,7 @@ import {
   StudioCursorRealLaunchGateway,
 } from "@/lib/oa/execution-attempt";
 import path from "node:path";
+import fs from "node:fs";
 import { FakeProcessRunner } from "./support/fakeProcessRunner";
 import {
   FakeRealExecutionWorkspacePort,
@@ -183,11 +184,17 @@ function roRequest(

 function gateway(env: NodeJS.ProcessEnv = baseEnv()) {
   const runner = new FakeProcessRunner();
+  const workspacePath = "/tmp/fake-exec-root/wt-fresh-fcp";
+  const resumePath = "/tmp/fake-exec-root/wt-prior-fcp";
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
@@ -263,6 +270,8 @@ describe("GCEC Cursor full-capability executor parity", () => {
           evidenceRequirements: ["artifact"],
           createOrModify: true,
           noDelete: true,
+          // CR-CI506-04 — automatic projects/… target requires sealed write mode.
+          artifactWriteMode: "CREATE",
         },
       }),
     );
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
index 90b51d7c..fd455e80 100644
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
@@ -69,6 +71,13 @@ async function boot(name: string) {
   const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m3-xc-"));
   tempDirs.push(dir);
   const dbPath = path.join(dir, name);
+  // CR-CI506-03 — PREPARE revalidation needs a managed clone skeleton.
+  const managedBase = path.join(dir, "managed");
+  process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
+  ensureManagedRepoCloneSkeleton({
+    managedRepoRootBase: managedBase,
+    identity: "mcleland147/sfia-workspace",
+  });
   const { resolver } = createTestDoctrineResolver({
     registryRoot: FIXTURES,
     schemasRoot: SCHEMAS,
@@ -558,6 +567,9 @@ describe("M3 ExecutionContract UNRESOLVED semantics (R1)", () => {
           "Vérification de l’existence et de la conformité minimale du fichier",
         ],
         reversibilityExpectation: "unknown",
+        // CR-CI506-03 — Product refuses null mode on automatic projects/…
+        // (ARTIFACT_WRITE_MODE_UNRESOLVED). Seal CREATE; managed skeleton in boot().
+        artifactWriteMode: "CREATE",
       },
       "dec:m3:ckpt-e-nora-evidence",
     );
@@ -595,6 +607,7 @@ describe("M3 ExecutionContract UNRESOLVED semantics (R1)", () => {
           "Résultat de l’écriture du fichier",
           "Résultat de la vérification du contenu",
         ],
+        artifactWriteMode: "CREATE",
       },
       "dec:m3:ckpt-e-r4-local-evidence",
     );
@@ -633,6 +646,7 @@ describe("M3 ExecutionContract UNRESOLVED semantics (R1)", () => {
           "evreq:file-write-result",
           "evreq:content-verification",
         ],
+        artifactWriteMode: "CREATE",
       },
       "dec:m3:ckpt-e-valid-evidence",
     );
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
