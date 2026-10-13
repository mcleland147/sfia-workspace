/**
 * P6 EXTERNAL EVIDENCE LEDGER — DETERMINISTIC / ZERO REAL.
 * Oracles S01–S24 (OBS-01…04 stabilization).
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
} from "@/features/project-assistant/cognitiveExecutionReceipt";
import {
  appendP6EvidenceLedgerRow,
  captureCognitiveExecutionReceiptToP6Ledger,
  collectP6ProductTurnEvidence,
  ensureP6EvidenceLedger,
  findP6EvidenceLedgerRowsByRunId,
  P6_CAMPAIGN_ID,
  P6_EVIDENCE_LEDGER_RELATIVE_PATH,
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

const SUCCESS = {
  ok: true as const,
  project: {
    projectId: "prj:p6-ledger",
    name: "Projet Ledger",
    shortReference: "LED",
    objective: "External ledger capture.",
    contextSummary: "P6 ledger D0",
    criticality: "STANDARD" as const,
    constraints: ["Lecture seule"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:ledger",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:ledger",
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
      inputTokens: 3,
      outputTokens: 2,
      totalTokens: 5,
      model: "fake-test-model",
      providerResponseId: "fake-resp-ledger-1",
    },
    toolRounds: 0,
    toolCalls: 0,
    limitReached: false,
    cognitiveRuntime: "agents" as const,
    sessionId: "sess:ledger",
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
      reasonCodes: [],
    },
    ...overrides,
  };
}

function capture(
  absolutePath: string,
  overrides: {
    runId: string;
    scenarioId?: string;
    logicalTurnId?: string;
    projectId?: string;
    productTerminalStatus?: "ok" | "provider_error";
    onDuplicate?: "reject" | "skip";
    reserves?: string[];
    turn?: unknown;
  },
) {
  const receipt = buildCognitiveExecutionReceipt({
    logicalTurnId: overrides.logicalTurnId ?? `ltu:${overrides.runId}`,
    projectId: overrides.projectId ?? "prj:p6-ledger",
    presentation: "test_provider",
    productTerminalStatus: overrides.productTerminalStatus ?? "ok",
    turn: (overrides.turn ?? baseTurn()) as never,
  });
  return captureCognitiveExecutionReceiptToP6Ledger({
    receipt,
    runId: overrides.runId,
    scenarioId: overrides.scenarioId ?? "P6-MIN-09",
    absolutePath,
    onDuplicate: overrides.onDuplicate,
    reserves: overrides.reserves,
  });
}

describe("P6 EXTERNAL EVIDENCE LEDGER (DETERMINISTIC)", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  let workspaceRoot: string;
  let ledgerPath: string;
  let sessionDir: string;
  let sessionDbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    runNoraCognitiveTurnMock.mockReset();
    setConversationProviderForTests(null);
    clearCognitiveExecutionReceiptRegistryForTests();
    workspaceRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-ledger-"));
    ledgerPath = resolveP6EvidenceLedgerPath(workspaceRoot);
    sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-led-sess-"));
    sessionDbPath = path.join(sessionDir, "session.sqlite");
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    clearCognitiveExecutionReceiptRegistryForTests();
    if (previousFake === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    }
    fs.rmSync(workspaceRoot, { recursive: true, force: true });
    fs.rmSync(sessionDir, { recursive: true, force: true });
  });

  it("S03 — schéma autorisé accepté; chemin canonique", () => {
    expect(ledgerPath.endsWith(P6_EVIDENCE_LEDGER_RELATIVE_PATH)).toBe(true);
    const ensured = ensureP6EvidenceLedger({ workspaceRoot });
    expect(ensured.ok).toBe(true);
    const ok = capture(ledgerPath, { runId: "P6-DET-RUN-FAKE-01" });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    expect(ok.status).toBe("appended");
    expect(ok.entry.campaignId).toBe(P6_CAMPAIGN_ID);
    expect(ok.entry.realBoundaryClaim).toBe("NOT_CLAIMED");
    expect(ok.entry.productRealProofStatus).toBe("NOT_PROVEN");
    expect(ok.entry.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
  });

  it("S01 — writer générique refuse authorization", () => {
    const poisoned = appendP6EvidenceLedgerRow(
      {
        kind: "cognitive_execution_receipt",
        campaignId: P6_CAMPAIGN_ID,
        runId: "P6-DET-POISON",
        scenarioId: "P6-MIN-09",
        logicalTurnId: "ltu:poison",
        projectId: "prj:x",
        providerResponseObservation: "FAKE_DETERMINISTIC",
        productRealProofStatus: "NOT_PROVEN",
        realBoundaryClaim: "NOT_CLAIMED",
        captureStatus: "CAPTURED",
        authorization: "Bearer secret-token",
      },
      { absolutePath: ledgerPath },
    );
    expect(poisoned.ok).toBe(false);
    if (poisoned.ok) return;
    expect(poisoned.code).toBe("SENSITIVE_PAYLOAD_REJECTED");
    expect(fs.existsSync(ledgerPath)).toBe(false);
  });

  it("S02 — writer générique refuse secret-like values", () => {
    const poisoned = appendP6EvidenceLedgerRow(
      {
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-09",
        runId: "P6-DET-SK",
        note: "leak sk-abcdefghijklmnopqrstuvwxyz012345",
      },
      { absolutePath: ledgerPath },
    );
    expect(poisoned.ok).toBe(false);
    if (poisoned.ok) return;
    expect(poisoned.code).toBe("SENSITIVE_PAYLOAD_REJECTED");
  });

  it("S04 — type de ligne inconnu refusé; historique campagne accepté", () => {
    const unknown = appendP6EvidenceLedgerRow(
      {
        kind: "totally_unknown_kind",
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-DET-UNK",
      },
      { absolutePath: ledgerPath },
    );
    expect(unknown.ok).toBe(false);
    if (!unknown.ok) expect(unknown.code).toBe("UNKNOWN_ROW_KIND");

    const historical = appendP6EvidenceLedgerRow(
      {
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-DET-HIST-01",
        mode: "smoke",
        ok: false,
        hardPass: false,
      },
      { absolutePath: ledgerPath },
    );
    expect(historical.ok).toBe(true);
  });

  it("S05/S06/S07 — corruption détectée; jamais INTEGRITY PASS; ligne partielle", () => {
    ensureP6EvidenceLedger({ absolutePath: ledgerPath });
    fs.writeFileSync(
      ledgerPath,
      `${JSON.stringify({
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-DET-GOOD",
      })}\n{not-json\n{"partial":`,
      "utf8",
    );
    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(read.integrity).toBe("DEGRADED");
    expect(read.integrityPass).toBe(false);
    expect(read.parseErrors).toBeGreaterThan(0);
    expect(read.rows.some((r) => r.runId === "P6-DET-GOOD")).toBe(true);
  });

  it("S08 — aucune réécriture historique sous corruption", () => {
    ensureP6EvidenceLedger({ absolutePath: ledgerPath });
    const before = `${JSON.stringify({
      campaignId: P6_CAMPAIGN_ID,
      scenarioId: "P6-MIN-01",
      runId: "P6-DET-KEEP",
    })}\nBROKEN\n`;
    fs.writeFileSync(ledgerPath, before, "utf8");
    const blocked = capture(ledgerPath, { runId: "P6-DET-AFTER-CORRUPT" });
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) expect(blocked.status).toBe("integrity_blocks_capture");
    expect(fs.readFileSync(ledgerPath, "utf8")).toBe(before);
  });

  it("S09 — duplicate reject sans mutation", () => {
    const r1 = capture(ledgerPath, {
      runId: "P6-DET-DUP",
      productTerminalStatus: "provider_error",
      reserves: ["FAILED HISTORICAL"],
      turn: null,
    });
    expect(r1.ok).toBe(true);
    const bytes = fs.readFileSync(ledgerPath, "utf8");
    const dup = capture(ledgerPath, {
      runId: "P6-DET-DUP",
      productTerminalStatus: "ok",
    });
    expect(dup.ok).toBe(false);
    if (!dup.ok) expect(dup.status).toBe("duplicate_rejected");
    expect(fs.readFileSync(ledgerPath, "utf8")).toBe(bytes);
  });

  it("S10 — duplicate skip retourne l'entrée historique persistée", () => {
    // Same Product receipt object (stable productCapturedAt) — retry path.
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:skip-1",
      projectId: "prj:p6-ledger",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: baseTurn() as never,
    });
    const first = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-DET-SKIP",
      scenarioId: "P6-MIN-09",
      absolutePath: ledgerPath,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const skipped = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "P6-DET-SKIP",
      scenarioId: "P6-MIN-09",
      absolutePath: ledgerPath,
      onDuplicate: "skip",
    });
    expect(skipped.ok).toBe(true);
    if (!skipped.ok) return;
    expect(skipped.status).toBe("duplicate_skipped");
    expect(skipped.entry.capturedAt).toBe(first.entry.capturedAt);
    expect(skipped.entry).toEqual(first.entry);
  });

  it("S11 — duplicate skip contradictoire ne confirme pas une conservation inexistante", () => {
    capture(ledgerPath, {
      runId: "P6-DET-CONFLICT",
      productTerminalStatus: "provider_error",
      turn: null,
      reserves: ["FAILED HISTORICAL"],
    });
    const conflict = capture(ledgerPath, {
      runId: "P6-DET-CONFLICT",
      productTerminalStatus: "ok",
      onDuplicate: "skip",
    });
    expect(conflict.ok).toBe(false);
    if (!conflict.ok) expect(conflict.status).toBe("duplicate_conflict");
    const found = findP6EvidenceLedgerRowsByRunId("P6-DET-CONFLICT", {
      absolutePath: ledgerPath,
    });
    expect(found.matches[0]?.productTerminalStatus).toBe("provider_error");
  });

  it("S12/S23 — deux runId distincts; FAILED historique préservé", () => {
    capture(ledgerPath, {
      runId: "P6-DET-FAIL",
      productTerminalStatus: "provider_error",
      turn: null,
      reserves: ["FAILED HISTORICAL"],
    });
    capture(ledgerPath, { runId: "P6-DET-OK" });
    const fail = findP6EvidenceLedgerRowsByRunId("P6-DET-FAIL", {
      absolutePath: ledgerPath,
    });
    expect(fail.matches[0]?.productTerminalStatus).toBe("provider_error");
    expect(fail.matches[0]?.reserves).toContain("FAILED HISTORICAL");
    expect(
      findP6EvidenceLedgerRowsByRunId("P6-DET-OK", { absolutePath: ledgerPath })
        .matches,
    ).toHaveLength(1);
  });

  it("S13 — concurrence same-process sous exclusive lock", async () => {
    ensureP6EvidenceLedger({ absolutePath: ledgerPath });
    const results = await Promise.all(
      Array.from({ length: 8 }, (_, i) =>
        Promise.resolve(
          capture(ledgerPath, {
            runId: `P6-DET-CONC-${i}`,
            logicalTurnId: `ltu:conc-${i}`,
          }),
        ),
      ),
    );
    expect(results.every((r) => r.ok)).toBe(true);
    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(read.integrityPass).toBe(true);
    expect(read.rows).toHaveLength(8);
  });

  it("S14 — contention lock: résultat honnête sans corruption", () => {
    ensureP6EvidenceLedger({ absolutePath: ledgerPath });
    const lockPath = `${ledgerPath}.lock`;
    fs.writeFileSync(lockPath, JSON.stringify({ pid: 999999, held: true }));
    // Fresh mtime → not stale; expect LOCK_CONTENTION
    const blocked = withP6EvidenceLedgerLock(ledgerPath, () => "never");
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) expect(blocked.code).toBe("LOCK_CONTENTION");
    expect(fs.readFileSync(ledgerPath, "utf8")).toBe("");
    fs.unlinkSync(lockPath);
  });

  it("S15/S21/S22 — capture depuis DTO au seam QA; ≠ provider_error; SQLite inchangé", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:p6-ledger",
      content: "capture from DTO via QA seam",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("ok");
    const beforeDb = fs.existsSync(sessionDbPath)
      ? fs.readFileSync(sessionDbPath)
      : null;
    const collected = collectP6ProductTurnEvidence({
      productTurnResult: result,
      runId: "P6-DET-RUN-DTO-SEAM",
      scenarioId: "P6-MIN-09",
      absolutePath: ledgerPath,
    });
    expect(collected.ok).toBe(true);
    if (!collected.ok) return;
    expect(collected.status).toBe("appended");
    expect(collected.entry.logicalTurnId).toBe(result.logicalTurnId);
    expect(collected.entry.runId).not.toBe(result.logicalTurnId);
    expect(result.status).toBe("ok");
    expect(result.ok).toBe(true);
    if (beforeDb) {
      expect(Buffer.compare(fs.readFileSync(sessionDbPath), beforeDb)).toBe(0);
    }
    const orchSrc = fs.readFileSync(
      path.join(process.cwd(), "features/project-assistant/orchestrateTurn.ts"),
      "utf8",
    );
    expect(orchSrc).not.toContain("p6-campaign-evidence");
    expect(orchSrc).not.toContain("evidence-ledger");
  });

  it("S16/S17/S18 — fermeture/réouverture; corrélation runId/logicalTurnId; isolation", () => {
    capture(ledgerPath, {
      runId: "P6-DET-REOPEN",
      logicalTurnId: "ltu:reopen",
      projectId: "prj:p6-ledger",
    });
    capture(ledgerPath, {
      runId: "P6-DET-OTHER",
      logicalTurnId: "ltu:other",
      projectId: "prj:other",
      scenarioId: "P6-MIN-01",
    });
    const reopened = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(reopened.integrityPass).toBe(true);
    const a = reopened.rows.find((r) => r.runId === "P6-DET-REOPEN");
    expect(a?.logicalTurnId).toBe("ltu:reopen");
    expect(a?.projectId).toBe("prj:p6-ledger");
    expect(a?.campaignId).toBe(P6_CAMPAIGN_ID);
    const b = reopened.rows.find((r) => r.runId === "P6-DET-OTHER");
    expect(b?.projectId).toBe("prj:other");
  });

  it("S19/S20 — aucun secret; Fake/Runner jamais REAL PROVEN", () => {
    const synth = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:synth",
      projectId: "prj:p6-ledger",
      presentation: "openai_live",
      productTerminalStatus: "ok",
      turn: {
        usage: {
          inputTokens: 1,
          outputTokens: 1,
          totalTokens: 2,
          model: "gpt-6-luna",
          providerResponseId: "resp_det_synthetic_not_real",
        },
        toolCalls: 0,
        limitReached: false,
        cognitiveRuntime: "agents",
        selectedModelId: "gpt-6-luna",
        selectedReasoningEffort: "medium",
      },
    });
    const captured = captureCognitiveExecutionReceiptToP6Ledger({
      receipt: synth,
      runId: "P6-DET-RUN-SYNTH",
      scenarioId: "P6-MIN-09",
      absolutePath: ledgerPath,
    });
    expect(captured.ok).toBe(true);
    if (!captured.ok) return;
    expect(captured.entry.providerResponseObservation).toBe(
      "RUNNER_RESPONSE_ID_OBSERVED",
    );
    expect(captured.entry.realBoundaryClaim).toBe("NOT_CLAIMED");
    expect(captured.entry.productRealProofStatus).toBe("NOT_PROVEN");
    const json = JSON.stringify(captured.entry);
    expect(json).not.toContain("PROVIDER_CONFIRMED");
    expect(json).not.toMatch(/sk-[a-zA-Z0-9]{10,}/);
    expect(json).not.toContain("Bearer ");
  });

  it("identity — runId ≠ logicalTurnId", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:same",
      projectId: "prj:p6-ledger",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: baseTurn() as never,
    });
    const captured = captureCognitiveExecutionReceiptToP6Ledger({
      receipt,
      runId: "ltu:same",
      scenarioId: "P6-MIN-09",
      absolutePath: ledgerPath,
    });
    expect(captured.ok).toBe(false);
    if (!captured.ok) expect(captured.status).toBe("identity_mismatch");
  });

  it("directory-as-ledger-path fails honestly (unreadable)", () => {
    const dirAsFile = path.join(workspaceRoot, "not-a-file-dir");
    fs.mkdirSync(dirAsFile, { recursive: true });
    const captured = capture(dirAsFile, { runId: "P6-DET-WFAIL" });
    expect(captured.ok).toBe(false);
    if (!captured.ok) {
      expect(["append_failed", "integrity_blocks_capture", "lock_failed"]).toContain(
        captured.status,
      );
    }
  });

  it("R01 — reçu v2 valide relu HEALTHY", () => {
    const ok = capture(ledgerPath, { runId: "P6-R01-V2" });
    expect(ok.ok).toBe(true);
    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(read.integrity).toBe("HEALTHY");
    expect(read.integrityPass).toBe(true);
    expect(read.semanticErrors).toBe(0);
  });

  it("R02/R03/R04/R06 — v2 incomplet JSON valide → integrityPass=false; non promu", () => {
    ensureP6EvidenceLedger({ absolutePath: ledgerPath });
    fs.appendFileSync(
      ledgerPath,
      `${JSON.stringify({
        kind: "cognitive_execution_receipt",
        ledgerSchemaVersion: 2,
        campaignId: P6_CAMPAIGN_ID,
        runId: "P6-R02-INCOMPLETE",
        scenarioId: "P6-MIN-09",
        logicalTurnId: "ltu:r02",
        projectId: "prj:x",
        providerResponseObservation: "FAKE_DETERMINISTIC",
        productRealProofStatus: "NOT_PROVEN",
        realBoundaryClaim: "NOT_CLAIMED",
        captureStatus: "CAPTURED",
        usage: { inputTokens: "bad", outputTokens: null, totalTokens: null },
      })}\n`,
      "utf8",
    );
    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(read.integrityPass).toBe(false);
    expect(read.integrity).toBe("DEGRADED");
    expect(read.semanticErrors).toBeGreaterThan(0);
    expect(read.rows.some((r) => r.runId === "P6-R02-INCOMPLETE")).toBe(true);
    expect(read.rows.find((r) => r.runId === "P6-R02-INCOMPLETE")?.selectedModelId).toBeUndefined();
  });

  it("R05/R07 — ancienne ligne campagne + FAILED préservés", () => {
    appendP6EvidenceLedgerRow(
      {
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-R05-HIST",
        ok: false,
        hardPass: false,
        error: "FAILED HISTORICAL",
      },
      { absolutePath: ledgerPath },
    );
    const before = fs.readFileSync(ledgerPath, "utf8");
    capture(ledgerPath, { runId: "P6-R05-NEW" });
    expect(fs.readFileSync(ledgerPath, "utf8").startsWith(before.trimEnd())).toBe(
      true,
    );
    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(read.rows.find((r) => r.runId === "P6-R05-HIST")?.error).toBe(
      "FAILED HISTORICAL",
    );
    expect(read.integrityPass).toBe(true);
  });

  it("R09/R16/R17 — writer générique refuse doublon; deux runId OK; no mutation", () => {
    const first = appendP6EvidenceLedgerRow(
      {
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-R09-DUP",
        ok: true,
      },
      { absolutePath: ledgerPath },
    );
    expect(first.ok).toBe(true);
    const bytes = fs.readFileSync(ledgerPath, "utf8");
    const dup = appendP6EvidenceLedgerRow(
      {
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-R09-DUP",
        ok: false,
      },
      { absolutePath: ledgerPath },
    );
    expect(dup.ok).toBe(false);
    if (!dup.ok) expect(dup.code).toBe("DUPLICATE_RUN_ID");
    expect(fs.readFileSync(ledgerPath, "utf8")).toBe(bytes);
    const other = appendP6EvidenceLedgerRow(
      {
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-R09-OTHER",
        ok: true,
      },
      { absolutePath: ledgerPath },
    );
    expect(other.ok).toBe(true);
  });

  it("R10/R11 — writer spécialisé + cross-writer unicité", () => {
    appendP6EvidenceLedgerRow(
      {
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-09",
        runId: "P6-R11-CROSS",
        ok: false,
      },
      { absolutePath: ledgerPath },
    );
    const bytes = fs.readFileSync(ledgerPath, "utf8");
    const cross = capture(ledgerPath, { runId: "P6-R11-CROSS" });
    expect(cross.ok).toBe(false);
    if (!cross.ok) expect(cross.status).toBe("duplicate_rejected");
    expect(fs.readFileSync(ledgerPath, "utf8")).toBe(bytes);

    const a = capture(ledgerPath, { runId: "P6-R10-A" });
    expect(a.ok).toBe(true);
    const b = capture(ledgerPath, { runId: "P6-R10-A" });
    expect(b.ok).toBe(false);
    if (!b.ok) expect(b.status).toBe("duplicate_rejected");
  });

  it("U01/U02 — two valid identical rows same runId → not HEALTHY", () => {
    ensureP6EvidenceLedger({ absolutePath: ledgerPath });
    const row = {
      campaignId: P6_CAMPAIGN_ID,
      scenarioId: "P6-MIN-01",
      runId: "P6-U01-DUP",
      ok: true,
      hardPass: true,
    };
    // Bypass writer (simulates pre-existing / corrupted legacy file).
    fs.appendFileSync(ledgerPath, `${JSON.stringify(row)}\n`, "utf8");
    fs.appendFileSync(ledgerPath, `${JSON.stringify(row)}\n`, "utf8");
    const before = fs.readFileSync(ledgerPath, "utf8");
    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(read.integrityPass).toBe(false);
    expect(read.integrity).toBe("DEGRADED");
    expect(read.duplicateRunIds).toContain("P6-U01-DUP");
    expect(read.rows.filter((r) => r.runId === "P6-U01-DUP")).toHaveLength(2);
    expect(fs.readFileSync(ledgerPath, "utf8")).toBe(before);
  });

  it("U03/U05 — contradictory duplicates: all matches visible, degraded", () => {
    ensureP6EvidenceLedger({ absolutePath: ledgerPath });
    fs.appendFileSync(
      ledgerPath,
      `${JSON.stringify({
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-U03-AMB",
        ok: true,
        modelId: "a",
      })}\n`,
      "utf8",
    );
    fs.appendFileSync(
      ledgerPath,
      `${JSON.stringify({
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-U03-AMB",
        ok: false,
        modelId: "b",
      })}\n`,
      "utf8",
    );
    const found = findP6EvidenceLedgerRowsByRunId("P6-U03-AMB", {
      absolutePath: ledgerPath,
    });
    expect(found.integrityPass).toBe(false);
    expect(found.matches).toHaveLength(2);
    expect(found.matches.map((m) => m.modelId).sort()).toEqual(["a", "b"]);
  });

  it("U04 — degraded-by-duplicate blocks new writes", () => {
    ensureP6EvidenceLedger({ absolutePath: ledgerPath });
    const row = {
      campaignId: P6_CAMPAIGN_ID,
      scenarioId: "P6-MIN-01",
      runId: "P6-U04-DUP",
      ok: true,
    };
    fs.appendFileSync(ledgerPath, `${JSON.stringify(row)}\n`, "utf8");
    fs.appendFileSync(ledgerPath, `${JSON.stringify(row)}\n`, "utf8");
    const before = fs.readFileSync(ledgerPath, "utf8");
    const blocked = appendP6EvidenceLedgerRow(
      {
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-U04-NEW",
        ok: true,
      },
      { absolutePath: ledgerPath },
    );
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) expect(blocked.code).toBe("LEDGER_INTEGRITY_BLOCKS_APPEND");
    expect(fs.readFileSync(ledgerPath, "utf8")).toBe(before);
  });

  it("U06 — two distinct runIds remain HEALTHY", () => {
    appendP6EvidenceLedgerRow(
      {
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-U06-A",
        ok: true,
      },
      { absolutePath: ledgerPath },
    );
    appendP6EvidenceLedgerRow(
      {
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-U06-B",
        ok: true,
      },
      { absolutePath: ledgerPath },
    );
    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(read.integrityPass).toBe(true);
    expect(read.duplicateRunIds).toEqual([]);
  });

  it("U07/U08 — historical FAILED preserved under uniqueness check", () => {
    appendP6EvidenceLedgerRow(
      {
        campaignId: P6_CAMPAIGN_ID,
        scenarioId: "P6-MIN-01",
        runId: "P6-U08-FAIL",
        ok: false,
        hardPass: false,
        error: "FAILED HISTORICAL",
      },
      { absolutePath: ledgerPath },
    );
    const before = fs.readFileSync(ledgerPath, "utf8");
    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
    expect(read.integrityPass).toBe(true);
    expect(read.rows[0]?.error).toBe("FAILED HISTORICAL");
    expect(fs.readFileSync(ledgerPath, "utf8")).toBe(before);
  });
});
