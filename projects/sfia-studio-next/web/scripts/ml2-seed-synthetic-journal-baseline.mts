/**
 * ML2 — seed isolated synthetic D4 subjects in DEV PG and run real searchJournalSubjects.
 * No LIVE provider. No RECETTE. No migration.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { and, eq } from "drizzle-orm";

process.env.STUDIO_LANE = process.env.STUDIO_LANE || "DEV";

const { db } = await import("../src/db/client.ts");
const {
  pilots,
  projects,
  preparations,
  preparationProjectLinks,
  knowledgeSubjects,
  knowledgeAcquis,
} = await import("../src/db/schema.ts");
const { newId } = await import("../src/lib/ids.ts");
const { searchJournalSubjects } = await import("../src/domains/knowledge/journal.ts");
const { ensureSubject, capitalizeAcquis } = await import(
  "../src/domains/knowledge/service.ts"
);

const OUT = join(process.cwd(), ".sfia-evidence/document-intelligence");
mkdirSync(OUT, { recursive: true });

const oraclePath = join(
  process.cwd(),
  "../construction/convergence-openai-studio/ml2-qualification/corpus-retrieval-oracle.json",
);
const oracle = JSON.parse(readFileSync(oraclePath, "utf8")) as {
  corpusId: string;
  documents: Array<{
    sourceId: string;
    projectId: string;
    version: string;
    revoked?: boolean;
    title: string;
    text: string;
  }>;
  queries: Array<{
    id: string;
    type: string;
    query: string;
    authorizedProjectId: string;
    relevantSourceIds?: string[];
    forbiddenSourceIds?: string[];
    revokedMustNotMobilize?: string[];
    abstentionExpected?: boolean;
  }>;
};

const MARKER = "ml2-synth-docintel-20261127";

async function ensurePilot(displayName: string) {
  const existing = (
    await db.select().from(pilots).where(eq(pilots.displayName, displayName)).limit(1)
  )[0];
  if (existing) return existing.id;
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName, githubUserId: null });
  return id;
}

async function ensureProject(ownerPilotId: string, name: string) {
  const existing = (
    await db
      .select()
      .from(projects)
      .where(and(eq(projects.ownerPilotId, ownerPilotId), eq(projects.name, name)))
      .limit(1)
  )[0];
  if (existing) return existing.id;
  const id = newId("proj");
  await db.insert(projects).values({ id, ownerPilotId, name });
  return id;
}

async function ensurePrep(ownerPilotId: string, previewName: string) {
  const existing = (
    await db
      .select()
      .from(preparations)
      .where(
        and(
          eq(preparations.ownerPilotId, ownerPilotId),
          eq(preparations.previewName, previewName),
        ),
      )
      .limit(1)
  )[0];
  if (existing) return existing.id;
  const id = newId("prep");
  await db.insert(preparations).values({
    id,
    ownerPilotId,
    status: "OPEN",
    previewName,
    previewSummary: `Synthetic ML2 corpus ${MARKER}`,
  });
  return id;
}

async function linkPrep(preparationId: string, projectId: string) {
  const existing = (
    await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.preparationId, preparationId))
      .limit(1)
  )[0];
  if (existing) {
    if (existing.projectId !== projectId) {
      throw new Error(`prep ${preparationId} already linked to ${existing.projectId}`);
    }
    return;
  }
  await db.insert(preparationProjectLinks).values({ preparationId, projectId });
}

const pilotA = await ensurePilot(`${MARKER}-pilot-a`);
const pilotB = await ensurePilot(`${MARKER}-pilot-b`);
const projectA = await ensureProject(pilotA, `${MARKER}-project-a`);
const projectB = await ensureProject(pilotB, `${MARKER}-project-b`);
const prepA = await ensurePrep(pilotA, `${MARKER}-prep-a`);
const prepB = await ensurePrep(pilotB, `${MARKER}-prep-b`);
await linkPrep(prepA, projectA);
await linkPrep(prepB, projectB);

const sourceMap: Record<
  string,
  { subjectId: string; projectId: string; pilotId: string; revoked: boolean }
> = {};

for (const doc of oracle.documents) {
  const isB = doc.projectId.endsWith("-b") || doc.projectId.includes("synthetic-b");
  const pilotId = isB ? pilotB : pilotA;
  const preparationId = isB ? prepB : prepA;
  const projectId = isB ? projectB : projectA;
  const title = `${doc.title} [${doc.sourceId}]`;
  const sub = await ensureSubject(pilotId, preparationId, title);
  if (sub.status !== "AVAILABLE" || !sub.subjectId) {
    throw new Error(`ensureSubject failed for ${doc.sourceId}: ${JSON.stringify(sub)}`);
  }
  // Bind projectId on subject if null
  await db
    .update(knowledgeSubjects)
    .set({ projectId, updatedAt: new Date() })
    .where(eq(knowledgeSubjects.id, sub.subjectId));

  const statement = `${doc.text} (sourceId=${doc.sourceId}; version=${doc.version}; ${MARKER})`;
  const cap = await capitalizeAcquis(pilotId, preparationId, {
    statement,
    kind: "FACT",
    subjectId: sub.subjectId,
    provenance: {
      epistemic: "established",
      origin: "ml2_synthetic_seed",
      sourceId: doc.sourceId,
      version: doc.version,
    },
  });
  if (cap.status === "FAILED" || cap.status === "SKIPPED") {
    throw new Error(`capitalize failed ${doc.sourceId}: ${JSON.stringify(cap)}`);
  }

  if (doc.revoked) {
    await db
      .update(knowledgeSubjects)
      .set({ status: "ARCHIVED", updatedAt: new Date() })
      .where(eq(knowledgeSubjects.id, sub.subjectId));
    if (cap.status === "AVAILABLE" && "acquisId" in cap) {
      await db
        .update(knowledgeAcquis)
        .set({ status: "SUPERSEDED", updatedAt: new Date() })
        .where(eq(knowledgeAcquis.id, cap.acquisId));
    }
  }

  sourceMap[doc.sourceId] = {
    subjectId: sub.subjectId,
    projectId,
    pilotId,
    revoked: Boolean(doc.revoked),
  };
}

const queryRows = [];
for (const q of oracle.queries) {
  const isB = q.authorizedProjectId.includes("synthetic-b");
  const pilotId = isB ? pilotB : pilotA;
  const projectId = isB ? projectB : projectA;
  const result = await searchJournalSubjects(pilotId, projectId, q.query, { limit: 8 });
  const hitSourceIds: string[] = [];
  for (const hit of result.results ?? []) {
    for (const [sourceId, meta] of Object.entries(sourceMap)) {
      if (meta.subjectId === hit.subjectId) hitSourceIds.push(sourceId);
    }
    // also detect via snippet/title containing sourceId
    const blob = `${hit.title}\n${hit.snippet}`.toLowerCase();
    for (const doc of oracle.documents) {
      if (blob.includes(doc.sourceId.toLowerCase()) && !hitSourceIds.includes(doc.sourceId)) {
        hitSourceIds.push(doc.sourceId);
      }
    }
  }
  const forbidden = new Set(q.forbiddenSourceIds ?? []);
  const revoked = new Set(q.revokedMustNotMobilize ?? []);
  const isolationViolation = hitSourceIds.some((id) => forbidden.has(id));
  const revokedMobilized = hitSourceIds.some((id) => revoked.has(id));
  const relevant = new Set(q.relevantSourceIds ?? []);
  let tp = 0;
  for (const id of hitSourceIds) if (relevant.has(id)) tp += 1;
  const abstention =
    relevant.size === 0 && hitSourceIds.length === 0
      ? true
      : q.abstentionExpected === true && hitSourceIds.length === 0;
  queryRows.push({
    queryId: q.id,
    type: q.type,
    coverage: result.coverage,
    hitSourceIds: [...new Set(hitSourceIds)],
    hitCount: result.results?.length ?? 0,
    isolationViolation,
    revokedMobilized,
    abstentionObserved: abstention,
    recallAtK:
      relevant.size === 0
        ? hitSourceIds.length === 0
          ? 1
          : 0
        : tp / relevant.size,
  });
}

const report = {
  script: "ml2-seed-synthetic-journal-baseline",
  marker: MARKER,
  corpusId: oracle.corpusId,
  generatedAt: new Date().toISOString(),
  identities: {
    pilotA,
    pilotB,
    projectA,
    projectB,
    prepA,
    prepB,
  },
  sourceMap,
  queryRows,
  isolationFailCount: queryRows.filter((r) => r.isolationViolation).length,
  revokedMobilizedCount: queryRows.filter((r) => r.revokedMobilized).length,
  verdict:
    queryRows.every((r) => !r.isolationViolation)
      ? "PRODUCT_LEXICAL_BASELINE_SEEDED — REAL searchJournalSubjects"
      : "PRODUCT_LEXICAL_BASELINE_ISOLATION_FAIL",
};

writeFileSync(join(OUT, "product-journal-baseline.json"), JSON.stringify(report, null, 2) + "\n");
console.log(
  JSON.stringify(
    {
      verdict: report.verdict,
      isolationFailCount: report.isolationFailCount,
      revokedMobilizedCount: report.revokedMobilizedCount,
      queries: queryRows.length,
      projectA,
      projectB,
    },
    null,
    2,
  ),
);
process.exit(report.isolationFailCount === 0 ? 0 : 1);
