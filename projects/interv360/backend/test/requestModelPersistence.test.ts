import Database from "better-sqlite3";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { applySqliteSchema } from "../src/persistence/sqliteSchema.js";
import {
  closeDemoStoreForTests,
  getRequestWithDetail,
  listRequests,
  resetDemoStoreForTests,
} from "../src/store/demoStore.js";

function getRequestColumnNames(db: Database.Database): string[] {
  const columns = db
    .prepare("PRAGMA table_info(requests)")
    .all() as Array<{ name: string }>;

  return columns.map((column) => column.name);
}

describe("request model persistence", () => {
  let tempDbPath = "";

  beforeEach(() => {
    tempDbPath = path.join(
      os.tmpdir(),
      `interv360-request-model-${Date.now()}-${Math.random().toString(36).slice(2)}.sqlite`,
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

  it("creates request model columns on a fresh database", () => {
    const db = new Database(tempDbPath);
    const columnNames = getRequestColumnNames(db);
    db.close();

    expect(columnNames).toEqual(
      expect.arrayContaining([
        "requester_name",
        "requester_team",
        "assigned_to_user_id",
        "assigned_to_display_name",
      ]),
    );
  });

  it("migrates legacy requests tables without losing rows", () => {
    closeDemoStoreForTests();

    const legacyDbPath = path.join(
      os.tmpdir(),
      `interv360-legacy-requests-${Date.now()}-${Math.random().toString(36).slice(2)}.sqlite`,
    );

    const legacyDb = new Database(legacyDbPath);
    legacyDb.exec(`
      CREATE TABLE requests (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        status TEXT NOT NULL,
        priority TEXT NOT NULL,
        criticality TEXT NOT NULL,
        customer_label TEXT NOT NULL,
        site_label TEXT NOT NULL,
        assigned_technician_label TEXT,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        detail_id TEXT NOT NULL,
        is_demo INTEGER NOT NULL DEFAULT 1
      );
      INSERT INTO requests (
        id, title, status, priority, criticality,
        customer_label, site_label, assigned_technician_label,
        created_at, updated_at, detail_id, is_demo
      ) VALUES (
        'LEGACY-001', 'Legacy request', 'STAT-01', 'low', 'standard',
        'Legacy client', 'Legacy site', 'Legacy tech',
        '2026-01-01T00:00:00.000Z', '2026-01-01T00:00:00.000Z', 'LEGACY-001', 1
      );
    `);
    legacyDb.close();

    const migratedDb = new Database(legacyDbPath);
    applySqliteSchema(migratedDb);
    const columnNames = getRequestColumnNames(migratedDb);
    const count = migratedDb
      .prepare("SELECT COUNT(*) AS count FROM requests")
      .get() as { count: number };
    migratedDb.close();

    expect(columnNames).toEqual(
      expect.arrayContaining([
        "requester_name",
        "requester_team",
        "assigned_to_user_id",
        "assigned_to_display_name",
      ]),
    );
    expect(count.count).toBe(1);

    fs.unlinkSync(legacyDbPath);
  });

  it("seeds enriched requester and assignment fields", () => {
    const requests = listRequests();
    const demo001 = requests.find((item) => item.id === "SAV-DEMO-001");

    expect(demo001).toMatchObject({
      requesterName: "Alice Demandeur",
      requesterTeam: "Centre demandeur",
      assignedToUserId: "user-technician",
      assignedToDisplayName: "Théo Technicien",
      customerLabel: "Client Démo Industrie",
      assignedTechnicianLabel: "Technicien Démo 01",
    });
  });

  it("persists enriched request fields across database reopen", () => {
    const { request: beforeClose } = getRequestWithDetail("SAV-DEMO-002");

    expect(beforeClose.requesterName).toBe("Maya Responsable");
    expect(beforeClose.requesterTeam).toBe("Pilotage SAV");
    expect(beforeClose.assignedToUserId).toBe("user-technician");

    closeDemoStoreForTests();

    const { request: afterReopen } = getRequestWithDetail("SAV-DEMO-002");
    expect(afterReopen.requesterName).toBe(beforeClose.requesterName);
    expect(afterReopen.assignedToDisplayName).toBe("Théo Technicien");
  });

  it("reset restores enriched request seed", () => {
    resetDemoStoreForTests();

    const { request } = getRequestWithDetail("SAV-DEMO-003");
    expect(request.requesterName).toBe("Alice Demandeur");
    expect(request.assignedToUserId).toBe("user-technician");
    expect(request.customerLabel).toBe("Client Démo Maintenance");
  });
});
