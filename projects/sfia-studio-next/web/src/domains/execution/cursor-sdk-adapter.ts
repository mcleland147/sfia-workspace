/**
 * D7 Cursor SDK adapter — SCRIPTED (tests) or LIVE (@cursor/sdk local).
 * Studio does not administer Cursor Desktop / MCP / OAuth here.
 *
 * Invariants:
 * - send() requested ≠ run observed
 * - ACK received ≠ work finished
 * - timeout ≠ absence of effect
 * - silence ≠ failure
 * - STOP requested ≠ stop observed
 * - cancel ≠ rollback
 * - run finished ≠ conforming result
 * - missing report ≠ no work done
 */

import type { CursorLiveProjection } from "./types";

export type CursorAdapterMode = "SCRIPTED" | "LIVE";

export type CursorDispatchInput = {
  attemptId: string;
  /** Exact authorized instruction bytes. */
  instructionText: string;
  instructionFingerprint: string;
  workspaceCwd: string;
  /** SDK idempotency — must equal attemptId to prevent blind retry. */
  idempotencyKey: string;
  modelId?: string;
  /**
   * When false (LIVE default for HTTP), return after ACK / first observation.
   * SCRIPTED still completes immediately. Full wait remains available for workers.
   */
  waitForTerminal?: boolean;
};

export type CursorDispatchResult = {
  mode: CursorAdapterMode;
  sendRequestedAt: string;
  ackReceivedAt: string | null;
  runObservedAt: string | null;
  agentId: string | null;
  runId: string | null;
  terminalStatus: CursorLiveProjection["terminalStatus"];
  lastActivitySummary: string | null;
  resultText: string | null;
  limits: string[];
};

export type CursorStopResult = {
  stopRequestedAt: string;
  stopObservedAt: string | null;
  terminalStatus: CursorLiveProjection["terminalStatus"];
  limits: string[];
};

export function resolveCursorAdapterMode(
  env: NodeJS.ProcessEnv = process.env,
): CursorAdapterMode {
  const raw = (env.SFIA_CURSOR_EFFECT_MODE || "").trim().toUpperCase();
  if (raw === "LIVE") return "LIVE";
  return "SCRIPTED";
}

/** In-memory scripted runs for DETERMINISTIC tests — not a parallel business path. */
const scriptedRuns = new Map<
  string,
  {
    agentId: string;
    runId: string;
    status: "running" | "finished" | "error" | "cancelled";
    instructionFingerprint: string;
    resultText: string;
  }
>();

export function __resetScriptedCursorRunsForTests(): void {
  scriptedRuns.clear();
}

export async function dispatchCursorRun(
  input: CursorDispatchInput,
  mode = resolveCursorAdapterMode(),
): Promise<CursorDispatchResult> {
  const sendRequestedAt = new Date().toISOString();
  if (mode === "SCRIPTED") {
    const existing = scriptedRuns.get(input.idempotencyKey);
    if (existing) {
      return {
        mode,
        sendRequestedAt,
        ackReceivedAt: sendRequestedAt,
        runObservedAt: sendRequestedAt,
        agentId: existing.agentId,
        runId: existing.runId,
        terminalStatus: existing.status === "running" ? null : existing.status,
        lastActivitySummary: "SCRIPTED_IDEMPOTENT_REPLAY",
        resultText: existing.status === "finished" ? existing.resultText : null,
        limits: ["SCRIPTED_MODE", "IDEMPOTENT_REPLAY"],
      };
    }
    const agentId = `scripted-agent-${input.attemptId}`;
    const runId = `scripted-run-${input.attemptId}`;
    const resultText = [
      `# Rapport de réalisation (SCRIPTED)`,
      ``,
      `attemptId: ${input.attemptId}`,
      `instructionFingerprint: ${input.instructionFingerprint}`,
      ``,
      `## Inventaire`,
      `- Aucun fichier modifié (mode scripted)`,
      ``,
      `## Tests`,
      `- Non exécutés (SCRIPTED)`,
      ``,
      `## Réserves`,
      `- Preuve LIVE SDK non produite`,
    ].join("\n");
    scriptedRuns.set(input.idempotencyKey, {
      agentId,
      runId,
      status: "finished",
      instructionFingerprint: input.instructionFingerprint,
      resultText,
    });
    return {
      mode,
      sendRequestedAt,
      ackReceivedAt: sendRequestedAt,
      runObservedAt: sendRequestedAt,
      agentId,
      runId,
      terminalStatus: "finished",
      lastActivitySummary: "SCRIPTED_FINISHED",
      resultText,
      limits: ["SCRIPTED_MODE", "NO_REAL_SIDE_EFFECT"],
    };
  }

  // LIVE path — dynamic import so unit tests without entitlement still load.
  const { Agent } = await import("@cursor/sdk");
  const agent = await Agent.create({
    apiKey: process.env.CURSOR_API_KEY,
    model: input.modelId ? { id: input.modelId } : undefined,
    local: { cwd: input.workspaceCwd },
  });
  let ackReceivedAt: string | null = null;
  let runObservedAt: string | null = null;
  let lastActivitySummary: string | null = null;
  const run = await agent.send(input.instructionText, {
    idempotencyKey: input.idempotencyKey,
    onDelta: () => {
      if (!runObservedAt) runObservedAt = new Date().toISOString();
      lastActivitySummary = "SDK_DELTA";
    },
  });
  ackReceivedAt = new Date().toISOString();
  if (!runObservedAt) runObservedAt = ackReceivedAt;

  const waitForTerminal = input.waitForTerminal === true;
  if (!waitForTerminal) {
    return {
      mode,
      sendRequestedAt,
      ackReceivedAt,
      runObservedAt,
      agentId: agent.agentId,
      runId: run.id ?? null,
      terminalStatus: null,
      lastActivitySummary: lastActivitySummary ?? "SDK_ACK_ACCEPTED_NOT_TERMINAL",
      resultText: null,
      limits: [
        "LIVE_SDK",
        "DISPATCH_ACCEPTED_WITHOUT_WAIT",
        "REPORT_MUST_BE_INGESTED_SEPARATELY",
        "SUPERVISION_REQUIRES_RECONCILE_OR_WORKER",
      ],
    };
  }

  const waited = await run.wait();
  const terminal =
    waited.status === "finished" ||
    waited.status === "error" ||
    waited.status === "cancelled"
      ? waited.status
      : "unknown";
  return {
    mode,
    sendRequestedAt,
    ackReceivedAt,
    runObservedAt,
    agentId: agent.agentId,
    runId: run.id ?? null,
    terminalStatus: terminal,
    lastActivitySummary: lastActivitySummary ?? `SDK_${String(waited.status).toUpperCase()}`,
    resultText: typeof waited.result === "string" ? waited.result : null,
    limits: ["LIVE_SDK", "REPORT_MUST_BE_INGESTED_SEPARATELY", "WAIT_COMPLETED_IN_ADAPTER"],
  };
}

export async function stopCursorRun(input: {
  attemptId: string;
  agentId: string | null;
  runId: string | null;
  workspaceCwd: string;
  mode?: CursorAdapterMode;
}): Promise<CursorStopResult> {
  const mode = input.mode ?? resolveCursorAdapterMode();
  const stopRequestedAt = new Date().toISOString();
  if (mode === "SCRIPTED") {
    const existing = scriptedRuns.get(input.attemptId);
    if (existing && existing.status === "running") {
      existing.status = "cancelled";
    }
    return {
      stopRequestedAt,
      stopObservedAt: new Date().toISOString(),
      terminalStatus: "cancelled",
      limits: ["SCRIPTED_MODE", "CANCEL_IS_NOT_ROLLBACK"],
    };
  }
  // LIVE: best-effort cancel via run handle if recoverable; otherwise UNKNOWN.
  if (!input.runId || !input.agentId) {
    return {
      stopRequestedAt,
      stopObservedAt: null,
      terminalStatus: "unknown",
      limits: ["STOP_REQUESTED_WITHOUT_RUN_HANDLE", "CANCEL_IS_NOT_ROLLBACK"],
    };
  }
  try {
    const { Agent } = await import("@cursor/sdk");
    const run = await Agent.getRun(input.runId, {
      runtime: "local",
      cwd: input.workspaceCwd,
    });
    if (run && typeof run.cancel === "function") {
      await run.cancel();
      return {
        stopRequestedAt,
        stopObservedAt: new Date().toISOString(),
        terminalStatus: "cancelled",
        limits: ["LIVE_CANCEL_OBSERVED", "CANCEL_IS_NOT_ROLLBACK"],
      };
    }
  } catch {
    // fall through
  }
  return {
    stopRequestedAt,
    stopObservedAt: null,
    terminalStatus: "unknown",
    limits: ["STOP_REQUESTED_OBSERVATION_UNCERTAIN", "CANCEL_IS_NOT_ROLLBACK"],
  };
}
