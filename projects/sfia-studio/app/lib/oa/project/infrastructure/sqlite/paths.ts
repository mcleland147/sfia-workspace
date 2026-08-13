import fs from "node:fs";
import path from "node:path";

/**
 * OA Product SQLite path — isolated from D1 / OPS1 / FinOps.
 * Override: SFIA_STUDIO_PRODUCT_DB_PATH
 * Default: projects/sfia-studio/.sfia-exec/product/oa-product.sqlite
 */
export function resolveProductSqlitePath(
  overridePath?: string,
): string {
  const explicit =
    overridePath?.trim() || process.env.SFIA_STUDIO_PRODUCT_DB_PATH?.trim();
  if (explicit) {
    const resolved = path.resolve(explicit);
    ensureDir(path.dirname(resolved));
    assertNotAlienProductPath(resolved);
    return resolved;
  }

  // app cwd is typically projects/sfia-studio/app → studio root is parent
  const studioRoot = path.resolve(process.cwd(), "..");
  const productDir = path.join(studioRoot, ".sfia-exec", "product");
  ensureDir(productDir);
  const dbPath = path.join(productDir, "oa-product.sqlite");
  const execBase = path.resolve(studioRoot, ".sfia-exec");
  if (!dbPath.startsWith(execBase + path.sep)) {
    throw new Error("product_sqlite_path_outside_sfia_exec");
  }
  assertNotAlienProductPath(dbPath);
  return dbPath;
}

function assertNotAlienProductPath(dbPath: string): void {
  const base = path.basename(dbPath).toLowerCase();
  if (base === "d1.sqlite" || base === "ops1.sqlite") {
    throw new Error("product_sqlite_path_collides_with_parallel_engine");
  }
  const normalized = dbPath.replace(/\\/g, "/").toLowerCase();
  if (
    normalized.includes("/state/d1.sqlite") ||
    normalized.includes("/ops1/") ||
    normalized.endsWith("/d1.sqlite") ||
    normalized.endsWith("/ops1.sqlite")
  ) {
    throw new Error("product_sqlite_path_collides_with_parallel_engine");
  }
}

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}
