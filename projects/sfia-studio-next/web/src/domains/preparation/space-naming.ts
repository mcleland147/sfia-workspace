import { sql } from "@/db/client";
import { namesConflictForSamePilot, normalizeProjectNameKey } from "@/domains/preparation/projection";
import { StudioError } from "@/lib/http-errors";

export type PreparationTitleSource = "NONE" | "NORA" | "PILOT";

const TITLE_MAX_CODE_POINTS = 80;

export function normalizePreparationTitle(value: string): string | null {
  const single = value.normalize("NFC").replace(/[\t\f\v]+/g, " ").replace(/ {2,}/g, " ").trim();
  if (!single || /[\r\n]/.test(single)) return null;
  if ([...single].length > TITLE_MAX_CODE_POINTS) return null;
  if (/[<>]/.test(single)) return null;
  return single;
}

function displayProjectName(value: string): string {
  return value.normalize("NFC").replace(/\s+/g, " ").trim();
}

function readIntentionKey(value: unknown): string {
  if (typeof value !== "string" || !/^[A-Za-z0-9._:-]{8,80}$/.test(value)) {
    throw new StudioError("INVALID_REQUEST", "Clé d'intention invalide.");
  }
  return value;
}

function readRevision(value: unknown): number {
  if (typeof value !== "number" || !Number.isInteger(value) || value < 0) {
    throw new StudioError("INVALID_REQUEST", "Version attendue invalide.");
  }
  return value;
}

export async function applyFirstPreparationTitle(input: {
  pilotId: string;
  preparationId: string;
  turnCommandId: string;
  suggested: string;
}): Promise<{ applied: boolean }> {
  const title = normalizePreparationTitle(input.suggested);
  if (!title) return { applied: false };
  return sql.begin(async (tx) => {
    const rows = await tx<{
      title_source: string;
      title_revision: number;
      status: string;
    }[]>`
      SELECT title_source, title_revision, status
      FROM preparations
      WHERE id = ${input.preparationId} AND owner_pilot_id = ${input.pilotId}
      FOR UPDATE
    `;
    const row = rows[0];
    if (!row || row.status !== "OPEN" || row.title_source !== "NONE" || Number(row.title_revision) !== 0) {
      return { applied: false };
    }
    const linked = await tx<{ preparation_id: string }[]>`
      SELECT preparation_id FROM preparation_project_links WHERE preparation_id = ${input.preparationId} LIMIT 1
    `;
    if (linked[0]) return { applied: false };
    const updated = await tx`
      UPDATE preparations
      SET title = ${title},
          title_source = 'NORA',
          title_revision = 1,
          title_source_turn_id = ${input.turnCommandId},
          updated_at = now()
      WHERE id = ${input.preparationId}
        AND owner_pilot_id = ${input.pilotId}
        AND status = 'OPEN'
        AND title_source = 'NONE'
        AND title_revision = 0
        AND NOT EXISTS (
          SELECT 1 FROM preparation_project_links WHERE preparation_id = ${input.preparationId}
        )
    `;
    return { applied: updated.count === 1 };
  });
}

export async function renamePreparation(input: {
  pilotId: string;
  preparationId: string;
  title: string;
  expectedRevision: number;
  intentionKey: string;
}): Promise<{ label: string; revision: number; intentionKey: string; changed: boolean }> {
  const title = normalizePreparationTitle(input.title);
  if (!title) throw new StudioError("INVALID_REQUEST", "Ce titre n'est pas utilisable.");
  const expected = readRevision(input.expectedRevision);
  const intentionKey = readIntentionKey(input.intentionKey);
  return sql.begin(async (tx) => {
    const rows = await tx<{
      title: string | null;
      title_revision: number;
      title_intention_key: string | null;
      status: string;
    }[]>`
      SELECT title, title_revision, title_intention_key, status
      FROM preparations
      WHERE id = ${input.preparationId} AND owner_pilot_id = ${input.pilotId}
      FOR UPDATE
    `;
    const row = rows[0];
    if (!row) throw new StudioError("NOT_FOUND", "Préparation introuvable.");
    if (row.status !== "OPEN") {
      throw new StudioError("CONFLICT", "Cette préparation n'est plus un espace autonome.");
    }
    const linked = await tx<{ preparation_id: string }[]>`
      SELECT preparation_id FROM preparation_project_links WHERE preparation_id = ${input.preparationId} LIMIT 1
    `;
    if (linked[0]) {
      throw new StudioError("CONFLICT", "Cette préparation est rattachée à un projet.");
    }
    const revision = Number(row.title_revision);
    if (row.title_intention_key === intentionKey) {
      if (row.title === title) {
        return { label: title, revision, intentionKey, changed: false };
      }
      throw new StudioError("CONFLICT", "Cette intention a déjà produit un autre titre.");
    }
    if (revision !== expected) {
      throw new StudioError("CONFLICT", "Le titre a changé. Relisez-le avant de confirmer.");
    }
    if (row.title === title) {
      await tx`
        UPDATE preparations
        SET title_intention_key = ${intentionKey}, updated_at = now()
        WHERE id = ${input.preparationId}
      `;
      return { label: title, revision, intentionKey, changed: false };
    }
    const next = revision + 1;
    await tx`
      UPDATE preparations
      SET title = ${title},
          title_source = 'PILOT',
          title_revision = ${next},
          title_intention_key = ${intentionKey},
          updated_at = now()
      WHERE id = ${input.preparationId} AND title_revision = ${revision}
    `;
    return { label: title, revision: next, intentionKey, changed: true };
  });
}

export async function renameProject(input: {
  pilotId: string;
  projectId: string;
  name: string;
  expectedRevision: number;
  intentionKey: string;
}): Promise<{ label: string; revision: number; intentionKey: string; changed: boolean }> {
  const name = displayProjectName(input.name);
  if (!name || /[\r\n]/.test(input.name)) {
    throw new StudioError("INVALID_REQUEST", "Ce nom n'est pas utilisable.");
  }
  const expected = readRevision(input.expectedRevision);
  const intentionKey = readIntentionKey(input.intentionKey);
  return sql.begin(async (tx) => {
    await tx`SELECT pg_advisory_xact_lock(hashtext(${input.pilotId}), hashtext('sfia:d2:project-name'))`;
    const rows = await tx<{
      id: string;
      name: string;
      name_revision: number;
      name_intention_key: string | null;
    }[]>`
      SELECT id, name, name_revision, name_intention_key
      FROM projects
      WHERE id = ${input.projectId} AND owner_pilot_id = ${input.pilotId}
      FOR UPDATE
    `;
    const row = rows[0];
    if (!row) throw new StudioError("NOT_FOUND", "Projet introuvable.");
    const revision = Number(row.name_revision);
    if (row.name_intention_key === intentionKey) {
      if (normalizeProjectNameKey(row.name) === normalizeProjectNameKey(name)) {
        return { label: row.name, revision, intentionKey, changed: false };
      }
      throw new StudioError("CONFLICT", "Cette intention a déjà produit un autre nom.");
    }
    if (revision !== expected) {
      throw new StudioError("CONFLICT", "Le nom a changé. Relisez-le avant de confirmer.");
    }
    if (normalizeProjectNameKey(row.name) === normalizeProjectNameKey(name)) {
      await tx`
        UPDATE projects SET name_intention_key = ${intentionKey}
        WHERE id = ${input.projectId}
      `;
      return { label: row.name, revision, intentionKey, changed: false };
    }
    const others = await tx<{ id: string; name: string }[]>`
      SELECT id, name FROM projects
      WHERE owner_pilot_id = ${input.pilotId} AND id <> ${input.projectId}
    `;
    if (others.some((other) => namesConflictForSamePilot(other.name, name))) {
      throw new StudioError("CONFLICT", "Ce nom est déjà utilisé par un autre projet.");
    }
    const next = revision + 1;
    await tx`
      UPDATE projects
      SET name = ${name}, name_revision = ${next}, name_intention_key = ${intentionKey}
      WHERE id = ${input.projectId} AND name_revision = ${revision}
    `;
    return { label: name, revision: next, intentionKey, changed: true };
  });
}
