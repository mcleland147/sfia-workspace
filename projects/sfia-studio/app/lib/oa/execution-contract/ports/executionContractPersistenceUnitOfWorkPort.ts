/**
 * Minimal transactional boundary for ExecutionContract mutations (M3).
 * Compatible with MemoryExecutionContractStore and Product SQLite UnitOfWork.
 */
export interface ExecutionContractPersistenceUnitOfWorkPort {
  runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
}
