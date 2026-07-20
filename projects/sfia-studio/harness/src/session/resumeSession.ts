import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { EventJournal } from "../journal/eventJournal.js";
import { verifyProofPack } from "../proof/verifyProofPack.js";
import type { JournalEvent, StudioAdapterResponse } from "../types/contracts.js";

/**
 * Rebuild derived Studio view from harness journal/proofs only.
 * Never recreates an implicit GO. Never invents success from incomplete state.
 */
export function resumeSessionFromProofDir(proofDir: string): StudioAdapterResponse {
  const journal = new EventJournal(proofDir, "resume");
  const events = journal.readAll();
  const projected = journal.projectLastState() ?? "UNKNOWN";
  const proofPack = verifyProofPack(proofDir, {
    requireSuccessArtifacts: projected === "CLOSED" && lastResultIsSuccess(events),
  });

  let report: Record<string, unknown> | null = null;
  const summaryPath = path.join(proofDir, "summary.json");
  if (existsSync(summaryPath)) {
    report = JSON.parse(readFileSync(summaryPath, "utf8")) as Record<string, unknown>;
  }

  const lastFail = [...events].reverse().find((e) => e.errorCode || e.result === "rejected" || e.result === "stop");
  const errorCode = lastFail?.errorCode;
  const stopOrTimeout = classifyStopTimeout(errorCode, lastFail?.result);
  const ok = projected === "CLOSED" && !errorCode && proofPack.ok && !!report;
  const contractHash =
    events.map((e) => e.contractHash).filter(Boolean).at(-1) ??
    (existsSync(path.join(proofDir, "contractHash.txt"))
      ? readFileSync(path.join(proofDir, "contractHash.txt"), "utf8").trim()
      : "");

  return {
    ok,
    statusSource: "harness",
    mode: "fixture",
    canonicalStatus: projected,
    goValid: false,
    errorCode,
    refusalReason: lastFail?.detail?.message
      ? String(lastFail.detail.message)
      : errorCode
        ? `Resumed with ${errorCode}`
        : !ok
          ? "Incomplete or non-success session — no implicit GO"
          : undefined,
    stopOrTimeout,
    contractHash,
    correlationId: events[0]?.correlationId ?? "resume",
    executionId: events.find((e) => e.executionId)?.executionId,
    proofDir,
    journalPath: journal.filePath,
    events,
    report,
    proofPack,
    reserves: [
      "État dérivé du journal harness uniquement",
      "Aucun GO implicite à la reprise",
      "Mode fixture / simulation",
    ],
    timestamps: {
      completedAt: events.at(-1)?.timestamp ?? new Date().toISOString(),
    },
    realGptClaimed: false,
    realCursorClaimed: false,
    remoteGitWrite: false,
  };
}

function lastResultIsSuccess(events: JournalEvent[]): boolean {
  const last = [...events].reverse().find((e) => e.result);
  return last?.result === "completed" || last?.result === "ok";
}

function classifyStopTimeout(
  errorCode?: string,
  result?: string,
): "STOP" | "timeout" | "refusal" | null {
  if (!errorCode && result !== "rejected" && result !== "stop") return null;
  if (errorCode === "GATE_STOP" || errorCode === "STOP" || result === "stop") return "STOP";
  if (errorCode?.includes("TIMEOUT")) return "timeout";
  if (errorCode || result === "rejected") return "refusal";
  return null;
}
