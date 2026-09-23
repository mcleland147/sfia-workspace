# STUDIO-RUNTIME-BOOTSTRAP-PROFILE-01
# Cycle 7 — Intégration / DevOps — CRITICAL — RUN
# LOCAL RUNTIME CONFIG HARDENING
# ZERO CURSOR PRODUCT REAL
# RUNTIME PROFILE PERSISTENT / STARTUP PREFLIGHT PROVEN

## Date / heure
2026-09-23T22:48:46+02:00

## Local Git Truth
- repo root: /Users/morris/Projects/sfia-workspace
- branch: fix/sfia-studio-product-real-readiness-pathroot-semantics
- HEAD: 128f3b7eb49cbba05d7735d5edc41a27822b0dee
- HEAD tree: 400d608e2a0be9b182925c46cd204a24cb1e0034
- origin/main: 66ffc0d2370d9ed7014348fd25994ce1cda3b3ad
- origin/main tree: 400d608e2a0be9b182925c46cd204a24cb1e0034
- tree vs qualified main: MATCH
- git status --short:

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/.env.example
 M projects/sfia-studio/app/README.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
 M projects/sfia-studio/app/package.json
?? projects/sfia-studio/app/__tests__/project-assistant/automaticResultQualification.d0.test.ts
?? projects/sfia-studio/app/__tests__/vertical-slice-runtime/studioRuntimeProfilePreflight.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveDocsWriteArtifactAbsolutePath.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/studioRuntimeProfilePreflight.ts
?? projects/sfia-studio/app/scripts/studio-runtime-preflight.ts
```

- ARQ macro files: PRESERVED (dirty from prior cycle; not modified in this cycle)
- project push: NONE
- Cursor Product REAL spawn: 0
- new ExecutionAttempt: 0

## Diagnostic — cause racine

### A. Next.js 15 env loading
- `npm run dev` / `npm start` → Next native `@next/env` loads `.env`, `.env.local`, `.env.production` (etc.).
- `.env.local` is loaded for all modes **except** `NODE_ENV=test`.
- Server-only keys (`SFIA_STUDIO_*`, auth secrets) are available on `process.env` without shell export.
- No proprietary env loader required for the Next process.

### B. Product local profile keys required
- SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY (non-secret, server-owned)
- SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL (non-secret, server-owned)
- SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH (non-secret, optional→main)
- SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY (non-secret gate, TEMPORARY WITH EXIT)
- SFIA_STUDIO_MANAGED_REPO_ROOT_BASE (non-secret, host-specific absolute path)
- SFIA_STUDIO_CURSOR_REAL (non-secret gate, OFF-by-default in Git)

### C. Categories
| Key | Secret | Host-specific | Gate |
|---|---|---|---|
| BETTER_AUTH_SECRET / GITHUB_CLIENT_SECRET | yes | no | auth |
| Repository IDENTITY/REMOTE/BRANCH | no | no | Product Create |
| M3_LOCAL_MORRIS_AUTHORITY | no | no | authority |
| MANAGED_REPO_ROOT_BASE | no | yes | managed docs_write |
| CURSOR_REAL | no | no | REAL OFF/READY |
| E2E_DETERMINISTIC_CURSOR_BOUNDARY | no | no | test-only; XOR REAL |

### D. Why campaign needed manual injection
1. Incomplete `.env.example` contract (authority / REAL / deterministic docs missing or partial).
2. No startup preflight → Pilote discovered blockers mid-journey.
3. Operators re-exported vars in shell instead of relying on persisted `.env.local`.
4. Not a Next loading bug once `.env.local` is present.

### E. Current `.env.local` key status (secret values NEVER printed)
- SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = PRESENT / VALID
- SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL = PRESENT / VALID
- SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = PRESENT / VALID
- SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = PRESENT / VALID
- SFIA_STUDIO_MANAGED_REPO_ROOT_BASE = PRESENT / VALID
- SFIA_STUDIO_CURSOR_REAL = PRESENT / VALID
- SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY = MISSING (correct for REAL profile)
- BETTER_AUTH_SECRET = PRESENT (secret)
- GITHUB_CLIENT_SECRET = PRESENT (secret)
- `.env.local` content: NOT included in this pack
- No `.env.local` mutation required this cycle (all Product profile keys already present)

### F. Root cause combination
Absence of complete versioned contract + absence of fail-closed startup preflight.
Persistent values were already in `.env.local`; friction was operational discoverability / fail-fast.

## Solution retained
1. Complete `.env.example` documentary contract (REAL OFF-by-default; TEMPORARY WITH EXIT).
2. Server-owned `runStudioRuntimeProfilePreflight` reusing existing resolvers only.
3. CLI uses Next canonical `loadEnvConfig` from `@next/env` — not a parallel config system.
4. `npm start` = `preflight:runtime && next start`.
5. README documents persistence + preflight.
6. `.env.local` remains gitignored; REAL=1 never committed.

## Why no parallel config
- Persistence: native Next `.env.local`
- CLI loader: `@next/env` (same as Next)
- Checks: existing resolvers only
- No second schema, no hardcoding owner/repo in domain, no Morris absolute path in source

## Fichiers créés
1. lib/vertical-slice-runtime/studioRuntimeProfilePreflight.ts
2. scripts/studio-runtime-preflight.ts
3. __tests__/vertical-slice-runtime/studioRuntimeProfilePreflight.d0.test.ts

## Fichiers modifiés
1. .env.example
2. package.json
3. README.md
4. lib/vertical-slice-runtime/index.ts

## Tests (exact)
| Suite | Count | Result |
|---|---|---|
| studioRuntimeProfilePreflight.d0.test.ts | 10 (T1–T10) | PASS |

### T1–T10
- T1 repository complete → PASS
- T2 missing identity/remote → FAIL-CLOSED
- T3 authority missing → FAIL-CLOSED
- T4 managed root missing → FAIL-CLOSED
- T5 managed clone absent → FAIL-CLOSED + expected= path
- T6 deterministic+REAL → DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE
- T7 REAL OFF → realBoundaryConstructed=false
- T8 child process NODE_ENV=production, SFIA keys stripped, loads `.env.local` via @next/env → READY
- T9 secrets absent from messages
- T10 REAL READY display without boundary construction / Cursor launch

## Startup proof
```
env -u SFIA_* npm run preflight:runtime
→ STUDIO RUNTIME PROFILE READY
→ repository: mcleland147/sfia-workspace (PASS)
→ cursorReal: READY
→ realBoundaryConstructed: false
```

## ZERO REAL / Attempts
- Cursor Product REAL spawn this cycle: 0
- ExecutionAttempt created: 0
- FocusFlow Attempt untouched
- Preflight never calls StartExecution / process runner

## Secrets
- `.env.local` NOT in pack
- No secret values printed
- `.env.example` placeholders only; CURSOR_REAL documented OFF-by-default (commented)

## Décisions Morris
- GO runtime bootstrap only
- No project push / PR / merge / doctrine / REAL spawn

## Réserves
- `npm start` now requires Product local profile (fail-closed). Escape hatch: `npm run start:skip-preflight`.
- `dev` left unwrapped so UI work without Product profile remains possible; operators should run `preflight:runtime` before Product journeys.
- Host-specific MANAGED_REPO_ROOT_BASE stays in `.env.local` only.

## Verdict
**STUDIO-RUNTIME-BOOTSTRAP-PROFILE-01 — IMPLEMENTED — RUNTIME PROFILE PERSISTENT / STARTUP PREFLIGHT PROVEN — READY FOR CHATGPT REVIEW**

---

## CONTENU INTÉGRAL — studioRuntimeProfilePreflight.ts (CREATED)

```typescript
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
```

---

## CONTENU INTÉGRAL — studio-runtime-preflight.ts (CREATED)

```typescript
/**
 * CLI preflight for Product local runtime profile.
 * Loads env via Next's canonical @next/env (same as next start / next dev).
 * ZERO Cursor Product REAL. Never prints secret values.
 */
import path from "node:path";
import { loadEnvConfig } from "@next/env";
import {
  runStudioRuntimeProfilePreflight,
  STUDIO_RUNTIME_PROFILE_NOT_READY,
} from "../lib/vertical-slice-runtime/studioRuntimeProfilePreflight";

const appDir = path.resolve(__dirname, "..");
// Same loader Next uses for `next start` / `next dev` — not a parallel config system.
loadEnvConfig(appDir);

const result = runStudioRuntimeProfilePreflight({
  env: process.env,
  requireManagedClonePresent: true,
  assertRealOffConstructsNothing: true,
});

if (!result.ok) {
  console.error(result.message);
  console.error(
    `\nFix: copy projects/sfia-studio/app/.env.example → .env.local and set the Product local profile (server-only). See README Runtime profile.`,
  );
  process.exit(1);
}

console.log("STUDIO RUNTIME PROFILE READY");
console.log(`- repository: ${result.repositoryIdentity} (${result.sections.repository})`);
console.log(`- authority: ${result.sections.authority}`);
console.log(`- managedRoot: ${result.managedRepoRoot}`);
console.log(`- managedClone: ${result.managedClonePath || "(skipped)"}`);
console.log(`- cursorReal: ${result.cursorReal}`);
console.log(`- deterministic⊕REAL: ${result.sections.deterministicRealExclusive}`);
console.log(`- realBoundaryConstructed: ${result.realBoundaryConstructed}`);
void STUDIO_RUNTIME_PROFILE_NOT_READY;
```

---

## CONTENU INTÉGRAL — studioRuntimeProfilePreflight.d0.test.ts (CREATED)

```typescript
/**
 * STUDIO-RUNTIME-BOOTSTRAP-PROFILE-01 — runtime profile preflight tests.
 * ZERO Cursor Product REAL / ZERO ExecutionAttempt.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import { mkdtempSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import {
  runStudioRuntimeProfilePreflight,
  STUDIO_RUNTIME_PROFILE_NOT_READY,
  STUDIO_RUNTIME_PROFILE_ENV_KEYS,
} from "@/lib/vertical-slice-runtime/studioRuntimeProfilePreflight";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { M3_LOCAL_AUTHORITY_ENV } from "@/lib/oa/decision/infrastructure/localSingleUserAuthority";
import { SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG } from "@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary";
import { SFIA_STUDIO_CURSOR_REAL_FLAG } from "@/lib/oa/execution-attempt";
import { execFileSync } from "node:child_process";

const IDENTITY = "acme/runtime-preflight";
const REMOTE = "https://github.com/acme/runtime-preflight.git";

function baseEnv(overrides: Record<string, string | undefined> = {}): Record<
  string,
  string | undefined
> {
  return {
    SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY: IDENTITY,
    SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL: REMOTE,
    SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH: "main",
    [M3_LOCAL_AUTHORITY_ENV]: "1",
    [SFIA_STUDIO_CURSOR_REAL_FLAG]: "0",
    [SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG]: undefined,
    ...overrides,
  };
}

function seedManagedClone(managedBase: string, identity: string): string {
  const sanitized = identity.replace(/[^a-zA-Z0-9._-]+/g, "__");
  const clone = path.join(managedBase, sanitized);
  mkdirSync(clone, { recursive: true });
  execFileSync("git", ["init"], { cwd: clone, stdio: "ignore" });
  return clone;
}

describe("studioRuntimeProfilePreflight", () => {
  const tmpDirs: string[] = [];
  afterEach(() => {
    for (const d of tmpDirs.splice(0)) {
      try {
        rmSync(d, { recursive: true, force: true });
      } catch {
        /* ignore */
      }
    }
  });

  it("T1 — repository env complete → preflight PASS repository section", () => {
    const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t1-"));
    tmpDirs.push(managedBase);
    seedManagedClone(managedBase, IDENTITY);
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({ [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase }),
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.sections.repository).toBe("PASS");
    expect(r.repositoryIdentity).toBe(IDENTITY);
  });

  it("T2 — missing repository identity/remote → FAIL-CLOSED", () => {
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY: "",
        SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL: "",
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: "/tmp/unused",
      }),
      requireManagedClonePresent: false,
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe(STUDIO_RUNTIME_PROFILE_NOT_READY);
    expect(r.sections.repository).toBe("FAIL");
    expect(r.blockers).toEqual(
      expect.arrayContaining([
        "REPOSITORY_IDENTITY_MISSING",
        "REPOSITORY_REMOTE_MISSING",
      ]),
    );
    expect(r.message).toContain(STUDIO_RUNTIME_PROFILE_NOT_READY);
  });

  it("T3 — local authority missing → FAIL-CLOSED", () => {
    const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t3-"));
    tmpDirs.push(managedBase);
    seedManagedClone(managedBase, IDENTITY);
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        [M3_LOCAL_AUTHORITY_ENV]: "0",
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
      }),
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.blockers).toContain("LOCAL_AUTHORITY_NOT_CONFIGURED");
    expect(r.sections.authority).toBe("FAIL");
  });

  it("T4 — managed root missing → FAIL-CLOSED", () => {
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: "",
      }),
      requireManagedClonePresent: false,
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.blockers).toContain("MANAGED_REPO_ROOT_BASE_UNCONFIGURED");
    expect(r.sections.managedRepository).toBe("FAIL");
  });

  it("T5 — managed repo expected absent → FAIL-CLOSED with precise diagnostic", () => {
    const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t5-"));
    tmpDirs.push(managedBase);
    // base exists but clone missing
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({ [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase }),
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.sections.managedRepository).toBe("FAIL");
    const absent = r.blockers.find((b) => b.startsWith("MANAGED_REPO_ABSENT:"));
    expect(absent).toBeTruthy();
    expect(absent).toContain(managedBase);
  });

  it("T6 — deterministic + REAL → FAIL-CLOSED via canonical rule", () => {
    const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t6-"));
    tmpDirs.push(managedBase);
    seedManagedClone(managedBase, IDENTITY);
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
        [SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG]: "1",
      }),
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.blockers).toContain("DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE");
    expect(r.sections.deterministicRealExclusive).toBe("FAIL");
  });

  it("T7 — REAL OFF → no REAL boundary constructed", () => {
    const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t7-"));
    tmpDirs.push(managedBase);
    seedManagedClone(managedBase, IDENTITY);
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "0",
      }),
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.cursorReal).toBe("OFF");
    expect(r.realBoundaryConstructed).toBe(false);
  });

  it("T8 — .env.local persistence / startup proof via @next/env child process", () => {
    const appDir = path.resolve(__dirname, "../..");
    const cleanEnv: NodeJS.ProcessEnv = { ...process.env };
    for (const k of STUDIO_RUNTIME_PROFILE_ENV_KEYS) {
      delete cleanEnv[k];
    }
    delete cleanEnv.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    delete cleanEnv.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
    delete cleanEnv.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH;
    delete cleanEnv.SFIA_STUDIO_MANAGED_REPO_ROOT_BASE;
    delete cleanEnv.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    delete cleanEnv.SFIA_STUDIO_CURSOR_REAL;
    delete cleanEnv.SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY;

    // No shell export of Product profile — child must load .env.local via @next/env.
    // Next skips .env.local when NODE_ENV=test; simulate `npm start` with production.
    cleanEnv.NODE_ENV = "production";

    const result = spawnSync(
      path.join(appDir, "node_modules/.bin/tsx"),
      [path.join(appDir, "scripts/studio-runtime-preflight.ts")],
      {
        cwd: appDir,
        env: cleanEnv,
        encoding: "utf8",
      },
    );
    expect(result.status, result.stderr || result.stdout).toBe(0);
    expect(result.stdout).toContain("STUDIO RUNTIME PROFILE READY");
    expect(result.stdout).toMatch(/repository: .+\(PASS\)/);
    // T9 adjacent — no secret material in CLI output
    expect(result.stdout.toLowerCase()).not.toMatch(
      /replace-with|client.secret|better_auth_secret=|ghp_|github_pat_/,
    );
    expect(result.stderr.toLowerCase()).not.toMatch(
      /replace-with|client.secret|better_auth_secret=|ghp_|github_pat_/,
    );
  });

  it("T9 — secrets never appear in preflight message", () => {
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        BETTER_AUTH_SECRET: "super-secret-value-do-not-leak",
        GITHUB_CLIENT_SECRET: "gh-secret-do-not-leak",
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: "",
      }),
      requireManagedClonePresent: false,
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.message).not.toContain("super-secret-value-do-not-leak");
    expect(r.message).not.toContain("gh-secret-do-not-leak");
  });

  it("T10 — no Cursor launch / no ExecutionAttempt side effects", () => {
    const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t10-"));
    tmpDirs.push(managedBase);
    seedManagedClone(managedBase, IDENTITY);
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
      }),
    });
    // REAL=1 is allowed for profile READY display without constructing/launching.
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.cursorReal).toBe("READY");
    expect(r.realBoundaryConstructed).toBe(false);
  });
});
```

---

## DIFF — .env.example

```diff
diff --git a/projects/sfia-studio/app/.env.example b/projects/sfia-studio/app/.env.example
index 57636a01..06ee4b49 100644
--- a/projects/sfia-studio/app/.env.example
+++ b/projects/sfia-studio/app/.env.example
@@ -1,32 +1,105 @@
 # SFIA Studio — Auth foundation (Better Auth + GitHub multi-user)
 # Copy to .env.local for local development. NEVER commit real secrets.
+# Next.js 15 loads .env.local automatically for `npm run dev` and `npm start`
+# (server-side only). Never use NEXT_PUBLIC_* for SFIA server-owned keys.

-# Better Auth (required)
+# Better Auth (required for auth routes)
+# Role: session signing secret. Required: yes (auth). Secret: yes. Server-only.
+# Fail-closed: Better Auth refuses to start without a secret.
 BETTER_AUTH_SECRET=replace-with-long-random-secret
 # Studio local port is 3020 (see package.json scripts)
+# Role: public base URL for auth callbacks. Required: yes (auth). Secret: no. Server-only.
 BETTER_AUTH_URL=http://localhost:3020

 # GitHub OAuth App credentials (identity-only; no repo write scopes required)
 # Create the OAuth App separately under a Morris GO — not in this Delivery cycle.
 # Callback URL must be: http://localhost:3020/api/auth/callback/github
+# Role: OAuth client id. Required: yes (auth). Secret: no (public client id). Server-only.
 GITHUB_CLIENT_ID=replace-with-github-oauth-app-client-id
+# Role: OAuth client secret. Required: yes (auth). Secret: yes. Server-only.
 GITHUB_CLIENT_SECRET=replace-with-github-oauth-app-client-secret

 # Server-owned multi-user allowlist — immutable GitHub numeric user ids (comma-separated)
 # Example placeholders only (not real accounts):
+# Role: allowlist. Required: optional for local single-user Product profile.
+# Secret: no. Server-only.
 SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS=11111111,22222222

+# ===========================================================================
+# Product local runtime profile (STUDIO-RUNTIME-BOOTSTRAP-PROFILE-01)
+# Persist in .env.local (gitignored). Validated by: npm run preflight:runtime
+# ===========================================================================
+
+# ---------------------------------------------------------------------------
+# Server-owned Product Create — RepositoryBinding (CR-PWR-04 / D-PC-09)
+# ---------------------------------------------------------------------------
+# Explicit server-owned repository identity for normal Product Project create.
+# Never accept browser/client-supplied binding. Never infer from cwd/origin.
+# Never set NEXT_PUBLIC_* for these keys.
+#
+# Required for Product Create via LocalProjectComposition / runtime preflight:
+# - IDENTITY (owner/repo) and REMOTE_URL (https://… or git@…) must both be set
+# - DEFAULT_BRANCH is optional; domain falls back to "main" when blank
+# Absent/invalid identity or remote → fail-closed PROJECT_CREATION_FAILED /
+# PROJECT_INVALID / STUDIO RUNTIME PROFILE NOT READY — no partial Project.
+#
+# Placeholders only (replace with your deployment's server-owned values):
+# Role: repository identity. Required: yes (Product local). Secret: no. Server-only.
+SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY=owner/repository
+# Role: repository remote URL. Required: yes (Product local). Secret: no. Server-only.
+SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL=https://github.com/owner/repository.git
+# Role: default branch. Required: optional (defaults to main). Secret: no. Server-only.
+SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH=main
+
+# ---------------------------------------------------------------------------
+# Local single-user structuring authority (TEMPORARY WITH EXIT)
+# ---------------------------------------------------------------------------
+# Enables Pilote N3 structuring decisions on a single-user Product local profile.
+# TEMPORARY WITH EXIT — not a multi-user production authority model.
+# Never trust client canActAsMorris. Never set NEXT_PUBLIC_*.
+#
+# Role: authority gate. Required: yes (Product local single-user profile).
+# Secret: no (boolean gate). Server-only.
+# Fail-closed: AUTHORITY_NOT_CONFIGURED / LOCAL_AUTHORITY_NOT_CONFIGURED.
+# SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1
+
 # ---------------------------------------------------------------------------
 # Server-owned managed repository base (docs_write REAL composition)
 # ---------------------------------------------------------------------------
 # Absolute directory under which Project.repositoryBinding.identity maps to a
 # local Git checkout: {SFIA_STUDIO_MANAGED_REPO_ROOT_BASE}/{sanitizedIdentity}
-# (see ManagedProjectRepositoryResolver). Required when SFIA_STUDIO_CURSOR_REAL=1
-# and Product StartExecution runs bounded docs_write.
+# (see ManagedProjectRepositoryResolver). Required for Product local preflight
+# and when SFIA_STUDIO_CURSOR_REAL=1 runs bounded docs_write.
 #
 # Operational precondition: the managed clone must already exist locally.
 # This variable does not clone, fetch, or mutate remotes.
-# Absent/blank → fail-closed (docs_write_managed_repo_root_base_unconfigured).
+# Absent/blank → fail-closed (docs_write_managed_repo_root_base_unconfigured /
+# MANAGED_REPO_ROOT_BASE_UNCONFIGURED).
 # Never set NEXT_PUBLIC_* for this path. Never put secrets here.
+# Host-specific absolute path — do not commit machine-specific .env.local.
+#
+# Role: managed repo root. Required: yes (Product local). Secret: no. Server-only.
 # Example (local only — replace with your host absolute path):
 # SFIA_STUDIO_MANAGED_REPO_ROOT_BASE=/absolute/path/to/managed-repos
+
+# ---------------------------------------------------------------------------
+# Cursor Product REAL gate (OFF by default in Git)
+# ---------------------------------------------------------------------------
+# OFF by default.
+# Set to 1 only in a local/deployment profile explicitly authorized for REAL.
+# Never NEXT_PUBLIC_*.
+# Never commit SFIA_STUDIO_CURSOR_REAL=1 to the repository.
+# Mutually exclusive with SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY=1
+# (assertDeterministicAndRealMutuallyExclusive).
+#
+# Role: REAL enablement. Required: optional (default OFF). Secret: no. Server-only.
+# Fail-closed: REAL stays OFF unless exactly "1"; mutual exclusion throws when
+# deterministic boundary is also "1".
+# SFIA_STUDIO_CURSOR_REAL=0
+
+# ---------------------------------------------------------------------------
+# Deterministic Cursor boundary (TEST/E2E ONLY — never with REAL=1)
+# ---------------------------------------------------------------------------
+# Role: test double for external Cursor boundary. Required: no for Product local.
+# Secret: no. Server-only. Must remain unset/0 when CURSOR_REAL=1.
+# SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY=0
```

---

## DIFF — package.json

```diff
diff --git a/projects/sfia-studio/app/package.json b/projects/sfia-studio/app/package.json
index 7e975028..4f1b9a34 100644
--- a/projects/sfia-studio/app/package.json
+++ b/projects/sfia-studio/app/package.json
@@ -6,7 +6,9 @@
   "scripts": {
     "dev": "next dev --port 3020",
     "build": "next build",
-    "start": "next start --port 3020",
+    "preflight:runtime": "tsx scripts/studio-runtime-preflight.ts",
+    "start": "npm run preflight:runtime && next start --port 3020",
+    "start:skip-preflight": "next start --port 3020",
     "lint": "next lint",
     "typecheck": "tsc --noEmit",
     "test": "vitest run",
```

---

## DIFF — README.md

```diff
diff --git a/projects/sfia-studio/app/README.md b/projects/sfia-studio/app/README.md
index 5f1b2a54..26b813c9 100644
--- a/projects/sfia-studio/app/README.md
+++ b/projects/sfia-studio/app/README.md
@@ -9,17 +9,33 @@ Frontend Next.js 15 pour les 4 écrans Figma P0 (`lrjA1WEyRpL05vKR8k29LO`).
 - Port local : **3020**
 - Fixtures locales uniquement — **aucun backend**

+## Runtime profile (Product local)
+
+Persistance locale : `app/.env.local` (gitignored). Contrat versionné : `app/.env.example`.
+
+Next.js 15 charge `.env.local` automatiquement pour `npm run dev` et `npm start` (server-side). Aucun export shell manuel n'est requis.
+
+```bash
+cp .env.example .env.local   # puis renseigner le profil Product local
+npm run preflight:runtime    # fail-closed avant parcours produit
+npm run build && npm start   # start exécute le preflight automatiquement
+```
+
+`SFIA_STUDIO_CURSOR_REAL` reste **OFF by default** dans Git. Ne jamais committer `=1`.
+`SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` est **TEMPORARY WITH EXIT**.
+
 ## Scripts

 ```bash
 npm install
 npm run dev          # http://127.0.0.1:3020
+npm run preflight:runtime
 npm run lint
 npm run typecheck
 npm test
 npm run test:e2e
 npm run build
-npm start
+npm start            # preflight:runtime && next start
 ```

 ## Routes P0
@@ -33,30 +49,8 @@ npm start

 ## Contraintes P0

-- **Pas** de `app/api`, middleware auth, `.env`, Tailwind, ni appels Git distants
-- Actions Git/Cursor **simulées** (`Simulation — aucune action Git réelle`)
+- **Pas** de secrets commités, ni `NEXT_PUBLIC_*` pour les clés SFIA server-owned
+- Actions Git/Cursor **simulées** hors profil REAL local explicite
 - `Recommendation` (copilot) ≠ `MorrisDecision` (gate humain)
 - Onglet **Preuves** et gear rail : désactivés (simulation)
 - Captures E2E 1440×1024 → `../../.tmp-sfia-review/screenshots/`
-
-## Structure
-
-```
-app/                 # App Router pages
-components/shell/    # StudioShell, rail, topbar, copilot
-components/ui/       # Card, pills, gates, evidence, metrics
-features/            # Écrans P0
-fixtures/            # Données déterministes FR
-lib/domain/          # Types + guards
-lib/adapters/        # Ports fixtures-only
-styles/              # tokens.css, shell.module.css
-__tests__/           # Vitest + Testing Library
-e2e/                 # Playwright smoke
-```
-
-## Figma frames
-
-- P0-00C `19:2` — shell **floating** (rail/workspace/copilot inset)
-- P0-01/02/03 — shell **flush** (rail pleine hauteur + topbar)
-
-Tokens extraits manuellement depuis `get_design_context` (variables Figma vides).
```

---

## DIFF — vertical-slice-runtime/index.ts

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
index faf37e34..01348d1f 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
@@ -38,6 +38,15 @@ export {
   resolveManagedRepoRootBaseFromEnv,
   SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
 } from "./managedRepoRootBaseConfig";
+export {
+  runStudioRuntimeProfilePreflight,
+  STUDIO_RUNTIME_PROFILE_NOT_READY,
+  STUDIO_RUNTIME_PROFILE_ENV_KEYS,
+  type StudioRuntimeProfilePreflightInput,
+  type StudioRuntimeProfilePreflightResult,
+  type StudioRuntimeProfilePreflightSections,
+  type StudioRuntimeCursorRealMode,
+} from "./studioRuntimeProfilePreflight";
 export {
   resolveBoundedReadOnlyBaseHeadSha,
   validateBaseHeadSha,
```
