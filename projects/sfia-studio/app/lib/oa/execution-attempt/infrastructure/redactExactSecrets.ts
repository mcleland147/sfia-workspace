/** Marker substituted for exact secret values in captured process output. */
export const REDACTED_SECRET_MARKER = "[REDACTED_SECRET]" as const;

/**
 * Replace exact secret substrings in text. Never log `secrets`.
 * Empty / undefined secret entries are ignored.
 */
export function redactExactSecrets(
  text: string,
  secrets: readonly (string | undefined)[] | undefined,
): string {
  if (!secrets || secrets.length === 0) return text;
  let out = text;
  for (const secret of secrets) {
    if (secret == null || secret.length === 0) continue;
    if (!out.includes(secret)) continue;
    out = out.split(secret).join(REDACTED_SECRET_MARKER);
  }
  return out;
}
