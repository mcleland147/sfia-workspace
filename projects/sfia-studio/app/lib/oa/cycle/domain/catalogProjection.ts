import {
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_VERSION,
  type CycleTypeCatalog,
  type CycleTypeCkcMapping,
  type CycleTypeDefinition,
} from "./cycleTypeCatalog";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  isCycleTypeCatalogAuthority,
  serializeCatalogFingerprint,
  type CycleTypeCatalogAuthority,
} from "./catalogFingerprint";
import type {
  CatalogProjectionError,
  CatalogProjectionErrorCode,
  CatalogProjectionResult,
  CatalogSelectionContext,
} from "./ckcQualificationContracts";

const SAFE_MESSAGES: Readonly<Record<CatalogProjectionErrorCode, string>> =
  Object.freeze({
    CATALOG_CORRELATION_ID_REQUIRED: "A correlation identifier is required.",
    CATALOG_VERSION_INCOMPATIBLE: "The catalog version is incompatible.",
    CATALOG_FINGERPRINT_STALE: "The catalog fingerprint is stale.",
    CYCLE_TYPE_UNKNOWN: "The cycle type is unknown.",
    CYCLE_TYPE_NOT_SELECTABLE: "The cycle type is not selectable.",
    CYCLE_TYPE_MAPPING_INVALID: "The cycle type mapping is invalid.",
  });

/** Canonical HASH-A serialization of the authoritative published D1 catalog. */
const CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION =
  serializeCatalogFingerprint(CYCLE_TYPE_CATALOG);

const ALLOWED_MAPPING_KEYS = new Set([
  "mandatory",
  "primaryLevel",
  "primaryReference",
  "fallbackPolicy",
  "fallbackReference",
  "executionAuthority",
  "doctrineStatus",
  "unavailableBehavior",
]);

function failure(
  code: CatalogProjectionErrorCode,
  context: CatalogSelectionContext,
  options: {
    readonly lifecycleStatus?: CycleTypeDefinition["lifecycleStatus"];
    readonly retryable?: boolean;
    readonly recoverable?: boolean;
  } = {},
): CatalogProjectionResult {
  const error: CatalogProjectionError = Object.freeze({
    code,
    message: SAFE_MESSAGES[code],
    blocking: true,
    retryable: options.retryable ?? false,
    recoverable: options.recoverable ?? true,
    ...(context.correlationId.trim()
      ? { correlationId: context.correlationId }
      : {}),
    ...(context.cycleTypeId ? { cycleTypeId: context.cycleTypeId } : {}),
    ...(options.lifecycleStatus
      ? { lifecycleStatus: options.lifecycleStatus }
      : {}),
  });
  return Object.freeze({ ok: false, error });
}

function hasValidMapping(mapping: CycleTypeCkcMapping): boolean {
  if (
    Object.keys(mapping).some((key) => !ALLOWED_MAPPING_KEYS.has(key)) ||
    mapping.mandatory !== true ||
    !mapping.primaryReference.trim() ||
    mapping.executionAuthority !== false ||
    mapping.doctrineStatus !== "method-candidate" ||
    mapping.unavailableBehavior !== "fail-closed"
  ) {
    return false;
  }

  if (mapping.primaryLevel === "detailed") {
    return (
      mapping.fallbackPolicy === "synthetic_map" &&
      mapping.fallbackReference === CKC_SYNTHETIC_MAP_PATH
    );
  }

  if (mapping.primaryLevel === "synthetic") {
    return (
      mapping.primaryReference === CKC_SYNTHETIC_MAP_PATH &&
      mapping.fallbackPolicy === "none" &&
      mapping.fallbackReference === undefined
    );
  }

  return false;
}

function freezeMapping(
  mapping: CycleTypeCkcMapping,
): Readonly<CycleTypeCkcMapping> {
  return Object.freeze({
    mandatory: mapping.mandatory,
    primaryLevel: mapping.primaryLevel,
    primaryReference: mapping.primaryReference,
    fallbackPolicy: mapping.fallbackPolicy,
    ...(mapping.fallbackReference
      ? { fallbackReference: mapping.fallbackReference }
      : {}),
    executionAuthority: mapping.executionAuthority,
    doctrineStatus: mapping.doctrineStatus,
    unavailableBehavior: mapping.unavailableBehavior,
  });
}

function catalogMatchesPublishedSerialization(
  catalog: Pick<CycleTypeCatalog, "entries">,
): boolean {
  if (catalog === CYCLE_TYPE_CATALOG) {
    return true;
  }
  try {
    return (
      serializeCatalogFingerprint(catalog) ===
      CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION
    );
  } catch {
    return false;
  }
}

/**
 * Pure, fail-closed D2-A selection from an authoritative catalog snapshot.
 *
 * Production callers use the published singleton (default).
 * A {@link CycleTypeCatalogAuthority} may bind a future/test snapshot whose
 * fingerprintSerialization + fingerprint were produced by
 * bindCycleTypeCatalogAuthority — never an unbound caller catalog.
 */
export function projectSelectableCycleType(
  context: CatalogSelectionContext,
  catalogOrAuthority:
    | Pick<CycleTypeCatalog, "entries">
    | CycleTypeCatalogAuthority = CYCLE_TYPE_CATALOG,
): CatalogProjectionResult {
  if (!context.correlationId.trim()) {
    return failure("CATALOG_CORRELATION_ID_REQUIRED", context);
  }
  if (context.catalogVersion !== CYCLE_TYPE_CATALOG_VERSION) {
    return failure("CATALOG_VERSION_INCOMPATIBLE", context, {
      retryable: true,
    });
  }

  let catalog: Pick<CycleTypeCatalog, "entries">;
  let boundFingerprint: string;
  let requirePublishedContentBinding: boolean;

  if (isCycleTypeCatalogAuthority(catalogOrAuthority)) {
    let liveSerialization: string;
    try {
      liveSerialization = serializeCatalogFingerprint(
        catalogOrAuthority.catalog,
      );
    } catch {
      return failure("CATALOG_FINGERPRINT_STALE", context, {
        retryable: true,
      });
    }
    // Integrity without domain crypto: bound serialization must equal live
    // catalog serialization; published HASH-A may only bind published content.
    if (
      catalogOrAuthority.fingerprintSerialization !== liveSerialization ||
      (liveSerialization === CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION &&
        catalogOrAuthority.fingerprint !== CYCLE_TYPE_CATALOG_FINGERPRINT) ||
      (liveSerialization !== CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION &&
        catalogOrAuthority.fingerprint === CYCLE_TYPE_CATALOG_FINGERPRINT)
    ) {
      return failure("CATALOG_FINGERPRINT_STALE", context, {
        retryable: true,
      });
    }
    catalog = catalogOrAuthority.catalog;
    boundFingerprint = catalogOrAuthority.fingerprint;
    requirePublishedContentBinding = false;
  } else {
    // Legacy seam: published HASH-A only; content must match published snapshot
    // (checked after entry-level codes so precise failures keep precedence).
    catalog = catalogOrAuthority;
    boundFingerprint = CYCLE_TYPE_CATALOG_FINGERPRINT;
    requirePublishedContentBinding = true;
  }

  if (context.catalogHash !== boundFingerprint) {
    return failure("CATALOG_FINGERPRINT_STALE", context, {
      retryable: true,
    });
  }

  const entry = catalog.entries.find(
    (candidate) => candidate.cycleTypeId === context.cycleTypeId,
  );
  if (!entry) {
    return failure("CYCLE_TYPE_UNKNOWN", context);
  }
  if (entry.lifecycleStatus !== "active") {
    return failure("CYCLE_TYPE_NOT_SELECTABLE", context, {
      lifecycleStatus: entry.lifecycleStatus,
    });
  }
  if (!entry.ckc || !hasValidMapping(entry.ckc)) {
    return failure("CYCLE_TYPE_MAPPING_INVALID", context, {
      lifecycleStatus: entry.lifecycleStatus,
      recoverable: false,
    });
  }

  if (
    requirePublishedContentBinding &&
    !catalogMatchesPublishedSerialization(catalog)
  ) {
    return failure("CATALOG_FINGERPRINT_STALE", context, {
      retryable: true,
    });
  }

  return Object.freeze({
    ok: true,
    projection: Object.freeze({
      cycleTypeId: entry.cycleTypeId,
      label: entry.label,
      shortDescription: entry.shortDescription,
      lifecycleStatus: entry.lifecycleStatus,
      ckc: freezeMapping(entry.ckc),
      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
      catalogHash: boundFingerprint,
      correlationId: context.correlationId,
    }),
  });
}
