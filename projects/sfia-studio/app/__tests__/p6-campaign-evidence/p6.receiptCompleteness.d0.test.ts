/**
 * Option B — complete CognitiveExecutionReceipt → ledger conservation (DET).
 * Oracles C01–C24. ZERO REAL.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  buildCognitiveExecutionReceipt,
  clearCognitiveExecutionReceiptRegistryForTests,
  type CognitiveExecutionReceipt,
} from "@/features/project-assistant/cognitiveExecutionReceipt";
import {
  P6_CAMPAIGN_ID,
  P6_LEDGER_CONCURRENCY_MODEL,
  P6_QA_COLLECTION_SEAM_STATUS,
  P6_RECEIPT_LEDGER_SCHEMA_VERSION,
  appendP6EvidenceLedgerRow,
  captureCognitiveExecutionReceiptToP6Ledger,
  collectP6ProductTurnEvidence,
  diffReceiptAgainstLedgerEntry,
  ensureP6EvidenceLedger,
  findP6EvidenceLedgerRowsByRunId,
  forceRemoveOrphanP6EvidenceLedgerLock,
  readP6EvidenceLedger,
  resolveP6EvidenceLedgerPath,
  withP6EvidenceLedgerLock,
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

function richTurn(overrides: Record<string, unknown> = {}) {
  return {
    text: "rich",
    usage: {
      inputTokens: 11,
      outputTokens: 7,
      totalTokens: 18,
      model: "fake-observed-model",
      providerResponseId: "fake-resp-complete-1",
    },
    toolRounds: 1,
    toolCalls: 2,
    limitReached: false,
    cognitiveRuntime: "agents" as const,
    sessionId: "sess:complete",
    memoryBAvailability: "unavailable" as const,
    memoryBCompactionState: "none" as const,
    memoryBCompactionDetails: null,
    selectedModelId: "fake-selected-model",
    selectedReasoningEffort: "medium",
    adaptiveObserve: {
      requestedMaxTurns: 8,
      effectiveMaxTurns: 6,
      strategyClass: "Focused",
      reasonCodes: ["adaptive:focused", "budget:trim"],
      floor: 4,
      ceiling: 10,
      explicitOverride: false,
    },
    continuationObserve: {
      continued: true,
      segmentsExecuted: 2,
      missionMaxTurns: 8,
      segmentMaxTurns: 4,
      allottedTurns: 8,
      stopReason: "segment_budget",
      reasonCodes: ["cont:segment"],
    },
    ...overrides,
  };
}

describe("P6 receipt completeness (DET)", () => {
  let workspaceRoot: string;
  let ledgerPath: string;
  let sessionDbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:p6-complete",
        name: "Complete",
        shortReference: "CMP",
        objective: "complete",
        contextSummary: "c",
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
        id: "lps:c",
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
    runNoraCognitiveTurnMock.mockReset();
    setConversationProviderForTests(null);
    clearCognitiveExecutionReceiptRegistryForTests();
    workspaceRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-comp-"));
    ledgerPath = resolveP6EvidenceLedgerPath(workspaceRoot);
    sessionDbPath = path.join(workspaceRoot, "session.sqlite");
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    clearCognitiveExecutionReceiptRegistryForTests();
    fs.rmSync(workspaceRoot, { recursive: true, force: true });
  });

  function captureRich(
    runId: string,
    turnOverrides: Record<string, unknown> = {},
    receiptOverrides: Partial<{
      productTerminalStatus: "ok" | "provider_error";
      presentation: "test_provider" | "openai_live";
    }> = {},
  ): {
    receipt: CognitiveExecutionReceipt;
    result: ReturnType<typeof captureCognitiveExecutionReceiptToP6Ledger>;
  } {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: `ltu:${runId}`,
      projectId: "prj:p6-complete",
      presentation: receiptOverrides.presentation ?? "test_provider",
      productTerminalStatus: receiptOverrides.productTerminalStatus ?? "ok",
      turn: richTurn(turnOverrides) as never,
    });
    const result = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId,
      scenarioId: "P6-MIN-09",
      absolutePath: ledgerPath,
    });
    return { receipt, result };
  }

  it("C01–C12 — complete field conservation after close/reopen", () => {
    const { receipt, result } = captureRich("P6-DET-COMPLETE-01");
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.entry.ledgerSchemaVersion).toBe(P6_RECEIPT_LEDGER_SCHEMA_VERSION);
    expect(result.entry.selectedModelId).toBe("fake-selected-model");
    expect(result.entry.observedModel).toBe("fake-observed-model");
    expect(result.entry.selectedReasoningEffort).toBe("medium");
    expect(result.entry.usage).toEqual({
      inputTokens: 11,
      outputTokens: 7,
      totalTokens: 18,
    });
    expect(result.entry.adaptiveObserve).toEqual(receipt.adaptiveObserve);
    expect(result.entry.continuationObserve).toEqual(receipt.continuationObserve);
    expect(result.entry.toolCalls).toBe(2);
    expect(result.entry.limitReached).toBe(false);
    expect(result.entry.productTerminalStatus).toBe("ok");
    expect(result.entry.runId).not.toBe(result.entry.logicalTurnId);

    const reopened = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(reopened.integrityPass).toBe(true);
    const entry = reopened.rows.find((r) => r.runId === "P6-DET-COMPLETE-01");
    expect(entry).toBeTruthy();
    const mismatches = diffReceiptAgainstLedgerEntry(receipt, entry!);
    expect(mismatches).toEqual([]);
  });

  it("C05 — null tokens stay null (never coerced to 0)", () => {
    const { result } = captureRich("P6-DET-NULL-TOKENS", {
      usage: {
        inputTokens: null,
        outputTokens: null,
        totalTokens: null,
        model: null,
        providerResponseId: null,
      },
      selectedModelId: null,
      selectedReasoningEffort: null,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.entry.usage).toEqual({
      inputTokens: null,
      outputTokens: null,
      totalTokens: null,
    });
    expect(result.entry.providerResponseId).toBeNull();
    expect(result.entry.selectedModelId).toBeNull();
  });

  it("C08 — continuationObserve null conserved", () => {
    const { receipt, result } = captureRich("P6-DET-NO-CONT", {
      continuationObserve: null,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(receipt.continuationObserve).toBeNull();
    expect(result.entry.continuationObserve).toBeNull();
    const reopened = findP6EvidenceLedgerRowsByRunId("P6-DET-NO-CONT", {
      absolutePath: ledgerPath,
    });
    expect(reopened.matches[0]?.continuationObserve).toBeNull();
  });

  it("C13 — historical campaign lines preserved beside v2 receipt", () => {
    appendP6EvidenceLedgerRow(
      {
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-HIST-OLD",
        ok: false,
        hardPass: false,
      },
      { absolutePath: ledgerPath },
    );
    captureRich("P6-DET-BESIDE-HIST");
    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(read.rows.some((r) => r.runId === "P6-HIST-OLD")).toBe(true);
    expect(read.rows.some((r) => r.runId === "P6-DET-BESIDE-HIST")).toBe(true);
    expect(read.integrityPass).toBe(true);
  });

  it("C14 — incomplete receipt schema rejected at write boundary", () => {
    const incomplete = appendP6EvidenceLedgerRow(
      {
        kind: "cognitive_execution_receipt",
        campaignId: P6_CAMPAIGN_ID,
        runId: "P6-INCOMPLETE",
        scenarioId: "P6-MIN-09",
        logicalTurnId: "ltu:incomplete",
        projectId: "prj:x",
        providerResponseObservation: "FAKE_DETERMINISTIC",
        productRealProofStatus: "NOT_PROVEN",
        realBoundaryClaim: "NOT_CLAIMED",
        captureStatus: "CAPTURED",
      },
      { absolutePath: ledgerPath },
    );
    expect(incomplete.ok).toBe(false);
    if (!incomplete.ok) expect(incomplete.code).toBe("RECEIPT_SCHEMA");
  });

  it("C15/C16 — Fake / Runner id never REAL / PROVIDER_CONFIRMED", () => {
    const { result: fake } = captureRich("P6-DET-FAKE");
    expect(fake.ok).toBe(true);
    if (!fake.ok) return;
    expect(fake.entry.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
    expect(fake.entry.productRealProofStatus).toBe("NOT_PROVEN");
    expect(fake.entry.realBoundaryClaim).toBe("NOT_CLAIMED");

    const synth = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:synth-c",
      projectId: "prj:p6-complete",
      presentation: "openai_live",
      productTerminalStatus: "ok",
      turn: richTurn({
        usage: {
          inputTokens: 1,
          outputTokens: 1,
          totalTokens: 2,
          model: "gpt-6-luna",
          providerResponseId: "resp_det_not_real",
        },
        selectedModelId: "gpt-6-luna",
      }) as never,
    });
    const captured = captureCognitiveExecutionReceiptToP6Ledger({
      receipt: synth,
      runId: "P6-DET-SYNTH-C",
      scenarioId: "P6-MIN-09",
      absolutePath: ledgerPath,
    });
    expect(captured.ok).toBe(true);
    if (!captured.ok) return;
    expect(captured.entry.providerResponseObservation).toBe(
      "RUNNER_RESPONSE_ID_OBSERVED",
    );
    expect(JSON.stringify(captured.entry)).not.toContain("PROVIDER_CONFIRMED");
  });

  it("C17/C22/C23 — QA seam DET; capture ≠ provider_error; SQLite unchanged", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(richTurn());
    const dto = await orchestrateProjectAssistantTurn({
      projectId: "prj:p6-complete",
      content: "completeness via seam",
      sessionDbPath,
    });
    expect(dto.ok).toBe(true);
    if (!dto.ok) return;
    const before = fs.existsSync(sessionDbPath)
      ? fs.readFileSync(sessionDbPath)
      : null;
    const collected = collectP6ProductTurnEvidence({
      productTurnResult: dto,
      runId: "P6-DET-SEAM-COMPLETE",
      scenarioId: "P6-MIN-09",
      absolutePath: ledgerPath,
    });
    expect(collected.ok).toBe(true);
    if (!collected.ok) return;
    expect(dto.status).toBe("ok");
    expect(P6_QA_COLLECTION_SEAM_STATUS.deterministicProven).toBe(true);
    expect(P6_QA_COLLECTION_SEAM_STATUS.operationalCampaignWiring).toBe(
      "PENDING",
    );
    const mismatches = diffReceiptAgainstLedgerEntry(
      dto.cognitiveExecutionReceipt!,
      collected.entry,
    );
    expect(mismatches).toEqual([]);
    if (before) {
      expect(Buffer.compare(fs.readFileSync(sessionDbPath), before)).toBe(0);
    }
  });

  it("C18 — degraded ledger refuses writes", () => {
    ensureP6EvidenceLedger({ absolutePath: ledgerPath });
    fs.writeFileSync(
      ledgerPath,
      `${JSON.stringify({
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-KEEP",
      })}\nBROKEN\n`,
      "utf8",
    );
    const before = fs.readFileSync(ledgerPath, "utf8");
    const blocked = captureRich("P6-DET-AFTER-DEG");
    expect(blocked.result.ok).toBe(false);
    if (!blocked.result.ok) {
      expect(blocked.result.status).toBe("integrity_blocks_capture");
    }
    expect(fs.readFileSync(ledgerPath, "utf8")).toBe(before);
  });

  it("C19/C24/R12 — duplicate skip returns persisted; FAILED preserved", () => {
    const fail = captureRich(
      "P6-DET-FAIL-KEEP",
      {
        usage: {
          inputTokens: null,
          outputTokens: null,
          totalTokens: null,
          model: null,
          providerResponseId: null,
        },
      },
      { productTerminalStatus: "provider_error" },
    );
    expect(fail.result.ok).toBe(true);
    const skip = captureCognitiveExecutionReceiptToP6Ledger({
      receipt: fail.receipt,
      runId: "P6-DET-FAIL-KEEP",
      scenarioId: "P6-MIN-09",
      absolutePath: ledgerPath,
      onDuplicate: "skip",
    });
    expect(skip.ok).toBe(true);
    if (!skip.ok) return;
    expect(skip.status).toBe("duplicate_skipped");
    expect(skip.entry.productTerminalStatus).toBe("provider_error");
    expect(skip.entry.capturedAt).toBe(
      fail.result.ok ? fail.result.entry.capturedAt : null,
    );
  });

  it("R13 — duplicate skip with different tokens → conflict", () => {
    const first = captureRich("P6-R13-TOKENS");
    expect(first.result.ok).toBe(true);
    const altered = buildCognitiveExecutionReceipt({
      logicalTurnId: first.receipt.logicalTurnId,
      projectId: first.receipt.projectId,
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: richTurn({
        usage: {
          inputTokens: 999,
          outputTokens: 7,
          totalTokens: 1006,
          model: "fake-observed-model",
          providerResponseId: "fake-resp-complete-1",
        },
      }) as never,
    });
    const conflict = captureCognitiveExecutionReceiptToP6Ledger({
      receipt: altered,
      runId: "P6-R13-TOKENS",
      scenarioId: "P6-MIN-09",
      absolutePath: ledgerPath,
      onDuplicate: "skip",
    });
    expect(conflict.ok).toBe(false);
    if (!conflict.ok) expect(conflict.status).toBe("duplicate_conflict");
  });

  it("R14 — duplicate skip with different budget → conflict", () => {
    captureRich("P6-R14-BUDGET");
    const altered = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:P6-R14-BUDGET",
      projectId: "prj:p6-complete",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: richTurn({
        adaptiveObserve: {
          requestedMaxTurns: 99,
          effectiveMaxTurns: 6,
          strategyClass: "Focused",
          reasonCodes: ["adaptive:focused"],
          floor: 4,
          ceiling: 10,
          explicitOverride: false,
        },
      }) as never,
    });
    const conflict = captureCognitiveExecutionReceiptToP6Ledger({
      receipt: altered,
      runId: "P6-R14-BUDGET",
      scenarioId: "P6-MIN-09",
      absolutePath: ledgerPath,
      onDuplicate: "skip",
    });
    expect(conflict.ok).toBe(false);
    if (!conflict.ok) expect(conflict.status).toBe("duplicate_conflict");
  });

  it("R15 — duplicate skip with different model → conflict", () => {
    captureRich("P6-R15-MODEL");
    const altered = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:P6-R15-MODEL",
      projectId: "prj:p6-complete",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: richTurn({ selectedModelId: "other-model" }) as never,
    });
    const conflict = captureCognitiveExecutionReceiptToP6Ledger({
      receipt: altered,
      runId: "P6-R15-MODEL",
      scenarioId: "P6-MIN-09",
      absolutePath: ledgerPath,
      onDuplicate: "skip",
    });
    expect(conflict.ok).toBe(false);
    if (!conflict.ok) expect(conflict.status).toBe("duplicate_conflict");
  });

  it("C20 — concurrency model is MONO_WRITER", () => {
    expect(P6_LEDGER_CONCURRENCY_MODEL).toBe("MONO_WRITER");
  });

  it("C21 — aged lock is NOT auto-removed; force-remove is explicit", () => {
    ensureP6EvidenceLedger({ absolutePath: ledgerPath });
    const lockPath = `${ledgerPath}.lock`;
    fs.writeFileSync(lockPath, JSON.stringify({ pid: 1, acquiredAt: "2000-01-01" }));
    // Make mtime ancient
    const ancient = new Date("2000-01-01T00:00:00Z");
    fs.utimesSync(lockPath, ancient, ancient);
    const blocked = withP6EvidenceLedgerLock(ledgerPath, () => "nope");
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) expect(blocked.code).toBe("LOCK_CONTENTION");
    expect(fs.existsSync(lockPath)).toBe(true);
    const forced = forceRemoveOrphanP6EvidenceLedgerLock(ledgerPath);
    expect(forced.ok).toBe(true);
    if (forced.ok) expect(forced.removed).toBe(true);
    const acquired = withP6EvidenceLedgerLock(ledgerPath, () => "ok");
    expect(acquired.ok).toBe(true);
  });
});
