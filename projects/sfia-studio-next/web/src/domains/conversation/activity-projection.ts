import { and, asc, eq, gt, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, conversations, noraActivityEvents, projects } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

export type ActivityNature = "ANNOUNCED" | "OBSERVED" | "COMPLETED" | "UNCERTAIN";
export type ActivityStatus = "RUNNING" | "COMPLETED" | "FAILED" | "LIMITED" | "UNKNOWN";

export type ActivityEventInput = {
  conversationId: string;
  turnCommandId: string;
  ownerPilotId: string;
  generationId?: string | null;
  phase: string;
  nature: ActivityNature;
  status: ActivityStatus;
  summary: string;
  detail?: Record<string, unknown>;
  sourceRef?: string | null;
  /** When provided, must match current turn ownerToken (fencing). */
  ownerToken?: string | null;
};

/**
 * Append a functional activity event. Never invents percentages or private chain-of-thought.
 * GET-side consumers must treat ANNOUNCED ≠ OBSERVED.
 * Sequence is allocated under turn lock to survive concurrent writers (unique turn+seq).
 */
export async function appendActivityEvent(input: ActivityEventInput) {
  return db.transaction(async (tx) => {
    await tx.execute(
      sql`select id from conversation_turn_commands
          where id = ${input.turnCommandId}
          for update`,
    );
    const turn = (
      await tx
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, input.turnCommandId))
        .limit(1)
    )[0];
    if (!turn) throw new StudioError("NOT_FOUND", "Tour introuvable");
    if (turn.conversationId !== input.conversationId) {
      throw new StudioError("ACCESS_DENIED", "Tour/conversation incohérents");
    }
    if (turn.ownerPilotId !== input.ownerPilotId) {
      throw new StudioError("ACCESS_DENIED", "Tour d'un autre Pilote");
    }
    if (input.ownerToken != null && turn.ownerToken && input.ownerToken !== turn.ownerToken) {
      throw new StudioError("ACCESS_DENIED", "OwnerToken invalide — fencing activité");
    }

    const last = (
      await tx
        .select({ sequence: noraActivityEvents.sequence })
        .from(noraActivityEvents)
        .where(eq(noraActivityEvents.turnCommandId, input.turnCommandId))
        .orderBy(asc(noraActivityEvents.sequence))
    ).at(-1);
    const sequence = (last?.sequence ?? 0) + 1;
    const id = newId("nact");
    // Strip obvious secrets from summary/detail before persistence.
    const safeSummary = input.summary
      .replace(/\bsk-[A-Za-z0-9]{20,}\b/g, "[REDACTED]")
      .slice(0, 500);
    await tx.insert(noraActivityEvents).values({
      id,
      conversationId: input.conversationId,
      turnCommandId: input.turnCommandId,
      ownerPilotId: input.ownerPilotId,
      generationId: input.generationId ?? turn.generationId ?? null,
      sequence,
      phase: input.phase.slice(0, 80),
      nature: input.nature,
      status: input.status,
      summary: safeSummary,
      detailJson: JSON.stringify(input.detail ?? {}),
      sourceRef: input.sourceRef ?? null,
      createdAt: new Date(),
    });
    return { id, sequence };
  });
}

/**
 * Pilot → project → conversation → turn.
 * ownerPilotId alone is not enough: the same Pilote must not read another project's turn.
 */
export async function assertProjectTurnActivityAccess(input: {
  ownerPilotId: string;
  projectId: string;
  turnCommandId: string;
}): Promise<void> {
  const project = (
    await db.select().from(projects).where(eq(projects.id, input.projectId)).limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");
  if (project.ownerPilotId !== input.ownerPilotId) {
    throw new StudioError("ACCESS_DENIED", "Projet d'un autre Pilote");
  }

  const turn = (
    await db
      .select()
      .from(conversationTurnCommands)
      .where(eq(conversationTurnCommands.id, input.turnCommandId))
      .limit(1)
  )[0];
  if (!turn) throw new StudioError("NOT_FOUND", "Tour introuvable");
  if (turn.ownerPilotId !== input.ownerPilotId) {
    throw new StudioError("ACCESS_DENIED", "Tour d'un autre Pilote");
  }

  const conv = (
    await db.select().from(conversations).where(eq(conversations.id, turn.conversationId)).limit(1)
  )[0];
  if (!conv || conv.projectId !== input.projectId) {
    throw new StudioError("ACCESS_DENIED", "Tour hors projet");
  }
}

export async function listActivityEvents(input: {
  ownerPilotId: string;
  turnCommandId: string;
  afterSequence?: number;
}) {
  const turn = (
    await db
      .select()
      .from(conversationTurnCommands)
      .where(eq(conversationTurnCommands.id, input.turnCommandId))
      .limit(1)
  )[0];
  if (!turn) throw new StudioError("NOT_FOUND", "Tour introuvable");
  if (turn.ownerPilotId !== input.ownerPilotId) {
    throw new StudioError("ACCESS_DENIED", "Tour d'un autre Pilote");
  }

  const rows = await db
    .select()
    .from(noraActivityEvents)
    .where(
      and(
        eq(noraActivityEvents.turnCommandId, input.turnCommandId),
        ...(input.afterSequence != null
          ? [gt(noraActivityEvents.sequence, input.afterSequence)]
          : []),
      ),
    )
    .orderBy(asc(noraActivityEvents.sequence));

  return {
    turnCommandId: turn.id,
    turnStatus: turn.status,
    generationId: turn.generationId,
    events: rows.map((r) => ({
      id: r.id,
      sequence: r.sequence,
      phase: r.phase,
      nature: r.nature,
      status: r.status,
      summary: r.summary,
      detail: JSON.parse(r.detailJson || "{}") as Record<string, unknown>,
      sourceRef: r.sourceRef,
      createdAt: r.createdAt.toISOString(),
    })),
  };
}

/** Compact projection for UI — delegated to product labels (no SDK dumps). */
export { compactActivitySummary, projectActivityLabel, buildActivitySteps } from "./activity-labels";
