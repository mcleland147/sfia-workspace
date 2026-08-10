/**
 * Native SFIA qualification via QualifyCycleWithCkc (recommendation only).
 */

import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  createCkcQualificationServices,
  type CkcQualificationSuccessResult,
} from "@/lib/oa/cycle";
import type { F2QualificationSignals, QualificationDto } from "./types";

export async function qualifyWithCkc(input: {
  cycleTypeId: string;
  signals: F2QualificationSignals;
  objective?: string;
  scope?: string;
  correlationId: string;
}): Promise<
  | { ok: true; qualification: QualificationDto; raw: CkcQualificationSuccessResult }
  | { ok: false; code: string; message: string }
> {
  const services = createCkcQualificationServices();
  const result = await services.qualifyCycleWithCkc.execute({
    cycleTypeId: input.cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: input.correlationId,
    signals: input.signals,
    objective: input.objective,
    scope: input.scope,
  });

  if (result.state !== "success") {
    return {
      ok: false,
      code: result.code,
      message: result.message,
    };
  }

  const qualification: QualificationDto = {
    cycleTypeId: result.cycleTypeId,
    cycleLabel: result.label,
    recommendedProfile: result.recommendedProfile,
    rationale: result.rationale,
    criticalSignalsPresent: result.criticalSignalsPresent,
    requiresJustificationForCritical: result.requiresJustificationForCritical,
    capitalizationViaCycleTypeId: result.capitalizationViaCycleTypeId,
    isMorrisDecision: false,
    catalogVersion: result.catalogVersion,
    catalogHash: result.catalogHash,
    detailedStatus: result.detailedStatus,
    disclosures: [...result.disclosures],
    signals: input.signals,
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
  };

  return { ok: true, qualification, raw: result };
}
