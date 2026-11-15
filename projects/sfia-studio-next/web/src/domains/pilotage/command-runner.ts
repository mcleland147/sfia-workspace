import { createHash } from "crypto";
import { and, asc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommandEffects,
  businessCommands,
  governanceRestrictions,
  projectCycles,
  projectPilotageState,
} from "@/db/schema";
import { evaluateCurrentAuthority } from "@/domains/decisions/authority";
import type { ClassifiedCommand, CommandResult, PilotageRequestBody } from "@/domains/pilotage/types";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

export type DbTx = Parameters<Parameters<typeof db.transaction>[0]>[0];

export type ClientEnvelope = {
  pilotId: string;
  projectId: string;
  body: PilotageRequestBody;
};

export type ClassifyResult =
  | { ok: true; command: ClassifiedCommand }
  | { ok: false; reasonCode: string; reason: string; sourceActionKey: string };

export type EffectDraft = {
  effectKind: string;
  targetRef: string;
  outcome?: string;
  detail?: unknown;
};

export type MutateResult =
  | { kind: "APPLIED"; decisionId: string | null; revision: number; effects: EffectDraft[] }
  | { kind: "REJECTED"; reasonCode: string; reason: string; persist: boolean }
  | { kind: "CONFLICT"; reasonCode: string; reason: string };

type CommandRow = typeof businessCommands.$inferSelect;
type EffectRow = typeof businessCommandEffects.$inferSelect;

function asRows<T>(result: unknown): T[] {
  if (Array.isArray(result)) return result as T[];
  if (result && typeof result === "object" && Array.isArray((result as { rows?: T[] }).rows)) {
    return (result as { rows: T[] }).rows;
  }
  return [];
}

function errorText(e: unknown): string {
  if (e instanceof Error) {
    const cause = "cause" in e ? errorText(e.cause) : "";
    return `${e.message} ${cause}`;
  }
  return "";
}

function pgCode(e: unknown): string | undefined {
  if (!e || typeof e !== "object") return undefined;
  const code = (e as { code?: unknown }).code;
  if (typeof code === "string" && /^[0-9A-Z]{5}$/.test(code)) return code;
  if ("cause" in e) return pgCode((e as { cause?: unknown }).cause);
  return undefined;
}

export function commandFingerprint(input: ClientEnvelope): string {
  const b = input.body;
  const canonical = JSON.stringify({
    balanceNote: (b.balanceNote ?? "").trim(),
    cycleId: b.cycleId ?? "",
    cycleType: b.cycleType ?? "",
    decisionId: b.decisionId ?? "",
    expectedRevision: b.expectedRevision,
    methodRef: (b.methodRef ?? "").trim(),
    methodVersion: (b.methodVersion ?? "").trim(),
    objective: (b.objective ?? "").trim(),
    operation: b.operation ?? "",
    orientation: (b.orientation ?? "").trim(),
    projectId: input.projectId,
    restrictionId: b.restrictionId ?? "",
    sourceKind: b.sourceKind ?? "",
    sourceRef: b.sourceRef ?? "",
    statement: (b.statement ?? "").trim(),
    targetKind: b.targetKind ?? "",
    targetRef: (b.targetRef ?? "").trim(),
    toCycleType: b.toCycleType ?? "",
    trajectoryRevisionId: b.trajectoryRevisionId ?? "",
    utterance: (b.utterance ?? "").trim(),
    actInstanceId: (b.actInstanceId ?? "").trim(),
    objectRef: (b.objectRef ?? "").trim(),
  });
  return createHash("sha256").update(canonical).digest("hex");
}

export function buildSourceActionKey(input: {
  operation: string;
  cycleType?: string | null;
  toCycleType?: string | null;
  methodRef?: string | null;
  methodVersion?: string | null;
  decisionId?: string | null;
  trajectoryRevisionId?: string | null;
  targetKind?: string | null;
  targetRef?: string | null;
  restrictionId?: string | null;
  actInstanceId?: string | null;
}): string {
  const canonical = [
    input.operation,
    input.cycleType ?? "",
    input.toCycleType ?? "",
    (input.methodRef ?? "").trim().toLowerCase(),
    (input.methodVersion ?? "").trim(),
    input.decisionId ?? "",
    input.trajectoryRevisionId ?? "",
    input.targetKind ?? "",
    (input.targetRef ?? "").trim().toLowerCase(),
    input.restrictionId ?? "",
    (input.actInstanceId ?? "").trim(),
  ].join("|");
  return createHash("sha256").update(canonical).digest("hex");
}

function parseResultJson(raw: string): { reason?: string; reasonCode?: string } {
  try {
    const value = JSON.parse(raw) as { reason?: string; reasonCode?: string };
    return value ?? {};
  } catch {
    return {};
  }
}

export function toCommandResult(
  cmd: CommandRow,
  effects: EffectRow[],
  mode: "replay" | "stored",
): CommandResult {
  const extra = parseResultJson(cmd.resultJson);
  const status = mode === "replay" && cmd.status === "APPLIED" ? "ALREADY_APPLIED" : cmd.status;
  return {
    status: status === "APPLIED" || status === "REJECTED" || status === "ALREADY_APPLIED" ? status : "UNKNOWN",
    commandId: cmd.id,
    projectId: cmd.projectId,
    revision: cmd.stateRevision,
    decisionId: cmd.decisionId,
    effects: effects.map((e) => ({
      effectKind: e.effectKind,
      targetRef: e.targetRef,
      outcome: e.outcome,
      ordinal: e.ordinal,
    })),
    reason: extra.reason,
    reasonCode: extra.reasonCode,
  };
}

function bare(input: ClientEnvelope, patch: Partial<CommandResult>): CommandResult {
  return {
    status: "CONFLICT",
    commandId: null,
    projectId: input.projectId,
    revision: null,
    decisionId: null,
    effects: [],
    ...patch,
  };
}

async function loadEffects(tx: DbTx | typeof db, commandId: string): Promise<EffectRow[]> {
  return tx
    .select()
    .from(businessCommandEffects)
    .where(eq(businessCommandEffects.commandId, commandId))
    .orderBy(asc(businessCommandEffects.ordinal));
}

async function findByKey(tx: DbTx | typeof db, input: ClientEnvelope) {
  return (
    await tx
      .select()
      .from(businessCommands)
      .where(
        and(
          eq(businessCommands.projectId, input.projectId),
          eq(businessCommands.actorPilotId, input.pilotId),
          eq(businessCommands.clientCommandKey, input.body.clientCommandKey ?? ""),
        ),
      )
      .limit(1)
  )[0];
}

/**
 * CR-03: free-text statement divergence is not a material contradiction oracle
 * (RG-GOV-011..015). Project-global statementA!==statementB blocking of all
 * dependent D5 effects was removed. Deterministic point-of-effect controls remain:
 * restrictions, cycle/method state, founding decision validity, typed ops.
 * Broader material D6 conflict recognition: NEEDS MORRIS ARBITRATION / B13 PARTIAL.
 */

async function findByActionKey(tx: DbTx, projectId: string, actionKey: string) {
  return (
    await tx
      .select()
      .from(businessCommands)
      .where(and(eq(businessCommands.projectId, projectId), eq(businessCommands.sourceActionKey, actionKey)))
      .limit(1)
  )[0];
}

async function findByIntent(tx: DbTx, projectId: string, sourceKind: string, sourceRef: string, actionKey: string) {
  return (
    await tx
      .select()
      .from(businessCommands)
      .where(
        and(
          eq(businessCommands.projectId, projectId),
          eq(businessCommands.sourceKind, sourceKind),
          eq(businessCommands.sourceRef, sourceRef),
          eq(businessCommands.sourceActionKey, actionKey),
        ),
      )
      .limit(1)
  )[0];
}

async function currentRevision(tx: DbTx, projectId: string): Promise<number> {
  const row = (
    await tx
      .select({ revision: projectPilotageState.revision })
      .from(projectPilotageState)
      .where(eq(projectPilotageState.projectId, projectId))
      .limit(1)
  )[0];
  return row?.revision ?? 0;
}

async function insertCommand(
  tx: DbTx,
  input: ClientEnvelope,
  fingerprint: string,
  fields: {
    sourceKind: string;
    sourceRef: string;
    sourceActionKey: string;
    operation: string;
    status: "APPLIED" | "REJECTED";
    stateRevision: number;
    decisionId: string | null;
    reason?: string;
    reasonCode?: string;
    effects: EffectDraft[];
  },
): Promise<CommandResult> {
  const id = newId("bcmd");
  const now = new Date();
  await tx.insert(businessCommands).values({
    id,
    projectId: input.projectId,
    actorPilotId: input.pilotId,
    clientCommandKey: input.body.clientCommandKey ?? "",
    fingerprint,
    sourceKind: fields.sourceKind,
    sourceRef: fields.sourceRef,
    sourceActionKey: fields.sourceActionKey,
    operation: fields.operation,
    expectedRevision: input.body.expectedRevision ?? 0,
    stateRevision: fields.stateRevision,
    status: fields.status,
    resultJson: JSON.stringify({ reason: fields.reason, reasonCode: fields.reasonCode }),
    decisionId: fields.decisionId,
    createdAt: now,
    updatedAt: now,
  });
  const effects: EffectRow[] = [];
  for (let i = 0; i < fields.effects.length; i++) {
    const draft = fields.effects[i];
    const effectId = newId("eff");
    const row = {
      id: effectId,
      commandId: id,
      projectId: input.projectId,
      effectKind: draft.effectKind,
      targetRef: draft.targetRef,
      outcome: draft.outcome ?? "APPLIED",
      ordinal: i + 1,
      detailJson: JSON.stringify(draft.detail ?? {}),
      createdAt: now,
    };
    await tx.insert(businessCommandEffects).values(row);
    effects.push({ ...row });
  }
  return toCommandResult(
    {
      id,
      projectId: input.projectId,
      actorPilotId: input.pilotId,
      clientCommandKey: input.body.clientCommandKey ?? "",
      fingerprint,
      sourceKind: fields.sourceKind,
      sourceRef: fields.sourceRef,
      sourceActionKey: fields.sourceActionKey,
      operation: fields.operation,
      expectedRevision: input.body.expectedRevision ?? 0,
      stateRevision: fields.stateRevision,
      status: fields.status,
      resultJson: JSON.stringify({ reason: fields.reason, reasonCode: fields.reasonCode }),
      decisionId: fields.decisionId,
      createdAt: now,
      updatedAt: now,
    },
    effects,
    "stored",
  );
}

function validateEnvelope(input: ClientEnvelope): void {
  const b = input.body;
  if (!b.clientCommandKey?.trim()) {
    throw new StudioError("INVALID_REQUEST", "clientCommandKey requis");
  }
  if (typeof b.expectedRevision !== "number" || !Number.isInteger(b.expectedRevision) || b.expectedRevision < 0) {
    throw new StudioError("INVALID_REQUEST", "expectedRevision entier requis");
  }
  if (!b.sourceKind || !b.sourceRef?.trim()) {
    throw new StudioError("INVALID_REQUEST", "sourceKind et sourceRef requis");
  }
  if (!b.operation && !b.utterance?.trim()) {
    throw new StudioError("INVALID_REQUEST", "operation ou énoncé requis");
  }
}

/**
 * Short transaction: lock the project row, replay the client key, then mutate.
 * A thrown fault between CLOSE and OPEN rolls the whole transaction back.
 * There is no PARTIAL outcome.
 */
export async function runBusinessCommand(
  input: ClientEnvelope,
  handlers: {
    classify: (tx: DbTx) => Promise<ClassifyResult>;
    mutate: (tx: DbTx, command: ClassifiedCommand) => Promise<MutateResult>;
  },
): Promise<CommandResult> {
  validateEnvelope(input);
  const fingerprint = commandFingerprint(input);

  try {
    return await db.transaction(async (tx) => {
      const locked = await tx.execute(
        sql`select id from projects where id = ${input.projectId} and owner_pilot_id = ${input.pilotId} for update`,
      );
      if (!asRows<{ id: string }>(locked)[0]) {
        throw new StudioError("NOT_FOUND", "Projet introuvable");
      }

      const prior = await findByKey(tx, input);
      if (prior) {
        if (prior.fingerprint !== fingerprint) {
          return bare(input, {
            status: "CONFLICT",
            commandId: prior.id,
            revision: prior.stateRevision,
            reason: "Empreinte d'idempotence différente",
            reasonCode: "FINGERPRINT",
          });
        }
        const effects = await loadEffects(tx, prior.id);
        return toCommandResult(prior, effects, "replay");
      }

      // F1: classify + reconcile known human acts BEFORE stale-revision gate.
      // A committed act with a new clientCommandKey and obsolete expectedRevision
      // must replay — not be refused as STALE_REVISION.
      const revision = await currentRevision(tx, input.projectId);
      const classified = await handlers.classify(tx);
      const intentKey = classified.ok
        ? {
            sourceKind: classified.command.sourceKind,
            sourceRef: classified.command.sourceRef,
            sourceActionKey: classified.command.sourceActionKey,
          }
        : {
            sourceKind: input.body.sourceKind ?? "EXPLICIT_INTERACTION",
            sourceRef: input.body.sourceRef ?? "",
            sourceActionKey: classified.sourceActionKey,
          };
      const intent = await findByIntent(
        tx,
        input.projectId,
        intentKey.sourceKind,
        intentKey.sourceRef,
        intentKey.sourceActionKey,
      );
      if (intent) {
        // Same human act under a new clientCommandKey → reconcile, do not re-mutate.
        // Do not re-emit effects when status is UNKNOWN — return stored truth only.
        const effects = await loadEffects(tx, intent.id);
        return toCommandResult(intent, effects, "replay");
      }
      if (classified.ok && classified.command.actInstanceId) {
        const sameAct = await findByActionKey(tx, input.projectId, classified.command.sourceActionKey);
        if (sameAct) {
          const effects = await loadEffects(tx, sameAct.id);
          return toCommandResult(sameAct, effects, "replay");
        }
      }

      // NEW act only: expectedRevision guards concurrency before mutation.
      if (revision !== input.body.expectedRevision) {
        return bare(input, {
          status: "CONFLICT",
          revision,
          reason: "Révision attendue périmée",
          reasonCode: "STALE_REVISION",
        });
      }

      if (!classified.ok) {
        return insertCommand(tx, input, fingerprint, {
          sourceKind: intentKey.sourceKind,
          sourceRef: intentKey.sourceRef,
          sourceActionKey: intentKey.sourceActionKey,
          operation: input.body.operation || "UTTERANCE",
          status: "REJECTED",
          stateRevision: revision,
          decisionId: null,
          reason: classified.reason,
          reasonCode: classified.reasonCode,
          effects: [],
        });
      }

      const restrictions = await tx
        .select()
        .from(governanceRestrictions)
        .where(
          and(
            eq(governanceRestrictions.projectId, input.projectId),
            eq(governanceRestrictions.status, "ACTIVE"),
          ),
        );

      // Resolve real active cycle for CLOSE / TRANSITION — do not trust client-only refs.
      let cycleId = classified.command.cycleId;
      let cycleType = classified.command.cycleType;
      const toCycleType = classified.command.toCycleType;
      if (
        classified.command.operation === "CLOSE_CYCLE" ||
        classified.command.operation === "TRANSITION_CYCLE"
      ) {
        const active = (
          await tx
            .select({ id: projectCycles.id, cycleType: projectCycles.cycleType })
            .from(projectCycles)
            .where(
              and(eq(projectCycles.projectId, input.projectId), eq(projectCycles.status, "ACTIVE")),
            )
            .limit(1)
        )[0];
        if (active) {
          cycleId = active.id;
          cycleType = active.cycleType as typeof cycleType;
        }
      } else if (classified.command.operation === "OPEN_CYCLE") {
        cycleType = classified.command.cycleType;
        cycleId = null;
      }

      const verdict = evaluateCurrentAuthority({
        operation: classified.command.operation,
        restrictions,
        methodRef: classified.command.methodRef,
        cycleId,
        cycleType,
        toCycleType,
        effectTargetRef:
          classified.command.trajectoryRevisionId ||
          classified.command.decisionId ||
          classified.command.methodRef ||
          classified.command.targetRef ||
          toCycleType,
      });
      if (!verdict.allowed) {
        return insertCommand(tx, input, fingerprint, {
          sourceKind: classified.command.sourceKind,
          sourceRef: classified.command.sourceRef,
          sourceActionKey: classified.command.sourceActionKey,
          operation: classified.command.operation,
          status: "REJECTED",
          stateRevision: revision,
          decisionId: null,
          reason: verdict.reason,
          reasonCode: "RESTRICTION",
          effects: [],
        });
      }

      const mutated = await handlers.mutate(tx, classified.command);
      if (mutated.kind === "CONFLICT") {
        return bare(input, {
          status: "CONFLICT",
          revision,
          reason: mutated.reason,
          reasonCode: mutated.reasonCode,
        });
      }
      if (mutated.kind === "REJECTED") {
        if (!mutated.persist) {
          return bare(input, {
            status: "REJECTED",
            revision,
            reason: mutated.reason,
            reasonCode: mutated.reasonCode,
          });
        }
        return insertCommand(tx, input, fingerprint, {
          sourceKind: classified.command.sourceKind,
          sourceRef: classified.command.sourceRef,
          sourceActionKey: classified.command.sourceActionKey,
          operation: classified.command.operation,
          status: "REJECTED",
          stateRevision: revision,
          decisionId: null,
          reason: mutated.reason,
          reasonCode: mutated.reasonCode,
          effects: [],
        });
      }

      return insertCommand(tx, input, fingerprint, {
        sourceKind: classified.command.sourceKind,
        sourceRef: classified.command.sourceRef,
        sourceActionKey: classified.command.sourceActionKey,
        operation: classified.command.operation,
        status: "APPLIED",
        stateRevision: mutated.revision,
        decisionId: mutated.decisionId,
        effects: mutated.effects,
      });
    });
  } catch (e) {
    if (errorText(e).includes("INJECTED_OPEN_FAILURE")) throw e;
    if (e instanceof StudioError) throw e;
    if (pgCode(e) === "23505") {
      const prior = await findByKey(db, input);
      if (prior && prior.fingerprint === fingerprint) {
        const effects = await loadEffects(db, prior.id);
        return toCommandResult(prior, effects, "replay");
      }
      if (prior && prior.fingerprint !== fingerprint) {
        return bare(input, {
          status: "CONFLICT",
          commandId: prior.id,
          reason: "Empreinte d'idempotence différente",
          reasonCode: "FINGERPRINT",
        });
      }
      return bare(input, {
        status: "REJECTED",
        reason: "Contrainte d'unicité",
        reasonCode: "ACTIVE_CYCLE",
      });
    }
    throw e;
  }
}
