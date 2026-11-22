/**
 * Review corrections — documentary merge fail-closed mode + reconcile provenance.
 * SCRIPTED only. Zero GitHub REAL mutations. Mutative PG → sfia_next_e2e only.
 */
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  documentPublicationRefs,
  documentRevisions,
  effectAttempts,
  observedGitFacts,
  pilots,
  preparations,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  completeGitHubAuthorization,
  startGitHubAuthorization,
} from "@/domains/integrations/authorization-service";
import { attachRepositoryToProject } from "@/domains/integrations/project-link-service";
import {
  getScriptedGitHubProvider,
  getScriptedMutationCounts,
  resetScriptedMutationCounts,
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";
import {
  authorizeMerge,
  authorizePublication,
  dispatchMerge,
  dispatchPublication,
  prepareMerge,
  preparePublication,
  reconcileAttempt,
} from "@/domains/execution/effect-service";
import type { MergePlan, PublicationPlan } from "@/domains/execution/types";
import { savePreparationDocument } from "@/domains/document/service";
import { isStudioError } from "@/lib/http-errors";

async function seedProject(label: string) {
  resetScriptedStore();
  process.env.STUDIO_GITHUB_PROVIDER = "scripted";
  process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
  delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
  const pilotId = newId("pilot");
  await db.insert(pilots).values({ id: pilotId, displayName: label, githubUserId: `gh-${pilotId}` });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed!.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`seed failed: ${created.status}`);
  }
  const sessionId = newId("sid");
  const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
  const status = await completeGitHubAuthorization({
    pilotId,
    state,
    studioSessionId: sessionId,
  });
  const repositoryId = status.repositories[0]!.id;
  await attachRepositoryToProject(pilotId, created.projectId, repositoryId);
  getScriptedGitHubProvider();
  return {
    pilotId,
    projectId: created.projectId,
    preparationId: prep.id,
    repositoryId,
  };
}

async function availableDoc(pilotId: string, preparationId: string, title: string) {
  const saved = await savePreparationDocument(pilotId, preparationId, title, `# ${title}\n`, undefined, {
    correlationKey: newId("ck"),
  });
  expect(saved.status).toBe("AVAILABLE");
  if (!("documentId" in saved) || !saved.documentId) throw new Error("documentId missing");
  const rev = (
    await db
      .select()
      .from(documentRevisions)
      .where(
        and(eq(documentRevisions.documentId, saved.documentId), eq(documentRevisions.status, "AVAILABLE")),
      )
      .limit(1)
  )[0];
  if (!rev) throw new Error("AVAILABLE revision missing");
  return { documentId: saved.documentId, revisionId: rev.id };
}

async function publishThenPrepareMerge(label: string) {
  const ctx = await seedProject(label);
  const doc = await availableDoc(ctx.pilotId, ctx.preparationId, label);
  const prepared = await preparePublication({
    pilotId: ctx.pilotId,
    projectId: ctx.projectId,
    documentId: doc.documentId,
    revisionId: doc.revisionId,
    repositoryId: ctx.repositoryId,
    targetPath: `docs/${label}.md`,
    targetBranch: "main",
    correlationKey: newId("pub"),
  });
  const plan =
    prepared.plan ??
    (JSON.parse(
      (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!.planJson,
    ) as PublicationPlan);
  await authorizePublication({
    pilotId: ctx.pilotId,
    projectId: ctx.projectId,
    attemptId: prepared.attemptId,
    statement: "GO pub",
    inspectedFingerprint: plan.inspection.inspectionFingerprint,
  });
  const dispatched = await dispatchPublication({
    pilotId: ctx.pilotId,
    projectId: ctx.projectId,
    attemptId: prepared.attemptId,
  });
  expect(dispatched.status).toBe("COMPLETED");
  const mergePrep = await prepareMerge({
    pilotId: ctx.pilotId,
    projectId: ctx.projectId,
    publicationAttemptId: prepared.attemptId,
    correlationKey: newId("merge"),
  });
  expect(mergePrep.plan?.effectProviderMode).toBe("SCRIPTED");
  await authorizeMerge({
    pilotId: ctx.pilotId,
    projectId: ctx.projectId,
    attemptId: mergePrep.attemptId,
    statement: "Je mandate la fusion documentaire",
  });
  return { ...ctx, pubAttemptId: prepared.attemptId, mergeAttemptId: mergePrep.attemptId, mergePlan: mergePrep.plan! };
}

async function forceMergePlanMode(attemptId: string, mode: "REAL" | "SCRIPTED" | null) {
  const row = (
    await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId)).limit(1)
  )[0]!;
  const plan = JSON.parse(row.planJson) as MergePlan;
  if (mode === null) delete plan.effectProviderMode;
  else plan.effectProviderMode = mode;
  await db
    .update(effectAttempts)
    .set({ planJson: JSON.stringify(plan), updatedAt: new Date() })
    .where(eq(effectAttempts.id, attemptId));
  return plan;
}

describe("documentary merge corrections (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
  });

  afterEach(() => {
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
  });

  it("C1: mode absent/UNKNOWN → REQUIRES_REQUALIFICATION, zero merge mutation", async () => {
    const ctx = await publishThenPrepareMerge("c1-unknown");
    await forceMergePlanMode(ctx.mergeAttemptId, null);
    resetScriptedMutationCounts(ctx.pilotId);
    await expect(
      dispatchMerge({
        pilotId: ctx.pilotId,
        projectId: ctx.projectId,
        attemptId: ctx.mergeAttemptId,
      }),
    ).rejects.toSatisfy(
      (e: unknown) =>
        isStudioError(e) &&
        e.code === "REQUIRES_REQUALIFICATION" &&
        /UNKNOWN|requalification/i.test(e.message),
    );
    expect(getScriptedMutationCounts(ctx.pilotId).mergePR).toBe(0);
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, ctx.mergeAttemptId)).limit(1)
    )[0]!;
    expect(row.status).toBe("REQUIRES_REQUALIFICATION");
  });

  it("C1: plan SCRIPTED under live REAL → REQUIRES_REQUALIFICATION, zero merge", async () => {
    const ctx = await publishThenPrepareMerge("c1-scripted-vs-real");
    await forceMergePlanMode(ctx.mergeAttemptId, "SCRIPTED");
    process.env.STUDIO_GITHUB_PROVIDER = "real";
    resetScriptedMutationCounts(ctx.pilotId);
    await expect(
      dispatchMerge({
        pilotId: ctx.pilotId,
        projectId: ctx.projectId,
        attemptId: ctx.mergeAttemptId,
      }),
    ).rejects.toSatisfy(
      (e: unknown) => isStudioError(e) && e.code === "REQUIRES_REQUALIFICATION",
    );
    expect(getScriptedMutationCounts(ctx.pilotId).mergePR).toBe(0);
  });

  it("C1: plan REAL under live SCRIPTED → REQUIRES_REQUALIFICATION, zero merge", async () => {
    const ctx = await publishThenPrepareMerge("c1-real-vs-scripted");
    await forceMergePlanMode(ctx.mergeAttemptId, "REAL");
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    resetScriptedMutationCounts(ctx.pilotId);
    await expect(
      dispatchMerge({
        pilotId: ctx.pilotId,
        projectId: ctx.projectId,
        attemptId: ctx.mergeAttemptId,
      }),
    ).rejects.toSatisfy(
      (e: unknown) => isStudioError(e) && e.code === "REQUIRES_REQUALIFICATION",
    );
    expect(getScriptedMutationCounts(ctx.pilotId).mergePR).toBe(0);
  });

  it("C1: plan SCRIPTED under SCRIPTED → dispatch COMPLETED; headSha stays source", async () => {
    const ctx = await publishThenPrepareMerge("c1-scripted-ok");
    const beforeRef = (
      await db
        .select()
        .from(documentPublicationRefs)
        .where(eq(documentPublicationRefs.effectAttemptId, ctx.pubAttemptId))
        .limit(1)
    )[0]!;
    const sourceHead = beforeRef.headSha;
    expect(sourceHead).toBeTruthy();
    const merged = await dispatchMerge({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      attemptId: ctx.mergeAttemptId,
    });
    expect(merged.status).toBe("COMPLETED");
    expect(merged.sha).toMatch(/^[0-9a-f]{40}$/i);
    expect(merged.sha).not.toBe(sourceHead);
    const afterRef = (
      await db
        .select()
        .from(documentPublicationRefs)
        .where(eq(documentPublicationRefs.id, beforeRef.id))
        .limit(1)
    )[0]!;
    expect(afterRef.status).toBe("MERGED");
    expect(afterRef.headSha).toBe(sourceHead);
    const detail = JSON.parse(afterRef.detailJson || "{}") as {
      mergeCommitSha?: string;
      sourceHeadSha?: string;
    };
    expect(detail.mergeCommitSha).toBe(merged.sha);
    expect(detail.sourceHeadSha).toBe(sourceHead);
    const facts = await db
      .select()
      .from(observedGitFacts)
      .where(
        and(eq(observedGitFacts.attemptId, ctx.mergeAttemptId), eq(observedGitFacts.factKind, "MERGE")),
      );
    expect(facts).toHaveLength(1);
    expect(facts[0]!.sha).toBe(merged.sha);
  });

  it("C1: plan REAL under REAL reaches provider gate without scripted merge mutation", async () => {
    const ctx = await publishThenPrepareMerge("c1-real-under-real");
    await forceMergePlanMode(ctx.mergeAttemptId, "REAL");
    process.env.STUDIO_GITHUB_PROVIDER = "real";
    process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = "documentary";
    resetScriptedMutationCounts(ctx.pilotId);
    await expect(
      dispatchMerge({
        pilotId: ctx.pilotId,
        projectId: ctx.projectId,
        attemptId: ctx.mergeAttemptId,
      }),
    ).rejects.toBeTruthy();
    expect(getScriptedMutationCounts(ctx.pilotId).mergePR).toBe(0);
  });

  it("C2: reconcile positive with matching provenance + mergeCommitSha", async () => {
    const ctx = await publishThenPrepareMerge("c2-reconcile-ok");
    const plan = ctx.mergePlan;
    // Simulate AMBIGUOUS after a lost ACK: PR already merged remotely with matching provenance.
    const provider = getScriptedGitHubProvider();
    const merged = await provider.mergePullRequest({
      pilotId: ctx.pilotId,
      fullName: plan.repositoryFullName,
      prNumber: plan.prNumber,
      expectedHeadSha: plan.expectedHeadSha,
      expectedBaseSha: plan.expectedBaseSha,
    });
    await db
      .update(effectAttempts)
      .set({
        status: "AMBIGUOUS",
        // claim key absent ⇒ sqlClaimInactive (JSON null claim is NOT SQL NULL).
        resultJson: "{}",
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, ctx.mergeAttemptId));
    const out = await reconcileAttempt(ctx.pilotId, ctx.projectId, ctx.mergeAttemptId);
    expect(out.status).toBe("COMPLETED");
    expect((out as { mergeSha?: string }).mergeSha).toBe(merged.sha);
    const ref = (
      await db
        .select()
        .from(documentPublicationRefs)
        .where(eq(documentPublicationRefs.id, plan.publicationRefId))
        .limit(1)
    )[0]!;
    expect(ref.status).toBe("MERGED");
    expect(ref.headSha).toBe(plan.expectedHeadSha);
    const detail = JSON.parse(ref.detailJson || "{}") as { mergeCommitSha?: string };
    expect(detail.mergeCommitSha).toBe(merged.sha);
  });

  it("C2: divergent source HEAD → no invented COMPLETED", async () => {
    const ctx = await publishThenPrepareMerge("c2-head-diverge");
    const plan = ctx.mergePlan;
    const provider = getScriptedGitHubProvider();
    await provider.mergePullRequest({
      pilotId: ctx.pilotId,
      fullName: plan.repositoryFullName,
      prNumber: plan.prNumber,
      expectedHeadSha: plan.expectedHeadSha,
      expectedBaseSha: plan.expectedBaseSha,
    });
    // Tamper frozen plan HEAD so provenance fails.
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, ctx.mergeAttemptId)).limit(1)
    )[0]!;
    const tampered = JSON.parse(row.planJson) as MergePlan;
    tampered.expectedHeadSha = "ffffffffffffffffffffffffffffffffffffffff";
    await db
      .update(effectAttempts)
      .set({
        planJson: JSON.stringify(tampered),
        status: "AMBIGUOUS",
        resultJson: "{}",
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, ctx.mergeAttemptId));
    const out = await reconcileAttempt(ctx.pilotId, ctx.projectId, ctx.mergeAttemptId);
    expect(out.status).toBe("AMBIGUOUS");
    expect(String((out as { note?: string }).note ?? "")).toMatch(/provenance|contradictoire/i);
    const attempt = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, ctx.mergeAttemptId)).limit(1)
    )[0]!;
    expect(attempt.status).toBe("AMBIGUOUS");
  });

  it("C2: merged PR without mergeCommitSha → no invented COMPLETED", async () => {
    const ctx = await publishThenPrepareMerge("c2-no-merge-sha");
    const plan = ctx.mergePlan;
    const provider = getScriptedGitHubProvider();
    await provider.mergePullRequest({
      pilotId: ctx.pilotId,
      fullName: plan.repositoryFullName,
      prNumber: plan.prNumber,
      expectedHeadSha: plan.expectedHeadSha,
      expectedBaseSha: plan.expectedBaseSha,
    });
    // Strip mergeCommitSha from scripted PR object.
    const pr = await provider.getPullRequest(ctx.pilotId, plan.repositoryFullName, plan.prNumber);
    (pr as { mergeCommitSha?: string | null }).mergeCommitSha = null;
    await db
      .update(effectAttempts)
      .set({
        status: "AMBIGUOUS",
        resultJson: "{}",
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, ctx.mergeAttemptId));
    const out = await reconcileAttempt(ctx.pilotId, ctx.projectId, ctx.mergeAttemptId);
    expect(out.status).toBe("AMBIGUOUS");
    expect(String((out as { note?: string }).note ?? "")).toMatch(/merge_commit_sha absent/i);
  });
});
