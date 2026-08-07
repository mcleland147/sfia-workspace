/**
 * FinOps T1 — application-side safe-integer token contract (no Money).
 */

export const FINOPS_MAX_SAFE_TOKEN = Number.MAX_SAFE_INTEGER; // 9007199254740991

/** Application-side token validation before persist. */
export function validateSafeToken(
  value: number | undefined,
): number | null | "invalid" {
  if (value === undefined) return null;
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    return "invalid";
  }
  if (!Number.isSafeInteger(value)) return "invalid";
  return value;
}

/**
 * Compute totalTokens when not provided: input + output must remain safe.
 * Returns "invalid" if the sum would exceed MAX_SAFE_INTEGER.
 */
export function resolveTotalTokens(input: {
  readonly inputTokens: number | null;
  readonly outputTokens: number | null;
  readonly totalTokens: number | null;
}): number | null | "invalid" {
  if (input.totalTokens !== null) {
    return input.totalTokens;
  }
  if (input.inputTokens !== null && input.outputTokens !== null) {
    const sum = input.inputTokens + input.outputTokens;
    if (!Number.isSafeInteger(sum)) return "invalid";
    return sum;
  }
  if (input.inputTokens !== null) return input.inputTokens;
  if (input.outputTokens !== null) return input.outputTokens;
  return null;
}
