/**
 * F1/F2 — AUTH-R01..R14: real DEV PG proofs for D5/D6 human-act reconciliation.
 * No vacuous PASS. Uses createProjectCommand + durable qualification + executePilotageCommand.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommandEffects,
  businessCommands,
  conversations,
  governanceRestrictions,
  humanDecisions,
  pilots,
  preparations,
  projectCycles,
} from "@/db/schema";
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
import {
  executePilotageCommand,
  getPilotageProjection,
} from "@/domains/pilotage/service";
import { applyConversationalAuthority } from "@/domains/pilotage/conversation-authority";

const OPEN_QUAL = {
  schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  status: "QUALIFIED" as const,
  goal: "open cycle",
  intents: [
    {
      id: "i-open",
      capabilityId: "d5.pilotage_command" as const,
      mode: "REQUEST_EFFECT" as const,
      summary: "OPEN_CYCLE CADRAGE",
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
  replyDraft: "Cycle ouvert.",
};

/** Two admissible D5 acts on one USER message: OPEN then TRANSITION. */
const DUAL_INTENT_QUAL = {
  schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  status: "QUALIFIED" as const,
  goal: "two acts",
  intents: [
    {
      id: "i-open",
      capabilityId: "d5.pilotage_command" as const,
      mode: "REQUEST_EFFECT" as const,
      summary: "OPEN_CYCLE",
      parameters: {
        pilotageOperation: "OPEN_CYCLE" as const,
        cycleType: "CADRAGE" as const,
      },
      constraints: [] as string[],
      dependsOn: [] as string[],
      sourceEvidence: [] as string[],
    },
    {
      id: "i-trans",
      capabilityId: "d5.pilotage_command" as const,
      mode: "REQUEST_EFFECT" as const,
      summary: "TRANSITION_CYCLE",
      parameters: {
        pilotageOperation: "TRANSITION_CYCLE" as const,
        cycleType: "CADRAGE" as const,
        toCycleType: "CONCEPTION_FONCTIONNELLE" as const,
      },
      constraints: [] as string[],
      dependsOn: [] as string[],
      sourceEvidence: [] as string[],
    },
  ],
  clarifications: [] as string[],
  replyDraft: "deux actes",
};

async function seedOwnedProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "auth-seed");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "auth-seed",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`SETUP BLOCKED: createProject failed: ${created.status}`);
  }
  const ctx = await getPreparationContext(pilotId, prep.id);
  if (!ctx.project?.id || !ctx.conversation?.id) {
    throw new Error("SETUP BLOCKED: project/conversation missing after create");
  }
  if (ctx.project.id !== created.projectId) {
    throw new Error("SETUP BLOCKED: project id mismatch");
  }
  return {
    pilotId,
    preparationId: prep.id,
    projectId: created.projectId,
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
    clientTurnKey: `auth-msg-${newId("ctk")}`,
    content,
  });
  if (reserved.kind !== "fresh") {
    throw new Error(`SETUP BLOCKED: expected fresh turn, got ${reserved.kind}`);
  }
  const stashed = await stashTurnQualification({
    commandId: reserved.commandId,
    ownerToken: reserved.ownerToken,
    qualificationJson: JSON.stringify(qual),
  });
  if (!stashed.applied) {
    throw new Error("SETUP BLOCKED: durable qualification stash failed");
  }
  // Ensure conversation.projectId is bound (createProject should have set it).
  const conv = (
    await db
      .select()
      .from(conversations)
      .where(eq(conversations.id, world.conversationId))
      .limit(1)
  )[0];
  if (conv?.projectId !== world.projectId) {
    throw new Error(
      `SETUP BLOCKED: conversation.projectId=${conv?.projectId} ≠ ${world.projectId}`,
    );
  }
  return {
    userMessageId: reserved.userMessageId,
    turnCommandId: reserved.commandId,
    clientTurnKey: reserved.clientTurnKey,
  };
}

async function countCommands(projectId: string, sourceRef?: string) {
  const rows = await db
    .select()
    .from(businessCommands)
    .where(
      sourceRef
        ? and(
            eq(businessCommands.projectId, projectId),
            eq(businessCommands.sourceRef, sourceRef),
          )
        : eq(businessCommands.projectId, projectId),
    );
  return rows;
}

async function countEffects(commandId: string) {
  return db
    .select()
    .from(businessCommandEffects)
    .where(eq(businessCommandEffects.commandId, commandId));
}

async function countActiveCycles(projectId: string) {
  const rows = await db
    .select()
    .from(projectCycles)
    .where(
      and(eq(projectCycles.projectId, projectId), eq(projectCycles.status, "ACTIVE")),
    );
  return rows.length;
}

describe("ML4C AUTH-R01..R14 — D5/D6 reconciliation (PG real)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) {
      throw new Error("SETUP BLOCKED: DATABASE_URL required");
    }
  });

  it("AUTH-R01: first admissible act → APPLIED, exactly one mutation", async () => {
    const world = await seedOwnedProject(`auth-r01-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const before = await countCommands(world.projectId, msg.userMessageId);
    expect(before.length).toBe(0);
    const revBefore = (await getPilotageProjection(world.pilotId, world.projectId)).revision;

    const first = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content: "Ouvre le cycle cadrage.",
      clientTurnKey: `r01-${Date.now()}`,
      preQualified: {
        clarity: "CLEAR",
        operation: "OPEN_CYCLE",
        cycleType: "CADRAGE",
        // Must echo durable objective (intent.summary), never invent a divergent one.
        objective: "OPEN_CYCLE CADRAGE",
        semanticIntentId: "i-open",
        semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      },
    });

    expect(first.attempted).toBe(true);
    expect(first.command?.status).toBe("APPLIED");
    expect(first.command?.commandId).toBeTruthy();
    const cmds = await countCommands(world.projectId, msg.userMessageId);
    expect(cmds.length).toBe(1);
    const effects = await countEffects(first.command!.commandId!);
    expect(effects.length).toBeGreaterThanOrEqual(1);
    expect(await countActiveCycles(world.projectId)).toBe(1);
    const revAfter = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    expect(revAfter).toBeGreaterThan(revBefore);
  });

  it("AUTH-R02: same act, same client key → replay, same commandId", async () => {
    const world = await seedOwnedProject(`auth-r02-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const key = `r02-${Date.now()}`;
    const preQualified = {
      clarity: "CLEAR" as const,
      operation: "OPEN_CYCLE" as const,
      cycleType: "CADRAGE" as const,
      objective: "OPEN_CYCLE CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    };
    const first = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content: "Ouvre le cycle cadrage.",
      clientTurnKey: key,
      preQualified,
    });
    expect(first.command?.status).toBe("APPLIED");
    const second = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content: "Ouvre le cycle cadrage.",
      clientTurnKey: key,
      preQualified,
    });
    expect(second.command?.commandId).toBe(first.command?.commandId);
    expect(["APPLIED", "ALREADY_APPLIED"]).toContain(second.command?.status);
    expect((await countCommands(world.projectId, msg.userMessageId)).length).toBe(1);
    expect(await countActiveCycles(world.projectId)).toBe(1);
  });

  it("AUTH-R03: same act, new client key, stale expectedRevision → ALREADY_APPLIED, no new effect", async () => {
    const world = await seedOwnedProject(`auth-r03-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const revBefore = (await getPilotageProjection(world.pilotId, world.projectId)).revision;

    const first = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: revBefore,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      actInstanceId: `${msg.userMessageId}:i-open`,
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(first.status).toBe("APPLIED");
    expect(first.commandId).toBeTruthy();
    const effectsAfterFirst = await countEffects(first.commandId!);
    expect(effectsAfterFirst.length).toBeGreaterThanOrEqual(1);
    const cmdsAfterFirst = await countCommands(world.projectId, msg.userMessageId);
    expect(cmdsAfterFirst.length).toBe(1);

    // Stale revision = revision preceding the mutation.
    const replay = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: revBefore, // deliberately obsolete
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      actInstanceId: `${msg.userMessageId}:i-open`,
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });

    expect(replay.status).toBe("ALREADY_APPLIED");
    expect(replay.commandId).toBe(first.commandId);
    expect(replay.reasonCode).not.toBe("STALE_REVISION");
    const cmdsAfter = await countCommands(world.projectId, msg.userMessageId);
    expect(cmdsAfter.length).toBe(1);
    const effectsAfter = await countEffects(first.commandId!);
    expect(effectsAfter.length).toBe(effectsAfterFirst.length);
    expect(await countActiveCycles(world.projectId)).toBe(1);
  });

  it("AUTH-R04: client actInstanceId changed → server identity unchanged, no second effect", async () => {
    const world = await seedOwnedProject(`auth-r04-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const first = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      actInstanceId: `${msg.userMessageId}:i-open`,
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(first.status).toBe("APPLIED");
    const rev2 = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const replay = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev2,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      actInstanceId: "client-forged-act-id", // ignored by server
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(replay.status).toBe("ALREADY_APPLIED");
    expect(replay.commandId).toBe(first.commandId);
    expect((await countCommands(world.projectId, msg.userMessageId)).length).toBe(1);
  });

  it("AUTH-R05/R14: new intention with stale expectedRevision → STALE_REVISION, no mutation", async () => {
    const world = await seedOwnedProject(`auth-r05-${Date.now()}`);
    // Advance revision with an EXPLICIT_INTERACTION open first.
    const rev0 = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const bump = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    expect(bump.status).toBe("APPLIED");
    const staleRev = rev0;
    const msg = await seedQualifiedMessage(
      world,
      "Retiens la trajectoire cadre.",
      {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED" as const,
        goal: "retain",
        intents: [
          {
            id: "i-retain",
            capabilityId: "d5.pilotage_command" as const,
            mode: "REQUEST_EFFECT" as const,
            summary: "RETAIN",
            parameters: {
              pilotageOperation: "RETAIN_TRAJECTORY" as const,
              orientation: "cadre",
            },
            constraints: [] as string[],
            dependsOn: [] as string[],
            sourceEvidence: [] as string[],
          },
        ],
        clarifications: [] as string[],
        replyDraft: "ok",
      },
    );
    const cmdsBefore = (await countCommands(world.projectId)).length;
    const denied = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: staleRev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Retiens la trajectoire cadre.",
      actInstanceId: `${msg.userMessageId}:i-retain`,
      operation: "RETAIN_TRAJECTORY",
      orientation: "cadre",
      semanticIntentId: "i-retain",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(denied.status).toBe("CONFLICT");
    expect(denied.reasonCode).toBe("STALE_REVISION");
    expect(denied.commandId).toBeNull();
    expect((await countCommands(world.projectId)).length).toBe(cmdsBefore);
  });

  it("AUTH-R06: same message, two distinct intents → both APPLIED + replay", async () => {
    const world = await seedOwnedProject(`auth-r06-${Date.now()}`);
    const content = "Ouvre le cycle cadrage puis passe en conception fonctionnelle.";
    const msg = await seedQualifiedMessage(world, content, DUAL_INTENT_QUAL);
    const effectsBefore = (
      await db
        .select()
        .from(businessCommandEffects)
        .innerJoin(
          businessCommands,
          eq(businessCommandEffects.commandId, businessCommands.id),
        )
        .where(eq(businessCommands.projectId, world.projectId))
    ).length;

    const rev1 = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const open = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev1,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: content,
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(open.status).toBe("APPLIED");
    expect(open.commandId).toBeTruthy();
    expect(await countActiveCycles(world.projectId)).toBe(1);
    const openEffects = await countEffects(open.commandId!);
    expect(openEffects.length).toBeGreaterThanOrEqual(1);

    const rev2 = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    expect(rev2).toBeGreaterThan(rev1);
    const trans = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev2,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: content,
      operation: "TRANSITION_CYCLE",
      cycleType: "CADRAGE",
      toCycleType: "CONCEPTION_FONCTIONNELLE",
      semanticIntentId: "i-trans",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(trans.status).toBe("APPLIED");
    expect(trans.commandId).toBeTruthy();
    expect(trans.commandId).not.toBe(open.commandId);
    const transEffects = await countEffects(trans.commandId!);
    expect(transEffects.length).toBeGreaterThanOrEqual(1);

    const applied = (await countCommands(world.projectId, msg.userMessageId)).filter(
      (c) => c.status === "APPLIED",
    );
    expect(applied.length).toBe(2);
    expect(applied.every((c) => c.sourceRef === msg.userMessageId)).toBe(true);
    expect(applied.map((c) => c.sourceActionKey).sort()).toHaveLength(2);
    expect(applied[0]!.sourceActionKey).not.toBe(applied[1]!.sourceActionKey);

    const active = (
      await db
        .select()
        .from(projectCycles)
        .where(
          and(eq(projectCycles.projectId, world.projectId), eq(projectCycles.status, "ACTIVE")),
        )
    )[0];
    expect(active?.cycleType).toBe("CONCEPTION_FONCTIONNELLE");

    // Replay both acts under new client keys — no third effect.
    const rev3 = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const replayOpen = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev3,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: content,
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    const replayTrans = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev3,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: content,
      operation: "TRANSITION_CYCLE",
      cycleType: "CADRAGE",
      toCycleType: "CONCEPTION_FONCTIONNELLE",
      semanticIntentId: "i-trans",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(replayOpen.status).toBe("ALREADY_APPLIED");
    expect(replayOpen.commandId).toBe(open.commandId);
    expect(replayTrans.status).toBe("ALREADY_APPLIED");
    expect(replayTrans.commandId).toBe(trans.commandId);
    expect((await countCommands(world.projectId, msg.userMessageId)).filter((c) => c.status === "APPLIED").length).toBe(
      2,
    );
    const effectsAfter = (
      await db
        .select()
        .from(businessCommandEffects)
        .innerJoin(
          businessCommands,
          eq(businessCommandEffects.commandId, businessCommands.id),
        )
        .where(eq(businessCommands.projectId, world.projectId))
    ).length;
    expect(effectsAfter).toBe(effectsBefore + openEffects.length + transEffects.length);
  });

  it("AUTH-R07: same message, substituted operation → REFUS", async () => {
    const world = await seedOwnedProject(`auth-r07-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const denied = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "RETAIN_TRAJECTORY", // substituted vs durable OPEN_CYCLE
      orientation: "x",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(denied.status).toBe("REJECTED");
    expect((await countCommands(world.projectId, msg.userMessageId)).every((c) => c.status === "REJECTED")).toBe(
      true,
    );
    expect(await countActiveCycles(world.projectId)).toBe(0);
  });

  it("AUTH-R08: same message, substituted target → REFUS", async () => {
    const world = await seedOwnedProject(`auth-r08-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const denied = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE",
      cycleType: "CONSTRUCTION", // substituted vs durable CADRAGE
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(denied.status).toBe("REJECTED");
    expect(await countActiveCycles(world.projectId)).toBe(0);
  });

  it("AUTH-R09: non-APPLIED stored act replay → reconcile without blind re-emit", async () => {
    // business_commands.status domain is APPLIED|REJECTED only (chk).
    // Replay of a REJECTED same-act must return stored truth — never mutate again.
    const world = await seedOwnedProject(`auth-r09-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const first = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE",
      cycleType: "CONSTRUCTION", // mismatch → REJECTED stored act
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(first.status).toBe("REJECTED");
    expect(first.commandId).toBeTruthy();
    const effectsBefore = await countEffects(first.commandId!);
    expect(effectsBefore.length).toBe(0);
    const rev2 = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const replay = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev2,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE",
      cycleType: "CONSTRUCTION",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    // Same act identity → replay stored REJECTED, no second insert / no cycle.
    expect(replay.commandId).toBe(first.commandId);
    expect(replay.status).toBe("REJECTED");
    expect((await countCommands(world.projectId, msg.userMessageId)).length).toBe(1);
    expect(await countActiveCycles(world.projectId)).toBe(0);
  });

  it("AUTH-R10: two concurrent same-act calls → ≤1 APPLIED command, ≤1 cycle", async () => {
    const world = await seedOwnedProject(`auth-r10-${Date.now()}`);
    const msg = await seedQualifiedMessage(world, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const body = {
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE" as const,
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE" as const,
      cycleType: "CADRAGE" as const,
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    };
    const [a, b] = await Promise.all([
      executePilotageCommand(world.pilotId, world.projectId, {
        ...body,
        clientCommandKey: `conv:${newId("ctk")}`,
      }),
      executePilotageCommand(world.pilotId, world.projectId, {
        ...body,
        clientCommandKey: `conv:${newId("ctk")}`,
      }),
    ]);
    const statuses = [a.status, b.status].sort();
    expect(statuses).toContain("APPLIED");
    expect(
      statuses.every((s) => s === "APPLIED" || s === "ALREADY_APPLIED" || s === "CONFLICT"),
    ).toBe(true);
    if (a.commandId && b.commandId) {
      expect(a.commandId === b.commandId || statuses.includes("ALREADY_APPLIED")).toBe(true);
    }
    const applied = (await countCommands(world.projectId, msg.userMessageId)).filter(
      (c) => c.status === "APPLIED",
    );
    expect(applied.length).toBeLessThanOrEqual(1);
    expect(await countActiveCycles(world.projectId)).toBeLessThanOrEqual(1);
  });

  it("AUTH-R11: other Pilot — no visible/applicable command", async () => {
    const a = await seedOwnedProject(`auth-r11a-${Date.now()}`);
    const b = await seedOwnedProject(`auth-r11b-${Date.now()}`);
    const msg = await seedQualifiedMessage(a, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const rev = (await getPilotageProjection(a.pilotId, a.projectId)).revision;
    const first = await executePilotageCommand(a.pilotId, a.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(first.status).toBe("APPLIED");

    await expect(
      executePilotageCommand(b.pilotId, a.projectId, {
        clientCommandKey: `conv:${newId("ctk")}`,
        expectedRevision: rev,
        sourceKind: "USER_MESSAGE",
        sourceRef: msg.userMessageId,
        utterance: "Ouvre le cycle cadrage.",
        operation: "OPEN_CYCLE",
        cycleType: "CADRAGE",
        semanticIntentId: "i-open",
        semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      }),
    ).rejects.toThrow(/introuvable|NOT_FOUND/i);
    // B must not own any command on A's project.
    const bCmds = await db
      .select()
      .from(businessCommands)
      .where(
        and(
          eq(businessCommands.projectId, a.projectId),
          eq(businessCommands.actorPilotId, b.pilotId),
        ),
      );
    expect(bCmds.length).toBe(0);
    expect(await countActiveCycles(a.projectId)).toBe(1);
  });

  it("AUTH-R12: other project — no visible/applicable command", async () => {
    const a = await seedOwnedProject(`auth-r12a-${Date.now()}`);
    const b = await seedOwnedProject(`auth-r12b-${Date.now()}`);
    const msgA = await seedQualifiedMessage(a, "Ouvre le cycle cadrage.", OPEN_QUAL);
    const revA = (await getPilotageProjection(a.pilotId, a.projectId)).revision;
    const applied = await executePilotageCommand(a.pilotId, a.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: revA,
      sourceKind: "USER_MESSAGE",
      sourceRef: msgA.userMessageId,
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(applied.status).toBe("APPLIED");

    // Pilot B + project B cannot apply or replay A's message/command.
    const revB = (await getPilotageProjection(b.pilotId, b.projectId)).revision;
    const cross = await executePilotageCommand(b.pilotId, b.projectId, {
      clientCommandKey: `conv:${newId("ctk")}`,
      expectedRevision: revB,
      sourceKind: "USER_MESSAGE",
      sourceRef: msgA.userMessageId, // foreign message
      utterance: "Ouvre le cycle cadrage.",
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      semanticIntentId: "i-open",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(cross.commandId).not.toBe(applied.commandId);
    expect(cross.status).not.toBe("ALREADY_APPLIED");
    expect(cross.status).toBe("REJECTED");
    expect((await countCommands(b.projectId, msgA.userMessageId)).every((c) => c.status === "REJECTED")).toBe(
      true,
    );
    expect(await countActiveCycles(b.projectId)).toBe(0);
  });

  it("AUTH-R13: EXPLICIT_INTERACTION authorized → nominal preserved", async () => {
    const world = await seedOwnedProject(`auth-r13-${Date.now()}`);
    const rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const r = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    expect(r.status).toBe("APPLIED");
    expect(r.commandId).toBeTruthy();
    expect(await countActiveCycles(world.projectId)).toBe(1);
  });
});

const REVISE_OBJECT_REF = "auth-r1-shared-object";

function reviseQualWithoutDecisionId() {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED" as const,
    goal: "revise",
    intents: [
      {
        id: "i-revise",
        capabilityId: "d6.human_decision" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: "REVISE shared object",
        parameters: {
          pilotageOperation: "REVISE_DECISION" as const,
          statement: "Révision autorité propriétaire",
          objectRef: REVISE_OBJECT_REF,
        },
        constraints: [] as string[],
        dependsOn: [] as string[],
        sourceEvidence: [] as string[],
      },
    ],
    clarifications: [] as string[],
    replyDraft: "revise",
  };
}

function liftQual(targetHint: string) {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED" as const,
    goal: "lift",
    intents: [
      {
        id: "i-lift",
        capabilityId: "d6.human_decision" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: "LIFT_RESTRICTION",
        parameters: {
          pilotageOperation: "LIFT_RESTRICTION" as const,
          restrictionKindHint: "CYCLE_MUTATION",
          restrictionTargetRefHint: targetHint,
          statement: `Lever restriction ${targetHint}`,
        },
        constraints: [] as string[],
        dependsOn: [] as string[],
        sourceEvidence: [] as string[],
      },
    ],
    clarifications: [] as string[],
    replyDraft: "lift",
  };
}

describe("ML4C R1 — durable USER_MESSAGE target binding (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) {
      throw new Error("SETUP BLOCKED: DATABASE_URL required");
    }
  });

  it("R1-A multi: body.decisionId cannot pick among ambiguous objectRef matches", async () => {
    const world = await seedOwnedProject(`r1-multi-${Date.now()}`);
    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const open = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    expect(open.status).toBe("APPLIED");
    rev = open.revision ?? rev + 1;

    const d1 = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "RECORD_DECISION",
      statement: "Décision A même objectRef",
      objectRef: REVISE_OBJECT_REF,
    });
    expect(d1.status).toBe("APPLIED");
    rev = d1.revision ?? rev + 1;
    const d2 = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "RECORD_DECISION",
      statement: "Décision B même objectRef",
      objectRef: REVISE_OBJECT_REF,
    });
    expect(d2.status).toBe("APPLIED");
    rev = d2.revision ?? rev + 1;

    const applicable = await db
      .select()
      .from(humanDecisions)
      .where(
        and(
          eq(humanDecisions.projectId, world.projectId),
          eq(humanDecisions.kind, "RECORD_DECISION"),
          eq(humanDecisions.state, "APPLICABLE"),
          eq(humanDecisions.objectRef, REVISE_OBJECT_REF),
        ),
      );
    expect(applicable.length).toBe(2);
    const victim = applicable[0]!;

    const msg = await seedQualifiedMessage(
      world,
      "Je révise la décision partagée.",
      reviseQualWithoutDecisionId(),
    );
    const beforeStates = applicable.map((r) => r.state);
    const attack = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Je révise la décision partagée.",
      operation: "REVISE_DECISION",
      decisionId: victim.id,
      statement: "Révision autorité propriétaire",
      objectRef: REVISE_OBJECT_REF,
      semanticIntentId: "i-revise",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(attack.status).toBe("REJECTED");
    expect(attack.reasonCode).toMatch(/AMBIGUOUS|INVALID/);

    const after = await db
      .select()
      .from(humanDecisions)
      .where(
        and(
          eq(humanDecisions.projectId, world.projectId),
          eq(humanDecisions.kind, "RECORD_DECISION"),
          eq(humanDecisions.objectRef, REVISE_OBJECT_REF),
        ),
      );
    expect(after.filter((r) => r.state === "APPLICABLE").length).toBe(2);
    expect(after.every((r) => beforeStates.includes(r.state) || r.state === "APPLICABLE")).toBe(true);
    expect(after.some((r) => r.state === "REVISED")).toBe(false);
  });

  it("R1-A unique: Studio resolves single objectRef; body echo optional", async () => {
    const world = await seedOwnedProject(`r1-unique-${Date.now()}`);
    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const open = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    rev = open.revision ?? rev + 1;
    const recorded = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "RECORD_DECISION",
      statement: "Décision unique",
      objectRef: REVISE_OBJECT_REF,
    });
    expect(recorded.status).toBe("APPLIED");
    rev = recorded.revision ?? rev + 1;
    const targetId = recorded.decisionId!;

    const msg = await seedQualifiedMessage(
      world,
      "Je révise la décision unique.",
      reviseQualWithoutDecisionId(),
    );
    const ok = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Je révise la décision unique.",
      operation: "REVISE_DECISION",
      decisionId: targetId,
      statement: "Révision autorité propriétaire",
      objectRef: REVISE_OBJECT_REF,
      semanticIntentId: "i-revise",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(ok.status).toBe("APPLIED");
    expect(ok.decisionId).toBeTruthy();

    const replay = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: ok.revision ?? rev + 1,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Je révise la décision unique.",
      operation: "REVISE_DECISION",
      decisionId: targetId,
      statement: "Révision autorité propriétaire",
      objectRef: REVISE_OBJECT_REF,
      semanticIntentId: "i-revise",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(["ALREADY_APPLIED", "APPLIED", "REJECTED"]).toContain(replay.status);
    if (replay.status === "ALREADY_APPLIED" || replay.status === "APPLIED") {
      expect(replay.commandId === ok.commandId || replay.status === "ALREADY_APPLIED").toBe(true);
    }
  });

  it("R1-B multi: body.restrictionId cannot substitute UX_UI when durable targets CADRAGE", async () => {
    const world = await seedOwnedProject(`r1-lift-multi-${Date.now()}`);
    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const open = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      objective: "cadrage",
    });
    expect(open.status).toBe("APPLIED");
    rev = open.revision ?? rev + 1;

    const rCadrage = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "APPLY_RESTRICTION",
      targetKind: "CYCLE_MUTATION",
      targetRef: "CADRAGE",
      statement: "Freeze CADRAGE",
    });
    expect(rCadrage.status).toBe("APPLIED");
    rev = rCadrage.revision ?? rev + 1;
    const rUx = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "APPLY_RESTRICTION",
      targetKind: "CYCLE_MUTATION",
      targetRef: "UX_UI",
      statement: "Freeze UX_UI",
    });
    expect(rUx.status).toBe("APPLIED");
    rev = rUx.revision ?? rev + 1;

    const active = await db
      .select()
      .from(governanceRestrictions)
      .where(
        and(
          eq(governanceRestrictions.projectId, world.projectId),
          eq(governanceRestrictions.status, "ACTIVE"),
        ),
      );
    expect(active.length).toBe(2);
    const uxRow = active.find((r) => r.targetRef === "UX_UI")!;
    const cadrageRow = active.find((r) => r.targetRef === "CADRAGE")!;

    const msg = await seedQualifiedMessage(
      world,
      "Je lève la restriction CYCLE_MUTATION sur CADRAGE.",
      liftQual("CADRAGE"),
    );
    const attack = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Je lève la restriction CYCLE_MUTATION sur CADRAGE.",
      operation: "LIFT_RESTRICTION",
      restrictionId: uxRow.id,
      semanticIntentId: "i-lift",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(attack.status).toBe("REJECTED");

    const still = await db
      .select()
      .from(governanceRestrictions)
      .where(
        and(
          eq(governanceRestrictions.projectId, world.projectId),
          eq(governanceRestrictions.status, "ACTIVE"),
        ),
      );
    expect(still.map((r) => r.id).sort()).toEqual([cadrageRow.id, uxRow.id].sort());
  });

  it("R1-B unique: lift succeeds only for durable CADRAGE target", async () => {
    const world = await seedOwnedProject(`r1-lift-unique-${Date.now()}`);
    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const open = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    rev = open.revision ?? rev + 1;
    const applied = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "APPLY_RESTRICTION",
      targetKind: "CYCLE_MUTATION",
      targetRef: "CADRAGE",
      statement: "Freeze CADRAGE only",
    });
    expect(applied.status).toBe("APPLIED");
    rev = applied.revision ?? rev + 1;
    const restrictionId = applied.effects.find((e) => e.effectKind === "APPLY_RESTRICTION")
      ?.targetRef;
    expect(restrictionId).toBeTruthy();

    const msg = await seedQualifiedMessage(
      world,
      "Je lève la restriction CYCLE_MUTATION sur CADRAGE.",
      liftQual("CADRAGE"),
    );
    const lift = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "USER_MESSAGE",
      sourceRef: msg.userMessageId,
      utterance: "Je lève la restriction CYCLE_MUTATION sur CADRAGE.",
      operation: "LIFT_RESTRICTION",
      restrictionId,
      semanticIntentId: "i-lift",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(lift.status).toBe("APPLIED");
    const active = await db
      .select()
      .from(governanceRestrictions)
      .where(
        and(
          eq(governanceRestrictions.projectId, world.projectId),
          eq(governanceRestrictions.status, "ACTIVE"),
        ),
      );
    expect(active).toHaveLength(0);
  });

  it("R1-E: foreign decisionId / restrictionId rejected without effect", async () => {
    const a = await seedOwnedProject(`r1-e-a-${Date.now()}`);
    const b = await seedOwnedProject(`r1-e-b-${Date.now()}`);
    let revA = (await getPilotageProjection(a.pilotId, a.projectId)).revision;
    const openA = await executePilotageCommand(a.pilotId, a.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: revA,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    revA = openA.revision ?? revA + 1;
    const recA = await executePilotageCommand(a.pilotId, a.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: revA,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "RECORD_DECISION",
      statement: "A only",
      objectRef: REVISE_OBJECT_REF,
    });
    expect(recA.status).toBe("APPLIED");

    let revB = (await getPilotageProjection(b.pilotId, b.projectId)).revision;
    const openB = await executePilotageCommand(b.pilotId, b.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: revB,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    revB = openB.revision ?? revB + 1;
    const recB = await executePilotageCommand(b.pilotId, b.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: revB,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "RECORD_DECISION",
      statement: "B only",
      objectRef: REVISE_OBJECT_REF,
    });
    expect(recB.status).toBe("APPLIED");
    revB = recB.revision ?? revB + 1;

    const msgB = await seedQualifiedMessage(
      b,
      "Je révise la décision partagée.",
      reviseQualWithoutDecisionId(),
    );
    const cross = await executePilotageCommand(b.pilotId, b.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: revB,
      sourceKind: "USER_MESSAGE",
      sourceRef: msgB.userMessageId,
      utterance: "Je révise la décision partagée.",
      operation: "REVISE_DECISION",
      decisionId: recA.decisionId!,
      statement: "Révision autorité propriétaire",
      objectRef: REVISE_OBJECT_REF,
      semanticIntentId: "i-revise",
      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    });
    expect(cross.status).toBe("REJECTED");
    const aStill = (
      await db
        .select()
        .from(humanDecisions)
        .where(eq(humanDecisions.id, recA.decisionId!))
    )[0];
    expect(aStill?.state).toBe("APPLICABLE");
  });
});
