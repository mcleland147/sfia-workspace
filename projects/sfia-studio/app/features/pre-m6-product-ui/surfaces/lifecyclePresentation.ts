import type {
  FinalizationAssessment,
  FinalizationApplicabilityRules,
  FinalizationObligation,
} from "@/lib/oa/cycle";
import type { PilotLifecycleProjection } from "@/lib/oa/cycle";
import type { LifecycleRecommendationEnvelope } from "@/lib/oa/cycle";

export type LifecycleUiStatus =
  | "active"
  | "candidate"
  | "blocked_drift"
  | "finalization_open"
  | "ready_finalize"
  | "completed_next"
  | "cancelled"
  | "superseded"
  | "paused"
  | "empty";

/** HumanDecision FINALIZE absence alone — does not block showing Finaliser CTA. */
export const FINALIZE_HD_BLOCKER = "finalize_human_decision_absent";

export function nonHumanDecisionBlockers(
  assessment: FinalizationAssessment | null | undefined,
): string[] {
  if (!assessment) return [];
  return assessment.blockers.filter((b) => b !== FINALIZE_HD_BLOCKER);
}

/**
 * D-LC-02 — ready for authoritative Finaliser when every non-HD blocker is clear
 * and only the Pilot FINALIZE HumanDecision (or canComplete) remains.
 */
export function readyExceptFinalizeDecision(
  assessment: FinalizationAssessment | null | undefined,
): boolean {
  if (!assessment) return false;
  if (assessment.canComplete) return true;
  const nonHd = nonHumanDecisionBlockers(assessment);
  return (
    nonHd.length === 0 &&
    assessment.blockers.includes(FINALIZE_HD_BLOCKER)
  );
}

export function obligationFamilyLabel(family: string): string {
  switch (family) {
    case "exit_criteria":
      return "Critères de sortie";
    case "artifact":
      return "Artefact";
    case "execution_contract":
      return "Contrat d’exécution";
    case "evidence":
      return "Evidence";
    case "review_bundle":
      return "ReviewBundle";
    case "git_repository":
      return "Dépôt Git";
    case "human_decision":
      return "Décision finale du Pilote";
    case "blockers":
      return "Réserve bloquante";
    default:
      return family;
  }
}

export function blockerLabel(blockerId: string): string {
  switch (blockerId) {
    case "exit_criteria_open":
      return "Critères de sortie encore ouverts";
    case "artifact_applicability_unknown":
    case "execution_contract_applicability_unknown":
    case "evidence_applicability_unknown":
    case "review_bundle_applicability_unknown":
    case "git_repository_applicability_unknown":
      return "Applicabilité des effets gouvernés à confirmer";
    case "blocking_reservations":
      return "Réserve bloquante à résoudre";
    case FINALIZE_HD_BLOCKER:
      return "Décision finale du Pilote requise";
    default:
      return blockerId;
  }
}

export function obligationStatusLabel(o: FinalizationObligation): string {
  if (o.applicability === "NOT_APPLICABLE") return "Non applicable";
  if (o.applicability === "UNKNOWN") return "À confirmer";
  if (o.status === "SATISFIED") return "Satisfait";
  if (o.status === "BLOCKING" || o.blocking) return "Bloquant";
  if (o.status === "PENDING") return "En attente";
  if (o.status === "MISSING") return "Manquant";
  return o.status;
}

/** Governed-effect families covered by opt:no-governed-effects. */
export const GOVERNED_EFFECT_FAMILIES = [
  "artifact",
  "git_repository",
  "execution_contract",
  "evidence",
  "review_bundle",
] as const;

/**
 * D-LC-03 — show grouped N/A CTA when those families are UNKNOWN
 * and none is positively APPLICABLE with open obligation.
 */
export function canOfferGroupedNoGovernedEffects(
  assessment: FinalizationAssessment | null | undefined,
): boolean {
  if (!assessment) return false;
  const byFamily = new Map(
    assessment.obligations.map((o) => [o.family, o] as const),
  );
  let unknownCount = 0;
  for (const family of GOVERNED_EFFECT_FAMILIES) {
    const o = byFamily.get(family);
    if (!o) continue;
    if (o.applicability === "APPLICABLE") return false;
    if (o.applicability === "UNKNOWN") unknownCount += 1;
  }
  return unknownCount > 0;
}

/**
 * True when applicability rules already mark a governed family APPLICABLE
 * (positiveSources / obligation snapshot) — UI must not offer grouped N/A.
 */
export function mustBlocksNoGovernedEffects(
  applicabilityRules: FinalizationApplicabilityRules | null | undefined,
): boolean {
  if (!applicabilityRules) return false;
  for (const family of GOVERNED_EFFECT_FAMILIES) {
    if (applicabilityRules[family] === "APPLICABLE") return true;
  }
  return false;
}

export function lifecycleStatusBadge(
  projection: PilotLifecycleProjection,
): { status: LifecycleUiStatus; label: string } {
  const resume = projection.resumeReconciliation;
  if (
    projection.selectedStatus === "paused" &&
    resume &&
    resume.clean === false
  ) {
    return { status: "blocked_drift", label: "Bloqué / dérive" };
  }
  if (projection.selectedStatus === "active") {
    if (readyExceptFinalizeDecision(projection.assessment)) {
      return {
        status: "ready_finalize",
        label: "Prêt pour décision de finalisation",
      };
    }
    if (
      projection.assessment &&
      nonHumanDecisionBlockers(projection.assessment).length > 0
    ) {
      return { status: "finalization_open", label: "En cours" };
    }
    return { status: "active", label: "En cours" };
  }
  if (
    projection.selectedStatus === "proposed" ||
    projection.selectedStatus === "acknowledged"
  ) {
    return { status: "candidate", label: "Cycle proposé" };
  }
  if (projection.selectedStatus === "completed") {
    return { status: "completed_next", label: "Terminé" };
  }
  if (projection.selectedStatus === "cancelled") {
    return { status: "cancelled", label: "Annulé" };
  }
  if (projection.selectedStatus === "superseded") {
    return { status: "superseded", label: "Remplacé" };
  }
  if (projection.selectedStatus === "paused") {
    return { status: "paused", label: "En pause" };
  }
  if (projection.selectedStatus === "blocked") {
    return { status: "blocked_drift", label: "Bloqué" };
  }
  return { status: "empty", label: "Aucun cycle sélectionné" };
}

export function primaryFinalizeRecommendation(
  projection: PilotLifecycleProjection,
): LifecycleRecommendationEnvelope | null {
  return (
    (projection.currentRecommendations ?? []).find(
      (r) =>
        r.intent === "FINALIZE_CURRENT_CYCLE" &&
        r.derivedCurrentness === "CURRENT",
    ) ?? null
  );
}

export function primaryNextCycleRecommendation(
  projection: PilotLifecycleProjection,
): LifecycleRecommendationEnvelope | null {
  return (
    (projection.currentRecommendations ?? []).find(
      (r) =>
        r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
    ) ?? null
  );
}

/**
 * D-LC-02 CTA honesty:
 * - canFinalize (domain) = transition attemptable from status
 * - Finaliser CTA enabled only when readyExceptFinalizeDecision
 * - Assessment CTA when attemptable but non-HD blockers remain
 * - Terminal display (CR-LC-B-01) exposes ZERO lifecycle mutation CTAs
 * Recommendation never grants authority.
 */
export function lifecycleCtaPresentation(projection: PilotLifecycleProjection): {
  showFinalizePrimary: boolean;
  showFinalizeSecondary: boolean;
  showAssess: boolean;
  showStart: boolean;
  showResume: boolean;
  showReplan: boolean;
  showTrajectoryEscalation: boolean;
  showGroupedObligationPolicy: boolean;
  finalizeEnabled: boolean;
  resumeEnabled: boolean;
  readyExceptFinalize: boolean;
} {
  const terminalDisplay =
    projection.selectedStatus === "completed" ||
    projection.selectedStatus === "cancelled" ||
    projection.selectedStatus === "superseded";
  const finalizeRec = primaryFinalizeRecommendation(projection);
  const nextRec = primaryNextCycleRecommendation(projection);
  const resumeClean = projection.resumeReconciliation?.clean !== false;
  const dirtyResume =
    projection.selectedStatus === "paused" &&
    projection.resumeReconciliation?.clean === false;
  const attemptable = projection.cta.canFinalize && !terminalDisplay;
  const ready = readyExceptFinalizeDecision(projection.assessment);
  const nonHd = nonHumanDecisionBlockers(projection.assessment);
  const showAssess = Boolean(
    attemptable &&
      !ready &&
      (nonHd.length > 0 || projection.assessment == null),
  );

  return {
    showFinalizePrimary: Boolean(finalizeRec && attemptable && ready),
    showFinalizeSecondary: Boolean(!finalizeRec && attemptable && ready),
    showAssess,
    showStart: projection.cta.canStart && !terminalDisplay,
    showResume: projection.cta.canResume && !dirtyResume && !terminalDisplay,
    showReplan: dirtyResume && !terminalDisplay,
    showTrajectoryEscalation: Boolean(
      nextRec ||
        projection.candidateCycles.length > 1 ||
        projection.selectionAmbiguous,
    ),
    showGroupedObligationPolicy: Boolean(
      attemptable && canOfferGroupedNoGovernedEffects(projection.assessment),
    ),
    finalizeEnabled: attemptable && ready,
    resumeEnabled:
      projection.cta.canResume && resumeClean && !dirtyResume && !terminalDisplay,
    readyExceptFinalize: ready && !terminalDisplay,
  };
}
