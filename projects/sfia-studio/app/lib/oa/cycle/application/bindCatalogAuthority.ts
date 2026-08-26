/**
 * Application seam — bind a catalog snapshot to its HASH-A fingerprint.
 * Keeps node:crypto out of pure domain modules (D2-A purity contract).
 */
import { createHash } from "node:crypto";
import {
  CYCLE_TYPE_CATALOG,
  type CycleTypeCatalog,
} from "../domain/cycleTypeCatalog";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  serializeCatalogFingerprint,
  type CycleTypeCatalogAuthority,
} from "../domain/catalogFingerprint";

/** Same algorithm as published {@link CYCLE_TYPE_CATALOG_FINGERPRINT}. */
export function computeCatalogFingerprintHash(
  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
): `sha256:${string}` {
  const hex = createHash("sha256")
    .update(serializeCatalogFingerprint(catalog), "utf8")
    .digest("hex");
  return `sha256:${hex}`;
}

/**
 * Bind catalog content to HASH-A. Required for any non-published snapshot used
 * with QualifyCycleWithCkc / projectSelectableCycleType authority injection.
 */
export function bindCycleTypeCatalogAuthority(
  catalog: Pick<CycleTypeCatalog, "entries">,
): CycleTypeCatalogAuthority {
  const fingerprintSerialization = serializeCatalogFingerprint(catalog);
  const fingerprint = computeCatalogFingerprintHash(catalog);
  return Object.freeze({
    catalog,
    fingerprint,
    fingerprintSerialization,
  });
}

/**
 * Cryptographic integrity of a catalog authority (W3-D / R-W3D-03).
 * Structural shape alone is insufficient — fingerprint MUST equal HASH-A(catalog).
 */
export function verifyCycleTypeCatalogAuthority(
  authority: CycleTypeCatalogAuthority,
): boolean {
  try {
    const liveSerialization = serializeCatalogFingerprint(authority.catalog);
    if (liveSerialization !== authority.fingerprintSerialization) {
      return false;
    }
    if (computeCatalogFingerprintHash(authority.catalog) !== authority.fingerprint) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

/** Sanity: published constant remains the HASH-A of the singleton. */
export function assertPublishedCatalogFingerprintMatchesSingleton(): boolean {
  return (
    computeCatalogFingerprintHash(CYCLE_TYPE_CATALOG) ===
    CYCLE_TYPE_CATALOG_FINGERPRINT
  );
}
