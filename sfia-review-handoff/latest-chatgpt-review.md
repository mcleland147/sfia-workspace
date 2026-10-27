# SFIA Review Pack FULL — AKG-M5 / L3-S2 OPTION B — S8 PROJECT-FIRST INTEGRATED DELIVERY

## 1. Date / heure

- **Wall clock (UTC):** 2026-10-27T07:17:53Z
- **Cycle:** AKG-M5 / L3-S2 OPTION B — S8 PROJECT-FIRST INTEGRATED LOCAL DET DELIVERY

## 2. GO Morris et limites

**Décision Morris:** 2026-10-27 — S8 PROJECT-FIRST VALIDÉ. GO DELIVERY LOCALE.

**Construction:** Project obligatoire; CycleInstance facultatif; pas de cycle fictif; mêmes mécanismes Generic Execution / preuves / résultat; parcours cycle-bound conservé; D-ER-17 non rouvert.

**Autorisé:** ADAPT minimal S8; Option B conservé; oracle DET; Review Pack FULL; handoff L3.

**Non autorisé:** nouveau modèle métier structurant; migration SQLite; nouveau moteur Evidence/Result; nouveau Result Semantic; docs_write; cycle artificiel; SHE authority change; L4/Nora Deep; REAL/LIVE; OA-exclusive; PRR/Roadmap write; project commit/push/PR/merge; runtime v3.

## 3. Cycle 8 / CRITICAL / EVOL

| Field | Value |
|-------|-------|
| Capacity | V3-F05 Generic Execution |
| Milestone | L3-S2 Option B + S8 closing |
| Profile | CRITICAL |
| Typologie | EVOL |
| Process | SFIA v2.6 ChatGPT ↔ Cursor |
| CKC | Candidate guidance only |

## 4. Git Truth — initial / final

- Repo: `mcleland147/sfia-workspace`
- Worktree: `…/sfia-workspace-feat-akg-m5-l3-s2-generic-proof-continuity`
- Branch: `feat/akg-m5-l3-s2-generic-proof-continuity`
- HEAD / origin/main: `6e957ecbf50b009b692cf1fcba2748ee1aa9c862`
- Prior handoff tip: `59a61254` / blob `47e52720`
- Project commits this cycle: **0**

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
 M projects/sfia-studio/app/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence.ts
 M projects/sfia-studio/app/features/project-assistant/f3/ingestMissionResultEvidence.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts
?? projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.optionB.lotsAC.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.s8.projectFirst.integrated.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources.ts
```

Option B + CORR + R-S2-04/05 + S8 ADAPT preserved (dirty intentional).

## 5. Sources consultées

Method templates/routing/guardrails/CKC; Build Doctrine; Roadmap (RO); product-completion; M5 trajectory; Generic Execution architecture (D-ER-17/18, E8–E11); doctrine v3 33/34/35 (NON ADOPTED); PRR 02/03/06/07/08/09 (RO); handoffs Qualification→Pass03; **Git + code primary**.

## 6. Convergence Pre-check

| Item | Status |
|------|--------|
| T-C | ADOPTED |
| L3-S1 | INTEGRATED DET ON MAIN |
| L3-S2 Option B | LOCAL CANDIDATE + CORR/R-S2 accepted DET |
| S8 | **PROJECT-FIRST DECIDED — Delivery this cycle** |
| L3 GLOBAL | OPEN |
| L2 exclusive | DEFAULT OFF |
| R24 | SYNC PENDING |
| G-REAL | NOT GRANTED |
| Runtime v3 | NON ADOPTED |

## 7. R23 — architecture et flux

### Avant S8 Delivery (gap)

Post-success GERM / Verification / generic FS / Mission ingest in `governedExecuteRecordResult` was gated by:

`contract.cycleInstanceId && PRODUCT_MISSION_FROM_DURABLE_CONTEXT`

⇒ Project-only Generic PREPARE could succeed technically but skipped Studio Evidence continuity (L3-S1 debt).

OA Evidence/RB bindings already optional for cycle; PREPARE/SHE already Project-first.

### Flux CURRENT after ADAPT

```
Project (required) [CycleInstance optional]
  → Generic PREPARE (null cycle OK; no fake cycle)
  → SHE
  → Select/Start Fake Cursor
  → RecordResult: if Cursor report → GERM + Verification Evidence
       (+ generic FS when OBSERVED)
       (+ Mission Evidence ONLY if PRODUCT_MISSION already on EC)
  → W3-B: tech Evidence + verified Verification/generic_mat when present
  → CE / Product Result honest (UNCLAIMED without applicable semantic)
  → W3-C / GERM rehydrate
```

## 8. Invariants Project-first (honored)

1–5 Project required; cycle optional; no fake id; cycle if present must match Project/EC/lifecycle.
6 Same Product engine for both contexts.
7 Durable reconstitution: Project/EC/Attempt/Evidence/RB/CE/Result.
8–12 Authority/proofs not optional; fail-closed; no invented HD/Attempt/cycle; stale context invalidates.

## 9. Analyse du besoin de modification

| Need | Decision |
|------|----------|
| Schema / new table | **Not required** — OA bindings already optional |
| New Result Semantic | **Not introduced** — mutating Generic stays UNCLAIMED without PRODUCT_MISSION |
| Artificial PRODUCT_MISSION stamp | **Refused** (GO) |
| Ungate GERM/Verification/FS from cycle | **ADAPT** |
| Optional cycle on F3 ingest inputs | **ADAPT** |
| W3-B include verified Studio Evidence for non-mission Generic | **ADAPT** |

## 10. Classification des composants

| Component | Class |
|-----------|-------|
| prepareGeneric / SHE / authorize | KEEP |
| governedExecuteAuthorizedContract post-success | **ADAPT** |
| ingestMission / Verification / generic materialization | **ADAPT** (optional cycle) |
| materializeW3bProductTerminal | **ADAPT** |
| w3cPostEvidenceLoop / CORR/R-S2 | KEEP |
| Mission Result Semantic | KEEP / FREEZE applicability |
| resolvePostEvidenceRecoveryContext | KEEP |
| OA Evidence bindings | KEEP |
| L4 / Nora Deep | N/A |

**R22:** N/A — no provider/cognitive change.

## 11. Fichiers modifiés / créés (this cycle + cumulative Option B)

### S8 ADAPT (this cycle)

| Path | Change |
|------|--------|
| `w2/governedExecuteAuthorizedContract.ts` | Drop cycle∧PRODUCT_MISSION gate for GERM/Verification/FS; Mission only if constraint present; optional cycle |
| `w2/materializeW3bProductTerminal.ts` | Non-mission: include verified Verification + generic_materialization in RB |
| `f3/ingestMissionResultEvidence.ts` | `cycleInstanceId?`; omit binding when absent |
| `f3/ingestExecutionReviewVerificationEvidence.ts` | same |
| `f3/ingestGenericFilesystemMaterializationArtifactEvidence.ts` | same (untracked Product file) |
| `__tests__/…/akgM5L3S2.s8.projectFirst.integrated.d0.test.ts` | **NEW** oracle + negatives |

### Cumulative Option B (preserved)

ingestGeneric… (NEW), fsAnchor… (NEW), lotsAC tests (NEW), Cont01/resolvers, w3c CORR/R-S2-04, governedExecute Lot A wire.

## 12. Diffs utiles vs origin/main

### Diff — governedExecuteAuthorizedContract.ts (Lot A + S8)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index 5864cc82..463ab693 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -44,6 +44,10 @@ import { completeBoundedReadOnlyLaunch } from "@/features/project-assistant/f3/c
 import { ingestMissionResultEvidence } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
 import { finalizeGenericExecutionReview } from "@/features/project-assistant/f3/finalizeGenericExecutionReview";
 import { ingestExecutionReviewVerificationEvidence } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
+import {
+  ingestGenericFilesystemMaterializationArtifactEvidence,
+  selectPrimaryGenericMaterializationPath,
+} from "@/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence";
 import {
   buildMissionResultPayloadFromReport,
   type CursorExecutionReportWithMission,
@@ -1254,12 +1258,15 @@ export async function governedExecuteRecordResult(
       }
       attempt = completed.attempt;

-      if (
-        completed.status === "succeeded" &&
-        completed.facts &&
-        contract.cycleInstanceId &&
-        contract.constraints.includes(PRODUCT_MISSION_FROM_DURABLE_CONTEXT)
-      ) {
+      // S8 Project-first: CycleInstance optional. Same Evidence mechanisms;
+      // never invent a cycle id. Mission Result ingest only when the durable
+      // PRODUCT_MISSION_FROM_DURABLE_CONTEXT constraint is already present
+      // (do not stamp it artificially for Generic PREPARE).
+      if (completed.status === "succeeded" && completed.facts) {
+        const cycleInstanceId = contract.cycleInstanceId?.trim() || null;
+        const isMissionProduct = contract.constraints.includes(
+          PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
+        );
         const stdout = completed.observation?.stdout ?? "";
         const report = tryParseReportFromStdout(stdout);
         const expectedRepo =
@@ -1308,14 +1315,14 @@ export async function governedExecuteRecordResult(

         // CR-01 — Generic Product nominal: observe worktree → VerifiedChangeSet →
         // finalize Generic Review Material BEFORE Evidence/mission ingest.
-        // worktreeRef is server-owned (RealProcessObservation / LaunchAck).
+        // Runs for Project-only and cycle-bound when a Cursor report is present.
         if (report) {
           const worktreeRef =
             completed.observation?.worktreeRef?.trim() || null;
           const finalized = await finalizeGenericExecutionReview({
             refsRoot,
             projectId: input.projectId,
-            cycleInstanceId: contract.cycleInstanceId,
+            ...(cycleInstanceId ? { cycleInstanceId } : {}),
             executionContractId: contract.executionContractId,
             attemptId: attempt.attemptId,
             repositoryRef:
@@ -1364,7 +1371,7 @@ export async function governedExecuteRecordResult(
             await ingestExecutionReviewVerificationEvidence({
               evidenceReviewServices: input.oa.evidenceReviewServices,
               projectId: input.projectId,
-              cycleInstanceId: contract.cycleInstanceId,
+              cycleInstanceId,
               executionContractId: contract.executionContractId,
               executionAttemptId: attempt.attemptId,
               payload: verificationPayload,
@@ -1379,53 +1386,125 @@ export async function governedExecuteRecordResult(
               attempt: projectAttempt(attempt, adapterId),
             };
           }
-        }

-        const built = report
-          ? buildMissionResultPayloadFromReport({ report })
-          : ({
-              ok: false as const,
-              code: "MISSION_RESULT_REPORT_REQUIRED",
-              message:
-                "Mission Result Evidence requires a structured CursorExecutionReport with missionResult fields.",
-            } as const);
-        if (built.ok) {
-          const ingested = await ingestMissionResultEvidence({
-            evidenceReviewServices: input.oa.evidenceReviewServices,
-            projectId: input.projectId,
-            cycleInstanceId: contract.cycleInstanceId,
-            executionContractId: contract.executionContractId,
-            executionAttemptId: attempt.attemptId,
-            payload: built.payload,
-            refsRoot,
-            technicalResultRef: attempt.resultRef,
-          });
-          if (!ingested.ok) {
-            return {
-              ok: false,
-              code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
-              message: `Attempt succeeded durable — ingest Mission Evidence échoué (${ingested.code}): ${ingested.message}`,
-              attempt: projectAttempt(attempt, adapterId),
-            };
+          // L3-S2 Lot A — generic FS materialization Evidence (FS→SHA source).
+          // Fail-closed skip on ambiguous multi-path (no invented primary).
+          // Digest of content ≠ Git commit SHA — commit Evidence stays separate.
+          if (
+            finalized.verificationStatus === "OBSERVED" &&
+            finalized.verifiedChangeSet
+          ) {
+            const observed = finalized.verifiedChangeSet.all
+              .filter((e) => e.status === "created" || e.status === "modified")
+              .map((e) => e.path);
+            const preferred: string[] = [];
+            const targetPath =
+              typeof contract.inputs?.targetPath === "string"
+                ? contract.inputs.targetPath.trim()
+                : "";
+            if (targetPath) preferred.push(targetPath);
+            if (Array.isArray(contract.expectedOutputs)) {
+              for (const o of contract.expectedOutputs) {
+                const s = String(o).trim();
+                if (s && s.includes("/") && !s.includes(":")) preferred.push(s);
+              }
+            }
+            const selected = selectPrimaryGenericMaterializationPath({
+              observedPaths: observed,
+              preferredPaths: preferred,
+            });
+            if (selected.ok) {
+              const entry = finalized.verifiedChangeSet.all.find(
+                (e) => e.path === selected.logicalPath,
+              );
+              const digest = entry?.afterDigest?.trim() ?? "";
+              let bytes: Buffer | null = null;
+              if (entry?.contentAbsolutePath) {
+                try {
+                  if (fs.existsSync(entry.contentAbsolutePath)) {
+                    bytes = fs.readFileSync(entry.contentAbsolutePath);
+                  }
+                } catch {
+                  bytes = null;
+                }
+              }
+              if (bytes && digest.startsWith("sha256:")) {
+                const stamped =
+                  await ingestGenericFilesystemMaterializationArtifactEvidence({
+                    evidenceReviewServices: input.oa.evidenceReviewServices,
+                    projectId: input.projectId,
+                    cycleInstanceId,
+                    executionContractId: contract.executionContractId,
+                    executionAttemptId: attempt.attemptId,
+                    logicalPath: selected.logicalPath,
+                    artifactBytes: bytes,
+                    digest,
+                    refsRoot,
+                  });
+                if (!stamped.ok) {
+                  return {
+                    ok: false,
+                    code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
+                    message: `Attempt succeeded durable — Generic materialization Evidence échoué (${stamped.code}): ${stamped.message}`,
+                    attempt: projectAttempt(attempt, adapterId),
+                  };
+                }
+              }
+              // Missing bytes/digest → honest skip (verification Evidence still holds FACTS).
+            }
+            // AMBIGUOUS / NONE → honest skip (no invented primary path).
           }
-          const advanced = await advanceProductExecutionContractAfterEvidence({
-            oa: input.oa,
-            projectId: input.projectId,
-            executionContractId: contract.executionContractId,
-            cycleInstanceId: contract.cycleInstanceId,
-            freshlyIngestedEvidenceId: ingested.evidenceId,
-          });
-          if (!advanced.ok) {
-            return {
-              ok: false,
-              code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
-              message: `Attempt succeeded durable — avancement EC post-Evidence échoué (${advanced.reason}).`,
-              attempt: projectAttempt(attempt, adapterId),
-            };
+        }
+
+        // Mission Result Evidence — KEEP applicability gate (constraint must already
+        // exist on the EC). Do not invent PRODUCT_MISSION for Generic PREPARE.
+        if (isMissionProduct) {
+          const built = report
+            ? buildMissionResultPayloadFromReport({ report })
+            : ({
+                ok: false as const,
+                code: "MISSION_RESULT_REPORT_REQUIRED",
+                message:
+                  "Mission Result Evidence requires a structured CursorExecutionReport with missionResult fields.",
+              } as const);
+          if (built.ok) {
+            const ingested = await ingestMissionResultEvidence({
+              evidenceReviewServices: input.oa.evidenceReviewServices,
+              projectId: input.projectId,
+              cycleInstanceId,
+              executionContractId: contract.executionContractId,
+              executionAttemptId: attempt.attemptId,
+              payload: built.payload,
+              refsRoot,
+              technicalResultRef: attempt.resultRef,
+            });
+            if (!ingested.ok) {
+              return {
+                ok: false,
+                code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
+                message: `Attempt succeeded durable — ingest Mission Evidence échoué (${ingested.code}): ${ingested.message}`,
+                attempt: projectAttempt(attempt, adapterId),
+              };
+            }
+            const advanced = await advanceProductExecutionContractAfterEvidence({
+              oa: input.oa,
+              projectId: input.projectId,
+              executionContractId: contract.executionContractId,
+              cycleInstanceId,
+              freshlyIngestedEvidenceId: ingested.evidenceId,
+            });
+            if (!advanced.ok) {
+              return {
+                ok: false,
+                code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
+                message: `Attempt succeeded durable — avancement EC post-Evidence échoué (${advanced.reason}).`,
+                attempt: projectAttempt(attempt, adapterId),
+              };
+            }
           }
+          // Technical succeed without mission payload → Attempt remains succeeded;
+          // ContractResult stays not_proven (honest). Do not invent Evidence.
         }
-        // Technical succeed without mission payload → Attempt remains succeeded;
-        // ContractResult stays not_proven (honest). Do not invent Evidence.
       }
     }

```

### Diff — materializeW3bProductTerminal.ts (S8 RB Evidence)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index cfd2ce0c..67a919e0 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -16,6 +16,8 @@ import {
   isMissionResultEvidenceId,
   missionResultEvidenceIdForAttempt,
 } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
+import { executionReviewVerificationEvidenceIdForAttempt } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
+import { genericMaterializationEvidenceIdForAttempt } from "@/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence";
 import {
   projectW3bProductTerminal,
   productReservationsForAttempt,
@@ -323,6 +325,25 @@ export async function materializeW3bProductTerminal(input: {
     }
     // Missing / unverified Mission Evidence → tech-only RB; mission semantic
     // yields NOT_PROVEN / Product UNCLAIMED (honest).
+  } else {
+    // S8 Project-first Generic (no PRODUCT_MISSION stamp): include verified
+    // Studio Verification + generic_materialization Evidence when present.
+    // Does NOT invent a PASS semantic — CE stays not_proven / Product UNCLAIMED
+    // unless an applicable Contract Result Semantic already exists.
+    const verificationEvidenceId =
+      executionReviewVerificationEvidenceIdForAttempt(attempt.attemptId);
+    const verificationEvidence =
+      await services.evidenceReader.findById(verificationEvidenceId);
+    if (verificationEvidence && verificationEvidence.status === "verified") {
+      evidenceIdsForBundle.push(verificationEvidence.evidenceId);
+    }
+    const genericMatId = genericMaterializationEvidenceIdForAttempt(
+      attempt.attemptId,
+    );
+    const genericMat = await services.evidenceReader.findById(genericMatId);
+    if (genericMat && genericMat.status === "verified") {
+      evidenceIdsForBundle.push(genericMat.evidenceId);
+    }
   }

   const bundle = await services.createReviewBundle.execute({
```

### Diff — ingestMission + ingestVerification (optional cycle)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence.ts b/projects/sfia-studio/app/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence.ts
index ddfb45b3..c9b63fbc 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence.ts
@@ -121,7 +121,8 @@ export function persistExecutionReviewVerificationPayload(input: {
 export type IngestExecutionReviewVerificationEvidenceInput = {
   evidenceReviewServices: EvidenceReviewServices;
   projectId: string;
-  cycleInstanceId: string;
+  /** Optional — omit for S8 Project-first (never invent a fake cycle id). */
+  cycleInstanceId?: string | null;
   executionContractId: string;
   executionAttemptId: string;
   payload: ExecutionReviewVerificationPayload;
@@ -170,8 +171,10 @@ export async function ingestExecutionReviewVerificationEvidence(
       digest: persisted.digest as never,
       bindings: {
         projectId: input.projectId,
-        cycleInstanceId: input.cycleInstanceId,
         executionContractId: input.executionContractId,
+        ...(input.cycleInstanceId?.trim()
+          ? { cycleInstanceId: input.cycleInstanceId.trim() }
+          : {}),
       },
       correlationId:
         input.correlationId ?? `cor:execution-review-verification:${evidenceId}`,
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/ingestMissionResultEvidence.ts b/projects/sfia-studio/app/features/project-assistant/f3/ingestMissionResultEvidence.ts
index 10c59eea..b71f602e 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/ingestMissionResultEvidence.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/ingestMissionResultEvidence.ts
@@ -29,7 +29,8 @@ export function isMissionResultEvidenceId(evidenceId: string): boolean {
 export type IngestMissionResultEvidenceInput = {
   evidenceReviewServices: EvidenceReviewServices;
   projectId: string;
-  cycleInstanceId: string;
+  /** Optional — omit for S8 Project-first (never invent a fake cycle id). */
+  cycleInstanceId?: string | null;
   executionContractId: string;
   executionAttemptId: string;
   payload: MissionResultPayload;
@@ -104,8 +105,10 @@ export async function ingestMissionResultEvidence(
       digest: persisted.digest as never,
       bindings: {
         projectId: input.projectId,
-        cycleInstanceId: input.cycleInstanceId,
         executionContractId: input.executionContractId,
+        ...(input.cycleInstanceId?.trim()
+          ? { cycleInstanceId: input.cycleInstanceId.trim() }
+          : {}),
       },
       correlationId:
         input.correlationId ?? `cor:mission-result:${evidenceId}`,
```

### Diff — w3cPostEvidenceLoop.ts (Lot C + CORR-03 + R-S2-04)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
index dd6e6672..9c18acd8 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
@@ -27,7 +27,10 @@ import {
   lastW3cEvidenceIdInLpsContext,
 } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
 import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/productEvidenceRefsRoot";
-import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
+import {
+  loadGenericExecutionReviewMaterial,
+  readExecutionReviewItemBytes,
+} from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
 import {
   buildCkcCognitivePromptSection,
   loadProductCkcCognitiveContent,
@@ -77,8 +80,14 @@ export type W3cExecutionReportSurface = {

 /**
  * Rebuild business-first execution report from durable server-owned refs
- * (mission-result-refs). Shared by fresh W3-C and rehydrate — never invent
- * a Cursor report when the claim file is absent.
+ * (mission-result-refs / Generic Execution Review Material). Shared by fresh
+ * W3-C and rehydrate — never invent a Cursor report when the claim file is absent.
+ *
+ * Completeness honesty (CORR-S2-03 / R-S2-04):
+ * - never upgrade PARTIAL → FULL;
+ * - truncation of presented bytes ⇒ PARTIAL;
+ * - expected contentRef present but unreadable ⇒ PARTIAL (never FULL of missing content);
+ * - no contentRef required ⇒ keep manifest completeness (do not invent an artifact gap).
  */
 export function projectW3cExecutionReportSurfaceFromDurable(input: {
   readonly attemptId: string;
@@ -93,15 +102,154 @@ export function projectW3cExecutionReportSurfaceFromDurable(input: {
   readonly stopReason: string | undefined;
   readonly cursorReportSummary: string | undefined;
 } {
-  void input;
+  const refsRoot = resolveProductEvidenceRefsRoot(input.refsRoot);
+  const loaded = loadGenericExecutionReviewMaterial({
+    refsRoot,
+    attemptId: input.attemptId,
+  });
+  if (!loaded.ok) {
+    // No durable GERM — honest empty surface (do not invent Cursor report).
+    return {
+      executionReport: null,
+      artifactReviewMaterial: undefined,
+      artifactReviewCompleteness: undefined,
+      workPerformedSummary: undefined,
+      blockersSummary: undefined,
+      stopReason: undefined,
+      cursorReportSummary: undefined,
+    };
+  }
+
+  const { manifest, cursorReport, verifiedChangeSet } = loaded;
+  // Start from durable manifest; never promote PARTIAL → FULL.
+  let completeness: "FULL" | "PARTIAL" =
+    manifest.completeness === "FULL" ? "FULL" : "PARTIAL";
+
+  let artifactReviewMaterial: string | undefined;
+  let contentUnavailableNote: string | undefined;
+  const preferred =
+    typeof input.targetPath === "string" && input.targetPath.trim()
+      ? input.targetPath.trim()
+      : null;
+  const itemCandidates = manifest.reviewItems.filter(
+    (i) => i.kind === "artifact" || i.kind === "file",
+  );
+  const preferredItem =
+    (preferred
+      ? itemCandidates.find((i) => i.logicalPath === preferred)
+      : undefined) ?? itemCandidates[0];
+  if (preferredItem?.contentRef) {
+    // Expected durable bytes — presentation completeness must reflect actual read.
+    let bytes: ReturnType<typeof readExecutionReviewItemBytes>;
+    try {
+      bytes = readExecutionReviewItemBytes({
+        refsRoot,
+        contentRef: preferredItem.contentRef,
+        byteCap: 12_000,
+      });
+    } catch (err) {
+      // Minimal guard: normal unavailability must not throw through the surface.
+      bytes = {
+        ok: false,
+        code: "EXECUTION_REVIEW_ITEM_READ_THREW",
+        message: err instanceof Error ? err.message : String(err),
+      };
+    }
+    if (bytes.ok) {
+      artifactReviewMaterial = bytes.text;
+      if (bytes.completeness === "PARTIAL") {
+        completeness = "PARTIAL";
+      }
+    } else {
+      // R-S2-04 — contentRef expected but unreadable: never claim FULL of presented content.
+      completeness = "PARTIAL";
+      contentUnavailableNote = `Review item content unavailable (${bytes.code})`;
+      // Do not invent material or Cursor CLAIM.
+    }
+  }
+
+  const pathSummary =
+    verifiedChangeSet &&
+    manifest.verifiedEffects.verificationStatus === "OBSERVED"
+      ? verifiedChangeSet.all
+          .map((e) => `${e.status}:${e.path}`)
+          .slice(0, 12)
+          .join("; ")
+      : null;
+
+  const workPerformedSummary =
+    (cursorReport?.workPerformed?.length
+      ? cursorReport.workPerformed.join("; ")
+      : undefined) ||
+    (pathSummary ? `Studio observed: ${pathSummary}` : undefined);
+
+  const baseBlockersSummary =
+    manifest.blockers.length > 0
+      ? manifest.blockers.join(" · ")
+      : cursorReport?.blockers?.length
+        ? cursorReport.blockers.join(" · ")
+        : undefined;
+
+  const blockersSummary = contentUnavailableNote
+    ? baseBlockersSummary
+      ? `${baseBlockersSummary} · ${contentUnavailableNote}`
+      : contentUnavailableNote
+    : baseBlockersSummary;
+
+  const baseReservationsSummary =
+    manifest.reservations.length > 0
+      ? manifest.reservations.join(" · ")
+      : cursorReport?.reservations?.length
+        ? cursorReport.reservations.join(" · ")
+        : null;
+
+  const reservationsSummary = contentUnavailableNote
+    ? baseReservationsSummary
+      ? `${baseReservationsSummary} · ${contentUnavailableNote}`
+      : contentUnavailableNote
+    : baseReservationsSummary;
+
+  const stopReason =
+    (typeof cursorReport?.stopConditionTriggered === "string" &&
+    cursorReport.stopConditionTriggered.trim()
+      ? cursorReport.stopConditionTriggered.trim()
+      : undefined) || undefined;
+
+  const cursorReportSummary = cursorReport
+    ? [
+        cursorReport.status ? `status=${cursorReport.status}` : null,
+        workPerformedSummary ? `work=${workPerformedSummary.slice(0, 240)}` : null,
+        blockersSummary ? `blockers=${blockersSummary.slice(0, 160)}` : null,
+      ]
+        .filter(Boolean)
+        .join(" · ") || undefined
+    : undefined;
+
+  // CLAIM absent → executionReport null (may still expose PARTIAL material).
+  const executionReport: W3cExecutionReportSurface | null = cursorReport
+    ? {
+        cursorStatus: cursorReport.status ?? null,
+        workPerformedSummary: workPerformedSummary ?? null,
+        artifactsSummary: pathSummary,
+        validationsSummary:
+          cursorReport.validationEffects
+            ?.map((v) => `${v.identity}:${v.result}`)
+            .slice(0, 8)
+            .join("; ") ?? null,
+        blockersSummary: blockersSummary ?? null,
+        reservationsSummary,
+        artifactReviewCompleteness: completeness,
+      }
+    : null;
+
   return {
-    executionReport: null,
-    artifactReviewMaterial: undefined,
-    artifactReviewCompleteness: undefined,
-    workPerformedSummary: undefined,
-    blockersSummary: undefined,
-    stopReason: undefined,
-    cursorReportSummary: undefined,
+    executionReport,
+    artifactReviewMaterial,
+    artifactReviewCompleteness: completeness,
+    workPerformedSummary,
+    blockersSummary,
+    stopReason,
+    cursorReportSummary,
   };
 }

```

## 13. Contenu complet — nouveaux fichiers untracked

### NEW FILE — `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.s8.projectFirst.integrated.d0.test.ts`

```typescript
/**
 * AKG-M5 L3-S2 Option B — S8 PROJECT-FIRST integrated DET oracle.
 *
 * Product path (ZERO REAL / ZERO LIVE):
 *   Project (no CycleInstance) → Generic PREPARE → SHE → Select/Start Fake Cursor
 *   → governedExecuteRecordResult (GERM + Verification Evidence)
 *   → W3-B RB/CE → honest Product Result → W3-C surface / rehydrate.
 *
 * NON-CLAIMS:
 * - PRODUCT_MISSION_FROM_DURABLE_CONTEXT is NOT invented for Generic PREPARE
 * - Product PASS for mutating Generic without applicable Result Semantic
 * - Cursor REAL / OpenAI LIVE / OA-exclusive / fake cycle
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  buildIntentAnalysisFromSolicitedMission,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { singleHumanExecutePreparedContract } from "@/features/project-assistant/w2/singleHumanExecutePreparedContract";
import { requiredInspectedFactsForContract } from "@/lib/oa/execution-contract";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { materializeW3bProductTerminal } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { projectW3cExecutionReportSurfaceFromDurable } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { PRODUCT_MISSION_FROM_DURABLE_CONTEXT } from "@/lib/oa/evidence-review/application/missionResultPayload";
import { executionReviewVerificationEvidenceIdForAttempt } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
import { missionResultEvidenceIdForAttempt } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const NOTES_PATH = "projects/demo/notes/project-notes.md";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function requiredFactsOrThrow(
  contract: Parameters<typeof requiredInspectedFactsForContract>[0],
): readonly string[] {
  const facts = requiredInspectedFactsForContract(contract);
  if (Array.isArray(facts)) return facts;
  throw new Error(
    `inspection disclosure incomplete: ${(facts as { code: string }).code}`,
  );
}

function launchPortOf(oa: {
  executionAttemptServices?: {
    realBoundary?: { launchPort?: unknown };
  } | null;
}): TestOnlyRealExecutionLaunchPort {
  const port = oa.executionAttemptServices?.realBoundary?.launchPort;
  if (!(port instanceof TestOnlyRealExecutionLaunchPort)) {
    throw new Error("TestOnlyRealExecutionLaunchPort required");
  }
  return port;
}

function notesEditAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "modifier notes projet (S8 Project-first DET)",
    expectedOutcome: "Notes mises à jour; résultat Product honnête",
    scope: NOTES_PATH,
    repositoryMutation: "write",
    impactSignals: { structuralChange: false, architectureImpact: false },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "other",
      scopeIn: [NOTES_PATH],
      requiredCapabilities: [],
    },
  };
}

function cursorReportStdout(input: {
  attemptId: string;
  executionContractId: string;
  repositoryRef: string;
  baseSha: string;
}): string {
  const body = {
    schemaVersion: "oa.cursor-execution-report.1",
    reportId: `rpt:s8:${input.attemptId}`.slice(0, 128),
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    repositoryRef: input.repositoryRef,
    baseSha: input.baseSha,
    status: "succeeded",
    authorizedEffectsExecuted: ["filesystem.modify"],
    workPerformed: [`modified ${NOTES_PATH}`],
    fileEffects: {
      created: [],
      modified: [NOTES_PATH],
      deleted: [],
    },
  };
  return `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(body)}`;
}

describe("AKG-M5 L3-S2 S8 — Project-first integrated DET oracle", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousPilot: string | undefined;
  let previousExclusive: string | undefined;
  let refsRoot: string;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousExclusive = process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    delete process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
    setConversationProviderForTests(null);
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "s8-refs-"));
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("akg-m5-l3s2-s8.sqlite"),
      idPrefix: "l3s2s8",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    try {
      fs.rmSync(refsRoot, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
    restoreEnvVar("SFIA_STUDIO_LOCAL_OA_EXCLUSIVE", previousExclusive);
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "demo",
      objective: "L3-S2 S8 Project-first DET",
      context: "akg-m5 l3-s2 s8",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "S8 DET ONLY"],
      shortReference: `S8${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:l3s2-s8-${suffix}`,
    });
    if (!created.ok) {
      throw new Error(`createProject: ${created.error?.message ?? "fail"}`);
    }
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const identity = `acme/l3s2-s8-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    // Confirm no active CycleInstance (trajectory ≠ cycle).
    const live = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!live.ok) throw new Error("live");
    expect(live.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    return { projectId, oa };
  }

  it("nominal — Project-only Generic PREPARE → SHE → Evidence bindings → UNCLAIMED → rehydrate", async () => {
    const { projectId, oa } = await seedProject("nom");
    const analysis = notesEditAnalysis();

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(`prepare: ${prep.message}`);
    expect(prep.projectContextOnly).toBe(true);
    expect(prep.cycleInstanceId).toBeNull();

    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");
    expect(live.contract.cycleInstanceId ?? null).toBeNull();
    expect(live.contract.constraints).not.toContain(
      PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
    );
    expect(live.contract.constraints.some((c) => /docs_write/i.test(c))).toBe(
      false,
    );
    const facts = requiredFactsOrThrow(live.contract);
    const inputs = live.contract.inputs as Record<string, unknown>;
    const repositoryRef = String(inputs.repositoryBindingIdentity ?? "");
    const baseSha = String(inputs.baseHeadSha ?? W2_TEST_PINNED_BASE_HEAD_SHA);
    expect(repositoryRef.length).toBeGreaterThan(0);

    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(`she: ${she.code}`);
    expect(she.executionAttemptCreated).toBe(false);
    expect(she.authorization.outcome).toBe("AUTHORIZED");

    const port = launchPortOf(oa);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(`select: ${selected.message}`);
    expect(selected.attempt!.selectedAgentRef).toBe(
      STUDIO_CURSOR_GENERALIST_AGENT_ID,
    );
    const attemptId = selected.attempt!.attemptId;

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(`start: ${started.message}`);

    setTimeout(() => {
      port.resolveSimulatedCompletion(`proc:sim:${attemptId}`, {
        exitCode: 0,
        timedOut: false,
        stdout: cursorReportStdout({
          attemptId,
          executionContractId: she.executionContractId,
          repositoryRef,
          baseSha,
        }),
        stderr: "",
        durationMs: 5,
        // No worktreeRef → verification UNAVAILABLE (honest); Evidence still stamped.
      });
    }, 15);

    const terminal = await governedExecuteRecordResult({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
      awaitIfPending: true,
      missionResultRefsRoot: refsRoot,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) throw new Error(`record: ${terminal.code}`);
    expect(terminal.attemptStatus).toBe("succeeded");
    expect(terminal.productSuccessSemantics).toBe(false);

    // GERM persisted (Attempt-bound).
    const germ = loadGenericExecutionReviewMaterial({
      refsRoot,
      attemptId,
    });
    expect(germ.ok).toBe(true);

    // Verification Evidence — Project/EC/Attempt bound; no cycle invented.
    const verificationId =
      executionReviewVerificationEvidenceIdForAttempt(attemptId);
    const verification =
      await oa.evidenceReviewServices!.evidenceReader.findById(verificationId);
    expect(verification).toBeTruthy();
    expect(verification!.status).toBe("verified");
    expect(verification!.bindings.projectId).toBe(projectId);
    expect(verification!.bindings.executionContractId).toBe(
      she.executionContractId,
    );
    expect(verification!.bindings.executionAttemptId).toBe(attemptId);
    expect(verification!.bindings.cycleInstanceId).toBeUndefined();

    // Mission Evidence NOT invented (no PRODUCT_MISSION stamp).
    const mission = await oa.evidenceReviewServices!.evidenceReader.findById(
      missionResultEvidenceIdForAttempt(attemptId),
    );
    expect(mission).toBeNull();

    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) throw new Error(`materialize: ${materialized.code}`);
    expect(materialized.product.outcome).toBe("UNCLAIMED");
    expect(materialized.product.claimEvaluationStatus).toBe("not_proven");
    expect(materialized.product.outcome).not.toBe("SUCCESS");
    expect(materialized.product.claimAllowed).toBe(false);

    const rb = await oa.evidenceReviewServices!.reviewBundleReader.findById(
      materialized.product.reviewBundleId!,
    );
    expect(rb).toBeTruthy();
    expect(rb!.cycleInstanceId).toBeUndefined();
    expect(
      rb!.frozenEvidenceSnapshots?.some((s) => s.evidenceId === verificationId),
    ).toBe(true);

    // Durable reload — same identities; no cycle created.
    const liveAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(liveAfter.ok).toBe(true);
    if (liveAfter.ok) {
      expect(liveAfter.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }
    const verificationReload =
      await oa.evidenceReviewServices!.evidenceReader.findById(verificationId);
    expect(verificationReload?.bindings.projectId).toBe(projectId);
    expect(verificationReload?.bindings.cycleInstanceId).toBeUndefined();

    // GERM projection / rehydrate honesty (same durable facts).
    const surfaceA = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: NOTES_PATH,
    });
    const surfaceB = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: NOTES_PATH,
    });
    expect(surfaceB).toEqual(surfaceA);
    expect(surfaceA.executionReport).not.toBeNull();
  }, 60_000);

  it("N1 — Project absent → Generic PREPARE refused", async () => {
    const oa = runtime.oa!;
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId: "",
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (!prep.ok) {
      expect(prep.code).toMatch(/PROJECT|REQUIRED/i);
    }
  });

  it("N3 — Contract of another Project cannot be SHE'd on this Project", async () => {
    const a = await seedProject("n3a");
    const b = await seedProject("n3b");
    const prep = await solicitGenericExecutionPrepare({
      oa: a.oa,
      projectId: a.projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error("prep");
    const live = await a.oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("ec");
    const facts = requiredFactsOrThrow(live.contract);
    const she = await singleHumanExecutePreparedContract({
      oa: b.oa,
      projectId: b.projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
  });

  it("N14/N15 — Cursor report absent / no Mission semantic → no invented PASS", async () => {
    const { projectId, oa } = await seedProject("n14");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error("prep");
    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("ec");
    const facts = requiredFactsOrThrow(live.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error("she");
    const port = launchPortOf(oa);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error("select");
    const attemptId = selected.attempt!.attemptId;
    await governedExecuteStart({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    setTimeout(() => {
      port.resolveSimulatedCompletion(`proc:sim:${attemptId}`, {
        exitCode: 0,
        timedOut: false,
        stdout: "SIMULATED_NO_CURSOR_REPORT",
        stderr: "",
        durationMs: 1,
      });
    }, 15);
    const terminal = await governedExecuteRecordResult({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
      awaitIfPending: true,
      missionResultRefsRoot: refsRoot,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    expect(terminal.attemptStatus).toBe("succeeded");
    // Without parseable Cursor report: no GERM finalize / Mission Evidence invent.
    const germ = loadGenericExecutionReviewMaterial({ refsRoot, attemptId });
    expect(germ.ok).toBe(false);
    const mission = await oa.evidenceReviewServices!.evidenceReader.findById(
      missionResultEvidenceIdForAttempt(attemptId),
    );
    expect(mission).toBeNull();
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("UNCLAIMED");
    expect(materialized.product.outcome).not.toBe("SUCCESS");
  }, 60_000);
});

```

### NEW FILE — `projects/sfia-studio/app/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence.ts`

```typescript
/**
 * L3-S2 Option B — stamp VERIFIED artifact Evidence for Studio-observed
 * filesystem materialization (generic Product path).
 *
 * Replaces the retired docs_write Evidence producer for FS→SHA supersession
 * without re-admitting Product docs_write. Does NOT create a ReviewBundle —
 * W3-B materialize owns frozen RB / CE.
 *
 * Evidence.location is the absolute durable payload path (integrity probe).
 * Logical repo path is recoverable via `/generic-materialization/<logicalPath>`
 * for FS-anchor matching (see fsAnchorArtifactMaterializationEvidenceSources).
 */
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type {
  ActorReference,
  EvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE } from "@/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources";

export const GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE_EXPORT =
  GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE;

export function genericMaterializationEvidenceIdForAttempt(
  attemptId: string,
): string {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  return `ev:generic-materialization:${segment}`.slice(0, 128);
}

export function genericMaterializationRelativeArtifactPath(input: {
  readonly attemptId: string;
  readonly logicalPath: string;
}): string {
  const segment = input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const logical = input.logicalPath.replace(/\\/g, "/").replace(/^\/+/, "");
  return path.posix.join(
    "refs",
    "attempts",
    segment,
    "generic-materialization",
    logical,
  );
}

export type IngestGenericFilesystemMaterializationArtifactEvidenceInput = {
  evidenceReviewServices: EvidenceReviewServices;
  projectId: string;
  /** Optional — omit for S8 Project-first (never invent a fake cycle id). */
  cycleInstanceId?: string | null;
  executionContractId: string;
  executionAttemptId: string;
  /** Repo-relative logical path (e.g. docs/note.md). */
  logicalPath: string;
  /** Independently observed file bytes (Studio worktree / review item). */
  artifactBytes: Buffer;
  /** Expected digest `sha256:…` — must match independent hash of bytes. */
  digest: string;
  refsRoot: string;
  actor?: ActorReference;
  correlationId?: string;
  nowIso?: string;
};

export type IngestGenericFilesystemMaterializationArtifactEvidenceResult =
  | {
      ok: true;
      evidenceId: string;
      evidenceStatus: string;
      logicalPath: string;
      location: string;
      digest: string;
      storageMode: "external_payload_ref";
    }
  | { ok: false; code: string; message: string };

export async function ingestGenericFilesystemMaterializationArtifactEvidence(
  input: IngestGenericFilesystemMaterializationArtifactEvidenceInput,
): Promise<IngestGenericFilesystemMaterializationArtifactEvidenceResult> {
  const actor = input.actor ?? LOCAL_PILOTE_ACTOR;
  const logicalPath = input.logicalPath.replace(/\\/g, "/").replace(/^\/+/, "").trim();
  if (!logicalPath || logicalPath.includes("..")) {
    return {
      ok: false,
      code: "GENERIC_MATERIALIZATION_PATH_INVALID",
      message: "logicalPath must be a non-empty relative path without ..",
    };
  }

  const observedDigest: Digest = `sha256:${createHash("sha256")
    .update(input.artifactBytes)
    .digest("hex")}`;
  const expected = String(input.digest ?? "").trim().toLowerCase();
  if (observedDigest !== expected) {
    return {
      ok: false,
      code: "GENERIC_MATERIALIZATION_DIGEST_MISMATCH",
      message: `Independent byte digest ${observedDigest} !== claimed ${expected}`,
    };
  }

  const relative = genericMaterializationRelativeArtifactPath({
    attemptId: input.executionAttemptId,
    logicalPath,
  });
  const absolutePath = path.join(input.refsRoot, relative);
  try {
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    fs.writeFileSync(absolutePath, input.artifactBytes);
  } catch (err) {
    return {
      ok: false,
      code: "GENERIC_MATERIALIZATION_PERSIST_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }

  const evidenceId = genericMaterializationEvidenceIdForAttempt(
    input.executionAttemptId,
  );

  const registered = await input.evidenceReviewServices.registerEvidence.execute({
    evidenceId,
    type: "artifact",
    status: "available",
    digest: observedDigest,
    location: absolutePath,
    source: GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE,
    sourceKind: "external",
    classification: "internal",
    storageMode: "external_payload_ref",
    bindings: {
      projectId: input.projectId,
      executionContractId: input.executionContractId,
      executionAttemptId: input.executionAttemptId,
      ...(input.cycleInstanceId?.trim()
        ? { cycleInstanceId: input.cycleInstanceId.trim() }
        : {}),
    },
    actor,
    correlationId:
      input.correlationId ?? `cor:generic-materialization:${evidenceId}`,
    nowIso: input.nowIso,
    idempotencyKey: `idem:generic-materialization:${evidenceId}`,
  });
  if (!registered.ok || !registered.evidence) {
    return {
      ok: false,
      code: registered.ok
        ? "GENERIC_MATERIALIZATION_EVIDENCE_MISSING"
        : registered.error.detailCode,
      message: registered.ok
        ? "registerEvidence returned no evidence."
        : registered.error.message,
    };
  }

  let evidenceStatus = registered.evidence.status;
  if (registered.evidence.status === "available" && registered.evidence.digest) {
    const verified =
      await input.evidenceReviewServices.verifyEvidenceIntegrity.execute({
        evidenceId: registered.evidence.evidenceId,
        expectedVersion: registered.evidence.version,
        actor,
        correlationId:
          input.correlationId ??
          `cor:generic-materialization-verify:${evidenceId}`,
        nowIso: input.nowIso,
      });
    if (verified.ok && verified.evidence) {
      evidenceStatus = verified.evidence.status;
    }
  }

  return {
    ok: true,
    evidenceId,
    evidenceStatus,
    logicalPath,
    location: absolutePath,
    digest: observedDigest,
    storageMode: "external_payload_ref",
  };
}

/**
 * Pick exactly one primary materialization path from VerifiedChangeSet entries.
 * Fail-closed on ambiguity (multi-file without single targetPath intersection).
 */
function normalizeGenericMaterializationLogicalPath(raw: string): string | null {
  const normalized = raw.replace(/\\/g, "/").replace(/^\/+/, "").trim();
  if (!normalized || normalized.includes("..") || normalized.includes("\0")) {
    return null;
  }
  if (normalized.includes("//") || normalized.endsWith("/")) {
    return null;
  }
  return normalized;
}

/**
 * Pick exactly one primary materialization path from VerifiedChangeSet entries.
 * CORR-S2-02 — count distinct logical paths (dedupe targetPath ∩ expectedOutputs).
 * Fail-closed on ambiguity across different files (no first-path heuristic).
 */
export function selectPrimaryGenericMaterializationPath(input: {
  readonly observedPaths: readonly string[];
  readonly preferredPaths?: readonly string[];
}):
  | { ok: true; logicalPath: string }
  | { ok: false; code: "NONE" | "AMBIGUOUS"; message: string } {
  const observed = [
    ...new Set(
      input.observedPaths
        .map((p) => normalizeGenericMaterializationLogicalPath(p))
        .filter((p): p is string => Boolean(p)),
    ),
  ];
  if (observed.length === 0) {
    return {
      ok: false,
      code: "NONE",
      message: "No observed create/modify paths for generic materialization.",
    };
  }
  // Dedupe preferred identities (same path may appear in targetPath + expectedOutputs).
  const preferredDistinct = [
    ...new Set(
      (input.preferredPaths ?? [])
        .map((p) => normalizeGenericMaterializationLogicalPath(p))
        .filter((p): p is string => Boolean(p)),
    ),
  ];
  const hitDistinct = preferredDistinct.filter((p) => observed.includes(p));
  if (hitDistinct.length === 1) {
    return { ok: true, logicalPath: hitDistinct[0]! };
  }
  if (hitDistinct.length > 1) {
    return {
      ok: false,
      code: "AMBIGUOUS",
      message: `Multiple preferred observed paths: ${hitDistinct.join(",")}`,
    };
  }
  if (observed.length === 1) {
    return { ok: true, logicalPath: observed[0]! };
  }
  return {
    ok: false,
    code: "AMBIGUOUS",
    message: `Multiple observed paths without unique preferred: ${observed.join(",")}`,
  };
}

```

### NEW FILE — `projects/sfia-studio/app/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources.ts`

```typescript
/**
 * Artifact-materialization Evidence sources that may supersede an FS anchor
 * (FS→SHA continuation). Shared by pre-commit and progressive Attempt-A resolvers.
 *
 * - `execution_attempt:docs_write` (+ dotted suffixes): HISTORICAL durable reading
 *   only — not Product admission of docs_write (#618 retired admission).
 * - `execution_attempt:generic_materialization` (+ dotted suffixes): CURRENT
 *   Product generalist materialization Evidence source (L3-S2 Option B).
 *
 * `IngestExecutionAttemptEvidence` prose sources and `execution_attempt:mission_result`
 * cannot supersede.
 */
export const FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES = [
  "execution_attempt:docs_write",
  "execution_attempt:generic_materialization",
] as const;

export type FsAnchorArtifactMaterializationEvidenceSource =
  (typeof FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES)[number];

/** Canonical Product source stamp for generic Studio-observed file materialization. */
export const GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE =
  "execution_attempt:generic_materialization" as const;

export function isAllowlistedArtifactMaterializationSource(
  source: string,
): boolean {
  for (const allowed of FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES) {
    if (source === allowed || source.startsWith(`${allowed}.`)) return true;
  }
  return false;
}

/**
 * Supersession / prior-A matching: Evidence.location may be the logical repo path
 * (metadata_only / tests) or an absolute durable external_payload_ref path whose
 * logical suffix equals the required path (Product verify probe).
 *
 * CORR-S2-01 — segment-exact identity only:
 * - exact logical equality after normalization;
 * - durable refs under `/generic-materialization/` or `/docs-write-artifact/`:
 *   compare extracted logical path for exact equality;
 * - otherwise require a `/` segment boundary before the logical path
 *   (`…/docs/note.md`), never bare `endsWith(req)` which falsely matches
 *   `xdocs/note.md` / `autresdocs/note.md` against `docs/note.md`.
 */
export function evidenceLocationMatchesLogicalPath(
  location: string,
  logicalPath: string,
): boolean {
  const loc = location.replace(/\\/g, "/").trim();
  let req = logicalPath.replace(/\\/g, "/").trim();
  if (!loc || !req) return false;
  // Logical identity is repo-relative; strip accidental leading slashes.
  req = req.replace(/^\/+/, "");
  if (!req || req.includes("..") || req.includes("\0")) return false;
  // Refuse malformed logical paths that would collapse segment boundaries.
  if (req.endsWith("/") || req.includes("//")) {
    return false;
  }
  // Refuse traversal / null in Evidence.location (fail-closed, no guessing).
  if (loc.includes("..") || loc.includes("\0")) return false;

  if (loc === req) return true;

  const extracted = logicalPathFromDurableArtifactLocation(loc);
  if (extracted !== loc) {
    // Known durable materialization layout — exact logical equality only.
    if (extracted.includes("..") || extracted.includes("\0")) return false;
    return extracted === req;
  }

  // Non-marker locations: require an explicit path-segment boundary.
  // Do NOT use loc.endsWith(req) — prefix collisions (xdocs/note.md).
  return loc.endsWith(`/${req}`);
}

export function resolveLogicalPathFromEvidenceLocation(
  location: string,
  candidateLogicalPaths: readonly string[],
): string | null {
  const loc = location.replace(/\\/g, "/").trim();
  if (!loc) return null;
  for (const candidate of candidateLogicalPaths) {
    if (evidenceLocationMatchesLogicalPath(loc, candidate)) {
      return candidate.replace(/\\/g, "/").trim();
    }
  }
  return null;
}

/** Map durable absolute refs → logical repo path; leave logical locations unchanged. */
export function logicalPathFromDurableArtifactLocation(location: string): string {
  const loc = location.replace(/\\/g, "/").trim();
  const markers = [
    "/generic-materialization/",
    "/docs-write-artifact/",
  ] as const;
  for (const marker of markers) {
    const idx = loc.indexOf(marker);
    if (idx >= 0) {
      return loc.slice(idx + marker.length);
    }
  }
  return loc;
}

```

### NEW FILE — `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.optionB.lotsAC.d0.test.ts`

```typescript
/**
 * AKG-M5 L3-S2 Option B — Lot A (generic FS materialization) + Lot C (report surface)
 * DET proofs at tested scope.
 *
 * NON-CLAIMS:
 * - chat-first Generic PREPARE null-cycle Mission Evidence (S8 residual)
 * - FS→Git→Review COMPLETE E2E
 * - REAL Cursor / OpenAI LIVE / F19 COMPLETE
 *
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  ingestGenericFilesystemMaterializationArtifactEvidence,
  selectPrimaryGenericMaterializationPath,
} from "@/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence";
import {
  genericExecutionReviewMaterialRefsRelative,
  persistGenericExecutionReviewMaterial,
} from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { projectW3cExecutionReportSurfaceFromDurable } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { isFsAnchorSupersededByVerifiedLocalCommit } from "@/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation";
import {
  GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE,
  evidenceLocationMatchesLogicalPath,
} from "@/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources";
import {
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
} from "@/lib/oa/execution-attempt";
import { M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID } from "@/lib/oa/execution-attempt/domain/realLaunchSafety";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

const tmpRoots: string[] = [];

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
  delete process.env.SFIA_STUDIO_CURSOR_REAL;
});

afterEach(() => {
  cleanupW2TempDirs();
  for (const root of tmpRoots.splice(0)) {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

describe("AKG-M5 L3-S2 CORR-S2-01 — strict Evidence path matching", () => {
  const req = "docs/note.md";

  it("positives: exact logical + durable marker layouts", () => {
    expect(evidenceLocationMatchesLogicalPath(req, req)).toBe(true);
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${req}`,
        req,
      ),
    ).toBe(true);
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/docs-write-artifact/${req}`,
        req,
      ),
    ).toBe(true);
    expect(
      evidenceLocationMatchesLogicalPath(`/var/data/${req}`, req),
    ).toBe(true);
  });

  it("negatives: prefix/suffix segment collisions must not match", () => {
    expect(evidenceLocationMatchesLogicalPath("xdocs/note.md", req)).toBe(
      false,
    );
    expect(evidenceLocationMatchesLogicalPath("autresdocs/note.md", req)).toBe(
      false,
    );
    expect(evidenceLocationMatchesLogicalPath("docs/note.md.bak", req)).toBe(
      false,
    );
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/x${req}`,
        req,
      ),
    ).toBe(false);
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${req}.bak`,
        req,
      ),
    ).toBe(false);
    expect(evidenceLocationMatchesLogicalPath("../docs/note.md", req)).toBe(
      false,
    );
    expect(evidenceLocationMatchesLogicalPath(req, "../docs/note.md")).toBe(
      false,
    );
  });
});

describe("AKG-M5 L3-S2 Option B — Lot A path selection", () => {
  it("EP-S2-04 selectPrimary prefers unique preferred path", () => {
    expect(
      selectPrimaryGenericMaterializationPath({
        observedPaths: ["docs/a.md", "docs/b.md"],
        preferredPaths: ["docs/b.md"],
      }),
    ).toEqual({ ok: true, logicalPath: "docs/b.md" });
  });

  it("EP-S2-09 ambiguous multi-path without preferred → fail-closed", () => {
    const r = selectPrimaryGenericMaterializationPath({
      observedPaths: ["docs/a.md", "docs/b.md"],
      preferredPaths: [],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("AMBIGUOUS");
  });

  it("EP-S2-10 source token is generic_materialization (not docs_write)", () => {
    expect(GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE).toBe(
      "execution_attempt:generic_materialization",
    );
    expect(GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE.includes("docs_write")).toBe(
      false,
    );
  });
});

describe("AKG-M5 L3-S2 CORR-S2-02 — distinct preferred path selection", () => {
  it("A: same path in targetPath + expectedOutputs → unique selection", () => {
    expect(
      selectPrimaryGenericMaterializationPath({
        observedPaths: ["docs/note.md"],
        preferredPaths: ["docs/note.md", "docs/note.md"],
      }),
    ).toEqual({ ok: true, logicalPath: "docs/note.md" });
  });

  it("B: two distinct preferred+observed paths → AMBIGUOUS", () => {
    const r = selectPrimaryGenericMaterializationPath({
      observedPaths: ["docs/a.md", "docs/b.md"],
      preferredPaths: ["docs/a.md", "docs/b.md"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("AMBIGUOUS");
  });

  it("C: no observed path → NONE", () => {
    const r = selectPrimaryGenericMaterializationPath({
      observedPaths: [],
      preferredPaths: ["docs/note.md"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("NONE");
  });

  it("D: single observed without preferred → select that path", () => {
    expect(
      selectPrimaryGenericMaterializationPath({
        observedPaths: ["docs/solo.md"],
        preferredPaths: [],
      }),
    ).toEqual({ ok: true, logicalPath: "docs/solo.md" });
  });

  it("E: malformed preferred paths ignored; honest NONE/AMBIGUOUS", () => {
    const none = selectPrimaryGenericMaterializationPath({
      observedPaths: ["../evil.md", "docs/ok.md"],
      preferredPaths: ["../evil.md"],
    });
    // malformed preferred dropped; single valid observed remains → select
    expect(none).toEqual({ ok: true, logicalPath: "docs/ok.md" });
    const badOnly = selectPrimaryGenericMaterializationPath({
      observedPaths: ["../evil.md"],
      preferredPaths: ["../evil.md"],
    });
    expect(badOnly.ok).toBe(false);
    if (!badOnly.ok) expect(badOnly.code).toBe("NONE");
  });
});

describe("AKG-M5 L3-S2 Option B — Lot C durable report surface", () => {
  it("EP-S2-08 projects PARTIAL surface from GERM without inventing Cursor report", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-germ-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-surface";
    const report = {
      schemaVersion: "oa.cursor-execution-report.1" as const,
      reportId: "rpt:l3s2",
      attemptId,
      executionContractId: "xct:l3s2",
      repositoryRef: "repo:test",
      baseSha: "abc123",
      status: "succeeded" as const,
      workPerformed: ["edited docs/note.md"],
      authorizedEffectsExecuted: ["filesystem.modify" as const],
      blockers: ["example-blocker"],
      reservations: ["example-reservation"],
    };
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: report,
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "modified: docs/note.md",
          text: "# note\n",
          summary: "sha256:deadbeef",
        },
      ],
      completeness: "PARTIAL",
      blockers: ["VERIFICATION_UNAVAILABLE — worktree observation not performed"],
      reservations: ["Studio VerifiedChangeSet not available — FACTS incomplete"],
    });
    expect(persisted.ok).toBe(true);

    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.executionReport).not.toBeNull();
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.blockersSummary).toContain("VERIFICATION_UNAVAILABLE");
    expect(surface.artifactReviewMaterial).toContain("# note");
  });

  it("EP-S2-08 missing GERM → null report (no invented Cursor claim)", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-empty-"));
    tmpRoots.push(refsRoot);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId: "xat:missing",
      refsRoot,
    });
    expect(surface.executionReport).toBeNull();
    expect(surface.artifactReviewMaterial).toBeUndefined();
    expect(surface.artifactReviewCompleteness).toBeUndefined();
  });
});

describe("AKG-M5 L3-S2 CORR-S2-03 — FULL/PARTIAL honesty on truncated bytes", () => {
  const baseReport = (attemptId: string) => ({
    schemaVersion: "oa.cursor-execution-report.1" as const,
    reportId: "rpt:l3s2-corr03",
    attemptId,
    executionContractId: "xct:l3s2",
    repositoryRef: "repo:test",
    baseSha: "abc123",
    status: "succeeded" as const,
    workPerformed: ["edited docs/note.md"],
    authorizedEffectsExecuted: ["filesystem.modify" as const],
    blockers: ["keep-blocker"],
    reservations: ["keep-reservation"],
  });

  it("A: manifest FULL + content truncated by byteCap → PARTIAL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-trunc-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-trunc";
    const big = "X".repeat(13_000);
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(attemptId),
      reviewEndOf: null,
      verifiedChangeSet: {
        schemaVersion: "oa.studio-verified-changeset.1",
        worktreePath: "<disposed-or-ephemeral>",
        claimFactMismatch: false,
        unclaimedObservedPaths: [],
        claimedMissingPaths: [],
        all: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        created: [],
        modified: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        deleted: [],
        renamed: [],
      } as never,
      verificationStatus: "OBSERVED",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "modified: docs/note.md",
          text: big,
          summary: "sha256:big",
        },
      ],
      completeness: "FULL",
      blockers: [],
      reservations: [],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.artifactReviewMaterial?.length).toBeLessThanOrEqual(12_000);
  });

  it("B: manifest PARTIAL + short content → stays PARTIAL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-partial-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-partial";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(attemptId),
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "file",
          text: "short",
        },
      ],
      completeness: "PARTIAL",
      blockers: ["keep-blocker"],
      reservations: ["keep-reservation"],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.blockersSummary).toContain("keep-blocker");
  });

  it("C: manifest FULL + short complete content → FULL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-full-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-full";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(attemptId),
      reviewEndOf: {
        schemaVersion: "oa.cursor-review-end-of.1" as const,
        attemptId,
        executionContractId: "xct:l3s2",
        status: "approved" as const,
        summary: "ok",
      } as never,
      verifiedChangeSet: {
        schemaVersion: "oa.studio-verified-changeset.1",
        worktreePath: "<disposed-or-ephemeral>",
        claimFactMismatch: false,
        unclaimedObservedPaths: [],
        claimedMissingPaths: [],
        all: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        created: [],
        modified: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        deleted: [],
        renamed: [],
      } as never,
      verificationStatus: "OBSERVED",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "file",
          text: "short-complete",
        },
      ],
      completeness: "FULL",
      blockers: [],
      reservations: [],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("FULL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("FULL");
  });

  it("E: Cursor CLAIM absent → executionReport null (material may still be PARTIAL)", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-noclaim-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-noclaim";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: null,
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "file",
          text: "material-only",
        },
      ],
      completeness: "PARTIAL",
      blockers: ["no-claim"],
      reservations: [],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.executionReport).toBeNull();
    expect(surface.artifactReviewMaterial).toContain("material-only");
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
  });
});

describe("AKG-M5 L3-S2 R-S2-04 — missing/unreadable expected content honesty", () => {
  const baseReport = (attemptId: string) => ({
    schemaVersion: "oa.cursor-execution-report.1" as const,
    reportId: "rpt:l3s2-rs204",
    attemptId,
    executionContractId: "xct:l3s2",
    repositoryRef: "repo:test",
    baseSha: "abc123",
    status: "succeeded" as const,
    workPerformed: ["edited docs/note.md"],
    authorizedEffectsExecuted: ["filesystem.modify" as const],
    blockers: ["keep-blocker"],
    reservations: ["keep-reservation"],
  });

  function persistFullWithItem(input: {
    refsRoot: string;
    attemptId: string;
    text: string;
  }) {
    return persistGenericExecutionReviewMaterial({
      refsRoot: input.refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId: input.attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(input.attemptId),
      reviewEndOf: null,
      verifiedChangeSet: {
        schemaVersion: "oa.studio-verified-changeset.1",
        worktreePath: "<disposed-or-ephemeral>",
        claimFactMismatch: false,
        unclaimedObservedPaths: [],
        claimedMissingPaths: [],
        all: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        created: [],
        modified: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        deleted: [],
        renamed: [],
      } as never,
      verificationStatus: "OBSERVED",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "file",
          text: input.text,
        },
      ],
      completeness: "FULL",
      blockers: ["keep-blocker"],
      reservations: ["keep-reservation"],
    });
  }

  it("T1: manifest FULL + complete short content → FULL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t1-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t1";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "complete" }).ok).toBe(
      true,
    );
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewMaterial).toBe("complete");
    expect(surface.artifactReviewCompleteness).toBe("FULL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("FULL");
  });

  it("T2: manifest FULL + content > 12_000 bytes → PARTIAL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t2-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t2";
    expect(
      persistFullWithItem({
        refsRoot,
        attemptId,
        text: "Y".repeat(13_000),
      }).ok,
    ).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
  });

  it("T3: manifest PARTIAL + short content → PARTIAL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t3-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t3";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(attemptId),
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        { kind: "file", logicalPath: "docs/note.md", label: "file", text: "short" },
      ],
      completeness: "PARTIAL",
      blockers: ["keep-blocker"],
      reservations: ["keep-reservation"],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
  });

  it("T4: manifest FULL + contentRef + missing file → never FULL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t4-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t4";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "will-delete" }).ok).toBe(
      true,
    );
    const rel = genericExecutionReviewMaterialRefsRelative(attemptId);
    const itemPath = path.join(refsRoot, rel.itemsDir, "ri:001.bin");
    expect(fs.existsSync(itemPath)).toBe(true);
    fs.unlinkSync(itemPath);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewMaterial).toBeUndefined();
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.blockersSummary).toContain("EXECUTION_REVIEW_ITEM_MISSING");
    expect(surface.blockersSummary).toContain("keep-blocker");
    expect(surface.executionReport?.reservationsSummary).toContain(
      "keep-reservation",
    );
    expect(surface.executionReport?.reservationsSummary).toContain(
      "EXECUTION_REVIEW_ITEM_MISSING",
    );
  });

  it("T5: manifest FULL + invalid contentRef → fail-closed never fictional FULL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t5-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t5";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "ok" }).ok).toBe(true);
    const rel = genericExecutionReviewMaterialRefsRelative(attemptId);
    const manifestAbs = path.join(refsRoot, rel.manifest);
    const manifest = JSON.parse(fs.readFileSync(manifestAbs, "utf8")) as {
      reviewItems: Array<{ contentRef?: string }>;
      completeness: string;
    };
    expect(manifest.completeness).toBe("FULL");
    manifest.reviewItems[0]!.contentRef = "../evil.bin";
    fs.writeFileSync(manifestAbs, `${JSON.stringify(manifest)}\n`, "utf8");
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewMaterial).toBeUndefined();
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.blockersSummary).toContain("EXECUTION_REVIEW_ITEM_REF_DENIED");
  });

  it("T6: GERM absent → no invented report", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t6-"));
    tmpRoots.push(refsRoot);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId: "xat:rs204-missing",
      refsRoot,
    });
    expect(surface.executionReport).toBeNull();
    expect(surface.artifactReviewCompleteness).toBeUndefined();
    expect(surface.artifactReviewMaterial).toBeUndefined();
  });

  it("T7: Cursor CLAIM absent → executionReport null", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t7-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t7";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: null,
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        { kind: "file", logicalPath: "docs/note.md", label: "file", text: "x" },
      ],
      completeness: "PARTIAL",
      blockers: [],
      reservations: [],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.executionReport).toBeNull();
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
  });

  it("T8: blockers / reservations / workPerformed preserved when present", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t8-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t8";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "body" }).ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.blockersSummary).toContain("keep-blocker");
    expect(surface.executionReport?.reservationsSummary).toContain(
      "keep-reservation",
    );
    expect(surface.workPerformedSummary).toContain("edited docs/note.md");
  });

  it("T9: fresh projection == re-read at equal durable facts", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t9-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t9";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "stable" }).ok).toBe(
      true,
    );
    const a = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    const b = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(b).toEqual(a);
  });

  it("T10: projection is pure — no HumanDecision / new execution side effects", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t10-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t10";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "pure" }).ok).toBe(true);
    const before = walkSnapshot(refsRoot);
    projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    const after = walkSnapshot(refsRoot);
    expect(after).toEqual(before);
  });
});

function walkSnapshot(root: string): string[] {
  const out: string[] = [];
  const walk = (dir: string) => {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(abs);
      else {
        const st = fs.statSync(abs);
        out.push(`${path.relative(root, abs)}:${st.size}:${st.mtimeMs}`);
      }
    }
  };
  walk(root);
  return out.sort();
}

describe("AKG-M5 L3-S2 Option B — Lot A ingest + FS→SHA supersession", () => {
  it("EP-S2-03/04 stamps verified generic_materialization Evidence for supersession", async () => {
    const db = tempProductDbPath("l3s2-mat.sqlite");
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: "l3s2m",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "mat" });
    const oa = runtime.oa!;
    expect(oa.evidenceReviewServices).toBeTruthy();
    const refsRoot = path.join(path.dirname(db), "mission-result-refs");
    fs.mkdirSync(refsRoot, { recursive: true });

    const bytes = Buffer.from("# hello\n", "utf8");
    const digest = `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
    const stamped = await ingestGenericFilesystemMaterializationArtifactEvidence({
      evidenceReviewServices: oa.evidenceReviewServices!,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      executionContractId: "xct:l3s2-mat",
      executionAttemptId: "xat:a",
      logicalPath: "docs/note.md",
      artifactBytes: bytes,
      digest,
      refsRoot,
    });
    expect(stamped.ok).toBe(true);
    if (!stamped.ok) return;
    expect(stamped.evidenceStatus).toBe("verified");

    const loaded = await oa.evidenceReviewServices!.evidenceReader.findById(
      stamped.evidenceId,
    );
    expect(loaded).toBeTruthy();
    expect(loaded!.source).toBe(GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE);
    expect(loaded!.status).toBe("verified");
    expect(loaded!.type).toBe("artifact");

    const now = "2026-10-26T00:00:00.000Z";
    const attempts: ExecutionAttempt[] = [
      {
        schemaVersion: "0.2.0-oa",
        attemptId: "xat:a",
        executionContractId: "xct:l3s2-mat",
        executionContractVersion: 1,
        selectedAgentRef: STUDIO_CURSOR_GENERALIST_AGENT_ID,
        status: "succeeded",
        idempotencyKey: "idem:a",
        correlationId: "cor:a",
        version: 1,
        createdAt: now,
        launchedAt: now,
        startedAt: now,
        completedAt: now,
        resultRef: "res:a",
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: "prv:a",
          actor: { actorId: "actor:test", role: "system" },
          source: "system",
          timestamp: now,
          correlationId: "cor:a",
        },
      },
      {
        schemaVersion: "0.2.0-oa",
        attemptId: "xat:b",
        executionContractId: "xct:l3s2-mat",
        executionContractVersion: 1,
        selectedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
        status: "succeeded",
        idempotencyKey: "idem:b",
        correlationId: "cor:b",
        version: 1,
        createdAt: now,
        launchedAt: now,
        startedAt: now,
        completedAt: now,
        resultRef: "res:b",
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: "prv:b",
          actor: { actorId: "actor:test", role: "system" },
          source: "system",
          timestamp: now,
          correlationId: "cor:b",
        },
      },
    ];
    const commitEv = {
      ...loaded!,
      evidenceId: "ev:commit",
      type: "other" as const,
      source: "git:local_commit",
      location: `git:local_commit?repo=${encodeURIComponent("repo:test")}&commitSha=deadbeef&parentSha=base001&path=${encodeURIComponent("docs/note.md")}`,
      bindings: {
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: "xct:l3s2-mat",
        executionAttemptId: "xat:b",
      },
    } as Evidence;

    expect(
      isFsAnchorSupersededByVerifiedLocalCommit({
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: "xct:l3s2-mat",
        priorAttemptId: "xat:a",
        expectedParentSha: "base001",
        repositoryRef: "repo:test",
        requiredPaths: ["docs/note.md"],
        attempts,
        evidence: [loaded!, commitEv],
      }),
    ).toBe(true);
  });
});

```

## 14. Oracle intégré exact

**File:** `akgM5L3S2.s8.projectFirst.integrated.d0.test.ts`

**Nominal path:**
1. createProject; assert `activeCycleInstanceId === null`
2. solicitGenericExecutionPrepare(`cycleInstanceId: null`) → `projectContextOnly`
3. assert EC.cycleInstanceId null; no PRODUCT_MISSION; no docs_write
4. SHE → AUTHORIZED; no Attempt from SHE
5. Select/Start Fake Cursor
6. resolveSimulatedCompletion with Cursor report JSON (no worktree → verification UNAVAILABLE honest)
7. governedExecuteRecordResult(awaitIfPending) → GERM + Verification Evidence
8. Verification bindings: project/EC/Attempt; **cycleInstanceId undefined**
9. Mission Evidence absent (constraint not stamped)
10. materializeW3b → Product **UNCLAIMED** / CE **not_proven** (honest; Technical SUCCESS ≠ PASS)
11. RB includes Verification Evidence; no cycle on RB
12. LPS reload: still no active cycle
13. GERM projection A == B (rehydrate)

**Mode:** DET / TestOnly Fake Cursor boundary. Not REAL.

## 15. Tests positifs / négatifs

| ID | Case | Result |
|----|------|--------|
| Nominal | Project-first integrated | PASS |
| N1 | Project absent PREPARE | PASS (refused) |
| N3 | EC of other Project on SHE | PASS (refused) |
| N14/N15 | No Cursor report → no invented PASS / no Mission | PASS |

**Additional negatives covered by existing suites (not re-invented):** N2 archived (project lifecycle), N4–N8 Mission/Cont01/L3-S1, N9 digest (lotsAC), N10–N13 Mission E2E / semantic, N16 GERM (R-S2-04), N17 rehydrate (oracle), N18 Cont01/L3-S1 idempotence.

## 16. Validations consolidées

| Command | Tests | Result |
|---------|-------|--------|
| S8 oracle suite | 4 | **PASS** |
| lotsAC + L3-S1 + Mission E2E + Cont01 + W3-C×2 | 105 | **PASS** |
| `npm run typecheck` | — | **PASS** |
| `npm run lint` | — | **PASS** (2 pre-existing unused-var warnings) |

New regressions: none.

## 17. EP-S2 originaux (Qualification b712c600 §18)

| EP | Sens original | Preuve | Verdict | Limite |
|----|---------------|--------|---------|--------|
| EP-S2-01 | Mission/EC/Project/Attempt | S8 oracle + L3-S1 | **PASS** (DET Project-first) | Chat UI surface ≠ claimed |
| EP-S2-02 | SHE single gesture | S8 + L3-S1 | **PASS** | |
| EP-S2-03 | FS Studio-verified ≠ CLAIM | GERM/Verification path; OBSERVED needs worktree | **PARTIAL** | Oracle used UNAVAILABLE worktree; OBSERVED+bytes covered by Option B/frontDoor suites |
| EP-S2-04 | Generic Evidence path/digest | Lot A + optional cycle bindings | **PASS** (DET) | |
| EP-S2-05 | Mission Evidence ingested & bound | Cycle-bound Mission E2E KEEP; Project-only Generic does **not** invent PRODUCT_MISSION | **PARTIAL** | Project-only Mission PASS semantic **NOT PROVEN** (by design — no artificial stamp) |
| EP-S2-06 | RB/CE consume admissible proofs | S8 RB includes Verification; Mission E2E | **PASS** (DET at tested scope) | |
| EP-S2-07 | Product Result honest | UNCLAIMED without semantic | **PASS** | |
| EP-S2-08 | Post-Evidence + rehydrate | GERM surface equality + W3-C non-reg | **PARTIAL** | Nora/Pilote UX E2E NOT PROVEN |
| EP-S2-09 | Fail-closed | N1/N3 + historical | **PARTIAL** | Full N-matrix not all re-run in this file |
| EP-S2-10 | No docs_write / no parallel engine | asserts | **PASS** | |
| EP-S2-11 | L3-S1 / SHE non-reg | suite PASS | **PASS** | |
| EP-S2-12 | Fake/Real | TestOnly; REAL not run | **PASS** | REAL NOT GRANTED |

## 18. Résultat Product prouvé ou non

- **Technical Attempt succeeded:** PROVEN (DET)
- **Verification Evidence Project-first (no cycle):** PROVEN (DET)
- **Product PASS (mutating Generic PREPARE):** **NOT PROVEN / UNCLAIMED** — honest; no applicable Result Semantic without inventing PRODUCT_MISSION
- **Mission Evidence Project-only Generic:** **NOT PROVEN** (constraint absent; correctly not invented)
- **Cycle-bound Mission PASS path:** preserved (Mission E2E non-reg PASS)

## 19. Recovery / rehydration

- GERM load + `projectW3cExecutionReportSurfaceFromDurable` equal on re-read
- No CycleInstance created on reload
- Evidence bindings stable without cycle field

## 20. Fake / Real Matrix

| Area | Mode | Status |
|------|------|--------|
| Cursor launch | TestOnly Fake | Exercised |
| FS observation | UNAVAILABLE in oracle (no worktreeRef) | Honest |
| OpenAI | Fake provider | |
| Cursor REAL / LIVE / exclusive | NOT run | NOT GRANTED |

DETERMINISTIC PASS ≠ READY FOR REAL.

## 21. R24 impacts (SYNC PENDING)

| Topic | Before | After | PRR volumes |
|-------|--------|-------|-------------|
| Post-success Evidence gate | Required cycle + PRODUCT_MISSION | GERM/Verification/FS without cycle; Mission only if constraint | 02, 03, 06, 07, 08, 09 |
| Evidence bindings | Often required cycle at Product ingest types | Optional; omit when absent | 02, 06 |
| W3-B RB | Mission-only enrichment | Also Verification/generic_mat for Generic non-mission | 03, 08 |
| Product PASS | Unchanged semantic set | Still no universal PASS | 07, 09 |

PRR/Roadmap **not** edited. LOCAL CANDIDATE ≠ CURRENT ON MAIN.

## 22. Dette / owner / exit

| Item | Owner | Exit |
|------|-------|------|
| ChatGPT Critical S8 Review | ChatGPT | Verdict |
| OBSERVED FS + digest in same Generic PREPARE oracle | Delivery | Optional extension (frontDoor already proves OBSERVED) |
| Project-only Mission PASS | Morris | Only if new Result Semantic / legitimate PRODUCT_MISSION path authorized |
| R24 sync | Docs | Separate GO |
| Git Integration | Morris | Separate GO — **not authorized** |
| REAL | Morris | Explicit grant |

## 23. Risques / réserves

1. Mutating Generic Product PASS still requires future semantic decision — correctly UNCLAIMED today.
2. Oracle did not exercise OBSERVED worktree in the same file (UNAVAILABLE honesty); Option B/frontDoor cover OBSERVED separately — do not sum into false E2E COMPLETE.
3. GCEC artifactCompleteness strict still requires cycle for historical GCEC functional-design evaluator — not used as Product PASS gate for generic_materialization here.
4. Dirty local candidate only.

## 24. Décisions supplémentaires requises

- None structural for this Delivery (OA schema OK).
- Future: Result Semantic for mutating Generic Project-first PASS — **STOP** until Morris GO (not invented here).
- R24 / Git Integration: distinct gates.

## 25. Git Review Index cumulatif Option B

| Ref | Value |
|-----|-------|
| Branch | `feat/akg-m5-l3-s2-generic-proof-continuity` |
| HEAD | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| Project commits | 0 |
| Prior handoff | `59a61254` / `47e52720` |
| Handoff branch | `sfia/review-handoff` |
| SHA-256 S8 oracle | `33eaefd9b4f6a8f119f41d47762f77ac9ee7863391fef32643f8832a12cddf86` |
| SHA-256 ingestGeneric | `4d1e32546bda1a7428359177c74d89d8251ee358df4ad8229a53f2cb26e8015f` |

## 26. Verdict unique

**S8 PROJECT-FIRST — INTEGRATED LOCAL DET DELIVERY CANDIDATE — READY FOR CHATGPT CRITICAL REVIEW — R24 SYNC PENDING — GIT INTEGRATION NOT AUTHORIZED**

Does **not** mean L3-S2 GLOBAL COMPLETE, REAL PROVEN, or Product PASS for mutating Generic PREPARE.
