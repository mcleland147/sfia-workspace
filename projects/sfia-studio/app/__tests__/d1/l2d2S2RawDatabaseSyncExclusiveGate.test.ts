/**
 * L2-D2 S2 / CR-S2-01 + CR-S2-02 — D1 openD1Db native boundary.
 * CR-S2-01: Statement execution surfaces gated under exclusive.
 * CR-S2-02: Deny-by-default allowlist; setAuthorizer / createTagStore / deserialize
 *           escapes closed; pre-ON captures cannot re-enable mutation.
 * Residual: unwrapped `new DatabaseSync` outside openD1Db — KNOWN GAP.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  openD1Db,
  resetD1DbForTests,
  sealD1DbSingletonForLocalOaExclusiveCutover,
} from "@/lib/d1/db";
import { D1Error } from "@/lib/d1/errors";
import {
  resetLocalOaExclusiveModeForTests,
  setLocalOaExclusiveModeForTests,
} from "@/lib/d1/localOaExclusiveMode.test-only";
import { D1ProjectRepository } from "@/lib/d1/repository";
import {
  D1_DEFAULT_WORKSPACE_ID,
  D1_GOVERNANCE_METHOD_MODE,
  D1_MONO_OPERATOR_ACTOR_ID,
} from "@/lib/d1/types";

const tempDirs: string[] = [];

const INSERT_SQL = `INSERT INTO d1_projects (
  project_id, workspace_id, name, objective, initial_context_summary,
  method_mode, state, owner_actor_id, created_at, updated_at, version
) VALUES (
  ?, '${D1_DEFAULT_WORKSPACE_ID}', ?, 'obj', NULL,
  '${D1_GOVERNANCE_METHOD_MODE}', 'DRAFT', '${D1_MONO_OPERATOR_ACTOR_ID}',
  '2026-10-25T05:00:00.000Z', '2026-10-25T05:00:00.000Z', 1
)`;

const INSERT_RETURNING = `INSERT INTO d1_projects (
  project_id, workspace_id, name, objective, initial_context_summary,
  method_mode, state, owner_actor_id, created_at, updated_at, version
) VALUES (
  ?, '${D1_DEFAULT_WORKSPACE_ID}', ?, 'obj', NULL,
  '${D1_GOVERNANCE_METHOD_MODE}', 'DRAFT', '${D1_MONO_OPERATOR_ACTOR_ID}',
  '2026-10-25T05:00:00.000Z', '2026-10-25T05:00:00.000Z', 1
) RETURNING project_id`;

function openDisposableD1() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s2-"));
  tempDirs.push(dir);
  const dbPath = path.join(dir, "d1.sqlite");
  setLocalOaExclusiveModeForTests(false);
  process.env.D1_SQLITE_PATH = dbPath;
  resetD1DbForTests();
  const db = openD1Db(dbPath);
  return { dbPath, db };
}

/** Diagnostic RO — not applicative D1, not Q12, not exclusive rollback. */
function countProjectsReadonly(dbPath: string): number {
  const ro = new DatabaseSync(dbPath, { readOnly: true });
  try {
    return (
      ro.prepare("SELECT COUNT(*) AS c FROM d1_projects").get() as { c: number }
    ).c;
  } finally {
    ro.close();
  }
}

beforeEach(() => {
  resetLocalOaExclusiveModeForTests();
  resetD1DbForTests();
  delete process.env.D1_SQLITE_PATH;
});

afterEach(() => {
  resetLocalOaExclusiveModeForTests();
  resetD1DbForTests();
  delete process.env.D1_SQLITE_PATH;
  for (const dir of tempDirs.splice(0)) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

describe("L2-D2 S2 / CR-S2-01 D1 mutation safety on openD1Db handles", () => {
  it("pre-open handle: exec/run/get/all/iterate mutative paths refuse; row count unchanged", () => {
    const { dbPath, db } = openDisposableD1();
    db.prepare(INSERT_SQL).run("proj-seed", "Seed");
    expect(countProjectsReadonly(dbPath)).toBe(1);

    const stmtRun = db.prepare(INSERT_SQL);
    const stmtGetReturning = db.prepare(INSERT_RETURNING);
    const stmtAllReturning = db.prepare(INSERT_RETURNING);
    const stmtIterReturning = db.prepare(INSERT_RETURNING);
    const stmtSelect = db.prepare("SELECT COUNT(*) AS c FROM d1_projects");

    setLocalOaExclusiveModeForTests(true);

    expect(() =>
      db.exec(
        `INSERT INTO d1_projects (
          project_id, workspace_id, name, objective, initial_context_summary,
          method_mode, state, owner_actor_id, created_at, updated_at, version
        ) VALUES (
          'proj-exec', '${D1_DEFAULT_WORKSPACE_ID}', 'Exec', 'obj', NULL,
          '${D1_GOVERNANCE_METHOD_MODE}', 'DRAFT', '${D1_MONO_OPERATOR_ACTOR_ID}',
          '2026-10-25T05:01:00.000Z', '2026-10-25T05:01:00.000Z', 1
        )`,
      ),
    ).toThrow(D1Error);

    expect(() => stmtRun.run("proj-run", "Run")).toThrow(D1Error);
    expect(() => stmtGetReturning.get("proj-get", "Get")).toThrow(D1Error);
    expect(() => stmtAllReturning.all("proj-all", "All")).toThrow(D1Error);
    // iterate is refuse-always (deferred-escape close); before and after ON.
    expect(() => stmtIterReturning.iterate("proj-iter", "Iter")).toThrow(
      D1Error,
    );
    expect(() => stmtSelect.get()).toThrow(D1Error);
    expect(() =>
      db.prepare("SELECT COUNT(*) AS c FROM d1_projects").get(),
    ).toThrow(D1Error);

    expect(countProjectsReadonly(dbPath)).toBe(1);
  });

  it("marker OFF — historical mutative path still works on wrapped handle", () => {
    const { dbPath, db } = openDisposableD1();
    setLocalOaExclusiveModeForTests(false);
    db.prepare(INSERT_SQL).run("proj-off", "Off");
    expect(countProjectsReadonly(dbPath)).toBe(1);
    const row = db
      .prepare("SELECT project_id FROM d1_projects WHERE project_id = ?")
      .get("proj-off") as { project_id: string };
    expect(row.project_id).toBe("proj-off");
  });

  it("sealD1DbSingleton closes applicative singleton before exclusive", () => {
    const { dbPath } = openDisposableD1();
    expect(fs.existsSync(dbPath)).toBe(true);
    sealD1DbSingletonForLocalOaExclusiveCutover();
    setLocalOaExclusiveModeForTests(true);
    expect(() => openD1Db(dbPath)).toThrow(D1Error);
  });

  it("KNOWN GAP residual: unwrapped new DatabaseSync can still mutate under exclusive", () => {
    const { dbPath } = openDisposableD1();
    setLocalOaExclusiveModeForTests(false);
    resetD1DbForTests();
    const raw = new DatabaseSync(dbPath);
    setLocalOaExclusiveModeForTests(true);
    raw.exec(
      `INSERT INTO d1_projects (
        project_id, workspace_id, name, objective, initial_context_summary,
        method_mode, state, owner_actor_id, created_at, updated_at, version
      ) VALUES (
        'proj-bypass', '${D1_DEFAULT_WORKSPACE_ID}', 'Bypass', 'obj', NULL,
        '${D1_GOVERNANCE_METHOD_MODE}', 'DRAFT', '${D1_MONO_OPERATOR_ACTOR_ID}',
        '2026-10-25T05:03:00.000Z', '2026-10-25T05:03:00.000Z', 1
      )`,
    );
    const count = (
      raw
        .prepare("SELECT COUNT(*) AS c FROM d1_projects WHERE project_id = ?")
        .get("proj-bypass") as { c: number }
    ).c;
    expect(count).toBe(1);
    raw.close();
  });

  it("repository mutations remain fail-closed under exclusive with wrapped injected db", () => {
    const { dbPath, db } = openDisposableD1();
    const repo = new D1ProjectRepository(db);
    setLocalOaExclusiveModeForTests(true);
    expect(() =>
      repo.createProjectAtomic({
        project: {
          projectId: "proj-blocked",
          workspaceId: D1_DEFAULT_WORKSPACE_ID,
          name: "Blocked",
          objective: "must fail",
          initialContextSummary: null,
          methodMode: D1_GOVERNANCE_METHOD_MODE,
          state: "DRAFT",
          ownerActorId: D1_MONO_OPERATOR_ACTOR_ID,
          createdAt: "2026-10-25T05:04:00.000Z",
          updatedAt: "2026-10-25T05:04:00.000Z",
          version: 1,
        },
        assignments: [],
        events: [],
        idempotencyKey: "idem-s2-blocked",
        responseJson: "{}",
      }),
    ).toThrow(D1Error);
    expect(countProjectsReadonly(dbPath)).toBe(0);
  });
});

describe("L2-D2 S2 / CR-S2-02 native Proxy boundary hardening", () => {
  it("setAuthorizer is not exposable — capture before ON cannot clear protection", () => {
    const { dbPath, db } = openDisposableD1();
    db.prepare(INSERT_SQL).run("proj-auth", "Auth");
    expect(countProjectsReadonly(dbPath)).toBe(1);

    // Capture the (stub) reference before exclusive ON.
    const capturedSetAuthorizer = (
      db as unknown as { setAuthorizer: (cb: unknown) => void }
    ).setAuthorizer;
    expect(typeof capturedSetAuthorizer).toBe("function");

    // Clearing before ON must refuse — authorizer stays installed.
    expect(() => capturedSetAuthorizer(null)).toThrow(D1Error);
    expect(() =>
      (
        db as unknown as { setAuthorizer: (cb: unknown) => void }
      ).setAuthorizer(null),
    ).toThrow(D1Error);

    setLocalOaExclusiveModeForTests(true);

    // After ON, clear still refuses; mutation still blocked; rows stable.
    expect(() => capturedSetAuthorizer(null)).toThrow(D1Error);
    expect(() => db.prepare(INSERT_SQL).run("proj-auth-2", "Nope")).toThrow(
      D1Error,
    );
    // Authorizer remains as defense-in-depth even if a future path skipped Proxy.
    expect(countProjectsReadonly(dbPath)).toBe(1);
  });

  it("createTagStore refused — no SQLTagStore / .db raw escape (before and after ON)", () => {
    const { dbPath, db } = openDisposableD1();
    db.prepare(INSERT_SQL).run("proj-tag", "Tag");
    expect(countProjectsReadonly(dbPath)).toBe(1);

    const createTagStore = (
      db as unknown as { createTagStore: () => unknown }
    ).createTagStore;
    expect(typeof createTagStore).toBe("function");

    // Before exclusive ON: allowlist refuses — no tag store / .db obtained.
    expect(() => createTagStore()).toThrow(D1Error);
    expect(() =>
      (db as unknown as { createTagStore: () => unknown }).createTagStore(),
    ).toThrow(D1Error);

    setLocalOaExclusiveModeForTests(true);
    expect(() => createTagStore()).toThrow(D1Error);
    expect(countProjectsReadonly(dbPath)).toBe(1);
  });

  it("deserialize / createSession / applyChangeset / loadExtension refused", () => {
    const { dbPath, db } = openDisposableD1();
    db.prepare(INSERT_SQL).run("proj-ser", "Ser");
    const before = countProjectsReadonly(dbPath);

    const api = db as unknown as Record<string, (...a: unknown[]) => unknown>;
    for (const name of [
      "deserialize",
      "createSession",
      "applyChangeset",
      "loadExtension",
      "enableLoadExtension",
      "function",
      "aggregate",
    ]) {
      expect(typeof api[name]).toBe("function");
      expect(() => api[name]()).toThrow(D1Error);
    }

    setLocalOaExclusiveModeForTests(true);
    for (const name of ["deserialize", "createSession", "applyChangeset"]) {
      expect(() => api[name]()).toThrow(D1Error);
    }
    expect(countProjectsReadonly(dbPath)).toBe(before);
  });

  it("Statement.iterate refused always — closes deferred-escape before exclusive ON", () => {
    const { dbPath, db } = openDisposableD1();
    db.prepare(INSERT_SQL).run("proj-def", "Def");
    expect(countProjectsReadonly(dbPath)).toBe(1);

    // Native Node 24: iterate() started before ON can mutate on later pull even
    // with a dynamic authorizer. Applicative boundary refuses iterate entirely.
    const stmt = db.prepare(INSERT_RETURNING);
    expect(() => stmt.iterate("proj-def-2", "Lazy")).toThrow(D1Error);

    setLocalOaExclusiveModeForTests(true);
    expect(() => stmt.iterate("proj-def-3", "Lazy2")).toThrow(D1Error);
    expect(countProjectsReadonly(dbPath)).toBe(1);
  });

  it("native method capture before ON cannot reopen mutative surface after ON", () => {
    const { dbPath, db } = openDisposableD1();
    db.prepare(INSERT_SQL).run("proj-cap", "Cap");
    const before = countProjectsReadonly(dbPath);

    const captured = {
      setAuthorizer: (db as unknown as { setAuthorizer: () => void })
        .setAuthorizer,
      createTagStore: (db as unknown as { createTagStore: () => void })
        .createTagStore,
      deserialize: (db as unknown as { deserialize: () => void }).deserialize,
      createSession: (db as unknown as { createSession: () => void })
        .createSession,
      applyChangeset: (db as unknown as { applyChangeset: () => void })
        .applyChangeset,
    };

    setLocalOaExclusiveModeForTests(true);

    for (const fn of Object.values(captured)) {
      expect(() => fn()).toThrow(D1Error);
    }
    expect(() => db.exec("SELECT 1")).toThrow(D1Error);
    expect(countProjectsReadonly(dbPath)).toBe(before);
  });
});
