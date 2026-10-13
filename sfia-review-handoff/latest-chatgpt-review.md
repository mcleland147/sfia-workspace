# SFIA STUDIO — P6 REAL OBSERVABILITY OPTION B
## Review Pack FULL — BOUNDED PRODUCT DELIVERY (LOCAL)

**Horodatage:** 2026-10-13 16:29:26 CEST
**Cycle:** 8 — Delivery / implémentation
**Profil:** CRITICAL
**Typologie:** EVOL — PRODUCT OBSERVABILITY
**Chantier:** P6-REAL-OBS-P0-RECEIPT-CONSERVATION
**GO Morris:** 2026-10-13 — LOCAL DELIVERY AUTORISÉ (Option B)
**Verdict:** **P6 REAL OBSERVABILITY OPTION B IMPLEMENTED LOCALLY / DETERMINISTIC PROVEN / READY FOR CHATGPT REVIEW**

---

## 1. GO Morris consommés
2026-10-13 — LOCAL DELIVERY AUTORISÉ for Option B bounded Product observability.
Entry qualification handoff: `0e3a6e6c` / blob `2666efd9`.
Supersedes accidental incomplete/wrong publishes `dbbd9578` and `696cbb49` (pack write failures).

## 2–3. Qualification / Git Truth

| Item | Value |
|------|-------|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-real-observability-option-b` |
| Branch | `fix/p6-real-observability-option-b` |
| HEAD | `bd3f440c749a059d73fb76e09bb1d0ce91e27af4` |
| origin/main | `bd3f440c749a059d73fb76e09bb1d0ce91e27af4` |
| Runtime :3020 WT | untouched (`sfia-workspace-studio-runtime-main-bd3f440c` @ bd3f440c) |
| OpenAI REAL | **ZERO** |
| Project commit/push/PR | **NONE** |

Transient WT branch mix-up during delivery was corrected: Option B re-applied on `fix/p6-real-observability-option-b` @ `bd3f440c`. Documentary branch tip restored on its WT.

Final status:
```
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/project-assistant/p6.realObs.optionB.receiptConservation.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/cognitiveExecutionReceipt.ts
```

Diffstat:
```
 .../features/project-assistant/orchestrateTurn.ts  | 54 ++++++++++++++++++++--
 .../app/features/project-assistant/types.ts        | 12 +++++
 .../04-dependency-impact-map.md                    | 19 ++++++++
 .../08-test-proof-and-conformance-map.md           |  1 +
 ...9-known-gaps-reserves-and-current-boundaries.md | 12 +++++
 .../production-runtime-reference.manifest.json     |  8 ++--
 6 files changed, 98 insertions(+), 8 deletions(-)
```

Name-status:
```
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts
M	projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
A	projects/sfia-studio/app/__tests__/project-assistant/p6.realObs.optionB.receiptConservation.d0.test.ts
A	projects/sfia-studio/app/features/project-assistant/cognitiveExecutionReceipt.ts
```

## 4–6. Sources / Convergence / Entry handoff
Build Doctrine · Roadmap · product-completion cadrage · epistemology 33/35 · Nora trajectory 08 · P6 QA §T Evidence Ledger (external) · CKC delivery · PRR · entry handoff Option B qualification.

P0/P1/P2/RCD-01 INTEGRATED · T1 FUNCTIONAL ACCEPTED WITH RESERVES · REAL NOT PROVEN · Option B AUTHORIZED · P6 GLOBAL NOT PASSED · Runtime v3 NON ADOPTED.

## 7–8. Proof contract retained
Reuse Nora/Runner-produced fields → CognitiveExecutionReceipt → Product DTO → conserve via:
1. process-local registry by server logicalTurnId;
2. existing P6 Evidence Ledger jsonl (helper + optional env SFIA_P6_EVIDENCE_LEDGER_CAPTURE=1).

No new SQLite table · Session ≠ Evidence authority · no external tracing · no FinOps/routing/model change · no parallel Nora engine.

Honesty: Fake→FAKE_DETERMINISTIC · null on openai_live→NOT_OBSERVED · never invent ids · proofClassification=DETERMINISTIC · T1 historical not retroactively REAL.

## 9. Assets reused
Agents Runner · Nora Cognitive Runtime · NoraCognitiveTurnResult · EventSink (unchanged UI filter) · Product DTO additive · P6 Evidence Ledger path · Fake tests.

## 10–11. Files + full content/diffs

### NEW — cognitiveExecutionReceipt.ts (complete)
```typescript
/**
 * P6-REAL-OBS-P0-RECEIPT-CONSERVATION — Option B bounded receipt.
 *
 * Projects already-produced Nora/Runner observability into a redacted receipt,
 * remembers it process-locally by server logicalTurnId, and can append to the
 * existing external P6 Campaign Evidence Ledger (NOT Product SQLite authority).
 *
 * Fake receipts are never classified as PROVIDER_CONFIRMED / REAL.
 * null providerResponseId is NOT OBSERVED — never invented.
 */

import fs from "node:fs";
import path from "node:path";
import type { NoraCognitiveTurnResult } from "@/lib/nora-cognitive-runtime";
import type { AssistantTurnStatus } from "./types";

export const COGNITIVE_EXECUTION_RECEIPT_SCHEMA_VERSION = 1 as const;

/** Honest provider observation — never upgrades Fake or null into REAL. */
export type ProviderResponseObservation =
  | "PROVIDER_CONFIRMED"
  | "NOT_OBSERVED"
  | "FAKE_DETERMINISTIC";

export type CognitiveExecutionReceiptAdaptive = {
  requestedMaxTurns: number;
  effectiveMaxTurns: number;
  strategyClass: string | null;
  reasonCodes: string[];
  floor: number;
  ceiling: number;
  explicitOverride: boolean;
};

export type CognitiveExecutionReceiptContinuation = {
  continued: boolean;
  segmentsExecuted: number;
  missionMaxTurns: number;
  segmentMaxTurns: number;
  allottedTurns: number;
  stopReason: string;
  reasonCodes: string[];
};

export type CognitiveExecutionReceipt = {
  schemaVersion: typeof COGNITIVE_EXECUTION_RECEIPT_SCHEMA_VERSION;
  /** Campaign Axis B classification for this artifact — DET until a REAL GO. */
  proofClassification: "DETERMINISTIC";
  logicalTurnId: string;
  projectId: string;
  runtimeIdentity: "agents";
  /** Identity boundary — Fake never becomes openai. */
  providerIdentity: "fake" | "openai" | "unknown";
  presentation: "test_provider" | "openai_live";
  selectedModelId: string | null;
  /** usage.model as returned/projected by Runner (may be fake-test-model). */
  observedModel: string | null;
  selectedReasoningEffort: string | null;
  providerResponseId: string | null;
  providerResponseObservation: ProviderResponseObservation;
  usage: {
    inputTokens: number | null;
    outputTokens: number | null;
    totalTokens: number | null;
  };
  adaptiveObserve: CognitiveExecutionReceiptAdaptive | null;
  continuationObserve: CognitiveExecutionReceiptContinuation | null;
  toolCalls: number;
  limitReached: boolean;
  /** Product send terminal status — ≠ logical_product_turns.status=accepted. */
  productTerminalStatus: AssistantTurnStatus;
  capturedAt: string;
};

const REGISTRY_MAX = 512;
const registry = new Map<string, CognitiveExecutionReceipt>();

export function clearCognitiveExecutionReceiptRegistryForTests(): void {
  registry.clear();
}

export function rememberCognitiveExecutionReceipt(
  receipt: CognitiveExecutionReceipt,
): void {
  if (registry.size >= REGISTRY_MAX) {
    const oldest = registry.keys().next().value;
    if (typeof oldest === "string") {
      registry.delete(oldest);
    }
  }
  registry.set(receipt.logicalTurnId, receipt);
}

export function getCognitiveExecutionReceipt(
  logicalTurnId: string,
): CognitiveExecutionReceipt | null {
  return registry.get(logicalTurnId) ?? null;
}

export type BuildCognitiveExecutionReceiptInput = {
  logicalTurnId: string;
  projectId: string;
  presentation: "test_provider" | "openai_live";
  productTerminalStatus: AssistantTurnStatus;
  turn?: Pick<
    NoraCognitiveTurnResult,
    | "usage"
    | "toolCalls"
    | "limitReached"
    | "cognitiveRuntime"
    | "selectedModelId"
    | "selectedReasoningEffort"
    | "adaptiveObserve"
    | "continuationObserve"
  > | null;
  capturedAt?: string;
};

function classifyProvider(input: {
  presentation: "test_provider" | "openai_live";
  providerResponseId: string | null;
}): {
  providerIdentity: CognitiveExecutionReceipt["providerIdentity"];
  providerResponseObservation: ProviderResponseObservation;
} {
  if (input.presentation === "test_provider") {
    return {
      providerIdentity: "fake",
      providerResponseObservation: "FAKE_DETERMINISTIC",
    };
  }
  if (
    typeof input.providerResponseId === "string" &&
    input.providerResponseId.length > 0
  ) {
    // Looks Fake-shaped → refuse PROVIDER_CONFIRMED even on openai_live presentation.
    if (
      input.providerResponseId.startsWith("fake-") ||
      input.providerResponseId.startsWith("fake_")
    ) {
      return {
        providerIdentity: "fake",
        providerResponseObservation: "FAKE_DETERMINISTIC",
      };
    }
    return {
      providerIdentity: "openai",
      providerResponseObservation: "PROVIDER_CONFIRMED",
    };
  }
  return {
    providerIdentity: "openai",
    providerResponseObservation: "NOT_OBSERVED",
  };
}

export function buildCognitiveExecutionReceipt(
  input: BuildCognitiveExecutionReceiptInput,
): CognitiveExecutionReceipt {
  const turn = input.turn ?? null;
  const providerResponseId = turn?.usage?.providerResponseId ?? null;
  const classified = classifyProvider({
    presentation: input.presentation,
    providerResponseId,
  });
  const adaptive = turn?.adaptiveObserve;
  const continuation = turn?.continuationObserve;

  return {
    schemaVersion: COGNITIVE_EXECUTION_RECEIPT_SCHEMA_VERSION,
    proofClassification: "DETERMINISTIC",
    logicalTurnId: input.logicalTurnId,
    projectId: input.projectId,
    runtimeIdentity: "agents",
    providerIdentity: classified.providerIdentity,
    presentation: input.presentation,
    selectedModelId:
      typeof turn?.selectedModelId === "string" ? turn.selectedModelId : null,
    observedModel: turn?.usage?.model ?? null,
    selectedReasoningEffort:
      typeof turn?.selectedReasoningEffort === "string"
        ? turn.selectedReasoningEffort
        : null,
    providerResponseId,
    providerResponseObservation: classified.providerResponseObservation,
    usage: {
      inputTokens: turn?.usage?.inputTokens ?? null,
      outputTokens: turn?.usage?.outputTokens ?? null,
      totalTokens: turn?.usage?.totalTokens ?? null,
    },
    adaptiveObserve: adaptive
      ? {
          requestedMaxTurns: adaptive.requestedMaxTurns,
          effectiveMaxTurns: adaptive.effectiveMaxTurns,
          strategyClass: adaptive.strategyClass ?? null,
          reasonCodes: [...adaptive.reasonCodes],
          floor: adaptive.floor,
          ceiling: adaptive.ceiling,
          explicitOverride: adaptive.explicitOverride,
        }
      : null,
    continuationObserve: continuation
      ? {
          continued: continuation.continued,
          segmentsExecuted: continuation.segmentsExecuted,
          missionMaxTurns: continuation.missionMaxTurns,
          segmentMaxTurns: continuation.segmentMaxTurns,
          allottedTurns: continuation.allottedTurns,
          stopReason: continuation.stopReason,
          reasonCodes: [...continuation.reasonCodes],
        }
      : null,
    toolCalls: turn?.toolCalls ?? 0,
    limitReached: turn?.limitReached === true,
    productTerminalStatus: input.productTerminalStatus,
    capturedAt: input.capturedAt ?? new Date().toISOString(),
  };
}

/** Default external P6 ledger path (campaign workspace — not Product SQLite). */
export function defaultP6EvidenceLedgerPath(
  workspaceRoot: string = process.cwd(),
): string {
  return path.join(
    workspaceRoot,
    ".tmp-sfia-review",
    "p6-global-integrated-qa",
    "evidence-ledger.jsonl",
  );
}

export function isP6EvidenceLedgerCaptureEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return env.SFIA_P6_EVIDENCE_LEDGER_CAPTURE === "1";
}

/**
 * Append a receipt line to the existing P6 Campaign Evidence Ledger.
 * Creates parent dirs when missing. Never writes secrets / prompts / bodies.
 */
export function appendCognitiveExecutionReceiptToP6Ledger(
  receipt: CognitiveExecutionReceipt,
  options?: { ledgerPath?: string; workspaceRoot?: string },
): { ledgerPath: string } {
  const ledgerPath =
    options?.ledgerPath ??
    defaultP6EvidenceLedgerPath(options?.workspaceRoot ?? process.cwd());
  fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });
  const line = JSON.stringify({
    kind: "cognitive_execution_receipt",
    campaignId: "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
    logicalTurnId: receipt.logicalTurnId,
    projectId: receipt.projectId,
    proofClassification: receipt.proofClassification,
    providerResponseObservation: receipt.providerResponseObservation,
    providerIdentity: receipt.providerIdentity,
    presentation: receipt.presentation,
    providerResponseId: receipt.providerResponseId,
    selectedModelId: receipt.selectedModelId,
    observedModel: receipt.observedModel,
    selectedReasoningEffort: receipt.selectedReasoningEffort,
    usage: receipt.usage,
    adaptiveObserve: receipt.adaptiveObserve,
    continuationObserve: receipt.continuationObserve,
    toolCalls: receipt.toolCalls,
    limitReached: receipt.limitReached,
    productTerminalStatus: receipt.productTerminalStatus,
    runtimeIdentity: receipt.runtimeIdentity,
    capturedAt: receipt.capturedAt,
    schemaVersion: receipt.schemaVersion,
  });
  fs.appendFileSync(ledgerPath, `${line}\n`, "utf8");
  return { ledgerPath };
}

export function findCognitiveExecutionReceiptInP6Ledger(
  logicalTurnId: string,
  options?: { ledgerPath?: string; workspaceRoot?: string },
): CognitiveExecutionReceipt | null {
  const ledgerPath =
    options?.ledgerPath ??
    defaultP6EvidenceLedgerPath(options?.workspaceRoot ?? process.cwd());
  if (!fs.existsSync(ledgerPath)) {
    return null;
  }
  const text = fs.readFileSync(ledgerPath, "utf8");
  let found: CognitiveExecutionReceipt | null = null;
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    let parsed: unknown;
    try {
      parsed = JSON.parse(line);
    } catch {
      continue;
    }
    if (
      parsed == null ||
      typeof parsed !== "object" ||
      Array.isArray(parsed)
    ) {
      continue;
    }
    const row = parsed as Record<string, unknown>;
    if (row.kind !== "cognitive_execution_receipt") continue;
    if (row.logicalTurnId !== logicalTurnId) continue;
    found = row as unknown as CognitiveExecutionReceipt;
  }
  return found;
}

/**
 * Conserve receipt: process registry always; optional external P6 ledger.
 */
export function conserveCognitiveExecutionReceipt(
  receipt: CognitiveExecutionReceipt,
  options?: {
    ledgerPath?: string;
    workspaceRoot?: string;
    captureToLedger?: boolean;
  },
): void {
  rememberCognitiveExecutionReceipt(receipt);
  const capture =
    options?.captureToLedger === true ||
    (options?.captureToLedger !== false && isP6EvidenceLedgerCaptureEnabled());
  if (capture) {
    appendCognitiveExecutionReceiptToP6Ledger(receipt, options);
  }
}
```

### NEW — p6.realObs.optionB.receiptConservation.d0.test.ts (complete)
```typescript
/**
 * P6-REAL-OBS-P0-RECEIPT-CONSERVATION — Option B (DETERMINISTIC / ZERO REAL).
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  appendCognitiveExecutionReceiptToP6Ledger,
  buildCognitiveExecutionReceipt,
  clearCognitiveExecutionReceiptRegistryForTests,
  findCognitiveExecutionReceiptInP6Ledger,
  getCognitiveExecutionReceipt,
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
    contextSummary: "Option B D0",
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

describe("P6 REAL OBS Option B — receipt conservation (DETERMINISTIC)", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const previousCapture = process.env.SFIA_P6_EVIDENCE_LEDGER_CAPTURE;
  let sessionDir: string;
  let sessionDbPath: string;
  let ledgerDir: string;
  let ledgerPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.SFIA_P6_EVIDENCE_LEDGER_CAPTURE;
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    runNoraCognitiveTurnMock.mockReset();
    setConversationProviderForTests(null);
    clearCognitiveExecutionReceiptRegistryForTests();
    sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-obs-b-sess-"));
    sessionDbPath = path.join(sessionDir, "session.sqlite");
    ledgerDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-obs-b-ledger-"));
    ledgerPath = path.join(ledgerDir, "evidence-ledger.jsonl");
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    clearCognitiveExecutionReceiptRegistryForTests();
    if (previousFake === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    }
    if (previousCapture === undefined) {
      delete process.env.SFIA_P6_EVIDENCE_LEDGER_CAPTURE;
    } else {
      process.env.SFIA_P6_EVIDENCE_LEDGER_CAPTURE = previousCapture;
    }
    fs.rmSync(sessionDir, { recursive: true, force: true });
    fs.rmSync(ledgerDir, { recursive: true, force: true });
  });

  it("T01/T02/T04/T05/T06/T08/T10/T11/T19 — Fake receipt conserved; not REAL; DTO additive", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "Guided Document Review.",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("ok");
    expect(result.logicalTurnId).toMatch(/^ltu:/);
    const receipt = result.cognitiveExecutionReceipt;
    expect(receipt).toBeDefined();
    expect(receipt!.logicalTurnId).toBe(result.logicalTurnId);
    expect(receipt!.projectId).toBe("prj:obs-b");
    expect(receipt!.providerResponseId).toBe("fake-resp-obs-b-1");
    expect(receipt!.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
    expect(receipt!.providerIdentity).toBe("fake");
    expect(receipt!.proofClassification).toBe("DETERMINISTIC");
    expect(receipt!.selectedModelId).toBe("fake-test-model");
    expect(receipt!.observedModel).toBe("fake-test-model");
    expect(receipt!.selectedReasoningEffort).toBe("low");
    expect(receipt!.usage.totalTokens).toBe(18);
    expect(receipt!.adaptiveObserve?.effectiveMaxTurns).toBe(8);
    expect(receipt!.continuationObserve?.continued).toBe(false);
    expect(receipt!.productTerminalStatus).toBe("ok");
    // T19 — existing DTO fields still present
    expect(result.model).toBe("fake-test-model");
    expect(result.toolCalls).toBe(3);
    expect(result.limitReached).toBe(false);
    // No secrets / prompt bodies
    const serialized = JSON.stringify(receipt);
    expect(serialized).not.toMatch(/sk-|Bearer |OPENAI_API_KEY|system prompt/i);
    expect(serialized).not.toContain("Guided Document Review.");
  });

  it("T03/T07 — null provider receipt + null tokens conserved as NOT_OBSERVED / null", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        usage: {
          inputTokens: null,
          outputTokens: null,
          totalTokens: null,
          model: "fake-test-model",
          providerResponseId: null,
        },
      }),
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "probe null receipt",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const receipt = result.cognitiveExecutionReceipt!;
    expect(receipt.providerResponseId).toBeNull();
    // Fake presentation still FAKE_DETERMINISTIC (not PROVIDER_CONFIRMED)
    expect(receipt.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
    expect(receipt.usage.inputTokens).toBeNull();
    expect(receipt.usage.outputTokens).toBeNull();
    expect(receipt.usage.totalTokens).toBeNull();
  });

  it("T03b — openai_live null id ⇒ NOT_OBSERVED (builder unit)", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:unit-null",
      projectId: "prj:obs-b",
      presentation: "openai_live",
      productTerminalStatus: "ok",
      turn: {
        usage: {
          inputTokens: 1,
          outputTokens: 1,
          totalTokens: 2,
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
    expect(receipt.providerResponseObservation).toBe("NOT_OBSERVED");
    expect(receipt.providerIdentity).toBe("openai");
    expect(receipt.providerResponseId).toBeNull();
  });

  it("T02b — openai_live non-null id ⇒ PROVIDER_CONFIRMED (builder; DET harness)", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:unit-confirmed",
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
    expect(receipt.providerResponseObservation).toBe("PROVIDER_CONFIRMED");
    expect(receipt.proofClassification).toBe("DETERMINISTIC");
  });

  it("T09 — continuationObserve conserved when continued", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        continuationObserve: {
          continued: true,
          segmentsExecuted: 2,
          missionMaxTurns: 12,
          segmentMaxTurns: 6,
          allottedTurns: 12,
          stopReason: "complete",
          reasonCodes: ["continuation:segment"],
        },
      }),
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "continuation probe",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.cognitiveExecutionReceipt!.continuationObserve).toEqual({
      continued: true,
      segmentsExecuted: 2,
      missionMaxTurns: 12,
      segmentMaxTurns: 6,
      allottedTurns: 12,
      stopReason: "complete",
      reasonCodes: ["continuation:segment"],
    });
  });

  it("T12 — incomplete status on receipt", async () => {
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
    expect(result.cognitiveExecutionReceipt!.limitReached).toBe(true);
  });

  it("T13 — cognitive_stop status on receipt", async () => {
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

  it("T14 — provider_error conserves honest failure receipt (no success id)", async () => {
    runNoraCognitiveTurnMock.mockRejectedValue(new Error("FAKE_PROVIDER_ERROR"));
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "error probe",
      sessionDbPath,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("provider_error");
    expect(result.logicalTurnId).toMatch(/^ltu:/);
    const receipt = result.cognitiveExecutionReceipt!;
    expect(receipt.productTerminalStatus).toBe("provider_error");
    expect(receipt.providerResponseId).toBeNull();
    expect(receipt.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
    expect(getCognitiveExecutionReceipt(result.logicalTurnId!)).toEqual(receipt);
  });

  it("T15 — receipt retrievable after turn via registry + P6 ledger", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "retrieve probe",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const ltu = result.logicalTurnId!;
    // Simulate request end: drop local result reference; lookup by id.
    const fromRegistry = getCognitiveExecutionReceipt(ltu);
    expect(fromRegistry).not.toBeNull();
    expect(fromRegistry!.logicalTurnId).toBe(ltu);
    appendCognitiveExecutionReceiptToP6Ledger(fromRegistry!, { ledgerPath });
    clearCognitiveExecutionReceiptRegistryForTests();
    expect(getCognitiveExecutionReceipt(ltu)).toBeNull();
    const fromLedger = findCognitiveExecutionReceiptInP6Ledger(ltu, {
      ledgerPath,
    });
    expect(fromLedger).not.toBeNull();
    expect(fromLedger!.logicalTurnId).toBe(ltu);
    expect(fromLedger!.providerResponseId).toBe("fake-resp-obs-b-1");
  });

  it("T16 — isolation by logicalTurnId / projectId", async () => {
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
    expect(getCognitiveExecutionReceipt("ltu:does-not-exist")).toBeNull();
  });

  it("T17 — receipt JSON has no secret-like fields", async () => {
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
    expect(json).not.toContain("messages");
    expect(json).not.toContain("prompt");
  });

  it("T18/T20 — no authority/routing mutation; Fake still Fake; adaptive reused", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:obs-b",
      content: "authority probe",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    // Authority surfaces untouched
    expect(result).not.toHaveProperty("governedAuthority");
    expect(result.cognitiveExecutionReceipt!.proofClassification).toBe(
      "DETERMINISTIC",
    );
    // Adaptive fields match turn producer (not recomputed)
    expect(result.cognitiveExecutionReceipt!.adaptiveObserve?.requestedMaxTurns).toBe(
      8,
    );
    expect(runNoraCognitiveTurnMock).toHaveBeenCalledTimes(1);
    const call = runNoraCognitiveTurnMock.mock.calls[0]?.[0] as {
      evalModelReasoningControl?: unknown;
    };
    // No eval pin injected by Option B
    expect(call.evalModelReasoningControl).toBeUndefined();
  });

  it("T08/T10 builder — adaptive present; continuation none", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:builder",
      projectId: "prj:obs-b",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: baseTurn({
        continuationObserve: {
          continued: false,
          segmentsExecuted: 1,
          missionMaxTurns: 4,
          segmentMaxTurns: 4,
          allottedTurns: 4,
          stopReason: "complete",
          reasonCodes: [],
        },
      }) as never,
    });
    expect(receipt.adaptiveObserve?.floor).toBe(4);
    expect(receipt.continuationObserve?.continued).toBe(false);
  });
});
```

### MOD — orchestrateTurn.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 68aa1795..ae58f61e 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -78,6 +78,10 @@ import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/Pro
 import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
 import { collectToolTelemetry } from "./collectToolTelemetry";
 import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
+import {
+  buildCognitiveExecutionReceipt,
+  conserveCognitiveExecutionReceipt,
+} from "./cognitiveExecutionReceipt";
 import { resolveAssistantMode } from "./resolveAssistantMode";
 import {
   resolveRememberedEvidence,
@@ -1449,6 +1453,21 @@ export async function orchestrateProjectAssistantTurn(input: {
       input.beforeDurableEffect,
     );

+    const cognitiveExecutionReceipt =
+      typeof logicalTurnId === "string" && logicalTurnId.length > 0
+        ? (() => {
+            const receipt = buildCognitiveExecutionReceipt({
+              logicalTurnId,
+              projectId: project.projectId,
+              presentation,
+              productTerminalStatus: status,
+              turn,
+            });
+            conserveCognitiveExecutionReceipt(receipt);
+            return receipt;
+          })()
+        : undefined;
+
     return {
       ok: true,
       status,
@@ -1477,18 +1496,33 @@ export async function orchestrateProjectAssistantTurn(input: {
       lifecycleRecommendationContinuityRevalidation,
       logicalTurnId,
       reservationProposedIds,
+      ...(cognitiveExecutionReceipt
+        ? { cognitiveExecutionReceipt }
+        : {}),
     };
   } catch (error) {
     if (isAbortLike(error, input.signal) || error instanceof NoraTurnAbortedError) {
-      return noraTurnStoppedFailure(modeResolution.mode, logicalTurnId);
+      const stopped = noraTurnStoppedFailure(modeResolution.mode, logicalTurnId);
+      if (typeof logicalTurnId === "string" && logicalTurnId.length > 0) {
+        const receipt = buildCognitiveExecutionReceipt({
+          logicalTurnId,
+          projectId: project.projectId,
+          presentation,
+          productTerminalStatus: "stopped",
+          turn: null,
+        });
+        conserveCognitiveExecutionReceipt(receipt);
+        return { ...stopped, cognitiveExecutionReceipt: receipt };
+      }
+      return stopped;
     }
     const message =
       error instanceof Error
         ? error.message
         : "Erreur provider inattendue.";
-    return {
-      ok: false,
-      status: "provider_error",
+    const failureBase = {
+      ok: false as const,
+      status: "provider_error" as const,
       code: "PROVIDER_ERROR",
       message:
         message === "FAKE_PROVIDER_ERROR"
@@ -1498,5 +1532,17 @@ export async function orchestrateProjectAssistantTurn(input: {
       retryable: true,
       logicalTurnId,
     };
+    if (typeof logicalTurnId === "string" && logicalTurnId.length > 0) {
+      const receipt = buildCognitiveExecutionReceipt({
+        logicalTurnId,
+        projectId: project.projectId,
+        presentation,
+        productTerminalStatus: "provider_error",
+        turn: null,
+      });
+      conserveCognitiveExecutionReceipt(receipt);
+      return { ...failureBase, cognitiveExecutionReceipt: receipt };
+    }
+    return failureBase;
   }
 }
```

### MOD — types.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 93d8530c..cbabef85 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -16,6 +16,7 @@ import type {
   F3RecommendationDto,
   F3ReviewBundleDto,
 } from "./f3/types";
+import type { CognitiveExecutionReceipt } from "./cognitiveExecutionReceipt";

 export type AssistantUiMode = "fixture" | "live" | "unavailable" | "unconfirmed";

@@ -317,6 +318,12 @@ export type ProjectAssistantSendSuccess = {
      */
     liveHostedDispatchCalls: number;
   };
+  /**
+   * P6-REAL-OBS-P0 — redacted cognitive execution receipt (metadata only).
+   * Correlated to server logicalTurnId. Fake ≠ REAL. Null ids = NOT_OBSERVED.
+   * Conserved process-locally + optional P6 Evidence Ledger (not Product SQLite).
+   */
+  cognitiveExecutionReceipt?: CognitiveExecutionReceipt;
 };

 export type ProjectAssistantSendFailure = {
@@ -342,6 +349,11 @@ export type ProjectAssistantSendFailure = {
     | "UNAVAILABLE"
     | "NOT_APPLICABLE"
     | null;
+  /**
+   * P6-REAL-OBS-P0 — honest failure receipt when a logicalTurnId was minted.
+   * Never invents a success provider receipt.
+   */
+  cognitiveExecutionReceipt?: CognitiveExecutionReceipt;
 };

 export type ProjectAssistantSendResult =
```

### MOD — PRR volumes + mechanical digests
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index b9ad266f..8ae214aa 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -132,6 +132,25 @@ Untracked but behaviorally central (documented, digests not expanded): `runNoraA

 **SEMANTIC IMPACT = YES** (do not claim global NO SEMANTIC IMPACT).

+## Sample impact analysis F — P6-REAL-OBS-P0 Option B (local candidate)
+
+**Changed tracked paths (digest drift):**
+- `features/project-assistant/orchestrateTurn.ts` → OBJ-TURN-ORCH
+
+Untracked (documented, digests not expanded): `cognitiveExecutionReceipt.ts`, `types.ts` receipt field, `p6.realObs.optionB.receiptConservation.d0.test.ts`.
+
+| Step | Result |
+|---|---|
+| Components | OBJ-TURN-ORCH (**SEMANTIC IMPACT** — additive receipt projection/conservation) |
+| Direct deps | NoraCognitiveTurnResult usage/adaptive/continuation; existing P6 Evidence Ledger path |
+| Flows | F04 primary (send/orchestrate); F02 adjacent (observability) |
+| Persistence | Process-local registry + optional external `.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl` — **no new SQLite table**; Session ≠ Evidence authority |
+| Authority | Receipt ≠ REAL PROVEN; Fake ≠ PROVIDER_CONFIRMED |
+| Fake/Real | DETERMINISTIC PROVEN AT OBSERVABILITY SEAM; REAL boundary **NOT PROVEN** |
+| Digests | mechanical `--write-digests` after Option B local delivery |
+
+**SEMANTIC IMPACT = YES** (additive observability only; no routing/budget/conversation change).
+
 ## Sample impact analysis E — RCD-01 documentary reliability (PR #578 INTEGRATED ON MAIN)

 **Changed Product paths (historical semantic change; already on main @ `44006648`):**
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index c7442607..de7f1720 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -19,6 +19,7 @@
 | F04 Framing continuity UI | framingContinuityCard / Rehydrate / p6.ux.recommendationContinuity | examinable card; Recommendation≠Decision |
 | F04 Work Recommendation materialization (REC-01) | qualifyProspectiveWorkRecommendationMaterialization.d0; activeCycleCognitiveWork.d0 (Option A SQLite reload + historical replay); p6.hqa.rec01.minimalStabilization.d0; p6.hqa.rec01.optionB.workRecommendationsContext.d0; UX-REC-02 journalDisclaimer; chatFirstWorkRecommendationContinuity; noraLifecycleRecommendationContinuity | DETERMINISTIC at tested scope; coverage PARTIAL fail-closed; REAL NOT RUN |
 | F04 Nora autonomy P0/P1/P2 (PR #577 INTEGRATED ON MAIN) | `p6.nora.maxTurns.documentary.d0.test.ts`; `p6.nora.p1.adaptiveBudget.d0.test.ts`; `p6.nora.p1p2.documentary.mission.d0.test.ts`; `p6.nora.p1p2.targetedVerification.d0.test.ts`; `p6.nora.p0.productStatusHonesty.d0.test.ts`; `p6.nora.p0.incomplete.panel.ux.d0.test.tsx`; `p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx`; `mw6.pre-real.budget-hardening.d0.test.ts` (NUM-CLAMP / R-PRE-REAL-08A); `runner.d0.test.ts`; `orchestrateTurn.test.ts` | See proof oracles below — **DETERMINISTIC ONLY**; not Product UI E2E REAL; not documentary REAL quality; merge `d8ceb8ad` |
+| F04 P6 REAL OBS Option B receipt conservation | `p6.realObs.optionB.receiptConservation.d0.test.ts` | DETERMINISTIC AT OBSERVABILITY SEAM — process registry + P6 ledger helper; Fake ≠ REAL; null id = NOT_OBSERVED; ZERO REAL |
 | F04 Documentary reliability RCD-01 (PR #578 INTEGRATED ON MAIN) | `p6.nora.min09.documentaryReliability.d0.test.ts` (R1–R7); P1/P2/Session regressions | Complete-line coverage; redaction progression; final envelope truth; envelope `lineExceedsCap`; fixture regex fidelity; **DETERMINISTIC ONLY** — not GDR REAL; merge `44006648` |
 | F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
 | F07 Framing HD / START boundary | chatFirstFramingContinuity* + F01 gate | HD structural when required; START gated |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index f345e1b3..b66d7550 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,6 +5,18 @@
 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)

+## Overlay — P6-REAL-OBS-P0 Option B (local candidate)
+
+| Item | Status |
+|---|---|
+| Cognitive execution receipt projected on Product send DTO | AS-IMPLEMENTED locally — DETERMINISTIC |
+| Process-local registry by server `logicalTurnId` | AS-IMPLEMENTED — NOT Product SQLite Evidence authority |
+| Optional append/find on existing P6 Evidence Ledger (`.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl`) | AS-IMPLEMENTED helper + env `SFIA_P6_EVIDENCE_LEDGER_CAPTURE=1` |
+| Fake / null providerResponseId honesty | Fake → `FAKE_DETERMINISTIC`; null on openai_live → `NOT_OBSERVED`; never invents ids |
+| Historical T1 `ltu:ff0b592f…` REAL requalification | **NOT RETROACTIVE** — still FUNCTIONAL ACCEPTED WITH RESERVES / REAL NOT PROVEN |
+| REAL boundary / P6 GLOBAL PASS / Product READY | **NOT PROVEN / NOT CLAIMED** |
+| Runtime v3 | **NON ADOPTED** |
+
 ## Overlay — Nora autonomy PR #577 (INTEGRATED ON MAIN)

 | Item | Status |
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index dd1d89b0..b3d277e8 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -23,7 +23,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "7b4089cd4fbb4e17"
+      "sha256_16": "77dc8b7fd1d0bd06"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "25fb9a38f1eca0f9"
+      "sha256_16": "d1aa6528a1ae297c"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "4582c1d2695a5f76"
+      "sha256_16": "b7772c48441e019f"
     }
   ],
   "components": [
@@ -582,7 +582,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "4b5dc69962b5a7ed"
+      "sha256_16": "f83aa3d17773f427"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
```

## 12–16. DTO / provider / budget / continuation / status
Additive cognitiveExecutionReceipt on success+failure. Existing DTO fields unchanged.
Provider/model/effort/usage/adaptive/continuation projected from Nora result.
Product terminal status on receipt = ok|incomplete|cognitive_stop|provider_error|stopped ≠ logical accepted.

## 17. Capture / retrieval
DTO HTTP · process registry getCognitiveExecutionReceipt(ltu) · P6 ledger append/find — T15 proves post-turn retrieval.

## 18. Security
Metadata only — no prompts/docs/CoT/auth/raw payloads.

## 19–20. Tests
Targeted 13/13 pass · P0 honesty + PRR conformance pass · typecheck OK · prior full npm test 5676 pass (digest fail then fixed) · ZERO OpenAI.

## 21. PRR
check-production-runtime-reference.mjs CONFORMANCE OK after --write-digests (orchestrateTurn + volumes 04/08/09). Semantic analysis F in 04.

## 22. Fake/Real
DETERMINISTIC PROVEN AT OBSERVABILITY SEAM. REAL NOT PROVEN. Forbidden claims unchanged.

## 23–24. Reserves / debt
Registry in-process only; durable path = P6 ledger (opt-in env). UI/readCoverage reserves out of scope.
Debt P6-REAL-OBS-P0-RECEIPT-CONSERVATION closed at DET seam. Remaining: REAL Human QA under distinct Morris GO.

## 25. Decisions not consumed
Project commit/push/PR/merge · REAL retest · Studio restart · FinOps/routing changes.

## 26. Verdict
**P6 REAL OBSERVABILITY OPTION B IMPLEMENTED LOCALLY / DETERMINISTIC PROVEN / READY FOR CHATGPT REVIEW**

## 27. Instruction ChatGPT
Lire handoff distant. Vérifier scope borné, pas d'architecture parallèle, preuve récupérable après tour, Fake/REAL honesty, redaction, tests, PRR, Git local dirty Option B only, pas de REAL, readiness intégration sans commit/push/PR implicite. Ne pas autoriser nouveau test REAL.
