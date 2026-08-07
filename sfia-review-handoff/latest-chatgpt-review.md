# ChatGPT Review Pack — FinOps T6-foundation post-T2 Integration Preparation

## Meta

- date_cest: 2026-08-07 15:52:52 CEST (+0200)
- date_utc: 2026-08-07 13:52:52 UTC
- cycle: 6 — Architecture technique
- profil: Critical
- typologie: EVOL / RUN / ARCH
- mode: T6-foundation post-T2 integration preparation
- GO Morris exact: `GO préparation intégration T6-foundation sur main post-T2.`
- GO autorise: découverte T6 historique · comparaison main · preuves `.tmp-sfia-review/**` · probe temporaire · Full pack · publish Review Handoff
- GO N'autorise PAS: modif vraie branche/WT T6 · rebase/merge main→T6 · nouvelle Delivery · main · git add/commit/push/PR/merge projet · T6-ext-T2 · T3–T5/T7 · Neon · provider-real · global runtime composition · R-PR-T2-API-01 hardening
- Repo: `mcleland147/sfia-workspace`
- Cycle Knowledge Contract: `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` (candidate / experimental / no execution authority)

## Verdict (pack)

```
T6 FOUNDATION POST-T2 INTEGRATION PREPARATION COMPLETE —
HISTORICAL T6 SOURCE VERIFIED —
CURRENT MAIN VERIFIED —
T2/T6 FOUNDATION MANIFESTS COMPATIBLE —
MIGRATION ORDER VERIFIED —
SCRATCH INTEGRATION PROBE GREEN —
T2 REGRESSION GREEN —
T6 FOUNDATION REGRESSION GREEN —
T6-EXT-T2 EXCLUDED —
GLOBAL RUNTIME COMPOSITION RESERVE PRESERVED —
R-PR-T2-API-01 UNTOUCHED —
OPTION A REMATERIALIZE ON FRESH MAIN RECOMMENDED —
NO PROJECT CHANGE —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
READY FOR MORRIS T6 FOUNDATION INTEGRATION DELIVERY GATE
```

## 1. Sources méthode

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md`
- `scripts/sfia/publish-review-handoff.sh`

## 2. Sources projet (main)

Docs 103, 125, 135–142, 144 ; runtime `projects/sfia-studio/app/lib/oa/finops/**`, migrations, `__tests__/oa/finops/**`, `package.json`, `.github/workflows/sfia-studio-ci.yml`.

## 3. Git Truth main

| Field | Value |
| --- | --- |
| orchestration WT | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| HEAD | `e1e00df244aa78a063bf2abf21f69325e1036f3a` (detached at origin/main) |
| origin/main | `e1e00df244aa78a063bf2abf21f69325e1036f3a` |
| expected main | `e1e00df244aa78a063bf2abf21f69325e1036f3a` |
| MAIN DRIFT | **NO** |
| tracked porcelain (non-`.tmp`) | empty / tracked-clean |
| MAIN WT also present | `…/worktrees/finops-t2-main` @ `e1e00df…` on `main` |

## 4. Current handoff (incoming)

| Field | Value |
| --- | --- |
| branch | `sfia/review-handoff` |
| tip | `6aad1053729794882b180f9a47b34bf4628e66b0` |
| blob | `81a5e5aed595e263d2c5c478efd4ad36645b3dd0` (`sfia-review-handoff/latest-chatgpt-review.md`) |
| commit | `docs(review-handoff): publish T2 post-merge` |
| match expected | **YES** |

## 5. Historical T6 handoff

| Field | Value |
| --- | --- |
| commit | `3f40c7b4cc2a748fbc114068575f3d2a62ad7521` |
| file | `sfia-review-handoff/latest-chatgpt-review.md` |
| title | ChatGPT Review Pack — FinOps T6-foundation Delivery |
| historical verdict | FINOPS TECHNICAL LOT T6-FOUNDATION — VALIDATED WITH RESERVES |
| evidence copy | `.tmp-sfia-review/t6-post-t2-preparation/historical-t6-handoff.md` (1502 lines) |

## 6. Historical T6 base / branch / worktree

| Field | Value |
| --- | --- |
| worktree | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t6-foundation` |
| branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t6-foundation-audit` |
| HEAD | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |
| expected HEAD | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |
| project commit/push/PR | NO / NO / NO |
| remote T6 delivery branch | **absent** (local-only historical Delivery) |

## 7. Local worktree map (relevant)

- `finops-t1-pack` — orchestration @ origin/main `e1e00df…`
- `finops-t2-main` — main WT @ `e1e00df…`
- `finops-t6-foundation` — historical T6 source @ `093fd91…` (**NOT modified this cycle**)
- `finops-t6-post-t2-probe` — disposable detached probe @ `e1e00df…` + T6 overlay (kept for evidence)

## 8. Local T6 source discovery

- Historical WT **FOUND** and unique.
- No divergent second T6 snapshot requiring STOP.
- Contamination check: project mods = exactly T6 manifest 9 paths (+ ignored `.tmp-sfia-review/` / historical `node_modules` if any). **NOT CONTAMINATED.**

## 9. Exact source manifest (9)

| Op | Path | Local state |
| --- | --- | --- |
| MODIFY | `projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts` | ` M` |
| CREATE | `…/finopsAuditTypes.ts` | `??` |
| CREATE | `…/ports/finopsAuditJournalPort.ts` | `??` |
| CREATE | `…/postgres/postgresFinOpsAuditJournal.ts` | `??` |
| CREATE | `…/postgres/redactFinOpsAuditPayload.ts` | `??` |
| CREATE | `…/db/migrations/1754600001000_finops-t6-audit-journal.js` | `??` |
| CREATE | `…/__tests__/oa/finops/t6.audit.unit.test.ts` | `??` |
| CREATE | `…/__tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts` | `??` |
| CREATE | `projects/sfia-studio/143-assistant-sfia-native-openai-finops-technical-lot-t6-foundation-execution.md` | `??` |

## 10. Historical-vs-local hash matrix

| Path | Historical sha256 | Local sha256 | Class |
| --- | --- | --- | --- |
| finopsAuditTypes.ts | `856e3a9d0e2a11e1c71a83eadedcb49644b6c41ada9b52721531f49c99e429c9` | same | **MATCH** |
| finopsAuditJournalPort.ts | `8cfa7c2dd7e0a6dcc41170a33b38e2b2539afeb27aa27881b6d3cca87321d539` | same | **MATCH** |
| redactFinOpsAuditPayload.ts | `ad496294926bb811d1670475cfae160de6b76e2a88106816118cfe4293eb4bff` | same | **MATCH** |
| postgresFinOpsAuditJournal.ts | `ffee02911dae0ccec0fa63e7a598b92d6516c2173f01f3b47ce35cd28bf45a49` | same | **MATCH** |
| 1754600001000_finops-t6-audit-journal.js | `e4fb4ad2ca65465b4628cca09213f23755fd2da0c337ec7968d6a64a07ecda00` | same | **MATCH** |
| t6.audit.unit.test.ts | `840779e31a9e6fe0859769a6ff16dbb53840efb421ab9496e6f28f57f67c45de` | same | **MATCH** |
| t6.audit-journal.integration.test.ts | `6f08b0895d93e1ee180af9f7187ee4c7fc6f114bde0391a0204ae328af15588d` | same | **MATCH** |
| doc 143 | `c5323d0daf5bcb71c2f38fe65820f5b2822e3da99f54d72c9211e38ae08dc869` | same | **MATCH** |
| captureFinOpsUsage.ts | hist index `d8f20ef..86ccb98` | local blob `86ccb983532db52f5ecbb5a9a26a33ba949971fd` / sha256 `606a03a459ac5e40171568a57f18b2f0a8abb7cd64938a1bc37798e8bc19ef27` | **MATCH** |

## 11. Missing / drift / unexpected

- MISSING: none
- DRIFT: none
- UNEXPECTED: none

## 12. Old base → current main analysis

`093fd916…` → `e1e00df…` adds **25 T2 files** (+6412 lines): Money M2, aggregates, reconciliation, price catalog, migration `1754600000000`, docs 138–142/144, T2 unit+PG tests.

**No overlap with T6 CREATE paths.** `captureFinOpsUsage.ts` **not** in the old→main diff.

## 13. Overlap matrix T2 / T6

| T6 path | Changed old→main? | Conflict | Handling |
| --- | --- | --- | --- |
| captureFinOpsUsage.ts | NO (blob stable) | NONE | clean replay |
| 8 CREATE paths | NO (absent) | NONE | copy CREATE |
| migration slot | T2 added `…000000` only | MIGRATION ORDER (informational) | `T1 < T2 < T6` OK |
| T2 money/agg/recon | T2-only | SCOPE | foundation must not absorb → T6-ext-T2 later |

## 14. captureFinOpsUsage blob comparison

| Ref | Blob |
| --- | --- |
| `093fd916…:captureFinOpsUsage.ts` | `d8f20ef656a380a860fa6cb991cdc3d1ac3d6062` |
| `origin/main:captureFinOpsUsage.ts` | `d8f20ef656a380a860fa6cb991cdc3d1ac3d6062` |
| T6 local / probe after patch | `86ccb983532db52f5ecbb5a9a26a33ba949971fd` |

**Collision classification:** NONE / **clean replay candidate**.

## 15. CREATE-path collision checks (main)

All 8 CREATE paths: **ABSENT** on `origin/main`. No CREATE PATH COLLISION.

## 16. Migration order

On main before probe: `1754500000000` (T1), `1754600000000` (T2).

T6 historical: `1754600001000`.

Order: **1754500000000 < 1754600000000 < 1754600001000**. Slot free. Migration has **no T2 table refs / no FK** to T2. Append-only triggers present. Additive only.

After probe migrate: pgmigrations rows T1 + T2 + T6.

## 17. Probe creation

```text
git worktree add --detach .tmp-sfia-review/worktrees/finops-t6-post-t2-probe origin/main
```

- probe HEAD = `e1e00df244aa78a063bf2abf21f69325e1036f3a`
- patch: `.tmp-sfia-review/t6-post-t2-preparation/t6-capture.patch`
- `git apply --check` **PASS** then `git apply` **PASS**
- CREATE files copied byte-identical from historical source
- node_modules symlink used only for npm runs then **removed**

## 18. Probe exact manifest

Exactly **9** T6 paths. `git diff --check` **PASS**. No package/CI/T2 file mods. No T6-ext-T2.

## 19. Complete useful probe capture diff

```diff
diff --git a/projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts b/projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
index d8f20ef..86ccb98 100644
--- a/projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
+++ b/projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
@@ -1,6 +1,7 @@
 /**
  * FinOps T1 — single authoritative capture writer (application boundary).
  * Audit failures never requalify ledger outcomes.
+ * T6-foundation may attach a durable emitter behind FinOpsAuditEmitter.
  */

 import type {
@@ -9,17 +10,23 @@ import type {
 } from "../ports/finopsCapturePort";
 import type { FinOpsUsageLedgerPort } from "../ports/finopsUsageLedgerPort";
 import { buildUsageEvent } from "./buildUsageEvent";
+import type { FinOpsAuditEmitter } from "./finopsAuditTypes";
 import type { FinOpsCaptureDiagnostic } from "./types";

-export type FinOpsAuditEmitter = {
-  readonly emit: (event: {
-    readonly type:
-      | "finops_capture_created"
-      | "finops_capture_duplicate"
-      | "finops_capture_failed";
-    readonly detail: Readonly<Record<string, unknown>>;
-  }) => void;
-};
+export type { FinOpsAuditEmitter } from "./finopsAuditTypes";
+
+function correlationDetail(
+  request: FinOpsCaptureRequest,
+  extra: Readonly<Record<string, unknown>>,
+): Readonly<Record<string, unknown>> {
+  return {
+    projectId: request.projectId,
+    executionRunId: request.executionRunId,
+    correlationId: request.correlationId,
+    provider: request.provider,
+    ...extra,
+  };
+}

 function safeEmit(
   audit: FinOpsAuditEmitter | undefined,
@@ -35,8 +42,7 @@ function safeEmit(
   try {
     audit.emit(event);
   } catch {
-    // Audit is best-effort T1; durable observability is T6.
-    // Never mutate ledger outcomes, never retry, never expose details.
+    // Audit is best-effort; durable T6 failures must not mutate ledger outcomes.
   }
 }

@@ -60,7 +66,10 @@ export function createFinOpsCaptureService(deps: {
         };
         safeEmit(deps.audit, {
           type: "finops_capture_failed",
-          detail: { code: error.code, retryable: error.retryable },
+          detail: correlationDetail(request, {
+            code: error.code,
+            retryable: error.retryable,
+          }),
         });
         return { status: "failed", error };
       }
@@ -68,10 +77,10 @@ export function createFinOpsCaptureService(deps: {
       if (!built.ok) {
         safeEmit(deps.audit, {
           type: "finops_capture_failed",
-          detail: {
+          detail: correlationDetail(request, {
             code: built.error.code,
             retryable: built.error.retryable,
-          },
+          }),
         });
         return { status: "failed", error: built.error };
       }
@@ -89,7 +98,10 @@ export function createFinOpsCaptureService(deps: {
           };
           safeEmit(deps.audit, {
             type: "finops_capture_created",
-            detail: { eventId: result.eventId },
+            detail: correlationDetail(request, {
+              eventId: result.eventId,
+              dedupKey: built.event.dedupKey,
+            }),
           });
           return diagnostic;
         }
@@ -101,7 +113,10 @@ export function createFinOpsCaptureService(deps: {
           };
           safeEmit(deps.audit, {
             type: "finops_capture_duplicate",
-            detail: { eventId: result.eventId },
+            detail: correlationDetail(request, {
+              eventId: result.eventId,
+              dedupKey: built.event.dedupKey,
+            }),
           });
           return diagnostic;
         }
@@ -111,10 +126,10 @@ export function createFinOpsCaptureService(deps: {
         };
         safeEmit(deps.audit, {
           type: "finops_capture_failed",
-          detail: {
+          detail: correlationDetail(request, {
             code: result.error.code,
             retryable: result.error.retryable,
-          },
+          }),
         });
         return diagnostic;
       } catch {
@@ -126,7 +141,10 @@ export function createFinOpsCaptureService(deps: {
         };
         safeEmit(deps.audit, {
           type: "finops_capture_failed",
-          detail: { code: error.code, retryable: error.retryable },
+          detail: correlationDetail(request, {
+            code: error.code,
+            retryable: error.retryable,
+          }),
         });
         return { status: "failed", error };
       }

```

## 20. Probe CREATE / MODIFY file contents (judgable)

### finopsAuditTypes.ts (sha256 MATCH)

```typescript
/**
 * FinOps T6-foundation — structured audit event types (T1 capture outcomes only).
 * T2/T3/T4/T5 event types are out of scope for this Delivery.
 */

export const FINOPS_T6_FOUNDATION_EVENT_TYPES = [
  "finops_capture_created",
  "finops_capture_duplicate",
  "finops_capture_failed",
] as const;

export type FinOpsT6FoundationEventType =
  (typeof FINOPS_T6_FOUNDATION_EVENT_TYPES)[number];

export type FinOpsAuditRecord = {
  readonly auditEventId: string;
  readonly eventType: FinOpsT6FoundationEventType;
  readonly projectId: string | null;
  readonly executionRunId: string | null;
  readonly correlationId: string | null;
  readonly occurredAt: string;
  /** Already redacted / whitelisted payload — never store raw secrets. */
  readonly payload: Readonly<Record<string, unknown>>;
};

export function isFinOpsT6FoundationEventType(
  value: string,
): value is FinOpsT6FoundationEventType {
  return (FINOPS_T6_FOUNDATION_EVENT_TYPES as readonly string[]).includes(value);
}

/**
 * T1 capture audit boundary (sync, best-effort).
 * Durable T6 journals adapt behind this interface.
 */
export type FinOpsAuditEmitter = {
  readonly emit: (event: {
    readonly type: FinOpsT6FoundationEventType;
    readonly detail: Readonly<Record<string, unknown>>;
  }) => void;
};

```

### finopsAuditJournalPort.ts

```typescript
/**
 * FinOps T6-foundation — durable append-only audit journal port.
 * Does not expose pg. Failures are handled by callers (best-effort / fail-open).
 */

import type { FinOpsAuditRecord } from "../application/finopsAuditTypes";

export type FinOpsAuditJournalPort = {
  readonly append: (record: FinOpsAuditRecord) => Promise<void>;
};

```

### redactFinOpsAuditPayload.ts

```typescript
/**
 * FinOps T6-foundation — deterministic payload redaction / whitelist.
 * Prefer allow-list over deep copy of arbitrary objects.
 */

const MAX_STRING_LEN = 256;
const MAX_KEYS = 24;

const ALLOWED_KEYS = new Set([
  "eventId",
  "dedupKey",
  "code",
  "retryable",
  "projectId",
  "executionRunId",
  "correlationId",
  "provider",
  "status",
]);

const SECRET_KEY_PATTERN =
  /(password|passwd|secret|token|api[_-]?key|authorization|bearer|cookie|credential|connectionstring|database_url)/i;

function truncateString(value: string): string {
  if (value.length <= MAX_STRING_LEN) return value;
  return `${value.slice(0, MAX_STRING_LEN)}…`;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}

/**
 * Returns a bounded, secret-free payload suitable for durable FinOps audit storage.
 */
export function redactFinOpsAuditPayload(
  detail: Readonly<Record<string, unknown>>,
): Readonly<Record<string, unknown>> {
  const out: Record<string, unknown> = {};
  let count = 0;
  for (const [key, raw] of Object.entries(detail)) {
    if (count >= MAX_KEYS) break;
    if (SECRET_KEY_PATTERN.test(key)) continue;
    if (!ALLOWED_KEYS.has(key)) continue;

    if (raw === null) {
      out[key] = null;
      count += 1;
      continue;
    }
    if (typeof raw === "boolean" || typeof raw === "number") {
      if (typeof raw === "number" && !Number.isFinite(raw)) continue;
      out[key] = raw;
      count += 1;
      continue;
    }
    if (typeof raw === "string") {
      out[key] = truncateString(raw);
      count += 1;
      continue;
    }
    // Nested objects / arrays / functions are dropped (minimization).
    if (isPlainObject(raw) || Array.isArray(raw)) continue;
  }
  return out;
}

export function assertRedactedPayloadHasNoSecrets(
  payload: Readonly<Record<string, unknown>>,
): void {
  const serialized = JSON.stringify(payload).toLowerCase();
  if (
    serialized.includes("password") ||
    serialized.includes("postgres://") ||
    serialized.includes("postgresql://") ||
    serialized.includes("api_key") ||
    serialized.includes("apikey") ||
    serialized.includes("bearer ")
  ) {
    throw new Error("Redacted FinOps audit payload must not contain secrets");
  }
  for (const key of Object.keys(payload)) {
    if (SECRET_KEY_PATTERN.test(key)) {
      throw new Error(`Redacted payload retains secret-like key: ${key}`);
    }
  }
}

```

### postgresFinOpsAuditJournal.ts

```typescript
/**
 * FinOps T6-foundation — PostgreSQL append-only audit journal (O1-backed).
 * Reuses the existing FinOps pg.Pool factory; does not log connection strings.
 */

import { createHash, randomUUID } from "node:crypto";
import type { Pool } from "pg";
import type {
  FinOpsAuditRecord,
  FinOpsT6FoundationEventType,
} from "../../application/finopsAuditTypes";
import { isFinOpsT6FoundationEventType } from "../../application/finopsAuditTypes";
import type { FinOpsAuditEmitter } from "../../application/finopsAuditTypes";
import type { FinOpsAuditJournalPort } from "../../ports/finopsAuditJournalPort";
import {
  assertRedactedPayloadHasNoSecrets,
  redactFinOpsAuditPayload,
} from "./redactFinOpsAuditPayload";

export function createPostgresFinOpsAuditJournal(
  pool: Pool,
): FinOpsAuditJournalPort {
  return {
    async append(record: FinOpsAuditRecord): Promise<void> {
      if (!isFinOpsT6FoundationEventType(record.eventType)) {
        throw new Error("Unsupported FinOps T6-foundation audit event type");
      }
      assertRedactedPayloadHasNoSecrets(record.payload);
      await pool.query(
        `INSERT INTO finops_audit_event (
           audit_event_id,
           event_type,
           project_id,
           execution_run_id,
           correlation_id,
           occurred_at,
           payload_json,
           created_at
         ) VALUES ($1, $2, $3, $4, $5, $6::timestamptz, $7::jsonb, NOW())`,
        [
          record.auditEventId,
          record.eventType,
          record.projectId,
          record.executionRunId,
          record.correlationId,
          record.occurredAt,
          JSON.stringify(record.payload),
        ],
      );
    },
  };
}

function readOptionalString(
  detail: Readonly<Record<string, unknown>>,
  key: string,
): string | null {
  const value = detail[key];
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function deriveAuditEventId(input: {
  readonly type: FinOpsT6FoundationEventType;
  readonly detail: Readonly<Record<string, unknown>>;
  readonly occurredAt: string;
}): string {
  const material = [
    "t6-audit-v1",
    input.type,
    readOptionalString(input.detail, "eventId") ?? "",
    readOptionalString(input.detail, "projectId") ?? "",
    readOptionalString(input.detail, "executionRunId") ?? "",
    readOptionalString(input.detail, "correlationId") ?? "",
    readOptionalString(input.detail, "code") ?? "",
    input.occurredAt,
    randomUUID(),
  ].join("|");
  const digest = createHash("sha256").update(material, "utf8").digest("hex");
  return `aud_${digest}`;
}

/**
 * Best-effort durable emitter implementing the T1 FinOpsAuditEmitter boundary.
 * Journal failures are swallowed — never thrown to capture callers.
 */
export type DurableFinOpsAuditEmitter = FinOpsAuditEmitter & {
  /** Await in-flight journal appends (tests / orderly shutdown). */
  readonly flush: () => Promise<void>;
};

export function createDurableFinOpsAuditEmitter(
  journal: FinOpsAuditJournalPort,
  options?: {
    readonly nowIso?: () => string;
  },
): DurableFinOpsAuditEmitter {
  const nowIso = options?.nowIso ?? (() => new Date().toISOString());
  const pending = new Set<Promise<void>>();
  return {
    emit(event) {
      const occurredAt = nowIso();
      const payload = redactFinOpsAuditPayload(event.detail);
      const record: FinOpsAuditRecord = {
        auditEventId: deriveAuditEventId({
          type: event.type,
          detail: event.detail,
          occurredAt,
        }),
        eventType: event.type,
        projectId: readOptionalString(event.detail, "projectId"),
        executionRunId: readOptionalString(event.detail, "executionRunId"),
        correlationId: readOptionalString(event.detail, "correlationId"),
        occurredAt,
        payload,
      };
      const task = journal.append(record).catch(() => {
        // Fail-open: durable audit must not affect capture / user-run outcomes.
      });
      pending.add(task);
      void task.finally(() => {
        pending.delete(task);
      });
    },
    async flush() {
      await Promise.all([...pending]);
    },
  };
}

```

### 1754600001000_finops-t6-audit-journal.js

```javascript
/**
 * Migration: FinOps T6-foundation append-only audit journal (O1-backed).
 * T1 capture outcomes only — no Money columns, no external telemetry.
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("finops_audit_event", {
    audit_event_id: { type: "text", primaryKey: true, notNull: true },
    event_type: { type: "text", notNull: true },
    project_id: { type: "text" },
    execution_run_id: { type: "text" },
    correlation_id: { type: "text" },
    occurred_at: { type: "timestamptz", notNull: true },
    payload_json: { type: "jsonb", notNull: true },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
  });

  pgm.addConstraint("finops_audit_event", "finops_audit_event_type_chk", {
    check:
      "event_type IN ('finops_capture_created', 'finops_capture_duplicate', 'finops_capture_failed')",
  });

  pgm.createIndex("finops_audit_event", ["project_id", "occurred_at"], {
    name: "finops_audit_event_project_occurred_idx",
  });

  pgm.createIndex("finops_audit_event", ["execution_run_id"], {
    name: "finops_audit_event_execution_run_idx",
  });

  // Append-only guard: block UPDATE/DELETE of audit rows.
  pgm.sql(`
CREATE OR REPLACE FUNCTION finops_audit_event_append_only()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  RAISE EXCEPTION 'finops_audit_event is append-only';
END;
$$;
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_audit_event_no_update
BEFORE UPDATE ON finops_audit_event
FOR EACH ROW
EXECUTE FUNCTION finops_audit_event_append_only();
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_audit_event_no_delete
BEFORE DELETE ON finops_audit_event
FOR EACH ROW
EXECUTE FUNCTION finops_audit_event_append_only();
`);
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  pgm.sql(`
DO $$
DECLARE
  event_count bigint;
BEGIN
  SELECT COUNT(*) INTO event_count FROM finops_audit_event;
  IF event_count > 0 THEN
    RAISE EXCEPTION 'Refusing to drop finops_audit_event: % row(s) present', event_count;
  END IF;
END $$;
`);

  pgm.sql(
    `DROP TRIGGER IF EXISTS trg_finops_audit_event_no_delete ON finops_audit_event;`,
  );
  pgm.sql(
    `DROP TRIGGER IF EXISTS trg_finops_audit_event_no_update ON finops_audit_event;`,
  );
  pgm.sql(`DROP FUNCTION IF EXISTS finops_audit_event_append_only();`);
  pgm.dropTable("finops_audit_event");
};

```

### t6.audit.unit.test.ts (sha256 `840779e3…`, 7155 bytes)

```typescript
/**
 * FinOps T6-foundation — unit tests for redaction + durable emitter fail-open.
 * @vitest-environment node
 */
import { describe, expect, it, vi } from "vitest";
import { createFinOpsCaptureService } from "@/lib/oa/finops/application/captureFinOpsUsage";
import {
  assertRedactedPayloadHasNoSecrets,
  redactFinOpsAuditPayload,
} from "@/lib/oa/finops/infrastructure/postgres/redactFinOpsAuditPayload";
import { createDurableFinOpsAuditEmitter } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsAuditJournal";
import type { FinOpsAuditJournalPort } from "@/lib/oa/finops/ports/finopsAuditJournalPort";
import type { FinOpsUsageLedgerPort } from "@/lib/oa/finops/ports/finopsUsageLedgerPort";
import type { FinOpsAuditRecord } from "@/lib/oa/finops/application/finopsAuditTypes";

describe("FinOps T6 redactFinOpsAuditPayload", () => {
  it("whitelists correlation and outcome fields only", () => {
    const redacted = redactFinOpsAuditPayload({
      projectId: "prj:demo",
      executionRunId: "executionrun:1",
      correlationId: "corr-1",
      eventId: "evt_abc",
      dedupKey: "dedup_abc",
      code: "FINOPS_CAPTURE_FAILED",
      retryable: true,
      provider: "openai",
      password: "secret",
      apiKey: "sk-leak",
      prompt: "full user prompt must drop",
      nested: { a: 1 },
    });
    expect(redacted).toEqual({
      projectId: "prj:demo",
      executionRunId: "executionrun:1",
      correlationId: "corr-1",
      eventId: "evt_abc",
      dedupKey: "dedup_abc",
      code: "FINOPS_CAPTURE_FAILED",
      retryable: true,
      provider: "openai",
    });
    expect(redacted).not.toHaveProperty("password");
    expect(redacted).not.toHaveProperty("apiKey");
    expect(redacted).not.toHaveProperty("prompt");
    assertRedactedPayloadHasNoSecrets(redacted);
  });

  it("drops secret-like keys even if otherwise tempting", () => {
    const redacted = redactFinOpsAuditPayload({
      authorization: "Bearer abc",
      DATABASE_URL: "postgres://x",
      eventId: "evt_1",
    });
    expect(redacted).toEqual({ eventId: "evt_1" });
  });
});

describe("FinOps T6 durable emitter + capture fail-open", () => {
  it("persists created/duplicate/failed shapes through emitter without failing capture", async () => {
    const records: FinOpsAuditRecord[] = [];
    const journal: FinOpsAuditJournalPort = {
      async append(record) {
        records.push(record);
      },
    };
    const emitter = createDurableFinOpsAuditEmitter(journal, {
      nowIso: () => "2026-08-07T10:00:00.000Z",
    });
    const ledger: FinOpsUsageLedgerPort = {
      async insertUsageEvent(event) {
        return { outcome: "created", eventId: event.eventId };
      },
    };
    const capture = createFinOpsCaptureService({ ledger, audit: emitter });
    const result = await capture.captureUsage({
      projectId: "proj-t6",
      executionRunId: "run-t6-1",
      correlationId: "corr-t6-1",
      provider: "openai",
      occurredAt: "2026-08-07T10:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: "resp-t6-1",
      },
    });
    expect(result.status).toBe("created");
    await emitter.flush();
    expect(records).toHaveLength(1);
    expect(records[0]?.eventType).toBe("finops_capture_created");
    expect(records[0]?.projectId).toBe("proj-t6");
    expect(records[0]?.executionRunId).toBe("run-t6-1");
    expect(records[0]?.correlationId).toBe("corr-t6-1");
    expect(records[0]?.payload).toMatchObject({
      projectId: "proj-t6",
      eventId: expect.any(String),
    });
  });

  it("does not fail successful capture when durable journal rejects", async () => {
    const journal: FinOpsAuditJournalPort = {
      async append() {
        throw new Error("postgres://user:password@host/db boom");
      },
    };
    const emitter = createDurableFinOpsAuditEmitter(journal);
    const ledger: FinOpsUsageLedgerPort = {
      async insertUsageEvent(event) {
        return { outcome: "created", eventId: event.eventId };
      },
    };
    const capture = createFinOpsCaptureService({ ledger, audit: emitter });
    const result = await capture.captureUsage({
      projectId: "proj-t6",
      executionRunId: "run-t6-failopen",
      correlationId: "corr-t6-failopen",
      provider: "openai",
      occurredAt: "2026-08-07T10:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: "resp-t6-failopen",
      },
    });
    expect(result.status).toBe("created");
    await emitter.flush();
  });

  it("records failed capture audits with redacted codes only", async () => {
    const records: FinOpsAuditRecord[] = [];
    const journal: FinOpsAuditJournalPort = {
      async append(record) {
        records.push(record);
      },
    };
    const emitter = createDurableFinOpsAuditEmitter(journal, {
      nowIso: () => "2026-08-07T10:00:00.000Z",
    });
    const ledger: FinOpsUsageLedgerPort = {
      async insertUsageEvent() {
        return {
          outcome: "failed",
          error: {
            code: "FINOPS_DB_UNAVAILABLE",
            message: "FinOps capture failed",
            retryable: true,
            technicalDetailsRedacted: true,
          },
        };
      },
    };
    const capture = createFinOpsCaptureService({ ledger, audit: emitter });
    const result = await capture.captureUsage({
      projectId: "proj-t6",
      executionRunId: "run-t6-failed",
      correlationId: "corr-t6-failed",
      provider: "openai",
      occurredAt: "2026-08-07T10:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: "resp-t6-failed",
      },
    });
    expect(result.status).toBe("failed");
    await emitter.flush();
    expect(records[0]?.eventType).toBe("finops_capture_failed");
    expect(records[0]?.payload).toMatchObject({
      code: "FINOPS_DB_UNAVAILABLE",
      retryable: true,
    });
    const serialized = JSON.stringify(records[0]?.payload);
    expect(serialized.toLowerCase()).not.toContain("password");
  });

  it("ignores synchronous audit throw without changing ledger outcome", async () => {
    const audit = {
      emit: vi.fn(() => {
        throw new Error("audit boom");
      }),
    };
    const ledger: FinOpsUsageLedgerPort = {
      async insertUsageEvent(event) {
        return { outcome: "duplicate", eventId: event.eventId };
      },
    };
    const capture = createFinOpsCaptureService({ ledger, audit });
    const result = await capture.captureUsage({
      projectId: "proj-t6",
      executionRunId: "run-t6-dup",
      correlationId: "corr-t6-dup",
      provider: "openai",
      occurredAt: "2026-08-07T10:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: "resp-t6-dup",
      },
    });
    expect(result.status).toBe("duplicate");
    expect(audit.emit).toHaveBeenCalled();
  });
});

```

### t6.audit-journal.integration.test.ts (sha256 `6f08b089…`, 5512 bytes)

```typescript
/**
 * @vitest-environment node
 *
 * Requires DATABASE_URL pointing at ephemeral local/CI Postgres — never Neon.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Pool } from "pg";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import {
  createDurableFinOpsAuditEmitter,
  createPostgresFinOpsAuditJournal,
} from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsAuditJournal";
import { createFinOpsCaptureService } from "@/lib/oa/finops/application/captureFinOpsUsage";
import { createPostgresFinOpsUsageLedger } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("FinOps T6 PostgreSQL audit journal integration", () => {
  let pool: Pool;

  beforeAll(() => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("has finops_audit_event table without money columns", async () => {
    const cols = await pool.query<{ column_name: string }>(
      `SELECT column_name FROM information_schema.columns
       WHERE table_name = 'finops_audit_event'
       ORDER BY column_name`,
    );
    const names = cols.rows.map((r) => r.column_name);
    expect(names).toContain("audit_event_id");
    expect(names).toContain("event_type");
    expect(names).toContain("payload_json");
    expect(names).not.toContain("cost");
    expect(names).not.toContain("currency");
  });

  it("persists created then duplicate audits with correlation fields", async () => {
    const journal = createPostgresFinOpsAuditJournal(pool);
    const emitter = createDurableFinOpsAuditEmitter(journal, {
      nowIso: () => "2026-08-07T11:00:00.000Z",
    });
    const ledger = createPostgresFinOpsUsageLedger(pool);
    const capture = createFinOpsCaptureService({ ledger, audit: emitter });
    const runId = `run-t6-audit-${Date.now()}`;
    const providerResponseId = `resp-t6-audit-${Date.now()}`;
    const request = {
      projectId: "proj-t6-db",
      executionRunId: runId,
      correlationId: "corr-t6-db",
      provider: "openai",
      occurredAt: "2026-08-07T11:00:00.000Z",
      usage: {
        status: "validated" as const,
        inputTokens: 3,
        outputTokens: 2,
        totalTokens: 5,
        providerResponseId,
      },
    };
    const created = await capture.captureUsage(request);
    expect(created.status).toBe("created");
    const duplicate = await capture.captureUsage(request);
    expect(duplicate.status).toBe("duplicate");
    await emitter.flush();

    const rows = await pool.query<{
      event_type: string;
      project_id: string | null;
      execution_run_id: string | null;
      correlation_id: string | null;
      payload_json: Record<string, unknown>;
    }>(
      `SELECT event_type, project_id, execution_run_id, correlation_id, payload_json
       FROM finops_audit_event
       WHERE execution_run_id = $1
       ORDER BY created_at ASC`,
      [runId],
    );
    expect(rows.rows.map((r) => r.event_type)).toEqual([
      "finops_capture_created",
      "finops_capture_duplicate",
    ]);
    for (const row of rows.rows) {
      expect(row.project_id).toBe("proj-t6-db");
      expect(row.correlation_id).toBe("corr-t6-db");
      const payloadText = JSON.stringify(row.payload_json).toLowerCase();
      expect(payloadText).not.toContain("password");
      expect(payloadText).not.toContain("postgres://");
    }
  });

  it("enforces append-only on finops_audit_event", async () => {
    const inserted = await pool.query<{ audit_event_id: string }>(
      `INSERT INTO finops_audit_event (
         audit_event_id, event_type, project_id, execution_run_id, correlation_id,
         occurred_at, payload_json, created_at
       ) VALUES ($1, 'finops_capture_failed', 'proj-ao', 'run-ao', 'corr-ao',
                 NOW(), '{"code":"FINOPS_CAPTURE_FAILED"}'::jsonb, NOW())
       RETURNING audit_event_id`,
      [`aud_append_only_${Date.now()}`],
    );
    const id = inserted.rows[0]?.audit_event_id;
    expect(id).toBeTruthy();
    await expect(
      pool.query(
        `UPDATE finops_audit_event SET project_id = 'x' WHERE audit_event_id = $1`,
        [id],
      ),
    ).rejects.toThrow(/append-only/i);
    await expect(
      pool.query(`DELETE FROM finops_audit_event WHERE audit_event_id = $1`, [
        id,
      ]),
    ).rejects.toThrow(/append-only/i);
  });

  it("keeps capture success when journal insert fails", async () => {
    const failingJournal = {
      async append() {
        throw new Error("forced journal failure");
      },
    };
    const emitter = createDurableFinOpsAuditEmitter(failingJournal);
    const ledger = createPostgresFinOpsUsageLedger(pool);
    const capture = createFinOpsCaptureService({ ledger, audit: emitter });
    const result = await capture.captureUsage({
      projectId: "proj-t6-db",
      executionRunId: `run-t6-failopen-${Date.now()}`,
      correlationId: "corr-t6-failopen-db",
      provider: "openai",
      occurredAt: "2026-08-07T11:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: `resp-t6-failopen-${Date.now()}`,
      },
    });
    expect(result.status).toBe("created");
    await emitter.flush();
  });
});

```

### doc 143 (sha256 `c5323d0d…`, 10984 bytes) — full text in evidence `probe-file-contents/`; header excerpt:

```markdown
# 143 — FinOps Technical Lot T6-foundation — Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/143-assistant-sfia-native-openai-finops-technical-lot-t6-foundation-execution.md`
**Cycle:** 8 — Delivery / implémentation — FinOps Technical Lot T6-foundation
**Profil:** Critical
**Typologie:** INC / EVOL
**Statut:** T6-FOUNDATION LOCAL DELIVERY COMPLETE — NOT COMMITTED — READY WITH RESERVES

---

## 1. Statut et anti-claims

| Claim | Statut |
|-------|--------|
| T6-foundation IMPLEMENTED LOCALLY | **TRUE** |
| Structured T1 FinOps audit events | **TRUE** (`finops_capture_created` / `_duplicate` / `_failed`) |
| Durable PostgreSQL append-only audit journal | **TRUE** (`finops_audit_event`) |
| Secret / payload redaction | **TRUE** (`redactFinOpsAuditPayload`) |
| T1 fail-open preserved | **TRUE** (unit + PG evidence) |
| External observability provider | **FALSE** — none |
| T6-ext-T2 / T3 / T4 / T5 events | **FALSE** — not implemented |
| Money / aggregates / override | **FALSE** — not in this Delivery |
| Neon | **FALSE** |
| OpenAI provider-real | **FALSE** |
| Project commit | **FALSE** |
| Project push | **FALSE** |
| PR / merge | **FALSE** |
| Package / CI workflow modified | **FALSE** |
| T2 reserved files touched | **FALSE** |
| O1 PG audit as transverse doctrine baseline | **FALSE** — O1-backed T6-foundation only, authorized by Delivery GO |

---

## 2. GO Morris exact et consommation

```text
GO Delivery T2 + GO Delivery T6-foundation en parallèle
```

**Consommé uniquement :** `GO Delivery T6-foundation`
**Non consommé :** GO PR · GO push projet · GO merge · GO T5 · GO T3/T4/T7 · GO Neon · GO provider-real · GO Delivery T2

| Événement | Horodatage |
|---|---|
| GO Morris (prompt) | 2026-08-07 ~12:45 CEST (+0200) |
| Travail Cursor (doc 143) | 2026-08-07 12:54:57 CEST (+0200) / 2026-08-07 10:54:57 UTC |

---

## 3. Git Truth

### Worktree / branche

| Champ | Valeur |
|-------|--------|
| Worktree | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t6-foundation` |
| Branche | `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t6-foundation-audit` |
| HEAD | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |
| origin/main | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c	refs/heads/main` |
| Upstream | **none** (intentional) |
| Base commune | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |

### Handoff décisionnel avant publication

```text
```

Full doc 143 also embedded in historical handoff evidence copy.

## 21. typecheck / lint / build (probe `projects/sfia-studio/app`)

| Gate | Result |
| --- | --- |
| `npm run typecheck` | **PASS** (exit 0) |
| `npm run lint` | **PASS** — No ESLint warnings or errors |
| `npm run build` | **PASS** (exit 0) |

## 22. Unit / full tests

| Suite | Result |
| --- | --- |
| T6 unit `t6.audit.unit.test.ts` | **6 passed** |
| T1 unit (`__tests__/oa/finops/t1.*`) | **28 passed** (2 files) |
| FinOps folder unit+skip PG | **109 passed / 24 skipped** |
| `npm test` (no DATABASE_URL) | first run: 2 failed in `createProjectUi.test.tsx` (known flake) + **1423 passed / 24 skipped**; **rerun of that file alone: 12/12 PASS** |
| Baseline note | Historical T6 delivery (pre-T2): 1404 passed / 14 skipped; post-T2 main adds T2 tests — count increase expected |

**Interpretation:** FinOps / T6 / T1 green. UI flake unrelated to T6 overlay; confirmed green on isolated rerun. No T6/T1/T2 regression attributed to probe.

## 23. migrations / test:db (local CI-A Postgres only — docker `sfia-finops-t2-pg`, not Neon)

Env: `postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1`

| Step | Result |
| --- | --- |
| `npm run migrate:up` | applied `1754600001000_finops-t6-audit-journal` |
| `npm run test:db` | **4 files / 24 tests PASS** |

Breakdown: T1 ledger **10** + T2 aggregate **7** + T2 reconciliation **3** + T6 audit **4**.

Historical T6-only test:db was 14 (T1+T6). Post-T2 baseline adds T2 PG tests; T6 adds 4 — **no T1/T2/T6 regressions**.

## 24. T1 / T2 / T6 regressions

- T1: unit + PG green
- T2: all listed T2 paths **byte-identical** to `origin/main` blobs; T2 PG green
- T6: unit 6 + PG 4 green

## 25. Security / redaction

Event types constrained to `finops_capture_created|duplicate|failed`. Redaction allow-list + secret-like key drop + nested drop + string bounds (unit coverage). No raw credentials / prompts / provider payloads persisted by design.

## 26. Fail-open

Capture boundary: audit emitter failures must not requalify ledger outcomes (comment + unit tests). Probe preserves this.

## 27. Global runtime composition reserve

**PRESERVED / DEFERRED.** Probe does not wire global injection. Durable journal remains opt-in via emitter dependency.

## 28. R-PR-T2-API-01

**OPEN MINOR unchanged.** Aggregate/recompute ports identical to main. No hardening.

## 29. T6-ext-T2 exclusion

**EXPLICIT.** No estimation/reconciliation/aggregate/Money audit events added. Foundation scope only.

## 30. Integration options A / B / C

### OPTION A — REMATERIALIZE ON FRESH MAIN (candidate)

Create future Delivery branch from `e1e00df…`; reapply exact 9-path T6-foundation manifest from verified local snapshot (+ handoff hash control).

Pros: clean base; no dirty-WT rebase; T2 native; clear future history.
Cons: re-copy 9 paths; full retest.

### OPTION B — REBASE / REALIGN OLD T6 BRANCH

Rebase historical branch from `093fd…`. **Not executed.** Cons: no project commits; dirty WT; stash/replay risk; weaker traceability.

### OPTION C — RECONSTRUCT FROM HISTORICAL HANDOFF

Only if local snapshot missing. Handoff contains full CREATE contents + capture diff — viable but higher risk than intact local MATCH snapshot.

## 31. Challenge to Option A preference

Cursor challenge: Option A still requires careful mechanical replay (patch apply + CREATE copy) and full CI-A revalidation on the real Delivery branch — probe green reduces but does not eliminate Delivery risk. Option B is worse here because the historical Delivery has **zero project commits** (working tree only). Option C unnecessary while local MATCH exists. **No evidence favors combining foundation + T6-ext-T2** (scope creep / larger review surface / mixes deferred composition concerns).

## 32. Candidate recommendation (NOT Morris decision)

**OPTION A — rematerialize on fresh main** from `e1e00df…` with exact historical 9-path foundation manifest. Keep T6-ext-T2 as a **separate later lot**. Preserve global composition DEFERRED. Leave R-PR-T2-API-01 open.

## 33. Future Delivery scope recommendation (candidate)

- Exactly the 9 foundation paths validated here
- No package/CI unless a future GO proves necessity
- No T2 file edits
- No T6-ext-T2 events
- No global runtime composition activation
- Re-run typecheck/lint/build/`npm test`/migrate/test:db on Delivery WT

## 34. Gates Morris

| Gate | Status |
| --- | --- |
| GO préparation intégration T6-foundation | **REÇU / consommé** |
| GO adaptation/Delivery T6 sur main | **NON REÇU** |
| GO création nouvelle branche Delivery | **NON REÇU** |
| GO git add/commit/push projet | **NON REÇU** |
| GO PR/merge | **NON REÇU** |
| GO T6-ext-T2 | **NON REÇU** |
| GO runtime global composition | **NON REÇU** |
| GO R-PR-T2-API-01 hardening | **NON REÇU** |

## 35. Stop conditions evaluated

MAIN DRIFT / HANDOFF CHANGED / MULTIPLE SNAPSHOTS / CONTAMINATED / SOURCE DRIFT / CREATE COLLISION / MIGRATION SLOT / PROBE SCOPE / T2 REGRESSION / T6 REGRESSION / FAIL-OPEN / REDACTION / EXT SCOPE CREEP / GLOBAL COMPOSITION — **none triggered** (UI flake isolated, FinOps green).

## 36. No project change / commit / push / PR

- Real T6 WT/branch: **untouched** (still HEAD `093fd91…`, same dirty manifest)
- main: **untouched**
- No project git add/commit/push/PR/merge
- Writes only under `.tmp-sfia-review/**` + Review Handoff publisher

## 37. Evidence tree

`.tmp-sfia-review/t6-post-t2-preparation/` — git-truth, historical handoff, hash matrices, diffs, patch, probe logs (typecheck/lint/build/tests/migrate/test:db), invariants, conflict/overlap matrices, probe-file-contents.

Probe WT retained: `.tmp-sfia-review/worktrees/finops-t6-post-t2-probe` (detached, disposable).

## 38. Debt qualification

- Reusing old dirty T6 WT for Delivery would add debt → prefer rematerialize (A).
- Rematerialize from main is simpler given MATCH + clean replay.
- Probe revealed **no real post-T2 adaptation** requirement.
- Combining foundation + ext-T2 now would create scope creep → **do not combine**.

## 39. Review Handoff

Publisher: `scripts/sfia/publish-review-handoff.sh`
Message: `docs(review-handoff): publish T6 post-T2 integration preparation`
Before tip/blob: `6aad105…` / `81a5e5a…`
(After values filled post-publish.)

## 40. Final Case A verdict string

```
T6 FOUNDATION POST-T2 INTEGRATION PREPARATION COMPLETE —
HISTORICAL T6 SOURCE VERIFIED —
CURRENT MAIN VERIFIED —
T2/T6 FOUNDATION MANIFESTS COMPATIBLE —
MIGRATION ORDER VERIFIED —
SCRATCH INTEGRATION PROBE GREEN —
T2 REGRESSION GREEN —
T6 FOUNDATION REGRESSION GREEN —
T6-EXT-T2 EXCLUDED —
GLOBAL RUNTIME COMPOSITION RESERVE PRESERVED —
R-PR-T2-API-01 UNTOUCHED —
OPTION A REMATERIALIZE ON FRESH MAIN RECOMMENDED —
NO PROJECT CHANGE —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
READY FOR MORRIS T6 FOUNDATION INTEGRATION DELIVERY GATE
```
