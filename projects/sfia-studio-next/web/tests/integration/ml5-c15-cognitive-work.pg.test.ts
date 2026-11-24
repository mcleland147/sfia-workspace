/**
 * C15 — cognitive work PG: two works, checkpoint CAS, lease conflict.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { preparations, pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  checkpointCognitiveWork,
  openOrResumeCognitiveWork,
  releaseCognitiveWorkLease,
  getCognitiveWork,
  listCognitiveWorksForPreparation,
} from "@/domains/conversation/cognitive-work";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
} from "@/domains/conversation/investigation-state";

const dockerOk = () => Boolean(process.env.DATABASE_URL?.includes("5433"));

describe.skipIf(!dockerOk())("ML5 C15 cognitive_works PG", () => {
  let pilotId = "";
  let prepId = "";

  beforeAll(async () => {
    const pilot = (
      await db.select().from(pilots).where(eq(pilots.githubUserId, "dev-github-a")).limit(1)
    )[0];
    if (!pilot) throw new Error("Pilot A missing");
    pilotId = pilot.id;
    prepId = newId("prep");
    await db.insert(preparations).values({
      id: prepId,
      ownerPilotId: pilotId,
      previewName: "C15 cognitive work test",
      status: "OPEN",
    });
  });

  afterAll(async () => {
    // leave rows for inspection; DEV only
  });

  it("keeps two distinct works on same preparation", async () => {
    const a = await openOrResumeCognitiveWork({
      pilotId,
      preparationId: prepId,
      objective: "work A TVA",
      forceNew: true,
    });
    await releaseCognitiveWorkLease({
      workId: a.work.id,
      ownerToken: a.ownerToken,
      status: "SUSPENDED",
    });
    const b = await openOrResumeCognitiveWork({
      pilotId,
      preparationId: prepId,
      objective: "work B unrelated",
      forceNew: true,
    });
    await releaseCognitiveWorkLease({
      workId: b.work.id,
      ownerToken: b.ownerToken,
      status: "SUSPENDED",
    });
    expect(a.work.id).not.toBe(b.work.id);
    const listed = await listCognitiveWorksForPreparation({
      pilotId,
      preparationId: prepId,
    });
    expect(listed.length).toBeGreaterThanOrEqual(2);
  });

  it("CAS refuses stale revision checkpoint", async () => {
    const opened = await openOrResumeCognitiveWork({
      pilotId,
      preparationId: prepId,
      objective: "CAS work",
      forceNew: true,
    });
    const state = evaluateContractReadiness({
      ...createEmptyInvestigation("CAS work"),
      desiredOutcome: "ok",
      sources: [{ kind: "D4", ref: "d1", coverage: "CONSULTED" }],
      questions: [
        {
          id: "q1",
          text: "ok?",
          status: "ANSWERED",
          importance: "DETERMINANT",
          answerSummary: "oui",
        },
      ],
    });
    await checkpointCognitiveWork({
      pilotId,
      workId: opened.work.id,
      ownerToken: opened.ownerToken,
      expectedRevision: opened.work.revision,
      cause: "TEST",
      state,
    });
    await expect(
      checkpointCognitiveWork({
        pilotId,
        workId: opened.work.id,
        ownerToken: opened.ownerToken,
        expectedRevision: opened.work.revision, // stale
        cause: "STALE",
        state,
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });
    const latest = await getCognitiveWork({
      pilotId,
      workId: opened.work.id,
    });
    expect(latest.revision).toBe(opened.work.revision + 1);
    await releaseCognitiveWorkLease({
      workId: opened.work.id,
      ownerToken: opened.ownerToken,
      status: "COMPLETE",
    });
  });
});
