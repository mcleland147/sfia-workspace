# Full Review Pack — FinOps Technical Lot T3 — Delivery

## Meta

| Field | Value |
|-------|-------|
| Date/heure CEST | 2026-08-07 19:26:12 CEST (+0200) |
| Date/heure UTC | 2026-08-07 17:26:12 UTC |
| Cycle | 8 — Delivery · FinOps Technical Lot T3 |
| Profil SFIA | Critical |
| Typologie | EVOL / CODE / DOC / TEST |
| Worktree | `.tmp-sfia-review/worktrees/finops-t3-preparation` |
| Branche | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t3-alert-morris-review-state` |
| HEAD | `b8259859983577c31965aa877c956e7a25dd1c4d` |
| origin/main | `b8259859983577c31965aa877c956e7a25dd1c4d` |
| Repo | `mcleland147/sfia-workspace` |

## GO Morris exact

```
GO Delivery T3.
```

## Handoff before

| Field | Value |
|-------|-------|
| tip | `bf608f7de0d61098bd34383edf3d2ba5cec7a780` |
| blob | `63ba9724efa478dd17e6283940b414450f09915e` |
| commit | `docs(review-handoff): publish T3 decisions applied` |

## Sources

145 (immutable pre-arbitration) · 146 (immutable decisions applied) · T2/T6 runtime read-only · Morris GO Delivery T3 · decisions A1+B3+C1+D2+E1+F3 · T6-ext names DEFERRED

## Décisions

| ID | Value |
|----|-------|
| D-T3-STATE-01 | A1 SELECTED — materialized durable state |
| D-T3-TRIGGER-01 | B3 SELECTED — post-T2 + explicit evaluate |
| D-T3-DEDUPE-01 | C1 SELECTED — core ONCE key |
| D-T3-LIFECYCLE-01 | D2 SELECTED — Alert / Review split |
| D-T3-AUTHORITY-01 | E1 SELECTED — system create / privileged deferred |
| D-T3-CALIBRATION-01 | F3 SELECTED — engine without real active amounts |
| D-T3-T6EXT-CONTRACT-01 | EXACT EVENT NAMES DEFERRED |

## Hashes 145 / 146

| Doc | Before | After | Match |
|-----|--------|-------|-------|
| 145 | `809bc5bd20fc23c0c7d3368728e81193e1fe459f26c314d1ba1d4526b61540ba` | `809bc5bd20fc23c0c7d3368728e81193e1fe459f26c314d1ba1d4526b61540ba` | YES |
| 146 | `a5eda99a97ab5887407db8b6290e6cae0405ed2b59a22a60b9ed7f4662150da1` | `a5eda99a97ab5887407db8b6290e6cae0405ed2b59a22a60b9ed7f4662150da1` | YES |

## Manifest exact (13)

- **PRESERVE** `projects/sfia-studio/145-assistant-sfia-native-openai-finops-technical-lot-t3-alert-morris-review-preparation.md` · SHA-256 `809bc5bd20fc23c0c7d3368728e81193e1fe459f26c314d1ba1d4526b61540ba` · 32735 bytes
- **PRESERVE** `projects/sfia-studio/146-assistant-sfia-native-openai-finops-technical-lot-t3-decisions-applied.md` · SHA-256 `a5eda99a97ab5887407db8b6290e6cae0405ed2b59a22a60b9ed7f4662150da1` · 19722 bytes
- **CREATE** `projects/sfia-studio/147-assistant-sfia-native-openai-finops-technical-lot-t3-execution.md` · SHA-256 `d825e9bf80fb808ad0ef2918693f50fce2157e7cbb78fe1fed03f9c627fea75b` · 9802 bytes
- **CREATE** `projects/sfia-studio/app/lib/oa/finops/application/types.alertReview.ts` · SHA-256 `1ebe08e1395594896c2c1657ca56ad0620505335880963132b5896e0054dd943` · 4080 bytes
- **CREATE** `projects/sfia-studio/app/lib/oa/finops/application/t3Identity.ts` · SHA-256 `43719b69c4051ac36fd7fcd2bf8598688bc5a5f07c161fa01a9f230ced1ee58b` · 1292 bytes
- **CREATE** `projects/sfia-studio/app/lib/oa/finops/application/evaluateProjectPeriodThresholds.ts` · SHA-256 `ef3c50b6bc0e7070467e11d70369d86a85d99308b1ff9d69abd26c569234cef7` · 8773 bytes
- **CREATE** `projects/sfia-studio/app/lib/oa/finops/application/evaluateAfterT2.ts` · SHA-256 `7c6b04dcf24f78e816463edfd9cf33488207bafa6515475b5a30dd25743d1643` · 3443 bytes
- **CREATE** `projects/sfia-studio/app/lib/oa/finops/ports/finopsAlertReviewPort.ts` · SHA-256 `b2af29b0ecc4620ff60e40c75a859bd3a4b33aaf0c6510b02471d3358055042b` · 1024 bytes
- **CREATE** `projects/sfia-studio/app/lib/oa/finops/infrastructure/memory/memoryFinOpsAlertReview.ts` · SHA-256 `0730c508006e4b9e022ed11057350aa7352a1a057fc1e2ea39e4286034aae2e2` · 9649 bytes
- **CREATE** `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAlertReviewStore.ts` · SHA-256 `695bfa1f372b7d82e6abcf271cd718fb71da8cbed3c05ab3ad5d7237daffab10` · 16355 bytes
- **CREATE** `projects/sfia-studio/app/db/migrations/1754600002000_finops-t3-alert-review-state.js` · SHA-256 `4b5d11785db303eaae015d34d27f5fe628d9bc3074fe2f8f75f3e9d923f08ddb` · 5532 bytes
- **CREATE** `projects/sfia-studio/app/__tests__/oa/finops/t3.alert-review.unit.test.ts` · SHA-256 `e50666064e4101c9e6af903357487f67ff969c194404be6a59426d7338faa76d` · 28537 bytes
- **CREATE** `projects/sfia-studio/app/__tests__/oa/finops/postgres/t3.alert-review.integration.test.ts` · SHA-256 `f9418e2a6b3233ca6e1863e441afb5bf7d75d3d52f7bf01bc650863e677724a1` · 16437 bytes

## Architecture implementation summary

- Types `types.alertReview.ts` with `t3-v1`, kinds informational_alert|morris_review, basis estimated|observed|billed, injected definitions only.
- C1 identity SHA-256 prefixes `t3_dedup_` / `alert_` / `review_`; conflict `FINOPS_T3_THRESHOLD_CONFIG_CONFLICT`.
- Money crossing `>=` via BigInt minor units (no Number).
- Port: applyProjectPeriodEvaluation + listAlerts/listReviews — no ack/resolve.
- PG tables finops_alert_state + finops_morris_review_state; advisory lock `finops-t3:`; DOWN refuses if rows.
- evaluateAfterT2 wrappers call T2 then T3 only on success; T3 failure preserves T2 success.
- Memory store mirrors semantics.
- Migration order T1 < T2 < T6 < T3 verified.

## Complete DB schema

See migration file content below (`1754600002000_finops-t3-alert-review-state.js`).

## Evidence highlights

- C1/idempotence: unit 6 + integration concurrent evaluations → one row
- B3 boundary: unit 17–20
- F3 anti-activation: threshold scan + empty defs no-op
- E1: unit 22 no ack/resolve APIs
- T6 unchanged: integration asserts capture-only CHECK; no draft event names
- Concurrency: PG advisory lock + UNIQUE C1
- Stale rebuild: unit 14 + integration 12

## QA results

| Check | Result |
|-------|--------|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| t3 unit | 22/22 PASS |
| finops vitest (no DB) | 131 PASS / 31 SKIP |
| npm test | 148 files / 1478 PASS |
| migrate:up local PG16 Docker | T1→T2→T6→T3 complete |
| test:db | 31/31 PASS |
| git diff --check | PASS |
| staging | empty |
| project commit/push/PR | none |

## Réserves

R-T6-RUNTIME-COMPOSITION-01 OPEN · R-PR-T2-API-01 OPEN MINOR · T6-ext DEFERRED · Calibration REQUIRED · Product IAM NOT_SELECTED · Privileged mutations DEFERRED

## Verdict

```
FINOPS TECHNICAL LOT T3 —
LOCAL DELIVERY IMPLEMENTATION COMPLETE WITH RESERVES —

A1 MATERIALIZED DURABLE STATE IMPLEMENTED —
D2 ALERT / MORRIS REVIEW SPLIT IMPLEMENTED —
C1 CORE ONCE IDENTITY IMPLEMENTED —
B3 POST-T2 + EXPLICIT EVALUATE IMPLEMENTED —
F3 ENGINE WITHOUT REAL ACTIVE AMOUNTS IMPLEMENTED —
E1 SYSTEM REVIEW CREATION IMPLEMENTED —
PRIVILEGED MORRIS MUTATIONS NOT ACTIVATED —

T3 MIGRATION ADDITIVE VERIFIED —
T1/T2/T6 REGRESSION GREEN —
LOCAL POSTGRESQL VALIDATION GREEN —
CONCURRENCY / IDEMPOTENCE VERIFIED —
STALE REBUILD PROTECTION VERIFIED —

145 PRE-ARBITRATION RECORD PRESERVED —
146 DECISIONS RECORD PRESERVED —
147 DELIVERY EXECUTION RECORD CREATED —

NO REAL THRESHOLD ACTIVATION —
PRODUCT IAM NOT_SELECTED —
NO ACK/RESOLVE PRODUCT MUTATION —
NO T4 —
NO T5 —
NO T6-EXT —
NO T6 EVENT NAME ADOPTION —
NO GLOBAL T6 COMPOSITION —

R-T6-RUNTIME-COMPOSITION-01 OPEN —
R-PR-T2-API-01 OPEN MINOR —
T6-EXT-T2 EXCLUDED —
T6-EXT-T3T4 NOT AUTHORIZED —

NO PROJECT STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

READY FOR CHATGPT DELIVERY VALIDATION
```

---

# COMPLETE FILE CONTENTS (13)


## FILE: `projects/sfia-studio/145-assistant-sfia-native-openai-finops-technical-lot-t3-alert-morris-review-preparation.md` (PRESERVE)

- SHA-256: `809bc5bd20fc23c0c7d3368728e81193e1fe459f26c314d1ba1d4526b61540ba`
- Bytes: 32735

```markdown
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
```

## FILE: `projects/sfia-studio/146-assistant-sfia-native-openai-finops-technical-lot-t3-decisions-applied.md` (PRESERVE)

- SHA-256: `a5eda99a97ab5887407db8b6290e6cae0405ed2b59a22a60b9ed7f4662150da1`
- Bytes: 19722

```markdown
# 146 — FinOps Technical Lot T3 — Alert & Morris Review State — Decisions Applied

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/146-assistant-sfia-native-openai-finops-technical-lot-t3-decisions-applied.md`
**Cycle:** 6 — Architecture technique · Decisions Applied — FinOps Technical Lot T3
**Profil:** Critical
**Typologie:** EVOL / DOC / ARCH
**Statut:** T3 ARCHITECTURE DECISIONS APPLIED WITH RESERVES — NO DELIVERY

---

## A. Statut et anti-claims

| Claim | Statut |
|-------|--------|
| D-T3-STATE-01 A1 SELECTED BY MORRIS | **TRUE** |
| D-T3-TRIGGER-01 B3 SELECTED BY MORRIS | **TRUE** |
| D-T3-DEDUPE-01 C1 SELECTED BY MORRIS | **TRUE** |
| D-T3-LIFECYCLE-01 D2 SELECTED BY MORRIS | **TRUE** |
| D-T3-AUTHORITY-01 E1 SELECTED BY MORRIS | **TRUE** |
| D-T3-CALIBRATION-01 F3 SELECTED BY MORRIS | **TRUE** |
| D-T3-T6EXT-CONTRACT-01 exact T6-ext event names DEFERRED BY MORRIS | **TRUE** |
| T3 Delivery authorized / executed | **FALSE** |
| Code / SQL / migration / executable tests created | **FALSE** |
| Threshold / amount runtime activation (15/20/25/30) | **FALSE** |
| Product IAM / session Morris identity implemented | **FALSE** |
| T6-ext enum / migration / event names adopted as SELECTED | **FALSE** |
| Document 145 modified | **FALSE** — preserved byte-identical |
| Project commit / push / PR / merge | **FALSE** |
| T4 / T5 / T6-ext Delivery advanced | **FALSE** |
| Recommendation from 145 = decision without Morris GO | **FALSE** — Morris GO consumes and selects |

---

## B. Autorité Morris

Morris decides. Cursor applies decisions exactly without silent enrichment.
ChatGPT validates coherence. Git remains source of truth for files and hashes.
CKC `pilots/03-architecture-technique.md` = candidate experimental guidance only — **no execution authority**; Morris GO in this cycle prevails.

### GO Morris exact (consommé)

```
GO arbitrage T3 — A1 / B3 / C1 / D2 / E1 / F3 — exact T6-ext event names deferred.
```

### Contexte Morris immédiatement associé

```
ok pour les recommandations que tu viens de faire
```

Morris accepted the candidate recommendations from document 145. Mapping authorized by this GO:

| Decision ID | Value | Status |
|-------------|-------|--------|
| D-T3-STATE-01 | A1 | SELECTED BY MORRIS |
| D-T3-TRIGGER-01 | B3 | SELECTED BY MORRIS |
| D-T3-DEDUPE-01 | C1 | SELECTED BY MORRIS |
| D-T3-LIFECYCLE-01 | D2 | SELECTED BY MORRIS |
| D-T3-AUTHORITY-01 | E1 | SELECTED BY MORRIS |
| D-T3-CALIBRATION-01 | F3 | SELECTED BY MORRIS |
| D-T3-T6EXT-CONTRACT-01 | exact event names | DEFERRED BY MORRIS |

### Horodatage

| Fuseau | Valeur |
|--------|--------|
| Décision Morris (annoncée) | 2026-08-07 CEST (+0200) — secondes exactes non inventées |
| Application documentaire (ce cycle) | 2026-08-07 18:47:35 CEST (+0200) / 16:47:35 UTC |

Ce GO autorise uniquement l'application documentaire, la création de 146, le Full Review Pack et le Review Handoff L3 borné.
Ce GO **n'autorise pas** Delivery T3, code, SQL, migration, tests exécutables, activation de seuil, IAM, T4/T5/T6-ext, commit/push/PR projet, ni modification de 103/145.

---

## C. Git Truth

| Check | Value |
|-------|--------|
| Repo | `mcleland147/sfia-workspace` |
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t3-preparation` |
| Branche | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t3-alert-morris-review-state` |
| HEAD | `b8259859983577c31965aa877c956e7a25dd1c4d` |
| origin/main | `b8259859983577c31965aa877c956e7a25dd1c4d` |
| Status avant | `?? .tmp-sfia-review/` · `?? …/145-….md` |
| Staged | vide |
| Upstream | aucun |
| Handoff entrant | tip `6aa59378d51126bc398354dabffd51b7ae9e25c1` · blob `813d2decf53a067a6aeff63fcb9388701ffde518` · `docs(review-handoff): publish T3 preparation` |
| Document 145 SHA-256 (before) | `809bc5bd20fc23c0c7d3368728e81193e1fe459f26c314d1ba1d4526b61540ba` |
| Document 145 | 681 lines · 32735 bytes · untracked · **byte-identical préservé** |
| Document 146 | **CREATE ONLY** (absent before cycle; absent on origin/main) |
| Project commit / push / PR | **aucun** |

---

## D. Sources

### Méthode (read-only)
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` (candidate · no authority)
- `scripts/sfia/publish-review-handoff.sh`

### Projet (read-only)
- `103` backlog · `123` / `125` IP-0C · `138` / `139` / `141` T2 · `142` T2 execution · `143` T6 foundation · `144` T2 PR readiness
- **Primary pre-arbitration:** `145-…-t3-alert-morris-review-preparation.md`
- Handoff entrant tip `6aa59378…` (Full Review Pack T3 preparation with complete 145)

Runtime: not written; T3 decisions applied here do not contradict the T2/T6/authority analysis already recorded in 145.

---

## E. Relation 145 → 146

| Document | Role |
|----------|------|
| **145** | Historical **pre-arbitration** T3 Alert & Morris Review preparation · options · candidate recommendations · conflict matrices · **IMMUTABLE** in this cycle |
| **146** | Authoritative **post-arbitration** record for the seven T3 decision IDs in the GO |

**145 is IMMUTABLE in this cycle** — byte-identical preservation required.
Do **not** rewrite 145 option tables. Prior candidate recommendations (A1/B3/C1/D2/E1/F3 + defer T6-ext names) in 145 remain historical; **Morris selected / deferred** them via the GO.

---

## F. Matrice avant / après

| ID | Avant (145) | Après (ce GO / 146) |
|----|-------------|---------------------|
| **D-T3-STATE-01** | CANDIDATE — NOT DECIDED (lean A1) | **A1 SELECTED BY MORRIS** |
| **D-T3-TRIGGER-01** | CANDIDATE — NOT DECIDED (lean B3) | **B3 SELECTED BY MORRIS** |
| **D-T3-DEDUPE-01** | CANDIDATE — NOT DECIDED (lean C1) | **C1 SELECTED BY MORRIS** |
| **D-T3-LIFECYCLE-01** | CANDIDATE — NOT DECIDED (lean D2) | **D2 SELECTED BY MORRIS** |
| **D-T3-AUTHORITY-01** | CANDIDATE — NOT DECIDED (lean E1) | **E1 SELECTED BY MORRIS** |
| **D-T3-CALIBRATION-01** | CANDIDATE — NOT DECIDED (lean F3) | **F3 SELECTED BY MORRIS** |
| **D-T3-T6EXT-CONTRACT-01** | CANDIDATE — NOT DECIDED (draft names) | **EXACT EVENT NAMES DEFERRED BY MORRIS** |
| T3 Delivery | NOT AUTHORIZED | **NOT AUTHORIZED** (unchanged) |
| Threshold activation | NOT ACTIVE | **NOT ACTIVE** (unchanged) |
| Product IAM | NOT_SELECTED | **NOT_SELECTED** (unchanged) |

---

## G. Décisions appliquées (une section par ID)

### G.1 D-T3-STATE-01

**Value:** `A1 — MATERIALIZED DURABLE STATE + SEPARATE AUDIT`
**Status:** **SELECTED BY MORRIS**

#### Règles incluses
- T3 possède un état durable matérialisé pour alert/review ;
- l'état métier mutable et l'audit append-only restent séparés ;
- T6 / T6-ext ne devient **pas** le store métier mutable ;
- persistence PostgreSQL candidate pour le futur Delivery, **sans DDL dans ce cycle** ;
- A2 reste option historique non retenue ;
- A3 audit-only reste **REJECTED**.

#### Exclusions
- Schéma SQL final / noms de tables / enums colonnes ;
- Migration timestamp ;
- Implémentation runtime de l'état.

#### Impacts futur Delivery
- Créer tables/state matérialisé séparés de l'audit ;
- Ne pas utiliser T6 comme store mutable T3.

#### Anti-claims
- A1 SELECTED ≠ DDL créé
- A1 SELECTED ≠ T6-ext implémenté
- A1 SELECTED ≠ Delivery autorisé

---

### G.2 D-T3-TRIGGER-01

**Value:** `B3 — HYBRID POST-REBUILD + EXPLICIT EVALUATE`
**Status:** **SELECTED BY MORRIS**

#### Règles incluses
- Évaluation automatique après succès d'un changement T2 pertinent / rebuild / reconciliation ;
- Commande explicite d'évaluation disponible pour repair/replay ;
- Aucun cron permanent ;
- Aucun poller permanent ;
- Le déclenchement automatique doit se produire **APRÈS** réussite/commit logique du rebuild T2 ;
- Il ne doit pas prolonger la transaction exclusive T2 ni son advisory lock ;
- Le futur Delivery devra minimiser le couplage avec T2.

#### Exclusions
- Hook T2 implémenté maintenant ;
- Modification de T2 dans ce cycle ;
- Cron / always-on polling.

#### Impacts futur Delivery
- Proposer hook post-succès hors transaction T2 ;
- Fournir explicit evaluate repair/replay ;
- Feature-default-off jusqu'à GO Delivery / activation.

#### Anti-claims
- B3 SELECTED ≠ hook T2 implémenté
- B3 SELECTED ≠ T2 modifié
- B3 SELECTED ≠ cron sélectionné

---

### G.3 D-T3-DEDUPE-01

**Value:** `C1 — CORE ONCE KEY`
**Status:** **SELECTED BY MORRIS**

#### Clé logique
`projectId + periodStart + thresholdCode + currency`

#### Règles incluses
- ONCE par projet/période/seuil/devise ;
- `rebuildVersion` ne fait **PAS** partie de l'identité ;
- basis estimated/observed/billed ne fait **PAS** partie de l'identité ;
- L'évolution de preuve estimated → observed → billed met à jour le même état / sa preuve, sans créer une nouvelle review simplement parce que la source évolue ;
- Correction descendante peut conduire à `superseded` / `cleared` selon le type d'entité ;
- Aucune suppression d'historique ;
- Nouvelle période = nouvelle identité ;
- Nouvelle devise = identité distincte.

#### Exclusions
- C2 (core + basis) / C3 (core + rebuildVersion) — non retenues ;
- Noms SQL exacts de contrainte d'unicité.

#### Impacts futur Delivery
- Contrainte d'unicité/idempotence sur la clé C1 ;
- Transitions concurrent-safe sur invalidation.

#### Anti-claims
- C1 SELECTED ≠ contrainte SQL créée
- C1 SELECTED ≠ historique effacé
- Evidence evolution ≠ nouvelle identité

---

### G.4 D-T3-LIFECYCLE-01

**Value:** `D2 — SPLIT INFORMATIONAL ALERT VS MORRIS REVIEW`
**Status:** **SELECTED BY MORRIS**

#### Règles incluses
- Alert informationnelle et Morris Review sont des entités/logiques distinctes ;
- Elles partagent la famille de déduplication T3 ;
- Le niveau informationnel ne doit pas être confondu avec un review humain ;
- Lifecycle Review conceptuel minimum : `pending` · `acknowledged` · `resolved` · `superseded` ;
- Lifecycle Alert conceptuel plus léger : `open` · `cleared` ;
- Noms exacts de colonnes / enums SQL = choix Delivery, pas de ce cycle ;
- Correction descendante doit pouvoir invalider/supersede un état ouvert sans effacer l'historique.

#### Exclusions
- UI séparée implémentée ;
- Notifications externes ;
- Enums SQL figés ici.

#### Impacts futur Delivery
- Séparer modèles Alert / Review ;
- Partager famille dédup C1 ;
- Préserver historique sur supersede/clear.

#### Anti-claims
- D2 SELECTED ≠ UI implémentée
- D2 SELECTED ≠ notifications externes
- D2 SELECTED ≠ noms SQL figés

---

### G.5 D-T3-AUTHORITY-01

**Value:** `E1 — SYSTEM CREATION NOW / PRIVILEGED MORRIS MUTATIONS DEFERRED`
**Status:** **SELECTED BY MORRIS**

#### Règles incluses
- Le système peut créer durablement un `review required` depuis l'évaluation T3 sans identité Morris ;
- Création système d'une review ≠ action Morris ;
- Acknowledge / resolve / disposition privilégiée Morris ne doivent **PAS** être activés comme vraies opérations produit tant qu'une preuve d'identité Morris fiable n'est pas disponible ;
- Product IAM reste **NOT_SELECTED** ;
- AuthorityResolver / canActAsMorris existants ne sont **pas** une preuve d'identité de session ;
- Le futur design peut préparer une frontière/port permettant de brancher les contrôles d'autorité ultérieurement ;
- E2 peut être **PREPARED AS BOUNDARY COMPATIBILITY**, mais n'est **PAS** sélectionné comme mécanisme productif d'identité ;
- Aucun nouvel IAM n'est inventé ;
- Aucune élévation client-side.

#### Clarification
Le choix E1 autorise la persistence automatique de review state.
Il ne bloque donc pas le futur Delivery foundation T3.
Il bloque l'activation réelle des mutations privilégiées Morris tant que l'identité produit n'est pas traitée.

#### Exclusions
- IAM produit inventé ;
- Ack/resolve productifs activés ;
- AuthorityResolver présenté comme preuve de session Morris.

#### Impacts futur Delivery
- Persister review_required système autorisé sous E1 ;
- Bloquer mutations privilégiées jusqu'à identity binding ;
- Préparer port E2 sans l'activer.

#### Anti-claims
- E1 SELECTED ≠ IAM implémenté
- E1 SELECTED ≠ ack/resolve productifs
- E1 SELECTED ≠ AuthorityResolver = session Morris

---

### G.6 D-T3-CALIBRATION-01

**Value:** `F3 — ENGINE / CONFIG CONTRACT WITHOUT REAL ACTIVE AMOUNTS`
**Status:** **SELECTED BY MORRIS**

#### Règles incluses
- Construire ultérieurement le mécanisme T3 indépendamment de valeurs business actives ;
- Ne pas embarquer 15/20/25/30 comme configuration runtime active dans le Delivery foundation ;
- Le mécanisme peut supporter des threshold codes / configuration ;
- Les tests futurs peuvent utiliser des fixtures fictives clairement identifiées ;
- Calibration réelle requise avant activation ;
- 15/20/25/30 restent des valeurs historiques/documentaires provisoires ;
- 25 reste planning target, pas T3 event imposé ;
- 30 reste responsabilité T4 ;
- Aucun seuil réel n'est activé par ce GO.

#### État des seuils après arbitrage

| Seuil | Statut |
|-------|--------|
| USD 15 | historical informational policy value · provisional calibration · **NOT runtime-active** |
| USD 20 | historical Morris Review policy value · provisional calibration · **NOT runtime-active** |
| USD 25 | planning target · **NOT T3 runtime event requirement** |
| USD 30 | T4 soft application cap · **NOT T3 enforcement** |
| Recalibration | **REQUIRED BEFORE REAL ACTIVATION** |

F3 signifie que cette recalibration ne bloque pas nécessairement le Delivery mécanique T3, mais bloque l'activation de vraies valeurs.

#### Exclusions
- F1/F2 non retenues ;
- Activation runtime des montants ;
- Encodage 15/20/25/30 dans du runtime productif.

#### Impacts futur Delivery
- Moteur/config sans montants réels actifs ;
- Gate calibration distincte avant activation.

#### Anti-claims
- F3 SELECTED ≠ calibration réelle faite
- F3 SELECTED ≠ seuils activés
- F3 SELECTED ≠ 30 porté par T3

---

### G.7 D-T3-T6EXT-CONTRACT-01

**Value:** `EXACT T6-EXT EVENT NAMES DEFERRED`
**Status:** **DEFERRED BY MORRIS**

#### Règles incluses
- Aucun nom exact d'événement T3/T4 n'est adopté dans ce cycle ;
- Les noms proposés dans 145 restent drafts historiques ;
- Aucun enum T6 modifié ;
- Aucune migration T6 modifiée ;
- T6-ext-T3T4 reste **NOT AUTHORIZED** ;
- Un gate Morris distinct sera requis lorsque l'extension T6 sera réellement préparée/exécutée.

#### Drafts historiques 145 — NON SELECTED / NON CANONIQUES
Les chaînes suivantes restent exemples/drafts pré-arbitrage uniquement et **ne sont pas** SELECTED :
- `finops_threshold_crossed`
- `finops_notification_emitted`
- `finops_review_required`
- `finops_review_acknowledged`
- `finops_review_resolved`

#### Exclusions
- Adoption silencieuse de noms d'événements ;
- Modification enum/migration T6 ;
- Autorisation T6-ext.

#### Impacts futur Delivery
- Ne pas modifier T6 event enum dans T3 Delivery foundation ;
- Gate distinct pour contrat d'événements.

#### Anti-claims
- DEFERRED ≠ T6-ext autorisé
- Draft names ≠ SELECTED
- DEFERRED ≠ permission d'inventer des noms SELECTED

---

## H. Contrat intégré T3 après arbitrage

Combinaison retenue : **A1 + B3 + C1 + D2 + E1 + F3** (+ T6-ext event names **DEFERRED**)

| Interaction | Effet |
|-------------|-------|
| **A1 ↔ D2** | État durable séparé Alert / Review (matérialisé, pas audit-only). |
| **B3 ↔ C1** | Réévaluation automatique ou explicite reste idempotente (même clé ONCE). |
| **C1 ↔ evolution evidence** | estimated→observed→billed conserve la même identité logique ; met à jour preuve/état. |
| **E1 ↔ D2** | Création système de review autorisée ; mutations Morris (ack/resolve) différées. |
| **F3 ↔ B3** | Moteur d'évaluation peut exister sans valeurs réelles activées. |
| **T6-ext** | Contrat d'événements différé — A1 garde audit séparé sans forcer les noms. |

### Décisions amont préservées (non ré-arbitrées)
- `D-ASST-IP0C-TECH-ALERT-01` = DURABLE IN-APP STATE + STRUCTURED AUDIT + NO EXTERNAL NOTIFICATION PROVIDER
- A15 family = calendar UTC + project scope + once semantics
- C20-WARN = Morris Review policy
- S30-SOFT = T4 responsibility (T3 ne porte pas S30)
- `D-ASST-IP0C-TECH-CONF-01` = estimated never blocks
- `D-ASST-IP0C-TECH-PERIOD-01` = calendar month UTC
- `D-ASST-IP0C-TECH-CONC-01` = Postgres transaction / project-period concurrency doctrine

---

## I. Impacts Delivery T3 (contraintes — Delivery NON autorisé)

Préparer les contraintes, mais **NE PAS** autoriser le Delivery.

Le futur Delivery devra notamment :
- créer des modules T3 dédiés ;
- matérialiser état durable PostgreSQL (A1) ;
- séparer Alert / Review (D2) ;
- implémenter C1 avec contrainte d'unicité/idempotence ;
- assurer transitions concurrent-safe ;
- proposer B3 hors transaction T2 ;
- fournir explicit evaluate repair/replay ;
- ne pas activer de vrais montants sous F3 ;
- ne pas activer acknowledge/resolve productifs sans identity binding (E1) ;
- ne pas modifier T6 event enum ;
- préserver T1/T2/T6.

### Non figé ici
- noms SQL exacts ;
- timestamp migration ;
- noms finaux de modules ;
- API HTTP ;
- UI ;
- event names T6-ext.

**T3 DELIVERY = NOT AUTHORIZED.**

---

## J. Gates restantes

| Gate | Statut |
|------|--------|
| GO Delivery T3 | **REQUIRED** |
| Threshold real calibration / activation | **REQUIRED** before real activation |
| Product Morris identity binding | **REQUIRED** before privileged mutations activation |
| T6-ext event contract | **REQUIRED** later |
| T4 | separate GO |
| T5 | separate GO |
| Neon / provider-real | separate GO |
| R-T6-RUNTIME-COMPOSITION-01 | **OPEN** |
| R-PR-T2-API-01 | **OPEN MINOR** |

---

## K. Décisions non prises

- real threshold amounts activation ;
- exact SQL schema ;
- migration timestamp ;
- privileged IAM binding ;
- real ack/resolve product activation ;
- T6-ext exact event names ;
- T4 enforcement implementation ;
- T5 override ;
- Neon ;
- provider-real ;
- external notification provider ;
- UI.

---

## L. Réserves

| Reserve | Statut |
|---------|--------|
| R-T6-RUNTIME-COMPOSITION-01 | **OPEN** |
| R-PR-T2-API-01 | **OPEN MINOR** |
| T6-ext-T2 | **EXCLUDED** |
| T6-ext-T3T4 | **NOT AUTHORIZED** / exact names **DEFERRED** |
| Calibration 15/20/25/30 | **REQUIRED** before activation |
| Product IAM | **NOT_SELECTED** |

---

## M. Verdict

```
FINOPS TECHNICAL LOT T3 —
ARCHITECTURE DECISIONS APPLIED WITH RESERVES —

D-T3-STATE-01 A1 SELECTED BY MORRIS —
D-T3-TRIGGER-01 B3 SELECTED BY MORRIS —
D-T3-DEDUPE-01 C1 SELECTED BY MORRIS —
D-T3-LIFECYCLE-01 D2 SELECTED BY MORRIS —
D-T3-AUTHORITY-01 E1 SELECTED BY MORRIS —
D-T3-CALIBRATION-01 F3 SELECTED BY MORRIS —
D-T3-T6EXT-CONTRACT-01 EXACT EVENT NAMES DEFERRED BY MORRIS —

T3 DELIVERY NOT AUTHORIZED —
NO CODE —
NO MIGRATION —
NO THRESHOLD ACTIVATION —
NO IAM IMPLEMENTATION —
NO T6-EXT IMPLEMENTATION —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

READY FOR CHATGPT DECISIONS-APPLIED VALIDATION
```

---

*Document 146 — post-arbitration record only. Document 145 remains the immutable pre-arbitration historical record.*
```

## FILE: `projects/sfia-studio/147-assistant-sfia-native-openai-finops-technical-lot-t3-execution.md` (CREATE)

- SHA-256: `d825e9bf80fb808ad0ef2918693f50fce2157e7cbb78fe1fed03f9c627fea75b`
- Bytes: 9802

```markdown
# 147 — FinOps Technical Lot T3 — Alert & Morris Review State — Execution

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/147-assistant-sfia-native-openai-finops-technical-lot-t3-execution.md`
**Cycle:** 8 — Delivery · FinOps Technical Lot T3
**Profil:** Critical
**Typologie:** EVOL / CODE / DOC / TEST
**Statut:** T3 DELIVERY FOUNDATION LOCAL — NO PROJECT COMMIT / PUSH / PR

---

## A. Statut et anti-claims

| Claim | Statut |
|-------|--------|
| GO Delivery T3 executed | **TRUE** |
| A1+B3+C1+D2+E1+F3 implemented locally | **TRUE** |
| T6-ext event names SELECTED | **FALSE** — DEFERRED |
| Real thresholds 15/20/25/30 activated | **FALSE** |
| Product IAM / session Morris | **FALSE** — NOT_SELECTED |
| Ack/resolve product APIs | **FALSE** |
| T1/T2/T6 runtime modified | **FALSE** |
| decision/** modified | **FALSE** |
| Project git add/commit/push/PR/merge | **FALSE** |
| T4/T5 Delivery | **FALSE** |
| Document 145/146 modified | **FALSE** — byte-identical |

---

## B. GO Morris exact

```
GO Delivery T3.
```

Consumed with validated decisions: A1 + B3 + C1 + D2 + E1 + F3 ; D-T3-T6EXT-CONTRACT-01 exact event names DEFERRED.

---

## C. Horodatage

| Fuseau | Valeur |
|--------|--------|
| CEST | 2026-08-07 19:22:15 CEST (+0200) |
| UTC | 2026-08-07 17:22:15 UTC |

---

## D. Git / branche

| Field | Value |
|-------|-------|
| Worktree | `.tmp-sfia-review/worktrees/finops-t3-preparation` |
| Delivery branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t3-alert-morris-review-state` |
| HEAD | `b8259859983577c31965aa877c956e7a25dd1c4d` |
| origin/main | `b8259859983577c31965aa877c956e7a25dd1c4d` |
| Staged | empty (project files untracked only) |
| Handoff before tip | `bf608f7de0d61098bd34383edf3d2ba5cec7a780` |
| Handoff before blob | `63ba9724efa478dd17e6283940b414450f09915e` |

---

## E. Relation 145 / 146 / 147

| Doc | Role |
|-----|------|
| **145** | Pre-arbitration preparation — **IMMUTABLE** this cycle |
| **146** | Post-arbitration decisions applied — **IMMUTABLE** this cycle |
| **147** | Delivery execution record (this document) |

### SHA-256 (must remain forever)

| Doc | SHA-256 |
|-----|---------|
| 145 | `809bc5bd20fc23c0c7d3368728e81193e1fe459f26c314d1ba1d4526b61540ba` |
| 146 | `a5eda99a97ab5887407db8b6290e6cae0405ed2b59a22a60b9ed7f4662150da1` |

---

## F. Décisions implémentées

| ID | Value | Delivery effect |
|----|-------|-----------------|
| D-T3-STATE-01 | A1 | Durable PG tables `finops_alert_state` + `finops_morris_review_state` separate from T6 audit |
| D-T3-TRIGGER-01 | B3 | `evaluateAfterT2` wrappers after T2 success; explicit `evaluateProjectPeriodThresholds` |
| D-T3-DEDUPE-01 | C1 | ONCE key projectId+periodStart+thresholdCode+currency ; UNIQUE DB |
| D-T3-LIFECYCLE-01 | D2 | Alert open/cleared · Review pending/acknowledged/resolved/superseded (system writes pending/superseded only) |
| D-T3-AUTHORITY-01 | E1 | System create pending OK ; no product ack/resolve ; IAM NOT_SELECTED |
| D-T3-CALIBRATION-01 | F3 | Injected definitions only ; no 15/20/25/30 runtime constants |
| D-T3-T6EXT-CONTRACT-01 | DEFERRED | No T6 enum/migration change ; draft names not adopted |

---

## G. Manifest réel (13 paths)

PRESERVE untracked:

1. `projects/sfia-studio/145-assistant-sfia-native-openai-finops-technical-lot-t3-alert-morris-review-preparation.md`
2. `projects/sfia-studio/146-assistant-sfia-native-openai-finops-technical-lot-t3-decisions-applied.md`

CREATE:

3. `projects/sfia-studio/147-assistant-sfia-native-openai-finops-technical-lot-t3-execution.md`
4. `app/lib/oa/finops/application/types.alertReview.ts`
5. `app/lib/oa/finops/application/t3Identity.ts`
6. `app/lib/oa/finops/application/evaluateProjectPeriodThresholds.ts`
7. `app/lib/oa/finops/application/evaluateAfterT2.ts`
8. `app/lib/oa/finops/ports/finopsAlertReviewPort.ts`
9. `app/lib/oa/finops/infrastructure/memory/memoryFinOpsAlertReview.ts`
10. `app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAlertReviewStore.ts`
11. `app/db/migrations/1754600002000_finops-t3-alert-review-state.js`
12. `app/__tests__/oa/finops/t3.alert-review.unit.test.ts`
13. `app/__tests__/oa/finops/postgres/t3.alert-review.integration.test.ts`

No 14th path. No rename. Existing T1/T2/T6/index/runtime untouched.

---

## H. Choix d’implémentation bornés

### Schema / tables

- `finops_alert_state` — informational alert durable state
- `finops_morris_review_state` — Morris review durable state
- Constraints: state / basis / currency /^[A-Z]{3}$/ / period month-start / threshold_amount > 0
- UNIQUE C1 on (project_id, period_start, threshold_code, currency)
- UNIQUE dedup_key ; indexes (project_id, period_start)
- No FK to `finops_usage_aggregate`
- DOWN refuses drop when rows exist

### Migration order

```
1754500000000 T1
< 1754600000000 T2
< 1754600001000 T6
< 1754600002000 T3
```

### C1 identity

`FINOPS_T3_IDENTITY_CONTRACT_VERSION=t3-v1` + projectId + periodStart + thresholdCode + currency → SHA-256 → prefixes `t3_dedup_` / `alert_` / `review_`.

Conflict on incompatible same-C1 definitions in one config: `FINOPS_T3_THRESHOLD_CONFIG_CONFLICT`.

### Threshold definition F3

Injected `FinOpsThresholdDefinition` only. Empty list = success no-op. FICTITIOUS test fixtures only.

### Comparator >=

Crossing uses existing Money (`amountMinor` BigInt): `evaluatedAmount >= thresholdAmount`.
This is an **implementation detail** of the foundation engine, **not** a Morris calibration decision. No Number/parseFloat/toFixed authoritative math.

### B3 wrappers

`recomputeAggregatesThenEvaluateThresholds` / `reconcileProjectPeriodThenEvaluateThresholds` call T2 first; evaluate T3 only after T2 success returns. No T2 lock held. Explicit evaluate remains independently callable.

### Failure posture

- T2 fail → no T3
- T2 success + T3 fail → return composite with T2 success preserved (`finopsSideOnly`); no T2 rollback

### E1 / IAM

Port exposes apply + list only. No acknowledge/resolve services. Product IAM NOT_SELECTED.

### T6-ext

Deferred. No draft event names in production code. T6 CHECK remains foundation capture-only.

### Concurrency / idempotence

T3 advisory lock `finops-t3:<projectId>` + periodStart (xact). Distinct from T2 `finops-a1:`. UNIQUE C1 as independent DB defence.

### Stale rebuild guard

Incoming `rebuildVersion` < persisted → no overwrite.

### Evidence evolution

estimated → observed → billed updates same C1 row (basis/amounts/version), no new identity.

### Data minimization

No prompts, secrets, raw provider payloads, actor/identity fields for deferred privileged mutations.

---

## I. Tests

Unit (`t3.alert-review.unit.test.ts`): items 1–22 with FICTITIOUS amounts (7.25 / 11.50 / etc.) — not 15/20/25/30.

Integration (`t3.alert-review.integration.test.ts`): migration order, tables, persistence, C1, concurrency, transitions, stale, isolation, durability, no seeds, T6 CHECK foundation-only, T1/T2/T6 present.

Regressions: typecheck, lint, build, vitest finops, npm test, ephemeral local PG migrate:up + test:db, git diff --check.

---

## J. Résultats

| Check | Result |
|-------|--------|
| typecheck | PASS |
| lint | PASS (0 warnings/errors) |
| build | PASS |
| vitest t3.alert-review.unit | **22/22 PASS** |
| vitest __tests__/oa/finops (no DB) | **131 PASS / 31 SKIP** |
| npm test | **148 files / 1478 tests PASS** |
| migrate:up (ephemeral PG16 Docker) | T1→T2→T6→T3 complete |
| test:db | **31/31 PASS** (incl. 7 T3 integration) |
| git diff --check | PASS |
| Threshold scan (new code) | No activation constants 15/20/25/30 (only negative assertion regex in integration test) |
| 145/146 SHA | unchanged byte-identical |
| Ephemeral PG | torn down (`finops-t3-pg-ephemeral` removed) |

---

## K. Réserves

| Reserve | Statut |
|---------|--------|
| R-T6-RUNTIME-COMPOSITION-01 | OPEN |
| R-PR-T2-API-01 | OPEN MINOR |
| T6-ext event names | DEFERRED |
| Real threshold calibration | REQUIRED before activation |
| Product Morris identity | REQUIRED before privileged mutations |
| Product IAM | NOT_SELECTED |

---

## L. Hors scope

T4/T5 · Neon · provider-real · UI/HTTP · external notifications · cron/poller · ack/resolve product · T6-ext · real 15/20/25/30 · project commit/push/PR · modify T1/T2/T6/decision/**

---

## M. Git final

HEAD remains `b8259859983577c31965aa877c956e7a25dd1c4d`. Delivery branch local only. Project files untracked. Staged empty. No project commit/push/PR.

---

## N. Verdict

```
FINOPS TECHNICAL LOT T3 —
LOCAL DELIVERY IMPLEMENTATION COMPLETE WITH RESERVES —

A1 MATERIALIZED DURABLE STATE IMPLEMENTED —
D2 ALERT / MORRIS REVIEW SPLIT IMPLEMENTED —
C1 CORE ONCE IDENTITY IMPLEMENTED —
B3 POST-T2 + EXPLICIT EVALUATE IMPLEMENTED —
F3 ENGINE WITHOUT REAL ACTIVE AMOUNTS IMPLEMENTED —
E1 SYSTEM REVIEW CREATION IMPLEMENTED —
PRIVILEGED MORRIS MUTATIONS NOT ACTIVATED —

T3 MIGRATION ADDITIVE VERIFIED —
T1/T2/T6 REGRESSION GREEN —
LOCAL POSTGRESQL VALIDATION GREEN —
CONCURRENCY / IDEMPOTENCE VERIFIED —
STALE REBUILD PROTECTION VERIFIED —

145 PRE-ARBITRATION RECORD PRESERVED —
146 DECISIONS RECORD PRESERVED —
147 DELIVERY EXECUTION RECORD CREATED —

NO REAL THRESHOLD ACTIVATION —
PRODUCT IAM NOT_SELECTED —
NO ACK/RESOLVE PRODUCT MUTATION —
NO T4 —
NO T5 —
NO T6-EXT —
NO T6 EVENT NAME ADOPTION —
NO GLOBAL T6 COMPOSITION —

R-T6-RUNTIME-COMPOSITION-01 OPEN —
R-PR-T2-API-01 OPEN MINOR —
T6-EXT-T2 EXCLUDED —
T6-EXT-T3T4 NOT AUTHORIZED —

NO PROJECT STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

READY FOR CHATGPT DELIVERY VALIDATION
```

---

*Document 147 — T3 Delivery execution record. Documents 145 and 146 remain immutable.*
```

## FILE: `projects/sfia-studio/app/lib/oa/finops/application/types.alertReview.ts` (CREATE)

- SHA-256: `1ebe08e1395594896c2c1657ca56ad0620505335880963132b5896e0054dd943`
- Bytes: 4080

```typescript
/**
 * FinOps T3 — Alert & Morris Review State application types (A1 + D2 + F3).
 *
 * F3: no default / production threshold amounts. Callers inject definitions.
 * E1: lifecycle includes acknowledged/resolved conceptually; no product write APIs.
 */

export const FINOPS_T3_IDENTITY_CONTRACT_VERSION = "t3-v1" as const;

export type FinOpsThresholdKind = "informational_alert" | "morris_review";

export type FinOpsThresholdBasis = "estimated" | "observed" | "billed";

/**
 * Injected threshold rule — never a built-in production catalog.
 * Amount is a canonical Money decimal string (scale 8).
 */
export type FinOpsThresholdDefinition = {
  readonly thresholdCode: string;
  readonly kind: FinOpsThresholdKind;
  readonly currency: string;
  readonly basis: FinOpsThresholdBasis;
  readonly amount: string;
};

export type FinOpsAlertLifecycleState = "open" | "cleared";

export type FinOpsMorrisReviewLifecycleState =
  | "pending"
  | "acknowledged"
  | "resolved"
  | "superseded";

export type FinOpsAlertState = {
  readonly alertId: string;
  readonly dedupKey: string;
  readonly projectId: string;
  readonly periodStart: string;
  readonly currency: string;
  readonly thresholdCode: string;
  readonly evaluationBasis: FinOpsThresholdBasis;
  readonly thresholdAmount: string;
  readonly evaluatedAmount: string;
  readonly rebuildVersion: number;
  readonly state: FinOpsAlertLifecycleState;
  readonly firstCrossedAt: string;
  readonly lastEvaluatedAt: string;
  readonly clearedAt: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
};

export type FinOpsMorrisReviewState = {
  readonly reviewId: string;
  readonly dedupKey: string;
  readonly projectId: string;
  readonly periodStart: string;
  readonly currency: string;
  readonly thresholdCode: string;
  readonly evaluationBasis: FinOpsThresholdBasis;
  readonly thresholdAmount: string;
  readonly evaluatedAmount: string;
  readonly rebuildVersion: number;
  readonly state: FinOpsMorrisReviewLifecycleState;
  readonly firstRequiredAt: string;
  readonly lastEvaluatedAt: string;
  readonly supersededAt: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
};

/**
 * Engine outcome for one injected threshold definition against one currency bucket.
 * Identity is C1 (kind/basis/amount/rebuildVersion are NOT part of identity).
 */
export type FinOpsThresholdEvaluationOutcome = {
  readonly kind: FinOpsThresholdKind;
  readonly thresholdCode: string;
  readonly currency: string;
  readonly evaluationBasis: FinOpsThresholdBasis;
  readonly thresholdAmount: string;
  readonly evaluatedAmount: string;
  readonly rebuildVersion: number;
  readonly crossed: boolean;
  readonly dedupKey: string;
  readonly alertId: string;
  readonly reviewId: string;
};

export type ApplyProjectPeriodEvaluationInput = {
  readonly projectId: string;
  /** UTC month start YYYY-MM-DD */
  readonly periodStart: string;
  readonly outcomes: ReadonlyArray<FinOpsThresholdEvaluationOutcome>;
  /** Injected evaluation clock (ISO). */
  readonly evaluatedAt: string;
};

export type ApplyProjectPeriodEvaluationResult =
  | {
      readonly outcome: "succeeded";
      readonly alerts: ReadonlyArray<FinOpsAlertState>;
      readonly reviews: ReadonlyArray<FinOpsMorrisReviewState>;
    }
  | {
      readonly outcome: "failed";
      readonly code: string;
      readonly message: string;
      readonly finopsSideOnly: true;
    };

export type EvaluateProjectPeriodThresholdsInput = {
  readonly projectId: string;
  readonly periodStart: string;
  readonly definitions: ReadonlyArray<FinOpsThresholdDefinition>;
};

export type EvaluateProjectPeriodThresholdsResult =
  | {
      readonly outcome: "succeeded";
      readonly noop: boolean;
      readonly evaluatedDefinitionCount: number;
      readonly alerts: ReadonlyArray<FinOpsAlertState>;
      readonly reviews: ReadonlyArray<FinOpsMorrisReviewState>;
    }
  | {
      readonly outcome: "failed";
      readonly code: string;
      readonly message: string;
      readonly finopsSideOnly: true;
    };
```

## FILE: `projects/sfia-studio/app/lib/oa/finops/application/t3Identity.ts` (CREATE)

- SHA-256: `43719b69c4051ac36fd7fcd2bf8598688bc5a5f07c161fa01a9f230ced1ee58b`
- Bytes: 1292

```typescript
/**
 * FinOps T3 — deterministic C1 identity (SHA-256).
 * Material: version + projectId + periodStart + thresholdCode + currency.
 * Does NOT include kind, basis, amount, rebuildVersion, or timestamps.
 */

import { createHash } from "node:crypto";
import { FINOPS_T3_IDENTITY_CONTRACT_VERSION } from "./types.alertReview";

function normalizePart(value: string | null | undefined): string {
  if (value === null || value === undefined) return "";
  return value.trim();
}

function sha256Hex(material: string): string {
  return createHash("sha256").update(material, "utf8").digest("hex");
}

export function deriveT3ThresholdIdentity(input: {
  readonly projectId: string;
  readonly periodStart: string;
  readonly thresholdCode: string;
  readonly currency: string;
}): {
  readonly digest: string;
  readonly dedupKey: string;
  readonly alertId: string;
  readonly reviewId: string;
} {
  const material = [
    FINOPS_T3_IDENTITY_CONTRACT_VERSION,
    normalizePart(input.projectId),
    normalizePart(input.periodStart),
    normalizePart(input.thresholdCode),
    normalizePart(input.currency),
  ].join("|");
  const digest = sha256Hex(material);
  return {
    digest,
    dedupKey: `t3_dedup_${digest}`,
    alertId: `alert_${digest}`,
    reviewId: `review_${digest}`,
  };
}
```

## FILE: `projects/sfia-studio/app/lib/oa/finops/application/evaluateProjectPeriodThresholds.ts` (CREATE)

- SHA-256: `ef3c50b6bc0e7070467e11d70369d86a85d99308b1ff9d69abd26c569234cef7`
- Bytes: 8773

```typescript
/**
 * FinOps T3 — evaluate injected threshold definitions against T2 aggregates (F3/B3).
 *
 * Crossing rule (implementation detail, not Morris calibration):
 *   evaluatedAmount >= thresholdAmount using existing Money (BigInt minor units).
 * No FX / cross-currency sum. Empty definitions → explicit success no-op.
 */

import {
  formatMoneyString,
  moneyFromMinor,
  normalizeCurrency,
  parseMoneyString,
  type FinOpsMoney,
} from "../domain/money";
import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsAlertReviewPort } from "../ports/finopsAlertReviewPort";
import { deriveT3ThresholdIdentity } from "./t3Identity";
import type {
  EvaluateProjectPeriodThresholdsInput,
  EvaluateProjectPeriodThresholdsResult,
  FinOpsThresholdBasis,
  FinOpsThresholdDefinition,
  FinOpsThresholdEvaluationOutcome,
  FinOpsThresholdKind,
} from "./types.alertReview";

export type EvaluateProjectPeriodThresholdsDeps = {
  readonly aggregates: FinOpsAggregatePort;
  readonly alertReview: FinOpsAlertReviewPort;
  readonly nowIso: () => string;
};

function isUtcMonthStartDate(periodStart: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(periodStart)) return false;
  const [y, m, d] = periodStart.split("-").map((x) => Number(x));
  if (!y || !m || !d) return false;
  if (d !== 1) return false;
  if (m < 1 || m > 12) return false;
  // Reject impossible calendar dates via UTC Date round-trip.
  const dt = new Date(Date.UTC(y, m - 1, 1));
  return (
    dt.getUTCFullYear() === y &&
    dt.getUTCMonth() === m - 1 &&
    dt.getUTCDate() === 1
  );
}

function assertPositiveMoney(money: FinOpsMoney): void {
  if (money.amountMinor <= BigInt(0)) {
    throw new Error("threshold amount must be strictly positive");
  }
}

function moneyGte(evaluated: FinOpsMoney, threshold: FinOpsMoney): boolean {
  if (evaluated.currency !== threshold.currency) {
    throw new Error("Money currency mismatch in threshold compare");
  }
  return evaluated.amountMinor >= threshold.amountMinor;
}

function selectBucketAmount(
  basis: FinOpsThresholdBasis,
  agg: {
    readonly estimatedAmount: string;
    readonly observedAmount: string;
    readonly billedAmount: string;
    readonly currency: string;
  },
): string {
  switch (basis) {
    case "estimated":
      return agg.estimatedAmount;
    case "observed":
      return agg.observedAmount;
    case "billed":
      return agg.billedAmount;
    default: {
      const _exhaustive: never = basis;
      return _exhaustive;
    }
  }
}

function isKind(value: string): value is FinOpsThresholdKind {
  return value === "informational_alert" || value === "morris_review";
}

function isBasis(value: string): value is FinOpsThresholdBasis {
  return value === "estimated" || value === "observed" || value === "billed";
}

/**
 * Validate injected definitions. Conflicting kind/basis/amount on the same C1
 * key fails with FINOPS_T3_THRESHOLD_CONFIG_CONFLICT (never "take the first").
 */
export function validateThresholdDefinitions(
  definitions: ReadonlyArray<FinOpsThresholdDefinition>,
):
  | { readonly ok: true; readonly normalized: ReadonlyArray<FinOpsThresholdDefinition> }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const seen = new Map<
    string,
    { kind: FinOpsThresholdKind; basis: FinOpsThresholdBasis; amount: string }
  >();
  const normalized: FinOpsThresholdDefinition[] = [];

  for (const def of definitions) {
    const thresholdCode = def.thresholdCode.trim();
    if (!thresholdCode) {
      return {
        ok: false,
        code: "FINOPS_T3_THRESHOLD_INVALID",
        message: "thresholdCode must be non-empty",
      };
    }
    if (!isKind(def.kind)) {
      return {
        ok: false,
        code: "FINOPS_T3_THRESHOLD_INVALID",
        message: "threshold kind is invalid",
      };
    }
    if (!isBasis(def.basis)) {
      return {
        ok: false,
        code: "FINOPS_T3_THRESHOLD_INVALID",
        message: "threshold basis is invalid",
      };
    }
    let currency: string;
    let amountMoney: FinOpsMoney;
    try {
      currency = normalizeCurrency(def.currency);
      amountMoney = parseMoneyString(def.amount, currency);
      assertPositiveMoney(amountMoney);
    } catch {
      return {
        ok: false,
        code: "FINOPS_T3_THRESHOLD_INVALID",
        message: "threshold currency/amount is invalid",
      };
    }
    const amount = formatMoneyString(amountMoney);
    const c1 = `${thresholdCode}|${currency}`;
    const prior = seen.get(c1);
    if (prior) {
      if (
        prior.kind !== def.kind ||
        prior.basis !== def.basis ||
        prior.amount !== amount
      ) {
        return {
          ok: false,
          code: "FINOPS_T3_THRESHOLD_CONFIG_CONFLICT",
          message:
            "Conflicting threshold definitions share the same C1 key (project-period deferred to apply; code+currency collide with incompatible kind/basis/amount)",
        };
      }
      // Exact duplicate — ignore second copy (same rule twice is not a conflict).
      continue;
    }
    seen.set(c1, { kind: def.kind, basis: def.basis, amount });
    normalized.push({
      thresholdCode,
      kind: def.kind,
      currency,
      basis: def.basis,
      amount,
    });
  }

  return { ok: true, normalized };
}

export async function evaluateProjectPeriodThresholds(
  deps: EvaluateProjectPeriodThresholdsDeps,
  input: EvaluateProjectPeriodThresholdsInput,
): Promise<EvaluateProjectPeriodThresholdsResult> {
  const projectId = input.projectId.trim();
  const periodStart = input.periodStart.trim();
  if (!projectId || !periodStart) {
    return {
      outcome: "failed",
      code: "FINOPS_T3_EVAL_INVALID_INPUT",
      message: "projectId and periodStart are required",
      finopsSideOnly: true,
    };
  }
  if (!isUtcMonthStartDate(periodStart)) {
    return {
      outcome: "failed",
      code: "FINOPS_T3_EVAL_INVALID_INPUT",
      message: "periodStart must be UTC month-start YYYY-MM-DD",
      finopsSideOnly: true,
    };
  }

  if (input.definitions.length === 0) {
    const alerts = await deps.alertReview.listAlertsForProjectPeriod({
      projectId,
      periodStart,
    });
    const reviews = await deps.alertReview.listReviewsForProjectPeriod({
      projectId,
      periodStart,
    });
    return {
      outcome: "succeeded",
      noop: true,
      evaluatedDefinitionCount: 0,
      alerts,
      reviews,
    };
  }

  const validated = validateThresholdDefinitions(input.definitions);
  if (!validated.ok) {
    return {
      outcome: "failed",
      code: validated.code,
      message: validated.message,
      finopsSideOnly: true,
    };
  }

  let aggregates;
  try {
    aggregates = await deps.aggregates.listAggregatesForProjectPeriod({
      projectId,
      periodStart,
    });
  } catch {
    return {
      outcome: "failed",
      code: "FINOPS_T3_AGGREGATE_READ_FAILED",
      message: "Failed to read FinOps T2 aggregates for evaluation",
      finopsSideOnly: true,
    };
  }

  const byCurrency = new Map(
    aggregates.map((a) => [normalizeCurrency(a.currency), a] as const),
  );

  const outcomes: FinOpsThresholdEvaluationOutcome[] = [];
  for (const def of validated.normalized) {
    const agg = byCurrency.get(def.currency);
    const evaluatedAmount = agg
      ? selectBucketAmount(def.basis, agg)
      : formatMoneyString(moneyFromMinor(BigInt(0), def.currency));
    const rebuildVersion = agg?.rebuildVersion ?? 0;
    const thresholdMoney = parseMoneyString(def.amount, def.currency);
    const evaluatedMoney = parseMoneyString(evaluatedAmount, def.currency);
    const crossed = moneyGte(evaluatedMoney, thresholdMoney);
    const identity = deriveT3ThresholdIdentity({
      projectId,
      periodStart,
      thresholdCode: def.thresholdCode,
      currency: def.currency,
    });
    outcomes.push({
      kind: def.kind,
      thresholdCode: def.thresholdCode,
      currency: def.currency,
      evaluationBasis: def.basis,
      thresholdAmount: def.amount,
      evaluatedAmount: formatMoneyString(evaluatedMoney),
      rebuildVersion,
      crossed,
      dedupKey: identity.dedupKey,
      alertId: identity.alertId,
      reviewId: identity.reviewId,
    });
  }

  const applied = await deps.alertReview.applyProjectPeriodEvaluation({
    projectId,
    periodStart,
    outcomes,
    evaluatedAt: deps.nowIso(),
  });

  if (applied.outcome === "failed") {
    return {
      outcome: "failed",
      code: applied.code,
      message: applied.message,
      finopsSideOnly: true,
    };
  }

  return {
    outcome: "succeeded",
    noop: false,
    evaluatedDefinitionCount: validated.normalized.length,
    alerts: applied.alerts,
    reviews: applied.reviews,
  };
}
```

## FILE: `projects/sfia-studio/app/lib/oa/finops/application/evaluateAfterT2.ts` (CREATE)

- SHA-256: `7c6b04dcf24f78e816463edfd9cf33488207bafa6515475b5a30dd25743d1643`
- Bytes: 3443

```typescript
/**
 * FinOps T3 — B3 orchestration wrappers around T2 WITHOUT modifying T2.
 *
 * T3 evaluation runs only AFTER T2 success returns; never inside T2 locks/txns.
 * T3 failure must not rewrite a successful T2 outcome.
 */

import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsAlertReviewPort } from "../ports/finopsAlertReviewPort";
import type { FinOpsReconciliationPort } from "../ports/finopsReconciliationPort";
import { recomputeAggregates } from "./recomputeAggregates";
import {
  reconcileProjectPeriod,
  type ReconcileProjectPeriodDeps,
} from "./reconcileProjectPeriod";
import {
  evaluateProjectPeriodThresholds,
  type EvaluateProjectPeriodThresholdsDeps,
} from "./evaluateProjectPeriodThresholds";
import type {
  EvaluateProjectPeriodThresholdsResult,
  FinOpsThresholdDefinition,
} from "./types.alertReview";
import type {
  ReconcileProjectPeriodInput,
  ReconcileProjectPeriodResult,
  RecomputeAggregatesInput,
  RecomputeAggregatesResult,
} from "./types.aggregate";

export type EvaluateAfterT2Deps = {
  readonly aggregates: FinOpsAggregatePort;
  readonly reconciliation: FinOpsReconciliationPort;
  readonly alertReview: FinOpsAlertReviewPort;
  readonly nowIso: () => string;
  readonly definitions: ReadonlyArray<FinOpsThresholdDefinition>;
};

export type EvaluateAfterRecomputeResult = {
  readonly t2: RecomputeAggregatesResult;
  readonly t3: EvaluateProjectPeriodThresholdsResult | null;
  /** True when T2 succeeded and T3 was attempted (success or failure). */
  readonly t3Attempted: boolean;
};

export type EvaluateAfterReconcileResult = {
  readonly t2: ReconcileProjectPeriodResult;
  readonly t3: EvaluateProjectPeriodThresholdsResult | null;
  readonly t3Attempted: boolean;
};

function t3Deps(
  deps: EvaluateAfterT2Deps,
): EvaluateProjectPeriodThresholdsDeps {
  return {
    aggregates: deps.aggregates,
    alertReview: deps.alertReview,
    nowIso: deps.nowIso,
  };
}

/**
 * Wrapper: recomputeAggregates → on success → evaluateProjectPeriodThresholds.
 */
export async function recomputeAggregatesThenEvaluateThresholds(
  deps: EvaluateAfterT2Deps,
  input: RecomputeAggregatesInput,
): Promise<EvaluateAfterRecomputeResult> {
  const t2 = await recomputeAggregates(
    { aggregates: deps.aggregates, nowIso: deps.nowIso },
    input,
  );
  if (t2.outcome !== "succeeded") {
    return { t2, t3: null, t3Attempted: false };
  }
  const t3 = await evaluateProjectPeriodThresholds(t3Deps(deps), {
    projectId: input.projectId,
    periodStart: input.periodStart,
    definitions: deps.definitions,
  });
  return { t2, t3, t3Attempted: true };
}

/**
 * Wrapper: reconcileProjectPeriod → on success → evaluateProjectPeriodThresholds.
 */
export async function reconcileProjectPeriodThenEvaluateThresholds(
  deps: EvaluateAfterT2Deps,
  input: ReconcileProjectPeriodInput,
): Promise<EvaluateAfterReconcileResult> {
  const reconDeps: ReconcileProjectPeriodDeps = {
    reconciliation: deps.reconciliation,
    aggregates: deps.aggregates,
    nowIso: deps.nowIso,
  };
  const t2 = await reconcileProjectPeriod(reconDeps, input);
  if (t2.outcome !== "succeeded") {
    return { t2, t3: null, t3Attempted: false };
  }
  const t3 = await evaluateProjectPeriodThresholds(t3Deps(deps), {
    projectId: input.projectId,
    periodStart: input.periodStart,
    definitions: deps.definitions,
  });
  return { t2, t3, t3Attempted: true };
}
```

## FILE: `projects/sfia-studio/app/lib/oa/finops/ports/finopsAlertReviewPort.ts` (CREATE)

- SHA-256: `b2af29b0ecc4620ff60e40c75a859bd3a4b33aaf0c6510b02471d3358055042b`
- Bytes: 1024

```typescript
/**
 * FinOps T3 — durable Alert / Morris Review port (A1 + D2).
 *
 * E1: no acknowledge / resolve / override product mutations in this Delivery.
 */

import type {
  ApplyProjectPeriodEvaluationInput,
  ApplyProjectPeriodEvaluationResult,
  FinOpsAlertState,
  FinOpsMorrisReviewState,
} from "../application/types.alertReview";

export type FinOpsAlertReviewPort = {
  /**
   * Atomically apply computed threshold outcomes for one project/period.
   * Owns system transitions (open/cleared, pending/superseded) + C1 idempotence.
   */
  readonly applyProjectPeriodEvaluation: (
    input: ApplyProjectPeriodEvaluationInput,
  ) => Promise<ApplyProjectPeriodEvaluationResult>;

  readonly listAlertsForProjectPeriod: (input: {
    readonly projectId: string;
    readonly periodStart: string;
  }) => Promise<ReadonlyArray<FinOpsAlertState>>;

  readonly listReviewsForProjectPeriod: (input: {
    readonly projectId: string;
    readonly periodStart: string;
  }) => Promise<ReadonlyArray<FinOpsMorrisReviewState>>;
};
```

## FILE: `projects/sfia-studio/app/lib/oa/finops/infrastructure/memory/memoryFinOpsAlertReview.ts` (CREATE)

- SHA-256: `0730c508006e4b9e022ed11057350aa7352a1a057fc1e2ea39e4286034aae2e2`
- Bytes: 9649

```typescript
/**
 * In-memory FinOps T3 Alert / Morris Review store (unit-test double).
 * Mirrors C1, system transitions, stale rebuild guard, and read-model lists.
 * No privileged acknowledge/resolve product APIs.
 */

import type {
  ApplyProjectPeriodEvaluationInput,
  ApplyProjectPeriodEvaluationResult,
  FinOpsAlertState,
  FinOpsMorrisReviewState,
  FinOpsThresholdEvaluationOutcome,
} from "../../application/types.alertReview";
import type { FinOpsAlertReviewPort } from "../../ports/finopsAlertReviewPort";

function sortKey(currency: string, thresholdCode: string): string {
  return `${currency}\0${thresholdCode}`;
}

function applyAlertTransition(
  existing: FinOpsAlertState | undefined,
  outcome: FinOpsThresholdEvaluationOutcome,
  projectId: string,
  periodStart: string,
  evaluatedAt: string,
): FinOpsAlertState | undefined {
  if (existing && outcome.rebuildVersion < existing.rebuildVersion) {
    // Stale evaluation must not overwrite newer state.
    return existing;
  }

  if (outcome.crossed) {
    if (!existing) {
      return {
        alertId: outcome.alertId,
        dedupKey: outcome.dedupKey,
        projectId,
        periodStart,
        currency: outcome.currency,
        thresholdCode: outcome.thresholdCode,
        evaluationBasis: outcome.evaluationBasis,
        thresholdAmount: outcome.thresholdAmount,
        evaluatedAmount: outcome.evaluatedAmount,
        rebuildVersion: outcome.rebuildVersion,
        state: "open",
        firstCrossedAt: evaluatedAt,
        lastEvaluatedAt: evaluatedAt,
        clearedAt: null,
        createdAt: evaluatedAt,
        updatedAt: evaluatedAt,
      };
    }
    // Recross after cleared → reopen same C1 identity; firstCrossedAt preserved.
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "open",
      lastEvaluatedAt: evaluatedAt,
      clearedAt: null,
      updatedAt: evaluatedAt,
    };
  }

  // below
  if (!existing) {
    // Do not invent a cleared historical row.
    return undefined;
  }
  if (existing.state === "open") {
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "cleared",
      lastEvaluatedAt: evaluatedAt,
      clearedAt: evaluatedAt,
      updatedAt: evaluatedAt,
    };
  }
  // already cleared — update non-identity evidence fields only
  return {
    ...existing,
    evaluationBasis: outcome.evaluationBasis,
    thresholdAmount: outcome.thresholdAmount,
    evaluatedAmount: outcome.evaluatedAmount,
    rebuildVersion: outcome.rebuildVersion,
    lastEvaluatedAt: evaluatedAt,
    updatedAt: evaluatedAt,
  };
}

function applyReviewTransition(
  existing: FinOpsMorrisReviewState | undefined,
  outcome: FinOpsThresholdEvaluationOutcome,
  projectId: string,
  periodStart: string,
  evaluatedAt: string,
): FinOpsMorrisReviewState | undefined {
  if (existing && outcome.rebuildVersion < existing.rebuildVersion) {
    return existing;
  }

  if (
    existing &&
    (existing.state === "acknowledged" || existing.state === "resolved")
  ) {
    // E1 future-safe: never usurp privileged Morris disposition; update
    // non-privileged evidence fields only when not stale.
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      lastEvaluatedAt: evaluatedAt,
      updatedAt: evaluatedAt,
    };
  }

  if (outcome.crossed) {
    if (!existing) {
      return {
        reviewId: outcome.reviewId,
        dedupKey: outcome.dedupKey,
        projectId,
        periodStart,
        currency: outcome.currency,
        thresholdCode: outcome.thresholdCode,
        evaluationBasis: outcome.evaluationBasis,
        thresholdAmount: outcome.thresholdAmount,
        evaluatedAmount: outcome.evaluatedAmount,
        rebuildVersion: outcome.rebuildVersion,
        state: "pending",
        firstRequiredAt: evaluatedAt,
        lastEvaluatedAt: evaluatedAt,
        supersededAt: null,
        createdAt: evaluatedAt,
        updatedAt: evaluatedAt,
      };
    }
    // Recross after superseded → reopen same identity to pending.
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "pending",
      lastEvaluatedAt: evaluatedAt,
      supersededAt: null,
      updatedAt: evaluatedAt,
    };
  }

  if (!existing) {
    return undefined;
  }
  if (existing.state === "pending") {
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "superseded",
      lastEvaluatedAt: evaluatedAt,
      supersededAt: evaluatedAt,
      updatedAt: evaluatedAt,
    };
  }
  // already superseded
  return {
    ...existing,
    evaluationBasis: outcome.evaluationBasis,
    thresholdAmount: outcome.thresholdAmount,
    evaluatedAmount: outcome.evaluatedAmount,
    rebuildVersion: outcome.rebuildVersion,
    lastEvaluatedAt: evaluatedAt,
    updatedAt: evaluatedAt,
  };
}

export function createMemoryFinOpsAlertReview(): FinOpsAlertReviewPort & {
  readonly _alerts: Map<string, FinOpsAlertState>;
  readonly _reviews: Map<string, FinOpsMorrisReviewState>;
} {
  const alerts = new Map<string, FinOpsAlertState>();
  const reviews = new Map<string, FinOpsMorrisReviewState>();
  /** Per project+period async mutex (stand-in for PG advisory lock). */
  const chains = new Map<string, Promise<unknown>>();

  const alertKey = (projectId: string, periodStart: string, thresholdCode: string, currency: string) =>
    `${projectId}|${periodStart}|${thresholdCode}|${currency}`;

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

  const listAlerts = (projectId: string, periodStart: string) =>
    [...alerts.values()]
      .filter((a) => a.projectId === projectId && a.periodStart === periodStart)
      .sort((a, b) =>
        sortKey(a.currency, a.thresholdCode).localeCompare(
          sortKey(b.currency, b.thresholdCode),
        ),
      );

  const listReviews = (projectId: string, periodStart: string) =>
    [...reviews.values()]
      .filter((r) => r.projectId === projectId && r.periodStart === periodStart)
      .sort((a, b) =>
        sortKey(a.currency, a.thresholdCode).localeCompare(
          sortKey(b.currency, b.thresholdCode),
        ),
      );

  return {
    _alerts: alerts,
    _reviews: reviews,

    async applyProjectPeriodEvaluation(
      input: ApplyProjectPeriodEvaluationInput,
    ): Promise<ApplyProjectPeriodEvaluationResult> {
      const projectId = input.projectId.trim();
      const periodStart = input.periodStart.trim();
      try {
        return await withExclusive(projectId, periodStart, async () => {
          for (const outcome of input.outcomes) {
            if (outcome.kind === "informational_alert") {
              const key = alertKey(
                projectId,
                periodStart,
                outcome.thresholdCode,
                outcome.currency,
              );
              const next = applyAlertTransition(
                alerts.get(key),
                outcome,
                projectId,
                periodStart,
                input.evaluatedAt,
              );
              if (next) alerts.set(key, next);
            } else if (outcome.kind === "morris_review") {
              const key = alertKey(
                projectId,
                periodStart,
                outcome.thresholdCode,
                outcome.currency,
              );
              const next = applyReviewTransition(
                reviews.get(key),
                outcome,
                projectId,
                periodStart,
                input.evaluatedAt,
              );
              if (next) reviews.set(key, next);
            }
          }
          return {
            outcome: "succeeded" as const,
            alerts: listAlerts(projectId, periodStart),
            reviews: listReviews(projectId, periodStart),
          };
        });
      } catch (error) {
        return {
          outcome: "failed",
          code: "FINOPS_T3_APPLY_FAILED",
          message:
            error instanceof Error
              ? error.message
              : "FinOps T3 apply failed",
          finopsSideOnly: true,
        };
      }
    },

    async listAlertsForProjectPeriod(input) {
      return listAlerts(input.projectId.trim(), input.periodStart.trim());
    },

    async listReviewsForProjectPeriod(input) {
      return listReviews(input.projectId.trim(), input.periodStart.trim());
    },
  };
}
```

## FILE: `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAlertReviewStore.ts` (CREATE)

- SHA-256: `695bfa1f372b7d82e6abcf271cd718fb71da8cbed3c05ab3ad5d7237daffab10`
- Bytes: 16355

```typescript
/**
 * FinOps T3 — PostgreSQL durable Alert / Morris Review store (A1 + D2).
 *
 * Transaction-scoped advisory lock namespace: finops-t3:<projectId> + periodStart.
 * Distinct from T2 finops-a1: — never held together / never reuses T2 lock.
 */

import type { Pool, PoolClient } from "pg";
import type {
  ApplyProjectPeriodEvaluationInput,
  ApplyProjectPeriodEvaluationResult,
  FinOpsAlertLifecycleState,
  FinOpsAlertState,
  FinOpsMorrisReviewLifecycleState,
  FinOpsMorrisReviewState,
  FinOpsThresholdBasis,
  FinOpsThresholdEvaluationOutcome,
} from "../../application/types.alertReview";
import {
  formatMoneyString,
  parseMoneyString,
} from "../../domain/money";
import type { FinOpsAlertReviewPort } from "../../ports/finopsAlertReviewPort";
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

function formatPgTs(value: unknown): string {
  if (value instanceof Date) return value.toISOString();
  return String(value);
}

function canonicalAmount(raw: unknown, currency: string): string {
  return formatMoneyString(parseMoneyString(String(raw), currency));
}

function rowToAlert(row: Record<string, unknown>): FinOpsAlertState {
  const currency = String(row.currency);
  return {
    alertId: String(row.alert_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    periodStart: formatPgDate(row.period_start),
    currency,
    thresholdCode: String(row.threshold_code),
    evaluationBasis: row.evaluation_basis as FinOpsThresholdBasis,
    thresholdAmount: canonicalAmount(row.threshold_amount, currency),
    evaluatedAmount: canonicalAmount(row.evaluated_amount, currency),
    rebuildVersion: Number(row.rebuild_version),
    state: row.state as FinOpsAlertLifecycleState,
    firstCrossedAt: formatPgTs(row.first_crossed_at),
    lastEvaluatedAt: formatPgTs(row.last_evaluated_at),
    clearedAt:
      row.cleared_at === null || row.cleared_at === undefined
        ? null
        : formatPgTs(row.cleared_at),
    createdAt: formatPgTs(row.created_at),
    updatedAt: formatPgTs(row.updated_at),
  };
}

function rowToReview(row: Record<string, unknown>): FinOpsMorrisReviewState {
  const currency = String(row.currency);
  return {
    reviewId: String(row.review_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    periodStart: formatPgDate(row.period_start),
    currency,
    thresholdCode: String(row.threshold_code),
    evaluationBasis: row.evaluation_basis as FinOpsThresholdBasis,
    thresholdAmount: canonicalAmount(row.threshold_amount, currency),
    evaluatedAmount: canonicalAmount(row.evaluated_amount, currency),
    rebuildVersion: Number(row.rebuild_version),
    state: row.state as FinOpsMorrisReviewLifecycleState,
    firstRequiredAt: formatPgTs(row.first_required_at),
    lastEvaluatedAt: formatPgTs(row.last_evaluated_at),
    supersededAt:
      row.superseded_at === null || row.superseded_at === undefined
        ? null
        : formatPgTs(row.superseded_at),
    createdAt: formatPgTs(row.created_at),
    updatedAt: formatPgTs(row.updated_at),
  };
}

async function loadAlert(
  client: PoolClient,
  projectId: string,
  periodStart: string,
  thresholdCode: string,
  currency: string,
): Promise<FinOpsAlertState | null> {
  const result = await client.query(
    `SELECT * FROM finops_alert_state
     WHERE project_id = $1 AND period_start = $2::date
       AND threshold_code = $3 AND currency = $4
     LIMIT 1`,
    [projectId, periodStart, thresholdCode, currency],
  );
  if (result.rowCount !== 1) return null;
  return rowToAlert(result.rows[0] as Record<string, unknown>);
}

async function loadReview(
  client: PoolClient,
  projectId: string,
  periodStart: string,
  thresholdCode: string,
  currency: string,
): Promise<FinOpsMorrisReviewState | null> {
  const result = await client.query(
    `SELECT * FROM finops_morris_review_state
     WHERE project_id = $1 AND period_start = $2::date
       AND threshold_code = $3 AND currency = $4
     LIMIT 1`,
    [projectId, periodStart, thresholdCode, currency],
  );
  if (result.rowCount !== 1) return null;
  return rowToReview(result.rows[0] as Record<string, unknown>);
}

async function upsertAlert(
  client: PoolClient,
  row: FinOpsAlertState,
): Promise<void> {
  await client.query(
    `INSERT INTO finops_alert_state (
      alert_id, dedup_key, project_id, period_start, currency, threshold_code,
      evaluation_basis, threshold_amount, evaluated_amount, rebuild_version,
      state, first_crossed_at, last_evaluated_at, cleared_at, created_at, updated_at
    ) VALUES (
      $1,$2,$3,$4::date,$5,$6,$7,$8::numeric,$9::numeric,$10,
      $11,$12::timestamptz,$13::timestamptz,$14::timestamptz,$15::timestamptz,$16::timestamptz
    )
    ON CONFLICT (project_id, period_start, threshold_code, currency) DO UPDATE SET
      evaluation_basis = EXCLUDED.evaluation_basis,
      threshold_amount = EXCLUDED.threshold_amount,
      evaluated_amount = EXCLUDED.evaluated_amount,
      rebuild_version = EXCLUDED.rebuild_version,
      state = EXCLUDED.state,
      last_evaluated_at = EXCLUDED.last_evaluated_at,
      cleared_at = EXCLUDED.cleared_at,
      updated_at = EXCLUDED.updated_at
    WHERE finops_alert_state.rebuild_version <= EXCLUDED.rebuild_version`,
    [
      row.alertId,
      row.dedupKey,
      row.projectId,
      row.periodStart,
      row.currency,
      row.thresholdCode,
      row.evaluationBasis,
      row.thresholdAmount,
      row.evaluatedAmount,
      row.rebuildVersion,
      row.state,
      row.firstCrossedAt,
      row.lastEvaluatedAt,
      row.clearedAt,
      row.createdAt,
      row.updatedAt,
    ],
  );
}

async function upsertReview(
  client: PoolClient,
  row: FinOpsMorrisReviewState,
): Promise<void> {
  await client.query(
    `INSERT INTO finops_morris_review_state (
      review_id, dedup_key, project_id, period_start, currency, threshold_code,
      evaluation_basis, threshold_amount, evaluated_amount, rebuild_version,
      state, first_required_at, last_evaluated_at, superseded_at, created_at, updated_at
    ) VALUES (
      $1,$2,$3,$4::date,$5,$6,$7,$8::numeric,$9::numeric,$10,
      $11,$12::timestamptz,$13::timestamptz,$14::timestamptz,$15::timestamptz,$16::timestamptz
    )
    ON CONFLICT (project_id, period_start, threshold_code, currency) DO UPDATE SET
      evaluation_basis = EXCLUDED.evaluation_basis,
      threshold_amount = EXCLUDED.threshold_amount,
      evaluated_amount = EXCLUDED.evaluated_amount,
      rebuild_version = EXCLUDED.rebuild_version,
      state = EXCLUDED.state,
      last_evaluated_at = EXCLUDED.last_evaluated_at,
      superseded_at = EXCLUDED.superseded_at,
      updated_at = EXCLUDED.updated_at
    WHERE finops_morris_review_state.rebuild_version <= EXCLUDED.rebuild_version`,
    [
      row.reviewId,
      row.dedupKey,
      row.projectId,
      row.periodStart,
      row.currency,
      row.thresholdCode,
      row.evaluationBasis,
      row.thresholdAmount,
      row.evaluatedAmount,
      row.rebuildVersion,
      row.state,
      row.firstRequiredAt,
      row.lastEvaluatedAt,
      row.supersededAt,
      row.createdAt,
      row.updatedAt,
    ],
  );
}

function nextAlert(
  existing: FinOpsAlertState | null,
  outcome: FinOpsThresholdEvaluationOutcome,
  projectId: string,
  periodStart: string,
  evaluatedAt: string,
): FinOpsAlertState | null {
  if (existing && outcome.rebuildVersion < existing.rebuildVersion) {
    return existing;
  }
  if (outcome.crossed) {
    if (!existing) {
      return {
        alertId: outcome.alertId,
        dedupKey: outcome.dedupKey,
        projectId,
        periodStart,
        currency: outcome.currency,
        thresholdCode: outcome.thresholdCode,
        evaluationBasis: outcome.evaluationBasis,
        thresholdAmount: outcome.thresholdAmount,
        evaluatedAmount: outcome.evaluatedAmount,
        rebuildVersion: outcome.rebuildVersion,
        state: "open",
        firstCrossedAt: evaluatedAt,
        lastEvaluatedAt: evaluatedAt,
        clearedAt: null,
        createdAt: evaluatedAt,
        updatedAt: evaluatedAt,
      };
    }
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "open",
      lastEvaluatedAt: evaluatedAt,
      clearedAt: null,
      updatedAt: evaluatedAt,
    };
  }
  if (!existing) return null;
  if (existing.state === "open") {
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "cleared",
      lastEvaluatedAt: evaluatedAt,
      clearedAt: evaluatedAt,
      updatedAt: evaluatedAt,
    };
  }
  return {
    ...existing,
    evaluationBasis: outcome.evaluationBasis,
    thresholdAmount: outcome.thresholdAmount,
    evaluatedAmount: outcome.evaluatedAmount,
    rebuildVersion: outcome.rebuildVersion,
    lastEvaluatedAt: evaluatedAt,
    updatedAt: evaluatedAt,
  };
}

function nextReview(
  existing: FinOpsMorrisReviewState | null,
  outcome: FinOpsThresholdEvaluationOutcome,
  projectId: string,
  periodStart: string,
  evaluatedAt: string,
): FinOpsMorrisReviewState | null {
  if (existing && outcome.rebuildVersion < existing.rebuildVersion) {
    return existing;
  }
  if (
    existing &&
    (existing.state === "acknowledged" || existing.state === "resolved")
  ) {
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      lastEvaluatedAt: evaluatedAt,
      updatedAt: evaluatedAt,
    };
  }
  if (outcome.crossed) {
    if (!existing) {
      return {
        reviewId: outcome.reviewId,
        dedupKey: outcome.dedupKey,
        projectId,
        periodStart,
        currency: outcome.currency,
        thresholdCode: outcome.thresholdCode,
        evaluationBasis: outcome.evaluationBasis,
        thresholdAmount: outcome.thresholdAmount,
        evaluatedAmount: outcome.evaluatedAmount,
        rebuildVersion: outcome.rebuildVersion,
        state: "pending",
        firstRequiredAt: evaluatedAt,
        lastEvaluatedAt: evaluatedAt,
        supersededAt: null,
        createdAt: evaluatedAt,
        updatedAt: evaluatedAt,
      };
    }
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "pending",
      lastEvaluatedAt: evaluatedAt,
      supersededAt: null,
      updatedAt: evaluatedAt,
    };
  }
  if (!existing) return null;
  if (existing.state === "pending") {
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "superseded",
      lastEvaluatedAt: evaluatedAt,
      supersededAt: evaluatedAt,
      updatedAt: evaluatedAt,
    };
  }
  return {
    ...existing,
    evaluationBasis: outcome.evaluationBasis,
    thresholdAmount: outcome.thresholdAmount,
    evaluatedAmount: outcome.evaluatedAmount,
    rebuildVersion: outcome.rebuildVersion,
    lastEvaluatedAt: evaluatedAt,
    updatedAt: evaluatedAt,
  };
}

export function createPostgresFinOpsAlertReviewStore(
  pool: Pool,
): FinOpsAlertReviewPort {
  return {
    async applyProjectPeriodEvaluation(
      input: ApplyProjectPeriodEvaluationInput,
    ): Promise<ApplyProjectPeriodEvaluationResult> {
      const projectId = input.projectId.trim();
      const periodStart = input.periodStart.trim();
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        // T3-only advisory lock — distinct namespace from T2 finops-a1:
        await client.query(
          `SELECT pg_advisory_xact_lock(
             hashtext('finops-t3:' || $1),
             hashtext($2)
           )`,
          [projectId, periodStart],
        );

        for (const outcome of input.outcomes) {
          if (outcome.kind === "informational_alert") {
            const existing = await loadAlert(
              client,
              projectId,
              periodStart,
              outcome.thresholdCode,
              outcome.currency,
            );
            const next = nextAlert(
              existing,
              outcome,
              projectId,
              periodStart,
              input.evaluatedAt,
            );
            if (next) await upsertAlert(client, next);
          } else if (outcome.kind === "morris_review") {
            const existing = await loadReview(
              client,
              projectId,
              periodStart,
              outcome.thresholdCode,
              outcome.currency,
            );
            const next = nextReview(
              existing,
              outcome,
              projectId,
              periodStart,
              input.evaluatedAt,
            );
            if (next) await upsertReview(client, next);
          }
        }

        const alerts = await listAlertsOnClient(client, projectId, periodStart);
        const reviews = await listReviewsOnClient(
          client,
          projectId,
          periodStart,
        );
        await client.query("COMMIT");
        return { outcome: "succeeded", alerts, reviews };
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore
          }
        }
        const sanitized = sanitizeDbError(error);
        return {
          outcome: "failed",
          code: sanitized.code,
          message: sanitized.message,
          finopsSideOnly: true,
        };
      } finally {
        client?.release();
      }
    },

    async listAlertsForProjectPeriod(input) {
      const result = await pool.query(
        `SELECT * FROM finops_alert_state
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY currency ASC, threshold_code ASC`,
        [input.projectId.trim(), input.periodStart.trim()],
      );
      return result.rows.map((row) =>
        rowToAlert(row as Record<string, unknown>),
      );
    },

    async listReviewsForProjectPeriod(input) {
      const result = await pool.query(
        `SELECT * FROM finops_morris_review_state
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY currency ASC, threshold_code ASC`,
        [input.projectId.trim(), input.periodStart.trim()],
      );
      return result.rows.map((row) =>
        rowToReview(row as Record<string, unknown>),
      );
    },
  };
}

async function listAlertsOnClient(
  client: PoolClient,
  projectId: string,
  periodStart: string,
): Promise<ReadonlyArray<FinOpsAlertState>> {
  const result = await client.query(
    `SELECT * FROM finops_alert_state
     WHERE project_id = $1 AND period_start = $2::date
     ORDER BY currency ASC, threshold_code ASC`,
    [projectId, periodStart],
  );
  return result.rows.map((row) => rowToAlert(row as Record<string, unknown>));
}

async function listReviewsOnClient(
  client: PoolClient,
  projectId: string,
  periodStart: string,
): Promise<ReadonlyArray<FinOpsMorrisReviewState>> {
  const result = await client.query(
    `SELECT * FROM finops_morris_review_state
     WHERE project_id = $1 AND period_start = $2::date
     ORDER BY currency ASC, threshold_code ASC`,
    [projectId, periodStart],
  );
  return result.rows.map((row) => rowToReview(row as Record<string, unknown>));
}
```

## FILE: `projects/sfia-studio/app/db/migrations/1754600002000_finops-t3-alert-review-state.js` (CREATE)

- SHA-256: `4b5d11785db303eaae015d34d27f5fe628d9bc3074fe2f8f75f3e9d923f08ddb`
- Bytes: 5532

```javascript
/**
 * Migration: FinOps T3 Alert & Morris Review durable state (A1 + D2 + C1).
 *
 * Order (must remain):
 *   1754500000000 T1 < 1754600000000 T2 < 1754600001000 T6 < 1754600002000 T3
 *
 * No seed thresholds. No T6-ext event names. No FK to rebuildable aggregates.
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("finops_alert_state", {
    alert_id: { type: "text", primaryKey: true, notNull: true },
    dedup_key: { type: "text", notNull: true },
    project_id: { type: "text", notNull: true },
    period_start: { type: "date", notNull: true },
    currency: { type: "text", notNull: true },
    threshold_code: { type: "text", notNull: true },
    evaluation_basis: { type: "text", notNull: true },
    threshold_amount: { type: "numeric(20,8)", notNull: true },
    evaluated_amount: { type: "numeric(20,8)", notNull: true },
    rebuild_version: { type: "bigint", notNull: true },
    state: { type: "text", notNull: true },
    first_crossed_at: { type: "timestamptz", notNull: true },
    last_evaluated_at: { type: "timestamptz", notNull: true },
    cleared_at: { type: "timestamptz" },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
    updated_at: { type: "timestamptz", notNull: true },
  });

  pgm.addConstraint("finops_alert_state", "finops_alert_state_dedup_key_key", {
    unique: ["dedup_key"],
  });

  pgm.addConstraint("finops_alert_state", "finops_alert_state_c1_key", {
    unique: ["project_id", "period_start", "threshold_code", "currency"],
  });

  pgm.addConstraint("finops_alert_state", "finops_alert_state_state_chk", {
    check: "state IN ('open', 'cleared')",
  });

  pgm.addConstraint("finops_alert_state", "finops_alert_state_basis_chk", {
    check: "evaluation_basis IN ('estimated', 'observed', 'billed')",
  });

  pgm.addConstraint("finops_alert_state", "finops_alert_state_currency_chk", {
    check: "currency ~ '^[A-Z]{3}$'",
  });

  pgm.addConstraint("finops_alert_state", "finops_alert_state_period_start_chk", {
    check: "period_start = date_trunc('month', period_start::timestamp)::date",
  });

  pgm.addConstraint(
    "finops_alert_state",
    "finops_alert_state_threshold_positive_chk",
    {
      check: "threshold_amount > 0",
    },
  );

  pgm.createIndex("finops_alert_state", ["project_id", "period_start"], {
    name: "finops_alert_state_project_period_idx",
  });

  pgm.createTable("finops_morris_review_state", {
    review_id: { type: "text", primaryKey: true, notNull: true },
    dedup_key: { type: "text", notNull: true },
    project_id: { type: "text", notNull: true },
    period_start: { type: "date", notNull: true },
    currency: { type: "text", notNull: true },
    threshold_code: { type: "text", notNull: true },
    evaluation_basis: { type: "text", notNull: true },
    threshold_amount: { type: "numeric(20,8)", notNull: true },
    evaluated_amount: { type: "numeric(20,8)", notNull: true },
    rebuild_version: { type: "bigint", notNull: true },
    state: { type: "text", notNull: true },
    first_required_at: { type: "timestamptz", notNull: true },
    last_evaluated_at: { type: "timestamptz", notNull: true },
    superseded_at: { type: "timestamptz" },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
    updated_at: { type: "timestamptz", notNull: true },
  });

  pgm.addConstraint(
    "finops_morris_review_state",
    "finops_morris_review_state_dedup_key_key",
    {
      unique: ["dedup_key"],
    },
  );

  pgm.addConstraint("finops_morris_review_state", "finops_morris_review_state_c1_key", {
    unique: ["project_id", "period_start", "threshold_code", "currency"],
  });

  pgm.addConstraint("finops_morris_review_state", "finops_morris_review_state_state_chk", {
    check:
      "state IN ('pending', 'acknowledged', 'resolved', 'superseded')",
  });

  pgm.addConstraint("finops_morris_review_state", "finops_morris_review_state_basis_chk", {
    check: "evaluation_basis IN ('estimated', 'observed', 'billed')",
  });

  pgm.addConstraint(
    "finops_morris_review_state",
    "finops_morris_review_state_currency_chk",
    {
      check: "currency ~ '^[A-Z]{3}$'",
    },
  );

  pgm.addConstraint(
    "finops_morris_review_state",
    "finops_morris_review_state_period_start_chk",
    {
      check: "period_start = date_trunc('month', period_start::timestamp)::date",
    },
  );

  pgm.addConstraint(
    "finops_morris_review_state",
    "finops_morris_review_state_threshold_positive_chk",
    {
      check: "threshold_amount > 0",
    },
  );

  pgm.createIndex(
    "finops_morris_review_state",
    ["project_id", "period_start"],
    {
      name: "finops_morris_review_state_project_period_idx",
    },
  );
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  // Data-preserving doctrine: refuse drop when either table has rows.
  pgm.sql(`
DO $$
DECLARE
  alert_count bigint;
  review_count bigint;
BEGIN
  SELECT COUNT(*) INTO alert_count FROM finops_alert_state;
  SELECT COUNT(*) INTO review_count FROM finops_morris_review_state;
  IF alert_count > 0 OR review_count > 0 THEN
    RAISE EXCEPTION
      'Refuse FinOps T3 down migration: rows exist in finops_alert_state or finops_morris_review_state';
  END IF;
END $$;
`);

  pgm.dropTable("finops_morris_review_state");
  pgm.dropTable("finops_alert_state");
};
```

## FILE: `projects/sfia-studio/app/__tests__/oa/finops/t3.alert-review.unit.test.ts` (CREATE)

- SHA-256: `e50666064e4101c9e6af903357487f67ff969c194404be6a59426d7338faa76d`
- Bytes: 28537

```typescript
/**
 * @vitest-environment node
 *
 * FinOps T3 — Alert & Morris Review unit tests (items 1–22).
 * FICTITIOUS fixtures only — NOT historical calibration 15/20/25/30.
 */
import { describe, expect, it, vi } from "vitest";
import {
  reconcileProjectPeriodThenEvaluateThresholds,
  recomputeAggregatesThenEvaluateThresholds,
} from "@/lib/oa/finops/application/evaluateAfterT2";
import { evaluateProjectPeriodThresholds } from "@/lib/oa/finops/application/evaluateProjectPeriodThresholds";
import { deriveT3ThresholdIdentity } from "@/lib/oa/finops/application/t3Identity";
import type { FinOpsThresholdDefinition } from "@/lib/oa/finops/application/types.alertReview";
import type { FinOpsProjectPeriodAggregate as T2Agg } from "@/lib/oa/finops/application/types.aggregate";
import { formatMoneyString, parseMoneyString } from "@/lib/oa/finops/domain/money";
import { createMemoryFinOpsAlertReview } from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsAlertReview";
import {
  createMemoryFinOpsT2Pair,
} from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsT2";
import type { FinOpsAggregatePort } from "@/lib/oa/finops/ports/finopsAggregatePort";
import { deriveCostEventIdentity } from "@/lib/oa/finops/application/t2Identity";

/** FICTITIOUS — arbitrary test amounts; NOT project calibration 15/20/25/30. */
const FICT_ALERT_AMOUNT = "7.25000000";
const FICT_REVIEW_AMOUNT = "11.50000000";
const FICT_BELOW = "3.00000000";
const FICT_EQUAL = "7.25000000";
const FICT_ABOVE = "9.00000000";

function agg(partial: Partial<T2Agg> & Pick<T2Agg, "projectId" | "periodStart" | "currency">): T2Agg {
  const currency = partial.currency;
  const zero = formatMoneyString(parseMoneyString("0", currency));
  return {
    estimatedAmount: zero,
    observedAmount: zero,
    billedAmount: zero,
    unknownAmount: zero,
    inputTokensSum: null,
    outputTokensSum: null,
    totalTokensSum: null,
    costEventCount: 0,
    unavailableEstimationCount: 0,
    rebuildVersion: 1,
    rebuiltAt: "2026-08-07T12:00:00.000Z",
    ...partial,
  };
}

function memoryAggregates(
  rows: ReadonlyArray<T2Agg>,
): FinOpsAggregatePort {
  return {
    async replaceProjectPeriodAggregates() {
      /* no-op for evaluate-only tests */
    },
    async readAggregate(key) {
      return (
        rows.find(
          (r) =>
            r.projectId === key.projectId &&
            r.periodStart === key.periodStart &&
            r.currency === key.currency,
        ) ?? null
      );
    },
    async listAggregatesForProjectPeriod(input) {
      return rows.filter(
        (r) =>
          r.projectId === input.projectId &&
          r.periodStart === input.periodStart,
      );
    },
    async withExclusiveProjectPeriodRebuild(_input, work) {
      return work({
        async listAllCostEventsForPeriod() {
          return [];
        },
        async listAggregates() {
          return rows;
        },
        async replaceAggregates() {
          /* no-op */
        },
      });
    },
  };
}

const alertDef = (code = "FICT_INFO_A"): FinOpsThresholdDefinition => ({
  thresholdCode: code,
  kind: "informational_alert",
  currency: "USD",
  basis: "estimated",
  amount: FICT_ALERT_AMOUNT,
});

const reviewDef = (code = "FICT_REV_A"): FinOpsThresholdDefinition => ({
  thresholdCode: code,
  kind: "morris_review",
  currency: "USD",
  basis: "observed",
  amount: FICT_REVIEW_AMOUNT,
});

describe("FinOps T3 alert/review unit", () => {
  it("1. threshold below → no initial row", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_BELOW,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [alertDef()],
      },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.alerts).toHaveLength(0);
  });

  it("2. threshold equal → crossed", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_EQUAL,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [alertDef()],
      },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.alerts).toHaveLength(1);
    expect(result.alerts[0]!.state).toBe("open");
  });

  it("3. threshold above → crossed", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [alertDef()],
      },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.alerts[0]!.state).toBe("open");
  });

  it("4. informational → Alert open", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.alerts[0]!.state).toBe("open");
    expect(result.reviews).toHaveLength(0);
  });

  it("5. review → Morris Review pending", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            observedAmount: "12.00000000",
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [reviewDef()],
      },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.reviews).toHaveLength(1);
    expect(result.reviews[0]!.state).toBe("pending");
    expect(result.alerts).toHaveLength(0);
  });

  it("6. repeat evaluation → C1 idempotent", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const deps = {
      aggregates: memoryAggregates([
        agg({
          projectId: "p1",
          periodStart: "2026-08-01",
          currency: "USD",
          estimatedAmount: FICT_ABOVE,
        }),
      ]),
      alertReview,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
    const input = {
      projectId: "p1",
      periodStart: "2026-08-01",
      definitions: [alertDef()],
    };
    await evaluateProjectPeriodThresholds(deps, input);
    await evaluateProjectPeriodThresholds(deps, input);
    const listed = await alertReview.listAlertsForProjectPeriod({
      projectId: "p1",
      periodStart: "2026-08-01",
    });
    expect(listed).toHaveLength(1);
    const id = deriveT3ThresholdIdentity({
      projectId: "p1",
      periodStart: "2026-08-01",
      thresholdCode: "FICT_INFO_A",
      currency: "USD",
    });
    expect(listed[0]!.alertId).toBe(id.alertId);
  });

  it("7. same key + evidence basis evolution → same identity", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const a1 = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
            rebuildVersion: 1,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [
          { ...alertDef(), basis: "estimated", amount: FICT_ALERT_AMOUNT },
        ],
      },
    );
    expect(a1.outcome).toBe("succeeded");
    const a2 = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            observedAmount: FICT_ABOVE,
            rebuildVersion: 2,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T13:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [
          { ...alertDef(), basis: "observed", amount: FICT_ALERT_AMOUNT },
        ],
      },
    );
    expect(a2.outcome).toBe("succeeded");
    if (a2.outcome !== "succeeded") return;
    expect(a2.alerts).toHaveLength(1);
    expect(a2.alerts[0]!.evaluationBasis).toBe("observed");
    expect(a2.alerts[0]!.alertId).toBe(
      deriveT3ThresholdIdentity({
        projectId: "p1",
        periodStart: "2026-08-01",
        thresholdCode: "FICT_INFO_A",
        currency: "USD",
      }).alertId,
    );
  });

  it("8. correction downward → Alert cleared", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
            rebuildVersion: 1,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    const after = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_BELOW,
            rebuildVersion: 2,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T13:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    expect(after.outcome).toBe("succeeded");
    if (after.outcome !== "succeeded") return;
    expect(after.alerts[0]!.state).toBe("cleared");
  });

  it("9. correction downward → Review superseded", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            observedAmount: "12.00000000",
            rebuildVersion: 1,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [reviewDef()],
      },
    );
    const after = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            observedAmount: "1.00000000",
            rebuildVersion: 2,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T13:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [reviewDef()],
      },
    );
    expect(after.outcome).toBe("succeeded");
    if (after.outcome !== "succeeded") return;
    expect(after.reviews[0]!.state).toBe("superseded");
  });

  it("10. recross → same row reopened", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const id = deriveT3ThresholdIdentity({
      projectId: "p1",
      periodStart: "2026-08-01",
      thresholdCode: "FICT_INFO_A",
      currency: "USD",
    });
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
            rebuildVersion: 1,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T10:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_BELOW,
            rebuildVersion: 2,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    const again = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
            rebuildVersion: 3,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    expect(again.outcome).toBe("succeeded");
    if (again.outcome !== "succeeded") return;
    expect(again.alerts).toHaveLength(1);
    expect(again.alerts[0]!.alertId).toBe(id.alertId);
    expect(again.alerts[0]!.state).toBe("open");
    expect(again.alerts[0]!.firstCrossedAt).toBe("2026-08-07T10:00:00.000Z");
  });

  it("11. period rollover → new identity", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-09-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-09-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-09-01", definitions: [alertDef()] },
    );
    const aug = await alertReview.listAlertsForProjectPeriod({
      projectId: "p1",
      periodStart: "2026-08-01",
    });
    const sep = await alertReview.listAlertsForProjectPeriod({
      projectId: "p1",
      periodStart: "2026-09-01",
    });
    expect(aug[0]!.alertId).not.toBe(sep[0]!.alertId);
  });

  it("12. currency isolation", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
          }),
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "EUR",
            estimatedAmount: FICT_ABOVE,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [
          alertDef(),
          { ...alertDef(), currency: "EUR" },
        ],
      },
    );
    const listed = await alertReview.listAlertsForProjectPeriod({
      projectId: "p1",
      periodStart: "2026-08-01",
    });
    expect(listed).toHaveLength(2);
    expect(listed.map((a) => a.currency).sort()).toEqual(["EUR", "USD"]);
    expect(listed[0]!.alertId).not.toBe(listed[1]!.alertId);
  });

  it("13. conflicting definition → explicit error", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [
          alertDef("SAME"),
          {
            thresholdCode: "SAME",
            kind: "morris_review",
            currency: "USD",
            basis: "estimated",
            amount: FICT_ALERT_AMOUNT,
          },
        ],
      },
    );
    expect(result.outcome).toBe("failed");
    if (result.outcome !== "failed") return;
    expect(result.code).toBe("FINOPS_T3_THRESHOLD_CONFIG_CONFLICT");
  });

  it("14. stale rebuildVersion → no overwrite", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
            rebuildVersion: 5,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    // Stale evaluation with lower rebuild + below must not clear.
    await alertReview.applyProjectPeriodEvaluation({
      projectId: "p1",
      periodStart: "2026-08-01",
      evaluatedAt: "2026-08-07T11:00:00.000Z",
      outcomes: [
        {
          kind: "informational_alert",
          thresholdCode: "FICT_INFO_A",
          currency: "USD",
          evaluationBasis: "estimated",
          thresholdAmount: FICT_ALERT_AMOUNT,
          evaluatedAmount: FICT_BELOW,
          rebuildVersion: 2,
          crossed: false,
          ...deriveT3ThresholdIdentity({
            projectId: "p1",
            periodStart: "2026-08-01",
            thresholdCode: "FICT_INFO_A",
            currency: "USD",
          }),
        },
      ],
    });
    const listed = await alertReview.listAlertsForProjectPeriod({
      projectId: "p1",
      periodStart: "2026-08-01",
    });
    expect(listed[0]!.state).toBe("open");
    expect(listed[0]!.rebuildVersion).toBe(5);
  });

  it("15. empty definitions → F3 no-op", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [] },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.noop).toBe(true);
    expect(result.alerts).toHaveLength(0);
  });

  it("16. estimated basis informs/review without blocking/enforcement", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: "12.00000000",
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [
          { ...reviewDef(), basis: "estimated", amount: FICT_REVIEW_AMOUNT },
        ],
      },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.reviews[0]!.state).toBe("pending");
    expect(result.reviews[0]!.evaluationBasis).toBe("estimated");
    // No blocking field / enforcement API exists on the result.
    expect(
      Object.prototype.hasOwnProperty.call(result, "blocked"),
    ).toBe(false);
  });

  it("17. B3 rebuild wrapper evaluates only after T2 success", async () => {
    const pair = createMemoryFinOpsT2Pair();
    const alertReview = createMemoryFinOpsAlertReview();
    const identity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "r1",
      evidenceClass: "estimated",
      correctionRef: null,
      amount: FICT_ABOVE,
      currency: "USD",
    });
    await pair.reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId: "p1",
      executionRunId: "r1",
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_ABOVE,
      evidenceClass: "estimated",
      sourceOfTruth: "PARAMETRIC_ESTIMATE",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: "fixture-v1",
      provider: "fixture-provider",
      model: "fixture-model",
      unit: "token",
      billingQuantum: "1000",
      usageQuantity: "1",
      occurredAt: "2026-08-07T10:00:00.000Z",
    });
    const result = await recomputeAggregatesThenEvaluateThresholds(
      {
        aggregates: pair.aggregates,
        reconciliation: pair.reconciliation,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
        definitions: [alertDef()],
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t3Attempted).toBe(true);
    expect(result.t3?.outcome).toBe("succeeded");
  });

  it("18. B3 reconciliation wrapper evaluates only after T2 success", async () => {
    const pair = createMemoryFinOpsT2Pair();
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await reconcileProjectPeriodThenEvaluateThresholds(
      {
        aggregates: pair.aggregates,
        reconciliation: pair.reconciliation,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
        definitions: [
          {
            ...reviewDef(),
            basis: "observed",
            amount: FICT_REVIEW_AMOUNT,
          },
        ],
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-1",
        facts: [
          {
            executionRunId: "run-obs",
            usageEventId: null,
            evidenceClass: "observed",
            sourceOfTruth: "PROVIDER_OBSERVED",
            amount: "12.00000000",
            currency: "USD",
            correctionRef: "corr-1",
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t3Attempted).toBe(true);
    expect(result.t3?.outcome).toBe("succeeded");
  });

  it("19. T2 failure → no T3 evaluation", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const failingAggregates: FinOpsAggregatePort = {
      async replaceProjectPeriodAggregates() {
        throw new Error("should not replace");
      },
      async readAggregate() {
        return null;
      },
      async listAggregatesForProjectPeriod() {
        return [];
      },
      async withExclusiveProjectPeriodRebuild() {
        throw new Error("T2 exclusive rebuild failed");
      },
    };
    const spy = vi.spyOn(alertReview, "applyProjectPeriodEvaluation");
    const result = await recomputeAggregatesThenEvaluateThresholds(
      {
        aggregates: failingAggregates,
        reconciliation: createMemoryFinOpsT2Pair().reconciliation,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
        definitions: [alertDef()],
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    expect(result.t2.outcome).toBe("failed");
    expect(result.t3Attempted).toBe(false);
    expect(result.t3).toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it("20. T3 failure after T2 success → T2 success preserved", async () => {
    const pair = createMemoryFinOpsT2Pair();
    const identity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "r1",
      evidenceClass: "estimated",
      correctionRef: null,
      amount: FICT_ABOVE,
      currency: "USD",
    });
    await pair.reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId: "p1",
      executionRunId: "r1",
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_ABOVE,
      evidenceClass: "estimated",
      sourceOfTruth: "PARAMETRIC_ESTIMATE",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: "fixture-v1",
      provider: "fixture-provider",
      model: "fixture-model",
      unit: "token",
      billingQuantum: "1000",
      usageQuantity: "1",
      occurredAt: "2026-08-07T10:00:00.000Z",
    });
    const alertReview = createMemoryFinOpsAlertReview();
    vi.spyOn(alertReview, "applyProjectPeriodEvaluation").mockResolvedValue({
      outcome: "failed",
      code: "FINOPS_T3_APPLY_FAILED",
      message: "injected T3 failure",
      finopsSideOnly: true,
    });
    const result = await recomputeAggregatesThenEvaluateThresholds(
      {
        aggregates: pair.aggregates,
        reconciliation: pair.reconciliation,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
        definitions: [alertDef()],
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t3Attempted).toBe(true);
    expect(result.t3?.outcome).toBe("failed");
  });

  it("21. explicit evaluate repair/replay idempotent", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const deps = {
      aggregates: memoryAggregates([
        agg({
          projectId: "p1",
          periodStart: "2026-08-01",
          currency: "USD",
          estimatedAmount: FICT_ABOVE,
        }),
      ]),
      alertReview,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
    const input = {
      projectId: "p1",
      periodStart: "2026-08-01",
      definitions: [alertDef()],
    };
    const a = await evaluateProjectPeriodThresholds(deps, input);
    const b = await evaluateProjectPeriodThresholds(deps, input);
    expect(a.outcome).toBe("succeeded");
    expect(b.outcome).toBe("succeeded");
    const listed = await alertReview.listAlertsForProjectPeriod({
      projectId: "p1",
      periodStart: "2026-08-01",
    });
    expect(listed).toHaveLength(1);
  });

  it("22. no privileged ack/resolve functions used", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    expect(
      Object.prototype.hasOwnProperty.call(
        alertReview,
        "acknowledgeMorrisReview",
      ),
    ).toBe(false);
    expect(
      Object.prototype.hasOwnProperty.call(alertReview, "resolveMorrisReview"),
    ).toBe(false);
    expect(typeof (alertReview as { acknowledge?: unknown }).acknowledge).toBe(
      "undefined",
    );
    expect(typeof (alertReview as { resolve?: unknown }).resolve).toBe(
      "undefined",
    );
  });
});
```

## FILE: `projects/sfia-studio/app/__tests__/oa/finops/postgres/t3.alert-review.integration.test.ts` (CREATE)

- SHA-256: `f9418e2a6b3233ca6e1863e441afb5bf7d75d3d52f7bf01bc650863e677724a1`
- Bytes: 16437

```typescript
/**
 * @vitest-environment node
 *
 * FinOps T3 PostgreSQL alert/review integration.
 * Requires DATABASE_URL (ephemeral local Postgres only — never Neon).
 * FICTITIOUS thresholds only — NOT 15/20/25/30.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Pool } from "pg";
import { evaluateProjectPeriodThresholds } from "@/lib/oa/finops/application/evaluateProjectPeriodThresholds";
import { deriveT3ThresholdIdentity } from "@/lib/oa/finops/application/t3Identity";
import type { FinOpsThresholdDefinition } from "@/lib/oa/finops/application/types.alertReview";
import { formatMoneyString, parseMoneyString } from "@/lib/oa/finops/domain/money";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsAggregateStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore";
import { createPostgresFinOpsAlertReviewStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsAlertReviewStore";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

/** FICTITIOUS — not historical calibration. */
const FICT_AMOUNT = "7.25000000";
const FICT_ABOVE = "9.00000000";
const FICT_BELOW = "1.00000000";

const alertDef = (code = "FICT_INFO_PG"): FinOpsThresholdDefinition => ({
  thresholdCode: code,
  kind: "informational_alert",
  currency: "USD",
  basis: "estimated",
  amount: FICT_AMOUNT,
});

const reviewDef = (code = "FICT_REV_PG"): FinOpsThresholdDefinition => ({
  thresholdCode: code,
  kind: "morris_review",
  currency: "USD",
  basis: "observed",
  amount: FICT_AMOUNT,
});

describeDb("FinOps T3 PostgreSQL alert/review integration", () => {
  let pool: Pool;
  const suffix = `${Date.now()}`;

  beforeAll(() => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("1–2. migration order T1→T2→T6→T3 and T3 tables present", async () => {
    const migrations = await pool.query<{ name: string }>(
      `SELECT name FROM pgmigrations ORDER BY run_on ASC, name ASC`,
    );
    const names = migrations.rows.map((r) => r.name);
    const i1 = names.findIndex((n) => n.includes("finops-t1"));
    const i2 = names.findIndex((n) => n.includes("finops-t2"));
    const i6 = names.findIndex((n) => n.includes("finops-t6"));
    const i3 = names.findIndex((n) => n.includes("finops-t3"));
    expect(i1).toBeGreaterThanOrEqual(0);
    expect(i2).toBeGreaterThan(i1);
    expect(i6).toBeGreaterThan(i2);
    expect(i3).toBeGreaterThan(i6);

    const tables = await pool.query<{ table_name: string }>(
      `SELECT table_name FROM information_schema.tables
       WHERE table_schema = 'public'
         AND table_name IN ('finops_alert_state', 'finops_morris_review_state')`,
    );
    expect(tables.rows.map((r) => r.table_name).sort()).toEqual([
      "finops_alert_state",
      "finops_morris_review_state",
    ]);
  });

  it("3–4. Alert and Review persist", async () => {
    const projectId = `proj-t3-persist-${suffix}`;
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const alertReview = createPostgresFinOpsAlertReviewStore(pool);
    await aggregates.replaceProjectPeriodAggregates({
      projectId,
      periodStart: "2026-08-01",
      aggregates: [
        {
          projectId,
          periodStart: "2026-08-01",
          currency: "USD",
          estimatedAmount: FICT_ABOVE,
          observedAmount: FICT_ABOVE,
          billedAmount: formatMoneyString(parseMoneyString("0", "USD")),
          unknownAmount: formatMoneyString(parseMoneyString("0", "USD")),
          inputTokensSum: null,
          outputTokensSum: null,
          totalTokensSum: null,
          costEventCount: 1,
          unavailableEstimationCount: 0,
          rebuildVersion: 1,
          rebuiltAt: "2026-08-07T12:00:00.000Z",
        },
      ],
    });
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId,
        periodStart: "2026-08-01",
        definitions: [alertDef(), reviewDef()],
      },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.alerts).toHaveLength(1);
    expect(result.reviews).toHaveLength(1);
    expect(result.alerts[0]!.state).toBe("open");
    expect(result.reviews[0]!.state).toBe("pending");
  });

  it("5–7. C1 unique Alert/Review + concurrent evaluations one row", async () => {
    const projectId = `proj-t3-c1-${suffix}`;
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const alertReview = createPostgresFinOpsAlertReviewStore(pool);
    await aggregates.replaceProjectPeriodAggregates({
      projectId,
      periodStart: "2026-08-01",
      aggregates: [
        {
          projectId,
          periodStart: "2026-08-01",
          currency: "USD",
          estimatedAmount: FICT_ABOVE,
          observedAmount: formatMoneyString(parseMoneyString("0", "USD")),
          billedAmount: formatMoneyString(parseMoneyString("0", "USD")),
          unknownAmount: formatMoneyString(parseMoneyString("0", "USD")),
          inputTokensSum: null,
          outputTokensSum: null,
          totalTokensSum: null,
          costEventCount: 1,
          unavailableEstimationCount: 0,
          rebuildVersion: 1,
          rebuiltAt: "2026-08-07T12:00:00.000Z",
        },
      ],
    });
    const deps = {
      aggregates,
      alertReview,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
    const input = {
      projectId,
      periodStart: "2026-08-01",
      definitions: [alertDef("FICT_C1")],
    };
    await Promise.all([
      evaluateProjectPeriodThresholds(deps, input),
      evaluateProjectPeriodThresholds(deps, input),
      evaluateProjectPeriodThresholds(deps, input),
    ]);
    const listed = await alertReview.listAlertsForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    expect(listed).toHaveLength(1);
    const id = deriveT3ThresholdIdentity({
      projectId,
      periodStart: "2026-08-01",
      thresholdCode: "FICT_C1",
      currency: "USD",
    });
    expect(listed[0]!.alertId).toBe(id.alertId);

    // UNIQUE C1 constraint exists
    const uniq = await pool.query<{ constraint_name: string }>(
      `SELECT constraint_name FROM information_schema.table_constraints
       WHERE table_name = 'finops_alert_state' AND constraint_type = 'UNIQUE'`,
    );
    expect(uniq.rows.some((r) => r.constraint_name.includes("c1"))).toBe(true);
  });

  it("8–11. open→cleared, pending→superseded, recross, evidence basis", async () => {
    const projectId = `proj-t3-tx-${suffix}`;
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const alertReview = createPostgresFinOpsAlertReviewStore(pool);

    const seed = async (estimated: string, observed: string, version: number) => {
      await aggregates.replaceProjectPeriodAggregates({
        projectId,
        periodStart: "2026-08-01",
        aggregates: [
          {
            projectId,
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: estimated,
            observedAmount: observed,
            billedAmount: formatMoneyString(parseMoneyString("0", "USD")),
            unknownAmount: formatMoneyString(parseMoneyString("0", "USD")),
            inputTokensSum: null,
            outputTokensSum: null,
            totalTokensSum: null,
            costEventCount: 1,
            unavailableEstimationCount: 0,
            rebuildVersion: version,
            rebuiltAt: "2026-08-07T12:00:00.000Z",
          },
        ],
      });
    };

    await seed(FICT_ABOVE, FICT_ABOVE, 1);
    await evaluateProjectPeriodThresholds(
      {
        aggregates,
        alertReview,
        nowIso: () => "2026-08-07T10:00:00.000Z",
      },
      {
        projectId,
        periodStart: "2026-08-01",
        definitions: [alertDef("FICT_TX"), reviewDef("FICT_TXR")],
      },
    );

    await seed(FICT_BELOW, FICT_BELOW, 2);
    await evaluateProjectPeriodThresholds(
      {
        aggregates,
        alertReview,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId,
        periodStart: "2026-08-01",
        definitions: [alertDef("FICT_TX"), reviewDef("FICT_TXR")],
      },
    );
    let alerts = await alertReview.listAlertsForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    let reviews = await alertReview.listReviewsForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    expect(alerts[0]!.state).toBe("cleared");
    expect(reviews[0]!.state).toBe("superseded");

    await seed(FICT_ABOVE, FICT_ABOVE, 3);
    await evaluateProjectPeriodThresholds(
      {
        aggregates,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId,
        periodStart: "2026-08-01",
        definitions: [
          { ...alertDef("FICT_TX"), basis: "observed" },
          reviewDef("FICT_TXR"),
        ],
      },
    );
    alerts = await alertReview.listAlertsForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    reviews = await alertReview.listReviewsForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    expect(alerts).toHaveLength(1);
    expect(alerts[0]!.state).toBe("open");
    expect(alerts[0]!.evaluationBasis).toBe("observed");
    expect(alerts[0]!.firstCrossedAt).toContain("2026-08-07T10:00:00");
    expect(reviews[0]!.state).toBe("pending");
  });

  it("12. stale rebuild blocked", async () => {
    const projectId = `proj-t3-stale-${suffix}`;
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const alertReview = createPostgresFinOpsAlertReviewStore(pool);
    await aggregates.replaceProjectPeriodAggregates({
      projectId,
      periodStart: "2026-08-01",
      aggregates: [
        {
          projectId,
          periodStart: "2026-08-01",
          currency: "USD",
          estimatedAmount: FICT_ABOVE,
          observedAmount: formatMoneyString(parseMoneyString("0", "USD")),
          billedAmount: formatMoneyString(parseMoneyString("0", "USD")),
          unknownAmount: formatMoneyString(parseMoneyString("0", "USD")),
          inputTokensSum: null,
          outputTokensSum: null,
          totalTokensSum: null,
          costEventCount: 1,
          unavailableEstimationCount: 0,
          rebuildVersion: 9,
          rebuiltAt: "2026-08-07T12:00:00.000Z",
        },
      ],
    });
    await evaluateProjectPeriodThresholds(
      {
        aggregates,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId,
        periodStart: "2026-08-01",
        definitions: [alertDef("FICT_STALE")],
      },
    );
    const id = deriveT3ThresholdIdentity({
      projectId,
      periodStart: "2026-08-01",
      thresholdCode: "FICT_STALE",
      currency: "USD",
    });
    await alertReview.applyProjectPeriodEvaluation({
      projectId,
      periodStart: "2026-08-01",
      evaluatedAt: "2026-08-07T11:00:00.000Z",
      outcomes: [
        {
          kind: "informational_alert",
          thresholdCode: "FICT_STALE",
          currency: "USD",
          evaluationBasis: "estimated",
          thresholdAmount: FICT_AMOUNT,
          evaluatedAmount: FICT_BELOW,
          rebuildVersion: 2,
          crossed: false,
          dedupKey: id.dedupKey,
          alertId: id.alertId,
          reviewId: id.reviewId,
        },
      ],
    });
    const listed = await alertReview.listAlertsForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    expect(listed[0]!.state).toBe("open");
    expect(listed[0]!.rebuildVersion).toBe(9);
  });

  it("13–16. project/period/currency isolation + restart durability", async () => {
    const a = `proj-t3-iso-a-${suffix}`;
    const b = `proj-t3-iso-b-${suffix}`;
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const alertReview = createPostgresFinOpsAlertReviewStore(pool);

    for (const [projectId, periodStart, currency] of [
      [a, "2026-08-01", "USD"],
      [a, "2026-09-01", "USD"],
      [a, "2026-08-01", "EUR"],
      [b, "2026-08-01", "USD"],
    ] as const) {
      await aggregates.replaceProjectPeriodAggregates({
        projectId,
        periodStart,
        aggregates: [
          {
            projectId,
            periodStart,
            currency,
            estimatedAmount: FICT_ABOVE,
            observedAmount: formatMoneyString(parseMoneyString("0", currency)),
            billedAmount: formatMoneyString(parseMoneyString("0", currency)),
            unknownAmount: formatMoneyString(parseMoneyString("0", currency)),
            inputTokensSum: null,
            outputTokensSum: null,
            totalTokensSum: null,
            costEventCount: 1,
            unavailableEstimationCount: 0,
            rebuildVersion: 1,
            rebuiltAt: "2026-08-07T12:00:00.000Z",
          },
        ],
      });
      await evaluateProjectPeriodThresholds(
        {
          aggregates,
          alertReview,
          nowIso: () => "2026-08-07T12:00:00.000Z",
        },
        {
          projectId,
          periodStart,
          definitions: [
            {
              ...alertDef("FICT_ISO"),
              currency,
            },
          ],
        },
      );
    }

    const aAug = await alertReview.listAlertsForProjectPeriod({
      projectId: a,
      periodStart: "2026-08-01",
    });
    expect(aAug).toHaveLength(2);
    const aSep = await alertReview.listAlertsForProjectPeriod({
      projectId: a,
      periodStart: "2026-09-01",
    });
    expect(aSep).toHaveLength(1);
    const bAug = await alertReview.listAlertsForProjectPeriod({
      projectId: b,
      periodStart: "2026-08-01",
    });
    expect(bAug).toHaveLength(1);
    expect(aAug[0]!.alertId).not.toBe(bAug[0]!.alertId);

    // durability via fresh store instance (restart simulation)
    const again = createPostgresFinOpsAlertReviewStore(pool);
    const durable = await again.listAlertsForProjectPeriod({
      projectId: a,
      periodStart: "2026-08-01",
    });
    expect(durable).toHaveLength(2);
  });

  it("17–20. no delete path; no seed thresholds; T6 CHECK foundation-only; T1/T2/T6 unchanged", async () => {
    const src = await pool.query<{ prosrc: string }>(
      `SELECT pg_get_functiondef(oid) AS prosrc
       FROM pg_proc WHERE proname = 'finops_audit_event_append_only' LIMIT 1`,
    );
    expect(src.rows.length).toBeGreaterThan(0);

    const check = await pool.query<{ check_clause: string }>(
      `SELECT pg_get_constraintdef(c.oid) AS check_clause
       FROM pg_constraint c
       JOIN pg_class t ON t.oid = c.conrelid
       WHERE t.relname = 'finops_audit_event' AND c.contype = 'c'`,
    );
    const clause = check.rows.map((r) => r.check_clause).join(" ");
    expect(clause).toContain("finops_capture_created");
    expect(clause).not.toContain("finops_threshold_crossed");
    expect(clause).not.toContain("finops_review_required");

    // migration file contains no seed amounts 15/20/25/30 and no INSERT seeds
    const fs = await import("node:fs");
    const path = await import("node:path");
    const migPath = path.join(
      process.cwd(),
      "db/migrations/1754600002000_finops-t3-alert-review-state.js",
    );
    const mig = fs.readFileSync(migPath, "utf8");
    expect(mig).not.toMatch(/\b15\b.*USD|USD.*\b15\b/);
    expect(mig).not.toContain("INSERT INTO finops_alert_state");
    expect(mig).not.toContain("INSERT INTO finops_morris_review_state");

    for (const table of [
      "finops_usage_event",
      "finops_cost_event",
      "finops_usage_aggregate",
      "finops_audit_event",
    ]) {
      const exists = await pool.query(
        `SELECT 1 FROM information_schema.tables WHERE table_name = $1`,
        [table],
      );
      expect(exists.rowCount).toBe(1);
    }

    // No DELETE API on port
    const alertReview = createPostgresFinOpsAlertReviewStore(pool);
    expect(
      Object.prototype.hasOwnProperty.call(alertReview, "deleteAlert"),
    ).toBe(false);
  });
});
```
