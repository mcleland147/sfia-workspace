/**
 * Client-safe opaque transport retry key for Product Assistant sends.
 *
 * Untrusted correlation only — NEVER Product turn identity / SFIA authority.
 * Server alone mints/owns `ltu:…` (see logicalProductTurn.ts / D-GF-ACW-02).
 *
 * Kept free of node:sqlite / Session imports so client components can allocate
 * the key BEFORE the Server Action without bundling Session persistence.
 */

export function createTurnRetryKey(): string {
  const uuid =
    typeof globalThis.crypto?.randomUUID === "function"
      ? globalThis.crypto.randomUUID()
      : `fallback-${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`;
  return `trk:${uuid}`;
}
