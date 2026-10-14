# SFIA Review Pack FULL — P6 O2 CUMULATIVE GIT INTEGRATION
# COMMIT → PUSH → DRAFT PR → CI

**Horodatage (Europe/Paris):** 2026-10-14 10:27:12 CEST
**GO Morris:** P6 O2 CUMULATIVE GIT INTEGRATION AUTHORIZED / CONSUMED — 2026-10-14
**Entry handoff:** abd74ecb / blob 345403f4 (CP01 Critical Re-Review PASS)
**ChatGPT Critical Re-Review:** PASS — TARGETED CORRECTIONS ACCEPTED

**Cycle:** 13 — PR Readiness / Git Integration
**Profil:** CRITICAL
**Typologie:** EVOL / GIT INTEGRATION
**CKC:** ckc:studio:delivery (+ ckc:studio:qa-validation)
**Campagne:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01

**Verdict:** P6 O2 CUMULATIVE GIT INTEGRATION COMMIT/PUSH/DRAFT PR COMPLETE / CI PASS / READY FOR CHATGPT CRITICAL PR REVIEW

**NON AUTORISÉ / NON FAIT:** Merge · REAL · harness adoption · cleanup · runtime v3 · push main · force push

---

## A–C. GO / Cycle / Git Truth initial

| Item | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-evidence-o2` |
| HEAD initial | `aee4878d` detached |
| origin/main | `aee4878d` |
| Dirty O2 | ATTENDU (candidat local) |
| Staged initial | NONE |
| Quarantine ×4 | SHA inchangés |
| Archive SHA | `704531851d7102032c832d4d123abbddfc45d0b41d6afb6548c4a1f0e1f4b827` |

---

## D–F. Convergence / Sources / Baseline

Sources lues: Build Doctrine, Roadmap, C1, 33/35, Product Simplification 01/07, template, routing, CKC 08/09, PRR, handoff abd74ecb.

**Actifs:** Ledger/Seam/Writers KEEP · O2 INTEGRATE · CP01 CORRECTED · REAL harnesses QUARANTINED · Archive READ-ONLY.
**Exit:** candidat versionné · Draft PR · CI PASS · handoff FULL.
**Dette:** REAL migration · REAL boundary · archive consolidation · P6 GLOBAL.

---

## G–I. Manifest / Validation 10 fichiers

| # | Path | Status |
|---|---|---|
| 1 | `lib/p6-campaign-evidence/ledgerRowValidation.ts` | M |
| 2 | `lib/p6-campaign-evidence/evidenceLedger.ts` | M |
| 3 | `lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts` | M |
| 4 | `lib/p6-campaign-evidence/qaCollectionSeam.ts` | M |
| 5 | `lib/p6-campaign-evidence/index.ts` | M |
| 6 | `__tests__/…/p6.receiptCompleteness.d0.test.ts` | M |
| 7 | `__tests__/…/p6.o2OperationalWiring.d0.test.ts` | A |
| 8 | PRR `08-test-proof-and-conformance-map.md` | M |
| 9 | PRR `09-known-gaps-…md` | M |
|10 | PRR `production-runtime-reference.manifest.json` | M |

Staging exclusif (pas de `git add .`). `.tmp-sfia-review` exclus. Harnesses/archive exclus.

---

## J–N. Validations locales / Fake-Real / Sécurité

| Check | Result |
|---|---|
| DET 4 suites | **81/81 PASS** (rejoué ce cycle) |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| PRR | CONFORMANCE OK |
| REAL tests | NOT EXECUTED |
| Fake/Real | DETERMINISTIC AT TESTED SCOPE · REAL NOT PROVEN |
| Secrets | none in commit |
| Product / :3020 | UNTOUCHED |

---

## O–R. Branche / Commit / Push / Draft PR

| Item | Value |
|---|---|
| Branche | `delivery/sfia-studio-p6-o2-linked-evidence-wiring` |
| Commit | `626de1d31de5601dfbbfb3853b5377a5b7ccf576` |
| Message | `feat(studio): integrate P6 O2 linked evidence wiring` |
| Push | FF new remote branch (no force) |
| Remote HEAD | matches local |
| main | unchanged `aee4878d` |
| Draft PR | **#581** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/581 |
| Base | main |
| Head | delivery/sfia-studio-p6-o2-linked-evidence-wiring |
| isDraft | true |
| Commits | 1 |
| Files in PR | **10 exact** |

### git show --stat HEAD

```
626de1d3 feat(studio): integrate P6 O2 linked evidence wiring
 .../p6.o2OperationalWiring.d0.test.ts              | 1232 ++++++++++++++++++++
 .../p6.receiptCompleteness.d0.test.ts              |    2 +-
 .../captureCognitiveExecutionReceipt.ts            |   88 +-
 .../app/lib/p6-campaign-evidence/evidenceLedger.ts |  170 ++-
 .../app/lib/p6-campaign-evidence/index.ts          |   13 +
 .../p6-campaign-evidence/ledgerRowValidation.ts    |  206 ++++
 .../lib/p6-campaign-evidence/qaCollectionSeam.ts   |  134 ++-
 .../08-test-proof-and-conformance-map.md           |    3 +-
 ...9-known-gaps-reserves-and-current-boundaries.md |    6 +-
 .../production-runtime-reference.manifest.json     |    4 +-
 10 files changed, 1833 insertions(+), 25 deletions(-)
```

---

## S–U. Diff + CI

### base…HEAD name-status

```
A	projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.o2OperationalWiring.d0.test.ts
M	projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.receiptCompleteness.d0.test.ts
M	projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts
M	projects/sfia-studio/app/lib/p6-campaign-evidence/evidenceLedger.ts
M	projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts
M	projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts
M	projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```

### base…HEAD --stat

```
 .../p6.o2OperationalWiring.d0.test.ts              | 1232 ++++++++++++++++++++
 .../p6.receiptCompleteness.d0.test.ts              |    2 +-
 .../captureCognitiveExecutionReceipt.ts            |   88 +-
 .../app/lib/p6-campaign-evidence/evidenceLedger.ts |  170 ++-
 .../app/lib/p6-campaign-evidence/index.ts          |   13 +
 .../p6-campaign-evidence/ledgerRowValidation.ts    |  206 ++++
 .../lib/p6-campaign-evidence/qaCollectionSeam.ts   |  134 ++-
 .../08-test-proof-and-conformance-map.md           |    3 +-
 ...9-known-gaps-reserves-and-current-boundaries.md |    6 +-
 .../production-runtime-reference.manifest.json     |    4 +-
 10 files changed, 1833 insertions(+), 25 deletions(-)
```

### CI (verified)

| Check | Result | URL |
|---|---|---|
| Detect SFIA Studio changes | PASS (5s) | https://github.com/mcleland147/sfia-workspace/actions/runs/38533618871/job/115751096880 |
| Build and validate SFIA Studio | PASS (8m4s) | https://github.com/mcleland147/sfia-workspace/actions/runs/38533618871/job/115751142279 |
| SFIA Studio Required Gate | PASS (3s) | https://github.com/mcleland147/sfia-workspace/actions/runs/38533618871/job/115754234021 |
| Workflow run | **success** | https://github.com/mcleland147/sfia-workspace/actions/runs/38533618871 |
| Head SHA CI | `626de1d31de5601dfbbfb3853b5377a5b7ccf576` | matches project commit |

Build job steps PASS: Typecheck · Lint · Build · Unit tests · FinOps freeze · Modeled governance · Secret scan · Trailing whitespace.

Annotations non-bloquantes: Node.js 20 deprecation warning; ubuntu-latest migration notice.

---

## V. Contenu exploitable — FULL DIFF base…HEAD

```diff
diff --git a/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.o2OperationalWiring.d0.test.ts b/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.o2OperationalWiring.d0.test.ts
new file mode 100644
index 00000000..0b9e6283
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.o2OperationalWiring.d0.test.ts
@@ -0,0 +1,1232 @@
+/**
+ * P6 O2 — Linked Evidence Operational Wiring (DET).
+ * Oracles O2-01 … O2-36. ZERO REAL. NO harness REAL execution.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import {
+  FakeConversationProvider,
+  setConversationProviderForTests,
+} from "@/lib/platform/ai";
+import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
+import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
+import {
+  buildCognitiveExecutionReceipt,
+  clearCognitiveExecutionReceiptRegistryForTests,
+} from "@/features/project-assistant/cognitiveExecutionReceipt";
+import {
+  getRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+} from "@/lib/vertical-slice-runtime";
+import {
+  P6_CAMPAIGN_ID,
+  P6_EVIDENCE_LEDGER_RELATIVE_PATH,
+  P6_LEDGER_CONCURRENCY_MODEL,
+  P6_QA_COLLECTION_SEAM_STATUS,
+  appendValidatedP6CampaignLedgerRow,
+  captureCognitiveExecutionReceiptToP6Ledger,
+  collectP6ProductTurnEvidence,
+  diffReceiptAgainstLedgerEntry,
+  durableLedgerContentEquivalent,
+  findP6EvidenceLedgerRowsByLinkedQaRunId,
+  findP6EvidenceLedgerRowsByRunId,
+  isP6HistoricalReadableCampaignKind,
+  isP6O2QaLinkTargetEligible,
+  readP6EvidenceLedger,
+  resolveP6EvidenceLedgerPath,
+  resolveP6O2LinkedEvidencePair,
+  validateLedgerRowForAppend,
+  wireP6O2OperationalEvidence,
+} from "@/lib/p6-campaign-evidence";
+
+const {
+  getProjectRuntimeActionMock,
+  runNoraCognitiveTurnMock,
+} = vi.hoisted(() => ({
+  getProjectRuntimeActionMock: vi.fn(),
+  runNoraCognitiveTurnMock: vi.fn(),
+}));
+
+vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
+  getProjectRuntimeAction: getProjectRuntimeActionMock,
+}));
+
+vi.mock("@/lib/nora-cognitive-runtime", async (importOriginal) => {
+  const actual =
+    await importOriginal<typeof import("@/lib/nora-cognitive-runtime")>();
+  return {
+    ...actual,
+    runNoraCognitiveTurn: (...args: unknown[]) =>
+      runNoraCognitiveTurnMock(...args),
+  };
+});
+
+/** Expected SHA of the real historical archive when present (D1). Not a CI path dependency. */
+const ARCHIVE_SHA_EXPECTED =
+  "704531851d7102032c832d4d123abbddfc45d0b41d6afb6548c4a1f0e1f4b827";
+
+/**
+ * Optional real-archive path — env only. Never hardcode user home / machine paths
+ * into portable DET assertions (CP01-01).
+ */
+function resolveOptionalRealHistoricalArchivePath(): string | null {
+  const fromEnv = process.env.SFIA_P6_HISTORICAL_LEDGER_PATH;
+  if (typeof fromEnv === "string" && fromEnv.trim().length > 0) {
+    return fromEnv.trim();
+  }
+  return null;
+}
+
+function projectRuntime(projectId = "prj:p6-o2") {
+  return {
+    ok: true as const,
+    project: {
+      projectId,
+      name: "O2",
+      shortReference: "O2",
+      objective: "o2 wiring",
+      contextSummary: "o2",
+      criticality: "STANDARD",
+      constraints: [],
+      localMode: true,
+      source: "REAL_LOCAL_CORE",
+      fixture: false,
+    },
+    doctrine: {
+      id: "pkg:studio-v3-oa",
+      version: "1.0.0",
+      digest: "d",
+      status: "RESOLVED",
+    },
+    livingState: {
+      id: "lps:o2",
+      version: 1,
+      createdAt: "2026-10-14T00:00:00.000Z",
+    },
+    readiness: {
+      status: "NOT_READY",
+      hard: "OPEN",
+      tA6: "INCOMPLETE",
+      iam: "NOT_SELECTED",
+      productPersistence: "SQLITE_OA_PRODUCT_STORE",
+      realAgentExecution: "DISABLED",
+      delivery: "NOT_AUTHORIZED",
+      cutover: "NOT_AUTHORIZED",
+      runReady: false,
+      productReady: false,
+    },
+    disclosures: {
+      runtimeMode: "LOCAL_PROCESS",
+      persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
+      agentExecution: "DISABLED",
+      iam: "NOT_SELECTED",
+      productPersistence: "SQLITE_OA_PRODUCT_STORE",
+      delivery: "NOT_AUTHORIZED",
+      cutover: "NOT_AUTHORIZED",
+      localDataVolatile: true,
+      restartMayLoseState: true,
+      projectLpsRestartSafe: true,
+      cycleInstanceRestartSafe: true,
+      humanDecisionRestartSafe: true,
+      executionContractRestartSafe: true,
+      messages: [],
+    },
+  };
+}
+
+function fakeTurn(overrides: Record<string, unknown> = {}) {
+  return {
+    text: "o2 det turn",
+    usage: {
+      inputTokens: 3,
+      outputTokens: 2,
+      totalTokens: 5,
+      model: "fake-o2-model",
+      providerResponseId: "fake-o2-resp-1",
+    },
+    toolRounds: 0,
+    toolCalls: 0,
+    limitReached: false,
+    cognitiveRuntime: "agents" as const,
+    sessionId: "sess:o2",
+    memoryBAvailability: "unavailable" as const,
+    memoryBCompactionState: "none" as const,
+    memoryBCompactionDetails: null,
+    selectedModelId: "fake-o2-model",
+    selectedReasoningEffort: "low",
+    adaptiveObserve: {
+      requestedMaxTurns: 8,
+      effectiveMaxTurns: 8,
+      strategyClass: "Focused",
+      reasonCodes: [],
+      floor: 4,
+      ceiling: 24,
+      explicitOverride: false,
+    },
+    continuationObserve: {
+      continued: false,
+      segmentsExecuted: 1,
+      missionMaxTurns: 8,
+      segmentMaxTurns: 8,
+      allottedTurns: 8,
+      stopReason: "complete",
+      reasonCodes: [],
+    },
+    ...overrides,
+  };
+}
+
+function qaRow(runId: string, scenarioId = "P6-O2-DET-01"): Record<string, unknown> {
+  return {
+    kind: "p6_campaign_run",
+    campaignId: P6_CAMPAIGN_ID,
+    runId,
+    scenarioId,
+    verdict: "PASS",
+    ok: true,
+    hardPass: true,
+    workloadId: "WL-O2-DET",
+    executionMode: "DETERMINISTIC",
+    proofTarget: "O2_LINKED_EVIDENCE",
+    capturedAt: "2026-10-14T00:00:00.000Z",
+    reserves: ["DET_SCOPE_ONLY"],
+  };
+}
+
+async function sha256File(filePath: string): Promise<string> {
+  const { createHash } = await import("node:crypto");
+  const buf = fs.readFileSync(filePath);
+  return createHash("sha256").update(buf).digest("hex");
+}
+
+describe("P6 O2 operational wiring (DET)", () => {
+  let workspaceRoot: string;
+  let ledgerPath: string;
+  let sessionDbPath: string;
+
+  beforeEach(() => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    delete process.env.OPENAI_API_KEY;
+    delete process.env.SFIA_P6_REAL_GATE;
+    getProjectRuntimeActionMock.mockResolvedValue(projectRuntime());
+    runNoraCognitiveTurnMock.mockResolvedValue(fakeTurn());
+    setConversationProviderForTests(null);
+    clearCognitiveExecutionReceiptRegistryForTests();
+    workspaceRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-o2-"));
+    ledgerPath = resolveP6EvidenceLedgerPath(workspaceRoot);
+    sessionDbPath = path.join(workspaceRoot, "session.sqlite");
+  });
+
+  afterEach(() => {
+    setConversationProviderForTests(null);
+    clearCognitiveExecutionReceiptRegistryForTests();
+    fs.rmSync(workspaceRoot, { recursive: true, force: true });
+  });
+
+  it("O2-01…O2-09 / O2-35 / O2-36 — Product path WITH receipt → QA + linked cognitive", async () => {
+    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
+    resetRuntimeApplicationServiceForTests();
+    // Use real OA project load for F2 (mock would hide createProject).
+    const actualActions = await vi.importActual<
+      typeof import("@/lib/vertical-slice-runtime/actions")
+    >("@/lib/vertical-slice-runtime/actions");
+    getProjectRuntimeActionMock.mockImplementation((projectId: string) =>
+      actualActions.getProjectRuntimeAction(projectId),
+    );
+
+    const oaDb = path.join(workspaceRoot, "oa-product.sqlite");
+    const runtime = getRuntimeApplicationService({
+      productDbPath: oaDb,
+      auditMode: "noop",
+      nowIso: "2026-10-14T00:00:00.000Z",
+    });
+    const created = await runtime.createProject({
+      name: "Projet O2 Wiring",
+      objective: "O2 DET linked evidence.",
+      context: "Contexte O2 operational wiring.",
+      criticality: "STANDARD",
+      constraints: ["Lecture seule"],
+      shortReference: "O2W",
+      idempotencyKey: `idem:o2-${Date.now()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) throw new Error("O2 PATH A createProject failed");
+    const projectId = created.projectId;
+
+    const provider = new FakeConversationProvider();
+    const product = await orchestrateAssistantSend({
+      projectId,
+      content: "Résume l'objectif __F2_INFORMATIVE__",
+      sessionDbPath,
+      provider,
+    });
+    expect(
+      product.ok,
+      !product.ok
+        ? `Product path failed: status=${product.status} code=${"code" in product ? product.code : "?"}`
+        : undefined,
+    ).toBe(true);
+    if (!product.ok) return;
+    expect(product.cognitiveExecutionReceipt).toBeDefined();
+    // Existing Product surface: F2 → f1_informative when marker present.
+    expect(product.f2?.turnKind).toBe("f1_informative");
+    const receipt = product.cognitiveExecutionReceipt!;
+    // Restore default mock for subsequent assertions in this file's other tests.
+    getProjectRuntimeActionMock.mockResolvedValue(projectRuntime());
+    resetRuntimeApplicationServiceForTests();
+
+    const qaRunId = "P6-O2-QA-RUN-PATH-A";
+    const cognitiveRunId = "P6-O2-COG-RUN-PATH-A";
+    expect(qaRunId).not.toBe(cognitiveRunId);
+    expect(cognitiveRunId).not.toBe(receipt.logicalTurnId);
+
+    const wired = wireP6O2OperationalEvidence({
+      qaRow: qaRow(qaRunId),
+      productTurnResult: product,
+      cognitiveRunId,
+      absolutePath: ledgerPath,
+    });
+    expect(wired.qa.ok).toBe(true);
+    expect(wired.cognitive.ok).toBe(true);
+    if (!wired.cognitive.ok) return;
+    expect(wired.cognitive.status).toBe("appended");
+    if (wired.cognitive.status !== "appended") return;
+
+    // O2-07 — QA persisted before receipt (file order).
+    const raw = fs.readFileSync(ledgerPath, "utf8").trim().split("\n");
+    expect(raw).toHaveLength(2);
+    const first = JSON.parse(raw[0]!) as Record<string, unknown>;
+    const second = JSON.parse(raw[1]!) as Record<string, unknown>;
+    expect(first.runId).toBe(qaRunId);
+    expect(first.kind).toBe("p6_campaign_run");
+    expect(second.runId).toBe(cognitiveRunId);
+    expect(second.kind).toBe("cognitive_execution_receipt");
+    expect(second.linkedQaRunId).toBe(qaRunId);
+
+    // O2-08 readback
+    const pair = resolveP6O2LinkedEvidencePair(qaRunId, {
+      absolutePath: ledgerPath,
+    });
+    expect(pair.ok).toBe(true);
+    if (!pair.ok) return;
+    expect(pair.integrityPass).toBe(true);
+    expect(pair.cardinality).toBe("qa_plus_one_receipt");
+    expect(pair.qaRow.campaignId).toBe(P6_CAMPAIGN_ID);
+    expect(pair.qaRow.scenarioId).toBe("P6-O2-DET-01");
+    expect(pair.receiptRow?.linkedQaRunId).toBe(qaRunId);
+    expect(pair.receiptRow?.scenarioId).toBe(pair.qaRow.scenarioId);
+    expect(pair.receiptRow?.campaignId).toBe(pair.qaRow.campaignId);
+
+    // O2-04 / O2-05 conservation
+    expect(pair.qaRow.verdict).toBe("PASS");
+    expect(pair.qaRow.hardPass).toBe(true);
+    const mismatches = diffReceiptAgainstLedgerEntry(receipt, pair.receiptRow!);
+    expect(mismatches).toEqual([]);
+
+    // O2-09
+    const reopened = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(reopened.integrity).toBe("HEALTHY");
+    expect(reopened.integrityPass).toBe(true);
+    expect(reopened.o2LinkErrors).toBe(0);
+
+    // O2-23 Fake ≠ REAL
+    expect(pair.receiptRow?.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
+    expect(pair.receiptRow?.productRealProofStatus).toBe("NOT_PROVEN");
+    expect(pair.receiptRow?.realBoundaryClaim).toBe("NOT_CLAIMED");
+  });
+
+  it("O2-18 / O2-19 — PATH B fail-closed WITHOUT receipt → QA only, no fabrication", async () => {
+    const product = await orchestrateAssistantSend({
+      projectId: "prj:p6-o2",
+      content: "   ",
+      sessionDbPath,
+      provider: new FakeConversationProvider(),
+    });
+    expect(product.ok).toBe(false);
+    expect(product.status).toBe("validation_error");
+    expect(product.cognitiveExecutionReceipt).toBeUndefined();
+
+    const qaRunId = "P6-O2-QA-RUN-PATH-B";
+    const wired = wireP6O2OperationalEvidence({
+      qaRow: {
+        ...qaRow(qaRunId, "P6-O2-DET-PATH-B"),
+        verdict: "FAIL_CLOSED_OBSERVED",
+        ok: false,
+        hardPass: false,
+      },
+      productTurnResult: product,
+      cognitiveRunId: "P6-O2-COG-SHOULD-NOT-EXIST",
+      absolutePath: ledgerPath,
+    });
+    expect(wired.qa.ok).toBe(true);
+    expect(wired.cognitive).toEqual({
+      ok: true,
+      status: "qa_only_no_receipt",
+    });
+
+    const pair = resolveP6O2LinkedEvidencePair(qaRunId, {
+      absolutePath: ledgerPath,
+    });
+    expect(pair.ok).toBe(true);
+    if (!pair.ok) return;
+    expect(pair.cardinality).toBe("qa_only");
+    expect(pair.receiptRow).toBeNull();
+    expect(pair.integrityPass).toBe(true);
+
+    const byLink = findP6EvidenceLedgerRowsByLinkedQaRunId(qaRunId, {
+      absolutePath: ledgerPath,
+    });
+    expect(byLink.matches).toHaveLength(0);
+  });
+
+  it("O2-10 — orphan linkedQaRunId refused at write", () => {
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:orphan",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    const result = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-ORPHAN",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-MISSING",
+      absolutePath: ledgerPath,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.status).toBe("o2_link_rejected");
+    expect(fs.existsSync(ledgerPath) ? fs.readFileSync(ledgerPath, "utf8") : "").toBe(
+      "",
+    );
+  });
+
+  it("O2-11 — link target wrong kind refused", () => {
+    const otherReceipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:target-receipt",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    // Legacy unlinked capture as a non-QA target.
+    const seeded = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt: otherReceipt,
+      runId: "P6-O2-NOT-QA",
+      scenarioId: "P6-O2-DET-01",
+      absolutePath: ledgerPath,
+    });
+    expect(seeded.ok).toBe(true);
+
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:bad-kind",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn({ providerResponseId: "fake-o2-resp-2" }) as never,
+    });
+    const result = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-BAD-KIND",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-NOT-QA",
+      absolutePath: ledgerPath,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.status).toBe("o2_link_rejected");
+  });
+
+  it("O2-12 / O2-13 — campaign / scenario mismatch refused", () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-MISMATCH"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+
+    // O2-12 — foreign-campaign QA row present via raw bytes (cannot append via secured writer).
+    fs.appendFileSync(
+      ledgerPath,
+      `${JSON.stringify({
+        kind: "p6_campaign_run",
+        campaignId: "OTHER-CAMPAIGN",
+        runId: "P6-O2-QA-OTHER-CAMP",
+        scenarioId: "P6-O2-DET-01",
+      })}\n`,
+      "utf8",
+    );
+
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:mismatch",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    const badScenario = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-BAD-SCENARIO",
+      scenarioId: "P6-O2-OTHER-SCENARIO",
+      linkedQaRunId: "P6-O2-QA-MISMATCH",
+      absolutePath: ledgerPath,
+    });
+    expect(badScenario.ok).toBe(false);
+    if (!badScenario.ok) {
+      // Ledger may already be DEGRADED after foreign campaign raw row, or link reject.
+      expect(["o2_link_rejected", "integrity_blocks_capture"]).toContain(
+        badScenario.status,
+      );
+    }
+
+    // Isolated scenario mismatch on HEALTHY ledger
+    const cleanRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-o2-scen-"));
+    const cleanLedger = resolveP6EvidenceLedgerPath(cleanRoot);
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-SCEN"), {
+        absolutePath: cleanLedger,
+      }).ok,
+    ).toBe(true);
+    const scen = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-BAD-SCENARIO-2",
+      scenarioId: "P6-O2-OTHER-SCENARIO",
+      linkedQaRunId: "P6-O2-QA-SCEN",
+      absolutePath: cleanLedger,
+    });
+    expect(scen.ok).toBe(false);
+    if (!scen.ok) {
+      expect(scen.status).toBe("o2_link_rejected");
+      expect(scen.message).toMatch(/scenarioId/i);
+    }
+
+    // Campaign mismatch on HEALTHY ledger with raw foreign target only
+    const campRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-o2-camp-"));
+    const campLedger = resolveP6EvidenceLedgerPath(campRoot);
+    fs.mkdirSync(path.dirname(campLedger), { recursive: true });
+    fs.writeFileSync(
+      campLedger,
+      `${JSON.stringify({
+        kind: "p6_campaign_run",
+        campaignId: "OTHER-CAMPAIGN",
+        runId: "P6-O2-QA-FOREIGN",
+        scenarioId: "P6-O2-DET-01",
+      })}\n`,
+      "utf8",
+    );
+    const camp = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-BAD-CAMP",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-FOREIGN",
+      absolutePath: campLedger,
+    });
+    expect(camp.ok).toBe(false);
+    if (!camp.ok) {
+      expect(camp.status).toBe("o2_link_rejected");
+      // Foreign campaignId makes the row O2-ineligible (CP01-02) before
+      // the same-campaign pairwise compare — both are honest refusals.
+      expect(camp.message).toMatch(/O2-eligible|campaignId/i);
+    }
+    fs.rmSync(cleanRoot, { recursive: true, force: true });
+    fs.rmSync(campRoot, { recursive: true, force: true });
+  });
+
+  it("O2-14 — second receipt for same QA run refused", () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-CARD"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const r1 = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:card-1",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    expect(
+      captureCognitiveExecutionReceiptToP6Ledger({
+        receipt: r1,
+        runId: "P6-O2-COG-CARD-1",
+        scenarioId: "P6-O2-DET-01",
+        linkedQaRunId: "P6-O2-QA-CARD",
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+
+    const r2 = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:card-2",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn({ providerResponseId: "fake-o2-resp-3" }) as never,
+    });
+    const second = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt: r2,
+      runId: "P6-O2-COG-CARD-2",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-CARD",
+      absolutePath: ledgerPath,
+    });
+    expect(second.ok).toBe(false);
+    if (!second.ok) {
+      expect(second.status).toBe("o2_link_rejected");
+      expect(second.message).toMatch(/cardinality/i);
+    }
+  });
+
+  it("O2-15 / O2-16 — same runId QA+receipt and runId=logicalTurnId refused", () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-SHARED-ID"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:shared",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    // O2-15 — cognitive runId collides with existing QA runId
+    const sameAsQa = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-SHARED-ID",
+      scenarioId: "P6-O2-DET-01",
+      absolutePath: ledgerPath,
+    });
+    expect(sameAsQa.ok).toBe(false);
+    if (!sameAsQa.ok) expect(sameAsQa.status).toBe("duplicate_rejected");
+
+    // linkedQaRunId must not equal cognitive runId
+    const linkEqRun = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-LINK-EQ",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-COG-LINK-EQ",
+      absolutePath: ledgerPath,
+    });
+    expect(linkEqRun.ok).toBe(false);
+    if (!linkEqRun.ok) expect(linkEqRun.status).toBe("o2_link_rejected");
+
+    // O2-16
+    const eqLogical = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: receipt.logicalTurnId,
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-SHARED-ID",
+      absolutePath: ledgerPath,
+    });
+    expect(eqLogical.ok).toBe(false);
+    if (!eqLogical.ok) expect(eqLogical.status).toBe("identity_mismatch");
+  });
+
+  it("O2-17 — duplicate skip incompatible when linkedQaRunId differs", () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-DUP-A"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-DUP-B", "P6-O2-DET-01"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:dup",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    const first = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-DUP",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-DUP-A",
+      absolutePath: ledgerPath,
+    });
+    expect(first.ok).toBe(true);
+
+    const conflict = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-DUP",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-DUP-B",
+      absolutePath: ledgerPath,
+      onDuplicate: "skip",
+    });
+    expect(conflict.ok).toBe(false);
+    if (!conflict.ok) expect(conflict.status).toBe("duplicate_conflict");
+
+    // Sanity: durable compare distinguishes link field
+    expect(
+      durableLedgerContentEquivalent(
+        { ledgerSchemaVersion: 2, linkedQaRunId: "A", logicalTurnId: "x" },
+        { ledgerSchemaVersion: 2, linkedQaRunId: "B", logicalTurnId: "x" },
+      ),
+    ).toBe(false);
+  });
+
+  it("O2-20 / O2-21 — FAILED historical preserved; no rewrite", () => {
+    const failed = {
+      ...qaRow("P6-O2-QA-FAILED"),
+      verdict: "FAILED",
+      ok: false,
+      hardPass: false,
+    };
+    expect(
+      appendValidatedP6CampaignLedgerRow(failed, { absolutePath: ledgerPath }).ok,
+    ).toBe(true);
+    const before = fs.readFileSync(ledgerPath, "utf8");
+    const rewriteAttempt = appendValidatedP6CampaignLedgerRow(
+      { ...failed, verdict: "PASS", ok: true },
+      { absolutePath: ledgerPath },
+    );
+    expect(rewriteAttempt.ok).toBe(false);
+    expect(fs.readFileSync(ledgerPath, "utf8")).toBe(before);
+    const found = findP6EvidenceLedgerRowsByRunId("P6-O2-QA-FAILED", {
+      absolutePath: ledgerPath,
+    });
+    expect(found.matches[0]?.verdict).toBe("FAILED");
+  });
+
+  it("O2-22 — sensitive payload refused", () => {
+    const bad = validateLedgerRowForAppend({
+      kind: "p6_campaign_run",
+      campaignId: P6_CAMPAIGN_ID,
+      runId: "P6-O2-SENS",
+      scenarioId: "P6-O2-DET-01",
+      api_key: "sk-should-not-pass",
+    });
+    expect(bad.ok).toBe(false);
+  });
+
+  it("O2-24 / O2-25 — NOT_OBSERVED conserved; capture fail ≠ provider_error", async () => {
+    runNoraCognitiveTurnMock.mockRejectedValue(new Error("FAKE_PROVIDER_ERROR"));
+    const product = await orchestrateProjectAssistantTurn({
+      projectId: "prj:p6-o2",
+      content: "provider error path",
+      sessionDbPath,
+    });
+    expect(product.ok).toBe(false);
+    if (product.ok) return;
+    expect(product.status).toBe("provider_error");
+    expect(product.cognitiveExecutionReceipt).toBeDefined();
+    // Justified observation under Fake / test_provider (never PROVIDER_CONFIRMED).
+    const obs = product.cognitiveExecutionReceipt!.providerResponseObservation;
+    expect(["NOT_OBSERVED", "FAKE_DETERMINISTIC"]).toContain(obs);
+    expect(product.cognitiveExecutionReceipt!.realProofStatus).toBe("NOT_PROVEN");
+
+    const qaRunId = "P6-O2-QA-PROV-ERR";
+    const wired = wireP6O2OperationalEvidence({
+      qaRow: {
+        ...qaRow(qaRunId, "P6-O2-DET-PROV"),
+        verdict: "PROVIDER_ERROR_OBSERVED",
+        ok: false,
+        hardPass: false,
+      },
+      productTurnResult: product,
+      cognitiveRunId: "P6-O2-COG-PROV-ERR",
+      absolutePath: ledgerPath,
+    });
+    expect(wired.qa.ok).toBe(true);
+    expect(wired.cognitive.ok).toBe(true);
+
+    // Capture failure must not mutate Product status
+    expect(product.status).toBe("provider_error");
+
+    const pair = resolveP6O2LinkedEvidencePair(qaRunId, {
+      absolutePath: ledgerPath,
+    });
+    expect(pair.ok).toBe(true);
+    if (!pair.ok) return;
+    expect(["NOT_OBSERVED", "FAKE_DETERMINISTIC"]).toContain(
+      pair.receiptRow?.providerResponseObservation,
+    );
+    if (pair.receiptRow?.providerResponseObservation === "NOT_OBSERVED") {
+      expect(pair.receiptRow.providerResponseId).toBeNull();
+    }
+  });
+
+  it("O2-26 / O2-27 — Product SQLite untouched by capture; MONO_WRITER unchanged", async () => {
+    const product = await orchestrateProjectAssistantTurn({
+      projectId: "prj:p6-o2",
+      content: "sqlite isolation",
+      sessionDbPath,
+    });
+    expect(product.ok).toBe(true);
+    const sqliteBefore = fs.existsSync(sessionDbPath)
+      ? fs.readFileSync(sessionDbPath)
+      : null;
+
+    wireP6O2OperationalEvidence({
+      qaRow: qaRow("P6-O2-QA-SQLITE"),
+      productTurnResult: product,
+      cognitiveRunId: "P6-O2-COG-SQLITE",
+      absolutePath: ledgerPath,
+    });
+
+    const sqliteAfter = fs.existsSync(sessionDbPath)
+      ? fs.readFileSync(sessionDbPath)
+      : null;
+    expect(sqliteAfter?.equals(sqliteBefore ?? Buffer.alloc(0)) ?? true).toBe(
+      true,
+    );
+    expect(P6_LEDGER_CONCURRENCY_MODEL).toBe("MONO_WRITER");
+    expect(P6_QA_COLLECTION_SEAM_STATUS.o2LinkContract).toBe(
+      "MINIMAL_LINKED_QA_RUN_ID",
+    );
+  });
+
+  it("O2-28 — DEGRADED ledger blocks writes", () => {
+    fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });
+    fs.writeFileSync(ledgerPath, "{not-json\n", "utf8");
+    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(read.integrityPass).toBe(false);
+
+    const qa = appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-DEG"), {
+      absolutePath: ledgerPath,
+    });
+    expect(qa.ok).toBe(false);
+    if (!qa.ok) expect(qa.code).toBe("LEDGER_INTEGRITY_BLOCKS_APPEND");
+  });
+
+  it("O2-29 — orphan receipt on disk diagnosed after relecture", () => {
+    fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });
+    const orphanReceipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:orphan-disk",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    const entry = {
+      kind: "cognitive_execution_receipt",
+      ledgerSchemaVersion: 2,
+      campaignId: P6_CAMPAIGN_ID,
+      runId: "P6-O2-COG-ORPHAN-DISK",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-NEVER-WRITTEN",
+      logicalTurnId: orphanReceipt.logicalTurnId,
+      projectId: orphanReceipt.projectId,
+      runtimeIdentity: orphanReceipt.runtimeIdentity,
+      providerIdentity: orphanReceipt.providerIdentity,
+      presentation: orphanReceipt.presentation,
+      providerConfigured: orphanReceipt.providerConfigured,
+      providerResponseId: orphanReceipt.providerResponseId,
+      providerResponseObservation: orphanReceipt.providerResponseObservation,
+      proofClassification: orphanReceipt.proofClassification,
+      productRealProofStatus: orphanReceipt.realProofStatus,
+      realBoundaryClaim: "NOT_CLAIMED",
+      selectedModelId: orphanReceipt.selectedModelId,
+      observedModel: orphanReceipt.observedModel,
+      selectedReasoningEffort: orphanReceipt.selectedReasoningEffort,
+      usage: orphanReceipt.usage,
+      adaptiveObserve: orphanReceipt.adaptiveObserve,
+      continuationObserve: orphanReceipt.continuationObserve,
+      toolCalls: orphanReceipt.toolCalls,
+      limitReached: orphanReceipt.limitReached,
+      productTerminalStatus: orphanReceipt.productTerminalStatus,
+      productConservation: orphanReceipt.conservation,
+      productCapturedAt: orphanReceipt.capturedAt,
+      captureStatus: "CAPTURED",
+    };
+    fs.writeFileSync(ledgerPath, `${JSON.stringify(entry)}\n`, "utf8");
+    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(read.integrityPass).toBe(false);
+    expect(read.integrity).toBe("DEGRADED");
+    expect(read.o2LinkErrors).toBeGreaterThan(0);
+    expect(read.o2LinkDiagnostics.some((d) => d.code === "O2_LINK_ORPHAN")).toBe(
+      true,
+    );
+  });
+
+  it("O2-30 — multiple receipts linked to same QA diagnosed on read", () => {
+    fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });
+    const qa = qaRow("P6-O2-QA-MULTI");
+    const mk = (runId: string, logicalTurnId: string) => {
+      const receipt = buildCognitiveExecutionReceipt({
+        logicalTurnId,
+        projectId: "prj:p6-o2",
+        presentation: "test_provider",
+        productTerminalStatus: "ok",
+        turn: fakeTurn({
+          providerResponseId: `fake-${runId}`,
+        }) as never,
+      });
+      return {
+        kind: "cognitive_execution_receipt",
+        ledgerSchemaVersion: 2,
+        campaignId: P6_CAMPAIGN_ID,
+        runId,
+        scenarioId: "P6-O2-DET-01",
+        linkedQaRunId: "P6-O2-QA-MULTI",
+        logicalTurnId: receipt.logicalTurnId,
+        projectId: receipt.projectId,
+        runtimeIdentity: receipt.runtimeIdentity,
+        providerIdentity: receipt.providerIdentity,
+        presentation: receipt.presentation,
+        providerConfigured: receipt.providerConfigured,
+        providerResponseId: receipt.providerResponseId,
+        providerResponseObservation: receipt.providerResponseObservation,
+        proofClassification: receipt.proofClassification,
+        productRealProofStatus: receipt.realProofStatus,
+        realBoundaryClaim: "NOT_CLAIMED",
+        selectedModelId: receipt.selectedModelId,
+        observedModel: receipt.observedModel,
+        selectedReasoningEffort: receipt.selectedReasoningEffort,
+        usage: receipt.usage,
+        adaptiveObserve: receipt.adaptiveObserve,
+        continuationObserve: receipt.continuationObserve,
+        toolCalls: receipt.toolCalls,
+        limitReached: receipt.limitReached,
+        productTerminalStatus: receipt.productTerminalStatus,
+        productConservation: receipt.conservation,
+        productCapturedAt: receipt.capturedAt,
+        captureStatus: "CAPTURED",
+      };
+    };
+    fs.writeFileSync(
+      ledgerPath,
+      [qa, mk("P6-O2-COG-M1", "ltu:m1"), mk("P6-O2-COG-M2", "ltu:m2")]
+        .map((r) => JSON.stringify(r))
+        .join("\n") + "\n",
+      "utf8",
+    );
+    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(read.integrityPass).toBe(false);
+    expect(
+      read.o2LinkDiagnostics.some((d) => d.code === "O2_LINK_CARDINALITY"),
+    ).toBe(true);
+    const pair = resolveP6O2LinkedEvidencePair("P6-O2-QA-MULTI", {
+      absolutePath: ledgerPath,
+    });
+    expect(pair.ok).toBe(false);
+    if (!pair.ok) expect(pair.code).toBe("O2_LINK_CARDINALITY");
+  });
+
+  it("O2-31 — unlinked historical v2 receipt remains readable (no false O2 promotion)", () => {
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:legacy",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    const result = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-LEGACY-UNLINKED",
+      scenarioId: "P6-O2-DET-01",
+      absolutePath: ledgerPath,
+    });
+    expect(result.ok).toBe(true);
+    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(read.integrityPass).toBe(true);
+    expect(read.o2LinkErrors).toBe(0);
+    expect(read.rows[0]?.linkedQaRunId).toBeUndefined();
+  });
+
+  it("O2-32 / CP01-01-A…D/F — portable archive fixture isolation (no user path)", async () => {
+    const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-o2-arch-fix-"));
+    const activeRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-o2-arch-act-"));
+    try {
+      const archiveFixture = path.join(
+        fixtureRoot,
+        "archive",
+        "evidence-ledger.jsonl",
+      );
+      fs.mkdirSync(path.dirname(archiveFixture), { recursive: true });
+      const archiveBytes =
+        `${JSON.stringify({
+          kind: "p6_campaign_run",
+          campaignId: P6_CAMPAIGN_ID,
+          runId: "P6-O2-ARCH-FIXTURE",
+          scenarioId: "P6-O2-DET-ARCH",
+          verdict: "HISTORICAL_FIXTURE",
+        })}\n`;
+      fs.writeFileSync(archiveFixture, archiveBytes, "utf8");
+      const shaBefore = await sha256File(archiveFixture);
+
+      const activeLedger = resolveP6EvidenceLedgerPath(activeRoot);
+      expect(activeLedger).not.toBe(archiveFixture);
+      expect(activeLedger.endsWith(P6_EVIDENCE_LEDGER_RELATIVE_PATH)).toBe(true);
+
+      const written = appendValidatedP6CampaignLedgerRow(
+        qaRow("P6-O2-QA-ARCH-CHECK"),
+        { absolutePath: activeLedger },
+      );
+      expect(written.ok).toBe(true);
+
+      // CP01-01-B/D — archive fixture bytes unchanged; no rewrite.
+      expect(fs.readFileSync(archiveFixture, "utf8")).toBe(archiveBytes);
+      expect(await sha256File(archiveFixture)).toBe(shaBefore);
+
+      // CP01-01-C — active distinct; not a copy of archive.
+      const activeRaw = fs.readFileSync(activeLedger, "utf8");
+      expect(activeRaw).not.toBe(archiveBytes);
+      expect(activeRaw).toContain("P6-O2-QA-ARCH-CHECK");
+      expect(activeRaw).not.toContain("P6-O2-ARCH-FIXTURE");
+    } finally {
+      fs.rmSync(fixtureRoot, { recursive: true, force: true });
+      fs.rmSync(activeRoot, { recursive: true, force: true });
+    }
+  });
+
+  it("CP01-01-E/F — real historical archive check is optional (env); absence is not DET failure", async () => {
+    const realPath = resolveOptionalRealHistoricalArchivePath();
+    if (!realPath || !fs.existsSync(realPath)) {
+      // Portable DET must not fail when the Morris archive worktree is absent (CI).
+      expect(realPath == null || !fs.existsSync(realPath)).toBe(true);
+      return;
+    }
+    const sha = await sha256File(realPath);
+    expect(sha).toBe(ARCHIVE_SHA_EXPECTED);
+    // Write only to isolated DET ledger — real archive unchanged.
+    appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-REAL-ARCH-PROBE"), {
+      absolutePath: ledgerPath,
+    });
+    expect(await sha256File(realPath)).toBe(ARCHIVE_SHA_EXPECTED);
+  });
+
+  it("CP01-02 — O2 QA target eligibility ≠ historical readability", () => {
+    // CP01-02-A — explicit QA
+    expect(
+      isP6O2QaLinkTargetEligible({
+        kind: "p6_campaign_run",
+        campaignId: P6_CAMPAIGN_ID,
+        runId: "P6-O2-QA-ELIG",
+        scenarioId: "P6-O2-DET-01",
+      }),
+    ).toBe(true);
+
+    // CP01-02-D — historical campaign (absent kind) eligible with identity fields
+    expect(
+      isP6O2QaLinkTargetEligible({
+        campaignId: P6_CAMPAIGN_ID,
+        runId: "P6-O2-QA-HIST",
+        scenarioId: "P6-O2-DET-01",
+        verdict: "PASS",
+      }),
+    ).toBe(true);
+    expect(isP6HistoricalReadableCampaignKind(undefined)).toBe(true);
+
+    // CP01-02-B — cognitive refused
+    expect(
+      isP6O2QaLinkTargetEligible({
+        kind: "cognitive_execution_receipt",
+        campaignId: P6_CAMPAIGN_ID,
+        runId: "P6-O2-COG",
+        scenarioId: "P6-O2-DET-01",
+      }),
+    ).toBe(false);
+
+    // CP01-02-C — administrative / diagnostic refused as O2 targets but historically readable
+    expect(
+      isP6HistoricalReadableCampaignKind("ROOT_CAUSE_INVESTIGATION_READONLY"),
+    ).toBe(true);
+    expect(
+      isP6O2QaLinkTargetEligible({
+        kind: "ROOT_CAUSE_INVESTIGATION_READONLY",
+        campaignId: P6_CAMPAIGN_ID,
+        runId: "P6-O2-ADMIN-RC",
+        scenarioId: "HQA-01-GUIDANCE-ONLY",
+        verdict: "NOTE",
+      }),
+    ).toBe(false);
+    expect(isP6HistoricalReadableCampaignKind("RUNTIME_REQUALIFICATION")).toBe(
+      true,
+    );
+    expect(
+      isP6O2QaLinkTargetEligible({
+        kind: "RUNTIME_REQUALIFICATION",
+        campaignId: P6_CAMPAIGN_ID,
+        runId: "P6-O2-ADMIN-RR",
+        scenarioId: "RUNTIME-REQ",
+        verdict: "NOTE",
+      }),
+    ).toBe(false);
+  });
+
+  it("CP01-02-C/G/H — admin target refused at write; invalid link on disk diagnosed", () => {
+    fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });
+    const admin = {
+      kind: "RUNTIME_REQUALIFICATION",
+      campaignId: P6_CAMPAIGN_ID,
+      runId: "P6-O2-ADMIN-TARGET",
+      scenarioId: "P6-O2-DET-01",
+      verdict: "ADMIN",
+    };
+    // Historical readability: append via raw bytes (admin kind not O2-eligible).
+    fs.writeFileSync(ledgerPath, `${JSON.stringify(admin)}\n`, "utf8");
+    const healthyAdmin = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(healthyAdmin.integrityPass).toBe(true); // CP01-02-F historically readable
+    expect(healthyAdmin.o2LinkErrors).toBe(0);
+
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:admin-link",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    const rejected = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-ADMIN-LINK",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-ADMIN-TARGET",
+      absolutePath: ledgerPath,
+    });
+    expect(rejected.ok).toBe(false);
+    if (!rejected.ok) expect(rejected.status).toBe("o2_link_rejected");
+
+    // CP01-02-H — raw invalid link on disk → DEGRADED after reopen
+    const orphanLink = {
+      kind: "cognitive_execution_receipt",
+      ledgerSchemaVersion: 2,
+      campaignId: P6_CAMPAIGN_ID,
+      runId: "P6-O2-COG-BAD-ADMIN-LINK",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-ADMIN-TARGET",
+      logicalTurnId: receipt.logicalTurnId,
+      projectId: receipt.projectId,
+      runtimeIdentity: receipt.runtimeIdentity,
+      providerIdentity: receipt.providerIdentity,
+      presentation: receipt.presentation,
+      providerConfigured: receipt.providerConfigured,
+      providerResponseId: receipt.providerResponseId,
+      providerResponseObservation: receipt.providerResponseObservation,
+      proofClassification: receipt.proofClassification,
+      productRealProofStatus: receipt.realProofStatus,
+      realBoundaryClaim: "NOT_CLAIMED",
+      selectedModelId: receipt.selectedModelId,
+      observedModel: receipt.observedModel,
+      selectedReasoningEffort: receipt.selectedReasoningEffort,
+      usage: receipt.usage,
+      adaptiveObserve: receipt.adaptiveObserve,
+      continuationObserve: receipt.continuationObserve,
+      toolCalls: receipt.toolCalls,
+      limitReached: receipt.limitReached,
+      productTerminalStatus: receipt.productTerminalStatus,
+      productConservation: receipt.conservation,
+      productCapturedAt: receipt.capturedAt,
+      captureStatus: "CAPTURED",
+    };
+    fs.appendFileSync(ledgerPath, `${JSON.stringify(orphanLink)}\n`, "utf8");
+    const degraded = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(degraded.integrityPass).toBe(false);
+    expect(
+      degraded.o2LinkDiagnostics.some((d) => d.code === "O2_LINK_TARGET_KIND"),
+    ).toBe(true);
+
+    const pair = resolveP6O2LinkedEvidencePair("P6-O2-ADMIN-TARGET", {
+      absolutePath: ledgerPath,
+    });
+    expect(pair.ok).toBe(false);
+    if (!pair.ok) expect(pair.code).toBe("O2_TARGET_NOT_QA");
+  });
+
+  it("CP01-02-D/G — historical absent-kind QA row accepted as link target (write+read)", () => {
+    fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });
+    const histQa = {
+      // no kind — historical campaign QA result shape
+      campaignId: P6_CAMPAIGN_ID,
+      runId: "P6-O2-QA-HIST-LINK",
+      scenarioId: "P6-O2-DET-01",
+      verdict: "PASS",
+      ok: true,
+    };
+    fs.writeFileSync(ledgerPath, `${JSON.stringify(histQa)}\n`, "utf8");
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:hist-link",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    const linked = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-HIST-LINK",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-HIST-LINK",
+      absolutePath: ledgerPath,
+    });
+    expect(linked.ok).toBe(true);
+    const pair = resolveP6O2LinkedEvidencePair("P6-O2-QA-HIST-LINK", {
+      absolutePath: ledgerPath,
+    });
+    expect(pair.ok).toBe(true);
+    if (!pair.ok) return;
+    expect(pair.integrityPass).toBe(true);
+    expect(pair.cardinality).toBe("qa_plus_one_receipt");
+  });
+
+  it("O2-33 / O2-34 — no REAL env gates; seam status honest", () => {
+    expect(process.env.OPENAI_API_KEY).toBeUndefined();
+    expect(process.env.SFIA_P6_REAL_GATE).toBeUndefined();
+    expect(P6_QA_COLLECTION_SEAM_STATUS.historicalHarnessMigration).toBe(
+      "NOT_DONE",
+    );
+    expect(P6_QA_COLLECTION_SEAM_STATUS.operationalCampaignWiring).toBe(
+      "O2_DET_IMPLEMENTED",
+    );
+  });
+
+  it("cognitive skipped when QA append fails", () => {
+    const wired = wireP6O2OperationalEvidence({
+      qaRow: {
+        kind: "p6_campaign_run",
+        // missing campaignId → validation fail
+        runId: "P6-O2-QA-BAD",
+        scenarioId: "P6-O2-DET-01",
+      },
+      productTurnResult: {
+        ok: true,
+        status: "ok",
+        mode: "fixture",
+        message: "x",
+        logicalTurnId: "ltu:x",
+      } as never,
+      cognitiveRunId: "P6-O2-COG-SKIP",
+      absolutePath: ledgerPath,
+    });
+    expect(wired.qa.ok).toBe(false);
+    expect(wired.cognitive).toMatchObject({
+      ok: false,
+      status: "cognitive_skipped_qa_failed",
+    });
+  });
+
+  it("collectP6ProductTurnEvidence forwards linkedQaRunId", async () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-SEAM"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const product = await orchestrateProjectAssistantTurn({
+      projectId: "prj:p6-o2",
+      content: "seam link forward",
+      sessionDbPath,
+    });
+    expect(product.ok).toBe(true);
+    if (!product.ok) return;
+    const collected = collectP6ProductTurnEvidence({
+      productTurnResult: product,
+      runId: "P6-O2-COG-SEAM",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-SEAM",
+      absolutePath: ledgerPath,
+    });
+    expect(collected.ok).toBe(true);
+    const byLink = findP6EvidenceLedgerRowsByLinkedQaRunId("P6-O2-QA-SEAM", {
+      absolutePath: ledgerPath,
+    });
+    expect(byLink.matches).toHaveLength(1);
+    expect(byLink.matches[0]?.runId).toBe("P6-O2-COG-SEAM");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.receiptCompleteness.d0.test.ts b/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.receiptCompleteness.d0.test.ts
index fcc8c2d7..78ea12b9 100644
--- a/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.receiptCompleteness.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.receiptCompleteness.d0.test.ts
@@ -361,7 +361,7 @@ describe("P6 receipt completeness (DET)", () => {
     expect(dto.status).toBe("ok");
     expect(P6_QA_COLLECTION_SEAM_STATUS.deterministicProven).toBe(true);
     expect(P6_QA_COLLECTION_SEAM_STATUS.operationalCampaignWiring).toBe(
-      "PENDING",
+      "O2_DET_IMPLEMENTED",
     );
     const mismatches = diffReceiptAgainstLedgerEntry(
       dto.cognitiveExecutionReceipt!,
diff --git a/projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts b/projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts
index 35b81070..fa701c51 100644
--- a/projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts
+++ b/projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts
@@ -19,6 +19,8 @@ import {
 } from "./evidenceLedger";
 import {
   durableLedgerContentEquivalent,
+  isCognitiveReceiptRowKind,
+  isP6O2QaLinkTargetEligible,
   validateLedgerRowForAppend,
 } from "./ledgerRowValidation";
 import fs from "node:fs";
@@ -33,6 +35,11 @@ export type CaptureCognitiveExecutionReceiptInput = {
   runId: string;
   scenarioId: string;
   campaignId?: string;
+  /**
+   * O2 minimal link — QA runId this receipt belongs to.
+   * Required on the O2 dual-write path; optional for legacy unlinked captures.
+   */
+  linkedQaRunId?: string;
   absolutePath?: string;
   onDuplicate?: "reject" | "skip";
   reserves?: string[];
@@ -57,7 +64,8 @@ export type CaptureCognitiveExecutionReceiptResult =
         | "integrity_blocks_capture"
         | "lock_failed"
         | "validation_failed"
-        | "identity_mismatch";
+        | "identity_mismatch"
+        | "o2_link_rejected";
       message: string;
       absolutePath?: string;
       existing?: P6EvidenceLedgerRow;
@@ -117,6 +125,9 @@ export function buildCompleteCognitiveReceiptLedgerEntry(
     campaignId: input.campaignId ?? P6_CAMPAIGN_ID,
     runId: input.runId,
     scenarioId: input.scenarioId,
+    ...(typeof input.linkedQaRunId === "string"
+      ? { linkedQaRunId: input.linkedQaRunId }
+      : {}),
     logicalTurnId: receipt.logicalTurnId,
     projectId: receipt.projectId,
     runtimeIdentity: receipt.runtimeIdentity,
@@ -300,6 +311,18 @@ export function captureCognitiveExecutionReceiptToP6Ledger(
     };
   }

+  if (
+    typeof input.linkedQaRunId === "string" &&
+    input.linkedQaRunId === input.runId
+  ) {
+    return {
+      ok: false,
+      status: "o2_link_rejected",
+      message: "linkedQaRunId must differ from cognitive runId",
+      absolutePath,
+    };
+  }
+
   const candidate = buildCompleteCognitiveReceiptLedgerEntry(input, receipt);
   const validation = validateLedgerRowForAppend(candidate);
   if (!validation.ok) {
@@ -328,6 +351,69 @@ export function captureCognitiveExecutionReceiptToP6Ledger(
       };
     }

+    // O2 write-boundary link checks under lock (TOCTOU-safe vs concurrent mono-writer).
+    if (typeof input.linkedQaRunId === "string") {
+      const linked = input.linkedQaRunId;
+      if (linked.trim().length === 0) {
+        return {
+          ok: false as const,
+          status: "o2_link_rejected" as const,
+          message: "linkedQaRunId must be a non-empty string",
+          absolutePath,
+        };
+      }
+      const target = prior.rows.find((r) => r.runId === linked);
+      if (!target) {
+        return {
+          ok: false as const,
+          status: "o2_link_rejected" as const,
+          message: `O2 link target missing: ${linked}`,
+          absolutePath,
+        };
+      }
+      if (!isP6O2QaLinkTargetEligible(target)) {
+        return {
+          ok: false as const,
+          status: "o2_link_rejected" as const,
+          message:
+            "O2 link target must be an O2-eligible QA campaign result (not admin/diagnostic/cognitive)",
+          absolutePath,
+          existing: target,
+        };
+      }
+      if (target.campaignId !== candidate.campaignId) {
+        return {
+          ok: false as const,
+          status: "o2_link_rejected" as const,
+          message: "O2 link campaignId mismatch",
+          absolutePath,
+          existing: target,
+        };
+      }
+      if (target.scenarioId !== candidate.scenarioId) {
+        return {
+          ok: false as const,
+          status: "o2_link_rejected" as const,
+          message: "O2 link scenarioId mismatch",
+          absolutePath,
+          existing: target,
+        };
+      }
+      const priorLinked = prior.rows.filter(
+        (r) =>
+          isCognitiveReceiptRowKind(r.kind) && r.linkedQaRunId === linked,
+      );
+      if (priorLinked.length > 0) {
+        return {
+          ok: false as const,
+          status: "o2_link_rejected" as const,
+          message: `O2 cardinality: QA run already has a linked receipt (${priorLinked.length})`,
+          absolutePath,
+          existing: priorLinked[0],
+        };
+      }
+    }
+
     const existing = prior.rows.find((r) => r.runId === input.runId);
     if (existing) {
       if (onDuplicate === "skip") {
diff --git a/projects/sfia-studio/app/lib/p6-campaign-evidence/evidenceLedger.ts b/projects/sfia-studio/app/lib/p6-campaign-evidence/evidenceLedger.ts
index e0ceb868..670c1092 100644
--- a/projects/sfia-studio/app/lib/p6-campaign-evidence/evidenceLedger.ts
+++ b/projects/sfia-studio/app/lib/p6-campaign-evidence/evidenceLedger.ts
@@ -26,7 +26,11 @@ import fs from "node:fs";
 import path from "node:path";
 import {
   classifyLedgerRowForRead,
+  evaluateO2LinkReadIntegrity,
+  isCognitiveReceiptRowKind,
+  isP6O2QaLinkTargetEligible,
   validateLedgerRowForAppend,
+  type O2LinkReadDiagnostic,
 } from "./ledgerRowValidation";

 export const P6_CAMPAIGN_ID = "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01" as const;
@@ -45,7 +49,7 @@ export type P6EvidenceLedgerRow = Record<string, unknown>;
 export type ReadP6EvidenceLedgerResult = {
   /** True only when rows can be consumed (HEALTHY or DEGRADED). */
   ok: boolean;
-  /** True ONLY when integrity === HEALTHY. Never true under corruption/semantic/duplicate defects. */
+  /** True ONLY when integrity === HEALTHY. Never true under corruption/semantic/duplicate/O2-link defects. */
   integrityPass: boolean;
   integrity: P6LedgerIntegrityStatus;
   absolutePath: string;
@@ -54,6 +58,9 @@ export type ReadP6EvidenceLedgerResult = {
   structureErrors: number;
   /** v2 incomplete / unknown-kind semantic defects (bytes preserved). */
   semanticErrors: number;
+  /** O2 linkedQaRunId defects (orphan / kind / campaign / scenario / cardinality). */
+  o2LinkErrors: number;
+  o2LinkDiagnostics: O2LinkReadDiagnostic[];
   /** Distinct runIds that appear more than once (all matching rows preserved). */
   duplicateRunIds: string[];
   totalLines: number;
@@ -235,14 +242,22 @@ export function forceRemoveOrphanP6EvidenceLedgerLock(
   }
 }

-/**
+function emptyO2LinkFields(): Pick<
+  ReadP6EvidenceLedgerResult,
+  "o2LinkErrors" | "o2LinkDiagnostics"
+> {
+  return { o2LinkErrors: 0, o2LinkDiagnostics: [] };
+}
+
 /**
  * Read-only ledger open. Never rewrites. Never silently repairs.
  * v2 cognitive receipts are validated with the same schema as writes;
  * incomplete v2 / unknown kinds set integrityPass=false (DEGRADED).
  * Duplicate runIds (even among individually valid rows) set integrityPass=false.
+ * O2 linkedQaRunId orphans / cardinality / campaign-scenario mismatches → DEGRADED.
  * All matching rows are preserved — never silently pick one as truth.
  * Historical campaign rows keep their historical completeness level.
+ * Unlinked historical receipts remain readable without O2 promotion.
  */
 export function readP6EvidenceLedger(options?: {
   absolutePath?: string;
@@ -263,6 +278,7 @@ export function readP6EvidenceLedger(options?: {
         parseErrors: 0,
         structureErrors: 0,
         semanticErrors: 0,
+        ...emptyO2LinkFields(),
         duplicateRunIds: [],
         totalLines: 0,
       };
@@ -276,6 +292,7 @@ export function readP6EvidenceLedger(options?: {
       parseErrors: 0,
       structureErrors: 0,
       semanticErrors: 0,
+      ...emptyO2LinkFields(),
       duplicateRunIds: [],
       totalLines: 0,
       error: "ledger file missing",
@@ -295,6 +312,7 @@ export function readP6EvidenceLedger(options?: {
       parseErrors: 0,
       structureErrors: 0,
       semanticErrors: 0,
+      ...emptyO2LinkFields(),
       duplicateRunIds: [],
       totalLines: 0,
       error: err instanceof Error ? err.message : String(err),
@@ -311,6 +329,7 @@ export function readP6EvidenceLedger(options?: {
       parseErrors: 0,
       structureErrors: 0,
       semanticErrors: 0,
+      ...emptyO2LinkFields(),
       duplicateRunIds: [],
       totalLines: 0,
     };
@@ -368,12 +387,15 @@ export function readP6EvidenceLedger(options?: {
     .map(([runId]) => runId)
     .sort();

+  const o2 = evaluateO2LinkReadIntegrity(rows);
+
   const defects =
     parseErrors > 0 ||
     structureErrors > 0 ||
     semanticErrors > 0 ||
     partialTrailing ||
-    duplicateRunIds.length > 0;
+    duplicateRunIds.length > 0 ||
+    o2.o2LinkErrors > 0;

   if (!defects) {
     return {
@@ -385,6 +407,8 @@ export function readP6EvidenceLedger(options?: {
       parseErrors: 0,
       structureErrors: 0,
       semanticErrors: 0,
+      o2LinkErrors: 0,
+      o2LinkDiagnostics: [],
       duplicateRunIds: [],
       totalLines: lines.length,
     };
@@ -401,6 +425,11 @@ export function readP6EvidenceLedger(options?: {
         `duplicate runId(s): ${duplicateRunIds.join(",")} (${duplicateRunIds.length})`,
       );
     }
+    if (o2.o2LinkErrors > 0) {
+      reasons.push(
+        `O2 link defects: ${o2.diagnostics.map((d) => d.code).join(",")}`,
+      );
+    }
     return {
       ok: true,
       integrityPass: false,
@@ -410,6 +439,8 @@ export function readP6EvidenceLedger(options?: {
       parseErrors,
       structureErrors,
       semanticErrors,
+      o2LinkErrors: o2.o2LinkErrors,
+      o2LinkDiagnostics: o2.diagnostics,
       duplicateRunIds,
       totalLines: lines.length,
       error: `${reasons.join("; ")}; historical bytes preserved; integrityPass=false`,
@@ -425,6 +456,8 @@ export function readP6EvidenceLedger(options?: {
     parseErrors,
     structureErrors,
     semanticErrors,
+    o2LinkErrors: o2.o2LinkErrors,
+    o2LinkDiagnostics: o2.diagnostics,
     duplicateRunIds,
     totalLines: lines.length,
     error: "ledger unreadable as structured evidence (no valid rows)",
@@ -540,3 +573,134 @@ export function findP6EvidenceLedgerRowsByRunId(
     error: read.error,
   };
 }
+
+export function findP6EvidenceLedgerRowsByLinkedQaRunId(
+  linkedQaRunId: string,
+  options?: { absolutePath?: string },
+): {
+  ok: boolean;
+  integrityPass: boolean;
+  integrity: P6LedgerIntegrityStatus;
+  matches: P6EvidenceLedgerRow[];
+  absolutePath: string;
+  o2LinkDiagnostics: O2LinkReadDiagnostic[];
+  error?: string;
+} {
+  const read = readP6EvidenceLedger({
+    absolutePath: options?.absolutePath,
+    allowMissing: true,
+  });
+  const matches = read.rows.filter(
+    (r) =>
+      isCognitiveReceiptRowKind(r.kind) && r.linkedQaRunId === linkedQaRunId,
+  );
+  return {
+    ok: read.ok,
+    integrityPass: read.integrityPass,
+    integrity: read.integrity,
+    matches,
+    absolutePath: read.absolutePath,
+    o2LinkDiagnostics: read.o2LinkDiagnostics,
+    error: read.error,
+  };
+}
+
+export type P6O2LinkedPairResult =
+  | {
+      ok: true;
+      integrityPass: boolean;
+      integrity: P6LedgerIntegrityStatus;
+      absolutePath: string;
+      qaRow: P6EvidenceLedgerRow;
+      receiptRow: P6EvidenceLedgerRow | null;
+      cardinality: "qa_only" | "qa_plus_one_receipt";
+    }
+  | {
+      ok: false;
+      code: string;
+      message: string;
+      integrityPass: boolean;
+      integrity: P6LedgerIntegrityStatus;
+      absolutePath: string;
+      qaRow?: P6EvidenceLedgerRow;
+      receiptRows?: P6EvidenceLedgerRow[];
+      o2LinkDiagnostics?: O2LinkReadDiagnostic[];
+    };
+
+/**
+ * Reopen and resolve the O2 pair for a QA runId (0..1 linked receipt).
+ * Never silently selects among multiple linked receipts.
+ */
+export function resolveP6O2LinkedEvidencePair(
+  qaRunId: string,
+  options?: { absolutePath?: string },
+): P6O2LinkedPairResult {
+  const read = readP6EvidenceLedger({
+    absolutePath: options?.absolutePath,
+    allowMissing: true,
+  });
+  const qaMatches = read.rows.filter((r) => r.runId === qaRunId);
+  if (qaMatches.length === 0) {
+    return {
+      ok: false,
+      code: "O2_QA_NOT_FOUND",
+      message: `QA runId not found: ${qaRunId}`,
+      integrityPass: read.integrityPass,
+      integrity: read.integrity,
+      absolutePath: read.absolutePath,
+      o2LinkDiagnostics: read.o2LinkDiagnostics,
+    };
+  }
+  if (qaMatches.length > 1) {
+    return {
+      ok: false,
+      code: "O2_QA_DUPLICATE",
+      message: `duplicate QA runId: ${qaRunId}`,
+      integrityPass: false,
+      integrity: read.integrity,
+      absolutePath: read.absolutePath,
+      receiptRows: qaMatches,
+      o2LinkDiagnostics: read.o2LinkDiagnostics,
+    };
+  }
+  const qaRow = qaMatches[0]!;
+  if (!isP6O2QaLinkTargetEligible(qaRow)) {
+    return {
+      ok: false,
+      code: "O2_TARGET_NOT_QA",
+      message:
+        "runId does not address an O2-eligible QA campaign result (not admin/diagnostic/cognitive)",
+      integrityPass: false,
+      integrity: read.integrity,
+      absolutePath: read.absolutePath,
+      qaRow,
+      o2LinkDiagnostics: read.o2LinkDiagnostics,
+    };
+  }
+  const receiptRows = read.rows.filter(
+    (r) =>
+      isCognitiveReceiptRowKind(r.kind) && r.linkedQaRunId === qaRunId,
+  );
+  if (receiptRows.length > 1) {
+    return {
+      ok: false,
+      code: "O2_LINK_CARDINALITY",
+      message: `expected 0..1 receipt for QA run; found ${receiptRows.length}`,
+      integrityPass: false,
+      integrity: read.integrity === "HEALTHY" ? "DEGRADED" : read.integrity,
+      absolutePath: read.absolutePath,
+      qaRow,
+      receiptRows,
+      o2LinkDiagnostics: read.o2LinkDiagnostics,
+    };
+  }
+  return {
+    ok: true,
+    integrityPass: read.integrityPass,
+    integrity: read.integrity,
+    absolutePath: read.absolutePath,
+    qaRow,
+    receiptRow: receiptRows[0] ?? null,
+    cardinality: receiptRows.length === 0 ? "qa_only" : "qa_plus_one_receipt",
+  };
+}
diff --git a/projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts b/projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts
index 27163f69..16fd9dbe 100644
--- a/projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts
+++ b/projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts
@@ -13,12 +13,15 @@ export {
   readP6EvidenceLedger,
   appendP6EvidenceLedgerRow,
   findP6EvidenceLedgerRowsByRunId,
+  findP6EvidenceLedgerRowsByLinkedQaRunId,
+  resolveP6O2LinkedEvidencePair,
   withP6EvidenceLedgerLock,
   forceRemoveOrphanP6EvidenceLedgerLock,
   type P6EvidenceLedgerRow,
   type P6LedgerIntegrityStatus,
   type ReadP6EvidenceLedgerResult,
   type AppendP6EvidenceLedgerResult,
+  type P6O2LinkedPairResult,
 } from "./evidenceLedger";

 export {
@@ -34,8 +37,11 @@ export {

 export {
   collectP6ProductTurnEvidence,
+  wireP6O2OperationalEvidence,
   P6_QA_COLLECTION_SEAM_STATUS,
   type P6QaCollectionInput,
+  type P6O2OperationalWireInput,
+  type P6O2OperationalWireResult,
 } from "./qaCollectionSeam";

 export {
@@ -43,8 +49,15 @@ export {
   validateCognitiveReceiptRow,
   classifyLedgerRowForRead,
   durableLedgerContentEquivalent,
+  evaluateO2LinkReadIntegrity,
+  isP6CampaignQaRowKind,
+  isP6HistoricalReadableCampaignKind,
+  isP6O2QaLinkTargetEligible,
+  isCognitiveReceiptRowKind,
+  validateLinkedQaRunIdField,
   MAX_LEDGER_ROW_JSON_BYTES,
   P6_RECEIPT_LEDGER_SCHEMA_VERSION_REQUIRED,
   P6_RECEIPT_DURABLE_COMPARE_KEYS,
   type LedgerRowReadClassification,
+  type O2LinkReadDiagnostic,
 } from "./ledgerRowValidation";
diff --git a/projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts b/projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts
index acaed52a..5d7ec8b9 100644
--- a/projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts
+++ b/projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts
@@ -65,6 +65,207 @@ function isNonEmptyString(v: unknown): v is string {
   return typeof v === "string" && v.trim().length > 0;
 }

+/**
+ * Historically readable campaign-family kinds (read/classify only).
+ * Includes administrative/diagnostic kinds that remain ledger-readable
+ * but are NOT O2 link targets.
+ */
+export function isP6HistoricalReadableCampaignKind(kind: unknown): boolean {
+  return (
+    kind === undefined ||
+    kind === null ||
+    kind === "(historical_campaign)" ||
+    kind === "p6_campaign_run" ||
+    kind === "ROOT_CAUSE_INVESTIGATION_READONLY" ||
+    kind === "RUNTIME_REQUALIFICATION"
+  );
+}
+
+/**
+ * @deprecated Kind-only coarse gate. Prefer `isP6O2QaLinkTargetEligible(row)`
+ * for O2 write/read/resolver. Excludes administrative/diagnostic kinds.
+ */
+export function isP6CampaignQaRowKind(kind: unknown): boolean {
+  return (
+    kind === undefined ||
+    kind === null ||
+    kind === "(historical_campaign)" ||
+    kind === "p6_campaign_run"
+  );
+}
+
+export function isCognitiveReceiptRowKind(kind: unknown): boolean {
+  return kind === "cognitive_execution_receipt";
+}
+
+/**
+ * O2 link-target eligibility — DISTINCT from historical readability.
+ *
+ * Eligible:
+ *   - explicit `p6_campaign_run` with campaign QA identity fields;
+ *   - historical campaign rows (absent kind / `(historical_campaign)`) with
+ *     the same identity fields (74 archive rows of this form are QA results).
+ *
+ * NOT eligible (still historically readable when valid):
+ *   - `ROOT_CAUSE_INVESTIGATION_READONLY` (diagnostic / investigation);
+ *   - `RUNTIME_REQUALIFICATION` (administrative requalification);
+ *   - cognitive receipts;
+ *   - unknown kinds.
+ */
+export function isP6O2QaLinkTargetEligible(
+  row: Record<string, unknown>,
+): boolean {
+  if (isCognitiveReceiptRowKind(row.kind)) return false;
+  const kind = row.kind;
+  if (
+    kind === "ROOT_CAUSE_INVESTIGATION_READONLY" ||
+    kind === "RUNTIME_REQUALIFICATION"
+  ) {
+    return false;
+  }
+  const kindOk =
+    kind === "p6_campaign_run" ||
+    kind === undefined ||
+    kind === null ||
+    kind === "(historical_campaign)";
+  if (!kindOk) return false;
+  return (
+    isNonEmptyString(row.runId) &&
+    isNonEmptyString(row.scenarioId) &&
+    row.campaignId === P6_CAMPAIGN_ID
+  );
+}
+
+/**
+ * Field-level O2 link rules when linkedQaRunId is present.
+ * Absence remains valid for historical unlinked v2 receipts (no retro promotion).
+ */
+export function validateLinkedQaRunIdField(
+  row: Record<string, unknown>,
+): LedgerRowValidationResult | null {
+  if (!("linkedQaRunId" in row) || row.linkedQaRunId === undefined) {
+    return null;
+  }
+  if (!isNonEmptyString(row.linkedQaRunId)) {
+    return {
+      ok: false,
+      code: "O2_LINK_FIELD",
+      message: "linkedQaRunId must be a non-empty string when present",
+    };
+  }
+  if (row.linkedQaRunId === row.runId) {
+    return {
+      ok: false,
+      code: "O2_LINK_SAME_RUNID",
+      message: "linkedQaRunId must differ from receipt runId",
+    };
+  }
+  return null;
+}
+
+export type O2LinkReadDiagnostic = {
+  code: string;
+  message: string;
+  receiptRunId?: string;
+  linkedQaRunId?: string;
+};
+
+/**
+ * Read-side O2 link integrity over a preserved row set.
+ * Unlinked historical receipts are not promoted and do not fail O2 checks.
+ * Orphan / type / campaign / scenario / cardinality defects are reported.
+ */
+export function evaluateO2LinkReadIntegrity(
+  rows: ReadonlyArray<Record<string, unknown>>,
+): { o2LinkErrors: number; diagnostics: O2LinkReadDiagnostic[] } {
+  const diagnostics: O2LinkReadDiagnostic[] = [];
+  const byRunId = new Map<string, Record<string, unknown>>();
+  for (const row of rows) {
+    if (typeof row.runId === "string" && row.runId.length > 0) {
+      // First occurrence wins for target lookup; duplicates already tracked separately.
+      if (!byRunId.has(row.runId)) byRunId.set(row.runId, row);
+    }
+  }
+
+  const linkCounts = new Map<string, string[]>();
+  for (const row of rows) {
+    if (!isCognitiveReceiptRowKind(row.kind)) continue;
+    if (!("linkedQaRunId" in row) || row.linkedQaRunId === undefined) {
+      continue; // historical unlinked — no O2 promotion
+    }
+    if (!isNonEmptyString(row.linkedQaRunId)) {
+      diagnostics.push({
+        code: "O2_LINK_FIELD",
+        message: "linkedQaRunId present but empty/invalid",
+        receiptRunId: typeof row.runId === "string" ? row.runId : undefined,
+      });
+      continue;
+    }
+    const linked = row.linkedQaRunId;
+    const receiptRunId = typeof row.runId === "string" ? row.runId : undefined;
+    if (linked === row.runId) {
+      diagnostics.push({
+        code: "O2_LINK_SAME_RUNID",
+        message: "linkedQaRunId equals receipt runId",
+        receiptRunId,
+        linkedQaRunId: linked,
+      });
+    }
+    const list = linkCounts.get(linked) ?? [];
+    list.push(receiptRunId ?? "(missing-runId)");
+    linkCounts.set(linked, list);
+
+    const target = byRunId.get(linked);
+    if (!target) {
+      diagnostics.push({
+        code: "O2_LINK_ORPHAN",
+        message: "linkedQaRunId target missing",
+        receiptRunId,
+        linkedQaRunId: linked,
+      });
+      continue;
+    }
+    if (!isP6O2QaLinkTargetEligible(target)) {
+      diagnostics.push({
+        code: "O2_LINK_TARGET_KIND",
+        message:
+          "linkedQaRunId must point to an O2-eligible QA campaign result (not admin/diagnostic/cognitive)",
+        receiptRunId,
+        linkedQaRunId: linked,
+      });
+      continue;
+    }
+    if (target.campaignId !== row.campaignId) {
+      diagnostics.push({
+        code: "O2_LINK_CAMPAIGN_MISMATCH",
+        message: "linked QA campaignId differs from receipt campaignId",
+        receiptRunId,
+        linkedQaRunId: linked,
+      });
+    }
+    if (target.scenarioId !== row.scenarioId) {
+      diagnostics.push({
+        code: "O2_LINK_SCENARIO_MISMATCH",
+        message: "linked QA scenarioId differs from receipt scenarioId",
+        receiptRunId,
+        linkedQaRunId: linked,
+      });
+    }
+  }
+
+  for (const [linkedQaRunId, receiptRunIds] of linkCounts) {
+    if (receiptRunIds.length > 1) {
+      diagnostics.push({
+        code: "O2_LINK_CARDINALITY",
+        message: `multiple receipts linked to same QA run (${receiptRunIds.length})`,
+        linkedQaRunId,
+      });
+    }
+  }
+
+  return { o2LinkErrors: diagnostics.length, diagnostics };
+}
+
 function isNullOrNonNegNumber(v: unknown): boolean {
   return (
     v === null ||
@@ -369,6 +570,10 @@ export function validateCognitiveReceiptRow(
       message: "runId must differ from logicalTurnId",
     };
   }
+  const linkField = validateLinkedQaRunIdField(row);
+  if (linkField && !linkField.ok) {
+    return linkField;
+  }
   if (row.runtimeIdentity !== "agents") {
     return {
       ok: false,
@@ -671,6 +876,7 @@ export const P6_RECEIPT_DURABLE_COMPARE_KEYS = [
   "projectId",
   "campaignId",
   "scenarioId",
+  "linkedQaRunId",
   "runtimeIdentity",
   "providerIdentity",
   "presentation",
diff --git a/projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts b/projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts
index 7a446c4c..174d7673 100644
--- a/projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts
+++ b/projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts
@@ -3,37 +3,42 @@
  *
  * Status:
  *   QA COLLECTION SEAM DETERMINISTICALLY PROVEN
- *   OPERATIONAL CAMPAIGN WIRING PENDING
+ *   O2 LINKED EVIDENCE WIRING — DET IMPLEMENTED (this cycle)
+ *   OPERATIONAL REAL HARNESS MIGRATION — NOT DONE
  *
  * Historical REAL harnesses (`__tests__/p6-campaign/*.real.test.ts` on qa WT)
  * still call `fs.appendFileSync` inline. They are NOT modified / NOT copied /
- * NOT executed in this Option B worktree.
+ * NOT executed in this O2 worktree.
  *
- * Future REAL wiring (minimal plan — prerequisite under distinct Morris GO):
- *   1. After Product turn returns `ProjectAssistantSendResult`, call
- *      `collectP6ProductTurnEvidence({ productTurnResult, runId, scenarioId })`.
- *   2. `runId` remains campaign-owned (≠ logicalTurnId).
- *   3. Ledger path: `.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl`
- *      (or explicit absolutePath for isolated DET).
- *   4. Reopen via `readP6EvidenceLedger` / `findP6EvidenceLedgerRowsByRunId`.
- *   5. Keep historical campaign-run appends for non-receipt rows via
- *      `appendValidatedP6CampaignLedgerRow` (secured), or leave scenario rows
- *      as today until migrated.
- *   6. Concurrency: MONO-WRITER — do not parallelize ledger writers.
+ * O2 DET wiring sequence (harness-owned identities):
+ *   1. Product turn → ProjectAssistantSendResult
+ *   2. Build QA campaign row from observed results
+ *   3. appendValidatedP6CampaignLedgerRow (secured)
+ *   4. If dto.cognitiveExecutionReceipt present:
+ *        collectP6ProductTurnEvidence({ ..., linkedQaRunId: qaRunId })
+ *   5. Else: QA-only; never fabricate a receipt
+ *   6. Reopen via resolveP6O2LinkedEvidencePair / readP6EvidenceLedger
  *
  * Product must NOT import this module.
  */

 import type { ProjectAssistantSendResult } from "@/features/project-assistant/types";
 import {
+  appendValidatedP6CampaignLedgerRow,
   captureCognitiveExecutionReceiptToP6Ledger,
   type CaptureCognitiveExecutionReceiptResult,
 } from "./captureCognitiveExecutionReceipt";
-import { P6_CAMPAIGN_ID } from "./evidenceLedger";
+import {
+  P6_CAMPAIGN_ID,
+  type AppendP6EvidenceLedgerResult,
+  type P6EvidenceLedgerRow,
+} from "./evidenceLedger";

 export const P6_QA_COLLECTION_SEAM_STATUS = {
   deterministicProven: true,
-  operationalCampaignWiring: "PENDING",
+  operationalCampaignWiring: "O2_DET_IMPLEMENTED",
+  o2LinkContract: "MINIMAL_LINKED_QA_RUN_ID",
+  o2Cardinality: "QA_0_OR_1_RECEIPT",
   historicalHarnessMigration: "NOT_DONE",
 } as const;

@@ -42,12 +47,15 @@ export type P6QaCollectionInput = {
   runId: string;
   scenarioId: string;
   campaignId?: string;
+  /** O2 — QA runId this cognitive entry links to (required for dual evidence). */
+  linkedQaRunId?: string;
   absolutePath?: string;
   onDuplicate?: "reject" | "skip";
 };

 /**
- * Canonical P6 QA collection entrypoint — harnesses call this after Product turn.
+ * Canonical P6 QA collection entrypoint — harnesses call this after Product turn
+ * when a cognitive receipt must be captured (optionally O2-linked).
  */
 export function collectP6ProductTurnEvidence(
   input: P6QaCollectionInput,
@@ -57,7 +65,101 @@ export function collectP6ProductTurnEvidence(
     runId: input.runId,
     scenarioId: input.scenarioId,
     campaignId: input.campaignId ?? P6_CAMPAIGN_ID,
+    linkedQaRunId: input.linkedQaRunId,
     absolutePath: input.absolutePath,
     onDuplicate: input.onDuplicate,
   });
 }
+
+export type P6O2OperationalWireInput = {
+  /** Campaign QA result row (harness-owned runId / scenarioId / campaignId). */
+  qaRow: P6EvidenceLedgerRow;
+  productTurnResult: ProjectAssistantSendResult;
+  /** Distinct cognitive ledger runId (≠ QA runId, ≠ logicalTurnId). */
+  cognitiveRunId: string;
+  absolutePath?: string;
+};
+
+export type P6O2OperationalWireResult = {
+  qa: AppendP6EvidenceLedgerResult;
+  cognitive:
+    | CaptureCognitiveExecutionReceiptResult
+    | { ok: true; status: "qa_only_no_receipt" }
+    | {
+        ok: false;
+        status: "cognitive_skipped_qa_failed";
+        message: string;
+      };
+};
+
+/**
+ * O2 operational sequence: QA append first, then linked cognitive capture if DTO has receipt.
+ * Never fabricates a receipt. Never rewrites QA on cognitive failure.
+ */
+export function wireP6O2OperationalEvidence(
+  input: P6O2OperationalWireInput,
+): P6O2OperationalWireResult {
+  const qaRunId = input.qaRow.runId;
+  const scenarioId = input.qaRow.scenarioId;
+  if (typeof qaRunId !== "string" || qaRunId.trim().length === 0) {
+    return {
+      qa: {
+        ok: false,
+        code: "O2_QA_RUNID_REQUIRED",
+        message: "qaRow.runId required",
+        absolutePath: input.absolutePath,
+      },
+      cognitive: {
+        ok: false,
+        status: "cognitive_skipped_qa_failed",
+        message: "qaRow.runId required",
+      },
+    };
+  }
+  if (typeof scenarioId !== "string" || scenarioId.trim().length === 0) {
+    return {
+      qa: {
+        ok: false,
+        code: "O2_QA_SCENARIO_REQUIRED",
+        message: "qaRow.scenarioId required",
+        absolutePath: input.absolutePath,
+      },
+      cognitive: {
+        ok: false,
+        status: "cognitive_skipped_qa_failed",
+        message: "qaRow.scenarioId required",
+      },
+    };
+  }
+
+  const qa = appendValidatedP6CampaignLedgerRow(input.qaRow, {
+    absolutePath: input.absolutePath,
+  });
+  if (!qa.ok) {
+    return {
+      qa,
+      cognitive: {
+        ok: false,
+        status: "cognitive_skipped_qa_failed",
+        message: qa.message,
+      },
+    };
+  }
+
+  if (!input.productTurnResult.cognitiveExecutionReceipt) {
+    return { qa, cognitive: { ok: true, status: "qa_only_no_receipt" } };
+  }
+
+  const cognitive = collectP6ProductTurnEvidence({
+    productTurnResult: input.productTurnResult,
+    runId: input.cognitiveRunId,
+    scenarioId,
+    campaignId:
+      typeof input.qaRow.campaignId === "string"
+        ? input.qaRow.campaignId
+        : P6_CAMPAIGN_ID,
+    linkedQaRunId: qaRunId,
+    absolutePath: input.absolutePath,
+  });
+  return { qa, cognitive };
+}
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 53be8f6a..774b92a0 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -20,7 +20,8 @@
 | F04 Work Recommendation materialization (REC-01) | qualifyProspectiveWorkRecommendationMaterialization.d0; activeCycleCognitiveWork.d0 (Option A SQLite reload + historical replay); p6.hqa.rec01.minimalStabilization.d0; p6.hqa.rec01.optionB.workRecommendationsContext.d0; UX-REC-02 journalDisclaimer; chatFirstWorkRecommendationContinuity; noraLifecycleRecommendationContinuity | DETERMINISTIC at tested scope; coverage PARTIAL fail-closed; REAL NOT RUN |
 | F04 Nora autonomy P0/P1/P2 (PR #577 INTEGRATED ON MAIN) | `p6.nora.maxTurns.documentary.d0.test.ts`; `p6.nora.p1.adaptiveBudget.d0.test.ts`; `p6.nora.p1p2.documentary.mission.d0.test.ts`; `p6.nora.p1p2.targetedVerification.d0.test.ts`; `p6.nora.p0.productStatusHonesty.d0.test.ts`; `p6.nora.p0.incomplete.panel.ux.d0.test.tsx`; `p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx`; `mw6.pre-real.budget-hardening.d0.test.ts` (NUM-CLAMP / R-PRE-REAL-08A); `runner.d0.test.ts`; `orchestrateTurn.test.ts` | See proof oracles below — **DETERMINISTIC ONLY**; not Product UI E2E REAL; not documentary REAL quality; merge `d8ceb8ad` |
 | F04 P6 REAL OBS Option B receipt conservation (CRITICAL CORRECTION) | `p6.realObs.optionB.receiptConservation.d0.test.ts` | DETERMINISTIC AT CORRECTED SEAM — process registry; Fake ≠ REAL; Runner id ≠ PROVIDER_CONFIRMED; capture fail ≠ provider_error; ZERO REAL |
-| F04 P6 EXTERNAL Evidence Ledger capture | `p6.externalEvidenceLedger.d0.test.ts`; `p6.qaCollectionSeam.d0.test.ts`; `p6.receiptCompleteness.d0.test.ts` + `lib/p6-campaign-evidence/**` | DETERMINISTIC — complete receipt v2; read integrity + read-uniqueness (dup runId ≠ HEALTHY); write uniqueness; durable duplicate skip; MONO_WRITER; QA seam DET / wiring PENDING; ZERO REAL |
+| F04 P6 EXTERNAL Evidence Ledger capture | `p6.externalEvidenceLedger.d0.test.ts`; `p6.qaCollectionSeam.d0.test.ts`; `p6.receiptCompleteness.d0.test.ts` + `lib/p6-campaign-evidence/**` | DETERMINISTIC — complete receipt v2; read integrity + read-uniqueness (dup runId ≠ HEALTHY); write uniqueness; durable duplicate skip; MONO_WRITER; QA seam DET; ZERO REAL |
+| F04 P6 O2 linked evidence operational wiring | `p6.o2OperationalWiring.d0.test.ts` + `lib/p6-campaign-evidence/**` (`linkedQaRunId`, `wireP6O2OperationalEvidence`, `resolveP6O2LinkedEvidencePair`, `isP6O2QaLinkTargetEligible`) | DETERMINISTIC — QA + 0..1 linked cognitive receipt; write/read O2 link integrity; CP01 portable archive fixtures; QA-target eligibility ≠ historical readability; REAL harness migration NOT DONE; ZERO REAL |
 | F04 Documentary reliability RCD-01 (PR #578 INTEGRATED ON MAIN) | `p6.nora.min09.documentaryReliability.d0.test.ts` (R1–R7); P1/P2/Session regressions | Complete-line coverage; redaction progression; final envelope truth; envelope `lineExceedsCap`; fixture regex fidelity; **DETERMINISTIC ONLY** — not GDR REAL; merge `44006648` |
 | F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
 | F07 Framing HD / START boundary | chatFirstFramingContinuity* + F01 gate | HD structural when required; START gated |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 07ebe1ef..e291c155 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -16,7 +16,11 @@
 | OBS-01 writer security | CLOSED AT DET — `validateLedgerRowForAppend` at every public append; secrets/forbidden keys refused |
 | OBS-02 integrity status | CLOSED AT DET — `HEALTHY` / `DEGRADED` / `INVALID` / `UNREADABLE` / `MISSING`; `integrityPass` only when HEALTHY; no silent rewrite |
 | OBS-03 idempotence / concurrency | CLOSED AT **MONO_WRITER** model — O_EXCL contention detection; no age-based lock reclaim; orphan recovery via explicit `forceRemoveOrphanP6EvidenceLedgerLock` only. Multi-process durability **NOT CLAIMED** |
-| OBS-04 QA collection seam | DET PROVEN — `collectP6ProductTurnEvidence`; **OPERATIONAL CAMPAIGN WIRING PENDING** (historical harnesses still inline `appendFileSync` on qa WT) |
+| OBS-04 QA collection seam | DET PROVEN — `collectP6ProductTurnEvidence`; **O2 DET WIRING IMPLEMENTED** (`wireP6O2OperationalEvidence` + `linkedQaRunId`); historical REAL harness migration **NOT DONE** |
+| O2 minimal link contract | DET — `linkedQaRunId` on cognitive rows; cardinality QA → 0..1 receipt; write+read integrity; historical unlinked v2 readable without O2 promotion |
+| O2 QA target eligibility (CP01-02) | DET — `isP6O2QaLinkTargetEligible` distinct from historical readability; admin/diagnostic kinds (`ROOT_CAUSE_*`, `RUNTIME_REQUALIFICATION`) not linkable; historical absent-kind QA rows eligible with identity fields |
+| O2-32 portability (CP01-01) | DET — archive isolation proven via temp fixtures; real archive SHA check optional via `SFIA_P6_HISTORICAL_LEDGER_PATH` (no hardcoded user paths) |
+| Historical ledger disposition (D1) | ARCHIVE ONLY (qa WT) — active ledger for new runs is worktree-local canonical path; no sync/repair of archive line 75 |
 | Receipt completeness (ledger schema v2) | CLOSED AT DET — full Product CognitiveExecutionReceipt projection (model/effort/tokens/adaptive/continuation/conservation); reopen field-by-field equality |
 | Read integrity v2 | CLOSED AT DET — `classifyLedgerRowForRead` aligns reader with writer schema; incomplete v2 ⇒ `integrityPass=false` (DEGRADED); historical campaign rows not v2-promoted |
 | RunId uniqueness (write) | CLOSED AT DET — all public writers reject duplicate runId under MONO_WRITER lock; duplicate skip requires durable content equivalence |
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 07604d03..c9b64340 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "1b7f254ef869dfc3"
+      "sha256_16": "587caa7bbc0179f3"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "57b2b177259d7c5b"
+      "sha256_16": "978931873268eb6a"
     }
   ],
   "components": [
```

---

## V2. Contenu intégral — p6.o2OperationalWiring.d0.test.ts

```typescript
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
```

---

## W–X. Réserves / Dette / Exit

**Réserves:** Draft (not Ready) · Merge GO pending · REAL harnesses quarantined · REAL OPEN · Human QA WAITING · P6 GLOBAL NOT PASSED · Runtime v3 NON ADOPTED.

**Dette:** REAL migration · REAL boundary · archive consolidation · P6 completion.

**Exit proof:** commit `626de1d3` · PR #581 Draft · CI success Required Gate · 10-file manifest exact.

---

## Y. Git Truth final

```
 M .tmp-sfia-review/chatgpt-review.md
```

Branch `delivery/sfia-studio-p6-o2-linked-evidence-wiring` @ `626de1d31de5601dfbbfb3853b5377a5b7ccf576` · origin/main `aee4878d00f76cbb444977bf7ca370fb9b43fc83` unchanged.

---

## Z. Gates Morris restants

1. **ChatGPT Critical PR Review** (ce handoff)
2. **Morris Merge GO** (distinct — NOT authorized here)
3. Post-merge verification (distinct)
4. REAL harness / boundary GOs (distinct)

---

## AA. Verdict

**P6 O2 CUMULATIVE GIT INTEGRATION COMMIT/PUSH/DRAFT PR COMPLETE / CI PASS / READY FOR CHATGPT CRITICAL PR REVIEW**

NOT MERGED. NOT POST-MERGE VERIFIED. NOT P6 GLOBAL PASS. NOT READY FOR REAL.

---

## AB. Instruction ChatGPT

Lire ce Review Handoff distant.

Vérifier: branche · commit `626de1d3` · base main · manifest 10 fichiers · PR #581 Draft · diff cumulatif · CP01 préservé · D1/D2 · tests 81/81 · CI run 38533618871 success · Required Gate · Fake/Real · sécurité · réserves · Git Truth final.

Rendre: **CHATGPT CRITICAL PR REVIEW**.

Si PASS: recommander **MORRIS MERGE GO**. Ne pas merger automatiquement.

FIN DU CONTRAT.
