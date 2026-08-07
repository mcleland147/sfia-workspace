# 148 — FinOps Technical Lot T4 — S30 Soft Enforcement — Architecture / Implementation Preparation

| Champ | Valeur |
|-------|--------|
| Document | `148-assistant-sfia-native-openai-finops-technical-lot-t4-s30-soft-enforcement-preparation.md` |
| Lot | T4 — S30 Soft Application Cap / Soft Enforcement |
| Cycle | 6 — Architecture technique |
| Profil | **Critical** |
| CKC pilot | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` (candidate guidance only) |
| Status | **T3 CLOSED WITH RESERVES — T4 PREPARATION COMPLETE WITH RESERVES — NO T4 DELIVERY — NO T4 OPTION ADOPTED** |
| Authority | Documentary preparation only — **MORRIS ARBITRATION REQUIRED** for all new T4 options |

---

## A. Statut / anti-claims

**Status (exact):**

> T3 CLOSED WITH RESERVES — T4 ARCHITECTURE / IMPLEMENTATION PREPARATION COMPLETE WITH RESERVES — NO T4 DELIVERY — NO T4 OPTION ADOPTED

**This document IS:**

- Formal record of Morris GO for T3 closure WITH RESERVES.
- Architecture / implementation preparation for future T4 S30 soft enforcement.
- Option matrices (≥2 options) with candidate recommendations only.
- Runtime inventory and gap qualification (blocking-authority, ENF-B insert point).

**This document is NOT:**

- T4 Delivery authorization.
- Selection of any new T4 option (`D-T4-*`).
- Real S30 / E1-ENFORCED activation.
- Historical USD 30 runtime adoption or calibration.
- IAM / privileged Morris mutation implementation.
- T5 override Delivery, T6-ext, or T7 feature-flag Delivery.
- Code, migration, executable tests, project commit/push/PR.

**Anti-claims (mandatory):**

1. Soft-cap S30 **cannot guarantee** that monthly spend never exceeds S30.
2. T3 review state alone is **not** monetary blocking authority.
3. Aggregate `observedAmount` / T3 `basis=observed` do **not** preserve `PROVIDER_OBSERVED` vs `API_USAGE`.
4. No T4 option in this document is SELECTED — only upstream SELECTED decisions are preserved.
5. CKC pilot 03 is candidate experimental guidance — Morris GO prevails.
6. Local T3 delivery branch cleanup SKIPPED (active worktree) is hygiene, **not** a T3-closure blocker.

---

## B. GO Morris exact

```
GO clôture T3 — CLOSED WITH RESERVES, puis préparation T4 S30 soft enforcement.
```

**Gates consumed by this cycle:**

| Gate | Status |
|------|--------|
| T3 formal closure | **REÇU / CONSUMED** |
| T4 architecture preparation | **REÇU / CONSUMED** |
| T4 architecture arbitration | NON REÇU |
| T4 decisions applied | NON REÇU |
| T4 Delivery | NON REÇU |
| T5 / T6-ext / T7 | NON REÇU |
| Calibration réelle / S30 real activation / Product IAM | NON REÇU |
| Project commit / push / PR / merge | NON REÇU |

---

## C. Horodatage CEST + UTC

| Clock | Value |
|-------|--------|
| Work CEST | 2026-08-07 21:28:47 CEST (+0200) |
| Work UTC | 2026-08-07 19:28:47 UTC |
| Document intent | Cycle 6 Architecture Critical — T3 closure + T4 prep (mono-cycle) |

---

## D. Git Truth

| Anchor | Value |
|--------|--------|
| Repo | `mcleland147/sfia-workspace` |
| `origin/main` | `ff3d0c097b02cc7819cbc282fc0eb1a36ed1b515` |
| T4 worktree | `.tmp-sfia-review/worktrees/finops-t4-preparation` |
| T4 branch | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t4-s30-soft-enforcement` |
| T4 HEAD | `ff3d0c097b02cc7819cbc282fc0eb1a36ed1b515` (= origin/main) |
| Tracked | clean at branch create; after doc = **only 148 untracked** |
| Staged | empty |
| MAIN WT (discovered) | `.tmp-sfia-review/worktrees/finops-t2-main` @ ff3d0c0 on `main` — used as clean base discovery; **not modified** |
| T3 WT | `.tmp-sfia-review/worktrees/finops-t3-preparation` — **NOT reused / NOT deleted / NOT detached** |
| Handoff tip (pre-publish expected) | `616424dcde4bff8ae46261989d0b47fe4f392711` |
| Handoff blob (pre-publish expected) | `6219ae0bc01c23976f29b90a69cbc97c798f3b86` |
| Document 148 prior existence | **ABSENT** on origin/main and at WT create — CREATE only |

---

## E. Sources consultées

### Méthode

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md`
- `scripts/sfia/publish-review-handoff.sh`

### Projet / trajectoire (discovered)

- `projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md`
- `projects/sfia-studio/123-assistant-sfia-native-openai-implementation-preparation-lot-ip-0c-finops-enforcement-decisions-applied.md` (**discovered exact filename**)
- `projects/sfia-studio/125-assistant-sfia-native-openai-implementation-preparation-lot-ip-0c-finops-technical-implementation-decisions-applied.md`
- `projects/sfia-studio/138-assistant-sfia-native-openai-finops-technical-lots-t2-t5-t6-grouped-preparation.md`
- `projects/sfia-studio/145-assistant-sfia-native-openai-finops-technical-lot-t3-alert-morris-review-preparation.md`
- `projects/sfia-studio/146-assistant-sfia-native-openai-finops-technical-lot-t3-decisions-applied.md`
- `projects/sfia-studio/147-assistant-sfia-native-openai-finops-technical-lot-t3-execution.md`
- T3 merge evidence under `.tmp-sfia-review/t3-post-merge/` (PR #316, CI, cleanup matrix)

### Runtime (read-only)

- `app/lib/oa/execution-run/application/coordinateExecutionRun.ts`
- `app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts`
- `app/lib/oa/finops/domain/blockingEligibility.ts`
- `app/lib/oa/finops/domain/costEvidence.ts`
- `app/lib/oa/finops/application/recomputeAggregates.ts`
- `app/lib/oa/finops/application/evaluateProjectPeriodThresholds.ts`
- `app/lib/oa/finops/application/buildUsageEvent.ts`
- T0–T3 / T6 ports, stores, migrations (inventory §H)
- `app/lib/oa/decision/ports/authorityResolver.ts` (existence ≠ product Morris session)

---

## F. T3 Formal Closure — Morris Decision

### GO exact

```
GO clôture T3 — CLOSED WITH RESERVES, puis préparation T4 S30 soft enforcement.
```

### Décision

**T3 CLOSED WITH RESERVES**

### Preuves

| Proof | Value |
|-------|--------|
| PR | **#316** MERGED — `feat(sfia-studio): implement FinOps T3 alert and review state` |
| mergeCommit | `ff3d0c097b02cc7819cbc282fc0eb1a36ed1b515` |
| T3 head integrated | `2641263b9e9ef7336a4a2ac7824c13bb928f5199` |
| merge parents | `b8259859983577c31965aa877c956e7a25dd1c4d` + `2641263b9e9ef7336a4a2ac7824c13bb928f5199` |
| Manifest | **exact 13 paths** (145, 146, 147, migration, evaluate*, t3Identity, types.alertReview, alertReview port/memory/postgres, 2 tests) |
| Pre-merge CI | run `31205544659` success on head `2641263b…` |
| Post-merge CI | run **`31206479016`** completed/success on `ff3d0c0…` (Detect / Build / Required Gate success) |
| QA-G4 | **PASS WITH RESERVES** |
| Remote branch cleanup | **DONE** (`git push origin --delete` delivery branch; fetch --prune; remote gone) |
| Local branch cleanup | **SKIPPED — ACTIVE WORKTREE** (`…/finops-t3-preparation`) |

**Clarification:** local cleanup skipped because the delivery worktree remains active = **technical local hygiene**, **not a blocker** to T3 formal closure.

### Réserves OPEN (carried into T4 prep; not cleared)

| Reserve | Status |
|---------|--------|
| `R-T6-RUNTIME-COMPOSITION-01` | **OPEN** |
| `R-PR-T2-API-01` | **OPEN MINOR** |
| T6-ext-T2 | **EXCLUDED** |
| T6-ext-T3T4 | **NOT AUTHORIZED** |
| Calibration | **REQUIRED** |
| Product IAM | **NOT_SELECTED** |
| Privileged Morris mutations | **DEFERRED** |

### What T3 closure does **not** authorize

- T4 Delivery / option selection
- Real thresholds 15/20/25/30 activation
- S30 soft enforcement runtime
- IAM / resume APIs / T5 / T6-ext / T7

---

## G. Upstream validated decisions (SELECTED — preserved; NOT re-opened)

### From document 123 (enforcement policy)

| ID / code | SELECTED value | Implementation |
|-----------|----------------|----------------|
| `D-ASST-IP0C-ENFORCEMENT-01` | **E1 — SOFT CONTROL WITH HUMAN GATE** | NOT IMPLEMENTED |
| A15-CAL | Calendar month **UTC** | Documentary |
| A15-PROJ | **Project-level** scope | Documentary |
| A15-ONCE | One notification per threshold crossing and period | Documentary |
| USD 15 | Informational alert — no restriction | NOT ACTIVATED |
| USD 20 / C20-WARN | Critical Morris review — no automatic block | NOT ACTIVATED |
| USD 25 | Monthly planning target — provisional — non-contractual | NOT CONFIGURED |
| **S30-SOFT** | Soft application cap — suspend **new** runs; engaged runs may finish | **NOT IMPLEMENTED** |
| Resume | **Morris-only** resume | NOT IMPLEMENTED |
| `D-ASST-IP0C-DEGRADATION-01` / DG-NEW | Suspend new runs only at USD 30 | NOT IMPLEMENTED |
| `D-ASST-IP0C-OVERRIDE-01` | Morris only — case-by-case — time-bounded — audited | NOT IMPLEMENTED (T5) |
| Fail-closed / hard stop of active runs / provider hard limit | **NOT SELECTED** | — |

### From document 125 (technical implementation)

| ID | SELECTED value | Lot owner |
|----|----------------|-----------|
| `D-ASST-IP0C-TECH-ENFORCE-BOUND-01` | **ENF-B** — server-side check after run request acceptance — **before provider invocation** | **T4** |
| `D-ASST-IP0C-TECH-CONF-01` | **Billed or official PROVIDER_OBSERVED may block — ESTIMATED never blocks**; API_USAGE alone must not block | **T4** |
| `D-ASST-IP0C-TECH-CONC-01` | Postgres transaction — project/period row lock — atomic run authorization | **T4** |
| `D-ASST-IP0C-TECH-FLAG-01` | Server-side — project-scoped — **default-OFF**; rollout OFF→SHADOW→MONITOR→E1-ENFORCED | **T7** |
| `D-ASST-IP0C-TECH-OVR-IMPL-01` | Durable project-scoped Morris-only override | **T5** |
| `D-ASST-IP0C-TECH-ALERT-01` | Durable in-app + structured audit | **T3** (delivered foundation) |

**Blocking eligibility table (125 — preserved):**

| Source of Truth | May suspend new runs (S30) |
|-----------------|----------------------------|
| 1 Billed / official export | **yes** |
| 2 Official provider-observed | **yes** |
| 3 API usage + local tariff alone | **no** |
| 4 Local count | **no** |
| 5 Parametric estimate | **no** |
| 6 Unknown | **no** (≠ silent zero) |

### From documents 145–147 (T3)

| ID | SELECTED | Note for T4 |
|----|----------|-------------|
| `D-T3-STATE-01` A1 | Materialized durable state + separate audit | Human-review store |
| `D-T3-TRIGGER-01` B3 | Hybrid post-rebuild + explicit evaluate | Not monetary gate |
| `D-T3-DEDUPE-01` C1 | Core once-key without basis/SoT in identity | Review ≠ SoT authority |
| `D-T3-LIFECYCLE-01` D2 | Split informational alert vs Morris review | USD 20 path |
| `D-T3-AUTHORITY-01` E1 | System creation now / privileged mutations deferred | IAM NOT_SELECTED |
| `D-T3-CALIBRATION-01` F3 | Engine/config without real active amounts | USD 30 = **T4** soft cap, not T3 |

---

## H. Current runtime inventory

| Surface | Lot | On HEAD `ff3d0c0…` | T4 note |
|---------|-----|--------------------|---------|
| Domain SoT + `blockingEligibility` + `ESTIMATION_NEVER_BLOCKS` | T0 | **EXISTS** | Policy primitives ready |
| Usage ledger / `captureFinOpsUsage` / `buildUsageEvent` | T1 | **EXISTS**; live capture SoT = **`API_USAGE`** | Never blocks per CONF-01 |
| Aggregates `observedAmount` / `estimatedAmount` / `billedAmount` | T2 | **EXISTS** | `observed` bucket conflates SoTs (§J) |
| Reconciliation (`PROVIDER_OBSERVED` \| `BILLED` facts) | T2 | **EXISTS** | Eligible sources exist at fact layer |
| Money `numeric(20,8)`, currency string, **no FX** | T2 | **EXISTS** | Preserve currency isolation |
| Alert/review evaluate + durable store | T3 | **EXISTS** (F3: no live 15/20/30) | Human review only |
| Audit journal T6-foundation | T6 | **EXISTS**; T3/T4 event types **ABSENT** | T6-ext NOT AUTHORIZED |
| ENF-B / S30 suspend / resume / override / TECH-FLAG | T4/T5/T7 | **ABSENT** | This prep only |

**Execution-run FinOps today:** optional `deps.finops` capture port only (fail-open post-provider). **No enforcement port.**

---

## I. T4 objective and boundaries

### Objective (architecture prep)

Prepare a coherent soft-enforcement design for **S30-SOFT / E1 / ENF-B / TECH-CONF-01** such that a future Delivery can suspend **new** runs after authoritative crossing — without claiming a hard budget ceiling.

### T4 MUST (candidate future Delivery scope — NOT authorized now)

- Obtain a **blocking-eligible** monetary view preserving SoT distinction.
- Evaluate S30 soft decision at **ENF-B** (after create success, before provider).
- Fail-open on FinOps technical failure (do not invent fail-closed).
- Keep estimate / API_USAGE non-blocking.
- Remain inactive without calibration + T7 activation.

### T4 MUST NOT (this cycle and as doctrine for prep)

- Deliver code/migrations/tests now.
- Activate real USD 30.
- Absorb T5 override, T6-ext audit naming, or T7 rollout.
- Hold DB locks across provider invocation.
- Use T3 review alone as monetary block authority.
- Guarantee spend ≤ S30.

---

## J. Blocking-authority gap

### Proof — evidenceClass conflation

`costEvidence.ts` maps both `PROVIDER_OBSERVED` and `API_USAGE` → evidenceClass `"observed"`.

`recomputeAggregates.ts` sums by **evidenceClass**, producing a single `observedAmount`.

T3 `evaluateProjectPeriodThresholds.ts` with `basis: "observed"` reads **`agg.observedAmount` only**.

### Proof — eligibility exists but is not what T3/T2 expose for thresholds

`blockingEligibility.ts`:

- `PROVIDER_OBSERVED` → eligible
- `API_USAGE` → `eligible: false` / `API_USAGE_NEVER_BLOCKS`
- `ESTIMATION_NEVER_BLOCKS = true`

T1 live capture writes **`API_USAGE`** (`buildUsageEvent.ts`).

### Gap statement (qualified)

| Layer | PROVIDER_OBSERVED vs API_USAGE preserved? |
|-------|---------------------------------------------|
| Event `sourceOfTruth` column / domain enum | **YES** |
| `evaluateBlockingEligibility` | **YES** |
| ReconcileFact typing | **YES** (PROVIDER_OBSERVED \| BILLED) |
| Aggregate `observedAmount` | **NO** |
| T3 `basis=observed` review trigger | **NO** (uses conflated amount) |

**Therefore:** T2 `observedAmount` and T3 review-on-observed **must not** be treated as S30 monetary blocking authority. T4 needs an explicit SoT-safe view (see `D-T4-EVIDENCE-01`).

---

## K. ENF-B execution-run insertion point

**SELECTED upstream:** `D-ASST-IP0C-TECH-ENFORCE-BOUND-01` = ENF-B.

**Observed flow in `coordinateExecutionRun.ts`:**

1. Preflight / capability
2. `createExecutionRun` success (~L970–1001)
3. Validation emit
4. Pre-engagement checks (~L1009–1044)
5. `transitionExecutionRun({ reason: "intent_valid" })` (~L1046–1064)
6. Provider invocation (~L1072+)
7. Fail-open capture after AI success (~L1129+)

**Qualified insertion point (documentary):**

> After `createExecutionRun` success and after current pre-engagement checks succeed (**after ~L1044**), **before** `intent_valid` transition (**before ~L1046**) / before provider invocation.

Compose today (`composeExecutionRunD2D3.ts`) injects optional **capture** only — no enforcement dependency.

**Constraint:** any future lock for TECH-CONC-01 must be **short, transaction-scoped, released before provider** — never held across provider I/O.

---

## L. T3/T4 responsibility boundary

| Concern | T3 | T4 |
|---------|----|----|
| Durable alert / Morris review state | **Owner** | May synchronize; must not own alone |
| Monetary blocking-eligible amount | Not authority | **Owner (future)** |
| Suspend new runs at S30 | Never | **Owner (future, soft)** |
| Resume / override | Deferred (IAM) | Resume policy from 123; override = **T5** |
| Threshold informational 15 / review 20 | Prepare/evaluate (inactive) | Does not replace |
| Soft-cap 30 | Explicitly out of T3 | **Owner** |

**Rule:** synchronization may be explicit; **T3 review alone never blocks**.

---

## M. T5 / T6 / T7 dependencies

| Lot | Current state | Relation to T4 |
|-----|---------------|----------------|
| **T5** | Override SELECTED in 123/125; **Product IAM NOT_SELECTED**; AuthorityResolver ≠ session Morris | Required for audited override before safe E1-ENFORCED ops; **not** in T4 foundation scope |
| **T6-foundation** | CLOSED WITH RESERVES | Capture/audit fail-open exists |
| **T6-ext-T3T4** | **NOT AUTHORIZED**; exact event names DEFERRED | Prep may list conceptual audit needs only — no names adopted |
| **T7** | TECH-FLAG-01 + rollout SELECTED documentary | **Activation/rollout owner**; T4 = mechanism only |

**Boundary:** T4 = decision capability / mechanism. T7 = activation / pilot evidence. T5 = override. T6-ext = separate gate.

---

## N. Currency / Money / concurrency / performance

### Currency / FX

- **No FX.**
- Enforcement policy key: `projectId + period + currency`.
- Never sum across currencies.
- Historical “30 USD” does **not** authorize cross-currency universal cap.
- Policy absent for currency → **no enforcement / explicit not configured** (candidate behavior).

### Money

- Reuse T2 Money / `numeric(20,8)` exact arithmetic — no float.
- Blocking sum = eligible SoTs only (BILLED + PROVIDER_OBSERVED).

### Concurrency / performance

- Concurrent new-run requests + async reconciliation/rebuild must be considered.
- TECH-CONC-01 SELECTED: project/period transactional authorization.
- **Never** hold PostgreSQL lock across provider invocation.
- If lock recommended: short; decision/persist only; release before provider.
- Do **not** invent hard cost reservation based on estimates.

### Soft-cap semantics (anti-claim)

S30 is **not** a hard budget ceiling because:

- billed/provider-observed measurement is asynchronous;
- new facts may arrive after an invocation;
- already-engaged runs may finish;
- no reliable future-cost reservation;
- estimation must not block;
- no FX; no provider hard limit SELECTED.

T4 **may** suspend new runs after authoritative crossing. T4 **cannot guarantee** “monthly spend can never exceed S30”.

### Failure posture (already constrained)

Upstream SELECTED: no hard-stop fail-closed for FinOps technical failure.

Expected contract (candidate packaging, aligned with SELECTED):

`T4 technical evaluation failure → sanitized diagnostic → allow / degraded / enforcement unavailable` — **never block solely because FinOps is unavailable**.

`D-T4-FAILURE-POSTURE-01`: Option A FAIL-OPEN+DIAGNOSTIC is the only posture compatible with upstream SELECTED; Option B FAIL-CLOSED is **incompatible** (not an open choice to re-select).

---

## O. Candidate decision matrix

All rows below: **NOT DECIDED — MORRIS ARBITRATION REQUIRED**

(Do not treat recommendations as SELECTED.)

### O.1 `D-T4-EVIDENCE-01` — Blocking-authoritative monetary view

| Field | Content |
|-------|---------|
| Question | How does T4 obtain an amount that preserves SoT distinction required for blocking? |
| Option A | **DIRECT AUTHORITATIVE COST-EVENT READ** — at gate, sum only BILLED+PROVIDER_OBSERVED from ledger events for project/period/currency |
| Option B | **T4 DEDICATED ENFORCEMENT PROJECTION** — derived rebuildable projection with `blockingEligibleAmount` + provenance |
| Option C | **EXTEND T2 AGGREGATE CONTRACT** — split `providerObservedAmount` / `apiUsageAmount` (reopens T2) |
| Upstream compatibility | All can honor TECH-CONF-01 if implemented correctly; C pressures CLOSED-WITH-RESERVES T2 |
| Impacts | A: latency/coupling; B: new table/port; C: T2 migration/regression |
| Debt | A perf; B derived duplication; C inter-lot coupling |
| Réversibilité | A high; B good if non-authoritative rebuildable; C medium |
| Sécurité | Avoid using conflated observed; redact diagnostics |
| Performance | A scan per run; B O(1) read; C O(1) but T2 cost |
| Observabilité | Need provenance of blocking amount |
| Candidate recommendation | **Option B** |
| Status | **NOT DECIDED — MORRIS ARBITRATION REQUIRED** |

### O.2 `D-T4-BOUNDARY-01` — Integration in execution-run

| Field | Content |
|-------|---------|
| Question | Technical shape of SELECTED ENF-B inside coordinator? |
| Option A | **OPTIONAL FINOPS ENFORCEMENT DEPENDENCY IN COORDINATOR** after create success / before `intent_valid` |
| Option B | **NEW OUTER ORCHESTRATOR / SPLIT COORDINATION** |
| Upstream compatibility | Both can place ENF-B; A minimizes surface |
| Impacts | A small ray; B invasive refactor of execution-run semantics |
| Debt | A bounded transverse responsibility; B high regression surface |
| Réversibilité | A higher |
| Sécurité | Server-side only; never trust client |
| Performance | Gate before provider avoids wasted spend |
| Observabilité | Decision diagnostic on run path |
| Candidate recommendation | **Option A** (minimal port) |
| Status | **NOT DECIDED — MORRIS ARBITRATION REQUIRED** |

### O.3 `D-T4-DECISION-CONTRACT-01` — Enforcement decision contract

| Field | Content |
|-------|---------|
| Question | What decision states does soft control need? |
| Option A | Binary **ALLOW / BLOCK** |
| Option B | Explicit soft states **ALLOW / REVIEW_REQUIRED\|WOULD_BLOCK / BLOCK / FAILED** + diagnostics/provenance |
| Upstream compatibility | B maps better to SHADOW/MONITOR/E1-ENFORCED (T7) without silent activation |
| Impacts | A simpler tests; B richer observability / rollout |
| Debt | B more states to maintain |
| Réversibilité | Both high if documentary defaults remain OFF |
| Sécurité | FAILED must not become silent BLOCK |
| Performance | Negligible |
| Observabilité | B superior for pilot evidence |
| Candidate recommendation | **Option B** |
| Status | **NOT DECIDED — MORRIS ARBITRATION REQUIRED** |

### O.4 `D-T4-T3-COUPLING-01` — T4 ↔ T3 Morris review

| Field | Content |
|-------|---------|
| Question | How do T4 monetary gate and T3 human review relate? |
| Option A | **T3 REVIEW AS BLOCKING AUTHORITY** — block solely on pending T3 review |
| Option B | **T4 EVIDENCE AUTHORITY + T3 HUMAN-REVIEW SYNCHRONIZATION** |
| Upstream compatibility | A **conflicts** with TECH-CONF-01 when review is based on conflated `observed`; B preserves SoT |
| Impacts | A dangerous false blocks / false allows; B needs sync use-case |
| Debt | A conceptual debt high; B sync debt manageable |
| Réversibilité | B better |
| Sécurité | A invalid if review from non-qualified basis |
| Performance | B depends on evidence view |
| Observabilité | Keep review and monetary decision distinct in audit (future T6-ext) |
| Candidate recommendation | **Option B** |
| Status | **NOT DECIDED — MORRIS ARBITRATION REQUIRED** |

**Why A is dangerous:** T3 review may be raised from `basis=observed` which includes API_USAGE-derived amounts. Using that review as the sole block signal would either over-block (non-eligible money) or under-specify provenance — violating TECH-CONF-01.

### O.5 `D-T4-FOUNDATION-01` — Delivery mécanique vs activation

| Field | Content |
|-------|---------|
| Question | May a future mechanical T4 Delivery land before all activation deps? |
| Option A | **FOUNDATION FIRST** — contracts/eval/view/boundary/tests; no real calibration; no E1; no T5/IAM/T6-ext/T7 active |
| Option B | **WAIT FOR ALL ACTIVATION DEPENDENCIES** |
| Upstream compatibility | A aligns with critical path T0→…→T4→T7 if guarded default-OFF |
| Impacts | A dormant capability; B stalls mechanism learning |
| Debt | A needs strict activation guards; B schedule debt |
| Réversibilité | A high if default inert |
| Sécurité | Must not silently enforce |
| Performance | N/A at prep |
| Observabilité | Shadow-ready contract helps T7 later |
| Candidate recommendation | **Option A** under strict guards |
| Status | **NOT DECIDED — MORRIS ARBITRATION REQUIRED** |

### O.6 `D-T4-CALIBRATION-01` — Real amount activation

| Field | Content |
|-------|---------|
| Question | How does T4 treat the historical USD 30 figure? |
| Option A | Engine/config contract **without** real active amount; fixtures only |
| Option B | Wait for calibration before any T4 Delivery |
| Upstream compatibility | Matches T3 F3 posture; 123 marks 30 provisional |
| Impacts | A enables foundation tests; B blocks foundation |
| Debt | A must prevent silent adoption of 30 |
| Réversibilité | High |
| Sécurité | Real E1 activation **BLOCKED** until Morris calibration |
| Performance | N/A |
| Observabilité | Config provenance required |
| Candidate recommendation | **Option A for foundation**; real E1 blocked until calibration |
| Status | **NOT DECIDED — MORRIS ARBITRATION REQUIRED** |

### O.7 `D-T4-FAILURE-POSTURE-01` — (qualification; not re-opened)

| Field | Content |
|-------|---------|
| Option A | **FAIL OPEN + DIAGNOSTIC** |
| Option B | **FAIL CLOSED** |
| Qualification | B is **incompatible** with upstream SELECTED soft/fail-open FinOps posture |
| Candidate packaging | Treat A as the only compatible posture |
| Status | **NOT REOPENED — UPSTREAM SELECTED CONSTRAINT** (do not re-arbitrate as if open) |

---

## P. Detailed option analysis

### P.1 Evidence view trade-off (EVIDENCE-01)

- **A** preserves SoT without new storage but taxes every new-run path with ledger scan — poor fit for repeated pre-provider gate.
- **B** isolates enforcement from T2’s product aggregate semantics; rebuildable derived data; accepts a T4 migration in a future Delivery.
- **C** “fixes” the conflation at T2 but reopens a lot already CLOSED WITH RESERVES and mixes enforcement needs into a general aggregate — avoid unless B proven incoherent.

### P.2 Boundary trade-off (BOUNDARY-01)

ENF-B is already SELECTED; the open question is **shape**. Optional enforcement port at the qualified insert point reuses `create`→`intent_valid` semantics and keeps provider never invoked on BLOCK. Outer orchestrator only if coupling evidence forces it (not observed as necessary today).

### P.3 Decision contract (DECISION-CONTRACT-01)

Binary ALLOW/BLOCK collapses SHADOW/MONITOR into silent no-ops or false blocks. Explicit soft states let T7 flip interpretation without changing calculation.

### P.4 Coupling (T3-COUPLING-01)

T3 store identity (C1) intentionally omits basis/SoT. Therefore it cannot be the sole monetary authority. Bridge/sync must be one-way or explicit dual-write with T4 evidence remaining authoritative for BLOCK.

### P.5 Foundation vs wait (FOUNDATION-01)

Critical path needs a testable mechanism before IAM/calibration/T7. Dormant foundation is acceptable if default-OFF and no historical amount wired.

### P.6 Calibration (CALIBRATION-01)

Documentary 30 USD remains provisional. Foundation may accept injected policy in tests; production E1-ENFORCED requires separate Morris calibration GO.

---

## Q. Recommended candidate package — NOT SELECTED

**CANDIDATE / NOT SELECTED — MORRIS ARBITRATION REQUIRED**

| Theme | Candidate package element |
|-------|---------------------------|
| Blocking-authoritative view | T4 dedicated derived projection preserving eligible SoT (**EVIDENCE-01 B**) |
| Boundary | Minimal optional enforcement port in `coordinateExecutionRun` at ENF-B (**BOUNDARY-01 A**) |
| T3 coupling | T4 = monetary enforcement authority; T3 = durable human-review; sync explicit; T3 alone never blocks (**T3-COUPLING-01 B**) |
| Contract | Explicit soft decision state, not binary-only (**DECISION-CONTRACT-01 B**) |
| Failure | Fail-open FinOps technical failure (**FAILURE-POSTURE A** — upstream-compatible) |
| Calibration | Injected config / no active historical amount (**CALIBRATION-01 A** for foundation) |
| Delivery strategy | T4 foundation before activation prerequisites (**FOUNDATION-01 A**) |
| Rollout | Remains **T7** |
| Override | Remains **T5** |
| Audit extension | Separate **T6-ext** gate (NOT AUTHORIZED now) |

---

## R. Activation prerequisite matrix

| Prerequisite | Needed for | Status now | Authorized this cycle? |
|--------------|------------|------------|------------------------|
| Morris architecture arbitration of `D-T4-*` | Any SELECTED T4 design | **PENDING** | Prep only |
| Future T4 foundation Delivery (if FOUNDATION-01 A) | Mechanism on branch/main | NOT AUTHORIZED | **NO** |
| Real calibration of S30 amount | E1-ENFORCED | **REQUIRED / not done** | **NO** |
| Product / Morris identity binding (IAM) | Resume / privileged mutations / T5 binding | **NOT_SELECTED** | **NO** |
| T5 override capability compatible with identity | Safe override under E1 | NOT delivered | **NO** |
| T7 feature flag + rollout evidence | Controlled activation | Documentary SELECTED only | **NO** |
| T6-ext if required by trajectory before rollout | Audit completeness | **NOT AUTHORIZED** | **NO** |
| Dedicated QA for enforcement | Activation confidence | NOT run | **NO** |

**Real E1 activation = BLOCKED** until calibration + arbitration + activation deps Morris-approved.

---

## S. Future Delivery candidate manifest / impacted areas

**CANDIDATE ONLY — NOT AUTHORIZED — filenames not frozen**

### Likely CREATE areas (illustrative)

- FinOps enforcement port + application evaluate/authorize use-case
- Optional SoT-safe projection store/migration (if EVIDENCE-01 B)
- Memory + postgres adapters
- Unit/integration tests for eligibility filtering and gate placement
- Documentary execution/decisions-applied follow-ons (future numbers)

### Likely MODIFY areas (minimize)

- `coordinateExecutionRun.ts` / compose injection — **optional** enforcement dep at ENF-B only
- Possibly types exports / finops index barrel

### PROTECTED / DO NOT TOUCH (without explicit future GO)

- T2 aggregate semantics (unless EVIDENCE-01 C explicitly selected later)
- T3 alert-review store as monetary authority
- T6 audit type renames without T6-ext authorization
- IAM / AuthorityResolver product binding
- Provider hard limits / FX converters

---

## T. Test strategy candidate

**NOT IMPLEMENTED in this cycle.**

| Layer | Candidate focus |
|-------|-----------------|
| Unit | Eligibility filter excludes API_USAGE/ESTIMATED; Money exact; decision contract states; fail-open on store error |
| Integration (Postgres) | Project/period txn; short lock released before simulated provider; rebuild projection idempotence |
| Coordinator | ENF-B ordering: create ok → gate BLOCK → no provider call; ALLOW → intent_valid proceeds |
| Negative | Conflated `observedAmount` must not be sole block input; missing currency policy → not configured |
| Regression | T1 capture fail-open unchanged; T2/T3 behavior unchanged when enforcement dep absent |
| Rollout (T7 later) | SHADOW emits WOULD_BLOCK without BLOCK; MONITOR metrics; E1-ENFORCED applies BLOCK |

---

## U. Reserves

| ID / topic | Status | Note |
|------------|--------|------|
| `R-T6-RUNTIME-COMPOSITION-01` | **OPEN** | Carried from T3 |
| `R-PR-T2-API-01` | **OPEN MINOR** | Carried from T3 |
| T6-ext-T3T4 | **NOT AUTHORIZED** | |
| Calibration | **REQUIRED** | Blocks real E1 |
| Product IAM | **NOT_SELECTED** | Blocks privileged resume/override binding |
| Privileged Morris mutations | **DEFERRED** | |
| `D-T4-*` options | **NOT DECIDED** | Arbitration required |
| Soft-cap hard-guarantee | **ANTI-CLAIM** | Cannot promise spend ≤ S30 |

---

## V. Non-decisions / deferred items

- Exact T6-ext event names
- Product IAM design
- Numeric TTL (`R-TECH-TTL-01` KEEP-OPEN)
- Hard FinOps modes (`R-TECH-FINOPS-HARD-01` KEEP-OPEN)
- Whether T6-ext is mandatory before first E1-ENFORCED pilot
- Concrete SQL for projection (if B selected later)
- UI surfaces for suspension/resume
- Multi-currency policy beyond “no FX / no cross-sum”
- Any SELECTED choice among `D-T4-EVIDENCE-01` … `D-T4-CALIBRATION-01`

---

## W. Morris arbitration required

Morris must arbitrate at least:

1. `D-T4-EVIDENCE-01` (A/B/C)
2. `D-T4-BOUNDARY-01` (A/B)
3. `D-T4-DECISION-CONTRACT-01` (A/B)
4. `D-T4-T3-COUPLING-01` (A/B)
5. `D-T4-FOUNDATION-01` (A/B)
6. `D-T4-CALIBRATION-01` (A/B)
7. Acceptance of candidate package vs alternatives
8. Whether to open a later T4 Delivery GO (foundation) separate from activation GO

Until then: **NO T4 OPTION SELECTED — NO T4 DELIVERY**.

---

## X. Verdict

```
FINOPS TECHNICAL LOT T3 —
CLOSED WITH RESERVES BY MORRIS —

FINOPS TECHNICAL LOT T4 —
S30 SOFT ENFORCEMENT ARCHITECTURE / IMPLEMENTATION PREPARATION COMPLETE WITH RESERVES —

BLOCKING-AUTHORITY GAP QUALIFIED —
ENF-B RUNTIME INSERTION POINT QUALIFIED —
T2 / T3 / T4 RESPONSIBILITIES QUALIFIED —
T5 / T6 / T7 ACTIVATION DEPENDENCIES QUALIFIED —

T4 STRUCTURING OPTIONS PREPARED —
CANDIDATE RECOMMENDATIONS PREPARED —
NO T4 OPTION SELECTED —
MORRIS ARBITRATION REQUIRED —

NO REAL S30 ACTIVATION —
NO HISTORICAL 30 USD RUNTIME ADOPTION —
NO IAM —
NO T5 / T6-EXT / T7 DELIVERY —
NO CODE / MIGRATION / TESTS —
NO PROJECT COMMIT / PUSH / PR —

SOFT-CAP ANTI-CLAIM AFFIRMED —
T3 REVIEW IS NOT MONETARY BLOCKING AUTHORITY —

READY FOR CHATGPT T4 PREPARATION VALIDATION /
READY FOR MORRIS T4 ARCHITECTURE ARBITRATION
```
