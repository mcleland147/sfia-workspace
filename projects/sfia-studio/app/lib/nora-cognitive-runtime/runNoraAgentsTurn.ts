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
  type Session,
} from "@openai/agents";
import type { ConversationProvider } from "@/lib/platform/ai";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
import { requireLiveConversationSecrets } from "@/lib/platform/ai/config";
import {
  CampaignModelInvocationDeniedError,
  createSfiaCallModelInputFilter,
} from "./callModelInputFilter";
import {
  createProviderAgentsModel,
  isFakeConversationProvider,
} from "./providerAgentsModel";
import { createSfiaRouteToolAdapters } from "./sfiaAgentsTools";
import type { MemoryBAvailability } from "./memoryBAvailability";
import {
  createNoraTurnBudget,
  toolRoundsFromBudget,
  type NoraTurnBudget,
} from "./turnBudget";
import type { NoraCognitiveTurnResult } from "./types";
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
  maxTurns?: number;
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

export function createNoraAgentsRunner(
  systemInstructions: string,
  budget?: NoraTurnBudget,
  runnerModelSettings?: NoraRunnerModelSettings,
  campaignBudget?: NoraCampaignBudget,
): Runner {
  return new Runner({
    tracingDisabled: true,
    callModelInputFilter: createSfiaCallModelInputFilter(
      systemInstructions,
      budget,
      campaignBudget,
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
  if (input.model !== undefined) return input.model;
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
  }
> {
  const model = resolveNoraAgentsF1Model(input);

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
  const sfiaTools = enableTools
    ? createSfiaRouteToolAdapters({
        correlationId: input.correlationId,
        workspaceRoot: input.workspaceRoot,
        sink: input.sink,
        budget,
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

  const requestedMaxTurns = input.maxTurns ?? CT_MAX_TOOL_ROUNDS + 1;
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
  const tools = hostedTool ? [...sfiaTools, hostedTool] : sfiaTools;

  const agent = new Agent({
    name: "NoraProjectAssistant",
    instructions: input.systemInstructions,
    model: model as never,
    tools,
  });

  const runner = createNoraAgentsRunner(
    input.systemInstructions,
    budget,
    runnerModelSettings,
    campaign,
  );
  const maxTurns = clamp.maxTurns;
  const session = input.session ?? undefined;
  const memoryBAvailability: MemoryBAvailability =
    input.memoryBAvailability ??
    (session ? "available_with_history" : "unavailable");

  let text = "";
  let lastResponseId: string | null = null;
  let usageAgg: {
    inputTokens?: number;
    outputTokens?: number;
    totalTokens?: number;
  } | null = null;
  let runNewItems: unknown[] = [];
  let budgetStop = false;

  if (maxTurns <= 0) {
    budget.limitReached = true;
    budgetStop = true;
    text = "Campaign/model-turn budget reached before dispatch.";
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
    try {
      const result = await runner.run(agent, input.userContent, {
        ...(session ? { session } : {}),
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
      runNewItems = Array.isArray(result.newItems) ? [...result.newItems] : [];
    } catch (error) {
      if (error instanceof CampaignModelInvocationDeniedError) {
        budget.limitReached = true;
        budgetStop = true;
        text = error.message;
        // BYPASS-07: do not retry / re-dispatch.
      } else if (error instanceof MaxTurnsExceededError) {
        budget.limitReached = true;
        text = "Model-turn budget reached (maxTurns).";
      } else {
        throw error;
      }
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
    ...(hostedSearchObserve ? { hostedSearchObserve } : {}),
    ...(budgetObserve ? { budgetObserve } : {}),
  };
}
