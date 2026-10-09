"use server";

/**
 * P6-HQA-NEWPROJECT-01 — thin server action for pre-Project Nora turn.
 * Reuses canonical ConversationProvider routing. No Product mutation.
 */

import {
  emptyDraft,
  type ChatTurn,
  type PreProjectDraft,
} from "./newProjectOnboardingContract";
import {
  runNewProjectOnboardingTurn,
  type NewProjectOnboardingTurnResult,
} from "./runNewProjectOnboardingTurn";

export type NewProjectOnboardingActionInput = {
  readonly userText: string;
  readonly draft: PreProjectDraft;
  readonly history: ReadonlyArray<Pick<ChatTurn, "role" | "text">>;
};

export async function newProjectOnboardingTurnAction(
  input: NewProjectOnboardingActionInput,
): Promise<NewProjectOnboardingTurnResult> {
  const draft = input?.draft ?? emptyDraft();
  const history = Array.isArray(input?.history) ? input.history : [];
  const userText =
    typeof input?.userText === "string" ? input.userText : "";
  return runNewProjectOnboardingTurn({
    userText,
    draft,
    history,
  });
}
