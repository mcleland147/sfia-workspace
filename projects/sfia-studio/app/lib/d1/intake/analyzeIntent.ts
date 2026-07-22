import { D1Error } from "../errors";
import { D1_C2_SYSTEM_PROMPT } from "./prompt";
import { resolveIntakeProvider } from "./resolveProvider";
import {
  parseProposalJsonText,
  validateRequestRoutingProposal,
} from "./validateProposal";
import {
  D1_INTAKE_MAX_CLARIFICATION_TURNS,
  D1_INTAKE_MAX_INTENT_LENGTH,
  D1_INTAKE_PROVIDER_TIMEOUT_MS,
  type AnalyzeIntentInput,
  type RequestRoutingProposal,
} from "./types";
import { logIntakeEvent } from "../intakeObservability";

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new D1Error("TIMEOUT", `Provider timeout après ${ms}ms.`));
    }, ms);
    promise
      .then((v) => {
        clearTimeout(timer);
        resolve(v);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

function sanitizeIntent(raw: string): string {
  const trimmed = raw.replace(/\u0000/g, "").trim();
  if (!trimmed) {
    throw new D1Error("VALIDATION", "Intention vide.");
  }
  if (trimmed.length > D1_INTAKE_MAX_INTENT_LENGTH) {
    throw new D1Error(
      "VALIDATION",
      `Intention trop longue (max ${D1_INTAKE_MAX_INTENT_LENGTH}).`,
    );
  }
  return trimmed;
}

function buildUserEnvelope(
  intent: string,
  clarifications: string[],
): string {
  const lines = [`INTENT:\n${intent}`];
  if (clarifications.length) {
    lines.push(
      "CLARIFICATIONS:\n" + clarifications.map((c) => `- ${c}`).join("\n"),
    );
  }
  return lines.join("\n\n");
}

export interface AnalyzeIntentResult {
  proposal: RequestRoutingProposal;
  providerMode: "fake" | "live";
  providerId: string;
  durationMs: number;
  clarificationTurnCount: number;
}

/**
 * Analyze a free-form intent into a non-executable RequestRoutingProposal.
 * No Project/Cycle mutation. No context matching.
 */
export async function analyzeIntent(
  input: AnalyzeIntentInput,
): Promise<AnalyzeIntentResult> {
  const started = Date.now();
  const intent = sanitizeIntent(input.rawIntent);
  const turns = input.clarificationTurns ?? [];
  if (turns.length > D1_INTAKE_MAX_CLARIFICATION_TURNS * 2) {
    throw new D1Error(
      "VALIDATION",
      `Trop de tours de clarification (max ${D1_INTAKE_MAX_CLARIFICATION_TURNS}).`,
    );
  }

  const userAnswers = turns
    .filter((t) => t.role === "user")
    .map((t) => t.content.trim())
    .filter(Boolean);

  // Cap user clarification answers
  if (userAnswers.length > D1_INTAKE_MAX_CLARIFICATION_TURNS) {
    throw new D1Error(
      "VALIDATION",
      `Maximum ${D1_INTAKE_MAX_CLARIFICATION_TURNS} réponses de clarification.`,
    );
  }

  logIntakeEvent("intake_analysis_started", {
    sessionLocalId: input.sessionLocalId,
    intentLength: intent.length,
    status: "started",
  });

  const { provider, mode } = resolveIntakeProvider();
  const messages = [
    { role: "system" as const, content: D1_C2_SYSTEM_PROMPT },
    { role: "user" as const, content: buildUserEnvelope(intent, userAnswers) },
  ];

  try {
    const completion = await withTimeout(
      provider.complete(messages),
      D1_INTAKE_PROVIDER_TIMEOUT_MS,
    );

    const parsed = parseProposalJsonText(completion.text);
    // Ensure rawIntent reflects original user intent
    if (typeof parsed === "object" && parsed && !Array.isArray(parsed)) {
      (parsed as Record<string, unknown>).rawIntent = intent;
      if (!(parsed as Record<string, unknown>).proposalId) {
        (parsed as Record<string, unknown>).proposalId = `rrp-${Date.now()}`;
      }
      if (!(parsed as Record<string, unknown>).createdAt) {
        (parsed as Record<string, unknown>).createdAt = new Date().toISOString();
      }
      if (!(parsed as Record<string, unknown>).schemaVersion) {
        (parsed as Record<string, unknown>).schemaVersion = "0.1.0-d1-c2";
      }
      (parsed as Record<string, unknown>).proposedProjectId = null;
      (parsed as Record<string, unknown>).proposedCycleId = null;
    }

    const proposal = validateRequestRoutingProposal(parsed);

    // After max clarification turns, never stay in clarification loop
    let finalProposal = proposal;
    if (
      userAnswers.length >= D1_INTAKE_MAX_CLARIFICATION_TURNS &&
      proposal.proposedOutcomeType === "NEED_CLARIFICATION"
    ) {
      finalProposal = validateRequestRoutingProposal({
        ...proposal,
        proposedOutcomeType: "UNDETERMINED",
        status: "UNDETERMINED",
        clarificationQuestion: null,
        confidence: Math.min(proposal.confidence, 0.25),
        missingInformation: [
          ...proposal.missingInformation,
          "informations insuffisantes après les tours de clarification",
        ],
        rationale:
          "Après le maximum de clarifications, la suite reste indéterminée. Aucune mutation n’a été effectuée.",
        requiresHumanConfirmation: true,
      });
    }

    const durationMs = Date.now() - started;

    if (finalProposal.status === "CLARIFICATION_REQUIRED") {
      logIntakeEvent("intake_clarification_requested", {
        sessionLocalId: input.sessionLocalId,
        intentLength: intent.length,
        status: finalProposal.proposedOutcomeType,
        durationMs,
        providerMode: mode,
      });
    } else if (finalProposal.status === "ANALYSIS_ONLY") {
      logIntakeEvent("intake_analysis_only_generated", {
        sessionLocalId: input.sessionLocalId,
        intentLength: intent.length,
        status: finalProposal.proposedOutcomeType,
        durationMs,
        providerMode: mode,
      });
    } else {
      logIntakeEvent("intake_proposal_generated", {
        sessionLocalId: input.sessionLocalId,
        intentLength: intent.length,
        status: finalProposal.proposedOutcomeType,
        durationMs,
        providerMode: mode,
      });
    }

    return {
      proposal: finalProposal,
      providerMode: mode,
      providerId: provider.providerId,
      durationMs,
      clarificationTurnCount: userAnswers.length,
    };
  } catch (error) {
    const durationMs = Date.now() - started;
    const code =
      error instanceof D1Error
        ? error.code
        : error instanceof Error && /timeout/i.test(error.message)
          ? "TIMEOUT"
          : "PROVIDER";
    logIntakeEvent("intake_provider_failed", {
      sessionLocalId: input.sessionLocalId,
      intentLength: intent.length,
      status: code,
      durationMs,
      providerMode: mode,
      errorCode: code,
    });
    if (error instanceof D1Error) throw error;
    if (error instanceof Error && /timeout/i.test(error.message)) {
      throw new D1Error("TIMEOUT", "Le fournisseur n’a pas répondu à temps.", error);
    }
    throw new D1Error(
      "PROVIDER",
      "Échec d’analyse de l’intention (fournisseur).",
      error,
    );
  }
}
