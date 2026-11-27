/** ML2 — FinOps reconcile rows without fake project FK. */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const p = join(process.cwd(), ".env.local");
if (existsSync(p)) {
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
process.env.STUDIO_LANE = "DEV";

const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
  "../src/domains/conversation/usage-accounting.ts"
);

const rows = [
  {
    op: "embeddings.derived_index_rebuild",
    model: "text-embedding-3-small",
    inTok: 198,
    out: 0,
    gran: "REQUEST" as const,
    ord: 21,
    coverage: "PARTIAL" as const,
  },
  {
    op: "bounded_judgment.decisions",
    model: "gpt-6-luna",
    inTok: 190,
    out: 0,
    gran: "REQUEST" as const,
    ord: 22,
  },
  {
    op: "nora.ml2_integrated_e2e",
    model: "gpt-6-luna",
    inTok: 800,
    out: 250,
    gran: "GENERATION_AGGREGATE" as const,
    ord: 23,
  },
];

for (const r of rows) {
  const res = await recordProviderUsageObservation({
    operation: r.op,
    modelRequested: r.model,
    modelApplied: r.model,
    inputTokens: r.inTok,
    outputTokens: r.out,
    status: "succeeded",
    granularity: r.gran,
    costCoverage: r.coverage,
    idempotencyKey: buildIdempotencyKey({
      granularity: r.gran,
      lane: "DEV",
      operation: r.op,
      attemptId: "ml2-i2-docintel-20261127",
      callOrdinal: r.ord,
      generationId:
        r.gran === "GENERATION_AGGREGATE" ? "ml2-nora-reconcile" : undefined,
    }),
    limits: ["ML2_RECONCILE", "NO_FAKE_PROJECT_FK"],
  });
  console.log(r.op, res);
}
