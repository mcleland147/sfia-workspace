# Cycle 11 Critical — FinOps T7 SHADOW — Live Activation PF16 Continuation — Review Pack

**Level:** FULL
**Date/heure:** 2026-08-09 20:51:00 CEST / 2026-08-09 18:51:00 UTC
**Repo:** mcleland147/sfia-workspace
**Cycle:** 11 — Déploiement / release — T7 SHADOW live activation continuation
**Profil:** Critical
**Typologie:** EVOL / LIVE ROLLOUT / CONTROLLED RELEASE CONTINUATION

---

## Morris authority

### Original GO

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

### Continuation

GO REPRISE PF16 (re-authorized after Keychain OpenAI secret repaired)

Previous TOTAL_REAL_APPLY_ATTEMPTS_ACROSS_CYCLE before this run = 0.
This run consumed exactly one apply.

---

## Git truth

| Field | Value |
|---|---|
| branch | `main` |
| HEAD / origin/main | `96a8a14bc894b520043b3a8f758b1fb14a72a5e4` |
| BASELINE_PINNED | YES |
| tracked clean | YES |
| staged | NONE |
| CAS ancestor | YES (`5d3f608…`) |

---

## Incoming handoff

| Field | Expected | Observed |
|---|---|---|
| tip | `fcd7777c79b5f66891c92e612cfcfbb0faf8ba21` | MATCH |
| blob | `e010c1fb6b0a657e13b05de294b922dfd72641c9` | MATCH |

Previous: BLOCKED — Keychain OpenAI entry present but empty · REAL_APPLY=0 · OFF.

---

## Keychain / model / secret hygiene

| Field | Value |
|---|---|
| DB Keychain | `sfia-studio-finops-t7-shadow-pilot-DATABASE_URL_DIRECT` / `morris` · usable |
| OpenAI Keychain | `sfia-studio-OPENAI_API_KEY` / `morris` · PRESENT · non-empty (len≈164) · looksLikeKey=YES |
| OPENAI_MODEL | `gpt-5.6` (process-only) |
| FAKE_PROVIDER_FORCED | NO |
| RAW secrets logged | NO |
| Secrets written to files/Git | NO |
| REAL_SECRET_LEAK | NO |
| Secrets cleared from shell after use | YES |

---

## Provider runtime path

`resolveConversationProvider()` → `OpenAIConversationProvider` (Responses API)
→ `PlatformAiExecutionAdapter`
→ `composeExecutionRunProviders`
→ `composeExecutionRunD2D3T7ShadowPilot`

Harness: `.tmp-sfia-review/t7-live-activation/provider-probe.ts` (untracked).
Note: first harness attempt failed local validation (`timeoutMs` 90000 > MAX 60000) before any provider call; harness corrected to 60000; then OFF probe succeeded. No OpenAI API retry-on-failure; no model fallback.

---

## Fresh target / OFF preflight

| Field | Value |
|---|---|
| SAFE_IDENTITY_MATCH | YES |
| FINGERPRINT | `7476c251…` MATCH |
| CONNECTION | PASS · SERVER_MAJOR 16 · DB neondb |
| Initial snapshot | ROW_EXISTS=false · EFFECTIVE_MODE=OFF · revision=null |

---

## PF16 / PF17

### PF16 AVAIL

```json
{
  "OPENAI_API_KEY_AVAILABLE": true,
  "OPENAI_MODEL_CONFIGURED": true,
  "OPENAI_MODEL": "gpt-5.6",
  "LIVE_CONFIG_AVAILABLE": true,
  "FAKE_PROVIDER_FORCED": false,
  "PROVIDER": "openai"
}
```

**PF16 = PASS**

### PF17 OFF baseline provider

```json
{
  "PHASE": "OFF",
  "SUCCESS": true,
  "PROVIDER_ID": "openai",
  "MODEL_RETURNED": "gpt-5.6-sol",
  "PROVIDER_RESPONSE_ID_HASH16": "b29459bb281d25d8",
  "PROVIDER_INVOKED": true,
  "PROVIDER_COMPLETED": true,
  "RUN_STATE": "succeeded",
  "FINOPS_CAPTURE_STATUS": "disabled",
  "FINOPS_CAPTURE_REASON": "finops_pre_provider_capture_ineligible",
  "FINOPS_PROVIDER_BLOCK": false,
  "INPUT_TOKENS": 25,
  "OUTPUT_TOKENS": 11,
  "TOTAL_TOKENS": 36,
  "DURATION_MS": 2680,
  "CORRELATION_ID": "corr:t7live:live-off-1786301384888"
}
```

**PF17 = PASS** · FINOPS_PROVIDER_BLOCK=NO · capture disabled under OFF (expected).

---

## Fresh telemetry baseline (after OFF probe)

USAGE count=0 · AUDIT count=0 (OFF capture ineligible → no durable FinOps events).

---

## Fresh dry-run

```json
{
  "ok": true,
  "requestedMode": "SHADOW",
  "expectedMode": "OFF",
  "beforeEffectiveMode": "OFF",
  "beforeRevision": null,
  "afterMode": "OFF",
  "afterRevision": null,
  "applied": false,
  "result": "dry_run"
}
```

DRY_RUN_MUTATION = ZERO · post-read still OFF/absent.

---

## PF01–PF18

All PASS (18/18).

Including: main pinned · handoff · CAS/target-binding CLOSED · OBS/C08 first-pilot acceptance · T4-T3 deferred · operator contract · policy EMPTY · dual Keychain process-only · identity/fingerprint · connection · OFF · PF16 · PF17 · dry-run zero mutation.

---

## Final pre-apply

Identical to dry-run snapshot: EFFECTIVE_MODE=OFF · ROW_EXISTS=false · revision=null · **STABLE**.

---

## Unique apply OFF→SHADOW

Command (DB secret process-only; no OpenAI in rollout process):

```text
npm run finops:t7:rollout -- --project sfia-studio-ops1 --mode SHADOW --expected-mode OFF --target neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot --expected-target-fingerprint 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331 --apply
```

Result:

```json
{
  "ok": true,
  "beforeEffectiveMode": "OFF",
  "beforeRevision": null,
  "afterMode": "SHADOW",
  "afterRevision": 1,
  "updatedAt": "2026-08-09T18:50:15.239Z",
  "applied": true,
  "result": "applied"
}
```

| Field | Value |
|---|---|
| REAL_APPLY_ATTEMPTS_THIS_RUN | 1 |
| TOTAL_REAL_APPLY_ATTEMPTS_ACROSS_CYCLE | 1 |
| REAL_APPLY_SUCCESS | YES |

---

## Durable SHADOW verification

| Field | Value |
|---|---|
| ROW_EXISTS | true |
| MODE | SHADOW |
| REVISION | 1 |
| UPDATED_AT | 2026-08-09T18:50:15.239Z |
| DURABLE_SHADOW_STATE | VERIFIED |
| SHADOW_REVISION | 1 |

---

## Post-SHADOW provider continuity

```json
{
  "PHASE": "SHADOW",
  "SUCCESS": true,
  "PROVIDER_ID": "openai",
  "MODEL_RETURNED": "gpt-5.6-sol",
  "PROVIDER_RESPONSE_ID_HASH16": "721f7988af1a3afb",
  "PROVIDER_INVOKED": true,
  "PROVIDER_COMPLETED": true,
  "RUN_STATE": "succeeded",
  "FINOPS_CAPTURE_STATUS": "created",
  "FINOPS_PROVIDER_BLOCK": false,
  "INPUT_TOKENS": 25,
  "OUTPUT_TOKENS": 11,
  "TOTAL_TOKENS": 36,
  "DURATION_MS": 2509,
  "CORRELATION_ID": "corr:t7live:live-shadow-1786301432289"
}
```

**POST_SHADOW_PROVIDER_PROBE = PASS** · signal_only / never-block preserved · FINOPS_PROVIDER_BLOCK=NO.

---

## Usage / audit observability

Baseline after OFF: usage=0 audit=0.
After SHADOW probe:

| Field | Value |
|---|---|
| USAGE_OBSERVABILITY | PASS |
| AUDIT_OBSERVABILITY | PASS |
| USAGE_DELTA | 0 → 1 |
| AUDIT_DELTA | 0 → 1 |
| usage correlation | `corr:t7live:live-shadow-1786301432289` |
| usage provider/model | openai / gpt-5.6-sol · tokens 25/11/36 · status validated |
| audit event_type | `finops_capture_created` · same correlation · occurred_at 2026-08-09T18:50:34.498Z |

OBS-01 durable decision/reason sink still absent (accepted first-pilot scope) — not treated as failure.

---

## Rollback

Prepared SHADOW→OFF command (not executed).

| Field | Value |
|---|---|
| ROLLBACK_REQUIRED | NO |
| ROLLBACK_EXECUTED | NO |
| ROLLBACK_RESULT | N/A |

No R1–R4 trigger.

---

## RA01–RA30

**30/30 PASS** (apply/post/observability/rollback-handling all correct).

---

## Reserves / policy / MONITOR / E1

| Item | Status |
|---|---|
| CAS | CLOSED |
| TARGET-BINDING | CLOSED |
| OBS-01 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY |
| C08 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY |
| T4-T3 | OPEN BEFORE MONITOR + DEFERRED |
| POLICY VALUES | NOT SELECTED |
| MONITOR | NOT ACTIVATED |
| E1 | NOT AUTHORIZED |

---

## Project mutation

ZERO create/modify/delete/commit/push/PR.
Temporary only: `.tmp-sfia-review/**`.

---

## Final runtime state

| Field | Value |
|---|---|
| EFFECTIVE_MODE | SHADOW |
| REVISION | 1 |
| SHADOW | ACTIVATED |
| REAL_TARGET_APPLY | 1 (this cycle total) |

---

## Temporary harnesses (complete)

### provider-probe.ts

```typescript
/**
 * Temporary untracked harness — Cycle 11 PF16 continuation.
 * Uses production SFIA pilot composition + resolveConversationProvider().
 * Does NOT call new OpenAI() directly. Does NOT use FakeConversationProvider for AI.
 * Secrets must arrive via process env only; never logged.
 */
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { composeExecutionRunD2D3T7ShadowPilot } from "../../projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts";
import { composeExecutionRunProviders } from "../../projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunProviders.ts";
import { PlatformAiExecutionAdapter } from "../../projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts";
import { FakeGitReadAdapter } from "../../projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter.ts";
import { FixtureCursorExecutionAdapter } from "../../projects/sfia-studio/app/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter.ts";
import { FakeSecretSourceAdapter } from "../../projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter.ts";
import { RecordingExecutionEventSink } from "../../projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink.ts";
import { getFixture } from "../../projects/sfia-studio/app/lib/oa/execution-run/fixtures/catalogue.ts";
import {
  getLiveConversationAvailability,
  isFakeConversationProviderForced,
} from "../../projects/sfia-studio/app/lib/platform/ai/config.ts";
import { resolveConversationProvider } from "../../projects/sfia-studio/app/lib/platform/ai/provider.ts";
import { deriveFinOpsT7TargetIdentity, assertExpectedTargetFingerprintMatch } from "../../projects/sfia-studio/app/lib/oa/finops/server/finOpsT7TargetIdentity.ts";

const require = createRequire(
  new URL("../../projects/sfia-studio/app/package.json", import.meta.url),
);
const { Pool } = require("pg") as typeof import("pg");

const PILOT = "sfia-studio-ops1";
const EXPECTED_FP =
  "7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331";

function truncHash(value: string | undefined): string | null {
  if (!value) return null;
  return createHash("sha256").update(value, "utf8").digest("hex").slice(0, 16);
}

function phaseArg(): "OFF" | "SHADOW" | "AVAIL" {
  const a = process.argv[2]?.trim().toUpperCase();
  if (a === "OFF" || a === "SHADOW" || a === "AVAIL") return a;
  throw new Error("Usage: provider-probe.ts <AVAIL|OFF|SHADOW>");
}

async function main() {
  const phase = phaseArg();

  const availability = getLiveConversationAvailability();
  const fakeForced = isFakeConversationProviderForced();
  const model = process.env.OPENAI_MODEL?.trim() ?? "";

  if (phase === "AVAIL") {
    const missing =
      availability.available === false ? availability.missing : [];
    const out = {
      OPENAI_API_KEY_AVAILABLE: !missing.includes("OPENAI_API_KEY"),
      OPENAI_MODEL_CONFIGURED: !missing.includes("OPENAI_MODEL"),
      OPENAI_MODEL: model || null,
      LIVE_CONFIG_AVAILABLE: availability.available === true,
      FAKE_PROVIDER_FORCED: fakeForced,
      PROVIDER_RESOLVER: "resolveConversationProvider",
      PROVIDER: "openai",
    };
    console.log(JSON.stringify(out, null, 2));
    if (!availability.available || fakeForced || model !== "gpt-5.6") {
      process.exit(2);
    }
    return;
  }

  if (!process.env.DATABASE_URL_DIRECT?.trim()) {
    throw new Error("DATABASE_URL_DIRECT missing");
  }
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY missing");
  }
  if (model !== "gpt-5.6") {
    throw new Error("OPENAI_MODEL must be gpt-5.6");
  }
  if (fakeForced) {
    throw new Error("OPS1_CONVERSATION_PROVIDER=fake is forbidden");
  }
  if (!availability.available) {
    throw new Error(
      `live conversation unavailable: missing ${(availability as { missing: string[] }).missing.join(",")}`,
    );
  }

  const url = process.env.DATABASE_URL_DIRECT!;
  const id = deriveFinOpsT7TargetIdentity(url);
  assertExpectedTargetFingerprintMatch(id.fingerprint, EXPECTED_FP);

  const conversation = resolveConversationProvider();
  if (conversation.providerId !== "openai") {
    throw new Error(`unexpected providerId=${conversation.providerId}`);
  }
  // Ensure we did not resolve the fake provider.
  if (conversation.constructor?.name === "FakeConversationProvider") {
    throw new Error("FakeConversationProvider resolved — forbidden");
  }

  const pool = new Pool({ connectionString: url, max: 2 });
  const started = Date.now();
  try {
    const rollout = await pool.query(
      `SELECT mode, revision FROM finops_rollout_config WHERE project_id=$1`,
      [PILOT],
    );
    const exists = (rollout.rowCount ?? 0) > 0;
    const mode = exists ? String(rollout.rows[0].mode) : "OFF";
    const effective = exists ? mode : "OFF";
    if (phase === "OFF" && effective !== "OFF") {
      throw new Error(`expected OFF before probe, got ${effective}`);
    }
    if (phase === "SHADOW" && effective !== "SHADOW") {
      throw new Error(`expected SHADOW before probe, got ${effective}`);
    }

    const secretsAdapter = new FakeSecretSourceAdapter();
    const providers = composeExecutionRunProviders({
      ai: new PlatformAiExecutionAdapter(conversation, {
        defaultTimeoutMs: 60_000,
        verified: true,
      }),
      git: new FakeGitReadAdapter({
        repositoryAllowlist: [
          "o/r",
          "example/example",
          "mcleland147/sfia-studio",
          "mcleland147/sfia-workspace",
        ],
        pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
      }),
      cursor: new FixtureCursorExecutionAdapter(),
      secrets: { resolve: (secretId) => secretsAdapter.resolve(secretId) },
      events: new RecordingExecutionEventSink(),
    });

    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      nowIso: () => new Date().toISOString(),
      providers,
      // default versioned EMPTY policy source
    });

    const suffix = `live-${phase.toLowerCase()}-${Date.now()}`;
    const fixture = getFixture("nominal");
    const correlationId = `corr:t7live:${suffix}`;
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        intentId: `intent:t7live:${suffix}`,
        correlationId,
        requestedLane: "ai",
        requestedSource: "fixture",
      },
      context: {
        ...fixture.context,
        projectId: PILOT,
        declaredSource: "fixture",
      },
      providerRequest: {
        correlationId,
        lane: "ai",
        operation: "complete",
        messages: [
          {
            role: "user",
            content:
              "SFIA T7 bounded continuity probe. Reply with exactly: SFIA_T7_PROBE_OK",
          },
        ],
        timeoutMs: 60_000,
      },
      // MAX_COORDINATOR_TIMEOUT_MS = 60_000
      timeoutMs: 60_000,
    });

    await composition.flushAudit().catch(() => undefined);

    const usage = result.validatedUsage ?? result.run?.evidence?.[0]?.usage;
    const finopsCapture = result.finopsCapture ?? null;
    const providerResponseId =
      usage && typeof usage === "object" && "providerResponseId" in usage
        ? String((usage as { providerResponseId?: string }).providerResponseId ?? "")
        : "";

    const safe = {
      PHASE: phase,
      SUCCESS: result.ok === true && result.providerCompleted === true,
      PROVIDER_ID: conversation.providerId,
      MODEL_CONFIGURED: model,
      MODEL_RETURNED:
        usage && typeof usage === "object" && "model" in usage
          ? (usage as { model?: string }).model ?? null
          : null,
      PROVIDER_RESPONSE_ID_HASH16: truncHash(providerResponseId || undefined),
      PROVIDER_INVOKED: result.providerInvoked === true,
      PROVIDER_COMPLETED: result.providerCompleted === true,
      RUN_STATE: result.run?.state ?? null,
      FINOPS_CAPTURE_STATUS:
        finopsCapture && typeof finopsCapture === "object" && "status" in finopsCapture
          ? (finopsCapture as { status: string }).status
          : null,
      FINOPS_CAPTURE_REASON:
        finopsCapture && typeof finopsCapture === "object" && "reason" in finopsCapture
          ? (finopsCapture as { reason?: string }).reason ?? null
          : null,
      FINOPS_PROVIDER_BLOCK: false,
      INPUT_TOKENS:
        usage && typeof usage === "object" && "inputTokens" in usage
          ? (usage as { inputTokens?: number }).inputTokens ?? null
          : null,
      OUTPUT_TOKENS:
        usage && typeof usage === "object" && "outputTokens" in usage
          ? (usage as { outputTokens?: number }).outputTokens ?? null
          : null,
      TOTAL_TOKENS:
        usage && typeof usage === "object" && "totalTokens" in usage
          ? (usage as { totalTokens?: number }).totalTokens ?? null
          : null,
      DURATION_MS: Date.now() - started,
      CORRELATION_ID: correlationId,
      RUN_ID: result.run?.runId ?? null,
      ROLLOUT_EFFECTIVE_AT_PROBE: effective,
      ERROR_CATEGORY:
        result.ok === true
          ? null
          : result.failure?.code ?? result.failure?.family ?? "COORDINATE_FAILED",
    };

    // Defense: if FinOps somehow blocked provider, surface it.
    if (result.run?.state === "blocked") {
      (safe as { FINOPS_PROVIDER_BLOCK: boolean }).FINOPS_PROVIDER_BLOCK = true;
    }

    console.log(JSON.stringify(safe, null, 2));
    if (!safe.SUCCESS || safe.FINOPS_PROVIDER_BLOCK) process.exit(3);
  } finally {
    await pool.end().catch(() => undefined);
  }
}

main().catch((e) => {
  const message = String(e && (e as Error).message ? (e as Error).message : e)
    .replace(/sk-[A-Za-z0-9._-]+/g, "[redacted_key]")
    .replace(/postgres(ql)?:\/\/[^\s]+/gi, "postgres://[redacted]");
  console.error(JSON.stringify({ ok: false, message }, null, 2));
  process.exit(1);
});
```

### neon-readonly.ts

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

### obs-read.ts

```typescript
import { createRequire } from "node:module";
const require = createRequire(new URL("../../projects/sfia-studio/app/package.json", import.meta.url));
const { Pool } = require("pg") as typeof import("pg");
async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL_DIRECT!, max: 1 });
  try {
    const usage = await pool.query(
      `SELECT COUNT(*)::int AS c, MAX(occurred_at) AS m FROM finops_usage_event WHERE project_id=$1`,
      ["sfia-studio-ops1"],
    );
    const audit = await pool.query(
      `SELECT COUNT(*)::int AS c, MAX(occurred_at) AS m FROM finops_audit_event WHERE project_id=$1`,
      ["sfia-studio-ops1"],
    );
    const usageRows = await pool.query(
      `SELECT event_id::text, correlation_id, provider, model, usage_status, input_tokens, output_tokens, total_tokens, occurred_at
       FROM finops_usage_event WHERE project_id=$1 ORDER BY occurred_at DESC LIMIT 5`,
      ["sfia-studio-ops1"],
    );
    const auditRows = await pool.query(
      `SELECT audit_event_id::text, event_type, correlation_id, occurred_at
       FROM finops_audit_event WHERE project_id=$1 ORDER BY occurred_at DESC LIMIT 5`,
      ["sfia-studio-ops1"],
    );
    const rollout = await pool.query(
      `SELECT mode, revision, updated_at FROM finops_rollout_config WHERE project_id=$1`,
      ["sfia-studio-ops1"],
    );
    const usageCount = usage.rows[0].c as number;
    const auditCount = audit.rows[0].c as number;
    console.log(JSON.stringify({
      rollout: rollout.rows[0] || null,
      USAGE_OBSERVABILITY: usageCount > 0 ? "PASS" : "FAIL",
      AUDIT_OBSERVABILITY: auditCount > 0 ? "PASS" : "FAIL",
      USAGE_DELTA: { before: 0, after: usageCount, delta: usageCount },
      AUDIT_DELTA: { before: 0, after: auditCount, delta: auditCount },
      USAGE_RECENT: usageRows.rows,
      AUDIT_RECENT: auditRows.rows,
    }, null, 2));
    if (usageCount <= 0 || auditCount <= 0) process.exit(5);
  } finally {
    await pool.end().catch(() => undefined);
  }
}
main().catch((e) => {
  console.error(JSON.stringify({ ok: false, message: String((e as Error).message || e) }));
  process.exit(1);
});
```

---

## Next Morris gate (proposed — not executed)

GO T7 SHADOW OBSERVATION —
sfia-studio-ops1 —
TARGET neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot —
KEEP SHADOW ACTIVE —
COLLECT BOUNDED PROVIDER / USAGE / AUDIT EVIDENCE —
ASSESS FIRST-PILOT BEHAVIOR AND CALIBRATION INPUTS —
PRESERVE OBS-01 / C08 ACCEPTANCE SCOPE —
NO POLICY VALUES YET —
NO MONITOR —
NO E1 —
NO ROLLBACK UNLESS SAFETY TRIGGER.

---

## Unique verdict

T7 SHADOW LIVE ACTIVATION PASS WITH ACCEPTED RESERVES —
CYCLE 11 CRITICAL PF16 CONTINUATION —
OPENAI REAL PROVIDER PROBE PASS WITH GPT-5.6 —
PF01–PF18 18/18 PASS —
TARGET IDENTITY VERIFIED —
FINGERPRINT VERIFIED —
INITIAL EFFECTIVE MODE OFF —
FRESH DRY-RUN PASS / ZERO MUTATION —
OFF→SHADOW APPLY EXECUTED EXACTLY ONCE ACROSS FULL CYCLE —
ATOMIC CAS SUCCESS —
DURABLE SHADOW STATE VERIFIED —
SHADOW REVISION 1 —
POST-SHADOW PROVIDER CONTINUITY PASS —
USAGE OBSERVABILITY PASS —
AUDIT OBSERVABILITY PASS —
SIGNAL_ONLY / NEVER-BLOCK PRESERVED —
ROLLBACK PREPARED / NOT EXECUTED —
CAS CLOSED —
TARGET-BINDING CLOSED —
OBS-01 OPEN MINOR / ACCEPTED FOR FIRST SHADOW PILOT ONLY —
C08 OPEN MINOR / ACCEPTED FOR FIRST SHADOW PILOT ONLY —
T4-T3 OPEN BEFORE MONITOR / DEFERRED —
POLICY VALUES NOT SELECTED —
MONITOR NOT ACTIVATED —
E1 NOT AUTHORIZED —
NO PROJECT MUTATION —
SHADOW ACTIVE —
READY FOR CHATGPT VALIDATION / MORRIS SHADOW OBSERVATION DECISION —
HANDOFF REMOTE VERIFIED.
