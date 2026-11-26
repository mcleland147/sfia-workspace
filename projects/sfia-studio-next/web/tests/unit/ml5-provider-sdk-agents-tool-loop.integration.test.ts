/**
 * P1.4 — real Agents SDK `run()` with a product-like tool producing multiple
 * Responses HTTP attempts under substituted transport (no LIVE network).
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

const TEST_KEY = "sk-test-agents-tool-loop-cccccccccccc";
const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);

function responsesBody(parts: {
  id: string;
  output: unknown[];
  usage?: { input_tokens: number; output_tokens: number };
}) {
  return JSON.stringify({
    id: parts.id,
    object: "response",
    status: "completed",
    model: "gpt-6.1-terra",
    output: parts.output,
    usage: parts.usage ?? { input_tokens: 20, output_tokens: 10 },
  });
}

describe("P1.4 — Agents SDK tool loop through frontier", () => {
  afterEach(() => {
    __resetProviderEmissionFrontierForTests();
    __resetFrontierOpenAIClientInstallForTests();
  });

  it("A-02: real Agent+tool run() yields multiple HTTP Responses under campaign", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({
        campaignId: "camp-agents-tool-loop",
        maxHttpAttempts: 5,
        maxOutputTokensPerRequest: 512,
        maxInputTokensPerRequest: 50_000,
        required: true,
      });
      enableHttpMetaCaptureForTests();
      const prev = { ...process.env };
      Object.assign(process.env, {
        STUDIO_LANE: "DEV",
        OPENAI_API_KEY: TEST_KEY,
        SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
      });
      try {
        assertSdkInvocationAdmission({
          kind: "internal.qualification",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });

        let httpN = 0;
        const transport = (async (_input: RequestInfo | URL, init?: RequestInit) => {
          httpN += 1;
          const bodyStr =
            typeof init?.body === "string"
              ? init.body
              : init?.body
                ? String(init.body)
                : "";
          // First Responses call: ask for a function tool.
          if (httpN === 1) {
            return new Response(
              responsesBody({
                id: "resp_tool_call",
                output: [
                  {
                    type: "function_call",
                    call_id: "call_qual_1",
                    name: "qualify_fixture_source",
                    arguments: JSON.stringify({ ref: "doc://qual/planning-a" }),
                  },
                ],
              }),
              { status: 200, headers: { "content-type": "application/json" } },
            );
          }
          // Subsequent call(s): final message after tool result.
          expect(bodyStr.length).toBeGreaterThan(10);
          return new Response(
            responsesBody({
              id: "resp_final",
              output: [
                {
                  type: "message",
                  role: "assistant",
                  content: [{ type: "output_text", text: "QUAL_OK planning-a" }],
                },
              ],
            }),
            { status: 200, headers: { "content-type": "application/json" } },
          );
        }) as typeof fetch;

        await ensureFrontierOpenAIClientInstalled({
          forceReinstall: true,
          fetch: transport,
          maxRetries: 0,
        });

        const { Agent, tool, run, setDefaultOpenAIClient } = await import(
          "@openai/agents"
        );
        const OpenAI = (await import("openai")).default;
        const client = new OpenAI({
          apiKey: TEST_KEY,
          fetch: createFrontierAwareFetch(transport),
          maxRetries: 0,
        });
        setDefaultOpenAIClient(client as never);

        const qualifyFixtureSource = tool({
          name: "qualify_fixture_source",
          description: "Read a qualification fixture source id",
          parameters: {
            type: "object",
            properties: { ref: { type: "string" } },
            required: ["ref"],
            additionalProperties: false,
          },
          execute: async (input: { ref: string }) => {
            return JSON.stringify({
              ref: input.ref,
              coverage: "CONSULTED",
              excerpt: "Room A conflicts with Room B on Tuesday 10:00",
            });
          },
        });

        const agent = new Agent({
          name: "NoraQualToolLoop",
          instructions:
            "You must call qualify_fixture_source once then answer briefly.",
          model: "gpt-6.1-terra",
          tools: [qualifyFixtureSource],
        });

        const result = await run(agent, "Investigate planning conflict fixture.", {
          maxTurns: 4,
        } as never);

        expect(httpN).toBeGreaterThanOrEqual(2);
        expect(getEmissionsObservedForTests()).toBeGreaterThanOrEqual(2);
        const bodies = getHttpBodiesObservedForTests();
        expect(bodies.length).toBeGreaterThanOrEqual(2);
        for (const b of bodies) {
          expect(b.maxOutputTokens).toBe(512);
        }
        // Independent oracle: transport call count, not only frontier counter.
        expect(httpN).toBe(getEmissionsObservedForTests());
        expect(String((result as { finalOutput?: unknown }).finalOutput ?? result)).toBeTruthy();
      } finally {
        Object.assign(process.env, prev);
      }
    });
  }, 60_000);

  it("A-05: incompatible effort override — no transport contact", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 3, required: true });
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
        let contacted = 0;
        const transport = (async () => {
          contacted += 1;
          return new Response("{}", { status: 200 });
        }) as typeof fetch;
        const fetchAware = createFrontierAwareFetch(transport);
        await expect(
          fetchAware("https://api.openai.com/v1/responses", {
            method: "POST",
            body: JSON.stringify({
              model: "gpt-6.1-terra",
              reasoning: { effort: "xhigh" },
              max_output_tokens: 16,
              sfia_estimated_input_tokens: 40,
            }),
          }),
        ).rejects.toBeInstanceOf(ProviderEmissionRefusedError);
        expect(contacted).toBe(0);
        expect(getEmissionsObservedForTests()).toBe(0);
      } finally {
        Object.assign(process.env, prev);
      }
    });
  });
});
