import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
  contractResultBindingsMatchCurrentFacts,
} from "@/lib/oa/evidence-review";
import {
  type BuildProductSynthesisInput,
  type BuildProductSynthesisRecommendation,
} from "@/lib/oa/synthesis";
import { isSynthesisDomainError } from "@/lib/oa/synthesis";

export type BuildProductSynthesisLineageResult =
  | { readonly ok: true; readonly input: BuildProductSynthesisInput }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

/**
 * Loads durable Product OA facts for a Contract Result ClaimEvaluation and
 * builds BuildProductSynthesisInput — no invented verdict or recommendation.
 * Fail-closed on non Contract-Result subject, binding mismatch, or missing Evidence.
 * Recommendation is caller-supplied only (no stale W3-C fallback).
 */
export async function buildProductSynthesisLineageInput(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly claimEvaluationId: string;
  readonly title?: string;
  readonly generatedAt?: string;
  readonly recommendation?: BuildProductSynthesisRecommendation | null;
}): Promise<BuildProductSynthesisLineageResult> {
  const projectId = input.projectId.trim();
  const claimEvaluationId = input.claimEvaluationId.trim();
  if (!projectId || !claimEvaluationId) {
    return {
      ok: false,
      code: "INVALID_INPUT",
      message: "projectId et claimEvaluationId requis.",
    };
  }

  const claimEvaluation =
    await input.oa.evidenceReviewServices.claimEvaluationReader.findById(
      claimEvaluationId,
    );
  if (!claimEvaluation) {
    return {
      ok: false,
      code: "CLAIM_EVALUATION_NOT_FOUND",
      message: "ClaimEvaluation introuvable.",
    };
  }

  if (
    claimEvaluation.subjectKind !==
    CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT
  ) {
    return {
      ok: false,
      code: "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_SUBJECT",
      message:
        "La synthèse Product exige une évaluation de résultat de contrat.",
    };
  }

  const bindings = claimEvaluation.contractResultBindings;
  if (!bindings) {
    return {
      ok: false,
      code: "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_BINDINGS",
      message:
        "La synthèse Product exige des liaisons de résultat de contrat.",
    };
  }

  const boundProject = bindings.projectId;
  if (boundProject !== projectId) {
    return {
      ok: false,
      code: "CLAIM_EVALUATION_PROJECT_MISMATCH",
      message: "ClaimEvaluation liée à un autre projet.",
    };
  }

  const attemptId = bindings.executionAttemptId;
  const attempt =
    await input.oa.executionAttemptServices.attempts.findById(attemptId);
  if (!attempt) {
    return {
      ok: false,
      code: "SYNTHESIS_LINEAGE_BINDINGS_MISMATCH",
      message: "Tentative liée introuvable pour la synthèse.",
    };
  }

  const reviewBundleId = bindings.reviewBundleId;
  const reviewBundle =
    await input.oa.evidenceReviewServices.reviewBundleReader.findById(
      reviewBundleId,
    );
  if (!reviewBundle) {
    return {
      ok: false,
      code: "SYNTHESIS_LINEAGE_BINDINGS_MISMATCH",
      message: "Dossier d'évaluation lié introuvable pour la synthèse.",
    };
  }

  // Canonical evidence identity/order from CE bindings — used after match for sections.
  const boundEvidenceIds = [...bindings.evidenceRefs];
  // Current facts for matcher = ReviewBundle evidence order (not CE bindings echo).
  const currentEvidenceIds = [...reviewBundle.evidenceRefs];

  if (
    !contractResultBindingsMatchCurrentFacts({
      bindings,
      attempt: {
        attemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
        executionContractVersion: attempt.executionContractVersion,
        executionContractSemanticFingerprint:
          attempt.executionContractSemanticFingerprint,
        boundExecutionContract: attempt.boundExecutionContract,
      },
      reviewBundle: {
        reviewBundleId: reviewBundle.reviewBundleId,
        frozenVersion: reviewBundle.frozenVersion,
      },
      evidenceIds: currentEvidenceIds,
      projectId,
      cycleInstanceId: bindings.cycleInstanceId ?? null,
    })
  ) {
    return {
      ok: false,
      code: "SYNTHESIS_LINEAGE_BINDINGS_MISMATCH",
      message:
        "Les liaisons Product ne correspondent pas aux faits durables courants.",
    };
  }

  const evidenceReader = input.oa.evidenceReviewServices.evidenceReader;
  const evidence: Array<{
    evidenceId: string;
    status: string;
    type: string;
  }> = [];
  for (const id of boundEvidenceIds) {
    const ev = await evidenceReader.findById(id);
    if (!ev) {
      return {
        ok: false,
        code: "SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND",
        message: `Élément de preuve lié introuvable: ${id}`,
      };
    }
    evidence.push({
      evidenceId: ev.evidenceId,
      status: ev.status,
      type: ev.type,
    });
  }

  // Planned semantics from Attempt-bound EC snapshot — never mutable latest EC.
  // Never pass raw action/target/scope into Pilot sections; only human-readable
  // title/objective/description when present on bound semantic material.
  const snap = attempt.boundExecutionContract;
  const material = snap?.semanticMaterial;
  const materialExtra = material as unknown as {
    title?: unknown;
    objective?: unknown;
    description?: unknown;
  };
  const humanTitle =
    typeof materialExtra?.title === "string"
      ? materialExtra.title.trim()
      : "";
  const humanObjective =
    typeof materialExtra?.objective === "string"
      ? materialExtra.objective.trim()
      : "";
  const humanDescription =
    typeof materialExtra?.description === "string"
      ? materialExtra.description.trim()
      : "";

  const executionContract: BuildProductSynthesisInput["executionContract"] =
    material
      ? {
          executionContractId: material.executionContractId,
          // Keep machine codes off the Pilot projection path (presentPlanned ignores them).
          action: material.action,
          target: material.target,
          scope: material.scope,
          ...(humanTitle ? { title: humanTitle } : {}),
          ...(humanObjective ? { objective: humanObjective } : {}),
          ...(humanDescription ? { description: humanDescription } : {}),
          cycleInstanceId: material.cycleInstanceId ?? null,
          executionContractVersion: snap.executionContractVersion,
          semanticFingerprint: snap.semanticFingerprint,
        }
      : {
          executionContractId: bindings.executionContractId,
          executionContractVersion: bindings.executionContractVersion,
          semanticFingerprint: bindings.executionContractSemanticFingerprint,
          cycleInstanceId: bindings.cycleInstanceId ?? null,
        };

  // CP02 Axis 3 — no stale findExistingW3cPostEvidence fallback.
  const recommendation: BuildProductSynthesisRecommendation | null =
    input.recommendation ?? null;

  return {
    ok: true,
    input: {
      projectId,
      claimEvaluation,
      executionContract,
      attempt: {
        attemptId: attempt.attemptId,
        status: attempt.status,
        resultRef: attempt.resultRef ?? null,
      },
      evidence,
      reviewBundle: {
        reviewBundleId: reviewBundle.reviewBundleId,
        status: reviewBundle.status,
        completeness: reviewBundle.completeness,
        frozenVersion: reviewBundle.frozenVersion,
      },
      recommendation,
      title: input.title,
      generatedAt: input.generatedAt,
      cycleInstanceId: bindings.cycleInstanceId ?? null,
    },
  };
}

export function synthesisErrorMessage(err: unknown): string {
  if (isSynthesisDomainError(err)) {
    return err.message || err.detailCode;
  }
  if (err instanceof Error && err.message.trim()) {
    return err.message;
  }
  return "Opération synthèse indisponible.";
}
