/**
 * OBS-04 — DET proof that the QA collection seam (not raw helper) captures.
 * Mirrors historical harness post-turn collection without invoking REAL tests.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import { clearCognitiveExecutionReceiptRegistryForTests } from "@/features/project-assistant/cognitiveExecutionReceipt";
import {
  collectP6ProductTurnEvidence,
  findP6EvidenceLedgerRowsByRunId,
  resolveP6EvidenceLedgerPath,
} from "@/lib/p6-campaign-evidence";

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

describe("P6 QA collection seam (DET)", () => {
  let workspaceRoot: string;
  let ledgerPath: string;
  let sessionDbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:p6-seam",
        name: "Seam",
        shortReference: "SEA",
        objective: "QA seam",
        contextSummary: "seam",
        criticality: "STANDARD",
        constraints: [],
        localMode: true,
        source: "REAL_LOCAL_CORE",
        fixture: false,
      },
      doctrine: {
        id: "pkg:studio-v3-oa",
        version: "1.0.0",
        digest: "d",
        status: "RESOLVED",
      },
      livingState: {
        id: "lps:seam",
        version: 1,
        createdAt: "2026-10-13T00:00:00.000Z",
      },
      readiness: {
        status: "NOT_READY",
        hard: "OPEN",
        tA6: "INCOMPLETE",
        iam: "NOT_SELECTED",
        productPersistence: "SQLITE_OA_PRODUCT_STORE",
        realAgentExecution: "DISABLED",
        delivery: "NOT_AUTHORIZED",
        cutover: "NOT_AUTHORIZED",
        runReady: false,
        productReady: false,
      },
      disclosures: {
        runtimeMode: "LOCAL_PROCESS",
        persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
        agentExecution: "DISABLED",
        iam: "NOT_SELECTED",
        productPersistence: "SQLITE_OA_PRODUCT_STORE",
        delivery: "NOT_AUTHORIZED",
        cutover: "NOT_AUTHORIZED",
        localDataVolatile: true,
        restartMayLoseState: true,
        projectLpsRestartSafe: true,
        cycleInstanceRestartSafe: true,
        humanDecisionRestartSafe: true,
        executionContractRestartSafe: true,
        messages: [],
      },
    });
    runNoraCognitiveTurnMock.mockResolvedValue({
      text: "seam",
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "fake-seam-1",
      },
      toolRounds: 0,
      toolCalls: 0,
      limitReached: false,
      cognitiveRuntime: "agents",
      sessionId: "sess:seam",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
      memoryBCompactionDetails: null,
      selectedModelId: "fake-test-model",
      selectedReasoningEffort: "low",
      adaptiveObserve: {
        requestedMaxTurns: 8,
        effectiveMaxTurns: 8,
        strategyClass: "Focused",
        reasonCodes: [],
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
        reasonCodes: [],
      },
    });
    setConversationProviderForTests(null);
    clearCognitiveExecutionReceiptRegistryForTests();
    workspaceRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-seam-"));
    ledgerPath = resolveP6EvidenceLedgerPath(workspaceRoot);
    sessionDbPath = path.join(workspaceRoot, "session.sqlite");
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    clearCognitiveExecutionReceiptRegistryForTests();
    fs.rmSync(workspaceRoot, { recursive: true, force: true });
  });

  it("harness collection point calls capture and persists findable runId", async () => {
    const productTurnResult = await orchestrateProjectAssistantTurn({
      projectId: "prj:p6-seam",
      content: "qa collection seam",
      sessionDbPath,
    });
    expect(productTurnResult.ok).toBe(true);
    if (!productTurnResult.ok) return;

    // Historical harness pattern: after Product turn, collect evidence.
    const collected = collectP6ProductTurnEvidence({
      productTurnResult,
      runId: "P6-QA-SEAM-RUN-01",
      scenarioId: "P6-MIN-09",
      absolutePath: ledgerPath,
    });
    expect(collected.ok).toBe(true);
    if (!collected.ok) return;
    expect(collected.status).toBe("appended");

    const found = findP6EvidenceLedgerRowsByRunId("P6-QA-SEAM-RUN-01", {
      absolutePath: ledgerPath,
    });
    expect(found.integrityPass).toBe(true);
    expect(found.matches).toHaveLength(1);
    expect(found.matches[0]?.logicalTurnId).toBe(
      productTurnResult.logicalTurnId,
    );
    expect(found.matches[0]?.kind).toBe("cognitive_execution_receipt");
  });
});
