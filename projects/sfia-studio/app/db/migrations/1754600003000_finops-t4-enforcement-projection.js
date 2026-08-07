/**
 * Migration: FinOps T4 dedicated enforcement projection (derived / rebuildable).
 *
 * Order (must remain):
 *   1754500000000 T1
 *   < 1754600000000 T2
 *   < 1754600001000 T6
 *   < 1754600002000 T3
 *   < 1754600003000 T4
 *
 * No seed thresholds. No flags. No T6 events. No FK to T2/T3.
 * Amounts may be signed (financial corrections) — no amount >= 0 check.
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("finops_enforcement_projection", {
    project_id: { type: "text", notNull: true },
    period_start: { type: "date", notNull: true },
    currency: { type: "text", notNull: true },
    blocking_eligible_amount: { type: "numeric(20,8)", notNull: true },
    billed_amount: { type: "numeric(20,8)", notNull: true },
    provider_observed_amount: { type: "numeric(20,8)", notNull: true },
    eligible_cost_event_count: { type: "bigint", notNull: true },
    billed_event_count: { type: "bigint", notNull: true },
    provider_observed_event_count: { type: "bigint", notNull: true },
    rebuild_version: { type: "bigint", notNull: true },
    rebuilt_at: { type: "timestamptz", notNull: true },
  });

  pgm.addConstraint(
    "finops_enforcement_projection",
    "finops_enforcement_projection_pkey",
    {
      primaryKey: ["project_id", "period_start", "currency"],
    },
  );

  pgm.addConstraint(
    "finops_enforcement_projection",
    "finops_enforcement_projection_currency_chk",
    {
      check: "currency ~ '^[A-Z]{3}$'",
    },
  );

  pgm.addConstraint(
    "finops_enforcement_projection",
    "finops_enforcement_projection_period_start_chk",
    {
      check:
        "period_start = date_trunc('month', period_start::timestamp)::date",
    },
  );

  pgm.addConstraint(
    "finops_enforcement_projection",
    "finops_enforcement_projection_rebuild_version_chk",
    {
      check: "rebuild_version >= 1",
    },
  );

  pgm.addConstraint(
    "finops_enforcement_projection",
    "finops_enforcement_projection_counts_chk",
    {
      check:
        "eligible_cost_event_count >= 0 AND billed_event_count >= 0 AND provider_observed_event_count >= 0",
    },
  );

  pgm.createIndex(
    "finops_enforcement_projection",
    ["project_id", "period_start"],
    {
      name: "finops_enforcement_projection_project_period_idx",
    },
  );
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  // Data-preserving doctrine: refuse drop when projection rows exist.
  pgm.sql(`
DO $$
DECLARE
  projection_count bigint;
BEGIN
  SELECT COUNT(*) INTO projection_count FROM finops_enforcement_projection;
  IF projection_count > 0 THEN
    RAISE EXCEPTION
      'Refuse FinOps T4 down migration: rows exist in finops_enforcement_projection';
  END IF;
END $$;
`);

  pgm.dropTable("finops_enforcement_projection");
};
