-- ML1 Intervention 2 — neutralize compromised auth material + dedicated collector ops role.
-- Additive DEV only. No DROP of business data. No RECETTE touch.
--
-- SECURITY: Login roles from historical 024 still carried password hashes while NOLOGIN.
-- PASSWORD NULL removes usable credentials even if LOGIN were re-enabled by mistake.
-- Dedicated sfia_admin_collector_ops is the operational collector identity (LOGIN enabled
-- only by an operator-local provision script — never from Git).

-- 1) Nullify compromised password material (do not echo secrets).
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector_login') THEN
    ALTER ROLE sfia_admin_collector_login WITH NOLOGIN PASSWORD NULL;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_finops_reader_login') THEN
    ALTER ROLE sfia_finops_reader_login WITH NOLOGIN PASSWORD NULL;
  END IF;
END$$;

-- 2) Dedicated collector ops role — grants only Admin snapshot tables.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sfia_admin_collector_ops') THEN
    CREATE ROLE sfia_admin_collector_ops NOLOGIN;
  END IF;
END$$;

GRANT SELECT, INSERT, UPDATE ON provider_admin_collection_runs TO sfia_admin_collector_ops;
GRANT SELECT, INSERT, UPDATE ON provider_admin_usage_snapshots TO sfia_admin_collector_ops;
REVOKE ALL ON TABLE provider_usage_observations FROM sfia_admin_collector_ops;
REVOKE ALL ON TABLE pilots FROM sfia_admin_collector_ops;
REVOKE ALL ON TABLE projects FROM sfia_admin_collector_ops;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_usage_snapshots FROM sfia_finops_reader;
REVOKE INSERT, UPDATE, DELETE ON provider_admin_collection_runs FROM sfia_finops_reader;
