/**
 * C16 — ownership / lease / CAS / partial checkpoint / multi-work PG proofs.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { cognitiveWorks, preparations, pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  checkpointCognitiveWork,
  cognitiveClock,
  openOrResumeCognitiveWork,
  releaseCognitiveWorkLease,
  getCognitiveWork,
  COGNITIVE_LEASE_MS,
} from "@/domains/conversation/cognitive-work";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
} from "@/domains/conversation/investigation-state";

const dockerOk = () => Boolean(process.env.DATABASE_URL?.includes("5433"));

describe.skipIf(!dockerOk())("ML5 C16 cognitive ownership PG", () => {
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
      previewName: "C16 ownership test",
      status: "OPEN",
    });
  });

  afterAll(async () => {
    /* leave rows */
  });

  it("refuses concurrent claim while lease is active", async () => {
    const a = await openOrResumeCognitiveWork({
      pilotId,
      preparationId: prepId,
      objective: "lease exclusive",
      forceNew: true,
    });
    await expect(
      openOrResumeCognitiveWork({
        pilotId,
        preparationId: prepId,
        objective: "lease exclusive",
        workId: a.work.id,
        forceNew: false,
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });
    await releaseCognitiveWorkLease({
      workId: a.work.id,
      ownerToken: a.ownerToken,
      status: "SUSPENDED",
    });
  });

  it("allows reclaim after lease expiry with revision bump", async () => {
    const a = await openOrResumeCognitiveWork({
      pilotId,
      preparationId: prepId,
      objective: "expired lease",
      forceNew: true,
    });
    const revBefore = a.work.revision;
    // Expire lease in DB without releasing.
    await db
      .update(cognitiveWorks)
      .set({ leaseUntil: new Date(cognitiveClock.nowMs() - 1_000) })
      .where(eq(cognitiveWorks.id, a.work.id));
    const b = await openOrResumeCognitiveWork({
      pilotId,
      preparationId: prepId,
      objective: "expired lease",
      workId: a.work.id,
      forceNew: false,
    });
    expect(b.resumed).toBe(true);
    expect(b.work.revision).toBe(revBefore + 1);
    expect(b.ownerToken).not.toBe(a.ownerToken);
    // Stale owner cannot checkpoint.
    await expect(
      checkpointCognitiveWork({
        pilotId,
        workId: a.work.id,
        ownerToken: a.ownerToken,
        expectedRevision: b.work.revision,
        cause: "STALE_OWNER",
        state: createEmptyInvestigation("x"),
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });
    await releaseCognitiveWorkLease({
      workId: b.work.id,
      ownerToken: b.ownerToken,
      status: "SUSPENDED",
    });
  });

  it("partial checkpoint without resources does not wipe prior counters", async () => {
    const opened = await openOrResumeCognitiveWork({
      pilotId,
      preparationId: prepId,
      objective: "resources preserve",
      forceNew: true,
    });
    const state = evaluateContractReadiness({
      ...createEmptyInvestigation("resources preserve"),
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
      cause: "SEG",
      state,
      resources: {
        segmentCalls: 2,
        inputTokens: 100,
        outputTokens: 40,
        webCalls: 1,
      },
    });
    const mid = await getCognitiveWork({ pilotId, workId: opened.work.id });
    await checkpointCognitiveWork({
      pilotId,
      workId: opened.work.id,
      ownerToken: opened.ownerToken,
      expectedRevision: mid.revision,
      cause: "PARTIAL",
      state,
      // resources omitted on purpose
    });
    const after = await getCognitiveWork({ pilotId, workId: opened.work.id });
    expect(after.resources.segmentCalls).toBe(2);
    expect(after.resources.inputTokens).toBe(100);
    expect(after.resources.webCalls).toBe(1);
    await releaseCognitiveWorkLease({
      workId: opened.work.id,
      ownerToken: opened.ownerToken,
      status: "COMPLETE",
    });
  });

  it("two independent works coexist; SUSPENDED is not auto-resumed without workId", async () => {
    const a = await openOrResumeCognitiveWork({
      pilotId,
      preparationId: prepId,
      objective: "work A",
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
      objective: "work B",
      forceNew: false, // must create new — no OPEN auto-resume of SUSPENDED
    });
    expect(b.work.id).not.toBe(a.work.id);
    expect(b.resumed).toBe(false);
    await releaseCognitiveWorkLease({
      workId: b.work.id,
      ownerToken: b.ownerToken,
      status: "COMPLETE",
    });
  });

  it("lease constant is positive (fencing window)", () => {
    expect(COGNITIVE_LEASE_MS).toBeGreaterThan(60_000);
  });
});
