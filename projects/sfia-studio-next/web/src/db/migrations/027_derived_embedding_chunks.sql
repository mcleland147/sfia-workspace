-- APPLIED ON DEV — Morris GO Checkpoint A 2026-11-27.
-- Macro-lot 2 derived embedding projection (no pgvector).
-- Owner of métier data remains D4/D9 — this table is a reconstructible projection.
-- owner_pilot_id is attribution metadata, NOT sole authorization proof.
-- Authorization must revalidate via projects.owner_pilot_id + preparation links.
--
-- Apply (DEV only, after GO):
--   psql … -f 027_derived_embedding_chunks.sql
--   then set SFIA_DERIVED_EMBEDDING_BACKEND=pg and retire file ops path.
--
-- Rollback:
--   DROP TABLE IF EXISTS derived_embedding_chunks;

CREATE TABLE IF NOT EXISTS derived_embedding_chunks (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  preparation_id text NOT NULL REFERENCES preparations(id) ON DELETE CASCADE,
  -- Attribution only — revalidate rights via projects/preparations owners before use.
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  source_id text NOT NULL,
  source_kind text NOT NULL
    CHECK (source_kind IN ('acquis', 'subject', 'open_point', 'document_excerpt')),
  content_fingerprint text NOT NULL,
  model text NOT NULL,
  dims integer NOT NULL CHECK (dims > 0),
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
  ON derived_embedding_chunks (project_id, revoked, deleted, model)
  WHERE revoked = false AND deleted = false;

CREATE INDEX IF NOT EXISTS derived_embedding_chunks_source_idx
  ON derived_embedding_chunks (project_id, source_id);

CREATE INDEX IF NOT EXISTS derived_embedding_chunks_prep_idx
  ON derived_embedding_chunks (preparation_id, owner_pilot_id);
