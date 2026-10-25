/**
 * L2-D2 CORR-02 / CR-D2-03 — mutation guards on injected DatabaseSync.
 * openD1Db alone is insufficient when a connection was opened before exclusive ON.
 * CR-S2-01: post-exclusive row oracles use disposable readOnly opens (wrapped
 * Statement.get is conservatively gated under exclusive).
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
import { openD1Db, resetD1DbForTests } from "@/lib/d1/db";
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

function openDisposableD1() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-l2d2-inj-"));
  tempDirs.push(dir);
  const dbPath = path.join(dir, "d1.sqlite");
  // Open while exclusive OFF so schema can initialize.
  setLocalOaExclusiveModeForTests(false);
  process.env.D1_SQLITE_PATH = dbPath;
  resetD1DbForTests();
  const db = openD1Db(dbPath);
  return { dbPath, db };
}

/** Diagnostic RO — not applicative reopen, not exclusive OFF. */
function roGet<T>(
  dbPath: string,
  sql: string,
  ...params: Array<null | number | bigint | string>
): T {
  const ro = new DatabaseSync(dbPath, { readOnly: true });
  try {
    return ro.prepare(sql).get(...params) as T;
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

describe("L2-D2 CORR-02 CR-D2-03 injected connection writer guards", () => {
  it("createProjectAtomic / selectMethodModeAtomic refuse after exclusive ON (injected db)", () => {
    const { dbPath, db } = openDisposableD1();
    const repo = new D1ProjectRepository(db);

    // Seed one project while exclusive OFF.
    const seeded = repo.createProjectAtomic({
      project: {
        projectId: "proj-seed-1",
        workspaceId: D1_DEFAULT_WORKSPACE_ID,
        name: "Seed",
        objective: "baseline",
        initialContextSummary: null,
        methodMode: D1_GOVERNANCE_METHOD_MODE,
        state: "ACTIVE",
        ownerActorId: D1_MONO_OPERATOR_ACTOR_ID,
        createdAt: "2026-10-24T16:00:00.000Z",
        updatedAt: "2026-10-24T16:00:00.000Z",
        version: 1,
      },
      assignments: [
        {
          principalId: D1_MONO_OPERATOR_ACTOR_ID,
          projectId: "proj-seed-1",
          role: "project_owner",
          createdAt: "2026-10-24T16:00:00.000Z",
        },
      ],
      events: [
        {
          eventId: "d1-evt-seed",
          eventType: "PROJECT_CREATED",
          actorId: D1_MONO_OPERATOR_ACTOR_ID,
          correlationId: "corr-seed",
          payload: {},
        },
      ],
      idempotencyKey: "idem-seed",
      responseJson: "{}",
    });
    expect(seeded.kind).toBe("created");
    const beforeCount = (
      db.prepare("SELECT COUNT(*) AS c FROM d1_projects").get() as { c: number }
    ).c;
    expect(beforeCount).toBe(1);

    setLocalOaExclusiveModeForTests(true);

    try {
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
          createdAt: "2026-10-24T16:01:00.000Z",
          updatedAt: "2026-10-24T16:01:00.000Z",
          version: 1,
        },
        assignments: [],
        events: [],
        idempotencyKey: "idem-blocked",
        responseJson: "{}",
      });
      expect.unreachable("createProjectAtomic should refuse");
    } catch (error) {
      expect(error).toBeInstanceOf(D1Error);
      expect((error as D1Error).code).toBe("FORBIDDEN");
    }

    try {
      repo.selectMethodModeAtomic({
        projectId: "proj-seed-1",
        methodMode: "SFIA_V2_6",
        expectedVersion: 1,
        nextState: "ACTIVE",
        actorId: D1_MONO_OPERATOR_ACTOR_ID,
        correlationId: "corr-blocked",
        eventIds: { mode: "d1-evt-mode" },
      });
      expect.unreachable("selectMethodModeAtomic should refuse");
    } catch (error) {
      expect(error).toBeInstanceOf(D1Error);
      expect((error as D1Error).code).toBe("FORBIDDEN");
    }

    const afterCount = roGet<{ c: number }>(
      dbPath,
      "SELECT COUNT(*) AS c FROM d1_projects",
    ).c;
    expect(afterCount).toBe(1);
    const mode = roGet<{ method_mode: string }>(
      dbPath,
      "SELECT method_mode FROM d1_projects WHERE project_id = ?",
      "proj-seed-1",
    ).method_mode;
    expect(mode).toBe(D1_GOVERNANCE_METHOD_MODE);
    expect(fs.existsSync(dbPath)).toBe(true);
  });

  it("BoundedAtomicAuditStore append/clearForTests refuse under exclusive with injected db", () => {
    const { dbPath, db } = openDisposableD1();
    const store = new BoundedAtomicAuditStore(db);
    store.append({
      opId: "op-1",
      idempotencyKey: "idem-audit-1",
      phase: "prepare",
      outcome: "IN_PROGRESS",
      correlationId: "corr-1",
    });
    const before = (
      db.prepare("SELECT COUNT(*) AS c FROM d1_atomic_audit").get() as {
        c: number;
      }
    ).c;
    expect(before).toBe(1);

    setLocalOaExclusiveModeForTests(true);
    try {
      store.append({
        opId: "op-2",
        idempotencyKey: "idem-audit-2",
        phase: "commit",
        outcome: "COMMITTED",
        correlationId: "corr-2",
      });
      expect.unreachable("append should refuse");
    } catch (error) {
      expect(error).toBeInstanceOf(D1Error);
      expect((error as D1Error).code).toBe("FORBIDDEN");
    }
    try {
      store.clearForTests();
      expect.unreachable("clearForTests should refuse");
    } catch (error) {
      expect(error).toBeInstanceOf(D1Error);
      expect((error as D1Error).code).toBe("FORBIDDEN");
    }

    const after = roGet<{ c: number }>(
      dbPath,
      "SELECT COUNT(*) AS c FROM d1_atomic_audit",
    ).c;
    expect(after).toBe(1);
  });

  it("exclusive OFF — injected repository mutations still work", () => {
    const { db } = openDisposableD1();
    setLocalOaExclusiveModeForTests(false);
    const repo = new D1ProjectRepository(db);
    const outcome = repo.createProjectAtomic({
      project: {
        projectId: "proj-ok",
        workspaceId: D1_DEFAULT_WORKSPACE_ID,
        name: "OK",
        objective: "off mode",
        initialContextSummary: null,
        methodMode: D1_GOVERNANCE_METHOD_MODE,
        state: "DRAFT",
        ownerActorId: D1_MONO_OPERATOR_ACTOR_ID,
        createdAt: "2026-10-24T16:02:00.000Z",
        updatedAt: "2026-10-24T16:02:00.000Z",
        version: 1,
      },
      assignments: [],
      events: [
        {
          eventId: "d1-evt-ok",
          eventType: "PROJECT_CREATED",
          actorId: D1_MONO_OPERATOR_ACTOR_ID,
          correlationId: "corr-ok",
          payload: {},
        },
      ],
      idempotencyKey: "idem-ok-off",
      responseJson: "{}",
    });
    expect(outcome.kind).toBe("created");
  });
});
