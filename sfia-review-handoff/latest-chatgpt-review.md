# Cycle 6 Standard — FinOps T7 — Financial Evidence Path Assessment — Review Pack

**Level:** FULL
**Date/heure:** 2026-08-09 22:31:03 CEST / 2026-08-09 20:31:03 UTC
**Repo:** mcleland147/sfia-workspace
**Cycle type:** 6 — Architecture technique
**Profil:** Standard
**Typologie v2.4:** EVOL / ARCHITECTURE ASSESSMENT / READ-ONLY
**projectId:** `sfia-studio-ops1`
**target:** `neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot`

---

## Morris GO (exact)

GO T7 FINANCIAL EVIDENCE PATH ASSESSMENT

Autorise: lecture Git · lecture Neon RO si utile · analyse architecture · comparaison A/B/C · INPUT documentaire OpenAI pré-vérifié ChatGPT · recommandation non décisionnelle · review pack · handoff L3 borné.

N’autorise PAS: sélection définitive · Admin API key create/use · OpenAI Usage/Costs/Responses calls · credential mutation · ingestion financière · reconciliation/rebuild runtime · DB/code/catalog/policy mutation · rollout/rollback · MONITOR · E1 · PR/merge.

Morris décide.

---

## Qualification SFIA

| Field | Value |
|---|---|
| Baseline | SFIA v2.6 |
| Cycle | 6 — Architecture technique |
| Profil | Standard (pas Critical par confort) |
| Justification | Comparer options techniques + trade-offs avant décision; read-only; aucune décision d’architecture irréversible |
| CKC | `method/.../pilots/03-architecture-technique.md` · candidate · experimental guidance · aucune autorité d’exécution |
| Blocs ON | FinOps · Sécurité · Observabilité / RUN readiness |
| Blocs OFF | Delivery · Déploiement/release · UX/UI · GreenOps · RGPD · Accessibilité · Performance hors comparaison |

Anti-claim CKC: ne pas implémenter sous couvert d’architecture.

Futur cycle d’implémentation/décision (credential org/admin, ingestion, modif T2/T3/T4, provenance durable) → requalification séparée, potentiellement Critical + GO Morris.

---

## Local Git Truth

| Field | Value |
|---|---|
| branch | `main` |
| HEAD | `96a8a14bc894b520043b3a8f758b1fb14a72a5e4` |
| origin/main | `96a8a14bc894b520043b3a8f758b1fb14a72a5e4` |
| tracked | CLEAN |
| staged | NONE |
| untracked allowed | `?? .tmp-sfia-review/` only |

---

## Sources Git consultées

Method/CKC: cycle template · routing guide · validation checklist · chatgpt-cursor operating model · rules/guardrails · v2.5 cycles method · `pilots/03-architecture-technique.md`.

FinOps: `types.aggregate.ts` · `types.enforcement.ts` · `estimateUsageCost.ts` · `reconcileProjectPeriod.ts` · `recomputeAggregates.ts` · `rebuildEnforcementProjection.ts` · `blockingEligibility.ts` · `costEvidence.ts` · `domain/types.ts` · `finopsPriceCatalogPort.ts` · `postgresFinOpsPriceCatalog.ts` · `composeFinOpsT7Runtime.ts` · `composeFinOpsT7ShadowExecutionDeps.ts` · `t2Identity.ts` · `refreshEnforcementAfterT2.ts` · `postgresFinOpsReconciliation.ts` · tests `t2.reconciliation.unit.test.ts` · `t4.enforcement.unit.test.ts` · `blockingEligibility.test.ts`.

Discovery conclusion: **no OpenAI Costs/Usage monetary adapter** under `projects/sfia-studio/app/lib`.

---

## EXTERNAL FACT — OpenAI (NOT Git SoT)

Classifier: **EXTERNAL_CURRENT_PROVIDER_EVIDENCE**
Pré-vérifié par ChatGPT: **2026-08-09**
Ce cycle: **NO call** to Usage API / Costs API / Responses API.

Documented facts used as INPUT only:

1. Usage API — detailed API usage data.
2. Costs endpoint — `GET /v1/organization/costs`.
3. Costs ≠ Usage API.
4. OpenAI indicates Costs is preferred for financial reconciliation with billing.
5. Costs may be grouped by `project_id`, `line_item`.
6. Official Costs access example uses `OPENAI_ADMIN_KEY`.

Not assumed: run/correlation granularity; Responses-key reuse; any undocumented field.

---

## Incoming handoff

| Field | Expected | Observed |
|---|---|---|
| tip | `388b221b111a3da9caccfbbe720443baccb7cc26` | MATCH |
| blob | `2df45b0e41a843c5fb26ae433641a0bd6ecc5544` | MATCH |

Confirms: SHADOW rev1 · policy EMPTY · U=4 · C=0 · K=0 · catalog=0 · projection=0 · CALIBRATION_EVIDENCE=INSUFFICIENT · T4-T3=INSUFFICIENT FOR NUMERIC CALIBRATION · no provider call · no runtime mutation · MONITOR not activated · E1 not authorized.

---

## Runtime snapshot (read-only revalidation)

| Field | Value |
|---|---|
| fingerprint | `7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331` MATCH |
| safe identity | host=`ep-dry-shape-b1fabcbm.c-5.eu-central-1.aws.neon.tech` port=`5432` db=`neondb` |
| MODE / REVISION | `SHADOW` / `1` |
| updatedAt | `2026-08-09T18:50:15.239Z` |
| USAGE_EVENT_COUNT | `4` |
| COST_EVENT_COUNT | `0` |
| PRICE_CATALOG_ENTRY_COUNT | `0` |
| ENFORCEMENT_PROJECTION_COUNT | `0` |
| policy Git | EMPTY `Object.freeze({})` |
| READ_ONLY_MUTATIONS | 0 |
| counts drift vs calibration | NONE (still 0/0/0) |

OPENAI_API_KEY / OPENAI_ADMIN_KEY: not loaded / not requested / not created.

---

## Current financial gap (unchanged)

Usage ledger tokens exist (API_USAGE). No cost events. Empty catalog. No T4 projection. Tokens ≠ money. No numeric policy calibration possible yet.

---

## Financial evidence contracts (Git)

### Sources

`BILLED` · `PROVIDER_OBSERVED` · `API_USAGE` · `LOCAL_COUNT` · `PARAMETRIC_ESTIMATE` · `UNKNOWN`

### Classification (`costEvidence.ts`)

| SoT | evidenceClass |
|---|---|
| BILLED | billed |
| PROVIDER_OBSERVED / API_USAGE | observed |
| LOCAL_COUNT / PARAMETRIC_ESTIMATE | estimated |
| UNKNOWN | unknown |

### Blocking eligibility (`blockingEligibility.ts`)

| SoT | Blocking eligible? |
|---|---|
| BILLED | YES |
| PROVIDER_OBSERVED | YES |
| API_USAGE | NO — never |
| LOCAL_COUNT | NO — never |
| PARAMETRIC_ESTIMATE | NO — never |
| UNKNOWN | NO — never |

### T4 projection (`rebuildEnforcementProjection.ts` + `types.enforcement.ts`)

`blockingEligibleAmount` = **billed + providerObserved** per currency, **no FX**.
API_USAGE / LOCAL_COUNT / PARAMETRIC_ESTIMATE / UNKNOWN **never contribute**.
**No divergence** vs contract comments.

### T2 ReconcileFact (`types.aggregate.ts`)

Required money facts for reconcile path:

- `executionRunId: string` (required)
- `usageEventId: string | null`
- `evidenceClass: "observed" | "billed"` only
- `sourceOfTruth: "PROVIDER_OBSERVED" | "BILLED"` only
- `amount` canonical · `currency` · `correctionRef` (required non-empty)
- `provider` · `model: string | null` · `occurredAt`
- batch: `sourceBatchId` · periodStart · projectId
- identity/dedup via `deriveCostEventIdentity` (includes executionRunId, evidenceClass, correctionRef, sourceBatchId, amount, currency)

T7 composition exposes `reconcileProjectPeriodAndRefresh` (T2 → aggregates → T4 rebuild once). SHADOW adapter does **not** auto-call reconcile/estimate.

---

## PATH A1 — BILLED

### What it enables
- Authoritative billed money into `finops_cost_event` with `sourceOfTruth=BILLED` / `evidenceClass=billed`.
- Feeds aggregates `billedAmount` and T4 `blockingEligibleAmount`.
- Reuses existing T2 `reconcileProjectPeriod` + T7 `reconcileProjectPeriodAndRefresh`.
- Best alignment with OpenAI guidance that Costs is preferred for billing reconciliation (EXTERNAL fact).

### What it does not enable alone
- Run/correlation-level attribution from OpenAI Costs (not documented).
- Honest model/usageEvent linkage from Costs aggregates.
- Closing R-T4-T3-SYNC-01 by itself (reserve needs dedicated cycle).
- Policy selection / MONITOR / E1.

### Mapping vs OpenAI Costs (EXTERNAL)

| OpenAI Costs (EXTERNAL) | SFIA ReconcileFact / CostEvent |
|---|---|
| monetary amount + currency | amount + currency — compatible if quantized to Money scale-8 |
| project_id grouping | projectId — conceptually alignable to pilot mapping |
| daily time bucket | occurredAt / periodStart — mappable with care |
| line_item | may inform provider/model **only if documented**; else model=null |
| no run/correlation documented | executionRunId **required** by current contract |
| Admin key example | separate privileged credential — not Responses key |

### GRANULARITY GAP verdict

**PARTIAL — additional bounded contract required.**

Reasons:
- `usageEventId` and `model` MAY be null honestly.
- `executionRunId` is **required** on `ReconcileFact` and participates in cost-event identity.
- Inventing a fake execution-run id to stash project/day billed totals would be semantically dishonest.
- Therefore existing contract does **not** fully support aggregated Costs ingestion without a **bounded period/project-level billed identity contract** (future Critical/Standard implementation cycle + GO).

Authorized answer selected: **PARTIAL**.

### Future changes (conceptual only)
1. Bounded contract for period-level BILLED facts (identity/dedup/correctionRef/sourceBatchId semantics without fake runs).
2. Server-only OpenAI Costs adapter (read → ReconcileFact batch) — not present today.
3. Separate Admin-class secret handle + least-privilege process boundary.
4. Explicit project mapping OpenAI project_id ↔ `sfia-studio-ops1`.
5. Tests: idempotence, provenance, no invented run linkage, T4 projection from billed only.

### Security / privilege
- Official Costs example uses org/admin key → higher blast radius than Responses key.
- Must NOT reuse Responses credential.
- Separate Keychain/secret handle, rotation/revocation, server-only materialization, minimal org scopes if/when documented by OpenAI.
- Risk does **not** make A1 impossible; it raises credential governance cost vs financial authority benefit.

### Debt / reversibility
- Debt if rushed: fake run ids · second financial SoT · silent FX · hard-coded tariffs.
- Reversibility: append-only ledger + rebuildable projection → disable adapter without rewriting history; good if provenance honest.
- Repo-first: reuse T2/T4; new adapter only at ingestion boundary.

### PATH A1 RESULT

**FEASIBLE_WITH_BOUNDED_CONTRACT_INCREMENT** — strongest T4 financial authority candidate among paths assessed.

---

## PATH A2 — PROVIDER_OBSERVED

### Discovery
- Repo has domain + ReconcileFact support for `PROVIDER_OBSERVED`.
- No monetary provider-observed ingestion adapter found under `app/lib`.
- Responses usage capture produces **API_USAGE tokens**, not provider-observed money.

### Verdict

**PATH_A2_SOURCE = ABSENT**

Necessary future source (if chosen): an authorized provider monetary observation feed distinct from token usage (not invented from tokens; not equated to Costs billed).

### PATH A2 RESULT

**BLOCKED_TODAY — SOURCE ABSENT** (contract ready; producer absent).

---

## PATH B — T3/R3 PARAMETRIC_ESTIMATE

### Existing contract
Catalog entry: provider · model · unit · currency · billingQuantum · ratePerQuantum · catalogVersion · validFrom · validTo.
Missing entry → unavailable → **never invent tariff** (`estimateUsageCost` / `postgresFinOpsPriceCatalog`).

### Wiring reality (Git)
- `estimateUsageCost` computes Money estimate — **no persistence**.
- Used in tests; **not wired** into T7 SHADOW/runtime capture composition.
- Estimated `FinOpsCostEvent` can exist (tests insert via `insertCostEvent` directly).
- `reconcileProjectPeriod` **cannot** accept PARAMETRIC_ESTIMATE facts (`ReconcileFact` SoT limited to PROVIDER_OBSERVED|BILLED).
- Runtime catalog count = **0**; openai/`gpt-5.6-sol` uncovered.

### Can PATH B alone enter `blockingEligibleAmount`?

**NO** (revalidated): PARAMETRIC_ESTIMATE never blocking-eligible.

Classifier:

**USEFUL_FOR_ESTIMATION / EARLY VISIBILITY**
**NOT SUFFICIENT ALONE FOR T4 BLOCKING-ELIGIBLE EVIDENCE**

This is an explicit financial guardrail, not a defect.

### Future changes if B pursued
- Authorized catalog entry(ies) for observed models/units/currency.
- New/explicit estimated cost-event producer (usage → estimate → insertCostEvent) — currently absent as product path.
- Still requires A1/A2 later for T4-eligible money.

### PATH B RESULT

**SUPPORTIVE_ONLY — DORMANT — NOT_T4_ELIGIBLE_ALONE**.

---

## PATH C — Hybrid lifecycle

### Justification from Git
- `reconcileProjectPeriod.ts` header: estimated → observed → billed via append-only correction events.
- Unit test `t2.reconciliation.unit.test.ts` exercises estimated then observed then billed; aggregates keep all layers; history append-only.
- Aggregates rebuildable; T4 projection SoT-safe (estimates excluded).

### What C enables
- Early visibility (estimated) without polluting blocking-eligible amounts.
- Later authoritative correction (observed/billed) with `correctionRef` / `sourceBatchId` provenance.
- Aligns with R-T4-T3-SYNC-01 remediation trajectory without claiming closure.

### What C does not enable alone
- Still needs catalog+estimated producer **and** A1/A2 authoritative source.
- More moving parts than A1-only for first T4-eligible evidence.

### Implementation gaps
1. Catalog empty + no product estimated producer.
2. A2 source absent.
3. A1 Costs adapter + period-level identity contract absent.
4. No automated hybrid orchestrator in T7 SHADOW path (on-demand only).

### PATH C RESULT

**JUSTIFIED_LIFECYCLE — OPTIONAL_FOR_FIRST_T4_EVIDENCE — GAPS_OPEN**.

---

## Comparison matrix F01–F24

Notation: STRONG / MEDIUM / WEAK / BLOCKED / UNKNOWN

| Factor | A1 BILLED | A2 PROVIDER_OBSERVED | B PARAMETRIC | C HYBRID | Justification |
|---|---|---|---|---|---|
| F01 financial authority | STRONG | STRONG (if source existed) | WEAK | MEDIUM→STRONG over time | Billed ranks #1 SoT; estimate never authoritative for enforcement |
| F02 T4 blocking eligibility | STRONG | STRONG | BLOCKED | STRONG (final stage) | Only BILLED/PROVIDER_OBSERVED contribute |
| F03 T2 contract compatibility | MEDIUM | STRONG | MEDIUM | STRONG | A1 needs period-level identity; B needs non-reconcile producer; C matches tested lifecycle |
| F04 granularity fit | WEAK→MEDIUM | UNKNOWN | STRONG (run/usage) | MEDIUM | Costs daily/project vs run-scoped ReconcileFact |
| F05 provenance/audit | STRONG (if correctionRef/batch honest) | STRONG | MEDIUM (catalogVersion) | STRONG | Append-only + refs |
| F06 reconciliation semantics | STRONG | STRONG | WEAK (not via ReconcileFact) | STRONG | T2 reconcile designed for observed/billed |
| F07 idempotence/dedup | STRONG | STRONG | MEDIUM | STRONG | t2Identity + recon dedup exist |
| F08 latency of evidence | WEAK (billing lag) | UNKNOWN | STRONG (fast if catalog) | MEDIUM | Estimates fast; billed slower |
| F09 provider dependency | STRONG | STRONG | MEDIUM | STRONG | A/C depend on provider money feeds |
| F10 credential privilege | WEAK (Admin/org) | UNKNOWN | STRONG (no admin for estimate) | WEAK→MEDIUM | Costs example uses Admin key |
| F11 secret-management impact | WEAK | UNKNOWN | MEDIUM | WEAK | New privileged secret handle for A1 |
| F12 implementation surface | MEDIUM | BLOCKED | MEDIUM | WEAK (largest) | C = B producer + A source + orchestration |
| F13 runtime coupling | MEDIUM | MEDIUM | WEAK | MEDIUM | On-demand T2 preferred over always-on |
| F14 observability | STRONG | STRONG | MEDIUM | STRONG | Cost/aggregate/projection layers |
| F15 failure modes | MEDIUM | UNKNOWN | MEDIUM | WEAK | Hybrid more failure points |
| F16 reversibility | STRONG | STRONG | STRONG | STRONG | Disable ingestion; ledger append-only |
| F17 operational complexity | MEDIUM | UNKNOWN | MEDIUM | WEAK | C highest ops burden |
| F18 maintenance burden | MEDIUM | UNKNOWN | WEAK (tariff upkeep) | WEAK | Catalog drift + billing API drift |
| F19 financial correctness risk | MEDIUM (granularity) | UNKNOWN | WEAK (estimate≠bill) | MEDIUM | Risk controlled if estimates never block |
| F20 debt created | MEDIUM | BLOCKED | MEDIUM | WEAK if overbuilt early | Fake run ids / dual SoT forbidden |
| F21 future SHADOW calibration | STRONG | STRONG | WEAK alone | STRONG | Need blocking-eligible amounts for numeric options |
| F22 future MONITOR prerequisites | STRONG | STRONG | BLOCKED alone | STRONG | MONITOR needs trustworthy T4 basis |
| F23 R-T4-T3-SYNC-01 | IMPROVES | IMPROVES | IMPROVES visibility / NEUTRAL for close | IMPROVES | None closes reserve here |
| F24 unknowns needing evidence | MEDIUM | STRONG | MEDIUM | MEDIUM | Admin scopes; Costs field details; A2 source existence |

---

## Security assessment (PATH A1 focus)

| Topic | Assessment |
|---|---|
| Least privilege | Prefer minimal org Costs read scope if/when available; not Responses capability |
| Credential reuse | FORBIDDEN to reuse existing Responses Keychain entry |
| Storage | Separate Keychain/service handle; server-only; process-only materialization |
| Blast radius | Org billing visibility potentially broader than pilot project |
| Rotation/revocation | Required before any live use; dual-control Morris GO |
| Process boundary | Server-only job/adapter; no browser; no commit of secret |
| This cycle | No Admin key requested/created/loaded |

Privilege cost is real but does not invalidate A1’s financial superiority for T4.

---

## Architectural debt check

| Path | Useful now? | Debt if chosen | Simplest correct? | Repo-first? | New abstraction? | Reuse T2/T3/T4? | Second SoT? |
|---|---|---|---|---|---|---|---|
| A1 | YES for T4 money | Period-identity + Admin secret ops | YES for T4-eligible | YES | Costs→ReconcileFact adapter + identity contract | YES T2/T4 | Avoid if Costs is source with provenance |
| A2 | NO — source absent | Would invent money from tokens if forced | N/A | N/A | Needs real monetary source | Contract ready | N/A |
| B | Visibility only | Catalog maintenance; false sense of T4 readiness | For estimate yes; for T4 no | YES catalog/estimate | Estimated event producer | T3 catalog + estimate | No if clearly estimated |
| C | Later lifecycle | Overbuild if before A1 | No for first increment | YES | Orchestration | YES | No if layers distinct |

Forbidden patterns avoided in recommendation: parallel ledger · process-local registry · unreplicated external SoT · token-derived thresholds · hard-coded tariffs · recycled 15/20/25/30.

---

## Preferred path candidate (NON-DECISION)

**PREFERRED PATH CANDIDATE = A1 (BILLED via OpenAI Costs → T2 reconcile → T4 projection)**
status = **CANDIDATE_ONLY — NOT SELECTED ARCHITECTURE**

Answers:

1. Best financial proof for T4: **A1 BILLED**.
2. Simplest correct for T4-eligible money: **A1** (after period-level identity contract) — smaller than full hybrid.
3. Least debt for T4 goal: **A1-first**; defer B/C until visibility need is explicit.
4. Can B alone work for T4? **NO**.
5. Hybrid justified? **YES as lifecycle**, **optional/not required** for first T4-eligible evidence; useful after A1 (and optional B) exist.
6. Smallest next useful increment: **bounded period-level BILLED identity contract + design of Costs→ReconcileFact adapter (no live Admin call yet)** under separate Morris GO; profile likely Critical when credentials/ingestion start.

Alternatives deferred:
- **A2**: source absent.
- **B-alone**: cannot feed blockingEligibleAmount.
- **C-now**: justified but higher surface before any authoritative money exists.

---

## Minimal future increment (A1 candidate only — conceptual)

| Item | Description |
|---|---|
| Objectif | Ingester des faits BILLED project/période traçables vers T4 projection sans inventer run linkage |
| Entrées | OpenAI Costs buckets (EXTERNAL) · mapping project · periodStart · sourceBatchId · correctionRef |
| Sorties | `finops_cost_event` BILLED · aggregates · enforcement projection |
| Réutilisé | `reconcileProjectPeriod` / `reconcileProjectPeriodAndRefresh` · money parse · t2Identity (possibly extended) · projection rebuild |
| Nouveau | period-level BILLED identity contract · Costs read adapter · Admin secret handle |
| Fichiers probablement impactés (futur) | new server adapter under `oa/finops` · possibly `types.aggregate`/`t2Identity` · tests T2/T4 · **none in this cycle** |
| Credential | future separate OPENAI_ADMIN-class secret — not created here |
| Données écrites | cost events + recon record + aggregate/projection rebuild (future cycle only) |
| Idempotence | sourceBatchId + correctionRef + dedup keys |
| Audit | FinOps-side audit of recon success/failure |
| Tests | granularity honesty · null model/usageEventId · no fake run · T4 eligibility · idempotent replay |
| Rollback/disable | stop adapter; leave append-only history; SHADOW unchanged |
| Réserves | R-T4-T3 remains OPEN until dedicated close cycle |
| Profil SFIA probable | Critical (credential + financial ingestion + provenance) |
| Gates Morris | GO dedicated ingestion/contract; never implied by this assessment |

AUCUN code · AUCUN fichier tracked · AUCUN ADR validé · AUCUN choix irréversible.

---

## R-T4-T3-SYNC-01 impact

| Path | Impact on future close capability |
|---|---|
| A1 | IMPROVES |
| A2 | IMPROVES (if source appears) |
| B | IMPROVES visibility / NEUTRAL for closure alone |
| C | IMPROVES |

**R-T4-T3-SYNC-01 remains OPEN BEFORE MONITOR.** Never closed here.

---

## Runtime / trajectory immutability (end state)

| Field | Value |
|---|---|
| MODE | SHADOW |
| REVISION | 1 |
| POLICY_VALUES_SELECTED | NO |
| POLICY_SOURCE_CHANGED | NO |
| COST_EVENTS_INSERTED | 0 |
| CATALOG_ENTRIES_INSERTED | 0 |
| RECONCILIATIONS_EXECUTED | 0 |
| PROJECTION_REBUILDS | 0 |
| PROVIDER_CALLS | 0 |
| OPENAI_COSTS_CALLS | 0 |
| OPENAI_USAGE_CALLS | 0 |
| MONITOR | NOT ACTIVATED |
| E1 | NOT AUTHORIZED |
| ROLLBACK | NOT EXECUTED |
| project mutation | ZERO |

---

## Validation matrix P01–P24

| ID | Result |
|---|---|
| P01 main pinned | PASS |
| P02 tracked clean / staged none | PASS |
| P03 incoming handoff exact | PASS |
| P04 SHADOW state preserved | PASS |
| P05 policy EMPTY | PASS |
| P06 financial contracts traced from Git | PASS |
| P07 PATH A1 evaluated | PASS |
| P08 PATH A2 evaluated | PASS |
| P09 PATH B evaluated | PASS |
| P10 PATH C evaluated (justified) | PASS |
| P11 OpenAI external fact correctly scoped | PASS |
| P12 no external API call | PASS |
| P13 granularity gap assessed | PASS = PARTIAL |
| P14 blocking eligibility correctly applied | PASS |
| P15 T2 reconciliation compatibility assessed | PASS |
| P16 T3 catalog compatibility assessed | PASS |
| P17 security / credential privilege assessed | PASS |
| P18 provenance / audit assessed | PASS |
| P19 debt / complexity assessed | PASS |
| P20 comparison F01–F24 complete | PASS |
| P21 recommendation remains non-decision | PASS |
| P22 T4-T3 reserve preserved | PASS |
| P23 policy/MONITOR/E1 untouched | PASS |
| P24 project/runtime mutations zero | PASS |

---

## Reserves preserved

| Reserve | Status |
|---|---|
| R-T7-OP-EXPECTED-MODE-CAS-01 | CLOSED |
| R-T7-OP-TARGET-BINDING-01 | CLOSED |
| R-T7-SHADOW-OBS-01 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY |
| R-QA-T7-C08-SCENARIO-01 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY |
| R-T4-T3-SYNC-01 | OPEN BEFORE MONITOR |

---

## Recommendation (non-décisionnelle)

**RECOMMENDATION ONLY — MORRIS DECIDES.**

PREFERRED PATH CANDIDATE: **A1 BILLED (OpenAI Costs → T2 → T4)** after a bounded period-level identity contract.
Do not select B alone for T4.
Treat C as justified later lifecycle, not the minimal first increment.
Do not create/load Admin key in this cycle.

Never: SELECTED ARCHITECTURE · POLICY SELECTED · T4-T3 CLOSED.

---

## Morris decisions required

1. ACCEPT / REJECT / HOLD preferred candidate A1.
2. If ACCEPT directionally: authorize a **separate** cycle for period-level BILLED identity contract (+ later Critical ingestion/credential GO).
3. Decide whether early estimate visibility (B/C) is needed before billed lands — default recommendation: **defer**.
4. Keep SHADOW rev1 · no policy · no MONITOR · no E1.

---

## Unique verdict

T7 FINANCIAL EVIDENCE PATH ASSESSMENT PASS —
CYCLE 6 STANDARD —
FINANCIAL EVIDENCE PATHS COMPARED —
PATH A1 FEASIBLE_WITH_BOUNDED_CONTRACT_INCREMENT —
PATH A2 BLOCKED_TODAY_SOURCE_ABSENT —
PATH B SUPPORTIVE_ONLY_NOT_T4_ELIGIBLE_ALONE —
PATH C JUSTIFIED_LIFECYCLE_OPTIONAL_FOR_FIRST_T4_EVIDENCE —
T4 BLOCKING-ELIGIBILITY CONTRACT PRESERVED —
OPENAI BILLING GRANULARITY / PRIVILEGE IMPACT ASSESSED —
PREFERRED PATH CANDIDATE A1 —
RECOMMENDATION ONLY / MORRIS DECIDES —
MINIMAL NEXT INCREMENT DEFINED —
R-T4-T3-SYNC-01 REMAINS OPEN BEFORE MONITOR —
POLICY NOT SELECTED —
SHADOW KEPT ACTIVE —
NO PROVIDER / COSTS / USAGE API CALL —
NO RUNTIME MUTATION —
NO PROJECT MUTATION —
MONITOR NOT ACTIVATED —
E1 NOT AUTHORIZED —
READY FOR CHATGPT VALIDATION / MORRIS PATH DECISION —
HANDOFF REMOTE VERIFIED.

---

## Temporary files — full contents

### `.tmp-sfia-review/t7-financial-evidence-path/analysis-notes.json`

```json
{
  "cycle": "6 Standard \u2014 Financial Evidence Path Assessment",
  "granularity_gap_verdict": "PARTIAL \u2014 additional bounded contract required",
  "path_a1": "FEASIBLE WITH CONTRACT INCREMENT for period-level BILLED identity; OpenAI Costs EXTERNAL_CURRENT_PROVIDER_EVIDENCE requires Admin-class credential; maps project/time/line_item money but not run/correlation",
  "path_a2": "PATH_A2_SOURCE=ABSENT \u2014 Responses tokens are API_USAGE not PROVIDER_OBSERVED money; no monetary provider-observed adapter in repo",
  "path_b": "estimateUsageCost + price catalog EXIST but DORMANT in T7 runtime; no product estimated cost-event producer; catalog empty; PARAMETRIC_ESTIMATE never blocking-eligible \u2192 NOT SUFFICIENT ALONE FOR T4",
  "path_c": "JUSTIFIED by Git (reconcile header + unit test estimated\u2192observed\u2192billed append-only); T4 remains SoT-safe; implementation gaps: catalog+estimated producer + authoritative ingestion",
  "preferred_path_candidate": "A1 \u2014 BILLED via OpenAI Costs into T2 reconcile \u2192 T4 projection (after period-level identity contract)",
  "b_alone_for_t4": false,
  "hybrid_justified": "YES as lifecycle, OPTIONAL for first T4-eligible evidence; A1 alone is sufficient for blocking-eligible money"
}
```

### `.tmp-sfia-review/t7-financial-evidence-path/runtime-ro-result.json`

```json
{
  "ok": true,
  "READ_ONLY_MUTATIONS": 0,
  "FINGERPRINT": "7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331",
  "FINGERPRINT_MATCH": true,
  "SAFE_IDENTITY": {
    "hostname": "ep-dry-shape-b1fabcbm.c-5.eu-central-1.aws.neon.tech",
    "port": 5432,
    "database": "neondb"
  },
  "ROLLOUT": {
    "ROW_EXISTS": true,
    "MODE": "SHADOW",
    "REVISION": 1,
    "UPDATED_AT": "2026-08-09T18:50:15.239Z"
  },
  "USAGE_EVENT_COUNT": 4,
  "COST_EVENT_COUNT": 0,
  "PRICE_CATALOG_ENTRY_COUNT": 0,
  "ENFORCEMENT_PROJECTION_COUNT": 0,
  "POLICY_SOURCE_GIT": "EMPTY Object.freeze({})"
}
```

### `.tmp-sfia-review/t7-financial-evidence-path/runtime-ro-stderr.txt` (sanitized)

```
(node:852) Warning: SECURITY WARNING: The SSL modes 'prefer', 'require', and 'verify-ca' are treated as aliases for 'verify-full'.
In the next major version (pg-connection-string v3.0.0 and pg v9.0.0), these modes will adopt standard libpq semantics, which have weaker security guarantees.

To prepare for this change:
- If you want the current behavior, explicitly use 'sslmode=verify-full'
- If you want libpq compatibility now, use 'uselibpqcompat=true&sslmode=require'

See https://www.postgresql.org/docs/current/libpq-ssl.html for libpq SSL mode definitions.
(Use `node --trace-warnings ...` to show where the warning was created)
```

### `.tmp-sfia-review/t7-financial-evidence-path/runtime-ro-precheck.ts`

```typescript
import { createRequire } from "node:module";
import {
  assertExpectedTargetFingerprintMatch,
  deriveFinOpsT7TargetIdentity,
} from "../../projects/sfia-studio/app/lib/oa/finops/server/finOpsT7TargetIdentity.ts";
const require = createRequire(new URL("../../projects/sfia-studio/app/package.json", import.meta.url));
const { Pool } = require("pg") as typeof import("pg");
const PROJECT_ID = "sfia-studio-ops1";
const EXPECTED_FP = "7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331";
async function main() {
  const url = process.env.DATABASE_URL_DIRECT?.trim() ?? "";
  if (!url) throw new Error("DATABASE_URL_DIRECT missing");
  const id = deriveFinOpsT7TargetIdentity(url);
  assertExpectedTargetFingerprintMatch(id.fingerprint, EXPECTED_FP);
  const pool = new Pool({ connectionString: url, max: 1 });
  const client = await pool.connect();
  try {
    await client.query("BEGIN READ ONLY");
    const rollout = await client.query(`SELECT mode, revision, updated_at FROM finops_rollout_config WHERE project_id=$1`, [PROJECT_ID]);
    const cost = await client.query(`SELECT COUNT(*)::int AS c FROM finops_cost_event WHERE project_id=$1`, [PROJECT_ID]);
    const catalog = await client.query(`SELECT COUNT(*)::int AS c FROM finops_price_catalog_entry`);
    const proj = await client.query(`SELECT COUNT(*)::int AS c FROM finops_enforcement_projection WHERE project_id=$1`, [PROJECT_ID]);
    const usage = await client.query(`SELECT COUNT(*)::int AS c FROM finops_usage_event WHERE project_id=$1`, [PROJECT_ID]);
    await client.query("COMMIT");
    const row = rollout.rows[0];
    console.log(JSON.stringify({
      ok: true,
      READ_ONLY_MUTATIONS: 0,
      FINGERPRINT: id.fingerprint,
      FINGERPRINT_MATCH: true,
      SAFE_IDENTITY: { hostname: id.hostname, port: id.port, database: id.database },
      ROLLOUT: { ROW_EXISTS: (rollout.rowCount??0)>0, MODE: row?.mode ?? null, REVISION: row ? Number(row.revision) : null, UPDATED_AT: row?.updated_at ?? null },
      USAGE_EVENT_COUNT: usage.rows[0].c,
      COST_EVENT_COUNT: cost.rows[0].c,
      PRICE_CATALOG_ENTRY_COUNT: catalog.rows[0].c,
      ENFORCEMENT_PROJECTION_COUNT: proj.rows[0].c,
      POLICY_SOURCE_GIT: "EMPTY Object.freeze({})",
    }, null, 2));
  } finally {
    client.release();
    await pool.end().catch(()=>undefined);
  }
}
main().catch((e)=>{ console.error(JSON.stringify({ok:false,message:String(e&&e.message?e.message:e)})); process.exit(1); });

```
