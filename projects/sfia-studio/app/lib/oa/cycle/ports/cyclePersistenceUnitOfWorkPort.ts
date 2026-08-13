/**
 * Minimal transactional boundary for CycleInstance mutations (M2).
 * Compatible with MemoryCycleStore and Product SQLite UnitOfWork.
 */
export interface CyclePersistenceUnitOfWorkPort {
  runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
}
