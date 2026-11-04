ALTER TABLE sessions ADD COLUMN IF NOT EXISTS auth_mode text NOT NULL DEFAULT 'unknown';
