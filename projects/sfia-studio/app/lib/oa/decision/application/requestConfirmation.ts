import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import { createDecisionError } from "../domain/errors";
import {
  cloneDecisionArrays,
  confirmationPayloadFingerprint,
  validateConfirmationFields,
} from "../domain/invariants";
import type {
  Confirmation,
  ConfirmationResult,
  RequestConfirmationRequest,
} from "../domain/types";
import type { MemoryDecisionStore } from "../infrastructure/memoryDecisionStore";
import type { ConfirmationRepositoryPort } from "../ports/confirmationRepository";
import type { DecisionAuditPort } from "../ports/decisionAudit";

function newId(prefix: "cor" | "prv"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/**
 * RequestConfirmation — create confirmation in `requested` status.
 * idempotencyKey (min 8) unique: same payload → reuse; different → conflict.
 */
export class RequestConfirmation {
  constructor(
    private readonly confirmations: ConfirmationRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: DecisionAuditPort,
    private readonly store?: MemoryDecisionStore,
  ) {}

  async execute(
    request: RequestConfirmationRequest,
  ): Promise<ConfirmationResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createDecisionError>[0]["detailCode"],
      internalCauseRef?: string,
    ): ConfirmationResult => {
      const durationMs = Date.now() - started;
      const error = createDecisionError({
        detailCode,
        timestamp,
        correlationId,
        confirmationId: request.confirmationId,
        internalCauseRef,
      });
      this.audit.append({
        event: "oa.confirmation.requested",
        ts: timestamp,
        correlationId,
        confirmationId: request.confirmationId,
        level: request.level,
        scope: request.scope,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.requestedBy?.actorId || !request.requestedTo?.actorId) {
        return fail("CONFIRMATION_INVALID", "actors_required");
      }

      const cloned = cloneDecisionArrays({
        impacts: request.impacts,
        risks: request.risks,
      });

      const fieldViolation = validateConfirmationFields({
        confirmationId: request.confirmationId,
        level: request.level,
        actionRef: request.actionRef,
        scope: request.scope,
        idempotencyKey: request.idempotencyKey,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason);
      }

      const existingByKey = await this.confirmations.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingByKey) {
        const existingFp = confirmationPayloadFingerprint({
          level: existingByKey.level,
          actionRef: existingByKey.actionRef,
          scope: existingByKey.scope,
          decisionRef: existingByKey.decisionRef,
          requestedToActorId: existingByKey.requestedTo.actorId,
        });
        const nextFp = confirmationPayloadFingerprint({
          level: request.level,
          actionRef: request.actionRef,
          scope: request.scope.trim(),
          decisionRef: request.decisionRef,
          requestedToActorId: request.requestedTo.actorId,
        });
        if (existingFp !== nextFp) {
          return fail(
            "CONFIRMATION_IDEMPOTENCY_CONFLICT",
            "idempotency_payload_mismatch",
          );
        }
        const durationMs = Date.now() - started;
        this.audit.append({
          event: "oa.confirmation.requested",
          ts: timestamp,
          correlationId,
          confirmationId: existingByKey.confirmationId,
          level: existingByKey.level,
          scope: existingByKey.scope,
          result: "ok",
          durationMs,
          reusedFromIdempotencyKey: true,
        });
        return {
          ok: true,
          confirmation: structuredClone(existingByKey),
          reusedFromIdempotencyKey: true,
          durationMs,
        };
      }

      if (await this.confirmations.exists(request.confirmationId)) {
        return fail("CONFIRMATION_ALREADY_EXISTS", "confirmation_id_taken");
      }

      let confirmation: Confirmation | undefined;

      const persist = async () => {
        const next: Confirmation = {
          schemaVersion: "0.1.0-oa",
          confirmationId: request.confirmationId,
          level: request.level,
          actionRef: request.actionRef,
          requestedBy: structuredClone(request.requestedBy),
          requestedTo: structuredClone(request.requestedTo),
          scope: request.scope.trim(),
          status: "requested",
          idempotencyKey: request.idempotencyKey,
          decisionRef: request.decisionRef,
          impacts: cloned.impacts.length > 0 ? [...cloned.impacts] : undefined,
          risks: cloned.risks.length > 0 ? [...cloned.risks] : undefined,
          expiresAt: request.expiresAt,
          provenance: {
            schemaVersion: "0.1.0-oa",
            provenanceRecordId: newId("prv"),
            actor: structuredClone(request.requestedBy),
            source: "confirmation",
            timestamp,
            correlationId,
          },
        };
        await this.confirmations.save(next);
        confirmation = next;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch {
        return fail("PERSISTENCE_FAILURE", "atomic_request_failed");
      }

      if (!confirmation) {
        return fail("PERSISTENCE_FAILURE", "atomic_request_incomplete");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.confirmation.requested",
        ts: timestamp,
        correlationId,
        confirmationId: request.confirmationId,
        level: request.level,
        scope: request.scope,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        confirmation: structuredClone(confirmation),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
