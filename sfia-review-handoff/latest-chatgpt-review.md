# Cycle 6 Standard — FinOps T7 — BILLED Period Identity Contract Design — Review Pack

**Level:** FULL
**Date/heure:** 2026-08-09 22:52:26 CEST / 2026-08-09 20:52:26 UTC
**Repo:** mcleland147/sfia-workspace
**Cycle:** 6 — Architecture technique
**Profil:** Standard
**Typologie:** EVOL / ARCHITECTURE CONTRACT DESIGN / READ-ONLY
**projectId context:** sfia-studio-ops1 (design only)

---

## Morris GO (exact)

GO T7 BILLED PERIOD IDENTITY CONTRACT DESIGN

Autorise: lecture Git · analyse T2/T4 · handoff précédent · options · contrat candidat · analyse migration/tests futurs · recommandation non décisionnelle · review pack · handoff L3.

N’autorise PAS: adoption · bump FINOPS_T2_IDENTITY_CONTRACT_VERSION · modif ReconcileFact/FinOpsCostEvent · migration · ledger · Costs adapter · Admin key · OpenAI/provider calls · DB write · reconcile/rebuild · policy · rollout · MONITOR · E1 · commit/PR/merge projet.

Morris décide.

---

## Qualification

| Field | Value |
|---|---|
| Baseline | SFIA v2.6 |
| CKC | `pilots/03-architecture-technique.md` candidate · no execution authority |
| Blocs ON | FinOps · Sécurité · Observabilité / RUN readiness |
| Anti-claim | CANDIDATE_ONLY ≠ adopted ≠ ADR validated ≠ implementation authorized |
| Future Critical | if Morris later authorizes T2 identity/types/schema/Costs adapter/admin credential/ingestion |

---

## Local Git Truth

| Field | Value |
|---|---|
| branch | `main` |
| HEAD / origin/main | `96a8a14bc894b520043b3a8f758b1fb14a72a5e4` |
| tracked | CLEAN |
| staged | NONE |
| untracked | `?? .tmp-sfia-review/` only |

---

## Sources

Method/CKC as listed in GO. FinOps: `types.aggregate.ts` · `t2Identity.ts` · `reconcileProjectPeriod.ts` · `postgresFinOpsReconciliation.ts` · `finopsReconciliationPort.ts` · `recomputeAggregates.ts` · `refreshEnforcementAfterT2.ts` · `rebuildEnforcementProjection.ts` · `blockingEligibility.ts` · `costEvidence.ts` · migration `1754600000000_finops-t2-aggregation-reconciliation.js` · tests T2/T4 listed in consumer map.

---

## Incoming handoff

| Field | Expected | Observed |
|---|---|---|
| tip | `bc4814d2305e326ee0a0ed42fd419966bf59a6a8` | MATCH |
| blob | `874f9bd7e7ca19ecfbcba874ce1ad48d230dea04` | MATCH |

Confirms: PREFERRED PATH CANDIDATE A1 · CANDIDATE_ONLY · FEASIBLE_WITH_BOUNDED_CONTRACT_INCREMENT · granularity PARTIAL · executionRunId required · usageEventId/model nullable · A2 SOURCE ABSENT · B NOT T4 ELIGIBLE ALONE · C OPTIONAL · SHADOW rev1 · policy EMPTY · runtime mutations ZERO · R-T4-T3 OPEN BEFORE MONITOR.

---

## EXTERNAL provider input (from incoming handoff only)

Classifier remains **EXTERNAL_CURRENT_PROVIDER_EVIDENCE** (not Git SoT).
No Internet/OpenAI calls this cycle.
Not assumed: run-level cost · correlationId · model attribution · usageEventId · provider-issued cost result id · invoice id · undocumented granularity.
If candidate needs more provider fields: **EXTERNAL_EVIDENCE_REQUIRED** (noted for line_item / external project mapping details beyond handoff).

---

## Current contract — t2-v1 baseline (Git verified)

`FINOPS_T2_IDENTITY_CONTRACT_VERSION = "t2-v1"`

### ReconcileFact
`executionRunId: string` · `usageEventId: string | null` · `evidenceClass: observed|billed` · `sourceOfTruth: PROVIDER_OBSERVED|BILLED` · `amount` · `currency` · `correctionRef: string` · `provider` · `model: string | null` · `occurredAt`

### Batch
`projectId` · `periodStart` · `sourceBatchId` · `facts[]` · `maxFacts?`

### FinOpsCostEvent
`executionRunId: string` (required) · `usageEventId: string | null` · plus money/SoT/estimation/catalog/provider/model/unit/quantum/quantity/occurredAt

### Cost identity material (`deriveCostEventIdentity`)
`t2-v1 | cost | projectId | executionRunId | evidenceClass | correctionRef | sourceBatchId | amount | currency`

### Reconciliation identity
`t2-v1 | recon | projectId | periodStart | sourceBatchId`

### Runtime checks
`correctionRef` required non-empty · `periodStartMatchesOccurredAt` · Money parse · append-only insert · single aggregate rebuild after batch · T4 refresh via wrapper.

---

## Problem statement

A1 BILLED evidence may exist at provider/project/time-bucket/line-item/amount/currency granularity **without** an honest `executionRunId`.
Current contract **requires** `executionRunId` (type + DB NOT NULL + identity material).
Forbidden: invent run id · encode period into executionRunId · reuse arbitrary run · fake usage linkage · invent model · invent correlation.
Need explicit **BILLED_PROJECT_PERIOD** (or equivalent) without granularity lying.

---

## Invariants I01–I18 (design constraints)

| ID | Invariant |
|---|---|
| I01 | Internal cost-event ledger remains authoritative for T2 |
| I02 | BILLED ⇒ sourceOfTruth=BILLED · evidenceClass=billed |
| I03 | Estimation never becomes BILLED |
| I04 | No fake executionRunId |
| I05 | usageEventId null when unproven |
| I06 | model null when unproven |
| I07 | Canonical Money / existing scale |
| I08 | Explicit currency · no FX |
| I09 | Append-only cost history |
| I10 | Deterministic idempotence |
| I11 | Same-source replay ⇒ no new economic fact |
| I12 | Real correction ⇒ new append-only event |
| I13 | Aggregates rebuildable from cost events |
| I14 | T4 derived from cost events |
| I15 | blockingEligibleAmount = BILLED + PROVIDER_OBSERVED only |
| I16 | Identity evolution must not silently reinterpret t2-v1 identities |
| I17 | No unjustified second financial SoT |
| I18 | Provider provenance auditable |

---

## Schema constraints (migration `1754600000000_...`)

| Constraint | Value |
|---|---|
| `execution_run_id` | **TEXT NOT NULL** · **no FK** to execution_run |
| `usage_event_id` | TEXT nullable · no FK |
| `dedup_key` | UNIQUE NOT NULL |
| `cost_event_id` | PK TEXT |
| `period_start` | DATE NOT NULL · month-start check |
| `currency` | TEXT NOT NULL · `^[A-Z]{3}$` |
| `amount` | numeric(20,8) nullable |
| `evidence_class` / `source_of_truth` / `estimation_status` | CHECK enums |
| `correction_ref` | TEXT nullable at DB (app requires for ReconcileFact) |
| `provider` | NOT NULL · `model` nullable |
| indexes | `(project_id, period_start, currency)` |
| triggers | append-only (no UPDATE/DELETE) |
| `finops_reconciliation_record` | unique `dedup_key` · status succeeded/failed · `source_batch_id` NOT NULL |

### SCHEMA_SUPPORTS_PERIOD_BILLED_TODAY

**PARTIAL**

- YES: no FK forces a real run; period_start/currency/provider/amount already storable; usage_event_id/model already nullable.
- NO: honest null `execution_run_id` impossible under NOT NULL + TS `string` required.
- Fake non-null sentinel would “fit” schema but **violates I04** — not a support path.

---

## Consumer impact map (`executionRunId`)

### Identity / dedup
- `deriveCostEventIdentity` — material component
- `reconcileProjectPeriod` — copies fact → event + identity
- `postgresFinOpsReconciliation.fingerprintEqual` / memory T2 — compares field on dedup conflict

### Persistence mapping
- INSERT/SELECT `execution_run_id` NOT NULL
- Aggregate/projection stores map field when hydrating `FinOpsCostEvent`

### Assumes real run (semantic)
- `ReconcileFact.executionRunId: string` required
- `FinOpsCostEvent.executionRunId: string` required

### Money path does NOT use executionRunId
- `recomputeAggregates` · `rebuildEnforcementProjection` · `refreshEnforcementAfterT2` — **no** executionRunId dependency for amounts

### Trace / gate context (not cost identity)
- T4 evaluate input includes `executionRunId` for request context
- T1 usage/audit paths require run ids separately

### Tests
Heavy fixture use of run-scoped ids across T2/T4/T7 integration tests.

### Join
**No** FK/join from `finops_cost_event.execution_run_id` to an execution_run table.

---

## Options (4)

### OPTION A — Minimal nullable `executionRunId` for some BILLED facts

**Description:** Allow `executionRunId: string | null` when BILLED; put period dimensions into identity when null.

| Dimension | Assessment |
|---|---|
| Type/schema | TS nullable + DROP NOT NULL |
| Identity | Branch when null; risk of ambiguous null meaning |
| ReconcileFact | executionRunId optional |
| Aggregates/T4 | Compatible if SoT/evidence unchanged |
| Debt | Weak semantic honesty — null without explicit scope |
| Reversibility | Medium |

### OPTION B — Discriminated attribution scope (RUN vs PROJECT_PERIOD)

**Description:** Explicit `attributionScope`. RUN keeps t2-v1. PROJECT_PERIOD requires `executionRunId=null` and period identity material. Common `finops_cost_event` ledger retained.

| Dimension | Assessment |
|---|---|
| Type/schema | add scope · nullable execution_run_id · checks |
| Identity | coexistence t2-v1 + t2-v2-period |
| ReconcileFact | run path unchanged; period via boundary type |
| Aggregates/T4 | No money-logic change |
| Debt | Controlled · explicit honesty |
| Reversibility | Strong (stop producer) |

### OPTION C — `BilledPeriodFact` boundary type → common cost-event after validation

**Description:** Dedicated input DTO validated then mapped into ledger. Complements B; alone without scope still needs ledger representation.

| Dimension | Assessment |
|---|---|
| Surface | Extra DTO · less pollution of ReconcileFact |
| Identity | Still needs period identity (B) |
| Debt | Low if paired with B; medium if alone |
| Reversibility | Strong |

### OPTION D — Separate billed-period ledger/table

**Description:** Parallel table as financial facts for period billed.

| Dimension | Assessment |
|---|---|
| SoT | Risks **second financial SoT** (I17) |
| T4 | Would need dual read or sync — expansion |
| Debt | High |
| Verdict | **Deferred / rejected** for first T4 evidence |

---

## Comparison D01–D20

| Factor | A nullable | B scope | C boundary | D separate table |
|---|---|---|---|---|
| D01 semantic honesty | WEAK | STRONG | STRONG | STRONG |
| D02 minimal surface | STRONG | MEDIUM | MEDIUM | WEAK |
| D03 backward compatibility | MEDIUM | STRONG | STRONG | WEAK |
| D04 deterministic identity | MEDIUM | STRONG | STRONG | MEDIUM |
| D05 replay idempotence | MEDIUM | STRONG | STRONG | MEDIUM |
| D06 correction semantics | MEDIUM | STRONG | STRONG | MEDIUM |
| D07 period boundary correctness | MEDIUM | STRONG | STRONG | STRONG |
| D08 monetary correctness | STRONG | STRONG | STRONG | STRONG |
| D09 provenance | MEDIUM | STRONG | STRONG | STRONG |
| D10 auditability | WEAK | STRONG | STRONG | STRONG |
| D11 reconcileProjectPeriod compat | MEDIUM | STRONG | STRONG | WEAK |
| D12 aggregates compat | STRONG | STRONG | STRONG | WEAK |
| D13 T4 compat | STRONG | STRONG | STRONG | WEAK |
| D14 schema impact | MEDIUM | MEDIUM | MEDIUM | WEAK |
| D15 migration impact | MEDIUM | MEDIUM | MEDIUM | WEAK |
| D16 test surface | MEDIUM | MEDIUM | MEDIUM | WEAK |
| D17 operational complexity | STRONG | MEDIUM | MEDIUM | WEAK |
| D18 reversibility | MEDIUM | STRONG | STRONG | WEAK |
| D19 debt | WEAK | MEDIUM | MEDIUM | BLOCKED |
| D20 future provider-independence | MEDIUM | STRONG | STRONG | WEAK |

Justifications: B/C maximize honesty without second SoT; A is smaller but ambiguous; D conflicts I17/T4 single-ledger preference.

---

## PREFERRED CONTRACT CANDIDATE

**PREFERRED_CONTRACT_CANDIDATE = OPTION_B_ATTRIBUTION_SCOPE**
**status = CANDIDATE_ONLY**
**pairs with R2 = BilledPeriodFact boundary (OPTION C input style)**
**NOT ADOPTED · NOT ADR VALIDATED · NOT ARCHITECTURE SELECTED**

---

## CONTRAT CANDIDAT COMPLET

### 1. Attribution scope
- `EXECUTION_RUN` — existing t2-v1 run-scoped facts
- `PROJECT_PERIOD` — BILLED (and future observed if proven) at project/period(/bucket) granularity
- Future `PROJECT_PERIOD_LINE_ITEM`: representable later via `derivedSourceReference` including line item **without** new generic framework now
- Challenge: useful now? **YES** (unblocks A1). Simplest? **YES among honest options**. Premature generic scope enum explosion? **NO** — only two scopes now.

### 2. Types (future — not applied)
- `FinOpsAttributionScope = "EXECUTION_RUN" | "PROJECT_PERIOD"`
- `FinOpsCostEvent.attributionScope: FinOpsAttributionScope`
- `FinOpsCostEvent.executionRunId: string | null`
- `BilledPeriodFact` input type (see JSON below)
- Run `ReconcileFact` remains t2-v1 for EXECUTION_RUN

### 3. Nullable / non-null rules
| Scope | executionRunId | usageEventId | model |
|---|---|---|---|
| EXECUTION_RUN | required non-empty real run | optional | optional |
| PROJECT_PERIOD | **MUST null** | **MUST null** unless proven | **MUST null** unless proven |

Empty-string sentinel for run id = **invalid**.

### 4. Identity material
**EXECUTION_RUN (t2-v1 UNCHANGED):**
`t2-v1|cost|projectId|executionRunId|evidenceClass|correctionRef|sourceBatchId|amount|currency`

**PROJECT_PERIOD (t2-v2-period branch — not bumped in this cycle):**
`t2-v2-period|cost|PROJECT_PERIOD|projectId|periodStart|provider|evidenceClass|sourceOfTruth|derivedSourceReference|sourceBatchId|amount|currency`

Mandatory answers:
- **periodStart in period identity?** YES (subject).
- **provider in period identity?** YES (collision safety).
- **sourceOfTruth in period identity?** YES on period branch (future observed-period safety); validate consistency with evidenceClass.
- **amount in identity?** YES (keep; corrections change derivedSourceReference/correctionRef).
- **correctionRef vs sourceBatchId overlap?** Distinct responsibilities; both participate; stability rules prevent double-count.

### 5. Reconciliation identity
Unchanged: `t2-v1|recon|projectId|periodStart|sourceBatchId`

### 6. sourceBatchId semantics
Represents a **logical provider snapshot/import**, not a wall-clock attempt.

**SOURCE_BATCH_ID_STABILITY_RULE:**
Deterministic from `provider + (externalProjectId|sfiaProjectId) + periodStart + stable ordered sourceBucketStart set + currency set + adapterContractVersion`.
Retries of the same logical snapshot **MUST** reuse the same `sourceBatchId`.
Pagination tokens MUST NOT alone mint new batch ids.
MUST NOT depend on secret value, Keychain name, or `Date.now()`.

### 7. correctionRef / DERIVED_SOURCE_REFERENCE semantics
- `derivedSourceReference` = SFIA-derived economic atom key (NOT official OpenAI id).
- Candidate material: `provider|externalProjectId|sfiaProjectId|sourceBucketStart|lineItemOrALL|currency`
- `correctionRef` distinguishes INITIAL vs CORRECTION versions of that atom (e.g. suffix `|INITIAL` / `|CORR|<monotonic provider revision or content hash>` when provider revision absent — content hash only over **provider payload fields**, not local time).
- Identical reread: same identities → duplicate/idempotent.
- Real amount change: new append-only event with new correctionRef.

**EXTERNAL_EVIDENCE_REQUIRED** if OpenAI Costs line_item / project_id field semantics need tighter binding than handoff EXTERNAL FACT.

### 8. Time semantics (candidate choice)
- `sourceBucketStart` = provider bucket start
- `occurredAt = sourceBucketStart` (UTC timestamptz)
- `periodStart` = UTC month start containing `occurredAt`
- Reject if `periodStartMatchesOccurredAt` fails
- Avoids 31 Aug bucket mapped to 1 Sep occurredAt
- `sourceBucketEndExclusive` optional only if documented; else omit

### 9. Money semantics
- Canonical decimal string scale-8 · explicit currency · no FX
- Future adapter: no IEEE float; parse via existing Money boundary; FinOps-side fail on bad amount

### 10. Provenance / audit fields (minimal)
Must answer later: why amount · external source · window · provider project · currency · correction · logical batch · identity contract version/scope · run vs period · replay vs correction.
Fields: attributionScope · provider · externalProjectId? · periodStart · occurredAt/sourceBucketStart · derivedSourceReference · correctionRef · sourceBatchId · amount · currency · sourceOfTruth · evidenceClass · identity contract label.

### 11. Versioning / backward compatibility
- **Choice C:** coexistence t2-v1 RUN + t2-v2-period
- `EXISTING_T2_V1_IDENTITIES_REINTERPRETED = NO`
- Historical rows: remain valid; read-compat default `attributionScope=EXECUTION_RUN` without rewriting identities
- No version bump in this cycle

### 12. Migration implication (future only)
1. `ALTER ... execution_run_id DROP NOT NULL`
2. Add `attribution_scope TEXT NOT NULL` + CHECK (`EXECUTION_RUN|PROJECT_PERIOD`)
3. Backfill existing rows `EXECUTION_RUN`
4. Optional `derived_source_reference TEXT`
5. CHECK: (scope=EXECUTION_RUN ⇒ execution_run_id IS NOT NULL) AND (scope=PROJECT_PERIOD ⇒ execution_run_id IS NULL)
6. No second ledger table

### 13. T4 compatibility
BILLED PROJECT_PERIOD event → aggregate billedAmount → projection billedAmount → blockingEligibleAmount.
**No T4 financial logic change required.**
`ARCHITECTURE EXPANSION — MORRIS GATE REQUIRED` only for T2 implementation/schema/adapter — **not** for T4 formula.

### 14. Invariants
I01–I18 upheld by construction (esp. I04/I05/I06/I16/I17).

### 15. Failure modes
See preferred JSON — invalid scope/run nullness · period mismatch · unparseable money · unstable batch id · invented run.

### 16. Security boundary (conceptual)
`privileged external Costs source → sanitized BilledPeriodFact → T2 reconciliation boundary`.
Identity MUST NOT depend on secret value / Keychain name / volatile pagination / local non-deterministic timestamps.

### 17. Reconciliation approach selected conceptually
**OPTION R2:** `BilledPeriodFact` distinct input → shared reconciliation/insertCostEvent/aggregate rebuild/T4 refresh path.
Preserve: bounded batch · sourceBatchId idempotence · append-only corrections · single aggregate rebuild · post-success T4 refresh.
Avoid two reconciliation engines.
R1 (overload ReconcileFact with scopes) deferred as noisier for run callers.

---

## Recommendation

**RECOMMENDATION ONLY — MORRIS DECIDES.**

- **Recommended:** OPTION B (+ R2 BilledPeriodFact boundary).
- **Why simplest honest path:** explicit scope avoids fake runs; reuses single ledger/T4; isolates t2-v1.
- **Debt created:** schema nullability + scope column + second identity branch + tests.
- **Debt avoided:** second SoT (D); ambiguous null (A); T4 rewrite.
- **Deferred/rejected:** A (honesty weak); D (second SoT); full hybrid C orchestration beyond boundary DTO.
- **Open:** exact OpenAI Costs field binding for line_item/external project (**EXTERNAL_EVIDENCE_REQUIRED** at adapter design time); whether to persist `derived_source_reference` as own column vs encode in correctionRef.

---

## Future implementation impact map (candidate only — no edits)

| File / area | Class |
|---|---|
| `types.aggregate.ts` | MUST_CHANGE |
| `t2Identity.ts` | MUST_CHANGE |
| `reconcileProjectPeriod.ts` | LIKELY_CHANGE (or sibling reconcileBilledPeriod) |
| `finopsReconciliationPort.ts` | LIKELY_CHANGE |
| `postgresFinOpsReconciliation.ts` | MUST_CHANGE |
| migration/schema | MUST_CHANGE |
| `recomputeAggregates.ts` | NO_CHANGE_EXPECTED (money by evidenceClass) |
| `refreshEnforcementAfterT2.ts` | NO_CHANGE_EXPECTED / LIKELY wire-only |
| `rebuildEnforcementProjection.ts` | NO_CHANGE_EXPECTED |
| `blockingEligibility.ts` / `costEvidence.ts` | NO_CHANGE_EXPECTED |
| memory T2 | MUST_CHANGE |
| T2/T4/T7 tests | TEST_ONLY / MUST_CHANGE tests |

---

## Future test contract

T01 run-scoped t2-v1 identity unchanged
T02 period BILLED identity deterministic
T03 identical source replay duplicate/idempotent
T04 corrected amount creates append-only correction event
T05 correction replay idempotent
T06 no fake executionRunId (reject non-null on PROJECT_PERIOD; reject sentinel strings)
T07 null usageEventId accepted for PROJECT_PERIOD
T08 null model supported
T09 UTC month boundary (incl. last day of month)
T10 currency canonicalization
T11 no FX
T12 source batch retry stable
T13 distinct provider/source fact does not collide
T14 BILLED contributes T4
T15 PARAMETRIC_ESTIMATE still never contributes T4
T16 historical t2-v1 events retain identity
T17 mixed RUN + PROJECT_PERIOD aggregate correctly
T18 no double counting after replay
T19 T4 refresh exactly once after successful reconciliation
T20 failure remains FinOps-side only
T21 CHECK constraint scope↔executionRunId nullness
T22 empty-string executionRunId rejected
T23 identity material excludes secrets/pagination volatility

---

## R-T4-T3 / trajectory

`BILLED_PERIOD_IDENTITY_CONTRACT = IMPROVES T4-T3 READINESS` (unblocks honest A1 ingestion design).
**R-T4-T3-SYNC-01 remains OPEN BEFORE MONITOR.**
No MONITOR readiness verdict.
SHADOW rev1 transmitted by handoff — **not re-queried** (no Neon this cycle).

---

## Runtime immutability

| Metric | Value |
|---|---|
| PROVIDER_CALLS | 0 |
| OPENAI_COSTS_CALLS | 0 |
| OPENAI_USAGE_CALLS | 0 |
| DB_QUERIES | 0 |
| DB_MUTATIONS | 0 |
| RECONCILIATIONS | 0 |
| PROJECTION_REBUILDS | 0 |
| ROLLOUT_MUTATIONS | 0 |
| DATABASE_URL_DIRECT | NOT LOADED |
| OPENAI_* keys | NOT LOADED / NOT REQUESTED |

POLICY_VALUES_SELECTED=NO · POLICY_SOURCE_CHANGED=NO · MONITOR NOT ACTIVATED · E1 NOT AUTHORIZED · ROLLBACK NOT EXECUTED.

---

## Validation matrix V01–V24

| ID | Result |
|---|---|
| V01 main pinned | PASS |
| V02 tracked clean / staged none | PASS |
| V03 incoming handoff exact | PASS |
| V04 t2-v1 reconstructed | PASS |
| V05 schema constraints discovered | PASS |
| V06 executionRunId consumers mapped | PASS |
| V07 fake-run anti-pattern preserved | PASS |
| V08 >=2 options compared | PASS (4) |
| V09 period attribution explicit | PASS |
| V10 identity material explicit | PASS |
| V11 sourceBatchId semantics explicit | PASS |
| V12 correctionRef semantics explicit | PASS |
| V13 time semantics explicit | PASS |
| V14 Money semantics explicit | PASS |
| V15 provenance explicit | PASS |
| V16 backward compatibility explicit | PASS |
| V17 t2-v1 identities preserved by design | PASS |
| V18 T2 reconciliation compatibility assessed | PASS |
| V19 aggregates compatibility assessed | PASS |
| V20 T4 compatibility assessed | PASS |
| V21 future tests complete | PASS |
| V22 recommendation candidate-only | PASS |
| V23 T4-T3/policy/MONITOR/E1 preserved | PASS |
| V24 project/runtime mutation zero | PASS |

---

## Reserves

| Reserve | Status |
|---|---|
| R-T7-OP-EXPECTED-MODE-CAS-01 | CLOSED |
| R-T7-OP-TARGET-BINDING-01 | CLOSED |
| R-T7-SHADOW-OBS-01 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY |
| R-QA-T7-C08-SCENARIO-01 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY |
| R-T4-T3-SYNC-01 | OPEN BEFORE MONITOR |

---

## Morris decisions required

1. **ACCEPT CONTRACT CANDIDATE** OPTION_B_ATTRIBUTION_SCOPE
2. **REQUEST REVISION**
3. **REJECT**
4. **HOLD**

Even ACCEPT ≠ implementation authority. Separate GO required for identity versioning · type/schema · migration · Costs adapter · admin credential · real ingestion.

---

## Unique verdict

T7 BILLED PERIOD IDENTITY CONTRACT DESIGN PASS —
CYCLE 6 STANDARD —
T2-V1 CONTRACT VERIFIED —
SCHEMA / CONSUMER IMPACT MAPPED —
FAKE EXECUTION RUN PROHIBITED —
4 CONTRACT OPTIONS COMPARED —
PREFERRED CONTRACT CANDIDATE OPTION_B_ATTRIBUTION_SCOPE —
CANDIDATE ONLY / NOT ADOPTED —
ATTRIBUTION SCOPE DEFINED —
IDENTITY / DEDUP SEMANTICS DEFINED —
SOURCE BATCH SEMANTICS DEFINED —
CORRECTION SEMANTICS DEFINED —
TIME / MONEY / PROVENANCE SEMANTICS DEFINED —
T2-V1 BACKWARD COMPATIBILITY PRESERVED BY DESIGN —
T4 CONTRACT PRESERVED —
FUTURE IMPLEMENTATION IMPACT MAPPED —
FUTURE TEST CONTRACT DEFINED —
R-T4-T3-SYNC-01 REMAINS OPEN BEFORE MONITOR —
POLICY NOT SELECTED —
SHADOW STATE NOT TOUCHED —
NO DB / OPENAI CALL —
NO PROJECT MUTATION —
READY FOR CHATGPT VALIDATION / MORRIS CONTRACT DECISION —
HANDOFF REMOTE VERIFIED.

---

## Temporary files — full contents

### analysis-notes.json

```json
{
  "SCHEMA_SUPPORTS_PERIOD_BILLED_TODAY": "PARTIAL",
  "schema_reason": "execution_run_id TEXT NOT NULL, no FK; usage_event_id nullable; unique dedup_key; append-only triggers. Honest NULL executionRunId impossible without migration.",
  "PREFERRED_CONTRACT_CANDIDATE": "OPTION_B_ATTRIBUTION_SCOPE",
  "reconciliation_input": "R2_BilledPeriodFact_boundary",
  "versioning": "coexistence t2-v1 RUN identity unchanged + t2-v2-period identity branch",
  "EXISTING_T2_V1_IDENTITIES_REINTERPRETED": "NO",
  "T4_ARCHITECTURE_EXPANSION": "NO",
  "fake_executionRunId": "FORBIDDEN"
}
```

### consumer-impact-map.json

```json
{
  "identity_dedup": [
    "t2Identity.deriveCostEventIdentity (executionRunId in material)",
    "reconcileProjectPeriod (passes fact.executionRunId)",
    "postgresFinOpsReconciliation.fingerprintEqual (compares executionRunId)",
    "memoryFinOpsT2 fingerprint compare"
  ],
  "persistence_mapping": [
    "postgresFinOpsReconciliation INSERT/SELECT execution_run_id NOT NULL",
    "postgresFinOpsAggregateStore.rowToCostEvent",
    "postgresFinOpsEnforcementProjectionStore.rowToCostEvent (maps field; T4 money logic does not use it)"
  ],
  "assumes_real_run": [
    "ReconcileFact.executionRunId: string required (semantic run assumption)",
    "FinOpsCostEvent.executionRunId: string required",
    "T1 usage path (separate): buildUsageEvent/capture require non-empty executionRunId \u2014 out of T2 cost period scope but shows run-centric culture"
  ],
  "trace_only_not_money": [
    "rebuildEnforcementProjection \u2014 NO executionRunId use",
    "recomputeAggregates \u2014 NO executionRunId use",
    "refreshEnforcementAfterT2 \u2014 NO executionRunId use",
    "evaluateFinOpsEnforcement input has executionRunId for gate context, not cost ledger identity"
  ],
  "tests": [
    "t2.reconciliation.unit/integration",
    "t2.aggregate.*",
    "t4.enforcement-projection.integration",
    "t4.projection-refresh.integration",
    "t7.foundation-runtime.integration"
  ],
  "no_fk_join_to_execution_run_table": true
}
```

### preferred-contract-candidate.json

```json
{
  "PREFERRED_CONTRACT_CANDIDATE": "OPTION_B_ATTRIBUTION_SCOPE",
  "status": "CANDIDATE_ONLY",
  "name": "FinOps T2 Attribution Scope \u2014 PROJECT_PERIOD BILLED",
  "pairs_with": "R2 BilledPeriodFact boundary into common finops_cost_event ledger",
  "attribution_scopes": [
    "EXECUTION_RUN",
    "PROJECT_PERIOD"
  ],
  "future_extension_noted_not_implemented": "PROJECT_PERIOD_LINE_ITEM optional later via derivedSourceReference dimension \u2014 no generic abstraction now",
  "types_candidate": {
    "FinOpsAttributionScope": "EXECUTION_RUN | PROJECT_PERIOD",
    "FinOpsCostEvent_additions": {
      "attributionScope": "required on new writes; historical rows treated as EXECUTION_RUN by default at read-compat layer OR backfilled only under separate GO",
      "executionRunId": "string | null \u2014 non-null iff attributionScope=EXECUTION_RUN; null iff PROJECT_PERIOD",
      "periodStart": "unchanged required",
      "usageEventId": "null for PROJECT_PERIOD unless proven",
      "model": "null unless proven",
      "provider": "required",
      "sourceOfTruth": "BILLED for this path",
      "evidenceClass": "billed",
      "derivedSourceReference": "optional explicit field OR stored in correctionRef per semantics below"
    },
    "BilledPeriodFact_input": {
      "projectId": "string",
      "periodStart": "YYYY-MM-DD UTC month start",
      "provider": "string",
      "amount": "canonical Money string",
      "currency": "ISO 4217",
      "occurredAt": "ISO timestamptz = source bucket start UTC",
      "sourceBucketStart": "ISO date/timestamptz",
      "sourceBucketEndExclusive": "ISO optional if known; else UNKNOWN not invented",
      "lineItem": "string | null \u2014 null if not proven",
      "externalProjectId": "string | null \u2014 provider project id if known",
      "derivedSourceReference": "SFIA-derived stable economic fact key",
      "correctionKind": "INITIAL | CORRECTION",
      "sourceBatchId": "stable logical snapshot id"
    },
    "ReconcileFact_run_path": "t2-v1 unchanged for EXECUTION_RUN"
  },
  "nullable_rules": {
    "PROJECT_PERIOD.executionRunId": "MUST be null \u2014 never empty string sentinel, never fake run",
    "PROJECT_PERIOD.usageEventId": "MUST be null unless proven linkage",
    "PROJECT_PERIOD.model": "MUST be null unless proven",
    "EXECUTION_RUN.executionRunId": "MUST be non-empty real run id (t2-v1)"
  },
  "identity_material": {
    "EXECUTION_RUN_t2_v1_UNCHANGED": [
      "FINOPS_T2_IDENTITY_CONTRACT_VERSION=t2-v1",
      "cost",
      "projectId",
      "executionRunId",
      "evidenceClass",
      "correctionRef",
      "sourceBatchId",
      "amount",
      "currency"
    ],
    "PROJECT_PERIOD_t2_v2_period": [
      "t2-v2-period",
      "cost",
      "attributionScope=PROJECT_PERIOD",
      "projectId",
      "periodStart",
      "provider",
      "evidenceClass",
      "sourceOfTruth",
      "derivedSourceReference OR correctionRef",
      "sourceBatchId",
      "amount",
      "currency"
    ],
    "answers": {
      "periodStart_in_period_identity": "YES \u2014 subject dimension for PROJECT_PERIOD",
      "provider_in_period_identity": "YES \u2014 prevent cross-provider collision",
      "sourceOfTruth_in_period_identity": "YES for period branch \u2014 distinguish future PROVIDER_OBSERVED period facts if added; validate BILLED consistency",
      "amount_in_identity": "YES \u2014 retain; corrections use new derivedSourceReference/correctionRef",
      "correctionRef_vs_sourceBatchId": "sourceBatchId=logical provider snapshot/import; correctionRef/derivedSourceReference=economic fact version; both in identity; stability rules prevent double-count on retry"
    }
  },
  "reconciliation_identity": {
    "unchanged": [
      "t2-v1",
      "recon",
      "projectId",
      "periodStart",
      "sourceBatchId"
    ]
  },
  "sourceBatchId_semantics": {
    "represents": "logical provider snapshot/import identity for a bounded reconciliation attempt \u2014 NOT wall-clock, NOT secret, NOT volatile pagination token alone",
    "SOURCE_BATCH_ID_STABILITY_RULE": "Deterministic from: provider + externalProjectId|sfiaProjectId + periodStart + ordered stable set of sourceBucketStart values included + currency set + adapterContractVersion. Retries of the same logical snapshot MUST reuse the same sourceBatchId. Page fetches within one snapshot MUST NOT mint a new sourceBatchId per page.",
    "not": [
      "local Date.now()",
      "Keychain item name",
      "Admin key value",
      "random UUID per attempt"
    ]
  },
  "correctionRef_semantics": {
    "role": "Fact-level economic version / correction identity",
    "INITIAL": "first accepted BILLED economic atom for derivedSourceReference within snapshot rules",
    "CORRECTION": "new append-only event with new correctionRef when provider amount for same economic atom changes",
    "identical_reread": "same sourceBatchId + same identity \u2192 duplicate/idempotent, no new economic fact",
    "DERIVED_SOURCE_REFERENCE": {
      "is": "SFIA-computed stable key from proven provider fields",
      "not": "official OpenAI ID",
      "material_candidate": "provider|externalProjectId|sfiaProjectId|sourceBucketStart|lineItemOrALL|currency",
      "EXTERNAL_EVIDENCE_REQUIRED_if": "line_item semantics or provider project id mapping fields change vs EXTERNAL FACT handoff"
    }
  },
  "time_semantics": {
    "periodStart": "UTC month start YYYY-MM-DD containing sourceBucketStart",
    "occurredAt": "sourceBucketStart as timestamptz UTC",
    "sourceBucketStart": "provider time bucket start",
    "sourceBucketEndExclusive": "optional if documented; else omit \u2014 do not invent",
    "chosen_rule": "occurredAt = source bucket start UTC",
    "justification": "Aligns with periodStartMatchesOccurredAt (month of occurredAt must equal periodStart); avoids Aug31 bucket \u2192 Sep1 occurredAt rejection; honest to daily Costs buckets",
    "month_boundary": "bucket starting 2026-08-31T00:00:00Z \u2192 periodStart 2026-08-01; bucket 2026-09-01T00:00:00Z \u2192 periodStart 2026-09-01"
  },
  "money_semantics": {
    "canonical": "numeric(20,8) / existing Money parseMoneyString scale-8",
    "currency": "explicit ISO 4217; no FX",
    "adapter_protection_future": "reject binary float; accept decimal string/integer minor units only; fail FinOps-side on unparseable provider amount"
  },
  "versioning": {
    "choice": "C \u2014 coexistence t2-v1 RUN + t2-v2-period branch",
    "EXISTING_T2_V1_IDENTITIES_REINTERPRETED": "NO",
    "historical_events": "remain t2-v1; read as attributionScope=EXECUTION_RUN by compatibility default without rewriting rows",
    "bump_now": "NO \u2014 design only",
    "migration_implication": "future: alter execution_run_id DROP NOT NULL; add attribution_scope text NOT NULL with check; optional derived_source_reference; backfill scope=EXECUTION_RUN for existing rows",
    "rollback_producer": "stop BilledPeriod producer; historical period rows remain append-only; T4 rebuildable",
    "double_count_risk": "mitigated by stable sourceBatchId + derivedSourceReference; forbidden to ingest same atom under RUN and PERIOD scopes"
  },
  "t4_compatibility": {
    "path": "BILLED PROJECT_PERIOD cost event \u2192 aggregates billedAmount \u2192 enforcement projection billedAmount \u2192 blockingEligibleAmount",
    "T4_code_change_required": "NO",
    "ARCHITECTURE_EXPANSION_MORRIS_GATE": "NOT REQUIRED for T4 money logic; REQUIRED for T2 types/schema/identity/adapter implementation cycles"
  },
  "invariants_preserved": [
    "I01",
    "I02",
    "I03",
    "I04",
    "I05",
    "I06",
    "I07",
    "I08",
    "I09",
    "I10",
    "I11",
    "I12",
    "I13",
    "I14",
    "I15",
    "I16",
    "I17",
    "I18"
  ],
  "failure_modes": [
    "provider amount unparseable \u2192 FinOps-side fail, no AI run impact",
    "periodStart/occurredAt mismatch \u2192 reject fact",
    "executionRunId non-null on PROJECT_PERIOD \u2192 reject",
    "model/usageEventId present without proof \u2192 reject",
    "unstable sourceBatchId \u2192 recon non-idempotent / double count risk",
    "invented run id \u2192 FORBIDDEN / reject in validation"
  ]
}
```
