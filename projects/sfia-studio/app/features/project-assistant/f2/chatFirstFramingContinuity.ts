/**
 * P6 chat-first first Framing continuity — pure phase classification.
 * Does not mutate Product. Does not invent HumanDecision / START.
 *
 * Phases map Rec CURRENT → candidate → decision → prepared → active
 * using existing OA objects only.
 */

export type FramingContinuityPhase =
  | "idle"
  | "recommendation_ready"
  | "awaiting_trajectory_decision"
  | "trajectory_decided_prepare_cycle"
  | "ready_to_start"
  | "active"
  | "blocked_no_recommendation"
  | "blocked_stale_or_incomplete";

/**
 * UX-01 / FIX-01 — Product facts the Pilot can examine before trajectory HD.
 * Never invent steps / commitments; omit when Product has nothing honest.
 */
export type FramingTrajectoryExamination = {
  /** LPS project objective — context only; never sufficient alone. */
  readonly projectObjective: string | null;
  /**
   * Trajectory-linked Product text (e.g. CURRENT Recommendation statement).
   * Distinct from the general Project objective.
   */
  readonly trajectoryDescription: string | null;
  readonly proposedScopeLabel: string | null;
  readonly knownStepLabels: readonly string[];
  readonly validationImplications: string;
  readonly limitsOrReservations: string | null;
  /** false when Product facts are too thin for an informed decision UI. */
  readonly examinationSufficient: boolean;
};

export type FramingContinuitySnapshot = {
  readonly phase: FramingContinuityPhase;
  readonly catalogLabel: string | null;
  readonly targetCycleTypeId: string | null;
  readonly recommendationId: string | null;
  readonly semanticKey: string | null;
  readonly trajectoryId: string | null;
  readonly trajectoryVersion: number | null;
  readonly presentationDigest: string | null;
  readonly approvalOptionLabel: string | null;
  readonly preparedCycleInstanceId: string | null;
  readonly activeCycleInstanceId: string | null;
  readonly hasCurrentNextCycleRecommendation: boolean;
  readonly message: string;
  /** Populated for awaiting_trajectory_decision from Product presentation + LPS. */
  readonly examination: FramingTrajectoryExamination | null;
};

/** Honest validation implications — not inventing START / execution. */
export function framingTrajectoryValidationImplications(
  catalogLabel: string | null,
): string {
  const cycle = (catalogLabel ?? "").trim() || "Cadrage";
  return `Valider enregistre votre décision sur cette trajectoire pour « ${cycle} » et permet de préparer le cycle. Cela ne démarre pas le cycle et n'exécute rien.`;
}

function normalizeCompare(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[«»"']/g, "")
    .replace(/\s+/g, " ");
}

/** Catalog label alone (e.g. « Cadrage ») is not a trajectory description. */
export function isCatalogOnlyTrajectoryLabel(
  label: string | null | undefined,
  catalogLabel: string | null | undefined,
): boolean {
  const a = normalizeCompare(label ?? "");
  const b = normalizeCompare(catalogLabel ?? "");
  if (!a || !b) return false;
  return a === b || a === `cycle ${b}` || a === `le ${b}`;
}

/**
 * Trajectory-linked text is substantial when it says more than the cycle type name.
 * FIX-01 — do not treat generic Project objective as trajectory substance.
 */
export function isSubstantialTrajectoryText(
  text: string | null | undefined,
  catalogLabel: string | null | undefined,
): boolean {
  const t = (text ?? "").trim();
  if (t.length < 16) return false;
  if (isCatalogOnlyTrajectoryLabel(t, catalogLabel)) return false;
  return true;
}

export function buildFramingTrajectoryExamination(input: {
  /** General LPS / Project objective — display as context only. */
  readonly projectObjective: string | null | undefined;
  readonly catalogLabel: string | null | undefined;
  readonly steps: readonly { order: number; label: string }[] | null | undefined;
  readonly presentationDigest: string | null | undefined;
  /** Server presentation option label — generic CTA alone is not substance. */
  readonly approvalOptionLabel?: string | null | undefined;
  /** CURRENT Recommendation statement when Product provides it. */
  readonly recommendationStatement?: string | null | undefined;
}): FramingTrajectoryExamination {
  const projectObjective = (input.projectObjective ?? "").trim() || null;
  const cycleTrim = (input.catalogLabel ?? "").trim();
  const cycle = cycleTrim || null;
  const knownStepLabels = [...(input.steps ?? [])]
    .slice()
    .sort((a, b) => a.order - b.order || a.label.localeCompare(b.label))
    .map((s) => (s.label ?? "").trim())
    .filter((l) => l.length > 0);
  const stepsBeyondCatalog = knownStepLabels.filter(
    (l) => !isCatalogOnlyTrajectoryLabel(l, cycle),
  );
  const trajectoryDescription =
    (input.recommendationStatement ?? "").trim() || null;
  const hasDigest = Boolean((input.presentationDigest ?? "").trim());
  const hasTrajectorySubstance =
    stepsBeyondCatalog.length > 0 ||
    isSubstantialTrajectoryText(trajectoryDescription, cycle);
  const examinationSufficient = hasDigest && hasTrajectorySubstance;

  const proposedScopeLabel = cycle
    ? hasTrajectorySubstance
      ? `Cycle proposé : « ${cycle} » (périmètre de travail du prochain cycle, pas encore démarré).`
      : `Cycle proposé : « ${cycle} » — le type de cycle seul ne décrit pas encore le contenu de la trajectoire.`
    : null;

  return {
    projectObjective,
    trajectoryDescription,
    proposedScopeLabel,
    knownStepLabels,
    validationImplications: framingTrajectoryValidationImplications(cycle),
    limitsOrReservations: examinationSufficient
      ? "Limite : aucune exécution, aucun START automatique, aucune décision inventée. Si quelque chose reste flou, continuez à explorer avant de valider."
      : "Les faits Product disponibles ne décrivent pas assez la trajectoire proposée (au-delà de l'objectif général du projet ou du seul libellé de cycle). Continuez à explorer avec Nora, ou attendez une présentation de trajectoire plus complète avant de valider.",
    examinationSufficient,
  };
}

/** Pilot-facing copy — no internal governance jargon. */
export function framingContinuityPilotMessage(
  phase: FramingContinuityPhase,
  catalogLabel: string | null,
): string {
  const cycle = (catalogLabel ?? "").trim() || "Cadrage";
  switch (phase) {
    case "recommendation_ready":
      return `Je recommande de commencer par un « ${cycle} » exploratoire. Vous pouvez préparer cette direction, puis la valider avant tout démarrage.`;
    case "awaiting_trajectory_decision":
      return `La trajectoire proposée pour « ${cycle} » est prête à examiner. Validez cette direction pour continuer — un simple « ok » ne suffit pas.`;
    case "trajectory_decided_prepare_cycle":
      return `La direction pour « ${cycle} » est validée. Préparez le cycle, puis démarrez-le quand vous serez prêt.`;
    case "ready_to_start":
      return `Le cycle « ${cycle} » est prêt. Vous pouvez le démarrer dans la conversation.`;
    case "active":
      // UX-04 — pilot-facing; no technical cycle instance ids.
      return `Le ${cycle} est maintenant actif.`;
    case "blocked_no_recommendation":
      return `Aucune recommandation courante n'est disponible pour préparer le premier cycle. Reformulez avec Nora.`;
    case "blocked_stale_or_incomplete":
      return `La recommandation ou la trajectoire n'est plus à jour. Aucun démarrage n'est engagé.`;
    case "idle":
    default:
      return "";
  }
}

/**
 * Projection for ConversationSurface — hide idle / blocked / already-active.
 * Pure; does not invent CURRENT. Active cycle is shown via LPS surfaces.
 */
export function framingContinuityForConversationDisplay(
  snap: FramingContinuitySnapshot | null | undefined,
): FramingContinuitySnapshot | null {
  if (!snap) return null;
  const phase = snap.phase;
  if (
    phase === "idle" ||
    phase === "blocked_no_recommendation" ||
    phase === "blocked_stale_or_incomplete" ||
    phase === "active"
  ) {
    return null;
  }
  return snap;
}

/**
 * Deterministic phase from already-loaded Product facts.
 * Callers must not invent CURRENT / digest / prepared ids.
 */
export function classifyFramingContinuityPhase(input: {
  readonly activeCycleInstanceId: string | null | undefined;
  readonly hasCurrentNextCycleRecommendation: boolean;
  readonly candidatePresent: boolean;
  readonly candidateProvenanceResolved: boolean;
  readonly awaitingDecisionPresentation: boolean;
  readonly decidedTrajectoryPresent: boolean;
  readonly preparedCompletePresent: boolean;
}): FramingContinuityPhase {
  const active = (input.activeCycleInstanceId ?? "").trim();
  if (active) return "active";
  if (input.preparedCompletePresent) return "ready_to_start";
  if (input.decidedTrajectoryPresent) return "trajectory_decided_prepare_cycle";
  if (input.awaitingDecisionPresentation) return "awaiting_trajectory_decision";
  if (input.candidatePresent && !input.candidateProvenanceResolved) {
    return "blocked_stale_or_incomplete";
  }
  if (input.hasCurrentNextCycleRecommendation) return "recommendation_ready";
  return "blocked_no_recommendation";
}
