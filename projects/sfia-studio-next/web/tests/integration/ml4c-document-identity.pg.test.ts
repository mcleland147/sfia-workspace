/**
 * F-01 — sealed document-command identity truth (lookup + reconcile, read-only).
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents, messages, pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { getConversationId } from "@/domains/conversation/service";
import {
  admitDocumentCommand,
  contentSha256,
  payloadSha256,
  reconcileDocumentCommandFromBinding,
  sealAndApplyDocumentCommand,
  sealedIdentityFromBinding,
  type DocumentCommandBinding,
} from "@/domains/conversation/document-command";
import {
  buildSealedProvenance,
  lookupDocumentCorrelationTruth,
  resolveProvenanceIdentity,
  savePreparationDocument,
  type SealedEffectIdentity,
} from "@/domains/document/service";
import {
  completeTurnCommand,
  reserveTurnCommand,
  stashDocumentCommandBinding,
} from "@/domains/conversation/turn-command";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
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

async function lookupFromBinding(
  pilotId: string,
  preparationId: string,
  binding: DocumentCommandBinding,
) {
  return lookupDocumentCorrelationTruth({
    pilotId,
    preparationId,
    action: binding.action,
    correlationKey: binding.correlationKey,
    title: binding.title,
    contentMarkdown: binding.contentMarkdown,
    contentSha256: binding.contentSha256,
    payloadSha256: binding.payloadSha256,
    documentId: binding.documentId,
    baseRevisionId: binding.baseRevisionId,
    expectedIdentity: sealedIdentityFromBinding(binding),
  });
}

async function completeReservedTurn(
  convId: string,
  reserved: Extract<Awaited<ReturnType<typeof reserveTurnCommand>>, { kind: "fresh" }>,
) {
  const assistantId = newId("msg");
  await db.insert(messages).values({
    id: assistantId,
    conversationId: convId,
    role: "assistant",
    content: "Tour terminé.",
    status: "COMPLETE",
    ordinal: reserved.ordinalAssistant,
  });
  await completeTurnCommand({
    commandId: reserved.commandId,
    ownerToken: reserved.ownerToken,
    status: "COMPLETE",
    assistantMessageId: assistantId,
  });
}

async function freshCreateBinding(pilotId: string, preparationId: string, label: string) {
  const convId = await getConversationId(pilotId, preparationId);
  expect(convId).toBeTruthy();
  const reserved = await reserveTurnCommand({
    conversationId: convId!,
    ownerPilotId: pilotId,
    clientTurnKey: `f01-${label}-${Date.now()}`,
    content: `F01 ${label}`,
  });
  if (reserved.kind !== "fresh") throw new Error("fresh turn expected");
  const title = `F01 ${label}`;
  const body = `# ${title}\n\nCorps ${label}.\n`;
  const admitted = admitDocumentCommand({
    commandId: reserved.commandId,
    operationId: reserved.operationId,
    userMessageId: reserved.userMessageId,
    qualifiedIntentId: "i-d4-create",
    action: "CREATE",
    preparationId,
    source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
    title,
    contentMarkdown: body,
  });
  if (!admitted.ok) throw new Error(admitted.reason);
  return { reserved, admitted, title, body };
}

describe("ML4C document identity F-01 (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("F01-01: same correlation + same sealed identity → same refs (lookup + reconcile)", async () => {
    const pilotId = await seedPilot("f01-same-id");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "same");

    const sealed = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });
    expect(sealed.effect.status).toBe("AVAILABLE");
    if (sealed.effect.status !== "AVAILABLE") throw new Error("apply failed");

    const truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
    expect(truth.verdict).toBe("AVAILABLE");
    expect(truth.documentId).toBe(sealed.effect.documentId);
    expect(truth.revisionId).toBe(sealed.effect.revisionId);

    const reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admitted.binding,
    });
    expect(reconciled.verdict).toBe("AVAILABLE");
    expect(reconciled.documentId).toBe(sealed.effect.documentId);
    expect(reconciled.revisionId).toBe(sealed.effect.revisionId);
  });

  it("F01-02: same correlation + divergent markdown → CONFLICT", async () => {
    const pilotId = await seedPilot("f01-md-conf");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-md-${Date.now()}`;
    const title = "Mismatch markdown";
    const bodyStored = "# Mismatch markdown\n\nStored.\n";
    await savePreparationDocument(pilotId, prep.id, title, bodyStored, undefined, {
      correlationKey: corr,
      provenance: buildSealedProvenance({
        commandId: "legacy-cmd",
        operationId: "legacy-op",
        userMessageId: "legacy-usr",
        qualifiedIntentId: "i-legacy",
        action: "CREATE",
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: "legacy-cmd" },
        preparationId: prep.id,
        documentId: null,
        baseRevisionId: null,
        sectionHint: null,
        correlationKey: corr,
        contentSha256: contentSha256(title, bodyStored),
        payloadSha256: "0".repeat(64),
        title,
      }),
    });

    const { admitted } = await freshCreateBinding(pilotId, prep.id, "md-mismatch");
    const binding = { ...admitted.binding, correlationKey: corr };
    const truth = await lookupFromBinding(pilotId, prep.id, binding);
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
  });

  async function expectIdentityConflict(mutate: (stored: DocumentCommandBinding) => DocumentCommandBinding, label: string) {
    const pilotId = await seedPilot(`f01-mut-${label}`);
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, label);
    await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });
    const binding = mutate(admitted.binding);
    const truth = await lookupFromBinding(pilotId, prep.id, binding);
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
  }

  it("F01-03a: same correlation + different source → CONFLICT", async () => {
    await expectIdentityConflict((b) => {
      const assistantMessageId = newId("msg");
      const source = { kind: "ASSISTANT_MESSAGE" as const, assistantMessageId };
      return {
        ...b,
        source,
        payloadSha256: payloadSha256({
          action: b.action,
          source,
          preparationId: b.preparationId,
          documentId: b.documentId,
          baseRevisionId: b.baseRevisionId,
          sectionHint: b.sectionHint,
          title: b.title,
          contentSha256: b.contentSha256,
        }),
      };
    }, "source");
  });

  it("F01-03b: same correlation + different payloadSha256 → CONFLICT", async () => {
    await expectIdentityConflict(
      (b) => ({ ...b, payloadSha256: createHashFlip(b.payloadSha256) }),
      "payload",
    );
  });

  it("F01-03c: same correlation + different markdown bytes → CONFLICT", async () => {
    await expectIdentityConflict((b) => {
      const contentMarkdown = `${b.contentMarkdown}\n<!-- drift -->\n`;
      const cSha = contentSha256(b.title, contentMarkdown);
      return {
        ...b,
        contentMarkdown,
        contentSha256: cSha,
        payloadSha256: payloadSha256({
          action: b.action,
          source: b.source,
          preparationId: b.preparationId,
          documentId: b.documentId,
          baseRevisionId: b.baseRevisionId,
          sectionHint: b.sectionHint,
          title: b.title,
          contentSha256: cSha,
        }),
      };
    }, "markdown");
  });

  it("F01-04: CREATE correlated document without first revision → UNKNOWN", async () => {
    const pilotId = await seedPilot("f01-rev-abs");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-norev-${Date.now()}`;
    const docId = newId("doc");
    await db.insert(documents).values({
      id: docId,
      ownerPilotId: pilotId,
      preparationId: prep.id,
      title: "Orphan corr",
      creationCorrelationKey: corr,
    });

    const { admitted } = await freshCreateBinding(pilotId, prep.id, "no-rev");
    const binding = { ...admitted.binding, correlationKey: corr };
    const truth = await lookupFromBinding(pilotId, prep.id, binding);
    expect(truth.verdict).toBe("UNKNOWN");
    expect(truth.reason).toBe("CREATE_REVISION_ABSENT");
    expect(truth.documentId).toBe(docId);
  });

  it("F01-05: latest AVAILABLE revision without matching correlation → not AVAILABLE", async () => {
    const pilotId = await seedPilot("f01-uncorr");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-uncorr-${Date.now()}`;
    const saved = await savePreparationDocument(
      pilotId,
      prep.id,
      "Uncorrelated latest",
      "# Uncorrelated latest\n\nSans empreinte scellée.\n",
      undefined,
      { correlationKey: corr },
    );
    expect(saved.status).toBe("AVAILABLE");
    if (saved.status !== "AVAILABLE") throw new Error("save");

    const otherCorr = `other-${Date.now()}`;
    const { admitted } = await freshCreateBinding(pilotId, prep.id, "uncorr-lookup");
    const binding = {
      ...admitted.binding,
      correlationKey: otherCorr,
      documentId: saved.documentId,
    };
    const truth = await lookupDocumentCorrelationTruth({
      pilotId,
      preparationId: prep.id,
      action: "REVISE",
      correlationKey: otherCorr,
      title: binding.title,
      contentMarkdown: binding.contentMarkdown,
      contentSha256: binding.contentSha256,
      payloadSha256: binding.payloadSha256,
      documentId: saved.documentId,
      baseRevisionId: saved.revisionId,
      expectedIdentity: sealedIdentityFromBinding(binding),
    });
    expect(truth.verdict).toBe("UNKNOWN");
    expect(truth.reason).toMatch(/REVISE_CORRELATION_ABSENT/);
  });

  it("F01-06: provenance without documentCommandBinding → COMMAND_PROVENANCE_UNVERIFIABLE", async () => {
    const pilotId = await seedPilot("f01-unver");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-unver-${Date.now()}`;
    const title = "Legacy provenance";
    const body = "# Legacy provenance\n\nSans drapeau binding.\n";
    const saved = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
      correlationKey: corr,
      provenance: { note: "legacy-read-only", correlationKey: corr },
    });
    expect(saved.status).toBe("AVAILABLE");
    if (saved.status !== "AVAILABLE") throw new Error("save");

    const { admitted } = await freshCreateBinding(pilotId, prep.id, "unverifiable");
    const binding = { ...admitted.binding, correlationKey: corr };
    const truth = await lookupFromBinding(pilotId, prep.id, binding);
    expect(truth.verdict).toBe("UNKNOWN");
    expect(truth.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
  });

  it("F01-07: ACK-loss — seal+apply then 10× reconcile, zero new D4 rows", async () => {
    const pilotId = await seedPilot("f01-ack");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "ack");

    const sealed = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });
    expect(sealed.effect.status).toBe("AVAILABLE");
    const afterApply = await countD4Rows(pilotId, prep.id);

    for (let i = 0; i < 10; i++) {
      const r = await reconcileDocumentCommandFromBinding({
        pilotId,
        preparationId: prep.id,
        binding: admitted.binding,
      });
      expect(r.verdict).toBe("AVAILABLE");
      expect(r.documentId).toBe(
        sealed.effect.status === "AVAILABLE" ? sealed.effect.documentId : undefined,
      );
    }
    expect(await countD4Rows(pilotId, prep.id)).toEqual(afterApply);
  });

  it("F01-08: concurrent CREATE same correlation → single document", async () => {
    const pilotId = await seedPilot("f01-conc");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-conc-${Date.now()}`;
    const title = "Concurrent F01";
    const body = `# ${title}\n\nMême clé.\n`;
    const identity = {
      commandId: "conc-a",
      operationId: "op-conc",
      userMessageId: "usr-conc",
      qualifiedIntentId: "i-d4-create",
      action: "CREATE" as const,
      source: { kind: "SAME_TURN_SNAPSHOT" as const, commandId: "conc-a" },
      preparationId: prep.id,
      documentId: null,
      baseRevisionId: null,
      sectionHint: null,
      correlationKey: corr,
      contentSha256: contentSha256(title, body),
      payloadSha256: "a".repeat(64),
      title,
    };

    const [a, b] = await Promise.all([
      savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: buildSealedProvenance(identity),
      }),
      savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: buildSealedProvenance({ ...identity, commandId: "conc-b" }),
      }),
    ]);
    expect([a.status, b.status].every((s) => s === "AVAILABLE" || s === "UNKNOWN" || s === "CONFLICT")).toBe(
      true,
    );
    const docCount = await db
      .select({ n: sql<number>`count(*)`.mapWith(Number) })
      .from(documents)
      .where(
        and(
          eq(documents.ownerPilotId, pilotId),
          eq(documents.preparationId, prep.id),
          eq(documents.creationCorrelationKey, corr),
        ),
      );
    expect(docCount[0]?.n).toBe(1);
  });

  it("F01-09: CREATE correlation absent → UNKNOWN, reconcile writes nothing", async () => {
    const pilotId = await seedPilot("f01-absent");
    const prep = await openOrCreatePreparation(pilotId);
    const before = await countD4Rows(pilotId, prep.id);
    const { admitted } = await freshCreateBinding(pilotId, prep.id, "absent");
    const reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admitted.binding,
    });
    expect(reconciled.verdict).toBe("UNKNOWN");
    expect(reconciled.reason).toMatch(/CREATE_CORRELATION_ABSENT/);
    expect(await countD4Rows(pilotId, prep.id)).toEqual(before);
  });

  it("F01-11: same correlation + CREATE sealed, lookup as REVISE → CONFLICT", async () => {
    const pilotId = await seedPilot("f01-act-mismatch");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "act-x");
    const sealed = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });
    expect(sealed.effect.status).toBe("AVAILABLE");
    if (sealed.effect.status !== "AVAILABLE") throw new Error("apply");

    const asRevise = {
      ...admitted.binding,
      action: "REVISE" as const,
      documentId: sealed.effect.documentId,
      baseRevisionId: sealed.effect.revisionId,
      payloadSha256: payloadSha256({
        action: "REVISE",
        source: admitted.binding.source,
        preparationId: prep.id,
        documentId: sealed.effect.documentId,
        baseRevisionId: sealed.effect.revisionId,
        sectionHint: admitted.binding.sectionHint,
        title: admitted.binding.title,
        contentSha256: admitted.binding.contentSha256,
      }),
    };
    const truth = await lookupDocumentCorrelationTruth({
      pilotId,
      preparationId: prep.id,
      action: "REVISE",
      correlationKey: asRevise.correlationKey,
      title: asRevise.title,
      contentMarkdown: asRevise.contentMarkdown,
      contentSha256: asRevise.contentSha256,
      payloadSha256: asRevise.payloadSha256,
      documentId: asRevise.documentId,
      baseRevisionId: asRevise.baseRevisionId,
      expectedIdentity: sealedIdentityFromBinding(asRevise),
    });
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
  });

  it("F01-11b: same correlation + REVISE sealed, lookup as CREATE → CONFLICT", async () => {
    const pilotId = await seedPilot("f01-act-rev");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted: createAdmitted, reserved: createReserved } = await freshCreateBinding(
      pilotId,
      prep.id,
      "rev-base",
    );
    const created = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: createReserved.commandId, ownerToken: createReserved.ownerToken },
      binding: createAdmitted.binding,
    });
    if (created.effect.status !== "AVAILABLE") throw new Error("create");
    const sharedCorr = createAdmitted.binding.correlationKey;

    const convId = await getConversationId(pilotId, prep.id);
    await completeReservedTurn(convId!, createReserved);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `f01-rev-${Date.now()}`,
      content: "REVISE F01-11b.",
    });
    if (reserved.kind !== "fresh") throw new Error("fresh");
    const revisedBody = `${createAdmitted.binding.contentMarkdown}\n## Add\n`;
    const admittedRev = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      preparationId: prep.id,
      documentId: created.effect.documentId,
      baseRevisionId: created.effect.revisionId,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: createAdmitted.binding.title,
      contentMarkdown: revisedBody,
    });
    if (!admittedRev.ok) throw new Error(admittedRev.reason);
    const reviseBinding = { ...admittedRev.binding, correlationKey: sharedCorr };
    await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: reviseBinding,
    });

    const asCreate = {
      ...reviseBinding,
      action: "CREATE" as const,
      documentId: null,
      baseRevisionId: null,
      payloadSha256: payloadSha256({
        action: "CREATE",
        source: admittedRev.binding.source,
        preparationId: prep.id,
        documentId: null,
        baseRevisionId: null,
        sectionHint: admittedRev.binding.sectionHint,
        title: admittedRev.binding.title,
        contentSha256: admittedRev.binding.contentSha256,
      }),
    };
    const truth = await lookupFromBinding(pilotId, prep.id, asCreate);
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
  });

  it("F01-12: same correlation + different baseRevisionId → CONFLICT (REVISE)", async () => {
    const pilotId = await seedPilot("f01-base-rev");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted: createAdmitted, reserved: createReserved } = await freshCreateBinding(
      pilotId,
      prep.id,
      "f01-12-base",
    );
    const created = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: createReserved.commandId, ownerToken: createReserved.ownerToken },
      binding: createAdmitted.binding,
    });
    if (created.effect.status !== "AVAILABLE") throw new Error("create");

    const convId = await getConversationId(pilotId, prep.id);
    await completeReservedTurn(convId!, createReserved);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `f01-12-${Date.now()}`,
      content: "REVISE F01-12.",
    });
    if (reserved.kind !== "fresh") throw new Error("fresh");
    const revisedBody = `${createAdmitted.binding.contentMarkdown}\n## F01-12\n`;
    const admittedRev = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      preparationId: prep.id,
      documentId: created.effect.documentId,
      baseRevisionId: created.effect.revisionId,
      sourceRevisionId: created.effect.revisionId,
      observedHeadRevisionId: created.effect.revisionId,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: createAdmitted.binding.title,
      contentMarkdown: revisedBody,
    });
    if (!admittedRev.ok) throw new Error(admittedRev.reason);
    const sealedRev = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admittedRev.binding,
    });
    expect(sealedRev.effect.status).toBe("AVAILABLE");

    const wrongBase = newId("rev");
    const binding = {
      ...admittedRev.binding,
      baseRevisionId: wrongBase,
      payloadSha256: payloadSha256({
        action: admittedRev.binding.action,
        source: admittedRev.binding.source,
        preparationId: prep.id,
        documentId: admittedRev.binding.documentId,
        baseRevisionId: wrongBase,
        sectionHint: admittedRev.binding.sectionHint,
        title: admittedRev.binding.title,
        contentSha256: admittedRev.binding.contentSha256,
      }),
    };
    const truth = await lookupFromBinding(pilotId, prep.id, binding);
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
  });

  it("F01-13: same correlation + different sectionHint → CONFLICT", async () => {
    await expectIdentityConflict((b) => {
      const sectionHint = "section-other";
      return {
        ...b,
        sectionHint,
        payloadSha256: payloadSha256({
          action: b.action,
          source: b.source,
          preparationId: b.preparationId,
          documentId: b.documentId,
          baseRevisionId: b.baseRevisionId,
          sectionHint,
          title: b.title,
          contentSha256: b.contentSha256,
        }),
      };
    }, "section");
  });

  it("F01-14: same correlation + different documentId → CONFLICT (REVISE)", async () => {
    const pilotId = await seedPilot("f01-doc-target");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted: createAdmitted, reserved: createReserved } = await freshCreateBinding(
      pilotId,
      prep.id,
      "f01-14-a",
    );
    const created = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: createReserved.commandId, ownerToken: createReserved.ownerToken },
      binding: createAdmitted.binding,
    });
    if (created.effect.status !== "AVAILABLE") throw new Error("create");

    const convId = await getConversationId(pilotId, prep.id);
    await completeReservedTurn(convId!, createReserved);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `f01-14-${Date.now()}`,
      content: "REVISE F01-14.",
    });
    if (reserved.kind !== "fresh") throw new Error("fresh");
    const admittedRev = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      preparationId: prep.id,
      documentId: created.effect.documentId,
      baseRevisionId: created.effect.revisionId,
      sourceRevisionId: created.effect.revisionId,
      observedHeadRevisionId: created.effect.revisionId,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: createAdmitted.binding.title,
      contentMarkdown: `${createAdmitted.binding.contentMarkdown}\n## F01-14\n`,
    });
    if (!admittedRev.ok) throw new Error(admittedRev.reason);
    const sealedRev = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admittedRev.binding,
    });
    expect(sealedRev.effect.status).toBe("AVAILABLE");

    const otherDocId = newId("doc");
    await db.insert(documents).values({
      id: otherDocId,
      ownerPilotId: pilotId,
      preparationId: prep.id,
      title: "Autre cible F01-14",
    });
    const mismatchedIdentity = sealedIdentityFromBinding({
      ...admittedRev.binding,
      documentId: otherDocId,
      payloadSha256: payloadSha256({
        action: admittedRev.binding.action,
        source: admittedRev.binding.source,
        preparationId: prep.id,
        documentId: otherDocId,
        baseRevisionId: admittedRev.binding.baseRevisionId,
        sectionHint: admittedRev.binding.sectionHint,
        title: admittedRev.binding.title,
        contentSha256: admittedRev.binding.contentSha256,
      }),
    });
    const truth = await lookupDocumentCorrelationTruth({
      pilotId,
      preparationId: prep.id,
      action: "REVISE",
      correlationKey: admittedRev.binding.correlationKey,
      title: admittedRev.binding.title,
      contentMarkdown: admittedRev.binding.contentMarkdown,
      contentSha256: admittedRev.binding.contentSha256,
      payloadSha256: mismatchedIdentity.payloadSha256,
      documentId: created.effect.documentId,
      baseRevisionId: admittedRev.binding.baseRevisionId,
      expectedIdentity: mismatchedIdentity,
    });
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
  });

  it("F01-15: concurrent sealAndApply same correlation → single document", async () => {
    const pilotId = await seedPilot("f01-conc-seal");
    const prep = await openOrCreatePreparation(pilotId);
    const corr = `corr-seal-conc-${Date.now()}`;
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "conc-seal");
    const binding = { ...admitted.binding, correlationKey: corr };
    const fence = { commandId: reserved.commandId, ownerToken: reserved.ownerToken };

    const [s1, s2] = await Promise.all([
      sealAndApplyDocumentCommand({ pilotId, fence, binding }),
      sealAndApplyDocumentCommand({ pilotId, fence, binding }),
    ]);
    expect([s1.effect.status, s2.effect.status].every((s) => s === "AVAILABLE" || s === "CONFLICT" || s === "UNKNOWN")).toBe(
      true,
    );

    const docCount = await db
      .select({ n: sql<number>`count(*)`.mapWith(Number) })
      .from(documents)
      .where(
        and(
          eq(documents.ownerPilotId, pilotId),
          eq(documents.preparationId, prep.id),
          eq(documents.creationCorrelationKey, corr),
        ),
      );
    expect(docCount[0]?.n).toBe(1);

    const rows = await countD4Rows(pilotId, prep.id);
    expect(rows.documents).toBe(1);
    expect(rows.revisions).toBe(1);
  });

  it("HASH: stored bytes / provenance drift → CONFLICT; reconcile never heals corruption", async () => {
    const pilotId = await seedPilot("f01-hash");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "hash");

    const sealed = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });
    expect(sealed.effect.status).toBe("AVAILABLE");
    if (sealed.effect.status !== "AVAILABLE") throw new Error("apply");
    const revisionId = sealed.effect.revisionId;
    const baseline = await countD4Rows(pilotId, prep.id);

    const altered = `${admitted.binding.contentMarkdown}\n<!-- tamper -->\n`;
    await db
      .update(documentRevisions)
      .set({ contentMarkdown: altered })
      .where(eq(documentRevisions.id, revisionId));

    let truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
    expect(truth.verdict).toBe("CONFLICT");
    expect(truth.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
    let reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admitted.binding,
    });
    expect(reconciled.verdict).toBe("CONFLICT");

    await db
      .update(documentRevisions)
      .set({ contentMarkdown: admitted.binding.contentMarkdown })
      .where(eq(documentRevisions.id, revisionId));

    const provenanceRow = (
      await db
        .select({ provenanceJson: documentRevisions.provenanceJson })
        .from(documentRevisions)
        .where(eq(documentRevisions.id, revisionId))
        .limit(1)
    )[0];
    const prov = JSON.parse(provenanceRow!.provenanceJson) as Record<string, unknown>;
    await db
      .update(documentRevisions)
      .set({
        provenanceJson: JSON.stringify({ ...prov, contentFingerprint: "f".repeat(64) }),
      })
      .where(eq(documentRevisions.id, revisionId));

    truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
    expect(truth.verdict).toBe("CONFLICT");
    reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admitted.binding,
    });
    expect(reconciled.verdict).toBe("CONFLICT");

    await db
      .update(documentRevisions)
      .set({
        provenanceJson: JSON.stringify({
          ...prov,
          contentSha256: "e".repeat(64),
        }),
      })
      .where(eq(documentRevisions.id, revisionId));

    truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
    expect(truth.verdict).toBe("CONFLICT");

    for (let i = 0; i < 10; i++) {
      const r = await reconcileDocumentCommandFromBinding({
        pilotId,
        preparationId: prep.id,
        binding: admitted.binding,
      });
      expect(r.verdict).not.toBe("AVAILABLE");
    }
    expect(await countD4Rows(pilotId, prep.id)).toEqual(baseline);
  });

  describe("SEAL provenance identity (PG)", () => {
    function minimalCreateIdentity(
      prepId: string,
      corr: string,
      title: string,
      body: string,
      overrides?: Partial<SealedEffectIdentity>,
    ): SealedEffectIdentity {
      const cSha = contentSha256(title, body);
      const source = { kind: "SAME_TURN_SNAPSHOT" as const, commandId: "seal-cmd" };
      return {
        commandId: "seal-cmd",
        operationId: "seal-op",
        userMessageId: "seal-usr",
        qualifiedIntentId: "i-d4-create",
        action: "CREATE",
        source,
        preparationId: prepId,
        documentId: null,
        baseRevisionId: null,
        sectionHint: null,
        correlationKey: corr,
        contentSha256: cSha,
        payloadSha256: payloadSha256({
          action: "CREATE",
          source,
          preparationId: prepId,
          documentId: null,
          baseRevisionId: null,
          title,
          contentSha256: cSha,
        }),
        title,
        ...overrides,
      };
    }

    it("SEAL-01: healthy CREATE sealed replay → AVAILABLE same refs", async () => {
      const pilotId = await seedPilot("seal-01");
      const prep = await openOrCreatePreparation(pilotId);
      const title = "SEAL-01";
      const body = `# ${title}\n\nReplay.\n`;
      const corr = `corr-seal-01-${Date.now()}`;
      const identity = minimalCreateIdentity(prep.id, corr, title, body);
      const prov = buildSealedProvenance(identity);

      const first = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: prov,
      });
      expect(first.status).toBe("AVAILABLE");
      if (first.status !== "AVAILABLE") throw new Error("first");

      const second = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: prov,
      });
      expect(second.status).toBe("AVAILABLE");
      if (second.status !== "AVAILABLE") throw new Error("second");
      expect(second.documentId).toBe(first.documentId);
      expect(second.revisionId).toBe(first.revisionId);
    });

    it("SEAL-02: CREATE missing payloadSha256 → never AVAILABLE", async () => {
      const pilotId = await seedPilot("seal-02");
      const prep = await openOrCreatePreparation(pilotId);
      const title = "SEAL-02";
      const body = `# ${title}\n\nSans payload.\n`;
      const corr = `corr-seal-02-${Date.now()}`;
      const identity = minimalCreateIdentity(prep.id, corr, title, body);
      const prov = buildSealedProvenance(identity);
      delete prov.payloadSha256;

      const before = await countD4Rows(pilotId, prep.id);
      const attempt = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: prov,
      });
      expect(attempt.status).toBe("FAILED");
      if (attempt.status === "FAILED") expect(attempt.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      expect(await countD4Rows(pilotId, prep.id)).toEqual(before);

      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: prov,
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("SEAL-03: missing commandId → refuse", () => {
      const prov = buildSealedProvenance(
        minimalCreateIdentity("prep-x", "corr-x", "T", "# T\n\nb.\n", { commandId: "" }),
      );
      prov.commandId = "";
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_INVALID");
    });

    it("SEAL-04: missing source → refuse", () => {
      const prov = buildSealedProvenance(
        minimalCreateIdentity("prep-x", "corr-x", "T", "# T\n\nb.\n"),
      );
      delete prov.source;
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_INVALID");
    });

    it("SEAL-05: wrong action string → refuse", () => {
      const prov = buildSealedProvenance(
        minimalCreateIdentity("prep-x", "corr-x", "T", "# T\n\nb.\n"),
      );
      prov.action = "PATCH";
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_INVALID");
    });

    it("SEAL-06: REVISE sealed complete → AVAILABLE", async () => {
      const pilotId = await seedPilot("seal-06");
      const prep = await openOrCreatePreparation(pilotId);
      const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "seal-06-base");
      const created = await sealAndApplyDocumentCommand({
        pilotId,
        fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
        binding: admitted.binding,
      });
      if (created.effect.status !== "AVAILABLE") throw new Error("create");

      const convId = await getConversationId(pilotId, prep.id);
      await completeReservedTurn(convId!, reserved);
      const reservedRev = await reserveTurnCommand({
        conversationId: convId!,
        ownerPilotId: pilotId,
        clientTurnKey: `seal-06-rev-${Date.now()}`,
        content: "REVISE SEAL-06.",
      });
      if (reservedRev.kind !== "fresh") throw new Error("fresh");
      const revisedBody = `${admitted.binding.contentMarkdown}\n## SEAL-06\n`;
      const admittedRev = admitDocumentCommand({
        commandId: reservedRev.commandId,
        operationId: reservedRev.operationId,
        userMessageId: reservedRev.userMessageId,
        qualifiedIntentId: "i-d4-revise",
        action: "REVISE",
        preparationId: prep.id,
        documentId: created.effect.documentId,
        baseRevisionId: created.effect.revisionId,
        sourceRevisionId: created.effect.revisionId,
        observedHeadRevisionId: created.effect.revisionId,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: reservedRev.commandId },
        title: admitted.binding.title,
        contentMarkdown: revisedBody,
      });
      expect(admittedRev.ok).toBe(true);
      if (!admittedRev.ok) throw new Error(admittedRev.reason);

      const revised = await sealAndApplyDocumentCommand({
        pilotId,
        fence: { commandId: reservedRev.commandId, ownerToken: reservedRev.ownerToken },
        binding: admittedRev.binding,
      });
      expect(revised.effect.status).toBe("AVAILABLE");
    });

    it("SEAL-07: REVISE sealed missing baseRevisionId → refuse", () => {
      const identity = minimalCreateIdentity("prep-x", "corr-rev", "T", "# T\n\nb.\n", {
        action: "REVISE",
        documentId: "doc-x",
        baseRevisionId: null,
      });
      const prov = buildSealedProvenance(identity);
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_INVALID");
    });

    it("SEAL-08: REVISE missing qualifiedIntentId → refuse", () => {
      const r = admitDocumentCommand({
        commandId: "tcmd-seal-08",
        operationId: "op-seal-08",
        userMessageId: "usr-seal-08",
        qualifiedIntentId: "",
        action: "REVISE",
        preparationId: "prep-seal-08",
        documentId: "doc-1",
        baseRevisionId: "rev-1",
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: "tcmd-seal-08" },
        title: "T",
        contentMarkdown: "# T\n\nRévisé.\n",
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toBe("MISSING_IDENTITIES");
    });

    it("SEAL-09: tampered provenance (title removed) → UNKNOWN, never AVAILABLE", async () => {
      const pilotId = await seedPilot("seal-09");
      const prep = await openOrCreatePreparation(pilotId);
      const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "seal-09");
      const sealed = await sealAndApplyDocumentCommand({
        pilotId,
        fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
        binding: admitted.binding,
      });
      if (sealed.effect.status !== "AVAILABLE") throw new Error("apply");
      const revisionId = sealed.effect.revisionId;
      const baseline = await countD4Rows(pilotId, prep.id);

      const row = (
        await db
          .select({ provenanceJson: documentRevisions.provenanceJson })
          .from(documentRevisions)
          .where(eq(documentRevisions.id, revisionId))
          .limit(1)
      )[0];
      const prov = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
      delete prov.title;
      await db
        .update(documentRevisions)
        .set({ provenanceJson: JSON.stringify(prov) })
        .where(eq(documentRevisions.id, revisionId));

      const truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
      expect(truth.verdict).not.toBe("AVAILABLE");
      expect(truth.verdict).toBe("UNKNOWN");
      const reconciled = await reconcileDocumentCommandFromBinding({
        pilotId,
        preparationId: prep.id,
        binding: admitted.binding,
      });
      expect(reconciled.verdict).not.toBe("AVAILABLE");
      expect(await countD4Rows(pilotId, prep.id)).toEqual(baseline);
    });

    it("SEAL-10: diverged identity field in DB → CONFLICT/UNKNOWN, never AVAILABLE", async () => {
      const pilotId = await seedPilot("seal-10");
      const prep = await openOrCreatePreparation(pilotId);
      const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "seal-10");
      const sealed = await sealAndApplyDocumentCommand({
        pilotId,
        fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
        binding: admitted.binding,
      });
      if (sealed.effect.status !== "AVAILABLE") throw new Error("apply");

      const row = (
        await db
          .select({ provenanceJson: documentRevisions.provenanceJson })
          .from(documentRevisions)
          .where(eq(documentRevisions.id, sealed.effect.revisionId))
          .limit(1)
      )[0];
      const prov = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
      prov.commandId = "other-command-id";
      await db
        .update(documentRevisions)
        .set({ provenanceJson: JSON.stringify(prov) })
        .where(eq(documentRevisions.id, sealed.effect.revisionId));

      const truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
      expect(truth.verdict).not.toBe("AVAILABLE");
      expect(["CONFLICT", "UNKNOWN"]).toContain(truth.verdict);
    });

    it("SEAL-11: historical provenance same corr+content → AVAILABLE", async () => {
      const pilotId = await seedPilot("seal-11");
      const prep = await openOrCreatePreparation(pilotId);
      const corr = `corr-hist-${Date.now()}`;
      const title = "Historical SEAL-11";
      const body = `# ${title}\n\nSans binding scellé.\n`;
      const saved = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: { note: "legacy", correlationKey: corr },
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");

      const again = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: { note: "legacy-replay", correlationKey: corr },
      });
      expect(again.status).toBe("AVAILABLE");
      if (again.status !== "AVAILABLE" || saved.status !== "AVAILABLE") throw new Error("available");
      expect(again.documentId).toBe(saved.documentId);
      expect(again.revisionId).toBe(saved.revisionId);
    });

    it("SEAL-12: incomplete sealed provenance — 10× save/reconcile, zero new D4 rows", async () => {
      const pilotId = await seedPilot("seal-12");
      const prep = await openOrCreatePreparation(pilotId);
      const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "seal-12");
      const prov = buildSealedProvenance(sealedIdentityFromBinding(admitted.binding));
      delete prov.payloadSha256;
      const before = await countD4Rows(pilotId, prep.id);

      for (let i = 0; i < 10; i++) {
        const saved = await savePreparationDocument(
          pilotId,
          prep.id,
          admitted.binding.title,
          admitted.binding.contentMarkdown,
          undefined,
          { correlationKey: admitted.binding.correlationKey, provenance: prov },
        );
        expect(saved.status).not.toBe("AVAILABLE");
        const reconciled = await reconcileDocumentCommandFromBinding({
          pilotId,
          preparationId: prep.id,
          binding: admitted.binding,
        });
        expect(reconciled.verdict).not.toBe("AVAILABLE");
        await stashDocumentCommandBinding({
          commandId: reserved.commandId,
          ownerToken: reserved.ownerToken,
          binding: admitted.binding,
        });
      }
      expect(await countD4Rows(pilotId, prep.id)).toEqual(before);
    });

    it("SEAL-13: sealed invalid on empty prep → FAILED, zero docs", async () => {
      const pilotId = await seedPilot("seal-13");
      const prep = await openOrCreatePreparation(pilotId);
      const corr = `corr-seal-13-${Date.now()}`;
      const title = "SEAL-13";
      const body = `# ${title}\n\nRefus.\n`;
      const prov = buildSealedProvenance(minimalCreateIdentity(prep.id, corr, title, body));
      delete prov.commandId;

      const result = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: prov,
      });
      expect(result.status).toBe("FAILED");
      if (result.status === "FAILED") expect(result.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      expect((await countD4Rows(pilotId, prep.id)).documents).toBe(0);
    });

    it("SEAL-14: sealed invalid replay on existing corr → no false AVAILABLE", async () => {
      const pilotId = await seedPilot("seal-14");
      const prep = await openOrCreatePreparation(pilotId);
      const corr = `corr-seal-14-${Date.now()}`;
      const title = "SEAL-14 healthy";
      const body = `# ${title}\n\nValide.\n`;
      const valid = minimalCreateIdentity(prep.id, corr, title, body);
      const healthy = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: buildSealedProvenance(valid),
      });
      expect(healthy.status).toBe("AVAILABLE");

      const invalidProv = buildSealedProvenance({ ...valid, commandId: "bad-cmd" });
      delete invalidProv.payloadSha256;

      const [a, b] = await Promise.all([
        savePreparationDocument(pilotId, prep.id, title, body, undefined, {
          correlationKey: corr,
          provenance: invalidProv,
        }),
        savePreparationDocument(pilotId, prep.id, title, body, undefined, {
          correlationKey: corr,
          provenance: invalidProv,
        }),
      ]);
      expect(a.status).not.toBe("AVAILABLE");
      expect(b.status).not.toBe("AVAILABLE");

      const docCount = await db
        .select({ n: sql<number>`count(*)`.mapWith(Number) })
        .from(documents)
        .where(
          and(
            eq(documents.ownerPilotId, pilotId),
            eq(documents.preparationId, prep.id),
            eq(documents.creationCorrelationKey, corr),
          ),
        );
      expect(docCount[0]?.n).toBe(1);
    });
  });

  function minimalCreateIdentity(
    prepId: string,
    corr: string,
    title: string,
    body: string,
    overrides?: Partial<SealedEffectIdentity>,
  ): SealedEffectIdentity {
    const cSha = contentSha256(title, body);
    const source = { kind: "SAME_TURN_SNAPSHOT" as const, commandId: "seal-cmd" };
    return {
      commandId: "seal-cmd",
      operationId: "seal-op",
      userMessageId: "seal-usr",
      qualifiedIntentId: "i-d4-create",
      action: "CREATE",
      source,
      preparationId: prepId,
      documentId: null,
      baseRevisionId: null,
      sectionHint: null,
      correlationKey: corr,
      contentSha256: cSha,
      payloadSha256: payloadSha256({
        action: "CREATE",
        source,
        preparationId: prepId,
        documentId: null,
        baseRevisionId: null,
        title,
        contentSha256: cSha,
      }),
      title,
      ...overrides,
    };
  }

  function minimalReviseIdentity(
    prepId: string,
    corr: string,
    title: string,
    body: string,
    documentId: string,
    baseRevisionId: string,
    overrides?: Partial<SealedEffectIdentity>,
  ): SealedEffectIdentity {
    const cSha = contentSha256(title, body);
    const source = { kind: "SAME_TURN_SNAPSHOT" as const, commandId: "seal-rev-cmd" };
    return {
      commandId: "seal-rev-cmd",
      operationId: "seal-rev-op",
      userMessageId: "seal-rev-usr",
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      source,
      preparationId: prepId,
      documentId,
      baseRevisionId,
      sectionHint: null,
      correlationKey: corr,
      contentSha256: cSha,
      payloadSha256: payloadSha256({
        action: "REVISE",
        source,
        preparationId: prepId,
        documentId,
        baseRevisionId,
        sectionHint: null,
        title,
        contentSha256: cSha,
      }),
      title,
      ...overrides,
    };
  }

  async function sealCreateViaSave(
    pilotId: string,
    prepId: string,
    label: string,
    corr?: string,
  ) {
    const title = `DOWN ${label}`;
    const body = `# ${title}\n\nCorps ${label}.\n`;
    const correlationKey = corr ?? `corr-down-${label}-${Date.now()}`;
    const identity = minimalCreateIdentity(prepId, correlationKey, title, body);
    const prov = buildSealedProvenance(identity);
    const saved = await savePreparationDocument(pilotId, prepId, title, body, undefined, {
      correlationKey,
      provenance: prov,
    });
    return { title, body, correlationKey, identity, prov, saved };
  }

  describe("DOWN provenance downgrade refusal (PG)", () => {
    it("DOWN-01: historical real (no sealed markers) → AVAILABLE historical", async () => {
      const pilotId = await seedPilot("down-01");
      const prep = await openOrCreatePreparation(pilotId);
      const corr = `corr-hist-down01-${Date.now()}`;
      const title = "Historical DOWN-01";
      const body = `# ${title}\n\nSans marqueurs scellés.\n`;
      const first = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: { note: "legacy", correlationKey: corr },
      });
      expect(first.status).toBe("AVAILABLE");
      const second = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey: corr,
        provenance: { note: "legacy-replay", correlationKey: corr },
      });
      expect(second.status).toBe("AVAILABLE");
      if (first.status === "AVAILABLE" && second.status === "AVAILABLE") {
        expect(second.documentId).toBe(first.documentId);
        expect(second.revisionId).toBe(first.revisionId);
      }
    });

    it("DOWN-02: CREATE sealed healthy → AVAILABLE", async () => {
      const pilotId = await seedPilot("down-02");
      const prep = await openOrCreatePreparation(pilotId);
      const { saved } = await sealCreateViaSave(pilotId, prep.id, "02");
      expect(saved.status).toBe("AVAILABLE");
    });

    it("DOWN-03: sealed stored + request binding key removed → never AVAILABLE", async () => {
      const pilotId = await seedPilot("down-03");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, prov, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "03",
      );
      expect(saved.status).toBe("AVAILABLE");
      const stripped = { ...prov };
      delete stripped.documentCommandBinding;
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: stripped,
      });
      expect(replay.status).not.toBe("AVAILABLE");
      if (replay.status === "UNKNOWN" && "reason" in replay) {
        expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      }
    });

    it("DOWN-04: sealed stored + request documentCommandBinding:false → never AVAILABLE", async () => {
      const pilotId = await seedPilot("down-04");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, prov, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "04",
      );
      expect(saved.status).toBe("AVAILABLE");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { ...prov, documentCommandBinding: false },
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("DOWN-05: sealed stored + request provenance undefined → never AVAILABLE", async () => {
      const pilotId = await seedPilot("down-05");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "05",
      );
      expect(saved.status).toBe("AVAILABLE");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("DOWN-06: DB provenance — remove binding, keep sealed remnants → never AVAILABLE", async () => {
      const pilotId = await seedPilot("down-06");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, prov, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "06",
      );
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      const row = (
        await db
          .select({ provenanceJson: documentRevisions.provenanceJson })
          .from(documentRevisions)
          .where(eq(documentRevisions.id, saved.revisionId))
          .limit(1)
      )[0];
      const stored = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
      delete stored.documentCommandBinding;
      await db
        .update(documentRevisions)
        .set({ provenanceJson: JSON.stringify(stored) })
        .where(eq(documentRevisions.id, saved.revisionId));

      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: prov,
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("DOWN-07: sealed request + altered stored identity → not AVAILABLE", async () => {
      const pilotId = await seedPilot("down-07");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, identity, prov, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "07",
      );
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      const row = (
        await db
          .select({ provenanceJson: documentRevisions.provenanceJson })
          .from(documentRevisions)
          .where(eq(documentRevisions.id, saved.revisionId))
          .limit(1)
      )[0];
      const stored = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
      stored.commandId = "tampered-command";
      await db
        .update(documentRevisions)
        .set({ provenanceJson: JSON.stringify(stored) })
        .where(eq(documentRevisions.id, saved.revisionId));

      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: prov,
      });
      expect(replay.status).not.toBe("AVAILABLE");
      expect(["UNKNOWN", "CONFLICT"]).toContain(replay.status);

      const { admitted } = await freshCreateBinding(pilotId, prep.id, "down07-lookup");
      const binding = {
        ...admitted.binding,
        correlationKey,
        title,
        contentMarkdown: body,
        contentSha256: identity.contentSha256,
        payloadSha256: identity.payloadSha256,
      };
      const truth = await lookupFromBinding(pilotId, prep.id, binding);
      expect(truth.verdict).not.toBe("AVAILABLE");
    });

    it("DOWN-08: distinctive sealed remnants + binding marker absent → refuse", () => {
      const prov = {
        qualifiedIntentId: "i-d4-create",
        payloadSha256: "a".repeat(64),
        correlationKey: "corr-down-08",
        title: "T",
      };
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_INVALID");
    });

    it("DOWN-09: same content+corr, incoherent request identity → never AVAILABLE", async () => {
      const pilotId = await seedPilot("down-09");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, identity, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "09",
      );
      expect(saved.status).toBe("AVAILABLE");
      const badProv = buildSealedProvenance({ ...identity, commandId: "incoherent-cmd-id" });
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: badProv,
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("DOWN-10: after DB tamper — 10× reconcile, zero writes, never AVAILABLE", async () => {
      const pilotId = await seedPilot("down-10");
      const prep = await openOrCreatePreparation(pilotId);
      const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "down-10");
      const sealed = await sealAndApplyDocumentCommand({
        pilotId,
        fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
        binding: admitted.binding,
      });
      expect(sealed.effect.status).toBe("AVAILABLE");
      if (sealed.effect.status !== "AVAILABLE") throw new Error("apply");
      const baseline = await countD4Rows(pilotId, prep.id);

      const row = (
        await db
          .select({ provenanceJson: documentRevisions.provenanceJson })
          .from(documentRevisions)
          .where(eq(documentRevisions.id, sealed.effect.revisionId))
          .limit(1)
      )[0];
      const stored = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
      stored.qualifiedIntentId = "mutated-intent";
      await db
        .update(documentRevisions)
        .set({ provenanceJson: JSON.stringify(stored) })
        .where(eq(documentRevisions.id, sealed.effect.revisionId));

      for (let i = 0; i < 10; i++) {
        const r = await reconcileDocumentCommandFromBinding({
          pilotId,
          preparationId: prep.id,
          binding: admitted.binding,
        });
        expect(r.verdict).not.toBe("AVAILABLE");
      }
      expect(await countD4Rows(pilotId, prep.id)).toEqual(baseline);
    });

    it("DOWN-11: historical CREATE/REVISE non-regression", async () => {
      const pilotId = await seedPilot("down-11");
      const prep = await openOrCreatePreparation(pilotId);
      const corr = `corr-hist-down11-${Date.now()}`;
      const title = "Historical revise DOWN-11";
      const bodyV1 = `# ${title}\n\nV1.\n`;
      const v1 = await savePreparationDocument(pilotId, prep.id, title, bodyV1, undefined, {
        correlationKey: corr,
        provenance: { legacy: true, correlationKey: corr },
      });
      expect(v1.status).toBe("AVAILABLE");
      if (v1.status !== "AVAILABLE") throw new Error("v1");

      const bodyV2 = `# ${title}\n\nV1.\n\n## V2\n\nSuite.\n`;
      const v2 = await savePreparationDocument(pilotId, prep.id, title, bodyV2, v1.documentId, {
        correlationKey: `rev-${corr}`,
        provenance: { legacy: true, correlationKey: `rev-${corr}` },
      });
      expect(v2.status).toBe("AVAILABLE");
      if (v2.status !== "AVAILABLE") throw new Error("v2");
      expect(v2.revisionId).not.toBe(v1.revisionId);

      const replayV1 = await savePreparationDocument(pilotId, prep.id, title, bodyV1, undefined, {
        correlationKey: corr,
        provenance: { legacy: true, correlationKey: corr },
      });
      expect(replayV1.status).toBe("AVAILABLE");
      if (replayV1.status === "AVAILABLE") {
        expect(replayV1.documentId).toBe(v1.documentId);
        expect(replayV1.revisionId).toBe(v1.revisionId);
      }
    });
  });

  describe("FIELD sealed required keys (unit + PG)", () => {
  function provOmitKey(
    identity: SealedEffectIdentity,
    omit: string,
  ): Record<string, unknown> {
    const prov = buildSealedProvenance(identity);
    delete prov[omit];
    return prov;
  }

    it("FIELD-01: CREATE documentId:null present → SEALED_VALID", () => {
      const prov = buildSealedProvenance(
        minimalCreateIdentity("prep-f", "corr-f01", "T", "# T\n\nb.\n"),
      );
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_VALID");
    });

    it("FIELD-02: CREATE documentId key absent → SEALED_INVALID", () => {
      const id = minimalCreateIdentity("prep-f", "corr-f02", "T", "# T\n\nb.\n");
      expect(resolveProvenanceIdentity(provOmitKey(id, "documentId")).kind).toBe("SEALED_INVALID");
    });

    it("FIELD-03: CREATE baseRevisionId:null present → SEALED_VALID", () => {
      const prov = buildSealedProvenance(
        minimalCreateIdentity("prep-f", "corr-f03", "T", "# T\n\nb.\n"),
      );
      expect(prov.baseRevisionId).toBeNull();
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_VALID");
    });

    it("FIELD-04: CREATE baseRevisionId absent → SEALED_INVALID", () => {
      const id = minimalCreateIdentity("prep-f", "corr-f04", "T", "# T\n\nb.\n");
      expect(resolveProvenanceIdentity(provOmitKey(id, "baseRevisionId")).kind).toBe(
        "SEALED_INVALID",
      );
    });

    it("FIELD-05: CREATE sectionHint:null present → SEALED_VALID", () => {
      const prov = buildSealedProvenance(
        minimalCreateIdentity("prep-f", "corr-f05", "T", "# T\n\nb.\n"),
      );
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_VALID");
    });

    it("FIELD-06: CREATE sectionHint absent → SEALED_INVALID", () => {
      const id = minimalCreateIdentity("prep-f", "corr-f06", "T", "# T\n\nb.\n");
      expect(resolveProvenanceIdentity(provOmitKey(id, "sectionHint")).kind).toBe("SEALED_INVALID");
    });

    it("FIELD-07: REVISE documentId+baseRevisionId present → SEALED_VALID", () => {
      const prov = buildSealedProvenance(
        minimalReviseIdentity("prep-f", "corr-f07", "T", "# T\n\nb.\n", "doc-f07", "rev-f07"),
      );
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_VALID");
    });

    it("FIELD-08: REVISE documentId absent → SEALED_INVALID", () => {
      const id = minimalReviseIdentity("prep-f", "corr-f08", "T", "# T\n\nb.\n", "doc-f08", "rev-f08");
      expect(resolveProvenanceIdentity(provOmitKey(id, "documentId")).kind).toBe("SEALED_INVALID");
    });

    it("FIELD-09: REVISE baseRevisionId absent → SEALED_INVALID", () => {
      const id = minimalReviseIdentity("prep-f", "corr-f09", "T", "# T\n\nb.\n", "doc-f09", "rev-f09");
      expect(resolveProvenanceIdentity(provOmitKey(id, "baseRevisionId")).kind).toBe(
        "SEALED_INVALID",
      );
    });

    it("FIELD-10: REVISE sectionHint:null present → SEALED_VALID", () => {
      const prov = buildSealedProvenance(
        minimalReviseIdentity("prep-f", "corr-f10", "T", "# T\n\nb.\n", "doc-f10", "rev-f10"),
      );
      expect(resolveProvenanceIdentity(prov).kind).toBe("SEALED_VALID");
    });

    it("FIELD-11: REVISE sectionHint absent → SEALED_INVALID", () => {
      const id = minimalReviseIdentity("prep-f", "corr-f11", "T", "# T\n\nb.\n", "doc-f11", "rev-f11");
      expect(resolveProvenanceIdentity(provOmitKey(id, "sectionHint")).kind).toBe("SEALED_INVALID");
    });

    it("FIELD-12: delete required field from DB provenance → never AVAILABLE", async () => {
      const pilotId = await seedPilot("field-12");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, prov, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "12",
      );
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      const row = (
        await db
          .select({ provenanceJson: documentRevisions.provenanceJson })
          .from(documentRevisions)
          .where(eq(documentRevisions.id, saved.revisionId))
          .limit(1)
      )[0];
      const stored = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
      delete stored.documentId;
      await db
        .update(documentRevisions)
        .set({ provenanceJson: JSON.stringify(stored) })
        .where(eq(documentRevisions.id, saved.revisionId));

      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: prov,
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("FIELD-13: delete required field from request provenance → never AVAILABLE", async () => {
      const pilotId = await seedPilot("field-13");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, identity, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "13",
      );
      expect(saved.status).toBe("AVAILABLE");
      const bad = buildSealedProvenance(identity);
      delete bad.sectionHint;
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: bad,
      });
      expect(replay.status).not.toBe("AVAILABLE");
      if (replay.status === "FAILED") expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
    });

    it("FIELD-14: same SHA+corr, missing required field on replay → never AVAILABLE", async () => {
      const pilotId = await seedPilot("field-14");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, identity, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "14",
      );
      expect(saved.status).toBe("AVAILABLE");
      const bad = { ...buildSealedProvenance(identity) };
      delete bad.baseRevisionId;
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: bad,
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("FIELD-15: nominal CREATE+REVISE replay same refs", async () => {
      const pilotId = await seedPilot("field-15");
      const prep = await openOrCreatePreparation(pilotId);
      const corrCreate = `corr-f15-create-${Date.now()}`;
      const title = "FIELD-15";
      const bodyCreate = `# ${title}\n\nCreate.\n`;
      const createId = minimalCreateIdentity(prep.id, corrCreate, title, bodyCreate);
      const createProv = buildSealedProvenance(createId);
      const created = await savePreparationDocument(pilotId, prep.id, title, bodyCreate, undefined, {
        correlationKey: corrCreate,
        provenance: createProv,
      });
      expect(created.status).toBe("AVAILABLE");
      if (created.status !== "AVAILABLE") throw new Error("create");
      const createReplay = await savePreparationDocument(pilotId, prep.id, title, bodyCreate, undefined, {
        correlationKey: corrCreate,
        provenance: createProv,
      });
      expect(createReplay.status).toBe("AVAILABLE");
      if (createReplay.status === "AVAILABLE") {
        expect(createReplay.documentId).toBe(created.documentId);
        expect(createReplay.revisionId).toBe(created.revisionId);
      }

      const corrRev = `corr-f15-rev-${Date.now()}`;
      const bodyRev = `${bodyCreate}\n## Rev\n\nSuite.\n`;
      const revId = minimalReviseIdentity(
        prep.id,
        corrRev,
        title,
        bodyRev,
        created.documentId,
        created.revisionId,
      );
      const revProv = buildSealedProvenance(revId);
      const revised = await savePreparationDocument(pilotId, prep.id, title, bodyRev, created.documentId, {
        correlationKey: corrRev,
        provenance: revProv,
      });
      expect(revised.status).toBe("AVAILABLE");
      if (revised.status !== "AVAILABLE") throw new Error("revise");
      const revReplay = await savePreparationDocument(pilotId, prep.id, title, bodyRev, created.documentId, {
        correlationKey: corrRev,
        provenance: revProv,
      });
      expect(revReplay.status).toBe("AVAILABLE");
      if (revReplay.status === "AVAILABLE") {
        expect(revReplay.documentId).toBe(created.documentId);
        expect(revReplay.revisionId).toBe(revised.revisionId);
      }
    });
  });

  describe("PARSE stored provenance readability (PG)", () => {
    async function corruptRevisionProvenance(revisionId: string, raw: string) {
      await db
        .update(documentRevisions)
        .set({ provenanceJson: raw })
        .where(eq(documentRevisions.id, revisionId));
    }

    async function historicalCreate(
      pilotId: string,
      prepId: string,
      label: string,
      provenance: Record<string, unknown>,
    ) {
      const title = `PARSE ${label}`;
      const body = `# ${title}\n\nCorps ${label} inchangé.\n`;
      const correlationKey = `corr-parse-${label}-${Date.now()}`;
      const saved = await savePreparationDocument(pilotId, prepId, title, body, undefined, {
        correlationKey,
        provenance,
      });
      return { title, body, correlationKey, saved };
    }

    it("PARSE-01: historical valid JSON object → AVAILABLE on content match", async () => {
      const pilotId = await seedPilot("parse-01");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "01", {
        note: "legacy-valid-object",
        correlationKey: "placeholder",
      });
      expect(saved.status).toBe("AVAILABLE");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "legacy-replay", correlationKey },
      });
      expect(replay.status).toBe("AVAILABLE");
      if (saved.status === "AVAILABLE" && replay.status === "AVAILABLE") {
        expect(replay.documentId).toBe(saved.documentId);
        expect(replay.revisionId).toBe(saved.revisionId);
      }
    });

    it("PARSE-02: historical provenance {} → AVAILABLE compatibility", async () => {
      const pilotId = await seedPilot("parse-02");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "02", {});
      expect(saved.status).toBe("AVAILABLE");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: {},
      });
      expect(replay.status).toBe("AVAILABLE");
    });

    it("PARSE-03: stored JSON syntax invalid → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-03");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "03", {
        note: "will-corrupt",
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      const before = await countD4Rows(pilotId, prep.id);
      await corruptRevisionProvenance(saved.revisionId, "{not-json");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "hist-request" },
      });
      expect(replay.status).toBe("UNKNOWN");
      if (replay.status === "UNKNOWN" && "reason" in replay) {
        expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      }
      expect(await countD4Rows(pilotId, prep.id)).toEqual(before);
    });

    it("PARSE-04: stored JSON null → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-04");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "04", {
        note: "will-null",
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, "null");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "hist-request" },
      });
      expect(replay.status).not.toBe("AVAILABLE");
      if (replay.status === "UNKNOWN" && "reason" in replay) {
        expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      }
    });

    it("PARSE-05: stored JSON array → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-05");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "05", {
        note: "will-array",
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, "[]");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "hist-request" },
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("PARSE-06: stored JSON string primitive → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-06");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "06", {
        note: "will-string",
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, '"legacy-string"');
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "hist-request" },
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("PARSE-07: stored empty string → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-07");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "07", {
        note: "will-empty",
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, "");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "hist-request" },
      });
      expect(replay.status).not.toBe("AVAILABLE");
    });

    it("PARSE-08: sealed healthy → AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-08");
      const prep = await openOrCreatePreparation(pilotId);
      const { saved } = await sealCreateViaSave(pilotId, prep.id, "parse-08");
      expect(saved.status).toBe("AVAILABLE");
    });

    it("PARSE-09: sealed command + corrupted stored JSON → UNKNOWN", async () => {
      const pilotId = await seedPilot("parse-09");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, prov, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "parse-09",
      );
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, "{broken");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: prov,
      });
      expect(replay.status).toBe("UNKNOWN");
      if (replay.status === "UNKNOWN" && "reason" in replay) {
        expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      }
    });

    it("PARSE-10: historical request vs corrupted sealed-looking stored → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-10");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await sealCreateViaSave(
        pilotId,
        prep.id,
        "parse-10",
      );
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, "null");
      const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
        correlationKey,
        provenance: { note: "hist-vs-corrupt", correlationKey },
      });
      expect(replay.status).not.toBe("AVAILABLE");
      if (replay.status === "UNKNOWN" && "reason" in replay) {
        expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      }
    });

    it("PARSE-11: ten corrupted replays → zero new D4 effects", async () => {
      const pilotId = await seedPilot("parse-11");
      const prep = await openOrCreatePreparation(pilotId);
      const { title, body, correlationKey, saved } = await historicalCreate(pilotId, prep.id, "11", {
        note: "adversarial",
      });
      expect(saved.status).toBe("AVAILABLE");
      if (saved.status !== "AVAILABLE") throw new Error("save");
      await corruptRevisionProvenance(saved.revisionId, "{not-json");
      const before = await countD4Rows(pilotId, prep.id);
      for (let i = 0; i < 10; i++) {
        const replay = await savePreparationDocument(pilotId, prep.id, title, body, undefined, {
          correlationKey,
          provenance: { note: `hist-replay-${i}`, correlationKey },
        });
        expect(replay.status).toBe("UNKNOWN");
        if (replay.status === "UNKNOWN" && "reason" in replay) {
          expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
        }
      }
      expect(await countD4Rows(pilotId, prep.id)).toEqual(before);
    });

    it("PARSE-12: REVISE with corrupted stored provenance → never AVAILABLE", async () => {
      const pilotId = await seedPilot("parse-12");
      const prep = await openOrCreatePreparation(pilotId);
      const created = await sealCreateViaSave(pilotId, prep.id, "parse-12-base");
      expect(created.saved.status).toBe("AVAILABLE");
      if (created.saved.status !== "AVAILABLE") throw new Error("create");

      const corrRev = `corr-parse-12-rev-${Date.now()}`;
      const bodyRev = `${created.body}\n## Rev\n\nParse-12.\n`;
      const revId = minimalReviseIdentity(
        prep.id,
        corrRev,
        created.title,
        bodyRev,
        created.saved.documentId,
        created.saved.revisionId,
      );
      const revProv = buildSealedProvenance(revId);
      const revised = await savePreparationDocument(
        pilotId,
        prep.id,
        created.title,
        bodyRev,
        created.saved.documentId,
        { correlationKey: corrRev, provenance: revProv },
      );
      expect(revised.status).toBe("AVAILABLE");
      if (revised.status !== "AVAILABLE") throw new Error("revise");

      const before = await countD4Rows(pilotId, prep.id);
      await corruptRevisionProvenance(revised.revisionId, "[]");
      const replay = await savePreparationDocument(
        pilotId,
        prep.id,
        created.title,
        bodyRev,
        created.saved.documentId,
        { correlationKey: corrRev, provenance: revProv },
      );
      expect(replay.status).not.toBe("AVAILABLE");
      if (replay.status === "UNKNOWN" && "reason" in replay) {
        expect(replay.reason).toBe("COMMAND_PROVENANCE_UNVERIFIABLE");
      }
      expect(await countD4Rows(pilotId, prep.id)).toEqual(before);
    });
  });

  it("F01-10: stashed binding without apply — lookup UNKNOWN", async () => {
    const pilotId = await seedPilot("f01-stash");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    const { admitted, reserved } = await freshCreateBinding(pilotId, prep.id, "stash-only");
    await stashDocumentCommandBinding({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      binding: admitted.binding,
    });
    const assistantId = newId("msg");
    await db.insert(messages).values({
      id: assistantId,
      conversationId: convId!,
      role: "assistant",
      content: "Sans D4.",
      status: "COMPLETE",
      ordinal: reserved.ordinalAssistant,
    });
    await completeTurnCommand({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      status: "COMPLETE",
      assistantMessageId: assistantId,
    });
    const truth = await lookupFromBinding(pilotId, prep.id, admitted.binding);
    expect(truth.verdict).toBe("UNKNOWN");
  });
});

function createHashFlip(hex: string): string {
  const n = parseInt(hex.slice(0, 8), 16) ^ 0xff;
  return n.toString(16).padStart(8, "0") + hex.slice(8);
}