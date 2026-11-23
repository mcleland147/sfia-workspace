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
    gitScope: contract.gitScopeJson
      ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
      : null,
    mcpRequired: input.mcpRequired ?? [],
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
    throw new StudioError("INVALID_REQUEST", "Confirmation refusée — aucun effet", {
      exposeMessage: true,
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

  const fromStatus = row.status as "AUTHORIZED" | "AMBIGUOUS";
  const claimed = await claimCursorAttempt(row.id, fromStatus);
  if (!claimed) {
    const again = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, row.id)).limit(1)
    )[0];
    if (again?.status === "DISPATCHED") {
      throw new StudioError("CONFLICT", "Claim concurrent — un seul dispatch", {
        exposeMessage: true,
      });
    }
    throw new StudioError("CONFLICT", "Claim atomique échoué — pas de dispatch", {
      exposeMessage: true,
    });
  }

  const claimToken = claimed.claim.claimToken;
  const sendRequestedAt = new Date().toISOString();

  let dispatched;
  try {
    dispatched = await dispatchCursorRun({
      attemptId: row.id,
      instructionText: contract.instructionText,
      instructionFingerprint: plan.instructionFingerprint,
      workspaceCwd: plan.workspaceCwd,
      idempotencyKey: row.id,
      /** LIVE: return after ACK/first observation — do not block HTTP on full wait. */
      waitForTerminal: plan.effectProviderMode === "SCRIPTED",
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
    sendRequestedAt: dispatched.sendRequestedAt,
    ackReceivedAt: dispatched.ackReceivedAt,
    runObservedAt: dispatched.runObservedAt,
    agentId: dispatched.agentId,
    runId: dispatched.runId,
    lastActivitySummary: dispatched.lastActivitySummary,
    terminalStatus: dispatched.terminalStatus,
    reportStatus: "EXPECTED",
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
  // STOP requested ≠ necessarily terminal — keep DISPATCHED if not observed.
  await db
    .update(effectAttempts)
    .set({
      resultJson: JSON.stringify(nextLive),
      status: stop.stopObservedAt && stop.terminalStatus === "cancelled" ? "COMPLETED" : row.status,
      updatedAt: new Date(),
    })
    .where(eq(effectAttempts.id, row.id));
  return { attemptId: row.id, live: nextLive, limits: nextLive.limits ?? [] };
}

export async function reconcileCursorExecution(input: {
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
  const claim = readClaim(row.resultJson);
  const limits = [...(live.limits ?? [])];

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
