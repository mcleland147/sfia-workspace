# Cycle 8 Critical — FinOps Fast-Track — Billed Period E2E Delivery — Review Pack

**Level:** FULL
**Date/heure:** 2026-08-09 23:27:32 CEST / 2026-08-09 21:27:32 UTC
**Repo:** mcleland147/sfia-workspace
**Cycle:** 8 — Delivery / implémentation
**Profil:** Critical
**Typologie:** EVOL / DELIVERY / FINOPS / BOUNDED E2E
**Branch:** `delivery/sfia-studio-finops-fast-track-billed-period-e2e`
**HEAD local:** `eb50183876fd00df149cfcec72fe5a800c0233a8`
**Base origin/main:** `96a8a14bc894b520043b3a8f758b1fb14a72a5e4`

---

## Morris GO (exact)

GO FAST-TRACK FINOPS

Direction autorisée: OPTION_B_ATTRIBUTION_SCOPE as implementation base.
Autorise: branche Delivery · code FinOps borné · T2 attribution · migration additive · BilledPeriodFact · OpenAI Costs adapter · tests · migration pilote après safety · reconcile/rebuild/refresh si credential+mapping · commit local · review pack · handoff L3.

N’autorise PAS: création Admin key · push/PR/merge projet · MONITOR/E1 · policy thresholds · second financial SoT · modification formule T4 · T3 · fake data.

---

## Local Git Truth (pre-delivery)

| Field | Value |
|---|---|
| origin/main | `96a8a14bc894b520043b3a8f758b1fb14a72a5e4` MATCH |
| tracked pre-branch | CLEAN |
| staged pre-branch | NONE |
| untracked | `.tmp-sfia-review/` only |
| branch created | `delivery/sfia-studio-finops-fast-track-billed-period-e2e` @ `96a8a14bc894b520043b3a8f758b1fb14a72a5e4` |

## Local Git Truth (post-delivery)

| Field | Value |
|---|---|
| branch | `delivery/sfia-studio-finops-fast-track-billed-period-e2e` |
| commits | `a7844d7` feat + `eb50183` fix Money wire parse |
| HEAD | `eb50183876fd00df149cfcec72fe5a800c0233a8` |
| project push | NOT DONE |
| staged now | NONE |
| untracked | `.tmp-sfia-review/` only |

---

## Incoming handoff

| Field | Value |
|---|---|
| tip | `494491e659b0b57efd29e59c4465d10db8ae3b45` |
| blob | `9cebb5ea4ea2797bcd2df5294e5cccd6e4d7e6ae` |
| preferred candidate | OPTION_B_ATTRIBUTION_SCOPE (was CANDIDATE_ONLY; now implemented under Fast-Track GO) |

---

## Sources consulted

Method/CKC synthetic map + delivery routing/guardrails.
FinOps T2/T4/T7 files listed in GO.
OpenAI official Costs docs (2026-08-09): `GET /v1/organization/costs`, Admin key, `group_by` project_id|line_item|api_key_id, bucket_width 1d, amount.value number + currency lowercase, pagination has_more/next_page.
EXTERNAL_PROVIDER_CONTRACT: MATCH — no inventing of undocumented ids.

---

## Implementation summary

### Attribution
- `EXECUTION_RUN` — t2-v1 identity BIT-FOR-BIT preserved via unchanged `deriveCostEventIdentity` material.
- `PROJECT_PERIOD` — `t2-v2-period` identity; `executionRunId` MUST null; `derivedSourceReference` required; model/usageEventId null.

### Money / correction
- Provider absolute amount → ledger **delta** contribution.
- Proven in unit test: 100→105→103 ⇒ +100,+5,-2; aggregate billed **103**; replay adds 0.
- Signed Money BigInt; no FX; no authoritative JS Number.

### sourceBatchId
- Content-addressed over complete atom set including providerAmount; order-independent; amount change ⇒ new batch id.

### OpenAI adapter
- Server-only; `OPENAI_ADMIN_KEY` process-only (never logged).
- Raw JSON decimal literal extraction for `amount.value` (handles JSON number wire format).
- Rejects external project mismatch; null line_item honest.

### T4
- Formula files unchanged (`rebuildEnforcementProjection`, `blockingEligibility`, `costEvidence`).
- BILLED PROJECT_PERIOD contributes to billedAmount / blockingEligibleAmount.
- PARAMETRIC_ESTIMATE still excluded.

### Migration
- NEW `1754600005000_finops-t2-billed-period-attribution.js` only.
- Applied on pilot after fingerprint/SHADOW safety gate.
- No financial rows inserted by harness.

---

## Target safety + migration (pilot)

| Field | Value |
|---|---|
| fingerprint | `7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331` MATCH |
| PRE MODE/REV | SHADOW / 1 |
| POST MODE/REV | SHADOW / 1 |
| PRE cost/agg/proj | 0 / 0 / 0 |
| POST cost/agg/proj | 0 / 0 / 0 |
| MIGRATION_APPLIED | True |
| execution_run_id nullable | True |
| OPENAI_CALLS | 0 |
| RECONCILIATIONS | 0 |
| COST_EVENTS_INSERTED_BY_HARNESS | 0 |

---

## Live Costs proof status

| Requirement | Status |
|---|---|
| OPENAI_ADMIN_KEY Keychain/env | **ABSENT** |
| external OpenAI project ID mapping | **ABSENT / NOT PROVIDED** |
| Costs READ call | **NOT EXECUTED** (forbidden to create Admin key; forbidden to invent amounts) |
| Live reconcile / T4 billed amounts | **NOT EXECUTED** |

**LIVE COSTS EVIDENCE ABSENT — IMPLEMENTATION COMPLETE / LIVE PROOF INCOMPLETE**

Morris input required: Admin-class credential (separate from Responses key) + explicit external OpenAI project ID for `sfia-studio-ops1`.

---

## Tests executed

From `projects/sfia-studio/app`:

| Suite | Result |
|---|---|
| t2.billed-period.unit.test.ts | 10/10 PASS |
| t2.reconciliation.unit.test.ts | 4/4 PASS |
| t2.aggregate.unit.test.ts | 5/5 PASS |
| t2.money.unit.test.ts | 12/12 PASS |
| t4.enforcement.unit.test.ts | 19/19 PASS |
| t4.projection-refresh.unit.test.ts | 8/8 PASS |
| blockingEligibility / costEvidence | PASS |
| t7.shadow-option-a / t7.rollout unit | PASS |
| typecheck `tsc --noEmit` | PASS |
| postgres integration | SKIPPED locally (require ephemeral DATABASE_URL ≠ Neon) |

Coverage highlights vs T01–T34:
- t2-v1 golden identity unchanged
- PROJECT_PERIOD null executionRunId / empty RUN rejected
- derivedSourceReference required
- sourceBatchId deterministic / order-independent / amount-sensitive
- correction 100→105→103 + replay 0
- T4 BILLED contributes; estimate excluded
- concurrent same atom → one economic delta
- OpenAI numeric wire amount → canonical Money
- external project mismatch rejected
- invalid money fail-closed

---

## Files created

- `projects/sfia-studio/app/lib/oa/finops/application/billedPeriodIdentity.ts`
- `projects/sfia-studio/app/lib/oa/finops/application/providerMoneyBoundary.ts`
- `projects/sfia-studio/app/lib/oa/finops/application/reconcileBilledPeriod.ts`
- `projects/sfia-studio/app/lib/oa/finops/server/openaiOrganizationCostsAdapter.ts`
- `projects/sfia-studio/app/db/migrations/1754600005000_finops-t2-billed-period-attribution.js`
- `projects/sfia-studio/app/__tests__/oa/finops/t2.billed-period.unit.test.ts`

## Files modified

types.aggregate · t2Identity · reconcileProjectPeriod · refreshEnforcementAfterT2 · composeFinOpsT7Runtime · finopsReconciliationPort · postgresFinOpsReconciliation · memoryFinOpsT2 · postgres aggregate/projection stores · existing T2/T3/T4 unit+postgres fixture tests for new required fields.

## Files intentionally NOT modified

rebuildEnforcementProjection formula · blockingEligibility · costEvidence · package.json · .github · method/ · old migration 1754600000000 · policy/MONITOR/E1.

---

## Counts

| Metric | Value |
|---|---|
| OpenAI Costs calls | 0 |
| OpenAI Usage/Responses calls | 0 |
| DB queries (safety+migrate harness) | multiple READ + migrate DDL |
| Financial cost-event inserts | 0 |
| Reconciliations live | 0 |
| Aggregate rebuilds live | 0 |
| T4 projection rebuilds live | 0 |
| Rollout mutations | 0 |

---

## Reserves / trajectory

| Item | Status |
|---|---|
| R-T4-T3-SYNC-01 | OPEN BEFORE MONITOR (deferred; does not block Fast-Track code close) |
| MONITOR | NOT ACTIVATED |
| E1 | NOT AUTHORIZED |
| Policy values | NOT SELECTED |
| SHADOW | kept revision 1 |
| T4 logic changed | **NO** |

---

## Git Review Index

| Commit | Message |
|---|---|
| `a7844d7a742067fd0e6b8ed5cfa136a5ff8d5551` | feat(sfia-studio): complete FinOps billed period fast-track |
| `eb50183876fd00df149cfcec72fe5a800c0233a8` | fix(sfia-studio): parse OpenAI Costs amount.value from raw JSON decimals |

---

## Morris decisions required

1. Provide OPENAI_ADMIN_KEY (Keychain, separate from Responses) + explicit external OpenAI project ID → authorize follow-up **live Costs reconcile proof** cycle (or reprise under new GO).
2. Keep Fast-Track code on local branch until Morris authorizes PR (explicit GO) — **no push/PR performed**.
3. Product return recommendation below if Morris accepts implementation+live-reserve.

---

## Recommendation

**RECOMMENDATION ONLY — MORRIS DECIDES.**

Code foundation for FinOps BILLED period path is complete and tested.
Live Costs→T4 proof is blocked only by missing Admin credential + project mapping — not by architecture gaps found in this cycle.
Do **not** invent live amounts.
Do **not** open MONITOR/E1/policy.
Recommend: after live proof GO succeeds → **STOP FINOPS PHASE 1 — RETURN TO PRODUCT**.

---

## Unique verdict

FINOPS FAST-TRACK IMPLEMENTATION PASS WITH LIVE-PROOF RESERVE —
NO FAKE DATA —
FINOPS FOUNDATION CODE COMPLETE —
OPTION_B PROJECT_PERIOD IMPLEMENTED —
T2-V1 PRESERVED —
T4 LOGIC UNCHANGED —
MIGRATION APPLIED ON PILOT —
CORRECTION DELTA SAFE IN TESTS —
REPLAY IDEMPOTENT IN TESTS —
OPENAI COSTS ADAPTER PRESENT —
LIVE COSTS PROOF BLOCKED (ADMIN KEY + EXTERNAL PROJECT ID MISSING) —
MONITOR NOT ACTIVATED —
R-T4-T3-SYNC-01 OPEN/DEFERRED —
READY FOR CHATGPT VALIDATION —
MORRIS INPUT REQUIRED FOR LIVE PROOF.

---

## Pilot migrate result JSON

```json
{
  "ok": true,
  "FINGERPRINT": "7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331",
  "FINGERPRINT_MATCH": true,
  "SAFE_IDENTITY": {
    "hostname": "ep-dry-shape-b1fabcbm.c-5.eu-central-1.aws.neon.tech",
    "port": 5432,
    "database": "neondb"
  },
  "PRE": {
    "ROLLOUT": {
      "ROW_EXISTS": true,
      "MODE": "SHADOW",
      "REVISION": 1,
      "UPDATED_AT": "2026-08-09T18:50:15.239Z"
    },
    "USAGE_EVENT_COUNT": 4,
    "COST_EVENT_COUNT": 0,
    "AGGREGATE_COUNT": 0,
    "PROJECTION_COUNT": 0,
    "COST_EVENT_COLUMNS": [
      {
        "column_name": "execution_run_id",
        "is_nullable": "NO"
      }
    ]
  },
  "POST": {
    "ROLLOUT": {
      "ROW_EXISTS": true,
      "MODE": "SHADOW",
      "REVISION": 1,
      "UPDATED_AT": "2026-08-09T18:50:15.239Z"
    },
    "USAGE_EVENT_COUNT": 4,
    "COST_EVENT_COUNT": 0,
    "AGGREGATE_COUNT": 0,
    "PROJECTION_COUNT": 0,
    "COST_EVENT_COLUMNS": [
      {
        "column_name": "attribution_scope",
        "is_nullable": "NO"
      },
      {
        "column_name": "derived_source_reference",
        "is_nullable": "YES"
      },
      {
        "column_name": "execution_run_id",
        "is_nullable": "YES"
      }
    ]
  },
  "MIGRATION_APPLIED": true,
  "EXECUTION_RUN_ID_NULLABLE": true,
  "COST_EVENTS_INSERTED_BY_THIS_HARNESS": 0,
  "OPENAI_CALLS": 0,
  "RECONCILIATIONS": 0,
  "MIGRATE_STDOUT_TAIL": "lled-period-attribution\n### MIGRATION 1754600005000_finops-t2-billed-period-attribution (UP) ###\nALTER TABLE \"finops_cost_event\"\n  ADD \"attribution_scope\" text;\n\nUPDATE finops_cost_event\nSET attribution_scope = 'EXECUTION_RUN'\nWHERE attribution_scope IS NULL;\n;\nALTER TABLE \"finops_cost_event\"\n  ALTER \"attribution_scope\" SET NOT NULL;\nALTER TABLE \"finops_cost_event\"\n  ALTER \"execution_run_id\" DROP NOT NULL;\nALTER TABLE \"finops_cost_event\"\n  ADD \"derived_source_reference\" text;\nALTER TABLE \"finops_cost_event\"\n  ADD CONSTRAINT \"finops_cost_event_attribution_scope_chk\" CHECK (attribution_scope IN ('EXECUTION_RUN', 'PROJECT_PERIOD'));\nALTER TABLE \"finops_cost_event\"\n  ADD CONSTRAINT \"finops_cost_event_scope_execution_run_id_chk\" CHECK ((         (attribution_scope = 'EXECUTION_RUN' AND execution_run_id IS NOT NULL)         OR         (attribution_scope = 'PROJECT_PERIOD' AND execution_run_id IS NULL)       ));\nALTER TABLE \"finops_cost_event\"\n  ADD CONSTRAINT \"finops_cost_event_scope_derived_source_reference_chk\" CHECK ((         (attribution_scope = 'EXECUTION_RUN')         OR         (attribution_scope = 'PROJECT_PERIOD' AND derived_source_reference IS NOT NULL)       ));\nCREATE INDEX \"finops_cost_event_project_period_scope_derived_idx\" ON \"finops_cost_event\" (\"project_id\", \"period_start\", \"attribution_scope\", \"derived_source_reference\");\nINSERT INTO \"public\".\"pgmigrations\" (name, run_on) VALUES ('1754600005000_finops-t2-billed-period-attribution', NOW());\n\n\nMigrations complete!\n"
}
```

---

## Created / temporary files — full contents

### `billedPeriodIdentity.ts`

```
/**
 * FinOps T2 — BILLED period identity helpers (content-addressed, deterministic).
 */

import { createHash } from "node:crypto";

export const OPENAI_COSTS_ADAPTER_CONTRACT_VERSION = "openai-costs-v1" as const;

function normalizePart(value: string | null | undefined): string {
  if (value === null || value === undefined) return "";
  return value.trim();
}

function sha256Hex(material: string): string {
  return createHash("sha256").update(material, "utf8").digest("hex");
}

export function buildDerivedSourceReference(input: {
  readonly provider: string;
  readonly externalProjectId: string;
  readonly sfiaProjectId: string;
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string | null;
  readonly lineItem: string | null;
  readonly currency: string;
}): string {
  const lineItemOrAll = input.lineItem ?? "ALL";
  return [
    normalizePart(input.provider),
    normalizePart(input.externalProjectId),
    normalizePart(input.sfiaProjectId),
    normalizePart(input.sourceBucketStart),
    normalizePart(input.sourceBucketEndExclusive),
    lineItemOrAll,
    normalizePart(input.currency),
  ].join("|");
}

type BilledPeriodBatchAtom = {
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string | null;
  readonly project_id: string;
  readonly line_item: string | null;
  readonly currency: string;
  readonly providerAmount: string;
};

function canonicalAtomKey(atom: BilledPeriodBatchAtom): string {
  return [
    normalizePart(atom.sourceBucketStart),
    normalizePart(atom.sourceBucketEndExclusive),
    normalizePart(atom.project_id),
    normalizePart(atom.line_item ?? "ALL"),
    normalizePart(atom.currency),
    normalizePart(atom.providerAmount),
  ].join("|");
}

export function buildBilledPeriodSourceBatchId(input: {
  readonly provider: string;
  readonly externalProjectId: string;
  readonly sfiaProjectId: string;
  readonly periodStart: string;
  readonly adapterContractVersion: string;
  readonly atoms: ReadonlyArray<BilledPeriodBatchAtom>;
}): string {
  const sorted = [...input.atoms]
    .map(canonicalAtomKey)
    .sort((a, b) => a.localeCompare(b));
  const material = [
    normalizePart(input.provider),
    normalizePart(input.externalProjectId),
    normalizePart(input.sfiaProjectId),
    normalizePart(input.periodStart),
    normalizePart(input.adapterContractVersion),
    sorted.join("\n"),
  ].join("|");
  return `batch_${sha256Hex(material)}`;
}

export function buildCorrectionRef(input: {
  readonly kind: "INITIAL" | "CORR";
  readonly providerPayloadDigest?: string;
}): string {
  if (input.kind === "INITIAL") return "INITIAL";
  const digest = normalizePart(input.providerPayloadDigest);
  if (!digest) {
    throw new Error("providerPayloadDigest is required for CORR correctionRef");
  }
  return `CORR|${digest}`;
}

export function buildProviderPayloadDigest(input: {
  readonly provider: string;
  readonly externalProjectId: string;
  readonly projectId: string;
  readonly periodStart: string;
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string | null;
  readonly lineItem: string | null;
  readonly currency: string;
  readonly providerAmount: string;
  readonly derivedSourceReference: string;
}): string {
  const material = [
    normalizePart(input.provider),
    normalizePart(input.externalProjectId),
    normalizePart(input.projectId),
    normalizePart(input.periodStart),
    normalizePart(input.sourceBucketStart),
    normalizePart(input.sourceBucketEndExclusive),
    normalizePart(input.lineItem ?? "ALL"),
    normalizePart(input.currency),
    normalizePart(input.providerAmount),
    normalizePart(input.derivedSourceReference),
  ].join("|");
  return sha256Hex(material);
}

```
### `providerMoneyBoundary.ts`

```
/**
 * FinOps T2 — provider decimal boundary (never JS Number for money math).
 */

import {
  FINOPS_MONEY_SCALE,
  divideHalfEven,
  formatMoneyString,
  moneyFromMinor,
  normalizeCurrency,
  parseMoneyString,
  type FinOpsMoney,
} from "../domain/money";

function pow10(exp: number): bigint {
  let result = BigInt(1);
  const ten = BigInt(10);
  for (let i = 0; i < exp; i += 1) {
    result = result * ten;
  }
  return result;
}

function parseProviderDecimalToMinor(unsigned: string): bigint {
  const [intPartRaw, fracRaw = ""] = unsigned.split(".");
  const intPart = intPartRaw === "" ? "0" : intPartRaw;
  if (fracRaw.length <= FINOPS_MONEY_SCALE) {
    const fracPadded = fracRaw.padEnd(FINOPS_MONEY_SCALE, "0");
    return BigInt(intPart) * pow10(FINOPS_MONEY_SCALE) + BigInt(fracPadded);
  }
  const highScaleFactor = pow10(fracRaw.length);
  const minorHigh = BigInt(intPart) * highScaleFactor + BigInt(fracRaw);
  const divisor = pow10(fracRaw.length - FINOPS_MONEY_SCALE);
  return divideHalfEven(minorHigh, divisor);
}

/**
 * Parse a provider decimal STRING into canonical Money (scale 8).
 * Values with >8 fractional digits are HALF_EVEN quantized via BigInt.
 */
export function parseProviderMoneyString(
  amount: string,
  currency: string,
): FinOpsMoney {
  const trimmed = amount.trim();
  if (!/^[+-]?\d+(\.\d+)?$/.test(trimmed)) {
    return parseMoneyString(trimmed, currency);
  }
  const negative = trimmed.startsWith("-");
  const unsigned = trimmed.replace(/^[+-]/, "");
  const minorAbs = parseProviderDecimalToMinor(unsigned);
  const amountMinor = negative ? -minorAbs : minorAbs;
  return moneyFromMinor(amountMinor, currency);
}

export function normalizeProviderCurrency(currency: string): string {
  return normalizeCurrency(currency);
}

/** Canonical absolute provider amount at scale 8. */
export function canonicalProviderAmountString(
  amount: string,
  currency: string,
): string {
  const money = parseProviderMoneyString(amount, currency);
  return formatMoneyString(money);
}

```
### `reconcileBilledPeriod.ts`

```
/**
 * FinOps T2 — BILLED period reconciliation (PROJECT_PERIOD attribution).
 * Delta-based append-only corrections; no fake executionRunId.
 */

import {
  buildCorrectionRef,
  buildProviderPayloadDigest,
} from "./billedPeriodIdentity";
import {
  formatMoneyString,
  moneyFromMinor,
  normalizeCurrency,
  parseMoneyString,
  sumMoney,
} from "../domain/money";
import { computeUtcMonthPeriod } from "../domain/period";
import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsReconciliationPort } from "../ports/finopsReconciliationPort";
import {
  recomputeAggregates,
  type RecomputeAggregatesDeps,
} from "./recomputeAggregates";
import {
  derivePeriodCostEventIdentity,
  derivePeriodReconciliationDedupKey,
} from "./t2Identity";
import type {
  BilledPeriodFact,
  FinOpsCostEvent,
  ReconcileBilledPeriodInput,
  ReconcileBilledPeriodResult,
} from "./types.aggregate";

export type ReconcileBilledPeriodDeps = {
  readonly reconciliation: FinOpsReconciliationPort;
  readonly aggregates: FinOpsAggregatePort;
  readonly nowIso: () => string;
};

const DEFAULT_MAX_FACTS = 100;

function periodStartMatchesOccurredAt(
  periodStart: string,
  occurredAt: string,
): boolean {
  try {
    const period = computeUtcMonthPeriod(occurredAt);
    return period.periodStart.slice(0, 10) === periodStart;
  } catch {
    return false;
  }
}

function validateProjectPeriodFact(fact: BilledPeriodFact, periodStart: string): void {
  if (!fact.derivedSourceReference.trim()) {
    throw new Error("derivedSourceReference is required for BILLED period facts");
  }
  if (!periodStartMatchesOccurredAt(periodStart, fact.sourceBucketStart)) {
    throw new Error("fact sourceBucketStart does not belong to periodStart");
  }
}

function sumLedgerForAtom(
  events: ReadonlyArray<FinOpsCostEvent>,
  input: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly currency: string;
    readonly derivedSourceReference: string;
  },
): bigint {
  const matching = events.filter(
    (e) =>
      e.projectId === input.projectId &&
      e.periodStart === input.periodStart &&
      e.currency === input.currency &&
      e.derivedSourceReference === input.derivedSourceReference &&
      e.sourceOfTruth === "BILLED" &&
      e.attributionScope === "PROJECT_PERIOD" &&
      e.amount !== null,
  );
  if (matching.length === 0) return BigInt(0);
  return sumMoney(
    input.currency,
    matching.map((e) => parseMoneyString(e.amount!, input.currency)),
  ).amountMinor;
}

export async function reconcileBilledPeriod(
  deps: ReconcileBilledPeriodDeps,
  input: ReconcileBilledPeriodInput,
): Promise<ReconcileBilledPeriodResult> {
  const projectId = input.projectId.trim();
  const periodStart = input.periodStart.trim();
  const sourceBatchId = input.sourceBatchId.trim();
  if (!projectId || !periodStart || !sourceBatchId) {
    return {
      outcome: "failed",
      reconciliationId: null,
      code: "FINOPS_RECON_INVALID_INPUT",
      message: "projectId, periodStart, and sourceBatchId are required",
      finopsSideOnly: true,
    };
  }

  const { reconciliationId, dedupKey } = derivePeriodReconciliationDedupKey({
    projectId,
    periodStart,
    sourceBatchId,
  });

  return deps.reconciliation.withExclusiveProjectPeriodReconciliation(
    { projectId, periodStart },
    async (ops) => {
      const existing = await ops.findReconciliationByDedup(dedupKey);
      if (existing && existing.status === "succeeded") {
        const aggregates = await deps.aggregates.listAggregatesForProjectPeriod({
          projectId,
          periodStart,
        });
        return {
          outcome: "succeeded",
          reconciliationId: existing.reconciliationId,
          processedCount: existing.processedCount,
          createdCount: 0,
          duplicateCount: existing.processedCount,
          aggregates,
          idempotentReplay: true,
        };
      }

      const insert = await ops.insertReconciliationRecord({
        reconciliationId,
        dedupKey,
        projectId,
        periodStart,
        sourceBatchId,
        status: "failed",
        processedCount: 0,
        errorCode: null,
        errorMessage: null,
        completedAt: null,
      });

      if (insert.outcome === "duplicate" && insert.existing.status === "succeeded") {
        const aggregates = await deps.aggregates.listAggregatesForProjectPeriod({
          projectId,
          periodStart,
        });
        return {
          outcome: "succeeded",
          reconciliationId: insert.existing.reconciliationId,
          processedCount: insert.existing.processedCount,
          createdCount: 0,
          duplicateCount: insert.existing.processedCount,
          aggregates,
          idempotentReplay: true,
        };
      }

      if (insert.outcome === "failed") {
        return {
          outcome: "failed",
          reconciliationId,
          code: "FINOPS_RECON_PERSIST_FAILED",
          message: insert.message,
          finopsSideOnly: true,
        };
      }

      const maxFacts = input.maxFacts ?? DEFAULT_MAX_FACTS;
      if (
        typeof maxFacts !== "number" ||
        !Number.isSafeInteger(maxFacts) ||
        maxFacts <= 0
      ) {
        await ops.completeReconciliationRecord({
          reconciliationId,
          status: "failed",
          processedCount: 0,
          errorCode: "FINOPS_RECON_INVALID_BATCH_BOUND",
          errorMessage: "maxFacts must be a positive safe integer",
          completedAt: deps.nowIso(),
        });
        return {
          outcome: "failed",
          reconciliationId,
          code: "FINOPS_RECON_INVALID_BATCH_BOUND",
          message: "maxFacts must be a positive safe integer",
          finopsSideOnly: true,
        };
      }

      if (input.facts.length > maxFacts) {
        await ops.completeReconciliationRecord({
          reconciliationId,
          status: "failed",
          processedCount: 0,
          errorCode: "FINOPS_RECON_BATCH_TOO_LARGE",
          errorMessage: `facts exceed bounded batch maxFacts=${maxFacts}`,
          completedAt: deps.nowIso(),
        });
        return {
          outcome: "failed",
          reconciliationId,
          code: "FINOPS_RECON_BATCH_TOO_LARGE",
          message: `facts exceed bounded batch maxFacts=${maxFacts}`,
          finopsSideOnly: true,
        };
      }

      let createdCount = 0;
      let duplicateCount = 0;
      let processedCount = 0;

      try {
        const ledger: FinOpsCostEvent[] = [
          ...(await ops.listCostEventsForProjectPeriod({
            projectId,
            periodStart,
          })),
        ];

        for (const fact of input.facts) {
          validateProjectPeriodFact(fact, periodStart);
          const currency = normalizeCurrency(fact.currency);
          const providerAmount = parseMoneyString(fact.providerAmount, currency);

          const cumulative = sumLedgerForAtom(ledger, {
            projectId,
            periodStart,
            currency,
            derivedSourceReference: fact.derivedSourceReference,
          });
          const deltaMinor = providerAmount.amountMinor - cumulative;
          if (deltaMinor === BigInt(0)) {
            duplicateCount += 1;
            processedCount += 1;
            continue;
          }

          const deltaAmount = formatMoneyString(
            moneyFromMinor(deltaMinor, currency),
          );
          const correctionRef =
            cumulative === BigInt(0)
              ? buildCorrectionRef({ kind: "INITIAL" })
              : buildCorrectionRef({
                  kind: "CORR",
                  providerPayloadDigest: buildProviderPayloadDigest({
                    provider: fact.provider,
                    externalProjectId: fact.externalProjectId,
                    projectId: fact.projectId,
                    periodStart,
                    sourceBucketStart: fact.sourceBucketStart,
                    sourceBucketEndExclusive: fact.sourceBucketEndExclusive,
                    lineItem: fact.lineItem,
                    currency,
                    providerAmount: fact.providerAmount,
                    derivedSourceReference: fact.derivedSourceReference,
                  }),
                });

          const identity = derivePeriodCostEventIdentity({
            projectId,
            periodStart,
            provider: fact.provider,
            derivedSourceReference: fact.derivedSourceReference,
            correctionRef,
            sourceBatchId,
            amount: deltaAmount,
            currency,
          });

          const event: FinOpsCostEvent = {
            costEventId: identity.costEventId,
            dedupKey: identity.dedupKey,
            projectId,
            attributionScope: "PROJECT_PERIOD",
            executionRunId: null,
            derivedSourceReference: fact.derivedSourceReference,
            usageEventId: null,
            periodStart,
            currency,
            amount: deltaAmount,
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            estimationStatus: "available",
            correctionRef,
            catalogVersion: null,
            provider: fact.provider,
            model: null,
            unit: null,
            billingQuantum: null,
            usageQuantity: null,
            occurredAt: fact.sourceBucketStart,
          };

          const result = await ops.insertCostEvent(event);
          if (result.outcome === "created") {
            createdCount += 1;
            ledger.push(event);
          } else if (result.outcome === "duplicate") {
            duplicateCount += 1;
          } else if (result.outcome === "conflict") {
            throw new Error(result.message);
          } else {
            throw new Error(result.message);
          }
          processedCount += 1;
        }

        const recomputeDeps: RecomputeAggregatesDeps = {
          aggregates: deps.aggregates,
          nowIso: deps.nowIso,
        };
        const recomputed = await recomputeAggregates(recomputeDeps, {
          projectId,
          periodStart,
        });
        if (recomputed.outcome === "failed") {
          throw new Error(recomputed.message);
        }

        await ops.completeReconciliationRecord({
          reconciliationId,
          status: "succeeded",
          processedCount,
          errorCode: null,
          errorMessage: null,
          completedAt: deps.nowIso(),
        });

        return {
          outcome: "succeeded",
          reconciliationId,
          processedCount,
          createdCount,
          duplicateCount,
          aggregates: recomputed.aggregates,
          idempotentReplay: false,
        };
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "billed period reconciliation failed";
        await ops.completeReconciliationRecord({
          reconciliationId,
          status: "failed",
          processedCount,
          errorCode: "FINOPS_RECON_FAILED",
          errorMessage: message,
          completedAt: deps.nowIso(),
        });
        return {
          outcome: "failed",
          reconciliationId,
          code: "FINOPS_RECON_FAILED",
          message,
          finopsSideOnly: true,
        };
      }
    },
  );
}

```
### `openaiOrganizationCostsAdapter.ts`

```
/**
 * OpenAI Organization Costs adapter — server-only BILLED period facts.
 * OPENAI_ADMIN_KEY from process env only (never logged).
 */

import {
  buildBilledPeriodSourceBatchId,
  buildDerivedSourceReference,
  OPENAI_COSTS_ADAPTER_CONTRACT_VERSION,
} from "../application/billedPeriodIdentity";
import {
  canonicalProviderAmountString,
  normalizeProviderCurrency,
  parseProviderMoneyString,
} from "../application/providerMoneyBoundary";
import type { BilledPeriodFact } from "../application/types.aggregate";
import { computeUtcMonthPeriod } from "../domain/period";

function assertServerOnly(): void {
  if (typeof window !== "undefined") {
    throw new Error(
      "oa/finops/server/openaiOrganizationCostsAdapter is server-only",
    );
  }
}

export type OpenAiCostsAtom = {
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string | null;
  readonly project_id: string;
  readonly line_item: string | null;
  readonly currency: string;
  readonly providerAmount: string;
};


function unixSecondsToIso(seconds: number): string {
  return new Date(seconds * 1000).toISOString();
}

type ParsedCostsPage = {
  readonly data?: ReadonlyArray<{
    readonly start_time: number;
    readonly end_time?: number;
    readonly results?: ReadonlyArray<{
      readonly object?: string;
      readonly project_id?: string | null;
      readonly line_item?: string | null;
      readonly amount?: {
        readonly value?: unknown;
        readonly currency?: string;
      };
    }>;
  }>;
};

const AMOUNT_BLOCK_RE =
  /"amount"\s*:\s*\{\s*(?:(?:"value"\s*:\s*(?<valueNum>-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|"value"\s*:\s*"(?<valueStr>-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)")\s*,\s*"currency"\s*:\s*"(?<currencyA>[^"]+)"|"currency"\s*:\s*"(?<currencyB>[^"]+)"\s*,\s*(?:"value"\s*:\s*(?<valueNum2>-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|"value"\s*:\s*"(?<valueStr2>-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)"))\s*\}/g;

/**
 * Extract amount.value decimal literals from raw JSON wire text.
 * Never uses JSON Number as authoritative Money input.
 */
export function extractAmountLiteralsFromRawCostsPage(
  rawPage: string,
): ReadonlyArray<{ readonly valueLiteral: string; readonly currencyRaw: string }> {
  const out: Array<{ valueLiteral: string; currencyRaw: string }> = [];
  for (const match of rawPage.matchAll(AMOUNT_BLOCK_RE)) {
    const valueLiteral =
      match.groups?.valueNum ??
      match.groups?.valueStr ??
      match.groups?.valueNum2 ??
      match.groups?.valueStr2;
    const currencyRaw = match.groups?.currencyA ?? match.groups?.currencyB;
    if (!valueLiteral || !currencyRaw) {
      throw new Error("OpenAI costs amount block incomplete in raw page text");
    }
    out.push({ valueLiteral, currencyRaw });
  }
  return out;
}

export function parseCostsPageToAtoms(rawPage: string): OpenAiCostsAtom[] {
  let parsed: ParsedCostsPage;
  try {
    parsed = JSON.parse(rawPage) as ParsedCostsPage;
  } catch {
    throw new Error("OpenAI costs page is not valid JSON");
  }

  const amountLiterals = extractAmountLiteralsFromRawCostsPage(rawPage);
  let amountCursor = 0;

  const atoms: OpenAiCostsAtom[] = [];
  for (const bucket of parsed.data ?? []) {
    const sourceBucketStart = unixSecondsToIso(bucket.start_time);
    const sourceBucketEndExclusive =
      bucket.end_time === undefined ? null : unixSecondsToIso(bucket.end_time);
    for (const result of bucket.results ?? []) {
      if (
        result.object !== undefined &&
        result.object !== "organization.costs.result"
      ) {
        continue;
      }
      const projectId =
        typeof result.project_id === "string" ? result.project_id.trim() : "";
      if (!projectId) continue;
      if (result.amount == null) continue;

      const literal = amountLiterals[amountCursor];
      amountCursor += 1;
      if (!literal) {
        throw new Error(
          "OpenAI costs amount.value literal missing from raw page text",
        );
      }

      const currency = normalizeProviderCurrency(literal.currencyRaw);
      // Authoritative Money path: raw decimal literal → BigInt scale-8 (no Number).
      const providerAmount = canonicalProviderAmountString(
        literal.valueLiteral,
        currency,
      );
      atoms.push({
        sourceBucketStart,
        sourceBucketEndExclusive,
        project_id: projectId,
        line_item: result.line_item ?? null,
        currency,
        providerAmount,
      });
    }
  }
  return atoms;
}

export function mapAtomsToBilledPeriodFacts(input: {
  readonly projectId: string;
  readonly externalProjectId: string;
  readonly periodStart: string;
  readonly provider: string;
  readonly atoms: ReadonlyArray<OpenAiCostsAtom>;
  readonly sourceBatchId: string;
}): BilledPeriodFact[] {
  const facts: BilledPeriodFact[] = [];
  for (const atom of input.atoms) {
    if (atom.project_id !== input.externalProjectId) {
      throw new Error(
        `OpenAI costs external project mismatch: expected ${input.externalProjectId}, got ${atom.project_id}`,
      );
    }
    parseProviderMoneyString(atom.providerAmount, atom.currency);
    const bucketPeriod = computeUtcMonthPeriod(atom.sourceBucketStart)
      .periodStart.slice(0, 10);
    if (bucketPeriod !== input.periodStart) {
      throw new Error("OpenAI costs bucket period does not match requested periodStart");
    }
    const derivedSourceReference = buildDerivedSourceReference({
      provider: input.provider,
      externalProjectId: input.externalProjectId,
      sfiaProjectId: input.projectId,
      sourceBucketStart: atom.sourceBucketStart,
      sourceBucketEndExclusive: atom.sourceBucketEndExclusive,
      lineItem: atom.line_item,
      currency: atom.currency,
    });
    facts.push({
      projectId: input.projectId,
      externalProjectId: input.externalProjectId,
      periodStart: input.periodStart,
      provider: input.provider,
      sourceBucketStart: atom.sourceBucketStart,
      sourceBucketEndExclusive: atom.sourceBucketEndExclusive,
      lineItem: atom.line_item,
      providerAmount: atom.providerAmount,
      currency: atom.currency,
      derivedSourceReference,
      sourceBatchId: input.sourceBatchId,
    });
  }
  return facts;
}

export function buildOpenAiCostsSourceBatchId(input: {
  readonly externalProjectId: string;
  readonly sfiaProjectId: string;
  readonly periodStart: string;
  readonly atoms: ReadonlyArray<OpenAiCostsAtom>;
}): string {
  return buildBilledPeriodSourceBatchId({
    provider: "openai",
    externalProjectId: input.externalProjectId,
    sfiaProjectId: input.sfiaProjectId,
    periodStart: input.periodStart,
    adapterContractVersion: OPENAI_COSTS_ADAPTER_CONTRACT_VERSION,
    atoms: input.atoms.map((atom) => ({
      sourceBucketStart: atom.sourceBucketStart,
      sourceBucketEndExclusive: atom.sourceBucketEndExclusive,
      project_id: atom.project_id,
      line_item: atom.line_item,
      currency: atom.currency,
      providerAmount: atom.providerAmount,
    })),
  });
}

export type FetchOpenAiOrganizationCostsInput = {
  readonly projectId: string;
  readonly externalProjectId: string;
  readonly periodStart: string;
  readonly startTimeUnix: number;
  readonly endTimeUnix?: number;
  readonly fetchImpl?: typeof fetch;
};

export async function fetchOpenAiOrganizationCostsPage(
  input: FetchOpenAiOrganizationCostsInput & { readonly page?: string | null },
): Promise<{ readonly raw: string; readonly nextPage: string | null }> {
  assertServerOnly();
  const adminKey = process.env.OPENAI_ADMIN_KEY;
  if (!adminKey) {
    throw new Error("OPENAI_ADMIN_KEY is required for OpenAI organization costs");
  }
  const params = new URLSearchParams();
  params.set("start_time", String(input.startTimeUnix));
  if (input.endTimeUnix !== undefined) {
    params.set("end_time", String(input.endTimeUnix));
  }
  params.set("bucket_width", "1d");
  params.append("project_ids[]", input.externalProjectId);
  params.append("group_by[]", "project_id");
  params.append("group_by[]", "line_item");
  if (input.page) params.set("page", input.page);

  const fetchImpl = input.fetchImpl ?? fetch;
  const response = await fetchImpl(
    `https://api.openai.com/v1/organization/costs?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${adminKey}`,
        "Content-Type": "application/json",
      },
    },
  );
  const raw = await response.text();
  if (!response.ok) {
    throw new Error(`OpenAI organization costs request failed: ${response.status}`);
  }
  const nextPageMatch = /"next_page"\s*:\s*(null|"([^"\\]|\\.)*")/.exec(raw);
  const nextPage =
    nextPageMatch === null
      ? null
      : nextPageMatch[1] === "null"
        ? null
        : JSON.parse(nextPageMatch[1]!) as string;
  return { raw, nextPage };
}

export async function fetchOpenAiOrganizationCostsSnapshot(
  input: FetchOpenAiOrganizationCostsInput,
): Promise<{
  readonly atoms: OpenAiCostsAtom[];
  readonly sourceBatchId: string;
  readonly facts: BilledPeriodFact[];
}> {
  const allAtoms: OpenAiCostsAtom[] = [];
  let page: string | null = null;
  do {
    const pageResult = await fetchOpenAiOrganizationCostsPage({ ...input, page });
    allAtoms.push(...parseCostsPageToAtoms(pageResult.raw));
    page = pageResult.nextPage;
  } while (page);

  const sourceBatchId = buildOpenAiCostsSourceBatchId({
    externalProjectId: input.externalProjectId,
    sfiaProjectId: input.projectId,
    periodStart: input.periodStart,
    atoms: allAtoms,
  });
  const facts = mapAtomsToBilledPeriodFacts({
    projectId: input.projectId,
    externalProjectId: input.externalProjectId,
    periodStart: input.periodStart,
    provider: "openai",
    atoms: allAtoms,
    sourceBatchId,
  });
  return { atoms: allAtoms, sourceBatchId, facts };
}

export {
  OPENAI_COSTS_ADAPTER_CONTRACT_VERSION,
  buildDerivedSourceReference,
};

```
### `1754600005000_finops-t2-billed-period-attribution.js`

```
/**
 * Migration: FinOps T2 BILLED period attribution scope (OPTION B).
 *
 * Adds attribution_scope + derived_source_reference; execution_run_id nullable
 * for PROJECT_PERIOD facts without fake executionRunId.
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.addColumn("finops_cost_event", {
    attribution_scope: { type: "text" },
  });

  pgm.sql(`
UPDATE finops_cost_event
SET attribution_scope = 'EXECUTION_RUN'
WHERE attribution_scope IS NULL;
`);

  pgm.alterColumn("finops_cost_event", "attribution_scope", {
    notNull: true,
  });

  pgm.alterColumn("finops_cost_event", "execution_run_id", {
    notNull: false,
  });

  pgm.addColumn("finops_cost_event", {
    derived_source_reference: { type: "text" },
  });

  pgm.addConstraint(
    "finops_cost_event",
    "finops_cost_event_attribution_scope_chk",
    {
      check: "attribution_scope IN ('EXECUTION_RUN', 'PROJECT_PERIOD')",
    },
  );

  pgm.addConstraint(
    "finops_cost_event",
    "finops_cost_event_scope_execution_run_id_chk",
    {
      check: `(
        (attribution_scope = 'EXECUTION_RUN' AND execution_run_id IS NOT NULL)
        OR
        (attribution_scope = 'PROJECT_PERIOD' AND execution_run_id IS NULL)
      )`,
    },
  );

  pgm.addConstraint(
    "finops_cost_event",
    "finops_cost_event_scope_derived_source_reference_chk",
    {
      check: `(
        (attribution_scope = 'EXECUTION_RUN')
        OR
        (attribution_scope = 'PROJECT_PERIOD' AND derived_source_reference IS NOT NULL)
      )`,
    },
  );

  pgm.createIndex(
    "finops_cost_event",
    [
      "project_id",
      "period_start",
      "attribution_scope",
      "derived_source_reference",
    ],
    {
      name: "finops_cost_event_project_period_scope_derived_idx",
    },
  );
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  pgm.sql(`
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM finops_cost_event
    WHERE attribution_scope = 'PROJECT_PERIOD'
  ) THEN
    RAISE EXCEPTION
      'Refusing to drop BILLED period attribution: PROJECT_PERIOD rows exist';
  END IF;
END $$;
`);

  pgm.dropIndex(
    "finops_cost_event",
    [],
    { name: "finops_cost_event_project_period_scope_derived_idx" },
  );
  pgm.dropConstraint(
    "finops_cost_event",
    "finops_cost_event_scope_derived_source_reference_chk",
  );
  pgm.dropConstraint(
    "finops_cost_event",
    "finops_cost_event_scope_execution_run_id_chk",
  );
  pgm.dropConstraint(
    "finops_cost_event",
    "finops_cost_event_attribution_scope_chk",
  );
  pgm.dropColumn("finops_cost_event", "derived_source_reference");
  pgm.dropColumn("finops_cost_event", "attribution_scope");
  pgm.alterColumn("finops_cost_event", "execution_run_id", {
    notNull: true,
  });
};

```
### `t2.billed-period.unit.test.ts`

```
/**
 * @vitest-environment node
 *
 * FinOps T2 — BILLED period attribution (PROJECT_PERIOD / OPTION B).
 */
import { describe, expect, it } from "vitest";
import {
  buildBilledPeriodSourceBatchId,
  buildDerivedSourceReference,
} from "@/lib/oa/finops/application/billedPeriodIdentity";
import { reconcileBilledPeriod } from "@/lib/oa/finops/application/reconcileBilledPeriod";
import {
  deriveCostEventIdentity,
  derivePeriodCostEventIdentity,
} from "@/lib/oa/finops/application/t2Identity";
import type { BilledPeriodFact } from "@/lib/oa/finops/application/types.aggregate";
import {
  canonicalProviderAmountString,
  normalizeProviderCurrency,
  parseProviderMoneyString,
} from "@/lib/oa/finops/application/providerMoneyBoundary";
import { buildEnforcementProjectionsFromCostEvents } from "@/lib/oa/finops/application/rebuildEnforcementProjection";
import { createMemoryFinOpsT2Pair } from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsT2";
import {
  mapAtomsToBilledPeriodFacts,
  parseCostsPageToAtoms,
} from "@/lib/oa/finops/server/openaiOrganizationCostsAdapter";

const PROJECT = "sfia-proj-1";
const EXTERNAL = "proj_openai_1";
const PERIOD = "2026-08-01";
const BUCKET = "2026-08-07T00:00:00.000Z";

function derivedRef(lineItem: string | null = "ALL"): string {
  return buildDerivedSourceReference({
    provider: "openai",
    externalProjectId: EXTERNAL,
    sfiaProjectId: PROJECT,
    sourceBucketStart: BUCKET,
    sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
    lineItem: lineItem === "ALL" ? null : lineItem,
    currency: "USD",
  });
}

function billedFact(
  providerAmount: string,
  sourceBatchId: string,
  lineItem: string | null = null,
): BilledPeriodFact {
  return {
    projectId: PROJECT,
    externalProjectId: EXTERNAL,
    periodStart: PERIOD,
    provider: "openai",
    sourceBucketStart: BUCKET,
    sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
    lineItem,
    providerAmount,
    currency: "USD",
    derivedSourceReference: derivedRef(lineItem),
    sourceBatchId,
  };
}

describe("FinOps T2 billed period", () => {
  it("deriveCostEventIdentity unchanged for fixed RUN inputs", () => {
    const identity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "run-1",
      evidenceClass: "observed",
      correctionRef: "corr-1",
      sourceBatchId: "batch-1",
      amount: "0.12000000",
      currency: "USD",
    });
    expect(identity).toEqual({
      costEventId:
        "cost_b861bab1869be863abac5ce1ae8fb7def8fc93ac42ed5328fb73968ab46b8f9b",
      dedupKey:
        "cost_dedup_b861bab1869be863abac5ce1ae8fb7def8fc93ac42ed5328fb73968ab46b8f9b",
    });
  });

  it("PROJECT_PERIOD identity is deterministic", () => {
    const a = derivePeriodCostEventIdentity({
      projectId: PROJECT,
      periodStart: PERIOD,
      provider: "openai",
      derivedSourceReference: derivedRef(),
      correctionRef: "INITIAL",
      sourceBatchId: "batch_test",
      amount: "100.00000000",
      currency: "USD",
    });
    const b = derivePeriodCostEventIdentity({
      projectId: PROJECT,
      periodStart: PERIOD,
      provider: "openai",
      derivedSourceReference: derivedRef(),
      correctionRef: "INITIAL",
      sourceBatchId: "batch_test",
      amount: "100.00000000",
      currency: "USD",
    });
    expect(a).toEqual(b);
  });

  it("rejects EXECUTION_RUN empty-string executionRunId via reconcileProjectPeriod path", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const { reconcileProjectPeriod } = await import(
      "@/lib/oa/finops/application/reconcileProjectPeriod"
    );
    const result = await reconcileProjectPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: PERIOD,
        sourceBatchId: "batch-empty-run",
        facts: [
          {
            executionRunId: "",
            usageEventId: null,
            evidenceClass: "observed",
            sourceOfTruth: "PROVIDER_OBSERVED",
            amount: "1.00000000",
            currency: "USD",
            correctionRef: "corr-1",
            provider: "openai",
            model: null,
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(result.outcome).toBe("failed");
  });

  it("requires derivedSourceReference on billed facts", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const fact = billedFact("100.00000000", "batch-a");
    const bad = { ...fact, derivedSourceReference: "  " };
    const result = await reconcileBilledPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId: PROJECT,
        periodStart: PERIOD,
        sourceBatchId: "batch-a",
        facts: [bad],
      },
    );
    expect(result.outcome).toBe("failed");
  });

  it("sourceBatchId is deterministic and order-independent", () => {
    const atomA = {
      sourceBucketStart: BUCKET,
      sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
      project_id: EXTERNAL,
      line_item: null,
      currency: "USD",
      providerAmount: "100.00000000",
    };
    const atomB = {
      ...atomA,
      sourceBucketStart: "2026-08-08T00:00:00.000Z",
      providerAmount: "5.00000000",
    };
    const forward = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [atomA, atomB],
    });
    const reverse = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [atomB, atomA],
    });
    expect(forward).toBe(reverse);
    expect(forward.startsWith("batch_")).toBe(true);

    const changed = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [{ ...atomA, providerAmount: "101.00000000" }],
    });
    expect(changed).not.toBe(forward);
  });

  it("correction path 100→105→103 yields deltas and aggregate billed 103; replay adds 0", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: EXTERNAL,
          line_item: null,
          currency: "USD",
          providerAmount: "100.00000000",
        },
      ],
    });
    const first = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [billedFact("100.00000000", batch1)],
    });
    expect(first.outcome).toBe("succeeded");
    if (first.outcome !== "succeeded") return;
    expect(first.createdCount).toBe(1);

    const batch2 = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: EXTERNAL,
          line_item: null,
          currency: "USD",
          providerAmount: "105.00000000",
        },
      ],
    });
    const second = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch2,
      facts: [billedFact("105.00000000", batch2)],
    });
    expect(second.outcome).toBe("succeeded");
    if (second.outcome !== "succeeded") return;
    expect(second.createdCount).toBe(1);

    const batch3 = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: EXTERNAL,
          line_item: null,
          currency: "USD",
          providerAmount: "103.00000000",
        },
      ],
    });
    const third = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch3,
      facts: [billedFact("103.00000000", batch3)],
    });
    expect(third.outcome).toBe("succeeded");
    if (third.outcome !== "succeeded") return;

    const usd = third.aggregates.find((a) => a.currency === "USD");
    expect(usd?.billedAmount).toBe("103.00000000");

    const replay = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch3,
      facts: [billedFact("103.00000000", batch3)],
    });
    expect(replay.outcome).toBe("succeeded");
    if (replay.outcome !== "succeeded") return;
    expect(replay.idempotentReplay).toBe(true);
    expect(replay.createdCount).toBe(0);
  });

  it("PARAMETRIC estimate never contributes to T4 blockingEligibleAmount", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: PROJECT,
      periodStart: PERIOD,
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        {
          costEventId: "c-est",
          dedupKey: "d-est",
          projectId: PROJECT,
          attributionScope: "EXECUTION_RUN",
          executionRunId: "run-1",
          derivedSourceReference: null,
          usageEventId: null,
          periodStart: PERIOD,
          currency: "USD",
          amount: "99.00000000",
          evidenceClass: "estimated",
          sourceOfTruth: "PARAMETRIC_ESTIMATE",
          estimationStatus: "available",
          correctionRef: null,
          catalogVersion: "v1",
          provider: "openai",
          model: "gpt-test",
          unit: "token",
          billingQuantum: "1000",
          usageQuantity: "1000",
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
        {
          costEventId: "c-bill",
          dedupKey: "d-bill",
          projectId: PROJECT,
          attributionScope: "PROJECT_PERIOD",
          executionRunId: null,
          derivedSourceReference: derivedRef(),
          usageEventId: null,
          periodStart: PERIOD,
          currency: "USD",
          amount: "5.00000000",
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          estimationStatus: "available",
          correctionRef: "INITIAL",
          catalogVersion: null,
          provider: "openai",
          model: null,
          unit: null,
          billingQuantum: null,
          usageQuantity: null,
          occurredAt: BUCKET,
        },
      ],
    });
    expect(projections[0]!.blockingEligibleAmount).toBe("5.00000000");
    expect(projections[0]!.billedAmount).toBe("5.00000000");
  });

  it("OpenAI mapper handles null line_item and rejects external project mismatch", () => {
    // Wire format mirrors OpenAI docs: amount.value is a JSON number.
    const raw = JSON.stringify({
      object: "page",
      data: [
        {
          object: "bucket",
          start_time: 1786060800,
          end_time: 1786147200,
          results: [
            {
              object: "organization.costs.result",
              project_id: EXTERNAL,
              line_item: null,
              amount: { value: 1.23, currency: "usd" },
            },
          ],
        },
      ],
      next_page: null,
    });
    const atoms = parseCostsPageToAtoms(raw);
    expect(atoms).toHaveLength(1);
    expect(atoms[0]!.line_item).toBeNull();
    expect(atoms[0]!.currency).toBe("USD");
    expect(atoms[0]!.providerAmount).toBe("1.23000000");

    const facts = mapAtomsToBilledPeriodFacts({
      projectId: PROJECT,
      externalProjectId: EXTERNAL,
      periodStart: PERIOD,
      provider: "openai",
      atoms,
      sourceBatchId: "batch-map",
    });
    expect(facts[0]!.lineItem).toBeNull();

    expect(() =>
      mapAtomsToBilledPeriodFacts({
        projectId: PROJECT,
        externalProjectId: "other-project",
        periodStart: PERIOD,
        provider: "openai",
        atoms,
        sourceBatchId: "batch-map",
      }),
    ).toThrow(/external project mismatch/);
  });

  it("invalid provider money fails closed", () => {
    expect(() =>
      parseProviderMoneyString("not-a-number", "USD"),
    ).toThrow();
    expect(normalizeProviderCurrency("usd")).toBe("USD");
    expect(
      canonicalProviderAmountString("1.123456785", "USD"),
    ).toBe("1.12345678");
    expect(
      canonicalProviderAmountString("1.123456795", "USD"),
    ).toBe("1.12345680");
  });

  it("concurrent reconcileBilledPeriod with same atom yields one economic delta", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v1",
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: EXTERNAL,
          line_item: null,
          currency: "USD",
          providerAmount: "50.00000000",
        },
      ],
    });
    const input = {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch,
      facts: [billedFact("50.00000000", batch)],
    };
    const [a, b] = await Promise.all([
      reconcileBilledPeriod(deps, input),
      reconcileBilledPeriod(deps, input),
    ]);
    expect(a.outcome).toBe("succeeded");
    expect(b.outcome).toBe("succeeded");
    const created =
      (a.outcome === "succeeded" ? a.createdCount : 0) +
      (b.outcome === "succeeded" ? b.createdCount : 0);
    expect(created).toBe(1);
    const billedEvents = reconciliation._costEvents.filter(
      (e) => e.attributionScope === "PROJECT_PERIOD",
    );
    expect(billedEvents).toHaveLength(1);
    expect(billedEvents[0]!.amount).toBe("50.00000000");
    expect(billedEvents[0]!.executionRunId).toBeNull();
  });
});

```
### `pilot-migrate-safety.ts`

```
/**
 * Pilot target safety gate + additive migration only.
 * NO OpenAI calls. NO financial reconciliation. NO fake BILLED rows.
 */
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  assertExpectedTargetFingerprintMatch,
  deriveFinOpsT7TargetIdentity,
} from "../../projects/sfia-studio/app/lib/oa/finops/server/finOpsT7TargetIdentity.ts";

const require = createRequire(
  new URL("../../projects/sfia-studio/app/package.json", import.meta.url),
);
const { Pool } = require("pg") as typeof import("pg");

const PROJECT_ID = "sfia-studio-ops1";
const EXPECTED_FP =
  "7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331";
const APP_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../projects/sfia-studio/app",
);

async function snapshot(pool: InstanceType<typeof Pool>) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN READ ONLY");
    const rollout = await client.query(
      `SELECT mode, revision, updated_at FROM finops_rollout_config WHERE project_id=$1`,
      [PROJECT_ID],
    );
    const usage = await client.query(
      `SELECT COUNT(*)::int AS c FROM finops_usage_event WHERE project_id=$1`,
      [PROJECT_ID],
    );
    const cost = await client.query(
      `SELECT COUNT(*)::int AS c FROM finops_cost_event WHERE project_id=$1`,
      [PROJECT_ID],
    );
    const agg = await client.query(
      `SELECT COUNT(*)::int AS c FROM finops_usage_aggregate WHERE project_id=$1`,
      [PROJECT_ID],
    );
    const proj = await client.query(
      `SELECT COUNT(*)::int AS c FROM finops_enforcement_projection WHERE project_id=$1`,
      [PROJECT_ID],
    );
    const cols = await client.query(
      `SELECT column_name, is_nullable
       FROM information_schema.columns
       WHERE table_schema='public' AND table_name='finops_cost_event'
         AND column_name IN ('attribution_scope','execution_run_id','derived_source_reference')
       ORDER BY column_name`,
    );
    await client.query("COMMIT");
    const row = rollout.rows[0];
    return {
      ROLLOUT: {
        ROW_EXISTS: (rollout.rowCount ?? 0) > 0,
        MODE: row?.mode ?? null,
        REVISION: row ? Number(row.revision) : null,
        UPDATED_AT: row?.updated_at ?? null,
      },
      USAGE_EVENT_COUNT: usage.rows[0].c,
      COST_EVENT_COUNT: cost.rows[0].c,
      AGGREGATE_COUNT: agg.rows[0].c,
      PROJECTION_COUNT: proj.rows[0].c,
      COST_EVENT_COLUMNS: cols.rows,
    };
  } finally {
    client.release();
  }
}

async function main() {
  const url = process.env.DATABASE_URL_DIRECT?.trim() ?? "";
  if (!url) throw new Error("DATABASE_URL_DIRECT missing");
  const id = deriveFinOpsT7TargetIdentity(url);
  assertExpectedTargetFingerprintMatch(id.fingerprint, EXPECTED_FP);

  const pool = new Pool({ connectionString: url, max: 1 });
  try {
    const pre = await snapshot(pool);
    if (!pre.ROLLOUT.ROW_EXISTS || pre.ROLLOUT.MODE !== "SHADOW" || pre.ROLLOUT.REVISION !== 1) {
      console.log(
        JSON.stringify(
          { ok: false, stop: "T7 MODE DRIFT OR MISSING ROLLOUT", pre, FINGERPRINT: id.fingerprint },
          null,
          2,
        ),
      );
      process.exit(3);
    }

    const migrate = spawnSync("npm", ["run", "migrate:up"], {
      cwd: APP_DIR,
      env: { ...process.env, DATABASE_URL_DIRECT: url },
      encoding: "utf8",
    });
    if (migrate.status !== 0) {
      console.log(
        JSON.stringify(
          {
            ok: false,
            stop: "MIGRATION FAILED",
            status: migrate.status,
            stdout: (migrate.stdout || "").slice(-2000),
            stderr: (migrate.stderr || "").slice(-2000),
          },
          null,
          2,
        ),
      );
      process.exit(4);
    }

    const post = await snapshot(pool);
    const hasScope = post.COST_EVENT_COLUMNS.some(
      (c: { column_name: string }) => c.column_name === "attribution_scope",
    );
    const execNullable = post.COST_EVENT_COLUMNS.find(
      (c: { column_name: string }) => c.column_name === "execution_run_id",
    );
    console.log(
      JSON.stringify(
        {
          ok: true,
          FINGERPRINT: id.fingerprint,
          FINGERPRINT_MATCH: true,
          SAFE_IDENTITY: {
            hostname: id.hostname,
            port: id.port,
            database: id.database,
          },
          PRE: pre,
          POST: post,
          MIGRATION_APPLIED: hasScope,
          EXECUTION_RUN_ID_NULLABLE: execNullable?.is_nullable === "YES",
          COST_EVENTS_INSERTED_BY_THIS_HARNESS: 0,
          OPENAI_CALLS: 0,
          RECONCILIATIONS: 0,
          MIGRATE_STDOUT_TAIL: (migrate.stdout || "").slice(-1500),
        },
        null,
        2,
      ),
    );
  } finally {
    await pool.end().catch(() => undefined);
  }
}

main().catch((e) => {
  console.error(
    JSON.stringify({
      ok: false,
      message: String(e && e.message ? e.message : e),
    }),
  );
  process.exit(1);
});

```
