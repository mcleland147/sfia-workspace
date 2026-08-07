# ChatGPT Review Pack — FinOps T6-foundation post-T2 Integration Delivery (Option A)

## Meta

- date_cest: 2026-08-07 16:10:43 CEST (+0200)
- date_utc: 2026-08-07 14:10:43 UTC
- cycle: 8 — Delivery / implémentation (Critical)
- typologie: INC / EVOL / ARCH
- mode: T6-foundation post-T2 Integration Delivery — Option A (mechanical rematerialization)
- GO Morris exact: `GO Delivery intégration T6-foundation sur main post-T2 — Option A.`
- GO autorise: nouvelle branche+WT Delivery depuis origin/main · rematerialize exact 9 paths · tests/migrations locaux · preuves `.tmp-sfia-review/**` · FULL review pack · handoff L3 publish
- GO N'autorise PAS: project git add/staging/commit/push/PR/merge/force/rebase · modif historical T6 WT/probe · T6-ext-*/global composition · R-PR-T2-API-01 harden · T3–T5/T7 · Neon · provider-real · package/CI · adaptations opportunistes
- Repo: `mcleland147/sfia-workspace`
- Cycle Knowledge Contract: `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` (candidate / experimental / no execution authority)
- project staging/commit/push/PR: **NO / NO / NO / NO**

## Verdict (pack)

```text
FINOPS TECHNICAL LOT T6-FOUNDATION POST-T2 INTEGRATION DELIVERY COMPLETE WITH RESERVES —
OPTION A REMATERIALIZATION ON FRESH MAIN —
9/9 HASH MATCH —
HEAD e1e00df UNCHANGED —
STAGED EMPTY —
T1→T2→T6 MIGRATE LOCAL PASS —
test:db 24 PASS (T1:10 T2:10 T6:4) —
APPEND-ONLY / REDACTION / FAIL-OPEN VERIFIED —
R-T6-RUNTIME-COMPOSITION-01 OPEN —
R-PR-T2-API-01 OPEN MINOR UNTOUCHED —
T6-EXT-T2 EXCLUDED —
NO PROJECT STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
READY FOR CHATGPT VALIDATION
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

Docs 103, 125, 135–144 ; runtime `projects/sfia-studio/app/lib/oa/finops/**`, migrations, `__tests__/oa/finops/**`. Historical T6 READ-ONLY source WT + preparation evidence `.tmp-sfia-review/t6-post-t2-preparation/**` (incl. `t6-capture.patch`).

## 3. Git Truth

| Field | Value |
| --- | --- |
| orchestration WT | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| Delivery WT | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t6-foundation-post-t2-delivery` |
| Delivery branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t6-foundation-post-t2-integration` |
| Delivery HEAD | `e1e00df244aa78a063bf2abf21f69325e1036f3a` |
| origin/main | `e1e00df244aa78a063bf2abf21f69325e1036f3a` |
| MAIN DRIFT | **NO** |
| handoff tip before | `c714169e551ae220ffeca208ee63d9deec98ea4b` |
| handoff blob before | `29f3c47e3f500e96867f7fe60e64343e9657940a` |
| historical handoff | `3f40c7b4cc2a748fbc114068575f3d2a62ad7521` |
| historical T6 WT | `…/finops-t6-foundation` @ `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` READ-ONLY |
| collision (branch/WT/remote) | **NONE** at create |
| staged | **empty** |
| project commit/push/PR | **NO** |

### Delivery status (exactly 9)

```text
 M projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
?? projects/sfia-studio/143-assistant-sfia-native-openai-finops-technical-lot-t6-foundation-execution.md
?? projects/sfia-studio/app/__tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts
?? projects/sfia-studio/app/__tests__/oa/finops/t6.audit.unit.test.ts
?? projects/sfia-studio/app/db/migrations/1754600001000_finops-t6-audit-journal.js
?? projects/sfia-studio/app/lib/oa/finops/application/finopsAuditTypes.ts
?? projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAuditJournal.ts
?? projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/redactFinOpsAuditPayload.ts
?? projects/sfia-studio/app/lib/oa/finops/ports/finopsAuditJournalPort.ts
```

## 4. Rematerialization method

1. `git worktree add -b <delivery-branch> <new-WT> origin/main` → HEAD `e1e00df…`
2. `git apply --check` + `git apply` of `.tmp-sfia-review/t6-post-t2-preparation/t6-capture.patch` (absolute path) on capture only — no manual conflict resolve
3. Exact byte `cp` of 8 CREATE files from historical WT `finops-t6-foundation`
4. Hash verification 9/9 MATCH; T2 tracked paths remain byte-identical to `origin/main` except the intended capture MODIFY

## 5. Hash matrix (9/9 MATCH)

```text
=== DELIVERY HASH VERIFY ===
finopsAuditTypes.ts|856e3a9d0e2a11e1c71a83eadedcb49644b6c41ada9b52721531f49c99e429c9|MATCH
finopsAuditJournalPort.ts|8cfa7c2dd7e0a6dcc41170a33b38e2b2539afeb27aa27881b6d3cca87321d539|MATCH
redactFinOpsAuditPayload.ts|ad496294926bb811d1670475cfae160de6b76e2a88106816118cfe4293eb4bff|MATCH
postgresFinOpsAuditJournal.ts|ffee02911dae0ccec0fa63e7a598b92d6516c2173f01f3b47ce35cd28bf45a49|MATCH
mig|e4fb4ad2ca65465b4628cca09213f23755fd2da0c337ec7968d6a64a07ecda00|MATCH
unit|840779e31a9e6fe0859769a6ff16dbb53840efb421ab9496e6f28f57f67c45de|MATCH
integ|6f08b0895d93e1ee180af9f7187ee4c7fc6f114bde0391a0204ae328af15588d|MATCH
doc143|c5323d0daf5bcb71c2f38fe65820f5b2822e3da99f54d72c9211e38ae08dc869|MATCH
capture_sha256=606a03a459ac5e40171568a57f18b2f0a8abb7cd64938a1bc37798e8bc19ef27
capture_ho=86ccb983532db52f5ecbb5a9a26a33ba949971fd
CAP_SHA_MATCH
CAP_HO_MATCH
=== STATUS ===
 M projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
?? projects/sfia-studio/143-assistant-sfia-native-openai-finops-technical-lot-t6-foundation-execution.md
?? projects/sfia-studio/app/__tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts
?? projects/sfia-studio/app/__tests__/oa/finops/t6.audit.unit.test.ts
?? projects/sfia-studio/app/db/migrations/1754600001000_finops-t6-audit-journal.js
?? projects/sfia-studio/app/lib/oa/finops/application/finopsAuditTypes.ts
?? projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAuditJournal.ts
?? projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/redactFinOpsAuditPayload.ts
?? projects/sfia-studio/app/lib/oa/finops/ports/finopsAuditJournalPort.ts
=== STAGED ===
=== HEAD ===
e1e00df244aa78a063bf2abf21f69325e1036f3a
=== T2 identity vs origin/main ===
T2_IDENTICAL projects/sfia-studio/app/db/migrations/1754600000000_finops-t2-aggregation-reconciliation.js
T2_PATH_OPTIONAL_ABSENT projects/sfia-studio/app/lib/oa/finops/application/aggregateFinOpsUsage.ts
T2_PATH_OPTIONAL_ABSENT projects/sfia-studio/app/lib/oa/finops/application/reconcileFinOpsUsage.ts
T2_IDENTICAL projects/sfia-studio/142-assistant-sfia-native-openai-finops-technical-lot-t2-execution.md
projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
```

Expected CREATE sha256s and capture after (`606a03a4…` / hash-object `86ccb983…`) / main capture before (`d8f20ef6…`) all **MATCH**.

## 6. MODIFIED — captureFinOpsUsage.ts (complete useful diff)

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

- after sha256: `606a03a459ac5e40171568a57f18b2f0a8abb7cd64938a1bc37798e8bc19ef27`
- after git hash-object: `86ccb983532db52f5ecbb5a9a26a33ba949971fd`
- main blob before: `d8f20ef656a380a860fa6cb991cdc3d1ac3d6062`

## 7. CREATED — full content (8 files)

### CREATED `projects/sfia-studio/app/lib/oa/finops/application/finopsAuditTypes.ts`

- bytes: 1290
- sha256: `856e3a9d0e2a11e1c71a83eadedcb49644b6c41ada9b52721531f49c99e429c9`

```ts
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
### CREATED `projects/sfia-studio/app/lib/oa/finops/ports/finopsAuditJournalPort.ts`

- bytes: 341
- sha256: `8cfa7c2dd7e0a6dcc41170a33b38e2b2539afeb27aa27881b6d3cca87321d539`

```ts
/**
 * FinOps T6-foundation — durable append-only audit journal port.
 * Does not expose pg. Failures are handled by callers (best-effort / fail-open).
 */

import type { FinOpsAuditRecord } from "../application/finopsAuditTypes";

export type FinOpsAuditJournalPort = {
  readonly append: (record: FinOpsAuditRecord) => Promise<void>;
};
```
### CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/redactFinOpsAuditPayload.ts`

- bytes: 2562
- sha256: `ad496294926bb811d1670475cfae160de6b76e2a88106816118cfe4293eb4bff`

```ts
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
### CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAuditJournal.ts`

- bytes: 4189
- sha256: `ffee02911dae0ccec0fa63e7a598b92d6516c2173f01f3b47ce35cd28bf45a49`

```ts
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
### CREATED `projects/sfia-studio/app/db/migrations/1754600001000_finops-t6-audit-journal.js`

- bytes: 2485
- sha256: `e4fb4ad2ca65465b4628cca09213f23755fd2da0c337ec7968d6a64a07ecda00`

```js
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
### CREATED `projects/sfia-studio/app/__tests__/oa/finops/t6.audit.unit.test.ts`

- bytes: 7155
- sha256: `840779e31a9e6fe0859769a6ff16dbb53840efb421ab9496e6f28f57f67c45de`

```ts
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
### CREATED `projects/sfia-studio/app/__tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts`

- bytes: 5512
- sha256: `6f08b0895d93e1ee180af9f7187ee4c7fc6f114bde0391a0204ae328af15588d`

```ts
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
### CREATED `projects/sfia-studio/143-assistant-sfia-native-openai-finops-technical-lot-t6-foundation-execution.md`

- bytes: 10984
- sha256: `c5323d0daf5bcb71c2f38fe65820f5b2822e3da99f54d72c9211e38ae08dc869`

```md
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
c35d11e8428ebf2f7491a3eac80fc804707ac338	refs/heads/sfia/review-handoff
```

Attendu tip `c35d11e8428ebf2f7491a3eac80fc804707ac338` / blob `4652f68f884a2fc7f570eec88ec7b04e704d5959`.

### Status (projet, hors artefacts review locaux)

```text
M projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts
?? projects/sfia-studio/app/__tests__/oa/finops/t6.audit.unit.test.ts
?? projects/sfia-studio/app/db/migrations/1754600001000_finops-t6-audit-journal.js
?? projects/sfia-studio/app/lib/oa/finops/application/finopsAuditTypes.ts
?? projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAuditJournal.ts
?? projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/redactFinOpsAuditPayload.ts
?? projects/sfia-studio/app/lib/oa/finops/ports/finopsAuditJournalPort.ts
```

### Diff name-status / stat (app)

```text
M	projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts

.../oa/finops/application/captureFinOpsUsage.ts    | 56 ++++++++++++++--------
 1 file changed, 37 insertions(+), 19 deletions(-)
```

---

## 4. Sources

Méthode (main) : templates cycle, routing, operating model, guardrails, validation checklist, CKC synthetic map, publisher.
Architecture : 103 · 123 · 125 · 135 · 136 · 137.
Préparation T6 : document 138 (handoff historique `79663b03…`).
Contrat d'absence de conflit T2 : handoff tip `c35d11e8…` (141).
Runtime T1 : `captureFinOpsUsage.ts`, `createFinOpsPool.ts`, `sanitizeDbError.ts`, ledger PG.

---

## 5. Relation à T1 / 138

- T1 fournit `FinOpsAuditEmitter` best-effort + outcomes capture + pool PG + fail-open.
- 138 prépare T6-foundation = table PG audit + durable emitter + wire T1 + tests ; PARALLEL-SAFE avec T2.
- Cette Delivery réalise ce manifeste foundation **sans** T6-ext.
- Qualification store : **O1-backed T6-foundation implementation authorized by Morris Delivery GO** (pas une nouvelle doctrine transverse).

---

## 6. Manifest réel

### CREATE

- CREATED `projects/sfia-studio/app/lib/oa/finops/application/finopsAuditTypes.ts` (1290 bytes, sha256=856e3a9d0e2a11e1c71a83eadedcb49644b6c41ada9b52721531f49c99e429c9)
- CREATED `projects/sfia-studio/app/lib/oa/finops/ports/finopsAuditJournalPort.ts` (341 bytes, sha256=8cfa7c2dd7e0a6dcc41170a33b38e2b2539afeb27aa27881b6d3cca87321d539)
- CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/redactFinOpsAuditPayload.ts` (2562 bytes, sha256=ad496294926bb811d1670475cfae160de6b76e2a88106816118cfe4293eb4bff)
- CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAuditJournal.ts` (4189 bytes, sha256=ffee02911dae0ccec0fa63e7a598b92d6516c2173f01f3b47ce35cd28bf45a49)
- CREATED `projects/sfia-studio/app/db/migrations/1754600001000_finops-t6-audit-journal.js` (2485 bytes, sha256=e4fb4ad2ca65465b4628cca09213f23755fd2da0c337ec7968d6a64a07ecda00)
- CREATED `projects/sfia-studio/app/__tests__/oa/finops/t6.audit.unit.test.ts` (7155 bytes, sha256=840779e31a9e6fe0859769a6ff16dbb53840efb421ab9496e6f28f57f67c45de)
- CREATED `projects/sfia-studio/app/__tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts` (5512 bytes, sha256=6f08b0895d93e1ee180af9f7187ee4c7fc6f114bde0391a0204ae328af15588d)

### MODIFY

- MODIFIED `projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts` (+37 / −19)
  - re-export `FinOpsAuditEmitter` depuis `finopsAuditTypes.ts`
  - enrichit les détails audit avec `projectId` / `executionRunId` / `correlationId` / `provider`
  - conserve `safeEmit` fail-open

### Document

- CREATED `projects/sfia-studio/143-assistant-sfia-native-openai-finops-technical-lot-t6-foundation-execution.md` (ce fichier)

### Non touché (contrat parallèle)

- aucun fichier Money / aggregate / reconciliation / price catalog T2
- `createFinOpsPool.ts` **REUSE AS-IS**
- `package.json` / `package-lock.json` / `.github/workflows/**` **inchangés**
- `finops/index.ts` **inchangé**

---

## 7. Migration réelle

| Champ | Valeur |
|-------|--------|
| Fichier | `1754600001000_finops-t6-audit-journal.js` |
| Table | `finops_audit_event` |
| Colonnes | `audit_event_id`, `event_type`, `project_id`, `execution_run_id`, `correlation_id`, `occurred_at`, `payload_json`, `created_at` |
| CHECK event_type | `finops_capture_created` \| `finops_capture_duplicate` \| `finops_capture_failed` |
| Append-only | triggers UPDATE/DELETE → `finops_audit_event is append-only` |
| down() | refuse drop si rows > 0 |
| Money columns | **aucune** |

Migration locale validée sur Postgres Docker jetable `postgres:16-alpine` port `55432`, DB `sfia_studio_finops_t6` (non Neon) : **Migrations complete!** (T1 ledger + T6 audit).

---

## 8. Modèle audit

Types foundation uniquement dans `finopsAuditTypes.ts`.
Port `FinOpsAuditJournalPort.append`.
Adapter `createPostgresFinOpsAuditJournal` + `createDurableFinOpsAuditEmitter` (async append, `flush()` tests).

---

## 9. Redaction

`redactFinOpsAuditPayload` : allow-list (`eventId`, `dedupKey`, `code`, `retryable`, `projectId`, `executionRunId`, `correlationId`, `provider`, `status`) ; drop secret-like keys ; truncate 256 ; max 24 keys ; nested dropped.
`assertRedactedPayloadHasNoSecrets` avant INSERT.

---

## 10. Append-only

Même pattern que T1 ledger : function + BEFORE UPDATE/DELETE triggers.
Preuve : test PG `enforces append-only on finops_audit_event`.

---

## 11. Wiring T1

`createFinOpsCaptureService` accepte toujours `audit?: FinOpsAuditEmitter`.
`createDurableFinOpsAuditEmitter(journal)` implémente la frontière.
Détails enrichis via `correlationDetail(...)`.
Aucun second système d'identité.

---

## 12. Fail-open

1. `safeEmit` catch synchrone dans capture.
2. Durable emitter : `journal.append(...).catch(() => {})` — jamais rejeté vers capture.
Preuves unitaires + intégration PG « keeps capture success when journal insert fails ».

---

## 13. Tests

| Suite | Résultat |
|-------|----------|
| `t6.audit.unit.test.ts` | **6 passed** |
| `npm test` (sans DATABASE_URL) | **139 passed / 2 skipped** · **1404 passed / 14 skipped** |
| `migrate:up` (locale 55432) | **PASS** |
| `npm run test:db` | **2 files / 14 tests passed** (T1 ledger 10 + T6 audit 4) |
| Couverture exigée | created · duplicate · failed redacted · secrets absent · append-only · correlation · journal fail ≠ capture fail · duplicate T1 · no external provider dep |

---

## 14. Résultats validations

| Commande | Exit |
|----------|------|
| `npm run typecheck` | 0 |
| `npm run lint` | 0 |
| `npm run build` | 0 |
| `npm test` | 0 |
| `npm run migrate:up` | 0 |
| `npm run test:db` | 0 |
| `git diff --check` | 0 |

---

## 15. Réserves

1. **NOT COMMITTED / NOT PUSHED** — Delivery locale seule ; commit/PR projet nécessite nouveau GO.
2. **CI workflow non modifié** — job CI-A existant migre déjà le dossier migrations ; la nouvelle migration sera prise au prochain push/PR autorisé, mais n'est pas validée ici contre Actions remote.
3. **T6-ext** (T2/T3/T4/T5 events) hors scope — nécessite GO séparé.
4. **Wiring production** — le journal durable est fourni ; l'injection runtime globale hors tests reste à composer lors d'un cycle d'intégration ultérieur si non déjà câblé au call site.
5. **Docker local jetable** utilisé pour migrate/test:db — jamais Neon.

---

## 16. Non-scope explicite

- estimation / correction / aggregate / reconciliation / threshold / override events
- T5 durable override
- T3/T4/T7
- Decimal / Money DDL
- external APM / OTel / Datadog / Sentry
- Neon · provider-real · package deps · new CI job

---

## 17. Git final (pré-handoff)

HEAD inchangé `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` · branche Delivery · aucun staged projet · aucun commit projet.

---

## 18. Verdict

```text
FINOPS TECHNICAL LOT T6-FOUNDATION LOCAL DELIVERY COMPLETE —
STRUCTURED T1 FINOPS AUDIT EVENTS IMPLEMENTED —
DURABLE POSTGRESQL APPEND-ONLY AUDIT JOURNAL IMPLEMENTED —
SECRET REDACTION VERIFIED —
T1 FAIL-OPEN PRESERVED —
NO EXTERNAL OBSERVABILITY PROVIDER —
NO T6-EXT-T2/T3/T4/T5 —
T2 PARALLEL CONTRACT PRESERVED —
TESTS PASSED —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
READY FOR CHATGPT VALIDATION
```

*(Handoff remote verification complétée dans le même cycle après publication — voir Review Pack / rapport final.)*
```


## 8. Validations (Delivery WT)

| Commande | Résultat |
| --- | --- |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| T6 unit (`t6.audit.unit.test.ts`) | **6 passed** |
| T1 capture unit | **23 passed** |
| FinOps suite (`__tests__/oa/finops`) | **109 passed / 24 skipped** (PG without DATABASE_URL) |
| `npm test` | **1425 passed / 24 skipped** — **no createProjectUi flake** |
| Local Postgres | ephemeral Docker `postgres:16-alpine` `sfia-finops-t6-post-t2-pg` **127.0.0.1:55432** (NOT Neon) |
| `migrate:up` T1→T2→T6 | PASS (3 migrations) |
| `npm run test:db` | **24 passed** (T1:10 T2:10 T6:4) |
| Secret scan 9 paths | PASS (0 hits) |
| `git diff --cached` | empty |

### typecheck

```text

> sfia-studio@0.1.0 typecheck
> tsc --noEmit
```

### lint

```text

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
```

### build (tail)

```text

> sfia-studio@0.1.0 build
> next build

   ▲ Next.js 15.5.20

   Creating an optimized production build ...
 ✓ Compiled successfully in 3.1s
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/10) ...
   Generating static pages (2/10)
   Generating static pages (4/10)
   Generating static pages (7/10)
 ✓ Generating static pages (10/10)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      127 B         102 kB
├ ○ /_not-found                            127 B         102 kB
├ ○ /cycle-actif                         3.82 kB         118 kB
├ ○ /decision                            5.56 kB         120 kB
├ ƒ /nouvelle-demande                    10.1 kB         116 kB
├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
├ ƒ /projects/[id]                       2.65 kB         108 kB
├ ○ /projects/new                        2.63 kB         108 kB
├ ƒ /studio/projects/[id]                2.14 kB         112 kB
├ ○ /studio/projects/new                 4.07 kB         114 kB
├ ○ /synthese                            4.83 kB         119 kB
└ ƒ /workspace                             571 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/416-1da97639b4c4d99e.js       45.9 kB
  ├ chunks/90df6f45-0ab72ae70a8b1b78.js  54.2 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

### t6 unit

```text

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/finops/t6.audit.unit.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t6-foundation-post-t2-delivery/projects/sfia-studio/app

 ✓ __tests__/oa/finops/t6.audit.unit.test.ts (6 tests) 4ms

 Test Files  1 passed (1)
      Tests  6 passed (6)
   Start at  16:08:05
   Duration  247ms (transform 41ms, setup 40ms, collect 36ms, tests 4ms, environment 0ms, prepare 36ms)
```

### finops suite (tail)

```text


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t6-foundation-post-t2-delivery/projects/sfia-studio/app

 ✓ __tests__/oa/finops/t2.money.unit.test.ts (12 tests) 2ms
 ✓ __tests__/oa/finops/period.test.ts (14 tests) 5ms
 ✓ __tests__/oa/finops/domainInvariants.test.ts (14 tests) 5ms
 ↓ __tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts (3 tests | 3 skipped)
 ↓ __tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts (4 tests | 4 skipped)
 ↓ __tests__/oa/finops/postgres/t1.ledger.integration.test.ts (10 tests | 10 skipped)
 ✓ __tests__/oa/finops/t1.capture.unit.test.ts (23 tests) 4ms
 ↓ __tests__/oa/finops/postgres/t2.aggregate.integration.test.ts (7 tests | 7 skipped)
 ✓ __tests__/oa/finops/importBoundaries.test.ts (7 tests) 6ms
 ✓ __tests__/oa/finops/blockingEligibility.test.ts (9 tests) 2ms
 ✓ __tests__/oa/finops/costEvidence.test.ts (5 tests) 3ms
 ✓ __tests__/oa/finops/t2.aggregate.unit.test.ts (5 tests) 4ms
 ✓ __tests__/oa/finops/t2.reconciliation.unit.test.ts (4 tests) 3ms
 ✓ __tests__/oa/finops/sourceOfTruth.test.ts (5 tests) 2ms
 ✓ __tests__/oa/finops/t6.audit.unit.test.ts (6 tests) 4ms
 ✓ __tests__/oa/finops/t1.coordinator.failopen.test.ts (5 tests) 78ms

 Test Files  12 passed | 4 skipped (16)
      Tests  109 passed | 24 skipped (133)
   Start at  16:08:10
   Duration  647ms (transform 484ms, setup 627ms, collect 1.03s, tests 118ms, environment 2ms, prepare 708ms)
```

### npm test (tail)

```text
 ✓ __tests__/oa/finops/t2.aggregate.unit.test.ts (5 tests) 6ms
 ✓ __tests__/oa/execution-run/policy.test.ts (9 tests) 7ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 4ms
 ✓ __tests__/oa/finops/costEvidence.test.ts (5 tests) 3ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 2ms
 ✓ __tests__/oa/finops/t2.money.unit.test.ts (12 tests) 3ms
 ✓ __tests__/oa/finops/sourceOfTruth.test.ts (5 tests) 2ms
 ✓ __tests__/oa/finops/blockingEligibility.test.ts (9 tests) 2ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 3ms
 ✓ __tests__/oa/execution-run/adapter.git.readonly.test.ts (4 tests) 6ms
 ✓ __tests__/oa/execution-run/evidence.test.ts (6 tests) 4ms
 ↓ __tests__/oa/finops/postgres/t1.ledger.integration.test.ts (10 tests | 10 skipped)
 ↓ __tests__/oa/finops/postgres/t2.aggregate.integration.test.ts (7 tests | 7 skipped)
 ↓ __tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts (3 tests | 3 skipped)
 ↓ __tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts (4 tests | 4 skipped)

 Test Files  142 passed | 4 skipped (146)
      Tests  1425 passed | 24 skipped (1449)
   Start at  16:08:11
   Duration  8.57s (transform 4.06s, setup 5.42s, collect 15.47s, tests 23.21s, environment 6.96s, prepare 6.07s)
```

### migrate:up

```text

> sfia-studio@0.1.0 migrate:up
> node-pg-migrate up --migrations-dir db/migrations --database-url-var DATABASE_URL_DIRECT

> Migrating files:
> - 1754500000000_finops-t1-usage-ledger
> - 1754600000000_finops-t2-aggregation-reconciliation
> - 1754600001000_finops-t6-audit-journal
### MIGRATION 1754500000000_finops-t1-usage-ledger (UP) ###
CREATE TABLE "finops_usage_event" (
  "event_id" text PRIMARY KEY NOT NULL,
  "dedup_key" text NOT NULL,
  "project_id" text NOT NULL,
  "execution_run_id" text NOT NULL,
  "correlation_id" text,
  "provider" text NOT NULL,
  "model" text,
  "occurred_at" timestamptz NOT NULL,
  "period_start" date NOT NULL,
  "source_of_truth" text NOT NULL,
  "evidence_class" text NOT NULL,
  "input_tokens" bigint,
  "output_tokens" bigint,
  "total_tokens" bigint,
  "provider_request_id" text,
  "correction_ref" text,
  "usage_status" text NOT NULL,
  "created_at" timestamptz DEFAULT NOW() NOT NULL
);
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_dedup_key_key" UNIQUE ("dedup_key");
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_tokens_nonneg" CHECK ((input_tokens IS NULL OR input_tokens >= 0) AND (output_tokens IS NULL OR output_tokens >= 0) AND (total_tokens IS NULL OR total_tokens >= 0));
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_tokens_safe_int" CHECK ((input_tokens IS NULL OR input_tokens <= 9007199254740991) AND (output_tokens IS NULL OR output_tokens <= 9007199254740991) AND (total_tokens IS NULL OR total_tokens <= 9007199254740991));
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_usage_status_chk" CHECK (usage_status IN ('validated', 'unavailable', 'invalid'));
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_source_of_truth_chk" CHECK (source_of_truth IN ('BILLED', 'PROVIDER_OBSERVED', 'API_USAGE', 'LOCAL_COUNT', 'PARAMETRIC_ESTIMATE', 'UNKNOWN'));
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_evidence_class_chk" CHECK (evidence_class IN ('estimated', 'observed', 'billed', 'unknown'));
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_period_start_chk" CHECK (period_start = date_trunc('month', period_start::timestamp)::date);

CREATE OR REPLACE FUNCTION finops_usage_event_append_only()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  RAISE EXCEPTION 'finops_usage_event is append-only';
END;
$$;
;

CREATE TRIGGER trg_finops_usage_event_no_update
BEFORE UPDATE ON finops_usage_event
FOR EACH ROW
EXECUTE FUNCTION finops_usage_event_append_only();
;

CREATE TRIGGER trg_finops_usage_event_no_delete
BEFORE DELETE ON finops_usage_event
FOR EACH ROW
EXECUTE FUNCTION finops_usage_event_append_only();
;
INSERT INTO "public"."pgmigrations" (name, run_on) VALUES ('1754500000000_finops-t1-usage-ledger', NOW());


### MIGRATION 1754600000000_finops-t2-aggregation-reconciliation (UP) ###
CREATE TABLE "finops_cost_event" (
  "cost_event_id" text PRIMARY KEY NOT NULL,
  "dedup_key" text NOT NULL,
  "project_id" text NOT NULL,
  "execution_run_id" text NOT NULL,
  "usage_event_id" text,
  "period_start" date NOT NULL,
  "currency" text NOT NULL,
  "amount" numeric(20,8),
  "evidence_class" text NOT NULL,
  "source_of_truth" text NOT NULL,
  "estimation_status" text NOT NULL,
  "correction_ref" text,
  "catalog_version" text,
  "provider" text NOT NULL,
  "model" text,
  "unit" text,
  "billing_quantum" numeric(20,0),
  "usage_quantity" numeric(20,0),
  "occurred_at" timestamptz NOT NULL,
  "created_at" timestamptz DEFAULT NOW() NOT NULL
);
ALTER TABLE "finops_cost_event"
  ADD CONSTRAINT "finops_cost_event_dedup_key_key" UNIQUE ("dedup_key");
ALTER TABLE "finops_cost_event"
  ADD CONSTRAINT "finops_cost_event_evidence_class_chk" CHECK (evidence_class IN ('estimated', 'observed', 'billed', 'unknown'));
ALTER TABLE "finops_cost_event"
  ADD CONSTRAINT "finops_cost_event_source_of_truth_chk" CHECK (source_of_truth IN ('BILLED', 'PROVIDER_OBSERVED', 'API_USAGE', 'LOCAL_COUNT', 'PARAMETRIC_ESTIMATE', 'UNKNOWN'));
ALTER TABLE "finops_cost_event"
  ADD CONSTRAINT "finops_cost_event_estimation_status_chk" CHECK (estimation_status IN ('available', 'unavailable', 'unknown'));
ALTER TABLE "finops_cost_event"
  ADD CONSTRAINT "finops_cost_event_currency_chk" CHECK (currency ~ '^[A-Z]{3}$');
ALTER TABLE "finops_cost_event"
  ADD CONSTRAINT "finops_cost_event_period_start_chk" CHECK (period_start = date_trunc('month', period_start::timestamp)::date);
CREATE INDEX "finops_cost_event_project_period_currency_idx" ON "finops_cost_event" ("project_id", "period_start", "currency");

CREATE OR REPLACE FUNCTION finops_cost_event_append_only()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  RAISE EXCEPTION 'finops_cost_event is append-only';
END;
$$;
;

CREATE TRIGGER trg_finops_cost_event_no_update
BEFORE UPDATE ON finops_cost_event
FOR EACH ROW
EXECUTE FUNCTION finops_cost_event_append_only();
;

CREATE TRIGGER trg_finops_cost_event_no_delete
BEFORE DELETE ON finops_cost_event
FOR EACH ROW
EXECUTE FUNCTION finops_cost_event_append_only();
;
CREATE TABLE "finops_usage_aggregate" (
  "project_id" text NOT NULL,
  "period_start" date NOT NULL,
  "currency" text NOT NULL,
  "estimated_amount" numeric(20,8) DEFAULT $pga$0$pga$ NOT NULL,
  "observed_amount" numeric(20,8) DEFAULT $pga$0$pga$ NOT NULL,
  "billed_amount" numeric(20,8) DEFAULT $pga$0$pga$ NOT NULL,
  "unknown_amount" numeric(20,8) DEFAULT $pga$0$pga$ NOT NULL,
  "input_tokens_sum" bigint,
  "output_tokens_sum" bigint,
  "total_tokens_sum" bigint,
  "cost_event_count" bigint DEFAULT 0 NOT NULL,
  "unavailable_estimation_count" bigint DEFAULT 0 NOT NULL,
  "rebuild_version" bigint DEFAULT 1 NOT NULL,
  "rebuilt_at" timestamptz NOT NULL
);
ALTER TABLE "finops_usage_aggregate"
  ADD CONSTRAINT "finops_usage_aggregate_pkey" PRIMARY KEY ("project_id", "period_start", "currency");
ALTER TABLE "finops_usage_aggregate"
  ADD CONSTRAINT "finops_usage_aggregate_currency_chk" CHECK (currency ~ '^[A-Z]{3}$');
ALTER TABLE "finops_usage_aggregate"
  ADD CONSTRAINT "finops_usage_aggregate_period_start_chk" CHECK (period_start = date_trunc('month', period_start::timestamp)::date);
CREATE TABLE "finops_price_catalog_entry" (
  "catalog_entry_id" text PRIMARY KEY NOT NULL,
  "catalog_version" text NOT NULL,
  "provider" text NOT NULL,
  "model" text NOT NULL,
  "unit" text NOT NULL,
  "billing_quantum" numeric(20,0) NOT NULL,
  "currency" text NOT NULL,
  "amount_per_quantum" numeric(20,8) NOT NULL,
  "valid_from" timestamptz NOT NULL,
  "valid_to" timestamptz,
  "created_at" timestamptz DEFAULT NOW() NOT NULL
);
ALTER TABLE "finops_price_catalog_entry"
  ADD CONSTRAINT "finops_price_catalog_entry_currency_chk" CHECK (currency ~ '^[A-Z]{3}$');
ALTER TABLE "finops_price_catalog_entry"
  ADD CONSTRAINT "finops_price_catalog_entry_quantum_chk" CHECK (billing_quantum > 0);
ALTER TABLE "finops_price_catalog_entry"
  ADD CONSTRAINT "finops_price_catalog_entry_uniq" UNIQUE ("catalog_version", "provider", "model", "unit", "currency", "valid_from");
CREATE TABLE "finops_reconciliation_record" (
  "reconciliation_id" text PRIMARY KEY NOT NULL,
  "dedup_key" text NOT NULL,
  "project_id" text NOT NULL,
  "period_start" date NOT NULL,
  "source_batch_id" text NOT NULL,
  "status" text NOT NULL,
  "processed_count" bigint DEFAULT 0 NOT NULL,
  "error_code" text,
  "error_message" text,
  "created_at" timestamptz DEFAULT NOW() NOT NULL,
  "completed_at" timestamptz
);
ALTER TABLE "finops_reconciliation_record"
  ADD CONSTRAINT "finops_reconciliation_record_dedup_key_key" UNIQUE ("dedup_key");
ALTER TABLE "finops_reconciliation_record"
  ADD CONSTRAINT "finops_reconciliation_record_status_chk" CHECK (status IN ('succeeded', 'failed'));
INSERT INTO "public"."pgmigrations" (name, run_on) VALUES ('1754600000000_finops-t2-aggregation-reconciliation', NOW());


### MIGRATION 1754600001000_finops-t6-audit-journal (UP) ###
CREATE TABLE "finops_audit_event" (
  "audit_event_id" text PRIMARY KEY NOT NULL,
  "event_type" text NOT NULL,
  "project_id" text,
  "execution_run_id" text,
  "correlation_id" text,
  "occurred_at" timestamptz NOT NULL,
  "payload_json" jsonb NOT NULL,
  "created_at" timestamptz DEFAULT NOW() NOT NULL
);
ALTER TABLE "finops_audit_event"
  ADD CONSTRAINT "finops_audit_event_type_chk" CHECK (event_type IN ('finops_capture_created', 'finops_capture_duplicate', 'finops_capture_failed'));
CREATE INDEX "finops_audit_event_project_occurred_idx" ON "finops_audit_event" ("project_id", "occurred_at");
CREATE INDEX "finops_audit_event_execution_run_idx" ON "finops_audit_event" ("execution_run_id");

CREATE OR REPLACE FUNCTION finops_audit_event_append_only()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  RAISE EXCEPTION 'finops_audit_event is append-only';
END;
$$;
;

CREATE TRIGGER trg_finops_audit_event_no_update
BEFORE UPDATE ON finops_audit_event
FOR EACH ROW
EXECUTE FUNCTION finops_audit_event_append_only();
;

CREATE TRIGGER trg_finops_audit_event_no_delete
BEFORE DELETE ON finops_audit_event
FOR EACH ROW
EXECUTE FUNCTION finops_audit_event_append_only();
;
INSERT INTO "public"."pgmigrations" (name, run_on) VALUES ('1754600001000_finops-t6-audit-journal', NOW());


Migrations complete!
```

### test:db

```text

> sfia-studio@0.1.0 test:db
> vitest run __tests__/oa/finops/postgres


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t6-foundation-post-t2-delivery/projects/sfia-studio/app

 ✓ __tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts (3 tests) 83ms
 ✓ __tests__/oa/finops/postgres/t1.ledger.integration.test.ts (10 tests) 88ms
 ✓ __tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts (4 tests) 89ms
 ✓ __tests__/oa/finops/postgres/t2.aggregate.integration.test.ts (7 tests) 100ms

 Test Files  4 passed (4)
      Tests  24 passed (24)
   Start at  16:09:08
   Duration  421ms (transform 169ms, setup 204ms, collect 294ms, tests 359ms, environment 0ms, prepare 186ms)
```

## 9. Invariants verified

- **Append-only**: PG test `enforces append-only on finops_audit_event` PASS
- **Redaction**: unit + `assertRedactedPayloadHasNoSecrets` path covered; secret scan CLEAN
- **Fail-open**: PG test `keeps capture success when journal insert fails` PASS; unit durable emitter fail-open
- **T2 identity**: T2 migration + doc 142 byte-identical to origin/main; only capture + T6 CREATE differ
- **Migration slot**: `1754600001000` free on main before apply; after local migrate ordered T1→T2→T6

## 10. Reserves / exclusions

| Reserve / exclusion | Status |
| --- | --- |
| R-T6-RUNTIME-COMPOSITION-01 | **OPEN** (global runtime composition deferred) |
| R-PR-T2-API-01 | **OPEN MINOR** — **untouched** |
| T6-ext-T2 / T3–T5 / T7 | **excluded** |
| Neon / provider-real / package / CI | **not touched** |
| Project staging/commit/push/PR | **NO** |

## 11. Secret scan evidence

```text
=== SECRET SCAN 9 PATHS ===
CLEAN projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
CLEAN projects/sfia-studio/app/lib/oa/finops/application/finopsAuditTypes.ts
CLEAN projects/sfia-studio/app/lib/oa/finops/ports/finopsAuditJournalPort.ts
CLEAN projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/redactFinOpsAuditPayload.ts
CLEAN projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAuditJournal.ts
CLEAN projects/sfia-studio/app/db/migrations/1754600001000_finops-t6-audit-journal.js
CLEAN projects/sfia-studio/app/__tests__/oa/finops/t6.audit.unit.test.ts
CLEAN projects/sfia-studio/app/__tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts
CLEAN projects/sfia-studio/143-assistant-sfia-native-openai-finops-technical-lot-t6-foundation-execution.md
hits=0
SECRET_SCAN_PASS
=== STATUS ===
 M projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
?? projects/sfia-studio/143-assistant-sfia-native-openai-finops-technical-lot-t6-foundation-execution.md
?? projects/sfia-studio/app/__tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts
?? projects/sfia-studio/app/__tests__/oa/finops/t6.audit.unit.test.ts
?? projects/sfia-studio/app/db/migrations/1754600001000_finops-t6-audit-journal.js
?? projects/sfia-studio/app/lib/oa/finops/application/finopsAuditTypes.ts
?? projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAuditJournal.ts
?? projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/redactFinOpsAuditPayload.ts
?? projects/sfia-studio/app/lib/oa/finops/ports/finopsAuditJournalPort.ts
?? projects/sfia-studio/app/node_modules
path_count=10
staged=0
HEAD=e1e00df244aa78a063bf2abf21f69325e1036f3a
=== T6 integ test titles (append-only/redaction/fail-open) ===
  it("has finops_audit_event table without money columns", async () => {
  it("persists created then duplicate audits with correlation fields", async () => {
  it("enforces append-only on finops_audit_event", async () => {
  it("keeps capture success when journal insert fails", async () => {
=== RESERVES ===
R-T6-RUNTIME-COMPOSITION-01=OPEN
R-PR-T2-API-01=OPEN MINOR (untouched)
T6-ext-T2=excluded
```

## 12. Evidence directory

`.tmp-sfia-review/t6-post-t2-delivery/` — git-truth, hashes, patch apply, typecheck/lint/build, unit/finops/npm-test, migrate/test-db, capture-useful.diff, created-files/*, secret-scan, status-final-9, handoff artifacts.

## 13. Handoff publication (this cycle)

- publisher: `scripts/sfia/publish-review-handoff.sh` L3
- message: `docs(review-handoff): publish T6 post-T2 integration delivery`
- expected before tip/blob: `c714169e…` / `29f3c47e…`
- after: filled post-publish

## 14. Non-claims

- NOT merged to main
- NOT pushed Delivery branch
- NOT a PR
- NOT T6-ext
- NOT global runtime composition closed
- Historical T6 WT untouched
