# Cycle 7 Critical — FinOps T7 SHADOW Pilot Target Provisioning / Selection — Review Pack

**Date/heure (CEST):** 2026-08-09 14:46:38 CEST
**Date/heure (UTC):** 2026-08-09 12:46:38 UTC
**Baseline:** SFIA v2.6
**Profile:** Critical

## Décision Morris

```text
GO SHADOW PILOT TARGET PROVISIONING / SELECTION —
sfia-studio-ops1 —
ESTABLISH ELIGIBLE PERSISTENT DATABASE TARGET —
CAPTURE SAFE TARGET FINGERPRINT —
NO SHADOW ACTIVATION.
```

## Git Truth

```text
branch = main
HEAD = origin/main = 34b6a321a69e0315f410ac0876cd5e9734a77206
tracked clean (.tmp only)
baseline ancestor YES
project branch created = NO
```

## Handoff entrant

```text
tip  = 2f945f38856bc936d8000f2dfe2f72d13562ad01
blob = 0bcbb15da81ab4fa59152ea9c4d946c63512643f
Option B on main / real target NOT SELECTED / SHADOW NOT ACTIVATED = confirmed
```

## Sources / CKC

```text
template + routing + validation checklist + synthetic map + routing matrix consulted
CKC cycle 7 = candidate (experimental; no execution authority)
docs 160/161 + operator/CLI/identity/store + package.json consulted
repo Neon/Postgres docs: Neon SELECTED documentarily, NOT CONFIGURED / no account
```

## Environment inventory (no secret values)

```text
===ENV_PRESENCE===
DATABASE_URL_DIRECT=PRESENT
DATABASE_URL=PRESENT
POSTGRES_URL=ABSENT
NEON_API_KEY=ABSENT
NEON_PROJECT_ID=ABSENT
VERCEL_TOKEN=ABSENT
VERCEL_ORG_ID=ABSENT
===ENV_FILES_NAMES_ONLY===
NO_APP_ENV_FILES
===TOOLING===
psql=NO
docker=YES
neonctl=NO
neon=NO
vercel=NO
gh=YES
npx=YES
===AUTH_STATUS_NO_SECRETS===
NEONCTL_CREDENTIALS_FILE=ABSENT
NEONCTL_HOME=ABSENT
```

Process DATABASE_URL_DIRECT safe identity:
```json
{
  "present": true,
  "protocol": "postgres",
  "hostname": "127.0.0.1",
  "port": 59471,
  "database": "sfia_studio_finops_t7_optb_qa_testdb",
  "classification": "INELIGIBLE_LOCAL_OR_LOOPBACK",
  "eligibility": "INELIGIBLE",
  "reason": "localhost/loopback ephemeral leftover from prior QA"
}
```

Secret mechanism candidates:
```text
===SECRET_MECHANISM_CANDIDATES===
1password_cli=NO
macos_security=YES
VERCEL_HOME=ABSENT
VERCEL_PROJECT_LINK=ABSENT
GitHub Actions secrets (names only):

```

## Candidates

```text
CANDIDATE MATRIX
| id | source | provider | persistent | role | eligibility | reason |
|----|--------|----------|------------|------|-------------|--------|
| process-env-DATABASE_URL_DIRECT | shell env | local | NO | leftover-test | INELIGIBLE | loopback/local ephemeral leftover |
| docker-finops-t7-pg-ephemeral | docker ps | local docker | NO | ci/test leftover | INELIGIBLE | ephemeral container |
| docker-t4-projection | docker ps | local docker | NO | lot leftover | INELIGIBLE | ephemeral container |
| docker-t6-runtime | docker ps | local docker | NO | lot leftover | INELIGIBLE | ephemeral container |
| neon-studio-architected | repo docs (103/125) | neon | YES if provisioned | future managed | INELIGIBLE / NOT PROVISIONED | Neon SELECTED documentarily but NOT CONFIGURED; no neonctl/API key/credentials; no account |
| vercel-linked-postgres | tooling | vercel | UNKNOWN | unknown | INELIGIBLE | vercel CLI/home/project link ABSENT |
| github-actions-ci-pg | workflow | GHA postgres:16 | NO | CI | INELIGIBLE | ephemeral CI |
| prod | none found | — | — | — | NOT FOUND | no prod candidate discovered |

CASE = C
REASON = No eligible persistent dedicated target found. Neon is architectural SELECTED in docs but provider not established operationally (no CLI, no API key, no credentials file, no project). Provisioning would require new Neon account/project and billing/plan decisions (region/tier). Multiple ineligible local leftovers exist but must not be selected.
```

## Eligibility E01–E12 (no selectable target)

```text
E01=FAIL — No persistent eligible target discovered
E02=FAIL — Only loopback/Docker/CI found
E03=FAIL — No dedicated pilot DB provisioned
E04=UNKNOWN — N/A — no real target
E05=FAIL — No eligible DATABASE_URL_DIRECT endpoint
E06=FAIL — No stable non-local identity for pilot
E07=UNKNOWN — N/A — no real target
E08=FAIL — No established secure credential handoff for pilot DB
E09=FAIL — Cannot retrieve pilot credentials reproducibly
E10=UNKNOWN — N/A — nothing provisioned
E11=FAIL — Neon SELECTED in docs but account/plan/region NOT CONFIGURED; Case C
E12=FAIL — Billing/plan for Neon unknown; no free established project
```

## Case arbitration

```text
CASE = C
- Case A: FAIL — no unique eligible existing target
- Case B: FAIL — Neon architecturally selected but NOT operationally established
  (neonctl ABSENT, NEON_API_KEY ABSENT, credentials file ABSENT, no project/region/plan)
  Provisioning would require new account/tenant and billing/plan decisions
- Case C: SELECTED — Morris provider/billing/architecture decision required
```

## Actions NOT performed (correctly blocked)

```text
Neon account/project create = NOT DONE
migrations on real target = NOT DONE
fingerprint capture = NOT APPLICABLE
real dry-run = NOT APPLICABLE
--apply = ZERO
SHADOW activation = NO
repo changes = ZERO
```

## Cost / rollback

```text
TARGET_COST_CLASS = N/A (nothing provisioned)
deprovision = N/A
```

## TARGET + FINGERPRINT

```text
TARGET = NOT SELECTED
FINGERPRINT = NOT AVAILABLE
```

## R-T7-OP-TARGET-BINDING-01

```text
OPEN — REAL TARGET NOT SELECTED
(Option B remains ON MAIN / post-merge closed; binding mechanism ready, environment identity missing)
```

## Other reserves

```text
R-QA-T7-C08-SCENARIO-01 = OPEN MINOR
R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR
```

## Anti-claims

```text
SHADOW = NOT ACTIVATED
POLICY VALUES = NOT SELECTED
ACTIVATION TARGET = NOT SELECTED
REAL DATABASE TARGET = NONE
REAL ACTIVATION APPLY = ZERO
MONITOR = NOT ACTIVATED
E1 = NOT AUTHORIZED
TARGET ESTABLISHED ≠ (not established)
project files CREATE/MODIFY/DELETE = 0
project commit/push/PR = 0
```

## Options for Morris (factual; Cursor does not choose)

```text
OPTION 1 — Establish Neon operationally under already-selected architecture:
  create/use Neon account + project; capture API key via secure non-Git mechanism;
  choose region/tier on existing free/already-covered plan if any;
  then re-run this Cycle 7 Critical GO.

OPTION 2 — Supply an already-existing eligible persistent dedicated PostgreSQL
  (non-prod, empty/dedicated, TLS, stable host/port/db) via secure credential handoff
  usable as DATABASE_URL_DIRECT; then re-run selection/fingerprint/dry-run.

OPTION 3 — Explicitly authorize a different managed provider + billing/plan
  (architecture change vs documentaire Neon SELECTED) — separate Morris decision.
```

## Next Morris gate

```text
GO PROVIDER / BILLING / PILOT DB ESTABLISHMENT DECISION —
sfia-studio-ops1 —
CHOOSE OPERATIONAL PATH FOR PERSISTENT DEDICATED FINOPS T7 PILOT DATABASE —
NO SHADOW ACTIVATION.
```

## Verdict

```text
T7 SHADOW PILOT TARGET NOT ESTABLISHED —
CYCLE 7 CRITICAL —
BLOCKING CAUSE = CASE C — PROVIDER NOT OPERATIONALLY ESTABLISHED / BILLING-ARCHITECTURE DECISION REQUIRED —
REAL TARGET NOT SELECTED —
R-T7-OP-TARGET-BINDING-01 OPEN —
NO PROJECT FILE CHANGES —
NO SHADOW ACTIVATION —
MORRIS DECISION REQUIRED —
HANDOFF REMOTE VERIFIED
```
