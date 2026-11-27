/**
 * E2-FINAL-03 — real FinOps service attribution on PostgreSQL DEV (no LIVE).
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db, sql as pgSql } from "@/db/client";
import {
  cognitiveWorks,
  pilots,
  preparations,
  projects,
  providerUsageObservations,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  loadFinOpsSummary,
  loadFinOpsWorkDetail,
  loadFinOpsWorks,
} from "@/domains/finops/usage-read-service";

async function seedPilot() {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: "e2-final-finops",
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  return { pilotId, preparationId: prep.id };
}

async function seedProject(pilotId: string, preparationId: string, name: string) {
  await updatePreview(pilotId, preparationId, name, "e2-final");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, preparationId))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "e2-final",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`project seed failed: ${created.status}`);
  }
  return created.projectId;
}

async function insertObs(input: {
  pilotId: string;
  projectId: string | null;
  workId: string | null;
  tokens: number;
  model?: string;
}) {
  const id = crypto.randomUUID();
  await db.insert(providerUsageObservations).values({
    id,
    ownerPilotId: input.pilotId,
    projectId: input.projectId,
    cognitiveWorkId: input.workId,
    lane: "DEV",
    operation: "chat.completions",
    modelRequested: input.model ?? "gpt-test",
    modelApplied: "UNVERIFIED",
    status: "OBSERVED",
    costCoverage: "KNOWN",
    granularity: "REQUEST",
    tariffVersion: "test-v1",
    idempotencyKey: `e2-final-${id}`,
    estimatedCostUsd: "0.01",
    inputTokens: input.tokens,
    outputTokens: 0,
    cachedInputTokens: 0,
    totalTokens: input.tokens,
    providerRequests: 1,
    segmentIndex: 0,
    createdAt: new Date(),
    limitsJson: [],
  });
  return id;
}

describe("E2-FINAL-03 — FinOps attribution coherence (PG)", () => {
  let pilotId = "";
  let prepId = "";
  let projectA = "";
  let projectB = "";
  let workAA = "";
  let workNullMulti = "";
  let workHors = "";
  let workConflictBA = "";
  const createdObs: string[] = [];
  const createdWorks: string[] = [];

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
    const seeded = await seedPilot();
    pilotId = seeded.pilotId;
    prepId = seeded.preparationId;
    projectA = await seedProject(pilotId, prepId, `finA-${newId("p").slice(-6)}`);
    // Second project needs new prep revision — open another prep path via same prep after bump
    await updatePreview(pilotId, prepId, `finB-${newId("p").slice(-6)}`, "e2-final-b");
    const refreshed = (
      await db.select().from(preparations).where(eq(preparations.id, prepId))
    )[0]!;
    // createProjectCommand requires matching name — create via direct insert for isolation
    projectB = newId("proj");
    await db.insert(projects).values({
      id: projectB,
      ownerPilotId: pilotId,
      name: `finB-${projectB.slice(-6)}`,
    });
    void refreshed;

    workAA = newId("cgw");
    workNullMulti = newId("cgw");
    workHors = newId("cgw");
    workConflictBA = newId("cgw");
    for (const [id, projectId] of [
      [workAA, projectA],
      [workNullMulti, null],
      [workHors, null],
      [workConflictBA, projectA],
    ] as const) {
      await db.insert(cognitiveWorks).values({
        id,
        ownerPilotId: pilotId,
        projectId,
        preparationId: prepId,
        objective: `work ${id}`,
        status: "COMPLETE",
        revision: 1,
      });
      createdWorks.push(id);
    }

    createdObs.push(
      await insertObs({ pilotId, projectId: projectA, workId: workAA, tokens: 100 }),
      await insertObs({ pilotId, projectId: null, workId: workAA, tokens: 10 }),
      await insertObs({ pilotId, projectId: projectA, workId: workNullMulti, tokens: 40 }),
      await insertObs({ pilotId, projectId: projectB, workId: workNullMulti, tokens: 60 }),
      await insertObs({ pilotId, projectId: null, workId: workHors, tokens: 7 }),
      await insertObs({ pilotId, projectId: projectB, workId: workConflictBA, tokens: 99 }),
    );
  });

  afterAll(async () => {
    if (createdObs.length) {
      await pgSql`DELETE FROM provider_usage_observations WHERE id = ANY(${createdObs})`;
    }
    if (createdWorks.length) {
      await pgSql`DELETE FROM cognitive_works WHERE id = ANY(${createdWorks})`;
    }
    if (projectB) {
      await pgSql`DELETE FROM projects WHERE id = ${projectB}`;
    }
  });

  it("A/A and NULL/A concordant under project A; B/A conflict excluded", async () => {
    const summaryA = await loadFinOpsSummary(pilotId, { projectId: projectA, period: "30" });
    const summaryB = await loadFinOpsSummary(pilotId, { projectId: projectB, period: "30" });
    const global = await loadFinOpsSummary(pilotId, { period: "30" });

    // workNullMulti A+B must not appear in either project filter (conflict).
    const worksA = await loadFinOpsWorks(pilotId, { projectId: projectA, period: "30" });
    const worksB = await loadFinOpsWorks(pilotId, { projectId: projectB, period: "30" });
    expect(worksA.items.some((w) => w.cognitiveWorkId === workNullMulti)).toBe(false);
    expect(worksB.items.some((w) => w.cognitiveWorkId === workNullMulti)).toBe(false);

    // Concordant workAA appears under A.
    expect(worksA.items.some((w) => w.cognitiveWorkId === workAA)).toBe(true);

    // B/A conflict work excluded from A and B project scopes.
    expect(worksA.items.some((w) => w.cognitiveWorkId === workConflictBA)).toBe(false);
    expect(worksB.items.some((w) => w.cognitiveWorkId === workConflictBA)).toBe(false);

    // Global still retains conflicting consumptions (not erased).
    expect(global.hasObservations).toBe(true);
    const detailConflict = await loadFinOpsWorkDetail(pilotId, workConflictBA);
    expect(detailConflict.projectId).toBeNull();
    const detailMulti = await loadFinOpsWorkDetail(pilotId, workNullMulti);
    expect(detailMulti.projectId).toBeNull();

    // Exact token reconciliation (conflicts excluded from project scopes).
    const tokensA =
      summaryA.kpis.totalTokens.kind === "known" || summaryA.kpis.totalTokens.kind === "partial"
        ? summaryA.kpis.totalTokens.value
        : 0;
    const tokensB =
      summaryB.kpis.totalTokens.kind === "known" || summaryB.kpis.totalTokens.kind === "partial"
        ? summaryB.kpis.totalTokens.value
        : 0;
    const tokensG =
      global.kpis.totalTokens.kind === "known" || global.kpis.totalTokens.kind === "partial"
        ? global.kpis.totalTokens.value
        : 0;
    // workAA 100+10 = 110 under A; conflicts 40+60 and 99 excluded; B empty.
    expect(tokensA).toBe(110);
    expect(tokensB).toBe(0);
    // Global retains all observations: 100+10+40+60+7+99 = 316.
    expect(tokensG).toBe(316);

    // Hors-projet legitimate work remains distinguishable (not a conflict).
    const detailHors = await loadFinOpsWorkDetail(pilotId, workHors);
    expect(detailHors.projectId).toBeNull();
  });

  it("E2-INT — short period cannot fabricate project coherence for historical conflict", async () => {
    // Age the A observation of the multi-project work beyond a 7-day window.
    const oldId = createdObs[2]!; // workNullMulti @ projectA tokens 40
    await pgSql`UPDATE provider_usage_observations SET created_at = NOW() - INTERVAL '20 days' WHERE id = ${oldId}`;

    const summaryA7 = await loadFinOpsSummary(pilotId, { projectId: projectA, period: "7" });
    const worksA7 = await loadFinOpsWorks(pilotId, { projectId: projectA, period: "7" });
    // Conflict still detected from full history — multi work stays out of project A.
    expect(worksA7.items.some((w) => w.cognitiveWorkId === workNullMulti)).toBe(false);
    const tokensA7 =
      summaryA7.kpis.totalTokens.kind === "known" || summaryA7.kpis.totalTokens.kind === "partial"
        ? summaryA7.kpis.totalTokens.value
        : 0;
    // Within 7d under A: only workAA 100+10 (aged multi A+B still conflict-excluded).
    expect(tokensA7).toBe(110);

    const worksGlobal7 = await loadFinOpsWorks(pilotId, { period: "7" });
    const multiItem = worksGlobal7.items.find((w) => w.cognitiveWorkId === workNullMulti);
    // If the recent B obs appears in the 7d list, attribution must stay null (conflict).
    if (multiItem) {
      expect(multiItem.projectId).toBeNull();
    }
  });

  it("isolates another pilot", async () => {
    const other = newId("pilot");
    await db.insert(pilots).values({
      id: other,
      displayName: "other",
      githubUserId: `gh-${other}`,
    });
    const summary = await loadFinOpsSummary(other, { period: "30" });
    expect(summary.hasObservations).toBe(false);
  });
});
