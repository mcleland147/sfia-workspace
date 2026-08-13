import type { DatabaseSync } from "node:sqlite";
import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";
import { openProductSqlite } from "./db";
import { resolveProductSqlitePath } from "./paths";

/**
 * SQLite product UnitOfWork for atomic Project + LPS mutations (M1).
 * Isolated file — not D1 / OPS1 / FinOps.
 */
export class SqliteProductStore implements ProjectPersistenceUnitOfWorkPort {
  readonly db: DatabaseSync;
  readonly dbPath: string;

  /** Test hook — force next save to throw (atomicity tests). */
  failNextSave: "project" | "lps" | null = null;

  private depth = 0;
  private queue: Promise<void> = Promise.resolve();

  constructor(dbPath?: string) {
    this.dbPath = resolveProductSqlitePath(dbPath);
    this.db = openProductSqlite(this.dbPath);
  }

  async runInTransaction<T>(fn: () => Promise<T>): Promise<T> {
    const run = async (): Promise<T> => {
      if (this.depth === 0) {
        this.db.exec("BEGIN IMMEDIATE");
      }
      this.depth += 1;
      try {
        const result = await fn();
        this.depth -= 1;
        if (this.depth === 0) {
          this.db.exec("COMMIT");
        }
        return result;
      } catch (err) {
        this.depth -= 1;
        if (this.depth === 0) {
          try {
            this.db.exec("ROLLBACK");
          } catch {
            /* ignore rollback errors after failed begin */
          }
        }
        throw err;
      }
    };

    const next = this.queue.then(run, run);
    this.queue = next.then(
      () => undefined,
      () => undefined,
    );
    return next;
  }

  close(): void {
    try {
      this.db.close();
    } catch {
      /* ignore */
    }
  }
}
