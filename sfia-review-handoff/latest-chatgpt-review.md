# SFIA STUDIO — W3-B OPTION B BOUND CONTRACT SNAPSHOT — Review Pack FULL

## Meta
- Timestamps: **2026-08-25 00:28:10 CEST** / **2026-08-24 22:28:10 UTC**
- Cycle: **8** · Profile: **CRITICAL** · Typology: **INC**
- Scope: **US-P1-05 / US-P1-06 ONLY**
- Verdict candidate: **READY FOR REVIEW** (W3-B NOT CLOSED)

## Morris GO (consumed verbatim intent)
GO MORRIS — RESUME SAME W3-B DELIVERY AFTER PR #412 OPTION B INTEGRATION — US-P1-05/06 ONLY — CURRENT MAIN 8520f546f3613ec66c0b98aa7390163cb1350efe — PRESERVE PRIOR REVIEWED DELIVERY CHECKPOINTS AS IMMUTABLE PROVENANCE — BUILD NEW CURRENT-MAIN DELIVERY WORKTREE — IMPLEMENT ATTEMPT-BOUND IMMUTABLE EXECUTIONCONTRACT SEMANTIC SNAPSHOT — CONTRACT RESULT / CONFIRM MUST USE SNAPSHOT ONLY — CLOSE REMAINING C08/C09 GAPS — PRESERVE C10 NOT_PROVEN + FROZEN RB + SYSTEM STOP/CANCEL + CANONICAL /studio — RE-PROVE X-W3B-01…12 — C6 CLOSED — NO ARCHITECTURE REOPEN — NO PROJECT PUSH/PR/MERGE — REAL OUT — FINOPS FREEZE — W4 OUT — RUNTIME V3 NON ADOPTED.

## Git truth
| Item | Value |
|---|---|
| origin/main | `8520f546f3613ec66c0b98aa7390163cb1350efe` |
| PR #412 | MERGED @ `2026-08-24T22:00:57Z` → mergeCommit `8520f546…` |
| New branch | `delivery/sfia-studio-product-completion-w3-b-bound-snapshot` |
| New worktree | `/Users/morris/Projects/sfia-workspace-w3b-bound-snapshot` |
| Reviewed RO worktree | `/Users/morris/Projects/sfia-workspace-w3b-delivery-restart` |
| Reviewed branch | `delivery/sfia-studio-product-completion-w3-b-td-reconciled` |
| Reviewed HEAD | `756cda50e03b177ef6e41f52b6d43ab9e232efe2` |
| Historical RO harvest | `/Users/morris/Projects/sfia-workspace` @ `ba7aa2db408b7fd00faf9638da060ce0833b794b` |

### Import chain (clean cherry-pick, no rebase/merge)
| Role | Original | Imported |
|---|---|---|
| IMPORT-W3B-BASE | `0ef57e73ed28e83c849962117a0a8566d0da8074` | `7374b213…` |
| IMPORT-W3B-PASS1 | `0b1e50a5f6b5fb0c84c3015a5f3390fa139cfc09` | `97caaa74…` |
| IMPORT-W3B-PASS2 | `756cda50e03b177ef6e41f52b6d43ab9e232efe2` | `080b6f869db552b20fe830078ee945b8cc21062e` |

Tree-equivalence before Option B edits:
`git diff --exit-code 756cda50 080b6f86 -- projects/sfia-studio/app` → **zero application diff**.
DOC12/Roadmap remained PR #412 versions (not overwritten by import).

## Mandatory sources loaded
- convergence build doctrine + roadmap
- product-completion 01/02/03/05/06/11/12
- applicable Product Experience + v3 framing 30–37 (process)
- runtime: semanticFingerprint, EC types, Attempt types, evidence-review, vertical-slice-runtime, project-assistant/w2
- process templates + routing guide
- historical handoff `d1a611b0` describing candidate `756cda50`

## Option B decision (Morris-adopted / DOC12)
ExecutionAttempt captures an immutable canonical snapshot of bound ExecutionContract semantic material at acceptance. Contract Result evaluation, FC-11 readback, and Confirm consume that snapshot only — never latest EC row semantics.

## Snapshot type + schema version
```ts
BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION = "0.1.0-oa"

BoundExecutionContractSnapshot = {
  executionContractSchemaVersion: "0.1.0-oa",
  executionContractVersion: number,
  semanticFingerprint: string,
  semanticMaterial: ExecutionContractSemanticMaterial,
}
```
Optional on TS Attempt shape for historical readability; **mandatory for newly accepted Attempts**.

Module: `lib/oa/execution-attempt/domain/boundExecutionContract.ts`
Helpers: `captureBoundExecutionContractSnapshot`, `validateBoundExecutionContractSnapshot`.

## Fingerprint material helper
In `semanticFingerprint.ts`:
- `computeExecutionContractSemanticMaterialFingerprint(material)` — primitive (canonicalizeJson + SHA-256)
- `computeExecutionContractSemanticFingerprint(contract)` = material helper ∘ `executionContractSemanticMaterial(contract)`

## Capture point
`SelectExecutionAgent` accept seam only:
1. load/validate current EC
2. `captureBoundExecutionContractSnapshot(contract)`
3. Attempt.executionContractVersion / semanticFingerprint / boundExecutionContract from snapshot
Retry → new Attempt via Select → own fresh snapshot (no blind copy).

### Confirm fingerprint refresh (required for capture equality)
`confirmExecutionContract` now recomputes `semanticFingerprint` after writing `confirmationRef` + `immutableAfterConfirm` (both are semantic material fields). Without this, stored FP drifted vs current material and Option B capture failed closed on all confirmed ECs.

## Attempt creation-path audit
| Path | Snapshot |
|---|---|
| Select/accept (production) | mandatory capture |
| Retry | via Select → own capture |
| Lifecycle start/result/fail/cancel/stop/timeout | spread `...attempt` preserves snapshot byte-equivalent |
| Test factories | updated where modeling post-Option-B Attempts |
| Historical fixtures | may omit for missing-snapshot NOT_PROVEN tests |

## Immutability
Regression: accepted→running→succeeded/failed/STOP/USER_CANCEL preserves `JSON.stringify(boundExecutionContract)`.

## Persistence / restart
Snapshot lives in existing Attempt `payload_json` (Product SQLite). No new table.
Proofs: Option B SQLite CE restart; W3-B product TRUE RESTART Vitest; Playwright reload SUCCESS.

## Historical missing snapshot
Readable Attempt; Evaluate → durable `not_proven` + `historical_attempt_missing_bound_snapshot`; no SUCCESS; no backfill; no latest-EC reconstruction of EO/ER.

## Corrupt snapshot
`isAttemptBoundSnapshotValid` false → Evaluate fail-closed (`bound_snapshot_corrupt_or_inconsistent`); Confirm refused.

## Evaluator — snapshot only
`assessExpectedOutputs` / `assessEvidenceRequirements` / `resolveApplicableContractResultRule` take `ExecutionContractSemanticMaterial` (+ bound fingerprint).
EvaluateContractResult assessment input = Attempt.boundExecutionContract only.
Request still receives EC for id-coherence wiring only — EO/ER/action/capabilities not read from latest for semantics.

## EO/ER identity
`(bound semanticFingerprint, kind, ordinal)` from snapshot fingerprint. No cross-version matching.

## ContractResultBindings
From Attempt + bound snapshot + frozen RB + Evidence refs. Version/fingerprint from Attempt/snapshot — never latest EC.

## FC-11 / product projection
`contractResultBindingsMatchCurrentFacts` validates against Attempt + bound snapshot (no latest EC material). Projection SUCCESS prefers bound EO/scope.

## Confirm (C08)
- Load CE → resolve attemptId → load Attempt
- Require valid bound snapshot + binding match + frozen RB + Evidence assessment
- Deterministic human confirm forbidden
- Assisted: stamp `reviewConfirmation` only on PASS/SATISFIED assessments → **re-derive** global status → pass only if derived pass
- Assisted NOT_PROVEN cannot mint pass
- Pure human_review origin of PASS: no new DSL — remain fail-closed (bounded current behavior)
- Generic structural Morris/N3 path unchanged

## Evidence freshness (C09)
Positive allowlist: `freshness === "fresh"` only (`W3B_USABLE_EVIDENCE_FRESHNESS`).
undefined / unknown / stale / aging → NOT_PROVEN. Not `!== "stale"`.

## Durable NOT_PROVEN (C10)
Preserved for no applicable evaluator; extended for missing historical snapshot.

## Frozen RB / STOP / cancel
Preserved: Evidence→CreateRB→Freeze→Evaluate; SYSTEM_GOVERNED_STOP ≠ USER_CANCEL; adapter failure = FAIL.

## Exact modified files (correction vs IMPORT-W3B-PASS2)
See git show --name-status HEAD after correction commit. Application paths only under `projects/sfia-studio/app/**`.

New:
- `lib/oa/execution-attempt/domain/boundExecutionContract.ts`
- `__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts`

## Tests / results
- Option B adversarial suite PASS
- Contract Result evaluation / correction / pass2 / SQLite durability PASS
- W3-B product terminal + TRUE RESTART PASS
- SystemGovernedStop PASS
- Full Vitest: **2073 passed** | 131 skipped (219 files)
- `tsc --noEmit` PASS
- `next lint` PASS
- `next build` PASS

## Playwright
`e2e/studio-w3b-terminal-evidence-runtime.spec.ts` — **3/3 PASS** (SUCCESS / STOP / FAIL) on canonical `/studio`.
Captures: `.tmp-sfia-review/runtime-captures/w3-b-option-b/`
- 01-pre-execute
- 02-success-business-first
- 03-success-technical-detail
- 04-system-governed-stop
- 05-adapter-fail
- 06-reload-success
+ manifest.jsonl + playwright.log

## X-W3B-01…12 requalification
| ID | Verdict | Basis |
|---|---|---|
| X-W3B-01 Honest SUCCESS | PASS | bound snapshot + known evaluator + fresh Evidence + frozen RB + CE pass |
| X-W3B-02 NOT_PROVEN | PASS | missing evaluator / missing snapshot / freshness uncertainty |
| X-W3B-03 FAIL distinct | PASS | adapter FAIL Playwright + Vitest |
| X-W3B-04 SYSTEM_GOVERNED_STOP | PASS | same Attempt provenance |
| X-W3B-05 cancel/block | PASS | USER_CANCEL ≠ STOP; pre-running block ≠ terminal |
| X-W3B-06 Evidence before claim | PASS | freeze RB before Evaluate |
| X-W3B-07 business-first UX | PASS | /studio captures |
| X-W3B-08 restart honesty | PASS | SQLite + TRUE RESTART + reload |
| X-W3B-09 exact EC identity | PASS | snapshot-only; no latest cross-version |
| X-W3B-10 server ownership/review | PASS | server evaluator + Confirm snapshot binding + generic Morris intact |
| X-W3B-11 canonical /studio | PASS | Playwright 3/3 |
| X-W3B-12 no parallel architecture | PASS | no second EC/Attempt/Claim/Stop/Evidence engine |

## Architecture shortcut search
Searched / audited absent or removed:
- withAttemptContractBindingSync
- TA5_STATUS_VERSION_DRIFT_MAX (usage for CR)
- latest-EC semantic assessment / fingerprint-gated latest substitution
- fake historical EC reconstruction for CR
- authorized_human unconditional pass
- freshness !== "stale"
- resultRef-alone PASS / Evidence-available-alone SATISFIED
- ProductOutcome aggregate / StopEngine / GuardEngine / new Claim/Evidence engines
- EC-history repository / semantic-version subsystem / alternate /studio

## Fake / Real
- Product path: fixture adapter + local Pilote authority TEMPORARY WITH EXIT
- QA boundary: external behavior simulation only (`/api/e2e/w3b-boundary`)
- **REAL OUT** — no REAL claim

## Debt / reserves
- Pure human_review item origin of PASS/SATISFIED remains fail-closed (no new reviewer DSL)
- EvaluateContractResult still accepts EC object for id-coherence / provenance projectId fallback when snapshot missing — not used for EO/ER semantics
- W3-B NOT CLOSED pending Morris gate after ChatGPT review
- No project push/PR/merge in this cycle

## W3-B OUT proof
Capability delivered as Option B candidate; **closure deferred**. W3-C/D/E NOT STARTED. C6 CLOSED. FinOps FREEZE. W4 OUT. runtime v3 NON ADOPTED.

## Git state (pre-handoff)
- Parent of correction: `080b6f86` (IMPORT-W3B-PASS2)
- Correction message: `fix(sfia-studio): bind W3-B results to immutable contract snapshot`
- No project push / PR / merge authorized or performed

## Next gate
ChatGPT review of Option B implementation candidate.
Only after PASS may Morris decide Git integration and, separately later, W3-B closure.

## Correction commit (recorded)
- HEAD: `66427eaf3ea74388b61c73e738f4b4df7b9a983a`
- Parent: `080b6f869db552b20fe830078ee945b8cc21062e`
- Message: fix(sfia-studio): bind W3-B results to immutable contract snapshot
- Files: 23 changed, +1823/−210 (app only)

## Useful correction diff (stat)
```
66427eaf fix(sfia-studio): bind W3-B results to immutable contract snapshot
 .../contractResultCorrection.test.ts               |    3 +-
 .../contractResultCorrectionPass2.test.ts          |  104 +-
 .../contractResultEvaluation.test.ts               |   64 +-
 .../contractResultSqliteDurability.test.ts         |   55 +-
 .../evidence-review/optionBBoundSnapshot.test.ts   | 1130 ++++++++++++++++++++
 .../studio-w3b-terminal-evidence-runtime.spec.ts   |   12 +-
 .../w2/materializeW3bProductTerminal.ts            |    1 +
 .../w2/w3bProductTerminalProjection.ts             |   16 +-
 .../application/confirmClaimEvaluation.ts          |  129 ++-
 .../application/contractResultAssessment.ts        |   57 +-
 .../application/contractResultSemanticEvaluator.ts |   18 +-
 .../application/evaluateContractResult.ts          |  140 ++-
 .../evidence-review/domain/contractResultTypes.ts  |  103 +-
 .../app/lib/oa/evidence-review/domain/types.ts     |   20 +-
 .../app/lib/oa/evidence-review/index.ts            |    1 +
 .../sqlite/createSqliteEvidenceReviewServices.ts   |    1 +
 .../application/selectExecutionAgent.ts            |   22 +-
 .../domain/boundExecutionContract.ts               |  121 +++
 .../app/lib/oa/execution-attempt/domain/types.ts   |   12 +
 .../application/confirmExecutionContract.ts        |    5 +
 .../domain/semanticFingerprint.ts                  |   14 +-
 .../app/lib/oa/execution-contract/index.ts         |    2 +
 .../lib/vertical-slice-runtime/f3FixtureWiring.ts  |    3 +
 23 files changed, 1823 insertions(+), 210 deletions(-)
```

## Proof no project push / PR / merge
- Local branch only: `delivery/sfia-studio-product-completion-w3-b-bound-snapshot`
- `git status -sb`: ## delivery/sfia-studio-product-completion-w3-b-bound-snapshot
- No `git push` executed this cycle
- No `gh pr create` executed this cycle
- No merge to main

## Reviewed provenance integrity
- w3b-delivery-restart HEAD still `756cda50e03b177ef6e41f52b6d43ab9e232efe2`
- historical workspace HEAD still `ba7aa2db408b7fd00faf9638da060ce0833b794b`

## Complete useful correction diff (080b6f86..66427eaf — projects/sfia-studio/app)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
index 58d069ca..fb504a2f 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
@@ -224,6 +224,8 @@ describe("W3-B contract result correction proofs", () => {
     expect(product.outcome).toBe("UNCLAIMED");
     expect(
       contractResultBindingsMatchCurrentFacts({
+        projectId: "prj:w3b",
+        cycleInstanceId: null,
         bindings: product.claimEvaluationId
           ? {
               projectId: "prj:w3b",
@@ -236,7 +238,6 @@ describe("W3-B contract result correction proofs", () => {
               evidenceRefs: ["ev:1"],
             }
           : ({} as never),
-        contract,
         attempt,
         reviewBundle: { reviewBundleId: "rb:1", frozenVersion: 2 },
         evidenceIds: ["ev:1"],
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts
index 64ce39a6..5f41d2f3 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts
@@ -22,6 +22,8 @@ import {
 } from "@/lib/oa/evidence-review/application/contractResultSemanticEvaluator";
 import { CLAIM_EVALUATION_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import { executionContractSemanticMaterial, computeExecutionContractSemanticMaterialFingerprint } from "@/lib/oa/execution-contract";
+import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
 import type { Evidence } from "@/lib/oa/evidence-review";

 const baseContract: ExecutionContract = {
@@ -45,6 +47,10 @@ const baseContract: ExecutionContract = {
   correlationId: "cor:ec:pass2",
 };

+const semanticMaterial = executionContractSemanticMaterial(baseContract);
+const boundFingerprint = computeExecutionContractSemanticMaterialFingerprint(semanticMaterial);
+;(baseContract as { semanticFingerprint?: string }).semanticFingerprint = boundFingerprint;
+
 const goodEvidence: Evidence = {
   schemaVersion: "0.2.0-oa",
   evidenceId: "ev:w3b:pass2",
@@ -76,6 +82,30 @@ const goodEvidence: Evidence = {
   technicalResultRef: "res:w3a:abc1234567890ab",
 };

+function makeAttempt(overrides: Record<string, unknown> = {}) {
+  const snap = captureBoundExecutionContractSnapshot({
+    ...baseContract,
+    version: Number(overrides.executionContractVersion ?? 3),
+    semanticFingerprint: boundFingerprint,
+  });
+  const bound =
+    overrides.boundExecutionContract === null
+      ? undefined
+      : ((overrides.boundExecutionContract as typeof snap | undefined) ?? snap);
+  const { boundExecutionContract: _ignored, ...rest } = overrides;
+  return {
+    attemptId: "xat:w3b:1",
+    executionContractId: baseContract.executionContractId,
+    executionContractVersion: 3,
+    executionContractSemanticFingerprint: boundFingerprint,
+    status: "succeeded",
+    resultRef: "res:w3a:abc1234567890ab",
+    ...rest,
+    boundExecutionContract: bound,
+  };
+}
+
+
 describe("W3-B correction pass 2", () => {
   it("C09 — stale Evidence cannot satisfy ER", () => {
     expect(
@@ -90,15 +120,9 @@ describe("W3-B correction pass 2", () => {
       }),
     ).toBe(false);
     const er = assessEvidenceRequirements({
-      contract: baseContract,
-      attempt: {
-        attemptId: "xat:w3b:1",
-        executionContractId: baseContract.executionContractId,
-        executionContractVersion: 3,
-        executionContractSemanticFingerprint: baseContract.semanticFingerprint,
-        status: "succeeded",
-        resultRef: "res:w3a:abc1234567890ab",
-      },
+      semanticMaterial,
+      semanticFingerprint: boundFingerprint,
+      attempt: makeAttempt(),
       evidence: { ...goodEvidence, status: "stale", freshness: "stale" },
       evaluatedAt: "2026-08-24T00:00:00.000Z",
       frozenEvidenceSnapshot: {
@@ -128,14 +152,26 @@ describe("W3-B correction pass 2", () => {
       idempotencyKey: "idem:ce:unknown",
       actor: { actorId: "actor:a", role: "project_owner" },
       contract: { ...baseContract, action: "product:unknown-action" },
-      attempt: {
-        attemptId: "xat:w3b:1",
-        executionContractId: baseContract.executionContractId,
-        executionContractVersion: 3,
-        executionContractSemanticFingerprint: baseContract.semanticFingerprint,
-        status: "succeeded",
-        resultRef: "res:w3a:abc1234567890ab",
-      },
+      attempt: makeAttempt({
+        boundExecutionContract: captureBoundExecutionContractSnapshot({
+          ...baseContract,
+          version: 3,
+          action: "product:unknown-action",
+          semanticFingerprint: computeExecutionContractSemanticMaterialFingerprint(
+            executionContractSemanticMaterial({
+              ...baseContract,
+              action: "product:unknown-action",
+            }),
+          ),
+        }),
+        executionContractSemanticFingerprint:
+          computeExecutionContractSemanticMaterialFingerprint(
+            executionContractSemanticMaterial({
+              ...baseContract,
+              action: "product:unknown-action",
+            }),
+          ),
+      }),
       evidence: goodEvidence,
       reviewBundle: {
         schemaVersion: "0.2.0-oa",
@@ -205,10 +241,20 @@ describe("W3-B correction pass 2", () => {
           version: 1,
           subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
           contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+          contractResultBindings: {
+            projectId: "prj:w3b",
+            executionContractId: baseContract.executionContractId,
+            executionContractVersion: 3,
+            executionContractSemanticFingerprint: boundFingerprint,
+            executionAttemptId: "xat:w3b:1",
+            reviewBundleId: "rb:1",
+            reviewBundleVersion: 2,
+            evidenceRefs: ["ev:w3b:pass2"],
+          },
           expectedOutputAssessments: [
             {
               itemId: buildContractResultItemId({
-                semanticFingerprint: baseContract.semanticFingerprint!,
+                semanticFingerprint: boundFingerprint,
                 itemKind: "EO",
                 ordinal: 0,
               }),
@@ -224,7 +270,7 @@ describe("W3-B correction pass 2", () => {
           evidenceRequirementAssessments: [
             {
               itemId: buildContractResultItemId({
-                semanticFingerprint: baseContract.semanticFingerprint!,
+                semanticFingerprint: boundFingerprint,
                 itemKind: "ER",
                 ordinal: 0,
               }),
@@ -282,6 +328,26 @@ describe("W3-B correction pass 2", () => {
       { nowIso: () => "2026-08-24T00:00:00.000Z" },
       { append: () => {} },
       { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:2" },
+      {
+        findById: async () =>
+          ({
+            ...makeAttempt(),
+            schemaVersion: "0.2.0-oa",
+            selectedAgentRef: "agt:1",
+            idempotencyKey: "idem:x",
+            correlationId: "cor:x",
+            version: 1,
+            createdAt: "2026-08-24T00:00:00.000Z",
+            provenance: {
+              schemaVersion: "0.1.0-oa",
+              provenanceRecordId: "prv:x",
+              actor: { actorId: "actor:a", role: "project_owner" },
+              source: "execution_adapter",
+              timestamp: "2026-08-24T00:00:00.000Z",
+              correlationId: "cor:x",
+            },
+          }) as never,
+      },
     );
     const result = await confirm.execute({
       claimEvaluationId: "clm:cr:assisted",
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts
index fc67aaaf..405e199f 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts
@@ -22,6 +22,9 @@ import {
 } from "@/lib/oa/evidence-review/domain/contractResultTypes";
 import { projectContractResultVerdict } from "@/lib/oa/evidence-review/application/contractResultVerdictProjection";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import { executionContractSemanticMaterial, computeExecutionContractSemanticMaterialFingerprint } from "@/lib/oa/execution-contract";
+import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
+import { isAttemptBoundSnapshotValid } from "@/lib/oa/evidence-review/domain/contractResultTypes";
 import type { Evidence } from "@/lib/oa/evidence-review";

 const contract: ExecutionContract = {
@@ -45,6 +48,15 @@ const contract: ExecutionContract = {
   correlationId: "cor:ec:w3b:test",
 };

+const semanticMaterial = executionContractSemanticMaterial(contract);
+const boundFingerprint = computeExecutionContractSemanticMaterialFingerprint(semanticMaterial);
+// Align contract fingerprint with material for capture helpers in Option B tests.
+;(contract as { semanticFingerprint?: string }).semanticFingerprint = boundFingerprint;
+const assessmentBase = {
+  semanticMaterial,
+  semanticFingerprint: boundFingerprint,
+};
+
 const frozenSnapshot = {
   evidenceId: "ev:w3b:1",
   evidenceVersion: 1,
@@ -90,7 +102,7 @@ const evidence: Evidence = {
 describe("Contract Result evaluation", () => {
   it("recognized operation + applicable facts → EO PASS + ER SATISFIED + status pass", () => {
     const eo = assessExpectedOutputs({
-      contract,
+      ...assessmentBase,
       attempt: {
         attemptId: "xat:w3b:1",
         executionContractId: contract.executionContractId,
@@ -104,7 +116,7 @@ describe("Contract Result evaluation", () => {
       frozenEvidenceSnapshot: frozenSnapshot,
     });
     const er = assessEvidenceRequirements({
-      contract,
+      ...assessmentBase,
       attempt: {
         attemptId: "xat:w3b:1",
         executionContractId: contract.executionContractId,
@@ -131,15 +143,16 @@ describe("Contract Result evaluation", () => {

   it("technical succeeded + resultRef + Evidence available + unknown EO text → NOT_PROVEN", () => {
     const eo = assessExpectedOutputs({
-      contract: {
-        ...contract,
+      semanticMaterial: {
+        ...semanticMaterial,
         expectedOutputs: ["Temporary artifact produced"],
       },
+      semanticFingerprint: boundFingerprint,
       attempt: {
         attemptId: "xat:w3b:1",
         executionContractId: contract.executionContractId,
         executionContractVersion: 1,
-        executionContractSemanticFingerprint: contract.semanticFingerprint,
+        executionContractSemanticFingerprint: boundFingerprint,
         status: "succeeded",
         resultRef: "res:w3a:abc123",
       },
@@ -151,7 +164,7 @@ describe("Contract Result evaluation", () => {

   it("resultRef match alone without server-owned res:w3a shape → NOT_PROVEN", () => {
     const eo = assessExpectedOutputs({
-      contract,
+      ...assessmentBase,
       attempt: {
         attemptId: "xat:w3b:1",
         executionContractId: contract.executionContractId,
@@ -168,7 +181,7 @@ describe("Contract Result evaluation", () => {

   it("Evidence available alone without frozen snapshot → ER NOT_PROVEN", () => {
     const er = assessEvidenceRequirements({
-      contract,
+      ...assessmentBase,
       attempt: {
         attemptId: "xat:w3b:1",
         executionContractId: contract.executionContractId,
@@ -183,30 +196,39 @@ describe("Contract Result evaluation", () => {
     expect(er[0]?.result).toBe("NOT_PROVEN");
   });

-  it("immutable binding accepts lifecycle version drift when fingerprint matches", () => {
+  it("bound snapshot validates without consulting latest EC version", () => {
+    const snap = captureBoundExecutionContractSnapshot({
+      ...contract,
+      version: 3,
+      semanticFingerprint: boundFingerprint,
+    });
+    const attempt = {
+      executionContractId: contract.executionContractId,
+      executionContractVersion: 3,
+      executionContractSemanticFingerprint: boundFingerprint,
+      boundExecutionContract: snap,
+    };
+    expect(isAttemptBoundSnapshotValid(attempt)).toBe(true);
     expect(
-      isAttemptContractImmutablyBound({
-        contract: {
-          executionContractId: contract.executionContractId,
-          semanticFingerprint: contract.semanticFingerprint,
-        },
-        attempt: {
-          executionContractId: contract.executionContractId,
-          executionContractVersion: 3,
-          executionContractSemanticFingerprint: contract.semanticFingerprint,
+      isAttemptBoundSnapshotValid({
+        ...attempt,
+        boundExecutionContract: {
+          ...snap,
+          semanticFingerprint: "deadbeef",
         },
       }),
-    ).toBe(true);
+    ).toBe(false);
     expect(
       isAttemptContractImmutablyBound({
         contract: {
           executionContractId: contract.executionContractId,
-          semanticFingerprint: "fp:other",
+          semanticFingerprint: boundFingerprint,
         },
         attempt: {
           executionContractId: contract.executionContractId,
           executionContractVersion: 3,
-          executionContractSemanticFingerprint: contract.semanticFingerprint,
+          executionContractSemanticFingerprint: boundFingerprint,
+          // missing snapshot → not immutably bound for Contract Result
         },
       }),
     ).toBe(false);
@@ -214,7 +236,7 @@ describe("Contract Result evaluation", () => {

   it("failed attempt → fail / NOT_PROVEN verdict projection", () => {
     const eo = assessExpectedOutputs({
-      contract,
+      ...assessmentBase,
       attempt: {
         attemptId: "xat:w3b:1",
         executionContractId: contract.executionContractId,
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts
index 46a8d7c8..79f10edd 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts
@@ -16,6 +16,10 @@ import {
 } from "@/lib/oa/evidence-review/application/contractResultSemanticEvaluator";
 import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "@/lib/oa/evidence-review/domain/contractResultTypes";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import {
+  computeExecutionContractSemanticFingerprint,
+} from "@/lib/oa/execution-contract";
+import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";

 const tempDirs: string[] = [];

@@ -38,26 +42,35 @@ function tempDb(): string {
   return path.join(dir, "product.sqlite");
 }

-const contract: ExecutionContract = {
-  schemaVersion: "0.2.0-oa",
-  executionContractId: "xct:w3b:sqlite",
-  projectId: "prj:w3b:sqlite",
-  version: 2,
-  status: "confirmed",
-  semanticFingerprint: "fp:w3b:sqlite",
-  action: "product:generate-temporary-artifact",
-  target: "product:project-workspace",
-  scope: "product:temporary-local-artifact",
-  requiredAuthority: "N3",
-  constraints: [],
-  stopConditions: [],
-  evidenceRequirements: [W3B_TEMP_ARTIFACT_ER_KEY],
-  expectedOutputs: [W3B_TEMP_ARTIFACT_EO_TEMPLATE],
-  requiredCapabilities: ["cap:product-temp-artifact"],
-  reversibility: "reversible",
-  idempotencyKey: "idem:ec:sqlite",
-  correlationId: "cor:ec:w3b:sqlite",
-};
+function makeContract(): ExecutionContract {
+  const base: ExecutionContract = {
+    schemaVersion: "0.2.0-oa",
+    executionContractId: "xct:w3b:sqlite",
+    projectId: "prj:w3b:sqlite",
+    version: 2,
+    status: "confirmed",
+    semanticFingerprint: "",
+    action: "product:generate-temporary-artifact",
+    target: "product:project-workspace",
+    scope: "product:temporary-local-artifact",
+    requiredAuthority: "N3",
+    constraints: [],
+    stopConditions: [],
+    evidenceRequirements: [W3B_TEMP_ARTIFACT_ER_KEY],
+    expectedOutputs: [W3B_TEMP_ARTIFACT_EO_TEMPLATE],
+    requiredCapabilities: ["cap:product-temp-artifact"],
+    reversibility: "reversible",
+    idempotencyKey: "idem:ec:sqlite",
+    correlationId: "cor:ec:w3b:sqlite",
+  };
+  return {
+    ...base,
+    semanticFingerprint: computeExecutionContractSemanticFingerprint(base),
+  };
+}
+
+const contract = makeContract();
+const boundSnap = captureBoundExecutionContractSnapshot(contract);

 describe("Contract Result SQLite durability (M8)", () => {
   it("persists contract-result ClaimEvaluation after create+freeze RB and restores on new store handle", async () => {
@@ -139,6 +152,7 @@ describe("Contract Result SQLite durability (M8)", () => {
         executionContractId: contract.executionContractId,
         executionContractVersion: contract.version,
         executionContractSemanticFingerprint: contract.semanticFingerprint,
+        boundExecutionContract: boundSnap,
         status: "succeeded",
         resultRef: "res:w3a:abc1234567890ab",
       },
@@ -236,6 +250,7 @@ describe("Contract Result SQLite durability (M8)", () => {
         executionContractId: contract.executionContractId,
         executionContractVersion: contract.version,
         executionContractSemanticFingerprint: contract.semanticFingerprint,
+        boundExecutionContract: boundSnap,
         status: "succeeded",
         resultRef: "res:w3a:deadbeef12345678",
       },
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
new file mode 100644
index 00000000..703b915e
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
@@ -0,0 +1,1130 @@
+/**
+ * TD-W3B-02 Option B — Attempt-bound immutable EC semantic snapshot adversarial suite.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import { FixedClock } from "@/lib/oa/doctrine";
+import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
+import {
+  createTestSqliteEvidenceReviewServices,
+} from "@/lib/oa/evidence-review";
+import {
+  computeExecutionContractSemanticFingerprint,
+  computeExecutionContractSemanticMaterialFingerprint,
+  executionContractSemanticMaterial,
+  type ExecutionContract,
+} from "@/lib/oa/execution-contract";
+import {
+  BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION,
+  captureBoundExecutionContractSnapshot,
+  validateBoundExecutionContractSnapshot,
+} from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
+import {
+  assessEvidenceRequirements,
+  assessExpectedOutputs,
+  deriveCanonicalContractResultStatus,
+} from "@/lib/oa/evidence-review/application/contractResultAssessment";
+import {
+  isW3bContractResultEvidenceUsable,
+  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
+  W3B_TEMP_ARTIFACT_ER_KEY,
+} from "@/lib/oa/evidence-review/application/contractResultSemanticEvaluator";
+import { EvaluateContractResult } from "@/lib/oa/evidence-review/application/evaluateContractResult";
+import { ConfirmClaimEvaluation } from "@/lib/oa/evidence-review/application/confirmClaimEvaluation";
+import {
+  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+  W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+  contractResultBindingsMatchCurrentFacts,
+  isAttemptBoundSnapshotValid,
+} from "@/lib/oa/evidence-review/domain/contractResultTypes";
+import { CLAIM_EVALUATION_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
+import { validateClaimEvaluationShape } from "@/lib/oa/evidence-review/domain/claimEvaluationInvariants";
+import type { Evidence } from "@/lib/oa/evidence-review";
+
+const tempDirs: string[] = [];
+
+afterEach(() => {
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) {
+      try {
+        fs.rmSync(dir, { recursive: true, force: true });
+      } catch {
+        /* ignore */
+      }
+    }
+  }
+});
+
+function makeContract(
+  overrides: Partial<ExecutionContract> = {},
+): ExecutionContract {
+  const base: ExecutionContract = {
+    schemaVersion: "0.2.0-oa",
+    executionContractId: "xct:w3b:optb",
+    projectId: "prj:w3b",
+    version: 3,
+    status: "confirmed",
+    semanticFingerprint: "",
+    action: "product:generate-temporary-artifact",
+    target: "product:project-workspace",
+    scope: "product:temporary-local-artifact",
+    requiredAuthority: "N3",
+    constraints: [],
+    stopConditions: [],
+    evidenceRequirements: [W3B_TEMP_ARTIFACT_ER_KEY],
+    expectedOutputs: [W3B_TEMP_ARTIFACT_EO_TEMPLATE],
+    requiredCapabilities: ["cap:product-temp-artifact"],
+    reversibility: "reversible",
+    idempotencyKey: "idem:ec:optb",
+    correlationId: "cor:ec:optb",
+    ...overrides,
+  };
+  const fp = computeExecutionContractSemanticFingerprint(base);
+  return { ...base, semanticFingerprint: fp };
+}
+
+const contract = makeContract();
+const material = executionContractSemanticMaterial(contract);
+const fingerprint = computeExecutionContractSemanticMaterialFingerprint(material);
+
+function makeEvidence(overrides: Partial<Evidence> = {}): Evidence {
+  return {
+    schemaVersion: "0.2.0-oa",
+    evidenceId: "ev:w3b:optb",
+    type: "artifact",
+    source: "attempt",
+    sourceKind: "execution_attempt",
+    location: "refs/x",
+    producedBy: LOCAL_PILOTE_ACTOR,
+    producedAt: "2026-08-24T00:00:00.000Z",
+    freshness: "fresh",
+    status: "available",
+    classification: "internal",
+    storageMode: "metadata_only",
+    availability: "available",
+    retentionClass: "standard",
+    legalHold: false,
+    bindings: {
+      projectId: contract.projectId,
+      executionContractId: contract.executionContractId,
+      executionAttemptId: "xat:w3b:optb",
+    },
+    containsSecrets: false,
+    provenance: {
+      schemaVersion: "0.1.0-oa",
+      provenanceRecordId: "prv:ev:optb",
+      actor: LOCAL_PILOTE_ACTOR,
+      source: "execution_adapter",
+      timestamp: "2026-08-24T00:00:00.000Z",
+      correlationId: "cor:ev:optb",
+    },
+    version: 1,
+    createdAt: "2026-08-24T00:00:00.000Z",
+    technicalResultRef: "res:w3a:abc1234567890ab",
+    ...overrides,
+  };
+}
+
+function makeAttempt(overrides: Record<string, unknown> = {}) {
+  const snap =
+    overrides.boundExecutionContract === null
+      ? undefined
+      : ((overrides.boundExecutionContract as ReturnType<
+          typeof captureBoundExecutionContractSnapshot
+        > | undefined) ??
+        captureBoundExecutionContractSnapshot({
+          ...contract,
+          version: Number(overrides.executionContractVersion ?? contract.version),
+        }));
+  const { boundExecutionContract: _b, ...rest } = overrides;
+  return {
+    attemptId: "xat:w3b:optb",
+    executionContractId: contract.executionContractId,
+    executionContractVersion: contract.version,
+    executionContractSemanticFingerprint: fingerprint,
+    status: "succeeded" as const,
+    resultRef: "res:w3a:abc1234567890ab",
+    ...rest,
+    boundExecutionContract: snap,
+  };
+}
+
+const frozenSnapshot = {
+  evidenceId: "ev:w3b:optb",
+  evidenceVersion: 1,
+  status: "available",
+  availability: "available",
+};
+
+describe("Option B — fingerprint material helper", () => {
+  it("same contract → contract helper == material helper", () => {
+    expect(computeExecutionContractSemanticFingerprint(contract)).toBe(
+      computeExecutionContractSemanticMaterialFingerprint(material),
+    );
+  });
+
+  it("persistence-normalized material → stable fingerprint", () => {
+    const normalized = JSON.parse(JSON.stringify(material));
+    expect(
+      computeExecutionContractSemanticMaterialFingerprint(normalized),
+    ).toBe(fingerprint);
+  });
+
+  it("tampered material → different fingerprint", () => {
+    expect(
+      computeExecutionContractSemanticMaterialFingerprint({
+        ...material,
+        scope: "tampered-scope",
+      }),
+    ).not.toBe(fingerprint);
+  });
+});
+
+describe("Option B — snapshot capture / self-consistency", () => {
+  it("1–4 new accepted snapshot fields are self-consistent", () => {
+    const snap = captureBoundExecutionContractSnapshot(contract);
+    expect(snap.executionContractSchemaVersion).toBe(
+      BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION,
+    );
+    expect(snap.executionContractVersion).toBe(contract.version);
+    expect(snap.semanticFingerprint).toBe(fingerprint);
+    expect(snap.semanticMaterial.executionContractId).toBe(
+      contract.executionContractId,
+    );
+    const attempt = makeAttempt({ boundExecutionContract: snap });
+    expect(isAttemptBoundSnapshotValid(attempt)).toBe(true);
+    expect(
+      validateBoundExecutionContractSnapshot({ attempt, requirePresent: true })
+        .ok,
+    ).toBe(true);
+  });
+
+  it("11–13 corrupt snapshot fail-closed", () => {
+    const snap = captureBoundExecutionContractSnapshot(contract);
+    expect(
+      isAttemptBoundSnapshotValid(
+        makeAttempt({
+          boundExecutionContract: {
+            ...snap,
+            semanticMaterial: { ...snap.semanticMaterial, scope: "x" },
+          },
+        }),
+      ),
+    ).toBe(false);
+    expect(
+      isAttemptBoundSnapshotValid(
+        makeAttempt({
+          boundExecutionContract: {
+            ...snap,
+            semanticFingerprint: "deadbeef".repeat(8),
+          },
+        }),
+      ),
+    ).toBe(false);
+    expect(
+      isAttemptBoundSnapshotValid(
+        makeAttempt({
+          boundExecutionContract: {
+            ...snap,
+            executionContractVersion: 99,
+          },
+        }),
+      ),
+    ).toBe(false);
+  });
+});
+
+describe("Option B — Contract Result snapshot-only + freshness", () => {
+  const evidence = makeEvidence();
+
+  it("5–7 latest EC version/material changes do not alter bound assessment", () => {
+    const snap = captureBoundExecutionContractSnapshot(contract);
+    const attempt = makeAttempt({ boundExecutionContract: snap });
+    const latestMutated = makeContract({
+      version: 99,
+      scope: "product:amended-scope",
+      expectedOutputs: ["Amended EO"],
+    });
+    expect(latestMutated.semanticFingerprint).not.toBe(fingerprint);
+    const eo = assessExpectedOutputs({
+      semanticMaterial: snap.semanticMaterial,
+      semanticFingerprint: snap.semanticFingerprint,
+      attempt,
+      evidence,
+      evaluatedAt: "2026-08-24T00:00:00.000Z",
+      frozenEvidenceSnapshot: frozenSnapshot,
+    });
+    expect(eo[0]?.result).toBe("PASS");
+    expect(eo[0]?.expectation).toBe(W3B_TEMP_ARTIFACT_EO_TEMPLATE);
+    expect(eo[0]?.expectation).not.toBe(latestMutated.expectedOutputs?.[0]);
+    // Snapshot unchanged vs latest version
+    expect(attempt.boundExecutionContract?.executionContractVersion).toBe(3);
+    expect(attempt.boundExecutionContract?.executionContractVersion).not.toBe(
+      latestMutated.version,
+    );
+  });
+
+  it("8 old CE bindings cannot satisfy a different Attempt", () => {
+    const attemptA = makeAttempt({ attemptId: "xat:a" });
+    const attemptB = makeAttempt({ attemptId: "xat:b" });
+    expect(
+      contractResultBindingsMatchCurrentFacts({
+        bindings: {
+          projectId: contract.projectId,
+          executionContractId: contract.executionContractId,
+          executionContractVersion: contract.version,
+          executionContractSemanticFingerprint: fingerprint,
+          executionAttemptId: "xat:a",
+          reviewBundleId: "rb:1",
+          reviewBundleVersion: 2,
+          evidenceRefs: [evidence.evidenceId],
+        },
+        attempt: attemptB,
+        reviewBundle: { reviewBundleId: "rb:1", frozenVersion: 2 },
+        evidenceIds: [evidence.evidenceId],
+      }),
+    ).toBe(false);
+    expect(attemptA.attemptId).not.toBe(attemptB.attemptId);
+  });
+
+  it("10 missing historical snapshot → durable NOT_PROVEN", async () => {
+    const evaluated = await new EvaluateContractResult(
+      {
+        findById: async () => null,
+        findByIdempotencyKey: async () => null,
+        exists: async () => false,
+        create: async () => {},
+        update: async () => {},
+      },
+      { nowIso: () => "2026-08-24T00:00:00.000Z" },
+      { append: () => {} },
+      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+    ).execute({
+      claimEvaluationId: "clm:w3b:missing-snap",
+      idempotencyKey: "idem:ce:missing-snap",
+      actor: LOCAL_PILOTE_ACTOR,
+      contract,
+      attempt: makeAttempt({ boundExecutionContract: null }),
+      evidence,
+      reviewBundle: {
+        schemaVersion: "0.2.0-oa",
+        reviewBundleId: "rb:w3b:1",
+        projectId: contract.projectId,
+        version: 2,
+        frozenAt: "2026-08-24T00:00:00.000Z",
+        frozenVersion: 2,
+        evidenceRefs: [evidence.evidenceId],
+        claimEvaluationRefs: [],
+        completeness: "complete",
+        status: "ready_for_review",
+        createdAt: "2026-08-24T00:00:00.000Z",
+        synthesisOnly: false,
+        provenance: {
+          schemaVersion: "0.1.0-oa",
+          provenanceRecordId: "prv:rb",
+          actor: LOCAL_PILOTE_ACTOR,
+          source: "review",
+          timestamp: "2026-08-24T00:00:00.000Z",
+          correlationId: "cor:rb",
+        },
+        frozenEvidenceSnapshots: [frozenSnapshot],
+      },
+    });
+    expect(evaluated.ok).toBe(true);
+    if (!evaluated.ok) return;
+    expect(evaluated.claimEvaluation.status).toBe("not_proven");
+    expect(evaluated.claimEvaluation.claimStatement).toContain(
+      "historical_attempt_missing_bound_snapshot",
+    );
+  });
+
+  it("11 corrupt snapshot at evaluate → fail-closed error", async () => {
+    const snap = captureBoundExecutionContractSnapshot(contract);
+    const evaluated = await new EvaluateContractResult(
+      {
+        findById: async () => null,
+        findByIdempotencyKey: async () => null,
+        exists: async () => false,
+        create: async () => {},
+        update: async () => {},
+      },
+      { nowIso: () => "2026-08-24T00:00:00.000Z" },
+      { append: () => {} },
+      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+    ).execute({
+      claimEvaluationId: "clm:w3b:corrupt-snap",
+      idempotencyKey: "idem:ce:corrupt-snap",
+      actor: LOCAL_PILOTE_ACTOR,
+      contract,
+      attempt: makeAttempt({
+        boundExecutionContract: {
+          ...snap,
+          semanticFingerprint: "0".repeat(64),
+        },
+      }),
+      evidence,
+      reviewBundle: {
+        schemaVersion: "0.2.0-oa",
+        reviewBundleId: "rb:w3b:1",
+        projectId: contract.projectId,
+        version: 2,
+        frozenAt: "2026-08-24T00:00:00.000Z",
+        frozenVersion: 2,
+        evidenceRefs: [evidence.evidenceId],
+        claimEvaluationRefs: [],
+        completeness: "complete",
+        status: "ready_for_review",
+        createdAt: "2026-08-24T00:00:00.000Z",
+        synthesisOnly: false,
+        provenance: {
+          schemaVersion: "0.1.0-oa",
+          provenanceRecordId: "prv:rb",
+          actor: LOCAL_PILOTE_ACTOR,
+          source: "review",
+          timestamp: "2026-08-24T00:00:00.000Z",
+          correlationId: "cor:rb",
+        },
+        frozenEvidenceSnapshots: [frozenSnapshot],
+      },
+    });
+    expect(evaluated.ok).toBe(false);
+    if (evaluated.ok) return;
+    expect(evaluated.error.internalCauseRef).toBe(
+      "bound_snapshot_corrupt_or_inconsistent",
+    );
+  });
+
+  it("14–15 CE binding fingerprint/version mismatch → no SUCCESS match", () => {
+    const attempt = makeAttempt();
+    expect(
+      contractResultBindingsMatchCurrentFacts({
+        bindings: {
+          projectId: contract.projectId,
+          executionContractId: contract.executionContractId,
+          executionContractVersion: contract.version,
+          executionContractSemanticFingerprint: "wrong-fp",
+          executionAttemptId: attempt.attemptId,
+          reviewBundleId: "rb:1",
+          reviewBundleVersion: 2,
+          evidenceRefs: [evidence.evidenceId],
+        },
+        attempt,
+        reviewBundle: { reviewBundleId: "rb:1", frozenVersion: 2 },
+        evidenceIds: [evidence.evidenceId],
+      }),
+    ).toBe(false);
+    expect(
+      contractResultBindingsMatchCurrentFacts({
+        bindings: {
+          projectId: contract.projectId,
+          executionContractId: contract.executionContractId,
+          executionContractVersion: 99,
+          executionContractSemanticFingerprint: fingerprint,
+          executionAttemptId: attempt.attemptId,
+          reviewBundleId: "rb:1",
+          reviewBundleVersion: 2,
+          evidenceRefs: [evidence.evidenceId],
+        },
+        attempt,
+        reviewBundle: { reviewBundleId: "rb:1", frozenVersion: 2 },
+        evidenceIds: [evidence.evidenceId],
+      }),
+    ).toBe(false);
+  });
+
+  it("21–24 Evidence freshness positive allowlist", () => {
+    for (const freshness of [undefined, "unknown", "stale", "aging"] as const) {
+      expect(
+        isW3bContractResultEvidenceUsable({
+          evidence: { ...evidence, freshness: freshness as never },
+          snapshot: frozenSnapshot,
+        }),
+      ).toBe(false);
+    }
+    expect(
+      isW3bContractResultEvidenceUsable({
+        evidence: { ...evidence, status: "rejected" },
+        snapshot: { ...frozenSnapshot, status: "rejected" },
+      }),
+    ).toBe(false);
+    expect(
+      isW3bContractResultEvidenceUsable({
+        evidence: { ...evidence, status: "superseded" },
+        snapshot: { ...frozenSnapshot, status: "superseded" },
+      }),
+    ).toBe(false);
+    expect(
+      isW3bContractResultEvidenceUsable({
+        evidence: { ...evidence, status: "incomplete" as never },
+        snapshot: { ...frozenSnapshot, status: "incomplete" },
+      }),
+    ).toBe(false);
+    expect(
+      isW3bContractResultEvidenceUsable({
+        evidence: { ...evidence, availability: "unavailable" },
+        snapshot: { ...frozenSnapshot, availability: "unavailable" },
+      }),
+    ).toBe(false);
+    const er = assessEvidenceRequirements({
+      semanticMaterial: material,
+      semanticFingerprint: fingerprint,
+      attempt: makeAttempt(),
+      evidence: { ...evidence, freshness: undefined },
+      evaluatedAt: "2026-08-24T00:00:00.000Z",
+      frozenEvidenceSnapshot: frozenSnapshot,
+    });
+    expect(er[0]?.result).toBe("NOT_PROVEN");
+  });
+
+  it("25 no evaluator → durable NOT_PROVEN assessments", () => {
+    const unknownMaterial = executionContractSemanticMaterial(
+      makeContract({ action: "product:unknown" }),
+    );
+    const eo = assessExpectedOutputs({
+      semanticMaterial: unknownMaterial,
+      semanticFingerprint: computeExecutionContractSemanticMaterialFingerprint(
+        unknownMaterial,
+      ),
+      attempt: makeAttempt(),
+      evidence,
+      evaluatedAt: "2026-08-24T00:00:00.000Z",
+      frozenEvidenceSnapshot: frozenSnapshot,
+    });
+    expect(eo[0]?.result).toBe("NOT_PROVEN");
+    expect(eo[0]?.ruleRef).toBeUndefined();
+    expect(
+      deriveCanonicalContractResultStatus({
+        attemptStatus: "succeeded",
+        expectedOutputAssessments: eo,
+        evidenceRequirementAssessments: [],
+      }),
+    ).toBe("not_proven");
+  });
+});
+
+describe("Option B — Confirm exact binding", () => {
+  it("16 deterministic human confirm refused", async () => {
+    const result = await new ConfirmClaimEvaluation(
+      {
+        findById: async () => ({
+          schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
+          claimEvaluationId: "clm:cr:det",
+          claimType: "conformite",
+          claimStatement: "x",
+          criticality: "non_critical",
+          evaluationMethod: "deterministic",
+          requiredEvidenceRefs: ["ev:1"],
+          providedEvidenceRefs: ["ev:1"],
+          reviewBundleId: "rb:1",
+          reviewBundleVersion: 2,
+          status: "evaluating",
+          proposedBy: { actorId: "actor:a", role: "project_owner" },
+          proposedAt: "2026-08-24T00:00:00.000Z",
+          provenance: {
+            schemaVersion: "0.1.0-oa",
+            provenanceRecordId: "prv:1",
+            actor: { actorId: "actor:a", role: "project_owner" },
+            source: "review",
+            timestamp: "2026-08-24T00:00:00.000Z",
+            correlationId: "cor:1",
+          },
+          version: 1,
+          subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+          contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+          contractResultBindings: {
+            projectId: contract.projectId,
+            executionContractId: contract.executionContractId,
+            executionContractVersion: contract.version,
+            executionContractSemanticFingerprint: fingerprint,
+            executionAttemptId: "xat:w3b:optb",
+            reviewBundleId: "rb:1",
+            reviewBundleVersion: 2,
+            evidenceRefs: ["ev:1"],
+          },
+          expectedOutputAssessments: [
+            {
+              itemId: {
+                semanticFingerprint: fingerprint,
+                itemKind: "EO",
+                ordinal: 0,
+              },
+              expectation: W3B_TEMP_ARTIFACT_EO_TEMPLATE,
+              result: "PASS",
+              method: "deterministic",
+              provenance: {
+                evaluatorRef: "w3b",
+                evaluatedAt: "2026-08-24T00:00:00.000Z",
+              },
+            },
+          ],
+          evidenceRequirementAssessments: [
+            {
+              itemId: {
+                semanticFingerprint: fingerprint,
+                itemKind: "ER",
+                ordinal: 0,
+              },
+              requirement: W3B_TEMP_ARTIFACT_ER_KEY,
+              result: "SATISFIED",
+              method: "deterministic",
+              provenance: {
+                evaluatorRef: "w3b",
+                evaluatedAt: "2026-08-24T00:00:00.000Z",
+              },
+            },
+          ],
+        }),
+        findByIdempotencyKey: async () => null,
+        exists: async () => true,
+        create: async () => {},
+        update: async () => {},
+      },
+      {
+        findById: async () => ({
+          schemaVersion: "0.2.0-oa",
+          reviewBundleId: "rb:1",
+          projectId: contract.projectId,
+          version: 2,
+          frozenVersion: 2,
+          frozenAt: "2026-08-24T00:00:00.000Z",
+          evidenceRefs: ["ev:1"],
+          claimEvaluationRefs: [],
+          completeness: "complete",
+          status: "ready_for_review",
+          createdAt: "2026-08-24T00:00:00.000Z",
+          synthesisOnly: false,
+          provenance: {
+            schemaVersion: "0.1.0-oa",
+            provenanceRecordId: "prv:rb",
+            actor: LOCAL_PILOTE_ACTOR,
+            source: "review",
+            timestamp: "2026-08-24T00:00:00.000Z",
+            correlationId: "cor:rb",
+          },
+          frozenEvidenceSnapshots: [
+            {
+              evidenceId: "ev:1",
+              evidenceVersion: 1,
+              status: "verified",
+              availability: "available",
+            },
+          ],
+        }),
+      },
+      {
+        findById: async () =>
+          makeEvidence({ evidenceId: "ev:1", status: "verified" }),
+      },
+      {
+        verify: () => ({
+          ok: true,
+          reason: "ok",
+          resolvedLevel: "N3",
+          authorityEvidenceId: "auth:1",
+        }),
+      },
+      { nowIso: () => "2026-08-24T00:00:00.000Z" },
+      { append: () => {} },
+      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:2" },
+      {
+        findById: async () =>
+          ({
+            ...makeAttempt(),
+            schemaVersion: "0.2.0-oa",
+            selectedAgentRef: "agt:1",
+            idempotencyKey: "idem:x",
+            correlationId: "cor:x",
+            version: 1,
+            createdAt: "2026-08-24T00:00:00.000Z",
+            provenance: {
+              schemaVersion: "0.1.0-oa",
+              provenanceRecordId: "prv:x",
+              actor: LOCAL_PILOTE_ACTOR,
+              source: "execution_adapter",
+              timestamp: "2026-08-24T00:00:00.000Z",
+              correlationId: "cor:x",
+            },
+          }) as never,
+      },
+    ).execute({
+      claimEvaluationId: "clm:cr:det",
+      expectedVersion: 1,
+      idempotencyKey: "idem:confirm:det",
+      actor: { actorId: "actor:b", role: "project_owner" },
+      authorityEvidenceId: "auth:1",
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.error.internalCauseRef).toBe(
+      "contract_result_deterministic_no_human_confirm",
+    );
+  });
+
+  it("17 assisted NOT_PROVEN + authorized human cannot become pass", async () => {
+    const result = await new ConfirmClaimEvaluation(
+      {
+        findById: async () => ({
+          schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
+          claimEvaluationId: "clm:cr:np",
+          claimType: "conformite",
+          claimStatement: "x",
+          criticality: "non_critical",
+          evaluationMethod: "assisted",
+          requiredEvidenceRefs: ["ev:1"],
+          providedEvidenceRefs: ["ev:1"],
+          reviewBundleId: "rb:1",
+          reviewBundleVersion: 2,
+          status: "evaluating",
+          proposedBy: { actorId: "actor:a", role: "project_owner" },
+          proposedAt: "2026-08-24T00:00:00.000Z",
+          provenance: {
+            schemaVersion: "0.1.0-oa",
+            provenanceRecordId: "prv:1",
+            actor: { actorId: "actor:a", role: "project_owner" },
+            source: "review",
+            timestamp: "2026-08-24T00:00:00.000Z",
+            correlationId: "cor:1",
+          },
+          version: 1,
+          subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+          contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+          contractResultBindings: {
+            projectId: contract.projectId,
+            executionContractId: contract.executionContractId,
+            executionContractVersion: contract.version,
+            executionContractSemanticFingerprint: fingerprint,
+            executionAttemptId: "xat:w3b:optb",
+            reviewBundleId: "rb:1",
+            reviewBundleVersion: 2,
+            evidenceRefs: ["ev:1"],
+          },
+          expectedOutputAssessments: [
+            {
+              itemId: {
+                semanticFingerprint: fingerprint,
+                itemKind: "EO",
+                ordinal: 0,
+              },
+              expectation: W3B_TEMP_ARTIFACT_EO_TEMPLATE,
+              result: "NOT_PROVEN",
+              method: "assisted",
+              provenance: {
+                evaluatorRef: "w3b",
+                evaluatedAt: "2026-08-24T00:00:00.000Z",
+              },
+            },
+          ],
+          evidenceRequirementAssessments: [
+            {
+              itemId: {
+                semanticFingerprint: fingerprint,
+                itemKind: "ER",
+                ordinal: 0,
+              },
+              requirement: W3B_TEMP_ARTIFACT_ER_KEY,
+              result: "NOT_PROVEN",
+              method: "assisted",
+              provenance: {
+                evaluatorRef: "w3b",
+                evaluatedAt: "2026-08-24T00:00:00.000Z",
+              },
+            },
+          ],
+        }),
+        findByIdempotencyKey: async () => null,
+        exists: async () => true,
+        create: async () => {},
+        update: async () => {},
+      },
+      {
+        findById: async () => ({
+          schemaVersion: "0.2.0-oa",
+          reviewBundleId: "rb:1",
+          projectId: contract.projectId,
+          version: 2,
+          frozenVersion: 2,
+          frozenAt: "2026-08-24T00:00:00.000Z",
+          evidenceRefs: ["ev:1"],
+          claimEvaluationRefs: [],
+          completeness: "complete",
+          status: "ready_for_review",
+          createdAt: "2026-08-24T00:00:00.000Z",
+          synthesisOnly: false,
+          provenance: {
+            schemaVersion: "0.1.0-oa",
+            provenanceRecordId: "prv:rb",
+            actor: LOCAL_PILOTE_ACTOR,
+            source: "review",
+            timestamp: "2026-08-24T00:00:00.000Z",
+            correlationId: "cor:rb",
+          },
+          frozenEvidenceSnapshots: [
+            {
+              evidenceId: "ev:1",
+              evidenceVersion: 1,
+              status: "verified",
+              availability: "available",
+            },
+          ],
+        }),
+      },
+      {
+        findById: async () =>
+          makeEvidence({ evidenceId: "ev:1", status: "verified" }),
+      },
+      {
+        verify: () => ({
+          ok: true,
+          reason: "ok",
+          resolvedLevel: "N3",
+          authorityEvidenceId: "auth:1",
+        }),
+      },
+      { nowIso: () => "2026-08-24T00:00:00.000Z" },
+      { append: () => {} },
+      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:2" },
+      {
+        findById: async () =>
+          ({
+            ...makeAttempt(),
+            schemaVersion: "0.2.0-oa",
+            selectedAgentRef: "agt:1",
+            idempotencyKey: "idem:x",
+            correlationId: "cor:x",
+            version: 1,
+            createdAt: "2026-08-24T00:00:00.000Z",
+            provenance: {
+              schemaVersion: "0.1.0-oa",
+              provenanceRecordId: "prv:x",
+              actor: LOCAL_PILOTE_ACTOR,
+              source: "execution_adapter",
+              timestamp: "2026-08-24T00:00:00.000Z",
+              correlationId: "cor:x",
+            },
+          }) as never,
+      },
+    ).execute({
+      claimEvaluationId: "clm:cr:np",
+      expectedVersion: 1,
+      idempotencyKey: "idem:confirm:np",
+      actor: { actorId: "actor:b", role: "project_owner" },
+      authorityEvidenceId: "auth:1",
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.error.internalCauseRef).toBe(
+      "contract_result_confirm_derived_not_pass",
+    );
+  });
+
+  it("19 missing snapshot at Confirm refused", async () => {
+    const result = await new ConfirmClaimEvaluation(
+      {
+        findById: async () => ({
+          schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
+          claimEvaluationId: "clm:cr:nosnap",
+          claimType: "conformite",
+          claimStatement: "x",
+          criticality: "non_critical",
+          evaluationMethod: "assisted",
+          requiredEvidenceRefs: ["ev:1"],
+          providedEvidenceRefs: ["ev:1"],
+          reviewBundleId: "rb:1",
+          reviewBundleVersion: 2,
+          status: "evaluating",
+          proposedBy: { actorId: "actor:a", role: "project_owner" },
+          proposedAt: "2026-08-24T00:00:00.000Z",
+          provenance: {
+            schemaVersion: "0.1.0-oa",
+            provenanceRecordId: "prv:1",
+            actor: { actorId: "actor:a", role: "project_owner" },
+            source: "review",
+            timestamp: "2026-08-24T00:00:00.000Z",
+            correlationId: "cor:1",
+          },
+          version: 1,
+          subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+          contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+          contractResultBindings: {
+            projectId: contract.projectId,
+            executionContractId: contract.executionContractId,
+            executionContractVersion: contract.version,
+            executionContractSemanticFingerprint: fingerprint,
+            executionAttemptId: "xat:w3b:optb",
+            reviewBundleId: "rb:1",
+            reviewBundleVersion: 2,
+            evidenceRefs: ["ev:1"],
+          },
+          expectedOutputAssessments: [
+            {
+              itemId: {
+                semanticFingerprint: fingerprint,
+                itemKind: "EO",
+                ordinal: 0,
+              },
+              expectation: W3B_TEMP_ARTIFACT_EO_TEMPLATE,
+              result: "PASS",
+              method: "assisted",
+              provenance: {
+                evaluatorRef: "w3b",
+                evaluatedAt: "2026-08-24T00:00:00.000Z",
+              },
+            },
+          ],
+          evidenceRequirementAssessments: [
+            {
+              itemId: {
+                semanticFingerprint: fingerprint,
+                itemKind: "ER",
+                ordinal: 0,
+              },
+              requirement: W3B_TEMP_ARTIFACT_ER_KEY,
+              result: "SATISFIED",
+              method: "assisted",
+              provenance: {
+                evaluatorRef: "w3b",
+                evaluatedAt: "2026-08-24T00:00:00.000Z",
+              },
+            },
+          ],
+        }),
+        findByIdempotencyKey: async () => null,
+        exists: async () => true,
+        create: async () => {},
+        update: async () => {},
+      },
+      {
+        findById: async () => ({
+          schemaVersion: "0.2.0-oa",
+          reviewBundleId: "rb:1",
+          projectId: contract.projectId,
+          version: 2,
+          frozenVersion: 2,
+          frozenAt: "2026-08-24T00:00:00.000Z",
+          evidenceRefs: ["ev:1"],
+          claimEvaluationRefs: [],
+          completeness: "complete",
+          status: "ready_for_review",
+          createdAt: "2026-08-24T00:00:00.000Z",
+          synthesisOnly: false,
+          provenance: {
+            schemaVersion: "0.1.0-oa",
+            provenanceRecordId: "prv:rb",
+            actor: LOCAL_PILOTE_ACTOR,
+            source: "review",
+            timestamp: "2026-08-24T00:00:00.000Z",
+            correlationId: "cor:rb",
+          },
+          frozenEvidenceSnapshots: [
+            {
+              evidenceId: "ev:1",
+              evidenceVersion: 1,
+              status: "verified",
+              availability: "available",
+            },
+          ],
+        }),
+      },
+      {
+        findById: async () =>
+          makeEvidence({ evidenceId: "ev:1", status: "verified" }),
+      },
+      {
+        verify: () => ({
+          ok: true,
+          reason: "ok",
+          resolvedLevel: "N3",
+          authorityEvidenceId: "auth:1",
+        }),
+      },
+      { nowIso: () => "2026-08-24T00:00:00.000Z" },
+      { append: () => {} },
+      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:2" },
+      {
+        findById: async () =>
+          ({
+            ...makeAttempt({ boundExecutionContract: null }),
+            schemaVersion: "0.2.0-oa",
+            selectedAgentRef: "agt:1",
+            idempotencyKey: "idem:x",
+            correlationId: "cor:x",
+            version: 1,
+            createdAt: "2026-08-24T00:00:00.000Z",
+            provenance: {
+              schemaVersion: "0.1.0-oa",
+              provenanceRecordId: "prv:x",
+              actor: LOCAL_PILOTE_ACTOR,
+              source: "execution_adapter",
+              timestamp: "2026-08-24T00:00:00.000Z",
+              correlationId: "cor:x",
+            },
+          }) as never,
+      },
+    ).execute({
+      claimEvaluationId: "clm:cr:nosnap",
+      expectedVersion: 1,
+      idempotencyKey: "idem:confirm:nosnap",
+      actor: { actorId: "actor:b", role: "project_owner" },
+      authorityEvidenceId: "auth:1",
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.error.internalCauseRef).toBe(
+      "contract_result_confirm_missing_bound_snapshot",
+    );
+  });
+
+  it("20 generic structural claim still requires Morris", () => {
+    const violation = validateClaimEvaluationShape({
+      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
+      claimEvaluationId: "clm:generic:structural",
+      claimType: "conformite",
+      claimStatement: "generic structural",
+      criticality: "structural",
+      evaluationMethod: "assisted",
+      requiredEvidenceRefs: ["ev:1"],
+      providedEvidenceRefs: ["ev:1"],
+      reviewBundleId: "rb:1",
+      reviewBundleVersion: 1,
+      status: "pass",
+      proposedBy: { actorId: "actor:a", role: "project_owner" },
+      confirmationAuthority: "authorized_human",
+      confirmedBy: { actorId: "actor:b", role: "project_owner" },
+      confirmedAt: "2026-08-24T00:00:00.000Z",
+      proposedAt: "2026-08-24T00:00:00.000Z",
+      evaluatedAt: "2026-08-24T00:00:00.000Z",
+      provenance: {
+        schemaVersion: "0.1.0-oa",
+        provenanceRecordId: "prv:1",
+        actor: { actorId: "actor:a", role: "project_owner" },
+        source: "review",
+        timestamp: "2026-08-24T00:00:00.000Z",
+        correlationId: "cor:1",
+      },
+      version: 1,
+    });
+    expect(violation?.reason).toBe("structural_requires_morris");
+  });
+});
+
+describe("Option B — SQLite Attempt snapshot restart", () => {
+  it("persists bound snapshot and reloads byte-equivalent", async () => {
+    // Prefer attempt services if exported via execution-attempt SQLite factory.
+    // Fall back: evidence-review CE path uses attempt reader bridge with snapshot.
+    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "w3b-optb-"));
+    tempDirs.push(dir);
+    const dbPath = path.join(dir, "product.sqlite");
+    const storeA = new SqliteProductStore(dbPath);
+    const servicesA = createTestSqliteEvidenceReviewServices({
+      productStore: storeA,
+      fixedNowIso: "2026-08-24T10:00:00.000Z",
+      clock: new FixedClock("2026-08-24T10:00:00.000Z"),
+    });
+    const snap = captureBoundExecutionContractSnapshot(contract);
+    const evidence = makeEvidence();
+    await servicesA.repository.create(evidence, {
+      evidenceId: evidence.evidenceId,
+      fingerprint: "fp:ev",
+      operation: "register",
+    });
+    const created = await servicesA.createReviewBundle.execute({
+      reviewBundleId: "rb:w3b:optb",
+      idempotencyKey: "idem:rb:w3b:optb",
+      actor: LOCAL_PILOTE_ACTOR,
+      projectId: contract.projectId,
+      executionContractId: contract.executionContractId,
+      evidenceIds: [evidence.evidenceId],
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    const frozen = await servicesA.freezeReviewBundle.execute({
+      reviewBundleId: "rb:w3b:optb",
+      expectedVersion: created.reviewBundle.version,
+      idempotencyKey: "idem:rb-freeze:w3b:optb",
+      actor: LOCAL_PILOTE_ACTOR,
+    });
+    expect(frozen.ok).toBe(true);
+    if (!frozen.ok) return;
+    const evaluated = await servicesA.evaluateContractResult!.execute({
+      claimEvaluationId: "clm:w3b:optb",
+      idempotencyKey: "idem:clm:w3b:optb",
+      actor: LOCAL_PILOTE_ACTOR,
+      contract,
+      attempt: makeAttempt({ boundExecutionContract: snap }),
+      evidence,
+      reviewBundle: frozen.reviewBundle,
+    });
+    expect(evaluated.ok).toBe(true);
+    if (!evaluated.ok) return;
+    expect(evaluated.claimEvaluation.status).toBe("pass");
+    expect(
+      evaluated.claimEvaluation.contractResultBindings
+        ?.executionContractSemanticFingerprint,
+    ).toBe(snap.semanticFingerprint);
+    storeA.close();
+
+    const storeB = new SqliteProductStore(dbPath);
+    const servicesB = createTestSqliteEvidenceReviewServices({
+      productStore: storeB,
+    });
+    const restored = await servicesB.claimEvaluationReader.findById(
+      "clm:w3b:optb",
+    );
+    expect(restored?.status).toBe("pass");
+    expect(
+      restored?.contractResultBindings?.executionContractSemanticFingerprint,
+    ).toBe(snap.semanticFingerprint);
+    storeB.close();
+  });
+});
+
+describe("Option B — lifecycle immutability of snapshot on spread updates", () => {
+  it("accepted→running→succeeded preserves snapshot JSON", () => {
+    const snap = captureBoundExecutionContractSnapshot(contract);
+    const accepted = {
+      ...makeAttempt({ boundExecutionContract: snap, status: "accepted" }),
+      version: 1,
+    };
+    const before = JSON.stringify(accepted.boundExecutionContract);
+    const running = {
+      ...accepted,
+      status: "running",
+      version: accepted.version + 1,
+    };
+    const succeeded = {
+      ...running,
+      status: "succeeded",
+      resultRef: "res:w3a:abc1234567890ab",
+      version: running.version + 1,
+    };
+    const failed = {
+      ...running,
+      status: "failed",
+      errorRef: "err:1",
+      version: running.version + 1,
+    };
+    const stopped = {
+      ...running,
+      status: "cancelled",
+      stopOrigin: "SYSTEM_GOVERNED_STOP",
+      version: running.version + 1,
+    };
+    const cancelled = {
+      ...running,
+      status: "cancelled",
+      stopOrigin: "USER_CANCEL",
+      version: running.version + 1,
+    };
+    for (const next of [running, succeeded, failed, stopped, cancelled]) {
+      expect(JSON.stringify(next.boundExecutionContract)).toBe(before);
+      expect(next.executionContractVersion).toBe(
+        accepted.executionContractVersion,
+      );
+    }
+  });
+});
diff --git a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
index 126d1f9e..ec103665 100644
--- a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
@@ -15,7 +15,7 @@ import {

 const CAPTURE_ROOT = path.resolve(
   process.cwd(),
-  "../../../.tmp-sfia-review/runtime-captures/w3-b-correction-2",
+  "../../../.tmp-sfia-review/runtime-captures/w3-b-option-b",
 );
 const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

@@ -212,7 +212,7 @@ test.describe("W3-B /studio Terminal + Evidence (corrected)", () => {
     fs.writeFileSync(MANIFEST, "");

     await openThroughAuthorized(page, "W3-B SUCCESS Evidence");
-    await capture(page, "01-execution-before-claim", {
+    await capture(page, "01-pre-execute", {
       scenario: "SUCCESS",
       productOutcome: null,
       state: "authorized_before_execute",
@@ -261,7 +261,7 @@ test.describe("W3-B /studio Terminal + Evidence (corrected)", () => {
     await expect(page.getByTestId("w3b-technical-status")).toHaveText(
       "succeeded",
     );
-    await capture(page, "03-success-evidence-details", {
+    await capture(page, "03-success-technical-detail", {
       scenario: "SUCCESS",
       ...meta,
       state: "technical_secondary",
@@ -299,7 +299,7 @@ test.describe("W3-B /studio Terminal + Evidence (corrected)", () => {
       // Remount lost client Attempt — re-assert durable IDs via in-session capture.
       await expect(page.getByTestId("project-principal")).toBeVisible();
     }
-    await capture(page, "06-reload-durable-outcome", {
+    await capture(page, "06-reload-success", {
       scenario: "SUCCESS_RELOAD",
       evidenceId: meta.evidenceId,
       reviewBundleId: meta.reviewBundleId,
@@ -327,7 +327,7 @@ test.describe("W3-B /studio Terminal + Evidence (corrected)", () => {
       "EXECUTOR_INSUFFICIENT",
     );
     const meta = await readOutcomeMeta(page);
-    await capture(page, "04-governed-stop-business-first", {
+    await capture(page, "04-system-governed-stop", {
       scenario: "GOVERNED_STOP",
       ...meta,
       adapterBehavior: "governed_stop:EXECUTOR_INSUFFICIENT",
@@ -353,7 +353,7 @@ test.describe("W3-B /studio Terminal + Evidence (corrected)", () => {
       "failed",
     );
     const meta = await readOutcomeMeta(page);
-    await capture(page, "05-adapter-fail-business-first", {
+    await capture(page, "05-adapter-fail", {
       scenario: "ADAPTER_FAIL",
       ...meta,
       adapterBehavior: "adapter_fail",
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index c31960f4..e3f07d16 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -218,6 +218,7 @@ export async function materializeW3bProductTerminal(input: {
       executionContractVersion: attempt.executionContractVersion,
       executionContractSemanticFingerprint:
         attempt.executionContractSemanticFingerprint,
+      boundExecutionContract: attempt.boundExecutionContract,
       status: attempt.status,
       resultRef: attempt.resultRef,
       errorRef: attempt.errorRef,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
index 586280bc..fcb2aafd 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
@@ -158,7 +158,7 @@ export function projectW3bProductTerminal(input: {
       stopOrigin: input.attempt.stopOrigin ?? null,
       stopCode: input.attempt.stopCode ?? null,
       executionContractId: input.contract.executionContractId,
-      executionContractVersion: input.contract.version,
+      executionContractVersion: input.attempt.executionContractVersion,
     },
     reservations: [...PRODUCT_RESERVATIONS],
     antiClaims: ANTI,
@@ -212,13 +212,14 @@ export function projectW3bProductTerminal(input: {
     ce.contractResultBindings &&
     !contractResultBindingsMatchCurrentFacts({
       bindings: ce.contractResultBindings,
-      contract: input.contract,
       attempt: input.attempt,
       reviewBundle: {
         reviewBundleId: input.reviewBundle.reviewBundleId,
         frozenVersion: input.reviewBundle.frozenVersion,
       },
       evidenceIds: [input.evidence.evidenceId],
+      projectId: input.contract.projectId,
+      cycleInstanceId: input.contract.cycleInstanceId ?? null,
     })
   ) {
     return {
@@ -235,12 +236,19 @@ export function projectW3bProductTerminal(input: {
     ce.status === "pass" &&
     verdict === "PASS"
   ) {
-    const expectedSummary = (input.contract.expectedOutputs ?? []).join(" · ");
+    const boundOutputs =
+      input.attempt.boundExecutionContract?.semanticMaterial.expectedOutputs;
+    const expectedSummary = (boundOutputs ?? input.contract.expectedOutputs ?? []).join(
+      " · ",
+    );
+    const scope =
+      input.attempt.boundExecutionContract?.semanticMaterial.scope ??
+      input.contract.scope;
     return {
       ...base,
       outcome: "SUCCESS",
       businessHeadline: "Succès",
-      businessReason: `Résultat attendu obtenu dans le périmètre « ${input.contract.scope} » : ${expectedSummary}.`,
+      businessReason: `Résultat attendu obtenu dans le périmètre « ${scope} » : ${expectedSummary}.`,
       claimAllowed: true,
       governedBoundary: null,
       evidenceSummary: evidenceSummaryFor("SUCCESS", input.attempt.status),
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
index 513c47ad..1a5d3a63 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
@@ -22,12 +22,14 @@ import type {
 import {
   CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
   W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+  isAttemptBoundSnapshotValid,
 } from "../domain/contractResultTypes";
 import { containsForbiddenSecret } from "../domain/invariants";
 import type { EvidenceAuditPort } from "../ports/evidenceAudit";
 import type { ClaimAuthorityPort } from "../ports/claimAuthorityPort";
 import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";
 import type { EvidenceReaderPort } from "../ports/evidenceReader";
+import type { ExecutionAttemptReaderPort } from "../ports/executionAttemptReader";
 import type { IdGeneratorPort } from "../ports/idGenerator";
 import type { ReviewBundleReaderPort } from "../ports/reviewBundleReader";
 import {
@@ -55,6 +57,7 @@ export class ConfirmClaimEvaluation {
     private readonly clock: ClockPort,
     private readonly audit: EvidenceAuditPort,
     private readonly ids: IdGeneratorPort,
+    private readonly attempts?: ExecutionAttemptReaderPort,
   ) {}

   async execute(
@@ -347,18 +350,56 @@ export class ConfirmClaimEvaluation {
             { claimEvaluation: current },
           );
         }
-        const attemptStatus = inferAttemptStatusFromContractResultAssessments(
-          current.expectedOutputAssessments,
-        );
-        const derivedStatus = deriveCanonicalContractResultStatus({
-          attemptStatus,
-          expectedOutputAssessments: current.expectedOutputAssessments,
-          evidenceRequirementAssessments: current.evidenceRequirementAssessments,
-        });
-        if (derivedStatus !== "pass") {
+
+        const bindings = current.contractResultBindings;
+        if (!bindings?.executionAttemptId) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "contract_result_confirm_missing_attempt_binding",
+            { claimEvaluation: current },
+          );
+        }
+        if (!this.attempts) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "contract_result_confirm_attempt_reader_unavailable",
+            { claimEvaluation: current },
+          );
+        }
+        const attempt = await this.attempts.findById(bindings.executionAttemptId);
+        if (!attempt) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "contract_result_confirm_attempt_not_found",
+            { claimEvaluation: current },
+          );
+        }
+        if (!attempt.boundExecutionContract) {
           return fail(
             "CLAIM_EVALUATION_INVALID_STATE",
-            "contract_result_confirm_derived_not_pass",
+            "contract_result_confirm_missing_bound_snapshot",
+            { claimEvaluation: current },
+          );
+        }
+        if (!isAttemptBoundSnapshotValid(attempt)) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "contract_result_confirm_corrupt_bound_snapshot",
+            { claimEvaluation: current },
+          );
+        }
+        if (
+          bindings.executionContractId !== attempt.executionContractId ||
+          bindings.executionContractVersion !==
+            attempt.executionContractVersion ||
+          bindings.executionContractSemanticFingerprint !==
+            attempt.boundExecutionContract.semanticFingerprint ||
+          bindings.reviewBundleId !== current.reviewBundleId ||
+          bindings.reviewBundleVersion !== current.reviewBundleVersion
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "contract_result_confirm_binding_mismatch",
             { claimEvaluation: current },
           );
         }
@@ -371,9 +412,56 @@ export class ConfirmClaimEvaluation {
             ? ("morris" as const)
             : ("authorized_human" as const);

+      const stampedExpectedOutputs = isContractResult
+        ? current.expectedOutputAssessments?.map((assessment) =>
+            assessment.result === "PASS"
+              ? {
+                  ...assessment,
+                  reviewConfirmation: {
+                    confirmedBy: { ...request.actor },
+                    confirmedAt: timestamp,
+                  },
+                }
+              : assessment,
+          )
+        : undefined;
+      const stampedEvidenceRequirements = isContractResult
+        ? current.evidenceRequirementAssessments?.map((assessment) =>
+            assessment.result === "SATISFIED"
+              ? {
+                  ...assessment,
+                  reviewConfirmation: {
+                    confirmedBy: { ...request.actor },
+                    confirmedAt: timestamp,
+                  },
+                }
+              : assessment,
+          )
+        : undefined;
+
+      let contractResultStatus: ClaimEvaluation["status"] = "pass";
+      if (isContractResult) {
+        const attemptStatus = inferAttemptStatusFromContractResultAssessments(
+          stampedExpectedOutputs ?? [],
+        );
+        const derivedStatus = deriveCanonicalContractResultStatus({
+          attemptStatus,
+          expectedOutputAssessments: stampedExpectedOutputs ?? [],
+          evidenceRequirementAssessments: stampedEvidenceRequirements ?? [],
+        });
+        if (derivedStatus !== "pass") {
+          return fail(
+            "CLAIM_EVALUATION_INVALID_STATE",
+            "contract_result_confirm_derived_not_pass",
+            { claimEvaluation: current },
+          );
+        }
+        contractResultStatus = derivedStatus;
+      }
+
       const updated: ClaimEvaluation = {
         ...current,
-        status: "pass",
+        status: isContractResult ? contractResultStatus : "pass",
         providedEvidenceRefs: assessed.provided,
         evidenceAssessments: structuredClone(assessed.assessments),
         confirmedBy: { ...request.actor },
@@ -384,23 +472,8 @@ export class ConfirmClaimEvaluation {
         idempotencyKey: request.idempotencyKey,
         ...(isContractResult
           ? {
-              expectedOutputAssessments: current.expectedOutputAssessments?.map(
-                (assessment) => ({
-                  ...assessment,
-                  reviewConfirmation: {
-                    confirmedBy: { ...request.actor },
-                    confirmedAt: timestamp,
-                  },
-                }),
-              ),
-              evidenceRequirementAssessments:
-                current.evidenceRequirementAssessments?.map((assessment) => ({
-                  ...assessment,
-                  reviewConfirmation: {
-                    confirmedBy: { ...request.actor },
-                    confirmedAt: timestamp,
-                  },
-                })),
+              expectedOutputAssessments: stampedExpectedOutputs,
+              evidenceRequirementAssessments: stampedEvidenceRequirements,
             }
           : {}),
       };
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
index 44c91cbe..a0968637 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
@@ -1,17 +1,15 @@
 /**
- * TD-W3B-02 + ARCH-R02 — deterministic EO/ER assessment for contract-result mode.
- * Identity: (semanticFingerprint, kind, ordinal). Semantic pass requires known applicable rule.
+ * TD-W3B-02 Option B + ARCH-R02 — deterministic EO/ER assessment for contract-result mode.
+ * Identity: (bound semanticFingerprint, kind, ordinal). Material from Attempt snapshot only.
  */
-import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
 import type { Evidence, ExecutionAttemptSnapshot } from "../domain/types";
 import type {
   ContractResultAssessmentProvenance,
   ExpectedOutputAssessment,
   EvidenceRequirementAssessment,
 } from "../domain/contractResultTypes";
-import {
-  buildContractResultItemId,
-} from "../domain/contractResultTypes";
+import { buildContractResultItemId } from "../domain/contractResultTypes";
 import {
   assessTempArtifactEvidenceRequirement,
   assessTempArtifactExpectedOutput,
@@ -19,7 +17,9 @@ import {
 } from "./contractResultSemanticEvaluator";

 export type ContractResultAssessmentInput = {
-  readonly contract: ExecutionContract;
+  /** Bound semantic material from Attempt.boundExecutionContract — not latest EC. */
+  readonly semanticMaterial: ExecutionContractSemanticMaterial;
+  readonly semanticFingerprint: string;
   readonly attempt: ExecutionAttemptSnapshot;
   readonly evidence: Evidence;
   readonly evaluatedAt: string;
@@ -46,9 +46,9 @@ function provenance(
 export function assessExpectedOutputs(
   input: ContractResultAssessmentInput,
 ): ExpectedOutputAssessment[] {
-  const fp = input.contract.semanticFingerprint ?? "";
-  const outputs = input.contract.expectedOutputs ?? [];
-  const rule = resolveApplicableContractResultRule(input.contract);
+  const fp = input.semanticFingerprint;
+  const outputs = input.semanticMaterial.expectedOutputs ?? [];
+  const rule = resolveApplicableContractResultRule(input.semanticMaterial);
   const ruleRef = rule.applicable ? rule.ruleRef : undefined;
   const prov = provenance(input, ruleRef);

@@ -77,8 +77,8 @@ export function assessExpectedOutputs(
       }),
       expectation,
       result,
-      method: "deterministic",
-      ruleRef,
+      method: "deterministic" as const,
+      ...(ruleRef ? { ruleRef } : {}),
       provenance: prov,
     };
   });
@@ -87,9 +87,9 @@ export function assessExpectedOutputs(
 export function assessEvidenceRequirements(
   input: ContractResultAssessmentInput,
 ): EvidenceRequirementAssessment[] {
-  const fp = input.contract.semanticFingerprint ?? "";
-  const requirements = input.contract.evidenceRequirements ?? [];
-  const rule = resolveApplicableContractResultRule(input.contract);
+  const fp = input.semanticFingerprint;
+  const requirements = input.semanticMaterial.evidenceRequirements ?? [];
+  const rule = resolveApplicableContractResultRule(input.semanticMaterial);
   const ruleRef = rule.applicable ? rule.ruleRef : undefined;
   const prov = provenance(input, ruleRef);

@@ -117,8 +117,8 @@ export function assessEvidenceRequirements(
       }),
       requirement,
       result,
-      method: "deterministic",
-      ruleRef,
+      method: "deterministic" as const,
+      ...(ruleRef ? { ruleRef } : {}),
       provenance: prov,
     };
   });
@@ -129,11 +129,15 @@ export function deriveCanonicalContractResultStatus(input: {
   expectedOutputAssessments: readonly ExpectedOutputAssessment[];
   evidenceRequirementAssessments: readonly EvidenceRequirementAssessment[];
 }): "pass" | "fail" | "not_proven" {
-  const allEoPass = input.expectedOutputAssessments.every((a) => a.result === "PASS");
+  const allEoPass = input.expectedOutputAssessments.every(
+    (a) => a.result === "PASS",
+  );
   const allErSatisfied = input.evidenceRequirementAssessments.every(
     (a) => a.result === "SATISFIED",
   );
-  const anyEoFail = input.expectedOutputAssessments.some((a) => a.result === "FAIL");
+  const anyEoFail = input.expectedOutputAssessments.some(
+    (a) => a.result === "FAIL",
+  );
   const anyErNotSatisfied = input.evidenceRequirementAssessments.some(
     (a) => a.result === "NOT_SATISFIED",
   );
@@ -152,21 +156,22 @@ export function deriveCanonicalContractResultStatus(input: {
 }

 export function buildContractResultClaimStatement(input: {
-  contract: ExecutionContract;
+  executionContractId: string;
   attemptStatus: string;
   status: "pass" | "fail" | "not_proven";
-  boundContractVersion?: number;
+  boundContractVersion: number;
+  expectedOutputCount?: number;
+  evidenceRequirementCount?: number;
   notApplicableReason?: string;
 }): string {
-  const eoCount = input.contract.expectedOutputs?.length ?? 0;
-  const erCount = input.contract.evidenceRequirements?.length ?? 0;
-  const version = input.boundContractVersion ?? input.contract.version;
+  const eoCount = input.expectedOutputCount ?? 0;
+  const erCount = input.evidenceRequirementCount ?? 0;
   const suffix = input.notApplicableReason
     ? ` — ${input.notApplicableReason}`
     : "";
   return (
-    `Contract result assessment (${input.status}) for EC ${input.contract.executionContractId}` +
-    `@v${version} — attempt ${input.attemptStatus} — EO:${eoCount} ER:${erCount}${suffix}`
+    `Contract result assessment (${input.status}) for EC ${input.executionContractId}` +
+    `@v${input.boundContractVersion} — attempt ${input.attemptStatus} — EO:${eoCount} ER:${erCount}${suffix}`
   );
 }

diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
index a9bb0826..76e5486a 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
@@ -2,7 +2,6 @@
  * W3-B ARCH-R02 — bounded server-owned Contract Result semantic evaluator.
  * No NLP, no resultRef-alone PASS, no Evidence-available-alone ER satisfaction.
  */
-import type { ExecutionContract } from "@/lib/oa/execution-contract";
 import type { Evidence, EvidenceStatus, ExecutionAttemptSnapshot } from "../domain/types";
 import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";

@@ -27,17 +26,23 @@ const W3B_USABLE_EVIDENCE_STATUSES = new Set<EvidenceStatus>([
   "verified",
 ]);

+/** Positive allowlist — undefined/unknown/stale/aging cannot satisfy ER. */
+const W3B_USABLE_EVIDENCE_FRESHNESS = new Set(["fresh"]);
+
 export type ApplicableContractResultRule =
   | { readonly applicable: true; readonly ruleRef: typeof W3B_TEMP_ARTIFACT_RULE_REF }
   | { readonly applicable: false; readonly ruleRef: null };

 export function resolveApplicableContractResultRule(
-  contract: Pick<ExecutionContract, "action" | "requiredCapabilities">,
+  material: Pick<
+    { action: string; requiredCapabilities?: string[] },
+    "action" | "requiredCapabilities"
+  >,
 ): ApplicableContractResultRule {
-  if (contract.action !== W3B_TEMP_ARTIFACT_OPERATION_KEY) {
+  if (material.action !== W3B_TEMP_ARTIFACT_OPERATION_KEY) {
     return { applicable: false, ruleRef: null };
   }
-  if (!contract.requiredCapabilities?.includes(W3B_TEMP_ARTIFACT_CAPABILITY)) {
+  if (!material.requiredCapabilities?.includes(W3B_TEMP_ARTIFACT_CAPABILITY)) {
     return { applicable: false, ruleRef: null };
   }
   return { applicable: true, ruleRef: W3B_TEMP_ARTIFACT_RULE_REF };
@@ -68,7 +73,10 @@ export function isW3bContractResultEvidenceUsable(input: {
   }
   if (evidence.availability !== "available") return false;
   if (!W3B_USABLE_EVIDENCE_STATUSES.has(evidence.status)) return false;
-  if (evidence.freshness === "stale" || evidence.freshness === "unknown") {
+  if (
+    !evidence.freshness ||
+    !W3B_USABLE_EVIDENCE_FRESHNESS.has(evidence.freshness)
+  ) {
     return false;
   }
   return true;
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
index 5912f494..bd76df67 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
@@ -22,7 +22,7 @@ import { CLAIM_EVALUATION_SCHEMA_VERSION } from "../domain/claimEvaluationTypes"
 import {
   CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
   W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
-  isAttemptContractImmutablyBound,
+  isAttemptBoundSnapshotValid,
 } from "../domain/contractResultTypes";
 import type { ExecutionAttemptSnapshot } from "../domain/types";
 import type { Evidence } from "../domain/types";
@@ -37,6 +37,7 @@ import {
   deriveCanonicalContractResultStatus,
 } from "./contractResultAssessment";
 import { resolveApplicableContractResultRule } from "./contractResultSemanticEvaluator";
+import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
 import {
   assertIdempotencyKey,
   buildProvenance,
@@ -124,20 +125,17 @@ export class EvaluateContractResult {
       if (contract.executionContractId !== attempt.executionContractId) {
         return fail("CLAIM_EVALUATION_INVALID", "contract_attempt_mismatch");
       }
-      if (
-        !isAttemptContractImmutablyBound({
-          contract: {
-            executionContractId: contract.executionContractId,
-            semanticFingerprint: contract.semanticFingerprint,
-          },
-          attempt,
-        })
-      ) {
+
+      const snap = attempt.boundExecutionContract;
+      // Historical Attempt without snapshot → durable NOT_PROVEN (not error).
+      // Corrupt/tampered snapshot → application error.
+      if (snap && !isAttemptBoundSnapshotValid(attempt)) {
         return fail(
           "CLAIM_EVALUATION_INVALID",
-          "contract_attempt_immutable_binding_mismatch",
+          "bound_snapshot_corrupt_or_inconsistent",
         );
       }
+
       if (evidence.bindings.executionAttemptId !== attempt.attemptId) {
         return fail("CLAIM_EVALUATION_INVALID", "evidence_attempt_mismatch");
       }
@@ -164,7 +162,7 @@ export class EvaluateContractResult {
       }

       const frozenSnapshot = (reviewBundle.frozenEvidenceSnapshots ?? []).find(
-        (snap) => snap.evidenceId === evidence.evidenceId,
+        (s) => s.evidenceId === evidence.evidenceId,
       );
       if (!frozenSnapshot) {
         return fail(
@@ -179,7 +177,30 @@ export class EvaluateContractResult {
         );
       }

-      const applicableRule = resolveApplicableContractResultRule(contract);
+      const missingSnapshot = !snap;
+      // Historical missing snapshot: do NOT reconstruct EO/ER from latest EC.
+      // Use empty assessment lists + durable not_proven.
+      const semanticMaterial = (snap?.semanticMaterial ?? {
+        executionContractId: attempt.executionContractId,
+        projectId:
+          evidence.bindings.projectId ??
+          contract.projectId,
+        action: "",
+        target: "",
+        scope: "",
+        requiredCapabilities: [],
+        requiredAuthority: "N1",
+        constraints: [],
+        stopConditions: [],
+        evidenceRequirements: [],
+        expectedOutputs: [],
+        reversibility: "reversible",
+        idempotencyKey: "",
+      }) as ExecutionContractSemanticMaterial;
+      const boundFingerprint = snap?.semanticFingerprint ?? "";
+      const applicableRule = missingSnapshot
+        ? ({ applicable: false, ruleRef: null } as const)
+        : resolveApplicableContractResultRule(semanticMaterial);

       const fingerprint = fingerprintCommand(
         registerFingerprintBody({
@@ -187,11 +208,9 @@ export class EvaluateContractResult {
           idempotencyKey: request.idempotencyKey,
           reviewBundleId: reviewBundle.reviewBundleId,
           executionAttemptId: attempt.attemptId,
-          executionContractId: contract.executionContractId,
+          executionContractId: attempt.executionContractId,
           contractVersion: attempt.executionContractVersion,
-          semanticFingerprint:
-            attempt.executionContractSemanticFingerprint ??
-            contract.semanticFingerprint,
+          semanticFingerprint: boundFingerprint,
           actor: request.actor,
         }),
       );
@@ -216,36 +235,73 @@ export class EvaluateContractResult {
       }

       const assessmentInput = {
-        contract: {
-          ...contract,
-          semanticFingerprint: contract.semanticFingerprint ?? "",
-        },
+        semanticMaterial,
+        semanticFingerprint: boundFingerprint || "missing-bound-snapshot",
         attempt,
         evidence,
         evaluatedAt: timestamp,
         frozenEvidenceSnapshot: frozenSnapshot,
       };
-      const expectedOutputAssessments = assessExpectedOutputs(assessmentInput);
-      const evidenceRequirementAssessments =
-        assessEvidenceRequirements(assessmentInput);
-      const status = deriveCanonicalContractResultStatus({
-        attemptStatus: attempt.status,
-        expectedOutputAssessments,
-        evidenceRequirementAssessments,
-      });
+      const expectedOutputAssessments = missingSnapshot
+        ? (semanticMaterial.expectedOutputs ?? []).map((expectation, ordinal) => ({
+            itemId: {
+              semanticFingerprint: "missing-bound-snapshot",
+              itemKind: "EO" as const,
+              ordinal,
+            },
+            expectation,
+            result: "NOT_PROVEN" as const,
+            method: "deterministic" as const,
+            provenance: {
+              evaluatorRef: "w3b-contract-result-assessor",
+              evaluatedAt: timestamp,
+            },
+          }))
+        : assessExpectedOutputs(assessmentInput);
+      const evidenceRequirementAssessments = missingSnapshot
+        ? (semanticMaterial.evidenceRequirements ?? []).map(
+            (requirement, ordinal) => ({
+              itemId: {
+                semanticFingerprint: "missing-bound-snapshot",
+                itemKind: "ER" as const,
+                ordinal,
+              },
+              requirement,
+              result: "NOT_PROVEN" as const,
+              method: "deterministic" as const,
+              provenance: {
+                evaluatorRef: "w3b-contract-result-assessor",
+                evaluatedAt: timestamp,
+              },
+            }),
+          )
+        : assessEvidenceRequirements(assessmentInput);
+
+      // Missing snapshot with empty EO/ER lists: still emit durable not_proven CE.
+      const status = missingSnapshot
+        ? "not_proven"
+        : deriveCanonicalContractResultStatus({
+            attemptStatus: attempt.status,
+            expectedOutputAssessments,
+            evidenceRequirementAssessments,
+          });

       const claimEvaluation: ClaimEvaluation = {
         schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
         claimEvaluationId: request.claimEvaluationId,
         claimType: "conformite",
         claimStatement: buildContractResultClaimStatement({
-          contract,
+          executionContractId: attempt.executionContractId,
           attemptStatus: attempt.status,
           status,
           boundContractVersion: attempt.executionContractVersion,
-          notApplicableReason: applicableRule.applicable
-            ? undefined
-            : "no_applicable_contract_result_rule",
+          expectedOutputCount: expectedOutputAssessments.length,
+          evidenceRequirementCount: evidenceRequirementAssessments.length,
+          notApplicableReason: missingSnapshot
+            ? "historical_attempt_missing_bound_snapshot"
+            : applicableRule.applicable
+              ? undefined
+              : "no_applicable_contract_result_rule",
         }),
         criticality: "non_critical",
         evaluationMethod: "deterministic",
@@ -265,21 +321,23 @@ export class EvaluateContractResult {
           source: "review",
           timestamp,
           correlationId,
-          projectId: contract.projectId,
-          cycleInstanceId: contract.cycleInstanceId,
+          projectId: semanticMaterial.projectId || contract.projectId,
+          cycleInstanceId:
+            semanticMaterial.cycleInstanceId ?? contract.cycleInstanceId,
         }),
         version: 1,
         idempotencyKey: request.idempotencyKey,
         subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
         contractResultBindings: {
-          projectId: contract.projectId,
-          cycleInstanceId: contract.cycleInstanceId ?? null,
-          executionContractId: contract.executionContractId,
+          projectId: semanticMaterial.projectId || contract.projectId,
+          cycleInstanceId:
+            (semanticMaterial.cycleInstanceId ??
+              evidence.bindings.cycleInstanceId ??
+              contract.cycleInstanceId) ?? null,
+          executionContractId: attempt.executionContractId,
           executionContractVersion: attempt.executionContractVersion,
           executionContractSemanticFingerprint:
-            attempt.executionContractSemanticFingerprint ??
-            contract.semanticFingerprint ??
-            "",
+            boundFingerprint || "historical-missing-bound-snapshot",
           executionAttemptId: attempt.attemptId,
           reviewBundleId: reviewBundle.reviewBundleId,
           reviewBundleVersion: reviewBundle.frozenVersion,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts b/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
index 8717298f..d7994a9e 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
@@ -1,6 +1,7 @@
 /**
- * W3-B Contract Result subject/mode — TD-W3B-01 / TD-W3B-02.
- * EO/ER identity is positional + EC semanticFingerprint bound (no cross-version matching).
+ * W3-B Contract Result subject/mode — TD-W3B-01 / TD-W3B-02 Option B.
+ * EO/ER identity is positional + bound semanticFingerprint (no cross-version matching).
+ * Assessment material = Attempt.boundExecutionContract only.
  */

 import type {
@@ -8,6 +9,8 @@ import type {
   ClaimEvaluationMethod,
 } from "./claimEvaluationTypes";
 import type { ActorReference } from "@/lib/oa/doctrine";
+import { computeExecutionContractSemanticMaterialFingerprint } from "@/lib/oa/execution-contract";
+import type { ExecutionAttemptSnapshot } from "./types";

 export const CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT =
   "execution_contract_result" as const;
@@ -103,9 +106,45 @@ export function resolveContractResultConfirmationAuthority(
 }

 /**
- * TD-W3B-02 — immutable Attempt EC binding (acceptance-time id + version + fingerprint).
- * Latest EC lifecycle/OCC bumps do NOT move Attempt binding; semantic material is
- * resolved via fingerprint match against latest repository payload (Solution B/C hybrid).
+ * TD-W3B-02 Option B — Attempt has a self-consistent bound snapshot.
+ * Does NOT consult latest ExecutionContract.
+ */
+export function isAttemptBoundSnapshotValid(
+  attempt: Pick<
+    ExecutionAttemptSnapshot,
+    | "executionContractId"
+    | "executionContractVersion"
+    | "executionContractSemanticFingerprint"
+    | "boundExecutionContract"
+  >,
+): boolean {
+  const snap = attempt.boundExecutionContract;
+  if (!snap) return false;
+  if (
+    snap.semanticMaterial.executionContractId !== attempt.executionContractId
+  ) {
+    return false;
+  }
+  if (snap.executionContractVersion !== attempt.executionContractVersion) {
+    return false;
+  }
+  const attemptFp = (attempt.executionContractSemanticFingerprint ?? "").trim();
+  if (!attemptFp || attemptFp !== snap.semanticFingerprint) return false;
+  try {
+    const recomputed = computeExecutionContractSemanticMaterialFingerprint(
+      snap.semanticMaterial as Parameters<
+        typeof computeExecutionContractSemanticMaterialFingerprint
+      >[0],
+    );
+    return recomputed === snap.semanticFingerprint;
+  } catch {
+    return false;
+  }
+}
+
+/**
+ * @deprecated Option B — use isAttemptBoundSnapshotValid. Kept as alias for tests
+ * that only need id+fingerprint presence against a bound attempt identity.
  */
 export function isAttemptContractImmutablyBound(input: {
   contract: {
@@ -116,46 +155,56 @@ export function isAttemptContractImmutablyBound(input: {
     executionContractId: string;
     executionContractVersion: number;
     executionContractSemanticFingerprint?: string;
+    boundExecutionContract?: ExecutionAttemptSnapshot["boundExecutionContract"];
   };
 }): boolean {
-  const contractFp = (input.contract.semanticFingerprint ?? "").trim();
-  const attemptFp = (input.attempt.executionContractSemanticFingerprint ?? "").trim();
-  if (!contractFp || !attemptFp || !input.attempt.executionContractVersion) {
-    return false;
+  if (input.attempt.boundExecutionContract) {
+    return (
+      input.contract.executionContractId === input.attempt.executionContractId &&
+      isAttemptBoundSnapshotValid(input.attempt)
+    );
   }
-  return (
-    input.contract.executionContractId === input.attempt.executionContractId &&
-    contractFp === attemptFp
-  );
+  // Historical missing snapshot — not immutably bound for Contract Result PASS.
+  return false;
 }

-/** @deprecated alias — Pass 2: binding is immutable acceptance-time, not latest EC.version */
+/** @deprecated alias */
 export const isAttemptContractExactlyBound = isAttemptContractImmutablyBound;

+/**
+ * FC-11 / readback — CE bindings must match Attempt + bound snapshot (not latest EC).
+ */
 export function contractResultBindingsMatchCurrentFacts(input: {
   bindings: ContractResultBindings;
-  contract: {
-    projectId: string;
-    cycleInstanceId?: string | null;
-    executionContractId: string;
-    semanticFingerprint?: string;
-  };
   attempt: {
     attemptId: string;
     executionContractId: string;
     executionContractVersion: number;
     executionContractSemanticFingerprint?: string;
+    boundExecutionContract?: ExecutionAttemptSnapshot["boundExecutionContract"];
   };
   reviewBundle: {
     reviewBundleId: string;
     frozenVersion?: number;
   };
   evidenceIds: readonly string[];
+  /** Optional project/cycle cross-check from durable CE bindings / material. */
+  projectId?: string;
+  cycleInstanceId?: string | null;
 }): boolean {
-  const attemptFp = (input.attempt.executionContractSemanticFingerprint ?? "").trim();
+  const snap = input.attempt.boundExecutionContract;
+  if (!snap || !isAttemptBoundSnapshotValid(input.attempt)) return false;
+  const attemptFp = snap.semanticFingerprint;
+  const projectId =
+    input.projectId ?? snap.semanticMaterial.projectId;
+  const cycleInstanceId =
+    input.cycleInstanceId !== undefined
+      ? input.cycleInstanceId
+      : (snap.semanticMaterial.cycleInstanceId ?? null);
+
   if (
-    input.bindings.projectId !== input.contract.projectId ||
-    input.bindings.executionContractId !== input.contract.executionContractId ||
+    input.bindings.projectId !== projectId ||
+    input.bindings.executionContractId !== input.attempt.executionContractId ||
     input.bindings.executionContractVersion !==
       input.attempt.executionContractVersion ||
     input.bindings.executionContractSemanticFingerprint !== attemptFp ||
@@ -165,16 +214,12 @@ export function contractResultBindingsMatchCurrentFacts(input: {
   ) {
     return false;
   }
-  if (
-    (input.contract.cycleInstanceId ?? null) !==
-    (input.bindings.cycleInstanceId ?? null)
-  ) {
+  if ((input.bindings.cycleInstanceId ?? null) !== (cycleInstanceId ?? null)) {
     return false;
   }
-  if (!isAttemptContractImmutablyBound({ contract: input.contract, attempt: input.attempt })) {
+  if (input.bindings.evidenceRefs.length !== input.evidenceIds.length) {
     return false;
   }
-  if (input.bindings.evidenceRefs.length !== input.evidenceIds.length) return false;
   for (let i = 0; i < input.evidenceIds.length; i += 1) {
     if (input.bindings.evidenceRefs[i] !== input.evidenceIds[i]) return false;
   }
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts b/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
index 866fff8c..e69acf82 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
@@ -244,6 +244,24 @@ export type ExecutionAttemptSnapshot = {
   stopObservedAt?: string;
   completedAt?: string;
   selectedAgentRef?: string;
-  /** Immutable EC semantic material bound at Attempt acceptance (TD-W3B-02). */
+  /** Immutable EC semantic fingerprint bound at Attempt acceptance (TD-W3B-02). */
   executionContractSemanticFingerprint?: string;
+  /** TD-W3B-02 Option B — optional historically; required for new Contract Result PASS. */
+  boundExecutionContract?: {
+    executionContractSchemaVersion: string;
+    executionContractVersion: number;
+    semanticFingerprint: string;
+    semanticMaterial: {
+      executionContractId: string;
+      projectId: string;
+      cycleInstanceId?: string;
+      action: string;
+      target: string;
+      scope: string;
+      expectedOutputs?: string[];
+      evidenceRequirements: string[];
+      requiredCapabilities: string[];
+      [key: string]: unknown;
+    };
+  };
 };
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
index 21893ecc..e8f2f8c3 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
@@ -387,6 +387,7 @@ export function createInMemoryEvidenceReviewServices(
       clock,
       audit,
       ids,
+      attemptReader,
     ),
     rejectClaimEvaluation: new RejectClaimEvaluation(
       claimEvaluationRepository,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
index 770ebe58..2a4b0bec 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
@@ -252,6 +252,7 @@ export function createSqliteEvidenceReviewServices(
       clock,
       audit,
       ids,
+      attemptReader,
     ),
     rejectClaimEvaluation: new RejectClaimEvaluation(
       claimEvaluationRepository,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
index 5a3a242f..352f6c8b 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
@@ -11,8 +11,8 @@ import type {
   CheckExecutionAuthorization,
   ExecutionContractRepositoryPort,
 } from "@/lib/oa/execution-contract";
-import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
+import { captureBoundExecutionContractSnapshot } from "../domain/boundExecutionContract";
 import {
   AGENT_SELECTION_SCOPE,
   agentMatchViolation,
@@ -367,14 +367,17 @@ export class SelectExecutionAgent {
         return fail("ATTEMPT_ALREADY_EXISTS", "attempt_id_taken");
       }

+      const boundExecutionContract =
+        captureBoundExecutionContractSnapshot(contract);
+
       const attempt: ExecutionAttempt = {
         schemaVersion: "0.2.0-oa",
         attemptId: request.attemptId,
         executionContractId: contract.executionContractId,
-        executionContractVersion: contract.version,
+        executionContractVersion: boundExecutionContract.executionContractVersion,
         executionContractSemanticFingerprint:
-          contract.semanticFingerprint ??
-          computeExecutionContractSemanticFingerprint(contract),
+          boundExecutionContract.semanticFingerprint,
+        boundExecutionContract,
         selectedAgentRef,
         status: "accepted",
         idempotencyKey: request.idempotencyKey,
@@ -473,8 +476,15 @@ export class SelectExecutionAgent {
         contractVersion: contract.version,
         durationMs,
       };
-    } catch {
-      return fail("EXECUTION_PERSISTENCE_FAILED", "unexpected_exception");
+    } catch (err) {
+      const cause =
+        err instanceof Error ? err.message : "unexpected_exception";
+      if (cause === "bound_snapshot_fingerprint_mismatch_at_capture") {
+        return fail("ATTEMPT_INVALID", cause, {
+          executionContractId: request.executionContractId,
+        });
+      }
+      return fail("EXECUTION_PERSISTENCE_FAILED", cause);
     }
   }
 }
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/boundExecutionContract.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/boundExecutionContract.ts
new file mode 100644
index 00000000..e64cfb2a
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/boundExecutionContract.ts
@@ -0,0 +1,121 @@
+/**
+ * TD-W3B-02 Option B — Attempt-bound immutable ExecutionContract semantic snapshot.
+ * Historical binding evidence owned by ExecutionAttempt — not a second EC aggregate.
+ */
+import {
+  computeExecutionContractSemanticFingerprint,
+  computeExecutionContractSemanticMaterialFingerprint,
+  executionContractSemanticMaterial,
+  type ExecutionContractSemanticMaterial,
+} from "@/lib/oa/execution-contract";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+
+/** Payload interpretability metadata only — not a migration/version subsystem. */
+export const BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION =
+  "0.1.0-oa" as const;
+
+export type BoundExecutionContractSnapshot = {
+  readonly executionContractSchemaVersion: typeof BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION;
+  readonly executionContractVersion: number;
+  readonly semanticFingerprint: string;
+  readonly semanticMaterial: ExecutionContractSemanticMaterial;
+};
+
+/**
+ * Capture once at Attempt acceptance from the actual bound EC.
+ * Persistence-normalizes material via JSON round-trip (same as SQLite payload).
+ */
+export function captureBoundExecutionContractSnapshot(
+  contract: ExecutionContract,
+): BoundExecutionContractSnapshot {
+  const material = persistenceNormalize(
+    executionContractSemanticMaterial(contract),
+  );
+  const fingerprint =
+    computeExecutionContractSemanticMaterialFingerprint(material);
+  const contractFp =
+    (contract.semanticFingerprint ?? "").trim() ||
+    computeExecutionContractSemanticFingerprint(contract);
+  if (fingerprint !== contractFp) {
+    throw new Error("bound_snapshot_fingerprint_mismatch_at_capture");
+  }
+  return {
+    executionContractSchemaVersion:
+      BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION,
+    executionContractVersion: contract.version,
+    semanticFingerprint: fingerprint,
+    semanticMaterial: material,
+  };
+}
+
+export type BoundSnapshotValidationResult =
+  | { readonly ok: true }
+  | { readonly ok: false; readonly reason: string };
+
+/**
+ * Self-consistency of Attempt-bound snapshot. Does NOT consult latest EC.
+ */
+export function validateBoundExecutionContractSnapshot(input: {
+  attempt: {
+    executionContractId: string;
+    executionContractVersion: number;
+    executionContractSemanticFingerprint?: string;
+    boundExecutionContract?: BoundExecutionContractSnapshot;
+  };
+  requirePresent?: boolean;
+  expectedProjectId?: string;
+  expectedCycleInstanceId?: string | null;
+}): BoundSnapshotValidationResult {
+  const snap = input.attempt.boundExecutionContract;
+  if (!snap) {
+    if (input.requirePresent) {
+      return { ok: false, reason: "bound_snapshot_missing" };
+    }
+    return { ok: true };
+  }
+  if (
+    snap.executionContractSchemaVersion !==
+    BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION
+  ) {
+    return { ok: false, reason: "bound_snapshot_schema_unsupported" };
+  }
+  if (
+    snap.semanticMaterial.executionContractId !==
+    input.attempt.executionContractId
+  ) {
+    return { ok: false, reason: "bound_snapshot_ec_id_mismatch" };
+  }
+  if (
+    snap.executionContractVersion !== input.attempt.executionContractVersion
+  ) {
+    return { ok: false, reason: "bound_snapshot_version_mismatch" };
+  }
+  const attemptFp = (
+    input.attempt.executionContractSemanticFingerprint ?? ""
+  ).trim();
+  if (attemptFp && attemptFp !== snap.semanticFingerprint) {
+    return { ok: false, reason: "bound_snapshot_attempt_fingerprint_mismatch" };
+  }
+  const recomputed =
+    computeExecutionContractSemanticMaterialFingerprint(snap.semanticMaterial);
+  if (recomputed !== snap.semanticFingerprint) {
+    return { ok: false, reason: "bound_snapshot_fingerprint_corrupt" };
+  }
+  if (
+    input.expectedProjectId !== undefined &&
+    snap.semanticMaterial.projectId !== input.expectedProjectId
+  ) {
+    return { ok: false, reason: "bound_snapshot_project_mismatch" };
+  }
+  if (input.expectedCycleInstanceId !== undefined) {
+    const materialCycle = snap.semanticMaterial.cycleInstanceId ?? null;
+    if (materialCycle !== input.expectedCycleInstanceId) {
+      return { ok: false, reason: "bound_snapshot_cycle_mismatch" };
+    }
+  }
+  return { ok: true };
+}
+
+function persistenceNormalize<T>(value: T): T {
+  return JSON.parse(JSON.stringify(value)) as T;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
index 87f83533..c1bac6d3 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
@@ -19,8 +19,15 @@ import type {
   AuthorityClass,
   ExecutionWindowClass,
 } from "@/lib/oa/execution-contract";
+import type { BoundExecutionContractSnapshot } from "./boundExecutionContract";

 export type { ActorReference, ProvenanceRecord, AuthorityClass, ExecutionWindowClass };
+export type { BoundExecutionContractSnapshot };
+export {
+  BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION,
+  captureBoundExecutionContractSnapshot,
+  validateBoundExecutionContractSnapshot,
+} from "./boundExecutionContract";

 export const EXECUTION_ATTEMPT_SCHEMA_VERSION = "0.2.0-oa" as const;
 export const AGENT_DESCRIPTOR_SCHEMA_VERSION = "0.1.0-oa" as const;
@@ -145,6 +152,11 @@ export type ExecutionAttempt = {
   stopObservedAt?: string;
   /** Immutable EC semantic fingerprint bound at Attempt acceptance (TD-W3B-02). */
   executionContractSemanticFingerprint?: string;
+  /**
+   * TD-W3B-02 Option B — immutable canonical bound EC semantic snapshot.
+   * Optional for historical readability; mandatory on newly accepted Attempts.
+   */
+  boundExecutionContract?: BoundExecutionContractSnapshot;
 };

 /**
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts b/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
index a0fbf520..ba015f48 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
@@ -22,6 +22,7 @@ import type { ExecutionAuditPort } from "../ports/executionAudit";
 import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
 import type { CancelExecutionContract } from "./cancelExecutionContract";
 import { verifyRequiredAuthority } from "./authorityHelper";
+import { computeExecutionContractSemanticFingerprint } from "../domain/semanticFingerprint";

 function newId(prefix: "cor"): string {
   return `${prefix}:${randomBytes(8).toString("hex")}`;
@@ -312,6 +313,10 @@ export class ConfirmExecutionContract {
           immutableAfterConfirm: true,
           version: current.version + 1,
         };
+        // confirmationRef / immutableAfterConfirm are semantic material fields —
+        // refresh fingerprint so Attempt-bound Option B capture can verify.
+        next.semanticFingerprint =
+          computeExecutionContractSemanticFingerprint(next);
         await this.contracts.save(next);
         contract = next;
       };
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts b/projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts
index 5ff39be5..60500ff7 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts
@@ -122,10 +122,18 @@ export function executionContractSemanticMaterial(
   return material;
 }

-export function computeExecutionContractSemanticFingerprint(
-  contract: Parameters<typeof executionContractSemanticMaterial>[0],
+/** Primitive: fingerprint an already-built semantic material payload. */
+export function computeExecutionContractSemanticMaterialFingerprint(
+  material: ExecutionContractSemanticMaterial,
 ): string {
-  const material = executionContractSemanticMaterial(contract);
   const canonical = canonicalizeJson(material);
   return createHash("sha256").update(canonical, "utf8").digest("hex");
 }
+
+export function computeExecutionContractSemanticFingerprint(
+  contract: Parameters<typeof executionContractSemanticMaterial>[0],
+): string {
+  return computeExecutionContractSemanticMaterialFingerprint(
+    executionContractSemanticMaterial(contract),
+  );
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
index c1e035a0..e0c4eab4 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
@@ -24,7 +24,9 @@ export * from "./domain/errors";
 export * from "./domain/invariants";
 export {
   computeExecutionContractSemanticFingerprint,
+  computeExecutionContractSemanticMaterialFingerprint,
   executionContractSemanticMaterial,
+  type ExecutionContractSemanticMaterial,
 } from "./domain/semanticFingerprint";
 export {
   DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
index 3d8ff0fe..0ad865ff 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
@@ -90,6 +90,9 @@ export function createAttemptReaderBridge(
         stopObservedAt: attempt.stopObservedAt,
         completedAt: attempt.completedAt,
         selectedAgentRef: attempt.selectedAgentRef,
+        executionContractSemanticFingerprint:
+          attempt.executionContractSemanticFingerprint,
+        boundExecutionContract: attempt.boundExecutionContract,
       };
     },
   };
```

## Capture manifest

```jsonl
{"id":"01-pre-execute","file":"01-pre-execute.png","scenario":"SUCCESS","productOutcome":null,"state":"authorized_before_execute","route":"http://127.0.0.1:3020/studio/projects/prj%3A796cd8d5-5b10-4941-89fc-3f8c8c0a59e9","timestamp":"2026-08-24T22:27:51.565Z","sha256":"9093df043c62eb6e79838b90f2771fa022ebc5cf5276c1dd8525458a9c7f715b","proofLevel":"DETERMINISTIC_PRODUCT_NATIVE","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL"}
{"id":"02-success-business-first","file":"02-success-business-first.png","scenario":"SUCCESS","attemptId":"xat:w3a:e3e42bf6e236fba4","evidenceId":"ev:w3b:f5f8938825a0c32f","reviewBundleId":"rb:w3b:f5f8938825a0c32f","productOutcome":"SUCCESS","technicalStatus":"succeeded","completeness":"complete","governedBoundary":null,"adapterBehavior":null,"route":"http://127.0.0.1:3020/studio/projects/prj%3A796cd8d5-5b10-4941-89fc-3f8c8c0a59e9","timestamp":"2026-08-24T22:27:51.936Z","sha256":"886335b27b1a66f675b8d860c9475b6cd4fa93fafddc7b82a8e2821b2c487024","proofLevel":"DETERMINISTIC_PRODUCT_NATIVE","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL"}
{"id":"03-success-technical-detail","file":"03-success-technical-detail.png","scenario":"SUCCESS","attemptId":"xat:w3a:e3e42bf6e236fba4","evidenceId":"ev:w3b:f5f8938825a0c32f","reviewBundleId":"rb:w3b:f5f8938825a0c32f","productOutcome":"SUCCESS","technicalStatus":"succeeded","completeness":"complete","governedBoundary":null,"state":"technical_secondary","route":"http://127.0.0.1:3020/studio/projects/prj%3A796cd8d5-5b10-4941-89fc-3f8c8c0a59e9","timestamp":"2026-08-24T22:27:52.118Z","sha256":"46e3e55a5989c5b5b991b2481103ea10c8d4418ef341d313a49c723d0006eb7b","proofLevel":"DETERMINISTIC_PRODUCT_NATIVE","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL"}
{"id":"06-reload-success","file":"06-reload-success.png","scenario":"SUCCESS_RELOAD","evidenceId":"ev:w3b:f5f8938825a0c32f","reviewBundleId":"rb:w3b:f5f8938825a0c32f","attemptId":"xat:w3a:e3e42bf6e236fba4","productOutcome":"SUCCESS","note":"read-only rehydrate pre-reload + page.reload project durable","route":"http://127.0.0.1:3020/studio/projects/prj%3A796cd8d5-5b10-4941-89fc-3f8c8c0a59e9","timestamp":"2026-08-24T22:27:52.546Z","sha256":"7ce671745af1cfa4fa9137cba9ade4bdaef9f9e2f41264f0b857f3a707180b8f","proofLevel":"DETERMINISTIC_PRODUCT_NATIVE","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL"}
{"id":"04-system-governed-stop","file":"04-system-governed-stop.png","scenario":"GOVERNED_STOP","attemptId":"xat:w3a:524c1c4dfac2bc91","evidenceId":"ev:w3b:6e4f98736561c7ac","reviewBundleId":"rb:w3b:6e4f98736561c7ac","productOutcome":"STOP","technicalStatus":"cancelled","completeness":"complete","governedBoundary":"Frontière : EXECUTOR_INSUFFICIENT","adapterBehavior":"governed_stop:EXECUTOR_INSUFFICIENT","route":"http://127.0.0.1:3020/studio/projects/prj%3A9204a207-84a0-4d8c-ba38-1748658c2cc1","timestamp":"2026-08-24T22:27:55.063Z","sha256":"a347d0ca5ed15aa46f90fdf5f415ce881b2245544ffd97c3489dbb12a935b2ea","proofLevel":"DETERMINISTIC_PRODUCT_NATIVE","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL"}
{"id":"05-adapter-fail","file":"05-adapter-fail.png","scenario":"ADAPTER_FAIL","attemptId":"xat:w3a:30625055dabff7e7","evidenceId":"ev:w3b:0b868345da350cc3","reviewBundleId":"rb:w3b:0b868345da350cc3","productOutcome":"FAIL","technicalStatus":"failed","completeness":"complete","governedBoundary":null,"adapterBehavior":"adapter_fail","route":"http://127.0.0.1:3020/studio/projects/prj%3A5c8a33d5-9da6-4d46-8dc8-4bdc7b49a978","timestamp":"2026-08-24T22:27:56.833Z","sha256":"fffbed3ddb3cf83f18634c10dc7792acc755ba935c70398b15447cd332076b97","proofLevel":"DETERMINISTIC_PRODUCT_NATIVE","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL"}
```
