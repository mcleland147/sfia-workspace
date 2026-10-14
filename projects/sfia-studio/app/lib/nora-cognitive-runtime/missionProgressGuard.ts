/**
 * P6 extended execution — progress guard against unproductive tool loops
 * and observable progress signals for productive budget extension.
 * Never invents progress from model narrative.
 */

export type MissionProgressSample = {
  toolName: string;
  /** Stable identity such as path / query — empty when unknown. */
  targetKey: string;
  /**
   * Observable result fingerprint when available (returned range, status, bytes).
   * Distinct fingerprints on the same target count as progress (e.g. advancing windows).
   * Identical fingerprints on the same target count toward the no-progress streak.
   */
  resultFingerprint?: string;
};

export type MissionProgressDecision =
  | { action: "continue"; reasonCodes: string[] }
  | { action: "stop_no_progress"; reasonCodes: string[] };

/** Delivery parameter — identical tool+target+result streaks before controlled stop. */
export const MISSION_NO_PROGRESS_REPEAT_LIMIT = 3;

export const MISSION_NO_PROGRESS_STOP_STOCK =
  "Mission arrêtée — même outil et même cible répétés sans progression observable. " +
  "Reformulez la demande ou changez de cible avant de relancer.";

/** Controlled stop when MissionProgressGuard fires (Product tool path). */
export class MissionNoProgressStoppedError extends Error {
  readonly code = "NORA_MISSION_NO_PROGRESS";
  readonly reasonCodes: readonly string[];

  constructor(reasonCodes: readonly string[]) {
    super(MISSION_NO_PROGRESS_STOP_STOCK);
    this.name = "MissionNoProgressStoppedError";
    this.reasonCodes = reasonCodes;
  }
}

/** Stable tool target from wire args only (never model narrative). */
export function missionProgressTargetKey(
  _toolName: string,
  args: Record<string, unknown>,
): string {
  const asTrim = (v: unknown): string =>
    typeof v === "string" ? v.trim() : "";
  const asLine = (v: unknown): string => {
    if (typeof v === "number" && Number.isFinite(v)) {
      return String(Math.trunc(v));
    }
    return asTrim(v);
  };

  const path = asTrim(args.path);
  const query = asTrim(args.query);
  const ref = asTrim(args.ref);
  const startLine = asLine(args.startLine);
  const endLine = asLine(args.endLine);

  if (path && (startLine || endLine)) {
    return `${path}@${startLine || "*"}-${endLine || "*"}`;
  }
  if (path && query) {
    return `${path}::${query}`;
  }
  if (path) return path;
  if (query) return query;
  if (ref) return ref;
  return "";
}

/** True when fingerprint represents a successful, information-bearing tool result. */
export function isUsefulMissionProgressFingerprint(fp: string): boolean {
  const t = fp.trim();
  if (!t || t === "nofp" || t === "empty") return false;
  if (t.startsWith("fail") || t.startsWith("denied") || t.startsWith("?")) {
    return false;
  }
  // ToolCallResult ok path: "ok|..."
  return t.startsWith("ok|") || t.startsWith("ok");
}

/** Result fingerprint from tool route payload (observable only). */
export function missionProgressResultFingerprint(result: unknown): string {
  if (result == null || typeof result !== "object") {
    return typeof result === "string" ? `s:${result.length}` : "empty";
  }
  const row = result as Record<string, unknown>;
  const status =
    typeof row.status === "string" ? row.status.toLowerCase() : "";
  if (status === "denied" || status === "failed") {
    return `fail|status:${status}`;
  }
  const ok = row.ok === true ? "ok" : row.ok === false ? "fail" : "?";
  const data =
    row.data && typeof row.data === "object"
      ? (row.data as Record<string, unknown>)
      : row;
  const path = typeof data.path === "string" ? data.path : "";
  const rs =
    typeof data.returnedStartLine === "number"
      ? data.returnedStartLine
      : typeof data.startLine === "number"
        ? data.startLine
        : "";
  const re =
    typeof data.returnedEndLine === "number"
      ? data.returnedEndLine
      : typeof data.endLine === "number"
        ? data.endLine
        : "";
  const bytes =
    typeof data.bytes === "number"
      ? data.bytes
      : typeof data.completeLineCount === "number"
        ? data.completeLineCount
        : "";
  const truncated = data.truncated === true ? "t" : "f";
  return `${ok}|${path}|${rs}-${re}|${bytes}|${truncated}`;
}

/**
 * Track consecutive identical tool targets+results.
 * Productive extension requires NEW useful completions since the last extension
 * checkpoint — failed/denied fingerprints never unlock an extension.
 */
export class MissionProgressGuard {
  private lastKey: string | null = null;
  private streak = 0;
  private readonly limit: number;
  private readonly seenFingerprints = new Set<string>();
  private uniqueTargets = 0;
  /** Count of distinct useful (ok) fingerprints observed. */
  private usefulCompletions = 0;
  /** Checkpoint: usefulCompletions at last productive extension (or 0 at start). */
  private usefulCompletionsAtExtension = 0;

  /** Set when observe returns stop_no_progress (same turn, before next model call). */
  stopped = false;
  stopReasonCodes: readonly string[] = [];

  constructor(limit = MISSION_NO_PROGRESS_REPEAT_LIMIT) {
    this.limit = Math.max(2, Math.trunc(limit));
  }

  observe(sample: MissionProgressSample): MissionProgressDecision {
    const tool = sample.toolName.trim() || "unknown_tool";
    const target = sample.targetKey.trim();
    const fp = (sample.resultFingerprint ?? "").trim() || "nofp";
    const key = `${tool}::${target}::${fp}`;

    if (!this.seenFingerprints.has(key)) {
      this.seenFingerprints.add(key);
      if (target) this.uniqueTargets += 1;
      if (isUsefulMissionProgressFingerprint(fp)) {
        this.usefulCompletions += 1;
      }
    }

    if (this.lastKey === key) {
      this.streak += 1;
    } else {
      this.lastKey = key;
      this.streak = 1;
    }
    if (this.streak >= this.limit) {
      const reasonCodes = [
        "mission_no_progress_repeat",
        `streak:${this.streak}`,
        `tool:${tool}`,
      ];
      this.stopped = true;
      this.stopReasonCodes = reasonCodes;
      return {
        action: "stop_no_progress",
        reasonCodes,
      };
    }
    return {
      action: "continue",
      reasonCodes: [`progress_streak:${this.streak}`],
    };
  }

  /**
   * True only when NEW useful tool completions occurred since the last extension
   * (or since mission start). New FAILED/DENIED fingerprints never qualify.
   */
  hasVerifiableProgressForExtension(): boolean {
    if (this.stopped) return false;
    return this.usefulCompletions > this.usefulCompletionsAtExtension;
  }

  /** Mark that a productive extension consumed the current useful-progress window. */
  markExtensionConsumed(): void {
    this.usefulCompletionsAtExtension = this.usefulCompletions;
  }

  snapshot(): {
    uniqueTargets: number;
    fingerprintCount: number;
    usefulCompletions: number;
    usefulCompletionsAtExtension: number;
    stopped: boolean;
  } {
    return {
      uniqueTargets: this.uniqueTargets,
      fingerprintCount: this.seenFingerprints.size,
      usefulCompletions: this.usefulCompletions,
      usefulCompletionsAtExtension: this.usefulCompletionsAtExtension,
      stopped: this.stopped,
    };
  }
}
