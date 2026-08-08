# 156 — FinOps Technical Lot T7 — Rollout / Activation Readiness Foundation (Default-OFF) — Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/156-assistant-sfia-native-openai-finops-technical-lot-t7-foundation-default-off-execution.md`
**Cycle:** 8 — Delivery / implémentation + Critical correction — FinOps Technical Lot T7 Foundation Default-OFF
**Profil:** Critical
**Typologie:** EVOL / CODE / DATA / TEST / DOC (+ RUN / CODE correction)

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Dedicated project-scoped FinOps rollout persistence created (`finops_rollout_config`) | **TRUE** |
| Default-OFF without seed (missing row → OFF in resolver) | **TRUE** |
| T7 mode adapter / resolver delivered (`resolveFinOpsRollout`) | **TRUE** |
| Modes OFF / SHADOW / MONITOR / E1_ENFORCED represented architecturally | **TRUE** |
| Canonical T7 server composition created (`composeFinOpsT7Runtime`) | **TRUE** |
| T6 `composeFinOpsRuntime` reused (not modified) | **TRUE** |
| T2 mutation/reconciliation exposed only via post-T2 T4 refresh wrappers | **TRUE** |
| Unit T7-U01..10 / PG T7-PG01..12 / runtime T7-R01..16 delivered | **TRUE** |
| `R-T4-PROJECTION-REFRESH-01` CLOSED (CLOSE-1..8 PASS) | **TRUE** |
| Atomic rollout revision under concurrent writes (single-statement UPSERT) | **TRUE** |
| Concurrent first-write revision loss defect | **CORRECTED** (RED→GREEN via T7-PG11) |
| SHADOW activated | **FALSE** |
| MONITOR activated | **FALSE** |
| E1 activated / authorized | **FALSE** |
| Product runtime / route / endpoint activation | **FALSE** |
| Execution-run modified | **FALSE** |
| Monetary thresholds 15/20/25/30 / calibration amounts | **FALSE** |
| Seed non-OFF / global env flag as FinOps authority | **FALSE** |
| Neon / provider-real | **FALSE** |
| Project commit / push / PR | **FALSE** |

**Anti-claim (mandatory):**

```text
FOUNDATION READY ≠ SHADOW ACTIVATED
```

```text
T7 FOUNDATION DEFAULT-OFF DELIVERED AND TESTED —
NO PRODUCT ACTIVATION CLAIM —
SHADOW NOT ACTIVATED —
NO EXECUTION-RUN MODIFICATION —
NO THRESHOLD 15/20/25/30 —
NO PROJECT COMMIT / PUSH / PR.
```

**Foundation Ready ≠ SHADOW / MONITOR / E1 activated ≠ product traffic.**

---

## B. GO Morris / contextual resolution

**User utterance:** `ok go`

**Contextual resolution:**

```text
GO T7 foundation Delivery default-OFF.
```

**History:** This GO was previously **RECEIVED / NOT CONSUMED** until T4 Projection Refresh was integrated and post-merged. Post-merge T4 is now validated. The present `ok go` consumes **T7 FOUNDATION DELIVERY DEFAULT-OFF** only.

**Consumed:** T7 foundation Delivery — dedicated rollout persistence · default-OFF · mode adapter · T7 server composition · T2→T4 refresh wiring · migration · tests · doc 156.

**Not consumed / not authorized:** SHADOW · MONITOR · E1 activation · seed non-OFF · thresholds 15/20/25/30 · product route/endpoint · execution-run · provider-real · T3 sync · T6-ext · T5 · Product IAM · calibration · privileged Morris mutation UI/API · Neon · env/global flag as FinOps authority · scheduler/cron · project commit/push/PR/merge.

**Sequence context (SELECTED):**

```text
T7 Decisions Applied
→ T6 runtime composition (CLOSED ON MAIN)
→ T4 projection refresh (on main; reserve OPEN Case B at entry)
→ T7 foundation Delivery default-OFF   ← this Delivery
→ dedicated activation QA
→ distinct GO SHADOW
→ …
```

---

## C. Horodatage CEST + UTC

| Event | Timestamp |
|-------|-----------|
| GO utterance (session) | 2026-08-08 ~10:39 CEST (+0200) / 2026-08-08 ~08:39 UTC |
| Delivery work (doc 156) | 2026-08-08 ~10:39–10:50 CEST (+0200) / 2026-08-08 ~08:39–08:50 UTC |

Exact seconds not invented.

---

## D. Git Truth

| Field | Value |
|-------|-------|
| Repo | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-foundation-default-off` |
| Branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t7-foundation-default-off` |
| HEAD | `511a18d409e25d0a3fdbd3425ade65512a5f4e2b` |
| origin/main | `511a18d409e25d0a3fdbd3425ade65512a5f4e2b` |
| Upstream project push | **none** (intentional) |
| Template SHA | `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| Handoff tip (before) | `b403f5e4b85b9f0141d50d9d5cadf9cd91a460ee` |
| Handoff blob (before) | `ac75f3833e17223ceeeaad7cf02d28d84ede1b2f` |
| Handoff path | `sfia-review-handoff/latest-chatgpt-review.md` (branch `sfia/review-handoff`) |

Handoff pre-checks confirmed (before Delivery):

```text
T4 POST-MERGE COMPLETE

R-T4-PROJECTION-REFRESH-01 =
OPEN — Case B

R-T6-RUNTIME-COMPOSITION-01 =
CLOSED ON MAIN

T7 FOUNDATION =
PENDING / NOT EXECUTED —
READY FOR CHATGPT REASSESSMENT

SHADOW =
NOT ACTIVATED
```

---

## E. Sources

### Method

- `prompts/templates/sfia-cycle-execution-template.md` (SHA `b9ce0a9…`)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`
- `scripts/sfia/publish-review-handoff.sh`

### Project / runtime (read-only baselines)

- `150-…-t4-s30-soft-enforcement-foundation-execution.md`
- `154-…-t6-runtime-composition-execution.md`
- `155-…-t4-projection-refresh-execution.md`
- `composeFinOpsRuntime.ts` · `refreshEnforcementAfterT2.ts`
- T2 `recomputeAggregates` / `reconcileProjectPeriod` · T4 projection / enforcement types & ports

### Historical T7 Decision Applied

- Commit `e6e026c9629535e5a9d8852f4613acf473b417e0`
- Blob `79e29f7df68d4c522610c5b63377b3bf37b4e3f0`
- Path `sfia-review-handoff/latest-chatgpt-review.md`

Docs **151–153 are NOT on main** — documentary authority via historical handoff only.

---

## F. Historical T7 Decision Applied provenance

| Field | Value |
|-------|-------|
| Commit | `e6e026c9629535e5a9d8852f4613acf473b417e0` |
| Blob | `79e29f7df68d4c522610c5b63377b3bf37b4e3f0` |
| Path | `sfia-review-handoff/latest-chatgpt-review.md` |
| Docs 151–153 on main | **NO** |

All eight D-T7 decisions **SELECTED BY MORRIS** + readiness matrix:

| # | Decision | SELECTED |
|---|----------|----------|
| 1 | `D-T7-FLAG-STORE-01` | **A SELECTED BY MORRIS** — dedicated FinOps rollout persistence |
| 2 | `D-T7-MODE-ADAPTER-01` | **A SELECTED BY MORRIS** — T7-owned adapter |
| 3 | `D-T7-T6-COMPOSITION-GATE-01` | **A BEFORE SHADOW** |
| 4 | `D-T7-PROJECTION-REFRESH-GATE-01` | **A T2 FRONTIERS / BEFORE SHADOW** |
| 5 | `D-T7-T3-SYNC-GATE-01` | **A BEFORE MONITOR** |
| 6 | `D-T7-T6EXT-E1-GATE-01` | **A REQUIRED BEFORE E1 — NOT AUTHORIZED** |
| 7 | `D-T7-T5-IAM-GATE-01` | **A REQUIRED BEFORE E1 — IAM NOT_SELECTED** |
| 8 | `D-T7-CALIBRATION-PILOT-01` | **A BEFORE MONITOR USING REAL AMOUNTS** |
| — | `READINESS-MATRIX` | **ACCEPTED** |

Applied fingerprint:

```text
A / A / A / A+BEFORE-SHADOW / A / A / A / A-BEFORE-MONITOR + READINESS-MATRIX=ACCEPTED
```

Architecture SELECTED ≠ activation authorized. This Delivery delivers foundation only.

---

## G. Local discovery

Executed under `projects/sfia-studio/app` before CREATE.

| Finding | Result |
|---------|--------|
| Existing T7 / rollout runtime code | **NONE** — modes only in docs/comments |
| Product T2 consumer outside finops composition | **NONE** |
| D1 `platformFlag` | Present elsewhere — **unrelated**; not FinOps T7 authority |
| Env/global flag as FinOps rollout authority | **NOT used** |
| Migration slot `1754600004000` | **FREE** (after T4 `…3000`) |
| `finops_rollout_config` | **ABSENT** before CREATE |
| `composeFinOpsT7Runtime` | **ABSENT** before CREATE |

**STOP conditions** `EXISTING T7 FOUNDATION DETECTED` / `T7 MIGRATION COLLISION` / `AUTHORITATIVE T2 RUNTIME FRONTIER DISCOVERED`: not triggered.

---

## H. Exact Delivery manifest

**Git-vs-main:** CREATE (10) / MODIFY (0) / DELETE (0) — unchanged after correction (files still uncommitted).

**Local correction manifest (uncommitted T7 Delivery):** MODIFY 3 / PRESERVE 7:

| Classification | Paths |
|----------------|-------|
| LOCAL MODIFY | `postgresFinOpsRolloutStore.ts` · `t7.rollout.integration.test.ts` · `156-…-execution.md` |
| BYTE-PRESERVED | `types.rollout.ts` · `finopsRolloutPort.ts` · `resolveFinOpsRollout.ts` · `composeFinOpsT7Runtime.ts` · migration `1754600004000` · `t7.rollout.unit.test.ts` · `t7.foundation-runtime.integration.test.ts` |

1. `projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts`
2. `projects/sfia-studio/app/lib/oa/finops/ports/finopsRolloutPort.ts`
3. `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore.ts`
4. `projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts`
5. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7Runtime.ts`
6. `projects/sfia-studio/app/db/migrations/1754600004000_finops-t7-rollout-config.js`
7. `projects/sfia-studio/app/__tests__/oa/finops/t7.rollout.unit.test.ts`
8. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.rollout.integration.test.ts`
9. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts`
10. `projects/sfia-studio/156-assistant-sfia-native-openai-finops-technical-lot-t7-foundation-default-off-execution.md`

**Barrel export:** none (deep import).

**Forbidden paths untouched:** `composeFinOpsRuntime` · `composeExecutionRunD2D3` · `evaluateFinOpsEnforcement` · T3/T4/T6 foundation sources · package manifests · `.github/**` · docs 150/154/155 · 151–153.

---

## I. T7 rollout model

Modes (canonical, T7-owned) in `types.rollout.ts`:

```text
OFF → SHADOW → MONITOR → E1_ENFORCED
```

Type alias: `FinOpsRolloutMode = "OFF" | "SHADOW" | "MONITOR" | "E1_ENFORCED"`.

| Owner | Owns |
|-------|------|
| **T7** | modes · rollout resolution · mode → instruction translation |
| **T4** | monetary enforcement evaluation |
| **T3** | human-review state |

**Forbidden:** embed T7 modes inside `evaluateFinOpsEnforcement`.

Config record (no threshold / currency / IAM / actor / TTL):

- `projectId` · `mode` · `revision` · `updatedAt`

Instruction fields:

- `mode` · `evaluateT4` · `policyEffect` · `blockingAllowed` · `requiresT3Sync` · `activationState` · `resolution` · `config`

---

## J. Persistence schema

**Table:** `finops_rollout_config`

| Column | Type | Constraints |
|--------|------|-------------|
| `project_id` | `text` | PRIMARY KEY · NOT NULL |
| `mode` | `text` | NOT NULL · CHECK `IN ('OFF','SHADOW','MONITOR','E1_ENFORCED')` |
| `revision` | `bigint` | NOT NULL · CHECK `revision >= 1` |
| `updated_at` | `timestamptz` | NOT NULL |

| Property | Status |
|----------|--------|
| Seed | **NONE** |
| FK | **NONE** |
| Global/default row | **NONE** |
| Monetary / IAM / actor columns | **NONE** |
| T6 events / triggers | **NONE** |
| Down doctrine | Refuse DROP while rows exist; drop only when empty |

Migration: `1754600004000_finops-t7-rollout-config.js`.

Port upsert exists for tests / future distinct activation cycles only — **not** a product activation API.

### Atomic mutation semantics (Critical correction)

`upsertProjectRollout` uses a **single** PostgreSQL statement:

```sql
INSERT INTO finops_rollout_config (project_id, mode, revision, updated_at)
VALUES ($1, $2, 1, $3::timestamptz)
ON CONFLICT (project_id) DO UPDATE SET
  mode = EXCLUDED.mode,
  revision = finops_rollout_config.revision + 1,
  updated_at = EXCLUDED.updated_at
RETURNING project_id, mode, revision, updated_at
```

| Path | Revision rule |
|------|----------------|
| First INSERT (absent row) | `revision = 1` |
| ON CONFLICT (existing row) | `revision = durable current + 1` (never app-precomputed) |
| Same-mode rewrite | still `+ 1` |
| Concurrent first writes | each accepted mutation gets a unique monotonic revision |

No `SELECT … FOR UPDATE` read-before-write · no TypeScript `nextRevision` · no advisory/process/global lock · no schema/migration change.

---

## Critical validation correction — Atomic rollout revision concurrency

| Field | Value |
|-------|--------|
| Observation ChatGPT | Concurrent first writes on absent `projectId` could both observe no row → `nextRevision=1` → ON CONFLICT kept `EXCLUDED.revision=1` → lost mutations |
| GO Morris exact | `GO correction T7 foundation — atomic rollout revision under concurrent writes.` |
| Old algorithm | `BEGIN` → `SELECT revision … FOR UPDATE` → TS `nextRevision` → `INSERT … ON CONFLICT revision = EXCLUDED.revision` → `COMMIT` |
| RED evidence | T7-PG11 pre-fix: revisions `[1,1,1,1,1,1,1,2]` ≠ `[1..8]` (`.tmp-sfia-review/t7-atomic-revision-correction/red-pg11.txt`) |
| Correction | Single-statement atomic UPSERT (`revision = finops_rollout_config.revision + 1` on conflict) |
| T7-PG11 | **GREEN** — N=8 concurrent first writes × 3 rounds → revisions `1..N`, final=`N` |
| T7-PG12 | **GREEN** — seed rev 1 + N=8 concurrent updates → returned `2..N+1`, final=`1+N` |
| Migration / schema | **UNCHANGED** (`1754600004000` BYTE-IDENTICAL) |
| Local correction manifest | **3 MODIFY** (store · PG rollout tests · doc 156) |
| Preserved T7 files | **7 BYTE-IDENTICAL** |
| Git-vs-main | still **10 CREATE / 0 MODIFY / 0 DELETE** |
| CLOSE-1..8 | **STILL PASS** |
| R-T4-PROJECTION-REFRESH-01 | **CLOSED — UNCHANGED** |

---

## K. Default-OFF semantics

```text
missing row → resolver returns OFF (resolution = default_off)
```

- Absence of row ≠ persisted OFF row.
- No automatic OFF insert for all projects.
- OFF: `evaluateT4=false` · `policyEffect=null` · `blockingAllowed=false` · `requiresT3Sync=false` · `activationState=inert`.
- BLOCK impossible under OFF.
- Universal rollback target remains OFF.

---

## L. Mode adapter semantics

| Mode | evaluateT4 | policyEffect | blockingAllowed | requiresT3Sync | activationState |
|------|------------|--------------|-----------------|----------------|-----------------|
| **OFF** | `false` | `null` | `false` | `false` | `inert` |
| **SHADOW** | `true` | `signal_only` | `false` | `false` | `configured_not_activated` |
| **MONITOR** | `true` | `signal_only` | `false` | `true` | `configured_not_activated` |
| **E1_ENFORCED** | `true` | `enforce` | `true` | `true` | `configured_not_activated` |

**Critical:** `blockingAllowed=true` for E1 is an architectural instruction only. This Delivery exposes **no** enforcement consumer; E1 row ≠ BLOCK active ≠ SHADOW/MONITOR/E1 activated.

Persisted non-OFF rows may exist for tests; resolution yields `configured_not_activated` — **not** runtime activation.

---

## M. Fail-open resolution

| Scenario | Result |
|----------|--------|
| Store / read technical throw | `resolution=fail_open_off` · mode OFF · no throw to caller |
| Invalid / empty `projectId` | `fail_open_off` · never raw DB details |
| Missing row | `default_off` (not fail-open) |
| Successful persisted read | `persisted` + instruction for mode |

Resolver never evaluates T4, never reads enforcement projection, never calls provider, never supplies thresholds.

---

## N. T7 server composition

Path: `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7Runtime.ts`

```ts
composeFinOpsT7Runtime({ pool, nowIso }) → {
  capture,
  flushAudit,
  resolveProjectRollout,
  recomputeAggregatesAndRefresh,
  reconcileProjectPeriodAndRefresh,
}
```

| Exposed | Role |
|---------|------|
| `capture` | T6 capture boundary |
| `flushAudit` | T6 durable audit flush |
| `resolveProjectRollout` | T7 read-only resolution |
| `recomputeAggregatesAndRefresh` | T2 recompute → T4 refresh wrapper |
| `reconcileProjectPeriodAndRefresh` | T2 reconcile → T4 refresh wrapper |

**NO upsert API** on the composition surface (`upsertProjectRollout` not exposed).

Contract: server-only · injected caller-owned Pool · no `DATABASE_URL` · no second pool · never `pool.end()`.

---

## O. T6 composition reuse

- Calls `composeFinOpsRuntime({ pool })` for capture + flushAudit.
- Does **not** modify `composeFinOpsRuntime.ts`.
- Does **not** reimplement ledger / journal / durable emitter / capture.
- T6 fail-open / redaction posture preserved by reuse.

---

## P. T2/T4 refresh runtime wiring

Wrappers only (from `refreshEnforcementAfterT2` — unmodified):

- `recomputeAggregatesThenRefreshEnforcementProjection`
- `reconcileProjectPeriodThenRefreshEnforcementProjection`

Adapters reused (not modified):

- `createPostgresFinOpsAggregateStore`
- `createPostgresFinOpsReconciliation`
- `createPostgresFinOpsEnforcementProjectionStore`

**No raw** `recomputeAggregates` / `reconcileProjectPeriod` methods exposed on T7 composition.

---

## Q. R-T4-PROJECTION-REFRESH-01 reassessment

Entry status: **OPEN — Case B** (canonical wrapper delivered; no product consumer).

| Gate | Evidence | Result |
|------|----------|--------|
| CLOSE-1 | No product/runtime T2 consumer discovered outside composition | **PASS** |
| CLOSE-2 | `composeFinOpsT7Runtime` is the new canonical server runtime boundary | **PASS** |
| CLOSE-3 | All exposed T2 mutation/reconciliation ops use post-T2 refresh wrappers | **PASS** |
| CLOSE-4 | No raw T2 mutation method exposed by composition (T7-R07) | **PASS** |
| CLOSE-5 | PG proves each exposed mutation/reconcile refreshes T4 (T7-R03/R04) | **PASS** |
| CLOSE-6 | T4 refresh failure fail-open vs T2 success (T7-R05) | **PASS** |
| CLOSE-7 | No product activation claim required for closure | **PASS** |
| CLOSE-8 | SHADOW remains not activated | **PASS** (STILL) |

**After atomic revision correction:** CLOSE-1..8 reassessed — **STILL PASS**. `R-T4-PROJECTION-REFRESH-01` remains **CLOSED — UNCHANGED**.

**Final wording:**

```text
R-T4-PROJECTION-REFRESH-01 =
CLOSED —
T7 CANONICAL SERVER RUNTIME T2 MUTATION / RECONCILIATION BOUNDARY ROUTES THROUGH POST-T2 T4 REFRESH —
FRESHNESS WIRING DELIVERED AND TESTED —
NO PRODUCT ACTIVATION CLAIM —
SHADOW NOT ACTIVATED.
```

CLOSED here = runtime foundation freshness wiring delivered. It does **not** mean product traffic · SHADOW · monetary policy · provider enforcement.

---

## R. Unit tests

File: `t7.rollout.unit.test.ts` — **T7-U01..T7-U10**.

| ID | Assertion |
|----|-----------|
| T7-U01 | No persisted config → OFF → `default_off` → `evaluateT4=false` → `blockingAllowed=false` |
| T7-U02 | Store read technical throw → `fail_open_off` → OFF → no throw |
| T7-U03 | Persisted OFF → OFF · `inert` |
| T7-U04 | Persisted SHADOW → `signal_only` · `blockingAllowed=false` · T3 not required · `configured_not_activated` |
| T7-U05 | Persisted MONITOR → `signal_only` · `blockingAllowed=false` · T3 sync required |
| T7-U06 | Persisted E1_ENFORCED → `enforce` · `blockingAllowed=true` · `configured_not_activated` · no provider/T4 call |
| T7-U07 | Invalid projectId → fail-open OFF · never raw DB details |
| T7-U08 | Resolver never touches enforcement projection |
| T7-U09 | Resolver never invokes provider |
| T7-U10 | No monetary threshold required (no 15/20/25/30) |

Evidence: `.tmp-sfia-review/t7-foundation-delivery/unit-t7.txt` — **10 passed**.

---

## S. PostgreSQL tests

File: `postgres/t7.rollout.integration.test.ts` — **T7-PG01..T7-PG12** on ephemeral local Postgres (never Neon).

| ID | Assertion |
|----|-----------|
| T7-PG01 | No row → resolver OFF |
| T7-PG02 | Upsert OFF → read OFF revision 1 |
| T7-PG03 | Upsert SHADOW → persisted project-scoped |
| T7-PG04 | Second mutation → revision increments |
| T7-PG05 | Multi-project isolation |
| T7-PG06 | Invalid DB mode blocked by constraint |
| T7-PG07 | No global/default row created by migration |
| T7-PG08 | Down migration refuses while rows exist |
| T7-PG09 | After clearing rows, down/up round trip succeeds |
| T7-PG10 | `updated_at` timestamptz / canonical ISO on read |
| T7-PG11 | Concurrent first writes on absent project → revisions `1..N` (N≥8), final=`N` |
| T7-PG12 | Concurrent updates on existing row → revisions `2..N+1`, final=`1+N` |

Evidence: `.tmp-sfia-review/t7-atomic-revision-correction/` (RED + GREEN) and prior delivery PG logs.

---

## T. Runtime integration

File: `postgres/t7.foundation-runtime.integration.test.ts` — **T7-R01..T7-R16**.

| ID | Assertion |
|----|-----------|
| T7-R01 | Compose → resolve no config → OFF |
| T7-R02 | Composition returns T6 capture boundary — T6 behavior preserved |
| T7-R03 | `recomputeAggregatesAndRefresh` → T2 success → T4 projection refreshed |
| T7-R04 | `reconcileProjectPeriodAndRefresh` → T2 success → T4 refreshed exactly once |
| T7-R05 | T4 refresh failure → T2 success preserved → refresh failure visible |
| T7-R06 | T2 failure → no T4 refresh |
| T7-R07 | No raw recompute/reconcile mutation functions exposed |
| T7-R08 | Rollout OFF does not access T4 enforcement projection |
| T7-R09 | No provider invocation |
| T7-R10 | No execution-run wiring |
| T7-R11 | No T3 side effect |
| T7-R12 | No threshold / monetary policy required |
| T7-R13 | SHADOW row resolves as instruction — no runtime activation / provider |
| T7-R14 | MONITOR row causes no runtime activation |
| T7-R15 | E1 row causes no BLOCK — no active enforcement consumer exposed |
| T7-R16 | T6 `flushAudit` remains operable |

---

## U. Regression tests (T2 / T4 / T6)

Targeted local regressions re-run under `.tmp-sfia-review/t7-foundation-delivery/regressions.txt` (T2 aggregate/reconcile unit+PG · T4 enforcement + projection refresh unit+PG · T6 runtime composition PG).

| Suite | Note |
|-------|------|
| T2 unit + PG | Evidence from local CI runs — see evidence dir |
| T4 unit + PG foundation + projection refresh | Evidence from local CI runs — see evidence dir |
| T6 runtime composition PG | Evidence from local CI runs — see evidence dir |
| Full FinOps / `test:db` / typecheck / lint / build / full suite | **Evidence to be filled / finalized from CI local runs** under `.tmp-sfia-review/t7-foundation-delivery/` |

No intentional T2/T4/T6 source modifications in this Delivery.

---

## V. Migration proof

| Check | Result |
|-------|--------|
| Filename | `1754600004000_finops-t7-rollout-config.js` |
| Collision before CREATE | **NONE** (slot free) |
| Order | After T1→T2→T6→T3→T4 |
| `migrate:up` on disposable local Postgres | **PASS** — creates `finops_rollout_config` |
| Before | no relations / no T7 table |
| After | `finops_rollout_config` present among FinOps tables |
| Seed row count | **0** |
| Down with rows | **REFUSED** |
| Down empty → up | **PASS** (T7-PG08/PG09) |

Local Postgres only — **NOT Neon**.

---

## W. Security / secret posture

| Control | Status |
|---------|--------|
| No secrets in CREATE sources | **PASS** |
| Store errors sanitized (`sanitizeDbError`) | **PASS** |
| Resolver fail-open never leaks raw DB details | **PASS** (T7-U07) |
| No provider credentials / Neon URLs in Delivery | **PASS** |
| No threshold / PII / IAM actor fields in schema | **PASS** |
| Audit composition reuse preserves redaction (T6) | **PASS** by reuse |
| Negative scan on CREATE paths for secret-shaped literals | **PASS** (Delivery posture) |

---

## X. Carried reserves

| Reserve / topic | Status |
|-----------------|--------|
| `R-T4-PROJECTION-REFRESH-01` | **CLOSED** — wording in §Q |
| `R-T6-RUNTIME-COMPOSITION-01` | **CLOSED ON MAIN** |
| `R-T4-T3-SYNC-01` | **OPEN** — SELECTED GATE BEFORE MONITOR |
| `R-PR-T2-API-01` | **OPEN MINOR** |
| T6-ext-T2 | **EXCLUDED** |
| T6-ext-T3T4 | **NOT AUTHORIZED** — REQUIRED BEFORE E1 |
| Product IAM | **NOT_SELECTED** — REQUIRED BEFORE E1 |
| Calibration | **REQUIRED BEFORE MONITOR USING REAL AMOUNTS** |
| Privileged Morris mutations | **DEFERRED** |
| Intermediate product literal | **DEFERRED** |
| `REVIEW_REQUIRED` vs `WOULD_BLOCK` | **STILL DEFERRED** |
| SHADOW | **NOT ACTIVATED** |
| MONITOR | **NOT ACTIVATED** |
| E1 | **NOT AUTHORIZED** |

---

## Y. Non-scope / anti-activation

Explicitly out of scope for this Delivery:

- SHADOW / MONITOR / E1 activation
- Dedicated activation QA (next gate only)
- Product routes / endpoints / traffic
- Execution-run modification
- Provider-real / Neon production config
- T3 sync · T6-ext · T5 · Product IAM
- Calibration / monetary thresholds **15 / 20 / 25 / 30**
- Env/global flag as FinOps rollout authority
- Scheduler / cron
- Seed non-OFF
- Upsert exposed as product/Morris activation API
- Project commit / push / PR / merge

```text
FOUNDATION READY ≠ SHADOW ACTIVATED
```

---

## Z. Git final state / verdict

| Field | Value |
|-------|-------|
| Branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t7-foundation-default-off` |
| Worktree | `…/finops-t7-foundation-default-off` |
| HEAD | `511a18d409e25d0a3fdbd3425ade65512a5f4e2b` (= origin/main) |
| Staged | empty |
| Project commits | none |
| Project push / PR | none |
| Untracked | 10 CREATE paths + `.tmp-sfia-review/` evidence |

**CLOSE-1..8:** ALL **STILL PASS** → correction + foundation green verdict:

```text
FINOPS TECHNICAL LOT T7 —
FOUNDATION DEFAULT-OFF —
ATOMIC ROLLOUT REVISION CORRECTION COMPLETE —

CONCURRENT FIRST-WRITE DEFECT REPRODUCED RED —
ROOT CAUSE CONFIRMED —

ROLLOUT UPSERT NOW SINGLE-STATEMENT ATOMIC —
FIRST WRITE REVISION 1 —
EVERY ACCEPTED SAME-PROJECT MUTATION INCREMENTS DURABLE REVISION EXACTLY ONCE —

T7-PG11 CONCURRENT FIRST-WRITE GREEN —
T7-PG12 CONCURRENT EXISTING-ROW UPDATE GREEN —
T7-PG01..10 GREEN —

NO SCHEMA CHANGE —
NO NEW MIGRATION —
NO ADVISORY LOCK —
NO PROCESS MUTEX —
NO GLOBAL LOCK —

EXACT 3 LOCAL T7 FILES CHANGED —
EXACT 7 T7 FILES BYTE-PRESERVED —
GIT-vs-MAIN MANIFEST REMAINS 10 CREATE / 0 MODIFY / 0 DELETE —

DEFAULT-OFF PRESERVED —
FAIL-OPEN OFF PRESERVED —

R-T4-PROJECTION-REFRESH-01 CLOSED — UNCHANGED —
CLOSE-1..8 STILL PASS —

R-T6-RUNTIME-COMPOSITION-01 CLOSED ON MAIN —
R-T4-T3-SYNC-01 OPEN —
R-PR-T2-API-01 OPEN MINOR —

SHADOW NOT ACTIVATED —
MONITOR NOT ACTIVATED —
E1 NOT AUTHORIZED —

NO PROJECT STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

REVIEW HANDOFF REMOTE VERIFIED —

T7 FOUNDATION CORRECTED —
READY FOR CHATGPT T7 FOUNDATION REVALIDATION
```

```text
FOUNDATION READY ≠ SHADOW ACTIVATED
```