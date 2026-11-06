import { and, asc, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommandEffects,
  businessCommands,
  conversations,
  governanceRestrictions,
  humanDecisions,
  messages,
  methodApplications,
  projectCycles,
  projectPilotageState,
  projects,
  trajectoryRevisions,
} from "@/db/schema";
import { RESTRICTION_TARGETS, type RestrictionTargetKind } from "@/domains/decisions/types";
import { methodUsageRestricted } from "@/domains/decisions/authority";
import {
  insertHumanDecision,
  insertRestriction,
  liftRestrictionRow,
  markDecisionState,
} from "@/domains/decisions/service";
import { isCycleType, resolveForOpen, resolvePinnedCki, type CycleType } from "@/domains/pilotage/cki-resolve";
import {
  buildSourceActionKey,
  runBusinessCommand,
  toCommandResult,
  type ClassifyResult,
  type ClientEnvelope,
  type DbTx,
  type MutateResult,
} from "@/domains/pilotage/command-runner";
import { qualifyPilotageIntent, type IntentQualification } from "@/domains/pilotage/intent";
import {
  PILOTAGE_OPERATIONS,
  SOURCE_KINDS,
  type ClassifiedCommand,
  type PilotageOperation,
  type PilotageProjection,
  type PilotageRequestBody,
  type SourceKind,
  type TrajectoryView,
} from "@/domains/pilotage/types";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

/** Test-only fault between CLOSE and OPEN. A throw rolls back both effects. */
export const pilotageFault: { afterCloseBeforeOpen: null | (() => void) } = {
  afterCloseBeforeOpen: null,
};

type ClearIntent = Extract<IntentQualification, { clarity: "CLEAR" }>;

function rejected(reasonCode: string, reason: string): MutateResult {
  return { kind: "REJECTED", reasonCode, reason, persist: true };
}

async function bumpRevision(
  tx: DbTx,
  projectId: string,
  pointer?: { id: string | null },
): Promise<number> {
  const row = (
    await tx
      .select()
      .from(projectPilotageState)
      .where(eq(projectPilotageState.projectId, projectId))
      .limit(1)
  )[0];
  const now = new Date();
  if (!row) {
    await tx.insert(projectPilotageState).values({
      projectId,
      revision: 1,
      currentTrajectoryRevisionId: pointer ? pointer.id : null,
      updatedAt: now,
    });
    return 1;
  }
  const revision = row.revision + 1;
  await tx
    .update(projectPilotageState)
    .set({
      revision,
      updatedAt: now,
      ...(pointer ? { currentTrajectoryRevisionId: pointer.id } : {}),
    })
    .where(eq(projectPilotageState.projectId, projectId));
  return revision;
}

async function nextTrajectoryNumber(tx: DbTx, projectId: string): Promise<number> {
  const last = (
    await tx
      .select({ n: trajectoryRevisions.revisionNumber })
      .from(trajectoryRevisions)
      .where(eq(trajectoryRevisions.projectId, projectId))
      .orderBy(desc(trajectoryRevisions.revisionNumber))
      .limit(1)
  )[0];
  return (last?.n ?? 0) + 1;
}

async function activeCycle(tx: DbTx, projectId: string) {
  return (
    await tx
      .select()
      .from(projectCycles)
      .where(and(eq(projectCycles.projectId, projectId), eq(projectCycles.status, "ACTIVE")))
      .limit(1)
  )[0];
}

async function currentMethod(tx: DbTx, projectId: string) {
  return (
    await tx
      .select()
      .from(methodApplications)
      .where(and(eq(methodApplications.projectId, projectId), eq(methodApplications.isCurrent, true)))
      .limit(1)
  )[0];
}

function trajectoryView(row: {
  id: string;
  revisionNumber: number;
  status: string;
  orientation: string;
  decisionId: string | null;
} | undefined): TrajectoryView {
  if (!row) return null;
  return {
    id: row.id,
    revisionNumber: row.revisionNumber,
    status: row.status,
    orientation: row.orientation,
    decisionId: row.decisionId,
  };
}

export async function getPilotageProjection(pilotId: string, projectId: string): Promise<PilotageProjection> {
  const project = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");

  const state = (
    await db
      .select()
      .from(projectPilotageState)
      .where(eq(projectPilotageState.projectId, projectId))
      .limit(1)
  )[0];

  const retained = (
    await db
      .select()
      .from(trajectoryRevisions)
      .where(and(eq(trajectoryRevisions.projectId, projectId), eq(trajectoryRevisions.status, "RETAINED")))
      .orderBy(desc(trajectoryRevisions.revisionNumber))
      .limit(1)
  )[0];
  const proposed = (
    await db
      .select()
      .from(trajectoryRevisions)
      .where(and(eq(trajectoryRevisions.projectId, projectId), eq(trajectoryRevisions.status, "PROPOSED")))
      .orderBy(desc(trajectoryRevisions.revisionNumber))
      .limit(1)
  )[0];

  const cycle = await activeCycle(db as unknown as DbTx, projectId);
  const method = await currentMethod(db as unknown as DbTx, projectId);
  const restrictions = await db
    .select()
    .from(governanceRestrictions)
    .where(and(eq(governanceRestrictions.projectId, projectId), eq(governanceRestrictions.status, "ACTIVE")));

  const usageRestricted = method
    ? methodUsageRestricted(restrictions, method.methodRef)
    : false;

  return {
    projectId,
    revision: state?.revision ?? 0,
    trajectory: {
      retained: trajectoryView(retained),
      proposed: trajectoryView(proposed),
    },
    cycle: cycle
      ? {
          id: cycle.id,
          cycleType: cycle.cycleType,
          status: cycle.status,
          objective: cycle.objective,
          revision: cycle.revision,
          cki: resolvePinnedCki({
            ckiId: cycle.ckiId,
            contentDigest: cycle.ckiContentDigest,
            pinnedVersion: cycle.ckiPinnedVersion,
            manifestRef: cycle.ckiManifestRef,
            pinOrigin: cycle.ckiPinOrigin,
          }),
        }
      : null,
    method: method
      ? {
          presence: "RETAINED",
          usageRestricted,
          usageNote: usageRestricted ? "Méthode retenue mais pas pleinement applicable" : null,
          methodRef: method.methodRef,
          methodVersion: method.methodVersion,
          decisionId: method.decisionId,
          applicationId: method.id,
          scope: method.scope,
        }
      : { presence: "ABSENT", usageRestricted: false },
    restrictions: restrictions.map((r) => ({
      id: r.id,
      targetKind: r.targetKind,
      targetRef: r.targetRef,
      status: r.status,
    })),
  };
}

export async function reconcileCommand(pilotId: string, projectId: string, commandId: string) {
  const project = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");
  const cmd = (
    await db
      .select()
      .from(businessCommands)
      .where(
        and(
          eq(businessCommands.id, commandId),
          eq(businessCommands.projectId, projectId),
          eq(businessCommands.actorPilotId, pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!cmd) throw new StudioError("NOT_FOUND", "Commande introuvable");
  const effects = await db
    .select()
    .from(businessCommandEffects)
    .where(eq(businessCommandEffects.commandId, cmd.id))
    .orderBy(asc(businessCommandEffects.ordinal));
  return toCommandResult(cmd, effects, "replay");
}

export async function reconcileCommandByClientKey(
  pilotId: string,
  projectId: string,
  clientCommandKey: string,
) {
  const project = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");
  const key = clientCommandKey.trim();
  if (!key) throw new StudioError("NOT_FOUND", "Commande introuvable");
  const cmd = (
    await db
      .select()
      .from(businessCommands)
      .where(
        and(
          eq(businessCommands.projectId, projectId),
          eq(businessCommands.actorPilotId, pilotId),
          eq(businessCommands.clientCommandKey, key),
        ),
      )
      .limit(1)
  )[0];
  if (!cmd) throw new StudioError("NOT_FOUND", "Commande introuvable");
  const effects = await db
    .select()
    .from(businessCommandEffects)
    .where(eq(businessCommandEffects.commandId, cmd.id))
    .orderBy(asc(businessCommandEffects.ordinal));
  return toCommandResult(cmd, effects, "replay");
}

/** Statuses that may authorize a USER_MESSAGE GO. Others stay non-authoritative. */
const USER_MESSAGE_GO_STATUSES = new Set(["COMPLETE"]);

async function loadUserMessage(tx: DbTx, projectId: string, pilotId: string, messageId: string) {
  return (
    await tx
      .select({
        id: messages.id,
        role: messages.role,
        status: messages.status,
        content: messages.content,
        projectId: conversations.projectId,
        ownerPilotId: conversations.ownerPilotId,
      })
      .from(messages)
      .innerJoin(conversations, eq(messages.conversationId, conversations.id))
      .where(eq(messages.id, messageId))
      .limit(1)
  )[0];
}

function userMessageAuthorizes(message: {
  role: string;
  status: string;
  projectId: string | null;
  ownerPilotId: string;
}, projectId: string, pilotId: string): boolean {
  return (
    message.role.trim().toUpperCase() === "USER" &&
    USER_MESSAGE_GO_STATUSES.has(message.status) &&
    message.projectId === projectId &&
    message.ownerPilotId === pilotId
  );
}

function fromClearIntent(
  sourceKind: SourceKind,
  sourceRef: string,
  qualified: ClearIntent,
  body: PilotageRequestBody,
): ClassifyResult {
  const cycleType =
    qualified.cycleType ?? (body.cycleType && isCycleType(body.cycleType) ? body.cycleType : null);
  const command: ClassifiedCommand = {
    operation: qualified.operation,
    sourceKind,
    sourceRef,
    objective: (body.objective ?? qualified.objective ?? "").trim() || (cycleType ? `Cycle ${cycleType}` : ""),
    cycleType,
    cycleId: body.cycleId ?? null,
    toCycleType: qualified.toCycleType ?? null,
    orientation: (body.orientation ?? "").trim(),
    trajectoryRevisionId: body.trajectoryRevisionId ?? null,
    methodRef: (qualified.methodRef ?? body.methodRef ?? "").trim(),
    methodVersion: (qualified.methodVersion || body.methodVersion || "").trim(),
    decisionId: body.decisionId ?? null,
    restrictionId: body.restrictionId ?? null,
    targetKind: body.targetKind ?? "",
    targetRef: (body.targetRef ?? "*").trim() || "*",
    statement: (body.statement ?? qualified.objective ?? "").trim().slice(0, 500),
    balanceNote: (body.balanceNote ?? "").trim(),
    actInstanceId: (body.actInstanceId ?? "").trim(),
    objectRef: (body.objectRef ?? "").trim(),
    sourceActionKey: "",
  };
  if (
    (command.operation === "CHOOSE_METHOD" || command.operation === "REPLACE_METHOD") &&
    (!command.methodRef || !command.methodVersion)
  ) {
    return {
      ok: false,
      reasonCode: "INVALID",
      reason: "Version de méthode requise",
      sourceActionKey: buildSourceActionKey(command),
    };
  }
  if ((command.operation === "OPEN_CYCLE" || command.operation === "TRANSITION_CYCLE") && !command.cycleType && command.operation === "OPEN_CYCLE") {
    return { ok: false, reasonCode: "INVALID", reason: "Type de cycle requis", sourceActionKey: "REJECT|INVALID|open" };
  }
  if (command.operation === "TRANSITION_CYCLE" && (!command.cycleType || !command.toCycleType)) {
    return { ok: false, reasonCode: "INVALID", reason: "Transition incomplète", sourceActionKey: "REJECT|INVALID|transition" };
  }
  command.sourceActionKey = buildSourceActionKey(command);
  return { ok: true, command };
}

async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<ClassifyResult> {
  const body = input.body;
  const sourceKind = body.sourceKind ?? "";
  const sourceRef = body.sourceRef?.trim() ?? "";
  if (!(SOURCE_KINDS as readonly string[]).includes(sourceKind)) {
    return {
      ok: false,
      reasonCode: "SOURCE",
      reason: "Source non autorisante",
      sourceActionKey: `REJECT|SOURCE|${sourceKind}`,
    };
  }

  if (sourceKind === "USER_MESSAGE") {
    const message = await loadUserMessage(tx, input.projectId, input.pilotId, sourceRef);
    if (!message || !userMessageAuthorizes(message, input.projectId, input.pilotId)) {
      return {
        ok: false,
        reasonCode: "SOURCE",
        reason: "Message utilisateur non vérifié pour ce projet",
        sourceActionKey: `REJECT|SOURCE|${sourceRef}`,
      };
    }
    const utterance = (body.utterance ?? "").trim();
    if (utterance && utterance !== message.content.trim()) {
      return {
        ok: false,
        reasonCode: "SOURCE",
        reason: "L'énoncé ne correspond pas au message source",
        sourceActionKey: "REJECT|SOURCE|mismatch",
      };
    }
    const qualified = qualifyPilotageIntent(utterance || message.content);
    if (qualified.clarity !== "CLEAR") {
      const reasonCode = qualified.clarity === "AMBIGUOUS" ? "AMBIGUOUS" : "INVALID";
      return {
        ok: false,
        reasonCode,
        reason: qualified.reason,
        sourceActionKey: `REJECT|${reasonCode}`,
      };
    }
    if (body.operation && body.operation !== qualified.operation) {
      return {
        ok: false,
        reasonCode: "AMBIGUOUS",
        reason: "L'opération ne correspond pas à l'énoncé",
        sourceActionKey: `REJECT|MISMATCH|${body.operation}`,
      };
    }
    return fromClearIntent(sourceKind, sourceRef, qualified, body);
  }

  if (sourceKind === "COGNITIVE_PROPOSAL" && body.operation !== "PROPOSE_TRAJECTORY") {
    return {
      ok: false,
      reasonCode: "SOURCE",
      reason: "Une proposition cognitive n'est pas un GO",
      sourceActionKey: "REJECT|SOURCE|cognitive",
    };
  }

  const explicitNatural = classifyExplicitInteraction(body);
  if (explicitNatural) return explicitNatural;

  if (!body.operation || !(PILOTAGE_OPERATIONS as readonly string[]).includes(body.operation)) {
    return {
      ok: false,
      reasonCode: "INVALID",
      reason: "Opération inconnue",
      sourceActionKey: `REJECT|INVALID|${body.operation ?? ""}`,
    };
  }

  const operation = body.operation as PilotageOperation;
  const cycleType = body.cycleType ? (isCycleType(body.cycleType) ? body.cycleType : null) : null;
  if (body.cycleType && !cycleType) {
    return { ok: false, reasonCode: "INVALID", reason: "Type de cycle inconnu", sourceActionKey: "REJECT|INVALID|cycle" };
  }
  const toCycleType = body.toCycleType ? (isCycleType(body.toCycleType) ? body.toCycleType : null) : null;
  if (body.toCycleType && !toCycleType) {
    return { ok: false, reasonCode: "INVALID", reason: "Type de cycle cible inconnu", sourceActionKey: "REJECT|INVALID|target-cycle" };
  }
  if (operation === "OPEN_CYCLE" && !cycleType) {
    return { ok: false, reasonCode: "INVALID", reason: "Type de cycle requis", sourceActionKey: "REJECT|INVALID|open" };
  }
  if (operation === "TRANSITION_CYCLE" && !toCycleType) {
    return { ok: false, reasonCode: "INVALID", reason: "Cycle cible requis", sourceActionKey: "REJECT|INVALID|transition" };
  }
  if ((operation === "CHOOSE_METHOD" || operation === "REPLACE_METHOD") && (!body.methodRef?.trim() || !body.methodVersion?.trim())) {
    return {
      ok: false,
      reasonCode: "INVALID",
      reason: "Référence et version de méthode requises",
      sourceActionKey: buildSourceActionKey({
        operation,
        methodRef: body.methodRef,
        methodVersion: body.methodVersion,
      }),
    };
  }
  if (operation === "PROPOSE_TRAJECTORY" && !body.orientation?.trim()) {
    return { ok: false, reasonCode: "INVALID", reason: "Orientation requise", sourceActionKey: "REJECT|INVALID|propose" };
  }
  if (operation === "RETAIN_TRAJECTORY" && !body.trajectoryRevisionId && !body.orientation?.trim()) {
    return { ok: false, reasonCode: "INVALID", reason: "Trajectoire à retenir requise", sourceActionKey: "REJECT|INVALID|retain" };
  }
  if (operation === "REVOKE_DECISION" && !body.decisionId) {
    return { ok: false, reasonCode: "INVALID", reason: "Décision cible requise", sourceActionKey: "REJECT|INVALID|revoke" };
  }
  if (operation === "APPLY_RESTRICTION") {
    if (!body.targetKind || !(RESTRICTION_TARGETS as readonly string[]).includes(body.targetKind)) {
      return { ok: false, reasonCode: "INVALID", reason: "Cible de restriction inconnue", sourceActionKey: "REJECT|INVALID|restrict" };
    }
  }
  if (operation === "LIFT_RESTRICTION" && !body.restrictionId) {
    return { ok: false, reasonCode: "INVALID", reason: "Restriction à lever requise", sourceActionKey: "REJECT|INVALID|lift" };
  }
  if (operation === "RECORD_DECISION" && !body.statement?.trim()) {
    return { ok: false, reasonCode: "INVALID", reason: "Énoncé de décision requis", sourceActionKey: "REJECT|INVALID|record" };
  }
  if (operation === "REVISE_DECISION" && (!body.decisionId || !body.statement?.trim())) {
    return { ok: false, reasonCode: "INVALID", reason: "Décision et énoncé de révision requis", sourceActionKey: "REJECT|INVALID|revise" };
  }

  const command: ClassifiedCommand = {
    operation,
    sourceKind: sourceKind as SourceKind,
    sourceRef,
    objective: (body.objective ?? "").trim() || (cycleType ? `Cycle ${cycleType}` : (toCycleType ? `Cycle ${toCycleType}` : "")),
    cycleType,
    cycleId: body.cycleId ?? null,
    toCycleType,
    orientation: (body.orientation ?? "").trim(),
    trajectoryRevisionId: body.trajectoryRevisionId ?? null,
    methodRef: (body.methodRef ?? "").trim(),
    methodVersion: (body.methodVersion ?? "").trim(),
    decisionId: body.decisionId ?? null,
    restrictionId: body.restrictionId ?? null,
    targetKind: (body.targetKind ?? "") as RestrictionTargetKind | "",
    targetRef: (body.targetRef ?? "*").trim() || "*",
    statement: (body.statement ?? body.objective ?? body.orientation ?? "").trim().slice(0, 500),
    balanceNote: (body.balanceNote ?? "").trim(),
    actInstanceId: (body.actInstanceId ?? "").trim(),
    objectRef: (body.objectRef ?? "").trim(),
    sourceActionKey: "",
  };
  command.sourceActionKey = buildSourceActionKey(command);
  return { ok: true, command };
}

async function closeMethod(tx: DbTx, applicationId: string, reason: string) {
  await tx
    .update(methodApplications)
    .set({ isCurrent: false, effectiveUntil: new Date(), closeReason: reason })
    .where(eq(methodApplications.id, applicationId));
}

async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: ClassifiedCommand): Promise<MutateResult> {
  const projectId = input.projectId;
  const pilotId = input.pilotId;
  const now = new Date();

  if (command.operation === "PROPOSE_TRAJECTORY") {
    const id = newId("trj");
    await tx.insert(trajectoryRevisions).values({
      id,
      projectId,
      revisionNumber: await nextTrajectoryNumber(tx, projectId),
      status: "PROPOSED",
      orientation: command.orientation.slice(0, 2000),
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      decisionId: null,
      createdAt: now,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId: null,
      revision,
      effects: [{ effectKind: "PROPOSE", targetRef: id }],
    };
  }

  if (command.operation === "RETAIN_TRAJECTORY") {
    let orientation = command.orientation;
    if (command.trajectoryRevisionId) {
      const prior = (
        await tx
          .select()
          .from(trajectoryRevisions)
          .where(and(eq(trajectoryRevisions.id, command.trajectoryRevisionId), eq(trajectoryRevisions.projectId, projectId)))
          .limit(1)
      )[0];
      if (!prior) return rejected("INVALID_TARGET", "Trajectoire introuvable dans ce projet");
      orientation = orientation || prior.orientation;
    }
    if (!orientation.trim()) return rejected("INVALID", "Orientation requise");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "RETAIN_TRAJECTORY",
      objectRef: command.trajectoryRevisionId ?? "",
      statement: command.statement || orientation,
    });
    await tx
      .update(trajectoryRevisions)
      .set({ status: "SUPERSEDED" })
      .where(and(eq(trajectoryRevisions.projectId, projectId), eq(trajectoryRevisions.status, "RETAINED")));
    const id = newId("trj");
    await tx.insert(trajectoryRevisions).values({
      id,
      projectId,
      revisionNumber: await nextTrajectoryNumber(tx, projectId),
      status: "RETAINED",
      orientation: orientation.slice(0, 2000),
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      decisionId,
      createdAt: now,
    });
    const revision = await bumpRevision(tx, projectId, { id });
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "RETAIN", targetRef: id }],
    };
  }

  if (command.operation === "OPEN_CYCLE") {
    if (!command.cycleType) return rejected("INVALID", "Type de cycle requis");
    if (await activeCycle(tx, projectId)) {
      return rejected("ACTIVE_CYCLE", "Un cycle est déjà actif");
    }
    const pin = resolveForOpen(command.cycleType);
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "OPEN_CYCLE",
      objectRef: command.cycleType,
      statement: command.statement || command.objective || `Ouverture ${command.cycleType}`,
    });
    const cycleId = newId("cyc");
    await tx.insert(projectCycles).values({
      id: cycleId,
      projectId,
      cycleType: command.cycleType,
      objective: (command.objective || `Cycle ${command.cycleType}`).slice(0, 2000),
      status: "ACTIVE",
      revision: 1,
      openedAt: now,
      openDecisionId: decisionId,
      ckiId: pin.ckiId,
      ckiPinnedVersion: pin.pinnedVersion,
      ckiContentDigest: pin.contentDigest,
      ckiManifestRef: pin.manifestRef,
      ckiPinOrigin: pin.pinOrigin,
      createdAt: now,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "OPEN", targetRef: cycleId, detail: { cycleType: command.cycleType, cki: pin.availability } }],
    };
  }

  if (command.operation === "CLOSE_CYCLE") {
    const active = await activeCycle(tx, projectId);
    if (!active) return rejected("NO_ACTIVE", "Aucun cycle actif");
    if (command.cycleId && command.cycleId !== active.id) return rejected("INVALID_TARGET", "Cycle cible différent du cycle actif");
    if (command.cycleType && command.cycleType !== active.cycleType) return rejected("INVALID_TARGET", "Type différent du cycle actif");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "CLOSE_CYCLE",
      objectRef: active.id,
      statement: command.statement || command.balanceNote || `Clôture ${active.cycleType}`,
    });
    const closed = await tx
      .update(projectCycles)
      .set({
        status: "CLOSED",
        closedAt: now,
        closeDecisionId: decisionId,
        balanceNote: command.balanceNote || null,
        revision: active.revision + 1,
      })
      .where(and(eq(projectCycles.id, active.id), eq(projectCycles.status, "ACTIVE")))
      .returning({ id: projectCycles.id });
    if (closed.length === 0) throw new Error("CYCLE_LOST");
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "CLOSE", targetRef: active.id }],
    };
  }

  if (command.operation === "TRANSITION_CYCLE") {
    const active = await activeCycle(tx, projectId);
    if (!active) return rejected("NO_ACTIVE", "Aucun cycle actif");
    if (!command.toCycleType) return rejected("INVALID", "Cycle cible requis");
    if (command.cycleId && command.cycleId !== active.id) return rejected("INVALID_TARGET", "Cycle source différent du cycle actif");
    if (command.cycleType && command.cycleType !== active.cycleType) return rejected("INVALID_TARGET", "Type source différent du cycle actif");
    if (command.toCycleType === active.cycleType) return rejected("INVALID", "La transition vise le même type");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "TRANSITION_CYCLE",
      objectRef: `${active.id}->${command.toCycleType}`,
      statement: command.statement || `Transition ${active.cycleType} vers ${command.toCycleType}`,
    });
    const closed = await tx
      .update(projectCycles)
      .set({
        status: "CLOSED",
        closedAt: now,
        closeDecisionId: decisionId,
        balanceNote: command.balanceNote || null,
        revision: active.revision + 1,
      })
      .where(and(eq(projectCycles.id, active.id), eq(projectCycles.status, "ACTIVE")))
      .returning({ id: projectCycles.id });
    if (closed.length === 0) throw new Error("CYCLE_LOST");
    pilotageFault.afterCloseBeforeOpen?.();
    const pin = resolveForOpen(command.toCycleType);
    const openedId = newId("cyc");
    await tx.insert(projectCycles).values({
      id: openedId,
      projectId,
      cycleType: command.toCycleType,
      objective: (command.objective || `Cycle ${command.toCycleType}`).slice(0, 2000),
      status: "ACTIVE",
      revision: 1,
      openedAt: now,
      openDecisionId: decisionId,
      ckiId: pin.ckiId,
      ckiPinnedVersion: pin.pinnedVersion,
      ckiContentDigest: pin.contentDigest,
      ckiManifestRef: pin.manifestRef,
      ckiPinOrigin: pin.pinOrigin,
      createdAt: now,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [
        { effectKind: "CLOSE", targetRef: active.id },
        { effectKind: "OPEN", targetRef: openedId, detail: { cycleType: command.toCycleType, cki: pin.availability } },
      ],
    };
  }

  if (command.operation === "CHOOSE_METHOD") {
    if (await currentMethod(tx, projectId)) return rejected("ALREADY_PRESENT", "Une méthode est déjà retenue");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "CHOOSE_METHOD",
      objectRef: `${command.methodRef}@${command.methodVersion}`,
      statement: command.statement || `Méthode ${command.methodRef} ${command.methodVersion}`,
    });
    const applicationId = newId("meth");
    await tx.insert(methodApplications).values({
      id: applicationId,
      projectId,
      methodRef: command.methodRef,
      methodVersion: command.methodVersion,
      scope: "PROJECT",
      decisionId,
      effectiveFrom: now,
      isCurrent: true,
      createdAt: now,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "CHOOSE_METHOD", targetRef: applicationId }],
    };
  }

  if (command.operation === "REPLACE_METHOD") {
    const current = await currentMethod(tx, projectId);
    if (!current) return rejected("NO_METHOD", "Aucune méthode courante à remplacer");
    await closeMethod(tx, current.id, "REPLACED");
    await markDecisionState(tx, current.decisionId, "SUPERSEDED");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "REPLACE_METHOD",
      objectRef: `${command.methodRef}@${command.methodVersion}`,
      statement: command.statement || `Remplace par ${command.methodRef} ${command.methodVersion}`,
      supersedesDecisionId: current.decisionId,
    });
    const applicationId = newId("meth");
    await tx.insert(methodApplications).values({
      id: applicationId,
      projectId,
      methodRef: command.methodRef,
      methodVersion: command.methodVersion,
      scope: "PROJECT",
      decisionId,
      effectiveFrom: now,
      isCurrent: true,
      createdAt: now,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "REPLACE_METHOD", targetRef: applicationId, detail: { closed: current.id } }],
    };
  }

  if (command.operation === "WITHDRAW_METHOD") {
    const current = await currentMethod(tx, projectId);
    if (!current) return rejected("NO_METHOD", "Aucune méthode courante");
    await closeMethod(tx, current.id, "WITHDRAWN");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "WITHDRAW_METHOD",
      objectRef: current.id,
      statement: command.statement || "Retrait de la méthode",
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "WITHDRAW_METHOD", targetRef: current.id }],
    };
  }

  if (command.operation === "REVOKE_DECISION") {
    if (!command.decisionId) return rejected("INVALID", "Décision cible requise");
    const target = (
      await tx
        .select()
        .from(humanDecisions)
        .where(and(eq(humanDecisions.id, command.decisionId), eq(humanDecisions.projectId, projectId)))
        .limit(1)
    )[0];
    if (!target) return rejected("INVALID_TARGET", "Décision introuvable dans ce projet");
    if (target.state === "REVOKED") return rejected("ALREADY_REVOKED", "Décision déjà révoquée");
    await markDecisionState(tx, target.id, "REVOKED");
    const current = await currentMethod(tx, projectId);
    const closesCurrent = current?.decisionId === target.id;
    if (closesCurrent && current) await closeMethod(tx, current.id, "REVOKED_BASE");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "REVOKE_DECISION",
      objectRef: target.id,
      statement: command.statement || "Révocation",
      revokesDecisionId: target.id,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [
        {
          effectKind: closesCurrent ? "REVOKE_BASE" : "REVOKE_DECISION",
          targetRef: target.id,
        },
      ],
    };
  }

  if (command.operation === "APPLY_RESTRICTION") {
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "APPLY_RESTRICTION",
      objectRef: `${command.targetKind}:${command.targetRef}`,
      statement: command.statement || `Restriction ${command.targetKind}`,
    });
    const restrictionId = await insertRestriction(tx, {
      projectId,
      targetKind: command.targetKind,
      targetRef: command.targetRef || "*",
      originDecisionId: decisionId,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "APPLY_RESTRICTION", targetRef: restrictionId }],
    };
  }

  if (command.operation === "LIFT_RESTRICTION") {
    if (!command.restrictionId) return rejected("INVALID", "Restriction à lever requise");
    const existingRestriction = (
      await tx
        .select()
        .from(governanceRestrictions)
        .where(
          and(
            eq(governanceRestrictions.id, command.restrictionId),
            eq(governanceRestrictions.projectId, projectId),
          ),
        )
        .limit(1)
    )[0];
    if (!existingRestriction) return rejected("INVALID_TARGET", "Restriction introuvable dans ce projet");
    if (existingRestriction.status !== "ACTIVE") return rejected("ALREADY_LIFTED", "Restriction déjà levée");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "LIFT_RESTRICTION",
      objectRef: command.restrictionId,
      statement: command.statement || "Levée de restriction",
      liftsRestrictionId: command.restrictionId,
    });
    const lifted = await liftRestrictionRow(tx, {
      projectId,
      restrictionId: command.restrictionId,
      liftDecisionId: decisionId,
    });
    if (lifted !== "ok") throw new Error("RESTRICTION_LIFT_LOST");
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "LIFT_RESTRICTION", targetRef: command.restrictionId }],
    };
  }

  if (command.operation === "REVISE_DECISION") {
    if (!command.decisionId || !command.statement.trim()) {
      return rejected("INVALID", "Décision et énoncé de révision requis");
    }
    const target = (
      await tx
        .select()
        .from(humanDecisions)
        .where(and(eq(humanDecisions.id, command.decisionId), eq(humanDecisions.projectId, projectId)))
        .limit(1)
    )[0];
    if (!target) return rejected("INVALID_TARGET", "Décision introuvable dans ce projet");
    if (target.state !== "APPLICABLE") {
      return rejected("NOT_APPLICABLE", "Seule une décision applicable se révise");
    }
    /**
     * CR-02: generic REVISE must not orphan D5 state that still references the
     * founding decisionId (method_application, cycle open/close, restriction).
     * Prefer typed ops already contracted: REPLACE_METHOD, RETAIN_TRAJECTORY,
     * REVOKE_DECISION, WITHDRAW_METHOD, LIFT_RESTRICTION, TRANSITION_CYCLE, …
     * Documentary RECORD_DECISION (no D5 effect) may be revised in place.
     */
    const D5_FOUNDING_KINDS = new Set([
      "OPEN_CYCLE",
      "CLOSE_CYCLE",
      "TRANSITION_CYCLE",
      "CHOOSE_METHOD",
      "REPLACE_METHOD",
      "WITHDRAW_METHOD",
      "RETAIN_TRAJECTORY",
      "PROPOSE_TRAJECTORY",
      "APPLY_RESTRICTION",
      "LIFT_RESTRICTION",
      "REVOKE_DECISION",
    ]);
    if (D5_FOUNDING_KINDS.has(target.kind)) {
      return rejected(
        "USE_TYPED_OPERATION",
        `Révision générique refusée pour ${target.kind} — utiliser l'opération métier typée (REPLACE_METHOD, RETAIN_TRAJECTORY, REVOKE_DECISION, WITHDRAW_METHOD, …)`,
      );
    }
    const current = await currentMethod(tx, projectId);
    if (current?.decisionId === target.id) {
      return rejected(
        "USE_TYPED_OPERATION",
        "Cette décision fonde la méthode courante — utiliser REPLACE_METHOD, WITHDRAW_METHOD ou REVOKE_DECISION",
      );
    }
    await markDecisionState(tx, target.id, "REVISED");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: target.kind,
      objectRef: target.objectRef,
      scope: target.scope,
      statement: command.statement,
      supersedesDecisionId: target.id,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "REVISE_DECISION", targetRef: decisionId, detail: { revised: target.id } }],
    };
  }

  if (command.operation === "RECORD_DECISION") {
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "RECORD_DECISION",
      objectRef: command.objectRef || command.decisionId || "",
      statement: command.statement || command.objective,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "RECORD_DECISION", targetRef: decisionId }],
    };
  }

  return rejected("INVALID", "Opération non prise en charge");
}

export async function executePilotageCommand(
  pilotId: string,
  projectId: string,
  body: PilotageRequestBody,
) {
  const envelope: ClientEnvelope = { pilotId, projectId, body };
  return runBusinessCommand(envelope, {
    classify: (tx) => classifyCommand(tx, envelope),
    mutate: (tx, command) => mutateCommand(tx, envelope, command),
  });
}

type ExplicitSource = {
  clientCommandKey: string;
  expectedRevision: number;
  sourceKind?: SourceKind;
  sourceRef: string;
  actInstanceId?: string;
};

function explicit(
  input: ExplicitSource,
): Pick<PilotageRequestBody, "clientCommandKey" | "expectedRevision" | "sourceKind" | "sourceRef" | "actInstanceId"> {
  return {
    clientCommandKey: input.clientCommandKey,
    expectedRevision: input.expectedRevision,
    sourceKind: input.sourceKind ?? "EXPLICIT_INTERACTION",
    sourceRef: input.sourceRef,
    actInstanceId: input.actInstanceId,
  };
}

/**
 * EXPLICIT_INTERACTION with an utterance and no operation follows the same
 * qualifier as USER_MESSAGE. A present operation stays on the structured path.
 * Returns null when this body is not an utterance-only explicit GO.
 */
export function classifyExplicitInteraction(body: PilotageRequestBody): ClassifyResult | null {
  if (body.sourceKind !== "EXPLICIT_INTERACTION") return null;
  if ((body.operation ?? "").trim()) return null;
  const sourceRef = body.sourceRef?.trim() ?? "";
  const utterance = (body.utterance ?? "").trim();
  if (!utterance) {
    return {
      ok: false,
      reasonCode: "INVALID",
      reason: "Opération inconnue",
      sourceActionKey: "REJECT|INVALID|",
    };
  }
  const qualified = qualifyPilotageIntent(utterance);
  if (qualified.clarity !== "CLEAR") {
    const reasonCode = qualified.clarity === "AMBIGUOUS" ? "AMBIGUOUS" : "INVALID";
    return {
      ok: false,
      reasonCode,
      reason: qualified.reason,
      sourceActionKey: `REJECT|${reasonCode}`,
    };
  }
  return fromClearIntent("EXPLICIT_INTERACTION", sourceRef, qualified, body);
}

export function proposeTrajectory(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { orientation: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "PROPOSE_TRAJECTORY",
    sourceKind: input.sourceKind ?? "COGNITIVE_PROPOSAL",
    orientation: input.orientation,
  });
}

export function retainTrajectory(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { orientation?: string; trajectoryRevisionId?: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "RETAIN_TRAJECTORY",
    orientation: input.orientation,
    trajectoryRevisionId: input.trajectoryRevisionId,
  });
}

export function openCycle(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { cycleType: CycleType; objective?: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "OPEN_CYCLE",
    cycleType: input.cycleType,
    objective: input.objective,
  });
}

export function closeCycle(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { cycleId?: string; balanceNote?: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "CLOSE_CYCLE",
    cycleId: input.cycleId,
    balanceNote: input.balanceNote,
  });
}

export function transitionCycle(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { toCycleType: CycleType; cycleType?: CycleType; objective?: string; balanceNote?: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "TRANSITION_CYCLE",
    toCycleType: input.toCycleType,
    cycleType: input.cycleType,
    objective: input.objective,
    balanceNote: input.balanceNote,
  });
}

export function chooseMethod(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { methodRef: string; methodVersion: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "CHOOSE_METHOD",
    methodRef: input.methodRef,
    methodVersion: input.methodVersion,
  });
}

export function replaceMethod(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { methodRef: string; methodVersion: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "REPLACE_METHOD",
    methodRef: input.methodRef,
    methodVersion: input.methodVersion,
  });
}

export function withdrawMethod(pilotId: string, projectId: string, input: ExplicitSource) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "WITHDRAW_METHOD",
  });
}

export function revokeFoundingDecision(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { decisionId: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "REVOKE_DECISION",
    decisionId: input.decisionId,
  });
}

export function applyGovernanceRestriction(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { targetKind: RestrictionTargetKind; targetRef?: string; statement?: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "APPLY_RESTRICTION",
    targetKind: input.targetKind,
    targetRef: input.targetRef ?? "*",
    statement: input.statement,
  });
}

export function liftGovernanceRestriction(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { restrictionId: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "LIFT_RESTRICTION",
    restrictionId: input.restrictionId,
  });
}

export function recordHumanDecision(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { statement: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "RECORD_DECISION",
    statement: input.statement,
  });
}
