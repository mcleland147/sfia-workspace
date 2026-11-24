import { config } from "dotenv";
config({ path: ".env.local" });
import { db } from "../src/db/client.ts";
import {
  projects,
  technicalContracts,
  documents,
} from "../src/db/schema.ts";
import { desc, eq, like } from "drizzle-orm";
import { loadInvestigationSnapshot } from "../src/domains/conversation/investigation-persistence.ts";

async function main() {
  const projs = await db
    .select()
    .from(projects)
    .where(like(projects.name, "C24 Director%"))
    .orderBy(desc(projects.createdAt))
    .limit(2);
  for (const p of projs) {
    const row = p as Record<string, unknown>;
    console.log(
      JSON.stringify({
        projectId: p.id,
        name: p.name,
        pilot: p.ownerPilotId,
        keys: Object.keys(row).filter((k) => /prep|source/i.test(k)),
        prep: row.preparationId ?? row.sourcePreparationId ?? null,
      }),
    );
    const cs = await db
      .select()
      .from(technicalContracts)
      .where(eq(technicalContracts.projectId, p.id))
      .limit(5);
    console.log("contracts", cs.length);
    for (const c of cs) {
      console.log({
        contractId: c.id,
        status: c.status,
        prep: c.preparationId,
        workId: c.cognitiveWorkId,
      });
      if (!c.preparationId) continue;
      const docs = await db
        .select()
        .from(documents)
        .where(eq(documents.preparationId, c.preparationId))
        .limit(10);
      console.log(
        "docs-for-contract-prep",
        docs.map((d) => ({
          id: d.id,
          prep: d.preparationId,
          pilot: d.ownerPilotId,
          title: d.title,
        })),
      );
      const snap = await loadInvestigationSnapshot({
        pilotId: p.ownerPilotId,
        preparationId: c.preparationId,
        intentFallback: "x",
        workId: c.cognitiveWorkId,
      });
      console.log(
        "sources",
        snap?.sources?.map((s) => ({
          kind: s.kind,
          ref: s.ref?.slice(0, 80),
          coverage: s.coverage,
        })),
      );
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
