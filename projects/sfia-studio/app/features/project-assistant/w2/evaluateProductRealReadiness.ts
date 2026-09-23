/**
 * Product Journey REAL readiness preflight (B3+B4) — DETERMINISTIC / ZERO REAL.
 * Read-only checks. Never enables SFIA_STUDIO_CURSOR_REAL. Never spawns Cursor.
 * Never authenticates against Cursor provider.
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { resolveProductSqlitePath } from "@/lib/oa/project/infrastructure/sqlite/paths";
import {
  resolveManagedRepoRootBaseFromEnv,
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
} from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { resolveStudioCursorBinPath } from "@/lib/oa/execution-attempt";

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

export type ProductRealAuthReadiness =
  | "UNKNOWN"
  | "EXTERNAL_PREFLIGHT_REQUIRED";

export type ProductRealReadinessResult = {
  readonly readyForDeterministicPreReal: boolean;
  readonly readyForProductRealExecute: boolean;
  readonly productDb: {
    readonly explicitConfigPresent: boolean;
    readonly resolvedPath: string;
    readonly exists: boolean;
    readonly accessible: boolean;
    readonly expectedProjectFound: boolean | null;
    readonly isDefaultPath: boolean;
  };
  readonly managedRepository: {
    readonly managedRepoRootBaseConfigured: boolean;
    readonly managedRepoRootBase: string | null;
    readonly projectBindingIdentity: string | null;
    readonly resolvedManagedRepoPath: string | null;
    readonly repoExists: boolean;
    readonly pathRoot: string | null;
    readonly pathRootExists: boolean | null;
    readonly defaultBranch: string | null;
    readonly trustedBaseHeadSha: string | null;
  };
  readonly contractReadiness: {
    readonly launchContextResolvable: boolean;
    readonly noProcessCwdFallback: true;
    readonly baseHeadShaFullSha: boolean;
  };
  readonly cursorBinary: {
    readonly configuredOverride: boolean;
    readonly resolvedExecutablePathPresent: boolean;
    /** Server-safe presence only — path may be omitted from UI surfaces. */
    readonly executable: boolean;
    readonly resolvedPath: string | null;
  };
  readonly auth: {
    readonly state: ProductRealAuthReadiness;
    readonly proven: false;
  };
  readonly blockers: readonly string[];
};

function sanitizeIdentity(identity: string): string {
  return identity.replace(/[^a-zA-Z0-9._-]+/g, "__");
}

function projectExistsInSqlite(dbPath: string, projectId: string): boolean {
  // Prefer sqlite3 CLI (no native bundling) — better-sqlite3 is optional.
  try {
    const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
    const out = execFileSync(
      "sqlite3",
      [
        dbPath,
        `SELECT COUNT(*) FROM oa_projects WHERE project_id='${projectId.replace(/'/g, "''")}';`,
      ],
      { encoding: "utf8" },
    ).trim();
    return Number(out) > 0;
  } catch {
    try {
      // Optional native path — may be absent in some studio installs.
      // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
      const Database = require("better-sqlite3") as new (
        path: string,
        opts?: { readonly?: boolean },
      ) => {
        prepare: (sql: string) => { get: (...args: unknown[]) => unknown };
        close: () => void;
      };
      const db = new Database(dbPath, { readonly: true });
      try {
        const row = db
          .prepare("SELECT 1 AS ok FROM oa_projects WHERE project_id = ?")
          .get(projectId) as { ok?: number } | undefined;
        return Boolean(row?.ok);
      } finally {
        db.close();
      }
    } catch {
      return false;
    }
  }
}

export type EvaluateProductRealReadinessInput = {
  readonly env?: NodeJS.ProcessEnv | Record<string, string | undefined>;
  /** When set, verifies project exists in the resolved Product DB. */
  readonly expectedProjectId?: string | null;
  readonly repositoryBindingIdentity?: string | null;
  readonly pathRoot?: string | null;
  readonly defaultBranch?: string | null;
  /** Optional injectable bin resolver (tests). */
  readonly resolveCursorBin?: (
    env: NodeJS.ProcessEnv | Record<string, string | undefined>,
  ) => string | null;
  /** Optional injectable HEAD resolver (tests). */
  readonly resolveBaseHeadSha?: (repoPath: string) =>
    | { ok: true; sha: string }
    | { ok: false; code: string };
};

/**
 * Server-owned Product REAL readiness. Binary readiness ≠ auth ≠ authorization.
 */
export function evaluateProductRealReadiness(
  input: EvaluateProductRealReadinessInput = {},
): ProductRealReadinessResult {
  const env = (input.env ?? process.env) as NodeJS.ProcessEnv;
  const blockers: string[] = [];

  const explicitDb = Boolean(env.SFIA_STUDIO_PRODUCT_DB_PATH?.trim());
  let resolvedPath = "";
  let exists = false;
  let accessible = false;
  try {
    resolvedPath = resolveProductSqlitePath(
      env.SFIA_STUDIO_PRODUCT_DB_PATH?.trim() || undefined,
    );
    exists = fs.existsSync(resolvedPath);
    accessible = exists
      ? (() => {
          try {
            fs.accessSync(resolvedPath, fs.constants.R_OK);
            return true;
          } catch {
            return false;
          }
        })()
      : false;
  } catch (err) {
    blockers.push(
      `PRODUCT_DB_PATH_INVALID:${err instanceof Error ? err.message : String(err)}`,
    );
  }

  const studioDefault = path.resolve(
    path.resolve(process.cwd(), ".."),
    ".sfia-exec",
    "product",
    "oa-product.sqlite",
  );
  const isDefaultPath =
    resolvedPath !== "" &&
    path.resolve(resolvedPath) === path.resolve(studioDefault);

  let expectedProjectFound: boolean | null = null;
  if (input.expectedProjectId && accessible && resolvedPath) {
    expectedProjectFound = projectExistsInSqlite(
      resolvedPath,
      input.expectedProjectId,
    );
    if (!expectedProjectFound) {
      blockers.push(
        explicitDb
          ? "PRODUCT_DB_PROJECT_NOT_FOUND"
          : "PRODUCT_DB_DEFAULT_PROJECT_NOT_FOUND",
      );
    }
  }

  if (!exists) blockers.push("PRODUCT_DB_MISSING");
  else if (!accessible) blockers.push("PRODUCT_DB_INACCESSIBLE");

  const managedBase = resolveManagedRepoRootBaseFromEnv(env) ?? null;
  const managedConfigured = Boolean(managedBase);
  if (!managedConfigured) blockers.push("MANAGED_REPO_ROOT_BASE_UNCONFIGURED");

  const identity = input.repositoryBindingIdentity?.trim() || null;
  let resolvedManagedRepoPath: string | null = null;
  let repoExists = false;
  if (managedBase && identity) {
    resolvedManagedRepoPath = path.join(managedBase, sanitizeIdentity(identity));
    repoExists = fs.existsSync(path.join(resolvedManagedRepoPath, ".git"));
    if (!repoExists) blockers.push("MANAGED_REPO_ABSENT");
  } else if (managedConfigured && !identity) {
    blockers.push("REPOSITORY_BINDING_IDENTITY_REQUIRED");
  }

  const pathRoot = input.pathRoot?.trim() || null;
  let pathRootExists: boolean | null = null;
  if (pathRoot && resolvedManagedRepoPath && repoExists) {
    pathRootExists = fs.existsSync(path.join(resolvedManagedRepoPath, pathRoot));
    if (!pathRootExists) blockers.push("PROJECT_PATH_ROOT_ABSENT");
  } else if (pathRoot && (!resolvedManagedRepoPath || !repoExists)) {
    pathRootExists = false;
  }

  let trustedBaseHeadSha: string | null = null;
  let baseHeadShaFullSha = false;
  if (resolvedManagedRepoPath && repoExists) {
    const resolve =
      input.resolveBaseHeadSha ??
      ((repoPath: string) => {
        try {
          const sha = execFileSync("git", ["rev-parse", "HEAD"], {
            cwd: repoPath,
            encoding: "utf8",
          }).trim();
          if (!FULL_SHA_RE.test(sha)) {
            return { ok: false as const, code: "BASE_HEAD_SHA_INVALID" };
          }
          return { ok: true as const, sha };
        } catch {
          return { ok: false as const, code: "BASE_HEAD_SHA_UNRESOLVED" };
        }
      });
    const head = resolve(resolvedManagedRepoPath);
    if (head.ok && FULL_SHA_RE.test(head.sha)) {
      trustedBaseHeadSha = head.sha;
      baseHeadShaFullSha = true;
    } else {
      blockers.push(
        head.ok ? "TRUSTED_BASE_HEAD_SHA_INVALID" : `TRUSTED_BASE_HEAD_SHA:${head.code}`,
      );
    }
  }

  const launchContextResolvable = Boolean(
    identity &&
      trustedBaseHeadSha &&
      baseHeadShaFullSha &&
      managedConfigured &&
      repoExists &&
      (pathRoot == null || pathRootExists === true),
  );
  if (!launchContextResolvable && !blockers.includes("MANAGED_REPO_ROOT_BASE_UNCONFIGURED")) {
    if (!blockers.some((b) => b.startsWith("TRUSTED_BASE_HEAD") || b.includes("MANAGED") || b.includes("PATH_ROOT") || b.includes("BINDING"))) {
      blockers.push("LAUNCH_CONTEXT_NOT_RESOLVABLE");
    }
  }

  const configuredOverride = Boolean(env.SFIA_CURSOR_BIN?.trim());
  const resolveBin =
    input.resolveCursorBin ??
    ((e: NodeJS.ProcessEnv | Record<string, string | undefined>) =>
      resolveStudioCursorBinPath(e as NodeJS.ProcessEnv));
  const binPath = resolveBin(env);
  const executable = Boolean(binPath);
  if (!executable) blockers.push("CURSOR_BINARY_UNAVAILABLE");

  const authState: ProductRealAuthReadiness = "EXTERNAL_PREFLIGHT_REQUIRED";

  const readyForDeterministicPreReal =
    exists &&
    accessible &&
    (expectedProjectFound === null || expectedProjectFound === true) &&
    managedConfigured &&
    repoExists &&
    (pathRoot == null || pathRootExists === true) &&
    baseHeadShaFullSha &&
    executable;

  // Product REAL execute also requires auth external preflight — never claimed here.
  const readyForProductRealExecute = false;

  return {
    readyForDeterministicPreReal,
    readyForProductRealExecute,
    productDb: {
      explicitConfigPresent: explicitDb,
      resolvedPath,
      exists,
      accessible,
      expectedProjectFound,
      isDefaultPath,
    },
    managedRepository: {
      managedRepoRootBaseConfigured: managedConfigured,
      managedRepoRootBase: managedBase,
      projectBindingIdentity: identity,
      resolvedManagedRepoPath,
      repoExists,
      pathRoot,
      pathRootExists,
      defaultBranch: input.defaultBranch?.trim() || null,
      trustedBaseHeadSha,
    },
    contractReadiness: {
      launchContextResolvable,
      noProcessCwdFallback: true,
      baseHeadShaFullSha,
    },
    cursorBinary: {
      configuredOverride,
      resolvedExecutablePathPresent: executable,
      executable,
      resolvedPath: binPath,
    },
    auth: {
      state: authState,
      proven: false,
    },
    blockers,
  };
}

export { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV };
