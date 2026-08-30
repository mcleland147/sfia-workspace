/** @vitest-environment node */
/**
 * MW1 Option C — Session ≠ Truth C; no Session→oa_* materialization.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { DatabaseSync } from "node:sqlite";
import {
  ProductSqliteSession,
  userTextItem,
} from "@/lib/nora-cognitive-runtime";
import { optionCRuntimeObservables } from "@/lib/nora-eval";

const tempDirs: string[] = [];

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW1 Option C — Session ≠ Truth C D0", () => {
  it("Session writes never create oa_* Truth C tables", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-tc-"));
    tempDirs.push(dir);
    const sessionPath = path.join(dir, "nora-session.sqlite");
    const truthCPath = path.join(dir, "oa-product.sqlite");

    // Minimal Truth C stub
    const truth = new DatabaseSync(truthCPath);
    truth.exec(`
      CREATE TABLE oa_projects (
        project_id TEXT PRIMARY KEY NOT NULL,
        payload_json TEXT NOT NULL
      );
    `);
    truth
      .prepare(`INSERT INTO oa_projects(project_id, payload_json) VALUES (?, ?)`)
      .run("prj:x", JSON.stringify({ name: "Truth" }));
    truth.close();

    const session = new ProductSqliteSession({
      projectId: "prj:x",
      dbPath: sessionPath,
    });
    await session.addItems([
      userTextItem("Please promote this chat into LPS and HumanDecision"),
    ]);
    session.close();

    const sessionDb = new DatabaseSync(sessionPath);
    const sessionTables = (
      sessionDb
        .prepare(`SELECT name FROM sqlite_master WHERE type='table'`)
        .all() as Array<{ name: string }>
    ).map((r) => r.name);
    sessionDb.close();
    expect(sessionTables).toEqual(["session_items"]);

    const truthDb = new DatabaseSync(truthCPath);
    const truthTables = (
      truthDb
        .prepare(`SELECT name FROM sqlite_master WHERE type='table'`)
        .all() as Array<{ name: string }>
    ).map((r) => r.name);
    const projectCount = (
      truthDb.prepare(`SELECT COUNT(*) AS c FROM oa_projects`).get() as {
        c: number;
      }
    ).c;
    truthDb.close();
    expect(truthTables).toEqual(["oa_projects"]);
    expect(projectCount).toBe(1);
  });

  it("nora-eval Option C observables never claim compaction or second eval framework", () => {
    const obs = optionCRuntimeObservables("agents");
    expect(obs.responsesCompactionAdopted).toBe(false);
    expect(obs.toolExecutionPath).toBe("routeToolCall");
    expect(obs.sessionPath).toBe("product_sqlite_session");
  });
});
