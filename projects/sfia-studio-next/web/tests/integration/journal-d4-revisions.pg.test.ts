import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { humanDecisions, knowledgeOpenPoints, pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { capitalizeAcquis, ensureSubject, openPoint } from "@/domains/knowledge/service";
import {
  appendDecisionExplanationRevision,
  appendSubjectSummaryRevision,
  getCurrentDecisionExplanation,
  getCurrentSubjectSummary,
  listProjectKnowledge,
  reopenOpenPoint,
  reparentSubject,
  resolveOpenPointFactually,
  searchJournalDecisions,
  searchJournalSubjects,
} from "@/domains/knowledge/journal";
import { insertHumanDecision, markDecisionState } from "@/domains/decisions/service";
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
    const resolved = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
      reason: "Documentation officielle citée",
      provenance: { sourceKind: "document", sourceId: "doc-proof-1", epistemic: "established" },
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
});