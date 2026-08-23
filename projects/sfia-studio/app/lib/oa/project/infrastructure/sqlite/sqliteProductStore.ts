import { AsyncLocalStorage } from "node:async_hooks";
import type { DatabaseSync } from "node:sqlite";
import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";
import type { CyclePersistenceUnitOfWorkPort } from "@/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort";
import { openProductSqlite } from "./db";
import type { ProductSqliteHandle } from "./productSqliteHandle";
import { resolveProductSqlitePath } from "./paths";

type TransactionContext = {
  /** True only while this async chain owns an open Product transaction. */
  active: boolean;
  depth: number;
};

/**
 * SQLite product UnitOfWork for Project/LPS (M1) + Cycle (M2) + Decision/Contract (M3)
 * + Attempt/Evidence/ReviewBundle (M5).
 * Isolated file — not D1 / OPS1 / FinOps. Single Product DB authority.
 *
 * Nested reentrance: same async chain (AsyncLocalStorage) reuses the open
 * transaction without re-queueing (CreateCycle → Append LPS; HD → Append LPS).
 * Independent concurrent callers never join an open transaction — they wait
 * on the store queue and open their own BEGIN/COMMIT.
 */
export class SqliteProductStore
  implements
    ProjectPersistenceUnitOfWorkPort,
    CyclePersistenceUnitOfWorkPort,
    ProductSqliteHandle
{
  readonly db: DatabaseSync;
  readonly dbPath: string;

  /** Test hook — force next save to throw (atomicity tests). */
  failNextSave:
    | "project"
    | "lps"
    | "cycle"
    | "decision"
    | "contract"
    | "attempt"
    | "evidence"
    | "review_bundle"
    | "trajectory"
    | "confirmation"
    | "epistemic"
    | null = null;

  private queue: Promise<void> = Promise.resolve();
  private readonly txLocal = new AsyncLocalStorage<TransactionContext>();

  constructor(dbPath?: string) {
    this.dbPath = resolveProductSqlitePath(dbPath);
    this.db = openProductSqlite(this.dbPath);
  }

  async runInTransaction<T>(fn: () => Promise<T>): Promise<T> {
    const existing = this.txLocal.getStore();
    // Real nest: same async ownership chain only.
    if (existing?.active) {
      existing.depth += 1;
      try {
        return await fn();
      } finally {
        existing.depth -= 1;
      }
    }

    const run = async (): Promise<T> => {
      const ctx: TransactionContext = { active: true, depth: 1 };
      return this.txLocal.run(ctx, async () => {
        this.db.exec("BEGIN IMMEDIATE");
        try {
          const result = await fn();
          ctx.active = false;
          this.db.exec("COMMIT");
          return result;
        } catch (err) {
          ctx.active = false;
          try {
            this.db.exec("ROLLBACK");
          } catch {
            /* ignore rollback errors after failed begin */
          }
          throw err;
        }
      });
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
