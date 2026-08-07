# 145 — FinOps Technical Lot T3 — Alert & Morris Review State — Architecture / Implementation Preparation

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/145-assistant-sfia-native-openai-finops-technical-lot-t3-alert-morris-review-preparation.md`
**Cycle:** 6 — Architecture technique
**Profil:** Critical
**Typologie:** EVOL / DOC / ARCH
**Statut:** ARCHITECTURE / IMPLEMENTATION PREPARATION COMPLETE WITH RESERVES — NO T3 DELIVERY — NO OPTION ADOPTED

---

## A. Statut et anti-claims

| Claim | Statut |
|-------|--------|
| T3 Delivery executed | **FALSE** |
| T3 code / migration / tests implemented | **FALSE** |
| T3 option SELECTED / DECIDED / ADOPTED in this cycle | **FALSE** — all options **CANDIDATE / NOT DECIDED** |
| Thresholds 15/20/25/30 USD activated in runtime | **FALSE** |
| Recalibration completed | **FALSE** — still **REQUIRED** before real threshold usage |
| S30 soft enforcement owned by T3 | **FALSE** — T4 owns future S30 |
| T6 globally complete / durable audit globally composed | **FALSE** |
| T6-ext-T2 / T6-ext-T3T4 authorized | **FALSE** — EXCLUDED / NOT AUTHORIZED |
| Cron / poller / external notification | **FALSE** — out of scope |
| New Morris IAM / product session identity invented | **FALSE** |
| Neon / provider-real / package / CI modified | **FALSE** |
| Project commit / push / PR / merge | **FALSE** |
| Scalable / secure / production-ready without proof | **NOT CLAIMED** |
| `canActAsMorris` = real end-user session identity | **FALSE** — recorded authority evidence ≠ login/session IAM |

This document is the **sole project deliverable** of this cycle. It prepares Morris arbitration. It does **not** authorize Delivery T3.

---

## B. GO Morris exact

```
ok go cloture puis lancer la préparation de T3
```

**Consumed interpretation (this cycle):**

1. **T6-foundation** is formally **CLOSED WITH RESERVES** (Morris decision dated **2026-08-07**).
2. **T3 Architecture technique preparation** is **AUTHORIZED**.
3. **T3 Delivery** is **NOT AUTHORIZED**.
4. **No candidate option** produced here is automatically adopted.

**Authorized:** read repository · create document 145 only · Full Review Pack · L3 handoff publish.
**Not authorized:** T3 Delivery · code/migration/tests · project commit/push/PR/merge · T4/T5/T6-ext · global T6 composition · recalibration adoption · Neon · provider-real · package/CI/IAM invention · cron/external notification.

---

## C. Horodatages

| Fuseau | Valeur |
|--------|--------|
| CEST (Git Truth start) | 2026-08-07 18:22:53 CEST (+0200) |
| UTC (Git Truth start) | 2026-08-07 16:22:53 UTC |
| Morris T6 closure + T3 prep GO | 2026-08-07 (terminal GO; exact clock not separately instrumented beyond cycle timestamps) |

---

## D. Git Truth

| Champ | Valeur |
|-------|--------|
| Repo | `mcleland147/sfia-workspace` |
| Orchestration start WT | `.tmp-sfia-review/worktrees/finops-t2-main` (tracked-clean `main`) |
| T3 branch | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t3-alert-morris-review-state` |
| T3 worktree | `.tmp-sfia-review/worktrees/finops-t3-preparation` |
| `origin/main` | `b8259859983577c31965aa877c956e7a25dd1c4d` |
| HEAD | `b8259859983577c31965aa877c956e7a25dd1c4d` |
| Staged | empty |
| Project change | document 145 only (untracked / unstaged) — **no commit** |
| Handoff before tip | `55e692a48768645514b634a88a1d0e53cffcd8f0` |
| Handoff before blob | `1a861212289538cbb465acdefdca81414ac99a99` |
| Handoff before commit | `docs(review-handoff): publish T6 post-merge` |

Evidence: `.tmp-sfia-review/t3-preparation/git-truth-initial.txt`

---

## E. Cycle Knowledge Contract

| Champ | Valeur |
|-------|--------|
| Recherché | oui |
| Cycle qualifié | 6 — Architecture technique |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` |
| Statut | **candidate** · version **0.1.0** |
| Usage | experimental cognitive guidance |
| Autorité d’exécution | **aucune** |
| Fallback | N/A — pilote détaillé trouvé |

**Limits applied:** no implementation; no silent structural adoption; ≥2 options on structuring decisions; reverse/debt/risk distinguished; no scalable/secure/prod claims without proof.

---

## F. Sources consultées

### Méthode

| Source | Rôle |
|--------|------|
| `prompts/templates/sfia-cycle-execution-template.md` | cycle execution template |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | routing |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | operating model |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | guardrails |
| `method/sfia-fast-track/checklists/sfia-validation-checklist.md` | validation checklist |
| CKC pilot `03-architecture-technique.md` | candidate architecture guidance |
| `scripts/sfia/publish-review-handoff.sh` | L3 handoff publisher |

### Projet / trajectoire

| Source | Rôle |
|--------|------|
| `103-…-backlog.md` | operational backlog · threshold policy table · critical path |
| `123-…-enforcement-decisions-applied.md` | A15/C20/S30 policy selections · recalibration |
| `125-…-technical-implementation-decisions-applied.md` | `D-ASST-IP0C-TECH-ALERT-01` durable in-app · conf · period · concurrency |
| `138-…-t2-t5-t6-grouped-preparation.md` | T2/T3/T4/T6 separation · critical path |
| `139` / `141` / `142` / `144` | T2 decisions / numeric / execution / PR readiness · R-PR-T2-API-01 |
| `143-…-t6-foundation-execution.md` | T6 foundation scope · fail-open · event enum |

### Runtime T2 (read)

- `app/lib/oa/finops/application/types.aggregate.ts`
- `recomputeAggregates.ts` · `reconcileProjectPeriod.ts` · `estimateUsageCost.ts`
- `domain/money.ts`
- `ports/finopsAggregatePort.ts` · `finopsReconciliationPort.ts` · `finopsPriceCatalogPort.ts`
- `infrastructure/postgres/postgresFinOpsAggregateStore.ts` · `postgresFinOpsReconciliation.ts`
- `app/db/migrations/1754600000000_finops-t2-aggregation-reconciliation.js`

### Runtime T6 (read)

- `finopsAuditTypes.ts` · `ports/finopsAuditJournalPort.ts`
- `postgresFinOpsAuditJournal.ts` (+ redaction helpers)
- `app/db/migrations/1754600001000_finops-t6-audit-journal.js`
- T1 capture `safeEmit` fail-open path (`captureFinOpsUsage.ts`)

### Authority / identity (read)

- `app/lib/oa/decision/**` — `AuthorityResolverPort`, `VerifyAuthority`, `MemoryAuthorityResolver`, `canActAsMorris`, `requireMorrisGate`
- Product disclosures: `iam: "NOT_SELECTED"` across vertical-slice / T-A7 surfaces
- No production NextAuth/session IAM binding FinOps T3 found

### Incoming handoff

- `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (T6 post-merge pack)

---

## G. Upstream validated state

| Lot | Status |
|-----|--------|
| T0 | **integrated** on `origin/main` |
| T1 | **integrated** on `origin/main` |
| T2 | **integrated** on `origin/main` |
| T6-foundation | **CLOSED WITH RESERVES** — Morris decision **2026-08-07** (this GO) |
| T3 preparation | **AUTHORIZED** |
| T3 Delivery | **NOT AUTHORIZED** |
| T4 / T5 / T7 | **NOT AUTHORIZED** in this cycle |
| T6-ext-T2 | **EXCLUDED** |
| T6-ext-T3T4 | **FUTURE / NOT AUTHORIZED** |

### T6 closure semantics (traced)

**CLOSED WITH RESERVES does NOT mean:**

- T6 globally complete;
- durable audit globally composed across all FinOps domains;
- all FinOps events audited;
- T6-ext authorized.

**Reserves preserved OPEN:**

| Reserve | Status |
|---------|--------|
| `R-T6-RUNTIME-COMPOSITION-01` | **OPEN** |
| `R-PR-T2-API-01` | **OPEN MINOR** |

Critical path (preserved): `T0 → T1 → T2 → T3 → T4 → T7` · T5 off immediate critical path.

---

## H. T2 runtime inventory (usable by T3)

Classification legend: **EXISTS** (code on main) · **DECIDED** (Morris/docs) · **ABSENT** · **CANDIDATE** (this prep only).

| Élément | Class | Truth |
|---------|-------|-------|
| `FinOpsProjectPeriodAggregate` | **EXISTS** | `projectId`, `periodStart` (UTC month `YYYY-MM-DD`), `currency`, `estimatedAmount` / `observedAmount` / `billedAmount` / `unknownAmount` as canonical decimal strings, token sums, `costEventCount`, `unavailableEstimationCount`, `rebuildVersion`, `rebuiltAt` |
| `FinOpsAggregateKey` | **EXISTS** | `{ projectId, periodStart, currency }` |
| Money | **EXISTS** + **DECIDED** | `numeric(20,8)` · BigInt minor · HALF_EVEN at rate×usage only · SUM of scale-8 without re-round (`money.ts`) |
| Cost-event ledger | **EXISTS** | append-only `finops_cost_event` · unique `dedup_key` · evidenceClass `estimated\|observed\|billed\|unknown` · SoT enum |
| Aggregate port read | **EXISTS** | `readAggregate` · `listAggregatesForProjectPeriod` |
| Exclusive rebuild | **EXISTS** | `withExclusiveProjectPeriodRebuild` — advisory lock, full project+period all currencies |
| `recomputeAggregates` | **EXISTS** | full rebuild from cost events; derived projection only |
| `reconcileProjectPeriod` | **EXISTS** | on-demand bounded batch · idempotent replay · finops-side-only failures |
| Price catalog port | **EXISTS** | versioned entries; **no seed real tariffs** |
| Threshold / alert tables | **ABSENT** | no T3 schema on main |
| Threshold evaluation service | **ABSENT** | |
| S30 / suspension | **ABSENT** in T2 (by design) | T2 must not alert/enforce |
| FX / multi-currency conversion | **ABSENT** | currency stored explicitly; FX future |
| `replaceProjectPeriodAggregates` public raw | **EXISTS** + reserve | no production callers; rebuild uses exclusive path — `R-PR-T2-API-01` OPEN MINOR |

### T2 frontiers T3 must not modify

- Append-only cost-event ledger truth;
- Aggregate rebuild semantics (full project+period);
- Money precision/scale/rounding;
- Estimation never becomes a hard blocker (policy already SELECTED in 125 TECH-CONF-01 for future enforcement — T3 must not contradict);
- T2 ports/migrations as delivery surface for “T3 convenience.”

### T2 amounts relevant to future threshold evaluation (**CANDIDATE** policy binding)

T2 exposes **separate** estimated / observed / billed / unknown buckets. Upstream policy (125 TECH-CONF-01): **estimated never blocks**; **billed / official provider-observed may block** (future T4). T3 informational/review triggers may use a **configured evaluation basis** (CANDIDATE — NOT DECIDED) but must preserve: estimated must not become S30 enforcement; T3 itself implements **no** run rejection.

---

## I. T6-foundation runtime inventory

| Élément | Class | Truth |
|---------|-------|-------|
| Event enum | **EXISTS** | `finops_capture_created` · `finops_capture_duplicate` · `finops_capture_failed` **only** |
| Table `finops_audit_event` | **EXISTS** | append-only triggers; payload jsonb |
| Journal port | **EXISTS** | `FinOpsAuditJournalPort.append` |
| Redaction | **EXISTS** | allow-list + secret-key drop + truncation |
| T1 emit path | **EXISTS** | `safeEmit` **fail-open / best-effort** — audit failure must not mutate ledger/user-run outcome |
| T3/T4/T5 event types | **ABSENT** | CHECK constraint rejects non-foundation types |
| Global FinOps audit composition for all modules | **ABSENT** | `R-T6-RUNTIME-COMPOSITION-01` OPEN |
| Using audit journal as mutable review-state store | **ABSENT** / **REJECTED as sole store** | durable review state ≠ append-only audit (125 TECH-ALERT-01) |

T3 must **not** modify T6 foundation enum/migration in this prep. Future T3 events remain **contract candidates** for **T6-ext-T3T4** only.

---

## J. Authority / identity inventory

### What exists

| Mechanism | Location | Nature |
|-----------|----------|--------|
| `AuthorityResolverPort` | `decision/ports/authorityResolver.ts` | sole verifier for N1/N2/N3 + Morris gate |
| `AuthorityEvidence` | domain types | `actorId`, `level`, `scope`, `canActAsMorris?`, expiry, immutable register |
| `VerifyAuthority` | application use-case | audited check; ignores client `authorityLevel` / `displayName` |
| `MemoryAuthorityResolver` | infrastructure | in-memory evidence registry (tests / non-product IAM) |
| Execution-contract helpers | `execution-contract/application/authorityHelper.ts` | MORRIS = N3 ∧ `canActAsMorris=true` |
| Product IAM | disclosures | **`iam: "NOT_SELECTED"`** |

### Explicit answers

**A. What does the mechanism prove today?**
It proves that **registered authority evidence** for an `actorId`+`scope` satisfies a required level and, if requested, the **Morris gate flag** `canActAsMorris === true`. Client-supplied names/levels are ignored. Evidence is immutable after register; expired evidence is ignored.

**B. What does it not prove?**
It does **not** prove a real interactive human login, browser/session authenticity, IdP binding, MFA, or that the HTTP caller is Morris. There is **no** selected product IAM. `MemoryAuthorityResolver` is not a durable enterprise identity system.

**C. Can T3 durably create `review_required` without Morris identity?**
**Yes, as a candidate design:** system/non-structuring creation of durable review/alert state from T2 threshold evaluation can proceed **without** Morris identity. That creation is **not** a privileged Morris acknowledgment.

**D. Which commands would need real Morris proof?**
**Candidate:** `acknowledge` · `resolve` · any privileged mutation of review disposition · any future override linkage (T5) · any future S30 resume (T4). These should require `requireMorrisGate` (or equivalent) **once** a durable identity binding exists — binding itself is **NOT SELECTED**.

**E. Can “system creates review” vs “Morris acknowledge/resolve” be separated?**
**Yes — recommended separation (CANDIDATE).** Aligns with fail-open user-run path vs fail-closed privileged commands (candidate for privileged path only; T1 capture remains fail-open).

**STOP check:** Authority model is **qualified and distinguishable** (recorded evidence ≠ session identity). No ambiguity requiring STOP — claims stay bounded.

---

## K. T3 responsibility boundary

### T3 MUST cover (candidate scope)

- Detect threshold-relevant state from **T2 aggregates** (read-only consumption);
- Persist **durable alert state** (in-app);
- Persist **durable Morris Review state**;
- **Deduplication** (A15-ONCE family semantics);
- **Lifecycle** transitions;
- **Read model** for in-app surfaces (future UI — not built here);
- Controlled transitions with concurrency/idempotence constraints;
- **Candidate audit event contract** for future T6-ext-T3T4 (define only).

### T3 MUST NOT cover

- Reject / suspend runs;
- **S30 soft enforcement** (T4);
- Override issuance (T5);
- Feature-flag activation / T7 rollout;
- Global T6 composition;
- Cron/poller/external notification providers;
- Neon/provider-real/tariff loading;
- Recalibration adoption without Morris;
- Mutation of T1 ledger / T2 cost events / T6 foundation enum.

### Responsibility matrix

| Concern | Owner |
|---------|-------|
| Usage capture | T1 |
| Money + aggregates + reconciliation | T2 |
| Alert + Morris review durable state | **T3** |
| Soft cap / new-run suspension | **T4** |
| Override | T5 |
| Capture audit foundation | T6-foundation |
| Threshold/review audit events | T6-ext-T3T4 (**future**) |
| Flag / rollout | T7 |

---

## L. Threshold policy truth (15 / 20 / 25 / 30) — no adoption

### Authoritative documentary sources

| Value | Role (SELECTED policy docs) | Authority docs | Runtime |
|-------|-----------------------------|----------------|---------|
| **USD 15** | Informational alert | 103 · 123 · A15 family · `D-ASST-IP0C-TECH-ALERT-01` | **NOT IMPLEMENTED** |
| **USD 20** | Critical Morris review (C20-WARN) | 103 · 123 · 125 | **NOT IMPLEMENTED** |
| **USD 25** | Monthly **planning target** preserved | 103 · 123 | **NOT an enforcement/event owner for T3 by default** — planning signal |
| **USD 30** | Soft application cap (S30-SOFT) | 103 · 123 · ENF-B/T4 path | **T4 responsibility** — **NOT T3 enforcement** |

### Calibration status

| Statement | Status |
|-----------|--------|
| 15/20/25/30 chosen as provisional pilot calibration | **SELECTED (documentary)** |
| **RECALIBRATION REQUIRED before real threshold usage** | **TRUE** (123/125/103) |
| Values encoded & activated in runtime | **FALSE** |
| Silent adoption of calibration in this prep | **FORBIDDEN** |

### What T3 may prepare without activating T4

- Mechanism + durable state for **informational (15)** and **review (20)** classes;
- Configuration surface that can hold threshold codes/amounts **default-off**;
- Explicit non-ownership of **30** enforcement;
- Treat **25** as planning metadata unless Morris later assigns an informational T3 event (CANDIDATE — currently **not** required).

### Delivery vs recalibration (options deferred to §P.F / matrix)

T3 Delivery **may** be architected with default-off config **or** blocked pending recalibration — **NOT DECIDED** here. Mechanism ≠ business values.

---

## M. Prior decision IDs search

Repository search for `D-T3-*` / dedicated T3 decision IDs: **0 matches**.

**Reusable upstream IDs (already SELECTED documentary — NOT re-opened as “new T3 invention”, but NOT implemented):**

| ID | Decision | Status |
|----|----------|--------|
| `D-ASST-IP0C-TECH-ALERT-01` | DURABLE IN-APP STATE · structured audit journal · no external notification | SELECTED — NOT IMPLEMENTED |
| A15-CAL / A15-PROJ / A15-ONCE | calendar UTC · project scope · once dedupe | SELECTED — NOT IMPLEMENTED |
| C20-WARN | USD 20 Morris review | SELECTED — NOT IMPLEMENTED |
| S30-SOFT | USD 30 soft cap | SELECTED — NOT IMPLEMENTED — **T4** |
| `D-ASST-IP0C-TECH-CONF-01` | estimated never blocks | SELECTED — NOT IMPLEMENTED |
| `D-ASST-IP0C-TECH-PERIOD-01` | calendar month UTC | SELECTED — NOT IMPLEMENTED |
| `D-ASST-IP0C-TECH-CONC-01` | Postgres txn · project/period lock | SELECTED — NOT IMPLEMENTED |

### Candidate T3 decision IDs (NEW — CANDIDATE / NOT DECIDED)

| Candidate ID | Theme |
|--------------|-------|
| `D-T3-STATE-01` | Persistence form under durable in-app constraint |
| `D-T3-TRIGGER-01` | Evaluation trigger model |
| `D-T3-DEDUPE-01` | Dedup identity / ONCE semantics |
| `D-T3-LIFECYCLE-01` | Review/alert lifecycle |
| `D-T3-AUTHORITY-01` | System create vs Morris privileged mutations |
| `D-T3-CALIBRATION-01` | Calibration / activation trajectory |
| `D-T3-T6EXT-CONTRACT-01` | Candidate audit event names for future ext |

---

## N. Structuring options (≥2 each) — ALL NOT DECIDED

### A. State persistence / model (`D-T3-STATE-01`)

Constraint respected: **DURABLE IN-APP STATE** already SELECTED (`TECH-ALERT-01`). Options are **forms** compatible with that decision — not “ephemeral only.”

| Option | Description | Pros | Cons / debt |
|--------|-------------|------|-------------|
| **A1 — Materialized durable rows + separate audit** | Table(s) for alert/review current state; T6-ext append-only events later | Clear read model; matches TECH-ALERT; audit ≠ state | Needs migration; lifecycle updates |
| **A2 — Event-sourced projection with durable snapshot** | Append domain events in T3 store + rebuildable snapshot | Strong history | Heavier; risk of confusing with T6 journal |
| **A3 — Audit journal as sole mutable store** | Use `finops_audit_event` as review state | Appears DRY | **Violates** append-only + mutable lifecycle; **STOP-class collision** — retained only as **REJECTED reference**, not viable |

**Challenge:** A1 useful now, reversible via unused tables, repo-first after T2/T6 migrations, multi-instance OK with row locks. A3 forbidden as sole store.

### B. Trigger model (`D-T3-TRIGGER-01`)

| Option | Description |
|--------|-------------|
| **B1 — Post T2 recompute/reconcile hook** | After successful aggregate rebuild / reconcile, evaluate project+period |
| **B2 — Explicit evaluate command** | `evaluateProjectPeriodThresholds(projectId, periodStart)` invoked by application/ops |
| **B3 — Hybrid** | B1 automatic + B2 for repair/replay |

**Banned default:** permanent cron/poller.
**Candidate lean:** **B3** (CANDIDATE ONLY).

### C. Dedupe semantics (`D-T3-DEDUPE-01`)

Logical key family under A15-ONCE:

| Option | Identity |
|--------|----------|
| **C1 — Core key** | `projectId + periodStart + thresholdCode + currency` |
| **C2 — Core + evaluation basis** | C1 + `basis` (`estimated`/`observed`/`billed` composite policy id) |
| **C3 — Core + rebuildVersion** | C1 + `rebuildVersion` (new alert each rebuild — noisy) |

**Candidate lean:** **C1** for ONCE-per-period alert/review; use lifecycle `superseded` when aggregate correction invalidates prior open review rather than minting duplicates (CANDIDATE). C3 generally **too noisy**.

### D. Review lifecycle (`D-T3-LIFECYCLE-01`)

Candidate states (challengeable): `pending` · `acknowledged` · `resolved` · `superseded` (+ alert informational `open`/`cleared` if split).

Must cover: threshold crossed · dedupe · downward correction/reconciliation · new period · acknowledge · resolve · evidence class evolution estimated→observed→billed.

| Option | Notes |
|--------|-------|
| **D1 — Four-state review** | pending→acknowledged→resolved; superseded on invalidation |
| **D2 — Split alert vs review entities** | Informational alert stream separate from Morris review entity sharing dedupe family |

**Candidate lean:** **D2** clarifies 15 vs 20 without conflating UX (CANDIDATE).

### E. Morris authority (`D-T3-AUTHORITY-01`)

| Option | Description |
|--------|-------------|
| **E1 — Foundation now, privileged deferred** | Persist review_required without Morris; block acknowledge/resolve until real identity binding exists |
| **E2 — Reuse AuthorityResolver semantics now** | Privileged commands call `VerifyAuthority` + `requireMorrisGate` against registered evidence (still ≠ product IAM) |
| **E3 — Invent product IAM in T3** | **OUT OF SCOPE / REJECTED for this lot** |

**Candidate lean:** **E1** for Delivery safety under `iam: NOT_SELECTED`, with **E2** wiring prepared behind ports (CANDIDATE). Do not invent IAM.

### F. Threshold calibration (`D-T3-CALIBRATION-01`)

| Option | Description |
|--------|-------------|
| **F1 — Keep 15/20/25/30 as provisional config, default-off** | Encode as config constants/files but inactive until Morris activation |
| **F2 — Recalibrate before any Delivery that encodes values** | Block T3 Delivery encoding amounts until recalibration GO |
| **F3 — Engine/config without real amounts; calibrate before activation** | Implement mechanism + placeholders; amounts filled at activation gate |

Distinguish **architecture of mechanism** vs **business values**.
**Candidate lean:** **F3** (or F1 with explicit default-off) — **NOT DECIDED**.

---

## O. Contracts

### O.1 T3 ↔ T2

| Topic | Contract (candidate) |
|-------|----------------------|
| API consumed | `readAggregate` / `listAggregatesForProjectPeriod`; optionally observe rebuild/reconcile success signals |
| Authoritative cost truth | **cost events** remain ledger; aggregates are **derived** |
| Currency | ISO 4217 3-letter; no FX in T3 |
| Period | UTC calendar month `periodStart` |
| Corrections | T2 reconcile/rebuild updates aggregates; T3 re-evaluates → may supersede open alerts/reviews |
| Multi-instance | rely on T2 exclusive rebuild; T3 own row locks for state transitions |
| Transaction boundary | T3 must not write inside T2 rebuild transaction unless explicitly designed later; prefer **after** successful rebuild |
| T3 may read | aggregates (+ metadata rebuildVersion/rebuiltAt) |
| T3 must never modify | `finops_cost_event`, aggregate replace APIs for business writes, price catalog, T1 usage ledger |

### O.2 T3 ↔ T4

| T3 produces (candidate) | T4 future consumes |
|-------------------------|--------------------|
| Durable alert/review state for project/period/currency | Financial posture + whether review/override gates allow new runs |
| Review open/resolved flags | Soft enforcement decisioning (S30) |
| **No** run rejection | T4 owns suspension |

T3 **never** suspends runs. Estimated-only crossings must not be treated as S30 blockers.

### O.3 T3 ↔ T6

| Today | Future |
|-------|--------|
| T6-foundation capture events only | T6-ext-T3T4 candidate events |

**Candidate event names** (NOT ADOPTED; confirm vs any future canon):

- `finops_threshold_crossed`
- `finops_notification_emitted` (in-app only; no external provider)
- `finops_review_required`
- `finops_review_acknowledged`
- `finops_review_resolved`

`D-T3-T6EXT-CONTRACT-01` = CANDIDATE. Enum/migration changes = **NOT AUTHORIZED** now.

---

## P. Concurrency / idempotence (candidates)

| Scenario | Candidate constraint |
|----------|----------------------|
| Multiple workers detect same threshold | Upsert / unique key on dedupe identity; single open row |
| Concurrent T2 reconciliation | Evaluate after exclusive rebuild completes; read rebuildVersion |
| Late correction downward | Transition open review → `superseded` or `cleared`; do not delete history |
| Period rollover | New `periodStart` ⇒ new dedupe space; prior period rows remain |
| Multi-currency | Key includes currency; no cross-currency sum |
| Repeated evaluation | Idempotent no-op if open alert/review exists for key |
| Ack/resolve retry | Idempotent if already in target state; optimistic version/lock |
| Replay | Explicit evaluate command safe to re-run |

No SQL authored in this cycle.

---

## Q. Security / data minimization

**Minimal durable fields (candidate):** `projectId`, `periodStart`, `currency`, `thresholdCode`, `state`, `amountsSnapshot` (canonical strings only), `rebuildVersion`, timestamps, optional bounded `reason`/`actorId` on privileged transitions, correlation ids.

**Must not store:** prompts, provider raw payloads, secrets, API keys, full catalog dumps, PII beyond actor id required for audit.

**Fail posture:**

- T1 user-run / capture path: **fail-open** (preserved);
- Privileged Morris review commands: **fail-closed** candidate (`D-T3-AUTHORITY-01`);
- Future T3→T6-ext emit: prefer **best-effort** for non-blocking paths unless Morris decides otherwise (CANDIDATE).

---

## R. FinOps / GreenOps implications

- Prefer **event/command-driven** evaluation after T2 changes — **no permanent polling**.
- Bound reads to project/period.
- Avoid full ledger scans for threshold checks — use aggregates.
- Indexation analyzed only; **no DDL in this cycle**.
- External notification providers excluded → lower ops cost and data sprawl.

---

## S. Morris decision matrix

| ID | Question | Options | Status | Gate |
|----|----------|---------|--------|------|
| `D-T3-STATE-01` | Persistence form | A1 / A2 (A3 rejected) | **CANDIDATE — NOT DECIDED** | Morris after ChatGPT |
| `D-T3-TRIGGER-01` | Trigger model | B1 / B2 / B3 | **CANDIDATE — NOT DECIDED** | Morris |
| `D-T3-DEDUPE-01` | Dedup identity | C1 / C2 / C3 | **CANDIDATE — NOT DECIDED** | Morris |
| `D-T3-LIFECYCLE-01` | Lifecycle | D1 / D2 | **CANDIDATE — NOT DECIDED** | Morris |
| `D-T3-AUTHORITY-01` | Authority split | E1 / E2 | **CANDIDATE — NOT DECIDED** | Morris |
| `D-T3-CALIBRATION-01` | Calibration trajectory | F1 / F2 / F3 | **CANDIDATE — NOT DECIDED** | Morris |
| `D-T3-T6EXT-CONTRACT-01` | Future audit event contract | adopt/rename/defer names | **CANDIDATE — NOT DECIDED** | Morris |

Upstream already SELECTED (do not re-litigate as if open): durable in-app + no external notifier (`TECH-ALERT-01`); A15-ONCE family; C20-WARN policy; S30 belongs to T4; estimated never blocks.

---

## T. Explicit recommendations (ChatGPT-reviewable) — CANDIDATE ONLY

| Topic | Candidate recommendation | Status |
|-------|--------------------------|--------|
| State | **A1** materialized durable state + separate future audit | **CANDIDATE / NOT DECIDED** |
| Trigger | **B3** hybrid post-rebuild + explicit evaluate | **CANDIDATE / NOT DECIDED** |
| Dedupe | **C1** core key; supersede on invalidation | **CANDIDATE / NOT DECIDED** |
| Lifecycle | **D2** split alert vs review | **CANDIDATE / NOT DECIDED** |
| Authority | **E1** (+ prepare E2 port wiring) | **CANDIDATE / NOT DECIDED** |
| Calibration | **F3** mechanism without activating real amounts | **CANDIDATE / NOT DECIDED** |
| T6-ext events | Keep names as contract draft; do not implement | **CANDIDATE / NOT DECIDED** |

These are **not** Morris decisions.

---

## U. Candidate Delivery manifest (FUTURE ONLY)

### CREATE candidates

- `app/lib/oa/finops/application/` T3 types + evaluate/acknowledge/resolve use-cases
- `app/lib/oa/finops/ports/finopsAlertReviewPort.ts` (name CANDIDATE)
- `app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAlertReviewStore.ts`
- `app/db/migrations/<timestamp>_finops-t3-alert-review-state.js` (**placeholder timestamp** — do not reserve a concrete epoch in this prep)
- Unit + PG integration tests under `app/__tests__/oa/finops/…`

### MODIFY candidates (minimize)

- Optional thin hook after T2 recompute/reconcile **success** to call evaluate (feature-default-off) — only if Morris accepts B1/B3
- **Prefer new modules** over editing T1 capture / T2 money / T6 enum

### PROTECTED / DO NOT TOUCH

- T1 ledger + fail-open capture semantics
- T2 money / cost-event append-only / exclusive rebuild core
- T6 foundation event CHECK enum / append-only triggers
- `package.json` / CI / Neon / provider config
- Docs 103/125/138/139/141/142/143/144 (unless a future dedicated docs cycle)

---

## V. Candidate test plan (NOT IMPLEMENTED)

### Unit

- threshold crossing · no duplicate alert · period rollover · currency isolation · lifecycle transitions · correction/reconciliation supersede · estimated/observed/billed semantics · authority denied · idempotent acknowledge

### PostgreSQL integration

- durable state · unique/dedupe · concurrent evaluation · restart-safe persistence · lifecycle update locking · future-safe append-only audit integration (ext)

### Negative

- client cannot self-assert Morris · estimated never becomes S30 blocker · no cross-project leakage · no cross-currency contamination · no duplicate Morris Review

### Regression

- T1 capture unchanged · T2 aggregates/reconciliation unchanged · T6 foundation unchanged

**EXECUTABLE QA NOT REQUIRED — DOCUMENTARY ARCHITECTURE PREPARATION ONLY**

---

## W. Risks / debt / reversibility

| Item | Risk | Debt | Reversible? |
|------|------|------|-------------|
| Encoding 15/20/25/30 before recalibration | Wrong ops signals | Config churn | Yes if default-off |
| Conflating alert audit with review state | Lost acks / illegal updates | Hard migration | Prefer A1 early |
| Privileged commands without identity | False Morris actions | Security debt | Keep E1 until IAM |
| Hooking evaluate inside T2 transactions | Coupling / lock time | Cross-lot debt | Prefer after-commit B3 |
| Letting T3 own S30 | Enforcement leak | Architectural debt | Hard stop — T4 only |
| Open `R-T6-RUNTIME-COMPOSITION-01` | Incomplete audit story | Ext backlog | Separate GO |
| Open `R-PR-T2-API-01` | Raw replace misuse | Minor API harden | Separate micro-cycle |

---

## X. Reserves

| ID | Status | Notes |
|----|--------|-------|
| `R-T6-RUNTIME-COMPOSITION-01` | **OPEN** | Global durable audit composition not done |
| `R-PR-T2-API-01` | **OPEN MINOR** | Public raw aggregate replace unused in prod |
| T6-ext-T2 | **EXCLUDED** | |
| T6-ext-T3T4 | **NOT AUTHORIZED** | Contract draft only |
| Recalibration 15/20/25/30 | **REQUIRED** before real usage | |
| Product IAM | **NOT_SELECTED** | |

---

## Y. Executable QA statement

**EXECUTABLE QA NOT REQUIRED — DOCUMENTARY ARCHITECTURE PREPARATION ONLY**

No typecheck / lint / build / npm test executed (no code changed).

---

## Z. Verdict (document)

```
FINOPS TECHNICAL LOT T3 —
ARCHITECTURE / IMPLEMENTATION PREPARATION COMPLETE WITH RESERVES —

T6-FOUNDATION CLOSED WITH RESERVES TRACED —
T2 RUNTIME CONTRACT VERIFIED —
T6 FOUNDATION CONTRACT VERIFIED —
MORRIS AUTHORITY MODEL QUALIFIED —
T3 / T4 / T6 RESPONSIBILITIES SEPARATED —
THRESHOLD CALIBRATION STATUS EXPLICIT —
STATE / TRIGGER / DEDUPE / LIFECYCLE OPTIONS PREPARED —
MORRIS DECISION MATRIX PREPARED —
DELIVERY MANIFEST CANDIDATE PREPARED —
TEST PLAN CANDIDATE PREPARED —

NO T3 DECISION SILENTLY ADOPTED —
NO T3 DELIVERY —
NO CODE —
NO MIGRATION —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

R-T6-RUNTIME-COMPOSITION-01 OPEN —
R-PR-T2-API-01 OPEN MINOR —
T6-EXT-T2 EXCLUDED —

READY FOR CHATGPT T3 ARCHITECTURE REVIEW / MORRIS ARBITRATION
```

---

*End of document 145.*
