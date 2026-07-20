/**
 * Increment E — FinOps for GPT analysis (separate from qualification counters).
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { INC_E_LIMITS } from "../types/gptVerdictCandidate.js";
import { HarnessError } from "../types/contracts.js";
import {
  detectObviousSecrets,
  estimateTokensFromText,
  getSessionCallCount,
  incrementSessionCallCount,
  localDayKey,
  type DailyCounterState,
} from "../finops/qualificationLimits.js";

export { detectObviousSecrets, estimateTokensFromText };

export const INC_E_SESSION_KEY = "studio-session-analyse";

export function estimateAnalysisCostEur(inputTokens: number, outputTokens: number): number {
  const usd =
    (inputTokens / 1_000_000) * INC_E_LIMITS.priceUsdPer1MInput +
    (outputTokens / 1_000_000) * INC_E_LIMITS.priceUsdPer1MOutput;
  return Math.round(usd * INC_E_LIMITS.usdToEur * 1_000_000) / 1_000_000;
}

export function defaultAnalysisDailyCounterPath(proofsRoot: string): string {
  return path.join(proofsRoot, ".increment-e-daily-calls.json");
}

export function readAnalysisDailyCounter(filePath: string, now = new Date()): DailyCounterState {
  const day = localDayKey(now);
  try {
    if (!existsSync(filePath)) {
      return { day, callCount: 0, estimatedCostEur: 0, updatedAt: now.toISOString() };
    }
    const raw = JSON.parse(readFileSync(filePath, "utf8")) as Partial<DailyCounterState>;
    if (raw.day !== day) {
      return { day, callCount: 0, estimatedCostEur: 0, updatedAt: now.toISOString() };
    }
    return {
      day,
      callCount: typeof raw.callCount === "number" ? raw.callCount : 0,
      estimatedCostEur: typeof raw.estimatedCostEur === "number" ? raw.estimatedCostEur : 0,
      updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : now.toISOString(),
    };
  } catch {
    return { day, callCount: 0, estimatedCostEur: 0, updatedAt: now.toISOString() };
  }
}

export function writeAnalysisDailyCounter(filePath: string, state: DailyCounterState): void {
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

export function assertAnalysisPreCallLimits(input: {
  estimatedInputTokens: number;
  sessionKey?: string;
  dailyCounterPath: string;
  now?: Date;
}): void {
  const now = input.now ?? new Date();
  if (input.estimatedInputTokens > INC_E_LIMITS.maxInputTokens) {
    throw new HarnessError("INPUT_LIMIT_REACHED", "analysis input token limit");
  }
  if (INC_E_LIMITS.maxOutputTokens > INC_E_LIMITS.maxOutputTokens) {
    throw new HarnessError("OUTPUT_LIMIT_REACHED", "analysis output token limit");
  }
  const sessionKey = input.sessionKey ?? INC_E_SESSION_KEY;
  if (getSessionCallCount(sessionKey) >= INC_E_LIMITS.maxSessionCalls) {
    throw new HarnessError("SESSION_LIMIT_REACHED", "analysis session call limit");
  }
  const daily = readAnalysisDailyCounter(input.dailyCounterPath, now);
  if (daily.callCount >= INC_E_LIMITS.maxDailyCalls) {
    throw new HarnessError("DAILY_LIMIT_REACHED", "analysis daily call limit");
  }
  const est = estimateAnalysisCostEur(input.estimatedInputTokens, INC_E_LIMITS.maxOutputTokens);
  if (est > INC_E_LIMITS.maxCostEurPerCall) {
    throw new HarnessError("COST_LIMIT_REACHED", "analysis cost ceiling");
  }
}

export function recordAnalysisSuccessfulCall(input: {
  dailyCounterPath: string;
  inputTokens: number;
  outputTokens: number;
  sessionKey?: string;
  now?: Date;
}): { callNumber: number; estimatedCostEur: number } {
  const now = input.now ?? new Date();
  const sessionKey = input.sessionKey ?? INC_E_SESSION_KEY;
  const callNumber = incrementSessionCallCount(sessionKey);
  const estimatedCostEur = estimateAnalysisCostEur(input.inputTokens, input.outputTokens);
  const daily = readAnalysisDailyCounter(input.dailyCounterPath, now);
  daily.callCount += 1;
  daily.estimatedCostEur = Math.round((daily.estimatedCostEur + estimatedCostEur) * 1_000_000) / 1_000_000;
  daily.updatedAt = now.toISOString();
  writeAnalysisDailyCounter(input.dailyCounterPath, daily);
  return { callNumber, estimatedCostEur };
}

export function getAnalysisSessionCallCount(sessionKey = INC_E_SESSION_KEY): number {
  return getSessionCallCount(sessionKey);
}
