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
 * It is guarded by a Node-only SHA-256 test; no runtime hashing is required.
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
