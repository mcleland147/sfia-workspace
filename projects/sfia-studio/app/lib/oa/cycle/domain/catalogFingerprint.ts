import {
  CYCLE_TYPE_CATALOG,
  type CycleTypeCatalog,
} from "./cycleTypeCatalog";
import type { CatalogFingerprintEntry } from "./ckcQualificationContracts";

/** HASH-A representation format. Cryptographic verification is test-only. */
export const CYCLE_TYPE_CATALOG_FINGERPRINT_FORMAT =
  "sha256-canonical-json-v1" as const;

/**
 * Static, versioned HASH-A fingerprint of the canonical D1 contract projection.
 * Current published product snapshot (fifteen entries). Future snapshots bind a
 * HASH-A via {@link bindCycleTypeCatalogAuthority} (application seam) — never by
 * disabling integrity checks in projection.
 */
export const CYCLE_TYPE_CATALOG_FINGERPRINT =
  "sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc" as const;

/** Build the closed, ordered projection used by the catalog fingerprint. */
export function projectCatalogFingerprint(
  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
): readonly CatalogFingerprintEntry[] {
  return Object.freeze(
    catalog.entries.map((entry) =>
      Object.freeze({
        cycleTypeId: entry.cycleTypeId,
        canonicalKey: entry.canonicalKey,
        lifecycleStatus: entry.lifecycleStatus,
        methodCycleNumber: entry.methodCycleNumber,
        ckc: Object.freeze({
          mandatory: entry.ckc.mandatory,
          primaryLevel: entry.ckc.primaryLevel,
          primaryReference: entry.ckc.primaryReference,
          fallbackPolicy: entry.ckc.fallbackPolicy,
          fallbackReference: entry.ckc.fallbackReference ?? null,
          executionAuthority: entry.ckc.executionAuthority,
          doctrineStatus: entry.ckc.doctrineStatus,
          unavailableBehavior: entry.ckc.unavailableBehavior,
        }),
      }),
    ),
  );
}

/** Deterministic serialization of the canonical, fixed-property projection. */
export function serializeCatalogFingerprint(
  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
): string {
  return JSON.stringify(projectCatalogFingerprint(catalog));
}

/**
 * Atomic catalog authority: content + its HASH-A fingerprint.
 * Production uses {@link DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY}.
 * Future/test snapshots must be bound via {@link bindCycleTypeCatalogAuthority}.
 */
export type CycleTypeCatalogAuthority = {
  readonly catalog: Pick<CycleTypeCatalog, "entries">;
  readonly fingerprint: string;
  /**
   * Exact fingerprint serialization bound at authority construction.
   * Projection fail-closes when it diverges from live serialize(catalog).
   */
  readonly fingerprintSerialization: string;
};

export const DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY: CycleTypeCatalogAuthority =
  Object.freeze({
    catalog: CYCLE_TYPE_CATALOG,
    fingerprint: CYCLE_TYPE_CATALOG_FINGERPRINT,
    fingerprintSerialization: serializeCatalogFingerprint(CYCLE_TYPE_CATALOG),
  });

export function isCycleTypeCatalogAuthority(
  value: unknown,
): value is CycleTypeCatalogAuthority {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return (
    Object.prototype.hasOwnProperty.call(record, "catalog") &&
    Object.prototype.hasOwnProperty.call(record, "fingerprint") &&
    Object.prototype.hasOwnProperty.call(record, "fingerprintSerialization") &&
    typeof record.fingerprint === "string" &&
    typeof record.fingerprintSerialization === "string" &&
    record.catalog !== null &&
    typeof record.catalog === "object"
  );
}
