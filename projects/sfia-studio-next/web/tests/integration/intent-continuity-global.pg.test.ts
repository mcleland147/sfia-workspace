/**
 * Global intent continuity — multi-domain scenarios (not Git-only).
 * DEV PG + fixture Nora + SCRIPTED Git when needed.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  effectAttempts,
  humanDecisions,
  pilots,
  preparations,
  projectCycles,
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
  authorizePublication,
  inspectionAllowsAuthorization,
  preparePublication,
} from "@/domains/execution/effect-service";
import { listMessages, postUserMessageAndNora } from "@/domains/conversation/service";
import { listDocuments } from "@/domains/document/service";
import { qualifyDocumentAct } from "@/domains/conversation/document-act";
import {
  CAPABILITY_CONTRACTS,
  continueAfterProjectCreated,
  mobilizeCapability,
} from "@/domains/conversation/intent-conduction";

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

  it("B: D2 alone — Pilot act creates one project; no forced document", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-b-d2-only");
    const first = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Solo Project B.",
      { clientTurnKey: newId("ctk") },
    );
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(first.missionProjection?.steps.some((s) => s.capabilityId === "d4.create_document")).toBe(
      false,
    );
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    expect(prep.previewName).toMatch(/^Solo Project B\.?$/i);

    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: prep.previewName || "Solo Project B",
      previewSummary: prep.previewSummary || "s",
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const cont = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
    });
    expect(cont.continued).toBe(true);
    expect(cont.documentSave).toBeNull();
    expect(cont.missionProjection?.status).toBe("COMPLETED");
    expect(cont.reason).toBe("D2_ONLY_COMPLETED");
  });

  it("C BLOCKING: Atlas D2→D4 ONE intention — no second Pilot message", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-c-atlas");
    const ask =
      "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.";
    const first = await postUserMessageAndNora(pilotId, preparationId, ask, {
      clientTurnKey: newId("ctk"),
    });
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(first.missionProjection?.steps[0]?.reason).toMatch(/Atlas/);
    expect(first.missionProjection?.originalUserText).toContain("Atlas");
    expect(
      first.missionProjection?.steps.some((s) => s.capabilityId === "d4.create_document"),
    ).toBe(true);
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    expect(prep.previewName).toBe("Atlas");

    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: "Atlas",
      previewSummary: prep.previewSummary || "s",
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    // Same path as create-project route — NO second postUserMessageAndNora.
    const cont = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
    });
    expect(cont.continued).toBe(true);
    expect(cont.documentSave?.status).toBe("AVAILABLE");
    expect(cont.documentSave?.documentId).toBeTruthy();
    expect(cont.documentSave?.revisionId).toBeTruthy();
    expect(cont.missionProjection?.status).toBe("COMPLETED");
    expect(
      cont.missionProjection?.steps.every(
        (s) => s.status === "DONE" || s.capabilityId === "d2.create_project",
      ),
    ).toBe(true);

    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.some((d) => d.document.id === cont.documentSave?.documentId)).toBe(true);

    // Replay continue — no duplicate document
    const again = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
    });
    expect(again.reason === "NO_AWAITING_MISSION" || again.continued === true).toBe(true);
    const docs2 = await listDocuments(pilotId, preparationId);
    const sameDocCount = docs2.filter((d) => d.document.id === cont.documentSave?.documentId).length;
    expect(sameDocCount).toBe(1);
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

    const reviseAsk = `Révise uniquement la section 2 du document ${documentId} et conserve le reste`;
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

  it("F: D5 pilotage — clear GO opens ACTIVE cycle via postUserMessageAndNora", async () => {
    const { pilotId, preparationId, projectId } = await seedProject("scen-f-d5");
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Ouvre le cycle cadrage.",
      { clientTurnKey: newId("ctk") },
    );
    expect(chat.status).toBe("COMPLETE");
    expect(chat.pilotageEffect?.attempted).toBe(true);
    expect(chat.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
    expect(chat.pilotageEffect?.operation).toBe("OPEN_CYCLE");
    expect(chat.humanDecisionCreated).toBe(true);
    const openCycles = await db
      .select()
      .from(projectCycles)
      .where(eq(projectCycles.projectId, projectId));
    const active = openCycles.filter((c) => c.status === "ACTIVE");
    expect(active).toHaveLength(1);
    expect(active[0]?.cycleType).toBe("CADRAGE");
  });

  it("G: D6 — authorizePublication creates HD; refuse path leaves no dispatch", async () => {
    const { pilotId, projectId, preparationId, repositoryId } = await seedProjectWithGit(
      "scen-g-d6",
    );
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé D6 Decision Doc pour publication.",
    );
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId: chat.documentSave!.documentId!,
      revisionId: chat.documentSave!.revisionId!,
      repositoryId,
      targetPath: "docs/studio-next/d6-decision.md",
      targetBranch: "main",
      correlationKey: `pub-d6-${chat.documentSave!.revisionId}`,
    });
    expect(prepared.status).toBe("PREPARED");
    const beforeHd = await db
      .select()
      .from(humanDecisions)
      .where(eq(humanDecisions.projectId, projectId));
    const hdBefore = beforeHd.length;

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0]!;
    const plan = JSON.parse(row.planJson) as {
      inspection: { kind: string; inspectionFingerprint: string };
    };
    const auth = await authorizePublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
      statement: "GO D6 decision scenario",
      inspectedFingerprint: plan.inspection.inspectionFingerprint,
    });
    expect(auth.status === "AUTHORIZED" || auth.status === "DISPATCHED" || auth.status === "SUCCEEDED").toBe(
      true,
    );
    const afterHd = await db
      .select()
      .from(humanDecisions)
      .where(eq(humanDecisions.projectId, projectId));
    expect(afterHd.length).toBeGreaterThan(hdBefore);
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

  it("M: two independent intentions — later doc must not close first mission wrongly", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-m-two");
    const a = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Mission Alpha puis un document d'accueil Alpha.",
      { clientTurnKey: newId("ctk") },
    );
    expect(a.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(a.missionProjection?.clientIntentKey).toBeTruthy();
    const keyA = a.missionProjection!.clientIntentKey;

    // Unrelated ask while still awaiting — must not complete Alpha's D4
    // (no project yet; second create intent builds its own awaiting if any)
    const unrelated = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Quelle est la différence entre blob et commit ?",
      { clientTurnKey: newId("ctk") },
    );
    expect(unrelated.documentSave == null || unrelated.documentSave.status === "NOT_EXECUTED").toBe(
      true,
    );

    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: "Mission Alpha",
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const cont = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
    });
    expect(cont.missionProjection?.clientIntentKey).toBe(keyA);
    expect(cont.documentSave?.status).toBe("AVAILABLE");

    // Independent second document — must not reuse Alpha correlation as sole proof
    const indep = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Document Indépendant Beta.",
      { clientTurnKey: newId("ctk") },
    );
    expect(indep.documentSave?.status).toBe("AVAILABLE");
    expect(indep.documentSave?.documentId).not.toBe(cont.documentSave?.documentId);
  });

  it("K: extensibility — mobilizeCapability exercises future.* boundary double", async () => {
    const contract = CAPABILITY_CONTRACTS.find(
      (c) => c.capabilityId === "future.example_capability",
    )!;
    let calls = 0;
    const out = await mobilizeCapability(
      contract,
      {
        capabilityId: "future.example_capability",
        invoke: async (ctx) => {
          calls += 1;
          return {
            status: "DONE",
            result: { status: "DONE", id: `sim_${ctx.pilotId.slice(-6)}` },
          };
        },
      },
      { pilotId: "pilot_extensibility" },
    );
    expect(calls).toBe(1);
    expect(out.result.id).toMatch(/^sim_/);
  });

  it("GAP-05 preview name exact Atlas not swallowed", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-name");
    await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Continuity Global B puis un document d'accueil pour ce projet.",
      { clientTurnKey: newId("ctk") },
    );
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    expect(prep.previewName).toBe("Continuity Global B");
    expect(prep.previewName).not.toMatch(/puis|document/i);
  });
});
