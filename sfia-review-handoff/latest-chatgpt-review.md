# MW1 OPTION C — LEGACY NORA GENERIC LOOP RETIREMENT — FULL REVIEW PACK

## 1. Timestamp (Europe/Paris)
2026-08-30 23:36:49 CEST

## 2. Repo / worktree / branch
- Repo: mcleland147/sfia-workspace
- Worktree: /Users/morris/Projects/sfia-workspace-nora-mw1-option-c-recovered
- Branch: delivery/sfia-studio-nora-mw1-option-c-migration

## 3. Entry HEAD / origin-main
- HEAD (committed base, unchanged): 4f00a2ad5e58310392e2efb562174d32ad8240e8
- Expected: 4f00a2ad5e58310392e2efb562174d32ad8240e8
- origin/main: c42070034c4c36216b256f02662a92d711db2334
- Expected: c42070034c4c36216b256f02662a92d711db2334

## 4. Delivery remote state
ABSENT.
```
(empty)
```

## 5. Worktree ownership
```
worktree /Users/morris/Projects/sfia-workspace-nora-mw1-option-c-recovered
HEAD 4f00a2ad5e58310392e2efb562174d32ad8240e8
branch refs/heads/delivery/sfia-studio-nora-mw1-option-c-migration
```
Delivery owner = recovered worktree.

## 6. GIT-DEBT-MW1-01
```
* delivery/sfia-studio-nora-mw1-option-c-migration                                                                                   4f00a2ad [origin/main: behind 2] docs(sfia-studio): adopt Nora Option C cognitive runtime target (#445)
```
Tracks origin/main, behind 2. NON-BLOCKING for local retirement. BLOCKING before Option C Git integration. Unchanged this cycle.

## 7. Consumed Morris GO
GO MORRIS — MW1 OPTION C — LEGACY NORA GENERIC LOOP RETIREMENT — remove remaining Nora F1 legacy-runtime selector/comparator debt superseded by proven Runner path; preserve runToolCallingLoop where OPS1/D1 require it; no project commit/push/PR/merge; no MW0 parity yet.

## 8. Cycle qualification
- Programme: Nora Cognitive Completion / MW1 / Cycle 8 Delivery cleanup
- Typology: EVOL / CRITICAL
- Proof: Nora-specific legacy runtime ownership = ZERO; platform independent infrastructure preserved

## 9. Sources read
Cycle template, routing guide, guardrails, build doctrine, roadmap, product-completion 01/02, framing 30/32/33/34, nora-cognitive-completion 05/07, handoff 7cb30989…, local nora-cognitive-runtime/**, project-assistant, nora-eval, platform toolLoop/ops1/d1 (read-only).

## 10. CKC status
ABSENT for Delivery/Cycle 8 — v2.6 process fallback.

## 11. Convergence baseline proof
Present at entry:
- Fake F1 → Agents via createProviderAgentsModel
- runNoraCognitiveTurn had no legacy branch (selector always agents)
- ProductSqliteSession used
- routeToolCall boundary
- RESERVE-OPT-C-01 closed
- App diff 4f00→c420 empty
- Prior handoff predecessor expected: 7cb3098945464109e70c5cbbfe112315ada5cb27

## 12–13. Pre-retirement inventory + classification

| Hit | Classification |
|---|---|
| resolveRuntime.ts always agents | A then DELETED |
| NoraCognitiveRuntimeKind "legacy"\|"agents" | A → narrowed |
| runNoraCognitiveTurn selector call | A → removed |
| EPHEMERAL_NOTICE_LEGACY branch | A → removed |
| types.ts cognitiveRuntime "legacy" | H/A → "agents" only |
| optionCObservables "legacy" | A → removed |
| fakeConvergence/runner runToolCallingLoop comparator | B → removed |
| NORA_COGNITIVE_RUNTIME tests | B → removed |
| MIGRATION dual-path wording | C → updated RETIRED |
| platform toolLoop + index export | D KEEP |
| ops1 conversation toolLoop/service | E KEEP |
| d1 analyzeIntent | F KEEP |
| cognitiveRuntime="agents" field | H KEEP |

## 14. Exact retirement plan applied
1. DELETE resolveRuntime.ts
2. Narrow NoraCognitiveRuntimeKind to "agents"
3. Simplify runNoraCognitiveTurn → direct runNoraAgentsTurn
4. Remove EPHEMERAL_NOTICE_LEGACY; always SESSION_NOTICE_AGENTS
5. Remove Nora comparator imports/calls from D0 tests
6. Update MIGRATION.md RETIRED
7. RESERVE-OPT-C-02 factual wording on providerAgentsModel (no architecture decision)
8. Narrow optionCObservables / ProjectAssistantSendSuccess types

## 15. Deleted files
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/resolveRuntime.ts`

## 16. Modified files
See §17 content.

## 17. FULL useful content / diffs


### FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
```
/**
 * Nora Option C cognitive runtime — types.
 * Session is conversational continuity only — never Truth C / LPS / HD.
 * Single Runner path after legacy Nora runtime retirement.
 */

/** F1/Nora cognitive runtime kind — Agents SDK Runner only. */
export type NoraCognitiveRuntimeKind = "agents";

export type NoraCognitiveTurnResult = {
  text: string;
  usage: {
    inputTokens: number | null;
    outputTokens: number | null;
    totalTokens: number | null;
    model: string | null;
    providerResponseId: string | null;
  };
  toolRounds: number;
  toolCalls: number;
  limitReached: boolean;
  /** Always "agents" after Nora legacy retirement (honest observability). */
  cognitiveRuntime: NoraCognitiveRuntimeKind;
  sessionId: string | null;
};

```


### FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
```
/**
 * Nora cognitive turn entry — Option C single Agents Runner path.
 * No runtime selector. Legacy Nora dual-path debt retired (see MIGRATION.md).
 * Platform runToolCallingLoop remains independent OPS1/D1 infrastructure (RETIRED from Nora F1).
 */
import type { ConversationProvider, ProviderChatMessage } from "@/lib/platform/ai";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import { ProductSqliteSession } from "./productSqliteSession";
import { resolveNoraSessionSqlitePath } from "./sessionPaths";
import { runNoraAgentsTurn } from "./runNoraAgentsTurn";
import type { NoraCognitiveTurnResult } from "./types";

export type RunNoraCognitiveTurnInput = {
  correlationId: string;
  projectId: string;
  messages: ProviderChatMessage[];
  provider: ConversationProvider;
  enableTools?: boolean;
  sink?: EventSink;
  workspaceRoot?: string;
  /** Override Session DB (tests). */
  sessionDbPath?: string;
  sessionKey?: string;
};

export async function runNoraCognitiveTurn(
  input: RunNoraCognitiveTurnInput,
): Promise<NoraCognitiveTurnResult> {
  const system = input.messages.find((m) => m.role === "system");
  const userMessages = input.messages.filter((m) => m.role === "user");
  const lastUser = userMessages[userMessages.length - 1];
  if (!system?.content?.trim() || !lastUser?.content?.trim()) {
    throw new Error("NORA_AGENTS_TURN_REQUIRES_SYSTEM_AND_USER");
  }

  const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
  const session = new ProductSqliteSession({
    projectId: input.projectId,
    dbPath,
    sessionKey: input.sessionKey ?? "f1-default",
  });

  try {
    // CORR-OPT-C-01: do NOT auto-import caller-provided process-local
    // user/assistant history into durable Runner Session (untrusted provenance).
    return await runNoraAgentsTurn({
      correlationId: input.correlationId,
      projectId: input.projectId,
      systemInstructions: system.content,
      userContent: lastUser.content.trim(),
      session,
      workspaceRoot: input.workspaceRoot,
      sink: input.sink,
      enableTools: input.enableTools,
      provider: input.provider,
    });
  } finally {
    session.close();
  }
}

```


### FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
```
/**
 * Nora Option C cognitive runtime — public surface.
 * OD-04: Runner + Product SQLite Session + callModelInputFilter + routeToolCall.
 * Single Agents path (Fake + target). No Nora runtime selector.
 */

export type {
  NoraCognitiveRuntimeKind,
  NoraCognitiveTurnResult,
} from "./types";
export { ProductSqliteSession, userTextItem, assistantTextItem } from "./productSqliteSession";
export type { ProductSqliteSessionOptions } from "./productSqliteSession";
export { resolveNoraSessionSqlitePath } from "./sessionPaths";
export {
  sfiaBoundaryInstructions,
  createSfiaRouteToolAdapters,
  invokeSfiaToolViaRoute,
  assertRawJsonObjectSchema,
  sdkToolParametersOf,
} from "./sfiaAgentsTools";
export type { SfiaJsonObjectSchema, SfiaAgentsToolOptions } from "./sfiaAgentsTools";
export {
  createSfiaCallModelInputFilter,
  preserveStructuralRoles,
} from "./callModelInputFilter";
export {
  createNoraTurnBudget,
  claimToolSlot,
  markModelTurn,
  toolRoundsFromBudget,
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
} from "./turnBudget";
export type { NoraTurnBudget } from "./turnBudget";
export {
  createProviderAgentsModel,
  isFakeConversationProvider,
  agentInputToProviderItems,
  toolDefinitionsFromModelRequest,
} from "./providerAgentsModel";
export {
  createNoraAgentsRunner,
  runNoraAgentsTurn,
} from "./runNoraAgentsTurn";
export type { RunNoraAgentsTurnInput } from "./runNoraAgentsTurn";
export { runNoraCognitiveTurn } from "./runNoraCognitiveTurn";
export type { RunNoraCognitiveTurnInput } from "./runNoraCognitiveTurn";

```


### FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/MIGRATION.md
```
# Nora Option C cognitive runtime — migration status

**Target:** OD-04 Option C (Agents SDK Runner + Product SQLite Session +
`callModelInputFilter` + SFIA `routeToolCall`).

**Current state (after Nora legacy generic loop retirement):**
- Runner/Fake deterministic convergence = proven
- Nora F1 path = **single Agents Runner** (`orchestrateTurn` →
  `runNoraCognitiveTurn` → `runNoraAgentsTurn`)
- **No Nora runtime selector** (`resolveNoraCognitiveRuntime` deleted)
- **No Nora `"legacy"` runtime kind**
- **No Nora comparator dependency** on `runToolCallingLoop`
- **No `NORA_COGNITIVE_RUNTIME` F1 switch**
- Product SQLite Session + `createProviderAgentsModel` (any
  `ConversationProvider` with `completeRound`, including Fake/fixture) remain
- Platform `runToolCallingLoop` remains **independent infrastructure** for
  OPS1 / D1 consumers (not Nora F1)

**Next gate:** OPTION C PROJECT GIT INTEGRATION
- Requires explicit resolution/requalification of GIT-DEBT-MW1-01 first
- Distinct Morris GO for project commit/push/PR
- Then MW0 regression/parity on integrated Option C
- MW1 still incomplete / not integrated

**Not adopted here:** Responses Compaction, SDK HITL≠HD, Trace≠Evidence,
MW1 closure, MW0 Option C parity.

```


### FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
```
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

```


### FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
```
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

```


### FILE: projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
```
import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import { runNoraCognitiveTurn } from "@/lib/nora-cognitive-runtime";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { collectToolTelemetry } from "./collectToolTelemetry";
import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
import { resolveAssistantMode } from "./resolveAssistantMode";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "./types";

const MAX_HISTORY_MESSAGES = 20;
const SESSION_NOTICE_AGENTS =
  "Continuité conversationnelle via Product SQLite Session (project-scoped) — Session ≠ Truth C / LPS / HumanDecision. Project/LPS restent Product SQLite Truth C. AUCUNE EXÉCUTION.";

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
  };
}

/**
 * Thin F1 orchestration — Option C single Agents Runner path (Fake + target).
 * SFIA routeToolCall remains the tool authorization boundary.
 */
export async function orchestrateProjectAssistantTurn(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  /**
   * Optional server-side provider injection (eval / tests).
   * Prefer per-instance OpenAIConversationProvider over process.env mutation.
   */
  provider?: ConversationProvider;
  /** Test override for Product SQLite Session path. */
  sessionDbPath?: string;
}): Promise<ProjectAssistantSendResult> {
  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }

  const project = toContextDto(projectResult);
  const modeResolution = resolveAssistantMode(input.provider);
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const history = (input.history ?? [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_HISTORY_MESSAGES);

  const messages: ProviderChatMessage[] = [
    { role: "system", content: buildProjectSystemPrompt(project) },
    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
    { role: "user", content },
  ];

  const sink = new ProjectAssistantMemoryEventSink();
  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
  const provider = input.provider ?? resolveConversationProvider();
  const presentation = modeResolution.presentation;

  try {
    const turn = await runNoraCognitiveTurn({
      correlationId: `f1:${project.projectId}`,
      projectId: project.projectId,
      messages,
      provider,
      enableTools: true,
      sink,
      workspaceRoot,
      sessionDbPath: input.sessionDbPath,
    });

    const { toolEvents, sources } = collectToolTelemetry(sink.events);

    return {
      ok: true,
      status: "ok",
      text: turn.text,
      mode: modeResolution.mode,
      presentation,
      model: turn.usage?.model ?? null,
      toolRounds: turn.toolRounds,
      toolCalls: turn.toolCalls,
      sources,
      toolEvents,
      project,
      ephemeralNotice: SESSION_NOTICE_AGENTS,
      cognitiveRuntime: turn.cognitiveRuntime,
      sessionId: turn.sessionId,
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode: modeResolution.mode,
      retryable: true,
    };
  }
}

```


### FILE: projects/sfia-studio/app/features/project-assistant/types.ts
```
/**
 * Project Assistant DTOs — F1 conversation + F2 qualification/proposal/gate + F3 fixture.
 * Ephemeral / process-local only (no durable persistence).
 */

import type {
  DecisionDto,
  IntentClass,
  ProposalDto,
  QualificationDto,
} from "./f2/types";
import type {
  F3EvidenceDto,
  F3ExecutePayload,
  F3PreparePayload,
  F3RecommendationDto,
  F3ReviewBundleDto,
} from "./f3/types";

export type AssistantUiMode = "fixture" | "live" | "unavailable" | "unconfirmed";

export type AssistantTurnStatus =
  | "ok"
  | "provider_unavailable"
  | "provider_error"
  | "project_not_found"
  | "validation_error"
  | "stale"
  | "decision_error"
  | "prepare_error"
  | "execute_error";

export type AssistantHistoryMessage = {
  role: "user" | "assistant";
  content: string;
};

export type AssistantToolEventDto = {
  toolName: string;
  status: "succeeded" | "denied" | "failed" | "started" | "requested";
  pathOrRef: string | null;
  summary: string | null;
  errorCode: string | null;
  readOnly: true;
};

export type AssistantSourceDto = {
  kind: "git_local" | "github";
  label: string;
  pathOrRef: string | null;
};

export type ProjectAssistantContextDto = {
  projectId: string;
  name: string;
  shortReference: string | null;
  objective: string;
  contextSummary: string;
  criticality: string;
  constraints: string[];
  lpsId: string;
  lpsVersion: number;
  lpsCreatedAt: string;
  doctrineId: string;
  doctrineVersion: string;
  doctrineDigest: string;
  doctrineStatus: string;
  runtimeMode: string;
  persistence: string;
  readiness: string;
  activeCycleInstanceId?: string | null;
  ckcResolutionRef?: string | null;
};

export type F2TurnLabels = {
  recommendation: "RECOMMANDATION" | null;
  proposition: "PROPOSITION" | null;
  decisionRequired: "DÉCISION REQUISE" | null;
  decisionTaken: "DÉCISION PRISE" | null;
  noExecution: "AUCUNE EXÉCUTION";
};

export type F2TurnPayload = {
  turnKind:
    | "f1_informative"
    | "f2_clarification"
    | "f2_proposal"
    | "f2_blocked"
    | "f2_decision";
  intentClass: IntentClass;
  qualification: QualificationDto | null;
  proposal: ProposalDto | null;
  decision: DecisionDto | null;
  labels: F2TurnLabels;
  executionBlocked: boolean;
  processLocalNotice: string;
};

export type ProjectAssistantSendSuccess = {
  ok: true;
  status: "ok";
  text: string;
  mode: Exclude<AssistantUiMode, "unconfirmed">;
  presentation: "test_provider" | "openai_live";
  /** Observed provider model when available (from usage.model). */
  model?: string | null;
  toolRounds: number;
  toolCalls: number;
  sources: AssistantSourceDto[];
  toolEvents: AssistantToolEventDto[];
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  /** OD-04 Option C: always Agents Runner after Nora legacy retirement. */
  cognitiveRuntime?: "agents";
  /** Product SQLite Session id (Option C F1). */
  sessionId?: string | null;
  f2?: F2TurnPayload;
};

export type ProjectAssistantSendFailure = {
  ok: false;
  status: Exclude<AssistantTurnStatus, "ok">;
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
  proposal?: ProposalDto | null;
  f2?: F2TurnPayload;
};

export type ProjectAssistantSendResult =
  | ProjectAssistantSendSuccess
  | ProjectAssistantSendFailure;

export type ProjectAssistantDecideSuccess = {
  ok: true;
  status: "ok";
  mode: Exclude<AssistantUiMode, "unconfirmed">;
  presentation: "test_provider" | "openai_live" | "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f2: F2TurnPayload;
};

export type ProjectAssistantDecideResult =
  | ProjectAssistantDecideSuccess
  | ProjectAssistantSendFailure;

export type ProjectAssistantPrepareF3Success = {
  ok: true;
  status: "ok";
  mode: "fixture";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f2: F2TurnPayload | null;
  f3: F3PreparePayload;
};

export type ProjectAssistantPrepareF3Failure = {
  ok: false;
  status: "prepare_error" | "stale" | "project_not_found" | "validation_error";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
  proposal?: ProposalDto | null;
};

export type ProjectAssistantPrepareF3Result =
  | ProjectAssistantPrepareF3Success
  | ProjectAssistantPrepareF3Failure;

export type ProjectAssistantPrepareM3Success = {
  ok: true;
  status: "ok";
  mode: "m3_prepare";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f3: import("./f3/prepareM3FromDecision").F3M3PreparePayload;
};

export type ProjectAssistantPrepareM3Failure = {
  ok: false;
  status: "prepare_error" | "stale" | "project_not_found" | "validation_error";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
};

export type ProjectAssistantPrepareM3Result =
  | ProjectAssistantPrepareM3Success
  | ProjectAssistantPrepareM3Failure;

export type ProjectAssistantPrepareResolvedM3Success = {
  ok: true;
  status: "ok";
  mode: "m3_resolved_fixture";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f3: import("./f3/prepareAndResolveM3ProductPath").F3M3ResolvedPayload;
};

export type ProjectAssistantPrepareResolvedM3Failure = {
  ok: false;
  status: "prepare_error" | "stale" | "project_not_found" | "validation_error";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
};

export type ProjectAssistantPrepareResolvedM3Result =
  | ProjectAssistantPrepareResolvedM3Success
  | ProjectAssistantPrepareResolvedM3Failure;

export type ProjectAssistantExecuteF3Success = {
  ok: true;
  status: "ok";
  mode: "fixture";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f3: F3ExecutePayload;
};

export type ProjectAssistantExecuteF3Failure = {
  ok: false;
  status: "execute_error" | "stale" | "project_not_found" | "validation_error";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
  proposal?: ProposalDto | null;
};

export type ProjectAssistantExecuteF3Result =
  | ProjectAssistantExecuteF3Success
  | ProjectAssistantExecuteF3Failure;

export type ProjectAssistantRehydrateEvidenceOutcomeSuccess = {
  ok: true;
  status: "ok";
  mode: "fixture";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  evidence: F3EvidenceDto[];
  reviewBundles: F3ReviewBundleDto[];
  recommendation: F3RecommendationDto;
  lpsVersion: number;
  evidenceIds: string[];
  reviewBundleIds: string[];
};

export type ProjectAssistantRehydrateEvidenceOutcomeFailure = {
  ok: false;
  status: "rehydrate_error" | "project_not_found";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
  project?: ProjectAssistantContextDto;
};

export type ProjectAssistantRehydrateEvidenceOutcomeResult =
  | ProjectAssistantRehydrateEvidenceOutcomeSuccess
  | ProjectAssistantRehydrateEvidenceOutcomeFailure;

```


### FILE: projects/sfia-studio/app/lib/nora-eval/optionCObservables.ts
```
/**
 * Nora-eval observability helpers for Option C.
 * Does not create a second eval framework — extends MW0 harness metadata only.
 */

export type NoraCognitiveRuntimeObservable = {
  cognitiveRuntime: "agents" | "unknown";
  sessionPath: "product_sqlite_session" | "none";
  toolExecutionPath: "routeToolCall" | "unknown";
  responsesCompactionAdopted: false;
};

/** Default Option C observables for evidence packs / parity prep. */
export function optionCRuntimeObservables(
  cognitiveRuntime: "agents" | "unknown" = "unknown",
): NoraCognitiveRuntimeObservable {
  return {
    cognitiveRuntime,
    sessionPath:
      cognitiveRuntime === "agents" ? "product_sqlite_session" : "none",
    toolExecutionPath: "routeToolCall",
    responsesCompactionAdopted: false,
  };
}

```


### FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/fakeConvergence.d0.test.ts
```
/** @vitest-environment node */
/**
 * MW1 Option C — Fake/Runner path + Nora legacy retirement proofs.
 * Fake F1 → Agents Runner + Product SQLite Session + routeToolCall.
 * No Nora selector / no Nora comparator dependency on runToolCallingLoop.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import {
  ProductSqliteSession,
  createProviderAgentsModel,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import * as toolsMod from "@/lib/platform/tools";
import * as noraRuntime from "@/lib/nora-cognitive-runtime";

const tempDirs: string[] = [];

function tempDb(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-conv-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

const F1_PROJECT = {
  projectId: "prj:conv-f1",
  name: "Convergence F1",
  shortReference: "CF1",
  objective: "Prove Fake→Runner convergence.",
  contextSummary: "Deterministic only.",
  criticality: "STANDARD" as const,
  constraints: ["Lecture seule"],
  lpsId: "lps:conv",
  lpsVersion: 1,
  lpsCreatedAt: "2026-08-30T00:00:00.000Z",
  doctrineId: "pkg:studio",
  doctrineVersion: "1.0.0",
  doctrineDigest: "digest:conv",
  doctrineStatus: "RESOLVED",
  runtimeMode: "LOCAL_PROCESS" as const,
  persistence: "PARTIAL" as const,
  readiness: "NOT_READY" as const,
};

describe("MW1 Option C — Fake/Runner + Nora legacy retirement", () => {
  it("R1/P2 — Nora runtime selector file and export are gone", () => {
    expect(
      fs.existsSync(
        path.resolve(
          __dirname,
          "../../lib/nora-cognitive-runtime/resolveRuntime.ts",
        ),
      ),
    ).toBe(false);
    expect(
      "resolveNoraCognitiveRuntime" in (noraRuntime as Record<string, unknown>),
    ).toBe(false);
  });

  it("P3/P5/Q1 — Fake F1 turn uses agents + Session; Nora sources never call runToolCallingLoop", async () => {
    const dbPath = tempDb("p3.sqlite");
    const provider = new FakeConversationProvider({
      scripted: ["[TEST/FAKE · NON LIVE] Text-only Fake via Runner."],
    });
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const turn = await runNoraCognitiveTurn({
      correlationId: "conv-p3",
      projectId: "prj:p3",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        { role: "user", content: "Hello convergence" },
      ],
      provider,
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(turn.cognitiveRuntime).toBe("agents");
    expect(turn.sessionId).toBeTruthy();
    expect(turn.text).toMatch(/TEST\/FAKE|Runner/i);
    expect(turn.limitReached).toBe(false);
    expect(routeSpy).not.toHaveBeenCalled();

    const turnSrc = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts",
      ),
      "utf8",
    );
    expect(turnSrc).not.toMatch(/runToolCallingLoop\s*\(/);
    expect(turnSrc).not.toMatch(/from ["']@\/lib\/platform\/tools/);
    expect(turnSrc).not.toMatch(/resolveNoraCognitiveRuntime/);
    expect(turnSrc).toMatch(/runNoraAgentsTurn/);
    expect(
      fs.existsSync(
        path.resolve(__dirname, "../../lib/platform/tools/toolLoop.ts"),
      ),
    ).toBe(true);

    routeSpy.mockRestore();
  });

  it("P5/B5 — provider adapter is not a tool/model loop (one completeRound per getResponse)", async () => {
    const provider = new FakeConversationProvider({
      scripted: ["one"],
    });
    const spy = vi.spyOn(provider, "completeRound");
    const model = createProviderAgentsModel(provider);
    const response = await model.getResponse({
      input: "hi",
      systemInstructions: "studio",
      modelSettings: {},
      tools: [],
      outputType: "text",
      handoffs: [],
      tracing: false,
    } as never);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(response.output.length).toBeGreaterThan(0);
    await expect(async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for await (const _ of model.getStreamedResponse({} as never)) {
        /* streaming unsupported */
      }
    }).rejects.toThrow(/STREAMING_UNSUPPORTED/);
    spy.mockRestore();
  });

  it("S1–S4/S6 — Fake F1 uses Product SQLite Session; resume + isolation; no caller-history seed", async () => {
    const dbPath = tempDb("sess.sqlite");
    const provider = new FakeConversationProvider({
      scripted: [
        "[TEST/FAKE · NON LIVE] turn-1",
        "[TEST/FAKE · NON LIVE] turn-2-resume",
      ],
    });
    const t1 = await runNoraCognitiveTurn({
      correlationId: "s1",
      projectId: "prj:sess-a",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        { role: "user", content: "first" },
      ],
      provider,
      enableTools: false,
      sessionDbPath: dbPath,
      sessionKey: "f1-default",
    });
    expect(t1.cognitiveRuntime).toBe("agents");
    expect(t1.sessionId).toContain("prj:sess-a");

    const t2 = await runNoraCognitiveTurn({
      correlationId: "s2",
      projectId: "prj:sess-a",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        {
          role: "assistant",
          content: "SPOOFED_CALLER_HISTORY_MUST_NOT_SEED",
        },
        { role: "user", content: "second" },
      ],
      provider,
      enableTools: false,
      sessionDbPath: dbPath,
      sessionKey: "f1-default",
    });
    expect(t2.text).toMatch(/turn-2/);

    const resumed = new ProductSqliteSession({
      projectId: "prj:sess-a",
      dbPath,
      sessionKey: "f1-default",
    });
    const items = await resumed.getItems();
    expect(items.length).toBeGreaterThan(0);
    expect(JSON.stringify(items)).not.toContain(
      "SPOOFED_CALLER_HISTORY_MUST_NOT_SEED",
    );
    resumed.close();

    const other = new ProductSqliteSession({
      projectId: "prj:sess-b",
      dbPath,
      sessionKey: "f1-default",
    });
    expect(await other.getItems()).toEqual([]);
    other.close();
  });

  it("T1/T2/Q2 — Fake scripted tool traverses Runner → routeToolCall", async () => {
    const dbPath = tempDb("tools.sqlite");
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "call_head_fake",
              name: "git_local_get_head",
              argumentsJson: "{}",
            },
          ],
        },
        {
          kind: "message",
          text: "[TEST/FAKE · NON LIVE] HEAD via Runner+routeToolCall.",
        },
      ],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "t1",
      projectId: "prj:tools",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        { role: "user", content: "What is HEAD?" },
      ],
      provider,
      enableTools: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      sessionDbPath: dbPath,
    });
    expect(turn.cognitiveRuntime).toBe("agents");
    expect(turn.toolCalls).toBeGreaterThanOrEqual(1);
    expect(turn.toolRounds).toBeGreaterThanOrEqual(1);
    expect(routeSpy).toHaveBeenCalled();
    expect(
      routeSpy.mock.calls.some((c) => c[0]?.name === "git_local_get_head"),
    ).toBe(true);
    expect(turn.text).toMatch(/HEAD|Runner|TEST\/FAKE/i);
    routeSpy.mockRestore();
  });

  it("T3/T4/Q3 — denied path uses real routeToolCall; no forbidden content leak", async () => {
    const dbPath = tempDb("deny.sqlite");
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "call_deny_fake",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({ path: "/etc/passwd" }),
            },
          ],
        },
        {
          kind: "message",
          text: "[TEST/FAKE · NON LIVE] Path denied; no content.",
        },
      ],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "t3",
      projectId: "prj:deny",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        { role: "user", content: "Read /etc/passwd" },
      ],
      provider,
      enableTools: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      sessionDbPath: dbPath,
    });
    expect(routeSpy).toHaveBeenCalled();
    expect(turn.text).not.toMatch(/root:x:0:0/);
    const denyPayload = JSON.stringify(routeSpy.mock.results.map((r) => r.value));
    expect(denyPayload).not.toMatch(/root:x:0:0/);
    routeSpy.mockRestore();
  });

  it("T5 — enableTools=false executes zero routeToolCall on Fake path", async () => {
    const dbPath = tempDb("et.sqlite");
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "should_not_route",
              name: "git_local_get_head",
              argumentsJson: "{}",
            },
          ],
        },
      ],
    });
    await runNoraCognitiveTurn({
      correlationId: "t5",
      projectId: "prj:et",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        { role: "user", content: "HEAD?" },
      ],
      provider,
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(routeSpy).not.toHaveBeenCalled();
    routeSpy.mockRestore();
  });

  it("T6/B1–B4 — Fake >4 tool calls in one model turn → max 4 + limitReached", async () => {
    const dbPath = tempDb("budget.sqlite");
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            { callId: "c1", name: "git_local_get_head", argumentsJson: "{}" },
            { callId: "c2", name: "git_local_get_head", argumentsJson: "{}" },
            { callId: "c3", name: "git_local_get_head", argumentsJson: "{}" },
            { callId: "c4", name: "git_local_get_head", argumentsJson: "{}" },
            { callId: "c5", name: "git_local_get_head", argumentsJson: "{}" },
            { callId: "c6", name: "git_local_get_head", argumentsJson: "{}" },
          ],
        },
        { kind: "message", text: "[TEST/FAKE] budget saturated" },
      ],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "t6",
      projectId: "prj:budget",
      messages: [
        { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
        { role: "user", content: "six tools" },
      ],
      provider,
      enableTools: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      sessionDbPath: dbPath,
    });
    expect(turn.toolRounds).toBe(1);
    expect(turn.toolCalls).toBe(4);
    expect(turn.limitReached).toBe(true);
    expect(
      routeSpy.mock.calls.filter((c) => c[0]?.name === "git_local_get_head")
        .length,
    ).toBe(4);
    routeSpy.mockRestore();
  });

  it("E1/E3/Q4 — Fake provider error propagates; no fabricated success", async () => {
    const dbPath = tempDb("err.sqlite");
    const provider = new FakeConversationProvider({ failOnCall: 1 });
    await expect(
      runNoraCognitiveTurn({
        correlationId: "e1",
        projectId: "prj:err",
        messages: [
          { role: "system", content: buildProjectSystemPrompt(F1_PROJECT) },
          { role: "user", content: "boom" },
        ],
        provider,
        enableTools: false,
        sessionDbPath: dbPath,
      }),
    ).rejects.toThrow(/FAKE_PROVIDER_ERROR/);
  });

  it("C1/R — RESERVE-OPT-C-01: generic boundary has no universal F1 AUCUNE EXÉCUTION; Studio prompt does", async () => {
    const generic = sfiaBoundaryInstructions();
    expect(generic).not.toMatch(/AUCUNE EXÉCUTION/);
    expect(generic).toMatch(/Session/);
    expect(generic).toMatch(/Studio-supplied/);
    expect(generic).toMatch(/Tool exposure is not business authorization/);

    const studio = buildProjectSystemPrompt(F1_PROJECT);
    expect(studio).toMatch(/AUCUNE EXÉCUTION/);
    expect(studio).toMatch(/LECTURE SEULE|lecture/i);

    const dbPath = tempDb("r01.sqlite");
    const provider = new FakeConversationProvider({
      scripted: ["[TEST/FAKE] ok"],
    });
    const spy = vi.spyOn(provider, "completeRound");
    await runNoraCognitiveTurn({
      correlationId: "r01",
      projectId: "prj:r01",
      messages: [
        { role: "system", content: studio },
        { role: "user", content: "constraints?" },
      ],
      provider,
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(spy).toHaveBeenCalled();
    const firstArg = spy.mock.calls[0]?.[0];
    expect(JSON.stringify(firstArg)).toMatch(/AUCUNE EXÉCUTION/);
    spy.mockRestore();
  });

  it("PL1 — platform runToolCallingLoop file remains (independent consumers)", () => {
    const loopSrc = fs.readFileSync(
      path.resolve(__dirname, "../../lib/platform/tools/toolLoop.ts"),
      "utf8",
    );
    expect(loopSrc).toMatch(/export async function runToolCallingLoop/);
    const ops1 = fs.readFileSync(
      path.resolve(__dirname, "../../lib/ops1/conversation/service.ts"),
      "utf8",
    );
    expect(ops1).toMatch(/runToolCallingLoop/);
    const d1 = fs.readFileSync(
      path.resolve(__dirname, "../../lib/d1/intake/analyzeIntent.ts"),
      "utf8",
    );
    expect(d1).toMatch(/runToolCallingLoop/);
  });
});

```


### FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/runner.d0.test.ts
```
/** @vitest-environment node */
/**
 * MW1 Option C — Runner bounds / tools / schema / deny (CORR-OPT-C-02/04/05).
 * Nora legacy comparator debt retired — Runner-only proofs.
 */
import { describe, expect, it, vi } from "vitest";
import { Agent, Runner } from "@openai/agents";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { CONTROL_TOWER_TOOL_DEFINITIONS } from "@/lib/platform/tools";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import {
  ProductSqliteSession,
  createNoraAgentsRunner,
  createSfiaRouteToolAdapters,
  invokeSfiaToolViaRoute,
  runNoraAgentsTurn,
  runNoraCognitiveTurn,
  sdkToolParametersOf,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import * as toolsMod from "@/lib/platform/tools";

describe("MW1 Option C — Runner D0 (legacy Nora comparator retired)", () => {
  it("T1 — underlying SFIA tool git_local_get_head via routeToolCall", async () => {
    const out = await invokeSfiaToolViaRoute("git_local_get_head");
    expect(out.length).toBeGreaterThan(0);
    expect(out).toMatch(/[0-9a-f]{7,40}/i);
  });

  it("M2 — Fake F1 uses Agents Runner (not platform tool loop)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-m2-"));
    const dbPath = path.join(dir, "m2.sqlite");
    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "call_head_a",
              name: "git_local_get_head",
              argumentsJson: "{}",
            },
          ],
        },
        {
          kind: "message",
          text: "[TEST/FAKE] HEAD observed via Runner. AUCUNE EXÉCUTION.",
        },
      ],
    });
    const result = await runNoraCognitiveTurn({
      correlationId: "optc-fake-agents-d0",
      projectId: "prj:m2",
      messages: [
        {
          role: "system",
          content: buildProjectSystemPrompt({
            projectId: "prj:m2",
            name: "M2",
            shortReference: "M2",
            objective: "agents",
            contextSummary: "c",
            criticality: "STANDARD",
            constraints: ["Lecture seule"],
            lpsId: "lps",
            lpsVersion: 1,
            lpsCreatedAt: "2026-08-30T00:00:00.000Z",
            doctrineId: "pkg",
            doctrineVersion: "1",
            doctrineDigest: "d",
            doctrineStatus: "RESOLVED",
            runtimeMode: "LOCAL_PROCESS",
            persistence: "PARTIAL",
            readiness: "NOT_READY",
          }),
        },
        { role: "user", content: "What is the current HEAD?" },
      ],
      provider,
      enableTools: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      sessionDbPath: dbPath,
    });
    expect(result.cognitiveRuntime).toBe("agents");
    expect(result.toolCalls).toBeGreaterThanOrEqual(1);
    expect(result.text).toMatch(/HEAD|sha|branch|TEST\/FAKE|Runner/i);
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("T1 — Runner dispatches same SFIA tool through routeToolCall adapters", async () => {
    const model = new ScriptedModel([
      [functionCall("git_local_get_head", {}, { callId: "call_head_c" })],
      [assistantMessage("HEAD retrieved via SFIA read-only tool.")],
    ]);
    const tools = createSfiaRouteToolAdapters({
      correlationId: "optc-runner-d0",
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    const agent = new Agent({
      name: "NoraOptC",
      instructions: sfiaBoundaryInstructions(),
      model,
      tools,
    });
    const runner = createNoraAgentsRunner(sfiaBoundaryInstructions());
    const result = await runner.run(agent, "What is the current HEAD?");
    expect(String(result.finalOutput)).toMatch(/HEAD|retrieved/i);
    expect(model.calls.length).toBe(2);
    const lastInput = model.lastCall?.request.input;
    expect(Array.isArray(lastInput)).toBe(true);
    expect(
      (lastInput as unknown[]).some(
        (item) =>
          item &&
          typeof item === "object" &&
          (item as { type?: string }).type === "function_call_result",
      ),
    ).toBe(true);
    model.assertComplete();
  });

  it("T2/T3/A5 — real route-level PATH_NOT_ALLOWED via Runner (no synthetic Nora deny tool)", async () => {
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path: "/etc/passwd" },
          { callId: "call_deny" },
        ),
      ],
      [assistantMessage("Path denied by Studio router; no content.")],
    ]);
    const tools = createSfiaRouteToolAdapters({
      correlationId: "optc-deny-d0",
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(tools.some((t) => t.name === "forbidden_product_write")).toBe(false);
    const agent = new Agent({
      name: "DenyAgent",
      instructions: sfiaBoundaryInstructions(),
      model,
      tools,
    });
    const runner = createNoraAgentsRunner(sfiaBoundaryInstructions());
    const result = await runner.run(agent, "Read /etc/passwd");
    expect(routeSpy).toHaveBeenCalled();
    const denyCall = routeSpy.mock.calls.find(
      (c) => c[0]?.name === "git_local_read_file",
    );
    expect(denyCall).toBeTruthy();
    const out = String(result.finalOutput);
    expect(out).not.toMatch(/root:x:0:0/);
    // Model-visible tool result should reflect deny/failure, not file body
    const lastInput = model.lastCall?.request.input as unknown[];
    const toolResult = lastInput?.find(
      (item) =>
        item &&
        typeof item === "object" &&
        (item as { type?: string }).type === "function_call_result",
    ) as { output?: unknown } | undefined;
    const payload = JSON.stringify(toolResult?.output ?? toolResult ?? {});
    expect(payload).toMatch(/PATH_NOT_ALLOWED|denied|ok\":false|error/i);
    expect(payload).not.toMatch(/root:x:0:0/);
    model.assertComplete();
    routeSpy.mockRestore();
  });

  it("T4 — SDK raw schema preserves min/max/required/additionalProperties", () => {
    const adapters = createSfiaRouteToolAdapters({
      correlationId: "schema",
    });
    for (const name of [
      "git_local_search_files",
      "git_local_search_content",
      "git_local_read_file",
    ] as const) {
      const def = CONTROL_TOWER_TOOL_DEFINITIONS.find((d) => d.name === name)!;
      const sdk = sdkToolParametersOf(adapters, name)!;
      expect(sdk.type).toBe("object");
      expect(sdk.additionalProperties).toBe(false);
      expect(sdk.required).toEqual(def.parameters.required);
      const props = sdk.properties as Record<string, Record<string, unknown>>;
      const defProps = def.parameters.properties as Record<
        string,
        Record<string, unknown>
      >;
      for (const [key, schema] of Object.entries(defProps)) {
        expect(props[key]?.type).toBe(schema.type);
        if ("minimum" in schema) expect(props[key]?.minimum).toBe(schema.minimum);
        if ("maximum" in schema) expect(props[key]?.maximum).toBe(schema.maximum);
      }
    }
  });

  it("T5 — enableTools=false exposes/executes no SFIA tools", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-et-"));
    const dbPath = path.join(dir, "et.sqlite");
    const session = new ProductSqliteSession({ projectId: "prj:et", dbPath });
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const model = new ScriptedModel([
      [
        functionCall("git_local_get_head", {}, { callId: "should_not_run" }),
      ],
      [assistantMessage("no tools")],
    ]);
    // When tools are empty, ScriptedModel functionCall may error — catch and assert no route
    try {
      await runNoraAgentsTurn({
        correlationId: "et",
        projectId: "prj:et",
        systemInstructions: sfiaBoundaryInstructions(),
        userContent: "HEAD?",
        session,
        model,
        enableTools: false,
        maxTurns: 2,
      });
    } catch {
      /* model may fail if tool missing — still prove no routeToolCall */
    }
    expect(routeSpy).not.toHaveBeenCalled();
    routeSpy.mockRestore();
    session.close();
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("R1/R2/R6 — one model turn with ≤4 tool calls → toolRounds=1, limitReached=false", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-r1-"));
    const dbPath = path.join(dir, "r1.sqlite");
    const session = new ProductSqliteSession({ projectId: "prj:r1", dbPath });
    const model = new ScriptedModel([
      [
        functionCall("git_local_get_head", {}, { callId: "c1" }),
        functionCall("git_local_get_head", {}, { callId: "c2" }),
        functionCall("git_local_get_head", {}, { callId: "c3" }),
      ],
      [assistantMessage("three heads")],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "r1",
      projectId: "prj:r1",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "triple",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      maxTurns: 4,
    });
    expect(result.toolRounds).toBe(1);
    expect(result.toolCalls).toBe(3);
    expect(result.limitReached).toBe(false);
    expect(result.toolRounds).not.toBe(Math.min(result.toolCalls, 4)); // R7 guard vs old approx when equal by chance still ok
    model.assertComplete();
    session.close();
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("R3/R4 — >4 tool calls in one model turn → only 4 execute, limitReached=true", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-r3-"));
    const dbPath = path.join(dir, "r3.sqlite");
    const session = new ProductSqliteSession({ projectId: "prj:r3", dbPath });
    const routeSpy = vi.spyOn(toolsMod, "routeToolCall");
    const model = new ScriptedModel([
      [
        functionCall("git_local_get_head", {}, { callId: "c1" }),
        functionCall("git_local_get_head", {}, { callId: "c2" }),
        functionCall("git_local_get_head", {}, { callId: "c3" }),
        functionCall("git_local_get_head", {}, { callId: "c4" }),
        functionCall("git_local_get_head", {}, { callId: "c5" }),
        functionCall("git_local_get_head", {}, { callId: "c6" }),
      ],
      [assistantMessage("budget saturated")],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "r3",
      projectId: "prj:r3",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "six",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      maxTurns: 4,
    });
    expect(result.toolRounds).toBe(1);
    expect(result.toolCalls).toBe(4);
    expect(result.limitReached).toBe(true);
    const headCalls = routeSpy.mock.calls.filter(
      (c) => c[0]?.name === "git_local_get_head",
    );
    expect(headCalls.length).toBe(4);
    model.assertComplete();
    routeSpy.mockRestore();
    session.close();
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("R5 — maxTurns exhaustion maps to limitReached=true (graceful Nora semantics)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-r5-"));
    const dbPath = path.join(dir, "r5.sqlite");
    const session = new ProductSqliteSession({ projectId: "prj:r5", dbPath });
    const model = new ScriptedModel([
      [functionCall("git_local_get_head", {}, { callId: "c1" })],
      [functionCall("git_local_get_head", {}, { callId: "c2" })],
      [functionCall("git_local_get_head", {}, { callId: "c3" })],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "r5",
      projectId: "prj:r5",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "loop",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      maxTurns: 2,
    });
    expect(result.limitReached).toBe(true);
    expect(result.text.length).toBeGreaterThan(0);
    session.close();
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("R5 comparator — raw Runner still throws MaxTurns without our handler", async () => {
    const model = new ScriptedModel([
      [functionCall("git_local_get_head", {}, { callId: "c1" })],
      [functionCall("git_local_get_head", {}, { callId: "c2" })],
      [functionCall("git_local_get_head", {}, { callId: "c3" })],
    ]);
    const tools = createSfiaRouteToolAdapters({
      correlationId: "optc-max",
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    const agent = new Agent({
      name: "Max",
      instructions: sfiaBoundaryInstructions(),
      model,
      tools,
    });
    const runner = new Runner({ tracingDisabled: true });
    await expect(runner.run(agent, "loop", { maxTurns: 2 })).rejects.toThrow();
  });

  it("M1 — Fake and target F1 emit cognitiveRuntime agents only", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-m1-"));
    const dbPath = path.join(dir, "m1.sqlite");
    const turn = await runNoraCognitiveTurn({
      correlationId: "m1",
      projectId: "prj:m1",
      messages: [
        { role: "system", content: "Studio F1. AUCUNE EXÉCUTION." },
        { role: "user", content: "ping" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] agents only"],
      }),
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(turn.cognitiveRuntime).toBe("agents");
    expect(turn.cognitiveRuntime).not.toBe("legacy" as never);
    fs.rmSync(dir, { recursive: true, force: true });
  });
});

```


### DELETED FILE: resolveRuntime.ts (pre-retirement content summary)
Former file always returned `"agents"`; ignored `NORA_COGNITIVE_RUNTIME=legacy` for F1.
Deleted entirely — no replacement selector.

### DIFF vs HEAD for tracked project-assistant / nora-eval surfaces
```

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
index 0d6a322e..7b4dca3c 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
@@ -1,3 +1,6 @@
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
 import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
 import {
   FakeConversationProvider,
@@ -70,12 +73,16 @@ const SUCCESS = {

 describe("F1 project assistant orchestration", () => {
   const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
+  let sessionDir: string;
+  let sessionDbPath: string;

   beforeEach(() => {
     process.env.OPS1_CONVERSATION_PROVIDER = "fake";
     getProjectRuntimeActionMock.mockReset();
     getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
     setConversationProviderForTests(null);
+    sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-f1-orch-"));
+    sessionDbPath = path.join(sessionDir, "session.sqlite");
   });

   afterEach(() => {
@@ -85,12 +92,14 @@ describe("F1 project assistant orchestration", () => {
     } else {
       process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
     }
+    fs.rmSync(sessionDir, { recursive: true, force: true });
   });

   it("injects project context and returns a fake non-live reply", async () => {
     const result = await orchestrateProjectAssistantTurn({
       projectId: "prj:f1-demo",
       content: "Résume l'objectif du projet.",
+      sessionDbPath,
     });

     expect(result.ok).toBe(true);
@@ -100,21 +109,26 @@ describe("F1 project assistant orchestration", () => {
     expect(result.text).toMatch(/TEST\/FAKE · NON LIVE/);
     expect(result.project.projectId).toBe("prj:f1-demo");
     expect(result.project.objective).toContain("assistant contextualisé");
-    expect(result.ephemeralNotice).toMatch(/éphémère/i);
+    expect(result.ephemeralNotice).toMatch(/Session|Product SQLite/i);
+    expect(result.cognitiveRuntime).toBe("agents");
+    expect(result.sessionId).toBeTruthy();
     expect(getProjectRuntimeActionMock).toHaveBeenCalledWith("prj:f1-demo");
   });

-  it("supports multi-turn history", async () => {
+  it("supports multi-turn via Product SQLite Session (caller history not required)", async () => {
     const first = await orchestrateProjectAssistantTurn({
       projectId: "prj:f1-demo",
       content: "Premier tour",
+      sessionDbPath,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
+    expect(first.cognitiveRuntime).toBe("agents");

     const second = await orchestrateProjectAssistantTurn({
       projectId: "prj:f1-demo",
       content: "Deuxième tour",
+      sessionDbPath,
       history: [
         { role: "user", content: "Premier tour" },
         { role: "assistant", content: first.text },
@@ -122,13 +136,16 @@ describe("F1 project assistant orchestration", () => {
     });
     expect(second.ok).toBe(true);
     if (!second.ok) return;
-    expect(second.text).toMatch(/historique=/);
+    expect(second.cognitiveRuntime).toBe("agents");
+    expect(second.sessionId).toBe(first.sessionId);
+    expect(second.text).toMatch(/TEST\/FAKE · NON LIVE/);
   });

   it("invokes git read tools and surfaces tool events", async () => {
     const result = await orchestrateProjectAssistantTurn({
       projectId: "prj:f1-demo",
       content: "Besoin d'un statut git __CT_TOOL_GIT_STATUS__",
+      sessionDbPath,
     });
     expect(result.ok).toBe(true);
     if (!result.ok) return;
@@ -143,6 +160,7 @@ describe("F1 project assistant orchestration", () => {
     const result = await orchestrateProjectAssistantTurn({
       projectId: "prj:f1-demo",
       content: "Lis le secret __CT_TOOL_DENIED_PATH__",
+      sessionDbPath,
     });
     expect(result.ok).toBe(true);
     if (!result.ok) return;
@@ -155,6 +173,7 @@ describe("F1 project assistant orchestration", () => {
     const result = await orchestrateProjectAssistantTurn({
       projectId: "prj:f1-demo",
       content: "Force error __OPS1_FORCE_PROVIDER_ERROR__",
+      sessionDbPath,
     });
     expect(result.ok).toBe(false);
     if (result.ok) return;
@@ -167,6 +186,7 @@ describe("F1 project assistant orchestration", () => {
     const result = await orchestrateProjectAssistantTurn({
       projectId: "prj:f1-demo",
       content: "   ",
+      sessionDbPath,
     });
     expect(result.ok).toBe(false);
     if (result.ok) return;
@@ -182,6 +202,7 @@ describe("F1 project assistant orchestration", () => {
     const result = await orchestrateProjectAssistantTurn({
       projectId: "prj:f1-demo",
       content: "Hello",
+      sessionDbPath,
     });
     expect(result.ok).toBe(false);
     if (result.ok) return;
@@ -196,6 +217,7 @@ describe("F1 project assistant orchestration", () => {
     const result = await orchestrateProjectAssistantTurn({
       projectId: "prj:f1-demo",
       content: "Ping",
+      sessionDbPath,
     });
     expect(result.ok).toBe(true);
     expect(getProjectRuntimeActionMock).toHaveBeenCalled();
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 8f21e7b5..43504bf0 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -4,7 +4,7 @@ import {
   type ConversationProvider,
   type ProviderChatMessage,
 } from "@/lib/platform/ai";
-import { runToolCallingLoop } from "@/lib/platform/tools";
+import { runNoraCognitiveTurn } from "@/lib/nora-cognitive-runtime";
 import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
 import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
@@ -18,8 +18,8 @@ import type {
 } from "./types";

 const MAX_HISTORY_MESSAGES = 20;
-const EPHEMERAL_NOTICE =
-  "Conversation éphémère (process-local) — un rechargement peut effacer l'historique. Project/LPS/Cycle linkage M2 reste dans Product SQLite. AUCUNE EXÉCUTION.";
+const SESSION_NOTICE_AGENTS =
+  "Continuité conversationnelle via Product SQLite Session (project-scoped) — Session ≠ Truth C / LPS / HumanDecision. Project/LPS restent Product SQLite Truth C. AUCUNE EXÉCUTION.";

 function toContextDto(
   result: Extract<
@@ -49,7 +49,8 @@ function toContextDto(
 }

 /**
- * Thin F1 orchestration — platform AI + tool loop only (no OPS1 session).
+ * Thin F1 orchestration — Option C single Agents Runner path (Fake + target).
+ * SFIA routeToolCall remains the tool authorization boundary.
  */
 export async function orchestrateProjectAssistantTurn(input: {
   projectId: string;
@@ -60,6 +61,8 @@ export async function orchestrateProjectAssistantTurn(input: {
    * Prefer per-instance OpenAIConversationProvider over process.env mutation.
    */
   provider?: ConversationProvider;
+  /** Test override for Product SQLite Session path. */
+  sessionDbPath?: string;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
   if (!content) {
@@ -119,13 +122,15 @@ export async function orchestrateProjectAssistantTurn(input: {
   const presentation = modeResolution.presentation;

   try {
-    const loop = await runToolCallingLoop({
+    const turn = await runNoraCognitiveTurn({
       correlationId: `f1:${project.projectId}`,
+      projectId: project.projectId,
       messages,
       provider,
       enableTools: true,
       sink,
       workspaceRoot,
+      sessionDbPath: input.sessionDbPath,
     });

     const { toolEvents, sources } = collectToolTelemetry(sink.events);
@@ -133,16 +138,18 @@ export async function orchestrateProjectAssistantTurn(input: {
     return {
       ok: true,
       status: "ok",
-      text: loop.text,
+      text: turn.text,
       mode: modeResolution.mode,
       presentation,
-      model: loop.usage?.model ?? null,
-      toolRounds: loop.toolRounds,
-      toolCalls: loop.toolCalls,
+      model: turn.usage?.model ?? null,
+      toolRounds: turn.toolRounds,
+      toolCalls: turn.toolCalls,
       sources,
       toolEvents,
       project,
-      ephemeralNotice: EPHEMERAL_NOTICE,
+      ephemeralNotice: SESSION_NOTICE_AGENTS,
+      cognitiveRuntime: turn.cognitiveRuntime,
+      sessionId: turn.sessionId,
     };
   } catch (error) {
     const message =
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 5991bf00..966ae5e9 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -110,6 +110,10 @@ export type ProjectAssistantSendSuccess = {
   toolEvents: AssistantToolEventDto[];
   project: ProjectAssistantContextDto;
   ephemeralNotice: string;
+  /** OD-04 Option C: always Agents Runner after Nora legacy retirement. */
+  cognitiveRuntime?: "agents";
+  /** Product SQLite Session id (Option C F1). */
+  sessionId?: string | null;
   f2?: F2TurnPayload;
 };

diff --git a/projects/sfia-studio/app/lib/nora-eval/index.ts b/projects/sfia-studio/app/lib/nora-eval/index.ts
index 5e746e0b..28250cec 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -17,3 +17,7 @@ export {
   runR1ProviderSmoke,
   runR2ProductScenario,
 } from "./productPath";
+export {
+  optionCRuntimeObservables,
+  type NoraCognitiveRuntimeObservable,
+} from "./optionCObservables";

```

## 18. Runtime selector disposition
DELETED. No Nora F1 runtime selection remains.

## 19. NoraCognitiveRuntimeKind disposition
Narrowed to `"agents"` only. Public `cognitiveRuntime: "agents"` retained for observability.

## 20. orchestrateTurn legacy notice disposition
`EPHEMERAL_NOTICE_LEGACY` removed. F1 always uses `SESSION_NOTICE_AGENTS`.

## 21. Comparator-test disposition
Nora D0 tests no longer import/call `runToolCallingLoop`.
Fake path proven via `runNoraCognitiveTurn` / Agents Runner only.
Absence proofs + platform preservation proofs added.

## 22–24. Platform / OPS1 / D1 preservation
- `lib/platform/tools/toolLoop.ts` unchanged / present
- OPS1: `lib/ops1/conversation/service.ts` still calls runToolCallingLoop
- D1: `lib/d1/intake/analyzeIntent.ts` still imports/calls platform loop
- Targeted tests PASS: `__tests__/ops1/controlTowerTools.test.ts`, `__tests__/d1/intake-platform-integration.test.ts`
- git diff empty for platform/ops1/d1 this cycle

## 25. RESERVE-OPT-C-02 disposition
OPEN / NON-BLOCKING. Comments corrected: adapter is completeRound→Model boundary for any completeRound-capable provider (incl. Fake); not an exclusive-Fake claim; live OpenAI Agents model routing remains separate when no completeRound provider. No provider architecture decision.

## 26. Post-retirement reference inventory
Remaining hits only:
- D platform definition/export
- E OPS1 consumers
- F D1 consumers
- C/H RETIRED wording / absence-proof tests
- NoraCognitiveRuntimeKind = "agents" type alias

ZERO Nora active legacy runtime.
ZERO Nora direct comparator call.
ZERO Nora selector.
ZERO NORA_COGNITIVE_RUNTIME F1 switch.
ZERO EPHEMERAL_NOTICE_LEGACY.

## 27–28. Proofs zero Nora legacy / comparator
Source + export absence tests; orchestrateTurn → runNoraCognitiveTurn → runNoraAgentsTurn; Fake cognitiveRuntime="agents".

## 29–31. Session / Runner / routeToolCall regression
Nora D0 suite PASS (authority/session/fakeConvergence/runner/sessionTruthC) including Session isolation, Fake tools→routeToolCall, deny/no-leak, budget, enableTools=false.

## 32–35. Tests / typecheck / lint / suite / diff-check
```
npm run typecheck → PASS
npm run lint → PASS
npx vitest run __tests__/nora-cognitive-runtime → PASS
npx vitest run __tests__/project-assistant/orchestrateTurn.test.ts → PASS
ops1 controlTowerTools + d1 intake-platform-integration → PASS
npm test → Test Files 234 passed | 14 skipped; Tests 2248 passed | 132 skipped
git diff --check → PASS
```
General regression PASS ≠ MW0 Option C parity PASS.

## 36. Package/lock
Unchanged by this retirement cycle (prior Option C candidate dependency remains; no further mutation).

## 37. Platform files unchanged
Confirmed — no edits under lib/platform, lib/ops1, lib/d1.

## 38. Final HEAD/branch/ownership
HEAD={head}
BRANCH={branch}
Delivery owner=recovered WT
Remote Delivery=ABSENT

## 39. No remapping statement
NO WORKTREE / BRANCH REMAPPING OR REPAIR PERFORMED.

## 40. No project commit/push/PR/merge
Confirmed.

## 41. MW0 not run
MW0 Option C regression/parity NOT RUN as governed gate.

## 42. Anti-claims
platform runToolCallingLoop may still exist; OPS1/D1 may still use it;
Option C Git integration NOT EXECUTED; MW0 Option C parity NOT RUN;
MW1-S01/S02/S03 NOT CLOSED; CORR-MW1-07/08 NOT EXECUTED;
Responses Compaction NOT ADOPTED; Cognitive Completion NOT PROVEN;
MW1 NOT COMPLETE / NOT INTEGRATED; MW2 NOT STARTED; REAL NOT PROVEN.

## 43. Reservations
- GIT-DEBT-MW1-01 unchanged (blocking before push)
- RESERVE-OPT-C-02 remains OPEN/NON-BLOCKING
- Fake Session force-error quirk after historical tool outputs (prior cycle) unchanged

## 44. Next gate
1) ChatGPT CRITICAL retirement review
2) Git integration readiness + resolve GIT-DEBT-MW1-01 under explicit Morris Git gate
3) Distinct Morris GO for project commit/push/PR
4) Then MW0 regression/parity on integrated Option C

## 45. Verdict
**MW1 OPTION C LEGACY NORA GENERIC LOOP RETIREMENT — PASS — NORA SINGLE RUNNER PATH ESTABLISHED — PLATFORM LOOP PRESERVED FOR INDEPENDENT CONSUMERS — READY FOR CHATGPT CRITICAL REVIEW**

Mandatory:
NO PROJECT COMMIT / NO PROJECT PUSH / NO PROJECT PR / NO PROJECT MERGE.
NO WORKTREE / BRANCH REMAPPING OR REPAIR PERFORMED.
NORA LEGACY RUNTIME SELECTOR / COMPARATOR DEBT RETIRED.
PLATFORM runToolCallingLoop PRESERVED FOR INDEPENDENT CONSUMERS WHERE STILL REQUIRED.
MW0 OPTION C REGRESSION/PARITY NOT RUN.
NO REAL EXECUTION.
MW1 REMAINS LOCAL / NOT INTEGRATED / NOT COMPLETE.
