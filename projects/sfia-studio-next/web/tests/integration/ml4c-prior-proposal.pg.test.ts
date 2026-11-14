/**
 * C-02 / C-03 — documentProposal + PRIOR_ASSISTANT_MESSAGE exact-byte paths.
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
import { createDevTestSession } from "@/domains/identity/session";

import { and, asc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  documentRevisions,
  documents,
  messages,
  pilots,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { getConversationId, postUserMessageAndNora } from "@/domains/conversation/service";
import {
  canonicalizeDocumentProposal,
  contentSha256,
  serializeProposalFence,
  admitDocumentCommand,
  resolveAssistantProposal,
  sealAndApplyDocumentCommand,
  reconcileDocumentCommandFromBinding,
  loadSealedDocumentBinding,
} from "@/domains/conversation/document-command";
import { reserveTurnCommand, turnRaceHooks } from "@/domains/conversation/turn-command";
import { extractContractualDocumentProposal } from "@/domains/conversation/document-act";
import { getDocumentRevision, listDocuments, savePreparationDocument } from "@/domains/document/service";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
} from "@/domains/conversation/semantic-qualification";
import {
  registerExplicitFixture,
  sfiaDocumentFence,
  type ExplicitFixtureSpec,
} from "../helpers/semantic-fixture-envelopes";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

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

async function noraTurn(
  pilotId: string,
  preparationId: string,
  text: string,
  opts?: { fixture?: ExplicitFixtureSpec },
) {
  if (opts?.fixture) {
    registerExplicitFixture(text, opts.fixture);
  }
  return postUserMessageAndNora(pilotId, preparationId, text);
}

async function seedFillerMessages(
  convId: string,
  count: number,
  startOrdinal: number,
): Promise<number> {
  const batch: (typeof messages.$inferInsert)[] = [];
  let next = startOrdinal;
  for (let i = 0; i < count; i++) {
    batch.push({
      id: newId("msg"),
      conversationId: convId,
      role: i % 2 === 0 ? "user" : "assistant",
      content: `Filler ML4C ${next} — bruit contrôlé pour distance temporelle.`,
      status: "COMPLETE",
      ordinal: next++,
    });
    if (batch.length >= 50) {
      await db.insert(messages).values(batch);
      batch.length = 0;
    }
  }
  if (batch.length > 0) await db.insert(messages).values(batch);
  return next;
}

describe("ML4C prior proposal C-02 / C-03 (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
  });

  it("C-02: documentProposal alone → D4 AVAILABLE, SHA matches contentSha256", async () => {
    const pilotId = await seedPilot("ml4c-c02-prop");
    const prep = await openOrCreatePreparation(pilotId);
    const title = "Proposition structurée C02";
    const contentMarkdown =
      `# ${title}\n\n` +
      "## Section 1 — Contexte\n\nContenu contractuel exact pour C-02.\n\n" +
      "## Section 2 — Suite\n\nPoints ouverts.\n";

    const utterance = `ML4C-C02-ENREGISTRE-PROPOSITION-EXACTE-${Date.now()}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer la proposition intégrale",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create from documentProposal",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Je persiste la proposition intégrale depuis documentProposal.",
        documentProposal: { title, contentMarkdown },
      },
    });

    const chat = await noraTurn(pilotId, prep.id, utterance);
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    expect(chat.documentSave?.act).toBe("CREATE");
    const documentId = chat.documentSave?.documentId;
    const revisionId = chat.documentSave?.revisionId;
    expect(documentId).toBeTruthy();
    expect(revisionId).toBeTruthy();

    const rev = await getDocumentRevision(pilotId, prep.id, documentId!, revisionId!);
    expect(rev.status).toBe("AVAILABLE");
    if (rev.status !== "AVAILABLE") throw new Error(`revision ${rev.status}`);
    const expectedSha = contentSha256(title, contentMarkdown);
    const parsedProv = JSON.parse(rev.revision.provenanceJson) as { contentFingerprint?: string };
    expect(
      parsedProv.contentFingerprint ??
        contentSha256(rev.document.title, rev.revision.contentMarkdown),
    ).toBe(expectedSha);
    expect(rev.revision.contentMarkdown).toBe(contentMarkdown);
  });

  it("C-02 unit path: canonicalize + serializeProposalFence byte equality", () => {
    const title = "Fence exacte";
    const contentMarkdown = `# ${title}\n\nPas de préfixe injecté.\n`;
    const canonical = canonicalizeDocumentProposal({ title, contentMarkdown });
    expect(canonical.ok).toBe(true);
    if (!canonical.ok) throw new Error(canonical.reason);
    const fence = serializeProposalFence(canonical.proposal);
    expect(fence).toContain("title-b64=");
    expect(fence).toContain(`chars=${contentMarkdown.length}`);
    expect(fence).toContain(`pair-sha256=${canonical.proposal.contentSha256}`);
    expect(fence).not.toContain(`# ${title}\n\n# ${title}`);
  });

  it("C-03: PRIOR_ASSISTANT_MESSAGE → D4 equals historical bytes (N+1)", async () => {
    const pilotId = await seedPilot("ml4c-c03-n1");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const title = "Historique C03 N+1";
    const assistantId = newId("msg");
    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;

    await db.insert(messages).values({
      id: assistantId,
      conversationId: convId!,
      role: "assistant",
      content: sfiaDocumentFence(title, "Texte historique immuable."),
      status: "COMPLETE",
      ordinal: maxOrd + 1,
      generationId: newId("gen"),
    });

    const resolvedHist = await resolveAssistantProposal({
      pilotId,
      preparationId: prep.id,
      assistantMessageId: assistantId,
    });
    expect(resolvedHist.ok).toBe(true);
    if (!resolvedHist.ok) throw new Error(resolvedHist.reason);

    const utterance = `ML4C-C03-PRIOR-N1-${assistantId}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer proposition historique",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create from prior assistant",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "J'enregistre la proposition historique.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: assistantId },
      },
    });

    // One filler user turn between historical proposal and effect.
    await db.insert(messages).values({
      id: newId("msg"),
      conversationId: convId!,
      role: "user",
      content: "Message intermédiaire N+1.",
      status: "COMPLETE",
      ordinal: maxOrd + 2,
    });

    const chat = await noraTurn(pilotId, prep.id, utterance);
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    const rev = await getDocumentRevision(
      pilotId,
      prep.id,
      chat.documentSave!.documentId!,
      chat.documentSave!.revisionId!,
    );
    expect(rev.status).toBe("AVAILABLE");
    if (rev.status !== "AVAILABLE") throw new Error(`revision ${rev.status}`);
    expect(rev.revision.contentMarkdown).toBe(resolvedHist.proposal.contentMarkdown);
    expect(contentSha256(rev.document.title, rev.revision.contentMarkdown)).toBe(
      resolvedHist.proposal.contentSha256,
    );
  });

  it("C-03: PRIOR_ASSISTANT_MESSAGE after N+100 filler messages", async () => {
    const pilotId = await seedPilot("ml4c-c03-n100");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const title = "Historique C03 N+100";
    const assistantId = newId("msg");
    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;

    await db.insert(messages).values({
      id: assistantId,
      conversationId: convId!,
      role: "assistant",
      content: sfiaDocumentFence(title, "Corps profondément enterré."),
      status: "COMPLETE",
      ordinal: maxOrd + 1,
      generationId: newId("gen"),
    });

    const nextOrd = await seedFillerMessages(convId!, 100, maxOrd + 2);

    const utterance = `ML4C-C03-PRIOR-N100-${assistantId}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer proposition ancienne profonde",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create buried prior",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Proposition historique reprise.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: assistantId },
      },
    });

    void nextOrd;
    const chat = await noraTurn(pilotId, prep.id, utterance);
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    expect(chat.documentSave?.documentId).toBeTruthy();
  });

  it("C-03: three proposals in reply → clarification / zero D4", async () => {
    const pilotId = await seedPilot("ml4c-c03-ambig");
    const prep = await openOrCreatePreparation(pilotId);
    const triple =
      sfiaDocumentFence("Doc A", "A") +
      sfiaDocumentFence("Doc B", "B") +
      sfiaDocumentFence("Doc C", "C");
    const utterance = `ML4C-C03-TRIPLE-FENCE-${Date.now()}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "ambigu",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "ambiguous",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: `Trois propositions.\n\n${triple}`,
      },
    });

    const before =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;

    const chat = await noraTurn(pilotId, prep.id, utterance);
    expect(chat.documentSave?.status).not.toBe("AVAILABLE");
    expect(chat.documentSave?.reason).toMatch(/AMBIGUOUS|DOCUMENT_PROPOSAL|FAILED|NOT_EXECUTED/);

    const after =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    expect(after).toBe(before);
  });

  it("C-03: foreign pilot cannot use prior assistant message", async () => {
    const pilotA = await seedPilot("ml4c-c03-for-a");
    const pilotB = await seedPilot("ml4c-c03-for-b");
    const prepA = await openOrCreatePreparation(pilotA);
    const convA = await getConversationId(pilotA, prepA.id);
    const assistantId = newId("msg");
    await db.insert(messages).values({
      id: assistantId,
      conversationId: convA!,
      role: "assistant",
      content: sfiaDocumentFence("Foreign deny", "Secret."),
      status: "COMPLETE",
      ordinal: 1,
      generationId: newId("gen"),
    });

    const utterance = `ML4C-C03-FOREIGN-${assistantId}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "tentative cross-pilot",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "denied",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Tentative.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: assistantId },
      },
    });

    const prepB = await openOrCreatePreparation(pilotB);
    const chat = await noraTurn(pilotB, prepB.id, utterance);
    expect(chat.documentSave?.status).not.toBe("AVAILABLE");
    expect(chat.documentSave?.reason).toMatch(/SOURCE_DENIED|FAILED|NOT_EXECUTED/);
  });

  it("F03: PREPARE + documentProposal → COMPLETE assistant with fence, zero documents", async () => {
    const pilotId = await seedPilot("ml4c-f03-prepare");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    const title = "Préparation seule F03";
    const contentMarkdown = `# ${title}\n\nAucun effet D4 — mode PREPARE.\n`;
    const utterance = `ML4C-F03-PREPARE-${Date.now()}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "préparer une proposition sans effet",
        intents: [
          {
            id: "i-d4-prepare",
            capabilityId: "d4.create_document",
            mode: "PREPARE",
            summary: "prepare only",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Je prépare la proposition sans persister.",
        documentProposal: { title, contentMarkdown },
      },
    });

    const before =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;

    const chat = await noraTurn(pilotId, prep.id, utterance);
    expect(chat.status).toBe("COMPLETE");
    expect(chat.documentSave?.status).not.toBe("AVAILABLE");

    const after =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    expect(after).toBe(before);

    const assistant = (
      await db
        .select({ content: messages.content })
        .from(messages)
        .where(and(eq(messages.conversationId, convId!), eq(messages.role, "assistant")))
        .orderBy(asc(messages.ordinal))
    ).at(-1);
    expect(assistant?.content).toMatch(/title-b64=|```sfia-document/);
  });

  it("F04: REVISE with PRIOR_ASSISTANT_MESSAGE → binding.source ASSISTANT_MESSAGE", async () => {
    const pilotId = await seedPilot("ml4c-f04-prior-rev");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    const baseTitle = "Base F04";
    const baseBody = `# ${baseTitle}\n\nVersion initiale.\n`;
    const created = await savePreparationDocument(pilotId, prep.id, baseTitle, baseBody);
    expect(created.status).toBe("AVAILABLE");
    if (created.status !== "AVAILABLE") throw new Error("create base");

    const assistantId = newId("msg");
    const revisedTitle = baseTitle;
    const revisedBody = `# ${revisedTitle}\n\nVersion initiale.\n\n## Revue\n\nPrior assistant.\n`;
    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;
    await db.insert(messages).values({
      id: assistantId,
      conversationId: convId!,
      role: "assistant",
      content: serializeProposalFence({
        title: revisedTitle,
        contentMarkdown: revisedBody,
        contentSha256: contentSha256(revisedTitle, revisedBody),
      }),
      status: "COMPLETE",
      ordinal: maxOrd + 1,
      generationId: newId("gen"),
    });

    const docs = await listDocuments(pilotId, prep.id);
    const doc = docs.find((d) => d.document.id === created.documentId);
    expect(doc?.latestRevision?.id).toBe(created.revisionId);

    const utterance = `ML4C-F04-REVISE-PRIOR-${assistantId}`;
    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "réviser depuis proposition historique",
        intents: [
          {
            id: "i-d4-revise",
            capabilityId: "d4.revise_document",
            mode: "REQUEST_EFFECT",
            summary: "revise from prior",
            parameters: { documentHint: baseTitle },
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Je révise depuis la proposition historique.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: assistantId },
      },
    });

    const chat = await noraTurn(pilotId, prep.id, utterance);
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    expect(chat.documentSave?.act).toBe("REVISE");

    const cmd = (
      await db
        .select({ resultJson: conversationTurnCommands.resultJson })
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.operationId, chat.operationId!))
        .limit(1)
    )[0];
    expect(cmd?.resultJson).toBeTruthy();
    const parsed = JSON.parse(cmd!.resultJson!) as {
      documentCommandBindings?: Array<{ source?: { kind?: string } }>;
    };
    const binding = parsed.documentCommandBindings?.[0];
    expect(binding?.source?.kind).toBe("ASSISTANT_MESSAGE");
  });

  it("P1: three historical assistant fences — no source → zero D4; explicit id → exact create", async () => {
    const pilotId = await seedPilot("ml4c-p1-ambig");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const ids = [newId("msg"), newId("msg"), newId("msg")];
    const bodies = [
      { title: "Doc P1 A", body: "Corps A." },
      { title: "Doc P1 B", body: "Corps B." },
      { title: "Doc P1 C", body: "Corps C." },
    ];
    let ord =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;
    for (let i = 0; i < 3; i++) {
      const { title, body } = bodies[i]!;
      ord += 1;
      await db.insert(messages).values({
        id: ids[i]!,
        conversationId: convId!,
        role: "assistant",
        content: sfiaDocumentFence(title, body),
        status: "COMPLETE",
        ordinal: ord,
        generationId: newId("gen"),
      });
    }

    const noSourceUtterance = `ML4C-P1-NO-SOURCE-${Date.now()}`;
    registerExplicitFixture(noSourceUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer sans source explicite",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "ambiguous historical",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Je ne choisis pas quelle proposition historique.",
      },
    });

    const before =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;

    const ambiguous = await noraTurn(pilotId, prep.id, noSourceUtterance);
    expect(ambiguous.documentSave?.status).not.toBe("AVAILABLE");
    const mid =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    expect(mid).toBe(before);

    const pickId = ids[1]!;
    const resolved = await resolveAssistantProposal({
      pilotId,
      preparationId: prep.id,
      assistantMessageId: pickId,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) throw new Error(resolved.reason);

    const explicitUtterance = `ML4C-P1-EXPLICIT-${pickId}`;
    registerExplicitFixture(explicitUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer proposition B",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create from explicit prior",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "J'enregistre la proposition B.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: pickId },
      },
    });

    const exact = await noraTurn(pilotId, prep.id, explicitUtterance);
    expect(exact.documentSave?.status).toBe("AVAILABLE");
    const rev = await getDocumentRevision(
      pilotId,
      prep.id,
      exact.documentSave!.documentId!,
      exact.documentSave!.revisionId!,
    );
    expect(rev.status).toBe("AVAILABLE");
    if (rev.status !== "AVAILABLE") throw new Error("rev");
    expect(rev.revision.contentMarkdown).toBe(resolved.proposal.contentMarkdown);
  });

  it("SRC-04-PREPARE: documentProposal vs divergent fence title → conflict, zero D4, no rewrite", async () => {
    const pilotId = await seedPilot("ml4c-src04-prep");
    const prep = await openOrCreatePreparation(pilotId);
    const titleA = "Autorité PREPARE A";
    const titleB = "Conflit PREPARE B";
    const contentMarkdown = `## Corps commun\n\nSans H1 — PREPARE conflict.\n`;
    const utterance = `ML4C-SRC04-PREPARE-${Date.now()}`;

    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "rédiger sans enregistrer",
        intents: [
          {
            id: "i-prep",
            capabilityId: "d4.create_document",
            mode: "PREPARE",
            summary: "prepare only",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Proposition PREPARE.",
        documentProposal: { title: titleA, contentMarkdown },
      },
    });

    const conflictingFence = serializeProposalFence({
      title: titleB,
      contentMarkdown,
      contentSha256: contentSha256(titleB, contentMarkdown),
    });
    turnRaceHooks.replaceNoraAssistantText = () =>
      `Narration PREPARE.\n\n${conflictingFence}`;
    try {
      const before =
        (
          await db
            .select({ n: sql<number>`count(*)`.mapWith(Number) })
            .from(documents)
            .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
        )[0]?.n ?? 0;
      const chat = await noraTurn(pilotId, prep.id, utterance);
      expect(chat.status).toBe("COMPLETE");
      expect(chat.documentSave?.status).toBe("NOT_EXECUTED");
      expect(chat.documentSave?.reason).toBe("PROPOSAL_SOURCE_CONFLICT");
      expect(chat.assistantMessageId).toBeTruthy();
      const row = (
        await db
          .select()
          .from(messages)
          .where(eq(messages.id, chat.assistantMessageId!))
          .limit(1)
      )[0];
      expect(row?.content).toContain(`title-b64=${Buffer.from(titleB, "utf8").toString("base64url")}`);
      expect(row?.content).not.toContain(
        `title-b64=${Buffer.from(titleA, "utf8").toString("base64url")}`,
      );
      const after =
        (
          await db
            .select({ n: sql<number>`count(*)`.mapWith(Number) })
            .from(documents)
            .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
        )[0]?.n ?? 0;
      expect(after).toBe(before);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });

  it("SRC-02b: documentProposal without terminal LF vs legacy fence with structural LF → AVAILABLE", async () => {
    const pilotId = await seedPilot("ml4c-src02b");
    const prep = await openOrCreatePreparation(pilotId);
    const title = "Structural LF";
    const contentMarkdown =
      `# ${title}\n\n` + "## Corps\n\nSans LF terminal voulu dans la proposition";
    expect(contentMarkdown.endsWith("\n")).toBe(false);
    const utterance = `ML4C-SRC02B-${Date.now()}`;

    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer avec séparateur structurel",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Proposition.",
        documentProposal: { title, contentMarkdown },
      },
    });

    const legacyFence = "```sfia-document\n" + contentMarkdown + "\n```\n";
    turnRaceHooks.replaceNoraAssistantText = () => `Narration.\n\n${legacyFence}`;
    try {
      const chat = await noraTurn(pilotId, prep.id, utterance);
      expect(chat.documentSave?.status).toBe("AVAILABLE");
      expect(chat.documentSave?.documentId).toBeTruthy();
      expect(chat.assistantMessageId).toBeTruthy();
      const row = (
        await db
          .select()
          .from(messages)
          .where(eq(messages.id, chat.assistantMessageId!))
          .limit(1)
      )[0];
      const extracted = extractContractualDocumentProposal(row!.content);
      expect(extracted.ok).toBe(true);
      if (!extracted.ok) throw new Error(extracted.reason);
      expect(extracted.content).toBe(contentMarkdown);
      expect(row!.content).toMatch(/NOT_EXECUTED|AVAILABLE|Résultat applicatif/);
      expect(row!.content).not.toMatch(/Studio a exécuté l'acte documentaire et a refusé/);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });

  it("SRC-04: documentProposal vs divergent assistant fence → PROPOSAL_SOURCE_CONFLICT, zero D4", async () => {
    const pilotId = await seedPilot("ml4c-src04");
    const prep = await openOrCreatePreparation(pilotId);
    const titleA = "Autorité A";
    const titleB = "Conflit B";
    const contentMarkdown = `## Corps commun\n\nSans H1 explicite — même octets.\n`;
    const utterance = `ML4C-SRC04-${Date.now()}`;

    registerExplicitFixture(utterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer proposition structurée",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create with authority proposal",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Proposition contradictoire.",
        documentProposal: { title: titleA, contentMarkdown },
      },
    });

    const conflictingFence = serializeProposalFence({
      title: titleB,
      contentMarkdown,
      contentSha256: contentSha256(titleB, contentMarkdown),
    });
    turnRaceHooks.replaceNoraAssistantText = () => `Réponse avec fence divergent.\n\n${conflictingFence}`;
    try {
      const before =
        (
          await db
            .select({ n: sql<number>`count(*)`.mapWith(Number) })
            .from(documents)
            .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
        )[0]?.n ?? 0;

      const chat = await noraTurn(pilotId, prep.id, utterance);
      expect(chat.documentSave?.status).toBe("NOT_EXECUTED");
      expect(chat.documentSave?.reason).toBe("PROPOSAL_SOURCE_CONFLICT");

      const after =
        (
          await db
            .select({ n: sql<number>`count(*)`.mapWith(Number) })
            .from(documents)
            .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
        )[0]?.n ?? 0;
      expect(after).toBe(before);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });

  it("PREPARE → N+100 → AGREE: prior assistant fence, ASSISTANT_MESSAGE binding, idempotent replay", async () => {
    const pilotId = await seedPilot("ml4c-prep-n100");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const title = "Préparé café — été";
    const contentMarkdown =
      `# ${title}\n\n` + "## Section unique\n\nContenu sans saut de ligne final";
    expect(contentMarkdown.endsWith("\n")).toBe(false);

    const prepareUtterance = `ML4C-PREPARE-N100-${Date.now()}`;
    registerExplicitFixture(prepareUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "préparer une proposition différée",
        intents: [
          {
            id: "i-d4-prepare",
            capabilityId: "d4.create_document",
            mode: "PREPARE",
            summary: "prepare only",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Voici la proposition préparée.",
        documentProposal: { title, contentMarkdown },
      },
    });

    const prepChat = await noraTurn(pilotId, prep.id, prepareUtterance);
    expect(prepChat.status).toBe("COMPLETE");
    expect(prepChat.documentSave?.status).not.toBe("AVAILABLE");

    const prepareAssistant = (
      await db
        .select({ id: messages.id, content: messages.content })
        .from(messages)
        .where(and(eq(messages.conversationId, convId!), eq(messages.role, "assistant")))
        .orderBy(asc(messages.ordinal))
    ).at(-1);
    expect(prepareAssistant?.content).toBeTruthy();
    const extracted = extractContractualDocumentProposal(prepareAssistant!.content);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(extracted.title).toBe(title);
    expect(extracted.content).toBe(contentMarkdown);
    expect(contentSha256(extracted.title, extracted.content)).toBe(contentSha256(title, contentMarkdown));

    const docsBefore =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    expect(docsBefore).toBe(0);

    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;
    const assistantMessageId = prepareAssistant!.id;
    await seedFillerMessages(convId!, 200, maxOrd + 1);

    const agreeUtterance = `ML4C-AGREE-N100-${assistantMessageId}`;
    registerExplicitFixture(agreeUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "enregistrer proposition préparée",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create from prepared assistant",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "J'enregistre la proposition préparée.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId },
      },
    });

    const agreeChat = await noraTurn(pilotId, prep.id, agreeUtterance);
    expect(agreeChat.documentSave?.status).toBe("AVAILABLE");
    const documentId = agreeChat.documentSave!.documentId!;
    const revisionId = agreeChat.documentSave!.revisionId!;

    const rev = await getDocumentRevision(pilotId, prep.id, documentId, revisionId);
    expect(rev.status).toBe("AVAILABLE");
    if (rev.status !== "AVAILABLE") throw new Error("rev");
    expect(rev.revision.contentMarkdown).toBe(contentMarkdown);
    expect(rev.document.title).toBe(title);

    const docCount =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    expect(docCount).toBe(1);

    const revCount =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documentRevisions)
          .where(eq(documentRevisions.documentId, documentId))
      )[0]?.n ?? 0;
    expect(revCount).toBe(1);

    const cmd = (
      await db
        .select({ commandId: conversationTurnCommands.id, resultJson: conversationTurnCommands.resultJson })
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.operationId, agreeChat.operationId!))
        .limit(1)
    )[0];
    const parsed = JSON.parse(cmd!.resultJson!) as {
      documentSave?: { documentId?: string; revisionId?: string };
    };
    const loaded = await loadSealedDocumentBinding({
      pilotId,
      preparationId: prep.id,
      commandId: cmd!.commandId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error(loaded.reason);
    expect(loaded.binding.source).toEqual({
      kind: "ASSISTANT_MESSAGE",
      assistantMessageId,
    });

    const replay1 = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: loaded.binding,
    });
    expect(replay1.verdict).toBe("AVAILABLE");
    expect(replay1.documentId).toBe(documentId);
    expect(replay1.revisionId).toBe(revisionId);

    const replay2 = await reconcileDocumentCommandFromBinding({
      pilotId,
      preparationId: prep.id,
      binding: loaded.binding,
    });
    expect(replay2.verdict).toBe("AVAILABLE");
    expect(replay2.documentId).toBe(parsed.documentSave?.documentId);
    expect(replay2.revisionId).toBe(parsed.documentSave?.revisionId);

    const docCountAfter =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    const revCountAfter =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documentRevisions)
          .where(eq(documentRevisions.documentId, documentId))
      )[0]?.n ?? 0;
    expect(docCountAfter).toBe(1);
    expect(revCountAfter).toBe(1);
  });

  it("FLOW: PREPARE → N+100 → AGREE with stable clientTurnKey idempotent replay", async () => {
    const pilotId = await seedPilot("ml4c-flow-idem");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const title = "Flow idempotent";
    const contentMarkdown = `# ${title}\n\n## Unique\n\nContenu flow.\n`;

    const prepareUtterance = `ML4C-FLOW-PREPARE-${Date.now()}`;
    registerExplicitFixture(prepareUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "préparer",
        intents: [
          {
            id: "i-d4-prepare",
            capabilityId: "d4.create_document",
            mode: "PREPARE",
            summary: "prepare",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Proposition préparée.",
        documentProposal: { title, contentMarkdown },
      },
    });
    await noraTurn(pilotId, prep.id, prepareUtterance);

    const prepareAssistant = (
      await db
        .select({ id: messages.id })
        .from(messages)
        .where(and(eq(messages.conversationId, convId!), eq(messages.role, "assistant")))
        .orderBy(asc(messages.ordinal))
    ).at(-1);
    const assistantMessageId = prepareAssistant!.id;
    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;
    await seedFillerMessages(convId!, 100, maxOrd + 1);

    const agreeUtterance = `ML4C-FLOW-AGREE-${assistantMessageId}`;
    const stableAgreementTurnKey = `agree-flow-${Date.now()}`;
    registerExplicitFixture(agreeUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "agree prepared",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create from prepared",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "J'enregistre.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId },
      },
    });

    const first = await postUserMessageAndNora(pilotId, prep.id, agreeUtterance, {
      clientTurnKey: stableAgreementTurnKey,
    });
    expect(first.documentSave?.status).toBe("AVAILABLE");
    expect(first.idempotentReplay).toBe(false);
    const documentId = first.documentSave!.documentId!;
    const revisionId = first.documentSave!.revisionId!;
    const operationId = first.operationId!;
    expect(operationId).toBeTruthy();

    const cmdRow = (
      await db
        .select({ commandId: conversationTurnCommands.id })
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.operationId, operationId))
        .limit(1)
    )[0];
    expect(cmdRow?.commandId).toBeTruthy();

    const docCountBefore =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    const revCountBefore =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documentRevisions)
          .where(eq(documentRevisions.documentId, documentId))
      )[0]?.n ?? 0;

    const second = await postUserMessageAndNora(pilotId, prep.id, agreeUtterance, {
      clientTurnKey: stableAgreementTurnKey,
    });
    expect(second.idempotentReplay).toBe(true);
    expect(second.operationId).toBe(operationId);
    expect(second.documentSave?.documentId).toBe(documentId);
    expect(second.documentSave?.revisionId).toBe(revisionId);

    const docCountAfter =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0;
    const revCountAfter =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documentRevisions)
          .where(eq(documentRevisions.documentId, documentId))
      )[0]?.n ?? 0;
    expect(docCountAfter).toBe(docCountBefore);
    expect(revCountAfter).toBe(revCountBefore);
  });

  it("E2E: PREPARE → N+100 → AGREE → idempotent replay → 10× reconcileHttpGet (D,R,C,O,K)", async () => {
    const sess = await bindDevSession("a");
    const pilotId = sess.pilotId;
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();

    const title = "E2E integrated flow";
    const contentMarkdown = `# ${title}\n\n## Section\n\nIntégré ML4C.\n`;

    const prepareUtterance = `ML4C-E2E-PREPARE-${Date.now()}`;
    registerExplicitFixture(prepareUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "préparer",
        intents: [
          {
            id: "i-d4-prepare",
            capabilityId: "d4.create_document",
            mode: "PREPARE",
            summary: "prepare",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "Proposition préparée.",
        documentProposal: { title, contentMarkdown },
      },
    });

    const prepChat = await noraTurn(pilotId, prep.id, prepareUtterance);
    expect(prepChat.status).toBe("COMPLETE");
    expect(prepChat.documentSave?.status).not.toBe("AVAILABLE");

    const prepareAssistant = (
      await db
        .select({ id: messages.id })
        .from(messages)
        .where(and(eq(messages.conversationId, convId!), eq(messages.role, "assistant")))
        .orderBy(asc(messages.ordinal))
    ).at(-1);
    const assistantMessageId = prepareAssistant!.id;
    expect(
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(documents)
          .where(and(eq(documents.ownerPilotId, pilotId), eq(documents.preparationId, prep.id)))
      )[0]?.n ?? 0,
    ).toBe(0);

    const maxOrd =
      (
        await db
          .select({ o: sql<number>`coalesce(max(${messages.ordinal}), 0)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.o ?? 0;
    // FLOW-100: 100 complete exchanges = 100 USER + 100 ASSISTANT = 200 intermediate messages.
    const fillerStart = maxOrd + 1;
    await seedFillerMessages(convId!, 200, fillerStart);

    const fillerRows = await db
      .select({
        id: messages.id,
        role: messages.role,
        ordinal: messages.ordinal,
      })
      .from(messages)
      .where(eq(messages.conversationId, convId!))
      .orderBy(asc(messages.ordinal));
    const fillers = fillerRows.filter((m) => m.ordinal >= fillerStart);
    expect(fillers.length).toBe(200);
    expect(fillers.filter((m) => m.role === "user").length).toBe(100);
    expect(fillers.filter((m) => m.role === "assistant").length).toBe(100);
    const fillerOrdinals = fillers.map((m) => m.ordinal);
    expect(new Set(fillerOrdinals).size).toBe(200);
    for (let i = 1; i < fillerOrdinals.length; i++) {
      expect(fillerOrdinals[i]).toBe(fillerOrdinals[i - 1]! + 1);
    }
    expect(fillerRows.some((m) => m.id === assistantMessageId)).toBe(true);

    const agreeUtterance = `ML4C-E2E-AGREE-${assistantMessageId}`;
    const stableAgreementTurnKey = `e2e-agree-${Date.now()}`;
    registerExplicitFixture(agreeUtterance, {
      kind: "qualification",
      q: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "agree prepared",
        intents: [
          {
            id: "i-d4-create",
            capabilityId: "d4.create_document",
            mode: "REQUEST_EFFECT",
            summary: "create from prepared",
            parameters: {},
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft: "J'enregistre.",
        documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId },
      },
    });

    const first = await postUserMessageAndNora(pilotId, prep.id, agreeUtterance, {
      clientTurnKey: stableAgreementTurnKey,
    });
    expect(first.documentSave?.status).toBe("AVAILABLE");
    expect(first.idempotentReplay).toBe(false);
    const documentId = first.documentSave!.documentId!;
    const revisionId = first.documentSave!.revisionId!;
    const operationId = first.operationId!;
    expect(operationId).toBeTruthy();

    const cmdRow = (
      await db
        .select({ commandId: conversationTurnCommands.id })
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.operationId, operationId))
        .limit(1)
    )[0];
    const commandId = cmdRow!.commandId;
    expect(commandId).toBeTruthy();

    const loaded = await loadSealedDocumentBinding({
      pilotId,
      preparationId: prep.id,
      commandId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error(loaded.reason);
    const correlationKey = loaded.binding.correlationKey;
    expect(loaded.binding.title).toBe(title);
    expect(loaded.binding.contentMarkdown).toBe(contentMarkdown);
    expect(loaded.binding.contentSha256).toBe(contentSha256(title, contentMarkdown));
    expect(loaded.binding.source).toEqual({
      kind: "ASSISTANT_MESSAGE",
      assistantMessageId,
    });

    const storedRev = (
      await db
        .select({
          contentMarkdown: documentRevisions.contentMarkdown,
          title: documents.title,
        })
        .from(documentRevisions)
        .innerJoin(documents, eq(documents.id, documentRevisions.documentId))
        .where(eq(documentRevisions.id, revisionId))
        .limit(1)
    )[0];
    expect(storedRev?.title).toBe(title);
    expect(storedRev?.contentMarkdown).toBe(contentMarkdown);

    const docCountBefore = (await countD4Rows(pilotId, prep.id)).documents;
    const revCountBefore = (
      await db
        .select({ n: sql<number>`count(*)`.mapWith(Number) })
        .from(documentRevisions)
        .where(eq(documentRevisions.documentId, documentId))
    )[0]?.n ?? 0;

    const second = await postUserMessageAndNora(pilotId, prep.id, agreeUtterance, {
      clientTurnKey: stableAgreementTurnKey,
    });
    expect(second.idempotentReplay).toBe(true);
    expect(second.operationId).toBe(operationId);
    expect(second.documentSave?.documentId).toBe(documentId);
    expect(second.documentSave?.revisionId).toBe(revisionId);

    const httpBaseline = await countD4Rows(pilotId, prep.id);
    for (let i = 0; i < 10; i++) {
      const res = await reconcileHttpGet(prep.id, {
        documentCommandId: commandId,
        correlationKey,
      });
      expect(res.status).toBe(200);
      expect(res.body.verdict).toBe("AVAILABLE");
      expect(res.body.documentId).toBe(documentId);
      expect(res.body.revisionId).toBe(revisionId);
    }
    expect(await countD4Rows(pilotId, prep.id)).toEqual(httpBaseline);
    expect(docCountBefore).toBe(1);
    expect(revCountBefore).toBe(1);

    const row = (
      await db
        .select({ provenanceJson: documentRevisions.provenanceJson })
        .from(documentRevisions)
        .where(eq(documentRevisions.id, revisionId))
        .limit(1)
    )[0];
    const prov = JSON.parse(row!.provenanceJson) as Record<string, unknown>;
    prov.commandId = "e2e-tampered-cmd";
    await db
      .update(documentRevisions)
      .set({ provenanceJson: JSON.stringify(prov) })
      .where(eq(documentRevisions.id, revisionId));

    const tamperBaseline = await countD4Rows(pilotId, prep.id);
    const badHttp = await reconcileHttpGet(prep.id, {
      documentCommandId: commandId,
      correlationKey,
    });
    expect(badHttp.status).toBe(200);
    expect(badHttp.body.verdict).not.toBe("AVAILABLE");
    expect(await countD4Rows(pilotId, prep.id)).toEqual(tamperBaseline);
  });

  it("C-02 admit+seal preserves correlationKey (no post-mutation)", async () => {
    const pilotId = await seedPilot("ml4c-c02-corr");
    const prep = await openOrCreatePreparation(pilotId);
    const convId = await getConversationId(pilotId, prep.id);
    const reserved = await reserveTurnCommand({
      conversationId: convId!,
      ownerPilotId: pilotId,
      clientTurnKey: `corr-stable-${Date.now()}`,
      content: "Correlation stable.",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") throw new Error("fresh");

    const title = "Correlation stable";
    const body = `# ${title}\n\nStable.\n`;
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
    const keyBefore = admitted.binding.correlationKey;

    await sealAndApplyDocumentCommand({
      pilotId,
      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
      binding: admitted.binding,
    });

    expect(admitted.binding.correlationKey).toBe(keyBefore);
  });
});