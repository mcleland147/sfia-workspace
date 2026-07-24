import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import { createDecisionError } from "../domain/errors";
import type {
  Confirmation,
  ConfirmationResult,
  RefuseConfirmationRequest,
} from "../domain/types";
import type { MemoryDecisionStore } from "../infrastructure/memoryDecisionStore";
import type { ConfirmationRepositoryPort } from "../ports/confirmationRepository";
import type { DecisionAuditPort } from "../ports/decisionAudit";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

export class RefuseConfirmation {
  constructor(
    private readonly confirmations: ConfirmationRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: DecisionAuditPort,
    private readonly store?: MemoryDecisionStore,
  ) {}

  async execute(
    request: RefuseConfirmationRequest,
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
        event: "oa.confirmation.refused",
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
      if (existing.status !== "requested") {
        return fail("STATE_CONFLICT", `status_${existing.status}`);
      }

      let confirmation: Confirmation | undefined;

      const persist = async () => {
        const next: Confirmation = {
          ...existing,
          status: "refused",
          confirmedAt: timestamp,
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
        return fail("PERSISTENCE_FAILURE", "atomic_refuse_failed");
      }

      if (!confirmation) {
        return fail("PERSISTENCE_FAILURE", "atomic_refuse_incomplete");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.confirmation.refused",
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
