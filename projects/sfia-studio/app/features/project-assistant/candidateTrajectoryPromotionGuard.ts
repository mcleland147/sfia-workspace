/**
 * D-GF-HD-01 — durable HumanDecision readback gate before PromoteDecidedTrajectory.
 * NOT W2 assertDecisionAuthorizesPromotion (OptionSet / trajectory_option).
 */

import type { HumanDecision } from "@/lib/oa/decision";
import { LOCAL_PILOTE_ACTOR_ID } from "@/lib/oa/decision";
import {
  CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
  candidateTrajectoryApprovalSubject,
} from "@/lib/oa/cycle";

export type CandidateTrajectoryPromotionGuardResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string };

/**
 * Fail-closed: promotion is authorised only by durable accepted HD matching
 * the exact candidate + provenance sealed at presentation.
 */
export function assertCandidateTrajectoryDecisionAuthorizesPromotion(input: {
  readonly decision: HumanDecision | null;
  readonly projectId: string;
  readonly trajectoryId: string;
  readonly candidateVersion: number;
  readonly presentationDigest: string;
  readonly candidateContentDigest: string;
  readonly provenanceObservationId: string;
  readonly recommendationId: string;
  readonly semanticKey: string;
  readonly targetCycleTypeId: string;
  readonly expectedLpsId: string;
  readonly expectedLpsVersionAtDecision: number;
}): CandidateTrajectoryPromotionGuardResult {
  const { decision } = input;
  if (!decision) {
    return {
      ok: false,
      code: "DECISION_REQUIRED",
      message:
        "Aucune décision humaine durable — promotion de la trajectoire candidate refusée.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "DECISION_NOT_ACCEPTED",
      message: `Décision au statut ${decision.status} — promotion refusée.`,
    };
  }
  if (decision.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La décision n'appartient pas à ce projet.",
    };
  }
  const expectedSubject = candidateTrajectoryApprovalSubject(
    input.trajectoryId,
    input.candidateVersion,
  );
  if (decision.subject !== expectedSubject) {
    return {
      ok: false,
      code: "SUBJECT_MISMATCH",
      message: "Le sujet de décision ne correspond pas à cette candidate.",
    };
  }
  if (decision.actor.actorId !== LOCAL_PILOTE_ACTOR_ID) {
    return {
      ok: false,
      code: "ACTOR_MISMATCH",
      message: "Acteur Pilote local attendu — promotion refusée.",
    };
  }
  if (decision.authority !== "morris") {
    return {
      ok: false,
      code: "AUTHORITY_DENIED",
      message:
        "Décision non structurante — seule une décision d'autorité structurante peut promouvoir.",
    };
  }
  if (decision.selectedOptionId !== CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID) {
    return {
      ok: false,
      code: "OPTION_MISMATCH",
      message: "L'option d'approbation unaire ne correspond pas.",
    };
  }
  if (decision.options.length !== 1) {
    return {
      ok: false,
      code: "OPTION_COUNT",
      message: "L'approbation candidate exige exactement une option.",
    };
  }
  if (decision.cycleInstanceId !== undefined) {
    return {
      ok: false,
      code: "CYCLE_INSTANCE_FORBIDDEN",
      message: "Aucune CycleInstance ne doit être liée à cette décision greenfield.",
    };
  }

  const basis = decision.decisionBasis;
  if (!basis || basis.sourceType !== "candidate_trajectory") {
    return {
      ok: false,
      code: "DECISION_BASIS_MISSING",
      message: "DecisionBasis candidate_trajectory absente ou incorrecte.",
    };
  }
  if (basis.trajectoryContext !== undefined) {
    return {
      ok: false,
      code: "TRAJECTORY_CONTEXT_FORBIDDEN",
      message: "trajectoryContext W2 interdit sur candidate_trajectory.",
    };
  }
  if (basis.sourceRef !== input.trajectoryId) {
    return {
      ok: false,
      code: "SOURCE_REF_MISMATCH",
      message: "sourceRef ne correspond pas à la trajectoire candidate.",
    };
  }
  if (basis.sourceDigest !== input.presentationDigest) {
    return {
      ok: false,
      code: "SOURCE_DIGEST_MISMATCH",
      message: "sourceDigest ne scelle pas le presentationDigest présenté.",
    };
  }

  const ctx = basis.candidateTrajectoryContext;
  if (!ctx) {
    return {
      ok: false,
      code: "CANDIDATE_CONTEXT_MISSING",
      message: "candidateTrajectoryContext requis.",
    };
  }
  if (ctx.trajectoryId !== input.trajectoryId) {
    return {
      ok: false,
      code: "CTX_TRAJECTORY_MISMATCH",
      message: "candidateTrajectoryContext.trajectoryId incorrect.",
    };
  }
  if (ctx.candidateVersion !== input.candidateVersion) {
    return {
      ok: false,
      code: "CTX_VERSION_MISMATCH",
      message: "candidateTrajectoryContext.candidateVersion incorrect.",
    };
  }
  if (ctx.provenanceObservationId !== input.provenanceObservationId) {
    return {
      ok: false,
      code: "CTX_PROVENANCE_MISMATCH",
      message: "provenanceObservationId incorrect.",
    };
  }
  if (ctx.recommendationId !== input.recommendationId) {
    return {
      ok: false,
      code: "CTX_RECOMMENDATION_MISMATCH",
      message: "recommendationId incorrect.",
    };
  }
  if (ctx.semanticKey !== input.semanticKey) {
    return {
      ok: false,
      code: "CTX_SEMANTIC_KEY_MISMATCH",
      message: "semanticKey incorrect.",
    };
  }
  if (ctx.targetCycleTypeId !== input.targetCycleTypeId) {
    return {
      ok: false,
      code: "CTX_TARGET_CYCLE_MISMATCH",
      message: "targetCycleTypeId incorrect.",
    };
  }
  if (ctx.candidateContentDigest !== input.candidateContentDigest) {
    return {
      ok: false,
      code: "CTX_CONTENT_DIGEST_MISMATCH",
      message: "candidateContentDigest incorrect.",
    };
  }
  if (ctx.presentationDigest !== input.presentationDigest) {
    return {
      ok: false,
      code: "CTX_PRESENTATION_DIGEST_MISMATCH",
      message: "presentationDigest incorrect.",
    };
  }
  if (
    basis.proposalContext.lpsId !== input.expectedLpsId ||
    basis.proposalContext.lpsVersion !== input.expectedLpsVersionAtDecision
  ) {
    return {
      ok: false,
      code: "PROPOSAL_CONTEXT_MISMATCH",
      message: "Snapshot LPS de la DecisionBasis incohérent.",
    };
  }

  return { ok: true };
}
