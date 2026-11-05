import { describe, expect, it, vi, afterEach } from "vitest";
import {
  categorizeProviderError,
  generateNoraReply,
} from "@/domains/conversation/nora-adapter";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";

describe("FIX-SDK / SDK-RETRY — no automatic second run()", () => {
  const prevLane = process.env.STUDIO_LANE;
  const prevE2e = process.env.STUDIO_E2E;
  const prevForce = process.env.STUDIO_FORCE_NORA_FIXTURE;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevCog = process.env.SFIA_COG_PROFILE_TYPE;

  afterEach(() => {
    vi.resetModules();
    vi.doUnmock("@openai/agents");
    vi.restoreAllMocks();
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevE2e === undefined) delete process.env.STUDIO_E2E;
    else process.env.STUDIO_E2E = prevE2e;
    if (prevForce === undefined) delete process.env.STUDIO_FORCE_NORA_FIXTURE;
    else process.env.STUDIO_FORCE_NORA_FIXTURE = prevForce;
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevCog === undefined) delete process.env.SFIA_COG_PROFILE_TYPE;
    else process.env.SFIA_COG_PROFILE_TYPE = prevCog;
  });

  it("categorizes errors without exposing raw provider text as category", () => {
    const c = categorizeProviderError(new Error("sk-abcdef1234567890 rate limit 429 from api.openai.com"));
    expect(c.category).toMatch(/PROVIDER_/);
    expect(c.category).not.toContain("sk-");
  });

  async function runOnceScenario(message: string) {
    process.env.STUDIO_LANE = "DEV";
    delete process.env.STUDIO_E2E;
    delete process.env.STUDIO_FORCE_NORA_FIXTURE;
    process.env.OPENAI_API_KEY = "sk-test-not-real-but-present";
    process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

    const runMock = vi.fn(async () => {
      throw new Error(message);
    });

    vi.doMock("@openai/agents", () => ({
      Agent: class {
        // eslint-disable-next-line @typescript-eslint/no-useless-constructor
        constructor(_opts: unknown) {}
      },
      run: runMock,
      setTracingDisabled: vi.fn(),
      tool: vi.fn(),
    }));

    const { generateNoraReply: gen } = await import("@/domains/conversation/nora-adapter");
    const policy = buildCognitivePolicy("Compare option A et B", "TEST_BOUNDARY");
    const result = await gen({
      userText: "Compare option A et B",
      contextSnippets: [],
      policyOverride: policy,
    });
    return { runMock, result };
  }

  it("SDK-RETRY-01: invalid model settings after run() → single invocation, non-COMPLETE", async () => {
    const { runMock, result } = await runOnceScenario("invalid model settings rejected by API");
    expect(runMock).toHaveBeenCalledTimes(1);
    expect(result.status).not.toBe("COMPLETE");
    expect(result.attempts.length).toBe(1);
    expect(result.attempts[0].providerContacted).toBe("UNCERTAIN");
    expect(JSON.stringify(result)).not.toContain("invalid model settings rejected");
  });

  it("SDK-RETRY-01: ECONNRESET / 429 / 503 each invoke run() once only", async () => {
    for (const msg of ["ECONNRESET mid stream", "HTTP 429 rate limited", "503 upstream unavailable"]) {
      vi.resetModules();
      vi.doUnmock("@openai/agents");
      const { runMock, result } = await runOnceScenario(msg);
      expect(runMock).toHaveBeenCalledTimes(1);
      expect(result.status).not.toBe("COMPLETE");
    }
  });

  it("SDK-RETRY-02: error before Runner import path still fails closed without COMPLETE LIVE", async () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
    delete process.env.OPENAI_API_KEY;
    const result = await generateNoraReply({
      userText: "Merci",
      contextSnippets: [],
    });
    expect(result.mode).toBe("deterministic-fixture");
    expect(result.status).toBe("COMPLETE");
    expect(result.modelApplied).toBe("deterministic-fixture");
  });

  it("SDK-RETRY-04: fixture DEV unchanged under flags", async () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
    delete process.env.OPENAI_API_KEY;
    const result = await generateNoraReply({
      userText: "Merci",
      contextSnippets: [],
    });
    expect(result.mode).toBe("deterministic-fixture");
  });
});
