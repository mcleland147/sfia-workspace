import type { ExecutionRun } from "../domain/types";

export interface ExecutionRunRepositoryPort {
  save(run: ExecutionRun): Promise<void>;
  getById(runId: string): Promise<ExecutionRun | null>;
  listByCorrelationId(correlationId: string): Promise<ExecutionRun[]>;
}
