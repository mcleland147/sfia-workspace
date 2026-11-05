/**
 * Durable D3 turn command — short transactional reservation only.
 * Never hold a DB transaction open across the provider call.
 * Ownership fencing via owner_token: lost ownership ⇒ no COMPLETE, no further D4 commits.
 */
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, messages } from "@/db/schema";
import { newId } from "@/lib/ids";
import { StudioError } from "@/lib/http-errors";
import { fingerprintRequest, newOperationId } from "@/lib/observability";
import { randomUUID } from "node:crypto";

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
  ownerToken: string;
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

/** Stale RUNNING lease — only when heartbeat (updated_at) is older than this. */
export const TURN_RUNNING_STALE_MS = 20 * 60 * 1000;

/** Injectable clock for deterministic lease tests. */
export const turnClock = {
  nowMs: (): number => Date.now(),
};

/** Test hooks — must stay no-op in production paths. */
export const turnRaceHooks: {
  afterGenerateBeforeEffects?: () => Promise<void>;
  beforeD4Effect?: () => Promise<void>;
  beforeTerminalCommit?: () => Promise<void>;
} = {};

export function turnFingerprint(content: string): string {
  return fingerprintRequest(["v1", content.trim()]);
}

function newOwnerToken(): string {
  return `own_${randomUUID()}`;
}

function isStaleRunning(updatedAt: Date | null | undefined): boolean {
  if (!updatedAt) return true;
  return turnClock.nowMs() - updatedAt.getTime() > TURN_RUNNING_STALE_MS;
}

/**
 * Heartbeat + ownership proof. Refreshes updated_at so long active runs are not
 * falsely reconciled as orphans. Returns false if ownership lost.
 */
export async function touchTurnLease(
  commandId: string,
  ownerToken: string,
): Promise<{ owned: boolean }> {
  const updated = await db
    .update(conversationTurnCommands)
    .set({ updatedAt: new Date(turnClock.nowMs()) })
    .where(
      and(
        eq(conversationTurnCommands.id, commandId),
        eq(conversationTurnCommands.ownerToken, ownerToken),
        sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
      ),
    )
    .returning({ id: conversationTurnCommands.id });
  return { owned: updated.length > 0 };
}

/**
 * Assert ownership still holds (short TX). Use before every D4 write boundary.
 */
export async function requireTurnOwnership(
  commandId: string,
  ownerToken: string,
): Promise<boolean> {
  const { owned } = await touchTurnLease(commandId, ownerToken);
  return owned;
}

/**
 * Conservative reconciliation of an orphan RUNNING command.
 * Invalidates owner_token so a late execution cannot CAS-complete or fence D4.
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

    // Invalidate owner_token — late owner can no longer commit.
    const updated = await tx
      .update(conversationTurnCommands)
      .set({
        status: "UNKNOWN",
        assistantMessageId: assistantId,
        generationId,
        errorCategory,
        ownerToken: `revoked_${randomUUID()}`,
        updatedAt: new Date(turnClock.nowMs()),
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
              ownerToken: `revoked_${randomUUID()}`,
              updatedAt: new Date(turnClock.nowMs()),
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
            ownerToken: `revoked_${randomUUID()}`,
            updatedAt: new Date(turnClock.nowMs()),
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
    const ownerToken = newOwnerToken();

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
      ownerToken,
      ordinalUser,
      ordinalAssistant,
      userMessageId,
      updatedAt: new Date(turnClock.nowMs()),
    });

    return {
      kind: "fresh" as const,
      commandId,
      operationId,
      conversationId: args.conversationId,
      clientTurnKey,
      requestFingerprint: fp,
      ownerToken,
      ordinalUser,
      ordinalAssistant,
      userMessageId,
    };
  });
}

/**
 * Atomic terminal commit under ownership fence:
 * insert assistant (if provided) + CAS status with owner_token in the same short TX.
 * Lost ownership ⇒ applied:false — caller must not return COMPLETE.
 */
export async function commitTurnTerminal(args: {
  commandId: string;
  ownerToken: string;
  status: TurnCommandStatus;
  conversationId: string;
  assistant?: {
    id: string;
    content: string;
    messageStatus: string;
    generationId: string;
    ordinal: number;
  };
  generationId?: string;
  resultJson?: string;
  errorCategory?: string;
}): Promise<{ applied: boolean }> {
  if (args.status === "RUNNING" || args.status === "ACCEPTED") {
    throw new StudioError("INVALID_REQUEST", "commitTurnTerminal exige un statut terminal");
  }

  return db.transaction(async (tx) => {
    if (args.assistant) {
      // Insert only if ownership still holds — checked via subsequent CAS.
      // Pre-check fence inside TX:
      const owned = (
        await tx
          .select({ id: conversationTurnCommands.id })
          .from(conversationTurnCommands)
          .where(
            and(
              eq(conversationTurnCommands.id, args.commandId),
              eq(conversationTurnCommands.ownerToken, args.ownerToken),
              sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
            ),
          )
          .limit(1)
      )[0];
      if (!owned) {
        return { applied: false };
      }

      // Idempotent ordinal: if assistant already there, reuse.
      const existingAssistant = (
        await tx
          .select()
          .from(messages)
          .where(
            and(
              eq(messages.conversationId, args.conversationId),
              eq(messages.ordinal, args.assistant.ordinal),
              eq(messages.role, "assistant"),
            ),
          )
          .limit(1)
      )[0];

      if (!existingAssistant) {
        await tx.insert(messages).values({
          id: args.assistant.id,
          conversationId: args.conversationId,
          role: "assistant",
          content: args.assistant.content,
          status: args.assistant.messageStatus,
          generationId: args.assistant.generationId,
          ordinal: args.assistant.ordinal,
        });
      }
    }

    const updated = await tx
      .update(conversationTurnCommands)
      .set({
        status: args.status,
        assistantMessageId: args.assistant?.id ?? null,
        generationId: args.generationId ?? args.assistant?.generationId ?? null,
        resultJson: args.resultJson ?? null,
        errorCategory: args.errorCategory ?? null,
        updatedAt: new Date(turnClock.nowMs()),
      })
      .where(
        and(
          eq(conversationTurnCommands.id, args.commandId),
          eq(conversationTurnCommands.ownerToken, args.ownerToken),
          sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
        ),
      )
      .returning({ id: conversationTurnCommands.id });

    return { applied: updated.length > 0 };
  });
}

/** @deprecated Prefer commitTurnTerminal with ownerToken — kept for markTurnUnknown paths. */
export async function completeTurnCommand(args: {
  commandId: string;
  status: TurnCommandStatus;
  assistantMessageId?: string;
  generationId?: string;
  resultJson?: string;
  errorCategory?: string;
  ownerToken?: string;
}): Promise<{ applied: boolean }> {
  if (args.status === "RUNNING" || args.status === "ACCEPTED") {
    throw new StudioError("INVALID_REQUEST", "completeTurnCommand exige un statut terminal");
  }

  const conditions = [
    eq(conversationTurnCommands.id, args.commandId),
    sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
  ];
  if (args.ownerToken) {
    conditions.push(eq(conversationTurnCommands.ownerToken, args.ownerToken));
  }

  const updated = await db
    .update(conversationTurnCommands)
    .set({
      status: args.status,
      assistantMessageId: args.assistantMessageId ?? null,
      generationId: args.generationId ?? null,
      resultJson: args.resultJson ?? null,
      errorCategory: args.errorCategory ?? null,
      updatedAt: new Date(turnClock.nowMs()),
    })
    .where(and(...conditions))
    .returning({ id: conversationTurnCommands.id });

  return { applied: updated.length > 0 };
}

export async function markTurnUnknown(
  commandId: string,
  errorCategory: string,
  ownerToken?: string,
) {
  await completeTurnCommand({
    commandId,
    status: "UNKNOWN",
    errorCategory,
    ownerToken,
  });
}

/** Force-stale helper for tests — advances updated_at into the past (uses turnClock). */
export async function injectStaleRunningForTests(commandId: string, ageMs = TURN_RUNNING_STALE_MS + 1000) {
  const past = new Date(turnClock.nowMs() - ageMs);
  await db
    .update(conversationTurnCommands)
    .set({ updatedAt: past })
    .where(eq(conversationTurnCommands.id, commandId));
}

/** Test helper: revoke ownership while leaving status RUNNING (simulates lost fence mid-flight). */
export async function revokeOwnerTokenForTests(commandId: string) {
  await db
    .update(conversationTurnCommands)
    .set({
      ownerToken: `revoked_${randomUUID()}`,
      updatedAt: new Date(turnClock.nowMs()),
    })
    .where(eq(conversationTurnCommands.id, commandId));
}
