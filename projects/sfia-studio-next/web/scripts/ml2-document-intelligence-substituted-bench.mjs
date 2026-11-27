#!/usr/bin/env node
/**
 * ML2 substituted benchmark — NO live provider calls.
 * Measures lexical baseline against synthetic retrieval oracle + protocol readiness.
 * Quality of Decisions / Vector Stores / Vision is NOT claimed (FAKE for provider quality).
 */
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
/** projects/sfia-studio-next */
const studioNextRoot = join(__dirname, "../..");
const qualDir = join(
  studioNextRoot,
  "construction/convergence-openai-studio/ml2-qualification",
);
const evidenceDir = join(__dirname, "../.sfia-evidence/document-intelligence");

function loadJson(name) {
  return JSON.parse(readFileSync(join(qualDir, name), "utf8"));
}

function lexicalSearch(documents, query, projectId, k = 5) {
  const q = query.trim().toLowerCase();
  const scored = [];
  for (const doc of documents) {
    if (doc.projectId !== projectId) continue;
    const hay = `${doc.title}\n${doc.text}`.toLowerCase();
    if (!q) continue;
    if (hay.includes(q)) {
      scored.push({ sourceId: doc.sourceId, version: doc.version, score: 1 });
      continue;
    }
    // token overlap weak signal (still lexical, not embedding)
    const tokens = q.split(/\s+/).filter((t) => t.length > 2);
    let hits = 0;
    for (const t of tokens) if (hay.includes(t)) hits += 1;
    if (hits > 0) {
      scored.push({
        sourceId: doc.sourceId,
        version: doc.version,
        score: hits / tokens.length,
      });
    }
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, k);
}

function evaluateRetrieval(oracle) {
  const rows = [];
  for (const query of oracle.queries) {
    const hits = lexicalSearch(
      oracle.documents,
      query.query,
      query.authorizedProjectId,
      5,
    );
    const hitIds = hits.map((h) => h.sourceId);
    const relevant = new Set(query.relevantSourceIds ?? []);
    const forbidden = new Set(query.forbiddenSourceIds ?? []);
    const stale = new Set(query.staleSourceIds ?? []);

    let tp = 0;
    for (const id of hitIds) if (relevant.has(id)) tp += 1;
    const precisionAtK =
      hitIds.length === 0 ? (relevant.size === 0 ? 1 : 0) : tp / hitIds.length;
    const recallAtK =
      relevant.size === 0
        ? hitIds.length === 0
          ? 1
          : 0
        : tp / relevant.size;
    const firstRelevantRank = hitIds.findIndex((id) => relevant.has(id));
    const isolationViolation = hitIds.some((id) => forbidden.has(id));
    const staleMobilized = hitIds.some((id) => stale.has(id));

    rows.push({
      queryId: query.id,
      type: query.type,
      hitIds,
      precisionAtK,
      recallAtK,
      firstRelevantRank: firstRelevantRank >= 0 ? firstRelevantRank + 1 : null,
      isolationViolation,
      staleMobilized,
      qualification: isolationViolation
        ? "FAIL_ISOLATION"
        : "LEXICAL_BASELINE_ONLY",
    });
  }
  return rows;
}

function main() {
  const decisions = loadJson("corpus-decisions-labels.json");
  const retrieval = loadJson("corpus-retrieval-oracle.json");
  const pdf = loadJson("corpus-pdf-vision-oracle.json");

  const retrievalRows = evaluateRetrieval(retrieval);
  const isolationFails = retrievalRows.filter((r) => r.isolationViolation);
  const paraphrase = retrievalRows.filter((r) =>
    ["paraphrase", "synonym"].includes(r.type),
  );

  const exactRows = retrievalRows.filter((r) => r.type === "exact_id");
  const report = {
    generatedAt: new Date().toISOString(),
    mode: "SUBSTITUTED_NO_PROVIDER",
    fakeReal: {
      lexicalBaseline: "REAL_PROTOCOL_MEASURE",
      decisionsProviderQuality: "FAKE_NOT_RUN",
      vectorStoreQuality: "FAKE_NOT_RUN",
      visionQuality: "FAKE_NOT_RUN",
    },
    corpora: {
      decisionsCases: decisions.cases.length,
      retrievalQueries: retrieval.queries.length,
      pdfCases: pdf.cases.length,
      batiNovaUsed: pdf.batiNova?.used === true,
    },
    retrievalLexical: {
      rows: retrievalRows,
      isolationFailCount: isolationFails.length,
      paraphraseMeanRecall:
        paraphrase.length === 0
          ? null
          : paraphrase.reduce((s, r) => s + r.recallAtK, 0) / paraphrase.length,
      exactMeanRecall:
        exactRows.length === 0
          ? null
          : exactRows.reduce((s, r) => s + r.recallAtK, 0) / exactRows.length,
    },
    decisionsProtocolReady: {
      caseCount: decisions.cases.length,
      classes: [...new Set(decisions.cases.map((c) => c.class))],
      liveBlocked: true,
      reason: "Morris checkpoint required before /v1/decisions",
    },
    pdfProtocolReady: {
      caseCount: pdf.cases.length,
      scannedNoTextPathDocumented: true,
      liveVisionBlocked: true,
    },
    verdict:
      "SUBSTITUTED_BENCH_COMPLETE — PROVIDER_QUALITY_NOT_CLAIMED — ARBITRATION_REQUIRED",
  };

  mkdirSync(evidenceDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const outPath = join(evidenceDir, `substituted-bench-${stamp}.json`);
  writeFileSync(outPath, JSON.stringify(report, null, 2) + "\n");
  const latest = join(evidenceDir, "substituted-bench-latest.json");
  writeFileSync(latest, JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify({ outPath, latest, verdict: report.verdict }, null, 2));
}

main();
