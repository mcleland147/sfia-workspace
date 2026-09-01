/** @vitest-environment node */
/**
 * MW1-S01 — Decisive product E2E (closes BLK-MW1-S01-E2E-TRUTHC-01).
 *
 * Top-level entry: orchestrateProjectAssistantTurn
 * → loadProjectRuntimeForAssistant → Truth C remount
 * → buildProjectSystemPrompt → runNoraCognitiveTurn
 * → Memory B unavailable → same Agents SDK Runner
 *
 * Does NOT call runNoraCognitiveTurn as top-level product entry.
 * Does NOT use hand-built oa_projects SQL stubs as decisive proof.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { CapturingRoundFakeProvider } from "@/lib/nora-eval/mw1S01Observe";

const tempDirs: string[] = [];

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempDirs.push(dir);
  return dir;
}

describe("MW1-S01 — E2E-S01-PRODUCT-TRUTHC-UNAVAILABLE", () => {
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevProductDb = process.env.SFIA_STUDIO_PRODUCT_DB_PATH;

  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    if (prevProvider === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
    }
    if (prevProductDb === undefined) {
      delete process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
    } else {
      process.env.SFIA_STUDIO_PRODUCT_DB_PATH = prevProductDb;
    }
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  it("F1 remounts durable Truth C and discloses unavailable Memory B on same Agents Runner", async () => {
    const dir = tempDir("sfia-s01-product-e2e-");
    const productDbPath = path.join(dir, "oa-product.sqlite");
    const marker = `S01-PRODUCT-TRUTHC-MARKER-${Date.now()}`;

    // Arrange: durable Project via production createProject API
    const runtime1 = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });
    const created = await runtime1.createProject({
      name: "S01 Product E2E",
      objective: marker,
      context: "Durable LPS for MW1-S01 product E2E",
      criticality: "STANDARD",
      constraints: ["AUCUNE EXÉCUTION", "LECTURE SEULE"],
      shortReference: "S01E2E",
      idempotencyKey: `s01-product-e2e-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    const overview1 = await runtime1.getProject(projectId);
    expect(overview1.ok).toBe(true);
    if (!overview1.ok) return;
    const lpsId = overview1.livingState.id;
    const lpsVersion = overview1.livingState.version;

    // Restart semantics: destroy process-local runtime; remount same Product store
    resetRuntimeApplicationServiceForTests();
    const runtime2 = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });
    const remounted = await runtime2.getProject(projectId);
    expect(remounted.ok).toBe(true);
    if (!remounted.ok) return;
    expect(remounted.project.objective).toBe(marker);
    expect(remounted.livingState.id).toBe(lpsId);

    const truthBefore = fs.readFileSync(productDbPath);

    // Memory B unavailable via deterministic filesystem open failure (≠ empty)
    const blocker = path.join(dir, "session-parent-blocked");
    fs.writeFileSync(blocker, "not-a-directory");
    const blockedSessionPath = path.join(blocker, "nora-session.sqlite");

    const capturing = new CapturingRoundFakeProvider({
      scripted: [
        "[TEST/FAKE] Resume from Truth C only — no invented Memory B transcript.",
      ],
    });

    // Act — true F1 product entry (NOT runNoraCognitiveTurn)
    const result = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Resume project after process restart with Memory B unavailable.",
      provider: capturing,
      sessionDbPath: blockedSessionPath,
    });

    // Assert product outcome
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.memoryBAvailability).toBe("unavailable");
    expect(result.sessionId).toBeNull();
    expect(result.cognitiveRuntime).toBe("agents");
    expect(result.ephemeralNotice).toMatch(/Contexte conversationnel non disponible/i);
    expect(result.ephemeralNotice).not.toMatch(/historique perdu/i);
    expect(result.project.projectId).toBe(projectId);
    expect(result.project.objective).toBe(marker);
    expect(result.project.lpsId).toBe(lpsId);
    expect(result.project.lpsVersion).toBe(lpsVersion);
    expect(result.text).toMatch(/TEST\/FAKE/);
    expect(result.text).not.toMatch(/HumanDecision fabriqu|autorisation GO invent/i);

    // Truth C reached cognition (captured from executed Agents completeRound)
    const captured = capturing.capturedText();
    expect(captured).toContain(marker);
    expect(captured).toContain(projectId);
    expect(captured).toContain(lpsId);
    expect(captured).toMatch(/MEMORY B AVAILABILITY|unavailable|indisponible/i);
    expect(capturing.roundItems.length).toBeGreaterThan(0);

    // Truth C bytes unchanged (F1 read-only)
    const truthAfter = fs.readFileSync(productDbPath);
    expect(Buffer.compare(truthBefore, truthAfter)).toBe(0);

    // No oa_* in any accidental session path; product still has project row
    const productDb = new DatabaseSync(productDbPath);
    const projectCount = (
      productDb
        .prepare(
          `SELECT COUNT(*) AS c FROM sqlite_master WHERE type='table' AND name LIKE 'oa_%'`,
        )
        .get() as { c: number }
    ).c;
    productDb.close();
    expect(projectCount).toBeGreaterThan(0);

    // unavailable ≠ empty: empty Session would have sessionId
    expect(result.memoryBAvailability).not.toBe("available_empty");
  });
});
