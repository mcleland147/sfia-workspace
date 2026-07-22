import type { ToolDefinition } from "../tools/types";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
  ProviderToolCall,
} from "./types";

export type FakeToolScriptRound =
  | { kind: "message"; text: string }
  | { kind: "tool_calls"; toolCalls: ProviderToolCall[] };

/**
 * Deterministic fake provider for unit/E2E non-live tests.
 * Never presented as live GPT; replies are tagged TEST/FAKE.
 */
export class FakeConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private callCount = 0;
  private roundCount = 0;
  private readonly scripted?: string[];
  private readonly failOnCall?: number;
  private readonly toolScript?: FakeToolScriptRound[];

  constructor(options?: {
    scripted?: string[];
    failOnCall?: number;
    toolScript?: FakeToolScriptRound[];
  }) {
    this.scripted = options?.scripted;
    this.failOnCall = options?.failOnCall;
    this.toolScript = options?.toolScript;
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.callCount += 1;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (
      this.failOnCall !== undefined && this.callCount === this.failOnCall
    ) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }
    if (lastUser?.content.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }
    const historyLen = messages.length;
    const text =
      this.scripted?.[this.callCount - 1] ??
      `[TEST/FAKE · NON LIVE] Réponse fake #${this.callCount} (historique=${historyLen}). Echo: « ${(lastUser?.content ?? "").slice(0, 80)} »`;
    return {
      text,
      usage: {
        inputTokens: 10 * this.callCount,
        outputTokens: 5 * this.callCount,
        totalTokens: 15 * this.callCount,
        model: "fake-test-model",
        providerResponseId: `fake-resp-${this.callCount}`,
      },
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    this.roundCount += 1;
    const usage = {
      inputTokens: 10 * this.roundCount,
      outputTokens: 5 * this.roundCount,
      totalTokens: 15 * this.roundCount,
      model: "fake-test-model",
      providerResponseId: `fake-round-${this.roundCount}`,
    };

    if (this.toolScript && this.toolScript.length > 0) {
      const step =
        this.toolScript[
          Math.min(this.roundCount - 1, this.toolScript.length - 1)
        ];
      if (step.kind === "tool_calls" && input.tools.length > 0) {
        return { kind: "tool_calls", toolCalls: step.toolCalls, usage };
      }
      if (step.kind === "message") {
        return { kind: "message", text: step.text, usage };
      }
    }

    // Auto: if last user asks for git/github and tools available, emit one tool call once
    const lastUser = [...input.items]
      .reverse()
      .find((i) => i.type === "message" && i.role === "user");
    const content =
      lastUser && lastUser.type === "message" ? lastUser.content : "";

    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_GIT_STATUS__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-git-status",
            name: "git_local_get_status",
            argumentsJson: "{}",
          },
        ],
        usage,
      };
    }
    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_GITHUB_REPO__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-gh-repo",
            name: "github_get_repository",
            argumentsJson: "{}",
          },
        ],
        usage,
      };
    }
    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_DENIED_PATH__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-env",
            name: "git_local_read_file",
            argumentsJson: JSON.stringify({ path: ".env" }),
          },
        ],
        usage,
      };
    }

    // After tools or default message
    const toolOutputs = input.items.filter(
      (i) => i.type === "function_call_output",
    );
    if (toolOutputs.length > 0) {
      return {
        kind: "message",
        text: `[TEST/FAKE · NON LIVE] Analyse outils (${toolOutputs.length}) — aucun succès implicite déclaré.`,
        usage,
      };
    }

    const messages = input.items
      .filter((i): i is Extract<ProviderInputItem, { type: "message" }> =>
        i.type === "message",
      )
      .map((m) => ({ role: m.role, content: m.content }));
    const completion = await this.complete(messages);
    return { kind: "message", text: completion.text, usage: completion.usage };
  }
}
