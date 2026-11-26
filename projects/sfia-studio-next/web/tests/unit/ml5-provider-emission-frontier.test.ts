import { createHash } from "node:crypto";
import { afterEach, describe, expect, it } from "vitest";
import {
  beginCampaignEnvelope,
  campaignHttpSlotsRemaining,
  commitProviderEmission,
  createFrontierAwareFetch,
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

describe("S2 — HTTP provider emission frontier", () => {
  afterEach(() => {
    __resetProviderEmissionFrontierForTests();
    __resetFrontierOpenAIClientInstallForTests();
  });

  it("refuses N+1 HTTP emission when campaign max is N (oracle = substituted fetch)", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ campaignId: "camp-http", maxHttpAttempts: 2, required: true });
      const calls: string[] = [];
      const fakeFetch = (async (input: RequestInfo | URL) => {
        const url = String(input);
        calls.push(url);
        return new Response(JSON.stringify({ id: "resp", output: [] }), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      }) as typeof fetch;
      const gated = createFrontierAwareFetch(fakeFetch);

      // Inject lane env for reserve path via process — temporarily.
      const prev = { ...process.env };
      Object.assign(process.env, laneEnv);
      try {
        const body = JSON.stringify({
          model: "gpt-6.1-terra",
          max_output_tokens: 100,
          reasoning: { effort: "medium" },
        });
        // Seed effort via SDK admission path equivalent
        const { assertSdkInvocationAdmission } = await import(
          "@/domains/conversation/provider-emission-frontier"
        );
        assertSdkInvocationAdmission({
          kind: "nora.generate_reply",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
        await expect(
          gated("https://api.openai.com/v1/responses", { method: "POST", body }),
        ).rejects.toBeInstanceOf(ProviderEmissionRefusedError);
      } finally {
        for (const k of Object.keys(laneEnv)) {
          if (prev[k] === undefined) delete process.env[k];
          else process.env[k] = prev[k]!;
        }
      }

      expect(calls).toHaveLength(2);
      expect(getEmissionsObservedForTests()).toBe(2);
      expect(campaignHttpSlotsRemaining()).toBe(0);
      expect(getHttpBodiesObservedForTests()).toHaveLength(2);
    });
  });

  it("counts SDK retries as distinct HTTP attempts through fetch", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 2, required: true });
      let n = 0;
      const fakeFetch = (async () => {
        n += 1;
        if (n === 1) {
          return new Response("temporary", { status: 500 });
        }
        return new Response(JSON.stringify({ ok: true }), { status: 200 });
      }) as typeof fetch;
      const gated = createFrontierAwareFetch(fakeFetch);
      const prev = { ...process.env };
      Object.assign(process.env, laneEnv);
      try {
        const { assertSdkInvocationAdmission } = await import(
          "@/domains/conversation/provider-emission-frontier"
        );
        assertSdkInvocationAdmission({
          kind: "campaign.probe",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        const body = JSON.stringify({
          model: "gpt-6.1-terra",
          max_output_tokens: 50,
        });
        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
        await expect(
          gated("https://api.openai.com/v1/responses", { method: "POST", body }),
        ).rejects.toBeInstanceOf(ProviderEmissionRefusedError);
      } finally {
        for (const k of Object.keys(laneEnv)) {
          if (prev[k] === undefined) delete process.env[k];
          else process.env[k] = prev[k]!;
        }
      }
      expect(getEmissionsObservedForTests()).toBe(2);
    });
  });

  it("releases unused reservation so a later attempt can proceed", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
      const prev = { ...process.env };
      Object.assign(process.env, laneEnv);
      try {
        const a = reserveHttpEmission({
          url: "https://api.openai.com/v1/responses",
          body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
          effort: "medium",
        });
        expect(a.ok).toBe(true);
        if (!a.ok) throw new Error("a");
        releaseProviderEmission({ ...a, contacted: false });
        expect(getHttpAttempt(a.attemptId)?.state).toBe("RELEASED");
        expect(campaignHttpSlotsRemaining()).toBe(1);
        const b = reserveHttpEmission({
          url: "https://api.openai.com/v1/responses",
          body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
          effort: "medium",
        });
        expect(b.ok).toBe(true);
        if (!b.ok) throw new Error("b");
        commitProviderEmission(b);
        expect(getEmissionsObservedForTests()).toBe(1);
        // Cannot release after commit
        releaseProviderEmission({ ...b, contacted: false });
        expect(getHttpAttempt(b.attemptId)?.state).toBe("COMMITTED");
      } finally {
        for (const k of Object.keys(laneEnv)) {
          if (prev[k] === undefined) delete process.env[k];
          else process.env[k] = prev[k]!;
        }
      }
    });
  });

  it("blocks after suspend even if slots remain", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ maxHttpAttempts: 5, required: true });
      suspendCampaignEnvelope("TEST_SUSPEND");
      const prev = { ...process.env };
      Object.assign(process.env, laneEnv);
      try {
        const r = reserveHttpEmission({
          url: "https://api.openai.com/v1/responses",
          body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
          effort: "medium",
        });
        expect(r.ok).toBe(false);
        if (r.ok) throw new Error("r");
        expect(r.reasonCode).toBe("CAMPAIGN_SUSPENDED");
        expect(getActiveCampaignEnvelope()?.suspendReason).toBe("TEST_SUSPEND");
      } finally {
        for (const k of Object.keys(laneEnv)) {
          if (prev[k] === undefined) delete process.env[k];
          else process.env[k] = prev[k]!;
        }
      }
    });
  });

  it("refuses incorrect lane configuration before emission", () => {
    runWithProviderEmissionStore(() => {
      const r = reserveHttpEmission({
        url: "https://api.openai.com/v1/responses",
        body: JSON.stringify({ model: "gpt-6.1-terra" }),
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
    // Outside ALS — latch still active from required campaign
    const prev = { ...process.env };
    Object.assign(process.env, laneEnv);
    try {
      const r = reserveHttpEmission({
        url: "https://api.openai.com/v1/responses",
        body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
        effort: "medium",
      });
      expect(r.ok).toBe(false);
      if (r.ok) throw new Error("r");
      expect(r.reasonCode).toBe("CAMPAIGN_REQUIRED_MISSING");
    } finally {
      for (const k of Object.keys(laneEnv)) {
        if (prev[k] === undefined) delete process.env[k];
        else process.env[k] = prev[k]!;
      }
      __resetProviderEmissionFrontierForTests();
    }
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
});
