/**
 * Canonical SHA-256 digest for DoctrinePackageManifest (T-A0-D03).
 *
 * Digested material: canonical JSON of the manifest object with the `digest`
 * field omitted. Deterministic, path-independent, testable.
 * Format: sha256:<64 lowercase hex>.
 */
import { createHash } from "node:crypto";
import type { Digest, DoctrinePackageManifest } from "./types";

export function canonicalizeJson(value: unknown): string {
  if (value === null || typeof value !== "object") {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map((item) => canonicalizeJson(item)).join(",")}]`;
  }
  const record = value as Record<string, unknown>;
  const keys = Object.keys(record).sort();
  return `{${keys
    .map((key) => `${JSON.stringify(key)}:${canonicalizeJson(record[key])}`)
    .join(",")}}`;
}

/** Payload used for digest: all manifest fields except `digest`. */
export function manifestDigestPayload(
  manifest: Omit<DoctrinePackageManifest, "digest"> | DoctrinePackageManifest,
): Record<string, unknown> {
  const { digest: _omit, ...rest } = manifest as DoctrinePackageManifest & {
    digest?: Digest;
  };
  void _omit;
  return rest as Record<string, unknown>;
}

export function computeManifestDigest(
  manifest: Omit<DoctrinePackageManifest, "digest"> | DoctrinePackageManifest,
): Digest {
  const payload = manifestDigestPayload(manifest);
  const canonical = canonicalizeJson(payload);
  const hex = createHash("sha256").update(canonical, "utf8").digest("hex");
  return `sha256:${hex}`;
}

export function isDigestFormat(value: string): value is Digest {
  return /^sha256:[a-f0-9]{64}$/.test(value);
}

export function digestsEqual(a: string, b: string): boolean {
  return a === b;
}
