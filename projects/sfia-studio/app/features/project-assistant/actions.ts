"use server";

import { orchestrateProjectAssistantTurn } from "./orchestrateTurn";
import type {
  AssistantHistoryMessage,
  ProjectAssistantSendResult,
} from "./types";

/**
 * Thin server action — Project Workspace F1 Assistant.
 * No OPS1 session. No Cursor. No Git write. No durable persistence.
 */
export async function projectAssistantSendAction(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
}): Promise<ProjectAssistantSendResult> {
  return orchestrateProjectAssistantTurn(input);
}
