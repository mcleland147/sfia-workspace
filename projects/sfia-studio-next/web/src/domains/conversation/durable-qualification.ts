/**
 * Load / verify durable Nora qualification bound to a USER message (TV-04 / T-03).
 * Owner D5/D6 uses this — never trust body.operation alone for USER_MESSAGE.
 */
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, conversations, messages } from "@/db/schema";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  validateNoraTurnQualification,
  type NoraTurnQualification,
} from "./semantic-qualification";

export type DurableQualificationRecord = {
  commandId: string;
  userMessageId: string;
  clientTurnKey: string;
  status: string;
  qualification: NoraTurnQualification;
  stashedAt: string | null;
};

function parseStashed(resultJson: string | null): {
  qualification: NoraTurnQualification;
  stashedAt: string | null;
} | null {
  if (!resultJson) return null;
  let raw: unknown;
  try {
    raw = JSON.parse(resultJson);
  } catch {
    return null;
  }
  if (!raw || typeof raw !== "object") return null;
  const obj = raw as Record<string, unknown>;
  const validated = validateNoraTurnQualification(obj.semanticQualification);
  if (!validated.ok) return null;
  if (validated.value.schemaVersion !== SEMANTIC_QUALIFICATION_SCHEMA_VERSION) return null;
  return {
    qualification: validated.value,
    stashedAt: typeof obj.semanticQualificationStashedAt === "string"
      ? obj.semanticQualificationStashedAt
      : null,
  };
}

/** Latest turn command row that stashed a qualification for this USER message. */
export async function loadDurableQualificationForUserMessage(input: {
  pilotId: string;
  projectId: string;
  userMessageId: string;
}): Promise<DurableQualificationRecord | null> {
  const rows = await db
    .select({
      commandId: conversationTurnCommands.id,
      userMessageId: conversationTurnCommands.userMessageId,
      clientTurnKey: conversationTurnCommands.clientTurnKey,
      status: conversationTurnCommands.status,
      resultJson: conversationTurnCommands.resultJson,
      ownerPilotId: conversationTurnCommands.ownerPilotId,
      projectId: conversations.projectId,
      messageRole: messages.role,
      messageStatus: messages.status,
    })
    .from(conversationTurnCommands)
    .innerJoin(conversations, eq(conversationTurnCommands.conversationId, conversations.id))
    .innerJoin(messages, eq(conversationTurnCommands.userMessageId, messages.id))
    .where(eq(conversationTurnCommands.userMessageId, input.userMessageId))
    .orderBy(desc(conversationTurnCommands.updatedAt))
    .limit(5);

  for (const row of rows) {
    if (row.ownerPilotId !== input.pilotId) continue;
    if ((row.projectId ?? "") !== input.projectId) continue;
    if (row.messageRole?.trim().toUpperCase() !== "USER") continue;
    if (row.messageStatus !== "COMPLETE") continue;
    const parsed = parseStashed(row.resultJson);
    if (!parsed) continue;
    return {
      commandId: row.commandId,
      userMessageId: row.userMessageId!,
      clientTurnKey: row.clientTurnKey,
      status: row.status,
      qualification: parsed.qualification,
      stashedAt: parsed.stashedAt,
    };
  }
  return null;
}

export async function loadDurableQualificationByCommandId(input: {
  commandId: string;
  ownerToken?: string;
}): Promise<DurableQualificationRecord | null> {
  const conditions = [eq(conversationTurnCommands.id, input.commandId)];
  if (input.ownerToken) {
    conditions.push(eq(conversationTurnCommands.ownerToken, input.ownerToken));
  }
  const row = (
    await db
      .select({
        commandId: conversationTurnCommands.id,
        userMessageId: conversationTurnCommands.userMessageId,
        clientTurnKey: conversationTurnCommands.clientTurnKey,
        status: conversationTurnCommands.status,
        resultJson: conversationTurnCommands.resultJson,
      })
      .from(conversationTurnCommands)
      .where(and(...conditions))
      .limit(1)
  )[0];
  if (!row?.userMessageId) return null;
  const parsed = parseStashed(row.resultJson);
  if (!parsed) return null;
  return {
    commandId: row.commandId,
    userMessageId: row.userMessageId,
    clientTurnKey: row.clientTurnKey,
    status: row.status,
    qualification: parsed.qualification,
    stashedAt: parsed.stashedAt,
  };
}
