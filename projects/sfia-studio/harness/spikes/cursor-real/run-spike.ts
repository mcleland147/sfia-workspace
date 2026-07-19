#!/usr/bin/env node
/**
 * EXPERIMENTAL spike runner — not the stable CLI.
 * Usage:
 *   SFIA_CURSOR_REAL_SPIKE=1 SFIA_CURSOR_REAL_LIVE=1 npx tsx spikes/cursor-real/run-spike.ts
 */
import { createHash } from "node:crypto";
import { writeFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import {
  CURSOR_REAL_SPIKE_FLAG,
  CursorExecutorPortRealSpike,
  type CursorRealSpikeContract,
} from "../../src/ports/cursorRealSpike.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SANDBOX = path.join(HERE, "sandbox");
const PROOFS = path.join(SANDBOX, "proofs");

function git(args: string[]): string {
  return execFileSync("git", args, { encoding: "utf8", cwd: path.resolve(HERE, "../../../../../") });
}

function listing(): string {
  return execFileSync("bash", ["-lc", "find . -type f | sort | while read f; do echo \"$f $(cksum < \"$f\" | awk '{print $1}')\"; done"], {
    encoding: "utf8",
    cwd: SANDBOX,
  });
}

async function main(): Promise<void> {
  mkdirSync(PROOFS, { recursive: true });
  if (process.env[CURSOR_REAL_SPIKE_FLAG] !== "1") {
    console.error(`Set ${CURSOR_REAL_SPIKE_FLAG}=1 to run`);
    process.exit(2);
  }

  writeFileSync(path.join(PROOFS, "git-status-pre-run.txt"), git(["status", "--short"]));
  writeFileSync(path.join(PROOFS, "git-diff-pre-run.txt"), git(["diff", "--name-status"]));
  writeFileSync(path.join(PROOFS, "sandbox-listing-pre-run.txt"), listing());

  const instruction =
    "Read the file fixtures/input.txt. Write exactly one line summarizing it into output/summary.txt. " +
    "Do not run any git command. Do not modify any file outside output/. Do not access the network intentionally.";

  const partial = {
    spikeId: "spike-cur-live-001",
    requestId: "req-spike-live-001",
    executionId: `exec-${Date.now()}`,
    mechanismId: "cursor-agent-cli",
    mechanismVersion: "observed-local",
    instruction,
    workingDirectory: SANDBOX,
    allowedReadPaths: ["fixtures/input.txt"],
    allowedWritePaths: ["output/summary.txt"],
    deniedPaths: ["projects/sfia-studio/app", "../"],
    timeoutMs: 120_000,
    expectedOutputs: ["output/summary.txt"],
    gitEffect: "none" as const,
    networkEffect: "unknown" as const,
    cursorMode: "real-spike" as const,
    initiatedBy: "Morris",
    initiatedAt: new Date().toISOString(),
  };
  const contract: CursorRealSpikeContract = {
    ...partial,
    contractHash: createHash("sha256").update(JSON.stringify(partial)).digest("hex"),
  };
  writeFileSync(path.join(PROOFS, "contract.json"), JSON.stringify(contract, null, 2));

  const spike = new CursorExecutorPortRealSpike({
    enabled: true,
    timeoutMs: contract.timeoutMs,
    // Nominal write requires default agent (not ask/plan read-only).
    agentMode: "agent",
    cursorBin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
  });

  let result;
  try {
    result = await spike.executeSpikeContract(contract);
  } catch (e) {
    result = {
      ok: false,
      summary: e instanceof Error ? e.message : String(e),
      artifacts: [],
      errorCode: "SPIKE_THROW",
      durationMs: 0,
      realCursorProcessInvoked: false,
      productionReadyClaimed: false as const,
      exitCode: null,
      signal: null,
      stdoutRedacted: "",
      stderrRedacted: "",
      timedOut: false,
      argvRedacted: [],
      mechanismBin: "",
    };
  }

  writeFileSync(path.join(PROOFS, "result.json"), JSON.stringify(result, null, 2));
  writeFileSync(path.join(PROOFS, "git-status-post-run.txt"), git(["status", "--short"]));
  writeFileSync(path.join(PROOFS, "git-diff-post-run.txt"), git(["diff", "--name-status"]));
  writeFileSync(path.join(PROOFS, "sandbox-listing-post-run.txt"), listing());
  writeFileSync(
    path.join(PROOFS, "output-summary-exists.txt"),
    String(existsSync(path.join(SANDBOX, "output/summary.txt"))),
  );

  console.log(JSON.stringify({ ok: result.ok, exitCode: result.exitCode, timedOut: result.timedOut, errorCode: result.errorCode }, null, 2));
  process.exit(result.ok ? 0 : 1);
}

main();
