-- ML5 C15 — D3 cognitive work persistence (Option C).
-- Dedicated from conversation turn identity. Additive DEV migration.
-- RECETTE/STABLE untouched. No destructive rewrite of preparations.projection_json.

CREATE TABLE IF NOT EXISTS cognitive_works (
  id text PRIMARY KEY,
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  conversation_id text REFERENCES conversations(id),
  status text NOT NULL,
  revision integer NOT NULL DEFAULT 1,
  owner_token text,
  lease_until timestamptz,
  objective text NOT NULL DEFAULT '',
  expected_outcome text NOT NULL DEFAULT '',
  state_json text NOT NULL DEFAULT '{}',
  resources_json text NOT NULL DEFAULT '{}',
  production_json text NOT NULL DEFAULT '{}',
  interrupt_cause text,
  parent_work_id text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS cognitive_works_prep_idx
  ON cognitive_works (preparation_id, updated_at DESC);
CREATE INDEX IF NOT EXISTS cognitive_works_pilot_status_idx
  ON cognitive_works (owner_pilot_id, status);
CREATE INDEX IF NOT EXISTS cognitive_works_project_idx
  ON cognitive_works (project_id)
  WHERE project_id IS NOT NULL;

CREATE TABLE IF NOT EXISTS cognitive_work_checkpoints (
  id text PRIMARY KEY,
  work_id text NOT NULL REFERENCES cognitive_works(id),
  revision integer NOT NULL,
  parent_revision integer,
  cause text NOT NULL,
  turn_command_id text,
  generation_id text,
  payload_json text NOT NULL DEFAULT '{}',
  resources_json text NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (work_id, revision)
);

CREATE INDEX IF NOT EXISTS cognitive_work_checkpoints_work_idx
  ON cognitive_work_checkpoints (work_id, revision DESC);
