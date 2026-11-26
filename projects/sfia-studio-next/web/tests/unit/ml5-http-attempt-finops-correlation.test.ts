import { createHash } from "node:crypto";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  beginCampaignEnvelope,
  commitProviderEmission,
  getHttpAttemptsSnapshot,
  reserveHttpEmission,
  runWithProviderEmissionStore,
  __resetProviderEmissionFrontierForTests,
} from "@/domains/conversation/provider-emission-frontier";

const TEST_KEY = "sk-test-frontier-aaaaaaaaaaaaaaaa";
const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);

const insertCalls: Array<{ attemptId?: string | null; limits?: string[]; granularity?: string }> =
  [];

vi.mock("@/db/client", () => ({
  db: {
    insert: () => ({
      values: (row: {
        attemptId?: string | null;
        limitsJson?: string[];
        granularity?: string;
      }) => {
        insertCalls.push({
          attemptId: row.attemptId,
          limits: row.limitsJson,
          granularity: row.granularity,
        });
        return {
          onConflictDoNothing: () => ({
            returning: () => Promise.resolve([{ id: `obs-${insertCalls.length}` }]),
          }),
        };
      },
    }),
  },
}));

describe("ML5 Contract D — HTTP attempt FinOps correlation", () => {
  afterEach(() => {
    __resetProviderEmissionFrontierForTests();
    insertCalls.length = 0;
    vi.clearAllMocks();
  });

  it("exports committed/uncertain HTTP attempts without prompt bodies", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ campaignId: "c1", maxHttpAttempts: 3, required: true });
      const a = reserveHttpEmission({
        url: "https://api.openai.com/v1/responses",
        body: JSON.stringify({
          model: "gpt-6.1-terra",
          max_output_tokens: 10,
          reasoning: { effort: "medium" },
          sfia_estimated_input_tokens: 50,
        }),
        effort: "medium",
        env: {
          STUDIO_LANE: "DEV",
          OPENAI_API_KEY: TEST_KEY,
          SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
        } as NodeJS.ProcessEnv,
      });
      expect(a.ok).toBe(true);
      if (!a.ok) throw new Error("reserve");
      expect(getHttpAttemptsSnapshot()).toHaveLength(0);
      commitProviderEmission(a);
      const snap = getHttpAttemptsSnapshot();
      expect(snap).toHaveLength(1);
      expect(snap[0]).toEqual({
        attemptId: a.attemptId,
        state: "COMMITTED",
        campaignId: "c1",
        modelHint: "gpt-6.1-terra",
        urlHost: "api.openai.com",
      });
      expect(Object.keys(snap[0]!)).not.toContain("reservedInputTokens");
    });
  });

  it("single HTTP attempt aligns FinOps attemptId and markers", async () => {
    const { createHash } = await import("node:crypto");
    const key = "sk-test-frontier-aaaaaaaaaaaaaaaa";
    const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
  const env = {
      STUDIO_LANE: "DEV",
      OPENAI_API_KEY: key,
      SFIA_OPENAI_EXPECTED_KEY_FP: fp,
    } as NodeJS.ProcessEnv;

    const { runWithProviderEmissionStoreAsync } = await import(
      "@/domains/conversation/provider-emission-frontier"
    );
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 2, required: true });
      const http = reserveHttpEmission({
        url: "https://api.openai.com/v1/responses",
        body: JSON.stringify({
          model: "gpt-6.1-terra",
          max_output_tokens: 20,
          reasoning: { effort: "medium" },
          sfia_estimated_input_tokens: 100,
        }),
        effort: "medium",
        env,
      });
      expect(http.ok).toBe(true);
      if (!http.ok) throw new Error("http");
      commitProviderEmission(http);

      const { recordNoraProviderUsageWithHttpCorrelation } = await import(
        "@/domains/conversation/usage-accounting"
      );
      await recordNoraProviderUsageWithHttpCorrelation({
        runResult: {
          usage: { inputTokens: 10, outputTokens: 5, totalTokens: 15 },
        },
        status: "succeeded",
        operation: "nora.generate_reply",
        attemptId: "sdk_att_only",
        generationId: "gen-single",
        modelRequested: "gpt-6.1-terra",
      });
      expect(insertCalls.some((c) => c.attemptId === http.attemptId)).toBe(true);
      expect(insertCalls[0]?.limits).toContain(`HTTP_ATTEMPT:${http.attemptId}`);
      expect(insertCalls[0]?.limits).toContain("SDK_ATTEMPT:sdk_att_only");
    });
  });

  it("multiple HTTP attempts add per-attempt PARTIAL rows without invented tokens", async () => {
    const { createHash } = await import("node:crypto");
    const key = "sk-test-frontier-aaaaaaaaaaaaaaaa";
    const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
    const env = {
      STUDIO_LANE: "DEV",
      OPENAI_API_KEY: key,
      SFIA_OPENAI_EXPECTED_KEY_FP: fp,
    } as NodeJS.ProcessEnv;
    const body = JSON.stringify({
      model: "gpt-6.1-terra",
      max_output_tokens: 20,
      reasoning: { effort: "medium" },
      sfia_estimated_input_tokens: 100,
    });

    const { runWithProviderEmissionStoreAsync } = await import(
      "@/domains/conversation/provider-emission-frontier"
    );
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 3, required: true });
      const h1 = reserveHttpEmission({ url: "https://api.openai.com/v1/responses", body, effort: "medium", env });
      const h2 = reserveHttpEmission({ url: "https://api.openai.com/v1/responses", body, effort: "medium", env });
      if (!h1.ok || !h2.ok) throw new Error("reserve");
      commitProviderEmission(h1);
      commitProviderEmission(h2);

      const { recordNoraProviderUsageWithHttpCorrelation } = await import(
        "@/domains/conversation/usage-accounting"
      );
      await recordNoraProviderUsageWithHttpCorrelation({
        runResult: { usage: { inputTokens: 50, outputTokens: 20, totalTokens: 70 } },
        status: "succeeded",
        operation: "nora.generate_reply",
        attemptId: "sdk_multi",
        generationId: "gen-multi",
        modelRequested: "gpt-6.1-terra",
      });
      expect(insertCalls.length).toBe(3);
      expect(insertCalls[0]?.limits).toContain("MULTI_HTTP_ATTEMPT_AGGREGATE");
      const partialRows = insertCalls.filter(
        (c) => c.granularity === "REQUEST" && c.attemptId !== "sdk_multi",
      );
      expect(partialRows.length).toBe(2);
      expect(partialRows.every((r) => r.limits?.includes("HTTP_ATTEMPT_USAGE_UNKNOWN"))).toBe(
        true,
      );
    });
  });
});