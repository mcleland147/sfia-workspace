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
    Object.assign(cleanEnv, { NODE_ENV: "production" });

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

  it("T11 — packaging: tsx + @next/env are direct runtime dependencies", () => {
    const pkgPath = path.resolve(__dirname, "../../package.json");
    const pkg = JSON.parse(
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("node:fs").readFileSync(pkgPath, "utf8"),
    ) as {
      dependencies?: Record<string, string>;
      devDependencies?: Record<string, string>;
    };
    expect(pkg.dependencies?.tsx).toBeTruthy();
    expect(pkg.dependencies?.["@next/env"]).toBeTruthy();
    expect(pkg.devDependencies?.tsx).toBeUndefined();
  });
});
