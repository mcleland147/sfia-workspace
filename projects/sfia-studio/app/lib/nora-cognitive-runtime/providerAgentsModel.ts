/**
 * Thin ConversationProvider → Agents SDK Model adapter.
 * Used whenever a ConversationProvider exposes completeRound() (Fake/fixture
 * deterministic path; any completeRound-capable test/provider boundary).
 * ONE model invocation → ONE provider.completeRound(). Runner owns the loop.
 * Does NOT execute tools, persist Session, or resolve authority.
 * RESERVE-OPT-C-02: this is a boundary adapter, not a provider-architecture
 * decision — live OpenAI Agents model routing remains separate when no
 * completeRound provider is supplied.
 */
import { Usage, type Model, type ModelRequest, type ModelResponse } from "@openai/agents";
import type {
  ConversationProvider,
  ProviderInputItem,
  ProviderRoundResult,
} from "@/lib/platform/ai";
import {
  CONTROL_TOWER_TOOL_DEFINITIONS,
  type ToolDefinition,
} from "@/lib/platform/tools";

function extractTextContent(content: unknown): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content
    .map((part) => {
      if (typeof part === "string") return part;
      if (part && typeof part === "object" && "text" in part) {
        return String((part as { text?: unknown }).text ?? "");
      }
      return "";
    })
    .join("\n");
}

/**
 * Map Runner model input → provider round items.
 * Fail closed on unsupported shapes (no silent invention).
 */
export function agentInputToProviderItems(
  input: ModelRequest["input"],
): ProviderInputItem[] {
  if (typeof input === "string") {
    return [{ type: "message", role: "user", content: input }];
  }
  if (!Array.isArray(input)) {
    throw new Error("NORA_PROVIDER_MODEL_UNSUPPORTED_INPUT");
  }
  const items: ProviderInputItem[] = [];
  for (const raw of input) {
    if (!raw || typeof raw !== "object") {
      throw new Error("NORA_PROVIDER_MODEL_UNSUPPORTED_INPUT_ITEM");
    }
    const item = raw as Record<string, unknown>;
    const type = String(item.type ?? "");
    if (type === "message") {
      const role = String(item.role ?? "");
      if (role !== "user" && role !== "assistant" && role !== "system") {
        throw new Error(`NORA_PROVIDER_MODEL_UNSUPPORTED_ROLE:${role}`);
      }
      items.push({
        type: "message",
        role,
        content: extractTextContent(item.content),
      });
      continue;
    }
    if (type === "function_call") {
      items.push({
        type: "function_call",
        callId: String(item.callId ?? item.id ?? ""),
        name: String(item.name ?? ""),
        argumentsJson:
          typeof item.arguments === "string"
            ? item.arguments
            : JSON.stringify(item.arguments ?? {}),
      });
      continue;
    }
    if (type === "function_call_result" || type === "function_call_output") {
      const output = item.output;
      const outputText =
        typeof output === "string"
          ? output
          : output == null
            ? ""
            : JSON.stringify(output);
      items.push({
        type: "function_call_output",
        callId: String(item.callId ?? item.id ?? ""),
        output: outputText,
      });
      continue;
    }
    // Ignore purely structural / non-conversation items that Runner may prepend
    // (e.g. reasoning) — fail closed if they look like actionable model content.
    if (type === "reasoning") {
      continue;
    }
    throw new Error(`NORA_PROVIDER_MODEL_UNSUPPORTED_INPUT_TYPE:${type}`);
  }
  return items;
}

/**
 * Resolve SFIA ToolDefinitions from Runner-serialized tools by name only.
 * No second schema source — Studio CONTROL_TOWER_TOOL_DEFINITIONS remain canonical.
 */
export function toolDefinitionsFromModelRequest(
  request: ModelRequest,
): ToolDefinition[] {
  const byName = new Map<string, ToolDefinition>(
    CONTROL_TOWER_TOOL_DEFINITIONS.map((d) => [d.name, d]),
  );
  const out: ToolDefinition[] = [];
  for (const tool of request.tools ?? []) {
    if (!tool || typeof tool !== "object") continue;
    const t = tool as { type?: string; name?: string };
    if (t.type && t.type !== "function") {
      throw new Error(`NORA_PROVIDER_MODEL_UNSUPPORTED_TOOL_TYPE:${t.type}`);
    }
    const name = String(t.name ?? "");
    if (!name) continue;
    const def = byName.get(name);
    if (!def) {
      throw new Error(`NORA_PROVIDER_MODEL_UNKNOWN_TOOL:${name}`);
    }
    out.push(def);
  }
  return out;
}

function roundResultToModelResponse(
  round: ProviderRoundResult,
): ModelResponse {
  const usage = new Usage({
    requests: 1,
    inputTokens: round.usage.inputTokens ?? 0,
    outputTokens: round.usage.outputTokens ?? 0,
    totalTokens: round.usage.totalTokens ?? 0,
  });
  if (round.kind === "message") {
    return {
      usage,
      responseId: round.usage.providerResponseId ?? undefined,
      output: [
        {
          type: "message",
          role: "assistant",
          status: "completed",
          content: [{ type: "output_text", text: round.text }],
        },
      ],
    };
  }
  return {
    usage,
    responseId: round.usage.providerResponseId ?? undefined,
    output: round.toolCalls.map((call) => ({
      type: "function_call" as const,
      name: call.name,
      callId: call.callId,
      id: call.callId,
      status: "completed" as const,
      arguments: call.argumentsJson,
    })),
  };
}

/**
 * Agents SDK Model backed by ConversationProvider.completeRound (Fake path).
 */
export function createProviderAgentsModel(
  provider: ConversationProvider,
): Model {
  if (typeof provider.completeRound !== "function") {
    throw new Error("NORA_PROVIDER_MODEL_REQUIRES_COMPLETE_ROUND");
  }
  const completeRound = provider.completeRound.bind(provider);

  return {
    async getResponse(request: ModelRequest): Promise<ModelResponse> {
      if (request.signal?.aborted) {
        throw new Error("AbortError");
      }
      const items = agentInputToProviderItems(request.input);
      // Ensure Studio system instructions from the Runner filter are visible
      // to Fake specialization (CKC markers live in system messages).
      if (
        request.systemInstructions &&
        !items.some(
          (i) =>
            i.type === "message" &&
            i.role === "system" &&
            i.content.includes(request.systemInstructions!),
        )
      ) {
        items.unshift({
          type: "message",
          role: "system",
          content: request.systemInstructions,
        });
      }
      const tools = toolDefinitionsFromModelRequest(request);
      const round = await completeRound({ items, tools });
      return roundResultToModelResponse(round);
    },
    async *getStreamedResponse(): AsyncIterable<never> {
      throw new Error("NORA_PROVIDER_MODEL_STREAMING_UNSUPPORTED");
    },
  };
}

export function isFakeConversationProvider(
  provider: ConversationProvider,
): boolean {
  return (
    provider.providerId === "fake-test" ||
    provider.providerId.startsWith("fake")
  );
}
