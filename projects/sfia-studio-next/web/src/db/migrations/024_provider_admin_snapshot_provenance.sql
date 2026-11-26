-- ML1 Admin/FinOps qualification — additive provenance + integrity helpers.
-- Does NOT rewrite 023. No DROP/DELETE of snapshot rows.
-- Existing 023 rows get provenance='UNKNOWN' (excluded from LIVE FinOps projections).

ALTER TABLE provider_admin_collection_runs
  ADD COLUMN IF NOT EXISTS collection_provenance text NOT NULL DEFAULT 'UNKNOWN';

ALTER TABLE provider_admin_collection_runs
  DROP CONSTRAINT IF EXISTS provider_admin_collection_runs_provenance_check;

ALTER TABLE provider_admin_collection_runs
  ADD CONSTRAINT provider_admin_collection_runs_provenance_check
  CHECK (collection_provenance IN ('TEST_SUBSTITUTED', 'LIVE', 'UNKNOWN'));

ALTER TABLE provider_admin_usage_snapshots
  ADD COLUMN IF NOT EXISTS collection_provenance text NOT NULL DEFAULT 'UNKNOWN';

ALTER TABLE provider_admin_usage_snapshots
  DROP CONSTRAINT IF EXISTS provider_admin_usage_snapshots_provenance_check;

ALTER TABLE provider_admin_usage_snapshots
  ADD CONSTRAINT provider_admin_usage_snapshots_provenance_check
  CHECK (collection_provenance IN ('TEST_SUBSTITUTED', 'LIVE', 'UNKNOWN'));

CREATE INDEX IF NOT EXISTS provider_admin_usage_snapshots_provenance_idx
  ON provider_admin_usage_snapshots (collection_provenance, organization_scope);

-- LOGIN roles for exercised permission proofs (DEV only). Passwords set by operator script.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector_login') THEN
    CREATE ROLE sfia_admin_collector_login LOGIN PASSWORD 'sfia_dev_collector_only';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader_login') THEN
    CREATE ROLE sfia_finops_reader_login LOGIN PASSWORD 'sfia_dev_finops_read_only';
  END IF;
END$$;

GRANT sfia_admin_collector TO sfia_admin_collector_login;
GRANT sfia_finops_reader TO sfia_finops_reader_login;
GRANT USAGE ON SCHEMA public TO sfia_admin_collector_login;
GRANT USAGE ON SCHEMA public TO sfia_finops_reader_login;
-- CONNECT on current database only (DEV operator or e2e isolate).
DO $$
BEGIN
  EXECUTE format(
    'GRANT CONNECT ON DATABASE %I TO sfia_admin_collector_login',
    current_database()
  );
  EXECUTE format(
    'GRANT CONNECT ON DATABASE %I TO sfia_finops_reader_login',
    current_database()
  );
END$$;

-- Ensure collector cannot touch Studio attribution ledger / pilots.
REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector;
REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector_login;
REVOKE ALL ON TABLE pilots FROM sfia_admin_collector;
REVOKE ALL ON TABLE pilots FROM sfia_admin_collector_login;
REVOKE ALL ON TABLE projects FROM sfia_admin_collector;
REVOKE ALL ON TABLE projects FROM sfia_admin_collector_login;

-- Reader cannot write snapshots.
REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader_login;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader_login;
