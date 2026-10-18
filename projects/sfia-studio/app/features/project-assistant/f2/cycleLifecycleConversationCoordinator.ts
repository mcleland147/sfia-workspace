/**
 * P6 Architecture Recovery (Option B) — Cycle Lifecycle conversation coordinator.
 *
 * Owns Cycle Lifecycle conversational orientation (framing / trajectory / START
 * preconditions). Does NOT invent HumanDecision, CycleInstance, or START.
 * Does NOT call Generic PREPARE.
 *
 * Product mutations remain in OA facades / preCycleCandidateTrajectoryActions /
 * resolveChatFirstCycleStartGate — this module coordinates messaging + admission
 * boundaries only.
 */

import type { FramingContinuityPhase } from "./chatFirstFramingContinuity";
import type { ConversationWorkflowDiscrimination } from "./conversationWorkflowDiscrimination";

export function shouldExcludeGenericPrepareProjectContext(
  discrimination: ConversationWorkflowDiscrimination,
): boolean {
  return discrimination.preemptsGenericPrepareProjectContext;
}

/** Result of reading CycleInstance inventory for Cycle Lifecycle early orientation. */
export type CycleInventoryReadResult =
  | { readonly kind: "available"; readonly count: number }
  | { readonly kind: "unavailable"; readonly reason: string };

/**
 * Fail-closed messaging when CycleInstance inventory cannot be proven empty.
 * Must not claim "0 cycle" or progress as if inventory were empty.
 */
export function cycleInventoryUnavailableMessage(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly cycleLabel?: string | null;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "ce cycle";
  return [
    head,
    `L'inventaire des cycles du projet est temporairement indisponible — Studio ne peut pas traiter le démarrage de ${cycle} sur une absence non prouvée.`,
    "Aucun cycle n'a été créé, démarré ni préparé. Aucun contrat d'exécution n'a été préparé. Réessayez lorsque l'état Product est de nouveau lisible.",
  ].join(" ");
}

/**
 * Pilot-facing orientation when Cycle Lifecycle is requested but START
 * preconditions are not met. Never claims PREPARE/EC/HD mission semantics.
 */
export function cycleLifecyclePreconditionsMessage(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly phase: FramingContinuityPhase | null | undefined;
  readonly cycleLabel?: string | null;
  readonly discrimination: ConversationWorkflowDiscrimination;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "ce cycle";
  const mixedNote =
    input.discrimination.kind === "ambiguous_mixed" &&
    input.discrimination.hasExecutionMissionLanguage
      ? " La préparation d'un contrat d'exécution Cursor reste une étape distincte — après démarrage du cycle, pas à sa place."
      : "";

  switch (input.phase) {
    case "ready_to_start":
      return [
        head,
        `Le cycle ${cycle} est préparé. Indiquez explicitement que vous souhaitez le démarrer — aucun ExecutionContract n'est requis pour START.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "trajectory_decided_prepare_cycle":
      return [
        head,
        `La trajectoire est décidée — il reste à préparer le cycle ${cycle} avant tout démarrage. Aucun contrat d'exécution n'a été préparé.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "awaiting_trajectory_decision":
      return [
        head,
        `Une direction de trajectoire est proposée pour ${cycle}. Validez-la dans la carte de décision — un accord conversationnel ne démarre pas le cycle et ne prépare pas de contrat d'exécution.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "recommendation_ready":
      return [
        head,
        `Une recommandation de cycle est disponible. Je peux préparer la trajectoire candidate pour ${cycle} — validez ensuite la décision structurante si applicable. Aucun démarrage ni contrat d'exécution n'a été engagé.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "active":
      return [
        head,
        `Un cycle est déjà actif. Aucun second démarrage n'a été engagé.${mixedNote}`,
      ].join(" ");
    case "blocked_stale_or_incomplete":
      return [
        head,
        `La trajectoire candidate n'est pas encore exploitable pour ${cycle}. Aucune HumanDecision inventée, aucun démarrage, aucun contrat d'exécution.`,
      ].join(" ");
    case "blocked_no_recommendation":
    default:
      return [
        head,
        `Pour démarrer ${cycle}, Studio a besoin d'une recommandation de cycle puis d'une trajectoire préparée et liée — votre confirmation conversationnelle n'active rien à elle seule.`,
        "Aucun cycle artificiel n'a été créé. Aucun contrat d'exécution n'a été préparé.",
        mixedNote.trim(),
        "Utilisez la carte de trajectoire / préparation dans la conversation lorsqu'elle est disponible, ou demandez une recommandation de premier cycle.",
      ]
        .filter(Boolean)
        .join(" ");
  }
}

export function mixedCycleExecutionClarificationMessage(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly cycleLabel?: string | null;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "le cycle de travail";
  return [
    head,
    `Votre demande mélange démarrage de ${cycle} et préparation d'exécution.`,
    "Ce sont deux opérations distinctes : d'abord Cycle Lifecycle (trajectoire → préparation → START), ensuite Generic PREPARE du contrat — préparer ≠ autoriser ≠ exécuter.",
    "Aucune des deux n'a été engagée silencieusement. Précisez laquelle vous voulez en premier, ou validez la trajectoire du cycle puis redemandez le contrat.",
  ].join(" ");
}
