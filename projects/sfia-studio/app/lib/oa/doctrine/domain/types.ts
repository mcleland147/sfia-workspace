/**
 * T-A0 Doctrine Foundation — domain types (Option A v3-native).
 * Modeled schemas are the reference contract; adoption is T-A0-scoped only.
 */

export const OA_SCHEMA_VERSION = "0.1.0-oa" as const;

export type Digest = `sha256:${string}`;

export type DoctrinePackageStatus =
  | "draft"
  | "published"
  | "deprecated"
  | "revoked";

export type DoctrineFreshness = "current" | "aging" | "stale";

export type DoctrineSourceKind =
  | "framing"
  | "design"
  | "modeled"
  | "ux"
  | "other";

export type DoctrineSourceRef = {
  doctrineSourceRef: string;
  kind: DoctrineSourceKind;
  label?: string;
  digest?: Digest;
};

export type ActorReference = {
  actorId: string;
  role:
    | "user"
    | "project_owner"
    | "decision_maker"
    | "approver"
    | "reviewer"
    | "system"
    | "agent";
  displayName?: string;
  authorityLevel?: "N1" | "N2" | "N3" | "none";
};

export type ProvenanceRecord = {
  schemaVersion: typeof OA_SCHEMA_VERSION;
  provenanceRecordId: string;
  actor: ActorReference;
  source:
    | "conversation"
    | "system"
    | "human_decision"
    | "confirmation"
    | "execution_adapter"
    | "review"
    | "migration_future";
  timestamp: string;
  correlationId: string;
  projectId?: string;
  cycleInstanceId?: string;
  doctrinePackageRef?: string;
  supersedes?: string;
  evidenceRefs?: string[];
};

export type DoctrinePackageCompatibility = {
  studioNativeV3: true;
  /** Must be false or absent; `true` is rejected by semantic validation. */
  legacyV26Fallback?: boolean;
};

export type DoctrinePackageManifest = {
  schemaVersion: typeof OA_SCHEMA_VERSION;
  doctrinePackageId: string;
  version: string;
  digest: Digest;
  status: DoctrinePackageStatus;
  sources: DoctrineSourceRef[];
  allowlist?: string[];
  publishedAt: string;
  freshness?: DoctrineFreshness;
  compatibility: DoctrinePackageCompatibility;
  provenance?: ProvenanceRecord;
};

/** Pin used as resolution input (path is never a business id). */
export type DoctrinePackagePin = {
  doctrinePackageId: string;
  version: string;
  digest: Digest;
};

export type DoctrinePackageRefStatus =
  | "resolved"
  | "unresolved"
  | "stale"
  | "invalid";

export type DoctrinePackageRef = {
  doctrinePackageId: string;
  version: string;
  digest: Digest;
  resolvedAt: string;
  resolver: ActorReference;
  status: DoctrinePackageRefStatus;
};

export type DoctrineResolutionOutcome =
  | "resolved"
  | "not_found"
  | "invalid_manifest"
  | "schema_mismatch"
  | "digest_mismatch"
  | "source_not_allowed"
  | "unsupported_version"
  | "stale_package"
  | "internal_resolution_error";

export type DoctrineResolveRequest = {
  pin: DoctrinePackagePin;
  correlationId?: string;
  resolverActor?: ActorReference;
};

export type DoctrinePackageResolved = {
  outcome: "resolved";
  manifest: DoctrinePackageManifest;
  ref: DoctrinePackageRef;
  provenance: ProvenanceRecord;
  durationMs: number;
};

export type DoctrinePackageFailed = {
  outcome: Exclude<DoctrineResolutionOutcome, "resolved">;
  error: DoctrineStructuredError;
  durationMs: number;
};

export type DoctrineResolveResult =
  | DoctrinePackageResolved
  | DoctrinePackageFailed;

/** Modeled ErrorRecord codes applicable to doctrine (M-OA). */
export type ModeledErrorCode = "DOCTRINE_UNRESOLVED" | "CONTEXT_STALE";

/**
 * T-A0 detail codes — finer than modeled ErrorRecord enum.
 * Mapped onto ModeledErrorCode for ErrorRecord-compatible emission (T-A0-D06).
 */
export type DoctrineDetailCode =
  | "DOCTRINE_UNRESOLVED"
  | "DOCTRINE_MANIFEST_INVALID"
  | "DOCTRINE_SCHEMA_MISMATCH"
  | "DOCTRINE_DIGEST_MISMATCH"
  | "DOCTRINE_SOURCE_FORBIDDEN"
  | "DOCTRINE_VERSION_UNSUPPORTED"
  | "CONTEXT_STALE"
  | "INTERNAL_RESOLUTION_ERROR";

export type DoctrineStructuredError = {
  code: ModeledErrorCode;
  detailCode: DoctrineDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: boolean;
  recoverable: boolean;
  domain: "B";
  correlationId?: string;
  doctrinePackageId?: string;
  version?: string;
  expectedDigest?: string;
  observedDigest?: string;
  provenance?: ProvenanceRecord;
  timestamp: string;
  /** Opaque internal cause — never exposed to clients. */
  internalCauseRef?: string;
};

export type LocalRegistryEntry = {
  doctrinePackageId: string;
  version: string;
  digest: Digest;
  /** Relative directory under registry root; never a business id. */
  relativePackageDir: string;
  status: DoctrinePackageStatus;
};

export type LocalDoctrineRegistry = {
  schemaVersion: "0.1.0-oa-registry";
  entries: LocalRegistryEntry[];
};
