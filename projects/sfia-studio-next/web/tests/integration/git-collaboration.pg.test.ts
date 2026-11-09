import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  authorizedRepositories,
  documentPublicationRefs,
  documentRevisions,
  documents,
  effectAttempts,
  integrationAuthorizations,
  observedGitFacts,
  pilots,
  preparations,
} from "@/db/schema";
import {
  completeGitHubAuthorization,
  disconnectIntegration,
  getIntegrationStatus,
  loadOrRefreshUserAccessToken,
  markRequiresReauth,
  startGitHubAuthorization,
} from "@/domains/integrations/authorization-service";
import { OAuthConcurrencyBarrier } from "@/domains/integrations/oauth-concurrency-barrier";
import { sealSecret } from "@/lib/token-crypto";
import { attachRepositoryToProject } from "@/domains/integrations/project-link-service";
import { readGitFile } from "@/domains/integrations/resource-service";
import {
  getScriptedMutationCounts,
  resetScriptedMutationCounts,
  resetScriptedStore,
  ScriptedFaultRegistry,
  scriptedAdvancePrBase,
  scriptedAdvancePrHead,
  scriptedClosePr,
  scriptedSetPrMarker,
} from "@/domains/integrations/scripted-github-provider";
import { classifyPublicationPath } from "@/domains/integrations/path-policy";
import {
  authorizeMerge,
  authorizePublication,
  dispatchMerge,
  dispatchPublication,
  prepareMerge,
  preparePublication,
  reconcileAttempt,
} from "@/domains/execution/effect-service";
import { ExecutionBarrierRegistry, readClaim } from "@/domains/execution/claim-lease";
import { insertRestriction, markDecisionState } from "@/domains/decisions/service";
import { qualifyObservedFacts } from "@/domains/proofs/qualify";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { savePreparationDocument } from "@/domains/document/service";
import { newId } from "@/lib/ids";
import { schemaRevision } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import type { PublicationPlan } from "@/domains/execution/types";

async function seedProject(label: string) {
  resetScriptedStore();
  const pilotId = newId("pilot");
  await db.insert(pilots).values({ id: pilotId, displayName: label, githubUserId: `gh-${pilotId}` });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`seed failed: ${created.status}`);
  }
  const sessionId = newId("sid");
  return { pilotId, projectId: created.projectId, preparationId: prep.id, sessionId };
}

async function connectAndAttach(
  pilotId: string,
  projectId: string,
  sessionId = newId("sid"),
) {
  const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
  const status = await completeGitHubAuthorization({
    pilotId,
    state,
    studioSessionId: sessionId,
  });
  const repoId = status.repositories[0]!.id;
  await attachRepositoryToProject(pilotId, projectId, repoId);
  return { status, repoId, sessionId };
}

async function availableDoc(pilotId: string, preparationId: string, title = "Pub doc") {
  const saved = await savePreparationDocument(pilotId, preparationId, title, "# Published\n", undefined, {
    correlationKey: newId("ck"),
  });
  expect(saved.status).toBe("AVAILABLE");
  if (!("documentId" in saved) || !saved.documentId) {
    throw new Error("documentId missing after save");
  }
  const documentId = saved.documentId;
  const rev = (
    await db
      .select()
      .from(documentRevisions)
      .where(and(eq(documentRevisions.documentId, documentId), eq(documentRevisions.status, "AVAILABLE")))
      .limit(1)
  )[0];
  if (!rev) throw new Error("AVAILABLE revision missing");
  return { documentId, revisionId: rev.id };
}

async function authzPub(
  pilotId: string,
  projectId: string,
  prepared: { attemptId: string; plan?: PublicationPlan },
) {
  const plan =
    prepared.plan ??
    (JSON.parse(
      (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!.planJson,
    ) as PublicationPlan);
  return authorizePublication({
    pilotId,
    projectId,
    attemptId: prepared.attemptId,
    statement: "Je mandate la publication documentaire",
    inspectedFingerprint: plan.inspection.inspectionFingerprint,
  });
}

describe("PostgreSQL ML4 git collaboration corrective B1–B8 (SCRIPTED)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
  });

  it("schema revision 008", () => {
    expect(schemaRevision).toBe("012_auth_concurrency_safety");
  });

  it("AT-01: project works without Git connection", async () => {
    const { pilotId, projectId } = await seedProject("no-git");
    const status = await getIntegrationStatus(pilotId);
    expect(status.status).toBe("DISCONNECTED");
    expect(status.repositories).toHaveLength(0);
    expect(projectId).toBeTruthy();
  });

  it("AT-02/03/04/08/09/11/12 + B6 inspection: connect, hostile read, publish PR without merge", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-at");
    const { repoId } = await connectAndAttach(pilotId, projectId);

    const hostile = await readGitFile({
      pilotId,
      projectId,
      repositoryId: repoId,
      path: "README.md",
      ref: "main",
    });
    expect(hostile.content).toMatch(/secrets/i);
    expect(hostile.authorityReminder).toMatch(/data/i);

    const { documentId, revisionId } = await availableDoc(pilotId, preparationId);
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/publish.md",
      targetBranch: "main",
      correlationKey: newId("corr"),
    });
    expect(prepared.status).toBe("PREPARED");
    expect(prepared.plan?.inspection.unifiedDiff).toContain("+# Published");
    expect(prepared.plan?.inspection.inspectionFingerprint).toHaveLength(64);

    const authz = await authzPub(pilotId, projectId, prepared);
    expect(authz.status).toBe("AUTHORIZED");

    const dispatched = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(dispatched.status).toBe("COMPLETED");
    expect(dispatched.prNumber).toBeGreaterThan(0);

    const mergeAttempt = (
      await db
        .select()
        .from(effectAttempts)
        .where(and(eq(effectAttempts.projectId, projectId), eq(effectAttempts.kind, "GIT_MERGE")))
        .limit(1)
    )[0];
    expect(mergeAttempt).toBeUndefined();

    const facts = await db
      .select()
      .from(observedGitFacts)
      .where(eq(observedGitFacts.attemptId, prepared.attemptId));
    const q = qualifyObservedFacts(
      facts.map((f) => ({ factKind: f.factKind, sha: f.sha, prNumber: f.prNumber })),
    );
    expect(q.prOpen).toBe(true);
    expect(q.mergeObserved).toBe(false);
    expect(q.testsPass).toBe(false);
    expect(q.adopted).toBe(false);
  });

  it("B1: revoked decision / restriction blocks dispatch", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b1");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B1");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b1.md",
      targetBranch: "main",
      correlationKey: newId("b1"),
    });
    const authz = await authzPub(pilotId, projectId, prepared);
    await db.transaction(async (tx) => {
      await markDecisionState(tx, authz.decisionId!, "REVOKED");
    });
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });

    const prepared2 = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b1b.md",
      targetBranch: "main",
      correlationKey: newId("b1b"),
    });
    const authz2 = await authzPub(pilotId, projectId, prepared2);
    await db.transaction(async (tx) => {
      await insertRestriction(tx, {
        projectId,
        targetKind: "PILOTAGE_EFFECT",
        targetRef: "*",
        originDecisionId: authz2.decisionId!,
      });
    });
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared2.attemptId }),
    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });
  });

  it("B2: concurrent dispatch claims once — exact SCRIPTED mutation counts", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b2.md",
      targetBranch: "main",
      correlationKey: newId("b2"),
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);

    const results = await Promise.allSettled([
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ]);
    const fulfilled = results.filter((r) => r.status === "fulfilled");
    const rejected = results.filter((r) => r.status === "rejected");
    expect(fulfilled.length).toBeGreaterThanOrEqual(1);
    const statuses = results.map((r) =>
      r.status === "fulfilled"
        ? (r.value as { status: string }).status
        : (r.reason as StudioError)?.code,
    );
    expect(statuses).toContain("COMPLETED");
    expect(fulfilled.length + rejected.length).toBe(2);
    // Two COMPLETED results do NOT prove uniqueness — mutation counts do.
    const counts = getScriptedMutationCounts(pilotId);
    expect(counts.createBranch).toBe(1);
    expect(counts.putFileContents).toBe(1);
    expect(counts.createPR).toBe(1);
  });

  it("B2: DISPATCHED refuses plain HTTP without reclaim", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2d");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2d");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b2d.md",
      targetBranch: "main",
      correlationKey: newId("b2d"),
    });
    await authzPub(pilotId, projectId, prepared);
    await db
      .update(effectAttempts)
      .set({ status: "DISPATCHED", updatedAt: new Date() })
      .where(eq(effectAttempts.id, prepared.attemptId));
    resetScriptedMutationCounts(pilotId);
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "CONFLICT" });
    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
  });

  it("B2: correlationKey payload mismatch conflicts", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2m");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2m");
    const key = newId("ck");
    await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/a.md",
      targetBranch: "main",
      correlationKey: key,
    });
    await expect(
      preparePublication({
        pilotId,
        projectId,
        documentId,
        revisionId,
        repositoryId: repoId,
        targetPath: "docs/other.md",
        targetBranch: "main",
        correlationKey: key,
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });
  });

  it("B3/AT-13: merge bound to publication attempt; arbitrary PR refused", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-merge");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "Merge doc");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/merge.md",
      targetBranch: "main",
      correlationKey: newId("corr"),
    });
    await authzPub(pilotId, projectId, prepared);
    const dispatched = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(dispatched.prNumber).toBeTruthy();

    await expect(
      dispatchMerge({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toBeInstanceOf(StudioError);

    const mergePrep = await prepareMerge({
      pilotId,
      projectId,
      publicationAttemptId: prepared.attemptId,
      correlationKey: newId("merge"),
    });
    expect(mergePrep.status).toBe("PREPARED");
    expect(mergePrep.plan?.publicationAttemptId).toBe(prepared.attemptId);

    await expect(
      dispatchMerge({ pilotId, projectId, attemptId: mergePrep.attemptId }),
    ).rejects.toMatchObject({ code: "CONFLICT" });

    const mergeAuth = await authorizeMerge({
      pilotId,
      projectId,
      attemptId: mergePrep.attemptId,
      statement: "Mandat merge distinct",
    });
    expect(mergeAuth.decisionId).toBeTruthy();
    const merged = await dispatchMerge({
      pilotId,
      projectId,
      attemptId: mergePrep.attemptId,
    });
    expect(merged.status).toBe("COMPLETED");
  });

  it("B4/AT-15: lost ACK after commit reconciles without duplicate PR", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4.md",
      targetBranch: "main",
      correlationKey: newId("b4"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_commit");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(row.status).toBe("AMBIGUOUS");
    const progress = JSON.parse(row.resultJson).progress;
    expect(progress.filePublished).toBe(true);

    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    expect(reconciled.progress?.filePublished).toBe(true);

    // Resume: should open PR without recreating file blindly
    const resumed = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(resumed.status).toBe("COMPLETED");
    expect(resumed.prNumber).toBeGreaterThan(0);
  });

  it("B4 blocking: lost_ack_after_pr → reconcile → resume → EXACTLY ONE PR", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4pr");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4PR");
    const corr = newId("b4pr");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4pr.md",
      targetBranch: "main",
      correlationKey: corr,
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1);

    const afterLost = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(afterLost.status).toBe("AMBIGUOUS");
    expect(JSON.parse(afterLost.resultJson).progress?.prNumber).toBeGreaterThan(0);

    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    // Either COMPLETED via reconcile or still AMBIGUOUS with PR attached.
    expect(
      reconciled.status === "COMPLETED" || reconciled.progress?.prOpened === true,
    ).toBe(true);

    if (reconciled.status !== "COMPLETED") {
      const resumed = await dispatchPublication({
        pilotId,
        projectId,
        attemptId: prepared.attemptId,
      });
      expect(resumed.status).toBe("COMPLETED");
    }
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1);
  });

  it("B4: remote unread after lost ACK does not createPR", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4ru");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4RU");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4ru.md",
      targetBranch: "main",
      correlationKey: newId("b4ru"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();
    resetScriptedMutationCounts(pilotId);

    // Keep prCreated=true historically; wipe prNumber to force findPullRequest; remote unreadable.
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const parsed = JSON.parse(row.resultJson) as {
      progress?: Record<string, unknown>;
      claim?: unknown;
    };
    const progress = parsed.progress ?? {};
    await db
      .update(effectAttempts)
      .set({
        resultJson: JSON.stringify({
          ...parsed,
          progress: {
            ...progress,
            prCreated: true,
            prOpened: false,
            prNumber: null,
            prCurrentState: undefined,
          },
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prepared.attemptId));

    ScriptedFaultRegistry.setFault("read_unavailable");
    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    expect(reconciled.status).toBe("AMBIGUOUS");
    expect(reconciled.prCurrentState ?? "UNKNOWN").toBe("UNKNOWN");
    expect(reconciled.status).not.toBe("COMPLETED");
    ScriptedFaultRegistry.clear();

    ScriptedFaultRegistry.setFault("read_unavailable");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
  });

  it("AT-14: stale HEAD requires requalification", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-stale");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "Stale");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/stale.md",
      targetBranch: "main",
      correlationKey: newId("stale"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("stale_head");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
    ScriptedFaultRegistry.clear();
  });

  it("AT-16: shared repo does not share mandates across pilots", async () => {
    const a = await seedProject("pilot-a");
    const b = await seedProject("pilot-b");
    const { repoId: repoA } = await connectAndAttach(a.pilotId, a.projectId);
    const { repoId: repoB } = await connectAndAttach(b.pilotId, b.projectId);
    expect(repoA).not.toBe(repoB);
    await expect(
      attachRepositoryToProject(b.pilotId, b.projectId, repoA),
    ).rejects.toMatchObject({ code: "NOT_FOUND" });

    const { documentId, revisionId } = await availableDoc(a.pilotId, a.preparationId, "Iso");
    const prepared = await preparePublication({
      pilotId: a.pilotId,
      projectId: a.projectId,
      documentId,
      revisionId,
      repositoryId: repoA,
      targetPath: "docs/iso.md",
      targetBranch: "main",
      correlationKey: newId("iso"),
    });
    await authzPub(a.pilotId, a.projectId, prepared);
    await expect(
      dispatchPublication({
        pilotId: b.pilotId,
        projectId: b.projectId,
        attemptId: prepared.attemptId,
      }),
    ).rejects.toMatchObject({ code: "NOT_FOUND" });
  });

  it("AT-17/B5: technical and traversal paths refused", async () => {
    const denied = [
      "docs/../src/secret.md",
      "docs/%2e%2e/src/secret.md",
      "docs/secret-notes.md",
      "docs/.env.local.md",
      "docs/x/../../.github/workflows/x.md",
      "docs/Dockerfile.md",
      ".github/workflows/ci.md",
      "src/README.md",
      "README.md",
    ];
    for (const p of denied) {
      expect(classifyPublicationPath(p).allowed, p).toBe(false);
    }
    expect(classifyPublicationPath("docs/architecture.md").allowed).toBe(true);

    const { pilotId, projectId, preparationId } = await seedProject("git-path");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "Tech");
    await expect(
      preparePublication({
        pilotId,
        projectId,
        documentId,
        revisionId,
        repositoryId: repoId,
        targetPath: "docs/../src/secret.md",
        targetBranch: "main",
        correlationKey: newId("tech"),
      }),
    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });
  });

  it("B6: authorize without matching inspection fingerprint refused", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b6");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B6");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b6.md",
      targetBranch: "main",
      correlationKey: newId("b6"),
    });
    await expect(
      authorizePublication({
        pilotId,
        projectId,
        attemptId: prepared.attemptId,
        statement: "x",
        inspectedFingerprint: "0".repeat(64),
      }),
    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
  });

  it("B7: document from other project refused", async () => {
    const a = await seedProject("own-a");
    const b = await seedProject("own-b");
    const { repoId } = await connectAndAttach(a.pilotId, a.projectId);
    const { documentId, revisionId } = await availableDoc(b.pilotId, b.preparationId, "Other");
    await expect(
      preparePublication({
        pilotId: a.pilotId,
        projectId: a.projectId,
        documentId,
        revisionId,
        repositoryId: repoId,
        targetPath: "docs/x.md",
        targetBranch: "main",
        correlationKey: newId("x"),
      }),
    ).rejects.toMatchObject({ code: "NOT_FOUND" });
  });

  it("AT-22: revoke preserves D4 document", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-rev");
    await connectAndAttach(pilotId, projectId);
    const { documentId } = await availableDoc(pilotId, preparationId, "Keep");
    await disconnectIntegration(pilotId);
    const status = await getIntegrationStatus(pilotId);
    expect(status.status).toBe("REVOKED");
    const doc = (
      await db.select().from(documents).where(eq(documents.id, documentId)).limit(1)
    )[0];
    expect(doc).toBeTruthy();
    expect(projectId).toBeTruthy();
  });

  it("idempotent prepare on same fingerprint", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-idem");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "D");
    const key = newId("ck");
    const a = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/d.md",
      targetBranch: "main",
      correlationKey: key,
    });
    const b = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/d.md",
      targetBranch: "main",
      correlationKey: key,
    });
    expect(a.attemptId).toBe(b.attemptId);
    expect(b.idempotent).toBe(true);
  });

  it("B1 blocking: contents=read refuses documentary write — zero provider mutations", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b1ro");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    await db
      .update(authorizedRepositories)
      .set({
        permissionsJson: JSON.stringify({ contents: "read", pull_requests: "write" }),
      })
      .where(eq(authorizedRepositories.id, repoId));
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "RO");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/ro.md",
      targetBranch: "main",
      correlationKey: newId("ro"),
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });
    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
    expect(getScriptedMutationCounts(pilotId).putFileContents).toBe(0);
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
  });

  it("B3: advanced PR base refuses merge", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b3base");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B3base");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b3base.md",
      targetBranch: "main",
      correlationKey: newId("b3base"),
    });
    await authzPub(pilotId, projectId, prepared);
    const dispatched = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    const mergePrep = await prepareMerge({
      pilotId,
      projectId,
      publicationAttemptId: prepared.attemptId,
      correlationKey: newId("m3base"),
    });
    await authorizeMerge({
      pilotId,
      projectId,
      attemptId: mergePrep.attemptId,
      statement: "merge",
    });
    scriptedAdvancePrBase(pilotId, dispatched.prNumber!, "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef");
    await expect(
      dispatchMerge({ pilotId, projectId, attemptId: mergePrep.attemptId }),
    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
  });

  it("B3: advanced PR head / closed PR refuse merge", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b3head");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B3head");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b3head.md",
      targetBranch: "main",
      correlationKey: newId("b3head"),
    });
    await authzPub(pilotId, projectId, prepared);
    const dispatched = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    const mergePrep = await prepareMerge({
      pilotId,
      projectId,
      publicationAttemptId: prepared.attemptId,
      correlationKey: newId("m3head"),
    });
    await authorizeMerge({
      pilotId,
      projectId,
      attemptId: mergePrep.attemptId,
      statement: "merge",
    });
    scriptedAdvancePrHead(pilotId, dispatched.prNumber!, "cafebabecafebabecafebabecafebabe0cafe");
    await expect(
      dispatchMerge({ pilotId, projectId, attemptId: mergePrep.attemptId }),
    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });

    // Closed PR path on a fresh merge prepare after re-open simulation is skipped —
    // close the PR and ensure prepareMerge refuses.
    scriptedClosePr(pilotId, dispatched.prNumber!);
    await expect(
      prepareMerge({
        pilotId,
        projectId,
        publicationAttemptId: prepared.attemptId,
        correlationKey: newId("m3closed"),
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });
  });

  it("B6: 403 remote read is FORBIDDEN, not CREATE — authorize refused", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b6f");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B6F");
    ScriptedFaultRegistry.setFault("403");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/existing-spec.md",
      targetBranch: "main",
      correlationKey: newId("b6f"),
    });
    ScriptedFaultRegistry.clear();
    // Path docs/spec.md exists at main; with 403 on content read → FORBIDDEN.
    // Using a new path: tip ok, file NOT_FOUND would be CREATE — force 403 on content.
    expect(prepared.plan?.inspection.kind).toBe("FORBIDDEN");
    await expect(
      authorizePublication({
        pilotId,
        projectId,
        attemptId: prepared.attemptId,
        statement: "should fail",
        inspectedFingerprint: prepared.plan!.inspection.inspectionFingerprint,
      }),
    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
  });

  it("B6: timeout remote read is TIMEOUT, not CREATE", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b6t");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B6T");
    ScriptedFaultRegistry.setFault("read_unavailable");
    await expect(
      preparePublication({
        pilotId,
        projectId,
        documentId,
        revisionId,
        repositoryId: repoId,
        targetPath: "docs/to.md",
        targetBranch: "main",
        correlationKey: newId("b6t"),
      }),
    ).rejects.toMatchObject({ code: "TIMEOUT" });
    ScriptedFaultRegistry.clear();
  });

  it("B7: actorLogin change requires requalification", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b7");
    const { repoId, status } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B7");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b7.md",
      targetBranch: "main",
      correlationKey: newId("b7"),
    });
    await authzPub(pilotId, projectId, prepared);
    await db
      .update(integrationAuthorizations)
      .set({ accountLogin: "other-actor-now" })
      .where(eq(integrationAuthorizations.id, status.authorizationId));
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
  });

  it("B2: reconcile during active dispatch is READ-ONLY — no second dispatch effects", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2-barrier");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2bar");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b2bar.md",
      targetBranch: "main",
      correlationKey: newId("b2bar"),
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    ExecutionBarrierRegistry.clear();
    ExecutionBarrierRegistry.arm("before:CREATE_BRANCH");

    const dispatchPromise = dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });

    // Wait until DISPATCHED
    for (let i = 0; i < 50; i++) {
      const row = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!;
      if (row.status === "DISPATCHED") break;
      await new Promise((r) => setTimeout(r, 20));
    }
    const mid = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(mid.status).toBe("DISPATCHED");

    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    expect(reconciled.status).toBe("DISPATCHED");
    expect(String(reconciled.note ?? "")).toMatch(/READ-ONLY|claim/i);

    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "CONFLICT" });

    ExecutionBarrierRegistry.release("before:CREATE_BRANCH");
    const done = await dispatchPromise;
    expect(done.status).toBe("COMPLETED");
    const counts = getScriptedMutationCounts(pilotId);
    expect(counts.createBranch).toBe(1);
    expect(counts.putFileContents).toBe(1);
    expect(counts.createPR).toBe(1);
    ExecutionBarrierRegistry.clear();
  });

  it("C1: revoke D6 after CREATE_BRANCH blocks putFileContents", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-c1-rev");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "C1");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/c1.md",
      targetBranch: "main",
      correlationKey: newId("c1"),
    });
    const authz = await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    ExecutionBarrierRegistry.clear();
    ExecutionBarrierRegistry.arm("before:PUBLISH_FILE");

    const dispatchPromise = dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    }).catch((e: unknown) => e);

    for (let i = 0; i < 80; i++) {
      const row = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!;
      const progress = JSON.parse(row.resultJson).progress;
      if (progress?.branchCreated) break;
      await new Promise((r) => setTimeout(r, 20));
    }

    await db.transaction(async (tx) => {
      await markDecisionState(tx, authz.decisionId!, "REVOKED");
    });
    ExecutionBarrierRegistry.release("before:PUBLISH_FILE");
    const outcome = await dispatchPromise;
    expect(outcome).toMatchObject({ code: "ACCESS_DENIED" });
    const counts = getScriptedMutationCounts(pilotId);
    expect(counts.createBranch).toBe(1);
    expect(counts.putFileContents).toBe(0);
    expect(counts.createPR).toBe(0);
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(JSON.parse(row.resultJson).progress?.branchCreated).toBe(true);
    ExecutionBarrierRegistry.clear();
  });

  it("C2: historical PR creation vs CLOSED current state — no second PR", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-c2-closed");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "C2");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/c2.md",
      targetBranch: "main",
      correlationKey: newId("c2"),
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    const dispatched = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(dispatched.status).toBe("COMPLETED");
    expect(dispatched.prNumber).toBeGreaterThan(0);
    scriptedClosePr(pilotId, dispatched.prNumber!);

    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    expect(reconciled.status).toBe("COMPLETED");
    expect(reconciled.prCurrentState).toBe("CLOSED");
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1);

    const ref = (
      await db
        .select()
        .from(documentPublicationRefs)
        .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId))
        .limit(1)
    )[0]!;
    expect(ref.status).toBe("PR_CLOSED");
    const detail = JSON.parse(ref.detailJson);
    expect(detail.prCreatedHistorically).toBe(true);
    expect(detail.prCurrentState).toBe("CLOSED");

    await expect(
      prepareMerge({
        pilotId,
        projectId,
        publicationAttemptId: prepared.attemptId,
        correlationKey: newId("c2m"),
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });
  });

  it("C3: same pilot two repos — isolated contents and PR lookups", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-c3");
    const { status } = await connectAndAttach(pilotId, projectId);
    const repoA = status.repositories.find((r) => r.fullName === "acme/docs-projet")!;
    const repoB = status.repositories.find((r) => r.fullName === "acme/shared-docs")!;
    await attachRepositoryToProject(pilotId, projectId, repoB.id);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "C3");

    const prepA = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoA.id,
      targetPath: "docs/c3a.md",
      targetBranch: "main",
      correlationKey: newId("c3a"),
    });
    await authzPub(pilotId, projectId, prepA);
    const dispA = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepA.attemptId,
    });

    const prepB = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoB.id,
      targetPath: "docs/c3b.md",
      targetBranch: "main",
      correlationKey: newId("c3b"),
    });
    await authzPub(pilotId, projectId, prepB);
    const dispB = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepB.attemptId,
    });

    expect(dispA.prNumber).toBe(1);
    expect(dispB.prNumber).toBe(1);
    expect(getScriptedMutationCounts(pilotId, "acme/docs-projet").createPR).toBe(1);
    expect(getScriptedMutationCounts(pilotId, "acme/shared-docs").createPR).toBe(1);
  });

  it("B2 fencing: expired lease — old worker cannot overwrite new owner's claim/progress", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2-fence");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2f");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b2fence.md",
      targetBranch: "main",
      correlationKey: newId("b2fence"),
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    ExecutionBarrierRegistry.clear();
    ExecutionBarrierRegistry.arm("before:CREATE_BRANCH");

    const dispatchA = dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    }).catch((e: unknown) => e);

    for (let i = 0; i < 80; i++) {
      const row = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!;
      if (row.status === "DISPATCHED") break;
      await new Promise((r) => setTimeout(r, 20));
    }
    const mid = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(mid.status).toBe("DISPATCHED");
    const claimA = readClaim(mid.resultJson);
    expect(claimA?.claimToken).toBeTruthy();

    // Expire lease in PostgreSQL while A is still suspended (in-flight simulation).
    const expiredJson = JSON.parse(mid.resultJson) as { claim: Record<string, unknown> };
    expiredJson.claim = {
      ...expiredJson.claim,
      leaseExpiresAt: new Date(Date.now() - 5_000).toISOString(),
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(expiredJson), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prepared.attemptId));

    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    expect(reconciled.status).toBe("AMBIGUOUS");

    // Let B run without hitting A's suspended barrier promise.
    ExecutionBarrierRegistry.enabled = false;
    const doneB = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(doneB.status).toBe("COMPLETED");
    const afterB = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(afterB.status).toBe("COMPLETED");
    const claimB = readClaim(afterB.resultJson);
    expect(claimB?.claimToken).not.toBe(claimA!.claimToken);
    const countsAfterB = getScriptedMutationCounts(pilotId);
    expect(countsAfterB.createBranch).toBe(1);
    expect(countsAfterB.putFileContents).toBe(1);
    expect(countsAfterB.createPR).toBe(1);

    // Wake stale worker A — must not mutate or overwrite B.
    ExecutionBarrierRegistry.release("before:CREATE_BRANCH");
    const outcomeA = await dispatchA;
    expect(outcomeA).toMatchObject({ code: "CONFLICT" });

    const final = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(final.status).toBe("COMPLETED");
    expect(readClaim(final.resultJson)?.claimToken).toBe(claimB?.claimToken);
    const countsFinal = getScriptedMutationCounts(pilotId);
    expect(countsFinal.createBranch).toBe(1);
    expect(countsFinal.putFileContents).toBe(1);
    expect(countsFinal.createPR).toBe(1);
    ExecutionBarrierRegistry.clear();
  });

  it("B2 fencing: stale claimToken CAS affects zero rows against new owner", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2-cas0");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2cas");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b2cas.md",
      targetBranch: "main",
      correlationKey: newId("b2cas"),
    });
    await authzPub(pilotId, projectId, prepared);
    ExecutionBarrierRegistry.clear();
    ExecutionBarrierRegistry.arm("before:CREATE_BRANCH");

    const dispatchA = dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    }).catch((e: unknown) => e);

    for (let i = 0; i < 80; i++) {
      const row = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!;
      if (row.status === "DISPATCHED") break;
      await new Promise((r) => setTimeout(r, 20));
    }
    const mid = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const tokenA = readClaim(mid.resultJson)!.claimToken;

    // Simulate B having replaced the claim while A is suspended.
    const hijacked = JSON.parse(mid.resultJson) as { claim: Record<string, unknown>; progress?: unknown };
    hijacked.claim = {
      claimToken: "claim_attacker_other_owner",
      claimedAt: new Date().toISOString(),
      leaseExpiresAt: new Date(Date.now() + 60_000).toISOString(),
      generation: 99,
      releasedAt: null,
    };
    hijacked.progress = { ...(hijacked.progress as object), poisonedBy: "B" };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(hijacked), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prepared.attemptId));

    // Direct SQL fencing probe: A's token must update 0 rows.
    const { sql } = await import("drizzle-orm");
    const cas = await db
      .update(effectAttempts)
      .set({
        resultJson: JSON.stringify({ progress: { overwrittenByA: true }, claim: { claimToken: tokenA } }),
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(effectAttempts.id, prepared.attemptId),
          eq(effectAttempts.status, "DISPATCHED"),
          sql`${effectAttempts.resultJson}::jsonb->'claim'->>'claimToken' = ${tokenA}`,
        ),
      )
      .returning({ id: effectAttempts.id });
    expect(cas).toHaveLength(0);

    const still = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(JSON.parse(still.resultJson).progress?.poisonedBy).toBe("B");
    expect(readClaim(still.resultJson)?.claimToken).toBe("claim_attacker_other_owner");

    ExecutionBarrierRegistry.release("before:CREATE_BRANCH");
    const outcomeA = await dispatchA;
    expect(outcomeA).toMatchObject({ code: "CONFLICT" });
    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
    ExecutionBarrierRegistry.clear();
  });

  it("B4/C2: historical prCreated + remote unread ⇒ UNKNOWN, never COMPLETED", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4unk");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4unk");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4unk.md",
      targetBranch: "main",
      correlationKey: newId("b4unk"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const parsed = JSON.parse(row.resultJson) as {
      progress?: Record<string, unknown>;
      claim?: unknown;
    };
    expect(parsed.progress?.prCreated).toBe(true);

    // Branch/commit may be observable; PR path forced unread + prNumber wiped.
    await db
      .update(effectAttempts)
      .set({
        status: "AMBIGUOUS",
        resultJson: JSON.stringify({
          ...parsed,
          progress: {
            ...parsed.progress,
            prCreated: true,
            prOpened: true,
            prNumber: null,
            branchCreated: true,
            filePublished: true,
          },
          claim: {
            claimToken: "claim_released",
            claimedAt: new Date().toISOString(),
            leaseExpiresAt: new Date(Date.now() - 1000).toISOString(),
            generation: 1,
            releasedAt: new Date().toISOString(),
          },
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prepared.attemptId));

    ScriptedFaultRegistry.setFault("read_unavailable");
    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    ScriptedFaultRegistry.clear();
    expect(reconciled.status).toBe("AMBIGUOUS");
    expect(reconciled.prCurrentState).toBe("UNKNOWN");
    expect(reconciled.status).not.toBe("COMPLETED");
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1); // only the lost-ack create
  });

  it("B2: two reconcilers cannot degrade COMPLETED to AMBIGUOUS", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b2-comp");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B2c");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b2comp.md",
      targetBranch: "main",
      correlationKey: newId("b2comp"),
    });
    await authzPub(pilotId, projectId, prepared);
    const done = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(done.status).toBe("COMPLETED");

    const [r1, r2] = await Promise.all([
      reconcileAttempt(pilotId, projectId, prepared.attemptId),
      reconcileAttempt(pilotId, projectId, prepared.attemptId),
    ]);
    expect(r1.status).toBe("COMPLETED");
    expect(r2.status).toBe("COMPLETED");
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(row.status).toBe("COMPLETED");
  });

  it("B4/C2 resume: lost_ack + wipe prNumber + unread → readable → COMPLETED with createPR===1", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4-resume");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4res");
    const correlationKey = newId("b4res");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4resume.md",
      targetBranch: "main",
      correlationKey,
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);

    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1);

    const afterLost = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const parsed = JSON.parse(afterLost.resultJson) as {
      progress?: Record<string, unknown>;
      claim?: unknown;
    };
    expect(parsed.progress?.prCreated).toBe(true);

    // Simulate lost ACK persistence: keep historical flag, drop prNumber.
    await db
      .update(effectAttempts)
      .set({
        status: "AMBIGUOUS",
        resultJson: JSON.stringify({
          progress: {
            ...parsed.progress,
            prCreated: true,
            prOpened: true,
            prNumber: null,
            prCurrentState: "UNKNOWN",
            branchCreated: true,
            filePublished: true,
          },
          claim: {
            claimToken: "claim_released_resume",
            claimedAt: new Date().toISOString(),
            leaseExpiresAt: new Date(Date.now() - 1000).toISOString(),
            generation: 1,
            releasedAt: new Date().toISOString(),
          },
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prepared.attemptId));

    ScriptedFaultRegistry.setFault("read_unavailable");
    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    ScriptedFaultRegistry.clear();
    expect(reconciled.status).toBe("AMBIGUOUS");
    expect(reconciled.prCurrentState).toBe("UNKNOWN");

    // Provider readable again — resume must re-identify historical PR, not create a second.
    resetScriptedMutationCounts(pilotId);
    const resumed = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(resumed.status).toBe("COMPLETED");
    expect(resumed.prNumber).toBe(1);
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
    expect(getScriptedMutationCounts(pilotId).putFileContents).toBe(0);

    const final = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(final.status).toBe("COMPLETED");
    const finalProgress = JSON.parse(final.resultJson).progress;
    expect(finalProgress.prNumber).toBe(1);
    expect(finalProgress.prCurrentState).toBe("OPEN");

    const refs = await db
      .select()
      .from(documentPublicationRefs)
      .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId));
    expect(refs).toHaveLength(1);
    expect(refs[0]!.prNumber).toBe(1);
    expect(refs[0]!.status).toBe("PR_OPEN");
    expect(refs[0]!.documentId).toBe(documentId);
    expect(refs[0]!.repositoryId).toBe(repoId);

    // Idempotent re-dispatch of COMPLETED.
    const again = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(again.status).toBe("COMPLETED");
    expect(again.idempotent).toBe(true);
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
  });

  it("B4/C2 resume: still unreadable → AMBIGUOUS, no createPR, no COMPLETED", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4-still");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4st");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4still.md",
      targetBranch: "main",
      correlationKey: newId("b4still"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const parsed = JSON.parse(row.resultJson) as { progress?: Record<string, unknown> };
    await db
      .update(effectAttempts)
      .set({
        status: "AMBIGUOUS",
        resultJson: JSON.stringify({
          progress: {
            ...parsed.progress,
            prCreated: true,
            prNumber: null,
            prCurrentState: "UNKNOWN",
          },
          claim: {
            claimToken: "claim_rel",
            claimedAt: new Date().toISOString(),
            leaseExpiresAt: new Date(Date.now() - 1).toISOString(),
            generation: 1,
            releasedAt: new Date().toISOString(),
          },
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prepared.attemptId));

    resetScriptedMutationCounts(pilotId);
    ScriptedFaultRegistry.setFault("read_unavailable");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(after.status).toBe("AMBIGUOUS");
    expect(after.status).not.toBe("COMPLETED");
  });

  it("B4/C2 resume: historical prCreated but zero remote matches → AMBIGUOUS, no createPR", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4-nomatch");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4nm");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4nomatch.md",
      targetBranch: "main",
      correlationKey: newId("b4nomatch"),
    });
    await authzPub(pilotId, projectId, prepared);
    // Seed progress as if PR existed historically, but never create one remotely.
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    await db
      .update(effectAttempts)
      .set({
        status: "AMBIGUOUS",
        resultJson: JSON.stringify({
          progress: {
            branchCreated: true,
            filePublished: true,
            commitSha: "sha_fake",
            prCreated: true,
            prOpened: true,
            prNumber: null,
            prCurrentState: "UNKNOWN",
            lastStep: "OPEN_PR",
          },
          claim: {
            claimToken: "claim_rel",
            claimedAt: new Date().toISOString(),
            leaseExpiresAt: new Date(Date.now() - 1).toISOString(),
            generation: 1,
            releasedAt: new Date().toISOString(),
          },
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prepared.attemptId));
    void row;

    resetScriptedMutationCounts(pilotId);
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
  });

  it("B4/C2 resume: PR CLOSED after historical create — COMPLETED with PR_CLOSED, no merge, no 2nd PR", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-b4-closed");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "B4cl");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/b4closed.md",
      targetBranch: "main",
      correlationKey: newId("b4closed"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();

    const afterLost = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const progress = JSON.parse(afterLost.resultJson).progress as {
      prNumber?: number;
      commitSha?: string;
    };
    expect(progress.prNumber).toBeTruthy();
    scriptedClosePr(pilotId, progress.prNumber!);

    await db
      .update(effectAttempts)
      .set({
        status: "AMBIGUOUS",
        resultJson: JSON.stringify({
          progress: {
            ...JSON.parse(afterLost.resultJson).progress,
            prNumber: null,
            prCreated: true,
            prCurrentState: "UNKNOWN",
          },
          claim: {
            claimToken: "claim_rel",
            claimedAt: new Date().toISOString(),
            leaseExpiresAt: new Date(Date.now() - 1).toISOString(),
            generation: 1,
            releasedAt: new Date().toISOString(),
          },
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prepared.attemptId));

    resetScriptedMutationCounts(pilotId);
    const resumed = await dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    });
    expect(resumed.status).toBe("COMPLETED");
    expect(resumed.prNumber).toBe(progress.prNumber);
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);

    const ref = (
      await db
        .select()
        .from(documentPublicationRefs)
        .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId))
        .limit(1)
    )[0]!;
    expect(ref.status).toBe("PR_CLOSED");
    expect(JSON.parse(ref.detailJson).prCurrentState).toBe("CLOSED");

    await expect(
      prepareMerge({
        pilotId,
        projectId,
        publicationAttemptId: prepared.attemptId,
        correlationKey: newId("merge-closed"),
      }),
    ).rejects.toBeInstanceOf(StudioError);
  });

  it("D8: UNIQUE effect_attempt_id — at most one publicationRef; concurrent complete leaves one", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-d8-uniq");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "D8u");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/d8uniq.md",
      targetBranch: "main",
      correlationKey: newId("d8uniq"),
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    ExecutionBarrierRegistry.clear();
    ExecutionBarrierRegistry.arm("before:COMPLETE_PUBLICATION");

    const dispatchA = dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    }).catch((e: unknown) => e);

    for (let i = 0; i < 100; i++) {
      const row = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!;
      const progress = JSON.parse(row.resultJson).progress;
      if (row.status === "DISPATCHED" && progress?.prNumber != null) break;
      await new Promise((r) => setTimeout(r, 20));
    }
    const mid = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(mid.status).toBe("DISPATCHED");
    expect(JSON.parse(mid.resultJson).progress?.prNumber).toBeTruthy();

    // Expire lease so reconcile can liberate and complete while A is suspended at D8 boundary.
    const expired = JSON.parse(mid.resultJson) as { claim: Record<string, unknown> };
    expired.claim = {
      ...expired.claim,
      leaseExpiresAt: new Date(Date.now() - 5_000).toISOString(),
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(expired), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prepared.attemptId));

    ExecutionBarrierRegistry.enabled = false;
    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    expect(reconciled.status).toBe("COMPLETED");

    ExecutionBarrierRegistry.release("before:COMPLETE_PUBLICATION");
    const outcomeA = await dispatchA;
    expect(outcomeA).toMatchObject({ code: "CONFLICT" });

    const refs = await db
      .select()
      .from(documentPublicationRefs)
      .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId));
    expect(refs).toHaveLength(1);
    const final = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(final.status).toBe("COMPLETED");
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1);
    ExecutionBarrierRegistry.clear();
  });

  it("D8: wrong publicationMarker with matching head/base/SHA refuses COMPLETED", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-d8-marker");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "D8m");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/d8marker.md",
      targetBranch: "main",
      correlationKey: newId("d8marker"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const progress = JSON.parse(row.resultJson).progress as { prNumber?: number };
    expect(progress.prNumber).toBeTruthy();
    // Same head/base/SHA but foreign marker.
    scriptedSetPrMarker(pilotId, progress.prNumber!, "foreign-marker-other-attempt");

    resetScriptedMutationCounts(pilotId);
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);

    const refs = await db
      .select()
      .from(documentPublicationRefs)
      .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId));
    expect(refs).toHaveLength(0);
    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(after.status).not.toBe("COMPLETED");
  });

  it("D7/D8: reconcile with known prNumber + wrong marker refuses COMPLETED", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-d8-recon-marker");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "D8rm");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/d8recon-marker.md",
      targetBranch: "main",
      correlationKey: newId("d8reconm"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const progress = JSON.parse(row.resultJson).progress as { prNumber?: number };
    expect(progress.prNumber).toBeTruthy();
    // Expire lease so reconcile may liberate — but marker is foreign.
    const expired = JSON.parse(row.resultJson) as { claim: Record<string, unknown> };
    expired.claim = {
      ...expired.claim,
      leaseExpiresAt: new Date(Date.now() - 5_000).toISOString(),
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(expired), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prepared.attemptId));

    scriptedSetPrMarker(pilotId, progress.prNumber!, "foreign-marker-reconcile");
    resetScriptedMutationCounts(pilotId);
    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    expect(reconciled.status).not.toBe("COMPLETED");
    expect(["REQUIRES_REQUALIFICATION", "AMBIGUOUS", "DISPATCHED"]).toContain(reconciled.status);
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);

    const refs = await db
      .select()
      .from(documentPublicationRefs)
      .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId));
    expect(refs).toHaveLength(0);
  });

  it("D7/D8: owned CAS terminal refuses COMPLETED when lease expired (same claimToken)", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-d8-lease-cas");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "D8lease");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/d8lease.md",
      targetBranch: "main",
      correlationKey: newId("d8lease"),
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    ExecutionBarrierRegistry.clear();
    ExecutionBarrierRegistry.arm("before:COMPLETE_PUBLICATION");

    const dispatchA = dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    }).catch((e: unknown) => e);

    for (let i = 0; i < 100; i++) {
      const row = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!;
      const progress = JSON.parse(row.resultJson).progress;
      if (row.status === "DISPATCHED" && progress?.prNumber != null) break;
      await new Promise((r) => setTimeout(r, 20));
    }
    const mid = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(mid.status).toBe("DISPATCHED");
    const claimBefore = readClaim(mid.resultJson);
    expect(claimBefore?.claimToken).toBeTruthy();

    // Expire lease but KEEP the same claimToken — owned CAS must refuse terminal COMPLETED.
    const expired = JSON.parse(mid.resultJson) as { claim: Record<string, unknown> };
    expired.claim = {
      ...expired.claim,
      leaseExpiresAt: new Date(Date.now() - 5_000).toISOString(),
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(expired), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prepared.attemptId));

    ExecutionBarrierRegistry.release("before:COMPLETE_PUBLICATION");
    const outcomeA = await dispatchA;
    expect(outcomeA).toMatchObject({ code: "CONFLICT" });

    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(after.status).not.toBe("COMPLETED");
    const refs = await db
      .select()
      .from(documentPublicationRefs)
      .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId));
    expect(refs).toHaveLength(0);
    ExecutionBarrierRegistry.clear();
  });

  it("D9 user-to-server SCRIPTED: state replay / session bind / no token leakage", async () => {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 7).toString("base64");
    const { pilotId, sessionId } = await seedProject("git-oauth-a");
    const start = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    expect(start.pkce).toBe(true);
    expect(start.flow).toBe("scripted");
    const status = await completeGitHubAuthorization({
      pilotId,
      state: start.state,
      studioSessionId: sessionId,
    });
    expect(status.status).toBe("CONNECTED");
    expect(status.githubUserId).toBe(`gh-${pilotId}`);
    expect(JSON.stringify(status)).not.toMatch(/ciphertext|ghs_|scripted-access|BEGIN/);
    expect(status.repositories[0]?.permissions?.source).toBe("scripted_fixture");

    const authRow = (
      await db
        .select()
        .from(integrationAuthorizations)
        .where(eq(integrationAuthorizations.pilotId, pilotId))
        .limit(1)
    )[0]!;
    expect(authRow.tokenCiphertext).toBeTruthy();
    expect(authRow.tokenNonce).toBeTruthy();

    await expect(
      completeGitHubAuthorization({
        pilotId,
        state: start.state,
        studioSessionId: sessionId,
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });

    const other = await seedProject("git-oauth-b");
    const start2 = await startGitHubAuthorization(
      other.pilotId,
      "/settings/integrations",
      other.sessionId,
    );
    // Stolen state + wrong pilot
    await expect(
      completeGitHubAuthorization({
        pilotId,
        state: start2.state,
        studioSessionId: sessionId,
      }),
    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });

    // Same pilot, different Studio session → denied
    const start3 = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    await expect(
      completeGitHubAuthorization({
        pilotId,
        state: start3.state,
        studioSessionId: newId("sid-other"),
      }),
    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });

    delete process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY;
  });

  it("D9 security: REAL demanded without credentials → NOT_CONFIGURED (no SCRIPTED fallback)", async () => {
    const prev = process.env.STUDIO_GITHUB_USER_OAUTH;
    const prevAllow = process.env.STUDIO_ALLOW_SCRIPTED_GITHUB;
    process.env.STUDIO_GITHUB_USER_OAUTH = "real";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
    delete process.env.GITHUB_APP_CLIENT_ID;
    delete process.env.GITHUB_APP_CLIENT_SECRET;
    delete process.env.GITHUB_APP_CALLBACK_URL;
    const { pilotId, sessionId } = await seedProject("git-oauth-nofallback");
    await expect(
      startGitHubAuthorization(pilotId, "/settings/integrations", sessionId),
    ).rejects.toMatchObject({ code: "NOT_CONFIGURED" });
    if (prev === undefined) delete process.env.STUDIO_GITHUB_USER_OAUTH;
    else process.env.STUDIO_GITHUB_USER_OAUTH = prev;
    if (prevAllow === undefined) delete process.env.STUDIO_ALLOW_SCRIPTED_GITHUB;
    else process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = prevAllow;
  });

  it("D9 security: foreign installation_id cannot authorize SCRIPTED CONNECTED", async () => {
    const { pilotId, sessionId } = await seedProject("git-oauth-inst");
    const start = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    await expect(
      completeGitHubAuthorization({
        pilotId,
        state: start.state,
        studioSessionId: sessionId,
        installationId: "179935689",
      }),
    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });
  });

  it("D9 security: permissions snapshot is scripted_fixture not silent REAL write", async () => {
    const { pilotId, projectId, sessionId } = await seedProject("git-oauth-perms");
    const { status } = await connectAndAttach(pilotId, projectId, sessionId);
    expect(status.repositories[0]!.permissions).toMatchObject({
      source: "scripted_fixture",
      contents: "write",
      pull_requests: "write",
    });
    const row = (
      await db
        .select()
        .from(authorizedRepositories)
        .where(eq(authorizedRepositories.id, status.repositories[0]!.id))
        .limit(1)
    )[0]!;
    const parsed = JSON.parse(row.permissionsJson);
    expect(parsed.source).toBe("scripted_fixture");
  });

  it("D7: persistOwnedProgress refuses when lease expired (same claimToken)", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-d7-prog-lease");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "D7pl");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/d7prog-lease.md",
      targetBranch: "main",
      correlationKey: newId("d7pl"),
    });
    await authzPub(pilotId, projectId, prepared);
    ExecutionBarrierRegistry.clear();
    ExecutionBarrierRegistry.arm("before:CREATE_BRANCH");

    const dispatchA = dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    }).catch((e: unknown) => e);

    for (let i = 0; i < 100; i++) {
      const row = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!;
      if (row.status === "DISPATCHED") break;
      await new Promise((r) => setTimeout(r, 20));
    }
    const mid = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(mid.status).toBe("DISPATCHED");
    const claim = readClaim(mid.resultJson);
    expect(claim?.claimToken).toBeTruthy();
    const expired = JSON.parse(mid.resultJson) as { claim: Record<string, unknown> };
    expired.claim = {
      ...expired.claim,
      leaseExpiresAt: new Date(Date.now() - 5_000).toISOString(),
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(expired), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prepared.attemptId));

    ExecutionBarrierRegistry.release("before:CREATE_BRANCH");
    const outcome = await dispatchA;
    expect(outcome).toMatchObject({ code: "CONFLICT" });
    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(after.status).not.toBe("COMPLETED");
    const refs = await db
      .select()
      .from(documentPublicationRefs)
      .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId));
    expect(refs).toHaveLength(0);
    ExecutionBarrierRegistry.clear();
  });

  it("D8: two reconcilers concurrent — exactly one publicationRef and COMPLETED", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-d8-2rec");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "D8r");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/d8rec.md",
      targetBranch: "main",
      correlationKey: newId("d8rec"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();

    const [r1, r2] = await Promise.all([
      reconcileAttempt(pilotId, projectId, prepared.attemptId),
      reconcileAttempt(pilotId, projectId, prepared.attemptId),
    ]);
    const statuses = [r1.status, r2.status];
    expect(statuses.filter((s) => s === "COMPLETED").length).toBeGreaterThanOrEqual(1);
    const final = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(final.status).toBe("COMPLETED");
    const refs = await db
      .select()
      .from(documentPublicationRefs)
      .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId));
    expect(refs).toHaveLength(1);
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1);
  });

  it("C2: concurrent completeGitHubAuthorization → at most one CONNECTED", async () => {
    const { pilotId, sessionId } = await seedProject("git-c2-connected");
    const s1 = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    const s2 = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:AUTH_INSERT");

    const p1 = completeGitHubAuthorization({
      pilotId,
      state: s1.state,
      studioSessionId: sessionId,
    }).catch((e: unknown) => e);
    const p2 = completeGitHubAuthorization({
      pilotId,
      state: s2.state,
      studioSessionId: sessionId,
    }).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 30));
    OAuthConcurrencyBarrier.release("before:AUTH_INSERT");
    const [a, b] = await Promise.all([p1, p2]);
    OAuthConcurrencyBarrier.clear();

    const outcomes = [a, b];
    const ok = outcomes.filter(
      (o) => o && typeof o === "object" && "status" in o && (o as { status: string }).status === "CONNECTED",
    );
    const conflicts = outcomes.filter((o) => o instanceof StudioError && o.code === "CONFLICT");
    expect(ok.length).toBe(1);
    expect(conflicts.length).toBe(1);

    const connected = await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    expect(connected).toHaveLength(1);

    // Direct UNIQUE proof: second CONNECTED insert must fail.
    await expect(
      db.insert(integrationAuthorizations).values({
        id: newId("iauth"),
        pilotId,
        provider: "github",
        status: "CONNECTED",
        metadataJson: "{}",
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ).rejects.toThrow();
  });

  it("C1: concurrent refresh — loser ACCESS_DENIED must not wipe winner tokens", async () => {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 3).toString("base64");
    process.env.GITHUB_APP_CLIENT_ID = "Iv1.test-client";
    process.env.GITHUB_APP_CLIENT_SECRET = "test-secret";
    process.env.GITHUB_APP_CALLBACK_URL = "http://127.0.0.1:3100/api/integrations/github/callback";

    const { pilotId } = await seedProject("git-c1-refresh");
    const oldRefresh = sealSecret("refresh-gen-1");
    const oldAccess = sealSecret("access-gen-1");
    const authId = newId("iauth");
    await db.insert(integrationAuthorizations).values({
      id: authId,
      pilotId,
      provider: "github",
      status: "CONNECTED",
      installationId: "scripted-install-1",
      accountLogin: "scripted-user",
      githubUserId: `gh-${pilotId}`,
      tokenCiphertext: oldAccess.ciphertext,
      tokenNonce: oldAccess.nonce,
      tokenKeyVersion: oldAccess.keyVersion,
      refreshCiphertext: oldRefresh.ciphertext,
      refreshNonce: oldRefresh.nonce,
      tokenExpiresAt: new Date(Date.now() - 60_000),
      metadataJson: JSON.stringify({ mode: "REAL_USER_OAUTH", flow: "github_app_user_oauth" }),
      connectedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    let githubCalls = 0;
    const fetchImpl = (async (input: RequestInfo | URL) => {
      const url = String(input);
      if (!url.includes("login/oauth/access_token")) {
        return new Response("{}", { status: 500 });
      }
      githubCalls += 1;
      if (githubCalls === 1) {
        return new Response(
          JSON.stringify({
            access_token: "access-gen-2",
            refresh_token: "refresh-gen-2",
            expires_in: 3600,
            scope: "",
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      return new Response(JSON.stringify({ error: "bad_refresh_token" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }) as unknown as typeof fetch;

    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:REFRESH_CLAIM");

    const row = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;

    const p1 = loadOrRefreshUserAccessToken(row, fetchImpl).catch((e: unknown) => e);
    const p2 = loadOrRefreshUserAccessToken({ ...row }, fetchImpl).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 30));
    OAuthConcurrencyBarrier.release("before:REFRESH_CLAIM");

    const [r1, r2] = await Promise.all([p1, p2]);
    OAuthConcurrencyBarrier.clear();

    const winners = [r1, r2].filter((x) => typeof x === "string");
    const conflicts = [r1, r2].filter((x) => x instanceof StudioError && x.code === "CONFLICT");
    // Winner rotates once; loser may CONFLICT under active lease OR observe advanced G2.
    expect(winners.length).toBeGreaterThanOrEqual(1);
    expect(winners.every((w) => w === "access-gen-2")).toBe(true);
    expect(winners.length + conflicts.length).toBe(2);
    expect(githubCalls).toBe(1);

    const after = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(after.status).toBe("CONNECTED");
    expect(after.refreshCiphertext).not.toBe(oldRefresh.ciphertext);
    expect(after.tokenCiphertext).toBeTruthy();

    const wiped = await markRequiresReauth(pilotId, authId, oldRefresh.ciphertext, null);
    expect(wiped).toBe(false);
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.tokenCiphertext).toBeTruthy();

    delete process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY;
    delete process.env.GITHUB_APP_CLIENT_ID;
    delete process.env.GITHUB_APP_CLIENT_SECRET;
    delete process.env.GITHUB_APP_CALLBACK_URL;
  });

  it("C1: markRequiresReauth only when generation matches", async () => {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 4).toString("base64");
    const { pilotId } = await seedProject("git-c1-gen");
    const genA = sealSecret("refresh-a");
    const genB = sealSecret("refresh-b");
    const access = sealSecret("access-b");
    const authId = newId("iauth");
    await db.insert(integrationAuthorizations).values({
      id: authId,
      pilotId,
      provider: "github",
      status: "CONNECTED",
      tokenCiphertext: access.ciphertext,
      tokenNonce: access.nonce,
      tokenKeyVersion: access.keyVersion,
      refreshCiphertext: genB.ciphertext,
      refreshNonce: genB.nonce,
      tokenExpiresAt: new Date(Date.now() + 3600_000),
      metadataJson: "{}",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    expect(await markRequiresReauth(pilotId, authId, genA.ciphertext, null)).toBe(false);
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(await markRequiresReauth(pilotId, authId, genB.ciphertext, null)).toBe(true);
    const gone = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(gone.status).toBe("REQUIRES_REAUTH");
    expect(gone.tokenCiphertext).toBeNull();
    delete process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY;
  });
});

describe("ML4 R1/R2 final concurrency safety closure (SCRIPTED/DET)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
  });

  function armOauthEnv() {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 9).toString("base64");
    process.env.GITHUB_APP_CLIENT_ID = "Iv1.test-client";
    process.env.GITHUB_APP_CLIENT_SECRET = "test-secret";
    process.env.GITHUB_APP_CALLBACK_URL = "http://127.0.0.1:3100/api/integrations/github/callback";
  }
  function clearOauthEnv() {
    delete process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY;
    delete process.env.GITHUB_APP_CLIENT_ID;
    delete process.env.GITHUB_APP_CLIENT_SECRET;
    delete process.env.GITHUB_APP_CALLBACK_URL;
  }

  async function seedExpiredAuth(label: string, refreshPlain = "refresh-gen-1") {
    const { pilotId } = await seedProject(label);
    const refresh = sealSecret(refreshPlain);
    const access = sealSecret("access-gen-1");
    const authId = newId("iauth");
    await db.insert(integrationAuthorizations).values({
      id: authId,
      pilotId,
      provider: "github",
      status: "CONNECTED",
      installationId: "scripted-install-1",
      accountLogin: "scripted-user",
      githubUserId: `gh-${pilotId}`,
      tokenCiphertext: access.ciphertext,
      tokenNonce: access.nonce,
      tokenKeyVersion: access.keyVersion,
      refreshCiphertext: refresh.ciphertext,
      refreshNonce: refresh.nonce,
      tokenExpiresAt: new Date(Date.now() - 60_000),
      metadataJson: JSON.stringify({ mode: "REAL_USER_OAUTH", flow: "github_app_user_oauth" }),
      connectedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const row = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    return { pilotId, authId, row, refresh, access };
  }

  // T01 — valid owner + active lease → rotation persists
  it("T01: owner with active lease rotates and persists", async () => {
    armOauthEnv();
    const { authId, row, refresh } = await seedExpiredAuth("r1-t01");
    const fetchImpl = (async () =>
      new Response(
        JSON.stringify({
          access_token: "access-gen-2",
          refresh_token: "refresh-gen-2",
          expires_in: 3600,
          scope: "",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      )) as unknown as typeof fetch;

    const token = await loadOrRefreshUserAccessToken(row, fetchImpl);
    expect(token).toBe("access-gen-2");
    const after = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(after.status).toBe("CONNECTED");
    expect(after.refreshCiphertext).not.toBe(refresh.ciphertext);
    expect(after.refreshLeaseToken).toBeNull();
    clearOauthEnv();
  });

  // T02 — A lost lease to B: A cannot mark REQUIRES_REAUTH
  it("T02: stale lease owner cannot mark REQUIRES_REAUTH", async () => {
    armOauthEnv();
    const { pilotId, authId, refresh } = await seedExpiredAuth("r1-t02");
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseToken: "rfl_owner_B",
        refreshLeaseExpiresAt: new Date(Date.now() + 60_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    expect(await markRequiresReauth(pilotId, authId, refresh.ciphertext, "rfl_stale_A")).toBe(false);
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshLeaseToken).toBe("rfl_owner_B");
    expect(still.tokenCiphertext).toBeTruthy();
    expect(still.refreshCiphertext).toBe(refresh.ciphertext);
    clearOauthEnv();
  });

  // T03 — A ACCESS_DENIED after lease loss: B tokens+lease preserved
  it("T03: ACCESS_DENIED after lease loss preserves B owner", async () => {
    armOauthEnv();
    const { pilotId, authId, row, refresh } = await seedExpiredAuth("r1-t03");
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:REFRESH_GITHUB");

    const pA = loadOrRefreshUserAccessToken(row, (async () => {
      await OAuthConcurrencyBarrier.before("before:REFRESH_GITHUB");
      return new Response(JSON.stringify({ error: "bad_refresh_token" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 40));
    // Steal lease while A is in-flight (simulates B reclaim after A expiry).
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseToken: "rfl_owner_B",
        refreshLeaseExpiresAt: new Date(Date.now() + 60_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    OAuthConcurrencyBarrier.release("before:REFRESH_GITHUB");
    const err = await pA;
    OAuthConcurrencyBarrier.clear();
    expect(err).toBeInstanceOf(StudioError);
    expect((err as StudioError).code).toBe("ACCESS_DENIED");

    // Explicit stale mark (generation match, wrong lease) must not wipe B.
    expect(await markRequiresReauth(pilotId, authId, refresh.ciphertext, "rfl_stale_A")).toBe(false);
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshLeaseToken).toBe("rfl_owner_B");
    expect(still.tokenCiphertext).toBeTruthy();
    expect(still.refreshCiphertext).toBe(refresh.ciphertext);
    clearOauthEnv();
  });

  // T04 — DEPENDENCY_UNAVAILABLE: no inferred revocation; lease retained (R1-A)
  it("T04: DEPENDENCY_UNAVAILABLE does not revoke without proof", async () => {
    armOauthEnv();
    const { authId, row, refresh } = await seedExpiredAuth("r1-t04");
    const err = await loadOrRefreshUserAccessToken(row, (async () => {
      throw new StudioError("DEPENDENCY_UNAVAILABLE", "GitHub user OAuth TIMEOUT/échec", {
        httpStatus: 503,
      });
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    expect(err).toBeInstanceOf(StudioError);
    expect((err as StudioError).code).toBe("DEPENDENCY_UNAVAILABLE");
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshCiphertext).toBe(refresh.ciphertext);
    expect(still.tokenCiphertext).toBeTruthy();
    // R1-A: ambiguous remote must leave durable lease — not a virgin slot.
    expect(still.refreshLeaseToken).toBeTruthy();
    expect(still.refreshLeaseExpiresAt).toBeTruthy();
    expect(still.refreshLeaseExpiresAt!.getTime()).toBeGreaterThan(Date.now());
    clearOauthEnv();
  });

  // T05 — positive response after lease replaced: no CAS by A
  it("T05: stale owner positive refresh cannot CAS after lease replace", async () => {
    armOauthEnv();
    const { authId, row, refresh } = await seedExpiredAuth("r1-t05");
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:REFRESH_GITHUB");

    const pA = loadOrRefreshUserAccessToken(row, (async () => {
      await OAuthConcurrencyBarrier.before("before:REFRESH_GITHUB");
      return new Response(
        JSON.stringify({
          access_token: "access-stale",
          refresh_token: "refresh-stale",
          expires_in: 3600,
          scope: "",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 40));
    const ownerBAccess = sealSecret("access-owner-B");
    const ownerBRefresh = sealSecret("refresh-owner-B");
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseToken: "rfl_owner_B",
        refreshLeaseExpiresAt: new Date(Date.now() + 60_000),
        tokenCiphertext: ownerBAccess.ciphertext,
        tokenNonce: ownerBAccess.nonce,
        tokenKeyVersion: ownerBAccess.keyVersion,
        refreshCiphertext: ownerBRefresh.ciphertext,
        refreshNonce: ownerBRefresh.nonce,
        tokenExpiresAt: new Date(Date.now() + 3600_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    OAuthConcurrencyBarrier.release("before:REFRESH_GITHUB");
    const result = await pA;
    OAuthConcurrencyBarrier.clear();

    // Generation moved — openAccessIfPresent returns B's access OR CONFLICT.
    if (typeof result === "string") {
      expect(result).toBe("access-owner-B");
    } else {
      expect(result).toBeInstanceOf(StudioError);
      expect((result as StudioError).code).toBe("CONFLICT");
    }
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshCiphertext).toBe(ownerBRefresh.ciphertext);
    expect(still.refreshCiphertext).not.toBe(refresh.ciphertext);
    expect(still.refreshLeaseToken).toBe("rfl_owner_B");
    clearOauthEnv();
  });

  // T06 — G2 persisted: G1 error cannot wipe G2
  it("T06: G1 error cannot wipe persisted G2", async () => {
    armOauthEnv();
    const { pilotId, authId } = await seedExpiredAuth("r1-t06");
    const g2 = sealSecret("refresh-gen-2");
    const a2 = sealSecret("access-gen-2");
    await db
      .update(integrationAuthorizations)
      .set({
        refreshCiphertext: g2.ciphertext,
        refreshNonce: g2.nonce,
        tokenCiphertext: a2.ciphertext,
        tokenNonce: a2.nonce,
        tokenKeyVersion: a2.keyVersion,
        tokenExpiresAt: new Date(Date.now() + 3600_000),
        refreshLeaseToken: null,
        refreshLeaseExpiresAt: null,
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    const g1 = sealSecret("refresh-gen-1");
    expect(await markRequiresReauth(pilotId, authId, g1.ciphertext, null)).toBe(false);
    expect(await markRequiresReauth(pilotId, authId, g1.ciphertext, "rfl_any")).toBe(false);
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshCiphertext).toBe(g2.ciphertext);
    expect(still.tokenCiphertext).toBeTruthy();
    clearOauthEnv();
  });

  // T07 — disconnect during refresh: no resurrection
  it("T07: disconnect during refresh prevents resurrection", async () => {
    armOauthEnv();
    const { pilotId, authId, row } = await seedExpiredAuth("r1-t07");
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:REFRESH_GITHUB");

    const pA = loadOrRefreshUserAccessToken(row, (async () => {
      await OAuthConcurrencyBarrier.before("before:REFRESH_GITHUB");
      return new Response(
        JSON.stringify({
          access_token: "access-zombie",
          refresh_token: "refresh-zombie",
          expires_in: 3600,
          scope: "",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 40));
    await disconnectIntegration(pilotId);
    OAuthConcurrencyBarrier.release("before:REFRESH_GITHUB");
    const err = await pA;
    OAuthConcurrencyBarrier.clear();
    expect(err).toBeInstanceOf(StudioError);
    expect((err as StudioError).code).toBe("CONFLICT");

    const rows = await db
      .select()
      .from(integrationAuthorizations)
      .where(eq(integrationAuthorizations.id, authId));
    expect(rows[0]!.status).toBe("REVOKED");
    expect(rows[0]!.tokenCiphertext).toBeNull();
    const connected = await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    expect(connected).toHaveLength(0);
    clearOauthEnv();
  });

  // T08 — expired lease without certain network result: fail-closed, no second remote
  it("T08: expired lease reclaim is fail-closed without second GitHub refresh", async () => {
    armOauthEnv();
    const { authId, row } = await seedExpiredAuth("r1-t08");
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseToken: "rfl_expired_prior",
        refreshLeaseExpiresAt: new Date(Date.now() - 5_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    let githubCalls = 0;
    const err = await loadOrRefreshUserAccessToken(row, (async () => {
      githubCalls += 1;
      return new Response(
        JSON.stringify({ access_token: "should-not", refresh_token: "x", expires_in: 3600 }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    expect(githubCalls).toBe(0);
    expect(err).toBeInstanceOf(StudioError);
    expect((err as StudioError).code).toBe("ACCESS_DENIED");
    const after = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(after.status).toBe("REQUIRES_REAUTH");
    expect(after.tokenCiphertext).toBeNull();
    expect(after.refreshLeaseToken).toBeNull();
    clearOauthEnv();
  });

  // T09–T11 — concurrent independent callbacks
  it("T09-T11: concurrent callbacks — one CONNECTED, loser CONFLICT, winner exact", async () => {
    const { pilotId, sessionId } = await seedProject("r2-t09");
    const s1 = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    const s2 = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:AUTH_INSERT");

    const p1 = completeGitHubAuthorization({
      pilotId,
      state: s1.state,
      studioSessionId: sessionId,
    }).catch((e: unknown) => e);
    const p2 = completeGitHubAuthorization({
      pilotId,
      state: s2.state,
      studioSessionId: sessionId,
    }).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 30));
    OAuthConcurrencyBarrier.release("before:AUTH_INSERT");
    const [a, b] = await Promise.all([p1, p2]);
    OAuthConcurrencyBarrier.clear();

    const connectedOutcomes = [a, b].filter(
      (o): o is Awaited<ReturnType<typeof getIntegrationStatus>> =>
        !!o && typeof o === "object" && "status" in o && (o as { status: string }).status === "CONNECTED",
    );
    const conflicts = [a, b].filter((o) => o instanceof StudioError && o.code === "CONFLICT");
    expect(connectedOutcomes).toHaveLength(1);
    expect(conflicts).toHaveLength(1);

    const dbConnected = await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    expect(dbConnected).toHaveLength(1);
    expect(connectedOutcomes[0]!.authorizationId).toBe(dbConnected[0]!.id);
    expect(connectedOutcomes[0]!.status).toBe("CONNECTED");

    // Loser must not look like CONNECTED success.
    const loser = conflicts[0] as StudioError;
    expect(loser.message).toMatch(/Collision CONNECTED/);
  });

  // T12 — same state replay: no second authorization
  it("T12: replaying same OAuth state does not create second authorization", async () => {
    const { pilotId, sessionId } = await seedProject("r2-t12");
    const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    const first = await completeGitHubAuthorization({
      pilotId,
      state,
      studioSessionId: sessionId,
    });
    expect(first.status).toBe("CONNECTED");
    const authId = first.authorizationId;

    await expect(
      completeGitHubAuthorization({
        pilotId,
        state,
        studioSessionId: sessionId,
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });

    const connected = await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    expect(connected).toHaveLength(1);
    expect(connected[0]!.id).toBe(authId);
  });

  // T13 — different pilots: isolation
  it("T13: different pilots remain isolated under concurrent callbacks", async () => {
    const a = await seedProject("r2-t13-a");
    const b = await seedProject("r2-t13-b");
    const sa = await startGitHubAuthorization(a.pilotId, "/settings/integrations", a.sessionId);
    const sb = await startGitHubAuthorization(b.pilotId, "/settings/integrations", b.sessionId);
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:AUTH_INSERT");

    const p1 = completeGitHubAuthorization({
      pilotId: a.pilotId,
      state: sa.state,
      studioSessionId: a.sessionId,
    });
    const p2 = completeGitHubAuthorization({
      pilotId: b.pilotId,
      state: sb.state,
      studioSessionId: b.sessionId,
    });
    await new Promise((r) => setTimeout(r, 30));
    OAuthConcurrencyBarrier.release("before:AUTH_INSERT");
    const [ra, rb] = await Promise.all([p1, p2]);
    OAuthConcurrencyBarrier.clear();

    expect(ra.status).toBe("CONNECTED");
    expect(rb.status).toBe("CONNECTED");
    expect(ra.authorizationId).not.toBe(rb.authorizationId);

    const aRows = await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, a.pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    const bRows = await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, b.pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    expect(aRows).toHaveLength(1);
    expect(bRows).toHaveLength(1);
  });

  // T14 — UNIQUE constraint still effective
  it("T14: PostgreSQL UNIQUE CONNECTED constraint remains effective", async () => {
    const { pilotId, sessionId } = await seedProject("r2-t14");
    const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    await completeGitHubAuthorization({ pilotId, state, studioSessionId: sessionId });
    await expect(
      db.insert(integrationAuthorizations).values({
        id: newId("iauth"),
        pilotId,
        provider: "github",
        status: "CONNECTED",
        metadataJson: "{}",
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ).rejects.toThrow();
  });
});

describe("ML4 refresh lifecycle R1-A/R1-B (SCRIPTED/DET)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
  });

  function armOauthEnv() {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 11).toString("base64");
    process.env.GITHUB_APP_CLIENT_ID = "Iv1.test-client";
    process.env.GITHUB_APP_CLIENT_SECRET = "test-secret";
    process.env.GITHUB_APP_CALLBACK_URL = "http://127.0.0.1:3100/api/integrations/github/callback";
  }
  function clearOauthEnv() {
    delete process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY;
    delete process.env.GITHUB_APP_CLIENT_ID;
    delete process.env.GITHUB_APP_CLIENT_SECRET;
    delete process.env.GITHUB_APP_CALLBACK_URL;
  }

  async function seedExpiredAuth(label: string) {
    const { pilotId } = await seedProject(label);
    const refresh = sealSecret("refresh-gen-1");
    const access = sealSecret("access-gen-1");
    const authId = newId("iauth");
    await db.insert(integrationAuthorizations).values({
      id: authId,
      pilotId,
      provider: "github",
      status: "CONNECTED",
      installationId: "scripted-install-1",
      accountLogin: "scripted-user",
      githubUserId: `gh-${pilotId}`,
      tokenCiphertext: access.ciphertext,
      tokenNonce: access.nonce,
      tokenKeyVersion: access.keyVersion,
      refreshCiphertext: refresh.ciphertext,
      refreshNonce: refresh.nonce,
      tokenExpiresAt: new Date(Date.now() - 60_000),
      metadataJson: JSON.stringify({ mode: "REAL_USER_OAUTH", flow: "github_app_user_oauth" }),
      connectedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const row = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    return { pilotId, authId, row, refresh, access };
  }

  // TA — ambiguous timeout: lease retained; no second GitHub refresh on G1
  it("TA: ambiguous DEPENDENCY_UNAVAILABLE retains lease; no second remote on G1", async () => {
    armOauthEnv();
    const { authId, row, refresh } = await seedExpiredAuth("r1-ta");
    let githubCalls = 0;
    const errA = await loadOrRefreshUserAccessToken(row, (async () => {
      githubCalls += 1;
      throw new StudioError("DEPENDENCY_UNAVAILABLE", "GitHub user OAuth TIMEOUT/échec", {
        httpStatus: 503,
      });
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    expect((errA as StudioError).code).toBe("DEPENDENCY_UNAVAILABLE");
    expect(githubCalls).toBe(1);
    const afterA = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(afterA.status).toBe("CONNECTED");
    expect(afterA.refreshCiphertext).toBe(refresh.ciphertext);
    expect(afterA.refreshLeaseToken).toBeTruthy();
    const leaseL1 = afterA.refreshLeaseToken!;
    expect(afterA.refreshLeaseExpiresAt!.getTime()).toBeGreaterThan(Date.now());

    // B tries immediately — active lease → CONFLICT, 0 extra GitHub.
    const errB = await loadOrRefreshUserAccessToken(afterA, (async () => {
      githubCalls += 1;
      return new Response("{}", { status: 500 });
    }) as unknown as typeof fetch).catch((e: unknown) => e);
    expect((errB as StudioError).code).toBe("CONFLICT");
    expect(githubCalls).toBe(1);

    // Expire L1 controlled; C reclaim → fail-closed REQUIRES_REAUTH, still 0 second remote.
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseExpiresAt: new Date(Date.now() - 1_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    const afterExpire = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(afterExpire.refreshLeaseToken).toBe(leaseL1);

    const errC = await loadOrRefreshUserAccessToken(afterExpire, (async () => {
      githubCalls += 1;
      return new Response(
        JSON.stringify({ access_token: "x", refresh_token: "y", expires_in: 3600 }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }) as unknown as typeof fetch).catch((e: unknown) => e);
    expect((errC as StudioError).code).toBe("ACCESS_DENIED");
    expect(githubCalls).toBe(1);
    const final = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(final.status).toBe("REQUIRES_REAUTH");
    expect(final.tokenCiphertext).toBeNull();
    expect(final.refreshLeaseToken).toBeNull();
    clearOauthEnv();
  });

  // TB — late positive after lease expiry: CAS 0 rows; G1 not overwritten
  it("TB: late positive response after lease expiry cannot CAS", async () => {
    armOauthEnv();
    const { pilotId, authId, row, refresh } = await seedExpiredAuth("r1-tb");
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:REFRESH_GITHUB");

    const pA = loadOrRefreshUserAccessToken(row, (async () => {
      await OAuthConcurrencyBarrier.before("before:REFRESH_GITHUB");
      return new Response(
        JSON.stringify({
          access_token: "access-late",
          refresh_token: "refresh-late",
          expires_in: 3600,
          scope: "",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 40));
    const mid = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(mid.refreshLeaseToken).toBeTruthy();
    // Expire L1; no other worker reclaim.
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseExpiresAt: new Date(Date.now() - 1_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    OAuthConcurrencyBarrier.release("before:REFRESH_GITHUB");
    const result = await pA;
    OAuthConcurrencyBarrier.clear();
    expect(result).toBeInstanceOf(StudioError);
    expect((result as StudioError).code).toBe("CONFLICT");

    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshCiphertext).toBe(refresh.ciphertext);
    // Lease not cleared to virgin (expired ownership cannot clear).
    expect(still.refreshLeaseToken).toBeTruthy();
    expect(still.refreshLeaseExpiresAt!.getTime()).toBeLessThanOrEqual(Date.now());

    // Expired owner cannot mark REQUIRES_REAUTH as if active.
    expect(await markRequiresReauth(pilotId, authId, refresh.ciphertext, still.refreshLeaseToken)).toBe(false);
    expect(
      (
        await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
      )[0]!.status,
    ).toBe("CONNECTED");
    clearOauthEnv();
  });

  // TC — late ACCESS_DENIED after expiry: cannot mark REQUIRES_REAUTH as active owner
  it("TC: late ACCESS_DENIED after lease expiry cannot mark REQUIRES_REAUTH", async () => {
    armOauthEnv();
    const { pilotId, authId, row, refresh } = await seedExpiredAuth("r1-tc");
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:REFRESH_GITHUB");

    const pA = loadOrRefreshUserAccessToken(row, (async () => {
      await OAuthConcurrencyBarrier.before("before:REFRESH_GITHUB");
      return new Response(JSON.stringify({ error: "bad_refresh_token" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 40));
    const mid = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    const leaseL1 = mid.refreshLeaseToken!;
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseExpiresAt: new Date(Date.now() - 1_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    OAuthConcurrencyBarrier.release("before:REFRESH_GITHUB");
    const err = await pA;
    OAuthConcurrencyBarrier.clear();
    expect((err as StudioError).code).toBe("ACCESS_DENIED");

    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshCiphertext).toBe(refresh.ciphertext);
    expect(still.tokenCiphertext).toBeTruthy();
    expect(still.refreshLeaseToken).toBe(leaseL1);
    expect(await markRequiresReauth(pilotId, authId, refresh.ciphertext, leaseL1)).toBe(false);
    clearOauthEnv();
  });

  // TD — concurrent reclaim: late A cannot affect B
  it("TD: late responses from A cannot mutate B owner after reclaim", async () => {
    armOauthEnv();
    const { pilotId, authId, row, refresh } = await seedExpiredAuth("r1-td");
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:REFRESH_GITHUB");

    const pA = loadOrRefreshUserAccessToken(row, (async () => {
      await OAuthConcurrencyBarrier.before("before:REFRESH_GITHUB");
      return new Response(
        JSON.stringify({
          access_token: "access-stale-A",
          refresh_token: "refresh-stale-A",
          expires_in: 3600,
          scope: "",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 40));
    const ownerBAccess = sealSecret("access-owner-B");
    const ownerBRefresh = sealSecret("refresh-owner-B");
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseToken: "rfl_owner_B",
        refreshLeaseExpiresAt: new Date(Date.now() + 60_000),
        tokenCiphertext: ownerBAccess.ciphertext,
        tokenNonce: ownerBAccess.nonce,
        tokenKeyVersion: ownerBAccess.keyVersion,
        refreshCiphertext: ownerBRefresh.ciphertext,
        refreshNonce: ownerBRefresh.nonce,
        tokenExpiresAt: new Date(Date.now() + 3600_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    OAuthConcurrencyBarrier.release("before:REFRESH_GITHUB");
    await pA;
    OAuthConcurrencyBarrier.clear();

    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshLeaseToken).toBe("rfl_owner_B");
    expect(still.refreshCiphertext).toBe(ownerBRefresh.ciphertext);
    expect(still.refreshCiphertext).not.toBe(refresh.ciphertext);
    expect(await markRequiresReauth(pilotId, authId, refresh.ciphertext, "rfl_stale_A")).toBe(false);
    clearOauthEnv();
  });

  // TE — ambiguous timeout must not virginize lease slot
  it("TE: ambiguous timeout never returns lease slot to virgin", async () => {
    armOauthEnv();
    const { authId, row } = await seedExpiredAuth("r1-te");
    await loadOrRefreshUserAccessToken(row, (async () => {
      throw new StudioError("DEPENDENCY_UNAVAILABLE", "timeout", { httpStatus: 503 });
    }) as unknown as typeof fetch).catch(() => undefined);

    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.refreshLeaseToken).not.toBeNull();
    expect(still.refreshLeaseExpiresAt).not.toBeNull();
    // Virgin claim predicate requires both NULL — prove not reclaimable as clean.
    expect(still.refreshLeaseToken).toBeTruthy();
    expect(still.refreshLeaseExpiresAt).toBeTruthy();
    clearOauthEnv();
  });

  // TF — R2 callback CONFLICT regression (non-régression)
  it("TF: R2 losing callback still returns CONFLICT not CONNECTED", async () => {
    const { pilotId, sessionId } = await seedProject("r1-tf-r2");
    const s1 = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    const s2 = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:AUTH_INSERT");
    const p1 = completeGitHubAuthorization({
      pilotId,
      state: s1.state,
      studioSessionId: sessionId,
    }).catch((e: unknown) => e);
    const p2 = completeGitHubAuthorization({
      pilotId,
      state: s2.state,
      studioSessionId: sessionId,
    }).catch((e: unknown) => e);
    await new Promise((r) => setTimeout(r, 30));
    OAuthConcurrencyBarrier.release("before:AUTH_INSERT");
    const [a, b] = await Promise.all([p1, p2]);
    OAuthConcurrencyBarrier.clear();
    const ok = [a, b].filter(
      (o) => o && typeof o === "object" && "status" in o && (o as { status: string }).status === "CONNECTED",
    );
    const conflicts = [a, b].filter((o) => o instanceof StudioError && o.code === "CONFLICT");
    expect(ok).toHaveLength(1);
    expect(conflicts).toHaveLength(1);
  });
});
