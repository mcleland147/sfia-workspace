/**
 * Agents SDK wrappers for O-01 history tools. Scope closed over server identities.
 */
import {
  readConversationMessages,
  resolveAuthorizedHistoryScope,
  searchConversationHistory,
  type AuthorizedHistoryScope,
} from "@/domains/conversation/history-tools";

export type HistoryToolScope = {
  pilotId: string;
  preparationId: string;
  budget: { remainingCalls: number; remainingChars: number };
};

function payloadSize(payload: unknown): number {
  return JSON.stringify(payload).length;
}

/**
 * C-05: enforce remaining character budget BEFORE return.
 * Never silent-truncate exact message bodies — prefer PARTIAL + reason.
 * DENIED is reserved for authorization refusals, not budget.
 */
/** Exported for F-P1 discriminant tests (budget before return). */
export function fitBudget<T extends { coverage: string; reason?: string | null }>(
  scope: HistoryToolScope,
  payload: T,
): T | { coverage: "PARTIAL"; reason: "HISTORY_TOOL_BUDGET_EXHAUSTED"; items: []; nextCursor?: null } {
  const size = payloadSize(payload);
  if (size <= scope.budget.remainingChars) {
    scope.budget.remainingChars -= size;
    return payload;
  }
  return {
    coverage: "PARTIAL",
    reason: "HISTORY_TOOL_BUDGET_EXHAUSTED",
    items: [],
    nextCursor: null,
  };
}

export async function buildNoraHistoryTools(scope: HistoryToolScope) {
  const { tool } = await import("@openai/agents");
  const { z } = await import("zod");

  let cachedScope: AuthorizedHistoryScope | null = null;
  async function scopeOrDenied() {
    if (cachedScope) return { ok: true as const, scope: cachedScope };
    const resolved = await resolveAuthorizedHistoryScope({
      pilotId: scope.pilotId,
      preparationId: scope.preparationId,
    });
    if ("denied" in resolved) {
      return { ok: false as const, reason: resolved.reason };
    }
    cachedScope = resolved;
    return { ok: true as const, scope: resolved };
  }

  return [
    tool({
      name: "search_conversation_history",
      description:
        "Walk authorized conversation history (keyset pagination). Lexical query is an optional relevance hint only — not an exclusivity filter. Empty query walks the full journal. Does not mutate.",
      parameters: z.object({
        query: z.string().nullable().optional(),
        cursor: z.string().nullable().optional(),
        pageSize: z.number().int().min(1).max(50).nullable().optional(),
      }),
      execute: async (args) => {
        if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
          return {
            coverage: "PARTIAL",
            reason: "HISTORY_TOOL_BUDGET_EXHAUSTED",
            items: [],
            nextCursor: null,
          };
        }
        scope.budget.remainingCalls -= 1;
        const s = await scopeOrDenied();
        if (!s.ok) {
          return { coverage: "DENIED", reason: s.reason, items: [], nextCursor: null };
        }
        const result = await searchConversationHistory({
          scope: s.scope,
          query: args.query ?? undefined,
          cursor: args.cursor ?? undefined,
          pageSize: args.pageSize ?? undefined,
        });
        return fitBudget(scope, result);
      },
    }),
    tool({
      name: "read_conversation_messages",
      description:
        "Re-read exact authorized message contents by messageId (rights revalidated). Prefer after search_conversation_history. Use fragmentStart/fragmentEnd for long messages under budget.",
      parameters: z.object({
        messageIds: z.array(z.string()).min(1).max(50),
        fragmentStart: z.number().int().min(0).nullable().optional(),
        fragmentEnd: z.number().int().min(0).nullable().optional(),
      }),
      execute: async (args) => {
        if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
          return {
            coverage: "PARTIAL",
            reason: "HISTORY_TOOL_BUDGET_EXHAUSTED",
            items: [],
          };
        }
        scope.budget.remainingCalls -= 1;
        const s = await scopeOrDenied();
        if (!s.ok) {
          return { coverage: "DENIED", reason: s.reason, items: [] };
        }
        const fragment =
          args.fragmentStart != null && args.fragmentEnd != null
            ? { start: args.fragmentStart, end: args.fragmentEnd }
            : undefined;
        const result = await readConversationMessages({
          scope: s.scope,
          messageIds: args.messageIds,
          fragment,
        });
        return fitBudget(scope, result);
      },
    }),
  ];
}
