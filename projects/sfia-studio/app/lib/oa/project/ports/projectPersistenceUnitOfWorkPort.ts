/**
 * Minimal transactional boundary for atomic Project + LPS mutations.
 * Memory and SQLite adapters both satisfy this port (M1).
 */
export interface ProjectPersistenceUnitOfWorkPort {
  runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
}
