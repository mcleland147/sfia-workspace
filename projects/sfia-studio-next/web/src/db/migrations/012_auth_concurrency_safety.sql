-- ML4 D9 concurrency safety (C1 refresh lease + C2 one CONNECTED).
-- ADDITIVE / non-destructive. DEV + e2e only.
-- Preflight required: zero duplicate (pilot_id, provider) CONNECTED rows.

ALTER TABLE integration_authorizations
  ADD COLUMN IF NOT EXISTS refresh_lease_token text,
  ADD COLUMN IF NOT EXISTS refresh_lease_expires_at timestamptz;

-- At most one CONNECTED authorization per Pilot × provider (cross-process).
CREATE UNIQUE INDEX IF NOT EXISTS integration_authorizations_one_connected_uidx
  ON integration_authorizations (pilot_id, provider)
  WHERE status = 'CONNECTED';
