-- ML2 corrective: document creation idempotence + revision concurrency helpers.
-- Additive only. Preserves ML1/ML2-003 data.

ALTER TABLE documents
  ADD COLUMN IF NOT EXISTS creation_correlation_key text;

-- One durable creation command identity per preparation owner
CREATE UNIQUE INDEX IF NOT EXISTS documents_prep_owner_corr_uidx
  ON documents(preparation_id, owner_pilot_id, creation_correlation_key)
  WHERE creation_correlation_key IS NOT NULL;

-- Strengthen revision correlation uniqueness across a document (already present in 003)
-- Ensure base_revision_id can be indexed for concurrency diagnostics
CREATE INDEX IF NOT EXISTS document_revisions_base_idx
  ON document_revisions(document_id, base_revision_id);
