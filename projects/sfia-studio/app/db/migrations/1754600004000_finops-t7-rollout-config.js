/**
 * Migration: FinOps T7 dedicated project-scoped rollout config.
 *
 * Order (must remain):
 *   1754500000000 T1
 *   < 1754600000000 T2
 *   < 1754600001000 T6
 *   < 1754600002000 T3
 *   < 1754600003000 T4
 *   < 1754600004000 T7
 *
 * No seed. No monetary columns. No IAM/actor fields. No T6 events. No FK.
 * DEFAULT-OFF is applied in the T7 resolver when no row exists — not via seed.
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("finops_rollout_config", {
    project_id: { type: "text", primaryKey: true, notNull: true },
    mode: { type: "text", notNull: true },
    revision: { type: "bigint", notNull: true },
    updated_at: { type: "timestamptz", notNull: true },
  });

  pgm.addConstraint("finops_rollout_config", "finops_rollout_config_mode_chk", {
    check: "mode IN ('OFF', 'SHADOW', 'MONITOR', 'E1_ENFORCED')",
  });

  pgm.addConstraint(
    "finops_rollout_config",
    "finops_rollout_config_revision_chk",
    {
      check: "revision >= 1",
    },
  );
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  // Data-preserving doctrine: refuse drop when rollout rows exist.
  pgm.sql(`
DO $$
DECLARE
  rollout_count bigint;
BEGIN
  SELECT COUNT(*) INTO rollout_count FROM finops_rollout_config;
  IF rollout_count > 0 THEN
    RAISE EXCEPTION
      'Refuse FinOps T7 down migration: rows exist in finops_rollout_config';
  END IF;
END $$;
`);

  pgm.dropTable("finops_rollout_config");
};
