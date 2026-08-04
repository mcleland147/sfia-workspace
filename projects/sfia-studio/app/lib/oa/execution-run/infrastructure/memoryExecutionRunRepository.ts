import type { ExecutionRun } from "../domain/types";
import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
import type { MemoryExecutionRunStore } from "./memoryExecutionRunStore";

export class MemoryExecutionRunRepository implements ExecutionRunRepositoryPort {
  constructor(private readonly store: MemoryExecutionRunStore) {}

  async save(run: ExecutionRun): Promise<void> {
    this.store.runs.set(run.runId, structuredClone(run));
  }

  async getById(runId: string): Promise<ExecutionRun | null> {
    const found = this.store.runs.get(runId);
    return found ? structuredClone(found) : null;
  }

  async listByCorrelationId(correlationId: string): Promise<ExecutionRun[]> {
    const out: ExecutionRun[] = [];
    for (const run of this.store.runs.values()) {
      if (run.correlationId === correlationId) {
        out.push(structuredClone(run));
      }
    }
    out.sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.runId.localeCompare(b.runId));
    return out;
  }
}
