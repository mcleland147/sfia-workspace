import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { knowledgeOpenPoints, pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  ensureSubject,
  maybeCapitalizeFromExchange,
  openPoint,
} from "@/domains/knowledge/service";
import { listProjectKnowledge, resolveOpenPointFactually } from "@/domains/knowledge/journal";
import { savePreparationDocument } from "@/domains/document/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { getOwnedProjectContext } from "@/domains/preparation/project-context";
import { openKnowledgePoints } from "@/domains/preparation/project-activity-projection";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedLinkedProject(pilotId: string, name: string) {
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, name, "ML5 continuity");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "ML5 continuity",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`project create failed: ${created.status}`);
  }
  return { prep, projectId: created.projectId! };
}

describe("ML5 continuity raccordement (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("B.2 — single capitalisation creates parent and child without pre-created parent", async () => {
    const pilotId = await seedPilot("ML5-batch-parent-child");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Hiérarchie batch");

    const gen = newId("gen");
    const cap = await maybeCapitalizeFromExchange(pilotId, prep.id, {
      userText: "On structure le planning et les créneaux.",
      assistantText: "Je crée le thème parent et le sous-thème.",
      generationId: gen,
      userMessageId: newId("msg"),
      proposals: [
        {
          intentId: "subj-parent-plan",
          kind: "SUBJECT",
          statement:
            "Cadre de planification des interventions terrain, calendrier et priorités opérationnelles.",
          epistemic: "established",
          subjectTitle: "Planning intervention",
          continuityReason: "nouveau thème",
        },
        {
          intentId: "subj-child-slots",
          kind: "SUBJECT",
          statement:
            "Organisation des créneaux horaires et contraintes de déplacement sur le terrain.",
          epistemic: "established",
          subjectTitle: "Créneaux terrain",
          parentSubjectId: "Planning intervention",
          continuityReason: "approfondissement naturel",
        },
      ],
    });
    expect(
      cap.capitalisations.filter((c) => c.kind === "subject" && c.status === "AVAILABLE"),
    ).toHaveLength(2);

    const bundle = await listProjectKnowledge(pilotId, projectId);
    const parent = bundle.subjects.find((s) => s.title === "Planning intervention");
    const child = bundle.subjects.find((s) => s.title === "Créneaux terrain");
    expect(parent?.id).toBeTruthy();
    expect(child?.parentSubjectId).toBe(parent?.id);
  });

  it("B.2 — maybeCapitalizeFromExchange persists child subject with parentSubjectId", async () => {
    const pilotId = await seedPilot("ML5-parent-cap");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Hiérarchie");
    const parent = await ensureSubject(pilotId, prep.id, "Planning intervention");
    expect(parent.subjectId).toBeTruthy();

    const gen = newId("gen");
    const cap = await maybeCapitalizeFromExchange(pilotId, prep.id, {
      userText: "On précise les créneaux horaires.",
      assistantText: "Je structure les contraintes sous le planning.",
      generationId: gen,
      userMessageId: newId("msg"),
      proposals: [
        {
          intentId: "sub-child",
          kind: "SUBJECT",
          statement:
            "Organisation des créneaux horaires et contraintes de déplacement sur le terrain.",
          epistemic: "established",
          subjectTitle: "Créneaux terrain",
          parentSubjectId: parent.subjectId!,
          continuityReason: "approfondissement naturel",
        },
      ],
    });
    expect(cap.capitalisations.some((c) => c.kind === "subject" && c.status === "AVAILABLE")).toBe(
      true,
    );

    const bundle = await listProjectKnowledge(pilotId, projectId);
    const child = bundle.subjects.find((s) => s.title === "Créneaux terrain");
    expect(child?.parentSubjectId).toBe(parent.subjectId);
  });

  it("B.2 — same-turn parent+child via parent title ref (no pre-created parent)", async () => {
    const pilotId = await seedPilot("ML5-same-turn-hier");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Hiérarchie même tour");

    const gen = newId("gen");
    const cap = await maybeCapitalizeFromExchange(pilotId, prep.id, {
      userText: "Structurons la gestion des interventions et la planification.",
      assistantText: "Je propose un thème parent et un sous-thème planification.",
      generationId: gen,
      userMessageId: newId("msg"),
      assistantMessageId: newId("msg"),
      proposals: [
        {
          intentId: "child-first",
          kind: "SUBJECT",
          statement:
            "Règles de planification, conflits de créneaux et replanification des interventions.",
          epistemic: "established",
          subjectTitle: "Planification",
          parentSubjectId: "Gestion des interventions",
          continuityReason: "sous-thème naturel du thème structurant",
        },
        {
          intentId: "parent-second",
          kind: "SUBJECT",
          statement:
            "Organisation globale du cycle de vie des interventions terrain et atelier.",
          epistemic: "established",
          subjectTitle: "Gestion des interventions",
          continuityReason: "thème structurant émergent",
        },
      ],
    });

    expect(cap.ownershipLost).toBe(false);
    const availableSubjects = cap.capitalisations.filter(
      (c) => c.kind === "subject" && c.status === "AVAILABLE",
    );
    expect(availableSubjects.length).toBeGreaterThanOrEqual(2);

    const bundle = await listProjectKnowledge(pilotId, projectId);
    const parent = bundle.subjects.find((s) => s.title === "Gestion des interventions");
    const child = bundle.subjects.find((s) => s.title === "Planification");
    expect(parent?.id).toBeTruthy();
    expect(child?.parentSubjectId).toBe(parent?.id);
  });

  it("B.2 — same-turn parent+child via parent intent id ref", async () => {
    const pilotId = await seedPilot("ML5-same-turn-intent");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Hiérarchie intent");

    const cap = await maybeCapitalizeFromExchange(pilotId, prep.id, {
      userText: "Techniciens et habilitations.",
      assistantText: "Je structure le thème et le sous-thème.",
      generationId: newId("gen"),
      userMessageId: newId("msg"),
      proposals: [
        {
          intentId: "intent-parent",
          kind: "SUBJECT",
          statement: "Organisation des techniciens, rôles et responsabilités terrain.",
          epistemic: "established",
          subjectTitle: "Gestion des techniciens",
          continuityReason: "thème structurant",
        },
        {
          intentId: "intent-child",
          kind: "SUBJECT",
          statement: "Habilitations obligatoires avant affectation d'une intervention.",
          epistemic: "established",
          subjectTitle: "Habilitations",
          parentSubjectId: "intent-parent",
          continuityReason: "sous-thème",
        },
      ],
    });

    const bundle = await listProjectKnowledge(pilotId, projectId);
    const parent = bundle.subjects.find((s) => s.title === "Gestion des techniciens");
    const child = bundle.subjects.find((s) => s.title === "Habilitations");
    expect(cap.capitalisations.some((c) => c.status === "FAILED")).toBe(false);
    expect(child?.parentSubjectId).toBe(parent?.id);
  });

  it("B.2 — rejects inter-project parent id", async () => {
    const pilotA = await seedPilot("ML5-hier-iso-a");
    const pilotB = await seedPilot("ML5-hier-iso-b");
    const { prep: prepA } = await seedLinkedProject(pilotA, "Projet A");
    const { prep: prepB, projectId: projectB } = await seedLinkedProject(pilotB, "Projet B");
    const foreign = await ensureSubject(pilotA, prepA.id, "Sujet étranger");
    expect(foreign.subjectId).toBeTruthy();

    const cap = await maybeCapitalizeFromExchange(pilotB, prepB.id, {
      userText: "Sous-sujet",
      assistantText: "Tentative de rattachement interprojet.",
      generationId: newId("gen"),
      userMessageId: newId("msg"),
      proposals: [
        {
          intentId: "bad-child",
          kind: "SUBJECT",
          statement: "Tentative de rattachement vers un parent d'un autre projet.",
          epistemic: "established",
          subjectTitle: "Enfant isolé",
          parentSubjectId: foreign.subjectId!,
          continuityReason: "test isolation",
        },
      ],
    });

    expect(cap.capitalisations.some((c) => c.status === "FAILED")).toBe(true);
    const bundle = await listProjectKnowledge(pilotB, projectB);
    expect(bundle.subjects.find((s) => s.title === "Enfant isolé")).toBeFalsy();
  });

  it("B.4/B.8 — resolved open point drops from activity and aside population", async () => {
    const pilotId = await seedPilot("ML5-op-resolve");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Points");
    const subj = await ensureSubject(pilotId, prep.id, "Git");
    const pt = await openPoint(pilotId, prep.id, {
      statement: "Quelle branche pour le déploiement ?",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-1" },
    });
    expect(pt.status).toBe("AVAILABLE");

    const beforeCtx = await getOwnedProjectContext(pilotId, projectId);
    expect(beforeCtx.activity.openPointsCount).toBe(1);
    expect(openKnowledgePoints(beforeCtx.knowledge.openPoints)).toHaveLength(1);

    const doc = await savePreparationDocument(
      pilotId,
      prep.id,
      "Preuve branche",
      "# preuve\nBranche `main` documentée.",
      undefined,
      { correlationKey: `proof-${pt.openPointId}`, provenance: { sourceKind: "pilot" } },
    );
    expect(doc.status).toBe("AVAILABLE");
    const revisionId = "revisionId" in doc ? String(doc.revisionId) : "";

    const resolved = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
      reason: "Branche confirmée dans la doc",
      provenance: { sourceKind: "revision", sourceId: revisionId, epistemic: "established" },
      operationId: newId("resolve"),
    });
    expect(resolved.status).toBe("AVAILABLE");

    const row = (
      await db.select().from(knowledgeOpenPoints).where(eq(knowledgeOpenPoints.id, pt.openPointId!))
    )[0];
    expect(row.status).toBe("RESOLVED");

    const afterCtx = await getOwnedProjectContext(pilotId, projectId);
    expect(afterCtx.activity.openPointsCount).toBe(0);
    expect(openKnowledgePoints(afterCtx.knowledge.openPoints)).toHaveLength(0);
  });
});