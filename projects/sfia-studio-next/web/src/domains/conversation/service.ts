import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, messages } from "@/db/schema";
import { newId } from "@/lib/ids";
import { generateNoraReply } from "./nora-adapter";
import { getPreparationContext } from "@/domains/preparation/service";

export async function listMessages(pilotId: string, preparationId: string) {
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) return [];
  return db
    .select()
    .from(messages)
    .where(eq(messages.conversationId, ctx.conversation.id))
    .orderBy(asc(messages.ordinal));
}

export async function postUserMessageAndNora(
  pilotId: string,
  preparationId: string,
  content: string,
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

  const reply = await generateNoraReply({ userText: content, contextSnippets });

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

  // Optional: propose preview fields when empty (non-authorizing)
  return {
    userMessageId: userMsgId,
    assistantMessageId: assistantId,
    noraMode: reply.mode,
    status: reply.status,
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
