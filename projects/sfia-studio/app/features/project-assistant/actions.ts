"use server";

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { orchestrateAssistantSend } from "./f2/orchestrateF2";
import { recordF2Decision } from "./f2/recordDecision";
import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
import type { F2DecisionKind } from "./f2/types";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantDecideResult,
  ProjectAssistantSendResult,
} from "./types";

/**
 * Thin server action — Project Workspace Assistant (F1 + F2).
 * No OPS1 session. No Cursor. No Git write. No durable persistence.
 */
export async function projectAssistantSendAction(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
}): Promise<ProjectAssistantSendResult> {
  return orchestrateAssistantSend(input);
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
 * Morris gate decision — client may only send proposalId, decisionKind,
 * optional reserves, projectId. Authority is registered server-side.
 */
export async function projectAssistantDecideAction(input: {
  projectId: string;
  proposalId: string;
  decisionKind: F2DecisionKind;
  reservesText?: string | null;
  /** Hostile — ignored if present. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantDecideResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "decision_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour la décision F2.",
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
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const recorded = await recordF2Decision({
    proposalId: input.proposalId,
    projectId: input.projectId,
    decisionKind: input.decisionKind,
    reservesText: input.reservesText,
    canActAsMorris: input.canActAsMorris,
    claimedAuthorityLevel: input.claimedAuthorityLevel,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
    },
    decisionServices: runtime.oa.decisionServices,
    authorityResolver: runtime.oa.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
  });

  if (!recorded.ok) {
    return {
      ok: false,
      status: recorded.code === "STALE" ? "stale" : "decision_error",
      code: recorded.code,
      message: recorded.message,
      mode: "fixture",
      retryable: recorded.code === "STALE",
      proposal: recorded.proposal ?? null,
    };
  }

  const { decision, proposal } = recorded;
  const textParts = [
    "DÉCISION PRISE",
    `${decision.kind} capturée pour ${proposal.proposalId}.`,
    `Scope: ${decision.scope}.`,
    decision.readyForNextGatedStep
      ? "READY FOR NEXT GATED STEP"
      : "Proposition non approuvée.",
    "AUCUNE EXÉCUTION",
    F2_PROCESS_LOCAL_NOTICE,
  ];

  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: textParts.join(" — "),
    project,
    ephemeralNotice: F2_PROCESS_LOCAL_NOTICE,
    f2: {
      turnKind: "f2_decision",
      intentClass: "actionable",
      qualification: null,
      proposal,
      decision,
      labels: {
        recommendation: null,
        proposition: "PROPOSITION",
        decisionRequired: null,
        decisionTaken: "DÉCISION PRISE",
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: true,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    },
  };
}
