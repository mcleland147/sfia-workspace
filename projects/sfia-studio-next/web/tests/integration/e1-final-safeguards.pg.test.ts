/**
 * E1 final — merge tree integrity + USER_MESSAGE forecast admission.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { knowledgeSubjects, pilots, preparations, trajectoryRevisions } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  capitalizeAcquis,
  ensureSubject,
  mergeSubjects,
} from "@/domains/knowledge/service";
import { openOrCreatePreparation, updatePreview, getPreparationContext } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import {
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { applyConversationalAuthority } from "@/domains/pilotage/conversation-authority";
import {
  executePilotageCommand,
  getPilotageProjection,
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
  await updatePreview(pilotId, prep.id, label, "e1-final");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "e1-final",
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

describe("E1 final safeguards — merge tree + forecast admission", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
  });

  it("merge reparents ACTIVE children of absorbed source onto target", async () => {
    const world = await seedWorld(`e1f-merge-child-${Date.now()}`);
    const target = await ensureSubject(world.pilotId, world.preparationId, "Parc campus");
    const source = await ensureSubject(world.pilotId, world.preparationId, "Parc satellites");
    const child = await ensureSubject(
      world.pilotId,
      world.preparationId,
      "Salle serveur satellite",
      source.subjectId!,
    );
    expect(child.status).toBe("AVAILABLE");
    await capitalizeAcquis(world.pilotId, world.preparationId, {
      statement: "Le satellite dispose de trois baies actives recensées",
      subjectId: source.subjectId!,
      provenance: { sourceKind: "pilot", epistemic: "observed" },
    });
    await capitalizeAcquis(world.pilotId, world.preparationId, {
      statement: "La salle serveur satellite reste climatisée en permanence",
      subjectId: child.subjectId!,
      provenance: { sourceKind: "pilot", epistemic: "observed" },
    });

    const merged = await mergeSubjects(
      world.pilotId,
      world.preparationId,
      target.subjectId!,
      source.subjectId!,
    );
    expect(merged.status).toBe("AVAILABLE");
    if (merged.status !== "AVAILABLE") throw new Error("expected AVAILABLE");
    expect(merged.reparentedChildIds).toContain(child.subjectId!);

    const sourceRow = (
      await db
        .select()
        .from(knowledgeSubjects)
        .where(eq(knowledgeSubjects.id, source.subjectId!))
        .limit(1)
    )[0];
    expect(sourceRow.status).toBe("MERGED");

    const childRow = (
      await db
        .select()
        .from(knowledgeSubjects)
        .where(eq(knowledgeSubjects.id, child.subjectId!))
        .limit(1)
    )[0];
    expect(childRow.status).toBe("ACTIVE");
    expect(childRow.parentSubjectId).toBe(target.subjectId!);
  });

  it("merge refuses absorbing an ancestor into its descendant (cycle)", async () => {
    const world = await seedWorld(`e1f-merge-cycle-${Date.now()}`);
    const parent = await ensureSubject(world.pilotId, world.preparationId, "Racine incidents");
    const child = await ensureSubject(
      world.pilotId,
      world.preparationId,
      "Sous-arbre incidents",
      parent.subjectId!,
    );
    const refused = await mergeSubjects(
      world.pilotId,
      world.preparationId,
      child.subjectId!,
      parent.subjectId!,
    );
    expect(refused.status).toBe("FAILED");
    if (refused.status !== "FAILED") throw new Error("expected FAILED");
    expect(refused.reason).toBe("CYCLE_OR_INVALID_TREE");

    const parentRow = (
      await db
        .select()
        .from(knowledgeSubjects)
        .where(eq(knowledgeSubjects.id, parent.subjectId!))
        .limit(1)
    )[0];
    expect(parentRow.status).toBe("ACTIVE");
  });

  it("USER_MESSAGE rejects client body.forecastJson (durable absent)", async () => {
    const world = await seedWorld(`e1f-fc-body-${Date.now()}`);
    const content = "Propose une trajectoire avec UX avant QA.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "propose",
      intents: [
        {
          id: "i-propose-no-fc",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "UX avant validation",
          parameters: { pilotageOperation: "PROPOSE_TRAJECTORY" as const },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Proposition.",
    };
    const reserved = await reserveTurnCommand({
      conversationId: world.conversationId,
      ownerPilotId: world.pilotId,
      clientTurnKey: `fc-body-${newId("ctk")}`,
      content,
    });
    if (reserved.kind !== "fresh") throw new Error(`reserve ${reserved.kind}`);
    await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      qualificationJson: JSON.stringify(qual),
    });

    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const rejected = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: reserved.userMessageId,
      operation: "PROPOSE_TRAJECTORY",
      forecastJson: [
        {
          order: 1,
          cycleType: "UX_UI",
          rationale: "client forgery",
          certainty: "QUALIFIED",
        },
      ],
    });
    expect(rejected.status).toBe("REJECTED");
    expect(String(rejected.reason ?? "")).toMatch(/forecastJson|qualification durable/i);

    const forged = await db
      .select()
      .from(trajectoryRevisions)
      .where(eq(trajectoryRevisions.projectId, world.projectId));
    expect(forged).toHaveLength(0);
  });

  it("USER_MESSAGE durable forecastSteps persist; client body cannot replace them", async () => {
    const world = await seedWorld(`e1f-fc-dur-${Date.now()}`);
    const content = "Je préfère les maquettes avant la validation.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "propose",
      intents: [
        {
          id: "i-propose-dur",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "Maquettes avant validation",
          parameters: {
            pilotageOperation: "PROPOSE_TRAJECTORY" as const,
            forecastSteps: [
              {
                order: 1,
                cycleType: "UX_UI",
                rationale: "Maquettes",
                certainty: "QUALIFIED" as const,
              },
              {
                order: 2,
                cycleType: "QA_VALIDATION",
                rationale: "Validation",
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
      replyDraft: "OK.",
    };
    const reserved = await reserveTurnCommand({
      conversationId: world.conversationId,
      ownerPilotId: world.pilotId,
      clientTurnKey: `fc-dur-${newId("ctk")}`,
      content,
    });
    if (reserved.kind !== "fresh") throw new Error(`reserve ${reserved.kind}`);
    await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      qualificationJson: JSON.stringify(qual),
    });

    // Direct execute with USER_MESSAGE + body.forecastJson contradictory → must reject.
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const rejected = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: reserved.userMessageId,
      operation: "PROPOSE_TRAJECTORY",
      forecastJson: [
        {
          order: 1,
          cycleType: "BACKLOG",
          rationale: "forged",
          certainty: "QUALIFIED",
        },
      ],
    });
    expect(rejected.status).toBe("REJECTED");
    expect(String(rejected.reason ?? "")).toMatch(/forecastJson|qualification durable/i);

    // Conversational authority without body forecast — durable steps persist.
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: reserved.userMessageId,
      content,
      clientTurnKey: reserved.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "PROPOSE_TRAJECTORY",
        objective: "Maquettes avant validation",
        statement: "Maquettes avant validation",
        semanticIntentId: "i-propose-dur",
      }),
    });
    expect(outcome.command?.status).toBe("APPLIED");
    const proj = await getPilotageProjection(world.pilotId, world.projectId);
    expect(proj.trajectory.proposed?.forecastSteps?.map((s) => s.cycleType)).toEqual([
      "UX_UI",
      "QA_VALIDATION",
    ]);
  });

  it("direct EXPLICIT_INTERACTION forecastJson remains admitted", async () => {
    const world = await seedWorld(`e1f-fc-direct-${Date.now()}`);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const applied = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "PROPOSE_TRAJECTORY",
      orientation: "Trajectoire directe légitime",
      forecastJson: [
        {
          order: 1,
          cycleType: "CADRAGE",
          rationale: "Cadrer",
          certainty: "QUALIFIED",
        },
      ],
    });
    expect(applied.status).toBe("APPLIED");
    const proj = await getPilotageProjection(world.pilotId, world.projectId);
    expect(proj.trajectory.proposed?.forecastSteps?.[0]?.cycleType).toBe("CADRAGE");

    const rows = await db
      .select()
      .from(trajectoryRevisions)
      .where(
        and(
          eq(trajectoryRevisions.projectId, world.projectId),
          eq(trajectoryRevisions.status, "PROPOSED"),
        ),
      );
    expect(rows).toHaveLength(1);
  });
});
