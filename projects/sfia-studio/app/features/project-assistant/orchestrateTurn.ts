import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import {
  memoryBPiloteNotice,
  memoryBCompactionPiloteNotice,
  runNoraCognitiveTurn,
  formatCognitiveStopPiloteNotice,
  type SemanticCognitiveWorkloadAssessment,
  type Mw3ContradictionAssessmentInput,
} from "@/lib/nora-cognitive-runtime";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { collectToolTelemetry } from "./collectToolTelemetry";
import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
import { resolveAssistantMode } from "./resolveAssistantMode";
import type {
  AssistantHistoryMessage,
  Mw3CognitiveSurfaceDto,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "./types";

const MAX_HISTORY_MESSAGES = 20;

function buildEphemeralNotice(
  memoryBAvailability:
    | "available_with_history"
    | "available_empty"
    | "unavailable",
  memoryBCompactionState:
    | "none"
    | "compacted_no_loss"
    | "compacted_with_loss"
    | "stale_invalidated",
  stalePriorInvalidated?: boolean,
  cognitiveStopNotice?: string | null,
): string {
  const base = memoryBPiloteNotice(memoryBAvailability);
  const compaction = memoryBCompactionPiloteNotice(memoryBCompactionState, {
    stalePriorInvalidated,
  });
  const parts = [cognitiveStopNotice, compaction, base].filter(
    (p): p is string => typeof p === "string" && p.trim().length > 0,
  );
  return parts.join(" ");
}

function toMw3Surface(
  turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
): Mw3CognitiveSurfaceDto | null {
  const disposition = turn.contradictionDisposition;
  const stop = turn.cognitiveStopDecision;
  if (!disposition || !stop) return null;
  return {
    disposition: disposition.disposition,
    progression: stop.outcome,
    cognitiveStop: stop.cognitiveStop,
    reason: stop.anatomy?.reason ?? disposition.disclosure,
    evidenceIds: stop.anatomy?.contradictionEvidenceIds ?? [
      ...disposition.acceptedEvidenceIds,
    ],
    sourceIds: stop.anatomy?.sourceIds ?? [...disposition.acceptedSourceIds],
    governingPremise: stop.anatomy?.governingPremise || null,
    nextAction: stop.anatomy?.nextAction ?? null,
    insufficiencyReasons: [...disposition.insufficiencyReasons],
    allowsSilentSuccess: false,
    blockedImpact: stop.cognitiveStop
      ? `Progression bloquée — prémisse gouvernante invalidée${
          stop.anatomy?.governingPremise
            ? ` (${stop.anatomy.governingPremise})`
            : ""
        }.`
      : null,
    mayContinue:
      stop.cognitiveStop !== true && stop.progression === "continue",
    notTechnicalFailure: stop.progression !== "technical_failure",
  };
}

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
  /**
   * Test injection — forces Memory B UNAVAILABLE (MW1-S01).
   * Same product path; no second runtime.
   */
  simulateMemoryBUnavailable?: boolean;
  /**
   * CORR-MW2-REAL-01 — INTERNAL semantic CWP from analyzeIntent.
   * Server-side only; never part of ProjectAssistantSendResult.
   */
  semanticCognitiveWorkload?: SemanticCognitiveWorkloadAssessment | null;
  /**
   * CORR-MW2-REAL-04 — INTERNAL full Truth C / LPS context for F1 system prompt.
   * Server-side only; does not expand ProjectAssistantContextDto / client DTO.
   */
  truthCContext?: string | null;
  /**
   * MW3 — optional contradiction assessment (tests/eval/product when facts exist).
   * Server-side; surfaces mw3 DTO without inventing Evidence.
   */
  contradictionAssessment?: Mw3ContradictionAssessmentInput | null;
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
    {
      role: "system",
      content: buildProjectSystemPrompt(project, {
        truthCContext: input.truthCContext,
      }),
    },
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
      simulateMemoryBUnavailable: input.simulateMemoryBUnavailable,
      truthCRevision: {
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
      },
      turnWorkloadContext: {
        projectCriticality: project.criticality,
        userContentLength: content.length,
        historyMessageCount: history.length,
        historyTotalChars: history.reduce((sum, m) => sum + m.content.length, 0),
        enableTools: true,
      },
      trustedSfiaProfile: null,
      semanticCognitiveWorkload: input.semanticCognitiveWorkload ?? null,
      contradictionAssessment: input.contradictionAssessment ?? null,
    });

    const { toolEvents, sources } = collectToolTelemetry(sink.events);
    const mw3 = toMw3Surface(turn);
    const stopNotice = formatCognitiveStopPiloteNotice(
      turn.cognitiveStopDecision ?? {
        progression: "continue",
        outcome: "PROGRESS_OK",
        cognitiveStop: false,
        anatomy: null,
        surfacedDisposition: "none",
        allowsSilentSuccess: false,
      },
    );
    const status =
      turn.cognitiveStopDecision?.cognitiveStop === true
        ? ("cognitive_stop" as const)
        : ("ok" as const);

    return {
      ok: true,
      status,
      text: turn.text,
      mode: modeResolution.mode,
      presentation,
      model: turn.usage?.model ?? null,
      toolRounds: turn.toolRounds,
      toolCalls: turn.toolCalls,
      sources,
      toolEvents,
      project,
      ephemeralNotice: buildEphemeralNotice(
        turn.memoryBAvailability,
        turn.memoryBCompactionState,
        turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
        stopNotice,
      ),
      cognitiveRuntime: turn.cognitiveRuntime,
      sessionId: turn.sessionId,
      memoryBAvailability: turn.memoryBAvailability,
      memoryBCompactionState: turn.memoryBCompactionState,
      stalePriorInvalidated:
        turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
      mw3,
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
