# SFIA Studio — W3-B Git Integration / PR Readiness — Review Pack FULL

## Meta

| Field | Value |
|---|---|
| Cycle | 13 — PR readiness / intégration Git |
| Profil | CRITICAL |
| Timestamps | 2026-08-25 01:13:59 CEST / 2026-08-24 23:13:59 UTC |
| Worktree | `/Users/morris/Projects/sfia-workspace-w3b-bound-snapshot` |
| Branch | `delivery/sfia-studio-product-completion-w3-b-bound-snapshot` |
| Local HEAD | `8c1f9b863a36391131b01ffd81a673d0105c1122` |
| Remote HEAD | `8c1f9b863a36391131b01ffd81a673d0105c1122` |
| Local/remote equality | YES |
| origin/main | `8520f546f3613ec66c0b98aa7390163cb1350efe` |
| merge-base | `8520f546f3613ec66c0b98aa7390163cb1350efe` |
| Incoming handoff | `5ec1125eeb3e6fd3da810c6589a869c15868e437` |
| PR | [#413](https://github.com/mcleland147/sfia-workspace/pull/413) |
| C6 | CLOSED |
| W3 | IN PROGRESS |
| W3-B | **NOT CLOSED** |
| W3-C/D/E | NOT STARTED |
| REAL | OUT |
| FinOps | FREEZE |
| W4 | OUT |
| Runtime v3 | NON ADOPTED |
| Auto-merge | DISABLED / null |
| Merge performed | **NO** |

## Morris GO consumed

GO MORRIS — W3-B GIT INTEGRATION — EXACT CANDIDATE 8c1f9b863a36391131b01ffd81a673d0105c1122 — PUSH delivery/sfia-studio-product-completion-w3-b-bound-snapshot — CREATE PR TO MAIN — VERIFY EXACT DIFF + CI + PR READINESS — PRESERVE REVIEW-CLEAN CONTENT — NO NEW PROJECT COMMIT — NO MERGE — NO AUTO-MERGE — PRESERVE SOURCE BRANCH — NO W3-B CLOSURE — NO W3-C/D/E — REAL OUT — FINOPS FREEZE — W4 OUT — RUNTIME V3 NON ADOPTED.

## Incoming handoff confirmation (`5ec1125e`)

- Project candidate = `8c1f9b86…`
- OB01 / OB02 / OB03 = PASS
- X-W3B-01…12 canonical IDs = 12/12 PASS
- W3-B NOT CLOSED
- handoff stated no project push/PR/merge **at that time** (this Cycle 13 now performs push+PR only; still no merge)

## Local Git Truth

```
pwd=/Users/morris/Projects/sfia-workspace-w3b-bound-snapshot
branch=delivery/sfia-studio-product-completion-w3-b-bound-snapshot
HEAD=8c1f9b863a36391131b01ffd81a673d0105c1122
HEAD^=66427eaf3ea74388b61c73e738f4b4df7b9a983a
origin/main=8520f546f3613ec66c0b98aa7390163cb1350efe
merge-base=8520f546 (current-main rebuild base)
status: only ?? .tmp-sfia-review/ (review-only; not in PR)
diff --check origin/main...HEAD: clean
```

## Branch history (origin/main..HEAD)

```
8c1f9b86 fix(sfia-studio): close W3-B Option B review gaps
66427eaf fix(sfia-studio): bind W3-B results to immutable contract snapshot
080b6f86 fix(sfia-studio): close W3-B result proof gaps
97caaa74 fix(sfia-studio): align W3-B contract result invariants
7374b213 feat(sfia-studio): implement W3-B terminal semantics and evidence
```

Expected reconstruction: `main@8520f546` → import reviewed W3-B (`7374b213`…`080b6f86`) → `66427eaf` Option B → `8c1f9b86` OB01–OB03. History not rewritten. No rebase.

## Push

- Cas A entry: no remote branch, no PR
- `git push -u origin delivery/sfia-studio-product-completion-w3-b-bound-snapshot`
- Force push: NO
- Remote SHA verified: `8c1f9b863a36391131b01ffd81a673d0105c1122`

## PR

| Field | Value |
|---|---|
| Number | 413 |
| Title | feat(sfia-studio): complete W3-B terminal result and evidence semantics |
| URL | https://github.com/mcleland147/sfia-workspace/pull/413 |
| State | OPEN |
| Draft | false |
| Base | main |
| Head | delivery/sfia-studio-product-completion-w3-b-bound-snapshot |
| headRefOid | `8c1f9b863a36391131b01ffd81a673d0105c1122` |
| mergedAt | null |
| autoMergeRequest | null |
| mergeable | MERGEABLE |
| mergeStateStatus | CLEAN |
| Reviews | [] (no blocker) |
| Issue/PR comments | 0 / 0 |

## Exact files (57) — local == GitHub PR name-only

All under `projects/sfia-studio/app/**`. No product-completion / convergence / framing / method / prompts / `.tmp-sfia-review`.

```
projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/systemGovernedStop.test.ts
projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts
projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
projects/sfia-studio/app/app/api/e2e/w3b-boundary/route.ts
projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
projects/sfia-studio/app/e2e/support/w3bBoundaryControl.ts
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
projects/sfia-studio/app/features/project-assistant/w2/actions.ts
projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
projects/sfia-studio/app/features/project-assistant/w2/types.ts
projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultReviewPolicy.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultVerdictProjection.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationInvariants.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationTypes.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
projects/sfia-studio/app/lib/oa/evidence-review/index.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/systemGovernedStop.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/boundExecutionContract.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptAudit.ts
projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts
projects/sfia-studio/app/lib/oa/execution-contract/index.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/w3bE2eBoundaryControl.ts
projects/sfia-studio/app/playwright.config.ts
```

## Diff stat (origin/main...HEAD)

```
 .../oa/decision/m3ProductSchemaMigration.test.ts   |    2 +-
 .../evidence-review/adversarialValidation.test.ts  |    4 +-
 .../contractResultCorrection.test.ts               |  400 +++++
 .../contractResultCorrectionPass2.test.ts          |  402 +++++
 .../contractResultEvaluation.test.ts               |  288 +++
 .../contractResultSqliteDurability.test.ts         |  265 +++
 .../ingestExecutionAttemptEvidence.test.ts         |   62 +-
 .../evidence-review/optionBBoundSnapshot.test.ts   | 1857 ++++++++++++++++++++
 .../execution-attempt/systemGovernedStop.test.ts   |   55 +
 .../oa/project/m5ProductSchemaMigration.test.ts    |    4 +-
 .../oa/project/m6ProductSchemaMigration.test.ts    |    6 +-
 .../project-assistant/w3bProductTerminal.test.ts   |  404 +++++
 .../importBoundaries.test.ts                       |    3 +
 .../app/app/api/e2e/w3b-boundary/route.ts          |   96 +
 .../studio-w3b-terminal-evidence-runtime.spec.ts   |  363 ++++
 .../app/e2e/support/w3bBoundaryControl.ts          |   36 +
 .../surfaces/TrajectorySurface.module.css          |   29 +
 .../surfaces/TrajectorySurface.tsx                 |  311 +++-
 .../app/features/project-assistant/w2/actions.ts   |  107 ++
 .../w2/governedExecuteAuthorizedContract.ts        |  237 ++-
 .../w2/materializeW3bProductTerminal.ts            |  403 +++++
 .../app/features/project-assistant/w2/types.ts     |   55 +
 .../w2/w3aProductExecutionSemantics.ts             |   10 +-
 .../w2/w3bProductTerminalProjection.ts             |  336 ++++
 .../application/confirmClaimEvaluation.ts          |  226 ++-
 .../application/contractResultAssessment.ts        |  192 ++
 .../application/contractResultReviewPolicy.ts      |   28 +
 .../application/contractResultSemanticEvaluator.ts |  121 ++
 .../application/contractResultVerdictProjection.ts |   21 +
 .../application/evaluateContractResult.ts          |  402 +++++
 .../application/ingestExecutionAttemptEvidence.ts  |   94 +-
 .../domain/claimEvaluationInvariants.ts            |   53 +
 .../evidence-review/domain/claimEvaluationTypes.ts |   12 +
 .../evidence-review/domain/contractResultTypes.ts  |  228 +++
 .../app/lib/oa/evidence-review/domain/types.ts     |   29 +-
 .../app/lib/oa/evidence-review/index.ts            |   17 +-
 .../sqlite/createSqliteEvidenceReviewServices.ts   |   23 +-
 .../sqlite/sqliteClaimEvaluationRepository.ts      |  230 +++
 .../ports/claimEvaluationRepository.ts             |    6 +-
 .../application/cancelExecutionAttempt.ts          |    1 +
 .../application/selectExecutionAgent.ts            |   20 +-
 .../application/startExecution.ts                  |    7 +-
 .../application/systemGovernedStop.ts              |  244 +++
 .../domain/boundExecutionContract.ts               |  134 ++
 .../app/lib/oa/execution-attempt/domain/types.ts   |   19 +
 .../app/lib/oa/execution-attempt/index.ts          |   14 +
 .../sqlite/createSqliteExecutionAttemptServices.ts |   12 +
 .../ports/executionAttemptAudit.ts                 |    1 +
 .../application/confirmExecutionContract.ts        |    5 +
 .../domain/semanticFingerprint.ts                  |   14 +-
 .../app/lib/oa/execution-contract/index.ts         |    2 +
 .../app/lib/oa/project/infrastructure/sqlite/db.ts |   42 +-
 .../infrastructure/sqlite/productSqliteHandle.ts   |    1 +
 .../lib/vertical-slice-runtime/f3FixtureWiring.ts  |   12 +-
 .../app/lib/vertical-slice-runtime/service.ts      |    3 +-
 .../w3bE2eBoundaryControl.ts                       |   79 +
 projects/sfia-studio/app/playwright.config.ts      |    1 +
 57 files changed, 7936 insertions(+), 92 deletions(-)
```

Local file list vs `gh pr diff 413 --name-only`: **IDENTICAL** (57/57).

## Option B + OB01/02/03 invariants (spot-checked in candidate)

- `BoundExecutionContract` + `captureBoundExecutionContractSnapshot` at Select/accept (`selectExecutionAgent.ts`)
- `validateBoundExecutionContractSnapshot` used by Evaluate + Confirm; `isAttemptBoundSnapshotValid` thin wrapper
- Confirm derives from `contractResultAttempt.status` (real FC-10), not EO-inferred status
- Confirm reuses `isW3bContractResultEvidenceUsable` (fresh-only) against frozen RB snapshots
- No latest-EC semantic substitution / no EC-history repository
- `SYSTEM_GOVERNED_STOP` distinct path present
- Canonical `/studio` Playwright e2e present
- Generic Claim Morris gate unchanged (prior review)

### Tip commit OB micro-correction (`8c1f9b86`)

```
8c1f9b86 fix(sfia-studio): close W3-B Option B review gaps
 .../evidence-review/optionBBoundSnapshot.test.ts   | 729 ++++++++++++++++++++-
 .../application/confirmClaimEvaluation.ts          |  61 +-
 .../application/evaluateContractResult.ts          |  22 +-
 .../evidence-review/domain/contractResultTypes.ts  |  65 +-
 .../domain/boundExecutionContract.ts               |  19 +-
 5 files changed, 842 insertions(+), 54 deletions(-)
```

### Tip useful diff (OB01–OB03 core files)

```diff
commit 8c1f9b863a36391131b01ffd81a673d0105c1122
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Tue Aug 25 00:51:43 2026 +0200

    fix(sfia-studio): close W3-B Option B review gaps

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
index 1a5d3a63..eff0ce5b 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
@@ -22,8 +22,8 @@ import type {
 import {
   CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
   W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
-  isAttemptBoundSnapshotValid,
 } from "../domain/contractResultTypes";
+import { validateBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
 import { containsForbiddenSecret } from "../domain/invariants";
 import type { EvidenceAuditPort } from "../ports/evidenceAudit";
 import type { ClaimAuthorityPort } from "../ports/claimAuthorityPort";
@@ -36,10 +36,9 @@ import {
   assessRequiredEvidence,
   detailCodeForAssessment,
 } from "./claimEvidenceAssessment";
-import {
-  deriveCanonicalContractResultStatus,
-  inferAttemptStatusFromContractResultAssessments,
-} from "./contractResultAssessment";
+import { deriveCanonicalContractResultStatus } from "./contractResultAssessment";
+import { isW3bContractResultEvidenceUsable } from "./contractResultSemanticEvaluator";
+import type { ExecutionAttemptSnapshot } from "../domain/types";
 import {
   assertIdempotencyKey,
   fingerprintCommand,
@@ -322,6 +321,8 @@ export class ConfirmClaimEvaluation {
       const isContractResult =
         current.subjectKind === CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT;

+      let contractResultAttempt: ExecutionAttemptSnapshot | null = null;
+
       if (isContractResult) {
         if (!current.contractResultReviewPolicyRef) {
           return fail(
@@ -381,10 +382,16 @@ export class ConfirmClaimEvaluation {
             { claimEvaluation: current },
           );
         }
-        if (!isAttemptBoundSnapshotValid(attempt)) {
+        const snapshotValidation = validateBoundExecutionContractSnapshot({
+          attempt,
+          requirePresent: true,
+          expectedProjectId: bindings.projectId,
+          expectedCycleInstanceId: bindings.cycleInstanceId ?? null,
+        });
+        if (!snapshotValidation.ok) {
           return fail(
             "CLAIM_EVALUATION_INVALID",
-            "contract_result_confirm_corrupt_bound_snapshot",
+            snapshotValidation.reason,
             { claimEvaluation: current },
           );
         }
@@ -403,6 +410,33 @@ export class ConfirmClaimEvaluation {
             { claimEvaluation: current },
           );
         }
+
+        // OB03 — W3-B Evidence freshness/usability fail-closed (stricter than generic).
+        for (const evidenceId of current.requiredEvidenceRefs) {
+          const live = await this.evidence.findById(evidenceId);
+          const frozenSnap = (bundle.frozenEvidenceSnapshots ?? []).find(
+            (s) => s.evidenceId === evidenceId,
+          );
+          if (
+            !live ||
+            !isW3bContractResultEvidenceUsable({
+              evidence: live,
+              snapshot: frozenSnap,
+            })
+          ) {
+            return fail(
+              "CLAIM_EVALUATION_INVALID_STATE",
+              "contract_result_confirm_evidence_not_w3b_usable",
+              {
+                claimEvaluation: current,
+                evidenceId,
+                reviewBundleId: current.reviewBundleId,
+              },
+            );
+          }
+        }
+
+        contractResultAttempt = attempt;
       }

       const confirmationAuthority =
@@ -441,11 +475,16 @@ export class ConfirmClaimEvaluation {

       let contractResultStatus: ClaimEvaluation["status"] = "pass";
       if (isContractResult) {
-        const attemptStatus = inferAttemptStatusFromContractResultAssessments(
-          stampedExpectedOutputs ?? [],
-        );
+        if (!contractResultAttempt) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "contract_result_confirm_attempt_not_found",
+            { claimEvaluation: current },
+          );
+        }
+        // OB02 — derive from real Attempt.status (FC-10), never EO-inferred status.
         const derivedStatus = deriveCanonicalContractResultStatus({
-          attemptStatus,
+          attemptStatus: contractResultAttempt.status,
           expectedOutputAssessments: stampedExpectedOutputs ?? [],
           evidenceRequirementAssessments: stampedEvidenceRequirements ?? [],
         });
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
index bd76df67..80234cff 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
@@ -22,8 +22,8 @@ import { CLAIM_EVALUATION_SCHEMA_VERSION } from "../domain/claimEvaluationTypes"
 import {
   CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
   W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
-  isAttemptBoundSnapshotValid,
 } from "../domain/contractResultTypes";
+import { validateBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
 import type { ExecutionAttemptSnapshot } from "../domain/types";
 import type { Evidence } from "../domain/types";
 import type { ReviewBundle } from "../domain/reviewBundleTypes";
@@ -128,12 +128,20 @@ export class EvaluateContractResult {

       const snap = attempt.boundExecutionContract;
       // Historical Attempt without snapshot → durable NOT_PROVEN (not error).
-      // Corrupt/tampered snapshot → application error.
-      if (snap && !isAttemptBoundSnapshotValid(attempt)) {
-        return fail(
-          "CLAIM_EVALUATION_INVALID",
-          "bound_snapshot_corrupt_or_inconsistent",
-        );
+      // Corrupt/tampered/incoherent snapshot → application error via canonical validator.
+      if (snap) {
+        const snapshotValidation = validateBoundExecutionContractSnapshot({
+          attempt,
+          requirePresent: true,
+          expectedProjectId: contract.projectId,
+          expectedCycleInstanceId: contract.cycleInstanceId ?? null,
+        });
+        if (!snapshotValidation.ok) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            snapshotValidation.reason,
+          );
+        }
       }

       if (evidence.bindings.executionAttemptId !== attempt.attemptId) {
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts b/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
index d7994a9e..a86937e7 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
@@ -9,7 +9,7 @@ import type {
   ClaimEvaluationMethod,
 } from "./claimEvaluationTypes";
 import type { ActorReference } from "@/lib/oa/doctrine";
-import { computeExecutionContractSemanticMaterialFingerprint } from "@/lib/oa/execution-contract";
+import { validateBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
 import type { ExecutionAttemptSnapshot } from "./types";

 export const CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT =
@@ -105,8 +105,14 @@ export function resolveContractResultConfirmationAuthority(
   return "authorized_human";
 }

+export type BoundSnapshotValidityExpectations = {
+  readonly expectedProjectId?: string;
+  readonly expectedCycleInstanceId?: string | null;
+};
+
 /**
- * TD-W3B-02 Option B — Attempt has a self-consistent bound snapshot.
+ * TD-W3B-02 Option B — Contract Result snapshot validity.
+ * Thin wrapper over canonical validateBoundExecutionContractSnapshot (requirePresent).
  * Does NOT consult latest ExecutionContract.
  */
 export function isAttemptBoundSnapshotValid(
@@ -117,29 +123,14 @@ export function isAttemptBoundSnapshotValid(
     | "executionContractSemanticFingerprint"
     | "boundExecutionContract"
   >,
+  expectations?: BoundSnapshotValidityExpectations,
 ): boolean {
-  const snap = attempt.boundExecutionContract;
-  if (!snap) return false;
-  if (
-    snap.semanticMaterial.executionContractId !== attempt.executionContractId
-  ) {
-    return false;
-  }
-  if (snap.executionContractVersion !== attempt.executionContractVersion) {
-    return false;
-  }
-  const attemptFp = (attempt.executionContractSemanticFingerprint ?? "").trim();
-  if (!attemptFp || attemptFp !== snap.semanticFingerprint) return false;
-  try {
-    const recomputed = computeExecutionContractSemanticMaterialFingerprint(
-      snap.semanticMaterial as Parameters<
-        typeof computeExecutionContractSemanticMaterialFingerprint
-      >[0],
-    );
-    return recomputed === snap.semanticFingerprint;
-  } catch {
-    return false;
-  }
+  return validateBoundExecutionContractSnapshot({
+    attempt,
+    requirePresent: true,
+    expectedProjectId: expectations?.expectedProjectId,
+    expectedCycleInstanceId: expectations?.expectedCycleInstanceId,
+  }).ok;
 }

 /**
@@ -193,17 +184,24 @@ export function contractResultBindingsMatchCurrentFacts(input: {
   cycleInstanceId?: string | null;
 }): boolean {
   const snap = input.attempt.boundExecutionContract;
-  if (!snap || !isAttemptBoundSnapshotValid(input.attempt)) return false;
-  const attemptFp = snap.semanticFingerprint;
-  const projectId =
-    input.projectId ?? snap.semanticMaterial.projectId;
-  const cycleInstanceId =
+  if (!snap) return false;
+  const expectedProjectId = input.projectId ?? input.bindings.projectId;
+  const expectedCycleInstanceId =
     input.cycleInstanceId !== undefined
       ? input.cycleInstanceId
-      : (snap.semanticMaterial.cycleInstanceId ?? null);
+      : (input.bindings.cycleInstanceId ?? null);
+  if (
+    !isAttemptBoundSnapshotValid(input.attempt, {
+      expectedProjectId,
+      expectedCycleInstanceId,
+    })
+  ) {
+    return false;
+  }
+  const attemptFp = snap.semanticFingerprint;

   if (
-    input.bindings.projectId !== projectId ||
+    input.bindings.projectId !== expectedProjectId ||
     input.bindings.executionContractId !== input.attempt.executionContractId ||
     input.bindings.executionContractVersion !==
       input.attempt.executionContractVersion ||
@@ -214,7 +212,10 @@ export function contractResultBindingsMatchCurrentFacts(input: {
   ) {
     return false;
   }
-  if ((input.bindings.cycleInstanceId ?? null) !== (cycleInstanceId ?? null)) {
+  if (
+    (input.bindings.cycleInstanceId ?? null) !==
+    (expectedCycleInstanceId ?? null)
+  ) {
     return false;
   }
   if (input.bindings.evidenceRefs.length !== input.evidenceIds.length) {
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/boundExecutionContract.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/boundExecutionContract.ts
index e64cfb2a..21157399 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/boundExecutionContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/boundExecutionContract.ts
@@ -60,7 +60,17 @@ export function validateBoundExecutionContractSnapshot(input: {
     executionContractId: string;
     executionContractVersion: number;
     executionContractSemanticFingerprint?: string;
-    boundExecutionContract?: BoundExecutionContractSnapshot;
+    boundExecutionContract?: {
+      executionContractSchemaVersion: string;
+      executionContractVersion: number;
+      semanticFingerprint: string;
+      semanticMaterial: ExecutionContractSemanticMaterial | {
+        executionContractId: string;
+        projectId: string;
+        cycleInstanceId?: string;
+        [key: string]: unknown;
+      };
+    };
   };
   requirePresent?: boolean;
   expectedProjectId?: string;
@@ -93,11 +103,14 @@ export function validateBoundExecutionContractSnapshot(input: {
   const attemptFp = (
     input.attempt.executionContractSemanticFingerprint ?? ""
   ).trim();
-  if (attemptFp && attemptFp !== snap.semanticFingerprint) {
+  // When a snapshot is present, Attempt fingerprint must match exactly.
+  if (!attemptFp || attemptFp !== snap.semanticFingerprint) {
     return { ok: false, reason: "bound_snapshot_attempt_fingerprint_mismatch" };
   }
   const recomputed =
-    computeExecutionContractSemanticMaterialFingerprint(snap.semanticMaterial);
+    computeExecutionContractSemanticMaterialFingerprint(
+      snap.semanticMaterial as ExecutionContractSemanticMaterial,
+    );
   if (recomputed !== snap.semanticFingerprint) {
     return { ok: false, reason: "bound_snapshot_fingerprint_corrupt" };
   }
```

Full PR application delta is the 57-file `origin/main...8c1f9b86` set above (also on GitHub PR #413). No product mutation in this cycle.

## Local validation (historical review-clean at `8c1f9b86`)

- Option B suite PASS
- Full Vitest: 2090 passed
- typecheck / lint / build PASS
- Playwright `/studio`: SUCCESS / SYSTEM_GOVERNED_STOP / ADAPTER_FAIL = 3/3

## CI (PR #413)

| Check | Status | Duration | URL |
|---|---|---|---|
| Detect SFIA Studio changes | pass | 8s | https://github.com/mcleland147/sfia-workspace/actions/runs/32788141345/job/97624173294 |
| Build and validate SFIA Studio | pass | 2m14s | https://github.com/mcleland147/sfia-workspace/actions/runs/32788141345/job/97624211019 |
| SFIA Studio Required Gate | pass | 4s | https://github.com/mcleland147/sfia-workspace/actions/runs/32788141345/job/97624728437 |

Required gate observed and PASS. Workflow run: https://github.com/mcleland147/sfia-workspace/actions/runs/32788141345

## X-W3B-01…12 (canonical IDs — from handoff `5ec1125e`, unchanged)

| ID | Exit canonique | Verdict |
|---|---|---|
| X-W3B-01 | Honest semantic SUCCESS | PASS |
| X-W3B-02 | NOT_PROVEN fail-closed | PASS |
| X-W3B-03 | FAIL distinct | PASS |
| X-W3B-04 | SYSTEM_GOVERNED_STOP | PASS |
| X-W3B-05 | Cancel / pre-running block distinctions | PASS |
| X-W3B-06 | Evidence before claim / frozen RB | PASS |
| X-W3B-07 | Business-first UX | PASS |
| X-W3B-08 | Restart honesty | PASS |
| X-W3B-09 | Exact EC identity | PASS |
| X-W3B-10 | Server ownership / review | PASS |
| X-W3B-11 | Canonical `/studio` | PASS |
| X-W3B-12 | No parallel architecture | PASS |

**12/12 PASS. W3-B remains NOT CLOSED.**

## Governance proofs

- No new project commit this cycle (HEAD still `8c1f9b86`)
- No amend / rebase / force push / merge main into branch
- No PR merge; auto-merge null
- Source branch preserved on remote
- No W3-B closure; no W3-C/D/E; REAL OUT; FinOps FREEZE; W4 OUT; runtime v3 NON ADOPTED

## Verdict

**READY FOR MORRIS MERGE DECISION**

This is **not** a merge authorization. Next gate: ChatGPT PR readiness review → if PASS → distinct Morris merge GO.

## Final project verification (post-handoff target)

```
branch=delivery/sfia-studio-product-completion-w3-b-bound-snapshot
local HEAD=8c1f9b863a36391131b01ffd81a673d0105c1122
remote HEAD=8c1f9b863a36391131b01ffd81a673d0105c1122
status: ?? .tmp-sfia-review/ only
```
