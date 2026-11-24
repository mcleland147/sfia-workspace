import { config } from "dotenv";
config({ path: ".env.local" });
import { db } from "../src/db/client.ts";
import {
  effectAttempts,
  realizationHandoffs,
  realizationQualifications,
} from "../src/db/schema.ts";
import { eq } from "drizzle-orm";
import { runAutonomousRestitutionAfterTerminal } from "../src/domains/execution/cursor-autonomous-restitution.ts";
import { writeFileSync } from "fs";

const id = "efx_94c1230d-66f2-4929-af07-4a4b4439539f";

async function main() {
  const a = (
    await db.select().from(effectAttempts).where(eq(effectAttempts.id, id)).limit(1)
  )[0];
  if (!a) throw new Error("attempt missing");
  const live = JSON.parse(a.resultJson || "{}") as Record<string, unknown>;
  console.log(
    JSON.stringify(
      {
        status: a.status,
        pipeline: live.restitutionPipelineStatus,
        lease: live.restitutionLeaseExpiresAt,
        reportStatus: live.reportStatus,
        terminalStatus: live.terminalStatus,
      },
      null,
      2,
    ),
  );
  const h = (
    await db
      .select()
      .from(realizationHandoffs)
      .where(eq(realizationHandoffs.attemptId, id))
      .limit(1)
  )[0];
  const q = (
    await db
      .select()
      .from(realizationQualifications)
      .where(eq(realizationQualifications.attemptId, id))
      .limit(1)
  )[0];
  console.log("handoff", h?.status, h?.id);
  console.log("qual", q?.verdict, Boolean(q?.noraAnalysisMarkdown));

  if (live.restitutionPipelineStatus !== "COMPLETE") {
    const expired = {
      ...live,
      restitutionLeaseExpiresAt: new Date(Date.now() - 60_000).toISOString(),
      restitutionPipelineStatus: "PARTIAL",
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(expired), updatedAt: new Date() })
      .where(eq(effectAttempts.id, id));
  }

  const r = await runAutonomousRestitutionAfterTerminal({
    pilotId: a.pilotId,
    projectId: a.projectId,
    attemptId: id,
    attachNoraCognitive: true,
  });
  const out = {
    ran: r.ran,
    verdict: r.verdict,
    pipelineStatus: r.pipelineStatus,
    limits: r.limits?.slice(0, 50),
    criteria: r.criteria,
  };
  writeFileSync("/tmp/sfia-c24-reprise/missions/m2-retry.json", JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
