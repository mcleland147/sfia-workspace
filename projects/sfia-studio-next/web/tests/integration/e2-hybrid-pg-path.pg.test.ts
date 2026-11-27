/**
 * E2-REL-03 — PostgreSQL derived hybrid path with substituted embed client (no LIVE).
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
  hybridSearchProjectKnowledge,
  upsertDerivedAdmissibleSource,
  revokeDerivedSource,
  type EmbedClient,
} from "@/domains/knowledge/derived-embedding-service";
import { ensureSubject, capitalizeAcquis } from "@/domains/knowledge/service";
import { knowledgeAcquis } from "@/db/schema";

const VECTOR_Q = [0.9, 0.1, 0.0, 0.0];

function mockEmbedClient(): EmbedClient {
  return {
    embeddings: {
      create: async () => ({
        data: [{ embedding: VECTOR_Q }],
        usage: { total_tokens: 8 },
      }),
    },
  };
}

async function seedPilotProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  const uniqueName = `${label}-${newId("p").slice(-6)}`;
  await updatePreview(pilotId, prep.id, uniqueName, "e2 hybrid pg");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: uniqueName,
    previewSummary: "e2 hybrid pg",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED") throw new Error(`seed failed: ${created.status}`);
  return { pilotId, projectId: created.projectId!, preparationId: prep.id };
}

describe("E2-REL-03 — hybrid PG path (DET, fake embed)", () => {
  let pilotId = "";
  let projectId = "";
  let preparationId = "";
  let derivedTableReady = false;
  let sourceId = "";
  const prevSearch = process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
  const prevBackend = process.env.SFIA_DERIVED_EMBEDDING_BACKEND;
  const text =
    "Les règles d'habilitation exigent une validation du Pilote avant ouverture.";

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
    const seeded = await seedPilotProject(`e2-hyb-${newId("p").slice(-6)}`);
    pilotId = seeded.pilotId;
    projectId = seeded.projectId;
    preparationId = seeded.preparationId;
    const subject = await ensureSubject(pilotId, preparationId, "Habilitations");
    const subjectId =
      "subjectId" in subject && typeof subject.subjectId === "string"
        ? subject.subjectId
        : null;
    expect(subjectId).toBeTruthy();
    const acquis = await capitalizeAcquis(pilotId, preparationId, {
      statement: text,
      kind: "FACT",
      subjectId: subjectId!,
      provenance: { sourceKind: "pilot", sourceId: "e2-hyb", epistemic: "established" },
    });
    expect(acquis.status).toBe("AVAILABLE");
    sourceId = acquis.acquisId!;
    const stored = (
      await db.select().from(knowledgeAcquis).where(eq(knowledgeAcquis.id, sourceId)).limit(1)
    )[0];
    // Must match collectAdmissibleKnowledgeSources fingerprint text (`${kind}: ${statement}`).
    const indexedText = `FACT: ${stored?.statement?.trim() || text}`;
    const client = mockEmbedClient();
    const up = await upsertDerivedAdmissibleSource({
      pilotId,
      projectId,
      preparationId,
      sourceId,
      sourceKind: "acquis",
      text: indexedText,
      client,
    });
    expect(up.ok).toBe(true);
  });

  afterAll(async () => {
    if (prevSearch === undefined) delete process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
    else process.env.SFIA_DERIVED_EMBEDDING_SEARCH = prevSearch;
    if (prevBackend === undefined) delete process.env.SFIA_DERIVED_EMBEDDING_BACKEND;
    else process.env.SFIA_DERIVED_EMBEDDING_BACKEND = prevBackend;
    if (!derivedTableReady || !projectId) return;
    await pgSql`DELETE FROM derived_embedding_chunks WHERE project_id = ${projectId}`;
  });

  it("semanticHits contribute with derivedUsed=true on PG backend", async ({ skip }) => {
    if (!derivedTableReady) skip("derived_embedding_chunks absent");
    const client = mockEmbedClient();
    const out = await hybridSearchProjectKnowledge({
      pilotId,
      projectId,
      query: "règles habilitation validation",
      lexical: [
        {
          sourceId,
          title: "Habilitations",
          snippet: "Les règles d'habilitation…",
          matchKind: "title",
          channel: "lexical",
        },
      ],
      limit: 8,
      client,
    });
    expect(out.backend).toBe("pg");
    expect(out.derivedSkippedReason).toBeNull();
    expect(out.derivedUsed).toBe(true);
    expect(out.hits.some((h) => h.sourceId === sourceId)).toBe(true);
    const hit = out.hits.find((h) => h.sourceId === sourceId);
    expect(hit?.channel === "both" || hit?.channel === "derived_embedding").toBe(true);
  });

  it("revoked source is excluded after rights revalidation", async ({ skip }) => {
    if (!derivedTableReady) skip("derived_embedding_chunks absent");
    await revokeDerivedSource(projectId, sourceId);
    const client = mockEmbedClient();
    const out = await hybridSearchProjectKnowledge({
      pilotId,
      projectId,
      query: "règles habilitation validation",
      lexical: [
        {
          sourceId,
          title: "Habilitations",
          snippet: "Les règles d'habilitation…",
          matchKind: "title",
          channel: "lexical",
        },
      ],
      limit: 8,
      client,
    });
    const semanticish = out.hits.filter(
      (h) =>
        h.sourceId === sourceId &&
        (h.channel === "derived_embedding" || h.channel === "both"),
    );
    expect(semanticish.length).toBe(0);
  });
});
