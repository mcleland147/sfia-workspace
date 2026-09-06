/** @vitest-environment node */
/**
 * CORR-02B — MW6 factual hosted observation propagation — ZERO REAL.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai";
import {
  acquireNoraCampaignBudget,
  claimHostedWebOperations,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { resolveLiveHostedDispatchCallsFromHostedObserve } from "@/features/project-assistant/mw6GovernedNoraTurn";
import {
  buildGlobalMrStageAMatrix,
  createGlobalMrStageADriver,
  runGlobalMrStageACell,
} from "@/lib/nora-eval";

const FIXTURE_CALL = {
  type: "hosted_tool_call",
  name: "web_search_call",
  status: "completed",
  providerData: {
    type: "web_search_call",
    action: {
      type: "search",
      sources: [{ type: "url", url: "https://example.com" }],
    },
  },
} as const;

describe("CORR-02B — resolveLiveHostedDispatchCallsFromHostedObserve", () => {
  it("MW6-HOSTED-01 — LIVE-shaped factual N → N", () => {
    expect(
      resolveLiveHostedDispatchCallsFromHostedObserve({
        deterministicBoundaryUsed: false,
        rawCallsObserved: 2,
      }),
    ).toBe(2);
  });

  it("MW6-HOSTED-02 — deterministic fixture N → 0 REAL", () => {
    expect(
      resolveLiveHostedDispatchCallsFromHostedObserve({
        deterministicBoundaryUsed: true,
        rawCallsObserved: 2,
      }),
    ).toBe(0);
  });

  it("MW6-HOSTED-03 — absent observation → 0", () => {
    expect(resolveLiveHostedDispatchCallsFromHostedObserve(undefined)).toBe(0);
    expect(resolveLiveHostedDispatchCallsFromHostedObserve(null)).toBe(0);
  });
});

describe("CORR-02B — runNoraCognitiveTurn pass-through (ZERO REAL)", () => {
  const tempDirs: string[] = [];
  afterEach(() => {
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  it("path A (Memory B unavailable) — preserves hostedSearchObserve; no drop", async () => {
    const turn = await runNoraCognitiveTurn({
      correlationId: "corr02b-path-a",
      projectId: "proj-a",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "corroborate externally CEO of Acme" },
      ],
      provider: new FakeConversationProvider({ scripted: ["OK"] }),
      // Force path A — invalid session path → Memory B unavailable branch
      sessionDbPath: "/nonexistent/corr02b/session.sqlite",
      enableTools: true,
      enableHostedWebSearch: true,
      deterministicHostedWebSearchCalls: [FIXTURE_CALL, FIXTURE_CALL],
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([[assistantMessage("OK")]]),
      },
    });

    expect(turn.hostedSearchObserve).toBeDefined();
    expect(turn.hostedSearchObserve!.deterministicBoundaryUsed).toBe(true);
    expect(turn.hostedSearchObserve!.rawCallsObserved).toBe(2);
    expect(
      resolveLiveHostedDispatchCallsFromHostedObserve(turn.hostedSearchObserve),
    ).toBe(0);
  });

  it("path B (session available) — preserves hostedSearchObserve; no drop", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-corr02b-"));
    tempDirs.push(dir);
    const sessionDbPath = path.join(dir, "session.sqlite");
    const campaign = acquireNoraCampaignBudget({
      campaignId: `corr02b-path-b-${Date.now()}`,
      maxModelInvocations: 10,
      maxHostedWebOperations: 26,
      maxAggregateRealCalls: 40,
      hostedHardCapCapability: "provider_max_tool_calls",
    });

    const turn = await runNoraCognitiveTurn({
      correlationId: "corr02b-path-b",
      projectId: "proj-b",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "corroborate externally CEO of Acme" },
      ],
      provider: new FakeConversationProvider({ scripted: ["OK"] }),
      sessionDbPath,
      enableTools: true,
      enableHostedWebSearch: true,
      campaignBudget: campaign,
      deterministicHostedWebSearchCalls: [FIXTURE_CALL],
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([[assistantMessage("OK")]]),
      },
    });

    expect(turn.hostedSearchObserve).toBeDefined();
    expect(turn.hostedSearchObserve!.deterministicBoundaryUsed).toBe(true);
    expect(turn.hostedSearchObserve!.rawCallsObserved).toBeGreaterThanOrEqual(1);
    // Fixture ≠ REAL hosted budget consumption
    expect(campaign.consumedHostedWebOperations).toBe(0);
    expect(
      resolveLiveHostedDispatchCallsFromHostedObserve(turn.hostedSearchObserve),
    ).toBe(0);
  });
});

describe("CORR-02B — Stage A parity with composed factual observation", () => {
  it("MW6-HOSTED-04 — canonical N == factual N → no integrity stop; PASS kept", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr02b-h04-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (_c, ctx) => {
        expect(claimHostedWebOperations(ctx.campaignBudget, 2)).toBe(true);
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "parity-ok",
          usage: null,
          reportedHostedOperationsConsumed: 2,
          productObservation: {
            mw6AuthorityComposition: { liveHostedDispatchCalls: 2 },
          },
        };
      },
    });
    expect(out.stopped).toBe(false);
    expect(state.stopReason).toBe("NONE");
    expect(out.evidence?.passFail).toBe("PASS");
    expect(out.evidence?.productObservation?.canonicalDelta).toMatchObject({
      hosted: 2,
      reportedMismatch: false,
      factualHostedObserved: 2,
    });
  });

  it("MW6-HOSTED-05 — canonical N != composed factual → hard stop", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr02b-h05-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (_c, ctx) => {
        claimHostedWebOperations(ctx.campaignBudget, 2);
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "parity-bad",
          usage: null,
          // Prefer composition seam (reported omitted) — matches REAL paradox shape
          productObservation: {
            mw6AuthorityComposition: { liveHostedDispatchCalls: 0 },
          },
        };
      },
    });
    expect(out.stopped).toBe(true);
    expect(state.stopReason).toBe("EVIDENCE_INTEGRITY_HOSTED_MISMATCH");
  });

  it("MW6-HOSTED-06 — W-Sources PASS @ factual 0 + canonical 0 → NOT_PROVEN", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr02b-h06-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async () => ({
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "fixture-zero-real",
        usage: null,
        reportedHostedOperationsConsumed: 0,
        productObservation: {
          mw6AuthorityComposition: { liveHostedDispatchCalls: 0 },
        },
      }),
    });
    expect(out.evidence?.passFail).toBe("NOT_PROVEN");
    expect(state.stopReason).toBe("NONE");
  });
});
