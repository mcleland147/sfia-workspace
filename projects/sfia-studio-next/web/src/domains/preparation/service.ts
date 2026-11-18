import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  preparationProjectLinks,
  preparations,
  projects,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  type ApplyProjectionResult,
  type NoraProjectionDraft,
  type PreparationProjection,
  mergeNoraDraftWithPrior,
  parseProjectionJson,
  pilotUiEditField,
  previewFieldsFromProjection,
  projectionMateriallyChanged,
} from "@/domains/preparation/projection";

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
    projectionJson: null,
  });
  const convId = newId("conv");
  await db.insert(conversations).values({
    id: convId,
    preparationId: id,
    ownerPilotId: pilotId,
  });
  return (await db.select().from(preparations).where(eq(preparations.id, id)).limit(1))[0];
}

/**
 * Pilot aperçu correction — single authoritative write for preview + structured projection.
 * CAS on expectedCreationRevision when provided.
 */
export async function updatePreview(
  pilotId: string,
  preparationId: string,
  previewName: string,
  previewSummary: string,
  expectedCreationRevision?: number,
): Promise<number> {
  const result = await applyPilotApercuCorrection({
    pilotId,
    preparationId,
    previewName,
    previewSummary,
    expectedCreationRevision,
  });
  if (result.status === "FORBIDDEN") {
    const err = new Error("FORBIDDEN");
    (err as Error & { code: string }).code = "FORBIDDEN";
    throw err;
  }
  if (result.status === "CONFLICT") {
    const err = new Error("CONFLICT");
    (err as Error & { code: string; actualCreationRevision: number }).code = "CONFLICT";
    (err as Error & { actualCreationRevision: number }).actualCreationRevision =
      result.actualRevision;
    throw err;
  }
  if (result.status === "UNAVAILABLE") {
    const err = new Error("UNAVAILABLE");
    (err as Error & { code: string }).code = "UNAVAILABLE";
    throw err;
  }
  return result.revision;
}

export async function applyPilotApercuCorrection(input: {
  pilotId: string;
  preparationId: string;
  previewName: string;
  previewSummary: string;
  expectedCreationRevision?: number;
  editKey?: string;
}): Promise<ApplyProjectionResult> {
  try {
    return await db.transaction(async (tx) => {
      const locked = await tx.execute(
        sql`select id, creation_revision, preview_name, preview_summary, projection_json
            from preparations
            where id = ${input.preparationId} and owner_pilot_id = ${input.pilotId}
            for update`,
      );
      const rows = locked as unknown as Array<{
        id: string;
        creation_revision: number;
        preview_name: string;
        preview_summary: string;
        projection_json: unknown;
      }>;
      const row = rows[0];
      if (!row) return { status: "FORBIDDEN" as const };

      const currentRev = Number(row.creation_revision);
      if (
        input.expectedCreationRevision != null &&
        currentRev !== Number(input.expectedCreationRevision)
      ) {
        return {
          status: "CONFLICT" as const,
          actualRevision: currentRev,
          reason: "expectedCreationRevision stale",
        };
      }

      const prev = parseProjectionJson(row.projection_json, input.preparationId, currentRev);
      const editKey =
        input.editKey?.trim() ||
        `pilot-ui-edit:${input.preparationId}:${currentRev}:${Date.now()}`;
      const nameRaw = input.previewName.trim();
      const summaryRaw = input.previewSummary.trim();
      // Keep prior Nora suggestion if any; do not invent a Nora assessment from a UI edit.
      // Annotate pilot correction in explanation only when we already had a suggestion, else leave null.
      const draft: Omit<PreparationProjection, "revision" | "observedAt"> = {
        schemaVersion: 1,
        preparationId: input.preparationId,
        updatedFromTurnKey: editKey,
        name: nameRaw ? pilotUiEditField(nameRaw.slice(0, 120), editKey) : null,
        intention: summaryRaw
          ? pilotUiEditField(summaryRaw.slice(0, 500), editKey)
          : (prev?.intention ?? null),
        desiredOutcome: prev?.desiredOutcome ?? null,
        initialScope: prev?.initialScope ?? null,
        openQuestions: prev?.openQuestions ?? [],
        suggestion: prev?.suggestion
          ? {
              ...prev.suggestion,
              explanation: [
                prev.suggestion.explanation?.trim(),
                "Aperçu ajusté explicitement par le Pilote (inspection UI) — la création utilisera le nom inspecté.",
              ]
                .filter(Boolean)
                .join(" "),
            }
          : null,
      };

      if (!projectionMateriallyChanged(prev, draft) && nameRaw === (row.preview_name ?? "").trim()) {
        return {
          status: "UNCHANGED" as const,
          revision: currentRev,
          projection: prev,
        };
      }

      const nextRev = currentRev + 1;
      const now = new Date();
      const projection: PreparationProjection = {
        ...draft,
        revision: nextRev,
        observedAt: now.toISOString(),
      };
      const preview = previewFieldsFromProjection(projection, nameRaw, summaryRaw);

      await tx
        .update(preparations)
        .set({
          creationRevision: nextRev,
          previewName: preview.previewName,
          previewSummary: preview.previewSummary || summaryRaw,
          projectionJson: projection as unknown as Record<string, unknown>,
          updatedAt: now,
        })
        .where(
          and(
            eq(preparations.id, input.preparationId),
            eq(preparations.ownerPilotId, input.pilotId),
            eq(preparations.creationRevision, currentRev),
          ),
        );

      return { status: "APPLIED" as const, revision: nextRev, projection };
    });
  } catch {
    return { status: "UNAVAILABLE", reason: "pilot aperçu write failed" };
  }
}

/**
 * Apply a material PreparationProjection under creationRevision CAS.
 * Synchronizes previewName/previewSummary from the same revision (no dual-write divergence).
 */
export async function applyPreparationProjection(input: {
  pilotId: string;
  preparationId: string;
  expectedCreationRevision: number;
  draft: NoraProjectionDraft;
}): Promise<ApplyProjectionResult> {
  try {
    return await db.transaction(async (tx) => {
      const locked = await tx.execute(
        sql`select id, creation_revision, preview_name, preview_summary, projection_json
            from preparations
            where id = ${input.preparationId} and owner_pilot_id = ${input.pilotId}
            for update`,
      );
      const rows = locked as unknown as Array<{
        id: string;
        creation_revision: number;
        preview_name: string;
        preview_summary: string;
        projection_json: unknown;
      }>;
      const row = rows[0];
      if (!row) return { status: "FORBIDDEN" as const };

      const currentRev = Number(row.creation_revision);
      if (currentRev !== Number(input.expectedCreationRevision)) {
        return {
          status: "CONFLICT" as const,
          actualRevision: currentRev,
          reason: "expectedCreationRevision stale",
        };
      }

      const prev = parseProjectionJson(row.projection_json, input.preparationId, currentRev);
      const merged = mergeNoraDraftWithPrior(prev, input.draft);
      if (!projectionMateriallyChanged(prev, merged)) {
        return {
          status: "UNCHANGED" as const,
          revision: currentRev,
          projection: prev,
        };
      }

      const nextRev = currentRev + 1;
      const now = new Date();
      const projection: PreparationProjection = {
        ...merged,
        revision: nextRev,
        observedAt: now.toISOString(),
      };
      const preview = previewFieldsFromProjection(
        projection,
        row.preview_name ?? "",
        row.preview_summary ?? "",
      );

      await tx
        .update(preparations)
        .set({
          creationRevision: nextRev,
          previewName: preview.previewName,
          previewSummary: preview.previewSummary,
          projectionJson: projection as unknown as Record<string, unknown>,
          updatedAt: now,
        })
        .where(
          and(
            eq(preparations.id, input.preparationId),
            eq(preparations.ownerPilotId, input.pilotId),
            eq(preparations.creationRevision, currentRev),
          ),
        );

      return { status: "APPLIED" as const, revision: nextRev, projection };
    });
  } catch {
    return { status: "UNAVAILABLE", reason: "projection write failed" };
  }
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
  const projection = parseProjectionJson(
    prep.projectionJson,
    preparationId,
    prep.creationRevision,
  );
  return {
    preparation: prep,
    project: project ?? null,
    conversation: conv ?? null,
    link: link ?? null,
    projection,
  };
}
