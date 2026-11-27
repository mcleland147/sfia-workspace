import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { humanDecisions, preparationProjectLinks, projects } from "@/db/schema";
import { getQualificationProjectionForClient } from "@/domains/pilotage/initial-qualification";
import { listMessages, listTurnProjections } from "@/domains/conversation/service";
import { listDocuments } from "@/domains/document/service";
import { listProjectKnowledge } from "@/domains/knowledge/journal";
import { getPilotageProjection } from "@/domains/pilotage/service";
import { getPreparationContext } from "@/domains/preparation/service";
import {
  countOpenKnowledgePoints,
  countProjectLibraryDocuments,
  filterApplicableHumanDecisions,
  openPointShortTitle,
  projectLibraryDocumentExamples,
} from "@/domains/preparation/project-activity-projection";

/**
 * Owner-scoped project reopen: durable projectId → linked preparation + same thread + documents.
 * Client never supplies preparationId as authority.
 */
export async function getOwnedProjectContext(pilotId: string, projectId: string) {
  const project = (
    await db
      .select()
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];

  if (!project) {
    const err = new Error("NOT_FOUND");
    (err as Error & { code: string }).code = "NOT_FOUND";
    throw err;
  }

  const link = (
    await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.projectId, projectId))
      .limit(1)
  )[0];

  if (!link) {
    const err = new Error("NOT_FOUND");
    (err as Error & { code: string }).code = "NOT_FOUND";
    throw err;
  }

  const ctx = await getPreparationContext(pilotId, link.preparationId);
  const messages = await listMessages(pilotId, link.preparationId);
  const turnProjections = await listTurnProjections(pilotId, link.preparationId);
  const documents = await listDocuments(pilotId, link.preparationId);
  const knowledgeBundle = await listProjectKnowledge(pilotId, projectId);
  const knowledge = {
    preparationIds: knowledgeBundle.preparationIds,
    subjects: knowledgeBundle.subjects.map((s) => ({
      id: s.id,
      title: s.title,
      status: s.status,
      parentSubjectId: s.parentSubjectId,
      originatedFromSubjectId: s.originatedFromSubjectId,
      summary: knowledgeBundle.summariesBySubjectId[s.id] ?? null,
    })),
    acquis: knowledgeBundle.acquis.map((a) => ({
      id: a.id,
      kind: a.kind,
      statement: a.statement,
      status: a.status,
      subjectId: a.subjectId,
    })),
    openPoints: knowledgeBundle.openPoints.map((o) => ({
      id: o.id,
      statement: o.statement,
      shortTitle: openPointShortTitle(o.statement, 72, {
        provenanceJson: o.provenanceJson,
      }),
      status: o.status,
      subjectId: o.subjectId,
    })),
  };
  // E07-COR-02 — GET/lecture only: never kick or process qualification here.
  // E07-FIX-05 — missing op after create still locks Travail (synthetic PENDING gate).
  const initialQualification = await getQualificationProjectionForClient(pilotId, projectId);

  const pilotage = await getPilotageProjection(pilotId, projectId);

  const decisionRows = await db
    .select({
      id: humanDecisions.id,
      statement: humanDecisions.statement,
      state: humanDecisions.state,
      kind: humanDecisions.kind,
      supersedesDecisionId: humanDecisions.supersedesDecisionId,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId))
    .orderBy(desc(humanDecisions.createdAt));

  const applicableDecisions = filterApplicableHumanDecisions(decisionRows);

  const openSubjects = knowledge.subjects.filter((s) => s.status === "ACTIVE");
  const openPointsCount = countOpenKnowledgePoints(knowledge.openPoints);

  const activity = {
    openSubjects: {
      count: openSubjects.length,
      examples: openSubjects.slice(0, 2).map((s) => ({ id: s.id, title: s.title })),
    },
    applicableDecisions: {
      count: applicableDecisions.length,
      examples: applicableDecisions.slice(0, 2).map((d) => ({ id: d.id, statement: d.statement })),
    },
    documentsInProgress: {
      count: countProjectLibraryDocuments(documents),
      examples: projectLibraryDocumentExamples(documents),
    },
    openPointsCount,
  };

  return {
    project,
    preparation: ctx.preparation,
    conversation: ctx.conversation,
    link,
    messages,
    turnProjections,
    documents,
    knowledge,
    pilotage,
    initialQualification,
    activity,
  };
}
