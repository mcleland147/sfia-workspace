/** @vitest-environment node */
/**
 * P5-S01 Correction Pass 01 — CP3 Deterministic NO-LLM bypass proof.
 *
 * Representative EXISTING Product operation:
 *   composeStudioCognitiveContext
 * (Studio Hybrid Context Envelope — deterministic Product projection;
 *  NO LLM · NO cognitive router · trusted operation identity).
 *
 * ZERO REAL. No keyword classification. No DeterministicRouter.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { composeStudioCognitiveContext } from "@/features/project-assistant/f2/studioCognitiveContext";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import * as routingPolicy from "@/lib/nora-cognitive-runtime/cognitiveRoutingPolicy";
import * as cognitiveRuntime from "@/lib/nora-cognitive-runtime/runNoraCognitiveTurn";
import * as fakeProviderModule from "@/lib/platform/ai/fakeProvider";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";

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

describe("P5-S01 — deterministic NO-LLM bypass D0 (CP3)", () => {
  const tempDirs: string[] = [];
  let projectId = "";
  let lpsId = "";

  beforeEach(async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p5-s01-det-"));
    tempDirs.push(dir);
    const productDbPath = path.join(dir, "oa-product.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
      nowIso: "2026-10-05T08:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "P5-S01 Deterministic Bypass",
      objective: "Prove composeStudioCognitiveContext never enters cognition",
      context: "CP3 deterministic Product mechanic",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "NO LLM"],
      shortReference: "P5DET",
      idempotencyKey: `idem:p5-det-${Date.now()}-${Math.random()}`,
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
    resetRuntimeApplicationServiceForTests();
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("CP3 — composeStudioCognitiveContext: 0 provider / 0 router / 0 Nora turn", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      throw new Error("UNEXPECTED_LIVE_FETCH_P5_S01_CP3");
    });
    const routingSpy = vi.spyOn(routingPolicy, "decideCognitiveRouting");
    const turnSpy = vi.spyOn(cognitiveRuntime, "runNoraCognitiveTurn");
    const completeSpy = vi.spyOn(
      fakeProviderModule.FakeConversationProvider.prototype,
      "complete",
    );
    const structuredSpy = vi.spyOn(
      fakeProviderModule.FakeConversationProvider.prototype,
      "completeStructured",
    );
    const roundSpy = vi.spyOn(
      fakeProviderModule.FakeConversationProvider.prototype,
      "completeRound",
    );

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

    try {
      const projectDto: ProjectAssistantContextDto = {
        projectId,
        name: "P5-S01 Deterministic Bypass",
        shortReference: "P5DET",
        objective: "Prove composeStudioCognitiveContext never enters cognition",
        contextSummary: "CP3 deterministic Product mechanic",
        criticality: "STANDARD",
        constraints: ["ZERO REAL", "NO LLM"],
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
        truthCContext: "CP3 deterministic Product mechanic",
        oa: runtime.oa!,
      });

      expect(composed.ok).toBe(true);
      if (!composed.ok) throw new Error("compose failed");
      // Product semantics preserved — real Project/LPS identity.
      expect(composed.context.projectTruth.projectId).toBe(projectId);
      expect(composed.context.projectTruth.lpsId).toBe(lpsId);
      expect(composed.context.limits.truthOutranksConversation).toBe(true);

      // Zero cognition / provider / router.
      expect(turnSpy).not.toHaveBeenCalled();
      expect(routingSpy).not.toHaveBeenCalled();
      expect(completeSpy).not.toHaveBeenCalled();
      expect(structuredSpy).not.toHaveBeenCalled();
      expect(roundSpy).not.toHaveBeenCalled();
      expect(fetchSpy).not.toHaveBeenCalled();

      const strategyEvents = emitted.filter(
        (e) => e.type === "COGNITIVE_STRATEGY_SELECTED",
      );
      const routingEvents = emitted.filter(
        (e) => e.type === "COGNITIVE_ROUTING_SELECTED",
      );
      expect(strategyEvents).toHaveLength(0);
      expect(routingEvents).toHaveLength(0);
    } finally {
      emitSpy.mockRestore();
      fetchSpy.mockRestore();
    }
  });
});
