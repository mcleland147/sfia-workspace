/**
 * A-03 / A-04 — real `openai` SDK (locked 7.50) with substituted fetch.
 * Does NOT call gated() twice artificially — the SDK's own retry path must emit.
 */
import { createHash } from "node:crypto";
import { afterEach, describe, expect, it } from "vitest";
import {
  assertSdkInvocationAdmission,
  beginCampaignEnvelope,
  createFrontierAwareFetch,
  enableHttpMetaCaptureForTests,
  ensureFrontierOpenAIClientInstalled,
  getEmissionsObservedForTests,
  getHttpBodiesObservedForTests,
  ProviderEmissionRefusedError,
  runWithProviderEmissionStoreAsync,
  __resetFrontierOpenAIClientInstallForTests,
  __resetProviderEmissionFrontierForTests,
} from "@/domains/conversation/provider-emission-frontier";

const TEST_KEY = "sk-test-sdk-frontier-bbbbbbbbbbbb";
const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);

describe("A — real OpenAI SDK through frontier fetch", () => {
  afterEach(() => {
    __resetProviderEmissionFrontierForTests();
    __resetFrontierOpenAIClientInstallForTests();
  });

  it("A-03: SDK maxRetries triggers a second HTTP attempt counted by frontier", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 3, required: true });
      enableHttpMetaCaptureForTests();
      const prev = { ...process.env };
      Object.assign(process.env, {
        STUDIO_LANE: "DEV",
        OPENAI_API_KEY: TEST_KEY,
        SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
      });
      try {
        assertSdkInvocationAdmission({
          kind: "campaign.probe",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        let n = 0;
        const transport = (async () => {
          n += 1;
          if (n === 1) {
            return new Response("temporary", { status: 500 });
          }
          // Minimal Responses-like success body
          return new Response(
            JSON.stringify({
              id: "resp_test",
              object: "response",
              status: "completed",
              model: "gpt-6.1-terra",
              output: [],
              usage: { input_tokens: 10, output_tokens: 5 },
            }),
            { status: 200, headers: { "content-type": "application/json" } },
          );
        }) as typeof fetch;

        await ensureFrontierOpenAIClientInstalled({
          forceReinstall: true,
          fetch: transport,
          maxRetries: 2,
        });

        const OpenAI = (await import("openai")).default;
        // Use the same frontier-aware fetch the install registered conceptually —
        // construct a client explicitly so we exercise openai package retry.
        const client = new OpenAI({
          apiKey: TEST_KEY,
          fetch: createFrontierAwareFetch(transport),
          maxRetries: 2,
        });

        // responses.create retries on 5xx via SDK — each attempt hits frontier.
        await client.responses.create({
          model: "gpt-6.1-terra",
          input: "ping",
          max_output_tokens: 32,
          // @ts-expect-error reasoning shape accepted by API
          reasoning: { effort: "medium" },
        } as never);

        expect(n).toBeGreaterThanOrEqual(2);
        expect(getEmissionsObservedForTests()).toBeGreaterThanOrEqual(2);
        expect(getHttpBodiesObservedForTests().length).toBeGreaterThanOrEqual(2);
      } finally {
        for (const k of ["STUDIO_LANE", "OPENAI_API_KEY", "SFIA_OPENAI_EXPECTED_KEY_FP"]) {
          if (prev[k] === undefined) delete process.env[k];
          else process.env[k] = prev[k]!;
        }
      }
    });
  }, 20_000);

  it("A-04: campaign N=1 refuses SDK second attempt after first commit", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
      const prev = { ...process.env };
      Object.assign(process.env, {
        STUDIO_LANE: "DEV",
        OPENAI_API_KEY: TEST_KEY,
        SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
      });
      try {
        assertSdkInvocationAdmission({
          kind: "campaign.probe",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        let n = 0;
        const transport = (async () => {
          n += 1;
          return new Response(
            JSON.stringify({
              id: `resp_${n}`,
              object: "response",
              status: "completed",
              output: [],
              usage: { input_tokens: 3, output_tokens: 1 },
            }),
            { status: 200, headers: { "content-type": "application/json" } },
          );
        }) as typeof fetch;
        const client = new (await import("openai")).default({
          apiKey: TEST_KEY,
          fetch: createFrontierAwareFetch(transport),
          maxRetries: 0,
        });
        await client.responses.create({
          model: "gpt-6.1-terra",
          input: "one",
          max_output_tokens: 16,
          reasoning: { effort: "medium" },
        } as never);
        let secondErr: unknown;
        try {
          await client.responses.create({
            model: "gpt-6.1-terra",
            input: "two",
            max_output_tokens: 16,
            reasoning: { effort: "medium" },
          } as never);
        } catch (e) {
          secondErr = e;
        }
        expect(secondErr).toBeTruthy();
        // openai package may wrap ProviderEmissionRefusedError as APIConnectionError
        const chain: unknown[] = [];
        let cur: unknown = secondErr;
        for (let i = 0; i < 5 && cur; i++) {
          chain.push(cur);
          cur =
            cur && typeof cur === "object" && "cause" in cur
              ? (cur as { cause: unknown }).cause
              : null;
        }
        const refused = chain.some(
          (e) =>
            e instanceof ProviderEmissionRefusedError ||
            (e instanceof Error &&
              /CAMPAIGN_ENVELOPE_EXHAUSTED|CAMPAIGN_HTTP_ATTEMPTS/.test(e.message)),
        );
        expect(refused).toBe(true);
        expect(n).toBe(1);
        expect(getEmissionsObservedForTests()).toBe(1);
      } finally {
        for (const k of ["STUDIO_LANE", "OPENAI_API_KEY", "SFIA_OPENAI_EXPECTED_KEY_FP"]) {
          if (prev[k] === undefined) delete process.env[k];
          else process.env[k] = prev[k]!;
        }
      }
    });
  }, 20_000);
});
