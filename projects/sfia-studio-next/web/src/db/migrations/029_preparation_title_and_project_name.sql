-- D2 preparation title and project name revision. Additive only.
-- Existing preparations stay untitled. Existing project names are not rewritten.

ALTER TABLE preparations ADD COLUMN IF NOT EXISTS title text;
ALTER TABLE preparations ADD COLUMN IF NOT EXISTS title_source text NOT NULL DEFAULT 'NONE';
ALTER TABLE preparations ADD COLUMN IF NOT EXISTS title_revision integer NOT NULL DEFAULT 0;
ALTER TABLE preparations ADD COLUMN IF NOT EXISTS title_source_turn_id text;
ALTER TABLE preparations ADD COLUMN IF NOT EXISTS title_intention_key text;

ALTER TABLE projects ADD COLUMN IF NOT EXISTS name_revision integer NOT NULL DEFAULT 0;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS name_intention_key text;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'preparations_title_source_chk'
  ) THEN
    ALTER TABLE preparations
      ADD CONSTRAINT preparations_title_source_chk
      CHECK (title_source IN ('NONE', 'NORA', 'PILOT'));
  END IF;
END $$;
