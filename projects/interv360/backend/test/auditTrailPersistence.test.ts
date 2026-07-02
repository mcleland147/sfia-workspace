import Database from "better-sqlite3";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { applySqliteSchema } from "../src/persistence/sqliteSchema.js";
import { getDatabase } from "../src/persistence/sqliteDatabase.js";
import {
  applyTransition,
  closeDemoStoreForTests,
  listEventsForRequest,
  resetDemoStoreForTests,
} from "../src/store/demoStore.js";

function getWorkflowEventColumnNames(db: Database.Database): string[] {
  const columns = db
    .prepare("PRAGMA table_info(workflow_events)")
    .all() as Array<{ name: string }>;

  return columns.map((column) => column.name);
}

describe("audit trail persistence", () => {
  let tempDbPath = "";

  beforeEach(() => {
    tempDbPath = path.join(
      os.tmpdir(),
      `interv360-audit-${Date.now()}-${Math.random().toString(36).slice(2)}.sqlite`,
    );
    process.env.SQLITE_PATH = tempDbPath;
    closeDemoStoreForTests();
    resetDemoStoreForTests();
  });

  afterEach(() => {
    closeDemoStoreForTests();
    delete process.env.SQLITE_PATH;

    if (tempDbPath && fs.existsSync(tempDbPath)) {
      fs.unlinkSync(tempDbPath);
    }
  });

  it("creates audit trail columns on a fresh database", () => {
    const db = new Database(tempDbPath);
    const columnNames = getWorkflowEventColumnNames(db);
    db.close();

    expect(columnNames).toEqual(
      expect.arrayContaining([
        "action",
        "actor_user_id",
        "actor_display_name",
        "actor_role",
        "from_status",
        "to_status",
      ]),
    );
  });

  it("migrates legacy workflow_events tables without losing rows", () => {
    closeDemoStoreForTests();

    const legacyDbPath = path.join(
      os.tmpdir(),
      `interv360-legacy-${Date.now()}-${Math.random().toString(36).slice(2)}.sqlite`,
    );

    const legacyDb = new Database(legacyDbPath);
    legacyDb.exec(`
      CREATE TABLE workflow_events (
        id TEXT PRIMARY KEY,
        request_id TEXT NOT NULL,
        type TEXT NOT NULL,
        from_status TEXT NOT NULL,
        to_status TEXT NOT NULL,
        label TEXT NOT NULL,
        created_at TEXT NOT NULL,
        source TEXT NOT NULL,
        is_demo INTEGER NOT NULL DEFAULT 1
      );
    `);
    legacyDb
      .prepare(
        `
      INSERT INTO workflow_events (
        id, request_id, type, from_status, to_status,
        label, created_at, source, is_demo
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
    `,
      )
      .run(
        "evt-legacy-001",
        "SAV-DEMO-001",
        "qualification.confirmed",
        "STAT-01",
        "STAT-02",
        "Qualification fictive confirmée",
        "2026-03-12T08:00:00.000Z",
        "demo",
      );
    legacyDb.close();

    const migratedDb = new Database(legacyDbPath);
    applySqliteSchema(migratedDb);
    const columnNames = getWorkflowEventColumnNames(migratedDb);
    const legacyRow = migratedDb
      .prepare("SELECT * FROM workflow_events WHERE id = ?")
      .get("evt-legacy-001") as {
      from_status: string;
      to_status: string;
      actor_user_id: string | null;
    };
    migratedDb.close();

    if (fs.existsSync(legacyDbPath)) {
      fs.unlinkSync(legacyDbPath);
    }

    expect(columnNames).toEqual(
      expect.arrayContaining([
        "action",
        "actor_user_id",
        "actor_display_name",
        "actor_role",
      ]),
    );
    expect(legacyRow.from_status).toBe("STAT-01");
    expect(legacyRow.to_status).toBe("STAT-02");
    expect(legacyRow.actor_user_id).toBeNull();
  });

  it("keeps legacy transition events readable without actor fields", () => {
    applyTransition("SAV-DEMO-001", "qualify");

    const [event] = listEventsForRequest("SAV-DEMO-001");

    expect(event).toMatchObject({
      type: "qualification.confirmed",
      fromStatus: "STAT-01",
      toStatus: "STAT-02",
      action: "qualify",
    });
    expect(event?.actorUserId).toBeUndefined();
    expect(event?.actorDisplayName).toBeUndefined();
    expect(event?.actorRole).toBeUndefined();
  });

  it("persists actor snapshot when transition includes actor", () => {
    applyTransition("SAV-DEMO-001", "qualify", {
      userId: "user-technician",
      displayName: "Théo Technicien",
      role: "technician",
    });

    const [event] = listEventsForRequest("SAV-DEMO-001");

    expect(event).toMatchObject({
      action: "qualify",
      actorUserId: "user-technician",
      actorDisplayName: "Théo Technicien",
      actorRole: "technician",
      fromStatus: "STAT-01",
      toStatus: "STAT-02",
    });
  });

  it("maps persisted audit trail fields when present", () => {
    const db = getDatabase();

    db.prepare(
      `
      INSERT INTO workflow_events (
        id, request_id, type, from_status, to_status,
        label, created_at, source, is_demo,
        action, actor_user_id, actor_display_name, actor_role
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?, ?, ?)
    `,
    ).run(
      "evt-audit-002",
      "SAV-DEMO-001",
      "planning.confirmed",
      "STAT-02",
      "STAT-03",
      "Planification fictive confirmée",
      "2026-03-12T09:00:00.000Z",
      "demo",
      "plan",
      "user-manager",
      "Maya Responsable",
      "manager",
    );

    const [event] = listEventsForRequest("SAV-DEMO-001").filter(
      (entry) => entry.id === "evt-audit-002",
    );

    expect(event).toMatchObject({
      action: "plan",
      actorUserId: "user-manager",
      actorDisplayName: "Maya Responsable",
      actorRole: "manager",
      fromStatus: "STAT-02",
      toStatus: "STAT-03",
    });
  });

  it("does not require actor fields when inserting enriched events", () => {
    const db = new Database(tempDbPath);
    applySqliteSchema(db);

    expect(() => {
      db.prepare(
        `
        INSERT INTO workflow_events (
          id, request_id, type, from_status, to_status,
          label, created_at, source, is_demo, action
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?)
      `,
      ).run(
        "evt-audit-003",
        "SAV-DEMO-001",
        "hold.placed",
        "STAT-03",
        "STAT-05",
        "Mise en attente fictive",
        "2026-03-12T10:00:00.000Z",
        "demo",
        "put_on_hold",
      );
    }).not.toThrow();

    db.close();
  });

  it("reset demo keeps existing behavior after audit trail schema upgrade", () => {
    applyTransition("SAV-DEMO-001", "qualify");
    expect(listEventsForRequest("SAV-DEMO-001")).toHaveLength(1);

    resetDemoStoreForTests();

    expect(listEventsForRequest("SAV-DEMO-001")).toHaveLength(0);
  });
});
