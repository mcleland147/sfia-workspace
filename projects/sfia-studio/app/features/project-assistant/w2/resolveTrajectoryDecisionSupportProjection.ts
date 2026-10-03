/**
 * Server-only trajectory decision-support projection for Nora prompt.
 * Kept out of studioCognitiveContext static imports to preserve browser/test
 * import boundaries (vertical-slice-runtime is server-only).
 *
 * CORR-01 C4 — Epistemic / ambiguous / invented current state → UNAVAILABLE.
 * MD-WR-04 — after PT decided, expose opt:trajectory:* only under existing
 * typed genuine replan signals (recommendationKind:"replan" |
 * requiresHumanDecision). Ordinary in-cycle work → NONE.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { StudioTrajectoryDecisionSupportProjection } from "../f2/studioCognitiveContext";
import { deriveTrajectoryOptions } from "./trajectoryOptions";
import { resolvePostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
import { resolveCurrentNoraTrajectoryRecommendation } from "./resolveCurrentNoraTrajectoryRecommendation";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import { readCurrentTrajectoryDecidedByRef } from "../trajectoryRecommendationCurrentness";

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

/**
 * MD-WR-04 — pure gate. Existing typed recovery fields only; no text heuristics.
 */
export function shouldExposeTrajectoryDecisionSupport(input: {
  readonly cycleInstanceId: string | null | undefined;
  readonly trajectoryReadOk: boolean;
  readonly decidedByDecisionRef: string | null | undefined;
  readonly recoveryReadOk: boolean;
  readonly recommendationKind?: string | null;
  readonly requiresHumanDecision?: boolean | null;
}):
  | { readonly expose: true; readonly reason: "pt_undecided" | "genuine_replan" }
  | {
      readonly expose: false;
      readonly reason:
        | "no_active_cycle"
        | "pt_decided_no_replan"
        | "trajectory_unreadable";
    }
  | { readonly expose: "unavailable"; readonly reason: "state_unreadable" } {
  if (!input.cycleInstanceId?.trim()) {
    return { expose: false, reason: "no_active_cycle" };
  }
  if (!input.trajectoryReadOk || !input.recoveryReadOk) {
    return { expose: "unavailable", reason: "state_unreadable" };
  }
  const decided =
    typeof input.decidedByDecisionRef === "string" &&
    input.decidedByDecisionRef.trim().length > 0;
  if (!decided) {
    return { expose: true, reason: "pt_undecided" };
  }
  if (
    input.recommendationKind === "replan" ||
    input.requiresHumanDecision === true
  ) {
    return { expose: true, reason: "genuine_replan" };
  }
  return { expose: false, reason: "pt_decided_no_replan" };
}

/**
 * MD-WR-07 — bind the explicit TDS tri-state into Pilot lifecycle finalization
 * (lib layer cannot import this feature module). Idempotent.
 */
export function bindPilotLifecycleTrajectoryDecisionSupport(
  oa: RuntimeOaStack,
): void {
  oa.cycleServices.pilotLifecycle.bindTrajectoryDecisionSupportStateResolver?.(
    async ({ projectId, cycleInstanceId }) => {
      const tds = await resolveTrajectoryDecisionSupportProjection({
        oa,
        projectId,
        cycleInstanceId,
      });
      return tds.state;
    },
  );
}

export async function resolveTrajectoryDecisionSupportProjection(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
}): Promise<StudioTrajectoryDecisionSupportProjection> {
  if (!input.cycleInstanceId?.trim()) {
    return NONE;
  }
  try {
    const recovery = await resolvePostEvidenceRecoveryContext({
      oa: input.oa,
      projectId: input.projectId,
    });
    if (!recovery.ok) {
      return UNAVAILABLE;
    }

    // Only a typed TRAJECTORY_NOT_FOUND (no current PT) = PT undecided (expose).
    // Any other failure / thrown error → UNAVAILABLE (fail-closed, never a
    // silent decidedByDecisionRef=null). A readable decidedByDecisionRef closes
    // the permanent PT option menu (MD-WR-04).
    const current = await readCurrentTrajectoryDecidedByRef({
      oa: input.oa,
      projectId: input.projectId,
    });
    if (current.kind === "unavailable") {
      return UNAVAILABLE;
    }
    const decidedByDecisionRef = current.decidedByDecisionRef;

    const gate = shouldExposeTrajectoryDecisionSupport({
      cycleInstanceId: input.cycleInstanceId,
      trajectoryReadOk: true,
      decidedByDecisionRef,
      recoveryReadOk: true,
      recommendationKind: recovery.context?.recommendationKind ?? null,
      requiresHumanDecision: recovery.context?.requiresHumanDecision ?? false,
    });
    if (gate.expose === "unavailable") {
      return UNAVAILABLE;
    }
    if (!gate.expose) {
      return NONE;
    }

    const qual = await resolveW2QualificationInputs({
      oa: input.oa,
      projectId: input.projectId,
    });
    if (!qual.ok) {
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
