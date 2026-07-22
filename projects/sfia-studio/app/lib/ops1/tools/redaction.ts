/** Redaction helpers for tool outputs — never leak secrets to the model. */
const SECRET_PATTERNS: RegExp[] = [
  /\bsk-[A-Za-z0-9_-]{10,}\b/g,
  /\bghp_[A-Za-z0-9]{20,}\b/g,
  /\bgithub_pat_[A-Za-z0-9_]{20,}\b/g,
  /\bOPENAI_API_KEY\s*=\s*.+/gi,
  /\bAuthorization:\s*Bearer\s+\S+/gi,
];

export function redactSecrets(text: string): string {
  let out = text;
  for (const re of SECRET_PATTERNS) {
    out = out.replace(re, "[redacted]");
  }
  return out;
}

export function truncateText(
  text: string,
  maxChars: number,
): { text: string; truncated: boolean } {
  if (text.length <= maxChars) return { text, truncated: false };
  return {
    text: `${text.slice(0, maxChars)}\n…[truncated]`,
    truncated: true,
  };
}

export function digestText(text: string): string {
  const redacted = redactSecrets(text);
  if (redacted.length <= 120) return redacted;
  return `${redacted.slice(0, 117)}…`;
}
