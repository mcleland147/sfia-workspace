/**
 * W3-C — Post-Evidence loop after W3-B terminal materialize.
 * Consumes durable Evidence / RB / CE (no re-ingest). Recommendation only —
 * never HumanDecision, never auto trajectory mutation, never auto new cycle.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
import {
  analyzePostEvidenceWithProvider,
  extractPostEvidenceAnalysisFromLpsContext,
  formatPostEvidenceAnalysisForLps,
} from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";

export type W3cRecommendationKind =
  | "continue"
  | "recover"
  | "replan"
  | "fail_closed";

export type W3cPostEvidenceRecommendation = {
  kind: W3cRecommendationKind;
  headline: string;
  rationale: string;
  nextStep: string;
  requiresHumanDecision: boolean;
  /** Always recommendation — never authority */
  authority: "none";
  gateConsumed: false;
  decisionCreated: false;
  attemptAutoLaunchNextCycle: false;
  recommendNextGateStatus: string | null;
  nextActionCode: string | null;
};

export type W3cPostEvidenceLoopSuccess = {
  ok: true;
  noraInvoked: boolean;
  replanInvoked: false; // never auto-replan; propose is separate user action
  analysisText: string | null;
  analysisUnavailableReason: string | null;
  analysisProviderId: string | null;
  recommendation: W3cPostEvidenceRecommendation;
  lpsVersion: number | null;
  evidenceId: string;
  reviewBundleId: string;
  claimEvaluationId: string | null;
  productOutcome: "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";
};

export type W3cPostEvidenceLoopResult =
  | W3cPostEvidenceLoopSuccess
  | { ok: false; code: string; message: string; failClosed: true };

const ANTI_AUTHORITY = {
  authority: "none" as const,
  gateConsumed: false as const,
  decisionCreated: false as const,
  attemptAutoLaunchNextCycle: false as const,
};

function failClosed(
  code: string,
  message: string,
): Extract<W3cPostEvidenceLoopResult, { ok: false }> {
  return { ok: false, code, message, failClosed: true };
}

function recommendationFromOutcome(input: {
  outcome: "SUCCESS" | "STOP" | "FAIL";
  recommendNextGateStatus: string | null;
  nextActionCode: string | null;
}): W3cPostEvidenceRecommendation {
  if (input.outcome === "SUCCESS") {
    return {
      kind: "continue",
      headline: "Continuer avec la recommandation",
      rationale:
        "Succès produit durable — recommandation non autoritaire ; replan structurel uniquement via propose + decide explicites.",
      nextStep: "continue_with_recommendation",
      requiresHumanDecision: false,
      ...ANTI_AUTHORITY,
      recommendNextGateStatus: input.recommendNextGateStatus,
      nextActionCode: input.nextActionCode,
    };
  }
  if (input.outcome === "STOP") {
    return {
      kind: "recover",
      headline: "Requalification après arrêt gouverné",
      rationale:
        "Arrêt gouverné durable — recovery requiert une décision humaine après propose explicite.",
      nextStep: "recovery_requalify",
      requiresHumanDecision: true,
      ...ANTI_AUTHORITY,
      recommendNextGateStatus: input.recommendNextGateStatus,
      nextActionCode: input.nextActionCode,
    };
  }
  return {
    kind: "recover",
    headline: "Diagnostiquer ou replanifier après échec",
    rationale:
      "Échec technique durable — recovery / replan structurel nécessite propose puis decide.",
    nextStep: "recovery_diagnose_or_replan",
    requiresHumanDecision: true,
    ...ANTI_AUTHORITY,
    recommendNextGateStatus: input.recommendNextGateStatus,
    nextActionCode: input.nextActionCode,
  };
}

function failClosedRecommendation(input: {
  recommendNextGateStatus: string | null;
  nextActionCode: string | null;
  rationale: string;
}): W3cPostEvidenceRecommendation {
  return {
    kind: "fail_closed",
    headline: "Coordination post-Evidence refusée",
    rationale: input.rationale,
    nextStep: "fail_closed",
    requiresHumanDecision: true,
    ...ANTI_AUTHORITY,
    recommendNextGateStatus: input.recommendNextGateStatus,
    nextActionCode: input.nextActionCode,
  };
}

function rebuildRecommendationFromDurable(input: {
  outcome: "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";
  nextStep: string | null | undefined;
}): W3cPostEvidenceRecommendation | null {
  if (
    input.outcome !== "SUCCESS" &&
    input.outcome !== "STOP" &&
    input.outcome !== "FAIL"
  ) {
    return null;
  }
  const built = recommendationFromOutcome({
    outcome: input.outcome,
    recommendNextGateStatus: null,
    nextActionCode: null,
  });
  if (input.nextStep && input.nextStep.trim()) {
    return { ...built, nextStep: input.nextStep.trim() };
  }
  return built;
}

export async function runW3cPostEvidenceLoop(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly attemptId: string;
  readonly product: W3BProductTerminalProjection;
}): Promise<W3cPostEvidenceLoopResult> {
  const { oa, projectId, attemptId, product } = input;

  if (product.outcome === "UNCLAIMED") {
    return failClosed(
      "PRODUCT_UNCLAIMED",
      "Résultat produit non claimable — boucle post-Evidence refusée.",
    );
  }
  if (!product.evidenceId || !product.reviewBundleId) {
    return failClosed(
      "EVIDENCE_REFS_MISSING",
      "Evidence / ReviewBundle absents sur le produit W3-B — fail-closed.",
    );
  }

  const services = oa.evidenceReviewServices;
  if (!services) {
    return failClosed(
      "EVIDENCE_STACK_UNAVAILABLE",
      "Services Evidence indisponibles.",
    );
  }

  const evidence = await services.evidenceReader.findById(product.evidenceId);
  const reviewBundle = await services.reviewBundleReader.findById(
    product.reviewBundleId,
  );
  if (!evidence || !reviewBundle) {
    return failClosed(
      "EVIDENCE_OR_RB_MISSING",
      "Evidence ou ReviewBundle W3-B introuvable — fail-closed.",
    );
  }
  if (
    evidence.bindings.projectId &&
    evidence.bindings.projectId !== projectId
  ) {
    return failClosed(
      "EVIDENCE_PROJECT_MISMATCH",
      "Evidence liée à un autre projet.",
    );
  }
  if (reviewBundle.projectId !== projectId) {
    return failClosed(
      "REVIEW_BUNDLE_PROJECT_MISMATCH",
      "ReviewBundle liée à un autre projet.",
    );
  }
  if (
    reviewBundle.status !== "ready_for_review" &&
    !reviewBundle.frozenAt
  ) {
    return failClosed(
      "REVIEW_BUNDLE_NOT_FROZEN",
      "ReviewBundle non figée — fail-closed.",
    );
  }

  let claimEvaluation = null;
  if (product.claimEvaluationId) {
    claimEvaluation = await services.claimEvaluationReader.findById(
      product.claimEvaluationId,
    );
  }

  if (product.outcome === "SUCCESS") {
    if (!claimEvaluation) {
      return failClosed(
        "CLAIM_EVALUATION_MISSING",
        "SUCCESS exige une ClaimEvaluation durable.",
      );
    }
    if (claimEvaluation.status !== "pass" || !product.claimAllowed) {
      return failClosed(
        "CLAIM_NOT_PASSED",
        "SUCCESS sans claim pass / claimAllowed — fail-closed.",
      );
    }
  }

  const claimEvaluationRefs = claimEvaluation
    ? [{ id: claimEvaluation.claimEvaluationId, version: claimEvaluation.version }]
    : undefined;

  const recommended = await services.recommendNextGate.execute({
    projectId,
    subjectRef:
      evidence.bindings.executionContractId ??
      product.technicalDetail.executionContractId,
    evidenceRefs: [{ id: evidence.evidenceId, version: evidence.version }],
    reviewBundleRefs: [
      { id: reviewBundle.reviewBundleId, version: reviewBundle.version },
    ],
    ...(claimEvaluationRefs ? { claimEvaluationRefs } : {}),
    attemptAutoLaunchNextCycle: false,
    actor: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
    correlationId: `cor:w3c-reco:${attemptId}`,
  });

  let recommendNextGateStatus: string | null = null;
  let nextActionCode: string | null = null;
  let recommendation: W3cPostEvidenceRecommendation;

  if (!recommended.ok) {
    // Sources exist (we loaded them) but coordination refused → honest fail_closed recommendation.
    recommendation = failClosedRecommendation({
      recommendNextGateStatus: recommended.error.detailCode,
      nextActionCode: null,
      rationale: recommended.error.message,
    });
  } else {
    recommendNextGateStatus = recommended.coordination.status;
    nextActionCode =
      recommended.coordination.nextAction?.actionCode ?? null;
    recommendation = recommendationFromOutcome({
      outcome: product.outcome,
      recommendNextGateStatus,
      nextActionCode,
    });
  }

  let analysisText: string | null = null;
  let analysisUnavailableReason: string | null = null;
  let analysisProviderId: string | null = null;
  let noraInvoked = false;

  let contractStatus = "unknown";
  let contractAction = "unknown";
  let attemptStatus = product.technicalDetail.attemptStatus;
  let selectedAgentRef = "unknown";
  let adapterRef = "adp:unknown";
  let executionMode = "unknown";
  let realProcessInvoked = false;

  if (oa.executionAttemptServices) {
    const loaded = await oa.executionAttemptServices.getExecutionAttempt.execute({
      attemptId,
    });
    if (loaded.ok) {
      attemptStatus = loaded.attempt.status;
      selectedAgentRef = loaded.attempt.selectedAgentRef;
      const agent = oa.executionAttemptServices.registry.getAgent(
        loaded.attempt.selectedAgentRef,
      );
      const provenance = deriveAttemptProvenance({
        attempt: loaded.attempt,
        agent,
      });
      adapterRef = provenance.adapterRef;
      executionMode = provenance.executionMode;
      realProcessInvoked = provenance.realProcessInvoked;
    }
  }
  if (oa.executionContractServices) {
    const loaded =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: product.technicalDetail.executionContractId,
      });
    if (loaded.ok) {
      contractStatus = loaded.contract.status;
      contractAction = loaded.contract.action;
    }
  }

  noraInvoked = true;
  const analysis = await analyzePostEvidenceWithProvider({
    projectId,
    executionContractId: product.technicalDetail.executionContractId,
    executionContractStatus: contractStatus,
    executionContractAction: contractAction,
    attemptId,
    attemptStatus,
    selectedAgentRef,
    adapterRef,
    executionMode,
    realProcessInvoked,
    evidenceId: product.evidenceId,
    reviewBundleId: product.reviewBundleId,
    technicalResultRef: product.technicalDetail.resultRef,
    reservations: product.reservations,
  });
  if (analysis.ok) {
    analysisText = analysis.text;
    analysisProviderId = analysis.providerId;
  } else {
    analysisUnavailableReason = analysis.message;
    analysisProviderId = analysis.providerId;
  }

  const analysisNote = formatPostEvidenceAnalysisForLps(
    analysis.ok
      ? { analysisText: analysis.text }
      : { unavailableReason: analysis.message },
  );

  let lpsVersion: number | null = null;
  if (oa.projectServices) {
    const linked = await appendEvidenceOutcomeToLps({
      projectId,
      evidenceId: product.evidenceId,
      reviewBundleId: product.reviewBundleId,
      projectServices: oa.projectServices,
      analysisNote,
      nextStep: recommendation.nextStep,
    });
    if (!linked.ok) {
      return failClosed(linked.code, linked.message);
    }
    lpsVersion = linked.lpsVersion;
  }

  return {
    ok: true,
    noraInvoked,
    replanInvoked: false,
    analysisText,
    analysisUnavailableReason,
    analysisProviderId,
    recommendation,
    lpsVersion,
    evidenceId: product.evidenceId,
    reviewBundleId: product.reviewBundleId,
    claimEvaluationId: product.claimEvaluationId,
    productOutcome: product.outcome,
  };
}

export async function rehydrateW3cPostEvidenceFromLps(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly product: W3BProductTerminalProjection;
}): Promise<W3cPostEvidenceLoopResult> {
  const { oa, projectId, product } = input;

  if (!product.evidenceId || !product.reviewBundleId) {
    return failClosed(
      "EVIDENCE_REFS_MISSING",
      "Produit sans refs Evidence/RB — rehydrate post-Evidence refuse.",
    );
  }
  if (product.outcome === "UNCLAIMED") {
    return failClosed(
      "PRODUCT_UNCLAIMED",
      "UNCLAIMED — pas de boucle post-Evidence à rehydrater.",
    );
  }
  if (!oa.projectServices) {
    return failClosed(
      "PROJECT_SERVICES_UNAVAILABLE",
      "ProjectServices indisponibles pour rehydrate LPS.",
    );
  }

  const current = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!current.ok) {
    return failClosed(current.error.detailCode, current.error.message);
  }

  const lps = current.livingProjectState;
  const evidenceIds = lps.evidenceIds ?? [];
  if (!evidenceIds.includes(product.evidenceId)) {
    return failClosed(
      "LPS_EVIDENCE_REF_MISSING",
      "LPS sans evidenceId W3-B pour ce produit — fail-closed.",
    );
  }

  const postEvidence = extractPostEvidenceAnalysisFromLpsContext(lps.context);
  const recommendation = rebuildRecommendationFromDurable({
    outcome: product.outcome,
    nextStep: lps.nextStep,
  });
  if (!recommendation) {
    return failClosed(
      "RECOMMENDATION_UNRECONSTRUCTIBLE",
      "Impossible de reconstruire la recommandation depuis le produit / LPS.",
    );
  }

  return {
    ok: true,
    noraInvoked: Boolean(postEvidence.analysisText),
    replanInvoked: false,
    analysisText: postEvidence.analysisText,
    analysisUnavailableReason: postEvidence.analysisUnavailableReason,
    analysisProviderId: null,
    recommendation,
    lpsVersion: lps.version,
    evidenceId: product.evidenceId,
    reviewBundleId: product.reviewBundleId,
    claimEvaluationId: product.claimEvaluationId,
    productOutcome: product.outcome,
  };
}
