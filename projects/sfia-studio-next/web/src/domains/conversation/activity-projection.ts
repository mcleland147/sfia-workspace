import { and, asc, eq, gt } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, noraActivityEvents } from "@/db/schema";
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
 */
export async function appendActivityEvent(input: ActivityEventInput) {
  const turn = (
    await db
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
    await db
      .select({ sequence: noraActivityEvents.sequence })
      .from(noraActivityEvents)
      .where(eq(noraActivityEvents.turnCommandId, input.turnCommandId))
      .orderBy(asc(noraActivityEvents.sequence))
  ).at(-1);
  const sequence = (last?.sequence ?? 0) + 1;
  const id = newId("nact");
  await db.insert(noraActivityEvents).values({
    id,
    conversationId: input.conversationId,
    turnCommandId: input.turnCommandId,
    ownerPilotId: input.ownerPilotId,
    generationId: input.generationId ?? turn.generationId ?? null,
    sequence,
    phase: input.phase.slice(0, 80),
    nature: input.nature,
    status: input.status,
    summary: input.summary.slice(0, 500),
    detailJson: JSON.stringify(input.detail ?? {}),
    sourceRef: input.sourceRef ?? null,
    createdAt: new Date(),
  });
  return { id, sequence };
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

/** Compact projection for UI — no secrets, no chain-of-thought. */
export function compactActivitySummary(
  events: Array<{ nature: string; summary: string; status: string }>,
): { headline: string; detailCount: number } {
  if (events.length === 0) return { headline: "", detailCount: 0 };
  const last = events[events.length - 1]!;
  return {
    headline: `${last.nature}: ${last.summary}`.slice(0, 160),
    detailCount: events.length,
  };
}
