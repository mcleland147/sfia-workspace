import { describe, expect, it, vi, afterEach } from "vitest";
import {
  categorizeProviderError,
  extractProviderErrorDiagnostics,
  generateNoraReply,
} from "@/domains/conversation/nora-adapter";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import { redactDeep } from "@/lib/observability";

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

  it("R05 OBS: extracts allowlisted diagnostics without raw message or secrets", () => {
    const inner = new Error("sk-abcdef1234567890 leaked prompt body");
    inner.name = "APIError";
    (inner as Error & { status: number; code: string }).status = 429;
    (inner as Error & { code: string }).code = "rate_limit_exceeded";
    const outer = new Error("wrapper");
    outer.name = "h";
    (outer as Error & { cause: Error }).cause = inner;
    const d = extractProviderErrorDiagnostics(outer, {
      phase: "stream_drain",
      streamingDelivered: true,
      toolCallsObserved: 2,
    });
    expect(d.error_name).toBe("APIError");
    expect(d.error_name_stable).toBe("APIError");
    expect(d.error_code).toBe("rate_limit_exceeded");
    expect(d.http_status).toBe(429);
    expect(d.streaming_delivered).toBe(true);
    expect(d.tool_calls_observed).toBe(2);
    expect(d.cause_depth).toBeGreaterThanOrEqual(1);
    expect(d.msg_fingerprint).toMatch(/^[a-f0-9]{16}$/);
    const serialized = JSON.stringify(d);
    expect(serialized).not.toContain("sk-abcdef");
    expect(serialized).not.toContain("leaked prompt");
    expect(serialized).not.toContain("wrapper");
  });

  it("UAT-03 OBS: Invalid output type (space) → SCHEMA_OR_OUTPUT + zod path", () => {
    const err = new Error(
      'Invalid output type: final assistant output failed schema validation at "visualComposition.blocks.1.steps.0.detail" (Too big: expected string to have <=400 characters).',
    );
    err.name = "h"; // production minify of ModelBehaviorError
    const c = categorizeProviderError(err);
    expect(c.category).toBe("PROVIDER_SCHEMA_OR_OUTPUT");
    const d = extractProviderErrorDiagnostics(err, {
      phase: "stream_drain",
      streamingDelivered: true,
      toolCallsObserved: 0,
    });
    expect(d.error_kind).toBe("structured_output_schema_validation");
    expect(d.error_name_stable).toBe("ModelBehaviorError");
    expect(d.zod_issue_path).toBe("visualComposition.blocks.1.steps.0.detail");
    expect(d.validation_rule_hint).toBe("max_length");
    expect(JSON.stringify(d)).not.toContain("Too big");
  });

  it("UAT-03 OBS: timed out → INTERRUPTED; Model did not produce → not false SCHEMA", () => {
    expect(categorizeProviderError(new Error("Model call timed out after 120000ms.")).category).toBe(
      "PROVIDER_INTERRUPTED",
    );
    expect(
      categorizeProviderError(new Error("Model did not produce a final response!")).category,
    ).toBe("PROVIDER_ERROR");
  });

  it("R05 OBS: redaction drops sensitive simulated strings in deep structures", () => {
    const scrubbed = redactDeep({
      authorization: "Bearer secret",
      meta: { error_name: "APIError", note: "SYNTH_SECRET_PROBE_DO_NOT_LOG_X" },
    });
    expect(JSON.stringify(scrubbed)).not.toContain("Bearer secret");
    expect(JSON.stringify(scrubbed)).toContain("[REDACTED");
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

  it("does not claim CKI DELIVERED when generate fails before a fixture or provider body", async () => {
    process.env.STUDIO_LANE = "RECETTE";
    process.env.STUDIO_E2E = "1";
    delete process.env.OPENAI_API_KEY;
    const blocked = await generateNoraReply({
      userText: "Merci",
      contextSnippets: [],
      ckiDelivery: "DELIVERED",
    });
    expect(blocked.status).toBe("FAILED");
    expect(blocked.ckiDelivery).not.toBe("DELIVERED");

    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    const ran = await generateNoraReply({
      userText: "Merci",
      contextSnippets: [],
      ckiDelivery: "DELIVERED",
    });
    expect(ran.status).toBe("COMPLETE");
    expect(ran.mode).toBe("deterministic-fixture");
    expect(ran.ckiDelivery).toBe("DELIVERED");
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
