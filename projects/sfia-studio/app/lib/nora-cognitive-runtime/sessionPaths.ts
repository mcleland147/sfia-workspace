/**
 * Product-owned Nora Session SQLite path.
 * Sibling of oa-product.sqlite under .sfia-exec/product — NOT Truth C tables.
 */
import fs from "node:fs";
import path from "node:path";

/**
 * Resolve Session DB path. Override: SFIA_STUDIO_NORA_SESSION_DB_PATH.
 * Default: projects/sfia-studio/.sfia-exec/product/nora-session.sqlite
 */
export function resolveNoraSessionSqlitePath(overridePath?: string): string {
  const explicit =
    overridePath?.trim() ||
    process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH?.trim();
  if (explicit) {
    const resolved = path.resolve(explicit);
    ensureDir(path.dirname(resolved));
    assertNotAlienSessionPath(resolved);
    return resolved;
  }

  const studioRoot = path.resolve(process.cwd(), "..");
  const productDir = path.join(studioRoot, ".sfia-exec", "product");
  ensureDir(productDir);
  const dbPath = path.join(productDir, "nora-session.sqlite");
  const execBase = path.resolve(studioRoot, ".sfia-exec");
  if (!dbPath.startsWith(execBase + path.sep)) {
    throw new Error("nora_session_sqlite_path_outside_sfia_exec");
  }
  assertNotAlienSessionPath(dbPath);
  return dbPath;
}

function assertNotAlienSessionPath(dbPath: string): void {
  const base = path.basename(dbPath).toLowerCase();
  if (
    base === "d1.sqlite" ||
    base === "ops1.sqlite" ||
    base === "oa-product.sqlite"
  ) {
    throw new Error("nora_session_sqlite_path_collides_with_truth_c_or_parallel");
  }
  const normalized = dbPath.replace(/\\/g, "/").toLowerCase();
  if (
    normalized.includes("/state/d1.sqlite") ||
    normalized.includes("/ops1/") ||
    normalized.endsWith("/d1.sqlite") ||
    normalized.endsWith("/ops1.sqlite") ||
    normalized.endsWith("/oa-product.sqlite")
  ) {
    throw new Error("nora_session_sqlite_path_collides_with_truth_c_or_parallel");
  }
}

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}
