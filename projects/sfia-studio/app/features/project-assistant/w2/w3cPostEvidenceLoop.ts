/**
 * W3-C — Post-Evidence loop after W3-B terminal materialize.
 * Consumes durable Evidence / RB / CE (no re-ingest). Recommendation only —
 * never HumanDecision, never auto trajectory mutation, never auto new cycle.
 *
 * Structural HumanDecision only via explicit W2 propose + decide — Recovery
 * CTA ≠ automatic HD (requiresHumanDecision false on STOP/FAIL/fail_closed
 * unless coordination nextAction clearly indicates structural replan).
 */

import { createHash } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { EpistemicItem } from "@/lib/oa/cycle";
import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
import {
  analyzePostEvidenceWithProvider,
  extractW3cPostEvidenceAnalysisForEvidence,
  formatPostEvidenceAnalysisForLps,
  lastW3cEvidenceIdInLpsContext,
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

export type W3cRecommendationPayload = {
  kind: W3cRecommendationKind;
  headline: string;
  rationale: string;
  nextStep: string;
  requiresHumanDecision: boolean;
  authority: "none";
  gateConsumed: false;
  decisionCreated: false;
  attemptAutoLaunchNextCycle: false;
  recommendNextGateStatus: string | null;
  nextActionCode: string | null;
  evidenceId: string;
  attemptId: string;
  reviewBundleId: string;
  claimEvaluationId: string | null;
  productOutcome: "SUCCESS" | "STOP" | "FAIL";
  analysisText: string | null;
  analysisUnavailableReason: string | null;
  analysisProviderId: string | null;
  noraInvoked: boolean;
  lpsVersion: number | null;
};

const ANTI_AUTHORITY = {
  authority: "none" as const,
  gateConsumed: false as const,
  decisionCreated: false as const,
  attemptAutoLaunchNextCycle: false as const,
};

const NORA_RATIONALE_BOUND = 1200;
const W3C_SOURCE_PREFIX = "w3c-post-evidence:";
const W3C_EPI_ID_PREFIX = "epi:w3c-rec:";

/** Deterministic Epistemic Recommendation id for a W3-B evidenceId. */
export function w3cRecommendationEpistemicId(evidenceId: string): string {
  const digest = createHash("sha256")
    .update(evidenceId)
    .digest("hex")
    .slice(0, 16);
  return `${W3C_EPI_ID_PREFIX}${digest}`;
}

function failClosed(
  code: string,
  message: string,
): Extract<W3cPostEvidenceLoopResult, { ok: false }> {
  return { ok: false, code, message, failClosed: true };
}

/**
 * Structural replan signal from RecommendNextGate coordination — only then
 * kind:"replan" + requiresHumanDecision:true. Default recovery stays HD-free;
 * structural HD only via explicit W2 propose + decide.
 */
function isStructuralReplanNextAction(actionCode: string | null): boolean {
  if (!actionCode) return false;
  const lower = actionCode.toLowerCase();
  return lower.includes("replan") || lower.includes("trajectory");
}

function recommendationFromOutcome(input: {
  outcome: "SUCCESS" | "STOP" | "FAIL";
  recommendNextGateStatus: string | null;
  nextActionCode: string | null;
}): W3cPostEvidenceRecommendation {
  const structural = isStructuralReplanNextAction(input.nextActionCode);

  if (input.outcome === "SUCCESS") {
    return {
      kind: structural ? "replan" : "continue",
      headline: structural
        ? "Replan structurel recommandé (après coordination)"
        : "Continuer avec la recommandation",
      rationale:
        "Succès produit durable — recommandation non autoritaire ; replan structurel uniquement via propose + decide explicites.",
      nextStep: structural
        ? "structural_replan_propose"
        : "continue_with_recommendation",
      // SUCCESS default false; structural path needs explicit W2 HD after propose.
      requiresHumanDecision: structural,
      ...ANTI_AUTHORITY,
      recommendNextGateStatus: input.recommendNextGateStatus,
      nextActionCode: input.nextActionCode,
    };
  }

  if (structural) {
    return {
      kind: "replan",
      headline: "Replan structurel après terminal",
      rationale:
        "Coordination indique un replan structurel — HumanDecision uniquement via propose + decide W2 explicites.",
      nextStep: "structural_replan_propose",
      requiresHumanDecision: true,
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
        "Arrêt gouverné durable — Recovery ≠ HumanDecision automatique ; propose + decide explicites pour replan structurel.",
      nextStep: "recovery_requalify",
      // Recovery CTA is consumable without automatic HD.
      requiresHumanDecision: false,
      ...ANTI_AUTHORITY,
      recommendNextGateStatus: input.recommendNextGateStatus,
      nextActionCode: input.nextActionCode,
    };
  }
  return {
    kind: "recover",
    headline: "Diagnostiquer ou replanifier après échec",
    rationale:
      "Échec technique durable — Recovery ≠ HumanDecision automatique ; replan structurel uniquement via propose + decide.",
    nextStep: "recovery_diagnose_or_replan",
    requiresHumanDecision: false,
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
    // fail_closed is not automatic HD — Recovery ≠ HumanDecision.
    requiresHumanDecision: false,
    ...ANTI_AUTHORITY,
    recommendNextGateStatus: input.recommendNextGateStatus,
    nextActionCode: input.nextActionCode,
  };
}

function enrichRecommendationWithNora(
  base: W3cPostEvidenceRecommendation,
  analysis: {
    ok: boolean;
    text?: string;
    message?: string;
  },
): W3cPostEvidenceRecommendation {
  if (!analysis.ok || !analysis.text?.trim()) {
    return base;
  }
  const bounded = analysis.text.trim().slice(0, NORA_RATIONALE_BOUND);
  const headline = base.headline.includes("après analyse Nora")
    ? base.headline
    : `${base.headline} (après analyse Nora)`;
  return {
    ...base,
    headline,
    rationale: `${base.rationale}\n\nAnalyse Nora: ${bounded}`,
  };
}

function isW3cPostEvidenceItem(item: EpistemicItem): boolean {
  const source = item.source ?? "";
  return (
    item.type === "Recommendation" &&
    (source.startsWith(W3C_SOURCE_PREFIX) ||
      item.epistemicItemId.startsWith(W3C_EPI_ID_PREFIX))
  );
}

function isRecommendationKind(value: unknown): value is W3cRecommendationKind {
  return (
    value === "continue" ||
    value === "recover" ||
    value === "replan" ||
    value === "fail_closed"
  );
}

export function parseW3cRecommendationPayload(
  statement: string,
): W3cRecommendationPayload | null {
  try {
    const raw = JSON.parse(statement) as Record<string, unknown>;
    if (raw.kind !== "w3c_post_evidence_recommendation") return null;
    if (
      typeof raw.evidenceId !== "string" ||
      typeof raw.attemptId !== "string" ||
      typeof raw.reviewBundleId !== "string" ||
      typeof raw.headline !== "string" ||
      typeof raw.rationale !== "string" ||
      typeof raw.nextStep !== "string"
    ) {
      return null;
    }
    const productOutcome = raw.productOutcome;
    if (
      productOutcome !== "SUCCESS" &&
      productOutcome !== "STOP" &&
      productOutcome !== "FAIL"
    ) {
      return null;
    }
    const finalKind = raw.recommendationKind;
    if (!isRecommendationKind(finalKind)) return null;

    return {
      kind: finalKind,
      headline: raw.headline,
      rationale: raw.rationale,
      nextStep: raw.nextStep,
      requiresHumanDecision: Boolean(raw.requiresHumanDecision),
      authority: "none",
      gateConsumed: false,
      decisionCreated: false,
      attemptAutoLaunchNextCycle: false,
      recommendNextGateStatus:
        typeof raw.recommendNextGateStatus === "string"
          ? raw.recommendNextGateStatus
          : null,
      nextActionCode:
        typeof raw.nextActionCode === "string" ? raw.nextActionCode : null,
      evidenceId: raw.evidenceId,
      attemptId: raw.attemptId,
      reviewBundleId: raw.reviewBundleId,
      claimEvaluationId:
        typeof raw.claimEvaluationId === "string"
          ? raw.claimEvaluationId
          : null,
      productOutcome,
      analysisText:
        typeof raw.analysisText === "string" ? raw.analysisText : null,
      analysisUnavailableReason:
        typeof raw.analysisUnavailableReason === "string"
          ? raw.analysisUnavailableReason
          : null,
      analysisProviderId:
        typeof raw.analysisProviderId === "string"
          ? raw.analysisProviderId
          : null,
      noraInvoked: Boolean(raw.noraInvoked),
      lpsVersion: typeof raw.lpsVersion === "number" ? raw.lpsVersion : null,
    };
  } catch {
    return null;
  }
}

export function serializeW3cRecommendationPayload(
  payload: W3cRecommendationPayload,
): string {
  return serializePayload(payload);
}

function buildPayloadFromSuccess(
  success: W3cPostEvidenceLoopSuccess,
  attemptId: string,
): W3cRecommendationPayload {
  if (
    success.productOutcome !== "SUCCESS" &&
    success.productOutcome !== "STOP" &&
    success.productOutcome !== "FAIL"
  ) {
    throw new Error("payload_requires_claimable_outcome");
  }
  return {
    kind: success.recommendation.kind,
    headline: success.recommendation.headline,
    rationale: success.recommendation.rationale,
    nextStep: success.recommendation.nextStep,
    requiresHumanDecision: success.recommendation.requiresHumanDecision,
    authority: "none",
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    recommendNextGateStatus: success.recommendation.recommendNextGateStatus,
    nextActionCode: success.recommendation.nextActionCode,
    evidenceId: success.evidenceId,
    attemptId,
    reviewBundleId: success.reviewBundleId,
    claimEvaluationId: success.claimEvaluationId,
    productOutcome: success.productOutcome,
    analysisText: success.analysisText,
    analysisUnavailableReason: success.analysisUnavailableReason,
    analysisProviderId: success.analysisProviderId,
    noraInvoked: success.noraInvoked,
    lpsVersion: success.lpsVersion,
  };
}

function serializePayload(payload: W3cRecommendationPayload): string {
  return JSON.stringify({
    kind: "w3c_post_evidence_recommendation",
    recommendationKind: payload.kind,
    headline: payload.headline,
    rationale: payload.rationale,
    nextStep: payload.nextStep,
    requiresHumanDecision: payload.requiresHumanDecision,
    authority: payload.authority,
    gateConsumed: payload.gateConsumed,
    decisionCreated: payload.decisionCreated,
    attemptAutoLaunchNextCycle: payload.attemptAutoLaunchNextCycle,
    recommendNextGateStatus: payload.recommendNextGateStatus,
    nextActionCode: payload.nextActionCode,
    evidenceId: payload.evidenceId,
    attemptId: payload.attemptId,
    reviewBundleId: payload.reviewBundleId,
    claimEvaluationId: payload.claimEvaluationId,
    productOutcome: payload.productOutcome,
    analysisText: payload.analysisText,
    analysisUnavailableReason: payload.analysisUnavailableReason,
    analysisProviderId: payload.analysisProviderId,
    noraInvoked: payload.noraInvoked,
    lpsVersion: payload.lpsVersion,
  });
}

// Keep public alias used by tests / callers.
export { serializePayload as serializeW3cRecommendationStatement };

function successFromPayload(
  payload: W3cRecommendationPayload,
): W3cPostEvidenceLoopSuccess {
  return {
    ok: true,
    noraInvoked: payload.noraInvoked,
    replanInvoked: false,
    analysisText: payload.analysisText,
    analysisUnavailableReason: payload.analysisUnavailableReason,
    analysisProviderId: payload.analysisProviderId,
    recommendation: {
      kind: payload.kind,
      headline: payload.headline,
      rationale: payload.rationale,
      nextStep: payload.nextStep,
      requiresHumanDecision: payload.requiresHumanDecision,
      ...ANTI_AUTHORITY,
      recommendNextGateStatus: payload.recommendNextGateStatus,
      nextActionCode: payload.nextActionCode,
    },
    lpsVersion: payload.lpsVersion,
    evidenceId: payload.evidenceId,
    reviewBundleId: payload.reviewBundleId,
    claimEvaluationId: payload.claimEvaluationId,
    productOutcome: payload.productOutcome,
  };
}

function itemBindsEvidenceAndAttempt(
  item: EpistemicItem,
  evidenceId: string,
  attemptId: string,
): boolean {
  const related = item.relatedObjects ?? [];
  const hasEvidence = related.includes(evidenceId);
  const hasAttempt =
    related.includes(attemptId) || related.includes(`attempt:${attemptId}`);
  if (hasEvidence && hasAttempt) return true;
  const parsed = parseW3cRecommendationPayload(item.statement);
  return (
    parsed !== null &&
    parsed.evidenceId === evidenceId &&
    parsed.attemptId === attemptId
  );
}

/**
 * Look up an active Epistemic W3-C recommendation bound to evidenceId+attemptId.
 */
export async function findExistingW3cPostEvidence(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly evidenceId: string;
  readonly attemptId: string;
}): Promise<W3cPostEvidenceLoopSuccess | null> {
  if (!input.oa.cycleServices) return null;
  const epistemic = await input.oa.cycleServices.getEpistemicState.execute({
    projectId: input.projectId,
  });
  if (!epistemic.ok) return null;

  const deterministicId = w3cRecommendationEpistemicId(input.evidenceId);
  const byId = epistemic.state.items.find(
    (i) =>
      i.epistemicItemId === deterministicId &&
      i.status === "active" &&
      isW3cPostEvidenceItem(i),
  );
  const candidate =
    byId ??
    epistemic.state.items.find(
      (i) =>
        i.status === "active" &&
        isW3cPostEvidenceItem(i) &&
        itemBindsEvidenceAndAttempt(i, input.evidenceId, input.attemptId),
    );
  if (!candidate) return null;
  if (
    !itemBindsEvidenceAndAttempt(candidate, input.evidenceId, input.attemptId)
  ) {
    return null;
  }
  const payload = parseW3cRecommendationPayload(candidate.statement);
  if (!payload) return null;
  if (
    payload.evidenceId !== input.evidenceId ||
    payload.attemptId !== input.attemptId
  ) {
    return null;
  }
  return successFromPayload(payload);
}

async function materializeW3cRecommendationEpistemic(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly attemptId: string;
  readonly success: W3cPostEvidenceLoopSuccess;
}): Promise<{ ok: true } | { ok: false; code: string; message: string }> {
  if (!input.oa.cycleServices) {
    return {
      ok: false,
      code: "CYCLE_SERVICES_UNAVAILABLE",
      message: "CycleServices indisponibles pour Epistemic W3-C.",
    };
  }
  const evidenceId = input.success.evidenceId;
  const epistemicId = w3cRecommendationEpistemicId(evidenceId);
  const epistemic = await input.oa.cycleServices.getEpistemicState.execute({
    projectId: input.projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: epistemic.error.detailCode,
      message: epistemic.error.message,
    };
  }

  // B4 W3C-R09: supersede ALL other active w3c-post-evidence recommendations
  // for this project when a new terminal becomes current.
  const priorActives = epistemic.state.items.filter(
    (i) =>
      i.status === "active" &&
      isW3cPostEvidenceItem(i) &&
      i.epistemicItemId !== epistemicId,
  );
  const sameEvidencePrior = epistemic.state.items.find(
    (i) =>
      i.status === "active" &&
      i.epistemicItemId === epistemicId &&
      isW3cPostEvidenceItem(i),
  );

  const payload = buildPayloadFromSuccess(input.success, input.attemptId);
  const relatedObjects = [
    input.projectId,
    input.attemptId,
    `attempt:${input.attemptId}`,
    evidenceId,
    input.success.reviewBundleId,
    ...(input.success.claimEvaluationId
      ? [input.success.claimEvaluationId]
      : []),
  ];

  const primarySupersedes =
    sameEvidencePrior && sameEvidencePrior.epistemicItemId !== epistemicId
      ? sameEvidencePrior.epistemicItemId
      : priorActives[0]?.epistemicItemId;

  const items: Array<{
    epistemicItemId: string;
    type: "Recommendation" | "Observation";
    statement: string;
    status: "active";
    source: string;
    relatedObjects: string[];
    supersedes?: string;
  }> = [
    {
      epistemicItemId: epistemicId,
      type: "Recommendation",
      statement: serializePayload(payload),
      status: "active",
      source: `${W3C_SOURCE_PREFIX}${evidenceId}`,
      relatedObjects,
      ...(primarySupersedes ? { supersedes: primarySupersedes } : {}),
    },
  ];

  // Additional priors (beyond the one linked via primary supersedes).
  const remaining = priorActives.filter(
    (p) => p.epistemicItemId !== primarySupersedes,
  );
  for (const prior of remaining) {
    const retireDigest = createHash("sha256")
      .update(`${prior.epistemicItemId}:${evidenceId}`)
      .digest("hex")
      .slice(0, 12);
    items.push({
      epistemicItemId: `epi:w3c-retire:${retireDigest}`,
      type: "Observation",
      statement: `W3-C supersede prior post-Evidence recommendation ${prior.epistemicItemId}`,
      status: "active",
      source: `${W3C_SOURCE_PREFIX}${evidenceId}`,
      relatedObjects: [
        input.projectId,
        evidenceId,
        prior.epistemicItemId,
      ],
      supersedes: prior.epistemicItemId,
    });
  }

  const updated = await input.oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items,
    createdBy: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
    correlationId: `cor:w3c-epi:${input.attemptId}`,
  });
  if (!updated.ok) {
    return {
      ok: false,
      code: updated.error.detailCode,
      message: updated.error.message,
    };
  }
  return { ok: true };
}

/**
 * Reconstruct success from Epistemic (any status) bound to this product.
 */
async function loadEpistemicPayloadForProduct(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly product: W3BProductTerminalProjection;
  readonly attemptId?: string;
}): Promise<W3cRecommendationPayload | null> {
  if (!input.oa.cycleServices || !input.product.evidenceId) return null;
  const epistemic = await input.oa.cycleServices.getEpistemicState.execute({
    projectId: input.projectId,
  });
  if (!epistemic.ok) return null;

  const deterministicId = w3cRecommendationEpistemicId(
    input.product.evidenceId,
  );
  const byId = epistemic.state.items.find(
    (i) => i.epistemicItemId === deterministicId && isW3cPostEvidenceItem(i),
  );
  const attemptId =
    input.attemptId ?? input.product.technicalDetail.attemptId;
  const byRelated = epistemic.state.items.find(
    (i) =>
      isW3cPostEvidenceItem(i) &&
      itemBindsEvidenceAndAttempt(i, input.product.evidenceId!, attemptId),
  );
  const item = byId ?? byRelated;
  if (!item) return null;
  const payload = parseW3cRecommendationPayload(item.statement);
  if (!payload) return null;
  if (payload.evidenceId !== input.product.evidenceId) return null;
  if (attemptId && payload.attemptId !== attemptId) return null;
  return payload;
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

  // B2 defense in depth — existing Epistemic → reconstruct, no Nora / LPS append.
  const existing = await findExistingW3cPostEvidence({
    oa,
    projectId,
    evidenceId: product.evidenceId,
    attemptId,
  });
  if (existing) {
    return existing;
  }

  const services = oa.evidenceReviewServices;
  if (!services) {
    return failClosed(
      "EVIDENCE_STACK_UNAVAILABLE",
      "Services Evidence indisponibles.",
    );
  }

  // 1. Validate Evidence / RB / CE
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

  // 2. RecommendNextGate
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
  let baseRecommendation: W3cPostEvidenceRecommendation;

  if (!recommended.ok) {
    baseRecommendation = failClosedRecommendation({
      recommendNextGateStatus: recommended.error.detailCode,
      nextActionCode: null,
      rationale: recommended.error.message,
    });
  } else {
    recommendNextGateStatus = recommended.coordination.status;
    nextActionCode =
      recommended.coordination.nextAction?.actionCode ?? null;
    baseRecommendation = recommendationFromOutcome({
      outcome: product.outcome,
      recommendNextGateStatus,
      nextActionCode,
    });
  }

  // 3. Nora analyzePostEvidenceWithProvider
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
    // Never invent Nora analysis when unavailable.
    analysisUnavailableReason = analysis.message;
    analysisProviderId = analysis.providerId;
  }

  // 4. Build recommendation from outcome + coordination + Nora
  const recommendation = enrichRecommendationWithNora(baseRecommendation, {
    ok: analysis.ok,
    text: analysis.ok ? analysis.text : undefined,
    message: analysis.ok ? undefined : analysis.message,
  });

  const analysisNote = formatPostEvidenceAnalysisForLps({
    ...(analysis.ok
      ? { analysisText: analysis.text }
      : { unavailableReason: analysis.message }),
    evidenceId: product.evidenceId,
  });

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

  const success: W3cPostEvidenceLoopSuccess = {
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

  const epi = await materializeW3cRecommendationEpistemic({
    oa,
    projectId,
    attemptId,
    success,
  });
  if (!epi.ok) {
    return failClosed(epi.code, epi.message);
  }

  return success;
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

  // PRIMARY: Epistemic Recommendation (even superseded) bound to this evidence.
  const payload = await loadEpistemicPayloadForProduct({
    oa,
    projectId,
    product,
    attemptId: product.technicalDetail.attemptId,
  });
  if (payload) {
    return successFromPayload(payload);
  }

  // Fallback: evidence-scoped LPS extract — never return B's analysis for A.
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

  const lastEvidence = lastW3cEvidenceIdInLpsContext(lps.context);
  if (lastEvidence && lastEvidence !== product.evidenceId) {
    return failClosed(
      "STALE_POST_EVIDENCE_BINDING",
      "LPS post-Evidence lié à une autre Evidence — fail-closed (pas de réemploi d'analyse).",
    );
  }

  const scoped = extractW3cPostEvidenceAnalysisForEvidence(
    lps.context,
    product.evidenceId,
  );
  if (!scoped.matchedEvidenceId) {
    // Unscoped legacy LPS: only accept if last marker absent or matches.
    if (lastEvidence && lastEvidence !== product.evidenceId) {
      return failClosed(
        "STALE_POST_EVIDENCE_BINDING",
        "Analyse LPS non scopée à cette Evidence — fail-closed.",
      );
    }
  }

  if (
    product.outcome !== "SUCCESS" &&
    product.outcome !== "STOP" &&
    product.outcome !== "FAIL"
  ) {
    return failClosed(
      "RECOMMENDATION_UNRECONSTRUCTIBLE",
      "Impossible de reconstruire la recommandation depuis le produit / LPS.",
    );
  }

  const built = recommendationFromOutcome({
    outcome: product.outcome,
    recommendNextGateStatus: null,
    nextActionCode: null,
  });
  const recommendation =
    lps.nextStep && lps.nextStep.trim()
      ? { ...built, nextStep: lps.nextStep.trim() }
      : built;

  return {
    ok: true,
    // Fidelity: never invent Nora — only from scoped extract.
    noraInvoked: Boolean(scoped.analysisText),
    replanInvoked: false,
    analysisText: scoped.analysisText,
    analysisUnavailableReason: scoped.analysisUnavailableReason,
    analysisProviderId: null,
    recommendation,
    lpsVersion: lps.version,
    evidenceId: product.evidenceId,
    reviewBundleId: product.reviewBundleId,
    claimEvaluationId: product.claimEvaluationId,
    productOutcome: product.outcome,
  };
}
