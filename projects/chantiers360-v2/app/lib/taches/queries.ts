import { asc, eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { isTacheStatus } from "./types";

export async function listTachesByChantierId(chantierId: string) {
  const db = getDb();
  return db
    .select()
    .from(schema.taches)
    .where(eq(schema.taches.chantierId, chantierId))
    .orderBy(asc(schema.taches.createdAt));
}

export async function createTache(chantierId: string, label: string) {
  const db = getDb();
  const rows = await db
    .insert(schema.taches)
    .values({
      chantierId,
      label: label.trim(),
      status: "À faire",
    })
    .returning();

  return rows[0];
}

export async function updateTacheStatus(tacheId: string, status: string) {
  if (!isTacheStatus(status)) {
    throw new Error("Statut tâche invalide");
  }

  const db = getDb();
  const rows = await db
    .update(schema.taches)
    .set({ status, updatedAt: new Date() })
    .where(eq(schema.taches.id, tacheId))
    .returning();

  return rows[0] ?? null;
}
