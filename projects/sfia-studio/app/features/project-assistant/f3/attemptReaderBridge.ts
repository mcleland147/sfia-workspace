/**
 * READ-ONLY ExecutionAttemptReaderPort over T-A5 repository.
 * Prefer product bridge over FakeExecutionAttemptReader seed drift.
 */

import type { ExecutionAttemptRepositoryPort } from "@/lib/oa/execution-attempt";
import type {
  ExecutionAttemptReaderPort,
  ExecutionAttemptSnapshot,
} from "@/lib/oa/evidence-review";

export function createAttemptReaderBridge(
  attempts: ExecutionAttemptRepositoryPort,
): ExecutionAttemptReaderPort {
  return {
    async findById(
      attemptId: string,
    ): Promise<ExecutionAttemptSnapshot | null> {
      const attempt = await attempts.findById(attemptId);
      if (!attempt) return null;
      return {
        attemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
        executionContractVersion: attempt.executionContractVersion,
        status: attempt.status,
        resultRef: attempt.resultRef,
        errorRef: attempt.errorRef,
        completedAt: attempt.completedAt,
        failedAt: attempt.failedAt,
        selectedAgentRef: attempt.selectedAgentRef,
      };
    },
  };
}
