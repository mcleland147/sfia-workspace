import type { ClockPort } from "@/lib/oa/doctrine";
import { createAttemptError } from "../domain/errors";
import { isOaIdentifier } from "../domain/invariants";
import type {
  ListExecutionAttemptsRequest,
  ListExecutionAttemptsResult,
} from "../domain/types";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";

/** ListExecutionAttempts — all Attempts of a contract, deterministic order. */
export class ListExecutionAttempts {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
  ) {}

  async execute(
    request: ListExecutionAttemptsRequest,
  ): Promise<ListExecutionAttemptsResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    if (
      !isOaIdentifier(request.executionContractId) ||
      !request.executionContractId.startsWith("xct:")
    ) {
      this.audit.append({
        event: "oa.execution_attempt.read",
        ts: timestamp,
        correlationId: request.correlationId,
        executionContractId: request.executionContractId,
        result: "error",
        detailCode: "ATTEMPT_INVALID",
        durationMs: Date.now() - started,
      });
      return {
        ok: false,
        error: createAttemptError({
          detailCode: "ATTEMPT_INVALID",
          timestamp,
          correlationId: request.correlationId,
          executionContractId: request.executionContractId,
          internalCauseRef: "execution_contract_id_invalid",
        }),
      };
    }
    const attempts = await this.attempts.listByContract(
      request.executionContractId,
    );
    return { ok: true, attempts };
  }
}
