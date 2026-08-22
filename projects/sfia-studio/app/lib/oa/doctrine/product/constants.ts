import { computeManifestDigest } from "../domain/digest";
import type {
  Digest,
  DoctrinePackageManifest,
  DoctrinePackagePin,
} from "../domain/types";

export const PRODUCT_DOCTRINE_PACKAGE_ID = "pkg:sfia-studio-doctrine-v3" as const;

export const PRODUCT_DOCTRINE_PACKAGE_VERSION = "1.0.0" as const;

const PRODUCT_MANIFEST_DIGEST_PAYLOAD: Omit<
  DoctrinePackageManifest,
  "digest"
> = {
  schemaVersion: "0.1.0-oa",
  doctrinePackageId: PRODUCT_DOCTRINE_PACKAGE_ID,
  version: PRODUCT_DOCTRINE_PACKAGE_VERSION,
  status: "published",
  sources: [
    {
      doctrineSourceRef: "src:product-ckc-index",
      kind: "other",
      label: "Product CKC index v0.1.0",
      digest:
        "sha256:79e6f559f1ba5c931b143ca2dbe562f25f6cd7c78de71afc943dd9f7eda7631c" as Digest,
    },
  ],
  allowlist: ["sfia-v3-framing", "v3-native-option-a"],
  publishedAt: "2026-08-22T12:00:00.000Z",
  freshness: "current",
  compatibility: {
    studioNativeV3: true,
    legacyV26Fallback: false,
  },
  provenance: {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:pkg-sfia-studio-doctrine-v3-1",
    actor: { actorId: "sys:doctrine-publisher", role: "system" },
    source: "system",
    timestamp: "2026-08-22T12:00:00.000Z",
    correlationId: "cor:w1-g3-product-package",
  },
};

/** Pin digest matches materialized product package manifest (registry.json). */
export const DEFAULT_PRODUCT_DOCTRINE_PIN: DoctrinePackagePin = Object.freeze({
  doctrinePackageId: PRODUCT_DOCTRINE_PACKAGE_ID,
  version: PRODUCT_DOCTRINE_PACKAGE_VERSION,
  digest: computeManifestDigest(PRODUCT_MANIFEST_DIGEST_PAYLOAD),
});
