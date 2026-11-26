-- ML1 — provider Admin Usage/Costs snapshots (DEV additive).
-- Distinct from provider_usage_observations (Studio attribution ledger).
-- RECETTE/STABLE untouched. No DROP/purge.

CREATE TABLE IF NOT EXISTS provider_admin_collection_runs (
  collection_id text PRIMARY KEY,
  started_at timestamptz NOT NULL,
  finished_at timestamptz,
  status text NOT NULL,
  pages_fetched integer NOT NULL DEFAULT 0,
  path text NOT NULL,
  organization_scope text NOT NULL,
  limits_json jsonb NOT NULL DEFAULT '[]'::jsonb,
  last_error text
);

CREATE TABLE IF NOT EXISTS provider_admin_usage_snapshots (
  id uuid PRIMARY KEY,
  collected_at timestamptz NOT NULL,
  collection_id text NOT NULL REFERENCES provider_admin_collection_runs(collection_id),
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

-- PG16: NULLS NOT DISTINCT so nullable dimension columns collide correctly.
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

CREATE INDEX IF NOT EXISTS provider_admin_usage_snapshots_org_interval_idx
  ON provider_admin_usage_snapshots (organization_scope, interval_start_utc DESC);

CREATE INDEX IF NOT EXISTS provider_admin_usage_snapshots_collection_idx
  ON provider_admin_usage_snapshots (collection_id);

-- DEV role intent (additive, NOLOGIN). Product uses existing sfia_next_dev.
-- Collector write vs FinOps read — no Admin OpenAI authority transferred.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector') THEN
    CREATE ROLE sfia_admin_collector NOLOGIN;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader') THEN
    CREATE ROLE sfia_finops_reader NOLOGIN;
  END IF;
END$$;

GRANT SELECT, INSERT, UPDATE ON provider_admin_collection_runs TO sfia_admin_collector;
GRANT SELECT, INSERT, UPDATE ON provider_admin_usage_snapshots TO sfia_admin_collector;
GRANT SELECT ON provider_admin_collection_runs TO sfia_finops_reader;
GRANT SELECT ON provider_admin_usage_snapshots TO sfia_finops_reader;
