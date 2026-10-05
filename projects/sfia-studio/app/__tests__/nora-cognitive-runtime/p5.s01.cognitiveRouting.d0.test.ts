/** @vitest-environment node */
/**
 * P5-S01 D0 — Cognitive routing policy + Product-path wiring (ZERO REAL).
 */
import { describe, expect, it, vi } from "vitest";
import {
  ScriptedModel,
  assistantMessage,
} from "@openai/agents/testing";
import {
  buildMw0CapabilityManifest,
  buildP5TargetCapabilityManifest,
  modelCapabilitySet,
  type CapabilityManifest,
} from "@/lib/nora-eval/capabilityBudget";
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
import {
  decideCognitiveRouting,
  deriveQualityFloor,
  generateCandidateConfigs,
  isOutsideP5TargetCohort,
  P5_COGNITIVE_ROUTING_POLICY_VERSION,
  P5_MAX_ESCALATIONS_PER_TASK,
  P5_TARGET_MODEL_COHORT,
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";

function strategyFor(
  partial: Parameters<typeof normalizeCognitiveWorkloadSignals>[0],
  profile = "trusted-profile",
) {
  return decideCognitiveStrategy({
    signals: normalizeCognitiveWorkloadSignals(partial),
    trustedSfiaProfile: profile,
  });
}

describe("P5-S01 — cognitive routing D0", () => {
  it("P5-D0-01 — nominal target cohort = Luna / Sol / Astra", () => {
    expect([...P5_TARGET_MODEL_COHORT]).toEqual([
      "gpt-6-luna",
      "gpt-6.1-sol",
      "gpt-6-astra",
    ]);
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    expect(manifest.models.map((m) => m.modelId).sort()).toEqual([
      "gpt-6-astra",
      "gpt-6-luna",
      "gpt-6.1-sol",
    ]);
  });

  it("P5-D0-02 — nominal routing excludes GPT-5.6", () => {
    expect(isOutsideP5TargetCohort("gpt-5.6-luna")).toBe(true);
    expect(isOutsideP5TargetCohort("gpt-5.6-sol")).toBe(true);
    expect(isOutsideP5TargetCohort("gpt-6-luna")).toBe(false);
    const strategy = strategyFor({
      ambiguity: "low",
      reasoningDepth: "low",
      sourceBreadth: "low",
      verificationNeed: "low",
      contradictionRisk: "low",
    });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-02",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(decision.selectedModel.startsWith("gpt-5.6")).toBe(false);
    expect(
      decision.eligibleConfigs.every(
        (c) => !c.modelId.startsWith("gpt-5.6"),
      ),
    ).toBe(true);
  });

  it("P5-D0-03 — historical GPT-5.6 MW0 manifest unchanged", () => {
    const mw0 = buildMw0CapabilityManifest("2026-10-05T00:00:00.000Z");
    expect(mw0.models.map((m) => m.modelId)).toEqual([
      "gpt-5.6-sol",
      "gpt-5.6-terra",
      "gpt-5.6-luna",
    ]);
    expect(mw0.models.some((m) => m.modelId.startsWith("gpt-6"))).toBe(false);
  });

  it("P5-D0-04 — Strategy does not contain fixed model mapping", () => {
    const strategy = strategyFor({
      ambiguity: "medium",
      reasoningDepth: "medium",
      verificationNeed: "medium",
    });
    const candidates = generateCandidateConfigs(strategy);
    const models = new Set(candidates.map((c) => c.modelId));
    expect(models.has("gpt-6-luna")).toBe(true);
    expect(models.has("gpt-6.1-sol")).toBe(true);
    expect(models.has("gpt-6-astra")).toBe(true);
    // Same strategy class yields multi-model candidates (not Strategy→Model fixed).
    expect(models.size).toBe(3);
  });

  it("P5-D0-05 / P5-D0-06 — Quality Floor before FinOps; insufficient excluded", () => {
    const strategy = strategyFor({
      rigorCriticality: "high",
      verificationNeed: "high",
      contradictionRisk: "high",
      ambiguity: "high",
      reasoningDepth: "high",
    });
    expect(strategy.strategyClass).toBe("High-Assurance");
    const floor = deriveQualityFloor(strategy);
    expect(floor.minModelRank).toBeGreaterThanOrEqual(2);
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-05",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(decision.selectedModel).not.toBe("gpt-6-luna");
    expect(
      decision.eligibleConfigs.every((c) => c.modelId !== "gpt-6-luna" || false),
    );
    // Luna configs must not remain eligible under High-Assurance floor.
    expect(
      decision.eligibleConfigs.every((c) => c.modelId !== "gpt-6-luna"),
    ).toBe(true);
    // Pipeline order markers (CP5).
    expect(decision.reasonCodes.some((c) => c.startsWith("qualitySufficient:"))).toBe(
      true,
    );
    expect(decision.reasonCodes.some((c) => c.startsWith("providerCompatible:"))).toBe(
      true,
    );
    expect(decision.reasonCodes).toContain("pipeline:quality→provider→finops");
  });

  it("P5-D0-05b — pipeline ORDER: Quality Floor then provider then FinOps", () => {
    const strategy = strategyFor({
      rigorCriticality: "high",
      verificationNeed: "high",
      contradictionRisk: "high",
      ambiguity: "high",
      reasoningDepth: "high",
    });
    expect(strategy.strategyClass).toBe("High-Assurance");
    // Manifest where Luna is provider-supported (but below HA floor),
    // Sol high/xhigh are quality-sufficient but provider-unsupported,
    // Sol max is quality+provider sufficient.
    const stagedManifest: CapabilityManifest = {
      ...buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z"),
      models: [
        {
          modelId: "gpt-6-luna",
          inputUsdPerMTok: 0.1,
          outputUsdPerMTok: 0.5,
          reasoningEfforts: [
            "none",
            "low",
            "medium",
            "high",
            "xhigh",
            "max",
          ] as OpenAiReasoningEffort[],
        },
        {
          modelId: "gpt-6.1-sol",
          inputUsdPerMTok: 2.0,
          outputUsdPerMTok: 10.0,
          reasoningEfforts: ["max"] as OpenAiReasoningEffort[],
        },
        {
          modelId: "gpt-6-astra",
          inputUsdPerMTok: 10.0,
          outputUsdPerMTok: 50.0,
          reasoningEfforts: ["high", "xhigh", "max"] as OpenAiReasoningEffort[],
        },
      ],
    };
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-05b-order",
      manifest: stagedManifest,
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    const qualityRejected = decision.reasonCodes.find((c) =>
      c.startsWith("qualityRejected:"),
    );
    const qualitySufficient = decision.reasonCodes.find((c) =>
      c.startsWith("qualitySufficient:"),
    );
    const providerRejected = decision.reasonCodes.find((c) =>
      c.startsWith("providerRejected:"),
    );
    expect(qualityRejected).toBeTruthy();
    expect(Number(qualityRejected!.split(":")[1])).toBeGreaterThan(0);
    expect(qualitySufficient).toBeTruthy();
    expect(Number(qualitySufficient!.split(":")[1])).toBeGreaterThan(0);
    // Sol high/xhigh must be rejected at provider stage AFTER quality.
    expect(
      decision.reasonCodes.some((c) =>
        c.includes("providerRejected:unsupported-effort:gpt-6.1-sol/high"),
      ),
    ).toBe(true);
    expect(providerRejected).toBeTruthy();
    expect(Number(providerRejected!.split(":")[1])).toBeGreaterThan(0);
    // Luna never survives quality floor into eligibleConfigs.
    expect(
      decision.eligibleConfigs.every((c) => c.modelId !== "gpt-6-luna"),
    ).toBe(true);
    expect(decision.reasonCodes).toContain("pipeline:quality→provider→finops");
    // Selection among remaining sufficient+compatible (FinOps last).
    expect(["gpt-6.1-sol", "gpt-6-astra"]).toContain(decision.selectedModel);
  });

  it("P5-D0-07 — Luna none accepted", () => {
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    const efforts = modelCapabilitySet(manifest, "gpt-6-luna");
    expect(efforts).toContain("none");
  });

  it("P5-D0-08 / P5-D0-09 — Sol/Astra none rejected", () => {
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    expect(modelCapabilitySet(manifest, "gpt-6.1-sol")).not.toContain("none");
    expect(modelCapabilitySet(manifest, "gpt-6-astra")).not.toContain("none");
  });

  it("P5-D0-04b — FinOps Standard short-context prices dated 2026-10-05", () => {
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    const byId = Object.fromEntries(
      manifest.models.map((m) => [m.modelId, m]),
    );
    expect(byId["gpt-6-luna"]?.inputUsdPerMTok).toBe(0.1);
    expect(byId["gpt-6-luna"]?.outputUsdPerMTok).toBe(0.5);
    expect(byId["gpt-6.1-sol"]?.inputUsdPerMTok).toBe(2.0);
    expect(byId["gpt-6.1-sol"]?.outputUsdPerMTok).toBe(10.0);
    expect(byId["gpt-6-astra"]?.inputUsdPerMTok).toBe(10.0);
    expect(byId["gpt-6-astra"]?.outputUsdPerMTok).toBe(50.0);
    expect(manifest.sourceNote).toMatch(/Standard/i);
    expect(manifest.sourceNote).toMatch(/short-context/i);
    expect(manifest.sourceName).toMatch(/2026-10-05/);
  });

  it("P5-D0-10 — unknown / empty provider capability fail-closed", () => {
    const strategy = strategyFor({
      ambiguity: "low",
      reasoningDepth: "low",
      sourceBreadth: "low",
      verificationNeed: "low",
      contradictionRisk: "low",
    });
    // Manifest where every target cohort model is absent → router fail-closed.
    const emptyTargetManifest: CapabilityManifest = {
      ...buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z"),
      models: [
        {
          modelId: "gpt-unknown-xyz",
          inputUsdPerMTok: 1,
          outputUsdPerMTok: 1,
          reasoningEfforts: ["low", "medium", "high"] as OpenAiReasoningEffort[],
        },
      ],
      campaignAllowlist: {
        modelIds: ["gpt-unknown-xyz"],
        reasoningEfforts: ["low", "medium", "high"] as OpenAiReasoningEffort[],
      },
    };
    expect(modelCapabilitySet(emptyTargetManifest, "gpt-6-luna")).toBeNull();
    expect(modelCapabilitySet(emptyTargetManifest, "gpt-6.1-sol")).toBeNull();
    expect(modelCapabilitySet(emptyTargetManifest, "gpt-6-astra")).toBeNull();
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-10",
      manifest: emptyTargetManifest,
    });
    expect(decision.ok).toBe(false);
    if (decision.ok) return;
    expect(decision.reasonCodes).toContain(
      "PROVIDER_INCOMPATIBLE_WITH_QUALITY_FLOOR",
    );
    expect(decision.reasonCodes).toContain("NO_SUFFICIENT_CONFIG");
    expect(
      decision.reasonCodes.some((c) => c.includes("unknown-model:gpt-6-luna")),
    ).toBe(true);
  });

  it("P5-D0-11 — unsupported effort not silently coerced", () => {
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    const sol = modelCapabilitySet(manifest, "gpt-6.1-sol")!;
    expect(sol.includes("none")).toBe(false);
    // Routine envelope includes none — Sol none must be filtered, not coerced to low.
    const strategy = strategyFor({
      ambiguity: "low",
      reasoningDepth: "low",
      sourceBreadth: "low",
      verificationNeed: "low",
      contradictionRisk: "low",
    });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-11",
      manifest,
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(
      decision.eligibleConfigs.some(
        (c) => c.modelId === "gpt-6.1-sol" && c.reasoningEffort === "none",
      ),
    ).toBe(false);
  });

  it("P5-D0-12 — budget cannot downgrade below quality", () => {
    const strategy = strategyFor({
      rigorCriticality: "high",
      verificationNeed: "high",
      contradictionRisk: "high",
      ambiguity: "high",
      reasoningDepth: "high",
    });
    // Impossible budget among Sol/Astra → limitation, not Luna downgrade.
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-12",
      maxBudgetUsd: 0.000001,
    });
    expect(decision.ok).toBe(false);
    if (decision.ok) return;
    expect(decision.reasonCodes).toContain(
      "BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR",
    );
  });

  it("P5-D0-13 / P5-D0-14 / P5-D0-15 — reconstructible + policy version + reason codes", () => {
    const strategy = strategyFor({ ambiguity: "medium" });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-13-task",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(decision.routingDecisionId.length).toBeGreaterThan(8);
    expect(decision.cognitiveTaskId).toBe("p5-d0-13-task");
    expect(decision.policyVersion).toBe(P5_COGNITIVE_ROUTING_POLICY_VERSION);
    expect(decision.reasonCodes.length).toBeGreaterThan(0);
    expect(decision.providerSnapshotIdentity.length).toBeGreaterThan(0);
  });

  it("P5-D0-16 — max escalation = 1", () => {
    expect(P5_MAX_ESCALATIONS_PER_TASK).toBe(1);
    const strategy = strategyFor({});
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-16",
      escalationsUsed: 0,
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(decision.maxEscalations).toBe(1);
    expect(decision.escalationEligible).toBe(true);
    const after = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-16",
      escalationsUsed: 1,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.escalationEligible).toBe(false);
  });

  it("P5-D0-17 — stable cognitive task identity required", () => {
    const strategy = strategyFor({});
    expect(() =>
      decideCognitiveRouting({ strategy, cognitiveTaskId: "   " }),
    ).toThrow(/COGNITIVE_ROUTING_REQUIRES_STABLE_TASK_ID/);
  });

  it("P5-D0-18 / P5-D0-19 — client cannot select model/effort via Product path", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] P5 routing." }],
    });
    const result = await runNoraCognitiveTurn({
      correlationId: "p5-d0-18",
      projectId: "prj:p5",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "probe routing" },
      ],
      provider,
      enableTools: false,
      cognitiveWorkloadSignals: {
        ambiguity: "low",
        reasoningDepth: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        contradictionRisk: "low",
      },
      trustedSfiaProfile: "trusted-profile",
      // Intentionally no client model/effort fields exist on the input type.
    });
    expect(result.selectedModelId).toBeTruthy();
    expect(P5_TARGET_MODEL_COHORT).toContain(
      result.selectedModelId as (typeof P5_TARGET_MODEL_COHORT)[number],
    );
    expect(result.selectedReasoningEffort).toBeTruthy();
    expect(result.cognitiveRoutingPolicyVersion).toBe(
      P5_COGNITIVE_ROUTING_POLICY_VERSION,
    );
  });

  it("P5-D0-20 — stronger model does not widen authority fields", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] HA." }],
    });
    const result = await runNoraCognitiveTurn({
      correlationId: "p5-d0-20",
      projectId: "prj:p5",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "high assurance probe" },
      ],
      provider,
      enableTools: false,
      cognitiveWorkloadSignals: {
        rigorCriticality: "high",
        verificationNeed: "high",
        contradictionRisk: "high",
        ambiguity: "high",
        reasoningDepth: "high",
      },
      trustedSfiaProfile: "trusted-profile",
    });
    expect(result.selectedModelId).not.toBe("gpt-6-luna");
    // No authority envelope / confirmation / HD fields introduced by routing.
    expect(
      Object.keys(result).some((k) =>
        /authority|humanDecision|confirmation/i.test(k),
      ),
    ).toBe(false);
  });

  it("P5-D0-21 — routing telemetry contains no CoT", async () => {
    const events: TechnicalEvent[] = [];
    const sink: EventSink = {
      emit(event) {
        events.push(event);
      },
    };
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] telemetry." }],
    });
    await runNoraCognitiveTurn({
      correlationId: "p5-d0-21",
      projectId: "prj:p5",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "telemetry probe" },
      ],
      provider,
      enableTools: false,
      sink,
      cognitiveWorkloadSignals: {
        ambiguity: "low",
        reasoningDepth: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        contradictionRisk: "low",
      },
      trustedSfiaProfile: "trusted-profile",
    });
    const routing = events.find((e) => e.type === "COGNITIVE_ROUTING_SELECTED");
    expect(routing).toBeTruthy();
    const blob = JSON.stringify(routing?.detail ?? {});
    expect(blob).not.toMatch(/chain of thought|private reasoning|confidencePercent|qualityScore/i);
    expect(routing?.detail).toMatchObject({
      routingPolicyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      selectedModel: expect.any(String),
      selectedEffort: expect.any(String),
    });
  });

  it("P5-D0-22 / P5-D0-23 / P5-D0-24 — Fake boundary + same Runner + zero live", async () => {
    const model = new ScriptedModel([[assistantMessage("ok")]]);
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] boundary." }],
    });
    const spy = vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      throw new Error("UNEXPECTED_LIVE_FETCH");
    });
    try {
      const result = await runNoraCognitiveTurn({
        correlationId: "p5-d0-22",
        projectId: "prj:p5",
        messages: [
          { role: "system", content: sfiaBoundaryInstructions() },
          { role: "user", content: "fake boundary" },
        ],
        provider,
        enableTools: false,
        cognitiveWorkloadSignals: {
          ambiguity: "low",
          reasoningDepth: "low",
          sourceBreadth: "low",
          verificationNeed: "low",
          contradictionRisk: "low",
        },
        trustedSfiaProfile: "trusted-profile",
        // Eval pin with ScriptedModel proves same Agents Runner path remains usable.
        evalModelReasoningControl: {
          modelId: "gpt-6-luna",
          reasoningEffort: "low",
          agentsModel: model,
        },
      });
      expect(result.cognitiveRuntime).toBe("agents");
      expect(result.evalPinnedModelId).toBe("gpt-6-luna");
      expect(spy).not.toHaveBeenCalled();
    } finally {
      spy.mockRestore();
    }
  });
});
