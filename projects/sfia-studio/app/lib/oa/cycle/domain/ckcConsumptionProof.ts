import type {
  CkcQualificationResolution,
  ValidatedCycleTypeProjection,
} from "./ckcQualificationContracts";
import {
  createCkcQualificationError,
  type CkcQualificationError,
} from "./ckcQualificationErrors";
import type { CkcLevel, CkcSource, CkcStatus } from "./types";

export type CkcConsumptionProof = {
  readonly cycleTypeId: string;
  readonly detailedStatus:
    | "resolved_detailed"
    | "resolved_synthetic"
    | "resolved_fallback_synthetic";
  readonly level: CkcLevel;
  readonly status: CkcStatus;
  readonly source: CkcSource;
  readonly expectedPrimaryReference: string;
  readonly usedReference: string;
  readonly fallbackUsed: boolean;
  readonly fallbackReference?: string;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
  readonly resolvedAt: string;
  readonly doctrineStatus: "method-candidate" | "product-studio-native";
  readonly executionAuthority: false;
  readonly consumed: true;
  readonly disclosures: readonly string[];
  readonly doctrinePackageId?: string;
  readonly packageVersion?: string;
  readonly packageDigest?: string;
  readonly indexDigest?: string;
  readonly ckcId?: string;
  readonly ckcContractVersion?: string;
  readonly sourceDigest?: string;
};

export type CkcConsumptionProofResult =
  | { readonly ok: true; readonly proof: CkcConsumptionProof }
  | { readonly ok: false; readonly error: CkcQualificationError };

const RESOLVED_STATES = new Set([
  "resolved_detailed",
  "resolved_synthetic",
  "resolved_fallback_synthetic",
]);

const FALLBACK_DISCLOSURE = "CKC_FALLBACK_USED";

const ISO_DATE_TIME =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/;

/** Pure ISO-8601 / RFC3339 date-time check with explicit timezone. */
export function isIso8601DateTime(value: string): boolean {
  if (typeof value !== "string" || value.length === 0 || value !== value.trim()) {
    return false;
  }
  const match = ISO_DATE_TIME.exec(value);
  if (!match) {
    return false;
  }
  const ms = Date.parse(value);
  if (!Number.isFinite(ms)) {
    return false;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  const second = Number(match[6]);
  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31 ||
    hour > 23 ||
    minute > 59 ||
    second > 59
  ) {
    return false;
  }
  const probe = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  return (
    probe.getUTCFullYear() === year &&
    probe.getUTCMonth() === month - 1 &&
    probe.getUTCDate() === day &&
    probe.getUTCHours() === hour &&
    probe.getUTCMinutes() === minute &&
    probe.getUTCSeconds() === second
  );
}

function expectedFallbackPolicy(
  projection: ValidatedCycleTypeProjection,
): "intra_v3_only" | "none" {
  return projection.ckc.fallbackPolicy === "synthetic_map"
    ? "intra_v3_only"
    : "none";
}

function fallbackDisclosureCount(
  disclosures: readonly string[],
): number {
  return disclosures.filter((item) => item === FALLBACK_DISCLOSURE).length;
}

function hasProductProvenance(
  resolution: CkcQualificationResolution,
): boolean {
  return Boolean(
    resolution.doctrinePackageId &&
      resolution.packageVersion &&
      resolution.packageDigest &&
      resolution.indexDigest &&
      resolution.ckcId &&
      resolution.ckcContractVersion &&
      resolution.sourceDigest &&
      resolution.usedReference === resolution.ckcId,
  );
}

function isProductProjectionConsistent(
  projection: ValidatedCycleTypeProjection,
  resolution: CkcQualificationResolution,
): boolean {
  return (
    projection.cycleTypeId === resolution.cycleTypeId &&
    projection.catalogVersion === resolution.catalogVersion &&
    projection.catalogHash === resolution.catalogHash &&
    projection.correlationId === resolution.correlationId &&
    resolution.doctrineStatus === "product-studio-native" &&
    resolution.executionAuthority === false &&
    resolution.fallbackPolicy === "none" &&
    isIso8601DateTime(resolution.resolvedAt) &&
    Boolean(resolution.usedReference) &&
    resolution.exploitable &&
    resolution.detailedStatus === "resolved_detailed" &&
    resolution.level === "detailed" &&
    resolution.status === "resolved" &&
    resolution.source === "product_package" &&
    resolution.fallbackUsed === false &&
    fallbackDisclosureCount(resolution.disclosures) === 0 &&
    hasProductProvenance(resolution)
  );
}

function isMethodProjectionConsistent(
  projection: ValidatedCycleTypeProjection,
  resolution: CkcQualificationResolution,
): boolean {
  if (
    projection.cycleTypeId !== resolution.cycleTypeId ||
    projection.catalogVersion !== resolution.catalogVersion ||
    projection.catalogHash !== resolution.catalogHash ||
    projection.correlationId !== resolution.correlationId ||
    projection.ckc.primaryReference !== resolution.expectedPrimaryReference ||
    projection.ckc.fallbackReference !== resolution.fallbackReference ||
    resolution.doctrineStatus !== "method-candidate" ||
    resolution.executionAuthority !== false ||
    !isIso8601DateTime(resolution.resolvedAt) ||
    !resolution.usedReference ||
    !resolution.exploitable ||
    !RESOLVED_STATES.has(resolution.detailedStatus) ||
    resolution.fallbackPolicy !== expectedFallbackPolicy(projection)
  ) {
    return false;
  }

  const disclosureCount = fallbackDisclosureCount(resolution.disclosures);

  if (resolution.detailedStatus === "resolved_detailed") {
    return (
      resolution.level === "detailed" &&
      resolution.status === "resolved" &&
      resolution.source === "repository_candidate" &&
      resolution.fallbackUsed === false &&
      resolution.usedReference === projection.ckc.primaryReference &&
      disclosureCount === 0
    );
  }

  if (resolution.detailedStatus === "resolved_synthetic") {
    return (
      projection.ckc.primaryLevel === "synthetic" &&
      resolution.level === "synthetic" &&
      resolution.status === "synthetic" &&
      resolution.source === "intra_v3_synthetic" &&
      resolution.fallbackUsed === false &&
      resolution.usedReference === projection.ckc.primaryReference &&
      disclosureCount === 0
    );
  }

  return (
    projection.ckc.primaryLevel === "detailed" &&
    projection.ckc.fallbackPolicy === "synthetic_map" &&
    Boolean(projection.ckc.fallbackReference) &&
    resolution.level === "synthetic" &&
    resolution.status === "synthetic" &&
    resolution.source === "intra_v3_synthetic" &&
    resolution.fallbackUsed === true &&
    resolution.usedReference === projection.ckc.fallbackReference &&
    disclosureCount === 1
  );
}

function isProjectionConsistent(
  projection: ValidatedCycleTypeProjection,
  resolution: CkcQualificationResolution,
): boolean {
  if (resolution.doctrineStatus === "product-studio-native") {
    return isProductProjectionConsistent(projection, resolution);
  }
  return isMethodProjectionConsistent(projection, resolution);
}

/** Pure fail-closed proof builder. Functional failures are values, not throws. */
export function buildCkcConsumptionProof(
  projection: ValidatedCycleTypeProjection,
  resolution: CkcQualificationResolution,
): CkcConsumptionProofResult {
  if (!isProjectionConsistent(projection, resolution)) {
    return {
      ok: false,
      error: createCkcQualificationError({
        code: "CKC_RESOLUTION_INCOHERENT",
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        detailedStatus: resolution.detailedStatus,
      }),
    };
  }

  const proof = {
    cycleTypeId: resolution.cycleTypeId,
    detailedStatus: resolution.detailedStatus as
      | "resolved_detailed"
      | "resolved_synthetic"
      | "resolved_fallback_synthetic",
    level: resolution.level,
    status: resolution.status,
    source: resolution.source,
    expectedPrimaryReference: resolution.expectedPrimaryReference,
    usedReference: resolution.usedReference as string,
    fallbackUsed: resolution.fallbackUsed,
    ...(resolution.fallbackReference
      ? { fallbackReference: resolution.fallbackReference }
      : {}),
    catalogVersion: resolution.catalogVersion,
    catalogHash: resolution.catalogHash,
    correlationId: resolution.correlationId,
    resolvedAt: resolution.resolvedAt,
    doctrineStatus: resolution.doctrineStatus,
    executionAuthority: false as const,
    consumed: true as const,
    disclosures: Object.freeze([...resolution.disclosures]),
    ...(resolution.doctrineStatus === "product-studio-native"
      ? {
          doctrinePackageId: resolution.doctrinePackageId,
          packageVersion: resolution.packageVersion,
          packageDigest: resolution.packageDigest,
          indexDigest: resolution.indexDigest,
          ckcId: resolution.ckcId,
          ckcContractVersion: resolution.ckcContractVersion,
          sourceDigest: resolution.sourceDigest,
        }
      : {}),
  };

  return { ok: true, proof: Object.freeze(proof) };
}
