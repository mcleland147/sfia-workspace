import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, messages } from "@/db/schema";
import { newId } from "@/lib/ids";
import { generateNoraReply } from "./nora-adapter";
import { getPreparationContext } from "@/domains/preparation/service";
import {
  maybeCapitalizeFromExchange,
  selectRelevantKnowledgeContext,
} from "@/domains/knowledge/service";
import { listDocuments, savePreparationDocument } from "@/domains/document/service";

export async function listMessages(pilotId: string, preparationId: string) {
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) return [];
  return db
    .select()
    .from(messages)
    .where(eq(messages.conversationId, ctx.conversation.id))
    .orderBy(asc(messages.ordinal));
}

function explicitDocumentIntent(text: string): boolean {
  return /\b(rédige|rédiger|écris|écrire|produis|produire|crée|créer)\b[\s\S]{0,40}\b(document|note|synthèse|rapport|spécification)\b/i.test(
    text,
  ) || /\b(document|note de synthèse|rapport)\b[\s\S]{0,20}\b(s'il te plaît|stp|please)\b/i.test(text);
}

function extractDocumentMarkdown(assistantText: string, userText: string): {
  title: string;
  content: string;
} | null {
  // Prefer fenced or headed document block after explicit request.
  const fence = assistantText.match(/```(?:markdown|md)?\n([\s\S]+?)```/i);
  if (fence?.[1] && fence[1].trim().length > 40) {
    const body = fence[1].trim();
    const titleLine = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
    return { title: titleLine || "Document Nora", content: body };
  }
  const heading = assistantText.match(/(^|\n)#\s+[^\n]+[\s\S]{40,}/);
  if (heading?.[0]) {
    const body = heading[0].trim();
    const titleLine = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
    return { title: titleLine || "Document Nora", content: body };
  }
  // Fallback: store structured assistant reply as draft only when intent was explicit.
  return {
    title: "Document demandé",
    content: `# Document demandé\n\n> Demande: ${userText.slice(0, 300)}\n\n${assistantText}`,
  };
}

export async function postUserMessageAndNora(
  pilotId: string,
  preparationId: string,
  content: string,
  opts?: { correlationKey?: string },
) {
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) throw Object.assign(new Error("NOT_FOUND"), { code: "NOT_FOUND" });

  const existing = await listMessages(pilotId, preparationId);
  const nextOrdinal = (existing.at(-1)?.ordinal ?? 0) + 1;

  // Persist user message BEFORE provider call
  const userMsgId = newId("msg");
  await db.insert(messages).values({
    id: userMsgId,
    conversationId: ctx.conversation.id,
    role: "user",
    content,
    status: "COMPLETE",
    ordinal: nextOrdinal,
  });

  const contextSnippets = existing
    .filter((m) => m.status === "COMPLETE")
    .slice(-6)
    .map((m) => `${m.role}: ${m.content.slice(0, 200)}`);

  // D4 selective recovery — beyond the 6-message window
  const knowledge = await selectRelevantKnowledgeContext(pilotId, preparationId, content);

  // Light document titles for context (availability, not full bodies)
  const docs = await listDocuments(pilotId, preparationId);
  const docSnippets = docs.slice(0, 5).map((d) => {
    const rev = d.latestRevision;
    return `DOCUMENT[${d.document.id}] «${d.document.title}» v${rev?.revisionNumber ?? "?"} status=${rev?.status ?? "∅"}`;
  });

  const reply = await generateNoraReply({
    userText: content,
    contextSnippets,
    knowledgeSnippets: [...knowledge.snippets, ...docSnippets],
  });

  const assistantId = newId("msg");
  await db.insert(messages).values({
    id: assistantId,
    conversationId: ctx.conversation.id,
    role: "assistant",
    content: reply.content,
    status: reply.status,
    generationId: reply.generationId,
    ordinal: nextOrdinal + 1,
  });

  // Selective D4 capitalisation after durable assistant message
  let capitalisation = { capitalisations: [] as Array<{ kind: string; id?: string; status: string }> };
  if (reply.status === "COMPLETE") {
    capitalisation = await maybeCapitalizeFromExchange(pilotId, preparationId, {
      userText: content,
      assistantText: reply.content,
      generationId: reply.generationId,
      userMessageId: userMsgId,
    });
  }

  // Explicit document request → D4 save (generation ≠ save until AVAILABLE)
  let documentSave: Awaited<ReturnType<typeof savePreparationDocument>> | null = null;
  if (reply.status === "COMPLETE" && explicitDocumentIntent(content)) {
    const extracted = extractDocumentMarkdown(reply.content, content);
    if (extracted) {
      documentSave = await savePreparationDocument(
        pilotId,
        preparationId,
        extracted.title,
        extracted.content,
        undefined,
        {
          correlationKey: opts?.correlationKey
            ? `doc:${opts.correlationKey}`
            : `doc:${reply.generationId}`,
          provenance: {
            sourceKind: "nora",
            generationId: reply.generationId,
            userMessageId: userMsgId,
            explicitRequest: true,
          },
          scope: "document",
        },
      );
    }
  }

  return {
    userMessageId: userMsgId,
    assistantMessageId: assistantId,
    noraMode: reply.mode,
    status: reply.status,
    streaming: {
      attempted: reply.streamingAttempted ?? false,
      delivered: reply.streamingDelivered ?? false,
      notes: reply.streamingNotes ?? null,
    },
    knowledgeSelection: knowledge.counts,
    capitalisation: capitalisation.capitalisations,
    documentSave,
    // Authority boundary: recommendation ≠ HumanDecision
    humanDecisionCreated: false,
  };
}

export async function getConversationId(pilotId: string, preparationId: string) {
  const row = (
    await db
      .select()
      .from(conversations)
      .where(and(eq(conversations.preparationId, preparationId), eq(conversations.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  return row?.id ?? null;
}
