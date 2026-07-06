import { desc, eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";

export async function listComptesRendusByChantierId(chantierId: string) {
  const db = getDb();
  return db
    .select()
    .from(schema.comptesRendus)
    .where(eq(schema.comptesRendus.chantierId, chantierId))
    .orderBy(desc(schema.comptesRendus.createdAt));
}

export async function createCompteRendu(chantierId: string, contenu: string) {
  const db = getDb();
  const rows = await db
    .insert(schema.comptesRendus)
    .values({
      chantierId,
      contenu: contenu.trim(),
    })
    .returning();

  return rows[0];
}
