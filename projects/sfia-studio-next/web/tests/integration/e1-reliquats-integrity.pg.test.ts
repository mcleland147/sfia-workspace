/**
 * E1 complément — E1-REL-01/02/04/05 deterministic integrity proofs.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  knowledgeAcquis,
  knowledgeOpenPoints,
  knowledgeSubjects,
  pilots,
  preparations,
  trajectoryRevisions,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  capitalizeAcquis,
  ensureSubject,
  maybeCapitalizeFromExchange,
  openPoint,
} from "@/domains/knowledge/service";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { getPreparationContext } from "@/domains/preparation/service";
import { openPointShortTitle } from "@/domains/preparation/project-activity-projection";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import {
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { applyConversationalAuthority } from "@/domains/pilotage/conversation-authority";
import {
  getPilotageProjection,
  retainTrajectory,
} from "@/domains/pilotage/service";
import { clearPilotagePreQualified } from "../helpers/semantic-fixture-envelopes";

async function seedWorld(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "e1-reliquats");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "e1-reliquats",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`create failed: ${created.status}`);
  }
  const ctx = await getPreparationContext(pilotId, prep.id);
  return {
    pilotId,
    preparationId: prep.id,
    projectId: created.projectId!,
    conversationId: ctx.conversation!.id,
  };
}

describe("E1 reliquats — D4 integrity + org + title + forecast", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL?.includes("5433") && !process.env.DATABASE_URL?.includes("sfia_next")) {
      throw new Error("Expected DEV/E2E DATABASE_URL");
    }
  });

  it("E1-REL-02 invalid subjectId does not create or inherit subject", async () => {
    const world = await seedWorld(`e1r-inv-${Date.now()}`);
    const parent = await ensureSubject(world.pilotId, world.preparationId, "Parc informatique");
    expect(parent.status).toBe("AVAILABLE");
    const before = await db
      .select({ id: knowledgeSubjects.id })
      .from(knowledgeSubjects)
      .where(eq(knowledgeSubjects.preparationId, world.preparationId));

    const result = await maybeCapitalizeFromExchange(
      world.pilotId,
      world.preparationId,
      {
        userText: "note",
        assistantText: "ok",
        generationId: newId("gen"),
        userMessageId: newId("msg"),
        proposals: [
          {
            intentId: "i-bad-subj",
            kind: "SUBJECT",
            statement: "Synthèse d'un sujet fantôme qui ne doit pas être créé",
            epistemic: "hypothesized",
            subjectId: "subj_does_not_exist_xyz",
            subjectTitle: "Sujet fantôme",
          },
          {
            intentId: "i-bad-acq",
            kind: "ACQUIS",
            statement: "Cet acquis ne doit pas s'attacher à un sujet précédent",
            epistemic: "hypothesized",
            subjectId: "subj_foreign_other_prep",
          },
        ],
      },
    );

    expect(result.capitalisations.some((c) => c.status === "FAILED")).toBe(true);
    expect(
      result.capitalisations.find((c) => c.kind === "subject")?.reason,
    ).toMatch(/FOREIGN|UNKNOWN/);
    expect(
      result.capitalisations.find((c) => c.kind === "acquis")?.status,
    ).toBe("FAILED");

    const after = await db
      .select({ id: knowledgeSubjects.id })
      .from(knowledgeSubjects)
      .where(eq(knowledgeSubjects.preparationId, world.preparationId));
    expect(after.length).toBe(before.length);

    const acquis = await db
      .select()
      .from(knowledgeAcquis)
      .where(eq(knowledgeAcquis.preparationId, world.preparationId));
    expect(acquis).toHaveLength(0);
  });

  it("E1-REL-01 merge via capitalisation preserves target and absorbs source", async () => {
    const world = await seedWorld(`e1r-merge-${Date.now()}`);
    const a = await ensureSubject(world.pilotId, world.preparationId, "Incidents majeurs");
    const b = await ensureSubject(world.pilotId, world.preparationId, "Incidents mineurs");
    expect(a.status).toBe("AVAILABLE");
    expect(b.status).toBe("AVAILABLE");
    await capitalizeAcquis(world.pilotId, world.preparationId, {
      statement: "Un incident mineur a été enregistré hier soir sur le site A",
      subjectId: b.subjectId!,
      provenance: { sourceKind: "pilot", epistemic: "observed" },
    });

    const result = await maybeCapitalizeFromExchange(
      world.pilotId,
      world.preparationId,
      {
        userText: "fusionne les sujets incidents",
        assistantText: "fusion effectuée",
        generationId: newId("gen"),
        userMessageId: newId("msg"),
        proposals: [
          {
            intentId: "i-merge",
            kind: "SUBJECT",
            statement: "Incidents unifiés — majeurs et mineurs dans le même périmètre",
            epistemic: "hypothesized",
            subjectId: a.subjectId!,
            subjectOrganization: "MERGE",
            mergeSourceSubjectId: b.subjectId!,
          },
        ],
      },
    );

    const merge = result.capitalisations.find((c) => c.kind === "subject_merge");
    expect(merge?.status).toBe("AVAILABLE");

    const source = (
      await db
        .select()
        .from(knowledgeSubjects)
        .where(eq(knowledgeSubjects.id, b.subjectId!))
        .limit(1)
    )[0];
    expect(source?.status).toBe("MERGED");

    const moved = await db
      .select()
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, world.preparationId),
          eq(knowledgeAcquis.subjectId, a.subjectId!),
        ),
      );
    expect(moved.length).toBeGreaterThanOrEqual(1);
  });

  it("E1-REL-04 openPointTitle persisted and preferred by shortTitle helper", async () => {
    const world = await seedWorld(`e1r-title-${Date.now()}`);
    const detailed =
      "Quelles catégories d'interventions nécessitent une validation supplémentaire après le compte rendu du technicien ?";
    const result = await maybeCapitalizeFromExchange(
      world.pilotId,
      world.preparationId,
      {
        userText: detailed,
        assistantText: "point ouvert",
        generationId: newId("gen"),
        userMessageId: newId("msg"),
        proposals: [
          {
            intentId: "i-op",
            kind: "OPEN_POINT",
            statement: detailed,
            epistemic: "limited",
            openPointTitle: "Validation de clôture",
          },
        ],
      },
    );
    const op = result.capitalisations.find((c) => c.kind === "open_point");
    expect(op?.status).toBe("AVAILABLE");
    expect(op?.id).toBeTruthy();

    const row = (
      await db
        .select()
        .from(knowledgeOpenPoints)
        .where(eq(knowledgeOpenPoints.id, op!.id!))
        .limit(1)
    )[0];
    expect(row).toBeTruthy();
    const prov = JSON.parse(row!.provenanceJson) as { canonicalTitle?: string };
    expect(prov.canonicalTitle).toBe("Validation de clôture");
    expect(openPointShortTitle(row!.statement, 72, { provenanceJson: row!.provenanceJson })).toBe(
      "Validation de clôture",
    );
    // Historical fallback without canonical title still works.
    expect(openPointShortTitle(detailed, 40).length).toBeLessThanOrEqual(42);
  });

  it("E1-REL-05 conversational PROPOSE transmits forecastSteps from durable qual", async () => {
    const world = await seedWorld(`e1r-fc-${Date.now()}`);
    const content =
      "Finalement, je préférerais travailler sur les maquettes avant de passer à la validation.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "propose trajectory",
      intents: [
        {
          id: "i-propose-fc",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "Maquettes UX avant validation QA",
          parameters: {
            pilotageOperation: "PROPOSE_TRAJECTORY" as const,
            forecastSteps: [
              {
                order: 1,
                cycleType: "UX_UI",
                rationale: "Maquettes avant validation",
                certainty: "QUALIFIED" as const,
              },
              {
                order: 2,
                cycleType: "QA_VALIDATION",
                rationale: "Validation ensuite",
                certainty: "ENVISIONED" as const,
              },
            ],
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Je propose d'avancer les maquettes avant la validation.",
    };

    const reserved = await reserveTurnCommand({
      conversationId: world.conversationId,
      ownerPilotId: world.pilotId,
      clientTurnKey: `fc-${newId("ctk")}`,
      content,
    });
    if (reserved.kind !== "fresh") throw new Error(`reserve ${reserved.kind}`);
    const stashed = await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      qualificationJson: JSON.stringify(qual),
    });
    if (!stashed.applied) throw new Error("qualification stash failed");

    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: reserved.userMessageId,
      content,
      clientTurnKey: reserved.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "PROPOSE_TRAJECTORY",
        objective: "Maquettes UX avant validation QA",
        statement: "Maquettes UX avant validation QA",
        semanticIntentId: "i-propose-fc",
      }),
    });
    expect(outcome.command?.status).toBe("APPLIED");

    const proj = await getPilotageProjection(world.pilotId, world.projectId);
    expect(proj.trajectory.proposed?.forecastSteps?.map((s) => s.cycleType)).toEqual([
      "UX_UI",
      "QA_VALIDATION",
    ]);

    // RETAIN_VIS — owner retain clears concurrent PROPOSED (forecast copied onto RETAINED).
    const retain = await retainTrajectory(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: proj.revision,
      sourceRef: newId("src"),
      trajectoryRevisionId: proj.trajectory.proposed?.id,
    });
    expect(retain.status).toBe("APPLIED");

    const after = await getPilotageProjection(world.pilotId, world.projectId);
    expect(after.trajectory.retained?.status).toBe("RETAINED");
    expect(after.trajectory.proposed).toBeNull();
    expect(after.trajectory.retained?.forecastSteps?.map((s) => s.cycleType)).toEqual([
      "UX_UI",
      "QA_VALIDATION",
    ]);

    const proposedRows = await db
      .select()
      .from(trajectoryRevisions)
      .where(
        and(
          eq(trajectoryRevisions.projectId, world.projectId),
          eq(trajectoryRevisions.status, "PROPOSED"),
        ),
      );
    expect(proposedRows).toHaveLength(0);
  });

  it("E1-REL-02 subjectId+title conflict refuses acquis write", async () => {
    const world = await seedWorld(`e1r-conflict-${Date.now()}`);
    const s = await ensureSubject(world.pilotId, world.preparationId, "Inventaire campus");
    const result = await maybeCapitalizeFromExchange(
      world.pilotId,
      world.preparationId,
      {
        userText: "x",
        assistantText: "y",
        generationId: newId("gen"),
        userMessageId: newId("msg"),
        proposals: [
          {
            intentId: "i-conflict",
            kind: "ACQUIS",
            statement: "Douze ordinateurs portables sont recensés sur le campus Nova",
            epistemic: "hypothesized",
            subjectId: s.subjectId!,
            subjectTitle: "Titre totalement différent",
          },
        ],
      },
    );
    expect(result.capitalisations[0]?.status).toBe("FAILED");
    expect(result.capitalisations[0]?.reason).toBe("SUBJECT_ID_TITLE_CONFLICT");
  });
});
