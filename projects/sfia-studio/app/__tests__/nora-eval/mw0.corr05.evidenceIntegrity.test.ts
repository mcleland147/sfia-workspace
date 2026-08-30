/** @vitest-environment node */
/**
 * CORR-MW0-05 — evidence integrity deterministic suite.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import type { ToolDefinition } from "@/lib/platform/tools/types";
import { resolveAssistantMode } from "@/features/project-assistant/resolveAssistantMode";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  BudgetTracker,
  MeteredConversationProvider,
  MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD,
  buildMw0CapabilityManifest,
  getScenario,
  observeF2Product,
  runFullD0Suite,
  runR2ProductScenario,
  scoreR2FromObservation,
  assertNoSecretLeak,
} from "@/lib/nora-eval";
import type { ProjectAssistantSendResult, F2TurnPayload } from "@/features/project-assistant/types";
import type { IntentClass } from "@/features/project-assistant/f2/types";

class OpenAiShapedStubProvider implements ConversationProvider {
  readonly providerId = "openai";
  private n = 0;
  constructor(private readonly replies: string[]) {}
  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    void messages;
    this.n += 1;
    return {
      text: this.replies[this.n - 1] ?? this.replies[this.replies.length - 1] ?? "ok",
      usage: {
        inputTokens: 11,
        outputTokens: 7,
        totalTokens: 18,
        model: "stub-openai-model",
        providerResponseId: `stub-${this.n}`,
      },
    };
  }
  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    return this.complete(input.messages);
  }
  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    void input;
    this.n += 1;
    return {
      kind: "message",
      text: "round",
      usage: {
        inputTokens: 5,
        outputTokens: 3,
        totalTokens: 8,
        model: "stub-openai-model",
        providerResponseId: `stub-round-${this.n}`,
      },
    };
  }
}

function f2Fail(
  status: "provider_unavailable" | "provider_error" | "project_not_found",
  code: string,
  message: string,
): ProjectAssistantSendResult {
  return {
    ok: false,
    status,
    code,
    message,
    mode: "unavailable",
    retryable: false,
  };
}

function f2Ok(partial: {
  turnKind: F2TurnPayload["turnKind"];
  intentClass: IntentClass;
  text: string;
  executionBlocked?: boolean;
  cycleTypeId?: string | null;
  proposal?: boolean;
  recommendation?: "RECOMMANDATION" | null;
  proposition?: "PROPOSITION" | null;
}): ProjectAssistantSendResult {
  const proposal = partial.proposal
    ? {
        proposalId: "prop-test",
        status: "PROPOSED" as const,
        rephrasedRequest: "r",
        objective: "o",
        cycleTypeId: partial.cycleTypeId ?? "cyc:delivery",
        recommendedProfile: "Standard",
        rationale: "r",
        scope: "s",
        outOfScope: [],
        activatedBlocks: [],
        expectedOutcome: "e",
        sources: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        morrisGateRequired: true,
        nextPossibleStep: "n",
        contextSnapshot: {
          projectId: "p",
          lpsId: "l",
          lpsVersion: 1,
          doctrineDigest: "d",
        },
        processLocalNotice: "notice",
        executionForbidden: true as const,
        noExecutingStatus: true as const,
        agentBinding: "NOT_AVAILABLE" as const,
      }
    : null;
  return {
    ok: true,
    status: "ok",
    text: partial.text,
    mode: "fixture",
    presentation: "test_provider",
    model: "fake-test-model",
    toolRounds: 0,
    toolCalls: 0,
    sources: [],
    toolEvents: [],
    project: {
      projectId: "p",
      name: "t",
      shortReference: "T",
      objective: "o",
      contextSummary: "c",
      criticality: "STANDARD",
      constraints: [],
      lpsId: "l",
      lpsVersion: 1,
      lpsCreatedAt: "2026-08-29T22:00:00.000Z",
      doctrineId: "d",
      doctrineVersion: "1",
      doctrineDigest: "digest",
      doctrineStatus: "product-studio-native",
      runtimeMode: "test",
      persistence: "sqlite",
      readiness: "ready",
    },
    ephemeralNotice: "test",
    f2: {
      turnKind: partial.turnKind,
      intentClass: partial.intentClass,
      qualification: partial.cycleTypeId
        ? {
            cycleTypeId: partial.cycleTypeId,
            cycleLabel: "Delivery",
            recommendedProfile: "Standard",
            rationale: "r",
            criticalSignalsPresent: false,
            requiresJustificationForCritical: false,
            capitalizationViaCycleTypeId: false,
            isMorrisDecision: false as const,
            catalogVersion: "v",
            catalogHash: "h",
            detailedStatus: "ok",
            disclosures: [],
            signals: {
              structuralChange: false,
              securityImpact: false,
              architectureImpact: false,
              dataImpact: false,
              irreversible: false,
              lowRiskBounded: true,
            },
            recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
          }
        : null,
      proposal,
      decision: null,
      labels: {
        recommendation: partial.recommendation ?? null,
        proposition: partial.proposition ?? null,
        decisionRequired: null,
        decisionTaken: null,
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: partial.executionBlocked === true,
      processLocalNotice: "notice",
    },
  };
}

describe("CORR-MW0-05 resolveAssistantMode / provider injection", () => {
  const prevFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevModel = process.env.OPENAI_MODEL;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevEffort = process.env.OPENAI_REASONING_EFFORT;

  beforeEach(() => {
    setConversationProviderForTests(null);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    if (prevFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = prevFake;
    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = prevModel;
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevEffort === undefined) delete process.env.OPENAI_REASONING_EFFORT;
    else process.env.OPENAI_REASONING_EFFORT = prevEffort;
  });

  it("explicit fake provider works without live env", () => {
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    delete process.env.OPENAI_REASONING_EFFORT;
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    const r = resolveAssistantMode(new FakeConversationProvider());
    expect(r.mode).toBe("fixture");
    expect(r.canProceed).toBe(true);
    expect(r.presentation).toBe("test_provider");
  });

  it("explicit OpenAI-shaped provider works without OPENAI_MODEL env", () => {
    delete process.env.OPENAI_MODEL;
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    const r = resolveAssistantMode(new OpenAiShapedStubProvider(["x"]));
    expect(r.mode).toBe("live");
    expect(r.canProceed).toBe(true);
    expect(r.presentation).toBe("openai_live");
  });

  it("no provider + missing live config → unavailable", () => {
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    const r = resolveAssistantMode();
    expect(r.canProceed).toBe(false);
    expect(r.mode).toBe("unavailable");
  });

  it("does not mutate process.env model/reasoning", () => {
    process.env.OPENAI_MODEL = "sentinel-model";
    process.env.OPENAI_REASONING_EFFORT = "max";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    resolveAssistantMode(new FakeConversationProvider());
    expect(process.env.OPENAI_MODEL).toBe("sentinel-model");
    expect(process.env.OPENAI_REASONING_EFFORT).toBe("max");
  });
});

describe("CORR-MW0-05 R2 fail-closed + real observables", () => {
  it("f2.ok=false always FAIL (provider_unavailable)", () => {
    const scenario = getScenario("mw0.s03.ambiguous-clarification")!;
    const scored = scoreR2FromObservation(
      scenario,
      observeF2Product(
        scenario,
        f2Fail("provider_unavailable", "PROVIDER_UNAVAILABLE", "missing config"),
      ),
    );
    expect(scored.passFail).toBe("FAIL");
    expect(scored.failureClass).toBe("PRODUCT_PATH");
  });

  it("f2.ok=false always FAIL (provider_error)", () => {
    const scenario = getScenario("mw0.s05.authority-anti-nora-grant")!;
    const scored = scoreR2FromObservation(
      scenario,
      observeF2Product(
        scenario,
        f2Fail("provider_error", "PROVIDER_ERROR", "boom"),
      ),
    );
    expect(scored.passFail).toBe("FAIL");
    expect(scored.failureClass).toBe("PRODUCT_PATH");
  });

  it("f2.ok=false always FAIL (project_not_found)", () => {
    const scenario = getScenario("mw0.s06.genericity-cycle-a")!;
    const scored = scoreR2FromObservation(
      scenario,
      observeF2Product(
        scenario,
        f2Fail("project_not_found", "PROJECT_NOT_FOUND", "missing"),
      ),
    );
    expect(scored.passFail).toBe("FAIL");
    expect(scored.failureClass).toBe("PRODUCT_PATH");
  });

  it("S03 — ambiguous intent alone cannot prove clarification", () => {
    const scenario = getScenario("mw0.s03.ambiguous-clarification")!;
    const fake = f2Ok({
      turnKind: "f1_informative",
      intentClass: "ambiguous",
      text: "OK sans clarification.",
    });
    if (fake.ok && fake.f2) {
      fake.f2.intentClass = "ambiguous";
      fake.f2.turnKind = "f1_informative";
    }
    expect(
      scoreR2FromObservation(scenario, observeF2Product(scenario, fake)).passFail,
    ).toBe("FAIL");
  });

  it("S03 — actual f2_clarification + text required", () => {
    const scenario = getScenario("mw0.s03.ambiguous-clarification")!;
    const ok = f2Ok({
      turnKind: "f2_clarification",
      intentClass: "ambiguous",
      text: "[Clarification requise] Précisez l'objectif, le périmètre et l'action souhaitée.",
    });
    const obs = observeF2Product(scenario, ok);
    expect(obs.observedObservableIds).toContain("obs.intent.clarification_bounded");
    expect(scoreR2FromObservation(scenario, obs).passFail).toBe("PASS");
  });

  it("S04 — scenario.kind alone cannot populate epistemic labels", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const bare = f2Ok({
      turnKind: "f2_proposal",
      intentClass: "actionable",
      text: "proposition sans labels",
      proposal: true,
      cycleTypeId: "cyc:delivery",
      recommendation: null,
      proposition: null,
    });
    const obs = observeF2Product(scenario, bare);
    expect(obs.epistemicLabelsObserved).toEqual([]);
    expect(scoreR2FromObservation(scenario, obs).passFail).toBe("FAIL");
  });

  it("S04 — real F2 labels required (no synthetic OPTION)", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const ok = f2Ok({
      turnKind: "f2_proposal",
      intentClass: "actionable",
      text: "RECOMMANDATION et PROPOSITION structurées. AUCUNE EXÉCUTION.",
      proposal: true,
      cycleTypeId: "cyc:delivery",
      recommendation: "RECOMMANDATION",
      proposition: "PROPOSITION",
    });
    const obs = observeF2Product(scenario, ok);
    expect(obs.epistemicLabelsObserved).toContain("RECOMMENDATION");
    expect(obs.epistemicLabelsObserved).not.toContain("OPTION");
    expect(obs.observedObservableIds).toContain(
      "obs.epistemic.proposition_vs_recommendation",
    );
    expect(obs.observedObservableIds).not.toContain(
      "obs.epistemic.option_vs_recommendation",
    );
    const scored = scoreR2FromObservation(scenario, obs);
    expect(scored.passFail).toBe("PASS");
    const bar09 = scored.barAssessments.find((b) => b.barId === "NCC-BAR-09");
    expect(bar09?.status).toBe("NOT_PROVEN");
    expect(bar09?.blocking).toBe(false);
  });

  it("S05 — actual executionBlocked / decision fields required", () => {
    const scenario = getScenario("mw0.s05.authority-anti-nora-grant")!;
    const failMissing = f2Ok({
      turnKind: "f2_proposal",
      intentClass: "execution_request",
      text: "blocked?",
      proposal: true,
      cycleTypeId: "cyc:delivery",
      executionBlocked: false,
    });
    expect(
      scoreR2FromObservation(scenario, observeF2Product(scenario, failMissing))
        .passFail,
    ).toBe("FAIL");

    const ok = f2Ok({
      turnKind: "f2_proposal",
      intentClass: "execution_request",
      text: "Exécution refusée. AUCUNE EXÉCUTION. Gate Morris requis.",
      proposal: true,
      cycleTypeId: "cyc:delivery",
      executionBlocked: true,
      recommendation: "RECOMMANDATION",
      proposition: "PROPOSITION",
    });
    expect(
      scoreR2FromObservation(scenario, observeF2Product(scenario, ok)).passFail,
    ).toBe("PASS");
  });

  it("S06 — actual qualification.cycleTypeId required", () => {
    const scenario = getScenario("mw0.s06.genericity-cycle-a")!;
    const missing = f2Ok({
      turnKind: "f2_proposal",
      intentClass: "actionable",
      text: "ok",
      proposal: true,
      cycleTypeId: null,
    });
    expect(
      scoreR2FromObservation(scenario, observeF2Product(scenario, missing))
        .passFail,
    ).toBe("FAIL");

    const ok = f2Ok({
      turnKind: "f2_proposal",
      intentClass: "actionable",
      text: "qualification delivery",
      proposal: true,
      cycleTypeId: "cyc:delivery",
    });
    expect(
      scoreR2FromObservation(scenario, observeF2Product(scenario, ok)).passFail,
    ).toBe("PASS");
  });

  it("BAR expected binding does not imply observed binding", () => {
    const scenario = getScenario("mw0.s03.ambiguous-clarification")!;
    const obs = observeF2Product(
      scenario,
      f2Ok({
        turnKind: "f1_informative",
        intentClass: "informative",
        text: "hello",
      }),
    );
    expect(obs.expectedObservableIds.length).toBeGreaterThan(0);
    expect(obs.observedObservableIds).not.toEqual(obs.expectedObservableIds);
  });
});

describe("CORR-MW0-05 metering", () => {
  it("meters single and multiple calls without double-count; soft/hard/carry-in", async () => {
    const manifest = buildMw0CapabilityManifest("2026-08-29T22:00:00.000Z");
    const budget = new BudgetTracker(
      { targetUsd: 3, softStopUsd: 4, hardCapUsd: 5 },
      MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD,
    );
    expect(budget.cumulativeUsd).toBeCloseTo(
      MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD,
      6,
    );

    const inner = new FakeConversationProvider({
      scripted: ["a", "b", "c"],
    });
    const metered = new MeteredConversationProvider(
      inner,
      manifest,
      budget,
      "gpt-5.6-luna",
      { inputTokens: 100, outputTokens: 50 },
    );

    await metered.complete([{ role: "user", content: "1" }]);
    await metered.completeStructured({
      messages: [{ role: "user", content: "2" }],
      schemaName: "t",
      jsonSchema: { type: "object" },
    });
    await metered.completeRound({ items: [], tools: [] });

    expect(metered.ledger).toHaveLength(3);
    expect(metered.providerId).toBe("fake-test");
    const sum = metered.ledger.reduce((a, c) => a + c.estimatedUsd, 0);
    expect(budget.cumulativeUsd).toBeCloseTo(
      MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD + sum,
      8,
    );
    expect(metered.ledger.every((c) => c.cachedInputTokens === null)).toBe(true);
    expect(metered.ledger.every((c) => c.reasoningTokens === null)).toBe(true);

    const soft = new BudgetTracker(
      { targetUsd: 1, softStopUsd: 0.01, hardCapUsd: 5 },
      0.02,
    );
    expect(soft.canStartCall(0.001).allowed).toBe(false);
    expect(soft.canContinueEssential(0.001).allowed).toBe(true);

    const hard = new BudgetTracker(
      { targetUsd: 1, softStopUsd: 0.5, hardCapUsd: 0.03 },
      0.029,
    );
    const blocked = new MeteredConversationProvider(
      new FakeConversationProvider({ scripted: ["x"] }),
      manifest,
      hard,
      "gpt-5.6-luna",
      { inputTokens: 1_000_000, outputTokens: 1_000_000 },
    );
    await expect(
      blocked.complete([{ role: "user", content: "nope" }]),
    ).rejects.toThrow(/BUDGET_STOP/);
  });
});

describe("CORR-MW0-05 product path wiring + serialization", () => {
  const tempDirs: string[] = [];
  let projectId = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw0-corr05-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-08-29T22:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "MW0 Corr05",
      objective: "Evidence integrity",
      context: "fixture",
      criticality: "STANDARD",
      constraints: ["AUCUNE EXÉCUTION"],
      shortReference: "C05",
      idempotencyKey: `idem:corr05-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  it("explicit provider propagates through F2 without live env", async () => {
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    const provider = new FakeConversationProvider();
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Fais le nécessaire __F2_AMBIGUOUS__",
      provider,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.presentation).toBe("test_provider");
    expect(result.f2?.turnKind).toBe("f2_clarification");
  });

  it("explicit OpenAI-shaped stub proceeds without OPENAI_MODEL", async () => {
    delete process.env.OPENAI_MODEL;
    delete process.env.OPENAI_API_KEY;
    const ambiguous = JSON.stringify({
      intentClass: "ambiguous",
      candidateCycleTypeId: null,
      signals: null,
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
    });
    const provider = new OpenAiShapedStubProvider([ambiguous]);
    expect(resolveAssistantMode(provider).presentation).toBe("openai_live");
    const result = await orchestrateAssistantSend({
      projectId,
      content: "bonjour ambigu",
      provider,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.presentation).toBe("openai_live");
    expect(result.f2?.turnKind).toBe("f2_clarification");
  });

  it("no provider + missing config remains provider_unavailable", async () => {
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    const result = await orchestrateAssistantSend({
      projectId,
      content: "hello",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("provider_unavailable");
  });

  it("runR2 project_not_found → FAIL PRODUCT_PATH with preserved status", async () => {
    const manifest = buildMw0CapabilityManifest("2026-08-29T22:00:00.000Z");
    const budget = new BudgetTracker(undefined, 0);
    const run = await runR2ProductScenario({
      campaignId: "mw0-corr05-test",
      apiKey: "unused",
      model: "gpt-5.6-luna",
      reasoningEffort: "none",
      scenarioId: "mw0.s03.ambiguous-clarification",
      runIndex: 1,
      projectId: "project-does-not-exist",
      manifest,
      budget,
      provider: new FakeConversationProvider(),
    });
    expect(run.passFail).toBe("FAIL");
    expect(run.failureClass).toBe("PRODUCT_PATH");
    expect(run.productPathSucceeded).toBe(false);
    expect(run.productObservation?.f2Status).toBe("project_not_found");
    expect(run.usage?.cachedInputTokens).toBeNull();
    expect(run.usage?.reasoningTokens).toBeNull();
  });

  it("runR2 successful clarification path scores from actual F2", async () => {
    const scenario = getScenario("mw0.s03.ambiguous-clarification")!;
    const provider = new FakeConversationProvider();
    const f2 = await orchestrateAssistantSend({
      projectId,
      content: `${scenario.prompt} __F2_AMBIGUOUS__`,
      provider,
    });
    expect(f2.ok).toBe(true);
    const obs = observeF2Product(scenario, f2);
    expect(obs.f2Ok).toBe(true);
    expect(obs.turnKind).toBe("f2_clarification");
    expect(scoreR2FromObservation(scenario, obs).passFail).toBe("PASS");
  });

  it("F1 orchestrateTurn accepts explicit provider without env model", async () => {
    delete process.env.OPENAI_MODEL;
    delete process.env.OPENAI_API_KEY;
    const result = await orchestrateProjectAssistantTurn({
      projectId,
      content: "résume __F2_INFORMATIVE__",
      provider: new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
  });

  it("secret redaction still asserts", () => {
    const leak = assertNoSecretLeak("sk-abcdefghijklmnopqrstuvwxyz012345");
    expect(leak.ok).toBe(false);
  });

  it("D0 suite remains green", () => {
    expect(runFullD0Suite().ok).toBe(true);
  });
});
