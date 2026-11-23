import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, projects, technicalContracts } from "@/db/schema";
import { insertHumanDecision } from "@/domains/decisions/service";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import { assertCurrentCursorAuthority } from "./cursor-authority";
import {
  dispatchCursorRun,
  resolveCursorAdapterMode,
  stopCursorRun,
} from "./cursor-sdk-adapter";
import {
  extendClaim,
  isClaimActive,
  mintClaim,
  readClaim,
  releaseClaim,
  writeClaimInto,
} from "./claim-lease";
import { instructionFingerprint } from "./technical-contract-fingerprint";
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

export async function prepareCursorExecution(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
  correlationKey: string;
  workspaceCwd: string;
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
  if (contract.status !== "READY" && contract.status !== "AUTHORIZED") {
    throw new StudioError("INVALID_REQUEST", `Contrat non prêt: ${contract.status}`);
  }

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
    workspaceCwd: input.workspaceCwd,
    effectProviderMode: mode,
    gitScope: contract.gitScopeJson
      ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
      : null,
    mcpRequired: input.mcpRequired ?? [],
  };
  const fingerprint = contract.fingerprint;

  if (prior) {
    if (prior.kind !== "CURSOR_EXECUTION") {
      throw new StudioError("CONFLICT", "correlationKey déjà utilisé par un autre kind");
    }
    if (prior.fingerprint !== fingerprint) {
      throw new StudioError("CONFLICT", "PAYLOAD_MISMATCH pour correlationKey", {
        exposeMessage: true,
      });
    }
    return {
      attemptId: prior.id,
      status: prior.status,
      idempotent: true as const,
      fingerprint: prior.fingerprint,
      plan: JSON.parse(prior.planJson) as CursorExecutionPlan,
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
  const existingClaim = readClaim(row.resultJson);
  if (row.status === "DISPATCHED" || row.status === "COMPLETED") {
    if (live.agentId || live.runId) {
      return {
        attemptId: row.id,
        status: row.status,
        idempotent: true as const,
        live,
        limits: ["NO_BLIND_REDISPATCH", ...(live.limits ?? [])],
      };
    }
  }

  if (isClaimActive(existingClaim)) {
    throw new StudioError("CONFLICT", "Claim actif — pas de second dispatch", {
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
      ? JSON.parse(row.effectConditions).fingerprint
      : null,
  });

  const plan = JSON.parse(row.planJson) as CursorExecutionPlan;
  if (plan.contractFingerprint !== row.fingerprint) {
    throw new StudioError("REQUIRES_REQUALIFICATION", "Plan ≠ fingerprint tentative");
  }

  const contract = (
    await db
      .select()
      .from(technicalContracts)
      .where(eq(technicalContracts.id, plan.contractId))
      .limit(1)
  )[0];
  if (!contract) throw new StudioError("NOT_FOUND", "Contrat disparu");
  if (contract.fingerprint !== row.fingerprint) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Contrat modifié depuis l'autorisation — nouvel acte requis",
      { exposeMessage: true },
    );
  }

  const claim = mintClaim(existingClaim);
  const preLive: CursorLiveProjection = {
    ...live,
    sendRequestedAt: new Date().toISOString(),
    claim,
    reportStatus: "EXPECTED",
    limits: ["DISPATCH_CLAIMED"],
  };
  await db
    .update(effectAttempts)
    .set({
      status: "DISPATCHED",
      resultJson: writeClaimInto(JSON.stringify(preLive), claim),
      updatedAt: new Date(),
    })
    .where(eq(effectAttempts.id, row.id));

  const dispatched = await dispatchCursorRun({
    attemptId: row.id,
    instructionText: contract.instructionText,
    instructionFingerprint: plan.instructionFingerprint,
    workspaceCwd: plan.workspaceCwd,
    idempotencyKey: row.id,
  });

  const nextClaim = extendClaim(claim);
  const nextLive: CursorLiveProjection = {
    sendRequestedAt: dispatched.sendRequestedAt,
    ackReceivedAt: dispatched.ackReceivedAt,
    runObservedAt: dispatched.runObservedAt,
    agentId: dispatched.agentId,
    runId: dispatched.runId,
    lastActivitySummary: dispatched.lastActivitySummary,
    terminalStatus: dispatched.terminalStatus,
    reportStatus: dispatched.resultText ? "EXPECTED" : "EXPECTED",
    limits: dispatched.limits,
    claim: nextClaim,
  };

  const terminal =
    dispatched.terminalStatus === "finished" ||
    dispatched.terminalStatus === "error" ||
    dispatched.terminalStatus === "cancelled";

  await db
    .update(effectAttempts)
    .set({
      status: terminal ? "COMPLETED" : "DISPATCHED",
      resultJson: writeClaimInto(
        JSON.stringify(nextLive),
        terminal ? releaseClaim(nextClaim) : nextClaim,
      ),
      updatedAt: new Date(),
    })
    .where(eq(effectAttempts.id, row.id));

  return {
    attemptId: row.id,
    status: terminal ? ("COMPLETED" as const) : ("DISPATCHED" as const),
    idempotent: false as const,
    live: nextLive,
    scriptedReportMarkdown: dispatched.resultText,
    limits: dispatched.limits,
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
    terminalStatus: stop.terminalStatus ?? live.terminalStatus,
    limits: [...(live.limits ?? []), ...stop.limits],
  };
  await db
    .update(effectAttempts)
    .set({
      resultJson: JSON.stringify(nextLive),
      status: stop.stopObservedAt ? "COMPLETED" : row.status,
      updatedAt: new Date(),
    })
    .where(eq(effectAttempts.id, row.id));
  return { attemptId: row.id, live: nextLive, limits: stop.limits };
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

  if (row.status === "DISPATCHED" && !isClaimActive(claim) && !live.runId && !live.agentId) {
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
      .where(eq(effectAttempts.id, row.id));
    return { attemptId: row.id, status: "AMBIGUOUS" as const, live: nextLive, limits };
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
