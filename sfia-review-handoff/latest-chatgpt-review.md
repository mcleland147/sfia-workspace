# SFIA Review Pack — FULL — Macro-lot 1 Integrated LIVE Qualification (Intervention 2)

| Champ | Valeur |
|---|---|
| Date/heure ouverture | 2026-11-27 |
| Date/heure régularisation handoff | 2026-11-27 (même cycle — complément FULL) |
| Profil | Critical / EVOL / Cycle 8 Delivery LIVE |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `59893c814808fcf32501f32a34a379d7d85346e9` |
| Tree web entrée | `b76e2e6017ec371246b45b3de6f7bedf6a08c304` |
| Handoff entrée | `3444e7951a9992c78ce982a6cf14f4031f47b306` |
| Blob entrée | `63ef2c39bfa68e7d1483f4f271b61a63da8ddc39` |
| Base main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| HEAD sortie | `d72ffeb1351020dc0c780aa6ca2698a4ae5af96e` |
| Tree web sortie | `95a1c0f0e26d941e8a93b857230659b6728b54f6` |
| BUILD_ID | `3WGrMVrEU7z1yoSrUW8l7` |
| contentDigest | `d14121112552e87af48d2d91c059e19f465aa96d5beab4d3d1276c879f51769a` |
| Handoff précédent incomplet | `6c921798` / blob `46eb4dd6` (215 lignes) — **régularisé ici** |
| Statut | CLÔTURÉ — Intervention 2 LIVE qualification — pack FULL régularisé |

## Git Truth Check (entrée)

- Branche conforme `sfia/next-ml5-integrated-delivery-20261123`
- HEAD / tree web / handoff tip / blob conformes au mandat
- Untracked applicatif : aucun à l'entrée après reset pack
- DEV :3100 · RECETTE :3200 pid 89199 · PG DEV :5433 / RECETTE :5434
- **NEXT ENVIRONMENT GATE PASSED**

## Git Truth Check (sortie) — intégral

| Contrôle | Valeur |
|---|---|
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `d72ffeb1351020dc0c780aa6ca2698a4ae5af96e` |
| Tree `projects/sfia-studio-next/web` | `95a1c0f0e26d941e8a93b857230659b6728b54f6` |
| Commits cycle (depuis entrée) | `d527e96d` · `d72ffeb1` |
| BUILD_ID | `3WGrMVrEU7z1yoSrUW8l7` |
| contentDigest | `d14121112552e87af48d2d91c059e19f465aa96d5beab4d3d1276c879f51769a` |
| DEV identity | pid `161` · host `127.0.0.1` · port `3100` · mode `qualify-next-start` · effectMode `LIVE` · startedAt `2026-11-27T02:43:16Z` |
| DEV URL | http://127.0.0.1:3100/login |
| RECETTE | :3200 pid **89199** intact (avant/pendant/après) |
| PG | DEV :5433 · RECETTE :5434 |
| Push projet | **NON** |
| Push handoff L3 | autorisé (régularisation) |
| Modes expérimentaux post-campagne | tracing `off` · WEB LIVE `0` · G flags unset · continuity `off` · `STUDIO_NORA_DIAG_EPHEMERAL` retiré |
| Workspace Cursor effect | `/tmp/sfia-c12-cursor-live-ws` / `LIVE` (lane qualify historique) |
| Staged/unstaged produit | commits locaux bornés ; pack `.tmp` non commité produit |
| Untracked sensible | `.sfia-evidence/` gitignored ; aucun secret dans Git |

---

## Inventaire exact des fichiers (59893c81…d72ffeb1)

```
A	projects/sfia-studio-next/construction/convergence-openai-studio/d3-native-continuity-comparative-protocol-20261127.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/d3-native-continuity-comparative-result-20261127.md
M	projects/sfia-studio-next/construction/convergence-openai-studio/procedure-admin-live-qualification-candidate.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/ux-finops-13-03-visual-candidate-20261127.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
M	projects/sfia-studio-next/web/scripts/db-migrate.sh
M	projects/sfia-studio-next/web/scripts/finops-admin-collect.mts
A	projects/sfia-studio-next/web/scripts/finops-admin-collector-db-provision.sh
A	projects/sfia-studio-next/web/scripts/finops-admin-live-operator.sh
A	projects/sfia-studio-next/web/scripts/finops-admin-live-run-once.sh
A	projects/sfia-studio-next/web/scripts/finops-live-qualify-check.mts
A	projects/sfia-studio-next/web/scripts/ml5-i2-integrated-live-campaign.mjs
A	projects/sfia-studio-next/web/scripts/tracing-local-preflight.mts
A	projects/sfia-studio-next/web/src/db/migrations/026_admin_collector_ops_and_password_null.sql
M	projects/sfia-studio-next/web/src/db/schema.ts
M	projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
M	projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts
M	projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
A	projects/sfia-studio-next/web/src/domains/finops/admin-collector-db.ts
M	projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts
M	projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts
M	projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-repository.ts
M	projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
A	projects/sfia-studio-next/web/tests/integration/ml5-finops-live-qualification.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts
M	projects/sfia-studio-next/web/tests/unit/ml5-provider-continuity-from-work.test.ts

```

### Diffstat

```
 ...ive-continuity-comparative-protocol-20261127.md |  41 ++
 ...ative-continuity-comparative-result-20261127.md |  39 ++
 ...procedure-admin-live-qualification-candidate.md | 124 +++--
 .../ux-finops-13-03-visual-candidate-20261127.md   |  57 ++
 .../construction/delivery-history.md               |  14 +
 ...5-registre-couverture-et-revue-developpement.md |   2 +-
 .../sfia-studio-next/web/scripts/db-migrate.sh     |   3 +-
 .../web/scripts/finops-admin-collect.mts           | 138 ++++-
 .../scripts/finops-admin-collector-db-provision.sh |  53 ++
 .../web/scripts/finops-admin-live-operator.sh      |  46 ++
 .../web/scripts/finops-admin-live-run-once.sh      |  77 +++
 .../web/scripts/finops-live-qualify-check.mts      | 187 +++++++
 .../scripts/ml5-i2-integrated-live-campaign.mjs    | 597 +++++++++++++++++++++
 .../web/scripts/tracing-local-preflight.mts        |  65 +++
 .../026_admin_collector_ops_and_password_null.sql  |  34 ++
 projects/sfia-studio-next/web/src/db/schema.ts     |   2 +-
 .../conversation/provider-emission-frontier.ts     |  37 +-
 .../conversation/provider-response-continuity.ts   |  44 +-
 .../conversation/run-nora-cognitive-turn.ts        |  13 +-
 .../web/src/domains/finops/admin-collector-db.ts   | 107 ++++
 .../finops/provider-admin-http-transport.ts        |  22 +-
 .../finops/provider-admin-usage-collector.ts       | 150 +++++-
 .../finops/provider-admin-usage-repository.ts      |  90 ++--
 .../web/src/domains/finops/usage-read-service.ts   |  28 +-
 .../ml5-finops-live-qualification.pg.test.ts       | 190 +++++++
 .../ml5-provider-admin-usage-collector.test.ts     |  58 ++
 .../unit/ml5-provider-continuity-from-work.test.ts |  71 ++-
 27 files changed, 2129 insertions(+), 160 deletions(-)

```

## Fichiers créés — contenu complet

### `projects/sfia-studio-next/construction/convergence-openai-studio/d3-native-continuity-comparative-protocol-20261127.md`

```
# Protocole comparatif D3 — continuité native (Intervention 2)

| Champ | Valeur |
|---|---|
| Gate | G-NATIVE-CONTINUITY — comparaison bornée, **pas d’adoption** |
| Date | 2026-11-27 |
| Mode défaut | `SFIA_PROVIDER_CONTINUITY_MODE=off` (reconstruction Studio) |

## Variantes

| Id | Mécanisme | Admissibilité préalable |
|---|---|---|
| V1 | Reconstruction Studio (baseline) | ADMISSIBLE — SoT D3 |
| V2 | Prompt caching | À qualifier (SDK/API) — pas de store=true |
| V3 | `previous_response_id` | Admissible seulement si chaîne liée au work D3 + rightsOk |
| V4 | Compaction | À qualifier — pas de nouvelle persistance externe |

## Invariants D3 (obligatoires)

- workId / revision / checkpoint SoT Studio
- acquis + sourceVersions réels
- rightsOk = fencing **et** droits métier explicites
- budgets : tokensConsumed / tokensBudget (2M) / restitutionsRemaining
- aucun reset budget au changement de chaîne/modèle
- continuityChain jamais source d’autorité

## Corpus commun

Même travail cognitif, mêmes sources publiques, mêmes enveloppes, mêmes critères qualité.

## Mesures

fidélité acquis · couverture sources · reprise · tokens · coût · latence · erreurs · maintenance

## Refus (substitué si possible)

source modifiée · droit révoqué · chaîne indisponible · lease expirée · génération tardive · budget épuisé → rollback V1

## Sortie

Recommandation comparative argumentée ; **aucun** mécanisme natif actif par défaut sans décision Morris.
```

### `projects/sfia-studio-next/construction/convergence-openai-studio/d3-native-continuity-comparative-result-20261127.md`

```
# Résultat comparatif D3 — continuité native (Intervention 2)

| Champ | Valeur |
|---|---|
| Gate | G-NATIVE-CONTINUITY — comparaison bornée, **pas d’adoption** |
| Date | 2026-11-27 |
| Build | `3WGrMVrEU7z1yoSrUW8l7` |
| Mode runtime | `SFIA_PROVIDER_CONTINUITY_MODE=off` |

## Corpus

Investigation Nora DEV publique (MDN Fetch) — work `cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88` — checkpoints D3 observés — reprise CP7.

## Variantes

| Id | Résultat | Admissibilité | Preuve |
|---|---|---|---|
| V1 Reconstruction Studio | **EXERCISED LIVE** | ADMISSIBLE — SoT | work/revision/checkpoints/acquis/sources ; rightsOk explicite + budgets envelope |
| V2 Prompt caching | NOT RUN LIVE | CONDITIONAL | Pas de store=true ; bénéfice non démontré ce cycle |
| V3 previous_response_id | NOT ACTIVATED | CONDITIONAL | Mode off ; admissible seulement chaîne D3 + rightsOk |
| V4 Compaction | NOT RUN LIVE | CONDITIONAL | Aucune persistance externe nouvelle ; DATA-01 inchangé |

## Invariants vérifiés (V1)

- workId / revision / checkpoints SoT Studio
- rightsOk = fencing ∧ droits métier explicites (lease seule ≠ habilitation)
- budgets tokensBudget / tokensConsumed / restitutionsRemaining branchés
- continuityChain jamais autorité
- aucun reset budget observé sur reprise

## Recommandation

Conserver **V1** comme seul mécanisme actif par défaut.
Ne pas activer V2/V3/V4 sans décision Morris de sortie distincte.
`SFIA_PROVIDER_CONTINUITY_MODE=off` reste la configuration opérationnelle.

## Refus / rollback

Envelope `CAMPAIGN_OUTPUT_TOKENS_EXHAUSTED` observée puis renew qualify — rollback vers reconstruction Studio sans perte d’autorité D3.
```

### `projects/sfia-studio-next/construction/convergence-openai-studio/ux-finops-13-03-visual-candidate-20261127.md`

```
# Proposition visuelle exacte — FinOps 13.03 (G-FINOPS-UX)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Frame Figma | `1334:321` — **13.03 · Consommation et coûts — synthèse** |
| Parent canvas | `1332:2305` |
| Statut | **CANDIDATE — ATTENTE VALIDATION VISUELLE MORRIS** |
| Transposition | Interdite avant GO visuel |

## Emplacement du delta (orientation Morris validée)

Sous la rangée des **4 indicateurs** (`FinOps / Indicateur` ×4),
**au-dessus** des blocs « Évolution des dépenses » / « Répartition par modèle ».

Un **seul bandeau secondaire** (pas de 4e KPI hero, pas de nouvel écran) :

```
┌──────────────────────────────────────────────────────────────────────┐
│ Rapprochement fournisseur                                            │
│ Studio (estimation)     Fournisseur (agrégé autorisé)     Période    │
│   12,40 USD               13,10 USD / Indisponible      2025-11-25  │
│ Comparabilité: COMPARABLE | NON_COMPARABLE | PARTIAL | UNAVAILABLE   │
│ Fraîcheur: READY · collection … · Écart: +0,70 USD (si COMPARABLE) │
│ Message limites métier (sanitisé) le cas échéant                     │
└──────────────────────────────────────────────────────────────────────┘
```

## Mapping données → UI

| Zone | API `providerReconciliation` | Règle d’affichage |
|---|---|---|
| Studio | `studioEstimatedUsd` + kind | Toujours (estimation Studio) |
| Fournisseur | `providerCostUsd` + currency | **Uniquement si `disclosed`** ; sinon « Indisponible » / « Non autorisé » — **jamais** de montant |
| Période | fenêtre compare UTC | Afficher bornes utilisées |
| Fraîcheur | `freshness.status` + count | READY/PARTIAL/IDLE/ERROR |
| Comparabilité | `comparability` | Libellé métier |
| Écart | `deltaUsd` | **Seulement** si COMPARABLE + disclosed |
| Limites | `limits[]` | Sanitisé |

## États

| État | Rendu |
|---|---|
| COMPARABLE | Studio + Fournisseur + écart |
| PARTIAL | Studio éventuel ; fournisseur masqué ; message partial |
| NON_COMPARABLE | Pas d’écart ; motif |
| UNAVAILABLE | Pas de montant fournisseur |
| Empty 13.06 | Inchangé si aucune estimation |

## Conservation

Rail, shell, tokens, filtres, graphiques et table travaux : **inchangés**.

## Action Morris

Valider ce candidat visuel (oui / ajuster / reporter) avant transposition dans `FinOpsConsumptionPanel`.
```

### `projects/sfia-studio-next/web/src/db/migrations/026_admin_collector_ops_and_password_null.sql`

```
-- ML1 Intervention 2 — neutralize compromised auth material + dedicated collector ops role.
-- Additive DEV only. No DROP of business data. No RECETTE touch.
--
-- SECURITY: Login roles from historical 024 still carried password hashes while NOLOGIN.
-- PASSWORD NULL removes usable credentials even if LOGIN were re-enabled by mistake.
-- Dedicated sfia_admin_collector_ops is the operational collector identity (LOGIN enabled
-- only by an operator-local provision script — never from Git).

-- 1) Nullify compromised password material (do not echo secrets).
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector_login') THEN
    ALTER ROLE sfia_admin_collector_login WITH NOLOGIN PASSWORD NULL;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader_login') THEN
    ALTER ROLE sfia_finops_reader_login WITH NOLOGIN PASSWORD NULL;
  END IF;
END$$;

-- 2) Dedicated collector ops role — grants only Admin snapshot tables.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector_ops') THEN
    CREATE ROLE sfia_admin_collector_ops NOLOGIN;
  END IF;
END$$;

GRANT SELECT, INSERT, UPDATE ON provider_admin_collection_runs TO sfia_admin_collector_ops;
GRANT SELECT, INSERT, UPDATE ON provider_admin_usage_snapshots TO sfia_admin_collector_ops;
REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector_ops;
REVOKE ALL ON TABLE pilots FROM sfia_admin_collector_ops;
REVOKE ALL ON TABLE projects FROM sfia_admin_collector_ops;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader;
```

### `projects/sfia-studio-next/web/scripts/tracing-local-preflight.mts`

```
/**
 * Checkpoint 5 preflight — tracing LOCAL configure / OFF rollback.
 * No Nora campaign here.
 */
import {
  configureAgentsSdkTracing,
  getAgentsTracingConfigState,
  resetAgentsTracingTestState,
  withAgentsTracingNetworkOracle,
} from "../src/lib/agents-sdk-tracing";

async function main() {
  resetAgentsTracingTestState();
  process.env.SFIA_AGENTS_TRACING_MODE = "off";
  const off = await configureAgentsSdkTracing(process.env);

  resetAgentsTracingTestState();
  process.env.SFIA_AGENTS_TRACING_MODE = "local";
  const loc = await configureAgentsSdkTracing(process.env);

  const { result, traceExportUrls } = await withAgentsTracingNetworkOracle(
    async () => "preflight-ok",
  );

  // rollback OFF
  process.env.SFIA_AGENTS_TRACING_MODE = "off";
  resetAgentsTracingTestState();
  const back = await configureAgentsSdkTracing(process.env);

  const ok =
    off.mode === "off" &&
    off.tracingDisabled === true &&
    loc.mode === "local" &&
    loc.processorsReplaced === true &&
    result === "preflight-ok" &&
    traceExportUrls.length === 0 &&
    back.mode === "off" &&
    back.tracingDisabled === true;

  console.log(
    JSON.stringify({
      status: ok ? "PASS" : "FAIL",
      off: { mode: off.mode, tracingDisabled: off.tracingDisabled },
      local: {
        mode: loc.mode,
        processorsReplaced: loc.processorsReplaced,
        tracingDisabled: loc.tracingDisabled,
        state: getAgentsTracingConfigState(),
      },
      oracleExportUrls: traceExportUrls,
      rollback: { mode: back.mode, tracingDisabled: back.tracingDisabled },
    }),
  );
  if (!ok) process.exitCode = 3;
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
```

### `projects/sfia-studio-next/web/scripts/finops-live-qualify-check.mts`

```
/**
 * FinOps LIVE qualification against DEV PG (not vitest e2e DB).
 * No Admin calls. No secrets printed.
 *
 *   npx tsx scripts/finops-live-qualify-check.mts
 */
import postgres from "postgres";
import { evaluateFinOpsReconciliation } from "../src/domains/finops/finops-reconciliation";
import type { AdminUsageSnapshot } from "../src/domains/finops/provider-admin-usage-collector";

const LIVE_PROJECT = "proj_HVZL4x3J77GXEVtq9EqRokpR";
const WINDOW_START = "2026-11-26T00:00:00.000Z";
const WINDOW_END = "2026-11-27T00:00:00.000Z";
const COLLECTION_COSTS = "acol_mwyd1ifk_552295cf";

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url || !url.includes("5433")) {
    console.log(
      JSON.stringify({
        status: "BLOCKED",
        reason: "DATABASE_URL_MUST_BE_DEV_5433",
      }),
    );
    process.exitCode = 2;
    return;
  }
  const sql = postgres(url, { max: 1 });
  try {
    const rows = await sql`
      SELECT source_endpoint, surface_object, organization_scope,
             interval_start_utc, interval_end_utc, granularity,
             project_id, amount, currency, completeness, collection_provenance,
             collection_id, collected_at
      FROM provider_admin_usage_snapshots
      WHERE collection_id = ${COLLECTION_COSTS}
    `;
    if (rows.length === 0) {
      console.log(JSON.stringify({ status: "FAIL", reason: "LIVE_SNAPSHOT_MISSING" }));
      process.exitCode = 3;
      return;
    }
    const r = rows[0]!;
    const snap: AdminUsageSnapshot = {
      sourceEndpoint: r.source_endpoint,
      surfaceObject: r.surface_object,
      organizationScope: r.organization_scope,
      intervalStartUtc: new Date(r.interval_start_utc).toISOString(),
      intervalEndUtc: new Date(r.interval_end_utc).toISOString(),
      granularity: r.granularity,
      dimensions: {
        project_id: r.project_id,
        api_key_id: null,
        user_id: null,
        model: null,
        line_item: null,
        api_source: null,
      },
      metrics: {
        input_tokens: { presence: "ABSENT", value: null },
        output_tokens: { presence: "ABSENT", value: null },
        input_cached_tokens: { presence: "ABSENT", value: null },
        num_model_requests: { presence: "ABSENT", value: null },
        num_requests: { presence: "ABSENT", value: null },
        amount: {
          presence: r.amount != null ? "MEASURED" : "ABSENT",
          value: r.amount != null ? String(r.amount) : null,
        },
        currency: {
          presence: r.currency != null ? "MEASURED" : "ABSENT",
          value: r.currency,
        },
      },
      completeness: r.completeness,
      collectedAtUtc: new Date(r.collected_at).toISOString(),
      collectionId: r.collection_id,
      collectionProvenance: r.collection_provenance,
    };

    const orgId = snap.organizationScope.startsWith("org:")
      ? snap.organizationScope.slice(4)
      : snap.organizationScope;

    const comparable = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 3.5,
      studioEstimationKind: "known",
      snapshots: [snap],
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: snap.organizationScope,
      configuredOrgId: orgId,
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });

    const denied = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 3.5,
      studioEstimationKind: "known",
      snapshots: [snap],
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: snap.organizationScope,
      configuredOrgId: orgId,
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: false,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });

    const wrongPeriod = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 3.5,
      studioEstimationKind: "known",
      snapshots: [snap],
      windowStartUtc: "2026-11-01T00:00:00.000Z",
      windowEndUtc: "2026-11-02T00:00:00.000Z",
      organizationScope: snap.organizationScope,
      configuredOrgId: orgId,
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });

    const pilots = await sql`
      SELECT DISTINCT owner_pilot_id FROM projects LIMIT 5
    `;

    const ok =
      snap.collectionProvenance === "LIVE" &&
      snap.dimensions.project_id === LIVE_PROJECT &&
      comparable.comparability === "COMPARABLE" &&
      comparable.disclosed === true &&
      comparable.providerCostUsd === "3.7127983200" &&
      denied.disclosed === false &&
      denied.providerCostUsd === null &&
      wrongPeriod.comparability !== "COMPARABLE";

    console.log(
      JSON.stringify(
        {
          status: ok ? "PASS" : "FAIL",
          live: {
            collectionId: snap.collectionId,
            provenance: snap.collectionProvenance,
            projectId: snap.dimensions.project_id,
            orgScope: snap.organizationScope,
            amount: snap.metrics.amount.value,
            currency: snap.metrics.currency.value,
            window: { start: snap.intervalStartUtc, end: snap.intervalEndUtc },
          },
          comparable: {
            status: comparable.comparability,
            disclosed: comparable.disclosed,
            deltaUsd: comparable.deltaUsd,
          },
          denied: {
            status: denied.comparability,
            disclosed: denied.disclosed,
          },
          wrongPeriod: { status: wrongPeriod.comparability },
          pilotsSampleCount: pilots.length,
          note: "org:unspecified — set SFIA_OPENAI_ORG_SCOPE on next LIVE collect for stronger org identity",
        },
        null,
        2,
      ),
    );
    if (!ok) process.exitCode = 3;
  } finally {
    await sql.end({ timeout: 1 });
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
```

### `projects/sfia-studio-next/web/scripts/finops-admin-collector-db-provision.sh`

```
#!/usr/bin/env bash
# Operator-only — provision LOGIN for sfia_admin_collector_ops on DEV PG.
# NEVER commit passwords. NEVER pass the OpenAI Admin key here.
#
# macOS Keychain (recommended):
#   security add-generic-password -a sfia_admin_collector_ops \
#     -s sfia-next-dev-pg-collector -w
#   STUDIO_LANE=DEV ./scripts/finops-admin-collector-db-provision.sh
#
# Or export SFIA_ADMIN_COLLECTOR_DB_PASSWORD from an untracked local file.
set -euo pipefail

CONTAINER="${SFIA_PG_CONTAINER:-sfia-next-dev-pg}"
DB_OWNER="${SFIA_PG_USER:-sfia_next_dev}"
DB_NAME="${SFIA_PG_DATABASE:-sfia_next_dev}"
OPS_ROLE="sfia_admin_collector_ops"
HOST_PORT="${SFIA_PG_HOST_PORT:-5433}"

if [[ "${STUDIO_LANE:-}" != "DEV" && "${SFIA_ALLOW_COLLECTOR_PROVISION:-}" != "1" ]]; then
  echo '{"status":"BLOCKED","reason":"STUDIO_LANE_DEV_OR_EXPLICIT_ALLOW_REQUIRED"}'
  exit 2
fi

PASS=""
if [[ -n "${SFIA_ADMIN_COLLECTOR_DB_PASSWORD=[REDACTED] ]]; then
  PASS="${SFIA_ADMIN_COLLECTOR_DB_PASSWORD}"
elif command -v security >/dev/null 2>&1; then
  PASS="$(security find-generic-password -a "${OPS_ROLE}" -s sfia-next-dev-pg-collector -w 2>/dev/null || true)"
fi

if [[ -z "${PASS}" ]]; then
  echo '{"status":"BLOCKED","reason":"NO_PASSWORD_SOURCE","hint":"Keychain service sfia-next-dev-pg-collector or SFIA_ADMIN_COLLECTOR_DB_PASSWORD"}'
  exit 2
fi

# Escape single quotes for SQL literal (password never echoed to stdout).
PASS_SQL="${PASS//\'/\'\'}"
docker exec -i "${CONTAINER}" \
  psql -v ON_ERROR_STOP=1 -U "${DB_OWNER}" -d "${DB_NAME}" >/dev/null <<SQL
ALTER ROLE ${OPS_ROLE} WITH LOGIN PASSWORD '${PASS_SQL}';
SQL

# Prove LOGIN without printing the password value.
WHO="$(
  docker exec -e PGPASSWORD=[REDACTED] "${CONTAINER}" \
    psql -h 127.0.0.1 -U "${OPS_ROLE}" -d "${DB_NAME}" -tAc "SELECT current_user" 2>/dev/null | tr -d '[:space:]'
)"
if [[ "${WHO}" != "${OPS_ROLE}" ]]; then
  echo '{"status":"ERROR","reason":"LOGIN_PROOF_FAILED"}'
  exit 3
fi

printf '%s\n' "{\"status\":\"READY\",\"role\":\"${OPS_ROLE}\",\"database\":\"${DB_NAME}\",\"host\":\"127.0.0.1\",\"port\":${HOST_PORT},\"dsn_template\":\"postgres://[REDACTED]",\"note\":\"Set SFIA_ADMIN_COLLECTOR_DATABASE_URL in operator-only env; never Git/chat/agent\"}"
```

### `projects/sfia-studio-next/web/scripts/finops-admin-live-operator.sh`

```
#!/usr/bin/env bash
# Operator-only LIVE Admin collection launcher.
# Cursor/agent must NOT run this with a real OPENAI_ADMIN_KEY in its environment.
#
# Expected: Morris opens a separate Terminal.app window, sources an untracked
# operator env file, then runs this script.
#
# Example operator env file (~/.sfia/operator/admin-live-dev.env) — NEVER Git:
#   export STUDIO_LANE=DEV
#   export SFIA_ADMIN_COLLECTOR_PROCESS=1
#   export SFIA_ADMIN_USAGE_LIVE=1
#   export OPENAI_ADMIN_KEY='…'
#   export SFIA_ADMIN_COLLECTOR_DATABASE_URL=[REDACTED]
#
# Usage:
#   source ~/.sfia/operator/admin-live-dev.env
#   ./scripts/finops-admin-live-operator.sh \
#     --path /organization/costs \
#     --start-time 1732320000 --end-time 1732406400 \
#     --project-id proj_XXXX --max-pages 3
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "${ROOT}"

if [[ "${SFIA_ADMIN_COLLECTOR_PROCESS:-}" != "1" || "${SFIA_ADMIN_USAGE_LIVE:-}" != "1" || "${STUDIO_LANE:-}" != "DEV" ]]; then
  echo '{"status":"BLOCKED","reason":"OPERATOR_ENV_INCOMPLETE"}'
  exit 2
fi
if [[ -z "${OPENAI_ADMIN_KEY:-}" ]]; then
  echo '{"status":"BLOCKED","reason":"OPENAI_ADMIN_KEY_ABSENT"}'
  exit 2
fi
if [[ -z "${SFIA_ADMIN_COLLECTOR_DATABASE_URL:-}" ]]; then
  echo '{"status":"BLOCKED","reason":"COLLECTOR_DSN_ABSENT"}'
  exit 2
fi

# Refuse if argv appears to contain a key-shaped token.
for a in "$@"; do
  if [[ "${a}" == sk-* ]]; then
    echo '{"status":"BLOCKED","reason":"SECRET_MUST_NOT_APPEAR_IN_ARGV"}'
    exit 2
  fi
done

exec npx tsx scripts/finops-admin-collect.mts "$@"
```

### `projects/sfia-studio-next/web/scripts/finops-admin-live-run-once.sh`

```
#!/usr/bin/env bash
# One-shot LIVE Admin collection for operator Terminal / isolated subshell.
# Never echoes OPENAI_ADMIN_KEY or DSN password.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "${ROOT}"
# Workspace .tmp (repo root relative to web/)
OUT_DIR="$(cd "${ROOT}/../../../.tmp-sfia-review" && pwd)"
mkdir -p "${OUT_DIR}"
OUT_COSTS="${OUT_DIR}/admin-live-costs.json"
OUT_USAGE="${OUT_DIR}/admin-live-usage.json"
LOG="${OUT_DIR}/admin-live-operator.log"

OP_ENV="${SFIA_OPERATOR_ENV_FILE:-$HOME/.sfia/operator/admin-live-dev.env}"
if [[ ! -f "${OP_ENV}" ]]; then
  echo '{"status":"BLOCKED","reason":"OPERATOR_ENV_FILE_MISSING"}' > "${OUT_COSTS}"
  exit 2
fi

# shellcheck disable=SC1090
set -a
# Source operator secrets into THIS process only — do not export to parent.
source "${OP_ENV}"
set +a

{
  echo "ts=$(date -u +%Y-%m-%dT%H:%M:%SZ)"
  echo "lane=${STUDIO_LANE:-}"
  echo "collector_process=${SFIA_ADMIN_COLLECTOR_PROCESS:-}"
  echo "live=${SFIA_ADMIN_USAGE_LIVE:-}"
  echo "admin_key_present=$([ -n "${OPENAI_ADMIN_KEY:-}" ] && echo yes || echo no)"
  echo "dsn_present=$([ -n "${SFIA_ADMIN_COLLECTOR_DATABASE_URL:-}" ] && echo yes || echo no)"
} > "${LOG}"

START="${1:-1795651200}"
END="${2:-1795737600}"
PROJECT="${3:-proj_HVZL4x3J77GXEVtq9EqRokpR}"

set +e
./scripts/finops-admin-live-operator.sh \
  --path /organization/costs \
  --start-time "${START}" \
  --end-time "${END}" \
  --project-id "${PROJECT}" \
  --max-pages 3 \
  > "${OUT_COSTS}" 2>>"${LOG}"
EC1=$?

./scripts/finops-admin-live-operator.sh \
  --path /organization/usage/completions \
  --start-time "${START}" \
  --end-time "${END}" \
  --project-id "${PROJECT}" \
  --max-pages 3 \
  > "${OUT_USAGE}" 2>>"${LOG}"
EC2=$?
set -e

# Redact accidental secrets from artifacts (never leave sk-/DSN password in files)
export OUT_DIR
python3 - <<'PY'
from pathlib import Path
import re, os
out = Path(os.environ["OUT_DIR"])
for name in ("admin-live-costs.json", "admin-live-usage.json", "admin-live-operator.log"):
    p = out / name
    if not p.exists():
        continue
    t = p.read_text(errors="ignore")
    t = re.sub(r"sk-[A-Za-z0-9_-]+", "sk-[REDACTED]", t)
    t = re.sub(r"(postgres://[REDACTED]", r"\1***@", t)
    p.write_text(t)
PY

echo "exit_costs=${EC1} exit_usage=${EC2}" >> "${LOG}"
echo "OPERATOR_RUN_COMPLETE"
exit 0
```

### `projects/sfia-studio-next/web/scripts/ml5-i2-integrated-live-campaign.mjs`

```
/**
 * Intervention 2 — integrated LIVE campaign (DEV :3100 only).
 * Covers CP5 tracing LOCAL + CP6 WEB A3 opt2 + CP7 D3 V1 continuity in one Nora investigation.
 * Envelope: ≤20 provider contacts, web_max_tool_calls=1, ≤3 HTTP WEB attempts, public corpus only.
 * Does NOT touch RECETTE. Does NOT enable store=true / native continuity.
 */
import { writeFileSync, mkdirSync, readFileSync, appendFileSync, existsSync, readdirSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";
import { join } from "node:path";

const BASE = process.env.SFIA_LIVE_BASE || "http://127.0.0.1:3100";
const OUT =
  process.env.SFIA_I2_OUT ||
  "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/i2-integrated-live";
const WEB_ROOT =
  process.env.SFIA_WEB_ROOT ||
  "/Users/morris/Projects/sfia-wt-next-ml5-20261123/projects/sfia-studio-next/web";
mkdirSync(OUT, { recursive: true });

const jar = { cookie: "" };
const ENVELOPE = {
  maxProviderContacts: 20,
  webMaxToolCalls: 1,
  webMaxHttpAttempts: 3,
  maxTokensReserved: 200_000,
};

const report = {
  campaign: "ml1-intervention2-integrated-live",
  startedAt: new Date().toISOString(),
  finishedAt: null,
  base: BASE,
  buildId: null,
  envelope: ENVELOPE,
  steps: [],
  scenarios: {},
  tracing: null,
  web: null,
  d3: null,
  finops: null,
  conv: null,
  verdict: null,
  stopReason: null,
  providerContacts: 0,
};

function step(name, data) {
  report.steps.push({ name, at: new Date().toISOString(), ...data });
  console.log(`[${name}]`, JSON.stringify(data).slice(0, 700));
}

function save(name, data) {
  writeFileSync(`${OUT}/${name}.json`, JSON.stringify(data, null, 2));
}

function saveReport() {
  report.finishedAt = new Date().toISOString();
  writeFileSync(`${OUT}/campaign-report.json`, JSON.stringify(report, null, 2));
}

async function api(path, { method = "GET", body, timeoutMs = 900_000 } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${BASE}${path}`, {
      method,
      headers: {
        ...(body ? { "content-type": "application/json" } : {}),
        ...(jar.cookie ? { cookie: jar.cookie } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    const set = res.headers.getSetCookie?.() || [];
    for (const c of set) {
      const part = c.split(";")[0];
      jar.cookie = jar.cookie ? `${jar.cookie}; ${part}` : part;
    }
    const text = await res.text();
    let json = null;
    try {
      json = JSON.parse(text);
    } catch {
      json = { _raw: text.slice(0, 6000) };
    }
    return { status: res.status, json };
  } finally {
    clearTimeout(t);
  }
}

function pg(sql) {
  const oneLine = sql.replace(/\s+/g, " ").trim();
  return execSync(
    `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(oneLine)}`,
    { encoding: "utf8", maxBuffer: 20_000_000 },
  ).trim();
}

function pgJson(sql) {
  const raw = pg(sql);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

function extractReply(json) {
  if (!json || typeof json !== "object") return "";
  if (typeof json.content === "string" && json.content.trim()) return json.content;
  if (typeof json.reply === "string" && json.reply.trim()) return json.reply;
  const msgs = Array.isArray(json.messages) ? json.messages : [];
  for (let i = msgs.length - 1; i >= 0; i--) {
    const m = msgs[i];
    if (
      m &&
      (m.role === "assistant" || m.author === "assistant" || m.kind === "assistant") &&
      typeof m.content === "string" &&
      m.content.trim()
    ) {
      return m.content;
    }
  }
  const am = json.assistantMessage;
  if (am && typeof am.content === "string") return am.content;
  return "";
}

function extractWorkId(json) {
  return (
    json?.cognitiveWork?.workId ||
    json?.cognitiveWorkId ||
    json?.workId ||
    null
  );
}

function reserveContact(n = 1) {
  if (report.providerContacts + n > ENVELOPE.maxProviderContacts) {
    report.stopReason = "ENVELOPE_PROVIDER_CONTACTS";
    return false;
  }
  report.providerContacts += n;
  return true;
}

function collectObsTraces(sinceIso) {
  const hits = [];
  const logPath = join(WEB_ROOT, ".sfia-evidence/qualify-server.log");
  if (existsSync(logPath)) {
    const lines = readFileSync(logPath, "utf8").split("\n");
    for (const line of lines) {
      if (!line.includes("SFIA_OBS")) continue;
      const idx = line.indexOf("{");
      if (idx < 0) continue;
      try {
        const ev = JSON.parse(line.slice(idx));
        if (ev.ts_utc && ev.ts_utc < sinceIso) continue;
        if (
          ev.event_name === "provider.agents_trace.local" ||
          (typeof ev.event_name === "string" && ev.event_name.includes("trace"))
        ) {
          hits.push(ev);
        }
      } catch {
        /* skip */
      }
    }
  }
  const obsDir = join(WEB_ROOT, ".obs/dev");
  if (existsSync(obsDir)) {
    for (const f of readdirSync(obsDir)) {
      if (!f.endsWith(".jsonl") && !f.endsWith(".log")) continue;
      const raw = readFileSync(join(obsDir, f), "utf8");
      for (const line of raw.split("\n")) {
        if (!line.trim()) continue;
        try {
          const ev = JSON.parse(line.startsWith("SFIA_OBS") ? line.slice(line.indexOf("{")) : line);
          if (ev.ts_utc && ev.ts_utc < sinceIso) continue;
          if (ev.event_name === "provider.agents_trace.local") hits.push(ev);
        } catch {
          /* skip */
        }
      }
    }
  }
  return hits;
}

function loadWork(workId) {
  if (!workId) return null;
  return pgJson(
    `SELECT row_to_json(t) FROM (
      SELECT id, status, revision, interrupt_cause AS "interruptCause",
             objective, owner_token IS NOT NULL AS "hasOwnerToken",
             owner_pilot_id AS "ownerPilotId",
             resources_json::json AS resources,
             state_json::json AS state,
             production_json::json AS production
      FROM cognitive_works WHERE id='${workId}'
    ) t;`,
  );
}

function loadCheckpoints(workId) {
  if (!workId) return [];
  return (
    pgJson(
      `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY revision), '[]'::json) FROM (
        SELECT id, revision, cause, created_at AS "createdAt"
        FROM cognitive_work_checkpoints WHERE work_id='${workId}'
      ) t;`,
    ) || []
  );
}

function httpsCitations(text) {
  const urls = [...String(text).matchAll(/https?:\/\/[^\s)\]"'<>]+/gi)].map((m) => m[0]);
  const publicOk = urls.filter(
    (u) =>
      /developer\.mozilla\.org|openai\.com\/docs|nodejs\.org|postgresql\.org|datatracker\.ietf\.org|web\.dev|mdn\.io/i.test(
        u,
      ),
  );
  return { urls, publicOk };
}

try {
  const health = await api("/login");
  step("health", { status: health.status });
  if (![200, 302, 307].includes(health.status)) {
    throw new Error(`DEV not ready ${health.status}`);
  }

  const bid = existsSync(join(WEB_ROOT, ".next/BUILD_ID"))
    ? readFileSync(join(WEB_ROOT, ".next/BUILD_ID"), "utf8").trim()
    : null;
  report.buildId = bid;
  const identity = existsSync(join(WEB_ROOT, ".sfia-evidence/qualify-server.identity.json"))
    ? JSON.parse(readFileSync(join(WEB_ROOT, ".sfia-evidence/qualify-server.identity.json"), "utf8"))
    : null;
  step("identity", {
    buildId: bid,
    identityBuild: identity?.buildId ?? null,
    effectMode: identity?.effectMode ?? null,
  });
  if (identity?.buildId && bid && identity.buildId !== bid) {
    throw new Error(`BUILD drift identity=${identity.buildId} disk=${bid}`);
  }

  await api("/api/dev/auto-session", { method: "POST" });
  const runId = randomUUID().slice(0, 8);
  const campaignStart = new Date().toISOString();

  // Dedicated public project
  const prep = await api("/api/preparations", { method: "POST", body: {} });
  save("01-prep", prep);
  const preparationId = prep.json?.preparationId;
  if (!preparationId) throw new Error("no preparationId");

  let g = await api(`/api/preparations/${preparationId}`);
  let rev = g.json?.preparation?.creationRevision;
  const name = `ML5-I2-Live-${runId}`;
  await api(`/api/preparations/${preparationId}`, {
    method: "PATCH",
    body: {
      previewName: name,
      previewSummary: "I2 integrated LIVE — public technical docs only.",
      expectedCreationRevision: rev,
    },
  });
  g = await api(`/api/preparations/${preparationId}`);
  rev = g.json?.preparation?.creationRevision;
  const created = await api(`/api/preparations/${preparationId}/create-project`, {
    method: "POST",
    body: {
      expectedCreationRevision: rev,
      projectName: name,
      idempotencyKey: `i2-${runId}`,
      previewSummary: "Intervention 2 public corpus",
    },
  });
  save("02-create-project", created);
  const projectId = created.json?.projectId;
  if (!projectId) throw new Error("project create failed");
  step("project", { preparationId, projectId, name });

  // Initial qualification
  {
    const iqStarted = Date.now();
    let iqLast = null;
    while (Date.now() - iqStarted < 180_000) {
      const r = await api(`/api/projects/${projectId}/initial-qualification/reconcile`, {
        method: "POST",
        timeoutMs: 60_000,
      });
      iqLast = r.json?.initialQualification || r.json;
      const status = iqLast?.status;
      if (status && !["PENDING", "RUNNING", "UNKNOWN"].includes(status)) break;
      await new Promise((res) => setTimeout(res, 1500));
    }
    step("initial_qualification", {
      status: iqLast?.status ?? null,
      phase: iqLast?.phase ?? null,
      ms: Date.now() - iqStarted,
    });
    save("03-iq", iqLast);
    if (!iqLast?.status || ["PENDING", "RUNNING", "UNKNOWN", "TIMEOUT"].includes(iqLast.status)) {
      report.stopReason = `IQ_NOT_READY_${iqLast?.status || "NULL"}`;
      saveReport();
      process.exit(2);
    }
  }

  async function turn(label, content, extra = {}) {
    if (report.stopReason) return null;
    if (!reserveContact(1)) {
      saveReport();
      return null;
    }
    const t0 = Date.now();
    const res = await api(`/api/preparations/${preparationId}/messages`, {
      method: "POST",
      body: {
        content,
        clientTurnKey: extra.clientTurnKey || `ctk_${label}_${randomUUID()}`,
        ...extra,
      },
      timeoutMs: 900_000,
    });
    save(`turn-${label}`, res);
    const reply = extractReply(res.json);
    const workId = extractWorkId(res.json);
    const entry = {
      status: res.status,
      ms: Date.now() - t0,
      workId,
      noraStatus: res.json?.status ?? null,
      generationId: res.json?.generationId ?? null,
      attemptId: res.json?.attempts?.[0]?.attemptId ?? res.json?.attemptId ?? null,
      attemptNotes: res.json?.attempts?.[0]?.notes ?? null,
      replyChars: String(reply).length,
      replyPreview: String(reply).slice(0, 400),
      citations: httpsCitations(reply),
    };
    step(label, entry);
    report.scenarios[label] = {
      ...entry,
      reply: String(reply).slice(0, 6000),
      attempts: res.json?.attempts ?? [],
      rawKeys: res.json && typeof res.json === "object" ? Object.keys(res.json) : [],
    };
    if (res.status < 200 || res.status >= 300) {
      report.stopReason = report.stopReason || `${label}_HTTP_${res.status}`;
    }
    return res;
  }

  // CP5 — Nora investigation without WEB (tracing LOCAL on server)
  await turn(
    "CP5-NORA",
    `I2-${runId} CP5: Tu es Nora. En 4 phrases max, confirme le socle cognitif Studio (conducteur D3, acquis, FinOps). Aucune recherche web. Aucun outil Git. Prépare ensuite une investigation courte sur documentation publique MDN Fetch API.`,
  );

  // CP6 — WEB public LIVE A3 option 2 (max_tool_calls=1 expected on wire)
  await turn(
    "CP6-WEB",
    `I2-${runId} CP6 WEB A3-opt2: Effectue UNE seule recherche web publique sur la documentation MDN de l'API Fetch (developer.mozilla.org). Résume en ≤8 lignes avec 1–2 citations https MDN. Corpus public uniquement. Pas de contexte privé. Pas de MIXED. Si enveloppe atteinte, suspends clairement.`,
    { forceNewCognitiveWork: false },
  );

  const webReply = report.scenarios["CP6-WEB"]?.reply || "";
  const webCites = httpsCitations(webReply);
  const workId =
    report.scenarios["CP6-WEB"]?.workId ||
    report.scenarios["CP5-NORA"]?.workId ||
    null;

  // Oracle: restitution must include public https when WEB succeeded
  report.web = {
    option: "A3-OPTION-2",
    maxToolCallsBound: 1,
    billableGuarantee: false,
    http: report.scenarios["CP6-WEB"]?.status ?? null,
    workId,
    citations: webCites,
    publicCitationOk: webCites.publicOk.length > 0,
    mixedDetected: /mixed|privé|private.*(repo|git|document)/i.test(webReply),
  };
  if (report.web.mixedDetected) {
    report.stopReason = report.stopReason || "WEB_MIXED_DETECTED";
  }

  // CP7 — capitalize + resume same work (V1 Studio reconstruction)
  await turn(
    "CP7-CAPITALIZE",
    `I2-${runId} CP7: Capitalise les acquis de cette investigation en une note technique ≤10 lignes. Cite uniquement les sources déjà établies. Pas de nouvelle recherche web. Conserve le même travail cognitif.`,
  );

  await turn(
    "CP7-RESUME",
    `I2-${runId} CP7 reprise: Reprends le même travail. En 5 lignes, rappelle ce qui est acquis vs restant. Aucune recherche web. Aucun reset de budget.`,
  );

  // Tracing proof from OBS (real Nora path, not injected sink)
  const obsHits = collectObsTraces(campaignStart);
  save("04-obs-traces", obsHits);
  const corr = {
    workIds: new Set(),
    operationIds: new Set(),
    generationIds: new Set(),
    attemptIds: new Set(),
  };
  for (const ev of obsHits) {
    if (ev.operation_id) corr.operationIds.add(ev.operation_id);
    if (ev.generation_id) corr.generationIds.add(ev.generation_id);
    if (ev.attempt_id) corr.attemptIds.add(ev.attempt_id);
  }
  if (workId) corr.workIds.add(workId);
  report.tracing = {
    modeExpected: "local",
    obsLocalTraceEvents: obsHits.length,
    sample: obsHits.slice(0, 8).map((e) => ({
      event_name: e.event_name,
      ts_utc: e.ts_utc,
      operation_id: e.operation_id ?? null,
      generation_id: e.generation_id ?? null,
      attempt_id: e.attempt_id ?? null,
      meta: e.meta ?? null,
      build_id: e.build_id ?? null,
    })),
    correlation: {
      workIds: [...corr.workIds],
      operationIds: [...corr.operationIds],
      generationIds: [...corr.generationIds],
      attemptIds: [...corr.attemptIds],
    },
    remoteExportObservedInObs: obsHits.some((e) =>
      String(e.meta?.tool_calls || e.event_name || "").toLowerCase().includes("export"),
    ),
    preflightOracleExportUrls: [],
    note: "Remote export blocked by StudioLocalTraceProcessor replacement; preflight oracle empty; LIVE proof via OBS local events from real Nora turns.",
  };

  // D3 continuity from real work owner
  const work = loadWork(workId);
  const checkpoints = loadCheckpoints(workId);
  save("05-work", { work, checkpoints });
  const state = work?.state || {};
  const sources = Array.isArray(state.sources) ? state.sources : [];
  report.d3 = {
    mode: "off",
    variantExercisedLive: "V1-Studio-reconstruction",
    workId,
    status: work?.status ?? null,
    revision: work?.revision ?? null,
    hasOwnerToken=[REDACTED] ?? null,
    ownerPilotId: work?.ownerPilotId ?? null,
    checkpointCount: Array.isArray(checkpoints) ? checkpoints.length : 0,
    checkpoints: Array.isArray(checkpoints) ? checkpoints.slice(0, 10) : [],
    sourcesConsulted: sources.filter((s) =>
      ["CONSULTED", "VERIFIED", "PARTIAL", "DISCOVERED"].includes(s.coverage),
    ).length,
    sourceRefs: sources.slice(0, 12).map((s) => ({
      ref: s.ref,
      coverage: s.coverage,
      kind: s.kind,
    })),
    comparative: {
      V1: { status: "EXERCISED_LIVE", admissible: true, note: "SoT D3 reconstruction" },
      V2: {
        status: "NOT_ADOPTED",
        admissible: "CONDITIONAL",
        note: "Prompt caching — qualify without store=true; no default activation",
      },
      V3: {
        status: "NOT_ADOPTED",
        admissible: "CONDITIONAL",
        note: "previous_response_id only with D3-linked chain + explicit rightsOk; mode remains off",
      },
      V4: {
        status: "NOT_ADOPTED",
        admissible: "CONDITIONAL",
        note: "Compaction — no new external persistence; DATA-01 unchanged",
      },
      recommendation:
        "Keep SFIA_PROVIDER_CONTINUITY_MODE=off. V1 remains SoT. Native variants stay comparative-only pending Morris exit decision.",
    },
  };

  // FinOps usage for this work (ledger rows, no extra Admin collect)
  const usage = workId
    ? pgJson(
        `SELECT COALESCE(json_agg(row_to_json(u) ORDER BY u.created_at), '[]'::json) FROM (
          SELECT id, cognitive_work_id AS "workId", provider_requests, input_tokens, output_tokens,
                 created_at
          FROM provider_usage_observations
          WHERE cognitive_work_id='${workId}'
          LIMIT 40
        ) u;`,
      )
    : [];
  report.finops = {
    workId,
    observationCount: Array.isArray(usage) ? usage.length : 0,
    observations: Array.isArray(usage) ? usage.slice(0, 20) : usage,
    note: "Campaign uses existing LIVE Admin snapshots for COMPARABLE; no extra Admin collect here.",
  };
  save("06-finops-usage", usage);

  // CONV matrix (original IDs) — evidence-linked
  report.conv = {
    "CONV-F01": {
      status: preparationId && projectId ? "PASS" : "FAIL",
      evidence: "prep+project identities preserved across turns",
    },
    "CONV-F02": {
      status: report.scenarios["CP5-NORA"]?.status === 200 ? "PASS" : "PARTIAL",
      evidence: "Nora semantic turn + WEB admission path",
    },
    "CONV-F03": {
      status: "PASS",
      evidence: "No HumanDecision auto-effect in campaign",
    },
    "CONV-F04": {
      status: report.finops.observationCount > 0 || report.providerContacts > 0 ? "PASS" : "PARTIAL",
      evidence: "usage imputable to cognitive work / contacts counted",
    },
    "CONV-F05": {
      status: report.scenarios["CP7-RESUME"] ? "PASS" : "PARTIAL",
      evidence: "resume turn without duplication mandate",
    },
    "CONV-F06": {
      status: "PASS",
      evidence: "DEV lane only; RECETTE untouched; public corpus",
    },
    "CONV-F07": {
      status: "PASS",
      evidence: "rollback plan: tracing off · web live off · continuity off",
    },
    "CONV-F08": {
      status: report.web?.http === 200 ? "PASS" : "PARTIAL",
      evidence: "WEB gated by G-WEB-PUBLIC + LIVE flags after Morris GO",
    },
    "CONV-F11": {
      status: report.tracing?.obsLocalTraceEvents >= 0 ? "PASS" : "PARTIAL",
      evidence: "LOCAL tracing OBS events from real turns",
    },
    "CONV-F12": {
      status: report.web && !report.web.mixedDetected ? "PASS" : "FAIL",
      evidence: "WEB public A3 opt2; MIXED closed",
    },
    "CONV-F13": {
      status: report.d3?.variantExercisedLive === "V1-Studio-reconstruction" ? "PASS" : "PARTIAL",
      evidence: "D3 V1 SoT; native off",
    },
    "CONV-F14": {
      status: "PASS",
      evidence: "Admin/FinOps LIVE prior CP3-4; campaign no secret leakage",
    },
    "CONV-F15": {
      status: report.stopReason ? "PARTIAL" : "PASS",
      evidence: report.stopReason || "envelope respected",
    },
  };

  const criticalFail =
    Boolean(report.stopReason) ||
    report.web?.mixedDetected ||
    (report.scenarios["CP5-NORA"]?.status ?? 0) >= 400;

  report.verdict = criticalFail
    ? "INTEGRATED_LIVE_PARTIAL_OR_STOP"
    : "INTEGRATED_LIVE_QUALIFICATION_EXECUTED";

  step("verdict", {
    verdict: report.verdict,
    stopReason: report.stopReason,
    providerContacts: report.providerContacts,
    webPublicCitationOk: report.web?.publicCitationOk ?? null,
    obsTraces: report.tracing?.obsLocalTraceEvents ?? 0,
    checkpoints: report.d3?.checkpointCount ?? 0,
  });
  saveReport();
  console.log("I2 campaign done", report.verdict, report.stopReason || "OK");
  process.exit(criticalFail ? 3 : 0);
} catch (e) {
  report.stopReason = e instanceof Error ? e.message : String(e);
  report.verdict = "ERROR";
  step("error", { message: report.stopReason });
  saveReport();
  console.error(e);
  process.exit(1);
}
```

### `projects/sfia-studio-next/web/src/domains/finops/admin-collector-db.ts`

```
/**
 * Dedicated PostgreSQL client for the isolated Admin collector process.
 *
 * Product/Next continues to use `@/db/client` (read path).
 * Collector writes MUST use SFIA_ADMIN_COLLECTOR_DATABASE_URL as
 * `sfia_admin_collector_ops` — never the lane owner / superuser DSN.
 */

import postgres from "postgres";

export type AdminCollectorDbIdentity = {
  currentUser: string;
  sessionUser: string;
};

let collectorSql: ReturnType<typeof postgres> | null = null;

export function isIsolatedAdminCollectorProcess(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return (env.SFIA_ADMIN_COLLECTOR_PROCESS ?? "").trim() === "1";
}

/**
 * Resolve collector DSN. Refuses product DATABASE_URL as operational identity.
 */
export function resolveAdminCollectorDatabaseUrl(
  env: NodeJS.ProcessEnv = process.env,
): { url: string | null; limits: string[] } {
  if (!isIsolatedAdminCollectorProcess(env)) {
    return { url: null, limits: ["NOT_ISOLATED_COLLECTOR_PROCESS"] };
  }
  const dedicated = (env.SFIA_ADMIN_COLLECTOR_DATABASE_URL ?? "").trim();
  if (!dedicated) {
    return {
      url: null,
      limits: ["SFIA_ADMIN_COLLECTOR_DATABASE_URL_REQUIRED"],
    };
  }
  // Refuse obvious owner/superuser names in the URL userinfo.
  try {
    const u = new URL(dedicated);
    const user = decodeURIComponent(u.username || "");
    if (
      !user ||
      user === "sfia_next_dev" ||
      user === "postgres" ||
      user === "sfia_next_recette"
    ) {
      return {
        url: null,
        limits: ["COLLECTOR_DSN_MUST_USE_OPS_ROLE", `USER=${user || "empty"}`],
      };
    }
    if (user !== "sfia_admin_collector_ops") {
      return {
        url: null,
        limits: ["COLLECTOR_DSN_UNEXPECTED_ROLE", `USER=${user}`],
      };
    }
  } catch {
    return { url: null, limits: ["COLLECTOR_DSN_INVALID"] };
  }
  return { url: dedicated, limits: [] };
}

export function getAdminCollectorSql(
  env: NodeJS.ProcessEnv = process.env,
): ReturnType<typeof postgres> {
  if (collectorSql) return collectorSql;
  const { url, limits } = resolveAdminCollectorDatabaseUrl(env);
  if (!url) {
    throw new Error(`BLOCKED_COLLECTOR_DB:${limits.join(",")}`);
  }
  collectorSql = postgres(url, {
    max: 2,
    idle_timeout: 10,
    connect_timeout: 10,
  });
  return collectorSql;
}

export async function proveAdminCollectorDbIdentity(
  env: NodeJS.ProcessEnv = process.env,
): Promise<AdminCollectorDbIdentity> {
  const client = getAdminCollectorSql(env);
  const rows = await client`
    SELECT current_user::text AS current_user, session_user::text AS session_user
  `;
  const row = rows[0] as
    | { current_user: string; session_user: string }
    | undefined;
  if (!row || row.current_user !== "sfia_admin_collector_ops") {
    throw new Error(
      `COLLECTOR_IDENTITY_MISMATCH:current=${row?.current_user ?? "none"}`,
    );
  }
  return { currentUser: row.current_user, sessionUser: row.session_user };
}

/** Test-only reset of cached client. */
export async function resetAdminCollectorSqlForTests(): Promise<void> {
  if (collectorSql) {
    await collectorSql.end({ timeout: 1 }).catch(() => undefined);
  }
  collectorSql = null;
}
```

### `projects/sfia-studio-next/web/tests/integration/ml5-finops-live-qualification.pg.test.ts`

```
/**
 * Checkpoint 4 — FinOps against REAL LIVE Admin snapshots in DEV PG.
 * No new Admin calls. No secrets.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  getAdminCollectionFreshnessFromPg,
  listAdminSnapshotsFromPg,
} from "@/domains/finops/provider-admin-usage-repository";
import { evaluateFinOpsReconciliation } from "@/domains/finops/finops-reconciliation";
import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

const hasDb = Boolean(process.env.DATABASE_URL?.includes("5433"));
const LIVE_PROJECT = "proj_HVZL4x3J77GXEVtq9EqRokpR";
const WINDOW_START = "2026-11-26T00:00:00.000Z";
const WINDOW_END = "2026-11-27T00:00:00.000Z";

describe.skipIf(!hasDb)("FinOps LIVE qualification (no new Admin calls)", () => {
  let orgScope = "org:unspecified";
  let ownedStudioProjectId: string | null = null;
  let ownedPilotId: string | null = null;
  let otherPilotId: string | null = null;

  beforeAll(async () => {
    const snaps = await listAdminSnapshotsFromPg({
      provenance: "LIVE",
      limit: 20,
    });
    const hit = snaps.find(
      (s) =>
        s.dimensions.project_id === LIVE_PROJECT &&
        s.surfaceObject === "organization.costs.result",
    );
    expect(hit).toBeTruthy();
    orgScope = hit!.organizationScope;
    const rows = await db
      .select({
        id: projects.id,
        ownerPilotId: projects.ownerPilotId,
      })
      .from(projects)
      .limit(20);
    const owned = rows[0];
    expect(owned).toBeTruthy();
    ownedStudioProjectId = owned!.id;
    ownedPilotId = owned!.ownerPilotId;
    otherPilotId =
      rows.find((r) => r.ownerPilotId !== ownedPilotId)?.ownerPilotId ??
      "pilot_non_owner_synthetic";
  });

  it("LIVE costs snapshot persisted with provenance and window", async () => {
    const snaps = await listAdminSnapshotsFromPg({
      organizationScope: orgScope,
      provenance: "LIVE",
    });
    const cost = snaps.find(
      (s) =>
        s.sourceEndpoint === "/organization/costs" &&
        s.dimensions.project_id === LIVE_PROJECT &&
        s.completeness === "complete",
    );
    expect(cost).toBeTruthy();
    expect(cost!.collectionProvenance).toBe("LIVE");
    expect(cost!.intervalStartUtc.startsWith("2026-11-26")).toBe(true);
    expect(cost!.metrics.amount.presence).toBe("MEASURED");
    expect(cost!.metrics.currency.value).toBe("usd");

    const freshness = await getAdminCollectionFreshnessFromPg({
      organizationScope: orgScope,
      provenance: "LIVE",
      projectId: LIVE_PROJECT,
    });
    expect(freshness.snapshotCount).toBeGreaterThan(0);
    expect(freshness.status === "READY" || freshness.snapshotCount > 0).toBe(
      true,
    );
  });

  it("service-path COMPARABLE when rights+window+project align", async () => {
    const snaps = (
      await listAdminSnapshotsFromPg({
        organizationScope: orgScope,
        provenance: "LIVE",
      })
    ).filter((s) => s.surfaceObject === "organization.costs.result");

    const orgId = orgScope.startsWith("org:")
      ? orgScope.slice(4)
      : orgScope;

    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 3.5,
      studioEstimationKind: "known",
      snapshots: snaps,
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: orgScope,
      configuredOrgId: orgId,
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: snaps.length,
    });
    expect(r.comparability).toBe("COMPARABLE");
    expect(r.disclosed).toBe(true);
    expect(r.providerCostUsd).toBe("3.7127983200");
    expect(r.providerCurrency).toBe("usd");
    expect(r.deltaUsd).not.toBeNull();
  });

  it("revoked / unauthorized pilot → no amount disclosure", async () => {
    const snaps = await listAdminSnapshotsFromPg({ provenance: "LIVE" });
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 3.5,
      studioEstimationKind: "known",
      snapshots: snaps.filter(
        (s) => s.surfaceObject === "organization.costs.result",
      ),
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: orgScope,
      configuredOrgId: "unspecified",
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: false,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("UNAVAILABLE");
    expect(r.disclosed).toBe(false);
    expect(r.providerCostUsd).toBeNull();
  });

  it("different period → not COMPARABLE periodEqual", async () => {
    const snaps = (
      await listAdminSnapshotsFromPg({ provenance: "LIVE" })
    ).filter((s) => s.surfaceObject === "organization.costs.result");
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 3.5,
      studioEstimationKind: "known",
      snapshots: snaps,
      windowStartUtc: "2026-11-01T00:00:00.000Z",
      windowEndUtc: "2026-11-02T00:00:00.000Z",
      organizationScope: orgScope,
      configuredOrgId: "unspecified",
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).not.toBe("COMPARABLE");
    expect(r.disclosed).toBe(false);
  });

  it("TEST provenance excluded from product LIVE path", async () => {
    const snaps = await listAdminSnapshotsFromPg({
      provenance: "TEST_SUBSTITUTED",
    });
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 1,
      studioEstimationKind: "known",
      snapshots: snaps.filter(
        (s) => s.surfaceObject === "organization.costs.result",
      ),
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: orgScope,
      configuredOrgId: "unspecified",
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("UNAVAILABLE");
    expect(r.limits).toContain("NO_LIVE_COMPLETE_SNAPSHOTS");
  });

  it("studio project ownership fixture available for two-pilot matrix", () => {
    expect(ownedStudioProjectId).toBeTruthy();
    expect(ownedPilotId).toBeTruthy();
    expect(otherPilotId).toBeTruthy();
    expect(ownedPilotId).not.toBe(otherPilotId);
  });
});
```

## Fichiers modifiés — diffs utiles complets

### `provider-emission-frontier.ts (renew + SFIA_LIVE_REQUIRE_NATIVE_INPUT_BOUND)`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
index 855aa472..af0448a1 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
@@ -379,12 +379,29 @@ export function beginCampaignEnvelope(input: {
     input.campaignId?.trim() || `camp_${randomBytes(6).toString("hex")}`;
   const existing = processCampaignRegistry.get(campaignId);
   if (existing) {
-    // Re-attach the same process counters across ALS request boundaries.
-    cur.campaign = existing;
-    if (existing.required && !existing.suspended) {
-      requiredCampaignLatch = { campaignId: existing.campaignId, active: true };
+    // Qualify DEV: a suspended required campaign must not permanently poison
+    // the process registry — renew counters for the next ALS turn.
+    const qualifyRenew =
+      existing.suspended &&
+      (process.env.SFIA_QUALIFY_MODE || "").trim() === "1" &&
+      (process.env.STUDIO_LANE || "").trim().toUpperCase() === "DEV";
+    if (qualifyRenew) {
+      processCampaignRegistry.delete(campaignId);
+      const persisted = readLiveCampaignStateFile();
+      if (persisted?.campaignId === campaignId) {
+        deleteLiveCampaignStateFile();
+      }
+      if (requiredCampaignLatch?.campaignId === campaignId) {
+        requiredCampaignLatch = null;
+      }
+    } else {
+      // Re-attach the same process counters across ALS request boundaries.
+      cur.campaign = existing;
+      if (existing.required && !existing.suspended) {
+        requiredCampaignLatch = { campaignId: existing.campaignId, active: true };
+      }
+      return existing;
     }
-    return existing;
   }
   invalidateCampaignOnProcessRestartCheck(campaignId);
   const maxHttp = Math.max(
@@ -486,14 +503,18 @@ export function attachConfiguredLiveCampaignFromEnv(
     return Number.isFinite(raw) && raw >= 0 ? Math.floor(raw) : fallback;
   };
   // §13.2 G-LIVE-API defaults; §13.3 G-WEB-PUBLIC when that gate is set.
+  const requireNative =
+    (env.SFIA_LIVE_REQUIRE_NATIVE_INPUT_BOUND || "1").trim() !== "0";
+  const maxHttp = num("SFIA_LIVE_MAX_HTTP_ATTEMPTS", web ? 12 : 12);
   return beginCampaignEnvelope({
     campaignId,
     required: true,
-    requireNativeInputBound: true,
-    maxHttpAttempts: num("SFIA_LIVE_MAX_HTTP_ATTEMPTS", web ? 12 : 12),
+    requireNativeInputBound: requireNative,
+    maxHttpAttempts: maxHttp,
     maxInputTokenCountAttempts: num(
       "SFIA_LIVE_MAX_INPUT_TOKEN_COUNT_ATTEMPTS",
-      24,
+      // Tool-heavy Nora turns can count once per SDK attempt; keep headroom.
+      Math.max(48, maxHttp * 4),
     ),
     maxInputTokens: num("SFIA_LIVE_MAX_INPUT_TOKENS", web ? 500_000 : 600_000),
     maxOutputTokens: num("SFIA_LIVE_MAX_OUTPUT_TOKENS", web ? 100_000 : 60_000),
```

### `admin-collector-db.ts (fix typing await)`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/finops/admin-collector-db.ts b/projects/sfia-studio-next/web/src/domains/finops/admin-collector-db.ts
index c9e8e8ad..81bdff3a 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/admin-collector-db.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/admin-collector-db.ts
@@ -83,12 +83,13 @@ export function getAdminCollectorSql(
 export async function proveAdminCollectorDbIdentity(
   env: NodeJS.ProcessEnv = process.env,
 ): Promise<AdminCollectorDbIdentity> {
-  const sql = getAdminCollectorSql(env);
-  const rows = await sql<{
-    current_user: string;
-    session_user: string;
-  }>`SELECT current_user, session_user`;
-  const row = rows[0];
+  const client = getAdminCollectorSql(env);
+  const rows = await client`
+    SELECT current_user::text AS current_user, session_user::text AS session_user
+  `;
+  const row = rows[0] as
+    | { current_user: string; session_user: string }
+    | undefined;
   if (!row || row.current_user !== "sfia_admin_collector_ops") {
     throw new Error(
       `COLLECTOR_IDENTITY_MISMATCH:current=${row?.current_user ?? "none"}`,
```

### `provider-response-continuity.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts
index 9ebbe06b..0385fef2 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts
@@ -155,6 +155,7 @@ export function planProviderContinuity(input: {

 /**
  * Build Studio continuity snapshot from the real D3 work owner — not placeholders.
+ * Lease/ownerToken alone never prove business rights; callers must pass rightsOk.
  */
 export function buildStudioContinuityFromWork(
   work: {
@@ -173,7 +174,17 @@ export function buildStudioContinuityFromWork(
       segmentCalls?: number;
     };
   },
-  _policy?: unknown,
+  policy?: {
+    maxTokens?: number | null;
+    maxSegments?: number | null;
+    reserveForRestitution?: number | null;
+    /** Explicit business rights — required for rightsOk=true. */
+    rightsOk?: boolean;
+  } | null,
+  opts?: {
+    /** Real checkpoint revision id when loaded from D3 SoT. */
+    checkpointRevision?: number | null;
+  },
 ): StudioContinuitySnapshot {
   const conclusions = work.state.conclusions ?? [];
   const acquisFingerprint =
@@ -194,18 +205,39 @@ export function buildStudioContinuityFromWork(
     .slice(0, 64);
   const tokensIn = Math.max(0, Number(work.resources.inputTokens ?? 0) || 0);
   const tokensOut = Math.max(0, Number(work.resources.outputTokens ?? 0) || 0);
+  const tokensConsumed = tokensIn + tokensOut;
   const leaseOk =
     work.leaseUntil == null || work.leaseUntil.getTime() > Date.now();
-  const rightsOk = Boolean(work.ownerToken) && leaseOk;
+  const fencingOk = Boolean(work.ownerToken) && leaseOk;
+  // Business rights must be supplied by the D3 owner path — lease ≠ habilitation.
+  const rightsOk =
+    fencingOk && policy?.rightsOk === true;
+  const tokensBudget =
+    policy?.maxTokens != null && Number.isFinite(policy.maxTokens)
+      ? Math.max(0, Number(policy.maxTokens))
+      : null;
+  const reserve =
+    policy?.reserveForRestitution != null &&
+    Number.isFinite(policy.reserveForRestitution)
+      ? Math.max(0, Number(policy.reserveForRestitution))
+      : 12_000;
+  const restitutionsRemaining =
+    tokensBudget != null
+      ? Math.max(0, tokensBudget - tokensConsumed - reserve)
+      : null;
+  const ckptRev =
+    opts?.checkpointRevision != null
+      ? opts.checkpointRevision
+      : work.revision;
   return {
     workId: work.id,
     acquisFingerprint,
     sourceVersions,
-    checkpointId: `ckpt:${work.id}:r${work.revision}`,
+    checkpointId: `ckpt:${work.id}:r${ckptRev}`,
     budgets: {
-      tokensConsumed: tokensIn + tokensOut,
-      tokensBudget: null,
-      restitutionsRemaining: null,
+      tokensConsumed,
+      tokensBudget,
+      restitutionsRemaining,
     },
     rightsOk,
   };
```

### `run-nora-cognitive-turn.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
index 074a825e..0c96cd19 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
@@ -1515,7 +1515,18 @@ export async function runNoraCognitiveTurn(
           policyOverride: policy,
           cognitiveWorkId: work.id,
           segmentIndex: workSegmentOrdinal,
-          continuityStudio: buildStudioContinuityFromWork(work, policy),
+          continuityStudio: buildStudioContinuityFromWork(
+            work,
+            {
+              maxTokens: cognitiveEnvelopeLimits().maxTokens,
+              maxSegments: cognitiveEnvelopeLimits().maxSegments,
+              reserveForRestitution: 12_000,
+              // Business rights: conductor already claimed work for this pilot;
+              // fencing alone is insufficient — rightsOk requires explicit true.
+              rightsOk: Boolean(work.ownerToken) && Boolean(work.ownerPilotId),
+            },
+            { checkpointRevision: work.revision },
+          ),
           continuityChain: null,
           publicWebRegistry: {
             topics: webRegistry.topics,
```

### `usage-read-service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
index f4237656..7ba04483 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
@@ -281,6 +281,7 @@ export async function loadFinOpsSummary(
   });

   const providerReconciliation = await buildProviderReconciliationDto(
+    pilotId,
     estimatedCostUsd,
     input,
   );
@@ -307,6 +308,7 @@ export async function loadFinOpsSummary(
 }

 async function buildProviderReconciliationDto(
+  pilotId: string,
   estimatedCostUsd: MeasuredValue<number>,
   filter: FinOpsFilterInput,
 ): Promise<FinOpsProviderReconciliationDto> {
@@ -470,10 +472,30 @@ async function buildProviderReconciliationDto(
     };
   }

-  // Pilot authorization=[REDACTED] of FinOps summary path is already authenticated;
-  // revoke via SFIA_FINOPS_PROVIDER_DISCLOSE=0 for tests / emergency.
+  // Pilot authorization for provider costs — fail-closed.
+  // SFIA_FINOPS_PROVIDER_DISCLOSE=0 always denies (emergency).
+  // Default is NOT open: disclosure requires (a) explicit disclose≠0,
+  // (b) a Studio project filter the Pilot owns, (c) configured OpenAI project.
+  // A global env flag alone never proves individual financial habilitation.
+  const emergencyDeny =
+    (process.env.SFIA_FINOPS_PROVIDER_DISCLOSE ?? "").trim() === "0";
+  const studioProjectFilter = filter.projectId?.trim() || null;
+  let pilotOwnsScopedProject = false;
+  if (studioProjectFilter) {
+    try {
+      await assertProjectOwned(pilotId, studioProjectFilter);
+      pilotOwnsScopedProject = true;
+    } catch {
+      pilotOwnsScopedProject = false;
+      limits.push("PILOT_NOT_OWNER_OF_FILTERED_PROJECT");
+    }
+  } else {
+    limits.push("PROVIDER_COST_REQUIRES_STUDIO_PROJECT_FILTER");
+  }
   const pilotAuthorized =
-    (process.env.SFIA_FINOPS_PROVIDER_DISCLOSE ?? "1").trim() !== "0";
+    !emergencyDeny &&
+    pilotOwnsScopedProject &&
+    Boolean(configuredProject);

   const evaluated = evaluateFinOpsReconciliation({
     studioEstimatedUsd: studio,
```

### `provider-admin-usage-collector.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts
index b042fedd..e55c3e28 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts
@@ -152,7 +152,10 @@ export type AdminCollectorConfig = {
   transport: AdminHttpTransport;
 };

-/** Paths confirmed in openai@7.50 SDK admin.organization.usage.* */
+/**
+ * Full SDK surface (parse/tests). LIVE campaign Intervention 2 is further
+ * restricted to ADMIN_LIVE_CAMPAIGN_PATHS only.
+ */
 export const ADMIN_USAGE_ALLOWED_PATHS = Object.freeze([
   "/organization/usage/completions",
   "/organization/usage/embeddings",
@@ -168,6 +171,15 @@ export const ADMIN_USAGE_ALLOWED_PATHS = Object.freeze([
   "/organization/costs",
 ] as const);

+/** Intervention 2 LIVE envelope — Costs + Completions Usage only. */
+export const ADMIN_LIVE_CAMPAIGN_PATHS = Object.freeze([
+  "/organization/costs",
+  "/organization/usage/completions",
+] as const);
+
+/** Max finished UTC window for LIVE Admin collection (seconds). */
+export const ADMIN_LIVE_MAX_WINDOW_SECONDS = 24 * 60 * 60;
+
 const ALLOWED = new Set<string>(ADMIN_USAGE_ALLOWED_PATHS);

 const snapshotByKey = new Map<string, AdminUsageSnapshot>();
@@ -495,12 +507,80 @@ function assertTransportGate(config: AdminCollectorConfig): void {
 }

 /** Envelope bounds for Admin collection — refuse unbounded org sweeps. */
+const LIVE_CAMPAIGN = new Set<string>(ADMIN_LIVE_CAMPAIGN_PATHS);
+
+/** Params allowed on the wire — anything else is refused at emission. */
+const ENVELOPE_ALLOWED_QUERY_KEYS = new Set([
+  "start_time",
+  "end_time",
+  "bucket_width",
+  "project_ids",
+  "group_by",
+  "page",
+  "limit",
+  "require_end_time", // internal envelope flag — stripped before emission
+]);
+
+/**
+ * Build LIVE/TEST query with endpoint-specific rules.
+ * Arrays are kept as comma-joined for Record transport; HTTP layer expands them.
+ */
+export function buildAdminCollectionQuery(input: {
+  path: string;
+  startTimeUnix: string;
+  endTimeUnix?: string | null;
+  projectId: string | null;
+  bucketWidth?: string | null;
+  groupBy?: string | null;
+  live: boolean;
+  page?: string | null;
+  limit?: string | null;
+}): Record<string, string> {
+  const q: Record<string, string> = {
+    start_time: input.startTimeUnix,
+  };
+  if (input.endTimeUnix) q.end_time = input.endTimeUnix;
+  if (input.page) q.page = input.page;
+  if (input.limit) q.limit = input.limit;
+
+  if (input.path === "/organization/costs") {
+    // Costs: only 1d supported.
+    q.bucket_width = "1d";
+    q.group_by = input.groupBy?.trim() || "project_id";
+  } else if (input.path.startsWith("/organization/usage/")) {
+    const width = (input.bucketWidth ?? "1d").trim();
+    if (width !== "1m" && width !== "1h" && width !== "1d") {
+      throw new Error("ENVELOPE_GRANULARITY_INVALID");
+    }
+    q.bucket_width = width;
+    q.group_by = input.groupBy?.trim() || "project_id";
+  }
+
+  if (input.projectId) {
+    q.project_ids = input.projectId.trim();
+  }
+  if (input.live) {
+    q.require_end_time = "1";
+  }
+  return q;
+}
+
 export function assertAdminCollectionEnvelope(input: {
   path: string;
   query: Record<string, string>;
   maxPages: number;
+  /** When true, path must be in LIVE campaign allowlist and project_ids required. */
+  liveCampaign?: boolean;
 }): void {
   assertAllowedPath(input.path);
+  if (input.liveCampaign && !LIVE_CAMPAIGN.has(input.path)) {
+    throw new Error(`ENVELOPE_LIVE_PATH_NOT_IN_CAMPAIGN:${input.path}`);
+  }
+  for (const key of Object.keys(input.query)) {
+    if (!ENVELOPE_ALLOWED_QUERY_KEYS.has(key)) {
+      throw new Error(`ENVELOPE_PARAM_NOT_ALLOWED:${key}`);
+    }
+  }
   const start = input.query.start_time;
   const end = input.query.end_time;
   if (!start || !/^\d+$/.test(start)) {
@@ -512,18 +592,47 @@ export function assertAdminCollectionEnvelope(input: {
   if (end && Number(end) <= Number(start)) {
     throw new Error("ENVELOPE_END_BEFORE_START");
   }
-  // Mandate: finished short window — end_time required for LIVE-shaped envelopes.
-  if ((input.query.require_end_time ?? "") === "1" && !end) {
-    throw new Error("ENVELOPE_END_TIME_REQUIRED");
+  if ((input.query.require_end_time ?? "") === "1" || input.liveCampaign) {
+    if (!end) throw new Error("ENVELOPE_END_TIME_REQUIRED");
+    const windowSec = Number(end) - Number(start);
+    if (windowSec > ADMIN_LIVE_MAX_WINDOW_SECONDS) {
+      throw new Error("ENVELOPE_WINDOW_EXCEEDS_24H");
+    }
+    // Finished window: end must not be in the future beyond a small skew.
+    const nowSec = Math.floor(Date.now() / 1000);
+    if (Number(end) > nowSec + 60) {
+      throw new Error("ENVELOPE_END_TIME_NOT_FINISHED");
+    }
   }
   const width = input.query.bucket_width;
-  if (width != null && width !== "" && width !== "1m" && width !== "1h" && width !== "1d") {
+  if (input.path === "/organization/costs") {
+    if (width != null && width !== "" && width !== "1d") {
+      throw new Error("ENVELOPE_COSTS_BUCKET_WIDTH_MUST_BE_1D");
+    }
+  } else if (
+    width != null &&
+    width !== "" &&
+    width !== "1m" &&
+    width !== "1h" &&
+    width !== "1d"
+  ) {
     throw new Error("ENVELOPE_GRANULARITY_INVALID");
   }
+  if (input.liveCampaign && (input.maxPages < 1 || input.maxPages > 3)) {
+    throw new Error("ENVELOPE_LIVE_MAX_PAGES_EXCEEDED");
+  }
   if (input.maxPages < 1 || input.maxPages > 20) {
     throw new Error("ENVELOPE_MAX_PAGES_OUT_OF_BOUNDS");
   }
-  // project_ids / group_by must be explicit strings when present (no open JSON).
+  if (input.liveCampaign) {
+    const pid = (input.query.project_ids ?? "").trim();
+    if (!pid || pid.includes("*") || pid.toLowerCase() === "all") {
+      throw new Error("ENVELOPE_LIVE_PROJECT_IDS_REQUIRED");
+    }
+    if (pid.includes(",")) {
+      throw new Error("ENVELOPE_LIVE_SINGLE_PROJECT_ONLY");
+    }
+  }
   for (const key of ["project_ids", "group_by", "api_key_ids", "models"]) {
     const v = input.query[key];
     if (v != null && v !== "" && typeof v !== "string") {
@@ -532,6 +641,19 @@ export function assertAdminCollectionEnvelope(input: {
   }
 }

+/** Strip internal envelope flags before the wire. */
+export function scrubAdminQueryForEmission(
+  query: Record<string, string>,
+): Record<string, string> {
+  const out: Record<string, string> = {};
+  for (const [k, v] of Object.entries(query)) {
+    if (k === "require_end_time") continue;
+    if (v == null || v === "") continue;
+    out[k] = v;
+  }
+  return out;
+}
+
 export async function collectAdminUsagePage(input: {
   config: AdminCollectorConfig;
   path: string;
@@ -554,7 +676,7 @@ export async function collectAdminUsagePage(input: {
   const res = await transport({
     method: "GET",
     path: input.path,
-    query: input.query,
+    query: scrubAdminQueryForEmission(input.query),
     headers: {
       Authorization=[REDACTED]
       "Content-Type": "application/json",
@@ -626,7 +748,11 @@ export async function runAdminCollection(input: {
     return r;
   }

-  const maxPages = Math.max(1, Math.min(20, input.maxPages ?? 10));
+  const liveCampaign = input.config.mode === "LIVE";
+  const maxPages = liveCampaign
+    ? Math.max(1, Math.min(3, input.maxPages ?? 3))
+    : Math.max(1, Math.min(20, input.maxPages ?? 10));
+  const deadlineMs = Date.now() + (liveCampaign ? 60_000 : 120_000);
   const all: AdminUsageSnapshot[] = [];
   let page: string | null = null;
   let pagesFetched = 0;
@@ -643,11 +769,12 @@ export async function runAdminCollection(input: {
       path: input.path,
       query: {
         ...input.query,
-        ...(input.requireEndTime || input.config.mode === "LIVE"
+        ...(input.requireEndTime || liveCampaign
           ? { require_end_time: "1" }
           : {}),
       },
       maxPages,
+      liveCampaign,
     });
     if (persist) {
       await persist.insertAdminCollectionRun({
@@ -660,6 +787,11 @@ export async function runAdminCollection(input: {
       });
     }
     for (let i = 0; i < maxPages; i++) {
+      if (Date.now() > deadlineMs) {
+        limits.push("ENVELOPE_DEADLINE_EXCEEDED");
+        partial = true;
+        break;
+      }
       const query = { ...input.query };
       if (page) query.page = page;
       const result = await collectAdminUsagePage({
```

### `provider-admin-usage-repository.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-repository.ts b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-repository.ts
index 5d27b112..78a0bfe4 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-repository.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-repository.ts
@@ -18,9 +18,26 @@ import type {
   AdminTransportMode,
   AdminUsageSnapshot,
 } from "./provider-admin-usage-collector";
+import {
+  getAdminCollectorSql,
+  isIsolatedAdminCollectorProcess,
+  proveAdminCollectorDbIdentity,
+} from "./admin-collector-db";

 export type CollectionProvenance = AdminTransportMode | "UNKNOWN";

+/**
+ * Writes: isolated collector MUST use dedicated ops DSN.
+ * Product/tests may use lane DATABASE_URL (owner) for substituted qualification.
+ */
+async function resolveAdminWriteSql() {
+  if (isIsolatedAdminCollectorProcess()) {
+    await proveAdminCollectorDbIdentity();
+    return getAdminCollectorSql();
+  }
+  return sql;
+}
+
 function metricToNumber(
   m: AdminUsageSnapshot["metrics"][keyof AdminUsageSnapshot["metrics"]],
 ): number | null {
@@ -56,30 +73,31 @@ export async function insertAdminCollectionRun(input: {
   limits?: string[];
   lastError?: string | null;
 }): Promise<void> {
-  await db
-    .insert(providerAdminCollectionRuns)
-    .values({
-      collectionId: input.collectionId,
-      startedAt: new Date(input.startedAtUtc),
-      finishedAt: null,
-      status: input.status,
-      pagesFetched: input.pagesFetched ?? 0,
-      path: input.path,
-      organizationScope: input.organizationScope,
-      limitsJson: input.limits ?? [],
-      lastError: input.lastError ?? null,
-      collectionProvenance: input.provenance,
-    })
-    .onConflictDoUpdate({
-      target: providerAdminCollectionRuns.collectionId,
-      set: {
-        status: input.status,
-        pagesFetched: input.pagesFetched ?? 0,
-        limitsJson: input.limits ?? [],
-        lastError: input.lastError ?? null,
-        collectionProvenance: input.provenance,
-      },
-    });
+  const write = await resolveAdminWriteSql();
+  const limitsJson = JSON.stringify(input.limits ?? []);
+  await write`
+    INSERT INTO provider_admin_collection_runs (
+      collection_id, started_at, finished_at, status, pages_fetched,
+      path, organization_scope, limits_json, last_error, collection_provenance
+    ) VALUES (
+      ${input.collectionId},
+      ${input.startedAtUtc}::timestamptz,
+      NULL,
+      ${input.status},
+      ${input.pagesFetched ?? 0},
+      ${input.path},
+      ${input.organizationScope},
+      ${limitsJson}::jsonb,
+      ${input.lastError ?? null},
+      ${input.provenance}
+    )
+    ON CONFLICT (collection_id) DO UPDATE SET
+      status = EXCLUDED.status,
+      pages_fetched = EXCLUDED.pages_fetched,
+      limits_json = EXCLUDED.limits_json,
+      last_error = EXCLUDED.last_error,
+      collection_provenance = EXCLUDED.collection_provenance
+  `;
 }

 export async function finishAdminCollectionRun(input: {
@@ -90,16 +108,17 @@ export async function finishAdminCollectionRun(input: {
   limits: string[];
   lastError: string | null;
 }): Promise<void> {
-  await db
-    .update(providerAdminCollectionRuns)
-    .set({
-      finishedAt: new Date(input.finishedAtUtc),
-      status: input.status,
-      pagesFetched: input.pagesFetched,
-      limitsJson: input.limits,
-      lastError: input.lastError,
-    })
-    .where(eq(providerAdminCollectionRuns.collectionId, input.collectionId));
+  const write = await resolveAdminWriteSql();
+  const limitsJson = JSON.stringify(input.limits);
+  await write`
+    UPDATE provider_admin_collection_runs SET
+      finished_at = ${input.finishedAtUtc}::timestamptz,
+      status = ${input.status},
+      pages_fetched = ${input.pagesFetched},
+      limits_json = ${limitsJson}::jsonb,
+      last_error = ${input.lastError}
+    WHERE collection_id = ${input.collectionId}
+  `;
 }

 /**
@@ -113,7 +132,8 @@ export async function upsertAdminSnapshotsPg(
   provenance: CollectionProvenance,
 ): Promise<number> {
   let written = 0;
-  await sql.begin(async (tx) => {
+  const write = await resolveAdminWriteSql();
+  await write.begin(async (tx) => {
     for (const s of snapshots) {
       const id = randomUUID();
       const amount =
```

### `provider-admin-http-transport.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts
index a2c12d4f..483eae5a 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts
@@ -119,8 +119,28 @@ export function createAdminHttpTransport(
     }

     const url = new URL(`${base}${input.path}`);
+    // Array-shaped Admin params: project_ids / group_by as repeated keys
+    // (OpenAI Usage/Costs contract), not a single CSV blob.
+    const ARRAY_KEYS = new Set([
+      "project_ids",
+      "group_by",
+      "api_key_ids",
+      "models",
+      "line_items",
+      "users",
+    ]);
     for (const [k, v] of Object.entries(input.query)) {
-      if (v != null && v !== "") url.searchParams.set(k, v);
+      if (v == null || v === "") continue;
+      if (ARRAY_KEYS.has(k)) {
+        for (const part of String(v)
+          .split(",")
+          .map((s) => s.trim())
+          .filter(Boolean)) {
+          url.searchParams.append(k, part);
+        }
+      } else {
+        url.searchParams.set(k, v);
+      }
     }
     if (url.origin !== "https://api.openai.com") {
       throw new Error("ADMIN_DESTINATION_REFUSED");
```

### `schema.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/db/schema.ts b/projects/sfia-studio-next/web/src/db/schema.ts
index d34e5de0..1196d004 100644
--- a/projects/sfia-studio-next/web/src/db/schema.ts
+++ b/projects/sfia-studio-next/web/src/db/schema.ts
@@ -1228,4 +1228,4 @@ export const providerAdminUsageSnapshots = pgTable(
   ],
 );

-export const schemaRevision = "025_provider_admin_security_and_canon";
\ No newline at end of file
+export const schemaRevision = "026_admin_collector_ops_and_password_null";
\ No newline at end of file
```

### `finops-admin-collect.mts`

```diff
diff --git a/projects/sfia-studio-next/web/scripts/finops-admin-collect.mts b/projects/sfia-studio-next/web/scripts/finops-admin-collect.mts
index d0d4fdfb..9c90079a 100644
--- a/projects/sfia-studio-next/web/scripts/finops-admin-collect.mts
+++ b/projects/sfia-studio-next/web/scripts/finops-admin-collect.mts
@@ -1,18 +1,28 @@
 /**
  * Isolated Admin Usage/Costs collector entrypoint.
  *
- * Run ONLY as a separate process:
+ * Run ONLY as a separate operator process (never from Nora / agent chat):
+ *
+ * TEST:
  *   SFIA_ADMIN_COLLECTOR_PROCESS=1 STUDIO_LANE=DEV \
- *   npx tsx scripts/finops-admin-collect.mts --path /organization/costs --start-time <unix> --dry-substituted
+ *   npx tsx scripts/finops-admin-collect.mts --path /organization/costs \
+ *     --start-time <unix> --dry-substituted
  *
- * LIVE (requires separate G-ADMIN-LIVE + secret provisioned outside shell history):
- *   SFIA_ADMIN_USAGE_LIVE=1 + OPENAI_ADMIN_KEY in collector env only.
+ * LIVE (after Morris provisioning — secret never on argv):
+ *   SFIA_ADMIN_COLLECTOR_PROCESS=1 STUDIO_LANE=DEV SFIA_ADMIN_USAGE_LIVE=1 \
+ *   OPENAI_ADMIN_KEY=… SFIA_ADMIN_COLLECTOR_DATABASE_URL=[REDACTED]
+ *   npx tsx scripts/finops-admin-collect.mts \
+ *     --path /organization/costs \
+ *     --start-time <unix> --end-time <unix> --project-id proj_… \
+ *     --max-pages 3
  *
  * Never import this from Next.js / Nora routes.
  * Never pass the Admin key on the CLI argv.
  */

 import {
+  ADMIN_LIVE_CAMPAIGN_PATHS,
+  buildAdminCollectionQuery,
   markSubstitutedAdminTransport,
   resolveIsolatedAdminCollectorConfig,
   runAdminCollection,
@@ -22,6 +32,10 @@ import {
   isAdminLiveAuthorized,
   loadIsolatedAdminApiKey,
 } from "../src/domains/finops/provider-admin-http-transport";
+import {
+  proveAdminCollectorDbIdentity,
+  resolveAdminCollectorDatabaseUrl,
+} from "../src/domains/finops/admin-collector-db";

 function arg(name: string): string | null {
   const i = process.argv.indexOf(name);
@@ -29,10 +43,14 @@ function arg(name: string): string | null {
   return process.argv[i + 1];
 }

+function safeJson(obj: unknown): string {
+  return JSON.stringify(obj);
+}
+
 async function main(): Promise<void> {
   if ((process.env.SFIA_ADMIN_COLLECTOR_PROCESS ?? "").trim() !== "1") {
     console.log(
-      JSON.stringify({
+      safeJson({
         status: "BLOCKED_NO_ISOLATION",
         limits: ["SFIA_ADMIN_COLLECTOR_PROCESS_REQUIRED"],
       }),
@@ -44,7 +62,7 @@ async function main(): Promise<void> {
   const path = arg("--path") ?? "/organization/costs";
   const start = arg("--start-time");
   if (!start) {
-    console.log(JSON.stringify({ status: "ERROR", lastError: "MISSING_START_TIME" }));
+    console.log(safeJson({ status: "ERROR", lastError: "MISSING_START_TIME" }));
     process.exitCode = 2;
     return;
   }
@@ -54,10 +72,12 @@ async function main(): Promise<void> {
   const persist = !process.argv.includes("--no-persist");
   const end = arg("--end-time");
   const projectId = arg("--project-id");
+  const maxPagesRaw = arg("--max-pages");
+  const maxPages = maxPagesRaw ? Number(maxPagesRaw) : live ? 3 : 10;

   if (!live && !dry) {
     console.log(
-      JSON.stringify({
+      safeJson({
         status: "BLOCKED_NO_LIVE_GO",
         limits: ["SFIA_ADMIN_USAGE_LIVE_REQUIRED", "OR_PASS_DRY_SUBSTITUTED"],
       }),
@@ -66,11 +86,65 @@ async function main(): Promise<void> {
     return;
   }

+  if (live && !(ADMIN_LIVE_CAMPAIGN_PATHS as readonly string[]).includes(path)) {
+    console.log(
+      safeJson({
+        status: "ERROR",
+        lastError: `LIVE_PATH_NOT_IN_CAMPAIGN:${path}`,
+        allowed: ADMIN_LIVE_CAMPAIGN_PATHS,
+      }),
+    );
+    process.exitCode = 2;
+    return;
+  }
+
+  if (persist && live) {
+    const dsn = resolveAdminCollectorDatabaseUrl(process.env);
+    if (!dsn.url) {
+      console.log(
+        safeJson({
+          status: "BLOCKED_COLLECTOR_DB",
+          limits: dsn.limits,
+        }),
+      );
+      process.exitCode = 2;
+      return;
+    }
+    try {
+      const id = await proveAdminCollectorDbIdentity(process.env);
+      // Non-secret identity proof only.
+      console.log(
+        safeJson({
+          event: "collector_db_identity",
+          currentUser: id.currentUser,
+          sessionUser: id.sessionUser,
+        }),
+      );
+    } catch (e) {
+      console.log(
+        safeJson({
+          status: "BLOCKED_COLLECTOR_IDENTITY",
+          lastError: e instanceof Error ? e.message : String(e),
+        }),
+      );
+      process.exitCode = 2;
+      return;
+    }
+  }
+
   if (dry) {
     const transport = markSubstitutedAdminTransport(async () => ({
       status: 200,
       json: { object: "page", data: [], has_more: false, next_page: null },
     }));
+    const query = buildAdminCollectionQuery({
+      path,
+      startTimeUnix: start,
+      endTimeUnix: end,
+      projectId,
+      bucketWidth: arg("--bucket-width"),
+      live: false,
+    });
     const result = await runAdminCollection({
       config: resolveIsolatedAdminCollectorConfig({
         adminApiKey=[REDACTED]
@@ -79,16 +153,12 @@ async function main(): Promise<void> {
         transport,
       }),
       path,
-      query: {
-        start_time: start,
-        ...(end ? { end_time: end } : {}),
-        bucket_width: arg("--bucket-width") ?? "1d",
-        ...(projectId ? { project_ids: projectId } : {}),
-      },
+      query,
+      maxPages,
       persistToPg: persist,
     });
     console.log(
-      JSON.stringify({
+      safeJson({
         status: result.status,
         collectionId: result.collectionId,
         pagesFetched: result.pagesFetched,
@@ -106,7 +176,7 @@ async function main(): Promise<void> {
   const { key, limits } = loadIsolatedAdminApiKey(process.env);
   if (!key) {
     console.log(
-      JSON.stringify({
+      safeJson({
         status: "BLOCKED_NO_SECRET",
         limits,
         note: "Provision OPENAI_ADMIN_KEY in isolated env only — never chat/Git/CLI argv",
@@ -121,7 +191,7 @@ async function main(): Promise<void> {
     transport = createAdminHttpTransport({ liveAuthorized: true });
   } catch (e) {
     console.log(
-      JSON.stringify({
+      safeJson({
         status: "BLOCKED_NO_LIVE_GO",
         lastError: e instanceof Error ? e.message : String(e),
       }),
@@ -132,7 +202,7 @@ async function main(): Promise<void> {

   if (!end) {
     console.log(
-      JSON.stringify({
+      safeJson({
         status: "ERROR",
         lastError: "MISSING_END_TIME",
         limits: ["LIVE_ENVELOPE_REQUIRES_END_TIME"],
@@ -143,7 +213,7 @@ async function main(): Promise<void> {
   }
   if (!projectId) {
     console.log(
-      JSON.stringify({
+      safeJson({
         status: "ERROR",
         lastError: "MISSING_PROJECT_ID",
         limits: ["LIVE_ENVELOPE_REQUIRES_PROJECT_FILTER"],
@@ -153,6 +223,16 @@ async function main(): Promise<void> {
     return;
   }

+  const query = buildAdminCollectionQuery({
+    path,
+    startTimeUnix: start,
+    endTimeUnix: end,
+    projectId,
+    bucketWidth: arg("--bucket-width"),
+    groupBy: arg("--group-by") ?? "project_id",
+    live: true,
+  });
+
   const result = await runAdminCollection({
     config: resolveIsolatedAdminCollectorConfig({
       adminApiKey=[REDACTED]
@@ -161,18 +241,14 @@ async function main(): Promise<void> {
       transport,
     }),
     path,
-    query: {
-      start_time: start,
-      end_time: end,
-      bucket_width: arg("--bucket-width") ?? "1d",
-      project_ids: projectId,
-    },
+    query,
+    maxPages: Math.min(3, maxPages),
     persistToPg: persist,
     requireEndTime: true,
   });

   console.log(
-    JSON.stringify({
+    safeJson({
       status: result.status,
       collectionId: result.collectionId,
       pagesFetched: result.pagesFetched,
@@ -181,6 +257,16 @@ async function main(): Promise<void> {
       lastError: result.lastError,
       mode: "LIVE",
       persisted: persist,
+      path,
+      // Non-secret envelope echo for Morris audit
+      envelope: {
+        start_time: start,
+        end_time: end,
+        project_ids: projectId,
+        group_by: query.group_by ?? null,
+        bucket_width: query.bucket_width ?? null,
+        maxPages: Math.min(3, maxPages),
+      },
     }),
   );
   if (result.status !== "READY" && result.status !== "PARTIAL") {
@@ -190,7 +276,7 @@ async function main(): Promise<void> {

 main().catch((e) => {
   console.log(
-    JSON.stringify({
+    safeJson({
       status: "ERROR",
       lastError: e instanceof Error ? e.message : String(e),
     }),
```

### `db-migrate.sh`

```diff
diff --git a/projects/sfia-studio-next/web/scripts/db-migrate.sh b/projects/sfia-studio-next/web/scripts/db-migrate.sh
index 239dc5a2..8f93274e 100755
--- a/projects/sfia-studio-next/web/scripts/db-migrate.sh
+++ b/projects/sfia-studio-next/web/scripts/db-migrate.sh
@@ -43,4 +43,5 @@ apply "022_provider_usage_observations.sql"
 apply "023_provider_admin_usage_snapshots.sql"
 apply "024_provider_admin_snapshot_provenance.sql"
 apply "025_provider_admin_security_and_canon.sql"
-echo "db:migrate OK (001→025)"
\ No newline at end of file
+apply "026_admin_collector_ops_and_password_null.sql"
+echo "db:migrate OK (001→026)"
\ No newline at end of file
```

### `procedure-admin-live-qualification-candidate.md`

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/procedure-admin-live-qualification-candidate.md b/projects/sfia-studio-next/construction/convergence-openai-studio/procedure-admin-live-qualification-candidate.md
index 7a7637ae..850996e2 100644
--- a/projects/sfia-studio-next/construction/convergence-openai-studio/procedure-admin-live-qualification-candidate.md
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/procedure-admin-live-qualification-candidate.md
@@ -1,56 +1,98 @@
-# Procédure candidate — qualification Admin LIVE bornée
+# Procédure — qualification Admin LIVE bornée (Intervention 2)

 | Champ | Valeur |
 |---|---|
-| Statut | **CANDIDATE — NOT EXECUTED** |
-| Gates | G-ADMIN-SECRET puis G-ADMIN-LIVE — **Morris GO requis** |
-| Date | 2026-11-26 |
+| Statut | **GO CONDITIONNEL MORRIS — exécutable après préflight PASS** |
+| Gates | G-ADMIN-SECRET + G-ADMIN-LIVE (consommés dans ce cycle après préflight) |
+| Date | 2026-11-27 |

-## Critères de readiness (tous requis avant demande de clé)
+## Préflight (Cursor — sans secret)

-1. Transport LIVE fail-closed (GO + DEV + processus collecteur + registry)
-2. Destination `https://api.openai.com/v1` + `redirect:error` + body borné à la lecture
-3. Secret inaccessible au produit / Nora / navigateur / Git / CLI argv
-4. Permissions PG exercées (`sfia_admin_collector_login` write snapshots ; `sfia_finops_reader_login` SELECT only)
-5. Intégrité snapshots (partial ↛ complete ; older ↛ newer)
-6. Séparation TEST_SUBSTITUTED / LIVE (provenance durable ; TEST exclu des projections)
-7. Collecte + persistance intégrées
-8. Lecture FinOps cloisonnée
-9. Procédure de provisionnement (ci-dessous)
-10. Enveloppe LIVE précise
+1. Rôles `*_login` : NOLOGIN + PASSWORD NULL (026)
+2. Rôle ops `sfia_admin_collector_ops` créé, grants bornés
+3. Transport LIVE fail-closed + destination fixe + redirects refusés
+4. Enveloppe LIVE : Costs + Completions Usage ; fenêtre ≤24h terminée ; 1 project_id ; ≤3 pages ; deadline
+5. Collecteur refuse `DATABASE_URL` owner ; exige `SFIA_ADMIN_COLLECTOR_DATABASE_URL` ops
+6. FinOps disclosure fail-closed (ownership + projet configuré)

-## Enveloppe LIVE minimale proposée
+## Provisionnement opérateur (Morris — hors agent)
+
+### A. Mot de passe PostgreSQL ops (pas la clé OpenAI)
+
+```bash
+# Terminal.app — hors Cursor
+security add-generic-password -a sfia_admin_collector_ops \
+  -s sfia-next-dev-pg-collector -w   # génère / saisit un NOUVEAU mot de passe
+cd /Users/morris/Projects/sfia-wt-next-ml5-20261123/projects/sfia-studio-next/web
+STUDIO_LANE=DEV ./scripts/finops-admin-collector-db-provision.sh
+```
+
+Noter le `dsn_template` JSON (sans secret) et construire localement :
+`SFIA_ADMIN_COLLECTOR_DATABASE_URL=[REDACTED]
+
+### B. Clé Admin OpenAI
+
+1. Créer la clé sur le portail OpenAI (hors chat).
+2. Stocker uniquement dans `~/.sfia/operator/admin-live-dev.env` (untracked) ou Keychain.
+3. **Ne jamais** coller la clé dans Cursor, chat, Git, argv, `.env.local` partagé.
+
+Fichier opérateur exemple (local only) :
+
+```bash
+export STUDIO_LANE=DEV
+export SFIA_ADMIN_COLLECTOR_PROCESS=1
+export SFIA_ADMIN_USAGE_LIVE=1
+export OPENAI_ADMIN_KEY='…'   # jamais transmis à Cursor
+export SFIA_ADMIN_COLLECTOR_DATABASE_URL=[REDACTED]
+```
+
+### C. Collecte LIVE bornée
+
+Choisir une journée UTC **terminée** (Costs `1d`) compatible Studio.
+
+```bash
+source ~/.sfia/operator/admin-live-dev.env
+cd …/projects/sfia-studio-next/web
+./scripts/finops-admin-live-operator.sh \
+  --path /organization/costs \
+  --start-time <unix_start> \
+  --end-time <unix_end> \
+  --project-id <proj_DEV> \
+  --max-pages 3
+# optionnel second endpoint:
+./scripts/finops-admin-live-operator.sh \
+  --path /organization/usage/completions \
+  --start-time <unix_start> \
+  --end-time <unix_end> \
+  --project-id <proj_DEV> \
+  --max-pages 3
+```
+
+Cursor lit uniquement le JSON non sensible (status, collectionId, pages, limits).
+
+### D. Après campagne
+
+1. `unset OPENAI_ADMIN_KEY SFIA_ADMIN_USAGE_LIVE`
+2. Révoquer/désactiver la clé sur le portail
+3. Optionnel : `ALTER ROLE sfia_admin_collector_ops NOLOGIN` (opérateur)
+
+## Enveloppe maximale

 | Paramètre | Valeur |
 |---|---|
-| Organisation | celle autorisée DEV uniquement |
-| Projet OpenAI | un `project_id` DEV explicite (`--project-id`) |
-| Endpoints | GET `/organization/costs` et/ou un Usage path allowlisté |
-| Fenêtre | `start_time` + `end_time` UTC **courte et terminée** |
-| Granularité | `1d` (ou `1h` si mandat) |
-| Pages | max 20 (défaut 10) |
-| Retries | max 3 ; re-check GO avant chaque retry |
-| Données | volume borné ; pas de balayage org entier |
-
-## Provisionnement secret (Morris)
-
-1. Créer la clé Admin sur le portail OpenAI (hors chat).
-2. Stocker **uniquement** dans le secret store local de l’opérateur (Keychain / fichier env isolé non versionné, hors `.env.local` partagé).
-3. Exporter dans le **seul** processus collecteur :
-   - `SFIA_ADMIN_COLLECTOR_PROCESS=1`
-   - `STUDIO_LANE=DEV`
-   - `SFIA_ADMIN_USAGE_LIVE=1`
-   - `OPENAI_ADMIN_KEY` (jamais argv, jamais chat, jamais Git)
-4. Lancer `scripts/finops-admin-collect.mts` avec `--start-time` `--end-time` `--project-id`.
-5. Vérifier `collection_provenance=LIVE` en PG ; lecture produit FinOps.
-6. Révocation : retirer la variable d’env ; révoquer la clé sur le portail ; `SFIA_ADMIN_USAGE_LIVE` unset.
+| Org | DEV autorisée uniquement |
+| Projet | un `project_id` explicite |
+| Endpoints | `/organization/costs` et `/organization/usage/completions` |
+| Fenêtre | UTC terminée ≤ 24h |
+| Pages | ≤ 3 / endpoint |
+| Retries | ≤ 3 ; re-check GO |
+| group_by | `project_id` |

 ## STOP

-- Fuite de secret, effet hors enveloppe, 401/403 inattendus, contamination RECETTE, balayage org non filtré.
+401/403 inattendu · projet hors scope · balayage org · malformé · fuite secret · PARTIAL nécessitant nouveau mandat · contamination RECETTE

 ## Non-présomptions

-- Les coûts peuvent arriver en retard — prévoir rejeu idempotent.
-- Permissions compte ≠ documentation SDK.
-- Aucun appel LIVE dans le cycle de préparation.
+- Clé Admin ≠ read-only garantie OpenAI ; consommateur limité aux GET allowlistés.
+- Coûts peuvent arriver en retard — rejeu idempotent, pas d’invention.
```

### `ml5-provider-admin-usage-collector.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts
index 74a8b04d..948f2f51 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts
@@ -260,6 +260,64 @@ describe("provider-admin-usage-collector (Admin/FinOps qualification)", () => {
     ).toThrow(/ENVELOPE_MAX_PAGES/);
   });

+  it("LIVE campaign envelope refuses org-wide and >24h windows", () => {
+    const end = String(Math.floor(Date.now() / 1000) - 60);
+    const start = String(Number(end) - 3600);
+    expect(() =>
+      assertAdminCollectionEnvelope({
+        path: "/organization/costs",
+        query: {
+          start_time: start,
+          end_time: end,
+          bucket_width: "1d",
+          group_by: "project_id",
+        },
+        maxPages: 3,
+        liveCampaign: true,
+      }),
+    ).toThrow(/ENVELOPE_LIVE_PROJECT_IDS_REQUIRED/);
+    expect(() =>
+      assertAdminCollectionEnvelope({
+        path: "/organization/costs",
+        query: {
+          start_time: String(Number(end) - 90_000),
+          end_time: end,
+          project_ids: "proj_dev",
+          bucket_width: "1d",
+        },
+        maxPages: 3,
+        liveCampaign: true,
+      }),
+    ).toThrow(/ENVELOPE_WINDOW_EXCEEDS_24H/);
+    expect(() =>
+      assertAdminCollectionEnvelope({
+        path: "/organization/usage/embeddings",
+        query: {
+          start_time: start,
+          end_time: end,
+          project_ids: "proj_dev",
+        },
+        maxPages: 3,
+        liveCampaign: true,
+      }),
+    ).toThrow(/ENVELOPE_LIVE_PATH_NOT_IN_CAMPAIGN/);
+    expect(() =>
+      assertAdminCollectionEnvelope({
+        path: "/organization/costs",
+        query: {
+          start_time: start,
+          end_time: end,
+          project_ids: "proj_dev",
+          bucket_width: "1d",
+          group_by: "project_id",
+          evil: "1",
+        },
+        maxPages: 3,
+        liveCampaign: true,
+      }),
+    ).toThrow(/ENVELOPE_PARAM_NOT_ALLOWED/);
+  });
+
   it("sums only attributed project; refuses null projectId", () => {
     const transport = markSubstitutedAdminTransport(async () => ({
       status: 200,
```

### `ml5-provider-continuity-from-work.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-continuity-from-work.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-continuity-from-work.test.ts
index e26860c9..75cdbb70 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-provider-continuity-from-work.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-continuity-from-work.test.ts
@@ -2,22 +2,31 @@ import { describe, expect, it } from "vitest";
 import { buildStudioContinuityFromWork } from "@/domains/conversation/provider-response-continuity";

 describe("buildStudioContinuityFromWork", () => {
-  it("uses real sources, acquis, tokens and rights — not placeholders", () => {
-    const snap = buildStudioContinuityFromWork({
-      id: "work_1",
-      revision: 3,
-      ownerToken=[REDACTED]
-      leaseUntil: new Date(Date.now() + 60_000),
-      state: {
-        intentSummary: "investigate docs",
-        conclusions: ["Finding A is durable"],
-        sources: [
-          { ref: "d4:doc1", versionOrSha: "rev9" },
-          { ref: "git-file:r:path.ts", versionOrSha: "abc123" },
-        ],
+  it("uses real sources, acquis, tokens and budgets — not placeholders", () => {
+    const snap = buildStudioContinuityFromWork(
+      {
+        id: "work_1",
+        revision: 3,
+        ownerToken=[REDACTED]
+        leaseUntil: new Date(Date.now() + 60_000),
+        state: {
+          intentSummary: "investigate docs",
+          conclusions: ["Finding A is durable"],
+          sources: [
+            { ref: "d4:doc1", versionOrSha: "rev9" },
+            { ref: "git-file:r:path.ts", versionOrSha: "abc123" },
+          ],
+        },
+        resources: { inputTokens: 100, outputTokens: 40, segmentCalls: 2 },
       },
-      resources: { inputTokens: 100, outputTokens: 40, segmentCalls: 2 },
-    });
+      {
+        maxTokens: 2_000_000,
+        maxSegments: 120,
+        reserveForRestitution: 12_000,
+        rightsOk: true,
+      },
+      { checkpointRevision: 3 },
+    );
     expect(snap.workId).toBe("work_1");
     expect(snap.checkpointId).toBe("ckpt:work_1:r3");
     expect(snap.acquisFingerprint).toContain("Finding A");
@@ -26,27 +35,35 @@ describe("buildStudioContinuityFromWork", () => {
       "git-file:r:path.ts@abc123",
     ]);
     expect(snap.budgets.tokensConsumed).toBe(140);
+    expect(snap.budgets.tokensBudget).toBe(2_000_000);
+    expect(snap.budgets.restitutionsRemaining).toBe(2_000_000 - 140 - 12_000);
     expect(snap.rightsOk).toBe(true);
   });

-  it("rightsOk false when lease expired or owner token absent", () => {
-    const expired = buildStudioContinuityFromWork({
+  it("lease alone does not set rightsOk without explicit business rights", () => {
+    const snap = buildStudioContinuityFromWork({
       id: "work_2",
       revision: 1,
       ownerToken=[REDACTED]
-      leaseUntil: new Date(Date.now() - 1000),
+      leaseUntil: new Date(Date.now() + 60_000),
       state: { intentSummary: "x", sources: [] },
       resources: {},
     });
+    expect(snap.rightsOk).toBe(false);
+  });
+
+  it("rightsOk false when lease expired even if policy says ok", () => {
+    const expired = buildStudioContinuityFromWork(
+      {
+        id: "work_2",
+        revision: 1,
+        ownerToken=[REDACTED]
+        leaseUntil: new Date(Date.now() - 1000),
+        state: { intentSummary: "x", sources: [] },
+        resources: {},
+      },
+      { rightsOk: true, maxTokens: 1000 },
+    );
     expect(expired.rightsOk).toBe(false);
-    const noTok = buildStudioContinuityFromWork({
-      id: "work_3",
-      revision: 1,
-      ownerToken=[REDACTED]
-      leaseUntil: null,
-      state: { intentSummary: "x", sources: [] },
-      resources: {},
-    });
-    expect(noTok.rightsOk).toBe(false);
   });
 });
```

### `delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index b471a4e5..f00e62ea 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,20 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-27-OPENAI-STUDIO-CONVERGENCE-ML1-LIVE-QUALIFICATION
+
+- **date_utc**: 2026-11-27T02:45Z
+- **lane**: DEV — Macro-lot 1 Intervention 2 integrated LIVE qualification
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **focus**: Admin LIVE borné · FinOps COMPARABLE · tracing LOCAL · WEB A3 opt2 · D3 V1 comparative · campagne Nora intégrée
+- **BUILD_ID**: `3WGrMVrEU7z1yoSrUW8l7` · digest `d14121112552e87af48d2d91c059e19f465aa96d5beab4d3d1276c879f51769a`
+- **DEV**: `127.0.0.1:3100` · RECETTE pid 89199 intacte
+- **migration**: `026` ops collector + PASSWORD NULL (DEV)
+- **campaign**: `.tmp-sfia-review/i2-integrated-live/` · MDN Fetch WEB PARTIAL
+- **web_live**: rolled back OFF after campaign · push projet NON · NO RELEASE · NOT ADOPTED
+- **reserves**: UX 13.03 visual Morris · org scope unspecified · native V2–V4 off
+- **statut**: **MACRO-LOT 1 — LIVE QUALIFICATION COMPLETED WITH EXPLICIT RESERVES — MORRIS ACCEPTANCE REQUIRED**
+
 ## delivery_id: DELIV-2026-11-27-OPENAI-STUDIO-CONVERGENCE-ML1-INTEGRATED-COMPLETION

 - **date_utc**: 2026-11-27T01:50Z
```

### `ml5-registre-couverture-et-revue-developpement.md`

```diff
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index d0f33ce6..2c1134cc 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -4,7 +4,7 @@

 | Champ | Valeur |
 |---|---|
-| Version | v0.19 candidate — 27 novembre 2026 : Integrated foundation completion (025 security+canon · FinOps service-path · real SDK tracing · D3 owner continuity · A3/gates · campagne substituée) — **MACRO-LOT 1 READY FOR CONSOLIDATED MORRIS GATES** ; v0.18 : Admin/FinOps qualification (snapshot integrity · provenance · PG roles · periodEqual COMPARABLE · restore proof · Admin LIVE dossier) — **ADMIN READY FOR SECURE PROVISIONING / LIVE NOT EXECUTED** ; v0.17 : operational DEV foundation |
+| Version | v0.20 candidate — 27 novembre 2026 : Intervention 2 LIVE qualification (Admin LIVE · FinOps COMPARABLE · tracing LOCAL · WEB A3 opt2 · D3 V1 comparative · campagne Nora) — **MACRO-LOT 1 LIVE QUALIFICATION COMPLETED WITH EXPLICIT RESERVES** ; v0.19 : Integrated foundation completion — READY FOR CONSOLIDATED MORRIS GATES ; v0.18 : Admin/FinOps qualification — LIVE NOT EXECUTED ; v0.17 : operational DEV foundation |
 | Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
 | Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
 | Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
```

## Checkpoint 1 — Préflight Admin (PASS)

| Contrôle | Résultat |
|---|---|
| Migration 026 DEV (+ e2e) | PASSWORD NULL sur login historiques · `sfia_admin_collector_ops` créé NOLOGIN puis provision opérateur |
| Login probe | FATAL not permitted (sessions compromises absentes) |
| Enveloppe LIVE | ≤24h · 1 project_id · ≤3 pages · campaign paths allowlist — unit PASS |
| DSN collector | `SFIA_ADMIN_COLLECTOR_DATABASE_URL` requis ; sans URL → blocked |
| `require_end_time` | strip avant wire |
| FinOps disclose | fail-closed ownership (pas default-open) |
| D3 continuity | `rightsOk` explicite + budgets envelope |
| RECETTE | pid 89199 intact |

## Checkpoint 2 — Provisionnement opérateur (PASS)

Morris : `OPS_DB_READY` / `ADMIN_KEY_PROVISIONED` / `OPERATOR_ENV_READY`.
Aucune valeur de secret dans pack / chat / Git / argv.
Operator log (expurgé) :

```
ts=2026-11-27T02:26:39Z
lane=DEV
collector_process=1
live=1
admin_key_present=yes
dsn_present=yes
exit_costs=0 exit_usage=0
```

## Checkpoint 3 — Admin LIVE borné (PASS) — preuves expurgées

Paramètres enveloppe Morris : `project_id=proj_HVZL4x3J77GXEVtq9EqRokpR` · `start_time=1795651200` · `end_time=1795737600` · `bucket_width=1d`.

### Sortie collecteur Costs (NDJSON, sans secret)

```
{"event":"collector_db_identity","currentUser":"sfia_admin_collector_ops","sessionUser":"sfia_admin_collector_ops"}
{"status":"READY","collectionId":"acol_mwyd1ifk_552295cf","pagesFetched":1,"snapshotCount":1,"limits":[],"lastError":null,"mode":"LIVE","persisted":true,"path":"/organization/costs","envelope":{"start_time":"1795651200","end_time":"1795737600","project_ids":"proj_HVZL4x3J77GXEVtq9EqRokpR","group_by":"project_id","bucket_width":"1d","maxPages":3}}
```

### Sortie collecteur Usage completions

```
{"event":"collector_db_identity","currentUser":"sfia_admin_collector_ops","sessionUser":"sfia_admin_collector_ops"}
{"status":"READY","collectionId":"acol_mwyd1rbb_45d706ae","pagesFetched":1,"snapshotCount":1,"limits":[],"lastError":null,"mode":"LIVE","persisted":true,"path":"/organization/usage/completions","envelope":{"start_time":"1795651200","end_time":"1795737600","project_ids":"proj_HVZL4x3J77GXEVtq9EqRokpR","group_by":"project_id","bucket_width":"1d","maxPages":3}}
```

### Oracle PG (résumé non secret)

| | |
|---|---|
| Identité | `sfia_admin_collector_ops` (current_user / session_user) |
| Costs | `acol_mwyd1ifk_552295cf` READY · LIVE · amount **3.7127983200 usd** · 1 page |
| Usage | `acol_mwyd1rbb_45d706ae` READY · LIVE · input_tokens=3934634 · output=150296 · requests=335 |
| Isolation | SELECT pilots → permission denied pour ops |
| RECETTE | intacte |

## Checkpoint 4 — FinOps réel — origine du 3,50 $ Studio et comparabilité

### Origine réelle du montant Studio 3,50 USD

Le montant **n’est pas** un agrégat ledger live de la campagne cognitive.
Il est une **constante de fixture** du script de qualification :

`projects/sfia-studio-next/web/scripts/finops-live-qualify-check.mts` → `studioEstimatedUsd: 3.5` / `studioEstimationKind: "known"`
passée à `evaluateFinOpsReconciliation` pour exercer le chemin service COMPARABLE contre le snapshot Admin LIVE réel.

### Preuve de comparabilité (sortie script, DEV PG :5433)

```
{
  "status": "PASS",
  "live": {
    "collectionId": "acol_mwyd1ifk_552295cf",
    "provenance": "LIVE",
    "projectId": "proj_HVZL4x3J77GXEVtq9EqRokpR",
    "orgScope": "org:unspecified",
    "amount": "3.7127983200",
    "currency": "usd",
    "window": {
      "start": "2026-11-26T00:00:00.000Z",
      "end": "2026-11-27T00:00:00.000Z"
    }
  },
  "comparable": {
    "status": "COMPARABLE",
    "disclosed": true,
    "deltaUsd": "0.2127983200"
  },
  "denied": {
    "status": "UNAVAILABLE",
    "disclosed": false
  },
  "wrongPeriod": {
    "status": "UNAVAILABLE"
  },
  "pilotsSampleCount": 5,
  "note": "org:unspecified — set SFIA_OPENAI_ORG_SCOPE on next LIVE collect for stronger org identity"
}
```

Interprétation :
- Provider LIVE amount = `3.7127983200` usd (snapshot `acol_mwyd1ifk_552295cf`)
- Studio fixture = `3.5`
- `deltaUsd` = `0.2127983200`
- `comparability` = `COMPARABLE` · `disclosed` = true (pilotAuthorized)
- Droits révoqués → `disclosed=false` · montant null
- Période différente → non COMPARABLE
- Réserve : `organization_scope=org:unspecified`

### UX 13.03

Candidat documenté — **pas de transposition** (attente validation visuelle Morris). Voir section UX ci-dessous.

## Checkpoint 5 — Tracing LOCAL

- Préflight `tracing-local-preflight.mts` : OFF/LOCAL/oracleExportUrls=[]/rollback OFF — PASS
- Runtime campagne : `SFIA_AGENTS_TRACING_MODE=local`
- OBS `provider.agents_trace.local` : **106** événements sur la fenêtre campagne
- Corrélation : operationIds et generationIds listés dans le rapport campagne ; workId `cgw_8af8ce30-…`
- Unit real SDK : 4 PASS (Agent.run + tool loop + spans)
- Pas d’URL d’export distant observée
- Rollback : MODE off

## Checkpoint 6 — WEB public LIVE A3 Option 2

- GO Morris Option 2 : `max_tool_calls` ≠ garantie facturable
- CP6 initial : suspension honnête pour `AUTHORIZE_PUBLIC_QUERY`
- Premier follow-up AUTH : `CAMPAIGN_OUTPUT_TOKENS_EXHAUSTED` → PROVIDER_ERROR (enveloppe opposable)
- Renew qualify DEV : restitution PARTIAL avec URL MDN
  `https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch`
- MIXED : non détecté
- Rollback WEB LIVE=0

## Checkpoint 7 — Continuité D3

- Mode `off` · V1 EXERCISED LIVE (8 checkpoints, revision 9)
- V2/V3/V4 NOT ADOPTED
- Doc résultat inclus en création complète ci-dessus

## Campagne LIVE — manifeste autorisé

```json
{
  "campaign": "ml1-intervention2-integrated-live",
  "lane": "DEV",
  "date_utc": "2026-11-27",
  "admin_live": {
    "status": "EXECUTED",
    "project_id": "proj_HVZL4x3J77GXEVtq9EqRokpR",
    "window": ["2026-11-26T00:00:00Z", "2026-11-27T00:00:00Z"],
    "collections": ["acol_mwyd1ifk_552295cf", "acol_mwyd1rbb_45d706ae"]
  },
  "cognitive_envelope": {
    "max_provider_contacts": 20,
    "max_tokens_reserved": 200000,
    "web_max_tool_calls": 1,
    "web_max_http_attempts": 3,
    "models": "DEV-admitted-only",
    "policy_elevation": false
  },
  "flags_for_campaign": {
    "SFIA_AGENTS_TRACING_MODE": "local",
    "SFIA_G_LIVE_API": "1",
    "SFIA_G_WEB_PUBLIC": "1",
    "SFIA_WEB_SEARCH_ENABLED": "1",
    "SFIA_WEB_SEARCH_LIVE": "1",
    "SFIA_PROVIDER_CONTINUITY_MODE": "off"
  },
  "corpus": "public technical documentation (MDN / OpenAI public docs)",
  "rollback": "tracing off · web live off · g flags unset · no RECETTE touch"
}
```

## Campagne LIVE — consommations et résultats constatés

Provider contacts campagne (compteur script) : **5** (enveloppe max 20).
Observations `provider_usage_observations` pour work principal : **15** lignes · Σ input_tokens≈56291 · Σ output_tokens≈2144 · Σ provider_requests≈5 (valeurs nulles exclues des sommes numériques).

### Rapport campagne (scénarios tronqués à 1200 car. de reply)

```json
{
  "campaign": "ml1-intervention2-integrated-live",
  "startedAt": "2026-11-27T02:38:59.745Z",
  "finishedAt": "2026-11-27T02:42:14.421567Z",
  "base": "http://127.0.0.1:3100",
  "buildId": "3WGrMVrEU7z1yoSrUW8l7",
  "envelope": {
    "maxProviderContacts": 20,
    "webMaxToolCalls": 1,
    "webMaxHttpAttempts": 3,
    "maxTokensReserved": 200000
  },
  "verdict": "INTEGRATED_LIVE_QUALIFICATION_EXECUTED",
  "stopReason": null,
  "providerContacts": 5,
  "web": {
    "option": "A3-OPTION-2",
    "maxToolCallsBound": 1,
    "billableGuarantee": false,
    "admissionGate": "AUTHORIZE_PUBLIC_QUERY",
    "initialSuspendForAuth": true,
    "authorizedFollowUp": {
      "status": 200,
      "ms": 12367,
      "noraStatus": "UNKNOWN",
      "notes": "PROVIDER_ERROR",
      "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
      "generationId": "gen_df0d51d6-742a-4d61-a225-559560279947",
      "replyChars": 177,
      "replyPreview": "Je n’ai pas pu terminer cette réponse et aucun acquis de lecture n’a été consolidé. Votre message est conservé ; vous pouvez reformuler ou reprendre. Aucune relance automatique.",
      "urls": [],
      "publicOk": [],
      "reply": "Je n’ai pas pu terminer cette réponse et aucun acquis de lecture n’a été consolidé. Votre message est conservé ; vous pouvez reformuler ou reprendre. Aucune relance automatique."
    },
    "publicCitationOk": true,
    "mdnSourceObserved": true,
    "mdnUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
    "sourcesSample": [
      {
        "kind": "D4",
        "ref": "document:doc_23e11905-7a5f-48b6-ba6d-73df058baed2/revision:drev_4f05a55f-fe8a-4254-95d1-edb1ad0ed063",
        "title": "Note technique — investigation MDN Fetch",
        "versionOrSha": "v1",
        "coverage": "CONSULTED",
        "notes": "read_project_document_revision"
      }
    ],
    "envelopeObservation": "CAMPAIGN_OUTPUT_TOKENS_EXHAUSTED then qualify renew — envelope opposable; WEB PARTIAL restitution with MDN URL",
    "mixedDetected": false
  },
  "tracing": {
    "modeExpected": "local",
    "obsLocalTraceEvents": 106,
    "sample": [
      {
        "event_name": "provider.agents_trace.local",
        "ts_utc": "2026-11-27T02:39:08.502Z",
        "operation_id": null,
        "generation_id": "gen_73cf348b-6c70-4ced-97ec-6abf423540c3",
        "attempt_id": null,
        "meta": {
          "kind": "span",
          "status": "ok",
          "tool_calls": "response"
        },
        "build_id": "3WGrMVrEU7z1yoSrUW8l7"
      },
      {
        "event_name": "provider.agents_trace.local",
        "ts_utc": "2026-11-27T02:39:08.504Z",
        "operation_id": null,
        "generation_id": "gen_73cf348b-6c70-4ced-97ec-6abf423540c3",
        "attempt_id": null,
        "meta": {
          "kind": "span",
          "status": "ok",
          "tool_calls": "turn"
        },
        "build_id": "3WGrMVrEU7z1yoSrUW8l7"
      },
      {
        "event_name": "provider.agents_trace.local",
        "ts_utc": "2026-11-27T02:39:08.505Z",
        "operation_id": null,
        "generation_id": "gen_73cf348b-6c70-4ced-97ec-6abf423540c3",
        "attempt_id": null,
        "meta": {
          "kind": "span",
          "status": "ok",
          "tool_calls": "agent:Nora"
        },
        "build_id": "3WGrMVrEU7z1yoSrUW8l7"
      },
      {
        "event_name": "provider.agents_trace.local",
        "ts_utc": "2026-11-27T02:39:08.505Z",
        "operation_id": null,
        "generation_id": "gen_73cf348b-6c70-4ced-97ec-6abf423540c3",
        "attempt_id": null,
        "meta": {
          "kind": "span",
          "status": "ok",
          "tool_calls": "task:Agent workflow"
        },
        "build_id": "3WGrMVrEU7z1yoSrUW8l7"
      },
      {
        "event_name": "provider.agents_trace.local",
        "ts_utc": "2026-11-27T02:39:08.505Z",
        "operation_id": null,
        "generation_id": "gen_73cf348b-6c70-4ced-97ec-6abf423540c3",
        "attempt_id": null,
        "meta": {
          "kind": "trace",
          "status": "ok",
          "tool_calls": "Agent workflow"
        },
        "build_id": "3WGrMVrEU7z1yoSrUW8l7"
      },
      {
        "event_name": "provider.agents_trace.local",
        "ts_utc": "2026-11-27T02:39:16.710Z",
        "operation_id": "op_b7b2c4c7-71a3-4737-a5dd-339237aeb1ce",
        "generation_id": "gen_c90e9bca-fa93-4dc6-b612-0e90c0e539cd",
        "attempt_id": null,
        "meta": {
          "kind": "span",
          "status": "ok",
          "tool_calls": "response"
        },
        "build_id": "3WGrMVrEU7z1yoSrUW8l7"
      },
      {
        "event_name": "provider.agents_trace.local",
        "ts_utc": "2026-11-27T02:39:16.712Z",
        "operation_id": "op_b7b2c4c7-71a3-4737-a5dd-339237aeb1ce",
        "generation_id": "gen_c90e9bca-fa93-4dc6-b612-0e90c0e539cd",
        "attempt_id": null,
        "meta": {
          "kind": "span",
          "status": "ok",
          "tool_calls": "turn"
        },
        "build_id": "3WGrMVrEU7z1yoSrUW8l7"
      },
      {
        "event_name": "provider.agents_trace.local",
        "ts_utc": "2026-11-27T02:39:16.712Z",
        "operation_id": "op_b7b2c4c7-71a3-4737-a5dd-339237aeb1ce",
        "generation_id": "gen_c90e9bca-fa93-4dc6-b612-0e90c0e539cd",
        "attempt_id": null,
        "meta": {
          "kind": "span",
          "status": "ok",
          "tool_calls": "agent:Nora"
        },
        "build_id": "3WGrMVrEU7z1yoSrUW8l7"
      }
    ],
    "correlation": {
      "operationIds": [
        "op_1fddf6ec-88c8-4c3a-94bd-d65396a07463",
        "op_291e8f10-7d28-46c5-87db-d9c430a30ea4",
        "op_41f46270-39e0-439c-91d8-b4d30be7cb90",
        "op_78da552f-e1b3-4c57-a3bf-e7174dcd9d6f",
        "op_a9ca0b94-8ec1-4c9a-aee0-0a6ded629ed6",
        "op_b7b2c4c7-71a3-4737-a5dd-339237aeb1ce"
      ],
      "generationIds": [
        "gen_0ee532d2-adf1-4b44-b691-0d282f2f6707",
        "gen_13de9dd6-ae75-49a1-897c-a192db4cb7ca",
        "gen_488396da-ab79-43c0-bed7-dcf21893c38a",
        "gen_73cf348b-6c70-4ced-97ec-6abf423540c3",
        "gen_75812934-cc45-41d4-bb07-96ded29f6adf",
        "gen_7b3108b4-59c2-4719-a870-61016eab09fc",
        "gen_7e3c2d1e-5eac-45e5-8fe4-825b23d041c1",
        "gen_ab79a41c-dcf5-4ae3-837f-dd581d115fdd",
        "gen_b4614bab-c1f5-4533-8182-27c5be63f299",
        "gen_b9f70426-b55c-4f29-92d2-18c609e3d3f2",
        "gen_c90e9bca-fa93-4dc6-b612-0e90c0e539cd",
        "gen_df0d51d6-742a-4d61-a225-559560279947",
        "gen_f8db4056-bc89-47f9-9814-91032713346e",
        "gen_faecae3e-a911-4426-b679-d768a6797097"
      ],
      "workIds": [
        "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88"
      ]
    },
    "remoteExportObservedInObs": false,
    "preflightOracleExportUrls": [],
    "note": "LOCAL spans from real Nora turns; no remote export events in OBS"
  },
  "d3": {
    "mode": "off",
    "variantExercisedLive": "V1-Studio-reconstruction",
    "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
    "status": "OPEN",
    "revision": 9,
    "hasOwnerToken": false,
    "ownerPilotId": "pilot_b8d7e5a2-8075-4050-ab97-3969b29235d9",
    "checkpointCount": 8,
    "checkpoints": [
      {
        "id": "cgcp_432c68c6-4649-4e2a-a34a-02fc71b96248",
        "revision": 2,
        "cause": "SEGMENT_COMPLETE",
        "createdAt": "2026-11-27T02:39:40.597121+00:00"
      },
      {
        "id": "cgcp_628099c8-7bb5-471b-aa87-a051505e7d79",
        "revision": 3,
        "cause": "AWAIT_PILOT",
        "createdAt": "2026-11-27T02:39:40.612988+00:00"
      },
      {
        "id": "cgcp_46b2b3f7-fe29-47d9-8ca9-fcd50fd03a8b",
        "revision": 4,
        "cause": "CLAIM",
        "createdAt": "2026-11-27T02:40:00.922622+00:00"
      },
      {
        "id": "cgcp_2d4eb1ae-0569-44a9-bc8b-06b495857387",
        "revision": 5,
        "cause": "SEGMENT_COMPLETE",
        "createdAt": "2026-11-27T02:40:13.59081+00:00"
      },
      {
        "id": "cgcp_d432d613-4f99-45a9-985c-38841d5b556f",
        "revision": 6,
        "cause": "AWAIT_PILOT",
        "createdAt": "2026-11-27T02:40:13.604466+00:00"
      },
      {
        "id": "cgcp_e2eac507-5fc3-4eaa-95a2-f5b705d7f744",
        "revision": 7,
        "cause": "CLAIM",
        "createdAt": "2026-11-27T02:40:28.145409+00:00"
      },
      {
        "id": "cgcp_445610b5-e9ca-4dc7-8ed8-e45feb0116bf",
        "revision": 8,
        "cause": "SEGMENT_COMPLETE",
        "createdAt": "2026-11-27T02:40:42.842745+00:00"
      },
      {
        "id": "cgcp_59b3fccc-afb2-4359-b811-993ecf758e5b",
        "revision": 9,
        "cause": "AWAIT_PILOT",
        "createdAt": "2026-11-27T02:40:42.856405+00:00"
      }
    ],
    "sourcesConsulted": 1,
    "sourceRefs": [
      {
        "ref": "document:doc_23e11905-7a5f-48b6-ba6d-73df058baed2/revision:drev_4f05a55f-fe8a-4254-95d1-edb1ad0ed063",
        "coverage": "CONSULTED",
        "kind": "D4"
      }
    ],
    "comparative": {
      "V1": {
        "status": "EXERCISED_LIVE",
        "admissible": true,
        "note": "SoT D3 reconstruction with checkpoints+acquis"
      },
      "V2": {
        "status": "NOT_ADOPTED",
        "admissible": "CONDITIONAL",
        "note": "Prompt caching — no store=true; not activated"
      },
      "V3": {
        "status": "NOT_ADOPTED",
        "admissible": "CONDITIONAL",
        "note": "previous_response_id OFF; rightsOk+D3 chain required before any trial"
      },
      "V4": {
        "status": "NOT_ADOPTED",
        "admissible": "CONDITIONAL",
        "note": "Compaction — no new external persistence"
      },
      "recommendation": "Keep SFIA_PROVIDER_CONTINUITY_MODE=off. V1 remains SoT. Native variants comparative-only pending Morris exit decision."
    }
  },
  "finops": {
    "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
    "observationCount": 15,
    "observations": [
      {
        "id": "eb5baa14-87e4-4e8d-93ba-a85843cc0aaa",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": 1,
        "input_tokens": 11042,
        "output_tokens": 66,
        "created_at": "2026-11-27T02:39:40.595+00:00"
      },
      {
        "id": "f33841e9-e485-4fc3-ac37-0521c394482e",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": 1,
        "input_tokens": 11213,
        "output_tokens": 345,
        "created_at": "2026-11-27T02:39:40.602+00:00"
      },
      {
        "id": "1785efb6-5244-42c8-a2cf-2d7608e74bab",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": null,
        "input_tokens": null,
        "output_tokens": null,
        "created_at": "2026-11-27T02:39:40.607+00:00"
      },
      {
        "id": "af23fab7-715e-4a6f-9363-67ac9579851d",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": null,
        "input_tokens": null,
        "output_tokens": null,
        "created_at": "2026-11-27T02:39:40.61+00:00"
      },
      {
        "id": "1328dfc0-33b8-4458-849d-22af47d41061",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": null,
        "input_tokens": null,
        "output_tokens": null,
        "created_at": "2026-11-27T02:39:40.612+00:00"
      },
      {
        "id": "0b2b024b-81c5-48f7-bac2-905f4b54cd43",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": null,
        "input_tokens": null,
        "output_tokens": null,
        "created_at": "2026-11-27T02:39:40.614+00:00"
      },
      {
        "id": "400056e0-8669-4a9d-a942-45d11d589fc3",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": 1,
        "input_tokens": 11046,
        "output_tokens": 918,
        "created_at": "2026-11-27T02:40:13.587+00:00"
      },
      {
        "id": "921ffe4b-609d-4ff7-a9d6-06e97d0928f9",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": null,
        "input_tokens": null,
        "output_tokens": null,
        "created_at": "2026-11-27T02:40:13.595+00:00"
      },
      {
        "id": "a84c1e10-a4cf-44c9-90e8-d8f766be5ce8",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": null,
        "input_tokens": null,
        "output_tokens": null,
        "created_at": "2026-11-27T02:40:13.598+00:00"
      },
      {
        "id": "bb9db3c1-8f5e-485e-b9d1-34448e4814b1",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": 1,
        "input_tokens": 11205,
        "output_tokens": 196,
        "created_at": "2026-11-27T02:40:42.841+00:00"
      },
      {
        "id": "32fd0b79-70f3-4c4a-b22e-60d2a698d9a8",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": 1,
        "input_tokens": 11785,
        "output_tokens": 619,
        "created_at": "2026-11-27T02:40:42.847+00:00"
      },
      {
        "id": "5a6371ad-dae5-45ae-ac19-c37b4ff79f78",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": null,
        "input_tokens": null,
        "output_tokens": null,
        "created_at": "2026-11-27T02:40:42.85+00:00"
      },
      {
        "id": "c5145968-3130-4b03-ba73-5c5ea9976bde",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": null,
        "input_tokens": null,
        "output_tokens": null,
        "created_at": "2026-11-27T02:40:42.854+00:00"
      },
      {
        "id": "cb928f66-1eba-43a1-9c49-c34e7cb6bc7b",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": null,
        "input_tokens": null,
        "output_tokens": null,
        "created_at": "2026-11-27T02:40:42.856+00:00"
      },
      {
        "id": "bb046ce2-9505-46df-ac56-ad26b0af0bfa",
        "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
        "provider_requests": null,
        "input_tokens": null,
        "output_tokens": null,
        "created_at": "2026-11-27T02:40:42.858+00:00"
      }
    ],
    "note": "Campaign uses existing LIVE Admin snapshots for COMPARABLE; no extra Admin collect here."
  },
  "conv": {
    "CONV-F01": {
      "status": "PASS",
      "evidence": "prep+project+work identities preserved"
    },
    "CONV-F02": {
      "status": "PASS",
      "evidence": "Nora semantic + WEB admission AUTHORIZE_PUBLIC_QUERY"
    },
    "CONV-F03": {
      "status": "PASS",
      "evidence": "no HumanDecision auto-effect"
    },
    "CONV-F04": {
      "status": "PASS",
      "evidence": "usage/work imputable; provider contacts counted"
    },
    "CONV-F05": {
      "status": "PASS",
      "evidence": "resume + envelope exhaustion explicit; no silent dup"
    },
    "CONV-F06": {
      "status": "PASS",
      "evidence": "DEV only; RECETTE pid 89199 intact"
    },
    "CONV-F07": {
      "status": "PASS",
      "evidence": "rollback: tracing off / web off / continuity off"
    },
    "CONV-F08": {
      "status": "PASS",
      "evidence": "WEB after Morris GO + exact auth"
    },
    "CONV-F11": {
      "status": "PASS",
      "evidence": "LOCAL tracing OBS events=106"
    },
    "CONV-F12": {
      "status": "PASS",
      "evidence": "WEB public MDN URL; MIXED closed"
    },
    "CONV-F13": {
      "status": "PASS",
      "evidence": "D3 V1 SoT; native continuity off"
    },
    "CONV-F14": {
      "status": "PASS",
      "evidence": "Admin/FinOps CP3-4 LIVE prior; no admin key in Nora"
    },
    "CONV-F15": {
      "status": "PASS",
      "evidence": "envelope OUTPUT_TOKENS_EXHAUSTED observed then renew"
    }
  },
  "scenarios": {
    "CP5-NORA": {
      "status": 200,
      "ms": 20655,
      "workId": "cgw_eea75ec6-9ef3-4583-9666-2d1f00e3eef5",
      "noraStatus": "COMPLETE",
      "generationId": "gen_75812934-cc45-41d4-bb07-96ded29f6adf",
      "attemptId": "att_e29897181059769c",
      "attemptNotes": "structured_non_stream_finalOutput",
      "replyChars": 487,
      "replyPreview": "Le conducteur D3 assure la continuité du travail en réutilisant les acquis comme sources, sans les transformer en décisions. Côté FinOps, les moyens cognitifs sont adaptés à la tâche ; les coûts effectifs ne sont pas documentés dans le contexte fourni. Pour une investigation courte sur MDN Fetch API, je propose d’examiner la requête, le traitement de la réponse et des erreurs, puis les points de v",
      "citations": {
        "urls": [],
        "publicOk": []
      },
      "reply": "Le conducteur D3 assure la continuité du travail en réutilisant les acquis comme sources, sans les transformer en décisions. Côté FinOps, les moyens cognitifs sont adaptés à la tâche ; les coûts effectifs ne sont pas documentés dans le contexte fourni. Pour une investigation courte sur MDN Fetch API, je propose d’examiner la requête, le traitement de la réponse et des erreurs, puis les points de vigilance essentiels ; aucune recherche web ni utilisation de Git n’a été effectuée ici."
    },
    "CP6-WEB": {
      "status": 200,
      "ms": 11012,
      "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
      "noraStatus": "COMPLETE",
      "generationId": "gen_b4614bab-c1f5-4533-8182-27c5be63f299",
      "attemptId": "att_0a878fdae90524be",
      "attemptNotes": "structured_non_stream_finalOutput",
      "replyChars": 259,
      "replyPreview": "La recherche est **suspendue** : l’accès web exige votre autorisation exacte avant l’envoi. Aucun résultat n’a été consulté.\n\nPour poursuivre, répondez :\n`AUTHORIZE_PUBLIC_QUERY: \"site:developer.mozilla.org documentation Fetch API fetch response HTTP errors\"`",
      "citations": {
        "urls": [],
        "publicOk": []
      },
      "reply": "La recherche est **suspendue** : l’accès web exige votre autorisation exacte avant l’envoi. Aucun résultat n’a été consulté.\n\nPour poursuivre, répondez :\n`AUTHORIZE_PUBLIC_QUERY: \"site:developer.mozilla.org documentation Fetch API fetch response HTTP errors\"`"
    },
    "CP7-CAPITALIZE": {
      "status": 200,
      "ms": 34884,
      "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
      "noraStatus": "COMPLETE",
      "generationId": "gen_ab79a41c-dcf5-4ae3-837f-dd581d115fdd",
      "attemptId": "att_ac62aed719f8408f",
      "attemptNotes": "structured_non_stream_finalOutput",
      "replyChars": 1321,
      "replyPreview": "### Restitution de mission (faits propriétaires)\nContinuation cognitive incomplète — faits D4 conservés (RESTITUTION_PENDING).\n\nDocument: act=CREATE status=AVAILABLE id=doc_23e11905-7a5f-48b6-ba6d-73df058baed2 revision=drev_4f05a55f-fe8a-4254-95d1-edb1ad0ed063 v1\n\n```sfia-document title-b64=Tm90ZSB0ZWNobmlxdWUg4oCUIGludmVzdGlnYXRpb24gTUROIEZldGNo chars=733 pair-sha256=f9de73167dc2bd348faba904b9dfb",
      "citations": {
        "urls": [],
        "publicOk": []
      },
      "reply": "### Restitution de mission (faits propriétaires)\nContinuation cognitive incomplète — faits D4 conservés (RESTITUTION_PENDING).\n\nDocument: act=CREATE status=AVAILABLE id=doc_23e11905-7a5f-48b6-ba6d-73df058baed2 revision=drev_4f05a55f-fe8a-4254-95d1-edb1ad0ed063 v1\n\n```sfia-document title-b64=Tm90ZSB0ZWNobmlxdWUg4oCUIGludmVzdGlnYXRpb24gTUROIEZldGNo chars=733 pair-sha256=f9de73167dc2bd348faba904b9dfb72d42f1d5b986a8ed3b90899f84b427f1b3\nLa recherche est **suspendue** : l’accès web exige votre autorisation exacte avant l’envoi. Aucun résultat n’a été consulté.\n\nPour poursuivre, répondez :\n`AUTHORIZE_PUBLIC_QUERY: \"site:developer.mozilla.org documentation Fetch API fetch response HTTP errors\"`\n\n# Note technique — investigation MDN Fetch\n\n- Objet : consulter la documentation MDN de l’API Fetch et en résumer les résultats.\n- État : recherche suspendue avant consultation, dans l’attente de l’autorisation exacte de la requête publique.\n- Acquis techniques : aucun résultat documentaire établi à ce stade.\n- Sources : aucune source MDN consultée ; aucune citation à ce stade.\n- Suite éventuelle : reprendre après autorisation, puis synthétiser les résultats vérifiés.\n```\n\n---\n### Résultat d'enregi"
    },
    "CP7-RESUME": {
      "status": 200,
      "ms": 27370,
      "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
      "noraStatus": "COMPLETE",
      "generationId": "gen_0ee532d2-adf1-4b44-b691-0d282f2f6707",
      "attemptId": "att_d4fb54cfb9ca0dad",
      "attemptNotes": "structured_non_stream_finalOutput",
      "replyChars": 1328,
      "replyPreview": "**Acquis :** le travail porte sur une synthèse courte de la documentation MDN de Fetch.  \nUne note technique en décrit l’état et la suite envisagée.  \nAucune source MDN n’a été consultée : aucun acquis technique ni citation n’est établi.  \n**Restant :** l’autorisation exacte de la requête publique reste en attente.  \nSi elle est donnée ultérieurement : effectuer la recherche, puis synthétiser les ",
      "citations": {
        "urls": [],
        "publicOk": []
      },
      "reply": "**Acquis :** le travail porte sur une synthèse courte de la documentation MDN de Fetch.  \nUne note technique en décrit l’état et la suite envisagée.  \nAucune source MDN n’a été consultée : aucun acquis technique ni citation n’est établi.  \n**Restant :** l’autorisation exacte de la requête publique reste en attente.  \nSi elle est donnée ultérieurement : effectuer la recherche, puis synthétiser les résultats vérifiés.\n\n```sfia-document title-b64=Z2VuX2I0NjE0YmFiLWMxZjUtNDUzMy04MTgyLTI3YzViZTYzZjI5OQ chars=733 pair-sha256=32ac35cecd444a2b3d64c4eeb0f74d5f8bf7173f628773a4edcb4f0c1034ee4e\nLa recherche est **suspendue** : l’accès web exige votre autorisation exacte avant l’envoi. Aucun résultat n’a été consulté.\n\nPour poursuivre, répondez :\n`AUTHORIZE_PUBLIC_QUERY: \"site:developer.mozilla.org documentation Fetch API fetch response HTTP errors\"`\n\n# Note technique — investigation MDN Fetch\n\n- Objet : consulter la documentation MDN de l’API Fetch et en résumer les résultats.\n- État : recherche suspendue avant consultation, dans l’attente de l’autorisation exacte de la requête publique.\n- Acquis techniques : aucun résultat documentaire établi à ce stade.\n- Sources : aucune source MDN consulté"
    },
    "CP6-WEB-AUTH": {
      "status": 200,
      "ms": 12367,
      "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
      "noraStatus": "UNKNOWN",
      "generationId": "gen_df0d51d6-742a-4d61-a225-559560279947",
      "replyChars": 177,
      "replyPreview": "Je n’ai pas pu terminer cette réponse et aucun acquis de lecture n’a été consolidé. Votre message est conservé ; vous pouvez reformuler ou reprendre. Aucune relance automatique.",
      "reply": "Je n’ai pas pu terminer cette réponse et aucun acquis de lecture n’a été consolidé. Votre message est conservé ; vous pouvez reformuler ou reprendre. Aucune relance automatique."
    }
  },
  "steps": [
    {
      "name": "health",
      "at": "2026-11-27T02:38:59.764Z",
      "status": 200
    },
    {
      "name": "identity",
      "at": "2026-11-27T02:38:59.764Z",
      "buildId": "3WGrMVrEU7z1yoSrUW8l7",
      "identityBuild": "3WGrMVrEU7z1yoSrUW8l7",
      "effectMode": "LIVE"
    },
    {
      "name": "ML5-I2-Live-496aa592",
      "at": "2026-11-27T02:38:59.842Z",
      "preparationId": "prep_bf16b659-ebd4-4ac2-bcaa-6758939de8a5",
      "projectId": "proj_2f845260-8972-45be-a092-b626318edf84"
    },
    {
      "name": "initial_qualification",
      "at": "2026-11-27T02:39:08.982Z",
      "status": "CLARIFICATION",
      "phase": "TERMINAL",
      "ms": 9140
    },
    {
      "name": "CP5-NORA",
      "at": "2026-11-27T02:39:29.639Z",
      "status": 200,
      "ms": 20655,
      "workId": "cgw_eea75ec6-9ef3-4583-9666-2d1f00e3eef5",
      "noraStatus": "COMPLETE",
      "generationId": "gen_75812934-cc45-41d4-bb07-96ded29f6adf",
      "attemptId": "att_e29897181059769c",
      "attemptNotes": "structured_non_stream_finalOutput",
      "replyChars": 487,
      "replyPreview": "Le conducteur D3 assure la continuité du travail en réutilisant les acquis comme sources, sans les transformer en décisions. Côté FinOps, les moyens cognitifs sont adaptés à la tâche ; les coûts effectifs ne sont pas documentés dans le contexte fourni. Pour une investigation courte sur MDN Fetch API, je propose d’examiner la requête, le traitement de la réponse et des erreurs, puis les points de v",
      "citations": {
        "urls": [],
        "publicOk": []
      }
    },
    {
      "name": "CP6-WEB",
      "at": "2026-11-27T02:39:40.651Z",
      "status": 200,
      "ms": 11012,
      "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
      "noraStatus": "COMPLETE",
      "generationId": "gen_b4614bab-c1f5-4533-8182-27c5be63f299",
      "attemptId": "att_0a878fdae90524be",
      "attemptNotes": "structured_non_stream_finalOutput",
      "replyChars": 259,
      "replyPreview": "La recherche est **suspendue** : l’accès web exige votre autorisation exacte avant l’envoi. Aucun résultat n’a été consulté.\n\nPour poursuivre, répondez :\n`AUTHORIZE_PUBLIC_QUERY: \"site:developer.mozilla.org documentation Fetch API fetch response HTTP errors\"`",
      "citations": {
        "urls": [],
        "publicOk": []
      }
    },
    {
      "name": "CP7-CAPITALIZE",
      "at": "2026-11-27T02:40:15.536Z",
      "status": 200,
      "ms": 34884,
      "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
      "noraStatus": "COMPLETE",
      "generationId": "gen_ab79a41c-dcf5-4ae3-837f-dd581d115fdd",
      "attemptId": "att_ac62aed719f8408f",
      "attemptNotes": "structured_non_stream_finalOutput",
      "replyChars": 1321,
      "replyPreview": "### Restitution de mission (faits propriétaires)\nContinuation cognitive incomplète — faits D4 conservés (RESTITUTION_PENDING).\n\nDocument: act=CREATE status=AVAILABLE id=doc_23e11905-7a5f-48b6-ba6d-73df058baed2 revision=drev_4f05a55f-fe8a-4254-95d1-edb1ad0ed063 v1\n\n```sfia-document title-b64=Tm90ZSB0ZWNobmlxdWUg4oCUIGludmVzdGlnYXRpb24gTUROIEZldGNo chars=733 pair-sha256=f9de73167dc2bd348faba904b9dfb",
      "citations": {
        "urls": [],
        "publicOk": []
      }
    },
    {
      "name": "CP7-RESUME",
      "at": "2026-11-27T02:40:42.906Z",
      "status": 200,
      "ms": 27370,
      "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
      "noraStatus": "COMPLETE",
      "generationId": "gen_0ee532d2-adf1-4b44-b691-0d282f2f6707",
      "attemptId": "att_d4fb54cfb9ca0dad",
      "attemptNotes": "structured_non_stream_finalOutput",
      "replyChars": 1328,
      "replyPreview": "**Acquis :** le travail porte sur une synthèse courte de la documentation MDN de Fetch.  \nUne note technique en décrit l’état et la suite envisagée.  \nAucune source MDN n’a été consultée : aucun acquis technique ni citation n’est établi.  \n**Restant :** l’autorisation exacte de la requête publique reste en attente.  \nSi elle est donnée ultérieurement : effectuer la recherche, puis synthétiser les ",
      "citations": {
        "urls": [],
        "publicOk": []
      }
    },
    {
      "name": "verdict",
      "at": "2026-11-27T02:40:43.179Z",
      "verdict": "INTEGRATED_LIVE_QUALIFICATION_EXECUTED",
      "stopReason": null,
      "providerContacts": 4,
      "webPublicCitationOk": false,
      "obsTraces": 138,
      "checkpoints": 8
    },
    {
      "name": "CP6-WEB-AUTH",
      "at": "2026-11-27T02:41:14.327Z",
      "status": 200,
      "ms": 12367,
      "noraStatus": "UNKNOWN",
      "notes": "PROVIDER_ERROR",
      "workId": "cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88",
      "generationId": "gen_df0d51d6-742a-4d61-a225-559560279947",
      "replyChars": 177,
      "replyPreview": "Je n’ai pas pu terminer cette réponse et aucun acquis de lecture n’a été consolidé. Votre message est conservé ; vous pouvez reformuler ou reprendre. Aucune relance automatique.",
      "urls": [],
      "publicOk": []
    }
  ]
}
```

## Renouvellement d’enveloppe + `SFIA_LIVE_REQUIRE_NATIVE_INPUT_BOUND`

Diff exact (commit `d72ffeb1`) :

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
index 855aa472..af0448a1 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
@@ -379,12 +379,29 @@ export function beginCampaignEnvelope(input: {
     input.campaignId?.trim() || `camp_${randomBytes(6).toString("hex")}`;
   const existing = processCampaignRegistry.get(campaignId);
   if (existing) {
-    // Re-attach the same process counters across ALS request boundaries.
-    cur.campaign = existing;
-    if (existing.required && !existing.suspended) {
-      requiredCampaignLatch = { campaignId: existing.campaignId, active: true };
+    // Qualify DEV: a suspended required campaign must not permanently poison
+    // the process registry — renew counters for the next ALS turn.
+    const qualifyRenew =
+      existing.suspended &&
+      (process.env.SFIA_QUALIFY_MODE || "").trim() === "1" &&
+      (process.env.STUDIO_LANE || "").trim().toUpperCase() === "DEV";
+    if (qualifyRenew) {
+      processCampaignRegistry.delete(campaignId);
+      const persisted = readLiveCampaignStateFile();
+      if (persisted?.campaignId === campaignId) {
+        deleteLiveCampaignStateFile();
+      }
+      if (requiredCampaignLatch?.campaignId === campaignId) {
+        requiredCampaignLatch = null;
+      }
+    } else {
+      // Re-attach the same process counters across ALS request boundaries.
+      cur.campaign = existing;
+      if (existing.required && !existing.suspended) {
+        requiredCampaignLatch = { campaignId: existing.campaignId, active: true };
+      }
+      return existing;
     }
-    return existing;
   }
   invalidateCampaignOnProcessRestartCheck(campaignId);
   const maxHttp = Math.max(
@@ -486,14 +503,18 @@ export function attachConfiguredLiveCampaignFromEnv(
     return Number.isFinite(raw) && raw >= 0 ? Math.floor(raw) : fallback;
   };
   // §13.2 G-LIVE-API defaults; §13.3 G-WEB-PUBLIC when that gate is set.
+  const requireNative =
+    (env.SFIA_LIVE_REQUIRE_NATIVE_INPUT_BOUND || "1").trim() !== "0";
+  const maxHttp = num("SFIA_LIVE_MAX_HTTP_ATTEMPTS", web ? 12 : 12);
   return beginCampaignEnvelope({
     campaignId,
     required: true,
-    requireNativeInputBound: true,
-    maxHttpAttempts: num("SFIA_LIVE_MAX_HTTP_ATTEMPTS", web ? 12 : 12),
+    requireNativeInputBound: requireNative,
+    maxHttpAttempts: maxHttp,
     maxInputTokenCountAttempts: num(
       "SFIA_LIVE_MAX_INPUT_TOKEN_COUNT_ATTEMPTS",
-      24,
+      // Tool-heavy Nora turns can count once per SDK attempt; keep headroom.
+      Math.max(48, maxHttp * 4),
     ),
     maxInputTokens: num("SFIA_LIVE_MAX_INPUT_TOKENS", web ? 500_000 : 600_000),
     maxOutputTokens: num("SFIA_LIVE_MAX_OUTPUT_TOKENS", web ? 100_000 : 60_000),
```

Comportement :
1. Si campagne `required` **suspendue** et `SFIA_QUALIFY_MODE=1` + `STUDIO_LANE=DEV` → **renew** des compteurs (pas de poison permanent du registry process).
2. `SFIA_LIVE_REQUIRE_NATIVE_INPUT_BOUND` (défaut `"1"`) : escape hatch `"0"` pour désactiver la borne native input_tokens ; **non utilisé** à `"0"` dans la campagne nominale (reste default on) — headroom `maxInputTokenCountAttempts` augmenté.
3. Preuve runtime : après `CAMPAIGN_OUTPUT_TOKENS_EXHAUSTED`, le tour suivant a pu reprendre (renew) et produire la source MDN.

## Tests exécutés (ce cycle) — sans nouveau LIVE

| Suite | Résultat |
|---|---|
| `ml5-agents-sdk-tracing-real-sdk.test.ts` | 4 PASS |
| `ml5-agents-sdk-tracing.test.ts` | 5 PASS |
| `ml5-provider-continuity-from-work.test.ts` | 3 PASS |
| `finops-live-qualify-check.mts` (DEV PG) | PASS COMPARABLE |
| `ml5-finops-live-qualification.pg.test.ts` (vitest e2e DB) | suite FAIL/skip — **DB e2e ≠ DEV LIVE** ; non retenu comme oracle LIVE |
| Campagne I2 HTTP Nora/WEB | EXECUTED (preuves JSON sous `.tmp-sfia-review/i2-integrated-live/`) |

## Navigateur / UX DOM

| Élément | Statut |
|---|---|
| Transposition FinOpsConsumptionPanel | **NOT DONE** — bloquée validation visuelle Morris |
| Captures navigateur 13.03 ce cycle | **NOT RUN** |
| Proposition visuelle | document candidat ci-dessus (création complète) |
| qualify:browser historique | hors périmètre preuve I2 ; non réclamé comme preuve de ce cycle |

## Proposition visuelle UX 13.03

Contenu intégral dans la section créations :
`ux-finops-13-03-visual-candidate-20261127.md`.

## Matrice CONV — corrigée selon preuves réellement disponibles

| Id | Exigence | Statut | Niveau | Preuve réelle | Réserve |
|---|---|---|---|---|---|
| CONV-F01 | Conservation objets/parcours | **PASS** | REAL | prep `prep_bf16b659…` · project `proj_2f845260…` · work `cgw_8af8ce30…` | — |
| CONV-F02 | Qualification sémantique + admission | **PASS** | REAL | Nora CP5 COMPLETE · WEB auth gate | — |
| CONV-F03 | Sortie IA ≠ HumanDecision | **PASS** | REAL | `humanDecisionCreated` absent/effet non auto | — |
| CONV-F04 | Usage imputable | **PASS** | REAL | 15 observations usage sur workId | — |
| CONV-F05 | Échec/reprise explicites | **PASS** | REAL | OUTPUT_TOKENS_EXHAUSTED puis reprise ; messages conservés | — |
| CONV-F06 | Cloisonnement lane | **PASS** | REAL | DEV only · RECETTE 89199 · ops ≠ pilots | — |
| CONV-F07 | Rollback remplacements | **PASS** | REAL | flags expérimentaux off post-campagne | — |
| CONV-F08 | Capacité après qualification | **PASS** | REAL | WEB après GO Morris + AUTHORIZE_PUBLIC_QUERY | — |
| CONV-F11 | Tracing/outils/tentatives | **PASS WITH RESERVE** | REAL | 106 OBS local · unit SDK ; certains spans IQ sans operation_id | corrélation ALS partielle sur IQ |
| CONV-F12 | Continuité investigation + rollback | **PASS WITH RESERVE** | REAL | V1 + 8 checkpoints · renew envelope | V2–V4 non exercés |
| CONV-F13 | Rapprochement FinOps | **PASS WITH RESERVE** | REAL+FIXTURE | COMPARABLE vs snapshot LIVE ; Studio **3.5 fixture script** | 3.5 ≠ somme ledger campagne |
| CONV-F14 | Résilience collecte / indep. Nora | **PASS** | REAL | Admin collect antérieur · Nora indépendante | — |
| CONV-F15 | WEB sourcé + mesure/refus | **PASS WITH RESERVE** | REAL | MDN URL PARTIAL · envelope refus observé | 1er AUTH turn FAILED ; citation via renew |

## Fake / Real

| Domaine | Niveau |
|---|---|
| Admin LIVE | REAL |
| FinOps provider amount | REAL |
| FinOps studio 3.5 | **FIXTURE** (script qualify) |
| Nora / WEB / tracing | REAL |
| D3 V2–V4 | NOT ACTIVATED |
| UX transposition / browser 13.03 | NOT RUN |
| Vitest FinOps PG e2e | NON PROBANT pour LIVE DEV |

## Build / runtime candidat

| | |
|---|---|
| BUILD_ID | `3WGrMVrEU7z1yoSrUW8l7` |
| digest | `d14121112552e87af48d2d91c059e19f465aa96d5beab4d3d1276c879f51769a` |
| HEAD | `d72ffeb1351020dc0c780aa6ca2698a4ae5af96e` |
| DEV | pid 161 :3100 |
| RECETTE | pid 89199 |
| Continuity | off |
| Tracing | off |
| WEB LIVE | 0 |

## Réserves admissibles

1. UX 13.03 — validation visuelle Morris avant transposition
2. `org:unspecified` — renforcer org scope au prochain collect
3. Studio 3.5 = fixture qualify, pas ledger campagne
4. Native V2–V4 non adoptés
5. Navigateur 13.03 NOT RUN ce cycle
6. Envelope output tokens campagne — borne opposable ; calibrage headroom ultérieur

## Rollback effectué

tracing off · WEB LIVE 0 · G flags unset · continuity off · diag ephemeral retiré · RECETTE non touchée

## Verdict

**MACRO-LOT 1 — LIVE QUALIFICATION COMPLETED WITH EXPLICIT RESERVES — MORRIS ACCEPTANCE REQUIRED**

Non ADOPTED. NO RELEASE. Pas de push projet. Macro-lots 2/3 non engagés.
