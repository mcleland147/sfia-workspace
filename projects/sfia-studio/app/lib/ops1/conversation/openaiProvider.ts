import OpenAI from "openai";
import { Ops1Error } from "../errors";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
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
    try {
      const response = await this.client.responses.create({
        model: this.model,
        input: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        // Explicitly no tools — conversation only.
        tools: [],
      });

      const text = (response.output_text ?? "").trim();
      if (!text) {
        throw new Ops1Error(
          "PROVIDER",
          "Réponse fournisseur vide. Aucun tour assistant live n’a été créé.",
        );
      }

      const usage = response.usage;
      const inputTokens = usage?.input_tokens ?? null;
      const outputTokens = usage?.output_tokens ?? null;
      const totalTokens =
        usage?.total_tokens ??
        (inputTokens != null && outputTokens != null
          ? inputTokens + outputTokens
          : null);

      return {
        text,
        usage: {
          inputTokens,
          outputTokens,
          totalTokens,
          model: response.model ?? this.model,
          providerResponseId: response.id ?? null,
        },
      };
    } catch (error) {
      if (error instanceof Ops1Error) throw error;
      throw new Ops1Error(
        "PROVIDER",
        "Échec de l’appel fournisseur GPT. Réessayez manuellement.",
        error,
      );
    }
  }
}
