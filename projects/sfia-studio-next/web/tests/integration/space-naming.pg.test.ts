import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { pilots, preparations, projects, preparationProjectLinks, conversations, conversationTurnCommands } from "@/db/schema";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
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

async function attestTurn(input: {
  pilotId: string;
  preparationId: string;
  title?: string;
  status?: string;
  projectId?: string | null;
}) {
  const conversationId = newId("conv");
  const commandId = newId("tcmd");
  await db.insert(conversations).values({
    id: conversationId,
    preparationId: input.preparationId,
    projectId: input.projectId ?? null,
    ownerPilotId: input.pilotId,
  });
  await db.insert(conversationTurnCommands).values({
    id: commandId,
    conversationId,
    ownerPilotId: input.pilotId,
    clientTurnKey: `key-${commandId}`,
    requestFingerprint: "fp-title",
    operationId: newId("op"),
    status: input.status ?? "COMPLETE",
    resultJson: JSON.stringify({
      semanticQualification: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        ...(input.title !== undefined ? { suggestedPreparationTitle: input.title } : {}),
      },
    }),
  });
  return commandId;
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

    const attested = await attestTurn({
      pilotId, preparationId: prep.id, title: "  Analyse   documentaire ",
    });
    const applied = await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: attested, suggested: "  Analyse   documentaire ",
    });
    expect(applied.applied).toBe(true);
    expect((await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-3", suggested: "Autre sujet",
    })).applied).toBe(false);

    const titled = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    expect(titled.title).toBe("Analyse documentaire");
    expect(titled.titleSource).toBe("NORA");
    expect(titled.titleRevision).toBe(1);
    expect(titled.titleSourceTurnId).toBe(attested);
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
    const attested = await attestTurn({ pilotId, preparationId: prep.id, title: "Préparation visible" });
    await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: attested, suggested: "Préparation visible",
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

  it("accepts only a complete turn that proposed this title for this preparation", async () => {
    const pilotId = await seedPilot("proof");
    const other = await seedPilot("proof-other");
    const prep = await openOrCreatePreparation(pilotId);
    const elsewhere = await openOrCreatePreparation(pilotId);
    expect((await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: "turn-missing", suggested: "Titre absent",
    })).applied).toBe(false);

    const running = await attestTurn({ pilotId, preparationId: prep.id, title: "Titre course", status: "RUNNING" });
    expect((await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: running, suggested: "Titre course",
    })).applied).toBe(false);
    const failed = await attestTurn({ pilotId, preparationId: prep.id, title: "Titre échec", status: "FAILED" });
    expect((await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: failed, suggested: "Titre échec",
    })).applied).toBe(false);

    const foreign = await attestTurn({ pilotId: other, preparationId: prep.id, title: "Titre étranger" });
    expect((await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: foreign, suggested: "Titre étranger",
    })).applied).toBe(false);
    const otherPrep = await attestTurn({ pilotId, preparationId: elsewhere.id, title: "Autre préparation" });
    expect((await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: otherPrep, suggested: "Autre préparation",
    })).applied).toBe(false);
    const mismatched = await attestTurn({ pilotId, preparationId: prep.id, title: "Titre attesté" });
    expect((await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: mismatched, suggested: "Titre différent",
    })).applied).toBe(false);

    const matching = await attestTurn({ pilotId, preparationId: prep.id, title: "Titre attesté" });
    expect((await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: matching, suggested: "Titre attesté",
    })).applied).toBe(true);
    expect((await applyFirstPreparationTitle({
      pilotId, preparationId: prep.id, turnCommandId: matching, suggested: "Titre attesté",
    })).applied).toBe(false);

    const adopted = await renamePreparation({
      pilotId, preparationId: prep.id, title: "Titre attesté", expectedRevision: 1, intentionKey: "adopt-key1",
    });
    expect(adopted).toMatchObject({ changed: true, revision: 2, label: "Titre attesté" });
    const source = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    expect(source.titleSource).toBe("PILOT");
  });

  it("serializes concurrent names and does not let a late intention overwrite a newer one", async () => {
    const pilotId = await seedPilot("race");
    const existing = newId("proj");
    const left = newId("proj");
    const right = newId("proj");
    await db.insert(projects).values([
      { id: existing, ownerPilotId: pilotId, name: "Ancien stable" },
      { id: left, ownerPilotId: pilotId, name: "Gauche" },
      { id: right, ownerPilotId: pilotId, name: "Droite" },
    ]);
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "Nom disputé", "résumé");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
    const raced = await Promise.allSettled([
      createProjectCommand({
        pilotId,
        preparationId: prep.id,
        expectedCreationRevision: refreshed.creationRevision,
        projectName: "Nom disputé",
        previewSummary: "résumé",
        idempotencyKey: newId("idem"),
      }),
      renameProject({
        pilotId, projectId: existing, name: "Nom disputé", expectedRevision: 0, intentionKey: "race-create1",
      }),
    ]);
    const named = await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId));
    expect(named.filter((row) => row.name === "Nom disputé")).toHaveLength(1);
    expect(raced.filter((item) => item.status === "fulfilled")).toHaveLength(1);

    const pair = await Promise.allSettled([
      renameProject({ pilotId, projectId: left, name: "Nom commun", expectedRevision: 0, intentionKey: "race-left01" }),
      renameProject({ pilotId, projectId: right, name: "Nom commun", expectedRevision: 0, intentionKey: "race-right1" }),
    ]);
    expect(pair.filter((item) => item.status === "fulfilled")).toHaveLength(1);
    const shared = await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId));
    expect(shared.filter((row) => row.name === "Nom commun")).toHaveLength(1);

    const leftNow = (await db.select().from(projects).where(eq(projects.id, left)))[0];
    const same = await Promise.allSettled([
      renameProject({ pilotId, projectId: left, name: "Alpha course", expectedRevision: leftNow.nameRevision, intentionKey: "race-alpha1" }),
      renameProject({ pilotId, projectId: left, name: "Bêta course", expectedRevision: leftNow.nameRevision, intentionKey: "race-beta01" }),
    ]);
    expect(same.filter((item) => item.status === "fulfilled")).toHaveLength(1);
    const winner = (await db.select().from(projects).where(eq(projects.id, left)))[0];
    expect(["Alpha course", "Bêta course"]).toContain(winner.name);
    expect(winner.nameRevision).toBe(leftNow.nameRevision + 1);

    const rightNow = (await db.select().from(projects).where(eq(projects.id, right)))[0];
    const firstWrite = await renameProject({
      pilotId, projectId: right, name: "Premier", expectedRevision: rightNow.nameRevision, intentionKey: "late-first1",
    });
    await renameProject({
      pilotId, projectId: right, name: "Second", expectedRevision: firstWrite.revision, intentionKey: "late-second",
    });
    await expect(renameProject({
      pilotId, projectId: right, name: "Premier", expectedRevision: firstWrite.revision, intentionKey: "late-first1",
    })).rejects.toMatchObject({ code: "CONFLICT" });
    const kept = (await db.select().from(projects).where(eq(projects.id, right)))[0];
    expect(kept.name).toBe("Second");

    const titled = await attestTurn({ pilotId, preparationId: prep.id, title: "Titre Nora" });
    const manualPrep = await openOrCreatePreparation(pilotId);
    const manualTurn = await attestTurn({ pilotId, preparationId: manualPrep.id, title: "Titre Nora" });
    const titleRace = await Promise.allSettled([
      applyFirstPreparationTitle({
        pilotId, preparationId: manualPrep.id, turnCommandId: manualTurn, suggested: "Titre Nora",
      }),
      renamePreparation({
        pilotId, preparationId: manualPrep.id, title: "Titre manuel", expectedRevision: 0, intentionKey: "race-manual",
      }),
    ]);
    const manualRow = (await db.select().from(preparations).where(eq(preparations.id, manualPrep.id)))[0];
    expect(["NORA", "PILOT"]).toContain(manualRow.titleSource);
    expect(titleRace.filter((item) => item.status === "rejected").length).toBeLessThanOrEqual(1);
    if (manualRow.titleSource === "PILOT") expect(manualRow.title).toBe("Titre manuel");
    if (manualRow.titleSource === "NORA") expect(manualRow.title).toBe("Titre Nora");

    const attachPrep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, attachPrep.id, "Projet attaché", "résumé");
    const attachRevision = (await db.select().from(preparations).where(eq(preparations.id, attachPrep.id)))[0];
    const attachTurn = await attestTurn({ pilotId, preparationId: attachPrep.id, title: "Avant rattachement" });
    await Promise.allSettled([
      applyFirstPreparationTitle({
        pilotId, preparationId: attachPrep.id, turnCommandId: attachTurn, suggested: "Avant rattachement",
      }),
      createProjectCommand({
        pilotId,
        preparationId: attachPrep.id,
        expectedCreationRevision: attachRevision.creationRevision,
        projectName: "Projet attaché",
        previewSummary: "résumé",
        idempotencyKey: newId("idem"),
      }),
    ]);
    const links = await db.select().from(preparationProjectLinks).where(eq(preparationProjectLinks.preparationId, attachPrep.id));
    expect(links).toHaveLength(1);
    const attachedProject = (await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId)))
      .find((row) => row.name === "Projet attaché");
    expect(attachedProject?.id).toBeTruthy();
    expect(titled).toBeTruthy();
  });
});
