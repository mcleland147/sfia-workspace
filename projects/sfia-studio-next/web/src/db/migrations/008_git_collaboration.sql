-- ML4 — Git collaboration integrations, project links, D7 attempts, observed facts.
-- Additive CREATE TABLE IF NOT EXISTS matching Drizzle schema 008.
-- DEV only, never RECETTE/STABLE from this script alone.
-- Re-runnable.

CREATE TABLE IF NOT EXISTS integration_authorizations (
  id text PRIMARY KEY,
  pilot_id text NOT NULL REFERENCES pilots(id),
  provider text NOT NULL DEFAULT 'github',
  status text NOT NULL,
  installation_id text,
  account_login text,
  metadata_json text NOT NULL DEFAULT '{}',
  connected_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS integration_authorizations_pilot_idx ON integration_authorizations(pilot_id);
CREATE INDEX IF NOT EXISTS integration_authorizations_pilot_status_idx ON integration_authorizations(pilot_id, status);

CREATE TABLE IF NOT EXISTS integration_oauth_states (
  id text PRIMARY KEY,
  pilot_id text NOT NULL REFERENCES pilots(id),
  state_token text NOT NULL,
  return_path text NOT NULL DEFAULT '/settings/integrations',
  consumed_at timestamptz,
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS integration_oauth_states_token_uidx ON integration_oauth_states(state_token);

CREATE TABLE IF NOT EXISTS authorized_repositories (
  id text PRIMARY KEY,
  pilot_id text NOT NULL REFERENCES pilots(id),
  authorization_id text NOT NULL REFERENCES integration_authorizations(id),
  owner text NOT NULL,
  name text NOT NULL,
  full_name text NOT NULL,
  default_branch text,
  status text NOT NULL DEFAULT 'ACTIVE',
  permissions_json text NOT NULL DEFAULT '{}',
  synced_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS authorized_repositories_pilot_full_uidx ON authorized_repositories(pilot_id, full_name);
CREATE INDEX IF NOT EXISTS authorized_repositories_auth_idx ON authorized_repositories(authorization_id);

CREATE TABLE IF NOT EXISTS project_git_links (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  pilot_id text NOT NULL REFERENCES pilots(id),
  repository_id text NOT NULL REFERENCES authorized_repositories(id),
  status text NOT NULL DEFAULT 'ATTACHED',
  attached_at timestamptz NOT NULL DEFAULT now(),
  detached_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS project_git_links_project_idx ON project_git_links(project_id, status);
CREATE UNIQUE INDEX IF NOT EXISTS project_git_links_project_repo_uidx ON project_git_links(project_id, repository_id);

CREATE TABLE IF NOT EXISTS document_publication_refs (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  pilot_id text NOT NULL REFERENCES pilots(id),
  document_id text NOT NULL REFERENCES documents(id),
  revision_id text NOT NULL REFERENCES document_revisions(id),
  repository_id text NOT NULL REFERENCES authorized_repositories(id),
  target_path text NOT NULL,
  target_branch text NOT NULL,
  base_sha text,
  head_sha text,
  pr_number integer,
  status text NOT NULL,
  effect_attempt_id text,
  detail_json text NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS document_publication_refs_project_idx ON document_publication_refs(project_id);
CREATE INDEX IF NOT EXISTS document_publication_refs_doc_rev_idx ON document_publication_refs(document_id, revision_id);

CREATE TABLE IF NOT EXISTS effect_attempts (
  id text PRIMARY KEY,
  pilot_id text NOT NULL REFERENCES pilots(id),
  project_id text NOT NULL REFERENCES projects(id),
  kind text NOT NULL,
  status text NOT NULL,
  correlation_key text NOT NULL,
  fingerprint text NOT NULL,
  decision_id text REFERENCES human_decisions(id),
  effect_conditions text,
  plan_json text NOT NULL DEFAULT '{}',
  result_json text NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS effect_attempts_correlation_uidx ON effect_attempts(pilot_id, project_id, correlation_key);
CREATE INDEX IF NOT EXISTS effect_attempts_project_idx ON effect_attempts(project_id);

CREATE TABLE IF NOT EXISTS observed_git_facts (
  id text PRIMARY KEY,
  attempt_id text NOT NULL REFERENCES effect_attempts(id),
  pilot_id text NOT NULL REFERENCES pilots(id),
  project_id text NOT NULL REFERENCES projects(id),
  fact_kind text NOT NULL,
  repository_full_name text NOT NULL,
  ref_name text NOT NULL,
  sha text NOT NULL,
  pr_number integer,
  observed_at timestamptz NOT NULL DEFAULT now(),
  detail_json text NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS observed_git_facts_attempt_idx ON observed_git_facts(attempt_id);
CREATE INDEX IF NOT EXISTS observed_git_facts_project_idx ON observed_git_facts(project_id);
