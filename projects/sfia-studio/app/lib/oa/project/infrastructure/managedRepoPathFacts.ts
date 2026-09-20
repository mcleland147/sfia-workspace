/**
 * Read-only managed-repo path facts for Product workspace routing.
 *
 * Reuses ManagedProjectRepositoryResolver + local filesystem probes.
 * NOT a second repository inspection engine. ZERO network. No writes.
 *
 * Returns null when the managed clone / base is unavailable (unknown fact → ASK).
 */
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import {
  ManagedProjectRepositoryResolver,
  sanitizeManagedRepoIdentity,
} from "@/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver";
import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { normalizeArtifactRepoRelativePath } from "@/lib/oa/project/domain/artifactTargetRouting";

const resolver = new ManagedProjectRepositoryResolver();

function resolveRepoRoot(input: {
  identity: string;
  managedRepoRootBase?: string | null;
}): string | null {
  const base =
    (typeof input.managedRepoRootBase === "string" &&
    input.managedRepoRootBase.trim()
      ? path.resolve(input.managedRepoRootBase.trim())
      : null) ?? resolveManagedRepoRootBaseFromEnv() ?? null;
  if (!base) return null;
  return resolver.resolveLocalRepoRoot({ identity: input.identity }, base);
}

/**
 * Probe whether a repo-relative path exists as a file (or directory) under the
 * managed clone. null = unknown (no managed base / clone missing).
 */
export function probeManagedRepoRelativePathExists(input: {
  identity: string;
  repoRelativePath: string;
  managedRepoRootBase?: string | null;
}): boolean | null {
  const rel = normalizeArtifactRepoRelativePath(input.repoRelativePath);
  if (!rel) return null;
  const repoRoot = resolveRepoRoot(input);
  if (!repoRoot) return null;
  const abs = path.resolve(repoRoot, rel);
  if (abs !== repoRoot && !abs.startsWith(repoRoot + path.sep)) return null;
  return existsSync(abs);
}

/**
 * List existing repo-relative paths under a project workspace root (shallow walk).
 * null = unknown. Empty array = root absent.
 */
export function listManagedRepoPathsUnderRoot(input: {
  identity: string;
  pathRoot: string;
  managedRepoRootBase?: string | null;
  maxEntries?: number;
}): string[] | null {
  const root = normalizeArtifactRepoRelativePath(input.pathRoot);
  if (!root) return null;
  const repoRoot = resolveRepoRoot(input);
  if (!repoRoot) return null;
  const absRoot = path.resolve(repoRoot, root);
  if (absRoot !== repoRoot && !absRoot.startsWith(repoRoot + path.sep)) {
    return null;
  }
  if (!existsSync(absRoot)) return [];
  const max = input.maxEntries ?? 256;
  const out: string[] = [root];
  const walk = (absDir: string, relDir: string) => {
    if (out.length >= max) return;
    let entries: string[];
    try {
      entries = readdirSync(absDir);
    } catch {
      return;
    }
    for (const name of entries) {
      if (out.length >= max) return;
      if (name === ".git") continue;
      const absChild = path.join(absDir, name);
      const relChild = `${relDir}/${name}`;
      out.push(relChild);
      try {
        if (statSync(absChild).isDirectory()) walk(absChild, relChild);
      } catch {
        /* skip */
      }
    }
  };
  try {
    if (statSync(absRoot).isDirectory()) walk(absRoot, root);
  } catch {
    /* file at root — already recorded */
  }
  return out;
}

/** Test helper: ensure a managed clone skeleton exists (git dir marker only). */
export function ensureManagedRepoCloneSkeleton(input: {
  managedRepoRootBase: string;
  identity: string;
}): string {
  const base = path.resolve(input.managedRepoRootBase);
  const sanitized = sanitizeManagedRepoIdentity(input.identity);
  const repoRoot = path.join(base, sanitized);
  const gitDir = path.join(repoRoot, ".git");
  if (!existsSync(gitDir)) {
    mkdirSync(gitDir, { recursive: true });
  }
  return repoRoot;
}
