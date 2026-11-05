-- ML2 Critical three-blocker — turn ownership fencing token.
-- Additive / rejouable. Does NOT open a transaction across provider calls.
-- Never apply to RECETTE/STABLE without Morris gate.

ALTER TABLE conversation_turn_commands
  ADD COLUMN IF NOT EXISTS owner_token text;

-- Backfill existing rows so CAS with token remains possible.
UPDATE conversation_turn_commands
SET owner_token = id
WHERE owner_token IS NULL;

CREATE INDEX IF NOT EXISTS conversation_turn_commands_owner_token_idx
  ON conversation_turn_commands (id, owner_token)
  WHERE status IN ('RUNNING', 'ACCEPTED');
