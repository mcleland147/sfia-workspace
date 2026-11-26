import { afterEach, describe, expect, it, vi } from "vitest";
import {
  StudioLocalTraceProcessor,
  configureAgentsSdkTracing,
  getAgentsTracingConfigState,
  getAgentsTracingSinkRecords,
  resetAgentsTracingTestState,
  resolveAgentsTracingMode,
  runWithAgentsTracingCorrelation,
  withAgentsTracingNetworkOracle,
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

describe("agents-sdk-tracing corrective", () => {
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

  it("OFF clears processors and disables tracing", async () => {
    vi.stubEnv("SFIA_AGENTS_TRACING_MODE", "off");
    const r = await configureAgentsSdkTracing(process.env);
    expect(r.mode).toBe("off");
    expect(r.processorsReplaced).toBe(true);
    expect(setTraceProcessors).toHaveBeenCalledWith([]);
    expect(setTracingDisabled).toHaveBeenCalledWith(true);
  });

  it("LOCAL replaces processors; processorsReplaced only when setTraceProcessors exists", async () => {
    vi.stubEnv("SFIA_AGENTS_TRACING_MODE", "local");
    const r = await configureAgentsSdkTracing(process.env);
    expect(r.mode).toBe("local");
    expect(r.processorsReplaced).toBe(true);
    expect(getAgentsTracingConfigState().processorsReplaced).toBe(true);
    expect(setTraceProcessors.mock.calls[0][0][0]).toBeInstanceOf(
      StudioLocalTraceProcessor,
    );
  });

  it("ALS correlation isolates concurrent works", async () => {
    const p = new StudioLocalTraceProcessor();
    await Promise.all([
      runWithAgentsTracingCorrelation(
        {
          operationId: "op_a",
          generationId: "gen_a",
          attemptId: "att_a",
          workId: "work_a",
        },
        async () => {
          await new Promise((r) => setTimeout(r, 20));
          await p.onSpanEnd({
            traceId: "t1",
            spanId: "s1",
            endedAt: Date.now(),
            spanData: { type: "generation", name: "a" },
          });
        },
      ),
      runWithAgentsTracingCorrelation(
        {
          operationId: "op_b",
          generationId: "gen_b",
          attemptId: "att_b",
          workId: "work_b",
        },
        async () => {
          await new Promise((r) => setTimeout(r, 5));
          await p.onSpanEnd({
            traceId: "t2",
            spanId: "s2",
            endedAt: Date.now(),
            spanData: { type: "generation", name: "b" },
          });
        },
      ),
    ]);
    const records = getAgentsTracingSinkRecords();
    expect(records).toHaveLength(2);
    const byOp = Object.fromEntries(
      records.map((r) => [r.correlation.operationId, r.correlation.workId]),
    );
    expect(byOp.op_a).toBe("work_a");
    expect(byOp.op_b).toBe("work_b");
    expect(JSON.stringify(records)).not.toContain("SECRET");
  });

  it("network oracle observes and blocks trace export URLs independently", async () => {
    const { traceExportUrls } = await withAgentsTracingNetworkOracle(async () => {
      await fetch("https://api.openai.com/v1/traces/ingest", {
        method: "POST",
        body: "{}",
      });
      await fetch("https://example.com/ok");
      return "done";
    });
    expect(traceExportUrls).toEqual([
      "https://api.openai.com/v1/traces/ingest",
    ]);
  });
});
