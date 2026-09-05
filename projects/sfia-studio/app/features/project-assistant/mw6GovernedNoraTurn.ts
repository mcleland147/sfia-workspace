/**
 * MW6 governed Nora product turn — server composition entry for Studio.
 *
 * Call graph:
 *   projectAssistantSendAction (executionContractId present)
 *   → runMw6GovernedNoraProductTurn
 *   → resolveCurrentAuthenticatedPilote
 *   → RuntimeOaStack Get/Check/Resolver
 *   → composeMw6GovernedAuthorityForCurrentPilote
 *   → runNoraCognitiveTurn (real)
 *   → decideSourceStrategy → bindSourceProviderCapability
 *   → evaluateRealSourceExecutionPreflight
 *
 * AUTH REAL boundary proof is carried forward (test may substitute only the
 * outer Pilote resolver seam). Downstream composition is never mocked.
 */

import { headers } from "next/headers";
import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import {
  acquireNoraCampaignBudget,
  isCanonicalCampaignBudget,
  requireCanonicalCampaignBudget,
  runNoraCognitiveTurn,
  type NoraCampaignBudget,
  type NoraCognitiveTurnResult,
  type NoraEvalModelReasoningControl,
  type NoraAgentsUsdAccounting,
} from "@/lib/nora-cognitive-runtime";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  composeMw6GovernedAuthorityForCurrentPilote,
  wasServerComposedMw6GovernedAuthority,
  type Mw6AuthorityEvidenceCompositionSource,
} from "./composeMw6GovernedAuthority";
import {
  resolveCurrentAuthenticatedPilote,
  type ResolveCurrentPiloteResult,
} from "@/lib/auth/resolveCurrentPilote";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { resolveAssistantMode } from "./resolveAssistantMode";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "./types";

const MAX_HISTORY_MESSAGES = 20;

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

/** Extract campaignId from MW6 EC scope when present. */
export function extractMw6CampaignIdFromScope(scope: string): string | null {
  const m = /^biz:mw6-external-discovery:([^:]+):/.exec(scope);
  return m?.[1] ?? null;
}

/**
 * Resolve campaign budget for MW6 governed product turn.
 * INTERNAL — sharedCampaignBudget is eval/server only, never client-trusted.
 */
export function resolveMw6GovernedCampaignBudget(input: {
  campaignId: string;
  sharedCampaignBudget?: NoraCampaignBudget;
}):
  | { ok: true; budget: NoraCampaignBudget; acquiredLocally: boolean }
  | { ok: false; code: string; message: string } {
  if (input.sharedCampaignBudget) {
    try {
      requireCanonicalCampaignBudget(input.sharedCampaignBudget);
    } catch {
      return {
        ok: false,
        code: "CAMPAIGN_BUDGET_LEASE_INVALID",
        message:
          "sharedCampaignBudget is not the canonical active lease — refusing fabricated budget.",
      };
    }
    if (!isCanonicalCampaignBudget(input.sharedCampaignBudget)) {
      return {
        ok: false,
        code: "CAMPAIGN_BUDGET_LEASE_INVALID",
        message: "sharedCampaignBudget failed canonical lease check.",
      };
    }
    if (input.sharedCampaignBudget.campaignId !== input.campaignId) {
      return {
        ok: false,
        code: "CAMPAIGN_ID_MISMATCH",
        message:
          "sharedCampaignBudget.campaignId does not match ExecutionContract scope campaignId.",
      };
    }
    return {
      ok: true,
      budget: input.sharedCampaignBudget,
      acquiredLocally: false,
    };
  }
  return {
    ok: true,
    budget: acquireNoraCampaignBudget({
      campaignId: input.campaignId,
      maxModelInvocations: 4,
      maxHostedWebOperations: 2,
      maxAggregateRealCalls: 4,
      hostedHardCapCapability: "provider_max_tool_calls",
    }),
    acquiredLocally: true,
  };
}

export type Mw6GovernedNoraProductTurnSuccess = Extract<
  ProjectAssistantSendResult,
  { ok: true }
> & {
  mw6AuthorityComposition: {
    authorityBound: boolean;
    realAuthorized: boolean;
    realPreflightCode: string;
    eligible: boolean;
    serverComposedGovernedAuthority: true;
    evidenceSource: Mw6AuthorityEvidenceCompositionSource;
    executionContractId: string;
    authorityEvidenceId: string;
    actorId: string;
    liveHostedDispatchCalls: 0;
  };
};

export type Mw6GovernedNoraProductTurnResult =
  | Mw6GovernedNoraProductTurnSuccess
  | Extract<ProjectAssistantSendResult, { ok: false }>;

export type RunMw6GovernedNoraProductTurnInput = {
  projectId: string;
  content: string;
  executionContractId: string;
  history?: AssistantHistoryMessage[];
  provider?: ConversationProvider;
  sessionDbPath?: string;
  /**
   * Optional untrusted evidence hint — verified only inside composition.
   */
  claimedAuthorityEvidenceId?: unknown;
  /**
   * TEST-ONLY — substitute Auth session → Pilote boundary.
   * Production omits this and uses resolveCurrentAuthenticatedPilote.
   * AUTH REAL boundary proof is carried forward, not re-proven.
   */
  resolveAuthenticatedPilote?: () => Promise<ResolveCurrentPiloteResult>;
  /** Hostile client fields — ignored. */
  governedAuthority?: unknown;
  actorId?: unknown;
  authorityEvidenceId?: unknown;
  getExecutionContract?: unknown;
  checkExecutionAuthorization?: unknown;
  authorityResolver?: unknown;
  authorizedContract?: unknown;
  currentExternalDiscoveryIntent?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
  /**
   * INTERNAL/EVAL-ONLY — canonical NoraCampaignBudget already acquired by Stage A
   * driver. Not client-trusted. Possession ≠ authority grant.
   * Absent → legacy in-turn acquire 4/2/4 unchanged.
   */
  sharedCampaignBudget?: NoraCampaignBudget;
  /** INTERNAL/EVAL-ONLY — model×effort pin for campaign cells. */
  evalModelReasoningControl?: NoraEvalModelReasoningControl;
  /** INTERNAL/EVAL-ONLY — USD accounting bridge for native Agents. */
  usdAccounting?: NoraAgentsUsdAccounting;
};

/**
 * Product server composition for MW6-governed Nora cognitive turns.
 * Builds governedAuthority server-side; never accepts client-built context.
 */
export async function runMw6GovernedNoraProductTurn(
  input: RunMw6GovernedNoraProductTurnInput,
): Promise<Mw6GovernedNoraProductTurnResult> {
  // Hostile authority surfaces — deliberately ignored.
  void input.governedAuthority;
  void input.actorId;
  void input.authorityEvidenceId;
  void input.getExecutionContract;
  void input.checkExecutionAuthorization;
  void input.authorityResolver;
  void input.authorizedContract;
  void input.currentExternalDiscoveryIntent;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

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

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "decision_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour MW6 composition.",
      mode: "unavailable",
      retryable: false,
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

  const pilote = input.resolveAuthenticatedPilote
    ? await input.resolveAuthenticatedPilote()
    : await resolveCurrentAuthenticatedPilote({
        headers: await headers(),
      });
  if (!pilote.ok) {
    return {
      ok: false,
      status: "validation_error",
      code: pilote.code,
      message: pilote.message,
      mode: "unavailable",
      retryable: false,
    };
  }

  const composed = await composeMw6GovernedAuthorityForCurrentPilote({
    oa: runtime.oa,
    pilote,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    claimedAuthorityEvidenceId: input.claimedAuthorityEvidenceId,
  });
  if (!composed.ok) {
    return {
      ok: false,
      status: "validation_error",
      code: composed.code,
      message: composed.message,
      mode: "unavailable",
      retryable: false,
    };
  }

  if (!wasServerComposedMw6GovernedAuthority(composed.governedAuthority)) {
    return {
      ok: false,
      status: "validation_error",
      code: "SERVER_COMPOSITION_MARKER_MISSING",
      message: "governedAuthority was not marked as server-composed.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const loaded =
    await runtime.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: composed.executionContractId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      status: "validation_error",
      code: "EXECUTION_CONTRACT_LOAD_FAILED",
      message: "Canonical EC reload failed after composition.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const campaignId =
    extractMw6CampaignIdFromScope(loaded.contract.scope) ??
    `mw6:${composed.executionContractId}`;

  const budgetResolved = resolveMw6GovernedCampaignBudget({
    campaignId,
    sharedCampaignBudget: input.sharedCampaignBudget,
  });
  if (!budgetResolved.ok) {
    return {
      ok: false,
      status: "validation_error",
      code: budgetResolved.code,
      message: budgetResolved.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const campaignBudget = budgetResolved.budget;

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
    {
      role: "system",
      content: buildProjectSystemPrompt(project),
    },
    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
    { role: "user", content },
  ];

  const provider = input.provider ?? resolveConversationProvider();
  const workspaceRoot = resolveWorkspaceRootFromAppCwd();

  let turn: NoraCognitiveTurnResult;
  try {
    turn = await runNoraCognitiveTurn({
      correlationId: `mw6-gov:${project.projectId}:${composed.executionContractId}`,
      projectId: project.projectId,
      messages,
      provider,
      enableTools: true,
      workspaceRoot,
      sessionDbPath: input.sessionDbPath,
      turnWorkloadContext: {
        projectCriticality: project.criticality,
        userContentLength: content.length,
        historyMessageCount: history.length,
        historyTotalChars: history.reduce((sum, m) => sum + m.content.length, 0),
        enableTools: true,
      },
      trustedSfiaProfile: null,
      enableHostedWebSearch: true,
      campaignBudget,
      governedAuthority: composed.governedAuthority as import("@/lib/nora-cognitive-runtime").Mw6GovernedAuthorityContext,
      evalModelReasoningControl: input.evalModelReasoningControl,
      usdAccounting: input.usdAccounting,
      // Deterministic boundary — ZERO LIVE hosted dispatch.
      deterministicHostedWebSearchCalls: [],
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur Nora inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "NORA_TURN_ERROR",
      message,
      mode: modeResolution.mode,
      retryable: true,
    };
  }

  const binding = turn.mw6AuthorityBinding;
  return {
    ok: true,
    status: "ok",
    mode: modeResolution.mode as "fixture" | "live",
    presentation: modeResolution.presentation,
    text: turn.text,
    toolRounds: turn.toolRounds,
    toolCalls: turn.toolCalls,
    sources: [],
    toolEvents: [],
    project,
    ephemeralNotice:
      "MW6 governed Nora turn — server-composed authority; REAL not authorized.",
    model: turn.usage.model,
    cognitiveRuntime: "agents",
    sessionId: turn.sessionId,
    memoryBAvailability: turn.memoryBAvailability,
    memoryBCompactionState: turn.memoryBCompactionState,
    mw6AuthorityComposition: {
      authorityBound: binding?.authorityBound === true,
      realAuthorized: binding?.realAuthorized === true,
      realPreflightCode: binding?.realPreflightCode ?? "MISSING",
      realPreflightReasons: binding?.realPreflightReasons ?? [],
      eligible: binding?.eligible === true,
      serverComposedGovernedAuthority: true,
      evidenceSource: composed.evidenceSource,
      executionContractId: composed.executionContractId,
      authorityEvidenceId: composed.authorityEvidenceId,
      actorId: pilote.actor.actorId,
      liveHostedDispatchCalls: 0,
      realPreflightBlocked: binding?.realPreflightBlocked === true,
    },
  };
}
