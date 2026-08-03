import { describe, expect, it } from "vitest";
import {
  CKC_PILOT_CADRAGE_PATH,
  CKC_SYNTHETIC_MAP_PATH,
  createCkcQualificationFailure,
  createCkcQualificationSuccess,
  createSignalsIncompleteError,
  type CkcConsumptionProof,
  type QualifyCycleRecommendation,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const projection: ValidatedCycleTypeProjection = Object.freeze({
  cycleTypeId: "cyc:framing",
  label: "Cadrage",
  shortDescription: "Clarifier le périmètre.",
  lifecycleStatus: "active",
  ckc: Object.freeze({
    mandatory: true,
    primaryLevel: "detailed",
    primaryReference: CKC_PILOT_CADRAGE_PATH,
    fallbackPolicy: "synthetic_map",
    fallbackReference: CKC_SYNTHETIC_MAP_PATH,
    executionAuthority: false,
    doctrineStatus: "method-candidate",
    unavailableBehavior: "fail-closed",
  }),
  catalogVersion: "3.1",
  catalogHash: "sha256:catalog",
  correlationId: "cor:d2-c-result",
});

const proof: CkcConsumptionProof = Object.freeze({
  cycleTypeId: projection.cycleTypeId,
  detailedStatus: "resolved_fallback_synthetic",
  level: "synthetic",
  status: "synthetic",
  source: "intra_v3_synthetic",
  expectedPrimaryReference: CKC_PILOT_CADRAGE_PATH,
  usedReference: CKC_SYNTHETIC_MAP_PATH,
  fallbackUsed: true,
  fallbackReference: CKC_SYNTHETIC_MAP_PATH,
  catalogVersion: projection.catalogVersion,
  catalogHash: projection.catalogHash,
  correlationId: projection.correlationId,
  resolvedAt: "2026-08-03T07:00:00.000Z",
  doctrineStatus: "method-candidate",
  executionAuthority: false,
  consumed: true,
  disclosures: Object.freeze(["CKC_FALLBACK_USED"]),
});

const recommendation: QualifyCycleRecommendation = Object.freeze({
  recommendedProfile: "Critical",
  rationale: "At least one critical signal is present.",
  criticalSignalsPresent: true,
  isMorrisDecision: false,
  requiresJustificationForCritical: true,
  capitalizationViaCycleTypeId: false,
});

describe("V3.1-D2-C Result Projection", () => {
  it("builds a frozen success while preserving the original proof", () => {
    const result = createCkcQualificationSuccess({
      projection,
      proof,
      recommendation,
      qualifiedAt: "2026-08-03T07:00:01.000Z",
    });

    expect(result).toMatchObject({
      state: "success",
      cycleTypeId: "cyc:framing",
      detailedStatus: "resolved_fallback_synthetic",
      recommendedProfile: "Critical",
      isMorrisDecision: false,
      disclosures: ["CKC_FALLBACK_USED"],
    });
    expect(result.proof).toBe(proof);
    expect(result.proof.consumed).toBe(true);
    expect(Object.isFrozen(result)).toBe(true);
    expect(Object.isFrozen(result.disclosures)).toBe(true);
  });

  it("builds a frozen failure with no exploitable partial result", () => {
    const result = createCkcQualificationFailure({
      error: createSignalsIncompleteError({
        correlationId: "cor:d2-c-result",
        cycleTypeId: "cyc:framing",
      }),
      failedAt: "2026-08-03T07:00:02.000Z",
      correlationId: "cor:d2-c-result",
      cycleTypeId: "cyc:framing",
    });

    expect(result).toEqual({
      state: "failure",
      code: "SIGNALS_INCOMPLETE",
      message: "All six qualification signals must be explicit booleans.",
      blocking: true,
      retryable: true,
      recoverable: true,
      correlationId: "cor:d2-c-result",
      cycleTypeId: "cyc:framing",
      failedAt: "2026-08-03T07:00:02.000Z",
    });
    expect(Object.isFrozen(result)).toBe(true);
    expect(result).not.toHaveProperty("proof");
    expect(result).not.toHaveProperty("consumed");
    expect(result).not.toHaveProperty("recommendedProfile");
    expect(result).not.toHaveProperty("rationale");
    expect(result).not.toHaveProperty("criticalSignalsPresent");
  });
});
