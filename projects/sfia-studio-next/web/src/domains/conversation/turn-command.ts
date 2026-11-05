/**
 * Durable D3 turn command — short transactional reservation only.
 * Never hold a DB transaction open across the provider call.
 * Orphan RUNNING → conservative UNKNOWN / recovery; no permanent lock on the thread.
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
  reconciled?: boolean;
};

/** Stale RUNNING lease — conservative unblock after wall-clock safety margin. */
export const TURN_RUNNING_STALE_MS = 20 * 60 * 1000;

export function turnFingerprint(content: string): string {
  return fingerprintRequest(["v1", content.trim()]);
}

function isStaleRunning(updatedAt: Date | null | undefined): boolean {
  if (!updatedAt) return true;
  return Date.now() - updatedAt.getTime() > TURN_RUNNING_STALE_MS;
}

/**
 * Conservative reconciliation of an orphan RUNNING command.
 * - Assistant already persisted at ordinal → link + UNKNOWN (effect known for message; turn not COMPLETE without resultJson proof)
 * - Stale with no assistant → UNKNOWN, thread unlockable
 * - Fresh RUNNING → leave as-is (caller may 409)
 * Never invents COMPLETE or re-invokes provider.
 */
export async function reconcileRunningCommand(commandId: string): Promise<{
  status: TurnCommandStatus;
  reconciled: boolean;
  assistantMessageId: string | null;
  generationId: string | null;
  resultJson: string | null;
}> {
  return db.transaction(async (tx) => {
    await tx.execute(sql`SELECT pg_advisory_xact_lock(hashtext(${"turn-reconcile:" + commandId}))`);

    const row = (
      await tx
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, commandId))
        .limit(1)
    )[0];

    if (!row) {
      return {
        status: "UNKNOWN" as const,
        reconciled: false,
        assistantMessageId: null,
        generationId: null,
        resultJson: null,
      };
    }

    if (row.status !== "RUNNING" && row.status !== "ACCEPTED") {
      return {
        status: row.status as TurnCommandStatus,
        reconciled: false,
        assistantMessageId: row.assistantMessageId,
        generationId: row.generationId,
        resultJson: row.resultJson,
      };
    }

    let assistantId = row.assistantMessageId;
    let generationId = row.generationId;

    if (!assistantId && row.ordinalAssistant != null) {
      const existingAssistant = (
        await tx
          .select()
          .from(messages)
          .where(
            and(
              eq(messages.conversationId, row.conversationId),
              eq(messages.ordinal, row.ordinalAssistant),
              eq(messages.role, "assistant"),
            ),
          )
          .limit(1)
      )[0];
      if (existingAssistant) {
        assistantId = existingAssistant.id;
        generationId = existingAssistant.generationId ?? generationId;
      }
    }

    const stale = isStaleRunning(row.updatedAt);
    if (!stale && !assistantId) {
      // Still legitimately in flight — do not force UNKNOWN.
      return {
        status: "RUNNING" as const,
        reconciled: false,
        assistantMessageId: null,
        generationId,
        resultJson: null,
      };
    }

    const errorCategory = assistantId
      ? "RECONCILED_ASSISTANT_PRESENT_TURN_UNKNOWN"
      : "RECONCILED_STALE_RUNNING_NO_ASSISTANT";

    const updated = await tx
      .update(conversationTurnCommands)
      .set({
        status: "UNKNOWN",
        assistantMessageId: assistantId,
        generationId,
        errorCategory,
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(conversationTurnCommands.id, commandId),
          eq(conversationTurnCommands.status, row.status),
        ),
      )
      .returning();

    if (!updated.length) {
      const again = (
        await tx
          .select()
          .from(conversationTurnCommands)
          .where(eq(conversationTurnCommands.id, commandId))
          .limit(1)
      )[0];
      return {
        status: (again?.status as TurnCommandStatus) ?? "UNKNOWN",
        reconciled: false,
        assistantMessageId: again?.assistantMessageId ?? null,
        generationId: again?.generationId ?? null,
        resultJson: again?.resultJson ?? null,
      };
    }

    return {
      status: "UNKNOWN" as const,
      reconciled: true,
      assistantMessageId: assistantId,
      generationId,
      resultJson: null,
    };
  });
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
        // Peek assistant / staleness inside same lock for same-key recovery.
        let assistantId = existing.assistantMessageId;
        let generationId = existing.generationId;
        if (!assistantId && existing.ordinalAssistant != null) {
          const existingAssistant = (
            await tx
              .select()
              .from(messages)
              .where(
                and(
                  eq(messages.conversationId, existing.conversationId),
                  eq(messages.ordinal, existing.ordinalAssistant),
                  eq(messages.role, "assistant"),
                ),
              )
              .limit(1)
          )[0];
          if (existingAssistant) {
            assistantId = existingAssistant.id;
            generationId = existingAssistant.generationId ?? generationId;
          }
        }

        const stale = isStaleRunning(existing.updatedAt);
        if (assistantId || stale) {
          await tx
            .update(conversationTurnCommands)
            .set({
              status: "UNKNOWN",
              assistantMessageId: assistantId,
              generationId,
              errorCategory: assistantId
                ? "RECONCILED_ASSISTANT_PRESENT_TURN_UNKNOWN"
                : "RECONCILED_STALE_RUNNING_NO_ASSISTANT",
              updatedAt: new Date(),
            })
            .where(
              and(
                eq(conversationTurnCommands.id, existing.id),
                eq(conversationTurnCommands.status, existing.status),
              ),
            );
          return {
            kind: "replay" as const,
            commandId: existing.id,
            operationId: existing.operationId,
            status: "UNKNOWN",
            resultJson: existing.resultJson,
            generationId,
            userMessageId: existing.userMessageId,
            assistantMessageId: assistantId,
            reconciled: true,
          };
        }

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
      const stale = isStaleRunning(running.updatedAt);
      if (stale) {
        await tx
          .update(conversationTurnCommands)
          .set({
            status: "UNKNOWN",
            errorCategory: "RECONCILED_STALE_RUNNING_OTHER_KEY",
            updatedAt: new Date(),
          })
          .where(
            and(
              eq(conversationTurnCommands.id, running.id),
              eq(conversationTurnCommands.status, "RUNNING"),
            ),
          );
      } else {
        throw new StudioError("TURN_IN_PROGRESS", "Autre tour RUNNING sur cette conversation", {
          httpStatus: 409,
        });
      }
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

/**
 * Conditional terminal transition (CAS) — only from RUNNING/ACCEPTED.
 * Returns whether the update applied.
 */
export async function completeTurnCommand(args: {
  commandId: string;
  status: TurnCommandStatus;
  assistantMessageId?: string;
  generationId?: string;
  resultJson?: string;
  errorCategory?: string;
}): Promise<{ applied: boolean }> {
  if (args.status === "RUNNING" || args.status === "ACCEPTED") {
    throw new StudioError("INVALID_REQUEST", "completeTurnCommand exige un statut terminal");
  }

  const updated = await db
    .update(conversationTurnCommands)
    .set({
      status: args.status,
      assistantMessageId: args.assistantMessageId ?? null,
      generationId: args.generationId ?? null,
      resultJson: args.resultJson ?? null,
      errorCategory: args.errorCategory ?? null,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(conversationTurnCommands.id, args.commandId),
        sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
      ),
    )
    .returning({ id: conversationTurnCommands.id });

  return { applied: updated.length > 0 };
}

export async function markTurnUnknown(commandId: string, errorCategory: string) {
  await completeTurnCommand({
    commandId,
    status: "UNKNOWN",
    errorCategory,
  });
}

/** Force-stale helper for tests — advances updated_at into the past. */
export async function injectStaleRunningForTests(commandId: string, ageMs = TURN_RUNNING_STALE_MS + 1000) {
  const past = new Date(Date.now() - ageMs);
  await db
    .update(conversationTurnCommands)
    .set({ updatedAt: past })
    .where(eq(conversationTurnCommands.id, commandId));
}
