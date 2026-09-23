/**
 * B3+B4 — Product REAL readiness preflight (ZERO REAL / no Cursor spawn / no auth call).
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import { afterEach, describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import {
  evaluateProductRealReadiness,
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
} from "@/features/project-assistant/w2/evaluateProductRealReadiness";

const require = createRequire(import.meta.url);

function openSqlite(dbPath: string): {
  exec: (sql: string) => void;
  prepare: (sql: string) => { run: (...args: unknown[]) => void };
  close: () => void;
} {
  try {
    const Database = require("better-sqlite3") as new (path: string) => {
      exec: (sql: string) => void;
      prepare: (sql: string) => { run: (...args: unknown[]) => void };
      close: () => void;
    };
    return new Database(dbPath);
  } catch {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
    execFileSync("sqlite3", [
      dbPath,
      "CREATE TABLE IF NOT EXISTS oa_projects (project_id TEXT PRIMARY KEY);",
    ]);
    return {
      exec: (sql: string) => {
        execFileSync("sqlite3", [dbPath, sql]);
      },
      prepare: (sql: string) => ({
        run: (...args: unknown[]) => {
          const projectId = String(args[0] ?? "").replace(/'/g, "''");
          const bound = sql.includes("?")
            ? sql.replace("?", `'${projectId}'`)
            : sql;
          execFileSync("sqlite3", [dbPath, bound]);
        },
      }),
      close: () => undefined,
    };
  }
}

const temps: string[] = [];

afterEach(() => {
  while (temps.length) {
    const d = temps.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDir(prefix: string): string {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  temps.push(d);
  return d;
}

function makeSqliteWithProject(dbPath: string, projectId: string): void {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  const db = openSqlite(dbPath);
  db.exec(`
    CREATE TABLE IF NOT EXISTS oa_projects (
      project_id TEXT PRIMARY KEY
    );
  `);
  db.prepare("INSERT INTO oa_projects (project_id) VALUES (?)").run(projectId);
  db.close();
}

function makeGitRepo(repoPath: string, withPathRoot?: string): string {
  fs.mkdirSync(repoPath, { recursive: true });
  execFileSync("git", ["init"], { cwd: repoPath });
  execFileSync("git", ["config", "user.email", "t@test"], { cwd: repoPath });
  execFileSync("git", ["config", "user.name", "t"], { cwd: repoPath });
  fs.writeFileSync(path.join(repoPath, "README.md"), "x\n");
  if (withPathRoot) {
    fs.mkdirSync(path.join(repoPath, withPathRoot), { recursive: true });
    fs.writeFileSync(path.join(repoPath, withPathRoot, "keep.txt"), "y\n");
  }
  execFileSync("git", ["add", "."], { cwd: repoPath });
  execFileSync("git", ["commit", "-m", "init"], { cwd: repoPath });
  return execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repoPath,
    encoding: "utf8",
  }).trim();
}

describe("B3+B4 evaluateProductRealReadiness", () => {
  it("C1/C7 — explicit Product DB + SFIA_CURSOR_BIN → binary ready", () => {
    const root = tempDir("sfia-ready-");
    const dbPath = path.join(root, "product-b.sqlite");
    const projectId = "prj:ready-1";
    makeSqliteWithProject(dbPath, projectId);
    const managedBase = path.join(root, "managed");
    const identity = "acme/ready-repo";
    const repoPath = path.join(managedBase, "acme__ready-repo");
    const sha = makeGitRepo(repoPath, "projects/batch-cookinb");
    const fakeBin = path.join(root, "fake-cursor");
    fs.writeFileSync(fakeBin, "#!/bin/sh\necho ok\n", { mode: 0o755 });

    const result = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: fakeBin,
      },
      expectedProjectId: projectId,
      repositoryBindingIdentity: identity,
      pathRoot: "projects/batch-cookinb",
      defaultBranch: "main",
      resolveBaseHeadSha: () => ({ ok: true, sha }),
    });

    expect(result.productDb.explicitConfigPresent).toBe(true);
    expect(result.productDb.resolvedPath).toBe(path.resolve(dbPath));
    expect(result.productDb.exists).toBe(true);
    expect(result.productDb.expectedProjectFound).toBe(true);
    expect(result.managedRepository.repoExists).toBe(true);
    expect(result.managedRepository.pathRootExists).toBe(true);
    expect(result.managedRepository.trustedBaseHeadSha).toBe(sha);
    expect(result.cursorBinary.configuredOverride).toBe(true);
    expect(result.cursorBinary.executable).toBe(true);
    expect(result.auth.proven).toBe(false);
    expect(result.auth.state).toBe("EXTERNAL_PREFLIGHT_REQUIRED");
    expect(result.readyForDeterministicPreReal).toBe(true);
    expect(result.readyForProductRealExecute).toBe(false);
  });

  it("C2 — wrong DB without target project → NOT READY", () => {
    const root = tempDir("sfia-wrongdb-");
    const dbA = path.join(root, "db-a.sqlite");
    const dbB = path.join(root, "db-b.sqlite");
    makeSqliteWithProject(dbA, "prj:other");
    makeSqliteWithProject(dbB, "prj:target");
    const managedBase = path.join(root, "managed");
    const identity = "acme/x";
    makeGitRepo(path.join(managedBase, "acme__x"));

    const withB = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbB,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: path.join(root, "bin"),
      },
      expectedProjectId: "prj:target",
      repositoryBindingIdentity: identity,
      resolveCursorBin: () => path.join(root, "bin"),
      resolveBaseHeadSha: () => ({ ok: true, sha: "a".repeat(40) }),
    });
    expect(withB.productDb.expectedProjectFound).toBe(true);

    const withA = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbA,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: path.join(root, "bin"),
      },
      expectedProjectId: "prj:target",
      repositoryBindingIdentity: identity,
      resolveCursorBin: () => path.join(root, "bin"),
      resolveBaseHeadSha: () => ({ ok: true, sha: "a".repeat(40) }),
    });
    expect(withA.productDb.expectedProjectFound).toBe(false);
    expect(withA.blockers).toContain("PRODUCT_DB_PROJECT_NOT_FOUND");
    expect(withA.readyForDeterministicPreReal).toBe(false);
  });

  it("C3 — managed base absent → NOT READY", () => {
    const root = tempDir("sfia-nomanaged-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        SFIA_CURSOR_BIN: "/x",
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: "acme/x",
      resolveCursorBin: () => "/x",
    });
    expect(r.managedRepository.managedRepoRootBaseConfigured).toBe(false);
    expect(r.blockers).toContain("MANAGED_REPO_ROOT_BASE_UNCONFIGURED");
    expect(r.readyForDeterministicPreReal).toBe(false);
  });

  it("C4 — managed repo absent → NOT READY", () => {
    const root = tempDir("sfia-norepo-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    fs.mkdirSync(managedBase, { recursive: true });
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: "/x",
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: "acme/missing",
      resolveCursorBin: () => "/x",
    });
    expect(r.managedRepository.repoExists).toBe(false);
    expect(r.blockers).toContain("MANAGED_REPO_ABSENT");
    expect(r.readyForDeterministicPreReal).toBe(false);
  });

  it("C5 — pathRoot absent → NOT READY (no silent create)", () => {
    const root = tempDir("sfia-nopath-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    const identity = "acme/y";
    makeGitRepo(path.join(managedBase, "acme__y"));
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: "/x",
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: identity,
      pathRoot: "projects/batch-cookinb",
      resolveCursorBin: () => "/x",
      resolveBaseHeadSha: () => ({ ok: true, sha: "b".repeat(40) }),
    });
    expect(r.managedRepository.pathRootExists).toBe(false);
    expect(r.blockers).toContain("PROJECT_PATH_ROOT_ABSENT");
    expect(
      fs.existsSync(
        path.join(managedBase, "acme__y", "projects/batch-cookinb"),
      ),
    ).toBe(false);
    expect(r.readyForDeterministicPreReal).toBe(false);
  });

  it("C6 — trusted HEAD invalid → NOT READY", () => {
    const root = tempDir("sfia-badhead-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    makeGitRepo(path.join(managedBase, "acme__z"));
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: "/x",
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: "acme/z",
      resolveCursorBin: () => "/x",
      resolveBaseHeadSha: () => ({ ok: false, code: "BASE_HEAD_SHA_UNRESOLVED" }),
    });
    expect(r.contractReadiness.baseHeadShaFullSha).toBe(false);
    expect(r.blockers.some((b) => b.includes("TRUSTED_BASE_HEAD"))).toBe(true);
    expect(r.readyForDeterministicPreReal).toBe(false);
  });

  it("C8 — injectable Cursor app path resolver → READY binary", () => {
    const root = tempDir("sfia-appbin-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    makeGitRepo(path.join(managedBase, "acme__a"));
    const appBin =
      "/Applications/Cursor.app/Contents/Resources/app/bin/cursor";
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: "acme/a",
      resolveCursorBin: () => appBin,
      resolveBaseHeadSha: () => ({ ok: true, sha: "c".repeat(40) }),
    });
    expect(r.cursorBinary.configuredOverride).toBe(false);
    expect(r.cursorBinary.executable).toBe(true);
    expect(r.cursorBinary.resolvedPath).toBe(appBin);
  });

  it("C9 — no binary → NOT READY + CURSOR_BINARY_UNAVAILABLE", () => {
    const root = tempDir("sfia-nobin-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    makeGitRepo(path.join(managedBase, "acme__b"));
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: "acme/b",
      resolveCursorBin: () => null,
      resolveBaseHeadSha: () => ({ ok: true, sha: "d".repeat(40) }),
    });
    expect(r.cursorBinary.executable).toBe(false);
    expect(r.blockers).toContain("CURSOR_BINARY_UNAVAILABLE");
    expect(r.readyForDeterministicPreReal).toBe(false);
  });

  it("C10 — auth state never true by inference", () => {
    const root = tempDir("sfia-auth-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    makeGitRepo(path.join(managedBase, "acme__c"), "projects/x");
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: "/x",
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: "acme/c",
      pathRoot: "projects/x",
      resolveCursorBin: () => "/x",
      resolveBaseHeadSha: () => ({ ok: true, sha: "e".repeat(40) }),
    });
    expect(r.auth.proven).toBe(false);
    expect(r.auth.state).toBe("EXTERNAL_PREFLIGHT_REQUIRED");
    expect(r.readyForProductRealExecute).toBe(false);
    expect(r.readyForDeterministicPreReal).toBe(true);
  });
});
