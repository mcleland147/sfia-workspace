# ChatGPT Review Pack — FULL
## Cycle 6 Architecture Critical — R-T-A3-2 PERSISTENCE REASSESSMENT

| Field | Value |
| --- | --- |
| **Role** | Architecture — R-T-A3-2 Persistence Frontier Reassessment |
| **Pack level** | FULL |
| **Synthesis-only** | NO |
| **Timestamp CEST** | 2026-08-12 15:27:17 CEST (+0200) |
| **Timestamp UTC** | 2026-08-12 13:27:17 UTC |
| **Timestamp CEST ISO** | `2026-08-12T15:27:17+0200` |
| **Timestamp UTC ISO** | `2026-08-12T13:27:17Z` |
| **GO / context** | Cycle 6 Architecture Critical — persistence frontier reassessment after Option A Delivery; R-T-A3-1 ACCEPTED/CLOSED BY MORRIS; Option A ADOPTED+DELIVERED locally; QA paused; Product persistence NOT_SELECTED |
| **R-T-A3-1** | **ACCEPTED / CLOSED BY MORRIS** (+ SYNC DEBT untouched — repo markers not synced) |
| **Cycle** | **6 — Architecture Critical — R-T-A3-2 PERSISTENCE REASSESSMENT** |
| **Profil** | Critical |
| **Critical** | OUI — EXPLICITE |
| **Blocs** | SQLite current-state map; Postgres/Neon FinOps map; boundaries Q1–Q10; NFR matrix; Security/DevOps/RUN/FinOps matrices; options A/B/C; KEEP SQLITE recommendation; Morris gate; product-persistence impact; FULL pack; L3 handoff |
| **Review Pack** | FULL |
| **Outbound remote identity** | Placeholder — filled after publish / verified externally after content freeze |

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

## Template / inbound handoff

| Field | Value |
| --- | --- |
| Template | `prompts/templates/sfia-cycle-execution-template.md` blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| Inbound handoff tip | `832eb175307379150811b6331223159e399d62b6` |
| Inbound handoff blob | `323e7d88008cb3993324b5a47ada6f0fc46e89c4` |
| Inbound message | `docs(review-handoff): publish F3 R-T-A3-2 option A delivery` |

---

## Candidate integrity

| Field | Value |
| --- | --- |
| Candidate SHA BEFORE | `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` |
| Candidate SHA AFTER | `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` |
| MATCH BEFORE=AFTER | **yes** (required — byte-identical; no product mutation) |
| Method | SHA-256 of newline-joined `path sha256` body lines from `.tmp-sfia-review/r-t-a3-2-option-a-delivery/candidate-manifest.txt` (comments excluded); recomputed this cycle |
| Double-compute | **confirmed** identical to expected |
| Project Git write count | **0** |
| Product persistence | **NOT_SELECTED** (unchanged) |

---

## Gate / readiness honesty

| Field | Value |
| --- | --- |
| R-T-A3-2 | **OPEN HARD** |
| Persistence frontier decision | **REQUIRED — MORRIS** (RECOMMENDED KEEP SQLITE — NOT DECIDED) |
| crossStoreDurable | **false** |
| productionRollbackProven | **false** |
| Product persistence | **NOT_SELECTED** |
| Gate D | **NOT READY / NOT CONSUMED** |
| Cursor REAL | **0** |
| Cycle 9 QA | **PAUSED UNTIL MORRIS DECISION** |
| R-T-A3-1 | **ACCEPTED / CLOSED BY MORRIS** (repo sync debt untouched) |

---

## Reassessment summary

1. PRECHECK OK — branch/HEAD/origin/main/staged/handoff/candidate SHA all green; dirty WT expected for Option A local candidate.
2. SQLite F3 current-state mapped (production wire, D1 lifecycle, ATTEMPT markers, multi-process limits).
3. Postgres/Neon FinOps foundation mapped (pg pool, migrations, txn patterns, no neutral platform abstraction).
4. Boundaries Q1–Q10 answered — keep SQLite simplest for first REAL; thin F3-PG later if needed without FinOps domain import.
5. NFR matrix (22 criteria) + Security/DevOps/RUN/FinOps matrices completed with PROVEN/ASSUMED/UNKNOWN; Neon prices UNKNOWN.
6. Options: A KEEP SQLITE (recommended); B F3-specific Postgres (valid alternative Delivery); C multi-adapter REJECTED AS OVERDESIGN.
7. Recommendation KEEP SQLITE — NOT DECIDED; Morris gate wording prepared; product persistence impact clarified (PG ≠ product SELECT).
8. Candidate `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` preserved byte-identical; zero product mutations; Cycle 9 QA remains paused.

---

## Artifacts inlined (complete)


### INLINE FILE: SUMMARY.md

<!-- begin SUMMARY.md -->
# PRECHECK + Maps Summary

## PRECHECK: **OK**

| Item | Result |
|---|---|
| BRANCH | OK `delivery/sfia-studio-f3-real-prerequisites` |
| HEAD = origin/main | OK `4b1a058…` |
| REMOTE_DELIVERY | OK ABSENT |
| STAGED | OK EMPTY |
| HANDOFF | OK `832eb175…` |
| Candidate SHA | OK MATCH `082326a1…` |

Note: WT dirty unstaged (Option-A candidate files); reassessment wrote only under `.tmp-sfia-review/r-t-a3-2-persistence-reassessment/`.

## SQLite vs PG (condensed)

| Dimension | SQLite F3 (current) | Postgres/Neon FinOps |
|---|---|---|
| Role | Authority/Attempt journal pilot | FinOps ledger/audit/rollout |
| Location | `d1.sqlite` / `oa_authority_attempt_journal` | Neon/PG via `DATABASE_URL(_DIRECT)` |
| Wiring | `wireOaStack` → `SqliteAuthorityAttemptJournal` | `composeFinOps(Runtime\|T7Runtime)` |
| Txn style | `BEGIN IMMEDIATE` per append | BEGIN+dedup / INSERT / CAS CTE |
| Multi-process | process-local singleton; file locks ASSUMED | Pool; shared DB |
| Product claim | NOT_SELECTED / PILOT-LOCAL | FinOps foundation ≠ F3 |
| Neutral abstraction | n/a (D1 open helper) | **None** outside FinOps |

## Boundaries YES/NO

1 YES · 2 NO · 3 SMALL REFACTOR · 4 YES · 5 YES · 6 YES · 7 YES · 8 YES · 9 SQLite-now/thin-PG-later · 10 YES keep SQLite

<!-- end SUMMARY.md -->

---

### INLINE FILE: boundaries.md

<!-- begin boundaries.md -->
# Boundary Questions (Q1–Q10)

Answers are brief YES/NO (or short enum) with evidence paths.
Source questions: R-T-A3-2 persistence reassessment GO list.

---

### Q1 — F3 can use PG without FinOps domain import?

**YES** (technically), with a caveat.

- F3 depends on `AuthorityAttemptJournalPort` (`lib/oa/critical-ack/ports/authorityAttemptJournalPort.ts`) — domain-neutral.
- `pg` is already a package dependency; a PG journal adapter can import `pg` / a thin non-FinOps factory without importing `lib/oa/finops/**` domain.
- **Caveat:** reusing `createFinOpsPool` **would** pull FinOps infrastructure naming/path (`lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts`) — avoid for clean boundary.

---

### Q2 — Neutral PG abstraction exists?

**NO**

- Only FinOps-branded `createFinOpsPool`.
- Outside `finops/` + `d1/`: OPS1 SQLite; FinOps script `new Pool`; execution-run type-only `Pool` import.
- Evidence: `postgres-neon-current.md` §6.

---

### Q3 — Creating one = small refactor or platform pivot?

**SMALL REFACTOR** (thin Pool factory + F3 journal adapter behind existing port).

- **Platform pivot** only if Morris selects product persistence (Option D in `.tmp-sfia-review/r-t-a3-2-architecture/options.md`).
- Creating a neutral `createPool` helper ≠ SELECT product persistence.

---

### Q4 — Same Neon physical DB shareable?

**YES** (physically), **ASSUMED** with schema/table isolation.

- FinOps already targets Neon via `DATABASE_URL_DIRECT` / T7 identity.
- No evidence of exclusive DB lock preventing additional non-FinOps tables.
- Sharing requires strict schema separation + migration discipline; not a product authorization by itself.

---

### Q5 — Dedicated F3 schema/table enough?

**YES** for the authority/attempt journal frontier.

- SQLite already proves one table (`oa_authority_attempt_journal`) is the durability surface for Option A.
- PG equivalent table/schema sufficient for same port semantics without FinOps domain tables.

---

### Q6 — Is SQLite locality a useful property?

**YES** (for pilot-bounded F3).

- Enables REAL Critical path without Neon/PG availability.
- Matches PILOT-LOCAL labels and `NOT_SELECTED` product persistence.
- Evidence: `sqliteAuthorityAttemptJournal.ts` header; architecture Option A recommendation.

---

### Q7 — Must F3 work when PG unavailable?

**YES** under current Option A (SQLite).

- Production `wireOaStack` uses SQLite journal only — no PG on F3 path today.
- If F3 were moved PG-only, answer would flip to NO unless dual-write/fallback designed (not present).

---

### Q8 — Fail-closed if PG down before Cursor launch OK?

**YES** (pattern already exists).

- `startExecution` fails closed if `ATTEMPT_CREATED` append fails **before** `adapter.launch`.
- Same contract applies to a PG-backed journal: unavailable PG ⇒ no launch.
- Evidence: `lib/oa/execution-attempt/application/startExecution.ts`.

---

### Q9 — 6–12 month debt minimizer?

**Keep Option A SQLite for F3 pilot; if PG needed, add dedicated F3 journal table + thin adapter behind existing port (no FinOps domain import, no product persistence SELECT).**

- Minimizes coupling to FinOps Neon lifecycle.
- Avoids Option D platform pivot until Morris gate.
- Evidence: architecture `options.md` / `recommendation.md` (Option A adopted; product persistence NOT_SELECTED).

---

### Q10 — Simplest for first REAL without mortgaging product?

**YES → stay on Option A SQLite journal (already wired).**

- Already production-composed in `vertical-slice-runtime/service.ts`.
- Loud NOT_SELECTED / crossStoreDurable=false remain honest.
- Moving F3 to Neon/PG now adds ops surface without closing product persistence.

---

## Condensed YES/NO board

| Q | Answer |
|---|---|
| Q1 F3 PG w/o FinOps domain | **YES** (raw/thin pool; not via FinOps modules) |
| Q2 Neutral PG abstraction | **NO** |
| Q3 Create abstraction | **SMALL REFACTOR** (not platform pivot) |
| Q4 Share Neon physical DB | **YES** (w/ isolation) |
| Q5 Dedicated F3 table enough | **YES** |
| Q6 SQLite locality useful | **YES** |
| Q7 F3 must work if PG down | **YES** (current Option A) |
| Q8 Fail-closed pre-launch if PG down | **YES** |
| Q9 Debt minimizer | **SQLite now; thin F3-PG later if needed** |
| Q10 Simplest first REAL | **YES = keep SQLite Option A** |

<!-- end boundaries.md -->

---

### INLINE FILE: morris-gate.md

<!-- begin morris-gate.md -->
# Morris Gate — R-T-A3-2 Persistence Frontier

**Generated:** 2026-08-12
**Gate name:** DECISION REQUIRED — MORRIS — R-T-A3-2 PERSISTENCE FRONTIER
**Recommendation (non-binding):** KEEP SQLITE
**Status until decision:** R-T-A3-2 REMAINS OPEN HARD · Cycle 9 QA PAUSED · Product persistence NOT CHANGED

---

## Context Morris must weigh

- R-T-A3-1 = **ACCEPTED / CLOSED BY MORRIS** (repo sync debt untouched)
- Architecture Option A = **ADOPTED + DELIVERED** locally; candidate frozen `082326a1…`
- Cycle 9 formal QA = **paused** pending this reassessment decision
- Product persistence = **NOT_SELECTED**
- FinOps PG/Neon foundation = **real** but FinOps-scoped; no neutral platform DB layer
- This reassessment is **Cycle 6 Architecture Critical** — **no product mutations**

---

## GO CONFIRM KEEP SQLITE (proposed exact wording)

```
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

## GO REVISE POSTGRES (proposed exact wording)

```
GO REVISE POSTGRES — R-T-A3-2 PERSISTENCE FRONTIER —
AUTHORIZE SEPARATE F3-SPECIFIC POSTGRESQL DURABILITY DELIVERY —
F3-OWNED TABLES/MIGRATIONS BEHIND AuthorityAttemptJournalPort —
DO NOT IMPORT FINOPS DOMAIN MODULES —
SQLITE CANDIDATE 082326a1… VALID BUT SUPERSEDED FOR HARD CLOSURE —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED UNLESS SEPARATE MORRIS GATE ELEVATES —
NETWORK/CREDENTIALS/SSL/CI DATABASE_URL REQUIRED —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
CYCLE 9 SQLITE QA REMAINS SUPERSEDED / REPLAN REQUIRED

Gate: R-T-A3-2 PERSISTENCE FRONTIER = REVISE TO POSTGRES BY MORRIS
```

---

## NO-GO (proposed exact wording)

```
NO-GO R-T-A3-2 PERSISTENCE FRONTIER — REWORK REQUIRED —
DO NOT RESUME CYCLE 9 QA YET —
DO NOT AUTHORIZE F3 POSTGRES DELIVERY YET —
PRESERVE CANDIDATE 082326a1… BYTE-IDENTICAL —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
RETURN WITH CLARIFIED NFR / BOUNDARY / PRODUCT-PERSISTENCE SCOPE

Gate: R-T-A3-2 PERSISTENCE FRONTIER = NO-GO — REWORK REQUIRED
```

---

## Explicitly out of scope for this gate

- Multi-adapter SQLite+Postgres abstraction (Option C — REJECTED AS OVERDESIGN)
- Product-wide persistence SELECT (requires **separate** Morris gate — see product-persistence-impact.md)
- Gate D consumption / Cursor REAL
- Project git write / remote delivery branch publish

<!-- end morris-gate.md -->

---

### INLINE FILE: nfr-matrix.md

<!-- begin nfr-matrix.md -->
# NFR Matrix — SQLite vs PostgreSQL/Neon (R-T-A3-2)

**Generated:** 2026-08-12
**Scope:** F3 Authority/Attempt journal frontier only (not product-wide persistence)
**NFR source note:** Exact labeled “22 NFR items from GO Mission D” was not recovered as a standalone list in DEL/MAIN packs. Matrix uses **22 criteria** reconstructed from GO §D → INV-01…15, Delivery D-01…D-10 / Q-01…Q-10, and persistence-reassessment boundary questions (Q1–Q10). Marked `SOURCE=RECONSTRUCTED_FROM_GO_CONTEXT` in `_nfr22.txt`.
**Tag legend:** PROVEN / ASSUMED / UNKNOWN

| # | criterion | SQLite (F3 current) | Postgres/Neon (FinOps foundation / F3-hypothetical) | gap | F3 importance | evidence |
|---|---|---|---|---|---|---|
| 1 | Durability (survives process crash) | PROVEN for journal appends via `d1.sqlite` + `BEGIN IMMEDIATE` | PROVEN for FinOps ledger/audit/rollout; ASSUMED for F3 if thin PG adapter added | SQLite already durable for Option A; PG would match durability class but is not wired to F3 | **Critical** | `sqliteAuthorityAttemptJournal.ts`; `lib/d1/db.ts`; FinOps postgres adapters |
| 2 | Crash recovery / restart fail-closed | PROVEN design+unit: CREATED-without-LAUNCHED → fail-closed; no auto-resume | ASSUMED same port semantics possible; UNKNOWN until F3-PG Delivery+QA | Formal Cycle 9 crash/restart QA still paused for both | **Critical** | `startExecution.ts`; durableLaunchMarkers tests; architecture FC matrix |
| 3 | Multi-process / multi-instance correctness | ASSUMED file locks; UNKNOWN multi-instance harness; process-local singleton PROVEN | PROVEN Pool shared-DB pattern in FinOps; better multi-process | SQLite weak for multi-instance; PG stronger — **accepted risk** under mono-operator pilot | Medium (pilot Low) | `sqlite-current.md` §4; `createFinOpsPool.ts` |
| 4 | Backup / restore practicality | ASSUMED: file copy of `d1.sqlite`; UNKNOWN ops runbook for F3 | ASSUMED Neon/PG tooling exists for FinOps; UNKNOWN F3-specific restore drill | Second backup path if KEEP SQLite | Medium | path resolution `D1_SQLITE_PATH` / `.sfia-exec`; FinOps migrate scripts |
| 5 | RPO / RTO (journal frontier) | UNKNOWN numeric RPO/RTO; local FS loss = journal loss | UNKNOWN numeric; Neon HA ASSUMED better RPO vs single local file | No repo evidence of measured RPO/RTO for either | Medium | no RPO/RTO docs in F3 paths |
| 6 | Locality (pilot-local FS) | PROVEN useful for pilot-bounded journal | Networked; not local | Locality favors SQLite for first REAL | **High** | boundaries Q6; PILOT-LOCAL labels |
| 7 | Network dependency | PROVEN none for F3 journal path | PROVEN required (`DATABASE_URL` / `_DIRECT`) | PG introduces Critical-path network dep before Cursor launch | **Critical** | boundaries Q7; `wireOaStack` SQLite-only today |
| 8 | Credentials / secrets surface | Local path env names only (`D1_SQLITE_PATH`, `OPS1_EXEC_ROOT`) | Connection strings + Neon credentials required | PG expands secret surface | High | postgres-neon-current.md §3/§7 |
| 9 | SSL / transport security | N/A local file (ASSUMED OS FS perms) | PROVEN explicit SSL option on FinOps pool; default false; Neon must set secure SSL | F3-PG must not infer SSL from URL | High | `createFinOpsPool.ts` |
| 10 | Migrations / schema evolution | PROVEN in-process `SCHEMA_SQL` + integrity_check on open | PROVEN `node-pg-migrate` FinOps migrations; no F3 journal migration today | F3-PG needs new migration; SQLite schema already present | Medium | `lib/d1/db.ts`; `db/migrations/*finops*` |
| 11 | Observability / audit inspectability | PROVEN journal kinds + indexes; local SQL inspect ASSUMED | PROVEN FinOps audit journal pattern; F3-PG would need own table/queries | Parity possible; tooling differs | Medium | journal kinds list; `postgresFinOpsAuditJournal.ts` |
| 12 | Cost (ops + hosted DB) | Local FS: marginal host cost ASSUMED; UNKNOWN exact | Neon/hosted: **UNKNOWN** (no Neon price inventory in repo — do not invent) | Cost gap UNKNOWN; not decisive for pilot | Low–Medium | no price artifacts in repo |
| 13 | Ops complexity / debt | Low–medium for single file; dual-engine debt if FinOps stays PG | One engine long-term; new F3 Delivery + CI env | KEEP accepts dual tooling; REVISE accepts new Delivery | High | options.md trade-offs |
| 14 | Fail-closed before Cursor launch | PROVEN: append failure blocks launch | ASSUMED identical if port-backed; fails closed if PG down | Both can fail-closed; PG fails more often if network/creds bad | **Critical** | boundaries Q8; `startExecution.ts` |
| 15 | Idempotence / no double-launch | PROVEN unique partial index + unit tests | ASSUMED via unique constraints + port; not delivered for F3 | No proven NFR failure of SQLite on this for pilot | **Critical** | schema unique partial; durableLaunchMarkers |
| 16 | Atomicity / compensation honesty | PROVEN single-DB journal txn; Project↔Cycle still residual (`crossStoreDurable=false`) | Same residual unless platform pivot; FinOps CAS patterns PROVEN in FinOps domain only | Neither closes Project↔Cycle by engine swap alone | **Critical** (honesty) | hardBlockerFoundation; INV-15 |
| 17 | Testability (crash/restart harness) | PROVEN unit + composition; formal Cycle 9 QA paused | FinOps integration tests PROVEN; F3-PG harness would be new | Switching engines before Cycle 9 burns calendar | High | Option A QA 150/150; Cycle 9 paused |
| 18 | Rollback / productionRollbackProven | Remains **false** (honest) | Remains **false** unless separate drill | Engine choice does not flip this flag | High (honesty) | hardBlockerFoundation |
| 19 | Schema isolation (F3 vs FinOps) | PROVEN F3 table on D1 SQLite silo | YES physically shareable Neon ASSUMED with table isolation; must not import FinOps domain | Isolation discipline required if PG chosen | High | boundaries Q4/Q5; postgres §6 |
| 20 | Product-persistence honesty | PROVEN NOT_SELECTED / PILOT-LOCAL labels | Subsystem PG ≠ automatic Product SELECT; elevating = separate Morris gate | Misread risk if Neon shared | **Critical** | INV-14; product-persistence-impact.md |
| 21 | CI / env wiring | Local path envs; no DATABASE_URL for F3 | Requires `DATABASE_URL` / `_DIRECT` in CI/runtime | PG raises launch-gate env coupling | High | package.json migrate scripts; FinOps tests |
| 22 | FinOps coupling | PROVEN domain isolation (no FinOps import on F3 path) | Neutral PG abstraction **NO**; thin factory = SMALL REFACTOR; reuse `createFinOpsPool` = coupling risk | Coupling is the main architectural hazard of naive PG reuse | **Critical** | boundaries Q1–Q3; postgres §6 |

## Matrix verdict (assessment, not Morris decision)

- For **mono-operator first REAL**, SQLite meets Critical NFRs that matter now (durability, fail-closed, locality, no network, product-persistence honesty) with **PROVEN** Option A delivery.
- Postgres/Neon is a **real** FinOps foundation and a **valid future F3 durability engine**, but introduces network/creds/CI/coupling costs **without** closing Project↔Cycle or product persistence.
- No PROVEN NFR failure of SQLite for the pilot-bounded frontier justifies burning the frozen candidate `082326a1…` before Cycle 9 QA.

<!-- end nfr-matrix.md -->

---

### INLINE FILE: options.md

<!-- begin options.md -->
# Options — R-T-A3-2 Persistence Frontier Reassessment

**Generated:** 2026-08-12
**Status:** COMPARISON ONLY — **none decided** until Morris gate
**Product persistence:** remains **NOT_SELECTED** unless Morris elevates in a separate gate
**Candidate under assessment:** `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` (Option A Delivery — must stay byte-identical unless Morris chooses REVISE)

---

## OPTION A — KEEP CURRENT SQLITE FRONTIER

### Intent

Keep the delivered F3 production composition on `SqliteAuthorityAttemptJournal` / `d1.sqlite` / `oa_authority_attempt_journal`. Do **not** migrate F3 journal to Postgres/Neon for the Critical launch gate. Resume Cycle 9 formal QA on the frozen candidate. Product persistence remains NOT_SELECTED.

### Pros

- Locality — no network dependency for Critical launch gate
- Domain isolation from FinOps (no FinOps module import on F3 path)
- Already delivered + unit-tested (150/150 Delivery QA aggregate)
- Fail-closed local journal before agent launch
- Reversible later (KEEP now does not forbid future REVISE TO POSTGRES after REAL/pilot learning)

### Cons

- Second storage engine alongside FinOps PG
- Second backup path / dual ops tooling debt
- Multi-process limits of `node:sqlite` / process-local singleton
- Future migration debt if product later requires shared PG

### Classification of delivery

**VALID CANDIDATE — KEEP** (if Morris confirms)

Frozen SHA `082326a1…` remains the HARD-closure QA candidate. No product mutation required for this option.

---

## OPTION B — POSTGRESQL F3-SPECIFIC DURABILITY FRONTIER

### Intent

Introduce an F3-owned Postgres journal adapter behind existing `AuthorityAttemptJournalPort`, using `pg` Pool + F3-owned tables/migrations. **NOT** import FinOps domain modules (`lib/oa/finops/**`). May share Neon physical DB with strict schema isolation **or** use dedicated DB — physical share ≠ product persistence SELECT.

### Pros

- One engine long-term (aligns with FinOps PG tooling)
- Multi-process / shared-DB capability
- Existing `pg` + migrate toolchain already in package.json
- Neon target exists for FinOps (ops familiarity ASSUMED)

### Cons

- New Delivery required (supersedes SQLite candidate for HARD closure)
- Network dependency before Cursor launch
- Credentials + explicit SSL required
- No neutral platform DB abstraction yet → small refactor **or** couple risk via `createFinOpsPool`
- CI/runtime needs `DATABASE_URL` / `_DIRECT`
- Calendar burn before formal crash/restart QA on existing candidate

### Product persistence

**NO** — subsystem-specific technical persistence only (unless Morris elevates).
If sharing Neon product-wide is implied, treat product-persistence elevation as **UNRESOLVED** pending separate Morris gate.

### Classification of SQLite delivery if B chosen

**VALID BUT SUPERSEDED IF MORRIS CHOOSES POSTGRES**

Candidate `082326a1…` remains historically valid Option A Delivery evidence, but HARD closure path moves to a new F3-PG Delivery + QA.

---

## OPTION C — REJECTED AS OVERDESIGN

### Intent (rejected)

Ship a multi-adapter SQLite+Postgres abstraction layer and/or dual-env runtime that selects engine by configuration for F3 journal **before** first REAL.

### Why rejected

- Creates abstraction/debt without first-REAL benefit
- Neither KEEP nor thin F3-PG requires a dual-adapter platform now
- Dual-env increases test matrix, CI surface, and confused-state risk
- Product persistence remains NOT_SELECTED — a platform multi-adapter smells like premature Option D pivot without Morris product gate
- Violates simplest-path boundary answer (Q9/Q10): SQLite now; thin F3-PG later **if** needed — not both at once

### Classification

**REJECTED AS OVERDESIGN** — do not Delivery.

---

## Options board

| Option | One-line | Status for Morris |
|---|---|---|
| A KEEP SQLITE | Resume Cycle 9 QA on `082326a1…` | **Recommended** (see recommendation.md) |
| B F3 POSTGRES | New Delivery; supersede SQLite for HARD close | Alternative GO REVISE |
| C Multi-adapter | Dual engine abstraction now | **REJECTED** |

<!-- end options.md -->

---

### INLINE FILE: postgres-neon-current.md

<!-- begin postgres-neon-current.md -->
# PostgreSQL / Neon FinOps Current-State Map

**Scope:** FinOps PG stack present on APP at DEL HEAD=`4b1a058` (= origin/main)
**Tag legend:** PROVEN / ASSUMED / UNKNOWN

---

## 1. package.json dependencies — PROVEN

**Path:** `projects/sfia-studio/app/package.json`

- dependency: `pg` `~8.22.0`
- devDependency: `node-pg-migrate` `^8.0.4`
- scripts:
  - `migrate:up` / `migrate:down` → `--migrations-dir db/migrations --database-url-var DATABASE_URL_DIRECT`

---

## 2. Migrations — PROVEN

**Dir:** `projects/sfia-studio/app/db/migrations/`

1. `1754500000000_finops-t1-usage-ledger.js`
2. `1754600000000_finops-t2-aggregation-reconciliation.js`
3. `1754600001000_finops-t6-audit-journal.js`
4. `1754600002000_finops-t3-alert-review-state.js`
5. `1754600003000_finops-t4-enforcement-projection.js`
6. `1754600004000_finops-t7-rollout-config.js`
7. `1754600005000_finops-t2-billed-period-attribution.js`

All FinOps-named; no F3/OA authority journal migration.

---

## 3. createFinOpsPool.ts — PROVEN

**Path:** `lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts`

- Factory returns `pg.Pool`
- Options: `connectionString`, `max`, `connectionTimeoutMillis`, `idleTimeoutMillis`, `statementTimeoutMillis`, `ssl`
- SSL: **explicit only**; default `false` (local/CI); Neon must pass secure SSL explicitly — never inferred from URL
- Error text mentions `DATABASE_URL` (message only; factory takes caller-supplied `connectionString`)
- `closeFinOpsPool(pool)` → `pool.end()`
- Does **not** read `process.env` itself

**Env var names seen in FinOps PG ecosystem (names only):**

- `DATABASE_URL` — integration tests / pool connection string input
- `DATABASE_URL_DIRECT` — migrations + T7 operator / target identity
- `OPENAI_ADMIN_KEY` — costs adapter (adjacent; not pool)

---

## 4. Ledger / Audit / Rollout txn patterns — PROVEN

### postgresFinOpsUsageLedger.ts

- `pool.connect()` → `BEGIN` → `INSERT … ON CONFLICT (dedup_key) DO NOTHING`
- rowCount=1 → `COMMIT` created
- else SELECT-by-dedup → fingerprint compare → duplicate / conflict → `COMMIT`/`ROLLBACK`
- `finally` releases client

### postgresFinOpsAuditJournal.ts

- Append-only `pool.query(INSERT INTO finops_audit_event …)` — **no** explicit BEGIN/CAS
- Redaction assert before insert

### postgresFinOpsRolloutStore.ts

- Table: `finops_rollout_config`
- Upsert: single-statement `INSERT … ON CONFLICT DO UPDATE` with `revision = revision + 1`
- CAS: single atomic CTE (`UPDATE` on mode+revision match ∪ conditional `INSERT … ON CONFLICT DO NOTHING` for absent OFF/null first-writer)

---

## 5. Runtime composition — PROVEN

| Module | Role |
|---|---|
| `composeFinOpsRuntime.ts` | Caller-owned `Pool` → usage ledger + audit journal + capture; server-only; does not create/close pool or read env |
| `composeFinOpsT7Runtime.ts` | Reuses T6 compose + aggregates/reconciliation/projection/rollout; default-OFF; no pool create/env |
| `finOpsT7TargetIdentity.ts` | Parse-safe identity from `DATABASE_URL_DIRECT` string **without I/O**; fingerprint compare fail-closed |

---

## 6. Neutral platform DB abstraction outside finops/ + d1/? — PROVEN: NO

`rg` for `createPool|DatabaseSync|pg.Pool|from "pg"|new Pool` outside `finops/` and `d1/`:

| Location | Finding |
|---|---|
| `lib/ops1/**` | Separate SQLite `DatabaseSync` (OPS1), not PG |
| `lib/oa/critical-ack/.../sqliteAuthorityAttemptJournal.ts` | SQLite via `openD1Db` |
| `scripts/finops-t7-shadow-rollout.ts` | FinOps operator script: `new Pool` + `DATABASE_URL_DIRECT` |
| `lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts` | `import type { Pool } from "pg"` only (FinOps shadow pilot wiring) |
| FinOps tests | `createFinOpsPool` |

**Conclusion:** No neutral platform PG abstraction. Only FinOps-branded `createFinOpsPool` + raw `pg` in FinOps script/type imports. OPS1/D1 are SQLite silos.

---

## 7. DATABASE_URL_DIRECT usage scope — PROVEN

Paths referencing the **name** `DATABASE_URL_DIRECT`:

- `package.json` migrate:up/down
- `lib/oa/finops/server/finOpsT7TargetIdentity.ts` (docs/comment + identity derivation input)
- `scripts/finops-t7-shadow-rollout.ts` (required env for operator)
- FinOps tests mentioning the name (`t1.ledger`, `t2.aggregate`, `t7.shadow-activation-operator.unit`)

**Not used** by F3 critical-ack / execution-attempt / vertical-slice-runtime paths.

---

## 8. Neon references (names only) — PROVEN

Basenames under `projects/sfia-studio` / tests / docs that mention Neon (non-exhaustive of body text; names only):

- FinOps lot docs `103`, `123`, `125`–`128`, `135`–`147`, `149`–`150`, `154`–`157`, `160`–`162` (`*-finops-*` / backlog)
- Code/tests: `createFinOpsPool.ts`, `composeExecutionRunD2D3T7ShadowPilot.ts`, FinOps postgres integration tests (`t1`/`t2`/`t3`/`t4`/`t6`/`t7*`) — typically “never Neon” for ephemeral CI Postgres

Pilot target name seen in prior PR body artifacts: `neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot` (FinOps T7; not F3).

<!-- end postgres-neon-current.md -->

---

### INLINE FILE: precheck.md

<!-- begin precheck.md -->
# R-T-A3-2 Persistence Reassessment — PRE-CHECK

**Generated:** 2026-08-12
**DEL:** `f3-real-prerequisites-delivery`
**Verdict:** **PRECHECK OK** (with notes)

## Git truth

| Check | Expected | Observed | Status |
|---|---|---|---|
| BRANCH | `delivery/sfia-studio-f3-real-prerequisites` | `delivery/sfia-studio-f3-real-prerequisites` | OK |
| HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` | `4b1a058050ae81d56cb6d96b88e8a57380799a86` | OK |
| origin/main | same SHA | `4b1a058050ae81d56cb6d96b88e8a57380799a86` | OK |
| REMOTE_DELIVERY | ABSENT | `ls-remote` lines=0 | OK |
| STAGED | EMPTY | empty | OK |
| HANDOFF tip | `832eb175307379150811b6331223159e399d62b6` | match | OK |
| Candidate SHA BEFORE | `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` | recomputed MATCH | OK |

### Candidate SHA recompute

- Manifest: `.tmp-sfia-review/r-t-a3-2-option-a-delivery/candidate-manifest.txt`
- FREEZE_SHA / NEW_CANDIDATE_SHA: `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab`
- Recipe: SHA-256 of the 40 `path sha256` content lines (comments excluded) → **MATCH**

### Notes (non-STOP)

- Working tree is **dirty (unstaged)** with Option-A delivery candidate files under `projects/sfia-studio/app/` — expected for this delivery worktree; **not staged**; no product mutations performed by this reassessment.
- This PRE-CHECK does **not** authorize product persistence SELECT or Neon apply.

## Artifacts

- `sqlite-current.md`
- `postgres-neon-current.md`
- `boundaries.md`

<!-- end precheck.md -->

---

### INLINE FILE: product-persistence-impact.md

<!-- begin product-persistence-impact.md -->
# Product Persistence Impact — R-T-A3-2

**Generated:** 2026-08-12
**Current product persistence status:** **NOT_SELECTED**
**This reassessment changes that status:** **NO** (without separate Morris decision)

---

## Core rule

**Choosing PostgreSQL for R-T-A3-2 = NO — subsystem-specific technical persistence only** (parallel to FinOps).

It is **NOT** automatic Product persistence **SELECTED**.

Elevating F3 (or shared Neon) to **product-wide** persistence = **SEPARATE Morris gate**.

---

## Mapping

| Decision under R-T-A3-2 gate | Product persistence effect |
|---|---|
| KEEP SQLITE | Unchanged — NOT_SELECTED / PILOT-LOCAL |
| REVISE POSTGRES (F3-owned tables, no FinOps domain import) | Still NOT_SELECTED unless Morris elevates |
| Share Neon physical DB with FinOps (schema-isolated) | Still technical sharing only — **NOT** product SELECT by itself |
| Imply Neon as product-wide store / platform SoT | **UNRESOLVED** → requires separate Morris product-persistence gate |
| Multi-adapter platform (Option C) | Rejected; would smell like premature platform SELECT |

---

## Honesty labels that must remain loud

- `PILOT-BOUNDED AUTHORITY/ATTEMPT DURABILITY ≠ PRODUCT PERSISTENCE SELECTED`
- `crossStoreDurable = false`
- `productionRollbackProven = false`
- Local sqlite / F3 PG table ≠ product durable platform

---

## Why this separation matters

- FinOps Neon foundation is **domain-scoped**, not a declared studio product persistence platform
- No neutral platform DB abstraction exists outside FinOps + D1 silos
- Silent elevation would mortgage product architecture without a Morris product gate
- KEEP vs REVISE is about **F3 journal engine**, not about selecting the product store

---

## Status line

```
PRODUCT PERSISTENCE — NOT_SELECTED
R-T-A3-2 ENGINE CHOICE — DOES NOT AUTO-SELECT PRODUCT PERSISTENCE
ELEVATION — SEPARATE MORRIS GATE REQUIRED
```

<!-- end product-persistence-impact.md -->

---

### INLINE FILE: recommendation.md

<!-- begin recommendation.md -->
# Recommendation — R-T-A3-2 Persistence Frontier

**Generated:** 2026-08-12
**Status:** **RECOMMENDED — NOT DECIDED**
**Gate:** DECISION REQUIRED — MORRIS — R-T-A3-2 PERSISTENCE FRONTIER

---

## RECOMMENDATION — KEEP SQLITE

Keep the current SQLite Authority/Attempt durability frontier (Option A Delivery candidate). Do not pivot F3 journal to PostgreSQL/Neon before Cycle 9 QA and first REAL learning.

**Candidate SHA (must remain byte-identical under KEEP):**
`082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab`

---

## Max 5 reasons

1. **First REAL needs fail-closed durable markers without requiring FinOps/Neon availability.**
2. **SQLite locality is a useful property for the pilot-bounded Authority/Attempt journal** (PROVEN Option A design; boundaries Q6/Q7/Q10).
3. **Postgres foundation is real but FinOps-scoped; no neutral platform DB layer** — F3→FinOps coupling is suspect; a thin F3-PG adapter would be a **SEPARATE Delivery** anyway (boundaries Q1–Q3).
4. **Delivered candidate `082326a1…` is VALID for Cycle 9 QA**; switching engines before formal crash/restart QA burns calendar without a proven NFR failure of SQLite for the mono-operator pilot.
5. **Reversible:** KEEP now does not forbid later REVISE TO POSTGRES after REAL/pilot learning; **sunk cost alone is NOT the reason** — first-REAL suitability is.

---

## Risks accepted

- Dual persistence tooling debt (F3 SQLite + FinOps PG)
- Multi-process SQLite limits (`node:sqlite` process-local singleton; file-lock ASSUMED; multi-instance UNKNOWN)

## Debt avoided

- Premature platform pivot
- FinOps coupling via FinOps-branded pool/modules
- Network dependency before first REAL

## Immediate next (if Morris confirms KEEP)

Resume **Cycle 9 QA** on candidate `082326a1…` (formal crash/restart).
QA remains **paused until Morris decision**.

---

## Explicit non-claims

- Does **not** close R-T-A3-2 HARD by itself
- Does **not** flip `crossStoreDurable` or `productionRollbackProven`
- Does **not** SELECT product persistence
- Does **not** consume Gate D / authorize Cursor REAL

---

## Status line

```
RECOMMENDATION — KEEP SQLITE
STATUS — RECOMMENDED — NOT DECIDED
PRODUCT PERSISTENCE — NOT_SELECTED (unchanged without Morris)
R-T-A3-2 — REMAINS OPEN HARD
CYCLE 9 QA — PAUSED UNTIL MORRIS DECISION
CANDIDATE — 082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab
```

<!-- end recommendation.md -->

---

### INLINE FILE: security-devops-run-finops.md

<!-- begin security-devops-run-finops.md -->
# Security / DevOps / RUN / FinOps Matrices — R-T-A3-2

**Generated:** 2026-08-12
**Scope:** F3 Authority/Attempt journal frontier vs FinOps PG/Neon foundation
**Tag legend:** PROVEN / ASSUMED / UNKNOWN — costs UNKNOWN where not in repo (no invented Neon prices)

---

## 1. Security matrix

| Topic | SQLite F3 | Postgres/Neon (FinOps / F3-hypothetical) | Tag | Notes |
|---|---|---|---|---|
| AuthN / AuthZ for Critical Ack | Unchanged; AuthJs GitHub identity adapter | Unchanged by engine swap | PROVEN | Engine ≠ IAM |
| Secret surface | Path envs only (`D1_SQLITE_PATH`, `OPS1_EXEC_ROOT`) | `DATABASE_URL` / `DATABASE_URL_DIRECT` connection strings | PROVEN | PG expands secret inventory |
| Transport encryption | N/A (local FS) | Explicit SSL on FinOps pool; default `false`; Neon must set secure SSL | PROVEN | `createFinOpsPool.ts` — never infer SSL from URL |
| Data-at-rest encryption | OS/volume dependent | Neon/host dependent | UNKNOWN | Not evidenced in app code |
| SQL injection / query discipline | Parameterized inserts in journal adapter | Parameterized FinOps adapters | ASSUMED | Follow existing adapter patterns |
| Schema blast radius | D1 SQLite silo; F3 table isolated from FinOps | Physical share of Neon possible; needs table/schema isolation | PROVEN / ASSUMED | boundaries Q4/Q5 |
| Credential leakage in logs | Path strings may appear | Connection strings must never log | ASSUMED | FinOps identity fingerprint exists; no F3-PG yet |
| Multi-tenant isolation | Pilot mono-operator | FinOps Neon target identity fail-closed | PROVEN (FinOps) | F3 pilot not multi-tenant product store |
| Confused-deputy / domain import | No FinOps domain on F3 path | Reusing `createFinOpsPool` pulls FinOps naming/path | PROVEN | Prefer thin non-FinOps pool if PG chosen |

**Security verdict:** SQLite minimizes network/credential attack surface for Critical launch gate. PG is acceptable **only** with explicit SSL, isolated schema, and no FinOps domain import.

---

## 2. DevOps matrix

| Topic | SQLite F3 | Postgres/Neon | Tag | Notes |
|---|---|---|---|---|
| Dependency | `node:sqlite` / D1 open helper | `pg` ~8.22 + `node-pg-migrate` | PROVEN | Both already in app package graph |
| Migrations | In-process `SCHEMA_SQL` on open | `migrate:up/down` + FinOps migration set | PROVEN | No F3 PG migration today |
| CI requirements | Local temp sqlite paths | Ephemeral Postgres + `DATABASE_URL` for FinOps tests | PROVEN | F3-PG would extend CI |
| Env vars (names only) | `D1_SQLITE_PATH`, `OPS1_EXEC_ROOT` | `DATABASE_URL`, `DATABASE_URL_DIRECT` | PROVEN | Values never recorded here |
| Deploy topology | Single-host / process-local pilot | Shared DB multi-process capable | PROVEN / ASSUMED | sqlite-current §4 |
| Rollback of schema | File replace / reopen ASSUMED | migrate:down exists for FinOps | ASSUMED / PROVEN | `productionRollbackProven` still false |
| Observability tooling | Local SQL / file inspect | PG tooling + FinOps audit patterns | ASSUMED | |
| Dual-engine ops | Second storage engine if FinOps stays PG | Single engine if F3 also PG | PROVEN debt either way | KEEP accepts dual tooling |

**DevOps verdict:** KEEP SQLite avoids Critical-path `DATABASE_URL` before first REAL; accepts dual persistence tooling debt.

---

## 3. RUN matrix

| Topic | SQLite F3 | Postgres/Neon | Tag | Notes |
|---|---|---|---|---|
| Availability for launch | Local file must be writable | Neon/PG must be reachable | PROVEN | Q7/Q8 |
| Fail-closed on write failure | Blocks launch before adapter | Would block launch if PG down | PROVEN / ASSUMED | `startExecution.ts` |
| Restart recovery | Journal-driven UNKNOWN/REVIEW_REQUIRED | Same port semantics possible | PROVEN design (SQLite) | Cycle 9 QA paused |
| Multi-writer contention | `BEGIN IMMEDIATE`; WAL/busy UNKNOWN | Row/txn isolation via Pool | ASSUMED / PROVEN (FinOps patterns) | |
| Operator runbooks | PILOT-LOCAL labels; path under `.sfia-exec` | FinOps T7 operator script exists | PROVEN | No F3-PG operator |
| Cross-store durable | false | false (unless platform pivot) | PROVEN | Honesty unchanged |
| Cursor REAL readiness | Not authorized by engine choice | Not authorized by engine choice | PROVEN | Gate D NOT READY |

**RUN verdict:** For first REAL, local fail-closed SQLite is the lower-coupling RUN posture. PG improves multi-process RUN characteristics after a dedicated Delivery.

---

## 4. FinOps / cost matrix

| Topic | SQLite F3 | Postgres/Neon | Tag | Notes |
|---|---|---|---|---|
| Hosted DB subscription cost | N/A (local file) | **UNKNOWN** — no Neon price table in repo | UNKNOWN | Do not invent prices |
| Egress / connection cost | N/A | **UNKNOWN** | UNKNOWN | |
| Operator time (migrations, creds, SSL) | Low for pilot path | Higher before first REAL | ASSUMED | |
| FinOps domain reuse savings | N/A | Tempting but **coupling risk** — not a cost win if it mortgages F3 boundary | PROVEN hazard | Q1–Q3 |
| Dual backup / dual tooling cost | Accepted under KEEP | Avoided if F3 moves PG (new Delivery cost instead) | ASSUMED | |
| Sunk Option A Delivery cost | Already delivered+unit tested | Would supersede candidate for HARD closure if Morris chooses PG | PROVEN | Candidate `082326a1…` |
| Product persistence commercial decision | NOT_SELECTED | NOT automatic SELECT if F3 uses PG | PROVEN | Separate Morris gate |

**FinOps/cost verdict:** Hosted costs are **UNKNOWN** in-repo. Decision driver is **coupling + network dependency + calendar**, not claimed Neon price savings.

---

## Cross-matrix summary

| Lens | Favors KEEP SQLite | Favors REVISE Postgres | Unresolved / UNKNOWN |
|---|---|---|---|
| Security | Smaller secret/network surface | Mature SSL/pool patterns (FinOps) | At-rest encryption |
| DevOps | No Critical-path DATABASE_URL | One engine long-term | Dual-ops exact burden |
| RUN | Locality; fail-closed without Neon | Multi-process shared DB | Measured RPO/RTO |
| FinOps/cost | Avoid premature hosted dependency | Possible future consolidation | Neon prices |

<!-- end security-devops-run-finops.md -->

---

### INLINE FILE: sqlite-current.md

<!-- begin sqlite-current.md -->
# SQLite F3 Current-State Map

**Scope:** F3 authority/attempt durability on D1 `node:sqlite`
**Tag legend:** PROVEN = code evidence · ASSUMED = reasonable inference · UNKNOWN = not evidenced

---

## 1. Production wiring uses SqliteAuthorityAttemptJournal — PROVEN

**Path:** `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

- Imports `SqliteAuthorityAttemptJournal` from `@/lib/oa/critical-ack`.
- `wireOaStack` constructs `new SqliteAuthorityAttemptJournal()` once and shares it across:
  - `executionContractServices` (`criticalAckJournal`)
  - `executionAttemptServices` (`authorityAttemptJournal`)
  - `createProductionAcknowledgeCritical({ journal })`
- Runtime surface advertises:
  - `authorityAttemptJournalClassName: "SqliteAuthorityAttemptJournal"`
- Explicit labels in comments:
  - `PILOT-BOUNDED AUTHORITY/ATTEMPT DURABILITY ≠ PRODUCT PERSISTENCE SELECTED`
  - `crossStoreDurable remains false`

---

## 2. Journal adapter + D1 connection lifecycle — PROVEN

### Files

| File | Role |
|---|---|
| `lib/oa/critical-ack/infrastructure/sqliteAuthorityAttemptJournal.ts` | Journal adapter implementing `AuthorityAttemptJournalPort` |
| `lib/d1/db.ts` | `DatabaseSync` open/migrate singleton + schema SQL |
| `lib/d1/paths.ts` | Path resolution for `d1.sqlite` |

### Connection lifecycle — PROVEN

- `SqliteAuthorityAttemptJournal` ctor default: `openD1Db()`.
- `openD1Db(dbPath = resolveD1SqlitePath())`:
  - process-local **singleton** keyed by path (`singleton` / `singletonPath`)
  - closes previous singleton if path changes
  - `new DatabaseSync(dbPath)` then `migrate(db)` (`SCHEMA_SQL` + `PRAGMA integrity_check`)
- `resetD1DbForTests()` closes and clears singleton.

### Path resolution — PROVEN

`resolveD1SqlitePath()` order:

1. `D1_SQLITE_PATH` (env name only)
2. else `OPS1_EXEC_ROOT` → `<root>/state/d1.sqlite`
3. else `<studioRoot>/.sfia-exec/local-i1/state/d1.sqlite` (must stay under `.sfia-exec`)

### BEGIN IMMEDIATE — PROVEN

`append()`:

```
BEGIN IMMEDIATE
INSERT INTO oa_authority_attempt_journal (...)
COMMIT
```

On error: `ROLLBACK` then rethrow. Concurrent double-ack protected by unique partial index on `CRITICAL_ACK_GRANTED` fingerprint (schema).

### Schema table — PROVEN

Table: `oa_authority_attempt_journal` in `lib/d1/db.ts` `SCHEMA_SQL`.

Kinds include: `CRITICAL_ACK_GRANTED|CONSUMED`, `CONFIRMATION_BOUND`, `ATTEMPT_CREATED`, `ATTEMPT_LAUNCHED`, `ATTEMPT_TERMINAL`, `ACTIVE_AUTHORITY_INVALIDATED`, `RECONCILE_DISPOSITION`.

Indexes: fingerprint, attempt, idempotency, process_epoch; unique partial on `(contract_fingerprint) WHERE kind='CRITICAL_ACK_GRANTED'`.

---

## 3. startExecution ATTEMPT_CREATED / ATTEMPT_LAUNCHED — PROVEN

**Path:** `lib/oa/execution-attempt/application/startExecution.ts`

When journal present:

1. Prior rows by `attemptId`:
   - `ATTEMPT_LAUNCHED` → fail-closed no relaunch
   - `ATTEMPT_CREATED` without `LAUNCHED` → fail-closed no auto-resume
2. Append `ATTEMPT_CREATED` **before** `adapter.launch`
   - create-append failure → never launch (`EXECUTION_PERSISTENCE_FAILED`)
3. On validated LaunchAck, append `ATTEMPT_LAUNCHED` **before** Attempt `running` persist
   - launched-append failure after launch → fail-closed without inventing SUCCESS (CREATED-without-LAUNCHED ⇒ UNKNOWN on restart)

Journal absent (legacy unit tests) → skip ATTEMPT_* markers.

---

## 4. Multi-process behavior of `node:sqlite` DatabaseSync — ASSUMED / UNKNOWN

| Claim | Tag | Evidence |
|---|---|---|
| Singleton is **process-local** only | PROVEN | module-level `let singleton` in `db.ts` |
| Separate Node processes get separate connections to same file | ASSUMED | standard SQLite file semantics; no cross-process singleton |
| `BEGIN IMMEDIATE` serializes writers across connections/processes via SQLite locks | ASSUMED | SQLite reserved-lock semantics; no custom distributed lock in code |
| Multi-writer correctness under multi-instance deploy proven | UNKNOWN | no multi-process integration harness found for F3 journal |
| WAL / busy_timeout / multi-host NFS behavior configured | UNKNOWN | no explicit PRAGMA wal/busy settings in `db.ts` beyond schema + integrity_check |

**Implication:** F3 SQLite journal is safe as a **single-host / few-process local pilot**, not as a multi-region product store.

---

## 5. Local-only assumptions — PROVEN

From `sqliteAuthorityAttemptJournal.ts` header:

- Label: **PILOT-LOCAL PROOF HARNESS ONLY ≠ PRODUCT DURABLE**
- `crossStoreDurable` remains false
- `productionRollbackProven` remains false
- product persistence remains **NOT_SELECTED**

From architecture recommendation/options (`.tmp-sfia-review/r-t-a3-2-architecture/`):

- Option A = bounded SQLite Authority/Attempt durability frontier for F3 pilot
- Does **not** select product persistence platform
- Path lives under `.sfia-exec` (or env overrides) — local filesystem

Env names involved (values never recorded here): `D1_SQLITE_PATH`, `OPS1_EXEC_ROOT`.

<!-- end sqlite-current.md -->

---

## Review Handoff publish

| Field | Value |
| --- | --- |
| Message | `docs(review-handoff): publish F3 R-T-A3-2 persistence frontier reassessment` |
| Force | NO (FF only) |
| Inbound tip/blob | `832eb175307379150811b6331223159e399d62b6` / `323e7d88008cb3993324b5a47ada6f0fc46e89c4` |
| Publisher | `scripts/sfia/publish-review-handoff.sh` |
| Handoff worktree | `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` |
| FINAL tip | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |
| FINAL blob | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |

---

## Cursor report — fields 1–52

| # | Field | Value |
| ---: | --- | --- |
| 1 | timestamp CEST + UTC | 2026-08-12 15:27:17 CEST (+0200) / 2026-08-12 13:27:17 UTC |
| 2 | GO / context consommé | Cycle 6 Architecture Critical R-T-A3-2 persistence reassessment; R-T-A3-1 CLOSED; Option A ADOPTED+DELIVERED; QA paused; Product persistence NOT_SELECTED |
| 3 | cycle | 6 — Architecture Critical — R-T-A3-2 PERSISTENCE REASSESSMENT |
| 4 | profil | Critical |
| 5 | justification Critical | Persistence frontier decision blocks Cycle 9 QA / HARD path; SQLite vs PG/Neon trade-offs |
| 6 | blocs | maps; boundaries; NFR; sec/devops/run/finops; options; recommendation; Morris gate; product-persistence; FULL pack; L3 handoff |
| 7 | worktree | f3-real-prerequisites-delivery |
| 8 | branche | `delivery/sfia-studio-f3-real-prerequisites` |
| 9 | HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| 10 | origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| 11 | status initial | dirty local F3 Option A candidate (expected) |
| 12 | staged initial | empty |
| 13 | untracked / review artifacts | `.tmp-sfia-review/r-t-a3-2-persistence-reassessment/` (+ prior delivery artifacts) |
| 14 | remote delivery branch | ABSENT |
| 15 | template path/blob | prompts/templates/sfia-cycle-execution-template.md / `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| 16 | handoff entrant tip/blob | `832eb175307379150811b6331223159e399d62b6` / `323e7d88008cb3993324b5a47ada6f0fc46e89c4` |
| 17 | Candidate SHA BEFORE | `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` |
| 18 | Current State confirmé | PRECHECK OK; Option A delivered; PG/Neon FinOps mapped; recommendation KEEP SQLITE NOT DECIDED |
| 19 | fichiers prévus en écriture | review artifacts under `.tmp-sfia-review/r-t-a3-2-persistence-reassessment/` + chatgpt-review.md only |
| 20 | fichiers réellement modifiés/créés | nfr-matrix.md; security-devops-run-finops.md; options.md; recommendation.md; morris-gate.md; product-persistence-impact.md; (+ precheck/SUMMARY/maps); chatgpt-review.md |
| 21 | product mutations | **0** |
| 22 | SQLite map complete | YES |
| 23 | Postgres/Neon map complete | YES |
| 24 | boundaries Q1–Q10 complete | YES |
| 25 | NFR matrix 22 complete | YES (SOURCE=RECONSTRUCTED_FROM_GO_CONTEXT; closest GO §D = INV-01…15) |
| 26 | Security/DevOps/RUN/FinOps matrices | YES (costs UNKNOWN where absent) |
| 27 | options A/B/C | KEEP / F3-PG / REJECTED overdesign |
| 28 | recommendation | **KEEP SQLITE** — RECOMMENDED — NOT DECIDED |
| 29 | Morris gate wording | GO CONFIRM KEEP SQLITE / GO REVISE POSTGRES / NO-GO prepared |
| 30 | product-persistence impact | PG choice ≠ product SELECT; elevation separate gate |
| 31 | Option C | REJECTED AS OVERDESIGN |
| 32 | Cycle 9 QA | PAUSED UNTIL MORRIS DECISION |
| 33 | R-T-A3-1 | ACCEPTED / CLOSED BY MORRIS |
| 34 | FinOps coupling assessment | No neutral PG abstraction; thin F3-PG = separate Delivery |
| 35 | typecheck | N/A (no product code change) |
| 36 | lint | N/A (no product code change) |
| 37 | build | N/A (no product code change) |
| 38 | corrective loops | 0 |
| 39 | Candidate SHA AFTER | `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` |
| 40 | freeze / byte-identical confirmation | YES — BEFORE=AFTER |
| 41 | R-T-A3-1 status | ACCEPTED / CLOSED BY MORRIS (repo sync debt untouched) |
| 42 | R-T-A3-2 status | OPEN HARD |
| 43 | Project↔Cycle residual | remains residual |
| 44 | crossStoreDurable status | false |
| 45 | productionRollbackProven status | false |
| 46 | Product persistence status | NOT_SELECTED (unchanged) |
| 47 | Gate D | NOT READY / NOT CONSUMED |
| 48 | Cursor REAL | 0 |
| 49 | product Git write count | 0 |
| 50 | review pack FULL / Synthesis-only NO | FULL / NO |
| 51 | handoff final tip | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |
| 52 | handoff final blob | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |

---

## Verdict exact

```
R-T-A3-2 PERSISTENCE ARCHITECTURE REASSESSMENT COMPLETE —
EXISTING SQLITE DELIVERY PRESERVED BYTE-IDENTICAL —
POSTGRESQL / NEON FOUNDATION ASSESSED —
FINOPS DOMAIN VS SHARED TECHNICAL PERSISTENCE BOUNDARY ASSESSED —
NFR / SECURITY / DEVOPS / RUN / FINOPS TRADE-OFFS COMPLETE —
RECOMMENDATION PREPARED —
DECISION REQUIRED — MORRIS — R-T-A3-2 PERSISTENCE FRONTIER —
R-T-A3-2 REMAINS OPEN HARD —
CYCLE 9 QA REMAINS PAUSED UNTIL MORRIS DECISION —
PRODUCT PERSISTENCE STATUS NOT CHANGED WITHOUT MORRIS DECISION —
GATE D NOT READY / NOT CONSUMED —
NO CURSOR REAL —
PRODUCT CANDIDATE BYTE-IDENTICAL —
NO PROJECT GIT WRITE —
HANDOFF UPDATED — REMOTE VERIFIED
```

---

END OF FULL REVIEW PACK
