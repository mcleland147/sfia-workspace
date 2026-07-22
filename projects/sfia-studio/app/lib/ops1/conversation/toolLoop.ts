/**
 * Bounded OpenAI / fake tool-calling loop for Control Tower.
 */
import type { DatabaseSync } from "node:sqlite";
import { createEventId } from "../ids";
import { openOps1Db, nowIsoWithOffset } from "../db";
import type { SessionEventType } from "../types";
import {
  createToolCallId,
  listExposableTools,
  routeToolCall,
  toolResultForModel,
} from "../tools/toolRouter";
import {
  CT_MAX_TOOL_CALLS_PER_ROUND,
  CT_MAX_TOOL_ROUNDS,
} from "../tools/types";
import { redactSecrets } from "../tools/redaction";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderInputItem,
  ProviderUsage,
} from "./types";
import { messagesToInputItems } from "./types";

function insertEvent(
  db: DatabaseSync,
  sessionId: string,
  type: SessionEventType,
  detail: Record<string, unknown>,
): void {
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(
    createEventId(),
    sessionId,
    type,
    nowIsoWithOffset(),
    redactSecrets(JSON.stringify(detail)),
  );
}

function mergeUsage(
  a: ProviderUsage | null,
  b: ProviderUsage,
): ProviderUsage {
  if (!a) return b;
  const sum = (x: number | null, y: number | null) =>
    x == null && y == null ? null : (x ?? 0) + (y ?? 0);
  return {
    inputTokens: sum(a.inputTokens, b.inputTokens),
    outputTokens: sum(a.outputTokens, b.outputTokens),
    totalTokens: sum(a.totalTokens, b.totalTokens),
    model: b.model ?? a.model,
    providerResponseId: b.providerResponseId ?? a.providerResponseId,
  };
}

export interface ToolLoopResult {
  text: string;
  usage: ProviderUsage;
  toolRounds: number;
  toolCalls: number;
  limitReached: boolean;
}

export async function runToolCallingLoop(input: {
  sessionId: string;
  messages: ProviderChatMessage[];
  provider: ConversationProvider;
  enableTools?: boolean;
  db?: DatabaseSync;
}): Promise<ToolLoopResult> {
  const db = input.db ?? openOps1Db();
  const tools =
    input.enableTools === false ? [] : listExposableTools();
  const completeRound =
    input.provider.completeRound?.bind(input.provider) ??
    (async (args: {
      items: ProviderInputItem[];
      tools: typeof tools;
    }) => {
      const messages = args.items
        .filter(
          (i): i is Extract<ProviderInputItem, { type: "message" }> =>
            i.type === "message",
        )
        .map((m) => ({ role: m.role, content: m.content }));
      const completion = await input.provider.complete(messages);
      return {
        kind: "message" as const,
        text: completion.text,
        usage: completion.usage,
      };
    });

  let items: ProviderInputItem[] = messagesToInputItems(input.messages);
  let usage: ProviderUsage | null = null;
  let toolRounds = 0;
  let toolCalls = 0;
  let limitReached = false;

  if (tools.length > 0) {
    insertEvent(db, input.sessionId, "SOURCE_SEARCH_STARTED", {
      tools: tools.map((t) => t.name),
    });
  }

  for (let round = 0; round < CT_MAX_TOOL_ROUNDS; round += 1) {
    const result = await completeRound({ items, tools });
    usage = mergeUsage(usage, result.usage);

    if (result.kind === "message") {
      insertEvent(db, input.sessionId, "TOOL_LOOP_COMPLETED", {
        toolRounds,
        toolCalls,
        limitReached,
      });
      return {
        text: result.text,
        usage: usage!,
        toolRounds,
        toolCalls,
        limitReached,
      };
    }

    toolRounds += 1;
    const calls = result.toolCalls.slice(0, CT_MAX_TOOL_CALLS_PER_ROUND);
    const truncatedCalls = result.toolCalls.length > CT_MAX_TOOL_CALLS_PER_ROUND;
    if (truncatedCalls) {
      limitReached = true;
    }

    // Append function_call items then outputs sequentially (audit-friendly)
    for (const call of calls) {
      toolCalls += 1;
      items = [
        ...items,
        {
          type: "function_call",
          callId: call.callId,
          name: call.name,
          argumentsJson: call.argumentsJson,
        },
      ];

      let args: Record<string, unknown> = {};
      try {
        args = JSON.parse(call.argumentsJson || "{}") as Record<
          string,
          unknown
        >;
      } catch {
        args = {};
      }

      const routed = await routeToolCall(
        {
          toolCallId: call.callId || createToolCallId(),
          name: call.name,
          arguments: args,
          sessionId: input.sessionId,
        },
        { db },
      );

      items = [
        ...items,
        {
          type: "function_call_output",
          callId: call.callId,
          output: toolResultForModel(routed),
        },
      ];
    }

    if (round === CT_MAX_TOOL_ROUNDS - 1) {
      insertEvent(db, input.sessionId, "TOOL_LOOP_LIMIT_REACHED", {
        toolRounds,
        toolCalls,
      });
      // One last message-only attempt without tools
      const finalRound = await completeRound({ items, tools: [] });
      usage = mergeUsage(usage, finalRound.usage);
      if (finalRound.kind === "message") {
        return {
          text: finalRound.text,
          usage: usage!,
          toolRounds,
          toolCalls,
          limitReached: true,
        };
      }
      return {
        text: "[TOOL LOOP LIMIT] Analyse partielle — limite de boucle atteinte.",
        usage: usage!,
        toolRounds,
        toolCalls,
        limitReached: true,
      };
    }
  }

  insertEvent(db, input.sessionId, "TOOL_LOOP_LIMIT_REACHED", {
    toolRounds,
    toolCalls,
  });
  return {
    text: "[TOOL LOOP LIMIT] Aucune réponse texte finale.",
    usage: usage ?? {
      inputTokens: null,
      outputTokens: null,
      totalTokens: null,
      model: null,
      providerResponseId: null,
    },
    toolRounds,
    toolCalls,
    limitReached: true,
  };
}
