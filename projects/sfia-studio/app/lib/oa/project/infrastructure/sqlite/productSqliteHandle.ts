import type { DatabaseSync } from "node:sqlite";
import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";

/**
 * Shared Product SQLite handle for Project + Cycle + Decision + Contract +
 * Attempt/Evidence/ReviewBundle (M5).
 * Downstream adapters depend on this shape — not on SqliteProductStore class.
 */
export type ProductSqliteHandle = ProjectPersistenceUnitOfWorkPort & {
  readonly db: DatabaseSync;
  failNextSave?:
    | "project"
    | "lps"
    | "cycle"
    | "decision"
    | "contract"
    | "attempt"
    | "evidence"
    | "review_bundle"
    | "claim_evaluation"
    | "trajectory"
    | "confirmation"
    | "epistemic"
    | null;
};
