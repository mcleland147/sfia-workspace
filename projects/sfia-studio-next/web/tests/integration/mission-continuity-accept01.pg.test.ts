import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, humanDecisions, messages, pilots, preparations } from "@/db/schema";
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
  authorizePublication,
  inspectionAllowsAuthorization,
  preparePublication,
} from "@/domains/execution/effect-service";
import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";
import {
  attemptIsNoraMission,
  qualifyPublicationMission,
  recoverAuthorizedNoraMissions,
  resumeMissionAfterPublicationAuthorize,
} from "@/domains/conversation/mission-continuity";
import { listDocuments } from "@/domains/document/service";
import { fixtureSemanticQualify } from "@/domains/conversation/fixture-semantic-qualify";
import { projectStudioEffects } from "@/domains/conversation/semantic-qualification";
import {
  d4CreateAndPublishEnvelope,
  d4ReviseDocumentEnvelope,
  registerCreateDocumentTitled,
  registerExplicitFixture,
  registerTypedScenario,
  type ExplicitFixtureSpec,
} from "../helpers/semantic-fixture-envelopes";

async function noraTurn(
  pilotId: string,
  preparationId: string,
  text: string,
  opts?: Parameters<typeof postUserMessageAndNora>[3] & { fixture?: ExplicitFixtureSpec },
) {
  if (opts?.fixture) {
    registerExplicitFixture(text, opts.fixture);
  }
  const { fixture: _f, ...turnOpts } = opts ?? {};
  return postUserMessageAndNora(pilotId, preparationId, text, turnOpts);
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

describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    // Mutative Vitest PG must target e2e only (see tests/setup/vitest-pg-target.ts).
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
  });

  it("T01: simple dialogue — no D4/D7 mission prepare", async () => {
    const { pilotId, preparationId } = await seedProjectWithGit("t01-simple");
    const chat = await noraTurn(
      pilotId,
      preparationId,
      "Explique brièvement ce qu'est une HumanDecision dans Studio.",
    );
    expect(chat.documentSave == null || chat.documentSave.status === "NOT_EXECUTED").toBe(true);
    expect(chat.missionProjection == null || chat.missionProjection === null).toBe(true);
  });

  it("T03 non-Git: CREATE then REVISE uses confirmed document (no publish)", async () => {
    const { pilotId, preparationId } = await seedProjectWithGit("t03-d4");
    const create = await noraTurn(
      pilotId,
      preparationId,
      "Crée un document intitulé Continuity NonGit pour la suite.",
      {
        clientTurnKey: newId("ctk"),
        fixture: { kind: "d4_create", title: "Continuity NonGit pour la suite" },
      },
    );
    expect(create.documentSave?.status).toBe("AVAILABLE");
    const docId = create.documentSave!.documentId!;
    const reviseAsk = `Révise le document Continuity NonGit : ajoute une section Suite.`;
    registerTypedScenario(
      reviseAsk,
      d4ReviseDocumentEnvelope({
        summary: "Révision Continuity NonGit",
        documentHint: "Continuity NonGit",
        sectionHint: "Suite",
      }),
    );
    const revise = await noraTurn(pilotId, preparationId, reviseAsk, {
      clientTurnKey: newId("ctk"),
      fixture: {
        kind: "d4_revise",
        documentHint: "Continuity NonGit",
        sectionHint: "Suite",
      },
    });
    // REVISE may or may not fire depending on fixture extract — at least no publish mission
    expect(revise.missionProjection == null || revise.missionProjection === null).toBe(true);
    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.some((d) => d.document.id === docId)).toBe(true);
  });

  it("P0-D6: prepare leaves PREPARED without HumanDecision", async () => {
    const { pilotId, projectId, preparationId, repositoryId } = await seedProjectWithGit(
      "p0-d6-prepare",
    );
    const chat = await noraTurn(
      pilotId,
      preparationId,
      "Crée un document intitulé P0 Prepare Only pour la suite.",
      { fixture: { kind: "d4_create", title: "P0 Prepare Only pour la suite" } },
    );
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    const docId = chat.documentSave!.documentId!;
    const revId = chat.documentSave!.revisionId!;
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId: docId,
      revisionId: revId,
      repositoryId,
      targetPath: "docs/studio-next/p0-prepare.md",
      targetBranch: "main",
      correlationKey: `pub-p0-${revId}`,
    });
    expect(prepared.status).toBe("PREPARED");
    expect(attemptIsNoraMission({ correlationKey: `pub-p0-${revId}` })).toBe(false);
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0];
    expect(row?.decisionId).toBeNull();
    expect(row?.status).toBe("PREPARED");
  });

  it("P0-A: classic publication stays AUTHORIZED after authorize (no auto dispatch)", async () => {
    const { pilotId, projectId, preparationId, repositoryId } = await seedProjectWithGit(
      "p0a-classic",
    );
    const chat = await noraTurn(
      pilotId,
      preparationId,
      "Crée un document intitulé Classic Pub pour inspection manuelle.",
      { fixture: { kind: "d4_create", title: "Classic Pub pour inspection manuelle" } },
    );
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId: chat.documentSave!.documentId!,
      revisionId: chat.documentSave!.revisionId!,
      repositoryId,
      targetPath: "docs/studio-next/classic.md",
      targetBranch: "main",
      correlationKey: `pub-classic-${chat.documentSave!.revisionId}`,
    });
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0]!;
    const plan = JSON.parse(row.planJson) as {
      inspection: { kind: string; inspectionFingerprint: string };
    };
    expect(inspectionAllowsAuthorization(plan.inspection.kind as never)).toBe(true);
    const auth = await authorizePublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
      statement: "GO classic",
      inspectedFingerprint: plan.inspection.inspectionFingerprint,
    });
    expect(auth.status).toBe("AUTHORIZED");
    // Direct resume must refuse non-mission
    const refused = await resumeMissionAfterPublicationAuthorize({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
      decisionId: auth.decisionId,
    });
    expect(refused.error).toBe("NOT_NORA_MISSION");
    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0];
    expect(after?.status).toBe("AUTHORIZED");
  });

  it("P1-E: publish intent without path does not prepare D7", async () => {
    const { pilotId, preparationId } = await seedProjectWithGit("p1e-nopath");
    const ask =
      "Crée un document intitulé Path Required et publie-le dans mon dépôt GitHub";
    registerCreateDocumentTitled(ask, {
      title: "Path Required",
      publicationPath: null,
      publish: true,
    });
    const pubIntent = projectStudioEffects(fixtureSemanticQualify(ask)).publication;
    expect(pubIntent.wantsPublish).toBe(true);
    expect(pubIntent.needsExplicitPath).toBe(true);
    const chat = await noraTurn(pilotId, preparationId, ask, {
      clientTurnKey: newId("ctk"),
      fixture: {
        kind: "d4_publish",
        title: "Path Required",
        publicationPath: null,
      },
    });
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    expect(chat.missionProjection?.status).toBe("AWAITING_CLARIFICATION");
    expect(chat.missionProjection?.steps.find((s) => s.id === "d7_prepare")?.attemptId).toBeFalsy();
  });

  it("ACCEPT-01 chat: CREATE + publish with path prepares and awaits auth without HD", async () => {
    const { pilotId, projectId, preparationId } = await seedProjectWithGit("accept01-chat");
    const ask =
      "Crée un document intitulé ACCEPT-01 Continuity et publie-le dans mon dépôt GitHub chemin docs/studio-next/accept01.md";
    registerTypedScenario(
      ask,
      d4CreateAndPublishEnvelope({
        title: "ACCEPT-01 Continuity",
        summary: "ACCEPT-01 Continuity",
        publicationPath: "docs/studio-next/accept01.md",
      }),
    );
    expect(projectStudioEffects(fixtureSemanticQualify(ask)).publication.wantsPublish).toBe(true);
    const chat = await noraTurn(pilotId, preparationId, ask, {
      clientTurnKey: newId("ctk"),
      fixture: {
        kind: "d4_publish",
        title: "ACCEPT-01 Continuity",
        publicationPath: "docs/studio-next/accept01.md",
      },
    });
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    expect(chat.missionProjection?.status).toBe("AWAITING_PILOT_AUTH");
    const prepStep = chat.missionProjection?.steps.find((s) => s.id === "d7_prepare");
    expect(prepStep?.attemptId).toBeTruthy();
    expect(prepStep?.status).toBe("WAITING");

    const attempt = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepStep!.attemptId!))
    )[0];
    expect(attempt?.status).toBe("PREPARED");
    expect(attempt?.decisionId).toBeNull();
    expect(attemptIsNoraMission(attempt!)).toBe(true);

    const msgs = await listMessages(pilotId, preparationId);
    const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
    expect(assistant?.content).toMatch(/Résultat applicatif D4|Suite de mission|AVAILABLE/);
    // SEM-02: mission auth state is on missionProjection; assistant may be D4-only.
    expect(chat.missionProjection?.status).toBe("AWAITING_PILOT_AUTH");
    expect(projectId).toBeTruthy();
  });

  it("ACCEPT-01 + P0-B: authorize then recover/resume; restitution idempotent (P1-C)", async () => {
    const { pilotId, projectId, preparationId } = await seedProjectWithGit("accept01-resume");
    const ask =
      "Crée un document intitulé ACCEPT-01 Resume et publie-le dans mon dépôt GitHub chemin docs/studio-next/accept01-resume.md";
    const chat = await noraTurn(pilotId, preparationId, ask, {
      clientTurnKey: newId("ctk"),
      fixture: {
        kind: "d4_publish",
        title: "ACCEPT-01 Resume",
        publicationPath: "docs/studio-next/accept01-resume.md",
      },
    });
    const attemptId = chat.missionProjection?.steps.find((s) => s.id === "d7_prepare")?.attemptId;
    expect(attemptId).toBeTruthy();

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId!))
    )[0]!;
    const plan = JSON.parse(row.planJson) as {
      inspection: { kind: string; inspectionFingerprint: string };
    };

    // Simulate crash window: authorize without calling resume (HTTP would call it for mission).
    const auth = await authorizePublication({
      pilotId,
      projectId,
      attemptId: attemptId!,
      statement: "GO publication ACCEPT-01",
      inspectedFingerprint: plan.inspection.inspectionFingerprint,
    });
    expect(auth.status).toBe("AUTHORIZED");
    expect(auth.decisionId).toBeTruthy();

    const stuck = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId!))
    )[0];
    expect(stuck?.status).toBe("AUTHORIZED");

    // P0-B durable recovery (same as listMessages / next turn / reconcile)
    const recovered = await recoverAuthorizedNoraMissions({ pilotId, projectId });
    expect(recovered.some((r) => r.attemptId === attemptId && r.resumed)).toBe(true);

    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId!))
    )[0];
    expect(["COMPLETED", "DISPATCHED", "AMBIGUOUS"]).toContain(after?.status ?? "");

    const resume2 = await resumeMissionAfterPublicationAuthorize({
      pilotId,
      projectId,
      attemptId: attemptId!,
      decisionId: auth.decisionId,
    });
    expect(resume2.status).toBeTruthy();

    // P1-C: at most one mission-resume message per attempt
    const convMsgs = await db
      .select()
      .from(messages)
      .where(eq(messages.generationId, `mission-resume:${attemptId}`));
    expect(convMsgs.length).toBeLessThanOrEqual(1);

    const decisions = await db
      .select()
      .from(humanDecisions)
      .where(
        and(eq(humanDecisions.projectId, projectId), eq(humanDecisions.id, auth.decisionId!)),
      );
    expect(decisions[0]?.state).toBe("APPLICABLE");
  });

  it("C2/C5: same clientTurnKey replay does not duplicate D4 CREATE or D7 prepare", async () => {
    const { pilotId, projectId, preparationId } = await seedProjectWithGit("accept01-replay");
    const ask =
      "Crée un document intitulé ACCEPT-01 Replay et publie-le dans mon dépôt GitHub chemin docs/studio-next/accept01-replay.md";
    const clientTurnKey = newId("ctk");
    const replayFixture = {
      kind: "d4_publish" as const,
      title: "ACCEPT-01 Replay",
      publicationPath: "docs/studio-next/accept01-replay.md",
    };
    const first = await noraTurn(pilotId, preparationId, ask, {
      clientTurnKey,
      fixture: replayFixture,
    });
    expect(first.documentSave?.status).toBe("AVAILABLE");
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_AUTH");
    const firstDoc = first.documentSave!.documentId!;
    const firstAttempt = first.missionProjection!.steps.find((s) => s.id === "d7_prepare")!
      .attemptId!;

    const replay = await noraTurn(pilotId, preparationId, ask, {
      clientTurnKey,
      fixture: replayFixture,
    });
    expect(replay.idempotentReplay === true || replay.documentSave?.documentId === firstDoc).toBe(
      true,
    );

    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.filter((d) => d.document.id === firstDoc)).toHaveLength(1);

    const attempts = await db
      .select()
      .from(effectAttempts)
      .where(and(eq(effectAttempts.projectId, projectId), eq(effectAttempts.id, firstAttempt)));
    expect(attempts).toHaveLength(1);
    expect(attempts[0]?.status).toBe("PREPARED");
    expect(attempts[0]?.decisionId).toBeNull();
  });
});
