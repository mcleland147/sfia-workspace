-- ML4 D9 — GitHub App user-to-server OAuth (additive / non-destructive).
-- DEV / e2e only. Does not touch D8 Option A historical rows.
-- Tokens stored only as ciphertext; never plaintext.

ALTER TABLE integration_oauth_states
  ADD COLUMN IF NOT EXISTS code_verifier text,
  ADD COLUMN IF NOT EXISTS nonce text,
  ADD COLUMN IF NOT EXISTS code_challenge_method text;

ALTER TABLE integration_authorizations
  ADD COLUMN IF NOT EXISTS github_user_id text,
  ADD COLUMN IF NOT EXISTS token_ciphertext text,
  ADD COLUMN IF NOT EXISTS token_nonce text,
  ADD COLUMN IF NOT EXISTS token_key_version text,
  ADD COLUMN IF NOT EXISTS refresh_ciphertext text,
  ADD COLUMN IF NOT EXISTS refresh_nonce text,
  ADD COLUMN IF NOT EXISTS token_expires_at timestamptz,
  ADD COLUMN IF NOT EXISTS scopes_json text NOT NULL DEFAULT '[]',
  ADD COLUMN IF NOT EXISTS last_validated_at timestamptz;

CREATE INDEX IF NOT EXISTS integration_authorizations_github_user_idx
  ON integration_authorizations (github_user_id)
  WHERE github_user_id IS NOT NULL;
