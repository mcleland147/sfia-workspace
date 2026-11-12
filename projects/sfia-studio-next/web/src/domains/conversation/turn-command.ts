/**
 * Durable D3 turn command — short transactional reservation only.
 * Never hold a DB transaction open across the provider call.
 * Ownership fencing via owner_token: lost ownership ⇒ no COMPLETE, no further D4 commits.
 */
import { and, eq, ne, sql } from "drizzle-orm";
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
  /** Stable turn key — enables C02 reconstitution of conv-auth:{key}. */
  clientTurnKey?: string | null;
  reconciled?: boolean;
};

/** Stale RUNNING lease — only when heartbeat (updated_at) is older than this. */
export const TURN_RUNNING_STALE_MS = 20 * 60 * 1000;

/** Injectable clock for deterministic lease tests. */
export const turnClock = {
  nowMs: (): number => Date.now(),
};

/** Ownership fence passed into D4 write TXs (documents + knowledge). */
export type TurnOwnershipFence = {
  commandId: string;
  ownerToken: string;
  /** Optional test injection before the ownership lock inside the write TX. */
  beforeFenceCheck?: () => Promise<void>;
};

/** Forces terminal TX rollback when CAS cannot apply after a side-effect attempt. */
export class TurnTerminalCasMissError extends Error {
  readonly code = "TURN_TERMINAL_CAS_MISS";
  constructor() {
    super("TURN_TERMINAL_CAS_MISS");
    this.name = "TurnTerminalCasMissError";
  }
}

type FenceTx = {
  execute: typeof db.execute;
  select: typeof db.select;
};

/**
 * Lock + verify turn ownership inside an open D4 write TX.
 * Uses FOR SHARE so reconcile/UPDATE waits until the write commits or rolls back.
 * Returns false when ownership is already lost (caller must abort write without commit).
 */
export async function assertTurnFenceInTx(
  tx: FenceTx,
  fence: TurnOwnershipFence,
): Promise<boolean> {
  if (fence.beforeFenceCheck) {
    await fence.beforeFenceCheck();
  }
  await tx.execute(
    sql`select id from conversation_turn_commands
        where id = ${fence.commandId}
          and owner_token = ${fence.ownerToken}
          and status in ('RUNNING', 'ACCEPTED')
        for share`,
  );
  const fenceRow = (
    await tx
      .select({ id: conversationTurnCommands.id })
      .from(conversationTurnCommands)
      .where(
        and(
          eq(conversationTurnCommands.id, fence.commandId),
          eq(conversationTurnCommands.ownerToken, fence.ownerToken),
          sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
        ),
      )
      .limit(1)
  )[0];
  return Boolean(fenceRow);
}

/** Test hooks — must stay no-op in production paths. */
export const turnRaceHooks: {
  /**
   * C02 — after same-turn D5/D6 authority (SEM/TV: Nora qualifies first).
   * Historical name retained; must not run before Nora.
   */
  afterAuthorityBeforeNora?: () => Promise<void>;
  afterGenerateBeforeEffects?: () => Promise<void>;
  beforeD4Effect?: () => Promise<void>;
  beforeTerminalCommit?: () => Promise<void>;
  /**
   * Test-only: replace Nora assistant text after generate, before D4 extraction.
   * Used to inject nested illustrative fences without LIVE Nora or production bypass.
   */
  replaceNoraAssistantText?: (text: string) => string;
  /**
   * Runs inside the terminal TX after optional assistant INSERT, before CAS UPDATE.
   * May mutate the same TX (e.g. revoke token) to force CAS miss + rollback.
   */
  insideTerminalTxAfterInsert?: (tx: FenceTx) => Promise<void>;
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
/** Persist generation identity on a still-owned RUNNING/ACCEPTED command (pre-terminal). */
export async function bindTurnGenerationId(
  commandId: string,
  ownerToken: string,
  generationId: string,
): Promise<{ bound: boolean }> {
  const gen = generationId.trim();
  if (!gen) return { bound: false };
  const updated = await db
    .update(conversationTurnCommands)
    .set({
      generationId: gen,
      updatedAt: new Date(turnClock.nowMs()),
    })
    .where(
      and(
        eq(conversationTurnCommands.id, commandId),
        eq(conversationTurnCommands.ownerToken, ownerToken),
        sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
      ),
    )
    .returning({ id: conversationTurnCommands.id });
  return { bound: updated.length > 0 };
}

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

    // FOR UPDATE waits for any in-flight terminal/D4 fence locks — never revoke mid-write.
    await tx.execute(
      sql`select id from conversation_turn_commands where id = ${commandId} for update`,
    );

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
      // Bind only when both sides have a matching generationId (no silent appropriation).
      if (
        existingAssistant &&
        Boolean(row.generationId) &&
        Boolean(existingAssistant.generationId) &&
        row.generationId === existingAssistant.generationId
      ) {
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

    // Preserve prior resultJson (incl. stashed qualification) — update did not clear it.
    return {
      status: "UNKNOWN" as const,
      reconciled: true,
      assistantMessageId: assistantId,
      generationId,
      resultJson: updated[0]?.resultJson ?? row.resultJson,
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
          if (
            existingAssistant &&
            Boolean(existing.generationId) &&
            Boolean(existingAssistant.generationId) &&
            existing.generationId === existingAssistant.generationId
          ) {
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
            clientTurnKey: existing.clientTurnKey,
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
        clientTurnKey: existing.clientTurnKey,
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
 * S05 — sibling turns still unresolved for the same conversation (excluding current key).
 * Server authority for pending coexistence; client sessionStorage is UX aid only.
 */
export async function findUnresolvedSiblingTurns(args: {
  conversationId: string;
  ownerPilotId: string;
  excludeClientTurnKey: string;
}): Promise<
  Array<{
    id: string;
    clientTurnKey: string;
    status: TurnCommandStatus;
    userMessageId: string | null;
  }>
> {
  const rows = await db
    .select({
      id: conversationTurnCommands.id,
      clientTurnKey: conversationTurnCommands.clientTurnKey,
      status: conversationTurnCommands.status,
      userMessageId: conversationTurnCommands.userMessageId,
    })
    .from(conversationTurnCommands)
    .where(
      and(
        eq(conversationTurnCommands.conversationId, args.conversationId),
        eq(conversationTurnCommands.ownerPilotId, args.ownerPilotId),
        ne(conversationTurnCommands.clientTurnKey, args.excludeClientTurnKey),
        sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED', 'UNKNOWN')`,
      ),
    );
  return rows.map((r) => ({
    id: r.id,
    clientTurnKey: r.clientTurnKey,
    status: r.status as TurnCommandStatus,
    userMessageId: r.userMessageId,
  }));
}

/**
 * Persist validated semantic qualification on a RUNNING turn before any owner mutation (TV-04).
 * Merges into resultJson without changing status. CAS under ownerToken.
 * Does not requalify: callers must pass the already-validated envelope.
 */
export async function stashTurnQualification(args: {
  commandId: string;
  ownerToken: string;
  qualificationJson: string;
}): Promise<{ applied: boolean }> {
  return db.transaction(async (tx) => {
    await tx.execute(
      sql`select id from conversation_turn_commands
          where id = ${args.commandId}
            and owner_token = ${args.ownerToken}
            and status in ('RUNNING', 'ACCEPTED')
          for update`,
    );
    const owned = (
      await tx
        .select({
          id: conversationTurnCommands.id,
          resultJson: conversationTurnCommands.resultJson,
        })
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
    if (!owned) return { applied: false };

    let qualification: unknown;
    try {
      qualification = JSON.parse(args.qualificationJson) as unknown;
    } catch {
      // Invalid qualification JSON — refuse stash (no mutation of resultJson).
      return { applied: false };
    }
    let merged: Record<string, unknown> = {
      semanticQualification: qualification,
      semanticQualificationStashedAt: new Date(turnClock.nowMs()).toISOString(),
    };
    if (owned.resultJson) {
      try {
        const prev = JSON.parse(owned.resultJson) as Record<string, unknown>;
        // Never overwrite a terminal payload shape; only enrich while RUNNING.
        merged = { ...prev, ...merged };
      } catch {
        // Prior JSON unreadable — refuse rather than risk losing prior durable state.
        return { applied: false };
      }
    }

    const updated = await tx
      .update(conversationTurnCommands)
      .set({
        resultJson: JSON.stringify(merged),
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
    return { applied: Boolean(updated[0]) };
  });
}

/**
 * Atomic terminal commit under ownership fence:
 * FOR UPDATE lock → optional assistant INSERT → CAS UPDATE in the same short TX.
 * CAS miss after INSERT throws → full TX rollback (no orphan assistant).
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

  try {
    return await db.transaction(async (tx) => {
      // Exclusive lock: blocks reconcile revoke and concurrent terminal writers.
      await tx.execute(
        sql`select id from conversation_turn_commands
            where id = ${args.commandId}
              and owner_token = ${args.ownerToken}
              and status in ('RUNNING', 'ACCEPTED')
            for update`,
      );

      const owned = (
        await tx
          .select({
            id: conversationTurnCommands.id,
            assistantMessageId: conversationTurnCommands.assistantMessageId,
            generationId: conversationTurnCommands.generationId,
            resultJson: conversationTurnCommands.resultJson,
          })
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

      // T-03 / Lot B: preserve stashed semanticQualification across ALL terminals.
      let terminalJson = args.resultJson ?? null;
      if (owned.resultJson) {
        try {
          const prev = JSON.parse(owned.resultJson) as Record<string, unknown>;
          if (terminalJson) {
            const next = JSON.parse(terminalJson) as Record<string, unknown>;
            if (prev.semanticQualification !== undefined && next.semanticQualification === undefined) {
              next.semanticQualification = prev.semanticQualification;
              next.semanticQualificationStashedAt = prev.semanticQualificationStashedAt;
              terminalJson = JSON.stringify(next);
            }
          } else {
            terminalJson = owned.resultJson;
          }
        } catch {
          // Fail closed: keep prior durable JSON rather than wipe qualification.
          terminalJson = owned.resultJson;
        }
      }

      let assistantMessageId = args.assistant?.id ?? owned.assistantMessageId ?? null;

      if (args.assistant) {
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
          assistantMessageId = args.assistant.id;
        } else {
          // Reuse only with demonstrable identity: both generationIds non-empty and equal,
          // plus same message id or already-bound assistantMessageId. sameId/alreadyBound alone
          // are never sufficient when generation proof is missing or mismatched.
          const expectedGen = args.assistant.generationId?.trim() || null;
          const messageGen = existingAssistant.generationId?.trim() || null;
          const commandGen =
            (args.generationId ?? owned.generationId)?.trim() || expectedGen;
          const gensMatch =
            Boolean(expectedGen) &&
            Boolean(messageGen) &&
            Boolean(commandGen) &&
            expectedGen === messageGen &&
            commandGen === messageGen;
          const sameId = existingAssistant.id === args.assistant.id;
          const alreadyBound = owned.assistantMessageId === existingAssistant.id;
          const idConflict =
            Boolean(owned.assistantMessageId) &&
            owned.assistantMessageId !== existingAssistant.id &&
            !sameId;

          if (!gensMatch || idConflict || (!sameId && !alreadyBound)) {
            throw new StudioError(
              "CONFLICT",
              "Ordinal assistant incompatible avec la génération/commande courante",
              { httpStatus: 409 },
            );
          }
          assistantMessageId = existingAssistant.id;
        }
      }

      if (turnRaceHooks.insideTerminalTxAfterInsert) {
        await turnRaceHooks.insideTerminalTxAfterInsert(tx as FenceTx);
      }

      const updated = await tx
        .update(conversationTurnCommands)
        .set({
          status: args.status,
          assistantMessageId,
          generationId: args.generationId ?? args.assistant?.generationId ?? null,
          resultJson: terminalJson,
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

      if (updated.length === 0) {
        // Must not commit a prior INSERT in this TX.
        throw new TurnTerminalCasMissError();
      }
      return { applied: true };
    });
  } catch (e) {
    if (e instanceof TurnTerminalCasMissError) {
      return { applied: false };
    }
    throw e;
  }
}
/**
 * Terminal write for legacy UNKNOWN paths. ALWAYS preserves stashed
 * semanticQualification (T-03 / Lot B) — never wipe resultJson to null when
 * a prior stash exists.
 */
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

  return db.transaction(async (tx) => {
    const conditions = [
      eq(conversationTurnCommands.id, args.commandId),
      sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
    ];
    if (args.ownerToken) {
      conditions.push(eq(conversationTurnCommands.ownerToken, args.ownerToken));
    }

    await tx.execute(
      sql`select id from conversation_turn_commands
          where id = ${args.commandId}
            and status in ('RUNNING', 'ACCEPTED')
          for update`,
    );

    const owned = (
      await tx
        .select({
          id: conversationTurnCommands.id,
          resultJson: conversationTurnCommands.resultJson,
          assistantMessageId: conversationTurnCommands.assistantMessageId,
          generationId: conversationTurnCommands.generationId,
        })
        .from(conversationTurnCommands)
        .where(and(...conditions))
        .limit(1)
    )[0];
    if (!owned) return { applied: false };

    let terminalJson = args.resultJson ?? null;
    if (owned.resultJson) {
      try {
        const prev = JSON.parse(owned.resultJson) as Record<string, unknown>;
        if (terminalJson) {
          const next = JSON.parse(terminalJson) as Record<string, unknown>;
          if (prev.semanticQualification !== undefined && next.semanticQualification === undefined) {
            next.semanticQualification = prev.semanticQualification;
            next.semanticQualificationStashedAt = prev.semanticQualificationStashedAt;
            terminalJson = JSON.stringify(next);
          }
        } else {
          // No new payload — keep prior resultJson (qualification must survive UNKNOWN).
          terminalJson = owned.resultJson;
        }
      } catch (e) {
        // Fail closed on merge/parse: keep prior durable JSON rather than wipe.
        terminalJson = owned.resultJson;
        void e;
      }
    }

    const updated = await tx
      .update(conversationTurnCommands)
      .set({
        status: args.status,
        assistantMessageId: args.assistantMessageId ?? owned.assistantMessageId ?? null,
        generationId: args.generationId ?? owned.generationId ?? null,
        resultJson: terminalJson,
        errorCategory: args.errorCategory ?? null,
        updatedAt: new Date(turnClock.nowMs()),
      })
      .where(and(...conditions))
      .returning({ id: conversationTurnCommands.id });

    return { applied: updated.length > 0 };
  });
}

export async function markTurnUnknown(
  commandId: string,
  errorCategory: string,
  ownerToken?: string,
  resultJson?: string,
) {
  await completeTurnCommand({
    commandId,
    status: "UNKNOWN",
    errorCategory,
    ownerToken,
    resultJson,
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
