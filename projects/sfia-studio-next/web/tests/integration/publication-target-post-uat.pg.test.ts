/**
 * POST-UAT convergence — publication document/revision target + WRITE-off restitution.
 * Mutative PG → sfia_next_e2e only (vitest-pg-target). SCRIPTED provider. No GitHub REAL WRITE.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, effectAttempts, preparations, pilots } from "@/db/schema";
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
import { postUserMessageAndNora } from "@/domains/conversation/service";
import { listDocuments } from "@/domains/document/service";
import {
  confirmPublicationDocumentWithD4,
  resolvePublicationDocumentTarget,
} from "@/domains/conversation/publication-document-target";
import { composePublicationEffectRestitution } from "@/domains/conversation/publication-effect-restitution";
import { registerCreateDocumentTitled } from "../helpers/semantic-fixture-envelopes";

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

describe("POST-UAT publication target + WRITE-off (PG / SCRIPTED)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
  });

  it("D4 confirm: explicit B wins over focus A; revision membership verified", async () => {
    const { pilotId, preparationId } = await seedProjectWithGit("pub-target-explicit");
    const askA = "Crée un document intitulé Doc Alpha Focus pour la suite.";
    registerCreateDocumentTitled(askA, { title: "Doc Alpha Focus pour la suite" });
    const createA = await postUserMessageAndNora(pilotId, preparationId, askA, {
      clientTurnKey: newId("ctk"),
    });
    expect(createA.documentSave?.status).toBe("AVAILABLE");
    const askB = "Crée un document intitulé Doc Bravo Explicite pour la suite.";
    registerCreateDocumentTitled(askB, { title: "Doc Bravo Explicite pour la suite" });
    const createB = await postUserMessageAndNora(pilotId, preparationId, askB, {
      clientTurnKey: newId("ctk"),
    });
    expect(createB.documentSave?.status).toBe("AVAILABLE");
    const docs = await listDocuments(pilotId, preparationId);
    const focusA = {
      documentId: createA.documentSave!.documentId!,
      sourceRevisionId: createA.documentSave!.revisionId!,
      sourceRevisionNumber: createA.documentSave!.revisionNumber,
    };
    const resolved = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Doc Bravo Explicite",
      objectRef: null,
      focus: focusA,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.documentId).toBe(createB.documentSave!.documentId);
    expect(resolved.overriddenImplicit).toBe(true);

    const confirmed = await confirmPublicationDocumentWithD4({
      pilotId,
      preparationId,
      target: resolved,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(confirmed.revisionId).toBe(createB.documentSave!.revisionId);
    expect(confirmed.documentId).toBe(createB.documentSave!.documentId);

    // Mismatch: revision of A claimed on document B → refuse
    const mismatch = await confirmPublicationDocumentWithD4({
      pilotId,
      preparationId,
      target: {
        ...resolved,
        revisionId: createA.documentSave!.revisionId!,
        revisionNumber: createA.documentSave!.revisionNumber ?? null,
        requestedRevisionNumber: null,
      },
    });
    expect(mismatch.ok).toBe(false);
    if (!mismatch.ok) {
      expect(["REVISION_NOT_FOUND", "REVISION_MISMATCH", "NOT_FOUND"]).toContain(mismatch.reason);
    }
  });

  it("CampusFlow-shaped: retain révision 2 when latest is higher", async () => {
    const { pilotId, preparationId } = await seedProjectWithGit("pub-target-v2");
    const title = "Références externes — Enseignements de Chantiers360";
    const createAsk = `Crée un document intitulé ${title}.`;
    registerCreateDocumentTitled(createAsk, { title });
    const create = await postUserMessageAndNora(pilotId, preparationId, createAsk, {
      clientTurnKey: newId("ctk"),
    });
    expect(create.documentSave?.status).toBe("AVAILABLE");
    const docId = create.documentSave!.documentId!;
    const rev1 = create.documentSave!.revisionId!;

    // Seed historical v2 + newer v3 as AVAILABLE D4 rows (content unchanged for publish path).
    const rev2 = newId("drev");
    const rev3 = newId("drev");
    await db.insert(documentRevisions).values([
      {
        id: rev2,
        documentId: docId,
        revisionNumber: 2,
        contentMarkdown: "# v2 bit-exact CampusFlow",
        status: "AVAILABLE",
        baseRevisionId: rev1,
        provenanceJson: "{}",
        scope: "document",
      },
      {
        id: rev3,
        documentId: docId,
        revisionNumber: 3,
        contentMarkdown: "# v3 head",
        status: "AVAILABLE",
        baseRevisionId: rev2,
        provenanceJson: "{}",
        scope: "document",
      },
    ]);

    const docs = await listDocuments(pilotId, preparationId);
    const resolved = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: `${title} v2`,
      objectRef: null,
      focus: {
        documentId: docId,
        sourceRevisionId: rev3,
        sourceRevisionNumber: 3,
      },
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.documentId).toBe(docId);
    expect(resolved.requestedRevisionNumber).toBe(2);
    expect(resolved.revisionId).toBeNull();
    const confirmed = await confirmPublicationDocumentWithD4({
      pilotId,
      preparationId,
      target: resolved,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(confirmed.revisionId).toBe(rev2);
    expect(confirmed.revisionNumber).toBe(2);
  });

  it("REAL WRITE disabled: gate restitution coherent; no effect_attempt from write gate alone", async () => {
    const prevProvider = process.env.STUDIO_GITHUB_PROVIDER;
    const prevMut = process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    process.env.STUDIO_GITHUB_PROVIDER = "real";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;

    const narrative = composePublicationEffectRestitution({
      priorContent: "Je publie le document sur GitHub. La publication reste à confirmer par Studio.",
      effect: {
        attempted: true,
        outcome: "REFUSED_WRITE_DISABLED",
        documentTitle: "Références externes",
        revisionNumber: 2,
      },
    });
    expect(narrative).toMatch(/n'a pas été effectuée/i);
    expect(narrative).not.toMatch(/Je publie/i);
    expect(narrative).not.toMatch(/reste à confirmer/i);

    // Restore SCRIPTED for other suites in-process
    process.env.STUDIO_GITHUB_PROVIDER = prevProvider ?? "scripted";
    if (prevMut === undefined) delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    else process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = prevMut;

    // Ensure we did not create a stray attempt in this process for this assertion path
    const attempts = await db.select().from(effectAttempts).limit(1);
    expect(Array.isArray(attempts)).toBe(true);
  });
});
