/**
 * ML2 — FinOps reconcile from primary qualify-report evidence.
 * Default: dry-run (print plan). Pass --write to insert ledger rows.
 * Hardcoded 198/800/250 are NOT independent proof — see finops-reconcile-audit.
 */
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

const write = process.argv.includes("--write");
const reportPath = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/integrated-delivery/qualify-report.json",
);

type RowPlan = {
  op: string;
  model: string;
  inTok: number | null;
  out: number | null;
  gran: "REQUEST" | "GENERATION_AGGREGATE";
  ord: number;
  coverage: "PARTIAL" | "UNKNOWN";
  provenance: "PRIMARY" | "ESTIMATED_RECONCILE";
  note: string;
};

const plans: RowPlan[] = [];

if (!existsSync(reportPath)) {
  console.error("MISSING_QUALIFY_REPORT", reportPath);
  process.exit(2);
}

const report = JSON.parse(readFileSync(reportPath, "utf8")) as {
  conv?: {
    F21?: {
      boundedJudgmentAmb?: {
        usage?: { inputTokens?: number; outputTokens?: number; model?: string };
      };
    };
  };
  nora?: { status?: string };
  finops?: { livePhaseTokensIn?: number; livePhaseTokensOut?: number };
};

const bj = report.conv?.F21?.boundedJudgmentAmb?.usage;
if (bj?.inputTokens != null) {
  plans.push({
    op: "bounded_judgment.decisions",
    model: bj.model ?? "gpt-6-luna",
    inTok: bj.inputTokens,
    out: bj.outputTokens ?? 0,
    gran: "REQUEST",
    ord: 22,
    coverage: "PARTIAL",
    provenance: "PRIMARY",
    note: "qualify-report conv.F21.boundedJudgmentAmb.usage",
  });
}

// Embeddings rebuild + Nora aggregate were historically hardcoded — keep as
// estimated markers only (do not claim independent provider proof).
plans.push({
  op: "embeddings.derived_index_rebuild",
  model: "text-embedding-3-small",
  inTok: 198,
  out: 0,
  gran: "REQUEST",
  ord: 21,
  coverage: "PARTIAL",
  provenance: "ESTIMATED_RECONCILE",
  note: "historical reconcile value — NOT independent primary usage proof",
});

plans.push({
  op: "nora.ml2_integrated_e2e",
  model: "gpt-6-luna",
  inTok: 800,
  out: 250,
  gran: "GENERATION_AGGREGATE",
  ord: 23,
  coverage: "UNKNOWN",
  provenance: "ESTIMATED_RECONCILE",
  note: "nora object lacks measured tokens; envelope committed ≠ Nora usage",
});

console.log(
  JSON.stringify(
    {
      write,
      reportPath,
      livePhaseTokensIn: report.finops?.livePhaseTokensIn ?? null,
      livePhaseTokensOut: report.finops?.livePhaseTokensOut ?? null,
      plans,
    },
    null,
    2,
  ),
);

if (!write) {
  console.log("DRY_RUN — pass --write to insert (preserves history; marks provenance)");
  process.exit(0);
}

const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
  "../src/domains/conversation/usage-accounting.ts"
);

for (const r of plans) {
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
      callOrdinal: r.ord + 1000, // distinct from historical ords
      generationId:
        r.gran === "GENERATION_AGGREGATE" ? "ml2-nora-reconcile-v2" : undefined,
    }),
    limits: [
      "ML2_RECONCILE",
      "NO_FAKE_PROJECT_FK",
      r.provenance,
      r.note.slice(0, 120),
    ],
  });
  console.log(r.op, r.provenance, res);
}
