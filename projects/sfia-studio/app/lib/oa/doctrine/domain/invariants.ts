/**
 * Semantic invariants for T-A0 DoctrinePackage (beyond JSON Schema).
 */
import type { DoctrineDetailCode, DoctrinePackageManifest } from "./types";

const FORBIDDEN_SOURCE_PATTERNS: RegExp[] = [
  /(^|\/)method(\/|$)/i,
  /v2\.6/i,
  /sfia[_-]?v2/i,
  /(^|\/)prompts(\/|$)/i,
  /methodmode/i,
];

const FORBIDDEN_ALLOWLIST_PATTERNS: RegExp[] = [
  /(^|\/)method(\/|$)/i,
  /v2\.6/i,
  /sfia[_-]?v2/i,
  /^ops1$/i,
  /legacy[_-]?v26/i,
];

export type SemanticViolation = {
  detailCode: DoctrineDetailCode;
  reason: string;
};

function textLooksForbidden(value: string, patterns: RegExp[]): boolean {
  return patterns.some((re) => re.test(value));
}

/**
 * Raw pre-schema checks for fields that schema forbids via additionalProperties
 * but that we still reject explicitly when present on untyped input.
 */
export function inspectRawManifestSemantics(
  raw: unknown,
): SemanticViolation | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {
      detailCode: "DOCTRINE_MANIFEST_INVALID",
      reason: "manifest_not_object",
    };
  }
  const obj = raw as Record<string, unknown>;

  if ("failurePolicy" in obj) {
    const policy = obj.failurePolicy;
    if (policy !== "fail-closed" && policy !== "fail_closed") {
      return {
        detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
        reason: "failure_policy_not_fail_closed",
      };
    }
  }

  const compatibility = obj.compatibility;
  if (
    compatibility &&
    typeof compatibility === "object" &&
    !Array.isArray(compatibility)
  ) {
    const c = compatibility as Record<string, unknown>;
    if (c.legacyV26Fallback === true) {
      return {
        detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
        reason: "legacy_v26_fallback_true",
      };
    }
    if (c.studioNativeV3 === false) {
      return {
        detailCode: "DOCTRINE_VERSION_UNSUPPORTED",
        reason: "studio_native_v3_false",
      };
    }
  }

  return null;
}

export function validateManifestSemantics(
  manifest: DoctrinePackageManifest,
  expected: {
    doctrinePackageId: string;
    version: string;
    digest: string;
  },
): SemanticViolation | null {
  if (manifest.schemaVersion !== "0.1.0-oa") {
    return {
      detailCode: "DOCTRINE_VERSION_UNSUPPORTED",
      reason: "unsupported_schema_version",
    };
  }

  if (manifest.doctrinePackageId !== expected.doctrinePackageId) {
    return {
      detailCode: "DOCTRINE_MANIFEST_INVALID",
      reason: "package_id_mismatch",
    };
  }

  if (manifest.version !== expected.version) {
    return {
      detailCode: "DOCTRINE_MANIFEST_INVALID",
      reason: "version_mismatch",
    };
  }

  if (manifest.digest !== expected.digest) {
    return {
      detailCode: "DOCTRINE_DIGEST_MISMATCH",
      reason: "manifest_digest_field_mismatch",
    };
  }

  if (manifest.status === "draft" || manifest.status === "revoked") {
    return {
      detailCode: "DOCTRINE_VERSION_UNSUPPORTED",
      reason: `status_${manifest.status}_not_consumable`,
    };
  }

  if (manifest.freshness === "stale") {
    return {
      detailCode: "CONTEXT_STALE",
      reason: "freshness_stale",
    };
  }

  if (manifest.compatibility.studioNativeV3 !== true) {
    return {
      detailCode: "DOCTRINE_VERSION_UNSUPPORTED",
      reason: "studio_native_v3_required",
    };
  }

  if (manifest.compatibility.legacyV26Fallback === true) {
    return {
      detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
      reason: "legacy_v26_fallback",
    };
  }

  for (const source of manifest.sources) {
    if (
      textLooksForbidden(source.doctrineSourceRef, FORBIDDEN_SOURCE_PATTERNS)
    ) {
      return {
        detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
        reason: "forbidden_source_ref",
      };
    }
    if (
      source.label &&
      textLooksForbidden(source.label, FORBIDDEN_SOURCE_PATTERNS)
    ) {
      return {
        detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
        reason: "forbidden_source_label",
      };
    }
  }

  for (const entry of manifest.allowlist ?? []) {
    if (textLooksForbidden(entry, FORBIDDEN_ALLOWLIST_PATTERNS)) {
      return {
        detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
        reason: "forbidden_allowlist_entry",
      };
    }
  }

  if (!manifest.provenance) {
    return {
      detailCode: "DOCTRINE_MANIFEST_INVALID",
      reason: "provenance_required",
    };
  }

  return null;
}

/** Relative package path safety — deny traversal and protected prefixes. */
export function assertSafeRelativePackageDir(
  relativePackageDir: string,
): SemanticViolation | null {
  if (!relativePackageDir || typeof relativePackageDir !== "string") {
    return {
      detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
      reason: "empty_relative_dir",
    };
  }
  if (
    relativePackageDir.startsWith("/") ||
    relativePackageDir.includes("\\") ||
    relativePackageDir.split("/").some((p) => p === ".." || p === "")
  ) {
    return {
      detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
      reason: "path_traversal",
    };
  }
  if (textLooksForbidden(relativePackageDir, FORBIDDEN_SOURCE_PATTERNS)) {
    return {
      detailCode: "DOCTRINE_SOURCE_FORBIDDEN",
      reason: "forbidden_package_path",
    };
  }
  return null;
}
