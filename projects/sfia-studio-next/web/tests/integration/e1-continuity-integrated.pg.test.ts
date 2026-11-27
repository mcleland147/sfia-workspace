/**
 * E1 — integrated deterministic continuity chain (injected quals, no LIVE).
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  ensureSubject,
  maybeCapitalizeFromExchange,
  openPoint,
} from "@/domains/knowledge/service";
import { listProjectKnowledge, reparentSubject, resolveOpenPointFactually } from "@/domains/knowledge/journal";
import { savePreparationDocument } from "@/domains/document/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { getOwnedProjectContext } from "@/domains/preparation/project-context";
import {
  executePilotageCommand,
  getPilotageProjection,
  retainTrajectory,
} from "@/domains/pilotage/service";
import { applyConversationalAuthority } from "@/domains/pilotage/conversation-authority";
import { reserveTurnCommand, stashTurnQualification } from "@/domains/conversation/turn-command";
import { getPreparationContext } from "@/domains/preparation/service";
import {
  clearPilotagePreQualified,
  d6DecisionEnvelope,
} from "../helpers/semantic-fixture-envelopes";

async function seedWorld(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "e1-integrated");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "e1-integrated",
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

describe("E1 integrated continuity chain (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("hierarchy → knowledge → decision → trajectory → projections → isolation", async () => {
    const world = await seedWorld(`e1-int-${Date.now()}`);

    // 1–2 Same-turn parent + child + acquis + open point
    const cap = await maybeCapitalizeFromExchange(world.pilotId, world.preparationId, {
      userText: "Structurons interventions et planification.",
      assistantText: "Thème parent, sous-thème, acquis et question.",
      generationId: newId("gen"),
      userMessageId: newId("msg"),
      assistantMessageId: newId("msg"),
      proposals: [
        {
          intentId: "parent",
          kind: "SUBJECT",
          statement: "Organisation du cycle de vie des interventions terrain.",
          epistemic: "established",
          subjectTitle: "Gestion des interventions",
          continuityReason: "thème structurant",
        },
        {
          intentId: "child",
          kind: "SUBJECT",
          statement: "Règles de planification et conflits de créneaux.",
          epistemic: "established",
          subjectTitle: "Planification",
          parentSubjectId: "parent",
          continuityReason: "sous-thème",
        },
        {
          intentId: "acq",
          kind: "ACQUIS",
          statement: "Une intervention confirmée ne peut être déplacée que par une autorité habilitée.",
          epistemic: "hypothesized",
          subjectTitle: "Planification",
          continuityReason: "apport Pilote",
        },
        {
          intentId: "op",
          kind: "OPEN_POINT",
          statement: "Qui valide une replanification urgente hors horaires ?",
          epistemic: "hypothesized",
          subjectTitle: "Planification",
          continuityReason: "question ouverte",
        },
      ],
    });
    expect(cap.ownershipLost).toBe(false);
    expect(cap.capitalisations.some((c) => c.status === "FAILED")).toBe(false);

    let bundle = await listProjectKnowledge(world.pilotId, world.projectId);
    const parent = bundle.subjects.find((s) => s.title === "Gestion des interventions");
    const child = bundle.subjects.find((s) => s.title === "Planification");
    expect(child?.parentSubjectId).toBe(parent?.id);
    expect(bundle.openPoints.some((o) => o.status === "OPEN")).toBe(true);

    // 3 Durable decision
    const decisionStatement = "L'habilitation est obligatoire avant toute affectation terrain.";
    const content = `Je décide que ${decisionStatement}`;
    const qual = d6DecisionEnvelope({
      operation: "RECORD_DECISION",
      statement: decisionStatement,
      objectRef: "habilitation",
    });
    const reserved = await reserveTurnCommand({
      ownerPilotId: world.pilotId,
      conversationId: world.conversationId,
      clientTurnKey: `e1-int-${newId("ctk")}`,
      content,
    });
    if (reserved.kind !== "fresh") throw new Error(`expected fresh turn: ${reserved.kind}`);
    const stashed = await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      qualificationJson: JSON.stringify(qual),
    });
    if (!stashed.applied) throw new Error("qualification stash failed");
    const decisionOutcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: reserved.userMessageId,
      content,
      clientTurnKey: reserved.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "RECORD_DECISION",
        statement: decisionStatement,
        objectRef: "habilitation",
        semanticIntentId: qual.intents[0]!.id,
      }),
    });
    expect(decisionOutcome.humanDecisionCreated).toBe(true);

    // 4 Zero proposals → no mutation
    const noop = await maybeCapitalizeFromExchange(world.pilotId, world.preparationId, {
      userText: "Merci.",
      assistantText: "De rien.",
      generationId: newId("gen"),
      userMessageId: newId("msg"),
      proposals: [],
    });
    expect(noop.capitalisations).toHaveLength(0);

    // 5 Resolve open point with verified document revision provenance
    const openId = bundle.openPoints.find((o) => o.status === "OPEN")!.id;
    const doc = await savePreparationDocument(
      world.pilotId,
      world.preparationId,
      "Preuve habilitation",
      "# Habilitation\nRègle documentée pour replanification.",
      undefined,
      { correlationKey: `e1-int-${openId}`, provenance: { sourceKind: "pilot" } },
    );
    expect(doc.status).toBe("AVAILABLE");
    const revisionId = "revisionId" in doc ? String(doc.revisionId) : "";
    const resolved = await resolveOpenPointFactually(world.pilotId, world.projectId, openId, {
      reason: "Règle d'habilitation documentée",
      provenance: { sourceKind: "revision", sourceId: revisionId, epistemic: "established" },
      operationId: newId("resolve"),
    });
    expect(resolved.status).toBe("AVAILABLE");

    // 6 Trajectory propose + retain + open cycle
    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const proposed = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "PROPOSE_TRAJECTORY",
      orientation: "Cadrage puis conception UX avant validation",
    });
    expect(proposed.status).toBe("APPLIED");
    rev = proposed.revision ?? rev + 1;
    const trajId = proposed.effects.find((e) => e.effectKind === "PROPOSE")?.targetRef;
    const retained = await retainTrajectory(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceRef: newId("src"),
      trajectoryRevisionId: trajId,
    });
    expect(retained.status).toBe("APPLIED");
    rev = retained.revision ?? rev + 1;
    const opened = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      objective: "Définir les règles de planification et d'affectation des interventions.",
    });
    expect(opened.status).toBe("APPLIED");

    // 7 Reparent child under a new root sibling
    const sibling = await ensureSubject(world.pilotId, world.preparationId, "Gestion des techniciens");
    const rep = await reparentSubject(
      world.pilotId,
      world.projectId,
      child!.id,
      sibling.subjectId!,
    );
    expect(rep.status).toBe("AVAILABLE");

    // 8 Projections
    const ctx = await getOwnedProjectContext(world.pilotId, world.projectId);
    expect(ctx.activity.openSubjects.count).toBeGreaterThanOrEqual(3);
    expect(ctx.activity.applicableDecisions.count).toBeGreaterThanOrEqual(1);
    expect(ctx.activity.openPointsCount).toBe(0);
    expect(ctx.knowledge.openPoints.every((o) => o.shortTitle)).toBe(true);
    const pilotage = await getPilotageProjection(world.pilotId, world.projectId);
    expect(pilotage.cycle?.status).toBe("ACTIVE");
    expect(pilotage.trajectory.retained?.status).toBe("RETAINED");

    // 9 Isolation
    const other = await seedWorld(`e1-iso-${Date.now()}`);
    const otherBundle = await listProjectKnowledge(other.pilotId, other.projectId);
    expect(otherBundle.subjects.find((s) => s.id === parent!.id)).toBeFalsy();
    const otherCtx = await getOwnedProjectContext(other.pilotId, other.projectId);
    expect(otherCtx.activity.applicableDecisions.count).toBe(0);
  });
});
