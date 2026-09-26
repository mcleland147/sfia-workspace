/**
 * Server-only trajectory decision-support projection for Nora prompt.
 * Kept out of studioCognitiveContext static imports to preserve browser/test
 * import boundaries (vertical-slice-runtime is server-only).
 *
 * CORR-01 C4 — Epistemic / ambiguous / invented current state → UNAVAILABLE.
 * KNOWN EMPTY (no eligible Nora Recommendation after successful read) may use
 * deterministic_fallback. Never convert UNKNOWN into fallback-normal.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { StudioTrajectoryDecisionSupportProjection } from "../f2/studioCognitiveContext";
import { deriveTrajectoryOptions } from "./trajectoryOptions";
import { resolvePostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
import { resolveCurrentNoraTrajectoryRecommendation } from "./resolveCurrentNoraTrajectoryRecommendation";
import { resolveW2QualificationInputs } from "./qualificationInputs";

const UNAVAILABLE: StudioTrajectoryDecisionSupportProjection = Object.freeze({
  state: "UNAVAILABLE",
  optionRefs: Object.freeze([]),
  optionLabels: Object.freeze([]),
  currentNoraRecommendedOptionRef: null,
  currentRecommendationSource: null,
});

const NONE: StudioTrajectoryDecisionSupportProjection = Object.freeze({
  state: "NONE",
  optionRefs: Object.freeze([]),
  optionLabels: Object.freeze([]),
  currentNoraRecommendedOptionRef: null,
  currentRecommendationSource: null,
});

export async function resolveTrajectoryDecisionSupportProjection(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
}): Promise<StudioTrajectoryDecisionSupportProjection> {
  if (!input.cycleInstanceId?.trim()) {
    return NONE;
  }
  try {
    const qual = await resolveW2QualificationInputs({
      oa: input.oa,
      projectId: input.projectId,
    });
    const recovery = await resolvePostEvidenceRecoveryContext({
      oa: input.oa,
      projectId: input.projectId,
    });
    if (!qual.ok || !recovery.ok) {
      return UNAVAILABLE;
    }
    const optionInputs = {
      ...qual.qualification.inputs,
      recoveryContext: recovery.context,
    };
    const options = deriveTrajectoryOptions(optionInputs);
    const optionRefs = options.map((o) => o.optionRef);
    const optionLabels = options.map((o) => o.label);

    const noraResolution = await resolveCurrentNoraTrajectoryRecommendation({
      oa: input.oa,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      optionRefs,
      optionInputs,
    });

    // CORR-01 C4 — fail-closed / UNAVAILABLE; never silent deterministic fallback.
    if (!noraResolution.ok) {
      return UNAVAILABLE;
    }

    const noraRef =
      noraResolution.resolved.recommendationSource === "nora_active_cycle"
        ? noraResolution.resolved.recommendation.recommendedOptionRef
        : null;

    return Object.freeze({
      state: "PRESENT",
      optionRefs: Object.freeze(optionRefs),
      optionLabels: Object.freeze(optionLabels),
      currentNoraRecommendedOptionRef: noraRef,
      currentRecommendationSource: noraResolution.resolved.recommendationSource,
    });
  } catch {
    return UNAVAILABLE;
  }
}
