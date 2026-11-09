import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  completeGitHubAuthorization,
  startGitHubAuthorization,
} from "@/domains/integrations/authorization-service";
import { attachRepositoryToProject } from "@/domains/integrations/project-link-service";
import {
  listGitRefs,
  readGitFile,
} from "@/domains/integrations/resource-service";
import {
  getScriptedGitHubProvider,
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";
import {
  getDocumentRevision,
  listDocumentRevisions,
  listDocuments,
  reviseDocument,
  savePreparationDocument,
} from "@/domains/document/service";
import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedProject(label: string) {
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
  return { pilotId, projectId: created.projectId, preparationId: prep.id };
}

describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
  });

  it("A: conversational CREATE persists v1 and ACK appears in assistant message", async () => {
    const pilotId = await seedPilot("ml4-create");
    const prep = await openOrCreatePreparation(pilotId);
    const chat = await postUserMessageAndNora(
      pilotId,
      prep.id,
      "Rédige un document de synthèse sur les options A et B",
    );
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    expect(chat.documentSave?.act).toBe("CREATE");
    expect(chat.documentSave?.revisionNumber).toBe(1);
    expect(chat.documentSave?.documentId).toBeTruthy();

    const msgs = await listMessages(pilotId, prep.id);
    const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
    expect(assistant?.content).toMatch(/Résultat applicatif D4/);
    expect(assistant?.content).toContain(chat.documentSave!.documentId!);
    expect(assistant?.content).not.toMatch(/non enregistré/i);

    const docs = await listDocuments(pilotId, prep.id);
    expect(docs).toHaveLength(1);
    expect(docs[0]!.latestRevision?.revisionNumber).toBe(1);
  });

  it("A-neg: analytical chatter does not create a document", async () => {
    const pilotId = await seedPilot("ml4-nochatter");
    const prep = await openOrCreatePreparation(pilotId);
    const chat = await postUserMessageAndNora(
      pilotId,
      prep.id,
      "Compare les options sans produire de livrable",
    );
    expect(chat.documentSave == null || chat.documentSave.status !== "AVAILABLE").toBe(true);
    expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
  });

  it("A-neg2: imperative negation and informative questions do not mutate D4", async () => {
    const pilotId = await seedPilot("ml4-noneg");
    const prep = await openOrCreatePreparation(pilotId);
    for (const text of [
      "Ne crée pas de document pour cette recherche.",
      "Comment réviser le document sans le modifier ?",
      "Ne révise pas le document ; explique-moi seulement ce que tu changerais.",
    ]) {
      const chat = await postUserMessageAndNora(pilotId, prep.id, text);
      expect(chat.documentSave == null || chat.documentSave.status !== "AVAILABLE").toBe(true);
    }
    expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
  });

  it("B: conversational REVISE keeps same documentId, produces v2, scopes section 2", async () => {
    const pilotId = await seedPilot("ml4-revise");
    const prep = await openOrCreatePreparation(pilotId);
    const created = await postUserMessageAndNora(
      pilotId,
      prep.id,
      "Rédige un document de synthèse sur Atlas",
    );
    expect(created.documentSave?.status).toBe("AVAILABLE");
    const documentId = created.documentSave!.documentId!;
    const listed = await listDocumentRevisions(pilotId, prep.id, documentId);
    expect(listed.status).toBe("AVAILABLE");
    const v1 = listed.revisions.find((r) => r.revisionNumber === 1);
    expect(v1?.status).toBe("AVAILABLE");

    const revised = await postUserMessageAndNora(
      pilotId,
      prep.id,
      `Révise uniquement la section 2 du document ${documentId} et conserve le reste`,
    );
    expect(revised.documentSave?.status).toBe("AVAILABLE");
    expect(revised.documentSave?.act).toBe("REVISE");
    expect(revised.documentSave?.documentId).toBe(documentId);
    expect(revised.documentSave?.revisionNumber).toBe(2);
    expect(revised.documentSave?.baseRevisionId).toBe(v1!.id);

    const v2 = await getDocumentRevision(
      pilotId,
      prep.id,
      documentId,
      revised.documentSave!.revisionId!,
    );
    expect(v2.status).toBe("AVAILABLE");
    if (v2.status !== "AVAILABLE") throw new Error("expected AVAILABLE revision");
    expect(v2.revision.revisionNumber).toBe(2);
    expect(v2.revision.contentMarkdown).toMatch(/Section 1/i);
    expect(v2.revision.contentMarkdown).toMatch(/Section 3/i);
    // Exact outside-scope bytes preserved vs v1.
    const { applyTargetedSectionRevision, assertSectionScope } = await import(
      "@/domains/conversation/document-act"
    );
    const probe = applyTargetedSectionRevision(
      v1!.contentMarkdown,
      "## Section 2 — Analyse\n\nprobe\n",
      "2",
    );
    expect(probe.ok).toBe(true);
    if (probe.ok) {
      expect(assertSectionScope(v1!.contentMarkdown, v2.revision.contentMarkdown, "2")).toEqual({
        ok: true,
      });
    }

    const msgs = await listMessages(pilotId, prep.id);
    const last = msgs.filter((m) => m.role === "assistant").at(-1);
    expect(last?.content).toMatch(/Résultat applicatif D4/);
    expect(last?.content).toMatch(/REVISE/);
    expect(last?.content).not.toMatch(/\bnon enregistré\b/i);
  });

  it("B2: exact whitespace outside revised section is preserved in DB", async () => {
    const pilotId = await seedPilot("ml4-ws");
    const prep = await openOrCreatePreparation(pilotId);
    const weird = `# Doc

## Section 1 — Contexte

Ligne A.

Ligne   B   double.


## Section 2 — Analyse

Ancien.

## Section 3 — Suite

Fin.
`;
    const v1 = await savePreparationDocument(pilotId, prep.id, "Weird", weird, undefined, {
      correlationKey: newId("ck"),
    });
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE" || !v1.documentId || !v1.revisionId) throw new Error("v1");

    const { applyTargetedSectionRevision } = await import("@/domains/conversation/document-act");
    const merged = applyTargetedSectionRevision(
      weird,
      "## Section 2 — Analyse\n\nNouveau.\n",
      "2",
    );
    expect(merged.ok).toBe(true);
    if (!merged.ok) return;

    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: merged.content,
      correlationKey: newId("ck"),
      scope: "section",
      sectionHint: "2",
    });
    expect(v2.status).toBe("AVAILABLE");
    if (v2.status !== "AVAILABLE" || !v2.revisionId) throw new Error("v2");
    const got = await getDocumentRevision(pilotId, prep.id, v1.documentId, v2.revisionId);
    expect(got.status).toBe("AVAILABLE");
    if (got.status !== "AVAILABLE") return;
    expect(got.revision.contentMarkdown).toContain("Ligne   B   double.");
    expect(got.revision.contentMarkdown).toContain("Ligne A.\n\nLigne   B   double.\n\n\n## Section 2");
    expect(got.revision.contentMarkdown).toContain("## Section 3 — Suite\n\nFin.\n");
  });

  it("C: stale baseRevisionId → CONFLICT without phantom v2; retry idempotent", async () => {
    const pilotId = await seedPilot("ml4-stale");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Spec", "# S\n\n## Section 1\n\na\n\n## Section 2\n\nb\n", undefined, {
      correlationKey: newId("ck"),
    });
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE" || !v1.documentId || !v1.revisionId) {
      throw new Error("v1 unavailable");
    }
    const documentId = v1.documentId;
    const baseId = v1.revisionId;

    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId,
      baseRevisionId: baseId,
      contentMarkdown: "# S\n\n## Section 1\n\na\n\n## Section 2\n\nb2\n",
      correlationKey: newId("ck"),
    });
    expect(v2.status).toBe("AVAILABLE");
    if (v2.status !== "AVAILABLE" || !v2.revisionId) throw new Error("v2 unavailable");

    const stale = await reviseDocument(pilotId, prep.id, {
      documentId,
      baseRevisionId: baseId,
      contentMarkdown: "# S\n\n## Section 1\n\na\n\n## Section 2\n\bstale\n",
      correlationKey: newId("ck"),
    });
    expect(stale.status).toBe("CONFLICT");
    expect("reason" in stale && stale.reason).toBe("BASE_STALE");

    const revs = await db
      .select()
      .from(documentRevisions)
      .where(eq(documentRevisions.documentId, documentId));
    expect(revs.filter((r) => r.status === "AVAILABLE").map((r) => r.revisionNumber).sort()).toEqual([
      1, 2,
    ]);

    const key = `docrev:idem:${documentId}:${v2.revisionId}`;
    const first = await reviseDocument(pilotId, prep.id, {
      documentId,
      baseRevisionId: v2.revisionId,
      contentMarkdown: "# S\n\n## Section 1\n\na\n\n## Section 2\n\bv3\n",
      correlationKey: key,
    });
    const again = await reviseDocument(pilotId, prep.id, {
      documentId,
      baseRevisionId: v2.revisionId,
      contentMarkdown: "# S\n\n## Section 1\n\na\n\n## Section 2\n\bv3\n",
      correlationKey: key,
    });
    expect(first.status).toBe("AVAILABLE");
    expect(again.status).toBe("AVAILABLE");
    if (first.status !== "AVAILABLE" || again.status !== "AVAILABLE") {
      throw new Error("idempotent revise unavailable");
    }
    expect(again.idempotentReplay).toBe(true);
    expect(again.revisionId).toBe(first.revisionId);
  });

  it("D: readGitFile distinguishes blobSha vs commitSha; candidate ref + permalink", async () => {
    const { pilotId, projectId } = await seedProject("ml4-prov");
    const sessionId = newId("sid");
    const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    const status = await completeGitHubAuthorization({
      pilotId,
      state,
      studioSessionId: sessionId,
    });
    const repoId = status.repositories[0]!.id;
    await attachRepositoryToProject(pilotId, projectId, repoId);

    const provider = getScriptedGitHubProvider();
    const fullName = status.repositories[0]!.fullName;
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    await provider.createBranch(pilotId, fullName, "feat/candidate-ml4", mainSha);
    // Copy README onto candidate head so read succeeds at branch tip.
    const mainFile = await provider.getFileContent(pilotId, fullName, "README.md", mainSha);
    await provider.putFileContents({
      pilotId,
      fullName,
      path: "README.md",
      branch: "feat/candidate-ml4",
      message: "seed candidate",
      content: mainFile.content + "\n# candidate mark\n",
    });

    const mainRead = await readGitFile({
      pilotId,
      projectId,
      repositoryId: repoId,
      path: "README.md",
      ref: "main",
    });
    expect(mainRead.provenance.blobSha).toMatch(/^[0-9a-f]{40}$/i);
    expect(mainRead.provenance.commitSha).toMatch(/^[0-9a-f]{40}$/i);
    expect(mainRead.provenance.blobSha).not.toBe(mainRead.provenance.commitSha);
    expect(mainRead.provenance.commitShaVerified).toBe(true);
    expect(mainRead.provenance.permalink).toBe(
      `https://github.com/${fullName}/blob/${mainRead.provenance.commitSha}/README.md`,
    );
    expect(mainRead.provenance.permalink).not.toContain(mainRead.provenance.blobSha);

    const cand = await readGitFile({
      pilotId,
      projectId,
      repositoryId: repoId,
      path: "README.md",
      ref: "feat/candidate-ml4",
    });
    expect(cand.provenance.commitShaVerified).toBe(true);
    expect(cand.provenance.commitSha).not.toBe(mainRead.provenance.commitSha);
    expect(cand.content).toMatch(/candidate mark/);

    const refs = await listGitRefs({
      pilotId,
      projectId,
      repositoryId: repoId,
      refPrefix: "feat/",
    });
    expect(refs.refs.some((r) => r.name === "feat/candidate-ml4")).toBe(true);
    expect(refs.refs.every((r) => r.sha.length === 40)).toBe(true);
  });
});
