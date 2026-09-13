/**
 * Client-safe canonical Product-turn submission envelope helpers.
 *
 * Used by:
 * - Product UI pending retry envelope (process-local, non-authoritative)
 * - Server conflict digest (sha256 of this canonical form)
 *
 * MUST stay free of node:sqlite / Session imports.
 * MUST stay aligned with orchestrateProjectAssistantTurn history bounding.
 *
 * Digest/payload is conflict detection ONLY — never Product turn identity.
 */

export const PRODUCT_TURN_MAX_HISTORY_MESSAGES = 20;

export type CanonicalHistoryMessage = {
  readonly role: "user" | "assistant";
  readonly content: string;
};

export type CanonicalTurnPayload = {
  readonly content: string;
  readonly history: readonly CanonicalHistoryMessage[];
};

/**
 * Pending retry envelope retained by the Product conversation hook until
 * terminal client-observed success. Untrusted transport correlation only —
 * never HumanDecision / Truth C / Product authority.
 */
export type PendingTurnRetryEnvelope = {
  readonly turnRetryKey: string;
  readonly content: string;
  readonly history: readonly CanonicalHistoryMessage[];
};

/** Normalize history exactly as the Product Assistant provider path does. */
export function normalizeProductTurnHistory(
  history: readonly { role: string; content: string }[] | null | undefined,
): CanonicalHistoryMessage[] {
  return (history ?? [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content.trim(),
    }))
    .slice(-PRODUCT_TURN_MAX_HISTORY_MESSAGES);
}

export function buildCanonicalTurnPayload(
  content: string,
  history?: readonly { role: string; content: string }[] | null,
): CanonicalTurnPayload {
  return {
    content: content.trim(),
    history: normalizeProductTurnHistory(history),
  };
}

/** Stable JSON serialization for conflict digests (deterministic key order). */
export function serializeCanonicalTurnPayload(
  content: string,
  history?: readonly { role: string; content: string }[] | null,
): string {
  const payload = buildCanonicalTurnPayload(content, history);
  return JSON.stringify({
    content: payload.content,
    history: payload.history.map((m) => ({
      role: m.role,
      content: m.content,
    })),
  });
}

/**
 * Allocate/reuse a process-local pending retry envelope for one logical submit.
 * Pure helper — no React / Session / Product authority.
 */
export function preparePendingTurnRetryEnvelope(input: {
  content: string;
  history?: readonly { role: string; content: string }[] | null;
  turnRetryKey: string;
}): PendingTurnRetryEnvelope {
  const payload = buildCanonicalTurnPayload(input.content, input.history);
  return {
    turnRetryKey: input.turnRetryKey.trim(),
    content: payload.content,
    history: payload.history,
  };
}
