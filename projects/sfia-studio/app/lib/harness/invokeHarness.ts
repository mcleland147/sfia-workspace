import { execFile } from "node:child_process";
import { mkdtempSync, writeFileSync, mkdirSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import type { StudioHarnessRequest, StudioHarnessView } from "./types";

const execFileAsync = promisify(execFile);

/**
 * Thin process boundary: map JSON → harness CLI `studio-run` / `resume-session`.
 * Does not validate GO. Does not call live GPT APIs or real Cursor.
 */
export async function invokeHarnessStudioRun(
  request: StudioHarnessRequest,
): Promise<StudioHarnessView> {
  const harnessRoot = path.resolve(process.cwd(), "../harness");
  const work = mkdtempSync(path.join(os.tmpdir(), "sfia-studio-bridge-"));
  mkdirSync(work, { recursive: true });
  const payloadPath = path.join(work, "payload.json");
  writeFileSync(payloadPath, `${JSON.stringify(request, null, 2)}\n`, "utf8");

  const tsxBin = path.join(harnessRoot, "node_modules/tsx/dist/cli.mjs");
  const cliEntry = path.join(harnessRoot, "src/cli.ts");
  const cmd = request.action === "resume" ? "resume-session" : "studio-run";
  const cmdArg =
    request.action === "resume"
      ? (request.proofDir ?? "")
      : payloadPath;

  if (request.action === "resume" && !request.proofDir) {
    return {
      ok: false,
      statusSource: "harness",
      mode: "fixture",
      canonicalStatus: "REJECTED",
      goValid: false,
      errorCode: "RESUME_PROOF_DIR_MISSING",
      refusalReason: "proofDir required for resume",
      stopOrTimeout: "refusal",
      contractHash: request.contractHash,
      correlationId: request.correlationId,
      proofDir: "",
      events: [],
      report: null,
      reserves: ["Adaptateur sans autorité"],
      timestamps: { completedAt: new Date().toISOString() },
      realGptClaimed: false,
      realCursorClaimed: false,
      remoteGitWrite: false,
    };
  }

  try {
    const { stdout } = await execFileAsync(
      process.execPath,
      [tsxBin, cliEntry, cmd, cmdArg],
      {
        cwd: harnessRoot,
        maxBuffer: 12 * 1024 * 1024,
        env: { ...process.env, SFIA_CURSOR_REAL_SPIKE: "0" },
      },
    );
    return JSON.parse(stdout) as StudioHarnessView;
  } catch (err) {
    const e = err as { stdout?: string; stderr?: string; message?: string };
    if (e.stdout) {
      try {
        return JSON.parse(e.stdout) as StudioHarnessView;
      } catch {
        /* fall through */
      }
    }
    return {
      ok: false,
      statusSource: "harness",
      mode: "fixture",
      canonicalStatus: "FAILED",
      goValid: false,
      errorCode: "ADAPTER_FORWARD_FAILED",
      refusalReason: e.stderr || e.message || "harness invoke failed",
      stopOrTimeout: "refusal",
      contractHash: request.contractHash,
      correlationId: request.correlationId,
      proofDir: request.proofDir ?? "",
      events: [],
      report: null,
      reserves: ["Adaptateur sans autorité — échec de transmission"],
      timestamps: { completedAt: new Date().toISOString() },
      realGptClaimed: false,
      realCursorClaimed: false,
      remoteGitWrite: false,
    };
  }
}
