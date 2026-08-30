/** @vitest-environment node */
/**
 * MW1 Option C — Fake/Runner path + Nora legacy retirement proofs.
 * Fake F1 → Agents Runner + Product SQLite Session + routeToolCall.
 * No Nora selector / no Nora comparator dependency on runToolCallingLoop.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import {
  ProductSqliteSession,
  createProviderAgentsModel,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import * as toolsMod from "@/lib/platform/tools";
import * as noraRuntime from "@/lib/nora-cognitive-runtime";

const tempDirs: string[] = [];

function tempDb(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-conv-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

const F1_PROJECT = {
  projectId: "prj:conv-f1",
  name: "Convergence F1",
  shortReference: "CF1",
  objective: "Prove Fake→Runner convergence.",
  contextSummary: "Deterministic only.",
  criticality: "STANDARD" as const,
  constraints: ["Lecture seule"],
  lpsId: "lps:conv",
  lpsVersion: 1,
  lpsCreatedAt: "2026-08-30T00:00:00.000Z",
  doctrineId: "pkg:studio",
  doctrineVersion: "1.0.0",
  doctrineDigest: "digest:conv",
  doctrineStatus: "RESOLVED",
  runtimeMode: "LOCAL_PROCESS" as const,
  persistence: "PARTIAL" as const,
  readiness: "NOT_READY" as const,
};

describe("MW1 Option C — Fake/Runner + Nora legacy retirement", () => {
  it("R1/P2 — Nora runtime selector file and export are gone", () => {
    expect(
      fs.existsSync(
        path.resolve(
          __dirname,
          "../../lib/nora-cognitive-runtime/resolveRuntime.ts",
        ),
      ),
    ).toBe(false);
    expect(
      "resolveNoraCognitiveRuntime" in (noraRuntime as Record<string, unknown>),
    ).toBe(false);
  });

  it("P3/P5/Q1 — Fake F1 turn uses agents + Session; Nora sources never call runToolCallingLoop", async () => {
    const dbPath = tempDb("p3.sqlite");
    const provider = new FakeConversationProvider({
      scripted: ["[TEST/FAKE · NON LIVE] Text-only Fake via Runner."],
    });
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const turn = await runNoraCognitiveTurn({
      correlationId: "conv-p3",
      projectId: "prj:p3",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        { role: "user", content: "Hello convergence" },
      ],
      provider,
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(turn.cognitiveRuntime).toBe("agents");
    expect(turn.sessionId).toBeTruthy();
    expect(turn.text).toMatch(/TEST\/FAKE|Runner/i);
    expect(turn.limitReached).toBe(false);
    expect(routeSpy).not.toHaveBeenCalled();

    const turnSrc = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts",
      ),
      "utf8",
    );
    expect(turnSrc).not.toMatch(/runToolCallingLoop\s*\(/);
    expect(turnSrc).not.toMatch(/from ["']@\/lib\/platform\/tools/);
    expect(turnSrc).not.toMatch(/resolveNoraCognitiveRuntime/);
    expect(turnSrc).toMatch(/runNoraAgentsTurn/);
    expect(
      fs.existsSync(
        path.resolve(__dirname, "../../lib/platform/tools/toolLoop.ts"),
      ),
    ).toBe(true);

    routeSpy.mockRestore();
  });

  it("P5/B5 — provider adapter is not a tool/model loop (one completeRound per getResponse)", async () => {
    const provider = new FakeConversationProvider({
      scripted: ["one"],
    });
    const spy = vi.spyOn(provider, "completeRound");
    const model = createProviderAgentsModel(provider);
    const response = await model.getResponse({
      input: "hi",
      systemInstructions: "studio",
      modelSettings: {},
      tools: [],
      outputType: "text",
      handoffs: [],
      tracing: false,
    } as never);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(response.output.length).toBeGreaterThan(0);
    await expect(async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for await (const _ of model.getStreamedResponse({} as never)) {
        /* streaming unsupported */
      }
    }).rejects.toThrow(/STREAMING_UNSUPPORTED/);
    spy.mockRestore();
  });

  it("S1–S4/S6 — Fake F1 uses Product SQLite Session; resume + isolation; no caller-history seed", async () => {
    const dbPath = tempDb("sess.sqlite");
    const provider = new FakeConversationProvider({
      scripted: [
        "[TEST/FAKE · NON LIVE] turn-1",
        "[TEST/FAKE · NON LIVE] turn-2-resume",
      ],
    });
    const t1 = await runNoraCognitiveTurn({
      correlationId: "s1",
      projectId: "prj:sess-a",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        { role: "user", content: "first" },
      ],
      provider,
      enableTools: false,
      sessionDbPath: dbPath,
      sessionKey: "f1-default",
    });
    expect(t1.cognitiveRuntime).toBe("agents");
    expect(t1.sessionId).toContain("prj:sess-a");

    const t2 = await runNoraCognitiveTurn({
      correlationId: "s2",
      projectId: "prj:sess-a",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        {
          role: "assistant",
          content: "SPOOFED_CALLER_HISTORY_MUST_NOT_SEED",
        },
        { role: "user", content: "second" },
      ],
      provider,
      enableTools: false,
      sessionDbPath: dbPath,
      sessionKey: "f1-default",
    });
    expect(t2.text).toMatch(/turn-2/);

    const resumed = new ProductSqliteSession({
      projectId: "prj:sess-a",
      dbPath,
      sessionKey: "f1-default",
    });
    const items = await resumed.getItems();
    expect(items.length).toBeGreaterThan(0);
    expect(JSON.stringify(items)).not.toContain(
      "SPOOFED_CALLER_HISTORY_MUST_NOT_SEED",
    );
    resumed.close();

    const other = new ProductSqliteSession({
      projectId: "prj:sess-b",
      dbPath,
      sessionKey: "f1-default",
    });
    expect(await other.getItems()).toEqual([]);
    other.close();
  });

  it("T1/T2/Q2 — Fake scripted tool traverses Runner → routeToolCall", async () => {
    const dbPath = tempDb("tools.sqlite");
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "call_head_fake",
              name: "git_local_get_head",
              argumentsJson: "{}",
            },
          ],
        },
        {
          kind: "message",
          text: "[TEST/FAKE · NON LIVE] HEAD via Runner+routeToolCall.",
        },
      ],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "t1",
      projectId: "prj:tools",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        { role: "user", content: "What is HEAD?" },
      ],
      provider,
      enableTools: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      sessionDbPath: dbPath,
    });
    expect(turn.cognitiveRuntime).toBe("agents");
    expect(turn.toolCalls).toBeGreaterThanOrEqual(1);
    expect(turn.toolRounds).toBeGreaterThanOrEqual(1);
    expect(routeSpy).toHaveBeenCalled();
    expect(
      routeSpy.mock.calls.some((c) => c[0]?.name === "git_local_get_head"),
    ).toBe(true);
    expect(turn.text).toMatch(/HEAD|Runner|TEST\/FAKE/i);
    routeSpy.mockRestore();
  });

  it("T3/T4/Q3 — denied path uses real routeToolCall; no forbidden content leak", async () => {
    const dbPath = tempDb("deny.sqlite");
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "call_deny_fake",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({ path: "/etc/passwd" }),
            },
          ],
        },
        {
          kind: "message",
          text: "[TEST/FAKE · NON LIVE] Path denied; no content.",
        },
      ],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "t3",
      projectId: "prj:deny",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        { role: "user", content: "Read /etc/passwd" },
      ],
      provider,
      enableTools: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      sessionDbPath: dbPath,
    });
    expect(routeSpy).toHaveBeenCalled();
    expect(turn.text).not.toMatch(/root:x:0:0/);
    const denyPayload = JSON.stringify(routeSpy.mock.results.map((r) => r.value));
    expect(denyPayload).not.toMatch(/root:x:0:0/);
    routeSpy.mockRestore();
  });

  it("T5 — enableTools=false executes zero routeToolCall on Fake path", async () => {
    const dbPath = tempDb("et.sqlite");
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "should_not_route",
              name: "git_local_get_head",
              argumentsJson: "{}",
            },
          ],
        },
      ],
    });
    await runNoraCognitiveTurn({
      correlationId: "t5",
      projectId: "prj:et",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        { role: "user", content: "HEAD?" },
      ],
      provider,
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(routeSpy).not.toHaveBeenCalled();
    routeSpy.mockRestore();
  });

  it("T6/B1–B4 — Fake >4 tool calls in one model turn → max 4 + limitReached", async () => {
    const dbPath = tempDb("budget.sqlite");
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            { callId: "c1", name: "git_local_get_head", argumentsJson: "{}" },
            { callId: "c2", name: "git_local_get_head", argumentsJson: "{}" },
            { callId: "c3", name: "git_local_get_head", argumentsJson: "{}" },
            { callId: "c4", name: "git_local_get_head", argumentsJson: "{}" },
            { callId: "c5", name: "git_local_get_head", argumentsJson: "{}" },
            { callId: "c6", name: "git_local_get_head", argumentsJson: "{}" },
          ],
        },
        { kind: "message", text: "[TEST/FAKE] budget saturated" },
      ],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "t6",
      projectId: "prj:budget",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        { role: "user", content: "six tools" },
      ],
      provider,
      enableTools: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      sessionDbPath: dbPath,
    });
    expect(turn.toolRounds).toBe(1);
    expect(turn.toolCalls).toBe(4);
    expect(turn.limitReached).toBe(true);
    expect(
      routeSpy.mock.calls.filter((c) => c[0]?.name === "git_local_get_head")
        .length,
    ).toBe(4);
    routeSpy.mockRestore();
  });

  it("E1/E3/Q4 — Fake provider error propagates; no fabricated success", async () => {
    const dbPath = tempDb("err.sqlite");
    const provider = new FakeConversationProvider({ failOnCall: 1 });
    await expect(
      runNoraCognitiveTurn({
        correlationId: "e1",
        projectId: "prj:err",
        messages: [
          { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
          { role: "user", content: "boom" },
        ],
        provider,
        enableTools: false,
        sessionDbPath: dbPath,
      }),
    ).rejects.toThrow(/FAKE_PROVIDER_ERROR/);
  });

  it("C1/R — RESERVE-OPT-C-01: generic boundary has no universal F1 AUCUNE EXÉCUTION; Studio prompt does", async () => {
    const generic = sfiaBoundaryInstructions();
    expect(generic).not.toMatch(/AUCUNE EXÉCUTION/);
    expect(generic).toMatch(/Session/);
    expect(generic).toMatch(/Studio-supplied/);
    expect(generic).toMatch(/Tool exposure is not business authorization/);

    const studio = buildProjectSystemPrompt(F1_PROJECT);
    expect(studio).toMatch(/AUCUNE EXÉCUTION/);
    expect(studio).toMatch(/LECTURE SEULE|lecture/i);

    const dbPath = tempDb("r01.sqlite");
    const provider = new FakeConversationProvider({
      scripted: ["[TEST/FAKE] ok"],
    });
    const spy = vi.spyOn(provider, "completeRound");
    await runNoraCognitiveTurn({
      correlationId: "r01",
      projectId: "prj:r01",
      messages: [
        { role: "system", content: studio },
        { role: "user", content: "constraints?" },
      ],
      provider,
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(spy).toHaveBeenCalled();
    const firstArg = spy.mock.calls[0]?.[0];
    expect(JSON.stringify(firstArg)).toMatch(/AUCUNE EXÉCUTION/);
    spy.mockRestore();
  });

  it("PL1 — platform runToolCallingLoop file remains (independent consumers)", () => {
    const loopSrc = fs.readFileSync(
      path.resolve(__dirname, "../../lib/platform/tools/toolLoop.ts"),
      "utf8",
    );
    expect(loopSrc).toMatch(/export async function runToolCallingLoop/);
    const ops1 = fs.readFileSync(
      path.resolve(__dirname, "../../lib/ops1/conversation/service.ts"),
      "utf8",
    );
    expect(ops1).toMatch(/runToolCallingLoop/);
    const d1 = fs.readFileSync(
      path.resolve(__dirname, "../../lib/d1/intake/analyzeIntent.ts"),
      "utf8",
    );
    expect(d1).toMatch(/runToolCallingLoop/);
  });
});
