/**
 * Generic Runner-side execution safety budget (not SFIA business authorization).
 * Tracks model turns + per-turn tool slots without owning a second agent loop.
 */
import { CT_MAX_TOOL_CALLS_PER_ROUND } from "@/lib/platform/tools";

export type NoraTurnBudget = {
  /** Incremented by callModelInputFilter immediately before each model call. */
  currentModelTurn: number;
  toolCallsThisTurn: number;
  /** Model turns that executed ≥1 accepted tool call. */
  turnsWithTools: Set<number>;
  executedToolCalls: number;
  limitReached: boolean;
  maxPerTurn: number;
};

export function createNoraTurnBudget(
  maxPerTurn: number = CT_MAX_TOOL_CALLS_PER_ROUND,
): NoraTurnBudget {
  return {
    currentModelTurn: 0,
    toolCallsThisTurn: 0,
    turnsWithTools: new Set(),
    executedToolCalls: 0,
    limitReached: false,
    maxPerTurn,
  };
}

/** Mark a new model turn (invoked from callModelInputFilter). */
export function markModelTurn(budget: NoraTurnBudget): void {
  budget.currentModelTurn += 1;
  budget.toolCallsThisTurn = 0;
}

/**
 * Claim one tool-execution slot for the current model turn.
 * @returns true if the call may execute routeToolCall; false if budget saturated.
 */
export function claimToolSlot(budget: NoraTurnBudget): boolean {
  if (budget.toolCallsThisTurn >= budget.maxPerTurn) {
    budget.limitReached = true;
    return false;
  }
  budget.toolCallsThisTurn += 1;
  budget.executedToolCalls += 1;
  if (budget.currentModelTurn > 0) {
    budget.turnsWithTools.add(budget.currentModelTurn);
  }
  return true;
}

export function toolRoundsFromBudget(budget: NoraTurnBudget): number {
  return budget.turnsWithTools.size;
}

export const TOOL_TURN_BUDGET_EXCEEDED_RESULT = JSON.stringify({
  ok: false,
  denied: true,
  code: "NORA_TOOL_TURN_BUDGET_EXCEEDED",
  message:
    "Generic cognitive-runtime per-model-turn tool budget exceeded; routeToolCall was not invoked.",
});
