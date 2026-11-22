/**
 * E08 POST-UAT clôture — PG service chains (sfia_next_e2e only).
 * C5: WRITE OFF full chain, zero mutation.
 * C6: SCRIPTED publish end-to-end D3→D9 + Nora restitution.
 * DETERMINISTIC PROVEN ≠ REAL WRITE PROVEN.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  documentRevisions,
  effectAttempts,
  humanDecisions,
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
import { listProjectPublications } from "@/domains/integrations/publication-projection-service";
import { reconcileAttempt } from "@/domains/execution/effect-service";
import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";
import { getDocumentRevision, listDocuments } from "@/domains/document/service";
import {
  resolvePublicationDocumentTarget,
} from "@/domains/conversation/publication-document-target";
import {
  effectEnvelope,
  registerCreateDocumentTitled,
  registerTypedScenario,
} from "../helpers/semantic-fixture-envelopes";

/** Publish-existing only (no same-turn D4 CREATE) — preserves explicit revision targeting. */
function publishExistingEnvelope(opts: {
  title: string;
  publicationPath: string;
  revisionHint?: string;
}) {
  const documentHint = opts.revisionHint
    ? `${opts.title} ${opts.revisionHint}`
    : opts.title;
  return effectEnvelope(
    `Publication existante ${opts.title}`,
    `Je prépare la publication de « ${opts.title} ».`,
    [
      {
        capabilityId: "d7.prepare_publication",
        mode: "REQUEST_EFFECT",
        summary: "Préparer publication",
        parameters: {
          documentHint,
          publicationPath: opts.publicationPath,
        },
      },
    ],
  );
}

async function noraTurn(
  pilotId: string,
  preparationId: string,
  text: string,
  opts?: Parameters<typeof postUserMessageAndNora>[3],
) {
  return postUserMessageAndNora(pilotId, preparationId, text, opts);
}

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedProjectWithGit(label: string) {
  resetScriptedStore();
  const pilotId = await seedPilot(label);
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
  const repoId = status.repositories[0]!.id;
  await attachRepositoryToProject(pilotId, created.projectId, repoId);
  getScriptedGitHubProvider();
  return { pilotId, projectId: created.projectId, preparationId: prep.id, repositoryId: repoId };
}

async function countGitPublicationAttempts(projectId: string) {
  return db
    .select()
    .from(effectAttempts)
    .where(
      and(
        eq(effectAttempts.projectId, projectId),
        eq(effectAttempts.kind, "GIT_PUBLICATION"),
      ),
    );
}

describe("E08 clôture — WRITE OFF + SCRIPTED PG chains", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
  });

  it("C5 WRITE OFF: full service chain — zero D7 prepare, zero Git mutation, Nora refuses", async () => {
    const prevProvider = process.env.STUDIO_GITHUB_PROVIDER;
    const prevMut = process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;

    const { pilotId, projectId, preparationId } = await seedProjectWithGit("cloture-writeoff");

    const askA = "Crée un document intitulé Clôture Alpha WriteOff.";
    registerCreateDocumentTitled(askA, { title: "Clôture Alpha WriteOff" });
    const createA = await noraTurn(pilotId, preparationId, askA, {
      clientTurnKey: newId("ctk"),
    });
    expect(createA.documentSave?.status).toBe("AVAILABLE");

    const askB = "Crée un document intitulé Clôture Bravo WriteOff.";
    registerCreateDocumentTitled(askB, { title: "Clôture Bravo WriteOff" });
    const createB = await noraTurn(pilotId, preparationId, askB, {
      clientTurnKey: newId("ctk"),
    });
    expect(createB.documentSave?.status).toBe("AVAILABLE");
    expect(createB.documentSave!.documentId).not.toBe(createA.documentSave!.documentId);

    const beforeAttempts = await countGitPublicationAttempts(projectId);
    const beforeMut = getScriptedMutationCounts(pilotId);
    resetScriptedMutationCounts(pilotId);

    // Simulate REAL WRITE OFF (gate refuses before D7).
    process.env.STUDIO_GITHUB_PROVIDER = "real";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;

    const publishAsk =
      "Publie le document Clôture Bravo WriteOff dans mon dépôt GitHub chemin docs/studio-next/cloture-bravo.md";
    registerTypedScenario(
      publishAsk,
      publishExistingEnvelope({
        title: "Clôture Bravo WriteOff",
        publicationPath: "docs/studio-next/cloture-bravo.md",
      }),
    );
    const chat = await noraTurn(pilotId, preparationId, publishAsk, {
      clientTurnKey: newId("ctk"),
      documentFocus: {
        documentId: createA.documentSave!.documentId!,
        sourceRevisionId: createA.documentSave!.revisionId!,
        sourceRevisionNumber: createA.documentSave!.revisionNumber ?? 1,
        observedHeadRevisionId: createA.documentSave!.revisionId!,
      },
    });

    process.env.STUDIO_GITHUB_PROVIDER = prevProvider ?? "scripted";
    if (prevMut === undefined) delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    else process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = prevMut;

    const afterAttempts = await countGitPublicationAttempts(projectId);
    expect(afterAttempts.length).toBe(beforeAttempts.length);

    const d7 = chat.missionProjection?.steps.find((s) => s.id === "d7_prepare");
    expect(d7?.status).toBe("FAILED");
    expect(d7?.reason).toMatch(/WRITE_DISABLED/);
    expect(d7?.attemptId).toBeFalsy();
    expect(chat.missionProjection?.status).toBe("PARTIAL_FAILED_STEP");
    expect(chat.humanDecisionCreated).toBe(false);

    const mut = getScriptedMutationCounts(pilotId);
    expect(mut.createBranch).toBe(0);
    expect(mut.putFileContents).toBe(0);
    expect(mut.createPR).toBe(0);
    expect(mut.mergePR).toBe(0);
    // beforeMut captured only for diagnostics — store was reset
    void beforeMut;

    const thread = await listMessages(pilotId, preparationId);
    const lastAssistant = [...thread].reverse().find((m) => m.role === "assistant");
    expect(lastAssistant?.content ?? "").toMatch(/n'a pas été effectuée/i);
    expect(lastAssistant?.content ?? "").toMatch(/ne sont pas disponibles|écritures GitHub/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/a été publié/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/Je publie/i);

    // Re-read: no additional attempt
    const reread = await countGitPublicationAttempts(projectId);
    expect(reread.length).toBe(beforeAttempts.length);
  });

  it("C5b objectRef/documentHint conflict — no prepare, no mutation", async () => {
    const { pilotId, projectId, preparationId } = await seedProjectWithGit("cloture-conflict");
    const askA = "Crée un document intitulé Conflit Doc Alpha.";
    registerCreateDocumentTitled(askA, { title: "Conflit Doc Alpha" });
    const createA = await noraTurn(pilotId, preparationId, askA, {
      clientTurnKey: newId("ctk"),
    });
    const askB = "Crée un document intitulé Conflit Doc Bravo.";
    registerCreateDocumentTitled(askB, { title: "Conflit Doc Bravo" });
    const createB = await noraTurn(pilotId, preparationId, askB, {
      clientTurnKey: newId("ctk"),
    });
    expect(createA.documentSave?.status).toBe("AVAILABLE");
    expect(createB.documentSave?.status).toBe("AVAILABLE");

    const docs = await listDocuments(pilotId, preparationId);
    const resolved = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Conflit Doc Bravo",
      objectRef: createA.documentSave!.documentId!,
      focus: null,
    });
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) expect(resolved.reason).toBe("AMBIGUOUS");

    const before = await countGitPublicationAttempts(projectId);
    const publishAsk =
      "Publie Conflit Doc Bravo dans mon dépôt GitHub chemin docs/studio-next/conflit.md";
    registerTypedScenario(
      publishAsk,
      effectEnvelope("Publication conflit refs", "Précision nécessaire.", [
        {
          capabilityId: "d7.prepare_publication",
          mode: "REQUEST_EFFECT",
          summary: "Préparer publication",
          parameters: {
            documentHint: "Conflit Doc Bravo",
            objectRef: createA.documentSave!.documentId!,
            publicationPath: "docs/studio-next/conflit.md",
          },
        },
      ]),
    );
    const chat = await noraTurn(pilotId, preparationId, publishAsk, {
      clientTurnKey: newId("ctk"),
    });
    const after = await countGitPublicationAttempts(projectId);
    expect(after.length).toBe(before.length);
    expect(chat.missionProjection?.status).toBe("AWAITING_CLARIFICATION");
    expect(chat.missionProjection?.steps.find((s) => s.id === "d7_prepare")?.attemptId).toBeFalsy();
    expect(chat.humanDecisionCreated).toBe(false);
    const lastAssistant = [...(await listMessages(pilotId, preparationId))]
      .reverse()
      .find((m) => m.role === "assistant");
    expect(lastAssistant?.content ?? "").toMatch(/précision|plusieurs documents|Aucune publication/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/a été publié/i);
    void createB;
  });

  it("C6 SCRIPTED: explicit revision over focus — D6/D7/D8 + Nora COMPLETED", async () => {
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;

    const { pilotId, projectId, preparationId } = await seedProjectWithGit("cloture-scripted");
    const title = "Clôture Scripted MultiRev";
    const createAsk = `Crée un document intitulé ${title}.`;
    registerCreateDocumentTitled(createAsk, { title });
    const create = await noraTurn(pilotId, preparationId, createAsk, {
      clientTurnKey: newId("ctk"),
    });
    expect(create.documentSave?.status).toBe("AVAILABLE");
    const docId = create.documentSave!.documentId!;
    const rev1 = create.documentSave!.revisionId!;

    const rev2 = newId("drev");
    const rev3 = newId("drev");
    await db.insert(documentRevisions).values([
      {
        id: rev2,
        documentId: docId,
        revisionNumber: 2,
        contentMarkdown: "# clôture v2 exact content",
        status: "AVAILABLE",
        baseRevisionId: rev1,
        provenanceJson: "{}",
        scope: "document",
      },
      {
        id: rev3,
        documentId: docId,
        revisionNumber: 3,
        contentMarkdown: "# clôture v3 head — must not publish",
        status: "AVAILABLE",
        baseRevisionId: rev2,
        provenanceJson: "{}",
        scope: "document",
      },
    ]);

    resetScriptedMutationCounts(pilotId);
    const beforeAttempts = await countGitPublicationAttempts(projectId);

    const publishAsk = `Publie le document ${title} révision 2 dans mon dépôt GitHub chemin docs/studio-next/cloture-v2.md`;
    registerTypedScenario(
      publishAsk,
      publishExistingEnvelope({
        title,
        publicationPath: "docs/studio-next/cloture-v2.md",
        revisionHint: "v2",
      }),
    );

    const chat = await noraTurn(pilotId, preparationId, publishAsk, {
      clientTurnKey: newId("ctk"),
      documentFocus: {
        documentId: docId,
        sourceRevisionId: rev3,
        sourceRevisionNumber: 3,
        observedHeadRevisionId: rev3,
      },
    });

    expect(chat.missionProjection?.status).toBe("COMPLETED");
    expect(chat.humanDecisionCreated).toBe(true);
    const prepStep = chat.missionProjection?.steps.find((s) => s.id === "d7_prepare");
    expect(prepStep?.decisionId).toBeTruthy();
    expect(prepStep?.attemptId).toBeTruthy();
    expect(prepStep?.revisionId).toBe(rev2);

    let attempt = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepStep!.attemptId!))
    )[0];
    expect(attempt?.kind).toBe("GIT_PUBLICATION");
    expect(attempt?.decisionId).toBe(prepStep?.decisionId);

    // Reserve B — DISPATCHED alone is not success; reconcile to terminal COMPLETED.
    if (attempt?.status === "DISPATCHED" || attempt?.status === "AMBIGUOUS") {
      const rec = await reconcileAttempt(pilotId, projectId, attempt.id);
      expect(rec.status).toBe("COMPLETED");
      attempt = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, attempt.id))
      )[0];
    }
    expect(attempt?.status).toBe("COMPLETED");

    const plan = JSON.parse(attempt!.planJson || "{}") as {
      repositoryFullName?: string;
      publicationBranch?: string;
      targetPath?: string;
      documentId?: string;
      revisionId?: string;
      proposedContent?: string;
    };
    expect(plan.documentId).toBe(docId);
    expect(plan.revisionId).toBe(rev2);
    expect(plan.targetPath).toBe("docs/studio-next/cloture-v2.md");
    expect(plan.repositoryFullName).toBeTruthy();
    expect(plan.publicationBranch).toBeTruthy();

    // Reserve A — D4 rev2 content vs SCRIPTED published file (no silent normalize).
    const d4 = await getDocumentRevision(pilotId, preparationId, docId, rev2);
    expect(d4.status).toBe("AVAILABLE");
    if (d4.status !== "AVAILABLE" || !("revision" in d4) || !d4.revision) {
      throw new Error("D4 rev2 unavailable");
    }
    const sourceContent = d4.revision.contentMarkdown;
    expect(sourceContent).toBe("# clôture v2 exact content");
    expect(sourceContent).not.toContain("must not publish");
    if (plan.proposedContent != null) {
      expect(plan.proposedContent).toBe(sourceContent);
    }

    const provider = getScriptedGitHubProvider();
    const published = await provider.getFileContent(
      pilotId,
      plan.repositoryFullName!,
      plan.targetPath!,
      plan.publicationBranch!,
    );
    expect(published.encoding).toBe("utf-8");
    expect(published.content).toBe(sourceContent);
    expect(Buffer.from(published.content, "utf8").equals(Buffer.from(sourceContent, "utf8"))).toBe(
      true,
    );
    expect(published.content).not.toContain("must not publish");
    expect(published.content).not.toBe("# clôture v3 head — must not publish");

    // D8 facts + project publications projection
    const facts = await db
      .select()
      .from(observedGitFacts)
      .where(eq(observedGitFacts.attemptId, attempt!.id));
    expect(facts.length).toBeGreaterThan(0);
    expect(facts.some((f) => f.factKind === "COMMIT" || f.factKind === "PR_OPENED" || f.factKind === "BRANCH")).toBe(
      true,
    );
    expect(facts.some((f) => f.factKind === "MERGE" || f.factKind === "PR_MERGED")).toBe(false);

    const pubs = await listProjectPublications(pilotId, projectId);
    const matching = pubs.publications.filter(
      (p) => p.documentId === docId && p.revisionId === rev2,
    );
    expect(matching.length).toBeGreaterThanOrEqual(1);
    expect(pubs.publications.some((p) => p.revisionId === rev3)).toBe(false);
    expect(matching[0]!.targetPath).toBe(plan.targetPath);
    expect(matching[0]!.repositoryFullName).toBe(plan.repositoryFullName);
    expect(matching[0]!.effectStatus).toBe("COMPLETED");
    expect(matching[0]!.mergeObserved).toBe(false);

    const hd = (
      await db
        .select()
        .from(humanDecisions)
        .where(
          and(eq(humanDecisions.projectId, projectId), eq(humanDecisions.id, attempt!.decisionId!)),
        )
    )[0];
    expect(hd?.kind).toBe("GIT_PUBLICATION_MANDATE");
    expect(hd?.state).toBe("APPLICABLE");

    const afterAttempts = await countGitPublicationAttempts(projectId);
    expect(afterAttempts.length).toBe(beforeAttempts.length + 1);

    const mut = getScriptedMutationCounts(pilotId);
    expect(mut.createBranch + mut.putFileContents).toBeGreaterThan(0);
    expect(mut.mergePR).toBe(0);

    // Nora restitution only after terminal proof
    const thread = await listMessages(pilotId, preparationId);
    const lastAssistant = [...thread].reverse().find((m) => m.role === "assistant");
    expect(lastAssistant?.content ?? "").toMatch(/a été publié/i);
    expect(lastAssistant?.content ?? "").toMatch(/révision 2/i);
    expect(lastAssistant?.content ?? "").toMatch(/Aucune fusion/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/reste à confirmer/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/encore en vérification/i);

    // Idempotent re-submit same clientTurnKey must not double-mutate
    const replayKey = newId("ctk");
    const first = await noraTurn(pilotId, preparationId, publishAsk, {
      clientTurnKey: replayKey,
      documentFocus: {
        documentId: docId,
        sourceRevisionId: rev3,
        sourceRevisionNumber: 3,
        observedHeadRevisionId: rev3,
      },
    });
    const mutAfterFirst = getScriptedMutationCounts(pilotId);
    const second = await noraTurn(pilotId, preparationId, publishAsk, {
      clientTurnKey: replayKey,
      documentFocus: {
        documentId: docId,
        sourceRevisionId: rev3,
        sourceRevisionNumber: 3,
        observedHeadRevisionId: rev3,
      },
    });
    expect(second.userMessageId).toBe(first.userMessageId);
    const mutAfterReplay = getScriptedMutationCounts(pilotId);
    expect(mutAfterReplay.createBranch).toBe(mutAfterFirst.createBranch);
    expect(mutAfterReplay.putFileContents).toBe(mutAfterFirst.putFileContents);

    // Refresh listMessages — single coherent outcome, no extra attempt from read
    const attemptsAfterRead = await countGitPublicationAttempts(projectId);
    await listMessages(pilotId, preparationId);
    const attemptsAfterReread = await countGitPublicationAttempts(projectId);
    expect(attemptsAfterReread.length).toBe(attemptsAfterRead.length);

    const assistants = (await listMessages(pilotId, preparationId)).filter(
      (m) => m.role === "assistant",
    );
    const successMsgs = assistants.filter((m) => /a été publié/i.test(m.content ?? ""));
    expect(successMsgs.length).toBeGreaterThanOrEqual(1);
    for (const m of successMsgs) {
      expect(m.content).not.toMatch(/n'a pas été effectuée/i);
    }
  });
});
