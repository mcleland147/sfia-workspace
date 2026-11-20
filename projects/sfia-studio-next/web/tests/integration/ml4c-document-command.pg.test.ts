import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents, messages, pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import {
  getConversationId,
  listMessages,
  postUserMessageAndNora,
} from "@/domains/conversation/service";
import {
  admitDocumentCommand,
  contentSha256,
  sealAndApplyDocumentCommand,
  resolveAssistantProposal,
} from "@/domains/conversation/document-command";
import { completeTurnCommand, reserveTurnCommand } from "@/domains/conversation/turn-command";
import {
  listDocumentRevisions,
  reviseDocument,
  savePreparationDocument,
} from "@/domains/document/service";
import { sfiaDocumentFence } from "../helpers/semantic-fixture-envelopes";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function countDocsByCreationKey(
  pilotId: string,
  preparationId: string,
  creationCorrelationKey: string,
) {
  const rows = await db
    .select({ id: documents.id })
    .from(documents)
    .where(
      and(
        eq(documents.ownerPilotId, pilotId),
        eq(documents.preparationId, preparationId),
        eq(documents.creationCorrelationKey, creationCorrelationKey),
      ),
    );
  return rows.length;
}

async function countD4Rows(pilotId: string, preparationId: string) {
  const docs = await db
    .select({ id: documents.id })
    .from(documents)
    .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, preparationId)));
  const revs =
    docs.length === 0
      ? []
      : await db
          .select({ id: documentRevisions.id })
          .from(documentRevisions)
          .where(
            sql`${documentRevisions.documentId} in (${sql.join(
              docs.map((d) => sql`${d.id}`),
              sql`, `,
            )})`,
          );
  return { documents: docs.length, revisions: revs.length };
}

describe("ML4C document command (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("CREATE via savePreparationDocument + correlation replay; mismatch → CONFLICT", async () => {
    const pilotId = await seedPilot("ml4c-doc-rec");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-create-${Date.now()}`;
    const v1 = await savePreparationDocument(
      pilotId,
      prep.id,
      "Atomic CREATE",
      "# Atomic\n\nPremière version.\n",
      undefined,
      { correlationKey: corr },
    );
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE") throw new Error("v1");

    const replay = await savePreparationDocument(
      pilotId,
      prep.id,
      "Atomic CREATE",
      "# Atomic\n\nPremière version.\n",
      undefined,
      { correlationKey: corr },
    );
    expect(replay.status).toBe("AVAILABLE");
    if (replay.status === "AVAILABLE" && "idempotentReplay" in replay) {
      expect(replay.idempotentReplay).toBe(true);
    }

    const conflict = await savePreparationDocument(
      pilotId,
      prep.id,
      "Atomic CREATE",
      "# Atomic\n\nPayload divergent.\n",
      undefined,
      { correlationKey: corr },
    );
    expect(conflict.status).toBe("CONFLICT");
    if (conflict.status === "CONFLICT") {
      expect(conflict.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
    }
  });

  it("sealAndApplyDocumentCommand CREATE then REVISE with turn fence", async () => {
    const pilotId = await seedPilot("ml4c-doc-seal");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-seal-${Date.now()}`,
      content: "Crée un document de continuité ML4C.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("expected fresh turn");

    const title = "Continuité ML4C";
    const body = `# ${title}\n\nVersion initiale scellée.\n`;
    const admitted = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-create",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title,
      contentMarkdown: body,
    });
    expect(admitted.ok).toBe(true);
    if (!admitted.ok) throw new Error(admitted.reason);

    const sealed = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });
    expect(sealed.sealApplied).toBe(true);
    expect(sealed.effect.status).toBe("AVAILABLE");
    if (sealed.effect.status !== "AVAILABLE") throw new Error("create failed");
    const documentId = sealed.effect.documentId;
    const baseRevisionId = sealed.effect.revisionId;

    const assistantId = newId("msg");
    await db.insert(messages).values({
      id: assistantId,
      conversationId: convId!,
      role: "assistant",
      content: "Tour scellé — CREATE appliqué.",
      status: "COMPLETE",
      ordinal: reserved.ordinalAssistant,
    });
    await completeTurnCommand({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      status: "COMPLETE",
      assistantMessageId: assistantId,
    });

    const reserved2 = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-seal-rev-${Date.now()}`,
      content: "Révise le document de continuité.",
    });
    expect(reserved2.kind).toBe("fresh");
    if (reserved2.kind !== "fresh") throw new Error("expected fresh revise turn");

    const revisedBody = `# ${title}\n\nVersion initiale scellée.\n\n## Révision\n\nAjout.\n`;
    const admittedRev = admitDocumentCommand({
      commandId: reserved2.commandId,
      operationId: reserved2.operationId,
      userMessageId: reserved2.userMessageId,
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      preparationId: prep.id,
      documentId,
      baseRevisionId,
      // Production seal path always passes source+observed head (legacy base-alone is obsolete fixture).
      sourceRevisionId: baseRevisionId,
      observedHeadRevisionId: baseRevisionId,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved2.commandId },
      title,
      contentMarkdown: revisedBody,
    });
    expect(admittedRev.ok).toBe(true);
    if (!admittedRev.ok) throw new Error(admittedRev.reason);

    const sealedRev = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved2.commandId, ownerToken: reserved2.ownerToken },
      binding: admittedRev.binding,
    });
    expect(sealedRev.sealApplied).toBe(true);
    expect(sealedRev.effect.status).toBe("AVAILABLE");
    if (sealedRev.effect.status === "FAILED") {
      throw new Error(`revise seal failed: ${sealedRev.effect.reason}`);
    }
    const list = await listDocumentRevisions(pilotId, prep.id, documentId!);
    expect(list.revisions.length).toBeGreaterThanOrEqual(2);
  });

  it("REVISE stale base → CONFLICT", async () => {
    const pilotId = await seedPilot("ml4c-doc-stale");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Spec", "# Spec\n\nA\n");
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE") throw new Error("v1");
    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# Spec\n\nB\n",
      correlationKey: `rev-${Date.now()}`,
    });
    expect(v2.status).toBe("AVAILABLE");
    const conflict = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: "# Spec\n\nstale attempt\n",
      correlationKey: `rev-stale-${Date.now()}`,
    });
    expect(conflict.status).toBe("CONFLICT");
  });

  it("resolveAssistantProposal extracts sfia-document; denies other pilot", async () => {
    const pilotA = await seedPilot("ml4c-prop-a");
    const prepA = await openOrCreatePreparation(pilotA);
    const convA = await getConversationId(pilotA, prepA.id);
    expect(convA).toBeTruthy();
    const title = "PROP ML4C exact";
    const body = "Corps contractuel pour extraction.";
    const assistantId = newId("msg");
    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convA!))
      )[0]?.o ?? 0;
    await db.insert(messages).values({
      id: assistantId,
      conversationId: convA!,
      role: "assistant",
      content: sfiaDocumentFence(title, body),
      status: "COMPLETE",
      ordinal: maxOrd + 1,
      generationId: newId("gen"),
    });

    const ok = await resolveAssistantProposal({
      pilotId: pilotA,
      preparationId: prepA.id,
      assistantMessageId: assistantId,
    });
    expect(ok.ok).toBe(true);
    if (ok.ok) {
      expect(ok.proposal.title).toBe(title);
      expect(ok.proposal.contentMarkdown).toContain(body);
      expect(ok.proposal.contentSha256).toBe(
        contentSha256(title, ok.proposal.contentMarkdown),
      );
    }

    const pilotB = await seedPilot("ml4c-prop-b");
    const denied = await resolveAssistantProposal({
      pilotId: pilotB,
      preparationId: prepA.id,
      assistantMessageId: assistantId,
    });
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.reason).toBe("SOURCE_DENIED");
  });

  it("failed admit does not create document rows", async () => {
    const pilotId = await seedPilot("ml4c-doc-neg");
    const prep = await openOrCreatePreparation(pilotId);
    const before = await countD4Rows(pilotId, prep.id);

    const negatives = [
      admitDocumentCommand({
        commandId: "x",
        operationId: "o",
        userMessageId: "u",
        qualifiedIntentId: "i",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: "x" },
        title: " ",
        contentMarkdown: "x",
      }),
      admitDocumentCommand({
        commandId: "y",
        operationId: "o",
        userMessageId: "u",
        qualifiedIntentId: "i",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: "y" },
        title: "T",
        contentMarkdown: "z".repeat(100_001),
      }),
      admitDocumentCommand({
        commandId: "z",
        operationId: "o",
        userMessageId: "u",
        qualifiedIntentId: "i",
        action: "REVISE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: "z" },
        title: "T",
        contentMarkdown: "body",
      }),
    ];
    for (const n of negatives) {
      expect(n.ok).toBe(false);
    }

    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);

    const chat = await postUserMessageAndNora(pilotId, prep.id, "Bonjour, pas de document.");
    expect(chat.documentSave).toBeNull();
    const afterChatter = await countD4Rows(pilotId, prep.id);
    expect(afterChatter).toEqual(before);
    const msgs = await listMessages(pilotId, prep.id);
    expect(msgs.length).toBeGreaterThan(0);
  });

  it("PROP: admitDocumentCommand accepts title + body >12k and ≤100k; >100k rejected", async () => {
    const pilotId = await seedPilot("ml4c-doc-prop-long");
    const prep = await openOrCreatePreparation(pilotId);
    const propTitle = "Proposition longue";
    const longBody = `# ${propTitle}\n\n${"paragraphe contractuel.\n".repeat(900)}`;
    expect(longBody.length).toBeGreaterThan(12_000);
    expect(longBody.length).toBeLessThanOrEqual(100_000);

    const ok = admitDocumentCommand({
      commandId: "cmd-prop-long",
      operationId: "op-prop-long",
      userMessageId: "usr-prop-long",
      qualifiedIntentId: "i-d4-prop",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: "cmd-prop-long" },
      title: propTitle,
      contentMarkdown: longBody,
    });
    expect(ok.ok).toBe(true);

    const tooLarge = admitDocumentCommand({
      commandId: "cmd-prop-huge",
      operationId: "op-prop-huge",
      userMessageId: "usr-prop-huge",
      qualifiedIntentId: "i-d4-prop",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: "cmd-prop-huge" },
      title: "Trop grand",
      contentMarkdown: "x".repeat(100_001),
    });
    expect(tooLarge.ok).toBe(false);
    if (!tooLarge.ok) expect(tooLarge.reason).toBe("CONTENT_TOO_LARGE");

    const before = await countD4Rows(pilotId, prep.id);
    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);
  });

  it("REC: concurrent CREATE same creationCorrelationKey → single document row", async () => {
    const pilotId = await seedPilot("ml4c-doc-conc");
    const prep = await openOrCreatePreparation(pilotId);
    const key = `ml4c-conc-${Date.now()}`;
    const body = "# Concurrent ML4C\n\nMême empreinte.\n";

    const [a, b] = await Promise.all([
      savePreparationDocument(pilotId, prep.id, "Conc ML4C", body, undefined, {
        correlationKey: key,
      }),
      savePreparationDocument(pilotId, prep.id, "Conc ML4C", body, undefined, {
        correlationKey: key,
      }),
    ]);

    const statuses = [a.status, b.status];
    expect(statuses.every((s) => s === "AVAILABLE" || s === "UNKNOWN")).toBe(true);
    expect(await countDocsByCreationKey(pilotId, prep.id, key)).toBe(1);

    const winner = [a, b].find((r) => r.status === "AVAILABLE");
    const loser = [a, b].find((r) => r !== winner);
    if (winner && loser) {
      if (loser.status === "AVAILABLE" && "idempotentReplay" in loser) {
        expect(loser.idempotentReplay).toBe(true);
      }
      if (loser.status === "CONFLICT") {
        expect(loser.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
      }
    }
  });

  it("REC: sealAndApply with invalid ownerToken → no document write", async () => {
    const pilotId = await seedPilot("ml4c-doc-owner");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const before = await countD4Rows(pilotId, prep.id);

    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-owner-${Date.now()}`,
      content: "Crée un document avec sceau invalide.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("expected fresh turn");

    const admitted = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-create",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: "Sans sceau",
      contentMarkdown: "# Sans sceau\n\nPas d'écriture.\n",
    });
    expect(admitted.ok).toBe(true);
    if (!admitted.ok) throw new Error(admitted.reason);

    const sealed = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: "invalid-owner-token" },
      binding: admitted.binding,
    });
    expect(sealed.sealApplied).toBe(false);
    expect(sealed.effect).toMatchObject({
      status: "NOT_EXECUTED",
      reason: "BINDING_SEAL_FAILED",
    });

    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);
  });
});