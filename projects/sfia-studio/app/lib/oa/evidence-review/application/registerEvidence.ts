/**
 * RegisterEvidence — manual / external / system Evidence (never verified on create).
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createEvidenceError,
  isEvidenceDomainError,
} from "../domain/errors";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";
import {
  isEvidenceId,
  validateBindings,
  validateEvidenceShape,
  validateSecretFreeFields,
} from "../domain/invariants";
import type {
  Evidence,
  EvidenceResult,
  RegisterEvidenceRequest,
} from "../domain/types";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceRepositoryPort } from "../ports/evidenceRepository";
import type { IdGeneratorPort } from "../ports/idGenerator";

// re-export helper for assert
function checkIdempotencyKey(key: string): boolean {
  return assertIdempotencyKey(key);
}

export class RegisterEvidence {
  constructor(
    private readonly repo: EvidenceRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(request: RegisterEvidenceRequest): Promise<EvidenceResult> {
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
      if (!checkIdempotencyKey(request.idempotencyKey)) {
        return fail("EVIDENCE_INVALID", "idempotency_key_too_short");
      }
      if (request.sourceKind === ("execution_attempt" as string)) {
        return fail(
          "EVIDENCE_INVALID",
          "use_ingest_for_execution_attempt",
        );
      }
      if (request.status === ("verified" as string)) {
        return fail("EVIDENCE_VERIFIED_FORBIDDEN", "register_verified_forbidden");
      }

      const secretViolation = validateSecretFreeFields({
        source: request.source,
        location: request.location,
      });
      if (secretViolation) {
        return fail(secretViolation.detailCode, secretViolation.reason);
      }

      const bindingsViolation = validateBindings(
        request.bindings,
        request.sourceKind,
      );
      if (bindingsViolation) {
        return fail(bindingsViolation.detailCode, bindingsViolation.reason);
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          evidenceId: request.evidenceId,
          idempotencyKey: request.idempotencyKey,
          type: request.type,
          source: request.source,
          sourceKind: request.sourceKind,
          bindings: request.bindings,
          classification: request.classification,
          storageMode: request.storageMode,
          availability: request.availability,
          status: request.status,
          freshness: request.freshness,
          location: request.location,
          digest: request.digest,
          verifiablePayload: request.verifiablePayload,
          retentionClass: request.retentionClass,
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
          existingIdem.record.operation === "register"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.evidence.registered",
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

      const status = request.status ?? "available";
      const availability = request.availability ?? "available";

      const evidence: Evidence = {
        schemaVersion: "0.2.0-oa",
        evidenceId: request.evidenceId,
        type: request.type,
        source: request.source,
        sourceKind: request.sourceKind,
        location: request.location,
        digest: request.digest,
        verifiablePayload: request.verifiablePayload,
        producedBy: request.producedBy ?? request.actor,
        producedAt: timestamp,
        freshness: request.freshness ?? "fresh",
        status,
        classification: request.classification,
        storageMode: request.storageMode,
        availability,
        retentionClass: request.retentionClass,
        legalHold: request.legalHold ?? false,
        bindings: { ...request.bindings },
        containsSecrets: false,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source:
            request.sourceKind === "manual" || request.sourceKind === "external"
              ? "human_decision"
              : "system",
          timestamp,
          correlationId,
          projectId: request.bindings.projectId,
          cycleInstanceId: request.bindings.cycleInstanceId,
        }),
        version: 1,
        createdAt: timestamp,
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateEvidenceShape(evidence);
      if (shape) {
        return fail(shape.detailCode, shape.reason);
      }

      await this.repo.create(evidence, {
        evidenceId: evidence.evidenceId,
        fingerprint,
        operation: "register",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.evidence.registered",
        ts: timestamp,
        correlationId,
        evidenceId: evidence.evidenceId,
        actorId: request.actor.actorId,
        newStatus: evidence.status,
        version: evidence.version,
        result: "ok",
        durationMs,
      });

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
      return fail("EVIDENCE_PERSISTENCE_FAILED", "unexpected_register_failure");
    }
  }
}
