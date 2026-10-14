/**
 * P2 — Controlled Cognitive Continuation helpers (OpenAI-native-first R22).
 *
 * USE: Runner.run(agent, RunState, { maxTurns }) — native resume after MaxTurnsExceededError.state
 * ADAPT: Product mission loop that resumes automatically within mission/campaign budget
 * DEFER: durable serialized RunState across process restart (needs Morris architecture GO)
 *
 * CAS A = new user request in session (existing Memory B) — KEEP
 * CAS B = SDK RunState resume — USE for segment boundaries
 * CAS C = autonomous same-mission continuation — COMBINE B inside one Product turn
 *
 * Never resets campaign/tool counters. Never invents Product completion.
 */
import { LEGACY_DEFAULT_MAX_TURNS } from "./adaptiveTurnBudget";

/**
 * Per-segment Runner maxTurns. Matches legacy Product default so multi-segment
 * continuation is exercised when mission budget > 5 (P1 adaptive).
 */
export const CONTINUATION_SEGMENT_MAX_TURNS = LEGACY_DEFAULT_MAX_TURNS; // 5

/**
 * Hard guard — prevent infinite segment loops even if counters desync.
 * Raised with mission ceiling so productive documentary work can continue
 * without resetting counters (each segment resumes native RunState).
 */
export const CONTINUATION_MAX_SEGMENTS = 8;

/** Max automatic productive extensions beyond the initial mission budget. */
export const PRODUCTIVE_EXTENSION_MAX = 3;

export type ContinuationStopReason =
  | "complete"
  | "mission_budget_exhausted"
  | "segment_limit_no_state"
  | "max_segments"
  | "campaign_or_provider_stop"
  | "mission_no_progress"
  | "safety_envelope_exhausted"
  | "abort"
  | "disabled";

export type ControlledContinuationObserve = {
  /** True when ≥1 RunState resume segment executed after an initial maxTurns stop. */
  continued: boolean;
  segmentsExecuted: number;
  missionMaxTurns: number;
  segmentMaxTurns: number;
  /**
   * Last absolute Runner maxTurns ceiling applied for this mission
   * (SDK maxTurns is absolute vs state._currentTurn — not a sum of segment sizes).
   */
  allottedTurns: number;
  /** Initial adaptive/requested mission budget before productive extensions. */
  initialMissionMaxTurns?: number;
  /** Absolute safety envelope for productive extensions. */
  safetyEnvelope?: number;
  /** Count of automatic productive extensions beyond the initial mission budget. */
  productiveExtensions?: number;
  stopReason: ContinuationStopReason;
  reasonCodes: string[];
};

export function planContinuationSegments(input: {
  missionMaxTurns: number;
  segmentMaxTurns?: number;
  enableControlledContinuation?: boolean;
}): {
  enable: boolean;
  segmentMaxTurns: number;
  reasonCodes: string[];
} {
  const reasonCodes: string[] = [];
  const segmentMaxTurns = Math.max(
    1,
    Math.trunc(input.segmentMaxTurns ?? CONTINUATION_SEGMENT_MAX_TURNS),
  );
  const mission = Math.max(0, Math.trunc(input.missionMaxTurns));
  if (input.enableControlledContinuation === false) {
    reasonCodes.push("continuation_disabled");
    return { enable: false, segmentMaxTurns: mission || segmentMaxTurns, reasonCodes };
  }
  if (mission <= segmentMaxTurns) {
    reasonCodes.push("single_segment_sufficient");
    return { enable: false, segmentMaxTurns: mission || segmentMaxTurns, reasonCodes };
  }
  reasonCodes.push("multi_segment_mission");
  return { enable: true, segmentMaxTurns, reasonCodes };
}

export function emptyContinuationObserve(
  missionMaxTurns: number,
  segmentMaxTurns: number,
  stopReason: ContinuationStopReason,
  reasonCodes: string[] = [],
): ControlledContinuationObserve {
  return {
    continued: false,
    segmentsExecuted: 0,
    missionMaxTurns,
    segmentMaxTurns,
    allottedTurns: 0,
    stopReason,
    reasonCodes,
  };
}
