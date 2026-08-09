# Cycle 7 Critical — FinOps T7 SHADOW Pilot — Neon Free Target Establishment — Review Pack

**Date/heure (CEST):** 2026-08-09 15:21:53 CEST
**Date/heure (UTC):** 2026-08-09 13:21:53 UTC
**Baseline:** SFIA v2.6
**Profile:** Critical

## Décision Morris

```text
GO PROVIDER / BILLING / PILOT DB ESTABLISHMENT —
sfia-studio-ops1 —
OPTION 1 NEON —
ESTABLISH DEDICATED NON-PROD T7 SHADOW PILOT DATABASE —
USE FREE / NO-ADDITIONAL-COST TIER IF AVAILABLE —
SELECT REGION APPROPRIATE FOR THE PILOT —
SECURE CREDENTIAL HANDOFF OUTSIDE GIT —
NO SHADOW ACTIVATION.
```

## Git Truth

```text
branch = main
HEAD = origin/main = 34b6a321a69e0315f410ac0876cd5e9734a77206
tracked clean (.tmp only)
project branch/commit/push/PR = NONE
```

## Handoff entrant

```text
tip  = 3f176400a36818950b789ac461a4fa4da9b6f27e
blob = 49b5b39b1310bbbc526b7f06aaa844e843d67174
prior CASE C / real target NOT SELECTED confirmed
```

## Sources / CKC

```text
template + routing + validation checklist + synthetic map consulted
CKC cycle 7 = candidate/fallback (no execution authority)
docs 160/161 + Option B helper/CLI/operator + migrations consulted
Neon pricing + projects docs verified at runtime
```

## Neon Free runtime verification (F01–F06)

```text
F01 Free plan available = PASS ($0/month permanent Free)
F02 Cost displayed = $0 = PASS
F03 No card required = PASS (pricing: no credit card required)
F04 Not auto-convertible trial = PASS (Free is permanent, not a trial)
F05 aws-eu-central-1 available = PASS (docs/changelog confirm Frankfurt capacity)
F06 PostgreSQL 16 available = PASS (PG18 default for new projects; PG16 still supported — must select explicitly)
```

## Auth / billing

```text
HUMAN NEON AUTH completed by Morris (console)
ACCOUNT_PLAN = Free
ADDITIONAL_COST = $0
PAYMENT_METHOD_REQUIRED = NO
UPGRADE_REQUIRED = NO
card entry = NOT REQUESTED / NOT PERFORMED
```

## Project safe metadata

```text
NEON_PROJECT_NAME=sfia-studio-finops-t7-shadow-pilot
ORG_LABEL=SFIA Studio
ACCOUNT_PLAN=Free
ADDITIONAL_COST=$0
PAYMENT_METHOD_REQUIRED=NO
UPGRADE_REQUIRED=NO
REGION_LABEL=AWS Europe Central 1 (Frankfurt)
REGION_ID=aws-eu-central-1
POSTGRES_MAJOR=16
DEFAULT_BRANCH_NAME=production
COMPUTE_SIZE=0.25-2 CU
SCALE_TO_ZERO=ENABLED (Free default)
USAGE_COMPUTE=0/100 CU-hrs
USAGE_STORAGE=0/0.5 GB
USAGE_NETWORK=0/5 GB
PERSISTENT=YES
DEDICATED_PROJECT=YES
NON_PROD=YES
NO_REAL_USER_DATA=YES
PROVIDER_DEFAULT_BRANCH_NAME=production (NOT application production)
TARGET_LABEL=neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot
KEYCHAIN_SERVICE=sfia-studio-finops-t7-shadow-pilot-DATABASE_URL_DIRECT
DATABASE_NAME = neondb (default dedicated project database — no second DB created)
ENDPOINT_HOST_SAFE = ep-dry-shape-b1fabcbm.c-5.eu-central-1.aws.neon.tech
```

## Direct / TLS

```text
direct/non-pooled = YES (hostname has no -pooler)
sslmode=require + channel_binding=require
TLS transport connect with rejectUnauthorized = YES
sslmode=disable connect = REJECTED
pg_stat_ssl.ssl may report false behind Neon proxy (expected)
TLS_ACTIVE (GO evidence) = True
SERVER_MAJOR = 16
```

## Keychain handoff

```text
KEYCHAIN_ENTRY_PRESENT = YES
KEYCHAIN_SERVICE = sfia-studio-finops-t7-shadow-pilot-DATABASE_URL_DIRECT
KEYCHAIN_ACCOUNT = morris
credential value exposed in Git/report/handoff/stdout = NO
.env created = NO
```

## Safe canonical identity

```text
host=ep-dry-shape-b1fabcbm.c-5.eu-central-1.aws.neon.tech
port=5432
database=neondb
```

## Fingerprints

```text
FP-A = 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331
FP-B = 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331
ORACLE_MATCH = True
```

## Pre-migration cleanliness

```text
PUBLIC_TABLE_COUNT before migrate = 0
NO_EXISTING_APPLICATION_DATA = YES
```

## Migrations

```text
MIGRATION_STATUS = SUCCESS
applied =
- 1754500000000_finops-t1-usage-ledger
- 1754600000000_finops-t2-aggregation-reconciliation
- 1754600001000_finops-t6-audit-journal
- 1754600002000_finops-t3-alert-review-state
- 1754600003000_finops-t4-enforcement-projection
- 1754600004000_finops-t7-rollout-config
custom migrations = NONE
```

## Schema readiness

```text
SCHEMA_READY = True
finops_rollout_config = PRESENT
tables = finops_alert_state, finops_audit_event, finops_cost_event, finops_enforcement_projection, finops_morris_review_state, finops_price_catalog_entry, finops_reconciliation_record, finops_rollout_config, finops_usage_aggregate, finops_usage_event, pgmigrations
```

## Rollout state before

```text
ROW_EXISTS = False
ROW_COUNT_BEFORE = 0
EFFECTIVE_MODE = OFF
```

## Target tuple

```text
TARGET neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot
FINGERPRINT 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331
TARGET_LABEL = audit-only (not technical DB binding)
```

## Real dry-run (no --apply)

```json
{
  "ok": true,
  "targetLabel": "neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot",
  "projectId": "sfia-studio-ops1",
  "requestedMode": "SHADOW",
  "expectedMode": "OFF",
  "beforeEffectiveMode": "OFF",
  "beforeRevision": null,
  "afterMode": "OFF",
  "afterRevision": null,
  "updatedAt": null,
  "applied": false,
  "result": "dry_run"
}
```

## Rollout after / mutation

```text
ROW_COUNT_AFTER = 0
MODE_AFTER = OFF
ROW_COUNT_BEFORE == ROW_COUNT_AFTER = YES
REAL_ACTIVATION_APPLY = ZERO
SHADOW_ACTIVATED = NO
```

## Cost / resource

```text
PROVIDER = Neon
PLAN = Free
ADDITIONAL_COST = $0
REGION = aws-eu-central-1
POSTGRES = 16
PERSISTENT = YES
DEDICATED = YES
NON_PROD = YES
SCALE_TO_ZERO = ENABLED (Free default)
```

## Deprovision procedure (NOT EXECUTED)

```text
1. Delete dedicated Neon project sfia-studio-finops-t7-shadow-pilot in Console
2. Remove Keychain item service sfia-studio-finops-t7-shadow-pilot-DATABASE_URL_DIRECT
Requires explicit future Morris decision if needed.
```

## R-T7-OP-TARGET-BINDING-01

```text
RESOLUTION CANDIDATE —
OPTION B ON MAIN —
NEON REAL TARGET ESTABLISHED —
FREE DEDICATED NON-PROD TARGET —
TARGET + FINGERPRINT VERIFIED —
REAL DRY-RUN PASS —
ZERO ROLLOUT MUTATION —
NO ACTIVATION —
PENDING CHATGPT / MORRIS VALIDATION.
```

## Other reserves

```text
R-QA-T7-C08-SCENARIO-01 = OPEN MINOR
R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR
POLICY VALUES = NOT SELECTED
expected-mode CAS / TOCTOU = DEFERRED to activation-readiness
```

## Anti-claims

```text
SHADOW = NOT ACTIVATED
POLICY VALUES = NOT SELECTED
REAL ACTIVATION APPLY = ZERO
MONITOR = NOT ACTIVATED
E1 = NOT AUTHORIZED
NEON PROJECT CREATED ≠ SHADOW ACTIVATED
MIGRATIONS APPLIED ≠ SHADOW ACTIVATED
REAL DRY-RUN ≠ REAL APPLY
TARGET + FINGERPRINT ESTABLISHED ≠ ACTIVATION READY
TARGET + FINGERPRINT ESTABLISHED ≠ EXPECTED-MODE CAS VERIFIED
FREE TARGET ≠ PRODUCTION TARGET
PROVIDER DEFAULT BRANCH NAME ≠ APPLICATION PRODUCTION
R-T7 RESOLUTION CANDIDATE ≠ RESERVE CLOSED
```

## Repo scope

```text
CREATE/MODIFY/DELETE project files = 0
project commits/pushes/PR = 0
document 162 = NOT CREATED
```

## Next Morris gate

```text
GO T7 SHADOW ACTIVATION READINESS —
sfia-studio-ops1 —
TARGET neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot —
FINGERPRINT 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331 —
VERIFY EXPECTED-MODE ATOMICITY / CAS —
VERIFY CURRENT OFF + ROLLBACK —
VERIFY OBSERVABILITY —
REAL TARGET DRY-RUN ONLY —
NO SHADOW ACTIVATION.
```

## Verdict

```text
T7 SHADOW PILOT NEON TARGET ESTABLISHED WITH RESERVE —
CYCLE 7 CRITICAL —
PROJECT sfia-studio-ops1 —
PROVIDER NEON —
FREE / NO-ADDITIONAL-COST TARGET VERIFIED —
AWS EU CENTRAL 1 FRANKFURT —
POSTGRES 16 —
DEDICATED NON-PROD PROJECT VERIFIED —
DIRECT TLS CONNECTION VERIFIED —
SECURE MACOS KEYCHAIN HANDOFF VERIFIED —
NO SECRET LEAK —
SAFE TARGET IDENTITY CAPTURED —
TARGET FINGERPRINT VERIFIED BY TWO ORACLES —
SCHEMA READY —
INITIAL EFFECTIVE MODE OFF —
REAL TARGET DRY-RUN PASS —
APPLIED FALSE —
ROLLOUT MUTATION ZERO —
TARGET + FINGERPRINT TUPLE ESTABLISHED —
R-T7-OP-TARGET-BINDING-01 RESOLUTION CANDIDATE —
NO PROJECT FILE CHANGES —
SHADOW NOT ACTIVATED —
POLICY VALUES NOT SELECTED —
HANDOFF REMOTE VERIFIED
```
