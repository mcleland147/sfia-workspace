import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  assertSdkInvocationAdmission,
  beginCampaignEnvelope,
  campaignHttpSlotsRemaining,
  assertDirectOpenAllowed,
  commitDirectOpen,
  commitProviderEmission,
  conservativeBodyTokenEstimate,
  createFrontierAwareFetch,
  enableHttpMetaCaptureForTests,
  endProcessCampaign,
  getActiveCampaignEnvelope,
  getEmissionsObservedForTests,
  getHttpAttempt,
  getHttpBodiesObservedForTests,
  ProviderEmissionRefusedError,
  releaseProviderEmission,
  reserveHttpEmission,
  runWithProviderEmissionStore,
  runWithProviderEmissionStoreAsync,
  suspendCampaignEnvelope,
  __resetFrontierOpenAIClientInstallForTests,
  __resetProviderEmissionFrontierForTests,
} from "@/domains/conversation/provider-emission-frontier";

const TEST_KEY = "sk-test-frontier-aaaaaaaaaaaaaaaa";
const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);
const laneEnv = {
  STUDIO_LANE: "DEV",
  OPENAI_API_KEY: TEST_KEY,
  SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
} as unknown as NodeJS.ProcessEnv;

function withLaneEnv(fn: () => void | Promise<void>) {
  const prev: Record<string, string | undefined> = {};
  for (const k of Object.keys(laneEnv)) {
    prev[k] = process.env[k];
    process.env[k] = laneEnv[k as keyof typeof laneEnv] as string;
  }
  return Promise.resolve(fn()).finally(() => {
    for (const k of Object.keys(laneEnv)) {
      if (prev[k] === undefined) delete process.env[k];
      else process.env[k] = prev[k]!;
    }
  });
}

describe("S2/A — HTTP provider emission frontier", () => {
  afterEach(() => {
    __resetProviderEmissionFrontierForTests();
    __resetFrontierOpenAIClientInstallForTests();
  });

  it("refuses N+1 HTTP emission when campaign max is N (oracle = substituted fetch)", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ campaignId: "camp-http", maxHttpAttempts: 2, required: true });
      enableHttpMetaCaptureForTests();
      const calls: string[] = [];
      const fakeFetch = (async (input: RequestInfo | URL) => {
        calls.push(String(input));
        return new Response(JSON.stringify({ id: "resp", output: [] }), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      }) as typeof fetch;
      const gated = createFrontierAwareFetch(fakeFetch);
      await withLaneEnv(async () => {
        assertSdkInvocationAdmission({
          kind: "nora.generate_reply",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        const body = JSON.stringify({
          model: "gpt-6.1-terra",
          max_output_tokens: 100,
          reasoning: { effort: "medium" },
          sfia_estimated_input_tokens: 1000,
        });
        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
        await expect(
          gated("https://api.openai.com/v1/responses", { method: "POST", body }),
        ).rejects.toBeInstanceOf(ProviderEmissionRefusedError);
      });
      expect(calls).toHaveLength(2);
      expect(getEmissionsObservedForTests()).toBe(2);
      expect(campaignHttpSlotsRemaining()).toBe(0);
      expect(getHttpBodiesObservedForTests()).toHaveLength(2);
      expect(getHttpBodiesObservedForTests()[0]?.model).toBe("gpt-6.1-terra");
    });
  });

  it("propagates SDK effort hint across ALS to HTTP (no ephemeral store loss)", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
      await withLaneEnv(async () => {
        assertSdkInvocationAdmission({
          kind: "nora.generate_reply",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        // Body without effort — must reuse ALS hint
        const r = reserveHttpEmission({
          url: "https://api.openai.com/v1/responses",
          body: JSON.stringify({
            model: "gpt-6.1-terra",
            max_output_tokens: 50,
            sfia_estimated_input_tokens: 500,
          }),
        });
        expect(r.ok).toBe(true);
      });
    });
  });

  it("refuses payload effort that differs from admitted when not itself admitted", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 2, required: true });
      await withLaneEnv(async () => {
        assertSdkInvocationAdmission({
          kind: "nora.generate_reply",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        const r = reserveHttpEmission({
          url: "https://api.openai.com/v1/responses",
          body: JSON.stringify({
            model: "gpt-6.1-terra",
            max_output_tokens: 50,
            reasoning: { effort: "xhigh" },
            sfia_estimated_input_tokens: 500,
          }),
        });
        expect(r.ok).toBe(false);
        if (r.ok) throw new Error("r");
        expect(r.reasonCode).toBe("MODEL_EFFORT_NOT_ADMITTED");
      });
    });
  });

  it("refuses campaign emission when output is unbounded without per-request ceiling", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({
        maxHttpAttempts: 5,
        maxOutputTokens: 50_000,
        // no maxOutputTokensPerRequest → cannot reserve without payload bound
        required: true,
      });
      await withLaneEnv(async () => {
        assertSdkInvocationAdmission({
          kind: "campaign.probe",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        const r = reserveHttpEmission({
          url: "https://api.openai.com/v1/responses",
          body: JSON.stringify({
            model: "gpt-6.1-terra",
            reasoning: { effort: "medium" },
            sfia_estimated_input_tokens: 100,
          }),
          effort: "medium",
        });
        expect(r.ok).toBe(false);
        if (r.ok) throw new Error("r");
        expect(r.reason).toContain("OUTPUT_UNBOUNDED");
      });
    });
  });

  it("reserves using campaign per-request output ceiling when payload omits max_output_tokens", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({
        maxHttpAttempts: 5,
        maxOutputTokensPerRequest: 1000,
        required: true,
      });
      await withLaneEnv(async () => {
        assertSdkInvocationAdmission({
          kind: "campaign.probe",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        const r = reserveHttpEmission({
          url: "https://api.openai.com/v1/responses",
          body: JSON.stringify({
            model: "gpt-6.1-terra",
            reasoning: { effort: "medium" },
            sfia_estimated_input_tokens: 100,
          }),
          effort: "medium",
        });
        expect(r.ok).toBe(true);
        if (!r.ok) throw new Error("r");
        expect(r.reservedOutputTokens).toBe(1000);
      });
    });
  });

  it("releases unused reservation so a later attempt can proceed", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
      await withLaneEnv(() => {
        const a = reserveHttpEmission({
          url: "https://api.openai.com/v1/responses",
          body: JSON.stringify({
            model: "gpt-6.1-terra",
            max_output_tokens: 10,
            sfia_estimated_input_tokens: 100,
          }),
          effort: "medium",
        });
        expect(a.ok).toBe(true);
        if (!a.ok) throw new Error("a");
        releaseProviderEmission({ ...a, contacted: false });
        expect(getHttpAttempt(a.attemptId)?.state).toBe("RELEASED");
        expect(campaignHttpSlotsRemaining()).toBe(1);
        const b = reserveHttpEmission({
          url: "https://api.openai.com/v1/responses",
          body: JSON.stringify({
            model: "gpt-6.1-terra",
            max_output_tokens: 10,
            sfia_estimated_input_tokens: 100,
          }),
          effort: "medium",
        });
        expect(b.ok).toBe(true);
        if (!b.ok) throw new Error("b");
        commitProviderEmission(b);
        expect(getEmissionsObservedForTests()).toBe(1);
        releaseProviderEmission({ ...b, contacted: false });
        expect(getHttpAttempt(b.attemptId)?.state).toBe("COMMITTED");
      });
    });
  });

  it("blocks after suspend even if slots remain", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 5, required: true });
      suspendCampaignEnvelope("TEST_SUSPEND");
      await withLaneEnv(() => {
        const r = reserveHttpEmission({
          url: "https://api.openai.com/v1/responses",
          body: JSON.stringify({
            model: "gpt-6.1-terra",
            max_output_tokens: 10,
            sfia_estimated_input_tokens: 100,
          }),
          effort: "medium",
        });
        expect(r.ok).toBe(false);
        if (r.ok) throw new Error("r");
        expect(r.reasonCode).toBe("CAMPAIGN_SUSPENDED");
        expect(getActiveCampaignEnvelope()?.suspendReason).toBe("TEST_SUSPEND");
      });
    });
  });

  it("refuses incorrect lane configuration before emission", () => {
    runWithProviderEmissionStore(() => {
      const r = reserveHttpEmission({
        url: "https://api.openai.com/v1/responses",
        body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
        effort: "medium",
        env: { STUDIO_LANE: "DEV" } as unknown as NodeJS.ProcessEnv,
      });
      expect(r.ok).toBe(false);
      if (r.ok) throw new Error("r");
      expect(r.reasonCode).toBe("LANE_GUARD_FAILED");
    });
  });

  it("fails closed when required campaign latch is active but ALS campaign is absent", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ campaignId: "camp-latch", maxHttpAttempts: 3, required: true });
    });
    // Outside ALS — latch still active
    const r = reserveHttpEmission({
      url: "https://api.openai.com/v1/responses",
      body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
      effort: "medium",
      env: laneEnv,
    });
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("r");
    expect(r.reasonCode).toBe("CAMPAIGN_REQUIRED_MISSING");
    __resetProviderEmissionFrontierForTests();
  });

  it("does not treat non-OpenAI URLs as provider emissions", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
      let hit = 0;
      const fakeFetch = (async () => {
        hit += 1;
        return new Response("ok");
      }) as typeof fetch;
      const gated = createFrontierAwareFetch(fakeFetch);
      await gated("https://example.com/public");
      expect(hit).toBe(1);
      expect(getEmissionsObservedForTests()).toBe(0);
      expect(campaignHttpSlotsRemaining()).toBe(1);
    });
  });

  it("enforces maxDirectOpens on campaign and commits successful opens", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ maxDirectOpens: 1, required: true });
      expect(assertDirectOpenAllowed().ok).toBe(true);
      commitDirectOpen();
      expect(getActiveCampaignEnvelope()?.directOpensCommitted).toBe(1);
      const blocked = assertDirectOpenAllowed();
      expect(blocked.ok).toBe(false);
      if (blocked.ok) throw new Error("blocked");
      expect(blocked.reasonCode).toBe("CAMPAIGN_ENVELOPE_EXHAUSTED");
    });
  });

  it("reserves hosted search when web_search tool appears and maxHostedSearches is set", async () => {
    const { createHash } = await import("node:crypto");
    const key = "sk-test-frontier-aaaaaaaaaaaaaaaa";
    const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({
        maxHttpAttempts: 2,
        maxHostedSearches: 1,
        required: true,
      });
      enableHttpMetaCaptureForTests();
      const body = JSON.stringify({
        model: "gpt-6.1-terra",
        max_output_tokens: 50,
        reasoning: { effort: "medium" },
        sfia_estimated_input_tokens: 100,
        tools: [{ type: "web_search" }],
      });
      const fakeFetch = (async () =>
        new Response(JSON.stringify({ id: "r" }), {
          status: 200,
          headers: { "content-type": "application/json" },
        })) as typeof fetch;
      const gated = createFrontierAwareFetch(fakeFetch);
      await withLaneEnv(async () => {
        assertSdkInvocationAdmission({
          kind: "nora.generate_reply",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
        expect(getActiveCampaignEnvelope()?.hostedSearchesCommitted).toBe(1);
        await expect(
          gated("https://api.openai.com/v1/responses", { method: "POST", body }),
        ).rejects.toBeInstanceOf(ProviderEmissionRefusedError);
      });
    });
  });

  it("reserves conservative body estimate for input limit — never per-request ceiling", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({
        maxHttpAttempts: 5,
        maxInputTokens: 500_000,
        maxInputTokensPerRequest: 100_000,
        maxOutputTokensPerRequest: 500,
        required: true,
      });
      const substantialInput = "x".repeat(6000);
      const bodyObj = {
        model: "gpt-6.1-terra",
        max_output_tokens: 100,
        reasoning: { effort: "medium" },
        input: [{ type: "text", text: substantialInput }],
      };
      const expectedEstimate = conservativeBodyTokenEstimate(bodyObj);
      expect(expectedEstimate).not.toBe(100_000);
      await withLaneEnv(async () => {
        assertSdkInvocationAdmission({
          kind: "campaign.probe",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        const r = reserveHttpEmission({
          url: "https://api.openai.com/v1/responses",
          body: JSON.stringify(bodyObj),
          effort: "medium",
        });
        expect(r.ok).toBe(true);
        if (!r.ok) throw new Error("r");
        expect(r.reservedInputTokens).toBe(expectedEstimate);
        expect(r.reservedInputTokens).not.toBe(100_000);
        expect(getHttpAttempt(r.attemptId)?.inputBoundKind).toBe("estimate");
      });
    });
  });

  it("refuses INPUT_UNBOUNDED when campaign has input limit and body is empty", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({
        maxHttpAttempts: 5,
        maxInputTokens: 10_000,
        maxOutputTokensPerRequest: 500,
        required: true,
      });
      await withLaneEnv(async () => {
        assertSdkInvocationAdmission({
          kind: "campaign.probe",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        const r = reserveHttpEmission({
          url: "https://api.openai.com/v1/responses",
          body: JSON.stringify({}),
          modelId: "gpt-6.1-terra",
          effort: "medium",
          skipModelAdmission: true,
        });
        expect(r.ok).toBe(false);
        if (r.ok) throw new Error("r");
        expect(r.reasonCode).toBe("INPUT_UNBOUNDED");
      });
    });
  });

  it("refuses when conservative input estimate exceeds maxInputTokensPerRequest", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({
        maxHttpAttempts: 5,
        maxInputTokens: 500_000,
        maxInputTokensPerRequest: 50,
        maxOutputTokensPerRequest: 500,
        required: true,
      });
      await withLaneEnv(async () => {
        assertSdkInvocationAdmission({
          kind: "campaign.probe",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        const r = reserveHttpEmission({
          url: "https://api.openai.com/v1/responses",
          body: JSON.stringify({
            model: "gpt-6.1-terra",
            max_output_tokens: 50,
            reasoning: { effort: "medium" },
            input: [{ type: "text", text: "z".repeat(500) }],
          }),
          effort: "medium",
        });
        expect(r.ok).toBe(false);
        if (r.ok) throw new Error("r");
        expect(r.reasonCode).toBe("CAMPAIGN_ENVELOPE_EXHAUSTED");
        expect(getActiveCampaignEnvelope()?.suspendReason).toBe(
          "INPUT_TOKENS_PER_REQUEST_EXCEEDED",
        );
      });
    });
  });

  it("refuses approximate openai hostname (no fuzzy host match)", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
      let hit = 0;
      const fakeFetch = (async () => {
        hit += 1;
        return new Response("ok");
      }) as typeof fetch;
      const gated = createFrontierAwareFetch(fakeFetch);
      await gated("https://evil-openai.com/v1/responses", {
        method: "POST",
        body: JSON.stringify({ model: "gpt-6.1-terra" }),
      });
      expect(hit).toBe(1);
      expect(getEmissionsObservedForTests()).toBe(0);
    });
  });
});

describe("process-level LIVE campaign attach", () => {
  it("refuses begin after simulated process restart (file-backed pid)", () => {
    const campaignId = "camp-restart-guard";
    const statePath = join(process.cwd(), ".sfia-evidence", "live-campaign-state.json");
    mkdirSync(join(process.cwd(), ".sfia-evidence"), { recursive: true });
    writeFileSync(
      statePath,
      JSON.stringify({
        campaignId,
        pid: process.pid - 1,
        createdAtMs: Date.now(),
      }),
      "utf8",
    );
    try {
      runWithProviderEmissionStore(() => {
        expect(() =>
          beginCampaignEnvelope({
            campaignId,
            maxHttpAttempts: 3,
            required: true,
          }),
        ).toThrow(ProviderEmissionRefusedError);
      });
      endProcessCampaign(campaignId);
      runWithProviderEmissionStore(() => {
        const c = beginCampaignEnvelope({
          campaignId,
          maxHttpAttempts: 3,
          required: true,
        });
        expect(c.campaignId).toBe(campaignId);
        expect(c.httpAttemptsReserved).toBe(0);
      });
    } finally {
      endProcessCampaign(campaignId);
      __resetProviderEmissionFrontierForTests();
    }
  });

  it("reattaches the same counters across ALS boundaries", async () => {
    const {
      runWithProviderEmissionStore,
      beginCampaignEnvelope,
      getActiveCampaignEnvelope,
      reserveHttpEmission,
      commitProviderEmission,
      endProcessCampaign,
      attachConfiguredLiveCampaignFromEnv,
      __resetProviderEmissionFrontierForTests,
    } = await import(
      "@/domains/conversation/provider-emission-frontier"
    );
    __resetProviderEmissionFrontierForTests();
    endProcessCampaign();
    runWithProviderEmissionStore(() => {
      const c = beginCampaignEnvelope({
        campaignId: "camp-reattach-test",
        maxHttpAttempts: 5,
        required: true,
      });
      const r = reserveHttpEmission({
        url: "https://api.openai.com/v1/responses",
        body: JSON.stringify({
          model: "gpt-5.1",
          max_output_tokens: 100,
          sfia_estimated_input_tokens: 50,
        }),
        skipModelAdmission: true,
      });
      expect(r.ok).toBe(true);
      if (r.ok) commitProviderEmission(r);
      expect(c.httpAttemptsCommitted).toBe(1);
    });
    // New ALS — same campaignId must reuse counters.
    runWithProviderEmissionStore(() => {
      const c = beginCampaignEnvelope({
        campaignId: "camp-reattach-test",
        maxHttpAttempts: 5,
        required: true,
      });
      expect(c.httpAttemptsCommitted).toBe(1);
      expect(getActiveCampaignEnvelope()?.campaignId).toBe("camp-reattach-test");
    });
    const prev = process.env.SFIA_G_LIVE_API;
    const prevLane = process.env.STUDIO_LANE;
    process.env.SFIA_G_LIVE_API = "1";
    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_LIVE_CAMPAIGN_ID = "g-live-env-test";
    process.env.SFIA_LIVE_MAX_HTTP_ATTEMPTS = "3";
    try {
      runWithProviderEmissionStore(() => {
        const c = attachConfiguredLiveCampaignFromEnv();
        expect(c?.campaignId).toBe("g-live-env-test");
        expect(c?.maxHttpAttempts).toBe(3);
      });
    } finally {
      if (prev === undefined) delete process.env.SFIA_G_LIVE_API;
      else process.env.SFIA_G_LIVE_API = prev;
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      delete process.env.SFIA_LIVE_CAMPAIGN_ID;
      delete process.env.SFIA_LIVE_MAX_HTTP_ATTEMPTS;
      endProcessCampaign();
      __resetProviderEmissionFrontierForTests();
    }
  });
});
