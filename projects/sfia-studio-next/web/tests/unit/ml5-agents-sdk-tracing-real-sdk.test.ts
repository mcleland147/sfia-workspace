/**
 * Real @openai/agents SDK execution with substituted transport + network oracle.
 * Requires simultaneous: successful generation, expected result, spans, correlation, zero export.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  configureAgentsSdkTracing,
  getAgentsTracingConfigState,
  getAgentsTracingSinkRecords,
  resetAgentsTracingTestState,
  runWithAgentsTracingCorrelation,
  withAgentsTracingNetworkOracle,
} from "@/lib/agents-sdk-tracing";

beforeEach(() => {
  resetAgentsTracingTestState();
});

afterEach(() => {
  resetAgentsTracingTestState();
  delete process.env.SFIA_AGENTS_TRACING_MODE;
});

describe("agents-sdk-tracing REAL SDK (substituted transport)", () => {
  it("OFF fail-closed: real SDK tracingDisabled after configure", async () => {
    process.env.SFIA_AGENTS_TRACING_MODE = "off";
    const r = await configureAgentsSdkTracing(process.env);
    expect(r.mode).toBe("off");
    expect(r.tracingDisabled).toBe(true);
    expect(getAgentsTracingConfigState().mode).toBe("off");
    const agents = await import("@openai/agents");
    expect(typeof agents.setTracingDisabled).toBe("function");
    expect(typeof agents.setTraceProcessors).toBe("function");
  });

  it("oracle positive control detects trace export URLs", async () => {
    const { traceExportUrls } = await withAgentsTracingNetworkOracle(async () => {
      await fetch("https://api.openai.com/v1/traces", { method: "POST", body: "{}" });
      return "ok";
    });
    expect(traceExportUrls.length).toBeGreaterThan(0);
  });

  it("LOCAL: successful Agent.run produces correlated spans and zero remote export", async () => {
    process.env.SFIA_AGENTS_TRACING_MODE = "local";
    const cfg = await configureAgentsSdkTracing(process.env);
    expect(cfg.processorsReplaced).toBe(true);
    expect(cfg.mode).toBe("local");

    const { Agent, run, setDefaultOpenAIClient, tool } = await import(
      "@openai/agents"
    );

    let toolHit = 0;
    const probeTool = tool({
      name: "sfia_probe_echo",
      description: "Echo a short token for tracing proof",
      parameters: {
        type: "object",
        properties: { token: { type: "string" } },
        required: ["token"],
        additionalProperties: false,
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      execute: async (input: any) => {
        toolHit += 1;
        return `echo:${String(input?.token ?? "")}`;
      },
    });

    // Compatible substituted Responses client — must succeed, not be catch-absorbed.
    const fakeClient = {
      responses: {
        create: async (req: { input?: unknown; tools?: unknown[] }) => {
          const hasTools = Array.isArray(req.tools) && req.tools.length > 0;
          if (hasTools && toolHit === 0) {
            return {
              id: "resp_tool_call",
              output: [
                {
                  type: "function_call",
                  call_id: "call_1",
                  name: "sfia_probe_echo",
                  arguments: JSON.stringify({ token: "ping" }),
                },
              ],
              usage: { input_tokens: 5, output_tokens: 2, total_tokens: 7 },
            };
          }
          return {
            id: "resp_final",
            output_text: "ok-traced",
            output: [
              {
                type: "message",
                role: "assistant",
                status: "completed",
                content: [{ type: "output_text", text: "ok-traced" }],
              },
            ],
            usage: { input_tokens: 8, output_tokens: 3, total_tokens: 11 },
          };
        },
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setDefaultOpenAIClient(fakeClient as any);

    const { result, traceExportUrls } = await withAgentsTracingNetworkOracle(
      async () =>
        runWithAgentsTracingCorrelation(
          {
            operationId: "op_real_sdk",
            generationId: "gen_real_sdk",
            attemptId: "att_real_sdk",
            workId: "work_real_sdk",
          },
          async () => {
            const agent = new Agent({
              name: "sfia_trace_probe",
              instructions: "Use the tool once then reply ok-traced.",
              model: "gpt-4.1-mini",
              tools: [probeTool],
            });
            return await run(agent, "ping");
          },
        ),
    );

    expect(traceExportUrls).toEqual([]);
    // Must not succeed via swallowed error — final text present.
    const finalText =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result as any)?.finalOutput ??
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result as any)?.output_text ??
      String(result);
    expect(String(finalText)).toMatch(/ok-traced|echo:ping|ok/i);

    const records = getAgentsTracingSinkRecords();
    expect(records.length).toBeGreaterThan(0);
    expect(
      records.every((r) => r.correlation.operationId === "op_real_sdk"),
    ).toBe(true);
    expect(records.every((r) => r.correlation.workId === "work_real_sdk")).toBe(
      true,
    );
    expect(JSON.stringify(records)).not.toMatch(/sk-[A-Za-z0-9]/);
  });

  it("two concurrent works keep ALS correlation isolated", async () => {
    process.env.SFIA_AGENTS_TRACING_MODE = "local";
    await configureAgentsSdkTracing(process.env);
    const { StudioLocalTraceProcessor } = await import("@/lib/agents-sdk-tracing");
    const p = new StudioLocalTraceProcessor();
    await Promise.all([
      runWithAgentsTracingCorrelation(
        {
          operationId: "op_a",
          generationId: "g_a",
          attemptId: "a_a",
          workId: "w_a",
        },
        async () => {
          await p.onSpanEnd({
            traceId: "t_a",
            spanId: "s_a",
            endedAt: Date.now(),
            spanData: { type: "generation", name: "a" },
          });
        },
      ),
      runWithAgentsTracingCorrelation(
        {
          operationId: "op_b",
          generationId: "g_b",
          attemptId: "a_b",
          workId: "w_b",
        },
        async () => {
          await p.onSpanEnd({
            traceId: "t_b",
            spanId: "s_b",
            endedAt: Date.now(),
            spanData: { type: "generation", name: "b" },
          });
        },
      ),
    ]);
    const byOp = Object.fromEntries(
      getAgentsTracingSinkRecords().map((r) => [
        r.correlation.operationId,
        r.correlation.workId,
      ]),
    );
    expect(byOp.op_a).toBe("w_a");
    expect(byOp.op_b).toBe("w_b");
  });
});
