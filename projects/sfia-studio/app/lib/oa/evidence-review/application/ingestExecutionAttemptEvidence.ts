/**
 * IngestExecutionAttemptEvidence — explicit T-A5 → T-A6 bridge (D-T-A6-DEL-04).
 *
 * Policy (documented, fail-closed):
 * - Only Attempt.status === "succeeded" WITH resultRef may produce Evidence.
 * - failed / running / other statuses are refused (ATTEMPT_STATUS_REFUSED).
 * - Created Evidence status is always "available" (never "verified").
 * - ExecutionAttempt.succeeded ≠ Evidence verified ≠ PASS.
 * - Attempt is never mutated.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createEvidenceError,
  isEvidenceDomainError,
} from "../domain/errors";
import {
  isEvidenceId,
  isOaIdentifier,
  validateBindings,
  validateEvidenceShape,
  validateSecretFreeFields,
} from "../domain/invariants";
import type {
  Evidence,
  EvidenceResult,
  IngestExecutionAttemptEvidenceRequest,
} from "../domain/types";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceRepositoryPort } from "../ports/evidenceRepository";
import type { ExecutionAttemptReaderPort } from "../ports/executionAttemptReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class IngestExecutionAttemptEvidence {
  constructor(
    private readonly repo: EvidenceRepositoryPort,
    private readonly attempts: ExecutionAttemptReaderPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: IngestExecutionAttemptEvidenceRequest,
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
          : ("oa.evidence.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        evidenceId: request.evidenceId,
        executionAttemptId: request.executionAttemptId,
        actorId: request.actor.actorId,
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
          executionAttemptId: request.executionAttemptId,
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
      if (
        !isOaIdentifier(request.executionAttemptId) ||
        !request.executionAttemptId.startsWith("xat:")
      ) {
        return fail("EVIDENCE_INVALID", "execution_attempt_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("EVIDENCE_INVALID", "idempotency_key_too_short");
      }

      const secretViolation = validateSecretFreeFields({
        location: request.location,
        actorDisplayName: request.actor.displayName,
      });
      if (secretViolation) {
        return fail(secretViolation.detailCode, secretViolation.reason);
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          evidenceId: request.evidenceId,
          executionAttemptId: request.executionAttemptId,
          idempotencyKey: request.idempotencyKey,
          classification: request.classification,
          retentionClass: request.retentionClass,
          bindings: request.bindings,
          type: request.type,
          storageMode: request.storageMode,
          location: request.location,
          digest: request.digest,
          legalHold: request.legalHold,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "ingest_attempt"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.evidence.execution_attempt_ingested",
            ts: timestamp,
            correlationId,
            evidenceId: existingIdem.evidence.evidenceId,
            executionAttemptId: request.executionAttemptId,
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

      const attempt = await this.attempts.findById(request.executionAttemptId);
      if (!attempt) {
        return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
      }

      // Fail-closed: only succeeded + resultRef produces candidate Evidence.
      if (attempt.status !== "succeeded") {
        return fail(
          "ATTEMPT_STATUS_REFUSED",
          `attempt_status_${attempt.status}`,
        );
      }
      if (!attempt.resultRef || !isOaIdentifier(attempt.resultRef)) {
        return fail("ATTEMPT_RESULT_UNAVAILABLE", "result_ref_missing");
      }

      const bindings = {
        ...(request.bindings ?? {}),
        executionAttemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
      };
      const bindingsViolation = validateBindings(bindings, "execution_attempt");
      if (bindingsViolation) {
        return fail(bindingsViolation.detailCode, bindingsViolation.reason);
      }

      const storageMode = request.storageMode ?? "internal_payload_ref";
      const location =
        request.location ?? `refs/attempts/${attempt.attemptId}/result`;

      const evidence: Evidence = {
        schemaVersion: "0.2.0-oa",
        evidenceId: request.evidenceId,
        type: request.type ?? "artifact",
        source: `execution attempt ${attempt.attemptId}`,
        sourceKind: "execution_attempt",
        location,
        digest: request.digest,
        producedBy: request.actor,
        producedAt: attempt.completedAt ?? timestamp,
        freshness: "fresh",
        status: "available",
        classification: request.classification,
        storageMode,
        availability: "available",
        retentionClass: request.retentionClass ?? "standard",
        legalHold: request.legalHold ?? false,
        bindings,
        containsSecrets: false,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source: "execution_adapter",
          timestamp,
          correlationId,
          projectId: bindings.projectId,
          cycleInstanceId: bindings.cycleInstanceId,
        }),
        version: 1,
        createdAt: timestamp,
        idempotencyKey: request.idempotencyKey,
        technicalResultRef: attempt.resultRef,
      };

      const shape = validateEvidenceShape(evidence);
      if (shape) {
        return fail(shape.detailCode, shape.reason);
      }

      await this.repo.create(evidence, {
        evidenceId: evidence.evidenceId,
        fingerprint,
        operation: "ingest_attempt",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.evidence.execution_attempt_ingested",
        ts: timestamp,
        correlationId,
        evidenceId: evidence.evidenceId,
        executionAttemptId: attempt.attemptId,
        actorId: request.actor.actorId,
        newStatus: evidence.status,
        version: evidence.version,
        result: "ok",
        durationMs,
      });

      // Prove Attempt was not mutated via reader contract (snapshot clone).
      return {
        ok: true,
        evidence: structuredClone(evidence),
        durationMs,
      };
    } catch (err) {
      if (isEvidenceDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail("EVIDENCE_PERSISTENCE_FAILED", "unexpected_ingest_failure");
    }
  }
}
