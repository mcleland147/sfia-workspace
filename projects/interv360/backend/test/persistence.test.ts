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

    const { request, detail } = getRequestWithDetail("SAV-DEMO-001");
    expect(request.status).toBe("STAT-01");
    expect(request.siteLabel).toBe("Lyon Démo");
    expect(detail.category).toBe("Panne machine");
    expect(detail.requestedDate).toBe("2026-01-12T09:00:00.000Z");
    expect(detail.equipmentLabel).toBe("Ligne d'assemblage démo — poste 3");
    expect(detail.businessImpact).toBe(
      "Interruption d'un flux de production fictif planifié",
    );
    expect(listEventsForRequest("SAV-DEMO-001")).toHaveLength(0);
  });

  it("persists productized detail fields across database reopen", () => {
    const { detail: beforeClose } = getRequestWithDetail("SAV-DEMO-002");
    expect(beforeClose.requestedDate).toBe("2026-01-10T14:30:00.000Z");
    expect(beforeClose.equipmentLabel).toBe(
      "Capteur pression — zone démo atelier",
    );
    expect(beforeClose.businessImpact).toBe(
      "Surveillance opérationnelle démo dégradée",
    );

    closeDatabase();

    const { detail: afterReopen } = getRequestWithDetail("SAV-DEMO-002");
    expect(afterReopen.requestedDate).toBe(beforeClose.requestedDate);
    expect(afterReopen.equipmentLabel).toBe(beforeClose.equipmentLabel);
    expect(afterReopen.businessImpact).toBe(beforeClose.businessImpact);
  });
});
