/**
 * Native SFIA qualification via shared RuntimeOaStack CKC services (M2).
 * Recommendation only — never a Morris decision / execution authority.
 */

import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  type CkcQualificationServices,
  type CkcQualificationSuccessResult,
} from "@/lib/oa/cycle";
import type { F2QualificationSignals, QualificationDto } from "./types";

export {
  enrichQualificationWithCkcSemantics,
  type CkcQualificationProof,
} from "./ckcCognitiveContext";

export function projectCkcResolutionRef(
  proof: CkcQualificationSuccessResult["proof"],
): string {
  const digest = proof.catalogHash.replace(/^sha256:/i, "").slice(0, 12);
  const corr = proof.correlationId.replace(/[^a-zA-Z0-9]/g, "").slice(-16);
  return `ckc:m2-${digest || "nodigest"}-${corr || "nocorr"}`;
}

export async function qualifyWithCkc(input: {
  cycleTypeId: string;
  signals: F2QualificationSignals;
  objective?: string;
  scope?: string;
  correlationId: string;
  /** Shared runtime CKC services — preferred over private composition. */
  ckcQualification: CkcQualificationServices;
}): Promise<
  | { ok: true; qualification: QualificationDto; raw: CkcQualificationSuccessResult }
  | { ok: false; code: string; message: string }
> {
  const result = await input.ckcQualification.qualifyCycleWithCkc.execute({
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
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
    ckcResolutionRef: projectCkcResolutionRef(result.proof),
    executionAuthority: false,
  };

  return { ok: true, qualification, raw: result };
}
