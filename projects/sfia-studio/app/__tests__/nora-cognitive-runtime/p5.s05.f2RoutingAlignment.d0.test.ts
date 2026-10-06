/** @vitest-environment node */
/**
 * P5-S05 — F2 routing alignment D0 (ZERO REAL / DETERMINISTIC PROVEN).
 *
 * D1–D13 oracles. Does NOT claim R3.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  P5_COGNITIVE_ROUTING_POLICY_VERSION,
  P5_TARGET_MODEL_COHORT,
  decideCognitiveRouting,
  decideCognitiveStrategy,
  buildSignalsFromTurnContext,
} from "@/lib/nora-cognitive-runtime";
import * as routingPolicy from "@/lib/nora-cognitive-runtime/cognitiveRoutingPolicy";
import * as cognitiveRuntime from "@/lib/nora-cognitive-runtime/runNoraCognitiveTurn";
import {
  createRoutedOpenAiConversationProvider,
  FakeConversationProvider,
  OpenAIConversationProvider,
  setConversationProviderForTests,
  getConversationProviderOverrideForTests,
  getLiveConversationCredentialAvailability,
  getLiveConversationAvailability,
} from "@/lib/platform/ai";
import { TechnicalError } from "@/lib/platform/ai/errors";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import {
  resolveF2ProductRoutedProvider,
  F2_COGNITIVE_PHASE,
} from "@/features/project-assistant/f2/resolveF2ProductRoutedProvider";
import * as f2Resolver from "@/features/project-assistant/f2/resolveF2ProductRoutedProvider";

describe("P5-S05 — F2 routing alignment D0", () => {
  const tempDirs: string[] = [];
  let projectId = "";
  let lpsId = "";
  let productDbPath = "";
  const prevFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;
  const prevEffort = process.env.OPENAI_REASONING_EFFORT;

  beforeEach(async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    delete process.env.OPENAI_REASONING_EFFORT;
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p5-s05-"));
    tempDirs.push(dir);
    productDbPath = path.join(dir, "oa-product.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
      nowIso: "2026-10-06T08:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Product Simplification P5-S05",
      objective: "F2 routing alignment deterministic proof",
      context: "P5-S05 D0",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "P5S05",
      idempotencyKey: `idem:p5-s05-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    projectId = created.projectId;
    const project = await runtime.getProject(projectId);
    expect(project.ok).toBe(true);
    if (!project.ok) throw new Error("getProject failed");
    lpsId = project.livingState.id;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    if (prevFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = prevFake;
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = prevModel;
    if (prevEffort === undefined) delete process.env.OPENAI_REASONING_EFFORT;
    else process.env.OPENAI_REASONING_EFFORT = prevEffort;
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("D1/D2/D8/D9/D10 — Product send routes F2 via cognitiveRoutingPolicy; F1 unchanged; no authority", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      throw new Error("UNEXPECTED_LIVE_FETCH_P5_S05");
    });
    const emitted: TechnicalEvent[] = [];
    const originalEmit = ProjectAssistantMemoryEventSink.prototype.emit;
    vi.spyOn(ProjectAssistantMemoryEventSink.prototype, "emit").mockImplementation(
      function (this: ProjectAssistantMemoryEventSink, event: TechnicalEvent) {
        emitted.push(event);
        return originalEmit.call(this, event);
      },
    );
    const routingSpy = vi.spyOn(routingPolicy, "decideCognitiveRouting");
    const turnSpy = vi.spyOn(cognitiveRuntime, "runNoraCognitiveTurn");
    const sessionDbPath = path.join(
      path.dirname(productDbPath),
      "nora-session.sqlite",
    );

    try {
      // No explicit provider — nominal Product F2 must resolve via routing seam.
      const result = await projectAssistantSendAction({
        projectId,
        content:
          "Peux-tu me rappeler le contexte courant de ce projet sans rien modifier ?",
        sessionDbPath,
      });
      expect(result.ok).toBe(true);
      if (!result.ok) throw new Error(JSON.stringify(result));

      expect(routingSpy).toHaveBeenCalled();
      expect(routingSpy.mock.calls.length).toBeGreaterThanOrEqual(2);

      const okDecisions = routingSpy.mock.results
        .filter(
          (r) =>
            r.type === "return" &&
            r.value &&
            (r.value as { ok?: boolean }).ok === true,
        )
        .map((r) => r.value as {
          ok: true;
          selectedModel: string;
          selectedReasoningEffort: string;
          policyVersion: string;
          strategyClass: string;
          cognitiveTaskId: string;
          routingDecisionId: string;
        });
      expect(okDecisions.length).toBeGreaterThanOrEqual(2);
      for (const d of okDecisions) {
        expect(d.policyVersion).toBe(P5_COGNITIVE_ROUTING_POLICY_VERSION);
        expect(P5_TARGET_MODEL_COHORT).toContain(
          d.selectedModel as (typeof P5_TARGET_MODEL_COHORT)[number],
        );
        expect(d.selectedReasoningEffort).toBeTruthy();
      }

      const f2Events = emitted.filter(
        (e) =>
          e.type === "COGNITIVE_ROUTING_SELECTED" &&
          e.detail?.phase === F2_COGNITIVE_PHASE,
      );
      expect(f2Events.length).toBeGreaterThanOrEqual(1);
      expect(f2Events[0]!.detail.routingPolicyVersion).toBe(
        P5_COGNITIVE_ROUTING_POLICY_VERSION,
      );
      expect(f2Events[0]!.detail.selectedModel).toBeTruthy();

      expect(turnSpy).toHaveBeenCalled();
      expect(result.cognitiveRuntime).toBe("agents");
      expect(result).not.toHaveProperty("cognitiveStrategyClass");
      expect(result).not.toHaveProperty("selectedReasoningEffort");
      expect((result as { humanDecisionId?: string }).humanDecisionId).toBeUndefined();
      expect(result).not.toHaveProperty("confirmationGranted");
      expect(fetchSpy).not.toHaveBeenCalled();
      expect(lpsId).toBeTruthy();
    } finally {
      fetchSpy.mockRestore();
    }
  });

  it("D3b — F2 selected effort equals provider configured (dispatch) effort", () => {
    process.env.OPENAI_API_KEY = "sk-test-p5-s05-not-real";
    process.env.OPENAI_MODEL = "gpt-hostile-static-override";
    process.env.OPENAI_REASONING_EFFORT = "max";
    delete process.env.OPS1_CONVERSATION_PROVIDER;

    const resolved = resolveF2ProductRoutedProvider({
      turnContext: {
        projectCriticality: "STANDARD",
        userContentLength: 40,
        historyMessageCount: 0,
      },
      cognitiveTaskId: "f2:d3b-effort",
      correlationId: "cor:d3b",
    });
    expect(resolved.boundarySubstitution).toBe(false);
    expect(resolved.provider).toBeInstanceOf(OpenAIConversationProvider);
    const openai = resolved.provider as OpenAIConversationProvider;
    expect(openai.configuredModel).toBe(resolved.routing.selectedModel);
    expect(openai.configuredReasoningEffort).toBe(
      resolved.routing.selectedReasoningEffort,
    );
    expect(openai.configuredReasoningEffort).not.toBe("max");
  });

  it("D3/D13 — conflicting OPENAI_MODEL/EFFORT cannot override routed Product selection", () => {
    process.env.OPENAI_API_KEY = "sk-test-p5-s05-not-real";
    process.env.OPENAI_MODEL = "gpt-hostile-static-override";
    process.env.OPENAI_REASONING_EFFORT = "max";
    delete process.env.OPS1_CONVERSATION_PROVIDER;

    const signals = buildSignalsFromTurnContext({
      projectCriticality: "STANDARD",
      userContentLength: 40,
      historyMessageCount: 0,
    });
    const strategy = decideCognitiveStrategy({
      signals,
      trustedSfiaProfile: null,
    });
    const routed = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "f2:d3-conflict",
      signals: strategy.normalizedSignals,
    });
    expect(routed.ok).toBe(true);
    if (!routed.ok) throw new Error("routing failed");

    const provider = createRoutedOpenAiConversationProvider({
      model: routed.selectedModel,
      reasoningEffort: routed.selectedReasoningEffort,
    });
    expect(provider).toBeInstanceOf(OpenAIConversationProvider);
    expect(provider.configuredModel).toBe(routed.selectedModel);
    expect(provider.configuredModel).not.toBe("gpt-hostile-static-override");
    expect(provider.configuredReasoningEffort).toBe(
      routed.selectedReasoningEffort,
    );
    expect(process.env.OPENAI_MODEL).toBe("gpt-hostile-static-override");
  });

  it("D4 — unsupported selected model/effort fails closed", () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    vi.spyOn(routingPolicy, "decideCognitiveRouting").mockReturnValue({
      ok: true,
      routingDecisionId: "rd:hostile",
      cognitiveTaskId: "f2:d4",
      strategyClass: "Focused",
      qualityFloor: {
        category: "routine-sufficient",
        minModelRank: 1,
        minEffortRank: 1,
        reasonCodes: [],
      },
      eligibleConfigs: [],
      selectedModel: "gpt-hostile-unsupported" as never,
      selectedReasoningEffort: "low",
      reasoningMode: "standard",
      reasonCodes: ["TEST_HOSTILE"],
      escalationEligible: false,
      maxEscalations: 1,
      providerSnapshotIdentity: "test",
      policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      estimatedCostUsdHint: null,
    });

    expect(() =>
      resolveF2ProductRoutedProvider({
        turnContext: {
          projectCriticality: "STANDARD",
          userContentLength: 20,
          historyMessageCount: 0,
        },
        cognitiveTaskId: "f2:d4",
        correlationId: "cor:d4",
      }),
    ).toThrow(TechnicalError);
  });

  it("D5 — client SendAction surface has no model/effort authority fields", () => {
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/actions.ts",
      ),
      "utf8",
    );
    const sendBlock = src.slice(
      src.indexOf("export async function projectAssistantSendAction"),
      src.indexOf("export async function projectAssistantDecideAction"),
    );
    expect(sendBlock).not.toMatch(/\bmodelId\b/);
    expect(sendBlock).not.toMatch(/\breasoningEffort\b/);
    expect(sendBlock).not.toMatch(/\bOPENAI_MODEL\b/);
    expect(sendBlock).not.toMatch(/evalModelReasoningControl/);
  });

  it("D6 — Fake/override remains boundary substitution, not production selection", () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.OPENAI_API_KEY;

    const resolved = resolveF2ProductRoutedProvider({
      turnContext: {
        projectCriticality: "LOW",
        userContentLength: 12,
        historyMessageCount: 0,
      },
      cognitiveTaskId: "f2:d6-fake",
      correlationId: "cor:d6-fake",
    });
    expect(resolved.boundarySubstitution).toBe(true);
    expect(resolved.provider).toBeInstanceOf(FakeConversationProvider);
    expect(resolved.provider.providerId).toBe("fake-test");
    expect(resolved.policyVersion).toBe(P5_COGNITIVE_ROUTING_POLICY_VERSION);
    expect(P5_TARGET_MODEL_COHORT).toContain(resolved.routing.selectedModel);

    const override = new FakeConversationProvider();
    setConversationProviderForTests(override);
    expect(getConversationProviderOverrideForTests()).toBe(override);
    const withOverride = resolveF2ProductRoutedProvider({
      turnContext: {
        projectCriticality: "LOW",
        userContentLength: 12,
        historyMessageCount: 0,
      },
      cognitiveTaskId: "f2:d6-override",
      correlationId: "cor:d6-override",
    });
    expect(withOverride.provider).toBe(override);
    expect(withOverride.boundarySubstitution).toBe(true);
    // Production selection path constructs OpenAI — Fake path must not.
    expect(withOverride.provider).not.toBeInstanceOf(OpenAIConversationProvider);
  });

  it("D7 — evalModelReasoningControl remains eval-only (skipped by F2 Product router)", () => {
    const resolveSpy = vi.spyOn(f2Resolver, "resolveF2ProductRoutedProvider");
    // Direct unit: Product helper is not the eval pin path.
    // Eval requires injected cell provider in analyzeIntent — covered by existing CORR tests.
    expect(resolveSpy).not.toHaveBeenCalled();
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/f2/orchestrateF2.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(
      /if \(!input\.evalModelReasoningControl && !effectiveProvider\)/,
    );
    expect(src).toMatch(/evalModelReasoningControl/);
  });

  it("D11 — no second router/provider service/persistence/Product truth modules", () => {
    const resolverSrc = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/f2/resolveF2ProductRoutedProvider.ts",
      ),
      "utf8",
    );
    expect(resolverSrc).toMatch(/decideCognitiveRouting/);
    expect(resolverSrc).toMatch(/createRoutedOpenAiConversationProvider/);
    expect(resolverSrc).not.toMatch(/createTable|CREATE TABLE|new RouterService/);
    // Doc may mention the F1 entry; must not import/call it.
    expect(resolverSrc).not.toMatch(/from ["']@\/lib\/nora-cognitive-runtime\/runNoraCognitiveTurn/);
    expect(resolverSrc).not.toMatch(/runNoraCognitiveTurn\s*\(/);
  });

  it("D12/D13 — credential availability ≠ OPENAI_MODEL authority; legacy probe retained", () => {
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    expect(getLiveConversationCredentialAvailability().available).toBe(false);
    expect(getLiveConversationAvailability().available).toBe(false);

    process.env.OPENAI_API_KEY = "sk-test-cred-only";
    delete process.env.OPENAI_MODEL;
    expect(getLiveConversationCredentialAvailability().available).toBe(true);
    expect(getLiveConversationAvailability().available).toBe(false);
  });
});
