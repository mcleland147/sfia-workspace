# 141 — FinOps Technical Lot T2 — Numeric Precision / Scale / Rate Representation / Rounding Decisions Applied

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/141-assistant-sfia-native-openai-finops-technical-lot-t2-numeric-precision-scale-decisions-applied.md`
**Cycle:** 6 — Architecture technique · Decisions Applied — T2 Numeric Precision / Scale / Rate / Rounding
**Profil:** Critical
**Typologie:** EVOL / DOC / ARCH
**Statut:** DECISIONS APPLIED WITH RESERVES — NO DELIVERY

---

## 1. Statut et anti-claims

| Claim | Statut |
|-------|--------|
| D-T2-NUMERIC-PS-01 = numeric(20,8) SELECTED BY MORRIS | **TRUE** |
| D-T2-PRICE-RATE-REPRESENTATION-01 = R3 SELECTED BY MORRIS | **TRUE** |
| D-T2-PRICE-RATE-PS-01 = NOT REQUIRED UNDER R3 | **TRUE** |
| D-T2-ROUNDING-01 = HALF_EVEN SELECTED BY MORRIS | **TRUE** |
| Exact p/s reserve CLOSED | **TRUE** |
| D-T2-MONEY-01 M2 remains SELECTED | **TRUE** |
| FIND-03 remains CLOSED (decision level) | **TRUE** |
| Money / DDL / Decimal library implemented | **FALSE** |
| Provider tariffs / concrete billing quanta invented | **FALSE** |
| T2 / T6-foundation Delivery authorized | **FALSE** |
| Documents 138 / 139 / 140 modified | **FALSE** — preserved byte-identical |
| Code / SQL / migration / package / CI modified | **FALSE** |
| Project commit / push / PR / merge | **FALSE** |
| Candidate from 140 = decision without Morris GO | **FALSE** — GO `ok go` consumed the referent gate |

---

## 2. Autorité Morris

Morris decides. Cursor applies decisions exactly without silent enrichment.
ChatGPT validates. Git is source of truth for hashes and files.
CKC architecture pilot = candidate guidance only — **no execution authority**.

---

## 3. GO exact + référent approuvé

**GO Morris reçu :**

```
ok go
```

**Référent approuvé par ce GO (reproduit intégralement) :**

```
GO DECISIONS FINOPS TECHNICAL LOT T2 — NUMERIC PRECISION/SCALE —

D-T2-NUMERIC-PS-01 =
numeric(20,8) —

D-T2-PRICE-RATE-REPRESENTATION-01 =
R3 — VERSIONED CATALOG MONEY AMOUNT PER EXPLICIT BILLING QUANTUM —
USE D-T2-NUMERIC-PS-01 FOR MONEY AMOUNTS —
NO SEPARATE PRICE-RATE NUMERIC TYPE REQUIRED BY DEFAULT —

D-T2-PRICE-RATE-PS-01 =
NOT REQUIRED UNDER R3 —

D-T2-ROUNDING-01 =
HALF-EVEN AT RATE × USAGE → MONEY QUANTIZATION BOUNDARY —
ROUND ONCE TO SCALE 8 —
NO AUTHORITATIVE JAVASCRIPT FLOAT CALCULATION —

T2 DELIVERY =
NOT YET AUTHORIZED —

T6-FOUNDATION DELIVERY =
NOT YET AUTHORIZED
```

Interprétation : application **documentaire exacte** de ces décisions uniquement.

---

## 4. Horodatages

| Événement | Valeur |
|-----------|--------|
| GO Morris | 2026-08-07 ~12:31 CEST (+0200) — secondes exactes non inventées |
| Application documentaire | 2026-08-07 12:34:11 CEST (+0200) / 10:34:11 UTC |

---

## 5. Git Truth

| Check | Value |
|-------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| Branche | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t2-t5-t6-grouped-preparation` |
| HEAD / origin/main | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |
| Status avant 141 | `?? .tmp-sfia-review/` · `?? 138` · `?? 139` · `?? 140` |
| Staged / upstream | vide / aucun |
| Handoff entrant | tip `d573bae489e0c698ce7fa96335e4bcc23a37f23a` · blob `2c8c0330c458a5c6ea9aa2b9fd5e6d4b61de8c96` |

---

## 6. Sources

Méthode : cycle template, routing, OM, guardrails, checklist, CKC pilot 03 (candidate), publisher.
Projet : 103, 123, 125, 135–140.
Handoff : T2 numeric precision/scale Decision Pack.
Runtime : not written.

---

## 7. Relation 138 / 139 / 140 / 141

| Doc | Role |
|-----|------|
| **138** | Grouped preparation T2/T5/T6 — historical pre-arbitration |
| **139** | T2 decisions applied (M2, price catalog, A1, recon trigger) |
| **140** | Decision Pack p/s — historical candidates **pre-arbitration** (remain visible; not rewritten) |
| **141** | Authoritative **post-arbitration** record for p/s + R3 + PRICE-RATE-PS + HALF_EVEN |

138 / 139 / 140 are **IMMUTABLE** in this cycle.

---

## 8. État décisionnel avant ce GO

| ID | Avant |
|----|-------|
| D-T2-MONEY-01 | M2 SELECTED |
| D-T2-NUMERIC-PS-01 | candidate numeric(20,8) in 140 — **NOT SELECTED** |
| D-T2-PRICE-RATE-REPRESENTATION-01 | candidate R3 in 140 — **NOT SELECTED** |
| D-T2-PRICE-RATE-PS-01 | not required under R3 (candidate stance) — **not decided** |
| D-T2-ROUNDING-01 | optional gate proposed — **NOT SELECTED** |
| Exact p/s reserve | OPEN — must bound before DDL |
| FIND-03 | CLOSED decisionally · impl NOT PERFORMED |
| T2 / T6-foundation Delivery | NOT AUTHORIZED |

---

## 9. D-T2-NUMERIC-PS-01

**Value:** `numeric(20,8)`
**Status:** **SELECTED BY MORRIS**

| Parameter | Value |
|-----------|--------|
| precision `p` | 20 |
| scale `s` | 8 |
| integer digits | 12 |
| minimum representable quantum | `10^-8` currency unit |

**Future usage (when Delivery authorized):**
- per-run Money amount
- correction Money amount
- observed / billed Money amount
- A1 derived aggregate Money amount

**Currency:** explicit and separate from the amount (M2).

**M2 remains intangible:** exact decimal · no authoritative JS `Number`/float · PG numeric/string or exact decimal boundary · **no implementation in this cycle**.

**Anti-claim:** `p/s decided ≠ DDL implemented`.

---

## 10. Fermeture réserve p/s

**Before (139/140):**
`EXACT POSTGRESQL NUMERIC PRECISION/SCALE NOT YET FIXED — MUST BE BOUNDED BEFORE T2 DDL IMPLEMENTATION.`

**After:**

```
EXACT POSTGRESQL NUMERIC PRECISION/SCALE RESERVE =
CLOSED BY D-T2-NUMERIC-PS-01.
```

Implementation of columns/types remains **NOT PERFORMED**.

---

## 11. D-T2-PRICE-RATE-REPRESENTATION-01

**Value:** R3 — versioned catalog Money amount per explicit billing quantum
**Status:** **SELECTED BY MORRIS**

### Contract
The versioned server-side price catalog (D-T2-PRICE-SRC-01) represents a tariff as:
- a **Money amount** using `D-T2-NUMERIC-PS-01 = numeric(20,8)` ;
- associated with an **explicit unit** ;
- associated with an **explicit billing quantum**.

Unit and quantum belong to the **catalog entry contract**.

### Explicitly NOT invented here
- concrete unit values
- token / 1k / 1M as a global convention
- provider-specific schema
- real tariffs

Each catalog entry **must** declare its own unit/quantum.
Future calculation uses the catalog’s declared convention conceptually as Money/quantum × usage — **not encoded as runtime in this cycle**.

R3 avoids a finer default rate scale.

---

## 12. D-T2-PRICE-RATE-PS-01

**Status:** **NOT REQUIRED UNDER R3**

This is **not** OPEN.
This is **not** `numeric(24,12)`.

The `numeric(24,12)` candidate in document **140** remains **historical only** for the rejected R2 scenario.

If pricing representation is later reopened toward R2: **new Morris gate required**.

---

## 13. D-T2-ROUNDING-01

**Value:** `HALF_EVEN` (IEEE-style round half to even)
**Status:** **SELECTED BY MORRIS**

**Boundary:** rate × usage → Money quantization boundary.
**Quantize once** to scale 8.
**No authoritative JavaScript float calculation.**

### Rules

1. All authoritative calculations use exact decimal representation.
2. No authoritative path through JS `Number`/float.
3. Preserve necessary intermediate precision during calculation.
4. Quantize to Money scale 8 at the boundary that **produces** the Money amount.
5. Apply **ROUND HALF TO EVEN** when the exact value is exactly midway between two `10^-8` quanta.
6. Perform this quantization **once** for the Money produced by rate × usage.
7. Do **not** re-round on simple SUM of values already quantized to the same scale.
8. A1 rebuild must apply the same deterministic contract.
9. Reconciliation estimated / observed / billed must use the same Money contract.

No Decimal library is selected in this cycle.
Future Delivery must prove HALF_EVEN conformity with **tie-case tests**.

### Conceptual mathematical examples (fictitious — no provider tariffs)

Scale = 8. Midpoint between two scale-8 neighbors is directed to the neighbor whose retained last digit is **even**.

| Exact value (conceptual) | Neighbors at scale 8 | HALF_EVEN result |
|--------------------------|----------------------|------------------|
| `1.000000015` exactly midway toward …0016 vs …0014 if framed at that digit boundary | (illustrative midpoint case) | choose even last digit |
| `2.500000005` exactly at midpoint between `2.50000000` and `2.50000001` | last digit 0 (even) vs 1 (odd) | `2.50000000` |
| `2.500000015` exactly at midpoint between `2.50000001` and `2.50000002` | 1 (odd) vs 2 (even) | `2.50000002` |

Examples are pedagogical only; Delivery tests must use precise decimal fixtures.

---

## 14. Contrat de quantification

```
INPUT: exact decimal (rate_money_per_quantum, usage_count, quantum) per catalog entry
PROCESS: exact decimal arithmetic — no JS float
BOUNDARY: produce Money amount
QUANTIZE: once to scale 8 using HALF_EVEN
STORE/COMPARE: numeric(20,8) + explicit currency
AGGREGATE SUM: no additional rounding of already scale-8 values
REBUILD A1: identical contract
```

---

## 15. Effet sur Money / catalogue

| Concern | Effect |
|---------|--------|
| Money columns (future) | `numeric(20,8)` + currency |
| Catalog tariff | Money(20,8) + unit + quantum per entry |
| Separate rate numeric type | **Not required** under R3 |
| Tariffs / quanta values | Still unset — Delivery/catalog content gates |

---

## 16. Effet sur A1

- Aggregate amount columns use `numeric(20,8)`.
- Rebuild from ledger/events must re-apply rate×usage HALF_EVEN once per produced Money, then SUM without re-round.
- Ledger remains authoritative; aggregates remain derived/rebuildable.

---

## 17. Effet sur reconciliation

- estimated / observed / billed Money share `numeric(20,8)`.
- Corrections/deltas within scale 8.
- Same HALF_EVEN contract when a Money is freshly produced from rate×usage.
- Failures remain FinOps-side; do not rewrite user-run success (T1).

---

## 18. État T2 complet avant Delivery

| ID | Status |
|----|--------|
| D-T2-MONEY-01 | **M2 SELECTED** |
| D-T2-NUMERIC-PS-01 | **numeric(20,8) SELECTED** |
| D-T2-PRICE-SRC-01 | Versioned server-side estimation catalog SELECTED |
| D-T2-PRICE-RATE-REPRESENTATION-01 | **R3 SELECTED** |
| D-T2-PRICE-RATE-PS-01 | **NOT REQUIRED UNDER R3** |
| D-T2-ROUNDING-01 | **HALF_EVEN SELECTED** |
| D-T2-AGG-FORM-01 | A1 SELECTED · ledger authoritative · rebuildable |
| D-T2-RECON-TRIGGER-01 | Explicit reconcile · on-demand + bounded batch · no cron |
| FIND-03 | CLOSED decisionally |
| Exact p/s reserve | **CLOSED** |
| Money implementation | **NOT PERFORMED** |
| T2 Delivery | **NOT YET AUTHORIZED** |
| T6-foundation Delivery | **NOT YET AUTHORIZED** |
| Estimated cost never blocks | preserved |

---

## 19. Décisions non prises

- TypeScript Decimal library / npm package
- DDL / exact column names / table DDL shapes
- Concrete tariff values
- Concrete provider units/quanta
- FX
- Provider billed adapter
- Neon / provider-real
- T2 Delivery / T6-foundation Delivery
- T5 / T3 / T4 / T7 / LOT-D*

---

## 20. Gates Morris restantes

1. Distinct **GO Delivery T2**
2. Distinct **GO Delivery T6-foundation**
3. Decimal library **only if** Delivery proves it required
4. T5 authority / foundation
5. GO Delivery T5
6. T3 / T4 / T7
7. Neon
8. provider-real
9. Threshold calibration before real usage
10. LOT-D*

**Numeric(p,s) bound is no longer an open gate** after this cycle.

---

## 21. Réserves

| Item | Status |
|------|--------|
| Exact p/s | **CLOSED** by D-T2-NUMERIC-PS-01 |
| FIND-03 | CLOSED decisionally · impl NOT PERFORMED |
| Money implementation | NOT PERFORMED |
| Catalog unit/quantum concrete values | OPEN until catalog content designed under Delivery GO |
| Decimal library | NOT SELECTED |
| R-TECH-TTL / HARD / USD calibration | unchanged |
| Neon / provider-real | NOT DONE |
| T5 full authority | pending separate gates |

---

## 22. Anti-claims

- Decisions applied ≠ Delivery authorized
- numeric(20,8) SELECTED ≠ DDL created
- R3 SELECTED ≠ tariffs loaded
- HALF_EVEN SELECTED ≠ library chosen / code shipped
- 140 candidates remain historical · 141 is authoritative for these four outcomes
- No code · no SQL · no migration · no package · no CI
- No project commit · no project push · no PR · no merge

---

## 23. Verdict

```
FINOPS T2 NUMERIC PRECISION/SCALE DECISIONS APPLIED —
D-T2-NUMERIC-PS-01 numeric(20,8) SELECTED BY MORRIS —
D-T2-PRICE-RATE-REPRESENTATION-01 R3 SELECTED BY MORRIS —
D-T2-PRICE-RATE-PS-01 NOT REQUIRED UNDER R3 —
D-T2-ROUNDING-01 HALF_EVEN SELECTED BY MORRIS —
ROUND ONCE AT RATE × USAGE → MONEY QUANTIZATION BOUNDARY —
NO AUTHORITATIVE JAVASCRIPT FLOAT CALCULATION —
NUMERIC PRECISION/SCALE RESERVE CLOSED —
M2 REMAINS SELECTED —
FIND-03 REMAINS CLOSED —
MONEY IMPLEMENTATION NOT PERFORMED —
DOCUMENTS 138/139/140 PRESERVED —
DOCUMENT 141 CREATED —
NO T2 DELIVERY —
NO T6-FOUNDATION DELIVERY —
NO CODE / SQL / MIGRATION / PACKAGE / CI MODIFICATION —
NO PROJECT COMMIT —
NO PROJECT PUSH —
READY FOR SEPARATE T2 AND T6-FOUNDATION DELIVERY GATES
```

**Statut:** READY WITH RESERVES
