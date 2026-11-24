import { config } from "dotenv";
import path from "path";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { eq } from "drizzle-orm";
import { prepareVitestMutativeDatabaseUrl } from "../src/lib/e2e-pg-gate";
import { db } from "../src/db/client";
import { effectAttempts, realizationQualifications } from "../src/db/schema";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.resolve(__dirname, "../.env.local") });
process.env.DATABASE_URL = prepareVitestMutativeDatabaseUrl(
  process.env.DATABASE_URL!,
);
console.log("db", process.env.DATABASE_URL.replace(/:[^:@]+@/, ":***@"));

const id = process.argv[2] || "efx_5184aab4-4c0e-47cc-919c-1637b1d8422b";
const a = (
  await db.select().from(effectAttempts).where(eq(effectAttempts.id, id)).limit(1)
)[0];
const live = JSON.parse(a?.resultJson || "{}");
const q = (
  await db
    .select()
    .from(realizationQualifications)
    .where(eq(realizationQualifications.attemptId, id))
    .limit(1)
)[0];

const out = {
  attemptId: id,
  status: a?.status,
  pipe: live.restitutionPipelineStatus,
  verdict: q?.verdict,
  noraLen: (q?.noraAnalysisMarkdown || "").length,
  noraHead: (q?.noraAnalysisMarkdown || "").slice(0, 800),
  noraMarker: (q?.noraAnalysisMarkdown || "").includes("NORA_COGNITIVE")
    ? "NORA_COGNITIVE"
    : (q?.noraAnalysisMarkdown || "").slice(0, 40),
  limits: q?.limitsJson,
  handoffId: live.restitutionHandoffId,
  qualId: q?.id,
  agentId: live.agentId,
  runId: live.runId,
  dossierVersion: live.restitutionDossierVersion,
  completedAt: live.restitutionCompletedAt,
};
console.log(JSON.stringify(out, null, 2));
writeFileSync("/tmp/sfia-c22-campaign/live2-final.json", JSON.stringify(out, null, 2));
