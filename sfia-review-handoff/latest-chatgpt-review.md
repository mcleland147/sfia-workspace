# Cycle 11 Critical — FinOps T7 SHADOW — Live Activation — Review Pack

**Level:** FULL
**Date/heure:** 2026-08-09 19:17:59 CEST / 2026-08-09 17:17:59 UTC
**Repo:** mcleland147/sfia-workspace
**Baseline:** SFIA v2.6
**Cycle:** 11 — Déploiement / release
**Profil:** Critical
**Typologie:** EVOL / LIVE ROLLOUT / CONTROLLED RELEASE
**Blocs:** FinOps · Sécurité · Déploiement/release · DevOps · Observabilité / RUN readiness

---

## Morris GO (exact)

GO T7 SHADOW LIVE ACTIVATION —
sfia-studio-ops1 —
TARGET neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot —
FINGERPRINT 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331 —
REVALIDATE TARGET IDENTITY + FINGERPRINT —
REVALIDATE CURRENT EFFECTIVE OFF —
REVALIDATE DRY-RUN ZERO MUTATION —
IF AND ONLY IF ALL PREFLIGHT CHECKS PASS, APPLY OFF→SHADOW ONCE —
VERIFY SHADOW REVISION / DURABLE STATE —
VERIFY PROVIDER CONTINUITY + USAGE/AUDIT OBSERVABILITY —
PREPARE ROLLBACK COMMAND BUT DO NOT ROLLBACK UNLESS REQUIRED —
NO POLICY VALUES —
NO MONITOR —
NO E1.

---

## Git truth

| Field | Value |
|---|---|
| branch | `main` |
| HEAD / origin/main | `96a8a14bc894b520043b3a8f758b1fb14a72a5e4` |
| BASELINE_PINNED | YES |
| tracked clean | YES (`?? .tmp-sfia-review/` only) |
| staged | NONE |
| CAS ancestor `5d3f608…` | YES |

---

## Sources consultées

- cycle template / routing / validation checklist / v2.5 method / CKC matrix / 02-fifteen-cycles synthetic map
- docs 160 / 161 / 162
- `finOpsT7TargetIdentity.ts`, `finops-t7-shadow-rollout.ts`, `operateFinOpsT7ShadowRollout.ts`, rollout store/port, pilot composition, shadow deps, versioned policy source, platform AI config/provider
- current handoff `sfia/review-handoff`

---

## CKC

| Field | Value |
|---|---|
| cycle | 11 — Déploiement / release |
| detailed CKC | ABSENT |
| fallback | `02-fifteen-cycles-synthetic-map.md` + méthode Cycle 11 |
| autorité | aucune |

---

## Incoming handoff

| Field | Expected | Observed |
|---|---|---|
| tip | `29467a80f4e806931281b2c7c4f8dbe81e127a91` | MATCH |
| blob | `c7e57b06a455d9b1026b39cc2f3306615983c805` | MATCH |

Confirms: CAS CLOSED · TARGET-BINDING CLOSED · OBS OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY · C08 OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY · T4-T3 OPEN BEFORE MONITOR + DEFERRED · PRE_ACTIVATION_RESERVE_BLOCKER NONE · LIVE_ACTIVATION_PREFLIGHT STILL REQUIRED · SHADOW NOT ACTIVATED · POLICY NOT SELECTED · MONITOR NOT ACTIVATED · E1 NOT AUTHORIZED.

---

## Reserves before activation (unchanged by this cycle)

| Reserve | Status |
|---|---|
| R-T7-OP-EXPECTED-MODE-CAS-01 | CLOSED |
| R-T7-OP-TARGET-BINDING-01 | CLOSED |
| R-T7-SHADOW-OBS-01 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY |
| R-QA-T7-C08-SCENARIO-01 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY |
| R-T4-T3-SYNC-01 | OPEN BEFORE MONITOR + DEFERRED UNTIL PRE-MONITOR |

---

## Operator contract verification

| Contract | Result |
|---|---|
| fingerprint mandatory before Pool | PASS |
| pilot projectId bounded `sfia-studio-ops1` | PASS |
| modes OFF\|SHADOW only | PASS |
| MONITOR/E1 refused | PASS |
| dry-run without CAS | PASS |
| apply via `compareAndSwapProjectRollout` | PASS |
| CAS expectedMode + expectedRevision | PASS |
| absent/effective OFF supported | PASS |
| stale actor zero mutation (prior CAS proof) | PASS (not re-run) |
| rollback SHADOW→OFF supported by CLI | PASS (command prepared; not executed) |

**OPERATOR CONTRACT DRIFT = NO**

---

## Policy source

| Field | Value |
|---|---|
| POLICY_VALUES_SELECTED | NO |
| POLICY_SOURCE_STATE | EMPTY / NOT_CONFIGURED (`Object.freeze({})`) |
| Expected first-pilot semantics | allow / not_configured / signal_only |

---

## Secret hygiene

| Field | Value |
|---|---|
| Keychain service | `sfia-studio-finops-t7-shadow-pilot-DATABASE_URL_DIRECT` |
| Keychain account | `morris` |
| Keychain presence | YES |
| DATABASE_URL_DIRECT_READ | YES — PROCESS ONLY |
| RAW_DATABASE_URL_PRESENT | NO (never printed / not in pack) |
| PASSWORD_VALUE_PRESENT | NO |
| REAL_SECRET_LEAK | NO |
| Secret cleared from shell after preflight | YES |

---

## Target identity + connection

| Field | Value |
|---|---|
| hostname | `ep-dry-shape-b1fabcbm.c-5.eu-central-1.aws.neon.tech` |
| port | 5432 |
| database | `neondb` |
| fingerprint | `7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331` |
| SAFE_IDENTITY_MATCH | YES |
| TARGET_FINGERPRINT_MATCH | YES |
| CONNECTION | PASS |
| SERVER_MAJOR | 16 |
| CURRENT_DATABASE | `neondb` |
| TARGET_LABEL | `neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot` |

Note: `SHOW ssl` returned `off` (Neon GUC); connection used Neon connection-string TLS path via `pg` driver (same as CLI). No config mutation.

---

## Initial rollout snapshot

| Field | Value |
|---|---|
| ROW_EXISTS | false |
| MODE | null |
| REVISION | null |
| UPDATED_AT | null |
| EFFECTIVE_MODE | OFF |

**PRE_APPLY_ROW_SNAPSHOT** = absent row / effective OFF (form A).

---

## Provider probe discovery — BLOCKING

Discovery:
- Real provider path = `composeExecutionRunD2D3T7ShadowPilot` + injected providers using `PlatformAiExecutionAdapter(resolveConversationProvider())`.
- Real OpenAI requires `OPENAI_API_KEY` + `OPENAI_MODEL` (`lib/platform/ai/config.ts`).
- No existing CLI/script in repo performs a live T7 pilot provider probe.
- Temporary harness under `.tmp-sfia-review/` could import production runtime, but **cannot** obtain a real provider secret:
  - `OPENAI_API_KEY` absent from process env
  - no Keychain item `sfia-studio-OPENAI_API_KEY` (or other discovered OpenAI service)
  - FakeAiExecutionAdapter rejected (not the configured live provider)

| Field | Value |
|---|---|
| PROVIDER_PROBE_AVAILABLE | NO |
| OFF_BASELINE_PROVIDER_PROBE | NOT EXECUTED |
| POST_SHADOW_PROVIDER_PROBE | NOT EXECUTED |
| Block reason | NO SAFE BOUNDED PROVIDER CONTINUITY PROBE — OPENAI_API_KEY unavailable without project mutation or inventing secrets |

Per §13 / §17: **STOP BEFORE APPLY**.

---

## Telemetry baseline (captured before dry-run / for reference)

| Field | Value |
|---|---|
| USAGE_BASELINE | projectId=sfia-studio-ops1 · count=0 · maxOccurredAt=null |
| AUDIT_BASELINE | projectId=sfia-studio-ops1 · count=0 · maxOccurredAt=null |
| usage columns | event_id, dedup_key, project_id, execution_run_id, correlation_id, provider, model, occurred_at, … |
| audit columns | audit_event_id, event_type, project_id, execution_run_id, correlation_id, occurred_at, payload_json, created_at |

---

## Real dry-run

Command (no secret):

```text
npm run finops:t7:rollout -- --project sfia-studio-ops1 --mode SHADOW --expected-mode OFF --target neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot --expected-target-fingerprint 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331
```

Sanitized result:

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

Post dry-run re-read: snapshot identical (ROW_EXISTS=false · EFFECTIVE_MODE=OFF · revision=null).

| Field | Value |
|---|---|
| DRY_RUN | PASS |
| DRY_RUN_MUTATION | ZERO |
| TARGET_FINGERPRINT_MATCH | YES |

---

## PF01–PF18

| ID | Check | Result |
|---|---|---|
| PF01 | main exact decision baseline | PASS |
| PF02 | tracked clean / staged none | PASS |
| PF03 | incoming handoff exact | PASS |
| PF04 | CAS CLOSED evidence | PASS |
| PF05 | target-binding CLOSED evidence | PASS |
| PF06 | OBS first-pilot acceptance | PASS |
| PF07 | C08 first-pilot acceptance | PASS |
| PF08 | T4-T3 deferred pre-MONITOR | PASS |
| PF09 | operator contract intact | PASS |
| PF10 | policy source EMPTY | PASS |
| PF11 | Keychain secret process-only | PASS |
| PF12 | safe identity exact | PASS |
| PF13 | fingerprint exact | PASS |
| PF14 | real target connection PASS | PASS |
| PF15 | current effective OFF | PASS |
| PF16 | safe bounded provider probe available | **FAIL** |
| PF17 | OFF baseline provider PASS | FAIL (blocked by PF16) |
| PF18 | real dry-run PASS + zero mutation | PASS |

**PF01–PF18 = 16/18 PASS · 2 FAIL (PF16/PF17)**

→ **NO APPLY**

---

## Apply

| Field | Value |
|---|---|
| REAL_APPLY_ATTEMPTS | 0 |
| REAL_APPLY_SUCCESS | NO (not attempted) |
| activation attempted | NO |
| apply command | NOT EXECUTED |

Final pre-apply state remained OFF; no §18 apply window opened due to PF failure.

---

## Durable SHADOW / post-activation checks

| Field | Value |
|---|---|
| DURABLE_SHADOW_STATE | N/A — not activated |
| SHADOW_REVISION | N/A |
| POST_SHADOW_PROVIDER_PROBE | N/A |
| USAGE_OBSERVABILITY | N/A |
| AUDIT_OBSERVABILITY | N/A |

---

## Rollback

Prepared command (not executed):

```text
npm run finops:t7:rollout -- --project sfia-studio-ops1 --mode OFF --expected-mode SHADOW --target neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot --expected-target-fingerprint 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331 --apply
```

| Field | Value |
|---|---|
| ROLLBACK_PREPARED | YES |
| ROLLBACK_REQUIRED | NO |
| ROLLBACK_EXECUTED | NO |
| ROLLBACK_RESULT | N/A |

---

## LA01–LA28

| ID | Result | Notes |
|---|---|---|
| LA01 | PASS | baseline pinned |
| LA02 | PASS | handoff exact |
| LA03 | PASS | CAS CLOSED |
| LA04 | PASS | target-binding CLOSED |
| LA05 | PASS | OBS scoped acceptance |
| LA06 | PASS | C08 scoped acceptance |
| LA07 | PASS | T4-T3 deferred |
| LA08 | PASS | policy absent |
| LA09 | PASS | secret hygiene |
| LA10 | PASS | safe identity |
| LA11 | PASS | fingerprint |
| LA12 | PASS | connection |
| LA13 | PASS | initial OFF |
| LA14 | FAIL | probe path not safely resolvable (no live AI secret) |
| LA15 | FAIL | OFF provider baseline not run |
| LA16 | PASS | telemetry baseline captured |
| LA17 | PASS | dry-run |
| LA18 | PASS | zero mutation |
| LA19 | N/A | apply not reached |
| LA20 | PASS | exactly zero apply attempts (correct under stop) |
| LA21 | N/A | no apply result |
| LA22 | N/A | no SHADOW |
| LA23 | N/A | |
| LA24 | N/A | |
| LA25 | N/A | |
| LA26 | PASS | signal_only / never-block code path unchanged; policy EMPTY |
| LA27 | PASS | rollback prepared; not required/executed |
| LA28 | PASS | no project mutation / no policy / no MONITOR / no E1 |

---

## Final runtime state

| Field | Value |
|---|---|
| EFFECTIVE_MODE | OFF |
| ROW_EXISTS | false |
| REVISION | null |
| SHADOW | NOT ACTIVATED |
| REAL_TARGET_APPLY | ZERO |

---

## Project mutation

| Claim | Value |
|---|---|
| PROJECT_FILE_CHANGES | ZERO |
| PROJECT_COMMIT | ZERO |
| PROJECT_PUSH | ZERO |
| PROJECT_PR | ZERO |

Temporary untracked only: `.tmp-sfia-review/**` (readonly probe harness + this pack).

---

## Temporary harness (complete content)

Path: `.tmp-sfia-review/t7-live-activation/neon-readonly.ts`

```typescript
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import { deriveFinOpsT7TargetIdentity, assertExpectedTargetFingerprintMatch } from "../../projects/sfia-studio/app/lib/oa/finops/server/finOpsT7TargetIdentity.ts";

const require = createRequire(new URL("../../projects/sfia-studio/app/package.json", import.meta.url));
const { Pool } = require("pg") as typeof import("pg");

async function main() {
  const url = process.env.DATABASE_URL_DIRECT?.trim() ?? "";
  if (!url) throw new Error("DATABASE_URL_DIRECT missing");
  const expected = "7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331";
  const id = deriveFinOpsT7TargetIdentity(url);
  assertExpectedTargetFingerprintMatch(id.fingerprint, expected);

  const pool = new Pool({ connectionString: url, max: 1 });
  try {
    const ver = await pool.query("SHOW server_version");
    const db = await pool.query("SELECT current_database() AS db");
    const ssl = await pool.query("SHOW ssl");
    const row = await pool.query(
      "SELECT project_id, mode, revision, updated_at FROM finops_rollout_config WHERE project_id = $1",
      ["sfia-studio-ops1"],
    );
    const exists = (row.rowCount ?? 0) > 0;
    const mode = exists ? String(row.rows[0].mode) : null;
    const revision = exists ? row.rows[0].revision : null;
    const updatedAt = exists ? row.rows[0].updated_at : null;
    const effective = !exists ? "OFF" : String(mode);

    const schema: Record<string, string[]> = {};
    for (const t of ["finops_usage_event", "finops_audit_event", "finops_rollout_config"]) {
      const cols = await pool.query(
        `SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 ORDER BY ordinal_position`,
        [t],
      );
      schema[t] = cols.rows.map((r: { column_name: string }) => r.column_name);
    }

    const usageCount = await pool.query(
      `SELECT COUNT(*)::int AS c FROM finops_usage_event WHERE project_id=$1`,
      ["sfia-studio-ops1"],
    );
    const auditCount = await pool.query(
      `SELECT COUNT(*)::int AS c FROM finops_audit_event WHERE project_id=$1`,
      ["sfia-studio-ops1"],
    );
    const usageMax = await pool.query(
      `SELECT MAX(occurred_at) AS m FROM finops_usage_event WHERE project_id=$1`,
      ["sfia-studio-ops1"],
    );
    const auditMax = await pool.query(
      `SELECT MAX(occurred_at) AS m FROM finops_audit_event WHERE project_id=$1`,
      ["sfia-studio-ops1"],
    );

    console.log(JSON.stringify({
      CONNECTION: "PASS",
      SERVER_VERSION: String(ver.rows[0].server_version),
      SERVER_MAJOR: String(ver.rows[0].server_version).split(".")[0],
      CURRENT_DATABASE: db.rows[0].db,
      SSL: String(ssl.rows[0].ssl),
      TARGET_LABEL: "neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot",
      SAFE_IDENTITY: { hostname: id.hostname, port: id.port, database: id.database },
      FINGERPRINT: id.fingerprint,
      PRE_APPLY_ROW_SNAPSHOT: {
        ROW_EXISTS: exists,
        MODE: mode,
        REVISION: revision,
        UPDATED_AT: updatedAt,
        EFFECTIVE_MODE: effective,
      },
      SCHEMA_COLUMNS: schema,
      USAGE_BASELINE: {
        projectId: "sfia-studio-ops1",
        count: usageCount.rows[0].c,
        maxOccurredAt: usageMax.rows[0].m,
      },
      AUDIT_BASELINE: {
        projectId: "sfia-studio-ops1",
        count: auditCount.rows[0].c,
        maxOccurredAt: auditMax.rows[0].m,
      },
    }, null, 2));

    if (effective !== "OFF") process.exit(3);
  } finally {
    await pool.end().catch(() => undefined);
  }
}

main().catch((e) => {
  console.error(JSON.stringify({ ok: false, message: String(e && e.message ? e.message : e) }));
  process.exit(1);
});
```

No secrets in harness. No OpenAI probe harness created (would be useless without key).

---

## Policy / MONITOR / E1 / accepted reserves

| Claim | Value |
|---|---|
| POLICY VALUES | NOT SELECTED |
| MONITOR | NOT ACTIVATED |
| E1 | NOT AUTHORIZED |
| OBS-01 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY (preserved) |
| C08 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY (preserved) |
| T4-T3 | OPEN BEFORE MONITOR + DEFERRED (preserved) |
| CAS | CLOSED |
| TARGET-BINDING | CLOSED |

---

## Next Morris gate (proposed — not executed)

GO T7 SHADOW LIVE ACTIVATION PROVIDER PROBE PRECONDITION —
PROVISION OPENAI_API_KEY + OPENAI_MODEL FOR BOUNDED PROCESS-ONLY USE —
OR POINT CURSOR TO EXISTING SECURE SECRET LOCATION —
THEN RETRY LIVE ACTIVATION PREFLIGHT FROM PF16 —
KEEP MAIN PINNED 96a8a14bc894b520043b3a8f758b1fb14a72a5e4 —
NO REAL TARGET APPLY UNTIL PF01–PF18 = 18/18 —
NO POLICY VALUES —
NO MONITOR —
NO E1.

Alternative if Morris prefers a different evidence path: authorize an explicit existing application surface that already holds live provider credentials, without inventing a new API.

---

## Unique verdict

T7 SHADOW LIVE ACTIVATION BLOCKED BEFORE APPLY —
CYCLE 11 CRITICAL —
CAUSE NO SAFE BOUNDED PROVIDER CONTINUITY PROBE (OPENAI_API_KEY UNAVAILABLE IN ENV/KEYCHAIN) —
PF16 FAIL —
REAL APPLY ZERO —
FINAL ROLLOUT OFF (ROW ABSENT) —
SHADOW NOT ACTIVATED —
TARGET IDENTITY / FINGERPRINT / DRY-RUN VERIFIED —
NO PROJECT MUTATION —
POLICY VALUES NOT SELECTED —
MONITOR NOT ACTIVATED —
E1 NOT AUTHORIZED —
MORRIS REVIEW REQUIRED —
HANDOFF REMOTE VERIFIED.
