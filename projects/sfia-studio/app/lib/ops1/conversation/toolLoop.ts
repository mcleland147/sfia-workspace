/**
 * TEMP_OPS1_PLATFORM_WRAPPER — re-export from shared platform.
 * Remove when no OPS1 consumer imports this path (Phase 6 cleanup gate).
 * Do not add generic logic here. Do not import from D1.
 */

import type { DatabaseSync } from "node:sqlite";
import {
  runToolCallingLoop as platformRunToolCallingLoop,
  type ToolLoopResult,
} from "@/lib/platform/tools/toolLoop";
import type {
  ConversationProvider,
  ProviderChatMessage,
} from "@/lib/platform/ai/types";
import { createOps1SessionEventSink } from "../ops1EventSink";
import { openOps1Db } from "../db";

export type { ToolLoopResult };

/** OPS1 adapter: injects session EventSink + sessionId correlation. */
export async function runToolCallingLoop(input: {
  sessionId: string;
  messages: ProviderChatMessage[];
  provider: ConversationProvider;
  enableTools?: boolean;
  db?: DatabaseSync;
}): Promise<ToolLoopResult> {
  const db = input.db ?? openOps1Db();
  const sink = createOps1SessionEventSink(input.sessionId, db);
  return platformRunToolCallingLoop({
    correlationId: input.sessionId,
    messages: input.messages,
    provider: input.provider,
    enableTools: input.enableTools,
    sink,
  });
}
