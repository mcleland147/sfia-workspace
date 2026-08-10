import {
  getLiveConversationAvailability,
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import { runToolCallingLoop } from "@/lib/platform/tools";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { collectToolTelemetry } from "./collectToolTelemetry";
import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "./types";

const MAX_HISTORY_MESSAGES = 20;
const EPHEMERAL_NOTICE =
  "Conversation éphémère (process-local) — un rechargement ou redémarrage peut effacer l'historique. Aucune persistence produit.";

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

function resolveMode(): {
  mode: "fixture" | "live" | "unavailable";
  canProceed: boolean;
  message?: string;
} {
  if (isFakeConversationProviderForced()) {
    return { mode: "fixture", canProceed: true };
  }
  const availability = getLiveConversationAvailability();
  if (!availability.available) {
    return {
      mode: "unavailable",
      canProceed: false,
      message: `Assistant indisponible — configuration manquante (${availability.missing.join(", ")}). Aucun basculement silencieux vers le mode démonstration.`,
    };
  }
  return { mode: "live", canProceed: true };
}

/**
 * Thin F1 orchestration — platform AI + tool loop only (no OPS1 session).
 */
export async function orchestrateProjectAssistantTurn(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
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
  const modeResolution = resolveMode();
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
  const provider = resolveConversationProvider();
  const presentation =
    isFakeConversationProviderForced() || provider.providerId === "fake-test"
      ? "test_provider"
      : "openai_live";

  try {
    const loop = await runToolCallingLoop({
      correlationId: `f1:${project.projectId}`,
      messages,
      provider,
      enableTools: true,
      sink,
      workspaceRoot,
    });

    const { toolEvents, sources } = collectToolTelemetry(sink.events);

    return {
      ok: true,
      status: "ok",
      text: loop.text,
      mode: modeResolution.mode,
      presentation,
      model: loop.usage?.model ?? null,
      toolRounds: loop.toolRounds,
      toolCalls: loop.toolCalls,
      sources,
      toolEvents,
      project,
      ephemeralNotice: EPHEMERAL_NOTICE,
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
