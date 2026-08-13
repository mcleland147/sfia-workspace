"use server";

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { orchestrateAssistantSend } from "./f2/orchestrateF2";
import { recordF2Decision } from "./f2/recordDecision";
import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
import type { F2DecisionKind } from "./f2/types";
import { confirmAndExecuteF3Fixture } from "./f3/confirmAndExecuteF3Fixture";
import { prepareF3Fixture } from "./f3/prepareF3Fixture";
import { prepareM3FromDecision } from "./f3/prepareM3FromDecision";
import { F3_PROCESS_LOCAL_NOTICE } from "./f3/constants";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantDecideResult,
  ProjectAssistantExecuteF3Result,
  ProjectAssistantPrepareF3Result,
  ProjectAssistantPrepareM3Result,
  ProjectAssistantSendResult,
} from "./types";

/**
 * Thin server action — Project Workspace Assistant (F1 + F2 + F3 fixture).
 * No OPS1 session. No Cursor REAL. No Git write. No durable persistence.
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

/**
 * F3 PREPARE — Build+Validate ExecutionContract only.
 * No client authority. Hostile mode/adapter/agent/command rejected.
 */
export async function projectAssistantPrepareF3FixtureAction(input: {
  projectId: string;
  proposalId: string;
  decisionId: string;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  executionMode?: unknown;
  trustLevel?: unknown;
  authorityEvidenceId?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantPrepareF3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.executionMode;
  void input.trustLevel;
  void input.authorityEvidenceId;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "prepare_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour F3 PREPARE.",
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

  const prepared = await prepareF3Fixture({
    projectId: input.projectId,
    proposalId: input.proposalId,
    decisionId: input.decisionId,
    mode: input.mode,
    adapterRef: input.adapterRef,
    agentId: input.agentId,
    command: input.command,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!prepared.ok) {
    return {
      ok: false,
      status: prepared.code === "STALE" ? "stale" : "prepare_error",
      code: prepared.code,
      message: prepared.message,
      mode: "fixture",
      retryable: prepared.code === "STALE",
      proposal: (prepared.proposal as ProjectAssistantPrepareF3FailureProposal) ?? null,
    };
  }

  const f3 = prepared.payload;
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      "F3 PREPARE",
      `Contrat ${f3.contract.executionContractId} v${f3.contract.version} (${f3.contract.status})`,
      "AUCUNE EXÉCUTION",
      "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
      F3_PROCESS_LOCAL_NOTICE,
    ].join(" — "),
    project,
    ephemeralNotice: F3_PROCESS_LOCAL_NOTICE,
    f2: null,
    f3,
  };
}

/**
 * F3 M3 PREPARE — from durable decisionId (no ProposalStore).
 * Exact contract from DecisionBasis. Cursor PREPARE-only. No Attempt.
 */
export async function projectAssistantPrepareM3Action(input: {
  projectId: string;
  decisionId: string;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantPrepareM3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "prepare_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour M3 PREPARE.",
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

  const prepared = await prepareM3FromDecision({
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
      activeCycleInstanceId: project.activeCycleInstanceId,
      ckcResolutionRef: project.ckcResolutionRef,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!prepared.ok) {
    return {
      ok: false,
      status: prepared.code === "CONTEXT_STALE" ? "stale" : "prepare_error",
      code: prepared.code,
      message: prepared.message,
      mode: "fixture",
      retryable: prepared.code === "CONTEXT_STALE",
    };
  }

  const f3 = prepared.payload;
  return {
    ok: true,
    status: "ok",
    mode: "m3_prepare",
    presentation: "unconfirmed",
    text: [
      "M3 PREPARE",
      `Contrat ${f3.contract.executionContractId} v${f3.contract.version} (${f3.contract.status})`,
      `Fingerprint ${f3.contract.semanticFingerprint.slice(0, 12)}…`,
      "AUCUNE EXÉCUTION",
      "CURSOR PREPARE-ONLY",
      "NO GATE D",
    ].join(" — "),
    project,
    ephemeralNotice:
      "M3 PREPARE durable — Decision + ExecutionContract Product SQLite. Cursor REAL bloqué.",
    f3,
  };
}

type ProjectAssistantPrepareF3FailureProposal =
  import("./f2/types").ProposalDto | null;

/**
 * F3 confirm + fixture execute + evidence reinjection.
 * No client authority. Hostile REAL/adapter/agent/command rejected.
 */
export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
  projectId: string;
  proposalId: string;
  decisionId: string;
  executionContractId: string;
  expectedContractVersion: number;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  executionMode?: unknown;
  trustLevel?: unknown;
  authorityEvidenceId?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantExecuteF3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.executionMode;
  void input.trustLevel;
  void input.authorityEvidenceId;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "execute_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour F3 EXECUTE.",
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

  const executed = await confirmAndExecuteF3Fixture({
    projectId: input.projectId,
    proposalId: input.proposalId,
    decisionId: input.decisionId,
    executionContractId: input.executionContractId,
    expectedContractVersion: input.expectedContractVersion,
    mode: input.mode,
    adapterRef: input.adapterRef,
    agentId: input.agentId,
    command: input.command,
    real: input.real,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      executionAttemptServices: runtime.oa.executionAttemptServices,
      evidenceReviewServices: runtime.oa.evidenceReviewServices,
      fixtureAdapter: runtime.oa.fixtureAdapter,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!executed.ok) {
    return {
      ok: false,
      status: executed.code === "STALE" ? "stale" : "execute_error",
      code: executed.code,
      message: executed.message,
      mode: "fixture",
      retryable: executed.code === "STALE",
      proposal: (executed.proposal as ProjectAssistantPrepareF3FailureProposal) ?? null,
    };
  }

  const f3 = executed.payload;
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      f3.reusedExistingAttempt
        ? "F3 FIXTURE DÉJÀ EXÉCUTÉE (idempotent)"
        : "F3 FIXTURE EXÉCUTÉE",
      `Attempt ${f3.attempt.attemptId} · ${f3.attempt.status}`,
      `Evidence ${f3.evidence.evidenceId} · non verified`,
      `ReviewBundle ${f3.reviewBundle.reviewBundleId}`,
      "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
      "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
      "CURSOR REAL BLOQUÉ",
      F3_PROCESS_LOCAL_NOTICE,
    ].join(" — "),
    project,
    ephemeralNotice: F3_PROCESS_LOCAL_NOTICE,
    f3,
  };
}
