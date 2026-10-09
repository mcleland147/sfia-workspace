/**
 * P6-HQA-NEWPROJECT-01 — pre-Project Nora turn (server-safe).
 * Reuses ConversationProvider + F2 Product cognitive routing.
 * No projectId. No Product write. No Cycle/HD.
 *
 * Usage observation is returned when the provider supplies it.
 * No hard EUR cap is enforced here (campaignBudget is MW6-scoped;
 * declaring 10 EUR ≠ technical hard cap).
 */

import { resolveF2ProductRoutedProvider } from "@/features/project-assistant/f2/resolveF2ProductRoutedProvider";
import type {
  ConversationProvider,
  ProviderUsage,
} from "@/lib/platform/ai";
import {
  emptyDraft,
  extractJsonObject,
  mergeCognitiveIntoDraft,
  NEW_PROJECT_ONBOARDING_JSON_SCHEMA,
  NEW_PROJECT_ONBOARDING_SCHEMA_NAME,
  onboardingSystemPrompt,
  parseOnboardingCognitivePayload,
  type ChatTurn,
  type OnboardingCognitivePayload,
  type PreProjectDraft,
} from "./newProjectOnboardingContract";

export type OnboardingUsageObservation = {
  readonly inputTokens: number | null;
  readonly outputTokens: number | null;
  readonly totalTokens: number | null;
  readonly model: string | null;
  readonly providerResponseId: string | null;
  readonly selectedModel: string | null;
  readonly selectedReasoningEffort: string | null;
  readonly boundarySubstitution: boolean;
  /**
   * Documentary only — Morris envelope for future Human QA.
   * NOT enforced as a technical hard stop in this path.
   */
  readonly declaredHumanQaBudgetEur: 10;
  readonly hardCapEnforced: false;
};

export type NewProjectOnboardingTurnInput = {
  readonly userText: string;
  readonly draft: PreProjectDraft;
  readonly history: ReadonlyArray<Pick<ChatTurn, "role" | "text">>;
  readonly signal?: AbortSignal;
  /** Test inject — bypasses Product routing provider construction. */
  readonly provider?: ConversationProvider;
};

export type NewProjectOnboardingTurnResult =
  | {
      readonly ok: true;
      readonly draft: PreProjectDraft;
      readonly replyText: string;
      readonly clarification: ChatTurn["clarification"];
      readonly payload: OnboardingCognitivePayload;
      readonly boundarySubstitution: boolean;
      readonly usageObservation: OnboardingUsageObservation;
    }
  | {
      readonly ok: false;
      readonly code:
        | "INPUT_EMPTY"
        | "PROVIDER_ERROR"
        | "PROVIDER_TIMEOUT"
        | "PAYLOAD_INVALID"
        | "ABORTED";
      readonly message: string;
      readonly draft: PreProjectDraft;
      readonly usageObservation?: OnboardingUsageObservation;
    };

function buildMessages(input: {
  history: ReadonlyArray<Pick<ChatTurn, "role" | "text">>;
  draft: PreProjectDraft;
  userText: string;
}): { role: "system" | "user" | "assistant"; content: string }[] {
  const draftSnapshot = [
    "État brouillon actuel (éphémère, non Product) :",
    `- intention: ${input.draft.intention || "(vide)"}`,
    `- intentionKind: ${input.draft.intentionKind}`,
    `- nom: ${input.draft.name || "(vide)"}${input.draft.nameProvisional ? " (provisoire)" : ""}`,
    `- objectif: ${input.draft.objective || "(vide)"}`,
    `- contexte: ${input.draft.context || "(vide)"}`,
    `- orientation: ${input.draft.firstOrientation || "(vide)"}`,
    `- incertitudes: ${input.draft.unknowns.join(" · ") || "(aucune)"}`,
    `- refuseCreate sticky: ${input.draft.explicitRefuseCreate ? "oui" : "non"}`,
  ].join("\n");

  const messages: { role: "system" | "user" | "assistant"; content: string }[] =
    [
      { role: "system", content: onboardingSystemPrompt() },
      { role: "system", content: draftSnapshot },
    ];

  for (const turn of input.history) {
    if (turn.role === "user") {
      messages.push({ role: "user", content: turn.text });
    } else {
      messages.push({ role: "assistant", content: turn.text });
    }
  }
  messages.push({ role: "user", content: input.userText });
  return messages;
}

function toUsageObservation(input: {
  usage: ProviderUsage | null | undefined;
  selectedModel: string | null;
  selectedReasoningEffort: string | null;
  boundarySubstitution: boolean;
}): OnboardingUsageObservation {
  const usage = input.usage;
  return {
    inputTokens: usage?.inputTokens ?? null,
    outputTokens: usage?.outputTokens ?? null,
    totalTokens: usage?.totalTokens ?? null,
    model: usage?.model ?? input.selectedModel,
    providerResponseId: usage?.providerResponseId ?? null,
    selectedModel: input.selectedModel,
    selectedReasoningEffort: input.selectedReasoningEffort,
    boundarySubstitution: input.boundarySubstitution,
    declaredHumanQaBudgetEur: 10,
    hardCapEnforced: false,
  };
}

export async function runNewProjectOnboardingTurn(
  input: NewProjectOnboardingTurnInput,
): Promise<NewProjectOnboardingTurnResult> {
  const userText = input.userText.replace(/\u0000/g, "").trim();
  if (!userText) {
    return {
      ok: false,
      code: "INPUT_EMPTY",
      message: "Message vide.",
      draft: input.draft ?? emptyDraft(),
    };
  }

  if (input.signal?.aborted) {
    return {
      ok: false,
      code: "ABORTED",
      message: "Tour interrompu.",
      draft: input.draft,
    };
  }

  let provider = input.provider;
  let boundarySubstitution = Boolean(input.provider);
  let selectedModel: string | null = null;
  let selectedReasoningEffort: string | null = null;
  if (!provider) {
    try {
      const routed = resolveF2ProductRoutedProvider({
        turnContext: {
          projectCriticality: null,
          userContentLength: userText.length,
          historyMessageCount: input.history.length,
          historyTotalChars: input.history.reduce(
            (n, t) => n + t.text.length,
            0,
          ),
          enableTools: false,
        },
        cognitiveTaskId: `new-project-onboarding:${input.draft.cognitiveTurns + 1}`,
        correlationId: `cor:new-project-onboarding:${Date.now()}`,
      });
      provider = routed.provider;
      boundarySubstitution = routed.boundarySubstitution;
      selectedModel = routed.routing.selectedModel;
      selectedReasoningEffort = routed.routing.selectedReasoningEffort;
    } catch (error) {
      return {
        ok: false,
        code: "PROVIDER_ERROR",
        message:
          error instanceof Error
            ? error.message
            : "Provider conversationnel indisponible.",
        draft: input.draft,
      };
    }
  }

  if (typeof provider.completeStructured !== "function") {
    return {
      ok: false,
      code: "PROVIDER_ERROR",
      message: "Structured Outputs requis pour l’accueil New Project.",
      draft: input.draft,
    };
  }

  let completionText: string;
  let usage: ProviderUsage | undefined;
  try {
    const completion = await provider.completeStructured({
      messages: buildMessages({
        history: input.history,
        draft: input.draft,
        userText,
      }),
      schemaName: NEW_PROJECT_ONBOARDING_SCHEMA_NAME,
      jsonSchema: NEW_PROJECT_ONBOARDING_JSON_SCHEMA,
      signal: input.signal,
    });
    completionText = completion.text;
    usage = completion.usage;
  } catch (error) {
    if (
      input.signal?.aborted ||
      (error instanceof Error && error.name === "AbortError")
    ) {
      return {
        ok: false,
        code: "ABORTED",
        message: "Tour interrompu.",
        draft: input.draft,
      };
    }
    const msg = error instanceof Error ? error.message : "Erreur provider.";
    if (/timeout|ETIMEDOUT|aborted/i.test(msg)) {
      return {
        ok: false,
        code: "PROVIDER_TIMEOUT",
        message: "Le fournisseur n’a pas répondu à temps. Tu peux réessayer.",
        draft: input.draft,
      };
    }
    return {
      ok: false,
      code: "PROVIDER_ERROR",
      message:
        "Nora n’a pas pu répondre pour le moment. La conversation locale est conservée ; tu peux réessayer.",
      draft: input.draft,
    };
  }

  if (input.signal?.aborted) {
    return {
      ok: false,
      code: "ABORTED",
      message: "Tour interrompu.",
      draft: input.draft,
    };
  }

  const parsed = parseOnboardingCognitivePayload(
    extractJsonObject(completionText),
  );
  const usageObservation = toUsageObservation({
    usage,
    selectedModel,
    selectedReasoningEffort,
    boundarySubstitution,
  });
  if (!parsed) {
    return {
      ok: false,
      code: "PAYLOAD_INVALID",
      message:
        "La réponse de Nora n’était pas exploitable. Aucune donnée n’a été inventée ; tu peux reformuler.",
      draft: input.draft,
      usageObservation,
    };
  }

  const nextDraft = mergeCognitiveIntoDraft(input.draft, parsed, userText);
  const clarification =
    parsed.clarificationQuestion && parsed.clarificationQuestion.trim()
      ? {
          title: "UNE PRÉCISION UTILE",
          question: parsed.clarificationQuestion.trim(),
          suggestions: parsed.suggestions,
        }
      : undefined;

  return {
    ok: true,
    draft: nextDraft,
    replyText: parsed.replyText,
    clarification,
    payload: parsed,
    boundarySubstitution,
    usageObservation,
  };
}
