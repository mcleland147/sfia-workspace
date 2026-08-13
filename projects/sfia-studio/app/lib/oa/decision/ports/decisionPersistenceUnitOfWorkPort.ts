/**
 * Minimal transactional boundary for HumanDecision mutations (M3).
 * Compatible with MemoryDecisionStore and Product SQLite UnitOfWork.
 */
export interface DecisionPersistenceUnitOfWorkPort {
  runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
}
