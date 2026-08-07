/**
 * Migration: FinOps T3 Alert & Morris Review durable state (A1 + D2 + C1).
 *
 * Order (must remain):
 *   1754500000000 T1 < 1754600000000 T2 < 1754600001000 T6 < 1754600002000 T3
 *
 * No seed thresholds. No T6-ext event names. No FK to rebuildable aggregates.
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("finops_alert_state", {
    alert_id: { type: "text", primaryKey: true, notNull: true },
    dedup_key: { type: "text", notNull: true },
    project_id: { type: "text", notNull: true },
    period_start: { type: "date", notNull: true },
    currency: { type: "text", notNull: true },
    threshold_code: { type: "text", notNull: true },
    evaluation_basis: { type: "text", notNull: true },
    threshold_amount: { type: "numeric(20,8)", notNull: true },
    evaluated_amount: { type: "numeric(20,8)", notNull: true },
    rebuild_version: { type: "bigint", notNull: true },
    state: { type: "text", notNull: true },
    first_crossed_at: { type: "timestamptz", notNull: true },
    last_evaluated_at: { type: "timestamptz", notNull: true },
    cleared_at: { type: "timestamptz" },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
    updated_at: { type: "timestamptz", notNull: true },
  });

  pgm.addConstraint("finops_alert_state", "finops_alert_state_dedup_key_key", {
    unique: ["dedup_key"],
  });

  pgm.addConstraint("finops_alert_state", "finops_alert_state_c1_key", {
    unique: ["project_id", "period_start", "threshold_code", "currency"],
  });

  pgm.addConstraint("finops_alert_state", "finops_alert_state_state_chk", {
    check: "state IN ('open', 'cleared')",
  });

  pgm.addConstraint("finops_alert_state", "finops_alert_state_basis_chk", {
    check: "evaluation_basis IN ('estimated', 'observed', 'billed')",
  });

  pgm.addConstraint("finops_alert_state", "finops_alert_state_currency_chk", {
    check: "currency ~ '^[A-Z]{3}$'",
  });

  pgm.addConstraint("finops_alert_state", "finops_alert_state_period_start_chk", {
    check: "period_start = date_trunc('month', period_start::timestamp)::date",
  });

  pgm.addConstraint(
    "finops_alert_state",
    "finops_alert_state_threshold_positive_chk",
    {
      check: "threshold_amount > 0",
    },
  );

  pgm.createIndex("finops_alert_state", ["project_id", "period_start"], {
    name: "finops_alert_state_project_period_idx",
  });

  pgm.createTable("finops_morris_review_state", {
    review_id: { type: "text", primaryKey: true, notNull: true },
    dedup_key: { type: "text", notNull: true },
    project_id: { type: "text", notNull: true },
    period_start: { type: "date", notNull: true },
    currency: { type: "text", notNull: true },
    threshold_code: { type: "text", notNull: true },
    evaluation_basis: { type: "text", notNull: true },
    threshold_amount: { type: "numeric(20,8)", notNull: true },
    evaluated_amount: { type: "numeric(20,8)", notNull: true },
    rebuild_version: { type: "bigint", notNull: true },
    state: { type: "text", notNull: true },
    first_required_at: { type: "timestamptz", notNull: true },
    last_evaluated_at: { type: "timestamptz", notNull: true },
    superseded_at: { type: "timestamptz" },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
    updated_at: { type: "timestamptz", notNull: true },
  });

  pgm.addConstraint(
    "finops_morris_review_state",
    "finops_morris_review_state_dedup_key_key",
    {
      unique: ["dedup_key"],
    },
  );

  pgm.addConstraint("finops_morris_review_state", "finops_morris_review_state_c1_key", {
    unique: ["project_id", "period_start", "threshold_code", "currency"],
  });

  pgm.addConstraint("finops_morris_review_state", "finops_morris_review_state_state_chk", {
    check:
      "state IN ('pending', 'acknowledged', 'resolved', 'superseded')",
  });

  pgm.addConstraint("finops_morris_review_state", "finops_morris_review_state_basis_chk", {
    check: "evaluation_basis IN ('estimated', 'observed', 'billed')",
  });

  pgm.addConstraint(
    "finops_morris_review_state",
    "finops_morris_review_state_currency_chk",
    {
      check: "currency ~ '^[A-Z]{3}$'",
    },
  );

  pgm.addConstraint(
    "finops_morris_review_state",
    "finops_morris_review_state_period_start_chk",
    {
      check: "period_start = date_trunc('month', period_start::timestamp)::date",
    },
  );

  pgm.addConstraint(
    "finops_morris_review_state",
    "finops_morris_review_state_threshold_positive_chk",
    {
      check: "threshold_amount > 0",
    },
  );

  pgm.createIndex(
    "finops_morris_review_state",
    ["project_id", "period_start"],
    {
      name: "finops_morris_review_state_project_period_idx",
    },
  );
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  // Data-preserving doctrine: refuse drop when either table has rows.
  pgm.sql(`
DO $$
DECLARE
  alert_count bigint;
  review_count bigint;
BEGIN
  SELECT COUNT(*) INTO alert_count FROM finops_alert_state;
  SELECT COUNT(*) INTO review_count FROM finops_morris_review_state;
  IF alert_count > 0 OR review_count > 0 THEN
    RAISE EXCEPTION
      'Refuse FinOps T3 down migration: rows exist in finops_alert_state or finops_morris_review_state';
  END IF;
END $$;
`);

  pgm.dropTable("finops_morris_review_state");
  pgm.dropTable("finops_alert_state");
};
