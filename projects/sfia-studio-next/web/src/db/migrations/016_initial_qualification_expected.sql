-- Ensemble 07 P0-04 — distinguish new creates (qualification expected) from legacy links.
-- Additive / re-runnable. Default false: pre-existing links are NOT auto-locked / backfilled.

ALTER TABLE preparation_project_links
  ADD COLUMN IF NOT EXISTS initial_qualification_expected boolean NOT NULL DEFAULT false;
