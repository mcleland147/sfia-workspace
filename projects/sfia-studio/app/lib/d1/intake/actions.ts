"use server";

import { analyzeIntent } from "./analyzeIntent";
import { D1Error } from "../errors";
import type { AnalyzeIntentInput, RequestRoutingProposal } from "./types";
import { logIntakeEvent } from "../intakeObservability";

function serializeError(error: unknown): {
  ok: false;
  code: string;
  message: string;
} {
  if (error instanceof D1Error) {
    return { ok: false, code: error.code, message: error.message };
  }
  return {
    ok: false,
    code: "UNKNOWN",
    message: "Erreur d’analyse. Réessayez ou créez manuellement.",
  };
}

export type AnalyzeIntentActionResult =
  | {
      ok: true;
      proposal: RequestRoutingProposal;
      providerMode: "fake" | "live";
      providerId: string;
      durationMs: number;
      clarificationTurnCount: number;
    }
  | { ok: false; code: string; message: string };

export async function actionAnalyzeIntent(
  input: AnalyzeIntentInput,
): Promise<AnalyzeIntentActionResult> {
  try {
    const result = await analyzeIntent(input);
    return { ok: true, ...result };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionCancelIntakeSession(sessionLocalId: string) {
  logIntakeEvent("intake_session_cancelled", {
    sessionLocalId,
    status: "cancelled",
  });
  return { ok: true as const };
}

export async function actionLogClarificationAnswer(input: {
  sessionLocalId: string;
  answerLength: number;
}) {
  logIntakeEvent("intake_clarification_answered", {
    sessionLocalId: input.sessionLocalId,
    intentLength: input.answerLength,
    status: "answered",
  });
  return { ok: true as const };
}
