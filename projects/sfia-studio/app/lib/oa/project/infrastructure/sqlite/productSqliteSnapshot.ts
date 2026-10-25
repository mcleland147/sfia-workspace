/**
 * Coherent Product SQLite snapshot/restore (L2-D2 G-ACTIVATION PREPARATION S1 / CR-S1-01).
 *
 * Operational strategy: SQLite `VACUUM INTO` on an open source connection —
 * produces a consistent destination without hot file copies under unmanaged WAL.
 *
 * Closed-file copy is NOT part of the operational contract (CR-S1-01): absence of
 * WAL/SHM sidecars does not prove the source is closed or quiesced. Callers must
 * use `snapshotProductSqliteVacuumInto`. The former closed-copy export remains as
 * an explicit fail-closed stub so accidental use cannot claim coherence.
 *
 * Integrity verification opens the snapshot with node:sqlite `{ readOnly: true }`
 * and runs `PRAGMA integrity_check` only — no Product schema migration, no create.
 *
 * Disposable / synthetic paths only for Delivery harness. Not a user backup tool.
 * ≠ H4 REAL PASS · ≠ LIVE BACKUP PROVEN · ≠ R-03 FULLY CLOSED.
 */
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { openProductSqlite } from "./db";

export type ProductSqliteSnapshotResult = {
  readonly method: "vacuum_into";
  readonly sourcePath: string;
  readonly destinationPath: string;
  readonly bytes: number;
};

export class ProductSqliteSnapshotError extends Error {
  readonly code:
    | "INVALID_PATH"
    | "WAL_PRESENT"
    | "SOURCE_OPEN_REQUIRED"
    | "DEST_EXISTS"
    | "INTEGRITY_FAILED"
    | "CLOSED_COPY_UNAVAILABLE"
    | "IO";

  constructor(
    code: ProductSqliteSnapshotError["code"],
    message: string,
    cause?: unknown,
  ) {
    super(message, cause !== undefined ? { cause } : undefined);
    this.name = "ProductSqliteSnapshotError";
    this.code = code;
  }
}

function assertAbsoluteSqlitePath(label: string, filePath: string): void {
  if (!filePath || !path.isAbsolute(filePath)) {
    throw new ProductSqliteSnapshotError(
      "INVALID_PATH",
      `${label} must be an absolute filesystem path`,
    );
  }
  if (filePath.endsWith("/") || filePath.endsWith(path.sep)) {
    throw new ProductSqliteSnapshotError(
      "INVALID_PATH",
      `${label} must be a file path, not a directory`,
    );
  }
}

function ensureParentDir(filePath: string): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function sqlLiteral(filePath: string): string {
  return `'${filePath.replace(/'/g, "''")}'`;
}

/**
 * Snapshot an open Product DatabaseSync into `destinationPath` via VACUUM INTO.
 * Destination must not already exist. On failure after partial write, destination
 * is left for diagnosis (not deleted) and the error is thrown — never returned as valid.
 */
export function snapshotProductSqliteVacuumInto(
  sourceDb: DatabaseSync,
  sourcePath: string,
  destinationPath: string,
): ProductSqliteSnapshotResult {
  assertAbsoluteSqlitePath("sourcePath", sourcePath);
  assertAbsoluteSqlitePath("destinationPath", destinationPath);
  if (fs.existsSync(destinationPath)) {
    throw new ProductSqliteSnapshotError(
      "DEST_EXISTS",
      `destination already exists: ${destinationPath}`,
    );
  }
  ensureParentDir(destinationPath);
  try {
    sourceDb.exec(`VACUUM INTO ${sqlLiteral(destinationPath)}`);
  } catch (error) {
    throw new ProductSqliteSnapshotError(
      "IO",
      "VACUUM INTO snapshot failed",
      error,
    );
  }
  try {
    verifyProductSqliteIntegrityAtPath(destinationPath);
  } catch (error) {
    // Do not delete destination — leave for diagnosis; do not claim success.
    throw error;
  }
  return {
    method: "vacuum_into",
    sourcePath,
    destinationPath,
    bytes: fs.statSync(destinationPath).size,
  };
}

/**
 * Closed-file copy is intentionally unavailable (CR-S1-01).
 * WAL/SHM absence ≠ quiescence; no unverifiable "sourceClosed" flag is accepted.
 * Use {@link snapshotProductSqliteVacuumInto} instead.
 */
export function snapshotProductSqliteClosedCopy(
  sourcePath: string,
  destinationPath: string,
): ProductSqliteSnapshotResult {
  void sourcePath;
  void destinationPath;
  throw new ProductSqliteSnapshotError(
    "CLOSED_COPY_UNAVAILABLE",
    "closed_copy is not part of the operational snapshot contract (CR-S1-01): " +
      "WAL/SHM absence does not prove source quiescence. Use VACUUM INTO on an open connection.",
  );
}

/**
 * Read-only integrity check — no schema migration, no create-if-missing.
 * Uses node:sqlite `{ readOnly: true }`.
 */
export function verifyProductSqliteIntegrityAtPath(dbPath: string): void {
  assertAbsoluteSqlitePath("dbPath", dbPath);
  if (!fs.existsSync(dbPath)) {
    throw new ProductSqliteSnapshotError(
      "INVALID_PATH",
      `snapshot does not exist: ${dbPath}`,
    );
  }
  let db: DatabaseSync | null = null;
  try {
    db = new DatabaseSync(dbPath, { readOnly: true });
    const integrity = db.prepare("PRAGMA integrity_check").get() as
      | Record<string, string>
      | undefined;
    const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
    if (raw !== "ok") {
      throw new ProductSqliteSnapshotError(
        "INTEGRITY_FAILED",
        `PRAGMA integrity_check failed: ${raw || "(empty)"}`,
      );
    }
  } catch (error) {
    if (error instanceof ProductSqliteSnapshotError) throw error;
    throw new ProductSqliteSnapshotError(
      "INTEGRITY_FAILED",
      `read-only integrity open/check failed: ${dbPath}`,
      error,
    );
  } finally {
    try {
      db?.close();
    } catch {
      /* ignore */
    }
  }
}

/**
 * Restore path: RO integrity verify, then open as Product DB (may migrate schema
 * on the disposable copy only). Does not overwrite `sourcePath`.
 */
export function openRestoredProductSqlite(snapshotPath: string): DatabaseSync {
  verifyProductSqliteIntegrityAtPath(snapshotPath);
  return openProductSqlite(snapshotPath);
}
