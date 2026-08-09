# 159 — FinOps T7 SHADOW Policy Source Option A — Infrastructure Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/159-assistant-sfia-native-openai-finops-t7-shadow-policy-source-option-a-execution.md`
**Cycle:** 8 — Delivery / implémentation
**Profil:** Standard
**Typologie:** EVOL / CODE / TEST / DOC
**Baseline:** SFIA v2.6
**Date (CEST):** 2026-08-09 04:22 CEST
**Date (UTC):** 2026-08-09 02:22 UTC

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Source architecture Option A selected by Morris | **TRUE** |
| Option A infrastructure delivered locally | **TRUE** |
| Default versioned config EMPTY / INERT | **TRUE** |
| Default resolution null / not_configured | **TRUE** |
| Pilot composer default source wiring | **TRUE** |
| Test override seam preserved | **TRUE** |
| Policy values selected | **FALSE** |
| SHADOW activated | **FALSE** |
| Migration / policy DB store | **FALSE** |
| Env / global policy authority | **FALSE** |
| Rollout mutation / seed SHADOW | **FALSE** |
| MONITOR / E1 | **FALSE** |
| Project commit / push / PR | **FALSE** |

```text
OPTION A SOURCE ARCHITECTURE SELECTED BY MORRIS —
OPTION A INFRASTRUCTURE DELIVERED LOCALLY —
DEFAULT POLICY CONFIG EMPTY / INERT —
POLICY VALUES NOT SELECTED —
SHADOW NOT ACTIVATED —
NO PROJECT COMMIT / PUSH / PR
```

---

## B. Morris decisions

**Architecture (source only):**

> GO POLICY SOURCE — OPTION A (composition-owned / versioned config), source uniquement ;
> policy values restent NOT SELECTED ; SHADOW reste NOT ACTIVATED.

**Delivery:**

> GO Delivery Cycle 8 Standard — implement Policy Source Option A infrastructure only;
> no policy values; no SHADOW activation.

**Supplants prior handoff status only for:**
`SOURCE ARCHITECTURE = OPTION A SELECTED`

**Does not supplant:**
`POLICY VALUES = NOT SELECTED` · `SHADOW = NOT ACTIVATED`

---

## C. Files create / modify (exact 5)

**CREATE**

1. `projects/sfia-studio/app/lib/oa/finops/server/versionedFinOpsT7ShadowPolicySource.ts`
2. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-policy-source-option-a.unit.test.ts`
3. `projects/sfia-studio/159-assistant-sfia-native-openai-finops-t7-shadow-policy-source-option-a-execution.md`

**MODIFY**

4. `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts`
5. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`

---

## D. Architecture / wiring

```text
composeExecutionRunD2D3T7ShadowPilot
  resolveShadowPolicy =
    input.resolveShadowPolicy  (optional TEST / verification seam)
    ?? resolveVersionedFinOpsT7ShadowPolicy  (default Option A source)
  → composeFinOpsT7ShadowExecutionDeps (thin adapter unchanged)
       forces effect=signal_only
       never-block defense
       Option C captureEligibility unchanged
  → T4 evaluateFinOpsEnforcement
       null policy → allow / not_configured
```

- Thin adapter **not modified**.
- `finops_rollout_config` remains mode-only.
- No migration / no new table / no env authority.
- No `lib/ops1` import from OA.

---

## E. Default vs test override semantics

| Path | Authority |
|------|-----------|
| Default (omit `resolveShadowPolicy`) | Option A versioned Git source (EMPTY → null) |
| Explicit `resolveShadowPolicy` | Test / verification seam only — not product SoT |

Default source EMPTY ⇒ inert FinOps evaluation even if TEST-ONLY SHADOW rollout row exists in ephemeral PG.

---

## F. Tests

| ID | Proof |
|----|-------|
| PS-U01..U05 | Unit: null for pilot/unknown/empty; no I/O; zero active entries |
| T7-PS01 | Integration: no override + SHADOW row → allow/not_configured · provider continues · never block |
| Existing T7-SW* | Override seam still used; must keep PASS |

---

## G. FinOps block notes

- No amount / currency / thresholdCode adopted.
- No extra DB read for policy (static empty table).
- Debt created: future policy value change requires Git/release.
- Debt avoided: premature policy DB store, migration, mutation API.

---

## H. Rollback

1. Revert the 5 Delivery paths (or discard local worktree diff).
2. Pilot composer returns to required injected resolver without default source.
3. No DB rollback required (no migration).

---

## I. Reserves

- R-QA-T7-C08-SCENARIO-01 = OPEN MINOR
- POLICY VALUES = NOT SELECTED
- SHADOW = NOT ACTIVATED
- R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR
- Calibration réelle = REQUIRED BEFORE MONITOR
- TEMPORAL MODE DRIFT = CLOSED ON MAIN (unchanged)

---

## J. Next gate

Recommended:

> GO Cycle 9 Dedicated QA Standard — T7 SHADOW Policy Source Option A Infrastructure.

Subsequent Morris GOs required for:

- operational policy values
- SHADOW activation
- project commit / push / PR / merge
