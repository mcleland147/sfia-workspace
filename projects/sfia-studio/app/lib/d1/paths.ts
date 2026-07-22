import fs from "node:fs";
import path from "node:path";
import { D1Error } from "./errors";

/**
 * D1 SQLite lives beside OPS1 under .sfia-exec — separate file to avoid
 * colliding with OPS1 migrations. Override: D1_SQLITE_PATH or OPS1_EXEC_ROOT.
 */
export function resolveD1SqlitePath(): string {
  const explicit = process.env.D1_SQLITE_PATH?.trim();
  if (explicit) {
    const resolved = path.resolve(explicit);
    ensureDir(path.dirname(resolved));
    return resolved;
  }

  const override = process.env.OPS1_EXEC_ROOT?.trim();
  if (override) {
    const stateDir = path.join(path.resolve(override), "state");
    ensureDir(stateDir);
    return path.join(stateDir, "d1.sqlite");
  }

  const studioRoot = path.resolve(process.cwd(), "..");
  const stateDir = path.join(studioRoot, ".sfia-exec", "local-i1", "state");
  ensureDir(stateDir);
  const dbPath = path.join(stateDir, "d1.sqlite");
  const execBase = path.resolve(studioRoot, ".sfia-exec");
  if (!dbPath.startsWith(execBase + path.sep)) {
    throw new D1Error("PERSISTENCE", "Chemin SQLite D1 hors .sfia-exec.");
  }
  return dbPath;
}

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}
