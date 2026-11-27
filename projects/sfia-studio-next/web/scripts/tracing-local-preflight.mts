/**
 * Checkpoint 5 preflight — tracing LOCAL configure / OFF rollback.
 * No Nora campaign here.
 */
import {
  configureAgentsSdkTracing,
  getAgentsTracingConfigState,
  resetAgentsTracingTestState,
  withAgentsTracingNetworkOracle,
} from "../src/lib/agents-sdk-tracing";

async function main() {
  resetAgentsTracingTestState();
  process.env.SFIA_AGENTS_TRACING_MODE = "off";
  const off = await configureAgentsSdkTracing(process.env);

  resetAgentsTracingTestState();
  process.env.SFIA_AGENTS_TRACING_MODE = "local";
  const loc = await configureAgentsSdkTracing(process.env);

  const { result, traceExportUrls } = await withAgentsTracingNetworkOracle(
    async () => "preflight-ok",
  );

  // rollback OFF
  process.env.SFIA_AGENTS_TRACING_MODE = "off";
  resetAgentsTracingTestState();
  const back = await configureAgentsSdkTracing(process.env);

  const ok =
    off.mode === "off" &&
    off.tracingDisabled === true &&
    loc.mode === "local" &&
    loc.processorsReplaced === true &&
    result === "preflight-ok" &&
    traceExportUrls.length === 0 &&
    back.mode === "off" &&
    back.tracingDisabled === true;

  console.log(
    JSON.stringify({
      status: ok ? "PASS" : "FAIL",
      off: { mode: off.mode, tracingDisabled: off.tracingDisabled },
      local: {
        mode: loc.mode,
        processorsReplaced: loc.processorsReplaced,
        tracingDisabled: loc.tracingDisabled,
        state: getAgentsTracingConfigState(),
      },
      oracleExportUrls: traceExportUrls,
      rollback: { mode: back.mode, tracingDisabled: back.tracingDisabled },
    }),
  );
  if (!ok) process.exitCode = 3;
}

main().catch((e) => {
  console.log(
    JSON.stringify({
      status: "ERROR",
      lastError: e instanceof Error ? e.message : String(e),
    }),
  );
  process.exitCode = 1;
});
