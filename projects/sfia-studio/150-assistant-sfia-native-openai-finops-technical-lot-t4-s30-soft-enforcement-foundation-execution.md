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
