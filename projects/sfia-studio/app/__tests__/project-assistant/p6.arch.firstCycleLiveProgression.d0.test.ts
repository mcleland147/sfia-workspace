/** @vitest-environment node */
/**
 * P6 Option B — FIRST-CYCLE LIVE PROGRESSION
 *
 * Exit proof: Pilot utterance on virgin Project (0 CURRENT Rec) reaches Nora
 * Product turn and materializes Lifecycle Recommendation via Product path —
 * WITHOUT seeding Rec / traj / HD / cycle, and WITHOUT calling
 * materializeLifecycleRecommendationFromStructuredOutput in the test.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  projectAssistantAdvanceFramingContinuityAction,
  projectAssistantReadFramingContinuityAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import { classifyTrajectoryBinding } from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";

const ATELIER_NOVA_FIRST_CYCLE = `Nora, maintenant qu'AtelierNova est créé, je souhaite démarrer notre premier cycle de travail.

Je propose un cycle Cadrage, avec un objectif simple : qualifier le périmètre fonctionnel de notre première version, puis préparer une première mission Cursor pour construire l'application.

Je veux privilégier rapidement un résultat fonctionnel, sans documentation excessive.

Si le cycle Cadrage est adapté, accompagne-moi dans sa préparation et son démarrage effectif dans Studio, en me présentant les décisions que je dois prendre.

Pour le moment, ne lance aucune exécution Cursor.`;

const tempDirs: string[] = [];
let previousPilot: string | undefined;
let previousMorris: string | undefined;
let previousCursorReal: string | undefined;
let previousAllowReset: string | undefined;
let previousProvider: string | undefined;

function restoreEnv(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

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

const SIGNALS_OK = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

/**
 * Fake Nora — substitutes OpenAI only.
 * - F2 intent analysis → actionable Cadrage
 * - nora_product_turn_with_optional_lr → NEXT_CYCLE Recommendation (structured)
 * Never writes OA; never calls materialize* directly.
 */
class FirstCycleProgressionFakeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;
  productTurnCalls = 0;
  intentAnalysisCalls = 0;
  seenSchemas: string[] = [];

  private productTurnPayload(): string {
    return JSON.stringify({
      narrative:
        "Je recommande un cycle Cadrage pour qualifier le périmètre d'AtelierNova avant toute mission Cursor.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE",
        statement:
          "Envisager un Cadrage pour qualifier le périmètre fonctionnel de la première version.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:framing",
        rationale:
          "Project vierge — premier travail gouverné supportable avant exécution.",
        authority: "none",
        isHumanDecision: false,
        qualificationSignals: { ...SIGNALS_OK },
      },
      activeCycleWork: null,
      conversationGuidance: {
        kind: "RECOMMEND_NEXT_STEP",
        scope: "LIFECYCLE_TRANSITION",
        statement:
          "Validez la direction proposée pour préparer la trajectoire du Cadrage.",
        rationale: "first-cycle-progression-fake",
      },
      journalDelta: null,
      reservationDelta: null,
    });
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.jsonSchema;
    this.seenSchemas.push(input.schemaName);
    if (input.schemaName === "nora_product_turn_with_optional_lr") {
      this.productTurnCalls += 1;
      this.n += 1;
      return {
        text: this.productTurnPayload(),
        usage: {
          inputTokens: 20,
          outputTokens: 40,
          totalTokens: 60,
          model: "fake-test-model",
          providerResponseId: `fc-prod-${this.n}`,
        },
      };
    }
    return this.complete(input.messages);
  }

  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    this.n += 1;
    const isF2 = messages.some(
      (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
    );
    if (isF2) this.intentAnalysisCalls += 1;
    const current = demandeCourante(lastUserContent(messages));
    const usage = {
      inputTokens: 10,
      outputTokens: 5,
      totalTokens: 15,
      model: "fake-test-model",
      providerResponseId: `fc-intent-${this.n}`,
    };
    const isStart =
      /\b(je\s+(veux|souhaite)\s+(d[eé]marrer|lancer)|d[eé]marrage\s+effectif|d[eé]marre[- ]?le|démarrer\s+notre\s+premier)\b/i.test(
        current,
      );
    if (isStart && !/poursuivons la recommandation/i.test(current)) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:framing",
          signals: SIGNALS_OK,
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          objective: "Qualifier le premier cycle Cadrage",
          scope: "Sans exécution Cursor",
          rephrasedRequest: current.slice(0, 200),
          outOfScope: ["Cursor execute"],
          risks: [],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification"],
          expectedOutcome: "Cycle Cadrage actif",
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
          continuationKind: null,
          artifactMaterializationOperation: null,
          pilotDecisionCandidate: null,
        })}`,
        usage,
      };
    }
    return {
      text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:framing",
        signals: SIGNALS_OK,
        cognitiveWorkload: null,
        contradictionCandidate: null,
        challengeResponseAssessment: null,
        objective: "Qualifier le premier cycle Cadrage",
        scope: "Sans exécution Cursor",
        rephrasedRequest: current.slice(0, 200),
        outOfScope: ["Cursor execute"],
        risks: [],
        reservations: [],
        stopConditions: ["AUCUNE EXÉCUTION"],
        activatedBlocks: ["qualification"],
        expectedOutcome: "Cycle Cadrage actif",
        criticalJustification: null,
        requestedOperation: null,
        executionIntent: null,
        continuationKind: null,
        artifactMaterializationOperation: null,
        pilotDecisionCandidate: {
          disposition: "accept",
          targetKind: "current_recommendation",
          rationale: "ok",
        },
      })}`,
      usage,
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: unknown[];
  }): Promise<ProviderRoundResult> {
    void input.tools;
    void input.items;
    // Fake F1 Agents path uses completeRound + product-turn outputType coercion.
    this.productTurnCalls += 1;
    this.n += 1;
    return {
      kind: "message",
      text: this.productTurnPayload(),
      usage: {
        inputTokens: 20,
        outputTokens: 40,
        totalTokens: 60,
        model: "fake-test-model",
        providerResponseId: `fc-round-${this.n}`,
      },
    };
  }
}

async function bootVirginNoRec(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  resetF2ProposalStoreForTests();
  resetMw5ChallengeStoreForTests();
  resetPendingGenericPrepareOfferStoreForTests();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "fc-prog-"));
  tempDirs.push(dir);
  const productDbPath = path.join(dir, `${suffix}.sqlite`);
  const runtime = getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`fcp-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `AtelierNova FC ${suffix}`,
    objective: "Ateliers et inscriptions — premier cycle",
    context: "associations",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `FC${suffix}`,
    idempotencyKey: `idem:fcp-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const oa = runtime.oa;
  expect(await oa.cycleServices.cycles.listByProject(projectId)).toHaveLength(0);
  expect(
    await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
  ).toBe(false);
  expect(
    (await oa.decisionServices.decisions.listByProject(projectId)).length,
  ).toBe(0);
  expect(
    (await oa.executionContractServices.contracts.listByProject(projectId))
      .length,
  ).toBe(0);
  const before = await projectAssistantReadFramingContinuityAction({
    projectId,
  });
  expect(before.continuity?.phase).toBe("blocked_no_recommendation");
  expect(before.continuity?.hasCurrentNextCycleRecommendation).toBe(false);
  return {
    runtime,
    projectId,
    sessionDbPath: path.join(dir, `${suffix}-session.sqlite`),
  };
}

describe("P6 arch — first-cycle live progression (utterance → Nora → Rec)", () => {
  const provider = new FirstCycleProgressionFakeProvider();

  beforeEach(() => {
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousCursorReal = process.env.SFIA_STUDIO_CURSOR_REAL;
    previousAllowReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    provider.productTurnCalls = 0;
    provider.intentAnalysisCalls = 0;
    setConversationProviderForTests(provider);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    vi.restoreAllMocks();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    restoreEnv("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
    restoreEnv("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnv("SFIA_STUDIO_CURSOR_REAL", previousCursorReal);
    restoreEnv("SFIA_V2_RUNTIME_ALLOW_RESET", previousAllowReset);
    restoreEnv("OPS1_CONVERSATION_PROVIDER", previousProvider);
  });

  it("AtelierNova utterance — Nora Product turn materializes CURRENT Rec; full journey to ACTIVE sans EC", async () => {
    const { runtime, projectId, sessionDbPath } = await bootVirginNoRec("live");
    const oa = runtime.oa!;

    const turn = await projectAssistantSendAction({
      projectId,
      content: ATELIER_NOVA_FIRST_CYCLE,
      sessionDbPath,
      provider,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message ?? "turn");

    // Must not strand on preconditions-only Option B copy
    expect(turn.text).not.toMatch(
      /Studio a besoin d'une recommandation de cycle puis d'une trajectoire/i,
    );
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(turn.text).not.toMatch(
      /Contexte projet conservé — aucun cycle artificiel créé/,
    );

    // Nora Product turn actually ran (Fake schema path)
    expect(provider.productTurnCalls).toBeGreaterThanOrEqual(1);

    const afterRec = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterRec.continuity?.hasCurrentNextCycleRecommendation).toBe(true);
    expect(afterRec.continuity?.phase).toBe("recommendation_ready");

    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(0);

    // Progress via Product conversation → candidate traj
    const progress = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation de Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(progress.ok).toBe(true);
    const afterPrep = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterPrep.continuity?.phase).toBe("awaiting_trajectory_decision");
    expect(afterPrep.continuity?.presentationDigest).toBeTruthy();

    const approved = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: afterPrep.continuity!.presentationDigest!,
    });
    expect(approved.ok).toBe(true);
    if (approved.continuity?.phase === "trajectory_decided_prepare_cycle") {
      const prep = await projectAssistantAdvanceFramingContinuityAction({
        projectId,
        step: "prepare_cycle",
      });
      expect(prep.ok).toBe(true);
    }

    const ready = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(ready.continuity?.phase).toBe("ready_to_start");
    const prepared = await oa.cycleServices.cycles.listByProject(projectId);
    expect(prepared).toHaveLength(1);
    expect(classifyTrajectoryBinding(prepared[0]!)).toBe(
      "COMPLETE_TRAJECTORY_BOUND",
    );

    const start = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (!start.ok) throw new Error(start.message ?? "start");
    expect(start.text).toMatch(/est maintenant actif/i);
    expect(start.project.activeCycleInstanceId).toBeTruthy();

    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.activeCycleInstanceId).toBe(
      start.project.activeCycleInstanceId,
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("invalid Nora Product turn — no artificial Recommendation / cycle / EC", async () => {
    const { projectId, sessionDbPath } = await bootVirginNoRec("neg");
    const nullLrPayload = JSON.stringify({
      narrative: "Pas de recommandation claire.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
        candidateCycleSupportable: false,
      },
      lifecycleRecommendation: null,
      activeCycleWork: null,
      conversationGuidance: null,
    });
    const bad = new (class implements ConversationProvider {
      readonly providerId = "fake-test";
      async completeStructured(input: {
        messages: ProviderChatMessage[];
        schemaName: string;
        jsonSchema: Record<string, unknown>;
      }): Promise<ProviderCompletionResult> {
        void input.jsonSchema;
        if (input.schemaName === "nora_product_turn_with_optional_lr") {
          return {
            text: nullLrPayload,
            usage: {
              inputTokens: 1,
              outputTokens: 1,
              totalTokens: 2,
              model: "fake-test-model",
              providerResponseId: "neg-prod",
            },
          };
        }
        return provider.complete(input.messages);
      }
      complete = provider.complete.bind(provider);
      async completeRound(): Promise<ProviderRoundResult> {
        return {
          kind: "message",
          text: nullLrPayload,
          usage: {
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
            model: "fake-test-model",
            providerResponseId: "neg-round",
          },
        };
      }
    })();
    setConversationProviderForTests(bad);

    const turn = await projectAssistantSendAction({
      projectId,
      content: ATELIER_NOVA_FIRST_CYCLE,
      sessionDbPath,
      provider: bad,
    });
    expect(turn.ok).toBe(true);
    const snap = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(snap.continuity?.hasCurrentNextCycleRecommendation).toBe(false);
    expect(snap.continuity?.phase).toBe("blocked_no_recommendation");
    const oa = getRuntimeApplicationService().oa!;
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("inventory unavailable still fail-closed (no false empty → Nora)", async () => {
    const { projectId, sessionDbPath } = await bootVirginNoRec("inv");
    const oa = getRuntimeApplicationService().oa!;
    const spy = vi
      .spyOn(oa.cycleServices.cycles, "listByProject")
      .mockRejectedValue(new Error("simulated_inventory_unavailable"));

    const turn = await orchestrateAssistantSend({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message ?? "turn");
    expect(turn.text).toMatch(/inventaire des cycles.*indisponible/i);
    expect(turn.f2?.turnKind).toBe("f2_blocked");
    spy.mockRestore();
  });
});
