import type { ClockPort } from "@/lib/oa/doctrine";
import { createExecutionError } from "../domain/errors";
import { isOaIdentifier } from "../domain/invariants";
import type {
  ListExecutionContractHistoryRequest,
  ListExecutionContractsResult,
} from "../domain/types";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";

/**
 * ListExecutionContractHistory — all contracts for a project (incl. superseded).
 */
export class ListExecutionContractHistory {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
  ) {}

  async execute(
    request: ListExecutionContractHistoryRequest,
  ): Promise<ListExecutionContractsResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    try {
      if (
        !isOaIdentifier(request.projectId) ||
        !request.projectId.startsWith("prj:")
      ) {
        return {
          ok: false,
          error: createExecutionError({
            detailCode: "CONTRACT_INVALID",
            timestamp,
            correlationId: request.correlationId,
            projectId: request.projectId,
            internalCauseRef: "project_id_invalid",
          }),
        };
      }
      const contracts = await this.contracts.listByProject(request.projectId);
      void started;
      void this.audit;
      return { ok: true, contracts };
    } catch {
      return {
        ok: false,
        error: createExecutionError({
          detailCode: "PERSISTENCE_FAILURE",
          timestamp,
          correlationId: request.correlationId,
          projectId: request.projectId,
          internalCauseRef: "unexpected_exception",
        }),
      };
    }
  }
}
