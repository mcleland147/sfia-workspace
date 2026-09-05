/** @vitest-environment node */
/**
 * MW6 PRE-REAL BUDGET + ENTRY-PATH CLOSURE
 * PRE-REAL-01/02 · R-PRE-REAL-03→08 · R-PRE-REAL-07A/08A
 * DETERMINISTIC ONLY / ZERO REAL
 *
 * Test hygiene: unique campaignIds per case — no runtime registry reset API.
 */
import { describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import * as NoraRuntime from "@/lib/nora-cognitive-runtime";
import * as CampaignBudgetModule from "@/lib/nora-cognitive-runtime/campaignBudget";
import {
  H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
  H17_HISTORICAL_OBSERVED_AGGREGATE_CALLS,
  acquireNoraCampaignBudget,
  CampaignLeaseError,
  campaignBudgetSnapshot,
  claimHostedWebOperations,
  claimModelInvocation,
  clampRunnerBudgetForCampaign,
  createNoraCampaignBudget,
  evaluateCampaignBudgetCapabilityOnly,
  evaluateRealSourceExecutionPreflight,
  isCanonicalCampaignBudget,
  remainingAggregateRealCalls,
  remainingHostedWebOperations,
  remainingModelInvocations,
  requireCanonicalCampaignBudget,
  resolveMaxToolCallsProviderData,
  runNoraAgentsTurn,
  toolDefinitionsFromModelRequest,
  type NoraCampaignBudget,
  type RunNoraAgentsTurnInput,
} from "@/lib/nora-cognitive-runtime";
import { withMaxToolCallsProviderData } from "@/lib/nora-cognitive-runtime/reasoningModelSettings";
import type { NoraRunnerModelSettings } from "@/lib/nora-cognitive-runtime/reasoningModelSettings";

describe("MW6 PRE-REAL campaign budget (PB / AUTH / LEASE / H17)", () => {
  it("PB-01 — OpenAI capability fit disposition is PATH A (max_tool_calls)", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "pb01-path-a",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
      hostedHardCapCapability: "provider_max_tool_calls",
    });
    const clamp = clampRunnerBudgetForCampaign({
      campaign,
      requestedMaxTurns: 4,
      wantHostedWebSearch: true,
    });
    expect(clamp.attachHostedWebSearch).toBe(true);
    expect(clamp.maxToolCalls).toBeGreaterThan(0);
    expect((clamp.maxToolCalls ?? 0) * clamp.maxTurns).toBeLessThanOrEqual(2);
    const settings = withMaxToolCallsProviderData(undefined, clamp.maxToolCalls);
    expect(settings?.providerData?.max_tool_calls).toBe(clamp.maxToolCalls);
  });

  it("PB-02 / LEASE-07 — campaign lifecycle via reacquisition shares counters", async () => {
    const a = await runNoraAgentsTurn({
      correlationId: "pb02-a",
      projectId: "proj",
      systemInstructions: "SFIA",
      userContent: "hi",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "ok-a" }],
      }),
      enableTools: false,
      campaignBudget: acquireNoraCampaignBudget({
        campaignId: "pb02-shared-lifecycle",
        maxModelInvocations: 3,
        maxHostedWebOperations: 5,
      }),
      maxTurns: 1,
    });
    expect(a.budgetObserve?.campaign.consumedModelInvocations).toBe(1);

    const again = acquireNoraCampaignBudget({
      campaignId: "pb02-shared-lifecycle",
      maxModelInvocations: 3,
      maxHostedWebOperations: 5,
    });
    expect(again.consumedModelInvocations).toBe(1);

    const b = await runNoraAgentsTurn({
      correlationId: "pb02-b",
      projectId: "proj",
      systemInstructions: "SFIA",
      userContent: "hi again",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "ok-b" }],
      }),
      enableTools: false,
      campaignBudget: again,
      maxTurns: 1,
    });
    expect(b.budgetObserve?.campaign.consumedModelInvocations).toBe(2);
    expect(remainingModelInvocations(again)).toBe(1);
  });

  it("PB-03 — model invocation hard cap denies N+1 before dispatch", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "pb03-model-cap",
      maxModelInvocations: 1,
      maxHostedWebOperations: 5,
    });
    const first = await runNoraAgentsTurn({
      correlationId: "pb03-1",
      projectId: "p",
      systemInstructions: "S",
      userContent: "a",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "one" }],
      }),
      enableTools: false,
      campaignBudget: campaign,
      maxTurns: 1,
    });
    expect(first.text).toBe("one");
    expect(campaign.consumedModelInvocations).toBe(1);

    const second = await runNoraAgentsTurn({
      correlationId: "pb03-2",
      projectId: "p",
      systemInstructions: "S",
      userContent: "b",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "two" }],
      }),
      enableTools: false,
      campaignBudget: campaign,
      maxTurns: 1,
    });
    expect(second.limitReached).toBe(true);
    expect(campaign.consumedModelInvocations).toBe(1);
    expect(
      campaign.denialCode === "MODEL_INVOCATION_CAP_REACHED" ||
        campaign.denialCode === "AGGREGATE_REAL_CALL_CAP_REACHED",
    ).toBe(true);
  });

  it("PB-04 PATH A — hosted max_tool_calls configured from remaining; remaining 0 detaches", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "pb04-hosted-config",
      maxModelInvocations: 5,
      maxHostedWebOperations: 2,
    });
    const clamp = clampRunnerBudgetForCampaign({
      campaign,
      requestedMaxTurns: 2,
      wantHostedWebSearch: true,
    });
    expect(clamp.attachHostedWebSearch).toBe(true);
    expect(clamp.maxToolCalls).toBe(1);
    claimHostedWebOperations(campaign, 2);
    const after = acquireNoraCampaignBudget({
      campaignId: "pb04-hosted-config",
      maxModelInvocations: 5,
      maxHostedWebOperations: 2,
    });
    const clampEmpty = clampRunnerBudgetForCampaign({
      campaign: after,
      requestedMaxTurns: 2,
      wantHostedWebSearch: true,
    });
    expect(clampEmpty.attachHostedWebSearch).toBe(false);
    expect(clampEmpty.maxToolCalls).toBeNull();
  });

  it("PB-05 H17 topology — reacquire cannot reset; 141 attempts stay at 100", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "pb05-h17-topology",
      maxModelInvocations: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
      maxHostedWebOperations: 50,
      maxAggregateRealCalls: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
    });
    for (let i = 0; i < 50; i++) {
      expect(claimModelInvocation(campaign)).toBe(true);
    }
    const again = acquireNoraCampaignBudget({
      campaignId: "pb05-h17-topology",
      maxModelInvocations: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
      maxHostedWebOperations: 50,
      maxAggregateRealCalls: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
    });
    expect(again).toBe(campaign);
    expect(again.consumedAggregateRealCalls).toBe(50);

    let accepted = 50;
    let denied = 0;
    for (let i = 50; i < H17_HISTORICAL_OBSERVED_AGGREGATE_CALLS; i++) {
      if (claimModelInvocation(campaign)) accepted += 1;
      else denied += 1;
    }
    expect(accepted).toBe(100);
    expect(denied).toBe(41);
    expect(campaign.consumedAggregateRealCalls).toBe(100);
    expect(again.denialCode).toBe("AGGREGATE_REAL_CALL_CAP_REACHED");
  });

  it("BYPASS-01 / LEASE-08 — turns do not release/reset the lease", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "bypass01-no-release",
      maxModelInvocations: 3,
      maxHostedWebOperations: 5,
    });
    await runNoraAgentsTurn({
      correlationId: "b1",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "ok" }],
      }),
      enableTools: false,
      campaignBudget: campaign,
      maxTurns: 1,
    });
    expect(campaign.consumedModelInvocations).toBe(1);
    await runNoraAgentsTurn({
      correlationId: "b1b",
      projectId: "p",
      systemInstructions: "S",
      userContent: "y",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "ok2" }],
      }),
      enableTools: false,
      campaignBudget: campaign,
      maxTurns: 1,
    });
    expect(campaign.consumedModelInvocations).toBe(2);
  });

  it("BYPASS-02 — caller maxTurns > remaining is clamped", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "bypass02-clamp-turns",
      maxModelInvocations: 2,
      maxHostedWebOperations: 10,
    });
    expect(claimModelInvocation(campaign)).toBe(true);
    const clamp = clampRunnerBudgetForCampaign({
      campaign,
      requestedMaxTurns: 99,
      wantHostedWebSearch: false,
    });
    expect(clamp.maxTurns).toBe(1);
  });

  it("BYPASS-03 — caller hosted override > remaining rejected/clamped", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "bypass03-hosted-override",
      maxModelInvocations: 5,
      maxHostedWebOperations: 2,
    });
    const clamp = clampRunnerBudgetForCampaign({
      campaign,
      requestedMaxTurns: 1,
      wantHostedWebSearch: true,
    });
    const resolved = resolveMaxToolCallsProviderData({
      campaign,
      configuredMaxToolCalls: clamp.maxToolCalls,
      callerOverride: 999,
    });
    expect(resolved.rejectedOverride).toBe(true);
    expect(resolved.max_tool_calls).toBeLessThanOrEqual(2);
  });

  it("BYPASS-04 / AUTH-04 — enableHostedWebSearch + capability cannot authorize REAL", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "bypass04-no-real-auth",
      maxModelInvocations: 5,
      maxHostedWebOperations: 2,
    });
    const capability = evaluateCampaignBudgetCapabilityOnly({
      campaign,
      wantHostedWebSearch: true,
    });
    expect(capability.capabilitySatisfied).toBe(true);
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
    });
    expect(pre.blocked).toBe(true);
    expect(pre.eligible).toBe(false);
    expect(pre.code).toBe("REAL_AUTHORITY_NOT_BOUND");
    expect(pre.reasons).toContain("REAL_AUTHORITY_NOT_BOUND");
    const clamp = clampRunnerBudgetForCampaign({
      campaign,
      requestedMaxTurns: 2,
      wantHostedWebSearch: !pre.blocked,
    });
    expect(clamp.attachHostedWebSearch).toBe(false);
  });

  it("BYPASS-05 / AUTH-05 — Fake deterministic hosted remains usable; no REAL hosted consume", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "bypass05-fake-hosted",
      maxModelInvocations: 3,
      maxHostedWebOperations: 1,
    });
    await runNoraAgentsTurn({
      correlationId: "b5",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "fake" }],
      }),
      enableTools: false,
      enableHostedWebSearch: true,
      campaignBudget: campaign,
      maxTurns: 1,
      deterministicHostedWebSearchCalls: [
        {
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
        },
      ],
    });
    expect(campaign.consumedHostedWebOperations).toBe(0);
  });

  it("BYPASS-06 — unknown hosted tools remain fail-closed", async () => {
    expect(() =>
      toolDefinitionsFromModelRequest({
        tools: [
          {
            type: "hosted_tool",
            name: "file_search",
            providerData: { type: "file_search" },
          },
        ],
      } as never),
    ).toThrow(/NORA_PROVIDER_MODEL_UNSUPPORTED_HOSTED_TOOL:file_search/);
  });

  it("BYPASS-07/08 / LEASE-09 — budget stop does not retry or invent completion", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "bypass07-no-retry",
      maxModelInvocations: 0,
      maxHostedWebOperations: 0,
    });
    const turn = await runNoraAgentsTurn({
      correlationId: "b7",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "nope" }],
      }),
      enableTools: false,
      campaignBudget: campaign,
      maxTurns: 5,
    });
    expect(turn.limitReached).toBe(true);
    expect(turn.text).not.toBe("nope");
    expect(campaign.consumedModelInvocations).toBe(0);
    expect(turn.text.toLowerCase()).not.toMatch(/cognitive completion/);
  });
});

describe("PRE-REAL-01 AUTH — live authority isolation", () => {
  it("AUTH-01 — runtime input type has no test Morris GO REAL boolean", async () => {
    type Keys = keyof RunNoraAgentsTurnInput;
    type Forbidden = Extract<Keys, "testOnlyMorrisGoRealPresent">;
    const _assertNever: Forbidden extends never ? true : false = true;
    expect(_assertNever).toBe(true);
    const sample: RunNoraAgentsTurnInput = {
      correlationId: "a",
      projectId: "p",
      systemInstructions: "s",
      userContent: "u",
    };
    expect(
      Object.prototype.hasOwnProperty.call(sample, "testOnlyMorrisGoRealPresent"),
    ).toBe(false);
  });

  it("AUTH-02/03 — legacy cast testOnlyMorrisGoRealPresent=true cannot authorize LIVE", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "auth-cast-no-live",
      maxModelInvocations: 5,
      maxHostedWebOperations: 2,
    });
    const smuggled = {
      correlationId: "auth-cast",
      projectId: "p",
      systemInstructions: "S",
      userContent: "search",
      provider: {
        providerId: "openai",
        complete: async () => {
          throw new Error("REAL_MUST_NOT_RUN");
        },
      },
      model: undefined,
      enableTools: false,
      enableHostedWebSearch: true,
      campaignBudget: campaign,
      maxTurns: 1,
      testOnlyMorrisGoRealPresent: true,
    } as RunNoraAgentsTurnInput & { testOnlyMorrisGoRealPresent?: boolean };

    const turn = await runNoraAgentsTurn({
      ...smuggled,
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "safe-fake" }],
      }),
    });
    void turn;
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
    });
    expect(pre.blocked).toBe(true);
    expect(pre.code).toBe("REAL_AUTHORITY_NOT_BOUND");
    expect(pre.eligible).toBe(false);
  });

  it("AUTH-06/07/08 — no authority objects invented; clear block reason; zero network", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "auth-block-reason",
      maxModelInvocations: 10,
      maxHostedWebOperations: 5,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
    });
    expect(pre.code).toBe("REAL_AUTHORITY_NOT_BOUND");
    expect(pre.reasons).toContain("REAL_AUTHORITY_NOT_BOUND");
    expect(JSON.stringify(pre)).not.toMatch(
      /HumanDecision|Confirmation|ExecutionContract|Truth C/,
    );
  });
});

describe("PRE-REAL-02 LEASE — campaign re-instantiation resistance", () => {
  it("LEASE-01 — reacquire same spec preserves consumed counters", () => {
    const first = acquireNoraCampaignBudget({
      campaignId: "lease01-preserve",
      maxModelInvocations: 10,
      maxHostedWebOperations: 5,
    });
    claimModelInvocation(first);
    claimModelInvocation(first);
    const second = acquireNoraCampaignBudget({
      campaignId: "lease01-preserve",
      maxModelInvocations: 10,
      maxHostedWebOperations: 5,
    });
    expect(second).toBe(first);
    expect(second.consumedModelInvocations).toBe(2);
  });

  it("LEASE-02 — higher model cap fails closed", () => {
    acquireNoraCampaignBudget({
      campaignId: "lease02-model-widen",
      maxModelInvocations: 5,
      maxHostedWebOperations: 2,
    });
    expect(() =>
      acquireNoraCampaignBudget({
        campaignId: "lease02-model-widen",
        maxModelInvocations: 99,
        maxHostedWebOperations: 2,
      }),
    ).toThrow(CampaignLeaseError);
  });

  it("LEASE-03 — higher hosted cap fails closed", () => {
    acquireNoraCampaignBudget({
      campaignId: "lease03-hosted-widen",
      maxModelInvocations: 5,
      maxHostedWebOperations: 2,
    });
    expect(() =>
      acquireNoraCampaignBudget({
        campaignId: "lease03-hosted-widen",
        maxModelInvocations: 5,
        maxHostedWebOperations: 99,
      }),
    ).toThrow(CampaignLeaseError);
    try {
      acquireNoraCampaignBudget({
        campaignId: "lease03-hosted-widen",
        maxModelInvocations: 5,
        maxHostedWebOperations: 99,
      });
    } catch (e) {
      expect(e).toBeInstanceOf(CampaignLeaseError);
      expect((e as CampaignLeaseError).code).toBe(
        "NORA_CAMPAIGN_BUDGET_SPEC_MISMATCH",
      );
    }
  });

  it("LEASE-04 — higher aggregate H17 cap fails closed", () => {
    acquireNoraCampaignBudget({
      campaignId: "lease04-agg-widen",
      maxModelInvocations: 5,
      maxHostedWebOperations: 2,
      maxAggregateRealCalls: 5,
    });
    expect(() =>
      acquireNoraCampaignBudget({
        campaignId: "lease04-agg-widen",
        maxModelInvocations: 5,
        maxHostedWebOperations: 2,
        maxAggregateRealCalls: 100,
      }),
    ).toThrow(CampaignLeaseError);
  });

  it("LEASE-05 — different hosted capability fails closed", () => {
    acquireNoraCampaignBudget({
      campaignId: "lease05-cap-class",
      maxModelInvocations: 5,
      maxHostedWebOperations: 2,
      hostedHardCapCapability: "provider_max_tool_calls",
    });
    expect(() =>
      acquireNoraCampaignBudget({
        campaignId: "lease05-cap-class",
        maxModelInvocations: 5,
        maxHostedWebOperations: 2,
        hostedHardCapCapability: "unsupported_unproven",
      }),
    ).toThrow(CampaignLeaseError);
  });

  it("LEASE-06 — fabricated/copied object cannot become canonical runtime budget", async () => {
    const canonical = acquireNoraCampaignBudget({
      campaignId: "lease06-fabricated",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    const fabricated = createNoraCampaignBudget({
      campaignId: "lease06-fabricated",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    expect(isCanonicalCampaignBudget(fabricated)).toBe(false);
    expect(() => requireCanonicalCampaignBudget(fabricated)).toThrow(
      CampaignLeaseError,
    );
    try {
      requireCanonicalCampaignBudget(fabricated);
    } catch (e) {
      expect((e as CampaignLeaseError).code).toBe("CAMPAIGN_LEASE_INVALID");
    }
    expect(() => claimModelInvocation(fabricated)).toThrow(CampaignLeaseError);

    const turn = await runNoraAgentsTurn({
      correlationId: "lease06",
      projectId: "p",
      systemInstructions: "S",
      userContent: "u",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "should-not-run" }],
      }),
      enableTools: false,
      campaignBudget: fabricated,
      maxTurns: 1,
    });
    expect(turn.limitReached).toBe(true);
    expect(turn.text).toMatch(/canonical|lease|CAMPAIGN_LEASE/i);
    expect(turn.text).not.toBe("should-not-run");
    expect(canonical.consumedModelInvocations).toBe(0);
  });

  it("LEASE-10 — no persistence module; process-local only; no reset API", () => {
    const a = acquireNoraCampaignBudget({
      campaignId: "lease10-no-persist",
      maxModelInvocations: 1,
      maxHostedWebOperations: 1,
    });
    expect(isCanonicalCampaignBudget(a)).toBe(true);
    expect(
      Object.keys(CampaignBudgetModule).some((k) =>
        /reset|clearAll|releaseAll|forceReset/i.test(k),
      ),
    ).toBe(false);
  });
});

describe("R-PRE-REAL-03 INT — canonical state integrity", () => {
  function tryMutate(target: NoraCampaignBudget, key: string, value: unknown): void {
    try {
      Object.assign(target as object, { [key]: value });
    } catch {
      /* frozen / accessor may throw — expected */
    }
    try {
      (target as Record<string, unknown>)[key] = value;
    } catch {
      /* expected */
    }
    try {
      Object.defineProperty(target, key, {
        value,
        writable: true,
        configurable: true,
      });
    } catch {
      /* expected */
    }
  }

  it("INT-01 — hard aggregate limit tamper cannot widen", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "int01-agg-tamper",
      maxModelInvocations: 100,
      maxHostedWebOperations: 10,
      maxAggregateRealCalls: 100,
    });
    for (let i = 0; i < 50; i++) claimModelInvocation(campaign);
    tryMutate(campaign, "maxAggregateRealCalls", 1000);
    expect(campaign.maxAggregateRealCalls).toBe(100);
    expect(campaignBudgetSnapshot(campaign).maxAggregateRealCalls).toBe(100);
    let accepted = 50;
    for (let i = 0; i < 200; i++) {
      if (claimModelInvocation(campaign)) accepted += 1;
    }
    expect(accepted).toBe(100);
    expect(campaign.consumedAggregateRealCalls).toBe(100);
  });

  it("INT-02 — model limit tamper cannot widen", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "int02-model-tamper",
      maxModelInvocations: 3,
      maxHostedWebOperations: 10,
    });
    tryMutate(campaign, "maxModelInvocations", 1000);
    expect(campaign.maxModelInvocations).toBe(3);
    expect(claimModelInvocation(campaign)).toBe(true);
    expect(claimModelInvocation(campaign)).toBe(true);
    expect(claimModelInvocation(campaign)).toBe(true);
    expect(claimModelInvocation(campaign)).toBe(false);
    expect(campaign.consumedModelInvocations).toBe(3);
  });

  it("INT-03 — hosted limit tamper cannot widen max_tool_calls clamp", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "int03-hosted-tamper",
      maxModelInvocations: 5,
      maxHostedWebOperations: 2,
    });
    tryMutate(campaign, "maxHostedWebOperations", 1000);
    expect(campaign.maxHostedWebOperations).toBe(2);
    const clamp = clampRunnerBudgetForCampaign({
      campaign,
      requestedMaxTurns: 1,
      wantHostedWebSearch: true,
    });
    expect(clamp.maxToolCalls).toBe(2);
    expect((clamp.maxToolCalls ?? 0) * clamp.maxTurns).toBeLessThanOrEqual(2);
  });

  it("INT-04 — consumed-counter reset cannot rewind model/aggregate", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "int04-consumed-reset",
      maxModelInvocations: 100,
      maxHostedWebOperations: 10,
      maxAggregateRealCalls: 100,
    });
    for (let i = 0; i < 50; i++) claimModelInvocation(campaign);
    tryMutate(campaign, "consumedModelInvocations", 0);
    tryMutate(campaign, "consumedAggregateRealCalls", 0);
    expect(campaign.consumedModelInvocations).toBe(50);
    expect(campaign.consumedAggregateRealCalls).toBe(50);
    expect(remainingModelInvocations(campaign)).toBe(50);
    expect(remainingAggregateRealCalls(campaign)).toBe(50);
  });

  it("INT-05 — hosted consumed reset cannot rewind", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "int05-hosted-consumed",
      maxModelInvocations: 5,
      maxHostedWebOperations: 3,
    });
    expect(claimHostedWebOperations(campaign, 2)).toBe(true);
    tryMutate(campaign, "consumedHostedWebOperations", 0);
    expect(campaign.consumedHostedWebOperations).toBe(2);
    expect(remainingHostedWebOperations(campaign)).toBe(1);
  });

  it("INT-06 — capability escalation cannot promote unsupported_unproven", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "int06-cap-escalate",
      maxModelInvocations: 5,
      maxHostedWebOperations: 5,
      hostedHardCapCapability: "unsupported_unproven",
    });
    tryMutate(campaign, "hostedHardCapCapability", "provider_max_tool_calls");
    expect(campaign.hostedHardCapCapability).toBe("unsupported_unproven");
    const clamp = clampRunnerBudgetForCampaign({
      campaign,
      requestedMaxTurns: 2,
      wantHostedWebSearch: true,
    });
    expect(clamp.attachHostedWebSearch).toBe(false);
    expect(clamp.reasonCodes).toContain("hosted_hard_cap_unenforceable_detach");
  });

  it("INT-07 — campaign identity tamper cannot reach another lease", () => {
    const a = acquireNoraCampaignBudget({
      campaignId: "int07-id-a",
      maxModelInvocations: 5,
      maxHostedWebOperations: 2,
    });
    const b = acquireNoraCampaignBudget({
      campaignId: "int07-id-b",
      maxModelInvocations: 5,
      maxHostedWebOperations: 2,
    });
    claimModelInvocation(a);
    tryMutate(a, "campaignId", "int07-id-b");
    expect(a.campaignId).toBe("int07-id-a");
    expect(isCanonicalCampaignBudget(a)).toBe(true);
    expect(b.consumedModelInvocations).toBe(0);
    expect(claimModelInvocation(a)).toBe(true);
    expect(a.consumedModelInvocations).toBe(2);
  });

  it("INT-08 — assign / defineProperty / clone attacks leave canonical intact", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "int08-clone-attack",
      maxModelInvocations: 4,
      maxHostedWebOperations: 4,
    });
    claimModelInvocation(campaign);
    claimModelInvocation(campaign);
    const clone = { ...campaign } as NoraCampaignBudget;
    const assigned = Object.assign({}, campaign) as NoraCampaignBudget;
    const jsonClone = JSON.parse(JSON.stringify(campaignBudgetSnapshot(campaign)));
    expect(isCanonicalCampaignBudget(clone)).toBe(false);
    expect(isCanonicalCampaignBudget(assigned)).toBe(false);
    expect(() => claimModelInvocation(clone)).toThrow(CampaignLeaseError);
    expect(() => claimModelInvocation(assigned)).toThrow(CampaignLeaseError);
    void jsonClone;
    tryMutate(campaign, "maxModelInvocations", 999);
    tryMutate(campaign, "consumedModelInvocations", 0);
    expect(campaign.consumedModelInvocations).toBe(2);
    expect(campaign.maxModelInvocations).toBe(4);
    expect(claimModelInvocation(campaign)).toBe(true);
    expect(claimModelInvocation(campaign)).toBe(true);
    expect(claimModelInvocation(campaign)).toBe(false);
  });

  it("INT-09 — public NoraCampaignBudget fields are readonly in the type contract", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "int09-readonly-type",
      maxModelInvocations: 1,
      maxHostedWebOperations: 1,
    });
    // Compile-time: NoraCampaignBudget fields are `readonly`.
    // Runtime: frozen handle backed by private lease (assignment cannot redirect enforcement).
    expect(Object.isFrozen(campaign)).toBe(true);
    expect(typeof campaign.maxModelInvocations).toBe("number");
    type ReadonlyCheck = {
      readonly [K in keyof NoraCampaignBudget]: NoraCampaignBudget[K];
    };
    const _type: ReadonlyCheck = campaign;
    expect(_type.campaignId).toBe("int09-readonly-type");
  });
});

describe("R-PRE-REAL-03 H17 tamper / full single-process integrity", () => {
  it("H17 tamper — widen/reset after 50 cannot authorize call 101", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "h17-tamper-full",
      maxModelInvocations: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
      maxHostedWebOperations: 50,
      maxAggregateRealCalls: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
    });
    for (let i = 0; i < 50; i++) {
      expect(claimModelInvocation(campaign)).toBe(true);
    }
    const anyCamp = campaign as Record<string, unknown>;
    for (const [k, v] of [
      ["maxAggregateRealCalls", 1000],
      ["maxModelInvocations", 1000],
      ["consumedAggregateRealCalls", 0],
      ["consumedModelInvocations", 0],
    ] as const) {
      try {
        anyCamp[k] = v;
      } catch {
        /* expected */
      }
      try {
        Object.assign(campaign as object, { [k]: v });
      } catch {
        /* expected */
      }
    }
    const again = acquireNoraCampaignBudget({
      campaignId: "h17-tamper-full",
      maxModelInvocations: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
      maxHostedWebOperations: 50,
      maxAggregateRealCalls: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
    });
    expect(again).toBe(campaign);
    expect(again.consumedAggregateRealCalls).toBe(50);
    expect(again.maxAggregateRealCalls).toBe(100);
    expect(again.maxModelInvocations).toBe(100);

    let accepted = 50;
    let denied = 0;
    for (let i = 50; i < H17_HISTORICAL_OBSERVED_AGGREGATE_CALLS; i++) {
      if (claimModelInvocation(campaign)) accepted += 1;
      else denied += 1;
    }
    expect(accepted).toBe(100);
    expect(denied).toBe(41);
    expect(campaign.consumedAggregateRealCalls).toBe(100);
    expect(campaign.consumedModelInvocations).toBe(100);

    // Post-exhaustion tamper still cannot reopen.
    try {
      anyCamp.consumedAggregateRealCalls = 0;
      anyCamp.maxAggregateRealCalls = 1000;
    } catch {
      /* expected */
    }
    expect(claimModelInvocation(campaign)).toBe(false);
    expect(campaign.consumedAggregateRealCalls).toBe(100);
  });
});

describe("R-PRE-REAL-04 RESET — registry reset isolation", () => {
  it("RESET-01 — public barrel has no resetCampaignLeaseRegistryForTests", () => {
    expect(
      Object.prototype.hasOwnProperty.call(
        NoraRuntime,
        "resetCampaignLeaseRegistryForTests",
      ),
    ).toBe(false);
    expect(
      Object.keys(NoraRuntime).some((k) =>
        /resetCampaign|clearCampaign|releaseAllCampaign|forceResetCampaign/i.test(
          k,
        ),
      ),
    ).toBe(false);
  });

  it("RESET-02 — campaignBudget module has no callable reset/clear-all", () => {
    expect(
      Object.keys(CampaignBudgetModule).some((k) =>
        /reset|clearAll|releaseAll|forceReset/i.test(k),
      ),
    ).toBe(false);
    expect(
      typeof (CampaignBudgetModule as { resetCampaignLeaseRegistryForTests?: unknown })
        .resetCampaignLeaseRegistryForTests,
    ).toBe("undefined");
  });

  it("RESET-03 — process lifetime preserves consumed across ordinary turns", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "reset03-lifetime",
      maxModelInvocations: 5,
      maxHostedWebOperations: 5,
    });
    claimModelInvocation(campaign);
    claimModelInvocation(campaign);
    await runNoraAgentsTurn({
      correlationId: "r3",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "ok" }],
      }),
      enableTools: false,
      campaignBudget: campaign,
      maxTurns: 1,
    });
    const again = acquireNoraCampaignBudget({
      campaignId: "reset03-lifetime",
      maxModelInvocations: 5,
      maxHostedWebOperations: 5,
    });
    expect(again.consumedModelInvocations).toBe(3);
  });

  it("RESET-04 — exhausted campaign stays exhausted after retry/new turn", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "reset04-exhausted",
      maxModelInvocations: 1,
      maxHostedWebOperations: 1,
    });
    expect(claimModelInvocation(campaign)).toBe(true);
    expect(claimModelInvocation(campaign)).toBe(false);
    await runNoraAgentsTurn({
      correlationId: "r4",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "nope" }],
      }),
      enableTools: false,
      campaignBudget: campaign,
      maxTurns: 2,
    });
    const again = acquireNoraCampaignBudget({
      campaignId: "reset04-exhausted",
      maxModelInvocations: 1,
      maxHostedWebOperations: 1,
    });
    expect(again.consumedModelInvocations).toBe(1);
    expect(claimModelInvocation(again)).toBe(false);
  });

  it("RESET-05 — no product/runtime env switch resets the registry", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "reset05-env",
      maxModelInvocations: 3,
      maxHostedWebOperations: 1,
    });
    claimModelInvocation(campaign);
    // No product API keys off NODE_ENV/VITEST to clear leases. Prove by absence
    // of env-gated reset + reacquire preserving counters under current env.
    expect(
      Object.keys(CampaignBudgetModule).some((k) => /NODE_ENV|VITEST|env/i.test(k)),
    ).toBe(false);
    const again = acquireNoraCampaignBudget({
      campaignId: "reset05-env",
      maxModelInvocations: 3,
      maxHostedWebOperations: 1,
    });
    expect(again.consumedModelInvocations).toBe(1);
    expect(process.env.NODE_ENV).toBeDefined();
  });

  it("RESET-06 — no hidden release/reset backdoor introduced for tests", () => {
    const surface = [
      ...Object.keys(NoraRuntime),
      ...Object.keys(CampaignBudgetModule),
    ];
    expect(
      surface.some((k) =>
        /releaseCampaign|resetLease|clearLease|dropCampaign|evictCampaign/i.test(
          k,
        ),
      ),
    ).toBe(false);
  });
});

function expectInvalidBudget(fn: () => unknown): void {
  expect(fn).toThrow(CampaignLeaseError);
  try {
    fn();
  } catch (e) {
    expect(e).toBeInstanceOf(CampaignLeaseError);
    expect((e as CampaignLeaseError).code).toBe("INVALID_BUDGET");
  }
}

describe("R-PRE-REAL-05 NUM-HARD — finite hard-limit validation", () => {
  it("NUM-01 / NUM-HARD-01 — maxModelInvocations = NaN rejected; no lease", () => {
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "num01-nan-model",
        maxModelInvocations: Number.NaN,
        maxHostedWebOperations: 2,
      }),
    );
    const valid = acquireNoraCampaignBudget({
      campaignId: "num01-nan-model",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    expect(isCanonicalCampaignBudget(valid)).toBe(true);
    expect(valid.maxModelInvocations).toBe(3);
    expect(Number.isFinite(valid.maxModelInvocations)).toBe(true);
  });

  it("NUM-02 / NUM-HARD-02 — maxModelInvocations = Infinity rejected", () => {
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "num02-inf-model",
        maxModelInvocations: Number.POSITIVE_INFINITY,
        maxHostedWebOperations: 2,
      }),
    );
  });

  it("NUM-03 / NUM-HARD-03 — maxModelInvocations = -Infinity rejected", () => {
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "num03-ninf-model",
        maxModelInvocations: Number.NEGATIVE_INFINITY,
        maxHostedWebOperations: 2,
      }),
    );
  });

  it("NUM-04 / NUM-HARD-04/05 — maxHostedWebOperations NaN / ±Infinity rejected", () => {
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "num04-nan-hosted",
        maxModelInvocations: 2,
        maxHostedWebOperations: Number.NaN,
      }),
    );
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "num04-inf-hosted",
        maxModelInvocations: 2,
        maxHostedWebOperations: Number.POSITIVE_INFINITY,
      }),
    );
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "num04-ninf-hosted",
        maxModelInvocations: 2,
        maxHostedWebOperations: Number.NEGATIVE_INFINITY,
      }),
    );
  });

  it("NUM-05 / NUM-HARD-06/07 — maxAggregateRealCalls NaN / Infinity rejected", () => {
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "num05-nan-agg",
        maxModelInvocations: 2,
        maxHostedWebOperations: 2,
        maxAggregateRealCalls: Number.NaN,
      }),
    );
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "num05-inf-agg",
        maxModelInvocations: 2,
        maxHostedWebOperations: 2,
        maxAggregateRealCalls: Number.POSITIVE_INFINITY,
      }),
    );
  });

  it("NUM-06 — failed invalid acquisition does not poison campaignId namespace", () => {
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "num06-poison",
        maxModelInvocations: Number.NaN,
        maxHostedWebOperations: Number.POSITIVE_INFINITY,
      }),
    );
    const fresh = acquireNoraCampaignBudget({
      campaignId: "num06-poison",
      maxModelInvocations: 5,
      maxHostedWebOperations: 3,
      maxAggregateRealCalls: 5,
    });
    expect(fresh.consumedModelInvocations).toBe(0);
    expect(fresh.maxModelInvocations).toBe(5);
    expect(claimModelInvocation(fresh)).toBe(true);
  });

  it("NUM-07 — finite fraction floors (3.9 → 3); no NaN/Infinity", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "num07-fraction",
      maxModelInvocations: 3.9,
      maxHostedWebOperations: 2.1,
      maxAggregateRealCalls: 4.7,
    });
    expect(campaign.maxModelInvocations).toBe(3);
    expect(campaign.maxHostedWebOperations).toBe(2);
    expect(campaign.maxAggregateRealCalls).toBe(4);
    expect(Number.isInteger(campaign.maxModelInvocations)).toBe(true);
  });

  it("NUM-08 / NUM-HARD-08 — zero limits supported; fail-closed before dispatch", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "num08-zero",
      maxModelInvocations: 0,
      maxHostedWebOperations: 0,
    });
    expect(campaign.maxModelInvocations).toBe(0);
    const turn = await runNoraAgentsTurn({
      correlationId: "num08",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "nope" }],
      }),
      enableTools: false,
      campaignBudget: campaign,
      maxTurns: 3,
    });
    expect(turn.limitReached).toBe(true);
    expect(turn.text).not.toBe("nope");
    expect(campaign.consumedModelInvocations).toBe(0);
  });
});

describe("R-PRE-REAL-06 NUM-CLAIM / CLAMP / CAP — hosted claim + provider numeric integrity", () => {
  it("NUM-CLAIM-01 — claimHostedWebOperations(NaN) throws; no mutation", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "num-claim01",
      maxModelInvocations: 5,
      maxHostedWebOperations: 5,
    });
    expect(claimHostedWebOperations(campaign, 1)).toBe(true);
    expectInvalidBudget(() => claimHostedWebOperations(campaign, Number.NaN));
    expect(campaign.consumedHostedWebOperations).toBe(1);
    expect(Number.isFinite(campaign.consumedHostedWebOperations)).toBe(true);
  });

  it("NUM-CLAIM-02/03 — claimHostedWebOperations(±Infinity) throws; no mutation", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "num-claim02",
      maxModelInvocations: 5,
      maxHostedWebOperations: 5,
    });
    expect(claimHostedWebOperations(campaign, 2)).toBe(true);
    expectInvalidBudget(() =>
      claimHostedWebOperations(campaign, Number.POSITIVE_INFINITY),
    );
    expectInvalidBudget(() =>
      claimHostedWebOperations(campaign, Number.NEGATIVE_INFINITY),
    );
    expect(campaign.consumedHostedWebOperations).toBe(2);
  });

  it("NUM-CLAIM-04 — negative finite count floors to 0; no corruption", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "num-claim04",
      maxModelInvocations: 5,
      maxHostedWebOperations: 5,
    });
    expect(claimHostedWebOperations(campaign, -3.7)).toBe(true);
    expect(campaign.consumedHostedWebOperations).toBe(0);
    expect(Number.isFinite(campaign.consumedHostedWebOperations)).toBe(true);
  });

  it("NUM-CLAMP-01 — requestedMaxTurns = NaN fails closed / no Runner dispatch", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "num-clamp01",
      maxModelInvocations: 5,
      maxHostedWebOperations: 5,
    });
    expectInvalidBudget(() =>
      clampRunnerBudgetForCampaign({
        campaign,
        requestedMaxTurns: Number.NaN,
        wantHostedWebSearch: false,
      }),
    );
    const turn = await runNoraAgentsTurn({
      correlationId: "num-clamp01",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "nope" }],
      }),
      enableTools: false,
      campaignBudget: campaign,
      maxTurns: Number.NaN,
    });
    expect(turn.limitReached).toBe(true);
    expect(turn.text).not.toBe("nope");
    expect(campaign.consumedModelInvocations).toBe(0);
  });

  it("NUM-CLAMP-02 — requestedMaxTurns = Infinity fails closed", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "num-clamp02",
      maxModelInvocations: 5,
      maxHostedWebOperations: 5,
    });
    expectInvalidBudget(() =>
      clampRunnerBudgetForCampaign({
        campaign,
        requestedMaxTurns: Number.POSITIVE_INFINITY,
        wantHostedWebSearch: true,
      }),
    );
  });

  it("NUM-CAP-01 — configuredMaxToolCalls = NaN never reaches providerData", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "num-cap01",
      maxModelInvocations: 5,
      maxHostedWebOperations: 5,
    });
    expectInvalidBudget(() =>
      resolveMaxToolCallsProviderData({
        campaign,
        configuredMaxToolCalls: Number.NaN,
      }),
    );
  });

  it("NUM-CAP-02 — configuredMaxToolCalls = Infinity never reaches providerData", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "num-cap02",
      maxModelInvocations: 5,
      maxHostedWebOperations: 5,
    });
    expectInvalidBudget(() =>
      resolveMaxToolCallsProviderData({
        campaign,
        configuredMaxToolCalls: Number.POSITIVE_INFINITY,
      }),
    );
  });

  it("NUM-CAP-03/04 — callerOverride NaN/Infinity rejected; cannot widen", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "num-cap03",
      maxModelInvocations: 5,
      maxHostedWebOperations: 4,
    });
    const clamp = clampRunnerBudgetForCampaign({
      campaign,
      requestedMaxTurns: 1,
      wantHostedWebSearch: true,
    });
    const nanOverride = resolveMaxToolCallsProviderData({
      campaign,
      configuredMaxToolCalls: clamp.maxToolCalls,
      callerOverride: Number.NaN,
    });
    expect(nanOverride.rejectedOverride).toBe(true);
    expect(nanOverride.max_tool_calls).toBe(clamp.maxToolCalls);
    expect(Number.isFinite(nanOverride.max_tool_calls!)).toBe(true);

    const infOverride = resolveMaxToolCallsProviderData({
      campaign,
      configuredMaxToolCalls: clamp.maxToolCalls,
      callerOverride: Number.POSITIVE_INFINITY,
    });
    expect(infOverride.rejectedOverride).toBe(true);
    expect(infOverride.max_tool_calls).toBe(clamp.maxToolCalls);
    expect(infOverride.max_tool_calls).toBeLessThanOrEqual(4);
  });

  it("NUM-CAP-05 — finite override <= configured cap remains supported", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "num-cap05",
      maxModelInvocations: 5,
      maxHostedWebOperations: 4,
    });
    const clamp = clampRunnerBudgetForCampaign({
      campaign,
      requestedMaxTurns: 1,
      wantHostedWebSearch: true,
    });
    expect(clamp.maxToolCalls).toBe(4);
    const resolved = resolveMaxToolCallsProviderData({
      campaign,
      configuredMaxToolCalls: clamp.maxToolCalls,
      callerOverride: 2,
    });
    expect(resolved.max_tool_calls).toBe(2);
    expect(resolved.rejectedOverride).toBe(false);
    const settings = withMaxToolCallsProviderData(undefined, resolved.max_tool_calls!);
    expect(settings?.providerData?.max_tool_calls).toBe(2);
    expect(Number.isInteger(settings?.providerData?.max_tool_calls)).toBe(true);
  });
});

describe("R-PRE-REAL-05/06 H17 invalid-numeric regression", () => {
  it("H17 Scenario A/B — NaN/Infinity campaign rejected; Scenario C claim poison + 141/100", () => {
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "h17-num-nan",
        maxModelInvocations: Number.NaN,
        maxHostedWebOperations: 10,
        maxAggregateRealCalls: Number.NaN,
      }),
    );
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "h17-num-inf",
        maxModelInvocations: Number.POSITIVE_INFINITY,
        maxHostedWebOperations: 10,
        maxAggregateRealCalls: Number.POSITIVE_INFINITY,
      }),
    );

    const campaign = acquireNoraCampaignBudget({
      campaignId: "h17-num-valid",
      maxModelInvocations: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
      maxHostedWebOperations: 50,
      maxAggregateRealCalls: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
    });
    for (let i = 0; i < 50; i++) {
      expect(claimModelInvocation(campaign)).toBe(true);
    }
    expectInvalidBudget(() => claimHostedWebOperations(campaign, Number.NaN));
    expectInvalidBudget(() =>
      claimHostedWebOperations(campaign, Number.POSITIVE_INFINITY),
    );
    expect(campaign.consumedHostedWebOperations).toBe(0);
    expect(campaign.consumedAggregateRealCalls).toBe(50);
    expect(campaign.consumedModelInvocations).toBe(50);
    expect(Number.isFinite(campaign.consumedHostedWebOperations)).toBe(true);
    expect(Number.isFinite(campaign.consumedModelInvocations)).toBe(true);

    let accepted = 50;
    let denied = 0;
    for (let i = 50; i < H17_HISTORICAL_OBSERVED_AGGREGATE_CALLS; i++) {
      if (claimModelInvocation(campaign)) accepted += 1;
      else denied += 1;
    }
    expect(accepted).toBe(100);
    expect(denied).toBe(41);
    expect(campaign.consumedAggregateRealCalls).toBe(100);
    expect(claimModelInvocation(campaign)).toBe(false);
  });
});

describe("R-PRE-REAL-07 PROVIDER-FINAL — direct helper integrity", () => {
  it("PROVIDER-FINAL-01 — NaN rejected; no providerData", () => {
    expectInvalidBudget(() => withMaxToolCallsProviderData(undefined, Number.NaN));
  });

  it("PROVIDER-FINAL-02 — Infinity rejected", () => {
    expectInvalidBudget(() =>
      withMaxToolCallsProviderData(undefined, Number.POSITIVE_INFINITY),
    );
  });

  it("PROVIDER-FINAL-03 — -Infinity rejected", () => {
    expectInvalidBudget(() =>
      withMaxToolCallsProviderData(undefined, Number.NEGATIVE_INFINITY),
    );
  });

  it("PROVIDER-FINAL-04 — MAX_SAFE_INTEGER + 1 rejected", () => {
    expectInvalidBudget(() =>
      withMaxToolCallsProviderData(undefined, Number.MAX_SAFE_INTEGER + 1),
    );
  });

  it("PROVIDER-FINAL-05 — negative rejected", () => {
    expectInvalidBudget(() => withMaxToolCallsProviderData(undefined, -1));
  });

  it("PROVIDER-FINAL-06 — fraction rejected (no silent floor at final boundary)", () => {
    expectInvalidBudget(() => withMaxToolCallsProviderData(undefined, 1.5));
  });

  it("PROVIDER-FINAL-07 — 0 accepted", () => {
    const settings = withMaxToolCallsProviderData(undefined, 0);
    expect(settings?.providerData?.max_tool_calls).toBe(0);
    expect(Number.isSafeInteger(settings?.providerData?.max_tool_calls)).toBe(
      true,
    );
  });

  it("PROVIDER-FINAL-08 — 2 emitted exactly", () => {
    const settings = withMaxToolCallsProviderData(undefined, 2);
    expect(settings?.providerData?.max_tool_calls).toBe(2);
  });

  it("PROVIDER-FINAL-09 — public barrel does not expose withMaxToolCallsProviderData", () => {
    expect(
      Object.prototype.hasOwnProperty.call(
        NoraRuntime,
        "withMaxToolCallsProviderData",
      ),
    ).toBe(false);
    expect(
      Object.keys(NoraRuntime).includes("withMaxToolCallsProviderData"),
    ).toBe(false);
  });
});

describe("R-PRE-REAL-08 SAFE — safe-integer budget domain", () => {
  it("SAFE-01 — MAX_SAFE_INTEGER model limit accepted", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "safe01-max",
      maxModelInvocations: Number.MAX_SAFE_INTEGER,
      maxHostedWebOperations: 1,
    });
    expect(campaign.maxModelInvocations).toBe(Number.MAX_SAFE_INTEGER);
    expect(Number.isSafeInteger(campaign.maxModelInvocations)).toBe(true);
  });

  it("SAFE-02 — MAX_SAFE_INTEGER + 1 model rejected; no lease", () => {
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "safe02-unsafe-model",
        maxModelInvocations: Number.MAX_SAFE_INTEGER + 1,
        maxHostedWebOperations: 1,
      }),
    );
    const valid = acquireNoraCampaignBudget({
      campaignId: "safe02-unsafe-model",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    expect(valid.maxModelInvocations).toBe(2);
  });

  it("SAFE-03 — MAX_SAFE_INTEGER + 1 hosted rejected", () => {
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "safe03-unsafe-hosted",
        maxModelInvocations: 2,
        maxHostedWebOperations: Number.MAX_SAFE_INTEGER + 1,
      }),
    );
  });

  it("SAFE-04 — MAX_SAFE_INTEGER + 1 aggregate rejected", () => {
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "safe04-unsafe-agg",
        maxModelInvocations: 2,
        maxHostedWebOperations: 1,
        maxAggregateRealCalls: Number.MAX_SAFE_INTEGER + 1,
      }),
    );
  });

  it("SAFE-05 — Number.MAX_VALUE hard limit rejected despite finite", () => {
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "safe05-max-value",
        maxModelInvocations: Number.MAX_VALUE,
        maxHostedWebOperations: 1,
      }),
    );
  });

  it("SAFE-06 — failed unsafe acquisition does not poison campaignId", () => {
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "safe06-poison",
        maxModelInvocations: Number.MAX_SAFE_INTEGER + 1,
        maxHostedWebOperations: Number.MAX_VALUE,
      }),
    );
    const fresh = acquireNoraCampaignBudget({
      campaignId: "safe06-poison",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    expect(fresh.consumedModelInvocations).toBe(0);
    expect(claimModelInvocation(fresh)).toBe(true);
  });

  it("SAFE-07 — fraction 3.9 floors to 3 (compatibility retained)", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "safe07-fraction",
      maxModelInvocations: 3.9,
      maxHostedWebOperations: 2.1,
    });
    expect(campaign.maxModelInvocations).toBe(3);
    expect(Number.isSafeInteger(campaign.maxModelInvocations)).toBe(true);
  });

  it("SAFE-08 — requestedMaxTurns = MAX_SAFE + 1 fails closed", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "safe08-turns",
      maxModelInvocations: 5,
      maxHostedWebOperations: 5,
    });
    expectInvalidBudget(() =>
      clampRunnerBudgetForCampaign({
        campaign,
        requestedMaxTurns: Number.MAX_SAFE_INTEGER + 1,
        wantHostedWebSearch: false,
      }),
    );
    const turn = await runNoraAgentsTurn({
      correlationId: "safe08",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "nope" }],
      }),
      enableTools: false,
      campaignBudget: campaign,
      maxTurns: Number.MAX_SAFE_INTEGER + 1,
    });
    expect(turn.limitReached).toBe(true);
    expect(turn.text).not.toBe("nope");
  });

  it("SAFE-09 — configuredMaxToolCalls = MAX_SAFE + 1 rejected", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "safe09-cap",
      maxModelInvocations: 5,
      maxHostedWebOperations: 5,
    });
    expectInvalidBudget(() =>
      resolveMaxToolCallsProviderData({
        campaign,
        configuredMaxToolCalls: Number.MAX_SAFE_INTEGER + 1,
      }),
    );
  });

  it("SAFE-10 — callerOverride = MAX_SAFE + 1 rejected; cannot widen", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "safe10-override",
      maxModelInvocations: 5,
      maxHostedWebOperations: 4,
    });
    const clamp = clampRunnerBudgetForCampaign({
      campaign,
      requestedMaxTurns: 1,
      wantHostedWebSearch: true,
    });
    const resolved = resolveMaxToolCallsProviderData({
      campaign,
      configuredMaxToolCalls: clamp.maxToolCalls,
      callerOverride: Number.MAX_SAFE_INTEGER + 1,
    });
    expect(resolved.rejectedOverride).toBe(true);
    expect(resolved.max_tool_calls).toBe(clamp.maxToolCalls);
    expect(Number.isSafeInteger(resolved.max_tool_calls!)).toBe(true);
  });

  it("SAFE-11 — MAX_SAFE hosted edge: consume to exact max; next denied", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "safe11-edge",
      maxModelInvocations: 5,
      maxHostedWebOperations: Number.MAX_SAFE_INTEGER,
    });
    expect(
      claimHostedWebOperations(campaign, Number.MAX_SAFE_INTEGER - 1),
    ).toBe(true);
    expect(campaign.consumedHostedWebOperations).toBe(
      Number.MAX_SAFE_INTEGER - 1,
    );
    expect(claimHostedWebOperations(campaign, 1)).toBe(true);
    expect(campaign.consumedHostedWebOperations).toBe(Number.MAX_SAFE_INTEGER);
    expect(Number.isSafeInteger(campaign.consumedHostedWebOperations)).toBe(
      true,
    );
    expect(claimHostedWebOperations(campaign, 1)).toBe(false);
    expect(campaign.consumedHostedWebOperations).toBe(Number.MAX_SAFE_INTEGER);
  });

  it("SAFE-12 — claim greater than remaining denies before addition", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "safe12-overclaim",
      maxModelInvocations: 5,
      maxHostedWebOperations: 10,
    });
    expect(claimHostedWebOperations(campaign, 7)).toBe(true);
    expect(claimHostedWebOperations(campaign, 5)).toBe(false);
    expect(campaign.consumedHostedWebOperations).toBe(7);
    expect(Number.isSafeInteger(campaign.consumedHostedWebOperations)).toBe(
      true,
    );
  });

  it("SAFE-13 — snapshot max/consumed/remaining remain safe integers", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "safe13-snap",
      maxModelInvocations: 10,
      maxHostedWebOperations: 8,
      maxAggregateRealCalls: 10,
    });
    claimModelInvocation(campaign);
    claimHostedWebOperations(campaign, 3);
    const snap = campaignBudgetSnapshot(campaign);
    for (const v of [
      snap.maxModelInvocations,
      snap.maxHostedWebOperations,
      snap.maxAggregateRealCalls,
      snap.consumedModelInvocations,
      snap.consumedHostedWebOperations,
      snap.consumedAggregateRealCalls,
      snap.remainingModelInvocations,
      snap.remainingHostedWebOperations,
      snap.remainingAggregateRealCalls,
    ]) {
      expect(Number.isSafeInteger(v)).toBe(true);
      expect(v).toBeGreaterThanOrEqual(0);
    }
    expect(snap.consumedModelInvocations).toBeLessThanOrEqual(
      snap.maxModelInvocations,
    );
    expect(snap.consumedHostedWebOperations).toBeLessThanOrEqual(
      snap.maxHostedWebOperations,
    );
  });
});

describe("R-PRE-REAL-07/08 H17 final numeric + precision regression", () => {
  it("H17 final — unsafe/provider attacks then 141/100 intact", () => {
    expectInvalidBudget(() =>
      withMaxToolCallsProviderData(undefined, Number.NaN),
    );
    expectInvalidBudget(() =>
      withMaxToolCallsProviderData(undefined, Number.MAX_SAFE_INTEGER + 1),
    );
    expectInvalidBudget(() =>
      acquireNoraCampaignBudget({
        campaignId: "h17-final-unsafe",
        maxModelInvocations: Number.MAX_SAFE_INTEGER + 1,
        maxHostedWebOperations: 10,
        maxAggregateRealCalls: Number.MAX_VALUE,
      }),
    );

    const campaign = acquireNoraCampaignBudget({
      campaignId: "h17-final-valid",
      maxModelInvocations: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
      maxHostedWebOperations: 50,
      maxAggregateRealCalls: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
    });
    expectInvalidBudget(() =>
      claimHostedWebOperations(campaign, Number.MAX_SAFE_INTEGER + 1),
    );
    expectInvalidBudget(() =>
      clampRunnerBudgetForCampaign({
        campaign,
        requestedMaxTurns: Number.MAX_SAFE_INTEGER + 1,
        wantHostedWebSearch: true,
      }),
    );
    expectInvalidBudget(() =>
      resolveMaxToolCallsProviderData({
        campaign,
        configuredMaxToolCalls: Number.MAX_SAFE_INTEGER + 1,
      }),
    );
    const clamp = clampRunnerBudgetForCampaign({
      campaign,
      requestedMaxTurns: 1,
      wantHostedWebSearch: true,
    });
    const ov = resolveMaxToolCallsProviderData({
      campaign,
      configuredMaxToolCalls: clamp.maxToolCalls,
      callerOverride: Number.MAX_SAFE_INTEGER + 1,
    });
    expect(ov.rejectedOverride).toBe(true);
    expect(Number.isSafeInteger(ov.max_tool_calls!)).toBe(true);

    expect(campaign.consumedModelInvocations).toBe(0);
    expect(campaign.consumedHostedWebOperations).toBe(0);

    let accepted = 0;
    let denied = 0;
    for (let i = 0; i < H17_HISTORICAL_OBSERVED_AGGREGATE_CALLS; i++) {
      if (claimModelInvocation(campaign)) accepted += 1;
      else denied += 1;
    }
    expect(accepted).toBe(100);
    expect(denied).toBe(41);
    expect(campaign.consumedModelInvocations).toBe(100);
    expect(campaign.consumedAggregateRealCalls).toBe(100);
    expect(Number.isSafeInteger(campaign.consumedAggregateRealCalls)).toBe(
      true,
    );
    expect(claimModelInvocation(campaign)).toBe(false);
  });
});

function baseWithMaxToolCalls(
  max_tool_calls: unknown,
  extra?: Record<string, unknown>,
): NoraRunnerModelSettings {
  return {
    reasoning: { effort: "none" },
    text: { verbosity: "low" },
    providerData: {
      ...(extra ?? {}),
      max_tool_calls: max_tool_calls as number,
    },
  };
}

describe("R-PRE-REAL-07A ENTRY-PD — inherited providerData.max_tool_calls", () => {
  it("ENTRY-PD-01 — inherited NaN rejected when maxToolCalls=null", () => {
    expectInvalidBudget(() =>
      withMaxToolCallsProviderData(baseWithMaxToolCalls(Number.NaN), null),
    );
  });

  it("ENTRY-PD-02 — inherited Infinity rejected", () => {
    expectInvalidBudget(() =>
      withMaxToolCallsProviderData(
        baseWithMaxToolCalls(Number.POSITIVE_INFINITY),
        null,
      ),
    );
  });

  it("ENTRY-PD-03 — inherited -Infinity rejected", () => {
    expectInvalidBudget(() =>
      withMaxToolCallsProviderData(
        baseWithMaxToolCalls(Number.NEGATIVE_INFINITY),
        null,
      ),
    );
  });

  it("ENTRY-PD-04 — inherited MAX_SAFE+1 rejected", () => {
    expectInvalidBudget(() =>
      withMaxToolCallsProviderData(
        baseWithMaxToolCalls(Number.MAX_SAFE_INTEGER + 1),
        null,
      ),
    );
  });

  it("ENTRY-PD-05 — inherited -1 rejected", () => {
    expectInvalidBudget(() =>
      withMaxToolCallsProviderData(baseWithMaxToolCalls(-1), null),
    );
  });

  it("ENTRY-PD-06 — inherited 1.5 rejected", () => {
    expectInvalidBudget(() =>
      withMaxToolCallsProviderData(baseWithMaxToolCalls(1.5), null),
    );
  });

  it("ENTRY-PD-07 — inherited runtime string \"2\" rejected", () => {
    expectInvalidBudget(() =>
      withMaxToolCallsProviderData(baseWithMaxToolCalls("2" as unknown), null),
    );
  });

  it("ENTRY-PD-08 — inherited 0 preserved", () => {
    const base = baseWithMaxToolCalls(0);
    const out = withMaxToolCallsProviderData(base, null);
    expect(out).toBe(base);
    expect(out?.providerData?.max_tool_calls).toBe(0);
  });

  it("ENTRY-PD-09 — inherited 2 preserved", () => {
    const base = baseWithMaxToolCalls(2);
    const out = withMaxToolCallsProviderData(base, null);
    expect(out).toBe(base);
    expect(out?.providerData?.max_tool_calls).toBe(2);
  });

  it("ENTRY-PD-10 — governed cap overwrites inherited", () => {
    const base = baseWithMaxToolCalls(4);
    const out = withMaxToolCallsProviderData(base, 2);
    expect(out?.providerData?.max_tool_calls).toBe(2);
  });

  it("ENTRY-PD-11 — unrelated providerData keys preserved", () => {
    const base = baseWithMaxToolCalls(2, { custom_flag: true, note: "keep" });
    const out = withMaxToolCallsProviderData(base, 3);
    expect(out?.providerData?.max_tool_calls).toBe(3);
    expect(out?.providerData?.custom_flag).toBe(true);
    expect(out?.providerData?.note).toBe("keep");
  });

  it("ENTRY-PD-12 — public barrel still does not expose helper", () => {
    expect(
      Object.keys(NoraRuntime).includes("withMaxToolCallsProviderData"),
    ).toBe(false);
  });

  it("ENTRY-PD integrated — invalid inherited Infinity fails before Fake dispatch", async () => {
    const turn = await runNoraAgentsTurn({
      correlationId: "entry-pd-int",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "MUST-NOT-RUN" }],
      }),
      enableTools: false,
      maxTurns: 1,
      runnerModelSettings: baseWithMaxToolCalls(Number.POSITIVE_INFINITY),
    });
    expect(turn.limitReached).toBe(true);
    expect(turn.text).not.toBe("MUST-NOT-RUN");
    expect(turn.toolRounds).toBe(0);
    expect(turn.toolCalls).toBe(0);
    expect(turn.usage.providerResponseId).toBeNull();
  });

  it("ENTRY-PD integrated — MAX_SAFE+1 inherited fails before Fake dispatch", async () => {
    const turn = await runNoraAgentsTurn({
      correlationId: "entry-pd-int-unsafe",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "MUST-NOT-RUN" }],
      }),
      enableTools: false,
      maxTurns: 1,
      runnerModelSettings: baseWithMaxToolCalls(Number.MAX_SAFE_INTEGER + 1),
    });
    expect(turn.limitReached).toBe(true);
    expect(turn.text).not.toBe("MUST-NOT-RUN");
    expect(turn.toolRounds).toBe(0);
  });
});

describe("R-PRE-REAL-08A — no-campaign requestedMaxTurns safe-integer domain", () => {
  it("no-campaign MAX_SAFE+1 maxTurns fails before Fake dispatch", async () => {
    const turn = await runNoraAgentsTurn({
      correlationId: "nc-unsafe-turns",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "MUST-NOT-RUN" }],
      }),
      enableTools: false,
      maxTurns: Number.MAX_SAFE_INTEGER + 1,
    });
    expect(turn.limitReached).toBe(true);
    expect(turn.text).not.toBe("MUST-NOT-RUN");
    expect(turn.toolRounds).toBe(0);
    expect(turn.toolCalls).toBe(0);
    expect(turn.usage.providerResponseId).toBeNull();
  });

  it("no-campaign MAX_VALUE maxTurns fails closed", async () => {
    const turn = await runNoraAgentsTurn({
      correlationId: "nc-max-value",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "MUST-NOT-RUN" }],
      }),
      enableTools: false,
      maxTurns: Number.MAX_VALUE,
    });
    expect(turn.limitReached).toBe(true);
    expect(turn.text).not.toBe("MUST-NOT-RUN");
  });

  it("no-campaign NaN / Infinity maxTurns fail closed", async () => {
    for (const bad of [Number.NaN, Number.POSITIVE_INFINITY]) {
      const turn = await runNoraAgentsTurn({
        correlationId: `nc-bad-${String(bad)}`,
        projectId: "p",
        systemInstructions: "S",
        userContent: "x",
        provider: new FakeConversationProvider({
          toolScript: [{ kind: "message", text: "MUST-NOT-RUN" }],
        }),
        enableTools: false,
        maxTurns: bad,
      });
      expect(turn.limitReached).toBe(true);
      expect(turn.text).not.toBe("MUST-NOT-RUN");
      expect(turn.toolRounds).toBe(0);
    }
  });

  it("no-campaign fraction 3.9 floors to 3 (compatibility)", async () => {
    const turn = await runNoraAgentsTurn({
      correlationId: "nc-fraction",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "ok-floor" }],
      }),
      enableTools: false,
      maxTurns: 3.9,
    });
    expect(turn.text).toBe("ok-floor");
    expect(turn.limitReached).toBe(false);
  });

  it("no-campaign maxTurns=1 remains functional", async () => {
    const turn = await runNoraAgentsTurn({
      correlationId: "nc-valid-1",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "ok-one" }],
      }),
      enableTools: false,
      maxTurns: 1,
    });
    expect(turn.text).toBe("ok-one");
    expect(turn.limitReached).toBe(false);
  });
});

describe("R-PRE-REAL-07A/08A H17 entry-path non-regression", () => {
  it("entry-path attacks before campaign do not alter 141/100 result", async () => {
    await runNoraAgentsTurn({
      correlationId: "h17-entry-attack-pd",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "no" }],
      }),
      enableTools: false,
      maxTurns: 1,
      runnerModelSettings: baseWithMaxToolCalls(Number.NaN),
    });
    await runNoraAgentsTurn({
      correlationId: "h17-entry-attack-turns",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "no" }],
      }),
      enableTools: false,
      maxTurns: Number.MAX_SAFE_INTEGER + 1,
    });

    const campaign = acquireNoraCampaignBudget({
      campaignId: "h17-entry-path-valid",
      maxModelInvocations: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
      maxHostedWebOperations: 50,
      maxAggregateRealCalls: H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
    });
    let accepted = 0;
    let denied = 0;
    for (let i = 0; i < H17_HISTORICAL_OBSERVED_AGGREGATE_CALLS; i++) {
      if (claimModelInvocation(campaign)) accepted += 1;
      else denied += 1;
    }
    expect(accepted).toBe(100);
    expect(denied).toBe(41);
    expect(campaign.consumedAggregateRealCalls).toBe(100);
    expect(campaign.maxAggregateRealCalls).toBe(100);
  });
});
