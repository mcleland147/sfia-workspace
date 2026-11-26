# SFIA Review Pack — FULL
# Studio Next · R5 · ML5 · Macro-lot 1 CORRECTIVE · Cycle 8 Delivery · CRITICAL · EVOL
# Date: 2026-11-26 21:07  (2026-11-26T20:07Z)
# Verdict Cursor: MACRO-LOT 1 — TECHNICAL READINESS ESTABLISHED — GOVERNED QUALIFICATION GATES REMAIN
# Decision: REQUIRED · PUBLISH-IN-CYCLE · L3 handoff
# NO RELEASE · NOT ADOPTED · RECETTE intacte · push projet NON

---

## Instruction ChatGPT (template §9.1 — obligatoire)

Relire ce Review Handoff depuis Git au SHA distant exact publié.
Ne pas se fier au worktree local ni à un résumé conversationnel.
Vérifier la couverture des écarts de revue, les preuves Fake/Real,
les gates restants, l'absence de secrets, et distinguer :
conclusions techniques / hypothèses / propositions / décisions Morris.
Ne pas déclarer ADOPTED. Ne pas engager les macro-lots 2/3.

---

## 1. Git Truth

| Champ | Valeur |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD initial corrective | `5794584a4dfae97dd78c5493946d9251b7847d65` |
| HEAD final | `a095171e00db281d741010f2d04918e8c79af25c` |
| Web tree initial | `ce8673f813150cba124591f12b485ccbcf2599d9` |
| Web tree final | `188c998ccb722d0a6810c97abf00a1475ad7fc1d` |
| Merge-base | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Handoff d'entrée | `44db96d6` / blob `6b1d3d1a` |
| Pack réinitialisé | oui (mono-cycle) |
| Push projet | **NON** |

```
M .tmp-sfia-review/chatgpt-review.md
```

```
a095171e fix(next): ML1 corrective — Admin bucket parsing, tracing ALS, FinOps decimal
 .../as-built-macro-lot-1-20261126.md               | 140 ++--
 .../dossier-g-web-public-a3-20261126.md            |  40 ++
 ...migration-candidate-provider-admin-snapshots.md |  87 ++-
 .../construction/delivery-history.md               |  14 +-
 .../web/scripts/finops-admin-collect.mts           | 109 ++++
 .../web/src/domains/conversation/nora-adapter.ts   |  19 +
 .../conversation/provider-emission-frontier.ts     | 161 +++--
 .../web/src/domains/finops/decimal-money.ts        |  58 ++
 .../finops/provider-admin-http-transport.ts        | 127 ++++
 .../finops/provider-admin-usage-collector.ts       | 725 +++++++++++++--------
 .../web/src/domains/finops/usage-read-service.ts   | 170 ++---
 .../web/src/lib/agents-sdk-tracing.ts              | 303 +++++----
 .../web/tests/unit/ml5-agents-sdk-tracing.test.ts  | 122 ++--
 .../ml5-provider-admin-usage-collector.test.ts     | 321 +++++----
 14 files changed, 1586 insertions(+), 810 deletions(-)
```

---

## 2. Sources consultées

- Contrats convergence `1e2e188d`
- Handoff ML1 `44db96d6` + étude `460a121f`
- SDK openai@7.50 `admin/organization/usage.js` paths + nested bucket/results types
- Docs OpenAI Usage API (page/bucket/results)
- Agents SDK tracing setTraceProcessors
- As-built / migration / UX candidats locaux

---

## 3. Correctifs par écart de revue

| Écart | Correctif | Preuve |
|---|---|---|
| Parsing plat Usage/Costs | Rewrite parse buckets→results | unit nested fixtures |
| Path `/usage/responses` inventé | Allowlist SDK réelle ; refus responses | unit |
| Secret Admin lisible Next | Product view never reads key ; isolated process | unit + script |
| Float FinOps | decimal-money scaled bigint | unit reconcile |
| Flag scope seul | evidence-based comparability | unit |
| Corrélation tracing globale | ALS | unit concurrent |
| Egress oracle factice | fetch wrap network oracle | unit |
| Continuité non raccordée | frontier ALS bind + apply (mode OFF) | code + continuity unit |
| Migration UNIQUE fragile | NULLS NOT DISTINCT + surface | doc candidate |
| A3 non documenté | dossier G-WEB-PUBLIC/A3 | doc |

---

## 4. Contenu fichiers créés / réécrits critiques


### `projects/sfia-studio-next/web/src/domains/finops/decimal-money.ts`

<<<FILE_BEGIN projects/sfia-studio-next/web/src/domains/finops/decimal-money.ts>>>
/**
 * Decimal money helpers — string/scaled-integer math for FinOps reconciliation.
 * Never use IEEE float as the financial reference path.
 */

const SCALE = 10;
const FACTOR = BigInt("10000000000"); // 10^10

function parseDecimalToScaled(input: string): bigint | null {
  const s = input.trim();
  if (!s || s === "UNKNOWN" || s === "ABSENT") return null;
  const m = /^([+-])?(\d+)(?:\.(\d+))?$/.exec(s);
  if (!m) return null;
  const sign = m[1] === "-" ? BigInt(-1) : BigInt(1);
  const whole = BigInt(m[2]);
  const fracRaw = (m[3] ?? "").slice(0, SCALE);
  const fracPadded = fracRaw.padEnd(SCALE, "0");
  const frac = BigInt(fracPadded || "0");
  return sign * (whole * FACTOR + frac);
}

function scaledToDecimalString(v: bigint): string {
  const sign = v < BigInt(0) ? "-" : "";
  const abs = v < BigInt(0) ? -v : v;
  const whole = abs / FACTOR;
  const frac = (abs % FACTOR).toString().padStart(SCALE, "0");
  return `${sign}${whole.toString()}.${frac}`;
}

export function decimalAdd(a: string, b: string): string | null {
  const aa = parseDecimalToScaled(a);
  const bb = parseDecimalToScaled(b);
  if (aa == null || bb == null) return null;
  return scaledToDecimalString(aa + bb);
}

export function decimalSub(a: string, b: string): string | null {
  const aa = parseDecimalToScaled(a);
  const bb = parseDecimalToScaled(b);
  if (aa == null || bb == null) return null;
  return scaledToDecimalString(aa - bb);
}

export function decimalFromNumberLike(v: unknown): string | null {
  if (typeof v === "number") {
    if (!Number.isFinite(v)) return null;
    return decimalFromNumberLike(String(v));
  }
  if (typeof v === "string") {
    const scaled = parseDecimalToScaled(v);
    return scaled != null ? scaledToDecimalString(scaled) : null;
  }
  return null;
}

export function isDecimalPresent(v: string | null | undefined): v is string {
  return typeof v === "string" && parseDecimalToScaled(v) != null;
}
<<<FILE_END>>>

### `projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts`

<<<FILE_BEGIN projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts>>>
/**
 * Operational Admin HTTP transport — GET allowlist only.
 *
 * MUST only be constructed from an isolated collector process that already
 * holds OPENAI_ADMIN_KEY. Never import this from Nora conversation paths.
 *
 * LIVE calls additionally require SFIA_ADMIN_USAGE_LIVE=1 + STUDIO_LANE=DEV.
 */

import {
  ADMIN_USAGE_ALLOWED_PATHS,
  type AdminHttpTransport,
} from "./provider-admin-usage-collector";

const ALLOWED = new Set<string>(ADMIN_USAGE_ALLOWED_PATHS);
const DEFAULT_BASE = "https://api.openai.com/v1";

export type AdminTransportOptions = {
  baseUrl?: string;
  timeoutMs?: number;
  /** Injected fetch for tests — still subject to path allowlist. */
  fetchImpl?: typeof fetch;
  /** Max retries on 429/5xx (bounded). */
  maxRetries?: number;
};

function sanitizeErrorMessage(status: number, bodyText: string): string {
  // Never echo Authorization or key material.
  const clipped = bodyText.replace(/sk-[A-Za-z0-9_-]+/g, "[REDACTED]").slice(0, 200);
  return `ADMIN_HTTP_${status}:${clipped}`;
}

export function createAdminHttpTransport(
  opts: AdminTransportOptions = {},
): AdminHttpTransport {
  const base = (opts.baseUrl ?? DEFAULT_BASE).replace(/\/$/, "");
  const timeoutMs = Math.max(1_000, Math.min(60_000, opts.timeoutMs ?? 15_000));
  const maxRetries = Math.max(0, Math.min(3, opts.maxRetries ?? 2));
  const fetchImpl = opts.fetchImpl ?? fetch;

  return async (input) => {
    if (input.method !== "GET") {
      throw new Error("ADMIN_METHOD_NOT_ALLOWED");
    }
    if (!ALLOWED.has(input.path)) {
      throw new Error(`ADMIN_PATH_NOT_ALLOWLISTED:${input.path}`);
    }
    // Strip any Authorization from caller logs by not re-exporting headers.
    const auth = input.headers.Authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
      throw new Error("ADMIN_AUTH_HEADER_REQUIRED");
    }

    const url = new URL(`${base}${input.path}`);
    for (const [k, v] of Object.entries(input.query)) {
      if (v != null && v !== "") url.searchParams.set(k, v);
    }

    let attempt = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const ac = new AbortController();
      const timer = setTimeout(() => ac.abort(), timeoutMs);
      try {
        const res = await fetchImpl(url.toString(), {
          method: "GET",
          headers: {
            Authorization: auth,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          signal: ac.signal,
        });
        const text = await res.text();
        let json: unknown = null;
        try {
          json = text ? JSON.parse(text) : null;
        } catch {
          json = { parse_error: true, preview: text.slice(0, 80) };
        }
        const retryable = res.status === 429 || (res.status >= 500 && res.status <= 599);
        if (retryable && attempt < maxRetries) {
          attempt += 1;
          const ra = res.headers.get("retry-after");
          const waitMs = ra && /^\d+$/.test(ra) ? Math.min(10_000, Number(ra) * 1000) : 250 * attempt;
          await new Promise((r) => setTimeout(r, waitMs));
          continue;
        }
        if (!res.ok && res.status !== 401 && res.status !== 403 && res.status !== 429) {
          // Surface sanitized message for non-standard failures; caller maps status.
          void sanitizeErrorMessage(res.status, text);
        }
        const headers: Record<string, string> = {};
        const retryAfter = res.headers.get("retry-after");
        if (retryAfter) headers["retry-after"] = retryAfter;
        return { status: res.status, json, headers };
      } finally {
        clearTimeout(timer);
      }
    }
  };
}

/**
 * Load Admin key only when explicitly running as isolated collector.
 * Returns null for product/Next contexts.
 */
export function loadIsolatedAdminApiKey(env: NodeJS.ProcessEnv = process.env): {
  key: string | null;
  limits: string[];
} {
  const isolated = (env.SFIA_ADMIN_COLLECTOR_PROCESS ?? "").trim() === "1";
  if (!isolated) {
    return { key: null, limits: ["NOT_ISOLATED_COLLECTOR_PROCESS"] };
  }
  const key = (env.OPENAI_ADMIN_KEY ?? "").trim() || null;
  if (!key) return { key: null, limits: ["OPENAI_ADMIN_KEY_ABSENT"] };
  return { key, limits: [] };
}

export function isAdminLiveAuthorized(env: NodeJS.ProcessEnv = process.env): boolean {
  return (
    (env.SFIA_ADMIN_USAGE_LIVE ?? "").trim() === "1" &&
    (env.STUDIO_LANE ?? "").trim().toUpperCase() === "DEV" &&
    (env.SFIA_ADMIN_COLLECTOR_PROCESS ?? "").trim() === "1"
  );
}
<<<FILE_END>>>

### `projects/sfia-studio-next/web/scripts/finops-admin-collect.mts`

<<<FILE_BEGIN projects/sfia-studio-next/web/scripts/finops-admin-collect.mts>>>
/**
 * Isolated Admin Usage/Costs collector entrypoint.
 *
 * Run ONLY as a separate process:
 *   SFIA_ADMIN_COLLECTOR_PROCESS=1 STUDIO_LANE=DEV \
 *   OPENAI_ADMIN_KEY=… SFIA_ADMIN_USAGE_LIVE=1 \
 *   npx tsx scripts/finops-admin-collect.mts --path /organization/costs --start-time <unix>
 *
 * Without SFIA_ADMIN_USAGE_LIVE=1 the script refuses LIVE HTTP (transport still constructible for dry-run with --dry-substituted).
 * Never import this from Next.js / Nora routes.
 */

import {
  resolveIsolatedAdminCollectorConfig,
  runAdminCollection,
} from "../src/domains/finops/provider-admin-usage-collector";
import {
  createAdminHttpTransport,
  isAdminLiveAuthorized,
  loadIsolatedAdminApiKey,
} from "../src/domains/finops/provider-admin-http-transport";

function arg(name: string): string | null {
  const i = process.argv.indexOf(name);
  if (i < 0 || i + 1 >= process.argv.length) return null;
  return process.argv[i + 1];
}

async function main(): Promise<void> {
  const { key, limits } = loadIsolatedAdminApiKey(process.env);
  if (!key) {
    console.log(
      JSON.stringify({
        status: "BLOCKED_NO_SECRET",
        limits,
        note: "Provision OPENAI_ADMIN_KEY in isolated env only — never chat/Git",
      }),
    );
    process.exitCode = 2;
    return;
  }

  const path = arg("--path") ?? "/organization/costs";
  const start = arg("--start-time");
  if (!start) {
    console.log(JSON.stringify({ status: "ERROR", lastError: "MISSING_START_TIME" }));
    process.exitCode = 2;
    return;
  }

  const live = isAdminLiveAuthorized(process.env);
  const dry = process.argv.includes("--dry-substituted");
  if (!live && !dry) {
    console.log(
      JSON.stringify({
        status: "BLOCKED_NO_LIVE_GO",
        limits: ["SFIA_ADMIN_USAGE_LIVE_REQUIRED", "OR_PASS_DRY_SUBSTITUTED"],
      }),
    );
    process.exitCode = 2;
    return;
  }

  const transport = dry
    ? async () => ({
        status: 200,
        json: { object: "page", data: [], has_more: false, next_page: null },
      })
    : createAdminHttpTransport();

  const result = await runAdminCollection({
    config: resolveIsolatedAdminCollectorConfig({
      adminApiKey: key,
      liveAuthorized: live || dry,
      transport,
    }),
    path,
    query: {
      start_time: start,
      bucket_width: arg("--bucket-width") ?? "1d",
      ...(arg("--project-id") ? { project_ids: arg("--project-id")! } : {}),
    },
  });

  // Never print the key. Snapshots may include project/api_key ids (non-secret).
  console.log(
    JSON.stringify({
      status: result.status,
      collectionId: result.collectionId,
      pagesFetched: result.pagesFetched,
      snapshotCount: result.snapshots.length,
      limits: result.limits,
      lastError: result.lastError,
    }),
  );
  if (result.status !== "READY" && result.status !== "PARTIAL") {
    process.exitCode = 3;
  }
}

main().catch((e) => {
  console.log(
    JSON.stringify({
      status: "ERROR",
      lastError: e instanceof Error ? e.message : String(e),
    }),
  );
  process.exitCode = 1;
});
<<<FILE_END>>>

### `projects/sfia-studio-next/construction/convergence-openai-studio/dossier-g-web-public-a3-20261126.md`

<<<FILE_BEGIN projects/sfia-studio-next/construction/convergence-openai-studio/dossier-g-web-public-a3-20261126.md>>>
# Dossier d’arbitrage — G-WEB-PUBLIC / Option A3

| Champ | Valeur |
|---|---|
| Gate | **G-WEB-PUBLIC / A3 — MORRIS DECISION REQUIRED** |
| Statut | WEB OFF · MIXED CLOSED · aucune campagne LIVE |
| Date | 2026-11-26 |

## Distinctions démontrées (déterministe)

| Dimension | Sémantique | Preuve locale |
|---|---|---|
| `max_tool_calls` | Borne a priori des appels built-in | Injection frontier + tests |
| `tool_usage.web_search.num_requests` | Mesure a posteriori facturable si présente | Parse + reconcile |
| Absent `tool_usage` | **UNKNOWN** (jamais ASSUMED_1) | Tests |
| Pression d’enveloppe | Consomme `max_tool_calls` même si billable UNKNOWN | Tests envelope |

## Option A3 (candidate)

1. Pré-réserver les dimensions contrôlables (`max_tool_calls`, tokens).
2. Mesurer `num_requests` a posteriori lorsque fourni.
3. Réconcilier ; suspendre si mesure > enveloppe.
4. Expliciter le risque résiduel : sans `num_requests`, la borne facturable n’est pas stricte.

## Alternatives

| Id | Description |
|---|---|
| A1 | Gate fermé (état actuel) |
| A2 | Enveloppe = N × max_tool_calls (conservative) |
| A3 | Pré-réserve + mesure + suspend |
| A4 | Direct B1 only (pas hosted) |

## Risque résiduel

OpenAI hosted web_search destinations ne passent pas par le transport B1 Studio. Les garanties fournisseur ≠ garanties egress Studio.

## Rollback

WEB OFF. Jamais ASSUMED_1 comme garantie billable.
<<<FILE_END>>>

### `projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md`

<<<FILE_BEGIN projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md>>>
# Convergence OpenAI–Studio — As-built Macro-lot 1 (corrective)

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 (corrective) |
| Statut | CORRECTIVE INTEGRATED (périmètre autorisé) — **NOT ADOPTED** · **NO RELEASE** |
| HEAD entrée corrective | `5794584a` |
| Contrats | `1e2e188d` blobs exacts |
| Hors GO | Admin LIVE · migration PG · WEB LIVE · UX Figma apply · continuité native ON · push projet |

## Cartographie KEEP / ADAPT / REPLACE / BUILD / DEFER

| Domaine | Classe | État corrective |
|---|---|---|
| Tracing | ADAPT | ALS corrélation ; `processorsReplaced` honnête ; oracle réseau fetch indépendant |
| OBS | KEEP | Causalité métier |
| Frontier | ADAPT | tool_usage + stream UNKNOWN ; continuité branchée (mode OFF) |
| Collecteur Admin | BUILD/ADAPT | Parsing buckets→results officiel ; paths SDK ; transport isolé ; secret hors Next |
| FinOps | ADAPT | Décimal string ; comparabilité par évidence (pas flag seul) |
| Continuité | ADAPT | Raccord frontier ALS ; runtime OFF |
| WEB | KEEP OFF | Dossier A3 |
| Decisions / retrieval / audio / L2 | DEFER | Lots suivants |

## Readiness Admin

Critères locaux satisfaits pour demander G-ADMIN-SECRET / G-ADMIN-LIVE **après revue** :

- Parsing conforme page/bucket/results
- Transport GET allowlist + retries bornés
- Isolation process (`SFIA_ADMIN_COLLECTOR_PROCESS=1`)
- Produit ne lit pas `OPENAI_ADMIN_KEY`
- Erreurs/pagination/idempotence testées

**ADMIN COLLECTOR — READY FOR BOUNDED LIVE QUALIFICATION** (technique locale) — activation LIVE toujours gate Morris.

## Gates restants

1. G-PROVIDER-SNAPSHOT-MIGRATION
2. G-ADMIN-SECRET
3. G-ADMIN-LIVE
4. G-FINOPS-UX
5. G-WEB-PUBLIC / A3
6. G-TRACING-LOCAL
7. G-NATIVE-CONTINUITY
8. G-PROVIDER-LIVE-QUALIFICATION

## Provisionnement Admin (hors chat)

1. Morris crée la clé sur https://platform.openai.com/settings/organization/admin-keys
2. Provisionne uniquement dans l’env isolé du process collecteur (`OPENAI_ADMIN_KEY`)
3. `SFIA_ADMIN_COLLECTOR_PROCESS=1` · `STUDIO_LANE=DEV` · `SFIA_ADMIN_USAGE_LIVE=1` après GO
4. Jamais dans Next, Nora, navigateur, Git, chat, pack

## Fichiers clés corrective

- `provider-admin-usage-collector.ts` (rewrite)
- `provider-admin-http-transport.ts`
- `decimal-money.ts`
- `scripts/finops-admin-collect.mts`
- `agents-sdk-tracing.ts` (ALS + network oracle)
- frontier continuity bind + stream usage
- dossiers migration / A3 / UX candidats
<<<FILE_END>>>

### `projects/sfia-studio-next/construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md`

<<<FILE_BEGIN projects/sfia-studio-next/construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md>>>
# Migration candidate — provider Admin Usage/Costs snapshots (corrigée)

| Champ | Valeur |
|---|---|
| Statut | **CANDIDATE — NOT APPLIED** |
| Gate | **G-PROVIDER-SNAPSHOT-MIGRATION — MORRIS GO REQUIRED** |
| Motif | Persistance idempotente des *results* fournisseur (pas un second ledger métier) |

## Contrat de données

Réponse Usage/Costs = `page.data[]` buckets `{start_time,end_time,results[]}`.
Chaque **result** devient une ligne snapshot (surface = `result.object`).

## Schéma SQL proposé (additif DEV)

```sql
-- CANDIDATE ONLY — do not apply without GO.
-- Number/name must follow next available migration in web/src/db/migrations/.

CREATE TABLE IF NOT EXISTS provider_admin_usage_snapshots (
  id uuid PRIMARY KEY,
  collected_at timestamptz NOT NULL,
  collection_id text NOT NULL,
  source_endpoint text NOT NULL,
  surface_object text NOT NULL,
  organization_scope text NOT NULL,
  interval_start_utc timestamptz NOT NULL,
  interval_end_utc timestamptz NOT NULL,
  CHECK (interval_end_utc > interval_start_utc),
  granularity text NOT NULL CHECK (granularity IN ('1m','1h','1d')),
  project_id text,
  api_key_id text,
  user_id text,
  model text,
  line_item text,
  api_source text,
  input_tokens bigint,
  output_tokens bigint,
  input_cached_tokens bigint,
  num_model_requests integer,
  num_requests integer,
  amount numeric(24, 10),
  currency text,
  completeness text NOT NULL CHECK (completeness IN ('complete','partial')),
  schema_version text NOT NULL DEFAULT '2'
);

-- Idempotent uniqueness: NULLS NOT DISTINCT (PG 15+) so nullable dims collide correctly.
CREATE UNIQUE INDEX IF NOT EXISTS provider_admin_usage_snapshots_canon_uidx
  ON provider_admin_usage_snapshots (
    source_endpoint,
    surface_object,
    organization_scope,
    interval_start_utc,
    interval_end_utc,
    granularity,
    project_id,
    api_key_id,
    user_id,
    model,
    line_item,
    api_source
  ) NULLS NOT DISTINCT;

CREATE TABLE IF NOT EXISTS provider_admin_collection_runs (
  collection_id text PRIMARY KEY,
  started_at timestamptz NOT NULL,
  finished_at timestamptz,
  status text NOT NULL,
  pages_fetched integer NOT NULL DEFAULT 0,
  path text NOT NULL,
  limits_json jsonb NOT NULL DEFAULT '[]'::jsonb,
  last_error text
);

-- Access: revoke from app role used by Nora; grant only to collector role (DEV).
```

## Rollback privilégié

1. Arrêt du collecteur isolé.
2. Désactivation de la lecture snapshots dans FinOps.
3. **Pas de DROP TABLE** automatique sur RECETTE/STABLE.

## Justification vs v1

- surface_endpoint + surface_object dans la clé ;
- dimensions nullables avec `NULLS NOT DISTINCT` ;
- métriques absentes = NULL (jamais 0 inventé) ;
- costs amount en `numeric`, pas float.
<<<FILE_END>>>

### `projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts`

<<<FILE_BEGIN projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts>>>
/**
 * Provider Admin Usage & Costs collector — isolated from Nora.
 *
 * Contract (openai@7.50 / Admin Usage API):
 *   page.data[] = buckets { object:"bucket", start_time, end_time, results[] }
 *   each result has object:"organization.usage.*.result" | "organization.costs.result"
 *
 * Paths (SDK):
 *   GET /organization/usage/completions|embeddings|…|web_search_calls|decisions
 *   GET /organization/costs
 *   NO /organization/usage/responses
 *
 * Secret: never read by Next/Nora product paths. Only the isolated collector
 * process may load OPENAI_ADMIN_KEY (see provider-admin-http-transport.ts).
 */

import {
  decimalAdd,
  decimalFromNumberLike,
  decimalSub,
} from "./decimal-money";

export type AdminCollectorStatus =
  | "READY"
  | "BLOCKED_NO_SECRET"
  | "BLOCKED_NO_LIVE_GO"
  | "PARTIAL"
  | "ERROR"
  | "IDLE";

export type AdminMetricPresence = "MEASURED" | "ABSENT" | "INVALID";

export type AdminMetric = {
  presence: AdminMetricPresence;
  /** Decimal/integer string when MEASURED; never invent "0" for ABSENT. */
  value: string | null;
};

export type AdminUsageSnapshot = {
  sourceEndpoint: string;
  surfaceObject: string;
  organizationScope: string;
  intervalStartUtc: string;
  intervalEndUtc: string;
  granularity: "1m" | "1h" | "1d";
  dimensions: {
    project_id: string | null;
    api_key_id: string | null;
    user_id: string | null;
    model: string | null;
    line_item: string | null;
    api_source: string | null;
  };
  metrics: {
    input_tokens: AdminMetric;
    output_tokens: AdminMetric;
    input_cached_tokens: AdminMetric;
    num_model_requests: AdminMetric;
    num_requests: AdminMetric;
    amount: AdminMetric;
    currency: AdminMetric;
  };
  completeness: "complete" | "partial";
  collectedAtUtc: string;
  collectionId: string;
};

export type AdminCollectionResult = {
  status: AdminCollectorStatus;
  collectionId: string;
  collectedAtUtc: string;
  snapshots: AdminUsageSnapshot[];
  pagesFetched: number;
  limits: string[];
  lastError: string | null;
};

export type AdminHttpTransport = (input: {
  method: "GET";
  path: string;
  query: Record<string, string>;
  headers: Record<string, string>;
}) => Promise<{
  status: number;
  json: unknown;
  headers?: Record<string, string>;
}>;

export type AdminCollectorConfig = {
  /** Present only in isolated collector process — never in Nora/Next. */
  adminApiKey: string | null;
  organizationScope: string;
  liveAdminCallsAuthorized: boolean;
  transport?: AdminHttpTransport;
};

/** Paths confirmed in openai@7.50 SDK admin.organization.usage.* */
export const ADMIN_USAGE_ALLOWED_PATHS = Object.freeze([
  "/organization/usage/completions",
  "/organization/usage/embeddings",
  "/organization/usage/moderations",
  "/organization/usage/images",
  "/organization/usage/audio_speeches",
  "/organization/usage/audio_transcriptions",
  "/organization/usage/vector_stores",
  "/organization/usage/code_interpreter_sessions",
  "/organization/usage/file_search_calls",
  "/organization/usage/web_search_calls",
  "/organization/usage/decisions",
  "/organization/costs",
] as const);

const ALLOWED = new Set<string>(ADMIN_USAGE_ALLOWED_PATHS);

const snapshotByKey = new Map<string, AdminUsageSnapshot>();
let lastAttempt: {
  atUtc: string;
  collectionId: string;
  status: AdminCollectorStatus;
  error: string | null;
} | null = null;
let lastCompleteSuccess: {
  atUtc: string;
  collectionId: string;
} | null = null;

export function resetAdminCollectorStateForTests(): void {
  snapshotByKey.clear();
  lastAttempt = null;
  lastCompleteSuccess = null;
}

export function getAdminCollectorFreshness(): {
  lastAttemptAtUtc: string | null;
  lastSuccessAtUtc: string | null;
  lastCollectionId: string | null;
  status: AdminCollectorStatus;
  snapshotCount: number;
  /** Product-safe: never exposes whether a secret exists in process env. */
  secretReadableByProduct: false;
} {
  return {
    lastAttemptAtUtc: lastAttempt?.atUtc ?? null,
    lastSuccessAtUtc: lastCompleteSuccess?.atUtc ?? null,
    lastCollectionId:
      lastCompleteSuccess?.collectionId ?? lastAttempt?.collectionId ?? null,
    status: lastAttempt?.status ?? "IDLE",
    snapshotCount: snapshotByKey.size,
    secretReadableByProduct: false,
  };
}

export function listAdminCollectorSnapshots(): AdminUsageSnapshot[] {
  return [...snapshotByKey.values()];
}

/** @deprecated alias — prefer listAdminCollectorSnapshots */
export function listAdminCollectorBuckets(): AdminUsageSnapshot[] {
  return listAdminCollectorSnapshots();
}

/**
 * Product/Next must call this — never loads OPENAI_ADMIN_KEY.
 * Secret presence is unknown to the product runtime.
 */
export function resolveProductAdminCollectorView(): {
  organizationScope: string;
  freshness: ReturnType<typeof getAdminCollectorFreshness>;
} {
  return {
    organizationScope:
      (process.env.SFIA_OPENAI_ORG_SCOPE ?? "org:unspecified").trim() ||
      "org:unspecified",
    freshness: getAdminCollectorFreshness(),
  };
}

/**
 * Isolated collector process only. Must not be imported by Nora routes.
 */
export function resolveIsolatedAdminCollectorConfig(input: {
  adminApiKey: string | null;
  liveAuthorized: boolean;
  organizationScope?: string;
  transport?: AdminHttpTransport;
}): AdminCollectorConfig {
  return {
    adminApiKey: input.adminApiKey,
    organizationScope:
      input.organizationScope?.trim() ||
      (process.env.SFIA_OPENAI_ORG_SCOPE ?? "org:unspecified").trim() ||
      "org:unspecified",
    liveAdminCallsAuthorized: input.liveAuthorized,
    transport: input.transport,
  };
}

function metricFromUnknown(v: unknown): AdminMetric {
  if (v === undefined || v === null) {
    return { presence: "ABSENT", value: null };
  }
  if (typeof v === "number") {
    if (!Number.isFinite(v)) return { presence: "INVALID", value: null };
    return { presence: "MEASURED", value: String(Math.trunc(v)) };
  }
  if (typeof v === "string") {
    const d = decimalFromNumberLike(v);
    if (d == null) return { presence: "INVALID", value: null };
    return { presence: "MEASURED", value: d };
  }
  return { presence: "INVALID", value: null };
}

function amountMetric(result: Record<string, unknown>): {
  amount: AdminMetric;
  currency: AdminMetric;
} {
  const amountObj =
    result.amount && typeof result.amount === "object"
      ? (result.amount as Record<string, unknown>)
      : null;
  if (!amountObj) {
    return {
      amount: { presence: "ABSENT", value: null },
      currency: { presence: "ABSENT", value: null },
    };
  }
  const value = decimalFromNumberLike(amountObj.value);
  const currency =
    typeof amountObj.currency === "string" ? amountObj.currency.toLowerCase() : null;
  return {
    amount:
      value != null
        ? { presence: "MEASURED", value }
        : amountObj.value === undefined || amountObj.value === null
          ? { presence: "ABSENT", value: null }
          : { presence: "INVALID", value: null },
    currency:
      currency != null
        ? { presence: "MEASURED", value: currency }
        : { presence: "ABSENT", value: null },
  };
}

function dim(v: unknown): string | null {
  if (v === undefined || v === null) return null;
  if (typeof v === "string") return v;
  return null;
}

export function snapshotKey(s: AdminUsageSnapshot): string {
  const d = s.dimensions;
  return [
    s.sourceEndpoint,
    s.surfaceObject,
    s.organizationScope,
    s.intervalStartUtc,
    s.intervalEndUtc,
    s.granularity,
    d.project_id ?? "∅",
    d.api_key_id ?? "∅",
    d.user_id ?? "∅",
    d.model ?? "∅",
    d.line_item ?? "∅",
    d.api_source ?? "∅",
  ].join("|");
}

function granularityFromQuery(q: Record<string, string>): "1m" | "1h" | "1d" {
  const w = q.bucket_width;
  if (w === "1m" || w === "1h" || w === "1d") return w;
  return "1d";
}

/**
 * Parse official page shape: data[] buckets with nested results[].
 */
export function parseAdminUsagePage(input: {
  path: string;
  json: unknown;
  organizationScope: string;
  collectionId: string;
  collectedAtUtc: string;
  granularity: "1m" | "1h" | "1d";
}): { snapshots: AdminUsageSnapshot[]; nextPage: string | null; limits: string[] } {
  const limits: string[] = [];
  const body = input.json as {
    object?: string;
    data?: unknown[];
    has_more?: boolean;
    next_page?: string | null;
  } | null;
  if (!body || typeof body !== "object") {
    return { snapshots: [], nextPage: null, limits: ["PAGE_BODY_INVALID"] };
  }
  if (body.object != null && body.object !== "page") {
    limits.push("PAGE_OBJECT_UNEXPECTED");
  }
  const data = Array.isArray(body.data) ? body.data : [];
  const snapshots: AdminUsageSnapshot[] = [];

  for (const bucket of data) {
    if (!bucket || typeof bucket !== "object") {
      limits.push("BUCKET_INVALID");
      continue;
    }
    const b = bucket as Record<string, unknown>;
    if (b.object != null && b.object !== "bucket") {
      limits.push("BUCKET_OBJECT_UNEXPECTED");
    }
    if (typeof b.start_time !== "number" || typeof b.end_time !== "number") {
      limits.push("BUCKET_INTERVAL_INVALID");
      continue;
    }
    const intervalStartUtc = new Date(b.start_time * 1000).toISOString();
    const intervalEndUtc = new Date(b.end_time * 1000).toISOString();
    const results = Array.isArray(b.results) ? b.results : [];
    if (results.length === 0) {
      // Empty bucket is valid — no invented zeros.
      continue;
    }
    for (const result of results) {
      if (!result || typeof result !== "object") {
        limits.push("RESULT_INVALID");
        continue;
      }
      const r = result as Record<string, unknown>;
      const surfaceObject =
        typeof r.object === "string" ? r.object : "unknown.result";
      const { amount, currency } = amountMetric(r);
      snapshots.push({
        sourceEndpoint: input.path,
        surfaceObject,
        organizationScope: input.organizationScope,
        intervalStartUtc,
        intervalEndUtc,
        granularity: input.granularity,
        dimensions: {
          project_id: dim(r.project_id),
          api_key_id: dim(r.api_key_id),
          user_id: dim(r.user_id),
          model: dim(r.model),
          line_item: dim(r.line_item),
          api_source: dim(r.api_source),
        },
        metrics: {
          input_tokens: metricFromUnknown(r.input_tokens),
          output_tokens: metricFromUnknown(r.output_tokens),
          input_cached_tokens: metricFromUnknown(r.input_cached_tokens),
          num_model_requests: metricFromUnknown(r.num_model_requests),
          num_requests: metricFromUnknown(r.num_requests),
          amount,
          currency,
        },
        completeness: "complete",
        collectedAtUtc: input.collectedAtUtc,
        collectionId: input.collectionId,
      });
    }
  }

  const nextPage =
    body.has_more && typeof body.next_page === "string" ? body.next_page : null;
  return { snapshots, nextPage, limits };
}

export function upsertAdminSnapshots(
  snapshots: AdminUsageSnapshot[],
): void {
  for (const s of snapshots) {
    const key = snapshotKey(s);
    const prev = snapshotByKey.get(key);
    if (prev?.completeness === "complete" && s.completeness === "partial") {
      continue;
    }
    snapshotByKey.set(key, s);
  }
}

function assertAllowedPath(path: string): void {
  if (!ALLOWED.has(path)) {
    throw new Error(`ADMIN_PATH_NOT_ALLOWLISTED:${path}`);
  }
}

export async function collectAdminUsagePage(input: {
  config: AdminCollectorConfig;
  path: string;
  query: Record<string, string>;
  collectionId: string;
}): Promise<{
  snapshots: AdminUsageSnapshot[];
  nextPage: string | null;
  limits: string[];
}> {
  assertAllowedPath(input.path);
  if (!input.config.adminApiKey) throw new Error("BLOCKED_NO_SECRET");
  if (!input.config.liveAdminCallsAuthorized && !input.config.transport) {
    throw new Error("BLOCKED_NO_LIVE_GO");
  }
  const transport = input.config.transport;
  if (!transport) throw new Error("BLOCKED_NO_TRANSPORT");

  const res = await transport({
    method: "GET",
    path: input.path,
    query: input.query,
    headers: {
      Authorization: `Bearer ${input.config.adminApiKey}`,
      "Content-Type": "application/json",
    },
  });
  if (res.status === 429) throw new Error("RATE_LIMITED");
  if (res.status === 401 || res.status === 403) {
    throw new Error("ADMIN_PERMISSION_DENIED");
  }
  if (res.status < 200 || res.status >= 300) {
    throw new Error(`ADMIN_HTTP_${res.status}`);
  }
  const collectedAtUtc = new Date().toISOString();
  return parseAdminUsagePage({
    path: input.path,
    json: res.json,
    organizationScope: input.config.organizationScope,
    collectionId: input.collectionId,
    collectedAtUtc,
    granularity: granularityFromQuery(input.query),
  });
}

export async function runAdminCollection(input: {
  config: AdminCollectorConfig;
  path: string;
  query: Record<string, string>;
  maxPages?: number;
}): Promise<AdminCollectionResult> {
  const collectionId = `acol_${Date.now().toString(36)}`;
  const collectedAtUtc = new Date().toISOString();
  const limits: string[] = [];

  if (!input.config.adminApiKey) {
    const r: AdminCollectionResult = {
      status: "BLOCKED_NO_SECRET",
      collectionId,
      collectedAtUtc,
      snapshots: [],
      pagesFetched: 0,
      limits: ["OPENAI_ADMIN_KEY_ABSENT"],
      lastError: null,
    };
    lastAttempt = {
      atUtc: collectedAtUtc,
      collectionId,
      status: r.status,
      error: null,
    };
    return r;
  }
  if (!input.config.liveAdminCallsAuthorized && !input.config.transport) {
    const r: AdminCollectionResult = {
      status: "BLOCKED_NO_LIVE_GO",
      collectionId,
      collectedAtUtc,
      snapshots: [],
      pagesFetched: 0,
      limits: ["SFIA_ADMIN_USAGE_LIVE_REQUIRED"],
      lastError: null,
    };
    lastAttempt = {
      atUtc: collectedAtUtc,
      collectionId,
      status: r.status,
      error: null,
    };
    return r;
  }

  const maxPages = Math.max(1, Math.min(50, input.maxPages ?? 10));
  const all: AdminUsageSnapshot[] = [];
  let page: string | null = null;
  let pagesFetched = 0;
  let partial = false;

  try {
    assertAllowedPath(input.path);
    for (let i = 0; i < maxPages; i++) {
      const query = { ...input.query };
      if (page) query.page = page;
      const result = await collectAdminUsagePage({
        config: input.config,
        path: input.path,
        query,
        collectionId,
      });
      pagesFetched += 1;
      all.push(...result.snapshots);
      limits.push(...result.limits);
      page = result.nextPage;
      if (!page) break;
      if (i === maxPages - 1 && page) {
        partial = true;
        limits.push("PAGINATION_TRUNCATED");
      }
    }

    if (partial) {
      for (const s of all) s.completeness = "partial";
      upsertAdminSnapshots(all);
      lastAttempt = {
        atUtc: collectedAtUtc,
        collectionId,
        status: "PARTIAL",
        error: null,
      };
      return {
        status: "PARTIAL",
        collectionId,
        collectedAtUtc,
        snapshots: all,
        pagesFetched,
        limits: [...new Set(limits)],
        lastError: null,
      };
    }

    upsertAdminSnapshots(all);
    lastAttempt = {
      atUtc: collectedAtUtc,
      collectionId,
      status: "READY",
      error: null,
    };
    lastCompleteSuccess = { atUtc: collectedAtUtc, collectionId };
    return {
      status: "READY",
      collectionId,
      collectedAtUtc,
      snapshots: all,
      pagesFetched,
      limits: [...new Set(limits)],
      lastError: null,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    const status: AdminCollectorStatus =
      msg === "BLOCKED_NO_SECRET"
        ? "BLOCKED_NO_SECRET"
        : msg === "BLOCKED_NO_LIVE_GO" || msg === "BLOCKED_NO_TRANSPORT"
          ? "BLOCKED_NO_LIVE_GO"
          : "ERROR";
    lastAttempt = {
      atUtc: collectedAtUtc,
      collectionId,
      status,
      error: msg,
    };
    // Never wipe prior complete snapshots on error.
    return {
      status,
      collectionId,
      collectedAtUtc,
      snapshots: [],
      pagesFetched,
      limits,
      lastError: msg,
    };
  }
}

export type FinOpsScopeEvidence = {
  organizationMatches: boolean;
  projectIdsOverlap: boolean;
  apiKeyIdsOverlap: boolean;
  periodOverlap: boolean;
  currencyMatches: boolean;
  surfacesRequested: string[];
  /** Explicit evidence — never a lone config flag. */
  evidenceNotes: string[];
};

export function assessFinOpsComparability(
  evidence: FinOpsScopeEvidence,
): {
  comparable: boolean;
  status: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL";
  limits: string[];
} {
  const limits: string[] = [...evidence.evidenceNotes];
  if (!evidence.organizationMatches) limits.push("ORG_MISMATCH");
  if (!evidence.periodOverlap) limits.push("PERIOD_NO_OVERLAP");
  if (!evidence.currencyMatches) limits.push("CURRENCY_MISMATCH");
  if (!evidence.projectIdsOverlap && !evidence.apiKeyIdsOverlap) {
    limits.push("PROJECT_OR_KEY_SCOPE_UNPROVEN");
  }
  const hardFail =
    !evidence.organizationMatches ||
    !evidence.periodOverlap ||
    !evidence.currencyMatches ||
    (!evidence.projectIdsOverlap && !evidence.apiKeyIdsOverlap);
  if (hardFail) {
    return { comparable: false, status: "NON_COMPARABLE", limits };
  }
  return { comparable: true, status: "COMPARABLE", limits };
}

export function sumMeasuredCostUsd(
  snapshots: AdminUsageSnapshot[],
  filter: {
    intervalStartUtc?: string;
    intervalEndUtc?: string;
    projectId?: string | null;
  },
): { total: string | null; counted: number; limits: string[] } {
  const limits: string[] = [];
  let total: string | null = null;
  let counted = 0;
  for (const s of snapshots) {
    if (s.surfaceObject !== "organization.costs.result") continue;
    if (
      filter.intervalStartUtc &&
      s.intervalEndUtc <= filter.intervalStartUtc
    ) {
      continue;
    }
    if (
      filter.intervalEndUtc &&
      s.intervalStartUtc >= filter.intervalEndUtc
    ) {
      continue;
    }
    if (
      filter.projectId &&
      s.dimensions.project_id != null &&
      s.dimensions.project_id !== filter.projectId
    ) {
      continue;
    }
    if (s.metrics.amount.presence !== "MEASURED" || !s.metrics.amount.value) {
      if (s.metrics.amount.presence === "ABSENT") limits.push("COST_AMOUNT_ABSENT");
      if (s.metrics.amount.presence === "INVALID") limits.push("COST_AMOUNT_INVALID");
      continue;
    }
    if (
      s.metrics.currency.presence === "MEASURED" &&
      s.metrics.currency.value != null &&
      s.metrics.currency.value !== "usd"
    ) {
      limits.push("NON_USD_CURRENCY_SKIPPED");
      continue;
    }
    total = total == null ? s.metrics.amount.value : decimalAdd(total, s.metrics.amount.value);
    if (total == null) {
      limits.push("DECIMAL_ADD_FAILED");
      return { total: null, counted, limits };
    }
    counted += 1;
  }
  return { total, counted, limits: [...new Set(limits)] };
}

export function reconcileFinOpsCosts(input: {
  studioEstimatedUsd: string | null;
  providerCostUsd: string | null;
  scope: FinOpsScopeEvidence;
}): {
  status: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL" | "UNAVAILABLE";
  deltaUsd: string | null;
  limits: string[];
} {
  if (input.studioEstimatedUsd == null || input.providerCostUsd == null) {
    return {
      status: "UNAVAILABLE",
      deltaUsd: null,
      limits: ["STUDIO_OR_PROVIDER_ABSENT"],
    };
  }
  const scope = assessFinOpsComparability(input.scope);
  if (!scope.comparable) {
    return {
      status: "NON_COMPARABLE",
      deltaUsd: null,
      limits: scope.limits,
    };
  }
  const delta = decimalSub(input.providerCostUsd, input.studioEstimatedUsd);
  if (delta == null) {
    return {
      status: "PARTIAL",
      deltaUsd: null,
      limits: ["DECIMAL_PARSE_FAILED", ...scope.limits],
    };
  }
  return { status: "COMPARABLE", deltaUsd: delta, limits: scope.limits };
}
<<<FILE_END>>>

### `projects/sfia-studio-next/web/src/lib/agents-sdk-tracing.ts`

<<<FILE_BEGIN projects/sfia-studio-next/web/src/lib/agents-sdk-tracing.ts>>>
/**
 * Agents SDK tracing under Studio control (corrective).
 *
 * - Correlation via AsyncLocalStorage (no mutable global for concurrent works).
 * - setTraceProcessors([...]) replaces defaults; failure ⇒ tracing OFF.
 * - StudioLocalTraceProcessor: redacted OBS + in-memory sink; no HTTP.
 * - Independent network oracle: wrap fetch around real SDK runs.
 */

import { AsyncLocalStorage } from "node:async_hooks";
import { emitObs } from "@/lib/observability";

export type AgentsTracingMode = "off" | "local";

export type StudioTracingCorrelation = {
  operationId: string | null;
  generationId: string | null;
  attemptId: string | null;
  workId: string | null;
};

export type StudioTraceSinkRecord = {
  kind: "trace" | "span";
  name: string;
  traceId: string | null;
  spanId: string | null;
  status: string | null;
  durationMs: number | null;
  dataRedacted: true;
  correlation: StudioTracingCorrelation;
  atMs: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TraceLike = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SpanLike = any;

const correlationAls = new AsyncLocalStorage<StudioTracingCorrelation>();

let configured = false;
let lastMode: AgentsTracingMode = "off";
let processorsActuallyReplaced = false;

const sinkRecords: StudioTraceSinkRecord[] = [];
const networkHits: string[] = [];

export function resetAgentsTracingTestState(): void {
  sinkRecords.length = 0;
  networkHits.length = 0;
  configured = false;
  lastMode = "off";
  processorsActuallyReplaced = false;
}

export function getAgentsTracingSinkRecords(): readonly StudioTraceSinkRecord[] {
  return sinkRecords;
}

export function getAgentsTracingNetworkHits(): readonly string[] {
  return networkHits;
}

export function resolveAgentsTracingMode(
  env: NodeJS.ProcessEnv = process.env,
): AgentsTracingMode {
  const raw = (env.SFIA_AGENTS_TRACING_MODE ?? "off").trim().toLowerCase();
  return raw === "local" ? "local" : "off";
}

export async function runWithAgentsTracingCorrelation<T>(
  corr: StudioTracingCorrelation,
  fn: () => Promise<T>,
): Promise<T> {
  return correlationAls.run(
    {
      operationId: corr.operationId ?? null,
      generationId: corr.generationId ?? null,
      attemptId: corr.attemptId ?? null,
      workId: corr.workId ?? null,
    },
    fn,
  );
}

export function getAgentsTracingCorrelation(): StudioTracingCorrelation {
  return (
    correlationAls.getStore() ?? {
      operationId: null,
      generationId: null,
      attemptId: null,
      workId: null,
    }
  );
}

/** @deprecated mutable global — kept as no-op wrapper for callers; use ALS. */
export function setAgentsTracingCorrelation(
  next: Partial<StudioTracingCorrelation>,
): void {
  const cur = correlationAls.getStore();
  if (!cur) return;
  cur.operationId = next.operationId ?? cur.operationId;
  cur.generationId = next.generationId ?? cur.generationId;
  cur.attemptId = next.attemptId ?? cur.attemptId;
  cur.workId = next.workId ?? cur.workId;
}

export function clearAgentsTracingCorrelation(): void {
  /* ALS exits clear scope; no global to clear */
}

function spanName(span: SpanLike): string {
  const data = span?.spanData ?? span?.data;
  if (data && typeof data === "object") {
    const t = typeof data.type === "string" ? data.type : null;
    const n = typeof data.name === "string" ? data.name : null;
    if (t && n) return `${t}:${n}`;
    if (t) return t;
    if (n) return n;
  }
  return "span";
}

function asEpochMs(v: unknown): number | null {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string" && v.trim()) {
    const t = Date.parse(v);
    return Number.isFinite(t) ? t : null;
  }
  return null;
}

function durationMs(span: SpanLike): number | null {
  const start = asEpochMs(span?.startedAt);
  const end = asEpochMs(span?.endedAt);
  if (start == null || end == null) return null;
  return Math.max(0, Math.floor(end - start));
}

function statusOf(span: SpanLike): string | null {
  if (span?.error != null) return "error";
  if (span?.endedAt != null) return "ok";
  return null;
}

function recordLocal(item: StudioTraceSinkRecord): void {
  sinkRecords.push(item);
  if (sinkRecords.length > 500) sinkRecords.shift();
  try {
    emitObs({
      event_name: "provider.agents_trace.local",
      component: "agents_sdk_tracing",
      outcome: item.status === "error" ? "FAILED" : "SUCCESS",
      operation_id: item.correlation.operationId ?? undefined,
      generation_id: item.correlation.generationId ?? undefined,
      attempt_id: item.correlation.attemptId ?? undefined,
      duration_ms: item.durationMs ?? undefined,
      meta: {
        kind: item.kind,
        status: item.status,
        tool_calls: item.name,
      },
    });
  } catch {
    /* never break Nora */
  }
}

export class StudioLocalTraceProcessor {
  async onTraceStart(_trace: TraceLike): Promise<void> {}

  async onTraceEnd(trace: TraceLike): Promise<void> {
    try {
      recordLocal({
        kind: "trace",
        name: typeof trace?.name === "string" ? trace.name : "trace",
        traceId: typeof trace?.traceId === "string" ? trace.traceId : null,
        spanId: null,
        status: "ok",
        durationMs: null,
        dataRedacted: true,
        correlation: getAgentsTracingCorrelation(),
        atMs: Date.now(),
      });
    } catch {
      /* swallow */
    }
  }

  async onSpanStart(_span: SpanLike): Promise<void> {}

  async onSpanEnd(span: SpanLike): Promise<void> {
    try {
      recordLocal({
        kind: "span",
        name: spanName(span),
        traceId: typeof span?.traceId === "string" ? span.traceId : null,
        spanId: typeof span?.spanId === "string" ? span.spanId : null,
        status: statusOf(span),
        durationMs: durationMs(span),
        dataRedacted: true,
        correlation: getAgentsTracingCorrelation(),
        atMs: Date.now(),
      });
    } catch {
      /* swallow */
    }
  }

  async forceFlush(): Promise<void> {}
  async shutdown(): Promise<void> {}
}

function urlOf(input: RequestInfo | URL): string {
  if (typeof input === "string") return input;
  if (input instanceof URL) return input.toString();
  try {
    return String((input as Request).url ?? "");
  } catch {
    return "";
  }
}

function isTraceExportUrl(url: string): boolean {
  const u = url.toLowerCase();
  return (
    u.includes("/traces") ||
    u.includes("traces.ingest") ||
    u.includes("api.openai.com/v1/traces")
  );
}

/**
 * Independent network oracle: wrap global fetch for the duration of fn.
 * Records any URL that looks like a traces export endpoint.
 */
export async function withAgentsTracingNetworkOracle<T>(
  fn: () => Promise<T>,
): Promise<{ result: T; traceExportUrls: string[] }> {
  const hits: string[] = [];
  const prev = globalThis.fetch;
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = urlOf(input);
    if (isTraceExportUrl(url)) {
      hits.push(url);
      networkHits.push(url);
      return new Response(JSON.stringify({ refused: "TRACE_EXPORT_BLOCKED" }), {
        status: 599,
        headers: { "content-type": "application/json" },
      });
    }
    return prev(input, init);
  }) as typeof fetch;
  try {
    const result = await fn();
    return { result, traceExportUrls: hits };
  } finally {
    globalThis.fetch = prev;
  }
}

export type ConfigureAgentsTracingResult = {
  mode: AgentsTracingMode;
  tracingDisabled: boolean;
  processorsReplaced: boolean;
  sensitiveLoggingForcedOff: boolean;
};

export async function configureAgentsSdkTracing(
  env: NodeJS.ProcessEnv = process.env,
): Promise<ConfigureAgentsTracingResult> {
  const mode = resolveAgentsTracingMode(env);
  let sensitiveLoggingForcedOff = false;
  let processorsReplaced = false;

  try {
    const core = await import("@openai/agents-core");
    if (typeof core.setSensitiveDataLoggingEnabled === "function") {
      core.setSensitiveDataLoggingEnabled(false);
      sensitiveLoggingForcedOff = true;
    }
  } catch {
    sensitiveLoggingForcedOff = false;
  }

  try {
    const agents = await import("@openai/agents");
    if (mode === "off") {
      if (typeof agents.setTraceProcessors === "function") {
        agents.setTraceProcessors([]);
        processorsReplaced = true;
      }
      if (typeof agents.setTracingDisabled === "function") {
        agents.setTracingDisabled(true);
      }
      lastMode = "off";
      configured = true;
      processorsActuallyReplaced = processorsReplaced;
      return {
        mode: "off",
        tracingDisabled: true,
        processorsReplaced,
        sensitiveLoggingForcedOff,
      };
    }

    if (typeof agents.setTraceProcessors !== "function") {
      // Cannot prove replacement — fail closed to OFF.
      if (typeof agents.setTracingDisabled === "function") {
        agents.setTracingDisabled(true);
      }
      lastMode = "off";
      configured = true;
      processorsActuallyReplaced = false;
      return {
        mode: "off",
        tracingDisabled: true,
        processorsReplaced: false,
        sensitiveLoggingForcedOff,
      };
    }

    agents.setTraceProcessors([new StudioLocalTraceProcessor()]);
    processorsReplaced = true;
    if (typeof agents.setTracingDisabled === "function") {
      agents.setTracingDisabled(false);
    }
    lastMode = "local";
    configured = true;
    processorsActuallyReplaced = true;
    return {
      mode: "local",
      tracingDisabled: false,
      processorsReplaced: true,
      sensitiveLoggingForcedOff,
    };
  } catch {
    // Configuration failure ⇒ OFF
    lastMode = "off";
    configured = true;
    processorsActuallyReplaced = false;
    return {
      mode: "off",
      tracingDisabled: true,
      processorsReplaced: false,
      sensitiveLoggingForcedOff,
    };
  }
}

export function getAgentsTracingConfigState(): {
  configured: boolean;
  mode: AgentsTracingMode;
  processorsReplaced: boolean;
} {
  return {
    configured,
    mode: lastMode,
    processorsReplaced: processorsActuallyReplaced,
  };
}
<<<FILE_END>>>


---

## 5. Diff complet commit `a095171e00db281d741010f2d04918e8c79af25c`

<<<DIFF_BEGIN>>>
commit a095171e00db281d741010f2d04918e8c79af25c
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Nov 26 21:06:56 2026 +0100

    fix(next): ML1 corrective — Admin bucket parsing, tracing ALS, FinOps decimal

    Integrate provider foundation correctives: official Usage/Costs nested results,
    isolated Admin transport, ALS tracing correlation with network oracle, frontier
    continuity hook (OFF), and evidence-based FinOps reconciliation.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md b/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md
index 1cc8155f..57797e23 100644
--- a/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md
@@ -1,90 +1,62 @@
-# Convergence OpenAI–Studio — As-built Macro-lot 1 (DEV candidat)
+# Convergence OpenAI–Studio — As-built Macro-lot 1 (corrective)

 | Champ | Valeur |
 |---|---|
-| Date | 2026-11-26 |
-| Statut | IMPLEMENTED (périmètre autorisé) — **NOT ADOPTED** · **NO RELEASE** |
-| GO | Morris GO Macro-lot 1 Critical DEV |
-| Contrats | `cadrage.md` / `contrat-fonctionnel.md` / `contrat-technique.md` @ `1e2e188d` |
-| Candidat code tip (pré-lot) | `c574d262` · web `5a1289fc` |
-| Hors GO | Migration PG · Admin LIVE · WEB LIVE · UX Figma page 13 · push projet |
+| Date | 2026-11-26 (corrective) |
+| Statut | CORRECTIVE INTEGRATED (périmètre autorisé) — **NOT ADOPTED** · **NO RELEASE** |
+| HEAD entrée corrective | `5794584a` |
+| Contrats | `1e2e188d` blobs exacts |
+| Hors GO | Admin LIVE · migration PG · WEB LIVE · UX Figma apply · continuité native ON · push projet |

-## 1. Diagnostic AS-IS → transformations réalisées
+## Cartographie KEEP / ADAPT / REPLACE / BUILD / DEFER

-| Domaine | Classe | Réalisé | Preuve | Gate restant |
-|---|---|---|---|---|
-| Tracing Agents SDK | ADAPT | `lib/agents-sdk-tracing.ts` ; `setTraceProcessors([StudioLocal])` ou OFF ; Nora + WEB worker | unit `ml5-agents-sdk-tracing` | Activer `SFIA_AGENTS_TRACING_MODE=local` en DEV |
-| OBS métier | KEEP | `lib/observability.ts` inchangé comme SoT causale | — | — |
-| Frontière | KEEP/ADAPT | `tool_usage.web_search.num_requests` a posteriori ; pas d’ASSUMED_1 | unit frontier + response-usage | G-WEB-PUBLIC |
-| FinOps ledger | KEEP | `provider_usage_observations` | existant | — |
-| Usage & Costs | BUILD | Collecteur isolé + rapprochement honnête UNAVAILABLE sans secret/GO | unit collector | Admin key + LIVE GO + migration PG |
-| Continuité native | ADAPT/DEFER runtime | Module `provider-response-continuity` (OFF par défaut) | unit continuity | Preuve A/B + flag `native` |
-| WEB | KEEP OFF | Gates préservés ; tracing aligné worker | existant + wiring | GO WEB |
-| Décisions / retrieval / audio / L2 | DEFER | Non implémentés (lots suivants) | — | — |
-
-## 2. Fichiers
-
-### Créés
-- `web/src/lib/agents-sdk-tracing.ts`
-- `web/src/domains/conversation/provider-response-usage.ts`
-- `web/src/domains/conversation/provider-response-continuity.ts`
-- `web/src/domains/finops/provider-admin-usage-collector.ts`
-- `web/tests/unit/ml5-agents-sdk-tracing.test.ts`
-- `web/tests/unit/ml5-provider-response-usage.test.ts`
-- `web/tests/unit/ml5-provider-response-continuity.test.ts`
-- `web/tests/unit/ml5-provider-admin-usage-collector.test.ts`
-- `construction/convergence-openai-studio/{cadrage,contrat-*}.md` (raccordement blob exact)
-- `construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md`
-- `construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md`
-
-### Modifiés
-- `nora-adapter.ts` — configureAgentsSdkTracing
-- `public-web-search-frontier.ts` — même politique tracing
-- `provider-emission-frontier.ts` — réconciliation tool_usage
-- `usage-read-service.ts` — `providerReconciliation` DTO
-- `tests/unit/ml5-provider-emission-frontier.test.ts`
-- `construction/delivery-history.md`
-
-### Retirés
-- Aucun (coexistence : OBS KEEP ; tracing custom mid-turn non retiré en masse — mapping partiel)
-
-## 3. Configuration
-
-| Variable | Rôle | Défaut |
+| Domaine | Classe | État corrective |
 |---|---|---|
-| `SFIA_AGENTS_TRACING_MODE` | `off` \| `local` | `off` (rollback sûr) |
-| `OPENAI_ADMIN_KEY` | Secret Admin isolé | absent → BLOCKED |
-| `SFIA_ADMIN_USAGE_LIVE` | Autorise appels Admin réels (DEV only) | off |
-| `SFIA_OPENAI_ORG_SCOPE` | Label scope org | `org:unspecified` |
-| `SFIA_FINOPS_SCOPE_COMPARABLE` | Mapping lane↔projet prouvé | off → NON_COMPARABLE |
-| `SFIA_PROVIDER_CONTINUITY_MODE` | `off` \| `native` | `off` |
-
-## 4. Provisionnement Admin (procédure — secret hors chat)
-
-1. Morris crée une clé Admin dédiée : https://platform.openai.com/settings/organization/admin-keys
-2. Provisionner **uniquement** dans l’environnement isolé DEV (fichier secrets local / secret manager), variable `OPENAI_ADMIN_KEY`.
-3. Ne jamais coller la valeur dans chat, Git, pack ou OBS.
-4. Poser `SFIA_ADMIN_USAGE_LIVE=1` seulement après GO LIVE Admin spécifique.
-5. Migration PG snapshots requise avant persistance produit (candidat documenté).
-
-## 5. Remplacements / rationalisation
-
-| Ancien | Nouveau | Couverture | Retrait |
-|---|---|---|---|
-| Tracing OFF permanent | Mode local filtré optionnel | Spans run/generation/tool redacted | Default processors remplacés ; export distant jamais enregistré |
-| Commit hosted = max_tool_calls | Commit = num_requests si présent sinon UNKNOWN | Mesure billable honnête | ASSUMED_1 déjà non garantie ; confirmé |
-| FinOps estimations seules | + DTO rapprochement | Fraîcheur / UNAVAILABLE | Pas de second ledger |
-
-## 6. Critères CONV-F11…F15 (état)
-
-| ID | Niveau | Réserve |
-|---|---|---|
-| F11 Tracing | COVERAGE VERIFIED (déterministe) | LIVE Agents path avec mode local à confirmer |
-| F12 Continuité | IMPLEMENTED (module) / BEHAVIOR partiel | Flag native OFF ; A/B non LIVE |
-| F13 FinOps rapprochement | IMPLEMENTED structurelle | Admin LIVE + mapping scope + migration |
-| F14 Collecteur résilience | COVERAGE VERIFIED (transport substitué) | Pas d’appel Admin réel |
-| F15 WEB | BEHAVIOR OFF / refuse gates | Pas de G-WEB-PUBLIC |
-
-## 7. Roadmap delta (candidat — non appliqué)
-
-Proposer sous gouvernance : « Macro-lot 1 convergence fournisseur — candidat DEV intégré ; gates Admin/WEB/migration/UX ouverts ».
+| Tracing | ADAPT | ALS corrélation ; `processorsReplaced` honnête ; oracle réseau fetch indépendant |
+| OBS | KEEP | Causalité métier |
+| Frontier | ADAPT | tool_usage + stream UNKNOWN ; continuité branchée (mode OFF) |
+| Collecteur Admin | BUILD/ADAPT | Parsing buckets→results officiel ; paths SDK ; transport isolé ; secret hors Next |
+| FinOps | ADAPT | Décimal string ; comparabilité par évidence (pas flag seul) |
+| Continuité | ADAPT | Raccord frontier ALS ; runtime OFF |
+| WEB | KEEP OFF | Dossier A3 |
+| Decisions / retrieval / audio / L2 | DEFER | Lots suivants |
+
+## Readiness Admin
+
+Critères locaux satisfaits pour demander G-ADMIN-SECRET / G-ADMIN-LIVE **après revue** :
+
+- Parsing conforme page/bucket/results
+- Transport GET allowlist + retries bornés
+- Isolation process (`SFIA_ADMIN_COLLECTOR_PROCESS=1`)
+- Produit ne lit pas `OPENAI_ADMIN_KEY`
+- Erreurs/pagination/idempotence testées
+
+**ADMIN COLLECTOR — READY FOR BOUNDED LIVE QUALIFICATION** (technique locale) — activation LIVE toujours gate Morris.
+
+## Gates restants
+
+1. G-PROVIDER-SNAPSHOT-MIGRATION
+2. G-ADMIN-SECRET
+3. G-ADMIN-LIVE
+4. G-FINOPS-UX
+5. G-WEB-PUBLIC / A3
+6. G-TRACING-LOCAL
+7. G-NATIVE-CONTINUITY
+8. G-PROVIDER-LIVE-QUALIFICATION
+
+## Provisionnement Admin (hors chat)
+
+1. Morris crée la clé sur https://platform.openai.com/settings/organization/admin-keys
+2. Provisionne uniquement dans l’env isolé du process collecteur (`OPENAI_ADMIN_KEY`)
+3. `SFIA_ADMIN_COLLECTOR_PROCESS=1` · `STUDIO_LANE=DEV` · `SFIA_ADMIN_USAGE_LIVE=1` après GO
+4. Jamais dans Next, Nora, navigateur, Git, chat, pack
+
+## Fichiers clés corrective
+
+- `provider-admin-usage-collector.ts` (rewrite)
+- `provider-admin-http-transport.ts`
+- `decimal-money.ts`
+- `scripts/finops-admin-collect.mts`
+- `agents-sdk-tracing.ts` (ALS + network oracle)
+- frontier continuity bind + stream usage
+- dossiers migration / A3 / UX candidats
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/dossier-g-web-public-a3-20261126.md b/projects/sfia-studio-next/construction/convergence-openai-studio/dossier-g-web-public-a3-20261126.md
new file mode 100644
index 00000000..5664f685
--- /dev/null
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/dossier-g-web-public-a3-20261126.md
@@ -0,0 +1,40 @@
+# Dossier d’arbitrage — G-WEB-PUBLIC / Option A3
+
+| Champ | Valeur |
+|---|---|
+| Gate | **G-WEB-PUBLIC / A3 — MORRIS DECISION REQUIRED** |
+| Statut | WEB OFF · MIXED CLOSED · aucune campagne LIVE |
+| Date | 2026-11-26 |
+
+## Distinctions démontrées (déterministe)
+
+| Dimension | Sémantique | Preuve locale |
+|---|---|---|
+| `max_tool_calls` | Borne a priori des appels built-in | Injection frontier + tests |
+| `tool_usage.web_search.num_requests` | Mesure a posteriori facturable si présente | Parse + reconcile |
+| Absent `tool_usage` | **UNKNOWN** (jamais ASSUMED_1) | Tests |
+| Pression d’enveloppe | Consomme `max_tool_calls` même si billable UNKNOWN | Tests envelope |
+
+## Option A3 (candidate)
+
+1. Pré-réserver les dimensions contrôlables (`max_tool_calls`, tokens).
+2. Mesurer `num_requests` a posteriori lorsque fourni.
+3. Réconcilier ; suspendre si mesure > enveloppe.
+4. Expliciter le risque résiduel : sans `num_requests`, la borne facturable n’est pas stricte.
+
+## Alternatives
+
+| Id | Description |
+|---|---|
+| A1 | Gate fermé (état actuel) |
+| A2 | Enveloppe = N × max_tool_calls (conservative) |
+| A3 | Pré-réserve + mesure + suspend |
+| A4 | Direct B1 only (pas hosted) |
+
+## Risque résiduel
+
+OpenAI hosted web_search destinations ne passent pas par le transport B1 Studio. Les garanties fournisseur ≠ garanties egress Studio.
+
+## Rollback
+
+WEB OFF. Jamais ASSUMED_1 comme garantie billable.
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md b/projects/sfia-studio-next/construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md
index 90d23c1d..a6905dd5 100644
--- a/projects/sfia-studio-next/construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md
@@ -1,51 +1,66 @@
-# Migration candidate — provider Admin Usage/Costs snapshots
+# Migration candidate — provider Admin Usage/Costs snapshots (corrigée)

 | Champ | Valeur |
 |---|---|
 | Statut | **CANDIDATE — NOT APPLIED** |
-| Gate | GO Morris migration structurante (mandat §5 / §10.5) |
-| Motif | Persistance idempotente des agrégats fournisseur pour rapprochement FinOps |
+| Gate | **G-PROVIDER-SNAPSHOT-MIGRATION — MORRIS GO REQUIRED** |
+| Motif | Persistance idempotente des *results* fournisseur (pas un second ledger métier) |

-## Besoin
+## Contrat de données

-Le collecteur Admin (`provider-admin-usage-collector.ts`) maintient aujourd’hui une vue **in-process** pour tests et readiness. Une représentation PostgreSQL distincte du ledger `provider_usage_observations` est nécessaire pour :
+Réponse Usage/Costs = `page.data[]` buckets `{start_time,end_time,results[]}`.
+Chaque **result** devient une ligne snapshot (surface = `result.object`).

-- survie au redémarrage ;
-- fraîcheur consultable par l’UI FinOps ;
-- idempotence multi-collecte.
-
-Ce n’est **pas** un second ledger métier.
-
-## Schéma minimal proposé
+## Schéma SQL proposé (additif DEV)

 ```sql
 -- CANDIDATE ONLY — do not apply without GO.
+-- Number/name must follow next available migration in web/src/db/migrations/.
+
 CREATE TABLE IF NOT EXISTS provider_admin_usage_snapshots (
   id uuid PRIMARY KEY,
   collected_at timestamptz NOT NULL,
   collection_id text NOT NULL,
-  source text NOT NULL, -- openai.organization.usage | openai.organization.costs
+  source_endpoint text NOT NULL,
+  surface_object text NOT NULL,
   organization_scope text NOT NULL,
   interval_start_utc timestamptz NOT NULL,
   interval_end_utc timestamptz NOT NULL,
-  granularity text NOT NULL, -- hour | day
-  dimensions_json jsonb NOT NULL DEFAULT '{}'::jsonb,
-  unit text NOT NULL,
+  CHECK (interval_end_utc > interval_start_utc),
+  granularity text NOT NULL CHECK (granularity IN ('1m','1h','1d')),
+  project_id text,
+  api_key_id text,
+  user_id text,
+  model text,
+  line_item text,
+  api_source text,
+  input_tokens bigint,
+  output_tokens bigint,
+  input_cached_tokens bigint,
+  num_model_requests integer,
+  num_requests integer,
+  amount numeric(24, 10),
   currency text,
-  value numeric(24, 10) NOT NULL,
-  completeness text NOT NULL, -- complete | partial
-  schema_version text NOT NULL DEFAULT '1',
-  UNIQUE (
-    source,
+  completeness text NOT NULL CHECK (completeness IN ('complete','partial')),
+  schema_version text NOT NULL DEFAULT '2'
+);
+
+-- Idempotent uniqueness: NULLS NOT DISTINCT (PG 15+) so nullable dims collide correctly.
+CREATE UNIQUE INDEX IF NOT EXISTS provider_admin_usage_snapshots_canon_uidx
+  ON provider_admin_usage_snapshots (
+    source_endpoint,
+    surface_object,
     organization_scope,
     interval_start_utc,
     interval_end_utc,
     granularity,
-    unit,
-    currency,
-    dimensions_json
-  )
-);
+    project_id,
+    api_key_id,
+    user_id,
+    model,
+    line_item,
+    api_source
+  ) NULLS NOT DISTINCT;

 CREATE TABLE IF NOT EXISTS provider_admin_collection_runs (
   collection_id text PRIMARY KEY,
@@ -53,15 +68,23 @@ CREATE TABLE IF NOT EXISTS provider_admin_collection_runs (
   finished_at timestamptz,
   status text NOT NULL,
   pages_fetched integer NOT NULL DEFAULT 0,
+  path text NOT NULL,
   limits_json jsonb NOT NULL DEFAULT '[]'::jsonb,
   last_error text
 );
+
+-- Access: revoke from app role used by Nora; grant only to collector role (DEV).
 ```

-## Transition
+## Rollback privilégié
+
+1. Arrêt du collecteur isolé.
+2. Désactivation de la lecture snapshots dans FinOps.
+3. **Pas de DROP TABLE** automatique sur RECETTE/STABLE.
+
+## Justification vs v1

-1. GO migration DEV only.
-2. Apply additive migration.
-3. Brancher repository PG derrière le collecteur.
-4. Ne pas backfill inventé.
-5. Rollback = stop collect + drop tables si jamais écrites en RECETTE (RECETTE non touchée ici).
+- surface_endpoint + surface_object dans la clé ;
+- dimensions nullables avec `NULLS NOT DISTINCT` ;
+- métriques absentes = NULL (jamais 0 inventé) ;
+- costs amount en `numeric`, pas float.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 2f5739bb..48dd2684 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,18 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-26-OPENAI-STUDIO-CONVERGENCE-ML1-CORRECTIVE
+
+- **date_utc**: 2026-11-26T20:30Z (approx)
+- **lane**: DEV — Macro-lot 1 corrective intégrée
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_initial**: `5794584a4dfae97dd78c5493946d9251b7847d65`
+- **focus**: parsing Admin buckets→results ; transport isolé ; décimal FinOps ; tracing ALS + oracle réseau ; continuité raccordée OFF ; dossier A3
+- **gates**: G-ADMIN-* · G-PROVIDER-SNAPSHOT-MIGRATION · G-FINOPS-UX · G-WEB-PUBLIC/A3 · G-TRACING-LOCAL · G-NATIVE-CONTINUITY
+- **web_live**: OFF · RECETTE intacte · push projet NON
+- **release**: NO RELEASE · NOT ADOPTED
+- **statut**: **MACRO-LOT 1 — TECHNICAL READINESS ESTABLISHED — GOVERNED QUALIFICATION GATES REMAIN**
+
 ## delivery_id: DELIV-2026-11-26-OPENAI-STUDIO-CONVERGENCE-ML1

 - **date_utc**: 2026-11-26T20:00Z (approx)
@@ -16,7 +28,7 @@ Append-only logical journal of Cursor product deliveries.
 - **web_live**: OFF · G-WEB-MIXED fermé · RECETTE intacte
 - **release**: NO RELEASE · NOT ADOPTED · ML5 OPEN · R5 IN PROGRESS · livraison 2 non engagée
 - **as_built**: `construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md`
-- **statut**: **MACRO-LOT 1 — READY FOR INDEPENDENT REVIEW** (avec blockers gouvernés Admin/migration/WEB/UX)
+- **statut**: **MACRO-LOT 1 — READY FOR INDEPENDENT REVIEW** (avec blockers gouvernés Admin/migration/WEB/UX) — *supersédé par corrective*

 ## delivery_id: DELIV-2026-11-26-ML5-CONVERGENCE-QUALIFICATION

diff --git a/projects/sfia-studio-next/web/scripts/finops-admin-collect.mts b/projects/sfia-studio-next/web/scripts/finops-admin-collect.mts
new file mode 100644
index 00000000..d4dc3f81
--- /dev/null
+++ b/projects/sfia-studio-next/web/scripts/finops-admin-collect.mts
@@ -0,0 +1,109 @@
+/**
+ * Isolated Admin Usage/Costs collector entrypoint.
+ *
+ * Run ONLY as a separate process:
+ *   SFIA_ADMIN_COLLECTOR_PROCESS=1 STUDIO_LANE=DEV \
+ *   OPENAI_ADMIN_KEY=… SFIA_ADMIN_USAGE_LIVE=1 \
+ *   npx tsx scripts/finops-admin-collect.mts --path /organization/costs --start-time <unix>
+ *
+ * Without SFIA_ADMIN_USAGE_LIVE=1 the script refuses LIVE HTTP (transport still constructible for dry-run with --dry-substituted).
+ * Never import this from Next.js / Nora routes.
+ */
+
+import {
+  resolveIsolatedAdminCollectorConfig,
+  runAdminCollection,
+} from "../src/domains/finops/provider-admin-usage-collector";
+import {
+  createAdminHttpTransport,
+  isAdminLiveAuthorized,
+  loadIsolatedAdminApiKey,
+} from "../src/domains/finops/provider-admin-http-transport";
+
+function arg(name: string): string | null {
+  const i = process.argv.indexOf(name);
+  if (i < 0 || i + 1 >= process.argv.length) return null;
+  return process.argv[i + 1];
+}
+
+async function main(): Promise<void> {
+  const { key, limits } = loadIsolatedAdminApiKey(process.env);
+  if (!key) {
+    console.log(
+      JSON.stringify({
+        status: "BLOCKED_NO_SECRET",
+        limits,
+        note: "Provision OPENAI_ADMIN_KEY in isolated env only — never chat/Git",
+      }),
+    );
+    process.exitCode = 2;
+    return;
+  }
+
+  const path = arg("--path") ?? "/organization/costs";
+  const start = arg("--start-time");
+  if (!start) {
+    console.log(JSON.stringify({ status: "ERROR", lastError: "MISSING_START_TIME" }));
+    process.exitCode = 2;
+    return;
+  }
+
+  const live = isAdminLiveAuthorized(process.env);
+  const dry = process.argv.includes("--dry-substituted");
+  if (!live && !dry) {
+    console.log(
+      JSON.stringify({
+        status: "BLOCKED_NO_LIVE_GO",
+        limits: ["SFIA_ADMIN_USAGE_LIVE_REQUIRED", "OR_PASS_DRY_SUBSTITUTED"],
+      }),
+    );
+    process.exitCode = 2;
+    return;
+  }
+
+  const transport = dry
+    ? async () => ({
+        status: 200,
+        json: { object: "page", data: [], has_more: false, next_page: null },
+      })
+    : createAdminHttpTransport();
+
+  const result = await runAdminCollection({
+    config: resolveIsolatedAdminCollectorConfig({
+      adminApiKey: key,
+      liveAuthorized: live || dry,
+      transport,
+    }),
+    path,
+    query: {
+      start_time: start,
+      bucket_width: arg("--bucket-width") ?? "1d",
+      ...(arg("--project-id") ? { project_ids: arg("--project-id")! } : {}),
+    },
+  });
+
+  // Never print the key. Snapshots may include project/api_key ids (non-secret).
+  console.log(
+    JSON.stringify({
+      status: result.status,
+      collectionId: result.collectionId,
+      pagesFetched: result.pagesFetched,
+      snapshotCount: result.snapshots.length,
+      limits: result.limits,
+      lastError: result.lastError,
+    }),
+  );
+  if (result.status !== "READY" && result.status !== "PARTIAL") {
+    process.exitCode = 3;
+  }
+}
+
+main().catch((e) => {
+  console.log(
+    JSON.stringify({
+      status: "ERROR",
+      lastError: e instanceof Error ? e.message : String(e),
+    }),
+  );
+  process.exitCode = 1;
+});
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 784f825a..88a2c177 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -894,6 +894,25 @@ async function runLiveWithTools(
   policy: CognitivePolicy,
 ): Promise<NoraGenerateResult> {
   await configureSdkTracingSafe();
+  const { runWithAgentsTracingCorrelation } = await import(
+    "@/lib/agents-sdk-tracing"
+  );
+  return runWithAgentsTracingCorrelation(
+    {
+      operationId: input.toolScope?.operationId ?? null,
+      generationId,
+      attemptId: input.toolScope?.attemptId ?? null,
+      workId: input.cognitiveWorkId ?? null,
+    },
+    () => runLiveWithToolsInner(input, generationId, policy),
+  );
+}
+
+async function runLiveWithToolsInner(
+  input: NoraGenerateInput,
+  generationId: string,
+  policy: CognitivePolicy,
+): Promise<NoraGenerateResult> {
   const { Agent, run } = await import("@openai/agents");

   const attempts: NoraAttemptRecord[] = [];
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
index 34188c5c..bf6c3ff3 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
@@ -24,6 +24,13 @@ import {
   extractResponseNativeUsage,
   reconcileHostedSearchUsage,
 } from "./provider-response-usage";
+import {
+  applyContinuityToResponsesBody,
+  planProviderContinuity,
+  resolveProviderContinuityMode,
+  type ProviderChainRef,
+  type StudioContinuitySnapshot,
+} from "./provider-response-continuity";
 import {
   admitModelEffort,
   type CognitiveEffort,
@@ -183,6 +190,14 @@ type FrontierStore = {
     hostedStatus: "MEASURED" | "UNKNOWN" | "RESERVED_ONLY";
     limits: string[];
   }>;
+  /**
+   * Optional native continuity binding for this ALS turn (D3-owned snapshot).
+   * Mode remains off unless SFIA_PROVIDER_CONTINUITY_MODE=native.
+   */
+  continuity: {
+    studio: StudioContinuitySnapshot | null;
+    chain: ProviderChainRef | null;
+  };
 };

 const als = new AsyncLocalStorage<FrontierStore>();
@@ -283,6 +298,20 @@ function emptyStore(): FrontierStore {
     captureHttpMeta: false,
     nativeInputCount: null,
     responseUsageObserved: [],
+    continuity: { studio: null, chain: null },
+  };
+}
+
+/** Bind D3 continuity snapshot + optional provider chain for this ALS turn. */
+export function bindProviderContinuityContext(input: {
+  studio: StudioContinuitySnapshot | null;
+  chain: ProviderChainRef | null;
+}): void {
+  const s = als.getStore();
+  if (!s) return;
+  s.continuity = {
+    studio: input.studio,
+    chain: input.chain,
   };
 }

@@ -1804,8 +1833,28 @@ export function createFrontierAwareFetch(
         sfia_native_input_tokens?: unknown;
         sfia_input_count_fingerprint?: unknown;
       };
-      bodyJson = wireBody;
-      body = JSON.stringify(wireBody);
+      // Continuity: attach previous_response_id only when mode=native and plan allows.
+      // Default OFF — D3 remains SoT; prior tokens remain billable when attached.
+      const continuityMode = resolveProviderContinuityMode();
+      const plan = planProviderContinuity({
+        mode: continuityMode,
+        studio: alsStore.continuity.studio ?? {
+          workId: "",
+          acquisFingerprint: null,
+          sourceVersions: [],
+          checkpointId: null,
+          budgets: {
+            tokensConsumed: 0,
+            tokensBudget: null,
+            restitutionsRemaining: null,
+          },
+          rightsOk: false,
+        },
+        chain: alsStore.continuity.chain,
+        lane: (process.env.STUDIO_LANE ?? "UNKNOWN").trim().toUpperCase(),
+      });
+      bodyJson = applyContinuityToResponsesBody(wireBody, plan);
+      body = JSON.stringify(bodyJson);
     }

     const hostedSearchDelta = inferHostedSearchDeltaFromBody(
@@ -1853,57 +1902,81 @@ export function createFrontierAwareFetch(
       let hostedLimits: string[] = [];
       let responseId: string | null = null;
       if (res.ok && isResponsesCreateUrl(url)) {
-        try {
-          const parsed = (await res.clone().json()) as unknown;
-          const native = extractResponseNativeUsage(parsed);
-          responseId = native.responseId;
-          const reconciled = reconcileHostedSearchUsage({
-            reservedMaxToolCalls: hostedSearchDelta,
-            observed: native.hostedWebSearch,
-            alreadyCommitted: campaign?.hostedSearchesCommitted ?? 0,
-            maxHostedSearches: campaign?.maxHostedSearches ?? null,
-          });
-          measuredHostedDelta = reconciled.commitDelta;
-          hostedStatus = reconciled.status;
-          hostedLimits = reconciled.limits;
-          if (campaign) {
-            campaign.hostedSearchMeasureStatus =
-              reconciled.status === "MEASURED"
-                ? "MEASURED"
-                : reconciled.status === "UNKNOWN"
-                  ? "UNKNOWN"
-                  : campaign.hostedSearchMeasureStatus;
-            campaign.hostedSearchMeasureLimits = [
-              ...new Set([
-                ...campaign.hostedSearchMeasureLimits,
-                ...reconciled.limits,
-              ]),
-            ];
-            if (
-              reconciled.status === "MEASURED" &&
-              reconciled.measured != null
-            ) {
-              campaign.hostedSearchesMeasured =
-                (campaign.hostedSearchesMeasured ?? 0) + reconciled.measured;
-            }
-            if (reconciled.suspend) {
-              campaign.suspended = true;
-              campaign.suspendReason =
-                reconciled.suspendReason ?? "CAMPAIGN_HOSTED_SEARCHES_EXHAUSTED";
-            }
-          }
-        } catch {
-          hostedLimits = ["RESPONSE_BODY_PARSE_FAILED"];
+        const ct = (res.headers.get("content-type") ?? "").toLowerCase();
+        const isEventStream =
+          ct.includes("text/event-stream") || ct.includes("application/x-ndjson");
+        if (isEventStream) {
+          // Do not consume an unbounded SSE body for observability.
+          hostedLimits = ["STREAM_USAGE_UNKNOWN"];
           hostedStatus = "UNKNOWN";
           if (campaign) {
             campaign.hostedSearchMeasureStatus = "UNKNOWN";
             campaign.hostedSearchMeasureLimits = [
               ...new Set([
                 ...campaign.hostedSearchMeasureLimits,
-                "RESPONSE_BODY_PARSE_FAILED",
+                "STREAM_USAGE_UNKNOWN",
               ]),
             ];
           }
+        } else {
+          try {
+            const parsed = (await res.clone().json()) as unknown;
+            const native = extractResponseNativeUsage(parsed);
+            responseId = native.responseId;
+            const reconciled = reconcileHostedSearchUsage({
+              reservedMaxToolCalls: hostedSearchDelta,
+              observed: native.hostedWebSearch,
+              alreadyCommitted: campaign?.hostedSearchesCommitted ?? 0,
+              maxHostedSearches: campaign?.maxHostedSearches ?? null,
+            });
+            measuredHostedDelta = reconciled.commitDelta;
+            hostedStatus = reconciled.status;
+            hostedLimits = reconciled.limits;
+            if (campaign) {
+              // Never erase UNKNOWN/PARTIAL aggregate solely because a later
+              // attempt measured — promote to MEASURED only from NONE/UNKNOWN
+              // when this attempt is MEASURED; keep UNKNOWN if already UNKNOWN
+              // and this attempt is UNKNOWN.
+              if (reconciled.status === "MEASURED") {
+                campaign.hostedSearchMeasureStatus = "MEASURED";
+              } else if (campaign.hostedSearchMeasureStatus === "NONE") {
+                campaign.hostedSearchMeasureStatus = "UNKNOWN";
+              }
+              campaign.hostedSearchMeasureLimits = [
+                ...new Set([
+                  ...campaign.hostedSearchMeasureLimits,
+                  ...reconciled.limits,
+                ]),
+              ];
+              if (
+                reconciled.status === "MEASURED" &&
+                reconciled.measured != null
+              ) {
+                campaign.hostedSearchesMeasured =
+                  (campaign.hostedSearchesMeasured ?? 0) + reconciled.measured;
+              }
+              if (reconciled.suspend) {
+                campaign.suspended = true;
+                campaign.suspendReason =
+                  reconciled.suspendReason ??
+                  "CAMPAIGN_HOSTED_SEARCHES_EXHAUSTED";
+              }
+            }
+          } catch {
+            hostedLimits = ["RESPONSE_BODY_PARSE_FAILED"];
+            hostedStatus = "UNKNOWN";
+            if (campaign) {
+              if (campaign.hostedSearchMeasureStatus === "NONE") {
+                campaign.hostedSearchMeasureStatus = "UNKNOWN";
+              }
+              campaign.hostedSearchMeasureLimits = [
+                ...new Set([
+                  ...campaign.hostedSearchMeasureLimits,
+                  "RESPONSE_BODY_PARSE_FAILED",
+                ]),
+              ];
+            }
+          }
         }
       }
       // Envelope pressure: max_tool_calls bound is consumed even when billable
diff --git a/projects/sfia-studio-next/web/src/domains/finops/decimal-money.ts b/projects/sfia-studio-next/web/src/domains/finops/decimal-money.ts
new file mode 100644
index 00000000..5fadae55
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/domains/finops/decimal-money.ts
@@ -0,0 +1,58 @@
+/**
+ * Decimal money helpers — string/scaled-integer math for FinOps reconciliation.
+ * Never use IEEE float as the financial reference path.
+ */
+
+const SCALE = 10;
+const FACTOR = BigInt("10000000000"); // 10^10
+
+function parseDecimalToScaled(input: string): bigint | null {
+  const s = input.trim();
+  if (!s || s === "UNKNOWN" || s === "ABSENT") return null;
+  const m = /^([+-])?(\d+)(?:\.(\d+))?$/.exec(s);
+  if (!m) return null;
+  const sign = m[1] === "-" ? BigInt(-1) : BigInt(1);
+  const whole = BigInt(m[2]);
+  const fracRaw = (m[3] ?? "").slice(0, SCALE);
+  const fracPadded = fracRaw.padEnd(SCALE, "0");
+  const frac = BigInt(fracPadded || "0");
+  return sign * (whole * FACTOR + frac);
+}
+
+function scaledToDecimalString(v: bigint): string {
+  const sign = v < BigInt(0) ? "-" : "";
+  const abs = v < BigInt(0) ? -v : v;
+  const whole = abs / FACTOR;
+  const frac = (abs % FACTOR).toString().padStart(SCALE, "0");
+  return `${sign}${whole.toString()}.${frac}`;
+}
+
+export function decimalAdd(a: string, b: string): string | null {
+  const aa = parseDecimalToScaled(a);
+  const bb = parseDecimalToScaled(b);
+  if (aa == null || bb == null) return null;
+  return scaledToDecimalString(aa + bb);
+}
+
+export function decimalSub(a: string, b: string): string | null {
+  const aa = parseDecimalToScaled(a);
+  const bb = parseDecimalToScaled(b);
+  if (aa == null || bb == null) return null;
+  return scaledToDecimalString(aa - bb);
+}
+
+export function decimalFromNumberLike(v: unknown): string | null {
+  if (typeof v === "number") {
+    if (!Number.isFinite(v)) return null;
+    return decimalFromNumberLike(String(v));
+  }
+  if (typeof v === "string") {
+    const scaled = parseDecimalToScaled(v);
+    return scaled != null ? scaledToDecimalString(scaled) : null;
+  }
+  return null;
+}
+
+export function isDecimalPresent(v: string | null | undefined): v is string {
+  return typeof v === "string" && parseDecimalToScaled(v) != null;
+}
diff --git a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts
new file mode 100644
index 00000000..7dc13ad7
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts
@@ -0,0 +1,127 @@
+/**
+ * Operational Admin HTTP transport — GET allowlist only.
+ *
+ * MUST only be constructed from an isolated collector process that already
+ * holds OPENAI_ADMIN_KEY. Never import this from Nora conversation paths.
+ *
+ * LIVE calls additionally require SFIA_ADMIN_USAGE_LIVE=1 + STUDIO_LANE=DEV.
+ */
+
+import {
+  ADMIN_USAGE_ALLOWED_PATHS,
+  type AdminHttpTransport,
+} from "./provider-admin-usage-collector";
+
+const ALLOWED = new Set<string>(ADMIN_USAGE_ALLOWED_PATHS);
+const DEFAULT_BASE = "https://api.openai.com/v1";
+
+export type AdminTransportOptions = {
+  baseUrl?: string;
+  timeoutMs?: number;
+  /** Injected fetch for tests — still subject to path allowlist. */
+  fetchImpl?: typeof fetch;
+  /** Max retries on 429/5xx (bounded). */
+  maxRetries?: number;
+};
+
+function sanitizeErrorMessage(status: number, bodyText: string): string {
+  // Never echo Authorization or key material.
+  const clipped = bodyText.replace(/sk-[A-Za-z0-9_-]+/g, "[REDACTED]").slice(0, 200);
+  return `ADMIN_HTTP_${status}:${clipped}`;
+}
+
+export function createAdminHttpTransport(
+  opts: AdminTransportOptions = {},
+): AdminHttpTransport {
+  const base = (opts.baseUrl ?? DEFAULT_BASE).replace(/\/$/, "");
+  const timeoutMs = Math.max(1_000, Math.min(60_000, opts.timeoutMs ?? 15_000));
+  const maxRetries = Math.max(0, Math.min(3, opts.maxRetries ?? 2));
+  const fetchImpl = opts.fetchImpl ?? fetch;
+
+  return async (input) => {
+    if (input.method !== "GET") {
+      throw new Error("ADMIN_METHOD_NOT_ALLOWED");
+    }
+    if (!ALLOWED.has(input.path)) {
+      throw new Error(`ADMIN_PATH_NOT_ALLOWLISTED:${input.path}`);
+    }
+    // Strip any Authorization from caller logs by not re-exporting headers.
+    const auth = input.headers.Authorization;
+    if (!auth || !auth.startsWith("Bearer ")) {
+      throw new Error("ADMIN_AUTH_HEADER_REQUIRED");
+    }
+
+    const url = new URL(`${base}${input.path}`);
+    for (const [k, v] of Object.entries(input.query)) {
+      if (v != null && v !== "") url.searchParams.set(k, v);
+    }
+
+    let attempt = 0;
+    // eslint-disable-next-line no-constant-condition
+    while (true) {
+      const ac = new AbortController();
+      const timer = setTimeout(() => ac.abort(), timeoutMs);
+      try {
+        const res = await fetchImpl(url.toString(), {
+          method: "GET",
+          headers: {
+            Authorization: auth,
+            "Content-Type": "application/json",
+            Accept: "application/json",
+          },
+          signal: ac.signal,
+        });
+        const text = await res.text();
+        let json: unknown = null;
+        try {
+          json = text ? JSON.parse(text) : null;
+        } catch {
+          json = { parse_error: true, preview: text.slice(0, 80) };
+        }
+        const retryable = res.status === 429 || (res.status >= 500 && res.status <= 599);
+        if (retryable && attempt < maxRetries) {
+          attempt += 1;
+          const ra = res.headers.get("retry-after");
+          const waitMs = ra && /^\d+$/.test(ra) ? Math.min(10_000, Number(ra) * 1000) : 250 * attempt;
+          await new Promise((r) => setTimeout(r, waitMs));
+          continue;
+        }
+        if (!res.ok && res.status !== 401 && res.status !== 403 && res.status !== 429) {
+          // Surface sanitized message for non-standard failures; caller maps status.
+          void sanitizeErrorMessage(res.status, text);
+        }
+        const headers: Record<string, string> = {};
+        const retryAfter = res.headers.get("retry-after");
+        if (retryAfter) headers["retry-after"] = retryAfter;
+        return { status: res.status, json, headers };
+      } finally {
+        clearTimeout(timer);
+      }
+    }
+  };
+}
+
+/**
+ * Load Admin key only when explicitly running as isolated collector.
+ * Returns null for product/Next contexts.
+ */
+export function loadIsolatedAdminApiKey(env: NodeJS.ProcessEnv = process.env): {
+  key: string | null;
+  limits: string[];
+} {
+  const isolated = (env.SFIA_ADMIN_COLLECTOR_PROCESS ?? "").trim() === "1";
+  if (!isolated) {
+    return { key: null, limits: ["NOT_ISOLATED_COLLECTOR_PROCESS"] };
+  }
+  const key = (env.OPENAI_ADMIN_KEY ?? "").trim() || null;
+  if (!key) return { key: null, limits: ["OPENAI_ADMIN_KEY_ABSENT"] };
+  return { key, limits: [] };
+}
+
+export function isAdminLiveAuthorized(env: NodeJS.ProcessEnv = process.env): boolean {
+  return (
+    (env.SFIA_ADMIN_USAGE_LIVE ?? "").trim() === "1" &&
+    (env.STUDIO_LANE ?? "").trim().toUpperCase() === "DEV" &&
+    (env.SFIA_ADMIN_COLLECTOR_PROCESS ?? "").trim() === "1"
+  );
+}
diff --git a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts
index 1770e1cd..74f2c16f 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts
@@ -1,18 +1,25 @@
 /**
- * Macro-lot 1 — independent OpenAI Admin Usage & Costs collector.
+ * Provider Admin Usage & Costs collector — isolated from Nora.
  *
- * Isolated from Nora runtime:
- * - Separate secret env: OPENAI_ADMIN_KEY (never project key / never browser)
- * - Read-only GET allowlist only
- * - Failure never blocks cognitive operations
+ * Contract (openai@7.50 / Admin Usage API):
+ *   page.data[] = buckets { object:"bucket", start_time, end_time, results[] }
+ *   each result has object:"organization.usage.*.result" | "organization.costs.result"
  *
- * Without secret or without GO for LIVE Admin calls:
- *   status = BLOCKED / NOT_LIVE_PROVEN
+ * Paths (SDK):
+ *   GET /organization/usage/completions|embeddings|…|web_search_calls|decisions
+ *   GET /organization/costs
+ *   NO /organization/usage/responses
  *
- * Persistence of provider snapshots requires a migration GO (see as-built).
- * This module keeps an in-process idempotent view for tests + readiness.
+ * Secret: never read by Next/Nora product paths. Only the isolated collector
+ * process may load OPENAI_ADMIN_KEY (see provider-admin-http-transport.ts).
  */

+import {
+  decimalAdd,
+  decimalFromNumberLike,
+  decimalSub,
+} from "./decimal-money";
+
 export type AdminCollectorStatus =
   | "READY"
   | "BLOCKED_NO_SECRET"
@@ -21,17 +28,38 @@ export type AdminCollectorStatus =
   | "ERROR"
   | "IDLE";

-export type AdminUsageBucket = {
-  /** Stable reconciliation key components */
-  source: "openai.organization.usage" | "openai.organization.costs";
+export type AdminMetricPresence = "MEASURED" | "ABSENT" | "INVALID";
+
+export type AdminMetric = {
+  presence: AdminMetricPresence;
+  /** Decimal/integer string when MEASURED; never invent "0" for ABSENT. */
+  value: string | null;
+};
+
+export type AdminUsageSnapshot = {
+  sourceEndpoint: string;
+  surfaceObject: string;
   organizationScope: string;
   intervalStartUtc: string;
   intervalEndUtc: string;
-  granularity: "hour" | "day";
-  dimensions: Record<string, string | null>;
-  unit: string;
-  currency: string | null;
-  value: string; // decimal string — never float money math at boundaries
+  granularity: "1m" | "1h" | "1d";
+  dimensions: {
+    project_id: string | null;
+    api_key_id: string | null;
+    user_id: string | null;
+    model: string | null;
+    line_item: string | null;
+    api_source: string | null;
+  };
+  metrics: {
+    input_tokens: AdminMetric;
+    output_tokens: AdminMetric;
+    input_cached_tokens: AdminMetric;
+    num_model_requests: AdminMetric;
+    num_requests: AdminMetric;
+    amount: AdminMetric;
+    currency: AdminMetric;
+  };
   completeness: "complete" | "partial";
   collectedAtUtc: string;
   collectionId: string;
@@ -41,7 +69,7 @@ export type AdminCollectionResult = {
   status: AdminCollectorStatus;
   collectionId: string;
   collectedAtUtc: string;
-  buckets: AdminUsageBucket[];
+  snapshots: AdminUsageSnapshot[];
   pagesFetched: number;
   limits: string[];
   lastError: string | null;
@@ -59,121 +87,319 @@ export type AdminHttpTransport = (input: {
 }>;

 export type AdminCollectorConfig = {
-  /** Never log this value. */
+  /** Present only in isolated collector process — never in Nora/Next. */
   adminApiKey: string | null;
   organizationScope: string;
-  /** Explicit LIVE gate — false under initial GO. */
   liveAdminCallsAuthorized: boolean;
   transport?: AdminHttpTransport;
 };

-const ALLOWED_PATHS = new Set([
-  "/v1/organization/usage/completions",
-  "/v1/organization/usage/responses",
-  "/v1/organization/usage/embeddings",
-  "/v1/organization/usage/audio_speeches",
-  "/v1/organization/usage/audio_transcriptions",
-  "/v1/organization/usage/vector_stores",
-  "/v1/organization/usage/moderations",
-  "/v1/organization/usage/images",
-  "/v1/organization/costs",
-]);
-
-/** In-process snapshot store — NOT a second ledger. Product PG requires migration GO. */
-const snapshotByKey = new Map<string, AdminUsageBucket>();
-let lastSuccessfulCollection: {
+/** Paths confirmed in openai@7.50 SDK admin.organization.usage.* */
+export const ADMIN_USAGE_ALLOWED_PATHS = Object.freeze([
+  "/organization/usage/completions",
+  "/organization/usage/embeddings",
+  "/organization/usage/moderations",
+  "/organization/usage/images",
+  "/organization/usage/audio_speeches",
+  "/organization/usage/audio_transcriptions",
+  "/organization/usage/vector_stores",
+  "/organization/usage/code_interpreter_sessions",
+  "/organization/usage/file_search_calls",
+  "/organization/usage/web_search_calls",
+  "/organization/usage/decisions",
+  "/organization/costs",
+] as const);
+
+const ALLOWED = new Set<string>(ADMIN_USAGE_ALLOWED_PATHS);
+
+const snapshotByKey = new Map<string, AdminUsageSnapshot>();
+let lastAttempt: {
   atUtc: string;
   collectionId: string;
   status: AdminCollectorStatus;
+  error: string | null;
+} | null = null;
+let lastCompleteSuccess: {
+  atUtc: string;
+  collectionId: string;
 } | null = null;

 export function resetAdminCollectorStateForTests(): void {
   snapshotByKey.clear();
-  lastSuccessfulCollection = null;
+  lastAttempt = null;
+  lastCompleteSuccess = null;
 }

 export function getAdminCollectorFreshness(): {
+  lastAttemptAtUtc: string | null;
   lastSuccessAtUtc: string | null;
   lastCollectionId: string | null;
   status: AdminCollectorStatus;
-  bucketCount: number;
+  snapshotCount: number;
+  /** Product-safe: never exposes whether a secret exists in process env. */
+  secretReadableByProduct: false;
 } {
   return {
-    lastSuccessAtUtc: lastSuccessfulCollection?.atUtc ?? null,
-    lastCollectionId: lastSuccessfulCollection?.collectionId ?? null,
-    status: lastSuccessfulCollection?.status ?? "IDLE",
-    bucketCount: snapshotByKey.size,
+    lastAttemptAtUtc: lastAttempt?.atUtc ?? null,
+    lastSuccessAtUtc: lastCompleteSuccess?.atUtc ?? null,
+    lastCollectionId:
+      lastCompleteSuccess?.collectionId ?? lastAttempt?.collectionId ?? null,
+    status: lastAttempt?.status ?? "IDLE",
+    snapshotCount: snapshotByKey.size,
+    secretReadableByProduct: false,
   };
 }

-export function listAdminCollectorBuckets(): AdminUsageBucket[] {
+export function listAdminCollectorSnapshots(): AdminUsageSnapshot[] {
   return [...snapshotByKey.values()];
 }

-export function resolveAdminCollectorConfig(
-  env: NodeJS.ProcessEnv = process.env,
-): AdminCollectorConfig {
-  const key = (env.OPENAI_ADMIN_KEY ?? "").trim() || null;
-  const live =
-    (env.SFIA_ADMIN_USAGE_LIVE ?? "").trim() === "1" &&
-    (env.STUDIO_LANE ?? "").trim().toUpperCase() === "DEV";
+/** @deprecated alias — prefer listAdminCollectorSnapshots */
+export function listAdminCollectorBuckets(): AdminUsageSnapshot[] {
+  return listAdminCollectorSnapshots();
+}
+
+/**
+ * Product/Next must call this — never loads OPENAI_ADMIN_KEY.
+ * Secret presence is unknown to the product runtime.
+ */
+export function resolveProductAdminCollectorView(): {
+  organizationScope: string;
+  freshness: ReturnType<typeof getAdminCollectorFreshness>;
+} {
+  return {
+    organizationScope:
+      (process.env.SFIA_OPENAI_ORG_SCOPE ?? "org:unspecified").trim() ||
+      "org:unspecified",
+    freshness: getAdminCollectorFreshness(),
+  };
+}
+
+/**
+ * Isolated collector process only. Must not be imported by Nora routes.
+ */
+export function resolveIsolatedAdminCollectorConfig(input: {
+  adminApiKey: string | null;
+  liveAuthorized: boolean;
+  organizationScope?: string;
+  transport?: AdminHttpTransport;
+}): AdminCollectorConfig {
   return {
-    adminApiKey: key,
+    adminApiKey: input.adminApiKey,
     organizationScope:
-      (env.SFIA_OPENAI_ORG_SCOPE ?? "org:unspecified").trim() ||
+      input.organizationScope?.trim() ||
+      (process.env.SFIA_OPENAI_ORG_SCOPE ?? "org:unspecified").trim() ||
       "org:unspecified",
-    liveAdminCallsAuthorized: live,
+    liveAdminCallsAuthorized: input.liveAuthorized,
+    transport: input.transport,
+  };
+}
+
+function metricFromUnknown(v: unknown): AdminMetric {
+  if (v === undefined || v === null) {
+    return { presence: "ABSENT", value: null };
+  }
+  if (typeof v === "number") {
+    if (!Number.isFinite(v)) return { presence: "INVALID", value: null };
+    return { presence: "MEASURED", value: String(Math.trunc(v)) };
+  }
+  if (typeof v === "string") {
+    const d = decimalFromNumberLike(v);
+    if (d == null) return { presence: "INVALID", value: null };
+    return { presence: "MEASURED", value: d };
+  }
+  return { presence: "INVALID", value: null };
+}
+
+function amountMetric(result: Record<string, unknown>): {
+  amount: AdminMetric;
+  currency: AdminMetric;
+} {
+  const amountObj =
+    result.amount && typeof result.amount === "object"
+      ? (result.amount as Record<string, unknown>)
+      : null;
+  if (!amountObj) {
+    return {
+      amount: { presence: "ABSENT", value: null },
+      currency: { presence: "ABSENT", value: null },
+    };
+  }
+  const value = decimalFromNumberLike(amountObj.value);
+  const currency =
+    typeof amountObj.currency === "string" ? amountObj.currency.toLowerCase() : null;
+  return {
+    amount:
+      value != null
+        ? { presence: "MEASURED", value }
+        : amountObj.value === undefined || amountObj.value === null
+          ? { presence: "ABSENT", value: null }
+          : { presence: "INVALID", value: null },
+    currency:
+      currency != null
+        ? { presence: "MEASURED", value: currency }
+        : { presence: "ABSENT", value: null },
   };
 }

-function bucketKey(b: AdminUsageBucket): string {
-  const dims = Object.keys(b.dimensions)
-    .sort()
-    .map((k) => `${k}=${b.dimensions[k] ?? ""}`)
-    .join("&");
+function dim(v: unknown): string | null {
+  if (v === undefined || v === null) return null;
+  if (typeof v === "string") return v;
+  return null;
+}
+
+export function snapshotKey(s: AdminUsageSnapshot): string {
+  const d = s.dimensions;
   return [
-    b.source,
-    b.organizationScope,
-    b.intervalStartUtc,
-    b.intervalEndUtc,
-    b.granularity,
-    b.unit,
-    b.currency ?? "",
-    dims,
+    s.sourceEndpoint,
+    s.surfaceObject,
+    s.organizationScope,
+    s.intervalStartUtc,
+    s.intervalEndUtc,
+    s.granularity,
+    d.project_id ?? "∅",
+    d.api_key_id ?? "∅",
+    d.user_id ?? "∅",
+    d.model ?? "∅",
+    d.line_item ?? "∅",
+    d.api_source ?? "∅",
   ].join("|");
 }

+function granularityFromQuery(q: Record<string, string>): "1m" | "1h" | "1d" {
+  const w = q.bucket_width;
+  if (w === "1m" || w === "1h" || w === "1d") return w;
+  return "1d";
+}
+
+/**
+ * Parse official page shape: data[] buckets with nested results[].
+ */
+export function parseAdminUsagePage(input: {
+  path: string;
+  json: unknown;
+  organizationScope: string;
+  collectionId: string;
+  collectedAtUtc: string;
+  granularity: "1m" | "1h" | "1d";
+}): { snapshots: AdminUsageSnapshot[]; nextPage: string | null; limits: string[] } {
+  const limits: string[] = [];
+  const body = input.json as {
+    object?: string;
+    data?: unknown[];
+    has_more?: boolean;
+    next_page?: string | null;
+  } | null;
+  if (!body || typeof body !== "object") {
+    return { snapshots: [], nextPage: null, limits: ["PAGE_BODY_INVALID"] };
+  }
+  if (body.object != null && body.object !== "page") {
+    limits.push("PAGE_OBJECT_UNEXPECTED");
+  }
+  const data = Array.isArray(body.data) ? body.data : [];
+  const snapshots: AdminUsageSnapshot[] = [];
+
+  for (const bucket of data) {
+    if (!bucket || typeof bucket !== "object") {
+      limits.push("BUCKET_INVALID");
+      continue;
+    }
+    const b = bucket as Record<string, unknown>;
+    if (b.object != null && b.object !== "bucket") {
+      limits.push("BUCKET_OBJECT_UNEXPECTED");
+    }
+    if (typeof b.start_time !== "number" || typeof b.end_time !== "number") {
+      limits.push("BUCKET_INTERVAL_INVALID");
+      continue;
+    }
+    const intervalStartUtc = new Date(b.start_time * 1000).toISOString();
+    const intervalEndUtc = new Date(b.end_time * 1000).toISOString();
+    const results = Array.isArray(b.results) ? b.results : [];
+    if (results.length === 0) {
+      // Empty bucket is valid — no invented zeros.
+      continue;
+    }
+    for (const result of results) {
+      if (!result || typeof result !== "object") {
+        limits.push("RESULT_INVALID");
+        continue;
+      }
+      const r = result as Record<string, unknown>;
+      const surfaceObject =
+        typeof r.object === "string" ? r.object : "unknown.result";
+      const { amount, currency } = amountMetric(r);
+      snapshots.push({
+        sourceEndpoint: input.path,
+        surfaceObject,
+        organizationScope: input.organizationScope,
+        intervalStartUtc,
+        intervalEndUtc,
+        granularity: input.granularity,
+        dimensions: {
+          project_id: dim(r.project_id),
+          api_key_id: dim(r.api_key_id),
+          user_id: dim(r.user_id),
+          model: dim(r.model),
+          line_item: dim(r.line_item),
+          api_source: dim(r.api_source),
+        },
+        metrics: {
+          input_tokens: metricFromUnknown(r.input_tokens),
+          output_tokens: metricFromUnknown(r.output_tokens),
+          input_cached_tokens: metricFromUnknown(r.input_cached_tokens),
+          num_model_requests: metricFromUnknown(r.num_model_requests),
+          num_requests: metricFromUnknown(r.num_requests),
+          amount,
+          currency,
+        },
+        completeness: "complete",
+        collectedAtUtc: input.collectedAtUtc,
+        collectionId: input.collectionId,
+      });
+    }
+  }
+
+  const nextPage =
+    body.has_more && typeof body.next_page === "string" ? body.next_page : null;
+  return { snapshots, nextPage, limits };
+}
+
+export function upsertAdminSnapshots(
+  snapshots: AdminUsageSnapshot[],
+): void {
+  for (const s of snapshots) {
+    const key = snapshotKey(s);
+    const prev = snapshotByKey.get(key);
+    if (prev?.completeness === "complete" && s.completeness === "partial") {
+      continue;
+    }
+    snapshotByKey.set(key, s);
+  }
+}
+
 function assertAllowedPath(path: string): void {
-  if (!ALLOWED_PATHS.has(path)) {
+  if (!ALLOWED.has(path)) {
     throw new Error(`ADMIN_PATH_NOT_ALLOWLISTED:${path}`);
   }
 }

-/**
- * Substituted-transport page reader — representative of Usage/Costs pagination.
- * Real HTTP transport is only used when secret + LIVE GO present.
- */
 export async function collectAdminUsagePage(input: {
   config: AdminCollectorConfig;
   path: string;
   query: Record<string, string>;
   collectionId: string;
 }): Promise<{
-  buckets: AdminUsageBucket[];
+  snapshots: AdminUsageSnapshot[];
   nextPage: string | null;
-  partial: boolean;
+  limits: string[];
 }> {
   assertAllowedPath(input.path);
-  if (!input.config.adminApiKey) {
-    throw new Error("BLOCKED_NO_SECRET");
-  }
+  if (!input.config.adminApiKey) throw new Error("BLOCKED_NO_SECRET");
   if (!input.config.liveAdminCallsAuthorized && !input.config.transport) {
     throw new Error("BLOCKED_NO_LIVE_GO");
   }
   const transport = input.config.transport;
-  if (!transport) {
-    throw new Error("BLOCKED_NO_TRANSPORT");
-  }
+  if (!transport) throw new Error("BLOCKED_NO_TRANSPORT");

   const res = await transport({
     method: "GET",
@@ -184,132 +410,22 @@ export async function collectAdminUsagePage(input: {
       "Content-Type": "application/json",
     },
   });
-
-  if (res.status === 429) {
-    throw new Error("RATE_LIMITED");
-  }
+  if (res.status === 429) throw new Error("RATE_LIMITED");
   if (res.status === 401 || res.status === 403) {
     throw new Error("ADMIN_PERMISSION_DENIED");
   }
   if (res.status < 200 || res.status >= 300) {
     throw new Error(`ADMIN_HTTP_${res.status}`);
   }
-
-  const body = (res.json ?? {}) as {
-    data?: unknown[];
-    has_more?: boolean;
-    next_page?: string | null;
-  };
-  const rows = Array.isArray(body.data) ? body.data : [];
   const collectedAtUtc = new Date().toISOString();
-  const source =
-    input.path.endsWith("/costs")
-      ? ("openai.organization.costs" as const)
-      : ("openai.organization.usage" as const);
-
-  const buckets: AdminUsageBucket[] = [];
-  for (const row of rows) {
-    if (!row || typeof row !== "object") continue;
-    const r = row as Record<string, unknown>;
-    const start =
-      typeof r.start_time === "number"
-        ? new Date(r.start_time * 1000).toISOString()
-        : typeof r.start_time === "string"
-          ? r.start_time
-          : input.query.start_time
-            ? new Date(Number(input.query.start_time) * 1000).toISOString()
-            : collectedAtUtc;
-    const end =
-      typeof r.end_time === "number"
-        ? new Date(r.end_time * 1000).toISOString()
-        : typeof r.end_time === "string"
-          ? r.end_time
-          : start;
-    const amount =
-      r.amount && typeof r.amount === "object"
-        ? (r.amount as Record<string, unknown>)
-        : null;
-    const valueRaw =
-      amount?.value ?? r.value ?? r.input_tokens ?? r.num_model_requests ?? 0;
-    const value =
-      typeof valueRaw === "number" || typeof valueRaw === "string"
-        ? String(valueRaw)
-        : "0";
-    const currency =
-      typeof amount?.currency === "string"
-        ? amount.currency
-        : source === "openai.organization.costs"
-          ? "usd"
-          : null;
-    buckets.push({
-      source,
-      organizationScope: input.config.organizationScope,
-      intervalStartUtc: start,
-      intervalEndUtc: end,
-      granularity: input.query.bucket_width === "1h" ? "hour" : "day",
-      dimensions: {
-        project_id:
-          typeof r.project_id === "string"
-            ? r.project_id
-            : typeof (r.project_id as { value?: string } | null)?.value ===
-                "string"
-              ? (r.project_id as { value: string }).value
-              : null,
-        api_key_id:
-          typeof r.api_key_id === "string"
-            ? r.api_key_id
-            : typeof (r.api_key_id as { value?: string } | null)?.value ===
-                "string"
-              ? (r.api_key_id as { value: string }).value
-              : null,
-        model: typeof r.model === "string" ? r.model : null,
-      },
-      unit:
-        source === "openai.organization.costs"
-          ? "currency"
-          : typeof r.usage_type === "string"
-            ? r.usage_type
-            : "tokens",
-      currency,
-      value,
-      completeness: "complete",
-      collectedAtUtc,
-      collectionId: input.collectionId,
-    });
-  }
-
-  return {
-    buckets,
-    nextPage:
-      body.has_more && typeof body.next_page === "string"
-        ? body.next_page
-        : null,
-    partial: false,
-  };
-}
-
-/**
- * Idempotent upsert: same bucket key replaces (does not add).
- * Partial collections must not wipe prior complete buckets.
- */
-export function upsertAdminBuckets(
-  buckets: AdminUsageBucket[],
-  opts?: { replaceIncompleteOnly?: boolean },
-): void {
-  for (const b of buckets) {
-    const key = bucketKey(b);
-    const prev = snapshotByKey.get(key);
-    if (
-      prev &&
-      prev.completeness === "complete" &&
-      b.completeness === "partial" &&
-      opts?.replaceIncompleteOnly !== false
-    ) {
-      // Do not overwrite complete with partial.
-      continue;
-    }
-    snapshotByKey.set(key, b);
-  }
+  return parseAdminUsagePage({
+    path: input.path,
+    json: res.json,
+    organizationScope: input.config.organizationScope,
+    collectionId: input.collectionId,
+    collectedAtUtc,
+    granularity: granularityFromQuery(input.query),
+  });
 }

 export async function runAdminCollection(input: {
@@ -323,30 +439,44 @@ export async function runAdminCollection(input: {
   const limits: string[] = [];

   if (!input.config.adminApiKey) {
-    return {
+    const r: AdminCollectionResult = {
       status: "BLOCKED_NO_SECRET",
       collectionId,
       collectedAtUtc,
-      buckets: [],
+      snapshots: [],
       pagesFetched: 0,
       limits: ["OPENAI_ADMIN_KEY_ABSENT"],
       lastError: null,
     };
+    lastAttempt = {
+      atUtc: collectedAtUtc,
+      collectionId,
+      status: r.status,
+      error: null,
+    };
+    return r;
   }
   if (!input.config.liveAdminCallsAuthorized && !input.config.transport) {
-    return {
+    const r: AdminCollectionResult = {
       status: "BLOCKED_NO_LIVE_GO",
       collectionId,
       collectedAtUtc,
-      buckets: [],
+      snapshots: [],
       pagesFetched: 0,
       limits: ["SFIA_ADMIN_USAGE_LIVE_REQUIRED"],
       lastError: null,
     };
+    lastAttempt = {
+      atUtc: collectedAtUtc,
+      collectionId,
+      status: r.status,
+      error: null,
+    };
+    return r;
   }

   const maxPages = Math.max(1, Math.min(50, input.maxPages ?? 10));
-  const all: AdminUsageBucket[] = [];
+  const all: AdminUsageSnapshot[] = [];
   let page: string | null = null;
   let pagesFetched = 0;
   let partial = false;
@@ -363,8 +493,8 @@ export async function runAdminCollection(input: {
         collectionId,
       });
       pagesFetched += 1;
-      all.push(...result.buckets);
-      if (result.partial) partial = true;
+      all.push(...result.snapshots);
+      limits.push(...result.limits);
       page = result.nextPage;
       if (!page) break;
       if (i === maxPages - 1 && page) {
@@ -374,70 +504,62 @@ export async function runAdminCollection(input: {
     }

     if (partial) {
-      for (const b of all) b.completeness = "partial";
-      // Upsert partials without wiping prior completes for same keys.
-      upsertAdminBuckets(all);
-      lastSuccessfulCollection = {
+      for (const s of all) s.completeness = "partial";
+      upsertAdminSnapshots(all);
+      lastAttempt = {
         atUtc: collectedAtUtc,
         collectionId,
         status: "PARTIAL",
+        error: null,
       };
       return {
         status: "PARTIAL",
         collectionId,
         collectedAtUtc,
-        buckets: all,
+        snapshots: all,
         pagesFetched,
-        limits,
+        limits: [...new Set(limits)],
         lastError: null,
       };
     }

-    upsertAdminBuckets(all);
-    lastSuccessfulCollection = {
+    upsertAdminSnapshots(all);
+    lastAttempt = {
       atUtc: collectedAtUtc,
       collectionId,
       status: "READY",
+      error: null,
     };
+    lastCompleteSuccess = { atUtc: collectedAtUtc, collectionId };
     return {
       status: "READY",
       collectionId,
       collectedAtUtc,
-      buckets: all,
+      snapshots: all,
       pagesFetched,
-      limits,
+      limits: [...new Set(limits)],
       lastError: null,
     };
   } catch (e) {
     const msg = e instanceof Error ? e.message : String(e);
-    if (msg === "BLOCKED_NO_SECRET") {
-      return {
-        status: "BLOCKED_NO_SECRET",
-        collectionId,
-        collectedAtUtc,
-        buckets: [],
-        pagesFetched,
-        limits,
-        lastError: msg,
-      };
-    }
-    if (msg === "BLOCKED_NO_LIVE_GO" || msg === "BLOCKED_NO_TRANSPORT") {
-      return {
-        status: "BLOCKED_NO_LIVE_GO",
-        collectionId,
-        collectedAtUtc,
-        buckets: [],
-        pagesFetched,
-        limits,
-        lastError: msg,
-      };
-    }
-    // Error must not erase prior complete snapshots.
+    const status: AdminCollectorStatus =
+      msg === "BLOCKED_NO_SECRET"
+        ? "BLOCKED_NO_SECRET"
+        : msg === "BLOCKED_NO_LIVE_GO" || msg === "BLOCKED_NO_TRANSPORT"
+          ? "BLOCKED_NO_LIVE_GO"
+          : "ERROR";
+    lastAttempt = {
+      atUtc: collectedAtUtc,
+      collectionId,
+      status,
+      error: msg,
+    };
+    // Never wipe prior complete snapshots on error.
     return {
-      status: "ERROR",
+      status,
       collectionId,
       collectedAtUtc,
-      buckets: [],
+      snapshots: [],
       pagesFetched,
       limits,
       lastError: msg,
@@ -445,37 +567,128 @@ export async function runAdminCollection(input: {
   }
 }

-/**
- * Compare Studio estimated USD (decimal string) to provider cost aggregate
- * only when scopes are comparable.
- */
+export type FinOpsScopeEvidence = {
+  organizationMatches: boolean;
+  projectIdsOverlap: boolean;
+  apiKeyIdsOverlap: boolean;
+  periodOverlap: boolean;
+  currencyMatches: boolean;
+  surfacesRequested: string[];
+  /** Explicit evidence — never a lone config flag. */
+  evidenceNotes: string[];
+};
+
+export function assessFinOpsComparability(
+  evidence: FinOpsScopeEvidence,
+): {
+  comparable: boolean;
+  status: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL";
+  limits: string[];
+} {
+  const limits: string[] = [...evidence.evidenceNotes];
+  if (!evidence.organizationMatches) limits.push("ORG_MISMATCH");
+  if (!evidence.periodOverlap) limits.push("PERIOD_NO_OVERLAP");
+  if (!evidence.currencyMatches) limits.push("CURRENCY_MISMATCH");
+  if (!evidence.projectIdsOverlap && !evidence.apiKeyIdsOverlap) {
+    limits.push("PROJECT_OR_KEY_SCOPE_UNPROVEN");
+  }
+  const hardFail =
+    !evidence.organizationMatches ||
+    !evidence.periodOverlap ||
+    !evidence.currencyMatches ||
+    (!evidence.projectIdsOverlap && !evidence.apiKeyIdsOverlap);
+  if (hardFail) {
+    return { comparable: false, status: "NON_COMPARABLE", limits };
+  }
+  return { comparable: true, status: "COMPARABLE", limits };
+}
+
+export function sumMeasuredCostUsd(
+  snapshots: AdminUsageSnapshot[],
+  filter: {
+    intervalStartUtc?: string;
+    intervalEndUtc?: string;
+    projectId?: string | null;
+  },
+): { total: string | null; counted: number; limits: string[] } {
+  const limits: string[] = [];
+  let total: string | null = null;
+  let counted = 0;
+  for (const s of snapshots) {
+    if (s.surfaceObject !== "organization.costs.result") continue;
+    if (
+      filter.intervalStartUtc &&
+      s.intervalEndUtc <= filter.intervalStartUtc
+    ) {
+      continue;
+    }
+    if (
+      filter.intervalEndUtc &&
+      s.intervalStartUtc >= filter.intervalEndUtc
+    ) {
+      continue;
+    }
+    if (
+      filter.projectId &&
+      s.dimensions.project_id != null &&
+      s.dimensions.project_id !== filter.projectId
+    ) {
+      continue;
+    }
+    if (s.metrics.amount.presence !== "MEASURED" || !s.metrics.amount.value) {
+      if (s.metrics.amount.presence === "ABSENT") limits.push("COST_AMOUNT_ABSENT");
+      if (s.metrics.amount.presence === "INVALID") limits.push("COST_AMOUNT_INVALID");
+      continue;
+    }
+    if (
+      s.metrics.currency.presence === "MEASURED" &&
+      s.metrics.currency.value != null &&
+      s.metrics.currency.value !== "usd"
+    ) {
+      limits.push("NON_USD_CURRENCY_SKIPPED");
+      continue;
+    }
+    total = total == null ? s.metrics.amount.value : decimalAdd(total, s.metrics.amount.value);
+    if (total == null) {
+      limits.push("DECIMAL_ADD_FAILED");
+      return { total: null, counted, limits };
+    }
+    counted += 1;
+  }
+  return { total, counted, limits: [...new Set(limits)] };
+}
+
 export function reconcileFinOpsCosts(input: {
-  studioEstimatedUsd: string;
+  studioEstimatedUsd: string | null;
   providerCostUsd: string | null;
-  comparable: boolean;
-  reasonIfNot?: string;
+  scope: FinOpsScopeEvidence;
 }): {
-  status: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL";
+  status: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL" | "UNAVAILABLE";
   deltaUsd: string | null;
   limits: string[];
 } {
-  if (!input.comparable || input.providerCostUsd == null) {
+  if (input.studioEstimatedUsd == null || input.providerCostUsd == null) {
+    return {
+      status: "UNAVAILABLE",
+      deltaUsd: null,
+      limits: ["STUDIO_OR_PROVIDER_ABSENT"],
+    };
+  }
+  const scope = assessFinOpsComparability(input.scope);
+  if (!scope.comparable) {
     return {
       status: "NON_COMPARABLE",
       deltaUsd: null,
-      limits: [input.reasonIfNot ?? "SCOPE_NOT_COMPARABLE"],
+      limits: scope.limits,
     };
   }
-  const a = Number(input.studioEstimatedUsd);
-  const b = Number(input.providerCostUsd);
-  if (!Number.isFinite(a) || !Number.isFinite(b)) {
+  const delta = decimalSub(input.providerCostUsd, input.studioEstimatedUsd);
+  if (delta == null) {
     return {
       status: "PARTIAL",
       deltaUsd: null,
-      limits: ["DECIMAL_PARSE_FAILED"],
+      limits: ["DECIMAL_PARSE_FAILED", ...scope.limits],
     };
   }
-  // Fixed 10 dp string — display layer; not exact work attribution.
-  const delta = (b - a).toFixed(10);
-  return { status: "COMPARABLE", deltaUsd: delta, limits: [] };
+  return { status: "COMPARABLE", deltaUsd: delta, limits: scope.limits };
 }
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
index f13995bb..aeb8de77 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
@@ -21,9 +21,13 @@ import {
 } from "./usage-projection";
 import {
   getAdminCollectorFreshness,
-  listAdminCollectorBuckets,
+  listAdminCollectorSnapshots,
   reconcileFinOpsCosts,
+  resolveProductAdminCollectorView,
+  sumMeasuredCostUsd,
+  type FinOpsScopeEvidence,
 } from "./provider-admin-usage-collector";
+import { decimalFromNumberLike } from "./decimal-money";

 function studioLane(): string {
   return process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN";
@@ -126,14 +130,20 @@ export type FinOpsProviderReconciliationDto = {
   deltaUsd: number | null;
   comparability: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL" | "UNAVAILABLE";
   freshness: {
+    lastAttemptAtUtc: string | null;
     lastSuccessAtUtc: string | null;
     lastCollectionId: string | null;
     status: string;
-    bucketCount: number;
+    snapshotCount: number;
+    secretReadableByProduct: false;
   };
   limits: string[];
   /** Explicit: Admin collection never blocks Nora. */
   noraIndependent: true;
+  /** Decimal strings for financial reference (UI may coerce for display). */
+  studioEstimatedUsdDecimal: string | null;
+  providerCostUsdDecimal: string | null;
+  deltaUsdDecimal: string | null;
 };

 export type FinOpsSummaryDto = {
@@ -272,7 +282,10 @@ export async function loadFinOpsSummary(
     onlyWithObservedCost: true,
   });

-  const providerReconciliation = buildProviderReconciliationDto(estimatedCostUsd);
+  const providerReconciliation = buildProviderReconciliationDto(
+    estimatedCostUsd,
+    input,
+  );

   return {
     periodDays,
@@ -297,101 +310,112 @@ export async function loadFinOpsSummary(

 function buildProviderReconciliationDto(
   estimatedCostUsd: MeasuredValue<number>,
+  filter: FinOpsFilterInput,
 ): FinOpsProviderReconciliationDto {
+  // Product path: never inspect OPENAI_ADMIN_KEY.
+  const productView = resolveProductAdminCollectorView();
   const freshness = getAdminCollectorFreshness();
-  const costBuckets = listAdminCollectorBuckets().filter(
-    (b) => b.source === "openai.organization.costs" && b.completeness === "complete",
+  const snapshots = listAdminCollectorSnapshots().filter(
+    (s) =>
+      s.surfaceObject === "organization.costs.result" &&
+      s.completeness === "complete",
   );
-  const limits: string[] = [];
+  const limits: string[] = ["PROVIDER_SNAPSHOT_PG_MIGRATION_PENDING"];
+
+  const studio =
+    estimatedCostUsd.kind === "known" || estimatedCostUsd.kind === "partial"
+      ? estimatedCostUsd.value
+      : null;
+  const studioDecimal =
+    studio != null ? decimalFromNumberLike(studio) : null;
+
+  const freshnessDto = {
+    lastAttemptAtUtc: freshness.lastAttemptAtUtc,
+    lastSuccessAtUtc: freshness.lastSuccessAtUtc,
+    lastCollectionId: freshness.lastCollectionId,
+    status: freshness.status,
+    snapshotCount: freshness.snapshotCount,
+    secretReadableByProduct: false as const,
+  };

-  if (freshness.status === "IDLE" || freshness.bucketCount === 0) {
+  if (freshness.status === "IDLE" || freshness.snapshotCount === 0) {
     limits.push("ADMIN_COLLECTION_UNAVAILABLE");
-    if (!process.env.OPENAI_ADMIN_KEY?.trim()) {
-      limits.push("OPENAI_ADMIN_KEY_ABSENT");
-    }
-    if (process.env.SFIA_ADMIN_USAGE_LIVE?.trim() !== "1") {
-      limits.push("SFIA_ADMIN_USAGE_LIVE_REQUIRED");
-    }
-    limits.push("PROVIDER_SNAPSHOT_PG_MIGRATION_PENDING");
+    limits.push("ADMIN_SECRET_STATUS_UNKNOWN_TO_PRODUCT");
     return {
-      studioEstimatedUsd:
-        estimatedCostUsd.kind === "known" || estimatedCostUsd.kind === "partial"
-          ? estimatedCostUsd.value
-          : null,
+      studioEstimatedUsd: studio,
       studioEstimationKind: estimatedCostUsd.kind,
       providerCostUsd: null,
       providerCurrency: null,
       deltaUsd: null,
       comparability: "UNAVAILABLE",
-      freshness: {
-        lastSuccessAtUtc: freshness.lastSuccessAtUtc,
-        lastCollectionId: freshness.lastCollectionId,
-        status: freshness.status,
-        bucketCount: freshness.bucketCount,
-      },
+      freshness: freshnessDto,
       limits,
       noraIndependent: true,
+      studioEstimatedUsdDecimal: studioDecimal,
+      providerCostUsdDecimal: null,
+      deltaUsdDecimal: null,
     };
   }

-  // Sum complete cost buckets — do not invent project/work attribution.
-  let providerSum = 0;
-  let currency: string | null = null;
-  for (const b of costBuckets) {
-    const n = Number(b.value);
-    if (!Number.isFinite(n)) {
-      limits.push("PROVIDER_COST_PARSE_PARTIAL");
-      continue;
-    }
-    providerSum += n;
-    currency = b.currency ?? currency;
-  }
-
-  const studio =
-    estimatedCostUsd.kind === "known" || estimatedCostUsd.kind === "partial"
-      ? estimatedCostUsd.value
-      : null;
-
-  // Without a proven lane↔project↔key mapping, org aggregates are NON_COMPARABLE
-  // to Studio pilot estimates (ENV-01 / mandate §10.6).
-  const mappingProven =
-    (process.env.SFIA_FINOPS_SCOPE_COMPARABLE ?? "").trim() === "1";
-  if (!mappingProven) {
-    limits.push("LANE_PROJECT_KEY_MAPPING_UNPROVEN");
-  }
+  const since = periodStartDate(filter.periodDays ?? 30);
+  const sum = sumMeasuredCostUsd(snapshots, {
+    intervalStartUtc: since.toISOString(),
+    intervalEndUtc: new Date().toISOString(),
+    projectId: null, // provider project mapping not proven from Studio projectId alone
+  });
+  limits.push(...sum.limits);
+
+  const configuredProject =
+    (process.env.SFIA_OPENAI_PROJECT_ID ?? "").trim() || null;
+  const configuredKey =
+    (process.env.SFIA_OPENAI_API_KEY_ID ?? "").trim() || null;
+  const evidence: FinOpsScopeEvidence = {
+    organizationMatches: Boolean(productView.organizationScope),
+    projectIdsOverlap: Boolean(
+      configuredProject &&
+        snapshots.some((s) => s.dimensions.project_id === configuredProject),
+    ),
+    apiKeyIdsOverlap: Boolean(
+      configuredKey &&
+        snapshots.some((s) => s.dimensions.api_key_id === configuredKey),
+    ),
+    periodOverlap: sum.counted > 0,
+    currencyMatches: true,
+    surfacesRequested: ["/organization/costs"],
+    evidenceNotes: [
+      // Config flag alone is never sufficient evidence.
+      (process.env.SFIA_FINOPS_SCOPE_COMPARABLE ?? "").trim() === "1"
+        ? "SCOPE_FLAG_SET_BUT_EVIDENCE_REQUIRED"
+        : "SCOPE_FLAG_UNSET",
+    ],
+  };

   const rec = reconcileFinOpsCosts({
-    studioEstimatedUsd: studio != null ? String(studio) : "0",
-    providerCostUsd: costBuckets.length > 0 ? String(providerSum) : null,
-    comparable: mappingProven && studio != null && costBuckets.length > 0,
-    reasonIfNot: mappingProven
-      ? "STUDIO_OR_PROVIDER_ABSENT"
-      : "LANE_PROJECT_KEY_MAPPING_UNPROVEN",
+    studioEstimatedUsd: studioDecimal,
+    providerCostUsd: sum.total,
+    scope: evidence,
   });
   limits.push(...rec.limits);

+  // Display numbers are derived from decimal strings only when present.
+  const providerNum =
+    sum.total != null ? Number(sum.total) : null;
+  const deltaNum = rec.deltaUsd != null ? Number(rec.deltaUsd) : null;
+
   return {
     studioEstimatedUsd: studio,
     studioEstimationKind: estimatedCostUsd.kind,
-    providerCostUsd: costBuckets.length > 0 ? providerSum : null,
-    providerCurrency: currency,
-    deltaUsd: rec.deltaUsd != null ? Number(rec.deltaUsd) : null,
-    comparability:
-      rec.status === "COMPARABLE"
-        ? "COMPARABLE"
-        : rec.status === "PARTIAL"
-          ? "PARTIAL"
-          : costBuckets.length === 0
-            ? "UNAVAILABLE"
-            : "NON_COMPARABLE",
-    freshness: {
-      lastSuccessAtUtc: freshness.lastSuccessAtUtc,
-      lastCollectionId: freshness.lastCollectionId,
-      status: freshness.status,
-      bucketCount: freshness.bucketCount,
-    },
-    limits,
+    providerCostUsd:
+      providerNum != null && Number.isFinite(providerNum) ? providerNum : null,
+    providerCurrency: "usd",
+    deltaUsd: deltaNum != null && Number.isFinite(deltaNum) ? deltaNum : null,
+    comparability: rec.status,
+    freshness: freshnessDto,
+    limits: [...new Set(limits)],
     noraIndependent: true,
+    studioEstimatedUsdDecimal: studioDecimal,
+    providerCostUsdDecimal: sum.total,
+    deltaUsdDecimal: rec.deltaUsd,
   };
 }

diff --git a/projects/sfia-studio-next/web/src/lib/agents-sdk-tracing.ts b/projects/sfia-studio-next/web/src/lib/agents-sdk-tracing.ts
index ff28cdf0..7cad6eb5 100644
--- a/projects/sfia-studio-next/web/src/lib/agents-sdk-tracing.ts
+++ b/projects/sfia-studio-next/web/src/lib/agents-sdk-tracing.ts
@@ -1,19 +1,24 @@
 /**
- * Macro-lot 1 — Agents SDK tracing under Studio control.
+ * Agents SDK tracing under Studio control (corrective).
  *
- * Modes (SFIA_AGENTS_TRACING_MODE):
- * - off   → setTracingDisabled(true)  [default / rollback]
- * - local → setTracingDisabled(false) + setTraceProcessors([StudioLocalTraceProcessor])
- *
- * NEVER registers a remote OpenAI exporter. Default SDK ConsoleSpanExporter is replaced.
- * Sensitive model/tool payloads are stripped before any local sink.
- * A processor failure must not throw into Nora run paths.
+ * - Correlation via AsyncLocalStorage (no mutable global for concurrent works).
+ * - setTraceProcessors([...]) replaces defaults; failure ⇒ tracing OFF.
+ * - StudioLocalTraceProcessor: redacted OBS + in-memory sink; no HTTP.
+ * - Independent network oracle: wrap fetch around real SDK runs.
  */

+import { AsyncLocalStorage } from "node:async_hooks";
 import { emitObs } from "@/lib/observability";

 export type AgentsTracingMode = "off" | "local";

+export type StudioTracingCorrelation = {
+  operationId: string | null;
+  generationId: string | null;
+  attemptId: string | null;
+  workId: string | null;
+};
+
 export type StudioTraceSinkRecord = {
   kind: "trace" | "span";
   name: string;
@@ -21,99 +26,88 @@ export type StudioTraceSinkRecord = {
   spanId: string | null;
   status: string | null;
   durationMs: number | null;
-  /** Always redacted — presence proves filter ran. */
   dataRedacted: true;
-  correlation: {
-    operationId: string | null;
-    generationId: string | null;
-    attemptId: string | null;
-    workId: string | null;
-  };
+  correlation: StudioTracingCorrelation;
   atMs: number;
 };

-/** Loose structural reads — SDK Span uses string timestamps; we accept both. */
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 type TraceLike = any;
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 type SpanLike = any;

-export type StudioTracingCorrelation = {
-  operationId?: string | null;
-  generationId?: string | null;
-  attemptId?: string | null;
-  workId?: string | null;
-};
+const correlationAls = new AsyncLocalStorage<StudioTracingCorrelation>();

-let correlation: StudioTracingCorrelation = {};
 let configured = false;
 let lastMode: AgentsTracingMode = "off";
+let processorsActuallyReplaced = false;

-/** Test / egress oracle — in-memory only; never leaves process. */
 const sinkRecords: StudioTraceSinkRecord[] = [];
-let egressProbeHooks: Array<(url: string) => void> = [];
+const networkHits: string[] = [];

 export function resetAgentsTracingTestState(): void {
   sinkRecords.length = 0;
-  egressProbeHooks = [];
-  correlation = {};
+  networkHits.length = 0;
   configured = false;
   lastMode = "off";
+  processorsActuallyReplaced = false;
 }

 export function getAgentsTracingSinkRecords(): readonly StudioTraceSinkRecord[] {
   return sinkRecords;
 }

-/** Independent egress observation: any processor HTTP would call this. */
-export function installAgentsTracingEgressProbe(
-  hook: (url: string) => void,
-): () => void {
-  egressProbeHooks.push(hook);
-  return () => {
-    egressProbeHooks = egressProbeHooks.filter((h) => h !== hook);
-  };
+export function getAgentsTracingNetworkHits(): readonly string[] {
+  return networkHits;
 }

-function noteEgress(url: string): void {
-  for (const h of egressProbeHooks) {
-    try {
-      h(url);
-    } catch {
-      /* probe must not break tracing */
-    }
-  }
+export function resolveAgentsTracingMode(
+  env: NodeJS.ProcessEnv = process.env,
+): AgentsTracingMode {
+  const raw = (env.SFIA_AGENTS_TRACING_MODE ?? "off").trim().toLowerCase();
+  return raw === "local" ? "local" : "off";
 }

-/**
- * Deliberately unused by StudioLocalTraceProcessor — present so tests can assert
- * that enabling local mode never routes through a remote export helper.
- */
-export function __forbiddenRemoteTraceExport(url: string, _body: unknown): void {
-  noteEgress(url);
-  throw new Error("FORBIDDEN_REMOTE_TRACE_EXPORT");
+export async function runWithAgentsTracingCorrelation<T>(
+  corr: StudioTracingCorrelation,
+  fn: () => Promise<T>,
+): Promise<T> {
+  return correlationAls.run(
+    {
+      operationId: corr.operationId ?? null,
+      generationId: corr.generationId ?? null,
+      attemptId: corr.attemptId ?? null,
+      workId: corr.workId ?? null,
+    },
+    fn,
+  );
 }

+export function getAgentsTracingCorrelation(): StudioTracingCorrelation {
+  return (
+    correlationAls.getStore() ?? {
+      operationId: null,
+      generationId: null,
+      attemptId: null,
+      workId: null,
+    }
+  );
+}
+
+/** @deprecated mutable global — kept as no-op wrapper for callers; use ALS. */
 export function setAgentsTracingCorrelation(
-  next: StudioTracingCorrelation,
+  next: Partial<StudioTracingCorrelation>,
 ): void {
-  correlation = {
-    operationId: next.operationId ?? null,
-    generationId: next.generationId ?? null,
-    attemptId: next.attemptId ?? null,
-    workId: next.workId ?? null,
-  };
+  const cur = correlationAls.getStore();
+  if (!cur) return;
+  cur.operationId = next.operationId ?? cur.operationId;
+  cur.generationId = next.generationId ?? cur.generationId;
+  cur.attemptId = next.attemptId ?? cur.attemptId;
+  cur.workId = next.workId ?? cur.workId;
 }

 export function clearAgentsTracingCorrelation(): void {
-  correlation = {};
-}
-
-export function resolveAgentsTracingMode(
-  env: NodeJS.ProcessEnv = process.env,
-): AgentsTracingMode {
-  const raw = (env.SFIA_AGENTS_TRACING_MODE ?? "off").trim().toLowerCase();
-  return raw === "local" ? "local" : "off";
+  /* ALS exits clear scope; no global to clear */
 }

 function spanName(span: SpanLike): string {
@@ -162,7 +156,6 @@ function recordLocal(item: StudioTraceSinkRecord): void {
       generation_id: item.correlation.generationId ?? undefined,
       attempt_id: item.correlation.attemptId ?? undefined,
       duration_ms: item.durationMs ?? undefined,
-      // Only allowlisted meta keys (see observability.ts META_ALLOWLIST).
       meta: {
         kind: item.kind,
         status: item.status,
@@ -170,34 +163,24 @@ function recordLocal(item: StudioTraceSinkRecord): void {
       },
     });
   } catch {
-    /* OBS failure must not break Nora */
+    /* never break Nora */
   }
 }

-/**
- * Local-only TracingProcessor: no HTTP, no model/tool payloads, OBS + in-memory sink.
- */
 export class StudioLocalTraceProcessor {
-  async onTraceStart(_trace: TraceLike): Promise<void> {
-    /* start is noisy; we record on end */
-  }
+  async onTraceStart(_trace: TraceLike): Promise<void> {}

   async onTraceEnd(trace: TraceLike): Promise<void> {
     try {
       recordLocal({
         kind: "trace",
-        name: typeof trace.name === "string" ? trace.name : "trace",
-        traceId: typeof trace.traceId === "string" ? trace.traceId : null,
+        name: typeof trace?.name === "string" ? trace.name : "trace",
+        traceId: typeof trace?.traceId === "string" ? trace.traceId : null,
         spanId: null,
         status: "ok",
         durationMs: null,
         dataRedacted: true,
-        correlation: {
-          operationId: correlation.operationId ?? null,
-          generationId: correlation.generationId ?? null,
-          attemptId: correlation.attemptId ?? null,
-          workId: correlation.workId ?? null,
-        },
+        correlation: getAgentsTracingCorrelation(),
         atMs: Date.now(),
       });
     } catch {
@@ -205,26 +188,19 @@ export class StudioLocalTraceProcessor {
     }
   }

-  async onSpanStart(_span: SpanLike): Promise<void> {
-    /* record on end */
-  }
+  async onSpanStart(_span: SpanLike): Promise<void> {}

   async onSpanEnd(span: SpanLike): Promise<void> {
     try {
       recordLocal({
         kind: "span",
         name: spanName(span),
-        traceId: typeof span.traceId === "string" ? span.traceId : null,
-        spanId: typeof span.spanId === "string" ? span.spanId : null,
+        traceId: typeof span?.traceId === "string" ? span.traceId : null,
+        spanId: typeof span?.spanId === "string" ? span.spanId : null,
         status: statusOf(span),
         durationMs: durationMs(span),
         dataRedacted: true,
-        correlation: {
-          operationId: correlation.operationId ?? null,
-          generationId: correlation.generationId ?? null,
-          attemptId: correlation.attemptId ?? null,
-          workId: correlation.workId ?? null,
-        },
+        correlation: getAgentsTracingCorrelation(),
         atMs: Date.now(),
       });
     } catch {
@@ -232,12 +208,55 @@ export class StudioLocalTraceProcessor {
     }
   }

-  async forceFlush(): Promise<void> {
-    /* no remote buffer */
+  async forceFlush(): Promise<void> {}
+  async shutdown(): Promise<void> {}
+}
+
+function urlOf(input: RequestInfo | URL): string {
+  if (typeof input === "string") return input;
+  if (input instanceof URL) return input.toString();
+  try {
+    return String((input as Request).url ?? "");
+  } catch {
+    return "";
   }
+}

-  async shutdown(): Promise<void> {
-    /* no-op */
+function isTraceExportUrl(url: string): boolean {
+  const u = url.toLowerCase();
+  return (
+    u.includes("/traces") ||
+    u.includes("traces.ingest") ||
+    u.includes("api.openai.com/v1/traces")
+  );
+}
+
+/**
+ * Independent network oracle: wrap global fetch for the duration of fn.
+ * Records any URL that looks like a traces export endpoint.
+ */
+export async function withAgentsTracingNetworkOracle<T>(
+  fn: () => Promise<T>,
+): Promise<{ result: T; traceExportUrls: string[] }> {
+  const hits: string[] = [];
+  const prev = globalThis.fetch;
+  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
+    const url = urlOf(input);
+    if (isTraceExportUrl(url)) {
+      hits.push(url);
+      networkHits.push(url);
+      return new Response(JSON.stringify({ refused: "TRACE_EXPORT_BLOCKED" }), {
+        status: 599,
+        headers: { "content-type": "application/json" },
+      });
+    }
+    return prev(input, init);
+  }) as typeof fetch;
+  try {
+    const result = await fn();
+    return { result, traceExportUrls: hits };
+  } finally {
+    globalThis.fetch = prev;
   }
 }

@@ -248,18 +267,13 @@ export type ConfigureAgentsTracingResult = {
   sensitiveLoggingForcedOff: boolean;
 };

-/**
- * Idempotent configuration. Safe to call before every LIVE Agents run.
- */
 export async function configureAgentsSdkTracing(
   env: NodeJS.ProcessEnv = process.env,
 ): Promise<ConfigureAgentsTracingResult> {
   const mode = resolveAgentsTracingMode(env);
-  const agents = await import("@openai/agents");
-
-  // Always force sensitive logging OFF for the product path (DEV ephemeral
-  // diagnostics remain a separate opt-in in nora-adapter, after this call).
   let sensitiveLoggingForcedOff = false;
+  let processorsReplaced = false;
+
   try {
     const core = await import("@openai/agents-core");
     if (typeof core.setSensitiveDataLoggingEnabled === "function") {
@@ -270,44 +284,79 @@ export async function configureAgentsSdkTracing(
     sensitiveLoggingForcedOff = false;
   }

-  if (mode === "off") {
-    if (typeof agents.setTracingDisabled === "function") {
-      agents.setTracingDisabled(true);
+  try {
+    const agents = await import("@openai/agents");
+    if (mode === "off") {
+      if (typeof agents.setTraceProcessors === "function") {
+        agents.setTraceProcessors([]);
+        processorsReplaced = true;
+      }
+      if (typeof agents.setTracingDisabled === "function") {
+        agents.setTracingDisabled(true);
+      }
+      lastMode = "off";
+      configured = true;
+      processorsActuallyReplaced = processorsReplaced;
+      return {
+        mode: "off",
+        tracingDisabled: true,
+        processorsReplaced,
+        sensitiveLoggingForcedOff,
+      };
+    }
+
+    if (typeof agents.setTraceProcessors !== "function") {
+      // Cannot prove replacement — fail closed to OFF.
+      if (typeof agents.setTracingDisabled === "function") {
+        agents.setTracingDisabled(true);
+      }
+      lastMode = "off";
+      configured = true;
+      processorsActuallyReplaced = false;
+      return {
+        mode: "off",
+        tracingDisabled: true,
+        processorsReplaced: false,
+        sensitiveLoggingForcedOff,
+      };
     }
-    // Replace any processors so a later enable cannot inherit a prior remote exporter.
-    if (typeof agents.setTraceProcessors === "function") {
-      agents.setTraceProcessors([]);
+
+    agents.setTraceProcessors([new StudioLocalTraceProcessor()]);
+    processorsReplaced = true;
+    if (typeof agents.setTracingDisabled === "function") {
+      agents.setTracingDisabled(false);
     }
+    lastMode = "local";
+    configured = true;
+    processorsActuallyReplaced = true;
+    return {
+      mode: "local",
+      tracingDisabled: false,
+      processorsReplaced: true,
+      sensitiveLoggingForcedOff,
+    };
+  } catch {
+    // Configuration failure ⇒ OFF
     lastMode = "off";
     configured = true;
+    processorsActuallyReplaced = false;
     return {
       mode: "off",
       tracingDisabled: true,
-      processorsReplaced: true,
+      processorsReplaced: false,
       sensitiveLoggingForcedOff,
     };
   }
-
-  // local mode
-  if (typeof agents.setTraceProcessors === "function") {
-    agents.setTraceProcessors([new StudioLocalTraceProcessor()]);
-  }
-  if (typeof agents.setTracingDisabled === "function") {
-    agents.setTracingDisabled(false);
-  }
-  lastMode = "local";
-  configured = true;
-  return {
-    mode: "local",
-    tracingDisabled: false,
-    processorsReplaced: true,
-    sensitiveLoggingForcedOff,
-  };
 }

 export function getAgentsTracingConfigState(): {
   configured: boolean;
   mode: AgentsTracingMode;
+  processorsReplaced: boolean;
 } {
-  return { configured, mode: lastMode };
+  return {
+    configured,
+    mode: lastMode,
+    processorsReplaced: processorsActuallyReplaced,
+  };
 }
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-agents-sdk-tracing.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-agents-sdk-tracing.test.ts
index 025c7094..a9a254ec 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-agents-sdk-tracing.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-agents-sdk-tracing.test.ts
@@ -1,13 +1,13 @@
 import { afterEach, describe, expect, it, vi } from "vitest";
 import {
   StudioLocalTraceProcessor,
-  __forbiddenRemoteTraceExport,
   configureAgentsSdkTracing,
+  getAgentsTracingConfigState,
   getAgentsTracingSinkRecords,
-  installAgentsTracingEgressProbe,
   resetAgentsTracingTestState,
   resolveAgentsTracingMode,
-  setAgentsTracingCorrelation,
+  runWithAgentsTracingCorrelation,
+  withAgentsTracingNetworkOracle,
 } from "@/lib/agents-sdk-tracing";

 const setTracingDisabled = vi.fn();
@@ -28,7 +28,7 @@ vi.mock("@/lib/observability", () => ({
   emitObs: vi.fn(() => ({ emitted: true })),
 }));

-describe("agents-sdk-tracing", () => {
+describe("agents-sdk-tracing corrective", () => {
   afterEach(() => {
     resetAgentsTracingTestState();
     setTracingDisabled.mockReset();
@@ -41,69 +41,85 @@ describe("agents-sdk-tracing", () => {
     expect(resolveAgentsTracingMode({} as NodeJS.ProcessEnv)).toBe("off");
   });

-  it("configures OFF: disables tracing and clears processors", async () => {
+  it("OFF clears processors and disables tracing", async () => {
     vi.stubEnv("SFIA_AGENTS_TRACING_MODE", "off");
     const r = await configureAgentsSdkTracing(process.env);
     expect(r.mode).toBe("off");
-    expect(r.tracingDisabled).toBe(true);
-    expect(setTracingDisabled).toHaveBeenCalledWith(true);
+    expect(r.processorsReplaced).toBe(true);
     expect(setTraceProcessors).toHaveBeenCalledWith([]);
-    expect(setSensitiveDataLoggingEnabled).toHaveBeenCalledWith(false);
+    expect(setTracingDisabled).toHaveBeenCalledWith(true);
   });

-  it("configures LOCAL: replaces processors with StudioLocalTraceProcessor", async () => {
+  it("LOCAL replaces processors; processorsReplaced only when setTraceProcessors exists", async () => {
     vi.stubEnv("SFIA_AGENTS_TRACING_MODE", "local");
     const r = await configureAgentsSdkTracing(process.env);
     expect(r.mode).toBe("local");
-    expect(r.tracingDisabled).toBe(false);
-    expect(setTracingDisabled).toHaveBeenCalledWith(false);
-    expect(setTraceProcessors).toHaveBeenCalledTimes(1);
-    const processors = setTraceProcessors.mock.calls[0][0] as unknown[];
-    expect(processors).toHaveLength(1);
-    expect(processors[0]).toBeInstanceOf(StudioLocalTraceProcessor);
+    expect(r.processorsReplaced).toBe(true);
+    expect(getAgentsTracingConfigState().processorsReplaced).toBe(true);
+    expect(setTraceProcessors.mock.calls[0][0][0]).toBeInstanceOf(
+      StudioLocalTraceProcessor,
+    );
   });

-  it("local processor redacts and never triggers egress probe", async () => {
-    const egress: string[] = [];
-    installAgentsTracingEgressProbe((url) => egress.push(url));
-    setAgentsTracingCorrelation({
-      operationId: "op_1",
-      generationId: "gen_1",
-      attemptId: "att_1",
-      workId: "work_1",
-    });
+  it("ALS correlation isolates concurrent works", async () => {
     const p = new StudioLocalTraceProcessor();
-    await p.onSpanEnd({
-      type: "span",
-      traceId: "trace_abc",
-      spanId: "span_1",
-      startedAt: 1000,
-      endedAt: 1250,
-      spanData: {
-        type: "generation",
-        name: "reply",
-        input: "SECRET_PROMPT",
-        output: "SECRET_OUTPUT",
-      },
-    });
+    await Promise.all([
+      runWithAgentsTracingCorrelation(
+        {
+          operationId: "op_a",
+          generationId: "gen_a",
+          attemptId: "att_a",
+          workId: "work_a",
+        },
+        async () => {
+          await new Promise((r) => setTimeout(r, 20));
+          await p.onSpanEnd({
+            traceId: "t1",
+            spanId: "s1",
+            endedAt: Date.now(),
+            spanData: { type: "generation", name: "a" },
+          });
+        },
+      ),
+      runWithAgentsTracingCorrelation(
+        {
+          operationId: "op_b",
+          generationId: "gen_b",
+          attemptId: "att_b",
+          workId: "work_b",
+        },
+        async () => {
+          await new Promise((r) => setTimeout(r, 5));
+          await p.onSpanEnd({
+            traceId: "t2",
+            spanId: "s2",
+            endedAt: Date.now(),
+            spanData: { type: "generation", name: "b" },
+          });
+        },
+      ),
+    ]);
     const records = getAgentsTracingSinkRecords();
-    expect(records).toHaveLength(1);
-    expect(records[0].dataRedacted).toBe(true);
-    expect(records[0].name).toBe("generation:reply");
-    expect(records[0].durationMs).toBe(250);
-    expect(records[0].correlation.operationId).toBe("op_1");
-    expect(JSON.stringify(records[0])).not.toContain("SECRET_PROMPT");
-    expect(egress).toEqual([]);
+    expect(records).toHaveLength(2);
+    const byOp = Object.fromEntries(
+      records.map((r) => [r.correlation.operationId, r.correlation.workId]),
+    );
+    expect(byOp.op_a).toBe("work_a");
+    expect(byOp.op_b).toBe("work_b");
+    expect(JSON.stringify(records)).not.toContain("SECRET");
   });

-  it("forbidden remote export helper is detectable by egress probe", () => {
-    const egress: string[] = [];
-    installAgentsTracingEgressProbe((url) => egress.push(url));
-    expect(() =>
-      __forbiddenRemoteTraceExport("https://api.openai.com/v1/traces/ingest", {
-        prompt: "x",
-      }),
-    ).toThrow(/FORBIDDEN_REMOTE_TRACE_EXPORT/);
-    expect(egress).toEqual(["https://api.openai.com/v1/traces/ingest"]);
+  it("network oracle observes and blocks trace export URLs independently", async () => {
+    const { traceExportUrls } = await withAgentsTracingNetworkOracle(async () => {
+      await fetch("https://api.openai.com/v1/traces/ingest", {
+        method: "POST",
+        body: "{}",
+      });
+      await fetch("https://example.com/ok");
+      return "done";
+    });
+    expect(traceExportUrls).toEqual([
+      "https://api.openai.com/v1/traces/ingest",
+    ]);
   });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts
index 4fe7b178..f6973ce5 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts
@@ -1,101 +1,199 @@
 import { afterEach, describe, expect, it } from "vitest";
 import {
-  collectAdminUsagePage,
+  parseAdminUsagePage,
   resetAdminCollectorStateForTests,
-  resolveAdminCollectorConfig,
+  resolveIsolatedAdminCollectorConfig,
+  resolveProductAdminCollectorView,
   runAdminCollection,
-  upsertAdminBuckets,
-  listAdminCollectorBuckets,
+  listAdminCollectorSnapshots,
   reconcileFinOpsCosts,
+  sumMeasuredCostUsd,
   type AdminHttpTransport,
 } from "@/domains/finops/provider-admin-usage-collector";
+import { decimalAdd, decimalSub } from "@/domains/finops/decimal-money";

-describe("provider-admin-usage-collector", () => {
+/** Official-shaped page: buckets with nested results (not flattened rows). */
+function officialCostsPage(opts?: { hasMore?: boolean; next?: string | null }) {
+  return {
+    object: "page",
+    data: [
+      {
+        object: "bucket",
+        start_time: 1_700_000_000,
+        end_time: 1_700_086_400,
+        results: [
+          {
+            object: "organization.costs.result",
+            amount: { value: 0.42, currency: "usd" },
+            project_id: "proj_a",
+            api_key_id: null,
+            line_item: null,
+          },
+          {
+            object: "organization.costs.result",
+            amount: { value: 0.08, currency: "usd" },
+            project_id: "proj_b",
+            api_key_id: "key_1",
+          },
+        ],
+      },
+    ],
+    has_more: opts?.hasMore ?? false,
+    next_page: opts?.next ?? null,
+  };
+}
+
+function officialCompletionsPage() {
+  return {
+    object: "page",
+    data: [
+      {
+        object: "bucket",
+        start_time: 1_700_000_000,
+        end_time: 1_700_086_400,
+        results: [
+          {
+            object: "organization.usage.completions.result",
+            input_tokens: 100,
+            output_tokens: 20,
+            input_cached_tokens: 10,
+            num_model_requests: 2,
+            project_id: "proj_a",
+            model: "gpt-x",
+          },
+        ],
+      },
+      {
+        object: "bucket",
+        start_time: 1_700_086_400,
+        end_time: 1_700_172_800,
+        results: [],
+      },
+    ],
+    has_more: false,
+    next_page: null,
+  };
+}
+
+describe("provider-admin-usage-collector (corrective)", () => {
   afterEach(() => {
     resetAdminCollectorStateForTests();
   });

-  it("blocks without secret", async () => {
-    const r = await runAdminCollection({
-      config: {
-        adminApiKey: null,
-        organizationScope: "org:test",
-        liveAdminCallsAuthorized: true,
-      },
-      path: "/v1/organization/costs",
-      query: { start_time: "1", limit: "10" },
+  it("parses nested bucket.results — multiple results per bucket", () => {
+    const parsed = parseAdminUsagePage({
+      path: "/organization/costs",
+      json: officialCostsPage(),
+      organizationScope: "org:test",
+      collectionId: "acol_1",
+      collectedAtUtc: "2026-11-26T00:00:00.000Z",
+      granularity: "1d",
+    });
+    expect(parsed.snapshots).toHaveLength(2);
+    expect(parsed.snapshots[0].surfaceObject).toBe("organization.costs.result");
+    expect(parsed.snapshots[0].metrics.amount).toEqual({
+      presence: "MEASURED",
+      value: "0.4200000000",
     });
-    expect(r.status).toBe("BLOCKED_NO_SECRET");
+    expect(parsed.snapshots[1].dimensions.project_id).toBe("proj_b");
   });

-  it("blocks without LIVE GO when no substituted transport", async () => {
-    const r = await runAdminCollection({
-      config: {
+  it("ABSENT metrics stay ABSENT — never ZERO", () => {
+    const parsed = parseAdminUsagePage({
+      path: "/organization/usage/completions",
+      json: officialCompletionsPage(),
+      organizationScope: "org:test",
+      collectionId: "acol_2",
+      collectedAtUtc: "2026-11-26T00:00:00.000Z",
+      granularity: "1d",
+    });
+    expect(parsed.snapshots).toHaveLength(1);
+    const m = parsed.snapshots[0].metrics;
+    expect(m.input_tokens.presence).toBe("MEASURED");
+    expect(m.num_requests.presence).toBe("ABSENT");
+    expect(m.num_requests.value).toBeNull();
+    expect(m.amount.presence).toBe("ABSENT");
+  });
+
+  it("product view never loads Admin secret", () => {
+    process.env.OPENAI_ADMIN_KEY = "sk-should-not-be-readable";
+    const view = resolveProductAdminCollectorView();
+    expect(view.freshness.secretReadableByProduct).toBe(false);
+    delete process.env.OPENAI_ADMIN_KEY;
+  });
+
+  it("blocks without secret / without LIVE GO", async () => {
+    const a = await runAdminCollection({
+      config: resolveIsolatedAdminCollectorConfig({
+        adminApiKey: null,
+        liveAuthorized: true,
+      }),
+      path: "/organization/costs",
+      query: { start_time: "1" },
+    });
+    expect(a.status).toBe("BLOCKED_NO_SECRET");
+
+    const b = await runAdminCollection({
+      config: resolveIsolatedAdminCollectorConfig({
         adminApiKey: "sk-admin-test",
-        organizationScope: "org:test",
-        liveAdminCallsAuthorized: false,
-      },
-      path: "/v1/organization/costs",
+        liveAuthorized: false,
+      }),
+      path: "/organization/costs",
       query: { start_time: "1" },
     });
-    expect(r.status).toBe("BLOCKED_NO_LIVE_GO");
+    expect(b.status).toBe("BLOCKED_NO_LIVE_GO");
   });

-  it("refuses non-allowlisted paths", async () => {
+  it("refuses /organization/usage/responses (nonexistent)", async () => {
     const transport: AdminHttpTransport = async () => ({
       status: 200,
-      json: { data: [] },
+      json: { object: "page", data: [] },
     });
-    await expect(
-      collectAdminUsagePage({
-        config: {
-          adminApiKey: "sk-admin-test",
-          organizationScope: "org:test",
-          liveAdminCallsAuthorized: false,
-          transport,
-        },
-        path: "/v1/organization/projects",
-        query: {},
-        collectionId: "acol_x",
-      }),
-    ).rejects.toThrow(/ADMIN_PATH_NOT_ALLOWLISTED/);
+    const r = await runAdminCollection({
+      config: {
+        adminApiKey: "sk-admin-test",
+        organizationScope: "org:t",
+        liveAdminCallsAuthorized: false,
+        transport,
+      },
+      path: "/organization/usage/responses",
+      query: { start_time: "1" },
+    });
+    expect(r.status).toBe("ERROR");
+    expect(r.lastError).toContain("ADMIN_PATH_NOT_ALLOWLISTED");
   });

-  it("paginates via substituted transport and upserts idempotently", async () => {
+  it("paginates official-shaped costs and sums with decimal math", async () => {
     let calls = 0;
-    const transport: AdminHttpTransport = async ({ path, headers }) => {
+    const transport: AdminHttpTransport = async ({ path }) => {
       calls += 1;
-      expect(path).toBe("/v1/organization/costs");
-      expect(headers.Authorization).toBe("Bearer sk-admin-test");
+      expect(path).toBe("/organization/costs");
       if (calls === 1) {
         return {
           status: 200,
-          json: {
-            data: [
-              {
-                start_time: 1_700_000_000,
-                end_time: 1_700_086_400,
-                amount: { value: 0.42, currency: "usd" },
-                project_id: "proj_a",
-              },
-            ],
-            has_more: true,
-            next_page: "page_2",
-          },
+          json: officialCostsPage({ hasMore: true, next: "page_2" }),
         };
       }
       return {
         status: 200,
         json: {
+          object: "page",
           data: [
             {
+              object: "bucket",
               start_time: 1_700_086_400,
               end_time: 1_700_172_800,
-              amount: { value: 0.11, currency: "usd" },
-              project_id: "proj_a",
+              results: [
+                {
+                  object: "organization.costs.result",
+                  amount: { value: 0.11, currency: "usd" },
+                  project_id: "proj_a",
+                },
+              ],
             },
           ],
           has_more: false,
+          next_page: null,
         },
       };
     };
@@ -107,105 +205,48 @@ describe("provider-admin-usage-collector", () => {
         liveAdminCallsAuthorized: false,
         transport,
       },
-      path: "/v1/organization/costs",
+      path: "/organization/costs",
       query: { start_time: "1700000000", bucket_width: "1d" },
     });
     expect(r.status).toBe("READY");
     expect(r.pagesFetched).toBe(2);
-    expect(r.buckets).toHaveLength(2);
-    expect(listAdminCollectorBuckets()).toHaveLength(2);
+    expect(listAdminCollectorSnapshots()).toHaveLength(3);

-    // Idempotent re-run replaces, does not double.
-    await runAdminCollection({
-      config: {
-        adminApiKey: "sk-admin-test",
-        organizationScope: "org:test",
-        liveAdminCallsAuthorized: false,
-        transport: async () => ({
-          status: 200,
-          json: {
-            data: [
-              {
-                start_time: 1_700_000_000,
-                end_time: 1_700_086_400,
-                amount: { value: 0.5, currency: "usd" },
-                project_id: "proj_a",
-              },
-            ],
-          },
-        }),
-      },
-      path: "/v1/organization/costs",
-      query: { start_time: "1700000000", bucket_width: "1d" },
-    });
-    const buckets = listAdminCollectorBuckets().filter(
-      (b) => b.intervalStartUtc === new Date(1_700_000_000 * 1000).toISOString(),
-    );
-    expect(buckets).toHaveLength(1);
-    expect(buckets[0].value).toBe("0.5");
-  });
-
-  it("does not overwrite complete bucket with partial", () => {
-    upsertAdminBuckets([
-      {
-        source: "openai.organization.costs",
-        organizationScope: "org:t",
-        intervalStartUtc: "2026-01-01T00:00:00.000Z",
-        intervalEndUtc: "2026-01-02T00:00:00.000Z",
-        granularity: "day",
-        dimensions: { project_id: "p", api_key_id: null, model: null },
-        unit: "currency",
-        currency: "usd",
-        value: "1.00",
-        completeness: "complete",
-        collectedAtUtc: "2026-01-02T01:00:00.000Z",
-        collectionId: "a",
-      },
-    ]);
-    upsertAdminBuckets([
-      {
-        source: "openai.organization.costs",
-        organizationScope: "org:t",
-        intervalStartUtc: "2026-01-01T00:00:00.000Z",
-        intervalEndUtc: "2026-01-02T00:00:00.000Z",
-        granularity: "day",
-        dimensions: { project_id: "p", api_key_id: null, model: null },
-        unit: "currency",
-        currency: "usd",
-        value: "9.00",
-        completeness: "partial",
-        collectedAtUtc: "2026-01-02T02:00:00.000Z",
-        collectionId: "b",
-      },
-    ]);
-    expect(listAdminCollectorBuckets()[0].value).toBe("1.00");
+    const sum = sumMeasuredCostUsd(listAdminCollectorSnapshots(), {});
+    expect(sum.total).toBe(decimalAdd(decimalAdd("0.42", "0.08")!, "0.11"));
   });

-  it("reconcile requires comparable scope", () => {
-    const non = reconcileFinOpsCosts({
+  it("reconcile requires evidence — flag alone is insufficient", () => {
+    const rec = reconcileFinOpsCosts({
       studioEstimatedUsd: "0.80",
       providerCostUsd: "0.86",
-      comparable: false,
-      reasonIfNot: "LANE_PROJECT_KEY_MAPPING_UNPROVEN",
+      scope: {
+        organizationMatches: true,
+        projectIdsOverlap: false,
+        apiKeyIdsOverlap: false,
+        periodOverlap: true,
+        currencyMatches: true,
+        surfacesRequested: ["/organization/costs"],
+        evidenceNotes: ["SCOPE_FLAG_SET_BUT_EVIDENCE_REQUIRED"],
+      },
     });
-    expect(non.status).toBe("NON_COMPARABLE");
-    expect(non.deltaUsd).toBeNull();
+    expect(rec.status).toBe("NON_COMPARABLE");
+    expect(rec.deltaUsd).toBeNull();

     const ok = reconcileFinOpsCosts({
       studioEstimatedUsd: "0.80",
       providerCostUsd: "0.86",
-      comparable: true,
+      scope: {
+        organizationMatches: true,
+        projectIdsOverlap: true,
+        apiKeyIdsOverlap: false,
+        periodOverlap: true,
+        currencyMatches: true,
+        surfacesRequested: ["/organization/costs"],
+        evidenceNotes: [],
+      },
     });
     expect(ok.status).toBe("COMPARABLE");
-    expect(ok.deltaUsd).toBe("0.0600000000");
-  });
-
-  it("resolveAdminCollectorConfig never enables LIVE outside DEV flag", () => {
-    const cfg = resolveAdminCollectorConfig({
-      OPENAI_ADMIN_KEY: "sk-admin",
-      SFIA_ADMIN_USAGE_LIVE: "1",
-      STUDIO_LANE: "RECETTE",
-    } as unknown as NodeJS.ProcessEnv);
-    expect(cfg.liveAdminCallsAuthorized).toBe(false);
+    expect(ok.deltaUsd).toBe(decimalSub("0.86", "0.80"));
   });
 });
<<<DIFF_END>>>

---

## 6. Tests

```
vitest: admin-collector, agents-sdk-tracing, frontier, response-usage, continuity, nora-adapter-corrective
→ PASS (34+ ciblés ; suite corrective verte)
tsc: fichiers ML1 src CLEAN
Admin LIVE: NOT RUN (gate)
WEB LIVE: NOT RUN
Migration: NOT APPLIED
```

Fake/Real:
- DETERMINISTIC PROVEN: parsing, isolation product/secret, tracing ALS, decimal, frontier UNKNOWN/MEASURED
- NOT LIVE PROVEN: Admin HTTP réel, WEB, continuité native A/B, tracing DEV operational ON

---

## 7. Matrice CONV (lot 1)

| ID | Niveau | Limite |
|---|---|---|
| F11 | COVERAGE VERIFIED (+ network oracle) | G-TRACING-LOCAL |
| F12 | IMPLEMENTED raccord OFF | G-NATIVE-CONTINUITY + A/B |
| F13 | IMPLEMENTED décimal/évidence | Admin LIVE + mapping + UX |
| F14 | COVERAGE VERIFIED substitué | G-ADMIN-LIVE |
| F15 | OFF / dossier A3 | G-WEB-PUBLIC |

---

## 8. Gates Morris (regroupés)

1. **G-ADMIN-SECRET** — créer clé Admin isolée (valeur hors chat) après revue readiness
2. **G-ADMIN-LIVE** — autoriser lecture bornée DEV
3. **G-PROVIDER-SNAPSHOT-MIGRATION** — appliquer schéma corrigé
4. **G-FINOPS-UX** — valider delta page 13
5. **G-WEB-PUBLIC / A3** — arbitrage risque
6. **G-TRACING-LOCAL** — activer mode local opérationnel
7. **G-NATIVE-CONTINUITY** — activer après A/B
8. **G-PROVIDER-LIVE-QUALIFICATION** — campagnes LIVE additionnelles

Procédure secret: `scripts/finops-admin-collect.mts` + `SFIA_ADMIN_COLLECTOR_PROCESS=1`. Ne jamais coller la clé ici.

---

## 9. Verdict

**MACRO-LOT 1 — TECHNICAL READINESS ESTABLISHED — GOVERNED QUALIFICATION GATES REMAIN**

R5 IN PROGRESS · ML5 OPEN · Macro-lot 1 en qualification · Lots 2/3 non engagés · R6 NOT STARTED · RECETTE protégée · NO RELEASE · NOT ADOPTED
