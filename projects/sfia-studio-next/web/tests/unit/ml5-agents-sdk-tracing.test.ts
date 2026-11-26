import { afterEach, describe, expect, it, vi } from "vitest";
import {
  StudioLocalTraceProcessor,
  __forbiddenRemoteTraceExport,
  configureAgentsSdkTracing,
  getAgentsTracingSinkRecords,
  installAgentsTracingEgressProbe,
  resetAgentsTracingTestState,
  resolveAgentsTracingMode,
  setAgentsTracingCorrelation,
} from "@/lib/agents-sdk-tracing";

const setTracingDisabled = vi.fn();
const setTraceProcessors = vi.fn();
const setSensitiveDataLoggingEnabled = vi.fn();

vi.mock("@openai/agents", () => ({
  setTracingDisabled: (...args: unknown[]) => setTracingDisabled(...args),
  setTraceProcessors: (...args: unknown[]) => setTraceProcessors(...args),
}));

vi.mock("@openai/agents-core", () => ({
  setSensitiveDataLoggingEnabled: (...args: unknown[]) =>
    setSensitiveDataLoggingEnabled(...args),
}));

vi.mock("@/lib/observability", () => ({
  emitObs: vi.fn(() => ({ emitted: true })),
}));

describe("agents-sdk-tracing", () => {
  afterEach(() => {
    resetAgentsTracingTestState();
    setTracingDisabled.mockReset();
    setTraceProcessors.mockReset();
    setSensitiveDataLoggingEnabled.mockReset();
    vi.unstubAllEnvs();
  });

  it("defaults to off", () => {
    expect(resolveAgentsTracingMode({} as NodeJS.ProcessEnv)).toBe("off");
  });

  it("configures OFF: disables tracing and clears processors", async () => {
    vi.stubEnv("SFIA_AGENTS_TRACING_MODE", "off");
    const r = await configureAgentsSdkTracing(process.env);
    expect(r.mode).toBe("off");
    expect(r.tracingDisabled).toBe(true);
    expect(setTracingDisabled).toHaveBeenCalledWith(true);
    expect(setTraceProcessors).toHaveBeenCalledWith([]);
    expect(setSensitiveDataLoggingEnabled).toHaveBeenCalledWith(false);
  });

  it("configures LOCAL: replaces processors with StudioLocalTraceProcessor", async () => {
    vi.stubEnv("SFIA_AGENTS_TRACING_MODE", "local");
    const r = await configureAgentsSdkTracing(process.env);
    expect(r.mode).toBe("local");
    expect(r.tracingDisabled).toBe(false);
    expect(setTracingDisabled).toHaveBeenCalledWith(false);
    expect(setTraceProcessors).toHaveBeenCalledTimes(1);
    const processors = setTraceProcessors.mock.calls[0][0] as unknown[];
    expect(processors).toHaveLength(1);
    expect(processors[0]).toBeInstanceOf(StudioLocalTraceProcessor);
  });

  it("local processor redacts and never triggers egress probe", async () => {
    const egress: string[] = [];
    installAgentsTracingEgressProbe((url) => egress.push(url));
    setAgentsTracingCorrelation({
      operationId: "op_1",
      generationId: "gen_1",
      attemptId: "att_1",
      workId: "work_1",
    });
    const p = new StudioLocalTraceProcessor();
    await p.onSpanEnd({
      type: "span",
      traceId: "trace_abc",
      spanId: "span_1",
      startedAt: 1000,
      endedAt: 1250,
      spanData: {
        type: "generation",
        name: "reply",
        input: "SECRET_PROMPT",
        output: "SECRET_OUTPUT",
      },
    });
    const records = getAgentsTracingSinkRecords();
    expect(records).toHaveLength(1);
    expect(records[0].dataRedacted).toBe(true);
    expect(records[0].name).toBe("generation:reply");
    expect(records[0].durationMs).toBe(250);
    expect(records[0].correlation.operationId).toBe("op_1");
    expect(JSON.stringify(records[0])).not.toContain("SECRET_PROMPT");
    expect(egress).toEqual([]);
  });

  it("forbidden remote export helper is detectable by egress probe", () => {
    const egress: string[] = [];
    installAgentsTracingEgressProbe((url) => egress.push(url));
    expect(() =>
      __forbiddenRemoteTraceExport("https://api.openai.com/v1/traces/ingest", {
        prompt: "x",
      }),
    ).toThrow(/FORBIDDEN_REMOTE_TRACE_EXPORT/);
    expect(egress).toEqual(["https://api.openai.com/v1/traces/ingest"]);
  });
});
