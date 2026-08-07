# 142 — FinOps Technical Lot T2 — Execution Record (Aggregation + Reconciliation)

**Project:** SFIA Studio — Assistant SFIA natif OpenAI  
**Document:** `projects/sfia-studio/142-assistant-sfia-native-openai-finops-technical-lot-t2-execution.md`  
**Cycle:** 8 — Delivery / implémentation  
**Profil:** Critical  
**Typologie:** EVOL / DOC / ARCH / DELIVERY  
**Statut:** T2 DELIVERY VALIDATED WITH RESERVES — PR READINESS INPUT  
**Handoff:** PUBLISHED / REMOTE VERIFIED  
**ChatGPT validation:** VALIDATED WITH RESERVES  
**A1 blockers (multi-currency / multi-instance):** CLOSED  

> PR readiness is handled separately in document **144**. This document remains the Delivery execution record (history preserved below). No project commit / push / PR / merge is claimed here.

---

## 1. Statut et anti-claims

| Claim | Statut |
|-------|--------|
| T2 Money M2 + numeric(20,8) implemented locally | **TRUE** |
| HALF_EVEN at rate×usage → scale 8 | **TRUE** |
| R3 catalog Money/unit/quantum (fictitious fixtures only) | **TRUE** |
| A1 durable PG aggregates rebuildable from cost events | **TRUE** |
| Explicit reconcileProjectPeriod on-demand + bounded batch | **TRUE** |
| T1 ledger append-only preserved (no Money columns on usage event) | **TRUE** |
| Documents 138–141 byte-identical | **TRUE** |
| A1 multi-currency + multi-instance correction applied | **TRUE** |
| ChatGPT Delivery validation | **VALIDATED WITH RESERVES** |
| Project commit / push / PR / merge | **FALSE** |
| Handoff published | **TRUE** — PUBLISHED / REMOTE VERIFIED (correction pack; PR readiness separate) |
| Decimal npm dependency | **FALSE** |
| Provider tariffs / Neon / provider-real | **FALSE** |
| Cron / always-on polling | **FALSE** |
| package.json / package-lock / CI workflow modified | **FALSE** |
| T6 files modified | **FALSE** |
| createFinOpsPool / finops/index / composeExecutionRunD2D3 modified | **FALSE** |

---

## 2. GO

Consumed: **GO Delivery T2** only (not T6, not PR/push/merge).

Decisions applied from **139** + **141**:
- D-T2-MONEY-01 = M2
- D-T2-NUMERIC-PS-01 = numeric(20,8)
- D-T2-PRICE-SRC-01 = versioned server-side estimation catalog
- D-T2-PRICE-RATE-REPRESENTATION-01 = R3
- D-T2-PRICE-RATE-PS-01 = NOT REQUIRED UNDER R3
- D-T2-ROUNDING-01 = HALF_EVEN once at rate×usage → Money scale 8
- D-T2-AGG-FORM-01 = A1
- D-T2-RECON-TRIGGER-01 = explicit reconcile · on-demand + bounded batch · no cron

---

## 3. Horodatage

| Événement | Valeur |
|-----------|--------|
| Travail Cursor (CEST) | 2026-08-07 13:02:17 CEST (+0200) |
| Travail Cursor (UTC) | 2026-08-07 11:02:17 UTC |

---

## 4. Git Truth

| Check | Value |
|-------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| Branche Delivery | `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t2-aggregation-reconciliation` |
| HEAD / origin/main | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |
| Upstream | aucun |
| Staged | vide |
| Project commit | **aucun** |
| Project push | **aucun** |

---

## 5. Sources

- 138 grouped preparation (byte-identical)
- 139 T2 decisions applied (byte-identical)
- 140 numeric p/s decision pack (byte-identical)
- 141 numeric/R3/HALF_EVEN decisions applied (byte-identical)
- T1 runtime under `app/lib/oa/finops/**`, migration `1754500000000_finops-t1-usage-ledger.js`
- package scripts: typecheck, lint, build, test, migrate:up, test:db

---

## 6. Baseline T1

- Append-only `finops_usage_event` (usage-only; no Money columns)
- Fail-open capture path untouched (`captureFinOpsUsage.ts` reserved for T6 parallel)
- Pool factory untouched (`createFinOpsPool.ts`)

---

## 7. Décisions 139 / 141 (consumées)

See §2. Exact p/s reserve closed by 141. FIND-03 remains closed decisionally; Money implementation performed in this Delivery.

---

## 8. Branche

`delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t2-aggregation-reconciliation`

Created from preparation branch at HEAD `093fd916…`. Local docs 138–141 kept untracked/byte-identical.

---

## 9. Manifest réel

### CREATED

- `app/lib/oa/finops/domain/money.ts`
- `app/lib/oa/finops/application/types.aggregate.ts`
- `app/lib/oa/finops/application/t2Identity.ts`
- `app/lib/oa/finops/application/estimateUsageCost.ts`
- `app/lib/oa/finops/application/recomputeAggregates.ts`
- `app/lib/oa/finops/application/reconcileProjectPeriod.ts`
- `app/lib/oa/finops/ports/finopsAggregatePort.ts`
- `app/lib/oa/finops/ports/finopsReconciliationPort.ts`
- `app/lib/oa/finops/ports/finopsPriceCatalogPort.ts`
- `app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore.ts`
- `app/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation.ts`
- `app/lib/oa/finops/infrastructure/postgres/postgresFinOpsPriceCatalog.ts`
- `app/lib/oa/finops/infrastructure/memory/memoryFinOpsT2.ts` (unit-test doubles)
- `app/db/migrations/1754600000000_finops-t2-aggregation-reconciliation.js`
- `app/__tests__/oa/finops/t2.money.unit.test.ts`
- `app/__tests__/oa/finops/t2.aggregate.unit.test.ts`
- `app/__tests__/oa/finops/t2.reconciliation.unit.test.ts`
- `app/__tests__/oa/finops/postgres/t2.aggregate.integration.test.ts`
- `app/__tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts`
- `projects/sfia-studio/142-assistant-sfia-native-openai-finops-technical-lot-t2-execution.md` (this document)

### MODIFIED

- **None** of the T1 MODIFY candidates (`types.ts`, `buildUsageEvent.ts`, `postgresFinOpsUsageLedger.ts`) — new modules preferred.

### Manifest note vs 138 candidates

- Added `estimateUsageCost.ts`, `t2Identity.ts`, `postgresFinOpsPriceCatalog.ts`, `memoryFinOpsT2.ts` as repo-conformant helpers (documented here; not a Morris doctrine change).
- Migration filename uses reserved path `1754600000000_finops-t2-aggregation-reconciliation.js` (before T6 `1754600001000_*`).

---

## 10. Choix d'implémentation — Money persistence

**Choice: adjacent append-only table `finops_cost_event`.**

Rationale:
- Preserves T1 `finops_usage_event` usage-only schema and append-only triggers unchanged.
- Corrections = new cost events (`correction_ref`, dedup).
- A1 rebuilds from cost events (authoritative Money history), not from aggregate-only data.
- Avoids destructive ledger rewrite / identity changes.

This is a **Delivery implementation choice**, not a new Morris doctrine decision.

---

## 11. Money numeric(20,8)

- Domain: BigInt minor units at scale 8 + explicit currency (3-letter).
- Canonical boundary: decimal strings via `parseMoneyString` / `formatMoneyString`.
- PG: `numeric(20,8)` on cost amounts and aggregate amount columns.
- No authoritative `Number` / `parseFloat` / `Math.round` / `toFixed` Money path.
- No Decimal npm package (ES2017-compatible `BigInt(...)` API; no bigint literals required by tsconfig target).

---

## 12. HALF_EVEN

- `divideHalfEven` + `moneyFromRateUsageHalfEven(rate, usage, quantum)`.
- Quantize **once** to scale 8 at rate×usage boundary.
- SUM of scale-8 amounts does not re-round.
- Positive and negative tie-case unit tests included.

---

## 13. R3 price catalog

- Port `FinOpsPriceCatalogPort` + PG table `finops_price_catalog_entry`.
- Entry contract: version, unit, billing quantum, Money amount_per_quantum, currency.
- No seed tariffs; empty catalog ⇒ estimation `unavailable`.
- Tests use clearly labeled **fictitious** fixtures only.

---

## 14. Migration

Path: `projects/sfia-studio/app/db/migrations/1754600000000_finops-t2-aggregation-reconciliation.js`

Creates:
- `finops_cost_event` (append-only)
- `finops_usage_aggregate` (A1)
- `finops_price_catalog_entry` (R3)
- `finops_reconciliation_record` (idempotent on-demand batches)

Down refuses drop when cost/aggregate rows present.

---

## 15. A1 aggregates

- Key: `(project_id, period_start, currency)` UTC month.
- Full rebuild via `recomputeAggregates` / `replaceProjectPeriodAggregates`.
- Derived projection only; cost events remain authoritative for Money.

---

## 16. Reconciliation

- Service: `reconcileProjectPeriod`.
- Scope: project + UTC period + `sourceBatchId`.
- On-demand + `maxFacts` bounded batch (default 100).
- estimated → observed → billed via append-only cost events.
- Idempotent on recon dedup key; aggregate recompute after success.
- Failures FinOps-side only (`finopsSideOnly: true`).

---

## 17. Idempotence

- Cost event dedup includes project, run, evidence class, correction_ref, amount, currency (+ optional batch).
- Reconciliation dedup: project + period + sourceBatchId.
- Successful recon replay returns `idempotentReplay: true` without duplicating work.

---

## 18. Tests

- Unit: money HALF_EVEN ties (+/−), aggregate rebuild, R3 estimate / unavailable, recon path + batch bound + idempotence.
- PG integration: numeric(20,8) round-trip, A1 rebuild + late correction, recon idempotence, append-only guard, empty catalog unavailable, fictitious catalog estimate.
- T1 regression included in full suite / `test:db`.

---

## 19. Résultats

| Commande | Résultat |
|----------|----------|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `npm test` | PASS — 144 files / 1435 tests |
| `npm run migrate:up` | PASS — T1 + T2 migrations |
| `npm run test:db` | PASS — 17 tests (T1+T2 PG) |
| `git diff --check` | PASS (no whitespace errors) |

Ephemeral local Postgres 16 used for migrate/test:db (not Neon).

---

## 20. Parallélisation avec T6

- T2 reserved migration `1754600000000_*`; T6 reserved `1754600001000_*`.
- T2 did **not** modify `captureFinOpsUsage.ts` or any T6 audit modules.
- Avoided shared touchpoints: `createFinOpsPool.ts`, `finops/index.ts`, package/CI, compose D2D3.
- **HANDOFF FINALIZATION HOLD — SIBLING T6 VALIDATION SERIALIZATION**

---

## 21. Réserves

- No real provider tariffs configured (by design).
- FX policy still open.
- T3/T4/T5/T6/T7 / Neon / provider-real not in scope.
- Future T6-ext hooks for aggregate/recon audit events not implemented.

---

## 22. Hors scope

T3 alerts, T4 enforcement, T5 override, T6 audit foundation, Neon, provider-real, real tariffs, FX, UI, cron, queues, IAM.

---

## 23. Git final

- Branch: `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t2-aggregation-reconciliation`
- HEAD unchanged vs main: `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c`
- Untracked Delivery artifacts + docs 138–142; **no project commit**

### Hashes 138–141 (preserved)

| Doc | SHA-256 |
|-----|---------|
| 138 | `54964202c785df64011c351001b8db60b4d651b5dc9c075fbcedefbae1f7c87a` |
| 139 | `0aaf10541776bc64671d02e53b7df76ee01bb7c88e56cdf116d9268e719a615f` |
| 140 | `e69cfedcdfdfd4bf3b94c35b28ac68fc4ca5dfbd5f5b6df52dcd5d11050aeb4b` |
| 141 | `96c16ce9de9020596c74908d7976297295cb38ebc7b79e0d333d02aad78806a4` |

---

## 24. Verdict

```
T2 LOCAL DELIVERY IMPLEMENTATION COMPLETE —
TESTS EXECUTED —
REVIEW PACK PREPARED —
NO PROJECT COMMIT —
NO PROJECT PUSH —
HANDOFF FINALIZATION HOLD —
T6-FOUNDATION CHATGPT VALIDATION REQUIRED BEFORE T2 HANDOFF PUBLICATION
```

**Statut:** LOCAL COMPLETE — HANDOFF HOLD (not READY for handoff publication)

---

## 25. ChatGPT Validation Correction — A1 Multi-currency / Multi-instance

- **date_cest:** 2026-08-07 13:44:01 CEST (+0200)
- **date_utc:** 2026-08-07 11:44:01 UTC
- **GO:** Morris `ok go` — correction bornée A1 multi-currency + multi-instance only
- **Incoming ChatGPT verdict:** `FINOPS TECHNICAL LOT T2 — NOT READY`
- **Incoming handoff:** tip `49884691692e058622c466e24ad4675518bc5ca3` / blob `5ff4d559db080b045d6f857bd06899854ebe17c6`

### Findings

1. **BLOCKER** — A1 multi-currency rebuild unsafe: per-currency `recomputeAggregates` + `DELETE project_id+period_start` wiped sibling currencies.
2. **RESERVE** — A1 multi-instance serialization not demonstrated.

### Root cause

`reconcileProjectPeriod` rebuilt once per touched currency. Each `replaceProjectPeriodAggregates` deleted the entire project/period projection then inserted only the filtered currency set.

### Correction applied

- Removed public per-currency rebuild (`RecomputeAggregatesInput.currency` deleted).
- `recomputeAggregates` always full project/period (all currencies) under exclusive serialization.
- `reconcileProjectPeriod` calls rebuild **once** after the batch; result returns `aggregates[]` (not ambiguous singular `aggregate`).
- PostgreSQL: `withExclusiveProjectPeriodRebuild` uses **one** `PoolClient` + `BEGIN` + `pg_advisory_xact_lock(hashtext('finops-a1:'||projectId), hashtext(periodStart))` covering authoritative cost-event read → derive → replace → `COMMIT`/`ROLLBACK` (lock released with transaction; no session lock retention; no global FinOps lock; waiters use their own connection/transaction).

### Tests added

- Unit: multi-currency full rebuild preservation.
- PG: USD+EUR rebuild; USD late correction preserves EUR.
- PG: concurrent insert+rebuild without lost updates (USD sum + EUR preserved).
- PG recon: USD+EUR batch + USD-only late batch preserves EUR.

### Validation results (post-correction)

| Commande | Résultat |
|----------|----------|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `npm test` | PASS — 144 files / **1439** tests |
| `npm run migrate:up` | PASS |
| `npm run test:db` | PASS — **20** tests |
| `git diff --check` | PASS |

### Reserves remaining

- No real provider tariffs; FX open; T3–T7/Neon out of scope.
- Sibling T6: global runtime audit composition still deferred (untouched).
- Memory mutex is unit-test only; multi-instance proof is PostgreSQL advisory lock.

### Verdict after correction

```
FINOPS TECHNICAL LOT T2 CORRECTION COMPLETE —
A1 FULL PROJECT/PERIOD MULTI-CURRENCY REBUILD VERIFIED —
NO PER-CURRENCY DESTRUCTIVE REBUILD PATH —
PROJECT/PERIOD MULTI-INSTANCE SERIALIZATION VERIFIED —
LOCK COVERS AUTHORITATIVE READ → DERIVE → REPLACE —
CONCURRENT REBUILD TEST PASSED —
MULTI-CURRENCY USD/EUR TEST PASSED —
M2 numeric(20,8) PRESERVED —
R3 PRESERVED —
HALF_EVEN PRESERVED —
RECONCILIATION PRESERVED —
T1 REGRESSION PASSED —
T6 UNTOUCHED —
DOCUMENTS 138–141 PRESERVED —
DOCUMENT 142 UPDATED —
FULL TEST SUITE PASSED —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
REVIEW HANDOFF REMOTE VERIFIED —
READY FOR CHATGPT REVALIDATION
```
