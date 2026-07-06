import { desc, eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import type { CreateChantierInput } from "./types";
import { CHANTIER_STATUSES, isChantierStatus } from "./types";

export async function listChantiers() {
  const db = getDb();
  return db.select().from(schema.chantiers).orderBy(desc(schema.chantiers.updatedAt));
}

export async function getChantierById(id: string) {
  const db = getDb();
  const rows = await db
    .select()
    .from(schema.chantiers)
    .where(eq(schema.chantiers.id, id))
    .limit(1);

  return rows[0] ?? null;
}

export async function createChantier(input: CreateChantierInput) {
  const db = getDb();
  const rows = await db
    .insert(schema.chantiers)
    .values({
      title: input.title.trim(),
      client: input.client.trim(),
      address: input.address.trim(),
      status: "À démarrer",
      plannedStartDate: input.plannedStartDate || null,
      plannedEndDate: input.plannedEndDate || null,
      nextInterventionDate: input.nextInterventionDate || null,
      simplePlanningComment: input.simplePlanningComment?.trim() || null,
    })
    .returning();

  return rows[0];
}

export async function updateChantierStatus(id: string, status: string) {
  if (!isChantierStatus(status)) {
    throw new Error("Statut invalide");
  }

  const db = getDb();
  const rows = await db
    .update(schema.chantiers)
    .set({ status, updatedAt: new Date() })
    .where(eq(schema.chantiers.id, id))
    .returning();

  return rows[0] ?? null;
}

export { CHANTIER_STATUSES };
