import type { ClockPort } from "@/lib/oa/doctrine";
import { createExecutionError } from "../domain/errors";
import type {
  GetExecutionContractRequest,
  GetExecutionContractResult,
} from "../domain/types";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";

/**
 * GetExecutionContract — load by id (deep-cloned).
 */
export class GetExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
  ) {}

  async execute(
    request: GetExecutionContractRequest,
  ): Promise<GetExecutionContractResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    try {
      const contract = await this.contracts.findById(
        request.executionContractId,
      );
      if (!contract) {
        const durationMs = Date.now() - started;
        const error = createExecutionError({
          detailCode: "CONTRACT_NOT_FOUND",
          timestamp,
          correlationId: request.correlationId,
          executionContractId: request.executionContractId,
          internalCauseRef: "missing_contract",
        });
        this.audit.append({
          event: "oa.execution_contract.load_failed",
          ts: timestamp,
          correlationId: request.correlationId,
          executionContractId: request.executionContractId,
          result: "error",
          detailCode: "CONTRACT_NOT_FOUND",
          durationMs,
        });
        return { ok: false, error };
      }
      return { ok: true, contract };
    } catch {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode: "PERSISTENCE_FAILURE",
        timestamp,
        correlationId: request.correlationId,
        executionContractId: request.executionContractId,
        internalCauseRef: "unexpected_exception",
      });
      this.audit.append({
        event: "oa.execution_contract.load_failed",
        ts: timestamp,
        correlationId: request.correlationId,
        executionContractId: request.executionContractId,
        result: "error",
        detailCode: "PERSISTENCE_FAILURE",
        durationMs,
      });
      return { ok: false, error };
    }
  }
}
