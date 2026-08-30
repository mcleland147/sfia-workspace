/**
 * OpenAI Agents SDK Runner path for Nora F1 cognitive turns.
 * Generic loop mechanics owned by Runner; SFIA authority via routeToolCall.
 * completeRound-capable providers (incl. Fake) use createProviderAgentsModel;
 * otherwise live Agents model string from secrets. Same Runner orchestration.
 */
import {
  Agent,
  MaxTurnsExceededError,
  Runner,
  type Model,
} from "@openai/agents";
import type { ConversationProvider } from "@/lib/platform/ai";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
import { requireLiveConversationSecrets } from "@/lib/platform/ai/config";
import { createSfiaCallModelInputFilter } from "./callModelInputFilter";
import {
  createProviderAgentsModel,
  isFakeConversationProvider,
} from "./providerAgentsModel";
import { createSfiaRouteToolAdapters } from "./sfiaAgentsTools";
import type { ProductSqliteSession } from "./productSqliteSession";
import {
  createNoraTurnBudget,
  toolRoundsFromBudget,
  type NoraTurnBudget,
} from "./turnBudget";
import type { NoraCognitiveTurnResult } from "./types";

export type RunNoraAgentsTurnInput = {
  correlationId: string;
  projectId: string;
  systemInstructions: string;
  userContent: string;
  session: ProductSqliteSession;
  workspaceRoot?: string;
  sink?: EventSink;
  /** Injected model for D0 (ScriptedModel). Live uses OPENAI_MODEL. */
  model?: Model | string;
  /** Provider used to resolve completeRound→Model adapter when model not injected. */
  provider?: ConversationProvider;
  maxTurns?: number;
  /** When false, Agent receives no SFIA function tools. */
  enableTools?: boolean;
  /** Optional shared budget (tests). */
  budget?: NoraTurnBudget;
};

export function createNoraAgentsRunner(
  systemInstructions: string,
  budget?: NoraTurnBudget,
): Runner {
  return new Runner({
    tracingDisabled: true,
    callModelInputFilter: createSfiaCallModelInputFilter(
      systemInstructions,
      budget,
    ),
  });
}

function resolveModel(input: RunNoraAgentsTurnInput): Model | string {
  if (input.model !== undefined) return input.model;
  if (input.provider && isFakeConversationProvider(input.provider)) {
    return createProviderAgentsModel(input.provider);
  }
  if (input.provider && typeof input.provider.completeRound === "function") {
    // Deterministic/test providers with completeRound also use the thin adapter.
    return createProviderAgentsModel(input.provider);
  }
  const secrets = requireLiveConversationSecrets();
  return secrets.model;
}

export async function runNoraAgentsTurn(
  input: RunNoraAgentsTurnInput,
): Promise<NoraCognitiveTurnResult> {
  const model = resolveModel(input);

  const budget = input.budget ?? createNoraTurnBudget();
  const enableTools = input.enableTools !== false;
  const tools = enableTools
    ? createSfiaRouteToolAdapters({
        correlationId: input.correlationId,
        workspaceRoot: input.workspaceRoot,
        sink: input.sink,
        budget,
      })
    : [];

  const agent = new Agent({
    name: "NoraProjectAssistant",
    instructions: input.systemInstructions,
    model: model as never,
    tools,
  });

  const runner = createNoraAgentsRunner(input.systemInstructions, budget);
  const maxTurns = input.maxTurns ?? CT_MAX_TOOL_ROUNDS + 1;

  let text = "";
  let lastResponseId: string | null = null;
  let usageAgg: {
    inputTokens?: number;
    outputTokens?: number;
    totalTokens?: number;
  } | null = null;

  try {
    const result = await runner.run(agent, input.userContent, {
      session: input.session,
      maxTurns,
      errorHandlers: {
        maxTurns: ({ runData }) => {
          budget.limitReached = true;
          const lastText = [...runData.newItems]
            .reverse()
            .map((item) => {
              const anyItem = item as {
                type?: string;
                rawItem?: { content?: unknown };
              };
              if (anyItem.type === "message_output_item") {
                return String(
                  (item as { content?: string }).content ?? "",
                );
              }
              return "";
            })
            .find((t) => t.trim().length > 0);
          return {
            finalOutput:
              lastText?.trim() ||
              "Model-turn budget reached (maxTurns).",
            includeInHistory: false,
          };
        },
      },
    });

    text =
      typeof result.finalOutput === "string"
        ? result.finalOutput
        : result.finalOutput == null
          ? ""
          : String(result.finalOutput);
    lastResponseId = result.lastResponseId ?? null;
    usageAgg = result.state?.usage ?? null;
  } catch (error) {
    if (error instanceof MaxTurnsExceededError) {
      budget.limitReached = true;
      text = "Model-turn budget reached (maxTurns).";
    } else {
      throw error;
    }
  }

  const usage = {
    inputTokens: usageAgg?.inputTokens ?? null,
    outputTokens: usageAgg?.outputTokens ?? null,
    totalTokens: usageAgg?.totalTokens ?? null,
    model:
      typeof model === "string"
        ? model
        : input.provider && isFakeConversationProvider(input.provider)
          ? "fake-test-model"
          : null,
    providerResponseId: lastResponseId,
  };

  return {
    text,
    usage,
    toolRounds: toolRoundsFromBudget(budget),
    toolCalls: budget.executedToolCalls,
    limitReached: budget.limitReached,
    cognitiveRuntime: "agents",
    sessionId: await input.session.getSessionId(),
  };
}
