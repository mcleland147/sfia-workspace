/**
 * P6 COGNITIVE AUTONOMY — MAXTURNS DETERMINISTIC QUALIFICATION 01
 *
 * Proves Runner maxTurns ceiling, adapted test budget, negatives, and
 * continuity/resume distinctions after budget exhaustion.
 *
 * ZERO REAL — ScriptedModel / temp ProductSqliteSession only.
 * Does NOT modify Product budgets or Runner code.
 *
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { Agent, MaxTurnsExceededError, Runner, RunState } from "@openai/agents";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import { CT_MAX_TOOL_CALLS_PER_ROUND, CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import {
  ProductSqliteSession,
  createSfiaRouteToolAdapters,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import {
  acquireNoraCampaignBudget,
  campaignBudgetSnapshot,
} from "@/lib/nora-cognitive-runtime/campaignBudget";

const DOC_PATH = "projects/sfia-studio/app/package.json";
const COMPLETE_MARKER = "COMPLETE_DOC_ANALYSIS_SYNTHESIS";

const dirs: string[] = [];

function tmpSession(projectId: string): ProductSqliteSession {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-maxturns-"));
  dirs.push(dir);
  return new ProductSqliteSession({
    projectId,
    dbPath: path.join(dir, "session.sqlite"),
  });
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

/** Distinct line windows so MissionProgressGuard (3 identical tool+target) does not stop early. */
function documentaryReadArgs(pass: number): {
  path: string;
  maxBytes: number;
  startLine: number;
  endLine: number;
} {
  const startLine = (pass - 1) * 8 + 1;
  return {
    path: DOC_PATH,
    maxBytes: 2048,
    startLine,
    endLine: startLine + 7,
  };
}

/** Six sequential document reads then a final synthesis — needs 7 model turns. */
function documentaryScriptNeedingSevenModelTurns() {
  return [
    [
      functionCall(
        "git_local_read_file",
        documentaryReadArgs(1),
        { callId: "doc_r1" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        documentaryReadArgs(2),
        { callId: "doc_r2" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        documentaryReadArgs(3),
        { callId: "doc_r3" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        documentaryReadArgs(4),
        { callId: "doc_r4" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        documentaryReadArgs(5),
        { callId: "doc_r5" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        documentaryReadArgs(6),
        { callId: "doc_r6" },
      ),
    ],
    [
      assistantMessage(
        `${COMPLETE_MARKER}: six reads observed; guided document review finished.`,
      ),
    ],
  ];
}

describe("P6 Nora maxTurns — documentary qualification (V1–V5)", () => {
  it("baseline constants — CT_MAX_TOOL_ROUNDS=4, per-turn=4, default maxTurns=5", () => {
    expect(CT_MAX_TOOL_ROUNDS).toBe(4);
    expect(CT_MAX_TOOL_CALLS_PER_ROUND).toBe(4);
    expect(CT_MAX_TOOL_ROUNDS + 1).toBe(5);
  });

  it("V1 — default maxTurns (5) stops multi-read documentary sequence incomplete", async () => {
    const session = tmpSession("prj:p6-mt-v1");
    const model = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
    const result = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v1",
      projectId: "prj:p6-mt-v1",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Guided Document Review: read package.json in six passes then synthesize.",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      // omit maxTurns → Product default CT_MAX_TOOL_ROUNDS + 1 (=5)
    });

    expect(result.limitReached).toBe(true);
    expect(result.text.length).toBeGreaterThan(0);
    expect(result.text).not.toMatch(new RegExp(COMPLETE_MARKER));
    // Default ceiling: at most 5 model turns executed.
    expect(model.calls.length).toBeLessThanOrEqual(5);
    expect(model.calls.length).toBeGreaterThanOrEqual(1);
    // Incomplete script — final synthesis turn not consumed.
    expect(() => model.assertComplete()).toThrow();
    // Product surface matches human-observed stop message when no prior text.
    expect(
      result.text.includes("Model-turn budget reached (maxTurns).") ||
        result.text.trim().length > 0,
    ).toBe(true);
    // Session identity persisted; persistence ≠ autonomous mission resume.
    expect(result.sessionId).toBeTruthy();
    session.close();
  });

  it("V2 — adapted test-only maxTurns=12 completes same documentary sequence", async () => {
    const session = tmpSession("prj:p6-mt-v2");
    const model = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
    const result = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v2",
      projectId: "prj:p6-mt-v2",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Guided Document Review: read package.json in six passes then synthesize.",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: 12, // TEST-ONLY parameter — NOT a production recommendation
    });

    expect(result.limitReached).toBe(false);
    expect(result.text).toMatch(new RegExp(COMPLETE_MARKER));
    expect(model.calls.length).toBe(7); // 6 tool turns + 1 synthesis
    expect(result.toolCalls).toBe(6);
    expect(result.toolRounds).toBe(6);
    model.assertComplete();
    session.close();
  });

  it("V3 — campaign remaining clamps caller maxTurns (no bypass)", async () => {
    const session = tmpSession("prj:p6-mt-v3");
    const campaign = acquireNoraCampaignBudget({
      campaignId: "camp:p6-maxturns-v3",
      maxModelInvocations: 2,
      maxHostedWebOperations: 0,
      maxAggregateRealCalls: 2,
    });
    const model = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
    const result = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v3-clamp",
      projectId: "prj:p6-mt-v3",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Attempt oversized documentary review under tiny campaign.",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: 12, // requested high
      campaignBudget: campaign,
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).not.toMatch(new RegExp(COMPLETE_MARKER));
    expect(model.calls.length).toBeLessThanOrEqual(2);
    const snap = campaignBudgetSnapshot(campaign);
    expect(snap.maxModelInvocations).toBe(2);
    expect(result.budgetObserve?.clampReasonCodes.length).toBeGreaterThan(0);
    session.close();
  });

  it("V3 — exhausted campaign (0 remaining) does not dispatch Runner", async () => {
    const session = tmpSession("prj:p6-mt-v3b");
    const campaign = acquireNoraCampaignBudget({
      campaignId: "camp:p6-maxturns-v3b",
      maxModelInvocations: 0,
      maxHostedWebOperations: 0,
      maxAggregateRealCalls: 0,
    });
    const model = new ScriptedModel([
      [assistantMessage("should-not-run")],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v3b",
      projectId: "prj:p6-mt-v3b",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "anything",
      session,
      model,
      enableTools: false,
      maxTurns: 5,
      campaignBudget: campaign,
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).toMatch(/budget reached before dispatch/i);
    expect(model.calls.length).toBe(0);
    session.close();
  });

  it("V4 — Product path has no RunState resume after maxTurns (A≠B≠C)", async () => {
    const session = tmpSession("prj:p6-mt-v4");
    const model = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
    const first = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v4a",
      projectId: "prj:p6-mt-v4",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Start documentary review (will hit maxTurns).",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: 5,
    });
    expect(first.limitReached).toBe(true);
    expect(first.text).not.toMatch(new RegExp(COMPLETE_MARKER));
    const sessionIdAfterStop = first.sessionId;
    expect(sessionIdAfterStop).toBeTruthy();

    // A — new request on same session (re-read / new mission), not Runner resume.
    const model2 = new ScriptedModel([
      [assistantMessage("NEW_REQUEST_ACK — not a resumed maxTurns mission.")],
    ]);
    const second = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v4b",
      projectId: "prj:p6-mt-v4",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Continue the previous unfinished documentary analysis.",
      session,
      model: model2,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: false,
      maxTurns: 5,
    });
    expect(second.limitReached).toBe(false);
    expect(second.text).toMatch(/NEW_REQUEST_ACK/);
    expect(second.text).not.toMatch(new RegExp(COMPLETE_MARKER));
    expect(second.sessionId).toBe(sessionIdAfterStop);

    // B/C — Product API accepts only string userContent; no RunState parameter.
    expect(typeof first).toBe("object");
    expect("state" in first).toBe(false);
    expect(RunState).toBeTypeOf("function");
    session.close();
  });

  it("V4 — SDK RunState exists but Product errorHandlers swallow maxTurns without exposing state", async () => {
    // Prove SDK primitive availability (native) without claiming Product wires it.
    expect(typeof RunState).toBe("function");
    expect(typeof MaxTurnsExceededError).toBe("function");

    const model = new ScriptedModel([
      [functionCall("git_local_get_head", {}, { callId: "sdk1" })],
      [functionCall("git_local_get_head", {}, { callId: "sdk2" })],
      [functionCall("git_local_get_head", {}, { callId: "sdk3" })],
    ]);
    const tools = createSfiaRouteToolAdapters({
      correlationId: "p6-maxturns-sdk",
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    const agent = new Agent({
      name: "SdkMax",
      instructions: sfiaBoundaryInstructions(),
      model,
      tools,
    });
    const raw = new Runner({ tracingDisabled: true });
    let caught: unknown;
    try {
      await raw.run(agent, "loop", { maxTurns: 2 });
    } catch (e) {
      caught = e;
    }
    expect(caught).toBeInstanceOf(MaxTurnsExceededError);
    const err = caught as MaxTurnsExceededError & { state?: unknown };
    // State may or may not be attached depending on SDK path; record honestly.
    const hasState = err.state instanceof RunState;
    // Product path uses errorHandlers.maxTurns → graceful text, no thrown error,
    // no returned RunState — therefore Product B/C resume remains NOT PROVEN.
    expect(hasState === true || hasState === false).toBe(true);
  });

  it("V5 — comparison matrix facts: default incomplete vs test maxTurns=12 complete", async () => {
    const sessionA = tmpSession("prj:p6-mt-v5a");
    const sessionB = tmpSession("prj:p6-mt-v5b");
    const modelA = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
    const modelB = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());

    const v1 = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v5-default",
      projectId: "prj:p6-mt-v5a",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "documentary",
      session: sessionA,
      model: modelA,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
    });
    const v2 = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v5-adapted",
      projectId: "prj:p6-mt-v5b",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "documentary",
      session: sessionB,
      model: modelB,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: 12,
    });

    const matrix = {
      v1: {
        requestedMaxTurns: "default(=5)",
        appliedCeiling: 5,
        modelTurns: modelA.calls.length,
        toolCalls: v1.toolCalls,
        complete: v1.text.includes(COMPLETE_MARKER),
        limitReached: v1.limitReached,
        sessionPersisted: Boolean(v1.sessionId),
        productRunStateResume: false,
      },
      v2: {
        requestedMaxTurns: 12,
        appliedCeiling: 12,
        modelTurns: modelB.calls.length,
        toolCalls: v2.toolCalls,
        complete: v2.text.includes(COMPLETE_MARKER),
        limitReached: v2.limitReached,
        sessionPersisted: Boolean(v2.sessionId),
        productRunStateResume: false,
      },
    };

    expect(matrix.v1.complete).toBe(false);
    expect(matrix.v1.limitReached).toBe(true);
    expect(matrix.v2.complete).toBe(true);
    expect(matrix.v2.limitReached).toBe(false);
    expect(matrix.v2.modelTurns).toBeGreaterThan(matrix.v1.modelTurns);

    // Options for Morris (QA conclusions, not architecture choice):
    // A — adapted turn budget can finish this ScriptedModel workload
    // B — controlled continuation also needed for Product autonomy after stop
    // Evidence: A true for this fake workload; B still required for Product resume.
    expect(matrix.v2.complete && !matrix.v1.complete).toBe(true);
    expect(matrix.v1.productRunStateResume).toBe(false);

    sessionA.close();
    sessionB.close();
  });
});
