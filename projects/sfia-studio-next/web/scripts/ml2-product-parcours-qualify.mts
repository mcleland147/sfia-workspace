/**
 * ML2 — product parcours qualification WITHOUT new LIVE emission.
 * Exercises real DEV PG/API: journal, rights, hybrid (stub embed), cognitive
 * work + checkpoint, document create/revise/versions.
 * Full Nora investigation→note→revise LIVE gated by live-checkpoint-post-gate-b.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { randomUUID } from "node:crypto";

const OUT = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/product-parcours",
);
mkdirSync(OUT, { recursive: true });

function loadEnvLocal() {
  const p = join(process.cwd(), ".env.local");
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const i = line.indexOf("=");
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    )
      v = v.slice(1, -1);
    if (!(k in process.env) || process.env[k] === "") process.env[k] = v;
  }
}

loadEnvLocal();
process.env.STUDIO_LANE = "DEV";
process.env.SFIA_WEB_SEARCH_LIVE = "0";
process.env.SFIA_WEB_SEARCH_ENABLED = "0";
process.env.SFIA_DERIVED_EMBEDDING_BACKEND = "pg";
process.env.SFIA_DERIVED_EMBEDDING_SEARCH = "1";

const report: Record<string, unknown> = {
  startedAt: new Date().toISOString(),
  mode: "PG_API_SUBSTITUTED_EMBED_NO_NEW_LIVE",
  steps: [] as unknown[],
  verdict: null,
};

const { sql: pg } = await import("../src/db/client.ts");
const projRows = await pg`
  SELECT p.id AS project_id, p.owner_pilot_id AS pilot_id, l.preparation_id
  FROM projects p
  JOIN preparation_project_links l ON l.project_id = p.id
  WHERE p.id = 'proj_330057a0-cb37-4ab1-9c98-be5eb4454ead'
  LIMIT 1
`;
const proj = projRows[0];
if (!proj) throw new Error("SYNTHETIC_PROJECT_MISSING");
const pilotId = String(proj.pilot_id);
const projectId = String(proj.project_id);
const preparationId = String(proj.preparation_id);
const foreignId = "proj_239db87c-0f2c-47ae-b9fd-1b53fd15a7e3";

const { listProjectKnowledge, searchJournalSubjects } = await import(
  "../src/domains/knowledge/journal.ts"
);
const {
  collectAdmissibleKnowledgeSources,
  hybridSearchProjectKnowledge,
  revokeDerivedSource,
  derivedEmbeddingBackend,
} = await import("../src/domains/knowledge/derived-embedding-service.ts");
const { contentFingerprint } = await import(
  "../src/domains/knowledge/derived-embedding-index.ts"
);
const {
  countDerivedChunksPg,
  markDerivedChunkLifecyclePg,
} = await import("../src/domains/knowledge/derived-embedding-pg.ts");
const {
  openOrResumeCognitiveWork,
  checkpointCognitiveWork,
  loadLatestCheckpoint,
  releaseCognitiveWorkLease,
} = await import("../src/domains/conversation/cognitive-work.ts");
const {
  savePreparationDocument,
  reviseDocument,
  listDocumentRevisions,
} = await import("../src/domains/document/service.ts");

// 1. Journal / D4 knowledge bundle (rights)
const bundle = await listProjectKnowledge(pilotId, projectId);
const admissible = collectAdmissibleKnowledgeSources(bundle);
(report.steps as unknown[]).push({
  step: "listProjectKnowledge",
  subjects: bundle.subjects.length,
  acquisCurrent: bundle.acquis.filter((a) => a.status === "CURRENT").length,
  admissible: admissible.length,
  backend: derivedEmbeddingBackend(),
});

// 2. Lexical journal search (real PG)
const journal = await searchJournalSubjects(pilotId, projectId, "Orion", {
  openPointsOnly: false,
});
(report.steps as unknown[]).push({
  step: "searchJournalSubjects",
  status: journal.status,
  resultCount: (journal.results || []).length,
  coverage: journal.coverage,
});

// 3. Foreign project denied
let foreignDenied = false;
try {
  await listProjectKnowledge(pilotId, foreignId);
} catch {
  foreignDenied = true;
}
(report.steps as unknown[]).push({
  step: "foreignProjectDenied",
  denied: foreignDenied,
});

// 4. Stale fingerprint filter (no provider): mock semanticHits with wrong fp
const { mergeLexicalAndDerived } = await import(
  "../src/domains/knowledge/hybrid-knowledge-search.ts"
);
const sample = admissible[0];
if (sample) {
  const liveFp = contentFingerprint(sample.text);
  const staleRef = `deri://${projectId}/${sample.sourceId}@deadbeefdeadbeefdeadbeefdeadbeef`;
  const merged = mergeLexicalAndDerived({
    projectId,
    lexical: [],
    queryVector: new Array(8).fill(0.01),
    allowedSourceIds: new Set([sample.sourceId]),
    semanticHits: [
      {
        sourceId: sample.sourceId,
        sourceKind: sample.sourceKind,
        score: 0.99,
        versionLabel: sample.versionLabel,
        indexRef: staleRef,
        preparationId,
        snippet: "stale",
      },
    ],
    env: { SFIA_DERIVED_EMBEDDING_SEARCH: "1" } as NodeJS.ProcessEnv,
  });
  (report.steps as unknown[]).push({
    step: "staleFingerprintDetectable",
    liveFpPrefix: liveFp.slice(0, 8),
    staleRefHasWrongFp: !staleRef.endsWith(liveFp),
    mergeReturnedStaleWithoutServiceFilter: merged.hits.some(
      (h) => h.indexRef === staleRef,
    ),
    note: "Service hybridSearch re-filters via fresh listProjectKnowledge + fp match",
  });
}

// 5. Hybrid search with SUBSTITUTED embed client (no LIVE HTTP)
const stubClient = {
  embeddings: {
    create: async () => ({
      data: [{ embedding: Array.from({ length: 1536 }, () => 0.01) }],
      usage: { total_tokens: 0 },
    }),
  },
};
const lexicalHits = (journal.results || []).slice(0, 5).map((r) => ({
  sourceId: String(
    (r as { subjectId?: string }).subjectId ??
      (r as { id?: string }).id ??
      "",
  ),
  snippet: String(
    (r as { title?: string }).title ??
      (r as { snippet?: string }).snippet ??
      "lex",
  ),
  matchKind: "title" as const,
  channel: "lexical" as const,
}));
const hybrid = await hybridSearchProjectKnowledge({
  pilotId,
  projectId,
  query: "capacite Orion",
  lexical: lexicalHits.filter((h) => h.sourceId),
  limit: 8,
  client: stubClient,
});
(report.steps as unknown[]).push({
  step: "hybridSearchSubstitutedEmbed",
  derivedUsed: hybrid.derivedUsed,
  rightsRevalidated: hybrid.rightsRevalidated,
  backend: hybrid.backend,
  hitCount: hybrid.hits.length,
  skipped: hybrid.derivedSkippedReason,
});

// 6. PG chunk inventory + revoke opposable + restore
const beforeCount = await countDerivedChunksPg(projectId);
const victim = admissible.find((a) => a.sourceKind === "acquis");
let revokeOk = false;
let restoreOk = false;
if (victim) {
  revokeOk = await revokeDerivedSource(projectId, victim.sourceId);
  const n = await markDerivedChunkLifecyclePg({
    projectId,
    sourceId: victim.sourceId,
    revoked: false,
  });
  restoreOk = n > 0;
}
(report.steps as unknown[]).push({
  step: "pgChunksAndRevokeRestore",
  beforeCount,
  revokeId: victim?.sourceId ?? null,
  revokeOk,
  restoreOk,
});

// 7. Cognitive work + checkpoint (D3) — no provider
const opened = await openOrResumeCognitiveWork({
  pilotId,
  preparationId,
  projectId,
  objective: "Qualification ML2 — note sourcée Orion (parcours PG/API)",
  expectedOutcome: "Document note + révision ciblée",
  forceNew: true,
});
const ck = await checkpointCognitiveWork({
  pilotId,
  workId: opened.work.id,
  ownerToken: opened.ownerToken,
  expectedRevision: opened.work.revision,
  cause: "ML2_PARCOURS_QUALIFY",
  state: opened.work.state,
  production: {
    kind: "DOCUMENT",
    status: "IN_PROGRESS",
    parts: [{ id: "note-1", title: "Note Orion", complete: false }],
  },
  status: "RUNNING",
});
const latest = await loadLatestCheckpoint({
  pilotId,
  workId: opened.work.id,
});
await releaseCognitiveWorkLease({
  workId: opened.work.id,
  ownerToken: opened.ownerToken,
  status: "SUSPENDED",
  interruptCause: "ML2_PARCOURS_QUALIFY_DONE",
}).catch(() => null);
(report.steps as unknown[]).push({
  step: "cognitiveWorkCheckpoint",
  workId: opened.work.id,
  resumed: opened.resumed,
  revisionAfter: ck.revision,
  checkpointRevision: latest?.revision ?? null,
  checkpointCause: latest?.cause ?? null,
});

// 8. Document create + revise (versions) — real PG, no LIVE
const corrCreate = `ml2-parcours-create:${randomUUID()}`;
const created = await savePreparationDocument(
  pilotId,
  preparationId,
  "Note qualification Orion (synthétique)",
  [
    "# Note Orion",
    "",
    "Synthèse qualification ML2 — sources journal admissibles.",
    "",
    `- Projet: ${projectId}`,
    `- Work: ${opened.work.id}`,
    `- Hits hybrides: ${hybrid.hits.length}`,
  ].join("\n"),
  undefined,
  { correlationKey: corrCreate },
);
const docId =
  created && "documentId" in created
    ? String((created as { documentId?: string }).documentId ?? "")
    : "";
const revId =
  created && "revisionId" in created
    ? String((created as { revisionId?: string }).revisionId ?? "")
    : created && "id" in created
      ? String((created as { id?: string }).id ?? "")
      : "";
let reviseStatus: string | null = null;
let revisionCount = 0;
if (docId && revId) {
  const corrRev = `ml2-parcours-revise:${randomUUID()}`;
  const revised = await reviseDocument(pilotId, preparationId, {
    documentId: docId,
    sourceRevisionId: revId,
    observedHeadRevisionId: revId,
    contentMarkdown: [
      "# Note Orion (rév. 2)",
      "",
      "Révision ciblée — prise en compte versions.",
      "",
      `- Checkpoint: ${latest?.revision ?? "n/a"}`,
      `- Citations hybrid: ${hybrid.hits
        .slice(0, 3)
        .map((h) => h.sourceId)
        .join(", ")}`,
    ].join("\n"),
    correlationKey: corrRev,
  });
  reviseStatus =
    revised && "status" in revised
      ? String((revised as { status: string }).status)
      : "unknown";
  const revs = await listDocumentRevisions(pilotId, preparationId, docId);
  revisionCount = Array.isArray(revs.revisions) ? revs.revisions.length : 0;
}
(report.steps as unknown[]).push({
  step: "documentCreateRevise",
  createStatus:
    created && "status" in created
      ? String((created as { status: string }).status)
      : null,
  documentId: docId || null,
  baseRevisionId: revId || null,
  reviseStatus,
  revisionCount,
});

// 9. Inventory after writes
const docsAfter = await pg`
  SELECT id, title FROM documents
  WHERE preparation_id = ${preparationId}
  ORDER BY created_at DESC
  LIMIT 10
`;
const worksAfter = await pg`
  SELECT id, status, revision FROM cognitive_works
  WHERE preparation_id = ${preparationId}
  ORDER BY created_at DESC
  LIMIT 5
`;
(report.steps as unknown[]).push({
  step: "inventoryAfter",
  documents: docsAfter.length,
  works: worksAfter.length,
  latestDoc: docsAfter[0]
    ? { id: docsAfter[0].id, title: docsAfter[0].title }
    : null,
  latestWork: worksAfter[0]
    ? {
        id: worksAfter[0].id,
        status: worksAfter[0].status,
        revision: worksAfter[0].revision,
      }
    : null,
  note: "Nora LIVE investigation loop awaits Morris GO on live-checkpoint-post-gate-b",
});

const coreOk =
  foreignDenied &&
  admissible.length > 0 &&
  hybrid.rightsRevalidated &&
  Boolean(opened.work.id) &&
  Boolean(latest?.revision) &&
  Boolean(docId) &&
  revisionCount >= 2;

report.finishedAt = new Date().toISOString();
report.verdict = coreOk
  ? "PARCOURS_PG_API_PASS — LIVE_NORA_LOOP_AWAITS_GO"
  : "PARCOURS_INCOMPLETE";
writeFileSync(join(OUT, "parcours-report.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
process.exit(coreOk ? 0 : 1);
