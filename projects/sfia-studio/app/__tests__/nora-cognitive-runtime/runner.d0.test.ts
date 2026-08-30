/** @vitest-environment node */
/**
 * MW1 Option C — Runner bounds / tools / schema / deny (CORR-OPT-C-02/04/05).
 * Nora legacy comparator debt retired — Runner-only proofs.
 */
import { describe, expect, it, vi } from "vitest";
import { Agent, Runner } from "@openai/agents";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { CONTROL_TOWER_TOOL_DEFINITIONS } from "@/lib/platform/tools";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import {
  ProductSqliteSession,
  createNoraAgentsRunner,
  createSfiaRouteToolAdapters,
  invokeSfiaToolViaRoute,
  runNoraAgentsTurn,
  runNoraCognitiveTurn,
  sdkToolParametersOf,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import * as toolsMod from "@/lib/platform/tools";

describe("MW1 Option C — Runner D0 (legacy Nora comparator retired)", () => {
  it("T1 — underlying SFIA tool git_local_get_head via routeToolCall", async () => {
    const out = await invokeSfiaToolViaRoute("git_local_get_head");
    expect(out.length).toBeGreaterThan(0);
    expect(out).toMatch(/[0-9a-f]{7,40}/i);
  });

  it("M2 — Fake F1 uses Agents Runner (not platform tool loop)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-m2-"));
    const dbPath = path.join(dir, "m2.sqlite");
    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "call_head_a",
              name: "git_local_get_head",
              argumentsJson: "{}",
            },
          ],
        },
        {
          kind: "message",
          text: "[TEST/FAKE] HEAD observed via Runner. AUCUNE EXÉCUTION.",
        },
      ],
    });
    const result = await runNoraCognitiveTurn({
      correlationId: "optc-fake-agents-d0",
      projectId: "prj:m2",
      messages: [
        {
          role: "system",
          content: buildProjectSystemPrompt({
            projectId: "prj:m2",
            name: "M2",
            shortReference: "M2",
            objective: "agents",
            contextSummary: "c",
            criticality: "STANDARD",
            constraints: ["Lecture seule"],
            lpsId: "lps",
            lpsVersion: 1,
            lpsCreatedAt: "2026-08-30T00:00:00.000Z",
            doctrineId: "pkg",
            doctrineVersion: "1",
            doctrineDigest: "d",
            doctrineStatus: "RESOLVED",
            runtimeMode: "LOCAL_PROCESS",
            persistence: "PARTIAL",
            readiness: "NOT_READY",
          }),
        },
        { role: "user", content: "What is the current HEAD?" },
      ],
      provider,
      enableTools: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      sessionDbPath: dbPath,
    });
    expect(result.cognitiveRuntime).toBe("agents");
    expect(result.toolCalls).toBeGreaterThanOrEqual(1);
    expect(result.text).toMatch(/HEAD|sha|branch|TEST\/FAKE|Runner/i);
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("T1 — Runner dispatches same SFIA tool through routeToolCall adapters", async () => {
    const model = new ScriptedModel([
      [functionCall("git_local_get_head", {}, { callId: "call_head_c" })],
      [assistantMessage("HEAD retrieved via SFIA read-only tool.")],
    ]);
    const tools = createSfiaRouteToolAdapters({
      correlationId: "optc-runner-d0",
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    const agent = new Agent({
      name: "NoraOptC",
      instructions: sfiaBoundaryInstructions(),
      model,
      tools,
    });
    const runner = createNoraAgentsRunner(sfiaBoundaryInstructions());
    const result = await runner.run(agent, "What is the current HEAD?");
    expect(String(result.finalOutput)).toMatch(/HEAD|retrieved/i);
    expect(model.calls.length).toBe(2);
    const lastInput = model.lastCall?.request.input;
    expect(Array.isArray(lastInput)).toBe(true);
    expect(
      (lastInput as unknown[]).some(
        (item) =>
          item &&
          typeof item === "object" &&
          (item as { type?: string }).type === "function_call_result",
      ),
    ).toBe(true);
    model.assertComplete();
  });

  it("T2/T3/A5 — real route-level PATH_NOT_ALLOWED via Runner (no synthetic Nora deny tool)", async () => {
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path: "/etc/passwd" },
          { callId: "call_deny" },
        ),
      ],
      [assistantMessage("Path denied by Studio router; no content.")],
    ]);
    const tools = createSfiaRouteToolAdapters({
      correlationId: "optc-deny-d0",
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(tools.some((t) => t.name === "forbidden_product_write")).toBe(false);
    const agent = new Agent({
      name: "DenyAgent",
      instructions: sfiaBoundaryInstructions(),
      model,
      tools,
    });
    const runner = createNoraAgentsRunner(sfiaBoundaryInstructions());
    const result = await runner.run(agent, "Read /etc/passwd");
    expect(routeSpy).toHaveBeenCalled();
    const denyCall = routeSpy.mock.calls.find(
      (c) => c[0]?.name === "git_local_read_file",
    );
    expect(denyCall).toBeTruthy();
    const out = String(result.finalOutput);
    expect(out).not.toMatch(/root:x:0:0/);
    // Model-visible tool result should reflect deny/failure, not file body
    const lastInput = model.lastCall?.request.input as unknown[];
    const toolResult = lastInput?.find(
      (item) =>
        item &&
        typeof item === "object" &&
        (item as { type?: string }).type === "function_call_result",
    ) as { output?: unknown } | undefined;
    const payload = JSON.stringify(toolResult?.output ?? toolResult ?? {});
    expect(payload).toMatch(/PATH_NOT_ALLOWED|denied|ok\":false|error/i);
    expect(payload).not.toMatch(/root:x:0:0/);
    model.assertComplete();
    routeSpy.mockRestore();
  });

  it("T4 — SDK raw schema preserves min/max/required/additionalProperties", () => {
    const adapters = createSfiaRouteToolAdapters({
      correlationId: "schema",
    });
    for (const name of [
      "git_local_search_files",
      "git_local_search_content",
      "git_local_read_file",
    ] as const) {
      const def = CONTROL_TOWER_TOOL_DEFINITIONS.find((d) => d.name === name)!;
      const sdk = sdkToolParametersOf(adapters, name)!;
      expect(sdk.type).toBe("object");
      expect(sdk.additionalProperties).toBe(false);
      expect(sdk.required).toEqual(def.parameters.required);
      const props = sdk.properties as Record<string, Record<string, unknown>>;
      const defProps = def.parameters.properties as Record<
        string,
        Record<string, unknown>
      >;
      for (const [key, schema] of Object.entries(defProps)) {
        expect(props[key]?.type).toBe(schema.type);
        if ("minimum" in schema) expect(props[key]?.minimum).toBe(schema.minimum);
        if ("maximum" in schema) expect(props[key]?.maximum).toBe(schema.maximum);
      }
    }
  });

  it("T5 — enableTools=false exposes/executes no SFIA tools", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-et-"));
    const dbPath = path.join(dir, "et.sqlite");
    const session = new ProductSqliteSession({ projectId: "prj:et", dbPath });
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const model = new ScriptedModel([
      [
        functionCall("git_local_get_head", {}, { callId: "should_not_run" }),
      ],
      [assistantMessage("no tools")],
    ]);
    // When tools are empty, ScriptedModel functionCall may error — catch and assert no route
    try {
      await runNoraAgentsTurn({
        correlationId: "et",
        projectId: "prj:et",
        systemInstructions: sfiaBoundaryInstructions(),
        userContent: "HEAD?",
        session,
        model,
        enableTools: false,
        maxTurns: 2,
      });
    } catch {
      /* model may fail if tool missing — still prove no routeToolCall */
    }
    expect(routeSpy).not.toHaveBeenCalled();
    routeSpy.mockRestore();
    session.close();
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("R1/R2/R6 — one model turn with ≤4 tool calls → toolRounds=1, limitReached=false", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-r1-"));
    const dbPath = path.join(dir, "r1.sqlite");
    const session = new ProductSqliteSession({ projectId: "prj:r1", dbPath });
    const model = new ScriptedModel([
      [
        functionCall("git_local_get_head", {}, { callId: "c1" }),
        functionCall("git_local_get_head", {}, { callId: "c2" }),
        functionCall("git_local_get_head", {}, { callId: "c3" }),
      ],
      [assistantMessage("three heads")],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "r1",
      projectId: "prj:r1",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "triple",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      maxTurns: 4,
    });
    expect(result.toolRounds).toBe(1);
    expect(result.toolCalls).toBe(3);
    expect(result.limitReached).toBe(false);
    expect(result.toolRounds).not.toBe(Math.min(result.toolCalls, 4)); // R7 guard vs old approx when equal by chance still ok
    model.assertComplete();
    session.close();
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("R3/R4 — >4 tool calls in one model turn → only 4 execute, limitReached=true", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-r3-"));
    const dbPath = path.join(dir, "r3.sqlite");
    const session = new ProductSqliteSession({ projectId: "prj:r3", dbPath });
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const model = new ScriptedModel([
      [
        functionCall("git_local_get_head", {}, { callId: "c1" }),
        functionCall("git_local_get_head", {}, { callId: "c2" }),
        functionCall("git_local_get_head", {}, { callId: "c3" }),
        functionCall("git_local_get_head", {}, { callId: "c4" }),
        functionCall("git_local_get_head", {}, { callId: "c5" }),
        functionCall("git_local_get_head", {}, { callId: "c6" }),
      ],
      [assistantMessage("budget saturated")],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "r3",
      projectId: "prj:r3",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "six",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      maxTurns: 4,
    });
    expect(result.toolRounds).toBe(1);
    expect(result.toolCalls).toBe(4);
    expect(result.limitReached).toBe(true);
    const headCalls = routeSpy.mock.calls.filter(
      (c) => c[0]?.name === "git_local_get_head",
    );
    expect(headCalls.length).toBe(4);
    model.assertComplete();
    routeSpy.mockRestore();
    session.close();
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("R5 — maxTurns exhaustion maps to limitReached=true (graceful Nora semantics)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-r5-"));
    const dbPath = path.join(dir, "r5.sqlite");
    const session = new ProductSqliteSession({ projectId: "prj:r5", dbPath });
    const model = new ScriptedModel([
      [functionCall("git_local_get_head", {}, { callId: "c1" })],
      [functionCall("git_local_get_head", {}, { callId: "c2" })],
      [functionCall("git_local_get_head", {}, { callId: "c3" })],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "r5",
      projectId: "prj:r5",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "loop",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      maxTurns: 2,
    });
    expect(result.limitReached).toBe(true);
    expect(result.text.length).toBeGreaterThan(0);
    session.close();
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("R5 comparator — raw Runner still throws MaxTurns without our handler", async () => {
    const model = new ScriptedModel([
      [functionCall("git_local_get_head", {}, { callId: "c1" })],
      [functionCall("git_local_get_head", {}, { callId: "c2" })],
      [functionCall("git_local_get_head", {}, { callId: "c3" })],
    ]);
    const tools = createSfiaRouteToolAdapters({
      correlationId: "optc-max",
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    const agent = new Agent({
      name: "Max",
      instructions: sfiaBoundaryInstructions(),
      model,
      tools,
    });
    const runner = new Runner({ tracingDisabled: true });
    await expect(runner.run(agent, "loop", { maxTurns: 2 })).rejects.toThrow();
  });

  it("M1 — Fake and target F1 emit cognitiveRuntime agents only", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-m1-"));
    const dbPath = path.join(dir, "m1.sqlite");
    const turn = await runNoraCognitiveTurn({
      correlationId: "m1",
      projectId: "prj:m1",
      messages: [
        { role: "system", content: "Studio F1. AUCUNE EXÉCUTION." },
        { role: "user", content: "ping" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] agents only"],
      }),
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(turn.cognitiveRuntime).toBe("agents");
    expect(turn.cognitiveRuntime).not.toBe("legacy" as never);
    fs.rmSync(dir, { recursive: true, force: true });
  });
});
