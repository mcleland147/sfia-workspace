import type { ExecutionContract } from "../domain/types";

export interface ExecutionContractRepositoryPort {
  findById(executionContractId: string): Promise<ExecutionContract | null>;
  findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<ExecutionContract | null>;
  exists(executionContractId: string): Promise<boolean>;
  save(contract: ExecutionContract): Promise<void>;
  listByProject(projectId: string): Promise<ExecutionContract[]>;
  /**
   * Derived reverse link: contracts whose supersedesExecutionContractId === id.
   */
  listSuperseding(executionContractId: string): Promise<ExecutionContract[]>;
}
