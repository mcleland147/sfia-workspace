/**
 * Nora cognitive turn entry — Option C single Agents Runner path.
 * MW1-S01: honest Memory B availability.
 * MW1-S02: governed compaction + Truth C revision invalidation before cognition.
 * MW2-S01: CWP / Strategy → Runner modelSettings.reasoning (OD-02 Option B).
 */
import type { ConversationProvider, ProviderChatMessage } from "@/lib/platform/ai";
import { requireLiveConversationSecrets } from "@/lib/platform/ai/config";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import {
  appendMemoryBCognitiveDisclosure,
  probeMemoryBAvailability,
} from "./memoryBAvailability";
import type { Session } from "@openai/agents";
import {
  appendMemoryBCompactionDisclosure,
  createMemoryBSessionView,
  type TruthCRevision,
} from "./memoryBCompaction";
import { resolveNoraSessionSqlitePath } from "./sessionPaths";
import { runNoraAgentsTurn } from "./runNoraAgentsTurn";
import type { NoraCognitiveTurnResult } from "./types";
import {
  buildSignalsFromTurnContext,
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
  type CognitiveWorkloadSignals,
  type TurnWorkloadContext,
} from "./cognitiveWorkloadPolicy";
import { validateRuntimeReasoningCapability } from "./reasoningCapability";
import { buildRunnerModelSettingsForEffort } from "./reasoningModelSettings";

export type RunNoraCognitiveTurnInput = {
  correlationId: string;
  projectId: string;
  messages: ProviderChatMessage[];
  provider: ConversationProvider;
  enableTools?: boolean;
  sink?: EventSink;
  workspaceRoot?: string;
  sessionDbPath?: string;
  sessionKey?: string;
  simulateMemoryBUnavailable?: boolean;
  /** MW1-S02 — Truth C revision token for compaction invalidation. */
  truthCRevision?: TruthCRevision;
  /** Test-only fixed timestamp for deterministic compaction. */
  compactionNowIso?: string;
  /** MW2 — optional explicit workload signals (tests). */
  cognitiveWorkloadSignals?: Partial<CognitiveWorkloadSignals>;
  /** MW2 — trusted SFIA Profile only when actually available; never invented. */
  trustedSfiaProfile?: string | null;
  /** MW2 — product turn facts for signal derivation. */
  turnWorkloadContext?: TurnWorkloadContext;
  /** MW2 — skip policy for isolated tests. */
  skipCognitiveStrategy?: boolean;
};

function emitCognitiveStrategyTelemetry(
  sink: EventSink | undefined,
  correlationId: string,
  decision: ReturnType<typeof decideCognitiveStrategy>,
): void {
  if (!sink) return;
  sink.emit({
    type: "COGNITIVE_STRATEGY_SELECTED",
    correlationId,
    detail: {
      strategyClass: decision.strategyClass,
      reasoningEffort: decision.reasoningEffort,
      reasoningDemand: decision.reasoningDemand,
      criticalChallengeArmed: decision.criticalChallengeArmed,
      bootstrapUsed: decision.bootstrapUsed,
      reasonCodes: decision.reasonCodes,
      envelope: [...decision.candidateEnvelope],
    },
  });
}

function resolveCognitiveStrategyForTurn(
  input: RunNoraCognitiveTurnInput,
): ReturnType<typeof decideCognitiveStrategy> | null {
  if (input.skipCognitiveStrategy) return null;

  const signals = input.cognitiveWorkloadSignals
    ? normalizeCognitiveWorkloadSignals(input.cognitiveWorkloadSignals)
    : input.turnWorkloadContext
      ? buildSignalsFromTurnContext(input.turnWorkloadContext)
      : normalizeCognitiveWorkloadSignals({});

  return decideCognitiveStrategy({
    signals,
    trustedSfiaProfile: input.trustedSfiaProfile,
  });
}

function resolveRunnerModelSettings(
  input: RunNoraCognitiveTurnInput,
  decision: ReturnType<typeof decideCognitiveStrategy> | null,
): ReturnType<typeof buildRunnerModelSettingsForEffort> | undefined {
  if (!decision) return undefined;

  const model =
    typeof input.provider?.providerId === "string" &&
    input.provider.providerId.startsWith("fake")
      ? process.env.OPENAI_MODEL?.trim() || "gpt-5.6-luna"
      : requireLiveConversationSecrets().model;

  validateRuntimeReasoningCapability(model, decision.reasoningEffort);
  return buildRunnerModelSettingsForEffort(decision.reasoningEffort);
}

function withStrategyFields(
  turn: NoraCognitiveTurnResult,
  decision: ReturnType<typeof decideCognitiveStrategy> | null,
): NoraCognitiveTurnResult {
  if (!decision) return turn;
  return {
    ...turn,
    cognitiveStrategyClass: decision.strategyClass,
    selectedReasoningEffort: decision.reasoningEffort,
    criticalChallengeArmed: decision.criticalChallengeArmed,
  };
}

export async function runNoraCognitiveTurn(
  input: RunNoraCognitiveTurnInput,
): Promise<NoraCognitiveTurnResult> {
  const strategyDecision = resolveCognitiveStrategyForTurn(input);
  if (strategyDecision) {
    emitCognitiveStrategyTelemetry(
      input.sink,
      input.correlationId,
      strategyDecision,
    );
  }
  const runnerModelSettings = resolveRunnerModelSettings(input, strategyDecision);

  const system = input.messages.find((m) => m.role === "system");
  const userMessages = input.messages.filter((m) => m.role === "user");
  const lastUser = userMessages[userMessages.length - 1];
  if (!system?.content?.trim() || !lastUser?.content?.trim()) {
    throw new Error("NORA_AGENTS_TURN_REQUIRES_SYSTEM_AND_USER");
  }

  let dbPath: string;
  try {
    dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
  } catch {
    const systemInstructions = appendMemoryBCognitiveDisclosure(
      system.content,
      "unavailable",
    );
    const turn = await runNoraAgentsTurn({
      correlationId: input.correlationId,
      projectId: input.projectId,
      systemInstructions,
      userContent: lastUser.content.trim(),
      session: null,
      memoryBAvailability: "unavailable",
      workspaceRoot: input.workspaceRoot,
      sink: input.sink,
      enableTools: input.enableTools,
      provider: input.provider,
      runnerModelSettings,
    });
    return withStrategyFields(
      {
        ...turn,
        memoryBCompactionState: "none",
        memoryBCompactionDetails: null,
      },
      strategyDecision,
    );
  }

  const probe = await probeMemoryBAvailability({
    projectId: input.projectId,
    dbPath,
    sessionKey: input.sessionKey ?? "f1-default",
    simulateUnavailable: input.simulateMemoryBUnavailable,
  });

  // CORR-OPT-C-01: do NOT auto-import caller-provided process-local
  // user/assistant history into durable Runner Session (untrusted provenance).
  let systemInstructions = appendMemoryBCognitiveDisclosure(
    system.content,
    probe.availability,
  );

  let sessionForRunner: Session | null = probe.session;
  let compactionDetails = null;
  let compactionState: NoraCognitiveTurnResult["memoryBCompactionState"] =
    "none";

  if (
    probe.session &&
    probe.availability !== "unavailable" &&
    input.truthCRevision
  ) {
    const prepared = await createMemoryBSessionView({
      session: probe.session,
      truthCRevision: input.truthCRevision,
      nowIso: input.compactionNowIso,
    });
    sessionForRunner = prepared.view;
    compactionDetails = prepared.details;
    compactionState = prepared.details.state;
    systemInstructions = appendMemoryBCompactionDisclosure(
      systemInstructions,
      compactionState,
      { stalePriorInvalidated: prepared.details.stalePriorInvalidated },
    );
  }

  try {
    const turn = await runNoraAgentsTurn({
      correlationId: input.correlationId,
      projectId: input.projectId,
      systemInstructions,
      userContent: lastUser.content.trim(),
      session: sessionForRunner,
      memoryBAvailability: probe.availability,
      workspaceRoot: input.workspaceRoot,
      sink: input.sink,
      enableTools: input.enableTools,
      provider: input.provider,
      runnerModelSettings,
    });
    return withStrategyFields(
      {
        ...turn,
        memoryBCompactionState: compactionState,
        memoryBCompactionDetails: compactionDetails,
      },
      strategyDecision,
    );
  } finally {
    if (probe.session) {
      probe.session.close();
    }
  }
}
