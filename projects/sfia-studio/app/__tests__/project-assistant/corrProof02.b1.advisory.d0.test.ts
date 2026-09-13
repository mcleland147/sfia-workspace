/** @vitest-environment node */
/**
 * CORR-PROOF-02 B1 — Advisory-default + deterministic transition gate (T1–T15).
 * ZERO LIVE OpenAI. Injected ConversationProvider only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  countCanonicalUserAssistantPairs,
  extractCanonicalTextFromItem,
  openCanonicalConversationSession,
} from "@/features/project-assistant/f2/canonicalConversationSession";
import {
  resolveTransitionReadiness,
  isGovernedFormalizationReady,
} from "@/features/project-assistant/f2/transitionReadiness";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  MW5_CLARIFY_MARKER,
  containsSynthesizedHumanAct,
} from "@/lib/nora-cognitive-runtime";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

function lastUserContent(messages: ProviderChatMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.role === "user") return messages[i]!.content;
  }
  return "";
}

function demandeCourante(blob: string): string {
  const marker = "Demande courante (à évaluer):";
  const idx = blob.indexOf(marker);
  if (idx < 0) return blob;
  return blob.slice(idx + marker.length).trim();
}

function hasCanonicalContext(blob: string): boolean {
  return (
    blob.includes("Contexte conversationnel canonique") &&
    !blob.includes("Contexte conversationnel canonique: (vide")
  );
}

function structuredJson(payload: Record<string, unknown>): string {
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify(payload)}`;
}

function baseSignals(overrides?: Partial<Record<string, boolean>>) {
  return {
    structuralChange: false,
    securityImpact: false,
    architectureImpact: false,
    dataImpact: false,
    irreversible: false,
    lowRiskBounded: true,
    ...overrides,
  };
}

/**
 * Deterministic B1 provider — natural language + optional fixture markers.
 * Production advisory routing must NOT depend on magic markers (T15).
 */
class B1ConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;
  lastAnalysisBlob = "";
  lastRoundUser = "";
  failProviderCompletely = false;

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    return this.complete(input.messages);
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    if (this.failProviderCompletely) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }
    this.n += 1;
    const blob = lastUserContent(messages);
    this.lastAnalysisBlob = blob;
    const current = demandeCourante(blob);
    const usage = {
      inputTokens: 10 * this.n,
      outputTokens: 5 * this.n,
      totalTokens: 15 * this.n,
      model: "fake-test-model",
      providerResponseId: `b1-resp-${this.n}`,
    };

    if (current.includes("__B1_UNPARSEABLE__") || current.includes("__D1_UNPARSEABLE__")) {
      return { text: "[TEST/FAKE · NON LIVE] <<<not-a-json-intent>>>}", usage };
    }

    if (current.includes("__F2_AMBIGUOUS__") || current.includes("__B1_MATERIAL_AMBIGUOUS__")) {
      return {
        text: structuredJson({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: current.slice(0, 80),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        }),
        usage,
      };
    }

    // B1-CR-01 Case A — trusted execution_request, missing cycle → not formalization-ready.
    if (current.includes("__B1_EXEC_MISSING_CYCLE__")) {
      return {
        text: structuredJson({
          intentClass: "execution_request",
          candidateCycleTypeId: null,
          signals: baseSignals({
            structuralChange: true,
            architectureImpact: true,
            lowRiskBounded: false,
          }),
          cognitiveWorkload: null,
          objective: "Exécution externe demandée",
          scope: "Bornée — aucune exécution F2",
          rephrasedRequest: current.slice(0, 120),
          outOfScope: ["Exécution réelle"],
          risks: ["Exécution hors périmètre"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Proposition sans exécution",
          criticalJustification: "Demande d'exécution explicite",
          requestedOperation: "cursor create pr",
        }),
        usage,
      };
    }

    // B1-CR-01 Case B attempt — signals null. Parser fail-closed → not trusted
    // execution_request (see unit doc test). Fixture retained for product-path proof.
    if (current.includes("__B1_EXEC_MISSING_SIGNALS__")) {
      return {
        text: structuredJson({
          intentClass: "execution_request",
          candidateCycleTypeId: "cyc:delivery",
          signals: null,
          cognitiveWorkload: null,
          objective: "Exécution externe demandée",
          scope: "Bornée — aucune exécution F2",
          rephrasedRequest: current.slice(0, 120),
          outOfScope: ["Exécution réelle"],
          risks: ["Exécution hors périmètre"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Proposition sans exécution",
          criticalJustification: "Demande d'exécution explicite",
          requestedOperation: "cursor create pr",
        }),
        usage,
      };
    }

    if (current.includes("__F2_EXECUTION__") || /lance\s+cursor|implémente[- ]le|fais le changement/i.test(current)) {
      return {
        text: structuredJson({
          intentClass: "execution_request",
          candidateCycleTypeId: "cyc:delivery",
          signals: baseSignals({
            structuralChange: true,
            architectureImpact: true,
            lowRiskBounded: false,
          }),
          cognitiveWorkload: null,
          objective: "Exécution externe demandée",
          scope: "Bornée — aucune exécution F2",
          rephrasedRequest: current.slice(0, 120),
          outOfScope: ["Exécution réelle"],
          risks: ["Exécution hors périmètre"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Proposition sans exécution",
          criticalJustification: "Demande d'exécution explicite",
          requestedOperation: "cursor create pr",
        }),
        usage,
      };
    }

    if (current.includes("__F2_ACTIONABLE__") || current.includes("__F2_STRUCTURING__")) {
      const structuring = current.includes("__F2_STRUCTURING__");
      return {
        text: structuredJson({
          intentClass: "actionable",
          candidateCycleTypeId: structuring
            ? "cyc:functional-architecture"
            : "cyc:delivery",
          signals: baseSignals(
            structuring
              ? {
                  structuralChange: true,
                  architectureImpact: true,
                  lowRiskBounded: false,
                }
              : undefined,
          ),
          cognitiveWorkload: null,
          objective: structuring
            ? "Faire évoluer l'architecture"
            : "Préparer une proposition bornée",
          scope: "Sans exécution",
          rephrasedRequest: current.slice(0, 120),
          outOfScope: ["Cursor", "Git write"],
          risks: structuring ? ["impact architecture"] : [],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: structuring
            ? ["qualification", "proposition", "gate"]
            : ["qualification", "proposition"],
          expectedOutcome: "Proposition",
          criticalJustification: structuring ? "Changement structurant" : null,
          requestedOperation: structuring ? "architecture change" : null,
        }),
        usage,
      };
    }

    // Natural advisory / exploratory → informative (no magic marker required).
    if (
      /aide|aider|créer|outil|contrat|mvp|recommande|approche|application|suivre/i.test(
        current,
      ) ||
      hasCanonicalContext(blob)
    ) {
      return {
        text: structuredJson({
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: "Conseil produit / cadrage",
          scope: null,
          rephrasedRequest: current.slice(0, 160),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        }),
        usage,
      };
    }

    return {
      text: structuredJson({
        intentClass: "informative",
        candidateCycleTypeId: null,
        signals: null,
        cognitiveWorkload: null,
        objective: "Analyse",
        scope: null,
        rephrasedRequest: current.slice(0, 160),
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: null,
        criticalJustification: null,
        requestedOperation: null,
      }),
      usage,
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: unknown[];
  }): Promise<ProviderRoundResult> {
    void input.tools;
    const last = [...input.items]
      .reverse()
      .find((i) => i.type === "message" && i.role === "user");
    const content =
      last && last.type === "message" ? String(last.content) : "";
    this.lastRoundUser = content;

    let text: string;
    if (/__B1_MATERIAL_AMBIGUOUS__|clients eux[- ]mêmes|accès SaaS/i.test(content)) {
      text =
        "[TEST/FAKE · NON LIVE] Première approche interne possible. " +
        "Le point qui modifierait le plus cette approche : les clients B2B " +
        "accèdent-ils eux-mêmes à l'application, ou seulement les collaborateurs internes ?";
    } else if (/mvp/i.test(content)) {
      text =
        "[TEST/FAKE · NON LIVE] MVP proposé : registre contrats B2B, échéances, " +
        "rappel renouvellement, dépôt document. Hypothèse : usage interne MC Consulting IT.";
    } else if (/recommande|approche/i.test(content)) {
      text =
        "[TEST/FAKE · NON LIVE] Recommandation : commencer par un MVP interne de suivi " +
        "des échéances et documents. Ce n'est pas une HumanDecision.";
    } else if (/aider|créer|outil|contrat|application/i.test(content)) {
      text =
        "[TEST/FAKE · NON LIVE] Voici une première proposition de cadrage pour le suivi " +
        "de contrats B2B : objets Contrat/Client, rôles internes, MVP échéances+documents. " +
        "Je pars provisoirement sur l'hypothèse d'un outil interne à MC Consulting IT.";
    } else {
      text = `[TEST/FAKE · NON LIVE] Nora B1 advisory: ${content.slice(0, 180)}`;
    }

    return {
      kind: "message",
      text,
      usage: {
        inputTokens: 8,
        outputTokens: 12,
        totalTokens: 20,
        model: "fake-test-model",
        providerResponseId: `b1-round-${this.n + 1}`,
      },
    };
  }
}

async function readSessionPairs(
  projectId: string,
  sessionDbPath: string,
): Promise<{ users: number; assistants: number; texts: string[] }> {
  const session = openCanonicalConversationSession({
    projectId,
    sessionDbPath,
  });
  try {
    const items = await session.getItems();
    const pairs = countCanonicalUserAssistantPairs(items);
    const texts = items
      .map(extractCanonicalTextFromItem)
      .filter((t): t is NonNullable<typeof t> => t != null)
      .map((t) => t.content);
    return { ...pairs, texts };
  } finally {
    session.close();
  }
}

function sampleProject(): ProjectAssistantContextDto {
  return {
    projectId: "prj:test",
    name: "Suivi de contrat",
    shortReference: "SC",
    objective: "Suivre les contrats B2B",
    contextSummary: "MC Consulting IT",
    criticality: "STANDARD",
    constraints: [],
    lpsId: "lps:test",
    lpsVersion: 1,
    lpsCreatedAt: "2026-09-06T00:00:00.000Z",
    doctrineId: "doc:test",
    doctrineVersion: "1",
    doctrineStatus: "product-studio-native",
    doctrineDigest: "sha256:test",
    runtimeMode: "test",
    persistence: "sqlite",
    readiness: "ready",
  };
}

function analysisStub(
  partial: Partial<IntentAnalysisDto> & Pick<IntentAnalysisDto, "intentClass" | "parseOk">,
): IntentAnalysisDto {
  return {
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    ...partial,
    executionIntent: partial.executionIntent ?? null,
  };
}

describe("transitionReadiness gate (unit)", () => {
  it("rejects parse fail / informative / ambiguous / missing fields", () => {
    expect(
      isGovernedFormalizationReady({
        analysis: analysisStub({ intentClass: "ambiguous", parseOk: false }),
      }),
    ).toBe(false);
    expect(
      resolveTransitionReadiness({
        analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      }).reason,
    ).toBe("not_governed_intent");
    expect(
      resolveTransitionReadiness({
        analysis: analysisStub({
          intentClass: "actionable",
          parseOk: true,
          candidateCycleTypeId: null,
          signals: baseSignals(),
        }),
      }).reason,
    ).toBe("missing_cycle");
    expect(
      resolveTransitionReadiness({
        analysis: analysisStub({
          intentClass: "actionable",
          parseOk: true,
          candidateCycleTypeId: "cyc:delivery",
          signals: null,
        }),
      }).reason,
    ).toBe("missing_signals");
  });

  it("accepts actionable/execution_request with cycle+signals", () => {
    const ready = resolveTransitionReadiness({
      analysis: analysisStub({
        intentClass: "actionable",
        parseOk: true,
        candidateCycleTypeId: "cyc:delivery",
        signals: baseSignals(),
      }),
    });
    expect(ready.formalizationReady).toBe(true);
    expect(ready.reason).toBe("ready");
  });

  it("forceRepoInformative never authorizes formalization", () => {
    expect(
      isGovernedFormalizationReady({
        analysis: analysisStub({
          intentClass: "actionable",
          parseOk: true,
          candidateCycleTypeId: "cyc:delivery",
          signals: baseSignals(),
        }),
        forceRepoInformative: true,
      }),
    ).toBe(false);
  });
});

describe("CORR-PROOF-02 B1 advisory-default T1–T15", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";
  let provider: B1ConversationProvider;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-b1-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-06T12:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Suivi de contrat",
      objective: "Suivre les contrats clients B2B",
      context: "MC Consulting IT — contrats B2B",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "SC",
      idempotencyKey: `idem:b1-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("B1 setup failed");
    projectId = created.projectId;
    provider = new B1ConversationProvider();
    setConversationProviderForTests(provider);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  async function send(content: string) {
    return orchestrateAssistantSend({
      projectId,
      content,
      sessionDbPath,
      provider,
    });
  }

  it("T1 — PP-REAL-02 exact regression: F1 advisory, no MW5 CLARIFY-only", async () => {
    // Seed conversational context without requiring Magic wording.
    await send(
      "l'application doit permettre de suivre les contrats avec les clients B2B de l'entreprise MC Consulting IT",
    );
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    const r = await send("peux-tu m'aider à créer cette application ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(r.text.toLowerCase()).toMatch(/contrat|mvp|cadrage|hypothèse|proposition/);
    expect(r.mw5).toBeNull();
    expect(r.f2?.proposal ?? null).toBeNull();
    expect(r.f2?.qualification ?? null).toBeNull();

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);

    const session = await readSessionPairs(projectId, sessionDbPath);
    expect(session.users).toBe(session.assistants);
    expect(session.users).toBeGreaterThanOrEqual(2);
  });

  it("T2 — vague but intelligible idea → framing + assumptions", async () => {
    const r = await send("j'aimerais créer un outil pour suivre mes contrats");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(r.text.toLowerCase()).toMatch(/hypothèse|mvp|cadrage|contrat/);
    expect(r.f2?.qualification ?? null).toBeNull();
  });

  it("T3 — progressive context evolves without questionnaire", async () => {
    const turns = [
      "j'aimerais créer un outil pour suivre mes contrats",
      "surtout les clients B2B",
      "utilisateurs internes uniquement",
      "il faudra des rappels de renouvellement",
      "et un dépôt de documents",
    ];
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    for (const turn of turns) {
      const r = await send(turn);
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
      expect(r.text).not.toMatch(/Clarification structurante requise/i);
      expect(r.f2?.proposal ?? null).toBeNull();
    }

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);

    const session = await readSessionPairs(projectId, sessionDbPath);
    expect(session.users).toBe(5);
    expect(session.assistants).toBe(5);
  });

  it("T4 — material ambiguity → contextual F1 clarification possible", async () => {
    await send("outil de suivi contrats B2B interne");
    const r = await send(
      "choisis l'architecture auth — accès clients SaaS ou non __B1_MATERIAL_AMBIGUOUS__",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(r.text).toMatch(/\?/);
    expect(r.text.toLowerCase()).toMatch(/client|accès|interne/);
  });

  it("T5 — MVP request without forced cycle", async () => {
    await send("suivi contrats B2B MC Consulting IT");
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    const r = await send("tu ferais quoi comme MVP ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text.toLowerCase()).toMatch(/mvp/);
    expect(r.f2?.qualification ?? null).toBeNull();

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
  });

  it("T6 — recommendation allowed; no HD/GO/Confirmation", async () => {
    const r = await send("quelle approche tu me recommandes pour ce suivi de contrats ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text.toLowerCase()).toMatch(/recommand/);
    expect(containsSynthesizedHumanAct(r.text)).toBe(false);
    expect(r.text).not.toMatch(/\bGO\b.*Morris|HumanDecision\s*[:=]/i);
  });

  it("T7 — explicit HD boundary via existing recordF2Decision path only", async () => {
    const casual = await send("oui ça me va bien comme idée de produit");
    expect(casual.ok).toBe(true);
    if (!casual.ok) return;
    expect(casual.f2?.decision ?? null).toBeNull();
    expect(containsSynthesizedHumanAct(casual.text)).toBe(false);
    expect(casual.f2?.turnKind).toBe("f1_informative");

    const runtime = getRuntimeApplicationService();
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Proposition B1",
      objective: "Arch change",
      cycleTypeId: "cyc:functional-architecture",
      recommendedProfile: "Standard",
      rationale: "test",
      scope: "architecture",
      outOfScope: ["execution"],
      activatedBlocks: ["gate"],
      expectedOutcome: "decision",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      morrisGateRequired: true,
      nextPossibleStep: "Décision Morris",
      contextSnapshot: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    });

    const decided = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      canActAsMorris: true,
      claimedAuthorityLevel: "N3",
      currentContext: proposal.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
      forceM3Authority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.decision.executionPerformed).toBe(false);
  });

  it("T8 — execution request stays fail-closed (no external effect)", async () => {
    const r = await send("lance Cursor et crée une PR __F2_EXECUTION__");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.executionBlocked === true || /AUCUNE EXÉCUTION/i.test(r.text)).toBe(
      true,
    );
    expect(containsSynthesizedHumanAct(r.text)).toBe(false);
    expect(r.text).toMatch(/AUCUNE EXÉCUTION|exécution/i);
  });

  it("B1-CR-01 Case A — trusted execution_request + missing cycle → F1 + executionBlocked", async () => {
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;
    const preCycle = before.livingState.activeCycleInstanceId ?? null;

    expect(
      isGovernedFormalizationReady({
        analysis: analysisStub({
          intentClass: "execution_request",
          parseOk: true,
          candidateCycleTypeId: null,
          signals: baseSignals({
            structuralChange: true,
            architectureImpact: true,
            lowRiskBounded: false,
          }),
        }),
      }),
    ).toBe(false);

    const r = await send("lance Cursor __B1_EXEC_MISSING_CYCLE__");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.f2?.intentClass).toBe("execution_request");
    expect(r.f2?.executionBlocked).toBe(true);
    expect(r.f2?.qualification ?? null).toBeNull();
    expect(r.f2?.proposal ?? null).toBeNull();
    expect(r.f2?.decision ?? null).toBeNull();
    expect(r.mw5).toBeNull();
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(containsSynthesizedHumanAct(r.text)).toBe(false);

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
    expect(after.livingState.activeCycleInstanceId ?? null).toBe(preCycle);

    const session = await readSessionPairs(projectId, sessionDbPath);
    expect(session.users).toBe(1);
    expect(session.assistants).toBe(1);
  });

  it("B1-CR-01 Case B — missing signals cannot be trusted execution_request (parser fail-closed)", async () => {
    // Exact parser behavior: needsSignals && !signals → ambiguousFallback
    // (intentClass forced to ambiguous, parseOk=false). Do NOT weaken validation.
    const parsed = validateIntentAnalysisPayload({
      intentClass: "execution_request",
      candidateCycleTypeId: "cyc:delivery",
      signals: null,
      objective: "Exécution",
      scope: null,
      rephrasedRequest: null,
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      activatedBlocks: [],
      expectedOutcome: null,
      criticalJustification: null,
      requestedOperation: "cursor",
    });
    expect(parsed.parseOk).toBe(false);
    expect(parsed.intentClass).toBe("ambiguous");
    expect(
      isGovernedFormalizationReady({ analysis: parsed }),
    ).toBe(false);

    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    const r = await send("lance Cursor __B1_EXEC_MISSING_SIGNALS__");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    // Closest product path: safe F1, ZERO durable effect, no false certainty of
    // trusted execution_request → executionBlocked remains false.
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.f2?.intentClass).toBe("ambiguous");
    expect(r.f2?.executionBlocked).toBe(false);
    expect(r.f2?.qualification ?? null).toBeNull();
    expect(r.f2?.proposal ?? null).toBeNull();
    expect(r.f2?.decision ?? null).toBeNull();
    expect(r.mw5).toBeNull();

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
    expect(after.livingState.activeCycleInstanceId ?? null).toBeNull();
  });

  it("B1-CR-01 Case B closest trusted incomplete formalization — missing cycle only path", async () => {
    // Only trusted incomplete execution_request formalization under current parser:
    // parseOk + execution_request + signals present + candidateCycleTypeId null.
    // (signals=null cannot remain trusted — see Case B parser proof.)
    const r = await send(
      "implémente et lance l'agent __B1_EXEC_MISSING_CYCLE__",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.f2?.intentClass).toBe("execution_request");
    expect(r.f2?.executionBlocked).toBe(true);
    expect(r.f2?.proposal ?? null).toBeNull();
  });

  it("T9 — CKC enrichment on qualified cycle; no questionnaire UX", async () => {
    const r = await send("Prépare la prochaine étape __F2_ACTIONABLE__");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.qualification).toBeTruthy();
    // Product-native CKC may enrich; never expose intake questionnaire.
    expect(r.text).not.toMatch(/questionnaire|répondez aux 6 dimensions CKC/i);
    expect(r.f2?.qualification?.executionAuthority).toBe(false);
    expect(r.f2?.qualification?.isMorrisDecision).toBe(false);
  });

  it("T10 — one conversation / one response pair per turn", async () => {
    await send("cadrer un suivi de contrats B2B");
    await send("ajouter rappels renouvellement");
    await send("Prépare la prochaine étape __F2_ACTIONABLE__");

    const session = await readSessionPairs(projectId, sessionDbPath);
    expect(session.users).toBe(session.assistants);
    expect(session.users).toBe(3);
  });

  it("T11 — Memory B / restart continuity; Truth C revision semantics intact", async () => {
    await send("outil contrats B2B MC Consulting");
    const mid = await readSessionPairs(projectId, sessionDbPath);
    expect(mid.users).toBe(1);

    const resumed = await send("peux-tu m'aider à créer cette application ?");
    expect(resumed.ok).toBe(true);
    if (!resumed.ok) return;
    expect(provider.lastAnalysisBlob).toMatch(/Contexte conversationnel canonique/);
    expect(resumed.f2?.turnKind).toBe("f1_informative");

    const end = await readSessionPairs(projectId, sessionDbPath);
    expect(end.users).toBe(2);
    expect(end.assistants).toBe(2);
  });

  it("T12 — parse failure: ZERO durable effect + safe F1 when provider cognition available", async () => {
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;
    const preCycle = before.livingState.activeCycleInstanceId ?? null;

    const r = await send("suite de cadrage __B1_UNPARSEABLE__");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.f2?.proposal ?? null).toBeNull();
    expect(r.f2?.qualification ?? null).toBeNull();
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(r.text.length).toBeGreaterThan(10);

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
    expect(after.livingState.activeCycleInstanceId ?? null).toBe(preCycle);
  });

  it("T12b — provider technical unavailability does not fabricate advisory", async () => {
    provider.failProviderCompletely = true;
    const r = await send("bonjour");
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.status).toBe("provider_error");
  });

  it("T13 — anti-synthesis HD/GO/Confirmation", async () => {
    const a = await send("décider GO maintenant pour tout le projet");
    expect(a.ok).toBe(true);
    if (!a.ok) return;
    expect(containsSynthesizedHumanAct(a.text)).toBe(false);

    const b = await send("lance Cursor __F2_EXECUTION__");
    expect(b.ok).toBe(true);
    if (!b.ok) return;
    expect(containsSynthesizedHumanAct(b.text)).toBe(false);
  });

  it("T14 — ordinary advisory: no hidden Cycle/LPS/proposal mutation", async () => {
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    for (const turn of [
      "peux-tu m'aider à créer cette application ?",
      "j'aimerais créer un outil pour suivre mes contrats",
      "tu ferais quoi comme MVP ?",
    ]) {
      const r = await send(turn);
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.f2?.qualification ?? null).toBeNull();
      expect(r.f2?.proposal ?? null).toBeNull();
    }

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
    expect(after.livingState.activeCycleInstanceId ?? null).toBeNull();

    const session = await readSessionPairs(projectId, sessionDbPath);
    expect(session.users).toBe(3);
    expect(session.assistants).toBe(3);
  });

  it("T15 — no production magic marker dependency for advisory routing", async () => {
    const r = await send("peux-tu m'aider à créer cette application ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(r.text).not.toMatch(/__F2_|__MW5_|__B1_|__TEST__/);
  });

  it("advisory prompt contract is positive", () => {
    const prompt = buildProjectSystemPrompt(sampleProject());
    expect(prompt).toMatch(/CONTRAT ADVISORY/i);
    expect(prompt).toMatch(/hypothèse/i);
    expect(prompt).toMatch(/MVP/i);
    expect(prompt).toMatch(/HumanDecision/i);
    expect(prompt).toMatch(/LECTURE SEULE|aucune autorité/i);
  });

  it("malformed formalization fields never parse as ready", () => {
    const bad = validateIntentAnalysisPayload({
      intentClass: "actionable",
      candidateCycleTypeId: "cyc:delivery",
      signals: null,
    });
    expect(bad.parseOk).toBe(false);
    expect(
      isGovernedFormalizationReady({ analysis: bad }),
    ).toBe(false);
  });
});
