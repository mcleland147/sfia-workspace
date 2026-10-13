/**
 * P6-REAL-OBS-P0 Option B — CRITICAL CORRECTION PASS (DETERMINISTIC / ZERO REAL).
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import * as receiptMod from "@/features/project-assistant/cognitiveExecutionReceipt";
import {
  buildCognitiveExecutionReceipt,
  clearCognitiveExecutionReceiptRegistryForTests,
  getCognitiveExecutionReceipt,
  projectAndConserveCognitiveExecutionReceipt,
  setCognitiveExecutionReceiptRememberForTests,
} from "@/features/project-assistant/cognitiveExecutionReceipt";

const {
  getProjectRuntimeActionMock,
  runNoraCognitiveTurnMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  runNoraCognitiveTurnMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

vi.mock("@/lib/nora-cognitive-runtime", async (importOriginal) => {
  const actual =
    await importOriginal<typeof import("@/lib/nora-cognitive-runtime")>();
  return {
    ...actual,
    runNoraCognitiveTurn: (...args: unknown[]) =>
      runNoraCognitiveTurnMock(...args),
  };
});

const SUCCESS = {
  ok: true as const,
  project: {
    projectId: "prj:obs-b",
    name: "Projet Obs B",
    shortReference: "OBS",
    objective: "Receipt conservation.",
    contextSummary: "Option B correction D0",
    criticality: "STANDARD" as const,
    constraints: ["Lecture seule"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:obs-b",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:obs-b",
    version: 1 as const,
    createdAt: "2026-10-13T00:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    projectLpsRestartSafe: true as const,
    cycleInstanceRestartSafe: true as const,
    humanDecisionRestartSafe: true as const,
    executionContractRestartSafe: true as const,
    messages: [] as const,
  },
};

function baseTurn(overrides: Record<string, unknown> = {}) {
  return {
    text: "Deterministic synthesis.",
    usage: {
      inputTokens: 11,
      outputTokens: 7,
      totalTokens: 18,
      model: "fake-test-model",
      providerResponseId: "fake-resp-obs-b-1",
    },
    toolRounds: 1,
    toolCalls: 3,
    limitReached: false,
    cognitiveRuntime: "agents" as const,
    sessionId: "sess:obs-b",
    memoryBAvailability: "unavailable" as const,
    memoryBCompactionState: "none" as const,
    memoryBCompactionDetails: null,
    selectedModelId: "fake-test-model",
    selectedReasoningEffort: "low",
    adaptiveObserve: {
      requestedMaxTurns: 8,
      effectiveMaxTurns: 8,
      strategyClass: "Focused",
      reasonCodes: ["adaptive:default"],
      floor: 4,
      ceiling: 24,
      explicitOverride: false,
    },
    continuationObserve: {
      continued: false,
      segmentsExecuted: 1,
      missionMaxTurns: 8,
      segmentMaxTurns: 8,
      allottedTurns: 8,
      stopReason: "complete",
      reasonCodes: ["continuation:none"],
    },
    ...overrides,
  };
}

describe("P6 REAL OBS Option B — CRITICAL CORRECTION (DETERMINISTIC)", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  let sessionDir: string;
  let sessionDbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    runNoraCognitiveTurnMock.mockReset();
    setConversationProviderForTests(null);
    clearCognitiveExecutionReceiptRegistryForTests();
    sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-obs-b-corr-"));
    sessionDbPath = path.join(sessionDir, "session.sqlite");
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    clearCognitiveExecutionReceiptRegistryForTests();
    vi.restoreAllMocks();
    if (previousFake === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    }
    fs.rmSync(sessionDir, { recursive: true, force: true });
  });

  it("T01/T05/T06/T07/T08/T19 — Fake receipt not REAL; metadata projected; DTO additive", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "Guided Document Review.",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("ok");
    const receipt = result.cognitiveExecutionReceipt!;
    expect(receipt.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
    expect(receipt.realProofStatus).toBe("NOT_PROVEN");
    expect(receipt.proofClassification).toBe("DETERMINISTIC");
    expect(receipt.providerIdentity).toBe("fake");
    expect(receipt.selectedModelId).toBe("fake-test-model");
    expect(receipt.observedModel).toBe("fake-test-model");
    expect(receipt.selectedReasoningEffort).toBe("low");
    expect(receipt.usage.totalTokens).toBe(18);
    expect(receipt.adaptiveObserve?.effectiveMaxTurns).toBe(8);
    expect(receipt.continuationObserve?.continued).toBe(false);
    expect(receipt.productTerminalStatus).toBe("ok");
    expect(receipt.conservation.durableLedger).toBe("not_authorized_candidate");
    expect(receipt.conservation.processLocal).toBe("remembered");
    expect(result.model).toBe("fake-test-model");
    expect(result.toolCalls).toBe(3);
  });

  it("T02 — synthetic OpenAI-shaped id never REAL / never PROVIDER_CONFIRMED", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:synth",
      projectId: "prj:obs-b",
      presentation: "openai_live",
      productTerminalStatus: "ok",
      turn: {
        usage: {
          inputTokens: 2,
          outputTokens: 2,
          totalTokens: 4,
          model: "gpt-6-luna",
          providerResponseId: "resp_det_synthetic_not_real",
        },
        toolCalls: 1,
        limitReached: false,
        cognitiveRuntime: "agents",
        selectedModelId: "gpt-6-luna",
        selectedReasoningEffort: "high",
      },
    });
    expect(receipt.providerResponseObservation).toBe(
      "RUNNER_RESPONSE_ID_OBSERVED",
    );
    expect(receipt.realProofStatus).toBe("NOT_PROVEN");
    expect(receipt.proofClassification).toBe("DETERMINISTIC");
    expect(JSON.stringify(receipt)).not.toContain("PROVIDER_CONFIRMED");
  });

  it("T03 — null providerResponseId ⇒ NOT_OBSERVED", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:null",
      projectId: "prj:obs-b",
      presentation: "openai_live",
      productTerminalStatus: "ok",
      turn: {
        usage: {
          inputTokens: null,
          outputTokens: null,
          totalTokens: null,
          model: "gpt-6-luna",
          providerResponseId: null,
        },
        toolCalls: 0,
        limitReached: false,
        cognitiveRuntime: "agents",
        selectedModelId: "gpt-6-luna",
        selectedReasoningEffort: "medium",
      },
    });
    expect(receipt.providerResponseId).toBeNull();
    expect(receipt.providerResponseObservation).toBe("NOT_OBSERVED");
    expect(receipt.realProofStatus).toBe("NOT_PROVEN");
    expect(receipt.providerConfigured).toBe(true);
  });

  it("T04 — Runner id observed ≠ REAL PROVEN (orchestrate path)", async () => {
    // Force openai_live presentation via env/provider resolution: product uses
    // Fake ConversationProvider when OPS1_CONVERSATION_PROVIDER=fake → test_provider.
    // Builder-level observation path covered in T02; here Fake remains Fake.
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        usage: {
          inputTokens: 1,
          outputTokens: 1,
          totalTokens: 2,
          model: "fake-test-model",
          providerResponseId: "resp_looks_like_openai_but_fake_path",
        },
      }),
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "observe id",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    // presentation test_provider ⇒ Fake wins over id shape
    expect(result.presentation).toBe("test_provider");
    expect(result.cognitiveExecutionReceipt!.providerResponseObservation).toBe(
      "FAKE_DETERMINISTIC",
    );
    expect(result.cognitiveExecutionReceipt!.realProofStatus).toBe("NOT_PROVEN");
  });

  it("T09 — incomplete status on receipt", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        text: "Model-turn budget reached (maxTurns).",
        limitReached: true,
      }),
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "budget probe",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("incomplete");
    expect(result.cognitiveExecutionReceipt!.productTerminalStatus).toBe(
      "incomplete",
    );
  });

  it("T10 — cognitive_stop status on receipt", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        text: "blocked by Cognitive STOP",
        contradictionDisposition: {
          disposition: "evidence_backed",
          disclosure: "contradiction",
          acceptedEvidenceIds: ["ev:1"],
          acceptedSourceIds: ["src:a"],
          insufficiencyReasons: [],
        },
        cognitiveStopDecision: {
          progression: "cognitive_stop",
          outcome: "COGNITIVE_STOP",
          cognitiveStop: true,
          anatomy: {
            reason: "premise invalidated",
            contradictionEvidenceIds: ["ev:1"],
            sourceIds: ["src:a"],
            governingPremise: "X",
            nextAction: "replan",
          },
          surfacedDisposition: "evidence_backed",
          allowsSilentSuccess: false,
        },
      }),
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "stop probe",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("cognitive_stop");
    expect(result.cognitiveExecutionReceipt!.productTerminalStatus).toBe(
      "cognitive_stop",
    );
  });

  it("T11 — provider_error conserves honest failure receipt", async () => {
    runNoraCognitiveTurnMock.mockRejectedValue(new Error("FAKE_PROVIDER_ERROR"));
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "error probe",
      sessionDbPath,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("provider_error");
    expect(result.cognitiveExecutionReceipt!.productTerminalStatus).toBe(
      "provider_error",
    );
    expect(result.cognitiveExecutionReceipt!.providerResponseId).toBeNull();
    expect(result.cognitiveExecutionReceipt!.realProofStatus).toBe("NOT_PROVEN");
  });

  it("T12 — abort/stopped path projects stopped receipt", async () => {
    const { NoraTurnAbortedError } = await import(
      "@/lib/nora-cognitive-runtime/noraTurnAbort"
    );
    runNoraCognitiveTurnMock.mockRejectedValue(new NoraTurnAbortedError());
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "abort probe",
      sessionDbPath,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("stopped");
    expect(result.cognitiveExecutionReceipt!.productTerminalStatus).toBe(
      "stopped",
    );
  });

  it("T13 — conservation remember failure does not invent provider_error", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    setCognitiveExecutionReceiptRememberForTests(() => {
      throw new Error("simulated registry failure");
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "capture fail probe",
      sessionDbPath,
    });
    setCognitiveExecutionReceiptRememberForTests(null);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("ok");
    expect(result.status).not.toBe("provider_error");
    expect(result.cognitiveExecutionReceipt!.productTerminalStatus).toBe("ok");
    expect(result.cognitiveExecutionReceipt!.conservation.processLocal).toBe(
      "failed",
    );
    expect(result.cognitiveExecutionReceipt!.conservation.ok).toBe(false);
    expect(result.cognitiveExecutionReceipt!.conservation.failureCode).toBe(
      "PROCESS_LOCAL_REMEMBER_FAILED",
    );
    expect(
      result.cognitiveExecutionReceipt!.conservation.durableLedger,
    ).toBe("not_authorized_candidate");
  });

  it("T14 — durable ledger not authorized; honest conservation status", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "durable disabled",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(
      result.cognitiveExecutionReceipt!.conservation.durableLedger,
    ).toBe("not_authorized_candidate");
    // No Product JSONL write helpers remain on the module surface for Product path.
    expect(
      Object.keys(receiptMod).includes("appendCognitiveExecutionReceiptToP6Ledger"),
    ).toBe(false);
  });

  it("T15 — process-local retrieval after turn (not durable Evidence)", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "retrieve probe",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const ltu = result.logicalTurnId!;
    const fromRegistry = getCognitiveExecutionReceipt(ltu);
    expect(fromRegistry).not.toBeNull();
    expect(fromRegistry!.logicalTurnId).toBe(ltu);
    expect(fromRegistry!.conservation.processLocal).toBe("remembered");
    expect(fromRegistry!.conservation.durableLedger).toBe(
      "not_authorized_candidate",
    );
  });

  it("T16 — durable post-restart retrieval NOT authorized (candidate gap)", () => {
    // Explicit non-claim: without Morris persistence GO, durable retrieval is N/A.
    const receipt = projectAndConserveCognitiveExecutionReceipt({
      logicalTurnId: "ltu:nodurable",
      projectId: "prj:obs-b",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: baseTurn() as never,
    });
    expect(receipt.conservation.durableLedger).toBe("not_authorized_candidate");
    clearCognitiveExecutionReceiptRegistryForTests();
    expect(getCognitiveExecutionReceipt("ltu:nodurable")).toBeNull();
  });

  it("T17 — isolation by logicalTurnId", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    const a = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "turn a",
      sessionDbPath,
    });
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        usage: {
          inputTokens: 1,
          outputTokens: 1,
          totalTokens: 2,
          model: "fake-test-model",
          providerResponseId: "fake-resp-obs-b-2",
        },
      }),
    );
    const b = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "turn b",
      sessionDbPath,
    });
    expect(a.ok && b.ok).toBe(true);
    if (!a.ok || !b.ok) return;
    expect(a.logicalTurnId).not.toBe(b.logicalTurnId);
    expect(getCognitiveExecutionReceipt(a.logicalTurnId!)!.providerResponseId).toBe(
      "fake-resp-obs-b-1",
    );
    expect(getCognitiveExecutionReceipt(b.logicalTurnId!)!.providerResponseId).toBe(
      "fake-resp-obs-b-2",
    );
  });

  it("T18 — no secrets / prompt bodies in receipt", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "secret probe with sk-test-should-not-echo",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const json = JSON.stringify(result.cognitiveExecutionReceipt);
    expect(json).not.toContain("sk-test");
    expect(json).not.toContain("authorization");
    expect(json).not.toContain("OPENAI_API_KEY");
  });

  it("T20 — no routing/FinOps/eval pin mutation by Option B", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "authority probe",
      sessionDbPath,
    });
    expect(runNoraCognitiveTurnMock).toHaveBeenCalledTimes(1);
    const call = runNoraCognitiveTurnMock.mock.calls[0]?.[0] as {
      evalModelReasoningControl?: unknown;
    };
    expect(call.evalModelReasoningControl).toBeUndefined();
  });
});
