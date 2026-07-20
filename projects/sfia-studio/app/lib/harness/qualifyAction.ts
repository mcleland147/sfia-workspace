"use server";

import { execFile } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export interface QualifyStudioRequest {
  requestId: string;
  correlationId: string;
  demandText: string;
  confirmedByUser: boolean;
  /** When true, invoke qualify-live (requires server env). Default fixture for UI demos without live. */
  live?: boolean;
  authorizedContext?: string[];
}

export async function runQualificationAction(req: QualifyStudioRequest): Promise<unknown> {
  const harnessRoot = path.resolve(process.cwd(), "../harness");
  const work = mkdtempSync(path.join(os.tmpdir(), "sfia-inc-c-"));
  const payloadPath = path.join(work, "qualify.json");
  writeFileSync(
    payloadPath,
    `${JSON.stringify(
      {
        requestId: req.requestId,
        correlationId: req.correlationId,
        demandText: req.demandText,
        confirmedByUser: req.confirmedByUser,
        live: req.live === true,
        authorizedContext: req.authorizedContext ?? [
          "SFIA Studio vertical slice POC",
          "No Cursor live",
          "No remote Git writes",
        ],
        proofDir: path.join(work, "proof"),
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  const tsxBin = path.join(harnessRoot, "node_modules/tsx/dist/cli.mjs");
  const cliEntry = path.join(harnessRoot, "src/cli.ts");
  const cmd = req.live === true ? "qualify-live" : "qualify-fixture";

  try {
    const { stdout } = await execFileAsync(
      process.execPath,
      [tsxBin, cliEntry, cmd, payloadPath],
      {
        cwd: harnessRoot,
        maxBuffer: 8 * 1024 * 1024,
        env: {
          ...process.env,
          // Never force live from Studio unless caller asked; keep Cursor spikes off.
          SFIA_CURSOR_REAL_SPIKE: "0",
          SFIA_GPT_REAL_SPIKE: "0",
          ...(req.live === true ? { SFIA_GPT_INC_C_LIVE: "1" } : {}),
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
      status: "PROVIDER_ERROR",
      errorCode: "ADAPTER_FORWARD_FAILED",
      errorMessage: e.message ?? "qualification invoke failed",
      liveInvoked: false,
      retriesAttempted: 0,
      model: "gpt-5.4-mini",
    };
  }
}
