import { and, eq, isNull, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { accounts, pilots, users } from "@/db/schema";
import { newId } from "@/lib/ids";

/**
 * Stable GitHub account id → PilotId mapping.
 * Source of truth: verified provider account row (server), never client-supplied PilotId.
 *
 * Hook-order safe: Better Auth may create the user (and an early Pilot) before the
 * GitHub `accounts` row exists. Later calls must backfill `pilots.github_user_id`
 * without changing PilotId or reparenting resources.
 */
export async function ensurePilotForAuthUser(userId: string): Promise<{
  pilotId: string;
  displayName: string;
  githubUserId: string | null;
}> {
  const user = (await db.select().from(users).where(eq(users.id, userId)).limit(1))[0];
  if (!user) {
    throw new Error("AUTH_USER_MISSING");
  }

  const githubAccount = (
    await db
      .select()
      .from(accounts)
      .where(and(eq(accounts.userId, userId), eq(accounts.providerId, "github")))
      .limit(1)
  )[0];
  const githubUserId = githubAccount?.accountId ?? null;
  const displayName = user.name?.trim() || user.email || "Pilote";

  if (user.pilotId) {
    const pilot = (await db.select().from(pilots).where(eq(pilots.id, user.pilotId)).limit(1))[0];
    if (pilot) {
      // Late account link: preserve PilotId; fill github_user_id only when still null.
      if (githubUserId && !pilot.githubUserId) {
        const conflict = (
          await db
            .select({ id: pilots.id })
            .from(pilots)
            .where(and(eq(pilots.githubUserId, githubUserId), sql`${pilots.id} <> ${pilot.id}`))
            .limit(1)
        )[0];
        if (conflict) {
          // Do not merge/reparent — surface conflict for Morris/ops.
          throw Object.assign(new Error("PILOT_GITHUB_LINK_CONFLICT"), {
            code: "PILOT_GITHUB_LINK_CONFLICT",
          });
        }
        await db
          .update(pilots)
          .set({ githubUserId })
          .where(and(eq(pilots.id, pilot.id), isNull(pilots.githubUserId)));
        return {
          pilotId: pilot.id,
          displayName: pilot.displayName,
          githubUserId,
        };
      }
      if (
        githubUserId &&
        pilot.githubUserId &&
        pilot.githubUserId !== githubUserId
      ) {
        throw Object.assign(new Error("PILOT_GITHUB_LINK_CONFLICT"), {
          code: "PILOT_GITHUB_LINK_CONFLICT",
        });
      }
      return {
        pilotId: pilot.id,
        displayName: pilot.displayName,
        githubUserId: pilot.githubUserId,
      };
    }
  }

  let pilot =
    githubUserId != null
      ? (
          await db.select().from(pilots).where(eq(pilots.githubUserId, githubUserId)).limit(1)
        )[0]
      : undefined;

  if (!pilot) {
    const pilotId = newId("pilot");
    await db.insert(pilots).values({
      id: pilotId,
      githubUserId,
      displayName,
    });
    pilot = (await db.select().from(pilots).where(eq(pilots.id, pilotId)).limit(1))[0];
  }

  await db.update(users).set({ pilotId: pilot.id, updatedAt: new Date() }).where(eq(users.id, userId));

  return {
    pilotId: pilot.id,
    displayName: pilot.displayName,
    githubUserId: pilot.githubUserId,
  };
}
