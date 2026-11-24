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

/**
 * Resolve Cursor SDK API key: env first, then FileCredentialStore (~/.cursor/sdk/auth.json).
 * Never logs or returns the secret to callers beyond Agent.create.
 */
export async function resolveCursorApiKey(
  env: NodeJS.ProcessEnv = process.env,
): Promise<{ apiKey: string | null; source: "ENV" | "FILE_CREDENTIAL_STORE" | "NONE" }> {
  const fromEnv = (env.CURSOR_API_KEY || "").trim();
  if (fromEnv) return { apiKey: fromEnv, source: "ENV" };
  try {
    const { FileCredentialStore } = await import("@cursor/sdk");
    const store = new FileCredentialStore();
    const creds = await store.load();
    const key = typeof creds?.apiKey === "string" ? creds.apiKey.trim() : "";
    if (key) return { apiKey: key, source: "FILE_CREDENTIAL_STORE" };
  } catch {
    /* store unavailable */
  }
  return { apiKey: null, source: "NONE" };
}

/** Default model when plan omits modelId — SDK rejects create without a model. */
export function resolveCursorModelId(
  modelId: string | undefined,
  env: NodeJS.ProcessEnv = process.env,
): string {
  const fromInput = (modelId || "").trim();
  if (fromInput) return fromInput;
  const fromEnv = (env.SFIA_CURSOR_MODEL_ID || "").trim();
  if (fromEnv) return fromEnv;
  return "composer-2.5";
}

export type CursorObserveResult = {
  terminalStatus: CursorLiveProjection["terminalStatus"];
  lastActivitySummary: string | null;
  resultText: string | null;
  limits: string[];
};

/**
 * Observational LIVE reconcile — never sends a second instruction.
 * Uses Agent.getRun + wait when a runId is known.
 */
export async function observeLiveCursorRun(input: {
  runId: string;
  agentId: string | null;
  workspaceCwd: string;
  waitMs?: number;
}): Promise<CursorObserveResult> {
  const limits: string[] = ["LIVE_SDK", "OBSERVE_NO_RESEND"];
  try {
    const keyResolved = await resolveCursorApiKey();
    if (!keyResolved.apiKey) {
      return {
        terminalStatus: null,
        lastActivitySummary: "SDK_OBSERVE_NO_API_KEY",
        resultText: null,
        limits: [...limits, "OBSERVE_NO_API_KEY — rester DISPATCHED"],
      };
    }
    const { Agent } = await import("@cursor/sdk");
    const run = await Agent.getRun(input.runId, {
      runtime: "local",
      cwd: input.workspaceCwd,
      // SDK typings lag behind runtime auth options used in LIVE observe.
      ...({ apiKey: keyResolved.apiKey } as Record<string, unknown>),
    } as { runtime?: "local"; cwd?: string });
    if (!run) {
      return {
        terminalStatus: null,
        lastActivitySummary: "SDK_GET_RUN_EMPTY",
        resultText: null,
        limits: [...limits, "GET_RUN_EMPTY — pas de terminal inventé"],
      };
    }
    const statusRaw = run.status;
    const statusNow =
      typeof statusRaw === "string"
        ? statusRaw
        : statusRaw && typeof statusRaw === "object" && "type" in (statusRaw as object)
          ? String((statusRaw as { type?: string }).type ?? "")
          : statusRaw != null
            ? String(statusRaw)
            : null;
    const normalized = (statusNow || "").toLowerCase();
    if (
      normalized === "finished" ||
      normalized === "error" ||
      normalized === "cancelled"
    ) {
      return {
        terminalStatus: normalized as "finished" | "error" | "cancelled",
        lastActivitySummary: `SDK_OBSERVED_${normalized.toUpperCase()}`,
        resultText: typeof run.result === "string" ? run.result : null,
        limits: [...limits, `API_KEY_SOURCE_${keyResolved.source}`],
      };
    }
    // Detached runs may refuse wait() — never invent terminal from that failure.
    if (typeof run.wait === "function") {
      try {
        const waited = await run.wait();
        const wStatus = String(waited.status ?? "").toLowerCase();
        const terminal =
          wStatus === "finished" ||
          wStatus === "error" ||
          wStatus === "cancelled"
            ? (wStatus as "finished" | "error" | "cancelled")
            : null;
        return {
          terminalStatus: terminal,
          lastActivitySummary: `SDK_WAIT_${wStatus.toUpperCase() || "EMPTY"}`,
          resultText: typeof waited.result === "string" ? waited.result : null,
          limits: [
            ...limits,
            `API_KEY_SOURCE_${keyResolved.source}`,
            "WAIT_COMPLETED_IN_OBSERVE",
          ],
        };
      } catch (waitErr) {
        return {
          terminalStatus: null,
          lastActivitySummary: "SDK_WAIT_DETACHED_OR_FAILED",
          resultText: null,
          limits: [
            ...limits,
            `WAIT_FAILED:${String((waitErr as Error)?.message ?? waitErr).slice(0, 80)}`,
            statusNow ? `LAST_STATUS_${statusNow}` : "LAST_STATUS_NONE",
          ],
        };
      }
    }
    return {
      terminalStatus: null,
      lastActivitySummary: statusNow
        ? `SDK_STATUS_${statusNow.toUpperCase()}`
        : "SDK_STATUS_UNKNOWN_NON_TERMINAL",
      resultText: null,
      limits: [...limits, "NON_TERMINAL_NO_WAIT"],
    };
  } catch (e) {
    // Fail closed: do NOT stamp terminalStatus=unknown (would look like resolution).
    return {
      terminalStatus: null,
      lastActivitySummary: "SDK_OBSERVE_FAILED",
      resultText: null,
      limits: [
        ...limits,
        `OBSERVE_FAILED:${String((e as Error)?.message ?? e).slice(0, 80)}`,
      ],
    };
  }
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

/** When true, SCRIPTED returns DISPATCHED/RUNNING first; reconcile advances to finished. */
export function isScriptedPhasedMode(env: NodeJS.ProcessEnv = process.env): boolean {
  return (env.SFIA_CURSOR_SCRIPTED_PHASED || "").trim() === "1";
}

export function getScriptedRun(attemptId: string) {
  return scriptedRuns.get(attemptId) ?? null;
}

/** Advance a phased SCRIPTED run to finished — used by reconcile, never a second send. */
export function advanceScriptedRunToFinished(attemptId: string): {
  agentId: string;
  runId: string;
  resultText: string;
  lastActivitySummary: string;
} | null {
  const existing = scriptedRuns.get(attemptId);
  if (!existing) return null;
  if (existing.status === "finished") {
    return {
      agentId: existing.agentId,
      runId: existing.runId,
      resultText: existing.resultText,
      lastActivitySummary: "SCRIPTED_ALREADY_FINISHED",
    };
  }
  if (existing.status !== "running") return null;
  existing.status = "finished";
  return {
    agentId: existing.agentId,
    runId: existing.runId,
    resultText: existing.resultText,
    lastActivitySummary: "SCRIPTED_OBSERVATION_FINISHED",
  };
}

function buildScriptedReport(
  attemptId: string,
  instructionFingerprint: string,
  contractFingerprint?: string,
): string {
  return [
    `# Rapport de réalisation (SCRIPTED)`,
    ``,
    `attemptId: ${attemptId}`,
    `instructionFingerprint: ${instructionFingerprint}`,
    `contractFingerprint: ${contractFingerprint ?? instructionFingerprint}`,
    ``,
    `## Inventaire`,
    `filesCreated: scripted-proof/${attemptId}.txt`,
    `filesModified: (aucune)`,
    `- inventaire: aucune modification réelle (mode scripted)`,
    ``,
    `## Tests`,
    `testsDeclared: (aucune)`,
    `- Non exécutés (SCRIPTED) — aucune capture`,
    ``,
    `## Réserves`,
    `- Preuve LIVE SDK non produite`,
    `- RAPPORT_SCRIPTED — acquisition adapter, pas RUNTIME LIVE`,
  ].join("\n");
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
    const resultText = buildScriptedReport(input.attemptId, input.instructionFingerprint);
    const phased =
      isScriptedPhasedMode() || input.waitForTerminal === false;
    scriptedRuns.set(input.idempotencyKey, {
      agentId,
      runId,
      status: phased ? "running" : "finished",
      instructionFingerprint: input.instructionFingerprint,
      resultText,
    });
    // C12 T-04 — same DROP_ACK fault as LIVE (deterministic SCRIPTED path).
    if ((process.env.SFIA_CURSOR_FAULT_AFTER_SEND || "").trim().toUpperCase() === "DROP_ACK") {
      throw new Error(
        "SFIA_CURSOR_FAULT_AFTER_SEND=DROP_ACK — ACK perdu après effet SDK possible",
      );
    }
    if (phased) {
      return {
        mode,
        sendRequestedAt,
        ackReceivedAt: sendRequestedAt,
        runObservedAt: sendRequestedAt,
        agentId,
        runId,
        terminalStatus: null,
        lastActivitySummary: "SCRIPTED_OBSERVATION_RUNNING",
        resultText: null,
        limits: [
          "SCRIPTED_MODE",
          "SCRIPTED_PHASED",
          "NO_REAL_SIDE_EFFECT",
          "REQUIRES_RECONCILE_TO_FINISH",
        ],
      };
    }
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
  const keyResolved = await resolveCursorApiKey();
  if (!keyResolved.apiKey) {
    throw new Error(
      "CURSOR_SDK_UNAVAILABLE — ni CURSOR_API_KEY ni FileCredentialStore",
    );
  }
  const modelId = resolveCursorModelId(input.modelId);
  const { Agent } = await import("@cursor/sdk");
  const agent = await Agent.create({
    apiKey: keyResolved.apiKey,
    model: { id: modelId },
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
  /**
   * C12 / T-04 — deterministic fault injection AFTER SDK send accepted.
   * DROP_ACK: throw before Studio persists agentId/runId → AMBIGUOUS + priorSend.
   * Never use outside DEV fault tests.
   */
  const fault = (process.env.SFIA_CURSOR_FAULT_AFTER_SEND || "").trim().toUpperCase();
  if (fault === "DROP_ACK") {
    throw new Error(
      "SFIA_CURSOR_FAULT_AFTER_SEND=DROP_ACK — ACK perdu après effet SDK possible",
    );
  }
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
        `API_KEY_SOURCE_${keyResolved.source}`,
        `MODEL_${modelId}`,
        "REPORT_MUST_BE_INGESTED_SEPARATELY",
        "SUPERVISION_VIA_D7_LIVE_SUPERVISOR_OR_RECONCILE",
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
    limits: [
      "LIVE_SDK",
      `API_KEY_SOURCE_${keyResolved.source}`,
      `MODEL_${modelId}`,
      "REPORT_MUST_BE_INGESTED_SEPARATELY",
      "WAIT_COMPLETED_IN_ADAPTER",
    ],
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
    const keyResolved = await resolveCursorApiKey();
    const { Agent } = await import("@cursor/sdk");
    const run = await Agent.getRun(input.runId, {
      runtime: "local",
      cwd: input.workspaceCwd,
      ...(keyResolved.apiKey ? { apiKey: keyResolved.apiKey } : {}),
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
