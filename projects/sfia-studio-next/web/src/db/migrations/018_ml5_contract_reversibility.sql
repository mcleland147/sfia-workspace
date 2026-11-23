-- ML5 consolidation — persist reversibilityLimits + readiness projection (P1-01 / P1-02).
-- Additive / re-runnable. DEV only via db:migrate — never RECETTE/STABLE in this cycle.

ALTER TABLE technical_contracts
  ADD COLUMN IF NOT EXISTS reversibility_limits_json text NOT NULL DEFAULT '[]';

ALTER TABLE technical_contracts
  ADD COLUMN IF NOT EXISTS readiness_json text;
