/** @vitest-environment node */
/**
 * E3 correction — driver owns canonical campaign lease + MW6 wiring — ZERO REAL.
 */
import { afterEach, describe, expect, it } from "vitest";
import {
  acquireNoraCampaignBudget,
  CampaignLeaseError,
  createNoraCampaignBudget,
} from "@/lib/nora-cognitive-runtime";
import {
  createGlobalMrStageADriver,
  GLOBAL_MR_STAGE_A_CALL_CAPS,
  buildGlobalMrStageAMatrix,
  runGlobalMrStageACell,
  type GlobalMrStageAExecutor,
} from "@/lib/nora-eval";
import {
  extractMw6CampaignIdFromScope,
  resolveMw6GovernedCampaignBudget,
} from "@/features/project-assistant/mw6GovernedNoraTurn";

describe("E3 — driver canonical campaign lease × MW6 (deterministic)", () => {
  it("F3-AC01 — create driver → canonical lease derived 438/26/464", () => {
    const state = createGlobalMrStageADriver({
      campaignId: `f3-ac01-${Date.now()}`,
    });
    expect(state.campaignBudget.maxModelInvocations).toBe(
      GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations,
    );
    expect(state.campaignBudget.maxHostedWebOperations).toBe(
      GLOBAL_MR_STAGE_A_CALL_CAPS.maxHostedWebOperations,
    );
    expect(state.campaignBudget.maxAggregateRealCalls).toBe(
      GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls,
    );
    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(438);
    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxHostedWebOperations).toBe(26);
    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls).toBe(464);
    expect(state.campaignBudget.campaignId).toBe(state.campaignId);
  });

  it("F3-AC02 — reacquire same campaignId + same spec → same handle", () => {
    const campaignId = `f3-ac02-${Date.now()}`;
    const state = createGlobalMrStageADriver({ campaignId });
    const again = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations,
      maxHostedWebOperations:
        GLOBAL_MR_STAGE_A_CALL_CAPS.maxHostedWebOperations,
      maxAggregateRealCalls: GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls,
      hostedHardCapCapability: "provider_max_tool_calls",
    });
    expect(again).toBe(state.campaignBudget);
  });

  it("F3-AC03 — different spec → fail-close", () => {
    const campaignId = `f3-ac03-${Date.now()}`;
    createGlobalMrStageADriver({ campaignId });
    expect(() =>
      acquireNoraCampaignBudget({
        campaignId,
        maxModelInvocations: 4,
        maxHostedWebOperations: 2,
        maxAggregateRealCalls: 4,
      }),
    ).toThrow(CampaignLeaseError);
  });

  it("F3-AC04 — executor ctx receives canonical handle exact", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `f3-ac04-${Date.now()}`,
    });
    const [cell] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    let seen: unknown;
    const executor: GlobalMrStageAExecutor = async (_c, ctx) => {
      seen = ctx.campaignBudget;
      return {
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "ok",
        usage: null,
        reportedModelInvocationsConsumed: 0,
        reportedHostedOperationsConsumed: 0,
      };
    };
    await runGlobalMrStageACell({ state, cell: cell!, executor });
    expect(seen).toBe(state.campaignBudget);
  });

  it("F3-AC05 — W-Sources path: driver → executor → resolveMw6GovernedCampaignBudget → same handle", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `f3-ac05-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    expect(cell.executionKind).toBe("mw6_governed");

    let resolvedHandle: unknown;
    let acquiredLocally: boolean | undefined;
    const executor: GlobalMrStageAExecutor = async (c, ctx) => {
      // Product wiring seam used by runMw6GovernedNoraProductTurn (sharedCampaignBudget).
      const resolved = resolveMw6GovernedCampaignBudget({
        campaignId: c.campaignId,
        sharedCampaignBudget: ctx.campaignBudget,
      });
      expect(resolved.ok).toBe(true);
      if (!resolved.ok) {
        return {
          passFail: "FAIL",
          failureClass: "CONFIG",
          rawSummary: resolved.message,
          usage: null,
        };
      }
      resolvedHandle = resolved.budget;
      acquiredLocally = resolved.acquiredLocally;
      return {
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "mw6-wiring",
        usage: null,
        productObservation: {
          wiring: "driver→executor→resolveMw6GovernedCampaignBudget",
          campaignId: c.campaignId,
        },
        reportedModelInvocationsConsumed: 0,
        reportedHostedOperationsConsumed: 0,
      };
    };
    const out = await runGlobalMrStageACell({ state, cell, executor });
    expect(out.evidence).toBeTruthy();
    expect(resolvedHandle).toBe(state.campaignBudget);
    expect(acquiredLocally).toBe(false);
  });

  it("F3-AC06/AC07 — campaignId EC scope match / mismatch", () => {
    const campaignId = `f3-ac06-${Date.now()}`;
    const state = createGlobalMrStageADriver({ campaignId });
    const scope = `biz:mw6-external-discovery:${campaignId}:proj`;
    expect(extractMw6CampaignIdFromScope(scope)).toBe(campaignId);

    const mismatch = resolveMw6GovernedCampaignBudget({
      campaignId: "other-campaign",
      sharedCampaignBudget: state.campaignBudget,
    });
    expect(mismatch.ok).toBe(false);
    if (mismatch.ok) return;
    expect(mismatch.code).toBe("CAMPAIGN_ID_MISMATCH");
  });

  it("F3-AC10 — default MW6 hors Stage A reste 4/2/4", () => {
    const campaignId = `f3-ac10-${Date.now()}`;
    const resolved = resolveMw6GovernedCampaignBudget({ campaignId });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.acquiredLocally).toBe(true);
    expect(resolved.budget.maxModelInvocations).toBe(4);
    expect(resolved.budget.maxHostedWebOperations).toBe(2);
    expect(resolved.budget.maxAggregateRealCalls).toBe(4);
  });

  it("F3 — fabricated budget still fail-close", () => {
    const fabricated = createNoraCampaignBudget({
      campaignId: `f3-fab-${Date.now()}`,
      maxModelInvocations: GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations,
      maxHostedWebOperations:
        GLOBAL_MR_STAGE_A_CALL_CAPS.maxHostedWebOperations,
      maxAggregateRealCalls: GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls,
    });
    const resolved = resolveMw6GovernedCampaignBudget({
      campaignId: fabricated.campaignId,
      sharedCampaignBudget: fabricated,
    });
    expect(resolved.ok).toBe(false);
  });
});

afterEach(() => {
  // leases are process-local; unique campaignIds avoid collisions
});
