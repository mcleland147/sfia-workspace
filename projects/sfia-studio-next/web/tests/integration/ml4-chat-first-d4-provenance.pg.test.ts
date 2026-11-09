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
import { turnRaceHooks } from "@/domains/conversation/turn-command";
import {
  assertSectionScope,
  extractContractualDocumentProposal,
  hasCompetingTransactionalClaim,
  hasDocumentaryWriteSignal,
  qualifyDocumentAct,
  applyTargetedSectionRevision,
} from "@/domains/conversation/document-act";

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

  it("A-R12: CREATE with Documents internes complements persists v1 (macro A+D+E)", async () => {
    const pilotId = await seedPilot("ml4-r12-create");
    const prep = await openOrCreatePreparation(pilotId);
    const ask =
      "Dans le projet CampusFlow, crée et enregistre dans les Documents internes de Studio un nouveau document de recette intitulé « RECETTE ML4 — Publication documentaire R12-FIX ».";
    expect(qualifyDocumentAct(ask).kind).toBe("CREATE");
    const chat = await postUserMessageAndNora(pilotId, prep.id, ask);
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    expect(chat.documentSave?.act).toBe("CREATE");
    expect(chat.documentSave?.revisionNumber).toBe(1);
    expect(chat.documentSave?.documentId).toBeTruthy();
    const msgs = await listMessages(pilotId, prep.id);
    const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
    expect(assistant?.content).toMatch(/Résultat applicatif D4/);
    expect(assistant?.content).toMatch(/AVAILABLE/);
    expect(assistant?.content).not.toMatch(/NOT_EXECUTED/);
    expect(await listDocuments(pilotId, prep.id)).toHaveLength(1);
  });

  it("A-N10: Nora sfia-document without authorizing CREATE → zero D4 write", async () => {
    const pilotId = await seedPilot("ml4-n10-noauth");
    const prep = await openOrCreatePreparation(pilotId);
    turnRaceHooks.replaceNoraAssistantText = () =>
      "Voici une illustration:\n\n" +
      "```sfia-document\n" +
      "# Ne doit pas être créé\n\nContenu non autorisé.\n" +
      "```\n";
    try {
      const chat = await postUserMessageAndNora(
        pilotId,
        prep.id,
        "Comment puis-je créer un document ?",
      );
      expect(qualifyDocumentAct("Comment puis-je créer un document ?").kind).toBe("NONE");
      expect(hasDocumentaryWriteSignal("Comment puis-je créer un document ?")).toBe(false);
      expect(chat.documentSave).toBeNull();
      expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
      const msgs = await listMessages(pilotId, prep.id);
      const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
      // Informative: no fabricated FAILED / no D4 AVAILABLE / no parasite NOT_EXECUTED.
      expect(assistant?.content ?? "").not.toMatch(/Statut observé: AVAILABLE/);
      expect(assistant?.content ?? "").not.toMatch(/documentId:/);
      expect(assistant?.content ?? "").not.toMatch(/NOT_EXECUTED/);
      expect(assistant?.content ?? "").not.toMatch(/Résultat applicatif \(pré-effet\)/);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });

  it("D-NOT_EXECUTED: plausible write signal + NONE → pre-effect ACK, zero D4 (service path)", async () => {
    const pilotId = await seedPilot("ml4-not-executed");
    const prep = await openOrCreatePreparation(pilotId);
    const ask = "Crée une branche Git, mais ne crée pas de document.";
    const q = qualifyDocumentAct(ask);
    expect(q.kind).toBe("NONE");
    if (q.kind === "NONE") {
      expect(q.reason).toMatch(/CREATE_OBJECT_BRIDGE_UNQUALIFIED|NEGATED_WRITE|NO_EXPLICIT/);
    }
    expect(hasDocumentaryWriteSignal(ask)).toBe(true);

    turnRaceHooks.replaceNoraAssistantText = () =>
      "Je peux décrire une branche, sans écriture documentaire.\n\n" +
      "```sfia-document\n# Ne doit pas être persisté\n\ncorps\n```\n";
    try {
      const chat = await postUserMessageAndNora(pilotId, prep.id, ask);
      expect(chat.status).toBe("COMPLETE");
      expect(chat.documentSave).toBeNull();
      expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);

      const msgs = await listMessages(pilotId, prep.id);
      const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
      const body = assistant?.content ?? "";
      expect(body).toMatch(/Résultat applicatif \(pré-effet\)/);
      expect(body).toMatch(/NOT_EXECUTED/);
      expect(body).toMatch(/non tentée/i);
      expect(body).toMatch(/n'a pas été qualifiée/i);
      expect(body).not.toMatch(/Résultat applicatif D4 \(source de vérité\)/);
      expect(body).not.toMatch(/Statut observé: AVAILABLE/);
      expect(body).not.toMatch(/Statut observé: FAILED/);
      expect(body).not.toMatch(/documentId:/);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });

  it("T2-CREATE_PLEASE: Git create + polite document show → NONE, zero D4 despite Nora fence", async () => {
    const pilotId = await seedPilot("ml4-t2-please");
    const prep = await openOrCreatePreparation(pilotId);
    const ask =
      "Crée une branche Git, puis montre-moi le document existant, s'il te plaît.";
    expect(qualifyDocumentAct(ask).kind).toBe("NONE");
    turnRaceHooks.replaceNoraAssistantText = () =>
      "Illustration:\n\n```sfia-document\n# Ne doit pas être créé\n\ncorps\n```\n";
    try {
      const chat = await postUserMessageAndNora(pilotId, prep.id, ask);
      expect(chat.documentSave).toBeNull();
      expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
      const msgs = await listMessages(pilotId, prep.id);
      const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
      const body = assistant?.content ?? "";
      expect(body).not.toMatch(/Statut observé: AVAILABLE/);
      expect(body).not.toMatch(/documentId:/);
      // Plausible write language (crée…) may yield loyal NOT_EXECUTED pre-effect, never fake FAILED D4.
      expect(body).not.toMatch(/Statut observé: FAILED/);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });

  it("C10: CREATE qualified but missing autonomous sfia-document → FAILED extract, zero D4", async () => {
    const pilotId = await seedPilot("ml4-c10-missing");
    const prep = await openOrCreatePreparation(pilotId);
    turnRaceHooks.replaceNoraAssistantText = () =>
      "Voici une proposition hors fence contractuelle.\n\n# Titre\n\nCorps non contractuel.\n";
    try {
      const ask = "Crée un document de synthèse sur C10 Missing Fence";
      expect(qualifyDocumentAct(ask).kind).toBe("CREATE");
      const chat = await postUserMessageAndNora(pilotId, prep.id, ask);
      expect(chat.documentSave?.status).toBe("FAILED");
      expect(chat.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
      expect(chat.documentSave?.documentId).toBeUndefined();
      expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
      const msgs = await listMessages(pilotId, prep.id);
      const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
      expect(assistant?.content ?? "").toMatch(/FAILED|DOCUMENT_PROPOSAL_MISSING/);
      expect(assistant?.content ?? "").not.toMatch(/NOT_EXECUTED/);
      expect(assistant?.content ?? "").not.toMatch(/Statut observé: AVAILABLE/);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
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

  it("R06 oracle: quoted title revise via postUserMessageAndNora (DET fixture)", async () => {
    const title = "Références externes — Enseignements de Chantiers360";
    // Structural twin of RECETTE v1 (numbered ATX + Source 2 + 3.2 + ordered list) — sanitized.
    const v1Body = `# ${title}

## 1. Contexte et objectif

Contexte CampusFlow.

## 2. Sources consultées et provenance disponible

### Source 1 — Première consultation : référence à compléter

| Élément | Provenance disponible |
| --- | --- |
| Chemin | docs/example.md |
| Limite | incompleteness |

### Source 2 — Definition of Done de Chantiers360

| Élément | Provenance vérifiée |
| --- | --- |
| Blob SHA | blob_example |
| Commit SHA | commit_example |

## 3. Enseignements utiles

### 3.1. Qualité

Q.

### 3.2. Traçabilité

T.

## 4. Limites de transposition

Aucune écriture GitHub.

## 5. Points à clarifier par le Pilote

1. **Première référence :** question A ?
2. **Réservation reconnue :** question B ?
`;
    const pilotId = await seedPilot("ml4-r06");
    const prep = await openOrCreatePreparation(pilotId);
    // Distractor document — must not be selected when title is explicit.
    await savePreparationDocument(
      pilotId,
      prep.id,
      "Autre note CampusFlow",
      "# Autre\n\n## Section 2 — Autre\n\nx\n",
      undefined,
      { correlationKey: newId("ck") },
    );
    const seeded = await savePreparationDocument(pilotId, prep.id, title, v1Body, undefined, {
      correlationKey: newId("ck"),
    });
    expect(seeded.status).toBe("AVAILABLE");
    if (seeded.status !== "AVAILABLE" || !seeded.documentId || !seeded.revisionId) {
      throw new Error("seed v1 failed");
    }

    const ask =
      `Nora, je souhaite réviser le document D4 existant «${title}» dans CampusFlow.\n\n` +
      `Révise uniquement sa section 2 «Sources consultées et provenance disponible».\n\n` +
      `Complète la première source consultée et corrige la distinction entre SHA de fichier et SHA de commit.\n\n` +
      `Conserve toutes les autres sections inchangées.\n\n` +
      `Je valide explicitement cette révision dans D4 uniquement.\n` +
      `Je n'autorise aucune écriture GitHub.`;

    expect(qualifyDocumentAct(ask).kind).toBe("REVISE");
    const q = qualifyDocumentAct(ask);
    if (q.kind === "REVISE") {
      expect(q.documentHint).toBe(title);
      expect(q.sectionHint).toBe("2");
    }

    const result = await postUserMessageAndNora(pilotId, prep.id, ask);
    expect(result.documentSave?.status).toBe("AVAILABLE");
    expect(result.documentSave?.act).toBe("REVISE");
    expect(result.documentSave?.documentId).toBe(seeded.documentId);
    expect(result.documentSave?.revisionNumber).toBe(2);
    expect(result.documentSave?.baseRevisionId).toBe(seeded.revisionId);

    const listed = await listDocumentRevisions(pilotId, prep.id, seeded.documentId);
    expect(listed.status).toBe("AVAILABLE");
    expect(listed.revisions.filter((r) => r.status === "AVAILABLE").map((r) => r.revisionNumber)).toEqual([
      1, 2,
    ]);
    const v1 = listed.revisions.find((r) => r.revisionNumber === 1)!;
    const v2 = listed.revisions.find((r) => r.revisionNumber === 2)!;
    expect(assertSectionScope(v1.contentMarkdown, v2.contentMarkdown, "2")).toEqual({ ok: true });
    expect(v2.contentMarkdown).toContain("## 1. Contexte et objectif");
    expect(v2.contentMarkdown).toContain("## 3. Enseignements utiles");
    expect(v2.contentMarkdown).toContain("### 3.2. Traçabilité");
    expect(v2.contentMarkdown).toContain("Aucune écriture GitHub.");
    expect(v2.contentMarkdown).toContain("2. **Réservation reconnue :** question B ?");
    // B: conversational / operational narration must not be persisted in D4.
    expect(v2.contentMarkdown).not.toMatch(/Compte rendu opérationnel — hors document/);
    expect(v2.contentMarkdown).not.toMatch(/hors fence/i);
    expect(v2.contentMarkdown).not.toMatch(/Résultat applicatif D4 \(source de vérité\)/);

    const msgs = await listMessages(pilotId, prep.id);
    const last = msgs.filter((m) => m.role === "assistant").at(-1)!;
    expect(last.content).toMatch(/```sfia-document/);
    expect(last.content).toMatch(/Résultat applicatif D4/);
    expect(last.content).toContain(seeded.documentId);
    expect(last.content).toMatch(/AVAILABLE|révision: v2/i);
    expect(
      hasCompetingTransactionalClaim(last.content, {
        act: "REVISE",
        status: "AVAILABLE",
        documentId: seeded.documentId,
        revisionNumber: 2,
      }),
    ).toBe(false);
    expect(last.content).not.toMatch(/aucune révision créée/i);
    expect(last.content).not.toMatch(/je ne peux donc pas appliquer/i);

    // Re-open v1 and v2
    const r1 = await getDocumentRevision(pilotId, prep.id, seeded.documentId, v1.id);
    const r2 = await getDocumentRevision(pilotId, prep.id, seeded.documentId, v2.id);
    expect(r1.status).toBe("AVAILABLE");
    expect(r2.status).toBe("AVAILABLE");
  });

  it("R06 nested-code: section body with inner bash fence persists bytes after the fence", async () => {
    const title = "Doc nested code ML4";
    const v1Body = `# ${title}

## 1. Intro

i

## 2. Sources consultées et provenance disponible

old

## 3. Suite

s
`;
    const pilotId = await seedPilot("ml4-nested");
    const prep = await openOrCreatePreparation(pilotId);
    const seeded = await savePreparationDocument(pilotId, prep.id, title, v1Body, undefined, {
      correlationKey: newId("ck"),
    });
    expect(seeded.status).toBe("AVAILABLE");
    if (seeded.status !== "AVAILABLE" || !seeded.documentId || !seeded.revisionId) {
      throw new Error("seed");
    }

    const assistant =
      "```sfia-document\n## 2. Sources consultées et provenance disponible\n\n" +
      "Avant.\n\n```bash\necho hello\n```\n\nAprès le bloc bash — CONSERVÉ.\n```\n\n" +
      "Compte rendu hors fence.\n";
    const extracted = extractContractualDocumentProposal(assistant);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) return;
    expect(extracted.content).toContain("Après le bloc bash — CONSERVÉ.");
    const merged = applyTargetedSectionRevision(v1Body, extracted.content, "2");
    expect(merged.ok).toBe(true);
    if (!merged.ok) return;
    expect(assertSectionScope(v1Body, merged.content, "2")).toEqual({ ok: true });

    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: seeded.documentId,
      baseRevisionId: seeded.revisionId,
      contentMarkdown: merged.content,
      correlationKey: newId("ck"),
      scope: "section",
      sectionHint: "2",
    });
    expect(v2.status).toBe("AVAILABLE");
    if (v2.status !== "AVAILABLE" || !v2.revisionId) throw new Error("v2");
    const got = await getDocumentRevision(pilotId, prep.id, seeded.documentId, v2.revisionId);
    expect(got.status).toBe("AVAILABLE");
    if (got.status !== "AVAILABLE") return;
    expect(got.revision.contentMarkdown).toContain("Après le bloc bash — CONSERVÉ.");
    expect(got.revision.contentMarkdown).toContain("```bash");
    expect(got.revision.contentMarkdown).toContain("## 3. Suite");
    expect(got.revision.contentMarkdown).not.toMatch(/Compte rendu hors fence/);
    expect(assertSectionScope(v1Body, got.revision.contentMarkdown, "2")).toEqual({ ok: true });
  });

  it("R06-neg: explicit title miss → NOT_FOUND, no phantom v2 on other doc", async () => {
    const pilotId = await seedPilot("ml4-r06miss");
    const prep = await openOrCreatePreparation(pilotId);
    const only = await savePreparationDocument(
      pilotId,
      prep.id,
      "Document unique présent",
      "# X\n\n## Section 1\n\na\n\n## Section 2\n\nb\n",
      undefined,
      { correlationKey: newId("ck") },
    );
    expect(only.status).toBe("AVAILABLE");
    const ask =
      'Révise uniquement la section 2 du document «Titre qui n\'existe pas du tout» et conserve le reste.';
    const result = await postUserMessageAndNora(pilotId, prep.id, ask);
    expect(result.documentSave?.status).toBe("FAILED");
    expect(result.documentSave?.reason).toMatch(/REVISE_NOT_FOUND/);
    const docs = await listDocuments(pilotId, prep.id);
    expect(docs).toHaveLength(1);
    expect(docs[0]!.latestRevision?.revisionNumber).toBe(1);
  });

  it("B-iso-neg CREATE: nested illustrative sfia-document → FAILED MISSING, zero D4 write", async () => {
    const pilotId = await seedPilot("ml4-iso-create");
    const prep = await openOrCreatePreparation(pilotId);
    turnRaceHooks.replaceNoraAssistantText = () =>
      "Je peux illustrer la syntaxe:\n\n" +
      "````markdown\n" +
      "```sfia-document\n" +
      "# Document fictif imbriqué\n\n" +
      "Ne doit jamais être persisté.\n" +
      "```\n" +
      "````\n";
    try {
      const chat = await postUserMessageAndNora(
        pilotId,
        prep.id,
        "Rédige un document de synthèse sur Isolation Create",
      );
      expect(chat.documentSave?.status).toBe("FAILED");
      expect(chat.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
      expect(chat.documentSave?.act).toBe("CREATE");
      expect(chat.documentSave?.documentId).toBeUndefined();
      expect(chat.documentSave?.revisionId).toBeUndefined();
      expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
      const msgs = await listMessages(pilotId, prep.id);
      const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
      expect(assistant?.content).not.toMatch(/enregistré avec succès/i);
      expect(assistant?.content ?? "").toMatch(/DOCUMENT_PROPOSAL_MISSING|non enregistré|FAILED|proposition/i);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });

  it("B-iso-neg REVISE: nested illustrative sfia-document → FAILED MISSING, doc unchanged at v1", async () => {
    const pilotId = await seedPilot("ml4-iso-revise");
    const prep = await openOrCreatePreparation(pilotId);
    const seeded = await savePreparationDocument(
      pilotId,
      prep.id,
      "Doc isolation revise",
      "# Doc isolation revise\n\n## Section 1\n\na\n\n## Section 2\n\nb original\n\n## Section 3\n\nc\n",
      undefined,
      { correlationKey: newId("ck") },
    );
    expect(seeded.status).toBe("AVAILABLE");
    if (seeded.status !== "AVAILABLE" || !seeded.documentId || !seeded.revisionId) {
      throw new Error("seed AVAILABLE required");
    }
    const documentId = seeded.documentId;
    const v1Body = await getDocumentRevision(pilotId, prep.id, documentId, seeded.revisionId);
    expect(v1Body.status).toBe("AVAILABLE");
    if (v1Body.status !== "AVAILABLE") return;

    turnRaceHooks.replaceNoraAssistantText = () =>
      "Exemple de révision:\n\n" +
      "````markdown\n" +
      "```sfia-document\n" +
      "## Section 2 — Contenu révisé\n\n" +
      "corps fictif imbriqué\n" +
      "```\n" +
      "````\n";
    try {
      const revised = await postUserMessageAndNora(
        pilotId,
        prep.id,
        `Révise uniquement la section 2 du document ${documentId} et conserve le reste`,
      );
      expect(revised.documentSave?.status).toBe("FAILED");
      expect(revised.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
      expect(revised.documentSave?.act).toBe("REVISE");
      const listed = await listDocumentRevisions(pilotId, prep.id, documentId);
      expect(listed.status).toBe("AVAILABLE");
      expect(listed.revisions).toHaveLength(1);
      expect(listed.revisions[0]!.revisionNumber).toBe(1);
      expect(listed.revisions[0]!.contentMarkdown).toBe(v1Body.revision.contentMarkdown);
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });

  it("B-iso-pos: autonomous proposal beside illustrative example → single D4 CREATE", async () => {
    const pilotId = await seedPilot("ml4-iso-pos");
    const prep = await openOrCreatePreparation(pilotId);
    turnRaceHooks.replaceNoraAssistantText = () =>
      "Exemple illustratif (à ignorer):\n\n" +
      "````markdown\n```sfia-document\n# Fake\n\nx\n```\n````\n\n" +
      "Proposition autonome:\n\n" +
      "```sfia-document\n" +
      "# Synthèse isolation positive\n\n" +
      "## Section 1 — Contexte\n\nContexte.\n\n" +
      "## Section 2 — Analyse\n\nAnalyse réelle.\n\n" +
      "## Section 3 — Suite\n\nSuite.\n" +
      "```\n\n" +
      "Compte rendu hors fence: non documentaire.\n";
    try {
      const chat = await postUserMessageAndNora(
        pilotId,
        prep.id,
        "Rédige un document de synthèse sur Isolation Positive",
      );
      expect(chat.documentSave?.status).toBe("AVAILABLE");
      expect(chat.documentSave?.act).toBe("CREATE");
      expect(chat.documentSave?.revisionNumber).toBe(1);
      const docs = await listDocuments(pilotId, prep.id);
      expect(docs).toHaveLength(1);
      const rev = await getDocumentRevision(
        pilotId,
        prep.id,
        chat.documentSave!.documentId!,
        chat.documentSave!.revisionId!,
      );
      expect(rev.status).toBe("AVAILABLE");
      if (rev.status !== "AVAILABLE") return;
      expect(rev.revision.contentMarkdown).toContain("# Synthèse isolation positive");
      expect(rev.revision.contentMarkdown).toContain("Analyse réelle");
      expect(rev.revision.contentMarkdown).not.toContain("# Fake");
      expect(rev.revision.contentMarkdown).not.toContain("Compte rendu hors fence");
    } finally {
      delete turnRaceHooks.replaceNoraAssistantText;
    }
  });
});
