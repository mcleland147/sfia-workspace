import {
  buildCkcConsumptionProof,
  isIso8601DateTime,
  type CkcConsumptionProofResult,
} from "../domain/ckcConsumptionProof";
import type {
  CkcQualificationDetailedStatus,
  CkcQualificationResolution,
  ValidatedCycleTypeProjection,
} from "../domain/ckcQualificationContracts";
import {
  createCkcQualificationError,
  type CkcQualificationErrorCode,
} from "../domain/ckcQualificationErrors";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type {
  CkcQualificationResolutionOutcome,
  CkcQualificationResolveInput,
  CkcQualificationResolverPort,
} from "../ports/ckcQualificationResolver";
import {
  CKC_REFERENCE_MANIFEST,
  getCkcManifestEntry,
  validateCkcReferenceManifest,
  type CkcReferenceManifest,
  type CkcReferenceManifestEntry,
} from "./ckcReferenceManifest";
import {
  PRODUCT_DOCTRINE_PACKAGE_ID,
  findProductCkcIndexEntry,
  loadProductCkcIndexSync,
  type Digest,
  type ProductCkcIndexLoadResult,
} from "@/lib/oa/doctrine";

export type CkcQualificationResolverProductBinding = {
  readonly registryRoot: string;
  readonly doctrinePackageId?: string;
  readonly packageVersion?: string;
  readonly packageDigest?: Digest;
};

/** @deprecated Use CkcQualificationResolverProductBinding — kept for test imports. */
export type ProductCkcQualificationResolverOptions =
  CkcQualificationResolverProductBinding;

function productResolution(
  projection: ValidatedCycleTypeProjection,
  resolvedAt: string,
  input: {
    readonly detailedStatus: CkcQualificationDetailedStatus;
    readonly level: CkcQualificationResolution["level"];
    readonly status: CkcQualificationResolution["status"];
    readonly source: CkcQualificationResolution["source"];
    readonly usedReference?: string;
    readonly exploitable: boolean;
    readonly packageVersion?: string;
    readonly packageDigest?: string;
    readonly indexDigest?: string;
    readonly ckcId?: string;
    readonly ckcContractVersion?: string;
    readonly sourceDigest?: string;
  },
): CkcQualificationResolution {
  return Object.freeze({
    cycleTypeId: projection.cycleTypeId,
    detailedStatus: input.detailedStatus,
    level: input.level,
    status: input.status,
    source: input.source,
    fallbackPolicy: "none" as const,
    expectedPrimaryReference: input.ckcId ?? projection.cycleTypeId,
    ...(input.usedReference ? { usedReference: input.usedReference } : {}),
    fallbackUsed: false as const,
    doctrineStatus: "product-studio-native" as const,
    executionAuthority: false as const,
    catalogVersion: projection.catalogVersion,
    catalogHash: projection.catalogHash,
    correlationId: projection.correlationId,
    resolvedAt,
    exploitable: input.exploitable,
    disclosures: Object.freeze([]),
    ...(input.packageVersion
      ? {
          doctrinePackageId: PRODUCT_DOCTRINE_PACKAGE_ID,
          packageVersion: input.packageVersion,
          packageDigest: input.packageDigest,
          indexDigest: input.indexDigest,
          ckcId: input.ckcId,
          ckcContractVersion: input.ckcContractVersion,
          sourceDigest: input.sourceDigest,
        }
      : {}),
  });
}

const MAPPING_KEYS = new Set([
  "mandatory",
  "primaryLevel",
  "primaryReference",
  "fallbackPolicy",
  "fallbackReference",
  "executionAuthority",
  "doctrineStatus",
  "unavailableBehavior",
]);

function isMappingShapeValid(
  projection: ValidatedCycleTypeProjection,
): boolean {
  const mapping = projection.ckc;
  if (
    !mapping ||
    Object.keys(mapping).some((key) => !MAPPING_KEYS.has(key)) ||
    mapping.mandatory !== true ||
    mapping.doctrineStatus !== "method-candidate" ||
    mapping.unavailableBehavior !== "fail-closed"
  ) {
    return false;
  }

  if (mapping.primaryLevel === "detailed") {
    return (
      mapping.fallbackPolicy === "synthetic_map" &&
      typeof mapping.fallbackReference === "string" &&
      Boolean(mapping.fallbackReference.trim())
    );
  }

  return (
    mapping.primaryLevel === "synthetic" &&
    mapping.fallbackPolicy === "none" &&
    mapping.fallbackReference === undefined
  );
}

function isUsable(
  entry: CkcReferenceManifestEntry | undefined,
  level: "detailed" | "synthetic",
): entry is CkcReferenceManifestEntry {
  return Boolean(
    entry &&
      entry.level === level &&
      entry.availability === "available" &&
      entry.doctrineStatus === "method-candidate" &&
      entry.executionAuthority === false &&
      ((level === "detailed" && entry.source === "repository_candidate") ||
        (level === "synthetic" &&
          entry.source === "intra_v3_synthetic")),
  );
}

function resolution(
  projection: ValidatedCycleTypeProjection,
  resolvedAt: string,
  input: {
    readonly detailedStatus: CkcQualificationDetailedStatus;
    readonly level: CkcQualificationResolution["level"];
    readonly status: CkcQualificationResolution["status"];
    readonly source: CkcQualificationResolution["source"];
    readonly usedReference?: string;
    readonly fallbackUsed: boolean;
    readonly exploitable: boolean;
    readonly disclosures?: readonly string[];
  },
): CkcQualificationResolution {
  return Object.freeze({
    cycleTypeId: projection.cycleTypeId,
    detailedStatus: input.detailedStatus,
    level: input.level,
    status: input.status,
    source: input.source,
    fallbackPolicy:
      projection.ckc.fallbackPolicy === "synthetic_map"
        ? ("intra_v3_only" as const)
        : ("none" as const),
    expectedPrimaryReference: projection.ckc.primaryReference,
    ...(input.usedReference ? { usedReference: input.usedReference } : {}),
    fallbackUsed: input.fallbackUsed,
    ...(projection.ckc.fallbackReference
      ? { fallbackReference: projection.ckc.fallbackReference }
      : {}),
    doctrineStatus: "method-candidate" as const,
    executionAuthority: false as const,
    catalogVersion: projection.catalogVersion,
    catalogHash: projection.catalogHash,
    correlationId: projection.correlationId,
    resolvedAt,
    exploitable: input.exploitable,
    disclosures: Object.freeze([...(input.disclosures ?? [])]),
  });
}

export class CkcQualificationResolver
  implements CkcQualificationResolverPort
{
  private readonly productLoaded?: ProductCkcIndexLoadResult;

  constructor(
    private readonly manifest: CkcReferenceManifest = CKC_REFERENCE_MANIFEST,
    private readonly audit?: CycleAuditPort,
    productBinding?: CkcQualificationResolverProductBinding,
  ) {
    if (productBinding) {
      this.productLoaded = loadProductCkcIndexSync(productBinding);
    }
  }

  resolve(
    input: CkcQualificationResolveInput,
  ): CkcQualificationResolutionOutcome {
    if (this.productLoaded !== undefined) {
      return this.resolveProductPackage(input);
    }
    const { projection, resolvedAt } = input;

    if (!this.tryEmit("oa.ckc.resolution_started", projection, resolvedAt, "started")) {
      return this.auditFailure(projection, resolvedAt);
    }

    try {
      if (!isIso8601DateTime(resolvedAt)) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_RESOLUTION_INCOHERENT",
        );
      }
      if (projection.ckc.executionAuthority !== false) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
        );
      }
      if (!isMappingShapeValid(projection)) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_MAPPING_INVALID",
        );
      }

      const manifestIssues = validateCkcReferenceManifest(this.manifest);
      if (manifestIssues.length > 0) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_RESOLUTION_INCOHERENT",
        );
      }

      const allowlistedPrimary = getCkcManifestEntry(
        projection.ckc.primaryReference,
        CKC_REFERENCE_MANIFEST,
      );
      const allowlistedFallback = projection.ckc.fallbackReference
        ? getCkcManifestEntry(
            projection.ckc.fallbackReference,
            CKC_REFERENCE_MANIFEST,
          )
        : undefined;
      if (
        !allowlistedPrimary ||
        allowlistedPrimary.level !== projection.ckc.primaryLevel ||
        (projection.ckc.primaryLevel === "detailed" &&
          (!allowlistedFallback ||
            allowlistedFallback.level !== "synthetic")) ||
        (projection.ckc.primaryLevel === "synthetic" && allowlistedFallback)
      ) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_MAPPING_INVALID",
        );
      }

      const primary = getCkcManifestEntry(
        projection.ckc.primaryReference,
        this.manifest,
      );

      if (projection.ckc.primaryLevel === "synthetic") {
        if (!isUsable(primary, "synthetic")) {
          return this.failure(
            projection,
            resolvedAt,
            "unresolved_unavailable",
            "CKC_SYNTHETIC_INVALID",
          );
        }
        return this.success(
          projection,
          resolution(projection, resolvedAt, {
            detailedStatus: "resolved_synthetic",
            level: "synthetic",
            status: "synthetic",
            source: "intra_v3_synthetic",
            usedReference: projection.ckc.primaryReference,
            fallbackUsed: false,
            exploitable: true,
          }),
        );
      }

      if (isUsable(primary, "detailed")) {
        return this.success(
          projection,
          resolution(projection, resolvedAt, {
            detailedStatus: "resolved_detailed",
            level: "detailed",
            status: "resolved",
            source: "repository_candidate",
            usedReference: projection.ckc.primaryReference,
            fallbackUsed: false,
            exploitable: true,
          }),
        );
      }

      const fallbackReference = projection.ckc.fallbackReference as string;
      const fallback = getCkcManifestEntry(
        fallbackReference,
        this.manifest,
      );
      if (!isUsable(fallback, "synthetic")) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_unavailable",
          "CKC_UNAVAILABLE",
        );
      }

      const resolved = resolution(projection, resolvedAt, {
        detailedStatus: "resolved_fallback_synthetic",
        level: "synthetic",
        status: "synthetic",
        source: "intra_v3_synthetic",
        usedReference: fallbackReference,
        fallbackUsed: true,
        exploitable: true,
        disclosures: ["CKC_FALLBACK_USED"],
      });
      if (
        !this.tryEmit(
          "oa.ckc.fallback_used",
          projection,
          resolvedAt,
          "fallback",
          resolved.detailedStatus,
          "CKC_FALLBACK_USED",
        )
      ) {
        return this.auditFailure(projection, resolvedAt);
      }
      return this.success(projection, resolved);
    } catch {
      return this.failure(
        projection,
        resolvedAt,
        "unresolved_unavailable",
        "D2_INTERNAL_ERROR",
      );
    }
  }

  private success(
    projection: ValidatedCycleTypeProjection,
    resolved: CkcQualificationResolution,
  ): CkcQualificationResolutionOutcome {
    if (
      !this.tryEmit(
        "oa.ckc.resolution_succeeded",
        projection,
        resolved.resolvedAt,
        "ok",
        resolved.detailedStatus,
      )
    ) {
      return this.auditFailure(projection, resolved.resolvedAt);
    }
    const proofResult: CkcConsumptionProofResult =
      buildCkcConsumptionProof(projection, resolved);
    if (!proofResult.ok) {
      if (
        !this.tryEmit(
          "oa.ckc.consumption_rejected",
          projection,
          resolved.resolvedAt,
          "error",
          resolved.detailedStatus,
          proofResult.error.code,
        )
      ) {
        return this.auditFailure(projection, resolved.resolvedAt);
      }
      return Object.freeze({
        ok: false as const,
        resolution: resolved,
        error: proofResult.error,
      });
    }
    if (
      !this.tryEmit(
        "oa.ckc.consumption_validated",
        projection,
        resolved.resolvedAt,
        "ok",
        resolved.detailedStatus,
      )
    ) {
      return this.auditFailure(projection, resolved.resolvedAt);
    }
    return Object.freeze({
      ok: true as const,
      resolution: resolved,
      proof: proofResult.proof,
    });
  }

  private failure(
    projection: ValidatedCycleTypeProjection,
    resolvedAt: string,
    detailedStatus: Extract<
      CkcQualificationDetailedStatus,
      "unresolved_invalid_mapping" | "unresolved_unavailable"
    >,
    code: CkcQualificationErrorCode,
  ): CkcQualificationResolutionOutcome {
    const failed = resolution(projection, resolvedAt, {
      detailedStatus,
      level: "absent",
      status:
        detailedStatus === "unresolved_invalid_mapping"
          ? "invalid"
          : "unavailable",
      source: "unavailable",
      fallbackUsed: false,
      exploitable: false,
    });
    const error = createCkcQualificationError({
      code,
      correlationId: projection.correlationId,
      cycleTypeId: projection.cycleTypeId,
      detailedStatus,
    });
    if (
      !this.tryEmit(
        "oa.ckc.resolution_failed",
        projection,
        resolvedAt,
        "error",
        detailedStatus,
        code,
      )
    ) {
      return this.auditFailure(projection, resolvedAt);
    }
    if (
      !this.tryEmit(
        "oa.ckc.consumption_rejected",
        projection,
        resolvedAt,
        "error",
        detailedStatus,
        code,
      )
    ) {
      return this.auditFailure(projection, resolvedAt);
    }
    return Object.freeze({
      ok: false as const,
      resolution: failed,
      error,
    });
  }

  /**
   * Morris FAIL-CLOSED: audit sink failure returns a safe structured outcome.
   * Never re-emits on the failing sink. Never exposes a proof or consumed=true.
   */
  private auditFailure(
    projection: ValidatedCycleTypeProjection,
    resolvedAt: string,
  ): CkcQualificationResolutionOutcome {
    const failed = resolution(projection, resolvedAt, {
      detailedStatus: "unresolved_unavailable",
      level: "absent",
      status: "unavailable",
      source: "unavailable",
      fallbackUsed: false,
      exploitable: false,
    });
    return Object.freeze({
      ok: false as const,
      resolution: failed,
      error: createCkcQualificationError({
        code: "D2_INTERNAL_ERROR",
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        detailedStatus: "unresolved_unavailable",
      }),
    });
  }

  private resolveProductPackage(
    input: CkcQualificationResolveInput,
  ): CkcQualificationResolutionOutcome {
    const { projection, resolvedAt } = input;

    if (
      !this.tryEmit("oa.ckc.resolution_started", projection, resolvedAt, "started")
    ) {
      return this.productAuditFailure(projection, resolvedAt);
    }

    try {
      if (!isIso8601DateTime(resolvedAt)) {
        return this.productFailure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_RESOLUTION_INCOHERENT",
        );
      }
      if (projection.ckc.executionAuthority !== false) {
        return this.productFailure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
        );
      }
      const loaded = this.productLoaded;
      if (!loaded?.ok) {
        return this.productFailure(
          projection,
          resolvedAt,
          "unresolved_unavailable",
          loaded &&
            (loaded.kind === "digest_mismatch" ||
              loaded.kind === "source_digest_mismatch")
            ? "CKC_RESOLUTION_INCOHERENT"
            : "CKC_UNAVAILABLE",
        );
      }

      const entry = findProductCkcIndexEntry(
        loaded.index,
        projection.cycleTypeId,
      );
      if (!entry) {
        return this.productFailure(
          projection,
          resolvedAt,
          "unresolved_unavailable",
          "CKC_UNAVAILABLE",
        );
      }

      return this.success(
        projection,
        productResolution(projection, resolvedAt, {
          detailedStatus: "resolved_detailed",
          level: "detailed",
          status: "resolved",
          source: "product_package",
          usedReference: entry.ckcId,
          exploitable: true,
          packageVersion: loaded.packageVersion,
          packageDigest: loaded.packageDigest,
          indexDigest: loaded.indexDigest,
          ckcId: entry.ckcId,
          ckcContractVersion: entry.contractVersion,
          sourceDigest: entry.sourceDigest,
        }),
      );
    } catch {
      return this.productFailure(
        projection,
        resolvedAt,
        "unresolved_unavailable",
        "D2_INTERNAL_ERROR",
      );
    }
  }

  private productFailure(
    projection: ValidatedCycleTypeProjection,
    resolvedAt: string,
    detailedStatus: Extract<
      CkcQualificationDetailedStatus,
      "unresolved_invalid_mapping" | "unresolved_unavailable"
    >,
    code: CkcQualificationErrorCode,
  ): CkcQualificationResolutionOutcome {
    const failed = productResolution(projection, resolvedAt, {
      detailedStatus,
      level: "absent",
      status:
        detailedStatus === "unresolved_invalid_mapping"
          ? "invalid"
          : "unavailable",
      source: "unavailable",
      exploitable: false,
    });
    const error = createCkcQualificationError({
      code,
      correlationId: projection.correlationId,
      cycleTypeId: projection.cycleTypeId,
      detailedStatus,
    });
    if (
      !this.tryEmit(
        "oa.ckc.resolution_failed",
        projection,
        resolvedAt,
        "error",
        detailedStatus,
        code,
      )
    ) {
      return this.productAuditFailure(projection, resolvedAt);
    }
    if (
      !this.tryEmit(
        "oa.ckc.consumption_rejected",
        projection,
        resolvedAt,
        "error",
        detailedStatus,
        code,
      )
    ) {
      return this.productAuditFailure(projection, resolvedAt);
    }
    return Object.freeze({
      ok: false as const,
      resolution: failed,
      error,
    });
  }

  private productAuditFailure(
    projection: ValidatedCycleTypeProjection,
    resolvedAt: string,
  ): CkcQualificationResolutionOutcome {
    const failed = productResolution(projection, resolvedAt, {
      detailedStatus: "unresolved_unavailable",
      level: "absent",
      status: "unavailable",
      source: "unavailable",
      exploitable: false,
    });
    return Object.freeze({
      ok: false as const,
      resolution: failed,
      error: createCkcQualificationError({
        code: "D2_INTERNAL_ERROR",
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        detailedStatus: "unresolved_unavailable",
      }),
    });
  }

  private tryEmit(
    event:
      | "oa.ckc.resolution_started"
      | "oa.ckc.resolution_succeeded"
      | "oa.ckc.resolution_failed"
      | "oa.ckc.fallback_used"
      | "oa.ckc.consumption_validated"
      | "oa.ckc.consumption_rejected",
    projection: ValidatedCycleTypeProjection,
    ts: string,
    result: "started" | "ok" | "error" | "fallback",
    detailedStatus?: CkcQualificationDetailedStatus,
    detailCode?: string,
  ): boolean {
    if (!this.audit) {
      return true;
    }
    try {
      this.audit.append({
        event,
        ts,
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        result,
        ...(detailedStatus ? { detailedStatus } : {}),
        ...(detailCode ? { detailCode } : {}),
      });
      return true;
    } catch {
      return false;
    }
  }
}

export function createProductCkcQualificationResolver(
  options: CkcQualificationResolverProductBinding,
  audit?: CycleAuditPort,
): CkcQualificationResolver {
  return new CkcQualificationResolver(undefined, audit, options);
}
