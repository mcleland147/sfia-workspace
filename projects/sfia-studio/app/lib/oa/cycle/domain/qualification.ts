/**
 * Pure qualification — recommendation only, never a Morris decision.
 */
import {
  isCapitalizationCycleType,
  recommendProfile,
} from "./invariants";
import type {
  QualifyCycleRecommendation,
  QualifyCycleRequest,
  QualifyCycleResult,
} from "./types";

export function qualifyCycle(
  request: QualifyCycleRequest,
): QualifyCycleResult {
  const { profile, rationale, critical } = recommendProfile({
    signals: request.signals,
    requestedProfile: request.requestedProfile,
  });

  const capitalizationViaCycleTypeId = request.cycleTypeId
    ? isCapitalizationCycleType(request.cycleTypeId)
    : false;

  const recommendation: QualifyCycleRecommendation = {
    recommendedProfile: profile,
    rationale,
    criticalSignalsPresent: critical,
    isMorrisDecision: false,
    requiresJustificationForCritical: profile === "Critical",
    capitalizationViaCycleTypeId,
  };

  return { ok: true, recommendation };
}
