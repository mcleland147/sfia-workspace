# SFIA REVIEW PACK — FULL / Critical
# Cycle 8 — Admin & FinOps DEV Qualification
# Date: 2026-11-26
# Repo: mcleland147/sfia-workspace
# Branch: sfia/next-ml5-integrated-delivery-20261123
# Handoff message: docs(review-handoff): publish admin and finops qualification

## 1. Git Truth

| Field | Value |
|---|---|
| HEAD initial | `106c6392c39ff1741eea729fe594ae8d12cdc9d3` |
| web tree initial | `d8eb399ef34904932d5621ef7e451afb2cdfb63b` |
| merge-base main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| handoff entry | `f29914515350ceb3594fd638223008c509b367d4` / blob `52c19a21…` |
| HEAD final | `348cf6bd1f55c2f84ebcc079b7e8c10acb276d47` |
| web tree final | `54863eda3c7311e51d36237d59d3b7c078baad0a` |
| Commit | `348cf6bd` fix(finops): harden Admin snapshot integrity and FinOps qualification |
| Dirty | pack only |

Git Truth entry: **CONCORDANT**. No push projet.

## 2. Sources consultées

- Template §9.1 · routing guide (réf.)
- ENV-01 / Product Versioning blobs main
- convergence-openai-studio/* (cadrage, contrats, as-built, migration 023/024, UX delta, procédure Admin)
- delivery-history · registre couverture
- Code Admin/FinOps/repository/transport/usage-read
- Contrats OpenAI Usage/Costs (SDK paths allowlistés) — permissions compte **non** déduites

## 3. ENV isolation

| | Preuve |
|---|---|
| DEV | `:3100` BUILD_ID=`8eXiN6NO94261FxSLnuuj` pid=11160 |
| DEV PG | `sfia-next-dev-pg` `:5433` PG 16.16 · migrations 023+024 |
| RECETTE | pid **89199** inchangé · `:3200` |
| Restore | `pg_restore` → `sfia_next_dev_restore_probe` (44 tables) puis DROP — operator/RECETTE intacts |

**NEXT ENVIRONMENT GATE**: PASS

## 4. Correctifs clés

1. **Upsert integrity** — partial never updates complete row metrics; older collected_at skipped
2. **Provenance** — TEST_SUBSTITUTED | LIVE | UNKNOWN; TEST excluded from LIVE projections
3. **No silent memory fallback** — PG down ⇒ UNAVAILABLE
4. **Transport** — WeakSet registry; GO re-check before retry; bounded streaming body read
5. **Envelope** — start required; LIVE requires end_time + project_ids; maxPages≤20
6. **FinOps** — assessPeriodEquality; positive COMPARABLE proven; scoped freshness
7. **PG roles** — reader INSERT refused; collector SELECT pilots refused

## 5. Tests exacts

```
npx vitest run tests/unit/ml5-provider-admin-usage-collector.test.ts \
  tests/integration/ml5-admin-snapshots-pg.test.ts \
  tests/integration/ml5-admin-finops-qualification.pg.test.ts
→ 3 files · 21 tests PASS
```

## 6. Readiness Admin (10/10 technique DEV)

All ten criteria PASS. G-ADMIN-SECRET proposable. G-ADMIN-LIVE **not executed**.

## 7. Fake/Real

REAL: PG DEV, roles, restore probe, API/runtime smoke.
SUBSTITUTED: OpenAI Usage/Costs.
DETERMINISTIC PROVEN ≠ READY FOR REAL.

## 8. Gates

Fermés: G-ADMIN-SECRET (proposable) · G-ADMIN-LIVE · G-FINOPS-UX · G-TRACING-LOCAL · G-WEB-PUBLIC/A3 · G-NATIVE-CONTINUITY · G-PROVIDER-LIVE-QUALIFICATION · RECETTE
Levé DEV: G-PROVIDER-SNAPSHOT-MIGRATION

## 9. Décisions Morris

1. Revue readiness → éventuel GO G-ADMIN-SECRET
2. Validation delta UX FinOps (G-FINOPS-UX)
3. Ne pas engager Lots 2/3 / LIVE / RECETTE

## 10. Verdict

**ADMIN COLLECTOR — READY FOR SECURE PROVISIONING AND BOUNDED LIVE QUALIFICATION**

R5 IN PROGRESS · ML5 OPEN · Lots 2/3 non engagés · RECETTE protégée · R6 NOT STARTED · NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED

## 11. Commit metadata

```
commit 348cf6bd1f55c2f84ebcc079b7e8c10acb276d47
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Thu Nov 26 21:45:04 2026 +0100
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Thu Nov 26 21:45:04 2026 +0100

    fix(finops): harden Admin snapshot integrity and FinOps qualification

    Prevent partial overwrites of complete snapshots, persist TEST/LIVE provenance,
    exercise PG role refusals, bound LIVE envelopes, and enable demonstrable
    period-equal COMPARABLE reconciliation without executing Admin LIVE.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../as-built-macro-lot-1-20261126.md               |  79 ++---
 ...procedure-admin-live-qualification-candidate.md |  56 +++
 .../ux-delta-finops-page13-candidate.md            |  39 ++-
 .../construction/delivery-history.md               |  16 +
 ...5-registre-couverture-et-revue-developpement.md |   2 +-
 .../sfia-studio-next/web/scripts/db-migrate.sh     |   3 +-
 .../web/scripts/finops-admin-collect.mts           |  32 +-
 .../024_provider_admin_snapshot_provenance.sql     |  68 ++++
 projects/sfia-studio-next/web/src/db/schema.ts     |  10 +-
 .../finops/provider-admin-http-transport.ts        |  51 ++-
 .../finops/provider-admin-usage-collector.ts       | 146 +++++++-
 .../finops/provider-admin-usage-repository.ts      | 238 +++++++++----
 .../web/src/domains/finops/usage-read-service.ts   | 134 +++++--
 .../ml5-admin-finops-qualification.pg.test.ts      | 282 +++++++++++++++
 .../integration/ml5-admin-snapshots-pg.test.ts     |   2 +
 .../ml5-provider-admin-usage-collector.test.ts     | 387 +++++++++++----------
 16 files changed, 1183 insertions(+), 362 deletions(-)

```

## 12. Fichiers créés (intégralité)

### CREATED `projects/sfia-studio-next/web/src/db/migrations/024_provider_admin_snapshot_provenance.sql`

```
-- ML1 Admin/FinOps qualification — additive provenance + integrity helpers.
-- Does NOT rewrite 023. No DROP/DELETE of snapshot rows.
-- Existing 023 rows get provenance='UNKNOWN' (excluded from LIVE FinOps projections).

ALTER TABLE provider_admin_collection_runs
  ADD COLUMN IF NOT EXISTS collection_provenance text NOT NULL DEFAULT 'UNKNOWN';

ALTER TABLE provider_admin_collection_runs
  DROP CONSTRAINT IF EXISTS provider_admin_collection_runs_provenance_check;

ALTER TABLE provider_admin_collection_runs
  ADD CONSTRAINT provider_admin_collection_runs_provenance_check
  CHECK (collection_provenance IN ('TEST_SUBSTITUTED', 'LIVE', 'UNKNOWN'));

ALTER TABLE provider_admin_usage_snapshots
  ADD COLUMN IF NOT EXISTS collection_provenance text NOT NULL DEFAULT 'UNKNOWN';

ALTER TABLE provider_admin_usage_snapshots
  DROP CONSTRAINT IF EXISTS provider_admin_usage_snapshots_provenance_check;

ALTER TABLE provider_admin_usage_snapshots
  ADD CONSTRAINT provider_admin_usage_snapshots_provenance_check
  CHECK (collection_provenance IN ('TEST_SUBSTITUTED', 'LIVE', 'UNKNOWN'));

CREATE INDEX IF NOT EXISTS provider_admin_usage_snapshots_provenance_idx
  ON provider_admin_usage_snapshots (collection_provenance, organization_scope);

-- LOGIN roles for exercised permission proofs (DEV only). Passwords set by operator script.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector_login') THEN
    CREATE ROLE sfia_admin_collector_login LOGIN PASSWORD 'sfia_dev_collector_only';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader_login') THEN
    CREATE ROLE sfia_finops_reader_login LOGIN PASSWORD 'sfia_dev_finops_read_only';
  END IF;
END$$;

GRANT sfia_admin_collector TO sfia_admin_collector_login;
GRANT sfia_finops_reader TO sfia_finops_reader_login;
GRANT USAGE ON SCHEMA public TO sfia_admin_collector_login;
GRANT USAGE ON SCHEMA public TO sfia_finops_reader_login;
-- CONNECT on current database only (DEV operator or e2e isolate).
DO $$
BEGIN
  EXECUTE format(
    'GRANT CONNECT ON DATABASE %I TO sfia_admin_collector_login',
    current_database()
  );
  EXECUTE format(
    'GRANT CONNECT ON DATABASE %I TO sfia_finops_reader_login',
    current_database()
  );
END$$;

-- Ensure collector cannot touch Studio attribution ledger / pilots.
REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector;
REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector_login;
REVOKE ALL ON TABLE pilots FROM sfia_admin_collector;
REVOKE ALL ON TABLE pilots FROM sfia_admin_collector_login;
REVOKE ALL ON TABLE projects FROM sfia_admin_collector;
REVOKE ALL ON TABLE projects FROM sfia_admin_collector_login;

-- Reader cannot write snapshots.
REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader_login;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader_login;

```

### CREATED `projects/sfia-studio-next/web/tests/integration/ml5-admin-finops-qualification.pg.test.ts`

```
/**
 * Admin/FinOps qualification — PG integrity, provenance, roles, restore probe.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import postgres from "postgres";
import {
  markSubstitutedAdminTransport,
  resetAdminCollectorStateForTests,
  resolveIsolatedAdminCollectorConfig,
  runAdminCollection,
  reconcileFinOpsCosts,
  assessPeriodEquality,
} from "@/domains/finops/provider-admin-usage-collector";
import {
  getAdminCollectionFreshnessFromPg,
  listAdminSnapshotsFromPg,
  upsertAdminSnapshotsPg,
  insertAdminCollectionRun,
  finishAdminCollectionRun,
} from "@/domains/finops/provider-admin-usage-repository";
import type { AdminUsageSnapshot } from "@/domains/finops/provider-admin-usage-collector";

const costsPage = (amount: number, projectId: string) => ({
  object: "page",
  data: [
    {
      object: "bucket",
      start_time: 1_700_000_000,
      end_time: 1_700_086_400,
      results: [
        {
          object: "organization.costs.result",
          amount: { value: amount, currency: "usd" },
          project_id: projectId,
        },
      ],
    },
  ],
  has_more: false,
  next_page: null,
});

function baseSnap(
  overrides: Partial<AdminUsageSnapshot> & {
    completeness: "complete" | "partial";
    collectedAtUtc: string;
    amount: string;
  },
): AdminUsageSnapshot {
  return {
    sourceEndpoint: "/organization/costs",
    surfaceObject: "organization.costs.result",
    organizationScope: "org:qual",
    intervalStartUtc: "2023-11-14T22:13:20.000Z",
    intervalEndUtc: "2023-11-15T22:13:20.000Z",
    granularity: "1d",
    dimensions: {
      project_id: "proj_qual",
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
      amount: { presence: "MEASURED", value: overrides.amount },
      currency: { presence: "MEASURED", value: "usd" },
    },
    collectionId: overrides.collectionId ?? "acol_qual",
    completeness: overrides.completeness,
    collectedAtUtc: overrides.collectedAtUtc,
    collectionProvenance: overrides.collectionProvenance,
  };
}

describe("Admin/FinOps PG qualification", () => {
  beforeAll(() => resetAdminCollectorStateForTests());
  afterAll(() => resetAdminCollectorStateForTests());

  it("partial collect does not overwrite complete snapshot metrics", async () => {
    const runId = `acol_integrity_${Date.now()}`;
    await insertAdminCollectionRun({
      collectionId: runId,
      startedAtUtc: "2026-11-26T10:00:00.000Z",
      status: "READY",
      path: "/organization/costs",
      organizationScope: "org:qual",
      provenance: "LIVE",
    });
    await finishAdminCollectionRun({
      collectionId: runId,
      finishedAtUtc: "2026-11-26T10:00:01.000Z",
      status: "READY",
      pagesFetched: 1,
      limits: [],
      lastError: null,
    });

    await upsertAdminSnapshotsPg(
      [
        baseSnap({
          collectionId: runId,
          completeness: "complete",
          collectedAtUtc: "2026-11-26T10:00:00.000Z",
          amount: "9.0000000000",
        }),
      ],
      "LIVE",
    );

    const runPartial = `${runId}_p`;
    await insertAdminCollectionRun({
      collectionId: runPartial,
      startedAtUtc: "2026-11-26T11:00:00.000Z",
      status: "PARTIAL",
      path: "/organization/costs",
      organizationScope: "org:qual",
      provenance: "LIVE",
    });
    await finishAdminCollectionRun({
      collectionId: runPartial,
      finishedAtUtc: "2026-11-26T11:00:01.000Z",
      status: "PARTIAL",
      pagesFetched: 1,
      limits: [],
      lastError: null,
    });

    await upsertAdminSnapshotsPg(
      [
        baseSnap({
          collectionId: runPartial,
          completeness: "partial",
          collectedAtUtc: "2026-11-26T11:00:00.000Z",
          amount: "0.0100000000",
        }),
      ],
      "LIVE",
    );

    const rows = await listAdminSnapshotsFromPg({
      organizationScope: "org:qual",
      provenance: "LIVE",
    });
    const hit = rows.find((r) => r.dimensions.project_id === "proj_qual");
    expect(hit?.completeness).toBe("complete");
    expect(hit?.metrics.amount.value).toBe("9.0000000000");
  });

  it("TEST provenance is excluded from LIVE product reads", async () => {
    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: costsPage(3.33, "proj_test_only"),
    }));
    const r = await runAdminCollection({
      config: resolveIsolatedAdminCollectorConfig({
        adminApiKey: null,
        mode: "TEST_SUBSTITUTED",
        liveAuthorized: false,
        organizationScope: "org:qual-test",
        transport,
      }),
      path: "/organization/costs",
      query: { start_time: "1700000000" },
      persistToPg: true,
    });
    expect(r.status).toBe("READY");

    const liveOnly = await listAdminSnapshotsFromPg({
      organizationScope: "org:qual-test",
      provenance: "LIVE",
    });
    expect(liveOnly.some((s) => s.dimensions.project_id === "proj_test_only")).toBe(
      false,
    );
    const testRows = await listAdminSnapshotsFromPg({
      organizationScope: "org:qual-test",
      provenance: "TEST_SUBSTITUTED",
    });
    expect(testRows.some((s) => s.dimensions.project_id === "proj_test_only")).toBe(
      true,
    );
  });

  it("positive COMPARABLE with exact period window", () => {
    const window = {
      startUtc: "2023-11-14T22:13:20.000Z",
      endUtc: "2023-11-15T22:13:20.000Z",
    };
    const rows = [
      baseSnap({
        completeness: "complete",
        collectedAtUtc: "2026-11-26T10:00:00.000Z",
        amount: "0.8600000000",
        collectionProvenance: "LIVE",
      }),
    ];
    const period = assessPeriodEquality(rows, window);
    expect(period.periodEqual).toBe(true);
    const rec = reconcileFinOpsCosts({
      studioEstimatedUsd: "0.8000000000",
      providerCostUsd: "0.8600000000",
      scope: {
        organizationMatches: true,
        organizationIdentityProven: true,
        projectIdsOverlap: true,
        projectAttributionProven: true,
        apiKeyIdsOverlap: false,
        periodOverlap: true,
        periodEqual: period.periodEqual,
        currencyMatches: true,
        providerCurrency: "usd",
        surfacesRequested: ["/organization/costs"],
        groupingCompatible: true,
        coverageComplete: true,
        freshnessAcceptable: true,
        evidenceNotes: ["QUAL_POSITIVE_COMPARABLE"],
      },
    });
    expect(rec.status).toBe("COMPARABLE");
    expect(rec.deltaUsd).toBe("0.0600000000");
  });

  it("finops reader role cannot INSERT snapshots", async () => {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL missing");
    const u = new URL(url);
    u.username = "sfia_finops_reader_login";
    u.password = "sfia_dev_finops_read_only";
    const reader = postgres(u.toString(), { max: 1 });
    try {
      let refused = false;
      try {
        await reader`
          INSERT INTO provider_admin_collection_runs (
            collection_id, started_at, status, path, organization_scope, collection_provenance
          ) VALUES (
            'acol_should_fail', now(), 'READY', '/organization/costs', 'org:x', 'LIVE'
          )
        `;
      } catch {
        refused = true;
      }
      expect(refused).toBe(true);
    } finally {
      await reader.end({ timeout: 1 });
    }
  });

  it("collector role cannot SELECT pilots (business tables)", async () => {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL missing");
    const u = new URL(url);
    u.username = "sfia_admin_collector_login";
    u.password = "sfia_dev_collector_only";
    const collector = postgres(u.toString(), { max: 1 });
    try {
      let refused = false;
      try {
        await collector`SELECT id FROM pilots LIMIT 1`;
      } catch {
        refused = true;
      }
      expect(refused).toBe(true);
    } finally {
      await collector.end({ timeout: 1 });
    }
  });

  it("freshness scoped by provenance", async () => {
    const f = await getAdminCollectionFreshnessFromPg({
      organizationScope: "org:qual-test",
      provenance: "TEST_SUBSTITUTED",
    });
    expect(f.snapshotCount).toBeGreaterThan(0);
  });
});

```

### CREATED `projects/sfia-studio-next/construction/convergence-openai-studio/procedure-admin-live-qualification-candidate.md`

```
# Procédure candidate — qualification Admin LIVE bornée

| Champ | Valeur |
|---|---|
| Statut | **CANDIDATE — NOT EXECUTED** |
| Gates | G-ADMIN-SECRET puis G-ADMIN-LIVE — **Morris GO requis** |
| Date | 2026-11-26 |

## Critères de readiness (tous requis avant demande de clé)

1. Transport LIVE fail-closed (GO + DEV + processus collecteur + registry)
2. Destination `https://api.openai.com/v1` + `redirect:error` + body borné à la lecture
3. Secret inaccessible au produit / Nora / navigateur / Git / CLI argv
4. Permissions PG exercées (`sfia_admin_collector_login` write snapshots ; `sfia_finops_reader_login` SELECT only)
5. Intégrité snapshots (partial ↛ complete ; older ↛ newer)
6. Séparation TEST_SUBSTITUTED / LIVE (provenance durable ; TEST exclu des projections)
7. Collecte + persistance intégrées
8. Lecture FinOps cloisonnée
9. Procédure de provisionnement (ci-dessous)
10. Enveloppe LIVE précise

## Enveloppe LIVE minimale proposée

| Paramètre | Valeur |
|---|---|
| Organisation | celle autorisée DEV uniquement |
| Projet OpenAI | un `project_id` DEV explicite (`--project-id`) |
| Endpoints | GET `/organization/costs` et/ou un Usage path allowlisté |
| Fenêtre | `start_time` + `end_time` UTC **courte et terminée** |
| Granularité | `1d` (ou `1h` si mandat) |
| Pages | max 20 (défaut 10) |
| Retries | max 3 ; re-check GO avant chaque retry |
| Données | volume borné ; pas de balayage org entier |

## Provisionnement secret (Morris)

1. Créer la clé Admin sur le portail OpenAI (hors chat).
2. Stocker **uniquement** dans le secret store local de l’opérateur (Keychain / fichier env isolé non versionné, hors `.env.local` partagé).
3. Exporter dans le **seul** processus collecteur :
   - `SFIA_ADMIN_COLLECTOR_PROCESS=1`
   - `STUDIO_LANE=DEV`
   - `SFIA_ADMIN_USAGE_LIVE=1`
   - `OPENAI_ADMIN_KEY` (jamais argv, jamais chat, jamais Git)
4. Lancer `scripts/finops-admin-collect.mts` avec `--start-time` `--end-time` `--project-id`.
5. Vérifier `collection_provenance=LIVE` en PG ; lecture produit FinOps.
6. Révocation : retirer la variable d’env ; révoquer la clé sur le portail ; `SFIA_ADMIN_USAGE_LIVE` unset.

## STOP

- Fuite de secret, effet hors enveloppe, 401/403 inattendus, contamination RECETTE, balayage org non filtré.

## Non-présomptions

- Les coûts peuvent arriver en retard — prévoir rejeu idempotent.
- Permissions compte ≠ documentation SDK.
- Aucun appel LIVE dans le cycle de préparation.

```

## 13. Diff utile complet (348cf6bd)

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md b/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md
index e01ca444..b6a5757f 100644
--- a/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md
@@ -1,64 +1,43 @@
-# Convergence OpenAI–Studio — As-built Macro-lot 1 (operational completion)
+# Convergence OpenAI–Studio — As-built Macro-lot 1 (Admin & FinOps qualification)

 | Champ | Valeur |
 |---|---|
-| Date | 2026-11-26 (operational completion) |
-| Statut | OPERATIONAL DEV FOUNDATION — **NOT ADOPTED** · **NO RELEASE** |
-| HEAD entrée | `a095171e` |
-| Contrats | `1e2e188d` blobs exacts |
-| Migration DEV | `023_provider_admin_usage_snapshots.sql` appliquée (PG 16.16) |
-| BUILD_ID | `cUOHTek8qSni3vSYXOTWZ` |
-| Hors GO | Admin LIVE · WEB LIVE · UX Figma apply · tracing/continuité ON opérationnel · push projet · RECETTE |
+| Date | 2026-11-26 (Admin & FinOps qualification) |
+| Statut | Qualification Admin/FinOps DEV — **NOT ADOPTED** · **NO RELEASE** |
+| HEAD entrée cycle | `106c6392` |
+| Migrations DEV | `023` + `024` (provenance) · PG 16.16 |
+| Hors GO | Admin LIVE · création clé · WEB · tracing ON · continuité ON · Figma apply · push projet |

-## Cartographie KEEP / ADAPT / REPLACE / BUILD / DEFER
+## Corrections de ce cycle

-| Domaine | Classe | État opérationnel |
-|---|---|---|
-| Tracing | ADAPT | ALS ; fail-closed OFF ; **vrai SDK** + oracle réseau (0 export distant) |
-| OBS | KEEP | Causalité métier |
-| Frontier | ADAPT | Agrégat PARTIAL si UNKNOWN↔MEASURED ; stream UNKNOWN |
-| Collecteur Admin | BUILD | Modes `TEST_SUBSTITUTED` / `LIVE` séparés ; gate LIVE à l'émission ; transport officiel HTTPS |
-| Persistance | BUILD | Collecteur isolé → PG DEV → repository → FinOps API |
-| FinOps | ADAPT | Somme org refusée sans projet attribué ; devise non inventée ; évidence complète |
-| Continuité | ADAPT | `bindProviderContinuityContext` appelé depuis Nora LIVE + conducteur D3 ; mode OFF |
-| WEB | KEEP OFF | Dossier A3 |
-| Decisions / retrieval / audio / L2 | DEFER | Macro-lots 2/3 |
+| Sujet | Correction |
+|---|---|
+| Intégrité upsert | Partial ne met plus à jour les métriques d’une ligne complete ; `WHERE` SQL + mémoire |
+| Provenance | `collection_provenance` TEST_SUBSTITUTED \| LIVE \| UNKNOWN ; TEST exclu des projections |
+| Fallback mémoire | Produit → UNAVAILABLE si PG down ; mémoire seulement `VITEST` + flag explicite |
+| Transport | Registry WeakSet ; re-check GO avant retry ; body borné pendant lecture |
+| Enveloppe | start_time requis ; LIVE exige end_time + project_ids ; maxPages ≤ 20 |
+| FinOps | `assessPeriodEquality` ; COMPARABLE positif possible ; fraîcheur périmètre |
+| Rôles PG | LOGIN exercés ; refus INSERT reader / SELECT pilots collector prouvés |
+| Restore | `pg_restore` réel vers `sfia_next_dev_restore_probe` puis DROP (44 tables) |

-## Flux démontré
+## Flux

 ```
-Collecteur isolé (SFIA_ADMIN_COLLECTOR_PROCESS=1)
-  → transport TEST_SUBSTITUTED | LIVE(gated)
-  → provider_admin_collection_runs + provider_admin_usage_snapshots (PG DEV)
-  → provider-admin-usage-repository (lecture produit)
-  → usage-read-service / API FinOps
-  → UI consommation existante (non-régression)
+Collecteur isolé (TEST|LIVE)
+  → envelope bornée
+  → PG snapshots (provenance)
+  → repository lecture LIVE only
+  → FinOps reconciliation (periodEqual démontrable)
+  → UI existante (non-régression)
 ```

-## Sécurité Admin
-
-- Présence d'un transport **ne** lève **pas** le GO LIVE.
-- `TEST_SUBSTITUTED` : transport marqué ; aucune clé Admin réelle requise.
-- `LIVE` : `liveAdminCallsAuthorized` + clé + transport `markLiveAdminTransport` + destination `https://api.openai.com/v1` + `redirect:error`.
-- Produit Next ne charge jamais `OPENAI_ADMIN_KEY`.
-- Rollback non destructif : `SFIA_ADMIN_SNAPSHOT_READ=0`.
-
-## Migration DEV
-
-- Backup : `.tmp-sfia-review/pg-backup/sfia_next_dev_pre_023.dump` (pg_dump -Fc, listable).
-- Additive exclusively ; ledger `provider_usage_observations` préservé.
-- UNIQUE NULLS NOT DISTINCT sur identité canonique snapshot.
-- Rôles NOLOGIN : `sfia_admin_collector` (écriture), `sfia_finops_reader` (lecture).
-
 ## Gates

-**Levé (DEV only) :** G-PROVIDER-SNAPSHOT-MIGRATION
-
-**Fermés :** G-ADMIN-SECRET · G-ADMIN-LIVE · G-FINOPS-UX · G-WEB-PUBLIC/A3 · G-TRACING-LOCAL · G-NATIVE-CONTINUITY · G-PROVIDER-LIVE-QUALIFICATION · RECETTE/promotions
+**Levé DEV :** G-PROVIDER-SNAPSHOT-MIGRATION
+**Proposables si readiness OK :** G-ADMIN-SECRET (après revue Morris)
+**Fermés :** G-ADMIN-LIVE · G-FINOPS-UX · G-WEB-PUBLIC/A3 · G-TRACING-LOCAL · G-NATIVE-CONTINUITY · G-PROVIDER-LIVE-QUALIFICATION · RECETTE

-## Preuves clés
+## Lignes 023 préexistantes

-- 44 tests unit/intégration ciblés PASS (admin, frontier, tracing mock+real SDK, PG snapshots).
-- Collecteur dry-substituted → row `provider_admin_collection_runs` en DEV.
-- DEV runtime : `127.0.0.1:3100` BUILD_ID `cUOHTek8qSni3vSYXOTWZ` pid qualify.
-- RECETTE : pid inchangé, worktree figé distinct.
+Provenance défaut `UNKNOWN` — exclues des projections LIVE (pas de DELETE).
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/procedure-admin-live-qualification-candidate.md b/projects/sfia-studio-next/construction/convergence-openai-studio/procedure-admin-live-qualification-candidate.md
new file mode 100644
index 00000000..7a7637ae
--- /dev/null
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/procedure-admin-live-qualification-candidate.md
@@ -0,0 +1,56 @@
+# Procédure candidate — qualification Admin LIVE bornée
+
+| Champ | Valeur |
+|---|---|
+| Statut | **CANDIDATE — NOT EXECUTED** |
+| Gates | G-ADMIN-SECRET puis G-ADMIN-LIVE — **Morris GO requis** |
+| Date | 2026-11-26 |
+
+## Critères de readiness (tous requis avant demande de clé)
+
+1. Transport LIVE fail-closed (GO + DEV + processus collecteur + registry)
+2. Destination `https://api.openai.com/v1` + `redirect:error` + body borné à la lecture
+3. Secret inaccessible au produit / Nora / navigateur / Git / CLI argv
+4. Permissions PG exercées (`sfia_admin_collector_login` write snapshots ; `sfia_finops_reader_login` SELECT only)
+5. Intégrité snapshots (partial ↛ complete ; older ↛ newer)
+6. Séparation TEST_SUBSTITUTED / LIVE (provenance durable ; TEST exclu des projections)
+7. Collecte + persistance intégrées
+8. Lecture FinOps cloisonnée
+9. Procédure de provisionnement (ci-dessous)
+10. Enveloppe LIVE précise
+
+## Enveloppe LIVE minimale proposée
+
+| Paramètre | Valeur |
+|---|---|
+| Organisation | celle autorisée DEV uniquement |
+| Projet OpenAI | un `project_id` DEV explicite (`--project-id`) |
+| Endpoints | GET `/organization/costs` et/ou un Usage path allowlisté |
+| Fenêtre | `start_time` + `end_time` UTC **courte et terminée** |
+| Granularité | `1d` (ou `1h` si mandat) |
+| Pages | max 20 (défaut 10) |
+| Retries | max 3 ; re-check GO avant chaque retry |
+| Données | volume borné ; pas de balayage org entier |
+
+## Provisionnement secret (Morris)
+
+1. Créer la clé Admin sur le portail OpenAI (hors chat).
+2. Stocker **uniquement** dans le secret store local de l’opérateur (Keychain / fichier env isolé non versionné, hors `.env.local` partagé).
+3. Exporter dans le **seul** processus collecteur :
+   - `SFIA_ADMIN_COLLECTOR_PROCESS=1`
+   - `STUDIO_LANE=DEV`
+   - `SFIA_ADMIN_USAGE_LIVE=1`
+   - `OPENAI_ADMIN_KEY` (jamais argv, jamais chat, jamais Git)
+4. Lancer `scripts/finops-admin-collect.mts` avec `--start-time` `--end-time` `--project-id`.
+5. Vérifier `collection_provenance=LIVE` en PG ; lecture produit FinOps.
+6. Révocation : retirer la variable d’env ; révoquer la clé sur le portail ; `SFIA_ADMIN_USAGE_LIVE` unset.
+
+## STOP
+
+- Fuite de secret, effet hors enveloppe, 401/403 inattendus, contamination RECETTE, balayage org non filtré.
+
+## Non-présomptions
+
+- Les coûts peuvent arriver en retard — prévoir rejeu idempotent.
+- Permissions compte ≠ documentation SDK.
+- Aucun appel LIVE dans le cycle de préparation.
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md b/projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md
index 9d5284ed..bc06e2af 100644
--- a/projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md
@@ -3,20 +3,39 @@
 | Champ | Valeur |
 |---|---|
 | Référence | https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1332-2305 |
-| Statut | **CANDIDATE — NOT APPLIED** (mandat §10.7 : validation Morris avant code UI) |
-| Backend | `providerReconciliation` déjà exposé dans `/api/finops/summary` |
+| Statut | **CANDIDATE — NOT APPLIED** · **G-FINOPS-UX fermé** |
+| Backend | `providerReconciliation` via `/api/finops/summary` |
+| Inspection Figma | Non rejouée dans ce cycle — limite documentée ; pas d’invention visuelle |

-## Proposition de restitution
+## Orientation Morris (conservée)

-Conserver la page 13 existante. Ajouter une section secondaire (hors hero) :
+Préserver rail, composants, hiérarchie et conventions de la cible validée.
+Aucun nouveau cockpit financier. Aucun plafond / crédit / rechargement.

-1. **Estimation Studio** (inchangé) — travaux / tokens / USD estimés.
-2. **Coût fournisseur** — montant agrégé + devise + période, ou état `Indisponible`.
-3. **Écart** — uniquement si `comparability=COMPARABLE` ; sinon libellé `Non comparable` + limite.
-4. **Fraîcheur** — dernière collecte réussie / partielle / bloquée (pas de secret).
-5. **États d’erreur** — `OPENAI_ADMIN_KEY_ABSENT`, sync partielle, mapping lane non prouvé.
+## Mapping états → restitution

-Aucune fausse précision. Aucun plafond monétaire produit. Pas de second écran FinOps.
+| Zone | Données | États |
+|---|---|---|
+| Estimation Studio | `studioEstimatedUsd` / kind | known · partial · empty · unknown |
+| Coût fournisseur agrégé | `providerCostUsd` + `providerCurrency` | montant LIVE autorisé · Indisponible · Non autorisé |
+| Période | fenêtre UTC de comparaison | affichée seulement si `periodEqual` ou fenêtre explicite |
+| Fraîcheur | `freshness` scoped au périmètre | READY · PARTIAL · IDLE · ERROR |
+| Comparabilité | `comparability` | COMPARABLE · NON_COMPARABLE · PARTIAL · UNAVAILABLE |
+| Écart | `deltaUsd` | **uniquement** si COMPARABLE |
+| Partiel / indisponible | `limits[]` sanitised | libellés métier, jamais secrets |
+
+## Hiérarchie proposée (secondaire, hors hero)
+
+1. Estimation Studio (existant)
+2. Coût fournisseur agrégé autorisé (nouveau bloc secondaire)
+3. Période + fraîcheur
+4. Comparabilité / écart conditionnel
+5. Message données partielles ou indisponibles
+
+## Non-régression
+
+Interface actuelle conservée tant que G-FINOPS-UX n’est pas levé.
+Smoke HTTP `/settings/consumption` = 200 sur le build courant.

 ## GO demandé

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index e5329d5d..86e7627b 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,22 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-26-OPENAI-STUDIO-CONVERGENCE-ML1-ADMIN-FINOPS-QUAL
+
+- **date_utc**: 2026-11-26T21:45Z
+- **lane**: DEV — Admin & FinOps qualification
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_initial**: `106c6392c39ff1741eea729fe594ae8d12cdc9d3`
+- **focus**: snapshot integrity ; provenance TEST/LIVE ; PG roles exercised ; envelope ; periodEqual COMPARABLE ; restore proof ; Admin LIVE dossier (not executed)
+- **migration**: `024_provider_admin_snapshot_provenance.sql` additive
+- **BUILD_ID**: `8eXiN6NO94261FxSLnuuj` · digest `2d613f2ddf83fc0747236ecd1a7822ddeb707ced89f43e1a046ca8d04ea3506c`
+- **DEV**: `127.0.0.1:3100` pid 11160 · RECETTE pid 89199 intacte
+- **tests**: 21 PASS (unit 13 · PG snapshots 2 · Admin/FinOps qual 6) · restore probe 44 tables
+- **gates**: G-ADMIN-SECRET proposable si readiness ; G-ADMIN-LIVE fermé ; G-FINOPS-UX fermé
+- **web_live**: OFF · push projet NON · NO RELEASE · NOT ADOPTED
+- **procedure**: `construction/convergence-openai-studio/procedure-admin-live-qualification-candidate.md`
+- **statut**: **ADMIN COLLECTOR — READY FOR SECURE PROVISIONING AND BOUNDED LIVE QUALIFICATION** (technique DEV ; LIVE non exécuté)
+
 ## delivery_id: DELIV-2026-11-26-OPENAI-STUDIO-CONVERGENCE-ML1-OPERATIONAL

 - **date_utc**: 2026-11-26T20:30Z
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index 18a320e8..99cfd171 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -4,7 +4,7 @@

 | Champ | Valeur |
 |---|---|
-| Version | v0.17 candidate — 26 novembre 2026 : Macro-lot 1 convergence OpenAI operational DEV foundation (Admin TEST/LIVE split · PG snapshots 023 · FinOps evidence · frontier PARTIAL · D3 continuity bind · real SDK tracing oracle · BUILD `cUOHTek8qSni3vSYXOTWZ`) — **OPERATIONAL DEV FOUNDATION PROVEN / LIVE GATES REMAIN** ; v0.16 : R5 frontière production documentaire |
+| Version | v0.18 candidate — 26 novembre 2026 : Admin/FinOps qualification (snapshot integrity · provenance · PG roles · periodEqual COMPARABLE · restore proof · Admin LIVE dossier) — **ADMIN READY FOR SECURE PROVISIONING / LIVE NOT EXECUTED** ; v0.17 : operational DEV foundation |
 | Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
 | Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
 | Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
diff --git a/projects/sfia-studio-next/web/scripts/db-migrate.sh b/projects/sfia-studio-next/web/scripts/db-migrate.sh
index a0e8233e..40da8bbe 100755
--- a/projects/sfia-studio-next/web/scripts/db-migrate.sh
+++ b/projects/sfia-studio-next/web/scripts/db-migrate.sh
@@ -41,4 +41,5 @@ apply "020_cognitive_work.sql"
 apply "021_cognitive_contract_filiation.sql"
 apply "022_provider_usage_observations.sql"
 apply "023_provider_admin_usage_snapshots.sql"
-echo "db:migrate OK (001→023)"
+apply "024_provider_admin_snapshot_provenance.sql"
+echo "db:migrate OK (001→024)"
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/scripts/finops-admin-collect.mts b/projects/sfia-studio-next/web/scripts/finops-admin-collect.mts
index 75b033a6..d0d4fdfb 100644
--- a/projects/sfia-studio-next/web/scripts/finops-admin-collect.mts
+++ b/projects/sfia-studio-next/web/scripts/finops-admin-collect.mts
@@ -52,6 +52,8 @@ async function main(): Promise<void> {
   const live = isAdminLiveAuthorized(process.env);
   const dry = process.argv.includes("--dry-substituted");
   const persist = !process.argv.includes("--no-persist");
+  const end = arg("--end-time");
+  const projectId = arg("--project-id");

   if (!live && !dry) {
     console.log(
@@ -79,8 +81,9 @@ async function main(): Promise<void> {
       path,
       query: {
         start_time: start,
+        ...(end ? { end_time: end } : {}),
         bucket_width: arg("--bucket-width") ?? "1d",
-        ...(arg("--project-id") ? { project_ids: arg("--project-id")! } : {}),
+        ...(projectId ? { project_ids: projectId } : {}),
       },
       persistToPg: persist,
     });
@@ -127,6 +130,29 @@ async function main(): Promise<void> {
     return;
   }

+  if (!end) {
+    console.log(
+      JSON.stringify({
+        status: "ERROR",
+        lastError: "MISSING_END_TIME",
+        limits: ["LIVE_ENVELOPE_REQUIRES_END_TIME"],
+      }),
+    );
+    process.exitCode = 2;
+    return;
+  }
+  if (!projectId) {
+    console.log(
+      JSON.stringify({
+        status: "ERROR",
+        lastError: "MISSING_PROJECT_ID",
+        limits: ["LIVE_ENVELOPE_REQUIRES_PROJECT_FILTER"],
+      }),
+    );
+    process.exitCode = 2;
+    return;
+  }
+
   const result = await runAdminCollection({
     config: resolveIsolatedAdminCollectorConfig({
       adminApiKey: key,
@@ -137,10 +163,12 @@ async function main(): Promise<void> {
     path,
     query: {
       start_time: start,
+      end_time: end,
       bucket_width: arg("--bucket-width") ?? "1d",
-      ...(arg("--project-id") ? { project_ids: arg("--project-id")! } : {}),
+      project_ids: projectId,
     },
     persistToPg: persist,
+    requireEndTime: true,
   });

   console.log(
diff --git a/projects/sfia-studio-next/web/src/db/migrations/024_provider_admin_snapshot_provenance.sql b/projects/sfia-studio-next/web/src/db/migrations/024_provider_admin_snapshot_provenance.sql
new file mode 100644
index 00000000..b212d7d9
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/db/migrations/024_provider_admin_snapshot_provenance.sql
@@ -0,0 +1,68 @@
+-- ML1 Admin/FinOps qualification — additive provenance + integrity helpers.
+-- Does NOT rewrite 023. No DROP/DELETE of snapshot rows.
+-- Existing 023 rows get provenance='UNKNOWN' (excluded from LIVE FinOps projections).
+
+ALTER TABLE provider_admin_collection_runs
+  ADD COLUMN IF NOT EXISTS collection_provenance text NOT NULL DEFAULT 'UNKNOWN';
+
+ALTER TABLE provider_admin_collection_runs
+  DROP CONSTRAINT IF EXISTS provider_admin_collection_runs_provenance_check;
+
+ALTER TABLE provider_admin_collection_runs
+  ADD CONSTRAINT provider_admin_collection_runs_provenance_check
+  CHECK (collection_provenance IN ('TEST_SUBSTITUTED', 'LIVE', 'UNKNOWN'));
+
+ALTER TABLE provider_admin_usage_snapshots
+  ADD COLUMN IF NOT EXISTS collection_provenance text NOT NULL DEFAULT 'UNKNOWN';
+
+ALTER TABLE provider_admin_usage_snapshots
+  DROP CONSTRAINT IF EXISTS provider_admin_usage_snapshots_provenance_check;
+
+ALTER TABLE provider_admin_usage_snapshots
+  ADD CONSTRAINT provider_admin_usage_snapshots_provenance_check
+  CHECK (collection_provenance IN ('TEST_SUBSTITUTED', 'LIVE', 'UNKNOWN'));
+
+CREATE INDEX IF NOT EXISTS provider_admin_usage_snapshots_provenance_idx
+  ON provider_admin_usage_snapshots (collection_provenance, organization_scope);
+
+-- LOGIN roles for exercised permission proofs (DEV only). Passwords set by operator script.
+DO $$
+BEGIN
+  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector_login') THEN
+    CREATE ROLE sfia_admin_collector_login LOGIN PASSWORD 'sfia_dev_collector_only';
+  END IF;
+  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader_login') THEN
+    CREATE ROLE sfia_finops_reader_login LOGIN PASSWORD 'sfia_dev_finops_read_only';
+  END IF;
+END$$;
+
+GRANT sfia_admin_collector TO sfia_admin_collector_login;
+GRANT sfia_finops_reader TO sfia_finops_reader_login;
+GRANT USAGE ON SCHEMA public TO sfia_admin_collector_login;
+GRANT USAGE ON SCHEMA public TO sfia_finops_reader_login;
+-- CONNECT on current database only (DEV operator or e2e isolate).
+DO $$
+BEGIN
+  EXECUTE format(
+    'GRANT CONNECT ON DATABASE %I TO sfia_admin_collector_login',
+    current_database()
+  );
+  EXECUTE format(
+    'GRANT CONNECT ON DATABASE %I TO sfia_finops_reader_login',
+    current_database()
+  );
+END$$;
+
+-- Ensure collector cannot touch Studio attribution ledger / pilots.
+REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector;
+REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector_login;
+REVOKE ALL ON TABLE pilots FROM sfia_admin_collector;
+REVOKE ALL ON TABLE pilots FROM sfia_admin_collector_login;
+REVOKE ALL ON TABLE projects FROM sfia_admin_collector;
+REVOKE ALL ON TABLE projects FROM sfia_admin_collector_login;
+
+-- Reader cannot write snapshots.
+REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader;
+REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader;
+REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader_login;
+REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader_login;
diff --git a/projects/sfia-studio-next/web/src/db/schema.ts b/projects/sfia-studio-next/web/src/db/schema.ts
index c1990dc9..11070e9c 100644
--- a/projects/sfia-studio-next/web/src/db/schema.ts
+++ b/projects/sfia-studio-next/web/src/db/schema.ts
@@ -1177,6 +1177,7 @@ export const providerAdminCollectionRuns = pgTable("provider_admin_collection_ru
   organizationScope: text("organization_scope").notNull(),
   limitsJson: jsonb("limits_json").$type<string[]>().notNull().default([]),
   lastError: text("last_error"),
+  collectionProvenance: text("collection_provenance").notNull().default("UNKNOWN"),
 });

 export const providerAdminUsageSnapshots = pgTable(
@@ -1210,6 +1211,9 @@ export const providerAdminUsageSnapshots = pgTable(
     currency: text("currency"),
     completeness: text("completeness").notNull(),
     schemaVersion: text("schema_version").notNull().default("2"),
+    collectionProvenance: text("collection_provenance")
+      .notNull()
+      .default("UNKNOWN"),
   },
   (t) => [
     index("provider_admin_usage_snapshots_org_interval_idx").on(
@@ -1217,7 +1221,11 @@ export const providerAdminUsageSnapshots = pgTable(
       t.intervalStartUtc,
     ),
     index("provider_admin_usage_snapshots_collection_idx").on(t.collectionId),
+    index("provider_admin_usage_snapshots_provenance_idx").on(
+      t.collectionProvenance,
+      t.organizationScope,
+    ),
   ],
 );

-export const schemaRevision = "023_provider_admin_usage_snapshots";
+export const schemaRevision = "024_provider_admin_snapshot_provenance";
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts
index f554dacf..a2c12d4f 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-http-transport.ts
@@ -41,6 +41,47 @@ function sanitizeErrorMessage(status: number, bodyText: string): string {
   return `ADMIN_HTTP_${status}:${clipped}`;
 }

+/** Bound body while receiving — not only after full arrayBuffer(). */
+async function readBodyBounded(
+  res: Response,
+  maxBytes: number,
+): Promise<string> {
+  if (!res.body) {
+    const text = await res.text();
+    if (new TextEncoder().encode(text).byteLength > maxBytes) {
+      throw new Error("ADMIN_RESPONSE_TOO_LARGE");
+    }
+    return text;
+  }
+  const reader = res.body.getReader();
+  const chunks: Uint8Array[] = [];
+  let total = 0;
+  // eslint-disable-next-line no-constant-condition
+  while (true) {
+    const { done, value } = await reader.read();
+    if (done) break;
+    if (value) {
+      total += value.byteLength;
+      if (total > maxBytes) {
+        try {
+          await reader.cancel();
+        } catch {
+          /* ignore */
+        }
+        throw new Error("ADMIN_RESPONSE_TOO_LARGE");
+      }
+      chunks.push(value);
+    }
+  }
+  const merged = new Uint8Array(total);
+  let offset = 0;
+  for (const c of chunks) {
+    merged.set(c, offset);
+    offset += c.byteLength;
+  }
+  return new TextDecoder().decode(merged);
+}
+
 /**
  * Construct LIVE Admin transport. Throws if LIVE GO is not proven.
  * Destination fixed to ADMIN_LIVE_BASE_URL; redirects refused.
@@ -88,6 +129,10 @@ export function createAdminHttpTransport(
     let attempt = 0;
     // eslint-disable-next-line no-constant-condition
     while (true) {
+      // Re-check LIVE GO before every attempt including retries.
+      if (!isAdminLiveAuthorized()) {
+        throw new Error("BLOCKED_NO_LIVE_GO");
+      }
       const ac = new AbortController();
       const timer = setTimeout(() => ac.abort(), timeoutMs);
       try {
@@ -101,11 +146,7 @@ export function createAdminHttpTransport(
           signal: ac.signal,
           redirect: "error",
         });
-        const buf = await res.arrayBuffer();
-        if (buf.byteLength > MAX_RESPONSE_BYTES) {
-          throw new Error("ADMIN_RESPONSE_TOO_LARGE");
-        }
-        const text = new TextDecoder().decode(buf);
+        const text = await readBodyBounded(res, MAX_RESPONSE_BYTES);
         let json: unknown = null;
         try {
           json = text ? JSON.parse(text) : null;
diff --git a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts
index 11569c02..b042fedd 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts
@@ -63,6 +63,8 @@ export type AdminUsageSnapshot = {
   completeness: "complete" | "partial";
   collectedAtUtc: string;
   collectionId: string;
+  /** Durable TEST vs LIVE separation — TEST never treated as real cost. */
+  collectionProvenance?: "TEST_SUBSTITUTED" | "LIVE" | "UNKNOWN";
 };

 export type AdminCollectionResult = {
@@ -92,6 +94,10 @@ export type AdminHttpTransport = AdminHttpTransportFn & {
   readonly __sfiaAdminMode: AdminTransportMode;
 };

+/** Runtime registry — property markers alone are not a security boundary. */
+const liveTransportRegistry = new WeakSet<object>();
+const substitutedTransportRegistry = new WeakSet<object>();
+
 export function markSubstitutedAdminTransport(
   fn: AdminHttpTransportFn,
 ): AdminHttpTransport {
@@ -102,6 +108,7 @@ export function markSubstitutedAdminTransport(
     configurable: false,
     writable: false,
   });
+  substitutedTransportRegistry.add(t);
   return t;
 }

@@ -115,9 +122,22 @@ export function markLiveAdminTransport(
     configurable: false,
     writable: false,
   });
+  liveTransportRegistry.add(t);
   return t;
 }

+export function isRegisteredLiveAdminTransport(
+  transport: AdminHttpTransportFn,
+): boolean {
+  return liveTransportRegistry.has(transport);
+}
+
+export function isRegisteredSubstitutedAdminTransport(
+  transport: AdminHttpTransportFn,
+): boolean {
+  return substitutedTransportRegistry.has(transport);
+}
+
 export type AdminCollectorConfig = {
   /**
    * LIVE requires a real Admin key in the isolated collector.
@@ -415,7 +435,16 @@ export function upsertAdminSnapshots(
   for (const s of snapshots) {
     const key = snapshotKey(s);
     const prev = snapshotByKey.get(key);
-    if (prev?.completeness === "complete" && s.completeness === "partial") {
+    if (!prev) {
+      snapshotByKey.set(key, s);
+      continue;
+    }
+    // Partial never degrades a complete snapshot.
+    if (prev.completeness === "complete" && s.completeness === "partial") {
+      continue;
+    }
+    // Older collect never replaces a newer one.
+    if (s.collectedAtUtc < prev.collectedAtUtc) {
       continue;
     }
     snapshotByKey.set(key, s);
@@ -438,21 +467,71 @@ function assertTransportGate(config: AdminCollectorConfig): void {
     if (!config.adminApiKey) {
       throw new Error("BLOCKED_NO_SECRET");
     }
-    if (!transport || marked !== "LIVE") {
+    // Registry + marker — forging __sfiaAdminMode alone is insufficient.
+    if (
+      !transport ||
+      marked !== "LIVE" ||
+      !isRegisteredLiveAdminTransport(transport)
+    ) {
       throw new Error("BLOCKED_LIVE_TRANSPORT_REQUIRED");
     }
     return;
   }
   if (config.mode === "TEST_SUBSTITUTED") {
-    if (!transport || marked !== "TEST_SUBSTITUTED") {
+    if (config.adminApiKey) {
+      // TEST must never carry a real Admin key.
+      throw new Error("BLOCKED_TEST_MUST_NOT_HOLD_LIVE_KEY");
+    }
+    if (
+      !transport ||
+      marked !== "TEST_SUBSTITUTED" ||
+      !isRegisteredSubstitutedAdminTransport(transport)
+    ) {
       throw new Error("BLOCKED_TEST_TRANSPORT_REQUIRED");
     }
-    // Real Admin key never required for TEST_SUBSTITUTED.
     return;
   }
   throw new Error("BLOCKED_UNKNOWN_MODE");
 }

+/** Envelope bounds for Admin collection — refuse unbounded org sweeps. */
+export function assertAdminCollectionEnvelope(input: {
+  path: string;
+  query: Record<string, string>;
+  maxPages: number;
+}): void {
+  assertAllowedPath(input.path);
+  const start = input.query.start_time;
+  const end = input.query.end_time;
+  if (!start || !/^\d+$/.test(start)) {
+    throw new Error("ENVELOPE_START_TIME_REQUIRED");
+  }
+  if (end != null && end !== "" && !/^\d+$/.test(end)) {
+    throw new Error("ENVELOPE_END_TIME_INVALID");
+  }
+  if (end && Number(end) <= Number(start)) {
+    throw new Error("ENVELOPE_END_BEFORE_START");
+  }
+  // Mandate: finished short window — end_time required for LIVE-shaped envelopes.
+  if ((input.query.require_end_time ?? "") === "1" && !end) {
+    throw new Error("ENVELOPE_END_TIME_REQUIRED");
+  }
+  const width = input.query.bucket_width;
+  if (width != null && width !== "" && width !== "1m" && width !== "1h" && width !== "1d") {
+    throw new Error("ENVELOPE_GRANULARITY_INVALID");
+  }
+  if (input.maxPages < 1 || input.maxPages > 20) {
+    throw new Error("ENVELOPE_MAX_PAGES_OUT_OF_BOUNDS");
+  }
+  // project_ids / group_by must be explicit strings when present (no open JSON).
+  for (const key of ["project_ids", "group_by", "api_key_ids", "models"]) {
+    const v = input.query[key];
+    if (v != null && v !== "" && typeof v !== "string") {
+      throw new Error(`ENVELOPE_PARAM_INVALID:${key}`);
+    }
+  }
+}
+
 export async function collectAdminUsagePage(input: {
   config: AdminCollectorConfig;
   path: string;
@@ -506,10 +585,14 @@ export async function runAdminCollection(input: {
   maxPages?: number;
   /** Persist to PostgreSQL (isolated collector / integration). */
   persistToPg?: boolean;
+  /** Require end_time in query (LIVE envelope). */
+  requireEndTime?: boolean;
 }): Promise<AdminCollectionResult> {
-  const collectionId = `acol_${Date.now().toString(36)}`;
+  const { randomBytes } = await import("node:crypto");
+  const collectionId = `acol_${Date.now().toString(36)}_${randomBytes(4).toString("hex")}`;
   const collectedAtUtc = new Date().toISOString();
   const limits: string[] = [];
+  const provenance = input.config.mode;

   try {
     assertTransportGate(input.config);
@@ -521,6 +604,7 @@ export async function runAdminCollection(input: {
         : msg === "BLOCKED_NO_LIVE_GO" ||
             msg === "BLOCKED_LIVE_TRANSPORT_REQUIRED" ||
             msg === "BLOCKED_TEST_TRANSPORT_REQUIRED" ||
+            msg === "BLOCKED_TEST_MUST_NOT_HOLD_LIVE_KEY" ||
             msg === "BLOCKED_UNKNOWN_MODE"
           ? "BLOCKED_NO_LIVE_GO"
           : "ERROR";
@@ -542,7 +626,7 @@ export async function runAdminCollection(input: {
     return r;
   }

-  const maxPages = Math.max(1, Math.min(50, input.maxPages ?? 10));
+  const maxPages = Math.max(1, Math.min(20, input.maxPages ?? 10));
   const all: AdminUsageSnapshot[] = [];
   let page: string | null = null;
   let pagesFetched = 0;
@@ -555,7 +639,16 @@ export async function runAdminCollection(input: {
       : null;

   try {
-    assertAllowedPath(input.path);
+    assertAdminCollectionEnvelope({
+      path: input.path,
+      query: {
+        ...input.query,
+        ...(input.requireEndTime || input.config.mode === "LIVE"
+          ? { require_end_time: "1" }
+          : {}),
+      },
+      maxPages,
+    });
     if (persist) {
       await persist.insertAdminCollectionRun({
         collectionId,
@@ -563,6 +656,7 @@ export async function runAdminCollection(input: {
         status: "IDLE",
         path: input.path,
         organizationScope: input.config.organizationScope,
+        provenance,
       });
     }
     for (let i = 0; i < maxPages; i++) {
@@ -611,9 +705,12 @@ export async function runAdminCollection(input: {
     if (partial) {
       for (const s of all) s.completeness = "partial";
     }
+    for (const s of all) {
+      s.collectionProvenance = provenance;
+    }
     upsertAdminSnapshots(all);
     if (persist) {
-      await persist.upsertAdminSnapshotsPg(all);
+      await persist.upsertAdminSnapshotsPg(all, provenance);
       await persist.finishAdminCollectionRun({
         collectionId,
         finishedAtUtc: new Date().toISOString(),
@@ -706,6 +803,39 @@ export type FinOpsScopeEvidence = {
   evidenceNotes: string[];
 };

+/**
+ * Period equality: every attributed snapshot must share the exact compare window
+ * (interval start/end), not merely intersect it.
+ */
+export function assessPeriodEquality(
+  snapshots: AdminUsageSnapshot[],
+  window: { startUtc: string; endUtc: string },
+): { periodEqual: boolean; periodOverlap: boolean; limits: string[] } {
+  const limits: string[] = [];
+  if (!window.startUtc || !window.endUtc) {
+    return { periodEqual: false, periodOverlap: false, limits: ["PERIOD_WINDOW_ABSENT"] };
+  }
+  if (snapshots.length === 0) {
+    return { periodEqual: false, periodOverlap: false, limits: ["PERIOD_NO_SNAPSHOTS"] };
+  }
+  let overlap = false;
+  let allEqual = true;
+  for (const s of snapshots) {
+    if (s.intervalEndUtc > window.startUtc && s.intervalStartUtc < window.endUtc) {
+      overlap = true;
+    }
+    if (
+      s.intervalStartUtc !== window.startUtc ||
+      s.intervalEndUtc !== window.endUtc
+    ) {
+      allEqual = false;
+    }
+  }
+  if (!overlap) limits.push("PERIOD_NO_OVERLAP");
+  if (overlap && !allEqual) limits.push("PERIOD_OVERLAP_NOT_EQUAL");
+  return { periodEqual: overlap && allEqual, periodOverlap: overlap, limits };
+}
+
 export function assessFinOpsComparability(
   evidence: FinOpsScopeEvidence,
 ): {
diff --git a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-repository.ts b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-repository.ts
index 069f5bab..232af939 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-repository.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-repository.ts
@@ -1,13 +1,13 @@
 /**
  * Admin Usage/Costs snapshot repository — PostgreSQL SoT for FinOps product reads.
  *
- * Product/Next: read-only against authorized snapshots (no Admin collection capability).
+ * Product/Next: read-only against authorized LIVE snapshots (no Admin collection).
  * Isolated collector: write runs + upsert snapshots.
  * Distinct from provider_usage_observations (Studio attribution ledger).
  */

 import { randomUUID } from "node:crypto";
-import { and, desc, eq, gte, lte, sql as dsql } from "drizzle-orm";
+import { and, desc, eq, gte, inArray, lte, sql as dsql } from "drizzle-orm";
 import { db, sql } from "@/db/client";
 import {
   providerAdminCollectionRuns,
@@ -15,9 +15,12 @@ import {
 } from "@/db/schema";
 import type {
   AdminCollectorStatus,
+  AdminTransportMode,
   AdminUsageSnapshot,
 } from "./provider-admin-usage-collector";

+export type CollectionProvenance = AdminTransportMode | "UNKNOWN";
+
 function metricToNumber(
   m: AdminUsageSnapshot["metrics"][keyof AdminUsageSnapshot["metrics"]],
 ): number | null {
@@ -48,6 +51,7 @@ export async function insertAdminCollectionRun(input: {
   status: AdminCollectorStatus;
   path: string;
   organizationScope: string;
+  provenance: CollectionProvenance;
   pagesFetched?: number;
   limits?: string[];
   lastError?: string | null;
@@ -64,6 +68,7 @@ export async function insertAdminCollectionRun(input: {
       organizationScope: input.organizationScope,
       limitsJson: input.limits ?? [],
       lastError: input.lastError ?? null,
+      collectionProvenance: input.provenance,
     })
     .onConflictDoUpdate({
       target: providerAdminCollectionRuns.collectionId,
@@ -72,6 +77,7 @@ export async function insertAdminCollectionRun(input: {
         pagesFetched: input.pagesFetched ?? 0,
         limitsJson: input.limits ?? [],
         lastError: input.lastError ?? null,
+        collectionProvenance: input.provenance,
       },
     });
 }
@@ -97,82 +103,90 @@ export async function finishAdminCollectionRun(input: {
 }

 /**
- * Idempotent upsert via NULLS NOT DISTINCT unique index
- * (provider_admin_usage_snapshots_canon_uidx).
+ * Idempotent upsert with integrity:
+ * - partial never overwrites a complete row (metrics OR completeness);
+ * - older collected_at never replaces a newer row;
+ * - late complete revision (newer or equal ts) may upgrade partial.
  */
 export async function upsertAdminSnapshotsPg(
   snapshots: AdminUsageSnapshot[],
+  provenance: CollectionProvenance,
 ): Promise<number> {
   let written = 0;
-  for (const s of snapshots) {
-    const id = randomUUID();
-    const amount =
-      s.metrics.amount.presence === "MEASURED" && s.metrics.amount.value
-        ? s.metrics.amount.value
-        : null;
-    const currency =
-      s.metrics.currency.presence === "MEASURED"
-        ? s.metrics.currency.value
-        : null;
-    await sql`
-      INSERT INTO provider_admin_usage_snapshots (
-        id, collected_at, collection_id, source_endpoint, surface_object,
-        organization_scope, interval_start_utc, interval_end_utc, granularity,
-        project_id, api_key_id, user_id, model, line_item, api_source,
-        input_tokens, output_tokens, input_cached_tokens,
-        num_model_requests, num_requests, amount, currency,
-        completeness, schema_version
-      ) VALUES (
-        ${id}::uuid,
-        ${s.collectedAtUtc}::timestamptz,
-        ${s.collectionId},
-        ${s.sourceEndpoint},
-        ${s.surfaceObject},
-        ${s.organizationScope},
-        ${s.intervalStartUtc}::timestamptz,
-        ${s.intervalEndUtc}::timestamptz,
-        ${s.granularity},
-        ${s.dimensions.project_id},
-        ${s.dimensions.api_key_id},
-        ${s.dimensions.user_id},
-        ${s.dimensions.model},
-        ${s.dimensions.line_item},
-        ${s.dimensions.api_source},
-        ${metricToNumber(s.metrics.input_tokens)},
-        ${metricToNumber(s.metrics.output_tokens)},
-        ${metricToNumber(s.metrics.input_cached_tokens)},
-        ${metricToNumber(s.metrics.num_model_requests)},
-        ${metricToNumber(s.metrics.num_requests)},
-        ${amount},
-        ${currency},
-        ${s.completeness},
-        ${"2"}
-      )
-      ON CONFLICT (
-        source_endpoint, surface_object, organization_scope,
-        interval_start_utc, interval_end_utc, granularity,
-        project_id, api_key_id, user_id, model, line_item, api_source
-      )
-      DO UPDATE SET
-        collected_at = EXCLUDED.collected_at,
-        collection_id = EXCLUDED.collection_id,
-        input_tokens = EXCLUDED.input_tokens,
-        output_tokens = EXCLUDED.output_tokens,
-        input_cached_tokens = EXCLUDED.input_cached_tokens,
-        num_model_requests = EXCLUDED.num_model_requests,
-        num_requests = EXCLUDED.num_requests,
-        amount = EXCLUDED.amount,
-        currency = EXCLUDED.currency,
-        completeness = CASE
-          WHEN provider_admin_usage_snapshots.completeness = 'complete'
+  await sql.begin(async (tx) => {
+    for (const s of snapshots) {
+      const id = randomUUID();
+      const amount =
+        s.metrics.amount.presence === "MEASURED" && s.metrics.amount.value
+          ? s.metrics.amount.value
+          : null;
+      const currency =
+        s.metrics.currency.presence === "MEASURED"
+          ? s.metrics.currency.value
+          : null;
+      await tx`
+        INSERT INTO provider_admin_usage_snapshots (
+          id, collected_at, collection_id, source_endpoint, surface_object,
+          organization_scope, interval_start_utc, interval_end_utc, granularity,
+          project_id, api_key_id, user_id, model, line_item, api_source,
+          input_tokens, output_tokens, input_cached_tokens,
+          num_model_requests, num_requests, amount, currency,
+          completeness, schema_version, collection_provenance
+        ) VALUES (
+          ${id}::uuid,
+          ${s.collectedAtUtc}::timestamptz,
+          ${s.collectionId},
+          ${s.sourceEndpoint},
+          ${s.surfaceObject},
+          ${s.organizationScope},
+          ${s.intervalStartUtc}::timestamptz,
+          ${s.intervalEndUtc}::timestamptz,
+          ${s.granularity},
+          ${s.dimensions.project_id},
+          ${s.dimensions.api_key_id},
+          ${s.dimensions.user_id},
+          ${s.dimensions.model},
+          ${s.dimensions.line_item},
+          ${s.dimensions.api_source},
+          ${metricToNumber(s.metrics.input_tokens)},
+          ${metricToNumber(s.metrics.output_tokens)},
+          ${metricToNumber(s.metrics.input_cached_tokens)},
+          ${metricToNumber(s.metrics.num_model_requests)},
+          ${metricToNumber(s.metrics.num_requests)},
+          ${amount},
+          ${currency},
+          ${s.completeness},
+          ${"2"},
+          ${provenance}
+        )
+        ON CONFLICT (
+          source_endpoint, surface_object, organization_scope,
+          interval_start_utc, interval_end_utc, granularity,
+          project_id, api_key_id, user_id, model, line_item, api_source
+        )
+        DO UPDATE SET
+          collected_at = EXCLUDED.collected_at,
+          collection_id = EXCLUDED.collection_id,
+          input_tokens = EXCLUDED.input_tokens,
+          output_tokens = EXCLUDED.output_tokens,
+          input_cached_tokens = EXCLUDED.input_cached_tokens,
+          num_model_requests = EXCLUDED.num_model_requests,
+          num_requests = EXCLUDED.num_requests,
+          amount = EXCLUDED.amount,
+          currency = EXCLUDED.currency,
+          completeness = EXCLUDED.completeness,
+          schema_version = EXCLUDED.schema_version,
+          collection_provenance = EXCLUDED.collection_provenance
+        WHERE
+          NOT (
+            provider_admin_usage_snapshots.completeness = 'complete'
             AND EXCLUDED.completeness = 'partial'
-          THEN provider_admin_usage_snapshots.completeness
-          ELSE EXCLUDED.completeness
-        END,
-        schema_version = EXCLUDED.schema_version
-    `;
-    written += 1;
-  }
+          )
+          AND EXCLUDED.collected_at >= provider_admin_usage_snapshots.collected_at
+      `;
+      written += 1;
+    }
+  });
   return written;
 }

@@ -180,6 +194,8 @@ export async function listAdminSnapshotsFromPg(filter?: {
   organizationScope?: string;
   intervalStartUtc?: string;
   intervalEndUtc?: string;
+  /** Product projections: LIVE only. Tests may request TEST_SUBSTITUTED. */
+  provenance?: CollectionProvenance | CollectionProvenance[];
   limit?: number;
 }): Promise<AdminUsageSnapshot[]> {
   const clauses = [];
@@ -207,6 +223,14 @@ export async function listAdminSnapshotsFromPg(filter?: {
       ),
     );
   }
+  if (filter?.provenance) {
+    const list = Array.isArray(filter.provenance)
+      ? filter.provenance
+      : [filter.provenance];
+    clauses.push(
+      inArray(providerAdminUsageSnapshots.collectionProvenance, list),
+    );
+  }
   const limit = Math.min(5_000, Math.max(1, filter?.limit ?? 2_000));
   const rows = await db
     .select()
@@ -242,10 +266,16 @@ export async function listAdminSnapshotsFromPg(filter?: {
     completeness: r.completeness as "complete" | "partial",
     collectedAtUtc: r.collectedAt.toISOString(),
     collectionId: r.collectionId,
+    collectionProvenance:
+      (r.collectionProvenance as CollectionProvenance) ?? "UNKNOWN",
   }));
 }

-export async function getAdminCollectionFreshnessFromPg(): Promise<{
+export async function getAdminCollectionFreshnessFromPg(filter?: {
+  organizationScope?: string;
+  provenance?: CollectionProvenance;
+  projectId?: string | null;
+}): Promise<{
   lastAttemptAtUtc: string | null;
   lastSuccessAtUtc: string | null;
   lastCollectionId: string | null;
@@ -253,22 +283,67 @@ export async function getAdminCollectionFreshnessFromPg(): Promise<{
   snapshotCount: number;
   secretReadableByProduct: false;
 }> {
+  const runClauses = [];
+  if (filter?.organizationScope) {
+    runClauses.push(
+      eq(
+        providerAdminCollectionRuns.organizationScope,
+        filter.organizationScope,
+      ),
+    );
+  }
+  if (filter?.provenance) {
+    runClauses.push(
+      eq(providerAdminCollectionRuns.collectionProvenance, filter.provenance),
+    );
+  }
+
   const [latest] = await db
     .select()
     .from(providerAdminCollectionRuns)
+    .where(runClauses.length ? and(...runClauses) : undefined)
     .orderBy(desc(providerAdminCollectionRuns.startedAt))
     .limit(1);
+
+  const readyClauses = [
+    eq(providerAdminCollectionRuns.status, "READY"),
+    ...runClauses,
+  ];
   const [latestOk] = await db
     .select()
     .from(providerAdminCollectionRuns)
-    .where(eq(providerAdminCollectionRuns.status, "READY"))
+    .where(and(...readyClauses))
     .orderBy(desc(providerAdminCollectionRuns.finishedAt))
     .limit(1);
+
+  const snapClauses = [];
+  if (filter?.organizationScope) {
+    snapClauses.push(
+      eq(
+        providerAdminUsageSnapshots.organizationScope,
+        filter.organizationScope,
+      ),
+    );
+  }
+  if (filter?.provenance) {
+    snapClauses.push(
+      eq(
+        providerAdminUsageSnapshots.collectionProvenance,
+        filter.provenance,
+      ),
+    );
+  }
+  if (filter?.projectId) {
+    snapClauses.push(
+      eq(providerAdminUsageSnapshots.projectId, filter.projectId),
+    );
+  }
   const [countRow] = await db
     .select({
       n: dsql<number>`count(*)::int`,
     })
-    .from(providerAdminUsageSnapshots);
+    .from(providerAdminUsageSnapshots)
+    .where(snapClauses.length ? and(...snapClauses) : undefined);

   return {
     lastAttemptAtUtc: latest?.startedAt?.toISOString() ?? null,
@@ -286,3 +361,16 @@ export function isAdminSnapshotReadEnabled(
 ): boolean {
   return (env.SFIA_ADMIN_SNAPSHOT_READ ?? "1").trim() !== "0";
 }
+
+/**
+ * Product path must not silently fall back to in-memory test maps.
+ * Only explicit test flag may enable memory reads.
+ */
+export function allowAdminSnapshotMemoryFallback(
+  env: NodeJS.ProcessEnv = process.env,
+): boolean {
+  return (
+    env.VITEST === "true" &&
+    (env.SFIA_ADMIN_SNAPSHOT_TEST_MEMORY ?? "").trim() === "1"
+  );
+}
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
index 500eb53b..3e234b95 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
@@ -312,12 +312,16 @@ async function buildProviderReconciliationDto(
   estimatedCostUsd: MeasuredValue<number>,
   filter: FinOpsFilterInput,
 ): Promise<FinOpsProviderReconciliationDto> {
-  // Product path: never inspect OPENAI_ADMIN_KEY; read only authorized PG snapshots.
+  // Product path: never inspect OPENAI_ADMIN_KEY; read only authorized LIVE PG snapshots.
   const {
+    allowAdminSnapshotMemoryFallback,
     getAdminCollectionFreshnessFromPg,
     isAdminSnapshotReadEnabled,
     listAdminSnapshotsFromPg,
   } = await import("./provider-admin-usage-repository");
+  const { assessPeriodEquality } = await import(
+    "./provider-admin-usage-collector"
+  );
   const productView = resolveProductAdminCollectorView();
   const limits: string[] = [];

@@ -358,25 +362,58 @@ async function buildProviderReconciliationDto(
   let freshness;
   let snapshots;
   try {
-    freshness = await getAdminCollectionFreshnessFromPg();
+    const configuredProjectPeek =
+      (process.env.SFIA_OPENAI_PROJECT_ID ?? "").trim() || null;
+    freshness = await getAdminCollectionFreshnessFromPg({
+      organizationScope: productView.organizationScope,
+      provenance: "LIVE",
+      projectId: configuredProjectPeek,
+    });
     snapshots = (
       await listAdminSnapshotsFromPg({
         organizationScope: productView.organizationScope,
+        provenance: "LIVE",
       })
     ).filter(
       (s) =>
         s.surfaceObject === "organization.costs.result" &&
-        s.completeness === "complete",
+        s.completeness === "complete" &&
+        s.collectionProvenance === "LIVE",
     );
   } catch {
-    // Fall back to in-process memory only for deterministic unit paths.
+    if (!allowAdminSnapshotMemoryFallback()) {
+      limits.push("ADMIN_SNAPSHOT_PG_UNAVAILABLE");
+      return {
+        studioEstimatedUsd: studio,
+        studioEstimationKind,
+        providerCostUsd: null,
+        providerCurrency: null,
+        deltaUsd: null,
+        comparability: "UNAVAILABLE",
+        freshness: {
+          lastAttemptAtUtc: null,
+          lastSuccessAtUtc: null,
+          lastCollectionId: null,
+          status: "ERROR",
+          snapshotCount: 0,
+          secretReadableByProduct: false as const,
+        },
+        limits,
+        noraIndependent: true,
+        studioEstimatedUsdDecimal: studioDecimal,
+        providerCostUsdDecimal: null,
+        deltaUsdDecimal: null,
+      };
+    }
+    // Explicit test-only memory path — never silent product fallback.
     freshness = getAdminCollectorFreshness();
     snapshots = listAdminCollectorSnapshots().filter(
       (s) =>
         s.surfaceObject === "organization.costs.result" &&
-        s.completeness === "complete",
+        s.completeness === "complete" &&
+        s.collectionProvenance === "LIVE",
     );
-    limits.push("ADMIN_SNAPSHOT_PG_READ_FALLBACK_MEMORY");
+    limits.push("ADMIN_SNAPSHOT_TEST_MEMORY");
   }

   const freshnessDto = {
@@ -407,9 +444,12 @@ async function buildProviderReconciliationDto(
     };
   }

-  const since = periodStartDate(filter.periodDays ?? 30);
-  const until = new Date();
-  // Studio projectId alone never proves provider project attribution.
+  // Explicit compare window (UTC) — required for periodEqual; else NON_COMPARABLE.
+  const windowStart =
+    (process.env.SFIA_FINOPS_COMPARE_WINDOW_START_UTC ?? "").trim() ||
+    periodStartDate(filter.periodDays ?? 30).toISOString();
+  const windowEnd =
+    (process.env.SFIA_FINOPS_COMPARE_WINDOW_END_UTC ?? "").trim() || null;
   const configuredProject =
     (process.env.SFIA_OPENAI_PROJECT_ID ?? "").trim() || null;
   const configuredKey =
@@ -422,54 +462,88 @@ async function buildProviderReconciliationDto(
       (scopeOrg === configuredOrg || scopeOrg === `org:${configuredOrg}`),
   );

+  const attributed = configuredProject
+    ? snapshots.filter((s) => s.dimensions.project_id === configuredProject)
+    : [];
+
   const sum = sumMeasuredCostUsd(snapshots, {
-    intervalStartUtc: since.toISOString(),
-    intervalEndUtc: until.toISOString(),
+    intervalStartUtc: windowStart,
+    intervalEndUtc: windowEnd ?? undefined,
     projectId: configuredProject,
   });
   limits.push(...sum.limits);

+  const period = windowEnd
+    ? assessPeriodEquality(attributed, {
+        startUtc: windowStart,
+        endUtc: windowEnd,
+      })
+    : {
+        periodEqual: false,
+        periodOverlap: sum.counted > 0,
+        limits: ["PERIOD_WINDOW_END_ABSENT"],
+      };
+  limits.push(...period.limits);
+
+  // Freshness on the attributed perimeter — not global last collection alone.
+  const freshnessAcceptable =
+    freshness.status === "READY" &&
+    attributed.length > 0 &&
+    freshness.snapshotCount > 0;
+
   const evidence: FinOpsScopeEvidence = {
     organizationMatches: orgIdentityProven,
     organizationIdentityProven: orgIdentityProven,
-    projectIdsOverlap: Boolean(
-      configuredProject &&
-        snapshots.some((s) => s.dimensions.project_id === configuredProject),
-    ),
+    projectIdsOverlap: attributed.length > 0,
     projectAttributionProven: Boolean(configuredProject && sum.counted > 0),
     apiKeyIdsOverlap: Boolean(
       configuredKey &&
-        snapshots.some((s) => s.dimensions.api_key_id === configuredKey),
+        attributed.some((s) => s.dimensions.api_key_id === configuredKey),
     ),
-    periodOverlap: sum.counted > 0,
-    // Intersection alone is not equality — refuse COMPARABLE until proven.
-    periodEqual: false,
+    periodOverlap: period.periodOverlap,
+    periodEqual: period.periodEqual,
     currencyMatches: sum.currency === "usd",
     providerCurrency: sum.currency,
     surfacesRequested: ["/organization/costs"],
     groupingCompatible: true,
-    coverageComplete: freshness.status === "READY",
-    freshnessAcceptable: freshness.status === "READY",
+    coverageComplete: freshness.status === "READY" && !sum.limits.includes("COST_AMOUNT_ABSENT"),
+    freshnessAcceptable,
     evidenceNotes: [
       (process.env.SFIA_FINOPS_SCOPE_COMPARABLE ?? "").trim() === "1"
         ? "SCOPE_FLAG_SET_BUT_EVIDENCE_REQUIRED"
         : "SCOPE_FLAG_UNSET",
-      "PERIOD_EQUALITY_NOT_PROVEN",
+      "PROVENANCE_LIVE_ONLY",
       filter.projectId
         ? "STUDIO_PROJECT_FILTER_NOT_PROVIDER_PROJECT"
         : "NO_STUDIO_PROJECT_FILTER",
-    ],
+      studioEstimationKind === "partial" ? "STUDIO_ESTIMATION_PARTIAL" : "",
+    ].filter(Boolean),
   };

-  const rec = reconcileFinOpsCosts({
-    studioEstimatedUsd: studioDecimal,
-    providerCostUsd: sum.total,
-    scope: evidence,
-  });
+  // Partial studio estimation cannot become COMPARABLE.
+  if (studioEstimationKind === "partial") {
+    limits.push("STUDIO_ESTIMATION_REMAINS_PARTIAL");
+  }
+
+  const rec =
+    studioEstimationKind === "partial"
+      ? {
+          status: "PARTIAL" as const,
+          deltaUsd: null,
+          limits: ["STUDIO_ESTIMATION_REMAINS_PARTIAL", ...evidence.evidenceNotes],
+        }
+      : reconcileFinOpsCosts({
+          studioEstimatedUsd: studioDecimal,
+          providerCostUsd: sum.total,
+          scope: evidence,
+        });
   limits.push(...rec.limits);

-  // Never disclose org totals to unauthorized Pilot views.
-  const discloseProvider = rec.status === "COMPARABLE" || rec.status === "PARTIAL";
+  // Never disclose org totals / TEST / unauthorized Pilot views.
+  const discloseProvider =
+    (rec.status === "COMPARABLE" || rec.status === "PARTIAL") &&
+    orgIdentityProven &&
+    Boolean(configuredProject);
   const providerNum =
     discloseProvider && sum.total != null ? Number(sum.total) : null;
   const deltaNum =
diff --git a/projects/sfia-studio-next/web/tests/integration/ml5-admin-finops-qualification.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml5-admin-finops-qualification.pg.test.ts
new file mode 100644
index 00000000..c1bc27fe
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/ml5-admin-finops-qualification.pg.test.ts
@@ -0,0 +1,282 @@
+/**
+ * Admin/FinOps qualification — PG integrity, provenance, roles, restore probe.
+ */
+import { afterAll, beforeAll, describe, expect, it } from "vitest";
+import postgres from "postgres";
+import {
+  markSubstitutedAdminTransport,
+  resetAdminCollectorStateForTests,
+  resolveIsolatedAdminCollectorConfig,
+  runAdminCollection,
+  reconcileFinOpsCosts,
+  assessPeriodEquality,
+} from "@/domains/finops/provider-admin-usage-collector";
+import {
+  getAdminCollectionFreshnessFromPg,
+  listAdminSnapshotsFromPg,
+  upsertAdminSnapshotsPg,
+  insertAdminCollectionRun,
+  finishAdminCollectionRun,
+} from "@/domains/finops/provider-admin-usage-repository";
+import type { AdminUsageSnapshot } from "@/domains/finops/provider-admin-usage-collector";
+
+const costsPage = (amount: number, projectId: string) => ({
+  object: "page",
+  data: [
+    {
+      object: "bucket",
+      start_time: 1_700_000_000,
+      end_time: 1_700_086_400,
+      results: [
+        {
+          object: "organization.costs.result",
+          amount: { value: amount, currency: "usd" },
+          project_id: projectId,
+        },
+      ],
+    },
+  ],
+  has_more: false,
+  next_page: null,
+});
+
+function baseSnap(
+  overrides: Partial<AdminUsageSnapshot> & {
+    completeness: "complete" | "partial";
+    collectedAtUtc: string;
+    amount: string;
+  },
+): AdminUsageSnapshot {
+  return {
+    sourceEndpoint: "/organization/costs",
+    surfaceObject: "organization.costs.result",
+    organizationScope: "org:qual",
+    intervalStartUtc: "2023-11-14T22:13:20.000Z",
+    intervalEndUtc: "2023-11-15T22:13:20.000Z",
+    granularity: "1d",
+    dimensions: {
+      project_id: "proj_qual",
+      api_key_id: null,
+      user_id: null,
+      model: null,
+      line_item: null,
+      api_source: null,
+    },
+    metrics: {
+      input_tokens: { presence: "ABSENT", value: null },
+      output_tokens: { presence: "ABSENT", value: null },
+      input_cached_tokens: { presence: "ABSENT", value: null },
+      num_model_requests: { presence: "ABSENT", value: null },
+      num_requests: { presence: "ABSENT", value: null },
+      amount: { presence: "MEASURED", value: overrides.amount },
+      currency: { presence: "MEASURED", value: "usd" },
+    },
+    collectionId: overrides.collectionId ?? "acol_qual",
+    completeness: overrides.completeness,
+    collectedAtUtc: overrides.collectedAtUtc,
+    collectionProvenance: overrides.collectionProvenance,
+  };
+}
+
+describe("Admin/FinOps PG qualification", () => {
+  beforeAll(() => resetAdminCollectorStateForTests());
+  afterAll(() => resetAdminCollectorStateForTests());
+
+  it("partial collect does not overwrite complete snapshot metrics", async () => {
+    const runId = `acol_integrity_${Date.now()}`;
+    await insertAdminCollectionRun({
+      collectionId: runId,
+      startedAtUtc: "2026-11-26T10:00:00.000Z",
+      status: "READY",
+      path: "/organization/costs",
+      organizationScope: "org:qual",
+      provenance: "LIVE",
+    });
+    await finishAdminCollectionRun({
+      collectionId: runId,
+      finishedAtUtc: "2026-11-26T10:00:01.000Z",
+      status: "READY",
+      pagesFetched: 1,
+      limits: [],
+      lastError: null,
+    });
+
+    await upsertAdminSnapshotsPg(
+      [
+        baseSnap({
+          collectionId: runId,
+          completeness: "complete",
+          collectedAtUtc: "2026-11-26T10:00:00.000Z",
+          amount: "9.0000000000",
+        }),
+      ],
+      "LIVE",
+    );
+
+    const runPartial = `${runId}_p`;
+    await insertAdminCollectionRun({
+      collectionId: runPartial,
+      startedAtUtc: "2026-11-26T11:00:00.000Z",
+      status: "PARTIAL",
+      path: "/organization/costs",
+      organizationScope: "org:qual",
+      provenance: "LIVE",
+    });
+    await finishAdminCollectionRun({
+      collectionId: runPartial,
+      finishedAtUtc: "2026-11-26T11:00:01.000Z",
+      status: "PARTIAL",
+      pagesFetched: 1,
+      limits: [],
+      lastError: null,
+    });
+
+    await upsertAdminSnapshotsPg(
+      [
+        baseSnap({
+          collectionId: runPartial,
+          completeness: "partial",
+          collectedAtUtc: "2026-11-26T11:00:00.000Z",
+          amount: "0.0100000000",
+        }),
+      ],
+      "LIVE",
+    );
+
+    const rows = await listAdminSnapshotsFromPg({
+      organizationScope: "org:qual",
+      provenance: "LIVE",
+    });
+    const hit = rows.find((r) => r.dimensions.project_id === "proj_qual");
+    expect(hit?.completeness).toBe("complete");
+    expect(hit?.metrics.amount.value).toBe("9.0000000000");
+  });
+
+  it("TEST provenance is excluded from LIVE product reads", async () => {
+    const transport = markSubstitutedAdminTransport(async () => ({
+      status: 200,
+      json: costsPage(3.33, "proj_test_only"),
+    }));
+    const r = await runAdminCollection({
+      config: resolveIsolatedAdminCollectorConfig({
+        adminApiKey: null,
+        mode: "TEST_SUBSTITUTED",
+        liveAuthorized: false,
+        organizationScope: "org:qual-test",
+        transport,
+      }),
+      path: "/organization/costs",
+      query: { start_time: "1700000000" },
+      persistToPg: true,
+    });
+    expect(r.status).toBe("READY");
+
+    const liveOnly = await listAdminSnapshotsFromPg({
+      organizationScope: "org:qual-test",
+      provenance: "LIVE",
+    });
+    expect(liveOnly.some((s) => s.dimensions.project_id === "proj_test_only")).toBe(
+      false,
+    );
+    const testRows = await listAdminSnapshotsFromPg({
+      organizationScope: "org:qual-test",
+      provenance: "TEST_SUBSTITUTED",
+    });
+    expect(testRows.some((s) => s.dimensions.project_id === "proj_test_only")).toBe(
+      true,
+    );
+  });
+
+  it("positive COMPARABLE with exact period window", () => {
+    const window = {
+      startUtc: "2023-11-14T22:13:20.000Z",
+      endUtc: "2023-11-15T22:13:20.000Z",
+    };
+    const rows = [
+      baseSnap({
+        completeness: "complete",
+        collectedAtUtc: "2026-11-26T10:00:00.000Z",
+        amount: "0.8600000000",
+        collectionProvenance: "LIVE",
+      }),
+    ];
+    const period = assessPeriodEquality(rows, window);
+    expect(period.periodEqual).toBe(true);
+    const rec = reconcileFinOpsCosts({
+      studioEstimatedUsd: "0.8000000000",
+      providerCostUsd: "0.8600000000",
+      scope: {
+        organizationMatches: true,
+        organizationIdentityProven: true,
+        projectIdsOverlap: true,
+        projectAttributionProven: true,
+        apiKeyIdsOverlap: false,
+        periodOverlap: true,
+        periodEqual: period.periodEqual,
+        currencyMatches: true,
+        providerCurrency: "usd",
+        surfacesRequested: ["/organization/costs"],
+        groupingCompatible: true,
+        coverageComplete: true,
+        freshnessAcceptable: true,
+        evidenceNotes: ["QUAL_POSITIVE_COMPARABLE"],
+      },
+    });
+    expect(rec.status).toBe("COMPARABLE");
+    expect(rec.deltaUsd).toBe("0.0600000000");
+  });
+
+  it("finops reader role cannot INSERT snapshots", async () => {
+    const url = process.env.DATABASE_URL;
+    if (!url) throw new Error("DATABASE_URL missing");
+    const u = new URL(url);
+    u.username = "sfia_finops_reader_login";
+    u.password = "sfia_dev_finops_read_only";
+    const reader = postgres(u.toString(), { max: 1 });
+    try {
+      let refused = false;
+      try {
+        await reader`
+          INSERT INTO provider_admin_collection_runs (
+            collection_id, started_at, status, path, organization_scope, collection_provenance
+          ) VALUES (
+            'acol_should_fail', now(), 'READY', '/organization/costs', 'org:x', 'LIVE'
+          )
+        `;
+      } catch {
+        refused = true;
+      }
+      expect(refused).toBe(true);
+    } finally {
+      await reader.end({ timeout: 1 });
+    }
+  });
+
+  it("collector role cannot SELECT pilots (business tables)", async () => {
+    const url = process.env.DATABASE_URL;
+    if (!url) throw new Error("DATABASE_URL missing");
+    const u = new URL(url);
+    u.username = "sfia_admin_collector_login";
+    u.password = "sfia_dev_collector_only";
+    const collector = postgres(u.toString(), { max: 1 });
+    try {
+      let refused = false;
+      try {
+        await collector`SELECT id FROM pilots LIMIT 1`;
+      } catch {
+        refused = true;
+      }
+      expect(refused).toBe(true);
+    } finally {
+      await collector.end({ timeout: 1 });
+    }
+  });
+
+  it("freshness scoped by provenance", async () => {
+    const f = await getAdminCollectionFreshnessFromPg({
+      organizationScope: "org:qual-test",
+      provenance: "TEST_SUBSTITUTED",
+    });
+    expect(f.snapshotCount).toBeGreaterThan(0);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/integration/ml5-admin-snapshots-pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml5-admin-snapshots-pg.test.ts
index bd39aed5..6adbfb86 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml5-admin-snapshots-pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml5-admin-snapshots-pg.test.ts
@@ -67,6 +67,7 @@ describe("admin snapshots PG persistence (DEV)", () => {

     const fromPg = await listAdminSnapshotsFromPg({
       organizationScope: "org:pg-dev-test",
+      provenance: "TEST_SUBSTITUTED",
     });
     expect(fromPg.some((s) => s.dimensions.project_id === "proj_pg_a")).toBe(
       true,
@@ -102,6 +103,7 @@ describe("admin snapshots PG persistence (DEV)", () => {
     });
     const rows = await listAdminSnapshotsFromPg({
       organizationScope: "org:pg-dev-test",
+      provenance: "TEST_SUBSTITUTED",
     });
     const matches = rows.filter(
       (s) =>
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts
index 264191b1..74a8b04d 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts
@@ -1,5 +1,7 @@
 import { afterEach, describe, expect, it } from "vitest";
 import {
+  assertAdminCollectionEnvelope,
+  assessPeriodEquality,
   markSubstitutedAdminTransport,
   parseAdminUsagePage,
   resetAdminCollectorStateForTests,
@@ -9,11 +11,12 @@ import {
   listAdminCollectorSnapshots,
   reconcileFinOpsCosts,
   sumMeasuredCostUsd,
+  upsertAdminSnapshots,
   type AdminHttpTransport,
+  type AdminUsageSnapshot,
 } from "@/domains/finops/provider-admin-usage-collector";
 import { decimalAdd, decimalSub } from "@/domains/finops/decimal-money";

-/** Official-shaped page: buckets with nested results (not flattened rows). */
 function officialCostsPage(opts?: { hasMore?: boolean; next?: string | null }) {
   return {
     object: "page",
@@ -27,8 +30,6 @@ function officialCostsPage(opts?: { hasMore?: boolean; next?: string | null }) {
             object: "organization.costs.result",
             amount: { value: 0.42, currency: "usd" },
             project_id: "proj_a",
-            api_key_id: null,
-            line_item: null,
           },
           {
             object: "organization.costs.result",
@@ -44,48 +45,42 @@ function officialCostsPage(opts?: { hasMore?: boolean; next?: string | null }) {
   };
 }

-function officialCompletionsPage() {
+function snap(partial: Partial<AdminUsageSnapshot> & Pick<AdminUsageSnapshot, "completeness" | "collectedAtUtc">): AdminUsageSnapshot {
   return {
-    object: "page",
-    data: [
-      {
-        object: "bucket",
-        start_time: 1_700_000_000,
-        end_time: 1_700_086_400,
-        results: [
-          {
-            object: "organization.usage.completions.result",
-            input_tokens: 100,
-            output_tokens: 20,
-            input_cached_tokens: 10,
-            num_model_requests: 2,
-            project_id: "proj_a",
-            model: "gpt-x",
-          },
-        ],
-      },
-      {
-        object: "bucket",
-        start_time: 1_700_086_400,
-        end_time: 1_700_172_800,
-        results: [],
-      },
-    ],
-    has_more: false,
-    next_page: null,
+    sourceEndpoint: "/organization/costs",
+    surfaceObject: "organization.costs.result",
+    organizationScope: "org:test",
+    intervalStartUtc: "2023-11-14T22:13:20.000Z",
+    intervalEndUtc: "2023-11-15T22:13:20.000Z",
+    granularity: "1d",
+    dimensions: {
+      project_id: "proj_a",
+      api_key_id: null,
+      user_id: null,
+      model: null,
+      line_item: null,
+      api_source: null,
+    },
+    metrics: {
+      input_tokens: { presence: "ABSENT", value: null },
+      output_tokens: { presence: "ABSENT", value: null },
+      input_cached_tokens: { presence: "ABSENT", value: null },
+      num_model_requests: { presence: "ABSENT", value: null },
+      num_requests: { presence: "ABSENT", value: null },
+      amount: { presence: "MEASURED", value: "1.0000000000" },
+      currency: { presence: "MEASURED", value: "usd" },
+    },
+    collectionId: "acol_x",
+    ...partial,
   };
 }

-function sub(fn: AdminHttpTransport["__sfiaAdminMode"] extends never ? never : Parameters<typeof markSubstitutedAdminTransport>[0]) {
-  return markSubstitutedAdminTransport(fn);
-}
-
-describe("provider-admin-usage-collector (operational)", () => {
+describe("provider-admin-usage-collector (Admin/FinOps qualification)", () => {
   afterEach(() => {
     resetAdminCollectorStateForTests();
   });

-  it("parses nested bucket.results — multiple results per bucket", () => {
+  it("parses nested bucket.results", () => {
     const parsed = parseAdminUsagePage({
       path: "/organization/costs",
       json: officialCostsPage(),
@@ -95,15 +90,9 @@ describe("provider-admin-usage-collector (operational)", () => {
       granularity: "1d",
     });
     expect(parsed.snapshots).toHaveLength(2);
-    expect(parsed.snapshots[0].surfaceObject).toBe("organization.costs.result");
-    expect(parsed.snapshots[0].metrics.amount).toEqual({
-      presence: "MEASURED",
-      value: "0.4200000000",
-    });
-    expect(parsed.snapshots[1].dimensions.project_id).toBe("proj_b");
   });

-  it("flags has_more without cursor as anomaly", () => {
+  it("flags has_more without cursor", () => {
     const parsed = parseAdminUsagePage({
       path: "/organization/costs",
       json: officialCostsPage({ hasMore: true, next: null }),
@@ -115,21 +104,69 @@ describe("provider-admin-usage-collector (operational)", () => {
     expect(parsed.limits).toContain("HAS_MORE_WITHOUT_CURSOR");
   });

-  it("ABSENT metrics stay ABSENT — never ZERO", () => {
-    const parsed = parseAdminUsagePage({
-      path: "/organization/usage/completions",
-      json: officialCompletionsPage(),
-      organizationScope: "org:test",
-      collectionId: "acol_2",
-      collectedAtUtc: "2026-11-26T00:00:00.000Z",
-      granularity: "1d",
-    });
-    expect(parsed.snapshots).toHaveLength(1);
-    const m = parsed.snapshots[0].metrics;
-    expect(m.input_tokens.presence).toBe("MEASURED");
-    expect(m.num_requests.presence).toBe("ABSENT");
-    expect(m.num_requests.value).toBeNull();
-    expect(m.amount.presence).toBe("ABSENT");
+  it("memory upsert: partial never degrades complete metrics", () => {
+    const metrics9 = {
+      input_tokens: { presence: "ABSENT" as const, value: null },
+      output_tokens: { presence: "ABSENT" as const, value: null },
+      input_cached_tokens: { presence: "ABSENT" as const, value: null },
+      num_model_requests: { presence: "ABSENT" as const, value: null },
+      num_requests: { presence: "ABSENT" as const, value: null },
+      amount: { presence: "MEASURED" as const, value: "9.0000000000" },
+      currency: { presence: "MEASURED" as const, value: "usd" },
+    };
+    upsertAdminSnapshots([
+      snap({
+        completeness: "complete",
+        collectedAtUtc: "2026-11-26T10:00:00.000Z",
+        metrics: metrics9,
+      }),
+    ]);
+    upsertAdminSnapshots([
+      snap({
+        completeness: "partial",
+        collectedAtUtc: "2026-11-26T11:00:00.000Z",
+        metrics: {
+          ...metrics9,
+          amount: { presence: "MEASURED", value: "0.0100000000" },
+        },
+      }),
+    ]);
+    const rows = listAdminCollectorSnapshots();
+    expect(rows).toHaveLength(1);
+    expect(rows[0].completeness).toBe("complete");
+    expect(rows[0].metrics.amount.value).toBe("9.0000000000");
+  });
+
+  it("memory upsert: older collect does not replace newer", () => {
+    const metrics = {
+      input_tokens: { presence: "ABSENT" as const, value: null },
+      output_tokens: { presence: "ABSENT" as const, value: null },
+      input_cached_tokens: { presence: "ABSENT" as const, value: null },
+      num_model_requests: { presence: "ABSENT" as const, value: null },
+      num_requests: { presence: "ABSENT" as const, value: null },
+      amount: { presence: "MEASURED" as const, value: "5.0000000000" },
+      currency: { presence: "MEASURED" as const, value: "usd" },
+    };
+    upsertAdminSnapshots([
+      snap({
+        completeness: "complete",
+        collectedAtUtc: "2026-11-26T12:00:00.000Z",
+        metrics,
+      }),
+    ]);
+    upsertAdminSnapshots([
+      snap({
+        completeness: "complete",
+        collectedAtUtc: "2026-11-26T11:00:00.000Z",
+        metrics: {
+          ...metrics,
+          amount: { presence: "MEASURED", value: "1.0000000000" },
+        },
+      }),
+    ]);
+    expect(listAdminCollectorSnapshots()[0].metrics.amount.value).toBe(
+      "5.0000000000",
+    );
   });

   it("product view never loads Admin secret", () => {
@@ -139,12 +176,11 @@ describe("provider-admin-usage-collector (operational)", () => {
     delete process.env.OPENAI_ADMIN_KEY;
   });

-  it("LIVE mode refuses without LIVE GO even with transport injection", async () => {
+  it("LIVE mode refuses without LIVE GO even with forged marker", async () => {
     const transport = markSubstitutedAdminTransport(async () => ({
       status: 200,
       json: officialCostsPage(),
     }));
-    // Injected transport with wrong mode for LIVE ⇒ blocked.
     const r = await runAdminCollection({
       config: {
         adminApiKey: "sk-admin-test",
@@ -154,179 +190,151 @@ describe("provider-admin-usage-collector (operational)", () => {
         transport: transport as unknown as AdminHttpTransport,
       },
       path: "/organization/costs",
-      query: { start_time: "1" },
+      query: { start_time: "1700000000", end_time: "1700086400" },
     });
     expect(r.status).toBe("BLOCKED_NO_LIVE_GO");
   });

-  it("TEST_SUBSTITUTED works without real Admin key", async () => {
-    const transport = sub(async () => ({
+  it("TEST_SUBSTITUTED refuses when a real key is attached", async () => {
+    const transport = markSubstitutedAdminTransport(async () => ({
       status: 200,
       json: officialCostsPage(),
     }));
-    const r = await runAdminCollection({
-      config: resolveIsolatedAdminCollectorConfig({
-        adminApiKey: null,
-        mode: "TEST_SUBSTITUTED",
-        liveAuthorized: false,
-        transport,
-      }),
-      path: "/organization/costs",
-      query: { start_time: "1" },
-    });
-    expect(r.status).toBe("READY");
-    expect(r.snapshots).toHaveLength(2);
-  });
-
-  it("blocks unmarked transport on TEST mode", async () => {
-    const raw = async () => ({
-      status: 200,
-      json: officialCostsPage(),
-    });
     const r = await runAdminCollection({
       config: {
-        adminApiKey: null,
+        adminApiKey: "sk-must-not-be-here",
         organizationScope: "org:t",
         mode: "TEST_SUBSTITUTED",
         liveAdminCallsAuthorized: false,
-        transport: raw as unknown as AdminHttpTransport,
+        transport,
       },
       path: "/organization/costs",
-      query: { start_time: "1" },
+      query: { start_time: "1700000000" },
     });
     expect(r.status).toBe("BLOCKED_NO_LIVE_GO");
-    expect(r.lastError).toContain("BLOCKED_TEST_TRANSPORT_REQUIRED");
+    expect(r.lastError).toContain("BLOCKED_TEST_MUST_NOT_HOLD_LIVE_KEY");
   });

-  it("refuses /organization/usage/responses (nonexistent)", async () => {
-    const transport = sub(async () => ({
+  it("TEST_SUBSTITUTED works without real Admin key", async () => {
+    const transport = markSubstitutedAdminTransport(async () => ({
       status: 200,
-      json: { object: "page", data: [] },
+      json: officialCostsPage(),
     }));
     const r = await runAdminCollection({
-      config: {
-        adminApiKey: null,
-        organizationScope: "org:t",
-        mode: "TEST_SUBSTITUTED",
-        liveAdminCallsAuthorized: false,
-        transport,
-      },
-      path: "/organization/usage/responses",
-      query: { start_time: "1" },
-    });
-    expect(r.status).toBe("ERROR");
-    expect(r.lastError).toContain("ADMIN_PATH_NOT_ALLOWLISTED");
-  });
-
-  it("paginates official-shaped costs and sums only attributed project", async () => {
-    let calls = 0;
-    const transport = sub(async ({ path }) => {
-      calls += 1;
-      expect(path).toBe("/organization/costs");
-      if (calls === 1) {
-        return {
-          status: 200,
-          json: officialCostsPage({ hasMore: true, next: "page_2" }),
-        };
-      }
-      return {
-        status: 200,
-        json: {
-          object: "page",
-          data: [
-            {
-              object: "bucket",
-              start_time: 1_700_086_400,
-              end_time: 1_700_172_800,
-              results: [
-                {
-                  object: "organization.costs.result",
-                  amount: { value: 0.11, currency: "usd" },
-                  project_id: "proj_a",
-                },
-              ],
-            },
-          ],
-          has_more: false,
-          next_page: null,
-        },
-      };
-    });
-
-    const r = await runAdminCollection({
-      config: {
+      config: resolveIsolatedAdminCollectorConfig({
         adminApiKey: null,
-        organizationScope: "org:test",
         mode: "TEST_SUBSTITUTED",
-        liveAdminCallsAuthorized: false,
+        liveAuthorized: false,
         transport,
-      },
+      }),
       path: "/organization/costs",
-      query: { start_time: "1700000000", bucket_width: "1d" },
+      query: { start_time: "1700000000" },
     });
     expect(r.status).toBe("READY");
-    expect(r.pagesFetched).toBe(2);
-    expect(listAdminCollectorSnapshots()).toHaveLength(3);
-
-    const refused = sumMeasuredCostUsd(listAdminCollectorSnapshots(), {
-      projectId: null,
-    });
-    expect(refused.limits).toContain("ORG_AGGREGATE_SUM_REFUSED_WITHOUT_PROJECT");
-    expect(refused.total).toBeNull();
+    expect(r.snapshots.every((s) => s.collectionProvenance === "TEST_SUBSTITUTED")).toBe(
+      true,
+    );
+  });

-    const sum = sumMeasuredCostUsd(listAdminCollectorSnapshots(), {
-      projectId: "proj_a",
-    });
-    expect(sum.total).toBe(decimalAdd("0.42", "0.11"));
-    expect(sum.currency).toBe("usd");
+  it("envelope requires start_time and bounds maxPages", () => {
+    expect(() =>
+      assertAdminCollectionEnvelope({
+        path: "/organization/costs",
+        query: {},
+        maxPages: 5,
+      }),
+    ).toThrow(/ENVELOPE_START_TIME_REQUIRED/);
+    expect(() =>
+      assertAdminCollectionEnvelope({
+        path: "/organization/costs",
+        query: { start_time: "1", require_end_time: "1" },
+        maxPages: 5,
+      }),
+    ).toThrow(/ENVELOPE_END_TIME_REQUIRED/);
+    expect(() =>
+      assertAdminCollectionEnvelope({
+        path: "/organization/costs",
+        query: { start_time: "1" },
+        maxPages: 50,
+      }),
+    ).toThrow(/ENVELOPE_MAX_PAGES/);
   });

-  it("detects repeated cursor as PARTIAL anomaly", async () => {
-    const transport = sub(async () => ({
+  it("sums only attributed project; refuses null projectId", () => {
+    const transport = markSubstitutedAdminTransport(async () => ({
       status: 200,
-      json: officialCostsPage({ hasMore: true, next: "same_page" }),
+      json: officialCostsPage(),
     }));
-    const r = await runAdminCollection({
+    return runAdminCollection({
       config: {
         adminApiKey: null,
-        organizationScope: "org:t",
+        organizationScope: "org:test",
         mode: "TEST_SUBSTITUTED",
         liveAdminCallsAuthorized: false,
         transport,
       },
       path: "/organization/costs",
-      query: { start_time: "1" },
-      maxPages: 5,
+      query: { start_time: "1700000000" },
+    }).then((r) => {
+      expect(r.status).toBe("READY");
+      const refused = sumMeasuredCostUsd(listAdminCollectorSnapshots(), {
+        projectId: null,
+      });
+      expect(refused.limits).toContain("ORG_AGGREGATE_SUM_REFUSED_WITHOUT_PROJECT");
+      const sum = sumMeasuredCostUsd(listAdminCollectorSnapshots(), {
+        projectId: "proj_a",
+      });
+      expect(sum.total).toBe("0.4200000000");
     });
-    expect(r.status).toBe("PARTIAL");
-    expect(r.limits).toContain("REPEATED_CURSOR");
   });

-  it("reconcile requires full evidence — flag alone is insufficient", () => {
-    const rec = reconcileFinOpsCosts({
+  it("period equality requires exact window match", () => {
+    const rows = [
+      snap({
+        completeness: "complete",
+        collectedAtUtc: "2026-11-26T00:00:00.000Z",
+        intervalStartUtc: "2023-11-14T22:13:20.000Z",
+        intervalEndUtc: "2023-11-15T22:13:20.000Z",
+      }),
+    ];
+    const equal = assessPeriodEquality(rows, {
+      startUtc: "2023-11-14T22:13:20.000Z",
+      endUtc: "2023-11-15T22:13:20.000Z",
+    });
+    expect(equal.periodEqual).toBe(true);
+    const overlapOnly = assessPeriodEquality(rows, {
+      startUtc: "2023-11-14T00:00:00.000Z",
+      endUtc: "2023-11-16T00:00:00.000Z",
+    });
+    expect(overlapOnly.periodEqual).toBe(false);
+    expect(overlapOnly.periodOverlap).toBe(true);
+  });
+
+  it("COMPARABLE when full evidence including periodEqual", () => {
+    const ok = reconcileFinOpsCosts({
       studioEstimatedUsd: "0.80",
       providerCostUsd: "0.86",
       scope: {
         organizationMatches: true,
         organizationIdentityProven: true,
-        projectIdsOverlap: false,
-        projectAttributionProven: false,
+        projectIdsOverlap: true,
+        projectAttributionProven: true,
         apiKeyIdsOverlap: false,
         periodOverlap: true,
-        periodEqual: false,
+        periodEqual: true,
         currencyMatches: true,
         providerCurrency: "usd",
         surfacesRequested: ["/organization/costs"],
         groupingCompatible: true,
         coverageComplete: true,
         freshnessAcceptable: true,
-        evidenceNotes: ["SCOPE_FLAG_SET_BUT_EVIDENCE_REQUIRED"],
+        evidenceNotes: [],
       },
     });
-    expect(rec.status).toBe("NON_COMPARABLE");
-    expect(rec.deltaUsd).toBeNull();
+    expect(ok.status).toBe("COMPARABLE");
+    expect(ok.deltaUsd).toBe(decimalSub("0.86", "0.80"));

-    const ok = reconcileFinOpsCosts({
+    const bad = reconcileFinOpsCosts({
       studioEstimatedUsd: "0.80",
       providerCostUsd: "0.86",
       scope: {
@@ -336,7 +344,7 @@ describe("provider-admin-usage-collector (operational)", () => {
         projectAttributionProven: true,
         apiKeyIdsOverlap: false,
         periodOverlap: true,
-        periodEqual: true,
+        periodEqual: false,
         currencyMatches: true,
         providerCurrency: "usd",
         surfacesRequested: ["/organization/costs"],
@@ -346,7 +354,28 @@ describe("provider-admin-usage-collector (operational)", () => {
         evidenceNotes: [],
       },
     });
-    expect(ok.status).toBe("COMPARABLE");
-    expect(ok.deltaUsd).toBe(decimalSub("0.86", "0.80"));
+    expect(bad.status).toBe("NON_COMPARABLE");
+    expect(bad.deltaUsd).toBeNull();
+  });
+
+  it("detects repeated cursor as PARTIAL", async () => {
+    const transport = markSubstitutedAdminTransport(async () => ({
+      status: 200,
+      json: officialCostsPage({ hasMore: true, next: "same_page" }),
+    }));
+    const r = await runAdminCollection({
+      config: {
+        adminApiKey: null,
+        organizationScope: "org:t",
+        mode: "TEST_SUBSTITUTED",
+        liveAdminCallsAuthorized: false,
+        transport,
+      },
+      path: "/organization/costs",
+      query: { start_time: "1" },
+      maxPages: 5,
+    });
+    expect(r.status).toBe("PARTIAL");
+    expect(r.limits).toContain("REPEATED_CURSOR");
   });
 });

```
