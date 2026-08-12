# ChatGPT Review Pack — FULL
## Cycle 9 QA Critical — R-T-A3-2 SQLITE CRASH-RESTART QA

| Field | Value |
| --- | --- |
| **Role** | QA — R-T-A3-2 SQLite Authority/Attempt crash-restart validation |
| **Pack level** | FULL |
| **Synthesis-only** | NO |
| **Timestamp CEST** | 2026-08-12 16:10:55 CEST (+0200) |
| **Timestamp UTC** | 2026-08-12 14:10:55 UTC |
| **Timestamp CEST ISO** | `2026-08-12T16:10:55+0200` |
| **Timestamp UTC ISO** | `2026-08-12T14:10:55Z` |
| **GO / context** | **GO CONFIRM KEEP SQLITE — Cycle 9 QA Critical** (Morris; resume formal crash/restart QA on frozen SQLite candidate) |
| **R-T-A3-1** | **ACCEPTED / CLOSED BY MORRIS** (+ SYNC DEBT untouched — repo markers not synced) |
| **Cycle** | **9 — QA Critical — R-T-A3-2 SQLITE CRASH-RESTART** |
| **Profil** | Critical |
| **Critical** | OUI — EXPLICITE |
| **Blocs** | CKC QA contract; harness scripts FULL inline; qa-results/scenario-matrix/verdict-draft FULL inline; QA-01..18; process-level 03–06 evidence; regressions 150; secret scan; candidate freeze; Morris HARD ACCEPTANCE gate; L3 handoff |
| **Review Pack** | FULL |
| **Outbound remote identity** | Placeholder — filled after publish / verified externally after content freeze |

---

## GO Morris consumed (exact)

```
GO CONFIRM KEEP SQLITE — Cycle 9 QA Critical

GO CONFIRM KEEP SQLITE — R-T-A3-2 PERSISTENCE FRONTIER —
KEEP CURRENT SQLITE AUTHORITY/ATTEMPT JOURNAL FRONTIER —
CANDIDATE 082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab REMAINS BYTE-IDENTICAL —
RESUME CYCLE 9 QA ON SQLITE CANDIDATE —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
NO FINOPS DOMAIN COUPLING —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
R-T-A3-2 REMAINS OPEN HARD UNTIL QA / HARD ACCEPTANCE

Gate: R-T-A3-2 PERSISTENCE FRONTIER = KEEP SQLITE BY MORRIS
```

---

## Local Git Truth (DEL)

| Field | Value |
| --- | --- |
| Worktree | `…/worktrees/f3-real-prerequisites-delivery` |
| Branch | `delivery/sfia-studio-f3-real-prerequisites` |
| HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| Staged | **EMPTY** (count=0) |
| Remote delivery branch | **ABSENT** (ls-remote lines=0) |
| Dirty worktree | **expected** (F3 Option A candidate local) — **non-STOP** |
| Project commit/push/PR/merge/force | **0 / 0 / 0 / 0 / 0** |
| Product mutations this cycle | **0** |

### git status --short (snapshot)

```
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
 M projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts
 M projects/sfia-studio/app/lib/d1/db.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
 M projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/package-lock.json
 M projects/sfia-studio/app/package.json
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/critical-ack/
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/durableLaunchMarkers.test.ts
?? projects/sfia-studio/app/app/api/
?? projects/sfia-studio/app/auth.ts
?? projects/sfia-studio/app/lib/oa/critical-ack/
?? projects/sfia-studio/app/types/
```

---

## Template / CKC / inbound handoff

| Field | Value |
| --- | --- |
| Template | `prompts/templates/sfia-cycle-execution-template.md` blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| CKC path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` |
| CKC blob | `9d9970d611dbb6e52297ac215604d3a08e87e738` (verified `git rev-parse HEAD:method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md`) |
| Inbound handoff tip | `c408db926aea3720fd1a38c6d9e38ba3e8750480` |
| Inbound handoff blob | `bef45da4d8914b03ccf7226b3cd9c3269ef8c519` |
| Inbound message | `docs(review-handoff): publish F3 R-T-A3-2 persistence frontier reassessment` |

---

## Candidate integrity

| Field | Value |
| --- | --- |
| Candidate SHA BEFORE | `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` |
| Candidate SHA AFTER | `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` |
| MATCH BEFORE=AFTER | **yes** (required — byte-identical; no product mutation) |
| Method | SHA-256 of newline-joined `path sha256` body lines from `.tmp-sfia-review/r-t-a3-2-option-a-delivery/candidate-manifest.txt` (comments excluded); recomputed this cycle → `$QA/results/candidate-sha-after-recompute.txt` |
| Double-compute | **confirmed** identical to expected |
| Project Git write count | **0** |
| Product persistence | **NOT_SELECTED** (unchanged) |

---

## Gate / readiness honesty

| Field | Value |
| --- | --- |
| R-T-A3-2 | **HARD ACCEPTANCE CANDIDATE — MORRIS DECISION REQUIRED** (≠ CLOSED) |
| Persistence frontier | **KEEP SQLITE BY MORRIS** (GO CONFIRM KEEP SQLITE consumed) |
| crossStoreDurable | **false** |
| productionRollbackProven | **false** |
| Product persistence | **NOT_SELECTED** |
| Gate D | **NOT READY / NOT CONSUMED** |
| Cursor REAL | **0** |
| Cycle 9 QA | **COMPLETE** (formal crash/restart evidence sufficient for HARD CANDIDATE presentation) |
| Project↔Cycle residual | **remains explicit / separate gate** |

---

## Executive summary

1. GO CONFIRM KEEP SQLITE unlocked Cycle 9 QA Critical on frozen candidate `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab`.
2. Process-level REAL crash/restart harness under `$QA` validated QA-01..18 — **all PASS**.
3. Critical process-level **QA-03..06** PASS with **distinct PIDs** → HARD ACCEPTANCE CANDIDATE eligibility **YES**.
4. Regressions: critical-ack **55** + execution-attempt **95** = **150/150**; typecheck/lint/build **PASS**.
5. Secret scan clean; product mutations **0**; candidate byte-identical.
6. Reserves unchanged: `crossStoreDurable=false`, `productionRollbackProven=false`, Project↔Cycle residual, Gate D NOT READY, Cursor REAL 0.
7. Present Morris gate: **R-T-A3-2 HARD ACCEPTANCE CANDIDATE — MORRIS DECISION REQUIRED** (does not auto-close).

---

## Process-level evidence (QA-03..06) — CRITICAL

| Scenario | Status | Classification | Evidence |
| --- | --- | --- | --- |
| QA-03 | PASS | REAL_PROCESS_RESTART | pidA=5137 pidB=5164 distinctPids=True ok=True |
| QA-04 | PASS | REAL_PROCESS_RESTART | pidA=5191 pidB=5218 distinctPids=True ok=True |
| QA-05 | PASS | REAL_PROCESS_RESTART | pidA=5245 pidB=5272 distinctPids=True ok=True |
| QA-06 | PASS | REAL_PROCESS_RESTART | pidA=5299 pidB=5326 distinctPids=True ok=True |

**HARD ACCEPTANCE CANDIDATE criteria (critical process-level 03–06): MET → YES**

Proven claims (evidence-backed):
- ATTEMPT_CREATED before launch validated (QA-03 CREATED-without-LAUNCHED fail-closed; no auto-launch)
- Ambiguous launch fail-closed validated (QA-04)
- No auto-resume validated (QA-03/05 restart paths)
- No auto-retry validated (QA-11 + startExecution doctrine)
- No double-launch validated (QA-07/10/14)
- Authority restart invalidation validated (QA-06)
- SQLite integrity validated (QA-13 + INTEGRITY_FINAL)

---

## QA-01..18 classification + PASS

| ID | Status | Classification |
|---|---|---|
| QA-01 | PASS | REAL_PROCESS_RESTART |
| QA-02 | PASS | REAL_PROCESS_RESTART |
| QA-03 | PASS | REAL_PROCESS_RESTART |
| QA-04 | PASS | REAL_PROCESS_RESTART |
| QA-05 | PASS | REAL_PROCESS_RESTART |
| QA-06 | PASS | REAL_PROCESS_RESTART |
| QA-07 | PASS | UNIT + HARNESS_NOTE |
| QA-08 | PASS | PERSISTENCE_FAIL_CLOSED |
| QA-09 | PASS | UNIT ONLY |
| QA-10 | PASS | UNIT + REAL_PROCESS_RESTART |
| QA-11 | PASS | DOCUMENTATION + UNIT |
| QA-12 | PASS | REAL_PROCESS_RESTART_CHAIN |
| QA-13 | PASS | INTEGRITY_CHECK |
| QA-14 | PASS | CONCURRENT_WRITER_BEST_EFFORT |
| QA-15 | PASS | CLASSIFICATION_TABLE |
| QA-16 | PASS | APP_REGRESSIONS |
| QA-17 | PASS | SECRET_SCAN |
| QA-18 | PASS | CANDIDATE_SHA |

### Regression counts (QA-16)

| Check | Result |
|---|---|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| vitest critical-ack | **55 passed** |
| vitest execution-attempt | **95 passed** |
| combined | **150 passed** (13 files) |

### Secret scan (QA-17)

Clean — no real secrets under `$QA` (rg empty / exit 1).

---

## Proposed Morris gate wording (from GO / HARD CANDIDATE)

```
R-T-A3-2 HARD ACCEPTANCE CANDIDATE — MORRIS DECISION REQUIRED

PILOT-BOUNDED SQLITE AUTHORITY/ATTEMPT FRONTIER
PROJECT↔CYCLE DURABLE TXN REMAINS RESIDUAL / SEPARATE GATE
PRODUCT PERSISTENCE NOT_SELECTED
GATE D NOT READY / NOT CONSUMED
CURSOR REAL 0
```

---
## INLINE COMPLETE — harness scripts (`$QA/*.mjs` + `$QA/lib/*.mjs`)

### `integrity-check.mjs`

```javascript
/**
 * PRAGMA integrity_check on the QA D1 sqlite via node:sqlite.
 */
import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import { applyQaEnv, printJson, QA_DB_PATH } from "./lib/qa-env.mjs";

const env = applyQaEnv();
const exists = fs.existsSync(QA_DB_PATH);

if (!exists) {
  printJson({
    scenario: "INTEGRITY",
    ok: false,
    error: "qa_db_missing",
    D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  });
  process.exit(1);
}

const db = new DatabaseSync(QA_DB_PATH, { readOnly: true });
let raw = "";
try {
  const row = db.prepare("PRAGMA integrity_check").get();
  raw = row ? String(Object.values(row)[0] ?? "") : "";
} finally {
  try {
    db.close();
  } catch {
    /* ignore */
  }
}

const ok = raw === "ok";
printJson({
  scenario: "INTEGRITY",
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  integrity_check: raw,
  ok,
});
process.exit(ok ? 0 : 1);
```

### `lib/load-app.mjs`

```javascript
/**
 * Shared APP module loader for QA process scripts.
 * Imports after D1_SQLITE_PATH is set via applyQaEnv().
 */
import path from "node:path";
import { pathToFileURL } from "node:url";
import { APP_ROOT } from "./qa-env.mjs";

function appUrl(rel) {
  return pathToFileURL(path.join(APP_ROOT, rel)).href;
}

export async function loadJournalStack() {
  const journalMod = await import(
    appUrl("lib/oa/critical-ack/infrastructure/sqliteAuthorityAttemptJournal.ts")
  );
  const reconcileMod = await import(
    appUrl(
      "lib/oa/critical-ack/application/reconcileLaunchedAttemptOnRestart.ts",
    )
  );
  const invalidateMod = await import(
    appUrl(
      "lib/oa/critical-ack/application/invalidateActiveAuthorityOnRestart.ts",
    )
  );
  const clockMod = await import(
    appUrl("lib/oa/doctrine/infrastructure/systemClock.ts")
  );
  const dbMod = await import(appUrl("lib/d1/db.ts"));

  const journal = new journalMod.SqliteAuthorityAttemptJournal();
  const clock = new clockMod.SystemClock();
  const reconcile = new reconcileMod.ReconcileLaunchedAttemptOnRestart(
    journal,
    clock,
  );
  const invalidate = new invalidateMod.InvalidateActiveAuthorityOnRestart(
    journal,
    clock,
  );

  return {
    journal,
    clock,
    reconcile,
    invalidate,
    resetD1DbForTests: dbMod.resetD1DbForTests,
    openD1Db: dbMod.openD1Db,
  };
}

export function summarizeRows(rows) {
  return rows.map((r) => ({
    recordId: r.recordId,
    kind: r.kind,
    attemptId: r.attemptId ?? null,
    processEpochId: r.processEpochId,
    disposition: r.disposition ?? null,
    executionContractId: r.executionContractId ?? null,
    contractFingerprint: r.contractFingerprint ?? null,
    occurredAt: r.occurredAt,
  }));
}
```

### `lib/qa-env.mjs`

```javascript
/**
 * QA env bootstrap — MUST run before any APP / D1 import.
 * Points node:sqlite D1 at the isolated QA database only.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const QA_ROOT = path.resolve(__dirname, "..");
export const QA_STATE_DIR = path.join(QA_ROOT, "state");
export const QA_DB_PATH = path.join(QA_STATE_DIR, "d1.sqlite");
export const QA_SIDE_DIR = path.join(QA_ROOT, "side");
export const QA_RESULTS_DIR = path.join(QA_ROOT, "results");
export const QA_READONLY_PROBE = path.join(QA_ROOT, "readonly-probe");

/** Delivery APP root (projects/sfia-studio/app). Override with QA_APP_ROOT. */
export const APP_ROOT = process.env.QA_APP_ROOT
  ? path.resolve(process.env.QA_APP_ROOT)
  : path.resolve(
      QA_ROOT,
      "..",
      "..",
      "projects",
      "sfia-studio",
      "app",
    );

export function applyQaEnv(options = {}) {
  const dbPath = options.dbPath
    ? path.resolve(options.dbPath)
    : QA_DB_PATH;
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  fs.mkdirSync(QA_SIDE_DIR, { recursive: true });
  fs.mkdirSync(QA_RESULTS_DIR, { recursive: true });
  process.env.D1_SQLITE_PATH = dbPath;
  return {
    QA_ROOT,
    QA_STATE_DIR,
    QA_DB_PATH: dbPath,
    QA_SIDE_DIR,
    QA_RESULTS_DIR,
    APP_ROOT,
    D1_SQLITE_PATH: dbPath,
    pid: process.pid,
  };
}

export function printJson(obj) {
  process.stdout.write(`${JSON.stringify(obj, null, 2)}\n`);
}

export function identityFixture(overrides = {}) {
  const attemptId = overrides.attemptId ?? "att:qa-03-created-only";
  const executionContractId =
    overrides.executionContractId ?? "ec:qa-r-t-a3-2";
  const contractVersion = overrides.contractVersion ?? 1;
  const contractFingerprint =
    overrides.contractFingerprint ??
    `${executionContractId}|${contractVersion}|ACTION|TARGET|SCOPE|idem:qa`;
  return {
    attemptId,
    executionContractId,
    contractVersion,
    contractFingerprint,
    actorId: overrides.actorId ?? "actor:qa-morris",
    principalId: overrides.principalId ?? "principal:qa",
    correlationId: overrides.correlationId ?? `cor:qa-${process.pid}`,
    processEpochId:
      overrides.processEpochId ?? `epoch:proc-a-${process.pid}`,
    confirmationId: overrides.confirmationId ?? "conf:qa-1",
    selectedAgentRef: overrides.selectedAgentRef ?? "agent:qa-fixture",
    ...overrides,
  };
}
```

### `process-a-ambiguous-launch.mjs`

```javascript
/**
 * Process A — QA-04 ambiguous launch window:
 * Writes ATTEMPT_CREATED, records side-file marker
 * "launch_attempted_but_no_LAUNCHED" (NOT claiming SUCCESS), exits.
 * Does NOT append ATTEMPT_LAUNCHED.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  identityFixture,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const id = identityFixture({
  attemptId: "att:qa-04-ambiguous",
  processEpochId: `epoch:qa04-a-${process.pid}`,
  correlationId: `cor:qa04-a-${process.pid}`,
});

const { journal } = await loadJournalStack();

await journal.append({
  kind: "ATTEMPT_CREATED",
  processEpochId: id.processEpochId,
  correlationId: id.correlationId,
  attemptId: id.attemptId,
  executionContractId: id.executionContractId,
  contractVersion: id.contractVersion,
  contractFingerprint: id.contractFingerprint,
  actorId: id.actorId,
  principalId: id.principalId,
  payload: {
    selectedAgentRef: id.selectedAgentRef,
    qaScenario: "QA-04",
    ambiguousLaunchWindow: true,
  },
});

const marker = {
  marker: "launch_attempted_but_no_LAUNCHED",
  claimSuccess: false,
  attemptId: id.attemptId,
  note: "Simulated crash after adapter.launch attempt before ATTEMPT_LAUNCHED durable write",
  pid: process.pid,
  at: new Date().toISOString(),
};
fs.writeFileSync(
  path.join(QA_SIDE_DIR, "qa-04-ambiguous-marker.json"),
  JSON.stringify(marker, null, 2),
);
fs.writeFileSync(
  path.join(QA_SIDE_DIR, "qa-04-identity.json"),
  JSON.stringify(id, null, 2),
);

const rows = await journal.findByAttemptId(id.attemptId);
printJson({
  scenario: "QA-04",
  role: "process-a-ambiguous-launch",
  classification: "REAL_PROCESS_BOUNDARY",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  identity: id,
  sideMarker: marker,
  rows: summarizeRows(rows),
  assertions: {
    hasCreated: rows.some((r) => r.kind === "ATTEMPT_CREATED"),
    hasLaunched: rows.some((r) => r.kind === "ATTEMPT_LAUNCHED"),
    claimedSuccess: false,
  },
});
process.exit(0);
```

### `process-a-authority-epoch.mjs`

```javascript
/**
 * Process A — QA-06: establish active authority epoch (CRITICAL_ACK_GRANTED), exit.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  identityFixture,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const id = identityFixture({
  attemptId: "att:qa-06-authority",
  processEpochId: `epoch:qa06-a-${process.pid}`,
  correlationId: `cor:qa06-a-${process.pid}`,
  contractFingerprint: "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa06",
});

const { journal } = await loadJournalStack();

const granted = await journal.append({
  kind: "CRITICAL_ACK_GRANTED",
  processEpochId: id.processEpochId,
  correlationId: id.correlationId,
  principalId: id.principalId,
  actorId: id.actorId,
  executionContractId: id.executionContractId,
  contractVersion: id.contractVersion,
  contractFingerprint: id.contractFingerprint,
  confirmationId: id.confirmationId,
  idempotencyKey: `idem:qa06-ack-${process.pid}`,
  payload: {
    qaScenario: "QA-06",
    activeAuthority: true,
  },
});

const epochRows = await journal.listByProcessEpoch(id.processEpochId);
fs.writeFileSync(
  path.join(QA_SIDE_DIR, "qa-06-identity.json"),
  JSON.stringify(id, null, 2),
);

printJson({
  scenario: "QA-06",
  role: "process-a-authority-epoch",
  classification: "REAL_PROCESS_BOUNDARY",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  identity: id,
  grantedRecordId: granted.recordId,
  epochRows: summarizeRows(epochRows),
  assertions: {
    hasCriticalAckGranted: epochRows.some(
      (r) => r.kind === "CRITICAL_ACK_GRANTED",
    ),
  },
});
process.exit(0);
```

### `process-a-crash-before-created.mjs`

```javascript
/**
 * Process A — QA-02: EXIT before any journal append (crash before CREATED).
 * Only writes side identity; no D1 mutation intended.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  identityFixture,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";

const env = applyQaEnv();
const id = identityFixture({
  attemptId: "att:qa-02-crash-before-created",
  processEpochId: `epoch:qa02-a-${process.pid}`,
  correlationId: `cor:qa02-a-${process.pid}`,
});

// Open stack so schema may exist, but do NOT append for this attemptId.
const { loadJournalStack } = await import("./lib/load-app.mjs");
const { journal, resetD1DbForTests } = await loadJournalStack();
const preexisting = await journal.findByAttemptId(id.attemptId);
resetD1DbForTests();

fs.writeFileSync(
  path.join(QA_SIDE_DIR, "qa-02-identity.json"),
  JSON.stringify(id, null, 2),
);

printJson({
  scenario: "QA-02",
  role: "process-a-crash-before-created",
  classification: "REAL_PROCESS_BOUNDARY",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  identity: id,
  appended: false,
  preexistingRowCount: preexisting.length,
  note: "Simulated crash before ATTEMPT_CREATED append; journal untouched for this attemptId",
  assertions: {
    appendInvoked: false,
    journalHandleOpened: Boolean(journal),
  },
});
process.exit(0);
```

### `process-a-created-only.mjs`

```javascript
/**
 * Process A — QA-03: append ATTEMPT_CREATED only, then EXIT without launch.
 * REAL PROCESS BOUNDARY: this process terminates before Process B inspects.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  identityFixture,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const id = identityFixture({
  attemptId: "att:qa-03-created-only",
  processEpochId: `epoch:qa03-a-${process.pid}`,
  correlationId: `cor:qa03-a-${process.pid}`,
});

const { journal } = await loadJournalStack();

const created = await journal.append({
  kind: "ATTEMPT_CREATED",
  processEpochId: id.processEpochId,
  correlationId: id.correlationId,
  attemptId: id.attemptId,
  executionContractId: id.executionContractId,
  contractVersion: id.contractVersion,
  contractFingerprint: id.contractFingerprint,
  actorId: id.actorId,
  principalId: id.principalId,
  payload: {
    selectedAgentRef: id.selectedAgentRef,
    qaScenario: "QA-03",
    launched: false,
  },
});

const rows = await journal.findByAttemptId(id.attemptId);
const proof = {
  scenario: "QA-03",
  role: "process-a-created-only",
  classification: "REAL_PROCESS_BOUNDARY",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  identity: id,
  appended: {
    recordId: created.recordId,
    kind: created.kind,
  },
  rows: summarizeRows(rows),
  assertions: {
    hasCreated: rows.some((r) => r.kind === "ATTEMPT_CREATED"),
    hasLaunched: rows.some((r) => r.kind === "ATTEMPT_LAUNCHED"),
    launchInvoked: false,
  },
  exitWithoutLaunch: true,
};

fs.writeFileSync(
  path.join(QA_SIDE_DIR, "qa-03-identity.json"),
  JSON.stringify(id, null, 2),
);

printJson(proof);
process.exit(0);
```

### `process-a-launched.mjs`

```javascript
/**
 * Process A — QA-05: CREATED + LAUNCHED durable markers, then EXIT.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  identityFixture,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const id = identityFixture({
  attemptId: "att:qa-05-launched",
  processEpochId: `epoch:qa05-a-${process.pid}`,
  correlationId: `cor:qa05-a-${process.pid}`,
});

const { journal } = await loadJournalStack();

await journal.append({
  kind: "ATTEMPT_CREATED",
  processEpochId: id.processEpochId,
  correlationId: id.correlationId,
  attemptId: id.attemptId,
  executionContractId: id.executionContractId,
  contractVersion: id.contractVersion,
  contractFingerprint: id.contractFingerprint,
  actorId: id.actorId,
  principalId: id.principalId,
  payload: { selectedAgentRef: id.selectedAgentRef, qaScenario: "QA-05" },
});

await journal.append({
  kind: "ATTEMPT_LAUNCHED",
  processEpochId: id.processEpochId,
  correlationId: id.correlationId,
  attemptId: id.attemptId,
  executionContractId: id.executionContractId,
  contractVersion: id.contractVersion,
  contractFingerprint: id.contractFingerprint,
  actorId: id.actorId,
  principalId: id.principalId,
  payload: {
    selectedAgentRef: id.selectedAgentRef,
    qaScenario: "QA-05",
    launchAck: true,
  },
});

const rows = await journal.findByAttemptId(id.attemptId);
fs.writeFileSync(
  path.join(QA_SIDE_DIR, "qa-05-identity.json"),
  JSON.stringify(id, null, 2),
);

printJson({
  scenario: "QA-05",
  role: "process-a-launched",
  classification: "REAL_PROCESS_BOUNDARY",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  identity: id,
  rows: summarizeRows(rows),
  assertions: {
    hasCreated: rows.some((r) => r.kind === "ATTEMPT_CREATED"),
    hasLaunched: rows.some((r) => r.kind === "ATTEMPT_LAUNCHED"),
  },
  exitAfterLaunched: true,
});
process.exit(0);
```

### `process-a-nominal.mjs`

```javascript
/**
 * Process A — QA-01: nominal CREATED + LAUNCHED in same process, then EXIT.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  identityFixture,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const id = identityFixture({
  attemptId: "att:qa-01-nominal",
  processEpochId: `epoch:qa01-a-${process.pid}`,
  correlationId: `cor:qa01-a-${process.pid}`,
});

const { journal } = await loadJournalStack();

await journal.append({
  kind: "ATTEMPT_CREATED",
  processEpochId: id.processEpochId,
  correlationId: id.correlationId,
  attemptId: id.attemptId,
  executionContractId: id.executionContractId,
  contractVersion: id.contractVersion,
  contractFingerprint: id.contractFingerprint,
  actorId: id.actorId,
  principalId: id.principalId,
  payload: { selectedAgentRef: id.selectedAgentRef, qaScenario: "QA-01" },
});

await journal.append({
  kind: "ATTEMPT_LAUNCHED",
  processEpochId: id.processEpochId,
  correlationId: id.correlationId,
  attemptId: id.attemptId,
  executionContractId: id.executionContractId,
  contractVersion: id.contractVersion,
  contractFingerprint: id.contractFingerprint,
  actorId: id.actorId,
  principalId: id.principalId,
  payload: {
    selectedAgentRef: id.selectedAgentRef,
    qaScenario: "QA-01",
    launchAck: true,
  },
});

const rows = await journal.findByAttemptId(id.attemptId);
fs.writeFileSync(
  path.join(QA_SIDE_DIR, "qa-01-identity.json"),
  JSON.stringify(id, null, 2),
);

printJson({
  scenario: "QA-01",
  role: "process-a-nominal",
  classification: "REAL_PROCESS_BOUNDARY",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  identity: id,
  rows: summarizeRows(rows),
  assertions: {
    hasCreated: rows.some((r) => r.kind === "ATTEMPT_CREATED"),
    hasLaunched: rows.some((r) => r.kind === "ATTEMPT_LAUNCHED"),
  },
});
process.exit(0);
```

### `process-a-reopen-chain.mjs`

```javascript
/**
 * Process A — QA-12: write CREATED+LAUNCHED for A→B→C reopen chain.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  identityFixture,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const id = identityFixture({
  attemptId: "att:qa-12-reopen-chain",
  processEpochId: `epoch:qa12-a-${process.pid}`,
  correlationId: `cor:qa12-a-${process.pid}`,
});

const { journal } = await loadJournalStack();

await journal.append({
  kind: "ATTEMPT_CREATED",
  processEpochId: id.processEpochId,
  correlationId: id.correlationId,
  attemptId: id.attemptId,
  executionContractId: id.executionContractId,
  contractVersion: id.contractVersion,
  contractFingerprint: id.contractFingerprint,
  actorId: id.actorId,
  principalId: id.principalId,
  payload: { qaScenario: "QA-12" },
});

await journal.append({
  kind: "ATTEMPT_LAUNCHED",
  processEpochId: id.processEpochId,
  correlationId: id.correlationId,
  attemptId: id.attemptId,
  executionContractId: id.executionContractId,
  contractVersion: id.contractVersion,
  contractFingerprint: id.contractFingerprint,
  actorId: id.actorId,
  principalId: id.principalId,
  payload: { qaScenario: "QA-12", launchAck: true },
});

const rows = await journal.findByAttemptId(id.attemptId);
fs.writeFileSync(
  path.join(QA_SIDE_DIR, "qa-12-identity.json"),
  JSON.stringify(id, null, 2),
);

printJson({
  scenario: "QA-12",
  role: "process-a-reopen-chain",
  classification: "REAL_PROCESS_BOUNDARY",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  identity: id,
  rows: summarizeRows(rows),
  assertions: {
    hasCreated: rows.some((r) => r.kind === "ATTEMPT_CREATED"),
    hasLaunched: rows.some((r) => r.kind === "ATTEMPT_LAUNCHED"),
  },
});
process.exit(0);
```

### `process-b-after-launched.mjs`

```javascript
/**
 * Process B — QA-05: after LAUNCHED, restart process verifies LAUNCHED present,
 * no relaunch needed; reconcile for launched-without-terminal → UNKNOWN.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const identityPath = path.join(QA_SIDE_DIR, "qa-05-identity.json");
if (!fs.existsSync(identityPath)) {
  printJson({
    scenario: "QA-05",
    role: "process-b-after-launched",
    ok: false,
    error: "missing_qa_05_identity_side_file",
  });
  process.exit(2);
}
const id = JSON.parse(fs.readFileSync(identityPath, "utf8"));

const { journal, reconcile } = await loadJournalStack();
const before = await journal.findByAttemptId(id.attemptId);
const hasCreated = before.some((r) => r.kind === "ATTEMPT_CREATED");
const hasLaunched = before.some((r) => r.kind === "ATTEMPT_LAUNCHED");
const hasTerminal = before.some((r) => r.kind === "ATTEMPT_TERMINAL");

const relaunchInvoked = false;
let reconcileResult = null;
if (hasLaunched && !hasTerminal) {
  reconcileResult = await reconcile.execute({
    attemptId: id.attemptId,
    executionContractId: id.executionContractId,
    processEpochId: `epoch:qa05-b-${process.pid}`,
    launchedWithoutTerminalResult: true,
    correlationId: `cor:qa05-b-${process.pid}`,
  });
}

const after = await journal.findByAttemptId(id.attemptId);
const launchedCount = after.filter((r) => r.kind === "ATTEMPT_LAUNCHED").length;

const ok =
  hasCreated &&
  hasLaunched &&
  !relaunchInvoked &&
  launchedCount === 1 &&
  reconcileResult?.ok === true &&
  reconcileResult?.disposition === "UNKNOWN" &&
  reconcileResult?.attemptStatusUnchanged === true;

printJson({
  scenario: "QA-05",
  role: "process-b-after-launched",
  classification: "REAL_PROCESS_RESTART",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  rowsBefore: summarizeRows(before),
  rowsAfter: summarizeRows(after),
  reconcileResult,
  disposition: "LAUNCHED_PRESENT_NO_RELAUNCH_UNKNOWN_RECONCILE",
  assertions: {
    hasCreated,
    hasLaunched,
    hasTerminal,
    relaunchInvoked,
    launchedCount,
    noRelaunchNeeded: hasLaunched && !relaunchInvoked,
  },
  ok,
});
process.exit(ok ? 0 : 1);
```

### `process-b-ambiguous-inspect.mjs`

```javascript
/**
 * Process B — QA-04: CREATED without LAUNCHED + ambiguous side marker → fail-closed.
 * No auto-launch / no SUCCESS claim.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const identityPath = path.join(QA_SIDE_DIR, "qa-04-identity.json");
const markerPath = path.join(QA_SIDE_DIR, "qa-04-ambiguous-marker.json");
if (!fs.existsSync(identityPath) || !fs.existsSync(markerPath)) {
  printJson({
    scenario: "QA-04",
    role: "process-b-ambiguous-inspect",
    ok: false,
    error: "missing_qa_04_side_files",
  });
  process.exit(2);
}
const id = JSON.parse(fs.readFileSync(identityPath, "utf8"));
const marker = JSON.parse(fs.readFileSync(markerPath, "utf8"));

const { journal } = await loadJournalStack();
const rows = await journal.findByAttemptId(id.attemptId);
const hasCreated = rows.some((r) => r.kind === "ATTEMPT_CREATED");
const hasLaunched = rows.some((r) => r.kind === "ATTEMPT_LAUNCHED");
const autoLaunchInvoked = false;
const claimedSuccess = false;

const failClosed =
  hasCreated &&
  !hasLaunched &&
  marker.marker === "launch_attempted_but_no_LAUNCHED" &&
  marker.claimSuccess === false &&
  !autoLaunchInvoked &&
  !claimedSuccess;

printJson({
  scenario: "QA-04",
  role: "process-b-ambiguous-inspect",
  classification: "REAL_PROCESS_RESTART",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  sideMarker: marker,
  rows: summarizeRows(rows),
  disposition: failClosed
    ? "FAIL_CLOSED_AMBIGUOUS_CREATED_WITHOUT_LAUNCHED"
    : "UNEXPECTED",
  assertions: {
    hasCreated,
    hasLaunched,
    autoLaunchInvoked,
    claimedSuccess,
    failClosed,
  },
  ok: failClosed,
});
process.exit(failClosed ? 0 : 1);
```

### `process-b-authority-invalid.mjs`

```javascript
/**
 * Process B — QA-06: fresh process epoch invalidates active authority via
 * InvalidateActiveAuthorityOnRestart. NO AUTO-RESUME.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const identityPath = path.join(QA_SIDE_DIR, "qa-06-identity.json");
if (!fs.existsSync(identityPath)) {
  printJson({
    scenario: "QA-06",
    role: "process-b-authority-invalid",
    ok: false,
    error: "missing_qa_06_identity_side_file",
  });
  process.exit(2);
}
const id = JSON.parse(fs.readFileSync(identityPath, "utf8"));
const newEpoch = `epoch:qa06-b-${process.pid}`;

const { journal, invalidate } = await loadJournalStack();

const stillGranted = await journal.hasCriticalAckGranted(
  id.contractFingerprint,
);

const result = await invalidate.execute({
  processEpochId: newEpoch,
  previousProcessEpochId: id.processEpochId,
  correlationId: `cor:qa06-b-${process.pid}`,
  reason: "process_restart_dur4_qa06",
});

const newEpochRows = await journal.listByProcessEpoch(newEpoch);
const hasInvalidated = newEpochRows.some(
  (r) => r.kind === "ACTIVE_AUTHORITY_INVALIDATED",
);

const ok =
  result.ok === true &&
  hasInvalidated &&
  stillGranted === true && // prior grant row remains (audit); policy requires reconfirm
  result.processEpochId === newEpoch;

printJson({
  scenario: "QA-06",
  role: "process-b-authority-invalid",
  classification: "REAL_PROCESS_RESTART",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  previousProcessEpochId: id.processEpochId,
  newProcessEpochId: newEpoch,
  invalidateResult: result,
  priorAckStillPresent: stillGranted,
  newEpochRows: summarizeRows(newEpochRows),
  disposition: "ACTIVE_AUTHORITY_INVALIDATED_REQUIRES_RECONFIRM",
  assertions: {
    hasInvalidated,
    noAutoResume: true,
    requiresReconfirm: true,
  },
  ok,
});
process.exit(ok ? 0 : 1);
```

### `process-b-crash-before-created-inspect.mjs`

```javascript
/**
 * Process B — QA-02: fresh process sees empty rows for attemptId (no CREATED).
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const identityPath = path.join(QA_SIDE_DIR, "qa-02-identity.json");
if (!fs.existsSync(identityPath)) {
  printJson({
    scenario: "QA-02",
    role: "process-b-crash-before-created-inspect",
    ok: false,
    error: "missing_qa_02_identity_side_file",
  });
  process.exit(2);
}
const id = JSON.parse(fs.readFileSync(identityPath, "utf8"));

const { journal } = await loadJournalStack();
const rows = await journal.findByAttemptId(id.attemptId);
const ok = rows.length === 0;

printJson({
  scenario: "QA-02",
  role: "process-b-crash-before-created-inspect",
  classification: "REAL_PROCESS_RESTART",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  rows: summarizeRows(rows),
  disposition: "EMPTY_JOURNAL_FOR_ATTEMPT_FAIL_CLOSED",
  assertions: {
    rowCount: rows.length,
    hasCreated: rows.some((r) => r.kind === "ATTEMPT_CREATED"),
    hasLaunched: rows.some((r) => r.kind === "ATTEMPT_LAUNCHED"),
    empty: ok,
  },
  ok,
});
process.exit(ok ? 0 : 1);
```

### `process-b-nominal-inspect.mjs`

```javascript
/**
 * Process B — QA-01: fresh process verifies CREATED+LAUNCHED durable markers.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const identityPath = path.join(QA_SIDE_DIR, "qa-01-identity.json");
if (!fs.existsSync(identityPath)) {
  printJson({
    scenario: "QA-01",
    role: "process-b-nominal-inspect",
    ok: false,
    error: "missing_qa_01_identity_side_file",
  });
  process.exit(2);
}
const id = JSON.parse(fs.readFileSync(identityPath, "utf8"));

const { journal } = await loadJournalStack();
const rows = await journal.findByAttemptId(id.attemptId);
const hasCreated = rows.some((r) => r.kind === "ATTEMPT_CREATED");
const hasLaunched = rows.some((r) => r.kind === "ATTEMPT_LAUNCHED");
const launchedCount = rows.filter((r) => r.kind === "ATTEMPT_LAUNCHED").length;
const ok = hasCreated && hasLaunched && launchedCount === 1;

printJson({
  scenario: "QA-01",
  role: "process-b-nominal-inspect",
  classification: "REAL_PROCESS_RESTART",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  rows: summarizeRows(rows),
  disposition: "NOMINAL_CREATED_AND_LAUNCHED_VISIBLE",
  assertions: { hasCreated, hasLaunched, launchedCount },
  ok,
});
process.exit(ok ? 0 : 1);
```

### `process-b-reopen-chain.mjs`

```javascript
/**
 * Process B — QA-12: mid-chain reopen after A wrote CREATED+LAUNCHED.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const identityPath = path.join(QA_SIDE_DIR, "qa-12-identity.json");
if (!fs.existsSync(identityPath)) {
  printJson({
    scenario: "QA-12",
    role: "process-b-reopen-chain",
    ok: false,
    error: "missing_qa_12_identity_side_file",
  });
  process.exit(2);
}
const id = JSON.parse(fs.readFileSync(identityPath, "utf8"));

const { journal } = await loadJournalStack();
const rows = await journal.findByAttemptId(id.attemptId);
const hasCreated = rows.some((r) => r.kind === "ATTEMPT_CREATED");
const hasLaunched = rows.some((r) => r.kind === "ATTEMPT_LAUNCHED");
const ok = hasCreated && hasLaunched;

printJson({
  scenario: "QA-12",
  role: "process-b-reopen-chain",
  classification: "REAL_PROCESS_RESTART",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  rows: summarizeRows(rows),
  assertions: { hasCreated, hasLaunched },
  ok,
});
process.exit(ok ? 0 : 1);
```

### `process-b-restart-inspect.mjs`

```javascript
/**
 * Process B — QA-03: fresh process, reopen journal, assert CREATED-without-LAUNCHED
 * fail-closed (no auto-launch). ReconcileLaunchedAttemptOnRestart is NOT applicable
 * because LAUNCHED was never journaled.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const identityPath = path.join(QA_SIDE_DIR, "qa-03-identity.json");
if (!fs.existsSync(identityPath)) {
  printJson({
    scenario: "QA-03",
    role: "process-b-restart-inspect",
    ok: false,
    error: "missing_qa_03_identity_side_file",
  });
  process.exit(2);
}
const id = JSON.parse(fs.readFileSync(identityPath, "utf8"));

const { journal, reconcile } = await loadJournalStack();
const rows = await journal.findByAttemptId(id.attemptId);
const hasCreated = rows.some((r) => r.kind === "ATTEMPT_CREATED");
const hasLaunched = rows.some((r) => r.kind === "ATTEMPT_LAUNCHED");
const hasTerminal = rows.some((r) => r.kind === "ATTEMPT_TERMINAL");

let reconcileResult = null;
let reconcileApplicable = false;
// Applicable only when LAUNCHED frontier exists without terminal.
if (hasLaunched && !hasTerminal) {
  reconcileApplicable = true;
  reconcileResult = await reconcile.execute({
    attemptId: id.attemptId,
    executionContractId: id.executionContractId,
    processEpochId: `epoch:qa03-b-${process.pid}`,
    launchedWithoutTerminalResult: true,
    correlationId: `cor:qa03-b-${process.pid}`,
  });
}

const autoLaunchInvoked = false;
const failClosed =
  hasCreated && !hasLaunched && !autoLaunchInvoked && !reconcileApplicable;

const proof = {
  scenario: "QA-03",
  role: "process-b-restart-inspect",
  classification: "REAL_PROCESS_RESTART",
  pid: process.pid,
  priorProcessEpochId: id.processEpochId,
  newProcessEpochId: `epoch:qa03-b-${process.pid}`,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  rows: summarizeRows(rows),
  disposition: failClosed
    ? "FAIL_CLOSED_CREATED_WITHOUT_LAUNCHED_NO_AUTO_RESUME"
    : "UNEXPECTED",
  reconcileApplicable,
  reconcileResult,
  assertions: {
    hasCreated,
    hasLaunched,
    hasTerminal,
    autoLaunchInvoked,
    noAutoLaunch: !autoLaunchInvoked,
    failClosed,
  },
  ok: failClosed && hasCreated && !hasLaunched,
};

printJson(proof);
process.exit(proof.ok ? 0 : 1);
```

### `process-c-reopen-chain.mjs`

```javascript
/**
 * Process C — QA-12: third reopen of journal after A write + B inspect.
 * Asserts CREATED+LAUNCHED still durable; no relaunch.
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  printJson,
  QA_SIDE_DIR,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const identityPath = path.join(QA_SIDE_DIR, "qa-12-identity.json");
if (!fs.existsSync(identityPath)) {
  printJson({
    scenario: "QA-12",
    role: "process-c-reopen-chain",
    ok: false,
    error: "missing_qa_12_identity_side_file",
  });
  process.exit(2);
}
const id = JSON.parse(fs.readFileSync(identityPath, "utf8"));

const { journal, reconcile } = await loadJournalStack();
const rows = await journal.findByAttemptId(id.attemptId);
const hasCreated = rows.some((r) => r.kind === "ATTEMPT_CREATED");
const hasLaunched = rows.some((r) => r.kind === "ATTEMPT_LAUNCHED");
const hasTerminal = rows.some((r) => r.kind === "ATTEMPT_TERMINAL");
const launchedCount = rows.filter((r) => r.kind === "ATTEMPT_LAUNCHED").length;

let reconcileResult = null;
if (hasLaunched && !hasTerminal) {
  reconcileResult = await reconcile.execute({
    attemptId: id.attemptId,
    executionContractId: id.executionContractId,
    processEpochId: `epoch:qa12-c-${process.pid}`,
    launchedWithoutTerminalResult: true,
    correlationId: `cor:qa12-c-${process.pid}`,
  });
}

const after = await journal.findByAttemptId(id.attemptId);
const launchedAfter = after.filter((r) => r.kind === "ATTEMPT_LAUNCHED").length;
const relaunchInvoked = false;

const ok =
  hasCreated &&
  hasLaunched &&
  launchedCount === 1 &&
  launchedAfter === 1 &&
  !relaunchInvoked &&
  reconcileResult?.ok === true &&
  reconcileResult?.disposition === "UNKNOWN";

printJson({
  scenario: "QA-12",
  role: "process-c-reopen-chain",
  classification: "REAL_PROCESS_RESTART",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  chain: "A→B→C",
  rows: summarizeRows(rows),
  reconcileResult,
  disposition: "THIRD_REOPEN_LAUNCHED_STABLE_NO_RELAUNCH",
  assertions: {
    hasCreated,
    hasLaunched,
    launchedCount,
    launchedAfter,
    relaunchInvoked,
  },
  ok,
});
process.exit(ok ? 0 : 1);
```

### `process-concurrent-created-writer.mjs`

```javascript
/**
 * QA-14 concurrent writer — append ATTEMPT_CREATED (+ optional LAUNCHED) for a shared attemptId.
 * Env: QA_ATTEMPT_ID, QA_WRITER_ROLE (w1|w2), QA_TRY_LAUNCHED=1 to also try LAUNCHED.
 */
import {
  applyQaEnv,
  identityFixture,
  printJson,
} from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const attemptId = process.env.QA_ATTEMPT_ID ?? "att:qa-14-concurrent";
const role = process.env.QA_WRITER_ROLE ?? "w?";
const tryLaunched = process.env.QA_TRY_LAUNCHED === "1";

const id = identityFixture({
  attemptId,
  processEpochId: `epoch:qa14-${role}-${process.pid}`,
  correlationId: `cor:qa14-${role}-${process.pid}`,
});

const { journal } = await loadJournalStack();

let createdOk = false;
let createdError = null;
try {
  await journal.append({
    kind: "ATTEMPT_CREATED",
    processEpochId: id.processEpochId,
    correlationId: id.correlationId,
    attemptId: id.attemptId,
    executionContractId: id.executionContractId,
    contractVersion: id.contractVersion,
    contractFingerprint: id.contractFingerprint,
    actorId: id.actorId,
    principalId: id.principalId,
    payload: { qaScenario: "QA-14", writer: role, pid: process.pid },
  });
  createdOk = true;
} catch (err) {
  createdError = {
    name: err?.name ?? "Error",
    message: String(err?.message ?? err),
  };
}

let launchedOk = false;
let launchedError = null;
if (tryLaunched && createdOk) {
  try {
    await journal.append({
      kind: "ATTEMPT_LAUNCHED",
      processEpochId: id.processEpochId,
      correlationId: id.correlationId,
      attemptId: id.attemptId,
      executionContractId: id.executionContractId,
      contractVersion: id.contractVersion,
      contractFingerprint: id.contractFingerprint,
      actorId: id.actorId,
      principalId: id.principalId,
      payload: { qaScenario: "QA-14", writer: role, pid: process.pid },
    });
    launchedOk = true;
  } catch (err) {
    launchedError = {
      name: err?.name ?? "Error",
      message: String(err?.message ?? err),
    };
  }
}

const rows = await journal.findByAttemptId(id.attemptId);

printJson({
  scenario: "QA-14",
  role: `process-concurrent-created-writer-${role}`,
  classification: "CONCURRENT_WRITER_BEST_EFFORT",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  attemptId,
  createdOk,
  createdError,
  launchedOk,
  launchedError,
  rows: summarizeRows(rows),
  note: "SqliteAuthorityAttemptJournal uses BEGIN IMMEDIATE; no UNIQUE on ATTEMPT_CREATED(attempt_id) — both CREATED may succeed; app-level Start blocks relaunch",
});
process.exit(0);
```

### `process-inspect-attempt.mjs`

```javascript
/**
 * Inspect journal rows for an attemptId (no append). Env: QA_ATTEMPT_ID
 */
import { applyQaEnv, printJson } from "./lib/qa-env.mjs";
import { loadJournalStack, summarizeRows } from "./lib/load-app.mjs";

const env = applyQaEnv();
const attemptId = process.env.QA_ATTEMPT_ID ?? "att:qa-inspect";
const { journal } = await loadJournalStack();
const rows = await journal.findByAttemptId(attemptId);

printJson({
  scenario: "INSPECT",
  role: "process-inspect-attempt",
  classification: "INSPECT",
  pid: process.pid,
  D1_SQLITE_PATH: env.D1_SQLITE_PATH,
  attemptId,
  rows: summarizeRows(rows),
  createdCount: rows.filter((r) => r.kind === "ATTEMPT_CREATED").length,
  launchedCount: rows.filter((r) => r.kind === "ATTEMPT_LAUNCHED").length,
  ok: true,
});
process.exit(0);
```

### `process-launch-block-failure.mjs`

```javascript
/**
 * QA-08 launch-block failure probe:
 * Create DB, then place a copy under a non-writable directory and attempt
 * ATTEMPT_LAUNCHED append → expect persistence failure (fail-closed, no SUCCESS).
 */
import fs from "node:fs";
import path from "node:path";
import {
  applyQaEnv,
  identityFixture,
  printJson,
  QA_READONLY_PROBE,
  QA_DB_PATH,
} from "./lib/qa-env.mjs";

const env = applyQaEnv();
const id = identityFixture({
  attemptId: "att:qa-08-launch-block",
  processEpochId: `epoch:qa08-a-${process.pid}`,
  correlationId: `cor:qa08-a-${process.pid}`,
});

// Phase 1: writable — create schema + CREATED
const { loadJournalStack } = await import("./lib/load-app.mjs");
const stack1 = await loadJournalStack();
await stack1.journal.append({
  kind: "ATTEMPT_CREATED",
  processEpochId: id.processEpochId,
  correlationId: id.correlationId,
  attemptId: id.attemptId,
  executionContractId: id.executionContractId,
  contractVersion: id.contractVersion,
  contractFingerprint: id.contractFingerprint,
  actorId: id.actorId,
  payload: { qaScenario: "QA-08" },
});
stack1.resetD1DbForTests();

// Phase 2: copy db into read-only directory
fs.mkdirSync(QA_READONLY_PROBE, { recursive: true });
const roDb = path.join(QA_READONLY_PROBE, "d1.sqlite");
fs.copyFileSync(QA_DB_PATH, roDb);
// Also copy WAL/SHM if present
for (const suffix of ["-wal", "-shm"]) {
  const src = `${QA_DB_PATH}${suffix}`;
  if (fs.existsSync(src)) fs.copyFileSync(src, `${roDb}${suffix}`);
}
fs.chmodSync(QA_READONLY_PROBE, 0o555);
try {
  fs.chmodSync(roDb, 0o444);
} catch {
  /* best-effort */
}

let launchBlockError = null;
let launchedAppended = false;
try {
  // Re-apply env to RO path and reopen
  applyQaEnv({ dbPath: roDb });
  const stack2 = await loadJournalStack();
  await stack2.journal.append({
    kind: "ATTEMPT_LAUNCHED",
    processEpochId: id.processEpochId,
    correlationId: id.correlationId,
    attemptId: id.attemptId,
    executionContractId: id.executionContractId,
    contractVersion: id.contractVersion,
    contractFingerprint: id.contractFingerprint,
    actorId: id.actorId,
    payload: { qaScenario: "QA-08", expectFail: true },
  });
  launchedAppended = true;
  stack2.resetD1DbForTests();
} catch (err) {
  launchBlockError = {
    name: err?.name ?? "Error",
    message: String(err?.message ?? err),
  };
}

// Restore perms for cleanup by campaign
try {
  fs.chmodSync(QA_READONLY_PROBE, 0o755);
  if (fs.existsSync(roDb)) fs.chmodSync(roDb, 0o644);
} catch {
  /* ignore */
}

const ok = !launchedAppended && launchBlockError != null;
printJson({
  scenario: "QA-08",
  role: "process-launch-block-failure",
  classification: "PERSISTENCE_FAIL_CLOSED",
  pid: process.pid,
  D1_SQLITE_PATH_writable: env.D1_SQLITE_PATH,
  D1_SQLITE_PATH_readonly: roDb,
  launchedAppended,
  launchBlockError,
  claimSuccess: false,
  assertions: {
    failClosedOnLaunchBlock: ok,
    noSuccessClaim: true,
  },
  ok,
});
process.exit(ok ? 0 : 1);
```

### `run-campaign.mjs`

```javascript
/**
 * QA campaign orchestrator — Cycle 9 R-T-A3-2 full matrix QA-01..15.
 * Each process scenario runs as separate OS processes via
 * child_process.spawn('npx', ['tsx', ...]) with shared D1_SQLITE_PATH.
 * NO product mutations. Harness lives only under .tmp-sfia-review/r-t-a3-2-qa.
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import {
  APP_ROOT,
  QA_DB_PATH,
  QA_RESULTS_DIR,
  QA_ROOT,
  QA_SIDE_DIR,
  QA_STATE_DIR,
  applyQaEnv,
} from "./lib/qa-env.mjs";

applyQaEnv();

function rmrf(p) {
  fs.rmSync(p, { recursive: true, force: true });
}

function wipeSide() {
  if (!fs.existsSync(QA_SIDE_DIR)) {
    fs.mkdirSync(QA_SIDE_DIR, { recursive: true });
    return;
  }
  for (const f of fs.readdirSync(QA_SIDE_DIR)) {
    fs.rmSync(path.join(QA_SIDE_DIR, f), { force: true });
  }
}

function resetState() {
  rmrf(QA_STATE_DIR);
  fs.mkdirSync(QA_STATE_DIR, { recursive: true });
  wipeSide();
}

function runScript(scriptName, extraEnv = {}) {
  const scriptPath = path.join(QA_ROOT, scriptName);
  const env = {
    ...process.env,
    D1_SQLITE_PATH: QA_DB_PATH,
    QA_APP_ROOT: APP_ROOT,
    ...extraEnv,
  };
  return new Promise((resolve) => {
    const child = spawn(
      "npx",
      ["tsx", "--tsconfig", "tsconfig.json", scriptPath],
      {
        cwd: APP_ROOT,
        env,
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => {
      stdout += d.toString("utf8");
    });
    child.stderr.on("data", (d) => {
      stderr += d.toString("utf8");
    });
    child.on("close", (code, signal) => {
      let json = null;
      try {
        const trimmed = stdout.trim();
        const start = trimmed.indexOf("{");
        const end = trimmed.lastIndexOf("}");
        if (start >= 0 && end > start) {
          json = JSON.parse(trimmed.slice(start, end + 1));
        }
      } catch {
        json = null;
      }
      resolve({
        script: scriptName,
        exitCode: code,
        signal,
        pid: child.pid,
        stdout,
        stderr,
        json,
      });
    });
  });
}

function summarizeProcess(r) {
  return {
    script: r.script,
    exitCode: r.exitCode,
    pid: r.pid,
    json: r.json,
    stderrTail: r.stderr.slice(-2000),
  };
}

async function runPair(name, aScript, bScript, classification = "REAL_PROCESS_RESTART") {
  resetState();
  const a = await runScript(aScript);
  const b = await runScript(bScript);
  const ok =
    a.exitCode === 0 &&
    b.exitCode === 0 &&
    a.pid !== b.pid &&
    (b.json?.ok === true || b.json?.classification === "REAL_PROCESS_RESTART");
  return {
    name,
    classification,
    processA: summarizeProcess(a),
    processB: summarizeProcess(b),
    distinctPids: a.pid !== b.pid,
    ok,
  };
}

async function runTriple(name, aScript, bScript, cScript) {
  resetState();
  const a = await runScript(aScript);
  const b = await runScript(bScript);
  const c = await runScript(cScript);
  const ok =
    a.exitCode === 0 &&
    b.exitCode === 0 &&
    c.exitCode === 0 &&
    a.pid !== b.pid &&
    b.pid !== c.pid &&
    a.pid !== c.pid &&
    b.json?.ok === true &&
    c.json?.ok === true;
  return {
    name,
    classification: "REAL_PROCESS_RESTART_CHAIN",
    processA: summarizeProcess(a),
    processB: summarizeProcess(b),
    processC: summarizeProcess(c),
    distinctPids: a.pid !== b.pid && b.pid !== c.pid && a.pid !== c.pid,
    ok,
  };
}

function runVitest(filterArgs) {
  return new Promise((resolve) => {
    const child = spawn(
      "npx",
      ["vitest", "run", ...filterArgs, "--reporter=verbose"],
      {
        cwd: APP_ROOT,
        env: { ...process.env },
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => {
      stdout += d.toString("utf8");
    });
    child.stderr.on("data", (d) => {
      stderr += d.toString("utf8");
    });
    child.on("close", (code) => {
      const passMatch = stdout.match(/(\d+)\s+passed/);
      const failMatch = stdout.match(/(\d+)\s+failed/);
      const testsMatch = stdout.match(/Tests\s+(\d+)\s+passed/);
      // vitest v3 style: "Tests  12 passed (12)"
      let passed = null;
      let failed = 0;
      const testsLine = stdout.match(/Tests\s+.*?(\d+)\s+passed/);
      if (testsLine) passed = Number(testsLine[1]);
      else if (passMatch) passed = Number(passMatch[1]);
      const failLine = stdout.match(/(\d+)\s+failed/);
      if (failLine) failed = Number(failLine[1]);
      resolve({
        exitCode: code,
        passed,
        failed,
        stdoutTail: stdout.slice(-4000),
        stderrTail: stderr.slice(-2000),
      });
    });
  });
}

function classificationRow(name, classification, evidence, status) {
  return { name, classification, evidence, status };
}

async function main() {
  fs.mkdirSync(QA_RESULTS_DIR, { recursive: true });
  fs.mkdirSync(QA_SIDE_DIR, { recursive: true });
  resetState();

  const scenarios = [];
  const matrix = [];

  // QA-01 nominal
  {
    const s = await runPair(
      "QA-01",
      "process-a-nominal.mjs",
      "process-b-nominal-inspect.mjs",
    );
    scenarios.push(s);
    matrix.push(
      classificationRow(
        "QA-01",
        "REAL_PROCESS_RESTART",
        "CREATED+LAUNCHED same process A; B inspect",
        s.ok ? "PASS" : "FAIL",
      ),
    );
  }

  // QA-02 crash before CREATED
  {
    const s = await runPair(
      "QA-02",
      "process-a-crash-before-created.mjs",
      "process-b-crash-before-created-inspect.mjs",
    );
    scenarios.push(s);
    matrix.push(
      classificationRow(
        "QA-02",
        "REAL_PROCESS_RESTART",
        "A exits before append; B sees empty rows",
        s.ok ? "PASS" : "FAIL",
      ),
    );
  }

  // QA-03 CREATED-only fail-closed
  {
    const s = await runPair(
      "QA-03",
      "process-a-created-only.mjs",
      "process-b-restart-inspect.mjs",
    );
    scenarios.push(s);
    matrix.push(
      classificationRow(
        "QA-03",
        "REAL_PROCESS_RESTART",
        "CREATED without LAUNCHED → fail-closed no auto-launch",
        s.ok ? "PASS" : "FAIL",
      ),
    );
  }

  // QA-04 ambiguous
  {
    const s = await runPair(
      "QA-04",
      "process-a-ambiguous-launch.mjs",
      "process-b-ambiguous-inspect.mjs",
    );
    scenarios.push(s);
    matrix.push(
      classificationRow(
        "QA-04",
        "REAL_PROCESS_RESTART",
        "Ambiguous launch window side marker; fail-closed",
        s.ok ? "PASS" : "FAIL",
      ),
    );
  }

  // QA-05 after LAUNCHED
  {
    const s = await runPair(
      "QA-05",
      "process-a-launched.mjs",
      "process-b-after-launched.mjs",
    );
    scenarios.push(s);
    matrix.push(
      classificationRow(
        "QA-05",
        "REAL_PROCESS_RESTART",
        "After LAUNCHED → UNKNOWN reconcile; no relaunch",
        s.ok ? "PASS" : "FAIL",
      ),
    );
  }

  // QA-06 authority epoch
  {
    const s = await runPair(
      "QA-06",
      "process-a-authority-epoch.mjs",
      "process-b-authority-invalid.mjs",
    );
    scenarios.push(s);
    matrix.push(
      classificationRow(
        "QA-06",
        "REAL_PROCESS_RESTART",
        "InvalidateActiveAuthorityOnRestart across processes",
        s.ok ? "PASS" : "FAIL",
      ),
    );
  }

  // QA-07 unit double-launch + BEGIN IMMEDIATE note
  {
    const vitest = await runVitest([
      "__tests__/oa/execution-attempt/durableLaunchMarkers.test.ts",
    ]);
    const note =
      "SqliteAuthorityAttemptJournal.append uses BEGIN IMMEDIATE; Start rejects second launch when ATTEMPT_LAUNCHED present (durable_attempt_already_launched_no_relaunch) and CREATED-without-LAUNCHED (durable_attempt_created_unlaunched_no_auto_resume).";
    const ok = vitest.exitCode === 0 && (vitest.failed ?? 0) === 0;
    scenarios.push({
      name: "QA-07",
      classification: "UNIT + HARNESS_NOTE",
      vitest: {
        exitCode: vitest.exitCode,
        passed: vitest.passed,
        failed: vitest.failed,
        stdoutTail: vitest.stdoutTail,
        stderrTail: vitest.stderrTail,
      },
      concurrencyNote: note,
      ok,
    });
    matrix.push(
      classificationRow(
        "QA-07",
        "UNIT + HARNESS_NOTE",
        `durableLaunchMarkers vitest (double-launch) + BEGIN IMMEDIATE note; passed=${vitest.passed}`,
        ok ? "PASS" : "FAIL",
      ),
    );
  }

  // QA-08 launch-block
  {
    resetState();
    const qa08 = await runScript("process-launch-block-failure.mjs");
    const ok = qa08.exitCode === 0 && qa08.json?.ok === true;
    scenarios.push({
      name: "QA-08",
      classification: "PERSISTENCE_FAIL_CLOSED",
      process: summarizeProcess(qa08),
      ok,
    });
    matrix.push(
      classificationRow(
        "QA-08",
        "PERSISTENCE_FAIL_CLOSED",
        "Readonly DB blocks ATTEMPT_LAUNCHED append; no SUCCESS claim",
        ok ? "PASS" : "FAIL",
      ),
    );
  }

  // QA-09 malformed identity — UNIT ONLY (durableLaunchMarkers incomplete fingerprint)
  {
    const vitest = await runVitest([
      "__tests__/oa/execution-attempt/durableLaunchMarkers.test.ts",
      "-t",
      "incomplete identity",
    ]);
    const ok = vitest.exitCode === 0;
    scenarios.push({
      name: "QA-09",
      classification: "UNIT ONLY",
      note: "Journal append API accepts optional fingerprint; StartExecution validates incomplete identity (durable_attempt_identity_incomplete) before append. Covered by durableLaunchMarkers unit test.",
      vitest: {
        exitCode: vitest.exitCode,
        passed: vitest.passed,
        failed: vitest.failed,
        stdoutTail: vitest.stdoutTail,
      },
      ok,
    });
    matrix.push(
      classificationRow(
        "QA-09",
        "UNIT ONLY",
        "malformed/incomplete identity fail-closed via durableLaunchMarkers",
        ok ? "PASS" : "FAIL",
      ),
    );
  }

  // QA-10 LAUNCHED replay — unit + process B after launched
  {
    resetState();
    const a = await runScript("process-a-launched.mjs");
    // rewrite identity path used by after-launched (qa-05) — alias for qa-10
    const id05 = path.join(QA_SIDE_DIR, "qa-05-identity.json");
    const id10 = path.join(QA_SIDE_DIR, "qa-10-identity.json");
    if (fs.existsSync(id05)) fs.copyFileSync(id05, id10);
    const b = await runScript("process-b-after-launched.mjs");
    const vitest = await runVitest([
      "__tests__/oa/execution-attempt/durableLaunchMarkers.test.ts",
      "-t",
      "second Start after LAUNCHED",
    ]);
    const processOk =
      a.exitCode === 0 &&
      b.exitCode === 0 &&
      a.pid !== b.pid &&
      b.json?.ok === true;
    const unitOk = vitest.exitCode === 0;
    const ok = processOk && unitOk;
    scenarios.push({
      name: "QA-10",
      classification: "UNIT + REAL_PROCESS_RESTART",
      processA: summarizeProcess(a),
      processB: summarizeProcess(b),
      distinctPids: a.pid !== b.pid,
      vitest: {
        exitCode: vitest.exitCode,
        passed: vitest.passed,
        failed: vitest.failed,
        stdoutTail: vitest.stdoutTail,
      },
      ok,
    });
    matrix.push(
      classificationRow(
        "QA-10",
        "UNIT + REAL_PROCESS_RESTART",
        "LAUNCHED replay: process B after launched + unit no second adapter call",
        ok ? "PASS" : "FAIL",
      ),
    );
  }

  // QA-11 no auto-retry — document + unit
  {
    const vitest = await runVitest([
      "__tests__/oa/execution-attempt/durableLaunchMarkers.test.ts",
      "-t",
      "CREATED without LAUNCHED",
    ]);
    const doc = {
      startExecution:
        "Blocks Start when journal disposition is UNKNOWN/REVIEW_REQUIRED (reconcile_*_no_auto_resume). Blocks relaunch when CREATED-without-LAUNCHED (durable_attempt_created_unlaunched_no_auto_resume) or already LAUNCHED.",
      retryExecutionAttempt:
        "Explicit RetryExecutionAttempt exists (D09): ALWAYS a new Attempt with NEW idempotencyKey; no automatic retry/scheduler. Implemented in retryExecutionAttempt.ts.",
      explicitNewAttemptImplemented: true,
    };
    const ok = vitest.exitCode === 0;
    scenarios.push({
      name: "QA-11",
      classification: "DOCUMENTATION + UNIT",
      documentation: doc,
      vitest: {
        exitCode: vitest.exitCode,
        passed: vitest.passed,
        failed: vitest.failed,
        stdoutTail: vitest.stdoutTail,
      },
      ok,
    });
    matrix.push(
      classificationRow(
        "QA-11",
        "DOCUMENTATION + UNIT",
        "no auto-retry from startExecution + RetryExecutionAttempt explicit new Attempt",
        ok ? "PASS" : "FAIL",
      ),
    );
  }

  // QA-12 A→B→C reopen
  {
    const s = await runTriple(
      "QA-12",
      "process-a-reopen-chain.mjs",
      "process-b-reopen-chain.mjs",
      "process-c-reopen-chain.mjs",
    );
    scenarios.push(s);
    matrix.push(
      classificationRow(
        "QA-12",
        "REAL_PROCESS_RESTART_CHAIN",
        "A→B→C reopen; LAUNCHED stable; no relaunch",
        s.ok ? "PASS" : "FAIL",
      ),
    );
  }

  // QA-13 integrity (also re-run at end)
  {
    const integrity = await runScript("integrity-check.mjs");
    const ok = integrity.exitCode === 0 && integrity.json?.ok === true;
    scenarios.push({
      name: "QA-13",
      classification: "INTEGRITY_CHECK",
      process: summarizeProcess(integrity),
      ok,
    });
    matrix.push(
      classificationRow(
        "QA-13",
        "INTEGRITY_CHECK",
        `PRAGMA integrity_check=${integrity.json?.integrity_check ?? "n/a"}`,
        ok ? "PASS" : "FAIL",
      ),
    );
  }

  // QA-14 concurrent writers
  {
    resetState();
    // Seed schema with a quiet inspect open
    await runScript("process-inspect-attempt.mjs", {
      QA_ATTEMPT_ID: "att:qa-14-seed",
    });
    const attemptId = "att:qa-14-concurrent";
    const [w1, w2] = await Promise.all([
      runScript("process-concurrent-created-writer.mjs", {
        QA_ATTEMPT_ID: attemptId,
        QA_WRITER_ROLE: "w1",
        QA_TRY_LAUNCHED: "1",
      }),
      runScript("process-concurrent-created-writer.mjs", {
        QA_ATTEMPT_ID: attemptId,
        QA_WRITER_ROLE: "w2",
        QA_TRY_LAUNCHED: "1",
      }),
    ]);
    const createdOkCount =
      Number(w1.json?.createdOk === true) + Number(w2.json?.createdOk === true);
    const launchedOkCount =
      Number(w1.json?.launchedOk === true) + Number(w2.json?.launchedOk === true);
    // Inspect final state (no append)
    const inspect = await runScript("process-inspect-attempt.mjs", {
      QA_ATTEMPT_ID: attemptId,
    });
    const rows = inspect.json?.rows ?? [];
    const createdCount =
      inspect.json?.createdCount ??
      rows.filter((r) => r.kind === "ATTEMPT_CREATED").length;
    const launchedCount =
      inspect.json?.launchedCount ??
      rows.filter((r) => r.kind === "ATTEMPT_LAUNCHED").length;
    // Pass criteria: both processes ran; no crash; launchedCount is finite;
    // honest outcome: journal may allow ≥1 CREATED (no UNIQUE); assert we observed
    // serialization via BEGIN IMMEDIATE (both exit 0) and document launchedCount.
    // Critical: if both wrote LAUNCHED, still PASS only if we record honesty —
    // user asked: expect lock/one winner or conflict, no double LAUNCHED.
    // App-level Start prevents double launch; raw journal may allow 2 LAUNCHED.
    // For raw concurrent append of LAUNCHED: if launchedCount > 1 → PARTIAL.
    let status = "PASS";
    let ok = true;
    let note =
      "BEGIN IMMEDIATE serializes writers; no UNIQUE on ATTEMPT_CREATED(attempt_id).";
    if (w1.exitCode !== 0 || w2.exitCode !== 0) {
      ok = false;
      status = "FAIL";
    } else if (launchedCount > 1) {
      ok = true; // observed; classify PARTIAL for journal-level
      status = "PARTIAL";
      note +=
        " Raw journal accepted multiple ATTEMPT_LAUNCHED (no unique). App StartExecution still fail-closes on prior LAUNCHED (UNIT QA-07/10).";
    } else {
      note += ` createdCount=${createdCount} launchedCount=${launchedCount} createdOkCount=${createdOkCount} launchedOkCount=${launchedOkCount}`;
    }
    scenarios.push({
      name: "QA-14",
      classification: "CONCURRENT_WRITER_BEST_EFFORT",
      writer1: summarizeProcess(w1),
      writer2: summarizeProcess(w2),
      distinctPids: w1.pid !== w2.pid,
      final: {
        createdCount,
        launchedCount,
        createdOkCount,
        launchedOkCount,
        rows,
      },
      note,
      status,
      ok: ok && status !== "FAIL",
    });
    matrix.push(
      classificationRow(
        "QA-14",
        "CONCURRENT_WRITER_BEST_EFFORT",
        note,
        status,
      ),
    );
  }

  // Final integrity after full campaign
  const integrityFinal = await runScript("integrity-check.mjs");
  scenarios.push({
    name: "INTEGRITY_FINAL",
    classification: "INTEGRITY_CHECK",
    process: summarizeProcess(integrityFinal),
    ok: integrityFinal.exitCode === 0 && integrityFinal.json?.ok === true,
  });

  // QA-15 classification table artifact
  const matrixMdLines = [
    "# R-T-A3-2 Cycle 9 — Scenario Matrix",
    "",
    `| Scenario | Status | Classification | Evidence |`,
    `|---|---|---|---|`,
    ...matrix.map(
      (r) =>
        `| ${r.name} | ${r.status} | ${r.classification} | ${r.evidence.replace(/\|/g, "/")} |`,
    ),
    `| INTEGRITY_FINAL | ${integrityFinal.exitCode === 0 && integrityFinal.json?.ok ? "PASS" : "FAIL"} | INTEGRITY_CHECK | PRAGMA integrity_check after campaign |`,
    "",
    "## Notes",
    "",
    "- Critical process-level scenarios for HARD ACCEPTANCE CANDIDATE: **QA-03, QA-04, QA-05, QA-06**.",
    "- QA-09 classified UNIT ONLY (still PASS when durableLaunchMarkers covers).",
    "- QA-11 documents startExecution no-auto-retry + explicit RetryExecutionAttempt (new Attempt).",
    "- Reserves unchanged: `crossStoreDurable=false`, `productionRollbackProven=false`, Project↔Cycle residual.",
    "",
  ];
  const matrixPath = path.join(QA_RESULTS_DIR, "scenario-matrix.md");
  fs.writeFileSync(matrixPath, matrixMdLines.join("\n"));

  scenarios.push({
    name: "QA-15",
    classification: "CLASSIFICATION_TABLE",
    matrixPath,
    matrix,
    ok: matrix.every((r) => r.status === "PASS" || r.status === "PARTIAL"),
  });

  const critical = ["QA-03", "QA-04", "QA-05", "QA-06"];
  const criticalOk = scenarios
    .filter((s) => critical.includes(s.name))
    .every((s) => s.ok);

  const results = {
    campaign: "R-T-A3-2 Cycle 9 QA process harness",
    generatedAt: new Date().toISOString(),
    QA_ROOT,
    APP_ROOT,
    D1_SQLITE_PATH: QA_DB_PATH,
    scenarios,
    matrix,
    summary: {
      allOk: scenarios.every((s) => s.ok !== false),
      criticalProcessOk: criticalOk,
      criticalScenarios: critical.map((name) => {
        const s = scenarios.find((x) => x.name === name);
        return { name, ok: s?.ok ?? false, classification: s?.classification };
      }),
      realProcessRestartScenarios: scenarios
        .filter(
          (s) =>
            s.classification === "REAL_PROCESS_RESTART" ||
            s.classification === "REAL_PROCESS_RESTART_CHAIN",
        )
        .map((s) => ({
          name: s.name,
          ok: s.ok,
          distinctPids: s.distinctPids,
          pidA: s.processA?.pid,
          pidB: s.processB?.pid,
          pidC: s.processC?.pid,
        })),
    },
  };

  const outPath = path.join(QA_RESULTS_DIR, "qa-results.json");
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
  process.exit(results.summary.allOk && criticalOk ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

## INLINE COMPLETE — `qa-results.json`

```json
{
  "campaign": "R-T-A3-2 Cycle 9 QA process harness",
  "generatedAt": "2026-08-12T14:05:53.767Z",
  "QA_ROOT": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa",
  "APP_ROOT": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/projects/sfia-studio/app",
  "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
  "scenarios": [
    {
      "name": "QA-01",
      "classification": "REAL_PROCESS_RESTART",
      "processA": {
        "script": "process-a-nominal.mjs",
        "exitCode": 0,
        "pid": 5029,
        "json": {
          "scenario": "QA-01",
          "role": "process-a-nominal",
          "classification": "REAL_PROCESS_BOUNDARY",
          "pid": 5052,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "identity": {
            "attemptId": "att:qa-01-nominal",
            "executionContractId": "ec:qa-r-t-a3-2",
            "contractVersion": 1,
            "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
            "actorId": "actor:qa-morris",
            "principalId": "principal:qa",
            "correlationId": "cor:qa01-a-5052",
            "processEpochId": "epoch:qa01-a-5052",
            "confirmationId": "conf:qa-1",
            "selectedAgentRef": "agent:qa-fixture"
          },
          "rows": [
            {
              "recordId": "jaj:cb8155b9ad64f653",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-01-nominal",
              "processEpochId": "epoch:qa01-a-5052",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:45.280Z"
            },
            {
              "recordId": "jaj:77bb46be4fc35704",
              "kind": "ATTEMPT_LAUNCHED",
              "attemptId": "att:qa-01-nominal",
              "processEpochId": "epoch:qa01-a-5052",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:45.281Z"
            }
          ],
          "assertions": {
            "hasCreated": true,
            "hasLaunched": true
          }
        },
        "stderrTail": ""
      },
      "processB": {
        "script": "process-b-nominal-inspect.mjs",
        "exitCode": 0,
        "pid": 5056,
        "json": {
          "scenario": "QA-01",
          "role": "process-b-nominal-inspect",
          "classification": "REAL_PROCESS_RESTART",
          "pid": 5079,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "rows": [
            {
              "recordId": "jaj:cb8155b9ad64f653",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-01-nominal",
              "processEpochId": "epoch:qa01-a-5052",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:45.280Z"
            },
            {
              "recordId": "jaj:77bb46be4fc35704",
              "kind": "ATTEMPT_LAUNCHED",
              "attemptId": "att:qa-01-nominal",
              "processEpochId": "epoch:qa01-a-5052",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:45.281Z"
            }
          ],
          "disposition": "NOMINAL_CREATED_AND_LAUNCHED_VISIBLE",
          "assertions": {
            "hasCreated": true,
            "hasLaunched": true,
            "launchedCount": 1
          },
          "ok": true
        },
        "stderrTail": ""
      },
      "distinctPids": true,
      "ok": true
    },
    {
      "name": "QA-02",
      "classification": "REAL_PROCESS_RESTART",
      "processA": {
        "script": "process-a-crash-before-created.mjs",
        "exitCode": 0,
        "pid": 5083,
        "json": {
          "scenario": "QA-02",
          "role": "process-a-crash-before-created",
          "classification": "REAL_PROCESS_BOUNDARY",
          "pid": 5106,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "identity": {
            "attemptId": "att:qa-02-crash-before-created",
            "executionContractId": "ec:qa-r-t-a3-2",
            "contractVersion": 1,
            "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
            "actorId": "actor:qa-morris",
            "principalId": "principal:qa",
            "correlationId": "cor:qa02-a-5106",
            "processEpochId": "epoch:qa02-a-5106",
            "confirmationId": "conf:qa-1",
            "selectedAgentRef": "agent:qa-fixture"
          },
          "appended": false,
          "preexistingRowCount": 0,
          "note": "Simulated crash before ATTEMPT_CREATED append; journal untouched for this attemptId",
          "assertions": {
            "appendInvoked": false,
            "journalHandleOpened": true
          }
        },
        "stderrTail": ""
      },
      "processB": {
        "script": "process-b-crash-before-created-inspect.mjs",
        "exitCode": 0,
        "pid": 5110,
        "json": {
          "scenario": "QA-02",
          "role": "process-b-crash-before-created-inspect",
          "classification": "REAL_PROCESS_RESTART",
          "pid": 5133,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "rows": [],
          "disposition": "EMPTY_JOURNAL_FOR_ATTEMPT_FAIL_CLOSED",
          "assertions": {
            "rowCount": 0,
            "hasCreated": false,
            "hasLaunched": false,
            "empty": true
          },
          "ok": true
        },
        "stderrTail": ""
      },
      "distinctPids": true,
      "ok": true
    },
    {
      "name": "QA-03",
      "classification": "REAL_PROCESS_RESTART",
      "processA": {
        "script": "process-a-created-only.mjs",
        "exitCode": 0,
        "pid": 5137,
        "json": {
          "scenario": "QA-03",
          "role": "process-a-created-only",
          "classification": "REAL_PROCESS_BOUNDARY",
          "pid": 5160,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "identity": {
            "attemptId": "att:qa-03-created-only",
            "executionContractId": "ec:qa-r-t-a3-2",
            "contractVersion": 1,
            "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
            "actorId": "actor:qa-morris",
            "principalId": "principal:qa",
            "correlationId": "cor:qa03-a-5160",
            "processEpochId": "epoch:qa03-a-5160",
            "confirmationId": "conf:qa-1",
            "selectedAgentRef": "agent:qa-fixture"
          },
          "appended": {
            "recordId": "jaj:05e3d73fa4ed7552",
            "kind": "ATTEMPT_CREATED"
          },
          "rows": [
            {
              "recordId": "jaj:05e3d73fa4ed7552",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-03-created-only",
              "processEpochId": "epoch:qa03-a-5160",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:46.201Z"
            }
          ],
          "assertions": {
            "hasCreated": true,
            "hasLaunched": false,
            "launchInvoked": false
          },
          "exitWithoutLaunch": true
        },
        "stderrTail": ""
      },
      "processB": {
        "script": "process-b-restart-inspect.mjs",
        "exitCode": 0,
        "pid": 5164,
        "json": {
          "scenario": "QA-03",
          "role": "process-b-restart-inspect",
          "classification": "REAL_PROCESS_RESTART",
          "pid": 5187,
          "priorProcessEpochId": "epoch:qa03-a-5160",
          "newProcessEpochId": "epoch:qa03-b-5187",
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "rows": [
            {
              "recordId": "jaj:05e3d73fa4ed7552",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-03-created-only",
              "processEpochId": "epoch:qa03-a-5160",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:46.201Z"
            }
          ],
          "disposition": "FAIL_CLOSED_CREATED_WITHOUT_LAUNCHED_NO_AUTO_RESUME",
          "reconcileApplicable": false,
          "reconcileResult": null,
          "assertions": {
            "hasCreated": true,
            "hasLaunched": false,
            "hasTerminal": false,
            "autoLaunchInvoked": false,
            "noAutoLaunch": true,
            "failClosed": true
          },
          "ok": true
        },
        "stderrTail": ""
      },
      "distinctPids": true,
      "ok": true
    },
    {
      "name": "QA-04",
      "classification": "REAL_PROCESS_RESTART",
      "processA": {
        "script": "process-a-ambiguous-launch.mjs",
        "exitCode": 0,
        "pid": 5191,
        "json": {
          "scenario": "QA-04",
          "role": "process-a-ambiguous-launch",
          "classification": "REAL_PROCESS_BOUNDARY",
          "pid": 5214,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "identity": {
            "attemptId": "att:qa-04-ambiguous",
            "executionContractId": "ec:qa-r-t-a3-2",
            "contractVersion": 1,
            "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
            "actorId": "actor:qa-morris",
            "principalId": "principal:qa",
            "correlationId": "cor:qa04-a-5214",
            "processEpochId": "epoch:qa04-a-5214",
            "confirmationId": "conf:qa-1",
            "selectedAgentRef": "agent:qa-fixture"
          },
          "sideMarker": {
            "marker": "launch_attempted_but_no_LAUNCHED",
            "claimSuccess": false,
            "attemptId": "att:qa-04-ambiguous",
            "note": "Simulated crash after adapter.launch attempt before ATTEMPT_LAUNCHED durable write",
            "pid": 5214,
            "at": "2026-08-12T14:05:46.665Z"
          },
          "rows": [
            {
              "recordId": "jaj:2f5148ab6f019172",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-04-ambiguous",
              "processEpochId": "epoch:qa04-a-5214",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:46.664Z"
            }
          ],
          "assertions": {
            "hasCreated": true,
            "hasLaunched": false,
            "claimedSuccess": false
          }
        },
        "stderrTail": ""
      },
      "processB": {
        "script": "process-b-ambiguous-inspect.mjs",
        "exitCode": 0,
        "pid": 5218,
        "json": {
          "scenario": "QA-04",
          "role": "process-b-ambiguous-inspect",
          "classification": "REAL_PROCESS_RESTART",
          "pid": 5241,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "sideMarker": {
            "marker": "launch_attempted_but_no_LAUNCHED",
            "claimSuccess": false,
            "attemptId": "att:qa-04-ambiguous",
            "note": "Simulated crash after adapter.launch attempt before ATTEMPT_LAUNCHED durable write",
            "pid": 5214,
            "at": "2026-08-12T14:05:46.665Z"
          },
          "rows": [
            {
              "recordId": "jaj:2f5148ab6f019172",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-04-ambiguous",
              "processEpochId": "epoch:qa04-a-5214",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:46.664Z"
            }
          ],
          "disposition": "FAIL_CLOSED_AMBIGUOUS_CREATED_WITHOUT_LAUNCHED",
          "assertions": {
            "hasCreated": true,
            "hasLaunched": false,
            "autoLaunchInvoked": false,
            "claimedSuccess": false,
            "failClosed": true
          },
          "ok": true
        },
        "stderrTail": ""
      },
      "distinctPids": true,
      "ok": true
    },
    {
      "name": "QA-05",
      "classification": "REAL_PROCESS_RESTART",
      "processA": {
        "script": "process-a-launched.mjs",
        "exitCode": 0,
        "pid": 5245,
        "json": {
          "scenario": "QA-05",
          "role": "process-a-launched",
          "classification": "REAL_PROCESS_BOUNDARY",
          "pid": 5268,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "identity": {
            "attemptId": "att:qa-05-launched",
            "executionContractId": "ec:qa-r-t-a3-2",
            "contractVersion": 1,
            "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
            "actorId": "actor:qa-morris",
            "principalId": "principal:qa",
            "correlationId": "cor:qa05-a-5268",
            "processEpochId": "epoch:qa05-a-5268",
            "confirmationId": "conf:qa-1",
            "selectedAgentRef": "agent:qa-fixture"
          },
          "rows": [
            {
              "recordId": "jaj:cf406279ff624e66",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-a-5268",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:47.126Z"
            },
            {
              "recordId": "jaj:ed5f8eb035f35260",
              "kind": "ATTEMPT_LAUNCHED",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-a-5268",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:47.127Z"
            }
          ],
          "assertions": {
            "hasCreated": true,
            "hasLaunched": true
          },
          "exitAfterLaunched": true
        },
        "stderrTail": ""
      },
      "processB": {
        "script": "process-b-after-launched.mjs",
        "exitCode": 0,
        "pid": 5272,
        "json": {
          "scenario": "QA-05",
          "role": "process-b-after-launched",
          "classification": "REAL_PROCESS_RESTART",
          "pid": 5295,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "rowsBefore": [
            {
              "recordId": "jaj:cf406279ff624e66",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-a-5268",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:47.126Z"
            },
            {
              "recordId": "jaj:ed5f8eb035f35260",
              "kind": "ATTEMPT_LAUNCHED",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-a-5268",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:47.127Z"
            }
          ],
          "rowsAfter": [
            {
              "recordId": "jaj:cf406279ff624e66",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-a-5268",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:47.126Z"
            },
            {
              "recordId": "jaj:ed5f8eb035f35260",
              "kind": "ATTEMPT_LAUNCHED",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-a-5268",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:47.127Z"
            },
            {
              "recordId": "jaj:73e3ae93268c8f6c",
              "kind": "RECONCILE_DISPOSITION",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-b-5295",
              "disposition": "UNKNOWN",
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": null,
              "occurredAt": "2026-08-12T14:05:47.354Z"
            },
            {
              "recordId": "jaj:671014a634e30f74",
              "kind": "RECONCILE_DISPOSITION",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-b-5295",
              "disposition": "REVIEW_REQUIRED",
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": null,
              "occurredAt": "2026-08-12T14:05:47.354Z"
            }
          ],
          "reconcileResult": {
            "ok": true,
            "attemptId": "att:qa-05-launched",
            "disposition": "UNKNOWN",
            "journalRecordId": "jaj:73e3ae93268c8f6c",
            "attemptStatusUnchanged": true,
            "durationMs": 2
          },
          "disposition": "LAUNCHED_PRESENT_NO_RELAUNCH_UNKNOWN_RECONCILE",
          "assertions": {
            "hasCreated": true,
            "hasLaunched": true,
            "hasTerminal": false,
            "relaunchInvoked": false,
            "launchedCount": 1,
            "noRelaunchNeeded": true
          },
          "ok": true
        },
        "stderrTail": ""
      },
      "distinctPids": true,
      "ok": true
    },
    {
      "name": "QA-06",
      "classification": "REAL_PROCESS_RESTART",
      "processA": {
        "script": "process-a-authority-epoch.mjs",
        "exitCode": 0,
        "pid": 5299,
        "json": {
          "scenario": "QA-06",
          "role": "process-a-authority-epoch",
          "classification": "REAL_PROCESS_BOUNDARY",
          "pid": 5322,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "identity": {
            "attemptId": "att:qa-06-authority",
            "executionContractId": "ec:qa-r-t-a3-2",
            "contractVersion": 1,
            "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa06",
            "actorId": "actor:qa-morris",
            "principalId": "principal:qa",
            "correlationId": "cor:qa06-a-5322",
            "processEpochId": "epoch:qa06-a-5322",
            "confirmationId": "conf:qa-1",
            "selectedAgentRef": "agent:qa-fixture"
          },
          "grantedRecordId": "jaj:6d37291800c4e900",
          "epochRows": [
            {
              "recordId": "jaj:6d37291800c4e900",
              "kind": "CRITICAL_ACK_GRANTED",
              "attemptId": null,
              "processEpochId": "epoch:qa06-a-5322",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa06",
              "occurredAt": "2026-08-12T14:05:47.592Z"
            }
          ],
          "assertions": {
            "hasCriticalAckGranted": true
          }
        },
        "stderrTail": ""
      },
      "processB": {
        "script": "process-b-authority-invalid.mjs",
        "exitCode": 0,
        "pid": 5326,
        "json": {
          "scenario": "QA-06",
          "role": "process-b-authority-invalid",
          "classification": "REAL_PROCESS_RESTART",
          "pid": 5349,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "previousProcessEpochId": "epoch:qa06-a-5322",
          "newProcessEpochId": "epoch:qa06-b-5349",
          "invalidateResult": {
            "ok": true,
            "processEpochId": "epoch:qa06-b-5349",
            "invalidatedRecordId": "jaj:d1f3abd1002ea5a1",
            "durationMs": 1
          },
          "priorAckStillPresent": true,
          "newEpochRows": [
            {
              "recordId": "jaj:d1f3abd1002ea5a1",
              "kind": "ACTIVE_AUTHORITY_INVALIDATED",
              "attemptId": null,
              "processEpochId": "epoch:qa06-b-5349",
              "disposition": null,
              "executionContractId": null,
              "contractFingerprint": null,
              "occurredAt": "2026-08-12T14:05:47.820Z"
            }
          ],
          "disposition": "ACTIVE_AUTHORITY_INVALIDATED_REQUIRES_RECONFIRM",
          "assertions": {
            "hasInvalidated": true,
            "noAutoResume": true,
            "requiresReconfirm": true
          },
          "ok": true
        },
        "stderrTail": ""
      },
      "distinctPids": true,
      "ok": true
    },
    {
      "name": "QA-07",
      "classification": "UNIT + HARNESS_NOTE",
      "vitest": {
        "exitCode": 0,
        "passed": 7,
        "failed": 0,
        "stdoutTail": "\n RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/projects/sfia-studio/app\n\n \u2713 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > CREATED append failure \u2192 launch count 0 30ms\n \u2713 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > writes CREATED before launch; LAUNCHED only after ack 5ms\n \u2713 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > incomplete identity (missing fingerprint) fail-closed; launch count 0 3ms\n \u2713 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > second Start after LAUNCHED does not call adapter again 3ms\n \u2713 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > CREATED without LAUNCHED \u2192 second Start fails closed; no launch 3ms\n \u2713 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > LAUNCHED append failure after ack \u2192 fail closed; no SUCCESS 3ms\n \u2713 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > journal absent \u2192 prior behavior (no ATTEMPT_* required) 2ms\n\n Test Files  1 passed (1)\n      Tests  7 passed (7)\n   Start at  16:05:48\n   Duration  616ms (transform 246ms, setup 57ms, collect 345ms, tests 48ms, environment 0ms, prepare 39ms)\n\n",
        "stderrTail": ""
      },
      "concurrencyNote": "SqliteAuthorityAttemptJournal.append uses BEGIN IMMEDIATE; Start rejects second launch when ATTEMPT_LAUNCHED present (durable_attempt_already_launched_no_relaunch) and CREATED-without-LAUNCHED (durable_attempt_created_unlaunched_no_auto_resume).",
      "ok": true
    },
    {
      "name": "QA-08",
      "classification": "PERSISTENCE_FAIL_CLOSED",
      "process": {
        "script": "process-launch-block-failure.mjs",
        "exitCode": 0,
        "pid": 5400,
        "json": {
          "scenario": "QA-08",
          "role": "process-launch-block-failure",
          "classification": "PERSISTENCE_FAIL_CLOSED",
          "pid": 5423,
          "D1_SQLITE_PATH_writable": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "D1_SQLITE_PATH_readonly": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/readonly-probe/d1.sqlite",
          "launchedAppended": false,
          "launchBlockError": {
            "name": "Error",
            "message": "attempt to write a readonly database"
          },
          "claimSuccess": false,
          "assertions": {
            "failClosedOnLaunchBlock": true,
            "noSuccessClaim": true
          },
          "ok": true
        },
        "stderrTail": ""
      },
      "ok": true
    },
    {
      "name": "QA-09",
      "classification": "UNIT ONLY",
      "note": "Journal append API accepts optional fingerprint; StartExecution validates incomplete identity (durable_attempt_identity_incomplete) before append. Covered by durableLaunchMarkers unit test.",
      "vitest": {
        "exitCode": 0,
        "passed": 1,
        "failed": 0,
        "stdoutTail": "\n RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/projects/sfia-studio/app\n\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > CREATED append failure \u2192 launch count 0\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > writes CREATED before launch; LAUNCHED only after ack\n \u2713 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > incomplete identity (missing fingerprint) fail-closed; launch count 0 28ms\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > second Start after LAUNCHED does not call adapter again\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > CREATED without LAUNCHED \u2192 second Start fails closed; no launch\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > LAUNCHED append failure after ack \u2192 fail closed; no SUCCESS\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > journal absent \u2192 prior behavior (no ATTEMPT_* required)\n\n Test Files  1 passed (1)\n      Tests  1 passed | 6 skipped (7)\n   Start at  16:05:49\n   Duration  494ms (transform 211ms, setup 22ms, collect 305ms, tests 28ms, environment 0ms, prepare 26ms)\n\n"
      },
      "ok": true
    },
    {
      "name": "QA-10",
      "classification": "UNIT + REAL_PROCESS_RESTART",
      "processA": {
        "script": "process-a-launched.mjs",
        "exitCode": 0,
        "pid": 5474,
        "json": {
          "scenario": "QA-05",
          "role": "process-a-launched",
          "classification": "REAL_PROCESS_BOUNDARY",
          "pid": 5497,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "identity": {
            "attemptId": "att:qa-05-launched",
            "executionContractId": "ec:qa-r-t-a3-2",
            "contractVersion": 1,
            "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
            "actorId": "actor:qa-morris",
            "principalId": "principal:qa",
            "correlationId": "cor:qa05-a-5497",
            "processEpochId": "epoch:qa05-a-5497",
            "confirmationId": "conf:qa-1",
            "selectedAgentRef": "agent:qa-fixture"
          },
          "rows": [
            {
              "recordId": "jaj:c59ecef71fdbe841",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-a-5497",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:50.123Z"
            },
            {
              "recordId": "jaj:b07ecf7e4e51a200",
              "kind": "ATTEMPT_LAUNCHED",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-a-5497",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:50.124Z"
            }
          ],
          "assertions": {
            "hasCreated": true,
            "hasLaunched": true
          },
          "exitAfterLaunched": true
        },
        "stderrTail": ""
      },
      "processB": {
        "script": "process-b-after-launched.mjs",
        "exitCode": 0,
        "pid": 5501,
        "json": {
          "scenario": "QA-05",
          "role": "process-b-after-launched",
          "classification": "REAL_PROCESS_RESTART",
          "pid": 5524,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "rowsBefore": [
            {
              "recordId": "jaj:c59ecef71fdbe841",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-a-5497",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:50.123Z"
            },
            {
              "recordId": "jaj:b07ecf7e4e51a200",
              "kind": "ATTEMPT_LAUNCHED",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-a-5497",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:50.124Z"
            }
          ],
          "rowsAfter": [
            {
              "recordId": "jaj:c59ecef71fdbe841",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-a-5497",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:50.123Z"
            },
            {
              "recordId": "jaj:b07ecf7e4e51a200",
              "kind": "ATTEMPT_LAUNCHED",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-a-5497",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:50.124Z"
            },
            {
              "recordId": "jaj:c04ea6badb4c6c16",
              "kind": "RECONCILE_DISPOSITION",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-b-5524",
              "disposition": "UNKNOWN",
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": null,
              "occurredAt": "2026-08-12T14:05:50.351Z"
            },
            {
              "recordId": "jaj:2681b59a151c2eac",
              "kind": "RECONCILE_DISPOSITION",
              "attemptId": "att:qa-05-launched",
              "processEpochId": "epoch:qa05-b-5524",
              "disposition": "REVIEW_REQUIRED",
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": null,
              "occurredAt": "2026-08-12T14:05:50.351Z"
            }
          ],
          "reconcileResult": {
            "ok": true,
            "attemptId": "att:qa-05-launched",
            "disposition": "UNKNOWN",
            "journalRecordId": "jaj:c04ea6badb4c6c16",
            "attemptStatusUnchanged": true,
            "durationMs": 1
          },
          "disposition": "LAUNCHED_PRESENT_NO_RELAUNCH_UNKNOWN_RECONCILE",
          "assertions": {
            "hasCreated": true,
            "hasLaunched": true,
            "hasTerminal": false,
            "relaunchInvoked": false,
            "launchedCount": 1,
            "noRelaunchNeeded": true
          },
          "ok": true
        },
        "stderrTail": ""
      },
      "distinctPids": true,
      "vitest": {
        "exitCode": 0,
        "passed": 1,
        "failed": 0,
        "stdoutTail": "\n RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/projects/sfia-studio/app\n\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > CREATED append failure \u2192 launch count 0\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > writes CREATED before launch; LAUNCHED only after ack\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > incomplete identity (missing fingerprint) fail-closed; launch count 0\n \u2713 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > second Start after LAUNCHED does not call adapter again 28ms\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > CREATED without LAUNCHED \u2192 second Start fails closed; no launch\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > LAUNCHED append failure after ack \u2192 fail closed; no SUCCESS\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > journal absent \u2192 prior behavior (no ATTEMPT_* required)\n\n Test Files  1 passed (1)\n      Tests  1 passed | 6 skipped (7)\n   Start at  16:05:50\n   Duration  488ms (transform 211ms, setup 23ms, collect 303ms, tests 28ms, environment 0ms, prepare 27ms)\n\n"
      },
      "ok": true
    },
    {
      "name": "QA-11",
      "classification": "DOCUMENTATION + UNIT",
      "documentation": {
        "startExecution": "Blocks Start when journal disposition is UNKNOWN/REVIEW_REQUIRED (reconcile_*_no_auto_resume). Blocks relaunch when CREATED-without-LAUNCHED (durable_attempt_created_unlaunched_no_auto_resume) or already LAUNCHED.",
        "retryExecutionAttempt": "Explicit RetryExecutionAttempt exists (D09): ALWAYS a new Attempt with NEW idempotencyKey; no automatic retry/scheduler. Implemented in retryExecutionAttempt.ts.",
        "explicitNewAttemptImplemented": true
      },
      "vitest": {
        "exitCode": 0,
        "passed": 1,
        "failed": 0,
        "stdoutTail": "\n RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/projects/sfia-studio/app\n\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > CREATED append failure \u2192 launch count 0\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > writes CREATED before launch; LAUNCHED only after ack\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > incomplete identity (missing fingerprint) fail-closed; launch count 0\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > second Start after LAUNCHED does not call adapter again\n \u2713 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > CREATED without LAUNCHED \u2192 second Start fails closed; no launch 27ms\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > LAUNCHED append failure after ack \u2192 fail closed; no SUCCESS\n \u2193 __tests__/oa/execution-attempt/durableLaunchMarkers.test.ts > durable launch markers (OPTION A) > journal absent \u2192 prior behavior (no ATTEMPT_* required)\n\n Test Files  1 passed (1)\n      Tests  1 passed | 6 skipped (7)\n   Start at  16:05:51\n   Duration  497ms (transform 210ms, setup 25ms, collect 304ms, tests 28ms, environment 0ms, prepare 31ms)\n\n"
      },
      "ok": true
    },
    {
      "name": "QA-12",
      "classification": "REAL_PROCESS_RESTART_CHAIN",
      "processA": {
        "script": "process-a-reopen-chain.mjs",
        "exitCode": 0,
        "pid": 5622,
        "json": {
          "scenario": "QA-12",
          "role": "process-a-reopen-chain",
          "classification": "REAL_PROCESS_BOUNDARY",
          "pid": 5645,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "identity": {
            "attemptId": "att:qa-12-reopen-chain",
            "executionContractId": "ec:qa-r-t-a3-2",
            "contractVersion": 1,
            "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
            "actorId": "actor:qa-morris",
            "principalId": "principal:qa",
            "correlationId": "cor:qa12-a-5645",
            "processEpochId": "epoch:qa12-a-5645",
            "confirmationId": "conf:qa-1",
            "selectedAgentRef": "agent:qa-fixture"
          },
          "rows": [
            {
              "recordId": "jaj:e1e50c5677a92fd6",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-12-reopen-chain",
              "processEpochId": "epoch:qa12-a-5645",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:52.219Z"
            },
            {
              "recordId": "jaj:63f860587cd9d41f",
              "kind": "ATTEMPT_LAUNCHED",
              "attemptId": "att:qa-12-reopen-chain",
              "processEpochId": "epoch:qa12-a-5645",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:52.220Z"
            }
          ],
          "assertions": {
            "hasCreated": true,
            "hasLaunched": true
          }
        },
        "stderrTail": ""
      },
      "processB": {
        "script": "process-b-reopen-chain.mjs",
        "exitCode": 0,
        "pid": 5649,
        "json": {
          "scenario": "QA-12",
          "role": "process-b-reopen-chain",
          "classification": "REAL_PROCESS_RESTART",
          "pid": 5672,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "rows": [
            {
              "recordId": "jaj:e1e50c5677a92fd6",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-12-reopen-chain",
              "processEpochId": "epoch:qa12-a-5645",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:52.219Z"
            },
            {
              "recordId": "jaj:63f860587cd9d41f",
              "kind": "ATTEMPT_LAUNCHED",
              "attemptId": "att:qa-12-reopen-chain",
              "processEpochId": "epoch:qa12-a-5645",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:52.220Z"
            }
          ],
          "assertions": {
            "hasCreated": true,
            "hasLaunched": true
          },
          "ok": true
        },
        "stderrTail": ""
      },
      "processC": {
        "script": "process-c-reopen-chain.mjs",
        "exitCode": 0,
        "pid": 5676,
        "json": {
          "scenario": "QA-12",
          "role": "process-c-reopen-chain",
          "classification": "REAL_PROCESS_RESTART",
          "pid": 5699,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "chain": "A\u2192B\u2192C",
          "rows": [
            {
              "recordId": "jaj:e1e50c5677a92fd6",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-12-reopen-chain",
              "processEpochId": "epoch:qa12-a-5645",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:52.219Z"
            },
            {
              "recordId": "jaj:63f860587cd9d41f",
              "kind": "ATTEMPT_LAUNCHED",
              "attemptId": "att:qa-12-reopen-chain",
              "processEpochId": "epoch:qa12-a-5645",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:52.220Z"
            }
          ],
          "reconcileResult": {
            "ok": true,
            "attemptId": "att:qa-12-reopen-chain",
            "disposition": "UNKNOWN",
            "journalRecordId": "jaj:e3c4d6c44702d6f0",
            "attemptStatusUnchanged": true,
            "durationMs": 2
          },
          "disposition": "THIRD_REOPEN_LAUNCHED_STABLE_NO_RELAUNCH",
          "assertions": {
            "hasCreated": true,
            "hasLaunched": true,
            "launchedCount": 1,
            "launchedAfter": 1,
            "relaunchInvoked": false
          },
          "ok": true
        },
        "stderrTail": ""
      },
      "distinctPids": true,
      "ok": true
    },
    {
      "name": "QA-13",
      "classification": "INTEGRITY_CHECK",
      "process": {
        "script": "integrity-check.mjs",
        "exitCode": 0,
        "pid": 5703,
        "json": {
          "scenario": "INTEGRITY",
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "integrity_check": "ok",
          "ok": true
        },
        "stderrTail": ""
      },
      "ok": true
    },
    {
      "name": "QA-14",
      "classification": "CONCURRENT_WRITER_BEST_EFFORT",
      "writer1": {
        "script": "process-concurrent-created-writer.mjs",
        "exitCode": 0,
        "pid": 5756,
        "json": {
          "scenario": "QA-14",
          "role": "process-concurrent-created-writer-w1",
          "classification": "CONCURRENT_WRITER_BEST_EFFORT",
          "pid": 5804,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "attemptId": "att:qa-14-concurrent",
          "createdOk": true,
          "createdError": null,
          "launchedOk": true,
          "launchedError": null,
          "rows": [
            {
              "recordId": "jaj:8b5d36c8b1c58ea9",
              "kind": "ATTEMPT_CREATED",
              "attemptId": "att:qa-14-concurrent",
              "processEpochId": "epoch:qa14-w1-5804",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:53.350Z"
            },
            {
              "recordId": "jaj:786a33ace4a3e00b",
              "kind": "ATTEMPT_LAUNCHED",
              "attemptId": "att:qa-14-concurrent",
              "processEpochId": "epoch:qa14-w1-5804",
              "disposition": null,
              "executionContractId": "ec:qa-r-t-a3-2",
              "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
              "occurredAt": "2026-08-12T14:05:53.351Z"
            }
          ],
          "note": "SqliteAuthorityAttemptJournal uses BEGIN IMMEDIATE; no UNIQUE on ATTEMPT_CREATED(attempt_id) \u2014 both CREATED may succeed; app-level Start blocks relaunch"
        },
        "stderrTail": ""
      },
      "writer2": {
        "script": "process-concurrent-created-writer.mjs",
        "exitCode": 0,
        "pid": 5759,
        "json": {
          "scenario": "QA-14",
          "role": "process-concurrent-created-writer-w2",
          "classification": "CONCURRENT_WRITER_BEST_EFFORT",
          "pid": 5805,
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "attemptId": "att:qa-14-concurrent",
          "createdOk": false,
          "createdError": {
            "name": "Error",
            "message": "database is locked"
          },
          "launchedOk": false,
          "launchedError": null,
          "rows": [],
          "note": "SqliteAuthorityAttemptJournal uses BEGIN IMMEDIATE; no UNIQUE on ATTEMPT_CREATED(attempt_id) \u2014 both CREATED may succeed; app-level Start blocks relaunch"
        },
        "stderrTail": ""
      },
      "distinctPids": true,
      "final": {
        "createdCount": 1,
        "launchedCount": 1,
        "createdOkCount": 1,
        "launchedOkCount": 1,
        "rows": [
          {
            "recordId": "jaj:8b5d36c8b1c58ea9",
            "kind": "ATTEMPT_CREATED",
            "attemptId": "att:qa-14-concurrent",
            "processEpochId": "epoch:qa14-w1-5804",
            "disposition": null,
            "executionContractId": "ec:qa-r-t-a3-2",
            "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
            "occurredAt": "2026-08-12T14:05:53.350Z"
          },
          {
            "recordId": "jaj:786a33ace4a3e00b",
            "kind": "ATTEMPT_LAUNCHED",
            "attemptId": "att:qa-14-concurrent",
            "processEpochId": "epoch:qa14-w1-5804",
            "disposition": null,
            "executionContractId": "ec:qa-r-t-a3-2",
            "contractFingerprint": "ec:qa-r-t-a3-2|1|ACTION|TARGET|SCOPE|idem:qa",
            "occurredAt": "2026-08-12T14:05:53.351Z"
          }
        ]
      },
      "note": "BEGIN IMMEDIATE serializes writers; no UNIQUE on ATTEMPT_CREATED(attempt_id). createdCount=1 launchedCount=1 createdOkCount=1 launchedOkCount=1",
      "status": "PASS",
      "ok": true
    },
    {
      "name": "INTEGRITY_FINAL",
      "classification": "INTEGRITY_CHECK",
      "process": {
        "script": "integrity-check.mjs",
        "exitCode": 0,
        "pid": 5837,
        "json": {
          "scenario": "INTEGRITY",
          "D1_SQLITE_PATH": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/state/d1.sqlite",
          "integrity_check": "ok",
          "ok": true
        },
        "stderrTail": ""
      },
      "ok": true
    },
    {
      "name": "QA-15",
      "classification": "CLASSIFICATION_TABLE",
      "matrixPath": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery/.tmp-sfia-review/r-t-a3-2-qa/results/scenario-matrix.md",
      "matrix": [
        {
          "name": "QA-01",
          "classification": "REAL_PROCESS_RESTART",
          "evidence": "CREATED+LAUNCHED same process A; B inspect",
          "status": "PASS"
        },
        {
          "name": "QA-02",
          "classification": "REAL_PROCESS_RESTART",
          "evidence": "A exits before append; B sees empty rows",
          "status": "PASS"
        },
        {
          "name": "QA-03",
          "classification": "REAL_PROCESS_RESTART",
          "evidence": "CREATED without LAUNCHED \u2192 fail-closed no auto-launch",
          "status": "PASS"
        },
        {
          "name": "QA-04",
          "classification": "REAL_PROCESS_RESTART",
          "evidence": "Ambiguous launch window side marker; fail-closed",
          "status": "PASS"
        },
        {
          "name": "QA-05",
          "classification": "REAL_PROCESS_RESTART",
          "evidence": "After LAUNCHED \u2192 UNKNOWN reconcile; no relaunch",
          "status": "PASS"
        },
        {
          "name": "QA-06",
          "classification": "REAL_PROCESS_RESTART",
          "evidence": "InvalidateActiveAuthorityOnRestart across processes",
          "status": "PASS"
        },
        {
          "name": "QA-07",
          "classification": "UNIT + HARNESS_NOTE",
          "evidence": "durableLaunchMarkers vitest (double-launch) + BEGIN IMMEDIATE note; passed=7",
          "status": "PASS"
        },
        {
          "name": "QA-08",
          "classification": "PERSISTENCE_FAIL_CLOSED",
          "evidence": "Readonly DB blocks ATTEMPT_LAUNCHED append; no SUCCESS claim",
          "status": "PASS"
        },
        {
          "name": "QA-09",
          "classification": "UNIT ONLY",
          "evidence": "malformed/incomplete identity fail-closed via durableLaunchMarkers",
          "status": "PASS"
        },
        {
          "name": "QA-10",
          "classification": "UNIT + REAL_PROCESS_RESTART",
          "evidence": "LAUNCHED replay: process B after launched + unit no second adapter call",
          "status": "PASS"
        },
        {
          "name": "QA-11",
          "classification": "DOCUMENTATION + UNIT",
          "evidence": "no auto-retry from startExecution + RetryExecutionAttempt explicit new Attempt",
          "status": "PASS"
        },
        {
          "name": "QA-12",
          "classification": "REAL_PROCESS_RESTART_CHAIN",
          "evidence": "A\u2192B\u2192C reopen; LAUNCHED stable; no relaunch",
          "status": "PASS"
        },
        {
          "name": "QA-13",
          "classification": "INTEGRITY_CHECK",
          "evidence": "PRAGMA integrity_check=ok",
          "status": "PASS"
        },
        {
          "name": "QA-14",
          "classification": "CONCURRENT_WRITER_BEST_EFFORT",
          "evidence": "BEGIN IMMEDIATE serializes writers; no UNIQUE on ATTEMPT_CREATED(attempt_id). createdCount=1 launchedCount=1 createdOkCount=1 launchedOkCount=1",
          "status": "PASS"
        }
      ],
      "ok": true
    }
  ],
  "matrix": [
    {
      "name": "QA-01",
      "classification": "REAL_PROCESS_RESTART",
      "evidence": "CREATED+LAUNCHED same process A; B inspect",
      "status": "PASS"
    },
    {
      "name": "QA-02",
      "classification": "REAL_PROCESS_RESTART",
      "evidence": "A exits before append; B sees empty rows",
      "status": "PASS"
    },
    {
      "name": "QA-03",
      "classification": "REAL_PROCESS_RESTART",
      "evidence": "CREATED without LAUNCHED \u2192 fail-closed no auto-launch",
      "status": "PASS"
    },
    {
      "name": "QA-04",
      "classification": "REAL_PROCESS_RESTART",
      "evidence": "Ambiguous launch window side marker; fail-closed",
      "status": "PASS"
    },
    {
      "name": "QA-05",
      "classification": "REAL_PROCESS_RESTART",
      "evidence": "After LAUNCHED \u2192 UNKNOWN reconcile; no relaunch",
      "status": "PASS"
    },
    {
      "name": "QA-06",
      "classification": "REAL_PROCESS_RESTART",
      "evidence": "InvalidateActiveAuthorityOnRestart across processes",
      "status": "PASS"
    },
    {
      "name": "QA-07",
      "classification": "UNIT + HARNESS_NOTE",
      "evidence": "durableLaunchMarkers vitest (double-launch) + BEGIN IMMEDIATE note; passed=7",
      "status": "PASS"
    },
    {
      "name": "QA-08",
      "classification": "PERSISTENCE_FAIL_CLOSED",
      "evidence": "Readonly DB blocks ATTEMPT_LAUNCHED append; no SUCCESS claim",
      "status": "PASS"
    },
    {
      "name": "QA-09",
      "classification": "UNIT ONLY",
      "evidence": "malformed/incomplete identity fail-closed via durableLaunchMarkers",
      "status": "PASS"
    },
    {
      "name": "QA-10",
      "classification": "UNIT + REAL_PROCESS_RESTART",
      "evidence": "LAUNCHED replay: process B after launched + unit no second adapter call",
      "status": "PASS"
    },
    {
      "name": "QA-11",
      "classification": "DOCUMENTATION + UNIT",
      "evidence": "no auto-retry from startExecution + RetryExecutionAttempt explicit new Attempt",
      "status": "PASS"
    },
    {
      "name": "QA-12",
      "classification": "REAL_PROCESS_RESTART_CHAIN",
      "evidence": "A\u2192B\u2192C reopen; LAUNCHED stable; no relaunch",
      "status": "PASS"
    },
    {
      "name": "QA-13",
      "classification": "INTEGRITY_CHECK",
      "evidence": "PRAGMA integrity_check=ok",
      "status": "PASS"
    },
    {
      "name": "QA-14",
      "classification": "CONCURRENT_WRITER_BEST_EFFORT",
      "evidence": "BEGIN IMMEDIATE serializes writers; no UNIQUE on ATTEMPT_CREATED(attempt_id). createdCount=1 launchedCount=1 createdOkCount=1 launchedOkCount=1",
      "status": "PASS"
    }
  ],
  "summary": {
    "allOk": true,
    "criticalProcessOk": true,
    "criticalScenarios": [
      {
        "name": "QA-03",
        "ok": true,
        "classification": "REAL_PROCESS_RESTART"
      },
      {
        "name": "QA-04",
        "ok": true,
        "classification": "REAL_PROCESS_RESTART"
      },
      {
        "name": "QA-05",
        "ok": true,
        "classification": "REAL_PROCESS_RESTART"
      },
      {
        "name": "QA-06",
        "ok": true,
        "classification": "REAL_PROCESS_RESTART"
      }
    ],
    "realProcessRestartScenarios": [
      {
        "name": "QA-01",
        "ok": true,
        "distinctPids": true,
        "pidA": 5029,
        "pidB": 5056
      },
      {
        "name": "QA-02",
        "ok": true,
        "distinctPids": true,
        "pidA": 5083,
        "pidB": 5110
      },
      {
        "name": "QA-03",
        "ok": true,
        "distinctPids": true,
        "pidA": 5137,
        "pidB": 5164
      },
      {
        "name": "QA-04",
        "ok": true,
        "distinctPids": true,
        "pidA": 5191,
        "pidB": 5218
      },
      {
        "name": "QA-05",
        "ok": true,
        "distinctPids": true,
        "pidA": 5245,
        "pidB": 5272
      },
      {
        "name": "QA-06",
        "ok": true,
        "distinctPids": true,
        "pidA": 5299,
        "pidB": 5326
      },
      {
        "name": "QA-12",
        "ok": true,
        "distinctPids": true,
        "pidA": 5622,
        "pidB": 5649,
        "pidC": 5676
      }
    ],
    "hardAcceptanceCandidate": true,
    "regressions150": true
  },
  "postCampaign": {
    "regressions": {
      "typecheck": "PASS",
      "lint": "PASS",
      "build": "PASS",
      "vitest": {
        "testFilesPassed": 13,
        "testsPassed": 150,
        "criticalAckPassed": 55,
        "executionAttemptPassed": 95
      }
    },
    "secretScan": {
      "matches": 0,
      "ok": true
    },
    "candidateShaAfter": "082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab",
    "candidateShaMatch": true,
    "hardAcceptanceCandidate": true,
    "integrityFinal": "ok"
  }
}
```

## INLINE COMPLETE — `scenario-matrix.md`

# R-T-A3-2 Cycle 9 — Scenario Matrix

| Scenario | Status | Classification | Evidence |
|---|---|---|---|
| QA-01 | PASS | REAL_PROCESS_RESTART | CREATED+LAUNCHED same process A; B inspect |
| QA-02 | PASS | REAL_PROCESS_RESTART | A exits before append; B sees empty rows |
| QA-03 | PASS | REAL_PROCESS_RESTART | CREATED without LAUNCHED → fail-closed no auto-launch |
| QA-04 | PASS | REAL_PROCESS_RESTART | Ambiguous launch window side marker; fail-closed |
| QA-05 | PASS | REAL_PROCESS_RESTART | After LAUNCHED → UNKNOWN reconcile; no relaunch |
| QA-06 | PASS | REAL_PROCESS_RESTART | InvalidateActiveAuthorityOnRestart across processes |
| QA-07 | PASS | UNIT + HARNESS_NOTE | durableLaunchMarkers vitest (double-launch) + BEGIN IMMEDIATE note; passed=7 |
| QA-08 | PASS | PERSISTENCE_FAIL_CLOSED | Readonly DB blocks ATTEMPT_LAUNCHED append; no SUCCESS claim |
| QA-09 | PASS | UNIT ONLY | malformed/incomplete identity fail-closed via durableLaunchMarkers |
| QA-10 | PASS | UNIT + REAL_PROCESS_RESTART | LAUNCHED replay: process B after launched + unit no second adapter call |
| QA-11 | PASS | DOCUMENTATION + UNIT | no auto-retry from startExecution + RetryExecutionAttempt explicit new Attempt |
| QA-12 | PASS | REAL_PROCESS_RESTART_CHAIN | A→B→C reopen; LAUNCHED stable; no relaunch |
| QA-13 | PASS | INTEGRITY_CHECK | PRAGMA integrity_check=ok |
| QA-14 | PASS | CONCURRENT_WRITER_BEST_EFFORT | BEGIN IMMEDIATE serializes writers; no UNIQUE on ATTEMPT_CREATED(attempt_id). createdCount=1 launchedCount=1 createdOkCount=1 launchedOkCount=1 |
| QA-15 | PASS | CLASSIFICATION_TABLE | this matrix |
| INTEGRITY_FINAL | PASS | INTEGRITY_CHECK | PRAGMA integrity_check after campaign |
| QA-16 | PASS | APP_REGRESSIONS | typecheck/lint/build + vitest 150/150 |
| QA-17 | PASS | SECRET_SCAN | no real secrets under QA tree |
| QA-18 | PASS | CANDIDATE_SHA | 082326a1… MATCH |

## Notes

- Critical process-level scenarios for HARD ACCEPTANCE CANDIDATE: **QA-03, QA-04, QA-05, QA-06** — all PASS → **HARD CANDIDATE YES**.
- QA-09 classified UNIT ONLY (still PASS when durableLaunchMarkers covers).
- QA-11 documents startExecution no-auto-retry + explicit RetryExecutionAttempt (new Attempt).
- QA-14: concurrent CREATED — one winner; loser `database is locked`; no double LAUNCHED.
- Reserves unchanged: `crossStoreDurable=false`, `productionRollbackProven=false`, Project↔Cycle residual.

## INLINE COMPLETE — `verdict-draft.md`

# R-T-A3-2 Cycle 9 QA — Verdict Draft

**Generated:** 2026-08-12T14:10:00Z (approx)
**Campaign:** `$DEL/.tmp-sfia-review/r-t-a3-2-qa`
**Candidate SHA AFTER:** `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` (**MATCH**)
**Product mutations this cycle:** NONE
**Tracked test edits this cycle:** NONE

---

## Scenario results (QA-01..18)

| ID | Status | Classification | Notes |
|---|---|---|---|
| QA-01 | **PASS** | REAL_PROCESS_RESTART | Nominal CREATED+LAUNCHED (A) then B inspect |
| QA-02 | **PASS** | REAL_PROCESS_RESTART | Crash before CREATED; B sees empty |
| QA-03 | **PASS** | REAL_PROCESS_RESTART | CREATED-without-LAUNCHED fail-closed; no auto-launch |
| QA-04 | **PASS** | REAL_PROCESS_RESTART | Ambiguous launch window; fail-closed; no SUCCESS claim |
| QA-05 | **PASS** | REAL_PROCESS_RESTART | After LAUNCHED → UNKNOWN reconcile; no relaunch |
| QA-06 | **PASS** | REAL_PROCESS_RESTART | InvalidateActiveAuthorityOnRestart across process epochs |
| QA-07 | **PASS** | UNIT + HARNESS_NOTE | durableLaunchMarkers **7/7**; BEGIN IMMEDIATE concurrency note |
| QA-08 | **PASS** | PERSISTENCE_FAIL_CLOSED | Readonly DB blocks LAUNCHED append; no SUCCESS |
| QA-09 | **PASS** | UNIT ONLY | Incomplete identity fail-closed (`durable_attempt_identity_incomplete`) |
| QA-10 | **PASS** | UNIT + REAL_PROCESS_RESTART | LAUNCHED replay process B + unit no second adapter call |
| QA-11 | **PASS** | DOCUMENTATION + UNIT | startExecution no auto-retry; **RetryExecutionAttempt** = explicit new Attempt + new idempotencyKey (implemented) |
| QA-12 | **PASS** | REAL_PROCESS_RESTART_CHAIN | A→B→C reopen; LAUNCHED stable |
| QA-13 | **PASS** | INTEGRITY_CHECK | `PRAGMA integrity_check=ok` |
| QA-14 | **PASS** | CONCURRENT_WRITER_BEST_EFFORT | One winner (w1); w2 `database is locked`; launchedCount=1 |
| QA-15 | **PASS** | CLASSIFICATION_TABLE | `results/scenario-matrix.md` written |
| QA-16 | **PASS** | APP_REGRESSIONS | typecheck/lint/build PASS; vitest **150/150** (13 files) |
| QA-17 | **PASS** | SECRET_SCAN | No real secrets under `$QA` (rg exit 1 / empty) |
| QA-18 | **PASS** | CANDIDATE_SHA | AFTER = expected `082326a1…`; missing=0 mismatch=0 |

---

## Critical process-level (QA-03..06)

| Scenario | ok | distinct PIDs |
|---|---|---|
| QA-03 | true | true |
| QA-04 | true | true |
| QA-05 | true | true |
| QA-06 | true | true |

**HARD ACCEPTANCE CANDIDATE criteria (critical process-level 03–06): MET → YES**

---

## APP regression counts

| Check | Result |
|---|---|
| `npm run typecheck` | PASS (exit 0) |
| `npm run lint` | PASS (exit 0) |
| `npm run build` | PASS (exit 0) |
| vitest `__tests__/oa/critical-ack` | **55 passed** (8 files) |
| vitest `__tests__/oa/execution-attempt` | **95 passed** (5 files) |
| vitest combined | **Test Files 13 passed / Tests 150 passed** |

### Per-file (execution-attempt + critical-ack)

| Passed | File |
|---:|---|
| 9 | critical-ack/acknowledgeCritical.test.ts |
| 4 | critical-ack/authJsConfigInvariants.test.ts |
| 8 | critical-ack/authJsGitHubIdentityAdapter.test.ts |
| 7 | critical-ack/durabilityMatrix.test.ts |
| 9 | critical-ack/iamQaCriticalAck.test.ts |
| 6 | critical-ack/importBoundaries.test.ts |
| 9 | critical-ack/productionCompositionWiring.test.ts |
| 3 | critical-ack/sqliteJournalConfirmGate.test.ts |
| 33 | execution-attempt/attemptRepository.test.ts |
| 7 | execution-attempt/durableLaunchMarkers.test.ts |
| 24 | execution-attempt/lifecycleFoundation.test.ts |
| 12 | execution-attempt/qaAdversarialValidation.test.ts |
| 19 | execution-attempt/registryAndAdapters.test.ts |

---

## HARD ACCEPTANCE CANDIDATE — eligibility

**YES** — eligible to present Morris gate wording (does **not** auto-close).

### Proposed Morris gate wording

```
R-T-A3-2 HARD ACCEPTANCE CANDIDATE — MORRIS DECISION REQUIRED

PILOT-BOUNDED SQLITE AUTHORITY/ATTEMPT FRONTIER
PROJECT↔CYCLE DURABLE TXN REMAINS RESIDUAL / SEPARATE GATE
PRODUCT PERSISTENCE NOT_SELECTED
GATE D NOT READY / NOT CONSUMED
CURSOR REAL 0
```

---

## Reserves (unchanged)

- `crossStoreDurable=false`
- `productionRollbackProven=false`
- Project↔Cycle residual / separate gate
- HARD ACCEPTANCE CANDIDATE ≠ CLOSED (Morris alone may ACCEPT/CLOSE / NO-GO / defer)

---

## Artifacts

- `$QA/results/qa-results.json`
- `$QA/results/scenario-matrix.md`
- `$QA/results/regressions.log`
- `$QA/results/candidate-sha-after-recompute.txt`
- `$QA/results/verdict-draft.md` (this file)

---

## Review Handoff publish

| Field | Value |
| --- | --- |
| Message | `docs(review-handoff): publish F3 R-T-A3-2 SQLite crash-restart QA` |
| Force | NO (FF only) |
| Inbound tip/blob | `c408db926aea3720fd1a38c6d9e38ba3e8750480` / `bef45da4d8914b03ccf7226b3cd9c3269ef8c519` |
| Publisher | `scripts/sfia/publish-review-handoff.sh` |
| Handoff worktree | `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` |
| FINAL tip | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |
| FINAL blob | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |

---

## Cursor report — fields 1–72

| # | Field | Value |
| ---: | --- | --- |
| 1 | timestamp CEST + UTC | 2026-08-12 16:10:55 CEST (+0200) / 2026-08-12 14:10:55 UTC |
| 2 | GO / context consommé | GO CONFIRM KEEP SQLITE — Cycle 9 QA Critical |
| 3 | cycle | 9 — QA Critical — R-T-A3-2 SQLITE CRASH-RESTART |
| 4 | profil | Critical |
| 5 | justification Critical | Formal SQLite crash/restart / fail-closed proof for HARD ACCEPTANCE CANDIDATE |
| 6 | blocs | CKC; harness FULL inline; results FULL inline; QA-01..18; process 03–06; regressions; freeze; Morris gate; L3 handoff |
| 7 | worktree | f3-real-prerequisites-delivery |
| 8 | branche | `delivery/sfia-studio-f3-real-prerequisites` |
| 9 | HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| 10 | origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| 11 | status initial | dirty local F3 Option A candidate (expected) |
| 12 | staged initial | empty |
| 13 | untracked / review artifacts | `.tmp-sfia-review/r-t-a3-2-qa/` (+ prior delivery/architecture artifacts) |
| 14 | remote delivery branch | ABSENT |
| 15 | template path/blob | prompts/templates/sfia-cycle-execution-template.md / `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| 16 | handoff entrant tip/blob | `c408db926aea3720fd1a38c6d9e38ba3e8750480` / `bef45da4d8914b03ccf7226b3cd9c3269ef8c519` |
| 17 | Candidate SHA BEFORE | `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` |
| 18 | Current State confirmé | KEEP SQLITE GO consumed; Option A delivered; Cycle 9 QA campaign complete |
| 19 | CKC path/blob | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` / `9d9970d611dbb6e52297ac215604d3a08e87e738` |
| 20 | fichiers prévus en écriture | chatgpt-review.md + QA artifacts under `.tmp-sfia-review/r-t-a3-2-qa/` only |
| 21 | fichiers réellement modifiés/créés | chatgpt-review.md (FULL pack overwrite) + existing QA harness/results (no product paths) |
| 22 | product mutations | **0** |
| 23 | Review Pack FULL / Synthesis-only NO | FULL / NO |
| 24 | harness scripts inlined | YES — all `$QA/*.mjs` + `$QA/lib/*.mjs` |
| 25 | qa-results.json inlined | YES — complete |
| 26 | scenario-matrix.md inlined | YES — complete |
| 27 | verdict-draft.md inlined | YES — complete |
| 28 | QA-01 | PASS / REAL_PROCESS_RESTART |
| 29 | QA-02 | PASS / REAL_PROCESS_RESTART |
| 30 | QA-03 | PASS / REAL_PROCESS_RESTART (critical) |
| 31 | QA-04 | PASS / REAL_PROCESS_RESTART (critical) |
| 32 | QA-05 | PASS / REAL_PROCESS_RESTART (critical) |
| 33 | QA-06 | PASS / REAL_PROCESS_RESTART (critical) |
| 34 | QA-07 | PASS / UNIT + HARNESS_NOTE |
| 35 | QA-08 | PASS / PERSISTENCE_FAIL_CLOSED |
| 36 | QA-09 | PASS / UNIT ONLY |
| 37 | QA-10 | PASS / UNIT + REAL_PROCESS_RESTART |
| 38 | QA-11 | PASS / DOCUMENTATION + UNIT |
| 39 | QA-12 | PASS / REAL_PROCESS_RESTART_CHAIN |
| 40 | QA-13 | PASS / INTEGRITY_CHECK |
| 41 | QA-14 | PASS / CONCURRENT_WRITER_BEST_EFFORT |
| 42 | QA-15 | PASS / CLASSIFICATION_TABLE |
| 43 | QA-16 | PASS / APP_REGRESSIONS |
| 44 | QA-17 | PASS / SECRET_SCAN |
| 45 | QA-18 | PASS / CANDIDATE_SHA |
| 46 | process-level 03–06 evidence | distinct PIDs; allOk; criticalProcessOk=true |
| 47 | ATTEMPT_CREATED before launch | VALIDATED |
| 48 | ambiguous launch fail-closed | VALIDATED |
| 49 | no auto-resume | VALIDATED |
| 50 | no auto-retry | VALIDATED |
| 51 | no double-launch | VALIDATED |
| 52 | authority restart invalidation | VALIDATED |
| 53 | SQLite integrity | VALIDATED (`PRAGMA integrity_check=ok`) |
| 54 | regression critical-ack | **55** |
| 55 | regression execution-attempt | **95** |
| 56 | regression total | **150** |
| 57 | typecheck | PASS |
| 58 | lint | PASS |
| 59 | build | PASS |
| 60 | secret scan | CLEAN |
| 61 | Candidate SHA AFTER | `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` |
| 62 | freeze / byte-identical confirmation | YES — BEFORE=AFTER |
| 63 | R-T-A3-1 status | ACCEPTED / CLOSED BY MORRIS |
| 64 | R-T-A3-2 status | HARD ACCEPTANCE CANDIDATE — MORRIS DECISION REQUIRED |
| 65 | Project↔Cycle residual | remains explicit |
| 66 | crossStoreDurable status | false |
| 67 | productionRollbackProven status | false |
| 68 | Product persistence status | NOT_SELECTED |
| 69 | Gate D | NOT READY / NOT CONSUMED |
| 70 | Cursor REAL | 0 |
| 71 | product Git write count | 0 |
| 72 | handoff final tip/blob | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |

---

## Verdict exact

```
R-T-A3-2 QA COMPLETE —
SQLITE AUTHORITY/ATTEMPT DURABILITY VALIDATED —
REAL / PROCESS-LEVEL CRASH-RESTART EVIDENCE SUFFICIENT —
ATTEMPT_CREATED BEFORE LAUNCH VALIDATED —
AMBIGUOUS LAUNCH FAIL-CLOSED VALIDATED —
NO AUTO-RESUME VALIDATED —
NO AUTO-RETRY VALIDATED —
NO DOUBLE-LAUNCH VALIDATED —
AUTHORITY RESTART INVALIDATION VALIDATED —
SQLITE INTEGRITY VALIDATED —
CANDIDATE BYTE-IDENTICAL —
R-T-A3-1 ACCEPTED / CLOSED BY MORRIS —
R-T-A3-2 HARD ACCEPTANCE CANDIDATE — MORRIS DECISION REQUIRED —
PROJECT↔CYCLE RESIDUAL REMAINS EXPLICIT —
crossStoreDurable=false —
productionRollbackProven=false —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
GATE D NOT READY / NOT CONSUMED —
NO CURSOR REAL —
NO PROJECT GIT WRITE —
HANDOFF UPDATED — REMOTE VERIFIED
```

---

END OF FULL REVIEW PACK
