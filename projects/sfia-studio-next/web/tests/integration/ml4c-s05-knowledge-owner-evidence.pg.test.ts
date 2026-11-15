/**
 * S05 knowledge owner evidence — K01–K10 / K12 against real D4 knowledge tables.
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
import {
  conversationTurnCommands,
  knowledgeAcquis,
  knowledgeOpenPoints,
  knowledgeSubjects,
  preparations,
} from "@/db/schema";
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

describe("ML4C S05 knowledge owner evidence (PG)", () => {
  let pilotId: string;
  let otherPilotId: string;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
    pilotId = sess.pilotId;
    const other = await createDevTestSession("b", { host: "127.0.0.1:3100" });
    otherPilotId = other.pilotId;
  });

  afterAll(() => {
    /* e2e isolated */
  });

  it("K01: acquis with sourceId=userMessageId (no commandId) → probe true", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-k01-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A knowledge acquis",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K01", a.ownerToken);

    await db.insert(knowledgeAcquis).values({
      id: newId("ka"),
      preparationId: prep.id,
      projectId: null,
      ownerPilotId: pilotId,
      subjectId: null,
      kind: "HYPOTHESIS",
      statement: "Latence cible hypothétique 50ms pour K01.",
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        sourceId: a.userMessageId,
        generationId: "gen_k01_not_on_turn",
        notedAt: new Date().toISOString(),
        epistemic: "hypothesized",
      }),
      status: "CURRENT",
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
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBe(true);

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-k01-b-${Date.now()}`,
    });
    expect(b.pendingEffectBlocked).toBe(true);
  });

  it("K02: open point attributed to sibling while resultJson empty → block", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-k02-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A open point",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(
      a.commandId,
      "TEST_S05_K02",
      a.ownerToken,
      JSON.stringify({
        semanticQualificationStatus: "UNAVAILABLE",
        semanticQualification: UNAVAILABLE_Q,
        documentSave: null,
        pilotageEffect: null,
        humanDecisionCreated: false,
      }),
    );

    await db.insert(knowledgeOpenPoints).values({
      id: newId("kop"),
      preparationId: prep.id,
      projectId: null,
      ownerPilotId: pilotId,
      subjectId: null,
      statement: "Point ouvert corrélé au sibling K02 sans effet RJ.",
      status: "OPEN",
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        sourceId: a.userMessageId,
        notedAt: new Date().toISOString(),
        epistemic: "limited",
      }),
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
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBe(true);

    const revBefore =
      (
        await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
      )[0]?.creationRevision ?? 0;
    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-k02-b-${Date.now()}`,
    });
    expect(b.pendingEffectBlocked).toBe(true);
    const revAfter =
      (
        await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
      )[0]?.creationRevision ?? 0;
    expect(revAfter).toBe(revBefore);
  });

  it("K03: subject without provenance is not attributed; UNAVAILABLE stays non-blocking", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-k03-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A subject only",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K03", a.ownerToken);

    await db.insert(knowledgeSubjects).values({
      id: newId("ks"),
      preparationId: prep.id,
      projectId: null,
      ownerPilotId: pilotId,
      title: `Sujet orphelin K03 ${Date.now()}`,
      status: "ACTIVE",
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
        bindingCorrelationKeys: [],
      },
    });
    // No abusive attribution from unprovenanced subject; UNAVAILABLE path closed for knowledge writes.
    expect(probe).toBe(false);

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-k03-b-${Date.now()}`,
    });
    expect(b.pendingEffectBlocked).toBe(false);
  });

  it("K04: UNAVAILABLE + complete empty knowledge/owner probes → not blocked", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-k04-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A clean unavailable",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K04", a.ownerToken);

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
    expect(probe).toBe(false);

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-k04-b-${Date.now()}`,
    });
    expect(b.pendingEffectBlocked).toBe(false);
  });

  it("K05: missing userMessageId + generationId → null (fail closed)", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const probe = await probeSiblingOwnerEffects({
      pilotId,
      preparationId: prep.id,
      projectId: null,
      sibling: {
        commandId: `tcmd_missing_k05_${Date.now()}`,
        clientTurnKey: `s05-k05-${Date.now()}`,
        userMessageId: null,
        operationId: null,
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBeNull();
  });

  it("K06: probe read error → null, S05 blocks", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-k06-${Date.now()}`;
    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A probe error",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K06", a.ownerToken);

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
        clientTurnKey: `s05-k06-b-${Date.now()}`,
      });
      expect(b.pendingEffectBlocked).toBe(true);
    } finally {
      if (prev === undefined) delete process.env.STUDIO_S05_PROBE_FORCE_ERROR;
      else process.env.STUDIO_S05_PROBE_FORCE_ERROR = prev;
    }
  });

  it("K07: acquis+open point on A; clean B sibling both evaluated — block", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-k07-a-${Date.now()}`;
    const cKey = `s05-k07-c-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "A with knowledge",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh A");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K07A", a.ownerToken);
    await db.insert(knowledgeAcquis).values({
      id: newId("ka"),
      preparationId: prep.id,
      ownerPilotId: pilotId,
      kind: "HYPOTHESIS",
      statement: "Acquis K07 corrélé au sibling dangereux.",
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        sourceId: a.userMessageId,
      }),
      status: "CURRENT",
    });
    await db.insert(knowledgeOpenPoints).values({
      id: newId("kop"),
      preparationId: prep.id,
      ownerPilotId: pilotId,
      statement: "Point ouvert K07 corrélé aussi.",
      status: "RESOLVED",
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        sourceId: a.userMessageId,
      }),
    });

    const c = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: cKey,
      content: "C clean unavailable",
    });
    if (c.kind !== "fresh") throw new Error("expected fresh C");
    await stashTurnQualification({
      commandId: c.commandId,
      ownerToken: c.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(c.commandId, "TEST_S05_K07C", c.ownerToken);

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-k07-b-${Date.now()}`,
      unresolvedPendingClientTurnKey: cKey,
    });
    expect(b.pendingEffectBlocked).toBe(true);
  });

  it("K08: same sourceId in another prep/pilot is not attributed", async () => {
    const prepA = await openOrCreatePreparation(pilotId);
    const ctxA = await getPreparationContext(pilotId, prepA.id);
    const aKey = `s05-k08-a-${Date.now()}`;
    const a = await reserveTurnCommand({
      conversationId: ctxA.conversation!.id,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "A local",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K08", a.ownerToken);

    const prepOther = await openOrCreatePreparation(otherPilotId);
    await db.insert(knowledgeAcquis).values({
      id: newId("ka"),
      preparationId: prepOther.id,
      ownerPilotId: otherPilotId,
      kind: "HYPOTHESIS",
      statement: "Acquis étranger réutilisant le même sourceId apparent.",
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        sourceId: a.userMessageId,
      }),
      status: "CURRENT",
    });

    const probe = await probeSiblingOwnerEffects({
      pilotId,
      preparationId: prepA.id,
      projectId: null,
      sibling: {
        commandId: a.commandId,
        clientTurnKey: aKey,
        userMessageId: a.userMessageId,
        operationId: a.operationId,
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBe(false);
  });

  it("K09: generationId structured match without sourceId still finds acquis", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const aKey = `s05-k09-${Date.now()}`;
    const a = await reserveTurnCommand({
      conversationId: ctx.conversation!.id,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "A gen match",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    const gen = `gen_k09_${Date.now()}`;
    await db
      .update(conversationTurnCommands)
      .set({ generationId: gen })
      .where(eq(conversationTurnCommands.id, a.commandId));
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K09", a.ownerToken);

    await db.insert(knowledgeAcquis).values({
      id: newId("ka"),
      preparationId: prep.id,
      ownerPilotId: pilotId,
      kind: "HYPOTHESIS",
      statement: "Acquis K09 matché uniquement par generationId durable.",
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        generationId: gen,
      }),
      status: "CURRENT",
    });

    const probe = await probeSiblingOwnerEffects({
      pilotId,
      preparationId: prep.id,
      projectId: null,
      sibling: {
        commandId: a.commandId,
        clientTurnKey: aKey,
        userMessageId: null,
        operationId: a.operationId,
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBe(true);
  });

  it("K10: Intervencia-shaped ids are not hardcoded", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const aKey = "turn-6424c417-8bf0-4732-a0fa-1e73444e9f70";
    const a = await reserveTurnCommand({
      conversationId: ctx.conversation!.id,
      ownerPilotId: pilotId,
      clientTurnKey: `${aKey}-${Date.now()}`,
      content: "Intervencia-shaped",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K10", a.ownerToken);

    const probe = await probeSiblingOwnerEffects({
      pilotId,
      preparationId: prep.id,
      projectId: null,
      sibling: {
        commandId: a.commandId,
        clientTurnKey: a.clientTurnKey,
        userMessageId: a.userMessageId,
        operationId: a.operationId,
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBe(false);
  });
});
