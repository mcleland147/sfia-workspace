-- ML5 — additive persistence for technical contracts, Cursor attempts linkage, handoffs, activity.
-- Does not alter Git publication/merge semantics. Re-runnable (IF NOT EXISTS).

-- Canonical technical contract versions (D7) — distinct from Nora replyDraft.
CREATE TABLE IF NOT EXISTS technical_contracts (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  pilot_id text NOT NULL REFERENCES pilots(id),
  preparation_id text REFERENCES preparations(id),
  contract_key text NOT NULL,
  version integer NOT NULL,
  fingerprint text NOT NULL,
  status text NOT NULL,
  title text NOT NULL DEFAULT '',
  engagements_json text NOT NULL DEFAULT '{}',
  volets_json text NOT NULL DEFAULT '{}',
  instruction_text text NOT NULL,
  risks_json text NOT NULL DEFAULT '[]',
  exclusions_json text NOT NULL DEFAULT '[]',
  acceptance_json text NOT NULL DEFAULT '{}',
  executor_json text NOT NULL DEFAULT '{}',
  stop_conditions_json text NOT NULL DEFAULT '[]',
  git_scope_json text,
  source_turn_command_id text,
  supersedes_contract_id text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (project_id, contract_key, version)
);

CREATE INDEX IF NOT EXISTS technical_contracts_project_idx
  ON technical_contracts (project_id);
CREATE INDEX IF NOT EXISTS technical_contracts_fingerprint_idx
  ON technical_contracts (fingerprint);

-- Per-attempt realization handoff (D7 ingestion → D8). One immutable row per attempt.
CREATE TABLE IF NOT EXISTS realization_handoffs (
  id text PRIMARY KEY,
  attempt_id text NOT NULL REFERENCES effect_attempts(id),
  project_id text NOT NULL REFERENCES projects(id),
  pilot_id text NOT NULL REFERENCES pilots(id),
  contract_id text NOT NULL REFERENCES technical_contracts(id),
  contract_version integer NOT NULL,
  contract_fingerprint text NOT NULL,
  status text NOT NULL,
  report_markdown text,
  manifest_json text NOT NULL DEFAULT '{}',
  integrity_hash text,
  source_kind text NOT NULL DEFAULT 'CURSOR',
  limits_json text NOT NULL DEFAULT '[]',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (attempt_id)
);

CREATE INDEX IF NOT EXISTS realization_handoffs_project_idx
  ON realization_handoffs (project_id);
CREATE INDEX IF NOT EXISTS realization_handoffs_contract_idx
  ON realization_handoffs (contract_id);

-- D8 qualification snapshot per attempt (nine rubrics) — never merges with D6.
CREATE TABLE IF NOT EXISTS realization_qualifications (
  id text PRIMARY KEY,
  attempt_id text NOT NULL REFERENCES effect_attempts(id),
  handoff_id text REFERENCES realization_handoffs(id),
  project_id text NOT NULL REFERENCES projects(id),
  pilot_id text NOT NULL REFERENCES pilots(id),
  status text NOT NULL,
  rubrics_json text NOT NULL DEFAULT '{}',
  verdict text NOT NULL DEFAULT 'INDETERMINATE',
  nora_analysis_markdown text,
  nora_analysis_at timestamptz,
  limits_json text NOT NULL DEFAULT '[]',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (attempt_id)
);

CREATE INDEX IF NOT EXISTS realization_qualifications_project_idx
  ON realization_qualifications (project_id);

-- C1 activity events correlated to a conversation turn (functional, not authority).
CREATE TABLE IF NOT EXISTS nora_activity_events (
  id text PRIMARY KEY,
  conversation_id text NOT NULL REFERENCES conversations(id),
  turn_command_id text NOT NULL REFERENCES conversation_turn_commands(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  generation_id text,
  sequence integer NOT NULL,
  phase text NOT NULL,
  nature text NOT NULL,
  status text NOT NULL,
  summary text NOT NULL DEFAULT '',
  detail_json text NOT NULL DEFAULT '{}',
  source_ref text,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (turn_command_id, sequence)
);

CREATE INDEX IF NOT EXISTS nora_activity_events_turn_idx
  ON nora_activity_events (turn_command_id);
CREATE INDEX IF NOT EXISTS nora_activity_events_conv_idx
  ON nora_activity_events (conversation_id);
