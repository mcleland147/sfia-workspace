/**
 * C13 — durable in-process observation for LIVE Cursor attempts.
 * Owner remains D7 (cursor-attempt-service). This is not a second orchestrator:
 * it only calls reconcileCursorExecution (observe / no resend) until terminal.
 *
 * Survives browser disconnect. Survives HTTP request end.
 * Process restart: call resumeDispatchedLiveSupervisors() (observation only).
 */

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts } from "@/db/schema";
import type { CursorExecutionPlan, CursorLiveProjection } from "./types";

export type LiveSupervisorHandle = {
  attemptId: string;
  pilotId: string;
  projectId: string;
  startedAt: string;
  ticks: number;
  stopped: boolean;
  stopReason?: string;
};

type SupervisorEntry = LiveSupervisorHandle & {
  timer: ReturnType<typeof setInterval> | null;
  runningTick: boolean;
};

type SupervisorGlobal = {
  __sfiaCursorLiveSupervisors?: Map<string, SupervisorEntry>;
  __sfiaCursorLiveSupervisorResumeOnce?: boolean;
};

const TICK_MS = 3_000;
const MAX_TICKS = 800; // ~40 min at 3s

function store(): Map<string, SupervisorEntry> {
  const g = globalThis as unknown as SupervisorGlobal;
  if (!g.__sfiaCursorLiveSupervisors) {
    g.__sfiaCursorLiveSupervisors = new Map();
  }
  return g.__sfiaCursorLiveSupervisors;
}

function parseLive(resultJson: string | null | undefined): CursorLiveProjection {
  try {
    return JSON.parse(resultJson || "{}") as CursorLiveProjection;
  } catch {
    return {};
  }
}

function isTerminalStatus(status: string, live: CursorLiveProjection): boolean {
  if (status === "COMPLETED" || status === "FAILED" || status === "AMBIGUOUS") {
    return true;
  }
  const t = live.terminalStatus;
  return t === "finished" || t === "error" || t === "cancelled";
}

async function tickOnce(entry: SupervisorEntry): Promise<void> {
  if (entry.stopped || entry.runningTick) return;
  entry.runningTick = true;
  entry.ticks += 1;
  try {
    const { reconcileCursorExecution } = await import("./cursor-attempt-service");
    const result = await reconcileCursorExecution({
      pilotId: entry.pilotId,
      projectId: entry.projectId,
      attemptId: entry.attemptId,
    });
    if (
      isTerminalStatus(result.status, result.live) ||
      entry.ticks >= MAX_TICKS
    ) {
      stopCursorLiveSupervisor(
        entry.attemptId,
        entry.ticks >= MAX_TICKS ? "MAX_TICKS" : "TERMINAL",
      );
    }
  } catch (e) {
    // Provider errors: keep supervising; annotate via reconcile path when possible.
    if (entry.ticks >= MAX_TICKS) {
      stopCursorLiveSupervisor(entry.attemptId, "MAX_TICKS_AFTER_ERROR");
    }
    void e;
  } finally {
    entry.runningTick = false;
  }
}

/**
 * Start (or no-op if already active) a durable observer for a LIVE DISPATCHED attempt.
 * Never sends a second Cursor dispatch.
 */
export function ensureCursorLiveSupervisor(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
}): { started: boolean; alreadyActive: boolean; handle: LiveSupervisorHandle } {
  const map = store();
  const existing = map.get(input.attemptId);
  if (existing && !existing.stopped) {
    return {
      started: false,
      alreadyActive: true,
      handle: {
        attemptId: existing.attemptId,
        pilotId: existing.pilotId,
        projectId: existing.projectId,
        startedAt: existing.startedAt,
        ticks: existing.ticks,
        stopped: existing.stopped,
        stopReason: existing.stopReason,
      },
    };
  }

  const entry: SupervisorEntry = {
    attemptId: input.attemptId,
    pilotId: input.pilotId,
    projectId: input.projectId,
    startedAt: new Date().toISOString(),
    ticks: 0,
    stopped: false,
    timer: null,
    runningTick: false,
  };
  map.set(input.attemptId, entry);

  // Immediate first tick (async) then interval — independent of HTTP/browser.
  void tickOnce(entry);
  entry.timer = setInterval(() => {
    void tickOnce(entry);
  }, TICK_MS);
  // Allow process to exit in tests if only timer remains (unref).
  if (typeof entry.timer === "object" && entry.timer && "unref" in entry.timer) {
    try {
      (entry.timer as NodeJS.Timeout).unref();
    } catch {
      /* ignore */
    }
  }

  return {
    started: true,
    alreadyActive: false,
    handle: {
      attemptId: entry.attemptId,
      pilotId: entry.pilotId,
      projectId: entry.projectId,
      startedAt: entry.startedAt,
      ticks: entry.ticks,
      stopped: entry.stopped,
    },
  };
}

export function stopCursorLiveSupervisor(
  attemptId: string,
  reason = "STOPPED",
): boolean {
  const map = store();
  const entry = map.get(attemptId);
  if (!entry) return false;
  entry.stopped = true;
  entry.stopReason = reason;
  if (entry.timer) {
    clearInterval(entry.timer);
    entry.timer = null;
  }
  return true;
}

export function getCursorLiveSupervisor(
  attemptId: string,
): LiveSupervisorHandle | null {
  const entry = store().get(attemptId);
  if (!entry) return null;
  return {
    attemptId: entry.attemptId,
    pilotId: entry.pilotId,
    projectId: entry.projectId,
    startedAt: entry.startedAt,
    ticks: entry.ticks,
    stopped: entry.stopped,
    stopReason: entry.stopReason,
  };
}

export function listActiveCursorLiveSupervisors(): LiveSupervisorHandle[] {
  return [...store().values()]
    .filter((e) => !e.stopped)
    .map((e) => ({
      attemptId: e.attemptId,
      pilotId: e.pilotId,
      projectId: e.projectId,
      startedAt: e.startedAt,
      ticks: e.ticks,
      stopped: e.stopped,
      stopReason: e.stopReason,
    }));
}

/**
 * After process restart: re-attach observers for LIVE DISPATCHED attempts that
 * already have runId (ACK received). Observation only — never redispatch.
 */
export async function resumeDispatchedLiveSupervisors(): Promise<{
  resumed: number;
  skipped: number;
  attemptIds: string[];
}> {
  const rows = await db
    .select({
      id: effectAttempts.id,
      pilotId: effectAttempts.pilotId,
      projectId: effectAttempts.projectId,
      planJson: effectAttempts.planJson,
      resultJson: effectAttempts.resultJson,
      status: effectAttempts.status,
    })
    .from(effectAttempts)
    .where(
      and(
        eq(effectAttempts.status, "DISPATCHED"),
        eq(effectAttempts.kind, "CURSOR_EXECUTION"),
      ),
    );

  let resumed = 0;
  let skipped = 0;
  const attemptIds: string[] = [];
  for (const row of rows) {
    let plan: CursorExecutionPlan;
    try {
      plan = JSON.parse(row.planJson) as CursorExecutionPlan;
    } catch {
      skipped += 1;
      continue;
    }
    if (plan.effectProviderMode !== "LIVE") {
      skipped += 1;
      continue;
    }
    const live = parseLive(row.resultJson);
    if (!live.runId) {
      // ACK lost / no handle — leave AMBIGUOUS path to reconcile; do not supervise blindly.
      skipped += 1;
      continue;
    }
    const r = ensureCursorLiveSupervisor({
      pilotId: row.pilotId,
      projectId: row.projectId,
      attemptId: row.id,
    });
    if (r.started) {
      resumed += 1;
      attemptIds.push(row.id);
    } else {
      skipped += 1;
    }
  }
  return { resumed, skipped, attemptIds };
}

/** Idempotent once-per-process resume hook for server boot / first request. */
export async function ensureLiveSupervisorsResumedOnce(): Promise<void> {
  const g = globalThis as unknown as SupervisorGlobal;
  if (g.__sfiaCursorLiveSupervisorResumeOnce) return;
  g.__sfiaCursorLiveSupervisorResumeOnce = true;
  try {
    await resumeDispatchedLiveSupervisors();
  } catch {
    // Boot resume must not crash request path.
    g.__sfiaCursorLiveSupervisorResumeOnce = false;
  }
}
