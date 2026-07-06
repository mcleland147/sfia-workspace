import { asc, eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { isReserveStatus } from "./types";

export async function listReservesByChantierId(chantierId: string) {
  const db = getDb();
  return db
    .select()
    .from(schema.reserves)
    .where(eq(schema.reserves.chantierId, chantierId))
    .orderBy(asc(schema.reserves.createdAt));
}

export async function createReserve(chantierId: string, description: string) {
  const db = getDb();
  const rows = await db
    .insert(schema.reserves)
    .values({
      chantierId,
      description: description.trim(),
      status: "Ouverte",
    })
    .returning();

  return rows[0];
}

export async function updateReserveStatus(reserveId: string, status: string) {
  if (!isReserveStatus(status)) {
    throw new Error("Statut réserve invalide");
  }

  const db = getDb();
  const rows = await db
    .update(schema.reserves)
    .set({ status, updatedAt: new Date() })
    .where(eq(schema.reserves.id, reserveId))
    .returning();

  return rows[0] ?? null;
}
