/**
 * S05 remédiation R-01 / R-02 — owner evidence + SAME_INTENT through real gather path.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, documents, preparations } from "@/db/schema";
import { createDevTestSession } from "@/domains/identity/session";
import {
  getPreparationContext,
  openOrCreatePreparation,
} from "@/domains/preparation/service";
import {
  postUserMessageAndNora,
  probeSiblingOwnerEffects,
} from "@/domains/conversation/service";
import {
  markTurnUnknown,
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { newId } from "@/lib/ids";

const UNAVAILABLE_Q = {
  schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  status: "UNAVAILABLE",
  goal: "privacy",
  intents: [
    {
      id: "i1",
      capabilityId: "d5.pilotage_command",
      mode: "REQUEST_EFFECT",
      summary: "open",
      parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "cadrage" },
      constraints: [] as string[],
      dependsOn: [] as string[],
      sourceEvidence: [] as string[],
    },
  ],
  clarifications: [] as string[],
  replyDraft: "cannot",
};

describe("ML4C S05 owner evidence remédiation (PG)", () => {
  let pilotId: string;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
    pilotId = sess.pilotId;
  });

  afterAll(() => {
    /* e2e isolated */
  });

  it("S05-R01: UNAVAILABLE + complete empty owner probe → independent CREATE not blocked", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-r01-safe-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A UNAVAILABLE",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh A");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_R01", a.ownerToken);

    const probe = await probeSiblingOwnerEffects({
      pilotId,
      preparationId: prep.id,
      projectId: ctx.project?.id ?? null,
      sibling: {
        commandId: a.commandId,
        clientTurnKey: aKey,
        userMessageId: a.userMessageId,
        operationId: a.operationId,
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBe(false);

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-r01-b-${Date.now()}`,
    });
    expect(b.pendingEffectBlocked).toBe(false);

    const aRow = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, a.commandId))
        .limit(1)
    )[0];
    expect(aRow?.status).toBe("UNKNOWN");
  });

  it("S05-R02: owner document row exists while resultJson save is null → BLOQUÉ via real probe", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const sharedCorr = `owner-corr-r02-${Date.now()}`;
    const aKey = `s05-r02-hidden-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A with hidden owner doc",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh A");

    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    // RJ looks harmless (null documentSave) but carries durable binding for owner probe.
    await markTurnUnknown(
      a.commandId,
      "TEST_S05_R02",
      a.ownerToken,
      JSON.stringify({
        semanticQualificationStatus: "UNAVAILABLE",
        semanticQualification: UNAVAILABLE_Q,
        documentSave: null,
        pilotageEffect: null,
        humanDecisionCreated: false,
        documentCommandBindings: [{ correlationKey: sharedCorr }],
      }),
    );

    // Owner row present — resultJson does not reveal AVAILABLE documentSave.
    await db.insert(documents).values({
      id: newId("doc"),
      preparationId: prep.id,
      projectId: null,
      ownerPilotId: pilotId,
      title: "Hidden owner effect",
      creationCorrelationKey: sharedCorr,
    });

    const probe = await probeSiblingOwnerEffects({
      pilotId,
      preparationId: prep.id,
      projectId: null,
      sibling: {
        commandId: a.commandId,
        clientTurnKey: aKey,
        userMessageId: a.userMessageId,
        operationId: a.operationId,
        bindingCorrelationKeys: [sharedCorr],
      },
    });
    expect(probe).toBe(true);

    const revBefore = (
      await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
    )[0]?.creationRevision ?? 0;

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-r02-b-${Date.now()}`,
    });
    expect(b.pendingEffectBlocked).toBe(true);

    const revAfter = (
      await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
    )[0]?.creationRevision ?? 0;
    expect(revAfter).toBe(revBefore);
  });

  it("S05-R04: owner probe error → null → independent CREATE BLOQUÉ (fail closed)", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-r04-err-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A probe error",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh A");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_R04", a.ownerToken);

    const prev = process.env.STUDIO_S05_PROBE_FORCE_ERROR;
    process.env.STUDIO_S05_PROBE_FORCE_ERROR = "1";
    try {
      const probe = await probeSiblingOwnerEffects({
        pilotId,
        preparationId: prep.id,
        projectId: null,
        sibling: {
          commandId: a.commandId,
          clientTurnKey: aKey,
          userMessageId: a.userMessageId,
          operationId: a.operationId,
          bindingCorrelationKeys: [],
        },
      });
      expect(probe).toBeNull();

      const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
        clientTurnKey: `s05-r04-b-${Date.now()}`,
      });
      expect(b.pendingEffectBlocked).toBe(true);
    } finally {
      if (prev === undefined) delete process.env.STUDIO_S05_PROBE_FORCE_ERROR;
      else process.env.STUDIO_S05_PROBE_FORCE_ERROR = prev;
    }
  });

  it("S05-R10: SAME_INTENT via shared durable correlation key blocks independent CREATE", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const shared = `same-intent-corr-${Date.now()}`;
    const aKey = `s05-r10-a-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A same intent",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh A");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(
      a.commandId,
      "TEST_S05_R10",
      a.ownerToken,
      JSON.stringify({
        semanticQualificationStatus: "UNAVAILABLE",
        semanticQualification: UNAVAILABLE_Q,
        documentSave: null,
        documentCommandBindings: [{ correlationKey: shared }],
      }),
    );

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-r10-b-${Date.now()}`,
      // Same durable salt / correlation as sibling binding → SAME_INTENT.
      correlationKey: shared,
    });
    expect(b.pendingEffectBlocked).toBe(true);
    expect(b.pendingBlockReason ?? "").toMatch(/S05_PENDING_BLOCKS_SAME_INTENT|S05_PENDING_BLOCKS/);
  });
});
