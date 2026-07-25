import type { ExecutionContract } from "../domain/types";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import type { MemoryExecutionContractStore } from "./memoryExecutionContractStore";

export class MemoryExecutionContractRepository
  implements ExecutionContractRepositoryPort
{
  constructor(private readonly store: MemoryExecutionContractStore) {}

  async findById(
    executionContractId: string,
  ): Promise<ExecutionContract | null> {
    const found = this.store.contracts.get(executionContractId);
    return found ? structuredClone(found) : null;
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<ExecutionContract | null> {
    const id = this.store.idempotencyIndex.get(idempotencyKey);
    if (!id) return null;
    return this.findById(id);
  }

  async exists(executionContractId: string): Promise<boolean> {
    return this.store.contracts.has(executionContractId);
  }

  async save(contract: ExecutionContract): Promise<void> {
    if (this.store.failNextSave) {
      this.store.failNextSave = false;
      throw new Error("forced_execution_contract_save_failure");
    }
    this.store.contracts.set(
      contract.executionContractId,
      structuredClone(contract),
    );
    this.store.idempotencyIndex.set(
      contract.idempotencyKey,
      contract.executionContractId,
    );
  }

  async listByProject(projectId: string): Promise<ExecutionContract[]> {
    const out: ExecutionContract[] = [];
    for (const c of this.store.contracts.values()) {
      if (c.projectId === projectId) {
        out.push(structuredClone(c));
      }
    }
    return out;
  }

  async listSuperseding(
    executionContractId: string,
  ): Promise<ExecutionContract[]> {
    const out: ExecutionContract[] = [];
    for (const c of this.store.contracts.values()) {
      if (c.supersedesExecutionContractId === executionContractId) {
        out.push(structuredClone(c));
      }
    }
    return out;
  }
}
