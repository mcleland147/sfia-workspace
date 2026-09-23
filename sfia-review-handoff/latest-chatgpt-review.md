# PRODUCT-JOURNEY-AUTOMATIC-RESULT-QUALIFICATION-01
# Cycle 8 — Delivery / implémentation — CRITICAL — RUN
# ZERO NEW CURSOR REAL
# AUTOMATIC POST-EXECUTION QUALIFICATION IMPLEMENTED DETERMINISTICALLY

## Date / heure
2026-09-23T22:10:54+02:00

## Macro-cycle
PRODUCT-JOURNEY-AUTOMATIC-RESULT-QUALIFICATION-01

## Objectif
Après Attempt docs_write terminal, qualifier AUTOMATIQUEMENT le résultat Product
(conformity Evidence → successor RB → ContractResult → projection Pilote)
sans clic evaluate_claim / sans nouveau Cursor spawn.

## Local Git Truth
- Repo: `mcleland147/sfia-workspace`
- Branch: `fix/sfia-studio-product-real-readiness-pathroot-semantics`
- HEAD: `128f3b7eb49cbba05d7735d5edc41a27822b0dee`
- HEAD tree: `400d608e2a0be9b182925c46cd204a24cb1e0034` (= qualified main tree)
- `origin/main`: `66ffc0d2370d9ed7014348fd25994ce1cda3b3ad` — MATCH
- Dirty pré-existant hors scope: `.env.example`
- staged: empty

## Sources lues
- template / routing / Build Doctrine / Roadmap / C1
- framing 32/34/35/36 (applicables)
- governedExecute / materializeW3b / completeDocsWriteClaimEvidenceCompletion /
  requalify / w3c / TrajectorySurface / CEC + docs_write wiring tests

## Diagnostic — cause racine
1. governedExecuteComplete ingère Artifact Evidence puis « RÉSULTAT PRODUIT À QUALIFIER ».
2. materializeDocsWriteProductTerminal appelait uniquement requalifyDocsWriteContractResult
   sans correctionRef → RB historique artifact-only → ContractResult NOT_PROVEN.
3. completeDocsWriteClaimEvidenceCompletion existait mais n'était pas branché au happy path.
4. UX exposait « non encore qualifié » / reload comme étape nominale.

## Seam choisi
Réutiliser completeDocsWriteClaimEvidenceCompletion :
- Hot path: après ingest dans governedExecuteAuthorizedContract (worktreeRef chaud).
- Materialize/restart: materializeDocsWriteProductTerminal + resolveDocsWriteArtifactAbsolutePath
  + short-circuit idempotent si conformity déjà durable.
- Aucun second verifier / pipeline Evidence / path FocusFlow.

## Architecture réutilisée
- KEEP: completeDocsWriteClaimEvidenceCompletion, docsWriteMinConformityVerifier,
  Evidence/RB/CE semantics, W3-C, historical rb:docs-write immutable.
- ADAPT: materialize docs_write, freeze historique draft, governed complete,
  projection not_proven, TrajectorySurface copy, W3-C best-effort après CE durable.

## FocusFlow REAL historique (preuve d'entrée — NON muté)
- Attempt `xat:w3a:46736f6deb0fb02f` succeeded — count 1 avant/après
- Aucun nouveau spawn / Attempt
- DB campaign non mutée

## Fichiers créés
- projects/sfia-studio/app/features/project-assistant/w2/resolveDocsWriteArtifactAbsolutePath.ts
- projects/sfia-studio/app/__tests__/project-assistant/automaticResultQualification.d0.test.ts

## Fichiers modifiés
- completeDocsWriteClaimEvidenceCompletion.ts
- materializeW3bProductTerminal.ts
- governedExecuteAuthorizedContract.ts
- w3bProductTerminalProjection.ts
- TrajectorySurface.tsx

## NEW FILE: resolveDocsWriteArtifactAbsolutePath.ts
```ts
/**
 * Resolve absolute filesystem path of a docs_write artifact for server-owned
 * conformity verification (ZERO client path trust).
 *
 * Priority:
 * 1) explicit worktreeRef from the just-completed launch (hottest)
 * 2) Evidence.location when already absolute and present
 * 3) managedRepoRootBase + repository identity + relative targetPath
 */
import { existsSync } from "node:fs";
import path from "node:path";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { Evidence } from "@/lib/oa/evidence-review";
import { sanitizeManagedRepoIdentity } from "@/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver";
import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

function boundInputsOf(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
): Record<string, unknown> {
  const bound = attempt.boundExecutionContract?.semanticMaterial?.inputs;
  if (bound && typeof bound === "object") return bound as Record<string, unknown>;
  return (contract.inputs ?? {}) as Record<string, unknown>;
}

function relativeTargetPath(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
  evidence: Evidence | null,
): string | null {
  const inputs = boundInputsOf(attempt, contract);
  const fromBound =
    typeof inputs.targetPath === "string" ? inputs.targetPath.trim() : "";
  if (fromBound) return fromBound;
  const loc = evidence?.location?.trim() ?? "";
  if (loc && !path.isAbsolute(loc)) return loc;
  return null;
}

function repositoryIdentity(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
): string | null {
  const inputs = boundInputsOf(attempt, contract);
  for (const key of [
    "repositoryBindingIdentity",
    "repositoryIdentity",
    "repositoryRef",
    "targetRepositoryRef",
  ] as const) {
    const v = inputs[key];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return null;
}

export function resolveDocsWriteArtifactAbsolutePath(input: {
  readonly attempt: ExecutionAttempt;
  readonly contract: ExecutionContract;
  readonly evidence: Evidence | null;
  /** Hot worktree from the same process that just completed docs_write. */
  readonly worktreeRef?: string | null;
  readonly managedRepoRootBase?: string | null;
}): string | null {
  const rel = relativeTargetPath(input.attempt, input.contract, input.evidence);
  const candidates: string[] = [];

  const wt = input.worktreeRef?.trim();
  if (wt && rel) {
    candidates.push(path.resolve(wt, ...rel.split("/")));
  }

  const loc = input.evidence?.location?.trim();
  if (loc && path.isAbsolute(loc)) {
    candidates.push(loc);
  }

  const base =
    input.managedRepoRootBase?.trim() ||
    resolveManagedRepoRootBaseFromEnv() ||
    undefined;
  const identity = repositoryIdentity(input.attempt, input.contract);
  if (base && identity && rel) {
    try {
      const sanitized = sanitizeManagedRepoIdentity(identity);
      candidates.push(path.resolve(base, sanitized, ...rel.split("/")));
    } catch {
      // identity invalid — skip managed candidate
    }
  }

  for (const abs of candidates) {
    if (existsSync(abs)) return abs;
  }
  return null;
}
```

## DIFF (modified product files)
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 66f58bff..be253779 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -2874,17 +2874,19 @@ export function TrajectorySurface({
           ) : null}
           <p className={styles.blockNote} data-testid="w3a-terminal-honesty">
             {productOutcome?.claimAllowed
-              ? "Terminal technique consommé — résultat produit qualifié ci-dessous."
-              : productEvidencePending
-                ? "Terminal technique — Evidence en cours / claim produit non encore émis."
-                : "Terminal technique — résultat produit non encore qualifié."}
+              ? "Exécution terminée — résultat produit qualifié ci-dessous."
+              : productOutcome
+                ? "Exécution terminée — résultat produit évalué (voir conformité et recommandation)."
+                : productEvidencePending
+                  ? "Exécution terminée — qualification produit en cours…"
+                  : "Exécution terminée — résultat produit en attente de matérialisation."}
           </p>
           {productEvidencePending ? (
             <p
               className={styles.blockNote}
               data-testid="w3b-evidence-pending"
             >
-              Evidence requise avant tout claim de résultat produit.
+              Qualification automatique du résultat en cours (Evidence / conformité).
             </p>
           ) : null}
           {attempt?.attemptId && !productOutcome ? (
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts b/projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts
index b87cde24..d985d1bf 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts
@@ -84,7 +84,42 @@ export async function completeDocsWriteClaimEvidenceCompletion(
   const historicalRb = await services.reviewBundleReader.findById(
     docsWriteContractResultIdentity(input.attempt.attemptId).reviewBundleId,
   );
-  if (!historicalRb?.frozenAt || !historicalRb.frozenVersion) {
+  if (!historicalRb) {
+    return {
+      ok: false,
+      code: "DOCS_WRITE_REVIEW_BUNDLE_MISSING",
+      message: "Historical docs_write RB introuvable.",
+    };
+  }
+  let historicalFrozen = historicalRb;
+  if (!historicalFrozen.frozenAt || !historicalFrozen.frozenVersion) {
+    if (historicalFrozen.status !== "draft") {
+      return {
+        ok: false,
+        code: "DOCS_WRITE_REVIEW_BUNDLE_NOT_FROZEN",
+        message: "Historical docs_write RB must remain frozen/auditable.",
+      };
+    }
+    const frozenHistorical = await services.freezeReviewBundle.execute({
+      reviewBundleId: historicalFrozen.reviewBundleId,
+      expectedVersion: historicalFrozen.version,
+      idempotencyKey: `idem:docs-write-rb-freeze:${input.attempt.attemptId}`,
+      actor,
+      correlationId: input.correlationId,
+      nowIso: input.nowIso,
+    });
+    if (!frozenHistorical.ok) {
+      return {
+        ok: false,
+        code: frozenHistorical.error.detailCode,
+        message:
+          frozenHistorical.error.internalCauseRef ??
+          frozenHistorical.error.message,
+      };
+    }
+    historicalFrozen = frozenHistorical.reviewBundle;
+  }
+  if (!historicalFrozen.frozenAt || !historicalFrozen.frozenVersion) {
     return {
       ok: false,
       code: "DOCS_WRITE_REVIEW_BUNDLE_NOT_FROZEN",
@@ -92,6 +127,58 @@ export async function completeDocsWriteClaimEvidenceCompletion(
     };
   }

+  // Restart-safe idempotence: when conformity Evidence + frozen successor RB
+  // already exist, requalify without re-reading the ephemeral worktree payload.
+  const existingConformity = await services.evidenceReader.findById(
+    ids.conformityEvidenceId,
+  );
+  const existingSuccessorRb = await services.reviewBundleReader.findById(
+    ids.reviewBundleId,
+  );
+  if (
+    existingConformity &&
+    existingSuccessorRb?.frozenAt &&
+    existingSuccessorRb.frozenVersion &&
+    !input.artifactBytes &&
+    !input.artifactAbsolutePath
+  ) {
+    const requalified = await requalifyDocsWriteContractResult({
+      evidenceReviewServices: services,
+      attempt: input.attempt,
+      contract: input.contract,
+      actor,
+      correlationId: input.correlationId,
+      nowIso: input.nowIso,
+      correctionRef,
+      scopeReviewBundle: true,
+    });
+    if (!requalified.ok) {
+      return {
+        ok: false,
+        code: requalified.code,
+        message: requalified.message,
+      };
+    }
+    const oracleFromRef =
+      typeof existingConformity.technicalResultRef === "string"
+        ? existingConformity.technicalResultRef.replace(
+            /^docs-write-min-conformity:/,
+            "",
+          )
+        : "";
+    return {
+      ok: true,
+      claimEvaluation: requalified.claimEvaluation,
+      reviewBundle: requalified.reviewBundle,
+      conformityEvidence: existingConformity,
+      artifactEvidence,
+      supersededClaimEvaluationId: requalified.supersededClaimEvaluationId,
+      verifierMatchedHeadings: [],
+      oracleFingerprint: oracleFromRef,
+      reusedFromIdempotencyKey: true,
+    };
+  }
+
   // CR-CEC-01 — NEVER fallback to live contract.inputs for oracle derivation.
   const criteria = extractDocsWriteMinConformityCriteriaFromBoundAttempt(
     input.attempt,
@@ -136,10 +223,9 @@ export async function completeDocsWriteClaimEvidenceCompletion(
   }

   // Idempotent: if conformity Evidence + successor RB + CE already exist, requalify.
-  const existingConformity = await services.evidenceReader.findById(
-    ids.conformityEvidenceId,
-  );
-  let conformityEvidence = existingConformity ?? undefined;
+  let conformityEvidence =
+    (await services.evidenceReader.findById(ids.conformityEvidenceId)) ??
+    undefined;
   if (!conformityEvidence) {
     const registered = await services.registerEvidence.execute({
       evidenceId: ids.conformityEvidenceId,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index ac2284f0..d4e529df 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -14,6 +14,7 @@
  */

 import { createHash } from "node:crypto";
+import path from "node:path";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import {
   applyW3bAdapterFailArmIfPresent,
@@ -47,11 +48,11 @@ import {
 } from "@/features/project-assistant/f3/buildMissionResultPayloadFromReport";
 import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
 import { authorizedM3ResolutionKind } from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
+import { completeDocsWriteClaimEvidenceCompletion } from "./completeDocsWriteClaimEvidenceCompletion";
 import {
   bindCursorExecutionReportToAttempt,
   parseCursorExecutionReport,
 } from "@/lib/oa/execution-attempt";
-import path from "node:path";
 import { PRODUCT_MISSION_FROM_DURABLE_CONTEXT } from "@/lib/oa/evidence-review/application/missionResultPayload";
 import { advanceProductExecutionContractAfterEvidence } from "./advanceProductExecutionContractAfterEvidence";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
@@ -981,6 +982,21 @@ export async function governedExecuteRecordResult(
             attempt: projectAttempt(attempt, adapterId),
           };
         }
+        // Automatic Product result qualification while worktree is still hot.
+        // Failures stay fail-closed on Product claim; technical Attempt unchanged.
+        if (completed.facts.worktreeRef) {
+          await completeDocsWriteClaimEvidenceCompletion({
+            evidenceReviewServices: input.oa.evidenceReviewServices!,
+            attempt,
+            contract,
+            actor: LOCAL_PILOTE_ACTOR,
+            artifactAbsolutePath: path.join(
+              completed.facts.worktreeRef,
+              completed.facts.targetPath,
+            ),
+            nowIso: input.oa.clock.nowIso(),
+          });
+        }
       }
     }
     return buildTechnicalTerminal({
@@ -992,7 +1008,7 @@ export async function governedExecuteRecordResult(
       launchCountBefore,
       statusLabel:
         attempt.status === "succeeded"
-          ? "TERMINAL TECHNIQUE DOCS-WRITE — RÉSULTAT PRODUIT À QUALIFIER"
+          ? "TERMINAL TECHNIQUE DOCS-WRITE — QUALIFICATION PRODUIT AUTOMATIQUE"
           : undefined,
     });
   }
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index eefc9ccb..fce100fb 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -20,6 +20,8 @@ import {
   missionResultEvidenceIdForAttempt,
 } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
 import { requalifyDocsWriteContractResult } from "./requalifyDocsWriteContractResult";
+import { completeDocsWriteClaimEvidenceCompletion } from "./completeDocsWriteClaimEvidenceCompletion";
+import { resolveDocsWriteArtifactAbsolutePath } from "./resolveDocsWriteArtifactAbsolutePath";
 import {
   projectW3bProductTerminal,
   productReservationsForAttempt,
@@ -31,6 +33,7 @@ import {
   runW3cPostEvidenceLoop,
   type W3cPostEvidenceLoopResult,
 } from "./w3cPostEvidenceLoop";
+import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

 export type { W3BProductTerminalProjection as W3BProductOutcomeProjection };

@@ -143,74 +146,123 @@ async function materializeDocsWriteProductTerminal(input: {
   readonly projectId: string;
   readonly attempt: ExecutionAttempt;
   readonly contract: ExecutionContract;
+  /** Hot worktree from the just-completed docs_write launch (optional). */
+  readonly docsWriteWorktreeRef?: string | null;
 }): Promise<MaterializeW3bProductTerminalResult> {
   const services = input.oa.evidenceReviewServices!;
-  const requalified = await requalifyDocsWriteContractResult({
+  const managedRepoRootBase =
+    input.oa.executionAttemptServices?.realBoundary?.managedRepoRootBase ??
+    resolveManagedRepoRootBaseFromEnv() ??
+    null;
+
+  const segment = input.attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
+  const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
+  const artifactEvidence = await services.evidenceReader.findById(evidenceId);
+
+  const artifactAbsolutePath = resolveDocsWriteArtifactAbsolutePath({
+    attempt: input.attempt,
+    contract: input.contract,
+    evidence: artifactEvidence ?? null,
+    worktreeRef: input.docsWriteWorktreeRef,
+    managedRepoRootBase,
+  });
+
+  // Automatic Product qualification — reuse completeDocsWriteClaimEvidenceCompletion.
+  // Prefer hot worktree / managed path; restart-safe when conformity already persisted.
+  const completed = await completeDocsWriteClaimEvidenceCompletion({
     evidenceReviewServices: services,
     attempt: input.attempt,
     contract: input.contract,
     actor: LOCAL_PILOTE_ACTOR,
+    ...(artifactAbsolutePath
+      ? { artifactAbsolutePath }
+      : {}),
   });
-  if (!requalified.ok) {
-    return {
-      ok: false,
-      code: requalified.code,
-      message: requalified.message,
-    };
-  }

-  const segment = input.attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
-  const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
-  const evidence = await services.evidenceReader.findById(evidenceId);
+  let claimEvaluation: ClaimEvaluation;
+  let reviewBundle: ReviewBundle;
+  let evidence: Evidence | null = artifactEvidence ?? null;
+  let reusedFromIdempotency = false;
+
+  if (completed.ok) {
+    claimEvaluation = completed.claimEvaluation;
+    reviewBundle = completed.reviewBundle;
+    evidence = completed.artifactEvidence;
+    reusedFromIdempotency = Boolean(completed.reusedFromIdempotencyKey);
+  } else {
+    // Fail-closed Product claim: keep technical Attempt as-is; project from
+    // historical artifact RB (typically NOT_PROVEN without conformity).
+    const requalified = await requalifyDocsWriteContractResult({
+      evidenceReviewServices: services,
+      attempt: input.attempt,
+      contract: input.contract,
+      actor: LOCAL_PILOTE_ACTOR,
+    });
+    if (!requalified.ok) {
+      return {
+        ok: false,
+        code: completed.code,
+        message: `${completed.message} — fallback requalify: ${requalified.message}`,
+      };
+    }
+    claimEvaluation = requalified.claimEvaluation;
+    reviewBundle = requalified.reviewBundle;
+    reusedFromIdempotency = Boolean(requalified.reusedFromIdempotencyKey);
+  }

   const product = projectFromFacts({
     attempt: input.attempt,
     contract: input.contract,
-    evidence: evidence ?? null,
-    reviewBundle: requalified.reviewBundle,
-    claimEvaluation: requalified.claimEvaluation,
+    evidence,
+    reviewBundle,
+    claimEvaluation,
   });

-  const reusedFromIdempotency = Boolean(requalified.reusedFromIdempotencyKey);
-
-  if (product.evidenceId) {
-    const existing = await findExistingW3cPostEvidence({
-      oa: input.oa,
-      projectId: input.projectId,
-      evidenceId: product.evidenceId,
-      attemptId: input.attempt.attemptId,
-      product,
-    });
-    if (existing) {
-      return {
-        ok: true,
-        reusedFromIdempotency,
+  // W3-C is best-effort after Product CE is durable — never erase a qualified
+  // Product outcome if Nora/LPS rehydrate fails.
+  let postEvidence: W3cPostEvidenceLoopResult | undefined;
+  try {
+    if (product.evidenceId) {
+      const existing = await findExistingW3cPostEvidence({
+        oa: input.oa,
+        projectId: input.projectId,
+        evidenceId: product.evidenceId,
+        attemptId: input.attempt.attemptId,
         product,
-        postEvidence: existing,
-      };
+      });
+      if (existing) {
+        return {
+          ok: true,
+          reusedFromIdempotency,
+          product,
+          postEvidence: existing,
+        };
+      }
+      const rehydrated = await rehydrateW3cPostEvidenceFromLps({
+        oa: input.oa,
+        projectId: input.projectId,
+        product,
+      });
+      if (rehydrated.ok) {
+        return {
+          ok: true,
+          reusedFromIdempotency,
+          product,
+          postEvidence: rehydrated,
+        };
+      }
     }
-    const rehydrated = await rehydrateW3cPostEvidenceFromLps({
+
+    postEvidence = await runW3cPostEvidenceLoop({
       oa: input.oa,
       projectId: input.projectId,
+      attemptId: input.attempt.attemptId,
       product,
     });
-    if (rehydrated.ok) {
-      return {
-        ok: true,
-        reusedFromIdempotency,
-        product,
-        postEvidence: rehydrated,
-      };
-    }
+  } catch {
+    postEvidence = undefined;
   }

-  const postEvidence = await runW3cPostEvidenceLoop({
-    oa: input.oa,
-    projectId: input.projectId,
-    attemptId: input.attempt.attemptId,
-    product,
-  });
-
   return {
     ok: true,
     reusedFromIdempotency,
@@ -227,6 +279,8 @@ export async function materializeW3bProductTerminal(input: {
   readonly claimedProductOutcome?: unknown;
   readonly cycleProfile?: unknown;
   readonly ckcId?: unknown;
+  /** Optional hot worktree from docs_write completion (same request). */
+  readonly docsWriteWorktreeRef?: string | null;
 }): Promise<MaterializeW3bProductTerminalResult> {
   void input.claimedProductOutcome;
   void input.cycleProfile;
@@ -251,6 +305,7 @@ export async function materializeW3bProductTerminal(input: {
         projectId: input.projectId,
         attempt,
         contract,
+        docsWriteWorktreeRef: input.docsWriteWorktreeRef,
       });
     }
   }
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
index e46773d2..e7a6c6a5 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
@@ -273,6 +273,42 @@ export function projectW3bProductTerminal(input: {
     };
   }

+  // Succeeded Attempt + Contract Result not_proven/fail → honest Product projection
+  // (technical success preserved; no SUCCESS claim).
+  if (
+    input.attempt.status === "succeeded" &&
+    (ce.status === "not_proven" || ce.status === "fail")
+  ) {
+    const assessments = ce.expectedOutputAssessments ?? [];
+    const gaps = assessments
+      .filter((a) => a.result !== "PASS")
+      .map((a) => `${a.expectation}: ${a.result}`);
+    const produced =
+      assessments
+        .filter((a) => a.result === "PASS")
+        .map((a) => a.expectation)
+        .join(" · ") || "livrable technique enregistré";
+    const gapText =
+      gaps.length > 0
+        ? gaps.join(" · ")
+        : "critères de conformité du contrat non satisfaits";
+    return {
+      ...base,
+      outcome: ce.status === "fail" ? "FAIL" : "UNCLAIMED",
+      businessHeadline:
+        ce.status === "fail"
+          ? "Livrable non conforme"
+          : "Conformité non prouvée",
+      businessReason: `Produit : ${produced}. Écarts : ${gapText}. Aucune relance automatique.`,
+      claimAllowed: false,
+      governedBoundary: null,
+      evidenceSummary:
+        ce.status === "fail"
+          ? evidenceSummaryFor("FAIL", input.attempt.status)
+          : "Evidence artifact présente — conformité Contract Result non prouvée.",
+    };
+  }
+
   if (
     input.attempt.status === "cancelled" &&
     input.attempt.stopOrigin === "SYSTEM_GOVERNED_STOP" &&
```

## Tests exécutés
```
npx vitest run automaticResultQualification.d0.test.ts claimEvidenceCompletion.d0.test.ts
  productJourneyGovernedDocsWriteWiring.d0.test.ts trajectorySurface.ui.test.tsx
  w3bProductTerminal.test.ts w3cPostEvidenceLoop.test.ts
```
- automaticResultQualification: 5/5 PASS (T1–T4, T6)
- claimEvidenceCompletion: PASS
- productJourneyGovernedDocsWriteWiring: 30/30 PASS
- trajectorySurface / w3b / w3c: PASS
- Combined targeted: 43 PASS

## Preuves invariants
- Cursor REAL spawn: 0
- FocusFlow Attempt count: 1 unchanged
- No SQL / no FocusFlow DB mutation
- No push/PR/merge projet
- runtime v3 NON ADOPTED
- Product Completion/C6 not reopened

## UX avant / après
| Avant | Après |
|-------|--------|
| À QUALIFIER + reload | Qualification auto post-terminal |
| CE NOT_PROVEN sans conformity | Conformity auto → CE pass si conforme |
| Message opaque | Succès / Conformité non prouvée + écarts |
| evaluate_claim métier | Non — internes secondaires |

## Réserves
- W3-C best-effort si LPS/Nora partiel (CE Product déjà durable).
- Réconciliation FocusFlow historique non exécutée (GO REAL consommé).
- .env.example dirty pré-existant hors scope.

## Dette / exit
- Exit proof déterministe: succeeded + artifact conforme → SUCCESS sans clic qualification.
- Pas de nouvelle dette Evidence.

## Décisions Morris
- Push/PR code: non (hors GO ce cycle) — code local seulement.
- Relance REAL FocusFlow: interdite.

## Verdict
**PRODUCT-JOURNEY-AUTOMATIC-RESULT-QUALIFICATION-01 — IMPLEMENTED — READY FOR CHATGPT CRITICAL REVIEW**

## CHATGPT REVIEW REQUIRED — READ REMOTE CANONICAL HANDOFF BEFORE VERDICT
