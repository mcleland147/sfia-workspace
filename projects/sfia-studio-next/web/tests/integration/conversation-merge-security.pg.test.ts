/**
 * P0-M01/M02/M03 — conversational merge security (PG / SCRIPTED).
 * No GitHub REAL mutations.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  conversations,
  documentRevisions,
  effectAttempts,
  humanDecisions,
  messages,
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
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";
import {
  authorizeMerge,
  authorizePublication,
  dispatchPublication,
  prepareMerge,
  preparePublication,
} from "@/domains/execution/effect-service";
import type { PublicationPlan } from "@/domains/execution/types";
import { savePreparationDocument } from "@/domains/document/service";
import {
  admitConversationalMergeMandate,
  resolveDocumentaryMergeTarget,
  userStatementHasOpenMergeCondition,
  userStatementRefusesMerge,
  userStatementRequestsPositiveMerge,
} from "@/domains/conversation/conversation-merge-authority";

async function seedProjectWithGit(label: string) {
  resetScriptedStore();
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

async function publishDoc(input: {
  pilotId: string;
  projectId: string;
  preparationId: string;
  repositoryId: string;
  title: string;
  path: string;
}) {
  const { documentId, revisionId } = await availableDoc(
    input.pilotId,
    input.preparationId,
    input.title,
  );
  const prepared = await preparePublication({
    pilotId: input.pilotId,
    projectId: input.projectId,
    documentId,
    revisionId,
    repositoryId: input.repositoryId,
    targetPath: input.path,
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
    pilotId: input.pilotId,
    projectId: input.projectId,
    attemptId: prepared.attemptId,
    statement: "GO pub",
    inspectedFingerprint: plan.inspection.inspectionFingerprint,
  });
  const dispatched = await dispatchPublication({
    pilotId: input.pilotId,
    projectId: input.projectId,
    attemptId: prepared.attemptId,
  });
  expect(dispatched.status).toBe("COMPLETED");
  expect(dispatched.prNumber).toBeGreaterThan(0);
  return { attemptId: prepared.attemptId, prNumber: dispatched.prNumber! };
}

async function insertUserAct(input: {
  pilotId: string;
  projectId: string;
  preparationId: string;
  content: string;
  clientTurnKey: string;
}) {
  const convId = newId("conv");
  await db.insert(conversations).values({
    id: convId,
    preparationId: input.preparationId,
    projectId: input.projectId,
    ownerPilotId: input.pilotId,
  });
  const msgId = newId("msg");
  await db.insert(messages).values({
    id: msgId,
    conversationId: convId,
    role: "user",
    content: input.content,
    status: "COMPLETE",
    ordinal: 1,
  });
  await db.insert(conversationTurnCommands).values({
    id: newId("ctc"),
    conversationId: convId,
    ownerPilotId: input.pilotId,
    clientTurnKey: input.clientTurnKey,
    requestFingerprint: "fp",
    operationId: newId("op"),
    status: "COMPLETE",
    userMessageId: msgId,
    ownerToken: newId("otk"),
  });
  return { msgId, convId };
}

describe("conversational merge security (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
  });

  it("P0-M01: refuse statement never prepares/authorizes/dispatches merge", async () => {
    const ctx = await seedProjectWithGit("merge-sec-refuse");
    await publishDoc({
      ...ctx,
      title: "Doc Refuse",
      path: "docs/merge-refuse.md",
    });
    const statement = "Ne merge pas la PR #1.";
    expect(userStatementRefusesMerge(statement)).toBe(true);
    const turnKey = newId("ctk");
    const { msgId } = await insertUserAct({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      preparationId: ctx.preparationId,
      content: statement,
      clientTurnKey: turnKey,
    });
    const before = await db
      .select()
      .from(effectAttempts)
      .where(and(eq(effectAttempts.projectId, ctx.projectId), eq(effectAttempts.kind, "GIT_MERGE")));
    const out = await admitConversationalMergeMandate({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      userMessageId: msgId,
      userStatement: statement,
      clientTurnKey: turnKey,
      requestedPrNumber: 1,
      wantsMergeFromQual: true,
      autoDispatch: true,
    });
    expect(out.reasonCode).toBe("REFUSED");
    expect(out.authorized).toBe(false);
    const after = await db
      .select()
      .from(effectAttempts)
      .where(and(eq(effectAttempts.projectId, ctx.projectId), eq(effectAttempts.kind, "GIT_MERGE")));
    expect(after.length).toBe(before.length);
    const hd = await db
      .select()
      .from(humanDecisions)
      .where(
        and(
          eq(humanDecisions.projectId, ctx.projectId),
          eq(humanDecisions.kind, "GIT_MERGE_MANDATE"),
        ),
      );
    expect(hd).toHaveLength(0);
  });

  it("P0-M02: explicit PR #A never resolves to a different newer PR #B", async () => {
    const ctx = await seedProjectWithGit("merge-sec-pr");
    const a = await publishDoc({
      ...ctx,
      title: "Doc A",
      path: "docs/merge-a.md",
    });
    const b = await publishDoc({
      ...ctx,
      title: "Doc B",
      path: "docs/merge-b.md",
    });
    expect(b.prNumber).not.toBe(a.prNumber);

    const resolved = await resolveDocumentaryMergeTarget({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      userStatement: `Merge la PR #${a.prNumber}.`,
      requestedPrNumber: a.prNumber,
    });
    expect(resolved.ok).toBe(true);
    if (resolved.ok) {
      expect(resolved.prNumber).toBe(a.prNumber);
      expect(resolved.publicationAttemptId).toBe(a.attemptId);
      expect(resolved.publicationAttemptId).not.toBe(b.attemptId);
    }

    const missing = await resolveDocumentaryMergeTarget({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      userStatement: "Merge la PR #99999.",
      requestedPrNumber: 99999,
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) expect(missing.reasonCode).toBe("PR_NOT_FOUND");
  });

  it("E08-S01: open condition blocks prepare/authorize/dispatch", async () => {
    const ctx = await seedProjectWithGit("merge-sec-cond");
    await publishDoc({
      ...ctx,
      title: "Doc Cond",
      path: "docs/merge-cond.md",
    });
    const statement = "Merge la PR #1 uniquement après validation.";
    expect(userStatementHasOpenMergeCondition(statement)).toBe(true);
    const turnKey = newId("ctk");
    const { msgId } = await insertUserAct({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      preparationId: ctx.preparationId,
      content: statement,
      clientTurnKey: turnKey,
    });
    const before = await db
      .select()
      .from(effectAttempts)
      .where(and(eq(effectAttempts.projectId, ctx.projectId), eq(effectAttempts.kind, "GIT_MERGE")));
    const out = await admitConversationalMergeMandate({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      userMessageId: msgId,
      userStatement: statement,
      clientTurnKey: turnKey,
      requestedPrNumber: 1,
      wantsMergeFromQual: true,
      conditionStatus: "OPEN",
      conditionText: "après validation",
      autoDispatch: true,
    });
    expect(out.reasonCode).toBe("CONDITION_OPEN");
    expect(out.authorized).toBe(false);
    const after = await db
      .select()
      .from(effectAttempts)
      .where(and(eq(effectAttempts.projectId, ctx.projectId), eq(effectAttempts.kind, "GIT_MERGE")));
    expect(after.length).toBe(before.length);
  });

  it("E08-S02: paraphrase merge admitted via qual without lexical verb gate", async () => {
    const ctx = await seedProjectWithGit("merge-sec-para");
    const pub = await publishDoc({
      ...ctx,
      title: "Doc Para",
      path: "docs/merge-para.md",
    });
    const statement = `Intègre la PR documentaire #${pub.prNumber}.`;
    // Lexical positive-merge verb list may not match — qual owns routing.
    expect(userStatementRequestsPositiveMerge(statement)).toBe(false);
    const turnKey = newId("ctk");
    const { msgId } = await insertUserAct({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      preparationId: ctx.preparationId,
      content: statement,
      clientTurnKey: turnKey,
    });
    const out = await admitConversationalMergeMandate({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      userMessageId: msgId,
      userStatement: statement,
      clientTurnKey: turnKey,
      requestedPrNumber: pub.prNumber,
      publicationAttemptId: pub.attemptId,
      wantsMergeFromQual: true,
      conditionStatus: "NONE",
      autoDispatch: false,
    });
    expect(out.authorized).toBe(true);
    expect(out.decisionId).toBeTruthy();
  });

  it("P0-M03: authorizeMerge stores conversational provenance; wrong PR refused", async () => {
    const ctx = await seedProjectWithGit("merge-sec-prov");
    const pub = await publishDoc({
      ...ctx,
      title: "Doc Prov",
      path: "docs/merge-prov.md",
    });
    const statement = `Merge la PR #${pub.prNumber}.`;
    const turnKey = newId("ctk");
    const { msgId, convId } = await insertUserAct({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      preparationId: ctx.preparationId,
      content: statement,
      clientTurnKey: turnKey,
    });

    const out = await admitConversationalMergeMandate({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      userMessageId: msgId,
      userStatement: statement,
      clientTurnKey: turnKey,
      requestedPrNumber: pub.prNumber,
      publicationAttemptId: pub.attemptId,
      wantsMergeFromQual: true,
      autoDispatch: false,
    });
    expect(out.authorized).toBe(true);
    expect(out.decisionId).toBeTruthy();
    expect(out.resolvedPrNumber).toBe(pub.prNumber);

    const hd = (
      await db.select().from(humanDecisions).where(eq(humanDecisions.id, out.decisionId!))
    )[0]!;
    const conditions = JSON.parse(hd.effectConditions ?? "{}") as {
      prNumber?: number;
      conversationalProvenance?: {
        userMessageId?: string;
        conversationId?: string;
        requestedPrNumber?: number;
        publicationAttemptId?: string;
        planFingerprint?: string;
      };
    };
    expect(conditions.prNumber).toBe(pub.prNumber);
    expect(conditions.conversationalProvenance?.userMessageId).toBe(msgId);
    expect(conditions.conversationalProvenance?.conversationId).toBe(convId);
    expect(conditions.conversationalProvenance?.requestedPrNumber).toBe(pub.prNumber);
    expect(conditions.conversationalProvenance?.publicationAttemptId).toBe(pub.attemptId);
    expect(conditions.conversationalProvenance?.planFingerprint).toBeTruthy();

    const mergePrep = await prepareMerge({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      publicationAttemptId: pub.attemptId,
      correlationKey: newId("merge-mismatch"),
    });
    await expect(
      authorizeMerge({
        pilotId: ctx.pilotId,
        projectId: ctx.projectId,
        attemptId: mergePrep.attemptId,
        statement,
        conversationalProvenance: {
          userMessageId: msgId,
          conversationId: convId,
          contentFingerprint: "y".repeat(64),
          requestedPrNumber: pub.prNumber + 99,
          publicationAttemptId: pub.attemptId,
          repositoryId: mergePrep.plan.repositoryId,
          expectedHeadSha: mergePrep.plan.expectedHeadSha,
          expectedBaseSha: mergePrep.plan.expectedBaseSha,
          planFingerprint: mergePrep.fingerprint,
          resolutionSource: "explicit_pr",
        },
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });
  });
});
