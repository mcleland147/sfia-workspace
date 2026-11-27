import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { preparations } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";

export async function assertOwnedPreparation(pilotId: string, preparationId: string) {
  const preparation = (
    await db
      .select()
      .from(preparations)
      .where(and(eq(preparations.id, preparationId), eq(preparations.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!preparation) throw new StudioError("NOT_FOUND", "Préparation introuvable");
  return preparation;
}