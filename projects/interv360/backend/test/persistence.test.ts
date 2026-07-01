import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { closeDatabase } from "../src/persistence/sqliteDatabase.js";
import {
  applyTransition,
  closeDemoStoreForTests,
  getRequestWithDetail,
  listEventsForRequest,
  resetDemoStoreForTests,
} from "../src/store/demoStore.js";

describe("SQLite persistence", () => {
  let tempDbPath = "";

  beforeEach(() => {
    tempDbPath = path.join(
      os.tmpdir(),
      `interv360-persistence-${Date.now()}-${Math.random().toString(36).slice(2)}.sqlite`,
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

  it("persists transition and events across database reopen", () => {
    applyTransition("SAV-DEMO-001", "qualify");

    const eventsBeforeClose = listEventsForRequest("SAV-DEMO-001");
    expect(eventsBeforeClose).toHaveLength(1);
    expect(eventsBeforeClose[0]?.type).toBe("qualification.confirmed");

    closeDatabase();

    const { request } = getRequestWithDetail("SAV-DEMO-001");
    expect(request.status).toBe("STAT-02");

    const eventsAfterReopen = listEventsForRequest("SAV-DEMO-001");
    expect(eventsAfterReopen).toHaveLength(1);
    expect(eventsAfterReopen[0]?.toStatus).toBe("STAT-02");
  });

  it("reset restores seed and clears persisted events", () => {
    applyTransition("SAV-DEMO-001", "qualify");
    expect(listEventsForRequest("SAV-DEMO-001")).toHaveLength(1);

    resetDemoStoreForTests();

    const { request } = getRequestWithDetail("SAV-DEMO-001");
    expect(request.status).toBe("STAT-01");
    expect(listEventsForRequest("SAV-DEMO-001")).toHaveLength(0);
  });
});
