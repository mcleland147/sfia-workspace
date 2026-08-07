/**
 * Migration: FinOps T2 aggregation + reconciliation (Money adjacent to T1 ledger).
 *
 * Money persistence choice (Delivery implementation):
 *   Adjacent append-only table `finops_cost_event` — T1 `finops_usage_event`
 *   remains usage-only / append-only without Money columns.
 *
 * A1: durable derived aggregates in `finops_usage_aggregate` (rebuildable).
 * R3: versioned catalog table `finops_price_catalog_entry` (no seed tariffs).
 * Recon: `finops_reconciliation_record` for on-demand idempotent batches.
 *
 * Reserved path: 1754600000000 (before T6 1754600001000).
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("finops_cost_event", {
    cost_event_id: { type: "text", primaryKey: true, notNull: true },
    dedup_key: { type: "text", notNull: true },
    project_id: { type: "text", notNull: true },
    execution_run_id: { type: "text", notNull: true },
    usage_event_id: { type: "text" },
    period_start: { type: "date", notNull: true },
    currency: { type: "text", notNull: true },
    amount: { type: "numeric(20,8)" },
    evidence_class: { type: "text", notNull: true },
    source_of_truth: { type: "text", notNull: true },
    estimation_status: { type: "text", notNull: true },
    correction_ref: { type: "text" },
    catalog_version: { type: "text" },
    provider: { type: "text", notNull: true },
    model: { type: "text" },
    unit: { type: "text" },
    billing_quantum: { type: "numeric(20,0)" },
    usage_quantity: { type: "numeric(20,0)" },
    occurred_at: { type: "timestamptz", notNull: true },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
  });

  pgm.addConstraint("finops_cost_event", "finops_cost_event_dedup_key_key", {
    unique: ["dedup_key"],
  });

  pgm.addConstraint("finops_cost_event", "finops_cost_event_evidence_class_chk", {
    check: "evidence_class IN ('estimated', 'observed', 'billed', 'unknown')",
  });

  pgm.addConstraint(
    "finops_cost_event",
    "finops_cost_event_source_of_truth_chk",
    {
      check:
        "source_of_truth IN ('BILLED', 'PROVIDER_OBSERVED', 'API_USAGE', 'LOCAL_COUNT', 'PARAMETRIC_ESTIMATE', 'UNKNOWN')",
    },
  );

  pgm.addConstraint(
    "finops_cost_event",
    "finops_cost_event_estimation_status_chk",
    {
      check: "estimation_status IN ('available', 'unavailable', 'unknown')",
    },
  );

  pgm.addConstraint("finops_cost_event", "finops_cost_event_currency_chk", {
    check: "currency ~ '^[A-Z]{3}$'",
  });

  pgm.addConstraint("finops_cost_event", "finops_cost_event_period_start_chk", {
    check: "period_start = date_trunc('month', period_start::timestamp)::date",
  });

  pgm.createIndex("finops_cost_event", ["project_id", "period_start", "currency"], {
    name: "finops_cost_event_project_period_currency_idx",
  });

  pgm.sql(`
CREATE OR REPLACE FUNCTION finops_cost_event_append_only()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  RAISE EXCEPTION 'finops_cost_event is append-only';
END;
$$;
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_cost_event_no_update
BEFORE UPDATE ON finops_cost_event
FOR EACH ROW
EXECUTE FUNCTION finops_cost_event_append_only();
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_cost_event_no_delete
BEFORE DELETE ON finops_cost_event
FOR EACH ROW
EXECUTE FUNCTION finops_cost_event_append_only();
`);

  pgm.createTable("finops_usage_aggregate", {
    project_id: { type: "text", notNull: true },
    period_start: { type: "date", notNull: true },
    currency: { type: "text", notNull: true },
    estimated_amount: {
      type: "numeric(20,8)",
      notNull: true,
      default: "0",
    },
    observed_amount: {
      type: "numeric(20,8)",
      notNull: true,
      default: "0",
    },
    billed_amount: {
      type: "numeric(20,8)",
      notNull: true,
      default: "0",
    },
    unknown_amount: {
      type: "numeric(20,8)",
      notNull: true,
      default: "0",
    },
    input_tokens_sum: { type: "bigint" },
    output_tokens_sum: { type: "bigint" },
    total_tokens_sum: { type: "bigint" },
    cost_event_count: { type: "bigint", notNull: true, default: 0 },
    unavailable_estimation_count: {
      type: "bigint",
      notNull: true,
      default: 0,
    },
    rebuild_version: { type: "bigint", notNull: true, default: 1 },
    rebuilt_at: { type: "timestamptz", notNull: true },
  });

  pgm.addConstraint("finops_usage_aggregate", "finops_usage_aggregate_pkey", {
    primaryKey: ["project_id", "period_start", "currency"],
  });

  pgm.addConstraint("finops_usage_aggregate", "finops_usage_aggregate_currency_chk", {
    check: "currency ~ '^[A-Z]{3}$'",
  });

  pgm.addConstraint(
    "finops_usage_aggregate",
    "finops_usage_aggregate_period_start_chk",
    {
      check:
        "period_start = date_trunc('month', period_start::timestamp)::date",
    },
  );

  pgm.createTable("finops_price_catalog_entry", {
    catalog_entry_id: { type: "text", primaryKey: true, notNull: true },
    catalog_version: { type: "text", notNull: true },
    provider: { type: "text", notNull: true },
    model: { type: "text", notNull: true },
    unit: { type: "text", notNull: true },
    billing_quantum: { type: "numeric(20,0)", notNull: true },
    currency: { type: "text", notNull: true },
    amount_per_quantum: { type: "numeric(20,8)", notNull: true },
    valid_from: { type: "timestamptz", notNull: true },
    valid_to: { type: "timestamptz" },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
  });

  pgm.addConstraint(
    "finops_price_catalog_entry",
    "finops_price_catalog_entry_currency_chk",
    { check: "currency ~ '^[A-Z]{3}$'" },
  );

  pgm.addConstraint(
    "finops_price_catalog_entry",
    "finops_price_catalog_entry_quantum_chk",
    { check: "billing_quantum > 0" },
  );

  pgm.addConstraint(
    "finops_price_catalog_entry",
    "finops_price_catalog_entry_uniq",
    {
      unique: [
        "catalog_version",
        "provider",
        "model",
        "unit",
        "currency",
        "valid_from",
      ],
    },
  );

  pgm.createTable("finops_reconciliation_record", {
    reconciliation_id: { type: "text", primaryKey: true, notNull: true },
    dedup_key: { type: "text", notNull: true },
    project_id: { type: "text", notNull: true },
    period_start: { type: "date", notNull: true },
    source_batch_id: { type: "text", notNull: true },
    status: { type: "text", notNull: true },
    processed_count: { type: "bigint", notNull: true, default: 0 },
    error_code: { type: "text" },
    error_message: { type: "text" },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
    completed_at: { type: "timestamptz" },
  });

  pgm.addConstraint(
    "finops_reconciliation_record",
    "finops_reconciliation_record_dedup_key_key",
    { unique: ["dedup_key"] },
  );

  pgm.addConstraint(
    "finops_reconciliation_record",
    "finops_reconciliation_record_status_chk",
    { check: "status IN ('succeeded', 'failed')" },
  );
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  pgm.sql(`
DO $$
DECLARE
  cost_count bigint;
  agg_count bigint;
BEGIN
  SELECT COUNT(*) INTO cost_count FROM finops_cost_event;
  SELECT COUNT(*) INTO agg_count FROM finops_usage_aggregate;
  IF cost_count > 0 OR agg_count > 0 THEN
    RAISE EXCEPTION
      'Refusing to drop T2 FinOps tables: cost_event=% aggregate=%',
      cost_count, agg_count;
  END IF;
END $$;
`);

  pgm.dropTable("finops_reconciliation_record");
  pgm.dropTable("finops_price_catalog_entry");
  pgm.dropTable("finops_usage_aggregate");

  pgm.sql(
    `DROP TRIGGER IF EXISTS trg_finops_cost_event_no_delete ON finops_cost_event;`,
  );
  pgm.sql(
    `DROP TRIGGER IF EXISTS trg_finops_cost_event_no_update ON finops_cost_event;`,
  );
  pgm.sql(`DROP FUNCTION IF EXISTS finops_cost_event_append_only();`);
  pgm.dropTable("finops_cost_event");
};
