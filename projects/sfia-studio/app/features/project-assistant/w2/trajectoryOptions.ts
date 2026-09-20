/**
 * W2 Track A — deterministic derivation of ProjectTrajectory Options and of the
 * accompanying Recommendation.
 *
 * Input is the durable qualification truth already produced by W1 (cycleTypeId,
 * recommended profile, explicit signals) plus the CKC attribution the W1 bounded
 * seam already carries. This module adds NO cognitive path: it does not call a
 * provider, does not read CKC content and is not a Phase B integration point.
 * Same inputs always yield the same options, in the same order.
 *
 * Checkpoint F / R7 — when RecoveryContext is present, same optionRefs are kept
 * (idempotent OptionSet supersession) but labels/intents/steps carry recovery
 * semantics so framing-generic cognition is not the subject.
 */

import type { TrajectoryStep } from "@/lib/oa/cycle";
import type {
  TrajectoryOptionDto,
  TrajectoryRecommendationDto,
} from "./types";
import type { PostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";

export type TrajectoryOptionInputs = {
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  readonly ckcAttribution: string | null;
  /** Optional durable post-Evidence recovery subject (R7). */
  readonly recoveryContext?: PostEvidenceRecoveryContext | null;
};

export const GOVERNED_OPTION_REF = "opt:trajectory:governed-gated" as const;
export const BOUNDED_OPTION_REF = "opt:trajectory:bounded-direct" as const;
export const CLARIFY_OPTION_REF = "opt:trajectory:clarify-first" as const;

function step(
  order: number,
  slug: string,
  label: string,
  extra?: Partial<TrajectoryStep>,
): TrajectoryStep {
  return {
    stepId: `stp:${slug}`,
    order,
    label,
    state: "pending",
    ...extra,
  };
}

function governedSteps(): TrajectoryStep[] {
  return [
    step(1, "w2-gov-qualify", "Qualifier et cadrer le périmètre"),
    step(2, "w2-gov-options", "Instruire les options et la recommandation", {
      dependencies: ["stp:w2-gov-qualify"],
    }),
    step(3, "w2-gov-decide", "Décision humaine explicite", {
      dependencies: ["stp:w2-gov-options"],
      gate: "human_decision",
      exitCriteria: ["HumanDecision acceptée et reliée à sa base"],
    }),
    step(4, "w2-gov-contract", "Préparer le contrat d'exécution", {
      dependencies: ["stp:w2-gov-decide"],
    }),
    step(5, "w2-gov-inspect", "Inspecter le contrat avant autorisation", {
      dependencies: ["stp:w2-gov-contract"],
      gate: "inspection",
      exitCriteria: ["Inspection attachée à la version inspectée"],
    }),
    step(6, "w2-gov-authorize", "Statuer autorisé ou bloqué", {
      dependencies: ["stp:w2-gov-inspect"],
      gate: "effective_authority",
      exitCriteria: ["Autorité effective vérifiée", "Arrêt avant exécution"],
    }),
  ];
}

function boundedSteps(): TrajectoryStep[] {
  return [
    step(1, "w2-bnd-frame", "Cadrer un périmètre borné et réversible"),
    step(2, "w2-bnd-decide", "Décision humaine explicite", {
      dependencies: ["stp:w2-bnd-frame"],
      gate: "human_decision",
      exitCriteria: ["HumanDecision acceptée et reliée à sa base"],
    }),
    step(3, "w2-bnd-contract", "Préparer le contrat d'exécution borné", {
      dependencies: ["stp:w2-bnd-decide"],
    }),
    step(4, "w2-bnd-inspect", "Inspecter puis statuer autorisé ou bloqué", {
      dependencies: ["stp:w2-bnd-contract"],
      gate: "inspection",
      exitCriteria: ["Inspection valide", "Arrêt avant exécution"],
    }),
  ];
}

function clarifySteps(): TrajectoryStep[] {
  return [
    step(1, "w2-clr-collect", "Lever les réserves et compléter le contexte"),
    step(2, "w2-clr-requalify", "Requalifier le cycle sur base complétée", {
      dependencies: ["stp:w2-clr-collect"],
    }),
    step(3, "w2-clr-reoption", "Réinstruire les options", {
      dependencies: ["stp:w2-clr-requalify"],
      gate: "human_decision",
      exitCriteria: ["Nouvelle décision humaine requise avant toute suite"],
    }),
  ];
}

function recoveryRetrySteps(outcome: "FAIL" | "STOP" | "UNCLAIMED"): TrajectoryStep[] {
  const diagnoseLabel =
    outcome === "UNCLAIMED"
      ? "Prendre en compte le succès technique et le résultat produit non prouvé"
      : outcome === "STOP"
        ? "Prendre en compte l'arrêt gouverné (STOP) et l'Evidence durables"
        : "Prendre en compte l'échec et l'Evidence durables";
  return [
    step(1, "w2-rec-diagnose", diagnoseLabel),
    step(2, "w2-rec-decide", "Décision humaine explicite de recovery", {
      dependencies: ["stp:w2-rec-diagnose"],
      gate: "human_decision",
      exitCriteria: ["HumanDecision acceptée — Recommendation ≠ décision"],
    }),
    step(3, "w2-rec-contract", "Préparer un nouveau contrat d'exécution", {
      dependencies: ["stp:w2-rec-decide"],
    }),
    step(4, "w2-rec-inspect", "Inspecter puis autoriser avant Execute", {
      dependencies: ["stp:w2-rec-contract"],
      gate: "inspection",
      exitCriteria: ["Inspection valide", "Arrêt avant exécution"],
    }),
  ];
}

function recoveryClarifySteps(): TrajectoryStep[] {
  return [
    step(1, "w2-rec-clr-read", "Lire Evidence / ReviewBundle / stopReason"),
    step(
      2,
      "w2-rec-clr-gap",
      "Clarifier le diagnostic avant toute nouvelle tentative",
      { dependencies: ["stp:w2-rec-clr-read"] },
    ),
    step(3, "w2-rec-clr-reoption", "Réinstruire les options recovery", {
      dependencies: ["stp:w2-rec-clr-gap"],
      gate: "human_decision",
      exitCriteria: ["Nouvelle décision humaine requise"],
    }),
  ];
}

function recoverySuspendSteps(outcome: "FAIL" | "STOP" | "UNCLAIMED"): TrajectoryStep[] {
  const ackLabel =
    outcome === "UNCLAIMED"
      ? "Conserver le succès technique et le résultat produit non prouvé comme vérité durable"
      : outcome === "STOP"
        ? "Conserver le STOP / arrêt gouverné comme vérité durable"
        : "Conserver l'échec comme vérité durable";
  return [
    step(1, "w2-rec-hold-ack", ackLabel),
    step(2, "w2-rec-hold-decide", "Décision humaine de suspension / replan", {
      dependencies: ["stp:w2-rec-hold-ack"],
      gate: "human_decision",
      exitCriteria: ["HumanDecision acceptée — pas de relance automatique"],
    }),
    step(3, "w2-rec-hold-replan", "Replanifier sans Execute immédiat", {
      dependencies: ["stp:w2-rec-hold-decide"],
    }),
  ];
}

/**
 * Options are always presented in the same order so the UI never implies a
 * ranking by position. Ranking is carried only by the explicit Recommendation.
 */
export function deriveTrajectoryOptions(
  inputs: TrajectoryOptionInputs,
): TrajectoryOptionDto[] {
  const reservations = [...inputs.reservations];
  const recovery = inputs.recoveryContext ?? null;
  if (recovery) {
    // CR-PCONT-02 — discriminate FAIL / STOP / UNCLAIMED (not a boolean).
    const outcome = recovery.productOutcome;
    const outcomePhrase =
      outcome === "UNCLAIMED" && recovery.attemptStatus === "succeeded"
        ? "exécution technique réussie, résultat produit non encore prouvé"
        : outcome === "UNCLAIMED"
          ? "résultat produit non encore prouvé (UNCLAIMED)"
          : outcome === "STOP"
            ? "STOP durable / arrêt gouverné"
            : "FAIL durable";
    const attemptImpact = `Attempt ${recovery.attemptStatus}: ${recovery.attemptId}`;
    const holdIntent =
      outcome === "UNCLAIMED"
        ? "Conserver le succès technique et le résultat produit non prouvé comme vérité, décider de suspendre ou replanifier — aucune nouvelle tentative immédiate."
        : outcome === "STOP"
          ? "Conserver le STOP / arrêt gouverné comme vérité, décider de suspendre ou replanifier — aucune nouvelle tentative immédiate."
          : "Conserver l'échec comme vérité, décider de suspendre ou replanifier — aucune nouvelle tentative immédiate.";
    return [
      {
        kind: "OPTION",
        optionRef: GOVERNED_OPTION_REF,
        label: "Préparer une nouvelle tentative gouvernée",
        intent: `À partir du ${outcomePhrase}, décider explicitement puis préparer / inspecter / autoriser un nouveau contrat — sans Execute automatique.`,
        impacts: [
          "Reprend à partir du résultat déjà observé",
          "Aucun succès métier revendiqué automatiquement",
          "Décision humaine requise avant préparation",
          attemptImpact,
          `Evidence: ${recovery.evidenceId}`,
          `productOutcome: ${outcome}`,
          `realProcessInvoked durable: ${recovery.realProcessInvoked}`,
        ],
        reservations,
        steps: recoveryRetrySteps(outcome),
      },
      {
        kind: "OPTION",
        optionRef: BOUNDED_OPTION_REF,
        label: "Replanifier ou suspendre sans relance immédiate",
        intent: holdIntent,
        impacts: [
          "Pas de relance Execute dans cette option",
          `W3C: ${recovery.recommendationKind}`,
          `outcome: ${outcome}`,
        ],
        reservations,
        steps: recoverySuspendSteps(outcome),
      },
      {
        kind: "OPTION",
        optionRef: CLARIFY_OPTION_REF,
        label: "Diagnostiquer / clarifier avant nouvelle tentative",
        intent:
          "Approfondir le diagnostic du livrable et des preuves disponibles avant toute préparation d'une nouvelle tentative.",
        impacts: [
          "Aucune préparation d'exécution à ce stade",
          "Nouvelle décision humaine requise après clarification",
          `stopReason: ${recovery.stopReason ?? "n/a"}`,
        ],
        reservations,
        steps: recoveryClarifySteps(),
      },
    ];
  }
  return [
    {
      kind: "OPTION",
      optionRef: GOVERNED_OPTION_REF,
      label: "Trajectoire gouvernée par gates",
      intent:
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      impacts: [
        "Chaque frontière d'autorité est explicite",
        "Durée plus longue",
        `Profil de cycle: ${inputs.recommendedProfile}`,
      ],
      reservations,
      steps: governedSteps(),
    },
    {
      kind: "OPTION",
      optionRef: BOUNDED_OPTION_REF,
      label: "Trajectoire bornée directe",
      intent:
        "Cadrer un périmètre réversible et resserré, décider, préparer puis inspecter avant de statuer.",
      impacts: [
        "Chemin plus court",
        "Exige un périmètre réversible",
        inputs.irreversible
          ? "Signal irréversible présent — périmètre à réduire avant d'emprunter cette option"
          : "Aucun signal irréversible déclaré",
      ],
      reservations,
      steps: boundedSteps(),
    },
    {
      kind: "OPTION",
      optionRef: CLARIFY_OPTION_REF,
      label: "Clarifier avant d'engager",
      intent:
        "Lever les réserves, requalifier le cycle, puis réinstruire les options avant toute décision structurante.",
      impacts: [
        "Aucune préparation d'exécution à ce stade",
        "Nouvelle décision humaine requise après clarification",
      ],
      reservations,
      steps: clarifySteps(),
    },
  ];
}

/**
 * Deterministic recommendation. It ranks an existing Option and never creates
 * an arbitration: `isHumanDecision` and `promotesTrajectory` are const false.
 */
export function deriveTrajectoryRecommendation(
  inputs: TrajectoryOptionInputs,
): TrajectoryRecommendationDto {
  const recovery = inputs.recoveryContext ?? null;
  if (recovery) {
    // Prefer diagnose/clarify — never auto-pick retry because a Morris REAL GO exists.
    return {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: CLARIFY_OPTION_REF,
      rationale: `L'épisode précédent s'est terminé avec un résultat produit ${recovery.productOutcome === "UNCLAIMED" ? "non encore pleinement confirmé" : recovery.productOutcome === "STOP" ? "arrêté de façon gouvernée" : "en échec"}. ${recovery.headline} Studio recommande de diagnostiquer / clarifier avant toute nouvelle tentative. Votre décision reste nécessaire — cette recommandation ne lance aucune action automatiquement.`,
      isHumanDecision: false,
      promotesTrajectory: false,
      ckcAttribution: inputs.ckcAttribution,
      ckcProvenance: null,
    };
  }
  if (inputs.reservations.length > 0) {
    return {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: CLARIFY_OPTION_REF,
      rationale: `Réserves explicites non levées (${inputs.reservations.length}) — clarifier avant d'engager une trajectoire structurante.`,
      isHumanDecision: false,
      promotesTrajectory: false,
      ckcAttribution: inputs.ckcAttribution,
      ckcProvenance: null,
    };
  }
  if (inputs.criticalSignalsPresent || inputs.recommendedProfile === "Critical") {
    return {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: GOVERNED_OPTION_REF,
      rationale:
        "Signaux critiques déclarés — trajectoire gouvernée par gates recommandée pour rendre chaque frontière d'autorité explicite.",
      isHumanDecision: false,
      promotesTrajectory: false,
      ckcAttribution: inputs.ckcAttribution,
      ckcProvenance: null,
    };
  }
  return {
    label: "RECOMMANDATION — PAS UNE DÉCISION",
    recommendedOptionRef: BOUNDED_OPTION_REF,
    rationale:
      "Aucun signal critique ni réserve bloquante — trajectoire bornée directe recommandée, sous réserve d'un périmètre réversible.",
    isHumanDecision: false,
    promotesTrajectory: false,
    ckcAttribution: inputs.ckcAttribution,
    ckcProvenance: null,
  };
}
