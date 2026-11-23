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
 * AUTHORIZED|AMBIGUOUS → DISPATCHED with claim minted in the same SQL predicate.
 * Concurrent callers: at most one wins (0 rows for the loser).
 */
export async function claimCursorAttempt(
  attemptId: string,
  fromStatus: "AUTHORIZED" | "AMBIGUOUS",
): Promise<{ claim: EffectClaim } | null> {
  const now = new Date();
  const row = (
    await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId)).limit(1)
  )[0];
  if (!row || row.status !== fromStatus) return null;
  if (row.kind !== "CURSOR_EXECUTION") return null;
  const prev = readClaim(row.resultJson);
  if (fromStatus === "AMBIGUOUS" && isClaimActive(prev, now.getTime())) {
    return null;
  }
  const claim = mintClaim(prev, now);
  const nextJson = writeClaimInto(row.resultJson || "{}", claim);
  const where =
    fromStatus === "AMBIGUOUS"
      ? and(
          eq(effectAttempts.id, attemptId),
          eq(effectAttempts.status, fromStatus),
          eq(effectAttempts.kind, "CURSOR_EXECUTION"),
          sqlClaimInactive(),
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
  return claimed[0] ? { claim } : null;
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
