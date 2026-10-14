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
  evaluateO2LinkReadIntegrity,
  isCognitiveReceiptRowKind,
  isP6O2QaLinkTargetEligible,
  validateLedgerRowForAppend,
  type O2LinkReadDiagnostic,
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
  /** True ONLY when integrity === HEALTHY. Never true under corruption/semantic/duplicate/O2-link defects. */
  integrityPass: boolean;
  integrity: P6LedgerIntegrityStatus;
  absolutePath: string;
  rows: P6EvidenceLedgerRow[];
  parseErrors: number;
  structureErrors: number;
  /** v2 incomplete / unknown-kind semantic defects (bytes preserved). */
  semanticErrors: number;
  /** O2 linkedQaRunId defects (orphan / kind / campaign / scenario / cardinality). */
  o2LinkErrors: number;
  o2LinkDiagnostics: O2LinkReadDiagnostic[];
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

function emptyO2LinkFields(): Pick<
  ReadP6EvidenceLedgerResult,
  "o2LinkErrors" | "o2LinkDiagnostics"
> {
  return { o2LinkErrors: 0, o2LinkDiagnostics: [] };
}

/**
 * Read-only ledger open. Never rewrites. Never silently repairs.
 * v2 cognitive receipts are validated with the same schema as writes;
 * incomplete v2 / unknown kinds set integrityPass=false (DEGRADED).
 * Duplicate runIds (even among individually valid rows) set integrityPass=false.
 * O2 linkedQaRunId orphans / cardinality / campaign-scenario mismatches → DEGRADED.
 * All matching rows are preserved — never silently pick one as truth.
 * Historical campaign rows keep their historical completeness level.
 * Unlinked historical receipts remain readable without O2 promotion.
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
        ...emptyO2LinkFields(),
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
      ...emptyO2LinkFields(),
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
      ...emptyO2LinkFields(),
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
      ...emptyO2LinkFields(),
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

  const o2 = evaluateO2LinkReadIntegrity(rows);

  const defects =
    parseErrors > 0 ||
    structureErrors > 0 ||
    semanticErrors > 0 ||
    partialTrailing ||
    duplicateRunIds.length > 0 ||
    o2.o2LinkErrors > 0;

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
      o2LinkErrors: 0,
      o2LinkDiagnostics: [],
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
    if (o2.o2LinkErrors > 0) {
      reasons.push(
        `O2 link defects: ${o2.diagnostics.map((d) => d.code).join(",")}`,
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
      o2LinkErrors: o2.o2LinkErrors,
      o2LinkDiagnostics: o2.diagnostics,
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
    o2LinkErrors: o2.o2LinkErrors,
    o2LinkDiagnostics: o2.diagnostics,
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

export function findP6EvidenceLedgerRowsByLinkedQaRunId(
  linkedQaRunId: string,
  options?: { absolutePath?: string },
): {
  ok: boolean;
  integrityPass: boolean;
  integrity: P6LedgerIntegrityStatus;
  matches: P6EvidenceLedgerRow[];
  absolutePath: string;
  o2LinkDiagnostics: O2LinkReadDiagnostic[];
  error?: string;
} {
  const read = readP6EvidenceLedger({
    absolutePath: options?.absolutePath,
    allowMissing: true,
  });
  const matches = read.rows.filter(
    (r) =>
      isCognitiveReceiptRowKind(r.kind) && r.linkedQaRunId === linkedQaRunId,
  );
  return {
    ok: read.ok,
    integrityPass: read.integrityPass,
    integrity: read.integrity,
    matches,
    absolutePath: read.absolutePath,
    o2LinkDiagnostics: read.o2LinkDiagnostics,
    error: read.error,
  };
}

export type P6O2LinkedPairResult =
  | {
      ok: true;
      integrityPass: boolean;
      integrity: P6LedgerIntegrityStatus;
      absolutePath: string;
      qaRow: P6EvidenceLedgerRow;
      receiptRow: P6EvidenceLedgerRow | null;
      cardinality: "qa_only" | "qa_plus_one_receipt";
    }
  | {
      ok: false;
      code: string;
      message: string;
      integrityPass: boolean;
      integrity: P6LedgerIntegrityStatus;
      absolutePath: string;
      qaRow?: P6EvidenceLedgerRow;
      receiptRows?: P6EvidenceLedgerRow[];
      o2LinkDiagnostics?: O2LinkReadDiagnostic[];
    };

/**
 * Reopen and resolve the O2 pair for a QA runId (0..1 linked receipt).
 * Never silently selects among multiple linked receipts.
 */
export function resolveP6O2LinkedEvidencePair(
  qaRunId: string,
  options?: { absolutePath?: string },
): P6O2LinkedPairResult {
  const read = readP6EvidenceLedger({
    absolutePath: options?.absolutePath,
    allowMissing: true,
  });
  const qaMatches = read.rows.filter((r) => r.runId === qaRunId);
  if (qaMatches.length === 0) {
    return {
      ok: false,
      code: "O2_QA_NOT_FOUND",
      message: `QA runId not found: ${qaRunId}`,
      integrityPass: read.integrityPass,
      integrity: read.integrity,
      absolutePath: read.absolutePath,
      o2LinkDiagnostics: read.o2LinkDiagnostics,
    };
  }
  if (qaMatches.length > 1) {
    return {
      ok: false,
      code: "O2_QA_DUPLICATE",
      message: `duplicate QA runId: ${qaRunId}`,
      integrityPass: false,
      integrity: read.integrity,
      absolutePath: read.absolutePath,
      receiptRows: qaMatches,
      o2LinkDiagnostics: read.o2LinkDiagnostics,
    };
  }
  const qaRow = qaMatches[0]!;
  if (!isP6O2QaLinkTargetEligible(qaRow)) {
    return {
      ok: false,
      code: "O2_TARGET_NOT_QA",
      message:
        "runId does not address an O2-eligible QA campaign result (not admin/diagnostic/cognitive)",
      integrityPass: false,
      integrity: read.integrity,
      absolutePath: read.absolutePath,
      qaRow,
      o2LinkDiagnostics: read.o2LinkDiagnostics,
    };
  }
  const receiptRows = read.rows.filter(
    (r) =>
      isCognitiveReceiptRowKind(r.kind) && r.linkedQaRunId === qaRunId,
  );
  if (receiptRows.length > 1) {
    return {
      ok: false,
      code: "O2_LINK_CARDINALITY",
      message: `expected 0..1 receipt for QA run; found ${receiptRows.length}`,
      integrityPass: false,
      integrity: read.integrity === "HEALTHY" ? "DEGRADED" : read.integrity,
      absolutePath: read.absolutePath,
      qaRow,
      receiptRows,
      o2LinkDiagnostics: read.o2LinkDiagnostics,
    };
  }
  return {
    ok: true,
    integrityPass: read.integrityPass,
    integrity: read.integrity,
    absolutePath: read.absolutePath,
    qaRow,
    receiptRow: receiptRows[0] ?? null,
    cardinality: receiptRows.length === 0 ? "qa_only" : "qa_plus_one_receipt",
  };
}
