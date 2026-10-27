# SFIA Studio — ChatGPT Review Pack (FULL)

## 1. Date / heure
- Generated (UTC): 2026-10-27T07:49:58Z
- Local delivery worktree: `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s2-generic-proof-continuity`

## 2. GO Morris exact et limites
**GO:** 2026-10-27 — GO CONSOLIDATED S8 EVIDENCE CLOSURE (PASS 04).

**Cycle:** AKG-M5 / L3-S2 OPTION B / S8 PROJECT-FIRST — CONSOLIDATED CORRECTION & INTEGRATED EVIDENCE CLOSURE — LOCAL DETERMINISTIC DELIVERY — PASS 04.

**Autorisé:** R-S8-01 Evidence ownership before RB admit; R-S8-02 late Evidence / OA idempotence qualification (fail-closed, no new lifecycle); S8 oracle OBSERVED FS integrated; negatives; non-regs; FULL Review Pack; L3 handoff publish-in-cycle.

**Non autorisé:** nouvel agrégat; migration SQLite; lifecycle OA structurant; nouveau moteur Evidence/RB/CE; Result Semantic universel; Product docs_write; cycleInstanceId fictif; SHE assoupli; Nora Deep / L4; Cursor REAL / OpenAI LIVE; OA-exclusive ON; PRR/Roadmap write; commit/push/PR/merge projet; runtime v3.

**Ne pas rouvrir:** D-ER-17.

## 3. Qualification cycle
- Projet: SFIA Studio
- Chantier: AKG-M5 Product Transformation
- Capacité: V3-F05 Generic Execution
- Milestone: L3-S2 Option B / S8
- Type: 8 Delivery / CRITICAL / EVOL-CORRECTION
- CKC: Cycle 8 cognitive guidance only

## 4. Git Truth (initial = final Product; no project commit)

| Champ | Valeur |
|-------|--------|
| Repo path | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s2-generic-proof-continuity` |
| Remote | `origin` → `mcleland147/sfia-workspace` |
| Branch | `feat/akg-m5-l3-s2-generic-proof-continuity` |
| HEAD | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| origin/main (local) | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| origin/main (ls-remote) | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| Dirty | YES — expected Option B + S8 + Pass 04 candidate |
| Reset/clean/stash/rebase | NOT performed |
| Project commit/push | NOT performed |

### Dirty inventory (Pass 04 + prior Option B / S8)

**Modified (tracked):**
- `materializeW3bProductTerminal.ts` — R-S8-01 ownership + R-S8-02 IDEMPOTENCY_CONFLICT messaging
- `governedExecuteAuthorizedContract.ts` — S8 Project-first ungated GERM/Verification/FS; Mission gated
- `ingestExecutionReviewVerificationEvidence.ts` / `ingestMissionResultEvidence.ts` — optional cycle
- `w3cPostEvidenceLoop.ts` — Project-first compatible
- `resolvePreCommitWorkspaceContinuation.ts` / `resolveVerifiedFilesystemMaterializationPriorAttempt.ts` — CORR/R-S2
- `gcecCont01ContinuationResolver.d0.test.ts` — non-reg

**Untracked (candidate):**
- `akgM5L3S2.s8.projectFirst.integrated.d0.test.ts` — S8 + Pass 04 oracle
- `akgM5L3S2.optionB.lotsAC.d0.test.ts` — Lots A/B/C
- `ingestGenericFilesystemMaterializationArtifactEvidence.ts`
- `fsAnchorArtifactMaterializationEvidenceSources.ts`

### Prior handoff (pre-Pass 04)
- Branch tip: `dc86b3c59440fa65d8d69262731c84e15c0c089b`
- Canonical blob: `9d8ca8d2d1a558bad464e3cd0013385f53cd98ea`

## 5. Références Git et sources lues
Méthode (template, routing, operating model, guardrails, CKC map), Build Doctrine, Roadmap (read-only), Product Completion, M5 trajectory § L3-S2, Generic Execution architecture D-ER-17/18, doctrine v3 33/34/35, PRR 02/03/06/07/08/09 (read-only), prior FULL handoff tip dc86b3c5.

## 6. Convergence Pre-check
| Item | Status |
|------|--------|
| Build Doctrine | VALIDATED ON MAIN |
| Roadmap | ACTIVE LIVING (no write this cycle) |
| T-C | ADOPTED |
| L3-S1 | INTEGRATED DET ON MAIN |
| L3-S2 Option B | LOCAL CANDIDATE (dirty) |
| S8 Project-first | DECIDED + DET; Critical Review reserves R-S8-01/02 closed this Pass |
| CORR-S2-01/02/03, R-S2-04/05 | ACCEPTED LOCAL DET (preserved) |
| R24 | SYNC PENDING |
| L3 GLOBAL | OPEN |
| G-REAL / OA-exclusive / Runtime v3 | NOT GRANTED / OFF / NON ADOPTED |

## 7. R23 — Architecture-informed (investigation)

### W3-B (ADAPT ciblé) — BEHAVIOR PROVEN after Pass 04
- `loadAttemptAndContract` → ownershipCtx from Project + EC + Attempt + optional cycle
- Evidence IDs remain Attempt-derived for lookup
- **NEW:** `evidenceAdmissibleForW3bExecutionContext` before RB admit
- createReviewBundle fingerprint includes evidenceIds → late Evidence ⇒ IDEMPOTENCY_CONFLICT
- freeze skips if already frozen; CE evaluates frozen snapshots only
- Product projection: Technical SUCCESS ≠ Product PASS; Generic → UNCLAIMED

### OA RB/CE — KEEP
- create fingerprint embeds evidence list
- freeze snapshots: evidenceId/version/status/availability (no bindings in snapshot; ownership checked pre-admit)
- No supersession path that rewrites frozen RB with new Evidence set under same idempotency key
- Classification R-S8-02: **fail-closed under existing OA** — no structural lifecycle invent

### Product FS Evidence / Mission — KEEP
- generic_mat from Product path when OBSERVED
- Mission Evidence only when PRODUCT_MISSION stamped
- Cycle-bound Mission path unchanged for filiation

Coverage labels:
| Area | DOCUMENTED | COVERAGE VERIFIED | BEHAVIOR PROVEN | KNOWN GAP |
|------|------------|-------------------|-----------------|-----------|
| W3-B ownership | Y | Y | Y | — |
| Late Evidence | Y | Y | Y (IDEMPOTENCY_CONFLICT) | No OA supersession for late Evidence under same key (debt documented) |
| OBSERVED Project-only | Y | Y | Y | REAL Cursor not exercised |
| Mission Project-only Mission Evidence | Y | Y (absent honest) | — | EP-S2-05 not promoted |

## 8. R-S8-01 — avant / après

**Avant:** W3-B admitted Verification/generic_mat by deterministic ID + `status===verified` only.

**Après:** `evidenceAdmissibleForW3bExecutionContext`:
1. status verified
2. bindings.projectId == Project
3. bindings.executionContractId == EC
4. bindings.executionAttemptId == Attempt
5. cycle: if EC has cycle → Evidence cycle must match; if Project-only → refuse Evidence with foreign cycle
6. role checks: verification → sourceKind execution_attempt + provenance.source execution_adapter; generic_mat → sourceKind external + GENERIC_FILESYSTEM source string; mission → sourceKind execution_attempt

Incoherent Evidence: not admitted (null via admitIfOwned); absent vs incoherent distinguished in unit reasons; no silent false PASS; Product stays UNCLAIMED / fail path for IDEMPOTENCY.

Mission path: same admitIfOwned for mission_result role (filiation bindings + sourceKind).

## 9. R-S8-02 — reproduction et conclusion

**Scenario proven (O10):**
1. Succeeded Attempt without Verification Evidence
2. W3-B creates tech RB (attempt Evidence only) → freeze → CE → Product ok UNCLAIMED
3. Verification Evidence ingested later (verified)
4. W3-B rematerialize same Attempt → `createReviewBundle` returns `IDEMPOTENCY_CONFLICT`
5. Product path returns ok:false with detailCode IDEMPOTENCY_CONFLICT + late Evidence hint
6. Frozen RB not mutated; prior CE not reinterpreted as evaluation of new Evidence

**Conclusion:** Existing OA fingerprint+idempotency is the admissible fail-closed contract. No silent rewrite. No new RB lifecycle invented. Debt: operator/recovery path for late Evidence after freeze remains a documented exit (not silently “fixed”).

**STOP R-S8-02 OA LIFECYCLE DECISION:** NOT required for Pass 04 closure — behavior is fail-closed and tested. Optional future Morris decision only if supersession/reopen under new key is desired.

## 10. Filiation Evidence exacte (OBSERVED O2)
Product path: Project (activeCycleInstanceId=null) → Generic PREPARE → SHE Select/Start → temp Git worktree (HEAD==EC baseSha) → FS mutate allowed path → TestOnlyRealExecutionLaunchPort report with real worktreeRef → governedExecuteRecordResult → GERM OBSERVED + VerifiedChangeSet + digest from bytes → generic_mat Evidence → W3-B RB contains verification + generic_mat + tech Evidence with matching Project/EC/Attempt and no cycle → CE → Product UNCLAIMED → W3-C/GERM rehydrate. Studio OBSERVED ≠ Cursor CLAIM.

## 11. Fichiers modifiés / créés
See §4 dirty inventory + SHA-256 below.

| Path | Role | sha256 |
|------|------|--------|
| `projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts` | w3b | `37d8945875556d8373bd396d215cdefca8a80645f2cc18a4bf4ec63568bb3a45` |
| `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts` | gcec | `abd35a41971b6ca4e9d22d45e13bc4734f48c914efa4a95804516bf75cf9310e` |
| `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.s8.projectFirst.integrated.d0.test.ts` | s8test | `08246bf0a6cf5c5a0835ce2915c8abf52b45872dfcfbb0bbc70fa18bc949ae25` |
| `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.optionB.lotsAC.d0.test.ts` | lots | `9b1823041bdd72ea5297ad36d37e7caf6cba1faa5d1214dc0060003e8ac0b851` |
| `projects/sfia-studio/app/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence.ts` | generic | `4d1e32546bda1a7428359177c74d89d8251ee358df4ad8229a53f2cb26e8015f` |
| `projects/sfia-studio/app/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources.ts` | fsanchor | `85632997028436e75ee60ddccb74b214255d59a71468c3984d33b5cf3d945f79` |
| `projects/sfia-studio/app/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence.ts` | verif | `a3a40624537fac8b43483447aa5d82105e1f86adb1ce4a868156ff1d6f4e9716` |
| `projects/sfia-studio/app/features/project-assistant/f3/ingestMissionResultEvidence.ts` | mission | `5f7bfdf71c5d95a43f193c3578060e2093ad89819624b6530013f6aaa1dca71c` |
| `projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts` | w3c | `adbeade98c9264ce4e396554e2b54d7ffcd633569fa33b6a7dcd0acfc5ed0792` |
| `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts` | precommit | `bd04172901c3b330b729ffb0a9f9580253715863f5e69852362161c8b9869872` |
| `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts` | verified | `3c9e80b1b0786fec678f73b4aa2742bdfd071981409d355e880b39bd6e1c4005` |
| `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts` | gcec_test | `3a9d3b04d820e889f435ec44125b2c88706bd777f0a86fc94318ae67e5a0f18f` |

## 12–13. Diffs tracked + full contents untracked

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
index cfd2ce0c..08257084 100644
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
@@ -31,6 +36,89 @@ import {
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
+function admitIfOwned(
+  evidence: Evidence | null | undefined,
+  ctx: {
+    readonly projectId: string;
+    readonly executionContractId: string;
+    readonly executionAttemptId: string;
+    readonly cycleInstanceId: string | null;
+    readonly role: W3bEvidenceAdmissionRole;
+  },
+): Evidence | null {
+  if (!evidence) return null;
+  const check = evidenceAdmissibleForW3bExecutionContext({
+    evidence,
+    ...ctx,
+  });
+  return check.ok ? evidence : null;
+}
+
 function w3cUnavailableFailure(
   cause: unknown,
 ): Extract<W3cPostEvidenceLoopResult, { ok: false }> {
@@ -275,22 +363,28 @@ export async function materializeW3bProductTerminal(input: {
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
+    const missionRaw = await services.evidenceReader.findById(missionEvidenceId);
+    const missionEvidence = admitIfOwned(missionRaw, {
+      ...ownershipCtx,
+      role: "mission_result",
+    });
+    if (missionEvidence) {
       evidenceIdsForBundle = [missionEvidence.evidenceId];
       primaryEvidence = missionEvidence;
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
@@ -311,9 +405,13 @@ export async function materializeW3bProductTerminal(input: {
       if (requiresVerification) {
         const verificationEvidenceId =
           executionReviewVerificationEvidenceIdForAttempt(attempt.attemptId);
-        const verificationEvidence =
+        const verificationRaw =
           await services.evidenceReader.findById(verificationEvidenceId);
-        if (verificationEvidence && verificationEvidence.status === "verified") {
+        const verificationEvidence = admitIfOwned(verificationRaw, {
+          ...ownershipCtx,
+          role: "verification",
+        });
+        if (verificationEvidence) {
           evidenceIdsForBundle = [
             missionEvidence.evidenceId,
             verificationEvidence.evidenceId,
@@ -321,8 +419,35 @@ export async function materializeW3bProductTerminal(input: {
         }
       }
     }
-    // Missing / unverified Mission Evidence → tech-only RB; mission semantic
-    // yields NOT_PROVEN / Product UNCLAIMED (honest).
+    // Missing / unverified / ownership-failed Mission Evidence → tech-only RB;
+    // mission semantic yields NOT_PROVEN / Product UNCLAIMED (honest).
+  } else {
+    // S8 Project-first Generic (no PRODUCT_MISSION stamp): include owned verified
+    // Studio Verification + generic_materialization Evidence when present.
+    // Does NOT invent a PASS semantic — CE stays not_proven / Product UNCLAIMED
+    // unless an applicable Contract Result Semantic already exists.
+    const verificationEvidenceId =
+      executionReviewVerificationEvidenceIdForAttempt(attempt.attemptId);
+    const verificationRaw =
+      await services.evidenceReader.findById(verificationEvidenceId);
+    const verificationEvidence = admitIfOwned(verificationRaw, {
+      ...ownershipCtx,
+      role: "verification",
+    });
+    if (verificationEvidence) {
+      evidenceIdsForBundle.push(verificationEvidence.evidenceId);
+    }
+    const genericMatId = genericMaterializationEvidenceIdForAttempt(
+      attempt.attemptId,
+    );
+    const genericMatRaw = await services.evidenceReader.findById(genericMatId);
+    const genericMat = admitIfOwned(genericMatRaw, {
+      ...ownershipCtx,
+      role: "generic_materialization",
+    });
+    if (genericMat) {
+      evidenceIdsForBundle.push(genericMat.evidenceId);
+    }
   }

   const bundle = await services.createReviewBundle.execute({
@@ -337,10 +462,23 @@ export async function materializeW3bProductTerminal(input: {
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

### Untracked file: ingestGenericFilesystemMaterializationArtifactEvidence.ts (FULL)
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

### Untracked file: fsAnchorArtifactMaterializationEvidenceSources.ts (FULL)
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

### Untracked file: akgM5L3S2.optionB.lotsAC.d0.test.ts (FULL)
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

### Untracked file: akgM5L3S2.s8.projectFirst.integrated.d0.test.ts (FULL — S8 + Pass 04)
```typescript
/**
 * AKG-M5 L3-S2 Option B — S8 PROJECT-FIRST integrated DET oracle
 * (+ Pass 04: R-S8-01 ownership, R-S8-02 late Evidence, OBSERVED FS).
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

  it("O8 — Product path refuses foreign-project Verification Evidence in RB", async () => {
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
    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId,
    });
    expect(settled.ok).toBe(true);

    // Plant Verification Evidence with WRONG project binding under the Attempt id.
    const planted = await ingestExecutionReviewVerificationEvidence({
      evidenceReviewServices: oa.evidenceReviewServices!,
      projectId: "prj:foreign-owner",
      cycleInstanceId: null,
      executionContractId: she.executionContractId,
      executionAttemptId: attemptId,
      refsRoot,
      payload: {
        schemaVersion: "oa.execution-review-verification.1",
        attemptId,
        executionContractId: she.executionContractId,
        projectId: "prj:foreign-owner",
        repositoryRef: "repo:x",
        baseSha: W2_TEST_PINNED_BASE_HEAD_SHA,
        reviewMaterialId: "erm:x",
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
    // May fail attempt-binding overwrite — if ingest forces attempt EC, project can still be foreign.
    if (planted.ok) {
      const verificationId =
        executionReviewVerificationEvidenceIdForAttempt(attemptId);
      const ev = await oa.evidenceReviewServices!.evidenceReader.findById(
        verificationId,
      );
      expect(ev?.bindings.projectId).toBe("prj:foreign-owner");
      const materialized = await materializeW3bProductTerminal({
        oa,
        projectId,
        attemptId,
      });
      expect(materialized.ok).toBe(true);
      if (!materialized.ok) return;
      const rb = await oa.evidenceReviewServices!.reviewBundleReader.findById(
        materialized.product.reviewBundleId!,
      );
      const snapIds = (rb?.frozenEvidenceSnapshots ?? []).map((s) => s.evidenceId);
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

## 14. Oracle OBSERVED intégré
Test: `O2 — Project-only OBSERVED worktree → VerifiedChangeSet + generic_mat + RB ownership`
PASS — uses createGitWorktree + pinned HEAD==baseSha + real FS bytes + TestOnlyRealExecutionLaunchPort only at Cursor boundary.

## 15. Worktree Git de test / preuve HEAD
Isolated temp git repo under test tmp; HEAD pinned to EC baseSha before observation; mutation on authorized NOTES path; not the developer worktree.

## 16. Digests
Studio computes sha256 from observed bytes; Cursor-supplied digest never treated as Studio observation. Exact path/digest/repo/baseSha/Attempt/EC/Project asserted in O2.

## 17. Scénarios négatifs
| ID | Result |
|----|--------|
| E1–E2 coherent admit | PASS |
| E3 wrong Project | refuse |
| E4 wrong EC | refuse |
| E5 wrong Attempt | refuse |
| E6 wrong Cycle | refuse |
| E7 Project-only + foreign cycle | refuse |
| E8 not verified | refuse |
| E9 sourceKind mismatch | refuse |
| O1 UNAVAILABLE (prior nominal) | PASS |
| O2 OBSERVED | PASS |
| O8 foreign-project Verification excluded from RB | PASS |
| O10 late Evidence IDEMPOTENCY_CONFLICT | PASS |
| O11 no fictive cycle on rehydrate | covered in O2/nominal |
| O12 Mission cycle-bound non-reg | productMissionEvidenceChain PASS |

## 18. Idempotence / late Evidence
Identical rematerialize after successful create+freeze reuses frozen RB (skip freeze). Divergent Evidence set → IDEMPOTENCY_CONFLICT fail-closed (O10).

## 19. RB frozen snapshots / CE
Snapshots carry evidenceId/version/status/availability. Ownership enforced pre-admit. CE evaluates frozen set only; late Evidence not silently attached.

## 20. Product Result honnête
Generic Project-only → Technical SUCCESS possible; Product outcome UNCLAIMED / NOT_PROVEN. No new Result Semantic. No artificial PASS.

## 21. Non-régressions et commandes

```text
cd projects/sfia-studio/app
npm run typecheck          # PASS (tsc --noEmit)
npm run lint               # PASS with pre-existing unused-var warnings in pilotLifecycleTransitions.ts / startExecution.ts (unchanged)
npx vitest run __tests__/project-assistant/akgM5L3S2.s8.projectFirst.integrated.d0.test.ts
  → 15 passed
npx vitest run (S8 + lotsAC + L3-S1 + productMissionEvidenceChain)
  → 4 files / 56 passed
Prior batch (lotsAC, L3-S1, Mission, gcecCont01, w3c loop, w3c correction): 105 passed
```
No new regressions. No unrun suite announced as PASS.

## 22. EP-S2-01…12 (original senses — Qualification b712c600 §18)

| EP | Definition (original) | Components | Primary tests | Observed | Proof level | Verdict | Reserve / exit |
|----|----------------------|------------|---------------|----------|-------------|---------|----------------|
| EP-S2-01 | Mission/EC/Project/Attempt identity | OA EC/Attempt + Product PREPARE | S8 nominal, O2 | Bindings exact; cycle null Project-only | DET BEHAVIOR PROVEN | PASS | — |
| EP-S2-02 | SHE reused | Select/Start Product | S8, O2 | Same SHE path | DET | PASS | — |
| EP-S2-03 | FS effects independent | GERM + git ports | O2 | OBSERVED VerifiedChangeSet | DET | PASS | REAL not exercised |
| EP-S2-04 | Generic Evidence path→digest | generic_mat ingest | O2 | digest from bytes | DET | PASS | — |
| EP-S2-05 | Mission Evidence ingested+linked | Mission stamp path | S8 nominal (absent); Mission e2e | Project-only: no Mission Evidence invented | DET at scope | NOT PROVEN for Project-only Mission semantic | Keep Mission-gated; do not promote on FS Evidence |
| EP-S2-06 | RB/CE consume admissible Evidence | W3-B + ownership | O2, O8, E1–E9 | Ownership + CE | DET | PASS | — |
| EP-S2-07 | Product Result honest | W3-B projection | O2, nominal | UNCLAIMED | DET | PASS | — |
| EP-S2-08 | Post-Evidence / rehydration minimale | W3-C / GERM surface | O2 surface | Durable rehydrate | DET | PARTIAL | Nora/Pilote UX E2E not claimed |
| EP-S2-09 | Fail-closed incoherences | ownership + O10 | E3–E9, O8, O10 | refuse / IDEMPOTENCY_CONFLICT | DET | PASS | Late Evidence recovery UX debt |
| EP-S2-10 | No Product docs_write; no parallel engine | code review | — | Kept | DOC+tests | PASS | — |
| EP-S2-11 | L3-S1 / SHE non-reg | L3-S1 suite | L3-S1 integrated | PASS | DET | PASS | — |
| EP-S2-12 | Fake/Real qualification | TestOnly port | O2 | Fake Cursor / Real FS observation | DET | PASS | REAL BOUNDARY NOT PROVEN |

## 23. Fake/Real Matrix
| Boundary | Mode | Notes |
|----------|------|-------|
| Cursor adapter | FAKE (TestOnlyRealExecutionLaunchPort) | Explicit |
| FS observation | REAL local test worktree | Bytes + digest Studio-owned |
| Git | Local temp only | Isolated |
| Nora | Not LIVE | — |
| Parity | Same Product services path | — |
| Level | DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE | |
| Forbidden claim | REAL BOUNDARY PROVEN | Not claimed |
| G-REAL | NOT GRANTED | |

## 24. R24 Documentary Impact (SYNC PENDING — no protected write)

Prepare deltas (future gate) for PRR:
- 02 catalog: W3-B Evidence admission ownership rules
- 03 flows: Project-first OBSERVED + late Evidence fail-closed
- 06 recovery: IDEMPOTENCY_CONFLICT after freeze when Evidence set diverges
- 07 invariants: bindings Project/EC/Attempt/Cycle; no foreign Evidence in RB
- 08 proof map: S8 Pass 04 tests
- 09 gaps: late Evidence supersession not offered; EP-S2-05/08 reserves; REAL not granted
Roadmap truth-sync L3-S2: future under distinct GO.
**No PRR/Roadmap modified this cycle.**

## 25. Dettes / owner / exit
| Debt | Owner | Exit |
|------|-------|------|
| Late Evidence after frozen RB (no supersession under same key) | Morris / OA product | Decide reopen/supersede policy OR operational rematerialize under new Attempt/key |
| EP-S2-05 Project-only Mission Evidence | Product | Only if Mission semantic stamped Project-first |
| EP-S2-08 full Nora/Pilote UX | L4 path | Separate GO |
| R24 sync | Docs gate | After Critical Review accept |
| Git Integration | Distinct GO | After local closure qualification |
| REAL / G-REAL | Morris | Not this cycle |

## 26. Stops et décisions
- No STOP — GIT TRUTH INCONSISTENT
- No STOP — R-S8-02 OA LIFECYCLE DECISION REQUIRED (fail-closed OA reused)
- No protected file writes
- No project commit/push

## 27. Git Review Index cumulatif Option B
Prior Lots A/B/C + CORR-S2-01/02/03 + R-S2-04/05 + S8 Project-first Delivery + **Pass 04 R-S8-01/02 + OBSERVED oracle** all remain on dirty local candidate at HEAD=main tip `6e957ecb` without project commit.

SHA-256 index (Pass 04 tip files): see §11.

## 28. Verdict unique

**S8 PROJECT-FIRST — CONSOLIDATED EVIDENCE CLOSURE LOCAL DET CANDIDATE — READY FOR CHATGPT CRITICAL REVIEW — R24 SYNC PENDING — GIT INTEGRATION NOT AUTHORIZED**

Non-claims preserved:
- L3-S2 GLOBAL COMPLETE — NO
- Product PASS mutating Generic PROVEN — NO
- Mission Evidence Project-only PROVEN — NO
- Nora/Pilote UX E2E COMPLETE — NO
- FS→Git→Review REAL — NO
- L3 GLOBAL CLOSED — NO
- runtime v3 ADOPTED — NO
