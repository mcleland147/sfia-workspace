#!/usr/bin/env node
/** EXPERIMENTAL spike scenario probes — not production. */
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  assertSandboxPaths,
  buildCursorAgentArgv,
  CURSOR_REAL_SPIKE_FLAG,
  CursorExecutorPortRealSpike,
  filterSpikeEnv,
  spawnWithTimeout,
  type CursorRealSpikeContract,
} from "../../src/ports/cursorRealSpike.js";
import { HarnessError } from "../../src/types/contracts.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SANDBOX = path.join(HERE, "sandbox");
const PROOFS = path.join(SANDBOX, "proofs");

function base(overrides: Partial<CursorRealSpikeContract> = {}): CursorRealSpikeContract {
  return {
    spikeId: "probe",
    requestId: "r",
    executionId: `e-${Date.now()}`,
    mechanismId: "cursor-agent-cli",
    mechanismVersion: "local",
    instruction: "noop",
    workingDirectory: SANDBOX,
    allowedReadPaths: ["fixtures/input.txt"],
    allowedWritePaths: ["output/summary.txt"],
    deniedPaths: ["../", "projects/sfia-studio/app"],
    timeoutMs: 15_000,
    expectedOutputs: [],
    gitEffect: "none",
    networkEffect: "unknown",
    cursorMode: "real-spike",
    contractHash: "probe",
    initiatedBy: "Morris",
    initiatedAt: new Date().toISOString(),
    ...overrides,
  };
}

async function main(): Promise<void> {
  process.env[CURSOR_REAL_SPIKE_FLAG] = "1";
  const out: Record<string, unknown> = {};

  // S-CUR-07
  try {
    assertSandboxPaths(base({ allowedReadPaths: ["../README.md"] }));
    out.scur07 = { rejected: false };
  } catch (e) {
    out.scur07 = {
      rejected: e instanceof HarnessError,
      code: e instanceof HarnessError ? e.code : "unknown",
    };
  }
  const spike = new CursorExecutorPortRealSpike({ enabled: true, timeoutMs: 1000 });
  try {
    await spike.executeSpikeContract(base({ allowedReadPaths: ["../README.md"] }));
    out.scur07 = { ...(out.scur07 as object), invoked: true };
  } catch (e) {
    out.scur07 = {
      ...(out.scur07 as object),
      invoked: false,
      rejectCode: e instanceof HarnessError ? e.code : String(e),
    };
  }

  // S-CUR-04
  out.scur04 = await spawnWithTimeout({
    command: "/bin/sleep",
    argv: ["20"],
    cwd: SANDBOX,
    env: filterSpikeEnv(),
    timeoutMs: 300,
    maxOutputBytes: 1024,
  });

  // S-CUR-05 — empty instruction with agent
  const errSpike = new CursorExecutorPortRealSpike({
    enabled: true,
    timeoutMs: 30_000,
    agentMode: "agent",
    cursorBin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
  });
  const err = await errSpike.executeSpikeContract(base({ instruction: "", timeoutMs: 30_000 }));
  out.scur05 = {
    ok: err.ok,
    exitCode: err.exitCode,
    timedOut: err.timedOut,
    stderr: err.stderrRedacted.slice(0, 400),
    stdout: err.stdoutRedacted.slice(0, 200),
  };

  // S-CUR-08 — authenticated agent ask with hard timeout (STOP wrapper)
  const { command, argv } = buildCursorAgentArgv({
    bin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    instruction: "Slowly count from 1 to 200 in words. Do not write files. Do not run git.",
    workspace: SANDBOX,
    mode: "ask",
    useNestedAgentSubcommand: true,
  });
  out.scur08 = await spawnWithTimeout({
    command,
    argv,
    cwd: SANDBOX,
    env: filterSpikeEnv(),
    timeoutMs: 2000,
    maxOutputBytes: 50_000,
  });

  writeFileSync(path.join(PROOFS, "scenario-probes.json"), JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
}

main();
