/** @vitest-environment node */
/**
 * P6 Architecture Recovery — Option B oracles (deterministic).
 * AtelierNova-like: Cycle Lifecycle must not be diverted to Generic PREPARE.
 * D-ER-17: true execution missions without cycle remain admissible.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  discriminateConversationWorkflow,
  hasCycleLifecycleLanguage,
} from "@/features/project-assistant/f2/conversationWorkflowDiscrimination";
import { shouldExcludeGenericPrepareProjectContext } from "@/features/project-assistant/f2/cycleLifecycleConversationCoordinator";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";

const MARKER_NATURAL_DOC = "__DER16_NATURAL_DOC__";
const MARKER_CYCLE_START = "__ARCH_CYCLE_START__";
const MARKER_MIXED = "__ARCH_MIXED__";

const SIGNALS_OK = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

function baseAnalysisJson(over: Record<string, unknown>): Record<string, unknown> {
  return {
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:framing",
    signals: SIGNALS_OK,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    continuationKind: null,
    artifactMaterializationOperation: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    activatedBlocks: ["qualification"],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
    pilotDecisionCandidate: null,
    ...over,
  };
}

function intercept(messages: ProviderChatMessage[]): string | null {
  const isF2 = messages.some(
    (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
  );
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const full = lastUser?.content ?? "";
  const cur = full.split("Demande courante (à évaluer):").pop() ?? full;
  let payload: Record<string, unknown> | null = null;
  // Natural-doc uses the same F2-banner gate as der16 E10.
  if (isF2 && cur.includes(MARKER_NATURAL_DOC)) {
    payload = baseAnalysisJson({
      candidateCycleTypeId: null,
      objective: "Écrire une spécification Markdown dans le dépôt du projet",
      scope: "projects/demo/docs",
      rephrasedRequest:
        "Rédiger un document Markdown de spécification dans le dépôt du projet",
      expectedOutcome: "Spécification consultable dans le dépôt du projet",
    });
  } else if (cur.includes(MARKER_CYCLE_START)) {
    payload = baseAnalysisJson({
      signals: { ...SIGNALS_OK, structuralChange: true, architectureImpact: true, lowRiskBounded: false },
      objective: "Démarrer le cycle Cadrage",
      rephrasedRequest: "Démarrer effectivement le cycle Cadrage",
      expectedOutcome: "Cycle Cadrage actif",
      scope: "qualification bornée",
    });
  } else if (cur.includes(MARKER_MIXED)) {
    payload = baseAnalysisJson({
      signals: { ...SIGNALS_OK, architectureImpact: true, lowRiskBounded: false },
      objective: "Préparer un cycle Cadrage et un contrat d'exécution Cursor",
      rephrasedRequest:
        "Propose un cycle Cadrage et prépare le contrat d'exécution",
      expectedOutcome: "Cycle puis contrat",
    });
  }
  if (!payload) return null;
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify(payload)}`;
}

class ArchProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private readonly inner = new FakeConversationProvider();

  private result(text: string): ProviderCompletionResult {
    return {
      text,
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "fake-arch",
      },
    };
  }

  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    const hit = intercept(messages);
    if (hit) return this.result(hit);
    return this.inner.complete(messages);
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    const hit = intercept(input.messages);
    if (hit) return this.result(hit);
    return this.inner.completeStructured(input);
  }

  async completeRound(
    ...args: Parameters<FakeConversationProvider["completeRound"]>
  ): ReturnType<FakeConversationProvider["completeRound"]> {
    return this.inner.completeRound(...args);
  }
}

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

describe("P6 arch recovery — Cycle Lifecycle vs Generic PREPARE", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorris: string | undefined;
  let previousPilot: string | undefined;
  let previousDetPin: string | undefined;
  let sessionDbPath: string;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    setConversationProviderForTests(new ArchProvider());
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    sessionDbPath = tempProductDbPath("p6-arch-session.sqlite");
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-arch-product.sqlite"),
      idPrefix: "arch",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
  });

  async function seedProject(suffix: string): Promise<string> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `Arch ${suffix}`,
      objective: "Architecture recovery oracles",
      context: "det arch",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `AR${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:arch-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    // Parity with der16 E10 seed — trajectory present, no active cycle.
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    return projectId;
  }

  describe("discrimination unit", () => {
    it("classifies AtelierNova-like START as cycle preempting project-context PREPARE", () => {
      const text =
        "Je valide ta recommandation et je souhaite maintenant démarrer effectivement notre premier cycle de travail. Je propose un cycle Cadrage. Si le cycle Cadrage est adapté, démarre-le dans Studio.";
      expect(hasCycleLifecycleLanguage(text)).toBe(true);
      const analysis = validateIntentAnalysisPayload(
        baseAnalysisJson({
          signals: {
            ...SIGNALS_OK,
            structuralChange: true,
            architectureImpact: true,
            lowRiskBounded: false,
          },
          objective: "Mission Cursor après cadrage",
          rephrasedRequest: "Mission technique Cursor",
        }),
      );
      const d = discriminateConversationWorkflow({
        userContent: text,
        analysis,
        cycleLabel: "Cadrage",
      });
      expect(d.kind === "cycle_lifecycle" || d.kind === "ambiguous_mixed").toBe(
        true,
      );
      expect(shouldExcludeGenericPrepareProjectContext(d)).toBe(true);
    });

    it("does not preempt natural documentary execution without cycle language", () => {
      const text = `Produis-moi une spécification Markdown. ${MARKER_NATURAL_DOC}`;
      const analysis = validateIntentAnalysisPayload(
        baseAnalysisJson({
          candidateCycleTypeId: null,
          objective: "Produire une spécification Markdown",
          rephrasedRequest: text,
          expectedOutcome: "Fichier Markdown",
        }),
      );
      const d = discriminateConversationWorkflow({
        userContent: text,
        analysis,
      });
      expect(d.kind).toBe("execution_mission");
      expect(d.preemptsGenericPrepareProjectContext).toBe(false);
    });
  });

  it("ORACLE 02/AtelierNova-like — START request must not emit Generic PREPARE structural narrative", async () => {
    const projectId = await seedProject("atelier");
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Je souhaite démarrer effectivement notre premier cycle de travail. Je propose un cycle Cadrage. Si adapté, démarre-le dans Studio. Pas d'autorisation Cursor. ${MARKER_CYCLE_START}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);

    expect(turn.text).not.toMatch(
      /Contexte projet conservé — aucun cycle artificiel créé/,
    );
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(turn.text).toMatch(/cycle|trajectoire|démarr/i);

    const oa = runtime.oa!;
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("ORACLE 10 — ok go after cycle START wording does not invent EC", async () => {
    const projectId = await seedProject("okgo");
    await orchestrateAssistantSend({
      projectId,
      content: `Je souhaite démarrer effectivement le cycle Cadrage. Démarre-le dans Studio. ${MARKER_CYCLE_START}`,
      sessionDbPath,
    });
    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "ok go",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    expect(turn2.text).not.toMatch(/xct:gen-prep:/);
    expect(turn2.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
  });

  it("ORACLE 05 — non-cycle documentary language does not preempt D-ER-17 project-context admission", () => {
    // End-to-end project-context PREPARE remains proven by
    // p6.der16.genericNoraToolInvocation E10 (same Product entry).
    // This guard locks the Option B discrimination contract.
    const text = `Produis-moi une spécification Markdown pour le projet. ${MARKER_NATURAL_DOC}`;
    const analysis = validateIntentAnalysisPayload(
      baseAnalysisJson({
        candidateCycleTypeId: null,
        objective: "Écrire une spécification Markdown dans le dépôt du projet",
        rephrasedRequest: text,
        expectedOutcome: "Spécification consultable",
      }),
    );
    const d = discriminateConversationWorkflow({ userContent: text, analysis });
    expect(d.kind).toBe("execution_mission");
    expect(d.preemptsGenericPrepareProjectContext).toBe(false);
    expect(shouldExcludeGenericPrepareProjectContext(d)).toBe(false);
  });

  it("ORACLE 15 — mixed cycle + execution without silent PREPARE fusion", async () => {
    const projectId = await seedProject("mixed");
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Propose un cycle Cadrage et prépare en même temps le contrat d'exécution Cursor pour l'outil d'inscriptions. ${MARKER_MIXED}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(turn.text).toMatch(/distinct|cycle|trajectoire|contrat|démarr/i);
  });
});
