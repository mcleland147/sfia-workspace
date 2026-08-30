/**
 * Nora cognitive turn entry — Option C single Agents Runner path.
 * No runtime selector. Legacy Nora dual-path debt retired (see MIGRATION.md).
 * Platform runToolCallingLoop remains independent OPS1/D1 infrastructure (RETIRED from Nora F1).
 */
import type { ConversationProvider, ProviderChatMessage } from "@/lib/platform/ai";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import { ProductSqliteSession } from "./productSqliteSession";
import { resolveNoraSessionSqlitePath } from "./sessionPaths";
import { runNoraAgentsTurn } from "./runNoraAgentsTurn";
import type { NoraCognitiveTurnResult } from "./types";

export type RunNoraCognitiveTurnInput = {
  correlationId: string;
  projectId: string;
  messages: ProviderChatMessage[];
  provider: ConversationProvider;
  enableTools?: boolean;
  sink?: EventSink;
  workspaceRoot?: string;
  /** Override Session DB (tests). */
  sessionDbPath?: string;
  sessionKey?: string;
};

export async function runNoraCognitiveTurn(
  input: RunNoraCognitiveTurnInput,
): Promise<NoraCognitiveTurnResult> {
  const system = input.messages.find((m) => m.role === "system");
  const userMessages = input.messages.filter((m) => m.role === "user");
  const lastUser = userMessages[userMessages.length - 1];
  if (!system?.content?.trim() || !lastUser?.content?.trim()) {
    throw new Error("NORA_AGENTS_TURN_REQUIRES_SYSTEM_AND_USER");
  }

  const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
  const session = new ProductSqliteSession({
    projectId: input.projectId,
    dbPath,
    sessionKey: input.sessionKey ?? "f1-default",
  });

  try {
    // CORR-OPT-C-01: do NOT auto-import caller-provided process-local
    // user/assistant history into durable Runner Session (untrusted provenance).
    return await runNoraAgentsTurn({
      correlationId: input.correlationId,
      projectId: input.projectId,
      systemInstructions: system.content,
      userContent: lastUser.content.trim(),
      session,
      workspaceRoot: input.workspaceRoot,
      sink: input.sink,
      enableTools: input.enableTools,
      provider: input.provider,
    });
  } finally {
    session.close();
  }
}
