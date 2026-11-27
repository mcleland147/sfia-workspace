-- ML1 integrated completion — security remédiation + provenance in canonical identity.
-- Additive DEV only. No DROP of data rows. No RECETTE touch.
--
-- SECURITY: LOGIN roles created by 024 with hardcoded passwords are treated as
-- compromised. This migration forces NOLOGIN (invalidates password auth) and
-- removes any requirement for secrets in SQL. Operator may later enable LOGIN
-- via a non-git local script reading secrets from the OS keychain / env — never
-- from migration files.
--
-- Note: historical 024 file is also corrected so NEW installs never reintroduce
-- hardcoded passwords. Applied 024 environments are remediated here.

-- 1) Invalidate compromised LOGIN capability (password auth no longer usable).
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector_login') THEN
    ALTER ROLE sfia_admin_collector_login WITH NOLOGIN;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader_login') THEN
    ALTER ROLE sfia_finops_reader_login WITH NOLOGIN;
  END IF;
END$$;

-- Prefer NOLOGIN role objects for grant tests (SET ROLE as superuser/owner).
-- Keep named group roles; login clones stay NOLOGIN until operator re-enables safely.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector') THEN
    CREATE ROLE sfia_admin_collector NOLOGIN;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader') THEN
    CREATE ROLE sfia_finops_reader NOLOGIN;
  END IF;
END$$;

-- 2) Canonical uniqueness MUST include provenance so TEST/LIVE/UNKNOWN never collide.
DROP INDEX IF EXISTS provider_admin_usage_snapshots_canon_uidx;

CREATE UNIQUE INDEX provider_admin_usage_snapshots_canon_uidx
  ON provider_admin_usage_snapshots (
    source_endpoint,
    surface_object,
    organization_scope,
    interval_start_utc,
    interval_end_utc,
    granularity,
    project_id,
    api_key_id,
    user_id,
    model,
    line_item,
    api_source,
    collection_provenance
  ) NULLS NOT DISTINCT;

-- Re-assert least privilege (idempotent).
GRANT SELECT, INSERT, UPDATE ON provider_admin_collection_runs TO sfia_admin_collector;
GRANT SELECT, INSERT, UPDATE ON provider_admin_usage_snapshots TO sfia_admin_collector;
GRANT SELECT ON provider_admin_collection_runs TO sfia_finops_reader;
GRANT SELECT ON provider_admin_usage_snapshots TO sfia_finops_reader;
REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector;
REVOKE ALL ON TABLE pilots FROM sfia_admin_collector;
REVOKE ALL ON TABLE projects FROM sfia_admin_collector;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader;
