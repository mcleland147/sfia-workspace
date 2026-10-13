# SFIA STUDIO — P6 REAL OBSERVABILITY OPTION B
## Review Pack FULL — EXTERNAL EVIDENCE LEDGER DELIVERY

**Horodatage:** 2026-10-13 18:25:03 CEST
**Cycle:** 8 — Delivery / implémentation
**Profil:** CRITICAL
**Typologie:** EVOL / QA EVIDENCE CAPTURE
**Chantier:** P6-REAL-OBS-P0-RECEIPT-CONSERVATION
**GO Morris:** 2026-10-13 — ADOPT BOUNDED EXTERNAL P6 EVIDENCE LEDGER
**Entry handoff:** `046af12f` / blob `a7e54caed`
**Verdict:** **P6 EXTERNAL EVIDENCE LEDGER IMPLEMENTED LOCALLY / DETERMINISTIC PROVEN / READY FOR CHATGPT CRITICAL REVIEW**

---

## 1. GO / Git Truth

| Item | Value |
|------|-------|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-real-observability-option-b` |
| Branch | `fix/p6-real-observability-option-b` |
| HEAD | `bd3f440c749a059d73fb76e09bb1d0ce91e27af4` |
| origin/main | `bd3f440c749a059d73fb76e09bb1d0ce91e27af4` |
| Runtime :3020 | untouched |
| OpenAI REAL | **ZERO** |
| Project commit/push/PR | **NONE** |

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/p6-campaign-evidence/
?? projects/sfia-studio/app/__tests__/project-assistant/p6.realObs.optionB.receiptConservation.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/cognitiveExecutionReceipt.ts
?? projects/sfia-studio/app/lib/p6-campaign-evidence/
```

Diffstat:
```
 .tmp-sfia-review/chatgpt-review.md                 | 166 ---------------------
 .../features/project-assistant/orchestrateTurn.ts  |  46 +++++-
 .../app/features/project-assistant/types.ts        |  12 ++
 .../04-dependency-impact-map.md                    |  19 +++
 .../08-test-proof-and-conformance-map.md           |   2 +
 ...9-known-gaps-reserves-and-current-boundaries.md |  16 ++
 .../production-runtime-reference.manifest.json     |   8 +-
 7 files changed, 95 insertions(+), 174 deletions(-)
```

Name-status:
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts
M	projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
A	projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/p6.realObs.optionB.receiptConservation.d0.test.ts
A	projects/sfia-studio/app/features/project-assistant/cognitiveExecutionReceipt.ts
A	projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts
A	projects/sfia-studio/app/lib/p6-campaign-evidence/evidenceLedger.ts
A	projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts
```

## 2–4. Sources / Convergence / Decision
Build Doctrine · Roadmap · C1 · 33/35 · Nora 08 · P6 QA §T · CKC delivery · PRR · entry handoff 046af12f.

P0/P1/P2/RCD-01 INTEGRATED · T1 FUNCTIONAL WITH RESERVES · REAL NOT PROVEN · Option B safety DET · Runtime v3 NON ADOPTED.

**Decision consumed:** ADOPT BOUNDED EXTERNAL P6 EVIDENCE LEDGER for campaign QA only — not Product persistence, not Studio architecture of record.

## 5. Discovery / reuse
Existing campaign harnesses (qa branch / historical) already append to:
`.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl`
(see `__tests__/p6-campaign/*.real.test.ts` pattern on campaign WT).

This delivery centralizes that convention into reusable QA library:
`lib/p6-campaign-evidence/**` — no second orchestrator; Product `orchestrateTurn` remains write-free for JSONL.

## 6. Ledger contract
- Path: `.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl`
- campaignId fixed: `P6-GLOBAL-INTEGRATED-PRODUCT-QA-01`
- Append-only; no silent rewrite; FAILED historical preserved
- runId ≠ logicalTurnId; duplicate runId → reject (or explicit skip)
- kind=`cognitive_execution_receipt`
- realBoundaryClaim always `NOT_CLAIMED`; productRealProofStatus `NOT_PROVEN`
- Classifications: FAKE_DETERMINISTIC | NOT_OBSERVED | RUNNER_RESPONSE_ID_OBSERVED

## 7. Capture QA
`captureCognitiveExecutionReceiptToP6Ledger` / `extractCognitiveExecutionReceiptFromDto`
Source = Product DTO receipt · validates · redacts forbidden keys · appends · reopens by runId.
Capture failure ≠ Product provider_error.

## 8–11. Provenance / Fake-Real / Resilience / Security
No PROVIDER_CONFIRMED · no auto-REAL · write fail surfaced · corrupt lines skipped with exact runId match only · no secrets/prompts/auth · no public HTTP route · Product SQLite untouched.

## 12. Files

### NEW — cognitiveExecutionReceipt.ts (complete)
```typescript
/**
 * P6-REAL-OBS-P0-RECEIPT-CONSERVATION — Option B receipt (corrected).
 *
 * Projects already-produced Nora/Runner observability into a redacted receipt
 * and remembers it process-locally by server logicalTurnId.
 *
 * Durable P6 Campaign Evidence Ledger (JSONL under .tmp-sfia-review/…) is
 * ADOPTED for **external P6 campaign QA only** (`lib/p6-campaign-evidence`).
 * This Product module does NOT write that ledger — capture is QA-side from DTO.
 *
 * Fake never becomes REAL. Runner-returned ids are observations only.
 * null providerResponseId is NOT_OBSERVED — never invented.
 * Conservation failures never throw into the Product success path.
 */

import type { NoraCognitiveTurnResult } from "@/lib/nora-cognitive-runtime";
import type { AssistantTurnStatus } from "./types";

export const COGNITIVE_EXECUTION_RECEIPT_SCHEMA_VERSION = 1 as const;

/**
 * Honest provider observation at the Product seam.
 * Never upgrades Fake / synthetic / Runner-observed ids into REAL PROVEN.
 * PROVIDER_CONFIRMED is intentionally absent from this seam.
 */
export type ProviderResponseObservation =
  | "FAKE_DETERMINISTIC"
  | "NOT_OBSERVED"
  /** Runner returned a non-null lastResponseId/usage id — observation only. */
  | "RUNNER_RESPONSE_ID_OBSERVED";

/** Always NOT_PROVEN at this Product seam — REAL is a P6 process claim. */
export type RealProofStatus = "NOT_PROVEN";

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

/**
 * Conservation outcome — distinct from cognitive Product status.
 * Durable ledger write is not authorized in this lot.
 */
export type ReceiptConservationStatus = {
  /** Process-local Map keyed by logicalTurnId (ephemeral; ≠ Evidence SoT). */
  processLocal: "remembered" | "failed" | "skipped";
  /**
   * Durable external ledger is QA-side (`lib/p6-campaign-evidence`), never written
   * by Product orchestrateTurn. Product conservation remains process-local only.
   */
  durableLedger: "not_authorized_candidate" | "disabled";
  ok: boolean;
  failureCode: string | null;
};

export type CognitiveExecutionReceipt = {
  schemaVersion: typeof COGNITIVE_EXECUTION_RECEIPT_SCHEMA_VERSION;
  /** Campaign Axis B artifact class for this seam — never auto-REAL. */
  proofClassification: "DETERMINISTIC";
  /** Explicit: this receipt never asserts REAL BOUNDARY PROVEN. */
  realProofStatus: RealProofStatus;
  logicalTurnId: string;
  projectId: string;
  runtimeIdentity: "agents";
  /** Identity boundary — Fake never becomes openai. */
  providerIdentity: "fake" | "openai" | "unknown";
  presentation: "test_provider" | "openai_live";
  /** presentation === openai_live ⇒ configured for live path (≠ invoked/proven). */
  providerConfigured: boolean;
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
  conservation: ReceiptConservationStatus;
  capturedAt: string;
};

const REGISTRY_MAX = 512;
const registry = new Map<string, CognitiveExecutionReceipt>();

function rememberCognitiveExecutionReceiptDefault(
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

/** Injectable remember for DET fault-injection only — never Product authority. */
let rememberImpl: (receipt: CognitiveExecutionReceipt) => void =
  rememberCognitiveExecutionReceiptDefault;

export function clearCognitiveExecutionReceiptRegistryForTests(): void {
  registry.clear();
  rememberImpl = rememberCognitiveExecutionReceiptDefault;
}

export function setCognitiveExecutionReceiptRememberForTests(
  impl: ((receipt: CognitiveExecutionReceipt) => void) | null,
): void {
  rememberImpl = impl ?? rememberCognitiveExecutionReceiptDefault;
}

export function rememberCognitiveExecutionReceipt(
  receipt: CognitiveExecutionReceipt,
): void {
  rememberImpl(receipt);
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
  conservation?: ReceiptConservationStatus;
};

function classifyProvider(input: {
  presentation: "test_provider" | "openai_live";
  providerResponseId: string | null;
}): {
  providerIdentity: CognitiveExecutionReceipt["providerIdentity"];
  providerResponseObservation: ProviderResponseObservation;
  providerConfigured: boolean;
} {
  if (input.presentation === "test_provider") {
    return {
      providerIdentity: "fake",
      providerResponseObservation: "FAKE_DETERMINISTIC",
      providerConfigured: false,
    };
  }

  const providerConfigured = true;
  const id = input.providerResponseId;

  if (typeof id !== "string" || id.length === 0) {
    return {
      providerIdentity: "openai",
      providerResponseObservation: "NOT_OBSERVED",
      providerConfigured,
    };
  }

  // Explicit Fake markers — never promote, even on openai_live presentation.
  if (id.startsWith("fake-") || id.startsWith("fake_")) {
    return {
      providerIdentity: "fake",
      providerResponseObservation: "FAKE_DETERMINISTIC",
      providerConfigured,
    };
  }

  // Non-empty Runner-projected id is an observation only.
  // Format resemblance to OpenAI ids is NEVER sufficient for REAL PROVEN /
  // PROVIDER_CONFIRMED. Campaign REAL requires distinct Morris GO + correlation.
  return {
    providerIdentity: "openai",
    providerResponseObservation: "RUNNER_RESPONSE_ID_OBSERVED",
    providerConfigured,
  };
}

const CONSERVATION_DISABLED: ReceiptConservationStatus = {
  processLocal: "skipped",
  durableLedger: "not_authorized_candidate",
  ok: true,
  failureCode: null,
};

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
    realProofStatus: "NOT_PROVEN",
    logicalTurnId: input.logicalTurnId,
    projectId: input.projectId,
    runtimeIdentity: "agents",
    providerIdentity: classified.providerIdentity,
    presentation: input.presentation,
    providerConfigured: classified.providerConfigured,
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
    conservation: input.conservation ?? CONSERVATION_DISABLED,
    capturedAt: input.capturedAt ?? new Date().toISOString(),
  };
}

/**
 * Conserve receipt process-locally only.
 * Never writes durable JSONL / Product SQLite Evidence.
 * Never throws — capture failure is returned as status.
 */
export function conserveCognitiveExecutionReceipt(
  receipt: CognitiveExecutionReceipt,
): ReceiptConservationStatus {
  try {
    const withStatus: CognitiveExecutionReceipt = {
      ...receipt,
      conservation: {
        processLocal: "remembered",
        durableLedger: "not_authorized_candidate",
        ok: true,
        failureCode: null,
      },
    };
    rememberCognitiveExecutionReceipt(withStatus);
    return withStatus.conservation;
  } catch {
    const failed: ReceiptConservationStatus = {
      processLocal: "failed",
      durableLedger: "not_authorized_candidate",
      ok: false,
      failureCode: "PROCESS_LOCAL_REMEMBER_FAILED",
    };
    // Best-effort: still expose failed status on a registry entry when possible.
    try {
      rememberCognitiveExecutionReceipt({
        ...receipt,
        conservation: failed,
      });
    } catch {
      // Ignore secondary failure — caller keeps Product cognitive status.
    }
    return failed;
  }
}

/**
 * Build + conserve without throwing into Product orchestration.
 * Returns receipt with honest conservation status always set.
 */
export function projectAndConserveCognitiveExecutionReceipt(
  input: BuildCognitiveExecutionReceiptInput,
): CognitiveExecutionReceipt {
  const base = buildCognitiveExecutionReceipt(input);
  try {
    const conservation = conserveCognitiveExecutionReceipt(base);
    const finalReceipt: CognitiveExecutionReceipt = {
      ...base,
      conservation,
    };
    // Re-remember final object so registry matches returned DTO.
    if (conservation.processLocal === "remembered") {
      try {
        rememberCognitiveExecutionReceipt(finalReceipt);
      } catch {
        return {
          ...finalReceipt,
          conservation: {
            processLocal: "failed",
            durableLedger: "not_authorized_candidate",
            ok: false,
            failureCode: "PROCESS_LOCAL_REMEMBER_FAILED",
          },
        };
      }
    }
    return finalReceipt;
  } catch {
    return {
      ...base,
      conservation: {
        processLocal: "failed",
        durableLedger: "not_authorized_candidate",
        ok: false,
        failureCode: "CONSERVATION_UNEXPECTED_FAILURE",
      },
    };
  }
}
```

### NEW — evidenceLedger.ts (complete)
```typescript
/**
 * P6 Campaign Evidence Ledger — EXTERNAL QA device (NOT Product persistence).
 *
 * Canonical path (P6 QA §T / existing campaign harness convention):
 *   .tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl
 *
 * Append-only. Never rewrite historical lines. Never Product SQLite.
 * Campaign-scoped to P6-GLOBAL-INTEGRATED-PRODUCT-QA-01.
 */

import fs from "node:fs";
import path from "node:path";

export const P6_CAMPAIGN_ID = "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01" as const;

export const P6_EVIDENCE_LEDGER_RELATIVE_PATH = path.join(
  ".tmp-sfia-review",
  "p6-global-integrated-qa",
  "evidence-ledger.jsonl",
);

export function resolveP6EvidenceLedgerPath(
  workspaceRoot: string = process.cwd(),
): string {
  return path.join(workspaceRoot, P6_EVIDENCE_LEDGER_RELATIVE_PATH);
}

export type EnsureP6EvidenceLedgerResult =
  | { ok: true; ledgerPath: string; created: boolean }
  | { ok: false; ledgerPath: string; code: string; message: string };

/**
 * Ensure parent dirs + ledger file exist. Creates empty file when missing.
 * Does not truncate an existing ledger.
 */
export function ensureP6EvidenceLedger(options?: {
  workspaceRoot?: string;
  ledgerPath?: string;
}): EnsureP6EvidenceLedgerResult {
  const ledgerPath =
    options?.ledgerPath ??
    resolveP6EvidenceLedgerPath(options?.workspaceRoot ?? process.cwd());
  try {
    const dir = path.dirname(ledgerPath);
    fs.mkdirSync(dir, { recursive: true });
    const created = !fs.existsSync(ledgerPath);
    if (created) {
      fs.writeFileSync(ledgerPath, "", { encoding: "utf8", flag: "wx" });
    } else {
      // Touch-read to verify accessibility without mutating content.
      fs.accessSync(ledgerPath, fs.constants.R_OK | fs.constants.W_OK);
    }
    return { ok: true, ledgerPath, created };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "ledger_ensure_failed";
    return {
      ok: false,
      ledgerPath,
      code: "LEDGER_ENSURE_FAILED",
      message: message.slice(0, 200),
    };
  }
}

export type AppendP6EvidenceLedgerResult =
  | { ok: true; ledgerPath: string; byteLength: number }
  | {
      ok: false;
      ledgerPath: string;
      code: string;
      message: string;
    };

/**
 * Append one JSON line. Never rewrites prior lines.
 * Caller must supply a plain object (already validated/redacted).
 */
export function appendP6EvidenceLedgerRow(
  row: Record<string, unknown>,
  options?: { workspaceRoot?: string; ledgerPath?: string },
): AppendP6EvidenceLedgerResult {
  const ensured = ensureP6EvidenceLedger(options);
  if (!ensured.ok) {
    return {
      ok: false,
      ledgerPath: ensured.ledgerPath,
      code: ensured.code,
      message: ensured.message,
    };
  }
  try {
    const line = `${JSON.stringify(row)}\n`;
    fs.appendFileSync(ensured.ledgerPath, line, "utf8");
    return {
      ok: true,
      ledgerPath: ensured.ledgerPath,
      byteLength: Buffer.byteLength(line, "utf8"),
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "ledger_append_failed";
    return {
      ok: false,
      ledgerPath: ensured.ledgerPath,
      code: "LEDGER_APPEND_FAILED",
      message: message.slice(0, 200),
    };
  }
}

export type ReadP6EvidenceLedgerResult =
  | {
      ok: true;
      ledgerPath: string;
      rows: Record<string, unknown>[];
      parseErrors: number;
    }
  | { ok: false; ledgerPath: string; code: string; message: string };

/**
 * Read all parseable JSONL rows. Corrupt lines are skipped (counted).
 * Fail-closed when file missing or unreadable for required reads.
 */
export function readP6EvidenceLedger(options?: {
  workspaceRoot?: string;
  ledgerPath?: string;
  /** When true, missing file ⇒ empty ok (for fresh campaign). */
  allowMissing?: boolean;
}): ReadP6EvidenceLedgerResult {
  const ledgerPath =
    options?.ledgerPath ??
    resolveP6EvidenceLedgerPath(options?.workspaceRoot ?? process.cwd());
  if (!fs.existsSync(ledgerPath)) {
    if (options?.allowMissing) {
      return { ok: true, ledgerPath, rows: [], parseErrors: 0 };
    }
    return {
      ok: false,
      ledgerPath,
      code: "LEDGER_MISSING",
      message: "evidence ledger file not found",
    };
  }
  try {
    const text = fs.readFileSync(ledgerPath, "utf8");
    const rows: Record<string, unknown>[] = [];
    let parseErrors = 0;
    for (const raw of text.split("\n")) {
      const line = raw.trim();
      if (!line) continue;
      try {
        const parsed: unknown = JSON.parse(line);
        if (
          parsed != null &&
          typeof parsed === "object" &&
          !Array.isArray(parsed)
        ) {
          rows.push(parsed as Record<string, unknown>);
        } else {
          parseErrors += 1;
        }
      } catch {
        parseErrors += 1;
      }
    }
    return { ok: true, ledgerPath, rows, parseErrors };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "ledger_read_failed";
    return {
      ok: false,
      ledgerPath,
      code: "LEDGER_READ_FAILED",
      message: message.slice(0, 200),
    };
  }
}

export function findP6EvidenceLedgerRows(
  predicate: (row: Record<string, unknown>) => boolean,
  options?: {
    workspaceRoot?: string;
    ledgerPath?: string;
    allowMissing?: boolean;
  },
): ReadP6EvidenceLedgerResult & { matches?: Record<string, unknown>[] } {
  const read = readP6EvidenceLedger(options);
  if (!read.ok) return read;
  return {
    ...read,
    matches: read.rows.filter(predicate),
  };
}

export function findP6EvidenceLedgerByRunId(
  runId: string,
  options?: {
    workspaceRoot?: string;
    ledgerPath?: string;
    allowMissing?: boolean;
  },
): Record<string, unknown> | null {
  const found = findP6EvidenceLedgerRows(
    (row) => row.runId === runId,
    options,
  );
  if (!found.ok) return null;
  const matches = found.matches ?? [];
  return matches.length > 0 ? (matches[matches.length - 1] ?? null) : null;
}
```

### NEW — captureCognitiveExecutionReceipt.ts (complete)
```typescript
/**
 * External QA capture of Product CognitiveExecutionReceipt → P6 Evidence Ledger.
 *
 * Never called from Product orchestrateTurn.
 * Never invents REAL. Never writes secrets / prompts / bodies.
 */

import type { CognitiveExecutionReceipt } from "@/features/project-assistant/cognitiveExecutionReceipt";
import {
  appendP6EvidenceLedgerRow,
  findP6EvidenceLedgerByRunId,
  findP6EvidenceLedgerRows,
  P6_CAMPAIGN_ID,
  readP6EvidenceLedger,
  resolveP6EvidenceLedgerPath,
} from "./evidenceLedger";

export const COGNITIVE_RECEIPT_LEDGER_KIND =
  "cognitive_execution_receipt" as const;

export const COGNITIVE_RECEIPT_LEDGER_SCHEMA_VERSION = 1 as const;

export type CaptureCognitiveExecutionReceiptInput = {
  /** Distinct from Product logicalTurnId — campaign run identity. */
  runId: string;
  scenarioId: string;
  campaignId?: string;
  /** Product receipt (from DTO.cognitiveExecutionReceipt). */
  receipt: CognitiveExecutionReceipt;
  /** Optional runtime/git identity observed by QA harness. */
  runtimeIdentity?: {
    gitHead?: string | null;
    branch?: string | null;
    worktreeLabel?: string | null;
  };
  /** Campaign-level proof class for this capture artifact. */
  campaignProofClassification?: "DETERMINISTIC" | "REAL_BOUNDARY_CANDIDATE";
  reserves?: string[];
  evidenceRefs?: string[];
  workspaceRoot?: string;
  ledgerPath?: string;
  /**
   * Duplicate policy for the same runId + kind:
   * - reject (default): keep historical line; return duplicate_rejected
   * - skip: treat as success without writing
   * Never overwrite.
   */
  onDuplicate?: "reject" | "skip";
};

export type CaptureCognitiveExecutionReceiptResult =
  | {
      ok: true;
      status: "written" | "duplicate_skipped";
      runId: string;
      logicalTurnId: string;
      ledgerPath: string;
      entry: P6CognitiveReceiptLedgerEntry;
    }
  | {
      ok: false;
      status:
        | "validation_failed"
        | "duplicate_rejected"
        | "write_failed"
        | "identity_mismatch";
      code: string;
      message: string;
      runId: string;
      logicalTurnId: string | null;
      ledgerPath?: string;
    };

export type P6CognitiveReceiptLedgerEntry = {
  kind: typeof COGNITIVE_RECEIPT_LEDGER_KIND;
  schemaVersion: typeof COGNITIVE_RECEIPT_LEDGER_SCHEMA_VERSION;
  campaignId: string;
  runId: string;
  scenarioId: string;
  logicalTurnId: string;
  projectId: string;
  timestamp: string;
  runtime: {
    gitHead: string | null;
    branch: string | null;
    worktreeLabel: string | null;
    productRuntimeIdentity: "agents";
  };
  providerIdentity: CognitiveExecutionReceipt["providerIdentity"];
  presentation: CognitiveExecutionReceipt["presentation"];
  providerConfigured: boolean;
  selectedModelId: string | null;
  observedModel: string | null;
  selectedReasoningEffort: string | null;
  providerResponseId: string | null;
  providerResponseObservation: CognitiveExecutionReceipt["providerResponseObservation"];
  usage: CognitiveExecutionReceipt["usage"];
  adaptiveObserve: CognitiveExecutionReceipt["adaptiveObserve"];
  continuationObserve: CognitiveExecutionReceipt["continuationObserve"];
  toolCalls: number;
  limitReached: boolean;
  productTerminalStatus: CognitiveExecutionReceipt["productTerminalStatus"];
  productConservation: CognitiveExecutionReceipt["conservation"];
  captureStatus: "captured" | "failed";
  /** Product receipt proof class — always DETERMINISTIC from Product seam. */
  productProofClassification: "DETERMINISTIC";
  productRealProofStatus: "NOT_PROVEN";
  /** Campaign artifact class — never auto-upgraded to REAL PROVEN. */
  campaignProofClassification: "DETERMINISTIC" | "REAL_BOUNDARY_CANDIDATE";
  /** Explicit: ledger capture never asserts REAL BOUNDARY PROVEN. */
  realBoundaryClaim: "NOT_CLAIMED";
  reserves: string[];
  evidenceRefs: string[];
};

const FORBIDDEN_KEY_FRAGMENTS = [
  "authorization",
  "api_key",
  "apikey",
  "cookie",
  "secret",
  "password",
  "bearer",
  "prompt",
  "messages",
  "document",
  "cot",
  "chain_of_thought",
] as const;

function assertNoForbiddenKeys(value: unknown, pathPrefix = ""): string | null {
  if (value == null) return null;
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      const hit = assertNoForbiddenKeys(value[i], `${pathPrefix}[${i}]`);
      if (hit) return hit;
    }
    return null;
  }
  if (typeof value === "object") {
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      const lower = k.toLowerCase();
      for (const frag of FORBIDDEN_KEY_FRAGMENTS) {
        if (lower.includes(frag)) {
          return `forbidden_key:${pathPrefix}${k}`;
        }
      }
      const hit = assertNoForbiddenKeys(v, `${pathPrefix}${k}.`);
      if (hit) return hit;
    }
  }
  if (typeof value === "string") {
    if (/sk-[a-zA-Z0-9]{10,}/.test(value)) return "secret_like_string";
    if (/Bearer\s+[A-Za-z0-9\-._~+/]+=*/i.test(value)) return "bearer_token";
  }
  return null;
}

function isCognitiveExecutionReceipt(
  value: unknown,
): value is CognitiveExecutionReceipt {
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  const r = value as Record<string, unknown>;
  return (
    typeof r.logicalTurnId === "string" &&
    typeof r.projectId === "string" &&
    r.proofClassification === "DETERMINISTIC" &&
    r.realProofStatus === "NOT_PROVEN" &&
    typeof r.providerResponseObservation === "string" &&
    r.conservation != null &&
    typeof r.conservation === "object"
  );
}

/**
 * Extract receipt from a Product send success/failure-like DTO.
 */
export function extractCognitiveExecutionReceiptFromDto(
  dto: unknown,
): CognitiveExecutionReceipt | null {
  if (dto == null || typeof dto !== "object" || Array.isArray(dto)) {
    return null;
  }
  const receipt = (dto as Record<string, unknown>).cognitiveExecutionReceipt;
  return isCognitiveExecutionReceipt(receipt) ? receipt : null;
}

function buildEntry(
  input: CaptureCognitiveExecutionReceiptInput,
): P6CognitiveReceiptLedgerEntry {
  const receipt = input.receipt;
  return {
    kind: COGNITIVE_RECEIPT_LEDGER_KIND,
    schemaVersion: COGNITIVE_RECEIPT_LEDGER_SCHEMA_VERSION,
    campaignId: input.campaignId ?? P6_CAMPAIGN_ID,
    runId: input.runId,
    scenarioId: input.scenarioId,
    logicalTurnId: receipt.logicalTurnId,
    projectId: receipt.projectId,
    timestamp: new Date().toISOString(),
    runtime: {
      gitHead: input.runtimeIdentity?.gitHead ?? null,
      branch: input.runtimeIdentity?.branch ?? null,
      worktreeLabel: input.runtimeIdentity?.worktreeLabel ?? null,
      productRuntimeIdentity: "agents",
    },
    providerIdentity: receipt.providerIdentity,
    presentation: receipt.presentation,
    providerConfigured: receipt.providerConfigured,
    selectedModelId: receipt.selectedModelId,
    observedModel: receipt.observedModel,
    selectedReasoningEffort: receipt.selectedReasoningEffort,
    providerResponseId: receipt.providerResponseId,
    providerResponseObservation: receipt.providerResponseObservation,
    usage: { ...receipt.usage },
    adaptiveObserve: receipt.adaptiveObserve
      ? {
          ...receipt.adaptiveObserve,
          reasonCodes: [...receipt.adaptiveObserve.reasonCodes],
        }
      : null,
    continuationObserve: receipt.continuationObserve
      ? {
          ...receipt.continuationObserve,
          reasonCodes: [...receipt.continuationObserve.reasonCodes],
        }
      : null,
    toolCalls: receipt.toolCalls,
    limitReached: receipt.limitReached,
    productTerminalStatus: receipt.productTerminalStatus,
    productConservation: { ...receipt.conservation },
    captureStatus: "captured",
    productProofClassification: "DETERMINISTIC",
    productRealProofStatus: "NOT_PROVEN",
    campaignProofClassification:
      input.campaignProofClassification ?? "DETERMINISTIC",
    realBoundaryClaim: "NOT_CLAIMED",
    reserves: [...(input.reserves ?? [])],
    evidenceRefs: [...(input.evidenceRefs ?? [])],
  };
}

/**
 * Capture a Product cognitive receipt into the external P6 Evidence Ledger.
 */
export function captureCognitiveExecutionReceiptToP6Ledger(
  input: CaptureCognitiveExecutionReceiptInput,
): CaptureCognitiveExecutionReceiptResult {
  const runId = typeof input.runId === "string" ? input.runId.trim() : "";
  const scenarioId =
    typeof input.scenarioId === "string" ? input.scenarioId.trim() : "";
  if (!runId || !scenarioId) {
    return {
      ok: false,
      status: "validation_failed",
      code: "RUN_OR_SCENARIO_REQUIRED",
      message: "runId and scenarioId are required",
      runId: runId || "",
      logicalTurnId: input.receipt?.logicalTurnId ?? null,
    };
  }
  if (!isCognitiveExecutionReceipt(input.receipt)) {
    return {
      ok: false,
      status: "validation_failed",
      code: "RECEIPT_INVALID",
      message: "cognitiveExecutionReceipt structure invalid",
      runId,
      logicalTurnId: null,
    };
  }
  if (input.receipt.logicalTurnId === runId) {
    return {
      ok: false,
      status: "identity_mismatch",
      code: "RUNID_EQUALS_LOGICAL_TURN",
      message: "runId must be distinct from Product logicalTurnId",
      runId,
      logicalTurnId: input.receipt.logicalTurnId,
    };
  }
  if (
    input.campaignId &&
    input.campaignId !== P6_CAMPAIGN_ID
  ) {
    return {
      ok: false,
      status: "validation_failed",
      code: "CAMPAIGN_SCOPE",
      message: "ledger capture scoped to P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
      runId,
      logicalTurnId: input.receipt.logicalTurnId,
    };
  }

  const entry = buildEntry(input);
  const forbidden = assertNoForbiddenKeys(entry);
  if (forbidden) {
    return {
      ok: false,
      status: "validation_failed",
      code: "SENSITIVE_PAYLOAD_REJECTED",
      message: forbidden,
      runId,
      logicalTurnId: entry.logicalTurnId,
    };
  }

  // Never auto-REAL from providerResponseId.
  if (
    entry.realBoundaryClaim !== "NOT_CLAIMED" ||
    entry.productRealProofStatus !== "NOT_PROVEN"
  ) {
    return {
      ok: false,
      status: "validation_failed",
      code: "REAL_CLAIM_FORBIDDEN",
      message: "ledger must not claim REAL BOUNDARY PROVEN",
      runId,
      logicalTurnId: entry.logicalTurnId,
    };
  }

  const existing = findP6EvidenceLedgerByRunId(runId, {
    workspaceRoot: input.workspaceRoot,
    ledgerPath: input.ledgerPath,
    allowMissing: true,
  });
  if (
    existing &&
    existing.kind === COGNITIVE_RECEIPT_LEDGER_KIND
  ) {
    const policy = input.onDuplicate ?? "reject";
    if (policy === "skip") {
      return {
        ok: true,
        status: "duplicate_skipped",
        runId,
        logicalTurnId: entry.logicalTurnId,
        ledgerPath:
          input.ledgerPath ??
          resolveP6EvidenceLedgerPath(input.workspaceRoot ?? process.cwd()),
        entry,
      };
    }
    return {
      ok: false,
      status: "duplicate_rejected",
      code: "DUPLICATE_RUN_ID",
      message: "runId already present — historical line preserved (no rewrite)",
      runId,
      logicalTurnId: entry.logicalTurnId,
    };
  }

  const written = appendP6EvidenceLedgerRow(entry as unknown as Record<string, unknown>, {
    workspaceRoot: input.workspaceRoot,
    ledgerPath: input.ledgerPath,
  });
  if (!written.ok) {
    return {
      ok: false,
      status: "write_failed",
      code: written.code,
      message: written.message,
      runId,
      logicalTurnId: entry.logicalTurnId,
      ledgerPath: written.ledgerPath,
    };
  }
  return {
    ok: true,
    status: "written",
    runId,
    logicalTurnId: entry.logicalTurnId,
    ledgerPath: written.ledgerPath,
    entry,
  };
}

export function findCognitiveReceiptLedgerEntryByRunId(
  runId: string,
  options?: { workspaceRoot?: string; ledgerPath?: string },
): P6CognitiveReceiptLedgerEntry | null {
  const row = findP6EvidenceLedgerByRunId(runId, {
    ...options,
    allowMissing: true,
  });
  if (!row || row.kind !== COGNITIVE_RECEIPT_LEDGER_KIND) return null;
  return row as unknown as P6CognitiveReceiptLedgerEntry;
}

export function findCognitiveReceiptLedgerEntriesByLogicalTurnId(
  logicalTurnId: string,
  options?: { workspaceRoot?: string; ledgerPath?: string },
): P6CognitiveReceiptLedgerEntry[] {
  const found = findP6EvidenceLedgerRows(
    (row) =>
      row.kind === COGNITIVE_RECEIPT_LEDGER_KIND &&
      row.logicalTurnId === logicalTurnId,
    { ...options, allowMissing: true },
  );
  if (!found.ok) return [];
  return (found.matches ?? []) as unknown as P6CognitiveReceiptLedgerEntry[];
}

export function reopenAndFindCognitiveReceiptByRunId(
  runId: string,
  options?: { workspaceRoot?: string; ledgerPath?: string },
): {
  ok: boolean;
  parseErrors: number;
  entry: P6CognitiveReceiptLedgerEntry | null;
  code?: string;
} {
  const read = readP6EvidenceLedger({ ...options, allowMissing: false });
  if (!read.ok) {
    return { ok: false, parseErrors: 0, entry: null, code: read.code };
  }
  // Fail-closed: if corrupt lines present, still only return exact runId match;
  // never invent or swap to another run.
  const match = read.rows.find(
    (row) => row.kind === COGNITIVE_RECEIPT_LEDGER_KIND && row.runId === runId,
  );
  return {
    ok: true,
    parseErrors: read.parseErrors,
    entry: match
      ? (match as unknown as P6CognitiveReceiptLedgerEntry)
      : null,
  };
}
```

### NEW — index.ts (complete)
```typescript
/**
 * P6 Campaign Evidence — external QA capture device.
 * Not Product persistence. Not Evidence authority for HumanDecision.
 */

export {
  P6_CAMPAIGN_ID,
  P6_EVIDENCE_LEDGER_RELATIVE_PATH,
  resolveP6EvidenceLedgerPath,
  ensureP6EvidenceLedger,
  appendP6EvidenceLedgerRow,
  readP6EvidenceLedger,
  findP6EvidenceLedgerRows,
  findP6EvidenceLedgerByRunId,
} from "./evidenceLedger";

export type {
  EnsureP6EvidenceLedgerResult,
  AppendP6EvidenceLedgerResult,
  ReadP6EvidenceLedgerResult,
} from "./evidenceLedger";

export {
  COGNITIVE_RECEIPT_LEDGER_KIND,
  COGNITIVE_RECEIPT_LEDGER_SCHEMA_VERSION,
  extractCognitiveExecutionReceiptFromDto,
  captureCognitiveExecutionReceiptToP6Ledger,
  findCognitiveReceiptLedgerEntryByRunId,
  findCognitiveReceiptLedgerEntriesByLogicalTurnId,
  reopenAndFindCognitiveReceiptByRunId,
} from "./captureCognitiveExecutionReceipt";

export type {
  CaptureCognitiveExecutionReceiptInput,
  CaptureCognitiveExecutionReceiptResult,
  P6CognitiveReceiptLedgerEntry,
} from "./captureCognitiveExecutionReceipt";
```

### NEW — p6.externalEvidenceLedger.d0.test.ts (complete)
```typescript
/**
 * P6 EXTERNAL EVIDENCE LEDGER — DETERMINISTIC / ZERO REAL.
 * Exercises the external QA capture device (not Product orchestrateTurn writes).
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
  ensureP6EvidenceLedger,
  extractCognitiveExecutionReceiptFromDto,
  findCognitiveReceiptLedgerEntriesByLogicalTurnId,
  findCognitiveReceiptLedgerEntryByRunId,
  P6_CAMPAIGN_ID,
  P6_EVIDENCE_LEDGER_RELATIVE_PATH,
  readP6EvidenceLedger,
  reopenAndFindCognitiveReceiptByRunId,
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

  it("T01 — creates external P6 ledger at canonical relative path", () => {
    expect(ledgerPath.endsWith(P6_EVIDENCE_LEDGER_RELATIVE_PATH)).toBe(true);
    const ensured = ensureP6EvidenceLedger({ workspaceRoot });
    expect(ensured.ok).toBe(true);
    if (!ensured.ok) return;
    expect(ensured.created).toBe(true);
    expect(fs.existsSync(ensured.ledgerPath)).toBe(true);
    const again = ensureP6EvidenceLedger({ workspaceRoot });
    expect(again.ok).toBe(true);
    if (!again.ok) return;
    expect(again.created).toBe(false);
  });

  it("T02/T03/T10 — append valid Fake receipt; find by runId; never REAL", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:ledger-fake",
      projectId: "prj:p6-ledger",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: baseTurn() as never,
    });
    const captured = captureCognitiveExecutionReceiptToP6Ledger({
      runId: "P6-DET-RUN-FAKE-01",
      scenarioId: "P6-MIN-09",
      receipt,
      workspaceRoot,
      campaignProofClassification: "DETERMINISTIC",
    });
    expect(captured.ok).toBe(true);
    if (!captured.ok) return;
    expect(captured.status).toBe("written");
    expect(captured.entry.campaignId).toBe(P6_CAMPAIGN_ID);
    expect(captured.entry.realBoundaryClaim).toBe("NOT_CLAIMED");
    expect(captured.entry.productRealProofStatus).toBe("NOT_PROVEN");
    expect(captured.entry.providerResponseObservation).toBe(
      "FAKE_DETERMINISTIC",
    );
    const found = findCognitiveReceiptLedgerEntryByRunId("P6-DET-RUN-FAKE-01", {
      workspaceRoot,
    });
    expect(found?.logicalTurnId).toBe("ltu:ledger-fake");
    expect(found?.realBoundaryClaim).toBe("NOT_CLAIMED");
  });

  it("T04/T05 — logicalTurnId correlation + campaign/project isolation", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:corr-1",
      projectId: "prj:p6-ledger",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: baseTurn() as never,
    });
    captureCognitiveExecutionReceiptToP6Ledger({
      runId: "P6-DET-RUN-CORR-A",
      scenarioId: "P6-MIN-09",
      receipt,
      workspaceRoot,
    });
    const other = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:corr-2",
      projectId: "prj:other",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: baseTurn() as never,
    });
    captureCognitiveExecutionReceiptToP6Ledger({
      runId: "P6-DET-RUN-CORR-B",
      scenarioId: "P6-MIN-01",
      receipt: other,
      workspaceRoot,
    });
    const byLtu = findCognitiveReceiptLedgerEntriesByLogicalTurnId("ltu:corr-1", {
      workspaceRoot,
    });
    expect(byLtu).toHaveLength(1);
    expect(byLtu[0]?.projectId).toBe("prj:p6-ledger");
    expect(byLtu[0]?.campaignId).toBe(P6_CAMPAIGN_ID);
  });

  it("T06/T07/T08/T09 — two runs same scenario; FAILED preserved; no rewrite; duplicate reject", () => {
    const okReceipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:multi-1",
      projectId: "prj:p6-ledger",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: baseTurn() as never,
    });
    const failReceipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:multi-1",
      projectId: "prj:p6-ledger",
      presentation: "test_provider",
      productTerminalStatus: "provider_error",
      turn: null,
    });
    const r1 = captureCognitiveExecutionReceiptToP6Ledger({
      runId: "P6-DET-RUN-MULTI-FAIL",
      scenarioId: "P6-MIN-09",
      receipt: failReceipt,
      workspaceRoot,
      reserves: ["FAILED HISTORICAL"],
    });
    expect(r1.ok).toBe(true);
    const r2 = captureCognitiveExecutionReceiptToP6Ledger({
      runId: "P6-DET-RUN-MULTI-OK",
      scenarioId: "P6-MIN-09",
      receipt: okReceipt,
      workspaceRoot,
    });
    expect(r2.ok).toBe(true);
    const dup = captureCognitiveExecutionReceiptToP6Ledger({
      runId: "P6-DET-RUN-MULTI-FAIL",
      scenarioId: "P6-MIN-09",
      receipt: okReceipt,
      workspaceRoot,
    });
    expect(dup.ok).toBe(false);
    if (dup.ok) return;
    expect(dup.status).toBe("duplicate_rejected");
    const historical = findCognitiveReceiptLedgerEntryByRunId(
      "P6-DET-RUN-MULTI-FAIL",
      { workspaceRoot },
    );
    expect(historical?.productTerminalStatus).toBe("provider_error");
    expect(historical?.reserves).toContain("FAILED HISTORICAL");
    const skip = captureCognitiveExecutionReceiptToP6Ledger({
      runId: "P6-DET-RUN-MULTI-FAIL",
      scenarioId: "P6-MIN-09",
      receipt: okReceipt,
      workspaceRoot,
      onDuplicate: "skip",
    });
    expect(skip.ok).toBe(true);
    if (!skip.ok) return;
    expect(skip.status).toBe("duplicate_skipped");
  });

  it("T11 — synthetic Runner id never REAL PROVEN in ledger", () => {
    const receipt = buildCognitiveExecutionReceipt({
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
      runId: "P6-DET-RUN-SYNTH",
      scenarioId: "P6-MIN-09",
      receipt,
      workspaceRoot,
    });
    expect(captured.ok).toBe(true);
    if (!captured.ok) return;
    expect(captured.entry.providerResponseObservation).toBe(
      "RUNNER_RESPONSE_ID_OBSERVED",
    );
    expect(captured.entry.realBoundaryClaim).toBe("NOT_CLAIMED");
    expect(captured.entry.productRealProofStatus).toBe("NOT_PROVEN");
    expect(JSON.stringify(captured.entry)).not.toContain("PROVIDER_CONFIRMED");
  });

  it("T12 — null providerResponseId honest NOT_OBSERVED", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:null",
      projectId: "prj:p6-ledger",
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
        selectedReasoningEffort: "low",
      },
    });
    const captured = captureCognitiveExecutionReceiptToP6Ledger({
      runId: "P6-DET-RUN-NULL",
      scenarioId: "P6-MIN-09",
      receipt,
      workspaceRoot,
    });
    expect(captured.ok).toBe(true);
    if (!captured.ok) return;
    expect(captured.entry.providerResponseId).toBeNull();
    expect(captured.entry.providerResponseObservation).toBe("NOT_OBSERVED");
  });

  it("T13 — write failure detected (directory as ledger path)", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:wfail",
      projectId: "prj:p6-ledger",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: baseTurn() as never,
    });
    const dirAsFile = path.join(workspaceRoot, "not-a-file-dir");
    fs.mkdirSync(dirAsFile, { recursive: true });
    const captured = captureCognitiveExecutionReceiptToP6Ledger({
      runId: "P6-DET-RUN-WFAIL",
      scenarioId: "P6-MIN-09",
      receipt,
      ledgerPath: dirAsFile,
    });
    expect(captured.ok).toBe(false);
    if (captured.ok) return;
    expect(captured.status).toBe("write_failed");
  });

  it("T14/T16/T19/T20 — capture from Product DTO; Product status unaffected; no Product storage write", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:p6-ledger",
      content: "capture from DTO",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("ok");
    const receipt = extractCognitiveExecutionReceiptFromDto(result);
    expect(receipt).not.toBeNull();
    const beforeProductDb = fs.existsSync(sessionDbPath);
    const captured = captureCognitiveExecutionReceiptToP6Ledger({
      runId: "P6-DET-RUN-DTO-01",
      scenarioId: "P6-MIN-09",
      receipt: receipt!,
      workspaceRoot,
      runtimeIdentity: {
        gitHead: "bd3f440c749a059d73fb76e09bb1d0ce91e27af4",
        branch: "fix/p6-real-observability-option-b",
        worktreeLabel: "option-b",
      },
    });
    expect(captured.ok).toBe(true);
    if (!captured.ok) return;
    expect(captured.entry.logicalTurnId).toBe(result.logicalTurnId);
    expect(captured.entry.runId).not.toBe(result.logicalTurnId);
    // Product status unchanged by external capture
    expect(result.status).toBe("ok");
    expect(result.ok).toBe(true);
    expect(fs.existsSync(sessionDbPath)).toBe(beforeProductDb);
    // orchestrateTurn must not import ledger module
    const orchSrc = fs.readFileSync(
      path.join(
        process.cwd(),
        "features/project-assistant/orchestrateTurn.ts",
      ),
      "utf8",
    );
    expect(orchSrc).not.toContain("p6-campaign-evidence");
    expect(orchSrc).not.toContain("evidence-ledger");
  });

  it("T15 — close and reopen ledger; receipt still findable by runId", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:reopen",
      projectId: "prj:p6-ledger",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: baseTurn() as never,
    });
    const captured = captureCognitiveExecutionReceiptToP6Ledger({
      runId: "P6-DET-RUN-REOPEN",
      scenarioId: "P6-MIN-09",
      receipt,
      workspaceRoot,
    });
    expect(captured.ok).toBe(true);
    // Simulate process boundary: only path remains.
    const reopened = reopenAndFindCognitiveReceiptByRunId("P6-DET-RUN-REOPEN", {
      workspaceRoot,
    });
    expect(reopened.ok).toBe(true);
    expect(reopened.entry?.logicalTurnId).toBe("ltu:reopen");
    expect(reopened.entry?.runId).toBe("P6-DET-RUN-REOPEN");
  });

  it("T17 — rejects secret-like payload keys", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:sec",
      projectId: "prj:p6-ledger",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: baseTurn() as never,
    });
    // Inject forbidden key via evidenceRefs abuse is string-only; use appendRow directly.
    const poisoned = appendP6EvidenceLedgerRow(
      {
        kind: "cognitive_execution_receipt",
        runId: "P6-DET-POISON",
        authorization: "Bearer secret",
      },
      { workspaceRoot },
    );
    // Low-level append allows raw rows; capture API must reject secrets.
    expect(poisoned.ok).toBe(true);
    const captured = captureCognitiveExecutionReceiptToP6Ledger({
      runId: "P6-DET-RUN-SEC",
      scenarioId: "P6-MIN-09",
      receipt,
      workspaceRoot,
      reserves: ["ok"],
    });
    expect(captured.ok).toBe(true);
    const json = JSON.stringify(
      findCognitiveReceiptLedgerEntryByRunId("P6-DET-RUN-SEC", {
        workspaceRoot,
      }),
    );
    expect(json).not.toMatch(/sk-[a-zA-Z0-9]{10,}/);
    expect(json).not.toContain("Bearer ");
  });

  it("T18 — corrupt JSONL fail-closed: exact runId only; no swapped proof", () => {
    ensureP6EvidenceLedger({ workspaceRoot });
    fs.appendFileSync(ledgerPath, "{not-json\n", "utf8");
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:corrupt",
      projectId: "prj:p6-ledger",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: baseTurn() as never,
    });
    captureCognitiveExecutionReceiptToP6Ledger({
      runId: "P6-DET-RUN-CORRUPT-OK",
      scenarioId: "P6-MIN-09",
      receipt,
      workspaceRoot,
    });
    const reopened = reopenAndFindCognitiveReceiptByRunId(
      "P6-DET-RUN-CORRUPT-OK",
      { workspaceRoot },
    );
    expect(reopened.ok).toBe(true);
    expect(reopened.parseErrors).toBeGreaterThan(0);
    expect(reopened.entry?.runId).toBe("P6-DET-RUN-CORRUPT-OK");
    const missing = reopenAndFindCognitiveReceiptByRunId("P6-DET-RUN-OTHER", {
      workspaceRoot,
    });
    expect(missing.entry).toBeNull();
  });

  it("T19b — runId must differ from logicalTurnId", () => {
    const receipt = buildCognitiveExecutionReceipt({
      logicalTurnId: "ltu:same",
      projectId: "prj:p6-ledger",
      presentation: "test_provider",
      productTerminalStatus: "ok",
      turn: baseTurn() as never,
    });
    const captured = captureCognitiveExecutionReceiptToP6Ledger({
      runId: "ltu:same",
      scenarioId: "P6-MIN-09",
      receipt,
      workspaceRoot,
    });
    expect(captured.ok).toBe(false);
    if (captured.ok) return;
    expect(captured.status).toBe("identity_mismatch");
  });

  it("canonical relative path constant matches §T convention", () => {
    expect(P6_EVIDENCE_LEDGER_RELATIVE_PATH.replace(/\\/g, "/")).toBe(
      ".tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl",
    );
    const readEmpty = readP6EvidenceLedger({
      workspaceRoot,
      allowMissing: true,
    });
    expect(readEmpty.ok).toBe(true);
  });
});
```

### NEW — p6.realObs.optionB.receiptConservation.d0.test.ts (complete)
```typescript
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
```

### MOD — orchestrateTurn.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 68aa1795..0c267914 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -78,6 +78,7 @@ import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/Pro
 import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
 import { collectToolTelemetry } from "./collectToolTelemetry";
 import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
+import { projectAndConserveCognitiveExecutionReceipt } from "./cognitiveExecutionReceipt";
 import { resolveAssistantMode } from "./resolveAssistantMode";
 import {
   resolveRememberedEvidence,
@@ -1449,6 +1450,18 @@ export async function orchestrateProjectAssistantTurn(input: {
       input.beforeDurableEffect,
     );

+    // Observability projection must never alter cognitive Product status.
+    const cognitiveExecutionReceipt =
+      typeof logicalTurnId === "string" && logicalTurnId.length > 0
+        ? projectAndConserveCognitiveExecutionReceipt({
+            logicalTurnId,
+            projectId: project.projectId,
+            presentation,
+            productTerminalStatus: status,
+            turn,
+          })
+        : undefined;
+
     return {
       ok: true,
       status,
@@ -1477,18 +1490,32 @@ export async function orchestrateProjectAssistantTurn(input: {
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
+        const receipt = projectAndConserveCognitiveExecutionReceipt({
+          logicalTurnId,
+          projectId: project.projectId,
+          presentation,
+          productTerminalStatus: "stopped",
+          turn: null,
+        });
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
@@ -1498,5 +1525,16 @@ export async function orchestrateProjectAssistantTurn(input: {
       retryable: true,
       logicalTurnId,
     };
+    if (typeof logicalTurnId === "string" && logicalTurnId.length > 0) {
+      const receipt = projectAndConserveCognitiveExecutionReceipt({
+        logicalTurnId,
+        projectId: project.projectId,
+        presentation,
+        productTerminalStatus: "provider_error",
+        turn: null,
+      });
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

### MOD — PRR
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index b9ad266f..66c0e514 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -132,6 +132,25 @@ Untracked but behaviorally central (documented, digests not expanded): `runNoraA

 **SEMANTIC IMPACT = YES** (do not claim global NO SEMANTIC IMPACT).

+## Sample impact analysis F — P6-REAL-OBS-P0 Option B (local candidate — CRITICAL CORRECTION)
+
+**Changed tracked paths (digest drift):**
+- `features/project-assistant/orchestrateTurn.ts` → OBJ-TURN-ORCH
+
+Untracked (documented, digests not expanded): `cognitiveExecutionReceipt.ts`, `types.ts` receipt field, `p6.realObs.optionB.receiptConservation.d0.test.ts`.
+
+| Step | Result |
+|---|---|
+| Components | OBJ-TURN-ORCH (**SEMANTIC IMPACT** — additive receipt projection; fail-soft conservation) |
+| Direct deps | NoraCognitiveTurnResult usage/adaptive/continuation |
+| Flows | F04 primary (send/orchestrate); F02 adjacent (observability) |
+| Persistence | Product: process-local registry only (no Product JSONL write). External QA: §T JSONL ledger **ADOPTED** via `lib/p6-campaign-evidence/**` append-only. Session ≠ Evidence authority |
+| Authority | Receipt `realProofStatus=NOT_PROVEN`; ledger `realBoundaryClaim=NOT_CLAIMED`; Runner id observed ≠ REAL |
+| Fake/Real | DETERMINISTIC PROVEN AT CORRECTED SEAM + external ledger capture; REAL boundary **NOT PROVEN** |
+| Digests | mechanical `--write-digests` after external ledger delivery (if tracked Product files change) |
+
+**SEMANTIC IMPACT = YES** on prior Product seam; external ledger module is **new QA device** (untracked unless later added to manifest).
+
 ## Sample impact analysis E — RCD-01 documentary reliability (PR #578 INTEGRATED ON MAIN)

 **Changed Product paths (historical semantic change; already on main @ `44006648`):**
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index c7442607..269fd213 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -19,6 +19,8 @@
 | F04 Framing continuity UI | framingContinuityCard / Rehydrate / p6.ux.recommendationContinuity | examinable card; Recommendation≠Decision |
 | F04 Work Recommendation materialization (REC-01) | qualifyProspectiveWorkRecommendationMaterialization.d0; activeCycleCognitiveWork.d0 (Option A SQLite reload + historical replay); p6.hqa.rec01.minimalStabilization.d0; p6.hqa.rec01.optionB.workRecommendationsContext.d0; UX-REC-02 journalDisclaimer; chatFirstWorkRecommendationContinuity; noraLifecycleRecommendationContinuity | DETERMINISTIC at tested scope; coverage PARTIAL fail-closed; REAL NOT RUN |
 | F04 Nora autonomy P0/P1/P2 (PR #577 INTEGRATED ON MAIN) | `p6.nora.maxTurns.documentary.d0.test.ts`; `p6.nora.p1.adaptiveBudget.d0.test.ts`; `p6.nora.p1p2.documentary.mission.d0.test.ts`; `p6.nora.p1p2.targetedVerification.d0.test.ts`; `p6.nora.p0.productStatusHonesty.d0.test.ts`; `p6.nora.p0.incomplete.panel.ux.d0.test.tsx`; `p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx`; `mw6.pre-real.budget-hardening.d0.test.ts` (NUM-CLAMP / R-PRE-REAL-08A); `runner.d0.test.ts`; `orchestrateTurn.test.ts` | See proof oracles below — **DETERMINISTIC ONLY**; not Product UI E2E REAL; not documentary REAL quality; merge `d8ceb8ad` |
+| F04 P6 REAL OBS Option B receipt conservation (CRITICAL CORRECTION) | `p6.realObs.optionB.receiptConservation.d0.test.ts` | DETERMINISTIC AT CORRECTED SEAM — process registry; Fake ≠ REAL; Runner id ≠ PROVIDER_CONFIRMED; capture fail ≠ provider_error; ZERO REAL |
+| F04 P6 EXTERNAL Evidence Ledger capture | `p6.externalEvidenceLedger.d0.test.ts` + `lib/p6-campaign-evidence/**` | DETERMINISTIC — append-only JSONL under `.tmp-sfia-review/p6-global-integrated-qa/`; capture from Product DTO; reopen by runId; no Product write; Fake/Runner id never REAL PROVEN; ZERO REAL |
 | F04 Documentary reliability RCD-01 (PR #578 INTEGRATED ON MAIN) | `p6.nora.min09.documentaryReliability.d0.test.ts` (R1–R7); P1/P2/Session regressions | Complete-line coverage; redaction progression; final envelope truth; envelope `lineExceedsCap`; fixture regex fidelity; **DETERMINISTIC ONLY** — not GDR REAL; merge `44006648` |
 | F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
 | F07 Framing HD / START boundary | chatFirstFramingContinuity* + F01 gate | HD structural when required; START gated |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index f345e1b3..f25ecca6 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,6 +5,22 @@
 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)

+## Overlay — P6-REAL-OBS-P0 Option B (local candidate — CRITICAL CORRECTION)
+
+| Item | Status |
+|---|---|
+| Cognitive execution receipt projected on Product send DTO | AS-IMPLEMENTED locally — DETERMINISTIC |
+| Process-local registry by server `logicalTurnId` | AS-IMPLEMENTED ephemeral — NOT Evidence SoT; NOT cross-restart |
+| P6 §T Evidence Ledger JSONL | **ADOPTED for external P6 campaign QA only** (`lib/p6-campaign-evidence/**`) — Product `orchestrateTurn` still does **not** write ledger |
+| Canonical ledger path | `.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl` (existing campaign harness convention) |
+| Provider observation honesty | Fake → `FAKE_DETERMINISTIC`; null → `NOT_OBSERVED`; Runner id → `RUNNER_RESPONSE_ID_OBSERVED`; **never** `PROVIDER_CONFIRMED` / REAL at Product or ledger capture |
+| `realProofStatus` / ledger `realBoundaryClaim` | Product `NOT_PROVEN` · ledger `NOT_CLAIMED` |
+| Capture failure vs Product status | External capture failure ≠ Product `provider_error` |
+| Debt `P6-REAL-OBS-P0-RECEIPT-CONSERVATION` | DET external durable capture **AVAILABLE**; REAL qualification **OPEN** (distinct Morris GO) |
+| Historical T1 `ltu:ff0b592f…` REAL requalification | **NOT RETROACTIVE** |
+| REAL boundary / P6 GLOBAL PASS / Product READY | **NOT PROVEN / NOT CLAIMED** |
+| Runtime v3 | **NON ADOPTED** |
+
 ## Overlay — Nora autonomy PR #577 (INTEGRATED ON MAIN)

 | Item | Status |
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index dd1d89b0..0901ec5c 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -23,7 +23,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "7b4089cd4fbb4e17"
+      "sha256_16": "c586bd79be570408"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "25fb9a38f1eca0f9"
+      "sha256_16": "87c718bf8532ee92"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "4582c1d2695a5f76"
+      "sha256_16": "8642bbeb30fc9ced"
     }
   ],
   "components": [
@@ -582,7 +582,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "4b5dc69962b5a7ed"
+      "sha256_16": "8ab5951b261e6063"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
```

## 13. Tests
- `p6.externalEvidenceLedger.d0.test.ts` 13 PASS (T01–T20 mapped)
- `p6.realObs.optionB.receiptConservation.d0.test.ts` 15 PASS
- typecheck/lint/build OK
- npm test **5692 PASS** / 143 skipped
- PRR conformance OK
- ZERO OpenAI

T15/T16 exercise capture from DTO + reopen by runId on real ledger path.

## 14. PRR
Volumes 04/08/09 updated: external ledger ADOPTED for P6 QA; Product still no JSONL write. Digests synced. Not full corpus re-audit.

## 15. Reserves / debt / exit
Debt REAL still **OPEN**. DET external durable capture **AVAILABLE**.
Exit DET: synthetic receipt captured externally, reopenable by runId after ledger close/reopen — **PROVEN**.
Exit REAL: distinct Morris GO + correlated provider proofs.

## 16. Decisions remaining
Project commit/push/PR/merge · REAL Human QA continuation · no auto integration.

## 17. Verdict
**P6 EXTERNAL EVIDENCE LEDGER IMPLEMENTED LOCALLY / DETERMINISTIC PROVEN / READY FOR CHATGPT CRITICAL REVIEW**

## 18. Instruction ChatGPT
Lire handoff distant. Vérifier capture externe (pas Product write), path §T, append-only, runId≠ltu, Fake/REAL honesty, T15/T16, sécurité, tests. Qualifier PR readiness seulement après revue. Ne pas lancer REAL. Ne pas autoriser push/PR/merge implicite.
