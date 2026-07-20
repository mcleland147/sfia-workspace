import fs from "node:fs";
import path from "node:path";
import { Ops1Error } from "./errors";

/**
 * Runtime root under projects/sfia-studio/.sfia-exec/**
 * Override for tests: OPS1_EXEC_ROOT (absolute path under a temp dir).
 */
export function resolveOps1ExecRoot(): string {
  const override = process.env.OPS1_EXEC_ROOT?.trim();
  if (override) {
    const resolved = path.resolve(override);
    ensureDir(resolved);
    return resolved;
  }

  // app/ -> sfia-studio/
  const studioRoot = path.resolve(process.cwd(), "..");
  const execRoot = path.join(studioRoot, ".sfia-exec", "local-i1");
  ensureDir(execRoot);
  assertUnderSfiaExec(studioRoot, execRoot);
  return execRoot;
}

export function resolveOps1SqlitePath(execRoot = resolveOps1ExecRoot()): string {
  const stateDir = path.join(execRoot, "state");
  ensureDir(stateDir);
  const dbPath = path.join(stateDir, "ops1.sqlite");
  assertUnderSfiaExec(path.resolve(execRoot, "..", ".."), path.dirname(dbPath));
  return dbPath;
}

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

function assertUnderSfiaExec(studioRoot: string, candidate: string): void {
  const execBase = path.resolve(studioRoot, ".sfia-exec");
  const resolved = path.resolve(candidate);
  if (process.env.OPS1_EXEC_ROOT) {
    // Test override: must stay under the override root
    const root = path.resolve(process.env.OPS1_EXEC_ROOT);
    if (!resolved.startsWith(root + path.sep) && resolved !== root) {
      throw new Ops1Error("PERSISTENCE", "Chemin SQLite hors racine autorisée.");
    }
    return;
  }
  if (!resolved.startsWith(execBase + path.sep) && resolved !== execBase) {
    throw new Ops1Error("PERSISTENCE", "Chemin SQLite hors .sfia-exec.");
  }
}
