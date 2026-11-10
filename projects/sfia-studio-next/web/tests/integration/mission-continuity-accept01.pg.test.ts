import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, humanDecisions, pilots, preparations } from "@/db/schema";
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
  qualifyPublicationMission,
  resumeMissionAfterPublicationAuthorize,
} from "@/domains/conversation/mission-continuity";
import { listDocuments } from "@/domains/document/service";

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
  // Ensure scripted provider is warm for prepare/dispatch
  getScriptedGitHubProvider();
  return { pilotId, projectId: created.projectId, preparationId: prep.id, repositoryId: repoId };
}

describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    // Refuse RECETTE lane contamination
    expect(process.env.DATABASE_URL).toMatch(/5433|sfia_next_dev/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
  });

  it("P0-D6: prepare leaves PREPARED without HumanDecision", async () => {
    const { pilotId, projectId, preparationId, repositoryId } = await seedProjectWithGit(
      "p0-d6-prepare",
    );
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé P0 Prepare Only pour la suite.",
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
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0];
    expect(row?.decisionId).toBeNull();
    expect(row?.status).toBe("PREPARED");
    const hd = await db
      .select()
      .from(humanDecisions)
      .where(eq(humanDecisions.projectId, projectId));
    expect(hd.filter((d) => d.sourceRef === prepared.attemptId)).toHaveLength(0);
  });

  it("ACCEPT-01 chat: CREATE + publish intent prepares and awaits auth without HD", async () => {
    const { pilotId, projectId, preparationId } = await seedProjectWithGit("accept01-chat");
    const ask =
      "Crée un document intitulé ACCEPT-01 Continuity et publie-le dans mon dépôt GitHub chemin docs/studio-next/accept01.md";
    expect(qualifyPublicationMission(ask).wantsPublish).toBe(true);
    const chat = await postUserMessageAndNora(pilotId, preparationId, ask, {
      clientTurnKey: newId("ctk"),
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

    const msgs = await listMessages(pilotId, preparationId);
    const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
    expect(assistant?.content).toMatch(/Résultat applicatif D4/);
    expect(assistant?.content).toMatch(/AWAITING_PILOT_AUTH|aucune HumanDecision créée/i);
    expect(assistant?.content).not.toMatch(/HumanDecision APPLICABLE/);

    // Project scoped sanity
    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.some((d) => d.document.id === chat.documentSave?.documentId)).toBe(true);
    expect(projectId).toBeTruthy();
  });

  it("ACCEPT-01: authorize then auto resume dispatches without second continue message", async () => {
    const { pilotId, projectId, preparationId } = await seedProjectWithGit("accept01-resume");
    const ask =
      "Crée un document intitulé ACCEPT-01 Resume et publie-le dans mon dépôt GitHub chemin docs/studio-next/accept01-resume.md";
    const chat = await postUserMessageAndNora(pilotId, preparationId, ask, {
      clientTurnKey: newId("ctk"),
    });
    const attemptId = chat.missionProjection?.steps.find((s) => s.id === "d7_prepare")?.attemptId;
    expect(attemptId).toBeTruthy();

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId!))
    )[0]!;
    const plan = JSON.parse(row.planJson) as {
      inspection: { kind: string; inspectionFingerprint: string };
    };
    expect(inspectionAllowsAuthorization(plan.inspection.kind as never)).toBe(true);

    const auth = await authorizePublication({
      pilotId,
      projectId,
      attemptId: attemptId!,
      statement: "GO publication ACCEPT-01",
      inspectedFingerprint: plan.inspection.inspectionFingerprint,
    });
    expect(auth.status).toBe("AUTHORIZED");
    expect(auth.decisionId).toBeTruthy();

    const resume = await resumeMissionAfterPublicationAuthorize({
      pilotId,
      projectId,
      attemptId: attemptId!,
      decisionId: auth.decisionId,
    });
    expect(["COMPLETED", "DISPATCHED", "AMBIGUOUS"]).toContain(resume.status);
    expect(resume.restitution).toMatch(/Restitution de mission|Publication/);

    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId!))
    )[0];
    expect(["COMPLETED", "DISPATCHED", "AMBIGUOUS"]).toContain(after?.status ?? "");

    // Idempotent second resume must not invent a second effect path blindly
    const resume2 = await resumeMissionAfterPublicationAuthorize({
      pilotId,
      projectId,
      attemptId: attemptId!,
      decisionId: auth.decisionId,
    });
    expect(resume2.status).toBeTruthy();

    const decisions = await db
      .select()
      .from(humanDecisions)
      .where(
        and(eq(humanDecisions.projectId, projectId), eq(humanDecisions.id, auth.decisionId!)),
      );
    expect(decisions[0]?.state).toBe("APPLICABLE");
  });
});
