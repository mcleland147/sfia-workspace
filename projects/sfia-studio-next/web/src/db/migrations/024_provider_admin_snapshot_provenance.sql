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

-- NOLOGIN group roles only — never embed passwords in SQL (remédiation post-024).
-- Permission proofs use SET ROLE as owner; LOGIN enablement is operator-local only.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector') THEN
    CREATE ROLE sfia_admin_collector NOLOGIN;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader') THEN
    CREATE ROLE sfia_finops_reader NOLOGIN;
  END IF;
  -- Legacy login role names (if present from earlier 024): force NOLOGIN, no password in SQL.
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector_login') THEN
    ALTER ROLE sfia_admin_collector_login WITH NOLOGIN;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader_login') THEN
    ALTER ROLE sfia_finops_reader_login WITH NOLOGIN;
  END IF;
END$$;

GRANT USAGE ON SCHEMA public TO sfia_admin_collector;
GRANT USAGE ON SCHEMA public TO sfia_finops_reader;

-- Ensure collector cannot touch Studio attribution ledger / pilots.
REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector;
REVOKE ALL ON TABLE pilots FROM sfia_admin_collector;
REVOKE ALL ON TABLE projects FROM sfia_admin_collector;

-- Reader cannot write snapshots.
REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader;
