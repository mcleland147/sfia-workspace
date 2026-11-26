# Migration candidate — provider Admin Usage/Costs snapshots (corrigée)

| Champ | Valeur |
|---|---|
| Statut | **APPLIED DEV ONLY** — `023_provider_admin_usage_snapshots.sql` · PG 16.16 |
| Gate | **G-PROVIDER-SNAPSHOT-MIGRATION — LEVÉ DEV** (RECETTE/STABLE non touchés) |
| Motif | Persistance idempotente des *results* fournisseur (pas un second ledger métier) |
| Backup | `.tmp-sfia-review/pg-backup/sfia_next_dev_pre_023.dump` |

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
