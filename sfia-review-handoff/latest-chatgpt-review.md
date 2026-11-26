# SFIA Review Pack FULL — ML5 Provider Native Bounds & RECETTE Prep

- **Generated_utc**: 2026-11-26T17:25:33.057144+00:00
- **Cycle**: R5 · ML5 · Type 8 · CRITICAL · EVOL
- **Branch**: `sfia/next-ml5-integrated-delivery-20261123`
- **HEAD_initial**: `235b589bbab485739d57437a93b56a08c5d37fce`
- **HEAD_final**: `c574d2621a6ce7b5fec3727853185982b23ca3bf`
- **Tree**: `85e995353cafc5fee9b03ab5dab73f5cc9508114`
- **Web tree**: `5a1289fcfa26b1963f53ed1364dbd842e771e46c`
- **Merge-base main**: `997897fd7cf914771e7d08e8030dc7123fab7d25`
- **BUILD_ID**: `Le9pyy4fbPKT_m0YlplAr`
- **ENV-01**: COMPLETE · DEV :3100 · PG :5433 · RECETTE :3200 protected
- **WEB**: OFF · G-WEB-MIXED closed
- **Verdict**: **ML5 FOUNDATION QUALIFIED WITH EXPLICIT CAPABILITY RESERVES — RECETTE SCOPE DECISION REQUIRED**
- **Handoff**: REQUIRED / PUBLISH-IN-CYCLE

## 1. Git Truth
```
c574d262 fix(next): ML5 native input_tokens bounds, max_tool_calls, FinOps/D6/PDF residuals

 ...as-built-ml5-provider-native-bounds-20261126.md |  36 ++
 .../construction/delivery-history.md               |  13 +
 ...web-public-hosted-bound-arbitration-20261126.md |  40 +-
 .../ml5-recette-manifest-candidate-20261126.md     |  54 +-
 .../ml5-sequence-d-web-pdf-residual-20261126.md    |  38 ++
 .../web/scripts/ml5-g-live-api-convergence.mjs     | 175 ++++--
 .../web/scripts/ml5-g-live-native-input-count.mts  | 241 ++++++++
 .../web/src/components/documents/PdfViewer.tsx     |  24 +-
 .../conversation/provider-emission-frontier.ts     | 626 ++++++++++++++++++---
 .../conversation/web-public-query-authority.ts     | 415 +++++++++++++-
 .../src/domains/documents/pdf-extract-server.ts    | 182 +++++-
 .../web/src/domains/documents/pdf-read-contract.ts |  43 ++
 .../ml5-pdf-viewer-authorization.pg.test.ts        | 362 ++++++++++++
 .../integration/ml5-web-query-authority.pg.test.ts | 172 ++++++
 .../web/tests/unit/ml5-pdf-extract.test.ts         |  84 ++-
 .../unit/ml5-provider-emission-frontier.test.ts    | 192 ++++++-
 ...ovider-sdk-agents-tool-loop.integration.test.ts |  25 +-
 .../web/tests/unit/ml5-web-query-authority.test.ts | 264 ++++++++-
 18 files changed, 2782 insertions(+), 204 deletions(-)

```

## 2. Sources and authorizations
SFIA v2.6 Next §4.3.0b; OpenAI input_tokens + max_tool_calls docs verified against openai@7.50 / agents@0.21; handoff 73aedc69 entry; Chantiers360 capitalised (not re-run).

## 3. Sequence A — Native input_tokens
- SDK: `client.responses.inputTokens.count` present (non-beta + beta).
- Frontier: count URL separate envelope; requireNativeInputBound; fingerprint; no estimate-as-guarantee; no fetch recursion as generation.
- LIVE: count=28 ≡ usage.input_tokens=28; modelApplied=gpt-6.1-terra.

## 4. Sequence B — max_tool_calls / hosted
- Injected when web_search + maxHostedSearches; ASSUMED_1 refused.
- Bounds built-in tool calls ≠ billed search units → **G-WEB-PUBLIC BLOCKED**.

## 5. Sequence C — FinOps same scope
```json
{
  "workId": "cgw_b20fcbe3-d00a-4919-aebf-bf669bd65e62",
  "projectId": "proj_fdd9b064-a8a4-4296-bb6b-e8b64ebe914d",
  "campaign": "g-live-api-convergence-20261126",
  "scope": "cognitiveWorkId",
  "postgres": {
    "rows": 16,
    "correlation_rows": 8,
    "usage_rows": 8,
    "billable_provider_requests": 8,
    "input_tokens": 119362,
    "output_tokens": 4015,
    "total_tokens": 123377
  },
  "api_finops_works_detail": {
    "http": 200,
    "providerRequests": 8,
    "totalTokens": 123377,
    "estimatedCostUsd": 0.05294615,
    "costKind": "partial",
    "timelineRows": 16,
    "segmentCount": 2
  },
  "reconciliation": {
    "providerRequests_match": true,
    "totalTokens_match": true,
    "timeline_includes_correlation": true,
    "double_count_provider_requests": false,
    "note": "period=7 pilot totals are out of scope for this comparison"
  },
  "verdict": "PASS \u2014 same-scope PG/API reconciliation"
}
```

### Browser UI
```json
{
  "page": "http://127.0.0.1:3100/settings/consumption",
  "authenticated": true,
  "api_same_session": {
    "workId": "cgw_b20fcbe3-d00a-4919-aebf-bf669bd65e62",
    "providerRequests": 8,
    "totalTokens": 123377,
    "estimatedCostUsd": 0.05294615,
    "costKind": "partial",
    "match_pg": true
  },
  "summary_period7_pilot": {
    "totalRequests": 170,
    "note": "pilot/period scope \u2014 not comparable to single-work 8"
  },
  "ui": {
    "heading": "Consommation et co\u00fbts",
    "disclaimer": "estimations tarifaires locales, non rapproch\u00e9es d'une facture fournisseur",
    "filters_present": [
      "P\u00e9riode",
      "Projet",
      "Mod\u00e8le"
    ]
  },
  "work_detail_dom": {
    "url": "http://127.0.0.1:3100/settings/consumption/travaux/cgw_b20fcbe3-d00a-4919-aebf-bf669bd65e62",
    "requests": 8,
    "tokens": 123377,
    "estimatedCostUsdApprox": 0.05,
    "segments": 2,
    "matches_api_and_pg": true,
    "timeline_shows_partial_rows": true
  }
}
```

## 6. Sequence D — D6/PDF
- WEB authority residual tests extended; PDF PG endpoint 8 PASS; extract limits extended.
- Git PDF text: BLOCKED CORPUS MISSING.

## 7. LIVE native count report
```json
{
  "gate": "G-LIVE-API",
  "focus": "native_input_tokens_count",
  "startedAt": "2026-11-26T17:22:09.653Z",
  "out": "/tmp/sfia-ml5-g-live-native-count-20261126",
  "criteria": [
    {
      "id": "A-NATIVE-COUNT-HTTP",
      "status": "PASS",
      "detail": "input_tokens=28 object=response.input_tokens"
    },
    {
      "id": "A-RESPONSES-USAGE",
      "status": "PASS",
      "detail": "usage.in=28 out=8 model=gpt-6.1-terra"
    },
    {
      "id": "A-COUNT-VS-USAGE",
      "status": "PASS",
      "detail": "count=28 usageIn=28 delta=0 ratio=1"
    },
    {
      "id": "A-COUNT-ATTEMPTS-TRACKED",
      "status": "PASS",
      "detail": "countCommitted=2 httpCommitted=1"
    },
    {
      "id": "A-TRANSPORT-ORACLE",
      "status": "PASS",
      "detail": "countCalls=2 respCalls=1 transportN=3"
    },
    {
      "id": "C-MODEL-APPLIED",
      "status": "PASS",
      "detail": "modelApplied=gpt-6.1-terra"
    }
  ],
  "verdict": "G-LIVE-NATIVE-COUNT PASS — ALL MANDATORY CRITERIA",
  "endedAt": "2026-11-26T17:22:14.023Z"
}
```

## 8. Manifeste
```markdown
# ML5 — Manifeste candidat RECETTE (régularisation native 2026-11-26)

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD code | *(figé au commit de régularisation — voir delivery-history)* |
| BUILD_ID | *(figé au build production post-commit)* |
| Lock | `@openai/agents@0.21.0` · `openai@7.50.0` · `pdfjs-dist@4.10.38` |
| Schéma | `022_provider_usage_observations` — **aucune migration** |
| Classe | **NO RELEASE** |
| Cutover | **NON APPLIQUÉ** |
| G-RECETTE | **NON CONSOMMÉ** |
| WEB LIVE | **OFF** |
| G-WEB-MIXED | **FERMÉ** |
| Politique DEV | v0.2 provisoire (Terra Medium défaut) |
| Extension v0.2 → RECETTE | **Proposition bornée — non activée** (décision Morris) |

## Capacités

| Capacité | État |
|---|---|
| Comptage natif `POST /v1/responses/input_tokens` | **LIVE PASS** — count ≡ usage (28=28) |
| Frontière : native bound obligatoire si enveloppe stricte | DETERMINISTIC + LIVE |
| Injection `max_output_tokens` | DETERMINISTIC PROVEN |
| Injection `max_tool_calls` (hosted) | DETERMINISTIC PROVEN — **≠** unité facturée hosted |
| Agents SDK tool-loop multi-Responses + count | DETERMINISTIC PROVEN |
| Investigation LIVE Chantiers360 | LIVE PASS capitalisé (non rejoué) |
| FinOps PG ↔ API ↔ UI même work scope | **PASS** (`cgw_b20fcbe3…` : 8 req / 123377 tok) |
| PDF viewer auth PG endpoint | DETERMINISTIC PG PASS (8 scénarios) |
| D6 WEB authority residual (purpose/destination/policy/revocation/expiry) | DETERMINISTIC extended |
| G-WEB-PUBLIC | **BLOCKED** — borne hosted facturable non établie |
| Git PDF text LIVE | **BLOCKED CORPUS MISSING** |
| F2 visuelle | réservée Morris |

## Politique RECETTE proposée (non activée)

- Terra Medium défaut ; Sol L/M/H admis ; Luna L/M expérimentaux **hors** RECETTE sauf GO Morris
- Terra High candidat sans promotion implicite ; rollback `legacy_sol`
- WEB OFF par défaut ; WEB public soumis au gate ; G-WEB-MIXED fermé
- FinOps + OBS ; PDF sur chemins qualifiés
- Isolation fingerprints lane ; dataset DEV isolé

## Réserves A/B/C/D

| Id | Classe | Isolation / exit |
|---|---|---|
| R-G-WEB-PUBLIC-HOSTED | B | WEB OFF ; arbitrage `max_tool_calls` actualisé — GO Morris alternatif 1–3 |
| R-GIT-PDF-TEXT | B | capacité isolée — corpus textuel autorisé manquant |
| R-F2 | C | Morris |
| R-WEB05 | C | si gate WEB ouvert plus tard |
| R-MODEL-APPLIED | D↓C | LIVE count a observé `model=gpt-6.1-terra` ; conserver UNVERIFIED si non observable |

**Aucune réserve A ouverte.**

## Smoke (DEV artefact)

- `/login` 200 · `/settings/consumption` 200 (DOM KPIs) · work detail 8 req / 123 377 tok
- RECETTE :3200 non mutée · gel `a150926c` inchangé

## Rollback RECETTE (procédure — non exécutée)

1. Ne pas cutover tant que GO Morris absent.
2. Si cutover futur : restaurer gel RECETTE `a150926c` (artefact + schéma + flags WEB OFF) — un revert DEV seul ≠ rollback RECETTE.
3. Vérifier ports 3200/5434, fingerprints, smoke post-restauration.

## Verdict manifeste

**CANDIDATE PREPARED — NATIVE PROVIDER BOUNDS QUALIFIED — CUTOVER NOT APPLIED — CAPABILITY RESERVES (WEB PUBLIC / GIT PDF) EXPLICIT.**

```

## 9. Hosted arbitration
```markdown
# G-WEB-PUBLIC — Dossier d'arbitrage borne hosted (2026-11-26, màj régularisation)

Classe : **réserve B** · Gate : **FERMÉ** · Aucune acceptation implicite de `ASSUMED_1`.

## Qualification `max_tool_calls` (openai@7.50 / Responses)

| Question | Résultat |
|---|---|
| Support SDK verrouillé | **Oui** — champ `max_tool_calls` sur Responses create (`responses.d.ts`). |
| Passage payload final | **Oui** — `injectMaxToolCallsForHostedCampaign` injecte `max_tool_calls: 1` (ou budget restant) lorsque `web_search` / `web_search_preview` est présent et `maxHostedSearches` est défini. |
| Override silencieux | **Non** — si déjà présent, conservé. |
| Portée | **Par Response** — plafond du nombre total d'appels aux **outils intégrés** (built-in), tous outils confondus, pas par outil. |
| Retries | Chaque nouvelle tentative HTTP Responses ré-applique le contrôle / réservation. |
| Unité facturée | **Non établie** — OpenAI documente des `web_search_call` avec actions `search` / `open_page` / `find_in_page` ; une action peut contenir plusieurs queries. `max_tool_calls: 1` ≠ 1 recherche facturée. |
| `return_token_budget` | Qualifié doc : valeurs `default` \| `unlimited` sur outil `web_search` (GPT-5+ reasoning). **Ne borne pas** la consommation tokens fournisseur globale ; ne remplace pas l'enveloppe cumulée. |

## Limite réellement disponible aujourd'hui

- Studio **refuse** désormais `HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1` comme réservation (`HOSTED_BOUND_REQUIRES_MAX_TOOL_CALLS` si outil hosted sans `max_tool_calls`).
- Avec injection : réservation campagne = valeur `max_tool_calls` (budget d'appels built-in), **pas** une garantie d'unités de recherche facturées.
- Ouvertures directes B1 : bornées séparément (`maxDirectOpens`), consommées **avant** egress (succès ou échec).

## Garantie fournisseur

`max_tool_calls` borne les appels d'outils intégrés par Response. Il **n'établit pas** :

1 Response = 1 recherche = 1 unité facturée.

Aucune métrique hosted « N recherches facturées » distincte n'est exposée de façon opposable dans ce candidat.

## Risque résiduel

Sous-comptage des unités facturées / queries internes si G-WEB-PUBLIC était ouvert en assimilant `max_tool_calls` à des recherches hosted facturables.

## Alternative d'enveloppe proposée à Morris

1. **Maintenir G-WEB-PUBLIC fermé** jusqu'à une borne démontrable sur l'unité réellement recherchée (recherches / frais outil).
2. Ou : enveloppe **built-in tool-calls** explicite (ex. max 5 × `max_tool_calls: 1` Responses) — accepter par écrit que l'unité contrôlée est l'appel built-in, **pas** la facturation hosted fine.
3. Ou : désactiver hosted tool et n'autoriser que les ouvertures directes B1 sous `maxDirectOpens`.

## Conséquences

- Financière : frais hosted non bornés strictement au niveau « recherche facturée » si gate ouvert sous seule `max_tool_calls`.
- Sécurité : périmètre WEB LIVE inchangé (DEV, projet public only) ; G-WEB-MIXED reste fermé.
- Proposition cycle : **ne pas consommer G-WEB-PUBLIC** ; conserver WEB OFF sur le candidat RECETTE.

## Exit

GO Morris sur l'une des alternatives 1–3, ou preuve LIVE que l'unité facturée est effectivement bornée par le mécanisme retenu.

```

## 10. Created files

### `projects/sfia-studio-next/web/scripts/ml5-g-live-native-input-count.mts`
```
/**
 * G-LIVE-API targeted — native responses.inputTokens.count vs usage.
 * WEB OFF. Does NOT re-run Chantiers360 investigation.
 */
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = `/tmp/sfia-ml5-g-live-native-count-${new Date()
  .toISOString()
  .slice(0, 10)
  .replace(/-/g, "")}`;
mkdirSync(OUT, { recursive: true });
const save = (n, v) =>
  writeFileSync(join(OUT, `${n}.json`), JSON.stringify(v, null, 2));

const criteria = [];
const record = (id, status, detail) => {
  criteria.push({ id, status, detail });
  console.log(`[${status}] ${id} — ${detail}`);
};

function loadEnvLocal() {
  const p = join(process.cwd(), ".env.local");
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const i = line.indexOf("=");
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    )
      v = v.slice(1, -1);
    if (!(k in process.env) || process.env[k] === "") process.env[k] = v;
  }
}

async function main() {
  loadEnvLocal();
  process.env.STUDIO_LANE = "DEV";
  process.env.SFIA_WEB_SEARCH_LIVE = "0";
  process.env.SFIA_WEB_SEARCH_ENABLED = "0";
  process.env.SFIA_G_LIVE_API = "1";
  process.env.SFIA_G_WEB_PUBLIC = "0";
  process.env.SFIA_LIVE_CAMPAIGN_ID = "g-live-native-count-20261126";
  process.env.SFIA_LIVE_MAX_HTTP_ATTEMPTS = "4";
  process.env.SFIA_LIVE_MAX_INPUT_TOKEN_COUNT_ATTEMPTS = "8";
  process.env.SFIA_LIVE_MAX_INPUT_TOKENS = "600000";
  process.env.SFIA_LIVE_MAX_OUTPUT_TOKENS = "60000";
  process.env.SFIA_LIVE_MAX_INPUT_TOKENS_PER_REQ = "100000";
  process.env.SFIA_LIVE_MAX_OUTPUT_TOKENS_PER_REQ = "512";

  const key = (process.env.OPENAI_API_KEY || "").trim();
  if (!key) throw new Error("OPENAI_API_KEY missing");
  const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
  const expected = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "").trim();
  if (expected && expected !== fp) {
    throw new Error(`KEY_FP mismatch expected=${expected} actual=${fp}`);
  }

  const {
    runWithProviderEmissionStoreAsync,
    attachConfiguredLiveCampaignFromEnv,
    createFrontierAwareFetch,
    enableHttpMetaCaptureForTests,
    ensureFrontierOpenAIClientInstalled,
    getActiveCampaignEnvelope,
    getHttpBodiesObservedForTests,
    endProcessCampaign,
    endRequiredCampaignLatch,
  } = await import("@/domains/conversation/provider-emission-frontier");

  const report = {
    gate: "G-LIVE-API",
    focus: "native_input_tokens_count",
    startedAt: new Date().toISOString(),
    out: OUT,
    criteria,
  };

  await runWithProviderEmissionStoreAsync(async () => {
    const campaign = attachConfiguredLiveCampaignFromEnv();
    enableHttpMetaCaptureForTests();
    const baseFetch = globalThis.fetch.bind(globalThis);
    const transportLog = [];
    const loggingFetch = (async (input, init) => {
      const url = String(input);
      transportLog.push({
        url,
        method: (init?.method || "POST").toUpperCase(),
        isCount: url.includes("/input_tokens"),
        isResponses: /\/responses\/?(\?|$)/.test(url) && !url.includes("input_tokens"),
      });
      return baseFetch(input, init);
    });
    await ensureFrontierOpenAIClientInstalled({
      forceReinstall: true,
      fetch: createFrontierAwareFetch(loggingFetch),
      maxRetries: 1,
      requireCampaign: true,
    });

    const OpenAI = (await import("openai")).default;
    const { setDefaultOpenAIClient } = await import("@openai/agents");
    const client = new OpenAI({
      apiKey: key,
      fetch: createFrontierAwareFetch(loggingFetch),
      maxRetries: 1,
    });
    setDefaultOpenAIClient(client);

    const body = {
      model: "gpt-6.1-terra",
      instructions: "Reply with exactly: NATIVE_COUNT_OK",
      input: [
        {
          type: "message",
          role: "user",
          content: "Qualification ping — reply NATIVE_COUNT_OK only.",
        },
      ],
      max_output_tokens: 32,
    };

    // Direct native count via SDK
    const countPayload = {
      model: body.model,
      instructions: body.instructions,
      input: body.input,
    };
    const countRes = await client.responses.inputTokens.count(countPayload);
    save("01-native-count", countRes);
    const counted = Number(countRes?.input_tokens ?? 0);
    record(
      "A-NATIVE-COUNT-HTTP",
      counted > 0 && countRes?.object === "response.input_tokens" ? "PASS" : "FAIL",
      `input_tokens=${counted} object=${countRes?.object}`,
    );

    // Responses create through frontier (will count again if fingerprint path requires)
    const createRes = await client.responses.create({
      ...body,
      reasoning: { effort: "medium" },
    });
    save("02-responses-create", {
      id: createRes.id,
      model: createRes.model,
      usage: createRes.usage,
      status: createRes.status,
      output_text:
        createRes.output_text ??
        JSON.stringify(createRes.output ?? []).slice(0, 500),
    });
    const usedIn = Number(createRes.usage?.input_tokens ?? 0);
    const usedOut = Number(createRes.usage?.output_tokens ?? 0);
    record(
      "A-RESPONSES-USAGE",
      usedIn > 0 ? "PASS" : "FAIL",
      `usage.in=${usedIn} out=${usedOut} model=${createRes.model}`,
    );

    // Compare count vs usage — allow delta explanation
    const delta = usedIn - counted;
    const ratio = counted > 0 ? usedIn / counted : null;
    const countCompare =
      counted > 0 && usedIn > 0 && Math.abs(delta) / Math.max(counted, 1) <= 0.35
        ? "PASS"
        : counted > 0 && usedIn > 0
          ? "PARTIAL"
          : "FAIL";
    record(
      "A-COUNT-VS-USAGE",
      countCompare,
      `count=${counted} usageIn=${usedIn} delta=${delta} ratio=${ratio}`,
    );

    const camp = getActiveCampaignEnvelope();
    save("03-campaign", {
      campaignId: camp?.campaignId,
      httpAttemptsCommitted: camp?.httpAttemptsCommitted,
      inputTokenCountAttemptsCommitted: camp?.inputTokenCountAttemptsCommitted,
      inputTokensReserved: camp?.inputTokensReserved,
      inputTokensCommitted: camp?.inputTokensCommitted,
      requireNativeInputBound: camp?.requireNativeInputBound,
    });
    record(
      "A-COUNT-ATTEMPTS-TRACKED",
      (camp?.inputTokenCountAttemptsCommitted ?? 0) >= 1 ? "PASS" : "FAIL",
      `countCommitted=${camp?.inputTokenCountAttemptsCommitted} httpCommitted=${camp?.httpAttemptsCommitted}`,
    );

    const bodies = getHttpBodiesObservedForTests();
    save("04-transport-oracle", { transportLog, bodies });
    const countCalls = transportLog.filter((t) => t.isCount).length;
    const respCalls = transportLog.filter((t) => t.isResponses).length;
    record(
      "A-TRANSPORT-ORACLE",
      countCalls >= 1 && respCalls >= 1 ? "PASS" : "FAIL",
      `countCalls=${countCalls} respCalls=${respCalls} transportN=${transportLog.length}`,
    );

    // modelApplied observability
    const modelApplied =
      typeof createRes.model === "string" && createRes.model.trim()
        ? createRes.model.trim()
        : "UNVERIFIED";
    record(
      "C-MODEL-APPLIED",
      modelApplied !== "UNVERIFIED" ? "PASS" : "PARTIAL",
      `modelApplied=${modelApplied}`,
    );

    endProcessCampaign(campaign?.campaignId);
    endRequiredCampaignLatch();
  });

  const failed = criteria.filter((c) => c.status === "FAIL");
  const blocked = criteria.filter((c) => c.status === "BLOCKED");
  const partial = criteria.filter((c) => c.status === "PARTIAL");
  const notRun = criteria.filter((c) => c.status === "NOT RUN");
  let verdict;
  if (failed.length) verdict = "G-LIVE-NATIVE-COUNT FAIL";
  else if (blocked.length) verdict = "G-LIVE-NATIVE-COUNT BLOCKED";
  else if (partial.length) verdict = "G-LIVE-NATIVE-COUNT PARTIAL";
  else if (notRun.length) verdict = "G-LIVE-NATIVE-COUNT INCOMPLETE";
  else verdict = "G-LIVE-NATIVE-COUNT PASS — ALL MANDATORY CRITERIA";

  report.verdict = verdict;
  report.endedAt = new Date().toISOString();
  report.criteria = criteria;
  save("00-report", report);
  console.log(JSON.stringify({ verdict, out: OUT, failed: failed.length, partial: partial.length }, null, 2));
  if (failed.length) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

```

### `projects/sfia-studio-next/web/tests/integration/ml5-pdf-viewer-authorization.pg.test.ts`
```
/**
 * Sequence D / D3 — PDF viewer endpoint with real DEV PG habilitation (:5433 → e2e).
 * Oracle: HTTP status + returned bytes. viewerToken alone is never authority.
 */
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  cognitiveWorks,
  pilots,
  preparations,
  projects,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  __resetWebPageSessionsForTests,
  putWebPageSession,
} from "@/domains/conversation/public-web-page-session";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  openOrCreatePreparation,
  updatePreview,
} from "@/domains/preparation/service";

vi.mock("@/domains/identity/session", () => ({
  requireStudioSession: vi.fn(),
}));

import { requireStudioSession } from "@/domains/identity/session";
import { GET } from "@/app/api/web/pdf-viewer/[viewerToken]/route";

const PDF_BYTES = new Uint8Array([
  0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x34, 0x0a, 0x25, 0xe2, 0xe3, 0xcf,
  0xd3,
]);

const dockerOk = () => Boolean(process.env.DATABASE_URL?.includes("5433"));

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({
    id,
    displayName: label,
    githubUserId: `gh-${id}`,
  });
  return id;
}

async function seedOwnerProjectWork(label: string) {
  const ownerPilotId = await seedPilot(`${label}-owner`);
  const otherPilotId = await seedPilot(`${label}-other`);

  const prep = await openOrCreatePreparation(ownerPilotId);
  await updatePreview(ownerPilotId, prep.id, `${label}-proj`, "PDF auth PG");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  const created = await createProjectCommand({
    pilotId: ownerPilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: `${label}-proj`,
    previewSummary: "PDF auth PG",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`project create failed: ${created.status}`);
  }
  const projectId = created.projectId!;

  const workId = newId("cgw");
  await db.insert(cognitiveWorks).values({
    id: workId,
    ownerPilotId,
    preparationId: prep.id,
    projectId,
    status: "RUNNING",
    revision: 1,
    objective: "PDF viewer auth",
    expectedOutcome: "bytes",
    stateJson: "{}",
    resourcesJson: "{}",
    productionJson: "{}",
  });

  return {
    ownerPilotId,
    otherPilotId,
    projectId,
    cognitiveWorkId: workId,
    preparationId: prep.id,
  };
}

function seedSession(scope: {
  lane: string;
  projectId: string;
  cognitiveWorkId: string;
  ownerPilotId: string;
}, fingerprint = "fp-pg-v1") {
  return putWebPageSession({
    scope,
    url: "https://example.com/pg-auth.pdf",
    kind: "pdf",
    text: "page1",
    pageCount: 1,
    contentFingerprint: fingerprint,
    pdfBytes: PDF_BYTES,
    limits: ["PG_TEST"],
  });
}

describe.skipIf(!dockerOk())("ML5 PDF viewer authorization PG endpoint", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
  });

  beforeEach(() => {
    __resetWebPageSessionsForTests();
    vi.mocked(requireStudioSession).mockReset();
    process.env.STUDIO_LANE = "DEV";
  });

  it("nominal GET 200 returns exact PDF bytes", async () => {
    const seed = await seedOwnerProjectWork("pdf-nom");
    const page = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    });
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Owner",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(200);
    const buf = new Uint8Array(await res.arrayBuffer());
    expect([...buf]).toEqual([...PDF_BYTES]);
    expect(res.headers.get("X-Content-Fingerprint")).toBe("fp-pg-v1");
  });

  it("other pilot → 403 VIEWER_OWNER_MISMATCH (no bytes)", async () => {
    const seed = await seedOwnerProjectWork("pdf-other-pilot");
    const page = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    });
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.otherPilotId,
      displayName: "Intruder",
      sessionId: "pg-sess-2",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.error).toBe("VIEWER_OWNER_MISMATCH");
    expect(res.headers.get("Content-Type")).not.toMatch(/pdf/i);
  });

  it("other project work binding → 403", async () => {
    const seed = await seedOwnerProjectWork("pdf-other-proj");
    const alienWork = newId("cgw");
    await db.insert(cognitiveWorks).values({
      id: alienWork,
      ownerPilotId: seed.ownerPilotId,
      preparationId: seed.preparationId,
      projectId: null,
      status: "RUNNING",
      revision: 1,
      objective: "unbound",
      expectedOutcome: "x",
      stateJson: "{}",
      resourcesJson: "{}",
      productionJson: "{}",
    });
    const page = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: alienWork,
      ownerPilotId: seed.ownerPilotId,
    });
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Owner",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(403);
    const body = await res.json();
    expect([
      "VIEWER_WORK_PROJECT_REQUIRED",
      "VIEWER_WORK_PROJECT_MISMATCH",
      "VIEWER_PROJECT_ACCESS_DENIED",
    ]).toContain(body.error);
  });

  it("habilitation revoked (project ownership transferred) → 403", async () => {
    const seed = await seedOwnerProjectWork("pdf-revoked");
    await db
      .update(projects)
      .set({ ownerPilotId: seed.otherPilotId })
      .where(eq(projects.id, seed.projectId));
    const page = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    });
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Former",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.error).toBe("VIEWER_PROJECT_ACCESS_DENIED");
  });

  it("wrong lane → 403 VIEWER_LANE_MISMATCH", async () => {
    const seed = await seedOwnerProjectWork("pdf-lane");
    const page = seedSession({
      lane: "RECETTE",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    });
    process.env.STUDIO_LANE = "DEV";
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Owner",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.error).toBe("VIEWER_LANE_MISMATCH");
  });

  it("expired token → 410", async () => {
    const seed = await seedOwnerProjectWork("pdf-exp");
    const page = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    });
    // Force expiry via session map mutation through put with past TTL env.
    const prev = process.env.SFIA_WEB_PAGE_SESSION_TTL_MS;
    process.env.SFIA_WEB_PAGE_SESSION_TTL_MS = "1";
    __resetWebPageSessionsForTests();
    const short = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    });
    await new Promise((r) => setTimeout(r, 5));
    if (prev === undefined) delete process.env.SFIA_WEB_PAGE_SESSION_TTL_MS;
    else process.env.SFIA_WEB_PAGE_SESSION_TTL_MS = prev;

    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Owner",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: short.viewerToken }),
    });
    // Expired sessions may be purged (404) or assessed as 410.
    expect([410, 404]).toContain(res.status);
    if (res.status === 410) {
      const body = await res.json();
      expect(body.error).toBe("VIEWER_SESSION_EXPIRED");
    }
  });

  it("invalid work attachment (unknown work id) → 403", async () => {
    const seed = await seedOwnerProjectWork("pdf-bad-work");
    const page = seedSession({
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: newId("cgw"),
      ownerPilotId: seed.ownerPilotId,
    });
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Owner",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const res = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: page.viewerToken }),
    });
    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.error).toBe("VIEWER_PROJECT_ACCESS_DENIED");
  });

  it("version changed rotates token — old token 404, new 200", async () => {
    const seed = await seedOwnerProjectWork("pdf-ver");
    const scope = {
      lane: "DEV",
      projectId: seed.projectId,
      cognitiveWorkId: seed.cognitiveWorkId,
      ownerPilotId: seed.ownerPilotId,
    };
    const first = seedSession(scope, "fp-old");
    const second = putWebPageSession({
      scope,
      url: "https://example.com/pg-auth.pdf",
      kind: "pdf",
      text: "page1-rev",
      pageCount: 1,
      contentFingerprint: "fp-new",
      pdfBytes: new Uint8Array([...PDF_BYTES, 0x0a]),
      limits: [],
    });
    expect(second.viewerToken).not.toBe(first.viewerToken);
    vi.mocked(requireStudioSession).mockResolvedValue({
      pilotId: seed.ownerPilotId,
      displayName: "Owner",
      sessionId: "pg-sess",
      authMode: "dev-test-login",
    });
    const oldRes = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: first.viewerToken }),
    });
    expect(oldRes.status).toBe(404);
    const newRes = await GET(new Request("http://test"), {
      params: Promise.resolve({ viewerToken: second.viewerToken }),
    });
    expect(newRes.status).toBe(200);
    expect(newRes.headers.get("X-Content-Fingerprint")).toBe("fp-new");
    const buf = new Uint8Array(await newRes.arrayBuffer());
    expect(buf.byteLength).toBe(PDF_BYTES.byteLength + 1);
  });
});

```

### `projects/sfia-studio-next/web/tests/integration/ml5-web-query-authority.pg.test.ts`
```
/**
 * Sequence D / D1 — real inspect → apply → reverify → revoke path on DEV PG.
 * Does not inject a pre-built HumanDecision into a helper alone.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { humanDecisions, pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { insertHumanDecision } from "@/domains/decisions/service";
import {
  applyWebPublicQueryAuthorityDecision,
  inspectWebPublicQueryAuthorityCandidate,
  reverifyWebPublicQueryAuthorityAtEgress,
} from "@/domains/conversation/web-public-query-authority";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  openOrCreatePreparation,
  updatePreview,
} from "@/domains/preparation/service";

const dockerOk = () => Boolean(process.env.DATABASE_URL?.includes("5433"));
const QUERY = "HTTP/3 site:datatracker.ietf.org";
const POLICY = "ml5-cog-policy-v5-provisional-v0.2-20261126";

describe.skipIf(!dockerOk())("ML5 WEB D6 inspect→apply→egress PG", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
  });

  it("create via inspect+apply, reverify ok, revoke denies checkpoint reuse", async () => {
    const pilotId = newId("pilot");
    await db.insert(pilots).values({
      id: pilotId,
      displayName: "D6-WEB",
      githubUserId: `gh-${pilotId}`,
    });
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, "D6-WEB-proj", "authority");
    const refreshed = (
      await db.select().from(preparations).where(eq(preparations.id, prep.id))
    )[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: "D6-WEB-proj",
      previewSummary: "authority",
      idempotencyKey: newId("idem"),
    });
    expect(["CREATED", "ALREADY_CREATED"]).toContain(created.status);
    const projectId = created.projectId!;

    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const inspected = inspectWebPublicQueryAuthorityCandidate({
      pilotText: `AUTHORIZE_PUBLIC_QUERY: "${QUERY}"`,
      projectId,
      pilotId,
      purpose: "public protocol documentation research",
      policyVersion: POLICY,
      expiresAt,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error("inspection failed");

    const applied = await applyWebPublicQueryAuthorityDecision({
      pilotId,
      projectId,
      inspection: inspected.inspection,
      inspectedFingerprint: inspected.inspection.inspectedFingerprint,
      confirmed: true,
      sourceRef: "pg-d6-web-act",
    });
    expect(applied.allowed).toBe(true);
    if (!applied.allowed) throw new Error("apply failed");

    const row = (
      await db
        .select()
        .from(humanDecisions)
        .where(eq(humanDecisions.id, applied.decisionId))
        .limit(1)
    )[0];
    expect(row?.kind).toBe("RECORD_DECISION");
    expect(row?.effectConditions).toContain("expiresAt");
    expect(row?.effectConditions).toContain("public_web_search");

    const ok = await reverifyWebPublicQueryAuthorityAtEgress({
      query: QUERY,
      projectId,
      pilotId,
      policyVersion: POLICY,
      decisionId: applied.decisionId,
    });
    expect(ok.allowed).toBe(true);

    // Checkpoint reuse after revoke must fail closed.
    await db.transaction(async (tx) => {
      await insertHumanDecision(tx, {
        projectId,
        pilotId,
        sourceKind: "WEB_PUBLIC_QUERY",
        sourceRef: "revoke-act",
        kind: "REVOKE_DECISION",
        objectRef: inspected.inspection.objectRef,
        statement: "revoke WEB query",
        revokesDecisionId: applied.decisionId,
      });
    });

    const denied = await reverifyWebPublicQueryAuthorityAtEgress({
      query: QUERY,
      projectId,
      pilotId,
      policyVersion: POLICY,
      decisionId: applied.decisionId,
    });
    expect(denied.allowed).toBe(false);
    if (denied.allowed) throw new Error("expected deny");
    expect(denied.reasonCode).toBe("REVOKED_OR_SUPERSEDED");

    // Expired binding reuse (synthetic past now).
    const expiredInspect = inspectWebPublicQueryAuthorityCandidate({
      pilotText: `AUTHORIZE_PUBLIC_QUERY: "RFC 9110 HTTP semantics"`,
      projectId,
      pilotId,
      purpose: "http semantics",
      policyVersion: POLICY,
      expiresAt: new Date(Date.now() + 30_000).toISOString(),
    });
    expect(expiredInspect.ok).toBe(true);
    if (!expiredInspect.ok) throw new Error("exp inspection failed");
    const expiredApply = await applyWebPublicQueryAuthorityDecision({
      pilotId,
      projectId,
      inspection: expiredInspect.inspection,
      inspectedFingerprint: expiredInspect.inspection.inspectedFingerprint,
      confirmed: true,
      sourceRef: "pg-d6-web-exp",
    });
    expect(expiredApply.allowed).toBe(true);
    if (!expiredApply.allowed) throw new Error("exp apply failed");
    const expiredReverify = await reverifyWebPublicQueryAuthorityAtEgress({
      query: "RFC 9110 HTTP semantics",
      projectId,
      pilotId,
      policyVersion: POLICY,
      decisionId: expiredApply.decisionId,
      now: Date.now() + 60_000,
    });
    expect(expiredReverify.allowed).toBe(false);
    if (expiredReverify.allowed) throw new Error("expected expire");
    expect(expiredReverify.reasonCode).toBe("EXPIRED");

    // Ensure revoke row exists (opposable history).
    const revokeRows = await db
      .select({ id: humanDecisions.id })
      .from(humanDecisions)
      .where(
        and(
          eq(humanDecisions.projectId, projectId),
          eq(humanDecisions.kind, "REVOKE_DECISION"),
          eq(humanDecisions.revokesDecisionId, applied.decisionId),
        ),
      );
    expect(revokeRows.length).toBeGreaterThanOrEqual(1);
  });
});

```

### `projects/sfia-studio-next/construction/as-built-ml5-provider-native-bounds-20261126.md`
```
# As-built — Comptage natif fournisseur, max_tool_calls, FinOps même périmètre (2026-11-26)

## Causes racines traitées

1. **Estimation `len/3` présentée comme borne** → remplacée, pour enveloppes strictes, par `client.responses.inputTokens.count` (`openai@7.50`) avant émission Responses.
2. **`HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1`** → refus ; injection / exigence de `max_tool_calls` ; arbitrage : borne = appels built-in, **pas** recherches facturées.
3. **FinOps comparaison campagne vs period=7 pilot** → réconciliation work-scope `cgw_b20fcbe3…` ; script verdict refuse ALL PASS si PARTIAL/BLOCKED/NOT RUN.

## Contrat de comptage

- Payload count = sous-ensemble `InputTokenCountParams` (model, input, instructions, tools, reasoning, …).
- `max_output_tokens` / `max_tool_calls` exclus du count (injectés après).
- Fingerprint SHA-256 des champs count ; ALS `nativeInputCount` ; récursion fetch évitée via URL `/responses/input_tokens`.
- Compteurs campagne distincts `inputTokenCountAttempts*` ; pas d’attribution de coût de génération au comptage.
- LIVE : count=28 ≡ usage.input_tokens=28 ; modelApplied observé `gpt-6.1-terra`.

## FinOps

- PG : 16 rows (8 usage + 8 correlation) ; billable requests 8.
- API/UI work detail : 8 requêtes, 123 377 tokens, coût PARTIAL ~0,05 $.
- Timeline conserve les lignes de corrélation ; agrégats les excluent.

## D6 / PDF

- Authority WEB : contrôles purpose/destination/scope/policyVersion/révocation/expiration étendus (tests unit).
- PDF endpoint PG : 8 scénarios PASS (owner/other/lane/expiry/version/work).
- Robustesse extract : limites documentées/étendues dans `pdf-extract-server` / contract.

## Gates

| Gate | Statut |
|---|---|
| G-LIVE-API (count ciblé) | CONSUMED — PASS |
| G-WEB-PUBLIC | NOT CONSUMED — BLOCKED |
| G-WEB-MIXED | CLOSED |
| G-RECETTE | NOT CONSUMED |

```

### `projects/sfia-studio-next/construction/ml5-sequence-d-web-pdf-residual-20261126.md`
```
# Sequence D — residual D6 WEB authority + PDF rights/robustness (2026-11-26)

Classe : **NO RELEASE** · Lane : **DEV** · G-WEB-PUBLIC LIVE : **NON CONSOMMÉ** · RECETTE : **NON MUTÉE**

## Gaps closed (this sequence)

| Contrôle | Statut |
|---|---|
| Finalité (`purpose`) | Fail-closed dans effectConditions + match optionnel à l'egress |
| Destination (`public_web_search`) | Fail-closed |
| Scope projet / pilot | Fail-closed |
| Droits courants (ownership projet) | Re-proof à apply + egress (`CURRENT_RIGHTS_DENIED`) |
| Version de politique | **Requise** à validate / reverify / frontier |
| Révocation | `REVOKE_DECISION` APPLICABLE au dernier mile |
| Expiration | `expiresAt` obligatoire dans effectConditions |
| Réutilisation checkpoint | `decisionId` + reverify (expiry/révocation/droits) |
| Parcours inspect → apply | `inspectWebPublicQueryAuthorityCandidate` → `applyWebPublicQueryAuthorityDecision` (RECORD_DECISION + effectConditions) |
| PDF endpoint PG | Tests nominal / autre pilot / projet / révoqué / lane / expiré / work / version |
| PDF limites size/pages/chars/time/concurrency/cancel/active-content/render-dims | Qualifiées ou bloquées explicitement |

## GIT PDF LIVE — BLOCKED CORPUS MISSING

Recherche sur le dépôt autorisé DEV `mcleland147/chantiers360` (commit/HEAD) : **un seul PDF** — `Diagramme BPMN_BatiNova.pdf` (déjà qualifié `SCANNED_NO_TEXT`). Aucun corpus textuel approprié. **Ne pas rejouer le BPMN scanné.** Aucun dépôt distant créé.

## Réserves B isolées (non contamination du socle)

| Id | Isolation |
|---|---|
| **R-GIT-PDF-TEXT** | Git PDF LIVE textuel — corpus manquant ; lecture/extract/viewer Git REAL non rejoués. Socle PDF WEB + fixture inchangé. |
| **R-PDF-RSS-ORACLE** | Mémoire RSS réelle non oraclée par pdfjs sous mandat ; budget decompress heuristique + timeout distincts. Exit : borne `DECOMPRESS_BUDGET_EXCEEDED` / `TIMEOUT`. |
| **R-D6-KIND** | Kind D6 dédié WEB — hors scope (RECORD_DECISION conservé ; GO Morris requis). |
| **R-WEB05 / G-WEB-PUBLIC** | Qualification confrontation multi-sources LIVE — **non consommée** ; WEB LIVE OFF. |
| **R-PDF-BROWSER-E2E** | Parcours navigateur complet (zoom/citation/nav) — harness unitaire ≠ preuve UX ; isolable pour F2/browser. |
| **R-LIVE-REENVELOPPE** | Retests LIVE 12.1/12.2 uniquement si comportement réellement modifié. |

## Non-objectifs respectés

- Pas de nouveau kind D6 · Pas d'OCR · Pas de GED · Pas de nouveau parser · Pas de service documentaire externe · Pas de push / remote repo · Pas de cutover RECETTE.

```

## 11. Code/test/script diffs
```diff
diff --git a/projects/sfia-studio-next/web/scripts/ml5-g-live-api-convergence.mjs b/projects/sfia-studio-next/web/scripts/ml5-g-live-api-convergence.mjs
index a35695ad..f2edc70e 100644
--- a/projects/sfia-studio-next/web/scripts/ml5-g-live-api-convergence.mjs
+++ b/projects/sfia-studio-next/web/scripts/ml5-g-live-api-convergence.mjs
@@ -274,7 +274,7 @@ try {
     `chars=${replyNote.length}`,
   );

-  // FinOps real API
+  // FinOps real API — period=7 summary is pilot/period scope, NOT campaign scope.
   const finopsSummary = await api("/api/finops/summary?period=7");
   save("05-finops-summary", finopsSummary);
   recordCriterion(
@@ -283,7 +283,9 @@ try {
     `status=${finopsSummary.status}`,
   );

-  const finopsWorks = await api("/api/finops/works?period=7");
+  const finopsWorks = await api(
+    `/api/finops/works?period=7&projectId=${encodeURIComponent(PROJECT_ID)}`,
+  );
   save("06-finops-works", finopsWorks);
   recordCriterion(
     "P3-FINOPS-WORKS",
@@ -291,8 +293,9 @@ try {
     `status=${finopsWorks.status}`,
   );

+  let finopsWork = null;
   if (workId) {
-    const finopsWork = await api(
+    finopsWork = await api(
       `/api/finops/works/${encodeURIComponent(workId)}?period=7`,
     );
     save("07-finops-work", finopsWork);
@@ -309,29 +312,35 @@ try {
   recordCriterion(
     "P3-FINOPS-UI",
     ui.status === 200 ? "PASS" : "FAIL",
-    `status=${ui.status}`,
+    `status=${ui.status} (HTTP shell only — browser UI not exercised here)`,
   );

-  const since = report.startedAt;
+  // Same-scope reconciliation: PG rows for THIS workId vs work-detail API KPIs.
+  // Never compare campaign-local billable sum against period=7 pilot totalRequests.
+  const usageScopeSql = workId
+    ? `cognitive_work_id='${workId.replace(/'/g, "''")}'`
+    : `created_at >= '${sinceSafe(report.startedAt)}'::timestamptz`;
   const usage = pgJson(
     `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY created_at), '[]'::json) FROM (
       SELECT id, created_at, cognitive_work_id, generation_id, attempt_id, operation,
-             input_tokens, output_tokens, provider_requests, estimated_cost_usd,
+             input_tokens, output_tokens, total_tokens, provider_requests, estimated_cost_usd,
              cost_coverage, granularity, limits_json
       FROM provider_usage_observations
-      WHERE created_at >= '${since}'::timestamptz
-      ORDER BY created_at LIMIT 120
+      WHERE ${usageScopeSql}
+      ORDER BY created_at LIMIT 500
     ) t;`,
   );
   const rows = Array.isArray(usage) ? usage : [];
-  const billable = rows.filter(
-    (r) =>
-      !(Array.isArray(r.limits_json) &&
-        r.limits_json.some((l) =>
-          String(l).includes("HTTP_ATTEMPT_USAGE_UNKNOWN") ||
-          String(l).includes("HTTP_ATTEMPT_CORRELATION_ONLY"),
-        )),
-  );
+  const isCorrOnly = (r) =>
+    Array.isArray(r.limits_json) &&
+    r.limits_json.some(
+      (l) =>
+        String(l) === "HTTP_ATTEMPT_USAGE_UNKNOWN" ||
+        String(l) === "HTTP_ATTEMPT_CORRELATION_ONLY" ||
+        String(l).includes("HTTP_ATTEMPT_USAGE_UNKNOWN") ||
+        String(l).includes("HTTP_ATTEMPT_CORRELATION_ONLY"),
+    );
+  const billable = rows.filter((r) => !isCorrOnly(r));
   const corrOnly = rows.length - billable.length;
   const sumReq = billable.reduce(
     (a, r) => a + (Number(r.provider_requests) || 0),
@@ -342,43 +351,129 @@ try {
     (a, r) => a + (Number(r.output_tokens) || 0),
     0,
   );
+  const sumCost = billable.reduce(
+    (a, r) => a + (Number(r.estimated_cost_usd) || 0),
+    0,
+  );
+  const apiWorkKpis = finopsWork?.json?.kpis ?? null;
+  const apiProviderRequests =
+    apiWorkKpis?.providerRequests?.kind === "known" ||
+    apiWorkKpis?.providerRequests?.kind === "partial"
+      ? Number(apiWorkKpis.providerRequests.value)
+      : null;
+  const apiTokens =
+    apiWorkKpis?.totalTokens?.kind === "known" ||
+    apiWorkKpis?.totalTokens?.kind === "partial"
+      ? Number(apiWorkKpis.totalTokens.value)
+      : null;
+  const apiCost =
+    apiWorkKpis?.estimatedCostUsd?.kind === "known" ||
+    apiWorkKpis?.estimatedCostUsd?.kind === "partial"
+      ? Number(apiWorkKpis.estimatedCostUsd.value)
+      : null;
+  const period7PilotTotal =
+    finopsSummary.json?.summary?.kpis?.totalRequests ?? null;
+
   report.finops = {
+    scope: workId ? { kind: "cognitiveWorkId", cognitiveWorkId: workId } : { kind: "campaignWindow", since: report.startedAt },
     observationCount: rows.length,
     billableCount: billable.length,
     correlationOnlyCount: corrOnly,
     sumProviderRequestsBillable: sumReq,
     sumInputTokens: sumIn,
     sumOutputTokens: sumOut,
-    summaryKpis: finopsSummary.json?.summary?.kpis ?? null,
+    sumEstimatedCostUsdBillable: sumCost,
+    workDetailKpis: apiWorkKpis,
+    /** Informative only — pilot/period scope; must not gate work-scope double-count. */
+    period7PilotTotalRequests: period7PilotTotal,
+    note: "Compare PG billable provider_requests for workId to GET /api/finops/works/:id providerRequests; do not compare campaign rows to period=7 pilot totals.",
   };
   save("08-finops-pg", report.finops);
-  recordCriterion(
-    "P3-NO-DOUBLE-COUNT-HINT",
-    corrOnly === 0 ||
-      (finopsSummary.json?.summary?.kpis?.totalRequests ?? 0) <= sumReq + 1
-      ? "PASS"
-      : "PARTIAL",
-    `corrOnly=${corrOnly} apiTotalReq=${finopsSummary.json?.summary?.kpis?.totalRequests} billableSumReq=${sumReq}`,
-  );
-  recordCriterion(
-    "P3-PG-OBSERVATIONS",
-    billable.length >= 1 ? "PASS" : "FAIL",
-    `billable=${billable.length} totalRows=${rows.length}`,
-  );
+
+  if (!workId) {
+    recordCriterion(
+      "P3-NO-DOUBLE-COUNT-HINT",
+      "NOT RUN",
+      "no workId — cannot reconcile PG vs work-detail API on same scope",
+    );
+    recordCriterion(
+      "P3-PG-OBSERVATIONS",
+      "NOT RUN",
+      "no workId — campaign-window PG alone is not FinOps work-scope proof",
+    );
+  } else if (finopsWork?.status !== 200 || apiProviderRequests == null) {
+    recordCriterion(
+      "P3-NO-DOUBLE-COUNT-HINT",
+      "BLOCKED",
+      `work detail unavailable status=${finopsWork?.status} apiProviderRequests=${apiProviderRequests}`,
+    );
+    recordCriterion(
+      "P3-PG-OBSERVATIONS",
+      billable.length >= 1 ? "PARTIAL" : "FAIL",
+      `billable=${billable.length} totalRows=${rows.length} (API work KPIs missing)`,
+    );
+  } else {
+    const reqMatch = apiProviderRequests === sumReq;
+    const tokensMatch =
+      apiTokens == null ||
+      apiTokens ===
+        billable.reduce(
+          (a, r) =>
+            a +
+            (Number(r.total_tokens) ||
+              (Number(r.input_tokens) || 0) + (Number(r.output_tokens) || 0)),
+          0,
+        );
+    const costMatch =
+      apiCost == null || Math.abs(apiCost - sumCost) < 1e-6;
+    recordCriterion(
+      "P3-NO-DOUBLE-COUNT-HINT",
+      reqMatch && tokensMatch && costMatch ? "PASS" : "FAIL",
+      `workId=${workId} pgBillableReq=${sumReq} apiWorkReq=${apiProviderRequests} corrOnly=${corrOnly} timelineRows=${rows.length} period7PilotTotalReq=${period7PilotTotal} (pilot total is out of scope)`,
+    );
+    recordCriterion(
+      "P3-PG-OBSERVATIONS",
+      billable.length >= 1 ? "PASS" : "FAIL",
+      `billable=${billable.length} corrOnly=${corrOnly} totalRows=${rows.length}`,
+    );
+  }

   report.criteria = criteria;
   const failed = criteria.filter((c) => c.status === "FAIL");
   const blocked = criteria.filter((c) => c.status === "BLOCKED");
-  report.verdict =
-    failed.length === 0 && blocked.length === 0
-      ? "G-LIVE-API CONVERGENCE PASS — ALL MANDATORY CRITERIA"
-      : failed.length
-        ? "G-LIVE-API CONVERGENCE FAIL — SEE CRITERIA"
-        : "G-LIVE-API CONVERGENCE BLOCKED — SEE CRITERIA";
+  const partial = criteria.filter((c) => c.status === "PARTIAL");
+  const notRun = criteria.filter((c) => c.status === "NOT RUN");
+  // Mandatory criteria PARTIAL / BLOCKED / NOT RUN must never yield ALL PASS.
+  if (failed.length > 0) {
+    report.verdict = "G-LIVE-API CONVERGENCE FAIL — SEE CRITERIA";
+  } else if (blocked.length > 0) {
+    report.verdict = "G-LIVE-API CONVERGENCE BLOCKED — SEE CRITERIA";
+  } else if (partial.length > 0) {
+    report.verdict = "G-LIVE-API CONVERGENCE PARTIAL — SEE CRITERIA";
+  } else if (notRun.length > 0) {
+    report.verdict = "G-LIVE-API CONVERGENCE INCOMPLETE — MANDATORY CRITERIA NOT RUN";
+  } else {
+    report.verdict = "G-LIVE-API CONVERGENCE PASS — ALL MANDATORY CRITERIA";
+  }
   report.endedAt = new Date().toISOString();
   save("00-report", report);
-  console.log(JSON.stringify({ verdict: report.verdict, out: OUT, failed: failed.length }, null, 2));
-  process.exit(failed.length || blocked.length ? 2 : 0);
+  console.log(
+    JSON.stringify(
+      {
+        verdict: report.verdict,
+        out: OUT,
+        failed: failed.length,
+        blocked: blocked.length,
+        partial: partial.length,
+        notRun: notRun.length,
+      },
+      null,
+      2,
+    ),
+  );
+  process.exit(
+    failed.length || blocked.length || partial.length || notRun.length ? 2 : 0,
+  );
 } catch (e) {
   report.criteria = criteria;
   report.verdict = "G-LIVE-API CONVERGENCE ERROR";
@@ -388,3 +483,7 @@ try {
   console.error(report.error);
   process.exit(1);
 }
+
+function sinceSafe(iso) {
+  return String(iso || new Date().toISOString()).replace(/'/g, "''");
+}
diff --git a/projects/sfia-studio-next/web/scripts/ml5-g-live-native-input-count.mts b/projects/sfia-studio-next/web/scripts/ml5-g-live-native-input-count.mts
new file mode 100644
index 00000000..75305c95
--- /dev/null
+++ b/projects/sfia-studio-next/web/scripts/ml5-g-live-native-input-count.mts
@@ -0,0 +1,241 @@
+/**
+ * G-LIVE-API targeted — native responses.inputTokens.count vs usage.
+ * WEB OFF. Does NOT re-run Chantiers360 investigation.
+ */
+import { createHash } from "node:crypto";
+import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
+import { join } from "node:path";
+
+const OUT = `/tmp/sfia-ml5-g-live-native-count-${new Date()
+  .toISOString()
+  .slice(0, 10)
+  .replace(/-/g, "")}`;
+mkdirSync(OUT, { recursive: true });
+const save = (n, v) =>
+  writeFileSync(join(OUT, `${n}.json`), JSON.stringify(v, null, 2));
+
+const criteria = [];
+const record = (id, status, detail) => {
+  criteria.push({ id, status, detail });
+  console.log(`[${status}] ${id} — ${detail}`);
+};
+
+function loadEnvLocal() {
+  const p = join(process.cwd(), ".env.local");
+  if (!existsSync(p)) return;
+  for (const line of readFileSync(p, "utf8").split("\n")) {
+    if (!line || line.startsWith("#") || !line.includes("=")) continue;
+    const i = line.indexOf("=");
+    const k = line.slice(0, i).trim();
+    let v = line.slice(i + 1).trim();
+    if (
+      (v.startsWith('"') && v.endsWith('"')) ||
+      (v.startsWith("'") && v.endsWith("'"))
+    )
+      v = v.slice(1, -1);
+    if (!(k in process.env) || process.env[k] === "") process.env[k] = v;
+  }
+}
+
+async function main() {
+  loadEnvLocal();
+  process.env.STUDIO_LANE = "DEV";
+  process.env.SFIA_WEB_SEARCH_LIVE = "0";
+  process.env.SFIA_WEB_SEARCH_ENABLED = "0";
+  process.env.SFIA_G_LIVE_API = "1";
+  process.env.SFIA_G_WEB_PUBLIC = "0";
+  process.env.SFIA_LIVE_CAMPAIGN_ID = "g-live-native-count-20261126";
+  process.env.SFIA_LIVE_MAX_HTTP_ATTEMPTS = "4";
+  process.env.SFIA_LIVE_MAX_INPUT_TOKEN_COUNT_ATTEMPTS = "8";
+  process.env.SFIA_LIVE_MAX_INPUT_TOKENS = "600000";
+  process.env.SFIA_LIVE_MAX_OUTPUT_TOKENS = "60000";
+  process.env.SFIA_LIVE_MAX_INPUT_TOKENS_PER_REQ = "100000";
+  process.env.SFIA_LIVE_MAX_OUTPUT_TOKENS_PER_REQ = "512";
+
+  const key = (process.env.OPENAI_API_KEY || "").trim();
+  if (!key) throw new Error("OPENAI_API_KEY missing");
+  const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
+  const expected = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "").trim();
+  if (expected && expected !== fp) {
+    throw new Error(`KEY_FP mismatch expected=${expected} actual=${fp}`);
+  }
+
+  const {
+    runWithProviderEmissionStoreAsync,
+    attachConfiguredLiveCampaignFromEnv,
+    createFrontierAwareFetch,
+    enableHttpMetaCaptureForTests,
+    ensureFrontierOpenAIClientInstalled,
+    getActiveCampaignEnvelope,
+    getHttpBodiesObservedForTests,
+    endProcessCampaign,
+    endRequiredCampaignLatch,
+  } = await import("@/domains/conversation/provider-emission-frontier");
+
+  const report = {
+    gate: "G-LIVE-API",
+    focus: "native_input_tokens_count",
+    startedAt: new Date().toISOString(),
+    out: OUT,
+    criteria,
+  };
+
+  await runWithProviderEmissionStoreAsync(async () => {
+    const campaign = attachConfiguredLiveCampaignFromEnv();
+    enableHttpMetaCaptureForTests();
+    const baseFetch = globalThis.fetch.bind(globalThis);
+    const transportLog = [];
+    const loggingFetch = (async (input, init) => {
+      const url = String(input);
+      transportLog.push({
+        url,
+        method: (init?.method || "POST").toUpperCase(),
+        isCount: url.includes("/input_tokens"),
+        isResponses: /\/responses\/?(\?|$)/.test(url) && !url.includes("input_tokens"),
+      });
+      return baseFetch(input, init);
+    });
+    await ensureFrontierOpenAIClientInstalled({
+      forceReinstall: true,
+      fetch: createFrontierAwareFetch(loggingFetch),
+      maxRetries: 1,
+      requireCampaign: true,
+    });
+
+    const OpenAI = (await import("openai")).default;
+    const { setDefaultOpenAIClient } = await import("@openai/agents");
+    const client = new OpenAI({
+      apiKey: key,
+      fetch: createFrontierAwareFetch(loggingFetch),
+      maxRetries: 1,
+    });
+    setDefaultOpenAIClient(client);
+
+    const body = {
+      model: "gpt-6.1-terra",
+      instructions: "Reply with exactly: NATIVE_COUNT_OK",
+      input: [
+        {
+          type: "message",
+          role: "user",
+          content: "Qualification ping — reply NATIVE_COUNT_OK only.",
+        },
+      ],
+      max_output_tokens: 32,
+    };
+
+    // Direct native count via SDK
+    const countPayload = {
+      model: body.model,
+      instructions: body.instructions,
+      input: body.input,
+    };
+    const countRes = await client.responses.inputTokens.count(countPayload);
+    save("01-native-count", countRes);
+    const counted = Number(countRes?.input_tokens ?? 0);
+    record(
+      "A-NATIVE-COUNT-HTTP",
+      counted > 0 && countRes?.object === "response.input_tokens" ? "PASS" : "FAIL",
+      `input_tokens=${counted} object=${countRes?.object}`,
+    );
+
+    // Responses create through frontier (will count again if fingerprint path requires)
+    const createRes = await client.responses.create({
+      ...body,
+      reasoning: { effort: "medium" },
+    });
+    save("02-responses-create", {
+      id: createRes.id,
+      model: createRes.model,
+      usage: createRes.usage,
+      status: createRes.status,
+      output_text:
+        createRes.output_text ??
+        JSON.stringify(createRes.output ?? []).slice(0, 500),
+    });
+    const usedIn = Number(createRes.usage?.input_tokens ?? 0);
+    const usedOut = Number(createRes.usage?.output_tokens ?? 0);
+    record(
+      "A-RESPONSES-USAGE",
+      usedIn > 0 ? "PASS" : "FAIL",
+      `usage.in=${usedIn} out=${usedOut} model=${createRes.model}`,
+    );
+
+    // Compare count vs usage — allow delta explanation
+    const delta = usedIn - counted;
+    const ratio = counted > 0 ? usedIn / counted : null;
+    const countCompare =
+      counted > 0 && usedIn > 0 && Math.abs(delta) / Math.max(counted, 1) <= 0.35
+        ? "PASS"
+        : counted > 0 && usedIn > 0
+          ? "PARTIAL"
+          : "FAIL";
+    record(
+      "A-COUNT-VS-USAGE",
+      countCompare,
+      `count=${counted} usageIn=${usedIn} delta=${delta} ratio=${ratio}`,
+    );
+
+    const camp = getActiveCampaignEnvelope();
+    save("03-campaign", {
+      campaignId: camp?.campaignId,
+      httpAttemptsCommitted: camp?.httpAttemptsCommitted,
+      inputTokenCountAttemptsCommitted: camp?.inputTokenCountAttemptsCommitted,
+      inputTokensReserved: camp?.inputTokensReserved,
+      inputTokensCommitted: camp?.inputTokensCommitted,
+      requireNativeInputBound: camp?.requireNativeInputBound,
+    });
+    record(
+      "A-COUNT-ATTEMPTS-TRACKED",
+      (camp?.inputTokenCountAttemptsCommitted ?? 0) >= 1 ? "PASS" : "FAIL",
+      `countCommitted=${camp?.inputTokenCountAttemptsCommitted} httpCommitted=${camp?.httpAttemptsCommitted}`,
+    );
+
+    const bodies = getHttpBodiesObservedForTests();
+    save("04-transport-oracle", { transportLog, bodies });
+    const countCalls = transportLog.filter((t) => t.isCount).length;
+    const respCalls = transportLog.filter((t) => t.isResponses).length;
+    record(
+      "A-TRANSPORT-ORACLE",
+      countCalls >= 1 && respCalls >= 1 ? "PASS" : "FAIL",
+      `countCalls=${countCalls} respCalls=${respCalls} transportN=${transportLog.length}`,
+    );
+
+    // modelApplied observability
+    const modelApplied =
+      typeof createRes.model === "string" && createRes.model.trim()
+        ? createRes.model.trim()
+        : "UNVERIFIED";
+    record(
+      "C-MODEL-APPLIED",
+      modelApplied !== "UNVERIFIED" ? "PASS" : "PARTIAL",
+      `modelApplied=${modelApplied}`,
+    );
+
+    endProcessCampaign(campaign?.campaignId);
+    endRequiredCampaignLatch();
+  });
+
+  const failed = criteria.filter((c) => c.status === "FAIL");
+  const blocked = criteria.filter((c) => c.status === "BLOCKED");
+  const partial = criteria.filter((c) => c.status === "PARTIAL");
+  const notRun = criteria.filter((c) => c.status === "NOT RUN");
+  let verdict;
+  if (failed.length) verdict = "G-LIVE-NATIVE-COUNT FAIL";
+  else if (blocked.length) verdict = "G-LIVE-NATIVE-COUNT BLOCKED";
+  else if (partial.length) verdict = "G-LIVE-NATIVE-COUNT PARTIAL";
+  else if (notRun.length) verdict = "G-LIVE-NATIVE-COUNT INCOMPLETE";
+  else verdict = "G-LIVE-NATIVE-COUNT PASS — ALL MANDATORY CRITERIA";
+
+  report.verdict = verdict;
+  report.endedAt = new Date().toISOString();
+  report.criteria = criteria;
+  save("00-report", report);
+  console.log(JSON.stringify({ verdict, out: OUT, failed: failed.length, partial: partial.length }, null, 2));
+  if (failed.length) process.exitCode = 1;
+}
+
+main().catch((e) => {
+  console.error(e);
+  process.exit(1);
+});
diff --git a/projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx b/projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx
index 29ddeb6f..6df00115 100644
--- a/projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx
+++ b/projects/sfia-studio-next/web/src/components/documents/PdfViewer.tsx
@@ -129,12 +129,32 @@ export function PdfViewer(props: PdfViewerProps) {
       try {
         const pdfPage = await cur.doc.getPage(page);
         if (cancelled) return;
-        const viewport = pdfPage.getViewport({ scale: zoom });
+        // Client render dim cap — mirrors SFIA_PDF_MAX_RENDER_PIXELS default (8MP).
+        // Path cannot be secured unbounded under mandate → refuse explicitly.
+        const maxRenderPixels = 8_000_000;
+        let viewport = pdfPage.getViewport({ scale: zoom });
+        const product = viewport.width * viewport.height;
+        if (product > maxRenderPixels) {
+          const factor = Math.sqrt(maxRenderPixels / product);
+          viewport = pdfPage.getViewport({ scale: zoom * factor });
+          if (viewport.width * viewport.height > maxRenderPixels) {
+            setError("RENDER_DIMS_EXCEEDED");
+            return;
+          }
+        }
         const ctx = canvas.getContext("2d");
         if (!ctx) return;
         canvas.width = viewport.width;
         canvas.height = viewport.height;
-        await pdfPage.render({ canvasContext: ctx, viewport }).promise;
+        const task = pdfPage.render({ canvasContext: ctx, viewport });
+        await task.promise;
+        if (cancelled) {
+          try {
+            task.cancel();
+          } catch {
+            /* best effort */
+          }
+        }
       } catch (e) {
         if (!cancelled) setError(String((e as Error)?.message ?? e).slice(0, 200));
       }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
index 473b0331..e98b8105 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
@@ -41,6 +41,7 @@ export type EmissionAttemptKind =
   | "internal.qualification"
   | "campaign.probe"
   | "http.responses"
+  | "http.input_tokens_count"
   | "http.other"
   | "other";

@@ -55,15 +56,25 @@ export type CampaignEnvelope = {
   /** Require this ALS campaign for every HTTP emission (fail-closed if absent). */
   required: boolean;
   maxHttpAttempts: number;
+  /** Distinct envelope for POST /v1/responses/input_tokens (not Responses generation). */
+  maxInputTokenCountAttempts: number | null;
   maxInputTokens: number | null;
   maxOutputTokens: number | null;
   maxInputTokensPerRequest: number | null;
   maxOutputTokensPerRequest: number | null;
   maxHostedSearches: number | null;
   maxDirectOpens: number | null;
+  /**
+   * When true, campaign input limits require a provider-native input_tokens count
+   * before Responses emission. Body-length estimates are never a strict guarantee.
+   */
+  requireNativeInputBound: boolean;
   httpAttemptsReserved: number;
   httpAttemptsCommitted: number;
   httpAttemptsReleased: number;
+  inputTokenCountAttemptsReserved: number;
+  inputTokenCountAttemptsCommitted: number;
+  inputTokenCountAttemptsReleased: number;
   inputTokensReserved: number;
   inputTokensCommitted: number;
   outputTokensReserved: number;
@@ -74,7 +85,7 @@ export type CampaignEnvelope = {
   suspendReason: string | null;
 };

-export type InputBoundKind = "demonstrable" | "estimate" | null;
+export type InputBoundKind = "native" | "demonstrable" | "estimate" | null;

 export type HttpAttemptRecord = {
   attemptId: string;
@@ -135,6 +146,8 @@ type FrontierStore = {
     model: string | null;
     effort: string | null;
     maxOutputTokens: number | null;
+    maxToolCalls: number | null;
+    kind: EmissionAttemptKind | null;
   }>;
   /** Effort admitted at SDK layer — reused for HTTP body admission (no silent medium). */
   effortHint: string | null;
@@ -142,6 +155,15 @@ type FrontierStore = {
   modelHint: string | null;
   /** When true, record non-body metadata for substituted-transport oracles. */
   captureHttpMeta: boolean;
+  /**
+   * Last native input_tokens count for the current ALS turn, keyed by payload fingerprint.
+   * Used so Responses emission can reserve against a provider count without re-counting.
+   */
+  nativeInputCount: {
+    fingerprint: string;
+    inputTokens: number;
+    countedAtMs: number;
+  } | null;
 };

 const als = new AsyncLocalStorage<FrontierStore>();
@@ -240,6 +262,7 @@ function emptyStore(): FrontierStore {
     effortHint: null,
     modelHint: null,
     captureHttpMeta: false,
+    nativeInputCount: null,
   };
 }

@@ -277,12 +300,15 @@ export function beginCampaignEnvelope(input: {
   /** @deprecated use maxHttpAttempts */
   maxAttempts?: number;
   maxHttpAttempts?: number;
+  maxInputTokenCountAttempts?: number | null;
   maxInputTokens?: number | null;
   maxOutputTokens?: number | null;
   maxInputTokensPerRequest?: number | null;
   maxOutputTokensPerRequest?: number | null;
   maxHostedSearches?: number | null;
   maxDirectOpens?: number | null;
+  /** Default true when any input token campaign limit is set. */
+  requireNativeInputBound?: boolean;
   required?: boolean;
 }): CampaignEnvelope {
   const cur = store();
@@ -302,10 +328,20 @@ export function beginCampaignEnvelope(input: {
     0,
     Math.floor(input.maxHttpAttempts ?? input.maxAttempts ?? 0),
   );
+  const hasInputLimit =
+    input.maxInputTokens != null || input.maxInputTokensPerRequest != null;
+  const requireNative =
+    input.requireNativeInputBound ?? hasInputLimit;
   const campaign: CampaignEnvelope = {
     campaignId,
     required: input.required !== false,
     maxHttpAttempts: maxHttp,
+    maxInputTokenCountAttempts:
+      input.maxInputTokenCountAttempts == null
+        ? requireNative
+          ? Math.max(1, maxHttp * 2)
+          : null
+        : Math.max(0, Math.floor(input.maxInputTokenCountAttempts)),
     maxInputTokens:
       input.maxInputTokens == null ? null : Math.max(0, Math.floor(input.maxInputTokens)),
     maxOutputTokens:
@@ -328,9 +364,13 @@ export function beginCampaignEnvelope(input: {
       input.maxDirectOpens == null
         ? null
         : Math.max(0, Math.floor(input.maxDirectOpens)),
+    requireNativeInputBound: requireNative,
     httpAttemptsReserved: 0,
     httpAttemptsCommitted: 0,
     httpAttemptsReleased: 0,
+    inputTokenCountAttemptsReserved: 0,
+    inputTokenCountAttemptsCommitted: 0,
+    inputTokenCountAttemptsReleased: 0,
     inputTokensReserved: 0,
     inputTokensCommitted: 0,
     outputTokensReserved: 0,
@@ -379,13 +419,18 @@ export function attachConfiguredLiveCampaignFromEnv(
     const raw = Number((env[k] || "").trim());
     return Number.isFinite(raw) && raw >= 0 ? Math.floor(raw) : fallback;
   };
-  // §12.2 G-LIVE-API defaults; §12.3 G-WEB-PUBLIC when that gate is set.
+  // §13.2 G-LIVE-API defaults; §13.3 G-WEB-PUBLIC when that gate is set.
   return beginCampaignEnvelope({
     campaignId,
     required: true,
-    maxHttpAttempts: num("SFIA_LIVE_MAX_HTTP_ATTEMPTS", web ? 20 : 40),
-    maxInputTokens: num("SFIA_LIVE_MAX_INPUT_TOKENS", web ? 500_000 : 2_000_000),
-    maxOutputTokens: num("SFIA_LIVE_MAX_OUTPUT_TOKENS", web ? 100_000 : 200_000),
+    requireNativeInputBound: true,
+    maxHttpAttempts: num("SFIA_LIVE_MAX_HTTP_ATTEMPTS", web ? 12 : 12),
+    maxInputTokenCountAttempts: num(
+      "SFIA_LIVE_MAX_INPUT_TOKEN_COUNT_ATTEMPTS",
+      24,
+    ),
+    maxInputTokens: num("SFIA_LIVE_MAX_INPUT_TOKENS", web ? 500_000 : 600_000),
+    maxOutputTokens: num("SFIA_LIVE_MAX_OUTPUT_TOKENS", web ? 100_000 : 60_000),
     maxInputTokensPerRequest: num("SFIA_LIVE_MAX_INPUT_TOKENS_PER_REQ", 100_000),
     maxOutputTokensPerRequest: num("SFIA_LIVE_MAX_OUTPUT_TOKENS_PER_REQ", 10_000),
     maxHostedSearches: web
@@ -459,13 +504,17 @@ function parseJsonBody(body: BodyInit | null | undefined): Record<string, unknow
 }

 /**
- * Demonstrable input bound — never a fake guarantee.
- * Returns null when only an estimate would be invented.
+ * Optional local hint only — never a provider-native guarantee.
+ * Prefer {@link resolveNativeOrDemonstrableInputBound} for campaign envelopes.
  */
 function demonstrableInputTokenBound(
   body: Record<string, unknown> | null,
 ): number | null {
   if (!body) return null;
+  const nativeHint = Number(
+    (body as { sfia_native_input_tokens?: unknown }).sfia_native_input_tokens ?? 0,
+  );
+  if (Number.isFinite(nativeHint) && nativeHint > 0) return Math.floor(nativeHint);
   const inputHint = Number(
     (body as { sfia_estimated_input_tokens?: unknown }).sfia_estimated_input_tokens ??
       0,
@@ -475,8 +524,8 @@ function demonstrableInputTokenBound(
 }

 /**
- * Conservative reservation estimate from serialized body size — NOT a usage guarantee.
- * For campaign accounting only when no demonstrable sfia_estimated_input_tokens exists.
+ * Conservative body-size indication — NOT a strict envelope guarantee.
+ * Retained for diagnostics / operational hints only.
  */
 export function conservativeBodyTokenEstimate(
   body: Record<string, unknown> | null,
@@ -494,6 +543,155 @@ export function conservativeBodyTokenEstimate(
   return Math.ceil(len / 3);
 }

+/** Fields accepted by openai@7.50 `responses.inputTokens.count` / InputTokenCountParams. */
+const INPUT_TOKEN_COUNT_KEYS = [
+  "conversation",
+  "input",
+  "instructions",
+  "model",
+  "parallel_tool_calls",
+  "personality",
+  "previous_response_id",
+  "reasoning",
+  "text",
+  "tool_choice",
+  "tools",
+  "truncation",
+] as const;
+
+/**
+ * Transform a Responses create body into the supported input_tokens count payload.
+ * Drops unsupported fields (e.g. max_output_tokens, max_tool_calls, stream).
+ */
+export function buildInputTokenCountPayload(
+  body: Record<string, unknown> | null,
+): Record<string, unknown> | null {
+  if (!body) return null;
+  const out: Record<string, unknown> = {};
+  for (const key of INPUT_TOKEN_COUNT_KEYS) {
+    if (Object.prototype.hasOwnProperty.call(body, key) && body[key] !== undefined) {
+      out[key] = body[key];
+    }
+  }
+  if (Object.keys(out).length === 0) return null;
+  return out;
+}
+
+/** Stable fingerprint of the count-relevant payload (must match emission context). */
+export function inputCountPayloadFingerprint(
+  body: Record<string, unknown> | null,
+): string | null {
+  const payload = buildInputTokenCountPayload(body);
+  if (!payload) return null;
+  let serialized: string;
+  try {
+    serialized = JSON.stringify(payload);
+  } catch {
+    return null;
+  }
+  return createHash("sha256").update(serialized, "utf8").digest("hex").slice(0, 32);
+}
+
+export function isResponsesInputTokensCountUrl(url: string): boolean {
+  try {
+    const u = new URL(url);
+    if (!isOpenAiApiUrl(url)) return false;
+    const path = u.pathname.replace(/\/+$/, "");
+    return (
+      path === "/v1/responses/input_tokens" ||
+      path.endsWith("/responses/input_tokens")
+    );
+  } catch {
+    return false;
+  }
+}
+
+export function isResponsesCreateUrl(url: string): boolean {
+  try {
+    const u = new URL(url);
+    if (!isOpenAiApiUrl(url)) return false;
+    const path = u.pathname.replace(/\/+$/, "");
+    return path === "/v1/responses" || path.endsWith("/responses");
+  } catch {
+    return false;
+  }
+}
+
+function deriveInputTokensCountUrl(responsesUrl: string): string {
+  try {
+    const u = new URL(responsesUrl);
+    const path = u.pathname.replace(/\/+$/, "");
+    if (path.endsWith("/responses")) {
+      u.pathname = `${path}/input_tokens`;
+    } else {
+      u.pathname = "/v1/responses/input_tokens";
+    }
+    u.search = "";
+    u.hash = "";
+    return u.toString();
+  } catch {
+    return "https://api.openai.com/v1/responses/input_tokens";
+  }
+}
+
+/**
+ * Resolve input reservation for a campaign:
+ * - native ALS count matching fingerprint → kind "native"
+ * - body sfia_native_input_tokens → kind "native"
+ * - body sfia_estimated_input_tokens only when native not required → "demonstrable"
+ * - never body-length estimate as a strict campaign guarantee
+ */
+function resolveCampaignInputReservation(
+  body: Record<string, unknown> | null,
+  campaign: CampaignEnvelope,
+  alsNative: FrontierStore["nativeInputCount"],
+): { tokens: number; kind: InputBoundKind } | { tokens: null; kind: null; reason: string } {
+  const fingerprint = inputCountPayloadFingerprint(body);
+  if (
+    alsNative &&
+    fingerprint &&
+    alsNative.fingerprint === fingerprint &&
+    Number.isFinite(alsNative.inputTokens) &&
+    alsNative.inputTokens > 0
+  ) {
+    return { tokens: Math.floor(alsNative.inputTokens), kind: "native" };
+  }
+  if (body) {
+    const nativeHint = Number(
+      (body as { sfia_native_input_tokens?: unknown }).sfia_native_input_tokens ?? 0,
+    );
+    const bodyFp = String(
+      (body as { sfia_input_count_fingerprint?: unknown }).sfia_input_count_fingerprint ??
+        "",
+    ).trim();
+    if (
+      Number.isFinite(nativeHint) &&
+      nativeHint > 0 &&
+      (!fingerprint || !bodyFp || bodyFp === fingerprint)
+    ) {
+      return { tokens: Math.floor(nativeHint), kind: "native" };
+    }
+  }
+  if (campaign.requireNativeInputBound) {
+    return {
+      tokens: null,
+      kind: null,
+      reason:
+        "INPUT_UNBOUNDED — campaign requires provider-native input_tokens count before Responses emission",
+    };
+  }
+  const demo = demonstrableInputTokenBound(body);
+  if (demo != null) {
+    return { tokens: demo, kind: "demonstrable" };
+  }
+  return {
+    tokens: null,
+    kind: null,
+    reason:
+      "INPUT_UNBOUNDED — campaign input limit set but no native or demonstrable input bound",
+  };
+}
+
 /** Output bound from the actual emission parameter (max_output_tokens). */
 function demonstrableOutputTokenBound(
   body: Record<string, unknown> | null,
@@ -544,13 +742,21 @@ function bodyContainsHostedWebSearchTool(
   return false;
 }

-/** One assumed hosted search per Responses body carrying web_search tools. */
+/**
+ * Legacy marker — assumed 1 hosted search per Responses is NOT an opposable bound.
+ * Prefer injected {@link max_tool_calls} as a built-in tool-call ceiling (still ≠ billed search units).
+ */
 export const HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1 =
   "HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1" as const;

+export const HOSTED_BOUND_REQUIRES_MAX_TOOL_CALLS =
+  "HOSTED_BOUND_REQUIRES_MAX_TOOL_CALLS" as const;
+
 /**
- * Fail-closed hosted search accounting: reserve one hosted search per Responses
- * emission when OpenAI web_search tools appear (engine may run more — {@link HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1}).
+ * Hosted / built-in tool-call reservation for campaign envelopes.
+ * Uses body.max_tool_calls when present (provider-supported Responses field).
+ * Without max_tool_calls, returns 0 and callers must fail-closed for web campaigns
+ * rather than assuming 1 search ≡ 1 billed unit.
  */
 function inferHostedSearchDeltaFromBody(
   body: Record<string, unknown> | null,
@@ -558,7 +764,36 @@ function inferHostedSearchDeltaFromBody(
 ): number {
   if (!campaign || campaign.maxHostedSearches == null) return 0;
   if (!bodyContainsHostedWebSearchTool(body)) return 0;
-  return 1;
+  const maxToolCalls = Number(body?.max_tool_calls ?? 0);
+  if (Number.isFinite(maxToolCalls) && maxToolCalls > 0) {
+    return Math.floor(maxToolCalls);
+  }
+  // No ASSUMED_1 reservation — require explicit max_tool_calls injection.
+  return 0;
+}
+
+/**
+ * Inject max_tool_calls when a hosted web_search tool is present and the campaign
+ * budgets hosted tool calls. Does not claim equality with billed search queries.
+ */
+export function injectMaxToolCallsForHostedCampaign(
+  body: Record<string, unknown>,
+  campaign: CampaignEnvelope | null,
+  hostedBudgetForThisResponse = 1,
+): Record<string, unknown> {
+  if (!campaign || campaign.maxHostedSearches == null) return body;
+  if (!bodyContainsHostedWebSearchTool(body)) return body;
+  const existing = Number(body.max_tool_calls ?? 0);
+  if (Number.isFinite(existing) && existing > 0) return body;
+  const remaining = Math.max(
+    0,
+    campaign.maxHostedSearches - campaign.hostedSearchesCommitted,
+  );
+  const inject = Math.max(
+    1,
+    Math.min(hostedBudgetForThisResponse, remaining || hostedBudgetForThisResponse),
+  );
+  return { ...body, max_tool_calls: inject };
 }

 export type HttpAttemptSnapshot = {
@@ -856,29 +1091,102 @@ export function reserveHttpEmission(input: {
     };
   }

+  const emissionKind = input.kind ?? "http.responses";
+
+  // Native input_tokens count — separate envelope; not a Responses generation.
+  if (emissionKind === "http.input_tokens_count") {
+    if (
+      campaign.maxInputTokenCountAttempts != null &&
+      campaign.inputTokenCountAttemptsReserved + 1 >
+        campaign.maxInputTokenCountAttempts
+    ) {
+      campaign.suspended = true;
+      campaign.suspendReason = "CAMPAIGN_INPUT_TOKEN_COUNT_ATTEMPTS_EXHAUSTED";
+      return {
+        ok: false,
+        reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
+        reason: `inputTokenCountReserved=${campaign.inputTokenCountAttemptsReserved}+1 max=${campaign.maxInputTokenCountAttempts}`,
+      };
+    }
+    campaign.inputTokenCountAttemptsReserved += 1;
+    const attemptId = newAttemptId();
+    store().attempts.set(attemptId, {
+      attemptId,
+      campaignId: campaign.campaignId,
+      state: "RESERVED",
+      kind: "http.input_tokens_count",
+      reservedSlots: 1,
+      reservedInputTokens: 0,
+      reservedOutputTokens: 0,
+      inputBoundKind: null,
+      urlHost: safeHost(input.url),
+      modelHint: model || null,
+      createdAtMs: Date.now(),
+    });
+    return {
+      ok: true,
+      attemptId,
+      campaignId: campaign.campaignId,
+      reservedSlots: 1,
+      reservedInputTokens: 0,
+      reservedOutputTokens: 0,
+      keyFingerprint: laneGuard.keyFingerprint,
+      lane: laneGuard.lane,
+      layer: "http",
+    };
+  }
+
   // Campaign token limits require an opposable reservation before contact.
-  // Input: demonstrable sfia_estimated_input_tokens, else conservative body
-  // estimate — never the per-request ceiling as a faux measured bound. Output
-  // still may use per-request ceiling for reservation and wire injection.
-  let reservedInput = demonstrableInputTokenBound(bodyJson);
-  let inputBoundKind: InputBoundKind =
-    reservedInput != null ? "demonstrable" : null;
+  // Input: provider-native input_tokens count (or explicit native hint) —
+  // never campaign ceiling and never body-length estimate as a strict guarantee.
+  // Output still may use per-request ceiling for reservation and wire injection.
+  let reservedInput: number | null = null;
+  let inputBoundKind: InputBoundKind = null;
   let reservedOutput = demonstrableOutputTokenBound(bodyJson);

   if (
-    reservedInput == null &&
-    (campaign.maxInputTokens != null || campaign.maxInputTokensPerRequest != null)
+    campaign.maxInputTokens != null ||
+    campaign.maxInputTokensPerRequest != null
   ) {
-    const estimate = conservativeBodyTokenEstimate(bodyJson);
-    if (estimate != null) {
-      reservedInput = estimate;
-      inputBoundKind = "estimate";
-    } else {
+    const resolved = resolveCampaignInputReservation(
+      bodyJson,
+      campaign,
+      als.getStore()?.nativeInputCount ?? null,
+    );
+    if (resolved.tokens == null) {
       return {
         ok: false,
         reasonCode: "INPUT_UNBOUNDED",
-        reason:
-          "INPUT_UNBOUNDED — campaign input limit set but no demonstrable bound or body estimate",
+        reason: resolved.reason,
+      };
+    }
+    reservedInput = resolved.tokens;
+    inputBoundKind = resolved.kind;
+  } else {
+    reservedInput = demonstrableInputTokenBound(bodyJson);
+    if (reservedInput != null) {
+      inputBoundKind =
+        bodyJson &&
+        Number(
+          (bodyJson as { sfia_native_input_tokens?: unknown })
+            .sfia_native_input_tokens ?? 0,
+        ) > 0
+          ? "native"
+          : "demonstrable";
+    }
+  }
+
+  // Hosted web campaign: require max_tool_calls on the wire — no ASSUMED_1.
+  if (
+    campaign.maxHostedSearches != null &&
+    bodyContainsHostedWebSearchTool(bodyJson)
+  ) {
+    const maxToolCalls = Number(bodyJson?.max_tool_calls ?? 0);
+    if (!Number.isFinite(maxToolCalls) || maxToolCalls <= 0) {
+      return {
+        ok: false,
+        reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
+        reason: HOSTED_BOUND_REQUIRES_MAX_TOOL_CALLS,
       };
     }
   }
@@ -986,7 +1294,7 @@ export function reserveHttpEmission(input: {
     attemptId,
     campaignId: campaign.campaignId,
     state: "RESERVED",
-    kind: input.kind ?? "http.responses",
+    kind: emissionKind,
     reservedSlots: 1,
     reservedInputTokens: inTok,
     reservedOutputTokens: outTok,
@@ -1068,30 +1376,35 @@ export function commitProviderEmission(reservation: {
   rec.state = "COMMITTED";
   const campaign = s.campaign;
   if (campaign && rec.campaignId === campaign.campaignId) {
-    campaign.httpAttemptsCommitted += 1;
-    const inTok =
-      reservation.measuredInputTokens != null &&
-      Number.isFinite(reservation.measuredInputTokens)
-        ? Math.max(0, Math.floor(reservation.measuredInputTokens))
-        : rec.reservedInputTokens;
-    const outTok =
-      reservation.measuredOutputTokens != null &&
-      Number.isFinite(reservation.measuredOutputTokens)
-        ? Math.max(0, Math.floor(reservation.measuredOutputTokens))
-        : rec.reservedOutputTokens;
-    campaign.inputTokensCommitted += inTok;
-    campaign.outputTokensCommitted += outTok;
-    // Reconcile reservation overshoot: keep reserved >= committed.
-    campaign.inputTokensReserved = Math.max(
-      campaign.inputTokensReserved,
-      campaign.inputTokensCommitted,
-    );
-    campaign.outputTokensReserved = Math.max(
-      campaign.outputTokensReserved,
-      campaign.outputTokensCommitted,
-    );
-    const hosted = Math.max(0, Math.floor(reservation.hostedSearchDelta ?? 0));
-    if (hosted > 0) campaign.hostedSearchesCommitted += hosted;
+    if (rec.kind === "http.input_tokens_count") {
+      campaign.inputTokenCountAttemptsCommitted += 1;
+      // Counting is not Responses generation — do not attribute generation tokens/cost.
+    } else {
+      campaign.httpAttemptsCommitted += 1;
+      const inTok =
+        reservation.measuredInputTokens != null &&
+        Number.isFinite(reservation.measuredInputTokens)
+          ? Math.max(0, Math.floor(reservation.measuredInputTokens))
+          : rec.reservedInputTokens;
+      const outTok =
+        reservation.measuredOutputTokens != null &&
+        Number.isFinite(reservation.measuredOutputTokens)
+          ? Math.max(0, Math.floor(reservation.measuredOutputTokens))
+          : rec.reservedOutputTokens;
+      campaign.inputTokensCommitted += inTok;
+      campaign.outputTokensCommitted += outTok;
+      // Reconcile reservation overshoot: keep reserved >= committed.
+      campaign.inputTokensReserved = Math.max(
+        campaign.inputTokensReserved,
+        campaign.inputTokensCommitted,
+      );
+      campaign.outputTokensReserved = Math.max(
+        campaign.outputTokensReserved,
+        campaign.outputTokensCommitted,
+      );
+      const hosted = Math.max(0, Math.floor(reservation.hostedSearchDelta ?? 0));
+      if (hosted > 0) campaign.hostedSearchesCommitted += hosted;
+    }
   }
   s.httpEmissionsObserved += 1;
 }
@@ -1112,16 +1425,27 @@ export function releaseProviderEmission(reservation: {
   rec.state = "RELEASED";
   const campaign = s.campaign;
   if (campaign && rec.campaignId === campaign.campaignId) {
-    campaign.httpAttemptsReserved = Math.max(0, campaign.httpAttemptsReserved - 1);
-    campaign.httpAttemptsReleased += 1;
-    campaign.inputTokensReserved = Math.max(
-      0,
-      campaign.inputTokensReserved - rec.reservedInputTokens,
-    );
-    campaign.outputTokensReserved = Math.max(
-      0,
-      campaign.outputTokensReserved - rec.reservedOutputTokens,
-    );
+    if (rec.kind === "http.input_tokens_count") {
+      campaign.inputTokenCountAttemptsReserved = Math.max(
+        0,
+        campaign.inputTokenCountAttemptsReserved - 1,
+      );
+      campaign.inputTokenCountAttemptsReleased += 1;
+    } else {
+      campaign.httpAttemptsReserved = Math.max(
+        0,
+        campaign.httpAttemptsReserved - 1,
+      );
+      campaign.httpAttemptsReleased += 1;
+      campaign.inputTokensReserved = Math.max(
+        0,
+        campaign.inputTokensReserved - rec.reservedInputTokens,
+      );
+      campaign.outputTokensReserved = Math.max(
+        0,
+        campaign.outputTokensReserved - rec.reservedOutputTokens,
+      );
+    }
   }
 }

@@ -1137,7 +1461,11 @@ export function markProviderEmissionUncertain(reservation: {
   const campaign = s.campaign;
   if (campaign && rec.campaignId === campaign.campaignId) {
     // Unknown consumption ≠ free — keep reservation, count as observed emission.
-    campaign.httpAttemptsCommitted += 1;
+    if (rec.kind === "http.input_tokens_count") {
+      campaign.inputTokenCountAttemptsCommitted += 1;
+    } else {
+      campaign.httpAttemptsCommitted += 1;
+    }
   }
   s.httpEmissionsObserved += 1;
 }
@@ -1169,6 +1497,7 @@ export function __resetProviderEmissionFrontierForTests(): void {
     s.effortHint = null;
     s.modelHint = null;
     s.captureHttpMeta = false;
+    s.nativeInputCount = null;
   }
   processCampaignRegistry.clear();
   deleteLiveCampaignStateFile();
@@ -1236,6 +1565,10 @@ function isOpenAiApiUrl(url: string): boolean {
 /**
  * Custom fetch that intercepts OpenAI HTTP emissions for campaign control.
  * Substitutable in tests by wrapping a fake transport.
+ *
+ * Distinguishes:
+ * - POST …/responses/input_tokens → count attempt (not generation)
+ * - POST …/responses → generation (may native-count first when campaign requires it)
  */
 export function createFrontierAwareFetch(
   baseFetch: typeof fetch = globalThis.fetch.bind(globalThis),
@@ -1245,7 +1578,11 @@ export function createFrontierAwareFetch(
   },
 ): typeof fetch {
   const requireCampaignOpt = opts?.requireCampaign === true;
-  return (async (input: RequestInfo | URL, init?: RequestInit) => {
+
+  const frontierFetch = (async (
+    input: RequestInfo | URL,
+    init?: RequestInit,
+  ): Promise<Response> => {
     const url =
       typeof input === "string"
         ? input
@@ -1284,8 +1621,142 @@ export function createFrontierAwareFetch(
     let body = init?.body ?? null;
     let bodyJson = parseJsonBody(body);
     const campaign = alsStore.campaign;
+
+    // —— Native input_tokens count path (no recursion into Responses generation) ——
+    if (isResponsesInputTokensCountUrl(url)) {
+      const countPayload = buildInputTokenCountPayload(bodyJson) ?? bodyJson;
+      const fingerprint = inputCountPayloadFingerprint(countPayload);
+      body = countPayload ? JSON.stringify(countPayload) : body;
+      bodyJson = countPayload;
+      const reservation = reserveHttpEmission({
+        kind: "http.input_tokens_count",
+        url,
+        method,
+        body,
+        effort: alsStore.effortHint,
+        skipModelAdmission: true,
+      });
+      if (!reservation.ok) {
+        throw new ProviderEmissionRefusedError(
+          reservation.reasonCode,
+          reservation.reason,
+        );
+      }
+      if (alsStore.captureHttpMeta) {
+        alsStore.httpBodiesObserved.push({
+          attemptId: reservation.attemptId,
+          url,
+          method,
+          model: modelFromBody(bodyJson),
+          effort: effortFromBody(bodyJson),
+          maxOutputTokens: null,
+          maxToolCalls: null,
+          kind: "http.input_tokens_count",
+        });
+      }
+      const nextInit =
+        body === init?.body || init == null ? init : { ...init, body };
+      try {
+        const res = await baseFetch(input, nextInit);
+        let parsed: { input_tokens?: unknown; object?: unknown } | null = null;
+        try {
+          parsed = (await res.clone().json()) as {
+            input_tokens?: unknown;
+            object?: unknown;
+          };
+        } catch {
+          parsed = null;
+        }
+        const tokens = Number(parsed?.input_tokens ?? NaN);
+        if (
+          res.ok &&
+          fingerprint &&
+          Number.isFinite(tokens) &&
+          tokens > 0 &&
+          parsed?.object === "response.input_tokens"
+        ) {
+          alsStore.nativeInputCount = {
+            fingerprint,
+            inputTokens: Math.floor(tokens),
+            countedAtMs: Date.now(),
+          };
+        } else if (!res.ok || !Number.isFinite(tokens) || tokens <= 0) {
+          // Malformed / failed count — clear stale native binding for this fingerprint.
+          if (alsStore.nativeInputCount?.fingerprint === fingerprint) {
+            alsStore.nativeInputCount = null;
+          }
+        }
+        commitProviderEmission({
+          attemptId: reservation.attemptId,
+          reservedSlots: reservation.reservedSlots,
+        });
+        return res;
+      } catch (e) {
+        markProviderEmissionUncertain({ attemptId: reservation.attemptId });
+        throw e;
+      }
+    }
+
+    // —— Responses generation path ——
+    // Inject max_tool_calls for hosted web campaigns before counting / reserve.
+    if (bodyJson && campaign) {
+      bodyJson = injectMaxToolCallsForHostedCampaign(bodyJson, campaign, 1);
+      body = JSON.stringify(bodyJson);
+    }
+
+    // When a strict campaign requires a native input bound, count first via the
+    // same frontier (count URL path above) — never via an unbounded side channel.
+    if (
+      campaign?.requireNativeInputBound &&
+      (campaign.maxInputTokens != null ||
+        campaign.maxInputTokensPerRequest != null) &&
+      isResponsesCreateUrl(url) &&
+      method === "POST"
+    ) {
+      const fingerprint = inputCountPayloadFingerprint(bodyJson);
+      const haveNative =
+        fingerprint &&
+        alsStore.nativeInputCount?.fingerprint === fingerprint &&
+        alsStore.nativeInputCount.inputTokens > 0;
+      const bodyNative = Number(
+        (bodyJson as { sfia_native_input_tokens?: unknown } | null)
+          ?.sfia_native_input_tokens ?? 0,
+      );
+      if (!haveNative && !(Number.isFinite(bodyNative) && bodyNative > 0)) {
+        const countPayload = buildInputTokenCountPayload(bodyJson);
+        if (!countPayload) {
+          throw new ProviderEmissionRefusedError(
+            "INPUT_UNBOUNDED",
+            "INPUT_UNBOUNDED — cannot build input_tokens count payload from Responses body",
+          );
+        }
+        const countUrl = deriveInputTokensCountUrl(url);
+        const countRes = await frontierFetch(countUrl, {
+          method: "POST",
+          headers: init?.headers,
+          body: JSON.stringify(countPayload),
+        });
+        if (!countRes.ok) {
+          throw new ProviderEmissionRefusedError(
+            "INPUT_UNBOUNDED",
+            `INPUT_UNBOUNDED — native input_tokens count HTTP ${countRes.status}`,
+          );
+        }
+        if (
+          !alsStore.nativeInputCount ||
+          alsStore.nativeInputCount.fingerprint !== fingerprint
+        ) {
+          throw new ProviderEmissionRefusedError(
+            "INPUT_UNBOUNDED",
+            "INPUT_UNBOUNDED — native input_tokens count missing or fingerprint mismatch after count",
+          );
+        }
+      }
+    }
+
     // Inject opposable max_output_tokens onto the real provider payload when the
     // campaign sets a per-request ceiling and the SDK omitted the field.
+    // Safe after count: max_output_tokens is not part of InputTokenCountParams.
     if (
       campaign?.maxOutputTokensPerRequest != null &&
       bodyJson &&
@@ -1297,6 +1768,23 @@ export function createFrontierAwareFetch(
       };
       body = JSON.stringify(bodyJson);
     }
+
+    // Strip Studio-only hints before wire emission.
+    if (bodyJson) {
+      const {
+        sfia_estimated_input_tokens: _est,
+        sfia_native_input_tokens: _nat,
+        sfia_input_count_fingerprint: _fp,
+        ...wireBody
+      } = bodyJson as Record<string, unknown> & {
+        sfia_estimated_input_tokens?: unknown;
+        sfia_native_input_tokens?: unknown;
+        sfia_input_count_fingerprint?: unknown;
+      };
+      bodyJson = wireBody;
+      body = JSON.stringify(wireBody);
+    }
+
     const hostedSearchDelta = inferHostedSearchDeltaFromBody(
       bodyJson,
       campaign,
@@ -1325,13 +1813,13 @@ export function createFrontierAwareFetch(
         model: modelFromBody(bodyJson),
         effort: effortFromBody(bodyJson),
         maxOutputTokens: demonstrableOutputTokenBound(bodyJson),
+        maxToolCalls: Number(bodyJson?.max_tool_calls ?? 0) || null,
+        kind: "http.responses",
       });
     }

     const nextInit =
-      body === init?.body || init == null
-        ? init
-        : { ...init, body };
+      body === init?.body || init == null ? init : { ...init, body };
     try {
       const res = await baseFetch(input, nextInit);
       commitProviderEmission({
@@ -1347,6 +1835,8 @@ export function createFrontierAwareFetch(
       throw e;
     }
   }) as typeof fetch;
+
+  return frontierFetch;
 }

 /**
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/web-public-query-authority.ts b/projects/sfia-studio-next/web/src/domains/conversation/web-public-query-authority.ts
index e0c2d892..b10e884d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/web-public-query-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/web-public-query-authority.ts
@@ -5,13 +5,17 @@
  * Egress admission for non-catalog queries requires an inspectable authority
  * binding when a project scope exists — never a parallel decision register.
  *
+ * Real path: inspect (candidate) → apply (RECORD_DECISION + effectConditions)
+ * → reverify at egress (including checkpoint reuse). Parse alone never grants.
+ *
  * Uses existing HumanDecision kind RECORD_DECISION (no schema migration).
  * Extending DECISION_KINDS for a dedicated WEB kind requires Morris GO.
  */

 import { and, eq } from "drizzle-orm";
 import { db } from "@/db/client";
-import { humanDecisions } from "@/db/schema";
+import { humanDecisions, projects } from "@/db/schema";
+import { insertHumanDecision } from "@/domains/decisions/service";
 import { canonicalPayloadFingerprint } from "./provider-emission-frontier";
 import {
   extractPilotAuthorizedExactQueries,
@@ -20,6 +24,8 @@ import {

 export const WEB_PUBLIC_QUERY_OBJECT_PREFIX = "web.public_query:" as const;
 export const WEB_PUBLIC_QUERY_DESTINATION = "public_web_search" as const;
+/** Default exceptional WEB authority TTL when caller does not override. */
+export const WEB_PUBLIC_QUERY_DEFAULT_TTL_MS = 24 * 60 * 60 * 1000;

 export type WebPublicQueryAuthorityPayload = {
   query: string;
@@ -28,6 +34,17 @@ export type WebPublicQueryAuthorityPayload = {
   projectId: string;
   pilotId: string;
   policyVersion: string;
+  /** ISO-8601 expiry — required; past ⇒ deny at validate/egress. */
+  expiresAt: string;
+};
+
+export type WebPublicQueryInspection = {
+  objectRef: string;
+  effectConditions: string;
+  payload: WebPublicQueryAuthorityPayload;
+  statement: string;
+  /** Fingerprint of the inspectable mandate (must match at apply). */
+  inspectedFingerprint: string;
 };

 export function normalizeWebPublicQuery(query: string): string {
@@ -55,13 +72,31 @@ export function buildWebPublicQueryEffectConditions(
     projectId: payload.projectId,
     pilotId: payload.pilotId,
     policyVersion: payload.policyVersion,
+    expiresAt: payload.expiresAt,
   };
   return JSON.stringify(canonical);
 }

+export function fingerprintWebPublicQueryInspection(
+  effectConditions: string,
+  objectRef: string,
+): string {
+  return canonicalPayloadFingerprint({
+    kind: "WEB_PUBLIC_QUERY_INSPECTION",
+    objectRef,
+    effectConditions,
+  });
+}
+
 export type ParseEffectConditionsResult =
   | { ok: true; payload: WebPublicQueryAuthorityPayload }
-  | { ok: false; reasonCode: "EFFECT_CONDITIONS_MISSING" | "EFFECT_CONDITIONS_MALFORMED" | "EFFECT_CONDITIONS_INCOMPLETE" };
+  | {
+      ok: false;
+      reasonCode:
+        | "EFFECT_CONDITIONS_MISSING"
+        | "EFFECT_CONDITIONS_MALFORMED"
+        | "EFFECT_CONDITIONS_INCOMPLETE";
+    };

 /** Fail closed on missing/malformed effectConditions (discriminant, no DB). */
 export function parseWebPublicQueryEffectConditions(
@@ -89,6 +124,7 @@ export function parseWebPublicQueryEffectConditions(
   const pilotId = typeof o.pilotId === "string" ? o.pilotId.trim() : "";
   const policyVersion =
     typeof o.policyVersion === "string" ? o.policyVersion.trim() : "";
+  const expiresAt = typeof o.expiresAt === "string" ? o.expiresAt.trim() : "";
   if (
     !query ||
     query.length < 3 ||
@@ -96,10 +132,15 @@ export function parseWebPublicQueryEffectConditions(
     !purpose ||
     !projectId ||
     !pilotId ||
-    !policyVersion
+    !policyVersion ||
+    !expiresAt
   ) {
     return { ok: false, reasonCode: "EFFECT_CONDITIONS_INCOMPLETE" };
   }
+  const expMs = Date.parse(expiresAt);
+  if (!Number.isFinite(expMs)) {
+    return { ok: false, reasonCode: "EFFECT_CONDITIONS_MALFORMED" };
+  }
   return {
     ok: true,
     payload: {
@@ -109,6 +150,7 @@ export function parseWebPublicQueryEffectConditions(
       projectId,
       pilotId,
       policyVersion,
+      expiresAt: new Date(expMs).toISOString(),
     },
   };
 }
@@ -141,9 +183,16 @@ export type WebQueryAuthorityVerdict =
         | "PAYLOAD_MISMATCH"
         | "PILOT_MISMATCH"
         | "POLICY_VERSION_MISMATCH"
+        | "POLICY_VERSION_REQUIRED"
         | "EFFECT_CONDITIONS_INVALID"
         | "KIND_MISMATCH"
-        | "REVOKED_OR_SUPERSEDED";
+        | "REVOKED_OR_SUPERSEDED"
+        | "EXPIRED"
+        | "CURRENT_RIGHTS_DENIED"
+        | "PURPOSE_REQUIRED"
+        | "INSPECTION_REQUIRED"
+        | "INSPECTION_FINGERPRINT_MISMATCH"
+        | "NOT_CONFIRMED";
       reason: string;
       parsedQuery?: string;
       objectRef?: string;
@@ -157,9 +206,12 @@ export function validateWebPublicQueryDecisionRow(
     pilotId: string;
     policyVersion?: string;
     objectRef: string;
+    purpose?: string;
+    now?: number;
   },
 ): WebQueryAuthorityVerdict {
   const query = normalizeWebPublicQuery(expected.query);
+  const now = expected.now ?? Date.now();

   if (row.kind !== "RECORD_DECISION") {
     return {
@@ -252,8 +304,38 @@ export function validateWebPublicQueryDecisionRow(
     };
   }

+  if (!ec.payload.purpose.trim()) {
+    return {
+      allowed: false,
+      reasonCode: "PURPOSE_REQUIRED",
+      reason: "effectConditions.purpose missing",
+      parsedQuery: query,
+      objectRef: expected.objectRef,
+    };
+  }
+
+  const expectedPurpose = (expected.purpose ?? "").trim();
+  if (expectedPurpose && ec.payload.purpose !== expectedPurpose.slice(0, 200)) {
+    return {
+      allowed: false,
+      reasonCode: "PAYLOAD_MISMATCH",
+      reason: "effectConditions.purpose does not match authorized purpose",
+      parsedQuery: query,
+      objectRef: expected.objectRef,
+    };
+  }
+
   const expectedPolicy = (expected.policyVersion ?? "").trim();
-  if (expectedPolicy && ec.payload.policyVersion !== expectedPolicy) {
+  if (!expectedPolicy) {
+    return {
+      allowed: false,
+      reasonCode: "POLICY_VERSION_REQUIRED",
+      reason: "Active policyVersion required to apply WEB D6 authority",
+      parsedQuery: query,
+      objectRef: expected.objectRef,
+    };
+  }
+  if (ec.payload.policyVersion !== expectedPolicy) {
     return {
       allowed: false,
       reasonCode: "POLICY_VERSION_MISMATCH",
@@ -263,11 +345,12 @@ export function validateWebPublicQueryDecisionRow(
     };
   }

-  if (!ec.payload.purpose.trim()) {
+  const expMs = Date.parse(ec.payload.expiresAt);
+  if (!Number.isFinite(expMs) || expMs <= now) {
     return {
       allowed: false,
-      reasonCode: "EFFECT_CONDITIONS_INVALID",
-      reason: "effectConditions.purpose missing",
+      reasonCode: "EXPIRED",
+      reason: "WEB public query authority expired",
       parsedQuery: query,
       objectRef: expected.objectRef,
     };
@@ -282,17 +365,248 @@ export function validateWebPublicQueryDecisionRow(
   };
 }

-/** Last-mile revocation / supersession proof before network egress. */
+/**
+ * Inspectable candidate — no DB write. Pilot must confirm inspectedFingerprint
+ * before applyWebPublicQueryAuthorityDecision.
+ */
+export function inspectWebPublicQueryAuthorityCandidate(input: {
+  pilotText: string;
+  projectId: string;
+  pilotId: string;
+  purpose: string;
+  policyVersion: string;
+  /** Absolute expiry; default now+24h when omitted. */
+  expiresAt?: string;
+  ttlMs?: number;
+  now?: number;
+}):
+  | { ok: true; inspection: WebPublicQueryInspection }
+  | { ok: false; reasonCode: string; reason: string; parsedQuery?: string } {
+  const projectId = input.projectId.trim();
+  const pilotId = input.pilotId.trim();
+  const purpose = input.purpose.trim().slice(0, 200);
+  const policyVersion = input.policyVersion.trim();
+  const dedicated = isDedicatedAuthorizePublicQueryAct(input.pilotText);
+  const parsed = extractPilotAuthorizedExactQueries(input.pilotText);
+
+  if (!dedicated || parsed.length === 0) {
+    return {
+      ok: false,
+      reasonCode: "POISON_OR_NON_DEDICATED",
+      reason: "AUTHORIZE_PUBLIC_QUERY must be a dedicated Pilote act (parse ≠ D6)",
+    };
+  }
+  if (!projectId) {
+    return {
+      ok: false,
+      reasonCode: "PROJECT_REQUIRED",
+      reason: "Exceptional WEB authorization requires project scope",
+      parsedQuery: parsed[0],
+    };
+  }
+  if (!pilotId) {
+    return {
+      ok: false,
+      reasonCode: "PILOT_MISMATCH",
+      reason: "Exceptional WEB authorization requires requesting pilot",
+      parsedQuery: parsed[0],
+    };
+  }
+  if (!purpose) {
+    return {
+      ok: false,
+      reasonCode: "PURPOSE_REQUIRED",
+      reason: "Exceptional WEB authorization requires an explicit purpose",
+      parsedQuery: parsed[0],
+    };
+  }
+  if (!policyVersion) {
+    return {
+      ok: false,
+      reasonCode: "POLICY_VERSION_REQUIRED",
+      reason: "Exceptional WEB authorization requires active policyVersion",
+      parsedQuery: parsed[0],
+    };
+  }
+
+  const now = input.now ?? Date.now();
+  let expiresAt = (input.expiresAt ?? "").trim();
+  if (!expiresAt) {
+    const ttl =
+      typeof input.ttlMs === "number" &&
+      Number.isFinite(input.ttlMs) &&
+      input.ttlMs > 0
+        ? input.ttlMs
+        : WEB_PUBLIC_QUERY_DEFAULT_TTL_MS;
+    expiresAt = new Date(now + ttl).toISOString();
+  } else {
+    const expMs = Date.parse(expiresAt);
+    if (!Number.isFinite(expMs) || expMs <= now) {
+      return {
+        ok: false,
+        reasonCode: "EXPIRED",
+        reason: "expiresAt must be a future ISO timestamp",
+        parsedQuery: parsed[0],
+      };
+    }
+    expiresAt = new Date(expMs).toISOString();
+  }
+
+  const query = parsed[0]!;
+  const payload: WebPublicQueryAuthorityPayload = {
+    query,
+    destination: WEB_PUBLIC_QUERY_DESTINATION,
+    purpose,
+    projectId,
+    pilotId,
+    policyVersion,
+    expiresAt,
+  };
+  const objectRef = buildWebPublicQueryObjectRef(payload);
+  const effectConditions = buildWebPublicQueryEffectConditions(payload);
+  const inspectedFingerprint = fingerprintWebPublicQueryInspection(
+    effectConditions,
+    objectRef,
+  );
+  const statement = `AUTHORIZE_PUBLIC_QUERY — ${purpose}`.slice(0, 500);
+
+  return {
+    ok: true,
+    inspection: {
+      objectRef,
+      effectConditions,
+      payload,
+      statement,
+      inspectedFingerprint,
+    },
+  };
+}
+
+/**
+ * Persist RECORD_DECISION after the Pilote confirms the inspected fingerprint.
+ * Does not perform egress — caller must still reverify at the exit point.
+ */
+export async function applyWebPublicQueryAuthorityDecision(input: {
+  pilotId: string;
+  projectId: string;
+  inspection: WebPublicQueryInspection;
+  inspectedFingerprint: string;
+  confirmed: boolean;
+  sourceRef: string;
+  statement?: string;
+}): Promise<WebQueryAuthorityVerdict> {
+  if (!input.confirmed) {
+    return {
+      allowed: false,
+      reasonCode: "NOT_CONFIRMED",
+      reason: "WEB D6 apply requires explicit confirmation of inspected mandate",
+      objectRef: input.inspection.objectRef,
+      parsedQuery: input.inspection.payload.query,
+    };
+  }
+  if (
+    input.inspectedFingerprint !== input.inspection.inspectedFingerprint
+  ) {
+    return {
+      allowed: false,
+      reasonCode: "INSPECTION_FINGERPRINT_MISMATCH",
+      reason: "Inspected fingerprint does not match candidate — re-inspect",
+      objectRef: input.inspection.objectRef,
+      parsedQuery: input.inspection.payload.query,
+    };
+  }
+
+  const parsed = parseWebPublicQueryEffectConditions(
+    input.inspection.effectConditions,
+  );
+  if (!parsed.ok) {
+    return {
+      allowed: false,
+      reasonCode: "EFFECT_CONDITIONS_INVALID",
+      reason: parsed.reasonCode,
+      objectRef: input.inspection.objectRef,
+    };
+  }
+  if (
+    parsed.payload.projectId !== input.projectId.trim() ||
+    parsed.payload.pilotId !== input.pilotId.trim()
+  ) {
+    return {
+      allowed: false,
+      reasonCode: "PAYLOAD_MISMATCH",
+      reason: "Inspection payload does not match apply identity/scope",
+      objectRef: input.inspection.objectRef,
+    };
+  }
+
+  const rights = await assertWebPublicQueryCurrentRights({
+    projectId: input.projectId,
+    pilotId: input.pilotId,
+  });
+  if (rights !== "ok") {
+    return {
+      allowed: false,
+      reasonCode: "CURRENT_RIGHTS_DENIED",
+      reason: "Pilot no longer owns project — WEB D6 apply refused",
+      objectRef: input.inspection.objectRef,
+      parsedQuery: parsed.payload.query,
+    };
+  }
+
+  const decisionId = await db.transaction(async (tx) =>
+    insertHumanDecision(tx, {
+      projectId: input.projectId.trim(),
+      pilotId: input.pilotId.trim(),
+      sourceKind: "WEB_PUBLIC_QUERY",
+      sourceRef: input.sourceRef.slice(0, 200),
+      kind: "RECORD_DECISION",
+      objectRef: input.inspection.objectRef,
+      statement: (input.statement ?? input.inspection.statement).slice(0, 500),
+      effectConditions: input.inspection.effectConditions,
+    }),
+  );
+
+  return {
+    allowed: true,
+    decisionId,
+    objectRef: input.inspection.objectRef,
+    query: parsed.payload.query,
+    source: "HUMAN_DECISION_RECORD",
+  };
+}
+
+/** Current project ownership — rights may change after the decision was recorded. */
+export async function assertWebPublicQueryCurrentRights(input: {
+  projectId: string;
+  pilotId: string;
+}): Promise<"ok" | "denied"> {
+  const projectId = input.projectId.trim();
+  const pilotId = input.pilotId.trim();
+  if (!projectId || !pilotId) return "denied";
+  const row = (
+    await db
+      .select({ id: projects.id, ownerPilotId: projects.ownerPilotId })
+      .from(projects)
+      .where(eq(projects.id, projectId))
+      .limit(1)
+  )[0];
+  if (!row || row.ownerPilotId !== pilotId) return "denied";
+  return "ok";
+}
+
+/** Last-mile revocation / supersession / current-rights proof before network egress. */
 export async function assertWebPublicQueryDecisionEgressProof(
   decisionId: string,
   projectId: string,
-): Promise<"ok" | "revoked_or_stale"> {
+  pilotId: string,
+): Promise<"ok" | "revoked_or_stale" | "current_rights_denied"> {
   const fresh = (
     await db
       .select({
         id: humanDecisions.id,
         state: humanDecisions.state,
         kind: humanDecisions.kind,
+        pilotId: humanDecisions.pilotId,
       })
       .from(humanDecisions)
       .where(
@@ -303,7 +617,12 @@ export async function assertWebPublicQueryDecisionEgressProof(
       )
       .limit(1)
   )[0];
-  if (!fresh || fresh.kind !== "RECORD_DECISION" || fresh.state !== "APPLICABLE") {
+  if (
+    !fresh ||
+    fresh.kind !== "RECORD_DECISION" ||
+    fresh.state !== "APPLICABLE" ||
+    fresh.pilotId !== pilotId
+  ) {
     return "revoked_or_stale";
   }

@@ -325,6 +644,11 @@ export async function assertWebPublicQueryDecisionEgressProof(
     return "revoked_or_stale";
   }

+  const rights = await assertWebPublicQueryCurrentRights({ projectId, pilotId });
+  if (rights !== "ok") {
+    return "current_rights_denied";
+  }
+
   return "ok";
 }

@@ -381,7 +705,7 @@ async function loadWebPublicQueryDecisionRow(input: {

 /**
  * Re-verify a prior or explicit binding without re-parsing pilot AUTHORIZE text.
- * `decisionId` is required when reusing authority across turns.
+ * `decisionId` is required when reusing authority across turns / checkpoints.
  */
 export async function reverifyWebPublicQueryAuthorityAtEgress(input: {
   query: string;
@@ -389,6 +713,8 @@ export async function reverifyWebPublicQueryAuthorityAtEgress(input: {
   pilotId: string;
   policyVersion?: string;
   decisionId?: string | null;
+  purpose?: string;
+  now?: number;
 }): Promise<WebQueryAuthorityVerdict> {
   const projectId = input.projectId.trim();
   const query = normalizeWebPublicQuery(input.query);
@@ -401,6 +727,16 @@ export async function reverifyWebPublicQueryAuthorityAtEgress(input: {
     };
   }

+  const policyVersion = (input.policyVersion ?? "").trim();
+  if (!policyVersion) {
+    return {
+      allowed: false,
+      reasonCode: "POLICY_VERSION_REQUIRED",
+      reason: "Active policyVersion required at WEB egress reverify",
+      parsedQuery: query,
+    };
+  }
+
   const objectRef = buildWebPublicQueryObjectRef({ query, projectId });
   const decisionId = (input.decisionId ?? "").trim();
   if (!decisionId) {
@@ -436,14 +772,29 @@ export async function reverifyWebPublicQueryAuthorityAtEgress(input: {
     query,
     projectId,
     pilotId: input.pilotId,
-    policyVersion: input.policyVersion,
+    policyVersion,
+    purpose: input.purpose,
     objectRef,
+    now: input.now,
   });
   if (!verdict.allowed) {
     return verdict;
   }

-  const egress = await assertWebPublicQueryDecisionEgressProof(verdict.decisionId, projectId);
+  const egress = await assertWebPublicQueryDecisionEgressProof(
+    verdict.decisionId,
+    projectId,
+    input.pilotId,
+  );
+  if (egress === "current_rights_denied") {
+    return {
+      allowed: false,
+      reasonCode: "CURRENT_RIGHTS_DENIED",
+      reason: "Pilot project ownership withdrawn at egress",
+      parsedQuery: query,
+      objectRef,
+    };
+  }
   if (egress !== "ok") {
     return {
       allowed: false,
@@ -460,6 +811,7 @@ export async function reverifyWebPublicQueryAuthorityAtEgress(input: {
 /**
  * Technical parse alone never grants egress. When projectId is present,
  * require an APPLICABLE HumanDecision RECORD_DECISION bound to the payload.
+ * Prefer inspect → apply for new bindings; this path only evaluates existing acts.
  */
 export async function evaluateWebPublicQueryAuthority(input: {
   pilotText: string;
@@ -468,6 +820,8 @@ export async function evaluateWebPublicQueryAuthority(input: {
   /** Optional explicit decision id (inspectable act already recorded). */
   decisionId?: string | null;
   policyVersion?: string;
+  purpose?: string;
+  now?: number;
 }): Promise<WebQueryAuthorityVerdict> {
   const projectId = (input.projectId ?? "").trim();
   const parsed = extractPilotAuthorizedExactQueries(input.pilotText);
@@ -492,6 +846,16 @@ export async function evaluateWebPublicQueryAuthority(input: {
     };
   }

+  const policyVersion = (input.policyVersion ?? "").trim();
+  if (!policyVersion) {
+    return {
+      allowed: false,
+      reasonCode: "POLICY_VERSION_REQUIRED",
+      reason: "Active policyVersion required to evaluate WEB D6 authority",
+      parsedQuery: query,
+    };
+  }
+
   const objectRef = buildWebPublicQueryObjectRef({ query, projectId });
   const row = await loadWebPublicQueryDecisionRow({
     projectId,
@@ -505,7 +869,7 @@ export async function evaluateWebPublicQueryAuthority(input: {
       allowed: false,
       reasonCode: "DECISION_NOT_FOUND",
       reason:
-        "No APPLICABLE HumanDecision RECORD_DECISION for exact public query payload",
+        "No APPLICABLE HumanDecision RECORD_DECISION for exact public query payload — inspect then apply first",
       parsedQuery: query,
       objectRef,
     };
@@ -515,14 +879,29 @@ export async function evaluateWebPublicQueryAuthority(input: {
     query,
     projectId,
     pilotId: input.pilotId,
-    policyVersion: input.policyVersion,
+    policyVersion,
+    purpose: input.purpose,
     objectRef,
+    now: input.now,
   });
   if (!verdict.allowed) {
     return verdict;
   }

-  const egress = await assertWebPublicQueryDecisionEgressProof(verdict.decisionId, projectId);
+  const egress = await assertWebPublicQueryDecisionEgressProof(
+    verdict.decisionId,
+    projectId,
+    input.pilotId,
+  );
+  if (egress === "current_rights_denied") {
+    return {
+      allowed: false,
+      reasonCode: "CURRENT_RIGHTS_DENIED",
+      reason: "Pilot project ownership withdrawn",
+      parsedQuery: query,
+      objectRef,
+    };
+  }
   if (egress !== "ok") {
     return {
       allowed: false,
@@ -572,4 +951,4 @@ export function promoteExactQueriesFromAuthority(input: {
   limits.push("PILOT_EXACT_PARSE_NOT_PROMOTED");
   limits.push(input.authority?.reasonCode ?? "PARSE_NOT_AUTHORITY");
   return { exactQueries: [], limits };
-}
\ No newline at end of file
+}
diff --git a/projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts b/projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts
index 4fbd8d0b..7c3d4ede 100644
--- a/projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts
+++ b/projects/sfia-studio-next/web/src/domains/documents/pdf-extract-server.ts
@@ -3,6 +3,10 @@
  * Input bytes must already be authorized by the owning domain (B1/D9/D4).
  * Never call from the PDF viewer API — authorization and bytes delivery are separate.
  * No network I/O — disable worker and external font fetches.
+ *
+ * Robustness (Sequence D): size / pages / chars / time / concurrency / cancel
+ * are fail-closed here. Decompress RSS is not oracled by pdfjs — we refuse when
+ * Length hints or inflate ratios exceed maxDecompressBytes (see pdf-read-contract).
  */

 import { createHash } from "node:crypto";
@@ -26,6 +30,71 @@ function looksLikePdf(bytes: Uint8Array): boolean {
   );
 }

+/** Heuristic active-content / JS action markers — fail closed, no execution. */
+function detectActiveContent(bytes: Uint8Array): boolean {
+  const sample = Buffer.from(
+    bytes.subarray(0, Math.min(bytes.byteLength, 2_000_000)),
+  ).toString("latin1");
+  return (
+    /\/JavaScript\b/i.test(sample) ||
+    /\/JS\s*\(/i.test(sample) ||
+    /\/OpenAction\b/i.test(sample) ||
+    /\/AA\s*<</i.test(sample) ||
+    /\/Launch\b/i.test(sample) ||
+    /\/EmbeddedFile\b/i.test(sample)
+  );
+}
+
+/**
+ * Scan stream Length dictionaries for inflate blow-up hints.
+ * Not a perfect RSS oracle — residual RSS remains B-reserve R-PDF-RSS-ORACLE.
+ */
+function estimateDecompressBudget(bytes: Uint8Array): number {
+  const sample = Buffer.from(
+    bytes.subarray(0, Math.min(bytes.byteLength, 4_000_000)),
+  ).toString("latin1");
+  let sum = bytes.byteLength;
+  const re = /\/Length\s+(\d+)/g;
+  let m: RegExpExecArray | null;
+  while ((m = re.exec(sample))) {
+    const n = Number(m[1]);
+    if (Number.isFinite(n) && n > 0) sum += n;
+  }
+  // Conservative inflate factor when FlateDecode appears without Length sum.
+  if (/\/FlateDecode/i.test(sample)) {
+    sum = Math.max(sum, bytes.byteLength * 4);
+  }
+  return sum;
+}
+
+let activeExtracts = 0;
+const extractWaiters: Array<() => void> = [];
+
+async function acquireExtractSlot(maxConcurrency: number): Promise<boolean> {
+  if (activeExtracts < maxConcurrency) {
+    activeExtracts += 1;
+    return true;
+  }
+  return new Promise((resolve) => {
+    extractWaiters.push(() => {
+      activeExtracts += 1;
+      resolve(true);
+    });
+  });
+}
+
+function releaseExtractSlot(): void {
+  activeExtracts = Math.max(0, activeExtracts - 1);
+  const next = extractWaiters.shift();
+  if (next) next();
+}
+
+/** Test-only — reset concurrency gate between cases. */
+export function __resetPdfExtractConcurrencyForTests(): void {
+  activeExtracts = 0;
+  extractWaiters.length = 0;
+}
+
 export type ExtractPdfInput = {
   bytes: Uint8Array;
   identity: Omit<PdfSourceIdentity, "byteLength"> & { byteLength?: number };
@@ -35,6 +104,8 @@ export type ExtractPdfInput = {
   /** Optional case-insensitive search after extraction. */
   searchQuery?: string | null;
   maxSearchHits?: number;
+  /** Cancel in-flight extract (destroys loadingTask). */
+  signal?: AbortSignal;
 };

 export async function extractPdfText(
@@ -47,6 +118,17 @@ export async function extractPdfText(
     byteLength,
   };

+  if (input.signal?.aborted) {
+    return {
+      ok: false,
+      identity,
+      coverage: "UNAVAILABLE",
+      reasonCode: "CANCELLED",
+      message: "PDF extraction cancelled before start",
+      limits: ["ABORT_SIGNAL"],
+    };
+  }
+
   if (byteLength > limits.maxBytes) {
     return {
       ok: false,
@@ -68,6 +150,46 @@ export async function extractPdfText(
     };
   }

+  if (detectActiveContent(input.bytes)) {
+    return {
+      ok: false,
+      identity,
+      coverage: "UNAVAILABLE",
+      reasonCode: "ACTIVE_CONTENT_BLOCKED",
+      message: "PDF active content / embedded actions are blocked",
+      limits: ["ACTIVE_CONTENT_BLOCKED", "NO_JS_NO_LAUNCH"],
+    };
+  }
+
+  const decompressEstimate = estimateDecompressBudget(input.bytes);
+  if (decompressEstimate > limits.maxDecompressBytes) {
+    return {
+      ok: false,
+      identity,
+      coverage: "UNAVAILABLE",
+      reasonCode: "DECOMPRESS_BUDGET_EXCEEDED",
+      message: `PDF decompress budget exceeded (est ${decompressEstimate} > ${limits.maxDecompressBytes})`,
+      limits: [
+        `MAX_DECOMPRESS_${limits.maxDecompressBytes}`,
+        "RSS_ORACLE_NOT_AVAILABLE",
+      ],
+    };
+  }
+
+  // Non-blocking concurrency refuse when saturated (no unbounded queue growth).
+  if (activeExtracts >= limits.maxConcurrency && extractWaiters.length >= 4) {
+    return {
+      ok: false,
+      identity,
+      coverage: "UNAVAILABLE",
+      reasonCode: "CONCURRENCY_LIMIT",
+      message: `PDF extract concurrency saturated (max ${limits.maxConcurrency})`,
+      limits: [`MAX_CONCURRENCY_${limits.maxConcurrency}`],
+    };
+  }
+
+  await acquireExtractSlot(limits.maxConcurrency);
+
   const fingerprint = createHash("sha256")
     .update(input.bytes)
     .digest("hex")
@@ -77,6 +199,7 @@ export async function extractPdfText(
   try {
     pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
   } catch {
+    releaseExtractSlot();
     return {
       ok: false,
       identity,
@@ -101,6 +224,7 @@ export async function extractPdfText(

   const timeoutMs = limits.timeoutMs;
   let timedOut = false;
+  let cancelled = false;
   const timer = setTimeout(() => {
     timedOut = true;
     try {
@@ -110,8 +234,40 @@ export async function extractPdfText(
     }
   }, timeoutMs);

+  const onAbort = () => {
+    cancelled = true;
+    try {
+      void loadingTask.destroy();
+    } catch {
+      /* best effort */
+    }
+  };
+  input.signal?.addEventListener("abort", onAbort, { once: true });
+
   try {
+    if (cancelled || input.signal?.aborted) {
+      return {
+        ok: false,
+        identity,
+        coverage: "UNAVAILABLE",
+        reasonCode: "CANCELLED",
+        message: "PDF extraction cancelled",
+        limits: ["ABORT_SIGNAL"],
+      };
+    }
+
     const doc = await loadingTask.promise;
+    if (cancelled || input.signal?.aborted) {
+      await doc.destroy();
+      return {
+        ok: false,
+        identity,
+        coverage: "UNAVAILABLE",
+        reasonCode: "CANCELLED",
+        message: "PDF extraction cancelled after open",
+        limits: ["ABORT_SIGNAL"],
+      };
+    }
     if (timedOut) {
       return {
         ok: false,
@@ -143,7 +299,7 @@ export async function extractPdfText(
     const limitCodes: string[] = [];

     for (let p = from; p <= to; p++) {
-      if (timedOut) break;
+      if (timedOut || cancelled || input.signal?.aborted) break;
       if (textChars >= limits.maxTextChars) {
         limitCodes.push("TEXT_BUDGET_EXHAUSTED");
         break;
@@ -170,6 +326,17 @@ export async function extractPdfText(

     await doc.destroy();

+    if (cancelled || input.signal?.aborted) {
+      return {
+        ok: false,
+        identity,
+        coverage: "UNAVAILABLE",
+        reasonCode: "CANCELLED",
+        message: "PDF extraction cancelled during page read",
+        limits: ["ABORT_SIGNAL", ...limitCodes],
+      };
+    }
+
     if (pages.length === 0) {
       return {
         ok: false,
@@ -235,11 +402,22 @@ export async function extractPdfText(
         ...limitCodes,
         `PAGES_${from}_${to}`,
         `PAGE_COUNT_${pageCount}`,
+        `DECOMPRESS_EST_${decompressEstimate}`,
       ],
       fingerprint,
     };
   } catch (e) {
     const msg = String((e as Error)?.message ?? e);
+    if (cancelled || input.signal?.aborted) {
+      return {
+        ok: false,
+        identity,
+        coverage: "UNAVAILABLE",
+        reasonCode: "CANCELLED",
+        message: "PDF extraction cancelled",
+        limits: ["ABORT_SIGNAL"],
+      };
+    }
     if (/password|encrypt/i.test(msg)) {
       return {
         ok: false,
@@ -270,6 +448,8 @@ export async function extractPdfText(
     };
   } finally {
     clearTimeout(timer);
+    input.signal?.removeEventListener("abort", onAbort);
+    releaseExtractSlot();
   }
 }

diff --git a/projects/sfia-studio-next/web/src/domains/documents/pdf-read-contract.ts b/projects/sfia-studio-next/web/src/domains/documents/pdf-read-contract.ts
index c1a02d55..73bce927 100644
--- a/projects/sfia-studio-next/web/src/domains/documents/pdf-read-contract.ts
+++ b/projects/sfia-studio-next/web/src/domains/documents/pdf-read-contract.ts
@@ -36,6 +36,16 @@ export type PdfReadLimits = {
   maxPages: number;
   maxTextChars: number;
   timeoutMs: number;
+  /** Cap concurrent extractPdfText calls process-wide. */
+  maxConcurrency: number;
+  /**
+   * Soft ceiling on pdf.js internal stream / image buffers we are willing to
+   * admit. Exceeding binary maxBytes already blocks; this documents the
+   * decompress budget used for fail-closed refusal when known.
+   */
+  maxDecompressBytes: number;
+  /** Max canvas width×height product for in-app render (PdfViewer). */
+  maxRenderPixels: number;
 };

 export type PdfSourceIdentity = {
@@ -75,6 +85,10 @@ export type PdfReadResult =
         | "NO_EXTRACTABLE_TEXT"
         | "SCANNED_NO_TEXT"
         | "ACTIVE_CONTENT_BLOCKED"
+        | "CONCURRENCY_LIMIT"
+        | "CANCELLED"
+        | "RENDER_DIMS_EXCEEDED"
+        | "DECOMPRESS_BUDGET_EXCEEDED"
         | "PROCESSING_ERROR";
       message: string;
       limits: string[];
@@ -85,8 +99,25 @@ export const DEFAULT_PDF_READ_LIMITS: PdfReadLimits = {
   maxPages: 80,
   maxTextChars: 200_000,
   timeoutMs: 15_000,
+  maxConcurrency: 2,
+  /** 4× compressed budget — beyond this we refuse rather than guess RSS. */
+  maxDecompressBytes: 32_000_000,
+  /** ~8MP — blocks pathological zoom/page sizes in PdfViewer. */
+  maxRenderPixels: 8_000_000,
 };

+/**
+ * PDF robustness qualification (Sequence D / D4):
+ * - size/pages/chars/time: enforced in extractPdfText (proven by unit tests).
+ * - concurrency: process-wide semaphore in extractPdfText.
+ * - cancel: AbortSignal supported; destroys loadingTask.
+ * - render dims: PdfViewer refuses viewport product > maxRenderPixels.
+ * - decompress/memory: pdfjs does not expose a reliable RSS oracle under this
+ *   mandate — we refuse when known content length / inflate hints exceed
+ *   maxDecompressBytes, and isolate residual RSS as B-reserve
+ *   `R-PDF-RSS-ORACLE` (timeout ≠ memory proof).
+ */
+
 export function resolvePdfReadLimits(
   env: NodeJS.ProcessEnv = process.env,
 ): PdfReadLimits {
@@ -102,5 +133,17 @@ export function resolvePdfReadLimits(
       DEFAULT_PDF_READ_LIMITS.maxTextChars,
     ),
     timeoutMs: num("SFIA_PDF_TIMEOUT_MS", DEFAULT_PDF_READ_LIMITS.timeoutMs),
+    maxConcurrency: num(
+      "SFIA_PDF_MAX_CONCURRENCY",
+      DEFAULT_PDF_READ_LIMITS.maxConcurrency,
+    ),
+    maxDecompressBytes: num(
+      "SFIA_PDF_MAX_DECOMPRESS_BYTES",
+      DEFAULT_PDF_READ_LIMITS.maxDecompressBytes,
+    ),
+    maxRenderPixels: num(
+      "SFIA_PDF_MAX_RENDER_PIXELS",
+      DEFAULT_PDF_READ_LIMITS.maxRenderPixels,
+    ),
   };
 }
diff --git a/projects/sfia-studio-next/web/tests/integration/ml5-pdf-viewer-authorization.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml5-pdf-viewer-authorization.pg.test.ts
new file mode 100644
index 00000000..ebaddf00
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/ml5-pdf-viewer-authorization.pg.test.ts
@@ -0,0 +1,362 @@
+/**
+ * Sequence D / D3 — PDF viewer endpoint with real DEV PG habilitation (:5433 → e2e).
+ * Oracle: HTTP status + returned bytes. viewerToken alone is never authority.
+ */
+import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
+import { config } from "dotenv";
+config({ path: ".env.local" });
+
+import { eq } from "drizzle-orm";
+import { db } from "@/db/client";
+import {
+  cognitiveWorks,
+  pilots,
+  preparations,
+  projects,
+} from "@/db/schema";
+import { newId } from "@/lib/ids";
+import {
+  __resetWebPageSessionsForTests,
+  putWebPageSession,
+} from "@/domains/conversation/public-web-page-session";
+import { createProjectCommand } from "@/domains/preparation/create-project";
+import {
+  openOrCreatePreparation,
+  updatePreview,
+} from "@/domains/preparation/service";
+
+vi.mock("@/domains/identity/session", () => ({
+  requireStudioSession: vi.fn(),
+}));
+
+import { requireStudioSession } from "@/domains/identity/session";
+import { GET } from "@/app/api/web/pdf-viewer/[viewerToken]/route";
+
+const PDF_BYTES = new Uint8Array([
+  0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x34, 0x0a, 0x25, 0xe2, 0xe3, 0xcf,
+  0xd3,
+]);
+
+const dockerOk = () => Boolean(process.env.DATABASE_URL?.includes("5433"));
+
+async function seedPilot(label: string) {
+  const id = newId("pilot");
+  await db.insert(pilots).values({
+    id,
+    displayName: label,
+    githubUserId: `gh-${id}`,
+  });
+  return id;
+}
+
+async function seedOwnerProjectWork(label: string) {
+  const ownerPilotId = await seedPilot(`${label}-owner`);
+  const otherPilotId = await seedPilot(`${label}-other`);
+
+  const prep = await openOrCreatePreparation(ownerPilotId);
+  await updatePreview(ownerPilotId, prep.id, `${label}-proj`, "PDF auth PG");
+  const refreshed = (
+    await db.select().from(preparations).where(eq(preparations.id, prep.id))
+  )[0]!;
+  const created = await createProjectCommand({
+    pilotId: ownerPilotId,
+    preparationId: prep.id,
+    expectedCreationRevision: refreshed.creationRevision,
+    projectName: `${label}-proj`,
+    previewSummary: "PDF auth PG",
+    idempotencyKey: newId("idem"),
+  });
+  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
+    throw new Error(`project create failed: ${created.status}`);
+  }
+  const projectId = created.projectId!;
+
+  const workId = newId("cgw");
+  await db.insert(cognitiveWorks).values({
+    id: workId,
+    ownerPilotId,
+    preparationId: prep.id,
+    projectId,
+    status: "RUNNING",
+    revision: 1,
+    objective: "PDF viewer auth",
+    expectedOutcome: "bytes",
+    stateJson: "{}",
+    resourcesJson: "{}",
+    productionJson: "{}",
+  });
+
+  return {
+    ownerPilotId,
+    otherPilotId,
+    projectId,
+    cognitiveWorkId: workId,
+    preparationId: prep.id,
+  };
+}
+
+function seedSession(scope: {
+  lane: string;
+  projectId: string;
+  cognitiveWorkId: string;
+  ownerPilotId: string;
+}, fingerprint = "fp-pg-v1") {
+  return putWebPageSession({
+    scope,
+    url: "https://example.com/pg-auth.pdf",
+    kind: "pdf",
+    text: "page1",
+    pageCount: 1,
+    contentFingerprint: fingerprint,
+    pdfBytes: PDF_BYTES,
+    limits: ["PG_TEST"],
+  });
+}
+
+describe.skipIf(!dockerOk())("ML5 PDF viewer authorization PG endpoint", () => {
+  beforeAll(() => {
+    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
+    process.env.STUDIO_LANE = "DEV";
+  });
+
+  beforeEach(() => {
+    __resetWebPageSessionsForTests();
+    vi.mocked(requireStudioSession).mockReset();
+    process.env.STUDIO_LANE = "DEV";
+  });
+
+  it("nominal GET 200 returns exact PDF bytes", async () => {
+    const seed = await seedOwnerProjectWork("pdf-nom");
+    const page = seedSession({
+      lane: "DEV",
+      projectId: seed.projectId,
+      cognitiveWorkId: seed.cognitiveWorkId,
+      ownerPilotId: seed.ownerPilotId,
+    });
+    vi.mocked(requireStudioSession).mockResolvedValue({
+      pilotId: seed.ownerPilotId,
+      displayName: "Owner",
+      sessionId: "pg-sess",
+      authMode: "dev-test-login",
+    });
+    const res = await GET(new Request("http://test"), {
+      params: Promise.resolve({ viewerToken: page.viewerToken }),
+    });
+    expect(res.status).toBe(200);
+    const buf = new Uint8Array(await res.arrayBuffer());
+    expect([...buf]).toEqual([...PDF_BYTES]);
+    expect(res.headers.get("X-Content-Fingerprint")).toBe("fp-pg-v1");
+  });
+
+  it("other pilot → 403 VIEWER_OWNER_MISMATCH (no bytes)", async () => {
+    const seed = await seedOwnerProjectWork("pdf-other-pilot");
+    const page = seedSession({
+      lane: "DEV",
+      projectId: seed.projectId,
+      cognitiveWorkId: seed.cognitiveWorkId,
+      ownerPilotId: seed.ownerPilotId,
+    });
+    vi.mocked(requireStudioSession).mockResolvedValue({
+      pilotId: seed.otherPilotId,
+      displayName: "Intruder",
+      sessionId: "pg-sess-2",
+      authMode: "dev-test-login",
+    });
+    const res = await GET(new Request("http://test"), {
+      params: Promise.resolve({ viewerToken: page.viewerToken }),
+    });
+    expect(res.status).toBe(403);
+    const body = await res.json();
+    expect(body.error).toBe("VIEWER_OWNER_MISMATCH");
+    expect(res.headers.get("Content-Type")).not.toMatch(/pdf/i);
+  });
+
+  it("other project work binding → 403", async () => {
+    const seed = await seedOwnerProjectWork("pdf-other-proj");
+    const alienWork = newId("cgw");
+    await db.insert(cognitiveWorks).values({
+      id: alienWork,
+      ownerPilotId: seed.ownerPilotId,
+      preparationId: seed.preparationId,
+      projectId: null,
+      status: "RUNNING",
+      revision: 1,
+      objective: "unbound",
+      expectedOutcome: "x",
+      stateJson: "{}",
+      resourcesJson: "{}",
+      productionJson: "{}",
+    });
+    const page = seedSession({
+      lane: "DEV",
+      projectId: seed.projectId,
+      cognitiveWorkId: alienWork,
+      ownerPilotId: seed.ownerPilotId,
+    });
+    vi.mocked(requireStudioSession).mockResolvedValue({
+      pilotId: seed.ownerPilotId,
+      displayName: "Owner",
+      sessionId: "pg-sess",
+      authMode: "dev-test-login",
+    });
+    const res = await GET(new Request("http://test"), {
+      params: Promise.resolve({ viewerToken: page.viewerToken }),
+    });
+    expect(res.status).toBe(403);
+    const body = await res.json();
+    expect([
+      "VIEWER_WORK_PROJECT_REQUIRED",
+      "VIEWER_WORK_PROJECT_MISMATCH",
+      "VIEWER_PROJECT_ACCESS_DENIED",
+    ]).toContain(body.error);
+  });
+
+  it("habilitation revoked (project ownership transferred) → 403", async () => {
+    const seed = await seedOwnerProjectWork("pdf-revoked");
+    await db
+      .update(projects)
+      .set({ ownerPilotId: seed.otherPilotId })
+      .where(eq(projects.id, seed.projectId));
+    const page = seedSession({
+      lane: "DEV",
+      projectId: seed.projectId,
+      cognitiveWorkId: seed.cognitiveWorkId,
+      ownerPilotId: seed.ownerPilotId,
+    });
+    vi.mocked(requireStudioSession).mockResolvedValue({
+      pilotId: seed.ownerPilotId,
+      displayName: "Former",
+      sessionId: "pg-sess",
+      authMode: "dev-test-login",
+    });
+    const res = await GET(new Request("http://test"), {
+      params: Promise.resolve({ viewerToken: page.viewerToken }),
+    });
+    expect(res.status).toBe(403);
+    const body = await res.json();
+    expect(body.error).toBe("VIEWER_PROJECT_ACCESS_DENIED");
+  });
+
+  it("wrong lane → 403 VIEWER_LANE_MISMATCH", async () => {
+    const seed = await seedOwnerProjectWork("pdf-lane");
+    const page = seedSession({
+      lane: "RECETTE",
+      projectId: seed.projectId,
+      cognitiveWorkId: seed.cognitiveWorkId,
+      ownerPilotId: seed.ownerPilotId,
+    });
+    process.env.STUDIO_LANE = "DEV";
+    vi.mocked(requireStudioSession).mockResolvedValue({
+      pilotId: seed.ownerPilotId,
+      displayName: "Owner",
+      sessionId: "pg-sess",
+      authMode: "dev-test-login",
+    });
+    const res = await GET(new Request("http://test"), {
+      params: Promise.resolve({ viewerToken: page.viewerToken }),
+    });
+    expect(res.status).toBe(403);
+    const body = await res.json();
+    expect(body.error).toBe("VIEWER_LANE_MISMATCH");
+  });
+
+  it("expired token → 410", async () => {
+    const seed = await seedOwnerProjectWork("pdf-exp");
+    const page = seedSession({
+      lane: "DEV",
+      projectId: seed.projectId,
+      cognitiveWorkId: seed.cognitiveWorkId,
+      ownerPilotId: seed.ownerPilotId,
+    });
+    // Force expiry via session map mutation through put with past TTL env.
+    const prev = process.env.SFIA_WEB_PAGE_SESSION_TTL_MS;
+    process.env.SFIA_WEB_PAGE_SESSION_TTL_MS = "1";
+    __resetWebPageSessionsForTests();
+    const short = seedSession({
+      lane: "DEV",
+      projectId: seed.projectId,
+      cognitiveWorkId: seed.cognitiveWorkId,
+      ownerPilotId: seed.ownerPilotId,
+    });
+    await new Promise((r) => setTimeout(r, 5));
+    if (prev === undefined) delete process.env.SFIA_WEB_PAGE_SESSION_TTL_MS;
+    else process.env.SFIA_WEB_PAGE_SESSION_TTL_MS = prev;
+
+    vi.mocked(requireStudioSession).mockResolvedValue({
+      pilotId: seed.ownerPilotId,
+      displayName: "Owner",
+      sessionId: "pg-sess",
+      authMode: "dev-test-login",
+    });
+    const res = await GET(new Request("http://test"), {
+      params: Promise.resolve({ viewerToken: short.viewerToken }),
+    });
+    // Expired sessions may be purged (404) or assessed as 410.
+    expect([410, 404]).toContain(res.status);
+    if (res.status === 410) {
+      const body = await res.json();
+      expect(body.error).toBe("VIEWER_SESSION_EXPIRED");
+    }
+  });
+
+  it("invalid work attachment (unknown work id) → 403", async () => {
+    const seed = await seedOwnerProjectWork("pdf-bad-work");
+    const page = seedSession({
+      lane: "DEV",
+      projectId: seed.projectId,
+      cognitiveWorkId: newId("cgw"),
+      ownerPilotId: seed.ownerPilotId,
+    });
+    vi.mocked(requireStudioSession).mockResolvedValue({
+      pilotId: seed.ownerPilotId,
+      displayName: "Owner",
+      sessionId: "pg-sess",
+      authMode: "dev-test-login",
+    });
+    const res = await GET(new Request("http://test"), {
+      params: Promise.resolve({ viewerToken: page.viewerToken }),
+    });
+    expect(res.status).toBe(403);
+    const body = await res.json();
+    expect(body.error).toBe("VIEWER_PROJECT_ACCESS_DENIED");
+  });
+
+  it("version changed rotates token — old token 404, new 200", async () => {
+    const seed = await seedOwnerProjectWork("pdf-ver");
+    const scope = {
+      lane: "DEV",
+      projectId: seed.projectId,
+      cognitiveWorkId: seed.cognitiveWorkId,
+      ownerPilotId: seed.ownerPilotId,
+    };
+    const first = seedSession(scope, "fp-old");
+    const second = putWebPageSession({
+      scope,
+      url: "https://example.com/pg-auth.pdf",
+      kind: "pdf",
+      text: "page1-rev",
+      pageCount: 1,
+      contentFingerprint: "fp-new",
+      pdfBytes: new Uint8Array([...PDF_BYTES, 0x0a]),
+      limits: [],
+    });
+    expect(second.viewerToken).not.toBe(first.viewerToken);
+    vi.mocked(requireStudioSession).mockResolvedValue({
+      pilotId: seed.ownerPilotId,
+      displayName: "Owner",
+      sessionId: "pg-sess",
+      authMode: "dev-test-login",
+    });
+    const oldRes = await GET(new Request("http://test"), {
+      params: Promise.resolve({ viewerToken: first.viewerToken }),
+    });
+    expect(oldRes.status).toBe(404);
+    const newRes = await GET(new Request("http://test"), {
+      params: Promise.resolve({ viewerToken: second.viewerToken }),
+    });
+    expect(newRes.status).toBe(200);
+    expect(newRes.headers.get("X-Content-Fingerprint")).toBe("fp-new");
+    const buf = new Uint8Array(await newRes.arrayBuffer());
+    expect(buf.byteLength).toBe(PDF_BYTES.byteLength + 1);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/integration/ml5-web-query-authority.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml5-web-query-authority.pg.test.ts
new file mode 100644
index 00000000..5bdc10d0
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/ml5-web-query-authority.pg.test.ts
@@ -0,0 +1,172 @@
+/**
+ * Sequence D / D1 — real inspect → apply → reverify → revoke path on DEV PG.
+ * Does not inject a pre-built HumanDecision into a helper alone.
+ */
+import { beforeAll, describe, expect, it } from "vitest";
+import { config } from "dotenv";
+config({ path: ".env.local" });
+
+import { and, eq } from "drizzle-orm";
+import { db } from "@/db/client";
+import { humanDecisions, pilots, preparations } from "@/db/schema";
+import { newId } from "@/lib/ids";
+import { insertHumanDecision } from "@/domains/decisions/service";
+import {
+  applyWebPublicQueryAuthorityDecision,
+  inspectWebPublicQueryAuthorityCandidate,
+  reverifyWebPublicQueryAuthorityAtEgress,
+} from "@/domains/conversation/web-public-query-authority";
+import { createProjectCommand } from "@/domains/preparation/create-project";
+import {
+  openOrCreatePreparation,
+  updatePreview,
+} from "@/domains/preparation/service";
+
+const dockerOk = () => Boolean(process.env.DATABASE_URL?.includes("5433"));
+const QUERY = "HTTP/3 site:datatracker.ietf.org";
+const POLICY = "ml5-cog-policy-v5-provisional-v0.2-20261126";
+
+describe.skipIf(!dockerOk())("ML5 WEB D6 inspect→apply→egress PG", () => {
+  beforeAll(() => {
+    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
+    process.env.STUDIO_LANE = "DEV";
+  });
+
+  it("create via inspect+apply, reverify ok, revoke denies checkpoint reuse", async () => {
+    const pilotId = newId("pilot");
+    await db.insert(pilots).values({
+      id: pilotId,
+      displayName: "D6-WEB",
+      githubUserId: `gh-${pilotId}`,
+    });
+    const prep = await openOrCreatePreparation(pilotId);
+    await updatePreview(pilotId, prep.id, "D6-WEB-proj", "authority");
+    const refreshed = (
+      await db.select().from(preparations).where(eq(preparations.id, prep.id))
+    )[0]!;
+    const created = await createProjectCommand({
+      pilotId,
+      preparationId: prep.id,
+      expectedCreationRevision: refreshed.creationRevision,
+      projectName: "D6-WEB-proj",
+      previewSummary: "authority",
+      idempotencyKey: newId("idem"),
+    });
+    expect(["CREATED", "ALREADY_CREATED"]).toContain(created.status);
+    const projectId = created.projectId!;
+
+    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
+    const inspected = inspectWebPublicQueryAuthorityCandidate({
+      pilotText: `AUTHORIZE_PUBLIC_QUERY: "${QUERY}"`,
+      projectId,
+      pilotId,
+      purpose: "public protocol documentation research",
+      policyVersion: POLICY,
+      expiresAt,
+    });
+    expect(inspected.ok).toBe(true);
+    if (!inspected.ok) throw new Error("inspection failed");
+
+    const applied = await applyWebPublicQueryAuthorityDecision({
+      pilotId,
+      projectId,
+      inspection: inspected.inspection,
+      inspectedFingerprint: inspected.inspection.inspectedFingerprint,
+      confirmed: true,
+      sourceRef: "pg-d6-web-act",
+    });
+    expect(applied.allowed).toBe(true);
+    if (!applied.allowed) throw new Error("apply failed");
+
+    const row = (
+      await db
+        .select()
+        .from(humanDecisions)
+        .where(eq(humanDecisions.id, applied.decisionId))
+        .limit(1)
+    )[0];
+    expect(row?.kind).toBe("RECORD_DECISION");
+    expect(row?.effectConditions).toContain("expiresAt");
+    expect(row?.effectConditions).toContain("public_web_search");
+
+    const ok = await reverifyWebPublicQueryAuthorityAtEgress({
+      query: QUERY,
+      projectId,
+      pilotId,
+      policyVersion: POLICY,
+      decisionId: applied.decisionId,
+    });
+    expect(ok.allowed).toBe(true);
+
+    // Checkpoint reuse after revoke must fail closed.
+    await db.transaction(async (tx) => {
+      await insertHumanDecision(tx, {
+        projectId,
+        pilotId,
+        sourceKind: "WEB_PUBLIC_QUERY",
+        sourceRef: "revoke-act",
+        kind: "REVOKE_DECISION",
+        objectRef: inspected.inspection.objectRef,
+        statement: "revoke WEB query",
+        revokesDecisionId: applied.decisionId,
+      });
+    });
+
+    const denied = await reverifyWebPublicQueryAuthorityAtEgress({
+      query: QUERY,
+      projectId,
+      pilotId,
+      policyVersion: POLICY,
+      decisionId: applied.decisionId,
+    });
+    expect(denied.allowed).toBe(false);
+    if (denied.allowed) throw new Error("expected deny");
+    expect(denied.reasonCode).toBe("REVOKED_OR_SUPERSEDED");
+
+    // Expired binding reuse (synthetic past now).
+    const expiredInspect = inspectWebPublicQueryAuthorityCandidate({
+      pilotText: `AUTHORIZE_PUBLIC_QUERY: "RFC 9110 HTTP semantics"`,
+      projectId,
+      pilotId,
+      purpose: "http semantics",
+      policyVersion: POLICY,
+      expiresAt: new Date(Date.now() + 30_000).toISOString(),
+    });
+    expect(expiredInspect.ok).toBe(true);
+    if (!expiredInspect.ok) throw new Error("exp inspection failed");
+    const expiredApply = await applyWebPublicQueryAuthorityDecision({
+      pilotId,
+      projectId,
+      inspection: expiredInspect.inspection,
+      inspectedFingerprint: expiredInspect.inspection.inspectedFingerprint,
+      confirmed: true,
+      sourceRef: "pg-d6-web-exp",
+    });
+    expect(expiredApply.allowed).toBe(true);
+    if (!expiredApply.allowed) throw new Error("exp apply failed");
+    const expiredReverify = await reverifyWebPublicQueryAuthorityAtEgress({
+      query: "RFC 9110 HTTP semantics",
+      projectId,
+      pilotId,
+      policyVersion: POLICY,
+      decisionId: expiredApply.decisionId,
+      now: Date.now() + 60_000,
+    });
+    expect(expiredReverify.allowed).toBe(false);
+    if (expiredReverify.allowed) throw new Error("expected expire");
+    expect(expiredReverify.reasonCode).toBe("EXPIRED");
+
+    // Ensure revoke row exists (opposable history).
+    const revokeRows = await db
+      .select({ id: humanDecisions.id })
+      .from(humanDecisions)
+      .where(
+        and(
+          eq(humanDecisions.projectId, projectId),
+          eq(humanDecisions.kind, "REVOKE_DECISION"),
+          eq(humanDecisions.revokesDecisionId, applied.decisionId),
+        ),
+      );
+    expect(revokeRows.length).toBeGreaterThanOrEqual(1);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-pdf-extract.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-pdf-extract.test.ts
index 9238ae2c..326b84d3 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-pdf-extract.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-pdf-extract.test.ts
@@ -1,7 +1,15 @@
 import { readFileSync } from "node:fs";
 import path from "node:path";
-import { describe, expect, it } from "vitest";
-import { extractPdfText, isPdfPathOrMime } from "@/domains/documents/pdf-extract-server";
+import { beforeEach, describe, expect, it } from "vitest";
+import {
+  __resetPdfExtractConcurrencyForTests,
+  extractPdfText,
+  isPdfPathOrMime,
+} from "@/domains/documents/pdf-extract-server";
+import {
+  DEFAULT_PDF_READ_LIMITS,
+  resolvePdfReadLimits,
+} from "@/domains/documents/pdf-read-contract";

 function fixturePdfBytes(): Uint8Array {
   return new Uint8Array(
@@ -12,6 +20,10 @@ function fixturePdfBytes(): Uint8Array {
 }

 describe("ML5 PDF extract server", () => {
+  beforeEach(() => {
+    __resetPdfExtractConcurrencyForTests();
+  });
+
   it("detects pdf path and mime", () => {
     expect(isPdfPathOrMime("docs/a.pdf")).toBe(true);
     expect(isPdfPathOrMime("https://ex.invalid/x.PDF?x=1")).toBe(true);
@@ -19,6 +31,19 @@ describe("ML5 PDF extract server", () => {
     expect(isPdfPathOrMime("x", "application/pdf")).toBe(true);
   });

+  it("exposes size/pages/chars/time/concurrency/decompress/render limits", () => {
+    const lim = resolvePdfReadLimits({});
+    expect(lim.maxBytes).toBe(DEFAULT_PDF_READ_LIMITS.maxBytes);
+    expect(lim.maxPages).toBe(DEFAULT_PDF_READ_LIMITS.maxPages);
+    expect(lim.maxTextChars).toBe(DEFAULT_PDF_READ_LIMITS.maxTextChars);
+    expect(lim.timeoutMs).toBe(DEFAULT_PDF_READ_LIMITS.timeoutMs);
+    expect(lim.maxConcurrency).toBe(DEFAULT_PDF_READ_LIMITS.maxConcurrency);
+    expect(lim.maxDecompressBytes).toBe(
+      DEFAULT_PDF_READ_LIMITS.maxDecompressBytes,
+    );
+    expect(lim.maxRenderPixels).toBe(DEFAULT_PDF_READ_LIMITS.maxRenderPixels);
+  });
+
   it("extracts text from the multi-page fixture PDF", async () => {
     const bytes = fixturePdfBytes();
     const result = await extractPdfText({
@@ -73,4 +98,59 @@ describe("ML5 PDF extract server", () => {
       else process.env.SFIA_PDF_MAX_BYTES = prev;
     }
   });
+
+  it("blocks active content markers", async () => {
+    const header = "%PDF-1.4\n";
+    const body = "/JavaScript (app.alert('x'))\n/OpenAction << /S /JavaScript >>\n";
+    const bytes = new TextEncoder().encode(header + body);
+    const result = await extractPdfText({
+      bytes,
+      identity: {
+        provenance: "FIXTURE",
+        sourceRef: "fixture:js",
+        versionToken: null,
+        mimeClaimed: "application/pdf",
+      },
+    });
+    expect(result.ok).toBe(false);
+    if (!result.ok) expect(result.reasonCode).toBe("ACTIVE_CONTENT_BLOCKED");
+  });
+
+  it("honours abort signal (cancel)", async () => {
+    const ac = new AbortController();
+    ac.abort();
+    const result = await extractPdfText({
+      bytes: fixturePdfBytes(),
+      identity: {
+        provenance: "FIXTURE",
+        sourceRef: "fixture:cancel",
+        versionToken: null,
+        mimeClaimed: "application/pdf",
+      },
+      signal: ac.signal,
+    });
+    expect(result.ok).toBe(false);
+    if (!result.ok) expect(result.reasonCode).toBe("CANCELLED");
+  });
+
+  it("refuses when decompress budget is tiny", async () => {
+    const prev = process.env.SFIA_PDF_MAX_DECOMPRESS_BYTES;
+    process.env.SFIA_PDF_MAX_DECOMPRESS_BYTES = "8";
+    try {
+      const result = await extractPdfText({
+        bytes: fixturePdfBytes(),
+        identity: {
+          provenance: "FIXTURE",
+          sourceRef: "fixture:inflate",
+          versionToken: null,
+          mimeClaimed: "application/pdf",
+        },
+      });
+      expect(result.ok).toBe(false);
+      if (!result.ok) expect(result.reasonCode).toBe("DECOMPRESS_BUDGET_EXCEEDED");
+    } finally {
+      if (prev === undefined) delete process.env.SFIA_PDF_MAX_DECOMPRESS_BYTES;
+      else process.env.SFIA_PDF_MAX_DECOMPRESS_BYTES = prev;
+    }
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
index 5dcc6af2..fc12a10b 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
@@ -9,6 +9,7 @@ import {
   assertDirectOpenAllowed,
   commitDirectOpen,
   commitProviderEmission,
+  buildInputTokenCountPayload,
   conservativeBodyTokenEstimate,
   createFrontierAwareFetch,
   enableHttpMetaCaptureForTests,
@@ -17,6 +18,8 @@ import {
   getEmissionsObservedForTests,
   getHttpAttempt,
   getHttpBodiesObservedForTests,
+  HOSTED_BOUND_REQUIRES_MAX_TOOL_CALLS,
+  inputCountPayloadFingerprint,
   ProviderEmissionRefusedError,
   releaseProviderEmission,
   reserveHttpEmission,
@@ -365,24 +368,29 @@ describe("S2/A — HTTP provider emission frontier", () => {
     });
   });

-  it("reserves conservative body estimate for input limit — never per-request ceiling", async () => {
+  it("body-length estimate is indication only — never a strict campaign guarantee", () => {
+    const bodyObj = {
+      model: "gpt-6.1-terra",
+      input: [{ type: "text", text: "x".repeat(6000) }],
+    };
+    const estimate = conservativeBodyTokenEstimate(bodyObj);
+    expect(estimate).not.toBeNull();
+    expect(estimate).not.toBe(100_000);
+    expect(buildInputTokenCountPayload(bodyObj)).toEqual({
+      model: "gpt-6.1-terra",
+      input: bodyObj.input,
+    });
+  });
+
+  it("refuses INPUT_UNBOUNDED when campaign requires native count and none is available", async () => {
     await runWithProviderEmissionStoreAsync(async () => {
       beginCampaignEnvelope({
         maxHttpAttempts: 5,
-        maxInputTokens: 500_000,
-        maxInputTokensPerRequest: 100_000,
+        maxInputTokens: 10_000,
         maxOutputTokensPerRequest: 500,
+        requireNativeInputBound: true,
         required: true,
       });
-      const substantialInput = "x".repeat(6000);
-      const bodyObj = {
-        model: "gpt-6.1-terra",
-        max_output_tokens: 100,
-        reasoning: { effort: "medium" },
-        input: [{ type: "text", text: substantialInput }],
-      };
-      const expectedEstimate = conservativeBodyTokenEstimate(bodyObj);
-      expect(expectedEstimate).not.toBe(100_000);
       await withLaneEnv(async () => {
         assertSdkInvocationAdmission({
           kind: "campaign.probe",
@@ -392,26 +400,65 @@ describe("S2/A — HTTP provider emission frontier", () => {
         });
         const r = reserveHttpEmission({
           url: "https://api.openai.com/v1/responses",
-          body: JSON.stringify(bodyObj),
+          body: JSON.stringify({
+            model: "gpt-6.1-terra",
+            max_output_tokens: 50,
+            reasoning: { effort: "medium" },
+            input: [{ type: "text", text: "hello" }],
+            // estimate must NOT satisfy requireNativeInputBound
+            sfia_estimated_input_tokens: 12,
+          }),
           effort: "medium",
         });
-        expect(r.ok).toBe(true);
-        if (!r.ok) throw new Error("r");
-        expect(r.reservedInputTokens).toBe(expectedEstimate);
-        expect(r.reservedInputTokens).not.toBe(100_000);
-        expect(getHttpAttempt(r.attemptId)?.inputBoundKind).toBe("estimate");
+        expect(r.ok).toBe(false);
+        if (r.ok) throw new Error("r");
+        expect(r.reasonCode).toBe("INPUT_UNBOUNDED");
       });
     });
   });

-  it("refuses INPUT_UNBOUNDED when campaign has input limit and body is empty", async () => {
+  it("native input_tokens count then Responses emission — no recursion as generation", async () => {
     await runWithProviderEmissionStoreAsync(async () => {
       beginCampaignEnvelope({
-        maxHttpAttempts: 5,
-        maxInputTokens: 10_000,
+        maxHttpAttempts: 3,
+        maxInputTokenCountAttempts: 4,
+        maxInputTokens: 50_000,
+        maxInputTokensPerRequest: 10_000,
         maxOutputTokensPerRequest: 500,
+        requireNativeInputBound: true,
         required: true,
       });
+      enableHttpMetaCaptureForTests();
+      const bodyObj = {
+        model: "gpt-6.1-terra",
+        reasoning: { effort: "medium" },
+        input: [{ type: "message", role: "user", content: "count-me" }],
+        tools: [
+          {
+            type: "function",
+            name: "lookup",
+            parameters: { type: "object", properties: {} },
+          },
+        ],
+      };
+      const fingerprint = inputCountPayloadFingerprint(bodyObj);
+      expect(fingerprint).toBeTruthy();
+      const urls: string[] = [];
+      const fakeFetch = (async (input: RequestInfo | URL) => {
+        const u = String(input);
+        urls.push(u);
+        if (u.includes("/input_tokens")) {
+          return new Response(
+            JSON.stringify({ object: "response.input_tokens", input_tokens: 128 }),
+            { status: 200, headers: { "content-type": "application/json" } },
+          );
+        }
+        return new Response(JSON.stringify({ id: "resp", output: [] }), {
+          status: 200,
+          headers: { "content-type": "application/json" },
+        });
+      }) as typeof fetch;
+      const gated = createFrontierAwareFetch(fakeFetch);
       await withLaneEnv(async () => {
         assertSdkInvocationAdmission({
           kind: "campaign.probe",
@@ -419,27 +466,34 @@ describe("S2/A — HTTP provider emission frontier", () => {
           effort: "medium",
           env: process.env,
         });
-        const r = reserveHttpEmission({
-          url: "https://api.openai.com/v1/responses",
-          body: JSON.stringify({}),
-          modelId: "gpt-6.1-terra",
-          effort: "medium",
-          skipModelAdmission: true,
+        await gated("https://api.openai.com/v1/responses", {
+          method: "POST",
+          body: JSON.stringify(bodyObj),
         });
-        expect(r.ok).toBe(false);
-        if (r.ok) throw new Error("r");
-        expect(r.reasonCode).toBe("INPUT_UNBOUNDED");
+        expect(urls.some((u) => u.includes("/input_tokens"))).toBe(true);
+        expect(urls.some((u) => /\/v1\/responses$/.test(u.replace(/\/+$/, "")) || u.endsWith("/v1/responses"))).toBe(
+          true,
+        );
+        expect(getActiveCampaignEnvelope()?.inputTokenCountAttemptsCommitted).toBe(1);
+        expect(getActiveCampaignEnvelope()?.httpAttemptsCommitted).toBe(1);
+        expect(getActiveCampaignEnvelope()?.inputTokensReserved).toBe(128);
+        const bodies = getHttpBodiesObservedForTests();
+        expect(bodies.some((b) => b.kind === "http.input_tokens_count")).toBe(true);
+        expect(bodies.some((b) => b.kind === "http.responses" && b.maxOutputTokens === 500)).toBe(
+          true,
+        );
       });
     });
   });

-  it("refuses when conservative input estimate exceeds maxInputTokensPerRequest", async () => {
+  it("refuses when native count exceeds maxInputTokensPerRequest", async () => {
     await runWithProviderEmissionStoreAsync(async () => {
       beginCampaignEnvelope({
         maxHttpAttempts: 5,
         maxInputTokens: 500_000,
         maxInputTokensPerRequest: 50,
         maxOutputTokensPerRequest: 500,
+        requireNativeInputBound: true,
         required: true,
       });
       await withLaneEnv(async () => {
@@ -456,6 +510,7 @@ describe("S2/A — HTTP provider emission frontier", () => {
             max_output_tokens: 50,
             reasoning: { effort: "medium" },
             input: [{ type: "text", text: "z".repeat(500) }],
+            sfia_native_input_tokens: 200,
           }),
           effort: "medium",
         });
@@ -469,6 +524,81 @@ describe("S2/A — HTTP provider emission frontier", () => {
     });
   });

+  it("refuses hosted web_search without max_tool_calls when maxHostedSearches set", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({
+        maxHttpAttempts: 2,
+        maxHostedSearches: 1,
+        required: true,
+      });
+      await withLaneEnv(async () => {
+        assertSdkInvocationAdmission({
+          kind: "nora.generate_reply",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+        const r = reserveHttpEmission({
+          url: "https://api.openai.com/v1/responses",
+          body: JSON.stringify({
+            model: "gpt-6.1-terra",
+            max_output_tokens: 50,
+            reasoning: { effort: "medium" },
+            tools: [{ type: "web_search" }],
+            // no max_tool_calls — ASSUMED_1 forbidden
+          }),
+          effort: "medium",
+        });
+        expect(r.ok).toBe(false);
+        if (r.ok) throw new Error("r");
+        expect(r.reason).toContain(HOSTED_BOUND_REQUIRES_MAX_TOOL_CALLS);
+      });
+    });
+  });
+
+  it("injects max_tool_calls=1 for hosted campaign Responses via frontier fetch", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({
+        maxHttpAttempts: 2,
+        maxHostedSearches: 2,
+        required: true,
+      });
+      enableHttpMetaCaptureForTests();
+      let wireBody: Record<string, unknown> | null = null;
+      const fakeFetch = (async (_input: RequestInfo | URL, init?: RequestInit) => {
+        wireBody = JSON.parse(String(init?.body ?? "{}")) as Record<string, unknown>;
+        return new Response(JSON.stringify({ id: "r" }), {
+          status: 200,
+          headers: { "content-type": "application/json" },
+        });
+      }) as typeof fetch;
+      const gated = createFrontierAwareFetch(fakeFetch);
+      await withLaneEnv(async () => {
+        assertSdkInvocationAdmission({
+          kind: "nora.generate_reply",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+        await gated("https://api.openai.com/v1/responses", {
+          method: "POST",
+          body: JSON.stringify({
+            model: "gpt-6.1-terra",
+            max_output_tokens: 50,
+            reasoning: { effort: "medium" },
+            tools: [{ type: "web_search" }],
+          }),
+        });
+        expect(wireBody?.max_tool_calls).toBe(1);
+        expect(getActiveCampaignEnvelope()?.hostedSearchesCommitted).toBe(1);
+        const meta = getHttpBodiesObservedForTests().find(
+          (b) => b.kind === "http.responses",
+        );
+        expect(meta?.maxToolCalls).toBe(1);
+      });
+    });
+  });
+
   it("refuses approximate openai hostname (no fuzzy host match)", async () => {
     await runWithProviderEmissionStoreAsync(async () => {
       beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-sdk-agents-tool-loop.integration.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-sdk-agents-tool-loop.integration.test.ts
index 55624417..81acf4a8 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-provider-sdk-agents-tool-loop.integration.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-sdk-agents-tool-loop.integration.test.ts
@@ -67,16 +67,29 @@ describe("P1.4 — Agents SDK tool loop through frontier", () => {
         });

         let httpN = 0;
-        const transport = (async (_input: RequestInfo | URL, init?: RequestInit) => {
+        let responsesN = 0;
+        const transport = (async (input: RequestInfo | URL, init?: RequestInit) => {
           httpN += 1;
+          const url = String(input);
           const bodyStr =
             typeof init?.body === "string"
               ? init.body
               : init?.body
                 ? String(init.body)
                 : "";
+          // Native input_tokens count — not a Responses generation.
+          if (url.includes("/input_tokens")) {
+            return new Response(
+              JSON.stringify({
+                object: "response.input_tokens",
+                input_tokens: 240,
+              }),
+              { status: 200, headers: { "content-type": "application/json" } },
+            );
+          }
+          responsesN += 1;
           // First Responses call: ask for a function tool.
-          if (httpN === 1) {
+          if (responsesN === 1) {
             return new Response(
               responsesBody({
                 id: "resp_tool_call",
@@ -156,13 +169,17 @@ describe("P1.4 — Agents SDK tool loop through frontier", () => {
           maxTurns: 4,
         } as never);

-        expect(httpN).toBeGreaterThanOrEqual(2);
+        expect(responsesN).toBeGreaterThanOrEqual(2);
+        expect(httpN).toBeGreaterThanOrEqual(responsesN);
         expect(getEmissionsObservedForTests()).toBeGreaterThanOrEqual(2);
         const bodies = getHttpBodiesObservedForTests();
         expect(bodies.length).toBeGreaterThanOrEqual(2);
-        for (const b of bodies) {
+        const responseBodies = bodies.filter((b) => b.kind === "http.responses");
+        expect(responseBodies.length).toBeGreaterThanOrEqual(2);
+        for (const b of responseBodies) {
           expect(b.maxOutputTokens).toBe(512);
         }
+        expect(bodies.some((b) => b.kind === "http.input_tokens_count")).toBe(true);
         // Independent oracle: transport call count, not only frontier counter.
         expect(httpN).toBe(getEmissionsObservedForTests());
         expect(String((result as { finalOutput?: unknown }).finalOutput ?? result)).toBeTruthy();
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-web-query-authority.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-web-query-authority.test.ts
index 32a655fd..1b2f596f 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-web-query-authority.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-web-query-authority.test.ts
@@ -1,7 +1,9 @@
-import { describe, expect, it } from "vitest";
+import { describe, expect, it, vi, beforeEach } from "vitest";
 import {
   buildWebPublicQueryEffectConditions,
   buildWebPublicQueryObjectRef,
+  fingerprintWebPublicQueryInspection,
+  inspectWebPublicQueryAuthorityCandidate,
   parseWebPublicQueryEffectConditions,
   promoteExactQueriesFromAuthority,
   validateWebPublicQueryDecisionRow,
@@ -12,6 +14,8 @@ import {
   resolvePublicWebRegistry,
 } from "@/domains/conversation/public-web-registry";

+const futureExpiry = new Date(Date.now() + 60 * 60 * 1000).toISOString();
+
 const basePayload = {
   query: "HTTP/3 site:datatracker.ietf.org",
   destination: WEB_PUBLIC_QUERY_DESTINATION,
@@ -19,6 +23,7 @@ const basePayload = {
   projectId: "prj_test",
   pilotId: "pilot_a",
   policyVersion: "pol_v3",
+  expiresAt: futureExpiry,
 };

 describe("S5 — WEB public query authority (parse ≠ D6)", () => {
@@ -98,10 +103,23 @@ describe("S5 — WEB public query authority (parse ≠ D6)", () => {
     expect(r.limits).toContain("PILOT_EXACT_PARSE_NOT_PROMOTED");
   });

-  it("parseWebPublicQueryEffectConditions fails closed on missing/malformed", () => {
+  it("parseWebPublicQueryEffectConditions fails closed on missing/malformed/incomplete", () => {
     expect(parseWebPublicQueryEffectConditions(null).ok).toBe(false);
     expect(parseWebPublicQueryEffectConditions("not-json").ok).toBe(false);
     expect(parseWebPublicQueryEffectConditions("{}").ok).toBe(false);
+    // missing expiresAt
+    expect(
+      parseWebPublicQueryEffectConditions(
+        JSON.stringify({
+          query: basePayload.query,
+          destination: WEB_PUBLIC_QUERY_DESTINATION,
+          purpose: basePayload.purpose,
+          projectId: basePayload.projectId,
+          pilotId: basePayload.pilotId,
+          policyVersion: basePayload.policyVersion,
+        }),
+      ).ok,
+    ).toBe(false);
     const valid = parseWebPublicQueryEffectConditions(
       buildWebPublicQueryEffectConditions(basePayload),
     );
@@ -109,9 +127,10 @@ describe("S5 — WEB public query authority (parse ≠ D6)", () => {
     if (!valid.ok) throw new Error("expected ok");
     expect(valid.payload.policyVersion).toBe("pol_v3");
     expect(valid.payload.destination).toBe(WEB_PUBLIC_QUERY_DESTINATION);
+    expect(valid.payload.expiresAt).toBeTruthy();
   });

-  it("validateWebPublicQueryDecisionRow enforces kind, state, policy, payload", () => {
+  it("validateWebPublicQueryDecisionRow enforces kind, state, policy, purpose, expiry, payload", () => {
     const objectRef = buildWebPublicQueryObjectRef(basePayload);
     const ec = buildWebPublicQueryEffectConditions(basePayload);
     const row = {
@@ -157,6 +176,40 @@ describe("S5 — WEB public query authority (parse ≠ D6)", () => {
     if (wrongPolicy.allowed) throw new Error("expected deny");
     expect(wrongPolicy.reasonCode).toBe("POLICY_VERSION_MISMATCH");

+    const noPolicy = validateWebPublicQueryDecisionRow(row, {
+      query: basePayload.query,
+      projectId: basePayload.projectId,
+      pilotId: basePayload.pilotId,
+      objectRef,
+    });
+    expect(noPolicy.allowed).toBe(false);
+    if (noPolicy.allowed) throw new Error("expected deny");
+    expect(noPolicy.reasonCode).toBe("POLICY_VERSION_REQUIRED");
+
+    const expired = validateWebPublicQueryDecisionRow(row, {
+      query: basePayload.query,
+      projectId: basePayload.projectId,
+      pilotId: basePayload.pilotId,
+      policyVersion: basePayload.policyVersion,
+      objectRef,
+      now: Date.parse(futureExpiry) + 1,
+    });
+    expect(expired.allowed).toBe(false);
+    if (expired.allowed) throw new Error("expected deny");
+    expect(expired.reasonCode).toBe("EXPIRED");
+
+    const purposeMismatch = validateWebPublicQueryDecisionRow(row, {
+      query: basePayload.query,
+      projectId: basePayload.projectId,
+      pilotId: basePayload.pilotId,
+      policyVersion: basePayload.policyVersion,
+      purpose: "other purpose",
+      objectRef,
+    });
+    expect(purposeMismatch.allowed).toBe(false);
+    if (purposeMismatch.allowed) throw new Error("expected deny");
+    expect(purposeMismatch.reasonCode).toBe("PAYLOAD_MISMATCH");
+
     const noEc = validateWebPublicQueryDecisionRow(
       { ...row, effectConditions: null },
       {
@@ -171,4 +224,207 @@ describe("S5 — WEB public query authority (parse ≠ D6)", () => {
     if (noEc.allowed) throw new Error("expected deny");
     expect(noEc.reasonCode).toBe("EFFECT_CONDITIONS_INVALID");
   });
-});
\ No newline at end of file
+
+  it("inspect → apply path is the real inspected-decision chain (not helper injection)", async () => {
+    const pilotText = `AUTHORIZE_PUBLIC_QUERY: "${basePayload.query}"`;
+    const inspected = inspectWebPublicQueryAuthorityCandidate({
+      pilotText,
+      projectId: basePayload.projectId,
+      pilotId: basePayload.pilotId,
+      purpose: basePayload.purpose,
+      policyVersion: basePayload.policyVersion,
+      expiresAt: futureExpiry,
+    });
+    expect(inspected.ok).toBe(true);
+    if (!inspected.ok) throw new Error("expected inspection");
+    expect(inspected.inspection.payload.destination).toBe(
+      WEB_PUBLIC_QUERY_DESTINATION,
+    );
+    expect(inspected.inspection.payload.purpose).toBe(basePayload.purpose);
+    expect(inspected.inspection.inspectedFingerprint).toBe(
+      fingerprintWebPublicQueryInspection(
+        inspected.inspection.effectConditions,
+        inspected.inspection.objectRef,
+      ),
+    );
+
+    const refuseUnconfirmed = await (
+      await import("@/domains/conversation/web-public-query-authority")
+    ).applyWebPublicQueryAuthorityDecision({
+      pilotId: basePayload.pilotId,
+      projectId: basePayload.projectId,
+      inspection: inspected.inspection,
+      inspectedFingerprint: inspected.inspection.inspectedFingerprint,
+      confirmed: false,
+      sourceRef: "unit-test-act",
+    });
+    expect(refuseUnconfirmed.allowed).toBe(false);
+    if (refuseUnconfirmed.allowed) throw new Error("expected deny");
+    expect(refuseUnconfirmed.reasonCode).toBe("NOT_CONFIRMED");
+
+    const refuseWrongFp = await (
+      await import("@/domains/conversation/web-public-query-authority")
+    ).applyWebPublicQueryAuthorityDecision({
+      pilotId: basePayload.pilotId,
+      projectId: basePayload.projectId,
+      inspection: inspected.inspection,
+      inspectedFingerprint: "tampered",
+      confirmed: true,
+      sourceRef: "unit-test-act",
+    });
+    expect(refuseWrongFp.allowed).toBe(false);
+    if (refuseWrongFp.allowed) throw new Error("expected deny");
+    expect(refuseWrongFp.reasonCode).toBe("INSPECTION_FINGERPRINT_MISMATCH");
+
+    // Deterministic apply without live DB: exercise validate on the would-be row.
+    const syntheticRow = {
+      id: "dec_from_inspect",
+      pilotId: basePayload.pilotId,
+      kind: "RECORD_DECISION" as const,
+      objectRef: inspected.inspection.objectRef,
+      state: "APPLICABLE",
+      effectConditions: inspected.inspection.effectConditions,
+    };
+    const applied = validateWebPublicQueryDecisionRow(syntheticRow, {
+      query: basePayload.query,
+      projectId: basePayload.projectId,
+      pilotId: basePayload.pilotId,
+      policyVersion: basePayload.policyVersion,
+      purpose: basePayload.purpose,
+      objectRef: inspected.inspection.objectRef,
+    });
+    expect(applied.allowed).toBe(true);
+
+    // Checkpoint reuse simulation: same decisionId/objectRef re-validated later.
+    const reused = validateWebPublicQueryDecisionRow(syntheticRow, {
+      query: basePayload.query,
+      projectId: basePayload.projectId,
+      pilotId: basePayload.pilotId,
+      policyVersion: basePayload.policyVersion,
+      objectRef: inspected.inspection.objectRef,
+    });
+    expect(reused.allowed).toBe(true);
+
+    // Checkpoint reuse after expiry must fail closed.
+    const reusedExpired = validateWebPublicQueryDecisionRow(syntheticRow, {
+      query: basePayload.query,
+      projectId: basePayload.projectId,
+      pilotId: basePayload.pilotId,
+      policyVersion: basePayload.policyVersion,
+      objectRef: inspected.inspection.objectRef,
+      now: Date.parse(futureExpiry) + 5_000,
+    });
+    expect(reusedExpired.allowed).toBe(false);
+    if (reusedExpired.allowed) throw new Error("expected deny");
+    expect(reusedExpired.reasonCode).toBe("EXPIRED");
+  });
+
+  it("inspect refuses missing purpose / policy / project", () => {
+    const pilotText = `AUTHORIZE_PUBLIC_QUERY: "${basePayload.query}"`;
+    expect(
+      inspectWebPublicQueryAuthorityCandidate({
+        pilotText,
+        projectId: "",
+        pilotId: basePayload.pilotId,
+        purpose: basePayload.purpose,
+        policyVersion: basePayload.policyVersion,
+      }).ok,
+    ).toBe(false);
+    expect(
+      inspectWebPublicQueryAuthorityCandidate({
+        pilotText,
+        projectId: basePayload.projectId,
+        pilotId: basePayload.pilotId,
+        purpose: "",
+        policyVersion: basePayload.policyVersion,
+      }).ok,
+    ).toBe(false);
+    expect(
+      inspectWebPublicQueryAuthorityCandidate({
+        pilotText,
+        projectId: basePayload.projectId,
+        pilotId: basePayload.pilotId,
+        purpose: basePayload.purpose,
+        policyVersion: "",
+      }).ok,
+    ).toBe(false);
+  });
+});
+
+describe("S5 — inspect→apply with mocked DB (create→inspect→apply)", () => {
+  beforeEach(() => {
+    vi.resetModules();
+  });
+
+  it("apply inserts RECORD_DECISION with effectConditions then reverify path uses decisionId", async () => {
+    const inserted: Array<Record<string, unknown>> = [];
+    vi.doMock("@/db/client", () => ({
+      db: {
+        transaction: async (fn: (tx: unknown) => Promise<string>) =>
+          fn({
+            insert: () => ({
+              values: async (v: Record<string, unknown>) => {
+                inserted.push(v);
+              },
+            }),
+          }),
+        select: () => {
+          const chain = {
+            from: () => chain,
+            where: () => chain,
+            limit: async () => [
+              {
+                id: basePayload.projectId,
+                ownerPilotId: basePayload.pilotId,
+              },
+            ],
+          };
+          return chain;
+        },
+      },
+    }));
+    vi.doMock("@/domains/decisions/service", () => ({
+      insertHumanDecision: async (
+        _tx: unknown,
+        input: { kind: string; effectConditions: string; objectRef: string },
+      ) => {
+        inserted.push(input as unknown as Record<string, unknown>);
+        expect(input.kind).toBe("RECORD_DECISION");
+        expect(input.effectConditions).toContain("expiresAt");
+        expect(input.objectRef.startsWith("web.public_query:")).toBe(true);
+        return "dec_applied_1";
+      },
+    }));
+
+    const {
+      inspectWebPublicQueryAuthorityCandidate: inspect,
+      applyWebPublicQueryAuthorityDecision: apply,
+    } = await import("@/domains/conversation/web-public-query-authority");
+
+    const pilotText = `AUTHORIZE_PUBLIC_QUERY: "${basePayload.query}"`;
+    const inspected = inspect({
+      pilotText,
+      projectId: basePayload.projectId,
+      pilotId: basePayload.pilotId,
+      purpose: basePayload.purpose,
+      policyVersion: basePayload.policyVersion,
+      expiresAt: futureExpiry,
+    });
+    expect(inspected.ok).toBe(true);
+    if (!inspected.ok) throw new Error("expected inspection");
+
+    const applied = await apply({
+      pilotId: basePayload.pilotId,
+      projectId: basePayload.projectId,
+      inspection: inspected.inspection,
+      inspectedFingerprint: inspected.inspection.inspectedFingerprint,
+      confirmed: true,
+      sourceRef: "turn_abc",
+    });
+    expect(applied.allowed).toBe(true);
+    if (!applied.allowed) throw new Error("expected allow");
+    expect(applied.decisionId).toBe("dec_applied_1");
+    expect(applied.query).toBe(basePayload.query);
+    expect(inserted.length).toBeGreaterThanOrEqual(1);
+  });
+});

```
## 12. Construction/docs diffs
```diff
diff --git a/projects/sfia-studio-next/construction/as-built-ml5-provider-native-bounds-20261126.md b/projects/sfia-studio-next/construction/as-built-ml5-provider-native-bounds-20261126.md
new file mode 100644
index 00000000..ddae186f
--- /dev/null
+++ b/projects/sfia-studio-next/construction/as-built-ml5-provider-native-bounds-20261126.md
@@ -0,0 +1,36 @@
+# As-built — Comptage natif fournisseur, max_tool_calls, FinOps même périmètre (2026-11-26)
+
+## Causes racines traitées
+
+1. **Estimation `len/3` présentée comme borne** → remplacée, pour enveloppes strictes, par `client.responses.inputTokens.count` (`openai@7.50`) avant émission Responses.
+2. **`HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1`** → refus ; injection / exigence de `max_tool_calls` ; arbitrage : borne = appels built-in, **pas** recherches facturées.
+3. **FinOps comparaison campagne vs period=7 pilot** → réconciliation work-scope `cgw_b20fcbe3…` ; script verdict refuse ALL PASS si PARTIAL/BLOCKED/NOT RUN.
+
+## Contrat de comptage
+
+- Payload count = sous-ensemble `InputTokenCountParams` (model, input, instructions, tools, reasoning, …).
+- `max_output_tokens` / `max_tool_calls` exclus du count (injectés après).
+- Fingerprint SHA-256 des champs count ; ALS `nativeInputCount` ; récursion fetch évitée via URL `/responses/input_tokens`.
+- Compteurs campagne distincts `inputTokenCountAttempts*` ; pas d’attribution de coût de génération au comptage.
+- LIVE : count=28 ≡ usage.input_tokens=28 ; modelApplied observé `gpt-6.1-terra`.
+
+## FinOps
+
+- PG : 16 rows (8 usage + 8 correlation) ; billable requests 8.
+- API/UI work detail : 8 requêtes, 123 377 tokens, coût PARTIAL ~0,05 $.
+- Timeline conserve les lignes de corrélation ; agrégats les excluent.
+
+## D6 / PDF
+
+- Authority WEB : contrôles purpose/destination/scope/policyVersion/révocation/expiration étendus (tests unit).
+- PDF endpoint PG : 8 scénarios PASS (owner/other/lane/expiry/version/work).
+- Robustesse extract : limites documentées/étendues dans `pdf-extract-server` / contract.
+
+## Gates
+
+| Gate | Statut |
+|---|---|
+| G-LIVE-API (count ciblé) | CONSUMED — PASS |
+| G-WEB-PUBLIC | NOT CONSUMED — BLOCKED |
+| G-WEB-MIXED | CLOSED |
+| G-RECETTE | NOT CONSUMED |
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index cd18e582..4c0f37c5 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -5117,3 +5117,16 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
 | Contrôles | Vitest unit ml5* 356 PASS · next build EXIT 0 |
 | Réserves | B: GIT PDF text corpus · LIVE SDK multi-req ; C: WEB-05 · F2 · efficience RB ; D: kind WEB optionnel ; A build LEVÉE |
 | Statut | DEV CANDIDATE — FOUNDATION CONFORMANCE — MORRIS REVIEW REQUIRED — NOT ADOPTED |
+
+## DELIV-2026-11-26-ML5-PROVIDER-NATIVE-BOUNDS-AND-RECETTE-PREP
+
+- **Cycle**: R5 / ML5 · CRITICAL · Type 8
+- **UTC**: 2026-11-26T17:23:23.209314+00:00
+- **Focus**: Comptage natif `responses.inputTokens.count` ; `max_tool_calls` hosted ; FinOps même périmètre PG/API/UI ; D6/PDF résiduels ; LIVE count ciblé
+- **Code tip (pré-docs)**: à figer au commit
+- **LIVE native count**: PASS — count=28 ≡ usage.input_tokens=28 (`/tmp/sfia-ml5-g-live-native-count-20261126`)
+- **FinOps reconcile**: work `cgw_b20fcbe3…` PG billableReq=8 ≡ API/UI 8 ; tokens 123377 ; pas de double comptage
+- **G-WEB-PUBLIC**: toujours FERMÉ — `max_tool_calls` borne built-in tool calls ≠ unité facturée hosted (arbitrage actualisé)
+- **WEB**: OFF
+- **NO RELEASE** · RECETTE protégée · livraison 2 non engagée
+
diff --git a/projects/sfia-studio-next/construction/ml5-g-web-public-hosted-bound-arbitration-20261126.md b/projects/sfia-studio-next/construction/ml5-g-web-public-hosted-bound-arbitration-20261126.md
index 8f07d2ab..8ed45989 100644
--- a/projects/sfia-studio-next/construction/ml5-g-web-public-hosted-bound-arbitration-20261126.md
+++ b/projects/sfia-studio-next/construction/ml5-g-web-public-hosted-bound-arbitration-20261126.md
@@ -1,33 +1,49 @@
-# G-WEB-PUBLIC — Dossier d'arbitrage borne hosted (2026-11-26)
+# G-WEB-PUBLIC — Dossier d'arbitrage borne hosted (2026-11-26, màj régularisation)

 Classe : **réserve B** · Gate : **FERMÉ** · Aucune acceptation implicite de `ASSUMED_1`.

+## Qualification `max_tool_calls` (openai@7.50 / Responses)
+
+| Question | Résultat |
+|---|---|
+| Support SDK verrouillé | **Oui** — champ `max_tool_calls` sur Responses create (`responses.d.ts`). |
+| Passage payload final | **Oui** — `injectMaxToolCallsForHostedCampaign` injecte `max_tool_calls: 1` (ou budget restant) lorsque `web_search` / `web_search_preview` est présent et `maxHostedSearches` est défini. |
+| Override silencieux | **Non** — si déjà présent, conservé. |
+| Portée | **Par Response** — plafond du nombre total d'appels aux **outils intégrés** (built-in), tous outils confondus, pas par outil. |
+| Retries | Chaque nouvelle tentative HTTP Responses ré-applique le contrôle / réservation. |
+| Unité facturée | **Non établie** — OpenAI documente des `web_search_call` avec actions `search` / `open_page` / `find_in_page` ; une action peut contenir plusieurs queries. `max_tool_calls: 1` ≠ 1 recherche facturée. |
+| `return_token_budget` | Qualifié doc : valeurs `default` \| `unlimited` sur outil `web_search` (GPT-5+ reasoning). **Ne borne pas** la consommation tokens fournisseur globale ; ne remplace pas l'enveloppe cumulée. |
+
 ## Limite réellement disponible aujourd'hui

-- Studio compte **1 recherche hosted assumée par requête Responses** lorsque le body contient un outil `web_search` / `web_search_preview` (`HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1`).
-- Le moteur hosted OpenAI peut exécuter **plusieurs** recherches internes dans une même requête Responses.
-- Les ouvertures directes B1 sont bornées séparément (`maxDirectOpens`) et consommées **avant** l'effet réseau (succès ou échec).
+- Studio **refuse** désormais `HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1` comme réservation (`HOSTED_BOUND_REQUIRES_MAX_TOOL_CALLS` si outil hosted sans `max_tool_calls`).
+- Avec injection : réservation campagne = valeur `max_tool_calls` (budget d'appels built-in), **pas** une garantie d'unités de recherche facturées.
+- Ouvertures directes B1 : bornées séparément (`maxDirectOpens`), consommées **avant** egress (succès ou échec).

 ## Garantie fournisseur

-Aucune API verrouillée (`openai@7.50` / `@openai/agents@0.21`) n'expose dans ce candidat un compteur hosted opposable « N recherches = N » distinct du nombre de Responses.
+`max_tool_calls` borne les appels d'outils intégrés par Response. Il **n'établit pas** :
+
+1 Response = 1 recherche = 1 unité facturée.
+
+Aucune métrique hosted « N recherches facturées » distincte n'est exposée de façon opposable dans ce candidat.

 ## Risque résiduel

-Sous-comptage hosted → dépassement silencieux de l'enveloppe « 5 recherches hosted » si on levait le gate avec `ASSUMED_1`.
+Sous-comptage des unités facturées / queries internes si G-WEB-PUBLIC était ouvert en assimilant `max_tool_calls` à des recherches hosted facturables.

 ## Alternative d'enveloppe proposée à Morris

-1. **Maintenir G-WEB-PUBLIC fermé** jusqu'à une borne démontrable (instrumentation fournisseur ou plafond Responses=hosted strict documenté).
-2. Ou : enveloppe **Responses-capped** explicite (ex. max 5 Responses avec outil web_search, en acceptant que chaque Response ≤ 1 recherche *assumée* n'est **pas** une garantie) — décision Morris écrite requise.
-3. Ou : désactiver hosted tool et n'autoriser que les ouvertures directes B1 sous `maxDirectOpens` (périmètre réduit).
+1. **Maintenir G-WEB-PUBLIC fermé** jusqu'à une borne démontrable sur l'unité réellement recherchée (recherches / frais outil).
+2. Ou : enveloppe **built-in tool-calls** explicite (ex. max 5 × `max_tool_calls: 1` Responses) — accepter par écrit que l'unité contrôlée est l'appel built-in, **pas** la facturation hosted fine.
+3. Ou : désactiver hosted tool et n'autoriser que les ouvertures directes B1 sous `maxDirectOpens`.

 ## Conséquences

-- Financière : frais hosted non bornés strictement si gate ouvert sous ASSUMED_1.
+- Financière : frais hosted non bornés strictement au niveau « recherche facturée » si gate ouvert sous seule `max_tool_calls`.
 - Sécurité : périmètre WEB LIVE inchangé (DEV, projet public only) ; G-WEB-MIXED reste fermé.
-- Proposition : **ne pas consommer G-WEB-PUBLIC** dans ce cycle ; conserver WEB OFF sur le candidat RECETTE.
+- Proposition cycle : **ne pas consommer G-WEB-PUBLIC** ; conserver WEB OFF sur le candidat RECETTE.

 ## Exit

-GO Morris sur l'une des alternatives 1–3, ou fourniture d'une métrique hosted opposable.
+GO Morris sur l'une des alternatives 1–3, ou preuve LIVE que l'unité facturée est effectivement bornée par le mécanisme retenu.
diff --git a/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md b/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md
index c410ce3a..6c594e20 100644
--- a/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md
+++ b/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md
@@ -1,12 +1,11 @@
-# ML5 — Manifeste candidat RECETTE (convergence 2026-11-26)
+# ML5 — Manifeste candidat RECETTE (régularisation native 2026-11-26)

 | Champ | Valeur |
 |---|---|
 | Date | 2026-11-26 |
 | Branche | `sfia/next-ml5-integrated-delivery-20261123` |
-| HEAD code | `f77a42e434dd1af883b9b43ecc73e022f4757b94` |
-| BUILD_ID | `XGqFqt2I6aCNTZLjirvtW` |
-| Tree / web | post-commit tip |
+| HEAD code | *(figé au commit de régularisation — voir delivery-history)* |
+| BUILD_ID | *(figé au build production post-commit)* |
 | Lock | `@openai/agents@0.21.0` · `openai@7.50.0` · `pdfjs-dist@4.10.38` |
 | Schéma | `022_provider_usage_observations` — **aucune migration** |
 | Classe | **NO RELEASE** |
@@ -21,43 +20,50 @@

 | Capacité | État |
 |---|---|
-| Frontière HTTP + estimate input + restart latch | DETERMINISTIC PROVEN |
-| Agents SDK tool-loop multi-Responses | DETERMINISTIC PROVEN |
-| Investigation LIVE Chantiers360 | LIVE PASS (critères individuels) |
-| FinOps API `/api/finops/*` + UI | LIVE PASS |
-| FinOps no double-count correlation rows | DETERMINISTIC + LIVE |
-| G-WEB-PUBLIC | **BLOCKED** — borne hosted non démontrable |
-| Git PDF text LIVE | **BLOCKED CORPUS MISSING** (fixtures ≠ corpus) |
+| Comptage natif `POST /v1/responses/input_tokens` | **LIVE PASS** — count ≡ usage (28=28) |
+| Frontière : native bound obligatoire si enveloppe stricte | DETERMINISTIC + LIVE |
+| Injection `max_output_tokens` | DETERMINISTIC PROVEN |
+| Injection `max_tool_calls` (hosted) | DETERMINISTIC PROVEN — **≠** unité facturée hosted |
+| Agents SDK tool-loop multi-Responses + count | DETERMINISTIC PROVEN |
+| Investigation LIVE Chantiers360 | LIVE PASS capitalisé (non rejoué) |
+| FinOps PG ↔ API ↔ UI même work scope | **PASS** (`cgw_b20fcbe3…` : 8 req / 123377 tok) |
+| PDF viewer auth PG endpoint | DETERMINISTIC PG PASS (8 scénarios) |
+| D6 WEB authority residual (purpose/destination/policy/revocation/expiry) | DETERMINISTIC extended |
+| G-WEB-PUBLIC | **BLOCKED** — borne hosted facturable non établie |
+| Git PDF text LIVE | **BLOCKED CORPUS MISSING** |
 | F2 visuelle | réservée Morris |

 ## Politique RECETTE proposée (non activée)

-- Terra Medium défaut ; couples Luna L/M expérimentaux **hors** RECETTE sauf GO
-- WEB OFF par défaut
-- Isolation fingerprints lane
-- Dataset DEV isolé ; pas de secrets dans preuves
+- Terra Medium défaut ; Sol L/M/H admis ; Luna L/M expérimentaux **hors** RECETTE sauf GO Morris
+- Terra High candidat sans promotion implicite ; rollback `legacy_sol`
+- WEB OFF par défaut ; WEB public soumis au gate ; G-WEB-MIXED fermé
+- FinOps + OBS ; PDF sur chemins qualifiés
+- Isolation fingerprints lane ; dataset DEV isolé

 ## Réserves A/B/C/D

-| Id | Classe | Isolation |
+| Id | Classe | Isolation / exit |
 |---|---|---|
-| R-G-WEB-PUBLIC-HOSTED | B | WEB OFF ; dossier arbitrage |
-| R-GIT-PDF-TEXT | B | capacité isolée |
-| R-MODEL-APPLIED-UNVERIFIED | C | FinOps PARTIAL honnête |
+| R-G-WEB-PUBLIC-HOSTED | B | WEB OFF ; arbitrage `max_tool_calls` actualisé — GO Morris alternatif 1–3 |
+| R-GIT-PDF-TEXT | B | capacité isolée — corpus textuel autorisé manquant |
 | R-F2 | C | Morris |
 | R-WEB05 | C | si gate WEB ouvert plus tard |
+| R-MODEL-APPLIED | D↓C | LIVE count a observé `model=gpt-6.1-terra` ; conserver UNVERIFIED si non observable |

 **Aucune réserve A ouverte.**

 ## Smoke (DEV artefact)

-- `/login` 200 · `/settings/consumption` 200 · `/dev/pdf-viewer-harness` 200 · projet Chantiers360 200
-- RECETTE :3200 non mutée
+- `/login` 200 · `/settings/consumption` 200 (DOM KPIs) · work detail 8 req / 123 377 tok
+- RECETTE :3200 non mutée · gel `a150926c` inchangé

-## Rollback
+## Rollback RECETTE (procédure — non exécutée)

-Revert tip `f77a42e4` → `f27e0102` ; WEB OFF ; `legacy_sol` si besoin.
+1. Ne pas cutover tant que GO Morris absent.
+2. Si cutover futur : restaurer gel RECETTE `a150926c` (artefact + schéma + flags WEB OFF) — un revert DEV seul ≠ rollback RECETTE.
+3. Vérifier ports 3200/5434, fingerprints, smoke post-restauration.

 ## Verdict manifeste

-**CANDIDATE PREPARED — CUTOVER NOT APPLIED — CONVERGENCE QUALIFIED WITH EXPLICIT CAPABILITY RESERVES (WEB PUBLIC / GIT PDF).**
+**CANDIDATE PREPARED — NATIVE PROVIDER BOUNDS QUALIFIED — CUTOVER NOT APPLIED — CAPABILITY RESERVES (WEB PUBLIC / GIT PDF) EXPLICIT.**
diff --git a/projects/sfia-studio-next/construction/ml5-sequence-d-web-pdf-residual-20261126.md b/projects/sfia-studio-next/construction/ml5-sequence-d-web-pdf-residual-20261126.md
new file mode 100644
index 00000000..a06a887e
--- /dev/null
+++ b/projects/sfia-studio-next/construction/ml5-sequence-d-web-pdf-residual-20261126.md
@@ -0,0 +1,38 @@
+# Sequence D — residual D6 WEB authority + PDF rights/robustness (2026-11-26)
+
+Classe : **NO RELEASE** · Lane : **DEV** · G-WEB-PUBLIC LIVE : **NON CONSOMMÉ** · RECETTE : **NON MUTÉE**
+
+## Gaps closed (this sequence)
+
+| Contrôle | Statut |
+|---|---|
+| Finalité (`purpose`) | Fail-closed dans effectConditions + match optionnel à l'egress |
+| Destination (`public_web_search`) | Fail-closed |
+| Scope projet / pilot | Fail-closed |
+| Droits courants (ownership projet) | Re-proof à apply + egress (`CURRENT_RIGHTS_DENIED`) |
+| Version de politique | **Requise** à validate / reverify / frontier |
+| Révocation | `REVOKE_DECISION` APPLICABLE au dernier mile |
+| Expiration | `expiresAt` obligatoire dans effectConditions |
+| Réutilisation checkpoint | `decisionId` + reverify (expiry/révocation/droits) |
+| Parcours inspect → apply | `inspectWebPublicQueryAuthorityCandidate` → `applyWebPublicQueryAuthorityDecision` (RECORD_DECISION + effectConditions) |
+| PDF endpoint PG | Tests nominal / autre pilot / projet / révoqué / lane / expiré / work / version |
+| PDF limites size/pages/chars/time/concurrency/cancel/active-content/render-dims | Qualifiées ou bloquées explicitement |
+
+## GIT PDF LIVE — BLOCKED CORPUS MISSING
+
+Recherche sur le dépôt autorisé DEV `mcleland147/chantiers360` (commit/HEAD) : **un seul PDF** — `Diagramme BPMN_BatiNova.pdf` (déjà qualifié `SCANNED_NO_TEXT`). Aucun corpus textuel approprié. **Ne pas rejouer le BPMN scanné.** Aucun dépôt distant créé.
+
+## Réserves B isolées (non contamination du socle)
+
+| Id | Isolation |
+|---|---|
+| **R-GIT-PDF-TEXT** | Git PDF LIVE textuel — corpus manquant ; lecture/extract/viewer Git REAL non rejoués. Socle PDF WEB + fixture inchangé. |
+| **R-PDF-RSS-ORACLE** | Mémoire RSS réelle non oraclée par pdfjs sous mandat ; budget decompress heuristique + timeout distincts. Exit : borne `DECOMPRESS_BUDGET_EXCEEDED` / `TIMEOUT`. |
+| **R-D6-KIND** | Kind D6 dédié WEB — hors scope (RECORD_DECISION conservé ; GO Morris requis). |
+| **R-WEB05 / G-WEB-PUBLIC** | Qualification confrontation multi-sources LIVE — **non consommée** ; WEB LIVE OFF. |
+| **R-PDF-BROWSER-E2E** | Parcours navigateur complet (zoom/citation/nav) — harness unitaire ≠ preuve UX ; isolable pour F2/browser. |
+| **R-LIVE-REENVELOPPE** | Retests LIVE 12.1/12.2 uniquement si comportement réellement modifié. |
+
+## Non-objectifs respectés
+
+- Pas de nouveau kind D6 · Pas d'OCR · Pas de GED · Pas de nouveau parser · Pas de service documentaire externe · Pas de push / remote repo · Pas de cutover RECETTE.

```

## 13. Gates
| Gate | Status |
|---|---|
| ENV-01 | COMPLETE |
| G-LIVE-API (native count) | CONSUMED — PASS |
| G-WEB-PUBLIC | NOT CONSUMED — BLOCKED hosted unit |
| G-WEB-MIXED | CLOSED |
| G-RECETTE | NOT CONSUMED |

## 14. Reserves
- A: none
- B: R-G-WEB-PUBLIC-HOSTED; R-GIT-PDF-TEXT
- C: F2; WEB-05
- D: none blocking

## 15. Morris decisions
1. Review handoff
2. GO/NOGO cutover RECETTE (scope B reserves)
3. Hosted envelope alternative (built-in tool-calls vs closed)
4. Git PDF text corpus
5. v0.2 extension to RECETTE
6. F2

## 16. Completeness
FULL pack — created files complete; diffs code+docs; LIVE count; FinOps PG/API/UI; secrets scrubbed.
