/**
 * @vitest-environment node
 *
 * Permanent regression matrix for F-QA-D2D3-01…10.
 * Findings remain OPEN until Critical QA revalidation — these tests prove
 * technical addressing only.
 */
import { describe, expect, it } from "vitest";
import {
  assessExecutionReadiness,
  createExecutionProjection,
  getFixture,
  MAX_COORDINATOR_TIMEOUT_MS,
  normalizedFailure,
  type AiExecutionPort,
  type ProviderInvocationResult,
} from "@/lib/oa/execution-run";
import {
  composeExecutionRunD2D3,
  composeExecutionRunMemory,
  composeExecutionRunProviders,
  composeExecutionRunProvidersFake,
  coordinateExecutionRun,
} from "@/lib/oa/execution-run/server";

describe("F-QA-D2D3 permanent regression matrix", () => {
  it("F01 — fake provider cannot be promoted to real via injected availableSources", async () => {
    const core = composeExecutionRunMemory({
      clockIso: "2026-08-04T10:00:00.000Z",
    });
    const providers = composeExecutionRunProvidersFake();
    const fixture = getFixture("nominal");
    const result = await coordinateExecutionRun(
      {
        intent: {
          ...fixture.intent,
          correlationId: "corr:f01",
          intentId: "intent:f01",
          requestedSource: "real",
        },
        context: { ...fixture.context, declaredSource: "real" },
        providerRequest: {
          correlationId: "corr:f01",
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "must not run" }],
          timeoutMs: 50,
        },
        timeoutMs: 50,
        availableSources: ["fixture", "real", "sandbox-real"],
      },
      {
        execution: core,
        providers,
        events: providers.events,
        clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
      },
    );

    expect(result.ok).toBe(false);
    expect(result.providerInvoked).toBe(false);
    expect(result.run).toBeUndefined();
    if (result.ok) throw new Error("expected failure");
    expect(result.failure.code).toBe("SOURCE_MISMATCH");
    expect(JSON.stringify(result)).not.toMatch(/"source":"real"/);
  });

  it("F02 — UX readiness cannot become demonstrated from boolean-only proofs", () => {
    const assessment = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
    });
    expect(assessment.uxExploration.status).toBe("not_demonstrated");
    expect(assessment.uiDelivery.status).toBe("not_demonstrated");
    expect(assessment.strongRuntimeVerdict.status).toBe("blocked");
  });

  it.each([1, 2, 4] as const)(
    "F03 — sink throw at event %s continues workflow without raw error",
    async (throwAt) => {
      const core = composeExecutionRunMemory({
        clockIso: "2026-08-04T10:00:00.000Z",
      });
      const providers = composeExecutionRunProvidersFake();
      let eventCount = 0;
      const ai: AiExecutionPort = {
        lane: "ai",
        describeCapability: () => providers.ai.describeCapability(),
        complete: async (request) => providers.ai.complete(request),
      };
      const throwing = composeExecutionRunProviders({
        ...providers,
        ai,
        events: {
          emit: () => {
            eventCount += 1;
            if (eventCount === throwAt) {
              throw new Error(`sink_raw_${throwAt}`);
            }
          },
        },
      });
      const fixture = getFixture("nominal");
      let rawError = "";
      let result;
      try {
        result = await coordinateExecutionRun(
          {
            intent: {
              ...fixture.intent,
              correlationId: `corr:f03:${throwAt}`,
              intentId: `intent:f03:${throwAt}`,
            },
            context: fixture.context,
            providerRequest: {
              correlationId: `corr:f03:${throwAt}`,
              lane: "ai",
              operation: "complete",
              messages: [{ role: "user", content: "sink" }],
              timeoutMs: 50,
            },
            timeoutMs: 50,
          },
          {
            execution: core,
            providers: throwing,
            events: throwing.events,
            clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
          },
        );
      } catch (error) {
        rawError = error instanceof Error ? error.message : String(error);
      }

      expect(rawError).toBe("");
      expect(result).toBeDefined();
      const stored = await core.listByCorrelationId(`corr:f03:${throwAt}`);
      expect(stored.at(-1)?.state).toBe(result!.run?.state);
      expect(result!.run?.state).toBe("succeeded");
      expect(result!.ok).toBe(true);
      expect(result!.eventDelivery.status).toBe("degraded");
      expect(result!.eventDelivery.failureCount).toBeGreaterThan(0);
      expect(JSON.stringify(result)).not.toContain(`sink_raw_${throwAt}`);
    },
  );

  it("F04 — malicious projection rejects secrets, functions, and claim promotion", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const coordinated = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "proj" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });
    expect(coordinated.run?.state).toBe("succeeded");
    const injectedFunction = () => "executable";
    const malicious = {
      run: {
        ...coordinated.run,
        externalResult: {
          kind: "success",
          completeness: "complete",
          redactedSummary: "password=projection-plain-secret",
          rawPresent: false,
        },
        blockedReason: "apiKey=projection-key",
        disclosure: {
          ...coordinated.run!.disclosure,
          limits: [injectedFunction],
        },
        persistence: {
          kind: "memory_process_local",
          durable: true,
          multiInstance: true,
          restartSafe: true,
        },
        evidence: [
          {
            ...coordinated.run!.evidence![0],
            source: "real",
            official: false,
          },
        ],
      },
      openReserves: ["password=reserve-plain-secret"],
    };
    const projection = createExecutionProjection(malicious);
    expect(projection.ok).toBe(false);
    if (projection.ok) throw new Error("expected rejection");
    expect(JSON.stringify(projection)).not.toContain("projection-plain-secret");
    expect(JSON.stringify(projection)).not.toContain("reserve-plain-secret");
  });

  it("F05 — sensitive late evidence is redacted before persistence", async () => {
    const base = composeExecutionRunProvidersFake();
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => ({
        kind: "cancelled",
        failure: normalizedFailure({
          family: "cancelled",
          code: "CANCELLED",
          userMessage: "cancelled",
          retryable: false,
          correlationId: request.correlationId,
        }),
      }),
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        correlationId: "corr:f05",
        intentId: "intent:f05",
      },
      context: fixture.context,
      providerRequest: {
        correlationId: "corr:f05",
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "late" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
      lateEvidenceSummary: "password=late-plain-secret",
    });

    expect(result.run?.state).toBe("cancelled");
    expect(result.lateEvidenceRecorded).toBe(true);
    const late = result.run?.evidence?.at(-1);
    expect(late).toMatchObject({
      late: true,
      official: true,
      source: "fixture",
    });
    expect(late?.summary).toBe("late_result_redacted");
    expect(late?.summary).not.toContain("late-plain-secret");
    expect(JSON.stringify(result)).not.toContain("late-plain-secret");
  });

  it("F-QA-REV-D2D3-01 — matching correlationId keeps nominal engagement", async () => {
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
        correlationId: "corr:rev01:match",
        intentId: "intent:rev01:match",
      },
      context: fixture.context,
      providerRequest: {
        correlationId: "corr:rev01:match",
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "match" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });
    expect(result.ok).toBe(true);
    expect(result.run?.state).toBe("succeeded");
    expect(describeCalls).toBeGreaterThan(0);
    expect(completeCalls).toBe(1);
    expect(result.providerInvoked).toBe(true);
  });

  it.each([
    {
      name: "different",
      requestCorrelationId: "corr:rev01:other",
      buildRequest: (base: Record<string, unknown>) => ({
        ...base,
        correlationId: "corr:rev01:other",
      }),
    },
    {
      name: "empty",
      requestCorrelationId: "",
      buildRequest: (base: Record<string, unknown>) => ({
        ...base,
        correlationId: "",
      }),
    },
    {
      name: "absent",
      requestCorrelationId: undefined,
      buildRequest: (base: Record<string, unknown>) => {
        const { correlationId: _omit, ...rest } = base as {
          correlationId: string;
        } & Record<string, unknown>;
        void _omit;
        return rest;
      },
    },
    {
      name: "hostile_getter",
      requestCorrelationId: "corr:rev01:match",
      buildRequest: (base: Record<string, unknown>) => {
        const hostile = Object.create(null);
        for (const [key, value] of Object.entries(base)) {
          if (key === "correlationId") {
            Object.defineProperty(hostile, key, {
              enumerable: true,
              get() {
                return "corr:rev01:hostile";
              },
            });
          } else {
            Object.defineProperty(hostile, key, {
              enumerable: true,
              value,
              writable: true,
              configurable: true,
            });
          }
        }
        return hostile;
      },
    },
    {
      name: "odd_prototype",
      requestCorrelationId: "corr:rev01:other",
      buildRequest: (base: Record<string, unknown>) =>
        Object.assign(Object.create({ polluted: true }), {
          ...base,
          correlationId: "corr:rev01:other",
        }),
    },
  ])(
    "F-QA-REV-D2D3-01 — correlationId $name rejects before provider engagement",
    async ({ buildRequest }) => {
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
      const requestBase = {
        correlationId: "corr:rev01:match",
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "must not run" }],
        timeoutMs: 50,
      };
      const result = await composition.coordinate({
        intent: {
          ...fixture.intent,
          correlationId: "corr:rev01:match",
          intentId: "intent:rev01:reject",
        },
        context: fixture.context,
        providerRequest: buildRequest(requestBase) as never,
        timeoutMs: 50,
      });

      expect(result.ok).toBe(false);
      expect(result.run).toBeUndefined();
      expect(result.stateTrace).toEqual([]);
      expect(result.providerAttempted).toBe(false);
      expect(result.providerInvoked).toBe(false);
      expect(result.providerCompleted).toBe(false);
      expect(describeCalls).toBe(0);
      expect(completeCalls).toBe(0);
      expect(result.lateEvidenceRecorded).toBe(false);
      if (result.ok) throw new Error("expected failure");
      expect(result.failure.family).toBe("validation");
      expect(result.failure.code).toBe("VALIDATION_ERROR");
    },
  );

  it.each([
    "password=late-secret",
    "token=abc",
    "token : abc",
    "apiKey=k",
    "api_key = k",
    "api-key: k",
    "Authorization Bearer xyz",
    "Authorization: Bearer xyz",
    "bearer xyz",
    "access_token=abc",
    "refresh_token=abc",
    "client_secret=abc",
    "cookie=session-value",
    '"apiKey":"value"',
    "?token=value",
    "&token=value",
    "contains private key material",
    "ghp_abcdefghij",
    "github_pat_abcdefghij",
    "sk-abcdefghij",
    "xoxb-abcdefghij",
    "ToKeN=AbC",
    "line1\ntoken=abc\nline3",
    `${"safe-".repeat(80)}token=abc`,
    "token=abc\u0000tail",
    { not: "a string" },
    null,
    ["array"],
    42,
    true,
  ])(
    "F-QA-D2D3-05 / F-QA-REV-D2D3-02 — late secret %j becomes late_result_redacted",
    async (summary) => {
      const base = composeExecutionRunProvidersFake();
      const sensitiveMarkers = [
        "late-secret",
        "token=abc",
        "token : abc",
        "apiKey=k",
        "api_key = k",
        "api-key: k",
        "Authorization Bearer xyz",
        "Authorization: Bearer xyz",
        "bearer xyz",
        "access_token=abc",
        "refresh_token=abc",
        "client_secret=abc",
        "cookie=session-value",
        '"apiKey":"value"',
        "?token=value",
        "&token=value",
        "private key",
        "ghp_abcdefghij",
        "github_pat_abcdefghij",
        "sk-abcdefghij",
        "xoxb-abcdefghij",
        "ToKeN=AbC",
        "token=abc",
      ];
      const ai: AiExecutionPort = {
        lane: "ai",
        describeCapability: () => base.ai.describeCapability(),
        complete: async (request) => ({
          kind: "cancelled",
          failure: normalizedFailure({
            family: "cancelled",
            code: "CANCELLED",
            userMessage: "cancelled",
            retryable: false,
            correlationId: request.correlationId,
          }),
        }),
      };
      const composition = composeExecutionRunD2D3({
        providers: composeExecutionRunProviders({ ...base, ai }),
      });
      const fixture = getFixture("nominal");
      const result = await composition.coordinate({
        intent: {
          ...fixture.intent,
          correlationId: "corr:rev02",
          intentId: "intent:rev02",
        },
        context: fixture.context,
        providerRequest: {
          correlationId: "corr:rev02",
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "late" }],
          timeoutMs: 50,
        },
        timeoutMs: 50,
        lateEvidenceSummary: summary as never,
      });

      expect(result.run?.state).toBe("cancelled");
      expect(result.lateEvidenceRecorded).toBe(true);
      const late = result.run?.evidence?.at(-1);
      expect(late).toMatchObject({
        late: true,
        official: true,
        source: "fixture",
        summary: "late_result_redacted",
      });
      const runJson = JSON.stringify(result.run);
      const projection = createExecutionProjection({
        run: result.run!,
        openReserves: [],
      });
      expect(projection.ok).toBe(true);
      const projJson = JSON.stringify(projection);
      for (const marker of sensitiveMarkers) {
        if (typeof summary === "string" && summary.includes(marker)) {
          expect(runJson).not.toContain(marker);
          expect(projJson).not.toContain(marker);
          expect(JSON.stringify(result)).not.toContain(marker);
        }
      }
      if (typeof summary === "string" && summary.includes("session-value")) {
        expect(runJson).not.toContain("session-value");
      }
      if (typeof summary === "string" && summary.includes("late-secret")) {
        expect(runJson).not.toContain("late-secret");
      }
    },
  );

  it("F06 — invalid intent yields zero describeCapability and zero provider calls", async () => {
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
    const fixture = getFixture("validation_failure");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "must not run" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });

    expect(result.ok).toBe(false);
    expect(describeCalls).toBe(0);
    expect(completeCalls).toBe(0);
    expect(result.run).toBeUndefined();
    expect(result.providerInvoked).toBe(false);
  });

  it("F07 — hostile request getter is rejected before run creation", async () => {
    const core = composeExecutionRunMemory({
      clockIso: "2026-08-04T10:00:00.000Z",
    });
    const providers = composeExecutionRunProvidersFake();
    const fixture = getFixture("nominal");
    const hostile = Object.create(null);
    Object.defineProperty(hostile, "lane", {
      enumerable: true,
      get() {
        throw new Error("hostile_request_getter");
      },
    });
    let rawError = "";
    let result;
    try {
      result = await coordinateExecutionRun(
        {
          intent: {
            ...fixture.intent,
            correlationId: "corr:f07-req",
            intentId: "intent:f07-req",
          },
          context: fixture.context,
          providerRequest: hostile,
          timeoutMs: 50,
        },
        {
          execution: core,
          providers,
          events: providers.events,
          clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
        },
      );
    } catch (error) {
      rawError = error instanceof Error ? error.message : String(error);
    }
    const stored = await core.listByCorrelationId("corr:f07-req");
    expect(rawError).toBe("");
    expect(result?.ok).toBe(false);
    expect(result?.providerInvoked).toBe(false);
    expect(stored).toEqual([]);
  });

  it("F07 — hostile result getter yields failed terminal without orphan running", async () => {
    const base = composeExecutionRunProvidersFake();
    const hostileResult = Object.create(null);
    Object.defineProperty(hostileResult, "kind", {
      enumerable: true,
      get() {
        throw new Error("hostile_result_getter");
      },
    });
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async () =>
        hostileResult as unknown as ProviderInvocationResult,
    };
    const core = composeExecutionRunMemory({
      clockIso: "2026-08-04T10:00:00.000Z",
    });
    const providers = composeExecutionRunProviders({ ...base, ai });
    const fixture = getFixture("nominal");
    let rawError = "";
    let result;
    try {
      result = await coordinateExecutionRun(
        {
          intent: {
            ...fixture.intent,
            correlationId: "corr:f07-res",
            intentId: "intent:f07-res",
          },
          context: fixture.context,
          providerRequest: {
            correlationId: "corr:f07-res",
            lane: "ai",
            operation: "complete",
            messages: [{ role: "user", content: "hostile" }],
            timeoutMs: 50,
          },
          timeoutMs: 50,
        },
        {
          execution: core,
          providers,
          events: providers.events,
          clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
        },
      );
    } catch (error) {
      rawError = error instanceof Error ? error.message : String(error);
    }
    const stored = await core.listByCorrelationId("corr:f07-res");
    expect(rawError).toBe("");
    expect(result?.run?.state).toBe("failed");
    expect(stored.at(-1)?.state).toBe("failed");
    expect(stored.at(-1)?.state).not.toBe("running");
    expect(JSON.stringify(result)).not.toContain("hostile_result_getter");
  });

  it("F08 — pre-cancellation reports providerInvoked=false with zero calls", async () => {
    const base = composeExecutionRunProvidersFake();
    let calls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => {
        calls += 1;
        return base.ai.complete(request);
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const fixture = getFixture("nominal");
    const controller = new AbortController();
    controller.abort();
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        correlationId: "corr:f08",
        intentId: "intent:f08",
      },
      context: fixture.context,
      providerRequest: {
        correlationId: "corr:f08",
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "cancel" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
      signal: controller.signal,
    });

    expect(result.run?.state).toBe("cancelled");
    expect(calls).toBe(0);
    expect(result.providerAttempted).toBe(true);
    expect(result.providerInvoked).toBe(false);
    expect(result.providerCompleted).toBe(false);
  });

  it.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY, 1.5, MAX_COORDINATOR_TIMEOUT_MS + 1])(
    "F09 — invalid timeout %s creates no run and invokes nothing",
    async (timeoutMs) => {
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
          correlationId: `corr:f09:${String(timeoutMs)}`,
          intentId: `intent:f09:${String(timeoutMs)}`,
        },
        context: fixture.context,
        providerRequest: {
          correlationId: `corr:f09:${String(timeoutMs)}`,
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "timeout" }],
          timeoutMs: 50,
        },
        timeoutMs,
      });
      expect(result.ok).toBe(false);
      expect(result.run).toBeUndefined();
      expect(result.providerInvoked).toBe(false);
      expect(describeCalls).toBe(0);
      expect(completeCalls).toBe(0);
      if (result.ok) throw new Error("expected failure");
      expect(result.failure.code).toBe("VALIDATION_ERROR");
    },
  );

  it("F09 — valid timeout still succeeds", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        correlationId: "corr:f09:ok",
        intentId: "intent:f09:ok",
      },
      context: fixture.context,
      providerRequest: {
        correlationId: "corr:f09:ok",
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "ok" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });
    expect(result.ok).toBe(true);
    expect(result.run?.state).toBe("succeeded");
  });

  it.each([
    "projects/sfia-studio/%2e%2e/.env",
    "%2e%2e/.env",
    "%252e%252e/.env",
    "projects\\sfia-studio\\%2e%2e\\.env",
    "%2fetc%2fpasswd",
    "projects/sfia-studio/%00.env",
    "projects/sfia-studio/%zz",
  ])("F10 — encoded hostile path %s is blocked before provider", async (path) => {
    const base = composeExecutionRunProvidersFake();
    let calls = 0;
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({
        ...base,
        git: {
          ...base.git,
          read: async (request) => {
            calls += 1;
            return base.git.read(request);
          },
        },
      }),
    });
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        intentId: `intent:f10:${path}`,
        correlationId: `corr:f10:${path}`,
        requestedLane: "git",
      },
      context: fixture.context,
      providerRequest: {
        correlationId: `corr:f10:${path}`,
        lane: "git",
        operation: "read",
        owner: "o",
        repo: "r",
        kind: "path_meta",
        path,
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });
    expect(result.ok).toBe(false);
    expect(calls).toBe(0);
    expect(result.providerInvoked).toBe(false);
    expect(result.run?.evidence).toBeUndefined();
    expect(result.run?.state === "succeeded").toBe(false);
  });

  it.each([
    '{"token":"value"}',
    '{"token":123}',
    '{"token":true}',
    '{"token":null}',
    '{"token":[]}',
    '{"token":{}}',
    '{"access_token":"value"}',
    '{"access-token":"value"}',
    '{"refresh_token":"value"}',
    '{"refresh-token":"value"}',
    '{"client_secret":"value"}',
    '{"client-secret":"value"}',
    '{"apiKey":"value"}',
    '{"api_key":"value"}',
    '{"api-key":"value"}',
    '{"authorization":"Bearer value"}',
    '{"cookie":"value"}',
    '{"session":"value"}',
    "'token':'value'",
    '{"ToKeN":"value"}',
    '{"token" : "value"}',
    '{"token"\t:\t"value"}',
    '{\n"token": "value"\n}',
    `${"a".repeat(250)}{"token":"secret-after-240"}`,
  ])(
    "F-QA-REV2-D2D3-01 — structured secret %j → late_result_redacted",
    async (summary) => {
      const base = composeExecutionRunProvidersFake();
      const ai: AiExecutionPort = {
        lane: "ai",
        describeCapability: () => base.ai.describeCapability(),
        complete: async (request) => ({
          kind: "cancelled",
          failure: normalizedFailure({
            family: "cancelled",
            code: "CANCELLED",
            userMessage: "cancelled",
            retryable: false,
            correlationId: request.correlationId,
          }),
        }),
      };
      const composition = composeExecutionRunD2D3({
        providers: composeExecutionRunProviders({ ...base, ai }),
      });
      const fixture = getFixture("nominal");
      const result = await composition.coordinate({
        intent: {
          ...fixture.intent,
          correlationId: "corr:rev2:01",
          intentId: "intent:rev2:01",
        },
        context: fixture.context,
        providerRequest: {
          correlationId: "corr:rev2:01",
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "late" }],
          timeoutMs: 50,
        },
        timeoutMs: 50,
        lateEvidenceSummary: summary,
      });
      expect(result.run?.state).toBe("cancelled");
      expect(result.lateEvidenceRecorded).toBe(true);
      expect(result.run?.evidence?.at(-1)).toMatchObject({
        late: true,
        official: true,
        source: "fixture",
        summary: "late_result_redacted",
      });
      const blob = JSON.stringify(result);
      expect(result.run?.evidence?.at(-1)?.summary).toBe("late_result_redacted");
      if (summary.includes("secret-after-240")) {
        expect(blob).not.toContain("secret-after-240");
      }
      if (summary.includes("Bearer value")) {
        expect(blob).not.toContain("Bearer value");
      }
      expect(blob).not.toMatch(
        /['"](?:password|secret|token|access[_-]token|refresh[_-]token|client[_-]secret|api[_-]?key|authorization|cookie|session)['"]\s*:\s*[^,\}\s]/i,
      );
      const projection = createExecutionProjection({
        run: result.run!,
        openReserves: [],
      });
      expect(projection.ok).toBe(true);
      expect(JSON.stringify(projection)).not.toContain("secret-after-240");
      expect(JSON.stringify(projection)).not.toContain("Bearer value");
    },
  );

  it.each([
    '{"status":"complete"}',
    '{"tokenCount":12}',
    '{"authorizationStatus":"missing"}',
    '{"sessionCount":1}',
    '{"cookiePolicy":"strict"}',
    '{"apiVersion":"v1"}',
  ])(
    "F-QA-REV2-D2D3-01 — non-sensitive structured %j preserved (not over-redacted)",
    async (summary) => {
      const base = composeExecutionRunProvidersFake();
      const ai: AiExecutionPort = {
        lane: "ai",
        describeCapability: () => base.ai.describeCapability(),
        complete: async (request) => ({
          kind: "cancelled",
          failure: normalizedFailure({
            family: "cancelled",
            code: "CANCELLED",
            userMessage: "cancelled",
            retryable: false,
            correlationId: request.correlationId,
          }),
        }),
      };
      const composition = composeExecutionRunD2D3({
        providers: composeExecutionRunProviders({ ...base, ai }),
      });
      const fixture = getFixture("nominal");
      const result = await composition.coordinate({
        intent: {
          ...fixture.intent,
          correlationId: "corr:rev2:safe",
          intentId: "intent:rev2:safe",
        },
        context: fixture.context,
        providerRequest: {
          correlationId: "corr:rev2:safe",
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "late" }],
          timeoutMs: 50,
        },
        timeoutMs: 50,
        lateEvidenceSummary: summary,
      });
      expect(result.run?.state).toBe("cancelled");
      expect(result.lateEvidenceRecorded).toBe(true);
      expect(result.run?.evidence?.at(-1)?.summary).toBe(summary);
      expect(result.run?.evidence?.at(-1)?.summary).not.toBe(
        "late_result_redacted",
      );
    },
  );

  it.each([
    {
      name: "function",
      build: () => {
        const input: Record<string, unknown> = {
          intent: null,
          context: null,
          providerRequest: null,
          timeoutMs: 50,
        };
        // placeholders replaced below
        return { kind: "function" as const, late: (() => "fn") as unknown };
      },
    },
    {
      name: "symbol",
      build: () => ({ kind: "symbol" as const, late: Symbol("x") as unknown }),
    },
    {
      name: "getter",
      build: () => ({ kind: "getter" as const }),
    },
    {
      name: "odd_prototype",
      build: () => ({ kind: "odd_prototype" as const }),
    },
  ])(
    "F-QA-REV2-D2D3-02 — arbitrated fail-closed hostile envelope ($name)",
    async ({ name, build }) => {
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
      const built = build();
      const coordInput: Record<string, unknown> = {
        intent: {
          ...fixture.intent,
          correlationId: "corr:rev2:02",
          intentId: "intent:rev2:02",
        },
        context: fixture.context,
        providerRequest: {
          correlationId: "corr:rev2:02",
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "must not run" }],
          timeoutMs: 50,
        },
        timeoutMs: 50,
      };
      if (built.kind === "function" || built.kind === "symbol") {
        coordInput.lateEvidenceSummary = built.late;
      } else if (built.kind === "getter") {
        Object.defineProperty(coordInput, "lateEvidenceSummary", {
          enumerable: true,
          configurable: true,
          get() {
            return "hostile-getter-value";
          },
        });
      } else {
        // Nested non-plain object forces envelope untrusted rejection.
        coordInput.lateEvidenceSummary = Object.assign(
          Object.create({ polluted: true }),
          { nested: "hostile-proto-value" },
        );
      }
      const result = await composition.coordinate(coordInput as never);
      expect(result.ok).toBe(false);
      expect(result.run).toBeUndefined();
      expect(result.stateTrace).toEqual([]);
      expect(result.providerAttempted).toBe(false);
      expect(result.providerInvoked).toBe(false);
      expect(result.providerCompleted).toBe(false);
      expect(result.lateEvidenceRecorded).toBe(false);
      expect(describeCalls).toBe(0);
      expect(completeCalls).toBe(0);
      if (result.ok) throw new Error("expected failure");
      expect(result.failure.family).toBe("validation");
      expect(JSON.stringify(result)).not.toContain("hostile-getter-value");
      expect(JSON.stringify(result)).not.toContain("hostile-proto-value");
    },
  );
});
