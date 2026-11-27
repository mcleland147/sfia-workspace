/**
 * E1 Ensemble Continuity — B.5 (D6) + B.6 (D5) PG proofs via conversational authority.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { businessCommands, humanDecisions, pilots, preparations, projectCycles } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  getPreparationContext,
  openOrCreatePreparation,
  updatePreview,
} from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { applyConversationalAuthority } from "@/domains/pilotage/conversation-authority";
import {
  executePilotageCommand,
  getPilotageProjection,
  retainTrajectory,
} from "@/domains/pilotage/service";
import { getOwnedProjectContext } from "@/domains/preparation/project-context";
import { listDecisionJournal } from "@/domains/decisions/service";
import { displayableCycleObjective } from "@/domains/pilotage/cycle-objective-display";
import {
  clearPilotagePreQualified,
  d6DecisionEnvelope,
  dialogueEnvelope,
} from "../helpers/semantic-fixture-envelopes";

async function seedOwnedProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "e1-b5-b6");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "e1-b5-b6",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`setup: createProject ${created.status}`);
  }
  const ctx = await getPreparationContext(pilotId, prep.id);
  if (!ctx.project?.id || !ctx.conversation?.id) throw new Error("setup: missing project");
  return {
    pilotId,
    preparationId: prep.id,
    projectId: created.projectId!,
    conversationId: ctx.conversation.id,
  };
}

async function seedQualifiedMessage(
  world: { pilotId: string; conversationId: string; projectId: string },
  content: string,
  qual: Record<string, unknown>,
) {
  const reserved = await reserveTurnCommand({
    conversationId: world.conversationId,
    ownerPilotId: world.pilotId,
    clientTurnKey: `e1-${newId("ctk")}`,
    content,
  });
  if (reserved.kind !== "fresh") throw new Error(`expected fresh turn: ${reserved.kind}`);
  const stashed = await stashTurnQualification({
    commandId: reserved.commandId,
    ownerToken: reserved.ownerToken,
    qualificationJson: JSON.stringify(qual),
  });
  if (!stashed.applied) throw new Error("qualification stash failed");
  return {
    userMessageId: reserved.userMessageId,
    clientTurnKey: reserved.clientTurnKey,
  };
}

async function countRecordDecisions(projectId: string, state?: string) {
  const rows = await db
    .select()
    .from(humanDecisions)
    .where(
      state
        ? and(
            eq(humanDecisions.projectId, projectId),
            eq(humanDecisions.kind, "RECORD_DECISION"),
            eq(humanDecisions.state, state),
          )
        : and(eq(humanDecisions.projectId, projectId), eq(humanDecisions.kind, "RECORD_DECISION")),
    );
  return rows;
}

describe("E1 B.5/B.6 — ensemble continuity (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
  });

  it("B.5 durable human act → single APPLICABLE RECORD_DECISION", async () => {
    const world = await seedOwnedProject(`e1-b5-record-${Date.now()}`);
    const content = "Je décide que GitHub est obligatoire pour ce projet.";
    const qual = d6DecisionEnvelope({
      operation: "RECORD_DECISION",
      statement: "GitHub est obligatoire pour ce projet.",
      objectRef: "github",
    });
    const msg = await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "RECORD_DECISION",
        statement: "GitHub est obligatoire pour ce projet.",
        objectRef: "github",
        semanticIntentId: qual.intents[0]!.id,
      }),
    });
    expect(outcome.attempted).toBe(true);
    expect(outcome.humanDecisionCreated).toBe(true);
    expect(outcome.command?.status).toBe("APPLIED");
    const applicable = await countRecordDecisions(world.projectId, "APPLICABLE");
    expect(applicable).toHaveLength(1);
    const ctx = await getOwnedProjectContext(world.pilotId, world.projectId);
    expect(ctx.activity.applicableDecisions.count).toBeGreaterThanOrEqual(1);
  });

  it("B.5 dialogue-only recommendation → no HumanDecision", async () => {
    const world = await seedOwnedProject(`e1-b5-norec-${Date.now()}`);
    const content = "Explique les options sans décider pour moi.";
    const qual = dialogueEnvelope(
      content,
      "Voici une recommandation conditionnelle — pas une décision.",
      ["NO_EFFECT"],
    );
    const msg = await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: { clarity: "NONE", reason: "NO_SEMANTIC_PILOTAGE_QUALIFICATION" },
    });
    expect(outcome.attempted).toBe(false);
    expect(outcome.humanDecisionCreated).toBe(false);
    expect(await countRecordDecisions(world.projectId)).toHaveLength(0);
    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, world.projectId));
    expect(cmds).toHaveLength(0);
  });

  it("B.5 ambiguous qualification → clarification_only, no decision", async () => {
    const world = await seedOwnedProject(`e1-b5-ambig-${Date.now()}`);
    const content = "OK";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "NEEDS_CLARIFICATION" as const,
      goal: "ok",
      intents: [],
      clarifications: ["OK seul — précisez l'acte attendu."],
      replyDraft: "Que souhaitez-vous confirmer ?",
    };
    await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: newId("msg"),
      content,
      clientTurnKey: `ambig-${Date.now()}`,
      preQualified: { clarity: "AMBIGUOUS", reason: "OK_AMBIGUOUS" },
    });
    expect(outcome.attempted).toBe(false);
    expect(outcome.intentClarity).toBe("AMBIGUOUS");
    expect(outcome.source).toBe("clarification_only");
    expect(await countRecordDecisions(world.projectId)).toHaveLength(0);
  });

  it("B.5 revise + replay preserves counters without duplicate applicable", async () => {
    const world = await seedOwnedProject(`e1-b5-revise-${Date.now()}`);
  let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const recorded = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "RECORD_DECISION",
      statement: "Standard A",
      objectRef: "std-a",
    });
    expect(recorded.status).toBe("APPLIED");
    rev = recorded.revision ?? rev + 1;
    const targetId = recorded.decisionId!;
    const content = "Je révise la décision Standard A.";
    const qual = d6DecisionEnvelope({
      operation: "REVISE_DECISION",
      statement: "Standard B",
      objectRef: "std-a",
      decisionId: targetId,
    });
    const msg = await seedQualifiedMessage(world, content, qual);
    const first = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "REVISE_DECISION",
        decisionId: targetId,
        statement: "Standard B",
        objectRef: "std-a",
        semanticIntentId: qual.intents[0]!.id,
      }),
    });
    expect(first.command?.status).toBe("APPLIED");
    const replay = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "REVISE_DECISION",
        decisionId: targetId,
        statement: "Standard B",
        objectRef: "std-a",
        semanticIntentId: qual.intents[0]!.id,
      }),
    });
    expect(replay.command?.commandId).toBe(first.command?.commandId);
    const applicable = await countRecordDecisions(world.projectId, "APPLICABLE");
    expect(applicable).toHaveLength(1);
    expect(applicable[0]!.statement).toContain("Standard B");
    const original = (
      await db.select().from(humanDecisions).where(eq(humanDecisions.id, targetId))
    )[0];
    expect(original?.state).toBe("REVISED");
  });

  it("B.5 revoke path preserves journal history", async () => {
    const world = await seedOwnedProject(`e1-b5-revoke-${Date.now()}`);
    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const recorded = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "RECORD_DECISION",
      statement: "Décision à révoquer",
      objectRef: "revoke-me",
    });
    rev = recorded.revision ?? rev + 1;
    const id = recorded.decisionId!;
    const revoked = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "REVOKE_DECISION",
      decisionId: id,
    });
    expect(revoked.status).toBe("APPLIED");
    const journal = await listDecisionJournal(world.pilotId, world.projectId);
    expect(journal.some((d) => d.id === id && d.state === "REVOKED")).toBe(true);
    expect(await countRecordDecisions(world.projectId, "APPLICABLE")).toHaveLength(0);
  });

  it("B.6 propose via conversational qualification (orientation from durable binding)", async () => {
    const world = await seedOwnedProject(`e1-b6-propose-${Date.now()}`);
    const orientation =
      "Insérer conception UX (écrans Figma) avant validation qualité";
    const content =
      "Proposons d'abord le cadrage, puis la conception UX avant les tests de validation.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "trajectoire",
      intents: [
        {
          id: "i-propose",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: orientation,
          parameters: {
            pilotageOperation: "PROPOSE_TRAJECTORY" as const,
            statement: orientation,
            relevantAcquisIds: ["acq-fixture"],
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Je formalise la proposition de trajectoire.",
    };
    const msg = await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "PROPOSE_TRAJECTORY",
        objective: orientation,
        statement: orientation,
        semanticIntentId: "i-propose",
      }),
    });
    expect(outcome.command?.status).toBe("APPLIED");
    const proj = await getPilotageProjection(world.pilotId, world.projectId);
    expect(proj.trajectory.proposed?.orientation).toMatch(/Figma|UX/i);
    expect(proj.trajectory.retained).toBeNull();
    expect(proj.cycle).toBeNull();
  });

  it("B.6 retain distinguishes envisaged vs retained", async () => {
    const world = await seedOwnedProject(`e1-b6-retain-${Date.now()}`);
    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const proposed = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "COGNITIVE_PROPOSAL",
      sourceRef: newId("src"),
      operation: "PROPOSE_TRAJECTORY",
      orientation: "Poursuivre le cadrage avant la conception",
    });
    rev = proposed.revision ?? rev + 1;
    const mid = await getPilotageProjection(world.pilotId, world.projectId);
    expect(mid.trajectory.proposed?.status).toBe("PROPOSED");
    const content = "Je retiens cette trajectoire.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "retain",
      intents: [
        {
          id: "i-retain",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "RETAIN_TRAJECTORY",
          parameters: { pilotageOperation: "RETAIN_TRAJECTORY" as const },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Trajectoire retenue.",
    };
    const msg = await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "RETAIN_TRAJECTORY",
        objective: "RETAIN_TRAJECTORY",
        semanticIntentId: "i-retain",
      }),
    });
    expect(outcome.humanDecisionCreated).toBe(true);
    const after = await getPilotageProjection(world.pilotId, world.projectId);
    expect(after.trajectory.retained?.status).toBe("RETAINED");
    expect(after.trajectory.retained?.orientation).toBe("Poursuivre le cadrage avant la conception");
    // E1-REL-05 R-E1-RETAIN-VIS — source PROPOSED is superseded; no concurrent proposal.
    expect(after.trajectory.proposed).toBeNull();
  });

  it("B.6 Figma mention dialogue does not open cycle", async () => {
    const world = await seedOwnedProject(`e1-b6-figma-${Date.now()}`);
    const content = "Je veux travailler les maquettes Figma avant les tests.";
    const qual = dialogueEnvelope(
      content,
      "Nous pouvons explorer Figma — cela ne ouvre pas un cycle automatiquement.",
      ["NO_EFFECT"],
    );
    await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: newId("msg"),
      content,
      clientTurnKey: `figma-${Date.now()}`,
      preQualified: { clarity: "NONE", reason: "NO_SEMANTIC_PILOTAGE_QUALIFICATION" },
    });
    expect(outcome.attempted).toBe(false);
    const cycles = await db
      .select()
      .from(projectCycles)
      .where(eq(projectCycles.projectId, world.projectId));
    expect(cycles).toHaveLength(0);
  });

  it("B.6 explicit GO opens one ACTIVE cycle with contextual objective", async () => {
    const world = await seedOwnedProject(`e1-b6-open-${Date.now()}`);
    const content = "Ouvre le cycle cadrage pour clarifier le besoin terrain.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "open",
      intents: [
        {
          id: "i-open",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "Clarifier le besoin terrain",
          parameters: {
            pilotageOperation: "OPEN_CYCLE" as const,
            cycleType: "CADRAGE" as const,
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Ouverture du cadrage.",
    };
    const msg = await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "OPEN_CYCLE",
        cycleType: "CADRAGE",
        objective: "Clarifier le besoin terrain",
        semanticIntentId: "i-open",
      }),
    });
    expect(outcome.command?.status).toBe("APPLIED");
    const proj = await getPilotageProjection(world.pilotId, world.projectId);
    expect(proj.cycle?.status).toBe("ACTIVE");
    expect(proj.cycle?.cycleType).toBe("CADRAGE");
    expect(displayableCycleObjective(proj.cycle?.objective)).toBe("Clarifier le besoin terrain");
    const active = await db
      .select()
      .from(projectCycles)
      .where(
        and(eq(projectCycles.projectId, world.projectId), eq(projectCycles.status, "ACTIVE")),
      );
    expect(active).toHaveLength(1);
  });

  it("B.6 modify future steps preserves prior retained history", async () => {
    const world = await seedOwnedProject(`e1-b6-steps-${Date.now()}`);
    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const stepsV1 = [
      { order: 1, cycleType: "CADRAGE" as const, rationale: "Cadrer", certainty: "QUALIFIED" as const },
      {
        order: 2,
        cycleType: "CONCEPTION_FONCTIONNELLE" as const,
        rationale: "Concevoir",
        certainty: "ENVISIONED" as const,
      },
    ];
    const t1 = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "PROPOSE_TRAJECTORY",
      orientation: "Trajectoire v1",
      forecastJson: stepsV1,
    });
    rev = t1.revision ?? rev + 1;
    const retain = await retainTrajectory(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceRef: newId("src"),
      trajectoryRevisionId: t1.effects.find((e) => e.effectKind === "PROPOSE")?.targetRef,
    });
    rev = retain.revision ?? rev + 1;
    const stepsV2 = [
      { order: 1, cycleType: "CADRAGE" as const, rationale: "Cadrer", certainty: "QUALIFIED" as const },
      { order: 2, cycleType: "UX_UI" as const, rationale: "Écrans Figma", certainty: "ENVISIONED" as const },
      { order: 3, cycleType: "QA_VALIDATION" as const, rationale: "Tests", certainty: "ENVISIONED" as const },
    ];
    const t2 = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "PROPOSE_TRAJECTORY",
      orientation: "Trajectoire v2 — Figma avant QA",
      forecastJson: stepsV2,
    });
    expect(t2.status).toBe("APPLIED");
    const proj = await getPilotageProjection(world.pilotId, world.projectId);
    expect(proj.trajectory.retained?.orientation).toContain("v1");
    expect(proj.trajectory.proposed?.forecastSteps?.map((s) => s.cycleType)).toEqual([
      "CADRAGE",
      "UX_UI",
      "QA_VALIDATION",
    ]);
  });
});