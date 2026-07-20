"use server";

import { execFile } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export interface IncrementDStudioRequest {
  requestId: string;
  correlationId: string;
  contractId: string;
  expectedBranch?: string;
  expectedHead?: string;
  gate?: unknown;
  mode: "fixture" | "live";
  mintGate?: boolean;
  fakeBehavior?: string;
}

export async function runIncrementDAction(req: IncrementDStudioRequest): Promise<unknown> {
  const harnessRoot = path.resolve(process.cwd(), "../harness");
  const work = mkdtempSync(path.join(os.tmpdir(), "sfia-inc-d-"));
  const payloadPath = path.join(work, "inc-d.json");
  writeFileSync(
    payloadPath,
    `${JSON.stringify(
      {
        requestId: req.requestId,
        correlationId: req.correlationId,
        contractId: req.contractId,
        expectedBranch: req.expectedBranch ?? "pending",
        expectedHead: req.expectedHead ?? "pending",
        gate: req.gate ?? null,
        proofDir: path.join(work, "proof"),
        mode: req.mode,
        mintGate: req.mintGate === true && req.mode === "fixture",
        fakeBehavior: req.fakeBehavior ?? "success",
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  const tsxBin = path.join(harnessRoot, "node_modules/tsx/dist/cli.mjs");
  const cliEntry = path.join(harnessRoot, "src/cli.ts");

  try {
    const { stdout } = await execFileAsync(
      process.execPath,
      [tsxBin, cliEntry, "inc-d-run", payloadPath],
      {
        cwd: harnessRoot,
        maxBuffer: 8 * 1024 * 1024,
        env: {
          ...process.env,
          SFIA_CURSOR_REAL_SPIKE: "0",
          SFIA_GPT_REAL_SPIKE: "0",
          ...(req.mode === "live" ? { SFIA_CURSOR_INC_D_LIVE: "1" } : {}),
        },
      },
    );
    return JSON.parse(stdout);
  } catch (err) {
    const e = err as { stdout?: string; message?: string };
    if (e.stdout) {
      try {
        return JSON.parse(e.stdout);
      } catch {
        /* fall through */
      }
    }
    return {
      ok: false,
      status: "FAILED_EXIT_CODE",
      errorCode: "ADAPTER_FORWARD_FAILED",
      errorMessage: e.message ?? "inc-d invoke failed",
      liveInvoked: false,
    };
  }
}
