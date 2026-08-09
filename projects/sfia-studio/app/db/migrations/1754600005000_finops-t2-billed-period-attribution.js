/**
 * Migration: FinOps T2 BILLED period attribution scope (OPTION B).
 *
 * Adds attribution_scope + derived_source_reference; execution_run_id nullable
 * for PROJECT_PERIOD facts without fake executionRunId.
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.addColumn("finops_cost_event", {
    attribution_scope: { type: "text" },
  });

  pgm.sql(`
UPDATE finops_cost_event
SET attribution_scope = 'EXECUTION_RUN'
WHERE attribution_scope IS NULL;
`);

  pgm.alterColumn("finops_cost_event", "attribution_scope", {
    notNull: true,
  });

  pgm.alterColumn("finops_cost_event", "execution_run_id", {
    notNull: false,
  });

  pgm.addColumn("finops_cost_event", {
    derived_source_reference: { type: "text" },
  });

  pgm.addConstraint(
    "finops_cost_event",
    "finops_cost_event_attribution_scope_chk",
    {
      check: "attribution_scope IN ('EXECUTION_RUN', 'PROJECT_PERIOD')",
    },
  );

  pgm.addConstraint(
    "finops_cost_event",
    "finops_cost_event_scope_execution_run_id_chk",
    {
      check: `(
        (attribution_scope = 'EXECUTION_RUN' AND execution_run_id IS NOT NULL)
        OR
        (attribution_scope = 'PROJECT_PERIOD' AND execution_run_id IS NULL)
      )`,
    },
  );

  pgm.addConstraint(
    "finops_cost_event",
    "finops_cost_event_scope_derived_source_reference_chk",
    {
      check: `(
        (attribution_scope = 'EXECUTION_RUN')
        OR
        (attribution_scope = 'PROJECT_PERIOD' AND derived_source_reference IS NOT NULL)
      )`,
    },
  );

  pgm.createIndex(
    "finops_cost_event",
    [
      "project_id",
      "period_start",
      "attribution_scope",
      "derived_source_reference",
    ],
    {
      name: "finops_cost_event_project_period_scope_derived_idx",
    },
  );
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  pgm.sql(`
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM finops_cost_event
    WHERE attribution_scope = 'PROJECT_PERIOD'
  ) THEN
    RAISE EXCEPTION
      'Refusing to drop BILLED period attribution: PROJECT_PERIOD rows exist';
  END IF;
END $$;
`);

  pgm.dropIndex(
    "finops_cost_event",
    [],
    { name: "finops_cost_event_project_period_scope_derived_idx" },
  );
  pgm.dropConstraint(
    "finops_cost_event",
    "finops_cost_event_scope_derived_source_reference_chk",
  );
  pgm.dropConstraint(
    "finops_cost_event",
    "finops_cost_event_scope_execution_run_id_chk",
  );
  pgm.dropConstraint(
    "finops_cost_event",
    "finops_cost_event_attribution_scope_chk",
  );
  pgm.dropColumn("finops_cost_event", "derived_source_reference");
  pgm.dropColumn("finops_cost_event", "attribution_scope");
  pgm.alterColumn("finops_cost_event", "execution_run_id", {
    notNull: true,
  });
};
