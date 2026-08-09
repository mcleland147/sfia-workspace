/**
 * FinOps T2 — provider decimal boundary (never JS Number for money math).
 */

import {
  FINOPS_MONEY_SCALE,
  divideHalfEven,
  formatMoneyString,
  moneyFromMinor,
  normalizeCurrency,
  parseMoneyString,
  type FinOpsMoney,
} from "../domain/money";

function pow10(exp: number): bigint {
  let result = BigInt(1);
  const ten = BigInt(10);
  for (let i = 0; i < exp; i += 1) {
    result = result * ten;
  }
  return result;
}

function parseProviderDecimalToMinor(unsigned: string): bigint {
  const [intPartRaw, fracRaw = ""] = unsigned.split(".");
  const intPart = intPartRaw === "" ? "0" : intPartRaw;
  if (fracRaw.length <= FINOPS_MONEY_SCALE) {
    const fracPadded = fracRaw.padEnd(FINOPS_MONEY_SCALE, "0");
    return BigInt(intPart) * pow10(FINOPS_MONEY_SCALE) + BigInt(fracPadded);
  }
  const highScaleFactor = pow10(fracRaw.length);
  const minorHigh = BigInt(intPart) * highScaleFactor + BigInt(fracRaw);
  const divisor = pow10(fracRaw.length - FINOPS_MONEY_SCALE);
  return divideHalfEven(minorHigh, divisor);
}

/**
 * Parse a provider decimal STRING into canonical Money (scale 8).
 * Values with >8 fractional digits are HALF_EVEN quantized via BigInt.
 */
export function parseProviderMoneyString(
  amount: string,
  currency: string,
): FinOpsMoney {
  const trimmed = amount.trim();
  if (!/^[+-]?\d+(\.\d+)?$/.test(trimmed)) {
    return parseMoneyString(trimmed, currency);
  }
  const negative = trimmed.startsWith("-");
  const unsigned = trimmed.replace(/^[+-]/, "");
  const minorAbs = parseProviderDecimalToMinor(unsigned);
  const amountMinor = negative ? -minorAbs : minorAbs;
  return moneyFromMinor(amountMinor, currency);
}

export function normalizeProviderCurrency(currency: string): string {
  return normalizeCurrency(currency);
}

/** Canonical absolute provider amount at scale 8. */
export function canonicalProviderAmountString(
  amount: string,
  currency: string,
): string {
  const money = parseProviderMoneyString(amount, currency);
  return formatMoneyString(money);
}
