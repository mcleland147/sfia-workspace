/**
 * Integrator closure — S05 admission, D5/D6 human-act idempotence, D4 semantic knowledge.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
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
  knowledgeAcquis,
  preparations,
} from "@/db/schema";
import { createDevTestSession } from "@/domains/identity/session";
import {
  getPreparationContext,
  openOrCreatePreparation,
} from "@/domains/preparation/service";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import {
  markTurnUnknown,
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { maybeCapitalizeFromExchange } from "@/domains/knowledge/service";

describe("ML4C integrator — S05 / idempotence / knowledge (PG)", () => {
  let pilotId: string;
  let preparationId: string;
  let conversationId: string;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
    pilotId = sess.pilotId;
    const prep = await openOrCreatePreparation(pilotId);
    preparationId = prep.id;
    const ctx = await getPreparationContext(pilotId, prep.id);
    conversationId = ctx.conversation!.id;
  });

  afterAll(() => {
    /* e2e isolated */
  });

  it("S05-G02/G04: UNKNOWN A blocks OPEN_CYCLE and D2 preview for B", async () => {
    const a = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `s05-a-${Date.now()}`,
      content: "acte A en cours",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh A");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify({
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "a",
        intents: [
          {
            id: "ia",
            capabilityId: "d3.converse",
            mode: "EXPLORE",
            summary: "a",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "a",
      }),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_A", a.ownerToken);

    const previewBefore = (
      await db
        .select()
        .from(preparations)
        .where(eq(preparations.id, preparationId))
        .limit(1)
    )[0];
    const revBefore = previewBefore?.creationRevision ?? 0;

    const bCreate = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Je veux créer un projet.",
      {
        clientTurnKey: `s05-b-create-${Date.now()}`,
        // Hint deliberately omitted — server must still find sibling A.
      },
    );
    expect(bCreate.pendingEffectBlocked).toBe(true);
    expect(bCreate.missionProjection?.status).not.toBe("AWAITING_PILOT_ACT");
    const previewAfter = (
      await db
        .select()
        .from(preparations)
        .where(eq(preparations.id, preparationId))
        .limit(1)
    )[0];
    expect(previewAfter?.creationRevision ?? 0).toBe(revBefore);

    const bCycle = await postUserMessageAndNora(pilotId, preparationId, "Ouvre le cycle cadrage.", {
      clientTurnKey: `s05-b-cycle-${Date.now()}`,
    });
    expect(bCycle.pendingEffectBlocked).toBe(true);
    expect(bCycle.pilotageEffect?.attempted).not.toBe(true);

    const aRow = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, a.commandId))
        .limit(1)
    )[0];
    expect(aRow?.status).toBe("UNKNOWN");
  });

  it("S05-G01: independent question over UNKNOWN A is allowed without clearing A", async () => {
    const a = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `s05-a2-${Date.now()}`,
      content: "acte A2",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await markTurnUnknown(a.commandId, "TEST_S05_A2", a.ownerToken);

    const b = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Quelle est la différence entre blob et commit ?",
      { clientTurnKey: `s05-b-q-${Date.now()}` },
    );
    expect(b.status).toBe("COMPLETE");
    expect(b.pendingEffectBlocked).not.toBe(true);
    expect(b.nextTurnKind).toBe("DIALOGUE_INDEPENDANT");

    const aRow = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, a.commandId))
        .limit(1)
    )[0];
    expect(aRow?.status).toBe("UNKNOWN");
  });

  // AUTH-I02/I03 vacuous path REMOVED — real proofs live in ml4c-auth-reconciliation.pg.test.ts (R01–R14).

  it("KNOW-R07: Nora established without independent source → no FACT", async () => {
    const beforeFacts = await db
      .select()
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, preparationId),
          eq(knowledgeAcquis.kind, "FACT"),
          eq(knowledgeAcquis.status, "CURRENT"),
        ),
      );
    const cap = await maybeCapitalizeFromExchange(pilotId, preparationId, {
      userText: "Retiens comme fait établi que la latence cible est 50ms.",
      assistantText: "ok",
      generationId: "g-fact-refuse",
      userMessageId: "m-fact-refuse",
      proposals: [
        {
          intentId: "ik-est",
          kind: "ACQUIS",
          statement: "La latence cible est 50ms.",
          epistemic: "established",
          subjectTitle: "Performance",
          continuityReason: "Nora marked established",
        },
      ],
    });
    expect(cap.humanDecisionCreated).toBe(false);
    const acquis = cap.capitalisations.find((c) => c.kind === "acquis");
    expect(acquis?.status).toBe("AVAILABLE");
    expect(acquis?.reason).toBe("FACT_PROMOTION_REFUSED_NO_INDEPENDENT_SOURCE");
    const after = await db
      .select()
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, preparationId),
          eq(knowledgeAcquis.statement, "La latence cible est 50ms."),
          eq(knowledgeAcquis.status, "CURRENT"),
        ),
      );
    expect(after.length).toBe(1);
    expect(after[0]?.kind).toBe("HYPOTHESIS");
    expect(after[0]?.kind).not.toBe("FACT");
    const afterFacts = await db
      .select()
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, preparationId),
          eq(knowledgeAcquis.kind, "FACT"),
          eq(knowledgeAcquis.status, "CURRENT"),
        ),
      );
    expect(afterFacts.length).toBe(beforeFacts.length);
  });

  it("KNOW-R13: D4 proposal never creates HumanDecision", async () => {
    const cap = await maybeCapitalizeFromExchange(pilotId, preparationId, {
      userText: "Note l'hypothèse d'un déploiement progressif.",
      assistantText: "ok",
      generationId: "g-no-hd",
      userMessageId: "m-no-hd",
      proposals: [
        {
          intentId: "ik-h",
          kind: "ACQUIS",
          statement: "Déploiement progressif envisagé.",
          epistemic: "hypothesized",
          subjectTitle: "Déploiement",
        },
      ],
    });
    expect(cap.humanDecisionCreated).toBe(false);
  });

  it("KNOW-01/KNOW-11: semantic proposal capitalises once; polite chatter writes nothing", async () => {
    const before = await db
      .select()
      .from(knowledgeAcquis)
      .where(eq(knowledgeAcquis.preparationId, preparationId));

    const polite = await maybeCapitalizeFromExchange(pilotId, preparationId, {
      userText: "Bonjour Nora, comment vas-tu ?",
      assistantText: "Bonjour",
      generationId: "g-polite",
      userMessageId: "m-polite",
      proposals: [],
    });
    expect(polite.capitalisations).toHaveLength(0);

    const cap = await maybeCapitalizeFromExchange(pilotId, preparationId, {
      userText:
        "Retiens comme acquis structurant que l'architecture modulaire est la piste privilégiée pour la suite.",
      assistantText: "ok",
      generationId: "g-arch",
      userMessageId: "m-arch",
      proposals: [
        {
          intentId: "ik",
          kind: "ACQUIS",
          statement:
            "L'architecture modulaire est la piste privilégiée pour la suite du projet.",
          epistemic: "hypothesized",
          subjectTitle: "Architecture",
          continuityReason: "Acquis structurant",
        },
      ],
    });
    expect(cap.humanDecisionCreated).toBe(false);
    expect(cap.capitalisations.some((c) => c.kind === "acquis" && c.status === "AVAILABLE")).toBe(
      true,
    );

    const again = await maybeCapitalizeFromExchange(pilotId, preparationId, {
      userText: "same",
      assistantText: "ok",
      generationId: "g-arch-2",
      userMessageId: "m-arch-2",
      proposals: [
        {
          intentId: "ik",
          kind: "ACQUIS",
          statement:
            "L'architecture modulaire est la piste privilégiée pour la suite du projet.",
          epistemic: "hypothesized",
          subjectTitle: "Architecture",
        },
      ],
    });
    const acquisAgain = again.capitalisations.find((c) => c.kind === "acquis");
    expect(acquisAgain?.status).toBe("AVAILABLE");

    const after = await db
      .select()
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, preparationId),
          eq(knowledgeAcquis.status, "CURRENT"),
          eq(
            knowledgeAcquis.statement,
            "L'architecture modulaire est la piste privilégiée pour la suite du projet.",
          ),
        ),
      );
    expect(after.length).toBe(1);
    expect(after[0]?.kind).toBe("HYPOTHESIS");
    // Idempotent capitalize: CURRENT row count for this statement stays 1 (no duplicate).
    expect(before.filter((a) => a.statement === after[0]?.statement && a.status === "CURRENT").length).toBeLessThanOrEqual(
      1,
    );
  });

  it("fixture path: polite message produces no document / no knowledge write", async () => {
    const r = await postUserMessageAndNora(pilotId, preparationId, "Bonjour Nora, comment vas-tu ?", {
      clientTurnKey: `know-polite-${Date.now()}`,
    });
    expect(r.documentSave).toBeNull();
    expect(r.humanDecisionCreated).toBe(false);
  });
});
