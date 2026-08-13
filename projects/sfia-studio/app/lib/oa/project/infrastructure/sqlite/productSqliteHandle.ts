import type { DatabaseSync } from "node:sqlite";
import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";

/**
 * Shared Product SQLite handle for Project + Cycle adapters (M2).
 * Cycle infrastructure depends on this shape — not on SqliteProductStore class.
 */
export type ProductSqliteHandle = ProjectPersistenceUnitOfWorkPort & {
  readonly db: DatabaseSync;
  failNextSave?: "project" | "lps" | "cycle" | null;
};
