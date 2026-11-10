/**
 * Global intent continuity — multi-domain scenarios (not Git-only).
 * DEV PG + fixture Nora + SCRIPTED Git when needed.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, pilots, preparations } from "@/db/schema";
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
import { listMessages, postUserMessageAndNora } from "@/domains/conversation/service";
import { listDocuments } from "@/domains/document/service";
import { qualifyDocumentAct } from "@/domains/conversation/document-act";
import { CAPABILITY_CONTRACTS } from "@/domains/conversation/intent-conduction";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedPrepOnly(label: string) {
  const pilotId = await seedPilot(label);
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  return { pilotId, preparationId: prep.id };
}

async function seedProject(label: string) {
  const { pilotId, preparationId } = await seedPrepOnly(label);
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId,
    expectedCreationRevision: refreshed!.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`seed project failed: ${created.status}`);
  }
  return { pilotId, preparationId, projectId: created.projectId };
}

async function seedProjectWithGit(label: string) {
  resetScriptedStore();
  const seeded = await seedProject(label);
  const sessionId = newId("sid");
  const { state } = await startGitHubAuthorization(
    seeded.pilotId,
    "/settings/integrations",
    sessionId,
  );
  const status = await completeGitHubAuthorization({
    pilotId: seeded.pilotId,
    state,
    studioSessionId: sessionId,
  });
  const repoId = status.repositories[0]!.id;
  await attachRepositoryToProject(seeded.pilotId, seeded.projectId, repoId);
  getScriptedGitHubProvider();
  return { ...seeded, repositoryId: repoId };
}

describe("Global Nora/Studio intent continuity (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/5433|sfia_next_dev/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
  });

  it("A: simple dialogue — no D2/D4/D7 effects", async () => {
    const { pilotId, preparationId } = await seedProject("scen-a");
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Explique brièvement le rôle d'une HumanDecision.",
    );
    expect(chat.documentSave == null || chat.documentSave.status === "NOT_EXECUTED").toBe(true);
    expect(chat.missionProjection == null).toBe(true);
  });

  it("B: D2 — Nora prepares project intent; Pilot act creates; continuation sees projectId", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-b-d2");
    const ask =
      "Crée un projet nommé Continuity Global B puis un document d'accueil pour ce projet.";
    const first = await postUserMessageAndNora(pilotId, preparationId, ask, {
      clientTurnKey: newId("ctk"),
    });
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(
      first.missionProjection?.steps.some((s) => s.capabilityId === "d2.create_project"),
    ).toBe(true);
    // No implicit project
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0];
    expect(prep?.previewName).toMatch(/Continuity Global B/i);

    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep!.creationRevision,
      projectName: prep!.previewName || "Continuity Global B",
      previewSummary: prep!.previewSummary || "s",
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    if (created.status !== "CREATED" || !created.projectId) {
      throw new Error("expected CREATED project");
    }

    const second = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Accueil Continuity Global B pour démarrer.",
      { clientTurnKey: newId("ctk") },
    );
    expect(second.documentSave?.status).toBe("AVAILABLE");
    expect(second.missionProjection?.steps.some((s) => s.status === "DONE" && s.capabilityId === "d2.create_project") ||
      second.missionProjection?.status === "COMPLETED" ||
      second.missionProjection?.status === "ACTIVE" ||
      second.documentSave?.documentId).toBeTruthy();
  });

  it("C+D: CREATE then REVISE — revision actually persisted (same documentId, v2)", async () => {
    const { pilotId, preparationId } = await seedProject("scen-cd-d4");
    const created = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Continuity CD pour révision ciblée.",
      { clientTurnKey: newId("ctk") },
    );
    expect(created.documentSave?.status).toBe("AVAILABLE");
    expect(created.documentSave?.act).toBe("CREATE");
    const documentId = created.documentSave!.documentId!;
    const v1 = created.documentSave!.revisionNumber;

    const reviseAsk =
      `Révise uniquement la section 2 du document ${documentId} et conserve le reste`;
    expect(qualifyDocumentAct(reviseAsk).kind).toBe("REVISE");
    const revised = await postUserMessageAndNora(pilotId, preparationId, reviseAsk, {
      clientTurnKey: newId("ctk"),
    });
    expect(revised.documentSave?.act).toBe("REVISE");
    expect(revised.documentSave?.status).toBe("AVAILABLE");
    expect(revised.documentSave?.documentId).toBe(documentId);
    expect(revised.documentSave?.revisionNumber).toBeGreaterThan(v1 ?? 0);

    const docs = await listDocuments(pilotId, preparationId);
    const doc = docs.find((d) => d.document.id === documentId);
    expect(doc?.latestRevision?.revisionNumber).toBe(revised.documentSave?.revisionNumber);
  });

  it("READ≠COMMAND: listMessages does not dispatch AUTHORIZED classic attempt", async () => {
    const { pilotId, projectId, preparationId, repositoryId } = await seedProjectWithGit(
      "scen-read",
    );
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Read Isolation pour publication classique.",
    );
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId: chat.documentSave!.documentId!,
      revisionId: chat.documentSave!.revisionId!,
      repositoryId,
      targetPath: "docs/studio-next/read-iso.md",
      targetBranch: "main",
      correlationKey: `pub-classic-read-${chat.documentSave!.revisionId}`,
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
      statement: "GO classic read isolation",
      inspectedFingerprint: plan.inspection.inspectionFingerprint,
    });
    expect(auth.status).toBe("AUTHORIZED");

    await listMessages(pilotId, preparationId);
    await listMessages(pilotId, preparationId);

    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0];
    expect(after?.status).toBe("AUTHORIZED");
  });

  it("I: multi-domain D2→D4 — Pilot act then document without Git", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-i-multi");
    const first = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Multi Domaine I et prépare un document de cadrage.",
      { clientTurnKey: newId("ctk") },
    );
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: prep.previewName || "Multi Domaine I",
      previewSummary: prep.previewSummary || "s",
      idempotencyKey: newId("idem"),
    });
    if (created.status !== "CREATED" || !created.projectId) {
      throw new Error("expected CREATED project");
    }

    const docTurn = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Cadrage Multi Domaine I.",
      { clientTurnKey: newId("ctk") },
    );
    expect(docTurn.documentSave?.status).toBe("AVAILABLE");
    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.some((d) => d.document.id === docTurn.documentSave?.documentId)).toBe(true);
  });

  it("K: extensibility contracts cover current + future placeholder", () => {
    const ids = CAPABILITY_CONTRACTS.map((c) => c.capabilityId);
    expect(ids).toContain("d2.create_project");
    expect(ids).toContain("d4.create_document");
    expect(ids).toContain("d5.pilotage_command");
    expect(ids).toContain("d7.prepare_publication");
    expect(ids).toContain("future.example_capability");
  });
});
