import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import { createDecisionError } from "../domain/errors";
import { isConfirmationExpired } from "../domain/invariants";
import type {
  Confirmation,
  ConfirmationResult,
  ConsumeConfirmationRequest,
} from "../domain/types";
import type { MemoryDecisionStore } from "../infrastructure/memoryDecisionStore";
import type { ConfirmationRepositoryPort } from "../ports/confirmationRepository";
import type { DecisionAuditPort } from "../ports/decisionAudit";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/**
 * ConsumeConfirmation — granted → consumed.
 * Expired confirmations are not consumable.
 * Double consume is forbidden.
 */
export class ConsumeConfirmation {
  constructor(
    private readonly confirmations: ConfirmationRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: DecisionAuditPort,
    private readonly store?: MemoryDecisionStore,
  ) {}

  async execute(
    request: ConsumeConfirmationRequest,
  ): Promise<ConfirmationResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
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
        event: "oa.confirmation.consumed",
        ts: timestamp,
        correlationId,
        confirmationId: request.confirmationId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      const existing = await this.confirmations.findById(
        request.confirmationId,
      );
      if (!existing) {
        return fail("CONFIRMATION_NOT_FOUND", "missing_confirmation");
      }
      if (existing.status === "consumed") {
        return fail("CONFIRMATION_ALREADY_CONSUMED", "double_consume");
      }
      if (existing.status !== "granted") {
        return fail("STATE_CONFLICT", `status_${existing.status}`);
      }
      if (isConfirmationExpired(existing.expiresAt, timestamp)) {
        return fail("CONFIRMATION_EXPIRED", "expired_not_consumable");
      }

      let confirmation: Confirmation | undefined;

      const persist = async () => {
        const current = await this.confirmations.findById(
          request.confirmationId,
        );
        if (!current) {
          throw Object.assign(new Error("missing"), {
            detailCode: "CONFIRMATION_NOT_FOUND" as const,
          });
        }
        if (current.status === "consumed") {
          throw Object.assign(new Error("double_consume"), {
            detailCode: "CONFIRMATION_ALREADY_CONSUMED" as const,
          });
        }
        if (current.status !== "granted") {
          throw Object.assign(new Error("status"), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        if (isConfirmationExpired(current.expiresAt, timestamp)) {
          throw Object.assign(new Error("expired"), {
            detailCode: "CONFIRMATION_EXPIRED" as const,
          });
        }
        const next: Confirmation = {
          ...current,
          status: "consumed",
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
      } catch (err) {
        if (
          err &&
          typeof err === "object" &&
          "detailCode" in err
        ) {
          return fail(
            (err as { detailCode: Parameters<typeof createDecisionError>[0]["detailCode"] })
              .detailCode,
            err instanceof Error ? err.message : "race",
          );
        }
        return fail("PERSISTENCE_FAILURE", "atomic_consume_failed");
      }

      if (!confirmation) {
        return fail("PERSISTENCE_FAILURE", "atomic_consume_incomplete");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.confirmation.consumed",
        ts: timestamp,
        correlationId,
        confirmationId: request.confirmationId,
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
