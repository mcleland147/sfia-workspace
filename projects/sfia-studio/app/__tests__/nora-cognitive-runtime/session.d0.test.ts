/** @vitest-environment node */
/**
 * MW1 Option C corrections — Product SQLite Session D0 (incl. CORR-OPT-C-03).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { Agent } from "@openai/agents";
import {
  ScriptedModel,
  assistantMessage,
} from "@openai/agents/testing";
import {
  ProductSqliteSession,
  createNoraAgentsRunner,
  resolveNoraSessionSqlitePath,
  sfiaBoundaryInstructions,
  userTextItem,
} from "@/lib/nora-cognitive-runtime";

const tempDirs: string[] = [];

function tempDb(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-sess-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW1 Option C — ProductSqliteSession D0 (corrected)", () => {
  it("S1 — project A cannot read project B history", async () => {
    const dbPath = tempDb("iso.sqlite");
    const a = new ProductSqliteSession({ projectId: "prj:a", dbPath });
    const b = new ProductSqliteSession({ projectId: "prj:b", dbPath });
    await a.addItems([userTextItem("secret-of-a")]);
    expect(await b.getItems()).toEqual([]);
    expect(JSON.stringify(await a.getItems())).toContain("secret-of-a");
    a.close();
    b.close();
  });

  it("S2 — two turns recover conversation via Session + Runner", async () => {
    const dbPath = tempDb("turns.sqlite");
    const session = new ProductSqliteSession({
      projectId: "prj:t",
      dbPath,
    });
    const model = new ScriptedModel([
      [assistantMessage("Noted city=Paris")],
      [assistantMessage("Paris is in France")],
    ]);
    const agent = new Agent({
      name: "Proof",
      instructions: sfiaBoundaryInstructions(),
      model,
    });
    const runner = createNoraAgentsRunner(sfiaBoundaryInstructions());
    const t1 = await runner.run(agent, "City is Paris", { session });
    expect(String(t1.finalOutput)).toContain("Paris");
    const t2 = await runner.run(agent, "What country?", { session });
    expect(String(t2.finalOutput)).toMatch(/France|Paris/i);
    expect((await session.getItems()).length).toBeGreaterThan(0);
    model.assertComplete();
    session.close();
  });

  it("S2 — recreate Session from same SQLite resumes", async () => {
    const dbPath = tempDb("resume.sqlite");
    const s1 = new ProductSqliteSession({
      projectId: "prj:r",
      dbPath,
      sessionKey: "k1",
    });
    await s1.addItems([userTextItem("continuity-token-XYZ")]);
    s1.close();
    const s2 = new ProductSqliteSession({
      projectId: "prj:r",
      dbPath,
      sessionKey: "k1",
    });
    expect(JSON.stringify(await s2.getItems())).toContain(
      "continuity-token-XYZ",
    );
    s2.close();
  });

  it("S4 — Session DB has only session_items — not Truth C oa_*", async () => {
    const dbPath = tempDb("schema.sqlite");
    const s = new ProductSqliteSession({ projectId: "prj:s", dbPath });
    await s.addItems([userTextItem("x")]);
    const tables = s.listTables();
    expect(tables).toEqual(["session_items"]);
    expect(tables.some((t) => t.startsWith("oa_"))).toBe(false);
    s.close();
  });

  it("S3 — retrieval failure distinguishable from empty history", async () => {
    const dbPath = tempDb("err.sqlite");
    const empty = new ProductSqliteSession({
      projectId: "prj:empty",
      dbPath,
    });
    expect(await empty.getItems()).toEqual([]);
    empty.simulateNextRetrievalFailure();
    await expect(empty.getItems()).rejects.toThrow(/SESSION_RETRIEVAL_ERROR/);
    empty.close();
  });

  it("S6 — addItems atomic rollback on mid-batch failure (SQLite trigger)", async () => {
    const dbPath = tempDb("atomic.sqlite");
    const s = new ProductSqliteSession({ projectId: "prj:atom", dbPath });
    await s.addItems([userTextItem("pre-existing")]);
    const before = await s.getItems();
    expect(before).toHaveLength(1);

    // Fail the second INSERT in a multi-item batch via DB trigger.
    // Before batch: 1 row. First insert succeeds (count=1). Second insert aborts (count≥2).
    s.getSqlite().exec(`
      CREATE TRIGGER fail_second_batch_insert
      BEFORE INSERT ON session_items
      WHEN (
        SELECT COUNT(*) FROM session_items
        WHERE project_id = NEW.project_id AND session_key = NEW.session_key
      ) >= 2
      BEGIN
        SELECT RAISE(ABORT, 'TEST_FORCED_INSERT_FAILURE');
      END;
    `);

    await expect(
      s.addItems([userTextItem("batch-1"), userTextItem("batch-2")]),
    ).rejects.toThrow(/TEST_FORCED_INSERT_FAILURE/);

    const after = await s.getItems();
    expect(after).toHaveLength(1);
    expect(JSON.stringify(after)).toContain("pre-existing");
    expect(JSON.stringify(after)).not.toContain("batch-1");
    expect(JSON.stringify(after)).not.toContain("batch-2");
    s.close();
  });

  it("default session path does not collide with oa-product.sqlite", () => {
    const prev = process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
    delete process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
    const p = resolveNoraSessionSqlitePath();
    expect(path.basename(p)).toBe("nora-session.sqlite");
    expect(p.includes("oa-product.sqlite")).toBe(false);
    if (prev !== undefined) process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH = prev;
  });
});
