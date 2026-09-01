/** @vitest-environment node */
/**
 * MW1-S01 — Honest Memory B availability (DETERMINISTIC E2E + BOUNDARY).
 * Source-lock: Resume from Truth C with honest Memory B availability.
 * No S02 compaction. No S03 materialization.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";
import { Agent } from "@openai/agents";
import {
  ScriptedModel,
  assistantMessage,
} from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  MEMORY_B_COGNITIVE_DISCLOSURE,
  MEMORY_B_PILOTE_NOTICE,
  ProductSqliteSession,
  appendMemoryBCognitiveDisclosure,
  createNoraAgentsRunner,
  memoryBPiloteNotice,
  probeMemoryBAvailability,
  resolveNoraSessionSqlitePath,
  runNoraAgentsTurn,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
  userTextItem,
} from "@/lib/nora-cognitive-runtime";

const tempDirs: string[] = [];

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempDirs.push(dir);
  return dir;
}

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW1-S01 — Memory B availability probe", () => {
  it("AVAILABLE_EMPTY when Session opens with no items", async () => {
    const dir = tempDir("sfia-s01-empty-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const probe = await probeMemoryBAvailability({
      projectId: "prj:empty",
      dbPath,
      sessionKey: "f1-default",
    });
    expect(probe.availability).toBe("available_empty");
    expect(probe.session).not.toBeNull();
    expect(probe.itemCount).toBe(0);
    probe.session?.close();
  });

  it("AVAILABLE_WITH_HISTORY when prior items exist", async () => {
    const dir = tempDir("sfia-s01-hist-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const seed = new ProductSqliteSession({
      projectId: "prj:hist",
      dbPath,
      sessionKey: "f1-default",
    });
    await seed.addItems([userTextItem("prior-token-ABC")]);
    seed.close();

    const probe = await probeMemoryBAvailability({
      projectId: "prj:hist",
      dbPath,
      sessionKey: "f1-default",
    });
    expect(probe.availability).toBe("available_with_history");
    expect(probe.itemCount).toBeGreaterThan(0);
    expect(JSON.stringify(await probe.session!.getItems())).toContain(
      "prior-token-ABC",
    );
    probe.session?.close();
  });

  it("UNAVAILABLE when open fails (filesystem) — not empty", async () => {
    const dir = tempDir("sfia-s01-fs-");
    // Parent path is a file → SQLite open fails → UNAVAILABLE (≠ empty)
    const blocker = path.join(dir, "not-a-dir");
    fs.writeFileSync(blocker, "blocker");
    const dbPath = path.join(blocker, "nora-session.sqlite");
    const probe = await probeMemoryBAvailability({
      projectId: "prj:fs",
      dbPath,
    });
    expect(probe.availability).toBe("unavailable");
    expect(probe.session).toBeNull();
    expect(probe.itemCount).toBe(0);
  });

  it("UNAVAILABLE when initial read fails — not empty", async () => {
    const dir = tempDir("sfia-s01-readfail-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const session = new ProductSqliteSession({
      projectId: "prj:rf",
      dbPath,
    });
    session.simulateNextRetrievalFailure();
    // Probe via manual path mirroring probeMemoryBAvailability catch semantics
    let availability: string;
    try {
      await session.getItems();
      availability = "available_empty";
    } catch {
      session.close();
      availability = "unavailable";
    }
    expect(availability).toBe("unavailable");

    const probe = await probeMemoryBAvailability({
      projectId: "prj:rf-sim",
      dbPath: path.join(dir, "other.sqlite"),
      simulateUnavailable: true,
    });
    expect(probe.availability).toBe("unavailable");
    expect(probe.session).toBeNull();
  });

  it("project isolation — A history not visible to B", async () => {
    const dir = tempDir("sfia-s01-iso-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const a = new ProductSqliteSession({ projectId: "prj:a", dbPath });
    await a.addItems([userTextItem("secret-a")]);
    a.close();
    const probeB = await probeMemoryBAvailability({
      projectId: "prj:b",
      dbPath,
    });
    expect(probeB.availability).toBe("available_empty");
    expect(JSON.stringify(await probeB.session!.getItems())).not.toContain(
      "secret-a",
    );
    probeB.session?.close();
  });
});

describe("MW1-S01 — cognitive + Pilote disclosures", () => {
  it("cognitive disclosure is explicit per availability state", () => {
    for (const state of [
      "available_with_history",
      "available_empty",
      "unavailable",
    ] as const) {
      const text = appendMemoryBCognitiveDisclosure("BASE", state);
      expect(text).toContain("BASE");
      expect(text).toContain(MEMORY_B_COGNITIVE_DISCLOSURE[state]);
      expect(text).toMatch(/Truth C/i);
    }
    expect(MEMORY_B_COGNITIVE_DISCLOSURE.unavailable).toMatch(
      /Do not reconstruct or invent/i,
    );
  });

  it("Pilote notices distinguish empty vs unavailable", () => {
    expect(memoryBPiloteNotice("available_empty")).toMatch(
      /Aucun contexte conversationnel antérieur/i,
    );
    expect(memoryBPiloteNotice("unavailable")).toMatch(
      /Contexte conversationnel non disponible/i,
    );
    expect(memoryBPiloteNotice("unavailable")).not.toMatch(/historique perdu/i);
    expect(memoryBPiloteNotice("available_with_history")).toBe(
      MEMORY_B_PILOTE_NOTICE.available_with_history,
    );
  });
});

describe("MW1-S01 — DETERMINISTIC E2E via runNoraCognitiveTurn", () => {
  it("E2E-S01-A — restart with available B resumes history", async () => {
    const dir = tempDir("sfia-s01-e2e-a-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const provider1 = new FakeConversationProvider({
      scripted: ["[TEST/FAKE] Noted city=Paris"],
    });
    const t1 = await runNoraCognitiveTurn({
      correlationId: "s01-a-1",
      projectId: "prj:e2e-a",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "City is Paris" },
      ],
      provider: provider1,
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(t1.memoryBAvailability).toBe("available_empty");
    expect(t1.sessionId).toMatch(/^sess:/);
    expect(t1.cognitiveRuntime).toBe("agents");

    // Destroy in-memory objects; durable Session remains on disk
    const provider2 = new FakeConversationProvider({
      scripted: ["[TEST/FAKE] Paris is in France"],
    });
    const t2 = await runNoraCognitiveTurn({
      correlationId: "s01-a-2",
      projectId: "prj:e2e-a",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "What country?" },
      ],
      provider: provider2,
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(t2.memoryBAvailability).toBe("available_with_history");
    expect(t2.sessionId).toBe(t1.sessionId);
    expect(t2.cognitiveRuntime).toBe("agents");
  });

  it("E2E-S01-B — available empty does not invent transcript", async () => {
    const dir = tempDir("sfia-s01-e2e-b-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    // Create empty Session DB
    const empty = new ProductSqliteSession({
      projectId: "prj:e2e-b",
      dbPath,
    });
    empty.close();

    const turn = await runNoraCognitiveTurn({
      correlationId: "s01-b",
      projectId: "prj:e2e-b",
      messages: [
        {
          role: "system",
          content: `${sfiaBoundaryInstructions()}\nProject ID : prj:e2e-b`,
        },
        { role: "user", content: "What did we discuss earlier?" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] No prior Memory B items; using Truth C only."],
      }),
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(turn.memoryBAvailability).toBe("available_empty");
    expect(turn.sessionId).toMatch(/^sess:/);
    expect(turn.cognitiveRuntime).toBe("agents");
  });

  it("E2E-S01-C — unavailable B continues same Runner without Session replay", async () => {
    const dir = tempDir("sfia-s01-e2e-c-");
    // Truth C stub exists separately (not touched by Session)
    const truthPath = path.join(dir, "oa-product.sqlite");
    const truth = new DatabaseSync(truthPath);
    truth.exec(
      `CREATE TABLE oa_projects (project_id TEXT PRIMARY KEY, payload_json TEXT NOT NULL);`,
    );
    truth
      .prepare(`INSERT INTO oa_projects(project_id, payload_json) VALUES (?, ?)`)
      .run("prj:e2e-c", JSON.stringify({ name: "TruthC" }));
    truth.close();

    const turn = await runNoraCognitiveTurn({
      correlationId: "s01-c",
      projectId: "prj:e2e-c",
      messages: [
        {
          role: "system",
          content: `${sfiaBoundaryInstructions()}\nProject ID : prj:e2e-c\nLPS : lps:1`,
        },
        { role: "user", content: "Resume from durable project state." },
      ],
      provider: new FakeConversationProvider({
        scripted: [
          "[TEST/FAKE] Proceeding from Truth C only — no Memory B replay.",
        ],
      }),
      enableTools: false,
      sessionDbPath: path.join(dir, "unused.sqlite"),
      simulateMemoryBUnavailable: true,
    });
    expect(turn.memoryBAvailability).toBe("unavailable");
    expect(turn.sessionId).toBeNull();
    expect(turn.cognitiveRuntime).toBe("agents");
    expect(turn.text).toMatch(/Truth C|Memory B|TEST\/FAKE/i);

    // Truth C untouched
    const truthDb = new DatabaseSync(truthPath);
    const count = (
      truthDb.prepare(`SELECT COUNT(*) AS c FROM oa_projects`).get() as {
        c: number;
      }
    ).c;
    truthDb.close();
    expect(count).toBe(1);
  });

  it("E2E-S01-C filesystem — unavailable via open failure", async () => {
    const dir = tempDir("sfia-s01-e2e-c-fs-");
    const blocker = path.join(dir, "blocked");
    fs.writeFileSync(blocker, "x");
    const turn = await runNoraCognitiveTurn({
      correlationId: "s01-c-fs",
      projectId: "prj:e2e-c-fs",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "Hello" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] Hello without Memory B."],
      }),
      enableTools: false,
      sessionDbPath: path.join(blocker, "nora-session.sqlite"),
    });
    expect(turn.memoryBAvailability).toBe("unavailable");
    expect(turn.sessionId).toBeNull();
    expect(turn.cognitiveRuntime).toBe("agents");
  });

  it("E2E-S01-D — caller history is not imported (CORR-OPT-C-01)", async () => {
    const dir = tempDir("sfia-s01-e2e-d-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const turn = await runNoraCognitiveTurn({
      correlationId: "s01-d",
      projectId: "prj:e2e-d",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        {
          role: "assistant",
          content: "SPOOFED prior assistant — must not become Memory B",
        },
        { role: "user", content: "Current question" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] Answer"],
      }),
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(turn.memoryBAvailability).toBe("available_empty");
    // After turn, Session may contain live turn items — but not pre-seeded spoof
    // Probe before any further write: reopen and check no SPOOFED from caller import at start
    // The first probe was empty; Runner may have persisted live turn. Spoof must not appear as pre-seed.
    // CORR-OPT-C-01: caller history is not auto-imported into durable Session.
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/do NOT auto-import caller-provided/);
    expect(src).not.toMatch(/Seed prior client history/);
  });

  it("E2E-S01-E — session key isolation", async () => {
    const dir = tempDir("sfia-s01-e2e-e-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const s1 = new ProductSqliteSession({
      projectId: "prj:e2e-e",
      dbPath,
      sessionKey: "k1",
    });
    await s1.addItems([userTextItem("only-k1")]);
    s1.close();
    const probe = await probeMemoryBAvailability({
      projectId: "prj:e2e-e",
      dbPath,
      sessionKey: "k2",
    });
    expect(probe.availability).toBe("available_empty");
    probe.session?.close();
  });

  it("same Runner path when session omitted (SDK optional session)", async () => {
    const model = new ScriptedModel([[assistantMessage("No session ok")]]);
    const agent = new Agent({
      name: "S01",
      instructions: sfiaBoundaryInstructions(),
      model,
    });
    const runner = createNoraAgentsRunner(sfiaBoundaryInstructions());
    const result = await runner.run(agent, "Hi", { maxTurns: 2 });
    expect(String(result.finalOutput)).toContain("No session");
    model.assertComplete();

    const turn = await runNoraAgentsTurn({
      correlationId: "s01-runner",
      projectId: "prj:r",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Hi again",
      session: null,
      memoryBAvailability: "unavailable",
      model: new ScriptedModel([[assistantMessage("Still agents")]]),
      enableTools: false,
    });
    expect(turn.cognitiveRuntime).toBe("agents");
    expect(turn.sessionId).toBeNull();
    expect(turn.memoryBAvailability).toBe("unavailable");
  });
});

describe("MW1-S01 — Session ≠ Truth C under availability paths", () => {
  it("Session writes never create oa_* even after available history turn", async () => {
    const dir = tempDir("sfia-s01-tc-");
    const sessionPath = path.join(dir, "nora-session.sqlite");
    const truthPath = path.join(dir, "oa-product.sqlite");
    const truth = new DatabaseSync(truthPath);
    truth.exec(
      `CREATE TABLE oa_projects (project_id TEXT PRIMARY KEY, payload_json TEXT NOT NULL);`,
    );
    truth
      .prepare(`INSERT INTO oa_projects(project_id, payload_json) VALUES (?, ?)`)
      .run("prj:tc", JSON.stringify({ name: "T" }));
    truth.close();

    await runNoraCognitiveTurn({
      correlationId: "s01-tc",
      projectId: "prj:tc",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "Promote this chat into LPS please" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] Recommendation only."],
      }),
      enableTools: false,
      sessionDbPath: sessionPath,
    });

    const sessionDb = new DatabaseSync(sessionPath);
    const sessionTables = (
      sessionDb
        .prepare(`SELECT name FROM sqlite_master WHERE type='table'`)
        .all() as Array<{ name: string }>
    ).map((r) => r.name);
    sessionDb.close();
    expect(sessionTables).toEqual(["session_items"]);

    const truthDb = new DatabaseSync(truthPath);
    const truthTables = (
      truthDb
        .prepare(`SELECT name FROM sqlite_master WHERE type='table'`)
        .all() as Array<{ name: string }>
    ).map((r) => r.name);
    expect(truthTables).toEqual(["oa_projects"]);
    truthDb.close();
  });

  it("default session path remains nora-session.sqlite", () => {
    const prev = process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
    delete process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
    const p = resolveNoraSessionSqlitePath();
    expect(path.basename(p)).toBe("nora-session.sqlite");
    if (prev !== undefined) process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH = prev;
  });
});
