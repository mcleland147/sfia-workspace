/** @vitest-environment node */
/**
 * E1 correction — USD reservation / observed-overrun semantics — ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import {
  acquireNoraCampaignBudget,
  createNoraTurnBudget,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import {
  BudgetTracker,
  MW0_BUDGET_POLICY,
  buildGlobalModelReasoningCapabilityManifest,
  createEvalAgentsUsdAccounting,
  MeteredConversationProvider,
  estimateCostUsd,
} from "@/lib/nora-eval";
import { FakeConversationProvider } from "@/lib/platform/ai";

describe("E1 — Agents USD authorization envelope (deterministic)", () => {
  const manifest = buildGlobalModelReasoningCapabilityManifest(
    "2026-09-05T00:00:00.000Z",
  );

  it("F1-AC01 — first invocation below reservation envelope executes", async () => {
    const budget = new BudgetTracker({
      targetUsd: 1,
      softStopUsd: 2,
      hardCapUsd: 5,
    });
    const usd = createEvalAgentsUsdAccounting({
      budget,
      manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 100,
      assumedOutputTokens: 50,
    });
    const turn = await runNoraAgentsTurn({
      correlationId: "f1-ac01",
      projectId: "proj-e1",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "ping",
      model: new ScriptedModel([[assistantMessage("E1_OK")]]),
      enableTools: false,
      maxTurns: 1,
      usdAccounting: usd,
    });
    expect(turn.limitReached).toBe(false);
    expect(turn.text).toContain("E1_OK");
    expect(turn.usdObserve?.reservedInvocations).toBe(1);
    expect(usd.totalReservedInvocations()).toBe(1);
    expect(turn.usdObserve?.invoice).toBe("NOT_OBSERVED");
  });

  it("F1-AC02 — first dispatched YES, second nested/shared-envelope denied PRE-DISPATCH", async () => {
    // Luna ~0.00044 USD per reserve with these assumptions; hardCap allows exactly one.
    const hardCapUsd = 0.0005;
    const budget = new BudgetTracker({
      targetUsd: 0.0002,
      softStopUsd: 0.0004,
      hardCapUsd,
    });
    const usd = createEvalAgentsUsdAccounting({
      budget,
      manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 1000,
      assumedOutputTokens: 200,
    });
    const est = usd.estimateNextInvocationUsd();
    expect(est).toBeLessThan(hardCapUsd);
    expect(usd.canDispatchUnderHardCap(est).allowed).toBe(true);

    const campaign = acquireNoraCampaignBudget({
      campaignId: `e1-f1ac02-${Date.now()}`,
      maxModelInvocations: 10,
      maxHostedWebOperations: 0,
      maxAggregateRealCalls: 10,
    });

    const first = await runNoraAgentsTurn({
      correlationId: "f1-ac02-first",
      projectId: "proj-e1",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "first",
      model: new ScriptedModel([[assistantMessage("FIRST_OK")]]),
      enableTools: false,
      maxTurns: 1,
      campaignBudget: campaign,
      usdAccounting: usd,
      budget: createNoraTurnBudget(),
    });
    expect(first.limitReached).toBe(false);
    expect(first.text).toContain("FIRST_OK");
    expect(usd.totalReservedInvocations()).toBe(1);
    expect(first.usdObserve?.reservedInvocations).toBe(1);

    const second = await runNoraAgentsTurn({
      correlationId: "f1-ac02-second",
      projectId: "proj-e1",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "second-must-deny",
      model: new ScriptedModel([[assistantMessage("SECOND_SHOULD_NOT_RUN")]]),
      enableTools: false,
      maxTurns: 1,
      campaignBudget: campaign,
      usdAccounting: usd,
      budget: createNoraTurnBudget(),
    });
    expect(second.limitReached).toBe(true);
    expect(second.text).not.toContain("SECOND_SHOULD_NOT_RUN");
    expect(
      /AUTHORIZATION_ENVELOPE|PRECALL_WOULD_EXCEED|HARD_CAP|USD/i.test(
        second.text,
      ),
    ).toBe(true);
    expect(usd.totalReservedInvocations()).toBe(1);
  });

  it("F1-AC03 — no call-count claim → no USD reserve", async () => {
    const budget = new BudgetTracker({
      targetUsd: 1,
      softStopUsd: 2,
      hardCapUsd: 5,
    });
    const usd = createEvalAgentsUsdAccounting({
      budget,
      manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 100,
      assumedOutputTokens: 50,
    });
    const campaign = acquireNoraCampaignBudget({
      campaignId: `e1-noclaim-${Date.now()}`,
      maxModelInvocations: 0,
      maxHostedWebOperations: 0,
      maxAggregateRealCalls: 0,
    });
    const turn = await runNoraAgentsTurn({
      correlationId: "f1-ac03",
      projectId: "proj-e1",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "deny",
      model: new ScriptedModel([[assistantMessage("NOPE")]]),
      enableTools: false,
      maxTurns: 1,
      campaignBudget: campaign,
      usdAccounting: usd,
    });
    expect(turn.limitReached).toBe(true);
    expect(usd.totalReservedInvocations()).toBe(0);
    expect(budget.ledger.every((l) => !l.note.startsWith("agents-usd-"))).toBe(
      true,
    );
  });

  it("F1-AC04 — exactly one reserve per model invocation", async () => {
    const budget = new BudgetTracker({
      targetUsd: 1,
      softStopUsd: 2,
      hardCapUsd: 5,
    });
    const usd = createEvalAgentsUsdAccounting({
      budget,
      manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 100,
      assumedOutputTokens: 50,
    });
    await runNoraAgentsTurn({
      correlationId: "f1-ac04",
      projectId: "proj-e1",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "once",
      model: new ScriptedModel([[assistantMessage("ONE")]]),
      enableTools: false,
      maxTurns: 1,
      usdAccounting: usd,
    });
    expect(usd.totalReservedInvocations()).toBe(1);
    expect(
      budget.ledger.filter((l) => l.note.startsWith("agents-usd-reserve:")).length,
    ).toBe(1);
  });

  it("F1-AC05 — null usage retains conservative reservation (not free)", () => {
    const budget = new BudgetTracker({
      targetUsd: 1,
      softStopUsd: 2,
      hardCapUsd: 5,
    });
    const usd = createEvalAgentsUsdAccounting({
      budget,
      manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 1000,
      assumedOutputTokens: 200,
    });
    const est = usd.estimateNextInvocationUsd();
    usd.commitReserve(est);
    const settled = usd.settleTurn({
      reservedInvocations: 1,
      inputTokens: null,
      outputTokens: null,
      totalTokens: null,
    });
    expect(settled.usedConservativeFallback).toBe(true);
    expect(settled.observedEstimatedUsd).toBe(est);
    expect(settled.observedOverrun).toBe(false);
    expect(settled.invoice).toBe("NOT_OBSERVED");
    expect(budget.cumulativeUsd).toBeGreaterThanOrEqual(est);
  });

  it("F1-AC06 — observed usage above reservation surfaces observedOverrun", () => {
    const budget = new BudgetTracker({
      targetUsd: 1,
      softStopUsd: 2,
      hardCapUsd: 5,
    });
    const usd = createEvalAgentsUsdAccounting({
      budget,
      manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 10,
      assumedOutputTokens: 5,
    });
    const reserved = usd.estimateNextInvocationUsd();
    usd.commitReserve(reserved);
    const settled = usd.settleTurn({
      reservedInvocations: 1,
      inputTokens: 500_000,
      outputTokens: 100_000,
      totalTokens: 600_000,
    });
    expect(settled.observedOverrun).toBe(true);
    expect(settled.observedEstimatedUsd).toBeGreaterThan(reserved);
    expect(settled.invoice).toBe("NOT_OBSERVED");
  });

  it("F1-AC07 — observed authorization overrun blocks subsequent dispatch", () => {
    const hardCapUsd = 0.05;
    const budget = new BudgetTracker({
      targetUsd: 0.01,
      softStopUsd: 0.02,
      hardCapUsd,
    });
    const usd = createEvalAgentsUsdAccounting({
      budget,
      manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 10,
      assumedOutputTokens: 5,
    });
    const reserved = usd.estimateNextInvocationUsd();
    expect(usd.canDispatchUnderHardCap(reserved).allowed).toBe(true);
    usd.commitReserve(reserved);
    const settled = usd.settleTurn({
      reservedInvocations: 1,
      inputTokens: 2_000_000,
      outputTokens: 500_000,
      totalTokens: 2_500_000,
    });
    expect(settled.authorizationEnvelopeExceeded).toBe(true);
    const next = usd.estimateNextInvocationUsd();
    const gate = usd.canDispatchUnderHardCap(next);
    expect(gate.allowed).toBe(false);
    expect(gate.reason).toMatch(/OBSERVED_AUTHORIZATION_ENVELOPE_EXCEEDED|HARD_CAP|PRECALL/);
  });

  it("F1-AC08 — no double counting with MeteredConversationProvider path", async () => {
    const budget = new BudgetTracker(MW0_BUDGET_POLICY);
    const inner = new FakeConversationProvider({ scripted: ["R1_OK"] });
    const metered = new MeteredConversationProvider(
      inner,
      manifest,
      budget,
      "gpt-5.6-luna",
      { inputTokens: 100, outputTokens: 20 },
    );
    await metered.complete([{ role: "user", content: "hi" }]);
    expect(metered.ledger).toHaveLength(1);
    expect(budget.ledger.every((l) => !l.note.startsWith("agents-usd-"))).toBe(
      true,
    );
  });

  it("F1-AC09 — no fake invoice claim on settle", () => {
    const budget = new BudgetTracker({
      targetUsd: 1,
      softStopUsd: 2,
      hardCapUsd: 5,
    });
    const usd = createEvalAgentsUsdAccounting({
      budget,
      manifest,
      modelId: "gpt-5.6-luna",
    });
    usd.commitReserve(0.01);
    const settled = usd.settleTurn({
      reservedInvocations: 1,
      inputTokens: 100,
      outputTokens: 20,
      totalTokens: 120,
    });
    expect(settled.invoice).toBe("NOT_OBSERVED");
    expect(Object.keys(settled)).not.toContain("invoiceUsd");
  });

  it("F1-AC10 / estimateCostUsd — no invented cache discount", () => {
    const withCache = estimateCostUsd({
      manifest,
      modelId: "gpt-5.6-luna",
      inputTokens: 1000,
      outputTokens: 0,
      cachedInputTokens: 500,
    });
    const noCacheField = estimateCostUsd({
      manifest,
      modelId: "gpt-5.6-luna",
      inputTokens: 1000,
      outputTokens: 0,
    });
    expect(withCache).toBeCloseTo(noCacheField, 8);
  });
});
