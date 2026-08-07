/**
 * FinOps T2 — Money (M2): exact decimal via BigInt minor units + currency.
 * PostgreSQL contract: numeric(20,8). No authoritative JS Number/float math.
 *
 * HALF_EVEN (D-T2-ROUNDING-01) applies once at rate × usage → Money scale 8.
 * SUM of already scale-8 amounts does not re-round.
 */

export const FINOPS_MONEY_PRECISION = 20 as const;
export const FINOPS_MONEY_SCALE = 8 as const;
export const FINOPS_MONEY_SCALE_FACTOR = BigInt(100000000); // 10^8

function pow10(exp: number): bigint {
  let result = BigInt(1);
  const ten = BigInt(10);
  for (let i = 0; i < exp; i += 1) {
    result = result * ten;
  }
  return result;
}

/** Absolute max |amountMinor| for numeric(20,8): 12 integer digits → 10^12 − 10^-8. */
export const FINOPS_MONEY_MAX_ABS_MINOR =
  pow10(FINOPS_MONEY_PRECISION - FINOPS_MONEY_SCALE) * FINOPS_MONEY_SCALE_FACTOR -
  BigInt(1);

export type FinOpsMoney = {
  /** Signed minor units at scale 8 (1 = 10^-8 currency unit). */
  readonly amountMinor: bigint;
  readonly currency: string;
};

export type FinOpsMoneyErrorCode =
  | "FINOPS_MONEY_INVALID_CURRENCY"
  | "FINOPS_MONEY_INVALID_AMOUNT"
  | "FINOPS_MONEY_OVERFLOW"
  | "FINOPS_MONEY_CURRENCY_MISMATCH"
  | "FINOPS_MONEY_INVALID_QUANTUM"
  | "FINOPS_MONEY_INVALID_USAGE";

export class FinOpsMoneyError extends Error {
  readonly code: FinOpsMoneyErrorCode;
  constructor(code: FinOpsMoneyErrorCode, message: string) {
    super(message);
    this.name = "FinOpsMoneyError";
    this.code = code;
  }
}

function absBigInt(n: bigint): bigint {
  return n < BigInt(0) ? -n : n;
}

/**
 * Integer division with IEEE-style round half to even on the quotient.
 * Sign is applied after rounding the absolute magnitude (symmetric HALF_EVEN).
 */
export function divideHalfEven(numerator: bigint, denominator: bigint): bigint {
  if (denominator === BigInt(0)) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_INVALID_QUANTUM",
      "Division by zero in Money HALF_EVEN",
    );
  }
  const negative =
    (numerator < BigInt(0) && denominator > BigInt(0)) ||
    (numerator > BigInt(0) && denominator < BigInt(0));
  const a = absBigInt(numerator);
  const b = absBigInt(denominator);
  const q = a / b;
  const r = a % b;
  if (r === BigInt(0)) {
    return negative ? -q : q;
  }
  const twiceR = r * BigInt(2);
  let rounded: bigint;
  if (twiceR < b) {
    rounded = q;
  } else if (twiceR > b) {
    rounded = q + BigInt(1);
  } else {
    // Exactly halfway: choose even quotient.
    rounded = q % BigInt(2) === BigInt(0) ? q : q + BigInt(1);
  }
  return negative ? -rounded : rounded;
}

export function normalizeCurrency(currency: string): string {
  const c = currency.trim().toUpperCase();
  if (!/^[A-Z]{3}$/.test(c)) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_INVALID_CURRENCY",
      "Currency must be a 3-letter code",
    );
  }
  return c;
}

export function assertMoneyInRange(amountMinor: bigint): void {
  if (absBigInt(amountMinor) > FINOPS_MONEY_MAX_ABS_MINOR) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_OVERFLOW",
      "Money amount exceeds numeric(20,8) range",
    );
  }
}

export function moneyFromMinor(
  amountMinor: bigint,
  currency: string,
): FinOpsMoney {
  assertMoneyInRange(amountMinor);
  return { amountMinor, currency: normalizeCurrency(currency) };
}

/**
 * Parse a canonical decimal string into Money (exact; no Number/float).
 * Accepts optional sign, integer and fractional parts; fractional digits ≤ 8
 * are scaled exactly (trailing zeros optional). More than 8 fractional digits
 * are rejected (quantize via rate×usage HALF_EVEN, not parse).
 */
export function parseMoneyString(
  amount: string,
  currency: string,
): FinOpsMoney {
  const trimmed = amount.trim();
  if (!/^[+-]?\d+(\.\d+)?$/.test(trimmed)) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_INVALID_AMOUNT",
      "Money amount string is not a valid decimal",
    );
  }
  const negative = trimmed.startsWith("-");
  const unsigned = trimmed.replace(/^[+-]/, "");
  const [intPartRaw, fracRaw = ""] = unsigned.split(".");
  if (fracRaw.length > FINOPS_MONEY_SCALE) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_INVALID_AMOUNT",
      "Money amount has more than 8 fractional digits",
    );
  }
  const intPart = intPartRaw === "" ? "0" : intPartRaw;
  const fracPadded = fracRaw.padEnd(FINOPS_MONEY_SCALE, "0");
  // Digits only — never Number/parseFloat/parseInt on the monetary value.
  const minorAbs = BigInt(intPart) * FINOPS_MONEY_SCALE_FACTOR + BigInt(fracPadded);
  const amountMinor = negative ? -minorAbs : minorAbs;
  return moneyFromMinor(amountMinor, currency);
}

/** Canonical fixed-scale decimal string (always 8 fractional digits). */
export function formatMoneyString(money: FinOpsMoney): string {
  assertMoneyInRange(money.amountMinor);
  const negative = money.amountMinor < BigInt(0);
  const abs = absBigInt(money.amountMinor);
  const intPart = abs / FINOPS_MONEY_SCALE_FACTOR;
  const frac = abs % FINOPS_MONEY_SCALE_FACTOR;
  const fracStr = frac.toString().padStart(FINOPS_MONEY_SCALE, "0");
  return `${negative ? "-" : ""}${intPart.toString()}.${fracStr}`;
}

export function addMoney(a: FinOpsMoney, b: FinOpsMoney): FinOpsMoney {
  if (a.currency !== b.currency) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_CURRENCY_MISMATCH",
      "Cannot add Money with different currencies",
    );
  }
  return moneyFromMinor(a.amountMinor + b.amountMinor, a.currency);
}

/** Exact SUM of already scale-8 amounts — no additional rounding. */
export function sumMoney(
  currency: string,
  amounts: ReadonlyArray<FinOpsMoney>,
): FinOpsMoney {
  const c = normalizeCurrency(currency);
  let total = BigInt(0);
  for (const m of amounts) {
    if (m.currency !== c) {
      throw new FinOpsMoneyError(
        "FINOPS_MONEY_CURRENCY_MISMATCH",
        "Cannot sum Money with different currencies",
      );
    }
    total += m.amountMinor;
  }
  return moneyFromMinor(total, c);
}

export function moneyEquals(a: FinOpsMoney, b: FinOpsMoney): boolean {
  return a.currency === b.currency && a.amountMinor === b.amountMinor;
}

/**
 * R3: Money amount = rate_money_per_quantum × (usage_count / quantum),
 * quantized once to scale 8 with HALF_EVEN.
 *
 * Exact integer form: divideHalfEven(rateMinor * usageCount, quantum).
 */
export function moneyFromRateUsageHalfEven(input: {
  readonly ratePerQuantum: FinOpsMoney;
  readonly usageCount: bigint;
  readonly billingQuantum: bigint;
}): FinOpsMoney {
  if (input.billingQuantum <= BigInt(0)) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_INVALID_QUANTUM",
      "Billing quantum must be a positive integer",
    );
  }
  if (input.usageCount < BigInt(0)) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_INVALID_USAGE",
      "Usage count must be non-negative",
    );
  }
  const product = input.ratePerQuantum.amountMinor * input.usageCount;
  const amountMinor = divideHalfEven(product, input.billingQuantum);
  return moneyFromMinor(amountMinor, input.ratePerQuantum.currency);
}
