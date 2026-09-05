/** @vitest-environment node */
/**
 * E4 correction — repeat enforcement + soft-stop + counter coherence — ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import {
  assertGlobalMrStageAMatrixInvariants,
  buildGlobalMrStageAMatrix,
  canScheduleSelectiveRepeat,
  createEvalAgentsUsdAccounting,
  createGlobalMrStageADriver,
  evaluateGlobalMrStageAStop,
  acknowledgeGlobalMrStageASoftReview,
  GLOBAL_MR_STAGE_A_CALL_CAPS,
  GLOBAL_MR_STAGE_A_USD_POLICY,
  globalMrStageAEnvelopeProof,
  materializeSelectiveRepeat,
  MW0_BUDGET_POLICY,
  runGlobalMrStageACell,
  type GlobalMrStageAExecutor,
} from "@/lib/nora-eval";
import {
  buildRunnerModelSettingsForEffort,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS } from "@/lib/nora-cognitive-runtime";

describe("E4 — Global MR Stage A driver corrections (deterministic)", () => {
  it("E4 matrix / envelope invariants unchanged", () => {
    const cells = buildGlobalMrStageAMatrix({
      campaignId: "nora-global-mr-stage-a-test",
    });
    expect(cells.filter((c) => !c.isChallenger)).toHaveLength(54);
    expect(cells).toHaveLength(60);
    expect(assertGlobalMrStageAMatrixInvariants(cells).ok).toBe(true);
    const proof = globalMrStageAEnvelopeProof();
    expect(proof.maxCellExecutions).toBe(78);
    expect(proof.maxModelInvocations).toBe(438);
    expect(proof.maxAggregateRealCalls).toBe(464);
    expect(proof.usd).toEqual({ targetUsd: 15, softStopUsd: 18, hardCapUsd: 20 });
    expect(proof.usdSemantics).toBe(
      "pre_dispatch_reservation_authorization_envelope",
    );
    expect(GLOBAL_MR_STAGE_A_USD_POLICY).not.toEqual(MW0_BUDGET_POLICY);
    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls).not.toBe(
      H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
    );
  });

  it("F4A-AC01/AC02 — base A → repeat #1 PASS, second repeat DENIED", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `f4a-repeat-${Date.now()}`,
    });
    const [base] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    expect(canScheduleSelectiveRepeat(state, base!).allowed).toBe(true);
    const repeat1 = materializeSelectiveRepeat(base!);
    let calls = 0;
    const executor: GlobalMrStageAExecutor = async () => {
      calls += 1;
      return {
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: `rep-${calls}`,
        usage: null,
        reportedModelInvocationsConsumed: 0,
        reportedHostedOperationsConsumed: 0,
      };
    };
    const first = await runGlobalMrStageACell({
      state,
      cell: repeat1,
      executor,
    });
    expect(first.stopped).toBe(false);
    expect(calls).toBe(1);
    expect(state.selectiveRepeatsUsed).toBe(1);

    const repeat2 = {
      ...repeat1,
      // Attempt another repeat of same base (still runIndex 1 identity)
    };
    const second = await runGlobalMrStageACell({
      state,
      cell: repeat2,
      executor,
    });
    expect(second.stopped).toBe(true);
    expect(second.cellDenied).toBe("SELECTIVE_REPEAT_DENIED");
    expect(second.evidence).toBeNull();
    expect(calls).toBe(1);
    expect(canScheduleSelectiveRepeat(state, base!).allowed).toBe(false);
    expect(state.stopReason).toBe("NONE");
  });

  it("F4A-AC03/AC04 — 18 distinct cells can each repeat; 19th denied; base still allowed", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `f4a-pool-${Date.now()}`,
    });
    const cells = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    const executor: GlobalMrStageAExecutor = async () => ({
      passFail: "PASS",
      failureClass: "NONE",
      rawSummary: "ok",
      usage: null,
      reportedModelInvocationsConsumed: 0,
      reportedHostedOperationsConsumed: 0,
    });
    for (let i = 0; i < 18; i += 1) {
      const repeat = materializeSelectiveRepeat(cells[i]!);
      const out = await runGlobalMrStageACell({ state, cell: repeat, executor });
      expect(out.stopped).toBe(false);
    }
    expect(state.selectiveRepeatsUsed).toBe(18);
    const nineteenth = materializeSelectiveRepeat(cells[18]!);
    const denied = await runGlobalMrStageACell({
      state,
      cell: nineteenth,
      executor,
    });
    expect(denied.stopped).toBe(true);
    expect(denied.cellDenied).toBe("SELECTIVE_REPEAT_POOL_EXHAUSTED");
    expect(denied.evidence).toBeNull();
    // C3-04: pool exhaustion is per-cell denial only — not campaign latch.
    expect(state.stopReason).toBe("NONE");

    let baseCalled = false;
    const baseOut = await runGlobalMrStageACell({
      state,
      cell: cells[30]!,
      executor: async () => {
        baseCalled = true;
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "base-after-pool",
          usage: null,
        };
      },
    });
    expect(baseCalled).toBe(true);
    expect(baseOut.stopped).toBe(false);
    expect(state.stopReason).toBe("NONE");
  });

  it("F4A-AC05/AC06 — runIndex > 1 never materialized; denied → executor never called", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `f4a-runidx-${Date.now()}`,
    });
    const [base] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    expect(() =>
      materializeSelectiveRepeat({
        ...base!,
        runIndex: 1,
        isSelectiveRepeat: true,
      }),
    ).toThrow(/SELECTIVE_REPEAT_RUN_INDEX_INVALID/);

    let called = false;
    const out = await runGlobalMrStageACell({
      state,
      cell: { ...base!, runIndex: 2, isSelectiveRepeat: true },
      executor: async () => {
        called = true;
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "x",
          usage: null,
        };
      },
    });
    expect(called).toBe(false);
    expect(out.stopped).toBe(true);
    expect(out.evidence).toBeNull();
  });

  it("F4B-AC01/AC02 — soft stop blocks new cells without acknowledgment", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `f4b-soft-${Date.now()}`,
      carryInUsd: 18,
    });
    expect(state.softReviewRequired).toBe(true);
    expect(evaluateGlobalMrStageAStop(state)).toBe("SOFT_USD_REVIEW");

    const [cell] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    let called = false;
    const blocked = await runGlobalMrStageACell({
      state,
      cell: cell!,
      executor: async () => {
        called = true;
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "no",
          usage: null,
        };
      },
    });
    expect(called).toBe(false);
    expect(blocked.stopped).toBe(true);
    expect(blocked.evidence).toBeNull();
    expect(state.cellsCompleted).toBe(0);

    // Still blocked without ack
    const still = await runGlobalMrStageACell({
      state,
      cell: cell!,
      executor: async () => {
        called = true;
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "no",
          usage: null,
        };
      },
    });
    expect(called).toBe(false);
    expect(still.stopped).toBe(true);
  });

  it("F4B-AC03/AC04/AC06 — acknowledgment allows continuation without resetting counters / no HD", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `f4b-ack-${Date.now()}`,
      carryInUsd: 18,
    });
    const spendBefore = state.budget.cumulativeUsd;
    const ackEmpty = acknowledgeGlobalMrStageASoftReview(state, "  ");
    expect(ackEmpty.ok).toBe(false);

    const ack = acknowledgeGlobalMrStageASoftReview(
      state,
      "external-review-ref-1",
    );
    expect(ack.ok).toBe(true);
    expect(state.softReviewRequired).toBe(false);
    expect(state.budget.cumulativeUsd).toBe(spendBefore);
    expect(state.softReviewAcknowledgments).toEqual(["external-review-ref-1"]);
    // No HumanDecision fabricated — only orchestration refs.
    expect(
      state.softReviewAcknowledgments.every((r) => !r.startsWith("hd:")),
    ).toBe(true);

    const [cell] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    let called = false;
    const out = await runGlobalMrStageACell({
      state,
      cell: cell!,
      executor: async () => {
        called = true;
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "after-ack",
          usage: null,
          reportedModelInvocationsConsumed: 0,
          reportedHostedOperationsConsumed: 0,
        };
      },
    });
    expect(called).toBe(true);
    expect(out.stopped).toBe(false);
    expect(state.budget.cumulativeUsd).toBe(spendBefore);
  });

  it("F4B-AC05 — hard cap remains non-resumable", () => {
    const state = createGlobalMrStageADriver({
      campaignId: `f4b-hard-${Date.now()}`,
      carryInUsd: 20,
    });
    state.softReviewRequired = true;
    const ack = acknowledgeGlobalMrStageASoftReview(state, "review");
    expect(ack.ok).toBe(false);
    if (ack.ok) return;
    expect(ack.reason).toBe("hard_cap_not_resumable");
  });

  it("Driver counter coherence — Runner model claim mirrors state.campaignBudget", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `f4-cohere-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Routine")!;
    const usd = createEvalAgentsUsdAccounting({
      budget: state.budget,
      manifest: state.manifest,
      modelId: cell.model,
      assumedInputTokens: 50,
      assumedOutputTokens: 20,
    });
    const executor: GlobalMrStageAExecutor = async (c, ctx) => {
      const scripted = new ScriptedModel([
        [assistantMessage(`WIRE:${c.model}:${c.reasoningEffort}`)],
      ]);
      const turn = await runNoraAgentsTurn({
        correlationId: `e4-cohere-${c.workloadId}`,
        projectId: "proj-e4",
        systemInstructions: sfiaBoundaryInstructions(),
        userContent: "routine ping",
        model: scripted,
        runnerModelSettings: buildRunnerModelSettingsForEffort(
          c.reasoningEffort,
        ),
        enableTools: false,
        maxTurns: 1,
        campaignBudget: ctx.campaignBudget,
        usdAccounting: usd,
      });
      return {
        passFail: turn.limitReached ? "INCONCLUSIVE" : "PASS",
        failureClass: turn.limitReached ? "BUDGET_STOP" : "NONE",
        rawSummary: turn.text,
        usage: {
          inputTokens: turn.usage.inputTokens,
          outputTokens: turn.usage.outputTokens,
          cachedInputTokens: null,
          reasoningTokens: null,
          estimatedUsd: turn.usdObserve?.estimatedUsd ?? 0,
          modelReturned: turn.usage.model,
          providerResponseId: turn.usage.providerResponseId,
        },
        productObservation: {
          usdObserve: turn.usdObserve ?? null,
          campaignCanonical: true,
        },
        reportedModelInvocationsConsumed: 1,
        reportedHostedOperationsConsumed: 0,
      };
    };
    const out = await runGlobalMrStageACell({ state, cell, executor });
    expect(out.evidence).toBeTruthy();
    expect(state.modelInvocations).toBe(1);
    expect(state.campaignBudget.consumedModelInvocations).toBe(1);
    expect(state.budget.cumulativeUsd).toBeGreaterThan(0);
    expect(evaluateGlobalMrStageAStop(state)).toBe("NONE");
  });

  it("E4-AC13 — unsupported cell fails before executor", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `e4-bad-${Date.now()}`,
    });
    const [cell] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    const bad = {
      ...cell!,
      model: "gpt-9-unknown" as typeof cell.model,
      cell: { ...cell!.cell, model: "gpt-9-unknown" },
    };
    let executed = false;
    const out = await runGlobalMrStageACell({
      state,
      cell: bad,
      executor: async () => {
        executed = true;
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "no",
          usage: null,
        };
      },
    });
    expect(executed).toBe(false);
    expect(out.stopped).toBe(true);
  });
});
