import type {
  CycleTypeCkcMapping,
  CycleTypeLifecycleStatus,
} from "./cycleTypeCatalog";
import type {
  CkcFallbackPolicy,
  CkcLevel,
  CkcSource,
  CkcStatus,
} from "./types";

/** Read-only context required to select a cycle type from the D1 catalog. */
export type CatalogSelectionContext = {
  readonly cycleTypeId: string;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
};

/** Closed projection of contractually relevant catalog fields for HASH-A. */
export type CatalogFingerprintEntry = {
  readonly cycleTypeId: string;
  readonly canonicalKey: string;
  readonly lifecycleStatus: CycleTypeLifecycleStatus;
  readonly methodCycleNumber: number;
  readonly ckc: {
    readonly mandatory: true;
    readonly primaryLevel: "detailed" | "synthetic";
    readonly primaryReference: string;
    readonly fallbackPolicy: "synthetic_map" | "none";
    readonly fallbackReference: string | null;
    readonly executionAuthority: false;
    readonly doctrineStatus: "method-candidate";
    readonly unavailableBehavior: "fail-closed";
  };
};

/** Validated read-only D1 projection passed to the later D2-B boundary. */
export type ValidatedCycleTypeProjection = {
  readonly cycleTypeId: string;
  readonly label: string;
  readonly shortDescription: string;
  readonly lifecycleStatus: CycleTypeLifecycleStatus;
  readonly ckc: Readonly<CycleTypeCkcMapping>;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
};

export type CatalogProjectionErrorCode =
  | "CATALOG_CORRELATION_ID_REQUIRED"
  | "CATALOG_VERSION_INCOMPATIBLE"
  | "CATALOG_FINGERPRINT_STALE"
  | "CYCLE_TYPE_UNKNOWN"
  | "CYCLE_TYPE_NOT_SELECTABLE"
  | "CYCLE_TYPE_MAPPING_INVALID";

export type CatalogProjectionError = {
  readonly code: CatalogProjectionErrorCode;
  readonly message: string;
  readonly blocking: true;
  readonly retryable: boolean;
  readonly recoverable: boolean;
  readonly correlationId?: string;
  readonly cycleTypeId?: string;
  readonly lifecycleStatus?: CycleTypeLifecycleStatus;
};

export type CatalogProjectionSuccess = {
  readonly ok: true;
  readonly projection: ValidatedCycleTypeProjection;
};

export type CatalogProjectionFailure = {
  readonly ok: false;
  readonly error: CatalogProjectionError;
};

export type CatalogProjectionResult =
  | CatalogProjectionSuccess
  | CatalogProjectionFailure;

/** Detailed D2-B state retained alongside the deliberately coarser T-A2 types. */
export type CkcQualificationDetailedStatus =
  | "resolved_detailed"
  | "resolved_synthetic"
  | "resolved_fallback_synthetic"
  | "unresolved_invalid_mapping"
  | "unresolved_unavailable"
  | "unresolved_catalog_incompatible"
  | "unresolved_cycle_not_selectable";

/** Immutable output of the D2-B resolver before consumption proof validation. */
export type CkcQualificationResolution = {
  readonly cycleTypeId: string;
  readonly detailedStatus: CkcQualificationDetailedStatus;
  readonly level: CkcLevel;
  readonly status: CkcStatus;
  readonly source: CkcSource;
  readonly fallbackPolicy: CkcFallbackPolicy;
  readonly expectedPrimaryReference: string;
  readonly usedReference?: string;
  readonly fallbackUsed: boolean;
  readonly fallbackReference?: string;
  readonly doctrineStatus: "method-candidate";
  readonly executionAuthority: false;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
  readonly resolvedAt: string;
  readonly exploitable: boolean;
  readonly disclosures: readonly string[];
};
