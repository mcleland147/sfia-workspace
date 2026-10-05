/** @vitest-environment node */
/**
 * P5-S01 — Integrated Product vertical slice D0 (ZERO REAL).
 *
 * Correction Pass 01 CP2: TRUE Product server path
 *   projectAssistantSendAction
 *   → orchestrateAssistantSend
 *   → analyzeIntent (F2)
 *   → composeStudioCognitiveContext
 *   → orchestrateProjectAssistantTurn (F1)
 *   → runNoraCognitiveTurn
 *   → CWP → Strategy → CognitiveRoutingPolicy
 *   → Fake external LLM → SAME Agents Runner
 *
 * Prior direct runNoraCognitiveTurn proof retained as seam unit evidence.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  P5_COGNITIVE_ROUTING_POLICY_VERSION,
  P5_TARGET_MODEL_COHORT,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { composeStudioCognitiveContext } from "@/features/project-assistant/f2/studioCognitiveContext";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import * as routingPolicy from "@/lib/nora-cognitive-runtime/cognitiveRoutingPolicy";
import * as cognitiveRuntime from "@/lib/nora-cognitive-runtime/runNoraCognitiveTurn";

function analysisStub(): IntentAnalysisDto {
  return {
    intentClass: "informative",
    parseOk: true,
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: {
      ambiguity: "low",
      reasoningDepth: "low",
      sourceBreadth: "low",
      toolDependency: "low",
      contradictionRisk: "low",
      verificationNeed: "low",
    },
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
    executionIntent: null,
  };
}

describe("P5-S01 — integrated Product path D0", () => {
  const tempDirs: string[] = [];
  let projectId = "";
  let lpsId = "";
  let productDbPath = "";
  const prevFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;

  beforeEach(async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p5-s01-"));
    tempDirs.push(dir);
    productDbPath = path.join(dir, "oa-product.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
      nowIso: "2026-10-05T08:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Product Simplification P5-S01",
      objective:
        "Premier slice intégré Conversation + contexte sémantique + routing",
      context: "P5-S01 vertical slice D0",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "P5S01",
      idempotencyKey: `idem:p5-s01-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    projectId = created.projectId;
    const project = await runtime.getProject(projectId);
    expect(project.ok).toBe(true);
    if (!project.ok) throw new Error("getProject failed");
    lpsId = project.livingState.id;
    expect(lpsId).toBeTruthy();
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
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("seam — real Product Project/LPS + routing + Fake boundary + same Runner", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      throw new Error("UNEXPECTED_LIVE_FETCH_P5_S01");
    });

    try {
      const projectDto: ProjectAssistantContextDto = {
        projectId,
        name: "Product Simplification P5-S01",
        shortReference: "P5S01",
        objective:
          "Premier slice intégré Conversation + contexte sémantique + routing",
        contextSummary: "P5-S01 vertical slice D0",
        criticality: "STANDARD",
        constraints: ["ZERO REAL"],
        lpsId,
        lpsVersion: 1,
        lpsCreatedAt: "2026-10-05T08:00:00.000Z",
        doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
        doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
        doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
        doctrineStatus: "product-studio-native",
        runtimeMode: "local",
        persistence: "product-sqlite",
        readiness: "ready",
      };

      const runtime = getRuntimeApplicationService();
      const composed = await composeStudioCognitiveContext({
        analysis: analysisStub(),
        project: projectDto,
        registryRoot: resolveProductDoctrineRegistryRoot(),
        truthCContext: "P5-S01 vertical slice D0",
        oa: runtime.oa!,
      });
      expect(composed.ok).toBe(true);
      if (!composed.ok) throw new Error("composeStudioCognitiveContext failed");
      expect(composed.context.projectTruth.projectId).toBe(projectId);
      expect(composed.context.projectTruth.lpsId).toBe(lpsId);
      expect(composed.context.limits.truthOutranksConversation).toBe(true);
      expect(fs.existsSync(productDbPath)).toBe(true);

      const provider = new FakeConversationProvider({
        toolScript: [
          {
            kind: "message",
            text: "[TEST/FAKE] P5-S01 integrated Product path — zero durable mutation.",
          },
        ],
      });

      const result = await runNoraCognitiveTurn({
        correlationId: `logical:${projectId}:p5-s01-turn-1`,
        projectId,
        messages: [
          {
            role: "system",
            content: [
              sfiaBoundaryInstructions(),
              "",
              `ProjectId=${projectId}`,
              `LpsId=${lpsId}`,
              `Objective=${projectDto.objective}`,
            ].join("\n"),
          },
          {
            role: "user",
            content:
              "Peux-tu me rappeler le contexte courant de ce projet sans rien modifier ?",
          },
        ],
        provider,
        enableTools: false,
        turnWorkloadContext: {
          userContentLength: 64,
          historyMessageCount: 0,
          projectCriticality: "STANDARD",
        },
        semanticCognitiveWorkload: analysisStub().cognitiveWorkload,
        trustedSfiaProfile: "trusted-profile",
      });

      expect(result.cognitiveRuntime).toBe("agents");
      expect(result.selectedModelId).toBeTruthy();
      expect(P5_TARGET_MODEL_COHORT).toContain(
        result.selectedModelId as (typeof P5_TARGET_MODEL_COHORT)[number],
      );
      expect(result.cognitiveRoutingPolicyVersion).toBe(
        P5_COGNITIVE_ROUTING_POLICY_VERSION,
      );
      expect(result.cognitiveStrategyClass).toBeTruthy();
      expect(result.selectedReasoningEffort).toBeTruthy();
      expect(result.text).toMatch(/P5-S01|FAKE|contexte|projet/i);
      expect((result as { humanDecisionId?: string }).humanDecisionId).toBeUndefined();
      expect(fetchSpy).not.toHaveBeenCalled();
      expect(fs.existsSync(productDbPath)).toBe(true);
    } finally {
      fetchSpy.mockRestore();
    }
  });

  it("CP2 — TRUE Product server path: SendAction → F2 → Semantic Context → F1 → routing → Fake Runner", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      throw new Error("UNEXPECTED_LIVE_FETCH_P5_S01_CP2");
    });

    const emitted: TechnicalEvent[] = [];
    const originalEmit = ProjectAssistantMemoryEventSink.prototype.emit;
    const emitSpy = vi
      .spyOn(ProjectAssistantMemoryEventSink.prototype, "emit")
      .mockImplementation(function (
        this: ProjectAssistantMemoryEventSink,
        event: TechnicalEvent,
      ) {
        emitted.push(event);
        return originalEmit.call(this, event);
      });

    const routingSpy = vi.spyOn(routingPolicy, "decideCognitiveRouting");
    const turnSpy = vi.spyOn(cognitiveRuntime, "runNoraCognitiveTurn");

    const sessionDbPath = path.join(
      path.dirname(productDbPath),
      "nora-session.sqlite",
    );

    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] P5-S01 server-path Conversation — aucune mutation durable.",
        },
      ],
    });

    try {
      const result = await projectAssistantSendAction({
        projectId,
        content:
          "Peux-tu me rappeler le contexte courant de ce projet sans rien modifier ?",
        provider,
        sessionDbPath,
      });

      expect(result.ok).toBe(true);
      if (!result.ok) throw new Error(`send failed: ${JSON.stringify(result)}`);

      expect(result.project.projectId).toBe(projectId);
      expect(result.project.lpsId).toBe(lpsId);
      expect(result.cognitiveRuntime).toBe("agents");
      expect(result.text.length).toBeGreaterThan(0);
      // Client DTO must not expose routing internals (MW2 invariant preserved).
      expect(result).not.toHaveProperty("cognitiveStrategyClass");
      expect(result).not.toHaveProperty("selectedReasoningEffort");
      expect(result).not.toHaveProperty("cognitiveRoutingPolicyVersion");

      // F1 + routing actually traversed.
      expect(turnSpy).toHaveBeenCalled();
      expect(routingSpy).toHaveBeenCalled();
      const routingDecision = routingSpy.mock.results.find(
        (r) => r.type === "return" && r.value && (r.value as { ok?: boolean }).ok,
      )?.value as
        | {
            ok: true;
            selectedModel: string;
            selectedReasoningEffort: string;
            policyVersion: string;
            strategyClass: string;
            cognitiveTaskId: string;
          }
        | undefined;
      expect(routingDecision).toBeTruthy();
      expect(P5_TARGET_MODEL_COHORT).toContain(
        routingDecision!.selectedModel as (typeof P5_TARGET_MODEL_COHORT)[number],
      );
      expect(routingDecision!.selectedReasoningEffort).toBeTruthy();
      expect(routingDecision!.policyVersion).toBe(
        P5_COGNITIVE_ROUTING_POLICY_VERSION,
      );
      expect(routingDecision!.strategyClass).toBeTruthy();
      expect(routingDecision!.cognitiveTaskId.length).toBeGreaterThan(0);

      const strategyEvents = emitted.filter(
        (e) => e.type === "COGNITIVE_STRATEGY_SELECTED",
      );
      const routingEvents = emitted.filter(
        (e) => e.type === "COGNITIVE_ROUTING_SELECTED",
      );
      expect(strategyEvents.length).toBeGreaterThanOrEqual(1);
      expect(routingEvents.length).toBeGreaterThanOrEqual(1);
      expect(routingEvents[0]!.detail?.routingPolicyVersion).toBe(
        P5_COGNITIVE_ROUTING_POLICY_VERSION,
      );
      expect(P5_TARGET_MODEL_COHORT).toContain(
        routingEvents[0]!.detail?.selectedModel as string,
      );

      // No HD/Confirmation manufactured by routing.
      expect(
        JSON.stringify(result).match(/humanDecisionId|authorityEnvelope/i),
      ).toBeNull();
      expect(fetchSpy).not.toHaveBeenCalled();
      expect(fs.existsSync(productDbPath)).toBe(true);
      // Same Product SQLite — no second Product store.
      const siblingDbs = fs
        .readdirSync(path.dirname(productDbPath))
        .filter((f) => f.endsWith(".sqlite"));
      expect(siblingDbs).toContain("oa-product.sqlite");
    } finally {
      emitSpy.mockRestore();
      fetchSpy.mockRestore();
    }
  });
});
