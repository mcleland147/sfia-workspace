import type { CkcConsumptionProof } from "./ckcConsumptionProof";
import type {
  CatalogProjectionErrorCode,
  CkcQualificationDetailedStatus,
  ValidatedCycleTypeProjection,
} from "./ckcQualificationContracts";
import type { CkcQualificationErrorCode } from "./ckcQualificationErrors";
import type {
  CycleProfile,
  QualifyCycleRecommendation,
} from "./types";

export type CkcQualificationResultErrorCode =
  | CatalogProjectionErrorCode
  | CkcQualificationErrorCode
  | "SIGNALS_INCOMPLETE";

export type CkcQualificationSuccessResult = {
  readonly state: "success";
  readonly cycleTypeId: string;
  readonly label: string;
  readonly shortDescription: string;
  readonly lifecycleStatus: ValidatedCycleTypeProjection["lifecycleStatus"];
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
  readonly detailedStatus: Extract<
    CkcQualificationDetailedStatus,
    | "resolved_detailed"
    | "resolved_synthetic"
    | "resolved_fallback_synthetic"
  >;
  readonly proof: CkcConsumptionProof;
  readonly recommendedProfile: CycleProfile;
  readonly rationale: string;
  readonly criticalSignalsPresent: boolean;
  readonly requiresJustificationForCritical: boolean;
  readonly capitalizationViaCycleTypeId: boolean;
  readonly isMorrisDecision: false;
  readonly disclosures: readonly string[];
  readonly resolvedAt: string;
  readonly qualifiedAt: string;
};

export type CkcQualificationFailureResult = {
  readonly state: "failure";
  readonly code: CkcQualificationResultErrorCode;
  readonly message: string;
  readonly blocking: true;
  readonly retryable: boolean;
  readonly recoverable: boolean;
  readonly correlationId: string;
  readonly cycleTypeId?: string;
  readonly failedAt: string;
};

export type CkcQualificationResult =
  | CkcQualificationSuccessResult
  | CkcQualificationFailureResult;

type FailureSource = {
  readonly code: CkcQualificationResultErrorCode;
  readonly message: string;
  readonly blocking: true;
  readonly retryable: boolean;
  readonly recoverable: boolean;
  readonly correlationId?: string;
  readonly cycleTypeId?: string;
};

/** Pure projection: it preserves the D2-B proof and T-A2 recommendation. */
export function createCkcQualificationSuccess(input: {
  readonly projection: ValidatedCycleTypeProjection;
  readonly proof: CkcConsumptionProof;
  readonly recommendation: QualifyCycleRecommendation;
  readonly qualifiedAt: string;
}): CkcQualificationSuccessResult {
  const { projection, proof, recommendation } = input;
  return Object.freeze({
    state: "success" as const,
    cycleTypeId: projection.cycleTypeId,
    label: projection.label,
    shortDescription: projection.shortDescription,
    lifecycleStatus: projection.lifecycleStatus,
    catalogVersion: projection.catalogVersion,
    catalogHash: projection.catalogHash,
    correlationId: projection.correlationId,
    detailedStatus: proof.detailedStatus,
    proof,
    recommendedProfile: recommendation.recommendedProfile,
    rationale: recommendation.rationale,
    criticalSignalsPresent: recommendation.criticalSignalsPresent,
    requiresJustificationForCritical:
      recommendation.requiresJustificationForCritical,
    capitalizationViaCycleTypeId:
      recommendation.capitalizationViaCycleTypeId,
    isMorrisDecision: false as const,
    disclosures: Object.freeze([...proof.disclosures]),
    resolvedAt: proof.resolvedAt,
    qualifiedAt: input.qualifiedAt,
  });
}

/** Pure fail-closed projection with no partial proof or recommendation fields. */
export function createCkcQualificationFailure(input: {
  readonly error: FailureSource;
  readonly failedAt: string;
  readonly correlationId: string;
  readonly cycleTypeId?: string;
}): CkcQualificationFailureResult {
  const cycleTypeId = input.error.cycleTypeId ?? input.cycleTypeId;
  return Object.freeze({
    state: "failure" as const,
    code: input.error.code,
    message: input.error.message,
    blocking: true as const,
    retryable: input.error.retryable,
    recoverable: input.error.recoverable,
    correlationId: input.error.correlationId ?? input.correlationId,
    ...(cycleTypeId ? { cycleTypeId } : {}),
    failedAt: input.failedAt,
  });
}

export function createSignalsIncompleteError(input: {
  readonly correlationId: string;
  readonly cycleTypeId: string;
}): FailureSource {
  return Object.freeze({
    code: "SIGNALS_INCOMPLETE" as const,
    message: "All six qualification signals must be explicit booleans.",
    blocking: true as const,
    retryable: true as const,
    recoverable: true as const,
    correlationId: input.correlationId,
    cycleTypeId: input.cycleTypeId,
  });
}

export function createInternalCkcQualificationFailure(input: {
  readonly failedAt: string;
  readonly correlationId: string;
  readonly cycleTypeId?: string;
}): CkcQualificationFailureResult {
  return createCkcQualificationFailure({
    error: Object.freeze({
      code: "D2_INTERNAL_ERROR" as const,
      message: "The CKC qualification could not be completed.",
      blocking: true as const,
      retryable: true,
      recoverable: true,
      correlationId: input.correlationId,
      ...(input.cycleTypeId ? { cycleTypeId: input.cycleTypeId } : {}),
    }),
    failedAt: input.failedAt,
    correlationId: input.correlationId,
    ...(input.cycleTypeId ? { cycleTypeId: input.cycleTypeId } : {}),
  });
}
