import { randomUUID } from "node:crypto";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
} from "@/lib/ops1/conversation/types";
import { REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION } from "./types";
import type { C2OutcomeType, C2ProposalStatus } from "./types";

function baseProposal(rawIntent: string) {
  return {
    schemaVersion: REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION,
    proposalId: `rrp-${randomUUID()}`,
    rawIntent,
    createdAt: new Date().toISOString(),
    proposedProjectId: null,
    proposedCycleId: null,
    proposedBlocks: [] as string[],
    constraints: [] as string[],
    assumptions: [] as string[],
    missingInformation: [] as string[],
    alternatives: [] as Array<{
      outcomeType: C2OutcomeType;
      label: string;
      rationale: string;
    }>,
    proposedCycleType: null as string | null,
    proposedProfile: null as string | null,
    clarificationQuestion: null as string | null,
  };
}

/** Deterministic heuristic for fake/live-test intake — no network. */
export function buildFakeProposalPayload(
  rawIntent: string,
  clarificationAnswers: string[],
): Record<string, unknown> {
  const text = rawIntent.trim();
  const lower = text.toLowerCase();
  const answers = clarificationAnswers.map((a) => a.trim()).filter(Boolean);
  const enriched = [text, ...answers].join("\n");
  const enrichedLower = enriched.toLowerCase();

  if (lower.includes("__force_invalid__")) {
    return { notAProposal: true };
  }

  const base = baseProposal(rawIntent);

  if (
    /ne cr[eé]e?\s*rien|analyse\s+seulement|analyze\s+only|sans\s+cr[eé]er/i.test(
      lower,
    )
  ) {
    return {
      ...base,
      normalizedIntent: "Demande d’analyse sans mutation",
      subject: "Analyse d’idée",
      proposedObjective:
        "Produire une synthèse d’analyse sans créer de projet ni de cycle",
      proposedOutcomeType: "ANALYZE_ONLY" satisfies C2OutcomeType,
      status: "ANALYSIS_ONLY" satisfies C2ProposalStatus,
      confidence: 0.78,
      rationale:
        "L’utilisateur a explicitement demandé une analyse sans création.",
      requiresHumanConfirmation: false,
      assumptions: ["Aucune recherche de contexte existant n’a été effectuée."],
      proposedBlocks: ["analyse"],
    };
  }

  if (
    answers.length === 0 &&
    (/j[’']ai un nouveau sujet|^nouveau sujet$|pas s[uû]r|quelque chose/i.test(
      lower,
    ) ||
      text.split(/\s+/).length < 5)
  ) {
    return {
      ...base,
      normalizedIntent: "Intention encore trop vague",
      subject: "Sujet non précisé",
      proposedObjective: "À clarifier avec l’utilisateur",
      proposedOutcomeType: "NEED_CLARIFICATION" satisfies C2OutcomeType,
      status: "CLARIFICATION_REQUIRED" satisfies C2ProposalStatus,
      confidence: 0.35,
      clarificationQuestion:
        "Quel résultat concret souhaitez-vous obtenir avec ce sujet ?",
      missingInformation: ["résultat souhaité", "périmètre"],
      rationale: "Informations insuffisantes pour proposer une suite structurée.",
      requiresHumanConfirmation: true,
    };
  }

  if (
    /gestion des (utilisateurs|comptes|r[oô]les)|cadrage|nouveau cycle|travailler sur/i.test(
      enrichedLower,
    ) &&
    !/lancer (une|un) (application|projet|produit)/i.test(enrichedLower)
  ) {
    return {
      ...base,
      normalizedIntent:
        "Besoin de travail thématique pouvant relever d’un cycle",
      subject: answers[0] || text.slice(0, 80),
      proposedObjective: answers[0]
        ? `Structurer le travail : ${answers[0]}`
        : `Structurer le travail autour de : ${text.slice(0, 120)}`,
      proposedOutcomeType: "OPEN_CYCLE_CANDIDATE" satisfies C2OutcomeType,
      status: "PROPOSAL_READY" satisfies C2ProposalStatus,
      proposedCycleType: "FRAMING",
      proposedProfile: "Standard",
      proposedBlocks: ["UX", "sécurité"],
      confidence: 0.62,
      rationale:
        "La formulation évoque un sujet de travail plutôt qu’un nouveau produit. Le rattachement à un projet existant sera traité en C3 — aucun match n’a été inventé.",
      assumptions: [
        "Aucun projet existant n’a été recherché ni affirmé.",
        "La suite reste une proposition non exécutable.",
      ],
      missingInformation: [
        "projet existant éventuel (matching C3)",
        "confirmation humaine",
      ],
      alternatives: [
        {
          outcomeType: "CREATE_PROJECT_CANDIDATE",
          label: "Créer plutôt un nouveau projet",
          rationale: "Si le sujet n’appartient à aucun projet connu.",
        },
        {
          outcomeType: "ANALYZE_ONLY",
          label: "Analyser sans créer",
          rationale: "Explorer avant toute structuration.",
        },
      ],
      requiresHumanConfirmation: true,
    };
  }

  if (
    /lancer|application|suivi des contrats|nouveau projet|créer un produit/i.test(
      enrichedLower,
    ) ||
    answers.length > 0
  ) {
    const subject =
      answers[0]?.slice(0, 80) ||
      (lower.includes("contrat") ? "Suivi des contrats" : text.slice(0, 80));
    return {
      ...base,
      normalizedIntent: `Créer un projet autour de « ${subject} »`,
      subject,
      proposedObjective: answers[0]
        ? answers[0]
        : `Cadrer et lancer ${subject}`,
      proposedOutcomeType: "CREATE_PROJECT_CANDIDATE" satisfies C2OutcomeType,
      status: "PROPOSAL_READY" satisfies C2ProposalStatus,
      proposedCycleType: "FRAMING",
      proposedProfile: "Standard",
      proposedBlocks: ["cadrage", "UX"],
      confidence: 0.74,
      rationale:
        "L’intention décrit un nouveau besoin produit. Proposition de création de projet — non exécutée.",
      assumptions: ["Aucun contexte Workspace n’a été consulté."],
      missingInformation: ["confirmation humaine avant toute création"],
      alternatives: [
        {
          outcomeType: "ANALYZE_ONLY",
          label: "Analyser d’abord",
          rationale: "Si l’utilisateur préfère explorer sans créer.",
        },
      ],
      requiresHumanConfirmation: true,
    };
  }

  return {
    ...base,
    normalizedIntent: "Intention non classée de façon fiable",
    subject: text.slice(0, 80) || "Indéterminé",
    proposedObjective: "À déterminer",
    proposedOutcomeType: "UNDETERMINED" satisfies C2OutcomeType,
    status: "UNDETERMINED" satisfies C2ProposalStatus,
    confidence: 0.2,
    missingInformation: ["objectif", "périmètre", "résultat attendu"],
    rationale:
      "Après les tours disponibles, la suite reste indéterminée sans invention.",
    requiresHumanConfirmation: true,
  };
}

/**
 * Fake intake provider — implements OPS1 ConversationProvider contract.
 * Returns JSON proposals based on deterministic heuristics.
 */
export class FakeIntakeConversationProvider implements ConversationProvider {
  readonly providerId = "d1-intake-fake";
  private callCount = 0;

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.callCount += 1;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    const content = lastUser?.content ?? "";
    // System prompt must not be concatenated into the user payload (C2-R01).
    const systemMsgs = messages.filter((m) => m.role === "system");
    void systemMsgs;

    if (content.includes("__FORCE_PROVIDER_ERROR__")) {
      throw new Error("FAKE_INTAKE_PROVIDER_ERROR");
    }
    if (content.includes("__FORCE_TIMEOUT__")) {
      await new Promise((r) => setTimeout(r, 50));
      throw new Error("FAKE_INTAKE_TIMEOUT");
    }

    // Extract raw intent + answers from the user payload envelope
    const intentMatch = content.match(
      /INTENT:\s*([\s\S]*?)(?:\n\s*CLARIFICATIONS:|$)/i,
    );
    const clarMatch = content.match(/CLARIFICATIONS:\s*([\s\S]*)$/i);
    const rawIntent = (intentMatch?.[1] ?? content).trim();
    const clarifications = (clarMatch?.[1] ?? "")
      .split(/\n+/)
      .map((l) => l.replace(/^- /, "").trim())
      .filter(Boolean);

    const payload = buildFakeProposalPayload(rawIntent, clarifications);
    return {
      text: JSON.stringify(payload),
      usage: {
        inputTokens: 20,
        outputTokens: 40,
        totalTokens: 60,
        model: "d1-intake-fake-model",
        providerResponseId: `d1-fake-${this.callCount}`,
      },
    };
  }
}
