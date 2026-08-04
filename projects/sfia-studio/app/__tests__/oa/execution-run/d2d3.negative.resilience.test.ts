/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  getFixture,
  normalizedFailure,
  type AiExecutionPort,
  type FailureCode,
  type FailureFamily,
  type ProviderInvocationResult,
} from "@/lib/oa/execution-run";
import {
  composeExecutionRunD2D3,
  composeExecutionRunProviders,
  composeExecutionRunProvidersFake,
} from "@/lib/oa/execution-run/server";

function failureResult(
  family: FailureFamily,
  code: FailureCode,
  correlationId: string,
): ProviderInvocationResult {
  return {
    kind: "failure",
    failure: normalizedFailure({
      family,
      code,
      userMessage: `Bounded ${family} fixture failure`,
      retryable: false,
      correlationId,
    }),
  };
}

async function runWithAiResult(
  makeResult: (correlationId: string) => ProviderInvocationResult,
  options?: { lateEvidenceSummary?: string },
) {
  const base = composeExecutionRunProvidersFake();
  let calls = 0;
  let receivedKeys: string[] = [];
  const ai: AiExecutionPort = {
    lane: "ai",
    describeCapability: () => base.ai.describeCapability(),
    complete: async (request) => {
      calls += 1;
      receivedKeys = Object.keys(request);
      return makeResult(request.correlationId);
    },
  };
  const providers = composeExecutionRunProviders({ ...base, ai });
  const composition = composeExecutionRunD2D3({ providers });
  const fixture = getFixture("nominal");
  const result = await composition.coordinate({
    intent: fixture.intent,
    context: fixture.context,
    providerRequest: {
      correlationId: fixture.intent.correlationId,
      lane: "ai",
      operation: "complete",
      messages: [{ role: "user", content: "deterministic fixture" }],
      timeoutMs: 100,
    },
    timeoutMs: 100,
    ...options,
  });
  return { result, calls, receivedKeys };
}

describe("D2-D3 deterministic negative and resilience scenarios", () => {
  it.each([
    ["authentication", "AUTHENTICATION_ERROR"],
    ["authorization", "AUTHORIZATION_ERROR"],
    ["provider_unavailable", "PROVIDER_UNAVAILABLE"],
    ["rate_limited", "RATE_LIMITED"],
  ] as const)(
    "normalizes %s failure to the exact failed terminal",
    async (family, code) => {
      const { result, calls } = await runWithAiResult((correlationId) =>
        failureResult(family, code, correlationId),
      );
      expect(calls).toBe(1);
      expect(result.run?.state).toBe("failed");
      if (result.ok) throw new Error("expected failed result");
      expect(result.failure).toMatchObject({ family, code });
      expect(result.run?.evidence).toBeUndefined();
      expect(result.run?.disclosure.source).toBe("fixture");
    },
  );

  it("maps provider timeout to timed_out", async () => {
    const { result } = await runWithAiResult((correlationId) => ({
      kind: "timed_out",
      failure: normalizedFailure({
        family: "timed_out",
        code: "TIMED_OUT",
        userMessage: "Bounded timeout",
        retryable: true,
        correlationId,
      }),
    }));
    expect(result.run?.state).toBe("timed_out");
    if (result.ok) throw new Error("expected timed-out result");
    expect(result.failure.code).toBe("TIMED_OUT");
  });

  it("maps provider cancellation to cancelled and preserves it after late evidence", async () => {
    const { result } = await runWithAiResult(
      (correlationId) => ({
        kind: "cancelled",
        failure: normalizedFailure({
          family: "cancelled",
          code: "CANCELLED",
          userMessage: "Bounded cancellation",
          retryable: false,
          correlationId,
        }),
      }),
      { lateEvidenceSummary: "late redacted fixture result" },
    );
    expect(result.run?.state).toBe("cancelled");
    if (result.ok) throw new Error("expected cancelled result");
    expect(result.failure.code).toBe("CANCELLED");
    expect(result.run?.evidence?.at(-1)?.late).toBe(true);
  });

  it("fails partial provider success and preserves explicit partiality", async () => {
    const { result } = await runWithAiResult(() => ({
      kind: "success",
      completeness: "partial",
      redactedSummary: "bounded partial result",
      rawPresent: false,
      usage: { status: "unavailable", reason: "partial" },
      disclosureNotes: ["fixture"],
    }));
    expect(result.run?.state).toBe("failed");
    if (result.ok) throw new Error("expected partial failure");
    expect(result.failure.code).toBe("INVALID_PROVIDER_RESULT");
    expect(result.run?.externalResult).toMatchObject({
      kind: "success",
      completeness: "partial",
    });
    expect(result.run?.state).not.toBe("succeeded");
  });

  it("rejects an invalid provider result without leaking raw content", async () => {
    const { result } = await runWithAiResult(
      () =>
        ({
          kind: "success",
          completeness: "complete",
          redactedSummary: "password=do-not-leak",
          rawPresent: true,
          usage: { status: "unavailable", reason: "invalid" },
          disclosureNotes: [],
        }) as ProviderInvocationResult,
    );
    expect(result.run?.state).toBe("failed");
    if (result.ok) throw new Error("expected invalid provider failure");
    expect(result.failure.code).toBe("INVALID_PROVIDER_RESULT");
    expect(JSON.stringify(result.run)).not.toContain("do-not-leak");
  });

  it.each([
    ["validation_failure", "VALIDATION_ERROR"],
    ["blocked_gate", "HUMAN_GATE_REQUIRED"],
    ["protected_path", "PROTECTED_PATH"],
    ["mutation_forbidden", "MUTATION_FORBIDDEN"],
    ["source_mismatch", "SOURCE_MISMATCH"],
  ] as const)("blocks %s before provider invocation", async (scenario, code) => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture(scenario);
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest:
        fixture.intent.requestedLane === "ai"
          ? {
              correlationId: fixture.intent.correlationId,
              lane: "ai",
              operation: "complete",
              messages: [{ role: "user", content: "must not execute" }],
              timeoutMs: 100,
            }
          : undefined,
      timeoutMs: 100,
    });
    expect(result.ok).toBe(false);
    expect(result.providerInvoked).toBe(false);
    if (result.ok) throw new Error("expected pre-engagement block");
    expect(result.failure.code).toBe(code);
    if (result.run) {
      expect(result.run.state).toBe("blocked");
      expect(result.run.evidence).toBeUndefined();
      expect(result.run.disclosure.source).toBe(
        fixture.context.declaredSource,
      );
    }
  });

  it("blocks a sensitive provider request at the boundary and redacts output", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const sensitive = "fixture-sensitive-value";
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "safe" }],
        timeoutMs: 100,
        apiKey: sensitive,
      } as never,
      timeoutMs: 100,
    });
    expect(result.ok).toBe(false);
    expect(result.run).toBeUndefined();
    expect(result.providerInvoked).toBe(false);
    expect(JSON.stringify(result)).not.toContain(sensitive);
    if (result.ok) throw new Error("expected failure");
    expect(result.failure.code).toBe("VALIDATION_ERROR");
  });

  it("blocks providerRequest correlationId mismatch before engagement", async () => {
    const base = composeExecutionRunProvidersFake();
    let describeCalls = 0;
    let completeCalls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => {
        describeCalls += 1;
        return base.ai.describeCapability();
      },
      complete: async (request) => {
        completeCalls += 1;
        return base.ai.complete(request);
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        correlationId: "corr:neg:intent",
        intentId: "intent:neg:corr",
      },
      context: fixture.context,
      providerRequest: {
        correlationId: "corr:neg:request",
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "must not execute" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });
    expect(result.ok).toBe(false);
    expect(result.run).toBeUndefined();
    expect(result.stateTrace).toEqual([]);
    expect(result.providerAttempted).toBe(false);
    expect(result.providerInvoked).toBe(false);
    expect(result.providerCompleted).toBe(false);
    expect(describeCalls).toBe(0);
    expect(completeCalls).toBe(0);
    if (result.ok) throw new Error("expected correlation mismatch rejection");
    expect(result.failure.code).toBe("VALIDATION_ERROR");
    expect(result.failure.family).toBe("validation");
  });

  it("gives providers no run, repository, save, or transition authority", async () => {
    const { result, receivedKeys } = await runWithAiResult(() => ({
      kind: "success",
      completeness: "complete",
      redactedSummary: "bounded complete fixture",
      rawPresent: false,
      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
      disclosureNotes: ["fixture"],
    }));
    expect(result.run?.state).toBe("succeeded");
    expect(receivedKeys).not.toEqual(
      expect.arrayContaining([
        "executionRun",
        "repository",
        "save",
        "transitionExecutionRun",
      ]),
    );
    expect(result.stateTrace).toEqual(["idle", "running", "succeeded"]);
  });
});
