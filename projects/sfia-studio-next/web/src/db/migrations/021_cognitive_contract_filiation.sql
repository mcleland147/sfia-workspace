-- ML5 C17 — additive filiation cognitive work ↔ technical contract (DEV).
-- No destructive rewrite. RECETTE/STABLE untouched.

ALTER TABLE technical_contracts
  ADD COLUMN IF NOT EXISTS cognitive_work_id text REFERENCES cognitive_works(id);

ALTER TABLE technical_contracts
  ADD COLUMN IF NOT EXISTS cognitive_revision integer;

CREATE INDEX IF NOT EXISTS technical_contracts_cognitive_work_idx
  ON technical_contracts (cognitive_work_id)
  WHERE cognitive_work_id IS NOT NULL;
