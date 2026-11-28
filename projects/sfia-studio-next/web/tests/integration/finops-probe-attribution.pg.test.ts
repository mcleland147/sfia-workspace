/**
 * Probe consumption is attached to the work that consumed it.
 * The existing observation is updated. It is not inserted again.
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
  attributeConsumedProbeUsage,
  buildIdempotencyKey,
  recordNoraProviderUsageWithHttpCorrelation,
  recordProviderUsageObservation,
} from "@/domains/conversation/usage-accounting";
import { loadFinOpsSummary, loadFinOpsWorks } from "@/domains/finops/usage-read-service";

async function seedPilot() {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: "finops-probe",
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  return { pilotId, preparationId: prep.id };
}

describe("FinOps probe attribution (PG)", () => {
  let pilotId = "";
  let preparationId = "";
  let projectA = "";
  let projectB = "";
  let workComplete = "";
  let workOpen = "";
  let workOther = "";
  const observationIds: string[] = [];

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
    const seeded = await seedPilot();
    pilotId = seeded.pilotId;
    preparationId = seeded.preparationId;
    const projectName = `finops-${newId("p").slice(-6)}`;
    await updatePreview(pilotId, preparationId, projectName, "probe");
    const refreshed = (
      await db.select().from(preparations).where(eq(preparations.id, preparationId))
    )[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: refreshed.creationRevision,
      projectName,
      previewSummary: "probe",
      idempotencyKey: newId("idem"),
    });
    if (created.status !== "CREATED" || !created.projectId) {
      throw new Error(`project seed failed: ${created.status}`);
    }
    projectA = created.projectId;
    projectB = newId("proj");
    await db.insert(projects).values({
      id: projectB,
      ownerPilotId: pilotId,
      name: `finops-b-${projectB.slice(-6)}`,
    });
    workComplete = newId("cgw");
    workOpen = newId("cgw");
    workOther = newId("cgw");
    await db.insert(cognitiveWorks).values([
      {
        id: workComplete,
        ownerPilotId: pilotId,
        preparationId,
        projectId: projectA,
        status: "COMPLETE",
        objective: "travail abouti",
        revision: 1,
      },
      {
        id: workOpen,
        ownerPilotId: pilotId,
        preparationId,
        projectId: projectA,
        status: "OPEN",
        interruptCause: "AWAIT_PILOT",
        objective: "attente du pilote",
        revision: 1,
      },
      {
        id: workOther,
        ownerPilotId: pilotId,
        preparationId,
        projectId: projectB,
        status: "COMPLETE",
        objective: "autre projet",
        revision: 1,
      },
    ]);
  });

  afterAll(async () => {
    if (observationIds.length) {
      await pgSql`DELETE FROM provider_usage_observations WHERE id = ANY(${observationIds})`;
    }
    await pgSql`DELETE FROM cognitive_works WHERE id = ANY(${[workComplete, workOpen, workOther]})`;
    if (projectB) await pgSql`DELETE FROM projects WHERE id = ${projectB}`;
  });

  async function remember(generationId: string) {
    const rows = await db
      .select({ id: providerUsageObservations.id })
      .from(providerUsageObservations)
      .where(eq(providerUsageObservations.generationId, generationId));
    for (const row of rows) observationIds.push(row.id);
    return rows.length;
  }

  it("attaches a recorded probe without duplicating tokens or cost", async () => {
    const generationId = newId("gen");
    const key = buildIdempotencyKey({
      granularity: "REQUEST",
      projectId: projectA,
      preparationId,
      cognitiveWorkId: null,
      operation: "nora.generate_reply",
      generationId,
      attemptId: "attempt-probe",
      callOrdinal: 0,
    });
    const first = await recordProviderUsageObservation({
      ownerPilotId: pilotId,
      preparationId,
      projectId: projectA,
      generationId,
      operation: "nora.generate_reply",
      attemptId: "attempt-probe",
      cognitiveWorkId: null,
      modelRequested: "gpt-test",
      modelApplied: "UNVERIFIED",
      effortRequested: "medium",
      effortApplied: "UNVERIFIED",
      inputTokens: 100,
      outputTokens: 20,
      cachedInputTokens: 5,
      reasoningTokens: 7,
      totalTokens: 120,
      providerRequests: 1,
      estimatedCostUsd: 0.42,
      costCoverage: "PARTIAL",
      status: "succeeded",
      granularity: "REQUEST",
      idempotencyKey: key,
      lane: "DEV",
    });
    expect(first.inserted).toBe(true);
    const companion = await recordProviderUsageObservation({
      ownerPilotId: pilotId,
      preparationId,
      projectId: projectA,
      generationId,
      operation: "nora.generate_reply",
      attemptId: "http-1",
      cognitiveWorkId: null,
      inputTokens: null,
      outputTokens: null,
      totalTokens: null,
      providerRequests: null,
      estimatedCostUsd: null,
      costCoverage: "PARTIAL",
      status: "succeeded",
      granularity: "REQUEST",
      idempotencyKey: `${key}:http`,
      limits: ["HTTP_ATTEMPT_CORRELATION_ONLY"],
      lane: "DEV",
    });
    expect(companion.inserted).toBe(true);
    const before = await remember(generationId);
    expect(before).toBe(2);

    const attached = await attributeConsumedProbeUsage({
      generationId,
      ownerPilotId: pilotId,
      preparationId,
      projectId: projectA,
      cognitiveWorkId: workComplete,
    });
    expect(attached.refused).toBe(false);
    expect(attached.updated).toBe(2);

    const again = await attributeConsumedProbeUsage({
      generationId,
      ownerPilotId: pilotId,
      preparationId,
      projectId: projectA,
      cognitiveWorkId: workComplete,
    });
    expect(again).toEqual({ updated: 0, refused: false });

    const replay = await recordProviderUsageObservation({
      ownerPilotId: pilotId,
      preparationId,
      projectId: projectA,
      generationId,
      operation: "nora.generate_reply",
      attemptId: "attempt-probe",
      cognitiveWorkId: workComplete,
      totalTokens: 999,
      estimatedCostUsd: 9,
      costCoverage: "KNOWN",
      status: "succeeded",
      granularity: "REQUEST",
      idempotencyKey: key,
      lane: "DEV",
    });
    expect(replay.inserted).toBe(false);

    const rows = await db
      .select()
      .from(providerUsageObservations)
      .where(eq(providerUsageObservations.generationId, generationId));
    expect(rows).toHaveLength(2);
    expect(rows.every((row) => row.cognitiveWorkId === workComplete)).toBe(true);
    const billable = rows.find((row) => row.attemptId === "attempt-probe")!;
    expect(billable.totalTokens).toBe(120);
    expect(Number(billable.estimatedCostUsd)).toBeCloseTo(0.42);
    expect(billable.cachedInputTokens).toBe(5);
    expect(billable.idempotencyKey).toBe(key);
    const http = rows.find((row) => row.attemptId === "http-1")!;
    expect(http.providerRequests).toBeNull();
    expect(http.totalTokens).toBeNull();
  });

  it("keeps an in-flight write and its later attachment as one observation", async () => {
    const generationId = newId("gen");
    const writing = recordNoraProviderUsageWithHttpCorrelation({
      runResult: {
        state: {
          usage: { inputTokens: 30, outputTokens: 4, totalTokens: 34, requests: 1 },
        },
      },
      status: "succeeded",
      operation: "nora.generate_reply",
      attemptId: "attempt-race",
      generationId,
      ownerPilotId: pilotId,
      preparationId,
      projectId: projectA,
      cognitiveWorkId: null,
      modelRequested: "gpt-test",
      modelApplied: "UNVERIFIED",
      effortRequested: "medium",
      effortApplied: "UNVERIFIED",
    });
    const attaching = attributeConsumedProbeUsage({
      generationId,
      ownerPilotId: pilotId,
      preparationId,
      projectId: projectA,
      cognitiveWorkId: workComplete,
    });
    const [, attached] = await Promise.all([writing, attaching]);
    expect(attached.refused).toBe(false);
    const count = await remember(generationId);
    expect(count).toBe(1);
    const row = (
      await db
        .select()
        .from(providerUsageObservations)
        .where(eq(providerUsageObservations.generationId, generationId))
    )[0]!;
    expect(row.cognitiveWorkId).toBe(workComplete);
    expect(row.totalTokens).toBe(34);
  });

  it("refuses a cross-project or already attributed observation", async () => {
    const foreignGeneration = newId("gen");
    await recordProviderUsageObservation({
      ownerPilotId: pilotId,
      preparationId,
      projectId: projectA,
      generationId: foreignGeneration,
      operation: "nora.generate_reply",
      cognitiveWorkId: null,
      totalTokens: 8,
      estimatedCostUsd: 0.01,
      costCoverage: "KNOWN",
      status: "succeeded",
      granularity: "REQUEST",
      idempotencyKey: `foreign-${foreignGeneration}`,
      lane: "DEV",
    });
    await remember(foreignGeneration);
    const foreign = await attributeConsumedProbeUsage({
      generationId: foreignGeneration,
      ownerPilotId: pilotId,
      preparationId,
      projectId: projectA,
      cognitiveWorkId: workOther,
    });
    expect(foreign).toEqual({ updated: 0, refused: true });

    const takenGeneration = newId("gen");
    await recordProviderUsageObservation({
      ownerPilotId: pilotId,
      preparationId,
      projectId: projectA,
      generationId: takenGeneration,
      operation: "nora.generate_reply",
      cognitiveWorkId: workOpen,
      modelRequested: "gpt-test",
      modelApplied: "UNVERIFIED",
      totalTokens: 9,
      estimatedCostUsd: 0.02,
      costCoverage: "KNOWN",
      status: "succeeded",
      granularity: "REQUEST",
      idempotencyKey: `taken-${takenGeneration}`,
      lane: "DEV",
    });
    await remember(takenGeneration);
    const taken = await attributeConsumedProbeUsage({
      generationId: takenGeneration,
      ownerPilotId: pilotId,
      preparationId,
      projectId: projectA,
      cognitiveWorkId: workComplete,
    });
    expect(taken).toEqual({ updated: 0, refused: true });
    const still = (
      await db
        .select({ workId: providerUsageObservations.cognitiveWorkId })
        .from(providerUsageObservations)
        .where(eq(providerUsageObservations.generationId, takenGeneration))
    )[0]!;
    expect(still.workId).toBe(workOpen);

    const otherPilot = newId("pilot");
    await db.insert(pilots).values({
      id: otherPilot,
      displayName: "other-probe",
      githubUserId: `gh-${otherPilot}`,
    });
    const denied = await attributeConsumedProbeUsage({
      generationId: takenGeneration,
      ownerPilotId: otherPilot,
      preparationId,
      projectId: projectA,
      cognitiveWorkId: workComplete,
    });
    expect(denied.refused).toBe(true);
    expect(denied.updated).toBe(0);
  });

  it("reports linked, open and unattributed observations without a false ratio", async () => {
    const loose = newId("gen");
    await recordProviderUsageObservation({
      ownerPilotId: pilotId,
      preparationId,
      projectId: projectA,
      generationId: loose,
      operation: "nora.generate_reply",
      cognitiveWorkId: null,
      modelRequested: "gpt-test",
      modelApplied: "UNVERIFIED",
      totalTokens: 11,
      providerRequests: 1,
      estimatedCostUsd: 0.03,
      costCoverage: "KNOWN",
      status: "succeeded",
      granularity: "REQUEST",
      idempotencyKey: `loose-${loose}`,
      lane: "DEV",
    });
    await remember(loose);

    const summary = await loadFinOpsSummary(pilotId, {
      period: "30",
      projectId: projectA,
      model: "gpt-test",
    });
    const works = await loadFinOpsWorks(pilotId, {
      period: "30",
      projectId: projectA,
      model: "gpt-test",
    });
    expect(summary.kpis.completedWorks.kind).toBe("partial");
    if (summary.kpis.completedWorks.kind === "partial") {
      expect(summary.kpis.completedWorks.value).toBeGreaterThanOrEqual(1);
      expect(summary.kpis.completedWorks.note).toContain("non attribuées");
      expect(summary.kpis.completedWorks.note).toContain("En cours");
    }
    expect(summary.kpis.costPerCompletedWorkUsd.kind).toBe("unknown");
    expect(works.items.some((item) => item.cognitiveWorkId === workComplete)).toBe(true);
    expect(works.items.some((item) => item.cognitiveWorkId === workOpen)).toBe(true);
    expect(works.items.some((item) => item.cognitiveWorkId === workOther)).toBe(false);

    const otherModel = await loadFinOpsSummary(pilotId, {
      period: "30",
      projectId: projectA,
      model: "model-absent-from-this-fixture",
    });
    const otherWorks = await loadFinOpsWorks(pilotId, {
      period: "30",
      projectId: projectA,
      model: "model-absent-from-this-fixture",
    });
    expect(otherModel.hasObservations).toBe(false);
    expect(otherWorks.items).toHaveLength(0);
  });
});
