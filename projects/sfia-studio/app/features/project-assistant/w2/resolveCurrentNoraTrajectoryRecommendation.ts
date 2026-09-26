/**
 * PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01 / CORR-01 —
 * resolve the current Nora ACW trajectory Recommendation for a decision-support
 * OptionSet.
 *
 * Prefer a fresh validated Nora recommendedOptionRef when it belongs to the
 * server-derived OptionSet. Otherwise expose deterministic fallback explicitly.
 * Never silently pick among ambiguous / mixed-invalid Nora Recommendations.
 * Subject-aware HumanDecision cutoff: accepted/amended trajectory_option HD for
 * the same active cycle supersedes prior Nora Recommendations as CURRENT.
 * Recommendation ≠ HumanDecision; never promotes trajectory.
 */

import { createHash } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { EpistemicItem } from "@/lib/oa/cycle";
import {
  ACTIVE_CYCLE_WORK_SOURCE,
  extractAcwRecommendedOptionRef,
} from "../materializeActiveCycleWork";
import {
  resolveTrajectoryRecommendationCutoffFromDecisions,
} from "../trajectoryRecommendationCurrentness";
import type { TrajectoryRecommendationDto } from "./types";
import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
import type { TrajectoryOptionInputs } from "./trajectoryOptions";
import { deriveTrajectoryRecommendation } from "./trajectoryOptions";

export {
  classifyAcwRecommendationCurrentness,
  isAcceptedTrajectoryOptionDecisionForCycle,
  resolveTrajectoryRecommendationCutoffFromDecisions,
} from "../trajectoryRecommendationCurrentness";

export type RecommendationSourceKind =
  | "nora_active_cycle"
  | "deterministic_fallback";

export type ResolvedTrajectoryRecommendation = {
  readonly recommendation: TrajectoryRecommendationDto;
  readonly recommendationSource: RecommendationSourceKind;
  readonly recommendationBasisDigest: string;
  readonly noraRecommendationEpistemicItemId: string | null;
  readonly noraRecommendationCreatedAt: string | null;
};

export type ResolveCurrentNoraTrajectoryRecommendationResult =
  | { readonly ok: true; readonly resolved: ResolvedTrajectoryRecommendation }
  | {
      readonly ok: false;
      readonly code:
        | "AMBIGUOUS_NORA_RECOMMENDATION"
        | "NORA_RECOMMENDATION_NOT_IN_OPTION_SET"
        | "EPISTEMIC_UNAVAILABLE";
      readonly message: string;
    };

function relatedToCycle(
  item: EpistemicItem,
  cycleInstanceId: string,
): boolean {
  return (item.relatedObjects ?? []).includes(cycleInstanceId);
}

function computeNoraBasisDigest(input: {
  readonly epistemicItemId: string;
  readonly recommendedOptionRef: string;
  readonly createdAt: string;
}): string {
  return computeDecisionBasisSourceDigest({
    kind: "nora_active_cycle_recommendation",
    epistemicItemId: input.epistemicItemId,
    recommendedOptionRef: input.recommendedOptionRef,
    createdAt: input.createdAt,
  });
}

function computeFallbackBasisDigest(input: {
  readonly recommendedOptionRef: string;
  readonly optionInputs: TrajectoryOptionInputs;
}): string {
  const recovery = input.optionInputs.recoveryContext;
  return computeDecisionBasisSourceDigest({
    kind: "deterministic_fallback_recommendation",
    recommendedOptionRef: input.recommendedOptionRef,
    cycleTypeId: input.optionInputs.cycleTypeId,
    recommendedProfile: input.optionInputs.recommendedProfile,
    criticalSignalsPresent: input.optionInputs.criticalSignalsPresent,
    irreversible: input.optionInputs.irreversible,
    reservations: [...input.optionInputs.reservations],
    recoveryAttemptId: recovery?.attemptId ?? null,
    recoveryProductOutcome: recovery?.productOutcome ?? null,
  });
}

/**
 * Pure selection among ACW Recommendation items (exported for tests).
 */
export function selectCurrentNoraTrajectoryRecommendationItems(input: {
  readonly items: readonly EpistemicItem[];
  readonly cycleInstanceId: string;
  readonly optionRefs: readonly string[];
  /** When set, ignore Nora Recommendations created at/before this HD timestamp. */
  readonly ignoreCreatedAtOnOrBefore?: string | null;
}):
  | { readonly ok: true; readonly item: EpistemicItem; readonly recommendedOptionRef: string }
  | { readonly ok: true; readonly item: null }
  | {
      readonly ok: false;
      readonly code: "AMBIGUOUS_NORA_RECOMMENDATION" | "NORA_RECOMMENDATION_NOT_IN_OPTION_SET";
      readonly message: string;
    } {
  const optionSet = new Set(input.optionRefs);
  const cutoff = input.ignoreCreatedAtOnOrBefore?.trim() || null;
  const candidates = input.items.filter((item) => {
    if (item.source !== ACTIVE_CYCLE_WORK_SOURCE) return false;
    if (item.type !== "Recommendation") return false;
    if (item.status !== "active") return false;
    if (!relatedToCycle(item, input.cycleInstanceId)) return false;
    if (cutoff && item.createdAt <= cutoff) return false;
    return extractAcwRecommendedOptionRef(item.relatedObjects) != null;
  });

  if (candidates.length === 0) {
    return { ok: true, item: null };
  }

  const withRefs = candidates.map((item) => ({
    item,
    ref: extractAcwRecommendedOptionRef(item.relatedObjects)!,
  }));

  const notInSet = withRefs.filter((c) => !optionSet.has(c.ref));
  const inSet = withRefs.filter((c) => optionSet.has(c.ref));

  // CORR-01 C1 — ANY current Nora Recommendation outside OptionSet → fail-closed.
  // Mixed valid+invented must NOT silently keep the valid winner.
  if (notInSet.length > 0) {
    return {
      ok: false,
      code: "NORA_RECOMMENDATION_NOT_IN_OPTION_SET",
      message: `Recommendation Nora « ${notInSet[0]!.ref} » absente des Options serveur — aucune présentation inventée.`,
    };
  }

  if (inSet.length === 0) {
    return { ok: true, item: null };
  }

  const distinctRefs = new Set(inSet.map((c) => c.ref));
  if (distinctRefs.size > 1) {
    return {
      ok: false,
      code: "AMBIGUOUS_NORA_RECOMMENDATION",
      message:
        "Plusieurs Recommendations Nora courantes concurrentes — aucune sélection silencieuse.",
    };
  }

  // Newest by createdAt, then epistemicItemId for stability.
  const sorted = [...inSet].sort((a, b) => {
    const byCreated = b.item.createdAt.localeCompare(a.item.createdAt);
    if (byCreated !== 0) return byCreated;
    return b.item.epistemicItemId.localeCompare(a.item.epistemicItemId);
  });
  const winner = sorted[0]!;
  return {
    ok: true,
    item: winner.item,
    recommendedOptionRef: winner.ref,
  };
}

/**
 * Resolve recommendation for W2 present: Nora ACW when eligible, else
 * deterministic deriveTrajectoryRecommendation as explicit fallback.
 */
export async function resolveCurrentNoraTrajectoryRecommendation(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly optionRefs: readonly string[];
  readonly optionInputs: TrajectoryOptionInputs;
  readonly ignoreCreatedAtOnOrBefore?: string | null;
}): Promise<ResolveCurrentNoraTrajectoryRecommendationResult> {
  const fallback = deriveTrajectoryRecommendation(input.optionInputs);
  const fallbackDigest = computeFallbackBasisDigest({
    recommendedOptionRef: fallback.recommendedOptionRef,
    optionInputs: input.optionInputs,
  });

  if (!input.cycleInstanceId?.trim()) {
    return {
      ok: true,
      resolved: {
        recommendation: fallback,
        recommendationSource: "deterministic_fallback",
        recommendationBasisDigest: fallbackDigest,
        noraRecommendationEpistemicItemId: null,
        noraRecommendationCreatedAt: null,
      },
    };
  }

  let items: EpistemicItem[] = [];
  try {
    items = await input.oa.cycleServices.epistemic.listByProject(
      input.projectId,
    );
  } catch {
    return {
      ok: false,
      code: "EPISTEMIC_UNAVAILABLE",
      message:
        "État épistémique illisible — impossible de résoudre la Recommendation Nora courante.",
    };
  }

  // CORR-01 C3 — subject-aware HD cutoff from durable HumanDecision truth.
  let cutoff = input.ignoreCreatedAtOnOrBefore?.trim() || null;
  if (cutoff === null && input.ignoreCreatedAtOnOrBefore === undefined) {
    try {
      const decisions = await input.oa.decisionServices.decisions.listByProject(
        input.projectId,
      );
      cutoff = resolveTrajectoryRecommendationCutoffFromDecisions({
        decisions,
        cycleInstanceId: input.cycleInstanceId,
      });
    } catch {
      return {
        ok: false,
        code: "EPISTEMIC_UNAVAILABLE",
        message:
          "HumanDecisions illisibles — impossible de déterminer la currentness Recommendation.",
      };
    }
  }

  const selected = selectCurrentNoraTrajectoryRecommendationItems({
    items,
    cycleInstanceId: input.cycleInstanceId,
    optionRefs: input.optionRefs,
    ignoreCreatedAtOnOrBefore: cutoff,
  });

  if (!selected.ok) {
    return {
      ok: false,
      code: selected.code,
      message: selected.message,
    };
  }

  if (!selected.item) {
    return {
      ok: true,
      resolved: {
        recommendation: fallback,
        recommendationSource: "deterministic_fallback",
        recommendationBasisDigest: fallbackDigest,
        noraRecommendationEpistemicItemId: null,
        noraRecommendationCreatedAt: null,
      },
    };
  }

  const noraRecommendation: TrajectoryRecommendationDto = {
    label: "RECOMMANDATION — PAS UNE DÉCISION",
    recommendedOptionRef: selected.recommendedOptionRef,
    rationale:
      selected.item.statement.trim() ||
      `Nora recommande l'option ${selected.recommendedOptionRef} — pas une décision.`,
    isHumanDecision: false,
    promotesTrajectory: false,
    ckcAttribution: input.optionInputs.ckcAttribution,
    ckcProvenance: null,
  };

  return {
    ok: true,
    resolved: {
      recommendation: noraRecommendation,
      recommendationSource: "nora_active_cycle",
      recommendationBasisDigest: computeNoraBasisDigest({
        epistemicItemId: selected.item.epistemicItemId,
        recommendedOptionRef: selected.recommendedOptionRef,
        createdAt: selected.item.createdAt,
      }),
      noraRecommendationEpistemicItemId: selected.item.epistemicItemId,
      noraRecommendationCreatedAt: selected.item.createdAt,
    },
  };
}

/** Stable digest helper for tests / decide stale checks without re-listing. */
export function hashRecommendationBasisToken(token: string): string {
  return createHash("sha256").update(token, "utf8").digest("hex").slice(0, 32);
}
