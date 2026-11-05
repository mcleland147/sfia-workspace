-- ML2 D4: knowledge subjects / acquis / open points + document revision provenance & concurrency.
-- Additive only. No destructive ALTER. Compatible with ML1 001+002 data.

-- Document revision provenance and base-revision concurrency control
ALTER TABLE document_revisions
  ADD COLUMN IF NOT EXISTS base_revision_id text REFERENCES document_revisions(id),
  ADD COLUMN IF NOT EXISTS correlation_key text,
  ADD COLUMN IF NOT EXISTS provenance_json text NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS scope text NOT NULL DEFAULT 'document';

CREATE UNIQUE INDEX IF NOT EXISTS document_revisions_corr_uidx
  ON document_revisions(document_id, correlation_key)
  WHERE correlation_key IS NOT NULL;

-- D4 knowledge subjects (one tree per preparation/project ownership)
CREATE TABLE IF NOT EXISTS knowledge_subjects (
  id text PRIMARY KEY,
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  parent_subject_id text REFERENCES knowledge_subjects(id),
  title text NOT NULL,
  status text NOT NULL DEFAULT 'ACTIVE', -- ACTIVE | ARCHIVED | MERGED | SPLIT
  originated_from_subject_id text REFERENCES knowledge_subjects(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS knowledge_subjects_prep_idx ON knowledge_subjects(preparation_id);
CREATE INDEX IF NOT EXISTS knowledge_subjects_project_idx ON knowledge_subjects(project_id);

-- Acquis (selective capitalisation)
CREATE TABLE IF NOT EXISTS knowledge_acquis (
  id text PRIMARY KEY,
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  subject_id text REFERENCES knowledge_subjects(id),
  kind text NOT NULL DEFAULT 'FACT', -- FACT | HYPOTHESIS | RECOMMENDATION | LIMIT
  statement text NOT NULL,
  provenance_json text NOT NULL DEFAULT '{}',
  status text NOT NULL DEFAULT 'CURRENT', -- CURRENT | SUPERSEDED | RETRACTED
  supersedes_acquis_id text REFERENCES knowledge_acquis(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS knowledge_acquis_prep_idx ON knowledge_acquis(preparation_id);
CREATE INDEX IF NOT EXISTS knowledge_acquis_subject_idx ON knowledge_acquis(subject_id);

-- Open points (transversal)
CREATE TABLE IF NOT EXISTS knowledge_open_points (
  id text PRIMARY KEY,
  preparation_id text NOT NULL REFERENCES preparations(id),
  project_id text REFERENCES projects(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  subject_id text REFERENCES knowledge_subjects(id),
  statement text NOT NULL,
  status text NOT NULL DEFAULT 'OPEN', -- OPEN | ADDRESSED | WITHDRAWN
  provenance_json text NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS knowledge_open_points_prep_idx ON knowledge_open_points(preparation_id);
CREATE INDEX IF NOT EXISTS knowledge_open_points_status_idx ON knowledge_open_points(status);

-- Subject mutation journal (rename / merge / split filiation)
CREATE TABLE IF NOT EXISTS knowledge_subject_events (
  id text PRIMARY KEY,
  preparation_id text NOT NULL REFERENCES preparations(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  subject_id text NOT NULL REFERENCES knowledge_subjects(id),
  event_type text NOT NULL, -- RENAMED | MERGED | SPLIT | REPARENTED
  payload_json text NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS knowledge_subject_events_subject_idx ON knowledge_subject_events(subject_id);
