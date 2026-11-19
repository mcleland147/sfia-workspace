import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  governanceRestrictions,
  humanDecisions,
  knowledgeOpenPointEvents,
  knowledgeOpenPoints,
  pilots,
  preparations,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  capitalizeAcquis,
  ensureSubject,
  maybeCapitalizeFromExchange,
  openPoint,
} from "@/domains/knowledge/service";
import {
  appendDecisionExplanationRevision,
  appendSubjectSummaryRevision,
  getCurrentDecisionExplanation,
  getCurrentSubjectSummary,
  getJournalProjection,
  listProjectKnowledge,
  reopenOpenPoint,
  reparentSubject,
  resolveOpenPointFactually,
  searchJournalDecisions,
  searchJournalSubjects,
} from "@/domains/knowledge/journal";
import {
  markOpenPointReactivated,
  selectOpenPointsForReactivation,
} from "@/domains/knowledge/journal-cognition";
import {
  insertHumanDecision,
  insertRestriction,
  markDecisionState,
} from "@/domains/decisions/service";
import { savePreparationDocument } from "@/domains/document/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedLinkedProject(pilotId: string, name: string) {
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, name, "Journal delivery test");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "Journal delivery test",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`project create failed: ${created.status}`);
  }
  return { prep, projectId: created.projectId! };
}

describe("Journal D4 revisions (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    if (process.env.DATABASE_URL.includes("sfia_next_e2e")) {
      expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    }
  });

  it("ensureSubject reuses title only under same parent", async () => {
    const pilotId = await seedPilot("J-homonym");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Homonymes");
    const parent = await ensureSubject(pilotId, prep.id, "Thème parent");
    const leafA = await ensureSubject(pilotId, prep.id, "Traçabilité", parent.subjectId);
    const leafB = await ensureSubject(pilotId, prep.id, "Traçabilité", null);
    expect(leafA.status).toBe("AVAILABLE");
    expect(leafB.status).toBe("AVAILABLE");
    expect(leafA.subjectId).not.toBe(leafB.subjectId);

    const bundle = await listProjectKnowledge(pilotId, projectId);
    expect(bundle.subjects.filter((s) => s.title === "Traçabilité")).toHaveLength(2);
  });

  it("summary revisions are immutable and idempotent by operationId", async () => {
    const pilotId = await seedPilot("J-summary");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Synthèse");
    const subj = await ensureSubject(pilotId, prep.id, "Synthèse cible");
    const op = "op-summary-1";
    const first = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
      summaryMarkdown: "Synthèse durable sur la traçabilité des décisions du projet.",
      provenance: { sourceKind: "pilot", sourceId: "msg-1", epistemic: "established" },
      operationId: op,
    });
    expect(first.status).toBe("AVAILABLE");
    const replay = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
      summaryMarkdown: "Autre texte qui ne doit pas créer une deuxième écriture.",
      provenance: { sourceKind: "pilot", sourceId: "msg-2" },
      operationId: op,
    });
    expect(replay.status).toBe("AVAILABLE");
    expect("idempotentReplay" in replay && replay.idempotentReplay).toBe(true);
    const current = await getCurrentSubjectSummary(pilotId, projectId, subj.subjectId!);
    expect(current.status).toBe("AVAILABLE");
    expect(current.summary?.revisionNumber).toBe(1);
    expect(current.summary?.summaryMarkdown).toContain("traçabilité");
  });

  it("factual open-point resolve and reopen keep D4 events", async () => {
    const pilotId = await seedPilot("J-open");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Points");
    const subj = await ensureSubject(pilotId, prep.id, "Questions");
    const pt = await openPoint(pilotId, prep.id, {
      statement: "Quelle preuve pour la connexion GitHub?",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-open-1" },
    });
    expect(pt.status).toBe("AVAILABLE");

    const fake = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
      reason: "Documentation fictive",
      provenance: { sourceKind: "document", sourceId: "doc-proof-1", epistemic: "established" },
      operationId: "resolve-fake-1",
    });
    expect(fake.status).toBe("FAILED");
    expect("reason" in fake && fake.reason).toBe("DOCUMENT_SOURCE_INACCESSIBLE");

    const doc = await savePreparationDocument(
      pilotId,
      prep.id,
      "Preuve officielle",
      "# preuve\nContenu réel AVAILABLE.",
      undefined,
      { correlationKey: `proof-${pt.openPointId}`, provenance: { sourceKind: "pilot" } },
    );
    expect(doc.status).toBe("AVAILABLE");
    const revisionId = "revisionId" in doc ? String(doc.revisionId) : "";

    const resolved = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
      reason: "Documentation officielle citée",
      provenance: { sourceKind: "revision", sourceId: revisionId, epistemic: "established" },
      operationId: "resolve-op-1",
    });
    expect(resolved.status).toBe("AVAILABLE");
    const row = (
      await db.select().from(knowledgeOpenPoints).where(eq(knowledgeOpenPoints.id, pt.openPointId!))
    )[0];
    expect(row.status).toBe("RESOLVED");

    const reopened = await reopenOpenPoint(pilotId, projectId, pt.openPointId!, {
      reason: "Nouvelle contradiction",
      provenance: { sourceKind: "message", sourceId: "m-contra-1" },
      operationId: "reopen-op-1",
    });
    expect(reopened.status).toBe("AVAILABLE");
    expect(
      (await db.select().from(knowledgeOpenPoints).where(eq(knowledgeOpenPoints.id, pt.openPointId!)))[0]
        .status,
    ).toBe("OPEN");
  });

  it("reparent refuses cycles", async () => {
    const pilotId = await seedPilot("J-tree");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Arbre");
    const root = await ensureSubject(pilotId, prep.id, "Racine");
    const child = await ensureSubject(pilotId, prep.id, "Enfant", root.subjectId);
    const cycle = await reparentSubject(pilotId, projectId, root.subjectId!, child.subjectId!);
    expect(cycle.status).toBe("FAILED");
    if (cycle.status !== "FAILED") throw new Error("expected FAILED");
    expect(cycle.reason).toBe("CYCLE_OR_INVALID_TREE");
  });

  it("searchJournalSubjects matches acquis text, not only titles", async () => {
    const pilotId = await seedPilot("J-search");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Recherche");
    const subj = await ensureSubject(pilotId, prep.id, "Titre neutre");
    await capitalizeAcquis(pilotId, prep.id, {
      statement: "Le mot-clé traçabilité apparaît uniquement dans cet acquis capitalisé.",
      kind: "HYPOTHESIS",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "hypothesized" },
    });
    const hits = await searchJournalSubjects(pilotId, projectId, "traçabilité");
    expect(hits.results.some((r) => r.matchKind === "acquis")).toBe(true);
  });

  it("decision explanation is narrative only and can go stale after D6 state change", async () => {
    const pilotId = await seedPilot("J-d6");
    const { projectId } = await seedLinkedProject(pilotId, "Décisions");
    const decisionId = await db.transaction(async (tx) =>
      insertHumanDecision(tx, {
        projectId,
        pilotId,
        sourceKind: "pilotage",
        sourceRef: "cmd-test",
        kind: "TRAJECTORY",
        objectRef: "traj",
        statement: "Acte applicable initial pour test journal",
      }),
    );
    const wrote = await appendDecisionExplanationRevision(pilotId, projectId, decisionId, {
      explanationMarkdown:
        "Contexte long : alternatives envisagées, compromis et limites explicitement sourcées ici.",
      provenance: { sourceKind: "message", sourceId: "m-exp-1", epistemic: "observed" },
      operationId: "exp-op-1",
    });
    expect(wrote.status).toBe("AVAILABLE");
    const fresh = await getCurrentDecisionExplanation(pilotId, projectId, decisionId);
    expect(fresh.status).toBe("AVAILABLE");
    expect(fresh.explanation?.potentiallyStale).toBe(false);

    await db.transaction(async (tx) => markDecisionState(tx, decisionId, "REVISED"));
    const after = await getCurrentDecisionExplanation(pilotId, projectId, decisionId);
    expect(after.explanation?.potentiallyStale).toBe(true);

    const decisionSearch = await searchJournalDecisions(pilotId, projectId, "alternatives");
    expect(decisionSearch.results.some((r) => r.matchKind === "explanation")).toBe(true);

    const act = (await db.select().from(humanDecisions).where(eq(humanDecisions.id, decisionId)))[0];
    expect(act.state).toBe("REVISED");
  });

  it("J-C04 reactivation selects intent-matching OPEN points with cooldown", async () => {
    const pilotId = await seedPilot("J-react");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Réactivation");
    const subj = await ensureSubject(pilotId, prep.id, "GitHub");
    const pt = await openPoint(pilotId, prep.id, {
      statement: "Quelle preuve pour la connexion GitHub du dépôt officiel?",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-react-1" },
    });
    expect(pt.status).toBe("AVAILABLE");
    const first = await selectOpenPointsForReactivation(
      pilotId,
      projectId,
      "On reparle de la preuve GitHub pour avancer",
    );
    expect(first.candidates.some((c) => c.openPointId === pt.openPointId)).toBe(true);

    const marked = await markOpenPointReactivated(pilotId, projectId, pt.openPointId!, {
      reason: "réintroduit dans le contexte courant",
      provenance: { sourceKind: "nora", generationId: "gen-r1" },
      operationId: "react-op-1",
    });
    expect(marked.status).toBe("AVAILABLE");

    const cooled = await selectOpenPointsForReactivation(
      pilotId,
      projectId,
      "preuve GitHub encore pertinente",
      { now: new Date() },
    );
    expect(cooled.candidates.some((c) => c.openPointId === pt.openPointId)).toBe(false);
  });

  it("J-C05 factual resolve leaves ACTIVE D6 restriction untouched", async () => {
    const pilotId = await seedPilot("J-d6-restr");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Restriction");
    const decisionId = await db.transaction(async (tx) =>
      insertHumanDecision(tx, {
        projectId,
        pilotId,
        sourceKind: "pilotage",
        sourceRef: "cmd-restr",
        kind: "RISK_ACCEPTANCE",
        objectRef: "risk",
        statement: "Risque accepté sous restriction ACTIVE",
      }),
    );
    const restrictionId = await db.transaction(async (tx) =>
      insertRestriction(tx, {
        projectId,
        targetKind: "ACTION",
        targetRef: "publish",
        originDecisionId: decisionId,
      }),
    );
    const subj = await ensureSubject(pilotId, prep.id, "Publication");
    const pt = await openPoint(pilotId, prep.id, {
      statement: "Le détail technique de publication est-il documenté?",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-restr-1" },
    });
    const doc = await savePreparationDocument(
      pilotId,
      prep.id,
      "Tech publish",
      "# tech\nRéel.",
      undefined,
      { correlationKey: `restr-doc-${pt.openPointId}`, provenance: { sourceKind: "pilot" } },
    );
    const revisionId = "revisionId" in doc ? String(doc.revisionId) : "";
    const resolved = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
      reason: "Document technique trouvé",
      provenance: { sourceKind: "revision", sourceId: revisionId, epistemic: "established" },
      operationId: "resolve-restr-1",
    });
    expect(resolved.status).toBe("AVAILABLE");
    const restr = (
      await db
        .select()
        .from(governanceRestrictions)
        .where(eq(governanceRestrictions.id, restrictionId))
    )[0];
    expect(restr.status).toBe("ACTIVE");
  });

  it("J-C06 honesty gate skips overclaiming summary when contradiction open", async () => {
    const pilotId = await seedPilot("J-honest");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Honnêteté");
    const subj = await ensureSubject(pilotId, prep.id, "Connexion");
    await capitalizeAcquis(pilotId, prep.id, {
      statement: "La connexion GitHub est établie pour ce projet durable.",
      kind: "HYPOTHESIS",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-h1", epistemic: "observed" },
    });
    await capitalizeAcquis(pilotId, prep.id, {
      statement: "La connexion GitHub n'est pas établie pour ce projet durable.",
      kind: "HYPOTHESIS",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-h2", epistemic: "observed" },
    });
    const skipped = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
      summaryMarkdown: "Il est établi que la connexion GitHub fonctionne sans réserve.",
      provenance: { sourceKind: "nora", generationId: "g-h1", epistemic: "established" },
      operationId: "sum-overclaim",
    });
    expect(skipped.status).toBe("SKIPPED");

    const ok = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
      summaryMarkdown:
        "Contradiction ouverte sur la connexion GitHub — incertitude à clarifier avant conclusion.",
      provenance: { sourceKind: "nora", generationId: "g-h2", epistemic: "limited" },
      operationId: "sum-honest",
    });
    expect(ok.status).toBe("AVAILABLE");
  });

  it("J-C07 / J-C09 projection isolates foreign project and exposes applicability", async () => {
    const pilotA = await seedPilot("J-iso-a");
    const pilotB = await seedPilot("J-iso-b");
    const a = await seedLinkedProject(pilotA, "Projet A iso");
    const b = await seedLinkedProject(pilotB, "Projet B iso");
    const subj = await ensureSubject(pilotA, a.prep.id, "Secret A");
    await capitalizeAcquis(pilotA, a.prep.id, {
      statement: "Acquis privé du projet A jamais visible ailleurs.",
      kind: "HYPOTHESIS",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "observed" },
    });
    await expect(listProjectKnowledge(pilotB, a.projectId)).rejects.toMatchObject({
      code: "NOT_FOUND",
    });
    const other = await listProjectKnowledge(pilotB, b.projectId);
    expect(other.subjects.every((s) => s.title !== "Secret A")).toBe(true);

    const decisionId = await db.transaction(async (tx) =>
      insertHumanDecision(tx, {
        projectId: a.projectId,
        pilotId: pilotA,
        sourceKind: "pilotage",
        sourceRef: "cmd-iso",
        kind: "TRAJECTORY",
        objectRef: "traj",
        statement: "Décision applicable du projet A",
      }),
    );
    const proj = await getJournalProjection(pilotA, a.projectId);
    const row = proj.decisions.find((d) => d.id === decisionId);
    expect(row?.applicable).toBe(true);
    expect(row?.state).toBe("APPLICABLE");
  });

  it("J-C07 two preparations linked to same project share knowledge without title merge", async () => {
    const { preparationProjectLinks } = await import("@/db/schema");
    const pilotId = await seedPilot("J-twoprep");
    const first = await seedLinkedProject(pilotId, "Campus deux preps");
    const prep2 = await openOrCreatePreparation(pilotId);
    await db.insert(preparationProjectLinks).values({
      preparationId: prep2.id,
      projectId: first.projectId,
    });

    const subj1 = await ensureSubject(pilotId, first.prep.id, "Réservation salles");
    await capitalizeAcquis(pilotId, first.prep.id, {
      statement: "Acquis capitalisé depuis la première préparation du même projet.",
      kind: "HYPOTHESIS",
      subjectId: subj1.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "observed" },
    });

    const subj2 = await ensureSubject(pilotId, prep2.id, "Réservation salles");
    expect(subj2.subjectId).not.toBe(subj1.subjectId);
    await capitalizeAcquis(pilotId, prep2.id, {
      statement: "Acquis distinct de la seconde préparation, même titre de sujet.",
      kind: "HYPOTHESIS",
      subjectId: subj2.subjectId,
      provenance: { sourceKind: "pilot", epistemic: "observed" },
    });

    const bundle = await listProjectKnowledge(pilotId, first.projectId);
    expect(bundle.preparationIds).toEqual(
      expect.arrayContaining([first.prep.id, prep2.id]),
    );
    expect(bundle.subjects.filter((s) => s.title === "Réservation salles")).toHaveLength(2);
    expect(
      bundle.acquis.some((a) => a.statement.includes("première préparation")),
    ).toBe(true);
    expect(
      bundle.acquis.some((a) => a.statement.includes("seconde préparation")),
    ).toBe(true);

    const foreign = await seedLinkedProject(pilotId, "Autre projet isolé");
    const leak = await listProjectKnowledge(pilotId, foreign.projectId);
    expect(leak.subjects.every((s) => s.title !== "Réservation salles")).toBe(true);
  });

  it("J-C05 refuses resolve on non-AVAILABLE revision (withdrawn/inaccessible)", async () => {
    const { documentRevisions } = await import("@/db/schema");
    const pilotId = await seedPilot("J-irr");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Pertinence source");
    const subj = await ensureSubject(pilotId, prep.id, "Accès SSO");
    const pt = await openPoint(pilotId, prep.id, {
      statement: "Le SSO est-il techniquement confirmé pour CampusFlow?",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-sso" },
    });
    const doc = await savePreparationDocument(
      pilotId,
      prep.id,
      "Note budgétaire hors sujet",
      "# Budget\nDocument réel mais non pertinent pour le SSO.",
      undefined,
      { correlationKey: `irr-doc-${projectId}`, provenance: { sourceKind: "pilot" } },
    );
    if (!("revisionId" in doc) || !doc.revisionId) {
      throw new Error(`expected revisionId, got ${doc.status}`);
    }
    const revisionId = String(doc.revisionId);
    await db
      .update(documentRevisions)
      .set({ status: "FAILED" })
      .where(eq(documentRevisions.id, revisionId));

    const denied = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
      reason: "doc withdrawn",
      provenance: {
        sourceKind: "revision",
        sourceId: revisionId,
        epistemic: "established",
      },
      operationId: `irr-resolve-${pt.openPointId}`,
    });
    expect(denied.status).toBe("FAILED");
    if (denied.status === "FAILED") {
      expect(denied.reason).toBe("DOCUMENT_REVISION_NOT_AVAILABLE");
    }
    const stillOpen = (
      await db.select().from(knowledgeOpenPoints).where(eq(knowledgeOpenPoints.id, pt.openPointId!))
    )[0];
    expect(stillOpen.status).toBe("OPEN");
  });

  it("J-C11 searchJournalDecisions matches explanation-only token", async () => {
    const pilotId = await seedPilot("J-d11");
    const { projectId } = await seedLinkedProject(pilotId, "Recherche décisions");
    const decisionId = await db.transaction(async (tx) =>
      insertHumanDecision(tx, {
        projectId,
        pilotId,
        sourceKind: "pilotage",
        sourceRef: "cmd-d11",
        kind: "TRAJECTORY",
        objectRef: "traj-d11",
        statement: "Acte officiel sans le token exclusif dans le libellé.",
      }),
    );
    await appendDecisionExplanationRevision(pilotId, projectId, decisionId, {
      explanationMarkdown: "Motifs détaillés avec token exclusif multicritèreorion dans l'explication.",
      provenance: { sourceKind: "message", sourceId: "m-d11", epistemic: "observed" },
      operationId: `expl-d11-${decisionId}`,
    });
    const hits = await searchJournalDecisions(pilotId, projectId, "multicritèreorion");
    expect(
      hits.results.some((r) => r.matchKind === "explanation" && r.decisionId === decisionId),
    ).toBe(true);
    // Kind/label alone must not produce a decision hit.
    const miss = await searchJournalDecisions(pilotId, projectId, "TRAJECTORY");
    expect(miss.results.some((r) => r.decisionId === decisionId)).toBe(false);
  });

  it("E06-05 markOpenPointReactivated refuses cross-project same pilot", async () => {
    const pilotId = await seedPilot("J-e605");
    const a = await seedLinkedProject(pilotId, "Projet E605 A");
    const b = await seedLinkedProject(pilotId, "Projet E605 B");
    const subj = await ensureSubject(pilotId, a.prep.id, "Open A");
    const pt = await openPoint(pilotId, a.prep.id, {
      statement: "Point ouvert du projet A uniquement pour scope test.",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-e605" },
    });

    const ok = await markOpenPointReactivated(pilotId, a.projectId, pt.openPointId!, {
      reason: "pertinent",
      provenance: { sourceKind: "nora", generationId: "g-e605" },
      operationId: "react-e605-ok",
    });
    expect(ok.status).toBe("AVAILABLE");

    const before = await db
      .select()
      .from(knowledgeOpenPointEvents)
      .where(eq(knowledgeOpenPointEvents.openPointId, pt.openPointId!));

    const denied = await markOpenPointReactivated(pilotId, b.projectId, pt.openPointId!, {
      reason: "tentative interprojet",
      provenance: { sourceKind: "nora", generationId: "g-e605b" },
      operationId: "react-e605-deny",
    });
    expect(denied.status).toBe("FAILED");

    const after = await db
      .select()
      .from(knowledgeOpenPointEvents)
      .where(eq(knowledgeOpenPointEvents.openPointId, pt.openPointId!));
    expect(after).toHaveLength(before.length);

    const missing = await markOpenPointReactivated(pilotId, a.projectId, "ope_absent", {
      reason: "absent",
      provenance: { sourceKind: "nora", generationId: "g-x" },
      operationId: "react-missing",
    });
    expect(missing.status).toBe("FAILED");

    const replay = await markOpenPointReactivated(pilotId, a.projectId, pt.openPointId!, {
      reason: "retry",
      provenance: { sourceKind: "nora", generationId: "g-e605" },
      operationId: "react-e605-ok",
    });
    expect(replay.status).toBe("AVAILABLE");
    expect("idempotentReplay" in replay && replay.idempotentReplay).toBe(true);
  });

  it("E06-02 synthesis revision history and reactivation negatives", async () => {
    const pilotId = await seedPilot("J-e602");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Mémoire");
    const subj = await ensureSubject(pilotId, prep.id, "Sujet mémoire");
    const r1 = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
      summaryMarkdown: "Première synthèse contextualisée sur le sujet mémoire du projet.",
      provenance: { sourceKind: "nora", generationId: "g1", epistemic: "observed" },
      operationId: "mem-r1",
    });
    expect(r1.status).toBe("AVAILABLE");
    const r2 = await appendSubjectSummaryRevision(pilotId, projectId, subj.subjectId!, {
      summaryMarkdown:
        "Deuxième synthèse corrigée — l'information antérieure est revue sans perte d'historique.",
      provenance: { sourceKind: "nora", generationId: "g2", epistemic: "observed" },
      operationId: "mem-r2",
    });
    expect(r2.status).toBe("AVAILABLE");
    const current = await getCurrentSubjectSummary(pilotId, projectId, subj.subjectId!);
    expect(current.summary?.revisionNumber).toBe(2);
    expect(current.summary?.summaryMarkdown).toContain("Deuxième");

    await openPoint(pilotId, prep.id, {
      statement: "Question ancienne sur la latence du pipeline de capitalisation durable?",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-mem" },
    });
    const hit = await selectOpenPointsForReactivation(
      pilotId,
      projectId,
      "On reparle de la latence du pipeline",
    );
    expect(hit.candidates.length).toBeGreaterThan(0);
    const miss = await selectOpenPointsForReactivation(
      pilotId,
      projectId,
      "Sujet totalement orthogonal cuisine italienne",
    );
    expect(miss.candidates.every((c) => !c.statement.includes("latence"))).toBe(true);
  });

  it("SUBJECT proposal writes durable summary + compact acquis; correction supersedes prior", async () => {
    const pilotId = await seedPilot("J-cap-summary");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Cap synthèse");
    const gen1 = "gen-cap-summary-1";
    const msg1 = "msg-cap-summary-1";
    const first = await maybeCapitalizeFromExchange(pilotId, prep.id, {
      userText: "Inventaire Lille et responsabilités",
      assistantText: "Synthèse proposée.",
      generationId: gen1,
      userMessageId: msg1,
      proposals: [
        {
          intentId: "i-subj",
          kind: "SUBJECT",
          statement:
            "## Sens\nParcours réservation multi-centres.\n\n## Acquis\nLille: 12 portables, 9 opérationnels.\n\n## Ouvert\nQui gère les prêts demain?",
          epistemic: "recommended",
          subjectTitle: "Parcours de réservation",
          continuityReason: "thème structurant",
        },
        {
          intentId: "i-acq",
          kind: "ACQUIS",
          statement:
            "Selon le Pilote, le centre de Lille dispose de 12 ordinateurs portables dont 3 en maintenance et 9 opérationnels selon le dernier inventaire transmis.",
          epistemic: "established",
          subjectTitle: "Parcours de réservation",
          continuityReason: "inventaire",
        },
      ],
    });
    expect(first.ownershipLost).toBe(false);
    expect(first.capitalisations.some((c) => c.kind === "subject")).toBe(true);
    expect(first.capitalisations.some((c) => c.kind === "subject_summary")).toBe(true);
    expect(first.capitalisations.some((c) => c.kind === "acquis" && c.status === "AVAILABLE")).toBe(
      true,
    );

    const summary = await getCurrentSubjectSummary(
      pilotId,
      projectId,
      first.capitalisations.find((c) => c.kind === "subject")!.id!,
    );
    expect(summary.status).toBe("AVAILABLE");
    expect(summary.summary?.summaryMarkdown).toContain("Parcours réservation");

    const bundle = await listProjectKnowledge(pilotId, projectId);
    const currentAcquis = bundle.acquis.filter((a) => a.status === "CURRENT");
    expect(currentAcquis.length).toBeGreaterThanOrEqual(1);
    expect(currentAcquis.every((a) => a.statement.length <= 221)).toBe(true);
    expect(currentAcquis[0]!.statement.toLowerCase()).not.toMatch(/^selon le pilote/);

    const subjectId = first.capitalisations.find((c) => c.kind === "subject")!.id!;
    const priorId = currentAcquis[0]!.id;
    const corrected = await capitalizeAcquis(pilotId, prep.id, {
      statement: "Lille: 12 portables, 2 en maintenance, 10 opérationnels.",
      kind: "HYPOTHESIS",
      subjectId,
      supersedesAcquisId: priorId,
      provenance: {
        sourceKind: "message",
        sourceId: "msg-cap-summary-2",
        generationId: "gen-cap-summary-2",
        epistemic: "hypothesized",
      },
    });
    expect(corrected.status).toBe("AVAILABLE");
    const after = await listProjectKnowledge(pilotId, projectId);
    const curr = after.acquis.filter((a) => a.subjectId === subjectId && a.status === "CURRENT");
    const hist = after.acquis.filter((a) => a.subjectId === subjectId && a.status !== "CURRENT");
    expect(curr.some((a) => a.statement.includes("10 opérationnels"))).toBe(true);
    expect(hist.some((a) => a.id === priorId)).toBe(true);
  });
});