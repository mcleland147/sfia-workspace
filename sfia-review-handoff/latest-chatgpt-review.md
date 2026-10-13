# SFIA Review Pack FULL — P6 REAL OBSERVABILITY Option B
# FINAL LEDGER READ INTEGRITY + RUN UNIQUENESS

**Horodatage (Europe/Paris):** 2026-10-13 19:55:42 CEST
**GO Morris:** FINAL LEDGER READ INTEGRITY + RUN UNIQUENESS — 2026-10-13
**Cycle:** 8 — Delivery / implémentation
**Profil:** CRITICAL
**CKC:** ckc:studio:delivery
**Campagne:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Chantier:** P6-REAL-OBS-P0-RECEIPT-CONSERVATION
**Prior handoff:** 50afb3fb / blob 52ba616b

---

## 1. Git Truth

- Worktree: `/Users/morris/Projects/sfia-workspace-p6-real-observability-option-b`
- Branch: `fix/p6-real-observability-option-b`
- HEAD: `bd3f440c749a059d73fb76e09bb1d0ce91e27af4`
- origin/main: `bd3f440c749a059d73fb76e09bb1d0ce91e27af4`
- Project commit/push/PR/merge: NONE
- Runtime :3020: untouched

### status --short
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

### name-status (+ untracked)
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts
M	projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts
?? projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.qaCollectionSeam.d0.test.ts
?? projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.receiptCompleteness.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.realObs.optionB.receiptConservation.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/cognitiveExecutionReceipt.ts
?? projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts
?? projects/sfia-studio/app/lib/p6-campaign-evidence/evidenceLedger.ts
?? projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts
?? projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts
?? projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts

```

### diff --stat
```
 .tmp-sfia-review/chatgpt-review.md                 | 166 ---------------------
 .../features/project-assistant/orchestrateTurn.ts  |  46 +++++-
 .../app/features/project-assistant/types.ts        |  12 ++
 .../04-dependency-impact-map.md                    |  19 +++
 .../08-test-proof-and-conformance-map.md           |   2 +
 ...9-known-gaps-reserves-and-current-boundaries.md |  23 +++
 .../production-runtime-reference.manifest.json     |   8 +-
 7 files changed, 102 insertions(+), 174 deletions(-)

```

---

## 2. Sources / Convergence

Doctrine/Roadmap/C1/§T/PRR/handoff 50afb3fb. Option B LOCAL CANDIDATE. Concurrency MONO_WRITER. QA seam DET proven / wiring PENDING. P6 GLOBAL / REAL / Runtime v3 unchanged.

Findings d'entrée: READ-INTEGRITY-V2 · RUNID-UNIQUENESS.

---

## 3. Correction A — Read integrity

`classifyLedgerRowForRead` distinguishes:
- historical_campaign (ok)
- cognitive_receipt_v2 (full validateCognitiveReceiptRow — same as writer)
- cognitive_receipt_incomplete (ok:false — kept for diagnostic)
- unknown_kind / invalid_structure

`readP6EvidenceLedger` increments `semanticErrors` for incomplete v2 / unknown kinds.
integrityPass=true ONLY when parse+structure+semantic all clean.
Incomplete v2 JSON never yields HEALTHY.
Historical campaign rows not v2-promoted.
No rewrite / no FAILED deletion.

---

## 4. Correction B — Run uniqueness

Writers publics:
- `appendP6EvidenceLedgerRow` — DUPLICATE_RUN_ID under lock before append
- `appendValidatedP6CampaignLedgerRow` — delegates to append
- `captureCognitiveExecutionReceiptToP6Ledger` — duplicate check+append under same MONO_WRITER lock

`durableLedgerContentEquivalent` compares durable fields (identities, provider, models, effort, tokens, adaptive, continuation, toolCalls, limitReached, terminal, conservation, productCapturedAt, schema). Excludes QA `capturedAt`.
Incomplete historical ≠ v2 complete → conflict on skip.
No silent second line. No multi-process claim. No age lock reclaim.

---

## 5. Tests

52/52 PASS DET (ledger 22 + completeness 14 + seam 1 + Option B 15).
Oracles R01–R17 + R12–R15 durable skip conflicts covered.
typecheck / lint / build: PASS
npm test full: NOT EXECUTED — REAL SAFETY BOUNDARY

---

## 6. PRR

CONFORMANCE OK (digests synced).

---

## 7. Fake/Real / Security

DETERMINISTIC PROVEN AT LEDGER READ INTEGRITY AND RUN UNIQUENESS SEAMS
REAL / P6 GLOBAL / PRODUCT READY — NOT CLAIMED
OPERATIONAL CAMPAIGN WIRING — PENDING

---

## 8. Réserves / Dette / Gates

Wiring harnesses historiques PENDING. REAL OPEN.
Debt: P6-REAL-OBS-P0-RECEIPT-CONSERVATION
Next: ChatGPT PR readiness → Morris Git Integration → future REAL GO

---

## 9. Verdict

**P6 LEDGER READ INTEGRITY AND RUN UNIQUENESS CORRECTED / DETERMINISTIC PROVEN / READY FOR CHATGPT PR READINESS REVIEW**

---

## 10. Instruction ChatGPT

Vérifier lecteur v2 strict + historique compatible; integrityPass non trompeur; unicité runId toutes frontières; duplicate skip durable; no rewrite; ZERO REAL/commit projet. Verdict PR readiness only.

---

## 11. Contenu complet des fichiers

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
  /** True ONLY when integrity === HEALTHY. Never true under corruption/semantic defects. */
  integrityPass: boolean;
  integrity: P6LedgerIntegrityStatus;
  absolutePath: string;
  rows: P6EvidenceLedgerRow[];
  parseErrors: number;
  structureErrors: number;
  /** v2 incomplete / unknown-kind semantic defects (bytes preserved). */
  semanticErrors: number;
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
 * Read-only ledger open. Never rewrites. Never silently repairs.
 * v2 cognitive receipts are validated with the same schema as writes;
 * incomplete v2 / unknown kinds set integrityPass=false (DEGRADED).
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

  const defects =
    parseErrors > 0 ||
    structureErrors > 0 ||
    semanticErrors > 0 ||
    partialTrailing;

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
      totalLines: lines.length,
    };
  }

  if (rows.length > 0) {
    return {
      ok: true,
      integrityPass: false,
      integrity: "DEGRADED",
      absolutePath,
      rows,
      parseErrors,
      structureErrors,
      semanticErrors,
      totalLines: lines.length,
      error:
        "parse/structure/semantic defects observed; historical bytes preserved; integrityPass=false",
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
----- BEGIN FILE: projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts -----
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
    const first = capture(ledgerPath, {
      runId: "P6-DET-SKIP",
      logicalTurnId: "ltu:skip-1",
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const skipped = capture(ledgerPath, {
      runId: "P6-DET-SKIP",
      logicalTurnId: "ltu:skip-1",
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
});
----- END FILE: projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts -----
----- BEGIN FILE: projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.receiptCompleteness.d0.test.ts -----
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
----- END FILE: projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.receiptCompleteness.d0.test.ts -----
----- BEGIN FILE: projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.qaCollectionSeam.d0.test.ts -----
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
----- END FILE: projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.qaCollectionSeam.d0.test.ts -----


---

## 12. Diffs tracked

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
index b9ad266f..0b63ab17 100644
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
+| Fake/Real | DETERMINISTIC PROVEN AT LEDGER READ INTEGRITY AND RUN UNIQUENESS SEAMS; REAL boundary **NOT PROVEN**; concurrency **MONO_WRITER** only |
+| Digests | mechanical `--write-digests` after integrity/capture stabilization (tracked Product files when changed) |
+
+**SEMANTIC IMPACT = YES** on prior Product seam; external ledger module is **QA device** (OBS-01…04 closed at DET claimed model).
+
 ## Sample impact analysis E — RCD-01 documentary reliability (PR #578 INTEGRATED ON MAIN)

 **Changed Product paths (historical semantic change; already on main @ `44006648`):**
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index c7442607..431b40c4 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -19,6 +19,8 @@
 | F04 Framing continuity UI | framingContinuityCard / Rehydrate / p6.ux.recommendationContinuity | examinable card; Recommendation≠Decision |
 | F04 Work Recommendation materialization (REC-01) | qualifyProspectiveWorkRecommendationMaterialization.d0; activeCycleCognitiveWork.d0 (Option A SQLite reload + historical replay); p6.hqa.rec01.minimalStabilization.d0; p6.hqa.rec01.optionB.workRecommendationsContext.d0; UX-REC-02 journalDisclaimer; chatFirstWorkRecommendationContinuity; noraLifecycleRecommendationContinuity | DETERMINISTIC at tested scope; coverage PARTIAL fail-closed; REAL NOT RUN |
 | F04 Nora autonomy P0/P1/P2 (PR #577 INTEGRATED ON MAIN) | `p6.nora.maxTurns.documentary.d0.test.ts`; `p6.nora.p1.adaptiveBudget.d0.test.ts`; `p6.nora.p1p2.documentary.mission.d0.test.ts`; `p6.nora.p1p2.targetedVerification.d0.test.ts`; `p6.nora.p0.productStatusHonesty.d0.test.ts`; `p6.nora.p0.incomplete.panel.ux.d0.test.tsx`; `p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx`; `mw6.pre-real.budget-hardening.d0.test.ts` (NUM-CLAMP / R-PRE-REAL-08A); `runner.d0.test.ts`; `orchestrateTurn.test.ts` | See proof oracles below — **DETERMINISTIC ONLY**; not Product UI E2E REAL; not documentary REAL quality; merge `d8ceb8ad` |
+| F04 P6 REAL OBS Option B receipt conservation (CRITICAL CORRECTION) | `p6.realObs.optionB.receiptConservation.d0.test.ts` | DETERMINISTIC AT CORRECTED SEAM — process registry; Fake ≠ REAL; Runner id ≠ PROVIDER_CONFIRMED; capture fail ≠ provider_error; ZERO REAL |
+| F04 P6 EXTERNAL Evidence Ledger capture | `p6.externalEvidenceLedger.d0.test.ts`; `p6.qaCollectionSeam.d0.test.ts`; `p6.receiptCompleteness.d0.test.ts` + `lib/p6-campaign-evidence/**` | DETERMINISTIC — complete receipt v2; read integrity (incomplete v2 ≠ HEALTHY); runId uniqueness all writers; durable duplicate skip; MONO_WRITER; QA seam DET / wiring PENDING; ZERO REAL |
 | F04 Documentary reliability RCD-01 (PR #578 INTEGRATED ON MAIN) | `p6.nora.min09.documentaryReliability.d0.test.ts` (R1–R7); P1/P2/Session regressions | Complete-line coverage; redaction progression; final envelope truth; envelope `lineExceedsCap`; fixture regex fidelity; **DETERMINISTIC ONLY** — not GDR REAL; merge `44006648` |
 | F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
 | F07 Framing HD / START boundary | chatFirstFramingContinuity* + F01 gate | HD structural when required; START gated |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index f345e1b3..a219a483 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,6 +5,29 @@
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
+| RunId uniqueness | CLOSED AT DET — all public writers (`appendP6EvidenceLedgerRow` / capture) reject duplicate runId under MONO_WRITER lock; duplicate skip requires durable content equivalence (tokens/budget/model/…) |
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
index dd1d89b0..d75ddb6b 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -23,7 +23,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "7b4089cd4fbb4e17"
+      "sha256_16": "f05f40a3ffef8667"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "25fb9a38f1eca0f9"
+      "sha256_16": "074cd6b417373229"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "4582c1d2695a5f76"
+      "sha256_16": "a0779aacf97f4beb"
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
