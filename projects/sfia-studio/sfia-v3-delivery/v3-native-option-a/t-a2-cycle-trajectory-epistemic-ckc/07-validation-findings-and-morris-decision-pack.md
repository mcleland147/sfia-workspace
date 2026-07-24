# 07 — Validation findings and Morris decision pack

| Field | Value |
|-------|-------|
| **Gate** | `GO VALIDATION DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` |
| **Date** | 2026-07-24 (Europe/Paris) |
| **HEAD start** | `633d46389f650c03a5d4c113fced41f106c2067b` |
| **Scope** | Prove defects with adversarial tests; fix only proven T-A2-scoped defects |
| **Morris** | **NOT VALIDATED** — recommendations only |

## Evidence method

1. Baseline: `__tests__/oa/cycle` → **26 PASS**
2. Adversarial suite added → **7 FAIL** (proven defects) + 15 PASS
3. Fixes in `lib/oa/cycle/**` only
4. Final: `__tests__/oa/cycle` → **48 PASS**

## Findings

| ID | Title | Proven? | Blocker? | Fixed? | Evidence (test) |
|----|-------|---------|----------|--------|-----------------|
| **B1** | TOCTOU: validate then await then clone `request.steps` | Yes | Yes | Yes | `ignores cycle injected after clone-before-validate` / `ignores orphan dep injected after clone-before-validate` |
| **B3** | Orphan deps accepted (DFS skipped unknowns) | Yes | Yes | Yes | `rejects dependency pointing to non-existent stepId` |
| **B3b** | Self-deps | Already rejected via cycle DFS | No | N/A (explicit `self_dependency` added) | `rejects self-dependency` |
| **B4** | Propose `stale`/`superseded` orphans current pointer | Yes | Yes | Yes | `refuses stale status…` / `refuses superseded status on propose` |
| **CKC** | Hostile `executionAuthority:true` / invalid fallback | Already guarded | Yes if regress | Already fixed | `returns CKC_UNAVAILABLE when resolver grants…` / `…invalid fallbackPolicy` |
| **Q** | Qualification edges (Critical wins, Light→Standard, Critical justification, Capitalization) | Yes (already correct) | No | N/A | Qualification edges describe block |
| **R** | `failNextSave` cycle/trajectory/epistemic rollback | Yes (already correct) | No | N/A | failNextSave rollback describe block |
| **I** | Returned objects aliased into store | Epistemic + prior cycle/traj covered | No | N/A | Immutability + existing anti-aliasing |
| **C** | Concurrent propose same `expectedVersion` | Yes (already correct) | No | N/A | `one success and one TRAJECTORY_VERSION_CONFLICT…` |
| **Crit** | Critical stays `proposed`; `isMorrisDecision:false` | Yes (already correct) | No | N/A | `never auto-acks Critical…` |
| **E** | Same-id Hypothesis/Observation → DecisionRef overwrite | Yes | Yes | Yes | `forbids Hypothesis→DecisionRef via same-id…` / `forbids Observation→DecisionRef…` |
| **B5** | LPS `reservationIds` (etc.) carry-forward on T-A2 link | Investigated | No (T-A1 debt) | **OPEN RESERVE** | `documents that T-A2 trajectory link does not invent reservationIds API` |
| **R1** | Cross-store Project↔Cycle atomicity | Accepted | No | Reserve | Prior docs; no distributed txn invented |

## Fixes applied (T-A2 only)

1. **Clone-first** in `ProposeTrajectoryVersion` and `CreateInitialTrajectory` before validate/persist.
2. **Orphan + self dependency** rejection in `validateTrajectorySteps`.
3. **Propose status allowlist** `candidate|validated|active` via `validateProposeTrajectoryStatus`.
4. **Same-id promotion guard** in `assertNoHypothesisDecisionPromotion` (Hypothesis/Observation → DecisionRef).

## B5 / R1 reserves (not fixed here)

| ID | Reserve | Why not fixed in T-A2 |
|----|---------|------------------------|
| **B5 / R6** | T-A1 `AppendLivingProjectStateVersion` does not accept or carry `reservationIds` / `contradictionIds` / `evidenceIds` / … from current LPS | Fix requires T-A1 append core; T-A2 callers cannot overlay fields the API omits. Prefer OPEN RESERVE over T-A1 scope creep. |
| **R1** | No strict cross-store atomicity Project↔Cycle | Accepted foundation reserve; in-memory dual mutex only. |

## Recommended Morris decisions (candidates — not consumed)

| ID | Recommendation |
|----|----------------|
| **T-A2-D01** | **ACCEPT** — module isolation held under adversarial suite |
| **T-A2-D02** | **ACCEPT** — Capitalization via `cycleTypeId` confirmed |
| **T-A2-D03** | **ACCEPT** — qualification edges confirmed |
| **T-A2-D04** | **ACCEPT** — Critical stays `proposed` |
| **T-A2-D05** | **ACCEPT WITH RESERVE** — versioning + concurrency OK; B1/B3/B4 fixed; R1/B5 remain |
| **T-A2-D06** | **ACCEPT** — in-memory + ports; failNextSave rollback proven |
| **T-A2-D07** | **ACCEPT** — hostile CKC denied; absent CKC guidance-only |
| **T-A2-D08** | **ACCEPT** — detail codes + mapping unchanged; new causes under existing codes |
| **T-A2-D09** | **ACCEPT** — size cap unchanged |
| **T-A2-D10** | **ACCEPT WITH RESERVE** — foundation-only; B5/R1 reserves; no UI/T-A3 |

## Verdict candidate (allowed list)

**SFIA STUDIO V3-NATIVE OPTION A T-A2 CYCLE/TRAJECTORY/EPISTEMIC/CKC VALIDATED WITH RESERVES — MORRIS DECISION REQUIRED**

## Anti-claims

Pas MERGED · Pas PUSH · Pas PR · Pas Morris validated · Pas T-A3 AUTHORIZED · Pas DATABASE SELECTED · Pas B5 fixed in T-A1
