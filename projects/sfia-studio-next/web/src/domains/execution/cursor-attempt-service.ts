import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, projects, technicalContracts } from "@/db/schema";
import { insertHumanDecision } from "@/domains/decisions/service";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import { assertCurrentCursorAuthority } from "./cursor-authority";
import { claimCursorAttempt, persistCursorOwnedResult } from "./cursor-claim";
import {
  dispatchCursorRun,
  resolveCursorAdapterMode,
  stopCursorRun,
} from "./cursor-sdk-adapter";
import { isClaimActive, readClaim } from "./claim-lease";
import { instructionFingerprint } from "./technical-contract-fingerprint";
import { resolveCursorWorkspace } from "./workspace-resolver";
import type { CursorExecutionPlan, CursorLiveProjection } from "./types";

async function assertProject(pilotId: string, projectId: string) {
  const p = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!p) throw new StudioError("NOT_FOUND", "Projet introuvable");
}

function parseLive(resultJson: string | null | undefined): CursorLiveProjection {
  try {
    return JSON.parse(resultJson || "{}") as CursorLiveProjection;
  } catch {
    return {};
  }
}

function planFingerprintPayload(plan: CursorExecutionPlan): string {
  return JSON.stringify({
    kind: plan.kind,
    contractId: plan.contractId,
    contractVersion: plan.contractVersion,
    contractFingerprint: plan.contractFingerprint,
    instructionFingerprint: plan.instructionFingerprint,
    workspaceCwd: plan.workspaceCwd,
    workspaceKey: plan.workspaceKey ?? null,
    effectProviderMode: plan.effectProviderMode,
    gitScope: plan.gitScope ?? null,
    mcpRequired: [...(plan.mcpRequired ?? [])].sort(),
  });
}

export async function prepareCursorExecution(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
  correlationKey: string;
  /** Server-side key only — never an absolute client path. */
  workspaceKey?: string | null;
  /** Legacy client field — absolute paths are rejected. */
  workspaceCwd?: string | null;
  mcpRequired?: string[];
}) {
  await assertProject(input.pilotId, input.projectId);

  const contract = (
    await db
      .select()
      .from(technicalContracts)
      .where(
        and(
          eq(technicalContracts.id, input.contractId),
          eq(technicalContracts.projectId, input.projectId),
          eq(technicalContracts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!contract) throw new StudioError("NOT_FOUND", "Contrat technique introuvable");
  if (contract.status !== "READY") {
    throw new StudioError(
      "INVALID_REQUEST",
      `Contrat non prêt pour tentative: ${contract.status}`,
      { exposeMessage: true },
    );
  }
  // C19: READY historique ≠ applicabilité actuelle au point d'effet.
  const { assertTechnicalContractMandateApplicable } = await import(
    "./mandate-applicability"
  );
  await assertTechnicalContractMandateApplicable({
    pilotId: input.pilotId,
    projectId: input.projectId,
    contractId: input.contractId,
    preparationId: contract.preparationId,
  });

  const workspace = resolveCursorWorkspace({
    pilotId: input.pilotId,
    projectId: input.projectId,
    workspaceKey: input.workspaceKey,
    clientDeclaredCwd: input.workspaceCwd,
    ensureDir: true,
  });

  const prior = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.pilotId, input.pilotId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.correlationKey, input.correlationKey),
        ),
      )
      .limit(1)
  )[0];

  const mode = resolveCursorAdapterMode();
  const gitScope = contract.gitScopeJson
    ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
    : null;
  // DÉC-ML5-GIT Option A — CP-01 independent Git observations (never contract SHA echo).
  if (gitScope?.required) {
    const {
      buildCursorGitMandateFromScope,
      observeWorkspaceGitFacts,
      preflightCursorGitOptionA,
    } = await import("./cursor-git-option-a");
    const mandate = buildCursorGitMandateFromScope(gitScope);
    const authorized =
      process.env.SFIA_CURSOR_GIT_AUTHORIZED_REPOS?.split(",")
        .map((s) => s.trim())
        .filter(Boolean) ?? [];
    // DEV SCRIPTED: allow the declared repo name when authorized list empty and mode SCRIPTED.
    const repos =
      authorized.length > 0
        ? authorized
        : mode === "SCRIPTED" && gitScope.repositoryFullName
          ? [gitScope.repositoryFullName]
          : [];
    const observations = observeWorkspaceGitFacts(
      workspace.workspaceCwd,
      gitScope.baseRef ?? "main",
      gitScope.workBranch ?? "cursor/work",
    );
    const pre = preflightCursorGitOptionA({
      mandate,
      workspacePath: workspace.workspaceCwd,
      authorizedRepos: repos,
      observations,
    });
    if (!pre.ok) {
      throw new StudioError(
        "INVALID_REQUEST",
        `Préflight Git Cursor option A refusé: ${pre.reason}`,
        { exposeMessage: true },
      );
    }
  }
  // E12 / C8 A3 — MCP fail-closed: UNKNOWN blocks; SCRIPTED may simulate explicitly.
  const mcpRequired = input.mcpRequired ?? [];
  if (mcpRequired.length > 0) {
    const { assertMcpReadyForDispatch, checkRequiredMcpCapabilities } = await import(
      "./mcp-capability-check"
    );
    const scriptedSimulation = mode === "SCRIPTED";
    const mcpResults = checkRequiredMcpCapabilities(mcpRequired, process.env, {
      scriptedSimulation,
    });
    const mcpGate = assertMcpReadyForDispatch(mcpResults, {
      allowScriptedSimulation: scriptedSimulation,
    });
    if (!mcpGate.ok) {
      throw new StudioError(
        "INVALID_REQUEST",
        `Préflight MCP refusé: ${mcpGate.reason}`,
        { exposeMessage: true },
      );
    }
  }
  const modelId = (process.env.SFIA_CURSOR_MODEL_ID || "").trim() || undefined;
  const plan: CursorExecutionPlan = {
    kind: "CURSOR_EXECUTION",
    contractId: contract.id,
    contractKey: contract.contractKey,
    contractVersion: contract.version,
    contractFingerprint: contract.fingerprint,
    instructionFingerprint: instructionFingerprint(contract.instructionText),
    workspaceCwd: workspace.workspaceCwd,
    workspaceKey: workspace.workspaceKey,
    effectProviderMode: mode,
    ...(modelId ? { modelId } : {}),
    gitScope,
    mcpRequired,
  };
  const fingerprint = contract.fingerprint;
  const planFp = planFingerprintPayload(plan);

  if (prior) {
    if (prior.kind !== "CURSOR_EXECUTION") {
      throw new StudioError("CONFLICT", "correlationKey déjà utilisé par un autre kind");
    }
    if (prior.fingerprint !== fingerprint) {
      throw new StudioError("CONFLICT", "PAYLOAD_MISMATCH pour correlationKey", {
        exposeMessage: true,
      });
    }
    const priorPlan = JSON.parse(prior.planJson) as CursorExecutionPlan;
    if (planFingerprintPayload(priorPlan) !== planFp) {
      throw new StudioError(
        "CONFLICT",
        "PAYLOAD_MISMATCH — même correlationKey, cible/workspace/capacités différents",
        { exposeMessage: true },
      );
    }
    return {
      attemptId: prior.id,
      status: prior.status,
      idempotent: true as const,
      fingerprint: prior.fingerprint,
      plan: priorPlan,
    };
  }

  const attemptId = newId("efx");
  const now = new Date();
  await db.insert(effectAttempts).values({
    id: attemptId,
    pilotId: input.pilotId,
    projectId: input.projectId,
    kind: "CURSOR_EXECUTION",
    status: "PREPARED",
    correlationKey: input.correlationKey,
    fingerprint,
    planJson: JSON.stringify(plan),
    resultJson: JSON.stringify({ reportStatus: "EXPECTED" } satisfies CursorLiveProjection),
    createdAt: now,
    updatedAt: now,
  });

  return {
    attemptId,
    status: "PREPARED" as const,
    idempotent: false as const,
    fingerprint,
    plan,
  };
}

/**
 * Authenticated D6 Non — records an explicit HumanDecision refusal.
 * No AUTHORIZED transition, no dispatch, no Cursor effect.
 * Attempt moves PREPARED → CANCELLED (still the same attemptId).
 */
export async function refuseCursorExecution(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  statement: string;
  inspectedFingerprint: string;
}) {
  return db.transaction(async (tx) => {
    const row = (
      await tx
        .select()
        .from(effectAttempts)
        .where(
          and(
            eq(effectAttempts.id, input.attemptId),
            eq(effectAttempts.projectId, input.projectId),
            eq(effectAttempts.pilotId, input.pilotId),
          ),
        )
        .limit(1)
    )[0];
    if (!row) throw new StudioError("NOT_FOUND", "Tentative introuvable");
    if (row.kind !== "CURSOR_EXECUTION") {
      throw new StudioError("INVALID_REQUEST", "Tentative non Cursor");
    }
    if (row.status === "CANCELLED" && row.decisionId) {
      return {
        attemptId: row.id,
        status: "CANCELLED" as const,
        decisionId: row.decisionId,
        idempotent: true as const,
        fingerprint: row.fingerprint,
        refused: true as const,
      };
    }
    if (row.status !== "PREPARED") {
      throw new StudioError(
        "CONFLICT",
        `Refus D6 impossible depuis statut ${row.status}`,
        { exposeMessage: true },
      );
    }
    if (input.inspectedFingerprint !== row.fingerprint) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        "Empreinte inspectée ≠ tentative — relire le contrat",
        { exposeMessage: true },
      );
    }
    const effectConditions = JSON.stringify({
      fingerprint: row.fingerprint,
      kind: "CURSOR_EXECUTION_REFUSAL",
      attemptId: row.id,
    });
    const decisionId = await insertHumanDecision(tx, {
      projectId: input.projectId,
      pilotId: input.pilotId,
      sourceKind: "CURSOR_EXECUTION",
      sourceRef: row.id,
      kind: "CURSOR_EXECUTION_REFUSAL",
      objectRef: row.id,
      statement: (input.statement || "Refus explicite D6 — pas d'exécution Cursor").slice(0, 500),
      effectConditions,
    });
    const now = new Date();
    await tx
      .update(effectAttempts)
      .set({
        status: "CANCELLED",
        decisionId,
        effectConditions,
        updatedAt: now,
      })
      .where(eq(effectAttempts.id, row.id));
    return {
      attemptId: row.id,
      status: "CANCELLED" as const,
      decisionId,
      idempotent: false as const,
      fingerprint: row.fingerprint,
      refused: true as const,
    };
  });
}

export async function authorizeCursorExecution(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  statement: string;
  inspectedFingerprint: string;
  /** Explicit confirmation — required. */
  confirmed: boolean;
}) {
  if (!input.confirmed) {
    return refuseCursorExecution({
      pilotId: input.pilotId,
      projectId: input.projectId,
      attemptId: input.attemptId,
      statement: input.statement,
      inspectedFingerprint: input.inspectedFingerprint,
    });
  }
  return db.transaction(async (tx) => {
    const row = (
      await tx
        .select()
        .from(effectAttempts)
        .where(
          and(
            eq(effectAttempts.id, input.attemptId),
            eq(effectAttempts.projectId, input.projectId),
            eq(effectAttempts.pilotId, input.pilotId),
          ),
        )
        .limit(1)
    )[0];
    if (!row) throw new StudioError("NOT_FOUND", "Tentative introuvable");
    if (row.kind !== "CURSOR_EXECUTION") {
      throw new StudioError("INVALID_REQUEST", "Tentative non Cursor");
    }
    if (row.status !== "PREPARED" && row.status !== "AUTHORIZED") {
      throw new StudioError("CONFLICT", `Statut non autorisable: ${row.status}`);
    }
    if (input.inspectedFingerprint !== row.fingerprint) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        "Empreinte inspectée ≠ tentative — relire le contrat",
        { exposeMessage: true },
      );
    }

    const contract = (
      await tx
        .select()
        .from(technicalContracts)
        .where(eq(technicalContracts.id, (JSON.parse(row.planJson) as CursorExecutionPlan).contractId))
        .limit(1)
    )[0];
    if (!contract || contract.status !== "READY") {
      throw new StudioError("REQUIRES_REQUALIFICATION", "Contrat non READY au moment D6");
    }
    if (contract.fingerprint !== row.fingerprint) {
      throw new StudioError("REQUIRES_REQUALIFICATION", "Contrat divergé depuis prepare");
    }
    // C19: re-check filiation / investigation currency before HumanDecision.
    const { assertTechnicalContractMandateApplicable } = await import(
      "./mandate-applicability"
    );
    await assertTechnicalContractMandateApplicable({
      pilotId: input.pilotId,
      projectId: input.projectId,
      contractId: contract.id,
      preparationId: contract.preparationId,
    });

    if (row.status === "AUTHORIZED" && row.decisionId) {
      return {
        attemptId: row.id,
        status: "AUTHORIZED" as const,
        decisionId: row.decisionId,
        idempotent: true as const,
        fingerprint: row.fingerprint,
      };
    }

    const effectConditions = JSON.stringify({
      fingerprint: row.fingerprint,
      kind: "CURSOR_EXECUTION_MANDATE",
      attemptId: row.id,
    });
    const decisionId = await insertHumanDecision(tx, {
      projectId: input.projectId,
      pilotId: input.pilotId,
      sourceKind: "CURSOR_EXECUTION",
      sourceRef: row.id,
      kind: "CURSOR_EXECUTION_MANDATE",
      objectRef: row.id,
      statement: input.statement.slice(0, 500),
      effectConditions,
    });

    const now = new Date();
    await tx
      .update(effectAttempts)
      .set({
        status: "AUTHORIZED",
        decisionId,
        effectConditions,
        updatedAt: now,
      })
      .where(eq(effectAttempts.id, row.id));

    return {
      attemptId: row.id,
      status: "AUTHORIZED" as const,
      decisionId,
      idempotent: false as const,
      fingerprint: row.fingerprint,
    };
  });
}

export async function dispatchCursorExecution(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
}) {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, input.attemptId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) throw new StudioError("NOT_FOUND", "Tentative introuvable");
  if (row.kind !== "CURSOR_EXECUTION") {
    throw new StudioError("INVALID_REQUEST", "Tentative non Cursor");
  }

  const live = parseLive(row.resultJson);

  // Terminal / in-flight: never blind redispatches.
  if (row.status === "DISPATCHED") {
    throw new StudioError(
      "CONFLICT",
      "Exécution déjà DISPATCHED — reconcile puis reprise contrôlée (AMBIGUOUS) requise",
      { exposeMessage: true },
    );
  }
  if (row.status === "COMPLETED" || row.status === "FAILED" || row.status === "CONFLICT") {
    return {
      attemptId: row.id,
      status: row.status,
      idempotent: true as const,
      live,
      limits: ["NO_BLIND_REDISPATCH", ...(live.limits ?? [])],
    };
  }
  if (row.status !== "AUTHORIZED" && row.status !== "AMBIGUOUS") {
    throw new StudioError("CONFLICT", `Dispatch refusé depuis statut ${row.status}`, {
      exposeMessage: true,
    });
  }

  await assertCurrentCursorAuthority({
    pilotId: input.pilotId,
    projectId: input.projectId,
    decisionId: row.decisionId,
    attemptId: row.id,
    fingerprint: row.fingerprint,
    effectConditionsFingerprint: row.effectConditions
      ? (JSON.parse(row.effectConditions) as { fingerprint?: string }).fingerprint ?? null
      : null,
  });

  const plan = JSON.parse(row.planJson) as CursorExecutionPlan;
  if (plan.contractFingerprint !== row.fingerprint) {
    throw new StudioError("REQUIRES_REQUALIFICATION", "Plan ≠ fingerprint tentative");
  }

  // Re-resolve workspace — refuse if confinement broken since prepare.
  const workspace = resolveCursorWorkspace({
    pilotId: input.pilotId,
    projectId: input.projectId,
    workspaceKey: plan.workspaceKey ?? "default",
    ensureDir: true,
  });
  if (workspace.workspaceCwd !== plan.workspaceCwd) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Workspace résolu ≠ plan préparé — nouvel acte requis",
      { exposeMessage: true },
    );
  }

  const contract = (
    await db
      .select()
      .from(technicalContracts)
      .where(eq(technicalContracts.id, plan.contractId))
      .limit(1)
  )[0];
  if (!contract) throw new StudioError("NOT_FOUND", "Contrat disparu");
  if (contract.fingerprint !== row.fingerprint || contract.status !== "READY") {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Contrat modifié ou non READY depuis l'autorisation",
      { exposeMessage: true },
    );
  }
  // C19: dispatch effect point — obsolete mandate cannot run.
  const { assertTechnicalContractMandateApplicable: assertMandateAtDispatch } =
    await import("./mandate-applicability");
  await assertMandateAtDispatch({
    pilotId: input.pilotId,
    projectId: input.projectId,
    contractId: contract.id,
    preparationId: contract.preparationId,
  });

  const fromStatus = row.status as "AUTHORIZED" | "AMBIGUOUS";
  if (fromStatus === "AMBIGUOUS") {
    const { priorSendMayHaveOccurred } = await import("./cursor-claim");
    if (priorSendMayHaveOccurred(row.resultJson)) {
      throw new StudioError(
        "CONFLICT",
        "AMBIGUOUS avec envoi antérieur possible — pas de redispatch ; réconcilier ou conserver UNKNOWN",
        { exposeMessage: true },
      );
    }
  }
  // P0: claim + sendRequestedAt in one durable write BEFORE any external SDK call.
  // Crash between this point and SDK ⇒ priorSendMayHaveOccurred ⇒ no blind redispatch.
  const claimed = await claimCursorAttempt(row.id, fromStatus, { stampSendIntent: true });
  if (!claimed) {
    const again = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, row.id)).limit(1)
    )[0];
    if (again?.status === "DISPATCHED") {
      throw new StudioError("CONFLICT", "Claim concurrent — un seul dispatch", {
        exposeMessage: true,
      });
    }
    const { priorSendMayHaveOccurred } = await import("./cursor-claim");
    if (fromStatus === "AMBIGUOUS" && priorSendMayHaveOccurred(again?.resultJson)) {
      throw new StudioError(
        "CONFLICT",
        "Claim refusé — effet externe possible après ACK perdu ; pas de second envoi",
        { exposeMessage: true },
      );
    }
    throw new StudioError("CONFLICT", "Claim atomique échoué — pas de dispatch", {
      exposeMessage: true,
    });
  }

  const claimToken = claimed.claim.claimToken;
  const sendRequestedAt =
    claimed.sendRequestedAt ?? new Date().toISOString();

  // C20: linearization — re-assert applicability AFTER claim, BEFORE provider.
  // If mandate became obsolete between pre-check and reservation, release without effect.
  try {
    await assertMandateAtDispatch({
      pilotId: input.pilotId,
      projectId: input.projectId,
      contractId: contract.id,
      preparationId: contract.preparationId,
    });
  } catch (mandateErr) {
    const failLive: CursorLiveProjection = {
      ...live,
      sendRequestedAt,
      terminalStatus: "error",
      limits: [
        "MANDATE_OBSOLETE_AFTER_CLAIM",
        String((mandateErr as Error)?.message ?? "mandate").slice(0, 160),
      ],
    };
    await persistCursorOwnedResult({
      attemptId: row.id,
      claimToken,
      resultJson: JSON.stringify(failLive),
      status: "FAILED",
      release: true,
    });
    throw mandateErr;
  }

  let dispatched;
  try {
    const { isScriptedPhasedMode } = await import("./cursor-sdk-adapter");
    const scriptedPhased =
      plan.effectProviderMode === "SCRIPTED" && isScriptedPhasedMode();
    const liveWait =
      plan.effectProviderMode === "LIVE" &&
      (process.env.SFIA_CURSOR_LIVE_WAIT || "").trim() === "1";
    dispatched = await dispatchCursorRun({
      attemptId: row.id,
      instructionText: contract.instructionText,
      instructionFingerprint: plan.instructionFingerprint,
      workspaceCwd: plan.workspaceCwd,
      idempotencyKey: row.id,
      modelId: plan.modelId,
      /**
       * LIVE default: return after ACK — reconcile observes terminal without resend.
       * SFIA_CURSOR_LIVE_WAIT=1: block until terminal (DEV worker-style, C11).
       * SCRIPTED default: finish immediately unless SFIA_CURSOR_SCRIPTED_PHASED=1.
       */
      waitForTerminal:
        liveWait || (plan.effectProviderMode === "SCRIPTED" && !scriptedPhased),
    });
  } catch (e) {
    const failLive: CursorLiveProjection = {
      ...live,
      sendRequestedAt,
      terminalStatus: "unknown",
      limits: ["DISPATCH_SEND_FAILED", String((e as Error)?.message ?? "error").slice(0, 120)],
    };
    await persistCursorOwnedResult({
      attemptId: row.id,
      claimToken,
      resultJson: JSON.stringify(failLive),
      status: "AMBIGUOUS",
      release: true,
    });
    throw e;
  }

  const nextLive: CursorLiveProjection = {
    sendRequestedAt: dispatched.sendRequestedAt ?? sendRequestedAt,
    ackReceivedAt: dispatched.ackReceivedAt,
    runObservedAt: dispatched.runObservedAt,
    agentId: dispatched.agentId,
    runId: dispatched.runId,
    lastActivitySummary: dispatched.lastActivitySummary,
    terminalStatus: dispatched.terminalStatus,
    reportStatus: "EXPECTED",
    reportMarkdown: dispatched.resultText ?? null,
    limits: dispatched.limits,
  };

  const terminal =
    dispatched.terminalStatus === "finished" ||
    dispatched.terminalStatus === "error" ||
    dispatched.terminalStatus === "cancelled";

  await persistCursorOwnedResult({
    attemptId: row.id,
    claimToken,
    resultJson: JSON.stringify(nextLive),
    status: terminal ? "COMPLETED" : "DISPATCHED",
    release: terminal,
  });

  // C13 — durable observation independent of browser/HTTP when LIVE ACK returns early.
  // Observation only (reconcile); never a second send.
  if (
    !terminal &&
    plan.effectProviderMode === "LIVE" &&
    nextLive.runId
  ) {
    try {
      const { ensureCursorLiveSupervisor } = await import(
        "./cursor-live-supervisor"
      );
      ensureCursorLiveSupervisor({
        pilotId: input.pilotId,
        projectId: input.projectId,
        attemptId: row.id,
      });
    } catch {
      /* supervisor start must not fail dispatch ACK */
    }
  }

  // C21 — if send already terminal (SCRIPTED finish / LIVE wait), collect autonomously.
  if (terminal) {
    try {
      const { runAutonomousRestitutionAfterTerminal } = await import(
        "./cursor-autonomous-restitution"
      );
      await runAutonomousRestitutionAfterTerminal({
        pilotId: input.pilotId,
        projectId: input.projectId,
        attemptId: row.id,
        attachNoraCognitive:
          (process.env.SFIA_AUTONOMOUS_NORA_AVIS || "").trim() === "1",
      });
    } catch {
      /* restitution must not fail dispatch ACK path */
    }
  }

  return {
    attemptId: row.id,
    status: terminal ? ("COMPLETED" as const) : ("DISPATCHED" as const),
    idempotent: false as const,
    live: nextLive,
    scriptedReportMarkdown: dispatched.resultText,
    limits: dispatched.limits,
    claimToken,
  };
}

export async function requestStopCursorExecution(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
}) {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, input.attemptId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) throw new StudioError("NOT_FOUND", "Tentative introuvable");
  const live = parseLive(row.resultJson);
  const plan = JSON.parse(row.planJson) as CursorExecutionPlan;
  const stop = await stopCursorRun({
    attemptId: row.id,
    agentId: live.agentId ?? null,
    runId: live.runId ?? null,
    workspaceCwd: plan.workspaceCwd,
    mode: plan.effectProviderMode,
  });
  const nextLive: CursorLiveProjection = {
    ...live,
    stopRequestedAt: stop.stopRequestedAt,
    stopObservedAt: stop.stopObservedAt,
    terminalStatus: stop.stopObservedAt
      ? stop.terminalStatus ?? live.terminalStatus
      : live.terminalStatus ?? "unknown",
    limits: [
      ...(live.limits ?? []),
      ...stop.limits,
      stop.stopObservedAt ? "STOP_OBSERVED" : "STOP_REQUESTED_NOT_CONFIRMED",
    ],
  };
  // STOP requested ≠ STOP observed. If uncertain after possible effect → keep
  // DISPATCHED/AMBIGUOUS; never invent cancelled without observation.
  let nextStatus = row.status;
  if (stop.stopObservedAt && stop.terminalStatus === "cancelled") {
    nextStatus = "COMPLETED";
  } else if (
    !stop.stopObservedAt &&
    (live.agentId || live.runId || live.sendRequestedAt) &&
    row.status === "DISPATCHED"
  ) {
    nextLive.limits = [
      ...(nextLive.limits ?? []),
      "STOP_UNCERTAIN_AFTER_POSSIBLE_EFFECT — conserver DISPATCHED, pas de succès inventé",
    ];
  }
  await db
    .update(effectAttempts)
    .set({
      resultJson: JSON.stringify(nextLive),
      status: nextStatus,
      updatedAt: new Date(),
    })
    .where(eq(effectAttempts.id, row.id));
  return {
    attemptId: row.id,
    status: nextStatus,
    live: nextLive,
    limits: nextLive.limits ?? [],
    stopRequested: true as const,
    stopObserved: Boolean(stop.stopObservedAt),
  };
}

export async function reconcileCursorExecution(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
}) {
  try {
    const { ensureLiveSupervisorsResumedOnce } = await import(
      "./cursor-live-supervisor"
    );
    await ensureLiveSupervisorsResumedOnce();
  } catch {
    /* resume must not block reconcile */
  }

  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, input.attemptId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) throw new StudioError("NOT_FOUND", "Tentative introuvable");
  const live = parseLive(row.resultJson);
  const claim = readClaim(row.resultJson);
  const limits = [...(live.limits ?? [])];
  const plan = JSON.parse(row.planJson) as CursorExecutionPlan;

  // Re-attach durable observer only for LIVE DISPATCHED with known run handle.
  if (
    row.status === "DISPATCHED" &&
    plan.effectProviderMode === "LIVE" &&
    live.runId
  ) {
    try {
      const { ensureCursorLiveSupervisor } = await import(
        "./cursor-live-supervisor"
      );
      ensureCursorLiveSupervisor({
        pilotId: input.pilotId,
        projectId: input.projectId,
        attemptId: input.attemptId,
      });
    } catch {
      /* ensure must not block reconcile */
    }
  }

  // SCRIPTED phased: advance in-memory run → COMPLETED without a second send.
  if (
    row.status === "DISPATCHED" &&
    plan.effectProviderMode === "SCRIPTED" &&
    !live.terminalStatus
  ) {
    const { advanceScriptedRunToFinished } = await import("./cursor-sdk-adapter");
    const advanced = advanceScriptedRunToFinished(row.id);
    if (advanced) {
      const nextLive: CursorLiveProjection = {
        ...live,
        agentId: advanced.agentId,
        runId: advanced.runId,
        terminalStatus: "finished",
        lastActivitySummary: advanced.lastActivitySummary,
        reportStatus: "RECEIVED",
        limits: [
          ...limits,
          "SCRIPTED_MODE",
          "SCRIPTED_PHASED_RECONCILED",
          "NO_REAL_SIDE_EFFECT",
        ],
      };
      if (claim && isClaimActive(claim)) {
        await persistCursorOwnedResult({
          attemptId: row.id,
          claimToken: claim.claimToken,
          resultJson: JSON.stringify({
            ...nextLive,
            reportMarkdown: advanced.resultText,
          }),
          status: "COMPLETED",
          release: true,
        });
      } else {
        await db
          .update(effectAttempts)
          .set({
            status: "COMPLETED",
            resultJson: JSON.stringify({
              ...nextLive,
              reportMarkdown: advanced.resultText,
            }),
            updatedAt: new Date(),
          })
          .where(eq(effectAttempts.id, row.id));
      }
      // C21 — autonomous restitution (handoff→D8→Nora) without manual intermediate POSTs.
      try {
        const { runAutonomousRestitutionAfterTerminal } = await import(
          "./cursor-autonomous-restitution"
        );
        await runAutonomousRestitutionAfterTerminal({
          pilotId: input.pilotId,
          projectId: input.projectId,
          attemptId: row.id,
          attachNoraCognitive:
            (process.env.SFIA_AUTONOMOUS_NORA_AVIS || "").trim() === "1",
        });
      } catch {
        /* restitution must not break reconcile; supervisor will retry */
      }
      return {
        attemptId: row.id,
        status: "COMPLETED" as const,
        live: nextLive,
        limits: nextLive.limits ?? [],
        scriptedReportMarkdown: advanced.resultText,
      };
    }
  }

  // LIVE: observe existing run — never a second send.
  // "unknown" from a prior failed observe is NOT terminal — re-observe.
  const liveNeedsObserve =
    !live.terminalStatus || live.terminalStatus === "unknown";
  if (
    row.status === "DISPATCHED" &&
    plan.effectProviderMode === "LIVE" &&
    liveNeedsObserve &&
    live.runId
  ) {
    const { observeLiveCursorRun } = await import("./cursor-sdk-adapter");
    const observed = await observeLiveCursorRun({
      runId: live.runId,
      agentId: live.agentId ?? null,
      workspaceCwd: plan.workspaceCwd,
    });
    const nextLive: CursorLiveProjection = {
      ...live,
      terminalStatus: observed.terminalStatus ?? live.terminalStatus,
      lastActivitySummary:
        observed.lastActivitySummary ?? live.lastActivitySummary,
      reportStatus:
        observed.terminalStatus === "finished" ? "EXPECTED" : live.reportStatus,
      limits: [...new Set([...limits, ...(observed.limits ?? [])])],
    };
    const terminal =
      nextLive.terminalStatus === "finished" ||
      nextLive.terminalStatus === "error" ||
      nextLive.terminalStatus === "cancelled";
    if (terminal) {
      const payload = {
        ...nextLive,
        ...(observed.resultText
          ? { reportMarkdown: observed.resultText }
          : {}),
      };
      if (claim && isClaimActive(claim)) {
        await persistCursorOwnedResult({
          attemptId: row.id,
          claimToken: claim.claimToken,
          resultJson: JSON.stringify(payload),
          status: "COMPLETED",
          release: true,
        });
      } else {
        await db
          .update(effectAttempts)
          .set({
            status: "COMPLETED",
            resultJson: JSON.stringify(payload),
            updatedAt: new Date(),
          })
          .where(
            and(
              eq(effectAttempts.id, row.id),
              eq(effectAttempts.status, "DISPATCHED"),
            ),
          );
      }
      // C21 — autonomous restitution after LIVE terminal.
      try {
        const { runAutonomousRestitutionAfterTerminal } = await import(
          "./cursor-autonomous-restitution"
        );
        await runAutonomousRestitutionAfterTerminal({
          pilotId: input.pilotId,
          projectId: input.projectId,
          attemptId: row.id,
          attachNoraCognitive:
            (process.env.SFIA_AUTONOMOUS_NORA_AVIS || "").trim() === "1",
        });
      } catch {
        /* restitution must not break reconcile */
      }
      return {
        attemptId: row.id,
        status: "COMPLETED" as const,
        live: nextLive,
        limits: nextLive.limits ?? [],
        scriptedReportMarkdown: observed.resultText,
      };
    }
    // Non-terminal observation — persist activity, stay DISPATCHED.
    await db
      .update(effectAttempts)
      .set({
        resultJson: JSON.stringify(nextLive),
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(effectAttempts.id, row.id),
          eq(effectAttempts.status, "DISPATCHED"),
        ),
      );
    return {
      attemptId: row.id,
      status: "DISPATCHED" as const,
      live: nextLive,
      limits: nextLive.limits ?? [],
    };
  }

  if (row.status === "DISPATCHED" && !isClaimActive(claim)) {
    if (!live.runId && !live.agentId) {
      limits.push("ACK_OR_OWNERSHIP_LOST — état UNKNOWN, pas de redispatch aveugle");
      const nextLive: CursorLiveProjection = {
        ...live,
        terminalStatus: live.terminalStatus ?? "unknown",
        limits,
      };
      await db
        .update(effectAttempts)
        .set({
          status: "AMBIGUOUS",
          resultJson: JSON.stringify(nextLive),
          updatedAt: new Date(),
        })
        .where(and(eq(effectAttempts.id, row.id), eq(effectAttempts.status, "DISPATCHED")));
      return { attemptId: row.id, status: "AMBIGUOUS" as const, live: nextLive, limits };
    }
    limits.push("LEASE_INACTIVE_WITH_RUN_IDS — conserver DISPATCHED/UNKNOWN, pas de second send");
    return { attemptId: row.id, status: row.status, live, limits };
  }

  return { attemptId: row.id, status: row.status, live, limits };
}

export async function getCursorAttempt(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
}) {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, input.attemptId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) throw new StudioError("NOT_FOUND", "Tentative introuvable");
  return {
    attemptId: row.id,
    kind: row.kind,
    status: row.status,
    fingerprint: row.fingerprint,
    decisionId: row.decisionId,
    correlationKey: row.correlationKey,
    plan: JSON.parse(row.planJson) as CursorExecutionPlan,
    live: parseLive(row.resultJson),
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

export async function listCursorAttempts(input: {
  pilotId: string;
  projectId: string;
}) {
  await assertProject(input.pilotId, input.projectId);
  const rows = await db
    .select()
    .from(effectAttempts)
    .where(
      and(
        eq(effectAttempts.pilotId, input.pilotId),
        eq(effectAttempts.projectId, input.projectId),
        eq(effectAttempts.kind, "CURSOR_EXECUTION"),
      ),
    );
  return rows.map((row) => ({
    attemptId: row.id,
    status: row.status,
    fingerprint: row.fingerprint,
    correlationKey: row.correlationKey,
    decisionId: row.decisionId,
    plan: JSON.parse(row.planJson) as CursorExecutionPlan,
    live: parseLive(row.resultJson),
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  }));
}
