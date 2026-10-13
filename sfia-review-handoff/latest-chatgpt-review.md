# SFIA Review Pack FULL — P6 REAL OBSERVABILITY Option B
# GIT INTEGRATION / DRAFT PR

**Horodatage (Europe/Paris):** 2026-10-13 20:24:21 CEST
**GO Morris:** OPTION B GIT INTEGRATION : COMMIT + PUSH + DRAFT PR — 2026-10-13
**Cycle:** 13 — PR readiness / intégration Git
**Profil:** CRITICAL
**CKC:** routing v2.6 + Delivery guidance (no invented CKC authority)
**Campagne:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Chantier:** P6-REAL-OBS-P0-RECEIPT-CONSERVATION
**Entry handoff:** 698916d1 / blob 7f6e69f9

---

## 1. Git Truth

### Initial
- Worktree: `/Users/morris/Projects/sfia-workspace-p6-real-observability-option-b`
- Branch: `fix/p6-real-observability-option-b`
- HEAD before commit: `bd3f440c749a059d73fb76e09bb1d0ce91e27af4` (= origin/main)
- Dirty Option B candidate present; no remote branch; no existing PR

### Final
- Branch: `fix/p6-real-observability-option-b`
- Local HEAD: `bfef30db0828b066b3f414499ef0fab0419b5cf6`
- Remote branch SHA: `bfef30db0828b066b3f414499ef0fab0419b5cf6`
- origin/main: `bd3f440c749a059d73fb76e09bb1d0ce91e27af4` (unchanged — no merge)
- Remaining local dirty: `.tmp-sfia-review/chatgpt-review.md` only (Review Pack, excluded from commit)
- Runtime :3020: untouched
- Merge: **NOT PERFORMED**

### status --short (final)
```
 M .tmp-sfia-review/chatgpt-review.md

```

---

## 2. Sources / Convergence

Build Doctrine / Roadmap / C1 / epistemology 33 / artifact 35 / Nora 08 / P6 §T / PRR / entry handoff 698916d1.

Option B entered as PR READY WITH RESERVES. Ledger = QA campaign evidence only (not Product persistence architecture). REAL OPEN. Wiring PENDING. Runtime v3 NON ADOPTED.

---

## 3. Pre-commit gates

| Gate | Result |
|---|---|
| DET targeted tests | **57 PASS** |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| PRR conformance | OK |
| npm test full (local) | **NOT EXECUTED — REAL SAFETY BOUNDARY** |
| CI workflow REAL risk | Opt-in REAL tests (`describe.skipIf`); CI does not set RUN_REAL envs |
| Secrets in staged | OK (only DET refusal fixtures for secret patterns) |
| .tmp-sfia-review staged | **NO** |

---

## 4. Manifest staged / committed (16 exact)

bfef30db fix(studio): add bounded P6 cognitive evidence capture
A	projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts
A	projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.qaCollectionSeam.d0.test.ts
A	projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.receiptCompleteness.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/p6.realObs.optionB.receiptConservation.d0.test.ts
A	projects/sfia-studio/app/features/project-assistant/cognitiveExecutionReceipt.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts
A	projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts
A	projects/sfia-studio/app/lib/p6-campaign-evidence/evidenceLedger.ts
A	projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts
A	projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts
A	projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts
M	projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json


Matched authorized manifest. No wildcards. No `.tmp-sfia-review`.

---

## 5. Commit / Push

| Item | Value |
|---|---|
| Commit SHA | `bfef30db0828b066b3f414499ef0fab0419b5cf6` |
| Message | `fix(studio): add bounded P6 cognitive evidence capture` |
| Remote branch | `origin/fix/p6-real-observability-option-b` |
| Remote SHA | `bfef30db0828b066b3f414499ef0fab0419b5cf6` |
| Force push | **NO** |

---

## 6. Draft PR

| Item | Value |
|---|---|
| Number | #580 |
| URL | https://github.com/mcleland147/sfia-workspace/pull/580 |
| Draft | True |
| State | OPEN |
| Base | main |
| Head | fix/p6-real-observability-option-b @ bfef30db0828b066b3f414499ef0fab0419b5cf6 |

### PR files (16)
- projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts (ADDED)
- projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.qaCollectionSeam.d0.test.ts (ADDED)
- projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.receiptCompleteness.d0.test.ts (ADDED)
- projects/sfia-studio/app/__tests__/project-assistant/p6.realObs.optionB.receiptConservation.d0.test.ts (ADDED)
- projects/sfia-studio/app/features/project-assistant/cognitiveExecutionReceipt.ts (ADDED)
- projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts (MODIFIED)
- projects/sfia-studio/app/features/project-assistant/types.ts (MODIFIED)
- projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts (ADDED)
- projects/sfia-studio/app/lib/p6-campaign-evidence/evidenceLedger.ts (ADDED)
- projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts (ADDED)
- projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts (ADDED)
- projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts (ADDED)
- projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md (MODIFIED)
- projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md (MODIFIED)
- projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md (MODIFIED)
- projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json (MODIFIED)

No `.tmp-sfia-review` in PR diff.

---

## 7. CI checks

```
Build and validate SFIA Studio	pass	7m18s	https://github.com/mcleland147/sfia-workspace/actions/runs/38445334561/job/115462180462
Detect SFIA Studio changes	pass	8s	https://github.com/mcleland147/sfia-workspace/actions/runs/38445334561/job/115462099559
SFIA Studio Required Gate	pass	3s	https://github.com/mcleland147/sfia-workspace/actions/runs/38445334561/job/115465643072

```

Rollup:
- Detect SFIA Studio changes: COMPLETED / SUCCESS
- Build and validate SFIA Studio: COMPLETED / SUCCESS
- SFIA Studio Required Gate: COMPLETED / SUCCESS

**SFIA Studio Required Gate: PASS**
**Build and validate SFIA Studio: PASS**
**Detect SFIA Studio changes: PASS**

---

## 8. Fake/Real

DETERMINISTIC PROVEN (local DET + CI unit path with REAL skipIf).
REAL BOUNDARY NOT PROVEN.
Operational Campaign Wiring PENDING.
Claims forbidden: MERGED · T1 REAL PASS · P6 GLOBAL PASS · PRODUCT READY · Runtime v3 ADOPTED.

---

## 9. Reserves / Debt / Gates

- Wiring harnesses historiques PENDING
- Multi-process NOT CLAIMED (MONO_WRITER)
- Debt `P6-REAL-OBS-P0-RECEIPT-CONSERVATION` — Git-integrated DET candidate; REAL OPEN
- **Next Morris gate: MERGE REVIEW / DISTINCT MERGE GO**
- Future: post-merge proof → QA wiring → REAL under distinct GO

---

## 10. Verdict

**OPTION B GIT INTEGRATION COMPLETE / DRAFT PR OPEN / CI QUALIFIED / MERGE GATE MORRIS PENDING**

---

## 11. Instruction ChatGPT

Lire ce handoff. Vérifier SHA projet `bfef30db0828b066b3f414499ef0fab0419b5cf6`, manifest 16 fichiers, Draft PR #580, base/head, CI Required Gate PASS, exclusions `.tmp`, réserves P6.
Rendre verdict **MERGE READINESS** only.
Ne pas autoriser automatiquement MERGE, REAL, promotion ou cleanup.

---

## 12. Contenu complet des créations bibliothèque (commit HEAD)

----- BEGIN FILE: projects/sfia-studio/app/features/project-assistant/cognitiveExecutionReceipt.ts -----
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
----- END FILE: projects/sfia-studio/app/features/project-assistant/cognitiveExecutionReceipt.ts -----
----- BEGIN FILE: projects/sfia-studio/app/lib/p6-campaign-evidence/evidenceLedger.ts -----
/**
 * P6 External Campaign Evidence Ledger — append-only JSONL under .tmp-sfia-review/.
 *
 * Authority: QA / campaign evidence only (Morris ADOPT GO 2026-10-13).
 * NOT Product persistence. NOT ProductSqliteSession.
 *
 * Integrity model (OBS-02):
 *   HEALTHY   — all lines parse + validate structure
 *   DEGRADED  — some lines unreadable / invalid; historical bytes untouched
 *   INVALID   — file present but no usable rows and corruption observed
 *   UNREADABLE — I/O failure
 *   MISSING   — file absent (when allowMissing=false)
 *
 * Concurrency model (GO 2026-10-13 scope closure) — **MONO-WRITER**:
 *   Historical P6 harnesses append sequentially in a single vitest process
 *   (`fs.appendFileSync`, no multi-process ledger writers observed).
 *   No Morris decision requires multi-process safety for P6 campaign capture.
 *   Contract: one active writer per ledger file at a time.
 *   Local O_EXCL lock detects accidental contention and refuses honestly.
 *   Does NOT claim multi-process durability beyond contention detection.
 *   Age-based automatic lock deletion is forbidden (active writer may still hold it).
 *   Orphan recovery: explicit `forceRemoveOrphanP6EvidenceLedgerLock` only.
 */

import fs from "node:fs";
import path from "node:path";
import {
  classifyLedgerRowForRead,
  validateLedgerRowForAppend,
} from "./ledgerRowValidation";

export const P6_CAMPAIGN_ID = "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01" as const;
export const P6_EVIDENCE_LEDGER_RELATIVE_PATH =
  ".tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl" as const;

export type P6LedgerIntegrityStatus =
  | "HEALTHY"
  | "DEGRADED"
  | "INVALID"
  | "UNREADABLE"
  | "MISSING";

export type P6EvidenceLedgerRow = Record<string, unknown>;

export type ReadP6EvidenceLedgerResult = {
  /** True only when rows can be consumed (HEALTHY or DEGRADED). */
  ok: boolean;
  /** True ONLY when integrity === HEALTHY. Never true under corruption/semantic/duplicate defects. */
  integrityPass: boolean;
  integrity: P6LedgerIntegrityStatus;
  absolutePath: string;
  rows: P6EvidenceLedgerRow[];
  parseErrors: number;
  structureErrors: number;
  /** v2 incomplete / unknown-kind semantic defects (bytes preserved). */
  semanticErrors: number;
  /** Distinct runIds that appear more than once (all matching rows preserved). */
  duplicateRunIds: string[];
  totalLines: number;
  error?: string;
};

export type AppendP6EvidenceLedgerResult =
  | {
      ok: true;
      absolutePath: string;
      bytesWritten: number;
      kind: string;
    }
  | {
      ok: false;
      code: string;
      message: string;
      absolutePath?: string;
    };

export type WithLedgerLockResult<T> =
  | { ok: true; value: T }
  | { ok: false; code: string; message: string };

/** Contended mono-writer: short retry then honest LOCK_CONTENTION. No age reclaim. */
const LOCK_RETRY_MS = 15;
const LOCK_MAX_ATTEMPTS = 40;

/** Documented usage contract — see module header. */
export const P6_LEDGER_CONCURRENCY_MODEL = "MONO_WRITER" as const;

function resolveRepoRootFromCwd(cwd = process.cwd()): string {
  let dir = path.resolve(cwd);
  for (let i = 0; i < 12; i += 1) {
    if (
      fs.existsSync(path.join(dir, "projects", "sfia-studio")) &&
      fs.existsSync(path.join(dir, ".git"))
    ) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return path.resolve(cwd, "../..");
}

export function resolveP6EvidenceLedgerAbsolutePath(
  cwd = process.cwd(),
): string {
  return path.join(resolveRepoRootFromCwd(cwd), P6_EVIDENCE_LEDGER_RELATIVE_PATH);
}

/** Resolve ledger path under an explicit workspace/repo root (DET temp dirs). */
export function resolveP6EvidenceLedgerPath(workspaceRoot: string): string {
  return path.join(workspaceRoot, P6_EVIDENCE_LEDGER_RELATIVE_PATH);
}

export function ensureP6EvidenceLedger(options: {
  absolutePath?: string;
  workspaceRoot?: string;
}): { ok: true; absolutePath: string; created: boolean } | { ok: false; message: string } {
  const absolutePath =
    options.absolutePath ??
    (options.workspaceRoot
      ? resolveP6EvidenceLedgerPath(options.workspaceRoot)
      : resolveP6EvidenceLedgerAbsolutePath());
  try {
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    if (fs.existsSync(absolutePath)) {
      return { ok: true, absolutePath, created: false };
    }
    fs.writeFileSync(absolutePath, "", { encoding: "utf8", mode: 0o600 });
    return { ok: true, absolutePath, created: true };
  } catch (err) {
    return {
      ok: false,
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

function lockPathFor(ledgerPath: string): string {
  return `${ledgerPath}.lock`;
}

function sleepSync(ms: number): void {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    /* bounded spin — lock retries are short */
  }
}

/**
 * Exclusive lock around check+append (mono-writer contention detection).
 * Lock file created with O_EXCL ('wx'). Never deletes an existing lock by age.
 * Holder always unlinks on release. Orphans require governed force-remove.
 */
export function withP6EvidenceLedgerLock<T>(
  absolutePath: string,
  fn: () => T,
): WithLedgerLockResult<T> {
  const lockPath = lockPathFor(absolutePath);
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true });

  let fd: number | null = null;

  for (let attempt = 0; attempt < LOCK_MAX_ATTEMPTS; attempt += 1) {
    try {
      fd = fs.openSync(lockPath, "wx");
      fs.writeSync(
        fd,
        JSON.stringify({
          pid: process.pid,
          acquiredAt: new Date().toISOString(),
          concurrencyModel: P6_LEDGER_CONCURRENCY_MODEL,
        }),
      );
      break;
    } catch (err) {
      const code = (err as NodeJS.ErrnoException).code;
      if (code !== "EEXIST") {
        return {
          ok: false,
          code: "LOCK_IO_ERROR",
          message: err instanceof Error ? err.message : String(err),
        };
      }
      // Existing lock: never age-delete (holder may still be active).
      sleepSync(LOCK_RETRY_MS);
    }
  }

  if (fd == null) {
    return {
      ok: false,
      code: "LOCK_CONTENTION",
      message:
        "mono-writer ledger lock contention — another writer holds the lock; refusing (no automatic reclaim)",
    };
  }

  try {
    return { ok: true, value: fn() };
  } finally {
    try {
      fs.closeSync(fd);
    } catch {
      /* ignore */
    }
    try {
      fs.unlinkSync(lockPath);
    } catch {
      /* ignore */
    }
  }
}

/**
 * Governed orphan lock recovery — explicit operator action only.
 * Does NOT prove the previous holder finished; use after confirming no active writer.
 */
export function forceRemoveOrphanP6EvidenceLedgerLock(
  absolutePath: string,
): { ok: true; removed: boolean } | { ok: false; code: string; message: string } {
  const lockPath = lockPathFor(absolutePath);
  if (!fs.existsSync(lockPath)) {
    return { ok: true, removed: false };
  }
  try {
    fs.unlinkSync(lockPath);
    return { ok: true, removed: true };
  } catch (err) {
    return {
      ok: false,
      code: "LOCK_FORCE_REMOVE_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

/**
/**
 * Read-only ledger open. Never rewrites. Never silently repairs.
 * v2 cognitive receipts are validated with the same schema as writes;
 * incomplete v2 / unknown kinds set integrityPass=false (DEGRADED).
 * Duplicate runIds (even among individually valid rows) set integrityPass=false.
 * All matching rows are preserved — never silently pick one as truth.
 * Historical campaign rows keep their historical completeness level.
 */
export function readP6EvidenceLedger(options?: {
  absolutePath?: string;
  allowMissing?: boolean;
}): ReadP6EvidenceLedgerResult {
  const absolutePath =
    options?.absolutePath ?? resolveP6EvidenceLedgerAbsolutePath();
  const allowMissing = options?.allowMissing ?? true;

  if (!fs.existsSync(absolutePath)) {
    if (allowMissing) {
      return {
        ok: true,
        integrityPass: true,
        integrity: "HEALTHY",
        absolutePath,
        rows: [],
        parseErrors: 0,
        structureErrors: 0,
        semanticErrors: 0,
        duplicateRunIds: [],
        totalLines: 0,
      };
    }
    return {
      ok: false,
      integrityPass: false,
      integrity: "MISSING",
      absolutePath,
      rows: [],
      parseErrors: 0,
      structureErrors: 0,
      semanticErrors: 0,
      duplicateRunIds: [],
      totalLines: 0,
      error: "ledger file missing",
    };
  }

  let raw: string;
  try {
    raw = fs.readFileSync(absolutePath, "utf8");
  } catch (err) {
    return {
      ok: false,
      integrityPass: false,
      integrity: "UNREADABLE",
      absolutePath,
      rows: [],
      parseErrors: 0,
      structureErrors: 0,
      semanticErrors: 0,
      duplicateRunIds: [],
      totalLines: 0,
      error: err instanceof Error ? err.message : String(err),
    };
  }

  if (raw.length === 0) {
    return {
      ok: true,
      integrityPass: true,
      integrity: "HEALTHY",
      absolutePath,
      rows: [],
      parseErrors: 0,
      structureErrors: 0,
      semanticErrors: 0,
      duplicateRunIds: [],
      totalLines: 0,
    };
  }

  const endsWithNewline = raw.endsWith("\n");
  const lines = raw.split("\n");
  if (endsWithNewline && lines.length > 0 && lines[lines.length - 1] === "") {
    lines.pop();
  }

  const rows: P6EvidenceLedgerRow[] = [];
  let parseErrors = 0;
  let structureErrors = 0;
  let semanticErrors = 0;
  let partialTrailing = false;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]!;
    if (line.trim() === "") continue;
    const isLast = i === lines.length - 1;
    try {
      const parsed = JSON.parse(line) as unknown;
      const classified = classifyLedgerRowForRead(parsed);
      if (classified.class === "invalid_structure") {
        structureErrors += 1;
        continue;
      }
      if (
        classified.class === "cognitive_receipt_incomplete" ||
        classified.class === "unknown_kind"
      ) {
        semanticErrors += 1;
        // Keep for diagnostic search; never claim HEALTHY.
        rows.push(parsed as P6EvidenceLedgerRow);
        continue;
      }
      rows.push(parsed as P6EvidenceLedgerRow);
    } catch {
      parseErrors += 1;
      if (isLast && !endsWithNewline) {
        partialTrailing = true;
      }
    }
  }

  // READ-UNIQUENESS: duplicate runIds among preserved rows → not HEALTHY.
  const runIdCounts = new Map<string, number>();
  for (const row of rows) {
    if (typeof row.runId !== "string" || row.runId.length === 0) continue;
    runIdCounts.set(row.runId, (runIdCounts.get(row.runId) ?? 0) + 1);
  }
  const duplicateRunIds = [...runIdCounts.entries()]
    .filter(([, count]) => count > 1)
    .map(([runId]) => runId)
    .sort();

  const defects =
    parseErrors > 0 ||
    structureErrors > 0 ||
    semanticErrors > 0 ||
    partialTrailing ||
    duplicateRunIds.length > 0;

  if (!defects) {
    return {
      ok: true,
      integrityPass: true,
      integrity: "HEALTHY",
      absolutePath,
      rows,
      parseErrors: 0,
      structureErrors: 0,
      semanticErrors: 0,
      duplicateRunIds: [],
      totalLines: lines.length,
    };
  }

  if (rows.length > 0) {
    const reasons: string[] = [];
    if (parseErrors > 0 || structureErrors > 0 || partialTrailing) {
      reasons.push("parse/structure defects");
    }
    if (semanticErrors > 0) reasons.push("semantic defects");
    if (duplicateRunIds.length > 0) {
      reasons.push(
        `duplicate runId(s): ${duplicateRunIds.join(",")} (${duplicateRunIds.length})`,
      );
    }
    return {
      ok: true,
      integrityPass: false,
      integrity: "DEGRADED",
      absolutePath,
      rows,
      parseErrors,
      structureErrors,
      semanticErrors,
      duplicateRunIds,
      totalLines: lines.length,
      error: `${reasons.join("; ")}; historical bytes preserved; integrityPass=false`,
    };
  }

  return {
    ok: false,
    integrityPass: false,
    integrity: "INVALID",
    absolutePath,
    rows: [],
    parseErrors,
    structureErrors,
    semanticErrors,
    duplicateRunIds,
    totalLines: lines.length,
    error: "ledger unreadable as structured evidence (no valid rows)",
  };
}

/**
 * OBS-01 secured append. Validates at write boundary. No unsafe bypass exported.
 * Refuses append when ledger integrity is DEGRADED/INVALID/UNREADABLE
 * (capture must fail honestly without rewriting history).
 */
export function appendP6EvidenceLedgerRow(
  row: unknown,
  options?: { absolutePath?: string },
): AppendP6EvidenceLedgerResult {
  const absolutePath =
    options?.absolutePath ?? resolveP6EvidenceLedgerAbsolutePath();

  const validation = validateLedgerRowForAppend(row);
  if (!validation.ok) {
    return {
      ok: false,
      code: validation.code,
      message: validation.message,
      absolutePath,
    };
  }

  const locked = withP6EvidenceLedgerLock(absolutePath, () => {
    const prior = readP6EvidenceLedger({
      absolutePath,
      allowMissing: true,
    });
    if (
      prior.integrity === "DEGRADED" ||
      prior.integrity === "INVALID" ||
      prior.integrity === "UNREADABLE"
    ) {
      return {
        ok: false as const,
        code: "LEDGER_INTEGRITY_BLOCKS_APPEND",
        message: `refuse append while integrity=${prior.integrity}`,
        absolutePath,
      };
    }

    const runId = (row as P6EvidenceLedgerRow).runId;
    if (typeof runId === "string" && runId.length > 0) {
      const existing = prior.rows.find((r) => r.runId === runId);
      if (existing) {
        return {
          ok: false as const,
          code: "DUPLICATE_RUN_ID",
          message: `runId already present: ${runId}`,
          absolutePath,
        };
      }
    }

    const line = `${JSON.stringify(row)}\n`;
    try {
      fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
      fs.appendFileSync(absolutePath, line, { encoding: "utf8", mode: 0o600 });
      return {
        ok: true as const,
        absolutePath,
        bytesWritten: Buffer.byteLength(line, "utf8"),
        kind: validation.kind,
      };
    } catch (err) {
      return {
        ok: false as const,
        code: "APPEND_IO_ERROR",
        message: err instanceof Error ? err.message : String(err),
        absolutePath,
      };
    }
  });

  if (!locked.ok) {
    return {
      ok: false,
      code: locked.code,
      message: locked.message,
      absolutePath,
    };
  }
  return locked.value;
}

export function findP6EvidenceLedgerRowsByRunId(
  runId: string,
  options?: { absolutePath?: string },
): {
  ok: boolean;
  integrityPass: boolean;
  integrity: P6LedgerIntegrityStatus;
  matches: P6EvidenceLedgerRow[];
  absolutePath: string;
  error?: string;
} {
  const read = readP6EvidenceLedger({
    absolutePath: options?.absolutePath,
    allowMissing: true,
  });
  const matches = read.rows.filter((r) => r.runId === runId);
  return {
    ok: read.ok,
    integrityPass: read.integrityPass,
    integrity: read.integrity,
    matches,
    absolutePath: read.absolutePath,
    error: read.error,
  };
}
----- END FILE: projects/sfia-studio/app/lib/p6-campaign-evidence/evidenceLedger.ts -----
----- BEGIN FILE: projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts -----
/**
 * Write-boundary validation for P6 Evidence Ledger rows.
 * Every public append path must pass through this gate.
 */

/** Keep aligned with evidenceLedger.P6_CAMPAIGN_ID (no circular import). */
const P6_CAMPAIGN_ID = "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01";

export const MAX_LEDGER_ROW_JSON_BYTES = 64_000;
export const P6_RECEIPT_LEDGER_SCHEMA_VERSION_REQUIRED = 2;

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
  "documentbody",
  "chain_of_thought",
  "rawprovider",
] as const;

export type LedgerRowValidationResult =
  | { ok: true; kind: string }
  | { ok: false; code: string; message: string };

function assertNoForbiddenContent(
  value: unknown,
  pathPrefix = "",
): string | null {
  if (value == null) return null;
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      const hit = assertNoForbiddenContent(value[i], `${pathPrefix}[${i}]`);
      if (hit) return hit;
    }
    return null;
  }
  if (typeof value === "object") {
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      const lower = k.toLowerCase().replace(/[^a-z0-9]/g, "");
      for (const frag of FORBIDDEN_KEY_FRAGMENTS) {
        if (lower.includes(frag.replace(/_/g, ""))) {
          return `forbidden_key:${pathPrefix}${k}`;
        }
      }
      const hit = assertNoForbiddenContent(v, `${pathPrefix}${k}.`);
      if (hit) return hit;
    }
    return null;
  }
  if (typeof value === "string") {
    if (/sk-[a-zA-Z0-9]{10,}/.test(value)) return "secret_like_string";
    if (/Bearer\s+[A-Za-z0-9\-._~+/]+=*/i.test(value)) return "bearer_token";
    if (value.length > 8_000) return "string_too_large";
  }
  return null;
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isNullOrNumber(v: unknown): boolean {
  return v === null || (typeof v === "number" && Number.isFinite(v));
}

function isNullOrString(v: unknown): boolean {
  return v === null || typeof v === "string";
}

function validateHistoricalCampaignRow(
  row: Record<string, unknown>,
): LedgerRowValidationResult {
  if (row.campaignId !== P6_CAMPAIGN_ID) {
    return {
      ok: false,
      code: "CAMPAIGN_SCOPE",
      message: "campaignId must be P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
    };
  }
  if (!isNonEmptyString(row.scenarioId) || !isNonEmptyString(row.runId)) {
    return {
      ok: false,
      code: "CAMPAIGN_ROW_REQUIRED_FIELDS",
      message: "scenarioId and runId required for campaign ledger rows",
    };
  }
  return { ok: true, kind: "p6_campaign_run" };
}

function validateAdaptiveObserve(value: unknown): string | null {
  if (value === null) return null;
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    return "adaptiveObserve must be object or null";
  }
  const o = value as Record<string, unknown>;
  for (const key of [
    "requestedMaxTurns",
    "effectiveMaxTurns",
    "floor",
    "ceiling",
  ] as const) {
    if (typeof o[key] !== "number" || !Number.isFinite(o[key] as number)) {
      return `adaptiveObserve.${key} must be finite number`;
    }
  }
  if (typeof o.explicitOverride !== "boolean") {
    return "adaptiveObserve.explicitOverride must be boolean";
  }
  if (!(o.strategyClass === null || typeof o.strategyClass === "string")) {
    return "adaptiveObserve.strategyClass must be string or null";
  }
  if (!Array.isArray(o.reasonCodes)) {
    return "adaptiveObserve.reasonCodes must be array";
  }
  if (!o.reasonCodes.every((c) => typeof c === "string")) {
    return "adaptiveObserve.reasonCodes must be string[]";
  }
  return null;
}

function validateContinuationObserve(value: unknown): string | null {
  if (value === null) return null;
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    return "continuationObserve must be object or null";
  }
  const o = value as Record<string, unknown>;
  if (typeof o.continued !== "boolean") return "continuationObserve.continued";
  for (const key of [
    "segmentsExecuted",
    "missionMaxTurns",
    "segmentMaxTurns",
    "allottedTurns",
  ] as const) {
    if (typeof o[key] !== "number" || !Number.isFinite(o[key] as number)) {
      return `continuationObserve.${key} must be finite number`;
    }
  }
  if (typeof o.stopReason !== "string") {
    return "continuationObserve.stopReason must be string";
  }
  if (!Array.isArray(o.reasonCodes)) {
    return "continuationObserve.reasonCodes must be array";
  }
  return null;
}

function validateProductConservation(value: unknown): string | null {
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    return "productConservation must be object";
  }
  const o = value as Record<string, unknown>;
  if (typeof o.ok !== "boolean") return "productConservation.ok";
  if (typeof o.processLocal !== "string") return "productConservation.processLocal";
  if (typeof o.durableLedger !== "string") {
    return "productConservation.durableLedger";
  }
  if (!(o.failureCode === null || typeof o.failureCode === "string")) {
    return "productConservation.failureCode";
  }
  return null;
}

/**
 * Cognitive receipt rows — schema v2 complete projection required for new writes
 * and for read-integrity of rows that declare ledgerSchemaVersion=2.
 */
export function validateCognitiveReceiptRow(
  row: Record<string, unknown>,
): LedgerRowValidationResult {
  const required = [
    "campaignId",
    "runId",
    "scenarioId",
    "logicalTurnId",
    "projectId",
    "providerResponseObservation",
    "productRealProofStatus",
    "realBoundaryClaim",
    "captureStatus",
    "ledgerSchemaVersion",
    "runtimeIdentity",
    "providerIdentity",
    "presentation",
    "providerConfigured",
    "providerResponseId",
    "proofClassification",
    "selectedModelId",
    "observedModel",
    "selectedReasoningEffort",
    "usage",
    "adaptiveObserve",
    "continuationObserve",
    "toolCalls",
    "limitReached",
    "productTerminalStatus",
    "productConservation",
    "productCapturedAt",
  ] as const;
  for (const key of required) {
    if (!(key in row)) {
      return {
        ok: false,
        code: "RECEIPT_SCHEMA",
        message: `missing field ${key}`,
      };
    }
  }
  if (row.campaignId !== P6_CAMPAIGN_ID) {
    return {
      ok: false,
      code: "CAMPAIGN_SCOPE",
      message: "campaignId must be P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
    };
  }
  if (row.ledgerSchemaVersion !== P6_RECEIPT_LEDGER_SCHEMA_VERSION_REQUIRED) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA_VERSION",
      message: `ledgerSchemaVersion must be ${P6_RECEIPT_LEDGER_SCHEMA_VERSION_REQUIRED} for new writes`,
    };
  }
  if (row.productRealProofStatus !== "NOT_PROVEN") {
    return {
      ok: false,
      code: "REAL_CLAIM_FORBIDDEN",
      message: "productRealProofStatus must be NOT_PROVEN",
    };
  }
  if (row.realBoundaryClaim !== "NOT_CLAIMED") {
    return {
      ok: false,
      code: "REAL_CLAIM_FORBIDDEN",
      message: "realBoundaryClaim must be NOT_CLAIMED",
    };
  }
  if (row.proofClassification !== "DETERMINISTIC") {
    return {
      ok: false,
      code: "PROOF_CLASSIFICATION",
      message: "proofClassification must be DETERMINISTIC at DET seam",
    };
  }
  if (row.runId === row.logicalTurnId) {
    return {
      ok: false,
      code: "RUNID_EQUALS_LOGICAL_TURN",
      message: "runId must differ from logicalTurnId",
    };
  }
  if (row.runtimeIdentity !== "agents") {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "runtimeIdentity must be agents",
    };
  }
  if (
    row.providerIdentity !== "fake" &&
    row.providerIdentity !== "openai" &&
    row.providerIdentity !== "unknown"
  ) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "providerIdentity invalid",
    };
  }
  if (
    row.presentation !== "test_provider" &&
    row.presentation !== "openai_live"
  ) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "presentation invalid",
    };
  }
  if (typeof row.providerConfigured !== "boolean") {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "providerConfigured must be boolean",
    };
  }
  if (!isNullOrString(row.providerResponseId)) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "providerResponseId must be string or null",
    };
  }
  if (!isNullOrString(row.selectedModelId) || !isNullOrString(row.observedModel)) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "selectedModelId/observedModel must be string or null",
    };
  }
  if (!isNullOrString(row.selectedReasoningEffort)) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "selectedReasoningEffort must be string or null",
    };
  }
  if (
    row.usage == null ||
    typeof row.usage !== "object" ||
    Array.isArray(row.usage)
  ) {
    return { ok: false, code: "RECEIPT_SCHEMA", message: "usage required" };
  }
  const usage = row.usage as Record<string, unknown>;
  if (
    !isNullOrNumber(usage.inputTokens) ||
    !isNullOrNumber(usage.outputTokens) ||
    !isNullOrNumber(usage.totalTokens)
  ) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "usage tokens must be number or null (null ≠ 0)",
    };
  }
  const adaptiveErr = validateAdaptiveObserve(row.adaptiveObserve);
  if (adaptiveErr) {
    return { ok: false, code: "RECEIPT_SCHEMA", message: adaptiveErr };
  }
  const contErr = validateContinuationObserve(row.continuationObserve);
  if (contErr) {
    return { ok: false, code: "RECEIPT_SCHEMA", message: contErr };
  }
  if (typeof row.toolCalls !== "number" || !Number.isFinite(row.toolCalls)) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "toolCalls must be finite number",
    };
  }
  if (typeof row.limitReached !== "boolean") {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "limitReached must be boolean",
    };
  }
  const consErr = validateProductConservation(row.productConservation);
  if (consErr) {
    return { ok: false, code: "RECEIPT_SCHEMA", message: consErr };
  }
  if (!isNonEmptyString(row.productCapturedAt)) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "productCapturedAt required",
    };
  }
  return { ok: true, kind: "cognitive_execution_receipt" };
}

/**
 * Read-side row classification — aligns with write validators for v2;
 * historical campaign rows keep minimal contract; incomplete receipts
 * are never promoted to v2 and block integrityPass when present.
 */
export type LedgerRowReadClassification =
  | { class: "historical_campaign"; ok: true }
  | { class: "cognitive_receipt_v2"; ok: true }
  | {
      class: "cognitive_receipt_incomplete";
      ok: false;
      reason: string;
    }
  | { class: "unknown_kind"; ok: false; reason: string }
  | { class: "invalid_structure"; ok: false; reason: string };

export function classifyLedgerRowForRead(
  row: unknown,
): LedgerRowReadClassification {
  if (row == null || typeof row !== "object" || Array.isArray(row)) {
    return {
      class: "invalid_structure",
      ok: false,
      reason: "not a plain object",
    };
  }
  const record = row as Record<string, unknown>;
  if (
    typeof record.campaignId !== "string" ||
    record.campaignId.length === 0 ||
    typeof record.runId !== "string" ||
    record.runId.length === 0
  ) {
    return {
      class: "invalid_structure",
      ok: false,
      reason: "missing campaignId/runId",
    };
  }

  const kind =
    typeof record.kind === "string" ? record.kind : "(historical_campaign)";

  if (kind === "cognitive_execution_receipt") {
    const v = validateCognitiveReceiptRow(record);
    if (v.ok) {
      return { class: "cognitive_receipt_v2", ok: true };
    }
    return {
      class: "cognitive_receipt_incomplete",
      ok: false,
      reason: v.message,
    };
  }

  if (
    kind === "(historical_campaign)" ||
    kind === "p6_campaign_run" ||
    kind === "ROOT_CAUSE_INVESTIGATION_READONLY" ||
    kind === "RUNTIME_REQUALIFICATION"
  ) {
    if (!isNonEmptyString(record.scenarioId)) {
      return {
        class: "invalid_structure",
        ok: false,
        reason: "historical campaign row missing scenarioId",
      };
    }
    return { class: "historical_campaign", ok: true };
  }

  return {
    class: "unknown_kind",
    ok: false,
    reason: `unsupported kind: ${kind}`,
  };
}

/** Durable fields compared for duplicate skip (excludes QA capturedAt). */
export const P6_RECEIPT_DURABLE_COMPARE_KEYS = [
  "logicalTurnId",
  "projectId",
  "campaignId",
  "scenarioId",
  "runtimeIdentity",
  "providerIdentity",
  "presentation",
  "providerConfigured",
  "providerResponseId",
  "providerResponseObservation",
  "proofClassification",
  "productRealProofStatus",
  "realBoundaryClaim",
  "selectedModelId",
  "observedModel",
  "selectedReasoningEffort",
  "usage",
  "adaptiveObserve",
  "continuationObserve",
  "toolCalls",
  "limitReached",
  "productTerminalStatus",
  "productConservation",
  "productCapturedAt",
  "ledgerSchemaVersion",
] as const;

export function durableLedgerContentEquivalent(
  existing: Record<string, unknown>,
  candidate: Record<string, unknown>,
): boolean {
  // Incomplete historical receipt never equals a complete v2 candidate.
  if (existing.ledgerSchemaVersion !== P6_RECEIPT_LEDGER_SCHEMA_VERSION_REQUIRED) {
    return false;
  }
  if (candidate.ledgerSchemaVersion !== P6_RECEIPT_LEDGER_SCHEMA_VERSION_REQUIRED) {
    return false;
  }
  for (const key of P6_RECEIPT_DURABLE_COMPARE_KEYS) {
    if (JSON.stringify(existing[key]) !== JSON.stringify(candidate[key])) {
      return false;
    }
  }
  return true;
}

export function validateLedgerRowForAppend(
  row: unknown,
): LedgerRowValidationResult {
  if (row == null || typeof row !== "object" || Array.isArray(row)) {
    return {
      ok: false,
      code: "ROW_NOT_OBJECT",
      message: "ledger row must be a plain object",
    };
  }
  const record = row as Record<string, unknown>;
  try {
    const size = Buffer.byteLength(JSON.stringify(record), "utf8");
    if (size > MAX_LEDGER_ROW_JSON_BYTES) {
      return {
        ok: false,
        code: "ROW_TOO_LARGE",
        message: `row exceeds ${MAX_LEDGER_ROW_JSON_BYTES} bytes`,
      };
    }
  } catch {
    return {
      ok: false,
      code: "ROW_NOT_SERIALIZABLE",
      message: "row is not JSON-serializable",
    };
  }

  const forbidden = assertNoForbiddenContent(record);
  if (forbidden) {
    return {
      ok: false,
      code: "SENSITIVE_PAYLOAD_REJECTED",
      message: forbidden,
    };
  }

  const kind =
    typeof record.kind === "string" ? record.kind : "(historical_campaign)";

  if (kind === "cognitive_execution_receipt") {
    return validateCognitiveReceiptRow(record);
  }

  if (
    kind === "(historical_campaign)" ||
    kind === "p6_campaign_run" ||
    kind === "ROOT_CAUSE_INVESTIGATION_READONLY" ||
    kind === "RUNTIME_REQUALIFICATION"
  ) {
    return validateHistoricalCampaignRow(record);
  }

  return {
    ok: false,
    code: "UNKNOWN_ROW_KIND",
    message: `unsupported ledger row kind: ${kind}`,
  };
}
----- END FILE: projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts -----
----- BEGIN FILE: projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts -----
/**
 * Capture Product CognitiveExecutionReceipt DTO → external P6 Evidence Ledger.
 *
 * Product must NOT call this. QA / campaign harnesses only.
 *
 * ledgerSchemaVersion 2 — complete receipt projection (GO 2026-10-13 completeness).
 * Historical v1 / incomplete rows remain readable; never rewritten.
 */

import type { CognitiveExecutionReceipt } from "@/features/project-assistant/cognitiveExecutionReceipt";
import type { ProjectAssistantSendResult } from "@/features/project-assistant/types";
import {
  P6_CAMPAIGN_ID,
  appendP6EvidenceLedgerRow,
  readP6EvidenceLedger,
  resolveP6EvidenceLedgerAbsolutePath,
  withP6EvidenceLedgerLock,
  type P6EvidenceLedgerRow,
} from "./evidenceLedger";
import {
  durableLedgerContentEquivalent,
  validateLedgerRowForAppend,
} from "./ledgerRowValidation";
import fs from "node:fs";
import path from "node:path";

/** Complete CognitiveExecutionReceipt ledger row format. */
export const P6_RECEIPT_LEDGER_SCHEMA_VERSION = 2 as const;

export type CaptureCognitiveExecutionReceiptInput = {
  dto?: ProjectAssistantSendResult;
  receipt?: CognitiveExecutionReceipt;
  runId: string;
  scenarioId: string;
  campaignId?: string;
  absolutePath?: string;
  onDuplicate?: "reject" | "skip";
  reserves?: string[];
  campaignProofClassification?: "DETERMINISTIC";
};

export type CaptureCognitiveExecutionReceiptResult =
  | {
      ok: true;
      status: "appended" | "duplicate_skipped";
      absolutePath: string;
      entry: P6EvidenceLedgerRow;
    }
  | {
      ok: false;
      status:
        | "missing_receipt"
        | "duplicate_rejected"
        | "duplicate_conflict"
        | "campaign_mismatch"
        | "append_failed"
        | "integrity_blocks_capture"
        | "lock_failed"
        | "validation_failed"
        | "identity_mismatch";
      message: string;
      absolutePath?: string;
      existing?: P6EvidenceLedgerRow;
    };

/** Product receipt fields that must round-trip through the ledger (v2). */
export const P6_RECEIPT_COMPLETE_FIELD_PATHS = [
  "logicalTurnId",
  "projectId",
  "runtimeIdentity",
  "providerIdentity",
  "presentation",
  "providerConfigured",
  "providerResponseId",
  "providerResponseObservation",
  "proofClassification",
  "selectedModelId",
  "observedModel",
  "selectedReasoningEffort",
  "usage.inputTokens",
  "usage.outputTokens",
  "usage.totalTokens",
  "adaptiveObserve",
  "continuationObserve",
  "toolCalls",
  "limitReached",
  "productTerminalStatus",
  "conservation",
  "capturedAt",
] as const;

function resolveReceipt(
  input: CaptureCognitiveExecutionReceiptInput,
): CognitiveExecutionReceipt | null {
  if (input.dto?.cognitiveExecutionReceipt) {
    return input.dto.cognitiveExecutionReceipt;
  }
  if (input.receipt) return input.receipt;
  return null;
}

function cloneJson<T>(value: T): T {
  return value == null ? value : (JSON.parse(JSON.stringify(value)) as T);
}

/**
 * Project Product CognitiveExecutionReceipt → ledger row (complete, redacted metadata).
 * Null stays null. No invented providerResponseId. No token 0-coercion.
 */
export function buildCompleteCognitiveReceiptLedgerEntry(
  input: CaptureCognitiveExecutionReceiptInput,
  receipt: CognitiveExecutionReceipt,
): P6EvidenceLedgerRow {
  const entry: P6EvidenceLedgerRow = {
    kind: "cognitive_execution_receipt",
    ledgerSchemaVersion: P6_RECEIPT_LEDGER_SCHEMA_VERSION,
    campaignId: input.campaignId ?? P6_CAMPAIGN_ID,
    runId: input.runId,
    scenarioId: input.scenarioId,
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
    selectedModelId: receipt.selectedModelId,
    observedModel: receipt.observedModel,
    selectedReasoningEffort: receipt.selectedReasoningEffort,
    usage: {
      inputTokens: receipt.usage.inputTokens,
      outputTokens: receipt.usage.outputTokens,
      totalTokens: receipt.usage.totalTokens,
    },
    adaptiveObserve: cloneJson(receipt.adaptiveObserve),
    continuationObserve: cloneJson(receipt.continuationObserve),
    toolCalls: receipt.toolCalls,
    limitReached: receipt.limitReached,
    productTerminalStatus: receipt.productTerminalStatus,
    productConservation: cloneJson(receipt.conservation),
    productCapturedAt: receipt.capturedAt,
    capturedAt: new Date().toISOString(),
    captureStatus: "CAPTURED",
    realBoundaryClaim: "NOT_CLAIMED",
    campaignProofClassification:
      input.campaignProofClassification ?? "DETERMINISTIC",
    runnerResponseIdPresent: receipt.providerResponseId != null,
    runnerResponseIdPrefix:
      typeof receipt.providerResponseId === "string"
        ? receipt.providerResponseId.slice(0, 12)
        : null,
    sourceBoundary: receipt.presentation,
    productProviderError:
      input.dto && input.dto.ok === false
        ? { status: input.dto.status, code: input.dto.code }
        : null,
    notes:
      "External P6 ledger complete receipt capture (schema v2). DET seam only unless REAL GO.",
  };
  if (input.reserves && input.reserves.length > 0) {
    entry.reserves = input.reserves.filter(
      (r) => typeof r === "string" && r.length < 200,
    );
  }
  return entry;
}

/**
 * Field-by-field compare of Product receipt vs reopened ledger entry (v2).
 * Returns list of mismatch paths (empty = complete conservation).
 */
export function diffReceiptAgainstLedgerEntry(
  receipt: CognitiveExecutionReceipt,
  entry: P6EvidenceLedgerRow,
): string[] {
  const mismatches: string[] = [];
  const eq = (path: string, a: unknown, b: unknown) => {
    if (JSON.stringify(a) !== JSON.stringify(b)) mismatches.push(path);
  };
  eq("logicalTurnId", receipt.logicalTurnId, entry.logicalTurnId);
  eq("projectId", receipt.projectId, entry.projectId);
  eq("runtimeIdentity", receipt.runtimeIdentity, entry.runtimeIdentity);
  eq("providerIdentity", receipt.providerIdentity, entry.providerIdentity);
  eq("presentation", receipt.presentation, entry.presentation);
  eq("providerConfigured", receipt.providerConfigured, entry.providerConfigured);
  eq("providerResponseId", receipt.providerResponseId, entry.providerResponseId);
  eq(
    "providerResponseObservation",
    receipt.providerResponseObservation,
    entry.providerResponseObservation,
  );
  eq("proofClassification", receipt.proofClassification, entry.proofClassification);
  eq("selectedModelId", receipt.selectedModelId, entry.selectedModelId);
  eq("observedModel", receipt.observedModel, entry.observedModel);
  eq(
    "selectedReasoningEffort",
    receipt.selectedReasoningEffort,
    entry.selectedReasoningEffort,
  );
  const usage = entry.usage as CognitiveExecutionReceipt["usage"] | undefined;
  eq("usage.inputTokens", receipt.usage.inputTokens, usage?.inputTokens);
  eq("usage.outputTokens", receipt.usage.outputTokens, usage?.outputTokens);
  eq("usage.totalTokens", receipt.usage.totalTokens, usage?.totalTokens);
  eq("adaptiveObserve", receipt.adaptiveObserve, entry.adaptiveObserve);
  eq("continuationObserve", receipt.continuationObserve, entry.continuationObserve);
  eq("toolCalls", receipt.toolCalls, entry.toolCalls);
  eq("limitReached", receipt.limitReached, entry.limitReached);
  eq(
    "productTerminalStatus",
    receipt.productTerminalStatus,
    entry.productTerminalStatus,
  );
  eq("conservation", receipt.conservation, entry.productConservation);
  eq("capturedAt", receipt.capturedAt, entry.productCapturedAt);
  eq("realProofStatus", receipt.realProofStatus, entry.productRealProofStatus);
  return mismatches;
}

/**
 * Duplicate skip requires durable content equivalence (tokens/budget/model/…).
 * QA `capturedAt` is excluded. Incomplete historical ≠ v2 complete.
 */
function identityCompatible(
  existing: P6EvidenceLedgerRow,
  candidate: P6EvidenceLedgerRow,
): boolean {
  return durableLedgerContentEquivalent(existing, candidate);
}

function appendUnlocked(
  absolutePath: string,
  row: P6EvidenceLedgerRow,
):
  | { ok: true; bytesWritten: number }
  | { ok: false; code: string; message: string } {
  const validation = validateLedgerRowForAppend(row);
  if (!validation.ok) {
    return { ok: false, code: validation.code, message: validation.message };
  }
  const prior = readP6EvidenceLedger({ absolutePath, allowMissing: true });
  if (
    prior.integrity === "DEGRADED" ||
    prior.integrity === "INVALID" ||
    prior.integrity === "UNREADABLE"
  ) {
    return {
      ok: false,
      code: "LEDGER_INTEGRITY_BLOCKS_APPEND",
      message: `refuse append while integrity=${prior.integrity}`,
    };
  }
  try {
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    const line = `${JSON.stringify(row)}\n`;
    fs.appendFileSync(absolutePath, line, { encoding: "utf8", mode: 0o600 });
    return { ok: true, bytesWritten: Buffer.byteLength(line, "utf8") };
  } catch (err) {
    return {
      ok: false,
      code: "APPEND_IO_ERROR",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

export function captureCognitiveExecutionReceiptToP6Ledger(
  input: CaptureCognitiveExecutionReceiptInput,
): CaptureCognitiveExecutionReceiptResult {
  const absolutePath =
    input.absolutePath ?? resolveP6EvidenceLedgerAbsolutePath();
  const campaignId = input.campaignId ?? P6_CAMPAIGN_ID;
  if (campaignId !== P6_CAMPAIGN_ID) {
    return {
      ok: false,
      status: "campaign_mismatch",
      message: `campaignId must be ${P6_CAMPAIGN_ID}`,
      absolutePath,
    };
  }

  const receipt = resolveReceipt(input);
  if (!receipt) {
    return {
      ok: false,
      status: "missing_receipt",
      message: "dto.cognitiveExecutionReceipt / receipt missing",
      absolutePath,
    };
  }

  if (input.runId === receipt.logicalTurnId) {
    return {
      ok: false,
      status: "identity_mismatch",
      message: "runId must differ from logicalTurnId",
      absolutePath,
    };
  }

  const candidate = buildCompleteCognitiveReceiptLedgerEntry(input, receipt);
  const validation = validateLedgerRowForAppend(candidate);
  if (!validation.ok) {
    return {
      ok: false,
      status: "validation_failed",
      message: validation.message,
      absolutePath,
    };
  }

  const onDuplicate = input.onDuplicate ?? "reject";

  const locked = withP6EvidenceLedgerLock(absolutePath, () => {
    const prior = readP6EvidenceLedger({ absolutePath, allowMissing: true });
    if (
      prior.integrity === "DEGRADED" ||
      prior.integrity === "INVALID" ||
      prior.integrity === "UNREADABLE"
    ) {
      return {
        ok: false as const,
        status: "integrity_blocks_capture" as const,
        message: `ledger integrity=${prior.integrity}; capture refused without rewrite`,
        absolutePath,
      };
    }

    const existing = prior.rows.find((r) => r.runId === input.runId);
    if (existing) {
      if (onDuplicate === "skip") {
        if (!identityCompatible(existing, candidate)) {
          return {
            ok: false as const,
            status: "duplicate_conflict" as const,
            message:
              "runId already persisted with incompatible identity; refusing false conservation",
            absolutePath,
            existing,
          };
        }
        return {
          ok: true as const,
          status: "duplicate_skipped" as const,
          absolutePath,
          entry: existing,
        };
      }
      return {
        ok: false as const,
        status: "duplicate_rejected" as const,
        message: `runId already present: ${input.runId}`,
        absolutePath,
        existing,
      };
    }

    const written = appendUnlocked(absolutePath, candidate);
    if (!written.ok) {
      return {
        ok: false as const,
        status: "append_failed" as const,
        message: written.message,
        absolutePath,
      };
    }
    return {
      ok: true as const,
      status: "appended" as const,
      absolutePath,
      entry: candidate,
    };
  });

  if (!locked.ok) {
    return {
      ok: false,
      status: "lock_failed",
      message: locked.message,
      absolutePath,
    };
  }
  return locked.value;
}

export function appendValidatedP6CampaignLedgerRow(
  row: unknown,
  options?: { absolutePath?: string },
): ReturnType<typeof appendP6EvidenceLedgerRow> {
  return appendP6EvidenceLedgerRow(row, options);
}
----- END FILE: projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts -----
----- BEGIN FILE: projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts -----
/**
 * QA collection seam for P6 campaign harnesses.
 *
 * Status:
 *   QA COLLECTION SEAM DETERMINISTICALLY PROVEN
 *   OPERATIONAL CAMPAIGN WIRING PENDING
 *
 * Historical REAL harnesses (`__tests__/p6-campaign/*.real.test.ts` on qa WT)
 * still call `fs.appendFileSync` inline. They are NOT modified / NOT copied /
 * NOT executed in this Option B worktree.
 *
 * Future REAL wiring (minimal plan — prerequisite under distinct Morris GO):
 *   1. After Product turn returns `ProjectAssistantSendResult`, call
 *      `collectP6ProductTurnEvidence({ productTurnResult, runId, scenarioId })`.
 *   2. `runId` remains campaign-owned (≠ logicalTurnId).
 *   3. Ledger path: `.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl`
 *      (or explicit absolutePath for isolated DET).
 *   4. Reopen via `readP6EvidenceLedger` / `findP6EvidenceLedgerRowsByRunId`.
 *   5. Keep historical campaign-run appends for non-receipt rows via
 *      `appendValidatedP6CampaignLedgerRow` (secured), or leave scenario rows
 *      as today until migrated.
 *   6. Concurrency: MONO-WRITER — do not parallelize ledger writers.
 *
 * Product must NOT import this module.
 */

import type { ProjectAssistantSendResult } from "@/features/project-assistant/types";
import {
  captureCognitiveExecutionReceiptToP6Ledger,
  type CaptureCognitiveExecutionReceiptResult,
} from "./captureCognitiveExecutionReceipt";
import { P6_CAMPAIGN_ID } from "./evidenceLedger";

export const P6_QA_COLLECTION_SEAM_STATUS = {
  deterministicProven: true,
  operationalCampaignWiring: "PENDING",
  historicalHarnessMigration: "NOT_DONE",
} as const;

export type P6QaCollectionInput = {
  productTurnResult: ProjectAssistantSendResult;
  runId: string;
  scenarioId: string;
  campaignId?: string;
  absolutePath?: string;
  onDuplicate?: "reject" | "skip";
};

/**
 * Canonical P6 QA collection entrypoint — harnesses call this after Product turn.
 */
export function collectP6ProductTurnEvidence(
  input: P6QaCollectionInput,
): CaptureCognitiveExecutionReceiptResult {
  return captureCognitiveExecutionReceiptToP6Ledger({
    dto: input.productTurnResult,
    runId: input.runId,
    scenarioId: input.scenarioId,
    campaignId: input.campaignId ?? P6_CAMPAIGN_ID,
    absolutePath: input.absolutePath,
    onDuplicate: input.onDuplicate,
  });
}
----- END FILE: projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts -----
----- BEGIN FILE: projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts -----
/**
 * P6 Campaign Evidence — external append-only JSONL ledger (QA authority).
 * Not Product persistence. Not ProductSqliteSession.
 */

export {
  P6_CAMPAIGN_ID,
  P6_EVIDENCE_LEDGER_RELATIVE_PATH,
  P6_LEDGER_CONCURRENCY_MODEL,
  resolveP6EvidenceLedgerAbsolutePath,
  resolveP6EvidenceLedgerPath,
  ensureP6EvidenceLedger,
  readP6EvidenceLedger,
  appendP6EvidenceLedgerRow,
  findP6EvidenceLedgerRowsByRunId,
  withP6EvidenceLedgerLock,
  forceRemoveOrphanP6EvidenceLedgerLock,
  type P6EvidenceLedgerRow,
  type P6LedgerIntegrityStatus,
  type ReadP6EvidenceLedgerResult,
  type AppendP6EvidenceLedgerResult,
} from "./evidenceLedger";

export {
  captureCognitiveExecutionReceiptToP6Ledger,
  appendValidatedP6CampaignLedgerRow,
  buildCompleteCognitiveReceiptLedgerEntry,
  diffReceiptAgainstLedgerEntry,
  P6_RECEIPT_LEDGER_SCHEMA_VERSION,
  P6_RECEIPT_COMPLETE_FIELD_PATHS,
  type CaptureCognitiveExecutionReceiptInput,
  type CaptureCognitiveExecutionReceiptResult,
} from "./captureCognitiveExecutionReceipt";

export {
  collectP6ProductTurnEvidence,
  P6_QA_COLLECTION_SEAM_STATUS,
  type P6QaCollectionInput,
} from "./qaCollectionSeam";

export {
  validateLedgerRowForAppend,
  validateCognitiveReceiptRow,
  classifyLedgerRowForRead,
  durableLedgerContentEquivalent,
  MAX_LEDGER_ROW_JSON_BYTES,
  P6_RECEIPT_LEDGER_SCHEMA_VERSION_REQUIRED,
  P6_RECEIPT_DURABLE_COMPARE_KEYS,
  type LedgerRowReadClassification,
} from "./ledgerRowValidation";
----- END FILE: projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts -----


---

## 13. Diffs tracked (modifications au commit)

```diff
commit bfef30db0828b066b3f414499ef0fab0419b5cf6
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Oct 13 20:15:37 2026 +0200

    fix(studio): add bounded P6 cognitive evidence capture

    Co-authored-by: Cursor <cursoragent@cursor.com>

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
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index b9ad266f..07f2a6f9 100644
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
+| Persistence | Product: process-local registry only (no Product JSONL write). External QA: §T JSONL ledger **ADOPTED + STABILIZED** via `lib/p6-campaign-evidence/**` (secured append, integrity statuses, exclusive lock). Session ≠ Evidence authority |
+| Authority | Receipt `realProofStatus=NOT_PROVEN`; ledger `realBoundaryClaim=NOT_CLAIMED`; Runner id observed ≠ REAL |
+| Fake/Real | DETERMINISTIC PROVEN AT INTEGRATED OPTION B EVIDENCE SEAM (incl. read-uniqueness); REAL boundary **NOT PROVEN**; concurrency **MONO_WRITER** only |
+| Digests | mechanical `--write-digests` after integrity/capture stabilization (tracked Product files when changed) |
+
+**SEMANTIC IMPACT = YES** on prior Product seam; external ledger module is **QA device** (OBS-01…04 closed at DET claimed model).
+
 ## Sample impact analysis E — RCD-01 documentary reliability (PR #578 INTEGRATED ON MAIN)

 **Changed Product paths (historical semantic change; already on main @ `44006648`):**
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index c7442607..53be8f6a 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -19,6 +19,8 @@
 | F04 Framing continuity UI | framingContinuityCard / Rehydrate / p6.ux.recommendationContinuity | examinable card; Recommendation≠Decision |
 | F04 Work Recommendation materialization (REC-01) | qualifyProspectiveWorkRecommendationMaterialization.d0; activeCycleCognitiveWork.d0 (Option A SQLite reload + historical replay); p6.hqa.rec01.minimalStabilization.d0; p6.hqa.rec01.optionB.workRecommendationsContext.d0; UX-REC-02 journalDisclaimer; chatFirstWorkRecommendationContinuity; noraLifecycleRecommendationContinuity | DETERMINISTIC at tested scope; coverage PARTIAL fail-closed; REAL NOT RUN |
 | F04 Nora autonomy P0/P1/P2 (PR #577 INTEGRATED ON MAIN) | `p6.nora.maxTurns.documentary.d0.test.ts`; `p6.nora.p1.adaptiveBudget.d0.test.ts`; `p6.nora.p1p2.documentary.mission.d0.test.ts`; `p6.nora.p1p2.targetedVerification.d0.test.ts`; `p6.nora.p0.productStatusHonesty.d0.test.ts`; `p6.nora.p0.incomplete.panel.ux.d0.test.tsx`; `p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx`; `mw6.pre-real.budget-hardening.d0.test.ts` (NUM-CLAMP / R-PRE-REAL-08A); `runner.d0.test.ts`; `orchestrateTurn.test.ts` | See proof oracles below — **DETERMINISTIC ONLY**; not Product UI E2E REAL; not documentary REAL quality; merge `d8ceb8ad` |
+| F04 P6 REAL OBS Option B receipt conservation (CRITICAL CORRECTION) | `p6.realObs.optionB.receiptConservation.d0.test.ts` | DETERMINISTIC AT CORRECTED SEAM — process registry; Fake ≠ REAL; Runner id ≠ PROVIDER_CONFIRMED; capture fail ≠ provider_error; ZERO REAL |
+| F04 P6 EXTERNAL Evidence Ledger capture | `p6.externalEvidenceLedger.d0.test.ts`; `p6.qaCollectionSeam.d0.test.ts`; `p6.receiptCompleteness.d0.test.ts` + `lib/p6-campaign-evidence/**` | DETERMINISTIC — complete receipt v2; read integrity + read-uniqueness (dup runId ≠ HEALTHY); write uniqueness; durable duplicate skip; MONO_WRITER; QA seam DET / wiring PENDING; ZERO REAL |
 | F04 Documentary reliability RCD-01 (PR #578 INTEGRATED ON MAIN) | `p6.nora.min09.documentaryReliability.d0.test.ts` (R1–R7); P1/P2/Session regressions | Complete-line coverage; redaction progression; final envelope truth; envelope `lineExceedsCap`; fixture regex fidelity; **DETERMINISTIC ONLY** — not GDR REAL; merge `44006648` |
 | F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
 | F07 Framing HD / START boundary | chatFirstFramingContinuity* + F01 gate | HD structural when required; START gated |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index f345e1b3..07ebe1ef 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,6 +5,30 @@
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
+| OBS-01 writer security | CLOSED AT DET — `validateLedgerRowForAppend` at every public append; secrets/forbidden keys refused |
+| OBS-02 integrity status | CLOSED AT DET — `HEALTHY` / `DEGRADED` / `INVALID` / `UNREADABLE` / `MISSING`; `integrityPass` only when HEALTHY; no silent rewrite |
+| OBS-03 idempotence / concurrency | CLOSED AT **MONO_WRITER** model — O_EXCL contention detection; no age-based lock reclaim; orphan recovery via explicit `forceRemoveOrphanP6EvidenceLedgerLock` only. Multi-process durability **NOT CLAIMED** |
+| OBS-04 QA collection seam | DET PROVEN — `collectP6ProductTurnEvidence`; **OPERATIONAL CAMPAIGN WIRING PENDING** (historical harnesses still inline `appendFileSync` on qa WT) |
+| Receipt completeness (ledger schema v2) | CLOSED AT DET — full Product CognitiveExecutionReceipt projection (model/effort/tokens/adaptive/continuation/conservation); reopen field-by-field equality |
+| Read integrity v2 | CLOSED AT DET — `classifyLedgerRowForRead` aligns reader with writer schema; incomplete v2 ⇒ `integrityPass=false` (DEGRADED); historical campaign rows not v2-promoted |
+| RunId uniqueness (write) | CLOSED AT DET — all public writers reject duplicate runId under MONO_WRITER lock; duplicate skip requires durable content equivalence |
+| RunId uniqueness (read) | CLOSED AT DET — `readP6EvidenceLedger` detects duplicate runIds among preserved rows; `duplicateRunIds` diagnostic; never HEALTHY / never silent single-truth selection |
+| Provider observation honesty | Fake → `FAKE_DETERMINISTIC`; null → `NOT_OBSERVED`; Runner id → `RUNNER_RESPONSE_ID_OBSERVED`; **never** `PROVIDER_CONFIRMED` / REAL at Product or ledger capture |
+| `realProofStatus` / ledger `realBoundaryClaim` | Product `NOT_PROVEN` · ledger `NOT_CLAIMED` |
+| Capture failure vs Product status | External capture failure ≠ Product `provider_error` |
+| Debt `P6-REAL-OBS-P0-RECEIPT-CONSERVATION` | DET external durable capture **STABILIZED**; REAL qualification **OPEN** (distinct Morris GO) |
+| Historical T1 `ltu:ff0b592f…` REAL requalification | **NOT RETROACTIVE** |
+| REAL boundary / P6 GLOBAL PASS / Product READY | **NOT PROVEN / NOT CLAIMED** |
+| Runtime v3 | **NON ADOPTED** |
+
 ## Overlay — Nora autonomy PR #577 (INTEGRATED ON MAIN)

 | Item | Status |
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index dd1d89b0..07604d03 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -23,7 +23,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "7b4089cd4fbb4e17"
+      "sha256_16": "5e4fa6128f75930f"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "25fb9a38f1eca0f9"
+      "sha256_16": "1b7f254ef869dfc3"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "4582c1d2695a5f76"
+      "sha256_16": "57b2b177259d7c5b"
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

---

FIN DU REVIEW PACK FULL
