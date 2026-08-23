/**
 * W2 Track A — deterministic derivation of ProjectTrajectory Options and of the
 * accompanying Recommendation.
 *
 * Input is the durable qualification truth already produced by W1 (cycleTypeId,
 * recommended profile, explicit signals) plus the CKC attribution the W1 bounded
 * seam already carries. This module adds NO cognitive path: it does not call a
 * provider, does not read CKC content and is not a Phase B integration point.
 * Same inputs always yield the same options, in the same order.
 */

import type { TrajectoryStep } from "@/lib/oa/cycle";
import type {
  TrajectoryOptionDto,
  TrajectoryRecommendationDto,
} from "./types";

export type TrajectoryOptionInputs = {
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  readonly ckcAttribution: string | null;
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

/**
 * Options are always presented in the same order so the UI never implies a
 * ranking by position. Ranking is carried only by the explicit Recommendation.
 */
export function deriveTrajectoryOptions(
  inputs: TrajectoryOptionInputs,
): TrajectoryOptionDto[] {
  const reservations = [...inputs.reservations];
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
