# ChatGPT Review Pack — FULL
## FinOps Technical Lot T2 Decisions Applied

| Champ | Valeur |
|-------|--------|
| **Date/heure CEST** | 2026-08-07 12:08:42 CEST (+0200) |
| **Date/heure UTC** | 2026-08-07 10:08:42 UTC |
| **Niveau** | Full |
| **Cycle** | 6 — Architecture technique · Decisions Applied — FinOps Technical Lot T2 |
| **Profil** | Critical |
| **GO Morris** | `GO DECISIONS FINOPS TECHNICAL LOT T2 —` (D-T2-MONEY-01=M2 · PRICE-SRC · AGG-FORM=A1 · RECON-TRIGGER · FIND-03 CLOSE · T2/T6 Delivery NOT YET AUTHORIZED) |
| **Décision Morris horodatée** | 2026-08-07 12:01 CEST (+0200) — secondes non inventées |
| **Workspace** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| **Branche** | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t2-t5-t6-grouped-preparation` |
| **HEAD / origin/main** | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` / `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |
| **Handoff entrant** | tip `79663b03c8d7eff1f4a4e2e79930bbaa0a934f4b` · blob `a012637c64439d3355514bc18bc0c3f9cf0a2ea5` |
| **CKC** | pilots/03-architecture-technique.md — candidate — no authority |

## Garde-fous

- 138 IMMUTABLE byte-identical
- 139 only new project file
- NO Delivery T2 / T6-foundation / T5 / T3+
- NO code / SQL / migration / package / CI
- NO project commit / push / PR / merge
- NO invented numeric(p,s) · NO Decimal library · NO provider prices
- T5/T6 prep decisions in 138 preserved as-is

## Local Git Truth

Status:
```
?? .tmp-sfia-review/
?? projects/sfia-studio/138-assistant-sfia-native-openai-finops-technical-lots-t2-t5-t6-grouped-preparation.md
?? projects/sfia-studio/139-assistant-sfia-native-openai-finops-technical-lot-t2-decisions-applied.md
```

Staged: empty · upstream: none

## Document 138 integrity

| | Value |
|--|-------|
| Path | `projects/sfia-studio/138-assistant-sfia-native-openai-finops-technical-lots-t2-t5-t6-grouped-preparation.md` |
| SHA-256 before | `54964202c785df64011c351001b8db60b4d651b5dc9c075fbcedefbae1f7c87a` |
| SHA-256 after | `54964202c785df64011c351001b8db60b4d651b5dc9c075fbcedefbae1f7c87a` |
| Lines | 745 |
| Preserved | **YES byte-identical** |

## Document 139

| | Value |
|--|-------|
| Path | `projects/sfia-studio/139-assistant-sfia-native-openai-finops-technical-lot-t2-decisions-applied.md` |
| SHA-256 | `0aaf10541776bc64671d02e53b7df76ee01bb7c88e56cdf116d9268e719a615f` |
| Lines | 413 |

## Matrice avant / après

| ID | Avant | Après |
|----|-------|-------|
| D-T2-MONEY-01 | NOT DECIDED | **M2 SELECTED** |
| D-T2-PRICE-SRC-01 | NOT DECIDED | **VERSIONED SERVER-SIDE PRICE CATALOG FOR ESTIMATION SELECTED** |
| D-T2-AGG-FORM-01 | NOT DECIDED | **A1 SELECTED** |
| D-T2-RECON-TRIGGER-01 | NOT DECIDED | **EXPLICIT RECONCILE + ON-DEMAND/BOUNDED BATCH SELECTED** |
| FIND-03 | OPEN | **CLOSED BY MORRIS MONEY DECISION** · impl NOT PERFORMED |

## Réserve numeric(p,s)

EXACT POSTGRESQL NUMERIC PRECISION/SCALE NOT YET FIXED — MUST BE BOUNDED BEFORE T2 DDL IMPLEMENTATION.
Does not reopen M1/M2/M3.

## Non-decisions / gates restantes

T2 Delivery · T6-foundation · p/s · Decimal lib · FX · tariffs · billed adapter · cron · Neon · provider-real · T5 auth · T6 store · T3/T4/T7 · LOT-D*
Gates: bound p/s · GO Delivery T2 · GO T6-foundation · T5 auth · GO T5 · T3/T4/T7 · Neon · provider-real · USD calibration · LOT-D*

## Fichiers créés / modifiés

| Action | Path |
|--------|------|
| CREATED | 139 (untracked) |
| UNCHANGED | 138 (hash identical) |
| NONE | code/SQL/migration/package/CI/103 |

## Review Handoff

| Field | Value |
|-------|--------|
| mode | publish-in-cycle |
| commit message | `docs(review-handoff): publish T2 decisions applied` |
| remote before | tip `79663b03…` · blob `a012637c…` |
| statut attendu | HANDOFF UPDATED — REMOTE VERIFIED |

## Verdict

```
FINOPS TECHNICAL LOT T2 DECISIONS APPLIED WITH RESERVES —
D-T2-MONEY-01 M2 SELECTED BY MORRIS —
FIND-03 CLOSED BY MONEY REPRESENTATION DECISION —
MONEY IMPLEMENTATION NOT PERFORMED —
EXACT POSTGRESQL NUMERIC PRECISION/SCALE STILL TO BE BOUNDED —
D-T2-PRICE-SRC-01 SELECTED —
VERSIONED SERVER-SIDE ESTIMATION CATALOG SELECTED —
NO PROVIDER PRICE VALUES INVENTED —
D-T2-AGG-FORM-01 A1 SELECTED —
LEDGER REMAINS AUTHORITATIVE —
DERIVED AGGREGATES MUST BE REBUILDABLE —
D-T2-RECON-TRIGGER-01 SELECTED —
ON-DEMAND + BOUNDED BATCH —
NO CRON / ALWAYS-ON POLLING —
DOCUMENT 138 PRESERVED BYTE-IDENTICAL —
DOCUMENT 139 CREATED —
NO T2 DELIVERY —
NO T6-FOUNDATION DELIVERY —
NO CODE / SQL / MIGRATION / PACKAGE / CI MODIFICATION —
NO PROJECT COMMIT —
NO PROJECT PUSH —
REVIEW HANDOFF REMOTE VERIFIED —
DISTINCT DELIVERY GATES STILL REQUIRED
```

---

# CONTENU COMPLET DU DOCUMENT 139

# 139 — FinOps Technical Lot T2 Decisions Applied

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/139-assistant-sfia-native-openai-finops-technical-lot-t2-decisions-applied.md`
**Cycle:** 6 — Architecture technique · Decisions Applied — FinOps Technical Lot T2
**Profil:** Critical
**Typologie:** EVOL / DOC / ARCH
**Statut:** DECISIONS APPLIED WITH RESERVES — NO DELIVERY

---

## 1. Statut et anti-claims

| Claim | Statut |
|-------|--------|
| D-T2-MONEY-01 M2 SELECTED BY MORRIS | **TRUE** |
| FIND-03 closed at decision level | **TRUE** |
| Money / numeric DDL / Decimal library implemented | **FALSE** |
| Exact PostgreSQL numeric(p,s) fixed | **FALSE** — residual bound required before T2 DDL |
| Provider prices invented or hardcoded | **FALSE** |
| T2 Delivery authorized / executed | **FALSE** |
| T6-foundation Delivery authorized / executed | **FALSE** |
| T5 / T3 / T4 / T7 / LOT-D* advanced | **FALSE** |
| Document 138 modified | **FALSE** — preserved byte-identical |
| Code / SQL / migration / package / CI modified | **FALSE** |
| Project commit / push / PR / merge | **FALSE** |
| Cron / always-on polling selected for T2 | **FALSE** |
| Recommendation from 138 = decision | **FALSE** — Morris GO overrides prior candidate reco (incl. prior M1 candidate) |

---

## 2. Autorité Morris

Morris decides. Cursor applies decisions exactly without silent enrichment.
ChatGPT validates coherence. Git remains source of truth for files and hashes.
CKC `pilots/03-architecture-technique.md` = candidate experimental guidance only — **no execution authority**; Morris GO in this cycle prevails.

---

## 3. GO Morris exact (consommé)

```
GO DECISIONS FINOPS TECHNICAL LOT T2 —

D-T2-MONEY-01 =
M2 — DECIMAL / POSTGRESQL NUMERIC WITH EXPLICIT SCALE + CURRENCY —
NO AUTHORITATIVE JAVASCRIPT FLOAT CALCULATION —

D-T2-PRICE-SRC-01 =
VERSIONED SERVER-SIDE PRICE CATALOG FOR ESTIMATION —
ESTIMATED COST NEVER BLOCKS —
OFFICIAL OBSERVED / BILLED IMPORT DEFERRED TO A DISTINCT SOURCE ADAPTER —
NO INVENTED OR HARDCODED PROVIDER PRICES —

D-T2-AGG-FORM-01 =
A1 — DURABLE POSTGRESQL DERIVED AGGREGATES —
LEDGER REMAINS AUTHORITATIVE —
AGGREGATES MUST BE FULLY REBUILDABLE FROM LEDGER —

D-T2-RECON-TRIGGER-01 =
EXPLICIT RECONCILE PROJECT/PERIOD SERVICE —
ON-DEMAND + BOUNDED BATCH —
NO CRON / ALWAYS-ON POLLING IN T2 —

FIND-03 =
CLOSE BY T2 MONEY DECISION —

T2 DELIVERY =
NOT YET AUTHORIZED —

T6-FOUNDATION DELIVERY =
NOT YET AUTHORIZED
```

---

## 4. Horodatage

| Fuseau | Valeur |
|--------|--------|
| Décision Morris (annoncée) | 2026-08-07 12:01 CEST (+0200) — secondes exactes non inventées |
| Application documentaire (ce cycle) | 2026-08-07 12:07:12 CEST (+0200) / 10:07:12 UTC |

---

## 5. Local Git Truth

| Check | Value |
|-------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| Branche | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t2-t5-t6-grouped-preparation` |
| HEAD | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |
| origin/main | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |
| Status avant | `?? .tmp-sfia-review/` · `?? …/138-….md` |
| Staged | vide |
| Upstream | aucun |
| Handoff entrant | tip `79663b03c8d7eff1f4a4e2e79930bbaa0a934f4b` · blob `a012637c64439d3355514bc18bc0c3f9cf0a2ea5` |

---

## 6. Sources

### Méthode (read-only)
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` (candidate · no authority)
- `scripts/sfia/publish-review-handoff.sh`

### Projet (read-only)
- `103` backlog · `123` / `125` IP-0C · `135` / `136` / `137` T1
- **Primary pre-arbitration:** `138-…-t2-t5-t6-grouped-preparation.md`
- Handoff entrant grouped preparation tip `79663b03…`

Runtime: not written; T1 Money absence already established on main — no contradiction with applying M2 as future representation.

---

## 7. Relation 138 → 139

| Document | Role |
|----------|------|
| **138** | Historical **pre-arbitration** grouped preparation T2+T5+T6 · options · candidate recommendations · conflict matrices |
| **139** | Authoritative **post-arbitration** record for the **four T2 decisions** in the GO |

**138 is IMMUTABLE in this cycle** — byte-identical preservation required.
Do **not** rewrite 138 option tables. Prior candidate recommendation (M1) in 138 remains historical; **Morris selected M2**.

T5 / T6 preparation content in 138 is **unchanged and not re-arbitrated** here.

---

## 8. Matrice avant / après

| ID / Item | Avant (138 / état préparatoire) | Après (ce GO / 139) |
|-----------|----------------------------------|---------------------|
| **D-T2-MONEY-01** | NOT DECIDED · FIND-03 OPEN · D-T1-MONEY-01 = DEFER TO T2 · M1/M2/M3 open · candidate reco M1 ≠ SELECTED | **M2 SELECTED BY MORRIS** |
| **D-T2-PRICE-SRC-01** | NOT DECIDED | **VERSIONED SERVER-SIDE PRICE CATALOG FOR ESTIMATION SELECTED** |
| **D-T2-AGG-FORM-01** | NOT DECIDED (A1/A2 open · candidate A1) | **A1 DURABLE POSTGRESQL DERIVED AGGREGATES SELECTED** |
| **D-T2-RECON-TRIGGER-01** | NOT DECIDED (on-demand/batch/cron open) | **EXPLICIT RECONCILE PROJECT/PERIOD SERVICE + ON-DEMAND/BOUNDED BATCH SELECTED** |
| **FIND-03** | OPEN / DEFERRED TO MONEY | **CLOSED BY MORRIS MONEY REPRESENTATION DECISION** · Implementation **NOT PERFORMED** |
| T2 Delivery | NOT AUTHORIZED | **NOT YET AUTHORIZED** (unchanged) |
| T6-foundation Delivery | NOT AUTHORIZED | **NOT YET AUTHORIZED** (unchanged) |

---

## 9. D-T2-MONEY-01

**Value:** `M2 — DECIMAL / POSTGRESQL NUMERIC WITH EXPLICIT SCALE + CURRENCY`
**Status:** **SELECTED BY MORRIS**

### Principles decided
- Authoritative amount represented as **exact decimal** (not IEEE float as source of truth)
- Future persistence: PostgreSQL **`numeric(p,s)`** with **scale explicitly frozen before DDL creation**
- **Currency** stored explicitly with amounts
- **No authoritative JavaScript `Number`/float calculation**
- Conversion / validation at boundaries
- Exact aggregation compatible with decimal semantics

### Explicitly NOT selected by this decision
- Exact precision `p`
- Exact scale `s`
- Any concrete example such as `numeric(20,6)`, `numeric(18,6)`, `numeric(24,8)`
- Any TypeScript Decimal library choice
- FX policy
- Mandatory single-currency product rule (currency field required; FX still open)

### Anti-claims
- M2 SELECTED ≠ Money implemented
- M2 SELECTED ≠ `numeric(p,s)` fixed
- M2 SELECTED ≠ Decimal npm package selected
- Prior 138 candidate M1 ≠ decision

### Continuity
- `D-T1-MONEY-01 = DEFER TO T2` is satisfied by this T2 arbitration
- M1/M2/M3 options are **not reopened** — M2 is decided

---

## 10. FIND-03 closure

**Before:** OPEN / ACCEPTED RESERVE · deferred to Money / T2
**After:**

```
FIND-03 = CLOSED BY MORRIS MONEY REPRESENTATION DECISION —
IMPLEMENTATION NOT YET PERFORMED.
```

**Decision-level closure only.**
No columns, types, migrations, libraries, or runtime Money paths are created in this cycle.

---

## 11. Réserve — exact PostgreSQL numeric precision/scale

```
EXACT POSTGRESQL NUMERIC PRECISION/SCALE NOT YET FIXED —
MUST BE BOUNDED BEFORE T2 DDL IMPLEMENTATION.
```

| Nature | Classification |
|--------|----------------|
| Does it reopen M1/M2/M3? | **NO** — M2 remains SELECTED |
| Does it block documentary application of D-T2-MONEY-01? | **NO** |
| Does it block T2 Delivery DDL without a further bound? | **YES** — require bound (or explicit Morris confirmation of p/s) before creating Money DDL |
| Gate residual | Listed in §18 item 1 |

No `p`/`s` value is invented in this document.

---

## 12. D-T2-PRICE-SRC-01

**Value:** Versioned server-side price catalog for estimation
**Status:** **SELECTED BY MORRIS**

### Principles decided
- Server-side catalog
- Versioned
- Future access behind an appropriate port/boundary
- Local estimation authorized from catalog
- **Estimated cost never blocks**
- No invented price data
- No provider prices hardcoded in domain
- Official observed / billed import **deferred** to a **distinct source adapter**
- Billed / official observed remain separate from estimation

### Explicitly NOT selected
- External pricing API
- Concrete provider format / endpoint / refresh frequency
- OpenAI tariff values
- Download mechanism
- Concrete billed adapter implementation

### Anti-claim
`price catalog selected as architecture ≠ provider prices configured`

---

## 13. D-T2-AGG-FORM-01

**Value:** A1 — Durable PostgreSQL derived aggregates
**Status:** **SELECTED BY MORRIS**

### Principles decided
- T1 ledger remains **authoritative**
- Aggregates = derived projection
- Durable PostgreSQL storage
- Aggregates **fully rebuildable** from ledger
- No business-authoritative data that exists only in aggregates
- Full rebuild = expected recovery mechanism
- Late events / corrections must be able to drive recalculation
- Future T3/T4 reads may use aggregates without degrading ledger truth

### Explicitly NOT done now
- No DDL
- No aggregate table creation
- No indexes invented beyond the decision to use durable derived tables

---

## 14. D-T2-RECON-TRIGGER-01

**Value:** Explicit reconcile project/period service · on-demand + bounded batch
**Status:** **SELECTED BY MORRIS**

### Principles decided
- Explicit application service scoped to project/period
- On-demand trigger
- Bounded batch allowed
- **No cron in T2**
- **No always-on polling**
- Retry / idempotence to be bounded in future Delivery (not invented here)
- Reconciliation remains FinOps-side
- Reconciliation failure does **not** retroactively turn a successful user run into failure

### Explicitly NOT selected
- Queue / worker / external scheduler
- Cron
- Permanent polling
- Provider orchestration platform

---

## 15. Impacts sur futur T2 Delivery

When a distinct **GO Delivery T2** is granted, Delivery must:

1. Bound `numeric(p,s)` (or obtain Morris confirmation) **before** Money DDL
2. Implement M2 without authoritative JS float math
3. Introduce versioned server-side estimation catalog behind a port — **no hardcoded provider tariffs**
4. Create durable aggregate tables (A1) rebuildable from `finops_usage_event`
5. Implement explicit `reconcileProjectPeriod` (name illustrative) with on-demand + bounded batch — no cron
6. Preserve estimated → observed → billed history via events
7. Preserve T1 fail-open for user runs
8. Not implement T3 alerts / T4 enforcement / T5 override / Neon / provider-real unless separately authorized

This document does **not** authorize that Delivery.

---

## 16. Impacts sur futur T6-foundation

T6-foundation remains **NOT YET AUTHORIZED**.
T2 decisions imply future audit events (e.g. aggregate recalculated, reconciliation failed, unknown cost) but do **not**:

- select T6 audit store option
- authorize T6 Delivery
- require T6 to start before T2

Scenario B from 138 (T2 ∥ T6-foundation) remains a **recommendation**, not a GO.

---

## 17. Décisions non prises (explicit)

- T2 Delivery
- T6-foundation Delivery
- Exact `numeric(p,s)`
- Decimal library
- FX policy
- Provider price values
- Billed import format / adapter concrete shape
- Reconciliation queue/cron/scheduler
- Neon
- provider-real
- T5 authority (`D-T5-AUTH-01` etc.)
- T6 audit store (`D-T6-AUDIT-STORE-01`)
- T3 / T4 / T7
- LOT-D*
- Any change to T5/T6 SELECTED IP-0C decisions beyond leaving them as prepared in 138

---

## 18. Gates Morris restantes

1. Bound exact PostgreSQL `numeric(p,s)` before T2 DDL
2. Distinct **GO Delivery T2**
3. Distinct **GO Delivery T6-foundation**
4. T5 authority decisions (`D-T5-AUTH-01` / foundation allow)
5. Distinct **GO Delivery T5**
6. Distinct T3 / T4 / T7 gates
7. Distinct Neon integration
8. Distinct provider-real validation
9. Calibration 15/20/25/30 USD before real threshold usage when required
10. Distinct LOT-D*

**This GO does not consume any of the above.**

---

## 19. Réserves

| Item | Status after this cycle |
|------|-------------------------|
| FIND-03 | **CLOSED** at decision level · implementation NOT PERFORMED |
| Exact numeric(p,s) | **OPEN residual** — must bound before DDL |
| FIND-07 | NOTE (unchanged) |
| R-TECH-TTL-01 | KEEP-OPEN |
| R-TECH-FINOPS-HARD-01 | KEEP-OPEN |
| Calibration 15/20/25/30 USD | provisional / recalibration required |
| TB-04-04 / TB-02-05 | NOT DONE / PRESERVED |
| Neon / provider-real | NOT DONE |
| T5 full authority | still blocked / foundation pending separate gates |
| Document 124 absent | NOTE (unchanged) |

---

## 20. Anti-claims (final)

- Decisions applied ≠ Delivery authorized
- FIND-03 closed ≠ Money shipped
- M2 ≠ p/s chosen
- Catalog architecture ≠ tariffs loaded
- A1 selected ≠ tables created
- On-demand/batch selected ≠ scheduler deployed
- 138 unchanged · 139 is the T2 decisions record
- No code · no SQL · no migration · no package · no CI
- No project commit · no project push · no PR · no merge

---

## 21. Verdict

```
FINOPS TECHNICAL LOT T2 DECISIONS APPLIED WITH RESERVES —
D-T2-MONEY-01 M2 SELECTED BY MORRIS —
FIND-03 CLOSED BY MONEY REPRESENTATION DECISION —
MONEY IMPLEMENTATION NOT PERFORMED —
EXACT POSTGRESQL NUMERIC PRECISION/SCALE STILL TO BE BOUNDED —
D-T2-PRICE-SRC-01 SELECTED —
VERSIONED SERVER-SIDE ESTIMATION CATALOG SELECTED —
NO PROVIDER PRICE VALUES INVENTED —
D-T2-AGG-FORM-01 A1 SELECTED —
LEDGER REMAINS AUTHORITATIVE —
DERIVED AGGREGATES MUST BE REBUILDABLE —
D-T2-RECON-TRIGGER-01 SELECTED —
ON-DEMAND + BOUNDED BATCH —
NO CRON / ALWAYS-ON POLLING —
DOCUMENT 138 PRESERVED BYTE-IDENTICAL —
DOCUMENT 139 CREATED —
NO T2 DELIVERY —
NO T6-FOUNDATION DELIVERY —
NO CODE / SQL / MIGRATION / PACKAGE / CI MODIFICATION —
NO PROJECT COMMIT —
NO PROJECT PUSH —
DISTINCT DELIVERY GATES STILL REQUIRED
```

**Statut:** READY WITH RESERVES
