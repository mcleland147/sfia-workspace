/**
 * Durable D3 turn command — short transactional reservation only.
 * Never hold a DB transaction open across the provider call.
 */
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, messages } from "@/db/schema";
import { newId } from "@/lib/ids";
import { StudioError } from "@/lib/http-errors";
import { fingerprintRequest, newOperationId } from "@/lib/observability";

export type TurnCommandStatus =
  | "ACCEPTED"
  | "RUNNING"
  | "COMPLETE"
  | "FAILED"
  | "CONFLICT"
  | "UNKNOWN";

export type ReservedTurn = {
  kind: "fresh";
  commandId: string;
  operationId: string;
  conversationId: string;
  clientTurnKey: string;
  requestFingerprint: string;
  ordinalUser: number;
  ordinalAssistant: number;
  userMessageId: string;
};

export type ReplayedTurn = {
  kind: "replay";
  commandId: string;
  operationId: string;
  status: TurnCommandStatus;
  resultJson: string | null;
  generationId: string | null;
  userMessageId: string | null;
  assistantMessageId: string | null;
};

export function turnFingerprint(content: string): string {
  // Non-sensitive request fingerprint — content hash only (no secrets).
  return fingerprintRequest(["v1", content.trim()]);
}

/**
 * Reserve ordinals + insert user message + create RUNNING command under a short lock.
 * Or return durable replay / conflict for the same client_turn_key.
 */
export async function reserveTurnCommand(args: {
  conversationId: string;
  ownerPilotId: string;
  clientTurnKey: string;
  content: string;
}): Promise<ReservedTurn | ReplayedTurn> {
  const fp = turnFingerprint(args.content);
  const clientTurnKey = args.clientTurnKey.trim();
  if (!clientTurnKey) {
    throw new StudioError("INVALID_REQUEST", "clientTurnKey requis");
  }

  return db.transaction(async (tx) => {
    // Serialize turn reservation per conversation (short advisory lock).
    await tx.execute(sql`SELECT pg_advisory_xact_lock(hashtext(${args.conversationId}))`);

    const existing = (
      await tx
        .select()
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.conversationId, args.conversationId),
            eq(conversationTurnCommands.clientTurnKey, clientTurnKey),
          ),
        )
        .limit(1)
    )[0];

    if (existing) {
      if (existing.requestFingerprint !== fp) {
        throw new StudioError(
          "PAYLOAD_MISMATCH",
          "Même clientTurnKey avec payload divergent",
          { httpStatus: 409 },
        );
      }
      if (existing.status === "RUNNING" || existing.status === "ACCEPTED") {
        // Concurrent second intention while first still in flight.
        throw new StudioError("TURN_IN_PROGRESS", "Tour déjà en cours pour cette conversation", {
          httpStatus: 409,
        });
      }
      return {
        kind: "replay" as const,
        commandId: existing.id,
        operationId: existing.operationId,
        status: existing.status as TurnCommandStatus,
        resultJson: existing.resultJson,
        generationId: existing.generationId,
        userMessageId: existing.userMessageId,
        assistantMessageId: existing.assistantMessageId,
      };
    }

    // Another RUNNING turn on same conversation (different key) → explicit conflict.
    const running = (
      await tx
        .select()
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.conversationId, args.conversationId),
            eq(conversationTurnCommands.status, "RUNNING"),
          ),
        )
        .limit(1)
    )[0];
    if (running) {
      throw new StudioError("TURN_IN_PROGRESS", "Autre tour RUNNING sur cette conversation", {
        httpStatus: 409,
      });
    }

    const last = (
      await tx
        .select({ ordinal: messages.ordinal })
        .from(messages)
        .where(eq(messages.conversationId, args.conversationId))
        .orderBy(sql`${messages.ordinal} desc`)
        .limit(1)
    )[0];
    const ordinalUser = (last?.ordinal ?? 0) + 1;
    const ordinalAssistant = ordinalUser + 1;
    const userMessageId = newId("msg");
    const commandId = newId("tcmd");
    const operationId = newOperationId();

    await tx.insert(messages).values({
      id: userMessageId,
      conversationId: args.conversationId,
      role: "user",
      content: args.content,
      status: "COMPLETE",
      ordinal: ordinalUser,
    });

    await tx.insert(conversationTurnCommands).values({
      id: commandId,
      conversationId: args.conversationId,
      ownerPilotId: args.ownerPilotId,
      clientTurnKey,
      requestFingerprint: fp,
      operationId,
      status: "RUNNING",
      ordinalUser,
      ordinalAssistant,
      userMessageId,
      updatedAt: new Date(),
    });

    return {
      kind: "fresh" as const,
      commandId,
      operationId,
      conversationId: args.conversationId,
      clientTurnKey,
      requestFingerprint: fp,
      ordinalUser,
      ordinalAssistant,
      userMessageId,
    };
  });
}

export async function completeTurnCommand(args: {
  commandId: string;
  status: TurnCommandStatus;
  assistantMessageId?: string;
  generationId?: string;
  resultJson?: string;
  errorCategory?: string;
}) {
  await db
    .update(conversationTurnCommands)
    .set({
      status: args.status,
      assistantMessageId: args.assistantMessageId ?? null,
      generationId: args.generationId ?? null,
      resultJson: args.resultJson ?? null,
      errorCategory: args.errorCategory ?? null,
      updatedAt: new Date(),
    })
    .where(eq(conversationTurnCommands.id, args.commandId));
}

export async function markTurnUnknown(commandId: string, errorCategory: string) {
  await completeTurnCommand({
    commandId,
    status: "UNKNOWN",
    errorCategory,
  });
}
