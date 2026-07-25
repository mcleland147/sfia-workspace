import type { ClockPort } from "@/lib/oa/doctrine";
import { createAttemptError } from "../domain/errors";
import type {
  GetExecutionAttemptRequest,
  GetExecutionAttemptResult,
} from "../domain/types";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";

/** GetExecutionAttempt — read-only, deep-cloned. */
export class GetExecutionAttempt {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
  ) {}

  async execute(
    request: GetExecutionAttemptRequest,
  ): Promise<GetExecutionAttemptResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const attempt = await this.attempts.findById(request.attemptId);
    if (!attempt) {
      this.audit.append({
        event: "oa.execution_attempt.read",
        ts: timestamp,
        correlationId: request.correlationId,
        attemptId: request.attemptId,
        result: "error",
        detailCode: "ATTEMPT_NOT_FOUND",
        durationMs: Date.now() - started,
      });
      return {
        ok: false,
        error: createAttemptError({
          detailCode: "ATTEMPT_NOT_FOUND",
          timestamp,
          correlationId: request.correlationId,
          attemptId: request.attemptId,
          internalCauseRef: "missing_attempt",
        }),
      };
    }
    return { ok: true, attempt };
  }
}
