/**
 * VerifyEvidenceIntegrity — metadata-only probe via EvidencePayloadPort.
 * Never loads or executes payload. verified ⇒ digest mandatory.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createEvidenceError,
  isEvidenceDomainError,
} from "../domain/errors";
import { isEvidenceId, validateEvidenceShape } from "../domain/invariants";
import type {
  Evidence,
  EvidenceResult,
  VerifyEvidenceIntegrityRequest,
} from "../domain/types";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidencePayloadPort } from "../ports/evidencePayloadPort";
import type { EvidenceRepositoryPort } from "../ports/evidenceRepository";
import type { IdGeneratorPort } from "../ports/idGenerator";

export class VerifyEvidenceIntegrity {
  constructor(
    private readonly repo: EvidenceRepositoryPort,
    private readonly payload: EvidencePayloadPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: VerifyEvidenceIntegrityRequest,
  ): Promise<EvidenceResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createEvidenceError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createEvidenceError>[0]> & {
        evidence?: Evidence;
        auditEvent?:
          | "oa.evidence.integrity_rejected"
          | "oa.evidence.operation_rejected"
          | "oa.evidence.concurrent_modification_rejected";
      },
    ): EvidenceResult => {
      const { evidence, auditEvent, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      this.audit.append({
        event: auditEvent ?? "oa.evidence.integrity_rejected",
        ts: timestamp,
        correlationId,
        evidenceId: request.evidenceId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createEvidenceError({
          detailCode,
          timestamp,
          correlationId,
          evidenceId: request.evidenceId,
          internalCauseRef,
          ...errorExtra,
        }),
        evidence,
        durationMs,
      };
    };

    try {
      if (!isEvidenceId(request.evidenceId)) {
        return fail("EVIDENCE_INVALID", "evidence_id_invalid");
      }

      const current = await this.repo.findById(request.evidenceId);
      if (!current) {
        return fail("EVIDENCE_NOT_FOUND", "missing_evidence");
      }

      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          evidence: current,
          auditEvent: "oa.evidence.concurrent_modification_rejected",
        });
      }

      if (current.availability === "unavailable") {
        return fail("EVIDENCE_UNAVAILABLE", "evidence_unavailable", {
          evidence: current,
        });
      }

      if (current.containsSecrets !== false) {
        return fail("EVIDENCE_SECRET_FORBIDDEN", "contains_secrets", {
          evidence: current,
        });
      }

      // verified status requires digest (modeled).
      if (!current.digest) {
        return fail("EVIDENCE_DIGEST_REQUIRED", "digest_required_to_verify", {
          evidence: current,
        });
      }

      const probe = await this.payload.probeMetadata({
        evidenceId: current.evidenceId,
        location: current.location,
        expectedDigest: current.digest,
      });

      if (!probe.ok) {
        if (probe.reason === "unavailable") {
          return fail("EVIDENCE_UNAVAILABLE", "payload_unavailable", {
            evidence: current,
          });
        }
        if (probe.reason === "digest_missing") {
          return fail("EVIDENCE_DIGEST_REQUIRED", "probe_digest_missing", {
            evidence: current,
          });
        }
        return fail("PAYLOAD_METADATA_ERROR", `probe_${probe.reason}`, {
          evidence: current,
        });
      }

      if (probe.availability !== "available") {
        return fail("EVIDENCE_UNAVAILABLE", "probe_not_available", {
          evidence: current,
        });
      }

      if (!probe.digest || probe.digest !== current.digest) {
        return fail("EVIDENCE_INTEGRITY_MISMATCH", "digest_mismatch", {
          evidence: current,
        });
      }

      // metadataOnly must be true — never execute payload.
      if (probe.metadataOnly !== true) {
        return fail("PAYLOAD_METADATA_ERROR", "non_metadata_probe_refused", {
          evidence: current,
        });
      }

      const verified: Evidence = {
        ...current,
        status: "verified",
        availability: "available",
        freshness: current.freshness ?? "fresh",
        updatedAt: timestamp,
        version: current.version + 1,
      };

      const shape = validateEvidenceShape(verified);
      if (shape) {
        return fail(shape.detailCode, shape.reason, { evidence: current });
      }

      await this.repo.update(verified, request.expectedVersion);

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.evidence.integrity_verified",
        ts: timestamp,
        correlationId,
        evidenceId: verified.evidenceId,
        actorId: request.actor.actorId,
        previousStatus: current.status,
        newStatus: verified.status,
        version: verified.version,
        expectedVersion: request.expectedVersion,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        evidence: structuredClone(verified),
        durationMs,
      };
    } catch (err) {
      if (isEvidenceDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
          auditEvent:
            err.detailCode === "VERSION_CONFLICT"
              ? "oa.evidence.concurrent_modification_rejected"
              : "oa.evidence.integrity_rejected",
        });
      }
      return fail("EVIDENCE_PERSISTENCE_FAILED", "unexpected_verify_failure");
    }
  }
}
