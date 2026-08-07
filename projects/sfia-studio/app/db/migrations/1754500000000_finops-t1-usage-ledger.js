/**
 * Migration: FinOps T1 usage ledger (append-only, no Money columns).
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("finops_usage_event", {
    event_id: { type: "text", primaryKey: true, notNull: true },
    dedup_key: { type: "text", notNull: true },
    project_id: { type: "text", notNull: true },
    execution_run_id: { type: "text", notNull: true },
    correlation_id: { type: "text" },
    provider: { type: "text", notNull: true },
    model: { type: "text" },
    occurred_at: { type: "timestamptz", notNull: true },
    period_start: { type: "date", notNull: true },
    source_of_truth: { type: "text", notNull: true },
    evidence_class: { type: "text", notNull: true },
    input_tokens: { type: "bigint" },
    output_tokens: { type: "bigint" },
    total_tokens: { type: "bigint" },
    provider_request_id: { type: "text" },
    correction_ref: { type: "text" },
    usage_status: { type: "text", notNull: true },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
  });

  pgm.addConstraint("finops_usage_event", "finops_usage_event_dedup_key_key", {
    unique: ["dedup_key"],
  });

  pgm.addConstraint("finops_usage_event", "finops_usage_event_tokens_nonneg", {
    check:
      "(input_tokens IS NULL OR input_tokens >= 0) AND (output_tokens IS NULL OR output_tokens >= 0) AND (total_tokens IS NULL OR total_tokens >= 0)",
  });

  // JavaScript Number.MAX_SAFE_INTEGER upper bound (T1 tokens remain number).
  pgm.addConstraint("finops_usage_event", "finops_usage_event_tokens_safe_int", {
    check:
      "(input_tokens IS NULL OR input_tokens <= 9007199254740991) AND (output_tokens IS NULL OR output_tokens <= 9007199254740991) AND (total_tokens IS NULL OR total_tokens <= 9007199254740991)",
  });

  pgm.addConstraint("finops_usage_event", "finops_usage_event_usage_status_chk", {
    check: "usage_status IN ('validated', 'unavailable', 'invalid')",
  });

  pgm.addConstraint(
    "finops_usage_event",
    "finops_usage_event_source_of_truth_chk",
    {
      check:
        "source_of_truth IN ('BILLED', 'PROVIDER_OBSERVED', 'API_USAGE', 'LOCAL_COUNT', 'PARAMETRIC_ESTIMATE', 'UNKNOWN')",
    },
  );

  pgm.addConstraint(
    "finops_usage_event",
    "finops_usage_event_evidence_class_chk",
    {
      check: "evidence_class IN ('estimated', 'observed', 'billed', 'unknown')",
    },
  );

  pgm.addConstraint("finops_usage_event", "finops_usage_event_period_start_chk", {
    check: "period_start = date_trunc('month', period_start::timestamp)::date",
  });

  // Append-only guard: block UPDATE/DELETE of business rows.
  pgm.sql(`
CREATE OR REPLACE FUNCTION finops_usage_event_append_only()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  RAISE EXCEPTION 'finops_usage_event is append-only';
END;
$$;
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_usage_event_no_update
BEFORE UPDATE ON finops_usage_event
FOR EACH ROW
EXECUTE FUNCTION finops_usage_event_append_only();
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_usage_event_no_delete
BEFORE DELETE ON finops_usage_event
FOR EACH ROW
EXECUTE FUNCTION finops_usage_event_append_only();
`);
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  // Fail closed if ledger contains events — preserve data by default.
  pgm.sql(`
DO $$
DECLARE
  event_count bigint;
BEGIN
  SELECT COUNT(*) INTO event_count FROM finops_usage_event;
  IF event_count > 0 THEN
    RAISE EXCEPTION 'Refusing to drop finops_usage_event: % row(s) present', event_count;
  END IF;
END $$;
`);

  pgm.sql(`DROP TRIGGER IF EXISTS trg_finops_usage_event_no_delete ON finops_usage_event;`);
  pgm.sql(`DROP TRIGGER IF EXISTS trg_finops_usage_event_no_update ON finops_usage_event;`);
  pgm.sql(`DROP FUNCTION IF EXISTS finops_usage_event_append_only();`);
  pgm.dropTable("finops_usage_event");
};
