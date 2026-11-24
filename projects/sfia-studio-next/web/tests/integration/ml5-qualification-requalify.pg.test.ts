/**
 * G15 — concurrent requalify under SELECT FOR UPDATE (PostgreSQL DEV).
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  effectAttempts,
  pilots,
  projects,
  realizationQualifications,
} from "@/db/schema";
import { newId } from "@/lib/ids";

const hasDb = Boolean(process.env.DATABASE_URL);

describe.skipIf(!hasDb)("ML5 G15 concurrent requalify (PostgreSQL)", () => {
  const pilotId = newId("pilot");
  const projectId = newId("proj");
  const attemptId = newId("efx");
  const qualId = newId("rqual");

  beforeAll(async () => {
    await db.insert(pilots).values({
      id: pilotId,
      githubUserId: `dev-g15-${pilotId.slice(-6)}`,
      displayName: "G15 Pilot",
    });
    await db.insert(projects).values({
      id: projectId,
      ownerPilotId: pilotId,
      name: "G15 Project",
    });
    await db.insert(effectAttempts).values({
      id: attemptId,
      pilotId,
      projectId,
      kind: "CURSOR_EXECUTION",
      status: "COMPLETED",
      correlationKey: `g15-${attemptId}`,
      fingerprint: "fp-g15",
      planJson: "{}",
      resultJson: "{}",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await db.insert(realizationQualifications).values({
      id: qualId,
      attemptId,
      handoffId: null,
      projectId,
      pilotId,
      status: "RECORDED",
      rubricsJson: JSON.stringify({}),
      verdict: "INDETERMINATE",
      limitsJson: "[]",
      historyJson: "[]",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });

  afterAll(async () => {
    await db.delete(realizationQualifications).where(eq(realizationQualifications.id, qualId));
    await db.delete(effectAttempts).where(eq(effectAttempts.id, attemptId));
    await db.delete(projects).where(eq(projects.id, projectId));
    await db.delete(pilots).where(eq(pilots.id, pilotId));
  });

  it("two concurrent requalifies preserve both history entries via FOR UPDATE", async () => {
    const runOnce = async (tag: string) =>
      db.transaction(async (tx) => {
        await tx.execute(
          sql`select id from realization_qualifications where id = ${qualId} for update`,
        );
        const locked = (
          await tx
            .select()
            .from(realizationQualifications)
            .where(eq(realizationQualifications.id, qualId))
            .limit(1)
        )[0]!;
        let history: unknown[] = [];
        try {
          history = JSON.parse(locked.historyJson || "[]") as unknown[];
        } catch {
          history = [];
        }
        if (!Array.isArray(history)) history = [];
        history.push({
          at: locked.updatedAt.toISOString(),
          verdict: locked.verdict,
          tag,
          supersededAt: new Date().toISOString(),
          newProofRef: `proof-${tag}`,
        });
        const now = new Date();
        await tx
          .update(realizationQualifications)
          .set({
            status: "REQUALIFIED",
            verdict: tag,
            historyJson: JSON.stringify(history),
            updatedAt: now,
          })
          .where(eq(realizationQualifications.id, qualId));
        return history.length;
      });

    const [a, b] = await Promise.all([runOnce("A"), runOnce("B")]);
    expect(Math.max(a, b)).toBe(2);

    const final = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.id, qualId))
        .limit(1)
    )[0]!;
    const history = JSON.parse(final.historyJson || "[]") as unknown[];
    expect(history).toHaveLength(2);
    expect(final.status).toBe("REQUALIFIED");
  });
});
