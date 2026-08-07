# ChatGPT Review Pack — FULL
## FinOps Technical Lots T2 + T5 + T6 Grouped Preparation

| Champ | Valeur |
|-------|--------|
| **Date/heure CEST** | 2026-08-07 11:56:46 CEST (+0200) |
| **Date/heure UTC** | 2026-08-07 09:56:46 UTC |
| **Niveau** | Full |
| **Cycle** | 6 — Architecture technique · Implementation Preparation · Grouped T2+T5+T6 |
| **Profil** | Critical |
| **Justification profil** | Trois lots partageant PostgreSQL/migrations/domaine/ports/composition ; Money différé ; override Morris-only ; audit durable — séparation incorrecte = dette avant T3/T4/T7 |
| **Typologie** | EVOL / DOC / ARCH |
| **GO Morris exact** | `GO préparation groupée T2 + T5 + T6, puis on décide séparément des Delivery selon les conflits et dépendances constatés.` |
| **Workspace** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| **Branche** | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t2-t5-t6-grouped-preparation` |
| **HEAD / origin/main** | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` / `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |
| **Handoff entrant** | tip `6188eb1496ddc2f8b4f31900db28b262da4ed2a9` · blob `6b1caca2aab95337c4c6ae4ae5fa09d2f003b8e7` |
| **CKC** | `pilots/03-architecture-technique.md` — candidate — experimental — **no execution authority** |

## Garde-fous / anti-claims

- NO Delivery T2/T5/T6 · NO T3/T4/T7 · NO LOT-D*
- NO code · NO SQL · NO migration · NO package · NO CI
- NO project commit · NO project push · NO PR · NO merge
- NO Money SELECTED · NO Neon · NO provider-real · NO credentials
- Recommendation ≠ Morris decision · Parallel-safe ≠ GO Delivery

## Local Git Truth

| Check | Value |
|-------|--------|
| Initial branch | main @ 093fd916… |
| Prep branch created | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t2-t5-t6-grouped-preparation` from 093fd916… |
| origin/main | 093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c (no drift) |
| T1 merge ancestor | OK |
| Status | `?? .tmp-sfia-review/
?? projects/sfia-studio/138-assistant-sfia-native-openai-finops-technical-lots-t2-t5-t6-grouped-preparation.md` |
| Staged | empty |
| Upstream prep | none · no push |

## Sources consultées

Méthode (template, routing, OM, guardrails, checklist, CKC pilot 03, pipeline, decision engine, publisher) · backlog 103 · 123/125 (124 absent) · 126/127 · 135/136/137 · handoff post-merge · runtime `oa/finops/**`, execution-run, decision/authority, migrations, package.json, CI workflow · discovery audit/clock/project IDs.

## T1 baseline réellement observée

- Ledger PG `finops_usage_event` usage-only · identity t1-v1 · fail-open coordinator · optional FinOps inject · CI-A SUCCESS historically
- Money/currency/price ABSENT · mapProviderUsage ABSENT · aggregates/override/durable FinOps audit ABSENT
- AuthorityResolver EXISTS (registry) · session Morris identity ABSENT → T5 full blocked / foundation possible
- FinOpsAuditEmitter best-effort only · durable obs = T6

## Fichier créé

| Path | SHA-256 | Lines |
|------|---------|-------|
| `projects/sfia-studio/138-assistant-sfia-native-openai-finops-technical-lots-t2-t5-t6-grouped-preparation.md` | `54964202c785df64011c351001b8db60b4d651b5dc9c075fbcedefbae1f7c87a` | 745 |

**Un seul fichier projet.** Aucun autre fichier modifié.

## Décisions encore ouvertes (extrait)

- `D-T2-MONEY-01` (FIND-03) M1/M2/M3 — MORRIS REQUIRED — candidate reco M1 NOT SELECTED
- `D-T2-PRICE-SRC-01` · `D-T2-AGG-FORM-01` · `D-T2-RECON-TRIGGER-01`
- `D-T5-AUTH-01` · `D-T5-FOUNDATION-01` · `D-T5-AUDIT-FAIL-01`
- `D-T6-AUDIT-STORE-01` (confirm O1)
- Distinct GO Delivery T2 / T5 / T6(-foundation)

## Matrice conflits (résumé)

| Pair | Status |
|------|--------|
| T2 ↔ T5 | PARALLEL-SAFE-WITH-CONTRACT |
| T2 ↔ T6-foundation | PARALLEL-SAFE |
| T2 ↔ T6-ext | SEQUENTIAL-RECOMMENDED |
| T5 ↔ T6 | PARALLEL-SAFE-WITH-CONTRACT / SEQUENTIAL if audit-first |

## Scénarios / recommandation

- A: T2→T6→T5 — coherent
- **B: T2 ∥ T6-foundation → T5 — RECOMMENDED (not decided)**
- C: triple parallel foundations — only with contracts; inferior to B

## Manifests / tests / risques

Détaillés dans document 138 §§ H.10, I.8, J.10, N, O, P.

## Réserves

FIND-03 OPEN · FIND-07 NOTE · R-TECH-TTL/HARD KEEP-OPEN · calibration USD · TB-04-04 · TB-02-05 · Neon · provider-real · 124 absent · 103 not updated this cycle.

## Git final (pre-handoff)

```
?? .tmp-sfia-review/
?? projects/sfia-studio/138-assistant-sfia-native-openai-finops-technical-lots-t2-t5-t6-grouped-preparation.md
```

name-status projet: only untracked 138 (+ .tmp-sfia-review/)

## Review Handoff

| Field | Value |
|-------|--------|
| mode | publish-in-cycle |
| commit message | `docs(review-handoff): publish T2 T5 T6 grouped preparation` |
| remote before | tip `6188eb14…` blob `6b1caca2…` |
| statut attendu | HANDOFF UPDATED — REMOTE VERIFIED |

## Verdict

```
FINOPS TECHNICAL LOTS T2 T5 T6 GROUPED PREPARATION COMPLETE WITH RESERVES —
T1 BASELINE VERIFIED —
T2 EXECUTION PREPARATION READY —
T5 EXECUTION PREPARATION READY FOUNDATION-ONLY / FULL AUTHORITY-BLOCKED —
T6 EXECUTION PREPARATION READY WITH DEPENDENCY PHASING —
MONEY FIND-03 EXPLICITLY QUALIFIED —
CROSS-LOT CONFLICT MATRIX COMPLETE —
DELIVERY PARALLELIZATION OPTIONS DOCUMENTED —
RECOMMENDED DELIVERY SEQUENCE DOCUMENTED —
NO DELIVERY EXECUTED —
NO CODE MODIFIED —
NO PROJECT COMMIT —
NO PROJECT PUSH —
REVIEW HANDOFF REMOTE VERIFIED —
SEPARATE MORRIS DELIVERY GATES REQUIRED
```

---

# CONTENU COMPLET DU DOCUMENT 138 (coverage obligatoire)

# 138 — FinOps Technical Lots T2 + T5 + T6 Grouped Preparation

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/138-assistant-sfia-native-openai-finops-technical-lots-t2-t5-t6-grouped-preparation.md`
**Cycle:** 6 — Architecture technique · Implementation Preparation · Grouped T2+T5+T6
**Profil:** Critical
**Typologie:** EVOL / DOC / ARCH
**Statut:** PREPARATION COMPLETE WITH RESERVES — NO DELIVERY

---

## A. Statut et anti-claims

| Claim | Statut |
|-------|--------|
| T2 Delivery executed | **FALSE** |
| T5 Delivery executed | **FALSE** |
| T6 Delivery executed | **FALSE** |
| Money / FIND-03 SELECTED | **FALSE** — OPEN · MORRIS DECISION REQUIRED |
| Neon configured | **FALSE** |
| OpenAI provider-real | **FALSE** |
| Override activated | **FALSE** |
| External observability provider selected | **FALSE** |
| Parallelization = GO Delivery | **FALSE** — recommendation only |
| Code / migration / SQL / package / CI modified in this cycle | **FALSE** |
| Project commit / push / PR / merge | **FALSE** |
| Document 124 present on main | **FALSE** — referenced historically; absent at HEAD (use 123/125) |
| Scalable / production-ready without proof | **NOT CLAIMED** |

This document is the **single consolidated preparation deliverable** for three autonomous future Delivery prompts. It does not authorize any Delivery.

---

## B. GO Morris exact

```
GO préparation groupée T2 + T5 + T6, puis on décide séparément des Delivery selon les conflits et dépendances constatés.
```

**Authorized:** documentary grouped preparation T2 + T5 + T6 only.
**Not authorized:** Delivery T2/T5/T6 · T3/T4/T7 · LOT-D* · project commit/push/PR/merge · Neon · provider-real · credentials · FinOps activation · implicit Money selection.

---

## C. Horodatages

| Fuseau | Valeur |
|--------|--------|
| CEST | 2026-08-07 11:50:17 CEST (+0200) (Git Truth start) |
| UTC | 2026-08-07 09:50:17 UTC |

---

## D. Git Truth

| Check | Value |
|-------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| Repo | `mcleland147/sfia-workspace` |
| Branch (prep) | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t2-t5-t6-grouped-preparation` |
| Created from | `main` @ `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |
| origin/main | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` (unchanged; no drift) |
| T1 merge | PR #313 · merge `093fd916…` · head `23feee90…` integrated |
| CI post-merge | run `31165379292` / #106 SUCCESS |
| Status at Truth | `?? .tmp-sfia-review/` only · staged empty |
| Upstream for prep branch | **none** · **no push** |
| Handoff entrant | tip `6188eb1496ddc2f8b4f31900db28b262da4ed2a9` · blob `6b1caca2aab95337c4c6ae4ae5fa09d2f003b8e7` · Cycle 14 post-merge COMPLETE WITH RESERVES · Delivery cleanup done · T2+ not authorized before this GO |

---

## E. Sources consultées

### Méthode (read-only)
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` (**candidate** · experimental guidance · **no execution authority**)
- `docs/architecture/sfia-delivery-pipeline.md`
- `docs/architecture/2026-06-27-sfia-decision-engine.md`
- `scripts/sfia/publish-review-handoff.sh`

### Trajectoire / backlog / IP-0C / T0 / T1
- `103-…-technical-implementation-backlog.md`
- `123-…-finops-enforcement-decisions-applied.md`
- `125-…-finops-technical-implementation-decisions-applied.md` (124 **absent** on main; 123/125 used)
- `126` / `127` (T0)
- `135` / `136` / `137` (T1) — blobs at HEAD: `acddf6f6…` / `b8875809…` / `3adc547c…`

### Code runtime (read-only)
- `projects/sfia-studio/app/lib/oa/finops/**`
- `projects/sfia-studio/app/__tests__/oa/finops/**`
- `projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js`
- `projects/sfia-studio/app/lib/oa/execution-run/**` (coordinator, compose, ClockPort, AI adapter)
- `projects/sfia-studio/app/lib/oa/decision/**` (AuthorityResolver)
- `projects/sfia-studio/app/package.json` · `.github/workflows/sfia-studio-ci.yml`

---

## F. État T1 intégré réellement observé

Legend: **EXISTS** · **DECIDED-ONLY** · **ABSENT** · **CANDIDATE**

### F.1 Runtime EXISTS

| Capacité | Preuve |
|----------|--------|
| T0 domain contracts | `lib/oa/finops/domain/**` · barrel `finops/index.ts` (T0 only) |
| Period UTC month | `domain/period.ts` · `computeUtcMonthPeriod` |
| SoT ranks estimated/observed/billed/unknown | `domain/sourceOfTruth.ts` · `FINOPS_SOT_RANK` |
| Cost evidence **class** (no amounts) | `domain/costEvidence.ts` |
| Blocking eligibility by SoT (no amounts) | `domain/blockingEligibility.ts` |
| Usage event + fingerprint identity `t1-v1` | `application/{types,identity,buildUsageEvent,safeTokens}.ts` |
| Capture service + optional `FinOpsAuditEmitter` (best-effort) | `application/captureFinOpsUsage.ts` |
| Ports capture + ledger | `ports/finopsCapturePort.ts` · `ports/finopsUsageLedgerPort.ts` |
| PostgreSQL ledger + pool + sanitize | `infrastructure/postgres/**` |
| Migration `finops_usage_event` | `1754500000000_finops-t1-usage-ledger.js` |
| Coordinator fail-open hook | `coordinateExecutionRun.ts` optional `deps.finops` |
| Compose optional inject | `composeExecutionRunD2D3.ts` — **default does not wire FinOps** |
| Provider → tokens mapping | `platformAiExecutionAdapter.ts` (`UsageSummary`) |
| ClockPort injectable | `execution-run/ports/clockPort.ts` (also doctrine ClockPort) |
| CI-A Postgres 16 + migrate + `test:db` | `.github/workflows/sfia-studio-ci.yml` |
| `pg` + `node-pg-migrate` | `app/package.json` |
| Tests unit + PG integration + fail-open | `__tests__/oa/finops/**` |

### F.2 Ledger columns EXISTS (usage-only)

`event_id`, `dedup_key`, `project_id`, `execution_run_id`, `correlation_id`, `provider`, `model`, `occurred_at`, `period_start`, `source_of_truth`, `evidence_class`, `input_tokens`, `output_tokens`, `total_tokens`, `provider_request_id`, `correction_ref`, `usage_status`, `created_at` · append-only triggers · **no Money/currency columns**.

### F.3 ABSENT (critical for T2/T5/T6)

| Item | Status |
|------|--------|
| Money / currency / price fields | ABSENT |
| Price catalog / OpenAI pricing API wiring | ABSENT |
| `mapProviderUsage.ts` | ABSENT (T1-VAL-05) |
| Aggregate tables / views | ABSENT |
| Reconciliation scheduler/queue | ABSENT |
| Override store / service | ABSENT |
| Durable FinOps audit table | ABSENT |
| FinOps domain-event bus | ABSENT |
| `AuthorityGate` symbol | ABSENT |
| Session/middleware product IAM proving caller is Morris | ABSENT |
| Neon integration / real credentials | ABSENT |
| Production compose always injecting FinOps | ABSENT (tests only) |
| T1 capture exported via `finops/index.ts` | ABSENT (deep imports) |

### F.4 Authority EXISTS but insufficient for T5 identity proof

| Mechanism | Path | Proves | Gap |
|-----------|------|--------|-----|
| `AuthorityResolverPort` | `oa/decision/ports/authorityResolver.ts` | Registered evidence: level/scope/`canActAsMorris` | Not session identity |
| `MemoryAuthorityResolver` | `…/memoryAuthorityResolver.ts` | In-memory registry | Test/dev only |
| `VerifyAuthority` | audited wrap | Emits `oa.authority.verified` | Same evidence limit |
| Contract/attempt helpers | `authorityHelper` etc. | Morris gate for execution contract | Not FinOps override |

**Conclusion:** runtime can evaluate “registered actor may act as Morris for scope” — **cannot** prove HTTP/session caller is Morris. Product IAM for Morris-only override = **MISSING**.

### F.5 Audit / events EXISTS but non-durable for FinOps

Multiple in-memory OA audit journals (decision, project, cycle, execution, attempt, evidence, doctrine, execution-run sink, platform `EventSink` noop). FinOps `FinOpsAuditEmitter` is optional best-effort; comments defer durable observability to **T6**.

### F.6 IDs

| ID | Representation |
|----|----------------|
| OA `projectId` | string prefixed `prj:` (project domain) |
| FinOps `project_id` | opaque `text` — **no** `prj:` enforcement at FinOps boundary |
| `execution_run_id` / `runId` | from `IdentityPort` (e.g. sequential `executionrun:…`) |
| `correlation_id` | stored on ledger |

### F.7 DECIDED-ONLY (IP-0C / T1 docs — not implemented)

T2 recon/period/aggregates/store · T5 override policy+impl · T6 OBS · Money deferred · TTL numeric deferred · HARD keep-open · calibration 15/20/25/30 provisional.

---

## G. Trajectoire T2/T5/T6 et dépendances

### Lot structure (SELECTED structure — 125 §34)

| Lot | Role |
|-----|------|
| T0 | contracts and pure domain rules — **integrated** |
| T1 | durable PostgreSQL metering ledger — **integrated** (PR #313) |
| T2 | aggregation and reconciliation |
| T3 | alert and Morris review state |
| T4 | S30 soft enforcement |
| T5 | override |
| T6 | observability and audit |
| T7 | feature flag, rollout and pilot evidence |

**Critical path:** `T0 → T1 → T2 → T3 → T4 → T7`
**Candidate parallelization (documented, not authorized):** T5 after T1 and before E1 activation · T6 from T1, complete before T7.

### Dependency graph (preparation view)

```text
T1 ledger (EXISTS)
  ├─► T2 aggregates + reconciliation (+ Money arbitration)
  │     └─► T3 / T4 (out of scope)
  ├─► T6-foundation (durable audit + T1 event coverage)
  │     └─► T6-extensions (T2/T3/T4/T5 events)
  └─► T5-foundation (override store) ──requires──► Morris identity proof decision
        └─► T5 full (enforceable checks for future T4)
```

---

## H. Sous-pack T2 — Aggregation and Reconciliation

### H.1 Finalité

Produce derived, recalculable aggregates and asynchronous reconciliation over the immutable T1 usage ledger, without enforcement, alerts, or override.

### H.2 Décisions SELECTED to preserve (NOT IMPLEMENTED)

| ID | Statement |
|----|-----------|
| `D-ASST-IP0C-TECH-RECON-01` | Async reconciliation estimated→observed→billed · history preserved |
| `D-ASST-IP0C-TECH-PERIOD-01` | Calendar month UTC · injectable clock · late event → actual period |
| `D-ASST-IP0C-TECH-MODEL-01` | Immutable ledger + derived/recalculable aggregates + corrections-as-events |
| `D-ASST-IP0C-TECH-STORE-01` | PostgreSQL for events **and** aggregates (Neon config still NOT DONE) |

Also preserve: estimation never blocks · billed / official provider-observed may become blocking later (T3/T4) · no S30 / no Morris alert in T2.

### H.3 Money / FIND-03 — MORRIS DECISION REQUIRED

**Facts:**
- `FIND-03` = OPEN (Money representation)
- `D-T1-MONEY-01` = DEFER TO T2 · **value NOT SELECTED** · anti-claim: DEFER ≠ M1
- No `D-T2-MONEY-*` ID exists yet on Git

**Canonical new gate ID (introduced here, not selected):** `D-T2-MONEY-01`
Continues `FIND-03` / `D-T1-MONEY-01` deferral into an explicit T2 representation arbitration.

#### Options (from 135 §9 — still open)

| Option | Representation | Precision / rounding | TS mapping | PostgreSQL | Aggregation | Reconciliation | Multi-currency | Migration cost | Reversibility | Debt | Tests |
|--------|----------------|----------------------|------------|------------|-------------|----------------|----------------|----------------|---------------|------|-------|
| **M1** | Integer minor unit + ISO 4217 | Fixed scale per currency; round once at boundary | `bigint`/`number` safe-int + `currency: string` | `bigint` amount + `char(3)` currency | Sum minors same currency | Corrections as new events with signed deltas | Requires FX later or reject mix | Low if introduced with first money columns | High if no float leakage | Low if disciplined | Exact integer asserts |
| **M2** | `numeric` explicit scale + currency | Scale fixed in schema (e.g. 6) | string or Decimal lib at boundary | `numeric(p,s)` + currency | Sum numeric | Same | Same FX issue | Medium (numeric ops) | Medium | Medium if JS float sneaks in | Scale-contract tests |
| **M3** | Domain decimal string + convert at DB | Policy-defined | branded string | convert to numeric/bigint in adapter | Convert then aggregate | Convert then correct | Same | Higher adapter complexity | Medium | Higher if dual forms leak | Boundary round-trip tests |

**Candidate recommendation (NOT SELECTED):** **M1** — matches T1 safe-integer token culture, simplest exact aggregation, easiest tests, lowest float risk.
**Multi-currency:** pilot likely single currency (USD provisional thresholds) — still store currency explicitly; FX = future decision.

**`D-T2-MONEY-01` — MORRIS DECISION REQUIRED** before T2 Delivery that persists monetary amounts.
A T2 Delivery that only builds **usage-token aggregates** without Money could theoretically start earlier — but IP-0C reconciliation narrative includes estimated/observed/billed **cost** path; **recommend not starting T2 Delivery until Money is arbitrated** unless Morris explicitly scopes a usage-only aggregate slice.

### H.4 Pricing / cost source

| Discovery | Result |
|-----------|--------|
| OpenAI price catalog in OA FinOps | **ABSENT** |
| API pricing wiring | **ABSENT** |
| Local billed source | **ABSENT** |
| Official observed monetary source | **ABSENT** |
| Harness EUR estimators | EXISTS under `harness/` — **out of OA FinOps boundary** · must not be reused as truth |

**Distinct decision needed:** `D-T2-PRICE-SRC-01` — MORRIS DECISION REQUIRED (candidate ID)

Options (trade-offs):
1. **Manual/config server-only price table** (versioned) — reversible, no live API, drift risk vs OpenAI.
2. **Provider invoice/billed import** (file/API later) — highest trust for billed; needs format contract; not available now.
3. **Estimated-only until billed** — tokens×config rate; never blocks (already decided for estimation).

Recommend candidate: **(1) + (3)** for T2 bootstrap; billed path as explicit import port with no invented OpenAI prices in code. **Not SELECTED.**

### H.5 Aggregate physical form (not decided)

Immutable ledger preserved. Aggregates must be derived/recalculable.

| Option | Description | Perf | Recompute | Late events | Concurrency | Index | Restart-safe | Multi-instance | Maintenance |
|--------|-------------|------|-----------|-------------|-------------|-------|--------------|----------------|------------|
| **A1** Durable aggregate table(s) | e.g. `finops_usage_aggregate` keyed by project+period(+currency) | Fast read | Explicit job | Patch row or rebuild | Row lock / upsert version | PK + period | Yes if transactional | Needs locking | Schema+migrate |
| **A2** Query + optional materialization | SQL group-by; optional temp/matview | Slow at scale | Always possible | Automatic | Read-mostly | ledger indexes | Yes | Safe | Less schema |

**Candidate recommendation (NOT SELECTED):** **A1** for pilot read paths (T3 thresholds), with **full rebuild from ledger** as recovery; A2 acceptable for early spike. Introduce via new migration **after** T1 `1754500000000_*` (timestamp > that).

### H.6 Reconciliation model

**States (usage_status / SoT evolution — conceptual):**
`estimated` → `observed` → `billed` (and `unknown`) · history via **new correction events** (not in-place mutation of ledger facts).

| Concern | Preparation stance |
|---------|-------------------|
| Transitions | Append correction event; update aggregate by recompute or incremental apply |
| Dedup | Reuse T1 `dedup_key` rules; correction identity must include correction_ref |
| Retry / idempotence | Reconciliation command idempotent on `(projectId, period, sourceBatchId)` |
| Scheduling | **NOT SELECTED** — options: on-demand admin · bounded batch · cron later. Prefer on-demand/batch (GreenOps: avoid always-on polling) |
| Trigger | Candidate: explicit `reconcileProjectPeriod` application service |
| Error | Structured FinOps error; fail-open for user runs remains T1 rule; recon failure is FinOps-side |
| Aggregate recalculation | Mandatory after successful recon batch |
| Audit hook | Emit events for T6 (`aggregate_recalculated`, `reconciliation_failed`, `unknown_cost_detected`) — do not implement T6 here |

### H.7 Period / clock

Reuse `computeUtcMonthPeriod` + coordinator `ClockPort.nowIso()` / FixedClock in tests. Late events attach to **actual** period of `occurred_at` (SELECTED).

### H.8 Separation from T3/T4

T2 **must not** create: Morris alerts · S30 enforcement · run suspension · override checks.

### H.9 Challenge (T2)

| Question | Answer |
|----------|--------|
| Useful now? | Yes — unblocks T3 thresholds on real aggregates |
| Debt if skip Money? | High if amounts invented; low if Morris scopes usage-only first |
| Simpler? | A2-only spike before A1 |
| Repo-first? | Extend `oa/finops` + new migration; reuse pool |
| Gate Morris? | Money + price source + Delivery GO |
| Impact critical path? | Blocks T3/T4 until done |
| Reversible? | Aggregate table droppable if rebuildable from ledger |

### H.10 Manifest candidat T2 (future Delivery only — DO NOT WRITE NOW)

**CREATE (candidates):**
- `app/lib/oa/finops/application/types.aggregate.ts` (or extend types)
- `app/lib/oa/finops/application/reconcileProjectPeriod.ts`
- `app/lib/oa/finops/application/recomputeAggregates.ts`
- `app/lib/oa/finops/domain/money.ts` (**only after D-T2-MONEY-01**)
- `app/lib/oa/finops/ports/finopsAggregatePort.ts`
- `app/lib/oa/finops/ports/finopsReconciliationPort.ts`
- `app/lib/oa/finops/ports/finopsPriceCatalogPort.ts` (if price table chosen)
- `app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore.ts`
- `app/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation.ts`
- `app/db/migrations/<ts>_finops-t2-aggregates.js` (+ money columns or side table)
- tests: `t2.aggregate.unit.test.ts`, `t2.reconciliation.unit.test.ts`, `postgres/t2.aggregate.integration.test.ts`

**MODIFY (candidates):**
- `application/types.ts` / `buildUsageEvent.ts` if correction event shape needs fields
- `postgresFinOpsUsageLedger.ts` if new query helpers (prefer new module)
- `captureFinOpsUsage.ts` — optional emit hooks only
- `composeExecutionRunD2D3.ts` — **avoid** unless recon invoked from run path (prefer separate composition)
- `package.json` — **only if** Decimal lib selected under M2/M3 (prefer avoid)

**PROTECTED / do not casually touch:**
- T0 domain SoT/blocking semantics without GO
- CI workflow (no change in T2 prep; Delivery may extend test:db only if needed)
- Neon secrets

**Symbols (candidates):** `FinOpsMoney`, `FinOpsAggregate`, `ReconcileProjectPeriod`, `RecomputeAggregates`, `FinOpsAggregatePort`.

---

## I. Sous-pack T5 — Durable Morris-only Override

### I.1 Finalité

Prepare durable project-scoped Morris-only override with explicit expiration, revocation, and audit — **no permanent override**, no default duration/amount.

### I.2 SELECTED to preserve (NOT IMPLEMENTED)

| ID | Statement |
|----|-----------|
| `D-ASST-IP0C-TECH-OVR-IMPL-01` | Durable project-scoped Morris-only · explicit expiration · audited |
| `D-ASST-IP0C-OVERRIDE-01` | Morris-only · case-by-case · time-bounded · audited policy |

**Fields (125 §26):** `overrideId`, `projectId`, `author`, `reason`, `startsAt`, `expiresAt`, `revokedAt`, `status`, `createdAt`, audit reference.

Also: revocation · auto-return to normal policy after expire/revoke · no permanent override · no default amount.

### I.3 Autorité Morris — preuve runtime

**How can runtime prove Morris-only today?**
1. Call `AuthorityResolverPort.verify` with `requireMorrisGate` / `canActAsMorris` for a registered `actorId` + scope.
2. That proves **registry grant**, not **authenticated session identity**.
3. No Next middleware / session IAM maps caller → Morris in this repo.
4. Docs already state IAM override = Morris / no current product IAM (**DECIDED-ONLY**).

**Classification:**
| Mode | Feasibility |
|------|-------------|
| Full Delivery T5 (enforceable Morris-only in product) | **BLOCKED** until identity/auth wiring decision |
| Foundation-only Delivery (store + domain + tests with MemoryAuthorityResolver) | **POSSIBLE** |
| Blocked entirely | Only if Morris refuses foundation without IAM |

**Gate:** `D-T5-AUTH-01` — MORRIS DECISION REQUIRED
Options:
1. **Foundation-only now** — persistence + domain; auth adapter stubbed behind port; product activation later.
2. **Bind to future IAM** — wait for session/Morris identity before any T5 Delivery.
3. **Operational break-glass** — server-only env-listed Morris actor IDs (high risk; document as last resort).

**Candidate recommendation (NOT SELECTED):** Option **1** if Delivery desired before IAM; Option **2** if security posture forbids durable override store without identity. Prefer **not** inventing fake auth.

### I.4 Persistence

Reuse PostgreSQL FinOps database (same CI-A / future Neon) for `finops_override` table — **consistent with STORE-01**; no new store technology required.
If Morris wants separate DB: new decision — not recommended.

### I.5 Contrat T5 ↔ T4 (future, not implemented)

| Concern | Contract |
|---------|----------|
| Check override | `isOverrideActive(projectId, atInstant)` → active if status active AND startsAt≤at<expiresAt AND revokedAt null |
| Expiration | ClockPort; expired ⇒ treat as inactive (no write required for read-path; optional sweeper later) |
| Revocation | Morris-only command sets `revokedAt` + status |
| Fallback | T4 soft enforcement uses normal policy when inactive |
| Atomicity | Prefer read override in same DB transaction as enforcement decision (T4) |
| Audit | Every create/revoke/expire-detection emits T6 events |

### I.6 Sécurité / RGPD

- No privilege elevation via client-supplied authorityLevel (already MemoryAuthorityResolver pattern)
- `reason` minimized · no secrets · actor id minimal/pseudonymized
- Server-side only composition
- TTL numeric still DEFERRED (R-TECH-TTL-01) — override expiration is explicit timestamp, not numeric TTL policy

### I.7 Challenge (T5)

Useful before T4? Foundation yes; activation without T4 limited. Debt if store without auth? Medium (orphaned rows). Do not build second identity system. Do not select external auth product here.

### I.8 Manifest candidat T5 (future Delivery)

**CREATE:**
- `finops/domain/override.ts` (status machine)
- `finops/application/createOverride.ts` / `revokeOverride.ts` / `getActiveOverride.ts`
- `finops/ports/finopsOverridePort.ts`
- `finops/ports/finopsMorrisAuthorityPort.ts` (thin adapter over AuthorityResolver)
- `finops/infrastructure/postgres/postgresFinOpsOverrideStore.ts`
- `app/db/migrations/<ts>_finops-t5-override.js`
- tests: unit domain + authority fail-closed + PG integration

**MODIFY:** composition root for admin/Morris command path (not user run path) · optional T6 emitter wiring.

**Do not modify:** T4 (absent) · client UI · IAM product (unless separate GO).

---

## J. Sous-pack T6 — Observability and Append-only Audit

### J.1 Finalité

Structured domain events + append-only FinOps audit · secret redaction · no unnecessary PII · correlate `runId`/`projectId` · **no external observability provider**.

### J.2 SELECTED

| ID | Statement |
|----|-----------|
| `D-ASST-IP0C-TECH-OBS-01` | Structured domain events · append-only audit · no external provider |

### J.3 What T1 already offers

- `FinOpsAuditEmitter` best-effort callbacks: `finops_capture_created` / `_duplicate` / `_failed`
- `sanitizeDbError` redaction
- Fail-open: audit must not flip AI success (preserve)
- Multiple non-FinOps in-memory journals elsewhere — **do not duplicate** as second identity/audit product; FinOps needs **durable FinOps-scoped** journal

### J.4 Frontiers

| Kind | Role | T6 stance |
|------|------|-----------|
| Domain event | Business fact for FinOps lifecycle | First-class |
| Audit record | Append-only durable evidence | First-class |
| Application log | Ephemeral diagnostics | Allowed; not system of record |
| Metric | Cardinality-bounded counters | Optional later; not required |
| External telemetry | Datadog/etc. | **NOT SELECTED** |

### J.5 Event catalog (prepare contracts; implement by phase)

| Event | Owning lot phase |
|-------|------------------|
| usage event accepted / deduplicated / capture failed | T6-foundation (T1 already emits soft) |
| estimation produced | T2/T6-ext |
| provider observation received | T2/T6-ext |
| billed correction received | T2/T6-ext |
| aggregate recalculated | T2/T6-ext |
| reconciliation failed | T2/T6-ext |
| unknown cost detected | T2/T6-ext |
| threshold crossed / notification emitted / review required / new run rejected | T3/T4 — contract only |
| override created / expired / revoked | T5/T6-ext |

### J.6 Persistence audit — options (NOT SELECTED)

Durable FinOps audit **not** decided beyond OBS-01 principles.

| Option | Description | Pros | Cons | Reversibility |
|--------|-------------|------|------|---------------|
| **O1** PG table `finops_audit_event` append-only | Same DB as ledger; CI-A reusable | Consistent ops; queryable | Migration; growth | High (table drop if unused) |
| **O2** Reuse generic OA audit port with durable adapter later | Less FinOps-specific schema | No durable adapter EXISTS today; risk of wrong journal | Blocks on missing infra | Medium |

**Candidate recommendation (NOT SELECTED):** **O1** — aligns with STORE-01 and T1 pool; keep payload JSON minimized + redaction.

If Morris rejects new table: escalate `D-T6-AUDIT-STORE-01` — MORRIS DECISION REQUIRED.

### J.7 Failure semantics

Observability/audit failures **must not** convert successful user AI runs into failures (T1 fail-open). Override/admin commands may fail closed if audit required for that command — **decision candidate** for T5 Delivery (`D-T5-AUDIT-FAIL-01`).

### J.8 Cardinalité / GreenOps

- Bound event types (enum)
- No unbounded labels (no raw prompts, no full provider payloads)
- Prefer emit-on-command / emit-on-capture — **no always-on poller**
- Redact secrets; minimize actor/PII

### J.9 Phasage T6

| Phase | Scope | Dependency |
|-------|-------|------------|
| **T6-foundation** | PG audit table · durable emitter implementing `FinOpsAuditEmitter` · wire T1 capture outcomes · tests | After T1 — **PARALLEL-SAFE** with T2 if manifests disjoint |
| **T6-ext-T2** | recon/aggregate/money events | After/with T2 |
| **T6-ext-T5** | override lifecycle events | With/after T5 |
| **T6-ext-T3T4** | threshold/reject events | Later |

Do **not** force monolithic T6 Delivery.

### J.10 Manifest candidat T6

**CREATE (foundation):**
- `finops/application/finopsAuditTypes.ts`
- `finops/ports/finopsAuditJournalPort.ts`
- `finops/infrastructure/postgres/postgresFinOpsAuditJournal.ts`
- `finops/infrastructure/postgres/redactFinOpsAuditPayload.ts`
- `app/db/migrations/<ts>_finops-t6-audit-journal.js`
- tests: unit redaction + PG append-only + fail-open capture still holds

**MODIFY:**
- `captureFinOpsUsage.ts` — inject durable journal behind existing emitter
- test compose helpers

**Avoid:** external SDKs · new npm APM · changing CI except test:db coverage.

---

## K. Matrice de conflits T2 / T5 / T6

### K.1 T2 ↔ T5

| Dimension | Analysis |
|-----------|----------|
| Files | Mostly disjoint if T5 under `override*` and T2 under `aggregate*`/`recon*` |
| Migrations | Two migrations — **order by timestamp**; no shared table required |
| Tables | `finops_usage_aggregate*` vs `finops_override` — independent |
| Domain types | Shared `projectId` / ClockPort only |
| Ports / composition | Separate; avoid same compose file churn |
| Pool | Shared `createFinOpsPool` — contract: do not change pool defaults incompatibly |
| Audit | T5 needs T6 events — weak if T5 stores audit ref only |
| Git conflict risk | Low if manifests enforced |
| **Status** | **PARALLEL-SAFE-WITH-CONTRACT** (shared pool + Clock + projectId conventions; T5 full still auth-blocked) |

### K.2 T2 ↔ T6

| Dimension | Analysis |
|-----------|----------|
| Files | T2 emit hooks vs T6 journal — touch `captureFinOpsUsage` / recon services |
| Migrations | Independent tables; order flexible if no FK |
| Conceptual | T6-ext depends on T2 events existing |
| **Status foundation** | **PARALLEL-SAFE** (T6-foundation ∥ T2) |
| **Status full T6-ext-T2** | **SEQUENTIAL-RECOMMENDED** after T2 event producers exist (or same Delivery with clear module ownership) |

### K.3 T5 ↔ T6

| Dimension | Analysis |
|-----------|----------|
| Files | Override commands should write audit |
| Dependency | Strong product dependency for “audited” SELECTED requirement |
| **Status** | **PARALLEL-SAFE-WITH-CONTRACT** if T6-foundation lands first or same sprint with interface-first; else **SEQUENTIAL-RECOMMENDED** (T6-foundation → T5) |

### K.4 Triple contention hotspots

1. `createFinOpsPool.ts` / env vars
2. Migration version ordering
3. `compose*` / server composition roots
4. `ClockPort` injection patterns
5. Shared test DB setup in CI-A

**Mitigation:** module ownership map in each Delivery prompt; one owner per hotspot per Delivery; no drive-by edits.

---

## L. Matrice de parallélisation / séquencement

| Lot | Maturity | SELECTED | Open decisions | Deps | Conflict risk | Start before others? | Parallelizable subset | Gate |
|-----|----------|----------|----------------|------|---------------|----------------------|----------------------|------|
| T2 | Prep ready | RECON/PERIOD/MODEL/STORE | Money, price source, aggregate form, schedule | T1 | Med (money schema) | Yes on critical path | Usage-only aggregate slice (if Morris scopes) | Money + Delivery |
| T5 | Prep ready foundation / full blocked | OVR-IMPL | Auth identity, audit-fail policy | T1; T6 for audit | Low files / high auth | Foundation yes | Foundation store+domain | Auth + Delivery |
| T6 | Prep ready phased | OBS | Audit store confirm O1 | T1 | Low | Foundation yes | T6-foundation | Delivery (+ store if disputed) |

### Scenarios

**Scenario A — T2 → T6 → T5**
Pros: critical path first; audit before override. Cons: delays T6-foundation value; T5 waits long.
**Coherent:** YES.

**Scenario B — T2 ∥ T6-foundation → then T5 (foundation or full)**
Pros: parallelizes independent manifests; audit ready for T2/T5 emits; matches documented T6-from-T1. Cons: needs conflict contracts on pool/migrations.
**Coherent:** YES · **RECOMMENDED**.

**Scenario C — T2 ∥ T5-foundation ∥ T6-foundation** (fully separate)
Pros: max parallel. Cons: T5 “audited” SELECTED weak without T6; three migrations contention; auth still blocks full T5.
**Coherent:** YES only if T5-foundation allowed to reference audit port with noop→durable swap; else reject as debt.
**Verdict:** Acceptable **with contract**; inferior to B for audit completeness.

**Rejected:** Any scenario starting T3/T4/T7 · Delivery without Money when amounts required · Full T5 without auth decision.

---

## M. Matrice des décisions Morris requises

| ID | Topic | Blocking for |
|----|-------|--------------|
| `D-T2-MONEY-01` | Money representation M1/M2/M3 (closes FIND-03 value) | T2 Delivery with amounts |
| `D-T2-PRICE-SRC-01` | Pricing/cost source | Costed aggregates / estimated money |
| `D-T2-AGG-FORM-01` | A1 vs A2 aggregate physical form (optional if Delivery picks A1 by default with GO) | T2 schema |
| `D-T2-RECON-TRIGGER-01` | On-demand vs batch vs cron | T2 ops |
| `GO Delivery T2` | Distinct | T2 implementation |
| `D-T5-AUTH-01` | Morris identity proof strategy | Full T5 |
| `D-T5-FOUNDATION-01` | Allow foundation-only Delivery without product IAM | T5-foundation |
| `D-T5-AUDIT-FAIL-01` | Fail-closed audit on override commands? | T5 |
| `GO Delivery T5` | Distinct | T5 implementation |
| `D-T6-AUDIT-STORE-01` | Confirm O1 PG audit table if disputed | T6 |
| `GO Delivery T6` / `GO Delivery T6-foundation` | Distinct | T6 implementation |
| Recalibration 15/20/25/30 USD | Still required | T3 thresholds later |
| Neon / provider-real | Separate | Not T2/T5/T6 prep |

None of these gates is consumed by this preparation cycle.

---

## N. Manifest candidat par Delivery (summary)

See H.10 · I.8 · J.10.
**Rule:** manifests are future-only; this cycle writes **only** document 138.

Migration ordering candidate (illustrative timestamps — Delivery chooses actual):
1. Keep `1754500000000_finops-t1-usage-ledger.js`
2. T6 audit OR T2 aggregates OR T5 override — **non-overlapping tables** ⇒ order by Delivery sequence chosen by Morris (recommend T6-foundation or T2 first per scenario B)

---

## O. Plan de tests candidat par Delivery

### T2
- Unit: money arithmetic (post-decision) · period · recon state machine · idempotent reconcile
- Integration PG: aggregate upsert · rebuild-from-ledger · correction events · concurrent upsert
- Negative: mixed currency reject · unknown cost path · no float
- Regression: T1 capture/dedup/fail-open unchanged

### T5
- Unit: status machine expire/revoke · authority deny-by-default
- Integration: durable override row · clock expiration
- Security: client cannot self-assert Morris
- Regression: user run path untouched

### T6
- Unit: redaction · event schema bounds
- Integration: append-only · no update/delete path
- Fail-open: capture success if audit sink fails (foundation)
- Cardinality: reject oversized payload

---

## P. Risques / dette / réversibilité

| Risk | Severity | Mitigation | Reversible? |
|------|----------|------------|-------------|
| Silent M1 selection | High | Explicit `D-T2-MONEY-01` | N/A if prevented |
| Invented OpenAI prices | High | Price port + no hardcode | Yes if config |
| T5 store without IAM | Med | Foundation label + no product activation | Drop table |
| Duplicate audit systems | Med | O1 FinOps-scoped only | Yes |
| Always-on recon poller | Med/GreenOps | On-demand/batch default | Yes |
| Migration collisions if 3 parallel Deliveries | Med | Scenario B + ownership | Process |
| Float in M2/M3 | Med | Boundary tests | Harder |
| Critical path delay if T6/T5 first | Med | Prefer B not C-without-T2 | N/A |

---

## Q. Gates Morris futurs (checklist)

1. Arbitrate `D-T2-MONEY-01` (+ price source)
2. GO Delivery T2 (scoped manifest)
3. GO Delivery T6-foundation (optional parallel with T2)
4. Arbitrate `D-T5-AUTH-01` / foundation allow
5. GO Delivery T5
6. Later: T3/T4/T7 · Neon · provider-real · calibration USD · LOT-D*

---

## R. Recommandation de séquence (NOT a Morris decision)

**Recommended: Scenario B**

1. Morris arbitrates Money (`D-T2-MONEY-01`) and price source before or at T2 GO.
2. **In parallel (separate GOs):** Delivery T2 · Delivery T6-foundation.
3. Then T5-foundation (or full if auth decided), emitting into T6.
4. Keep T3/T4/T7 gated on critical path after T2.

Rationale: maximizes useful parallel work without violating audited-override or critical path; matches IP-0C parallelization candidate; minimizes migration/file conflicts via disjoint tables.

---

## S. Réserves (preserved — none closed)

| Item | Status |
|------|--------|
| FIND-03 Money | OPEN |
| FIND-07 | NOTE |
| R-TECH-TTL-01 | KEEP-OPEN |
| R-TECH-FINOPS-HARD-01 | KEEP-OPEN |
| Calibration 15/20/25/30 USD | provisional / recalibration required |
| TB-04-04 | NOT DONE |
| TB-02-05 | PRESERVED |
| Neon | NOT DONE |
| provider-real | NOT DONE |
| Document 124 absent on main | NOTE — use 123/125 |
| Backlog 103 not updated this cycle | intentional |

---

## T. Anti-claims finaux

- No Delivery T2/T5/T6 executed
- No code, SQL, migration, package, CI, workflow, method, or backlog 103 modified
- No Money SELECTED
- No external observability provider SELECTED
- No Neon / provider-real / credentials
- Recommendation ≠ decision
- Parallel-safe ≠ authorized

---

## U. Verdict de préparation

```
FINOPS TECHNICAL LOTS T2 T5 T6 GROUPED PREPARATION COMPLETE WITH RESERVES —
T1 BASELINE VERIFIED —
T2 EXECUTION PREPARATION READY —
T5 EXECUTION PREPARATION READY FOUNDATION-ONLY / FULL AUTHORITY-BLOCKED —
T6 EXECUTION PREPARATION READY WITH DEPENDENCY PHASING —
MONEY FIND-03 EXPLICITLY QUALIFIED —
CROSS-LOT CONFLICT MATRIX COMPLETE —
DELIVERY PARALLELIZATION OPTIONS DOCUMENTED —
RECOMMENDED DELIVERY SEQUENCE DOCUMENTED (SCENARIO B) —
NO DELIVERY EXECUTED —
NO CODE MODIFIED —
NO PROJECT COMMIT —
NO PROJECT PUSH —
SEPARATE MORRIS DELIVERY GATES REQUIRED
```

**Statut:** GROUPED PREPARATION COMPLETE WITH RESERVES — DELIVERY DECISIONS REQUIRED
