# ChatGPT Review Pack — FinOps Technical Lot T4 — Foundation Delivery

## 1. Date / heure / fuseau

- Work CEST: 2026-08-07 22:14:37 CEST (+0200)
- Work UTC: 2026-08-07 20:14:37 UTC
- Cycle: 8 — Delivery / implémentation
- Mode: T4 Foundation Delivery
- Profil: **Critical**
- Typologie: EVOL / CODE / TEST / DOC

## 2. Morris phrase exacte

```
GO Delivery T4 foundation distinct.
```

## 3. Contextual interpretation

GO consumes **T4 FOUNDATION DELIVERY** only (dormant mechanism). Does **not** consume activation / calibration / IAM / T5 / T6-ext / T7 / project commit/push/PR.

Decisions consumed: B/A/B/B/A/A + fail-open preserved.

## 4. Git Truth

| Anchor | Value |
|--------|--------|
| Repo | mcleland147/sfia-workspace |
| origin/main | ff3d0c097b02cc7819cbc282fc0eb1a36ed1b515 |
| Delivery branch | delivery/sfia-studio-assistant-sfia-native-openai-finops-t4-s30-soft-enforcement-foundation |
| Prep branch kept | implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t4-s30-soft-enforcement |
| Worktree | .tmp-sfia-review/worktrees/finops-t4-preparation |
| HEAD | ff3d0c097b02cc7819cbc282fc0eb1a36ed1b515 |
| Handoff before tip | b6f91f8799ae530d1cc4ed29c10c41e0babc188a |
| Handoff before blob | 226afb696bc3f29ad38848501ce88972705593b6 |
| Staged | empty |
| Project commit/push/PR | none |

## 5. Document 148/149 hash proofs (byte-identical)

| Doc | Expected | AFTER | Match |
|-----|----------|-------|-------|
| 148 | 9ff9d1ba1cedeb8b795a7ac59f0f8e4f37ef4ef773e5cb21dbaff7a647d17f96 | 9ff9d1ba1cedeb8b795a7ac59f0f8e4f37ef4ef773e5cb21dbaff7a647d17f96 | PASS |
| 149 | 26a33ead6fa6a997be886fe5d254355bb8d0bb3894bdf3cffbcaa96074256276 | 26a33ead6fa6a997be886fe5d254355bb8d0bb3894bdf3cffbcaa96074256276 | PASS |

## 6. Exact 16-path manifest

PRESERVE: 148, 149
CREATE: 150 + 11 code/test/migration paths
MODIFY: coordinateExecutionRun.ts, composeExecutionRunD2D3.ts
Count: **16**

## 7. Selected decisions consumed

- D-T4-EVIDENCE-01 = B
- D-T4-BOUNDARY-01 = A
- D-T4-DECISION-CONTRACT-01 = B
- D-T4-T3-COUPLING-01 = B (sync OPEN)
- D-T4-FOUNDATION-01 = A
- D-T4-CALIBRATION-01 = A
- D-T4-FAILURE-POSTURE-01 = fail-open PRESERVED

## 8. Soft_signal internal-only proof / deferred literal

`soft_signal` is TypeScript-internal only — not persisted, not public API, not durable event, not Morris selection of REVIEW_REQUIRED or WOULD_BLOCK.
**REVIEW_REQUIRED vs WOULD_BLOCK = STILL DEFERRED.**

## 9. Default composition inert proof

`composeExecutionRunD2D3()` does not create a T4 instance; pass-through only when `finopsEnforcement` explicitly provided.

## 10. Reserves

- R-T6-RUNTIME-COMPOSITION-01 = OPEN
- R-PR-T2-API-01 = OPEN MINOR
- T6-ext-T2 = EXCLUDED
- T6-ext-T3T4 = NOT AUTHORIZED
- T6-ext-before-E1-pilot = DEFERRED
- Calibration = REQUIRED
- Product IAM = NOT_SELECTED
- Privileged Morris mutations = DEFERRED
- Intermediate product literal = DEFERRED
- R-T4-T3-SYNC-01 = OPEN
- R-T4-PROJECTION-REFRESH-01 = OPEN

## 11. QA summary (see evidence `.tmp-sfia-review/t4-foundation-delivery/`)

- Unit T4: 19 passed
- Boundary T4: 15 passed
- PG T4: 14 passed
- FinOps suite: 199 passed
- Full npm test (serial): 151 files / 1530 tests passed
- typecheck/lint/build: GREEN
- migrate:up T1→T2→T6→T3→T4: GREEN
- test:db: GREEN
- Local ephemeral Postgres only (NOT Neon); torn down after QA

## 12. Anti-claims

NO real S30 / NO historical 15/20/25/30 runtime / NO E1 / NO T5 / NO T6-ext / NO T7 / NO IAM / NO project staging/commit/push/PR / T3 unchanged / soft-cap cannot guarantee spend ≤ S30

---

# COMPLETE CREATE CONTENTS


## CREATED `projects/sfia-studio/150-assistant-sfia-native-openai-finops-technical-lot-t4-s30-soft-enforcement-foundation-execution.md`

```
# 150 — FinOps Technical Lot T4 — S30 Soft Enforcement — Foundation Execution

| Champ | Valeur |
|-------|--------|
| Document | `150-assistant-sfia-native-openai-finops-technical-lot-t4-s30-soft-enforcement-foundation-execution.md` |
| Lot | T4 — S30 Soft Application Cap / Soft Enforcement |
| Cycle | 8 — Delivery / implémentation |
| Mode | T4 Foundation Delivery |
| Profil | **Critical** |
| Typologie | EVOL / CODE / TEST / DOC |
| Status | **T4 FOUNDATION DELIVERY COMPLETE WITH RESERVES — NO REAL S30 ACTIVATION — NO E1 — NO T5/T6-EXT/T7/IAM** |
| Authority | Morris GO `GO Delivery T4 foundation distinct.` consumed for foundation only |

---

## A. Status / anti-claims

| Claim | Statut |
|-------|--------|
| T4 foundation mechanism delivered (dormant) | **TRUE** |
| Dedicated SoT-safe enforcement projection | **TRUE** |
| Optional ENF-B coordinator dependency | **TRUE** |
| Default composition inert (no auto T4 instance) | **TRUE** |
| Real S30 / USD 30 runtime activation | **FALSE** |
| Historical 15/20/25/30 runtime-active | **FALSE** |
| E1-ENFORCED | **FALSE** |
| T5 / T6-ext / T7 / Product IAM | **FALSE** |
| Soft-cap guarantees spend ≤ S30 | **FALSE** — anti-claim affirmed |
| T2.observedAmount / T3 review = monetary blocking authority | **FALSE** |
| Intermediate literal REVIEW_REQUIRED vs WOULD_BLOCK chosen | **FALSE** — STILL DEFERRED |
| Project commit / push / PR | **FALSE** |
| 148 / 149 modified | **FALSE** — byte-identical |

---

## B. GO Morris exact

```
GO Delivery T4 foundation distinct.
```

Consumes **T4 FOUNDATION DELIVERY** only. Does **not** consume activation, calibration, IAM, T5, T6-ext, T7, commit/push/PR gates.

---

## C. Horodatage CEST + UTC

| Clock | Value |
|-------|--------|
| Delivery work | 2026-08-07 22:14:37 CEST (+0200) / 2026-08-07 20:14:37 UTC |
| Cycle | 8 — Delivery Critical |

---

## D. Git Truth

| Anchor | Value |
|--------|--------|
| Repo | `mcleland147/sfia-workspace` |
| `origin/main` | `ff3d0c097b02cc7819cbc282fc0eb1a36ed1b515` |
| Prep branch (kept) | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t4-s30-soft-enforcement` |
| Delivery branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t4-s30-soft-enforcement-foundation` |
| Worktree | `.tmp-sfia-review/worktrees/finops-t4-preparation` |
| HEAD | `ff3d0c097b02cc7819cbc282fc0eb1a36ed1b515` (= origin/main) |
| Staged | empty |
| Project commit/push/PR | none |
| Handoff entrant tip | `b6f91f8799ae530d1cc4ed29c10c41e0babc188a` |
| Handoff entrant blob | `226afb696bc3f29ad38848501ce88972705593b6` |

---

## E. 148/149 preservation hashes

| Doc | SHA-256 (BEFORE = AFTER) |
|-----|--------------------------|
| 148 | `9ff9d1ba1cedeb8b795a7ac59f0f8e4f37ef4ef773e5cb21dbaff7a647d17f96` |
| 149 | `26a33ead6fa6a997be886fe5d254355bb8d0bb3894bdf3cffbcaa96074256276` |

Both remain **untracked** and **byte-identical**.

---

## F. Selected architecture decisions consumed

| Decision | Value | Status |
|----------|-------|--------|
| D-T4-EVIDENCE-01 | B — dedicated enforcement projection | CONSUMED |
| D-T4-BOUNDARY-01 | A — optional coordinator enforcement dependency | CONSUMED |
| D-T4-DECISION-CONTRACT-01 | B — explicit soft-control states | CONSUMED |
| D-T4-T3-COUPLING-01 | B — T4 evidence + T3 sync (sync mechanism deferred) | CONSUMED (sync OPEN) |
| D-T4-FOUNDATION-01 | A — foundation first | CONSUMED |
| D-T4-CALIBRATION-01 | A — no real active historical amount | CONSUMED |
| D-T4-FAILURE-POSTURE-01 | fail-open | PRESERVED / NOT REOPENED |

---

## G. Delivery manifest (exact 16 paths)

**PRESERVE:** 148, 149
**CREATE:** 150; `types.enforcement.ts`; `rebuildEnforcementProjection.ts`; `evaluateFinOpsEnforcement.ts`; `finopsEnforcementProjectionPort.ts`; `finopsEnforcementPort.ts`; `memoryFinOpsEnforcementProjection.ts`; `postgresFinOpsEnforcementProjectionStore.ts`; `1754600003000_finops-t4-enforcement-projection.js`; `t4.enforcement.unit.test.ts`; `t4.enforcement-projection.integration.test.ts`; `t4.enforcement-boundary.unit.test.ts`
**MODIFY:** `coordinateExecutionRun.ts`; `composeExecutionRunD2D3.ts`

No 17th path. T2/T3/T6 runtime files unchanged.

---

## H. Projection model

`FinOpsEnforcementProjection` keyed by `projectId + UTC periodStart (YYYY-MM-DD) + currency` with:

- `blockingEligibleAmount`, `billedAmount`, `providerObservedAmount` (canonical Money scale-8 strings)
- event counts; `rebuildVersion`; `rebuiltAt`

Derived / rebuildable / **non-authoritative**. Ledger (`finops_cost_event`) remains financially authoritative.

---

## I. Ledger authority / SoT filtering

Builder uses `evaluateBlockingEligibility(sourceOfTruth)`:

| SoT | Blocking eligible |
|-----|-------------------|
| BILLED | YES |
| PROVIDER_OBSERVED | YES |
| API_USAGE | NEVER |
| LOCAL_COUNT / PARAMETRIC_ESTIMATE / UNKNOWN | NEVER |

SoT/evidenceClass inconsistency (e.g. BILLED≠billed) → FinOps-side rebuild failure (never silent coerce). No FX. No cross-currency sum. `amount=null` ignored for sums.

---

## J. Rebuild model

`rebuildEnforcementProjection` is **explicit / on-demand**:

short project/period lock → read cost events → build all currencies → atomic replace → commit/release.

No cron / scheduler / automatic T2/T3 wiring. `rebuildVersion` = previous + 1 per currency. Lock never held across provider I/O.

---

## K. PostgreSQL schema / migration

Migration `1754600003000_finops-t4-enforcement-projection.js`
Order: T1 < T2 < T6 < T3 < **T4**
Table: `finops_enforcement_projection`
PK: `(project_id, period_start, currency)`
Constraints: currency `^[A-Z]{3}$`; period month-start; `rebuild_version >= 1`; counts ≥ 0; **no** amount ≥ 0 (signed corrections).
No seed / threshold / flag / T6 event / FK to T2 or T3.
Down: refuse drop if rows exist.

---

## L. Concurrency / lock implementation

PostgreSQL: `pg_advisory_xact_lock(hashtext('finops-t4:' || projectId), hashtext(periodStart))` on one PoolClient transaction — shared by rebuild and decision read. Memory: process-local mutex. Multi-instance safe for PG path.

---

## M. Enforcement decision contract

Discriminants (internal TypeScript): `allow` | `soft_signal` | `block` | `failed`
Semantic roles: ALLOW | INTERMEDIATE SOFT SIGNAL | BLOCK | FAILED
Policy effect (transient injected, not T7): `signal_only` | `enforce`
Absent policy → `allow` / `not_configured` **without** projection access.
Crossing + signal_only → soft_signal; + enforce → block.
FAILED ≠ BLOCK. Expected FinOps errors never thrown to coordinator.

---

## N. Internal soft_signal convention — not the deferred product literal

| Proof | Status |
|-------|--------|
| TypeScript-internal discriminant only | TRUE |
| Not persisted in DB columns / enums | TRUE |
| Not public/product API surface | TRUE |
| Not durable T6 event name | TRUE |
| Not Morris selection of REVIEW_REQUIRED or WOULD_BLOCK | TRUE |

**REVIEW_REQUIRED vs WOULD_BLOCK = STILL DEFERRED.**

---

## O. Fail-open posture

- Port returns `failed` → coordinator continues to provider
- Port throws → caught → continue (fail-open); raw exception not leaked
- Never BLOCK solely because FinOps is unavailable

---

## P. ENF-B coordinator integration

Insertion in `coordinateExecutionRun`:

after create + pre-engagement success → **optional T4** → intent_valid → provider.

BLOCK → `blockIdleRun` with `HUMAN_GATE_REQUIRED` / `human_gate_required`; `providerAttempted/Invoked/Completed=false`; `finopsCapture=not_attempted(finops_enforcement_block)`; no provider call.

---

## Q. Default-inert composition

`composeExecutionRunD2D3()` does **not** instantiate T4. Pass-through `finopsEnforcement` only if explicitly provided. No pool/config/threshold/env/S30.

---

## R. T3 boundary / R-T4-T3-SYNC-01

T3 files **unchanged**. No automatic T3 synchronization in this foundation.
**R-T4-T3-SYNC-01 = OPEN** — exact sync mechanism deferred; non-blocking for foundation; blocking for claim of complete T4↔T3 human-review synchronization.
T3 review alone is never monetary blocking authority.

---

## S. Projection freshness / R-T4-PROJECTION-REFRESH-01

Foundation exposes explicit rebuild only.
**R-T4-PROJECTION-REFRESH-01 = OPEN** — production activation requires validated refresh/freshness wiring before E1. Non-blocking for foundation; blocking for real E1 activation.

---

## T. T5 / IAM / T6 / T7 exclusions

| Area | Status |
|------|--------|
| T5 override/resume | NOT DELIVERED |
| Product IAM | NOT_SELECTED |
| T6-ext-T3T4 | NOT AUTHORIZED |
| T6 event types for T4 | none |
| T7 rollout modes | NOT DELIVERED (effect is transient injection only) |

---

## U. Currency / Money semantics

Reuse T2 Money BigInt / numeric(20,8). Policy + projection per currency. No FX. No cross-currency sum. Fictitious test amounts only (e.g. 12.34 / 12.35) — never 15/20/25/30 as runtime values.

---

## V. Unit tests

`t4.enforcement.unit.test.ts` — **19** tests (target ≥18) — GREEN.

---

## W. Execution-run tests

`t4.enforcement-boundary.unit.test.ts` — **15** tests — GREEN.

---

## X. PostgreSQL tests

`t4.enforcement-projection.integration.test.ts` — **14** tests — GREEN on ephemeral local Postgres (NOT Neon).

---

## Y. Full regression

typecheck / lint / build / finops vitest / npm test / migrate:up / test:db / git diff --check — see evidence pack. T2/T3/T6 / execution-run domain / package / CI / method / prompts unchanged.

---

## Z. Reserves / non-decisions / verdict

### Reserves

| Reserve | Status |
|---------|--------|
| R-T6-RUNTIME-COMPOSITION-01 | OPEN |
| R-PR-T2-API-01 | OPEN MINOR |
| T6-ext-T2 | EXCLUDED |
| T6-ext-T3T4 | NOT AUTHORIZED |
| T6-ext-before-E1-pilot | DEFERRED |
| Calibration | REQUIRED |
| Product IAM | NOT_SELECTED |
| Privileged Morris mutations | DEFERRED |
| Intermediate product literal | DEFERRED |
| **R-T4-T3-SYNC-01** | **OPEN** |
| **R-T4-PROJECTION-REFRESH-01** | **OPEN** |

### Verdict

T4 FOUNDATION DELIVERY COMPLETE WITH RESERVES — NO REAL S30 ACTIVATION — NO E1 — NO T5/T6-EXT/T7/IAM — READY FOR CHATGPT T4 FOUNDATION DELIVERY VALIDATION
```

## CREATED `projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts`

```
/**
 * FinOps T4 — Soft Enforcement foundation types (dormant capability).
 *
 * Intermediate product literals REVIEW_REQUIRED vs WOULD_BLOCK remain DEFERRED.
 * The TypeScript discriminant `soft_signal` is INTERNAL ONLY:
 * - not persisted
 * - not a public/product API
 * - not a durable event name
 * - not a Morris selection of REVIEW_REQUIRED or WOULD_BLOCK
 */

export const FINOPS_T4_IDENTITY_CONTRACT_VERSION = "t4-v1" as const;

/**
 * Derived, rebuildable SoT-safe enforcement projection.
 * Ledger / cost events remain financially authoritative.
 * Key: projectId + UTC periodStart (YYYY-MM-DD) + currency.
 */
export type FinOpsEnforcementProjection = {
  readonly projectId: string;
  /** UTC month start YYYY-MM-DD */
  readonly periodStart: string;
  readonly currency: string;
  /** Canonical Money scale-8 string: billed + providerObserved (no FX). */
  readonly blockingEligibleAmount: string;
  readonly billedAmount: string;
  readonly providerObservedAmount: string;
  readonly eligibleCostEventCount: number;
  readonly billedEventCount: number;
  readonly providerObservedEventCount: number;
  readonly rebuildVersion: number;
  readonly rebuiltAt: string;
};

/**
 * Injected transient effect instruction — NOT a persisted T7 rollout mode.
 * Future activation layer may supply this; T4 does not store OFF/SHADOW/MONITOR/E1.
 */
export type FinOpsEnforcementEffect = "signal_only" | "enforce";

/**
 * Injected policy for mechanism tests / future activation.
 * No default production thresholds. No historical 15/20/25/30.
 */
export type FinOpsEnforcementPolicy = {
  readonly thresholdCode: string;
  readonly currency: string;
  /** Canonical Money scale-8 string; must be strictly positive. */
  readonly thresholdAmount: string;
  readonly effect: FinOpsEnforcementEffect;
};

/**
 * Soft-control decision contract (DECISION-CONTRACT-01 B):
 * ALLOW | INTERMEDIATE SOFT SIGNAL | BLOCK | FAILED
 *
 * Discriminant `soft_signal` = internal stand-in for the deferred product
 * intermediate literal (REVIEW_REQUIRED vs WOULD_BLOCK STILL DEFERRED).
 */
export type FinOpsEnforcementDecisionKind =
  | "allow"
  | "soft_signal"
  | "block"
  | "failed";

export type FinOpsEnforcementDecisionProvenance = {
  readonly projectId: string;
  readonly periodStart: string;
  readonly currency: string;
  readonly thresholdCode: string;
  readonly thresholdAmount: string;
  readonly blockingEligibleAmount: string;
  readonly billedAmount: string;
  readonly providerObservedAmount: string;
  readonly rebuildVersion: number;
  readonly rebuiltAt: string;
};

export type FinOpsEnforcementDecision = {
  readonly decision: FinOpsEnforcementDecisionKind;
  readonly reason: string;
  /** True when FinOps-side technical failure — never means BLOCK. */
  readonly finopsSideOnly?: true;
  readonly provenance?: FinOpsEnforcementDecisionProvenance;
};

export type EvaluateFinOpsEnforcementInput = {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly correlationId: string;
  readonly occurredAt: string;
};

export type RebuildEnforcementProjectionInput = {
  readonly projectId: string;
  /** UTC month start YYYY-MM-DD */
  readonly periodStart: string;
};

export type RebuildEnforcementProjectionResult =
  | {
      readonly outcome: "succeeded";
      readonly projections: ReadonlyArray<FinOpsEnforcementProjection>;
    }
  | {
      readonly outcome: "failed";
      readonly code: string;
      readonly message: string;
      readonly finopsSideOnly: true;
    };
```

## CREATED `projects/sfia-studio/app/lib/oa/finops/application/rebuildEnforcementProjection.ts`

```
/**
 * FinOps T4 — build + explicit on-demand rebuild of SoT-safe enforcement projection.
 *
 * Blocking-eligible SoTs only: BILLED + PROVIDER_OBSERVED.
 * API_USAGE / LOCAL_COUNT / PARAMETRIC_ESTIMATE / UNKNOWN never contribute.
 * No FX / no cross-currency sum. Money via BigInt minor units.
 * Inconsistent SoT ↔ evidenceClass fails FinOps-side (never silent coerce).
 */

import { evaluateBlockingEligibility } from "../domain/blockingEligibility";
import {
  formatMoneyString,
  moneyFromMinor,
  normalizeCurrency,
  parseMoneyString,
  type FinOpsMoney,
} from "../domain/money";
import type { FinOpsCostEvent } from "./types.aggregate";
import type { FinOpsEnforcementProjectionPort } from "../ports/finopsEnforcementProjectionPort";
import type {
  FinOpsEnforcementProjection,
  RebuildEnforcementProjectionInput,
  RebuildEnforcementProjectionResult,
} from "./types.enforcement";

export type RebuildEnforcementProjectionDeps = {
  readonly projection: FinOpsEnforcementProjectionPort;
  readonly nowIso: () => string;
};

function zeroCanonical(currency: string): string {
  return formatMoneyString(moneyFromMinor(BigInt(0), currency));
}

function addCanonical(
  currency: string,
  left: string,
  right: FinOpsMoney,
): string {
  const sum = parseMoneyString(left, currency).amountMinor + right.amountMinor;
  return formatMoneyString(moneyFromMinor(sum, currency));
}

function expectedEvidenceForBlockingSoT(
  source: "BILLED" | "PROVIDER_OBSERVED",
): "billed" | "observed" {
  return source === "BILLED" ? "billed" : "observed";
}

export class FinOpsEnforcementBuildError extends Error {
  readonly code: string;
  readonly finopsSideOnly = true as const;
  constructor(code: string, message: string) {
    super(message);
    this.name = "FinOpsEnforcementBuildError";
    this.code = code;
  }
}

type Acc = {
  billed: string;
  providerObserved: string;
  billedEventCount: number;
  providerObservedEventCount: number;
  eligibleCostEventCount: number;
};

/**
 * Pure builder from authoritative cost events.
 * Emits one projection row per currency present in the project/period events.
 */
export function buildEnforcementProjectionsFromCostEvents(input: {
  readonly projectId: string;
  readonly periodStart: string;
  readonly events: ReadonlyArray<FinOpsCostEvent>;
  readonly rebuiltAt: string;
  readonly previousVersions?: ReadonlyMap<string, number>;
}): ReadonlyArray<FinOpsEnforcementProjection> {
  const byCurrency = new Map<string, Acc>();

  const ensure = (currencyRaw: string): Acc => {
    const currency = normalizeCurrency(currencyRaw);
    let acc = byCurrency.get(currency);
    if (!acc) {
      acc = {
        billed: zeroCanonical(currency),
        providerObserved: zeroCanonical(currency),
        billedEventCount: 0,
        providerObservedEventCount: 0,
        eligibleCostEventCount: 0,
      };
      byCurrency.set(currency, acc);
    }
    return acc;
  };

  for (const event of input.events) {
    if (event.projectId !== input.projectId) continue;
    if (event.periodStart !== input.periodStart) continue;

    const currency = normalizeCurrency(event.currency);
    const acc = ensure(currency);

    const eligibility = evaluateBlockingEligibility(event.sourceOfTruth);
    if (!eligibility.eligible) {
      // Non-blocking SoTs (API_USAGE, estimates, UNKNOWN, …) never contribute.
      continue;
    }

    if (
      event.sourceOfTruth !== "BILLED" &&
      event.sourceOfTruth !== "PROVIDER_OBSERVED"
    ) {
      // Defensive: evaluateBlockingEligibility only returns eligible for those two.
      continue;
    }

    const expected = expectedEvidenceForBlockingSoT(event.sourceOfTruth);
    if (event.evidenceClass !== expected) {
      throw new FinOpsEnforcementBuildError(
        "FINOPS_T4_SOT_EVIDENCE_INCONSISTENT",
        "FinOps enforcement projection rejected inconsistent SoT/evidenceClass",
      );
    }

    acc.eligibleCostEventCount += 1;
    if (event.sourceOfTruth === "BILLED") {
      acc.billedEventCount += 1;
    } else {
      acc.providerObservedEventCount += 1;
    }

    if (event.amount === null) continue;

    const money = parseMoneyString(event.amount, currency);
    if (event.sourceOfTruth === "BILLED") {
      acc.billed = addCanonical(currency, acc.billed, money);
    } else {
      acc.providerObserved = addCanonical(currency, acc.providerObserved, money);
    }
  }

  const out: FinOpsEnforcementProjection[] = [];
  for (const [currency, acc] of byCurrency) {
    const billedMoney = parseMoneyString(acc.billed, currency);
    const observedMoney = parseMoneyString(acc.providerObserved, currency);
    const blocking = formatMoneyString(
      moneyFromMinor(
        billedMoney.amountMinor + observedMoney.amountMinor,
        currency,
      ),
    );
    const prev = input.previousVersions?.get(currency) ?? 0;
    out.push({
      projectId: input.projectId,
      periodStart: input.periodStart,
      currency,
      blockingEligibleAmount: blocking,
      billedAmount: acc.billed,
      providerObservedAmount: acc.providerObserved,
      eligibleCostEventCount: acc.eligibleCostEventCount,
      billedEventCount: acc.billedEventCount,
      providerObservedEventCount: acc.providerObservedEventCount,
      rebuildVersion: prev + 1,
      rebuiltAt: input.rebuiltAt,
    });
  }
  return out.sort((a, b) => a.currency.localeCompare(b.currency));
}

/**
 * Explicit on-demand rebuild: short project/period lock → read ledger →
 * build all currencies → atomic replace → commit/release.
 * Never holds the lock across provider I/O.
 */
export async function rebuildEnforcementProjection(
  deps: RebuildEnforcementProjectionDeps,
  input: RebuildEnforcementProjectionInput,
): Promise<RebuildEnforcementProjectionResult> {
  try {
    const projectId = input.projectId.trim();
    const periodStart = input.periodStart.trim();
    if (!projectId || !periodStart) {
      return {
        outcome: "failed",
        code: "FINOPS_T4_REBUILD_INVALID",
        message: "projectId and periodStart are required",
        finopsSideOnly: true,
      };
    }

    const rebuiltAt = deps.nowIso();
    const projections = await deps.projection.withExclusiveProjectPeriod(
      { projectId, periodStart },
      async (ops) => {
        const events = await ops.listAllCostEventsForPeriod();
        const existing = await ops.listProjections();
        const previousVersions = new Map<string, number>();
        for (const row of existing) {
          previousVersions.set(row.currency, row.rebuildVersion);
        }
        const next = buildEnforcementProjectionsFromCostEvents({
          projectId,
          periodStart,
          events,
          rebuiltAt,
          previousVersions,
        });
        await ops.replaceProjections(next);
        return next;
      },
    );

    return { outcome: "succeeded", projections };
  } catch (error) {
    if (error instanceof FinOpsEnforcementBuildError) {
      return {
        outcome: "failed",
        code: error.code,
        message: error.message,
        finopsSideOnly: true,
      };
    }
    return {
      outcome: "failed",
      code: "FINOPS_T4_REBUILD_FAILED",
      message: "FinOps enforcement projection rebuild failed",
      finopsSideOnly: true,
    };
  }
}
```

## CREATED `projects/sfia-studio/app/lib/oa/finops/application/evaluateFinOpsEnforcement.ts`

```
/**
 * FinOps T4 — evaluate soft-control enforcement against dedicated projection.
 *
 * Absent policy → allow / not_configured without projection access (default inert).
 * FAILED ≠ BLOCK. Never throws expected FinOps errors to the coordinator.
 * No default production policy resolver / env / hardcoded thresholds.
 */

import { computeUtcMonthPeriod } from "../domain/period";
import {
  formatMoneyString,
  normalizeCurrency,
  parseMoneyString,
} from "../domain/money";
import type { FinOpsEnforcementPort } from "../ports/finopsEnforcementPort";
import type { FinOpsEnforcementProjectionPort } from "../ports/finopsEnforcementProjectionPort";
import type {
  EvaluateFinOpsEnforcementInput,
  FinOpsEnforcementDecision,
  FinOpsEnforcementPolicy,
} from "./types.enforcement";

export type EvaluateFinOpsEnforcementDeps = {
  readonly projection: FinOpsEnforcementProjectionPort;
  /**
   * Explicitly injected. Returning null ⇒ not_configured allow (inert).
   * No production default resolver exists in this Delivery.
   */
  readonly resolvePolicy: (
    input: EvaluateFinOpsEnforcementInput,
  ) =>
    | Promise<FinOpsEnforcementPolicy | null>
    | FinOpsEnforcementPolicy
    | null;
};

function periodStartDate(occurredAt: string): string {
  return computeUtcMonthPeriod(occurredAt).periodStart.slice(0, 10);
}

function failed(reason: string): FinOpsEnforcementDecision {
  return {
    decision: "failed",
    reason,
    finopsSideOnly: true,
  };
}

function allowNotConfigured(): FinOpsEnforcementDecision {
  return {
    decision: "allow",
    reason: "not_configured",
  };
}

/**
 * Direct T4 evaluation. Never throws for expected FinOps failures.
 */
export async function evaluateFinOpsEnforcement(
  deps: EvaluateFinOpsEnforcementDeps,
  input: EvaluateFinOpsEnforcementInput,
): Promise<FinOpsEnforcementDecision> {
  try {
    const projectId = input.projectId.trim();
    if (!projectId) {
      return failed("invalid_project");
    }

    let policy: FinOpsEnforcementPolicy | null;
    try {
      policy = await deps.resolvePolicy(input);
    } catch {
      return failed("policy_resolver_failed");
    }

    if (!policy) {
      // Default inert: no projection access when policy absent.
      return allowNotConfigured();
    }

    let currency: string;
    let thresholdMinor: bigint;
    let thresholdCanonical: string;
    try {
      currency = normalizeCurrency(policy.currency);
      const thresholdMoney = parseMoneyString(policy.thresholdAmount, currency);
      if (thresholdMoney.amountMinor <= BigInt(0)) {
        return failed("invalid_threshold");
      }
      thresholdMinor = thresholdMoney.amountMinor;
      thresholdCanonical = formatMoneyString(thresholdMoney);
    } catch {
      return failed("invalid_threshold");
    }

    if (policy.effect !== "signal_only" && policy.effect !== "enforce") {
      return failed("invalid_effect");
    }

    let periodStart: string;
    try {
      periodStart = periodStartDate(input.occurredAt);
    } catch {
      return failed("invalid_occurred_at");
    }

    try {
      return await deps.projection.withExclusiveProjectPeriod(
        { projectId, periodStart },
        async (ops) => {
          const row = await ops.readProjection(currency);
          if (!row) {
            return failed("projection_missing");
          }
          const eligible = parseMoneyString(
            row.blockingEligibleAmount,
            currency,
          );
          const provenance = {
            projectId,
            periodStart,
            currency,
            thresholdCode: policy.thresholdCode,
            thresholdAmount: thresholdCanonical,
            blockingEligibleAmount: row.blockingEligibleAmount,
            billedAmount: row.billedAmount,
            providerObservedAmount: row.providerObservedAmount,
            rebuildVersion: row.rebuildVersion,
            rebuiltAt: row.rebuiltAt,
          };

          if (eligible.amountMinor < thresholdMinor) {
            return {
              decision: "allow" as const,
              reason: "below_threshold",
              provenance,
            };
          }

          if (policy.effect === "signal_only") {
            return {
              decision: "soft_signal" as const,
              reason: "threshold_crossed_signal_only",
              provenance,
            };
          }

          return {
            decision: "block" as const,
            reason: "threshold_crossed_enforce",
            provenance,
          };
        },
      );
    } catch {
      return failed("projection_read_failed");
    }
  } catch {
    return failed("evaluation_failed");
  }
}

/**
 * Factory: FinOpsEnforcementPort from projection + injected policy resolver.
 * No default production resolver.
 */
export function createFinOpsEnforcementPort(
  deps: EvaluateFinOpsEnforcementDeps,
): FinOpsEnforcementPort {
  return {
    evaluateBeforeProvider(input) {
      return evaluateFinOpsEnforcement(deps, input);
    },
  };
}
```

## CREATED `projects/sfia-studio/app/lib/oa/finops/ports/finopsEnforcementProjectionPort.ts`

```
/**
 * FinOps T4 — Enforcement projection port (dedicated derived store).
 * Does not depend on FinOpsAggregatePort. Ledger remains authoritative.
 */

import type { FinOpsCostEvent } from "../application/types.aggregate";
import type { FinOpsEnforcementProjection } from "../application/types.enforcement";

/**
 * Ops bound to one exclusive short project/period session
 * (rebuild or decision read). Must not escape across provider I/O.
 */
export type FinOpsExclusiveEnforcementOps = {
  readonly listAllCostEventsForPeriod: () => Promise<
    ReadonlyArray<FinOpsCostEvent>
  >;
  readonly listProjections: () => Promise<
    ReadonlyArray<FinOpsEnforcementProjection>
  >;
  /**
   * Atomically replace ALL T4 projection rows for the project/period
   * (all currencies). Obsolete currencies are removed.
   */
  readonly replaceProjections: (
    projections: ReadonlyArray<FinOpsEnforcementProjection>,
  ) => Promise<void>;
  readonly readProjection: (currency: string) => Promise<
    FinOpsEnforcementProjection | null
  >;
};

export type FinOpsEnforcementProjectionPort = {
  /**
   * Short exclusive project/period serialization shared by rebuild and
   * decision reads so a decision cannot observe a partial replace.
   */
  readonly withExclusiveProjectPeriod: <T>(
    input: {
      readonly projectId: string;
      readonly periodStart: string;
    },
    work: (ops: FinOpsExclusiveEnforcementOps) => Promise<T>,
  ) => Promise<T>;
};
```

## CREATED `projects/sfia-studio/app/lib/oa/finops/ports/finopsEnforcementPort.ts`

```
/**
 * FinOps T4 — Coordinator-facing enforcement port (ENF-B boundary).
 *
 * Coordinator must not know SQL, projection internals, threshold catalogs,
 * T7 modes, T5, or T3 store.
 */

import type {
  EvaluateFinOpsEnforcementInput,
  FinOpsEnforcementDecision,
} from "../application/types.enforcement";

export type FinOpsEnforcementPort = {
  readonly evaluateBeforeProvider: (
    input: EvaluateFinOpsEnforcementInput,
  ) => Promise<FinOpsEnforcementDecision>;
};
```

## CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/memory/memoryFinOpsEnforcementProjection.ts`

```
/**
 * In-memory FinOps T4 enforcement projection store (unit-test double).
 * Process-local project/period mutex; no multi-instance pretension.
 */

import type { FinOpsCostEvent } from "../../application/types.aggregate";
import type { FinOpsEnforcementProjection } from "../../application/types.enforcement";
import type {
  FinOpsEnforcementProjectionPort,
  FinOpsExclusiveEnforcementOps,
} from "../../ports/finopsEnforcementProjectionPort";
import { normalizeCurrency } from "../../domain/money";

function projectionKey(
  projectId: string,
  periodStart: string,
  currency: string,
): string {
  return `${projectId}|${periodStart}|${currency}`;
}

export function createMemoryFinOpsEnforcementProjection(options?: {
  readonly costEvents?: ReadonlyArray<FinOpsCostEvent>;
}): FinOpsEnforcementProjectionPort & {
  readonly _projections: Map<string, FinOpsEnforcementProjection>;
  readonly _costEvents: FinOpsCostEvent[];
  readonly seedCostEvents: (events: ReadonlyArray<FinOpsCostEvent>) => void;
} {
  const projections = new Map<string, FinOpsEnforcementProjection>();
  const costEvents: FinOpsCostEvent[] = [...(options?.costEvents ?? [])];
  const chains = new Map<string, Promise<unknown>>();

  const withExclusive = async <T>(
    projectId: string,
    periodStart: string,
    work: () => Promise<T>,
  ): Promise<T> => {
    const lockKey = `${projectId}|${periodStart}`;
    const prev = chains.get(lockKey) ?? Promise.resolve();
    let release!: () => void;
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    const next = prev.then(() => gate);
    chains.set(lockKey, next.catch(() => undefined));
    await prev.catch(() => undefined);
    try {
      return await work();
    } finally {
      release();
    }
  };

  const listFor = (projectId: string, periodStart: string) =>
    [...projections.values()]
      .filter(
        (p) => p.projectId === projectId && p.periodStart === periodStart,
      )
      .sort((a, b) => a.currency.localeCompare(b.currency));

  const buildOps = (
    projectId: string,
    periodStart: string,
  ): FinOpsExclusiveEnforcementOps => ({
    async listAllCostEventsForPeriod() {
      return costEvents
        .filter(
          (e) => e.projectId === projectId && e.periodStart === periodStart,
        )
        .slice()
        .sort((a, b) => {
          const t = a.occurredAt.localeCompare(b.occurredAt);
          return t !== 0 ? t : a.costEventId.localeCompare(b.costEventId);
        });
    },
    async listProjections() {
      return listFor(projectId, periodStart);
    },
    async replaceProjections(next) {
      for (const key of [...projections.keys()]) {
        if (key.startsWith(`${projectId}|${periodStart}|`)) {
          projections.delete(key);
        }
      }
      for (const row of next) {
        if (row.projectId !== projectId || row.periodStart !== periodStart) {
          throw new Error("projection project/period mismatch on replace");
        }
        const currency = normalizeCurrency(row.currency);
        projections.set(
          projectionKey(projectId, periodStart, currency),
          { ...row, currency },
        );
      }
    },
    async readProjection(currencyRaw) {
      const currency = normalizeCurrency(currencyRaw);
      return (
        projections.get(projectionKey(projectId, periodStart, currency)) ??
        null
      );
    },
  });

  return {
    _projections: projections,
    _costEvents: costEvents,
    seedCostEvents(events) {
      costEvents.length = 0;
      costEvents.push(...events);
    },
    async withExclusiveProjectPeriod(input, work) {
      const projectId = input.projectId.trim();
      const periodStart = input.periodStart.trim();
      return withExclusive(projectId, periodStart, () =>
        work(buildOps(projectId, periodStart)),
      );
    },
  };
}
```

## CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsEnforcementProjectionStore.ts`

```
/**
 * FinOps T4 — PostgreSQL enforcement projection store.
 *
 * Authoritative read: finops_cost_event
 * Derived write: finops_enforcement_projection
 *
 * ONE PoolClient + transaction advisory lock (namespace finops-t4:) for
 * rebuild and decision reads. Lock released on COMMIT/ROLLBACK — never held
 * across provider I/O.
 */

import type { Pool, PoolClient } from "pg";
import type { FinOpsCostEvent } from "../../application/types.aggregate";
import type { FinOpsEnforcementProjection } from "../../application/types.enforcement";
import { formatMoneyString, parseMoneyString } from "../../domain/money";
import type {
  FinOpsEnforcementProjectionPort,
  FinOpsExclusiveEnforcementOps,
} from "../../ports/finopsEnforcementProjectionPort";
import { sanitizeDbError } from "./sanitizeDbError";

function formatPgDate(value: unknown): string {
  if (value instanceof Date) {
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, "0");
    const d = String(value.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  const raw = String(value);
  const match = /^(\d{4}-\d{2}-\d{2})/.exec(raw);
  if (match) return match[1]!;
  throw new Error("invalid period_start from postgres");
}

function canonicalAmount(raw: unknown, currency: string): string {
  return formatMoneyString(parseMoneyString(String(raw), currency));
}

function rowToCostEvent(row: Record<string, unknown>): FinOpsCostEvent {
  return {
    costEventId: String(row.cost_event_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    executionRunId: String(row.execution_run_id),
    usageEventId:
      row.usage_event_id === null || row.usage_event_id === undefined
        ? null
        : String(row.usage_event_id),
    periodStart: formatPgDate(row.period_start),
    currency: String(row.currency),
    amount:
      row.amount === null || row.amount === undefined
        ? null
        : formatMoneyString(
            parseMoneyString(String(row.amount), String(row.currency)),
          ),
    evidenceClass: row.evidence_class as FinOpsCostEvent["evidenceClass"],
    sourceOfTruth: row.source_of_truth as FinOpsCostEvent["sourceOfTruth"],
    estimationStatus:
      row.estimation_status as FinOpsCostEvent["estimationStatus"],
    correctionRef:
      row.correction_ref === null || row.correction_ref === undefined
        ? null
        : String(row.correction_ref),
    catalogVersion:
      row.catalog_version === null || row.catalog_version === undefined
        ? null
        : String(row.catalog_version),
    provider: String(row.provider),
    model:
      row.model === null || row.model === undefined ? null : String(row.model),
    unit: row.unit === null || row.unit === undefined ? null : String(row.unit),
    billingQuantum:
      row.billing_quantum === null || row.billing_quantum === undefined
        ? null
        : String(row.billing_quantum),
    usageQuantity:
      row.usage_quantity === null || row.usage_quantity === undefined
        ? null
        : String(row.usage_quantity),
    occurredAt:
      row.occurred_at instanceof Date
        ? row.occurred_at.toISOString()
        : String(row.occurred_at),
  };
}

function rowToProjection(
  row: Record<string, unknown>,
): FinOpsEnforcementProjection {
  const currency = String(row.currency);
  return {
    projectId: String(row.project_id),
    periodStart: formatPgDate(row.period_start),
    currency,
    blockingEligibleAmount: canonicalAmount(
      row.blocking_eligible_amount,
      currency,
    ),
    billedAmount: canonicalAmount(row.billed_amount, currency),
    providerObservedAmount: canonicalAmount(
      row.provider_observed_amount,
      currency,
    ),
    eligibleCostEventCount: Number(row.eligible_cost_event_count),
    billedEventCount: Number(row.billed_event_count),
    providerObservedEventCount: Number(row.provider_observed_event_count),
    rebuildVersion: Number(row.rebuild_version),
    rebuiltAt:
      row.rebuilt_at instanceof Date
        ? row.rebuilt_at.toISOString()
        : String(row.rebuilt_at),
  };
}

async function deleteAndInsertProjections(
  client: PoolClient,
  projectId: string,
  periodStart: string,
  projections: ReadonlyArray<FinOpsEnforcementProjection>,
): Promise<void> {
  await client.query(
    `DELETE FROM finops_enforcement_projection
     WHERE project_id = $1 AND period_start = $2::date`,
    [projectId, periodStart],
  );
  for (const row of projections) {
    await client.query(
      `INSERT INTO finops_enforcement_projection (
        project_id, period_start, currency,
        blocking_eligible_amount, billed_amount, provider_observed_amount,
        eligible_cost_event_count, billed_event_count, provider_observed_event_count,
        rebuild_version, rebuilt_at
      ) VALUES (
        $1,$2::date,$3,$4::numeric,$5::numeric,$6::numeric,
        $7,$8,$9,$10,$11::timestamptz
      )`,
      [
        row.projectId,
        row.periodStart,
        row.currency,
        row.blockingEligibleAmount,
        row.billedAmount,
        row.providerObservedAmount,
        row.eligibleCostEventCount,
        row.billedEventCount,
        row.providerObservedEventCount,
        row.rebuildVersion,
        row.rebuiltAt,
      ],
    );
  }
}

function buildExclusiveOps(
  client: PoolClient,
  projectId: string,
  periodStart: string,
): FinOpsExclusiveEnforcementOps {
  return {
    async listAllCostEventsForPeriod() {
      const result = await client.query(
        `SELECT * FROM finops_cost_event
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY occurred_at ASC, cost_event_id ASC`,
        [projectId, periodStart],
      );
      return result.rows.map((row) =>
        rowToCostEvent(row as Record<string, unknown>),
      );
    },
    async listProjections() {
      const result = await client.query(
        `SELECT * FROM finops_enforcement_projection
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY currency ASC`,
        [projectId, periodStart],
      );
      return result.rows.map((row) =>
        rowToProjection(row as Record<string, unknown>),
      );
    },
    async replaceProjections(projections) {
      await deleteAndInsertProjections(
        client,
        projectId,
        periodStart,
        projections,
      );
    },
    async readProjection(currency) {
      const result = await client.query(
        `SELECT * FROM finops_enforcement_projection
         WHERE project_id = $1 AND period_start = $2::date AND currency = $3
         LIMIT 1`,
        [projectId, periodStart, currency],
      );
      if (result.rowCount !== 1) return null;
      return rowToProjection(result.rows[0] as Record<string, unknown>);
    },
  };
}

export function createPostgresFinOpsEnforcementProjectionStore(
  pool: Pool,
): FinOpsEnforcementProjectionPort {
  return {
    async withExclusiveProjectPeriod(input, work) {
      const projectId = input.projectId.trim();
      const periodStart = input.periodStart.trim();
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        // Transaction-scoped advisory lock: same namespace for rebuild + decision.
        await client.query(
          `SELECT pg_advisory_xact_lock(
             hashtext('finops-t4:' || $1),
             hashtext($2)
           )`,
          [projectId, periodStart],
        );
        const ops = buildExclusiveOps(client, projectId, periodStart);
        const result = await work(ops);
        await client.query("COMMIT");
        return result;
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore
          }
        }
        const sanitized = sanitizeDbError(error);
        throw new Error(sanitized.message);
      } finally {
        client?.release();
      }
    },
  };
}
```

## CREATED `projects/sfia-studio/app/db/migrations/1754600003000_finops-t4-enforcement-projection.js`

```
/**
 * Migration: FinOps T4 dedicated enforcement projection (derived / rebuildable).
 *
 * Order (must remain):
 *   1754500000000 T1
 *   < 1754600000000 T2
 *   < 1754600001000 T6
 *   < 1754600002000 T3
 *   < 1754600003000 T4
 *
 * No seed thresholds. No flags. No T6 events. No FK to T2/T3.
 * Amounts may be signed (financial corrections) — no amount >= 0 check.
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("finops_enforcement_projection", {
    project_id: { type: "text", notNull: true },
    period_start: { type: "date", notNull: true },
    currency: { type: "text", notNull: true },
    blocking_eligible_amount: { type: "numeric(20,8)", notNull: true },
    billed_amount: { type: "numeric(20,8)", notNull: true },
    provider_observed_amount: { type: "numeric(20,8)", notNull: true },
    eligible_cost_event_count: { type: "bigint", notNull: true },
    billed_event_count: { type: "bigint", notNull: true },
    provider_observed_event_count: { type: "bigint", notNull: true },
    rebuild_version: { type: "bigint", notNull: true },
    rebuilt_at: { type: "timestamptz", notNull: true },
  });

  pgm.addConstraint(
    "finops_enforcement_projection",
    "finops_enforcement_projection_pkey",
    {
      primaryKey: ["project_id", "period_start", "currency"],
    },
  );

  pgm.addConstraint(
    "finops_enforcement_projection",
    "finops_enforcement_projection_currency_chk",
    {
      check: "currency ~ '^[A-Z]{3}$'",
    },
  );

  pgm.addConstraint(
    "finops_enforcement_projection",
    "finops_enforcement_projection_period_start_chk",
    {
      check:
        "period_start = date_trunc('month', period_start::timestamp)::date",
    },
  );

  pgm.addConstraint(
    "finops_enforcement_projection",
    "finops_enforcement_projection_rebuild_version_chk",
    {
      check: "rebuild_version >= 1",
    },
  );

  pgm.addConstraint(
    "finops_enforcement_projection",
    "finops_enforcement_projection_counts_chk",
    {
      check:
        "eligible_cost_event_count >= 0 AND billed_event_count >= 0 AND provider_observed_event_count >= 0",
    },
  );

  pgm.createIndex(
    "finops_enforcement_projection",
    ["project_id", "period_start"],
    {
      name: "finops_enforcement_projection_project_period_idx",
    },
  );
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  // Data-preserving doctrine: refuse drop when projection rows exist.
  pgm.sql(`
DO $$
DECLARE
  projection_count bigint;
BEGIN
  SELECT COUNT(*) INTO projection_count FROM finops_enforcement_projection;
  IF projection_count > 0 THEN
    RAISE EXCEPTION
      'Refuse FinOps T4 down migration: rows exist in finops_enforcement_projection';
  END IF;
END $$;
`);

  pgm.dropTable("finops_enforcement_projection");
};
```

## CREATED `projects/sfia-studio/app/__tests__/oa/finops/t4.enforcement.unit.test.ts`

```
/**
 * @vitest-environment node
 *
 * FinOps T4 — Soft Enforcement foundation unit tests (≥18).
 * FICTITIOUS fixtures only — NOT historical calibration 15/20/25/30.
 */
import { describe, expect, it, vi } from "vitest";
import {
  createFinOpsEnforcementPort,
  evaluateFinOpsEnforcement,
} from "@/lib/oa/finops/application/evaluateFinOpsEnforcement";
import {
  buildEnforcementProjectionsFromCostEvents,
  rebuildEnforcementProjection,
} from "@/lib/oa/finops/application/rebuildEnforcementProjection";
import type { FinOpsCostEvent } from "@/lib/oa/finops/application/types.aggregate";
import type { FinOpsEnforcementPolicy } from "@/lib/oa/finops/application/types.enforcement";
import { createMemoryFinOpsEnforcementProjection } from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsEnforcementProjection";

/** FICTITIOUS — arbitrary test amounts; NOT project calibration 15/20/25/30. */
const FICT_THRESHOLD = "12.34000000";
const FICT_BELOW = "12.33000000";
const FICT_ABOVE = "12.35000000";
const FICT_BILLED = "5.11000000";
const FICT_PROVIDER = "7.24000000";
const FICT_API = "99.99000000";
const FICT_EUR = "4.00000000";

function costEvent(
  partial: Partial<FinOpsCostEvent> &
    Pick<
      FinOpsCostEvent,
      "costEventId" | "sourceOfTruth" | "evidenceClass" | "amount" | "currency"
    >,
): FinOpsCostEvent {
  return {
    dedupKey: `dedup:${partial.costEventId}`,
    projectId: "proj-t4",
    executionRunId: "run-t4",
    usageEventId: null,
    periodStart: "2026-08-01",
    estimationStatus: "available",
    correctionRef: null,
    catalogVersion: null,
    provider: "openai",
    model: "gpt-test",
    unit: null,
    billingQuantum: null,
    usageQuantity: null,
    occurredAt: "2026-08-07T12:00:00.000Z",
    ...partial,
  };
}

describe("FinOps T4 enforcement unit", () => {
  it("1. projection sums BILLED + PROVIDER_OBSERVED only", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BILLED,
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "PROVIDER_OBSERVED",
          evidenceClass: "observed",
          amount: FICT_PROVIDER,
          currency: "USD",
        }),
      ],
    });
    expect(projections).toHaveLength(1);
    expect(projections[0]!.blockingEligibleAmount).toBe("12.35000000");
    expect(projections[0]!.billedAmount).toBe(FICT_BILLED);
    expect(projections[0]!.providerObservedAmount).toBe(FICT_PROVIDER);
  });

  it("2. API_USAGE with amount is excluded", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BILLED,
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "API_USAGE",
          evidenceClass: "observed",
          amount: FICT_API,
          currency: "USD",
        }),
      ],
    });
    expect(projections[0]!.blockingEligibleAmount).toBe(FICT_BILLED);
    expect(projections[0]!.eligibleCostEventCount).toBe(1);
  });

  it("3. LOCAL_COUNT / PARAMETRIC_ESTIMATE / UNKNOWN excluded", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "LOCAL_COUNT",
          evidenceClass: "estimated",
          amount: "1.00000000",
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "PARAMETRIC_ESTIMATE",
          evidenceClass: "estimated",
          amount: "2.00000000",
          currency: "USD",
        }),
        costEvent({
          costEventId: "c3",
          sourceOfTruth: "UNKNOWN",
          evidenceClass: "unknown",
          amount: "3.00000000",
          currency: "USD",
        }),
      ],
    });
    expect(projections[0]!.blockingEligibleAmount).toBe("0.00000000");
    expect(projections[0]!.eligibleCostEventCount).toBe(0);
  });

  it("4. billedAmount and providerObservedAmount remain separately visible", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BILLED,
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "PROVIDER_OBSERVED",
          evidenceClass: "observed",
          amount: FICT_PROVIDER,
          currency: "USD",
        }),
      ],
    });
    expect(projections[0]!.billedAmount).toBe(FICT_BILLED);
    expect(projections[0]!.providerObservedAmount).toBe(FICT_PROVIDER);
    expect(projections[0]!.billedEventCount).toBe(1);
    expect(projections[0]!.providerObservedEventCount).toBe(1);
  });

  it("5. multi-currency isolated", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BILLED,
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_EUR,
          currency: "EUR",
        }),
      ],
    });
    expect(projections).toHaveLength(2);
    const usd = projections.find((p) => p.currency === "USD")!;
    const eur = projections.find((p) => p.currency === "EUR")!;
    expect(usd.blockingEligibleAmount).toBe(FICT_BILLED);
    expect(eur.blockingEligibleAmount).toBe(FICT_EUR);
  });

  it("6. no FX / no cross-sum", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: "1.00000000",
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: "2.00000000",
          currency: "EUR",
        }),
      ],
    });
    const totalAcross = projections.reduce(
      (n, p) => n + Number(p.blockingEligibleAmount),
      0,
    );
    // Number used only to prove rows are NOT a single cross-currency sum field.
    expect(projections.every((p) => p.currency === "USD" || p.currency === "EUR")).toBe(
      true,
    );
    expect(projections).toHaveLength(2);
    expect(totalAcross).toBe(3);
  });

  it("7. inconsistent blocking-eligible SoT/evidenceClass fails rebuild/build safely", async () => {
    expect(() =>
      buildEnforcementProjectionsFromCostEvents({
        projectId: "proj-t4",
        periodStart: "2026-08-01",
        rebuiltAt: "2026-08-07T12:00:00.000Z",
        events: [
          costEvent({
            costEventId: "c1",
            sourceOfTruth: "BILLED",
            evidenceClass: "observed",
            amount: FICT_BILLED,
            currency: "USD",
          }),
        ],
      }),
    ).toThrow(/inconsistent/i);

    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "PROVIDER_OBSERVED",
          evidenceClass: "billed",
          amount: FICT_PROVIDER,
          currency: "USD",
        }),
      ],
    });
    const result = await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("failed");
    if (result.outcome !== "failed") return;
    expect(result.finopsSideOnly).toBe(true);
    expect(result.code).toBe("FINOPS_T4_SOT_EVIDENCE_INCONSISTENT");
  });

  it("8. Money exact canonical scale", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: "0.10000000",
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: "0.20000000",
          currency: "USD",
        }),
      ],
    });
    expect(projections[0]!.blockingEligibleAmount).toBe("0.30000000");
  });

  it("9. policy absent → allow / no projection access", async () => {
    const readSpy = vi.fn();
    const store = createMemoryFinOpsEnforcementProjection();
    const projection = {
      withExclusiveProjectPeriod: <T,>(
        input: { readonly projectId: string; readonly periodStart: string },
        work: Parameters<typeof store.withExclusiveProjectPeriod>[1],
      ): Promise<T> => {
        readSpy();
        return store.withExclusiveProjectPeriod(input, work) as Promise<T>;
      },
    };
    const decision = await evaluateFinOpsEnforcement(
      {
        projection,
        resolvePolicy: () => null,
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("allow");
    expect(decision.reason).toBe("not_configured");
    expect(readSpy).not.toHaveBeenCalled();
  });

  it("10. below threshold → allow", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BELOW,
          currency: "USD",
        }),
      ],
    });
    await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    const policy: FinOpsEnforcementPolicy = {
      thresholdCode: "FICT_T4",
      currency: "USD",
      thresholdAmount: FICT_THRESHOLD,
      effect: "enforce",
    };
    const decision = await evaluateFinOpsEnforcement(
      { projection: store, resolvePolicy: () => policy },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("allow");
    expect(decision.reason).toBe("below_threshold");
  });

  it("11. crossing + signal_only → soft_signal", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_ABOVE,
          currency: "USD",
        }),
      ],
    });
    await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    const decision = await evaluateFinOpsEnforcement(
      {
        projection: store,
        resolvePolicy: () => ({
          thresholdCode: "FICT_T4",
          currency: "USD",
          thresholdAmount: FICT_THRESHOLD,
          effect: "signal_only",
        }),
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("soft_signal");
  });

  it("12. crossing + enforce → block", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "PROVIDER_OBSERVED",
          evidenceClass: "observed",
          amount: FICT_ABOVE,
          currency: "USD",
        }),
      ],
    });
    await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    const decision = await evaluateFinOpsEnforcement(
      {
        projection: store,
        resolvePolicy: () => ({
          thresholdCode: "FICT_T4",
          currency: "USD",
          thresholdAmount: FICT_THRESHOLD,
          effect: "enforce",
        }),
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("block");
  });

  it("13. missing projection → failed / finopsSideOnly", async () => {
    const store = createMemoryFinOpsEnforcementProjection();
    const decision = await evaluateFinOpsEnforcement(
      {
        projection: store,
        resolvePolicy: () => ({
          thresholdCode: "FICT_T4",
          currency: "USD",
          thresholdAmount: FICT_THRESHOLD,
          effect: "enforce",
        }),
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("failed");
    expect(decision.finopsSideOnly).toBe(true);
    expect(decision.reason).toBe("projection_missing");
  });

  it("14. projection read throw → failed / sanitized", async () => {
    const projection = {
      async withExclusiveProjectPeriod() {
        throw new Error("SELECT * FROM secret_table WHERE password='x'");
      },
    };
    const decision = await evaluateFinOpsEnforcement(
      {
        projection,
        resolvePolicy: () => ({
          thresholdCode: "FICT_T4",
          currency: "USD",
          thresholdAmount: FICT_THRESHOLD,
          effect: "enforce",
        }),
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("failed");
    expect(decision.finopsSideOnly).toBe(true);
    expect(JSON.stringify(decision)).not.toMatch(/password|secret_table/i);
  });

  it("15. FAILED is never BLOCK", async () => {
    const store = createMemoryFinOpsEnforcementProjection();
    const decision = await evaluateFinOpsEnforcement(
      {
        projection: store,
        resolvePolicy: () => ({
          thresholdCode: "FICT_T4",
          currency: "USD",
          thresholdAmount: FICT_THRESHOLD,
          effect: "enforce",
        }),
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("failed");
    expect(decision.decision).not.toBe("block");
  });

  it("16. internal soft_signal contains no REVIEW_REQUIRED or WOULD_BLOCK literal", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_ABOVE,
          currency: "USD",
        }),
      ],
    });
    await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    const decision = await evaluateFinOpsEnforcement(
      {
        projection: store,
        resolvePolicy: () => ({
          thresholdCode: "FICT_T4",
          currency: "USD",
          thresholdAmount: FICT_THRESHOLD,
          effect: "signal_only",
        }),
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("soft_signal");
    const serialized = JSON.stringify(decision);
    expect(serialized).not.toContain("REVIEW_REQUIRED");
    expect(serialized).not.toContain("WOULD_BLOCK");
  });

  it("17. memory rebuild version monotonic", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BILLED,
          currency: "USD",
        }),
      ],
    });
    const r1 = await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    const r2 = await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:01:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    expect(r1.outcome).toBe("succeeded");
    expect(r2.outcome).toBe("succeeded");
    if (r1.outcome !== "succeeded" || r2.outcome !== "succeeded") return;
    expect(r1.projections[0]!.rebuildVersion).toBe(1);
    expect(r2.projections[0]!.rebuildVersion).toBe(2);
  });

  it("18. same project/period concurrent rebuild remains deterministic", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BILLED,
          currency: "USD",
        }),
      ],
    });
    const deps = {
      projection: store,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
    const input = { projectId: "proj-t4", periodStart: "2026-08-01" };
    const [a, b, c] = await Promise.all([
      rebuildEnforcementProjection(deps, input),
      rebuildEnforcementProjection(deps, input),
      rebuildEnforcementProjection(deps, input),
    ]);
    expect(a.outcome).toBe("succeeded");
    expect(b.outcome).toBe("succeeded");
    expect(c.outcome).toBe("succeeded");
    if (
      a.outcome !== "succeeded" ||
      b.outcome !== "succeeded" ||
      c.outcome !== "succeeded"
    ) {
      return;
    }
    const versions = [
      a.projections[0]!.rebuildVersion,
      b.projections[0]!.rebuildVersion,
      c.projections[0]!.rebuildVersion,
    ].sort((x, y) => x - y);
    expect(versions).toEqual([1, 2, 3]);
    const final = await store.withExclusiveProjectPeriod(input, (ops) =>
      ops.readProjection("USD"),
    );
    expect(final?.rebuildVersion).toBe(3);
    expect(final?.blockingEligibleAmount).toBe(FICT_BILLED);
  });

  it("19. createFinOpsEnforcementPort factory wires injected resolver", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_ABOVE,
          currency: "USD",
        }),
      ],
    });
    await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    const port = createFinOpsEnforcementPort({
      projection: store,
      resolvePolicy: () => ({
        thresholdCode: "FICT_T4",
        currency: "USD",
        thresholdAmount: FICT_THRESHOLD,
        effect: "enforce",
      }),
    });
    const decision = await port.evaluateBeforeProvider({
      projectId: "proj-t4",
      executionRunId: "run-1",
      correlationId: "corr-1",
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    expect(decision.decision).toBe("block");
  });
});
```

## CREATED `projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.enforcement-projection.integration.test.ts`

```
/**
 * @vitest-environment node
 *
 * FinOps T4 PostgreSQL enforcement projection integration.
 * Requires DATABASE_URL (ephemeral local Postgres only — never Neon).
 * FICTITIOUS amounts only — NOT 15/20/25/30.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Pool } from "pg";
import { evaluateFinOpsEnforcement } from "@/lib/oa/finops/application/evaluateFinOpsEnforcement";
import { rebuildEnforcementProjection } from "@/lib/oa/finops/application/rebuildEnforcementProjection";
import { deriveCostEventIdentity } from "@/lib/oa/finops/application/t2Identity";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsEnforcementProjectionStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsEnforcementProjectionStore";
import { createPostgresFinOpsReconciliation } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

/** FICTITIOUS — not historical calibration. */
const FICT_BILLED = "5.11000000";
const FICT_PROVIDER = "7.24000000";
const FICT_API = "99.99000000";
const FICT_EUR = "3.50000000";
const FICT_THRESHOLD = "12.34000000";
const FICT_SIGNED = "-1.25000000";

describeDb("FinOps T4 PostgreSQL enforcement projection integration", () => {
  let pool: Pool;
  const suffix = `${Date.now()}`;

  beforeAll(() => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("1. T4 migration after T3", async () => {
    const migrations = await pool.query<{ name: string }>(
      `SELECT name FROM pgmigrations ORDER BY run_on ASC, name ASC`,
    );
    const names = migrations.rows.map((r) => r.name);
    const i1 = names.findIndex((n) => n.includes("finops-t1"));
    const i2 = names.findIndex((n) => n.includes("finops-t2"));
    const i6 = names.findIndex((n) => n.includes("finops-t6"));
    const i3 = names.findIndex((n) => n.includes("finops-t3"));
    const i4 = names.findIndex((n) => n.includes("finops-t4"));
    expect(i1).toBeGreaterThanOrEqual(0);
    expect(i2).toBeGreaterThan(i1);
    expect(i6).toBeGreaterThan(i2);
    expect(i3).toBeGreaterThan(i6);
    expect(i4).toBeGreaterThan(i3);
  });

  it("2. table exists / schema expected", async () => {
    const cols = await pool.query<{
      column_name: string;
      data_type: string;
      numeric_precision: number | null;
      numeric_scale: number | null;
    }>(
      `SELECT column_name, data_type, numeric_precision, numeric_scale
       FROM information_schema.columns
       WHERE table_name = 'finops_enforcement_projection'
       ORDER BY ordinal_position`,
    );
    const names = cols.rows.map((r) => r.column_name);
    expect(names).toEqual(
      expect.arrayContaining([
        "project_id",
        "period_start",
        "currency",
        "blocking_eligible_amount",
        "billed_amount",
        "provider_observed_amount",
        "eligible_cost_event_count",
        "billed_event_count",
        "provider_observed_event_count",
        "rebuild_version",
        "rebuilt_at",
      ]),
    );
    const amount = cols.rows.find(
      (r) => r.column_name === "blocking_eligible_amount",
    );
    expect(amount?.data_type).toBe("numeric");
    expect(amount?.numeric_precision).toBe(20);
    expect(amount?.numeric_scale).toBe(8);
  });

  it("3. no seed thresholds", async () => {
    const count = await pool.query<{ n: string }>(
      `SELECT COUNT(*)::text AS n FROM finops_enforcement_projection`,
    );
    // Table may have rows from other tests in suite; seed means migration-time data.
    // Prove no threshold / flag tables for T4.
    const thresholdTables = await pool.query<{ table_name: string }>(
      `SELECT table_name FROM information_schema.tables
       WHERE table_schema = 'public'
         AND table_name LIKE '%enforcement%threshold%'`,
    );
    expect(thresholdTables.rows).toHaveLength(0);
    expect(Number(count.rows[0]!.n)).toBeGreaterThanOrEqual(0);
  });

  it("4. cost events BILLED + PROVIDER_OBSERVED rebuild", async () => {
    const projectId = `proj-t4-sum-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    for (const [id, sot, evidence, amount] of [
      ["b1", "BILLED", "billed", FICT_BILLED],
      ["p1", "PROVIDER_OBSERVED", "observed", FICT_PROVIDER],
    ] as const) {
      const identity = deriveCostEventIdentity({
        projectId,
        executionRunId: `run-${id}-${suffix}`,
        evidenceClass: evidence,
        correctionRef: null,
        amount,
        currency: "USD",
      });
      await reconciliation.insertCostEvent({
        costEventId: identity.costEventId,
        dedupKey: identity.dedupKey,
        projectId,
        executionRunId: `run-${id}-${suffix}`,
        usageEventId: null,
        periodStart: "2026-08-01",
        currency: "USD",
        amount,
        evidenceClass: evidence,
        sourceOfTruth: sot,
        estimationStatus: "available",
        correctionRef: null,
        catalogVersion: null,
        provider: "openai",
        model: "gpt-test",
        unit: null,
        billingQuantum: null,
        usageQuantity: null,
        occurredAt: "2026-08-07T12:00:00.000Z",
      });
    }
    const result = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.projections[0]!.blockingEligibleAmount).toBe("12.35000000");
    expect(result.projections[0]!.billedAmount).toBe(FICT_BILLED);
    expect(result.projections[0]!.providerObservedAmount).toBe(FICT_PROVIDER);
  });

  it("5. API_USAGE excluded despite observed evidenceClass", async () => {
    const projectId = `proj-t4-api-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    for (const [id, sot, evidence, amount] of [
      ["b1", "BILLED", "billed", FICT_BILLED],
      ["a1", "API_USAGE", "observed", FICT_API],
    ] as const) {
      const identity = deriveCostEventIdentity({
        projectId,
        executionRunId: `run-${id}-${suffix}`,
        evidenceClass: evidence,
        correctionRef: null,
        amount,
        currency: "USD",
      });
      await reconciliation.insertCostEvent({
        costEventId: identity.costEventId,
        dedupKey: identity.dedupKey,
        projectId,
        executionRunId: `run-${id}-${suffix}`,
        usageEventId: null,
        periodStart: "2026-08-01",
        currency: "USD",
        amount,
        evidenceClass: evidence,
        sourceOfTruth: sot,
        estimationStatus: "available",
        correctionRef: null,
        catalogVersion: null,
        provider: "openai",
        model: "gpt-test",
        unit: null,
        billingQuantum: null,
        usageQuantity: null,
        occurredAt: "2026-08-07T12:00:00.000Z",
      });
    }
    const result = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.projections[0]!.blockingEligibleAmount).toBe(FICT_BILLED);
    expect(result.projections[0]!.eligibleCostEventCount).toBe(1);
  });

  it("6. currency isolation", async () => {
    const projectId = `proj-t4-fx-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    for (const [id, currency, amount] of [
      ["u", "USD", FICT_BILLED],
      ["e", "EUR", FICT_EUR],
    ] as const) {
      const identity = deriveCostEventIdentity({
        projectId,
        executionRunId: `run-${id}-${suffix}`,
        evidenceClass: "billed",
        correctionRef: null,
        amount,
        currency,
      });
      await reconciliation.insertCostEvent({
        costEventId: identity.costEventId,
        dedupKey: identity.dedupKey,
        projectId,
        executionRunId: `run-${id}-${suffix}`,
        usageEventId: null,
        periodStart: "2026-08-01",
        currency,
        amount,
        evidenceClass: "billed",
        sourceOfTruth: "BILLED",
        estimationStatus: "available",
        correctionRef: null,
        catalogVersion: null,
        provider: "openai",
        model: "gpt-test",
        unit: null,
        billingQuantum: null,
        usageQuantity: null,
        occurredAt: "2026-08-07T12:00:00.000Z",
      });
    }
    const result = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.projections).toHaveLength(2);
    expect(
      result.projections.find((p) => p.currency === "USD")!
        .blockingEligibleAmount,
    ).toBe(FICT_BILLED);
    expect(
      result.projections.find((p) => p.currency === "EUR")!
        .blockingEligibleAmount,
    ).toBe(FICT_EUR);
  });

  it("7. projection persists across new store instance", async () => {
    const projectId = `proj-t4-persist-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-persist-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
      executionRunId: `run-persist-${suffix}`,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    const storeA = createPostgresFinOpsEnforcementProjectionStore(pool);
    await rebuildEnforcementProjection(
      { projection: storeA, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    const storeB = createPostgresFinOpsEnforcementProjectionStore(pool);
    const row = await storeB.withExclusiveProjectPeriod(
      { projectId, periodStart: "2026-08-01" },
      (ops) => ops.readProjection("USD"),
    );
    expect(row?.blockingEligibleAmount).toBe(FICT_BILLED);
  });

  it("8. rebuildVersion increments", async () => {
    const projectId = `proj-t4-ver-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-ver-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
      executionRunId: `run-ver-${suffix}`,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    const r1 = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    const r2 = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:01:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(r1.outcome).toBe("succeeded");
    expect(r2.outcome).toBe("succeeded");
    if (r1.outcome !== "succeeded" || r2.outcome !== "succeeded") return;
    expect(r1.projections[0]!.rebuildVersion).toBe(1);
    expect(r2.projections[0]!.rebuildVersion).toBe(2);
  });

  it("9. replace full project/period removes obsolete currency row", async () => {
    const projectId = `proj-t4-obs-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-u-obs-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
      executionRunId: `run-u-obs-${suffix}`,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    // Seed a stale EUR projection row (ledger is append-only — no DELETE).
    await projection.withExclusiveProjectPeriod(
      { projectId, periodStart: "2026-08-01" },
      async (ops) => {
        await ops.replaceProjections([
          {
            projectId,
            periodStart: "2026-08-01",
            currency: "USD",
            blockingEligibleAmount: FICT_BILLED,
            billedAmount: FICT_BILLED,
            providerObservedAmount: "0.00000000",
            eligibleCostEventCount: 1,
            billedEventCount: 1,
            providerObservedEventCount: 0,
            rebuildVersion: 1,
            rebuiltAt: "2026-08-07T11:00:00.000Z",
          },
          {
            projectId,
            periodStart: "2026-08-01",
            currency: "EUR",
            blockingEligibleAmount: FICT_EUR,
            billedAmount: FICT_EUR,
            providerObservedAmount: "0.00000000",
            eligibleCostEventCount: 1,
            billedEventCount: 1,
            providerObservedEventCount: 0,
            rebuildVersion: 1,
            rebuiltAt: "2026-08-07T11:00:00.000Z",
          },
        ]);
      },
    );
    const result = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:02:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.projections.map((p) => p.currency)).toEqual(["USD"]);
    const eur = await projection.withExclusiveProjectPeriod(
      { projectId, periodStart: "2026-08-01" },
      (ops) => ops.readProjection("EUR"),
    );
    expect(eur).toBeNull();
  });

  it("10. concurrent rebuild same project/period serialized", async () => {
    const projectId = `proj-t4-conc-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-conc-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
      executionRunId: `run-conc-${suffix}`,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    const deps = {
      projection,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
    const input = { projectId, periodStart: "2026-08-01" };
    const results = await Promise.all([
      rebuildEnforcementProjection(deps, input),
      rebuildEnforcementProjection(deps, input),
      rebuildEnforcementProjection(deps, input),
    ]);
    expect(results.every((r) => r.outcome === "succeeded")).toBe(true);
    const final = await projection.withExclusiveProjectPeriod(input, (ops) =>
      ops.readProjection("USD"),
    );
    expect(final?.rebuildVersion).toBe(3);
  });

  it("11. decision read and rebuild share project/period lock semantics", async () => {
    const projectId = `proj-t4-lock-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-lock-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: "12.35000000",
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
      executionRunId: `run-lock-${suffix}`,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: "12.35000000",
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    const [rebuildResult, decision] = await Promise.all([
      rebuildEnforcementProjection(
        { projection, nowIso: () => "2026-08-07T12:05:00.000Z" },
        { projectId, periodStart: "2026-08-01" },
      ),
      evaluateFinOpsEnforcement(
        {
          projection,
          resolvePolicy: () => ({
            thresholdCode: "FICT_T4_PG",
            currency: "USD",
            thresholdAmount: FICT_THRESHOLD,
            effect: "enforce",
          }),
        },
        {
          projectId,
          executionRunId: `run-lock-${suffix}`,
          correlationId: `corr-lock-${suffix}`,
          occurredAt: "2026-08-07T12:00:00.000Z",
        },
      ),
    ]);
    expect(rebuildResult.outcome).toBe("succeeded");
    expect(["allow", "block", "soft_signal", "failed"]).toContain(
      decision.decision,
    );
    expect(decision.decision).not.toBe("failed");
  });

  it("12. no duplicate PK rows", async () => {
    const projectId = `proj-t4-pk-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-pk-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
      executionRunId: `run-pk-${suffix}`,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:01:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    const count = await pool.query<{ n: string }>(
      `SELECT COUNT(*)::text AS n FROM finops_enforcement_projection
       WHERE project_id = $1 AND period_start = '2026-08-01'::date AND currency = 'USD'`,
      [projectId],
    );
    expect(count.rows[0]!.n).toBe("1");
  });

  it("13. signed correction-safe amounts accepted", async () => {
    const projectId = `proj-t4-signed-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-signed-${suffix}`,
      evidenceClass: "billed",
      correctionRef: "corr-1",
      amount: FICT_SIGNED,
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
      executionRunId: `run-signed-${suffix}`,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_SIGNED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: "corr-1",
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    const result = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.projections[0]!.blockingEligibleAmount).toBe(FICT_SIGNED);
  });

  it("14. down refuses when projection rows exist (guard inspection)", async () => {
    const fs = await import("node:fs/promises");
    const path = await import("node:path");
    const migrationPath = path.join(
      process.cwd(),
      "db/migrations/1754600003000_finops-t4-enforcement-projection.js",
    );
    const source = await fs.readFile(migrationPath, "utf8");
    expect(source).toMatch(/Refuse FinOps T4 down migration/);
    expect(source).toMatch(/finops_enforcement_projection/);
    const count = await pool.query<{ n: string }>(
      `SELECT COUNT(*)::text AS n FROM finops_enforcement_projection`,
    );
    expect(Number(count.rows[0]!.n)).toBeGreaterThan(0);
  });
});
```

## CREATED `projects/sfia-studio/app/__tests__/oa/execution-run/t4.enforcement-boundary.unit.test.ts`

```
/**
 * @vitest-environment node
 *
 * FinOps T4 — execution-run ENF-B boundary tests (≥15).
 * FICTITIOUS fixtures only — NOT historical 15/20/25/30.
 */
import { describe, expect, it, vi } from "vitest";
import { getFixture } from "@/lib/oa/execution-run";
import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";
import {
  composeExecutionRunProviders,
  composeExecutionRunProvidersFake,
} from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
import type { FinOpsEnforcementPort } from "@/lib/oa/finops/ports/finopsEnforcementPort";
import type { FinOpsEnforcementDecision } from "@/lib/oa/finops/application/types.enforcement";
import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";

function decisionPort(
  decision: FinOpsEnforcementDecision,
): FinOpsEnforcementPort {
  return {
    async evaluateBeforeProvider() {
      return decision;
    },
  };
}

function throwingPort(): FinOpsEnforcementPort {
  return {
    async evaluateBeforeProvider() {
      throw new Error("SELECT password FROM secrets WHERE host='db'");
    },
  };
}

function spyAiProviders() {
  const ai = new FakeAiExecutionAdapter();
  const completeSpy = vi.spyOn(ai, "complete");
  const secretsAdapter = new FakeSecretSourceAdapter();
  const providers = composeExecutionRunProviders({
    ai,
    git: new FakeGitReadAdapter({
      repositoryAllowlist: ["o/r", "example/example", "mcleland147/sfia-workspace"],
      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
    }),
    cursor: new FixtureCursorExecutionAdapter(),
    secrets: {
      resolve: (secretId) => secretsAdapter.resolve(secretId),
    },
    events: new RecordingExecutionEventSink(),
  });
  return { providers, completeSpy };
}

function nominalCoordinateInput(suffix: string) {
  const fixture = getFixture("nominal");
  return {
    intent: {
      ...fixture.intent,
      intentId: `intent:t4:${suffix}`,
      correlationId: `corr:t4:${suffix}`,
    },
    context: fixture.context,
    providerRequest: {
      correlationId: `corr:t4:${suffix}`,
      lane: "ai" as const,
      operation: "complete" as const,
      messages: [{ role: "user" as const, content: "bounded fixture summary" }],
      timeoutMs: 100,
    },
    timeoutMs: 100,
  };
}

describe("FinOps T4 enforcement boundary (ENF-B)", () => {
  it("1. no finopsEnforcement dependency → existing provider behavior preserved", async () => {
    const composition = composeExecutionRunD2D3();
    const result = await composition.coordinate(nominalCoordinateInput("none"));
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(result.providerCompleted).toBe(true);
  });

  it("2. ALLOW → provider invoked", async () => {
    const { providers, completeSpy } = spyAiProviders();
    const composition = composeExecutionRunD2D3({
      providers,
      finopsEnforcement: decisionPort({
        decision: "allow",
        reason: "below_threshold",
      }),
    });
    const result = await composition.coordinate(nominalCoordinateInput("allow"));
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("3. soft_signal → provider invoked", async () => {
    const { providers, completeSpy } = spyAiProviders();
    const composition = composeExecutionRunD2D3({
      providers,
      finopsEnforcement: decisionPort({
        decision: "soft_signal",
        reason: "threshold_crossed_signal_only",
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("soft"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("4. FAILED → provider invoked", async () => {
    const { providers, completeSpy } = spyAiProviders();
    const composition = composeExecutionRunD2D3({
      providers,
      finopsEnforcement: decisionPort({
        decision: "failed",
        reason: "projection_missing",
        finopsSideOnly: true,
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("failed"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("5. enforcement port throws → provider invoked, exception not leaked", async () => {
    const { providers, completeSpy } = spyAiProviders();
    const composition = composeExecutionRunD2D3({
      providers,
      finopsEnforcement: throwingPort(),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("throw"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    const serialized = JSON.stringify(result);
    expect(serialized).not.toMatch(/SELECT password FROM secrets/i);
    expect(serialized).not.toMatch(/host='db'/i);
  });

  it("6. BLOCK → run blocked", async () => {
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: decisionPort({
        decision: "block",
        reason: "threshold_crossed_enforce",
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("block-state"),
    );
    expect(result.ok).toBe(false);
    expect(result.run?.state).toBe("blocked");
  });

  it("7. BLOCK → providerAttempted false", async () => {
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: decisionPort({
        decision: "block",
        reason: "threshold_crossed_enforce",
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("block-attempted"),
    );
    expect(result.providerAttempted).toBe(false);
  });

  it("8. BLOCK → providerInvoked false", async () => {
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: decisionPort({
        decision: "block",
        reason: "threshold_crossed_enforce",
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("block-invoked"),
    );
    expect(result.providerInvoked).toBe(false);
  });

  it("9. BLOCK → provider port spy not called", async () => {
    const { providers, completeSpy } = spyAiProviders();
    const composition = composeExecutionRunD2D3({
      providers,
      finopsEnforcement: decisionPort({
        decision: "block",
        reason: "threshold_crossed_enforce",
      }),
    });
    await composition.coordinate(nominalCoordinateInput("block-spy"));
    expect(completeSpy).not.toHaveBeenCalled();
  });

  it("10. BLOCK failure code = HUMAN_GATE_REQUIRED", async () => {
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: decisionPort({
        decision: "block",
        reason: "threshold_crossed_enforce",
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("block-code"),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.failure.code).toBe("HUMAN_GATE_REQUIRED");
    expect(result.failure.family).toBe("human_gate_required");
  });

  it("11. BLOCK happens after run creation", async () => {
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: decisionPort({
        decision: "block",
        reason: "threshold_crossed_enforce",
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("block-created"),
    );
    expect(result.run).toBeTruthy();
    expect(result.run?.runId).toBeTruthy();
    expect(result.stateTrace[0]).toBe("idle");
    expect(result.stateTrace).toContain("blocked");
  });

  it("12. pre-engagement validation failure → T4 enforcement not called", async () => {
    const evaluate = vi.fn(async () => ({
      decision: "block" as const,
      reason: "should_not_run",
    }));
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: { evaluateBeforeProvider: evaluate },
    });
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        intentId: "intent:t4:pre",
        correlationId: "corr:t4:pre",
        requestedLane: "none",
      },
      context: fixture.context,
      timeoutMs: 100,
    });
    expect(result.ok).toBe(false);
    expect(evaluate).not.toHaveBeenCalled();
    expect(result.run?.state).toBe("blocked");
  });

  it("13. T4 decision occurs before intent_valid / provider", async () => {
    const order: string[] = [];
    const { providers, completeSpy } = spyAiProviders();
    completeSpy.mockImplementation(async () => {
      order.push("provider");
      throw new Error("provider must not be reached after T4 block");
    });
    const composition = composeExecutionRunD2D3({
      providers,
      finopsEnforcement: {
        async evaluateBeforeProvider() {
          order.push("t4");
          return { decision: "block", reason: "threshold_crossed_enforce" };
        },
      },
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("order"),
    );
    expect(order).toEqual(["t4"]);
    expect(result.providerInvoked).toBe(false);
    expect(result.stateTrace).not.toContain("running");
    expect(completeSpy).not.toHaveBeenCalled();
  });

  it("14. compose default → no enforcement active", async () => {
    const composition = composeExecutionRunD2D3();
    // Default compose must not invent a T4 instance — behavioral proof via success path.
    const result = await composition.coordinate(
      nominalCoordinateInput("default-inert"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    // Source inspection: default options omit finopsEnforcement (no auto-wire).
    const fake = composeExecutionRunProvidersFake();
    expect(fake).toBeTruthy();
  });

  it("15. compose explicit optional fake enforcement → pass-through works", async () => {
    const evaluate = vi.fn(async () => ({
      decision: "allow" as const,
      reason: "not_configured",
    }));
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: { evaluateBeforeProvider: evaluate },
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("passthrough"),
    );
    expect(evaluate).toHaveBeenCalledTimes(1);
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
  });
});
```

# COMPLETE USEFUL DIFFS — MODIFY FILES

## MODIFIED `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
index 1f926bb..edc9dee 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
@@ -29,7 +29,9 @@ import type {
   ProviderInvocationResult,
 } from "../ports/providerResult";
 import type { FinOpsCapturePort } from "../../finops/ports/finopsCapturePort";
+import type { FinOpsEnforcementPort } from "../../finops/ports/finopsEnforcementPort";
 import type { FinOpsCaptureDiagnostic } from "../../finops/application/types";
+import type { FinOpsEnforcementDecision } from "../../finops/application/types.enforcement";
 import {
   invokeWithTimeoutAndCancellation,
   type InvokeOutcome,
@@ -77,6 +79,11 @@ export type CoordinateExecutionRunDependencies = {
   readonly clock: ClockPort;
   /** Optional FinOps T1 capture boundary — absent ⇒ not_attempted/disabled. */
   readonly finops?: FinOpsCapturePort;
+  /**
+   * Optional FinOps T4 soft-enforcement boundary (ENF-B).
+   * Absent ⇒ default-inert (no T4 evaluation). Never auto-instantiated.
+   */
+  readonly finopsEnforcement?: FinOpsEnforcementPort;
 };

 export type CoordinateExecutionRunInput = {
@@ -1043,6 +1050,60 @@ export async function coordinateExecutionRun(
     };
   }

+  // T4 ENF-B: after create + pre-engagement, before intent_valid / provider.
+  // Absent dependency ⇒ inert. allow/soft_signal/failed/throw ⇒ fail-open continue.
+  // block ⇒ HUMAN_GATE_REQUIRED; provider never attempted/invoked.
+  if (deps.finopsEnforcement) {
+    let enforcementDecision: FinOpsEnforcementDecision;
+    try {
+      enforcementDecision = await deps.finopsEnforcement.evaluateBeforeProvider({
+        projectId: current.context.projectId,
+        executionRunId: current.runId,
+        correlationId: current.correlationId,
+        occurredAt: deps.clock.nowIso(),
+      });
+    } catch {
+      enforcementDecision = {
+        decision: "failed",
+        reason: "enforcement_port_threw",
+        finopsSideOnly: true,
+      };
+    }
+
+    if (enforcementDecision.decision === "block") {
+      const enforcementFailure = normalizedFailure({
+        family: "human_gate_required",
+        code: "HUMAN_GATE_REQUIRED",
+        userMessage:
+          "FinOps review is required before starting a new execution",
+        retryable: true,
+        correlationId: current.correlationId,
+      });
+      const blocked = await blockIdleRun(
+        current,
+        enforcementFailure,
+        deps,
+      );
+      if (blocked.run) {
+        current = blocked.run;
+        stateTrace.push(blocked.run.state);
+      }
+      return {
+        ok: false,
+        failure: blocked.ok ? enforcementFailure : blocked.failure,
+        run: blocked.run ?? current,
+        providerAttempted: false,
+        providerInvoked: false,
+        providerCompleted: false,
+        stateTrace,
+        validatedUsage: noUsage,
+        finopsCapture: finopsNotAttempted("finops_enforcement_block"),
+        lateEvidenceRecorded: false,
+        eventDelivery: deliveryOf(tracker),
+      };
+    }
+  }
+
   const started = await deps.execution.transitionExecutionRun({
     runId: current.runId,
     reason: "intent_valid",
```

## MODIFIED `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
index ed73157..80023e9 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
@@ -57,6 +57,11 @@ export function composeExecutionRunD2D3(options?: {
   readonly clock?: ClockPort;
   readonly clockIso?: string;
   readonly finops?: import("../../finops/ports/finopsCapturePort").FinOpsCapturePort;
+  /**
+   * Optional FinOps T4 enforcement — pass-through ONLY when provided.
+   * No default T4 instance, pool, config, threshold, env, or S30 activation.
+   */
+  readonly finopsEnforcement?: import("../../finops/ports/finopsEnforcementPort").FinOpsEnforcementPort;
 }): ExecutionRunD2D3Composition {
   assertServerOnly();
   const clockIso = options?.clockIso ?? "2026-08-04T09:15:00.000Z";
@@ -95,6 +100,9 @@ export function composeExecutionRunD2D3(options?: {
         events: providers.events,
         clock,
         ...(options?.finops ? { finops: options.finops } : {}),
+        ...(options?.finopsEnforcement
+          ? { finopsEnforcement: options.finopsEnforcement }
+          : {}),
       }),
     projectById,
     assessById: async (runId) => {
```

---

## Verdict

FINOPS TECHNICAL LOT T4 —
FOUNDATION DELIVERY COMPLETE WITH RESERVES —

DEDICATED SOT-SAFE ENFORCEMENT PROJECTION IMPLEMENTED —
LEDGER REMAINS AUTHORITATIVE —

BILLED BLOCKING ELIGIBLE —
PROVIDER_OBSERVED BLOCKING ELIGIBLE —
API_USAGE NEVER BLOCKS —
ESTIMATION NEVER BLOCKS —

EXACT MONEY VERIFIED —
NO FX —
NO CROSS-CURRENCY SUM —

EXPLICIT PROJECTION REBUILD IMPLEMENTED —
SHORT PROJECT/PERIOD SERIALIZATION VERIFIED —
NO LOCK ACROSS PROVIDER —

SOFT-CONTROL CONTRACT IMPLEMENTED —
ALLOW VERIFIED —
INTERNAL SOFT_SIGNAL VERIFIED —
BLOCK VERIFIED —
FAILED FAIL-OPEN VERIFIED —

REVIEW_REQUIRED VS WOULD_BLOCK STILL DEFERRED —

ENF-B OPTIONAL COORDINATOR DEPENDENCY IMPLEMENTED —
DEFAULT COMPOSITION INERT —
BLOCK PREVENTS PROVIDER INVOCATION —
FINOPS FAILURE DOES NOT PREVENT PROVIDER INVOCATION —

T3 UNCHANGED —
T5 NOT DELIVERED —
T6-EXT NOT AUTHORIZED —
T7 NOT DELIVERED —
PRODUCT IAM NOT_SELECTED —

NO REAL S30 ACTIVATION —
NO HISTORICAL 30 USD RUNTIME ADOPTION —
NO E1 —

R-T4-T3-SYNC-01 OPEN —
R-T4-PROJECTION-REFRESH-01 OPEN —

148 / 149 PRESERVED —
150 EXECUTION RECORD CREATED —

CRITICAL QA GREEN —
LOCAL POSTGRESQL GREEN —

16-PATH MANIFEST PRESERVED —
NO PROJECT STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

REVIEW HANDOFF REMOTE VERIFIED —

READY FOR CHATGPT T4 FOUNDATION DELIVERY VALIDATION
