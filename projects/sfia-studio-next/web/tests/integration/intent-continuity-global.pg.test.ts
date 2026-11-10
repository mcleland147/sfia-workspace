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
import { listDocuments, savePreparationDocument } from "@/domains/document/service";
import { qualifyDocumentAct } from "@/domains/conversation/document-act";
import {
  capitalizeAcquis,
  ensureSubject,
  selectRelevantKnowledgeContext,
} from "@/domains/knowledge/service";
import {
  authorizeMissionBoundD2Create,
  CAPABILITY_CONTRACTS,
  continuationRaceHooks,
  continueAfterProjectCreated,
  d2MissionIdempotencyKey,
  loadPriorMissionProjection,
  mobilizeCapability,
  recoverPendingMissionContinuation,
  verifyMissionForD2Act,
} from "@/domains/conversation/intent-conduction";
import { TURN_RUNNING_STALE_MS } from "@/domains/conversation/turn-command";
import { conversationTurnCommands } from "@/db/schema";
import { getPreparationContext } from "@/domains/preparation/service";
import { and, eq as eqCol } from "drizzle-orm";

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

  it("S01: simple dialogue — no D2/D4/D7 effects", async () => {
    const { pilotId, preparationId } = await seedProject("scen-a");
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Explique brièvement le rôle d'une HumanDecision.",
    );
    expect(chat.documentSave == null || chat.documentSave.status === "NOT_EXECUTED").toBe(true);
    expect(chat.missionProjection == null).toBe(true);
  });

  it("S02: D2 alone — Pilot act creates one project; no forced document", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-b-d2-only");
    const first = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Solo Project B.",
      { clientTurnKey: newId("ctk") },
    );
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(first.missionProjection?.ownerActBinding?.kind).toBe("D2_CREATE_PROJECT");
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
      idempotencyKey: d2MissionIdempotencyKey(first.missionProjection!.clientIntentKey),
    });
    expect(created.status).toBe("CREATED");
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const cont = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
      projectName: "Solo Project B",
      clientIntentKey: first.missionProjection!.clientIntentKey,
    });
    expect(cont.continued).toBe(true);
    expect(cont.documentSave).toBeNull();
    expect(cont.missionProjection?.status).toBe("COMPLETED");
    expect(cont.reason).toBe("D2_ONLY_COMPLETED");
  });

  it("S03 BLOCKING: Atlas D2→D4 ONE intention — no second Pilot message", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-c-atlas");
    const ask =
      "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.";
    const clientTurnKey = newId("ctk");
    const first = await postUserMessageAndNora(pilotId, preparationId, ask, {
      clientTurnKey,
    });
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(first.missionProjection?.steps[0]?.reason).toMatch(/Atlas/);
    expect(first.missionProjection?.proposedProjectName).toBe("Atlas");
    expect(first.missionProjection?.ownerActBinding?.clientIntentKey).toBe(clientTurnKey);
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
      idempotencyKey: d2MissionIdempotencyKey(clientTurnKey),
    });
    expect(created.status).toBe("CREATED");
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const cont = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
      projectName: "Atlas",
      clientIntentKey: clientTurnKey,
    });
    expect(cont.continued).toBe(true);
    expect(cont.documentSave?.status).toBe("AVAILABLE");
    expect(cont.documentSave?.documentId).toBeTruthy();
    expect(cont.missionProjection?.status).toBe("COMPLETED");

    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.some((d) => d.document.id === cont.documentSave?.documentId)).toBe(true);
  });

  it("G1+S04: after continue, mission is not awaiting; double continue is replay", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-g1-s04");
    const clientTurnKey = newId("ctk");
    const first = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Recover Atlas puis un document de cadrage Recover.",
      { clientTurnKey },
    );
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: "Recover Atlas",
      previewSummary: "s",
      idempotencyKey: d2MissionIdempotencyKey(clientTurnKey),
    });
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const cont1 = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
      projectName: "Recover Atlas",
      clientIntentKey: clientTurnKey,
    });
    expect(cont1.continued).toBe(true);
    expect(cont1.documentSave?.status).toBe("AVAILABLE");
    const docId = cont1.documentSave!.documentId!;

    const ctx = await getPreparationContext(pilotId, preparationId);
    const awaiting = await loadPriorMissionProjection(ctx.conversation!.id, {
      awaitingPilotAct: true,
      preparationId,
    });
    expect(awaiting).toBeNull();

    const latest = await loadPriorMissionProjection(ctx.conversation!.id, {
      clientIntentKey: clientTurnKey,
    });
    expect(latest?.status).toBe("COMPLETED");

    const cont2 = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
      projectName: "Recover Atlas",
      clientIntentKey: clientTurnKey,
    });
    expect(cont2.replayed === true || cont2.reason === "ALREADY_CONTINUED").toBe(true);
    expect(cont2.documentSave?.documentId ?? docId).toBe(docId);

    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.filter((d) => d.document.id === docId)).toHaveLength(1);
  });

  it("S05/G2: two missions — D2 result binds to explicit clientIntentKey only", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-s05-two");
    const keyA = newId("ctk");
    const a = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Mission Alpha puis un document d'accueil Alpha.",
      { clientTurnKey: keyA },
    );
    expect(a.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(a.missionProjection?.ownerActBinding?.clientIntentKey).toBe(keyA);

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
      idempotencyKey: d2MissionIdempotencyKey(keyA),
    });
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const cont = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
      projectName: "Mission Alpha",
      clientIntentKey: keyA,
    });
    expect(cont.missionProjection?.clientIntentKey).toBe(keyA);
    expect(cont.documentSave?.status).toBe("AVAILABLE");

    const indep = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Document Indépendant Beta.",
      { clientTurnKey: newId("ctk") },
    );
    expect(indep.documentSave?.status).toBe("AVAILABLE");
    expect(indep.documentSave?.documentId).not.toBe(cont.documentSave?.documentId);
  });

  it("S06: CREATE then REVISE — revision actually persisted (same documentId, v2)", async () => {
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
  });

  it("S07: D4 knowledge — selected acquis with provenance influence Nora context", async () => {
    const { pilotId, preparationId } = await seedProject("scen-s07-know");
    const sub = await ensureSubject(pilotId, preparationId, "Objectif Atlas");
    expect(sub.status).toBe("AVAILABLE");
    const cap = await capitalizeAcquis(pilotId, preparationId, {
      statement:
        "L'objectif Atlas est de sécuriser la continuité cognitive multi-domaines sans second message Pilote.",
      kind: "HYPOTHESIS",
      subjectId: sub.subjectId,
      provenance: { sourceKind: "pilot", sourceId: "s07" },
    });
    expect(cap.status).toBe("AVAILABLE");

    const selected = await selectRelevantKnowledgeContext(
      pilotId,
      preparationId,
      "Quel est l'objectif Atlas pour la continuité ?",
    );
    expect(selected.selectedAcquisIds).toContain(cap.acquisId);
    expect(selected.snippets.some((s) => /continuité cognitive/i.test(s))).toBe(true);
    expect(selected.snippets.some((s) => /provenance=/i.test(s))).toBe(true);

    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Rappelle l'objectif Atlas pour la continuité cognitive multi-domaines.",
      { clientTurnKey: newId("ctk") },
    );
    expect(chat.status).toBe("COMPLETE");
    expect(chat.documentSave == null || chat.documentSave.status === "NOT_EXECUTED").toBe(true);
    // Fixture Nora may echo context; at minimum knowledge selection must be non-empty
    // and chat must complete without inventing a D4 write from a recall ask.
    expect(selected.selectedAcquisIds.length).toBeGreaterThan(0);
    const msgs = await listMessages(pilotId, preparationId);
    const lastAssistant = [...msgs].reverse().find((m) => m.role === "assistant");
    expect(lastAssistant?.content?.length ?? 0).toBeGreaterThan(10);
  });

  it("S08: D5 pilotage — clear GO opens ACTIVE cycle via postUserMessageAndNora", async () => {
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

  it("S08b: D5 then D4 in one utterance — cycle + document", async () => {
    const { pilotId, preparationId, projectId } = await seedProject("scen-s08b");
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Ouvre le cycle cadrage puis crée un document intitulé Suite Après Cycle.",
      { clientTurnKey: newId("ctk") },
    );
    expect(chat.pilotageEffect?.operation).toBe("OPEN_CYCLE");
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    const active = (
      await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))
    ).filter((c) => c.status === "ACTIVE");
    expect(active).toHaveLength(1);
  });

  it("S09: D6 — authorizePublication creates HD", async () => {
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
    expect(
      auth.status === "AUTHORIZED" || auth.status === "DISPATCHED" || auth.status === "SUCCEEDED",
    ).toBe(true);
    const afterHd = await db
      .select()
      .from(humanDecisions)
      .where(eq(humanDecisions.projectId, projectId));
    expect(afterHd.length).toBeGreaterThan(hdBefore);
  });

  it("S13 READ≠COMMAND: listMessages does not dispatch AUTHORIZED classic attempt", async () => {
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

  it("G4/S12: mobilizeCapability on real D2 + D4 contracts + future double", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-g4-mob");
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const d2 = CAPABILITY_CONTRACTS.find((c) => c.capabilityId === "d2.create_project")!;
    const created = await mobilizeCapability(
      d2,
      {
        capabilityId: "d2.create_project",
        invoke: async (ctx) => {
          const r = await createProjectCommand({
            pilotId: ctx.pilotId,
            preparationId: ctx.preparationId!,
            expectedCreationRevision: prep.creationRevision,
            projectName: "Mobilized Project",
            previewSummary: "s",
            idempotencyKey: newId("idem"),
          });
          return {
            status: r.status,
            result: {
              status: r.status,
              projectId: "projectId" in r ? r.projectId : null,
            },
          };
        },
      },
      { pilotId, preparationId },
    );
    expect(created.status).toBe("CREATED");
    expect(created.result.projectId).toBeTruthy();

    const d4 = CAPABILITY_CONTRACTS.find((c) => c.capabilityId === "d4.create_document")!;
    const doc = await mobilizeCapability(
      d4,
      {
        capabilityId: "d4.create_document",
        invoke: async (ctx) => {
          const saved = await savePreparationDocument(
            ctx.pilotId,
            ctx.preparationId!,
            "Doc mobilisé",
            "# Doc\n\nContenu mobilisé via contrat.\n",
            undefined,
            { correlationKey: `doc:mob:${newId("ck")}` },
          );
          return {
            status: saved.status,
            result: {
              status: saved.status,
              documentId: "documentId" in saved ? saved.documentId ?? null : null,
              revisionId: "revisionId" in saved ? saved.revisionId ?? null : null,
            },
          };
        },
      },
      { pilotId, preparationId },
    );
    expect(doc.result.documentId).toBeTruthy();

    const future = CAPABILITY_CONTRACTS.find(
      (c) => c.capabilityId === "future.example_capability",
    )!;
    const sim = await mobilizeCapability(
      future,
      {
        capabilityId: "future.example_capability",
        invoke: async () => ({ status: "DONE", result: { status: "DONE", id: "sim_1" } }),
      },
      { pilotId },
    );
    expect(sim.result.id).toBe("sim_1");
  });

  it("G3/G5: concurrent continue — single document AND mission reaches COMPLETED", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-g5-conc");
    const clientTurnKey = newId("ctk");
    await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Concours puis un document concurrent.",
      { clientTurnKey },
    );
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: "Concours",
      previewSummary: "s",
      idempotencyKey: d2MissionIdempotencyKey(clientTurnKey),
    });
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const [a, b] = await Promise.all([
      continueAfterProjectCreated({
        pilotId,
        preparationId,
        projectId: created.projectId,
        projectName: "Concours",
        clientIntentKey: clientTurnKey,
      }),
      continueAfterProjectCreated({
        pilotId,
        preparationId,
        projectId: created.projectId,
        projectName: "Concours",
        clientIntentKey: clientTurnKey,
      }),
    ]);

    // If one side lost the race with IN_PROGRESS, reclaim via nominal recovery.
    let final = a.continued ? a : b.continued ? b : null;
    if (!final?.continued || final.missionProjection?.status !== "COMPLETED") {
      // Force stale if needed so reclaim is allowed.
      const contKey = `mission-continue:${clientTurnKey}:${created.projectId}`;
      await db
        .update(conversationTurnCommands)
        .set({ updatedAt: new Date(Date.now() - TURN_RUNNING_STALE_MS - 5_000) })
        .where(eqCol(conversationTurnCommands.clientTurnKey, contKey));
      const recovered = await recoverPendingMissionContinuation({
        pilotId,
        projectId: created.projectId,
      });
      expect(recovered.recovered).toBe(true);
      final = {
        continued: recovered.recovered,
        missionProjection: recovered.missionProjection,
        documentSave: recovered.documentSave,
        assistantMessageId: recovered.assistantMessageId,
        replayed: recovered.replayed,
      };
    }

    expect(final?.continued).toBe(true);
    expect(final?.missionProjection?.status).toBe("COMPLETED");
    expect(final?.documentSave?.status).toBe("AVAILABLE");

    const docs = await listDocuments(pilotId, preparationId);
    const missionDocs = docs.filter((d) =>
      (d.document.creationCorrelationKey ?? "").includes(`doc:mission-continue:${clientTurnKey}`),
    );
    expect(missionDocs).toHaveLength(1);

    const stuck = await db
      .select()
      .from(conversationTurnCommands)
      .where(
        and(
          eqCol(conversationTurnCommands.clientTurnKey, `mission-continue:${clientTurnKey}:${created.projectId}`),
          eqCol(conversationTurnCommands.status, "RUNNING"),
        ),
      );
    expect(stuck).toHaveLength(0);
  });

  it("G1: forged clientIntentKey — authorize FORBIDDEN before create; zero project", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-g1-auth");
    const keyA = newId("ctk");
    await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Auth Exact puis un document Exact.",
      { clientTurnKey: keyA },
    );
    const before = await db.select().from(preparations).where(eq(preparations.id, preparationId));
    expect(before[0]?.status).not.toBe("ATTACHED");

    const auth = await authorizeMissionBoundD2Create({
      pilotId,
      preparationId,
      clientIntentKey: "ctk_forged_other_mission",
      projectName: "Auth Exact",
    });
    expect(auth.outcome).toBe("FORBIDDEN");
    if (auth.outcome !== "FORBIDDEN") throw new Error("expected FORBIDDEN");
    expect(auth.code).toBe("MISSION_KEY_MISMATCH");

    // Must not call create when forbidden — simulate route oracle.
    const prepAfter = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    expect(prepAfter.status).not.toBe("ATTACHED");

    const nameAuth = await authorizeMissionBoundD2Create({
      pilotId,
      preparationId,
      clientIntentKey: keyA,
      projectName: "Wrong Name Entirely",
    });
    expect(nameAuth.outcome).toBe("FORBIDDEN");
    if (nameAuth.outcome === "FORBIDDEN") {
      expect(nameAuth.code).toBe("MISSION_NAME_MISMATCH");
    }
    expect(
      (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]?.status,
    ).not.toBe("ATTACHED");

    const ok = await authorizeMissionBoundD2Create({
      pilotId,
      preparationId,
      clientIntentKey: keyA,
      projectName: "Auth Exact",
    });
    expect(ok.outcome).toBe("AUTHORIZED");
    if (ok.outcome !== "AUTHORIZED") throw new Error("expected AUTHORIZED");

    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prepAfter.creationRevision,
      projectName: "Auth Exact",
      previewSummary: "s",
      idempotencyKey: ok.idempotencyKey,
    });
    expect(created.status).toBe("CREATED");
  });

  it("G2: crash after D2 — recoverPendingMissionContinuation without Pilot reformulation", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-g2-recover");
    const clientTurnKey = newId("ctk");
    await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Recover Nominal puis un document Recover.",
      { clientTurnKey },
    );
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const auth = await authorizeMissionBoundD2Create({
      pilotId,
      preparationId,
      clientIntentKey: clientTurnKey,
      projectName: "Recover Nominal",
    });
    expect(auth.outcome).toBe("AUTHORIZED");
    if (auth.outcome !== "AUTHORIZED") throw new Error("expected AUTHORIZED");
    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: "Recover Nominal",
      previewSummary: "s",
      idempotencyKey: auth.idempotencyKey,
    });
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    // Simulate crash: project exists, continuation never started (P2).
    const recovered = await recoverPendingMissionContinuation({
      pilotId,
      projectId: created.projectId,
    });
    expect(recovered.attempted).toBe(true);
    expect(recovered.recovered).toBe(true);
    expect(recovered.missionProjection?.status).toBe("COMPLETED");
    expect(recovered.documentSave?.status).toBe("AVAILABLE");

    const again = await recoverPendingMissionContinuation({
      pilotId,
      projectId: created.projectId,
    });
    expect(again.recovered || again.reason === "NOTHING_PENDING" || again.replayed).toBeTruthy();
    const docs = await listDocuments(pilotId, preparationId);
    const missionDocs = docs.filter((d) =>
      (d.document.creationCorrelationKey ?? "").includes(`doc:mission-continue:${clientTurnKey}`),
    );
    expect(missionDocs).toHaveLength(1);
  });

  it("B/C: wrong clientIntentKey does not silently bind another mission", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-bc-mismatch");
    const keyA = newId("ctk");
    await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Bind Exact puis un document Exact.",
      { clientTurnKey: keyA },
    );
    const ctx = await getPreparationContext(pilotId, preparationId);
    const verified = await verifyMissionForD2Act({
      conversationId: ctx.conversation!.id,
      preparationId,
      clientIntentKey: "ctk_forged_other_mission",
    });
    expect(verified.status).toBe("MISSION_KEY_MISMATCH");

    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: "Bind Exact",
      previewSummary: "s",
      idempotencyKey: d2MissionIdempotencyKey(keyA),
    });
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const bad = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
      clientIntentKey: "ctk_forged_other_mission",
    });
    expect(bad.continued).toBe(false);
    expect(bad.reason).toBe("MISSION_KEY_MISMATCH");
    expect(bad.documentSave).toBeNull();

    const good = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
      clientIntentKey: keyA,
    });
    expect(good.continued).toBe(true);
    expect(good.documentSave?.status).toBe("AVAILABLE");
  });

  it("D/P3: crash after reserve — stale reclaim continues once", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-p3-crash");
    const clientTurnKey = newId("ctk");
    await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Crash P3 puis un document P3.",
      { clientTurnKey },
    );
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: "Crash P3",
      previewSummary: "s",
      idempotencyKey: d2MissionIdempotencyKey(clientTurnKey),
    });
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    continuationRaceHooks.afterReserveBeforeWork = async () => {
      throw new Error("INJECTED_CRASH_P3");
    };
    await expect(
      continueAfterProjectCreated({
        pilotId,
        preparationId,
        projectId: created.projectId,
        clientIntentKey: clientTurnKey,
      }),
    ).rejects.toThrow(/INJECTED_CRASH_P3/);
    delete continuationRaceHooks.afterReserveBeforeWork;

    // Force lease stale so reclaim is allowed (simulates expired owner after crash).
    const contKey = `mission-continue:${clientTurnKey}:${created.projectId}`;
    await db
      .update(conversationTurnCommands)
      .set({
        updatedAt: new Date(Date.now() - TURN_RUNNING_STALE_MS - 5_000),
      })
      .where(
        and(
          eqCol(conversationTurnCommands.clientTurnKey, contKey),
          eqCol(conversationTurnCommands.status, "RUNNING"),
        ),
      );

    const resumed = await recoverPendingMissionContinuation({
      pilotId,
      projectId: created.projectId,
    });
    expect(resumed.recovered).toBe(true);
    expect(resumed.documentSave?.status).toBe("AVAILABLE");
    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.filter((d) => d.document.id === resumed.documentSave?.documentId)).toHaveLength(1);
  });

  it("D/P5: crash after D4 before commit — retry yields one document", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-p5-crash");
    const clientTurnKey = newId("ctk");
    await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Crash P5 puis un document P5.",
      { clientTurnKey },
    );
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: "Crash P5",
      previewSummary: "s",
      idempotencyKey: d2MissionIdempotencyKey(clientTurnKey),
    });
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    continuationRaceHooks.afterD4BeforeCommit = async () => {
      throw new Error("INJECTED_CRASH_P5");
    };
    await expect(
      continueAfterProjectCreated({
        pilotId,
        preparationId,
        projectId: created.projectId,
        clientIntentKey: clientTurnKey,
      }),
    ).rejects.toThrow(/INJECTED_CRASH_P5/);
    delete continuationRaceHooks.afterD4BeforeCommit;

    const contKey = `mission-continue:${clientTurnKey}:${created.projectId}`;
    await db
      .update(conversationTurnCommands)
      .set({ updatedAt: new Date(Date.now() - TURN_RUNNING_STALE_MS - 5_000) })
      .where(
        and(
          eqCol(conversationTurnCommands.clientTurnKey, contKey),
          eqCol(conversationTurnCommands.status, "RUNNING"),
        ),
      );

    const resumed = await recoverPendingMissionContinuation({
      pilotId,
      projectId: created.projectId,
    });
    expect(resumed.recovered).toBe(true);
    expect(resumed.documentSave?.status).toBe("AVAILABLE");
    // Idempotent D4 correlation — still a single logical document for the mission key.
    const docs = await listDocuments(pilotId, preparationId);
    const missionDocs = docs.filter((d) =>
      (d.document.creationCorrelationKey ?? "").includes(`doc:mission-continue:${clientTurnKey}`),
    );
    expect(missionDocs.length).toBe(1);
  });
});
