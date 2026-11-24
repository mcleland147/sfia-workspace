-- ML5 G15 — dated requalification history without erasing prior D8 verdicts.
-- Additive DEV migration. No Cursor re-dispatch. RECETTE/STABLE untouched by this cycle.

ALTER TABLE realization_qualifications
  ADD COLUMN IF NOT EXISTS history_json text NOT NULL DEFAULT '[]';
