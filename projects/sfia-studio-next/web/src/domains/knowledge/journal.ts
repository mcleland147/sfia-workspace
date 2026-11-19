import { createHash } from "crypto";
import { and, desc, eq, inArray, isNull, ne, or, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  governanceRestrictions,
  humanDecisions,
  knowledgeAcquis,
  knowledgeDecisionExplanationRevisions,
  knowledgeOpenPointEvents,
  knowledgeOpenPoints,
  knowledgeSubjectEvents,
  knowledgeSubjectSummaryRevisions,
  knowledgeSubjects,
  preparationProjectLinks,
  preparations,
  projects,
} from "@/db/schema";
import type { Provenance } from "@/domains/knowledge/service";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

type Tx = {
  select: typeof db.select;
  insert: typeof db.insert;
  update: typeof db.update;
  execute: typeof db.execute;
};

function provenanceString(p: Provenance): string {
  return JSON.stringify({ ...p, notedAt: p.notedAt ?? new Date().toISOString() });
}

function decisionOfficialFingerprint(decision: {
  id: string;
  state: string;
  kind: string;
  statement: string;
  objectRef: string;
  scope: string;
  effectiveAt: Date;
}): string {
  return createHash("sha256")
    .update(
      JSON.stringify({
        id: decision.id,
        state: decision.state,
        kind: decision.kind,
        statement: decision.statement,
        objectRef: decision.objectRef,
        scope: decision.scope,
        effectiveAt: decision.effectiveAt.toISOString(),
      }),
    )
    .digest("hex");
}

async function assertOwnedProject(pilotId: string, projectId: string) {
  const project = (
    await db
      .select()
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");
  return project;
}

async function linkedPreparationIds(pilotId: string, projectId: string): Promise<string[]> {
  await assertOwnedProject(pilotId, projectId);
  const rows = await db
    .select({ preparationId: preparationProjectLinks.preparationId })
    .from(preparationProjectLinks)
    .innerJoin(preparations, eq(preparations.id, preparationProjectLinks.preparationId))
    .where(
      and(eq(preparationProjectLinks.projectId, projectId), eq(preparations.ownerPilotId, pilotId)),
    );
  return rows.map((r) => r.preparationId);
}

export type JournalSummary = {
  revisionNumber: number;
  summaryMarkdown: string;
  createdAt: Date;
  provenanceJson: string;
} | null;

export async function listProjectKnowledge(pilotId: string, projectId: string) {
  const prepIds = await linkedPreparationIds(pilotId, projectId);
  if (prepIds.length === 0) {
    return {
      preparationIds: [] as string[],
      subjects: [] as typeof knowledgeSubjects.$inferSelect[],
      acquis: [] as typeof knowledgeAcquis.$inferSelect[],
      openPoints: [] as typeof knowledgeOpenPoints.$inferSelect[],
      summariesBySubjectId: {} as Record<string, JournalSummary>,
    };
  }

  const scope = and(
    eq(knowledgeSubjects.ownerPilotId, pilotId),
    inArray(knowledgeSubjects.preparationId, prepIds),
    or(isNull(knowledgeSubjects.projectId), eq(knowledgeSubjects.projectId, projectId)),
    ne(knowledgeSubjects.status, "ARCHIVED"),
  );

  const subjects = await db.select().from(knowledgeSubjects).where(scope).orderBy(desc(knowledgeSubjects.updatedAt));

  const acquis = await db
    .select()
    .from(knowledgeAcquis)
    .where(
      and(
        eq(knowledgeAcquis.ownerPilotId, pilotId),
        inArray(knowledgeAcquis.preparationId, prepIds),
        or(isNull(knowledgeAcquis.projectId), eq(knowledgeAcquis.projectId, projectId)),
      ),
    )
    .orderBy(desc(knowledgeAcquis.createdAt));

  const openPoints = await db
    .select()
    .from(knowledgeOpenPoints)
    .where(
      and(
        eq(knowledgeOpenPoints.ownerPilotId, pilotId),
        inArray(knowledgeOpenPoints.preparationId, prepIds),
        or(isNull(knowledgeOpenPoints.projectId), eq(knowledgeOpenPoints.projectId, projectId)),
      ),
    )
    .orderBy(desc(knowledgeOpenPoints.createdAt));

  const summariesBySubjectId: Record<string, JournalSummary> = {};
  const subjectIds = subjects.map((s) => s.id);
  if (subjectIds.length > 0) {
    const revRows = await db
      .select()
      .from(knowledgeSubjectSummaryRevisions)
      .where(
        and(
          eq(knowledgeSubjectSummaryRevisions.ownerPilotId, pilotId),
          inArray(knowledgeSubjectSummaryRevisions.subjectId, subjectIds),
        ),
      )
      .orderBy(desc(knowledgeSubjectSummaryRevisions.revisionNumber));
    for (const row of revRows) {
      if (summariesBySubjectId[row.subjectId]) continue;
      summariesBySubjectId[row.subjectId] = {
        revisionNumber: row.revisionNumber,
        summaryMarkdown: row.summaryMarkdown,
        createdAt: row.createdAt,
        provenanceJson: row.provenanceJson,
      };
    }
    for (const id of subjectIds) {
      if (!(id in summariesBySubjectId)) summariesBySubjectId[id] = null;
    }
  }

  return { preparationIds: prepIds, subjects, acquis, openPoints, summariesBySubjectId };
}

async function loadOwnedSubjectForProject(
  pilotId: string,
  projectId: string,
  subjectId: string,
  tx: Tx = db,
) {
  const prepIds = await linkedPreparationIds(pilotId, projectId);
  if (prepIds.length === 0) return null;
  return (
    await tx
      .select()
      .from(knowledgeSubjects)
      .where(
        and(
          eq(knowledgeSubjects.id, subjectId),
          eq(knowledgeSubjects.ownerPilotId, pilotId),
          inArray(knowledgeSubjects.preparationId, prepIds),
          or(isNull(knowledgeSubjects.projectId), eq(knowledgeSubjects.projectId, projectId)),
        ),
      )
      .limit(1)
  )[0];
}

export async function getCurrentSubjectSummary(pilotId: string, projectId: string, subjectId: string) {
  const subject = await loadOwnedSubjectForProject(pilotId, projectId, subjectId);
  if (!subject) return { status: "NOT_FOUND" as const };
  const row = (
    await db
      .select()
      .from(knowledgeSubjectSummaryRevisions)
      .where(
        and(
          eq(knowledgeSubjectSummaryRevisions.subjectId, subjectId),
          eq(knowledgeSubjectSummaryRevisions.ownerPilotId, pilotId),
        ),
      )
      .orderBy(desc(knowledgeSubjectSummaryRevisions.revisionNumber))
      .limit(1)
  )[0];
  if (!row) {
    return { status: "AVAILABLE" as const, summary: null };
  }
  return {
    status: "AVAILABLE" as const,
    summary: {
      revisionNumber: row.revisionNumber,
      summaryMarkdown: row.summaryMarkdown,
      createdAt: row.createdAt,
      provenanceJson: row.provenanceJson,
    },
  };
}

export async function appendSubjectSummaryRevision(
  pilotId: string,
  projectId: string,
  subjectId: string,
  input: {
    summaryMarkdown: string;
    provenance: Provenance;
    operationId?: string;
    idempotencyKey?: string;
    expectedRevision?: number;
    sourceFingerprint?: string;
  },
) {
  const markdown = input.summaryMarkdown.trim();
  if (!markdown || markdown.length < 12) {
    return { status: "SKIPPED" as const, reason: "summary too thin for durable revision" };
  }

  const subject = await loadOwnedSubjectForProject(pilotId, projectId, subjectId);
  if (!subject) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  if (subject.status !== "ACTIVE") return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeSubjectSummaryRevisions)
        .where(
          and(
            eq(knowledgeSubjectSummaryRevisions.subjectId, subjectId),
            eq(knowledgeSubjectSummaryRevisions.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return {
        status: "AVAILABLE" as const,
        revisionId: prior.id,
        revisionNumber: prior.revisionNumber,
        idempotentReplay: true as const,
      };
    }
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from knowledge_subjects where id = ${subjectId} and owner_pilot_id = ${pilotId} for update`,
      );
      const current = (
        await tx
          .select({ revisionNumber: knowledgeSubjectSummaryRevisions.revisionNumber })
          .from(knowledgeSubjectSummaryRevisions)
          .where(eq(knowledgeSubjectSummaryRevisions.subjectId, subjectId))
          .orderBy(desc(knowledgeSubjectSummaryRevisions.revisionNumber))
          .limit(1)
      )[0];
      const nextRev = (current?.revisionNumber ?? 0) + 1;
      if (input.expectedRevision != null && input.expectedRevision !== (current?.revisionNumber ?? 0)) {
        return { status: "CONFLICT" as const, reason: "EXPECTED_REVISION_MISMATCH" };
      }
      const id = newId("ksr");
      await tx.insert(knowledgeSubjectSummaryRevisions).values({
        id,
        subjectId,
        preparationId: subject.preparationId,
        projectId,
        ownerPilotId: pilotId,
        revisionNumber: nextRev,
        summaryMarkdown: markdown,
        provenanceJson: provenanceString(input.provenance),
        operationId: input.operationId ?? null,
        idempotencyKey: input.idempotencyKey ?? null,
        expectedRevision: input.expectedRevision ?? null,
        sourceFingerprint: input.sourceFingerprint ?? null,
      });
      return { status: "AVAILABLE" as const, revisionId: id, revisionNumber: nextRev };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "summary revision failed",
    };
  }
}

async function loadOwnedDecision(pilotId: string, projectId: string, decisionId: string) {
  await assertOwnedProject(pilotId, projectId);
  return (
    await db
      .select()
      .from(humanDecisions)
      .where(and(eq(humanDecisions.id, decisionId), eq(humanDecisions.projectId, projectId)))
      .limit(1)
  )[0];
}

export async function getCurrentDecisionExplanation(
  pilotId: string,
  projectId: string,
  decisionId: string,
) {
  const decision = await loadOwnedDecision(pilotId, projectId, decisionId);
  if (!decision) return { status: "NOT_FOUND" as const };
  const fingerprint = decisionOfficialFingerprint(decision);
  const row = (
    await db
      .select()
      .from(knowledgeDecisionExplanationRevisions)
      .where(
        and(
          eq(knowledgeDecisionExplanationRevisions.decisionId, decisionId),
          eq(knowledgeDecisionExplanationRevisions.ownerPilotId, pilotId),
        ),
      )
      .orderBy(desc(knowledgeDecisionExplanationRevisions.revisionNumber))
      .limit(1)
  )[0];
  if (!row) {
    return { status: "AVAILABLE" as const, explanation: null, decisionState: decision.state };
  }
  return {
    status: "AVAILABLE" as const,
    decisionState: decision.state,
    explanation: {
      revisionNumber: row.revisionNumber,
      explanationMarkdown: row.explanationMarkdown,
      officialDecisionFingerprint: row.officialDecisionFingerprint,
      createdAt: row.createdAt,
      provenanceJson: row.provenanceJson,
      potentiallyStale: row.officialDecisionFingerprint !== fingerprint,
    },
  };
}

export async function appendDecisionExplanationRevision(
  pilotId: string,
  projectId: string,
  decisionId: string,
  input: {
    explanationMarkdown: string;
    provenance: Provenance;
    preparationId?: string | null;
    operationId?: string;
    idempotencyKey?: string;
    expectedRevision?: number;
  },
) {
  const markdown = input.explanationMarkdown.trim();
  if (!markdown || markdown.length < 12) {
    return { status: "SKIPPED" as const, reason: "explanation too thin for durable revision" };
  }
  const decision = await loadOwnedDecision(pilotId, projectId, decisionId);
  if (!decision) return { status: "FAILED" as const, reason: "NOT_FOUND" };

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeDecisionExplanationRevisions)
        .where(
          and(
            eq(knowledgeDecisionExplanationRevisions.decisionId, decisionId),
            eq(knowledgeDecisionExplanationRevisions.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return {
        status: "AVAILABLE" as const,
        revisionId: prior.id,
        revisionNumber: prior.revisionNumber,
        idempotentReplay: true as const,
      };
    }
  }

  const fingerprint = decisionOfficialFingerprint(decision);

  try {
    return await db.transaction(async (tx) => {
      const current = (
        await tx
          .select({ revisionNumber: knowledgeDecisionExplanationRevisions.revisionNumber })
          .from(knowledgeDecisionExplanationRevisions)
          .where(eq(knowledgeDecisionExplanationRevisions.decisionId, decisionId))
          .orderBy(desc(knowledgeDecisionExplanationRevisions.revisionNumber))
          .limit(1)
      )[0];
      const nextRev = (current?.revisionNumber ?? 0) + 1;
      if (input.expectedRevision != null && input.expectedRevision !== (current?.revisionNumber ?? 0)) {
        return { status: "CONFLICT" as const, reason: "EXPECTED_REVISION_MISMATCH" };
      }
      const id = newId("der");
      await tx.insert(knowledgeDecisionExplanationRevisions).values({
        id,
        decisionId,
        preparationId: input.preparationId ?? null,
        projectId,
        ownerPilotId: pilotId,
        revisionNumber: nextRev,
        officialDecisionFingerprint: fingerprint,
        explanationMarkdown: markdown,
        provenanceJson: provenanceString(input.provenance),
        operationId: input.operationId ?? null,
        idempotencyKey: input.idempotencyKey ?? null,
        expectedRevision: input.expectedRevision ?? null,
      });
      return { status: "AVAILABLE" as const, revisionId: id, revisionNumber: nextRev };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "explanation revision failed",
    };
  }
}

async function loadOwnedOpenPoint(
  pilotId: string,
  projectId: string,
  openPointId: string,
  tx: Tx = db,
) {
  const prepIds = await linkedPreparationIds(pilotId, projectId);
  if (prepIds.length === 0) return null;
  return (
    await tx
      .select()
      .from(knowledgeOpenPoints)
      .where(
        and(
          eq(knowledgeOpenPoints.id, openPointId),
          eq(knowledgeOpenPoints.ownerPilotId, pilotId),
          inArray(knowledgeOpenPoints.preparationId, prepIds),
        ),
      )
      .limit(1)
  )[0];
}

function provenanceSufficient(p: Provenance): boolean {
  if (p.sourceKind === "pilot" || p.sourceKind === "nora") return Boolean(p.sourceId || p.generationId);
  if (p.sourceKind === "document" || p.sourceKind === "revision" || p.sourceKind === "message") {
    return Boolean(p.sourceId);
  }
  return false;
}

export async function resolveOpenPointFactually(
  pilotId: string,
  projectId: string,
  openPointId: string,
  input: { reason: string; provenance: Provenance; operationId?: string; actorKind?: string },
) {
  if (!provenanceSufficient(input.provenance)) {
    return { status: "FAILED" as const, reason: "INSUFFICIENT_PROVENANCE" };
  }
  const point = await loadOwnedOpenPoint(pilotId, projectId, openPointId);
  if (!point) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  if (point.status === "RESOLVED") {
    return { status: "AVAILABLE" as const, openPointId, alreadyResolved: true as const };
  }

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeOpenPointEvents)
        .where(
          and(
            eq(knowledgeOpenPointEvents.openPointId, openPointId),
            eq(knowledgeOpenPointEvents.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return { status: "AVAILABLE" as const, openPointId, eventId: prior.id, idempotentReplay: true as const };
    }
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from knowledge_open_points where id = ${openPointId} and owner_pilot_id = ${pilotId} for update`,
      );
      const eventId = newId("ope");
      await tx
        .update(knowledgeOpenPoints)
        .set({ status: "RESOLVED", updatedAt: new Date() })
        .where(eq(knowledgeOpenPoints.id, openPointId));
      await tx.insert(knowledgeOpenPointEvents).values({
        id: eventId,
        openPointId,
        preparationId: point.preparationId,
        projectId,
        ownerPilotId: pilotId,
        eventType: "RESOLVED",
        reason: input.reason.trim().slice(0, 500),
        actorKind: input.actorKind ?? "pilot",
        provenanceJson: provenanceString(input.provenance),
        operationId: input.operationId ?? null,
      });
      return { status: "AVAILABLE" as const, openPointId, eventId };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "resolve failed",
    };
  }
}

export async function reopenOpenPoint(
  pilotId: string,
  projectId: string,
  openPointId: string,
  input: { reason: string; provenance: Provenance; operationId?: string; actorKind?: string },
) {
  const point = await loadOwnedOpenPoint(pilotId, projectId, openPointId);
  if (!point) return { status: "FAILED" as const, reason: "NOT_FOUND" };

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeOpenPointEvents)
        .where(
          and(
            eq(knowledgeOpenPointEvents.openPointId, openPointId),
            eq(knowledgeOpenPointEvents.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return { status: "AVAILABLE" as const, openPointId, eventId: prior.id, idempotentReplay: true as const };
    }
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from knowledge_open_points where id = ${openPointId} and owner_pilot_id = ${pilotId} for update`,
      );
      const eventId = newId("ope");
      await tx
        .update(knowledgeOpenPoints)
        .set({ status: "OPEN", updatedAt: new Date() })
        .where(eq(knowledgeOpenPoints.id, openPointId));
      await tx.insert(knowledgeOpenPointEvents).values({
        id: eventId,
        openPointId,
        preparationId: point.preparationId,
        projectId,
        ownerPilotId: pilotId,
        eventType: "REOPENED",
        reason: input.reason.trim().slice(0, 500),
        actorKind: input.actorKind ?? "pilot",
        provenanceJson: provenanceString(input.provenance),
        operationId: input.operationId ?? null,
      });
      return { status: "AVAILABLE" as const, openPointId, eventId };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "reopen failed",
    };
  }
}

async function wouldCreateCycle(
  pilotId: string,
  projectId: string,
  subjectId: string,
  newParentId: string,
): Promise<boolean> {
  if (newParentId === subjectId) return true;
  let current: string | null = newParentId;
  const visited = new Set<string>();
  while (current) {
    if (current === subjectId) return true;
    if (visited.has(current)) return true;
    visited.add(current);
    const row = await loadOwnedSubjectForProject(pilotId, projectId, current);
    if (!row) return true;
    current = row.parentSubjectId;
  }
  return false;
}

export async function reparentSubject(
  pilotId: string,
  projectId: string,
  subjectId: string,
  newParentSubjectId: string | null,
) {
  const subject = await loadOwnedSubjectForProject(pilotId, projectId, subjectId);
  if (!subject) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  if (subject.status !== "ACTIVE") return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };

  if (newParentSubjectId) {
    const parent = await loadOwnedSubjectForProject(pilotId, projectId, newParentSubjectId);
    if (!parent) return { status: "FAILED" as const, reason: "PARENT_NOT_FOUND" };
    if (parent.preparationId !== subject.preparationId) {
      return { status: "FAILED" as const, reason: "CROSS_PREPARATION_PARENT" };
    }
    if (parent.status !== "ACTIVE") return { status: "FAILED" as const, reason: "PARENT_NOT_ACTIVE" };
    if (await wouldCreateCycle(pilotId, projectId, subjectId, newParentSubjectId)) {
      return { status: "FAILED" as const, reason: "CYCLE_OR_INVALID_TREE" };
    }
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from knowledge_subjects where id = ${subjectId} and owner_pilot_id = ${pilotId} for update`,
      );
      await tx
        .update(knowledgeSubjects)
        .set({ parentSubjectId: newParentSubjectId, updatedAt: new Date() })
        .where(eq(knowledgeSubjects.id, subjectId));
      await tx.insert(knowledgeSubjectEvents).values({
        id: newId("sev"),
        preparationId: subject.preparationId,
        ownerPilotId: pilotId,
        subjectId,
        eventType: "REPARENTED",
        payloadJson: JSON.stringify({
          from: subject.parentSubjectId,
          to: newParentSubjectId,
        }),
      });
      return { status: "AVAILABLE" as const, subjectId, parentSubjectId: newParentSubjectId };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "reparent failed",
    };
  }
}

function subjectPathTitles(
  subjectId: string,
  byId: Map<string, { id: string; title: string; parentSubjectId: string | null }>,
): string[] {
  const path: string[] = [];
  let current: string | null = subjectId;
  const guard = new Set<string>();
  while (current && !guard.has(current)) {
    guard.add(current);
    const row = byId.get(current);
    if (!row) break;
    path.unshift(row.title);
    current = row.parentSubjectId;
  }
  return path;
}

export async function searchJournalSubjects(
  pilotId: string,
  projectId: string,
  query: string,
  opts?: { openPointsOnly?: boolean; limit?: number },
) {
  const q = query.trim().toLowerCase();
  const limit = opts?.limit ?? 24;
  const bundle = await listProjectKnowledge(pilotId, projectId);
  if (!q && !opts?.openPointsOnly) {
    return { status: "AVAILABLE" as const, results: [], coverage: "EMPTY_QUERY" as const };
  }

  const byId = new Map(
    bundle.subjects.map((s) => [
      s.id,
      { id: s.id, title: s.title, parentSubjectId: s.parentSubjectId },
    ]),
  );

  type Hit = {
    subjectId: string;
    title: string;
    path: string[];
    matchKind: "title" | "acquis" | "open_point" | "summary";
    snippet: string;
    openPointId?: string;
  };
  const hits: Hit[] = [];

  const seen = new Set<string>();

  const pushHit = (hit: Hit) => {
    const key = `${hit.subjectId}:${hit.matchKind}:${hit.openPointId ?? hit.snippet.slice(0, 40)}`;
    if (seen.has(key)) return;
    seen.add(key);
    hits.push(hit);
  };

  for (const s of bundle.subjects) {
    if (opts?.openPointsOnly) {
      const openForSubject = bundle.openPoints.filter(
        (o) => o.subjectId === s.id && o.status === "OPEN",
      );
      if (openForSubject.length === 0) continue;
      for (const o of openForSubject) {
        if (q && !o.statement.toLowerCase().includes(q) && !s.title.toLowerCase().includes(q)) continue;
        pushHit({
          subjectId: s.id,
          title: s.title,
          path: subjectPathTitles(s.id, byId),
          matchKind: "open_point",
          snippet: o.statement.slice(0, 280),
          openPointId: o.id,
        });
      }
      continue;
    }
    if (q && s.title.toLowerCase().includes(q)) {
      pushHit({
        subjectId: s.id,
        title: s.title,
        path: subjectPathTitles(s.id, byId),
        matchKind: "title",
        snippet: s.title,
      });
    }
    const summary = bundle.summariesBySubjectId[s.id];
    if (q && summary?.summaryMarkdown.toLowerCase().includes(q)) {
      pushHit({
        subjectId: s.id,
        title: s.title,
        path: subjectPathTitles(s.id, byId),
        matchKind: "summary",
        snippet: summary.summaryMarkdown.slice(0, 280),
      });
    }
    for (const a of bundle.acquis) {
      if (a.subjectId !== s.id || a.status !== "CURRENT") continue;
      if (!q || !a.statement.toLowerCase().includes(q)) continue;
      pushHit({
        subjectId: s.id,
        title: s.title,
        path: subjectPathTitles(s.id, byId),
        matchKind: "acquis",
        snippet: a.statement.slice(0, 280),
      });
    }
    for (const o of bundle.openPoints) {
      if (o.subjectId !== s.id || o.status !== "OPEN") continue;
      if (!q || !o.statement.toLowerCase().includes(q)) continue;
      pushHit({
        subjectId: s.id,
        title: s.title,
        path: subjectPathTitles(s.id, byId),
        matchKind: "open_point",
        snippet: o.statement.slice(0, 280),
        openPointId: o.id,
      });
    }
  }

  return {
    status: "AVAILABLE" as const,
    results: hits.slice(0, limit),
    coverage: hits.length === 0 ? ("NONE" as const) : ("PARTIAL" as const),
  };
}

export async function searchJournalDecisions(
  pilotId: string,
  projectId: string,
  query: string,
  opts?: { limit?: number },
) {
  const q = query.trim().toLowerCase();
  const limit = opts?.limit ?? 24;
  if (!q) {
    return { status: "AVAILABLE" as const, results: [], coverage: "EMPTY_QUERY" as const };
  }

  await assertOwnedProject(pilotId, projectId);
  const decisions = await db
    .select()
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId))
    .orderBy(desc(humanDecisions.createdAt));

  type Row = {
    decisionId: string;
    kind: string;
    state: string;
    statement: string;
    matchKind: "statement" | "explanation";
    snippet: string;
    explanationStale?: boolean;
  };
  const results: Row[] = [];

  for (const d of decisions) {
    if (d.statement.toLowerCase().includes(q)) {
      results.push({
        decisionId: d.id,
        kind: d.kind,
        state: d.state,
        statement: d.statement,
        matchKind: "statement",
        snippet: d.statement.slice(0, 280),
      });
    }
    const expl = await getCurrentDecisionExplanation(pilotId, projectId, d.id);
    if (
      expl.status === "AVAILABLE" &&
      expl.explanation?.explanationMarkdown.toLowerCase().includes(q)
    ) {
      results.push({
        decisionId: d.id,
        kind: d.kind,
        state: d.state,
        statement: d.statement,
        matchKind: "explanation",
        snippet: expl.explanation.explanationMarkdown.slice(0, 280),
        explanationStale: expl.explanation.potentiallyStale,
      });
    }
    if (results.length >= limit) break;
  }

  return {
    status: "AVAILABLE" as const,
    results: results.slice(0, limit),
    coverage: results.length === 0 ? ("NONE" as const) : ("PARTIAL" as const),
  };
}

export async function getJournalProjection(pilotId: string, projectId: string) {
  const knowledge = await listProjectKnowledge(pilotId, projectId);
  const decisionRows = await db
    .select({
      id: humanDecisions.id,
      kind: humanDecisions.kind,
      state: humanDecisions.state,
      scope: humanDecisions.scope,
      statement: humanDecisions.statement,
      objectRef: humanDecisions.objectRef,
      sourceKind: humanDecisions.sourceKind,
      sourceRef: humanDecisions.sourceRef,
      effectiveAt: humanDecisions.effectiveAt,
      createdAt: humanDecisions.createdAt,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId))
    .orderBy(desc(humanDecisions.createdAt));

  const decisions = [];
  for (const d of decisionRows) {
    const expl = await getCurrentDecisionExplanation(pilotId, projectId, d.id);
    decisions.push({
      ...d,
      explanation:
        expl.status === "AVAILABLE" && expl.explanation
          ? {
              revisionNumber: expl.explanation.revisionNumber,
              explanationMarkdown: expl.explanation.explanationMarkdown,
              potentiallyStale: expl.explanation.potentiallyStale,
            }
          : null,
    });
  }

  const restrictions = await db
    .select({
      id: governanceRestrictions.id,
      targetKind: governanceRestrictions.targetKind,
      targetRef: governanceRestrictions.targetRef,
      status: governanceRestrictions.status,
      originDecisionId: governanceRestrictions.originDecisionId,
    })
    .from(governanceRestrictions)
    .where(
      and(eq(governanceRestrictions.projectId, projectId), eq(governanceRestrictions.status, "ACTIVE")),
    );

  return { knowledge, decisions, restrictions };
}