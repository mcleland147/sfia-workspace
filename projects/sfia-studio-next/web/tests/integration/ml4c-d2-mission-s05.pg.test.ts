/**
 * Q1 — Real D2 sas path produces AWAITING_PILOT_ACT; S05 blocks concurrent effects.
 * No artificial mission JSON seed.
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
  conversationTurnCommands,
  documents,
  preparationProjectLinks,
  preparations,
} from "@/db/schema";
import { createDevTestSession } from "@/domains/identity/session";
import {
  getPreparationContext,
  openOrCreatePreparation,
} from "@/domains/preparation/service";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import {
  loadLatestMissionsByIntentKey,
  loadPriorMissionProjection,
  d2MissionIdempotencyKey,
} from "@/domains/conversation/intent-conduction";
import { newId } from "@/lib/ids";

describe("ML4C Q1 — real D2 AWAITING_PILOT_ACT + S05 (PG)", () => {
  let pilotId: string;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("SETUP BLOCKED: DATABASE_URL required");
    const sess = await createDevTestSession("a", { host: "127.0.0.1:3101" });
    pilotId = sess.pilotId;
  });

  it("MISSION-01..08: real D2 path → AWAITING without project / without UNKNOWN", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx0 = await getPreparationContext(pilotId, prep.id);
    expect(ctx0.preparation.status).toBe("OPEN");
    expect(ctx0.project).toBeNull();
    expect(ctx0.conversation?.id).toBeTruthy();
    const links0 = await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.preparationId, prep.id));
    expect(links0.length).toBe(0);

    const revBefore = (
      await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
    )[0]!.creationRevision;

    const a = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `d2-a-${newId("ctk")}`,
    });

    expect(a.status).toBe("COMPLETE");
    expect(a.nextTurnKind).toBe("INTENTION_EFFET");
    expect(a.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(a.missionProjection?.preparationId).toBe(prep.id);
    expect(a.missionProjection?.clientIntentKey).toBeTruthy();
    expect(a.missionProjection?.ownerActBinding).toEqual({
      kind: "D2_CREATE_PROJECT",
      preparationId: prep.id,
      clientIntentKey: a.missionProjection!.clientIntentKey,
      suggestedIdempotencyKey: d2MissionIdempotencyKey(a.missionProjection!.clientIntentKey),
    });
    expect(a.missionProjection?.steps.some((s) => s.capabilityId === "d2.create_project")).toBe(
      true,
    );
    expect(a.humanDecisionCreated).toBe(false);

    const ctx1 = await getPreparationContext(pilotId, prep.id);
    expect(ctx1.project).toBeNull();
    const links1 = await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.preparationId, prep.id));
    expect(links1.length).toBe(0);

    const missions = await loadLatestMissionsByIntentKey(ctx1.conversation!.id);
    const durable = missions.get(a.missionProjection!.clientIntentKey);
    expect(durable?.status).toBe("AWAITING_PILOT_ACT");
    expect(durable?.ownerActBinding?.kind).toBe("D2_CREATE_PROJECT");

    const prior = await loadPriorMissionProjection(ctx1.conversation!.id, {
      awaitingPilotAct: true,
      preparationId: prep.id,
    });
    expect(prior?.clientIntentKey).toBe(a.missionProjection!.clientIntentKey);

    const unknown = await db
      .select()
      .from(conversationTurnCommands)
      .where(
        and(
          eq(conversationTurnCommands.conversationId, ctx1.conversation!.id),
          eq(conversationTurnCommands.status, "UNKNOWN"),
        ),
      );
    expect(unknown.length).toBe(0);

    const revAfter = (
      await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
    )[0]!.creationRevision;
    // updatePreview may advance creationRevision — project still absent.
    expect(revAfter).toBeGreaterThanOrEqual(revBefore);
    expect(ctx1.project).toBeNull();
  });

  it("MISSION-09: control prep without pending A — document CREATE admissible", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const docsBefore = await db
      .select()
      .from(documents)
      .where(eq(documents.preparationId, prep.id));
    const r = await postUserMessageAndNora(
      pilotId,
      prep.id,
      "Rédige un document de synthèse sur les options A et B",
      { clientTurnKey: `d2-ctrl-${newId("ctk")}` },
    );
    expect(r.status).toBe("COMPLETE");
    expect(r.pendingEffectBlocked).not.toBe(true);
    expect(r.documentSave?.status).toBe("AVAILABLE");
    expect(r.documentSave?.documentId).toBeTruthy();
    const docsAfter = await db
      .select()
      .from(documents)
      .where(eq(documents.preparationId, prep.id));
    expect(docsAfter.length).toBe(docsBefore.length + 1);
  });

  it("MISSION-10..14: AWAITING from real D2 blocks document B; dialogue ok; hint irrelevant", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const a = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `d2-block-a-${newId("ctk")}`,
    });
    expect(a.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    const intentKey = a.missionProjection!.clientIntentKey;
    const revAfterA = (
      await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
    )[0]!.creationRevision;
    const docsBefore = await db
      .select()
      .from(documents)
      .where(eq(documents.preparationId, prep.id));

    const b = await postUserMessageAndNora(
      pilotId,
      prep.id,
      "Rédige un document de synthèse sur les options A et B",
      {
        clientTurnKey: `d2-block-b-${newId("ctk")}`,
        // Hint absent / would be falsified — server must still use mission A.
      },
    );
    expect(b.nextTurnKind).toBe("INTENTION_EFFET");
    expect(b.pendingEffectBlocked).toBe(true);
    expect(String(b.pendingBlockReason ?? "")).toMatch(/S05_MISSION_BLOCKS_EFFECT/i);
    expect(b.documentSave == null || b.documentSave.status === "NOT_EXECUTED").toBe(true);
    expect(b.humanDecisionCreated).toBe(false);

    const docsAfter = await db
      .select()
      .from(documents)
      .where(eq(documents.preparationId, prep.id));
    expect(docsAfter.length).toBe(docsBefore.length);
    const revAfterB = (
      await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
    )[0]!.creationRevision;
    expect(revAfterB).toBe(revAfterA);

    const ctx = await getPreparationContext(pilotId, prep.id);
    const prior = await loadPriorMissionProjection(ctx.conversation!.id, {
      awaitingPilotAct: true,
    });
    expect(prior?.clientIntentKey).toBe(intentKey);
    expect(prior?.status).toBe("AWAITING_PILOT_ACT");
    expect(ctx.project).toBeNull();

    const q = await postUserMessageAndNora(
      pilotId,
      prep.id,
      "Quelle est la différence entre blob et commit ?",
      { clientTurnKey: `d2-q-${newId("ctk")}` },
    );
    expect(q.status).toBe("COMPLETE");
    expect(q.nextTurnKind).toBe("DIALOGUE_INDEPENDANT");
    expect(q.pendingEffectBlocked).not.toBe(true);
    const prior2 = await loadPriorMissionProjection(ctx.conversation!.id, {
      awaitingPilotAct: true,
    });
    expect(prior2?.clientIntentKey).toBe(intentKey);
  });
});
