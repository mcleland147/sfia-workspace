import { eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import type { SimplePlanningInput } from "./types";

function normalizeDate(value?: string | null): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function normalizeText(value?: string | null): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export async function updateSimplePlanning(
  chantierId: string,
  input: SimplePlanningInput
) {
  const db = getDb();
  const rows = await db
    .update(schema.chantiers)
    .set({
      plannedStartDate: normalizeDate(input.plannedStartDate),
      plannedEndDate: normalizeDate(input.plannedEndDate),
      nextInterventionDate: normalizeDate(input.nextInterventionDate),
      upcomingMilestone: normalizeText(input.upcomingMilestone),
      simplePlanningComment: normalizeText(input.simplePlanningComment),
      updatedAt: new Date(),
    })
    .where(eq(schema.chantiers.id, chantierId))
    .returning();

  return rows[0] ?? null;
}
