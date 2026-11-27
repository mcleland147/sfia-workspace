/**
 * ML2 T13 — concurrent derived upsert/revoke on same source (PG advisory lock).
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db, sql as pgSql } from "@/db/client";
import { pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  revokeDerivedSource,
  upsertDerivedAdmissibleSource,
  type EmbedClient,
} from "@/domains/knowledge/derived-embedding-service";
import { contentFingerprint } from "@/domains/knowledge/derived-embedding-index";

const VECTOR_A = [0.11, 0.22, 0.33, 0.44];
const VECTOR_B = [0.55, 0.66, 0.77, 0.88];

function mockEmbedClient(vectors: Record<string, number[]>): EmbedClient {
  return {
    embeddings: {
      create: async ({ input }) => {
        const text = Array.isArray(input) ? input[0]! : input;
        const vector = vectors[text.trim()] ?? VECTOR_A;
        return {
          data: [{ embedding: vector }],
          usage: { total_tokens: 12 },
        };
      },
    },
  };
}

async function seedPilotProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({ id: pilotId, displayName: label, githubUserId: `gh-${pilotId}` });
  const prep = await openOrCreatePreparation(pilotId);
  const uniqueName = `${label}-${newId("p").slice(-6)}`;
  await updatePreview(pilotId, prep.id, uniqueName, "derived t13");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: uniqueName,
    previewSummary: "derived t13",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED") throw new Error(`seed failed: ${created.status}`);
  return {
    pilotId,
    projectId: created.projectId,
    preparationId: prep.id,
  };
}

async function activeMobilizedRows(projectId: string, sourceId: string) {
  const rows = await pgSql`
    SELECT content_fingerprint, revoked, deleted
    FROM derived_embedding_chunks
    WHERE project_id = ${projectId}
      AND source_id = ${sourceId}
      AND deleted = false
  `;
  return rows;
}

describe("ML2 T13 — derived embedding PG concurrency", () => {
  let projectId = "";
  let pilotId = "";
  let preparationId = "";
  let derivedTableReady = false;
  const sourceId = "acq_t13_concurrency";

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_DERIVED_EMBEDDING_SEARCH = "1";
    process.env.SFIA_DERIVED_EMBEDDING_BACKEND = "pg";
    delete process.env.OPENAI_API_KEY;
    const meta = await pgSql`
      SELECT 1 AS ok
      FROM information_schema.tables
      WHERE table_schema = 'public'
        AND table_name = 'derived_embedding_chunks'
      LIMIT 1
    `;
    derivedTableReady = meta.length > 0;
    if (!derivedTableReady) return;
    const seeded = await seedPilotProject(`ml2-derived-t13-${newId("p").slice(-6)}`);
    projectId = seeded.projectId;
    pilotId = seeded.pilotId;
    preparationId = seeded.preparationId;
  });

  afterAll(async () => {
    if (!derivedTableReady || !projectId) return;
    await pgSql`
      DELETE FROM derived_embedding_chunks WHERE project_id = ${projectId}
    `;
  });

  it("concurrent upserts on same source leave one active fingerprint", async ({
    skip,
  }) => {
    if (!derivedTableReady) {
      skip("derived_embedding_chunks absent on this DATABASE_URL");
    }
    const textA = "capacity twelve units rev A";
    const textB = "capacity twelve units rev B";
    const client = mockEmbedClient({
      [textA]: VECTOR_A,
      [textB]: VECTOR_B,
    });

    const base = {
      pilotId,
      projectId,
      preparationId,
      sourceId,
      sourceKind: "acquis" as const,
      client,
    };

    await Promise.all([
      upsertDerivedAdmissibleSource({ ...base, text: textA }),
      upsertDerivedAdmissibleSource({ ...base, text: textB }),
    ]);

    const rows = await activeMobilizedRows(projectId, sourceId);
    const active = rows.filter((r) => r.revoked === false);
    expect(active).toHaveLength(1);
    const fps = new Set(rows.map((r) => String(r.content_fingerprint)));
    expect(fps.size).toBe(2);
    const winner = String(active[0]!.content_fingerprint);
    expect([contentFingerprint(textA), contentFingerprint(textB)]).toContain(winner);
  });

  it("concurrent upsert + revoke does not mobilize obsolete index", async ({
    skip,
  }) => {
    if (!derivedTableReady) {
      skip("derived_embedding_chunks absent on this DATABASE_URL");
    }
    const sourceId2 = "acq_t13_revoke_race";
    const textC = "open point statement rev C";
    const textD = "open point statement rev D";
    const client = mockEmbedClient({
      [textC]: VECTOR_A,
      [textD]: VECTOR_B,
    });
    const base = {
      pilotId,
      projectId,
      preparationId,
      sourceKind: "acquis" as const,
      client,
    };

    await upsertDerivedAdmissibleSource({
      ...base,
      sourceId: sourceId2,
      text: textC,
    });

    await Promise.all([
      upsertDerivedAdmissibleSource({ ...base, sourceId: sourceId2, text: textD }),
      revokeDerivedSource(projectId, sourceId2),
    ]);

    const rows = await activeMobilizedRows(projectId, sourceId2);
    const active = rows.filter((r) => r.revoked === false);
    expect(active.length).toBeLessThanOrEqual(1);
    if (active.length === 1) {
      expect(String(active[0]!.content_fingerprint)).toBe(contentFingerprint(textD));
    } else {
      expect(rows.every((r) => r.revoked === true)).toBe(true);
    }
  });
});