# 160 — FinOps T7 SHADOW Minimal Activation Operator — Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/160-assistant-sfia-native-openai-finops-t7-shadow-activation-operator-execution.md`
**Cycle:** 8 — Delivery / implémentation
**Profil:** Critical
**Typologie:** EVOL / CODE / TEST / DOC
**Baseline:** SFIA v2.6
**Date (CEST):** 2026-08-09 10:32 CEST
**Date (UTC):** 2026-08-09 08:32 UTC

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Bounded server operator command delivered locally | **TRUE** |
| Dry-run default (no `--apply`) | **TRUE** |
| Pilot `sfia-studio-ops1` only | **TRUE** |
| Modes OFF \| SHADOW only | **TRUE** |
| `--expected-mode` fail-closed | **TRUE** |
| Existing `postgresFinOpsRolloutStore` reused (no SQL copy) | **TRUE** |
| Local ephemeral apply + rollback OFF proven | **TRUE** |
| Product UI / API / routes / server actions | **FALSE** |
| Policy values selected | **FALSE** |
| Real / shared / Neon / production target selected | **FALSE** |
| SHADOW activated (authorized target) | **FALSE** |
| MONITOR / E1_ENFORCED accepted | **FALSE** |
| Project commit / push / PR | **FALSE** |

```text
T7 SHADOW MINIMAL ACTIVATION OPERATOR DELIVERED —
BOUNDED COMMAND READY —
PILOT sfia-studio-ops1 ONLY —
MODES OFF|SHADOW ONLY —
EXPECTED-MODE FAIL-CLOSED —
DRY-RUN DEFAULT —
EXISTING ATOMIC STORE REUSED —
LOCAL EPHEMERAL APPLY/ROLLBACK PASS —
NO PRODUCT UI/API —
POLICY VALUES NOT SELECTED —
NO REAL TARGET SELECTED —
SHADOW NOT ACTIVATED —
NO PROJECT COMMIT/PUSH/PR
```

---

## B. Morris decision

> GO MINIMAL SHADOW ACTIVATION MECHANISM —
> BOUNDED SERVER OPERATOR COMMAND —
> PILOT sfia-studio-ops1 ONLY —
> MODES OFF|SHADOW ONLY —
> NO PRODUCT UI/API —
> NO POLICY VALUES —
> SHADOW REMAINS NOT ACTIVATED UNTIL DISTINCT GO.

---

## C. Files create / modify

**CREATE**

1. `projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts`
2. `projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts`
3. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts`
4. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts`
5. `projects/sfia-studio/160-assistant-sfia-native-openai-finops-t7-shadow-activation-operator-execution.md`

**MODIFY**

6. `projects/sfia-studio/app/package.json` — script `finops:t7:rollout` + `tsx` **devDependency**
7. `projects/sfia-studio/app/package-lock.json` — lock `tsx@4.23.11` (dev)

---

## D. Architecture

```text
CLI scripts/finops-t7-shadow-rollout.ts
  → parseArgs (--project/--mode/--expected-mode/--target/[--apply])
  → Pool(DATABASE_URL_DIRECT)  // never logged
  → createPostgresFinOpsRolloutStore(pool)
  → operateFinOpsT7ShadowRollout(store, {
       allowedProjectId: T7_SHADOW_PILOT_PROJECT_ID,
       ...
     })
  → finally pool.end()

operateFinOpsT7ShadowRollout (testable core)
  → FinOpsRolloutPort.readProjectRollout
  → guards (project / mode / expected / noop)
  → apply=false → dry_run (zero upsert)
  → apply=true  → FinOpsRolloutPort.upsertProjectRollout ONLY
  → post-read mode + revision verify
```

- Does **not** expose upsert via `composeFinOpsT7Runtime`.
- Does **not** copy UPSERT SQL into the command.
- Does **not** modify `composeExecutionRunD2D3T7ShadowPilot` (imports constant only).

---

## E. Runner

| Option | Outcome |
|--------|---------|
| Existing dedicated TS runner in package.json | **None discovered** |
| Retained | **`tsx` as devDependency** + script `finops:t7:rollout` |
| Runtime dependency | **No** (`tsx_prod=false`) |
| `npx` unlocked download | **Forbidden / not used** |

---

## F. CLI contract

```bash
npm run finops:t7:rollout -- \
  --project sfia-studio-ops1 \
  --mode SHADOW|OFF \
  --expected-mode OFF|SHADOW \
  --target <explicit-label> \
  [--apply]
```

- Without `--apply`: dry-run, success, zero mutation.
- With `--apply`: mutation allowed **only** on local/ephemeral DB for this Delivery proof.
- Cycle constraint: never against Neon / shared staging / shared dev / production.

---

## G. Tests / proofs

| Suite | Result |
|-------|--------|
| Unit U01–U08 (+ apply happy path) | **9/9 PASS** |
| PG PG01–PG07 (+ exportable error type) | **8/8 PASS** |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm run build` | **PASS** |
| `git diff --check` | **PASS** |
| CLI dry-run | **PASS** (`applied:false`, `result:dry_run`) |
| CLI apply SHADOW (ephemeral) | **PASS** (revision 1) |
| CLI rollback OFF (ephemeral) | **PASS** (revision 2) |
| Guards project/MONITOR/E1 | **PASS** (exit 1) |
| Secret redaction | **PASS** (`SECRET_LEAK=NO`) |

Full regression: **not launched** (tooling impact limited to locked `tsx` devDep; no product surface change).

---

## H. Residual / next

- SHADOW remains **NOT ACTIVATED** on any authorized real target.
- Policy values remain **NOT SELECTED**.
- Activation target remains **NOT SELECTED**.
- Ready for **targeted Cycle 9 QA** of this operator (still no real activation without distinct Morris GO).
