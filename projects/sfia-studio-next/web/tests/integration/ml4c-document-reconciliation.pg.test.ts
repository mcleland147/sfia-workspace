/**
 * C-01 — read-only D4 reconcile via correlation truth (never writes on reconcile).
 */
import { beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

const devSessionRef = vi.hoisted(() => ({ token: "" }));

vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => {
      const token = devSessionRef.token;
      if (!token) return undefined;
      const lane = (process.env.STUDIO_LANE ?? "UNKNOWN").trim().toUpperCase() || "UNKNOWN";
      const safe = lane.replace(/[^A-Z0-9]+/g, "_").slice(0, 24);
      const cookie = `sfia_studio_session__${safe}`;
      if (name !== cookie) return undefined;
      return { name, value: token };
    },
  }),
  headers: async () => new Headers(),
}));

import { GET } from "@/app/api/preparations/[preparationId]/reconcile/route";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents, messages, pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { getConversationId } from "@/domains/conversation/service";
import {
  admitDocumentCommand,
  contentSha256,
  loadSealedDocumentBinding,
  reconcileDocumentCommandFromBinding,
  sealAndApplyDocumentCommand,
} from "@/domains/conversation/document-command";
import { lookupDocumentCorrelationTruth } from "@/domains/document/service";
import {
  completeTurnCommand,
  reserveTurnCommand,
  stashDocumentCommandBinding,
} from "@/domains/conversation/turn-command";
import { savePreparationDocument } from "@/domains/document/service";
import { createDevTestSession } from "@/domains/identity/session";

async function reconcileHttpGet(
  preparationId: string,
  query: Record<string, string | undefined>,
) {
  const url = new URL(`http://127.0.0.1:3100/api/preparations/${preparationId}/reconcile`);
  for (const [k, v] of Object.entries(query)) {
    if (v !== undefined) url.searchParams.set(k, v);
  }
  const res = await GET(new Request(url.toString()), {
    params: Promise.resolve({ preparationId }),
  });
  const body = (await res.json()) as Record<string, unknown>;
  return { status: res.status, body };
}

async function bindDevSession(which: "a" | "b") {
  const sess = await createDevTestSession(which, { host: "127.0.0.1:3100" });
  devSessionRef.token = sess.token;
  return sess;
}

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

async function sealCreateTurn(pilotId: string, preparationId: string, label: string) {
  const convId = await getConversationId(pilotId, preparationId);
  expect(convId).toBeTruthy();
  const reserved = await reserveTurnCommand({
    conversationId: convId!,
    ownerPilotId: pilotId,
    clientTurnKey: `ml4c-rec-${label}-${Date.now()}`,
    content: "CREATE ML4C reconcile.",
  });
  expect(reserved.kind).toBe("fresh");
  if (reserved.kind !== "fresh") throw new Error("fresh turn");

  const title = `Reconcile ${label}`;
  const body = `# ${title}\n\nCorps reconcile ${label}.\n`;
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
  expect(admitted.ok).toBe(true);
  if (!admitted.ok) throw new Error(admitted.reason);

  const sealed = await sealAndApplyDocumentCommand({
    pilotId,
    fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
    binding: admitted.binding,
  });
  expect(sealed.effect.status).toBe("AVAILABLE");

  const assistantId = newId("msg");
  await db.insert(messages).values({
    id: assistantId,
    conversationId: convId!,
    role: "assistant",
    content: "CREATE scellé.",
    status: "COMPLETE",
    ordinal: reserved.ordinalAssistant,
  });
  await completeTurnCommand({
    commandId: reserved.commandId,
    ownerToken: reserved.ownerToken,
    status: "COMPLETE",
    assistantMessageId: assistantId,
  });

  return { reserved, admitted, sealed, convId: convId! };
}

describe("ML4C document reconciliation C-01 (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("CREATE effect then reconcile → same documentId/revisionId, zero new rows", async () => {
    const pilotId = await seedPilot("ml4c-c01-create-ok");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted, sealed } = await sealCreateTurn(pilotId, prep.id, "ok");
    const afterEffect = await countD4Rows(pilotId, prep.id);
    expect(afterEffect.documents).toBeGreaterThan(0);

    const loaded = await loadSealedDocumentBinding({
      pilotId,
      preparationId: prep.id,
      commandId: admitted.binding.commandId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error(loaded.reason);

    const reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: loaded.binding,
    });
    expect(reconciled.verdict).toBe("AVAILABLE");
    expect(reconciled.documentId).toBe(
      sealed.effect.status === "AVAILABLE" ? sealed.effect.documentId : undefined,
    );
    expect(reconciled.revisionId).toBe(
      sealed.effect.status === "AVAILABLE" ? sealed.effect.revisionId : undefined,
    );

    const afterReconcile = await countD4Rows(pilotId, prep.id);
    expect(afterReconcile).toEqual(afterEffect);
  });

  it("CREATE absent → UNKNOWN, zero writes on reconcile", async () => {
    const pilotId = await seedPilot("ml4c-c01-create-abs");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();
    const before = await countD4Rows(pilotId, prep.id);

    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-abs-${Date.now()}`,
      content: "Binding sans effet D4.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("fresh");

    const admitted = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-create",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: "Absent D4",
      contentMarkdown: "# Absent D4\n\nJamais appliqué.\n",
    });
    expect(admitted.ok).toBe(true);
    if (!admitted.ok) throw new Error(admitted.reason);

    const stashed = await stashDocumentCommandBinding({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      binding: admitted.binding,
    });
    expect(stashed.applied).toBe(true);

    const assistantId = newId("msg");
    await db.insert(messages).values({
      id: assistantId,
      conversationId: convId!,
      role: "assistant",
      content: "Tour sans D4.",
      status: "COMPLETE",
      ordinal: reserved.ordinalAssistant,
    });
    await completeTurnCommand({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      status: "COMPLETE",
      assistantMessageId: assistantId,
    });

    const truth = await lookupDocumentCorrelationTruth({
      pilotId,
      preparationId: prep.id,
      action: "CREATE",
      correlationKey: admitted.binding.correlationKey,
      title: admitted.binding.title,
      contentMarkdown: admitted.binding.contentMarkdown,
      contentSha256: admitted.binding.contentSha256,
      payloadSha256: admitted.binding.payloadSha256,
    });
    expect(truth.verdict).toBe("UNKNOWN");
    expect(truth.reason).toMatch(/CREATE_CORRELATION_ABSENT/);

    const reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admitted.binding,
    });
    expect(reconciled.verdict).toBe("UNKNOWN");

    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);
  });

  it("REVISE effect then reconcile → same revisionId, zero new rows", async () => {
    const pilotId = await seedPilot("ml4c-c01-revise-ok");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted: createAdmitted, sealed: createSealed } = await sealCreateTurn(
      pilotId,
      prep.id,
      "rev-base",
    );
    if (createSealed.effect.status !== "AVAILABLE") throw new Error("create");
    const documentId = createSealed.effect.documentId!;
    const baseRevisionId = createSealed.effect.revisionId!;

    const convId = await getConversationId(pilotId, prep.id);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-rev-${Date.now()}`,
      content: "REVISE reconcile.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("fresh");

    const title = createAdmitted.binding.title;
    const revisedBody = `${createAdmitted.binding.contentMarkdown}\n## Rev\n\nAjout.\n`;
    const admittedRev = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      preparationId: prep.id,
      documentId,
      baseRevisionId,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title,
      contentMarkdown: revisedBody,
    });
    expect(admittedRev.ok).toBe(true);
    if (!admittedRev.ok) throw new Error(admittedRev.reason);

    const sealedRev = await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admittedRev.binding,
    });
    expect(sealedRev.effect.status).toBe("AVAILABLE");
    const afterRevise = await countD4Rows(pilotId, prep.id);

    const reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admittedRev.binding,
    });
    expect(reconciled.verdict).toBe("AVAILABLE");
    expect(reconciled.revisionId).toBe(
      sealedRev.effect.status === "AVAILABLE" ? sealedRev.effect.revisionId : undefined,
    );

    const afterReconcile = await countD4Rows(pilotId, prep.id);
    expect(afterReconcile).toEqual(afterRevise);
  });

  it("REVISE absent → UNKNOWN, zero new revisions", async () => {
    const pilotId = await seedPilot("ml4c-c01-revise-abs");
    const prep = await openOrCreatePreparation(pilotId);
    const { sealed: createSealed } = await sealCreateTurn(pilotId, prep.id, "rev-only");
    if (createSealed.effect.status !== "AVAILABLE") throw new Error("create");
    const documentId = createSealed.effect.documentId!;
    const baseRevisionId = createSealed.effect.revisionId!;

    const convId = await getConversationId(pilotId, prep.id);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-rev-abs-${Date.now()}`,
      content: "REVISE binding only.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("fresh");

    const admittedRev = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-revise",
      action: "REVISE",
      preparationId: prep.id,
      documentId,
      baseRevisionId,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: "Reconcile REVISE absent",
      contentMarkdown: "# Reconcile REVISE absent\n\nNon appliqué.\n",
    });
    expect(admittedRev.ok).toBe(true);
    if (!admittedRev.ok) throw new Error(admittedRev.reason);

    await stashDocumentCommandBinding({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      binding: admittedRev.binding,
    });

    const before = await countD4Rows(pilotId, prep.id);
    const truth = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: admittedRev.binding,
    });
    expect(truth.verdict).toBe("UNKNOWN");
    expect(truth.reason).toMatch(/REVISE_CORRELATION_ABSENT/);

    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);
  });

  it("correlation + divergent payload → CONFLICT, zero writes", async () => {
    const pilotId = await seedPilot("ml4c-c01-conflict");
    const prep = await openOrCreatePreparation(pilotId);
    const title = "Divergent";
    const bodyA = "# Divergent\n\nVersion A.\n";
    const { admitted: admittedA, sealed } = await (async () => {
      const convId = await getConversationId(pilotId, prep.id);
      const reserved = await reserveTurnCommand({
        conversationId: convId!,
        ownerPilotId: pilotId,
        clientTurnKey: `ml4c-conf-a-${Date.now()}`,
        content: "Seal version A.",
      });
      if (reserved.kind !== "fresh") throw new Error("fresh");
      const admitted = admitDocumentCommand({
        commandId: reserved.commandId,
        operationId: reserved.operationId,
        userMessageId: reserved.userMessageId,
        qualifiedIntentId: "i-d4-create",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
        title,
        contentMarkdown: bodyA,
      });
      if (!admitted.ok) throw new Error(admitted.reason);
      const sealed = await sealAndApplyDocumentCommand({
        pilotId,
        fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
        binding: admitted.binding,
      });
      const assistantId = newId("msg");
      await db.insert(messages).values({
        id: assistantId,
        conversationId: convId!,
        role: "assistant",
        content: "Version A scellée.",
        status: "COMPLETE",
        ordinal: reserved.ordinalAssistant,
      });
      await completeTurnCommand({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        status: "COMPLETE",
        assistantMessageId: assistantId,
      });
      return { admitted, sealed };
    })();
    expect(sealed.effect.status).toBe("AVAILABLE");
    const corr = admittedA.binding.correlationKey;

    const convId = await getConversationId(pilotId, prep.id);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-conf-b-${Date.now()}`,
      content: "Mismatch reconcile.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("fresh");

    const bodyB = "# Divergent\n\nVersion B divergente.\n";
    const admitted = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-create",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title,
      contentMarkdown: bodyB,
    });
    expect(admitted.ok).toBe(true);
    if (!admitted.ok) throw new Error(admitted.reason);

    await stashDocumentCommandBinding({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      binding: { ...admitted.binding, correlationKey: corr },
    });

    const before = await countD4Rows(pilotId, prep.id);
    const binding = { ...admitted.binding, correlationKey: corr };
    const reconciled = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding,
    });
    expect(reconciled.verdict).toBe("CONFLICT");
    expect(reconciled.reason).toBe("CORRELATION_PAYLOAD_MISMATCH");
    expect(reconciled.documentId).toBe(
      sealed.effect.status === "AVAILABLE" ? sealed.effect.documentId : undefined,
    );

    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);
  });

  it("other pilot binding → denied", async () => {
    const pilotA = await seedPilot("ml4c-c01-own-a");
    const pilotB = await seedPilot("ml4c-c01-own-b");
    const prep = await openOrCreatePreparation(pilotA);
    const { admitted } = await sealCreateTurn(pilotA, prep.id, "deny");

    const denied = await loadSealedDocumentBinding({
      pilotId: pilotB,
      preparationId: prep.id,
      commandId: admitted.binding.commandId,
    });
    expect(denied.ok).toBe(false);
    if (denied.ok) throw new Error("expected deny");
    expect(denied.reason).toBe("COMMAND_DENIED");
  });

  it("F05: two bindings without selector → BINDING_SELECTOR_REQUIRED", async () => {
    const pilotId = await seedPilot("ml4c-f05-sel");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `ml4c-f05-${Date.now()}`,
      content: "Double binding.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("fresh");

    const admittedA = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-a",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: "Binding A",
      contentMarkdown: "# Binding A\n\nA.\n",
    });
    const admittedB = admitDocumentCommand({
      commandId: reserved.commandId,
      operationId: reserved.operationId,
      userMessageId: reserved.userMessageId,
      qualifiedIntentId: "i-d4-b",
      action: "CREATE",
      preparationId: prep.id,
      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
      title: "Binding B",
      contentMarkdown: "# Binding B\n\nB.\n",
    });
    expect(admittedA.ok && admittedB.ok).toBe(true);
    if (!admittedA.ok || !admittedB.ok) throw new Error("admit");

    await stashDocumentCommandBinding({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      binding: admittedA.binding,
    });
    await stashDocumentCommandBinding({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      binding: admittedB.binding,
    });

    const loaded = await loadSealedDocumentBinding({
      pilotId,
      preparationId: prep.id,
      commandId: reserved.commandId,
    });
    expect(loaded.ok).toBe(false);
    if (loaded.ok) throw new Error("expected selector required");
    expect(loaded.reason).toBe("BINDING_SELECTOR_REQUIRED");

    const loadedA = await loadSealedDocumentBinding({
      pilotId,
      preparationId: prep.id,
      commandId: reserved.commandId,
      correlationKey: admittedA.binding.correlationKey,
    });
    expect(loadedA.ok).toBe(true);
  });

  describe("F-05 HTTP reconcile route", () => {
    it("F05-08: two bindings without correlationKey → 409 BINDING_SELECTOR_REQUIRED", async () => {
      const sess = await bindDevSession("a");
      const prep = await openOrCreatePreparation(sess.pilotId);
      const convId = await getConversationId(sess.pilotId, prep.id);
      expect(convId).toBeTruthy();
      const reserved = await reserveTurnCommand({
        conversationId: convId!,
        ownerPilotId: sess.pilotId,
        clientTurnKey: `ml4c-f05-http-${Date.now()}`,
        content: "Double binding HTTP.",
      });
      expect(reserved.kind).toBe("fresh");
      if (reserved.kind !== "fresh") throw new Error("fresh");

      const admittedA = admitDocumentCommand({
        commandId: reserved.commandId,
        operationId: reserved.operationId,
        userMessageId: reserved.userMessageId,
        qualifiedIntentId: "i-d4-a",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
        title: "HTTP Binding A",
        contentMarkdown: "# HTTP Binding A\n\nA.\n",
      });
      const admittedB = admitDocumentCommand({
        commandId: reserved.commandId,
        operationId: reserved.operationId,
        userMessageId: reserved.userMessageId,
        qualifiedIntentId: "i-d4-b",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
        title: "HTTP Binding B",
        contentMarkdown: "# HTTP Binding B\n\nB.\n",
      });
      if (!admittedA.ok || !admittedB.ok) throw new Error("admit");

      await stashDocumentCommandBinding({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        binding: admittedA.binding,
      });
      await stashDocumentCommandBinding({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        binding: admittedB.binding,
      });

      const res = await reconcileHttpGet(prep.id, {
        documentCommandId: reserved.commandId,
      });
      expect(res.status).toBe(409);
      expect(res.body.reason).toBe("BINDING_SELECTOR_REQUIRED");
    });

    it("F05-08b: correlationKey A after seal → 200 AVAILABLE", async () => {
      const sess = await bindDevSession("a");
      const prep = await openOrCreatePreparation(sess.pilotId);
      const convId = await getConversationId(sess.pilotId, prep.id);
      expect(convId).toBeTruthy();
      const reserved = await reserveTurnCommand({
        conversationId: convId!,
        ownerPilotId: sess.pilotId,
        clientTurnKey: `ml4c-f05-http-ok-${Date.now()}`,
        content: "Seal then reconcile HTTP.",
      });
      if (reserved.kind !== "fresh") throw new Error("fresh");

      const admittedA = admitDocumentCommand({
        commandId: reserved.commandId,
        operationId: reserved.operationId,
        userMessageId: reserved.userMessageId,
        qualifiedIntentId: "i-d4-a",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
        title: "HTTP Seal A",
        contentMarkdown: "# HTTP Seal A\n\nScellé.\n",
      });
      const admittedB = admitDocumentCommand({
        commandId: reserved.commandId,
        operationId: reserved.operationId,
        userMessageId: reserved.userMessageId,
        qualifiedIntentId: "i-d4-b",
        action: "CREATE",
        preparationId: prep.id,
        source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
        title: "HTTP Seal B",
        contentMarkdown: "# HTTP Seal B\n\nNon scellé.\n",
      });
      if (!admittedA.ok || !admittedB.ok) throw new Error("admit");

      const sealed = await sealAndApplyDocumentCommand({
        pilotId: sess.pilotId,
        fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
        binding: admittedA.binding,
      });
      expect(sealed.effect.status).toBe("AVAILABLE");

      await stashDocumentCommandBinding({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        binding: admittedB.binding,
      });

      const res = await reconcileHttpGet(prep.id, {
        documentCommandId: reserved.commandId,
        correlationKey: admittedA.binding.correlationKey,
      });
      expect(res.status).toBe(200);
      expect(res.body.verdict).toBe("AVAILABLE");
      expect(res.body.correlationKey).toBe(admittedA.binding.correlationKey);
    });

    it("F05-09: ten consecutive HTTP GET → zero new D4 rows", async () => {
      const sess = await bindDevSession("a");
      const prep = await openOrCreatePreparation(sess.pilotId);
      const { admitted, sealed } = await sealCreateTurn(sess.pilotId, prep.id, "http-10x");
      const before = await countD4Rows(sess.pilotId, prep.id);
      const documentId =
        sealed.effect.status === "AVAILABLE" ? sealed.effect.documentId : undefined;
      const revisionId =
        sealed.effect.status === "AVAILABLE" ? sealed.effect.revisionId : undefined;

      for (let i = 0; i < 10; i++) {
        const res = await reconcileHttpGet(prep.id, {
          documentCommandId: admitted.binding.commandId,
          correlationKey: admitted.binding.correlationKey,
        });
        expect(res.status).toBe(200);
        expect(res.body.verdict).toBe("AVAILABLE");
        expect(res.body.documentId).toBe(documentId);
        expect(res.body.revisionId).toBe(revisionId);
      }

      expect(await countD4Rows(sess.pilotId, prep.id)).toEqual(before);
    });

    it("FLOW-HTTP: sealed CREATE then 10× reconcileHttpGet — stable ids", async () => {
      const sess = await bindDevSession("a");
      const prep = await openOrCreatePreparation(sess.pilotId);
      const { admitted, sealed } = await sealCreateTurn(sess.pilotId, prep.id, "flow-http");
      expect(sealed.effect.status).toBe("AVAILABLE");
      if (sealed.effect.status !== "AVAILABLE") throw new Error("seal");
      const baseline = await countD4Rows(sess.pilotId, prep.id);

      for (let i = 0; i < 10; i++) {
        const res = await reconcileHttpGet(prep.id, {
          documentCommandId: admitted.binding.commandId,
          correlationKey: admitted.binding.correlationKey,
        });
        expect(res.status).toBe(200);
        expect(res.body.verdict).toBe("AVAILABLE");
        expect(res.body.documentId).toBe(sealed.effect.documentId);
        expect(res.body.revisionId).toBe(sealed.effect.revisionId);
      }
      expect(await countD4Rows(sess.pilotId, prep.id)).toEqual(baseline);
    });

    it("foreign pilot session → 403 COMMAND_DENIED", async () => {
      const owner = await bindDevSession("a");
      const prep = await openOrCreatePreparation(owner.pilotId);
      const { admitted } = await sealCreateTurn(owner.pilotId, prep.id, "http-deny");

      await bindDevSession("b");
      const res = await reconcileHttpGet(prep.id, {
        documentCommandId: admitted.binding.commandId,
        correlationKey: admitted.binding.correlationKey,
      });
      expect(res.status).toBe(403);
      expect(res.body.reason).toBe("COMMAND_DENIED");
    });

    it("missing turn command id → 403 COMMAND_DENIED (indistinguishable from foreign owner)", async () => {
      const sess = await bindDevSession("a");
      const prep = await openOrCreatePreparation(sess.pilotId);
      const res = await reconcileHttpGet(prep.id, {
        documentCommandId: newId("tcmd"),
      });
      expect(res.status).toBe(403);
      expect(res.body.reason).toBe("COMMAND_DENIED");
    });

    it("command without binding → 404 BINDING_ABSENT", async () => {
      const sess = await bindDevSession("a");
      const prep = await openOrCreatePreparation(sess.pilotId);
      const convId = await getConversationId(sess.pilotId, prep.id);
      expect(convId).toBeTruthy();
      const reserved = await reserveTurnCommand({
        conversationId: convId!,
        ownerPilotId: sess.pilotId,
        clientTurnKey: `ml4c-f05-absent-${Date.now()}`,
        content: "Sans binding.",
      });
      if (reserved.kind !== "fresh") throw new Error("fresh");
      const assistantId = newId("msg");
      await db.insert(messages).values({
        id: assistantId,
        conversationId: convId!,
        role: "assistant",
        content: "Sans document binding.",
        status: "COMPLETE",
        ordinal: reserved.ordinalAssistant,
      });
      await completeTurnCommand({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        status: "COMPLETE",
        assistantMessageId: assistantId,
      });

      const res = await reconcileHttpGet(prep.id, {
        documentCommandId: reserved.commandId,
      });
      expect(res.status).toBe(404);
      expect(res.body.reason).toBe("BINDING_ABSENT");
    });
  });

  it("10× reconcile GET path → D4 counts unchanged", async () => {
    const pilotId = await seedPilot("ml4c-c01-10x");
    const prep = await openOrCreatePreparation(pilotId);
    const { admitted } = await sealCreateTurn(pilotId, prep.id, "10x");
    const before = await countD4Rows(pilotId, prep.id);

    const loaded = await loadSealedDocumentBinding({
      pilotId,
      preparationId: prep.id,
      commandId: admitted.binding.commandId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error(loaded.reason);

    for (let i = 0; i < 10; i++) {
      const r = await reconcileDocumentCommandFromBinding({
        pilotId,
        preparationId: prep.id,
        binding: loaded.binding,
      });
      expect(r.verdict).toBe("AVAILABLE");
    }

    const after = await countD4Rows(pilotId, prep.id);
    expect(after).toEqual(before);
  });
});