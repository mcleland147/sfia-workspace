-- ML2 D3 — durable conversation turn command (idempotent full-turn).
-- Additive / rejouable. Does NOT open a transaction across provider calls.
-- Never apply to RECETTE/STABLE without Morris gate.

CREATE TABLE IF NOT EXISTS conversation_turn_commands (
  id text PRIMARY KEY,
  conversation_id text NOT NULL REFERENCES conversations(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  client_turn_key text NOT NULL,
  request_fingerprint text NOT NULL,
  operation_id text NOT NULL,
  status text NOT NULL,
  -- ACCEPTED | RUNNING | COMPLETE | FAILED | CONFLICT | UNKNOWN
  ordinal_user integer,
  ordinal_assistant integer,
  user_message_id text,
  assistant_message_id text,
  generation_id text,
  result_json text,
  error_category text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS conversation_turn_commands_conv_key_uidx
  ON conversation_turn_commands (conversation_id, client_turn_key);

CREATE UNIQUE INDEX IF NOT EXISTS conversation_turn_commands_operation_uidx
  ON conversation_turn_commands (operation_id);

CREATE INDEX IF NOT EXISTS conversation_turn_commands_conv_status_idx
  ON conversation_turn_commands (conversation_id, status);

-- Ordinal uniqueness after audit: refuse if duplicates exist.
DO $$
DECLARE
  dup_count integer;
BEGIN
  SELECT COUNT(*) INTO dup_count FROM (
    SELECT conversation_id, ordinal, COUNT(*) AS c
    FROM messages
    GROUP BY conversation_id, ordinal
    HAVING COUNT(*) > 1
  ) d;
  IF dup_count > 0 THEN
    RAISE EXCEPTION 'STOP — messages ordinal duplicates exist (% groups); resolve before unique index', dup_count;
  END IF;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS messages_conversation_ordinal_uidx
  ON messages (conversation_id, ordinal);
