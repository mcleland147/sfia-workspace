/**
 * Decimal money helpers — string/scaled-integer math for FinOps reconciliation.
 * Never use IEEE float as the financial reference path.
 */

const SCALE = 10;
const FACTOR = BigInt("10000000000"); // 10^10

function parseDecimalToScaled(input: string): bigint | null {
  const s = input.trim();
  if (!s || s === "UNKNOWN" || s === "ABSENT") return null;
  const m = /^([+-])?(\d+)(?:\.(\d+))?$/.exec(s);
  if (!m) return null;
  const sign = m[1] === "-" ? BigInt(-1) : BigInt(1);
  const whole = BigInt(m[2]);
  const fracRaw = (m[3] ?? "").slice(0, SCALE);
  const fracPadded = fracRaw.padEnd(SCALE, "0");
  const frac = BigInt(fracPadded || "0");
  return sign * (whole * FACTOR + frac);
}

function scaledToDecimalString(v: bigint): string {
  const sign = v < BigInt(0) ? "-" : "";
  const abs = v < BigInt(0) ? -v : v;
  const whole = abs / FACTOR;
  const frac = (abs % FACTOR).toString().padStart(SCALE, "0");
  return `${sign}${whole.toString()}.${frac}`;
}

export function decimalAdd(a: string, b: string): string | null {
  const aa = parseDecimalToScaled(a);
  const bb = parseDecimalToScaled(b);
  if (aa == null || bb == null) return null;
  return scaledToDecimalString(aa + bb);
}

export function decimalSub(a: string, b: string): string | null {
  const aa = parseDecimalToScaled(a);
  const bb = parseDecimalToScaled(b);
  if (aa == null || bb == null) return null;
  return scaledToDecimalString(aa - bb);
}

export function decimalFromNumberLike(v: unknown): string | null {
  if (typeof v === "number") {
    if (!Number.isFinite(v)) return null;
    return decimalFromNumberLike(String(v));
  }
  if (typeof v === "string") {
    const scaled = parseDecimalToScaled(v);
    return scaled != null ? scaledToDecimalString(scaled) : null;
  }
  return null;
}

export function isDecimalPresent(v: string | null | undefined): v is string {
  return typeof v === "string" && parseDecimalToScaled(v) != null;
}
