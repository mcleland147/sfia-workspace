import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { INC_C_LIMITS } from "../types/qualificationCandidate.js";
import { HarnessError } from "../types/contracts.js";

/** Rough token estimate: UTF-8 length / 4 (fail-closed if over). */
export function estimateTokensFromText(text: string): number {
  return Math.ceil(Buffer.byteLength(text, "utf8") / 4);
}

export function estimateCostEur(inputTokens: number, outputTokens: number): number {
  const usd =
    (inputTokens / 1_000_000) * INC_C_LIMITS.priceUsdPer1MInput +
    (outputTokens / 1_000_000) * INC_C_LIMITS.priceUsdPer1MOutput;
  return Math.round(usd * INC_C_LIMITS.usdToEur * 1_000_000) / 1_000_000;
}

export function maxEstimatedCostEurForCall(): number {
  return estimateCostEur(INC_C_LIMITS.maxInputTokens, INC_C_LIMITS.maxOutputTokens);
}

const SECRET_PATTERNS = [
  /sk-[a-zA-Z0-9_-]{10,}/,
  /OPENAI_API_KEY\s*=/i,
  /Bearer\s+[A-Za-z0-9._-]{10,}/i,
  /-----BEGIN (RSA |OPENSSH )?PRIVATE KEY-----/,
];

export function detectObviousSecrets(text: string): boolean {
  return SECRET_PATTERNS.some((re) => re.test(text));
}

export interface DailyCounterState {
  day: string;
  callCount: number;
  estimatedCostEur: number;
  updatedAt: string;
}

export function localDayKey(now = new Date()): string {
  // Europe/Paris civil day approximation via locale date parts
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return fmt.format(now);
}

export function defaultDailyCounterPath(proofsRoot: string): string {
  return path.join(proofsRoot, ".increment-c-daily-calls.json");
}

export function readDailyCounter(filePath: string, now = new Date()): DailyCounterState {
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

export function writeDailyCounter(filePath: string, state: DailyCounterState): void {
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

/** Session counter — process-local (POC). Not browser sessionStorage. */
const sessionCounts = new Map<string, number>();

export function getSessionCallCount(sessionKey: string): number {
  return sessionCounts.get(sessionKey) ?? 0;
}

export function incrementSessionCallCount(sessionKey: string): number {
  const next = getSessionCallCount(sessionKey) + 1;
  sessionCounts.set(sessionKey, next);
  return next;
}

export function resetSessionCallCountForTests(sessionKey?: string): void {
  if (sessionKey) sessionCounts.delete(sessionKey);
  else sessionCounts.clear();
}

export function assertPreCallLimits(input: {
  estimatedInputTokens: number;
  sessionKey: string;
  dailyCounterPath: string;
  maxOutputTokens?: number;
}): void {
  const maxOut = input.maxOutputTokens ?? INC_C_LIMITS.maxOutputTokens;
  if (maxOut > INC_C_LIMITS.maxOutputTokens) {
    throw new HarnessError(
      "OUTPUT_LIMIT_REACHED",
      `Output budget ${maxOut} > ${INC_C_LIMITS.maxOutputTokens}`,
    );
  }
  if (input.estimatedInputTokens > INC_C_LIMITS.maxInputTokens) {
    throw new HarnessError(
      "INPUT_LIMIT_REACHED",
      `Input estimate ${input.estimatedInputTokens} > ${INC_C_LIMITS.maxInputTokens} tokens — reduce scope before call`,
    );
  }
  const totalEst = input.estimatedInputTokens + maxOut;
  if (totalEst > INC_C_LIMITS.maxTotalTokens) {
    throw new HarnessError(
      "TOKEN_LIMIT_REACHED",
      `Estimated total ${totalEst} > ${INC_C_LIMITS.maxTotalTokens} tokens`,
    );
  }
  const estCost = estimateCostEur(input.estimatedInputTokens, maxOut);
  if (estCost > INC_C_LIMITS.maxCostEurPerCall) {
    throw new HarnessError(
      "COST_LIMIT_REACHED",
      `Estimated cost €${estCost} > €${INC_C_LIMITS.maxCostEurPerCall} per qualification`,
    );
  }
  const session = getSessionCallCount(input.sessionKey);
  if (session >= INC_C_LIMITS.maxSessionCalls) {
    throw new HarnessError(
      "SESSION_LIMIT_REACHED",
      `Session already used ${session}/${INC_C_LIMITS.maxSessionCalls} qualifications`,
    );
  }
  const daily = readDailyCounter(input.dailyCounterPath);
  if (daily.callCount >= INC_C_LIMITS.maxDailyCalls) {
    throw new HarnessError(
      "DAILY_LIMIT_REACHED",
      `Daily calls ${daily.callCount}/${INC_C_LIMITS.maxDailyCalls} exhausted`,
    );
  }
  if (daily.estimatedCostEur >= INC_C_LIMITS.maxDailyCostEur) {
    throw new HarnessError(
      "COST_LIMIT_REACHED",
      `Daily estimated cost €${daily.estimatedCostEur} ≥ €${INC_C_LIMITS.maxDailyCostEur}`,
    );
  }
}

export function recordSuccessfulCall(input: {
  sessionKey: string;
  dailyCounterPath: string;
  estimatedCostEur: number;
}): { sessionCallNumber: number; dailyCallNumber: number } {
  const sessionCallNumber = incrementSessionCallCount(input.sessionKey);
  const daily = readDailyCounter(input.dailyCounterPath);
  const next: DailyCounterState = {
    day: daily.day,
    callCount: daily.callCount + 1,
    estimatedCostEur: Math.round((daily.estimatedCostEur + input.estimatedCostEur) * 1e6) / 1e6,
    updatedAt: new Date().toISOString(),
  };
  writeDailyCounter(input.dailyCounterPath, next);
  return { sessionCallNumber, dailyCallNumber: next.callCount };
}
