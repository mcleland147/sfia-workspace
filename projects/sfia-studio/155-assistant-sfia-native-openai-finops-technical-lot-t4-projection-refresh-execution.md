# 155 — FinOps Technical Lot T4 — Enforcement Projection Refresh — Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/155-assistant-sfia-native-openai-finops-technical-lot-t4-projection-refresh-execution.md`
**Cycle:** 8 — Delivery / implémentation — FinOps Technical Lot T4 Enforcement Projection Refresh
**Profil:** Critical
**Typologie:** EVOL / CODE / TEST / DOC

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Canonical post-T2 T4 refresh orchestration created (`refreshEnforcementAfterT2`) | **TRUE** |
| Reuses `rebuildEnforcementProjection` (no duplicated SoT/Money/lock/replace) | **TRUE** |
| Unit UR-01..UR-08 proven | **TRUE** |
| PostgreSQL PRF-01..PRF-08 proven on ephemeral local Postgres | **TRUE** |
| T2 core / `evaluateAfterT2` / `rebuildEnforcementProjection` unmodified | **TRUE** |
| Real product runtime T2 consumer wired | **FALSE** (Case B — none exists) |
| Reserve `R-T4-PROJECTION-REFRESH-01` CLOSED | **FALSE** — remains OPEN (Case B) |
| Scheduler / cron / pre-provider rebuild | **FALSE** |
| T7 / SHADOW / MONITOR / E1 activated | **FALSE** |
| Thresholds 15/20/25/30 / monetary policy | **FALSE** |
| New migration / new port | **FALSE** |
| Neon / provider-real | **FALSE** |
| Project commit / push / PR | **FALSE** |

**Anti-claim (mandatory):**

```text
T4 PROJECTION REFRESH ORCHESTRATION DELIVERED AND TESTED —
NO AUTOMATIC RUNTIME FRESHNESS CLAIM —
SHADOW NOT ACTIVATED.
```

**Canonical wrapper Ready ≠ Runtime consumer wired ≠ SHADOW.**

---

## B. GO Morris / contextual resolution

**User utterance:** `ok go`

**Contextual resolution:**

```text
GO Delivery T4 projection refresh.
```

**Consumed:** Morris `D-T7-PROJECTION-REFRESH-GATE-01` = **A SELECTED** — refresh from authoritative T2 mutation/reconciliation frontiers, **BEFORE SHADOW**.

**Authorized:** canonical post-T2 T4 refresh orchestration reusing `rebuildEnforcementProjection`; unit + PG tests; doc 155; Full pack; handoff L3. Case A may MODIFY max 2 files under `finops/server/**` only if real runtime wiring proven necessary.

**Not authorized:** T2 core · `evaluateAfterT2` · `rebuildEnforcementProjection` · `evaluateFinOpsEnforcement` · execution-run · migrations · ports · T3/T6/T7/T5 · 150/154 · scheduler · pre-provider rebuild · SHADOW/MONITOR/E1 · thresholds 15/20/25/30 · project commit/push/PR/merge.

**Sequence context (SELECTED):**

```text
T7 Decisions Applied
→ T6 runtime composition (CLOSED ON MAIN)
→ T4 projection refresh   ← this Delivery
→ T7 foundation default-OFF
→ dedicated activation QA
→ SHADOW …
```

---

## C. Horodatage CEST + UTC

| Event | Timestamp |
|-------|-----------|
| Delivery work (doc 155) | 2026-08-08 09:00:36 CEST (+0200) / 2026-08-08 07:00:36 UTC |
| GO utterance (session) | 2026-08-08 ~08:55 CEST (+0200) |

---

## D. Git Truth

| Field | Value |
|-------|-------|
| Repo | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t4-projection-refresh` |
| Branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t4-projection-refresh` |
| HEAD | `7f5f0c2d8b26dc094e6bae90d268697d2cb93e42` |
| origin/main | `7f5f0c2d8b26dc094e6bae90d268697d2cb93e42` |
| Upstream project push | **none** (intentional) |
| Template SHA | `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| Handoff tip (before) | `043d5f8930979f15d7f1139754d2ae975d2948d8` |
| Handoff blob (before) | `1118de76a6bb23c56c1d6923592778d3376567c1` |
| Handoff commit (before) | `docs(review-handoff): publish T6 post-merge` |

Handoff pre-checks confirmed:

```text
R-T6-RUNTIME-COMPOSITION-01 =
CLOSED ON MAIN

R-T4-PROJECTION-REFRESH-01 =
OPEN — SELECTED GATE BEFORE SHADOW (next gate still NON REÇU)

SHADOW =
NOT ACTIVATED
```

---

## E. Sources

| Source | Role |
|--------|------|
| Handoff tip `043d5f8…` / blob `1118de76…` | Post-merge T6 state; R-T6 CLOSED; R-T4 OPEN |
| Historical T7 decisions commit `e6e026c…` / blob `79e29f7…` | `D-T7-PROJECTION-REFRESH-GATE-01` A SELECTED |
| Docs 150 / 154 (read-only) | T4 foundation + T6 composition baselines |
| `evaluateAfterT2.ts` | Post-T2 wrapper pattern analogue (not modified) |
| `rebuildEnforcementProjection.ts` | Reused T4 rebuild primitive (not modified) |
| Local discovery rg evidence | `.tmp-sfia-review/t4-projection-refresh/discovery-*.txt` |

---

## F. T7 selected decision provenance

151–153 are **not** on main. Provenance read from handoff history:

- Commit: `e6e026c9629535e5a9d8852f4613acf473b417e0`
- Path: `sfia-review-handoff/latest-chatgpt-review.md`
- Blob: `79e29f7df68d4c522610c5b63377b3bf37b4e3f0`

Confirmed:

```text
D-T7-PROJECTION-REFRESH-GATE-01 =
A SELECTED —
REFRESH FROM AUTHORITATIVE T2 MUTATION / RECONCILIATION FRONTIERS —
BEFORE SHADOW.
```

Architecture SELECTED ≠ Delivery authorized ≠ activation authorized. This cycle delivers the orchestration only.

---

## G. T2 mutation frontier discovery

Authoritative frontiers identified:

| Frontier | Role |
|----------|------|
| `recomputeAggregates` | Rebuilds project/period aggregates from cost events |
| `reconcileProjectPeriod` | On-demand bounded reconciliation; may call `recomputeAggregates` once internally |
| `insertCostEvent` | Append-only cost history (port method; used by reconcile + tests) |

No additional authoritative runtime mutation frontier discovered beyond these public application boundaries.

Coverage design: both public T2 success paths are wrapped once each:

- `recomputeAggregatesThenRefreshEnforcementProjection`
- `reconcileProjectPeriodThenRefreshEnforcementProjection`

Reconcile path refreshes T4 **exactly once** after outer reconcile success (no double rebuild despite internal A1 recompute).

---

## H. Runtime consumer discovery

Exhaustive classification (under `projects/sfia-studio/app`, excl. tests):

| Call-site | Classification |
|-----------|----------------|
| `application/recomputeAggregates.ts` | definition |
| `application/reconcileProjectPeriod.ts` | definition (+ internal recompute) |
| `application/evaluateAfterT2.ts` | reusable application wrapper (T3) |
| `application/rebuildEnforcementProjection.ts` | definition (T4 foundation) |
| `server/composeFinOpsRuntime.ts` | server composition — **T1 capture + T6 audit only**; **no T2 recompute/reconcile consumer** |
| `__tests__/oa/finops/**` | unit / integration / fixture |
| Outside `lib/oa/finops/**` | **no** product-runtime imports of recompute/reconcile/rebuild |

**Q1 — real runtime T2 consumer?** **NO** → **Case B**.

**Q2 — frontiers covered?** Yes for canonical public T2 APIs; no uncovered runtime mutation frontier.

**Q3 — ordering?** Refresh after T2 success return; T4 uses its own short exclusive lock via `rebuildEnforcementProjection`. No nested T2→T4 lock.

No Case A server wiring performed (would invent a false consumer).

---

## I. Architecture / wrapper contract

**CREATE:** `projects/sfia-studio/app/lib/oa/finops/application/refreshEnforcementAfterT2.ts`

**Deps:** `aggregates`, `reconciliation`, `projection`, `nowIso` (existing ports only).

**APIs:**

- `recomputeAggregatesThenRefreshEnforcementProjection`
- `reconcileProjectPeriodThenRefreshEnforcementProjection`

**Result:** `{ t2, t4Refresh, t4RefreshAttempted }`

**Pattern:** T4-owned post-T2 wrapper analogue to `evaluateAfterT2` — T2 does not depend on T4.

---

## J. Failure isolation

| Scenario | Behavior |
|----------|----------|
| T2 failed | `t4RefreshAttempted=false`, `t4Refresh=null`, no rebuild |
| T2 success + T4 success | both outcomes returned |
| T2 success + T4 failed result | T2 success preserved; T4 failure separate; no throw |
| Unexpected T4 throw | sanitized `FINOPS_T4_REFRESH_THROWN`; T2 success preserved; no secret leakage |

---

## K. Transaction / lock ordering

Target sequence proven (PRF-07 instrumentation):

```text
t2_enter → t2_exit → t4_enter → t4_exit
```

T4 exclusive project/period serialization is acquired only after T2 exclusive rebuild releases. No lock across provider I/O. Production locking logic unmodified.

---

## L. Freshness evidence contract

Existing fields only:

- `rebuildVersion` (increments on successful refresh — PRF-05)
- `rebuiltAt` (matches wrapper `nowIso` — PRF-05)
- Projection amounts match authoritative cost events after mutation (PRF-01..05)
- Obsolete currency rows replaced per existing replace contract (PRF-08)

No new freshness column / migration.

---

## M. Exact project manifest

**CREATE (4):**

1. `projects/sfia-studio/app/lib/oa/finops/application/refreshEnforcementAfterT2.ts`
2. `projects/sfia-studio/app/__tests__/oa/finops/t4.projection-refresh.unit.test.ts`
3. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts`
4. `projects/sfia-studio/155-assistant-sfia-native-openai-finops-technical-lot-t4-projection-refresh-execution.md`

**MODIFY:** none (Case B).

**Forbidden paths:** unchanged (T2 core, evaluateAfterT2, rebuild, evaluateFinOpsEnforcement, execution-run, migrations, ports, 150/154, package manifests, .github, method, prompts).

---

## N. Unit tests

File: `t4.projection-refresh.unit.test.ts` — **UR-01..UR-08 PASS**.

| ID | Assertion |
|----|-----------|
| UR-01 | T2 recompute fail → no refresh |
| UR-02 | T2 recompute success → rebuild once, exact project/period |
| UR-03 | T4 failed result → T2 success preserved |
| UR-04 | Unexpected throw → sanitized FinOps-side failure |
| UR-05 | Reconcile fail → no refresh |
| UR-06 | Reconcile success → exactly one refresh |
| UR-07 | No T3 side effect |
| UR-08 | No rollout / threshold / provider call |

---

## O. PostgreSQL tests

File: `postgres/t4.projection-refresh.integration.test.ts` — **PRF-01..PRF-08 PASS** on ephemeral local Postgres (`127.0.0.1:55435`, never Neon).

| ID | Assertion |
|----|-----------|
| PRF-01 | Reconciliation mutation → BILLED projection |
| PRF-02 | PROVIDER_OBSERVED reflected |
| PRF-03 | Non-blocking SoTs excluded |
| PRF-04 | USD/EUR isolation, no FX |
| PRF-05 | Subsequent mutation refreshes + version++ |
| PRF-06 | T4 fail isolates; T2 durable |
| PRF-07 | T2 exit before T4 enter |
| PRF-08 | Obsolete currency replaced |

---

## P. Regression tests

Reran green:

- T2 aggregate/reconciliation unit + PG
- T4 enforcement unit + PG foundation
- T3 `evaluateAfterT2` coverage (`t3.alert-review.unit.test.ts`)
- New refresh unit + PG

Full FinOps suite + typecheck/lint/build/migrate:up/test:db/npm test recorded in evidence under `.tmp-sfia-review/t4-projection-refresh/`.

---

## Q. Reserve assessment Case A/B/C

**Case B** (no real runtime consumer exists).

Canonical wrapper + tests delivered.

```text
R-T4-PROJECTION-REFRESH-01 =
OPEN —
CANONICAL POST-T2 T4 REFRESH ORCHESTRATION DELIVERED AND TESTED —
RUNTIME CONSUMER / T7 FOUNDATION WIRING STILL REQUIRED BEFORE SHADOW.
```

**Verdict:**

```text
DELIVERY COMPLETE WITH RESERVE OPEN.
```

Never closed by convention — runtime wiring not proven.

---

## R. Carried reserves

| Reserve | Status |
|---------|--------|
| `R-T6-RUNTIME-COMPOSITION-01` | **CLOSED ON MAIN** |
| `R-T4-PROJECTION-REFRESH-01` | **OPEN** — Case B wording above |
| `R-T4-T3-SYNC-01` | OPEN — SELECTED GATE BEFORE MONITOR |
| `R-PR-T2-API-01` | OPEN MINOR |
| T6-ext-T2 | EXCLUDED |
| T6-ext-T3T4 | NOT AUTHORIZED — REQUIRED BEFORE E1 |
| Calibration | REQUIRED — BEFORE MONITOR USING REAL AMOUNTS |
| Product IAM | NOT_SELECTED — REQUIRED BEFORE E1 |
| Privileged Morris mutations | DEFERRED |
| Intermediate product literal | DEFERRED |
| REVIEW_REQUIRED vs WOULD_BLOCK | STILL DEFERRED |
| SHADOW | NOT ACTIVATED |

---

## S. Non-scope

- T7 foundation / flag store / mode adapter
- SHADOW / MONITOR / E1 activation
- T3 sync with T4
- T5 override / IAM
- Scheduler / cron
- Pre-provider rebuild
- Monetary thresholds / calibration amounts 15/20/25/30
- Product routes / endpoints
- Neon / provider-real
- Project git publish

---

## T. Git final state

| Field | Value |
|-------|-------|
| Branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t4-projection-refresh` |
| HEAD | `7f5f0c2d8b26dc094e6bae90d268697d2cb93e42` (unchanged = origin/main) |
| Staged | empty |
| Project commits | none |
| Project push / PR | none |
| Untracked creates | 4 CREATE paths + `.tmp-sfia-review/` evidence |

---

## U. Verdict

```text
T4 PROJECTION REFRESH VALIDATED — RESERVE OPEN — T7 RUNTIME WIRING STILL REQUIRED
```

```text
PROJECTION REFRESH ORCHESTRATION DELIVERY COMPLETE WITH RESERVE OPEN —
CANONICAL POST-T2 T4 REFRESH ORCHESTRATION DELIVERED AND TESTED —
RUNTIME CONSUMER / T7 FOUNDATION WIRING STILL REQUIRED BEFORE SHADOW —
SHADOW NOT ACTIVATED.
```
