/**
 * Migration: FinOps T6-foundation append-only audit journal (O1-backed).
 * T1 capture outcomes only — no Money columns, no external telemetry.
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("finops_audit_event", {
    audit_event_id: { type: "text", primaryKey: true, notNull: true },
    event_type: { type: "text", notNull: true },
    project_id: { type: "text" },
    execution_run_id: { type: "text" },
    correlation_id: { type: "text" },
    occurred_at: { type: "timestamptz", notNull: true },
    payload_json: { type: "jsonb", notNull: true },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
  });

  pgm.addConstraint("finops_audit_event", "finops_audit_event_type_chk", {
    check:
      "event_type IN ('finops_capture_created', 'finops_capture_duplicate', 'finops_capture_failed')",
  });

  pgm.createIndex("finops_audit_event", ["project_id", "occurred_at"], {
    name: "finops_audit_event_project_occurred_idx",
  });

  pgm.createIndex("finops_audit_event", ["execution_run_id"], {
    name: "finops_audit_event_execution_run_idx",
  });

  // Append-only guard: block UPDATE/DELETE of audit rows.
  pgm.sql(`
CREATE OR REPLACE FUNCTION finops_audit_event_append_only()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  RAISE EXCEPTION 'finops_audit_event is append-only';
END;
$$;
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_audit_event_no_update
BEFORE UPDATE ON finops_audit_event
FOR EACH ROW
EXECUTE FUNCTION finops_audit_event_append_only();
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_audit_event_no_delete
BEFORE DELETE ON finops_audit_event
FOR EACH ROW
EXECUTE FUNCTION finops_audit_event_append_only();
`);
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  pgm.sql(`
DO $$
DECLARE
  event_count bigint;
BEGIN
  SELECT COUNT(*) INTO event_count FROM finops_audit_event;
  IF event_count > 0 THEN
    RAISE EXCEPTION 'Refusing to drop finops_audit_event: % row(s) present', event_count;
  END IF;
END $$;
`);

  pgm.sql(
    `DROP TRIGGER IF EXISTS trg_finops_audit_event_no_delete ON finops_audit_event;`,
  );
  pgm.sql(
    `DROP TRIGGER IF EXISTS trg_finops_audit_event_no_update ON finops_audit_event;`,
  );
  pgm.sql(`DROP FUNCTION IF EXISTS finops_audit_event_append_only();`);
  pgm.dropTable("finops_audit_event");
};
