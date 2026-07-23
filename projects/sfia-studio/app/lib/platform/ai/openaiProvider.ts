import OpenAI from "openai";
import { TechnicalError } from "./errors";
import type { ToolDefinition } from "../tools/types";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
  ProviderToolCall,
} from "./types";

/**
 * OpenAI Responses adapter — server-only.
 * Domain/UI must not import this module from client components.
 */
export class OpenAIConversationProvider implements ConversationProvider {
  readonly providerId = "openai";
  private readonly client: OpenAI;
  private readonly model: string;

  constructor(apiKey: string, model: string) {
    this.client = new OpenAI({ apiKey });
    this.model = model;
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    const round = await this.completeRound({
      items: messages.map((m) => ({
        type: "message" as const,
        role: m.role,
        content: m.content,
      })),
      tools: [],
    });
    if (round.kind !== "message") {
      throw new TechnicalError(
        "PROVIDER",
        "Réponse fournisseur inattendue (tool calls sans outils).",
      );
    }
    return { text: round.text, usage: round.usage };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    try {
      const tools =
        input.tools.length === 0
          ? []
          : input.tools.map((t) => ({
              type: "function" as const,
              name: t.name,
              description: t.description,
              parameters: t.parameters,
              strict: false,
            }));

      const response = await this.client.responses.create({
        model: this.model,
        input: input.items.map((item) => {
          if (item.type === "message") {
            return {
              role: item.role,
              content: item.content,
            };
          }
          if (item.type === "function_call") {
            return {
              type: "function_call",
              call_id: item.callId,
              name: item.name,
              arguments: item.argumentsJson,
            };
          }
          return {
            type: "function_call_output",
            call_id: item.callId,
            output: item.output,
          };
        }) as OpenAI.Responses.ResponseInput,
        tools,
      });

      const usage = response.usage;
      const inputTokens = usage?.input_tokens ?? null;
      const outputTokens = usage?.output_tokens ?? null;
      const totalTokens =
        usage?.total_tokens ??
        (inputTokens != null && outputTokens != null
          ? inputTokens + outputTokens
          : null);
      const providerUsage = {
        inputTokens,
        outputTokens,
        totalTokens,
        model: response.model ?? this.model,
        providerResponseId: response.id ?? null,
      };

      const toolCalls: ProviderToolCall[] = [];
      const output = response.output ?? [];
      for (const item of output) {
        if (
          item &&
          typeof item === "object" &&
          "type" in item &&
          (item as { type: string }).type === "function_call"
        ) {
          const fc = item as {
            call_id?: string;
            name?: string;
            arguments?: string;
            id?: string;
          };
          toolCalls.push({
            callId: fc.call_id ?? fc.id ?? `call-${toolCalls.length + 1}`,
            name: fc.name ?? "",
            argumentsJson: fc.arguments ?? "{}",
          });
        }
      }

      if (toolCalls.length > 0) {
        return { kind: "tool_calls", toolCalls, usage: providerUsage };
      }

      const text = (response.output_text ?? "").trim();
      if (!text) {
        throw new TechnicalError(
          "PROVIDER",
          "Réponse fournisseur vide. Aucun tour assistant live n’a été créé.",
        );
      }
      return { kind: "message", text, usage: providerUsage };
    } catch (error) {
      if (error instanceof TechnicalError) throw error;
      throw new TechnicalError(
        "PROVIDER",
        "Échec de l’appel fournisseur GPT. Réessayez manuellement.",
        error,
      );
    }
  }
}
