-- Additive PreparationProjection snapshot (ML4D Sas Nora).
-- Reversible: DROP COLUMN projection_json.
-- Does not invent provenance for historical rows (NULL = partial / legacy).
ALTER TABLE preparations
  ADD COLUMN IF NOT EXISTS projection_json jsonb;

COMMENT ON COLUMN preparations.projection_json IS
  'D2 PreparationProjection v1 snapshot; non-authorizing; revision-aligned with creation_revision';
