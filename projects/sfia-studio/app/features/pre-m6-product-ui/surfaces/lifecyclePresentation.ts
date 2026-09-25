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
      return "Livrable";
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
    case "governed_effects_applicability_group":
      return "Effets gouvernés à qualifier";
    case "blocking_reservations":
      return "Réserve bloquante à résoudre";
    case FINALIZE_HD_BLOCKER:
      return "Décision finale du Pilote requise";
    default:
      return blockerId;
  }
}

const APPLICABILITY_UNKNOWN_BLOCKERS = new Set([
  "artifact_applicability_unknown",
  "execution_contract_applicability_unknown",
  "evidence_applicability_unknown",
  "review_bundle_applicability_unknown",
  "git_repository_applicability_unknown",
]);

/**
 * UX projection only — groups duplicate applicability unknowns into one line.
 * Underlying assessment.blockers / obligations remain unchanged.
 */
export function presentLifecycleBlockerRows(
  blockerIds: readonly string[],
): ReadonlyArray<{
  readonly id: string;
  readonly label: string;
  readonly memberIds?: readonly string[];
}> {
  const rows: Array<{
    id: string;
    label: string;
    memberIds?: readonly string[];
  }> = [];
  const applicabilityMembers: string[] = [];
  for (const id of blockerIds) {
    if (APPLICABILITY_UNKNOWN_BLOCKERS.has(id)) {
      applicabilityMembers.push(id);
      continue;
    }
    rows.push({ id, label: blockerLabel(id) });
  }
  if (applicabilityMembers.length > 0) {
    rows.unshift({
      id: "governed_effects_applicability_group",
      label: blockerLabel("governed_effects_applicability_group"),
      memberIds: applicabilityMembers,
    });
  }
  return rows;
}

export function obligationStatusLabel(o: FinalizationObligation): string {
  if (o.applicability === "NOT_APPLICABLE") return "Non applicable";
  if (o.applicability === "UNKNOWN") return "À qualifier";
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
 * CORR-PROOF-06 — Pilote can declare a deliverable is required when Artifact is
 * still UNKNOWN or was marked N/A (e.g. after no-governed-effects, pre-FINALIZE).
 * Hidden once Artifact is already APPLICABLE (continuation UI takes over).
 */
export function canOfferRequireArtifact(
  assessment: FinalizationAssessment | null | undefined,
): boolean {
  if (!assessment) return false;
  const art = assessment.obligations.find((o) => o.family === "artifact");
  if (!art) return true;
  if (art.applicability === "APPLICABLE") return false;
  return (
    art.applicability === "UNKNOWN" || art.applicability === "NOT_APPLICABLE"
  );
}

/** Artifact already required and not yet satisfied — guide next step (Nora). */
export function showsRequireArtifactContinuation(
  assessment: FinalizationAssessment | null | undefined,
): boolean {
  if (!assessment) return false;
  const art = assessment.obligations.find((o) => o.family === "artifact");
  if (!art || art.applicability !== "APPLICABLE") return false;
  return art.status !== "SATISFIED";
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
  showRequireArtifactPolicy: boolean;
  showRequireArtifactContinuation: boolean;
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
    showRequireArtifactPolicy: Boolean(
      attemptable && canOfferRequireArtifact(projection.assessment),
    ),
    showRequireArtifactContinuation: Boolean(
      attemptable &&
        showsRequireArtifactContinuation(projection.assessment),
    ),
    finalizeEnabled: attemptable && ready,
    resumeEnabled:
      projection.cta.canResume && resumeClean && !dirtyResume && !terminalDisplay,
    readyExceptFinalize: ready && !terminalDisplay,
  };
}

/* -------------------------------------------------------------------------- */
/* FINALIZATION-READINESS-PILOT-GUIDANCE-01 — presentation-only helpers       */
/* UI classification / explanations. Never mutate assessment Truth C.         */
/* -------------------------------------------------------------------------- */

export type FinalizationReadinessKind =
  | "SATISFIED"
  | "NOT_APPLICABLE"
  | "TO_QUALIFY"
  | "TO_TREAT"
  | "AWAITING_PILOT_DECISION";

export type FinalizationConditionGroupId =
  | "work_of_cycle"
  | "governed_effects"
  | "pilot_authority";

const WORK_FAMILIES = new Set(["exit_criteria", "blockers"]);
const PILOT_FAMILIES = new Set(["human_decision"]);

/**
 * UI-only readiness class mapped transparently from domain obligation state.
 */
export function classifyObligationPresentation(
  o: FinalizationObligation,
  _assessment: FinalizationAssessment | null | undefined,
): FinalizationReadinessKind {
  if (o.applicability === "UNKNOWN") return "TO_QUALIFY";
  if (o.applicability === "NOT_APPLICABLE" || o.status === "NOT_APPLICABLE") {
    return "NOT_APPLICABLE";
  }
  if (o.status === "SATISFIED") return "SATISFIED";
  // RC-02 — final Pilot decision is waiting, never a current "to treat" work item.
  if (o.family === "human_decision") {
    return "AWAITING_PILOT_DECISION";
  }
  if (
    o.status === "BLOCKING" ||
    o.status === "MISSING" ||
    o.status === "PENDING" ||
    o.blocking
  ) {
    return "TO_TREAT";
  }
  return "TO_TREAT";
}

export function readinessKindLabel(kind: FinalizationReadinessKind): string {
  switch (kind) {
    case "SATISFIED":
      return "Satisfait";
    case "NOT_APPLICABLE":
      return "Non applicable";
    case "TO_QUALIFY":
      return "À qualifier";
    case "TO_TREAT":
      return "À traiter";
    case "AWAITING_PILOT_DECISION":
      return "En attente";
  }
}

/**
 * Human explanation for a known obligation. Presentation only — no invention
 * of provenance. Unknown details fall back to conservative generic wording.
 */
export function obligationExplanation(o: FinalizationObligation): string {
  const detail = typeof o.detail === "string" ? o.detail.trim() : "";
  const naReason =
    typeof o.notApplicableReason === "string"
      ? o.notApplicableReason.trim()
      : "";

  if (o.applicability === "UNKNOWN") {
    switch (o.family) {
      case "artifact":
        return "Il faut préciser si un livrable est requis pour ce cycle.";
      case "execution_contract":
        return "Il faut préciser si une exécution gouvernée est requise pour ce cycle.";
      case "evidence":
        return "Il faut préciser si une Evidence est requise pour ce cycle.";
      case "review_bundle":
        return "Il faut préciser si un ReviewBundle est requis pour ce cycle.";
      case "git_repository":
        return "Il faut préciser si un effet Git est requis pour ce cycle.";
      default:
        return "Il faut encore préciser si cet effet s’applique à ce cycle.";
    }
  }

  if (o.applicability === "NOT_APPLICABLE" || o.status === "NOT_APPLICABLE") {
    return explainNotApplicable(o.family, naReason);
  }

  if (o.status === "SATISFIED") {
    if (detail === "no_blocking_reservations") {
      return "Aucune réserve bloquante active.";
    }
    if (detail === "trajectory_steps_closed_or_skipped") {
      return "L’étape de trajectoire liée est clôturée ou écartée.";
    }
    if (detail === "bound_trajectory_step_completed") {
      return "L’étape de trajectoire liée est clôturée.";
    }
    if (detail === "artifact_proof_present") {
      return "Une preuve de livrable est présente pour ce cycle.";
    }
    if (detail === "contracts_completed") {
      return "Les contrats d’exécution requis sont terminés.";
    }
    if (detail.startsWith("supporting_evidence:")) {
      return "Des Evidence de soutien sont disponibles pour ce cycle.";
    }
    if (detail.startsWith("accepted_review_bundles:")) {
      return "Des ReviewBundle acceptés sont disponibles.";
    }
    if (detail === "git_proof_present") {
      return "Une preuve Git requise est présente.";
    }
    if (detail.startsWith("finalize_decision:")) {
      return "La décision Pilote de finalisation est enregistrée.";
    }
    return "Condition satisfaite selon l’assessment courant.";
  }

  if (o.status === "MISSING" || o.status === "BLOCKING" || o.blocking) {
    if (
      detail === "finalize_human_decision_absent" ||
      detail === "human_decision_finalize_missing"
    ) {
      return "La décision finale du Pilote n’a pas encore été prise.";
    }
    if (
      detail.startsWith("open_steps:") ||
      detail === "bound_trajectory_step_incomplete" ||
      detail === "exit_criteria_incomplete"
    ) {
      return "L’étape de trajectoire liée au cycle est encore ouverte.";
    }
    if (
      detail === "artifact_required_but_proof_absent" ||
      detail === "artifact_missing"
    ) {
      return "Un livrable est requis, mais aucune preuve n’est encore présente.";
    }
    if (detail === "execution_required_but_no_contract") {
      return "Une exécution gouvernée est requise, mais aucun contrat n’est présent.";
    }
    if (detail.startsWith("open_contracts:")) {
      return "Des contrats d’exécution restent ouverts.";
    }
    if (detail === "evidence_required_but_absent") {
      return "Une Evidence est requise, mais absente.";
    }
    if (detail.startsWith("pending_evidence:")) {
      return "Des Evidence restent en attente.";
    }
    if (detail === "review_required_but_absent") {
      return "Un ReviewBundle est requis, mais absent.";
    }
    if (detail.startsWith("open_review_bundles:")) {
      return "Des ReviewBundle restent ouverts.";
    }
    if (detail === "git_applicable_but_no_proof") {
      return "Une preuve Git est requise, mais absente.";
    }
    if (detail.includes("|") || detail.length > 0) {
      if (o.family === "blockers" && detail !== "no_blocking_reservations") {
        return "Une ou plusieurs réserves bloquantes restent actives.";
      }
    }
    if (o.family === "exit_criteria") {
      return "Des critères de sortie restent ouverts.";
    }
    if (o.family === "blockers") {
      return "Une réserve bloquante empêche la finalisation.";
    }
    return "Cette condition n’est pas encore remplie.";
  }

  if (o.status === "PENDING") {
    return "Cette condition est encore en cours d’évaluation ou d’attente.";
  }

  return "État reconnu par l’assessment — vérifier le détail du cycle.";
}

/**
 * RC-03 — business-facing N/A copy only. Never surface snake_case / policy ids.
 */
function explainNotApplicable(family: string, naReason: string): string {
  const reason = naReason.trim();
  if (
    reason === "pilot_declared_no_governed_effects" ||
    reason === "pilot_confirmed_no_governed_effects" ||
    reason.includes("opt:no-governed-effects")
  ) {
    return "Le Pilote a confirmé qu’aucun effet gouverné n’est requis pour ce cycle.";
  }
  if (reason.includes("opt:no-artifact")) {
    return "Aucun livrable n’est requis pour ce cycle.";
  }
  if (reason.includes("opt:no-execution")) {
    return "Aucune exécution gouvernée n’est requise pour ce cycle.";
  }
  if (reason.includes("opt:no-evidence")) {
    return "Aucune Evidence n’est requise pour ce cycle.";
  }
  if (reason.includes("opt:no-review")) {
    return "Aucun ReviewBundle n’est requis pour ce cycle.";
  }
  if (reason.includes("opt:no-git")) {
    return "Aucun effet Git n’est requis pour ce cycle.";
  }
  if (reason === "no_positive_sources") {
    return "Aucun signal positif n’a rendu cet effet applicable à ce cycle.";
  }
  if (reason.startsWith("pilot_hd_obligation_policy:")) {
    // Known prefix but unrecognized option — still business-facing, no raw id.
    switch (family) {
      case "artifact":
        return "Aucun livrable n’est requis pour ce cycle.";
      case "execution_contract":
        return "Aucune exécution gouvernée n’est requise pour ce cycle.";
      case "evidence":
        return "Aucune Evidence n’est requise pour ce cycle.";
      case "review_bundle":
        return "Aucun ReviewBundle n’est requis pour ce cycle.";
      case "git_repository":
        return "Aucun effet Git n’est requis pour ce cycle.";
      default:
        return "Cette condition a été explicitement déclarée non applicable pour ce cycle.";
    }
  }
  if (reason.length > 0) {
    return "Cette condition a été explicitement déclarée non applicable pour ce cycle.";
  }
  switch (family) {
    case "artifact":
      return "Aucun livrable n’est requis pour ce cycle.";
    case "execution_contract":
      return "Aucune exécution gouvernée n’est requise pour ce cycle.";
    case "evidence":
      return "Aucune Evidence n’est requise pour ce cycle.";
    case "review_bundle":
      return "Aucun ReviewBundle n’est requis pour ce cycle.";
    case "git_repository":
      return "Aucun effet Git n’est requis pour ce cycle.";
    default:
      return "Cette condition a été explicitement déclarée non applicable pour ce cycle.";
  }
}

export function formatAssessedAt(assessedAt: string | null | undefined): string | null {
  if (!assessedAt || typeof assessedAt !== "string") return null;
  const d = new Date(assessedAt);
  if (Number.isNaN(d.getTime())) return assessedAt;
  try {
    return new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(d);
  } catch {
    return assessedAt;
  }
}

export type FinalizationReadinessSummary = {
  readonly satisfiedCount: number;
  readonly toTreatCount: number;
  readonly toQualifyCount: number;
  readonly notApplicableCount: number;
  /** True when a human_decision obligation is awaiting Pilot (not Satisfied). */
  readonly pilotDecisionPending: boolean;
  /**
   * True when non-human blockers are clear and only finalize HD remains
   * (`readyExceptFinalizeDecision`). Distinct from pilotDecisionPending.
   */
  readonly awaitingPilotDecision: boolean;
  readonly headline: string;
  readonly countLine: string;
  readonly assessedAtLabel: string | null;
};

/**
 * Build concise French readiness fragments; omit zero-count parts.
 */
export function formatReadinessCountParts(
  summary: Pick<
    FinalizationReadinessSummary,
    | "satisfiedCount"
    | "toTreatCount"
    | "toQualifyCount"
    | "notApplicableCount"
    | "pilotDecisionPending"
  >,
): string[] {
  const parts: string[] = [];
  if (summary.satisfiedCount > 0) {
    parts.push(
      `${summary.satisfiedCount} satisfaite${summary.satisfiedCount > 1 ? "s" : ""}`,
    );
  }
  if (summary.toTreatCount > 0) {
    parts.push(`${summary.toTreatCount} à traiter`);
  }
  if (summary.toQualifyCount > 0) {
    parts.push(`${summary.toQualifyCount} à qualifier`);
  }
  if (summary.notApplicableCount > 0) {
    parts.push(
      `${summary.notApplicableCount} non applicable${summary.notApplicableCount > 1 ? "s" : ""}`,
    );
  }
  if (summary.pilotDecisionPending) {
    parts.push("décision Pilote en attente");
  }
  return parts;
}

/**
 * Deterministic readiness summary from current assessment (presentation only).
 */
export function summarizeFinalizationReadiness(
  assessment: FinalizationAssessment | null | undefined,
): FinalizationReadinessSummary | null {
  if (!assessment) return null;
  let satisfiedCount = 0;
  let toTreatCount = 0;
  let toQualifyCount = 0;
  let notApplicableCount = 0;
  let pilotDecisionPending = false;
  for (const o of assessment.obligations) {
    const kind = classifyObligationPresentation(o, assessment);
    if (kind === "SATISFIED") satisfiedCount += 1;
    else if (kind === "TO_QUALIFY") toQualifyCount += 1;
    else if (kind === "NOT_APPLICABLE") notApplicableCount += 1;
    else if (kind === "AWAITING_PILOT_DECISION") {
      pilotDecisionPending = true;
    } else toTreatCount += 1;
  }
  const awaitingPilotDecision = readyExceptFinalizeDecision(assessment);
  const countParts = formatReadinessCountParts({
    satisfiedCount,
    toTreatCount,
    toQualifyCount,
    notApplicableCount,
    pilotDecisionPending,
  });
  const countLine = countParts.join(" · ");
  let headline: string;
  if (awaitingPilotDecision) {
    headline =
      "Conditions satisfaites — prêt pour décision du Pilote";
  } else if (countParts.length > 0) {
    headline = `Vérification terminée — ${countParts.join(" · ")}`;
  } else {
    headline = "Vérification terminée";
  }
  return {
    satisfiedCount,
    toTreatCount,
    toQualifyCount,
    notApplicableCount,
    pilotDecisionPending,
    awaitingPilotDecision,
    headline,
    countLine,
    assessedAtLabel: formatAssessedAt(assessment.assessedAt),
  };
}

/**
 * ASSESS feedback — deterministic French summary from returned assessment.
 */
export function formatAssessFeedback(
  assessment: FinalizationAssessment | null | undefined,
): string {
  const summary = summarizeFinalizationReadiness(assessment);
  if (!summary) {
    return "Vérification terminée — assessment indisponible (fail-closed).";
  }
  if (summary.awaitingPilotDecision) {
    return "Vérification terminée — toutes les conditions non humaines sont satisfaites. Le cycle peut être soumis à la décision finale du Pilote.";
  }
  if (summary.countLine.length === 0) {
    return "Vérification terminée.";
  }
  return `Vérification terminée — ${summary.countLine.replace(/ · /g, ", ")}.`;
}

export type FinalizationConditionRow = {
  readonly family: string;
  readonly title: string;
  readonly kind: FinalizationReadinessKind;
  readonly statusLabel: string;
  readonly explanation: string;
  readonly obligation: FinalizationObligation;
};

export type FinalizationConditionGroup = {
  readonly id: FinalizationConditionGroupId;
  readonly title: string;
  readonly summaryLabel: string;
  readonly summaryExplanation: string;
  readonly rows: readonly FinalizationConditionRow[];
  readonly allUnknownGoverned: boolean;
};

function groupSummaryFor(
  id: FinalizationConditionGroupId,
  rows: readonly FinalizationConditionRow[],
  assessment: FinalizationAssessment,
): { summaryLabel: string; summaryExplanation: string; allUnknownGoverned: boolean } {
  // RC-01 — deterministic precedence; never claim Satisfait while UNKNOWN remains.
  const anyTreat = rows.some((r) => r.kind === "TO_TREAT");
  const anyQualify = rows.some((r) => r.kind === "TO_QUALIFY");
  const allNa =
    rows.length > 0 && rows.every((r) => r.kind === "NOT_APPLICABLE");
  const allUnknown =
    rows.length > 0 && rows.every((r) => r.kind === "TO_QUALIFY");

  if (id === "governed_effects") {
    if (anyTreat) {
      return {
        summaryLabel: "À traiter",
        summaryExplanation:
          "Au moins un effet gouverné applicable n’est pas encore satisfait.",
        allUnknownGoverned: false,
      };
    }
    if (anyQualify) {
      if (allUnknown) {
        return {
          summaryLabel: "À décider",
          summaryExplanation:
            "Il faut préciser si ce cycle doit produire un livrable ou d’autres effets gouvernés.",
          allUnknownGoverned: true,
        };
      }
      return {
        summaryLabel: "À qualifier",
        summaryExplanation:
          "Certains effets gouvernés restent à qualifier avant finalisation.",
        allUnknownGoverned: false,
      };
    }
    if (allNa) {
      return {
        summaryLabel: "Non applicable",
        summaryExplanation:
          "Aucun effet gouverné n’est requis pour ce cycle selon l’assessment.",
        allUnknownGoverned: false,
      };
    }
    return {
      summaryLabel: "Satisfait",
      summaryExplanation: "Les effets gouvernés applicables sont satisfaits.",
      allUnknownGoverned: false,
    };
  }
  if (id === "work_of_cycle") {
    if (anyTreat) {
      return {
        summaryLabel: "À traiter",
        summaryExplanation:
          "Du travail de cycle reste ouvert (critères de sortie ou réserves).",
        allUnknownGoverned: false,
      };
    }
    if (anyQualify) {
      return {
        summaryLabel: "À qualifier",
        summaryExplanation:
          "Une condition de travail du cycle reste à qualifier.",
        allUnknownGoverned: false,
      };
    }
    if (allNa) {
      return {
        summaryLabel: "Non applicable",
        summaryExplanation:
          "Les conditions de travail du cycle ne s’appliquent pas.",
        allUnknownGoverned: false,
      };
    }
    return {
      summaryLabel: "Satisfait",
      summaryExplanation: "Le travail de cycle requis pour finaliser est satisfait.",
      allUnknownGoverned: false,
    };
  }
  // pilot_authority
  if (readyExceptFinalizeDecision(assessment)) {
    return {
      summaryLabel: "Prêt pour décision du Pilote",
      summaryExplanation:
        "Les conditions précédentes sont satisfaites. Seule la décision « Finaliser » reste.",
      allUnknownGoverned: false,
    };
  }
  return {
    summaryLabel: "En attente",
    summaryExplanation:
      "Disponible lorsque les conditions précédentes sont satisfaites.",
    allUnknownGoverned: false,
  };
}

/**
 * Group obligations into Work / Governed effects / Pilot authority.
 */
export function groupFinalizationObligations(
  assessment: FinalizationAssessment | null | undefined,
): readonly FinalizationConditionGroup[] {
  if (!assessment) return [];
  const work: FinalizationConditionRow[] = [];
  const governed: FinalizationConditionRow[] = [];
  const pilot: FinalizationConditionRow[] = [];
  for (const o of assessment.obligations) {
    const kind = classifyObligationPresentation(o, assessment);
    const row: FinalizationConditionRow = {
      family: o.family,
      title: obligationFamilyLabel(o.family),
      kind,
      statusLabel: readinessKindLabel(kind),
      explanation: obligationExplanation(o),
      obligation: o,
    };
    if (WORK_FAMILIES.has(o.family)) work.push(row);
    else if (PILOT_FAMILIES.has(o.family)) pilot.push(row);
    else if (
      (GOVERNED_EFFECT_FAMILIES as readonly string[]).includes(o.family)
    ) {
      governed.push(row);
    } else {
      work.push(row);
    }
  }
  const groups: FinalizationConditionGroup[] = [];
  if (work.length > 0) {
    const s = groupSummaryFor("work_of_cycle", work, assessment);
    groups.push({
      id: "work_of_cycle",
      title: "Travail du cycle",
      summaryLabel: s.summaryLabel,
      summaryExplanation: s.summaryExplanation,
      rows: work,
      allUnknownGoverned: false,
    });
  }
  if (governed.length > 0) {
    const s = groupSummaryFor("governed_effects", governed, assessment);
    groups.push({
      id: "governed_effects",
      title: "Effets gouvernés",
      summaryLabel: s.summaryLabel,
      summaryExplanation: s.summaryExplanation,
      rows: governed,
      allUnknownGoverned: s.allUnknownGoverned,
    });
  }
  if (pilot.length > 0) {
    const s = groupSummaryFor("pilot_authority", pilot, assessment);
    groups.push({
      id: "pilot_authority",
      title: "Décision du Pilote",
      summaryLabel: s.summaryLabel,
      summaryExplanation: s.summaryExplanation,
      rows: pilot,
      allUnknownGoverned: false,
    });
  }
  return groups;
}
