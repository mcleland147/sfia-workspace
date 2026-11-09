-- ML4 D9 security corrective — additive only (DEV/e2e).
-- Bind OAuth state to Studio session; record intended flow server-side.
-- Does not touch D8 Option A historical rows.

ALTER TABLE integration_oauth_states
  ADD COLUMN IF NOT EXISTS studio_session_id text,
  ADD COLUMN IF NOT EXISTS flow text;

CREATE INDEX IF NOT EXISTS integration_oauth_states_session_idx
  ON integration_oauth_states (studio_session_id)
  WHERE studio_session_id IS NOT NULL;
