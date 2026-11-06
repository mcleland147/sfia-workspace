-- ML3 D5/D6 — pilotage, cycles, method, human decisions, restrictions, business commands.
-- Additive and re-runnable from 006_ml2_turn_owner_token.
-- Does not create a cycle or a method when a project is created.
-- No PARTIAL: CLOSE+OPEN of an internal transition commit together or not at all.
-- DEV lane only until a later promotion gate. Never apply to RECETTE/STABLE from this script alone.

CREATE TABLE IF NOT EXISTS human_decisions (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  pilot_id text NOT NULL REFERENCES pilots(id),
  source_kind text NOT NULL,
  source_ref text NOT NULL,
  kind text NOT NULL,
  object_ref text NOT NULL DEFAULT '',
  scope text NOT NULL DEFAULT 'PROJECT',
  statement text NOT NULL DEFAULT '',
  state text NOT NULL,
  effect_conditions text,
  supersedes_decision_id text REFERENCES human_decisions(id),
  revokes_decision_id text REFERENCES human_decisions(id),
  lifts_restriction_id text,
  effective_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS human_decisions_project_idx ON human_decisions(project_id);

CREATE TABLE IF NOT EXISTS trajectory_revisions (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  revision_number integer NOT NULL,
  status text NOT NULL,
  orientation text NOT NULL,
  source_kind text NOT NULL,
  source_ref text NOT NULL DEFAULT '',
  decision_id text REFERENCES human_decisions(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT trajectory_revisions_project_rev_uidx UNIQUE (project_id, revision_number)
);
CREATE INDEX IF NOT EXISTS trajectory_revisions_project_idx ON trajectory_revisions(project_id);

CREATE TABLE IF NOT EXISTS project_pilotage_state (
  project_id text PRIMARY KEY REFERENCES projects(id),
  revision integer NOT NULL DEFAULT 0,
  current_trajectory_revision_id text REFERENCES trajectory_revisions(id),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS project_cycles (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  cycle_type text NOT NULL,
  objective text NOT NULL,
  status text NOT NULL,
  revision integer NOT NULL DEFAULT 1,
  opened_at timestamptz NOT NULL DEFAULT now(),
  closed_at timestamptz,
  open_decision_id text REFERENCES human_decisions(id),
  close_decision_id text REFERENCES human_decisions(id),
  cki_id text,
  cki_pinned_version text,
  cki_content_digest text,
  cki_manifest_ref text,
  cki_pin_origin text,
  balance_note text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS project_cycles_one_active_uidx
  ON project_cycles(project_id) WHERE status = 'ACTIVE';
CREATE INDEX IF NOT EXISTS project_cycles_project_idx ON project_cycles(project_id);

CREATE TABLE IF NOT EXISTS method_applications (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  method_ref text NOT NULL,
  method_version text NOT NULL,
  scope text NOT NULL DEFAULT 'PROJECT',
  decision_id text NOT NULL REFERENCES human_decisions(id),
  effective_from timestamptz NOT NULL DEFAULT now(),
  effective_until timestamptz,
  close_reason text,
  is_current boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS method_applications_current_uidx
  ON method_applications(project_id, scope) WHERE is_current = true;
CREATE INDEX IF NOT EXISTS method_applications_project_idx ON method_applications(project_id);

CREATE TABLE IF NOT EXISTS governance_restrictions (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  target_kind text NOT NULL,
  target_ref text NOT NULL DEFAULT '*',
  effect text NOT NULL DEFAULT 'BLOCK',
  origin_decision_id text NOT NULL REFERENCES human_decisions(id),
  lift_decision_id text REFERENCES human_decisions(id),
  status text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  lifted_at timestamptz
);
CREATE INDEX IF NOT EXISTS governance_restrictions_project_idx
  ON governance_restrictions(project_id, status);

CREATE TABLE IF NOT EXISTS business_commands (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  actor_pilot_id text NOT NULL REFERENCES pilots(id),
  client_command_key text NOT NULL,
  fingerprint text NOT NULL,
  source_kind text NOT NULL,
  source_ref text NOT NULL,
  source_action_key text NOT NULL,
  operation text NOT NULL,
  expected_revision integer NOT NULL,
  state_revision integer,
  status text NOT NULL,
  result_json text NOT NULL DEFAULT '{}',
  decision_id text REFERENCES human_decisions(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS business_commands_client_key_uidx
  ON business_commands(project_id, actor_pilot_id, client_command_key);
CREATE UNIQUE INDEX IF NOT EXISTS business_commands_human_intent_uidx
  ON business_commands(project_id, source_kind, source_ref, source_action_key);
CREATE INDEX IF NOT EXISTS business_commands_project_idx ON business_commands(project_id);

CREATE TABLE IF NOT EXISTS business_command_effects (
  id text PRIMARY KEY,
  command_id text NOT NULL REFERENCES business_commands(id),
  project_id text NOT NULL REFERENCES projects(id),
  effect_kind text NOT NULL,
  target_ref text NOT NULL,
  outcome text NOT NULL,
  ordinal integer NOT NULL,
  detail_json text NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS business_command_effects_command_ordinal_uidx
  ON business_command_effects(command_id, ordinal);
CREATE INDEX IF NOT EXISTS business_command_effects_command_idx
  ON business_command_effects(command_id);

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'human_decisions_lifts_restriction_fkey') THEN
    ALTER TABLE human_decisions
      ADD CONSTRAINT human_decisions_lifts_restriction_fkey
      FOREIGN KEY (lifts_restriction_id) REFERENCES governance_restrictions(id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'human_decisions_state_chk') THEN
    ALTER TABLE human_decisions
      ADD CONSTRAINT human_decisions_state_chk
      CHECK (state IN ('APPLICABLE', 'REVISED', 'REVOKED', 'SUPERSEDED'));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'trajectory_revisions_status_chk') THEN
    ALTER TABLE trajectory_revisions
      ADD CONSTRAINT trajectory_revisions_status_chk
      CHECK (status IN ('PROPOSED', 'RETAINED', 'SUPERSEDED'));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'project_cycles_status_chk') THEN
    ALTER TABLE project_cycles
      ADD CONSTRAINT project_cycles_status_chk
      CHECK (status IN ('ACTIVE', 'CLOSED'));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'governance_restrictions_status_chk') THEN
    ALTER TABLE governance_restrictions
      ADD CONSTRAINT governance_restrictions_status_chk
      CHECK (status IN ('ACTIVE', 'LIFTED'));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'business_commands_status_chk') THEN
    ALTER TABLE business_commands
      ADD CONSTRAINT business_commands_status_chk
      CHECK (status IN ('APPLIED', 'REJECTED'));
  END IF;
END $$;
