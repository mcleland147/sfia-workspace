/**
 * Semantic invariants for T-A6-D1 Evidence.
 * Mirrors evidence.schema.json 0.2.0-oa conditionals + runtime OCC rules.
 */
import type { Digest } from "@/lib/oa/doctrine";
import type { EvidenceDetailCode } from "./types";
import type {
  Evidence,
  EvidenceAvailability,
  EvidenceBindings,
  EvidenceClassification,
  EvidenceFreshness,
  EvidenceRetentionClass,
  EvidenceSourceKind,
  EvidenceStatus,
  EvidenceStorageMode,
  EvidenceType,
} from "./types";

export const OA_IDENTIFIER_PATTERN =
  /^[a-z][a-z0-9]*:[a-zA-Z0-9][a-zA-Z0-9:_\-.]*$/;

export const IDEMPOTENCY_KEY_MIN_LENGTH = 8 as const;

export const DIGEST_PATTERN = /^sha256:[a-f0-9]{64}$/;

/** Heuristic secret/token rejection — metadata only, never echoes matches. */
const SECRET_PATTERN =
  /(password|passwd|secret|token|bearer\s+[a-z0-9._\-]+|api[_-]?key|authorization\s*:|sk-[a-z0-9]{8,}|-----begin\s+(rsa\s+)?private\s+key-----)/i;

export type InvariantViolation = {
  detailCode: EvidenceDetailCode;
  reason: string;
};

export const EVIDENCE_TYPES: ReadonlySet<EvidenceType> = new Set([
  "document",
  "screenshot",
  "log_ref",
  "artifact",
  "attestation",
  "other",
]);

export const SOURCE_KINDS: ReadonlySet<EvidenceSourceKind> = new Set([
  "execution_attempt",
  "manual",
  "external",
  "system",
]);

export const EVIDENCE_STATUSES: ReadonlySet<EvidenceStatus> = new Set([
  "expected",
  "available",
  "verified",
  "incomplete",
  "stale",
  "rejected",
  "superseded",
  "unavailable",
]);

export const CLASSIFICATIONS: ReadonlySet<EvidenceClassification> = new Set([
  "public",
  "internal",
  "confidential",
  "restricted",
]);

export const STORAGE_MODES: ReadonlySet<EvidenceStorageMode> = new Set([
  "metadata_only",
  "internal_payload_ref",
  "external_payload_ref",
]);

export const AVAILABILITIES: ReadonlySet<EvidenceAvailability> = new Set([
  "available",
  "unavailable",
  "unknown",
]);

export const FRESHNESSES: ReadonlySet<EvidenceFreshness> = new Set([
  "fresh",
  "aging",
  "stale",
  "unknown",
]);

export const RETENTION_CLASSES: ReadonlySet<EvidenceRetentionClass> = new Set([
  "short",
  "standard",
  "extended",
  "legal_hold_eligible",
]);

export function isOaIdentifier(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.length >= 3 &&
    value.length <= 128 &&
    OA_IDENTIFIER_PATTERN.test(value)
  );
}

export function isEvidenceId(value: unknown): value is string {
  return isOaIdentifier(value) && value.startsWith("ev:");
}

export function isDigest(value: unknown): value is Digest {
  return typeof value === "string" && DIGEST_PATTERN.test(value);
}

export function containsForbiddenSecret(value: unknown): boolean {
  if (typeof value !== "string" || value.length === 0) return false;
  return SECRET_PATTERN.test(value);
}

export function bindingCount(bindings: EvidenceBindings | undefined): number {
  if (!bindings) return 0;
  return Object.values(bindings).filter(
    (v) => typeof v === "string" && v.length > 0,
  ).length;
}

export function validateBindings(
  bindings: EvidenceBindings | undefined,
  sourceKind?: EvidenceSourceKind,
): InvariantViolation | null {
  if (!bindings || bindingCount(bindings) < 1) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "bindings_empty",
    };
  }
  if (
    bindings.executionAttemptId !== undefined &&
    (!isOaIdentifier(bindings.executionAttemptId) ||
      !bindings.executionAttemptId.startsWith("xat:"))
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "execution_attempt_id_prefix",
    };
  }
  if (
    bindings.executionContractId !== undefined &&
    (!isOaIdentifier(bindings.executionContractId) ||
      !bindings.executionContractId.startsWith("xct:"))
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "execution_contract_id_prefix",
    };
  }
  if (
    bindings.cycleInstanceId !== undefined &&
    (!isOaIdentifier(bindings.cycleInstanceId) ||
      !bindings.cycleInstanceId.startsWith("cyc:"))
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "cycle_instance_id_prefix",
    };
  }
  if (
    bindings.projectId !== undefined &&
    (!isOaIdentifier(bindings.projectId) ||
      !bindings.projectId.startsWith("prj:"))
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "project_id_prefix",
    };
  }
  if (
    bindings.reviewBundleId !== undefined &&
    (!isOaIdentifier(bindings.reviewBundleId) ||
      !bindings.reviewBundleId.startsWith("rb:"))
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "review_bundle_id_prefix",
    };
  }
  if (
    bindings.decisionId !== undefined &&
    !isOaIdentifier(bindings.decisionId)
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "decision_id_invalid",
    };
  }
  if (
    sourceKind === "execution_attempt" &&
    !bindings.executionAttemptId
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "execution_attempt_source_requires_binding",
    };
  }
  return null;
}

export function validateSecretFreeFields(input: {
  source?: string;
  location?: string;
  unavailableReason?: string;
  technicalResultRef?: string;
}): InvariantViolation | null {
  for (const [key, value] of Object.entries(input)) {
    if (containsForbiddenSecret(value)) {
      return {
        detailCode: "EVIDENCE_SECRET_FORBIDDEN",
        reason: `secret_in_${key}`,
      };
    }
  }
  return null;
}

/**
 * Shape guard before persist. Does not claim Attempt ownership.
 * Attempt is never owner — only a possible binding/sourceKind.
 */
export function validateEvidenceShape(
  evidence: Evidence,
): InvariantViolation | null {
  if (evidence.schemaVersion !== "0.2.0-oa") {
    return { detailCode: "EVIDENCE_INVALID", reason: "schema_version" };
  }
  if (!isEvidenceId(evidence.evidenceId)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "evidence_id" };
  }
  if (!EVIDENCE_TYPES.has(evidence.type)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "type" };
  }
  if (!evidence.source || evidence.source.trim().length === 0) {
    return { detailCode: "EVIDENCE_SOURCE_REQUIRED", reason: "source_empty" };
  }
  if (evidence.source.length > 500) {
    return { detailCode: "EVIDENCE_INVALID", reason: "source_too_long" };
  }
  if (!SOURCE_KINDS.has(evidence.sourceKind)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "source_kind" };
  }
  if (!EVIDENCE_STATUSES.has(evidence.status)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "status" };
  }
  if (!CLASSIFICATIONS.has(evidence.classification)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "classification" };
  }
  if (!STORAGE_MODES.has(evidence.storageMode)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "storage_mode" };
  }
  if (!AVAILABILITIES.has(evidence.availability)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "availability" };
  }
  if (
    evidence.freshness !== undefined &&
    !FRESHNESSES.has(evidence.freshness)
  ) {
    return { detailCode: "EVIDENCE_INVALID", reason: "freshness" };
  }
  if (
    evidence.retentionClass !== undefined &&
    !RETENTION_CLASSES.has(evidence.retentionClass)
  ) {
    return { detailCode: "EVIDENCE_INVALID", reason: "retention_class" };
  }
  if (evidence.containsSecrets !== false) {
    return {
      detailCode: "EVIDENCE_SECRET_FORBIDDEN",
      reason: "contains_secrets_must_be_false",
    };
  }
  if (!evidence.provenance || !evidence.provenance.provenanceRecordId) {
    return { detailCode: "EVIDENCE_INVALID", reason: "provenance_required" };
  }
  if (!evidence.producedAt) {
    return { detailCode: "EVIDENCE_INVALID", reason: "produced_at_required" };
  }
  if (typeof evidence.version !== "number" || evidence.version < 1) {
    return { detailCode: "EVIDENCE_INVALID", reason: "version" };
  }

  const bindingsViolation = validateBindings(
    evidence.bindings,
    evidence.sourceKind,
  );
  if (bindingsViolation) return bindingsViolation;

  const secretViolation = validateSecretFreeFields({
    source: evidence.source,
    location: evidence.location,
    unavailableReason: evidence.unavailableReason,
    technicalResultRef: evidence.technicalResultRef,
  });
  if (secretViolation) return secretViolation;

  if (evidence.location !== undefined && evidence.location.length > 1000) {
    return { detailCode: "EVIDENCE_INVALID", reason: "location_too_long" };
  }

  if (evidence.digest !== undefined && !isDigest(evidence.digest)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "digest_format" };
  }

  if (
    (evidence.verifiablePayload === true || evidence.status === "verified") &&
    !evidence.digest
  ) {
    return {
      detailCode: "EVIDENCE_DIGEST_REQUIRED",
      reason: "verifiable_or_verified_requires_digest",
    };
  }

  if (evidence.availability === "unavailable") {
    const allowed: EvidenceStatus[] = [
      "unavailable",
      "incomplete",
      "stale",
      "rejected",
    ];
    if (!allowed.includes(evidence.status)) {
      return {
        detailCode: "EVIDENCE_UNAVAILABLE",
        reason: "unavailable_availability_status_mismatch",
      };
    }
  }

  return null;
}

/** Attempt is never the Evidence owner — documented invariant for tests. */
export function isAttemptOwnerOfEvidence(): false {
  return false;
}
