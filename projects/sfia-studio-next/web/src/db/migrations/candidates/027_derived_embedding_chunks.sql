-- CANDIDATE ONLY — DO NOT APPLY without explicit Morris GO.
-- Macro-lot 2 derived embedding projection (no pgvector).
-- Rollback: DROP TABLE IF EXISTS derived_embedding_chunks;

CREATE TABLE IF NOT EXISTS derived_embedding_chunks (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  preparation_id text NOT NULL,
  owner_pilot_id text NOT NULL,
  source_id text NOT NULL,
  source_kind text NOT NULL,
  content_fingerprint text NOT NULL,
  model text NOT NULL,
  dims integer NOT NULL,
  vector_json jsonb NOT NULL,
  text_excerpt text,
  revoked boolean NOT NULL DEFAULT false,
  deleted boolean NOT NULL DEFAULT false,
  version_label text,
  index_ref text NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (project_id, source_id, content_fingerprint, model)
);

CREATE INDEX IF NOT EXISTS derived_embedding_chunks_project_mobilizable_idx
  ON derived_embedding_chunks (project_id, revoked, deleted, model);

CREATE INDEX IF NOT EXISTS derived_embedding_chunks_source_idx
  ON derived_embedding_chunks (project_id, source_id);
