/**
 * P6 O2 — Linked Evidence Operational Wiring (DET).
 * Oracles O2-01 … O2-36. ZERO REAL. NO harness REAL execution.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  buildCognitiveExecutionReceipt,
  clearCognitiveExecutionReceiptRegistryForTests,
} from "@/features/project-assistant/cognitiveExecutionReceipt";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  P6_CAMPAIGN_ID,
  P6_EVIDENCE_LEDGER_RELATIVE_PATH,
  P6_LEDGER_CONCURRENCY_MODEL,
  P6_QA_COLLECTION_SEAM_STATUS,
  appendValidatedP6CampaignLedgerRow,
  captureCognitiveExecutionReceiptToP6Ledger,
  collectP6ProductTurnEvidence,
  diffReceiptAgainstLedgerEntry,
  durableLedgerContentEquivalent,
  findP6EvidenceLedgerRowsByLinkedQaRunId,
  findP6EvidenceLedgerRowsByRunId,
  isP6HistoricalReadableCampaignKind,
  isP6O2QaLinkTargetEligible,
  readP6EvidenceLedger,
  resolveP6EvidenceLedgerPath,
  resolveP6O2LinkedEvidencePair,
  validateLedgerRowForAppend,
  wireP6O2OperationalEvidence,
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

/** Expected SHA of the real historical archive when present (D1). Not a CI path dependency. */
const ARCHIVE_SHA_EXPECTED =
  "704531851d7102032c832d4d123abbddfc45d0b41d6afb6548c4a1f0e1f4b827";

/**
 * Optional real-archive path — env only. Never hardcode user home / machine paths
 * into portable DET assertions (CP01-01).
 */
function resolveOptionalRealHistoricalArchivePath(): string | null {
  const fromEnv = process.env.SFIA_P6_HISTORICAL_LEDGER_PATH;
  if (typeof fromEnv === "string" && fromEnv.trim().length > 0) {
    return fromEnv.trim();
  }
  return null;
}

function projectRuntime(projectId = "prj:p6-o2") {
  return {
    ok: true as const,
    project: {
      projectId,
      name: "O2",
      shortReference: "O2",
      objective: "o2 wiring",
      contextSummary: "o2",
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
      id: "lps:o2",
      version: 1,
      createdAt: "2026-10-14T00:00:00.000Z",
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
  };
}

function fakeTurn(overrides: Record<string, unknown> = {}) {
  return {
    text: "o2 det turn",
    usage: {
      inputTokens: 3,
      outputTokens: 2,
      totalTokens: 5,
      model: "fake-o2-model",
      providerResponseId: "fake-o2-resp-1",
    },
    toolRounds: 0,
    toolCalls: 0,
    limitReached: false,
    cognitiveRuntime: "agents" as const,
    sessionId: "sess:o2",
    memoryBAvailability: "unavailable" as const,
    memoryBCompactionState: "none" as const,
    memoryBCompactionDetails: null,
    selectedModelId: "fake-o2-model",
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
    ...overrides,
  };
}

function qaRow(runId: string, scenarioId = "P6-O2-DET-01"): Record<string, unknown> {
  return {
    kind: "p6_campaign_run",
    campaignId: P6_CAMPAIGN_ID,
    runId,
    scenarioId,
    verdict: "PASS",
    ok: true,
    hardPass: true,
    workloadId: "WL-O2-DET",
    executionMode: "DETERMINISTIC",
    proofTarget: "O2_LINKED_EVIDENCE",
    capturedAt: "2026-10-14T00:00:00.000Z",
    reserves: ["DET_SCOPE_ONLY"],
  };
}

async function sha256File(filePath: string): Promise<string> {
  const { createHash } = await import("node:crypto");
  const buf = fs.readFileSync(filePath);
  return createHash("sha256").update(buf).digest("hex");
}

describe("P6 O2 operational wiring (DET)", () => {
  let workspaceRoot: string;
  let ledgerPath: string;
  let sessionDbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.OPENAI_API_KEY;
    delete process.env.SFIA_P6_REAL_GATE;
    getProjectRuntimeActionMock.mockResolvedValue(projectRuntime());
    runNoraCognitiveTurnMock.mockResolvedValue(fakeTurn());
    setConversationProviderForTests(null);
    clearCognitiveExecutionReceiptRegistryForTests();
    workspaceRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-o2-"));
    ledgerPath = resolveP6EvidenceLedgerPath(workspaceRoot);
    sessionDbPath = path.join(workspaceRoot, "session.sqlite");
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    clearCognitiveExecutionReceiptRegistryForTests();
    fs.rmSync(workspaceRoot, { recursive: true, force: true });
  });

  it("O2-01…O2-09 / O2-35 / O2-36 — Product path WITH receipt → QA + linked cognitive", async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetRuntimeApplicationServiceForTests();
    // Use real OA project load for F2 (mock would hide createProject).
    const actualActions = await vi.importActual<
      typeof import("@/lib/vertical-slice-runtime/actions")
    >("@/lib/vertical-slice-runtime/actions");
    getProjectRuntimeActionMock.mockImplementation((projectId: string) =>
      actualActions.getProjectRuntimeAction(projectId),
    );

    const oaDb = path.join(workspaceRoot, "oa-product.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: oaDb,
      auditMode: "noop",
      nowIso: "2026-10-14T00:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Projet O2 Wiring",
      objective: "O2 DET linked evidence.",
      context: "Contexte O2 operational wiring.",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "O2W",
      idempotencyKey: `idem:o2-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("O2 PATH A createProject failed");
    const projectId = created.projectId;

    const provider = new FakeConversationProvider();
    const product = await orchestrateAssistantSend({
      projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
      sessionDbPath,
      provider,
    });
    expect(
      product.ok,
      !product.ok
        ? `Product path failed: status=${product.status} code=${"code" in product ? product.code : "?"}`
        : undefined,
    ).toBe(true);
    if (!product.ok) return;
    expect(product.cognitiveExecutionReceipt).toBeDefined();
    // Existing Product surface: F2 → f1_informative when marker present.
    expect(product.f2?.turnKind).toBe("f1_informative");
    const receipt = product.cognitiveExecutionReceipt!;
    // Restore default mock for subsequent assertions in this file's other tests.
    getProjectRuntimeActionMock.mockResolvedValue(projectRuntime());
    resetRuntimeApplicationServiceForTests();

    const qaRunId = "P6-O2-QA-RUN-PATH-A";
    const cognitiveRunId = "P6-O2-COG-RUN-PATH-A";
    expect(qaRunId).not.toBe(cognitiveRunId);
    expect(cognitiveRunId).not.toBe(receipt.logicalTurnId);

    const wired = wireP6O2OperationalEvidence({
      qaRow: qaRow(qaRunId),
      productTurnResult: product,
      cognitiveRunId,
      absolutePath: ledgerPath,
    });
    expect(wired.qa.ok).toBe(true);
    expect(wired.cognitive.ok).toBe(true);
    if (!wired.cognitive.ok) return;
    expect(wired.cognitive.status).toBe("appended");
    if (wired.cognitive.status !== "appended") return;

    // O2-07 — QA persisted before receipt (file order).
    const raw = fs.readFileSync(ledgerPath, "utf8").trim().split("\n");
    expect(raw).toHaveLength(2);
    const first = JSON.parse(raw[0]!) as Record<string, unknown>;
    const second = JSON.parse(raw[1]!) as Record<string, unknown>;
    expect(first.runId).toBe(qaRunId);
    expect(first.kind).toBe("p6_campaign_run");
    expect(second.runId).toBe(cognitiveRunId);
    expect(second.kind).toBe("cognitive_execution_receipt");
    expect(second.linkedQaRunId).toBe(qaRunId);

    // O2-08 readback
    const pair = resolveP6O2LinkedEvidencePair(qaRunId, {
      absolutePath: ledgerPath,
    });
    expect(pair.ok).toBe(true);
    if (!pair.ok) return;
    expect(pair.integrityPass).toBe(true);
    expect(pair.cardinality).toBe("qa_plus_one_receipt");
    expect(pair.qaRow.campaignId).toBe(P6_CAMPAIGN_ID);
    expect(pair.qaRow.scenarioId).toBe("P6-O2-DET-01");
    expect(pair.receiptRow?.linkedQaRunId).toBe(qaRunId);
    expect(pair.receiptRow?.scenarioId).toBe(pair.qaRow.scenarioId);
    expect(pair.receiptRow?.campaignId).toBe(pair.qaRow.campaignId);

    // O2-04 / O2-05 conservation
    expect(pair.qaRow.verdict).toBe("PASS");
    expect(pair.qaRow.hardPass).toBe(true);
    const mismatches = diffReceiptAgainstLedgerEntry(receipt, pair.receiptRow!);
    expect(mismatches).toEqual([]);

    // O2-09
    const reopened = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(reopened.integrity).toBe("HEALTHY");
    expect(reopened.integrityPass).toBe(true);
    expect(reopened.o2LinkErrors).toBe(0);

    // O2-23 Fake ≠ REAL
    expect(pair.receiptRow?.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
    expect(pair.receiptRow?.productRealProofStatus).toBe("NOT_PROVEN");
    expect(pair.receiptRow?.realBoundaryClaim).toBe("NOT_CLAIMED");
  });

  it("O2-18 / O2-19 — PATH B fail-closed WITHOUT receipt → QA only, no fabrication", async () => {
    const product = await orchestrateAssistantSend({
      projectId: "prj:p6-o2",
      content: "   ",
      sessionDbPath,
      provider: new FakeConversationProvider(),
    });
    expect(product.ok).toBe(false);
    expect(product.status).toBe("validation_error");
    expect(product.cognitiveExecutionReceipt).toBeUndefined();

    const qaRunId = "P6-O2-QA-RUN-PATH-B";
    const wired = wireP6O2OperationalEvidence({
      qaRow: {
        ...qaRow(qaRunId, "P6-O2-DET-PATH-B"),
        verdict: "FAIL_CLOSED_OBSERVED",
        ok: false,
        hardPass: false,
      },
      productTurnResult: product,
      cognitiveRunId: "P6-O2-COG-SHOULD-NOT-EXIST",
      absolutePath: ledgerPath,
    });
    expect(wired.qa.ok).toBe(true);
    expect(wired.cognitive).toEqual({
      ok: true,
      status: "qa_only_no_receipt",
    });

    const pair = resolveP6O2LinkedEvidencePair(qaRunId, {
      absolutePath: ledgerPath,
    });
    expect(pair.ok).toBe(true);
    if (!pair.ok) return;
    expect(pair.cardinality).toBe("qa_only");
    expect(pair.receiptRow).toBeNull();
    expect(pair.integrityPass).toBe(true);

    const byLink = findP6EvidenceLedgerRowsByLinkedQaRunId(qaRunId, {
      absolutePath: ledgerPath,
    });
    expect(byLink.matches).toHaveLength(0);
  });

  it("O2-10 — orphan linkedQaRunId refused at write", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:orphan",
      projectId: "prj:p6-o2",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: fakeTurn() as never,
    });
    const result = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-O2-COG-ORPHAN",
      scenarioId: "P6-O2-DET-01",
      linkedQaRunId: "P6-O2-QA-MISSING",
      absolutePath: ledgerPath,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("o2_link_rejected");
    expect(fs.existsSync(ledgerPath) ? fs.readFileSync(ledgerPath, "utf8") : "").toBe(
      "",
    );
  });

  it("O2-11 — link target wrong kind refused", () => {
    const otherReceipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:target-receipt",
      projectId: "prj:p6-o2",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: fakeTurn() as never,
    });
    // Legacy unlinked capture as a non-QA target.
    const seeded = captureCognitiveExecutionReceiptToP6Ledger({
      receipt: otherReceipt,
      runId: "P6-O2-NOT-QA",
      scenarioId: "P6-O2-DET-01",
      absolutePath: ledgerPath,
    });
    expect(seeded.ok).toBe(true);

    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:bad-kind",
      projectId: "prj:p6-o2",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: fakeTurn({ providerResponseId: "fake-o2-resp-2" }) as never,
    });
    const result = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-O2-COG-BAD-KIND",
      scenarioId: "P6-O2-DET-01",
      linkedQaRunId: "P6-O2-NOT-QA",
      absolutePath: ledgerPath,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("o2_link_rejected");
  });

  it("O2-12 / O2-13 — campaign / scenario mismatch refused", () => {
    expect(
      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-MISMATCH"), {
        absolutePath: ledgerPath,
      }).ok,
    ).toBe(true);

    // O2-12 — foreign-campaign QA row present via raw bytes (cannot append via secured writer).
    fs.appendFileSync(
      ledgerPath,
      `${JSON.stringify({
        kind: "p6_campaign_run",
        campaignId: "OTHER-CAMPAIGN",
        runId: "P6-O2-QA-OTHER-CAMP",
        scenarioId: "P6-O2-DET-01",
      })}\n`,
      "utf8",
    );

    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:mismatch",
      projectId: "prj:p6-o2",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: fakeTurn() as never,
    });
    const badScenario = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-O2-COG-BAD-SCENARIO",
      scenarioId: "P6-O2-OTHER-SCENARIO",
      linkedQaRunId: "P6-O2-QA-MISMATCH",
      absolutePath: ledgerPath,
    });
    expect(badScenario.ok).toBe(false);
    if (!badScenario.ok) {
      // Ledger may already be DEGRADED after foreign campaign raw row, or link reject.
      expect(["o2_link_rejected", "integrity_blocks_capture"]).toContain(
        badScenario.status,
      );
    }

    // Isolated scenario mismatch on HEALTHY ledger
    const cleanRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-o2-scen-"));
    const cleanLedger = resolveP6EvidenceLedgerPath(cleanRoot);
    expect(
      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-SCEN"), {
        absolutePath: cleanLedger,
      }).ok,
    ).toBe(true);
    const scen = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-O2-COG-BAD-SCENARIO-2",
      scenarioId: "P6-O2-OTHER-SCENARIO",
      linkedQaRunId: "P6-O2-QA-SCEN",
      absolutePath: cleanLedger,
    });
    expect(scen.ok).toBe(false);
    if (!scen.ok) {
      expect(scen.status).toBe("o2_link_rejected");
      expect(scen.message).toMatch(/scenarioId/i);
    }

    // Campaign mismatch on HEALTHY ledger with raw foreign target only
    const campRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-o2-camp-"));
    const campLedger = resolveP6EvidenceLedgerPath(campRoot);
    fs.mkdirSync(path.dirname(campLedger), { recursive: true });
    fs.writeFileSync(
      campLedger,
      `${JSON.stringify({
        kind: "p6_campaign_run",
        campaignId: "OTHER-CAMPAIGN",
        runId: "P6-O2-QA-FOREIGN",
        scenarioId: "P6-O2-DET-01",
      })}\n`,
      "utf8",
    );
    const camp = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-O2-COG-BAD-CAMP",
      scenarioId: "P6-O2-DET-01",
      linkedQaRunId: "P6-O2-QA-FOREIGN",
      absolutePath: campLedger,
    });
    expect(camp.ok).toBe(false);
    if (!camp.ok) {
      expect(camp.status).toBe("o2_link_rejected");
      // Foreign campaignId makes the row O2-ineligible (CP01-02) before
      // the same-campaign pairwise compare — both are honest refusals.
      expect(camp.message).toMatch(/O2-eligible|campaignId/i);
    }
    fs.rmSync(cleanRoot, { recursive: true, force: true });
    fs.rmSync(campRoot, { recursive: true, force: true });
  });

  it("O2-14 — second receipt for same QA run refused", () => {
    expect(
      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-CARD"), {
        absolutePath: ledgerPath,
      }).ok,
    ).toBe(true);
    const r1 = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:card-1",
      projectId: "prj:p6-o2",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: fakeTurn() as never,
    });
    expect(
      captureCognitiveExecutionReceiptToP6Ledger({
        receipt: r1,
        runId: "P6-O2-COG-CARD-1",
        scenarioId: "P6-O2-DET-01",
        linkedQaRunId: "P6-O2-QA-CARD",
        absolutePath: ledgerPath,
      }).ok,
    ).toBe(true);

    const r2 = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:card-2",
      projectId: "prj:p6-o2",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: fakeTurn({ providerResponseId: "fake-o2-resp-3" }) as never,
    });
    const second = captureCognitiveExecutionReceiptToP6Ledger({
      receipt: r2,
      runId: "P6-O2-COG-CARD-2",
      scenarioId: "P6-O2-DET-01",
      linkedQaRunId: "P6-O2-QA-CARD",
      absolutePath: ledgerPath,
    });
    expect(second.ok).toBe(false);
    if (!second.ok) {
      expect(second.status).toBe("o2_link_rejected");
      expect(second.message).toMatch(/cardinality/i);
    }
  });

  it("O2-15 / O2-16 — same runId QA+receipt and runId=logicalTurnId refused", () => {
    expect(
      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-SHARED-ID"), {
        absolutePath: ledgerPath,
      }).ok,
    ).toBe(true);
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:shared",
      projectId: "prj:p6-o2",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: fakeTurn() as never,
    });
    // O2-15 — cognitive runId collides with existing QA runId
    const sameAsQa = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-O2-SHARED-ID",
      scenarioId: "P6-O2-DET-01",
      absolutePath: ledgerPath,
    });
    expect(sameAsQa.ok).toBe(false);
    if (!sameAsQa.ok) expect(sameAsQa.status).toBe("duplicate_rejected");

    // linkedQaRunId must not equal cognitive runId
    const linkEqRun = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-O2-COG-LINK-EQ",
      scenarioId: "P6-O2-DET-01",
      linkedQaRunId: "P6-O2-COG-LINK-EQ",
      absolutePath: ledgerPath,
    });
    expect(linkEqRun.ok).toBe(false);
    if (!linkEqRun.ok) expect(linkEqRun.status).toBe("o2_link_rejected");

    // O2-16
    const eqLogical = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: receipt.logicalTurnId,
      scenarioId: "P6-O2-DET-01",
      linkedQaRunId: "P6-O2-SHARED-ID",
      absolutePath: ledgerPath,
    });
    expect(eqLogical.ok).toBe(false);
    if (!eqLogical.ok) expect(eqLogical.status).toBe("identity_mismatch");
  });

  it("O2-17 — duplicate skip incompatible when linkedQaRunId differs", () => {
    expect(
      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-DUP-A"), {
        absolutePath: ledgerPath,
      }).ok,
    ).toBe(true);
    expect(
      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-DUP-B", "P6-O2-DET-01"), {
        absolutePath: ledgerPath,
      }).ok,
    ).toBe(true);

    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:dup",
      projectId: "prj:p6-o2",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: fakeTurn() as never,
    });
    const first = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-O2-COG-DUP",
      scenarioId: "P6-O2-DET-01",
      linkedQaRunId: "P6-O2-QA-DUP-A",
      absolutePath: ledgerPath,
    });
    expect(first.ok).toBe(true);

    const conflict = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-O2-COG-DUP",
      scenarioId: "P6-O2-DET-01",
      linkedQaRunId: "P6-O2-QA-DUP-B",
      absolutePath: ledgerPath,
      onDuplicate: "skip",
    });
    expect(conflict.ok).toBe(false);
    if (!conflict.ok) expect(conflict.status).toBe("duplicate_conflict");

    // Sanity: durable compare distinguishes link field
    expect(
      durableLedgerContentEquivalent(
        { ledgerSchemaVersion: 2, linkedQaRunId: "A", logicalTurnId: "x" },
        { ledgerSchemaVersion: 2, linkedQaRunId: "B", logicalTurnId: "x" },
      ),
    ).toBe(false);
  });

  it("O2-20 / O2-21 — FAILED historical preserved; no rewrite", () => {
    const failed = {
      ...qaRow("P6-O2-QA-FAILED"),
      verdict: "FAILED",
      ok: false,
      hardPass: false,
    };
    expect(
      appendValidatedP6CampaignLedgerRow(failed, { absolutePath: ledgerPath }).ok,
    ).toBe(true);
    const before = fs.readFileSync(ledgerPath, "utf8");
    const rewriteAttempt = appendValidatedP6CampaignLedgerRow(
      { ...failed, verdict: "PASS", ok: true },
      { absolutePath: ledgerPath },
    );
    expect(rewriteAttempt.ok).toBe(false);
    expect(fs.readFileSync(ledgerPath, "utf8")).toBe(before);
    const found = findP6EvidenceLedgerRowsByRunId("P6-O2-QA-FAILED", {
      absolutePath: ledgerPath,
    });
    expect(found.matches[0]?.verdict).toBe("FAILED");
  });

  it("O2-22 — sensitive payload refused", () => {
    const bad = validateLedgerRowForAppend({
      kind: "p6_campaign_run",
      campaignId: P6_CAMPAIGN_ID,
      runId: "P6-O2-SENS",
      scenarioId: "P6-O2-DET-01",
      api_key: "sk-should-not-pass",
    });
    expect(bad.ok).toBe(false);
  });

  it("O2-24 / O2-25 — NOT_OBSERVED conserved; capture fail ≠ provider_error", async () => {
    runNoraCognitiveTurnMock.mockRejectedValue(new Error("FAKE_PROVIDER_ERROR"));
    const product = await orchestrateProjectAssistantTurn({
      projectId: "prj:p6-o2",
      content: "provider error path",
      sessionDbPath,
    });
    expect(product.ok).toBe(false);
    if (product.ok) return;
    expect(product.status).toBe("provider_error");
    expect(product.cognitiveExecutionReceipt).toBeDefined();
    // Justified observation under Fake / test_provider (never PROVIDER_CONFIRMED).
    const obs = product.cognitiveExecutionReceipt!.providerResponseObservation;
    expect(["NOT_OBSERVED", "FAKE_DETERMINISTIC"]).toContain(obs);
    expect(product.cognitiveExecutionReceipt!.realProofStatus).toBe("NOT_PROVEN");

    const qaRunId = "P6-O2-QA-PROV-ERR";
    const wired = wireP6O2OperationalEvidence({
      qaRow: {
        ...qaRow(qaRunId, "P6-O2-DET-PROV"),
        verdict: "PROVIDER_ERROR_OBSERVED",
        ok: false,
        hardPass: false,
      },
      productTurnResult: product,
      cognitiveRunId: "P6-O2-COG-PROV-ERR",
      absolutePath: ledgerPath,
    });
    expect(wired.qa.ok).toBe(true);
    expect(wired.cognitive.ok).toBe(true);

    // Capture failure must not mutate Product status
    expect(product.status).toBe("provider_error");

    const pair = resolveP6O2LinkedEvidencePair(qaRunId, {
      absolutePath: ledgerPath,
    });
    expect(pair.ok).toBe(true);
    if (!pair.ok) return;
    expect(["NOT_OBSERVED", "FAKE_DETERMINISTIC"]).toContain(
      pair.receiptRow?.providerResponseObservation,
    );
    if (pair.receiptRow?.providerResponseObservation === "NOT_OBSERVED") {
      expect(pair.receiptRow.providerResponseId).toBeNull();
    }
  });

  it("O2-26 / O2-27 — Product SQLite untouched by capture; MONO_WRITER unchanged", async () => {
    const product = await orchestrateProjectAssistantTurn({
      projectId: "prj:p6-o2",
      content: "sqlite isolation",
      sessionDbPath,
    });
    expect(product.ok).toBe(true);
    const sqliteBefore = fs.existsSync(sessionDbPath)
      ? fs.readFileSync(sessionDbPath)
      : null;

    wireP6O2OperationalEvidence({
      qaRow: qaRow("P6-O2-QA-SQLITE"),
      productTurnResult: product,
      cognitiveRunId: "P6-O2-COG-SQLITE",
      absolutePath: ledgerPath,
    });

    const sqliteAfter = fs.existsSync(sessionDbPath)
      ? fs.readFileSync(sessionDbPath)
      : null;
    expect(sqliteAfter?.equals(sqliteBefore ?? Buffer.alloc(0)) ?? true).toBe(
      true,
    );
    expect(P6_LEDGER_CONCURRENCY_MODEL).toBe("MONO_WRITER");
    expect(P6_QA_COLLECTION_SEAM_STATUS.o2LinkContract).toBe(
      "MINIMAL_LINKED_QA_RUN_ID",
    );
  });

  it("O2-28 — DEGRADED ledger blocks writes", () => {
    fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });
    fs.writeFileSync(ledgerPath, "{not-json\n", "utf8");
    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(read.integrityPass).toBe(false);

    const qa = appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-DEG"), {
      absolutePath: ledgerPath,
    });
    expect(qa.ok).toBe(false);
    if (!qa.ok) expect(qa.code).toBe("LEDGER_INTEGRITY_BLOCKS_APPEND");
  });

  it("O2-29 — orphan receipt on disk diagnosed after relecture", () => {
    fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });
    const orphanReceipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:orphan-disk",
      projectId: "prj:p6-o2",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: fakeTurn() as never,
    });
    const entry = {
      kind: "cognitive_execution_receipt",
      ledgerSchemaVersion: 2,
      campaignId: P6_CAMPAIGN_ID,
      runId: "P6-O2-COG-ORPHAN-DISK",
      scenarioId: "P6-O2-DET-01",
      linkedQaRunId: "P6-O2-QA-NEVER-WRITTEN",
      logicalTurnId: orphanReceipt.logicalTurnId,
      projectId: orphanReceipt.projectId,
      runtimeIdentity: orphanReceipt.runtimeIdentity,
      providerIdentity: orphanReceipt.providerIdentity,
      presentation: orphanReceipt.presentation,
      providerConfigured: orphanReceipt.providerConfigured,
      providerResponseId: orphanReceipt.providerResponseId,
      providerResponseObservation: orphanReceipt.providerResponseObservation,
      proofClassification: orphanReceipt.proofClassification,
      productRealProofStatus: orphanReceipt.realProofStatus,
      realBoundaryClaim: "NOT_CLAIMED",
      selectedModelId: orphanReceipt.selectedModelId,
      observedModel: orphanReceipt.observedModel,
      selectedReasoningEffort: orphanReceipt.selectedReasoningEffort,
      usage: orphanReceipt.usage,
      adaptiveObserve: orphanReceipt.adaptiveObserve,
      continuationObserve: orphanReceipt.continuationObserve,
      toolCalls: orphanReceipt.toolCalls,
      limitReached: orphanReceipt.limitReached,
      productTerminalStatus: orphanReceipt.productTerminalStatus,
      productConservation: orphanReceipt.conservation,
      productCapturedAt: orphanReceipt.capturedAt,
      captureStatus: "CAPTURED",
    };
    fs.writeFileSync(ledgerPath, `${JSON.stringify(entry)}\n`, "utf8");
    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(read.integrityPass).toBe(false);
    expect(read.integrity).toBe("DEGRADED");
    expect(read.o2LinkErrors).toBeGreaterThan(0);
    expect(read.o2LinkDiagnostics.some((d) => d.code === "O2_LINK_ORPHAN")).toBe(
      true,
    );
  });

  it("O2-30 — multiple receipts linked to same QA diagnosed on read", () => {
    fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });
    const qa = qaRow("P6-O2-QA-MULTI");
    const mk = (runId: string, logicalTurnId: string) => {
      const receipt = buildCognitiveExecutionReceipt({
        logicalTurnId,
        projectId: "prj:p6-o2",
        presentation: "test_provider",
        productTerminalStatus: "ok",
        turn: fakeTurn({
          providerResponseId: `fake-${runId}`,
        }) as never,
      });
      return {
        kind: "cognitive_execution_receipt",
        ledgerSchemaVersion: 2,
        campaignId: P6_CAMPAIGN_ID,
        runId,
        scenarioId: "P6-O2-DET-01",
        linkedQaRunId: "P6-O2-QA-MULTI",
        logicalTurnId: receipt.logicalTurnId,
        projectId: receipt.projectId,
        runtimeIdentity: receipt.runtimeIdentity,
        providerIdentity: receipt.providerIdentity,
        presentation: receipt.presentation,
        providerConfigured: receipt.providerConfigured,
        providerResponseId: receipt.providerResponseId,
        providerResponseObservation: receipt.providerResponseObservation,
        proofClassification: receipt.proofClassification,
        productRealProofStatus: receipt.realProofStatus,
        realBoundaryClaim: "NOT_CLAIMED",
        selectedModelId: receipt.selectedModelId,
        observedModel: receipt.observedModel,
        selectedReasoningEffort: receipt.selectedReasoningEffort,
        usage: receipt.usage,
        adaptiveObserve: receipt.adaptiveObserve,
        continuationObserve: receipt.continuationObserve,
        toolCalls: receipt.toolCalls,
        limitReached: receipt.limitReached,
        productTerminalStatus: receipt.productTerminalStatus,
        productConservation: receipt.conservation,
        productCapturedAt: receipt.capturedAt,
        captureStatus: "CAPTURED",
      };
    };
    fs.writeFileSync(
      ledgerPath,
      [qa, mk("P6-O2-COG-M1", "ltu:m1"), mk("P6-O2-COG-M2", "ltu:m2")]
        .map((r) => JSON.stringify(r))
        .join("\n") + "\n",
      "utf8",
    );
    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(read.integrityPass).toBe(false);
    expect(
      read.o2LinkDiagnostics.some((d) => d.code === "O2_LINK_CARDINALITY"),
    ).toBe(true);
    const pair = resolveP6O2LinkedEvidencePair("P6-O2-QA-MULTI", {
      absolutePath: ledgerPath,
    });
    expect(pair.ok).toBe(false);
    if (!pair.ok) expect(pair.code).toBe("O2_LINK_CARDINALITY");
  });

  it("O2-31 — unlinked historical v2 receipt remains readable (no false O2 promotion)", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:legacy",
      projectId: "prj:p6-o2",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: fakeTurn() as never,
    });
    const result = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-O2-COG-LEGACY-UNLINKED",
      scenarioId: "P6-O2-DET-01",
      absolutePath: ledgerPath,
    });
    expect(result.ok).toBe(true);
    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(read.integrityPass).toBe(true);
    expect(read.o2LinkErrors).toBe(0);
    expect(read.rows[0]?.linkedQaRunId).toBeUndefined();
  });

  it("O2-32 / CP01-01-A…D/F — portable archive fixture isolation (no user path)", async () => {
    const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-o2-arch-fix-"));
    const activeRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-o2-arch-act-"));
    try {
      const archiveFixture = path.join(
        fixtureRoot,
        "archive",
        "evidence-ledger.jsonl",
      );
      fs.mkdirSync(path.dirname(archiveFixture), { recursive: true });
      const archiveBytes =
        `${JSON.stringify({
          kind: "p6_campaign_run",
          campaignId: P6_CAMPAIGN_ID,
          runId: "P6-O2-ARCH-FIXTURE",
          scenarioId: "P6-O2-DET-ARCH",
          verdict: "HISTORICAL_FIXTURE",
        })}\n`;
      fs.writeFileSync(archiveFixture, archiveBytes, "utf8");
      const shaBefore = await sha256File(archiveFixture);

      const activeLedger = resolveP6EvidenceLedgerPath(activeRoot);
      expect(activeLedger).not.toBe(archiveFixture);
      expect(activeLedger.endsWith(P6_EVIDENCE_LEDGER_RELATIVE_PATH)).toBe(true);

      const written = appendValidatedP6CampaignLedgerRow(
        qaRow("P6-O2-QA-ARCH-CHECK"),
        { absolutePath: activeLedger },
      );
      expect(written.ok).toBe(true);

      // CP01-01-B/D — archive fixture bytes unchanged; no rewrite.
      expect(fs.readFileSync(archiveFixture, "utf8")).toBe(archiveBytes);
      expect(await sha256File(archiveFixture)).toBe(shaBefore);

      // CP01-01-C — active distinct; not a copy of archive.
      const activeRaw = fs.readFileSync(activeLedger, "utf8");
      expect(activeRaw).not.toBe(archiveBytes);
      expect(activeRaw).toContain("P6-O2-QA-ARCH-CHECK");
      expect(activeRaw).not.toContain("P6-O2-ARCH-FIXTURE");
    } finally {
      fs.rmSync(fixtureRoot, { recursive: true, force: true });
      fs.rmSync(activeRoot, { recursive: true, force: true });
    }
  });

  it("CP01-01-E/F — real historical archive check is optional (env); absence is not DET failure", async () => {
    const realPath = resolveOptionalRealHistoricalArchivePath();
    if (!realPath || !fs.existsSync(realPath)) {
      // Portable DET must not fail when the Morris archive worktree is absent (CI).
      expect(realPath == null || !fs.existsSync(realPath)).toBe(true);
      return;
    }
    const sha = await sha256File(realPath);
    expect(sha).toBe(ARCHIVE_SHA_EXPECTED);
    // Write only to isolated DET ledger — real archive unchanged.
    appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-REAL-ARCH-PROBE"), {
      absolutePath: ledgerPath,
    });
    expect(await sha256File(realPath)).toBe(ARCHIVE_SHA_EXPECTED);
  });

  it("CP01-02 — O2 QA target eligibility ≠ historical readability", () => {
    // CP01-02-A — explicit QA
    expect(
      isP6O2QaLinkTargetEligible({
        kind: "p6_campaign_run",
        campaignId: P6_CAMPAIGN_ID,
        runId: "P6-O2-QA-ELIG",
        scenarioId: "P6-O2-DET-01",
      }),
    ).toBe(true);

    // CP01-02-D — historical campaign (absent kind) eligible with identity fields
    expect(
      isP6O2QaLinkTargetEligible({
        campaignId: P6_CAMPAIGN_ID,
        runId: "P6-O2-QA-HIST",
        scenarioId: "P6-O2-DET-01",
        verdict: "PASS",
      }),
    ).toBe(true);
    expect(isP6HistoricalReadableCampaignKind(undefined)).toBe(true);

    // CP01-02-B — cognitive refused
    expect(
      isP6O2QaLinkTargetEligible({
        kind: "cognitive_execution_receipt",
        campaignId: P6_CAMPAIGN_ID,
        runId: "P6-O2-COG",
        scenarioId: "P6-O2-DET-01",
      }),
    ).toBe(false);

    // CP01-02-C — administrative / diagnostic refused as O2 targets but historically readable
    expect(
      isP6HistoricalReadableCampaignKind("ROOT_CAUSE_INVESTIGATION_READONLY"),
    ).toBe(true);
    expect(
      isP6O2QaLinkTargetEligible({
        kind: "ROOT_CAUSE_INVESTIGATION_READONLY",
        campaignId: P6_CAMPAIGN_ID,
        runId: "P6-O2-ADMIN-RC",
        scenarioId: "HQA-01-GUIDANCE-ONLY",
        verdict: "NOTE",
      }),
    ).toBe(false);
    expect(isP6HistoricalReadableCampaignKind("RUNTIME_REQUALIFICATION")).toBe(
      true,
    );
    expect(
      isP6O2QaLinkTargetEligible({
        kind: "RUNTIME_REQUALIFICATION",
        campaignId: P6_CAMPAIGN_ID,
        runId: "P6-O2-ADMIN-RR",
        scenarioId: "RUNTIME-REQ",
        verdict: "NOTE",
      }),
    ).toBe(false);
  });

  it("CP01-02-C/G/H — admin target refused at write; invalid link on disk diagnosed", () => {
    fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });
    const admin = {
      kind: "RUNTIME_REQUALIFICATION",
      campaignId: P6_CAMPAIGN_ID,
      runId: "P6-O2-ADMIN-TARGET",
      scenarioId: "P6-O2-DET-01",
      verdict: "ADMIN",
    };
    // Historical readability: append via raw bytes (admin kind not O2-eligible).
    fs.writeFileSync(ledgerPath, `${JSON.stringify(admin)}\n`, "utf8");
    const healthyAdmin = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(healthyAdmin.integrityPass).toBe(true); // CP01-02-F historically readable
    expect(healthyAdmin.o2LinkErrors).toBe(0);

    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:admin-link",
      projectId: "prj:p6-o2",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: fakeTurn() as never,
    });
    const rejected = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-O2-COG-ADMIN-LINK",
      scenarioId: "P6-O2-DET-01",
      linkedQaRunId: "P6-O2-ADMIN-TARGET",
      absolutePath: ledgerPath,
    });
    expect(rejected.ok).toBe(false);
    if (!rejected.ok) expect(rejected.status).toBe("o2_link_rejected");

    // CP01-02-H — raw invalid link on disk → DEGRADED after reopen
    const orphanLink = {
      kind: "cognitive_execution_receipt",
      ledgerSchemaVersion: 2,
      campaignId: P6_CAMPAIGN_ID,
      runId: "P6-O2-COG-BAD-ADMIN-LINK",
      scenarioId: "P6-O2-DET-01",
      linkedQaRunId: "P6-O2-ADMIN-TARGET",
      logicalTurnId: receipt.logicalTurnId,
      projectId: receipt.projectId,
      runtimeIdentity: receipt.runtimeIdentity,
      providerIdentity: receipt.providerIdentity,
      presentation: receipt.presentation,
      providerConfigured: receipt.providerConfigured,
      providerResponseId: receipt.providerResponseId,
      providerResponseObservation: receipt.providerResponseObservation,
      proofClassification: receipt.proofClassification,
      productRealProofStatus: receipt.realProofStatus,
      realBoundaryClaim: "NOT_CLAIMED",
      selectedModelId: receipt.selectedModelId,
      observedModel: receipt.observedModel,
      selectedReasoningEffort: receipt.selectedReasoningEffort,
      usage: receipt.usage,
      adaptiveObserve: receipt.adaptiveObserve,
      continuationObserve: receipt.continuationObserve,
      toolCalls: receipt.toolCalls,
      limitReached: receipt.limitReached,
      productTerminalStatus: receipt.productTerminalStatus,
      productConservation: receipt.conservation,
      productCapturedAt: receipt.capturedAt,
      captureStatus: "CAPTURED",
    };
    fs.appendFileSync(ledgerPath, `${JSON.stringify(orphanLink)}\n`, "utf8");
    const degraded = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(degraded.integrityPass).toBe(false);
    expect(
      degraded.o2LinkDiagnostics.some((d) => d.code === "O2_LINK_TARGET_KIND"),
    ).toBe(true);

    const pair = resolveP6O2LinkedEvidencePair("P6-O2-ADMIN-TARGET", {
      absolutePath: ledgerPath,
    });
    expect(pair.ok).toBe(false);
    if (!pair.ok) expect(pair.code).toBe("O2_TARGET_NOT_QA");
  });

  it("CP01-02-D/G — historical absent-kind QA row accepted as link target (write+read)", () => {
    fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });
    const histQa = {
      // no kind — historical campaign QA result shape
      campaignId: P6_CAMPAIGN_ID,
      runId: "P6-O2-QA-HIST-LINK",
      scenarioId: "P6-O2-DET-01",
      verdict: "PASS",
      ok: true,
    };
    fs.writeFileSync(ledgerPath, `${JSON.stringify(histQa)}\n`, "utf8");
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:hist-link",
      projectId: "prj:p6-o2",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: fakeTurn() as never,
    });
    const linked = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-O2-COG-HIST-LINK",
      scenarioId: "P6-O2-DET-01",
      linkedQaRunId: "P6-O2-QA-HIST-LINK",
      absolutePath: ledgerPath,
    });
    expect(linked.ok).toBe(true);
    const pair = resolveP6O2LinkedEvidencePair("P6-O2-QA-HIST-LINK", {
      absolutePath: ledgerPath,
    });
    expect(pair.ok).toBe(true);
    if (!pair.ok) return;
    expect(pair.integrityPass).toBe(true);
    expect(pair.cardinality).toBe("qa_plus_one_receipt");
  });

  it("O2-33 / O2-34 — no REAL env gates; seam status honest", () => {
    expect(process.env.OPENAI_API_KEY).toBeUndefined();
    expect(process.env.SFIA_P6_REAL_GATE).toBeUndefined();
    expect(P6_QA_COLLECTION_SEAM_STATUS.historicalHarnessMigration).toBe(
      "NOT_DONE",
    );
    expect(P6_QA_COLLECTION_SEAM_STATUS.operationalCampaignWiring).toBe(
      "O2_DET_IMPLEMENTED",
    );
  });

  it("cognitive skipped when QA append fails", () => {
    const wired = wireP6O2OperationalEvidence({
      qaRow: {
        kind: "p6_campaign_run",
        // missing campaignId → validation fail
        runId: "P6-O2-QA-BAD",
        scenarioId: "P6-O2-DET-01",
      },
      productTurnResult: {
        ok: true,
        status: "ok",
        mode: "fixture",
        message: "x",
        logicalTurnId: "ltu:x",
      } as never,
      cognitiveRunId: "P6-O2-COG-SKIP",
      absolutePath: ledgerPath,
    });
    expect(wired.qa.ok).toBe(false);
    expect(wired.cognitive).toMatchObject({
      ok: false,
      status: "cognitive_skipped_qa_failed",
    });
  });

  it("collectP6ProductTurnEvidence forwards linkedQaRunId", async () => {
    expect(
      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-SEAM"), {
        absolutePath: ledgerPath,
      }).ok,
    ).toBe(true);
    const product = await orchestrateProjectAssistantTurn({
      projectId: "prj:p6-o2",
      content: "seam link forward",
      sessionDbPath,
    });
    expect(product.ok).toBe(true);
    if (!product.ok) return;
    const collected = collectP6ProductTurnEvidence({
      productTurnResult: product,
      runId: "P6-O2-COG-SEAM",
      scenarioId: "P6-O2-DET-01",
      linkedQaRunId: "P6-O2-QA-SEAM",
      absolutePath: ledgerPath,
    });
    expect(collected.ok).toBe(true);
    const byLink = findP6EvidenceLedgerRowsByLinkedQaRunId("P6-O2-QA-SEAM", {
      absolutePath: ledgerPath,
    });
    expect(byLink.matches).toHaveLength(1);
    expect(byLink.matches[0]?.runId).toBe("P6-O2-COG-SEAM");
  });
});
