CREATE TABLE IF NOT EXISTS pilots (
  id text PRIMARY KEY,
  github_user_id text,
  display_name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS pilots_github_user_id_uidx ON pilots(github_user_id);

CREATE TABLE IF NOT EXISTS users (
  id text PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  email_verified boolean NOT NULL DEFAULT false,
  image text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  pilot_id text REFERENCES pilots(id)
);

CREATE TABLE IF NOT EXISTS sessions (
  id text PRIMARY KEY,
  expires_at timestamptz NOT NULL,
  token text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  ip_address text,
  user_agent text,
  user_id text NOT NULL REFERENCES users(id),
  revoked_at timestamptz
);
CREATE INDEX IF NOT EXISTS sessions_user_id_idx ON sessions(user_id);

CREATE TABLE IF NOT EXISTS accounts (
  id text PRIMARY KEY,
  account_id text NOT NULL,
  provider_id text NOT NULL,
  user_id text NOT NULL REFERENCES users(id),
  access_token text,
  refresh_token text,
  id_token text,
  access_token_expires_at timestamptz,
  refresh_token_expires_at timestamptz,
  scope text,
  password text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS verifications (
  id text PRIMARY KEY,
  identifier text NOT NULL,
  value text NOT NULL,
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS preparations (
  id text PRIMARY KEY,
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  status text NOT NULL DEFAULT 'OPEN',
  creation_revision integer NOT NULL DEFAULT 1,
  preview_name text NOT NULL DEFAULT '',
  preview_summary text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS preparations_owner_idx ON preparations(owner_pilot_id);

CREATE TABLE IF NOT EXISTS projects (
  id text PRIMARY KEY,
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS projects_owner_idx ON projects(owner_pilot_id);

CREATE TABLE IF NOT EXISTS preparation_project_links (
  preparation_id text PRIMARY KEY REFERENCES preparations(id),
  project_id text NOT NULL REFERENCES projects(id),
  attached_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS create_project_commands (
  id text PRIMARY KEY,
  pilot_id text NOT NULL REFERENCES pilots(id),
  idempotency_key text NOT NULL,
  fingerprint text NOT NULL,
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  result text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS create_project_commands_pilot_key_uidx
  ON create_project_commands(pilot_id, idempotency_key);

CREATE TABLE IF NOT EXISTS conversations (
  id text PRIMARY KEY,
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS conversations_prep_idx ON conversations(preparation_id);

CREATE TABLE IF NOT EXISTS messages (
  id text PRIMARY KEY,
  conversation_id text NOT NULL REFERENCES conversations(id),
  role text NOT NULL,
  content text NOT NULL,
  status text NOT NULL,
  generation_id text,
  ordinal integer NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS messages_conversation_idx ON messages(conversation_id);

CREATE TABLE IF NOT EXISTS documents (
  id text PRIMARY KEY,
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  title text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS documents_prep_idx ON documents(preparation_id);

CREATE TABLE IF NOT EXISTS document_revisions (
  id text PRIMARY KEY,
  document_id text NOT NULL REFERENCES documents(id),
  revision_number integer NOT NULL,
  content_markdown text NOT NULL,
  status text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS document_revisions_doc_rev_uidx
  ON document_revisions(document_id, revision_number);
