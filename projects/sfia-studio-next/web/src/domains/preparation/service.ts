import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  preparationProjectLinks,
  preparations,
  projects,
} from "@/db/schema";
import { newId } from "@/lib/ids";

export async function openOrCreatePreparation(pilotId: string, preparationId?: string) {
  if (preparationId) {
    const existing = await db
      .select()
      .from(preparations)
      .where(and(eq(preparations.id, preparationId), eq(preparations.ownerPilotId, pilotId)))
      .limit(1);
    if (!existing[0]) {
      const err = new Error("NOT_FOUND");
      (err as Error & { code: string }).code = "NOT_FOUND";
      throw err;
    }
    return existing[0];
  }

  const id = newId("prep");
  await db.insert(preparations).values({
    id,
    ownerPilotId: pilotId,
    status: "OPEN",
    creationRevision: 1,
    previewName: "",
    previewSummary: "",
  });
  const convId = newId("conv");
  await db.insert(conversations).values({
    id: convId,
    preparationId: id,
    ownerPilotId: pilotId,
  });
  return (await db.select().from(preparations).where(eq(preparations.id, id)).limit(1))[0];
}

export async function updatePreview(
  pilotId: string,
  preparationId: string,
  previewName: string,
  previewSummary: string,
) {
  const prep = await openOrCreatePreparation(pilotId, preparationId);
  const nextRev = prep.creationRevision + 1;
  await db
    .update(preparations)
    .set({
      previewName,
      previewSummary,
      creationRevision: nextRev,
      updatedAt: new Date(),
    })
    .where(and(eq(preparations.id, preparationId), eq(preparations.ownerPilotId, pilotId)));
  return nextRev;
}

export async function getPreparationContext(pilotId: string, preparationId: string) {
  const prep = await openOrCreatePreparation(pilotId, preparationId);
  const link = (
    await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.preparationId, preparationId))
      .limit(1)
  )[0];
  let project = null;
  if (link) {
    project = (
      await db
        .select()
        .from(projects)
        .where(and(eq(projects.id, link.projectId), eq(projects.ownerPilotId, pilotId)))
        .limit(1)
    )[0];
  }
  const conv = (
    await db
      .select()
      .from(conversations)
      .where(and(eq(conversations.preparationId, preparationId), eq(conversations.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  return { preparation: prep, project: project ?? null, conversation: conv ?? null, link: link ?? null };
}
