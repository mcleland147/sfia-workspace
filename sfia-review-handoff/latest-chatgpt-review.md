# Cycle 1 Critical — FinOps T7 SHADOW — Bounded Calibration — Review Pack

**Level:** FULL
**Date/heure:** 2026-08-09 22:00:56 CEST / 2026-08-09 20:00:56 UTC
**Repo:** mcleland147/sfia-workspace
**Cycle type:** 1 — Cadrage
**Profil:** Critical
**Typologie v2.4:** EVOL / DECISION PREPARATION / READ-ONLY CALIBRATION
**projectId:** `sfia-studio-ops1`
**target:** `neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot`

---

## Morris GO (exact)

GO T7 SHADOW BOUNDED CALIBRATION

Autorise: lecture Git · lecture runtime DB strictement read-only · analyse · options candidates · recommandation non décisionnelle · review pack · handoff Git borné.

N’autorise PAS: sélection d’option · sélection thresholdCode/currency/thresholdAmount · modification policy source · provider call · rollout mutation · rollback · MONITOR · E1 · T4-T3 remediation · code change projet · PR/merge.

---

## Cycle Knowledge Contract

| Field | Value |
|---|---|
| recherché | oui |
| cycle | 1 — Cadrage |
| contrat | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` |
| statut | candidate |
| usage | experimental cognitive guidance |
| autorité | aucune autorité d’exécution |
| posture | distinguer intention, hypothèses, données disponibles, inconnues et décision Morris |
| anti-claim | calibration préparée ≠ policy validée ≠ MONITOR ready |

Blocs activés: FinOps · Observabilité / RUN readiness.
Blocs désactivés: Delivery · Architecture technique · Déploiement/release · Performance · GreenOps · UX/UI · RGPD · Accessibilité.

---

## Local Git Truth

| Field | Value |
|---|---|
| branch | `main` |
| HEAD | `96a8a14bc894b520043b3a8f758b1fb14a72a5e4` |
| origin/main | `96a8a14bc894b520043b3a8f758b1fb14a72a5e4` |
| BASELINE_PINNED | YES |
| tracked | CLEAN |
| staged | NONE |
| untracked allowed | `?? .tmp-sfia-review/` only |
| other untracked | NONE listed beyond `.tmp-sfia-review/**` |

---

## Sources consulted (Git)

Method: `prompts/templates/sfia-cycle-execution-template.md` · `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` · `method/sfia-fast-track/checklists/sfia-validation-checklist.md` · `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` · CKC routing matrix · `pilots/01-cadrage.md`.

FinOps: `types.enforcement.ts` · `evaluateFinOpsEnforcement.ts` · `types.aggregate.ts` · `buildUsageEvent.ts` · `composeFinOpsT7ShadowExecutionDeps.ts` · `versionedFinOpsT7ShadowPolicySource.ts` · `composeFinOpsT7Runtime.ts` · `postgresFinOpsEnforcementProjectionStore.ts` · `rebuildEnforcementProjection.ts` · `estimateUsageCost.ts` · `reconcileProjectPeriod.ts` · `blockingEligibility.ts` · `costEvidence.ts` · `postgresFinOpsUsageLedger.ts` · `postgresFinOpsReconciliation.ts` · `postgresFinOpsPriceCatalog.ts` · `postgresFinOpsAggregateStore.ts`.

---

## Incoming handoff (required)

| Field | Expected | Observed |
|---|---|---|
| tip | `4dff3af64dedd44bccb92e94d2413ba879867735` | MATCH |
| blob | `11bdea99e4aee7c0f96622d28afbbd3dfcba3b99` | MATCH |

Incoming confirms: Cycle 12 Critical · SHADOW rev1 · 3/3 probes PASS · retry=0 · usage 1→4 · audit 1→4 · correlation 3/3 · cross-project=0 · no anomalies · ST1–ST4 FALSE · rollback not executed · policy EMPTY · OBS-01 OPEN · C08 OPEN · T4-T3 OPEN BEFORE MONITOR · MONITOR NOT ACTIVATED · E1 NOT AUTHORIZED · project mutation ZERO.

---

## Calibration doctrine (applied)

| Layer | Applied? |
|---|---|
| OBSERVATION | YES — Git + Neon RO facts |
| HYPOTHESIS | YES — marked separately |
| OPTION | NO produced (evidence insufficient) |
| RECOMMENDATION | YES — non-décisionnelle |
| DECISION | Morris only |

Aucune OPTION ne devient DECISION dans ce cycle.

---

## Policy contract (Git)

| Contract | Evidence |
|---|---|
| `FinOpsT7ShadowPolicyInput` | `thresholdCode` · `currency` · `thresholdAmount` only |
| effect | omitted from source; adapter forces `effect: "signal_only"` |
| T4 compare | `blockingEligibleAmount` vs `thresholdAmount` |
| eligible < threshold | `allow` / `below_threshold` |
| eligible ≥ threshold + signal_only | `soft_signal` / `threshold_crossed_signal_only` |
| versioned source | `Object.freeze({})` |
| ACTIVE POLICY ENTRIES | **0** |
| historical 15/20/25/30 | FORBIDDEN as product thresholds (comments + adapter anti-claims) |
| runtime policy state | EMPTY / NOT_CONFIGURED (null resolver → allow/not_configured) |

---

## Point critique — tokens ≠ money

| Claim | Status |
|---|---|
| T1 usage ledger = NO MONEY | CONFIRMED (`buildUsageEvent.ts`) |
| Cycle 12 events carry tokens/provider/model only | CONFIRMED in Neon |
| tokens alone ≠ `thresholdAmount` | CONFIRMED |
| invent price / monthly extrapolate / recycle 15–30 | NOT DONE |

---

## Financial evidence model (Git)

```
usage events (T1 ledger; API_USAGE; tokens; NO MONEY)
    ↓  [NOT automatic in SHADOW capture]
cost events (T2; via explicit reconcileProjectPeriod facts
             OR estimation path needing R3 catalog)
    ↓
aggregates (finops_usage_aggregate; rebuildable)
    ↓
enforcement projection (T4; rebuildable; SoT-safe)
    ↓
T4 evaluateFinOpsEnforcement (only if policy non-null)
```

### Authoritative source per stage

| Stage | Authoritative |
|---|---|
| usage | `finops_usage_event` append-only ledger |
| cost | `finops_cost_event` (ledger/cost remain financially authoritative per T4 types) |
| projection | derived / rebuildable from cost events; not independent money SoT |
| T4 decision | projection + injected policy (absent ⇒ inert allow/not_configured) |

### Field definitions (code)

| Field | Definition |
|---|---|
| `sourceOfTruth` | domain enum on usage/cost (`API_USAGE`, `PROVIDER_OBSERVED`, `BILLED`, estimates, `UNKNOWN`) |
| `evidenceClass` | derived classification: estimated / observed / billed / unknown |
| `estimationStatus` | on cost events: available / unavailable / unknown |
| `catalogVersion` | R3 catalog entry version when estimation used |
| `providerObserved` / `billed` | projection amount buckets from eligible cost events |
| `blockingEligibleAmount` | **billed + providerObserved** (canonical Money scale-8; **no FX**) |

Contract comment in `types.enforcement.ts` matches implementation in `rebuildEnforcementProjection.ts` (`billedMoney.amountMinor + observedMoney.amountMinor`). **No divergence.**

Blocking eligibility (`blockingEligibility.ts`): only `BILLED` and `PROVIDER_OBSERVED` contribute. **`API_USAGE` never blocks** and never contributes to `blockingEligibleAmount`.

---

## Runtime safety precheck

| Check | Result |
|---|---|
| OpenAI calls | **0** — OPENAI_API_KEY NOT LOADED |
| DB secret | Keychain `sfia-studio-finops-t7-shadow-pilot-DATABASE_URL_DIRECT` / `morris` — loaded process-only; value never displayed |
| target identity | MATCH |
| fingerprint | `7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331` MATCH |
| rollout | ROW_EXISTS=true · MODE=SHADOW · REVISION=1 · updatedAt=`2026-08-09T18:50:15.239Z` |
| policy source | EMPTY |

---

## Database access

| Guarantee | Value |
|---|---|
| harness | `.tmp-sfia-review/t7-shadow-calibration/calibration-readonly.ts` |
| transaction | `BEGIN READ ONLY` … `COMMIT` |
| INSERT/UPDATE/DELETE/UPSERT/DDL/migration/rebuild/reconcile/refresh/rollout | **ZERO** |
| READ_ONLY_MUTATIONS | **0** |

---

## Usage evidence (bounded `sfia-studio-ops1`)

| Metric | Value |
|---|---|
| USAGE_EVENT_COUNT (U) | **4** |
| periodStart present | `2026-08-01` only |
| provider/model | openai / `gpt-5.6-sol` (all) |
| usage SoT / evidence / status | `API_USAGE` / `observed` / `validated` (all) |

| eventId (prefix) | correlationId | provider/model | in/out/total | occurredAt | periodStart | SoT | evidence | status |
|---|---|---|---|---|---|---|---|---|
| `evt_9e1f6085d43987bb…` | `corr:t7live:live-shadow-1786301432289` | openai / `gpt-5.6-sol` | 25/11/36 | 2026-08-04T09:15:00.000Z | 2026-08-01 | API_USAGE | observed | validated |
| `evt_afde374b862d49a6…` | `corr:t7live:live-shadow-1786302725662` | openai / `gpt-5.6-sol` | 25/11/36 | 2026-08-04T09:15:00.000Z | 2026-08-01 | API_USAGE | observed | validated |
| `evt_da0ec4fda9f4d4d4…` | `corr:t7live:live-shadow-1786302723022` | openai / `gpt-5.6-sol` | 25/11/36 | 2026-08-04T09:15:00.000Z | 2026-08-01 | API_USAGE | observed | validated |
| `evt_e3af4ce4c6eee261…` | `corr:t7live:live-shadow-1786302709143` | openai / `gpt-5.6-sol` | 25/11/36 | 2026-08-04T09:15:00.000Z | 2026-08-01 | API_USAGE | observed | validated |

Note: `occurredAt` stored as fixed pilot timestamp `2026-08-04T09:15:00.000Z` (same across events); durable capture audits from Cycle 12 are later (2026-08-09T19:11–19:12Z). Tokens are evidence of usage volume only — **not money**.

---

## Cost coverage

| Metric | Value |
|---|---|
| USAGE_EVENT_COUNT U | 4 |
| MATCHED_COST_EVENT_COUNT C | **0** |
| KNOWN_AMOUNT_COUNT K | **0** |
| COST_COVERAGE_RATE C/U | **0** |
| KNOWN_AMOUNT_COVERAGE_RATE K/U | **0** |
| COST_EVENTS_TOTAL_FOR_PROJECT | 0 |
| currencies | none |
| cost sourceOfTruth / evidenceClass / estimationStatus / catalogVersion | none |
| reconciliations | **0** |
| aggregates (`finops_usage_aggregate`) | **0** |
| price catalog entries total | **0** |
| catalog hits for openai/`gpt-5.6-sol` | **0** |

These rates are completeness controls on the small SHADOW sample — not product statistics.

---

## Enforcement projection (read-only inspect)

| Field | Value |
|---|---|
| rows for sfia-studio-ops1 | **ABSENT (0)** |
| blockingEligibleAmount | N/A — no projection |
| rebuild/reconcile/refresh executed | **NO** |

---

## T4 ↔ T3 readiness analysis

R-T4-T3-SYNC-01 remains **OPEN BEFORE MONITOR** (not closed by this cycle).

| Question | Finding |
|---|---|
| Is `gpt-5.6-sol` covered by exploitable T3/catalog? | **NO** — catalog empty; 0 hits |
| Are T4 cost events fed with clear provenance? | **NO cost events exist** |
| catalogVersion present when needed? | N/A — no estimation/cost |
| estimationStatus available? | N/A — no cost events |
| Are blockingEligibleAmount amounts traceable? | **NO projection / no eligible amounts** |
| Risk of policy on unsynced financial data? | **HIGH if numeric thresholds were invented now** |

**Verdict T4-T3 (calibration only):** `INSUFFICIENT FOR NUMERIC CALIBRATION`
**Never claimed:** T4-T3 CLOSED.

---

## E01–E12 sufficiency gate

| ID | Gate | Result |
|---|---|---|
| E01 | usage evidence identified | PASS (U=4) |
| E02 | cost-event linkage known | FAIL (C=0) |
| E03 | known monetary amounts available | FAIL (K=0) |
| E04 | currency unambiguous | FAIL (none) |
| E05 | sourceOfTruth acceptable for money/T4 | FAIL (usage=`API_USAGE` never contributes to blockingEligible; no BILLED/PROVIDER_OBSERVED cost) |
| E06 | evidenceClass understood | PASS for usage mapping; FAIL for cost (absent) |
| E07 | catalogVersion / pricing provenance | FAIL (catalog empty; model uncovered) |
| E08 | enforcement projection present/traceable | FAIL (absent) |
| E09 | blockingEligibleAmount provenance | FAIL (no amount chain) |
| E10 | no unresolved contradiction invalidating amounts | PASS (absence, not contradiction) |
| E11 | sample limitations explicit | PASS (n=4 probes/events; tokens≠money) |
| E12 | T4-T3 gap does not invalidate calibration-option exercise | FAIL — gap invalidates **numeric** options |

### CALIBRATION_EVIDENCE

**INSUFFICIENT**

---

## Candidate options

**NONE PRODUCED.**

Reason (exact gap):

1. No `finops_cost_event` linked to SHADOW usage (C=0, K=0).
2. Empty `finops_price_catalog_entry` — no authorized tariff for openai/`gpt-5.6-sol`.
3. No enforcement projection / no `blockingEligibleAmount`.
4. Usage SoT `API_USAGE` cannot feed T4 blocking-eligible money.
5. Forbidden to invent money from tokens / external price / historical 15–30.

### What exists
- SHADOW rev1 durable · 4 validated usage events · tokens/provider/model · T4 mechanics inert under EMPTY policy · financial pipeline code path understood.

### What is missing (minimal)
At least one of:
- **Authoritative monetary facts** for the pilot period as `finops_cost_event` with `sourceOfTruth ∈ {BILLED, PROVIDER_OBSERVED}`, known `amount`, unambiguous `currency`, consistent `evidenceClass`, then a rebuildable projection — **or**
- An **authorized T3/R3 catalog entry** covering openai/`gpt-5.6-sol` + unit/currency + `catalogVersion`, plus an authorized estimation/reconciliation path producing known amounts with explicit provenance.

### Why this blocks monetary calibration
Without known amounts in the authoritative cost/projection chain, any `thresholdAmount` would be invented — violating tokens≠money and T4 eligibility rules.

### Minimal next evidence action (not opened)
Morris-authorized **read-only design / subsequent bounded cycle** to obtain either (a) provider-observed or billed cost facts into T2, or (b) authorized catalog+estimation provenance — **without** selecting policy values, without MONITOR/E1, without inventing tariffs.

### Debt if gap were bypassed
Policy thresholds detached from financial SoT · false soft_signal/noise · T4-T3 reserve laundered closed · irreversible enforcement design debt once promoted.

---

## Recommendation (non-décisionnelle)

**RECOMMENDATION ONLY — MORRIS DECIDES.**

Ne sélectionner aucune option actuellement.
Demander davantage de preuves financières (cost events connus et/ou catalog T3 autorisé pour `gpt-5.6-sol`) avant tout arbitrage de `thresholdAmount`.

Never: POLICY SELECTED.

---

## Option comparison

N/A — no candidates.

---

## Calibration matrix C01–C24

| ID | Gate | Result |
|---|---|---|
| C01 | main pinned | PASS |
| C02 | tracked clean | PASS |
| C03 | incoming handoff exact | PASS |
| C04 | SHADOW rev1 exact | PASS |
| C05 | target identity/fingerprint | PASS |
| C06 | policy EMPTY | PASS |
| C07 | no provider calls | PASS |
| C08 | DB access read-only | PASS |
| C09 | usage dataset bounded | PASS |
| C10 | usage facts traced | PASS |
| C11 | cost linkage measured | PASS (C=0) |
| C12 | monetary coverage measured | PASS (K=0) |
| C13 | currencies identified | PASS (none) |
| C14 | evidence classes identified | PASS |
| C15 | sourceOfTruth identified | PASS |
| C16 | catalog/provenance assessed | PASS (empty/uncovered) |
| C17 | T4 projection inspected RO | PASS (absent) |
| C18 | blockingEligibleAmount traceability | PASS — understood; no runtime amount |
| C19 | T4-T3 calibration readiness classified | PASS = INSUFFICIENT FOR NUMERIC CALIBRATION |
| C20 | E01–E12 sufficiency gate | PASS → INSUFFICIENT |
| C21 | candidate options compliant or correctly omitted | PASS (omitted) |
| C22 | reserves preserved | PASS |
| C23 | policy/MONITOR/E1 untouched | PASS |
| C24 | project/runtime mutation zero | PASS |

---

## Reserves (preserved — none closed)

| Reserve | Status |
|---|---|
| R-T7-OP-EXPECTED-MODE-CAS-01 | CLOSED |
| R-T7-OP-TARGET-BINDING-01 | CLOSED |
| R-T7-SHADOW-OBS-01 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY |
| R-QA-T7-C08-SCENARIO-01 | OPEN MINOR + ACCEPTED FOR FIRST SHADOW PILOT ONLY |
| R-T4-T3-SYNC-01 | OPEN BEFORE MONITOR |

---

## Policy / MONITOR / E1 / immutability

| Field | Value |
|---|---|
| POLICY_VALUES_SELECTED | NO |
| VERSIONED_POLICY_SOURCE_CHANGED | NO |
| ROLLOUT_MUTATION | ZERO |
| MODE | SHADOW |
| REVISION | 1 |
| MONITOR | NOT ACTIVATED |
| E1 | NOT AUTHORIZED |
| ROLLBACK | NOT EXECUTED |
| project files modified/created | NONE |
| temporary only | `.tmp-sfia-review/t7-shadow-calibration/**` · `.tmp-sfia-review/chatgpt-review.md` |

---

## Secret hygiene

- DATABASE_URL_DIRECT: Keychain process-only; never printed.
- OPENAI_API_KEY: not required; not loaded.
- Review pack / harness outputs: sanitized (no connection strings).

---

## Next Morris decisions

Si INSUFFICIENT (cas actuel):

1. HOLD — rester en SHADOW rev1 sans policy values.
2. REQUEST MORE EVIDENCE — autoriser un cycle ultérieur pour preuves monétaires minimales (cost facts BILLED/PROVIDER_OBSERVED et/ou catalog T3 autorisé pour le modèle observé).
3. Ne pas SELECT / REJECT d’option (aucune produite).
4. Ne pas ouvrir MONITOR / E1 / policy implementation.

Une éventuelle sélection future nécessitera un cycle séparé d’implémentation/validation — hors GO actuel.

---

## Unique verdict

T7 SHADOW BOUNDED CALIBRATION COMPLETE WITH INSUFFICIENT EVIDENCE —
CYCLE 1 CRITICAL —
FINANCIAL EVIDENCE INSUFFICIENT FOR NUMERIC POLICY OPTIONS —
EXACT GAP NO_COST_EVENTS + EMPTY_PRICE_CATALOG + NO_ENFORCEMENT_PROJECTION + API_USAGE_NOT_BLOCKING_ELIGIBLE —
NO THRESHOLD VALUE INVENTED —
NO POLICY CANDIDATE AMOUNT PRODUCED —
T4-T3 RESERVE REMAINS OPEN —
POLICY SOURCE UNCHANGED —
SHADOW KEPT ACTIVE REVISION 1 —
NO PROVIDER CALL —
NO RUNTIME MUTATION —
MONITOR NOT ACTIVATED —
E1 NOT AUTHORIZED —
MORRIS DECISION REQUIRED ON NEXT EVIDENCE STEP —
HANDOFF REMOTE VERIFIED.

---

## Runtime snapshot JSON (sanitized harness output)

```json
{
  "ok": true,
  "READ_ONLY_MUTATIONS": 0,
  "TARGET_LABEL": "neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot",
  "SAFE_IDENTITY": {
    "hostname": "ep-dry-shape-b1fabcbm.c-5.eu-central-1.aws.neon.tech",
    "port": 5432,
    "database": "neondb"
  },
  "FINGERPRINT": "7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331",
  "FINGERPRINT_MATCH": true,
  "ROLLOUT": {
    "ROW_EXISTS": true,
    "MODE": "SHADOW",
    "REVISION": 1,
    "UPDATED_AT": "2026-08-09T18:50:15.239Z"
  },
  "PERIOD_STARTS_PRESENT": [
    "2026-08-01"
  ],
  "USAGE_EVENT_COUNT": 4,
  "USAGE_EVENTS": [
    {
      "eventId": "evt_9e1f6085d43987bbb4abb9b92c0ca829bb33add4411cf237c9a6402c248eace3",
      "executionRunId": "executionrun:d2d1:0001",
      "correlationId": "corr:t7live:live-shadow-1786301432289",
      "provider": "openai",
      "model": "gpt-5.6-sol",
      "inputTokens": "25",
      "outputTokens": "11",
      "totalTokens": "36",
      "occurredAt": "2026-08-04T09:15:00.000Z",
      "periodStart": "2026-08-01",
      "sourceOfTruth": "API_USAGE",
      "evidenceClass": "observed",
      "usageStatus": "validated"
    },
    {
      "eventId": "evt_afde374b862d49a652f85b49667c8040bf3c81e2926e394fd629b666c51328ff",
      "executionRunId": "executionrun:d2d1:0001",
      "correlationId": "corr:t7live:live-shadow-1786302725662",
      "provider": "openai",
      "model": "gpt-5.6-sol",
      "inputTokens": "25",
      "outputTokens": "11",
      "totalTokens": "36",
      "occurredAt": "2026-08-04T09:15:00.000Z",
      "periodStart": "2026-08-01",
      "sourceOfTruth": "API_USAGE",
      "evidenceClass": "observed",
      "usageStatus": "validated"
    },
    {
      "eventId": "evt_da0ec4fda9f4d4d4af683747917662c61b1de1112c457c29b9cd05118e114f1e",
      "executionRunId": "executionrun:d2d1:0001",
      "correlationId": "corr:t7live:live-shadow-1786302723022",
      "provider": "openai",
      "model": "gpt-5.6-sol",
      "inputTokens": "25",
      "outputTokens": "11",
      "totalTokens": "36",
      "occurredAt": "2026-08-04T09:15:00.000Z",
      "periodStart": "2026-08-01",
      "sourceOfTruth": "API_USAGE",
      "evidenceClass": "observed",
      "usageStatus": "validated"
    },
    {
      "eventId": "evt_e3af4ce4c6eee26129fe1fd9501defbcb1234bed8db2cc0e755237ac9cce08e1",
      "executionRunId": "executionrun:d2d1:0001",
      "correlationId": "corr:t7live:live-shadow-1786302709143",
      "provider": "openai",
      "model": "gpt-5.6-sol",
      "inputTokens": "25",
      "outputTokens": "11",
      "totalTokens": "36",
      "occurredAt": "2026-08-04T09:15:00.000Z",
      "periodStart": "2026-08-01",
      "sourceOfTruth": "API_USAGE",
      "evidenceClass": "observed",
      "usageStatus": "validated"
    }
  ],
  "MATCHED_COST_EVENT_COUNT": 0,
  "KNOWN_AMOUNT_COUNT": 0,
  "COST_COVERAGE_RATE": 0,
  "KNOWN_AMOUNT_COVERAGE_RATE": 0,
  "COST_EVENTS_TOTAL_FOR_PROJECT": 0,
  "COST_EVENTS": [],
  "CURRENCIES_PRESENT": [],
  "COST_SOURCE_OF_TRUTH": [],
  "COST_EVIDENCE_CLASS": [],
  "ESTIMATION_STATUS": [],
  "CATALOG_VERSIONS_ON_COST": [],
  "AGGREGATES": [],
  "ENFORCEMENT_PROJECTIONS": [],
  "RECONCILIATIONS": [],
  "PRICE_CATALOG_ENTRY_TOTAL": 0,
  "PRICE_CATALOG_FOR_OBSERVED_MODELS": [
    {
      "provider": "openai",
      "model": "gpt-5.6-sol",
      "hitCount": 0,
      "entries": []
    }
  ]
}
```

---

## Temporary harness — full contents

Path: `.tmp-sfia-review/t7-shadow-calibration/calibration-readonly.ts`

```typescript
/**
 * FinOps T7 SHADOW — bounded calibration READ-ONLY harness.
 * ZERO mutations: no INSERT/UPDATE/DELETE/UPSERT/DDL/migration/rebuild/reconcile.
 */
import { createRequire } from "node:module";
import {
  assertExpectedTargetFingerprintMatch,
  deriveFinOpsT7TargetIdentity,
} from "../../projects/sfia-studio/app/lib/oa/finops/server/finOpsT7TargetIdentity.ts";

const require = createRequire(
  new URL("../../projects/sfia-studio/app/package.json", import.meta.url),
);
const { Pool } = require("pg") as typeof import("pg");

const PROJECT_ID = "sfia-studio-ops1";
const EXPECTED_FP =
  "7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331";
const TARGET_LABEL =
  "neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot";

/** node-pg DATE → local Y-M-D (same rule as postgresFinOpsReconciliation). */
function formatPgDate(value: unknown): string {
  if (value instanceof Date) {
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, "0");
    const d = String(value.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  const match = /^(\d{4}-\d{2}-\d{2})/.exec(String(value));
  if (match) return match[1]!;
  return String(value);
}

async function main() {
  const url = process.env.DATABASE_URL_DIRECT?.trim() ?? "";
  if (!url) throw new Error("DATABASE_URL_DIRECT missing");

  const id = deriveFinOpsT7TargetIdentity(url);
  assertExpectedTargetFingerprintMatch(id.fingerprint, EXPECTED_FP);

  const pool = new Pool({ connectionString: url, max: 1 });
  try {
    const client = await pool.connect();
    try {
      await client.query("BEGIN READ ONLY");

      const rollout = await client.query(
        `SELECT project_id, mode, revision, updated_at
         FROM finops_rollout_config WHERE project_id = $1`,
        [PROJECT_ID],
      );
      const rowExists = (rollout.rowCount ?? 0) > 0;
      const mode = rowExists ? String(rollout.rows[0].mode) : null;
      const revision = rowExists ? Number(rollout.rows[0].revision) : null;
      const updatedAt = rowExists ? rollout.rows[0].updated_at : null;

      if (!rowExists || mode !== "SHADOW" || revision !== 1) {
        await client.query("ROLLBACK");
        console.log(
          JSON.stringify(
            {
              ok: false,
              stop: "CALIBRATION RUNTIME STATE DRIFT",
              ROW_EXISTS: rowExists,
              MODE: mode,
              REVISION: revision,
              UPDATED_AT: updatedAt,
              FINGERPRINT: id.fingerprint,
            },
            null,
            2,
          ),
        );
        process.exit(3);
      }

      const usage = await client.query(
        `SELECT
           event_id,
           execution_run_id,
           correlation_id,
           provider,
           model,
           input_tokens,
           output_tokens,
           total_tokens,
           occurred_at,
           period_start,
           source_of_truth,
           evidence_class,
           usage_status
         FROM finops_usage_event
         WHERE project_id = $1
         ORDER BY occurred_at ASC, event_id ASC`,
        [PROJECT_ID],
      );

      const periodStarts = [
        ...new Set(
          usage.rows.map((r: { period_start: unknown }) =>
            formatPgDate(r.period_start),
          ),
        ),
      ];

      const cost = await client.query(
        `SELECT
           cost_event_id,
           dedup_key,
           usage_event_id,
           execution_run_id,
           period_start,
           currency,
           amount,
           evidence_class,
           source_of_truth,
           estimation_status,
           correction_ref,
           catalog_version,
           provider,
           model,
           unit,
           billing_quantum,
           usage_quantity,
           occurred_at
         FROM finops_cost_event
         WHERE project_id = $1
         ORDER BY occurred_at ASC NULLS LAST, cost_event_id ASC`,
        [PROJECT_ID],
      );

      const aggregates = await client.query(
        `SELECT *
         FROM finops_usage_aggregate
         WHERE project_id = $1
         ORDER BY period_start, currency`,
        [PROJECT_ID],
      );

      const projections = await client.query(
        `SELECT
           project_id,
           period_start,
           currency,
           blocking_eligible_amount,
           billed_amount,
           provider_observed_amount,
           eligible_cost_event_count,
           billed_event_count,
           provider_observed_event_count,
           rebuild_version,
           rebuilt_at
         FROM finops_enforcement_projection
         WHERE project_id = $1
         ORDER BY period_start, currency`,
        [PROJECT_ID],
      );

      const recon = await client.query(
        `SELECT reconciliation_id, dedup_key, period_start, source_batch_id,
                status, processed_count, error_code, error_message, completed_at
         FROM finops_reconciliation_record
         WHERE project_id = $1
         ORDER BY completed_at ASC NULLS LAST`,
        [PROJECT_ID],
      );

      // Catalog coverage for observed provider/model pairs (metadata only).
      const providerModels = [
        ...new Map(
          usage.rows.map((r: { provider: string; model: string | null }) => [
            `${r.provider}::${r.model ?? ""}`,
            { provider: r.provider, model: r.model },
          ]),
        ).values(),
      ];

      const catalogHits: Array<Record<string, unknown>> = [];
      for (const pm of providerModels) {
        if (!pm.model) {
          catalogHits.push({
            provider: pm.provider,
            model: pm.model,
            hitCount: 0,
            reason: "model_null",
          });
          continue;
        }
        const hit = await client.query(
          `SELECT catalog_entry_id, catalog_version, provider, model, unit,
                  currency, billing_quantum, amount_per_quantum::text AS amount_per_quantum,
                  valid_from, valid_to
           FROM finops_price_catalog_entry
           WHERE provider = $1 AND model = $2
           ORDER BY valid_from DESC
           LIMIT 5`,
          [pm.provider, pm.model],
        );
        catalogHits.push({
          provider: pm.provider,
          model: pm.model,
          hitCount: hit.rowCount ?? 0,
          entries: hit.rows.map((r) => ({
            catalogEntryId: r.catalog_entry_id,
            catalogVersion: r.catalog_version,
            unit: r.unit,
            currency: r.currency,
            billingQuantum: String(r.billing_quantum),
            // amount present as string for provenance audit — not used as threshold
            amountPerQuantumPresent: r.amount_per_quantum != null,
            validFrom:
              r.valid_from instanceof Date
                ? r.valid_from.toISOString()
                : r.valid_from,
            validTo:
              r.valid_to instanceof Date
                ? r.valid_to.toISOString()
                : r.valid_to,
          })),
        });
      }

      const catalogTotal = await client.query(
        `SELECT COUNT(*)::int AS c FROM finops_price_catalog_entry`,
      );

      await client.query("COMMIT");

      const usageEventIds = new Set(
        usage.rows.map((r: { event_id: string }) => r.event_id),
      );
      const matchedCost = cost.rows.filter(
        (r: { usage_event_id: string | null }) =>
          r.usage_event_id != null && usageEventIds.has(r.usage_event_id),
      );
      const knownAmount = matchedCost.filter(
        (r: { amount: unknown }) => r.amount != null,
      );
      const U = usage.rowCount ?? 0;
      const C = matchedCost.length;
      const K = knownAmount.length;

      const currencies = [
        ...new Set(
          cost.rows
            .map((r: { currency: string }) => r.currency)
            .filter(Boolean),
        ),
      ];
      const sources = [
        ...new Set(
          cost.rows.map((r: { source_of_truth: string }) => r.source_of_truth),
        ),
      ];
      const evidenceClasses = [
        ...new Set(
          cost.rows.map((r: { evidence_class: string }) => r.evidence_class),
        ),
      ];
      const estimationStatuses = [
        ...new Set(
          cost.rows.map(
            (r: { estimation_status: string }) => r.estimation_status,
          ),
        ),
      ];
      const catalogVersions = [
        ...new Set(
          cost.rows
            .map((r: { catalog_version: string | null }) => r.catalog_version)
            .filter((v): v is string => v != null && v !== ""),
        ),
      ];

      console.log(
        JSON.stringify(
          {
            ok: true,
            READ_ONLY_MUTATIONS: 0,
            TARGET_LABEL,
            SAFE_IDENTITY: {
              hostname: id.hostname,
              port: id.port,
              database: id.database,
            },
            FINGERPRINT: id.fingerprint,
            FINGERPRINT_MATCH: true,
            ROLLOUT: {
              ROW_EXISTS: true,
              MODE: mode,
              REVISION: revision,
              UPDATED_AT: updatedAt,
            },
            PERIOD_STARTS_PRESENT: periodStarts,
            USAGE_EVENT_COUNT: U,
            USAGE_EVENTS: usage.rows.map((r) => ({
              eventId: r.event_id,
              executionRunId: r.execution_run_id,
              correlationId: r.correlation_id,
              provider: r.provider,
              model: r.model,
              inputTokens: r.input_tokens,
              outputTokens: r.output_tokens,
              totalTokens: r.total_tokens,
              occurredAt:
                r.occurred_at instanceof Date
                  ? r.occurred_at.toISOString()
                  : String(r.occurred_at),
              periodStart: formatPgDate(r.period_start),
              sourceOfTruth: r.source_of_truth,
              evidenceClass: r.evidence_class,
              usageStatus: r.usage_status,
            })),
            MATCHED_COST_EVENT_COUNT: C,
            KNOWN_AMOUNT_COUNT: K,
            COST_COVERAGE_RATE: U === 0 ? null : C / U,
            KNOWN_AMOUNT_COVERAGE_RATE: U === 0 ? null : K / U,
            COST_EVENTS_TOTAL_FOR_PROJECT: cost.rowCount ?? 0,
            COST_EVENTS: cost.rows.map((r) => ({
              costEventId: r.cost_event_id,
              usageEventId: r.usage_event_id,
              executionRunId: r.execution_run_id,
              periodStart: formatPgDate(r.period_start),
              currency: r.currency,
              amountPresent: r.amount != null,
              amountCanonical: r.amount == null ? null : String(r.amount),
              evidenceClass: r.evidence_class,
              sourceOfTruth: r.source_of_truth,
              estimationStatus: r.estimation_status,
              correctionRef: r.correction_ref,
              catalogVersion: r.catalog_version,
              provider: r.provider,
              model: r.model,
              unit: r.unit,
              billingQuantum:
                r.billing_quantum == null ? null : String(r.billing_quantum),
              usageQuantity:
                r.usage_quantity == null ? null : String(r.usage_quantity),
              occurredAt:
                r.occurred_at instanceof Date
                  ? r.occurred_at.toISOString()
                  : r.occurred_at == null
                    ? null
                    : String(r.occurred_at),
            })),
            CURRENCIES_PRESENT: currencies,
            COST_SOURCE_OF_TRUTH: sources,
            COST_EVIDENCE_CLASS: evidenceClasses,
            ESTIMATION_STATUS: estimationStatuses,
            CATALOG_VERSIONS_ON_COST: catalogVersions,
            AGGREGATES: aggregates.rows.map((r) => {
              const out: Record<string, unknown> = {};
              for (const [k, v] of Object.entries(r)) {
                out[k] =
                  v instanceof Date
                    ? v.toISOString()
                    : typeof v === "bigint"
                      ? v.toString()
                      : v;
              }
              return out;
            }),
            ENFORCEMENT_PROJECTIONS: projections.rows.map((r) => ({
              projectId: r.project_id,
              periodStart: formatPgDate(r.period_start),
              currency: r.currency,
              blockingEligibleAmount: String(r.blocking_eligible_amount),
              billedAmount: String(r.billed_amount),
              providerObservedAmount: String(r.provider_observed_amount),
              eligibleCostEventCount: Number(r.eligible_cost_event_count),
              billedEventCount: Number(r.billed_event_count),
              providerObservedEventCount: Number(
                r.provider_observed_event_count,
              ),
              rebuildVersion: Number(r.rebuild_version),
              rebuiltAt:
                r.rebuilt_at instanceof Date
                  ? r.rebuilt_at.toISOString()
                  : String(r.rebuilt_at),
            })),
            RECONCILIATIONS: recon.rows.map((r) => ({
              reconciliationId: r.reconciliation_id,
              periodStart: formatPgDate(r.period_start),
              sourceBatchId: r.source_batch_id,
              status: r.status,
              processedCount: r.processed_count,
              errorCode: r.error_code,
              errorMessage: r.error_message,
              completedAt:
                r.completed_at instanceof Date
                  ? r.completed_at.toISOString()
                  : r.completed_at,
            })),
            PRICE_CATALOG_ENTRY_TOTAL: catalogTotal.rows[0].c,
            PRICE_CATALOG_FOR_OBSERVED_MODELS: catalogHits,
          },
          null,
          2,
        ),
      );
    } finally {
      client.release();
    }
  } finally {
    await pool.end().catch(() => undefined);
  }
}

main().catch((e) => {
  console.error(
    JSON.stringify({
      ok: false,
      message: String(e && e.message ? e.message : e),
    }),
  );
  process.exit(1);
});

```
