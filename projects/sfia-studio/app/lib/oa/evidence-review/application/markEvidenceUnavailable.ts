/**
 * MarkEvidenceUnavailable — explicit availability transition.
 * No cascade to ReviewBundle / Claim / Maturity (not implemented in D1).
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createEvidenceError,
  isEvidenceDomainError,
} from "../domain/errors";
import {
  isEvidenceId,
  validateEvidenceShape,
  validateSecretFreeFields,
} from "../domain/invariants";
import type {
  Evidence,
  EvidenceResult,
  MarkEvidenceUnavailableRequest,
} from "../domain/types";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceRepositoryPort } from "../ports/evidenceRepository";
import type { IdGeneratorPort } from "../ports/idGenerator";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class MarkEvidenceUnavailable {
  constructor(
    private readonly repo: EvidenceRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: MarkEvidenceUnavailableRequest,
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
      },
    ): EvidenceResult => {
      const { evidence, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.evidence.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT"
            ? ("oa.evidence.concurrent_modification_rejected" as const)
            : ("oa.evidence.operation_rejected" as const);
      this.audit.append({
        event,
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
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("EVIDENCE_INVALID", "idempotency_key_too_short");
      }
      if (!request.reason || request.reason.trim().length === 0) {
        return fail("EVIDENCE_INVALID", "reason_required");
      }
      if (request.reason.length > 500) {
        return fail("EVIDENCE_INVALID", "reason_too_long");
      }

      const secretViolation = validateSecretFreeFields({
        unavailableReason: request.reason,
      });
      if (secretViolation) {
        return fail(secretViolation.detailCode, secretViolation.reason);
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          evidenceId: request.evidenceId,
          idempotencyKey: request.idempotencyKey,
          reason: request.reason,
          expectedVersion: request.expectedVersion,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "mark_unavailable"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.evidence.unavailable",
            ts: timestamp,
            correlationId,
            evidenceId: existingIdem.evidence.evidenceId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.evidence.status,
            version: existingIdem.evidence.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            evidence: existingIdem.evidence,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
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
        });
      }

      // Already unavailable with same semantic — treat as success via OCC bump only if needed.
      if (
        current.availability === "unavailable" &&
        current.status === "unavailable"
      ) {
        const durationMs = Date.now() - started;
        this.audit.append({
          event: "oa.evidence.unavailable",
          ts: timestamp,
          correlationId,
          evidenceId: current.evidenceId,
          actorId: request.actor.actorId,
          previousStatus: current.status,
          newStatus: current.status,
          version: current.version,
          result: "ok",
          durationMs,
        });
        return {
          ok: true,
          evidence: structuredClone(current),
          reusedFromIdempotencyKey: false,
          durationMs,
        };
      }

      const updated: Evidence = {
        ...current,
        availability: "unavailable",
        status: "unavailable",
        unavailableReason: request.reason,
        unavailableAt: timestamp,
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateEvidenceShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, { evidence: current });
      }

      await this.repo.update(updated, request.expectedVersion, {
        evidenceId: updated.evidenceId,
        fingerprint,
        operation: "mark_unavailable",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.evidence.unavailable",
        ts: timestamp,
        correlationId,
        evidenceId: updated.evidenceId,
        actorId: request.actor.actorId,
        previousStatus: current.status,
        newStatus: updated.status,
        version: updated.version,
        expectedVersion: request.expectedVersion,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        evidence: structuredClone(updated),
        durationMs,
      };
    } catch (err) {
      if (isEvidenceDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "EVIDENCE_PERSISTENCE_FAILED",
        "unexpected_unavailable_failure",
      );
    }
  }
}
