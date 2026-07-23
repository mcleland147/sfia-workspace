import type { ToolDefinition } from "../tools/types";

/** Provider-facing roles — domain roles mapped without SDK types. */
export type ProviderChatRole = "system" | "user" | "assistant";

export interface ProviderChatMessage {
  role: ProviderChatRole;
  content: string;
}

export interface ProviderUsage {
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  model: string | null;
  providerResponseId: string | null;
}

export interface ProviderCompletionResult {
  text: string;
  usage: ProviderUsage;
}

export interface ProviderToolCall {
  callId: string;
  name: string;
  argumentsJson: string;
}

export type ProviderInputItem =
  | { type: "message"; role: ProviderChatRole; content: string }
  | {
      type: "function_call";
      callId: string;
      name: string;
      argumentsJson: string;
    }
  | {
      type: "function_call_output";
      callId: string;
      output: string;
    };

export type ProviderRoundResult =
  | {
      kind: "message";
      text: string;
      usage: ProviderUsage;
    }
  | {
      kind: "tool_calls";
      toolCalls: ProviderToolCall[];
      usage: ProviderUsage;
    };

export interface ConversationProvider {
  readonly providerId: string;
  /** Legacy text-only completion (tools disabled). */
  complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult>;
  /** Optional tool-aware round — default falls back to complete(). */
  completeRound?(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult>;
}

export function messagesToInputItems(
  messages: ProviderChatMessage[],
): ProviderInputItem[] {
  return messages.map((m) => ({
    type: "message" as const,
    role: m.role,
    content: m.content,
  }));
}
