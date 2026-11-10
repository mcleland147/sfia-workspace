-- ML4 D8 integrity: at most one document_publication_refs row per effect_attempt_id.
-- Additive / non-destructive. Does not rewrite 008.
-- Partial UNIQUE allows legacy NULL effect_attempt_id (detached remediation / historical).

CREATE UNIQUE INDEX IF NOT EXISTS document_publication_refs_effect_attempt_uidx
  ON document_publication_refs (effect_attempt_id)
  WHERE effect_attempt_id IS NOT NULL;
