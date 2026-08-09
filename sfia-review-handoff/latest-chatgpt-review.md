# Cycle 12 Critical — FinOps T7 SHADOW — First Pilot Observation — Review Pack

**Level:** FULL
**Date/heure:** 2026-08-09 21:12:20 CEST / 2026-08-09 19:12:20 UTC
**Repo:** mcleland147/sfia-workspace
**Cycle:** 12 — Observabilité / RUN readiness
**Profil:** Critical
**Typologie:** RUN / LIVE OBSERVATION

---

## Morris GO (exact)

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

## Local Git Truth

| Field | Value |
|---|---|
| branch | `main` |
| HEAD / origin/main | `96a8a14bc894b520043b3a8f758b1fb14a72a5e4` |
| BASELINE_PINNED | YES |
| tracked clean | YES (`?? .tmp-sfia-review/` only) |
| staged | NONE |

---

## Sources consulted

Cycle template / routing / validation checklist / v2.5 method / `02-fifteen-cycles-synthetic-map.md` · incoming handoff · docs 160/161/162 · platform AI config/provider/openaiProvider · T7 pilot composition / shadow deps / policy source / target identity / operator / CLI · usage/audit persistence paths.

CKC: cycle 12 detailed ABSENT · fallback synthetic map + §4.12 · candidate · Ops realism · no execution authority.

---

## Incoming handoff

| Field | Expected | Observed |
|---|---|---|
| tip | `6fef10eecdf7e2682b2441ac75484015def7cc27` | MATCH |
| blob | `58a620c488bd7c64cf596fbc876487851275b673` | MATCH |

Confirms Cycle 11 Critical · PF 18/18 · apply total 1 · SHADOW rev1 · post-SHADOW openai/`gpt-5.6-sol` · FINOPS_PROVIDER_BLOCK=NO · usage/audit PASS · policy EMPTY · rollback not executed · OBS-01/C08 accepted first-pilot · T4-T3 deferred · next gate OBSERVATION.

---

## Initial SHADOW snapshot

| Field | Value |
|---|---|
| ROW_EXISTS | true |
| MODE | SHADOW |
| REVISION | 1 |
| UPDATED_AT | 2026-08-09T18:50:15.239Z |
| SAFE_IDENTITY | ep-dry-shape-b1fabcbm.c-5.eu-central-1.aws.neon.tech:5432/neondb |
| FINGERPRINT | `7476c251…` MATCH |
| CONNECTION | PASS |

---

## Keychain / model / provider hygiene

| Field | Value |
|---|---|
| DB Keychain | PRESENT NON_EMPTY (service/account as authorized) |
| OpenAI Keychain | PRESENT NON_EMPTY |
| OPENAI_MODEL | gpt-5.6 |
| FAKE_PROVIDER_FORCED | NO |
| Provider path | resolveConversationProvider → OpenAIConversationProvider (Responses) → PlatformAiExecutionAdapter → composeExecutionRunD2D3T7ShadowPilot |
| REAL_SECRET_LEAK | NO |

---

## Policy state

POLICY_VALUES_SELECTED = NO
POLICY_SOURCE_STATE = EMPTY / NOT_CONFIGURED (`Object.freeze({})`)

---

## Baseline usage/audit (B0 before observation probes)

| Field | Value |
|---|---|
| USAGE_BASELINE_COUNT (U0) | 1 (activation SHADOW probe retained) |
| AUDIT_BASELINE_COUNT (A0) | 1 |
| usage maxOccurredAt | 2026-08-04T09:15:00.000Z (execution clock composition quirk; known) |
| audit maxOccurredAt | 2026-08-09T18:50:34.498Z |

---

## Bound contract

OBSERVATION_PROVIDER_PROBES_MAX=3 · WINDOW≤10m · RETRY=0 · MODEL_FALLBACK=NONE · LOAD_TEST=NO

Harness reused/copied under `.tmp-sfia-review/t7-shadow-observation/` from activation harness; runner added for per-probe precheck + correlation telemetry.

---

## Probe 1

| Field | Value |
|---|---|
| index | 1 |
| correlationId | `corr:t7live:live-shadow-1786302709143` |
| runId | `executionrun:d2d1:0001` |
| PROVIDER_ID | openai |
| MODEL_RETURNED | gpt-5.6-sol |
| response hash16 | `b2c089d2bfa77954` |
| invoked/completed | True / True |
| RUN_STATE | succeeded |
| FINOPS_CAPTURE_STATUS | created |
| FINOPS_PROVIDER_BLOCK | False |
| tokens in/out/total | 25 / 11 / 36 |
| DURATION_MS | 2273 |
| usage event | `evt_e3af4ce4c6eee26129fe1fd9501defbcb1234bed8db2cc0e755237ac9cce08e1` |
| audit event | `aud_bc90c37a2ca89f79cc182dd0084f64c12ed05b0c38a16cc2ee7eab33f44d4635` / `finops_capture_created` |
| CROSS_PROJECT_USAGE | 0 |
| pre/post rollout | SHADOW/1 → SHADOW/1 |
| correlation OK | True |

## Probe 2

| Field | Value |
|---|---|
| index | 2 |
| correlationId | `corr:t7live:live-shadow-1786302723022` |
| runId | `executionrun:d2d1:0001` |
| PROVIDER_ID | openai |
| MODEL_RETURNED | gpt-5.6-sol |
| response hash16 | `94adc115ebb86aef` |
| invoked/completed | True / True |
| RUN_STATE | succeeded |
| FINOPS_CAPTURE_STATUS | created |
| FINOPS_PROVIDER_BLOCK | False |
| tokens in/out/total | 25 / 11 / 36 |
| DURATION_MS | 1732 |
| usage event | `evt_da0ec4fda9f4d4d4af683747917662c61b1de1112c457c29b9cd05118e114f1e` |
| audit event | `aud_b0d55ae7aa61c3341ff8f31b82f9eb14f5384672e96faffc33f374e2f674c97f` / `finops_capture_created` |
| CROSS_PROJECT_USAGE | 0 |
| pre/post rollout | SHADOW/1 → SHADOW/1 |
| correlation OK | True |

## Probe 3

| Field | Value |
|---|---|
| index | 3 |
| correlationId | `corr:t7live:live-shadow-1786302725662` |
| runId | `executionrun:d2d1:0001` |
| PROVIDER_ID | openai |
| MODEL_RETURNED | gpt-5.6-sol |
| response hash16 | `8b70722dba3fc384` |
| invoked/completed | True / True |
| RUN_STATE | succeeded |
| FINOPS_CAPTURE_STATUS | created |
| FINOPS_PROVIDER_BLOCK | False |
| tokens in/out/total | 25 / 11 / 36 |
| DURATION_MS | 2426 |
| usage event | `evt_afde374b862d49a652f85b49667c8040bf3c81e2926e394fd629b666c51328ff` |
| audit event | `aud_c6cd978f6e2586977a5cd54a5033cf76f870f494ed81a187848707be2e35f259` / `finops_capture_created` |
| CROSS_PROJECT_USAGE | 0 |
| pre/post rollout | SHADOW/1 → SHADOW/1 |
| correlation OK | True |

---

## Final durable state

| Field | Value |
|---|---|
| MODE | SHADOW |
| REVISION | 1 |
| USAGE_FINAL_COUNT (U1) | 4 |
| AUDIT_FINAL_COUNT (A1) | 4 |
| U1−U0 | 3 |
| A1−A0 | 3 |
| SHADOW | KEEP ACTIVE |

Cardinality matches design: one usage + one audit capture per successful SHADOW provider run.

---

## CALIBRATION_INPUTS_ONLY

| Metric | Value |
|---|---|
| probes attempted / provider pass | 3 / 3 |
| usage captures / audits | 3 / 3 |
| correlation match rate | 3/3 |
| input tokens total | 75 |
| output tokens total | 33 |
| total tokens | 108 |
| durations_ms | [2273, 1732, 2426] |
| min / median / max ms | 1732 / 2273 / 2426 |
| models returned | ['gpt-5.6-sol', 'gpt-5.6-sol', 'gpt-5.6-sol'] |
| capture statuses | ['created', 'created', 'created'] |
| FINOPS_PROVIDER_BLOCK | all false |
| anomalies | NONE observed in sample |

Anti-claims: NOT a SLO · NOT a load benchmark · NOT statistically representative · NOT a calibrated policy · NO monthly cost extrapolation · NO threshold recommendation.

---

## Safety triggers

| Trigger | Result |
|---|---|
| ST1 FinOps blocks provider | FALSE |
| ST2 usage missing after window | FALSE |
| ST3 audit missing after window | FALSE |
| ST4 corruption / cross-project | FALSE |

ROLLBACK_REQUIRED=NO · ROLLBACK_EXECUTED=NO · prepared SHADOW→OFF command unused.

---

## O01–O24

All **PASS**.

---

## Reserves

| Reserve | Status |
|---|---|
| CAS | CLOSED |
| TARGET-BINDING | CLOSED |
| OBS-01 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY — still no durable per-execution decision/reason sink; not closed |
| C08 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY — not re-run / not closed |
| T4-T3 | OPEN BEFORE MONITOR + DEFERRED |

POLICY VALUES=NOT SELECTED · MONITOR=NOT ACTIVATED · E1=NOT AUTHORIZED

---

## Project mutation / secret hygiene

PROJECT mutations ZERO · secrets not written to files/Git · process-only injection · unset after · SECRET_LEAK=NO

---

## Sample limits

Three synthetic continuity probes only. Ops realism for repeatability — not product traffic, not MONITOR readiness claim.

---

## Decisions Morris required (options only — Cursor does not decide)

- continue additional SHADOW observation if factual uncertainty remains;
- open a bounded calibration cycle later;
- open a separate rollback-demonstration cycle later;
- pause trajectory / hold.

NOT concluded: READY FOR MONITOR. MONITOR requires distinct Morris GO + applicable preconditions (incl. T4-T3).

---

## Temporary harnesses created/copied this cycle

### `.tmp-sfia-review/t7-shadow-observation/provider-probe.ts`

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

### `.tmp-sfia-review/t7-shadow-observation/run-observation.ts`

```typescript
/**
 * Cycle 12 observation runner — temporary untracked.
 * Runs one SHADOW probe then correlates usage/audit by correlationId.
 * Args: <probeIndex 1..3>
 */
import { createRequire } from "node:module";
import { createHash } from "node:crypto";
import { spawn } from "node:child_process";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { deriveFinOpsT7TargetIdentity, assertExpectedTargetFingerprintMatch } from "../../projects/sfia-studio/app/lib/oa/finops/server/finOpsT7TargetIdentity.ts";
import { resolveVersionedFinOpsT7ShadowPolicy } from "../../projects/sfia-studio/app/lib/oa/finops/server/versionedFinOpsT7ShadowPolicySource.ts";
import { isFakeConversationProviderForced, getLiveConversationAvailability } from "../../projects/sfia-studio/app/lib/platform/ai/config.ts";

const require = createRequire(new URL("../../projects/sfia-studio/app/package.json", import.meta.url));
const { Pool } = require("pg") as typeof import("pg");

const PILOT = "sfia-studio-ops1";
const EXPECTED_FP = "7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function readRollout(pool: any) {
  const row = await pool.query(
    `SELECT mode, revision::text AS revision, updated_at FROM finops_rollout_config WHERE project_id=$1`,
    [PILOT],
  );
  const exists = (row.rowCount ?? 0) > 0;
  return {
    ROW_EXISTS: exists,
    MODE: exists ? String(row.rows[0].mode) : null,
    REVISION: exists ? String(row.rows[0].revision) : null,
    UPDATED_AT: exists ? row.rows[0].updated_at : null,
    EFFECTIVE_MODE: exists ? String(row.rows[0].mode) : "OFF",
  };
}

async function waitTelemetry(pool: any, correlationId: string) {
  const deadline = Date.now() + 60_000;
  let attempt = 0;
  while (attempt < 3 && Date.now() < deadline) {
    attempt += 1;
    const usage = await pool.query(
      `SELECT event_id::text, correlation_id, project_id, provider, model, usage_status,
              input_tokens::text, output_tokens::text, total_tokens::text, occurred_at
       FROM finops_usage_event WHERE project_id=$1 AND correlation_id=$2`,
      [PILOT, correlationId],
    );
    const audit = await pool.query(
      `SELECT audit_event_id::text, event_type, correlation_id, project_id, occurred_at
       FROM finops_audit_event WHERE project_id=$1 AND correlation_id=$2`,
      [PILOT, correlationId],
    );
    const otherUsage = await pool.query(
      `SELECT COUNT(*)::int AS c FROM finops_usage_event WHERE correlation_id=$1 AND project_id <> $2`,
      [correlationId, PILOT],
    );
    if ((usage.rowCount ?? 0) >= 1 && (audit.rowCount ?? 0) >= 1) {
      return {
        attempts: attempt,
        USAGE_ROWS: usage.rows,
        AUDIT_ROWS: audit.rows,
        CROSS_PROJECT_USAGE: otherUsage.rows[0].c,
        USAGE_COUNT_FOR_CORR: usage.rowCount,
        AUDIT_COUNT_FOR_CORR: audit.rowCount,
      };
    }
    if (attempt < 3) await new Promise((r) => setTimeout(r, 15_000));
  }
  const usage = await pool.query(
    `SELECT event_id::text, correlation_id, project_id, provider, model, usage_status,
            input_tokens::text, output_tokens::text, total_tokens::text, occurred_at
     FROM finops_usage_event WHERE project_id=$1 AND correlation_id=$2`,
    [PILOT, correlationId],
  );
  const audit = await pool.query(
    `SELECT audit_event_id::text, event_type, correlation_id, project_id, occurred_at
     FROM finops_audit_event WHERE project_id=$1 AND correlation_id=$2`,
    [PILOT, correlationId],
  );
  const otherUsage = await pool.query(
    `SELECT COUNT(*)::int AS c FROM finops_usage_event WHERE correlation_id=$1 AND project_id <> $2`,
    [correlationId, PILOT],
  );
  return {
    attempts: attempt,
    USAGE_ROWS: usage.rows,
    AUDIT_ROWS: audit.rows,
    CROSS_PROJECT_USAGE: otherUsage.rows[0].c,
    USAGE_COUNT_FOR_CORR: usage.rowCount ?? 0,
    AUDIT_COUNT_FOR_CORR: audit.rowCount ?? 0,
  };
}

function runProbe(): Promise<{ code: number; stdout: string; stderr: string }> {
  return new Promise((resolve) => {
    const probePath = path.join(__dirname, "provider-probe.ts");
    const child = spawn(
      "npx",
      ["--yes", "tsx", probePath, "SHADOW"],
      {
        cwd: path.resolve(__dirname, "../../projects/sfia-studio/app"),
        env: process.env,
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => { stdout += String(d); });
    child.stderr.on("data", (d) => { stderr += String(d); });
    child.on("close", (code) => resolve({ code: code ?? 1, stdout, stderr }));
  });
}

async function main() {
  const probeIndex = Number(process.argv[2] || "0");
  if (![1, 2, 3].includes(probeIndex)) throw new Error("Usage: run-observation.ts <1|2|3>");

  const url = process.env.DATABASE_URL_DIRECT?.trim() ?? "";
  if (!url) throw new Error("DATABASE_URL_DIRECT missing");
  if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY missing");
  if (process.env.OPENAI_MODEL !== "gpt-5.6") throw new Error("OPENAI_MODEL must be gpt-5.6");
  if (isFakeConversationProviderForced()) throw new Error("fake provider forced");
  const avail = getLiveConversationAvailability();
  if (!avail.available) throw new Error("live conversation unavailable");

  const id = deriveFinOpsT7TargetIdentity(url);
  assertExpectedTargetFingerprintMatch(id.fingerprint, EXPECTED_FP);
  const policy = resolveVersionedFinOpsT7ShadowPolicy({ projectId: PILOT } as any);
  if (policy !== null) throw new Error("UNAUTHORIZED POLICY VALUE PRESENT");

  const pool = new Pool({ connectionString: url, max: 1 });
  try {
    const before = await readRollout(pool);
    if (before.MODE !== "SHADOW" || before.REVISION !== "1") {
      console.log(JSON.stringify({ ok: false, code: "STATE_DRIFT", before }, null, 2));
      process.exit(4);
    }

    const probe = await runProbe();
    // Strip SSL warning noise; parse last JSON object
    const jsonStart = probe.stdout.lastIndexOf("{");
    const jsonText = jsonStart >= 0 ? probe.stdout.slice(jsonStart) : "";
    let probeResult: any = null;
    try { probeResult = JSON.parse(jsonText); } catch {
      console.log(JSON.stringify({
        ok: false,
        code: "PROBE_PARSE_FAILED",
        exitCode: probe.code,
        stderrTail: probe.stderr.slice(-500).replace(/sk-[A-Za-z0-9._-]+/g, "[redacted]"),
      }, null, 2));
      process.exit(1);
    }

    const correlationId = probeResult.CORRELATION_ID;
    let telemetry = null;
    if (probeResult.SUCCESS === true) {
      telemetry = await waitTelemetry(pool, correlationId);
    }
    const after = await readRollout(pool);

    const usageOk =
      telemetry &&
      telemetry.USAGE_COUNT_FOR_CORR === 1 &&
      telemetry.AUDIT_COUNT_FOR_CORR >= 1 &&
      telemetry.CROSS_PROJECT_USAGE === 0 &&
      telemetry.USAGE_ROWS[0]?.provider === "openai" &&
      telemetry.USAGE_ROWS[0]?.project_id === PILOT &&
      telemetry.AUDIT_ROWS.every((r: any) => r.project_id === PILOT && r.correlation_id === correlationId);

    const out = {
      PROBE_INDEX: probeIndex,
      PRECHECK_ROLLOUT: before,
      POLICY_EMPTY: true,
      FAKE_DISABLED: true,
      PROBE: probeResult,
      TELEMETRY: telemetry,
      USAGE_AUDIT_CORRELATION_OK: usageOk === true,
      POSTCHECK_ROLLOUT: after,
      FINOPS_PROVIDER_BLOCK: probeResult.FINOPS_PROVIDER_BLOCK === true,
      PROVIDER_SUCCESS: probeResult.SUCCESS === true,
    };
    console.log(JSON.stringify(out, null, 2));

    if (probeResult.SUCCESS !== true) process.exit(3);
    if (probeResult.FINOPS_PROVIDER_BLOCK === true) process.exit(6);
    if (!usageOk) process.exit(5);
    if (after.MODE !== "SHADOW" || after.REVISION !== "1") process.exit(4);
  } finally {
    await pool.end().catch(() => undefined);
  }
}

main().catch((e) => {
  console.error(JSON.stringify({ ok: false, message: String((e as Error).message || e).replace(/sk-[A-Za-z0-9._-]+/g, "[redacted]") }));
  process.exit(1);
});
```

---

## Unique verdict

T7 SHADOW OBSERVATION PASS WITH ACCEPTED RESERVES —
CYCLE 12 CRITICAL —
SHADOW KEPT ACTIVE REVISION 1 —
BOUNDED LIVE OBSERVATION COMPLETE —
REAL OPENAI PROVIDER CONTINUITY PASS —
PROBES 3/3 PASS —
PROVIDER RETRY ZERO —
USAGE OBSERVABILITY PASS —
AUDIT OBSERVABILITY PASS —
CORRELATION INTEGRITY PASS —
SIGNAL_ONLY / NEVER-BLOCK PRESERVED —
CALIBRATION INPUTS COLLECTED ONLY —
NO POLICY VALUES SELECTED —
OBS-01 REMAINS OPEN MINOR / ACCEPTED FIRST PILOT ONLY —
C08 REMAINS OPEN MINOR / ACCEPTED FIRST PILOT ONLY —
T4-T3 REMAINS OPEN BEFORE MONITOR —
ROLLBACK NOT REQUIRED / NOT EXECUTED —
MONITOR NOT ACTIVATED —
E1 NOT AUTHORIZED —
NO PROJECT MUTATION —
SECRET LEAK ZERO —
READY FOR CHATGPT VALIDATION / MORRIS NEXT SHADOW DECISION —
HANDOFF REMOTE VERIFIED.
