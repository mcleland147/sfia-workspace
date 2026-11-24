/**
 * Atomic Cursor attempt claim — mirrors Git publication fencing (P0-01).
 */

import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  extendClaim,
  isClaimActive,
  mintClaim,
  readClaim,
  releaseClaim,
  writeClaimInto,
  type EffectClaim,
} from "./claim-lease";

function sqlClaimInactive() {
  return sql`(
    ${effectAttempts.resultJson}::jsonb->'claim' IS NULL
    OR NULLIF(${effectAttempts.resultJson}::jsonb->'claim'->>'releasedAt', '') IS NOT NULL
    OR (${effectAttempts.resultJson}::jsonb->'claim'->>'leaseExpiresAt')::timestamptz <= now()
  )`;
}

export function sqlCursorClaimTokenEquals(claimToken: string) {
  return sql`${effectAttempts.resultJson}::jsonb->'claim'->>'claimToken' = ${claimToken}`;
}

/**
 * Evidence that an external send may already have occurred.
 * Claim expiry alone never proves absence of effect (CF-03 / T-04).
 */
export function priorSendMayHaveOccurred(resultJson: string | null | undefined): boolean {
  try {
    const live = JSON.parse(resultJson || "{}") as {
      sendRequestedAt?: string | null;
      ackReceivedAt?: string | null;
      runObservedAt?: string | null;
      agentId?: string | null;
      runId?: string | null;
    };
    return Boolean(
      live.sendRequestedAt ||
        live.ackReceivedAt ||
        live.runObservedAt ||
        live.agentId ||
        live.runId,
    );
  } catch {
    return false;
  }
}

/**
 * AUTHORIZED|AMBIGUOUS → DISPATCHED with claim minted in the same SQL predicate.
 * Concurrent callers: at most one wins (0 rows for the loser).
 *
 * When stampSendIntent is true (default for live dispatch), `sendRequestedAt` is
 * written in the same UPDATE as the claim — before any external SDK call.
 * Crash after claim / before SDK ⇒ priorSendMayHaveOccurred ⇒ no blind redispatch.
 *
 * AMBIGUOUS reclaim is refused when a prior send may have produced an effect —
 * expired lease ≠ proof of no side effect. Caller must reconcile / keep UNKNOWN.
 */
export async function claimCursorAttempt(
  attemptId: string,
  fromStatus: "AUTHORIZED" | "AMBIGUOUS",
  opts?: { stampSendIntent?: boolean },
): Promise<{ claim: EffectClaim; sendRequestedAt: string | null } | null> {
  const now = new Date();
  const stampSend = opts?.stampSendIntent !== false;
  const row = (
    await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId)).limit(1)
  )[0];
  if (!row || row.status !== fromStatus) return null;
  if (row.kind !== "CURSOR_EXECUTION") return null;
  const prev = readClaim(row.resultJson);
  if (fromStatus === "AMBIGUOUS") {
    if (isClaimActive(prev, now.getTime())) return null;
    // CF-03: never blind-redispatch after a possible external send.
    if (priorSendMayHaveOccurred(row.resultJson)) return null;
  }
  const claim = mintClaim(prev, now);
  let baseJson = row.resultJson || "{}";
  const sendRequestedAt = stampSend ? now.toISOString() : null;
  if (sendRequestedAt) {
    try {
      const parsed = JSON.parse(baseJson) as Record<string, unknown>;
      // Do not overwrite an earlier sendRequestedAt.
      if (!parsed.sendRequestedAt) parsed.sendRequestedAt = sendRequestedAt;
      baseJson = JSON.stringify(parsed);
    } catch {
      baseJson = JSON.stringify({ sendRequestedAt });
    }
  }
  const nextJson = writeClaimInto(baseJson, claim);
  const where =
    fromStatus === "AMBIGUOUS"
      ? and(
          eq(effectAttempts.id, attemptId),
          eq(effectAttempts.status, fromStatus),
          eq(effectAttempts.kind, "CURSOR_EXECUTION"),
          sqlClaimInactive(),
          // SQL fence: refuse if any send/run identity already recorded.
          sql`(
            NULLIF(${effectAttempts.resultJson}::jsonb->>'sendRequestedAt', '') IS NULL
            AND NULLIF(${effectAttempts.resultJson}::jsonb->>'ackReceivedAt', '') IS NULL
            AND NULLIF(${effectAttempts.resultJson}::jsonb->>'runObservedAt', '') IS NULL
            AND NULLIF(${effectAttempts.resultJson}::jsonb->>'agentId', '') IS NULL
            AND NULLIF(${effectAttempts.resultJson}::jsonb->>'runId', '') IS NULL
          )`,
        )
      : and(
          eq(effectAttempts.id, attemptId),
          eq(effectAttempts.status, fromStatus),
          eq(effectAttempts.kind, "CURSOR_EXECUTION"),
        );
  const claimed = await db
    .update(effectAttempts)
    .set({ status: "DISPATCHED", resultJson: nextJson, updatedAt: now })
    .where(where)
    .returning({ id: effectAttempts.id });
  return claimed[0] ? { claim, sendRequestedAt } : null;
}

export async function persistCursorOwnedResult(input: {
  attemptId: string;
  claimToken: string;
  resultJson: string;
  status: "DISPATCHED" | "COMPLETED" | "AMBIGUOUS" | "FAILED";
  release?: boolean;
}): Promise<void> {
  const fresh = (
    await db.select().from(effectAttempts).where(eq(effectAttempts.id, input.attemptId)).limit(1)
  )[0];
  if (!fresh || fresh.status !== "DISPATCHED") {
    throw new StudioError("CONFLICT", "DISPATCHED perdu — écriture refusée");
  }
  const claim = readClaim(fresh.resultJson);
  if (!claim || claim.claimToken !== input.claimToken || claim.releasedAt) {
    throw new StudioError("CONFLICT", "Claim fence invalide — écriture refusée");
  }
  const nextClaim = input.release ? releaseClaim(extendClaim(claim)) : extendClaim(claim);
  const nextJson = writeClaimInto(input.resultJson, nextClaim);
  const updated = await db
    .update(effectAttempts)
    .set({
      status: input.status,
      resultJson: nextJson,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(effectAttempts.id, input.attemptId),
        eq(effectAttempts.status, "DISPATCHED"),
        sqlCursorClaimTokenEquals(input.claimToken),
      ),
    )
    .returning({ id: effectAttempts.id });
  if (!updated[0]) {
    throw new StudioError(
      "CONFLICT",
      "Progression refusée — claimToken non propriétaire (fencing SQL)",
    );
  }
}
