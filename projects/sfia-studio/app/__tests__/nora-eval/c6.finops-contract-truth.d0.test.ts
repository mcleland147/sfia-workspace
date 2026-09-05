/** @vitest-environment node */
/**
 * C6 — Option C FinOps completeness + contract truth — ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import {
  BudgetTracker,
  OPENAI_WEB_SEARCH_TOOL_CALL_USD,
  buildMw0CapabilityManifest,
  createEvalAgentsUsdAccounting,
  createGlobalMrStageADriver,
  deriveGlobalMrStageAEnvelope,
  GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER,
  GLOBAL_MR_STAGE_A_CELL_CAPS,
  GLOBAL_MR_STAGE_A_CONTRACT_VERSION,
  GLOBAL_MR_STAGE_A_USD_POLICY,
} from "@/lib/nora-eval";

describe("C6 — Option C FinOps + contract truth (ZERO REAL)", () => {
  it("C6-01 — structural envelope 78/438/464 unchanged", () => {
    const d = deriveGlobalMrStageAEnvelope();
    expect(GLOBAL_MR_STAGE_A_CONTRACT_VERSION).toBe(
      "global-mr-campaign-contract-v3-candidate",
    );
    expect(d.primaryBaseCells).toBe(54);
    expect(d.astraChallengerCells).toBe(6);
    expect(d.baseCells).toBe(60);
    expect(d.maxSelectiveRepeats).toBe(18);
    expect(d.astraRepeatModelInvocationCeiling).toBe(0);
    expect(GLOBAL_MR_STAGE_A_CELL_CAPS.maxCellExecutions).toBe(78);
    expect(d.maxCellExecutions).toBe(78);
    expect(d.primaryBaseModelInvocationCeiling).toBe(297);
    expect(d.astraBaseModelInvocationCeiling).toBe(33);
    expect(d.baseModelInvocationCeiling).toBe(330);
    expect(d.repeatModelInvocationCeiling).toBe(108);
    expect(d.maxModelInvocations).toBe(438);
    expect(d.maxHostedWebOperations).toBe(26);
    expect(d.maxAggregateRealCalls).toBe(464);
  });

  it("C6-02..07 / F-01..06 — model-token / hosted fee / known subtotal / policy 15/18/20", () => {
    const d = deriveGlobalMrStageAEnvelope();
    const f = d.usdFeasibility;
    expect(GLOBAL_MR_STAGE_A_USD_POLICY).toEqual({
      targetUsd: 15,
      softStopUsd: 18,
      hardCapUsd: 20,
    });
    expect(f.plannedModelTokenReserveUsd).toBeCloseTo(13.06896, 4);
    expect(f.plannedReserveUsdWorstCaseWithRepeats).toBeCloseTo(13.06896, 4);
    expect(f.webSearchToolCallUsd).toBe(OPENAI_WEB_SEARCH_TOOL_CALL_USD);
    expect(OPENAI_WEB_SEARCH_TOOL_CALL_USD).toBe(0.01);
    expect(f.plannedHostedWebSearchToolFeesUsd).toBeCloseTo(0.26, 8);
    expect(f.plannedHostedWebSearchToolFeesUsd).toBeCloseTo(
      d.maxHostedWebOperations * f.webSearchToolCallUsd,
      8,
    );
    expect(f.knownPlannedSubtotalUsd).toBeCloseTo(13.32896, 4);
    expect(f.knownPlannedSubtotalUsd).toBeCloseTo(
      f.plannedModelTokenReserveUsd + f.plannedHostedWebSearchToolFeesUsd,
      8,
    );
    expect(f.hardCapUsd).toBe(20);
    expect(GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd).toBe(20);
    expect(f.ok).toBe(true);
    expect(f.status).toBe("COMPATIBLE_WITH_CURRENT_POLICY");
    expect(f.searchContentTokenExposure).toBe(
      "VARIABLE_PROVIDER_USAGE_DEPENDENT",
    );
    expect(f.cacheWritePricingDocumented).toBe(true);
    expect(f.cacheWriteQuantityDeterministicallyKnown).toBe(false);
    expect(f.invoice).toBe("NOT_OBSERVED");
  });

  it("C6-08/09/12/13 — settlement adds hosted fees once; invoice NOT_OBSERVED", () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c6-settle-${Date.now()}`,
    });
    const usd = createEvalAgentsUsdAccounting({
      budget: state.budget,
      manifest: state.manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 40,
      assumedOutputTokens: 20,
    });
    const estimate = usd.estimateNextInvocationUsd();
    expect(usd.canDispatchUnderHardCap(estimate).allowed).toBe(true);
    usd.commitReserve(estimate);
    const settled = usd.settleTurn({
      reservedInvocations: 1,
      inputTokens: 40,
      outputTokens: 20,
      totalTokens: 60,
      hostedWebSearchCalls: 2,
    });
    expect(settled.hostedToolCallFeesUsd).toBeCloseTo(0.02, 8);
    expect(settled.modelTokenEstimatedUsd).toBeGreaterThan(0);
    expect(settled.observedEstimatedUsd).toBeCloseTo(
      settled.modelTokenEstimatedUsd + settled.hostedToolCallFeesUsd,
      8,
    );
    expect(settled.estimatedUsd).toBe(settled.observedEstimatedUsd);
    expect(settled.invoice).toBe("NOT_OBSERVED");
  });

  it("C6-10 — hosted fees pushing cumulative observed > hard → next dispatch denied", () => {
    const policy = { targetUsd: 0.01, softStopUsd: 0.015, hardCapUsd: 0.02 };
    const budget = new BudgetTracker(policy, 0);
    const manifest = buildMw0CapabilityManifest("2026-09-05T00:00:00.000Z");
    const usd = createEvalAgentsUsdAccounting({
      budget,
      manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 1,
      assumedOutputTokens: 1,
      webSearchToolCallUsd: 0.01,
    });
    const reserve = 0.005;
    expect(usd.canDispatchUnderHardCap(reserve).allowed).toBe(true);
    usd.commitReserve(reserve);
    // Model tokens tiny; 2 hosted calls = 0.02 → total observed ≈ 0.005+0.02 > 0.02 hard
    const settled = usd.settleTurn({
      reservedInvocations: 1,
      inputTokens: null,
      outputTokens: null,
      totalTokens: null,
      hostedWebSearchCalls: 2,
    });
    expect(settled.hostedToolCallFeesUsd).toBeCloseTo(0.02, 8);
    expect(settled.authorizationEnvelopeExceeded).toBe(true);
    expect(budget.hardStopTriggered).toBe(true);
    const next = usd.canDispatchUnderHardCap(0.001);
    expect(next.allowed).toBe(false);
    expect(next.reason).toBe("OBSERVED_AUTHORIZATION_ENVELOPE_EXCEEDED");
  });

  it("C6-11 — deterministic/fixture hosted calls do not add REAL tool fee when omitted/0", () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c6-fixture-${Date.now()}`,
    });
    const usd = createEvalAgentsUsdAccounting({
      budget: state.budget,
      manifest: state.manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 40,
      assumedOutputTokens: 20,
    });
    usd.commitReserve(usd.estimateNextInvocationUsd());
    const settled = usd.settleTurn({
      reservedInvocations: 1,
      inputTokens: 40,
      outputTokens: 20,
      totalTokens: 60,
      // omit / 0 — deterministic fixtures must not bill
      hostedWebSearchCalls: 0,
    });
    expect(settled.hostedToolCallFeesUsd).toBe(0);
    expect(settled.observedEstimatedUsd).toBeCloseTo(
      settled.modelTokenEstimatedUsd,
      8,
    );
  });

  it("C6-14/15 — Astra one-shot medium preserved; MW0 unchanged", () => {
    expect(GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER).toEqual({
      modelId: "gpt-6-astra",
      reasoningEffort: "medium",
    });
    const mw0 = buildMw0CapabilityManifest("2026-09-05T00:00:00.000Z");
    expect(mw0.models.map((m) => m.modelId)).not.toContain("gpt-6-astra");
    expect(mw0.campaignAllowlist.modelIds).toEqual([
      "gpt-5.6-luna",
      "gpt-5.6-terra",
    ]);
  });
});
