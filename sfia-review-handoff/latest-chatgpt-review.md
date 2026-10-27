# SFIA Studio — ChatGPT Review Pack (FULL)

## 1. Date / heure
- Generated (UTC): 2026-10-27T10:03:50Z
- Local delivery worktree: `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s2-generic-proof-continuity`

## 2. GO Morris et limites
**GO:** 2026-10-27 — GO R-S8-03/04 CONSOLIDATED CLOSURE (PASS 05).

**Cycle:** AKG-M5 / L3-S2 OPTION B / S8 PROJECT-FIRST — EVIDENCE REJECTION CLOSURE — CONSOLIDATED CORRECTION PASS 05.

**Autorisé:** R-S8-03 ABSENT≠REJECTED admission; R-S8-04 O8 Product oracle unconditional; tests; non-regs; FULL pack; L3 handoff.

**Non autorisé:** nouvelle architecture Evidence; agrégat/migration; lifecycle RB; Result Semantic; Product PASS générique; SHE assoupli; cycle fictif; L4/REAL/LIVE; OA-exclusive; PRR/Roadmap write; commit/push/PR/merge projet; runtime v3.

## 3. Cycle 8 / CRITICAL / EVOL-CORRECTION
SFIA Studio · AKG-M5 · V3-F05 Generic Execution · L3-S2 Option B / S8 · CRITICAL — Evidence admission/rejection integrity.

## 4. Git Truth (initial = final Product)

| Champ | Valeur |
|-------|--------|
| Branch | `feat/akg-m5-l3-s2-generic-proof-continuity` |
| HEAD | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| origin/main | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| Dirty | YES — Option B + S8 + Pass 04/05 candidate preserved |
| Project commit/push | NOT performed |
| Prior handoff tip | `d8c68b06af9b12a840525845a04b42f69244fe0b` |
| Prior handoff blob | `0a42839fbe39485683222a0e10a51adf2d5807d4` |

### Dirty inventory
**Modified:** materializeW3bProductTerminal.ts (Pass 05 R-S8-03); governedExecute…; ingestVerification/Mission; w3cPostEvidenceLoop; resolvePreCommit/VerifiedFS; gcecCont01 test; chatgpt-review.md
**Untracked:** S8 oracle test; lotsAC test; ingestGeneric…; fsAnchor…

## 5. Sources Git exactes
Méthode (template/routing/operating model/guardrails/CKC), Build Doctrine, Roadmap RO, Product Completion, M5 trajectory, Generic architecture D-ER-17/18, doctrine v3 33–35, PRR 02/03/06/07/08/09 RO, prior FULL handoff d8c68b06.

## 6. Convergence Pre-check
Build Doctrine VALIDATED · Roadmap ACTIVE · T-C ADOPTED · L3-S1 ON MAIN · L3-S2 Option B LOCAL · S8 DECIDED · R-S8-01/02 DET · **R-S8-03/04 closed this Pass** · R24 SYNC PENDING · L3 GLOBAL OPEN · G-REAL NOT GRANTED · runtime v3 NON ADOPTED.

## 7. R23 composants / invariants
W3-B admission: **ADAPT** — `resolveW3bEvidenceAdmission` discriminated ABSENT / ADMISSIBLE / REJECTED.
Predicate `evidenceAdmissibleForW3bExecutionContext`: KEEP.
OA RB/CE: KEEP (rejected path returns before createReviewBundle).
S8 oracle: COMPLETE (O8 unconditional).
Mission cycle-bound / GERM / W3-C: KEEP.
R22: N/A — no new cognitive provider.

Coverage:
| Area | DOCUMENTED | COVERAGE VERIFIED | BEHAVIOR PROVEN | KNOWN GAP |
|------|------------|-------------------|-----------------|-----------|
| ABSENT vs REJECTED | Y | Y | Y | — |
| O8 Product W3-B rejection | Y | Y | Y (reader stub boundary) | OA ingest may also refuse foreign project — not used as O8 PASS |
| OBSERVED / late Evidence | Y | Y | Y (revalidated) | REAL not granted |

## 8. R-S8-03 avant / après

**Avant:** `admitIfOwned` → `Evidence | null` — present-but-incoherent collapsed to null (= absent).

**Après:** `resolveW3bEvidenceAdmission`:
- `absent` — findById null → optional skip / honest incomplete (Mission → tech-only NOT_PROVEN)
- `admissible` — admit to RB
- `rejected` — fail-closed Product **before** createReviewBundle; code mapped:
  - evidence_project_mismatch → `EVIDENCE_PROJECT_MISMATCH`
  - evidence_execution_contract_mismatch → `EVIDENCE_CONTRACT_MISMATCH`
  - evidence_execution_attempt_mismatch → `EVIDENCE_ATTEMPT_MISMATCH`
  - cycle mismatches → `EVIDENCE_CYCLE_MISMATCH`
  - other role/status → `W3B_EVIDENCE_ADMISSION_REJECTED`
- message includes role + reason + evidenceId
- product projection: reviewBundle=null, claimEvaluation=null
- Attempt durable status unchanged (Technical SUCCESS ≠ Product PASS)

## 9. R-S8-04 test corrigé
O8 no longer gates assertions on `if (planted.ok)`.
Strategy: bounded `EvidenceReader` substitution for verificationId only → foreign verified Evidence presented to real `materializeW3bProductTerminal`.
Admission predicate / rejection / Product result **not mocked**.
Unconditional expects: `ok:false`, `EVIDENCE_PROJECT_MISMATCH`, message contains reason+id, no reviewBundleId/claimEvaluationId on product, frozen snaps (if any) exclude foreign id.

## 10. Règle ABSENT / REJECTED
ABSENT ≠ REJECTED semantically and in Product control flow. Rejected Evidence never admitted; never silent-as-missing.

## 11. Motifs de refus Product
See §8 code map. Observable via `materialize.ok===false`, `code`, `message`.

## 12–13. Diffs tracked + untracked full contents

### Diff tracked vs origin/main (complete)
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
index 2dae7536..e485e3a3 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
@@ -1145,6 +1145,7 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
   function lineageSupersession(input: {
     artifactSource: string;
     artifactAttemptId?: string;
+    artifactLocation?: string;
     extraArtifacts?: Evidence[];
   }) {
     const artifactAttemptId = input.artifactAttemptId ?? "xat:a";
@@ -1170,6 +1171,7 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
         evidence({
           evidenceId: "ev:a",
           source: input.artifactSource,
+          location: input.artifactLocation ?? PATH,
           bindings: {
             projectId: PROJECT,
             cycleInstanceId: CYCLE,
@@ -1209,6 +1211,64 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
     ).toBe(true);
   });

+  it("L3-S2 generic_materialization (+ dotted suffix) supersedes FS anchor", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+        }),
+      ),
+    ).toBe(true);
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization.v1",
+        }),
+      ),
+    ).toBe(true);
+  });
+
+  it("L3-S2 absolute durable generic_materialization location matches logical requiredPath", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+          artifactLocation: `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${PATH}`,
+        }),
+      ),
+    ).toBe(true);
+  });
+
+  it("CORR-S2-01 prefix collision xdocs/… must NOT supersede required logical path", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+          artifactLocation: `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/x${PATH}`,
+        }),
+      ),
+    ).toBe(false);
+  });
+
+  it("CORR-S2-01 autres… prefix and .bak suffix must NOT supersede required logical path", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+          artifactLocation: `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/autres${PATH}`,
+        }),
+      ),
+    ).toBe(false);
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+          artifactLocation: `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${PATH}.bak`,
+        }),
+      ),
+    ).toBe(false);
+  });
+
   it("T11 irrelevant Attempt Evidence (wrong source / wrong attempt) → no supersession", () => {
     expect(
       isFsAnchorSupersededByVerifiedLocalCommit(
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

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index cfd2ce0c..ae2f681e 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -16,6 +16,11 @@ import {
   isMissionResultEvidenceId,
   missionResultEvidenceIdForAttempt,
 } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
+import { executionReviewVerificationEvidenceIdForAttempt } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
+import {
+  GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE_EXPORT,
+  genericMaterializationEvidenceIdForAttempt,
+} from "@/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence";
 import {
   projectW3bProductTerminal,
   productReservationsForAttempt,
@@ -31,6 +36,131 @@ import {
 import { maybeMaterializeProductSynthesisAfterW3c } from "./maybeMaterializeProductSynthesisAfterW3c";
 import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

+/**
+ * R-S8-01 — Admit Evidence into W3-B RB only when ownership bindings match the
+ * execution context. Deterministic Attempt-derived IDs alone are insufficient.
+ */
+export type W3bEvidenceAdmissionRole =
+  | "mission_result"
+  | "verification"
+  | "generic_materialization";
+
+/** Product-local refusal when present Evidence fails W3-B ownership / role checks. */
+export const W3B_EVIDENCE_ADMISSION_REJECTED =
+  "W3B_EVIDENCE_ADMISSION_REJECTED" as const;
+
+/**
+ * R-S8-03 — Discriminated lookup: ABSENT ≠ REJECTED.
+ * Present-but-incoherent Evidence must never be interpreted as mere absence.
+ */
+export type W3bEvidenceAdmissionResolution =
+  | { readonly kind: "absent" }
+  | { readonly kind: "admissible"; readonly evidence: Evidence }
+  | {
+      readonly kind: "rejected";
+      readonly evidence: Evidence;
+      readonly role: W3bEvidenceAdmissionRole;
+      readonly reason: string;
+    };
+
+export function evidenceAdmissibleForW3bExecutionContext(input: {
+  readonly evidence: Evidence;
+  readonly projectId: string;
+  readonly executionContractId: string;
+  readonly executionAttemptId: string;
+  readonly cycleInstanceId: string | null;
+  readonly role: W3bEvidenceAdmissionRole;
+}): { ok: true } | { ok: false; reason: string } {
+  const e = input.evidence;
+  if (e.status !== "verified") {
+    return { ok: false, reason: "evidence_not_verified" };
+  }
+  const b = e.bindings ?? {};
+  if ((b.projectId ?? null) !== input.projectId) {
+    return { ok: false, reason: "evidence_project_mismatch" };
+  }
+  if ((b.executionContractId ?? null) !== input.executionContractId) {
+    return { ok: false, reason: "evidence_execution_contract_mismatch" };
+  }
+  if ((b.executionAttemptId ?? null) !== input.executionAttemptId) {
+    return { ok: false, reason: "evidence_execution_attempt_mismatch" };
+  }
+  const evidenceCycle = b.cycleInstanceId?.trim() || null;
+  const contractCycle = input.cycleInstanceId?.trim() || null;
+  if (contractCycle) {
+    if (evidenceCycle !== contractCycle) {
+      return { ok: false, reason: "evidence_cycle_mismatch" };
+    }
+  } else if (evidenceCycle) {
+    // Project-only EC: refuse foreign / leftover cycle binding.
+    return { ok: false, reason: "evidence_foreign_cycle_on_project_only" };
+  }
+
+  if (input.role === "verification") {
+    if (e.sourceKind !== "execution_attempt") {
+      return { ok: false, reason: "verification_source_kind_mismatch" };
+    }
+    if (e.provenance?.source !== "execution_adapter") {
+      return { ok: false, reason: "verification_provenance_mismatch" };
+    }
+  } else if (input.role === "generic_materialization") {
+    if (e.sourceKind !== "external") {
+      return { ok: false, reason: "generic_mat_source_kind_mismatch" };
+    }
+    if (e.source !== GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE_EXPORT) {
+      return { ok: false, reason: "generic_mat_source_mismatch" };
+    }
+  } else if (input.role === "mission_result") {
+    if (e.sourceKind !== "execution_attempt") {
+      return { ok: false, reason: "mission_source_kind_mismatch" };
+    }
+  }
+
+  return { ok: true };
+}
+
+export function resolveW3bEvidenceAdmission(
+  evidence: Evidence | null | undefined,
+  ctx: {
+    readonly projectId: string;
+    readonly executionContractId: string;
+    readonly executionAttemptId: string;
+    readonly cycleInstanceId: string | null;
+    readonly role: W3bEvidenceAdmissionRole;
+  },
+): W3bEvidenceAdmissionResolution {
+  if (!evidence) return { kind: "absent" };
+  const check = evidenceAdmissibleForW3bExecutionContext({
+    evidence,
+    ...ctx,
+  });
+  if (check.ok) {
+    return { kind: "admissible", evidence };
+  }
+  return {
+    kind: "rejected",
+    evidence,
+    role: ctx.role,
+    reason: check.reason,
+  };
+}
+
+function productCodeForW3bEvidenceRejection(reason: string): string {
+  switch (reason) {
+    case "evidence_project_mismatch":
+      return "EVIDENCE_PROJECT_MISMATCH";
+    case "evidence_execution_contract_mismatch":
+      return "EVIDENCE_CONTRACT_MISMATCH";
+    case "evidence_execution_attempt_mismatch":
+      return "EVIDENCE_ATTEMPT_MISMATCH";
+    case "evidence_cycle_mismatch":
+    case "evidence_foreign_cycle_on_project_only":
+      return "EVIDENCE_CYCLE_MISMATCH";
+    default:
+      return W3B_EVIDENCE_ADMISSION_REJECTED;
+  }
+}
+
 function w3cUnavailableFailure(
   cause: unknown,
 ): Extract<W3cPostEvidenceLoopResult, { ok: false }> {
@@ -203,6 +333,27 @@ function projectFromFacts(input: {
   return projectW3bProductTerminal(input);
 }

+function w3bEvidenceRejectionFailure(input: {
+  readonly attempt: ExecutionAttempt;
+  readonly contract: ExecutionContract;
+  readonly primaryEvidence: Evidence | null;
+  readonly rejection: Extract<W3bEvidenceAdmissionResolution, { kind: "rejected" }>;
+}): Extract<MaterializeW3bProductTerminalResult, { ok: false }> {
+  const { rejection } = input;
+  return {
+    ok: false,
+    code: productCodeForW3bEvidenceRejection(rejection.reason),
+    message: `W3-B Evidence admission rejected (${rejection.role}): ${rejection.reason} for ${rejection.evidence.evidenceId}`,
+    product: projectFromFacts({
+      attempt: input.attempt,
+      contract: input.contract,
+      evidence: input.primaryEvidence,
+      reviewBundle: null,
+      claimEvaluation: null,
+    }),
+  };
+}
+
 function boundActionOf(
   attempt: ExecutionAttempt,
   contract: ExecutionContract,
@@ -275,22 +426,36 @@ export async function materializeW3bProductTerminal(input: {
   const isMissionProduct = contract.constraints.includes(
     PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
   );
+  const ownershipCtx = {
+    projectId: input.projectId,
+    executionContractId: contract.executionContractId,
+    executionAttemptId: attempt.attemptId,
+    cycleInstanceId: contract.cycleInstanceId?.trim() || null,
+  };
   let evidenceIdsForBundle: string[] = [ingested.evidence.evidenceId];
   let primaryEvidence = ingested.evidence;
   if (isMissionProduct) {
     const missionEvidenceId = missionResultEvidenceIdForAttempt(attempt.attemptId);
-    const missionEvidence =
-      await services.evidenceReader.findById(missionEvidenceId);
-      if (missionEvidence && missionEvidence.status === "verified") {
-      evidenceIdsForBundle = [missionEvidence.evidenceId];
-      primaryEvidence = missionEvidence;
+    const missionRaw = await services.evidenceReader.findById(missionEvidenceId);
+    const missionAdmission = resolveW3bEvidenceAdmission(missionRaw, {
+      ...ownershipCtx,
+      role: "mission_result",
+    });
+    if (missionAdmission.kind === "rejected") {
+      return w3bEvidenceRejectionFailure({
+        attempt,
+        contract,
+        primaryEvidence,
+        rejection: missionAdmission,
+      });
+    }
+    if (missionAdmission.kind === "admissible") {
+      evidenceIdsForBundle = [missionAdmission.evidence.evidenceId];
+      primaryEvidence = missionAdmission.evidence;
       // CP2-04 — include Verification Evidence in same ReviewBundle only when
       // the EC requires studio-verified-changeset (generic local-write path).
       // Historical clarify/read missions must keep a mission-only RB so CE
       // bindings.evidenceRefs match reviewBundle.evidenceRefs.
-      const { executionReviewVerificationEvidenceIdForAttempt } = await import(
-        "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence"
-      );
       const { missionRequiresStudioVerification } = await import(
         "@/lib/oa/evidence-review/application/missionResultContractResultSemantic"
       );
@@ -311,18 +476,77 @@ export async function materializeW3bProductTerminal(input: {
       if (requiresVerification) {
         const verificationEvidenceId =
           executionReviewVerificationEvidenceIdForAttempt(attempt.attemptId);
-        const verificationEvidence =
+        const verificationRaw =
           await services.evidenceReader.findById(verificationEvidenceId);
-        if (verificationEvidence && verificationEvidence.status === "verified") {
+        const verificationAdmission = resolveW3bEvidenceAdmission(
+          verificationRaw,
+          {
+            ...ownershipCtx,
+            role: "verification",
+          },
+        );
+        if (verificationAdmission.kind === "rejected") {
+          return w3bEvidenceRejectionFailure({
+            attempt,
+            contract,
+            primaryEvidence,
+            rejection: verificationAdmission,
+          });
+        }
+        if (verificationAdmission.kind === "admissible") {
           evidenceIdsForBundle = [
-            missionEvidence.evidenceId,
-            verificationEvidence.evidenceId,
+            missionAdmission.evidence.evidenceId,
+            verificationAdmission.evidence.evidenceId,
           ];
         }
+        // ABSENT verification → mission-only RB (honest incomplete / NOT_PROVEN).
       }
     }
-    // Missing / unverified Mission Evidence → tech-only RB; mission semantic
-    // yields NOT_PROVEN / Product UNCLAIMED (honest).
+    // ABSENT Mission Evidence → tech-only RB; mission semantic NOT_PROVEN / UNCLAIMED.
+    // REJECTED Mission Evidence never falls through as absence (R-S8-03).
+  } else {
+    // S8 Project-first Generic (no PRODUCT_MISSION stamp): include owned verified
+    // Studio Verification + generic_materialization Evidence when ADMISSIBLE.
+    // ABSENT → continue without that Evidence (honest).
+    // REJECTED → fail-closed Product (never silent-as-absent).
+    const verificationEvidenceId =
+      executionReviewVerificationEvidenceIdForAttempt(attempt.attemptId);
+    const verificationRaw =
+      await services.evidenceReader.findById(verificationEvidenceId);
+    const verificationAdmission = resolveW3bEvidenceAdmission(verificationRaw, {
+      ...ownershipCtx,
+      role: "verification",
+    });
+    if (verificationAdmission.kind === "rejected") {
+      return w3bEvidenceRejectionFailure({
+        attempt,
+        contract,
+        primaryEvidence,
+        rejection: verificationAdmission,
+      });
+    }
+    if (verificationAdmission.kind === "admissible") {
+      evidenceIdsForBundle.push(verificationAdmission.evidence.evidenceId);
+    }
+    const genericMatId = genericMaterializationEvidenceIdForAttempt(
+      attempt.attemptId,
+    );
+    const genericMatRaw = await services.evidenceReader.findById(genericMatId);
+    const genericMatAdmission = resolveW3bEvidenceAdmission(genericMatRaw, {
+      ...ownershipCtx,
+      role: "generic_materialization",
+    });
+    if (genericMatAdmission.kind === "rejected") {
+      return w3bEvidenceRejectionFailure({
+        attempt,
+        contract,
+        primaryEvidence,
+        rejection: genericMatAdmission,
+      });
+    }
+    if (genericMatAdmission.kind === "admissible") {
+      evidenceIdsForBundle.push(genericMatAdmission.evidence.evidenceId);
+    }
   }

   const bundle = await services.createReviewBundle.execute({
@@ -337,10 +561,23 @@ export async function materializeW3bProductTerminal(input: {
   });

   if (!bundle.ok) {
+    // R-S8-02 — fingerprint mismatch (e.g. late Evidence after prior create) must
+    // not be projected as Product success; OA fail-closed IDEMPOTENCY_CONFLICT.
+    const lateHint =
+      bundle.error.detailCode === "IDEMPOTENCY_CONFLICT"
+        ? ` — late or divergent Evidence set cannot rewrite frozen/idempotent ReviewBundle for Attempt ${attempt.attemptId}`
+        : "";
     return {
       ok: false,
       code: bundle.error.detailCode,
-      message: bundle.error.message,
+      message: `${bundle.error.message}${lateHint}`,
+      product: projectFromFacts({
+        attempt,
+        contract,
+        evidence: primaryEvidence,
+        reviewBundle: bundle.reviewBundle ?? null,
+        claimEvaluation: null,
+      }),
     };
   }

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

diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
index cbe42113..c2a18b59 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
@@ -14,6 +14,18 @@ import {
   M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
   STUDIO_CURSOR_GENERALIST_AGENT_ID,
 } from "./realLaunchSafety";
+import {
+  evidenceLocationMatchesLogicalPath,
+  isAllowlistedArtifactMaterializationSource,
+  logicalPathFromDurableArtifactLocation,
+} from "./fsAnchorArtifactMaterializationEvidenceSources";
+
+export {
+  FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES,
+  GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE,
+  isAllowlistedArtifactMaterializationSource,
+  type FsAnchorArtifactMaterializationEvidenceSource,
+} from "./fsAnchorArtifactMaterializationEvidenceSources";

 const FS_EFFECTS = new Set<CursorAuthorizedEffectId>([
   "filesystem.create",
@@ -28,28 +40,6 @@ const PROTECTED_GIT_EFFECTS = new Set<CursorAuthorizedEffectId>([
   "github.pr.merge",
 ]);

-/**
- * Artifact-materialization Evidence sources that may supersede an FS anchor.
- *
- * HISTORICAL durable reading only — not Product admission of docs_write.
- * Origin/main stamped file artifacts as `execution_attempt:docs_write`
- * (retired `DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE`), including dotted suffixes
- * such as `execution_attempt:docs_write.v2`. That producer is gone.
- *
- * Product generalist materialization does not stamp a replacement
- * `execution_attempt:*` artifact source. `IngestExecutionAttemptEvidence`
- * writes a prose source (`execution attempt <id> (succeeded)`), which is a
- * terminal-attempt label shared with non-artifact rows and is excluded.
- * `execution_attempt:mission_result` and every other non-allowlisted source
- * cannot supersede (false / NOT_PROVEN).
- */
-export const FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES = [
-  "execution_attempt:docs_write",
-] as const;
-
-export type FsAnchorArtifactMaterializationEvidenceSource =
-  (typeof FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES)[number];
-
 /**
  * HISTORICAL Attempt agent recorded by the retired bounded docs-write executor.
  * Durable reading only — not Product admission of a docs_write launch path.
@@ -67,13 +57,6 @@ function isDurableArtifactMaterializationAttemptAgent(
   );
 }

-function isAllowlistedArtifactMaterializationSource(source: string): boolean {
-  for (const allowed of FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES) {
-    if (source === allowed || source.startsWith(`${allowed}.`)) return true;
-  }
-  return false;
-}
-
 export type WorkspaceContinuationDescriptor = {
   readonly priorAttemptId: string;
   readonly expectedHeadSha: string;
@@ -218,7 +201,12 @@ export function isFsAnchorSupersededByVerifiedLocalCommit(
       return false;
     }
     const loc = String(ev.location ?? "").trim();
-    if (!loc || !requiredPaths.includes(loc)) return false;
+    if (
+      !loc ||
+      !requiredPaths.some((p) => evidenceLocationMatchesLogicalPath(loc, p))
+    ) {
+      return false;
+    }
     const digest = String(ev.digest ?? "").trim().toLowerCase();
     if (!digest.startsWith("sha256:") || digest.length < "sha256:".length + 64) {
       return false;
@@ -348,10 +336,13 @@ function resolvePriorArtifactMaterializationAttempt(input: {
       };
     }
     const ev = matching[0]!;
+    const artifactPath = logicalPathFromDurableArtifactLocation(
+      String(ev.location ?? ""),
+    );
     candidates.push({
       priorAttemptId: attempt.attemptId,
       evidenceId: ev.evidenceId,
-      artifactPath: String(ev.location).trim(),
+      artifactPath,
       artifactDigest: String(ev.digest).trim().toLowerCase(),
     });
   }
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts
index 3705caa3..30740124 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts
@@ -4,10 +4,10 @@
  * Pure Product-truth: Attempt history + VERIFIED Artifact Evidence bindings.
  * Zero / multiple eligible candidates → fail closed (no latest/first heuristic).
  *
- * HISTORICAL durable reading: Evidence source `execution_attempt:docs_write`
- * and agent `agt:m4.cursor.bounded_docs_write` remain recognizable. That is not
- * Product admission of a docs_write launch path. Current materialization
- * Attempts use the Studio Cursor generalist agent id.
+ * Allowlist: {@link FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES}
+ * (historical docs_write + CURRENT generic_materialization). Not Product
+ * admission of docs_write. Current materialization Attempts use the Studio
+ * Cursor generalist agent id.
  */
 import type { Evidence } from "@/lib/oa/evidence-review";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
@@ -17,15 +17,12 @@ import {
   expectedEvidenceIdentity,
 } from "./qualifyExecutionContractCompletion";
 import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "./realLaunchSafety";
-
-/**
- * HISTORICAL durable Evidence source allowlist — not Product admission of
- * docs_write. Must stay aligned with
- * {@link FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES}.
- */
-const FS_MATERIALIZATION_EVIDENCE_SOURCES = [
-  "execution_attempt:docs_write",
-] as const;
+import {
+  evidenceLocationMatchesLogicalPath,
+  isAllowlistedArtifactMaterializationSource,
+  logicalPathFromDurableArtifactLocation,
+  resolveLogicalPathFromEvidenceLocation,
+} from "./fsAnchorArtifactMaterializationEvidenceSources";

 /** Historical Attempt agent — durable Evidence reading only. */
 const HISTORICAL_BOUNDED_DOCS_WRITE_AGENT_ID =
@@ -93,13 +90,6 @@ function expectedArtifactPaths(
   return [...paths];
 }

-function isAllowlistedFsMaterializationSource(source: string): boolean {
-  for (const allowed of FS_MATERIALIZATION_EVIDENCE_SOURCES) {
-    if (source === allowed || source.startsWith(`${allowed}.`)) return true;
-  }
-  return false;
-}
-
 function isDurableFsMaterializationAttemptAgent(
   selectedAgentRef: string | undefined,
 ): boolean {
@@ -123,12 +113,17 @@ function isEligibleArtifact(
   if (ev.type !== "artifact") return false;
   if (!evidenceMatchesContractLineage(ev, expected)) return false;
   if (ev.bindings.executionAttemptId !== attemptId) return false;
-  if (!isAllowlistedFsMaterializationSource(String(ev.source ?? ""))) {
+  if (!isAllowlistedArtifactMaterializationSource(String(ev.source ?? ""))) {
     return false;
   }
   const loc = String(ev.location ?? "").trim();
   if (!loc) return false;
-  if (allowedPaths.length > 0 && !allowedPaths.includes(loc)) return false;
+  if (
+    allowedPaths.length > 0 &&
+    !allowedPaths.some((p) => evidenceLocationMatchesLogicalPath(loc, p))
+  ) {
+    return false;
+  }
   const digest = String(ev.digest ?? "").trim().toLowerCase();
   if (!digest.startsWith("sha256:") || digest.length < "sha256:".length + 64) {
     return false;
@@ -176,10 +171,14 @@ export function resolveVerifiedFilesystemMaterializationPriorAttempt(
       };
     }
     const ev = matching[0]!;
+    const rawLoc = String(ev.location).trim();
+    const logical =
+      resolveLogicalPathFromEvidenceLocation(rawLoc, allowedPaths) ??
+      logicalPathFromDurableArtifactLocation(rawLoc);
     candidates.push({
       priorAttemptId: attempt.attemptId,
       evidenceId: ev.evidenceId,
-      artifactPath: String(ev.location).trim(),
+      artifactPath: logical,
       artifactDigest: String(ev.digest).trim().toLowerCase(),
     });
   }

```

### Untracked: ingestGenericFilesystemMaterializationArtifactEvidence.ts (FULL)
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

### Untracked: fsAnchorArtifactMaterializationEvidenceSources.ts (FULL)
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

### Untracked: akgM5L3S2.optionB.lotsAC.d0.test.ts (FULL)
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

### Untracked: akgM5L3S2.s8.projectFirst.integrated.d0.test.ts (FULL — S8 + Pass 04/05)
```typescript
/**
 * AKG-M5 L3-S2 Option B — S8 PROJECT-FIRST integrated DET oracle
 * (+ Pass 04: R-S8-01/02; Pass 05: R-S8-03 ABSENT≠REJECTED, R-S8-04 O8 Product path).
 *
 * Product path (ZERO REAL / ZERO LIVE):
 *   Project (no CycleInstance) → Generic PREPARE → SHE → Select/Start Fake Cursor
 *   → governedExecuteRecordResult (GERM + Verification Evidence [+ OBSERVED FS])
 *   → W3-B RB/CE → honest Product Result → W3-C surface / rehydrate.
 *
 * NON-CLAIMS:
 * - PRODUCT_MISSION_FROM_DURABLE_CONTEXT is NOT invented for Generic PREPARE
 * - Product PASS for mutating Generic without applicable Result Semantic
 * - Cursor REAL / OpenAI LIVE / OA-exclusive / fake cycle
 *
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
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
import {
  evidenceAdmissibleForW3bExecutionContext,
  materializeW3bProductTerminal,
  resolveW3bEvidenceAdmission,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { projectW3cExecutionReportSurfaceFromDurable } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { PRODUCT_MISSION_FROM_DURABLE_CONTEXT } from "@/lib/oa/evidence-review/application/missionResultPayload";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  executionReviewVerificationEvidenceIdForAttempt,
  ingestExecutionReviewVerificationEvidence,
} from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
import {
  GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE_EXPORT,
  genericMaterializationEvidenceIdForAttempt,
} from "@/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence";
import { missionResultEvidenceIdForAttempt } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  settleDeterministicProductCursorSuccess,
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

describe("AKG-M5 L3-S2 S8 Pass 04 — R-S8-01 Evidence ownership", () => {
  function baseEvidence(overrides: Partial<Evidence> & { evidenceId: string }): Evidence {
    const { evidenceId, bindings, provenance, type, source, sourceKind, status, ...rest } =
      overrides;
    return {
      schemaVersion: "0.2.0-oa",
      evidenceId,
      type: type ?? "attestation",
      source: source ?? "execution attempt xat:a (succeeded)",
      sourceKind: sourceKind ?? "execution_attempt",
      status: status ?? "verified",
      classification: "internal",
      storageMode: "external_payload_ref",
      availability: "available",
      producedAt: "2026-08-23T04:30:00.000Z",
      createdAt: "2026-08-23T04:30:00.000Z",
      version: 2,
      containsSecrets: false,
      bindings: bindings ?? {
        projectId: "prj:ok",
        executionContractId: "xct:ok",
        executionAttemptId: "xat:ok",
      },
      provenance: provenance ?? {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prov:1",
        actor: LOCAL_PILOTE_ACTOR,
        source: "execution_adapter",
        timestamp: "2026-08-23T04:30:00.000Z",
        correlationId: "cor:1",
      },
      ...rest,
    } as Evidence;
  }

  const ctx = {
    projectId: "prj:ok",
    executionContractId: "xct:ok",
    executionAttemptId: "xat:ok",
    cycleInstanceId: null as string | null,
  };

  it("E1: coherent verification → admit", () => {
    const e = baseEvidence({ evidenceId: "ev:execution-review:xat:ok" });
    expect(
      evidenceAdmissibleForW3bExecutionContext({
        evidence: e,
        ...ctx,
        role: "verification",
      }),
    ).toEqual({ ok: true });
  });

  it("E2: coherent generic_mat → admit", () => {
    const e = baseEvidence({
      evidenceId: "ev:generic-materialization:xat:ok",
      type: "artifact",
      source: GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE_EXPORT,
      sourceKind: "external",
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prov:1",
        actor: LOCAL_PILOTE_ACTOR,
        source: "system",
        timestamp: "2026-08-23T04:30:00.000Z",
        correlationId: "cor:1",
      },
    });
    expect(
      evidenceAdmissibleForW3bExecutionContext({
        evidence: e,
        ...ctx,
        role: "generic_materialization",
      }),
    ).toEqual({ ok: true });
  });

  it("E3: wrong Project → refuse", () => {
    const e = baseEvidence({
      evidenceId: "ev:x",
      bindings: {
        projectId: "prj:other",
        executionContractId: "xct:ok",
        executionAttemptId: "xat:ok",
      },
    });
    const r = evidenceAdmissibleForW3bExecutionContext({
      evidence: e,
      ...ctx,
      role: "verification",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("evidence_project_mismatch");
  });

  it("E4: wrong EC → refuse", () => {
    const e = baseEvidence({
      evidenceId: "ev:x",
      bindings: {
        projectId: "prj:ok",
        executionContractId: "xct:other",
        executionAttemptId: "xat:ok",
      },
    });
    const r = evidenceAdmissibleForW3bExecutionContext({
      evidence: e,
      ...ctx,
      role: "verification",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("evidence_execution_contract_mismatch");
  });

  it("E5: wrong Attempt → refuse", () => {
    const e = baseEvidence({
      evidenceId: "ev:x",
      bindings: {
        projectId: "prj:ok",
        executionContractId: "xct:ok",
        executionAttemptId: "xat:other",
      },
    });
    const r = evidenceAdmissibleForW3bExecutionContext({
      evidence: e,
      ...ctx,
      role: "verification",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("evidence_execution_attempt_mismatch");
  });

  it("E6/E7: cycle mismatch / foreign cycle on Project-only → refuse", () => {
    const withCycle = baseEvidence({
      evidenceId: "ev:x",
      bindings: {
        projectId: "prj:ok",
        executionContractId: "xct:ok",
        executionAttemptId: "xat:ok",
        cycleInstanceId: "cyc:foreign",
      },
    });
    const foreign = evidenceAdmissibleForW3bExecutionContext({
      evidence: withCycle,
      ...ctx,
      cycleInstanceId: null,
      role: "verification",
    });
    expect(foreign.ok).toBe(false);
    if (!foreign.ok) expect(foreign.reason).toBe("evidence_foreign_cycle_on_project_only");

    const mismatch = evidenceAdmissibleForW3bExecutionContext({
      evidence: withCycle,
      ...ctx,
      cycleInstanceId: "cyc:expected",
      role: "verification",
    });
    expect(mismatch.ok).toBe(false);
    if (!mismatch.ok) expect(mismatch.reason).toBe("evidence_cycle_mismatch");
  });

  it("E8: available (not verified) → refuse", () => {
    const e = baseEvidence({ evidenceId: "ev:x", status: "available" });
    const r = evidenceAdmissibleForW3bExecutionContext({
      evidence: e,
      ...ctx,
      role: "verification",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("evidence_not_verified");
  });

  it("E9: provenance/sourceKind incoherent → refuse", () => {
    const e = baseEvidence({
      evidenceId: "ev:x",
      sourceKind: "manual",
    });
    const r = evidenceAdmissibleForW3bExecutionContext({
      evidence: e,
      ...ctx,
      role: "verification",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("verification_source_kind_mismatch");
  });

  it("T1/R-S8-03: null Evidence → ABSENT (not REJECTED)", () => {
    const r = resolveW3bEvidenceAdmission(null, {
      ...ctx,
      role: "verification",
    });
    expect(r.kind).toBe("absent");
  });

  it("T3/R-S8-03: present foreign Project → REJECTED with reason (≠ absent)", () => {
    const e = baseEvidence({
      evidenceId: "ev:execution-review:xat:ok",
      bindings: {
        projectId: "prj:foreign",
        executionContractId: "xct:ok",
        executionAttemptId: "xat:ok",
      },
    });
    const r = resolveW3bEvidenceAdmission(e, {
      ...ctx,
      role: "verification",
    });
    expect(r.kind).toBe("rejected");
    if (r.kind === "rejected") {
      expect(r.reason).toBe("evidence_project_mismatch");
      expect(r.evidence.evidenceId).toBe(e.evidenceId);
    }
  });
});

describe("AKG-M5 L3-S2 S8 Pass 04 — OBSERVED FS + late Evidence", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousPilot: string | undefined;
  let refsRoot: string;
  const extraTemp: string[] = [];

  function git(cwd: string, ...args: string[]): string {
    return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
  }

  function createGitWorktree(label: string): { repo: string; h0: string } {
    const repo = fs.mkdtempSync(path.join(os.tmpdir(), `s8-obs-${label}-`));
    extraTemp.push(repo);
    git(repo, "init", "-q");
    git(repo, "config", "user.email", "s8@example.test");
    git(repo, "config", "user.name", "s8");
    git(repo, "config", "commit.gpgsign", "false");
    fs.mkdirSync(path.join(repo, path.dirname(NOTES_PATH)), { recursive: true });
    fs.writeFileSync(path.join(repo, NOTES_PATH), "notes-h0\n");
    fs.writeFileSync(path.join(repo, "untouched.txt"), "keep\n");
    git(repo, "add", "-A");
    git(repo, "commit", "-q", "-m", "H0");
    return { repo, h0: git(repo, "rev-parse", "HEAD").toLowerCase() };
  }

  function restoreEnvVar(name: string, previous: string | undefined): void {
    if (previous === undefined) delete process.env[name];
    else process.env[name] = previous;
  }

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    delete process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
    setConversationProviderForTests(null);
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "s8-obs-refs-"));
    extraTemp.push(refsRoot);
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("akg-m5-l3s2-s8-obs.sqlite"),
      idPrefix: "l3s2ob",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    for (const d of extraTemp.splice(0)) {
      try {
        fs.rmSync(d, { recursive: true, force: true });
      } catch {
        /* ignore */
      }
    }
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "demo",
      objective: "S8 OBSERVED",
      context: "s8 obs",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `OB${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:s8-obs-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
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
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity: `acme/l3s2-s8-obs-${suffix}`,
    });
    return { projectId, oa };
  }

  function notesEditAnalysis(): IntentAnalysisDto {
    const base = buildIntentAnalysisFromSolicitedMission({
      objective: "modifier notes (OBSERVED)",
      expectedOutcome: "notes updated",
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

  function requiredFactsOrThrow(
    contract: Parameters<typeof requiredInspectedFactsForContract>[0],
  ): readonly string[] {
    const facts = requiredInspectedFactsForContract(contract);
    if (Array.isArray(facts)) return facts;
    throw new Error("facts incomplete");
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

  it("O2 — Project-only OBSERVED worktree → VerifiedChangeSet + generic_mat + RB ownership", async () => {
    const fx = createGitWorktree("obs");
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = fx.h0;
    const { projectId, oa } = await seedProject("obs");

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: fx.h0,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.cycleInstanceId).toBeNull();

    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("ec");
    expect(live.contract.cycleInstanceId ?? null).toBeNull();
    const facts = requiredFactsOrThrow(live.contract);
    const inputs = live.contract.inputs as Record<string, unknown>;
    const repositoryRef = String(inputs.repositoryBindingIdentity ?? "");
    const baseSha = String(inputs.baseHeadSha ?? fx.h0);
    expect(baseSha.toLowerCase()).toBe(fx.h0);

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
    if (!she.ok) throw new Error(she.code);

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

    // Real FS mutation in isolated worktree (Studio will observe).
    const notesAbs = path.join(fx.repo, NOTES_PATH);
    fs.writeFileSync(notesAbs, "notes-after-cursor\n");
    const expectedDigest = `sha256:${createHash("sha256")
      .update(fs.readFileSync(notesAbs))
      .digest("hex")}`;

    setTimeout(() => {
      port.resolveSimulatedCompletion(`proc:sim:${attemptId}`, {
        exitCode: 0,
        timedOut: false,
        stdout: `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify({
          schemaVersion: "oa.cursor-execution-report.1",
          reportId: `rpt:obs:${attemptId}`.slice(0, 128),
          attemptId,
          executionContractId: she.executionContractId,
          repositoryRef,
          baseSha,
          status: "succeeded",
          authorizedEffectsExecuted: ["filesystem.modify"],
          workPerformed: [`modified ${NOTES_PATH}`],
          fileEffects: {
            created: [],
            modified: [NOTES_PATH],
            deleted: [],
          },
        })}`,
        stderr: "",
        durationMs: 5,
        worktreeRef: fx.repo,
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
    if (!terminal.ok) throw new Error(String(terminal.code));

    const germ = loadGenericExecutionReviewMaterial({ refsRoot, attemptId });
    expect(germ.ok).toBe(true);
    if (!germ.ok) throw new Error("germ");
    expect(germ.manifest.verifiedEffects.verificationStatus).toBe("OBSERVED");
    expect(germ.verifiedChangeSet).toBeTruthy();
    const entry = germ.verifiedChangeSet!.all.find((e) => e.path === NOTES_PATH);
    expect(entry).toBeTruthy();
    expect(entry!.afterDigest).toBe(expectedDigest);

    const verificationId =
      executionReviewVerificationEvidenceIdForAttempt(attemptId);
    const verification =
      await oa.evidenceReviewServices!.evidenceReader.findById(verificationId);
    expect(verification?.status).toBe("verified");
    expect(verification?.bindings.cycleInstanceId).toBeUndefined();
    expect(verification?.bindings.projectId).toBe(projectId);

    const genericMatId = genericMaterializationEvidenceIdForAttempt(attemptId);
    const genericMat =
      await oa.evidenceReviewServices!.evidenceReader.findById(genericMatId);
    expect(genericMat?.status).toBe("verified");
    expect(genericMat?.digest).toBe(expectedDigest);
    expect(genericMat?.bindings.cycleInstanceId).toBeUndefined();

    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) throw new Error(materialized.code);
    expect(materialized.product.outcome).toBe("UNCLAIMED");
    expect(materialized.product.outcome).not.toBe("SUCCESS");

    const rb = await oa.evidenceReviewServices!.reviewBundleReader.findById(
      materialized.product.reviewBundleId!,
    );
    expect(rb?.frozenAt).toBeTruthy();
    const snapIds = (rb?.frozenEvidenceSnapshots ?? []).map((s) => s.evidenceId);
    expect(snapIds).toContain(verificationId);
    expect(snapIds).toContain(genericMatId);
    for (const snap of rb?.frozenEvidenceSnapshots ?? []) {
      expect(snap.evidenceId).toBeTruthy();
      expect(snap.status).toBeTruthy();
      const liveEv = await oa.evidenceReviewServices!.evidenceReader.findById(
        snap.evidenceId,
      );
      expect(liveEv?.bindings.projectId).toBe(projectId);
      expect(liveEv?.bindings.executionAttemptId).toBe(attemptId);
      expect(liveEv?.bindings.cycleInstanceId).toBeUndefined();
    }

    const liveAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(liveAfter.ok && liveAfter.livingProjectState.activeCycleInstanceId == null).toBe(
      true,
    );

    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: NOTES_PATH,
    });
    expect(surface.executionReport).not.toBeNull();
  }, 90_000);

  it("O8 / R-S8-04 — W3-B Product path REJECTS foreign-project Verification (unconditional)", async () => {
    const { projectId, oa } = await seedProject("own");
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
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
    if (!she.ok) throw new Error("she");
    launchPortOf(oa);
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
    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId,
    });
    expect(settled.ok).toBe(true);

    // R-S8-04 — Bounded EvidenceReader substitution so W3-B itself is exercised.
    // Does NOT mock admission predicate, rejection decision, or Product result.
    // Foreign Evidence is verified + role-coherent except projectId binding.
    const verificationId =
      executionReviewVerificationEvidenceIdForAttempt(attemptId);
    const foreignEvidence = {
      schemaVersion: "0.2.0-oa",
      evidenceId: verificationId,
      type: "attestation",
      source: `execution attempt ${attemptId} (succeeded)`,
      sourceKind: "execution_attempt",
      status: "verified",
      classification: "internal",
      storageMode: "external_payload_ref",
      availability: "available",
      producedAt: "2026-08-23T04:30:00.000Z",
      createdAt: "2026-08-23T04:30:00.000Z",
      version: 2,
      containsSecrets: false,
      bindings: {
        projectId: "prj:foreign-owner",
        executionContractId: she.executionContractId,
        executionAttemptId: attemptId,
      },
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prov:foreign-o8",
        actor: LOCAL_PILOTE_ACTOR,
        source: "execution_adapter",
        timestamp: "2026-08-23T04:30:00.000Z",
        correlationId: "cor:foreign-o8",
      },
    } as Evidence;

    const services = oa.evidenceReviewServices!;
    const realReader = services.evidenceReader;
    services.evidenceReader = {
      findById: async (id: string) => {
        if (id === verificationId) return foreignEvidence;
        return realReader.findById(id);
      },
    };

    let materialized: Awaited<ReturnType<typeof materializeW3bProductTerminal>>;
    try {
      // Prove the foreign Evidence is what W3-B's reader returns.
      const presented = await services.evidenceReader.findById(verificationId);
      expect(presented).not.toBeNull();
      expect(presented!.bindings.projectId).toBe("prj:foreign-owner");
      expect(presented!.status).toBe("verified");

      materialized = await materializeW3bProductTerminal({
        oa,
        projectId,
        attemptId,
      });
    } finally {
      services.evidenceReader = realReader;
    }

    // Unconditional W3-B Product assertions (cannot PASS without exercising rejection).
    expect(materialized.ok).toBe(false);
    if (materialized.ok) {
      throw new Error("O8 expected W3-B ownership rejection, got ok:true");
    }
    expect(materialized.code).toBe("EVIDENCE_PROJECT_MISMATCH");
    expect(materialized.message).toContain("evidence_project_mismatch");
    expect(materialized.message).toContain(verificationId);
    expect(materialized.product?.reviewBundleId ?? null).toBeNull();
    expect(materialized.product?.claimEvaluationId ?? null).toBeNull();

    const rb = await services.reviewBundleReader.findById(
      `rb:w3b:${createHash("sha256").update(attemptId).digest("hex").slice(0, 16)}`,
    );
    if (rb?.frozenEvidenceSnapshots) {
      const snapIds = rb.frozenEvidenceSnapshots.map((s) => s.evidenceId);
      expect(snapIds).not.toContain(verificationId);
    }
  }, 60_000);

  it("O10 / R-S8-02 — late Verification after frozen tech RB → IDEMPOTENCY_CONFLICT fail-closed", async () => {
    const { projectId, oa } = await seedProject("late");
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
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
    if (!she.ok) throw new Error("she");
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
    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId,
    });
    expect(settled.ok).toBe(true);

    const first = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const rbId = first.product.reviewBundleId!;
    const rb1 = await oa.evidenceReviewServices!.reviewBundleReader.findById(rbId);
    expect(rb1?.frozenAt).toBeTruthy();
    const firstSnap = new Set(
      (rb1?.frozenEvidenceSnapshots ?? []).map((s) => s.evidenceId),
    );

    // Late Verification Evidence arrives after freeze.
    const late = await ingestExecutionReviewVerificationEvidence({
      evidenceReviewServices: oa.evidenceReviewServices!,
      projectId,
      cycleInstanceId: null,
      executionContractId: she.executionContractId,
      executionAttemptId: attemptId,
      refsRoot,
      payload: {
        schemaVersion: "oa.execution-review-verification.1",
        attemptId,
        executionContractId: she.executionContractId,
        projectId,
        repositoryRef: "repo:late",
        baseSha: W2_TEST_PINNED_BASE_HEAD_SHA,
        reviewMaterialId: "erm:late",
        verificationStatus: "UNAVAILABLE",
        verifiedChangeSetDigest: null,
        verifiedChangeSetRef: null,
        claimFactMismatch: false,
        unclaimedObservedPaths: [],
        claimedMissingPaths: [],
        observedPathCount: 0,
        completeness: "PARTIAL",
        reviewEndOfPresent: false,
      },
    });
    expect(late.ok).toBe(true);

    const second = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    // OA createReviewBundle fingerprint includes evidenceIds → conflict, not silent rewrite.
    expect(second.ok).toBe(false);
    if (!second.ok) {
      expect(second.code).toBe("IDEMPOTENCY_CONFLICT");
      expect(second.message).toMatch(/late|divergent|idempotency/i);
    }
    const rb2 = await oa.evidenceReviewServices!.reviewBundleReader.findById(rbId);
    const secondSnap = new Set(
      (rb2?.frozenEvidenceSnapshots ?? []).map((s) => s.evidenceId),
    );
    expect([...secondSnap].sort()).toEqual([...firstSnap].sort());
    expect(secondSnap.has(executionReviewVerificationEvidenceIdForAttempt(attemptId))).toBe(
      false,
    );
  }, 60_000);
});

```

## 14. Tests négatifs intégrés
| ID | Layer | Result |
|----|-------|--------|
| T1 ABSENT via resolve | predicate | PASS |
| T2 coherent admit E1/E2 | predicate | PASS |
| T3 foreign Project REJECTED | predicate | PASS |
| T4–T8 EC/Attempt/Cycle/source | predicate E4–E9 | PASS |
| T9 not verified | predicate E8 | PASS |
| T10 O8 W3-B integrated | Product W3-B | PASS unconditional |
| T11–T12 RB/CE | Product O8 | no foreign in RB; no positive CE |
| T13 Mission | non-reg productMissionEvidenceChain | PASS |
| T14–T18 Generic/OBSERVED/late/idempotence/UNCLAIMED | S8 oracle | PASS |

## 15. Preuve de non-contournement O8
Reader stub only at EvidenceReader boundary; asserts `presented.bindings.projectId === prj:foreign-owner` before materialize; expects fail-closed — cannot PASS if W3-B not exercised or if rejection collapsed to absent success.

## 16. RB et CE après refus
Rejection returns before createReviewBundle → no new RB freeze with foreign Evidence; product.reviewBundleId/claimEvaluationId null.

## 17. Non-régressions S8
```text
cd projects/sfia-studio/app
npm run typecheck  # PASS
npm run lint       # PASS (2 pre-existing unused-var warnings)
npx vitest run __tests__/project-assistant/akgM5L3S2.s8.projectFirst.integrated.d0.test.ts
  → 17 passed
npx vitest run lotsAC + L3-S1 + Mission + gcecCont01 + w3c loop + w3c correction
  → 6 files / 105 passed
```

## 18. OBSERVED + digest revalidated
O2 PASS (VerifiedChangeSet + generic_mat + RB ownership).

## 19. Late Evidence revalidated
O10 PASS — IDEMPOTENCY_CONFLICT fail-closed preserved.

## 20. Matrice EP-S2 originale (b712c600 §18)

| EP | Verdict | Note Pass 05 |
|----|---------|--------------|
| EP-S2-01 | PASS | identity |
| EP-S2-02 | PASS | SHE |
| EP-S2-03 | PASS | OBSERVED DET |
| EP-S2-04 | PASS | path/digest |
| EP-S2-05 | NOT PROVEN | Project-only Mission semantic |
| EP-S2-06 | PASS | strengthened — REJECTED observable |
| EP-S2-07 | PASS | UNCLAIMED / fail-closed rejection |
| EP-S2-08 | PARTIAL | Nora UX E2E not claimed |
| EP-S2-09 | PASS | ABSENT≠REJECTED + late Evidence |
| EP-S2-10 | PASS | no docs_write / parallel engine |
| EP-S2-11 | PASS | L3-S1 / Mission non-reg |
| EP-S2-12 | PASS | Fake Cursor / Real FS DET; reader stub = Fake boundary |

## 21. Fake/Real Matrix
Cursor: TestOnlyRealExecutionLaunchPort (FAKE).
FS OBSERVED: real temp worktree (DET).
EvidenceReader O8: DET substitution bounded (FAKE boundary for foreign plant).
Nora: Fake. REAL/LIVE: NOT. OA-exclusive OFF.
Level: DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE. REAL BOUNDARY PROVEN: NO. G-REAL: NOT GRANTED.

## 22. R24 impacts (SYNC PENDING — no protected write)
PRR candidates: 02 admission ABSENT/REJECTED; 03 W3-B reject flow; 06 recovery messaging; 07 ownership fail-closed; 08 S8 Pass 05 tests; 09 late Evidence debt + EP-S2-05/08 reserves.
Roadmap truth-sync L3-S2: future GO. **No PRR/Roadmap modified.**

## 23. Dettes / owner / exit
| Debt | Owner | Exit |
|------|-------|------|
| Late Evidence after frozen RB (no supersession same key) | Morris/OA | reopen/supersede policy or new Attempt |
| EP-S2-05 Project-only Mission | Product | Mission stamp path only |
| EP-S2-08 Nora/Pilote UX | L4 | separate GO |
| R24 sync | Docs | after Critical Review |
| Git Integration | Distinct GO | after local closure |

## 24. Risques / réserves
Present-not-verified at expected ID now REJECTED (fail-closed) — intentional ABSENT≠REJECTED. Attempt technical status not rewritten by review refusal.

## 25. Git Review Index cumulatif Option B
Lots A/B/C + CORR-S2-01/02/03 + R-S2-04/05 + S8 + R-S8-01/02 + **Pass 05 R-S8-03/04** on dirty candidate HEAD=`6e957ecb`.

SHA-256:
- `projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts` → `fcdb11236d157d832c0a3b174afbd6b3a25740986fe81a3e74957e7bef21093c`
- `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts` → `abd35a41971b6ca4e9d22d45e13bc4734f48c914efa4a95804516bf75cf9310e`
- `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.s8.projectFirst.integrated.d0.test.ts` → `9ccf515e7d8f8e94e7d27e53353b35863a814c5c40f8e9380b6ad4dab3321185`
- `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.optionB.lotsAC.d0.test.ts` → `9b1823041bdd72ea5297ad36d37e7caf6cba1faa5d1214dc0060003e8ac0b851`
- `projects/sfia-studio/app/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence.ts` → `4d1e32546bda1a7428359177c74d89d8251ee358df4ad8229a53f2cb26e8015f`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources.ts` → `85632997028436e75ee60ddccb74b214255d59a71468c3984d33b5cf3d945f79`
- `projects/sfia-studio/app/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence.ts` → `a3a40624537fac8b43483447aa5d82105e1f86adb1ce4a868156ff1d6f4e9716`
- `projects/sfia-studio/app/features/project-assistant/f3/ingestMissionResultEvidence.ts` → `5f7bfdf71c5d95a43f193c3578060e2093ad89819624b6530013f6aaa1dca71c`
- `projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts` → `adbeade98c9264ce4e396554e2b54d7ffcd633569fa33b6a7dcd0acfc5ed0792`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts` → `bd04172901c3b330b729ffb0a9f9580253715863f5e69852362161c8b9869872`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts` → `3c9e80b1b0786fec678f73b4aa2742bdfd071981409d355e880b39bd6e1c4005`
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts` → `3a9d3b04d820e889f435ec44125b2c88706bd777f0a86fc94318ae67e5a0f18f`

## 26. Verdict unique

**S8 PROJECT-FIRST — EVIDENCE REJECTION CLOSURE LOCAL DET PASS — READY FOR CHATGPT CRITICAL CONSOLIDATED REVIEW — R24 SYNC PENDING — GIT INTEGRATION NOT AUTHORIZED**

Non-claims: L3-S2 GLOBAL COMPLETE NO · L3 GLOBAL CLOSED NO · mutating Generic Product PASS NO · Mission Project-only PROVEN NO · Nora UX E2E COMPLETE NO · REAL PROVEN NO · runtime v3 ADOPTED NO.
