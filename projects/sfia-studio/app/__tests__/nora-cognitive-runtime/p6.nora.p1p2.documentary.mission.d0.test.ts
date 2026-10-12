/**
 * P6 Nora P1+P2 — consolidated documentary mission (deterministic).
 *
 * Proves:
 * 1) Legacy ceiling maxTurns=5 + no continuation → incomplete (P0 honesty)
 * 2) Adaptive mission budget completes 7-turn script without Pilote relaunch
 * 3) Controlled continuation via native RunState when mission > segment
 * 4) Campaign clamp still binds
 * 5) Exhausted mission remains incomplete (no false ok)
 *
 * ZERO REAL — ScriptedModel / temp ProductSqliteSession.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import {
  ProductSqliteSession,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import {
  acquireNoraCampaignBudget,
  campaignBudgetSnapshot,
} from "@/lib/nora-cognitive-runtime/campaignBudget";
import { CONTINUATION_SEGMENT_MAX_TURNS } from "@/lib/nora-cognitive-runtime/controlledContinuation";

const DOC_PATH = "projects/sfia-studio/app/package.json";
const COMPLETE_MARKER = "COMPLETE_DOC_ANALYSIS_SYNTHESIS";

const dirs: string[] = [];

function tmpSession(projectId: string): ProductSqliteSession {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-p1p2-"));
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

/** Six sequential document reads then a final synthesis — needs 7 model turns. */
function documentaryScriptNeedingSevenModelTurns() {
  return [
    [
      functionCall(
        "git_local_read_file",
        { path: DOC_PATH, maxBytes: 2048 },
        { callId: "doc_r1" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        { path: DOC_PATH, maxBytes: 2048 },
        { callId: "doc_r2" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        { path: DOC_PATH, maxBytes: 2048 },
        { callId: "doc_r3" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        { path: DOC_PATH, maxBytes: 2048 },
        { callId: "doc_r4" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        { path: DOC_PATH, maxBytes: 2048 },
        { callId: "doc_r5" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        { path: DOC_PATH, maxBytes: 2048 },
        { callId: "doc_r6" },
      ),
    ],
    [assistantMessage(COMPLETE_MARKER)],
  ];
}

async function runDocumentary(opts: {
  projectId: string;
  maxTurns?: number;
  enableControlledContinuation?: boolean;
  cognitiveStrategyClass?: "Routine" | "Focused" | "Deep" | "High-Assurance";
  campaign?: ReturnType<typeof acquireNoraCampaignBudget>;
}) {
  const session = tmpSession(opts.projectId);
  const model = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
  return runNoraAgentsTurn({
    correlationId: `cor:${opts.projectId}`,
    projectId: opts.projectId,
    systemInstructions: sfiaBoundaryInstructions(),
    userContent:
      "Analyse plusieurs documents du projet et produis une synthèse argumentée.",
    session,
    model,
    enableTools: true,
    workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    maxTurns: opts.maxTurns,
    enableControlledContinuation: opts.enableControlledContinuation,
    cognitiveStrategyClass: opts.cognitiveStrategyClass ?? "Deep",
    campaignBudget: opts.campaign,
  });
}

describe("P6 Nora P1+P2 — documentary mission consolidated", () => {
  it("T-legacy — maxTurns=5 + continuation off → incomplete (P0 non-regression)", async () => {
    const result = await runDocumentary({
      projectId: "prj:p1p2-legacy",
      maxTurns: 5,
      enableControlledContinuation: false,
      cognitiveStrategyClass: "Routine",
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).not.toContain(COMPLETE_MARKER);
    expect(result.continuationObserve?.continued).toBe(false);
    expect(result.adaptiveObserve?.explicitOverride).toBe(true);
  });

  it("T-P1 — adaptive Deep mission (≥7) completes without Pilote relaunch", async () => {
    // Explicit 10 — within ceiling; proves adapted budget (not legacy 5).
    const result = await runDocumentary({
      projectId: "prj:p1p2-adaptive",
      maxTurns: 10,
      // Single segment with full mission budget — P1 alone can complete.
      enableControlledContinuation: false,
      cognitiveStrategyClass: "Deep",
    });
    expect(result.limitReached).toBe(false);
    expect(result.text).toContain(COMPLETE_MARKER);
    expect(result.adaptiveObserve?.requestedMaxTurns).toBe(10);
    expect(result.adaptiveObserve?.effectiveMaxTurns).toBe(10);
  });

  it("T-P2 — mission 10 with segment 5 continues via RunState and completes", async () => {
    expect(CONTINUATION_SEGMENT_MAX_TURNS).toBe(5);
    const result = await runDocumentary({
      projectId: "prj:p1p2-continue",
      maxTurns: 10,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Deep",
    });
    expect(result.continuationObserve?.continued).toBe(true);
    expect(result.continuationObserve?.segmentsExecuted).toBeGreaterThanOrEqual(
      2,
    );
    expect(result.limitReached).toBe(false);
    expect(result.text).toContain(COMPLETE_MARKER);
    expect(result.continuationObserve?.stopReason).toBe("complete");
  });

  it("T-campaign — remaining model invocations clamp mission (no bypass)", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "camp:p1p2-clamp",
      maxModelInvocations: 4,
      maxHostedWebOperations: 0,
      maxAggregateRealCalls: 4,
    });
    const result = await runDocumentary({
      projectId: "prj:p1p2-clamp",
      maxTurns: 10,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Deep",
      campaign,
    });
    expect(result.adaptiveObserve?.effectiveMaxTurns).toBeLessThanOrEqual(4);
    expect(result.limitReached).toBe(true);
    expect(result.text).not.toContain(COMPLETE_MARKER);
    const snap = campaignBudgetSnapshot(campaign);
    expect(snap.consumedModelInvocations).toBeLessThanOrEqual(4);
  });

  it("T-exhaust — mission budget too small remains incomplete (honest)", async () => {
    const result = await runDocumentary({
      projectId: "prj:p1p2-exhaust",
      maxTurns: 3,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Routine",
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).not.toContain(COMPLETE_MARKER);
    expect(result.continuationObserve?.stopReason).not.toBe("complete");
  });
});
