"use server";

import { execFile } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { defaultIncEPackBuild } from "./defaultIncEPackBuild";

const execFileAsync = promisify(execFile);

export interface AnalysisStudioRequest {
  requestId?: string;
  correlationId?: string;
  analysisRequestId?: string;
  confirmedByUser: boolean;
  mode: "fixture" | "live";
  incompletePack?: boolean;
}

export async function runAnalysisAction(req: AnalysisStudioRequest): Promise<unknown> {
  const harnessRoot = path.resolve(process.cwd(), "../harness");
  const work = mkdtempSync(path.join(os.tmpdir(), "sfia-inc-e-"));
  const payloadPath = path.join(work, "analyse.json");
  const analysisRequestId = req.analysisRequestId ?? `anl-ui-${Date.now()}`;
  const packBuild = defaultIncEPackBuild(analysisRequestId);
  if (req.incompletePack) {
    (packBuild as { reviewPackCompleteness: string }).reviewPackCompleteness = "incomplete";
  }
  writeFileSync(
    payloadPath,
    `${JSON.stringify(
      {
        analysisRequestId,
        requestId: req.requestId ?? packBuild.report.requestId,
        correlationId: req.correlationId ?? packBuild.report.correlationId,
        packBuild,
        confirmedByUser: req.confirmedByUser,
        proofDir: path.join(work, "proof"),
        live: req.mode === "live",
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  const tsxBin = path.join(harnessRoot, "node_modules/tsx/dist/cli.mjs");
  const cliEntry = path.join(harnessRoot, "src/cli.ts");
  const cmd = req.mode === "live" ? "analyse-live" : "analyse-fixture";

  try {
    const { stdout } = await execFileAsync(
      process.execPath,
      [tsxBin, cliEntry, cmd, payloadPath],
      {
        cwd: harnessRoot,
        maxBuffer: 8 * 1024 * 1024,
        env: {
          ...process.env,
          SFIA_CURSOR_REAL_SPIKE: "0",
          SFIA_GPT_REAL_SPIKE: "0",
          ...(req.mode === "live" ? { SFIA_GPT_INC_E_LIVE: "1" } : {}),
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
      errorMessage: e.message ?? "analyse invoke failed",
      liveInvoked: false,
      retriesAttempted: 0,
    };
  }
}
