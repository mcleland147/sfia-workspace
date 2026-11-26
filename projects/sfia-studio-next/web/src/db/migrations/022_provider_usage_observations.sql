-- ML5 E03 — durable FinOps provider usage observations (DEV additive).
-- Operational rollups remain in cognitive_works.resources_json; this table is the ledger.
-- RECETTE/STABLE untouched. No DROP/purge.

CREATE TABLE IF NOT EXISTS provider_usage_observations (
  id uuid PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  lane text,
  scope_id text,
  owner_pilot_id text REFERENCES pilots(id),
  project_id text REFERENCES projects(id),
  preparation_id text REFERENCES preparations(id),
  conversation_id text REFERENCES conversations(id),
  turn_id text REFERENCES conversation_turn_commands(id),
  cognitive_work_id text REFERENCES cognitive_works(id),
  segment_index integer,
  generation_id text,
  operation text,
  attempt_id text,
  model_requested text,
  model_applied text,
  effort_requested text,
  effort_applied text,
  input_tokens bigint,
  cached_input_tokens bigint,
  output_tokens bigint,
  reasoning_tokens bigint,
  total_tokens bigint,
  provider_requests integer,
  duration_ms integer,
  tariff_version text NOT NULL,
  estimated_cost_usd numeric(20, 10),
  cost_coverage text NOT NULL,
  status text NOT NULL,
  granularity text NOT NULL,
  provider_response_id text,
  idempotency_key text NOT NULL UNIQUE,
  error_category text,
  limits_json jsonb NOT NULL DEFAULT '[]'::jsonb
);

CREATE INDEX IF NOT EXISTS provider_usage_observations_scope_created_idx
  ON provider_usage_observations (lane, scope_id, created_at DESC);

CREATE INDEX IF NOT EXISTS provider_usage_observations_cognitive_work_idx
  ON provider_usage_observations (cognitive_work_id)
  WHERE cognitive_work_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS provider_usage_observations_project_created_idx
  ON provider_usage_observations (project_id, created_at DESC)
  WHERE project_id IS NOT NULL;