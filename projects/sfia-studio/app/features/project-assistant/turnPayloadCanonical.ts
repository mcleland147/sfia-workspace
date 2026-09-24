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

export const PRODUCT_TURN_MAX_HISTORY_MESSAGES = 12;
/** Soft cap on total history content chars injected into the provider envelope. */
export const PRODUCT_TURN_MAX_HISTORY_CHARS = 8000;

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

/**
 * Normalize + bound provider-facing recent history (CR-CJ-01).
 * Visible transcript may be longer; this function is the ONLY server/client
 * path that shapes what the model receives as conversational history.
 * - last N user/assistant messages
 * - total content char budget
 * - prefer keeping coherent trailing pairs when trimming by chars
 */
export function normalizeProductTurnHistory(
  history: readonly { role: string; content: string }[] | null | undefined,
): CanonicalHistoryMessage[] {
  const filtered = (history ?? [])
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

  let total = filtered.reduce((sum, m) => sum + m.content.length, 0);
  if (total <= PRODUCT_TURN_MAX_HISTORY_CHARS) {
    return filtered;
  }

  // Drop oldest messages until under char budget; keep at least the last message.
  const bounded = [...filtered];
  while (bounded.length > 1 && total > PRODUCT_TURN_MAX_HISTORY_CHARS) {
    const removed = bounded.shift();
    total -= removed?.content.length ?? 0;
  }
  if (bounded.length === 1 && bounded[0]!.content.length > PRODUCT_TURN_MAX_HISTORY_CHARS) {
    bounded[0] = {
      role: bounded[0]!.role,
      content: bounded[0]!.content.slice(-PRODUCT_TURN_MAX_HISTORY_CHARS),
    };
  }
  return bounded;
}

/** Observability helper for CR-CJ-01 proofs. */
export function measureProductTurnHistoryBounds(
  history: readonly CanonicalHistoryMessage[],
): { messageCount: number; totalChars: number; withinBounds: boolean } {
  const messageCount = history.length;
  const totalChars = history.reduce((s, m) => s + m.content.length, 0);
  return {
    messageCount,
    totalChars,
    withinBounds:
      messageCount <= PRODUCT_TURN_MAX_HISTORY_MESSAGES &&
      totalChars <= PRODUCT_TURN_MAX_HISTORY_CHARS,
  };
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
