import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { pilots, preparations, projects, preparationProjectLinks } from "@/db/schema";
import { newId } from "@/lib/ids";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import {
  applyFirstPreparationTitle,
  renamePreparation,
  renameProject,
} from "@/domains/preparation/space-naming";
import { StudioError } from "@/lib/http-errors";
import { loadPersonalBoard } from "@/domains/identity/portfolio-organization";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("preparation title and project name", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL?.includes("sfia_next_e2e")) {
      throw new Error("refusing naming tests outside sfia_next_e2e");
    }
  });

  it("keeps the first accepted title and the pilot choice", async () => {
    const pilotId = await seedPilot("title");
    const prep = await openOrCreatePreparation(pilotId);
    await db.update(preparations).set({ previewName: "apercu", previewSummary: "resume" }).where(eq(preparations.id, prep.id));
    const before = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];

    expect(await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-1", suggested: "",
    })).toEqual({ applied: false });
    expect(await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-1", suggested: "a".repeat(90),
    })).toEqual({ applied: false });

    const applied = await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-2", suggested: "  Analyse   documentaire ",
    });
    expect(applied.applied).toBe(true);
    expect((await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-3", suggested: "Autre sujet",
    })).applied).toBe(false);

    const titled = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    expect(titled.title).toBe("Analyse documentaire");
    expect(titled.titleSource).toBe("NORA");
    expect(titled.titleRevision).toBe(1);
    expect(titled.titleSourceTurnId).toBe("turn-2");
    expect(titled.previewName).toBe("apercu");
    expect(titled.previewSummary).toBe("resume");
    expect(titled.creationRevision).toBe(before.creationRevision);

    const manual = await renamePreparation({
      pilotId, preparationId: prep.id, title: "Titre du pilote", expectedRevision: 1, intentionKey: "manual-key1",
    });
    expect(manual).toMatchObject({ label: "Titre du pilote", revision: 2, changed: true });
    expect((await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-4", suggested: "Suggestion tardive",
    })).applied).toBe(false);
    const kept = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    expect(kept.title).toBe("Titre du pilote");
    expect(kept.titleSource).toBe("PILOT");
    expect(kept.creationRevision).toBe(before.creationRevision);

    const replay = await renamePreparation({
      pilotId, preparationId: prep.id, title: "Titre du pilote", expectedRevision: 1, intentionKey: "manual-key1",
    });
    expect(replay.changed).toBe(false);
    expect(replay.revision).toBe(2);

    await expect(renamePreparation({
      pilotId, preparationId: prep.id, title: "Autre", expectedRevision: 2, intentionKey: "manual-key1",
    })).rejects.toBeInstanceOf(StudioError);
  });

  it("projects the title and refuses a rename after attachment", async () => {
    const pilotId = await seedPilot("attach");
    const prep = await openOrCreatePreparation(pilotId);
    await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-a", suggested: "Préparation visible",
    });
    const board = await loadPersonalBoard(pilotId, { scope: "current", filter: "all", query: "" });
    expect(board.items.some((item) => item.id === prep.id && item.label === "Préparation visible")).toBe(true);

    await updatePreview(pilotId, prep.id, "Nom officiel", "résumé");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    const created = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "Nom officiel",
      previewSummary: "résumé",
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    await expect(renamePreparation({
      pilotId, preparationId: prep.id, title: "Après rattachement", expectedRevision: 1, intentionKey: "after-attach",
    })).rejects.toMatchObject({ code: "CONFLICT" });
    const project = (await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId)))[0];
    expect(project.name).toBe("Nom officiel");
    expect(project.id).toBe(created.status === "CREATED" ? created.projectId : "");
    const links = await db.select().from(preparationProjectLinks).where(eq(preparationProjectLinks.preparationId, prep.id));
    expect(links).toHaveLength(1);
    const after = await loadPersonalBoard(pilotId, { scope: "current", filter: "preparations", query: "" });
    expect(after.items.some((item) => item.id === prep.id)).toBe(false);
  });

  it("renames a project without changing its identity and keeps the name unique", async () => {
    const pilotId = await seedPilot("names");
    const otherPilot = await seedPilot("other");
    const first = newId("proj");
    const second = newId("proj");
    const foreign = newId("proj");
    await db.insert(projects).values([
      { id: first, ownerPilotId: pilotId, name: "Projet alpha" },
      { id: second, ownerPilotId: pilotId, name: "Projet bêta" },
      { id: foreign, ownerPilotId: otherPilot, name: "Projet alpha" },
    ]);
    const renamed = await renameProject({
      pilotId, projectId: first, name: "  Projet   révisé ", expectedRevision: 0, intentionKey: "name-key-1",
    });
    expect(renamed).toMatchObject({ label: "Projet révisé", revision: 1, changed: true });
    const row = (await db.select().from(projects).where(eq(projects.id, first)))[0];
    expect(row.id).toBe(first);
    expect(row.ownerPilotId).toBe(pilotId);

    const same = await renameProject({
      pilotId, projectId: first, name: "projet révisé", expectedRevision: 1, intentionKey: "name-key-2",
    });
    expect(same.changed).toBe(false);
    expect(same.revision).toBe(1);

    await expect(renameProject({
      pilotId, projectId: second, name: "PROJET RÉVISÉ", expectedRevision: 0, intentionKey: "name-key-3",
    })).rejects.toMatchObject({ code: "CONFLICT" });
    await expect(renameProject({
      pilotId, projectId: second, name: "Projet bêta", expectedRevision: 4, intentionKey: "name-key-4",
    })).rejects.toMatchObject({ code: "CONFLICT" });

    const foreignRename = await renameProject({
      pilotId: otherPilot, projectId: foreign, name: "Projet révisé", expectedRevision: 0, intentionKey: "name-key-5",
    });
    expect(foreignRename.changed).toBe(true);

    const accent = await renameProject({
      pilotId, projectId: second, name: "Ete", expectedRevision: 0, intentionKey: "name-key-6",
    });
    expect(accent.label).toBe("Ete");
    const distinct = await renameProject({
      pilotId, projectId: first, name: "Été", expectedRevision: 1, intentionKey: "name-key-7",
    });
    expect(distinct.label).toBe("Été");
  });
});
