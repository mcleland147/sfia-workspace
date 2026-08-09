# Cycle 7 Standard — FinOps T7 SHADOW Target-Binding Resolution — Review Pack

**Date/heure (CEST):** 2026-08-09 13:15:18 CEST
**Date/heure (UTC):** 2026-08-09 11:15:18 UTC
**Baseline:** SFIA v2.6

## Décision Morris

```text
GO TARGET-BINDING RESOLUTION —
T7 SHADOW PILOT sfia-studio-ops1 —
DEFINE / VERIFY EXACT ACTIVATION ENVIRONMENT IDENTITY —
NO SHADOW ACTIVATION.
```

## Git Truth

```text
branch = main
HEAD = origin/main = 7421fa86b1f22c0184e9fdc8b20657b9a3e0205b
tracked/staged = clean (.tmp only)
operator + CLI on main = YES
```

## Handoff entrant

```text
tip  = 8267606360e8ee5c90fb6193c1ff925372198f74
blob = e309f3c7080063a76d1ca6c0f848964376631a74
status = MATCHED
```

## Sources Git consultées

- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- sfia-review-handoff/latest-chatgpt-review.md
- finops-t7-shadow-rollout.ts
- operateFinOpsT7ShadowRollout.ts
- postgresFinOpsRolloutStore.ts
- createFinOpsPool.ts
- projects/sfia-studio/app/.gitignore
- .github/workflows/sfia-studio-ci.yml
- FinOps docs stating Neon NOT DONE (138/142/…)

## Binding actuel (code)

```text
A. CLI reads DATABASE_URL_DIRECT as effective connection string = CONFIRMED
B. --target → targetLabel only; does NOT select DB = CONFIRMED
C. operateFinOpsT7ShadowRollout requires non-empty targetLabel only = CONFIRMED
D. No intrinsic proof --target matches DATABASE_URL_DIRECT = CONFIRMED
E. CI Postgres = ephemeral postgres:16-alpine, explicitly non-Neon = CONFIRMED
```

## Sources locales (sans secrets)

```text
## Shell env (names only)
SOURCE_TYPE=shell_env SOURCE_LOCATION=process.env VARIABLE_NAME=DATABASE_URL VALUE_PRESENT=YES SECRET_EXPOSED=NO
SOURCE_TYPE=shell_env SOURCE_LOCATION=process.env VARIABLE_NAME=DATABASE_URL_DIRECT VALUE_PRESENT=YES SECRET_EXPOSED=NO

## Local files / dirs (existence only)
SOURCE_TYPE=missing SOURCE_LOCATION=/Users/morris/.config/neon EXISTS=False SECRET_EXPOSED=NO
SOURCE_TYPE=missing SOURCE_LOCATION=/Users/morris/.neonctl EXISTS=False SECRET_EXPOSED=NO
SOURCE_TYPE=missing SOURCE_LOCATION=/Users/morris/.config/vercel EXISTS=False SECRET_EXPOSED=NO
SOURCE_TYPE=missing SOURCE_LOCATION=/Users/morris/.vercel EXISTS=False SECRET_EXPOSED=NO
SOURCE_TYPE=missing SOURCE_LOCATION=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/projects/sfia-studio/app/.vercel EXISTS=False SECRET_EXPOSED=NO
SOURCE_TYPE=missing SOURCE_LOCATION=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/projects/sfia-studio/.vercel EXISTS=False SECRET_EXPOSED=NO

## Env file variable NAMES only
```

Note: agent process still exports DATABASE_URL(_DIRECT) from prior ephemeral test work — not a provisioned pilot.

## Safe identity of process DATABASE_URL_DIRECT (leftover)

```text
CONNECTION_SOURCE_VAR=DATABASE_URL_DIRECT
CONNECTION_SOURCE_FILE=NONE
CONNECTION_PRESENT=YES
protocol=postgres
hostname=127.0.0.1
port=55448
database=sfia_studio_finops_t7_iso
provider=local
TARGET_FINGERPRINT=fd8b2ca0a63e49bd4f2f0d301037e2c89de3793c13aeb97ae828062f9a9c92b0
SECRET_EXPOSED=NO
```

## Read-only verification

```text
{
  "ok": false,
  "error": "connect ECONNREFUSED 127.0.0.1:55448"
}
TCP_ALIVE=False
host=127.0.0.1
port=55448
database=sfia_studio_finops_t7_iso
provider=local
FP=fd8b2ca0a63e49bd4f2f0d301037e2c89de3793c13aeb97ae828062f9a9c92b0
DOCKER=['finops-t7-pg-ephemeral\t127.0.0.1:55437->5432/tcp', 'sfia-finops-t4-projection-refresh-pg\t0.0.0.0:55435->5432/tcp, [::]:55435->5432/tcp', 'sfia-finops-t6-runtime-composition-pg\t0.0.0.0:55432->5432/tcp, [::]:55432->5432/tcp']
```

Pilot current rollout on a real/persistent target: **NOT APPLICABLE** (no eligible target).
No SHADOW/MONITOR/E1 remote conflict observed.

## Candidate target matrix

| candidate_id | source | provider | persistent | shared | intended_role | fingerprint | connectivity | FinOps schema | pilot mode | suitability | reason |
|---|---|---|---|---|---|---|---|---|---|---|---|
| ci-gha-ephemeral | .github/workflows/sfia-studio-ci.yml | local/GHA postgres:16 | NO | N/A | ci-test | n/a (ephemeral) | NOT_TESTED | PRESENT in CI migrate | n/a | NOT ELIGIBLE | GitHub Actions ephemeral; explicitly non-Neon |
| agent-local-leftover-55448 | process.env DATABASE_URL_DIRECT | local | NO | UNKNOWN | local-test-leftover | `fd8b2ca0a63e49bd…` | TCP_NO | UNKNOWN_IF_DOWN | n/a | NOT ELIGIBLE | Leftover ephemeral isolation DB (port 55448 / sfia_studio_finops_t7_iso); not a provisioned pilot target |
| neon-studio-future | repo docs (138/142/…) | neon | YES if provisioned | UNKNOWN | unknown/future | NOT AVAILABLE | NOT_TESTED | UNKNOWN | UNKNOWN | NOT ELIGIBLE / NEEDS PROVISIONING | Docs repeatedly state Neon NOT DONE / NOT configured; no local Neon CLI/.env |
| (none-prod) | — | — | — | — | — | — | — | — | — | NOT FOUND | No prod/staging/pilot persistent URL discovered in workspace |

Additional leftover Docker PG listeners observed (also NOT ELIGIBLE): ports 55437/55435/55432 — FinOps lot ephemeral containers.

## Options A / B / C

### OPTION A — PROCEDURAL BINDING
Human verifies safe identity before `--apply`.
- Security: weak against mistakes; relies on discipline
- Debt: low code / high operational risk
- Recommendation: insufficient alone for Critical activation-adjacent command

### OPTION B — THIN FAIL-CLOSED BINDING (RECOMMENDED)
Before mutation, CLI/operator verifies `DATABASE_URL_DIRECT` safe identity (host/port/db fingerprint and/or allowlisted expected fingerprint from explicit args/env) matches declared `--target` mapping.
- Probable files: `finops-t7-shadow-rollout.ts`, maybe thin helper next to operator; **no migration**
- Invariant: refuse `--apply` if fingerprint ≠ expected for target label
- Tests: unit mismatch refuse; dry-run may still plan; apply blocked
- Security: high vs wrong-DB apply
- Debt: small, localizable
- Recommendation: **YES — implement before any real `--apply`**

### OPTION C — DURABLE DB-RESIDENT TARGET IDENTITY
Persist environment identity in DB / new migration.
- Security: strong but heavier
- Debt: migration + registry semantics
- Recommendation: deferred; unnecessary before first pilot if Option B exists

Challenge: useful now? Yes for fail-closed. Simplest without subsystem? Option B. Morris still selects/provisions the real DB.

## Recommendation

```text
NO ELIGIBLE REAL/PERSISTENT TARGET FOUND in operator workspace.
Do NOT select activation target.
Recommend OPTION B (thin fail-closed identity check) before any future apply.
Morris must provision/select a real pilot DB separately.
```

## R-T7-OP-TARGET-BINDING-01

```text
OPEN — TARGET NOT YET SELECTED / RESOLUTION OPTION IDENTIFIED (Option B)
NOT CLOSED — insufficient evidence for procedural acceptance alone
```

## Reserves remaining

- R-T7-OP-TARGET-BINDING-01 OPEN (as above)
- R-QA-T7-C08-SCENARIO-01 OPEN MINOR
- R-T4-T3-SYNC-01 OPEN BEFORE MONITOR

## Anti-claims

```text
SHADOW = NOT ACTIVATED
POLICY VALUES = NOT SELECTED
ACTIVATION TARGET = NOT SELECTED
MONITOR = NOT ACTIVATED
E1 = NOT AUTHORIZED
Real DB writes = ZERO
Migrations = ZERO
--apply = ZERO
Project files modified = NONE
```

## Next Morris gate

```text
GO TARGET-BINDING OPTION B —
T7 SHADOW OPERATOR —
IMPLEMENT THIN FAIL-CLOSED ENVIRONMENT IDENTITY CHECK —
NO SHADOW ACTIVATION.
```

(Separately, Morris must still provision/select a real pilot PostgreSQL identity before any SHADOW activation GO.)

## Verdict

```text
TARGET-BINDING DISCOVERY COMPLETE —
CYCLE 7 STANDARD —
NO ELIGIBLE REAL TARGET FOUND —
ACTIVATION TARGET NOT SELECTED —
CURRENT BINDING = AUDIT LABEL ONLY —
OPTION B RECOMMENDED —
R-T7-OP-TARGET-BINDING-01 OPEN — TARGET NOT YET SELECTED / RESOLUTION OPTION IDENTIFIED —
SHADOW NOT ACTIVATED —
POLICY VALUES NOT SELECTED —
NO PROJECT MUTATION —
MORRIS TARGET PROVISIONING/SELECTION REQUIRED —
HANDOFF REMOTE VERIFIED
```
