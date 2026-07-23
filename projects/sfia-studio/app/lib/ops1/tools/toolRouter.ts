/**
 * TEMP_OPS1_PLATFORM_WRAPPER — re-export from shared platform.
 * Remove when no OPS1 consumer imports this path (Phase 6 cleanup gate).
 * Do not add generic logic here. Do not import from D1.
 */

import type { DatabaseSync } from "node:sqlite";
import {
  createToolCallId,
  listExposableTools,
  routeToolCall as platformRouteToolCall,
  toolResultForModel,
} from "@/lib/platform/tools/toolRouter";
import type {
  ToolCallRequest,
  ToolCallResult,
} from "@/lib/platform/tools/types";
import type { GithubReadPort } from "@/lib/platform/repository/githubReadAdapter";
import { createOps1SessionEventSink } from "../ops1EventSink";

export {
  createToolCallId,
  listExposableTools,
  toolResultForModel,
};

/** OPS1 adapter: default EventSink writes to session_events. */
export async function routeToolCall(
  request: ToolCallRequest,
  options?: {
    db?: DatabaseSync;
    workspaceRoot?: string;
    github?: GithubReadPort | null;
    githubUnavailableReason?: string;
  },
): Promise<ToolCallResult> {
  const sink = createOps1SessionEventSink(request.sessionId, options?.db);
  return platformRouteToolCall(request, {
    sink,
    workspaceRoot: options?.workspaceRoot,
    github: options?.github,
    githubUnavailableReason: options?.githubUnavailableReason,
  });
}
