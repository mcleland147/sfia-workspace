import { eq, inArray, isNotNull, or } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import type { ProchaineActionItem } from "./types";

const OPEN_TACHE_STATUSES = ["À faire", "En cours"] as const;
const OPEN_RESERVE_STATUSES = ["Ouverte", "En cours de traitement"] as const;

export async function listProchainesActions(): Promise<ProchaineActionItem[]> {
  const db = getDb();
  const items: ProchaineActionItem[] = [];

  const openTasks = await db
    .select({
      tacheId: schema.taches.id,
      label: schema.taches.label,
      status: schema.taches.status,
      chantierId: schema.chantiers.id,
      chantierTitle: schema.chantiers.title,
    })
    .from(schema.taches)
    .innerJoin(schema.chantiers, eq(schema.taches.chantierId, schema.chantiers.id))
    .where(inArray(schema.taches.status, [...OPEN_TACHE_STATUSES]));

  for (const row of openTasks) {
    items.push({
      id: `tache-${row.tacheId}`,
      sourceType: "tache",
      sourceId: row.tacheId,
      chantierId: row.chantierId,
      chantierTitle: row.chantierTitle,
      label: row.label,
      statusLabel: row.status,
      targetTab: "taches",
      sortKey: `${row.chantierTitle}-1-tache-${row.label}`,
    });
  }

  const openReserves = await db
    .select({
      reserveId: schema.reserves.id,
      description: schema.reserves.description,
      status: schema.reserves.status,
      chantierId: schema.chantiers.id,
      chantierTitle: schema.chantiers.title,
    })
    .from(schema.reserves)
    .innerJoin(schema.chantiers, eq(schema.reserves.chantierId, schema.chantiers.id))
    .where(inArray(schema.reserves.status, [...OPEN_RESERVE_STATUSES]));

  for (const row of openReserves) {
    items.push({
      id: `reserve-${row.reserveId}`,
      sourceType: "reserve",
      sourceId: row.reserveId,
      chantierId: row.chantierId,
      chantierTitle: row.chantierTitle,
      label: row.description,
      statusLabel: row.status,
      targetTab: "reserves",
      sortKey: `${row.chantierTitle}-2-reserve-${row.description}`,
    });
  }

  const jalonsRows = await db
    .select()
    .from(schema.chantiers)
    .where(
      or(
        isNotNull(schema.chantiers.nextInterventionDate),
        isNotNull(schema.chantiers.upcomingMilestone)
      )
    );

  for (const chantier of jalonsRows) {
    if (chantier.nextInterventionDate) {
      items.push({
        id: `jalon-intervention-${chantier.id}`,
        sourceType: "jalon-intervention",
        chantierId: chantier.id,
        chantierTitle: chantier.title,
        label: `Intervention prévue le ${chantier.nextInterventionDate}`,
        statusLabel: "Jalon",
        targetTab: "jalons",
        dueDate: chantier.nextInterventionDate,
        sortKey: `${chantier.title}-3-jalon-intervention`,
      });
    }

    if (chantier.upcomingMilestone?.trim()) {
      items.push({
        id: `jalon-milestone-${chantier.id}`,
        sourceType: "jalon-milestone",
        chantierId: chantier.id,
        chantierTitle: chantier.title,
        label: chantier.upcomingMilestone.trim(),
        statusLabel: "Jalon",
        targetTab: "jalons",
        sortKey: `${chantier.title}-4-jalon-milestone-${chantier.upcomingMilestone}`,
      });
    }
  }

  const retardChantiers = await db
    .select()
    .from(schema.chantiers)
    .where(eq(schema.chantiers.status, "En retard"));

  for (const chantier of retardChantiers) {
    items.push({
      id: `retard-${chantier.id}`,
      sourceType: "retard",
      chantierId: chantier.id,
      chantierTitle: chantier.title,
      label: "Chantier marqué en retard",
      statusLabel: "En retard",
      targetTab: null,
      sortKey: `${chantier.title}-0-retard`,
    });
  }

  return items.sort((a, b) => a.sortKey.localeCompare(b.sortKey, "fr"));
}
