import type { ToolDefinition } from "../tools/types";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
  ProviderToolCall,
} from "./types";

export type FakeToolScriptRound =
  | { kind: "message"; text: string }
  | { kind: "tool_calls"; toolCalls: ProviderToolCall[] };

/**
 * Deterministic fake provider for unit/E2E non-live tests.
 * Never presented as live GPT; replies are tagged TEST/FAKE.
 */
export class FakeConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private callCount = 0;
  private roundCount = 0;
  private readonly scripted?: string[];
  private readonly failOnCall?: number;
  private readonly toolScript?: FakeToolScriptRound[];

  constructor(options?: {
    scripted?: string[];
    failOnCall?: number;
    toolScript?: FakeToolScriptRound[];
  }) {
    this.scripted = options?.scripted;
    this.failOnCall = options?.failOnCall;
    this.toolScript = options?.toolScript;
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    // Reuse F2 marker / analysis scripted JSON from complete().
    return this.complete(input.messages);
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.callCount += 1;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (
      this.failOnCall !== undefined && this.callCount === this.failOnCall
    ) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }
    if (lastUser?.content.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }

    if (
      messages.some((m) =>
        m.role === "system" &&
        m.content.includes("SFIA Studio CKC COGNITIVE REASONING"),
      )
    ) {
      const hasCkcContext = messages.some(
        (m) =>
          m.content.toLowerCase().includes("anti scope creep") ||
          m.content.includes("ckc:studio:delivery"),
      );
      if (hasCkcContext) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — anti scope creep : borner le slice avant toute extension. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      return {
        text: "[TEST/FAKE · NON LIVE] RECOMMANDATION générique sans guidance CKC package résolu.",
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }

    // F2 deterministic structured intent JSON (TEST/FAKE only)
    if (lastUser?.content.includes("__F2_INFORMATIVE__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          objective: "Résumer le projet",
          scope: null,
          rephrasedRequest: "Résumer l'objectif du projet",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (lastUser?.content.includes("__F2_ACTIONABLE__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          objective: "Préparer la prochaine étape fonctionnelle",
          scope: "Proposition bornée sans exécution",
          rephrasedRequest: "Préparer une proposition de livraison bornée",
          outOfScope: ["Cursor", "Git write", "PR"],
          risks: ["Confusion reco/décision"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition"],
          expectedOutcome: "Proposition structurée prête pour revue",
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    /**
     * Light/Standard gated path: Morris gate via structural op token ("create pr")
     * without Critical profile — ZERO REAL Confirmation reachable.
     * Critical architecture (__F2_STRUCTURING__) remains R-T-A3-1 fail-closed.
     */
    if (lastUser?.content.includes("__F2_GATED_STANDARD__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          objective: "Préparer une livraison bornée avec gate Morris",
          scope: "Proposition Standard gateable sans Critical",
          rephrasedRequest: "Préparer une proposition de livraison gated",
          outOfScope: ["Cursor REAL"],
          risks: ["Confusion reco/décision"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Gate Morris requis — profil Standard",
          criticalJustification: null,
          requestedOperation: "create pr",
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (lastUser?.content.includes("__F2_STRUCTURING__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:functional-architecture",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          rephrasedRequest: "Préparer une proposition d'architecture",
          outOfScope: ["Exécution", "PR", "merge"],
          risks: ["Impact architecture"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Gate Morris requis",
          criticalJustification: "Besoin métier structurant documenté",
          requestedOperation: "architecture change",
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (lastUser?.content.includes("__F2_AMBIGUOUS__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          objective: null,
          scope: null,
          rephrasedRequest: "Fais le nécessaire",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (lastUser?.content.includes("__F2_EXECUTION__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "execution_request",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
          objective: "Lancer Cursor et créer une PR",
          scope: "Exécution produit demandée — refusée en F2",
          rephrasedRequest: "Demande d'exécution Cursor / PR",
          outOfScope: ["Exécution réelle"],
          risks: ["Exécution hors périmètre F2"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Proposition sans exécution",
          criticalJustification: "Demande d'exécution explicite à borner sans lancer d'agent",
          requestedOperation: "cursor create pr",
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (lastUser?.content.includes("__F2_CRITICAL_NO_JUSTIFICATION__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:security",
          signals: {
            structuralChange: true,
            securityImpact: true,
            architectureImpact: true,
            dataImpact: true,
            irreversible: true,
            lowRiskBounded: false,
          },
          objective: "Changer l'architecture sécurité",
          scope: "Impact structurant sécurité",
          rephrasedRequest: "Modifier architecture sécurité",
          outOfScope: ["Exécution"],
          risks: ["Impact critique"],
          reservations: [],
          stopConditions: ["Justification Critical obligatoire"],
          activatedBlocks: ["qualification"],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: "architecture security change",
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (messages.some((m) => m.role === "system" && m.content.includes("SFIA Studio F2"))) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          objective: null,
          scope: null,
          rephrasedRequest: (lastUser?.content ?? "").slice(0, 200),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }

    const historyLen = messages.length;
    const text =
      this.scripted?.[this.callCount - 1] ??
      `[TEST/FAKE · NON LIVE] Réponse fake #${this.callCount} (historique=${historyLen}). Echo: « ${(lastUser?.content ?? "").slice(0, 80)} »`;
    return {
      text,
      usage: {
        inputTokens: 10 * this.callCount,
        outputTokens: 5 * this.callCount,
        totalTokens: 15 * this.callCount,
        model: "fake-test-model",
        providerResponseId: `fake-resp-${this.callCount}`,
      },
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    this.roundCount += 1;
    const usage = {
      inputTokens: 10 * this.roundCount,
      outputTokens: 5 * this.roundCount,
      totalTokens: 15 * this.roundCount,
      model: "fake-test-model",
      providerResponseId: `fake-round-${this.roundCount}`,
    };

    if (this.toolScript && this.toolScript.length > 0) {
      const step =
        this.toolScript[
          Math.min(this.roundCount - 1, this.toolScript.length - 1)
        ];
      if (step.kind === "tool_calls" && input.tools.length > 0) {
        return { kind: "tool_calls", toolCalls: step.toolCalls, usage };
      }
      if (step.kind === "message") {
        return { kind: "message", text: step.text, usage };
      }
    }

    // Auto: if last user asks for git/github and tools available, emit one tool call once
    const lastUser = [...input.items]
      .reverse()
      .find((i) => i.type === "message" && i.role === "user");
    const content =
      lastUser && lastUser.type === "message" ? lastUser.content : "";

    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_GIT_STATUS__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-git-status",
            name: "git_local_get_status",
            argumentsJson: "{}",
          },
        ],
        usage,
      };
    }
    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_GITHUB_REPO__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-gh-repo",
            name: "github_get_repository",
            argumentsJson: "{}",
          },
        ],
        usage,
      };
    }
    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_DENIED_PATH__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-env",
            name: "git_local_read_file",
            argumentsJson: JSON.stringify({ path: ".env" }),
          },
        ],
        usage,
      };
    }

    // After tools or default message
    const toolOutputs = input.items.filter(
      (i) => i.type === "function_call_output",
    );
    if (toolOutputs.length > 0) {
      return {
        kind: "message",
        text: `[TEST/FAKE · NON LIVE] Analyse outils (${toolOutputs.length}) — aucun succès implicite déclaré.`,
        usage,
      };
    }

    const messages = input.items
      .filter((i): i is Extract<ProviderInputItem, { type: "message" }> =>
        i.type === "message",
      )
      .map((m) => ({ role: m.role, content: m.content }));
    const completion = await this.complete(messages);
    return { kind: "message", text: completion.text, usage: completion.usage };
  }
}
