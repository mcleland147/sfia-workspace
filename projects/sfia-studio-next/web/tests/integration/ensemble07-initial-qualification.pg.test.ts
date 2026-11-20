import { beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

vi.hoisted(() => {
  process.env.STUDIO_LANE = "DEV";
  process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
  delete process.env.OPENAI_API_KEY;
  // Screenshot capture freezes must not block PG behavioral proofs.
  delete process.env.STUDIO_DEV_HOLD_INITIAL_QUALIFICATION;
});

import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  conversations,
  messages,
  pilots,
  preparationProjectLinks,
  preparations,
  projectCycles,
  trajectoryQualificationOperations,
  trajectoryRevisions,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  applyPreparationProjection,
  openOrCreatePreparation,
  updatePreview,
} from "@/domains/preparation/service";
import { draftProjectionFromQualification } from "@/domains/preparation/projection";
import {
  ensureInitialQualification,
  initialQualificationFault,
  processInitialQualification,
} from "@/domains/pilotage/initial-qualification";
import { assertPilotTurnNotBlockedByQualification } from "@/domains/pilotage/initial-qualification";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import { StudioError } from "@/lib/http-errors";
import { isInitialQualificationComposerLocked } from "@/domains/pilotage/qualification-lock";
import { d5PilotageEnvelope } from "../helpers/semantic-fixture-envelopes";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedPrepWithProjection(pilotId: string, name: string, intention: string) {
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, name, intention);
  const draft = draftProjectionFromQualification({
    preparationId: prep.id,
    turnKey: "t-seed",
    qualificationStatus: "QUALIFIED",
    goal: intention,
    projectIntention: intention,
    desiredOutcome: "Premier résultat utile",
    proposedProjectName: name,
    allowGoalIntentionBootstrap: true,
  });
  if (!draft) throw new Error("projection draft missing");
  await applyPreparationProjection({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: 1,
    draft,
  });
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
  return { prep: refreshed, name };
}


function requireProjectId(created: Awaited<ReturnType<typeof createProjectCommand>>): string {
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`unexpected create status ${created.status}`);
  }
  return created.projectId;
}

async function createProjectFromPrep(pilotId: string, prepId: string, name: string, rev: number) {
  return createProjectCommand({
    pilotId,
    preparationId: prepId,
    expectedCreationRevision: rev,
    projectName: name,
    previewSummary: "summary",
    idempotencyKey: newId("idem"),
    expectInitialQualification: true,
  });
}

describe("Ensemble 07 initial qualification (PG)", () => {
  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
    await db.execute(sql`select 1`);
    try {
      await db.execute(sql`
        CREATE TABLE IF NOT EXISTS trajectory_qualification_operations (
          id text PRIMARY KEY,
          project_id text NOT NULL REFERENCES projects(id),
          preparation_id text NOT NULL REFERENCES preparations(id),
          pilot_id text NOT NULL REFERENCES pilots(id),
          status text NOT NULL,
          phase text NOT NULL,
          version integer NOT NULL DEFAULT 1,
          input_fingerprint text NOT NULL DEFAULT '',
          trajectory_revision_id text,
          assistant_message_id text,
          result_json jsonb,
          error_code text,
          owner_token text,
          claimed_at timestamptz,
          created_at timestamptz NOT NULL DEFAULT now(),
          updated_at timestamptz NOT NULL DEFAULT now()
        )
      `);
      await db.execute(sql`
        CREATE UNIQUE INDEX IF NOT EXISTS trajectory_qualification_operations_project_uidx
          ON trajectory_qualification_operations (project_id)
      `);
      await db.execute(sql`
        ALTER TABLE trajectory_revisions ADD COLUMN IF NOT EXISTS forecast_json jsonb
      `);
      await db.execute(sql`
        ALTER TABLE preparation_project_links
          ADD COLUMN IF NOT EXISTS initial_qualification_expected boolean NOT NULL DEFAULT false
      `);
    } catch {
      /* migration may already be applied */
    }
  });

  it("create→ensure→process yields one PROPOSED trajectory and one assistant message", async () => {
    const pilotId = await seedPilot("e07-main");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Main",
      "Cadrage d'une plateforme de suivi pour équipes produit",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    expect(created.status).toBe("CREATED");
    const projectId = requireProjectId(created);

    const stub = await ensureInitialQualification({
      projectId,
      preparationId: prep.id,
      pilotId,
    });
    expect(stub.status).toBe("PENDING");

    const terminal = await processInitialQualification(projectId, { pilotId });
    expect(terminal?.status).toBe("PROPOSED");
    expect(terminal?.trajectoryRevisionId).toBeTruthy();
    expect(terminal?.assistantMessageId).toBeTruthy();
    expect(isInitialQualificationComposerLocked(terminal)).toBe(false);

    const ops = await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId));
    expect(ops).toHaveLength(1);

    const proposed = await db
      .select()
      .from(trajectoryRevisions)
      .where(
        and(eq(trajectoryRevisions.projectId, projectId), eq(trajectoryRevisions.status, "PROPOSED")),
      );
    expect(proposed).toHaveLength(1);
    expect(proposed[0]?.forecastJson).toBeTruthy();

    const assistant = await db
      .select()
      .from(messages)
      .where(eq(messages.id, terminal!.assistantMessageId!));
    expect(assistant).toHaveLength(1);
    expect(assistant[0]?.role).toBe("assistant");
  });

  it("double ensure is idempotent", async () => {
    const pilotId = await seedPilot("e07-idem");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Idem",
      "Cadrage d'un projet idempotent",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    const a = await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    const b = await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    expect(a.operationId).toBe(b.operationId);
    const ops = await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId));
    expect(ops).toHaveLength(1);
  });

  it("process twice does not duplicate assistant message", async () => {
    const pilotId = await seedPilot("e07-dup");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Dup",
      "Cadrage pour éviter les doublons de restitution",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    await processInitialQualification(projectId, { pilotId });
    await processInitialQualification(projectId, { pilotId });

    const ops = (
      await db
        .select()
        .from(trajectoryQualificationOperations)
        .where(eq(trajectoryQualificationOperations.projectId, projectId))
    )[0]!;
    const gen = `sfia:iq:${ops.id}:v${ops.version}`;
    const msgs = await db.select().from(messages).where(eq(messages.generationId, gen));
    expect(msgs).toHaveLength(1);
  });

  it("blocks composer admission while RUNNING", async () => {
    const pilotId = await seedPilot("e07-lock");
    const { prep, name } = await seedPrepWithProjection(pilotId, "E07Lock", "Verrou pendant RUNNING");
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    await db
      .update(trajectoryQualificationOperations)
      .set({ status: "RUNNING", phase: "ANALYZING", ownerToken: "tok", claimedAt: new Date() })
      .where(eq(trajectoryQualificationOperations.projectId, projectId));

    await expect(assertPilotTurnNotBlockedByQualification(pilotId, projectId)).rejects.toBeInstanceOf(
      StudioError,
    );
    await expect(postUserMessageAndNora(pilotId, prep.id, "Message pendant qualification")).rejects.toMatchObject({
      code: "QUALIFICATION_IN_PROGRESS",
    });
  });

  it("clarification path without D5 propose when intention missing", async () => {
    const pilotId = await seedPilot("e07-clar");
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "Clarify", " ");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
    const created = await createProjectFromPrep(pilotId, prep.id, "Clarify", refreshed.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    const done = await processInitialQualification(projectId, { pilotId });
    expect(done?.status).toBe("CLARIFICATION");
    expect(done?.trajectoryRevisionId).toBeNull();

    const proposed = await db
      .select()
      .from(trajectoryRevisions)
      .where(eq(trajectoryRevisions.projectId, projectId));
    expect(proposed).toHaveLength(0);
  });

  it("failed path surfaces Studio incident, not Nora conclusion", async () => {
    const pilotId = await seedPilot("e07-fail");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Fail",
      "Cadrage — test incident technique",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    initialQualificationFault.beforePublish = () => {
      throw new Error("INJECTED_FAULT");
    };
    const done = await processInitialQualification(projectId, { pilotId });
    initialQualificationFault.beforePublish = null;
    expect(done?.status).toBe("FAILED");
    const msg = (
      await db.select().from(messages).where(eq(messages.id, done!.assistantMessageId!))
    )[0];
    expect(msg?.role).toBe("system");
    expect(msg?.content).toMatch(/\[Studio\]/);
    expect(msg?.content).not.toMatch(/recommande d'ouvrir/i);
  });

  it("GET project context does not advance PENDING qualification (E07-COR-02)", async () => {
    const pilotId = await seedPilot("e07-get");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Get",
      "Cadrage — GET ne doit pas traiter",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    const { getOwnedProjectContext } = await import("@/domains/preparation/project-context");
    const ctx = await getOwnedProjectContext(pilotId, projectId);
    expect(ctx.initialQualification?.status).toBe("PENDING");
    const again = await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId));
    expect(again[0]?.status).toBe("PENDING");
  });

  it("reconcile advances PENDING to terminal (E07-COR-01/05)", async () => {
    const pilotId = await seedPilot("e07-recon");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Recon",
      "Cadrage — reconcile explicite",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    const { reconcileInitialQualification } = await import(
      "@/domains/pilotage/initial-qualification"
    );
    const done = await reconcileInitialQualification(projectId, pilotId);
    expect(done?.status).toBe("PROPOSED");
  });

  it("COR-01: reopen after missing op creates unique qualification then terminal", async () => {
    const pilotId = await seedPilot("e07-cor01-miss");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07MissOp",
      "Cadrage — ensure échoué puis reprise sans opération",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    // Simulate ensureAndKick FAILED_RETRYABLE twice: project exists, no op persisted.
    const before = await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId));
    expect(before).toHaveLength(0);

    const { reconcileInitialQualification } = await import(
      "@/domains/pilotage/initial-qualification"
    );
    const done = await reconcileInitialQualification(projectId, pilotId);
    expect(["PROPOSED", "CLARIFICATION"]).toContain(done?.status);
    const ops = await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId));
    expect(ops).toHaveLength(1);
    const again = await reconcileInitialQualification(projectId, pilotId);
    expect(again?.operationId).toBe(done?.operationId);
    expect(again?.status).toBe(done?.status);
  });

  it("COR-04: expired owner cannot publish message after lease steal", async () => {
    const pilotId = await seedPilot("e07-cor04-fence");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Fence",
      "Cadrage — fencing des effets après perte de lease",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });

    initialQualificationFault.beforePublish = async () => {
      await db
        .update(trajectoryQualificationOperations)
        .set({
          ownerToken: "stolen-owner",
          claimedAt: new Date(),
          status: "RUNNING",
          updatedAt: new Date(),
        })
        .where(eq(trajectoryQualificationOperations.projectId, projectId));
    };

    await processInitialQualification(projectId, { pilotId });
    initialQualificationFault.beforePublish = null;

    const mid = (
      await db
        .select()
        .from(trajectoryQualificationOperations)
        .where(eq(trajectoryQualificationOperations.projectId, projectId))
    )[0]!;
    await db
      .update(trajectoryQualificationOperations)
      .set({
        ownerToken: null,
        claimedAt: null,
        status: mid.trajectoryRevisionId ? "UNKNOWN" : "PENDING",
        updatedAt: new Date(),
      })
      .where(eq(trajectoryQualificationOperations.id, mid.id));

    const done = await processInitialQualification(projectId, { pilotId });
    expect(["PROPOSED", "CLARIFICATION"]).toContain(done?.status);

    const genPrefix = `sfia:iq:${mid.id}:`;
    const msgs = await db
      .select()
      .from(messages)
      .where(sql`${messages.generationId} like ${genPrefix + "%"}`);
    expect(msgs.length).toBeLessThanOrEqual(1);
    if (msgs[0]) {
      expect(msgs[0].role).toBe("assistant");
    }
  });

  it("P0-01: last CAS then steal before D5 mutate refuses A and leaves zero D5 revision", async () => {
    const pilotId = await seedPilot("e07-p001-toc");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07P001",
      "Cadrage — fencing au véritable point d'effet D5",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });

    // Discriminant: A last CAS succeeds → B steals → A enters D5 TX and is refused.
    initialQualificationFault.afterOwnerCheckBeforeEffect = async () => {
      await db
        .update(trajectoryQualificationOperations)
        .set({
          ownerToken: "owner-b",
          claimedAt: new Date(),
          status: "RUNNING",
          updatedAt: new Date(),
        })
        .where(eq(trajectoryQualificationOperations.projectId, projectId));
    };

    const aResult = await processInitialQualification(projectId, { pilotId });
    initialQualificationFault.afterOwnerCheckBeforeEffect = null;
    expect(aResult?.status).not.toBe("PROPOSED");
    expect(aResult?.status).not.toBe("CLARIFICATION");
    expect(aResult?.status).not.toBe("FAILED");

    const mid = (
      await db
        .select()
        .from(trajectoryQualificationOperations)
        .where(eq(trajectoryQualificationOperations.projectId, projectId))
    )[0]!;
    const revsAfterA = await db
      .select()
      .from(trajectoryRevisions)
      .where(eq(trajectoryRevisions.projectId, projectId));
    expect(revsAfterA).toHaveLength(0);
    expect(mid.trajectoryRevisionId).toBeNull();

    const msgsAfterA = await db
      .select()
      .from(messages)
      .where(sql`${messages.generationId} like ${`sfia:iq:${mid.id}:%`}`);
    expect(msgsAfterA).toHaveLength(0);

    await db
      .update(trajectoryQualificationOperations)
      .set({
        ownerToken: null,
        claimedAt: null,
        status: "PENDING",
        updatedAt: new Date(),
      })
      .where(eq(trajectoryQualificationOperations.id, mid.id));

    const bResult = await processInitialQualification(projectId, { pilotId });
    expect(["PROPOSED", "CLARIFICATION"]).toContain(bResult?.status);
    const revsAfterB = await db
      .select()
      .from(trajectoryRevisions)
      .where(eq(trajectoryRevisions.projectId, projectId));
    if (bResult?.status === "PROPOSED") {
      expect(revsAfterB).toHaveLength(1);
    }
    const msgs = await db
      .select()
      .from(messages)
      .where(sql`${messages.generationId} like ${`sfia:iq:${mid.id}:%`}`);
    expect(msgs).toHaveLength(1);
    expect(msgs[0]?.role).toBe("assistant");
  });

  it("P0-02: resume after D5+resultJson reuses durable assistantContent exactly", async () => {
    const pilotId = await seedPilot("e07-p002-resume");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07P002",
      "Cadrage — reprise exacte du message après D5",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });

    const durableContent =
      "Projet **E07P002** — proposition de trajectoire initiale (non retenue).\n\nCONTENU_DURABLE_P0_02\n\nVous pouvez accepter cette direction.";
    // Simulate crash after D5 pointer + resultJson, before message insert.
    const op = (
      await db
        .select()
        .from(trajectoryQualificationOperations)
        .where(eq(trajectoryQualificationOperations.projectId, projectId))
    )[0]!;
    const fakeRevId = newId("trj");
    await db.insert(trajectoryRevisions).values({
      id: fakeRevId,
      projectId,
      revisionNumber: 1,
      status: "PROPOSED",
      orientation: "Trajectoire séquentielle proposée : cadrage.",
      sourceKind: "COGNITIVE_PROPOSAL",
      sourceRef: op.id,
      forecastJson: [
        { order: 1, cycleType: "CADRAGE", rationale: "test", certainty: "QUALIFIED" },
      ],
    });
    await db
      .update(trajectoryQualificationOperations)
      .set({
        status: "UNKNOWN",
        phase: "PUBLISHING",
        trajectoryRevisionId: fakeRevId,
        resultJson: {
          kind: "PROPOSED",
          forecastSteps: [
            { order: 1, cycleType: "CADRAGE", rationale: "test", certainty: "QUALIFIED" },
          ],
          orientation: "Trajectoire séquentielle proposée : cadrage.",
          assistantContent: durableContent,
        },
        ownerToken: null,
        claimedAt: null,
        updatedAt: new Date(),
      })
      .where(eq(trajectoryQualificationOperations.id, op.id));

    const done = await processInitialQualification(projectId, { pilotId });
    expect(done?.status).toBe("PROPOSED");
    expect(done?.assistantMessageId).toBeTruthy();
    const msg = (
      await db.select().from(messages).where(eq(messages.id, done!.assistantMessageId!))
    )[0]!;
    expect(msg.content).toBe(durableContent);
    expect(msg.role).toBe("assistant");

    // Second resume must reconcile same message, not CONFLICT into FAILED.
    const again = await processInitialQualification(projectId, { pilotId });
    expect(again?.status).toBe("PROPOSED");
    expect(again?.assistantMessageId).toBe(done?.assistantMessageId);
  });

  it("P0-04: legacy link without expected flag does not lock composer", async () => {
    const pilotId = await seedPilot("e07-p004-legacy");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07Legacy",
      "Cadrage — projet antérieur sans qualification",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    // Simulate pre-capability link: expected=false, no op.
    await db
      .update(preparationProjectLinks)
      .set({ initialQualificationExpected: false })
      .where(eq(preparationProjectLinks.projectId, projectId));
    await db
      .delete(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId));

    const { getQualificationProjectionForClient, reconcileInitialQualification } = await import(
      "@/domains/pilotage/initial-qualification"
    );
    const gate = await getQualificationProjectionForClient(pilotId, projectId);
    expect(gate).toBeNull();
    await expect(assertPilotTurnNotBlockedByQualification(pilotId, projectId)).resolves.toBeUndefined();
    const reconciled = await reconcileInitialQualification(projectId, pilotId);
    expect(reconciled).toBeNull();
    const ops = await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId));
    expect(ops).toHaveLength(0);
  });

  it("FIX-08: conversational GO RETAIN+OPEN after initial PROPOSED (D3→D6→D5)", async () => {
    const pilotId = await seedPilot("e07-fix08-go");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07GoConv",
      "Cadrage — GO conversationnel après proposition",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    await ensureInitialQualification({ projectId, preparationId: prep.id, pilotId });
    const terminal = await processInitialQualification(projectId, { pilotId });
    expect(terminal?.status).toBe("PROPOSED");
    expect(terminal?.trajectoryRevisionId).toBeTruthy();

    const conv = (
      await db
        .select()
        .from(conversations)
        .where(eq(conversations.preparationId, prep.id))
        .limit(1)
    )[0]!;
    const last = (
      await db
        .select({ ordinal: messages.ordinal })
        .from(messages)
        .where(eq(messages.conversationId, conv.id))
        .orderBy(sql`${messages.ordinal} desc`)
        .limit(1)
    )[0];
    let ordinal = (last?.ordinal ?? 0) + 1;

    const { applyConversationalAuthority } = await import(
      "@/domains/pilotage/conversation-authority"
    );

    async function seedUserTurn(content: string, qualification: ReturnType<typeof d5PilotageEnvelope>) {
      const msgId = newId("msg");
      await db.insert(messages).values({
        id: msgId,
        conversationId: conv.id,
        role: "user",
        content,
        status: "COMPLETE",
        ordinal: ordinal++,
        generationId: newId("gen"),
        createdAt: new Date(),
      });
      await db.insert(conversationTurnCommands).values({
        id: newId("tcmd"),
        conversationId: conv.id,
        ownerPilotId: pilotId,
        clientTurnKey: newId("ctk"),
        requestFingerprint: newId("fp"),
        operationId: newId("op"),
        status: "COMPLETE",
        userMessageId: msgId,
        ownerToken: newId("tok"),
        resultJson: JSON.stringify({
          semanticQualification: qualification,
          semanticQualificationStashedAt: new Date().toISOString(),
        }),
      });
      return msgId;
    }

    const retainQual = d5PilotageEnvelope({
      operation: "RETAIN_TRAJECTORY",
      objective: "Retenir la trajectoire proposée",
    });
    const retainMsgId = await seedUserTurn("Je retiens cette trajectoire.", retainQual);
    const retain = await applyConversationalAuthority({
      pilotId,
      projectId,
      userMessageId: retainMsgId,
      content: "Je retiens cette trajectoire.",
      clientTurnKey: newId("ctk"),
      preQualified: {
        clarity: "CLEAR",
        operation: "RETAIN_TRAJECTORY",
        objective: "Retenir la trajectoire proposée",
        semanticIntentId: retainQual.intents[0]?.id,
        semanticSchemaVersion: retainQual.schemaVersion,
      },
    });
    expect(retain.attempted).toBe(true);
    expect(["APPLIED", "ALREADY_APPLIED"]).toContain(retain.command?.status);
    expect(retain.humanDecisionCreated || retain.decisionId).toBeTruthy();

    const openQual = d5PilotageEnvelope({
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      objective: "Clarifier le besoin",
    });
    const openMsgId = await seedUserTurn("Ouvre le cycle cadrage.", openQual);
    const open = await applyConversationalAuthority({
      pilotId,
      projectId,
      userMessageId: openMsgId,
      content: "Ouvre le cycle cadrage.",
      clientTurnKey: newId("ctk"),
      preQualified: {
        clarity: "CLEAR",
        operation: "OPEN_CYCLE",
        cycleType: "CADRAGE",
        objective: "Clarifier le besoin",
        semanticIntentId: openQual.intents[0]?.id,
        semanticSchemaVersion: openQual.schemaVersion,
      },
    });
    expect(open.attempted).toBe(true);
    expect(["APPLIED", "ALREADY_APPLIED"]).toContain(open.command?.status);

    const cycles = await db
      .select()
      .from(projectCycles)
      .where(and(eq(projectCycles.projectId, projectId), eq(projectCycles.status, "ACTIVE")));
    expect(cycles).toHaveLength(1);
    expect(cycles[0]?.cycleType).toBe("CADRAGE");
  });

  it("P0-04/FIX-05: new create with expected flag + missing op locks composer", async () => {
    const pilotId = await seedPilot("e07-p004-new");
    const { prep, name } = await seedPrepWithProjection(
      pilotId,
      "E07NewGate",
      "Cadrage — verrou sans opération persistée (nouveau)",
    );
    const created = await createProjectFromPrep(pilotId, prep.id, name, prep.creationRevision);
    const projectId = requireProjectId(created);
    expect(
      (
        await db
          .select()
          .from(preparationProjectLinks)
          .where(eq(preparationProjectLinks.projectId, projectId))
      )[0]?.initialQualificationExpected,
    ).toBe(true);
    await db
      .delete(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId));

    const { getQualificationProjectionForClient } = await import(
      "@/domains/pilotage/initial-qualification"
    );
    const gate = await getQualificationProjectionForClient(pilotId, projectId);
    expect(gate?.status).toBe("PENDING");
    expect(gate?.composerLocked).toBe(true);
    await expect(assertPilotTurnNotBlockedByQualification(pilotId, projectId)).rejects.toBeInstanceOf(
      StudioError,
    );
  });
});