/**
 * STUDIO-RUNTIME-BOOTSTRAP-PROFILE-01
 * Server-owned Product local runtime profile preflight.
 *
 * Reuses existing resolvers only — no parallel config system.
 * Does NOT spawn Cursor. Does NOT create ExecutionAttempt.
 * Does NOT enable REAL. Does NOT print secrets.
 */
import { existsSync } from "node:fs";
import path from "node:path";
import {
  describeServerOwnedRepositoryConfigGap,
  resolveServerOwnedRepositoryConfig,
  SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH_ENV,
  SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV,
  SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV,
} from "@/lib/oa/project/domain/serverOwnedRepositoryConfig";
import {
  isM3LocalAuthorityEnabled,
  M3_LOCAL_AUTHORITY_ENV,
} from "@/lib/oa/decision/infrastructure/localSingleUserAuthority";
import {
  resolveManagedRepoRootBaseFromEnv,
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
} from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  assertDeterministicAndRealMutuallyExclusive,
  DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE,
  SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG,
} from "@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary";
import { composeStudioProductRealBoundary } from "@/lib/vertical-slice-runtime/composeStudioProductRealBoundary";
import {
  isStudioCursorRealEnabled,
  ManagedProjectRepositoryResolver,
  sanitizeManagedRepoIdentity,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
} from "@/lib/oa/execution-attempt";

export const STUDIO_RUNTIME_PROFILE_NOT_READY =
  "STUDIO RUNTIME PROFILE NOT READY" as const;

export type StudioRuntimeCursorRealMode = "READY" | "OFF";

export type StudioRuntimeProfilePreflightSections = {
  readonly repository: "PASS" | "FAIL";
  readonly authority: "PASS" | "FAIL";
  readonly managedRepository: "PASS" | "FAIL";
  readonly cursorReal: StudioRuntimeCursorRealMode;
  readonly deterministicRealExclusive: "PASS" | "FAIL";
};

export type StudioRuntimeProfilePreflightResult =
  | {
      readonly ok: true;
      readonly sections: StudioRuntimeProfilePreflightSections;
      readonly managedRepoRoot: string;
      readonly managedClonePath: string;
      readonly repositoryIdentity: string;
      readonly cursorReal: StudioRuntimeCursorRealMode;
      readonly realBoundaryConstructed: boolean;
    }
  | {
      readonly ok: false;
      readonly code: typeof STUDIO_RUNTIME_PROFILE_NOT_READY;
      readonly message: string;
      readonly blockers: readonly string[];
      readonly sections: StudioRuntimeProfilePreflightSections;
    };

export type StudioRuntimeProfilePreflightInput = {
  readonly env?: NodeJS.ProcessEnv | Record<string, string | undefined>;
  /**
   * When false, skip managed-clone filesystem presence (unit tests of config
   * parsing only). Default true for Product local startup.
   */
  readonly requireManagedClonePresent?: boolean;
  /**
   * When REAL=OFF, optionally assert composeStudioProductRealBoundary returns
   * undefined (no REAL wiring). Default true.
   */
  readonly assertRealOffConstructsNothing?: boolean;
};

function pushUnique(blockers: string[], code: string): void {
  if (!blockers.includes(code)) blockers.push(code);
}

/**
 * Fail-closed Product local runtime profile check.
 * Cursor launch count remains 0 — read-only filesystem + env resolvers only.
 */
export function runStudioRuntimeProfilePreflight(
  input: StudioRuntimeProfilePreflightInput = {},
): StudioRuntimeProfilePreflightResult {
  const env = input.env ?? process.env;
  const requireManagedClone = input.requireManagedClonePresent !== false;
  const assertRealOff = input.assertRealOffConstructsNothing !== false;
  const blockers: string[] = [];

  // --- Deterministic ⊕ REAL mutual exclusion (canonical rule only) ---
  let deterministicRealExclusive: "PASS" | "FAIL" = "PASS";
  try {
    assertDeterministicAndRealMutuallyExclusive(env as NodeJS.ProcessEnv);
  } catch (err) {
    deterministicRealExclusive = "FAIL";
    const msg = err instanceof Error ? err.message : String(err);
    pushUnique(
      blockers,
      msg === DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE
        ? "DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE"
        : `DETERMINISTIC_REAL_EXCLUSIVE:${msg}`,
    );
  }

  // --- Repository (server-owned) ---
  const repo = resolveServerOwnedRepositoryConfig(env);
  let repository: "PASS" | "FAIL" = "PASS";
  if (!repo) {
    repository = "FAIL";
    const gap = describeServerOwnedRepositoryConfigGap(env);
    if (!(env[SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV]?.trim())) {
      pushUnique(blockers, "REPOSITORY_IDENTITY_MISSING");
    } else if (
      !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(
        env[SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV]!.trim(),
      )
    ) {
      pushUnique(blockers, "REPOSITORY_IDENTITY_INVALID");
    }
    if (!(env[SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV]?.trim())) {
      pushUnique(blockers, "REPOSITORY_REMOTE_MISSING");
    } else {
      const remote = env[SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV]!.trim();
      if (!remote.startsWith("https://") && !remote.startsWith("git@")) {
        pushUnique(blockers, "REPOSITORY_REMOTE_INVALID");
      }
    }
    if (blockers.every((b) => !b.startsWith("REPOSITORY_"))) {
      pushUnique(blockers, `REPOSITORY_CONFIG_GAP:${gap}`);
    }
  }

  // --- Local single-user authority (TEMPORARY WITH EXIT) ---
  let authority: "PASS" | "FAIL" = "PASS";
  if (!isM3LocalAuthorityEnabled(env as NodeJS.ProcessEnv)) {
    authority = "FAIL";
    pushUnique(blockers, "LOCAL_AUTHORITY_NOT_CONFIGURED");
  }

  // --- Managed repository base + expected clone ---
  let managedRepository: "PASS" | "FAIL" = "PASS";
  const managedRoot = resolveManagedRepoRootBaseFromEnv(env);
  let managedClonePath = "";
  if (!managedRoot) {
    managedRepository = "FAIL";
    pushUnique(blockers, "MANAGED_REPO_ROOT_BASE_UNCONFIGURED");
  } else if (!path.isAbsolute(managedRoot)) {
    managedRepository = "FAIL";
    pushUnique(blockers, "MANAGED_REPO_ROOT_BASE_NOT_ABSOLUTE");
  } else if (requireManagedClone) {
    if (!existsSync(managedRoot)) {
      managedRepository = "FAIL";
      pushUnique(blockers, "MANAGED_REPO_ROOT_BASE_ABSENT");
    } else if (repo) {
      let sanitized: string;
      try {
        sanitized = sanitizeManagedRepoIdentity(repo.identity);
      } catch {
        managedRepository = "FAIL";
        pushUnique(blockers, "MANAGED_REPO_IDENTITY_INVALID");
        sanitized = "";
      }
      if (sanitized) {
        const expected = path.join(managedRoot, sanitized);
        const resolver = new ManagedProjectRepositoryResolver();
        const resolved = resolver.resolveLocalRepoRoot(
          { identity: repo.identity },
          managedRoot,
        );
        if (!resolved) {
          managedRepository = "FAIL";
          pushUnique(
            blockers,
            `MANAGED_REPO_ABSENT:expected=${expected}`,
          );
        } else {
          managedClonePath = resolved;
        }
      }
    }
  }

  // --- Cursor REAL mode (OFF-by-default; display only) ---
  const cursorReal: StudioRuntimeCursorRealMode = isStudioCursorRealEnabled(
    env as NodeJS.ProcessEnv,
  )
    ? "READY"
    : "OFF";

  let realBoundaryConstructed = false;
  if (deterministicRealExclusive === "PASS") {
    if (cursorReal === "OFF" && assertRealOff) {
      const wiring = composeStudioProductRealBoundary({
        env: env as NodeJS.ProcessEnv,
      });
      if (wiring !== undefined) {
        pushUnique(blockers, "REAL_OFF_BUT_BOUNDARY_PRESENT");
      }
      realBoundaryConstructed = wiring !== undefined;
    } else if (cursorReal === "READY") {
      // Flag READY — do NOT launch; construction check is optional and avoided
      // here to keep preflight side-effect free (no safety DB / worktree mkdir).
      realBoundaryConstructed = false;
    }
  }

  const sections: StudioRuntimeProfilePreflightSections = {
    repository,
    authority,
    managedRepository,
    cursorReal,
    deterministicRealExclusive,
  };

  if (blockers.length > 0) {
    return {
      ok: false,
      code: STUDIO_RUNTIME_PROFILE_NOT_READY,
      message: `${STUDIO_RUNTIME_PROFILE_NOT_READY}\n- ${blockers.join("\n- ")}`,
      blockers,
      sections,
    };
  }

  return {
    ok: true,
    sections,
    managedRepoRoot: managedRoot!,
    managedClonePath,
    repositoryIdentity: repo!.identity,
    cursorReal,
    realBoundaryConstructed,
  };
}

/** Keys documented for Product local profile (non-secret). */
export const STUDIO_RUNTIME_PROFILE_ENV_KEYS = [
  SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV,
  SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV,
  SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH_ENV,
  M3_LOCAL_AUTHORITY_ENV,
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
  SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG,
] as const;
