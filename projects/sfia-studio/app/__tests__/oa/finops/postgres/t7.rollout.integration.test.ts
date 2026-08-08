/**
 * @vitest-environment node
 *
 * FinOps T7 — rollout persistence PostgreSQL integration (T7-PG01..T7-PG10).
 * Ephemeral local/CI Postgres only — never Neon. No seed. No activation.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { Pool, PoolClient } from "pg";
import { resolveFinOpsRollout } from "@/lib/oa/finops/application/resolveFinOpsRollout";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

const REFUSE_SQL = `
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
`;

const CREATE_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS finops_rollout_config (
  project_id text PRIMARY KEY NOT NULL,
  mode text NOT NULL,
  revision bigint NOT NULL,
  updated_at timestamptz NOT NULL,
  CONSTRAINT finops_rollout_config_mode_chk
    CHECK (mode IN ('OFF', 'SHADOW', 'MONITOR', 'E1_ENFORCED')),
  CONSTRAINT finops_rollout_config_revision_chk
    CHECK (revision >= 1)
);
`;

describeDb("FinOps T7 PostgreSQL rollout integration", () => {
  let pool: Pool;
  let lockClient: PoolClient;
  const suffix = `${Date.now()}`;
  const prefix = `proj-t7-pg-${suffix}`;

  beforeAll(async () => {
    // max >= concurrent upsert workers (T7-PG11/PG12 use N=8) + lock client.
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 16 });
    // Session-scoped lock on a held client — serialize DROP/CREATE vs other T7 suites.
    lockClient = await pool.connect();
    await lockClient.query(
      `SELECT pg_advisory_lock(hashtext('finops-t7-rollout-table'))`,
    );
  });

  afterAll(async () => {
    try {
      await pool.query(
        `DELETE FROM finops_rollout_config WHERE project_id LIKE $1`,
        [`${prefix}%`],
      );
    } catch {
      // table may be mid-roundtrip in this suite only
    }
    try {
      await lockClient.query(
        `SELECT pg_advisory_unlock(hashtext('finops-t7-rollout-table'))`,
      );
    } catch {
      // ignore
    }
    lockClient.release();
    await closeFinOpsPool(pool);
  });

  it("T7-PG01 no row → resolver OFF", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-01`;
    const read = await store.readProjectRollout(projectId);
    expect(read).toBeNull();
    const resolved = await resolveFinOpsRollout({ rollout: store }, projectId);
    expect(resolved.mode).toBe("OFF");
    expect(resolved.resolution).toBe("default_off");
  });

  it("T7-PG02 upsert OFF → read OFF revision 1", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-02`;
    const written = await store.upsertProjectRollout({
      projectId,
      mode: "OFF",
      updatedAt: "2026-08-08T08:10:00.000Z",
    });
    expect(written.mode).toBe("OFF");
    expect(written.revision).toBe(1);
    const read = await store.readProjectRollout(projectId);
    expect(read?.mode).toBe("OFF");
    expect(read?.revision).toBe(1);
  });

  it("T7-PG03 upsert SHADOW → persisted project-scoped", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-03`;
    await store.upsertProjectRollout({
      projectId,
      mode: "SHADOW",
      updatedAt: "2026-08-08T08:11:00.000Z",
    });
    const read = await store.readProjectRollout(projectId);
    expect(read?.mode).toBe("SHADOW");
    expect(read?.projectId).toBe(projectId);
  });

  it("T7-PG04 second mutation → revision increments", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-04`;
    const first = await store.upsertProjectRollout({
      projectId,
      mode: "OFF",
      updatedAt: "2026-08-08T08:12:00.000Z",
    });
    const second = await store.upsertProjectRollout({
      projectId,
      mode: "OFF",
      updatedAt: "2026-08-08T08:12:30.000Z",
    });
    expect(first.revision).toBe(1);
    expect(second.revision).toBe(2);
  });

  it("T7-PG05 multi-project isolation", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const a = `${prefix}-05a`;
    const b = `${prefix}-05b`;
    await store.upsertProjectRollout({
      projectId: a,
      mode: "SHADOW",
      updatedAt: "2026-08-08T08:13:00.000Z",
    });
    await store.upsertProjectRollout({
      projectId: b,
      mode: "MONITOR",
      updatedAt: "2026-08-08T08:13:01.000Z",
    });
    expect((await store.readProjectRollout(a))?.mode).toBe("SHADOW");
    expect((await store.readProjectRollout(b))?.mode).toBe("MONITOR");
  });

  it("T7-PG06 invalid DB mode blocked by constraint", async () => {
    const projectId = `${prefix}-06`;
    await expect(
      pool.query(
        `INSERT INTO finops_rollout_config (project_id, mode, revision, updated_at)
         VALUES ($1, 'ACTIVE', 1, NOW())`,
        [projectId],
      ),
    ).rejects.toThrow();
  });

  it("T7-PG07 no global/default row created by migration", async () => {
    const migrationPath = path.join(
      process.cwd(),
      "db/migrations/1754600004000_finops-t7-rollout-config.js",
    );
    const source = readFileSync(migrationPath, "utf8");
    const executable = source
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/.*$/gm, "");
    expect(executable).not.toMatch(/INSERT\s+INTO\s+finops_rollout_config/i);
    expect(executable).not.toMatch(/\bINSERT\b/i);
    const globals = await pool.query(
      `SELECT project_id FROM finops_rollout_config
       WHERE project_id IN ('*', '__global__', 'default', '')`,
    );
    expect(globals.rows).toHaveLength(0);
  });

  it("T7-PG08 down migration refuses while rows exist", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-08`;
    await store.upsertProjectRollout({
      projectId,
      mode: "OFF",
      updatedAt: "2026-08-08T08:14:00.000Z",
    });
    await expect(pool.query(REFUSE_SQL)).rejects.toThrow(
      /Refuse FinOps T7 down migration/,
    );
    const migrationPath = path.join(
      process.cwd(),
      "db/migrations/1754600004000_finops-t7-rollout-config.js",
    );
    expect(readFileSync(migrationPath, "utf8")).toMatch(
      /Refuse FinOps T7 down migration/,
    );
  });

  it("T7-PG09 after clearing rows, down/up round trip succeeds", async () => {
    const client = await pool.connect();
    try {
      await client.query(
        `SELECT pg_advisory_lock(hashtext('finops-t7-migration-roundtrip'))`,
      );
      await client.query(`DELETE FROM finops_rollout_config`);
      await client.query(REFUSE_SQL);
      await client.query(`DROP TABLE finops_rollout_config`);
      const missing = await client.query(
        `SELECT to_regclass('public.finops_rollout_config') AS reg`,
      );
      expect(missing.rows[0]?.reg).toBeNull();
      await client.query(CREATE_TABLE_SQL);
      const present = await client.query(
        `SELECT to_regclass('public.finops_rollout_config') AS reg`,
      );
      expect(present.rows[0]?.reg).toBe("finops_rollout_config");
      const count = await client.query(
        `SELECT COUNT(*)::int AS c FROM finops_rollout_config`,
      );
      expect(count.rows[0]?.c).toBe(0);
    } finally {
      try {
        await client.query(
          `SELECT pg_advisory_unlock(hashtext('finops-t7-migration-roundtrip'))`,
        );
      } catch {
        // ignore
      }
      client.release();
    }
  });

  it("T7-PG10 timestamps stored as timestamptz / canonical ISO on read", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-10`;
    const iso = "2026-08-08T08:15:00.000Z";
    await store.upsertProjectRollout({
      projectId,
      mode: "OFF",
      updatedAt: iso,
    });
    const col = await pool.query<{ data_type: string }>(
      `SELECT data_type FROM information_schema.columns
       WHERE table_name = 'finops_rollout_config' AND column_name = 'updated_at'`,
    );
    expect(col.rows[0]?.data_type).toBe("timestamp with time zone");
    const read = await store.readProjectRollout(projectId);
    expect(read?.updatedAt).toBe(iso);
  });

  it(
    "T7-PG11 concurrent first writes on absent project preserve one revision per accepted mutation",
    async () => {
      const store = createPostgresFinOpsRolloutStore(pool);
      const N = 8;
      // Multiple fresh project rounds harden contention without production hooks.
      for (let round = 0; round < 3; round += 1) {
        const projectId = `${prefix}-11-r${round}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
        const existing = await store.readProjectRollout(projectId);
        expect(existing).toBeNull();

        const results = await Promise.all(
          Array.from({ length: N }, (_, i) =>
            store.upsertProjectRollout({
              projectId,
              mode: i % 2 === 0 ? "OFF" : "SHADOW",
              updatedAt: `2026-08-08T08:30:${String(i).padStart(2, "0")}.000Z`,
            }),
          ),
        );

        expect(results).toHaveLength(N);
        const revisions = results.map((r) => r.revision).sort((a, b) => a - b);
        expect(revisions).toEqual(Array.from({ length: N }, (_, i) => i + 1));
        expect(new Set(revisions).size).toBe(N);
        expect(results.every((r) => r.projectId === projectId)).toBe(true);

        const final = await store.readProjectRollout(projectId);
        expect(final?.revision).toBe(N);
        expect(final?.projectId).toBe(projectId);
      }
    },
    30_000,
  );

  it(
    "T7-PG12 concurrent updates on existing project increment every accepted mutation",
    async () => {
      const store = createPostgresFinOpsRolloutStore(pool);
      const N = 8;
      const projectId = `${prefix}-12-${Date.now()}`;
      const initial = await store.upsertProjectRollout({
        projectId,
        mode: "OFF",
        updatedAt: "2026-08-08T08:31:00.000Z",
      });
      expect(initial.revision).toBe(1);

      const results = await Promise.all(
        Array.from({ length: N }, (_, i) =>
          store.upsertProjectRollout({
            projectId,
            mode: i % 2 === 0 ? "MONITOR" : "OFF",
            updatedAt: `2026-08-08T08:31:${String(i + 1).padStart(2, "0")}.000Z`,
          }),
        ),
      );

      expect(results).toHaveLength(N);
      const revisions = results.map((r) => r.revision).sort((a, b) => a - b);
      expect(revisions).toEqual(
        Array.from({ length: N }, (_, i) => i + 2),
      );
      expect(new Set(revisions).size).toBe(N);

      const final = await store.readProjectRollout(projectId);
      expect(final?.revision).toBe(1 + N);
    },
    30_000,
  );
});
