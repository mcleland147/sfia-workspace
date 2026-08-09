/**
 * FinOps T7 — PostgreSQL project-scoped rollout config store.
 *
 * Table: finops_rollout_config
 * Absence of row ≠ OFF row. Resolver applies DEFAULT-OFF.
 * Never seeds. Never closes the injected pool.
 *
 * Upsert uses a single atomic PostgreSQL statement so concurrent first
 * writes on an absent projectId still assign exactly one revision per
 * accepted mutation (INSERT revision=1; ON CONFLICT revision = current + 1).
 *
 * Compare-and-swap uses one atomic CTE statement:
 * - existing row: conditional UPDATE on (project_id, mode, revision)
 * - absent row (expected OFF + null revision): conditional INSERT …
 *   ON CONFLICT DO NOTHING (unique project_id → exactly one first-writer)
 */

import type { Pool } from "pg";
import type {
  FinOpsRolloutConfig,
  FinOpsRolloutMode,
} from "../../application/types.rollout";
import { isFinOpsRolloutMode } from "../../application/types.rollout";
import type {
  CompareAndSwapProjectRolloutInput,
  FinOpsRolloutCasPort,
  UpsertProjectRolloutInput,
} from "../../ports/finopsRolloutPort";
import { sanitizeDbError } from "./sanitizeDbError";

function formatUpdatedAt(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return String(value);
}

function rowToConfig(row: Record<string, unknown>): FinOpsRolloutConfig {
  const modeRaw = String(row.mode);
  if (!isFinOpsRolloutMode(modeRaw)) {
    throw new Error("invalid rollout mode from postgres");
  }
  return {
    projectId: String(row.project_id),
    mode: modeRaw,
    revision: Number(row.revision),
    updatedAt: formatUpdatedAt(row.updated_at),
  };
}

function assertCasInputs(input: CompareAndSwapProjectRolloutInput): {
  projectId: string;
  expectedMode: FinOpsRolloutMode;
  expectedRevision: number | null;
  mode: FinOpsRolloutMode;
  updatedAt: string;
} {
  const projectId = input.projectId.trim();
  const updatedAt = input.updatedAt.trim();
  if (!projectId) {
    throw Object.assign(new Error("FinOps rollout rejected invalid projectId"), {
      code: "FINOPS_VALIDATION_FAILED",
      technicalDetailsRedacted: true,
    });
  }
  if (!isFinOpsRolloutMode(input.expectedMode)) {
    throw Object.assign(new Error("FinOps rollout rejected invalid expectedMode"), {
      code: "FINOPS_VALIDATION_FAILED",
      technicalDetailsRedacted: true,
    });
  }
  if (!isFinOpsRolloutMode(input.mode)) {
    throw Object.assign(new Error("FinOps rollout rejected invalid mode"), {
      code: "FINOPS_VALIDATION_FAILED",
      technicalDetailsRedacted: true,
    });
  }
  return {
    projectId,
    expectedMode: input.expectedMode,
    expectedRevision: input.expectedRevision,
    mode: input.mode,
    updatedAt,
  };
}

export function createPostgresFinOpsRolloutStore(pool: Pool): FinOpsRolloutCasPort {
  return {
    async readProjectRollout(projectId: string): Promise<FinOpsRolloutConfig | null> {
      const trimmed = projectId.trim();
      if (!trimmed) {
        return null;
      }
      try {
        const result = await pool.query<Record<string, unknown>>(
          `SELECT project_id, mode, revision, updated_at
           FROM finops_rollout_config
           WHERE project_id = $1`,
          [trimmed],
        );
        const row = result.rows[0];
        if (!row) return null;
        return rowToConfig(row);
      } catch (error) {
        const sanitized = sanitizeDbError(error);
        throw Object.assign(
          new Error(sanitized.message),
          { code: sanitized.code, technicalDetailsRedacted: true },
        );
      }
    },

    async upsertProjectRollout(
      input: UpsertProjectRolloutInput,
    ): Promise<FinOpsRolloutConfig> {
      const projectId = input.projectId.trim();
      const mode: FinOpsRolloutMode = input.mode;
      const updatedAt = input.updatedAt.trim();
      if (!projectId) {
        throw Object.assign(new Error("FinOps rollout rejected invalid projectId"), {
          code: "FINOPS_VALIDATION_FAILED",
          technicalDetailsRedacted: true,
        });
      }
      if (!isFinOpsRolloutMode(mode)) {
        throw Object.assign(new Error("FinOps rollout rejected invalid mode"), {
          code: "FINOPS_VALIDATION_FAILED",
          technicalDetailsRedacted: true,
        });
      }

      try {
        // Single-statement atomic upsert: never precompute revision in application.
        // INSERT path → revision 1; conflict path → durable current revision + 1.
        const result = await pool.query<Record<string, unknown>>(
          `INSERT INTO finops_rollout_config (project_id, mode, revision, updated_at)
           VALUES ($1, $2, 1, $3::timestamptz)
           ON CONFLICT (project_id) DO UPDATE SET
             mode = EXCLUDED.mode,
             revision = finops_rollout_config.revision + 1,
             updated_at = EXCLUDED.updated_at
           RETURNING project_id, mode, revision, updated_at`,
          [projectId, mode, updatedAt],
        );
        const row = result.rows[0];
        if (!row) {
          throw Object.assign(new Error("FinOps rollout upsert returned no row"), {
            code: "FINOPS_CAPTURE_FAILED",
            technicalDetailsRedacted: true,
          });
        }
        return rowToConfig(row);
      } catch (error) {
        if (
          error &&
          typeof error === "object" &&
          "technicalDetailsRedacted" in error
        ) {
          throw error;
        }
        const sanitized = sanitizeDbError(error);
        throw Object.assign(
          new Error(sanitized.message),
          { code: sanitized.code, technicalDetailsRedacted: true },
        );
      }
    },

    async compareAndSwapProjectRollout(
      input: CompareAndSwapProjectRolloutInput,
    ): Promise<FinOpsRolloutConfig | null> {
      const {
        projectId,
        expectedMode,
        expectedRevision,
        mode,
        updatedAt,
      } = assertCasInputs(input);

      // Absent first-writer requires expected OFF + null revision.
      // Any other null-revision expectation is a guaranteed non-match (zero write).
      if (expectedRevision === null && expectedMode !== "OFF") {
        return null;
      }
      // Non-positive / non-integer revision can never match durable revision >= 1.
      if (
        expectedRevision !== null &&
        (!Number.isInteger(expectedRevision) || expectedRevision < 1)
      ) {
        return null;
      }

      try {
        /**
         * Single atomic CTE:
         * - upd: mutate existing row only when mode+revision match
         * - ins: first-writer INSERT only when expecting absent OFF/null;
         *   ON CONFLICT DO NOTHING so a concurrent first-writer loses cleanly
         */
        const result = await pool.query<Record<string, unknown>>(
          `WITH expected AS (
             SELECT
               $1::text AS project_id,
               $2::text AS expected_mode,
               $3::integer AS expected_revision,
               $4::text AS new_mode,
               $5::timestamptz AS updated_at
           ),
           upd AS (
             UPDATE finops_rollout_config AS r
             SET
               mode = e.new_mode,
               revision = r.revision + 1,
               updated_at = e.updated_at
             FROM expected AS e
             WHERE r.project_id = e.project_id
               AND e.expected_revision IS NOT NULL
               AND r.mode = e.expected_mode
               AND r.revision = e.expected_revision
             RETURNING r.project_id, r.mode, r.revision, r.updated_at
           ),
           ins AS (
             INSERT INTO finops_rollout_config (project_id, mode, revision, updated_at)
             SELECT e.project_id, e.new_mode, 1, e.updated_at
             FROM expected AS e
             WHERE e.expected_revision IS NULL
               AND e.expected_mode = 'OFF'
               AND NOT EXISTS (SELECT 1 FROM upd)
             ON CONFLICT (project_id) DO NOTHING
             RETURNING project_id, mode, revision, updated_at
           )
           SELECT project_id, mode, revision, updated_at FROM upd
           UNION ALL
           SELECT project_id, mode, revision, updated_at FROM ins`,
          [projectId, expectedMode, expectedRevision, mode, updatedAt],
        );
        const row = result.rows[0];
        if (!row) return null;
        return rowToConfig(row);
      } catch (error) {
        if (
          error &&
          typeof error === "object" &&
          "technicalDetailsRedacted" in error
        ) {
          throw error;
        }
        const sanitized = sanitizeDbError(error);
        throw Object.assign(
          new Error(sanitized.message),
          { code: sanitized.code, technicalDetailsRedacted: true },
        );
      }
    },
  };
}
