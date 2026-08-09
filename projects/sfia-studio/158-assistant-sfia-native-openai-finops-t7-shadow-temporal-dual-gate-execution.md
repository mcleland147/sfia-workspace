# 158 — FinOps T7 SHADOW Temporal Semantics Option C — Hybrid Dual-Gate Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md`
**Cycle:** 8 — Delivery / implémentation
**Profil:** Critical
**Typologie:** EVOL / CODE / TEST / DOC
**Baseline:** SFIA v2.6
**Date (CEST):** 2026-08-08 22:07 CEST
**Date (UTC):** 2026-08-08 20:07 UTC

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Option C selected by Morris | **TRUE** |
| Dual-gate = `PRE_WAS_SHADOW ∧ POST_IS_SHADOW` | **TRUE** |
| Runtime implementation local | **TRUE** |
| Temporal drift OFF→SHADOW addressed locally | **TRUE** |
| Closed on main | **FALSE** |
| SHADOW activated | **FALSE** |
| Policy source selected | **FALSE** |
| MONITOR activated | **FALSE** |
| E1 authorized | **FALSE** |
| Process-local cache / Map / Set / registry | **FALSE** |
| Migration / durable eligibility state | **FALSE** |
| Project commit / push / PR | **FALSE** |

```text
OPTION C DUAL-GATE DELIVERED LOCALLY —
TEMPORAL MODE DRIFT ADDRESSED LOCALLY —
PENDING DEDICATED QA —
NOT CLOSED ON MAIN —
SHADOW NOT ACTIVATED —
POLICY SOURCE NOT SELECTED
```

---

## B. Morris decision

**Exact decision consumed:**

> GO TEMPORAL SEMANTICS — OPTION C, puis Delivery Cycle 8 Critical, avec dual-gate PRE_WAS_SHADOW ∧ POST_IS_SHADOW et interdiction de cache process-local non borné.

**Consumed by this Delivery:** transient `captureEligibility` + coordinator-local PRE gate + existing POST rollout re-read.
**Not consumed:** SHADOW activation · policy source · MONITOR · E1 · thresholds · T6-ext · Product IAM · commit/push/PR.

---

## C. Architecture implemented

```text
PRE resolveProjectRollout
  → captureEligibility ("eligible" iff pilot + PRE mode SHADOW)
  → FinOpsEnforcementDecision (optional field)
  → coordinateExecutionRun call-local variable
  → captureFinOpsAfterAiSuccess PRE gate
       "ineligible" → disabled / finops_pre_provider_capture_ineligible (no port call)
       "eligible" | undefined → call capture port
  → composeFinOpsT7ShadowExecutionDeps.captureUsage
       POST resolveProjectRollout
       mode === "SHADOW" required for capture
```

Transport: **coordinator-local only** for the duration of one `coordinateExecutionRun(...)`.
No snapshot of full rollout mode. No durable state. No shared registry.

---

## D. Temporal matrix

| Transition | PRE eligibility | POST mode | Capture |
|------------|-----------------|-----------|---------|
| OFF → OFF | ineligible | OFF | NO |
| OFF → SHADOW (during provider) | ineligible | SHADOW | NO (PRE short-circuit) |
| SHADOW → OFF (during provider) | eligible | OFF | NO (POST gate) |
| SHADOW → SHADOW | eligible | SHADOW | YES (if other capture conditions hold) |

---

## E. State model

- **NO CACHE**
- **NO MAP / SET / WeakMap / WeakSet**
- **NO AsyncLocalStorage eligibility registry**
- **NO module-level mutable eligibility**
- **NO DURABLE STATE / NO MIGRATION**
- Eligibility lives only as a call-local `let` inside `coordinateExecutionRun`

---

## F. Files

**MODIFY**

1. `projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts`
2. `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`
3. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`
4. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`
5. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`

**CREATE**

6. This execution record (`158-…`)

**Unchanged (required):** `finopsCapturePort.ts`, `finopsEnforcementPort.ts`, `composeFinOpsT7Runtime.ts`, `resolveFinOpsRollout.ts`, `types.rollout.ts`, `composeExecutionRunD2D3.ts`, `composeExecutionRunD2D3T7ShadowPilot.ts`, OPS1, migrations.

---

## G. Tests (real results)

| Suite | Result |
|-------|--------|
| `t7.shadow-option-a.unit.test.ts` | **PASS** — 6/6 |
| `t7.shadow-option-a.wiring.integration.test.ts` | **PASS** — 22/22 |
| OA/OPS1 isolation probe + antiLegacy (doctrine + execution-contract) | **PASS** — 12/12 |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm run build` | **PASS** |
| Full `npm test` | **PASS** — 159 files / 1616 tests |
| `git diff --check` | **PASS** |

Covered proofs include T-C01…C04 temporal matrix, PRE eligibility matrix, legacy D2D3 / generic enforcement without `captureEligibility`, concurrency A/B no cross-run contamination, never-block / signal_only, static absence of Map/Set/AsyncLocalStorage in the three runtime files.

---

## H. Reserves

| Reserve | Status |
|---------|--------|
| TEMPORAL MODE DRIFT OFF→SHADOW | **ADDRESSED LOCALLY BY OPTION C — PENDING DEDICATED QA — NOT CLOSED ON MAIN** |
| SHADOW PILOT POLICY SOURCE | **NOT SELECTED** |
| R-T4-T3-SYNC-01 | **OPEN BEFORE MONITOR** |
| R-PR-T2-API-01 | **OPEN MINOR** |
| Calibration réelle | **REQUIRED BEFORE MONITOR** |
| T6-ext | **NOT AUTHORIZED** |
| Product IAM | **NOT_SELECTED** |
| T5 | **OUT OF SCOPE** |
| SHADOW | **NOT ACTIVATED** |
| MONITOR | **NOT ACTIVATED** |
| E1 | **NOT AUTHORIZED** |

---

## I. Next

**Cycle 9 — Dedicated T7 SHADOW Temporal Dual-Gate QA** (Critical, distinct validation).

Do **not** commit / push project / open PR from this Delivery.
PR readiness only after QA + distinct Morris GO.
Policy source and SHADOW activation remain separate decisions.
