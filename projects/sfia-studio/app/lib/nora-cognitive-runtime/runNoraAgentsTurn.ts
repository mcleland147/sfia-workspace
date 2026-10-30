/**
 * OpenAI Agents SDK Runner path for Nora F1 cognitive turns.
 * Generic loop mechanics owned by Runner; SFIA authority via routeToolCall.
 *
 * CORR-MW2-REAL-02 model resolution:
 * - Fake / non-OpenAI completeRound providers → createProviderAgentsModel adapter
 * - providerId=openai (incl. Metered wrapper) → native Agents model string
 *   so Runner.modelSettings.reasoning is consumed by the native OpenAI Agents path
 * - otherwise → live model string from secrets
 */
import {
  Agent,
  MaxTurnsExceededError,
  Runner,
  type Model,
  type RunState,
  type Session,
  type AgentOutputType,
} from "@openai/agents";
import type { ConversationProvider } from "@/lib/platform/ai";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import { requireLiveConversationSecrets } from "@/lib/platform/ai/config";
import {
  ADAPTIVE_MAX_TURNS_SAFETY_ENVELOPE,
  resolveAdaptiveMaxTurns,
  type AdaptiveMaxTurnsDecision,
} from "./adaptiveTurnBudget";
import {
  buildDocumentaryBudgetExhaustedText,
  MODEL_TURN_BUDGET_REACHED_STOCK,
} from "./documentaryBudgetExhausted";
import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";
import {
  CONTINUATION_MAX_SEGMENTS,
  PRODUCTIVE_EXTENSION_MAX,
  emptyContinuationObserve,
  planContinuationSegments,
  type ControlledContinuationObserve,
} from "./controlledContinuation";
import {
  CampaignModelInvocationDeniedError,
  CampaignUsdHardCapDeniedError,
  createSfiaCallModelInputFilter,
} from "./callModelInputFilter";
import type { NoraAgentsUsdAccounting } from "./agentsUsdAccounting";
import type { NoraAgentsUsdSettleResult } from "./agentsUsdAccounting";
import {
  createProviderAgentsModel,
  isFakeConversationProvider,
  wrapAgentsModelForProductTurnPlainTextCoercion,
} from "./providerAgentsModel";
import {
  buildFailClosedProductTurnJson,
  composePilotFacingAssistantText,
  isConversationGuidance,
  isNoraProductTurnWithOptionalLr,
  normalizeNoraProductTurnStructuredOutput,
} from "./noraProductTurnOutputType";
import { createSfiaRouteToolAdapters } from "./sfiaAgentsTools";
import {
  MISSION_NO_PROGRESS_STOP_STOCK,
  MissionNoProgressStoppedError,
  MissionProgressGuard,
} from "./missionProgressGuard";
import {
  createCycleJournalAgentsTools,
  type CycleJournalToolContext,
} from "./cycleJournalAgentsTools";
import {
  createProductExecutionAgentsTools,
  type ProductExecutionToolContext,
} from "./productExecutionAgentsTools";
import { createExecutionReviewAgentsTools } from "./executionReviewAgentsTools";
import type { MemoryBAvailability } from "./memoryBAvailability";
import {
  createNoraTurnBudget,
  toolRoundsFromBudget,
  type NoraTurnBudget,
} from "./turnBudget";
import type { NoraCognitiveTurnResult } from "./types";
import {
  isAbortLike,
  NoraTurnAbortedError,
  throwIfAborted,
} from "./noraTurnAbort";
import type { NoraRunnerModelSettings } from "./reasoningModelSettings";
import { withMaxToolCallsProviderData } from "./reasoningModelSettings";
import type { HostedWebSearchCallLike } from "./externalSourceNormalization";
import {
  createNoraHostedWebSearchTool,
  extractHostedWebSearchCallsFromRunItems,
  normalizeOpenAiHostedWebSearchObservations,
  type NoraHostedWebSearchToolOptions,
} from "./openaiHostedWebSearchAdapter";
import type { SourceObservationFact } from "./sourceIntelligenceContract";
import type {
  NoraCampaignBudget,
  Mw6GovernedAuthorityContext,
  Mw6CurrentProductContext,
} from "./campaignBudget";
import type { Mw6ExternalDiscoveryContractInput } from "@/lib/auth/mw6ExternalDiscoveryBinding";
import {
  CampaignLeaseError,
  campaignBudgetSnapshot,
  claimHostedWebOperations,
  clampRunnerBudgetForCampaign,
  evaluateRealSourceExecutionPreflight,
  isCanonicalCampaignBudget,
  markCampaignBudgetBlocked,
  normalizeSafeNonNegativeInteger,
  remainingAggregateRealCalls,
  remainingModelInvocations,
  requireCanonicalCampaignBudget,
  resolveMaxToolCallsProviderData,
} from "./campaignBudget";

export type RunNoraAgentsTurnInput = {
  correlationId: string;
  projectId: string;
  systemInstructions: string;
  userContent: string;
  /**
   * Agents SDK Session when Memory B is available (ProductSqliteSession or MemoryBSessionView).
   * Omit when Memory B is UNAVAILABLE — same Runner path (SDK session optional).
   */
  session?: Session | null;
  /** MW1-S01 availability classification for this turn. */
  memoryBAvailability?: MemoryBAvailability;
  workspaceRoot?: string;
  sink?: EventSink;
  /** Injected model for D0 (ScriptedModel). Live uses OPENAI_MODEL. */
  model?: Model | string;
  /** Provider used to resolve completeRound→Model adapter when model not injected. */
  provider?: ConversationProvider;
  /**
   * Explicit mission maxTurns override (tests/eval). When omitted, P1 adaptive
   * policy selects a bounded budget from strategy class + signals.
   */
  maxTurns?: number;
  /** P1 — strategy class for adaptive budget (telemetry / policy). */
  cognitiveStrategyClass?: CognitiveStrategyClass | null;
  /** P1 — precomputed adaptive decision (cognitive turn). */
  adaptiveMaxTurnsDecision?: AdaptiveMaxTurnsDecision | null;
  /**
   * P2 — when true (default), missions with budget > segment size may resume
   * via native RunState within the same Product turn. Never resets campaign counters.
   */
  enableControlledContinuation?: boolean;
  /** When false, Agent receives no SFIA function tools. */
  enableTools?: boolean;
  /** Optional shared budget (tests). */
  budget?: NoraTurnBudget;
  /** MW2 — Runner modelSettings override (reasoning.effort + preserved text.verbosity). */
  runnerModelSettings?: NoraRunnerModelSettings;
  /**
   * MW6 — attach OpenAI hosted web_search on the same Option C Agent.
   * Not routed through routeToolCall. NoraTurnBudget does NOT bound it.
   */
  enableHostedWebSearch?: boolean;
  hostedWebSearchToolOptions?: NoraHostedWebSearchToolOptions;
  /**
   * MW6 R21 — deterministic substitute for hosted web_search run-items.
   * Same normalization path as live observation; NEVER a REAL call.
   */
  deterministicHostedWebSearchCalls?: HostedWebSearchCallLike[];
  /** MW6 — optional freshness timestamp when honestly supportable. */
  sourceObservationNowIso?: string | null;
  /**
   * MW6 PRE-REAL — shared campaign budget (must be canonical lease from
   * acquireNoraCampaignBudget; fabricated objects fail closed).
   */
  campaignBudget?: NoraCampaignBudget;
  /**
   * TEST only — attempt to widen max_tool_calls beyond campaign remaining.
   * Not REAL authority.
   */
  testOnlyMaxToolCallsOverride?: number | null;
  /**
   * MW6↔Auth binding — identifiers + canonical EC ports only.
   * When absent on LIVE path → REAL_AUTHORITY_NOT_BOUND.
   */
  governedAuthority?: Mw6GovernedAuthorityContext;
  /**
   * Current product strategy+binding from Nora composition (TB-02).
   * Server derives intent — do not inject final fingerprint semantics as truth.
   */
  currentProductContext?: Mw6CurrentProductContext;
  /**
   * @deprecated Ignored for authority (cannot authorize).
   */
  currentExternalDiscoveryIntent?: Mw6ExternalDiscoveryContractInput;
  /**
   * Optional USD accounting for native Agents model invocations (eval campaigns).
   * Runtime-generic hook — nora-eval injects BudgetTracker bridge. Not authority.
   */
  usdAccounting?: NoraAgentsUsdAccounting;
  /**
   * LR-D02 — optional Agents SDK structured outputType on the same Runner.
   * When set, finalOutput may be a structured object (candidate data only).
   */
  outputType?: AgentOutputType;
  /**
   * CYCLE JOURNAL — same-turn READ-ONLY tools bound to Product session + cycle.
   * Never Truth C. Optional; omitted when no active cycle / session.
   */
  cycleJournalTools?: CycleJournalToolContext | null;
  /**
   * PRODUCT EXECUTION CONTEXT — same-turn READ-ONLY tools bound to projectId.
   * Never authority / HD / Evidence. Optional.
   */
  productExecutionTools?: ProductExecutionToolContext | null;
  /**
   * D-ER-09 — bounded READ-ONLY Execution Review tools (Attempt/Project-bound).
   * Used by post_execution Deep Review without enabling Memory B / hosted search.
   */
  executionReviewTools?: import("./executionReviewAgentsTools").ExecutionReviewToolContext | null;
  /** Request-scoped AbortSignal from Product transport. Native Runner option. */
  signal?: AbortSignal;
};

export type RunNoraAgentsTurnHostedSearchObserve = {
  hostedWebSearchAttached: boolean;
  deterministicBoundaryUsed: boolean;
  observations: SourceObservationFact[];
  rawCallsObserved: number;
};

export type RunNoraAgentsTurnBudgetObserve = {
  campaign: ReturnType<typeof campaignBudgetSnapshot>;
  clampReasonCodes: string[];
  configuredMaxToolCalls: number | null;
  realPreflightBlocked: boolean;
  realPreflightReasons: string[];
  authorityBound: boolean;
  realAuthorized: boolean;
  realPreflightCode: string;
  eligible: boolean;
};

export type RunNoraAgentsTurnUsdObserve = NoraAgentsUsdSettleResult & {
  reservedInvocations: number;
};

export type RunNoraAgentsTurnAdaptiveObserve = AdaptiveMaxTurnsDecision & {
  /** Mission maxTurns after campaign clamp. */
  effectiveMaxTurns: number;
};

function extractTextFromRunItems(items: unknown[]): string {
  return (
    [...items]
      .reverse()
      .map((item) => {
        const anyItem = item as {
          type?: string;
          content?: string;
        };
        if (anyItem.type === "message_output_item") {
          return String(anyItem.content ?? "");
        }
        return "";
      })
      .find((t) => t.trim().length > 0) ?? ""
  );
}

export function createNoraAgentsRunner(
  systemInstructions: string,
  budget?: NoraTurnBudget,
  runnerModelSettings?: NoraRunnerModelSettings,
  campaignBudget?: NoraCampaignBudget,
  usdAccounting?: NoraAgentsUsdAccounting,
  missionProgressGuard?: MissionProgressGuard | null,
): Runner {
  return new Runner({
    tracingDisabled: true,
    callModelInputFilter: createSfiaCallModelInputFilter(
      systemInstructions,
      budget,
      campaignBudget,
      usdAccounting,
      missionProgressGuard,
    ),
    ...(runnerModelSettings ? { modelSettings: runnerModelSettings } : {}),
  });
}

/**
 * CORR-MW2-REAL-02 — OpenAI live F1 must NOT use ConversationProvider.completeRound adapter.
 * MeteredConversationProvider preserves providerId=openai and must also take native path.
 */
export function isOpenAiLiveF1Provider(
  provider: ConversationProvider,
): boolean {
  return provider.providerId === "openai";
}

/**
 * Whether F1 should wrap the provider via createProviderAgentsModel.
 * False for OpenAI live (native Agents model string instead).
 */
export function shouldUseProviderAgentsModelAdapter(
  provider: ConversationProvider,
): boolean {
  if (isOpenAiLiveF1Provider(provider)) return false;
  if (isFakeConversationProvider(provider)) return true;
  return typeof provider.completeRound === "function";
}

/**
 * Resolve Agents F1 model — exported for CORR-02 D0 boundary proof (no live call).
 */
export function resolveNoraAgentsF1Model(
  input: Pick<RunNoraAgentsTurnInput, "model" | "provider">,
): Model | string {
  if (input.model !== undefined) {
    // Injected ScriptedModel (Model object) must coerce plain text under
    // product-turn outputType — same contract as Fake completeRound adapter.
    // Live model strings are unchanged.
    if (typeof input.model === "string") return input.model;
    return wrapAgentsModelForProductTurnPlainTextCoercion(input.model);
  }
  if (input.provider && shouldUseProviderAgentsModelAdapter(input.provider)) {
    return createProviderAgentsModel(input.provider);
  }
  const secrets = requireLiveConversationSecrets();
  return secrets.model;
}

export async function runNoraAgentsTurn(
  input: RunNoraAgentsTurnInput,
): Promise<
  NoraCognitiveTurnResult & {
    hostedSearchObserve?: RunNoraAgentsTurnHostedSearchObserve;
    budgetObserve?: RunNoraAgentsTurnBudgetObserve;
    usdObserve?: RunNoraAgentsTurnUsdObserve;
  }
> {
  const model = resolveNoraAgentsF1Model(input);
  const usdAccounting = input.usdAccounting;

  const budget = input.budget ?? createNoraTurnBudget();
  const campaign = input.campaignBudget;
  if (campaign) {
    try {
      requireCanonicalCampaignBudget(campaign);
    } catch (error) {
      if (error instanceof CampaignLeaseError) {
        return {
          text: error.message,
          usage: {
            inputTokens: null,
            outputTokens: null,
            totalTokens: null,
            model: null,
            providerResponseId: null,
          },
          toolRounds: 0,
          toolCalls: 0,
          limitReached: true,
          cognitiveRuntime: "agents",
          sessionId: null,
          memoryBAvailability: "unavailable",
          memoryBCompactionState: "none",
          memoryBCompactionDetails: null,
          budgetObserve: {
            // Do not call campaignBudgetSnapshot — fabricated objects have no lease.
            campaign: {
              campaignId: campaign.campaignId,
              remainingModelInvocations: 0,
              remainingHostedWebOperations: 0,
              remainingAggregateRealCalls: 0,
              consumedModelInvocations: campaign.consumedModelInvocations,
              consumedHostedWebOperations: campaign.consumedHostedWebOperations,
              consumedAggregateRealCalls: campaign.consumedAggregateRealCalls,
              maxModelInvocations: campaign.maxModelInvocations,
              maxHostedWebOperations: campaign.maxHostedWebOperations,
              maxAggregateRealCalls: campaign.maxAggregateRealCalls,
              limitReached: true,
              denialCode: error.code,
              denialReason: error.message,
              hostedHardCapCapability: campaign.hostedHardCapCapability,
              canonicalLease: false,
            },
            clampReasonCodes: ["campaign_lease_invalid"],
            configuredMaxToolCalls: null,
            realPreflightBlocked: true,
            realPreflightReasons: [error.code],
            authorityBound: false,
            realAuthorized: false,
            realPreflightCode: error.code,
            eligible: false,
          },
        };
      }
      throw error;
    }
  }
  const enableTools = input.enableTools !== false;
  const missionProgressGuard = enableTools ? new MissionProgressGuard() : null;
  const sfiaTools = enableTools
    ? createSfiaRouteToolAdapters({
        correlationId: input.correlationId,
        workspaceRoot: input.workspaceRoot,
        sink: input.sink,
        budget,
        progressGuard: missionProgressGuard ?? undefined,
      })
    : [];

  const wantHosted = input.enableHostedWebSearch === true;
  const fixtureCalls = input.deterministicHostedWebSearchCalls ?? [];
  const deterministicBoundaryUsed = fixtureCalls.length > 0;
  const liveOpenAiPath =
    !!input.provider && isOpenAiLiveF1Provider(input.provider);
  // REAL hosted dispatch = live OpenAI + hosted attach + no fixture substitute.
  const wantRealHostedDispatch =
    wantHosted && liveOpenAiPath && !deterministicBoundaryUsed;

  let realPreflightBlocked = false;
  let realPreflightReasons: string[] = [];
  let authorityBound = false;
  let realAuthorized = false;
  let realPreflightCode = "OK";
  let realPreflightEligible = false;
  // Authority composition proof: evaluate when server-composed governedAuthority
  // + product context + campaign are present (deterministic Fake path included).
  // LIVE dispatch gate still requires wantRealHostedDispatch.
  const shouldEvaluateAuthorityBinding =
    wantHosted &&
    !!campaign &&
    !!input.governedAuthority &&
    !!input.currentProductContext;
  if (wantRealHostedDispatch || shouldEvaluateAuthorityBinding) {
    // PRE-REAL-01: LIVE path always requires genuine authority binding.
    // No test/fake boolean is accepted on runtime inputs.
    if (!campaign) {
      realPreflightBlocked = true;
      realPreflightReasons = [
        "REAL_AUTHORITY_NOT_BOUND",
        "campaign_budget_required_for_real_hosted",
      ];
      realPreflightCode = "REAL_AUTHORITY_NOT_BOUND";
      authorityBound = false;
      realAuthorized = false;
      realPreflightEligible = false;
    } else {
      const pre = await evaluateRealSourceExecutionPreflight({
        campaign,
        wantHostedWebSearch: true,
        governedAuthority: input.governedAuthority,
        currentProductContext: input.currentProductContext,
        // Deprecated injection retained only to prove it cannot authorize.
        currentExternalDiscoveryIntent: input.currentExternalDiscoveryIntent,
      });
      // LIVE dispatch blocked only on the real hosted path.
      realPreflightBlocked = wantRealHostedDispatch ? pre.blocked : false;
      realPreflightReasons = pre.reasons;
      realPreflightCode = pre.code;
      authorityBound = pre.authorityBound;
      realAuthorized = pre.realAuthorized;
      realPreflightEligible = pre.eligible;
    }
  }

  const adaptiveDecision =
    input.adaptiveMaxTurnsDecision ??
    resolveAdaptiveMaxTurns({
      strategyClass: input.cognitiveStrategyClass ?? null,
      explicitMaxTurns: input.maxTurns ?? null,
    });
  const requestedMaxTurns = adaptiveDecision.requestedMaxTurns;
  let clamp: {
    maxTurns: number;
    maxToolCalls: number | null;
    attachHostedWebSearch: boolean;
    reasonCodes: string[];
  };
  let resolvedCap: {
    max_tool_calls?: number;
    rejectedOverride: boolean;
  };
  let runnerModelSettings: ReturnType<typeof withMaxToolCallsProviderData>;
  try {
    // R-PRE-REAL-08A: same safe-integer domain with or without campaign.
    const safeRequestedMaxTurns = normalizeSafeNonNegativeInteger(
      "requestedMaxTurns",
      requestedMaxTurns,
    );
    clamp = campaign
      ? clampRunnerBudgetForCampaign({
          campaign,
          requestedMaxTurns: safeRequestedMaxTurns,
          wantHostedWebSearch:
            wantHosted && !(wantRealHostedDispatch && realPreflightBlocked),
        })
      : {
          maxTurns: safeRequestedMaxTurns,
          maxToolCalls: null as number | null,
          attachHostedWebSearch:
            wantHosted && !(wantRealHostedDispatch && realPreflightBlocked),
          reasonCodes: [] as string[],
        };

    // BYPASS-04: enableHostedWebSearch cannot bypass REAL preflight / campaign clamp.
    resolvedCap = campaign
      ? resolveMaxToolCallsProviderData({
          campaign,
          configuredMaxToolCalls: clamp.maxToolCalls,
          callerOverride: input.testOnlyMaxToolCallsOverride,
        })
      : {
          max_tool_calls: undefined as number | undefined,
          rejectedOverride: false,
        };

    // Final providerData boundary — validates injected AND inherited caps (07/07A).
    runnerModelSettings = withMaxToolCallsProviderData(
      input.runnerModelSettings,
      resolvedCap.max_tool_calls ?? null,
    );
  } catch (error) {
    if (error instanceof CampaignLeaseError) {
      return {
        text: error.message,
        usage: {
          inputTokens: null,
          outputTokens: null,
          totalTokens: null,
          model: null,
          providerResponseId: null,
        },
        toolRounds: 0,
        toolCalls: 0,
        limitReached: true,
        cognitiveRuntime: "agents",
        sessionId: null,
        memoryBAvailability: "unavailable",
        memoryBCompactionState: "none",
        memoryBCompactionDetails: null,
        budgetObserve: campaign
          ? {
              campaign: isCanonicalCampaignBudget(campaign)
                ? campaignBudgetSnapshot(campaign)
                : {
                    campaignId: campaign.campaignId,
                    remainingModelInvocations: 0,
                    remainingHostedWebOperations: 0,
                    remainingAggregateRealCalls: 0,
                    consumedModelInvocations: campaign.consumedModelInvocations,
                    consumedHostedWebOperations:
                      campaign.consumedHostedWebOperations,
                    consumedAggregateRealCalls:
                      campaign.consumedAggregateRealCalls,
                    maxModelInvocations: campaign.maxModelInvocations,
                    maxHostedWebOperations: campaign.maxHostedWebOperations,
                    maxAggregateRealCalls: campaign.maxAggregateRealCalls,
                    limitReached: true,
                    denialCode: error.code,
                    denialReason: error.message,
                    hostedHardCapCapability: campaign.hostedHardCapCapability,
                    canonicalLease: false,
                  },
              clampReasonCodes: ["invalid_budget_numeric"],
              configuredMaxToolCalls: null,
              realPreflightBlocked: true,
              realPreflightReasons: [error.code],
              authorityBound: false,
              realAuthorized: false,
              realPreflightCode: error.code,
              eligible: false,
            }
          : undefined,
      };
    }
    throw error;
  }

  const enableHostedWebSearch = clamp.attachHostedWebSearch;

  const hostedTool = enableHostedWebSearch
    ? createNoraHostedWebSearchTool(input.hostedWebSearchToolOptions)
    : null;
  const journalTools =
    input.cycleJournalTools &&
    input.cycleJournalTools.cycleInstanceId.trim() &&
    enableTools
      ? createCycleJournalAgentsTools({
          ...input.cycleJournalTools,
          budget,
        })
      : [];
  const productTools =
    input.productExecutionTools &&
    input.productExecutionTools.projectId.trim() &&
    enableTools
      ? createProductExecutionAgentsTools({
          ...input.productExecutionTools,
          budget,
        })
      : [];
  const executionReviewTools =
    input.executionReviewTools &&
    input.executionReviewTools.projectId.trim() &&
    input.executionReviewTools.attemptId.trim() &&
    enableTools
      ? [...createExecutionReviewAgentsTools({
          ...input.executionReviewTools,
          budget,
        })]
      : [];
  const tools = [
    ...sfiaTools,
    ...journalTools,
    ...productTools,
    ...executionReviewTools,
    ...(hostedTool ? [hostedTool] : []),
  ];

  const agent = new Agent({
    name: "NoraProjectAssistant",
    instructions: input.systemInstructions,
    model: model as never,
    tools,
    ...(input.outputType ? { outputType: input.outputType } : {}),
  });

  const runner = createNoraAgentsRunner(
    input.systemInstructions,
    budget,
    runnerModelSettings,
    campaign,
    usdAccounting,
    missionProgressGuard,
  );
  const maxTurns = clamp.maxTurns;
  const session = input.session ?? undefined;
  const memoryBAvailability: MemoryBAvailability =
    input.memoryBAvailability ??
    (session ? "available_with_history" : "unavailable");

  const continuationPlan = planContinuationSegments({
    missionMaxTurns: maxTurns,
    enableControlledContinuation: input.enableControlledContinuation,
  });
  let continuationObserve: ControlledContinuationObserve =
    emptyContinuationObserve(
      maxTurns,
      continuationPlan.segmentMaxTurns,
      maxTurns <= 0 ? "mission_budget_exhausted" : "disabled",
      [
        ...adaptiveDecision.reasonCodes,
        ...clamp.reasonCodes,
        ...continuationPlan.reasonCodes,
      ],
    );

  let text = "";
  let structuredOutput: unknown = undefined;
  let lastResponseId: string | null = null;
  let usageAgg: {
    inputTokens?: number;
    outputTokens?: number;
    totalTokens?: number;
  } | null = null;
  let runNewItems: unknown[] = [];
  let budgetStop = false;

  const softMaxTurnsHandler = ({
    runData,
  }: {
    runData: { newItems: unknown[] };
  }) => {
    budget.limitReached = true;
    const lastText = extractTextFromRunItems(runData.newItems);
    const fallback = buildDocumentaryBudgetExhaustedText({
      items: Array.isArray(runData.newItems) ? runData.newItems : [],
    });
    return {
      finalOutput: lastText.trim() || fallback,
      includeInHistory: false,
    };
  };

  const applyStructuredFinalOutput = (finalOutput: unknown) => {
    text =
      typeof finalOutput === "string"
        ? finalOutput
        : finalOutput == null
          ? ""
          : typeof finalOutput === "object"
            ? JSON.stringify(finalOutput)
            : String(finalOutput);
    if (input.outputType && finalOutput != null) {
      structuredOutput =
        typeof finalOutput === "string"
          ? (() => {
              try {
                return JSON.parse(finalOutput) as unknown;
              } catch {
                return finalOutput;
              }
            })()
          : finalOutput;
      const isProductTurnOutput =
        input.outputType &&
        typeof input.outputType === "object" &&
        "name" in input.outputType &&
        (input.outputType as { name?: string }).name ===
          "nora_product_turn_with_optional_lr";
      if (isProductTurnOutput && typeof structuredOutput === "string") {
        structuredOutput = JSON.parse(
          buildFailClosedProductTurnJson(structuredOutput),
        ) as unknown;
      } else if (isProductTurnOutput && structuredOutput) {
        if (!isNoraProductTurnWithOptionalLr(structuredOutput)) {
          const coherent =
            normalizeNoraProductTurnStructuredOutput(structuredOutput);
          if (coherent) {
            structuredOutput = {
              narrative: coherent.narrative,
              preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
              lifecycleRecommendation: coherent.lifecycleRecommendation,
              activeCycleWork: coherent.activeCycleWork ?? null,
              conversationGuidance: coherent.conversationGuidance,
              journalDelta: coherent.journalDelta ?? null,
              reservationDelta: coherent.reservationDelta ?? null,
              presentation: coherent.presentation ?? null,
            };
          }
        }
      }
      if (
        isProductTurnOutput &&
        structuredOutput &&
        typeof structuredOutput === "object"
      ) {
        const so = structuredOutput as {
          narrative?: unknown;
          conversationGuidance?: unknown;
        };
        if (typeof so.narrative === "string") {
          text = isConversationGuidance(so.conversationGuidance)
            ? composePilotFacingAssistantText(
                so.narrative,
                so.conversationGuidance,
              )
            : so.narrative;
        }
      } else if (
        structuredOutput &&
        typeof structuredOutput === "object" &&
        "narrative" in structuredOutput &&
        typeof (structuredOutput as { narrative?: unknown }).narrative ===
          "string"
      ) {
        text = (structuredOutput as { narrative: string }).narrative;
      }
    }
  };

  if (maxTurns <= 0) {
    budget.limitReached = true;
    budgetStop = true;
    text = "Campaign/model-turn budget reached before dispatch.";
    continuationObserve = {
      ...continuationObserve,
      stopReason: "mission_budget_exhausted",
      reasonCodes: [
        ...continuationObserve.reasonCodes,
        "mission_maxTurns_zero",
      ],
    };
    if (campaign && !campaign.limitReached) {
      if (remainingAggregateRealCalls(campaign) <= 0) {
        markCampaignBudgetBlocked(
          campaign,
          "AGGREGATE_REAL_CALL_CAP_REACHED",
          "Aggregate REAL/provider-call remaining is 0 — Runner not dispatched.",
        );
      } else if (remainingModelInvocations(campaign) <= 0) {
        markCampaignBudgetBlocked(
          campaign,
          "MODEL_INVOCATION_CAP_REACHED",
          "Model invocation remaining is 0 — Runner not dispatched.",
        );
      }
    }
  } else {
    // SDK maxTurns is ABSOLUTE against state._currentTurn (not remaining).
    // Segment 1 may stop early; resume raises absolute cap toward missionMaxTurns.
    // Productive extensions may raise the effective mission cap toward the safety
    // envelope when MissionProgressGuard reports verifiable tool progress.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let runInput: string | RunState<any, Agent<any, any>> = input.userContent;
    const initialMissionMaxTurns = maxTurns;
    const safetyEnvelope = adaptiveDecision.explicitOverride
      ? maxTurns
      : ADAPTIVE_MAX_TURNS_SAFETY_ENVELOPE;
    let effectiveMissionCap = maxTurns;
    let absoluteCap = continuationPlan.enable
      ? Math.min(effectiveMissionCap, continuationPlan.segmentMaxTurns)
      : effectiveMissionCap;
    let allottedTurns = 0;
    let segmentsExecuted = 0;
    let continued = false;
    let productiveExtensions = 0;
    let stopReason: ControlledContinuationObserve["stopReason"] = "complete";

    try {
      while (segmentsExecuted < CONTINUATION_MAX_SEGMENTS) {
        throwIfAborted(input.signal);
        const atMissionCeiling = absoluteCap >= effectiveMissionCap;
        const atSafetyEnvelope = absoluteCap >= safetyEnvelope;

        try {
          const result = await runner.run(agent, runInput as never, {
            // KEEP Session on every segment — including RunState resume — so
            // ProductSqliteSession persists history across continuation (SDK
            // prepareSessionHistoryTransactionsForRun requires options.session).
            ...(session ? { session } : {}),
            ...(input.signal ? { signal: input.signal } : {}),
            maxTurns: absoluteCap,
            // Soft handler only at safety envelope — earlier segments throw for RunState.
            ...(atSafetyEnvelope
              ? {
                  errorHandlers: {
                    maxTurns: softMaxTurnsHandler,
                  },
                }
              : {}),
          });
          throwIfAborted(input.signal);

          allottedTurns = absoluteCap;
          segmentsExecuted += 1;
          applyStructuredFinalOutput(result.finalOutput);
          lastResponseId = result.lastResponseId ?? null;
          usageAgg = result.state?.usage ?? null;
          runNewItems = Array.isArray(result.newItems)
            ? [...result.newItems]
            : [];
          if (missionProgressGuard?.stopped) {
            budget.limitReached = true;
            budgetStop = true;
            text = MISSION_NO_PROGRESS_STOP_STOCK;
            stopReason = "mission_no_progress";
            continuationObserve.reasonCodes = [
              ...continuationObserve.reasonCodes,
              ...missionProgressGuard.stopReasonCodes,
            ];
          } else {
            stopReason = budget.limitReached
              ? "mission_budget_exhausted"
              : "complete";
          }
          break;
        } catch (segmentError) {
          if (isAbortLike(segmentError, input.signal)) {
            stopReason = "abort";
            throw new NoraTurnAbortedError();
          }
          if (
            segmentError instanceof CampaignModelInvocationDeniedError ||
            segmentError instanceof CampaignUsdHardCapDeniedError
          ) {
            budget.limitReached = true;
            budgetStop = true;
            text = segmentError.message;
            stopReason = "campaign_or_provider_stop";
            segmentsExecuted += 1;
            allottedTurns = absoluteCap;
            break;
          }
          if (segmentError instanceof MissionNoProgressStoppedError) {
            budget.limitReached = true;
            budgetStop = true;
            text = segmentError.message;
            stopReason = "mission_no_progress";
            continuationObserve.reasonCodes = [
              ...continuationObserve.reasonCodes,
              ...segmentError.reasonCodes,
            ];
            segmentsExecuted += 1;
            allottedTurns = absoluteCap;
            break;
          }
          if (segmentError instanceof MaxTurnsExceededError) {
            segmentsExecuted += 1;
            allottedTurns = absoluteCap;
            const state = segmentError.state;
            const segmentItems = Array.isArray(
              (segmentError as { newItems?: unknown[] }).newItems,
            )
              ? ((segmentError as { newItems?: unknown[] }).newItems as unknown[])
              : [];
            const partial =
              extractTextFromRunItems(segmentItems) ||
              buildDocumentaryBudgetExhaustedText({ items: segmentItems });

            if (
              continuationPlan.enable &&
              !atMissionCeiling &&
              state &&
              segmentsExecuted < CONTINUATION_MAX_SEGMENTS
            ) {
              // Raise absolute cap toward current effective mission — native RunState resume.
              absoluteCap = Math.min(
                effectiveMissionCap,
                absoluteCap + continuationPlan.segmentMaxTurns,
              );
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              runInput = state as RunState<any, Agent<any, any>>;
              continued = true;
              budget.limitReached = false;
              continuationObserve.reasonCodes = [
                ...continuationObserve.reasonCodes,
                `resumed_absolute_cap_${absoluteCap}`,
              ];
              continue;
            }

            // R-EXT-02 — productive extension beyond initial mission budget when
            // tool fingerprints advanced (never model self-declaration).
            //
            // Do NOT require continuationPlan.enable: single-segment missions
            // (e.g. Routine maxTurns=5 → single_segment_sufficient) still need
            // RunState resume when verifiable tool progress exists. Otherwise a
            // normal Product conversation that reads sources then drafts a
            // recommendation hits MaxTurnsExceeded, returns partial structured
            // text, and surfaces premature "Analyse inachevée".
            // Explicit enableControlledContinuation === false still blocks.
            if (
              input.enableControlledContinuation !== false &&
              atMissionCeiling &&
              !atSafetyEnvelope &&
              !adaptiveDecision.explicitOverride &&
              state &&
              productiveExtensions < PRODUCTIVE_EXTENSION_MAX &&
              segmentsExecuted < CONTINUATION_MAX_SEGMENTS &&
              missionProgressGuard?.hasVerifiableProgressForExtension()
            ) {
              const nextCap = Math.min(
                safetyEnvelope,
                absoluteCap + continuationPlan.segmentMaxTurns,
              );
              if (nextCap > absoluteCap) {
                productiveExtensions += 1;
                effectiveMissionCap = nextCap;
                absoluteCap = nextCap;
                missionProgressGuard.markExtensionConsumed();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                runInput = state as RunState<any, Agent<any, any>>;
                continued = true;
                budget.limitReached = false;
                continuationObserve.reasonCodes = [
                  ...continuationObserve.reasonCodes,
                  `productive_extension_${productiveExtensions}`,
                  `extended_absolute_cap_${absoluteCap}`,
                ];
                continue;
              }
            }

            budget.limitReached = true;
            text = partial;
            stopReason = !state
              ? "segment_limit_no_state"
              : atSafetyEnvelope || absoluteCap >= safetyEnvelope
                ? "safety_envelope_exhausted"
                : "mission_budget_exhausted";
            break;
          }
          throw segmentError;
        }
      }

      if (
        segmentsExecuted >= CONTINUATION_MAX_SEGMENTS &&
        budget.limitReached &&
        stopReason === "complete"
      ) {
        stopReason = "max_segments";
      }
    } catch (error) {
      if (
        isAbortLike(error, input.signal) ||
        error instanceof NoraTurnAbortedError
      ) {
        throw error instanceof NoraTurnAbortedError
          ? error
          : new NoraTurnAbortedError();
      }
      throw error;
    }

    continuationObserve = {
      continued,
      segmentsExecuted,
      missionMaxTurns: effectiveMissionCap,
      segmentMaxTurns: continuationPlan.segmentMaxTurns,
      allottedTurns,
      initialMissionMaxTurns,
      safetyEnvelope,
      productiveExtensions,
      stopReason,
      reasonCodes: continuationObserve.reasonCodes,
    };
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

  const liveCalls = extractHostedWebSearchCallsFromRunItems(runNewItems);
  // R21: fixture substitutes the external hosted boundary; prefer fixture when present.
  const callsForNormalize = deterministicBoundaryUsed ? fixtureCalls : liveCalls;
  const observations =
    enableHostedWebSearch || deterministicBoundaryUsed
      ? normalizeOpenAiHostedWebSearchObservations(callsForNormalize, {
          deterministic: deterministicBoundaryUsed,
          nowIso: input.sourceObservationNowIso,
        })
      : [];

  // Reconcile observed hosted ops against campaign (fixture path does not
  // consume REAL hosted budget — Fake/deterministic ≠ REAL consumption).
  if (campaign && !deterministicBoundaryUsed && liveCalls.length > 0) {
    const ok = claimHostedWebOperations(campaign, liveCalls.length);
    if (!ok) {
      // Provider-enforced cap should make this impossible; mark invariant failure.
      budget.limitReached = true;
      budgetStop = true;
      text = [
        text,
        "",
        "[CAMPAIGN BUDGET INVARIANT FAILURE]",
        campaign.denialReason ??
          "Observed hosted web ops exceeded campaign/provider cap.",
      ]
        .filter(Boolean)
        .join("\n");
    }
  }

  // USD settlement AFTER hosted observation so factual REAL hosted-call fees
  // can be included. Deterministic fixtures → hostedWebSearchCalls=0 (not billed).
  const usdObserve: RunNoraAgentsTurnUsdObserve | undefined = usdAccounting
    ? (() => {
        const reservedInvocations = usdAccounting.reservedInvocationCount();
        const factualHostedCalls =
          deterministicBoundaryUsed || !enableHostedWebSearch
            ? 0
            : liveCalls.length;
        const settled = usdAccounting.settleTurn({
          reservedInvocations,
          inputTokens: usageAgg?.inputTokens ?? null,
          outputTokens: usageAgg?.outputTokens ?? null,
          totalTokens: usageAgg?.totalTokens ?? null,
          hostedWebSearchCalls: factualHostedCalls,
        });
        return { ...settled, reservedInvocations };
      })()
    : undefined;

  const hostedSearchObserve: RunNoraAgentsTurnHostedSearchObserve | undefined =
    enableHostedWebSearch || deterministicBoundaryUsed
      ? {
          hostedWebSearchAttached: enableHostedWebSearch,
          deterministicBoundaryUsed,
          observations,
          rawCallsObserved: callsForNormalize.length,
        }
      : undefined;

  const budgetObserve: RunNoraAgentsTurnBudgetObserve | undefined = campaign
    ? {
        campaign: campaignBudgetSnapshot(campaign),
        clampReasonCodes: [
          ...clamp.reasonCodes,
          ...(resolvedCap.rejectedOverride
            ? ["caller_max_tool_calls_override_rejected"]
            : []),
        ],
        configuredMaxToolCalls: resolvedCap.max_tool_calls ?? null,
        realPreflightBlocked,
        realPreflightReasons,
        authorityBound,
        realAuthorized,
        realPreflightCode,
        eligible: realPreflightEligible,
      }
    : undefined;

  const adaptiveObserve: RunNoraAgentsTurnAdaptiveObserve = {
    ...adaptiveDecision,
    effectiveMaxTurns: maxTurns,
  };

  // Axe A — bounded observability (no secrets, no document body, no CoT).
  if (input.sink) {
    input.sink.emit({
      type: "ADAPTIVE_BUDGET_OBSERVED",
      correlationId: input.correlationId,
      detail: {
        projectId: input.projectId,
        strategyClass: adaptiveObserve.strategyClass,
        requestedMaxTurns: adaptiveObserve.requestedMaxTurns,
        effectiveMaxTurns: adaptiveObserve.effectiveMaxTurns,
        floor: adaptiveObserve.floor,
        ceiling: adaptiveObserve.ceiling,
        explicitOverride: adaptiveObserve.explicitOverride,
        reasonCodes: adaptiveObserve.reasonCodes,
        limitReached: budget.limitReached || budgetStop,
        toolCalls: budget.executedToolCalls,
        model:
          typeof model === "string"
            ? model
            : usage.model ?? null,
        provenance: adaptiveObserve.explicitOverride
          ? "explicit_override"
          : "adaptive_policy",
      },
    });
    input.sink.emit({
      type: "CONTINUATION_OBSERVED",
      correlationId: input.correlationId,
      detail: {
        projectId: input.projectId,
        continued: continuationObserve.continued,
        segmentsExecuted: continuationObserve.segmentsExecuted,
        missionMaxTurns: continuationObserve.missionMaxTurns,
        segmentMaxTurns: continuationObserve.segmentMaxTurns,
        allottedTurns: continuationObserve.allottedTurns,
        stopReason: continuationObserve.stopReason,
        reasonCodes: continuationObserve.reasonCodes,
        limitReached: budget.limitReached || budgetStop,
        stockFallbackUsed:
          typeof text === "string" &&
          text.includes(MODEL_TURN_BUDGET_REACHED_STOCK),
      },
    });
  }

  return {
    text,
    usage,
    toolRounds: toolRoundsFromBudget(budget),
    toolCalls: budget.executedToolCalls,
    limitReached: budget.limitReached || budgetStop,
    cognitiveRuntime: "agents",
    sessionId: session ? await session.getSessionId() : null,
    memoryBAvailability,
    memoryBCompactionState: "none",
    memoryBCompactionDetails: null,
    ...(structuredOutput !== undefined ? { structuredOutput } : {}),
    ...(hostedSearchObserve ? { hostedSearchObserve } : {}),
    ...(budgetObserve ? { budgetObserve } : {}),
    ...(usdObserve ? { usdObserve } : {}),
    adaptiveObserve,
    continuationObserve,
  };
}
