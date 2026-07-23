/**
 * Bounded OpenAI / fake tool-calling loop — domain-agnostic.
 * Observability via injectable EventSink (no OPS1 DB dependency).
 */
import type { EventSink } from "../observability/eventSink";
import { noopEventSink } from "../observability/eventSink";
import {
  createToolCallId,
  listExposableTools,
  routeToolCall,
  toolResultForModel,
} from "./toolRouter";
import {
  CT_MAX_TOOL_CALLS_PER_ROUND,
  CT_MAX_TOOL_ROUNDS,
} from "./types";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderInputItem,
  ProviderUsage,
} from "../ai/types";
import { messagesToInputItems } from "../ai/types";

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
  /** Opaque correlation id (OPS1 sessionId, D1 runId, …). */
  correlationId: string;
  messages: ProviderChatMessage[];
  provider: ConversationProvider;
  enableTools?: boolean;
  sink?: EventSink;
  workspaceRoot?: string;
}): Promise<ToolLoopResult> {
  const sink = input.sink ?? noopEventSink;
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
    sink.emit({
      type: "SOURCE_SEARCH_STARTED",
      correlationId: input.correlationId,
      detail: {
        tools: tools.map((t) => t.name),
      },
    });
  }

  for (let round = 0; round < CT_MAX_TOOL_ROUNDS; round += 1) {
    const result = await completeRound({ items, tools });
    usage = mergeUsage(usage, result.usage);

    if (result.kind === "message") {
      sink.emit({
        type: "TOOL_LOOP_COMPLETED",
        correlationId: input.correlationId,
        detail: { toolRounds, toolCalls, limitReached },
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
          sessionId: input.correlationId,
        },
        { sink, workspaceRoot: input.workspaceRoot },
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
      sink.emit({
        type: "TOOL_LOOP_LIMIT_REACHED",
        correlationId: input.correlationId,
        detail: { toolRounds, toolCalls },
      });
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

  sink.emit({
    type: "TOOL_LOOP_LIMIT_REACHED",
    correlationId: input.correlationId,
    detail: { toolRounds, toolCalls },
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

